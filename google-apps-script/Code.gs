/**
 * Google Apps Script - File Upload Web App with Client Portal
 * Just Legal Solutions
 * 
 * FEATURES:
 * - Initial file upload from website form
 * - Secure client portal with unique URL per case
 * - Clients can upload additional files and view their files
 * - Email confirmations from info@justlegalsolutions.org
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com and create a new project
 * 2. Copy this Code.gs content into the script editor
 * 3. Create Index.html and Portal.html files
 * 4. Update the FOLDER_ID and SPREADSHEET_ID below with your actual IDs
 * 5. Deploy as Web App: Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the web app URL and update your website component
 */

// ============ CONFIGURATION - UPDATE THESE VALUES ============
const FOLDER_ID = '1ZB7XTSC_eD6m3F-6_yI2VP065cKEQzVq'; // Parent folder for uploads
const SPREADSHEET_ID = '1t5bQY_HtWsMbZ9j2kFhv8EqeXOA2HYHFcqIL4XGlLsQ'; // For logging uploads
const ADMIN_EMAIL = 'info@justlegalsolutions.org'; // Your notification email
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB in bytes (Google Apps Script limit)
const ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'mp4', 'mov', 'avi', 'webm', 'mkv'];
// ==============================================================

/**
 * Serves the appropriate HTML page based on URL parameters
 * - No params or action=upload → Index.html (initial upload form)
 * - action=portal with caseId and key → Portal.html (client portal)
 */
function doGet(e) {
  try {
    const action = e.parameter.action || 'upload';
    
    if (action === 'portal') {
      const caseId = e.parameter.caseId;
      const key = e.parameter.key;
      
      // Validate portal access
      if (!caseId || !key) {
        return HtmlService.createHtmlOutput(`
          <html><head><style>body{font-family:Arial,sans-serif;max-width:600px;margin:50px auto;padding:20px;}</style></head>
          <body>
            <h1>⚠️ Invalid Portal Link</h1>
            <p>The link is missing required parameters.</p>
            <p><strong>Debug info:</strong></p>
            <pre>caseId: ${caseId || 'MISSING'}\nkey: ${key ? 'PROVIDED' : 'MISSING'}</pre>
            <p>Please use the complete link provided in your confirmation email.</p>
            <p>Contact: <a href="mailto:info@justlegalsolutions.org">info@justlegalsolutions.org</a></p>
          </body></html>
        `).setTitle('Invalid Link - Just Legal Solutions');
      }
      
      // Verify the key matches
      const accessResult = verifyCaseAccessWithDebug(caseId, key);
      if (!accessResult.valid) {
        return HtmlService.createHtmlOutput(`
          <html><head><style>body{font-family:Arial,sans-serif;max-width:600px;margin:50px auto;padding:20px;}</style></head>
          <body>
            <h1>🔒 Access Denied</h1>
            <p>${accessResult.reason}</p>
            <p><strong>Case ID:</strong> ${caseId}</p>
            <p>If you believe this is an error, please contact us at 
            <a href="mailto:info@justlegalsolutions.org">info@justlegalsolutions.org</a> 
            or call (539) 367-6832.</p>
          </body></html>
        `).setTitle('Access Denied - Just Legal Solutions');
      }
      
      // Serve the portal page
      const template = HtmlService.createTemplateFromFile('Portal');
      template.caseId = caseId;
      template.key = key;
      return template.evaluate()
        .setTitle('Client Portal - Just Legal Solutions')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }
    
    // Default: serve the upload form
    return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('File Upload - Just Legal Solutions')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
      
  } catch (error) {
    return HtmlService.createHtmlOutput(`
      <html><head><style>body{font-family:Arial,sans-serif;max-width:600px;margin:50px auto;padding:20px;}</style></head>
      <body>
        <h1>❌ Error</h1>
        <p>An unexpected error occurred.</p>
        <pre>${error.toString()}</pre>
        <p>Please contact <a href="mailto:info@justlegalsolutions.org">info@justlegalsolutions.org</a></p>
      </body></html>
    `).setTitle('Error - Just Legal Solutions');
  }
}

/**
 * Generates a secure random key for portal access
 */
function generateSecretKey() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < 32; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return key;
}

/**
 * Gets or creates a case folder with secret key tracking
 * Returns { folder, secretKey, portalUrl, isNew }
 */
function getOrCreateCaseFolder(caseNumber, clientName) {
  const parentFolder = DriveApp.getFolderById(FOLDER_ID);
  const folderName = `Case-${caseNumber}-${clientName.replace(/\s+/g, '')}`;
  
  // Check if we already have this case in tracking
  const existingKey = getSecretKeyForCase(caseNumber);
  if (existingKey) {
    const folderId = getFolderIdForCase(caseNumber);
    if (folderId) {
      try {
        const folder = DriveApp.getFolderById(folderId);
        const portalUrl = getPortalUrl(caseNumber, existingKey);
        return { folder, secretKey: existingKey, portalUrl, isNew: false };
      } catch (e) {
        // Folder was deleted, create new one
      }
    }
  }
  
  // Check if folder exists by name
  const folders = parentFolder.getFoldersByName(folderName);
  let folder;
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = parentFolder.createFolder(folderName);
    // Make the folder viewable by anyone with the link
    // This way ANY file added to the folder (including manual uploads) is accessible
    folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  }
  
  const secretKey = generateSecretKey();
  
  // Store the case info with secret key
  storeCaseInfo(caseNumber, clientName, secretKey, folder.getId());
  
  const portalUrl = getPortalUrl(caseNumber, secretKey);
  return { folder, secretKey, portalUrl, isNew: true };
}

/**
 * Stores case info in a dedicated sheet for tracking
 */
function storeCaseInfo(caseNumber, clientName, secretKey, folderId) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let casesSheet = ss.getSheetByName('Cases');
    
    // Create Cases sheet if it doesn't exist
    if (!casesSheet) {
      casesSheet = ss.insertSheet('Cases');
      casesSheet.appendRow(['Case Number', 'Client Name', 'Secret Key', 'Folder ID', 'Created', 'Last Access']);
      casesSheet.getRange(1, 1, 1, 6).setFontWeight('bold');
    }
    
    casesSheet.appendRow([caseNumber, clientName, secretKey, folderId, new Date(), new Date()]);
  } catch (e) {
    console.error('Error storing case info:', e);
  }
}

/**
 * Gets the secret key for an existing case
 */
function getSecretKeyForCase(caseNumber) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const casesSheet = ss.getSheetByName('Cases');
    if (!casesSheet) return null;
    
    const data = casesSheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === caseNumber) {
        return data[i][2]; // Secret Key column
      }
    }
  } catch (e) {
    console.error('Error getting secret key:', e);
  }
  return null;
}

/**
 * Verifies if the provided key matches the case
 */
function verifyCaseAccess(caseId, key) {
  const storedKey = getSecretKeyForCase(caseId);
  if (!storedKey) return false;
  
  // Update last access time
  updateLastAccess(caseId);
  
  return storedKey === key;
}

/**
 * Verifies case access with debug info for troubleshooting
 */
function verifyCaseAccessWithDebug(caseId, key) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const casesSheet = ss.getSheetByName('Cases');
    
    if (!casesSheet) {
      return { valid: false, reason: 'The Cases tracking sheet does not exist. Your upload may not have been properly recorded. Please contact support.' };
    }
    
    const data = casesSheet.getDataRange().getValues();
    let foundCase = false;
    let storedKey = null;
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === caseId) {
        foundCase = true;
        storedKey = data[i][2];
        break;
      }
    }
    
    if (!foundCase) {
      return { valid: false, reason: `Case "${caseId}" was not found in our records. The case may have been entered differently or the upload wasn't completed properly.` };
    }
    
    if (!storedKey) {
      return { valid: false, reason: 'No access key found for this case. Please contact support.' };
    }
    
    if (storedKey !== key) {
      return { valid: false, reason: 'The access key does not match. Please use the exact link from your confirmation email.' };
    }
    
    // Update last access time
    updateLastAccess(caseId);
    
    return { valid: true, reason: 'Access granted' };
    
  } catch (e) {
    return { valid: false, reason: 'Error verifying access: ' + e.toString() };
  }
}

/**
 * Updates the last access time for a case
 */
function updateLastAccess(caseNumber) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const casesSheet = ss.getSheetByName('Cases');
    if (!casesSheet) return;
    
    const data = casesSheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === caseNumber) {
        casesSheet.getRange(i + 1, 6).setValue(new Date());
        break;
      }
    }
  } catch (e) {
    console.error('Error updating last access:', e);
  }
}

/**
 * Gets the folder ID for a case
 */
function getFolderIdForCase(caseNumber) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const casesSheet = ss.getSheetByName('Cases');
    if (!casesSheet) return null;
    
    const data = casesSheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === caseNumber) {
        return data[i][3]; // Folder ID column
      }
    }
  } catch (e) {
    console.error('Error getting folder ID:', e);
  }
  return null;
}

/**
 * Generates the portal URL for a case - uses your custom domain
 */
function getPortalUrl(caseNumber, secretKey) {
  // Use your custom domain for cleaner URLs
  const baseUrl = 'https://justlegalsolutions.org/portal';
  return `${baseUrl}?case=${encodeURIComponent(caseNumber)}&key=${encodeURIComponent(secretKey)}`;
}

/**
 * Gets list of files in a case folder (for portal display)
 */
function getFilesForCase(caseId, key) {
  if (!verifyCaseAccess(caseId, key)) {
    return { success: false, error: 'Access denied' };
  }
  
  try {
    const folderId = getFolderIdForCase(caseId);
    if (!folderId) {
      return { success: false, error: 'Case folder not found' };
    }
    
    const folder = DriveApp.getFolderById(folderId);
    const files = folder.getFiles();
    const fileList = [];
    
    while (files.hasNext()) {
      const file = files.next();
      fileList.push({
        id: file.getId(),
        name: file.getName(),
        size: formatBytes(file.getSize()),
        date: file.getDateCreated().toLocaleDateString(),
        url: file.getUrl(),
        mimeType: file.getMimeType()
      });
    }
    
    // Sort by date, newest first
    fileList.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    return { success: true, files: fileList };
  } catch (e) {
    console.error('Error getting files:', e);
    return { success: false, error: 'Error loading files' };
  }
}

/**
 * Uploads files from the client portal
 */
function uploadFromPortal(data) {
  try {
    const caseId = data.caseId;
    const key = data.key;
    const files = data.files || [];
    
    if (!verifyCaseAccess(caseId, key)) {
      return { success: false, error: 'Access denied' };
    }
    
    if (files.length === 0) {
      return { success: false, error: 'No files to upload' };
    }
    
    const folderId = getFolderIdForCase(caseId);
    if (!folderId) {
      return { success: false, error: 'Case folder not found' };
    }
    
    const folder = DriveApp.getFolderById(folderId);
    const uploadedFiles = [];
    const errors = [];
    
    for (const file of files) {
      try {
        const extension = getFileExtension(file.name).toLowerCase();
        if (!ALLOWED_EXTENSIONS.includes(extension)) {
          errors.push(`${file.name}: File type not allowed`);
          continue;
        }
        
        const fileSize = getBase64Size(file.data);
        if (fileSize > MAX_FILE_SIZE) {
          errors.push(`${file.name}: File too large (max 50MB)`);
          continue;
        }
        
        const blob = Utilities.newBlob(
          Utilities.base64Decode(file.data.split(',')[1]),
          file.type,
          file.name
        );
        
        const uploadedFile = folder.createFile(blob);
        
        // Make file viewable by anyone with the link (no sign-in required)
        uploadedFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        
        uploadedFiles.push({
          name: file.name,
          size: formatBytes(fileSize),
          url: uploadedFile.getUrl()
        });
      } catch (fileError) {
        errors.push(`${file.name}: ${fileError.message}`);
      }
    }
    
    if (uploadedFiles.length > 0) {
      // Notify admin of new upload
      sendPortalUploadNotification(caseId, uploadedFiles);
    }
    
    return {
      success: true,
      uploadedFiles: uploadedFiles,
      errors: errors,
      message: `Uploaded ${uploadedFiles.length} file(s)`
    };
  } catch (e) {
    console.error('Portal upload error:', e);
    return { success: false, error: 'Upload failed: ' + e.message };
  }
}

/**
 * Sends notification when client uploads via portal
 */
function sendPortalUploadNotification(caseId, files) {
  try {
    const fileList = files.map(f => `• ${f.name} (${f.size})`).join('\n');
    
    GmailApp.sendEmail(ADMIN_EMAIL, 
      `📁 Portal Upload - Case #${caseId}`,
      `New files uploaded via Client Portal\n\nCase: ${caseId}\nFiles:\n${fileList}`,
      {
        from: 'info@justlegalsolutions.org',
        name: 'JLS Client Portal'
      }
    );
  } catch (e) {
    console.error('Error sending portal notification:', e);
  }
}

/**
 * Process upload from the HTML form (called by google.script.run)
 */
function processUpload(data) {
  try {
    // Honeypot spam check
    if (data.website && data.website.trim() !== '') {
      return { success: false, error: 'Spam detected' };
    }
    
    const clientName = sanitizeInput(data.clientName);
    const caseNumber = sanitizeInput(data.caseNumber);
    const email = sanitizeInput(data.email);
    const notes = sanitizeInput(data.notes || '');
    const files = data.files || [];
    
    // Validate required fields
    if (!clientName || !caseNumber || !email) {
      return { success: false, error: 'Client name, case number, and email are required' };
    }
    
    if (!isValidEmail(email)) {
      return { success: false, error: 'Invalid email address' };
    }
    
    if (files.length === 0) {
      return { success: false, error: 'No files to upload' };
    }
    
    // Get or create case folder with portal access
    const caseInfo = getOrCreateCaseFolder(caseNumber, clientName);
    const caseFolder = caseInfo.folder;
    const portalUrl = caseInfo.portalUrl;
    
    const uploadedFiles = [];
    const errors = [];
    
    // Process each file
    for (const file of files) {
      try {
        const extension = getFileExtension(file.name).toLowerCase();
        if (!ALLOWED_EXTENSIONS.includes(extension)) {
          errors.push(`${file.name}: File type not allowed. Allowed: ${ALLOWED_EXTENSIONS.join(', ')}`);
          continue;
        }
        
        const fileSize = getBase64Size(file.data);
        if (fileSize > MAX_FILE_SIZE) {
          errors.push(`${file.name}: File too large (max 50MB)`);
          continue;
        }
        
        const blob = Utilities.newBlob(
          Utilities.base64Decode(file.data.split(',')[1]),
          file.type,
          `${caseNumber}_${clientName.replace(/\s+/g, '_')}_${file.name}`
        );
        
        const uploadedFile = caseFolder.createFile(blob);
        
        // Make file viewable by anyone with the link (no sign-in required)
        uploadedFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        
        uploadedFiles.push({
          name: file.name,
          newName: uploadedFile.getName(),
          size: fileSize,
          url: uploadedFile.getUrl()
        });
      } catch (fileError) {
        errors.push(`${file.name}: ${fileError.message}`);
      }
    }
    
    if (uploadedFiles.length > 0) {
      // Log to spreadsheet
      logUpload(clientName, caseNumber, email, notes, uploadedFiles);
      
      // Send emails with portal link
      sendClientConfirmation(email, clientName, caseNumber, uploadedFiles, portalUrl);
      sendAdminNotification(clientName, caseNumber, email, notes, uploadedFiles, portalUrl);
    }
    
    return {
      success: true,
      uploadedFiles: uploadedFiles,
      errors: errors,
      portalUrl: portalUrl,
      message: `Successfully uploaded ${uploadedFiles.length} file(s)${errors.length > 0 ? ` with ${errors.length} error(s)` : ''}`
    };
  } catch (error) {
    return { success: false, error: 'Server error: ' + error.message };
  }
}

/**
 * Handles file uploads via POST (for external API calls)
 */
function doPost(e) {
  try {
    let data;
    
    if (e.parameter && e.parameter.payload) {
      data = JSON.parse(e.parameter.payload);
    } else if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        success: false, error: 'No data received'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Honeypot spam check
    if (data.website && data.website.trim() !== '') {
      return ContentService.createTextOutput(JSON.stringify({
        success: false, error: 'Spam detected'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    const clientName = sanitizeInput(data.clientName);
    const caseNumber = sanitizeInput(data.caseNumber);
    const email = sanitizeInput(data.email);
    const notes = sanitizeInput(data.notes || '');
    const files = data.files || [];
    
    if (!clientName || !caseNumber || !email) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false, error: 'Client name, case number, and email are required'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    if (!isValidEmail(email)) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false, error: 'Invalid email address'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    if (files.length === 0) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false, error: 'No files to upload'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get or create case folder with portal access
    const caseInfo = getOrCreateCaseFolder(caseNumber, clientName);
    const caseFolder = caseInfo.folder;
    const portalUrl = caseInfo.portalUrl;
    
    const uploadedFiles = [];
    const errors = [];
    
    for (const file of files) {
      try {
        const extension = getFileExtension(file.name).toLowerCase();
        if (!ALLOWED_EXTENSIONS.includes(extension)) {
          errors.push(`${file.name}: File type not allowed`);
          continue;
        }
        
        const fileSize = getBase64Size(file.data);
        if (fileSize > MAX_FILE_SIZE) {
          errors.push(`${file.name}: File too large (max 50MB)`);
          continue;
        }
        
        const blob = Utilities.newBlob(
          Utilities.base64Decode(file.data.split(',')[1]),
          file.type,
          `${caseNumber}_${clientName.replace(/\s+/g, '_')}_${file.name}`
        );
        
        const uploadedFile = caseFolder.createFile(blob);
        
        // Make file viewable by anyone with the link (no sign-in required)
        uploadedFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        
        uploadedFiles.push({
          name: file.name,
          newName: uploadedFile.getName(),
          size: fileSize,
          url: uploadedFile.getUrl()
        });
      } catch (fileError) {
        errors.push(`${file.name}: ${fileError.message}`);
      }
    }
    
    if (uploadedFiles.length > 0) {
      logUpload(clientName, caseNumber, email, notes, uploadedFiles);
      sendClientConfirmation(email, clientName, caseNumber, uploadedFiles, portalUrl);
      sendAdminNotification(clientName, caseNumber, email, notes, uploadedFiles, portalUrl);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      uploadedFiles: uploadedFiles,
      errors: errors,
      portalUrl: portalUrl,
      message: `Successfully uploaded ${uploadedFiles.length} file(s)`
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false, error: 'Server error: ' + error.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Logs upload to Google Sheets
 */
function logUpload(clientName, caseNumber, email, notes, files) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName('Uploads');
    if (!sheet) {
      sheet = ss.getActiveSheet();
      sheet.setName('Uploads');
    }
    
    const timestamp = new Date();
    const fileNames = files.map(f => f.newName).join(', ');
    const fileSizes = files.map(f => formatBytes(f.size)).join(', ');
    const fileUrls = files.map(f => f.url).join('\n');
    
    sheet.appendRow([
      timestamp,
      clientName,
      caseNumber,
      email,
      files.length,
      fileNames,
      fileSizes,
      notes,
      fileUrls
    ]);
  } catch (e) {
    console.error('Error logging to sheet:', e);
  }
}

/**
 * Sends confirmation email to client with portal link
 */
function sendClientConfirmation(email, clientName, caseNumber, files, portalUrl) {
  console.log('=== SENDING CLIENT CONFIRMATION ===');
  console.log('To:', email);
  console.log('Client:', clientName);
  console.log('Case:', caseNumber);
  console.log('Portal URL:', portalUrl);
  
  try {
    const fileList = files.map(f => `• ${f.name}`).join('\n');
    
    const subject = `File Upload Confirmation - Case #${caseNumber} - Just Legal Solutions`;
    const body = `Dear ${clientName},

Thank you for uploading your documents to Just Legal Solutions.

UPLOAD SUMMARY
==============
Case Number: ${caseNumber}
Files Received: ${files.length}

${fileList}

YOUR SECURE CLIENT PORTAL
=========================
You can upload additional files or view your uploaded documents anytime using your secure portal link:

${portalUrl}

⚠️ Keep this link private - it provides direct access to your case files.

If you have any questions, please contact us at info@justlegalsolutions.org or call (539) 367-6832.

Thank you for choosing Just Legal Solutions.

Best regards,
Just Legal Solutions
Oklahoma's Trusted Legal Document Experts

---
This is an automated confirmation. Please do not reply to this email.`;

    GmailApp.sendEmail(email, subject, body, {
      from: 'info@justlegalsolutions.org',
      name: 'Just Legal Solutions',
      replyTo: 'info@justlegalsolutions.org'
    });
    console.log('Client confirmation with portal link sent to:', email);
  } catch (e) {
    console.error('Error sending client email:', e);
    // Try sending without options as fallback
    try {
      GmailApp.sendEmail(email, subject, body);
      console.log('Client email sent (fallback method) to:', email);
    } catch (e2) {
      console.error('Fallback email also failed:', e2);
    }
  }
}

/**
 * Sends notification email to admin
 */
function sendAdminNotification(clientName, caseNumber, email, notes, files, portalUrl) {
  try {
    const fileList = files.map(f => `• ${f.newName} (${formatBytes(f.size)})\n  ${f.url}`).join('\n\n');
    
    const subject = `📁 New File Upload - Case #${caseNumber} from ${clientName}`;
    const body = `NEW FILE UPLOAD RECEIVED
========================

Client Name: ${clientName}
Case Number: ${caseNumber}
Email: ${email}
${notes ? `Notes: ${notes}\n` : ''}
Files Uploaded: ${files.length}

FILE DETAILS
============
${fileList}

CLIENT PORTAL
=============
${portalUrl}

---
Uploaded via Just Legal Solutions website`;

    GmailApp.sendEmail(ADMIN_EMAIL, subject, body, {
      from: 'info@justlegalsolutions.org',
      name: 'JLS Upload System'
    });
    console.log('Admin notification sent to:', ADMIN_EMAIL);
  } catch (e) {
    console.error('Error sending admin email:', e);
  }
}

/**
 * Utility functions
 */
function sanitizeInput(input) {
  if (!input) return '';
  return input.toString().trim().replace(/[<>]/g, '');
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getFileExtension(filename) {
  return filename.split('.').pop() || '';
}

function getBase64Size(base64String) {
  // Remove data URL prefix if present
  const base64 = base64String.split(',')[1] || base64String;
  return Math.round((base64.length * 3) / 4);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * TEST FUNCTION - Test the portal system
 */
function testPortalSystem() {
  console.log('=== PORTAL SYSTEM TEST ===');
  
  // Test folder creation with portal
  const testCase = getOrCreateCaseFolder('TEST-001', 'Test Client');
  console.log('Folder created:', testCase.folder.getName());
  console.log('Secret Key:', testCase.secretKey);
  console.log('Portal URL:', testCase.portalUrl);
  console.log('Is New:', testCase.isNew);
  
  // Test verification
  const verified = verifyCaseAccess('TEST-001', testCase.secretKey);
  console.log('Access verified:', verified);
  
  console.log('=== TEST COMPLETE ===');
}

/**
 * TEST FUNCTION - Test email sending from alias
 */
function testEmailSending() {
  const testEmail = 'iannazzi@alumni.nsuok.edu';
  
  console.log('=== EMAIL TEST FROM ALIAS ===');
  
  try {
    const aliases = GmailApp.getAliases();
    console.log('Available aliases:', JSON.stringify(aliases));
  } catch (e) {
    console.log('Error getting aliases:', e.message);
  }
  
  try {
    GmailApp.sendEmail(testEmail, 
      'JLS Portal Test - ' + new Date().toLocaleString(),
      'This is a test email FROM info@justlegalsolutions.org with Client Portal system.',
      {
        from: 'info@justlegalsolutions.org',
        name: 'Just Legal Solutions'
      }
    );
    console.log('Test email sent successfully to:', testEmail);
  } catch (e) {
    console.log('GmailApp.sendEmail FAILED:', e.message);
  }
  
  console.log('=== TEST COMPLETE ===');
}

/**
 * UTILITY: Share all files in a specific case folder
 * Run this to make manually uploaded files (like videos) viewable without sign-in
 * 
 * Usage: Update the caseNumber below and run this function from Apps Script
 */
function shareAllFilesInCase() {
  const caseNumber = 'SC-2025-9376'; // <-- Change this to your case number
  
  console.log('=== SHARING ALL FILES IN CASE: ' + caseNumber + ' ===');
  
  const folderId = getFolderIdForCase(caseNumber);
  if (!folderId) {
    console.log('ERROR: Case folder not found for: ' + caseNumber);
    return;
  }
  
  const folder = DriveApp.getFolderById(folderId);
  const files = folder.getFiles();
  let count = 0;
  
  while (files.hasNext()) {
    const file = files.next();
    try {
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      console.log('Shared: ' + file.getName());
      count++;
    } catch (e) {
      console.log('Error sharing ' + file.getName() + ': ' + e.message);
    }
  }
  
  console.log('=== DONE: Shared ' + count + ' files ===');
}

/**
 * UTILITY: Share ALL files in ALL case folders
 * Run this once to make all existing files viewable without sign-in
 */
function shareAllFilesInAllCases() {
  console.log('=== SHARING ALL FILES IN ALL CASE FOLDERS ===');
  
  const parentFolder = DriveApp.getFolderById(FOLDER_ID);
  const subfolders = parentFolder.getFolders();
  let totalFiles = 0;
  let folderCount = 0;
  
  while (subfolders.hasNext()) {
    const folder = subfolders.next();
    const folderName = folder.getName();
    
    if (folderName.startsWith('Case-')) {
      console.log('Processing: ' + folderName);
      folderCount++;
      
      const files = folder.getFiles();
      while (files.hasNext()) {
        const file = files.next();
        try {
          file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
          totalFiles++;
        } catch (e) {
          console.log('Error sharing ' + file.getName() + ': ' + e.message);
        }
      }
    }
  }
  
  console.log('=== DONE: Shared ' + totalFiles + ' files in ' + folderCount + ' folders ===');
}

/**
 * UTILITY: Make ALL case folders public (anyone with link can view)
 * Run this once - after this, any file you manually upload to a case folder
 * will automatically be viewable without sign-in
 */
function makeAllFoldersPublic() {
  console.log('=== MAKING ALL CASE FOLDERS PUBLIC ===');
  
  const parentFolder = DriveApp.getFolderById(FOLDER_ID);
  const subfolders = parentFolder.getFolders();
  let folderCount = 0;
  
  while (subfolders.hasNext()) {
    const folder = subfolders.next();
    const folderName = folder.getName();
    
    if (folderName.startsWith('Case-')) {
      try {
        folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        console.log('Made public: ' + folderName);
        folderCount++;
      } catch (e) {
        console.log('Error with ' + folderName + ': ' + e.message);
      }
    }
  }
  
  console.log('=== DONE: Made ' + folderCount + ' folders public ===');
  console.log('Now any file you upload to these folders will be viewable without sign-in!');
}
