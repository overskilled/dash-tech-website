# Google Meet Booking — Setup Guide

This guide walks you through configuring the Google Meet booking feature on the Dash Tech Africa website. When configured, visitors can book a 30-minute Google Meet consultation directly from the contact page. Calendar invitations are automatically sent to the client and your admin team.

> **The website deploys and runs fine without these keys.** The booking form will show a friendly fallback message asking visitors to contact you directly until you complete this setup.

---

## Prerequisites

- A **Google Workspace** account (e.g., `@dashtechafrica.com`) — free Gmail accounts do not support domain-wide delegation
- Access to the [Google Cloud Console](https://console.cloud.google.com/)
- Admin access to your Google Workspace Admin Console

---

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click the project dropdown (top-left) → **New Project**
3. Name it `dash-tech-website` (or similar)
4. Click **Create**
5. Make sure the new project is selected

---

## Step 2: Enable the Google Calendar API

1. In the Cloud Console, go to **APIs & Services → Library**
2. Search for **Google Calendar API**
3. Click on it → **Enable**

---

## Step 3: Create a Service Account

1. Go to **APIs & Services → Credentials**
2. Click **+ Create Credentials → Service Account**
3. Fill in:
   - Name: `dash-tech-calendar`
   - ID: auto-generated (keep as-is)
4. Click **Create and Continue**
5. Skip the optional roles → Click **Done**

### Generate a Key

1. Click on the service account you just created
2. Go to the **Keys** tab
3. Click **Add Key → Create new key**
4. Choose **JSON** → **Create**
5. A `.json` file will download — keep it safe, you'll need values from it

From the downloaded JSON file, you need:
- `client_email` → this is your `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `private_key` → this is your `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`

---

## Step 4: Enable Domain-Wide Delegation

This allows the service account to create calendar events on behalf of a user in your organization.

### In Google Cloud Console:

1. Go to the service account details
2. Click **Show Advanced Settings** (or find the section)
3. Enable **Domain-wide delegation**
4. Note the **Client ID** (a long number)

### In Google Workspace Admin Console:

1. Go to [admin.google.com](https://admin.google.com)
2. Navigate to **Security → Access and data control → API controls**
3. Click **Manage Domain Wide Delegation**
4. Click **Add new**
5. Enter the **Client ID** from the previous step
6. For OAuth scopes, enter:
   ```
   https://www.googleapis.com/auth/calendar,https://www.googleapis.com/auth/calendar.events
   ```
7. Click **Authorize**

---

## Step 5: Set Environment Variables

Add these to your `.env.local` (local dev) or your hosting platform's environment variables (Vercel, Railway, etc.):

```env
# The service account email from the JSON key file
GOOGLE_SERVICE_ACCOUNT_EMAIL=dash-tech-calendar@your-project.iam.gserviceaccount.com

# The private key from the JSON key file (keep the \n line breaks)
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEv...your-key-here...\n-----END PRIVATE KEY-----\n"

# A Google Workspace user email that the service account will impersonate
# This user's calendar will be used to create events
GOOGLE_CALENDAR_IMPERSONATE_EMAIL=admin@dashtechafrica.com

# Comma-separated admin emails who receive meeting invitations
MEETING_ADMIN_EMAILS=admin1@dashtechafrica.com,admin2@dashtechafrica.com,admin3@dashtechafrica.com
```

### Important Notes on the Private Key

- The private key contains `\n` characters for line breaks — wrap it in **double quotes**
- On some platforms (Vercel), you may need to paste the raw key with actual newlines instead of `\n`
- Never commit this key to git — `.env.local` is already in `.gitignore`

---

## Step 6: Deploy & Test

1. Deploy your application
2. Go to the Contact page
3. Switch to **"Book a Meeting"** mode
4. Fill in the form and submit
5. Check that:
   - A Google Calendar event is created
   - The event has a Google Meet link
   - All attendees (client + admins) receive email invitations

---

## Hosting Platform Configuration

### Vercel

1. Go to your project → **Settings → Environment Variables**
2. Add each variable listed above
3. Redeploy

### Railway

1. Go to your service → **Variables**
2. Add each variable
3. Railway will auto-redeploy

### Docker / Self-hosted

Add the variables to your `docker-compose.yml` or pass them with `-e` flags:

```yaml
environment:
  - GOOGLE_SERVICE_ACCOUNT_EMAIL=...
  - GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=...
  - GOOGLE_CALENDAR_IMPERSONATE_EMAIL=...
  - MEETING_ADMIN_EMAILS=...
```

---

## Troubleshooting

| Issue | Solution |
|---|---|
| "Meeting system not configured" | One or more env vars are missing — check all 4 are set |
| "credentials are invalid" | The private key is malformed — check `\n` handling |
| 403 Forbidden | Domain-wide delegation is not set up, or the scopes are wrong |
| No Meet link generated | Google Meet may not be available on your Workspace plan |
| Events not appearing | Check that `GOOGLE_CALENDAR_IMPERSONATE_EMAIL` is a valid Workspace user |

---

## Security

- The service account JSON key is sensitive — treat it like a password
- Never commit `.env.local` or the JSON key file to version control
- Rotate the key periodically in Google Cloud Console
- The API route validates all inputs before creating events
- Meeting requests are limited to business hours (8AM-6PM WAT)
