/**
 * Google Apps Script - File Upload Web App + Helcim Invoice Backend for Just Legal Solutions
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com and open the existing JLS project (or create a new one)
 * 2. Replace the entire Code.gs with this file's contents
 * 3. Make sure Index.html exists for the file-upload UI (unchanged)
 * 4. Update the FOLDER_ID and SPREADSHEET_ID below if they ever change
 * 5. Apps Script editor -> (gear icon) Project Settings -> Script properties:
 *      HELCIM_API_TOKEN              = your existing Helcim API token
 *      HELCIM_WEBHOOK_VERIFIER_TOKEN = (filled in after step 7)
 * 6. Deploy as Web App: Deploy -> Manage deployments -> edit current -> New version -> Deploy
 *      - Execute as: Me
 *      - Who has access: Anyone
 *      - The /exec URL stays the same, so the website needs no change
 * 7. Helcim dashboard -> All Tools -> Integrations -> Webhooks:
 *      - Toggle Webhooks ON
 *      - Deliver URL: paste the Apps Script /exec URL
 *      - Enable the cardTransaction event
 *      - Copy the verifierToken value into the HELCIM_WEBHOOK_VERIFIER_TOKEN script property
 *      - Save
 */

// ============ CONFIGURATION - UPDATE THESE VALUES ============
const FOLDER_ID = '1ZB7XTSC_eD6m3F-6_yI2VP065cKEQzVq'; // Parent folder for uploads
const SPREADSHEET_ID = '1t5bQY_HtWsMbZ9j2kFhv8EqeXOA2HYHFcqIL4XGlLsQ'; // For logging uploads + invoices
const ADMIN_EMAIL = 'info@justlegalsolutions.org'; // Your notification email
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB in bytes
const ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png'];

// Helcim
const HELCIM_API_BASE = 'https://api.helcim.com/v2';
const HELCIM_HOSTED_PAY_BASE = 'https://just-legal-solutions.myhelcim.com/hosted/?token=';
const INVOICES_SHEET_NAME = 'Helcim Invoices';
const INVOICE_SHEET_HEADERS = [
  'Timestamp', 'invoiceNumber', 'invoiceId', 'token', 'caseNumber',
  'customer', 'email', 'amount', 'status', 'datePaid', 'transactionId', 'payLink'
];
// ==============================================================

/**
 * Serves the HTML page (file upload UI)
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
 * doPost router
 *
 * 1. Helcim webhook events (body: { id, type: 'cardTransaction' | 'terminalCancel' })
 *    -> handleHelcimWebhook_
 * 2. Website invoice-create requests (body: { action: 'createInvoice', ... })
 *    -> handleCreateInvoice_
 * 3. Anything else (the existing file-upload payload, with `files: [...]`)
 *    -> handleFileUpload_  (byte-identical to the prior doPost behavior)
 */
function doPost(e) {
  const raw = (e && e.postData && e.postData.contents) ||
              (e && e.parameter && e.parameter.payload) || '{}';
  let data = {};
  try { data = JSON.parse(raw); } catch (_) { data = {}; }

  if (data && (data.type === 'cardTransaction' || data.type === 'terminalCancel')) {
    return handleHelcimWebhook_(e, raw);
  }
  if (data && data.action === 'createInvoice') {
    return handleCreateInvoice_(data);
  }
  return handleFileUpload_(e);
}

/**
 * EXISTING file-upload behavior. Body of the original doPost, unchanged.
 * Handles file uploads via POST (for external API calls).
 * Supports both JSON body and form-encoded payload.
 */
function handleFileUpload_(e) {
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

// =====================================================================
// HELCIM INVOICE INTEGRATION
// =====================================================================

/**
 * Maps the form's service_type radio value to a USD amount.
 * Mirrors the values used in components/ui/footer.tsx (Standard $60 / Rush $100 / Same Day $150).
 * "Other" returns 0 — the placeholder invoice is created and admin sets the real amount in Helcim.
 */
function parseServiceAmount_(serviceType) {
  if (!serviceType) return 0;
  const s = String(serviceType);
  if (s.indexOf('Standard') === 0) return 60;
  if (s.indexOf('Rush') === 0) return 100;
  if (s.indexOf('Same Day') === 0) return 150;
  return 0;
}

/**
 * Helcim expects province/state as a known constant (e.g. "OK"), not full names.
 * Converts common US full-state names to their 2-letter abbreviations.
 */
function normalizeProvince_(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  const upper = raw.toUpperCase();
  if (/^[A-Z]{2}$/.test(upper)) return upper;

  const map = {
    ALABAMA: 'AL', ALASKA: 'AK', ARIZONA: 'AZ', ARKANSAS: 'AR', CALIFORNIA: 'CA',
    COLORADO: 'CO', CONNECTICUT: 'CT', DELAWARE: 'DE', FLORIDA: 'FL', GEORGIA: 'GA',
    HAWAII: 'HI', IDAHO: 'ID', ILLINOIS: 'IL', INDIANA: 'IN', IOWA: 'IA',
    KANSAS: 'KS', KENTUCKY: 'KY', LOUISIANA: 'LA', MAINE: 'ME', MARYLAND: 'MD',
    MASSACHUSETTS: 'MA', MICHIGAN: 'MI', MINNESOTA: 'MN', MISSISSIPPI: 'MS', MISSOURI: 'MO',
    MONTANA: 'MT', NEBRASKA: 'NE', NEVADA: 'NV', 'NEW HAMPSHIRE': 'NH', 'NEW JERSEY': 'NJ',
    'NEW MEXICO': 'NM', 'NEW YORK': 'NY', 'NORTH CAROLINA': 'NC', 'NORTH DAKOTA': 'ND', OHIO: 'OH',
    OKLAHOMA: 'OK', OREGON: 'OR', PENNSYLVANIA: 'PA', 'RHODE ISLAND': 'RI', 'SOUTH CAROLINA': 'SC',
    'SOUTH DAKOTA': 'SD', TENNESSEE: 'TN', TEXAS: 'TX', UTAH: 'UT', VERMONT: 'VT',
    VIRGINIA: 'VA', WASHINGTON: 'WA', 'WEST VIRGINIA': 'WV', WISCONSIN: 'WI', WYOMING: 'WY',
    'DISTRICT OF COLUMBIA': 'DC'
  };
  return map[upper] || upper;
}

/**
 * Returns (and lazily creates) the "Helcim Invoices" tab.
 */
function getInvoicesSheet_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(INVOICES_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(INVOICES_SHEET_NAME);
    sheet.appendRow(INVOICE_SHEET_HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, INVOICE_SHEET_HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

/**
 * Appends a new invoice row.
 */
function appendInvoiceRow_(inv, data, amount) {
  try {
    const sheet = getInvoicesSheet_();
    const payLink = inv && inv.token ? (HELCIM_HOSTED_PAY_BASE + inv.token) : '';
    sheet.appendRow([
      new Date(),
      (inv && inv.invoiceNumber) || '',
      (inv && inv.invoiceId) || '',
      (inv && inv.token) || '',
      data.caseNumber || '',
      data.clientName || '',
      data.email || '',
      amount,
      (inv && inv.status) || 'DUE',
      '',
      '',
      payLink
    ]);
  } catch (e) {
    console.error('appendInvoiceRow_ failed:', e);
  }
}

/**
 * Marks an existing invoice row PAID. Looks up the row by invoiceNumber (column B).
 */
function markInvoicePaid_(invoiceNumber, tx) {
  try {
    const sheet = getInvoicesSheet_();
    const finder = sheet.createTextFinder(String(invoiceNumber)).matchEntireCell(true);
    const cell = finder.findNext();
    if (!cell) {
      console.warn('markInvoicePaid_: no row found for invoiceNumber', invoiceNumber);
      return false;
    }
    const row = cell.getRow();
    const headers = INVOICE_SHEET_HEADERS;
    const statusCol     = headers.indexOf('status') + 1;
    const datePaidCol   = headers.indexOf('datePaid') + 1;
    const txCol         = headers.indexOf('transactionId') + 1;
    sheet.getRange(row, statusCol).setValue('PAID');
    sheet.getRange(row, datePaidCol).setValue(new Date());
    sheet.getRange(row, txCol).setValue((tx && (tx.transactionId || tx.id)) || '');
    return true;
  } catch (e) {
    console.error('markInvoicePaid_ failed:', e);
    return false;
  }
}

/**
 * JSON response helper.
 */
function jsonOut_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Parses common Helcim list response shapes.
 */
function extractCustomers_(payload) {
  if (Array.isArray(payload)) return payload;
  if (payload && Array.isArray(payload.customers)) return payload.customers;
  if (payload && Array.isArray(payload.data)) return payload.data;
  return [];
}

/**
 * Look up a Helcim customer by email and return customerId if found.
 */
function findCustomerIdByEmail_(apiToken, email) {
  const cleanEmail = String(email || '').trim();
  if (!cleanEmail) return null;

  const url = HELCIM_API_BASE + '/customers/?search=' + encodeURIComponent(cleanEmail) + '&limit=100';
  const res = UrlFetchApp.fetch(url, {
    method: 'get',
    headers: { 'api-token': apiToken, 'accept': 'application/json' },
    muteHttpExceptions: true
  });
  if (res.getResponseCode() < 200 || res.getResponseCode() >= 300) {
    console.warn('findCustomerIdByEmail_ search failed', res.getResponseCode(), res.getContentText());
    return null;
  }

  let payload = {};
  try { payload = JSON.parse(res.getContentText() || '{}'); } catch (_) { payload = {}; }
  const customers = extractCustomers_(payload);
  if (!customers.length) return null;

  const emailLc = cleanEmail.toLowerCase();
  for (const c of customers) {
    const cEmail = (((c || {}).billingAddress || {}).email || '').toString().toLowerCase();
    if (cEmail === emailLc) return c.customerId || c.id || null;
  }
  return customers[0].customerId || customers[0].id || null;
}

/**
 * Create a Helcim customer and return customerId.
 */
function createCustomer_(apiToken, data, billingStreet, billingPostal) {
  const customerBody = {
    contactName: (data.clientName || '').toString(),
    cellPhone: (data.phone || '').toString(),
    billingAddress: {
      name: (data.clientName || '').toString(),
      email: (data.email || '').toString(),
      street1: billingStreet,
      city: (data.city || '').toString(),
      province: normalizeProvince_(data.state),
      country: 'USA',
      postalCode: billingPostal
    }
  };

  const res = UrlFetchApp.fetch(HELCIM_API_BASE + '/customers/', {
    method: 'post',
    contentType: 'application/json',
    headers: { 'api-token': apiToken, 'accept': 'application/json' },
    payload: JSON.stringify(customerBody),
    muteHttpExceptions: true
  });
  const code = res.getResponseCode();
  const text = res.getContentText() || '';
  if (code < 200 || code >= 300) {
    throw new Error('Create customer failed (' + code + '): ' + text);
  }
  let created = {};
  try { created = JSON.parse(text); } catch (_) { created = {}; }
  return created.customerId || created.id || null;
}

/**
 * Find existing customer by email, else create one, and return customerId.
 */
function ensureCustomerId_(apiToken, data, billingStreet, billingPostal) {
  const existingId = findCustomerIdByEmail_(apiToken, data.email);
  if (existingId) return existingId;
  return createCustomer_(apiToken, data, billingStreet, billingPostal);
}

/**
 * Calls Helcim Create Invoice and persists/notifies on success.
 * Triggered by the website form submission with action: 'createInvoice'.
 */
function handleCreateInvoice_(data) {
  try {
    const apiToken = PropertiesService.getScriptProperties().getProperty('HELCIM_API_TOKEN');
    if (!apiToken) {
      return jsonOut_({ success: false, error: 'HELCIM_API_TOKEN script property is not set' });
    }

    const amount = parseServiceAmount_(data.serviceType);
    const caseNumber = (data.caseNumber || '').toString();
    const description = ((data.serviceType || 'Process Service') + ' - Case #' + (caseNumber || 'N/A')).slice(0, 200);

    const notesParts = [];
    if (caseNumber) notesParts.push('Case #' + caseNumber);
    if (data.plaintiff && data.defendant) notesParts.push(data.plaintiff + ' v. ' + data.defendant);
    const billingStreet = ((data.street || data.serviceAddressStreet || '').toString().trim()) || 'Address not provided';
    const billingPostal = ((data.zip || data.serviceAddressZip || '').toString().trim()) || '00000';
    const customerId = ensureCustomerId_(apiToken, data, billingStreet, billingPostal);

    const body = {
      currency: 'USD',
      notes: notesParts.join(' - '),
      customerId: customerId || 0,
      lineItems: [{
        sku: 'PROCESS-SERVICE',
        description: description,
        quantity: 1,
        price: amount
      }],
      billingAddress: {
        name: (data.clientName || '').toString(),
        email: (data.email || '').toString(),
        street1: billingStreet,
        postalCode: billingPostal
      }
    };

    const res = UrlFetchApp.fetch(HELCIM_API_BASE + '/invoices/', {
      method: 'post',
      contentType: 'application/json',
      headers: {
        'api-token': apiToken,
        'accept': 'application/json'
      },
      payload: JSON.stringify(body),
      muteHttpExceptions: true
    });

    const code = res.getResponseCode();
    const text = res.getContentText() || '';
    let inv = {};
    try { inv = JSON.parse(text); } catch (_) { inv = {}; }

    if (code < 200 || code >= 300) {
      console.error('Helcim createInvoice failed', code, text);
      return jsonOut_({ success: false, error: 'Helcim API error', status: code, detail: text });
    }

    appendInvoiceRow_(inv, data, amount);
    emailAdminPayLink_(inv, data, amount);

    return jsonOut_({
      success: true,
      invoiceNumber: inv.invoiceNumber || null,
      invoiceId: inv.invoiceId || null,
      token: inv.token || null
    });
  } catch (err) {
    console.error('handleCreateInvoice_ exception:', err);
    return jsonOut_({ success: false, error: 'Server error: ' + (err && err.message) });
  }
}

/**
 * Emails the admin a ready-to-forward Pay-Now link (manual send to customer per spec).
 */
function emailAdminPayLink_(inv, data, amount) {
  try {
    const payLink = inv && inv.token ? (HELCIM_HOSTED_PAY_BASE + inv.token) : '(no token returned)';
    const invoiceNumber = (inv && inv.invoiceNumber) || '(unknown)';
    const customerLine = (data.clientName || 'Customer') +
                         (data.email ? ' <' + data.email + '>' : '');
    const amountLine = '$' + amount + (amount === 0 ? '   <-- set the real amount in Helcim before sending the link' : '');

    const subject = 'NEW INVOICE ' + invoiceNumber + ' - ' + amountLine.replace(/\s+<--.*$/, '') +
                    ' - ' + (data.clientName || 'Customer');

    const body = [
      'A new Helcim invoice was created from a website form submission.',
      '',
      'Invoice Number: ' + invoiceNumber,
      'Customer:       ' + customerLine,
      'Phone:          ' + (data.phone || ''),
      'Case #:         ' + (data.caseNumber || ''),
      'Service Type:   ' + (data.serviceType || ''),
      'Amount:         ' + amountLine,
      '',
      'PAY-NOW LINK to send to the customer:',
      payLink,
      '',
      '------- Suggested email body (copy/paste) -------',
      'Hi ' + (data.clientName || 'there') + ',',
      '',
      'Your invoice for ' + (data.serviceType || 'process service') +
        (data.caseNumber ? ' on case #' + data.caseNumber : '') + ' is ready.',
      'Please pay securely here:',
      payLink,
      '',
      'Thank you,',
      'Just Legal Solutions',
      '(539) 367-6832',
      '------------------------------------------------',
      '',
      'You will receive an automated PAID notification once the customer completes payment.'
    ].join('\n');

    GmailApp.sendEmail(ADMIN_EMAIL, subject, body, {
      from: 'info@justlegalsolutions.org',
      name: 'JLS Invoice System'
    });
  } catch (e) {
    console.error('emailAdminPayLink_ failed:', e);
  }
}

/**
 * Emails the admin when a webhook tells us an invoice has been paid.
 */
function emailAdminPaid_(tx) {
  try {
    const subject = 'PAID: Invoice ' + (tx.invoiceNumber || '') +
                    ' - $' + (tx.amount != null ? tx.amount : '?') +
                    ' - ' + (tx.cardHolderName || tx.customerCode || 'Customer');
    const body = [
      'Helcim reports a successful card transaction for one of our invoices.',
      '',
      'Invoice Number: ' + (tx.invoiceNumber || ''),
      'Amount:         $' + (tx.amount != null ? tx.amount : ''),
      'Currency:       ' + (tx.currency || ''),
      'Card Holder:    ' + (tx.cardHolderName || ''),
      'Card:           ' + (tx.cardBrand || '') + ' ****' + (tx.cardLast4 || tx.cardNumber || ''),
      'Transaction ID: ' + (tx.transactionId || tx.id || ''),
      'Approval Code:  ' + (tx.approvalCode || ''),
      'Date:           ' + (tx.dateCreated || tx.transactionDate || ''),
      '',
      'The Helcim Invoices spreadsheet row has been updated to status=PAID.'
    ].join('\n');

    GmailApp.sendEmail(ADMIN_EMAIL, subject, body, {
      from: 'info@justlegalsolutions.org',
      name: 'JLS Invoice System'
    });
  } catch (e) {
    console.error('emailAdminPaid_ failed:', e);
  }
}

/**
 * Helcim webhook receiver.
 *
 * Helcim sends only { id, type } in the body. We re-fetch the full transaction
 * from the Card Transactions API using our private API token (the real source
 * of trust here, since Apps Script doPost(e) does not expose request headers
 * reliably enough to verify the HMAC signature). A forged webhook cannot fake
 * a real Helcim transaction id, so the API re-fetch is what keeps this safe.
 */
function handleHelcimWebhook_(e, rawBody) {
  try {
    const body = rawBody || (e && e.postData && e.postData.contents) || '';
    let evt = {};
    try { evt = JSON.parse(body); } catch (_) { return jsonOut_({ ok: false, error: 'bad json' }); }

    if (evt.type !== 'cardTransaction') {
      // We do not act on terminalCancel; just acknowledge so Helcim stops retrying.
      return jsonOut_({ ok: true, ignored: evt.type || 'unknown' });
    }

    const apiToken = PropertiesService.getScriptProperties().getProperty('HELCIM_API_TOKEN');
    if (!apiToken) return jsonOut_({ ok: false, error: 'HELCIM_API_TOKEN not set' });

    const txRes = UrlFetchApp.fetch(
      HELCIM_API_BASE + '/card-transactions/' + encodeURIComponent(String(evt.id)),
      {
        method: 'get',
        headers: { 'api-token': apiToken, 'accept': 'application/json' },
        muteHttpExceptions: true
      }
    );
    const code = txRes.getResponseCode();
    const text = txRes.getContentText() || '';
    if (code !== 200) {
      console.error('Helcim getCardTransaction failed', code, text);
      return jsonOut_({ ok: false, error: 'lookup failed', status: code });
    }
    const tx = JSON.parse(text || '{}');

    if (tx.invoiceNumber && (tx.status === 'APPROVED' || tx.approved === true || tx.approvalCode)) {
      markInvoicePaid_(tx.invoiceNumber, tx);
      emailAdminPaid_(tx);
    } else {
      console.log('Webhook received but no actionable invoice match:', JSON.stringify({
        invoiceNumber: tx.invoiceNumber, status: tx.status, approved: tx.approved
      }));
    }
    return jsonOut_({ ok: true });
  } catch (err) {
    console.error('handleHelcimWebhook_ exception:', err);
    return jsonOut_({ ok: false, error: 'Server error: ' + (err && err.message) });
  }
}

/**
 * MANUAL TEST — verifies the Helcim API token works.
 * Apps Script editor: select testHelcimConnection from the dropdown and click Run.
 */
function testHelcimConnection() {
  const apiToken = PropertiesService.getScriptProperties().getProperty('HELCIM_API_TOKEN');
  if (!apiToken) {
    console.log('FAIL: HELCIM_API_TOKEN script property is not set.');
    return;
  }
  const res = UrlFetchApp.fetch(HELCIM_API_BASE + '/connection-test/', {
    method: 'get',
    headers: { 'api-token': apiToken, 'accept': 'application/json' },
    muteHttpExceptions: true
  });
  console.log('HTTP', res.getResponseCode(), res.getContentText());
}

/**
 * MANUAL TEST — creates a $1 test invoice so you can confirm end-to-end before
 * wiring the website form. Apps Script editor: select testCreateInvoice and Run.
 */
function testCreateInvoice() {
  const out = handleCreateInvoice_({
    action: 'createInvoice',
    serviceType: 'Standard - $60',
    clientName: 'Test Customer',
    email: 'iannazzi@alumni.nsuok.edu',
    phone: '5393676832',
    street: '564 E 138th Pl',
    city: 'Glenpool',
    state: 'OK',
    zip: '74033',
    caseNumber: 'TEST-' + Date.now(),
    plaintiff: 'Test Plaintiff',
    defendant: 'Test Defendant'
  });
  console.log(out.getContent());
}
