/**
 * Google Apps Script - File Upload Web App for Just Legal Solutions
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com and create a new project
 * 2. Copy this Code.gs content into the script editor
 * 3. Create a new HTML file called "Index.html" and copy the Index.html content
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
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB in bytes
const ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png'];
// ==============================================================

/**
 * Serves the HTML page
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('File Upload - Just Legal Solutions')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Process upload from the HTML form (called by google.script.run)
 */
function processUpload(data) {
  try {
    // Honeypot spam check
    if (data.website && data.website.trim() !== '') {
      return {
        success: false,
        error: 'Spam detected'
      };
    }
    
    const clientName = sanitizeInput(data.clientName);
    const caseNumber = sanitizeInput(data.caseNumber);
    const email = sanitizeInput(data.email);
    const notes = sanitizeInput(data.notes || '');
    const files = data.files || [];
    
    // Validate required fields
    if (!clientName || !caseNumber || !email) {
      return {
        success: false,
        error: 'Client name, case number, and email are required'
      };
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
      return {
        success: false,
        error: 'Invalid email address'
      };
    }
    
    if (files.length === 0) {
      return {
        success: false,
        error: 'No files to upload'
      };
    }
    
    // Get or create case folder
    const parentFolder = DriveApp.getFolderById(FOLDER_ID);
    const caseFolder = getOrCreateFolder(parentFolder, caseNumber);
    
    const uploadedFiles = [];
    const errors = [];
    
    // Process each file
    for (const file of files) {
      try {
        // Validate file extension
        const extension = getFileExtension(file.name).toLowerCase();
        if (!ALLOWED_EXTENSIONS.includes(extension)) {
          errors.push(`${file.name}: File type not allowed. Allowed: ${ALLOWED_EXTENSIONS.join(', ')}`);
          continue;
        }
        
        // Validate file size
        const fileSize = getBase64Size(file.data);
        if (fileSize > MAX_FILE_SIZE) {
          errors.push(`${file.name}: File too large (max 100MB)`);
          continue;
        }
        
        // Decode base64 and create file
        const blob = Utilities.newBlob(
          Utilities.base64Decode(file.data.split(',')[1]),
          file.type,
          `${caseNumber}_${clientName.replace(/\s+/g, '_')}_${file.name}`
        );
        
        const uploadedFile = caseFolder.createFile(blob);
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
      
      // Send emails
      sendClientConfirmation(email, clientName, caseNumber, uploadedFiles);
      sendAdminNotification(clientName, caseNumber, email, notes, uploadedFiles);
    }
    
    return {
      success: true,
      uploadedFiles: uploadedFiles,
      errors: errors,
      message: `Successfully uploaded ${uploadedFiles.length} file(s)${errors.length > 0 ? ` with ${errors.length} error(s)` : ''}`
    };
    
  } catch (error) {
    return {
      success: false,
      error: 'Server error: ' + error.message
    };
  }
}

/**
 * Handles file uploads via POST (for external API calls)
 * Supports both JSON body and form-encoded payload
 */
function doPost(e) {
  try {
    let data;
    
    // Handle both form-encoded and JSON body
    if (e.parameter && e.parameter.payload) {
      // Form-based submission (bypasses CORS)
      data = JSON.parse(e.parameter.payload);
    } else if (e.postData && e.postData.contents) {
      // Direct JSON POST
      data = JSON.parse(e.postData.contents);
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'No data received'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Honeypot spam check
    if (data.website && data.website.trim() !== '') {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Spam detected'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    const clientName = sanitizeInput(data.clientName);
    const caseNumber = sanitizeInput(data.caseNumber);
    const email = sanitizeInput(data.email);
    const notes = sanitizeInput(data.notes || '');
    const files = data.files || [];
    
    // Validate required fields
    if (!clientName || !caseNumber || !email) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Client name, case number, and email are required'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Invalid email address'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    if (files.length === 0) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'No files to upload'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get or create case folder
    const parentFolder = DriveApp.getFolderById(FOLDER_ID);
    const caseFolder = getOrCreateFolder(parentFolder, caseNumber);
    
    const uploadedFiles = [];
    const errors = [];
    
    // Process each file
    for (const file of files) {
      try {
        // Validate file extension
        const extension = getFileExtension(file.name).toLowerCase();
        if (!ALLOWED_EXTENSIONS.includes(extension)) {
          errors.push(`${file.name}: File type not allowed. Allowed: ${ALLOWED_EXTENSIONS.join(', ')}`);
          continue;
        }
        
        // Validate file size
        const fileSize = getBase64Size(file.data);
        if (fileSize > MAX_FILE_SIZE) {
          errors.push(`${file.name}: File too large (max 100MB)`);
          continue;
        }
        
        // Decode base64 and create file
        const blob = Utilities.newBlob(
          Utilities.base64Decode(file.data.split(',')[1]),
          file.type,
          `${caseNumber}_${clientName.replace(/\s+/g, '_')}_${file.name}`
        );
        
        const uploadedFile = caseFolder.createFile(blob);
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
      
      // Send emails
      sendClientConfirmation(email, clientName, caseNumber, uploadedFiles);
      sendAdminNotification(clientName, caseNumber, email, notes, uploadedFiles);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      uploadedFiles: uploadedFiles,
      errors: errors,
      message: `Successfully uploaded ${uploadedFiles.length} file(s)${errors.length > 0 ? ` with ${errors.length} error(s)` : ''}`
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: 'Server error: ' + error.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Gets or creates a subfolder by name
 */
function getOrCreateFolder(parentFolder, folderName) {
  const folders = parentFolder.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next();
  }
  return parentFolder.createFolder(folderName);
}

/**
 * Logs upload to Google Sheets
 */
function logUpload(clientName, caseNumber, email, notes, files) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
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
 * Sends confirmation email to client FROM info@justlegalsolutions.org
 */
function sendClientConfirmation(email, clientName, caseNumber, files) {
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

We have received your documents and will process them shortly. If you have any questions, please contact us at info@justlegalsolutions.org or call (539) 367-6832.

Thank you for choosing Just Legal Solutions.

Best regards,
Just Legal Solutions
Oklahoma's Trusted Legal Document Experts

---
This is an automated confirmation. Please do not reply to this email.`;

    // Send from info@justlegalsolutions.org alias using GmailApp
    GmailApp.sendEmail(email, subject, body, {
      from: 'info@justlegalsolutions.org',
      name: 'Just Legal Solutions'
    });
    console.log('Client confirmation email sent from info@justlegalsolutions.org to:', email);
  } catch (e) {
    console.error('Error sending client email:', e);
  }
}

/**
 * Sends notification email to admin FROM info@justlegalsolutions.org
 */
function sendAdminNotification(clientName, caseNumber, email, notes, files) {
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

---
Uploaded via Just Legal Solutions website`;

    // Send from info@justlegalsolutions.org alias using GmailApp
    GmailApp.sendEmail(ADMIN_EMAIL, subject, body, {
      from: 'info@justlegalsolutions.org',
      name: 'JLS Upload System'
    });
    console.log('Admin notification sent from info@justlegalsolutions.org to:', ADMIN_EMAIL);
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
 * TEST FUNCTION - Run this manually to test email sending FROM ALIAS
 * In Apps Script: Select this function from dropdown and click Run
 */
function testEmailSending() {
  const testEmail = 'iannazzi@alumni.nsuok.edu'; // Your test email
  
  console.log('=== EMAIL TEST FROM ALIAS ===');
  
  // Check aliases
  try {
    const aliases = GmailApp.getAliases();
    console.log('Available aliases:', JSON.stringify(aliases));
  } catch (e) {
    console.log('Error getting aliases:', e.message);
  }
  
  // Try sending test email via GmailApp FROM info@justlegalsolutions.org
  try {
    GmailApp.sendEmail(testEmail, 
      'JLS Alias Test - ' + new Date().toLocaleString(),
      'This is a test email FROM info@justlegalsolutions.org.\n\nIf you receive this FROM that address, alias email is working!',
      {
        from: 'info@justlegalsolutions.org',
        name: 'Just Legal Solutions'
      }
    );
    console.log('Test email sent successfully via GmailApp FROM info@justlegalsolutions.org to:', testEmail);
  } catch (e) {
    console.log('GmailApp.sendEmail FROM ALIAS FAILED:', e.message);
  }
  
  console.log('=== TEST COMPLETE ===');
}
