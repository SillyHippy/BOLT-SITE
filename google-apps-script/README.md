# Google Apps Script File Upload Setup

This folder contains the code for a Google Apps Script web app that allows clients to upload files directly to your Google Drive.

## How It Works

1. **Client Side**: Users drag-and-drop files in your website form
2. **Files are sent** to Google Apps Script as base64 encoded data
3. **Google Apps Script** saves files to your Google Drive, organized by case number
4. **Confirmation emails** are sent to both the client and you
5. **All uploads are logged** to a Google Sheet for record keeping

## Setup Instructions

### Step 1: Create Google Drive Folder

1. Go to [Google Drive](https://drive.google.com)
2. Create a new folder called "Client Uploads" (or any name you prefer)
3. Right-click the folder → Get link → Copy the folder ID from the URL
   - URL looks like: `https://drive.google.com/drive/folders/1ABC123xyz...`
   - The folder ID is: `1ABC123xyz...`

### Step 2: Create Google Sheet for Logging

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet called "Upload Log"
3. Add these headers in Row 1:
   - A1: Timestamp
   - B1: Client Name
   - C1: Case Number
   - D1: Email
   - E1: File Count
   - F1: File Names
   - G1: File Sizes
   - H1: Notes
   - I1: File URLs
4. Copy the spreadsheet ID from the URL
   - URL looks like: `https://docs.google.com/spreadsheets/d/1DEF456abc.../edit`
   - The spreadsheet ID is: `1DEF456abc...`

### Step 3: Create Google Apps Script Project

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New project"
3. Name your project "JLS File Upload"

### Step 4: Add the Code

1. Delete any default code in `Code.gs`
2. Copy the entire contents of `Code.gs` from this folder and paste it
3. **Update the configuration values at the top:**
   ```javascript
   const FOLDER_ID = 'your-folder-id-here';
   const SPREADSHEET_ID = 'your-spreadsheet-id-here';
   const ADMIN_EMAIL = 'info@justlegalsolutions.org';
   ```

4. Click the "+" next to Files and select "HTML"
5. Name it `Index` (it will become `Index.html`)
6. Copy the entire contents of `Index.html` from this folder and paste it

### Step 5: Deploy as Web App

1. Click "Deploy" → "New deployment"
2. Click the gear icon next to "Select type" → choose "Web app"
3. Configure:
   - Description: "Client File Upload v1"
   - Execute as: **Me** (your Google account)
   - Who has access: **Anyone** (so clients don't need Google accounts)
4. Click "Deploy"
5. **Authorize the app** when prompted (click through the "unsafe" warning - it's your own script)
6. Copy the Web App URL (looks like: `https://script.google.com/macros/s/AKfy.../exec`)

### Step 6: Update Your Website

1. Open `components/ui/footer.tsx`
2. Find this line near the top:
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
   ```
3. Replace with your actual Web App URL:
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfy.../exec";
   ```

### Step 7: Test It!

1. Rebuild and deploy your website
2. Open the form and try uploading a small PDF file
3. Check:
   - ✅ File appears in your Google Drive folder (in a subfolder named after the case number)
   - ✅ Row is added to your Google Sheet log
   - ✅ You receive a notification email
   - ✅ Client receives a confirmation email

## Troubleshooting

### "Exceeded maximum execution time"
Large files (50MB+) may timeout. Solutions:
- Encourage clients to compress files before uploading
- Split large documents into smaller parts

### Files not appearing in Drive
1. Check the FOLDER_ID is correct
2. Make sure you authorized all permissions when deploying
3. Check the Executions log in Apps Script for errors

### Emails not sending
1. Check ADMIN_EMAIL is correct
2. Gmail has daily sending limits (~100 emails/day for personal accounts)
3. Check spam folders

### CORS errors in browser console
This is normal with `no-cors` mode. The upload still works - you just can't read the response.

## File Organization

Files are automatically organized like this:
```
Client Uploads/
├── CJ-2024-001/
│   ├── CJ-2024-001_John_Smith_summons.pdf
│   └── CJ-2024-001_John_Smith_complaint.pdf
├── CJ-2024-002/
│   └── CJ-2024-002_Jane_Doe_motion.docx
```

## Updating the Script

If you make changes:
1. Edit the code in Apps Script
2. Click "Deploy" → "Manage deployments"
3. Click the pencil icon on your deployment
4. Change version to "New version"
5. Click "Deploy"
6. The URL stays the same!

## Security Notes

- Files are stored in YOUR Google Drive (not shared publicly)
- Honeypot field blocks basic spam bots
- File type validation prevents malicious uploads
- All uploads are logged with timestamp and client info
