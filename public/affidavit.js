// Shared function to generate PDF from form data
async function generatePDF() {
  const form = document.getElementById('affidavit-form');
  const formData = new FormData(form);
  const values = {};
  
  const checkboxNames = [
    'Personal Service', 'Substituted at Residence', 'Substituted at Business', 'Posting', 'Non-Service',
    'Unknown at address', 'Moved left no forwarding', 'Service canceled by litigant',
    'Unable to serve in a timely fashion', 'Address does not exist', 'other'
  ];
  
  for (const [key, value] of formData.entries()) {
    if (checkboxNames.includes(key)) {
      values[key] = 'Yes';
    } else {
      values[key] = value;
    }
  }
  
  checkboxNames.forEach(name => {
    if (!(name in values)) {
      values[name] = 'Off';
    }
  });

  // Fetch the PDF template
  const existingPdfBytes = await fetch('Affidavit.pdf').then(res => {
    if (!res.ok) throw new Error('Failed to load PDF template');
    return res.arrayBuffer();
  });

  // Load PDF with pdf-lib
  if (!window.PDFLib || typeof window.PDFLib.PDFDocument !== 'function') {
    throw new Error('PDF library failed to load');
  }
  
  const { PDFDocument } = window.PDFLib;
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const pdfForm = pdfDoc.getForm();

  // Debug: show PDF field names in console
  const allFields = pdfForm.getFields();
  const pdfFieldNames = allFields.map(f => f.getName());
  console.log('=== PDF FIELD NAMES ===');
  pdfFieldNames.forEach(name => console.log('  "' + name + '"'));
  console.log('=== FORM VALUES ===');
  Object.keys(values).forEach(key => console.log('  "' + key + '" = "' + values[key] + '"'));

  // Fill fields and track what works
  const matched = [];
  const notFound = [];
  
  Object.keys(values).forEach(fieldName => {
    // Check if field exists in PDF
    if (!pdfFieldNames.includes(fieldName)) {
      notFound.push(fieldName);
      return;
    }
    
    try {
      const field = pdfForm.getField(fieldName);
      matched.push(fieldName);
      
      if (checkboxNames.includes(fieldName)) {
        if (values[fieldName] === 'Yes' && field.check) field.check();
        else if (field.uncheck) field.uncheck();
      } else if (field.setText) {
        field.setText(values[fieldName]);
      }
    } catch (err) {
      notFound.push(fieldName + ' (error: ' + err.message + ')');
    }
  });
  
  console.log('=== MATCHED FIELDS ===');
  matched.forEach(name => console.log('  ✅ ' + name));
  console.log('=== NOT FOUND IN PDF ===');
  notFound.forEach(name => console.log('  ❌ ' + name));

  // Mark form as needing appearance generation by the PDF reader
  // This keeps Adobe's auto-fit but tells reader to render values
  pdfForm.acroForm.dict.set(PDFLib.PDFName.of('NeedAppearances'), PDFLib.PDFBool.True);
  
  const pdfBytes = await pdfDoc.save({ updateFieldAppearances: false });

  // Generate filename from Case Number
  const caseNumber = values['Case Number'] || 'Unknown';
  const sanitizedCaseNumber = caseNumber.replace(/[^a-zA-Z0-9-_]/g, '_').substring(0, 50);
  const filename = sanitizedCaseNumber + '_Affidavit.pdf';

  return { pdfBytes, filename };
}

// Download button - generates PDF and downloads
document.getElementById('btn-download').addEventListener('click', async function() {
  const btn = this;
  const originalText = btn.textContent;
  
  try {
    btn.textContent = 'Generating...';
    btn.disabled = true;
    
    const { pdfBytes, filename } = await generatePDF();
    
    // Create blob and download
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    setTimeout(() => URL.revokeObjectURL(url), 100);
    
    btn.textContent = '✅ Downloaded!';
    setTimeout(() => { btn.textContent = originalText; }, 2000);
    
  } catch (error) {
    console.error('Error:', error);
    alert('Error generating PDF: ' + error.message);
    btn.textContent = originalText;
  } finally {
    btn.disabled = false;
  }
});

// Copy Link button - creates shareable URL with form data encoded
document.getElementById('btn-copy-link').addEventListener('click', function() {
  const btn = this;
  const originalText = btn.textContent;
  
  try {
    const form = document.getElementById('affidavit-form');
    if (!form) {
      alert('Form not found!');
      return;
    }
    
    const formData = new FormData(form);
    const params = new URLSearchParams();
    
    // Debug: count entries
    let count = 0;
    for (const [key, value] of formData.entries()) {
      count++;
      if (value && value.trim() !== '') {
        params.append(key, value);
      }
    }
    
    // If no params, show what we found
    if (params.toString() === '') {
      alert('No form data found. Form has ' + count + ' total fields. Make sure you filled in at least one field.');
      return;
    }
    
    const baseUrl = window.location.origin + window.location.pathname;
    const fullUrl = baseUrl + '?' + params.toString();
    
    if (fullUrl.length > 2000) {
      alert('Warning: URL is ' + fullUrl.length + ' characters. Some browsers may truncate.');
    }
    
    // Copy using execCommand (works everywhere including Comet)
    const textArea = document.createElement('textarea');
    textArea.value = fullUrl;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    var success = false;
    try {
      success = document.execCommand('copy');
    } catch (e) {
      success = false;
    }
    
    document.body.removeChild(textArea);
    
    if (success) {
      btn.textContent = '✅ Copied!';
      setTimeout(function() { btn.textContent = originalText; }, 2000);
    } else {
      prompt('Copy this link:', fullUrl);
    }
    
  } catch (error) {
    console.error('Error:', error);
    alert('Error: ' + error.message);
  }
});
