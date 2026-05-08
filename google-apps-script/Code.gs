// --- CONFIGURATION ---
const SEARCH_QUERY = 'subject:"New Service Request from Website Form" -label:processed';
const SITE_UPLOAD_FOLDER_ID = "1ZB7XTSC_eD6m3F-6_yI2VP065cKEQzVq"; 
const MAX_THREADS_PER_RUN = 5; // Free Tier Limit Protection: Only do 5 at a time

function processFormEmails() {
  // Get threads, limited to MAX_THREADS_PER_RUN to save execution time
  const threads = GmailApp.search(SEARCH_QUERY, 0, MAX_THREADS_PER_RUN);
  
  if (threads.length === 0) return; 

  const label = GmailApp.getUserLabelByName("processed") || GmailApp.createLabel("processed");
  const parentFolder = DriveApp.getFolderById(SITE_UPLOAD_FOLDER_ID);

  // Cache folder lookups to reduce API calls
  const folderCache = {};

  threads.forEach(thread => {
    const messages = thread.getMessages();
    
    // Process every message in the thread
    messages.forEach(message => {
      // Basic check to ensure it's a submission and not a reply
      if (!message.getSubject().includes("New Service Request")) return;

      try {
        const body = message.getBody(); 
        const data = parseFormData(body);
        
        if (!data.caseNumber || data.caseNumber === "Unknown_Case") {
          console.log("Skipping: No valid case number in " + message.getSubject());
          return; 
        }

        // Generate PDF in memory
        const pdfBlob = createFieldSheetPDF(data);
        const caseNum = data.caseNumber.trim();

        // Efficient Folder Management
        let caseFolder;
        if (folderCache[caseNum]) {
          caseFolder = folderCache[caseNum];
        } else {
          // Check if folder exists
          const folders = parentFolder.getFoldersByName(caseNum);
          if (folders.hasNext()) {
            caseFolder = folders.next();
          } else {
            caseFolder = parentFolder.createFolder(caseNum);
          }
          folderCache[caseNum] = caseFolder; // Save to cache
        }
        
        // Check if file exists to prevent duplicates
        const fileName = `${caseNum} - Field Sheet.pdf`;
        const existingFiles = caseFolder.getFilesByName(fileName);
        
        if (!existingFiles.hasNext()) {
           caseFolder.createFile(pdfBlob).setName(fileName);
           console.log(`Created: ${fileName}`);
        } else {
           console.log(`Skipped: ${fileName} already exists.`);
        }

      } catch (e) {
        console.error("Error processing message: " + e.toString());
      }
    });

    // Mark thread processed only after attempting all messages
    thread.addLabel(label);
  });
}

// --- SETUP FUNCTION (RUN ONCE) ---
function markPastEmailsAsProcessed() {
  let threads = GmailApp.search('subject:"New Service Request from Website Form" -label:processed');
  const label = GmailApp.getUserLabelByName("processed") || GmailApp.createLabel("processed");
  
  // Process in batches of 100 to respect quotas
  while (threads.length > 0) {
    const batch = threads.slice(0, 100);
    label.addToThreads(batch);
    console.log(`Marked ${batch.length} emails as processed.`);
    Utilities.sleep(1000); // Pause to be nice to API
    threads = threads.slice(100);
  }
}

// --- HELPERS ---
function parseFormData(htmlBody) {
  const extract = (key) => {
    // Regex matches "Key","Value" structure from CSV-like emails or Table structures
    // Adjusted to be more robust for different email HTML structures
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedKey + '[\\s\\S]*?<td[^>]*>([\\s\\S]*?)<\\/td>', 'i');
    const match = htmlBody.match(regex);
    if (match) {
        // Strip HTML tags, decode entities, trim whitespace
        let text = match[1].replace(/<[^>]+>/g, ''); 
        text = text.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'");
        return text.trim().replace(/\s+/g, ' ');
    }
    return "";
  };

  return {
    caseNumber: extract('case_number') || "Unknown_Case",
    court: extract('originating_court_state') + " - " + extract('county') + " " + extract('type_of_court'),
    plaintiff: extract('plaintiff_petitioner'),
    defendant: extract('defendant_respondent'),
    recipient: extract('name_of_servee'),
    recipientPhone: extract('servee_phone_number'),
    recipientPhone2: extract('servee_phone_secondary'),
    recipientEmail: extract('servee_email'),
    documents: extract('documents_to_be_served'),
    instructions: extract('service_instructions') + " " + extract('service_requirements'),
    address: `${extract('service_address_street')} ${extract('service_address_line2')}, ${extract('service_address_city')}, ${extract('service_address_state')} ${extract('service_address_zip')}`,
    client: extract('firm_or_company_name'),
    clientPhone: extract('your_phone_number'),
    jobId: "WEB-" + Math.floor(Math.random() * 10000) 
  };
}

function createFieldSheetPDF(data) {
  const htmlTemplate = HtmlService.createTemplateFromFile('FieldSheet');
  htmlTemplate.data = data;
  const htmlContent = htmlTemplate.evaluate().getContent();
  const blob = Utilities.newBlob(htmlContent, MimeType.HTML)
    .getAs(MimeType.PDF)
    .setName("Field Sheet");
  return blob;
}
