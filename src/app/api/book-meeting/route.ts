import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

// Admin emails that receive meeting invitations for approval
const ADMIN_EMAILS = (process.env.MEETING_ADMIN_EMAILS || "").split(",").filter(Boolean);

// Google service account credentials (stored in env)
function getAuth() {
  const credentials = {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
  };

  if (!credentials.client_email || !credentials.private_key) {
    throw new Error("Google service account credentials not configured");
  }

  return new google.auth.JWT(
    credentials.client_email,
    undefined,
    credentials.private_key,
    [
      "https://www.googleapis.com/auth/calendar",
      "https://www.googleapis.com/auth/calendar.events",
    ],
    // Impersonate this user (must be a Google Workspace user who granted domain-wide delegation)
    process.env.GOOGLE_CALENDAR_IMPERSONATE_EMAIL
  );
}

export async function POST(request: NextRequest) {
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

    if (ADMIN_EMAILS.length === 0) {
      return NextResponse.json(
        { error: "Meeting system not configured. Please contact us directly." },
        { status: 503 }
      );
    }

    const auth = getAuth();
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
      sendUpdates: "all", // Send email invitations to all attendees
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
      message: "Meeting scheduled successfully. Calendar invitations have been sent to all participants.",
    });
  } catch (error: unknown) {
    console.error("Meeting booking error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Failed to schedule meeting";

    // Don't expose internal errors to client
    if (errorMessage.includes("credentials")) {
      return NextResponse.json(
        { error: "Meeting system is not configured. Please contact us at contact@dashtechafrica.com" },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Failed to schedule meeting. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
