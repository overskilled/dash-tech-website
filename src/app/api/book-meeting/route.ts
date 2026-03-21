import { NextRequest, NextResponse } from "next/server";

// Admin emails that receive meeting invitations for approval
const ADMIN_EMAILS = (process.env.MEETING_ADMIN_EMAILS || "").split(",").filter(Boolean);

function isConfigured(): boolean {
  return !!(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY &&
    ADMIN_EMAILS.length > 0
  );
}

export async function POST(request: NextRequest) {
  // Graceful fallback when Google credentials are not configured
  if (!isConfigured()) {
    return NextResponse.json(
      {
        error:
          "Meeting booking is not yet configured. Please contact us directly at contact@dashtechafrica.com or call +237 6 75 89 63 89.",
        configured: false,
      },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, subject, message, preferredDate, preferredTime } = body;

    // Validate required fields
    if (!name || !email || !subject) {
      return NextResponse.json(
        { error: "Name, email, and subject are required" },
        { status: 400 }
      );
    }

    if (!preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: "Preferred date and time are required for booking" },
        { status: 400 }
      );
    }

    // Dynamic import — only loaded when credentials are configured
    const { google } = await import("googleapis");

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      scopes: [
        "https://www.googleapis.com/auth/calendar",
        "https://www.googleapis.com/auth/calendar.events",
      ],
      subject: process.env.GOOGLE_CALENDAR_IMPERSONATE_EMAIL,
    });

    const calendar = google.calendar({ version: "v3", auth });

    // Build event start/end times (30 min meeting)
    const startDateTime = new Date(`${preferredDate}T${preferredTime}:00`);
    const endDateTime = new Date(startDateTime.getTime() + 30 * 60 * 1000);

    // Build attendee list: client + admins
    const attendees = [
      { email, displayName: name, responseStatus: "needsAction" as const },
      ...ADMIN_EMAILS.map((adminEmail) => ({
        email: adminEmail.trim(),
        responseStatus: "needsAction" as const,
      })),
    ];

    // Build description
    const description = [
      `Meeting requested by: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Subject: ${subject}`,
      "",
      "--- Client Message ---",
      message || "(No additional message)",
      "",
      "---",
      "This meeting was automatically scheduled via dashtechafrica.com.",
      "Please confirm your attendance.",
    ]
      .filter(Boolean)
      .join("\n");

    // Create Google Calendar event with Google Meet
    const event = await calendar.events.insert({
      calendarId: "primary",
      conferenceDataVersion: 1,
      sendUpdates: "all",
      requestBody: {
        summary: `Dash Tech Consultation: ${subject}`,
        description,
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: "Africa/Douala",
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: "Africa/Douala",
        },
        attendees,
        conferenceData: {
          createRequest: {
            requestId: `dashtech-${Date.now()}`,
            conferenceSolutionKey: {
              type: "hangoutsMeet",
            },
          },
        },
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 60 },
            { method: "popup", minutes: 15 },
          ],
        },
        guestsCanModify: false,
        guestsCanInviteOthers: false,
      },
    });

    const meetLink = event.data.conferenceData?.entryPoints?.find(
      (ep) => ep.entryPointType === "video"
    )?.uri;

    return NextResponse.json({
      success: true,
      eventId: event.data.id,
      meetLink: meetLink || null,
      startTime: startDateTime.toISOString(),
      message:
        "Meeting scheduled successfully. Calendar invitations have been sent to all participants.",
    });
  } catch (error: unknown) {
    console.error("Meeting booking error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Failed to schedule meeting";

    if (errorMessage.includes("credentials") || errorMessage.includes("private key")) {
      return NextResponse.json(
        {
          error:
            "Meeting system credentials are invalid. Please contact us at contact@dashtechafrica.com",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Failed to schedule meeting. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
