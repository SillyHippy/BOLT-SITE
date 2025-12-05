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
  
  // Preserve original auto-size functionality
  pdfForm.updateFieldAppearances = () => {};

  // Fill fields
  Object.keys(values).forEach(fieldName => {
    try {
      const field = pdfForm.getFieldMaybe ? pdfForm.getFieldMaybe(fieldName) : pdfForm.getField(fieldName);
      if (field) {
        if (checkboxNames.includes(fieldName)) {
          if (values[fieldName] === 'Yes' && field.check) field.check();
          else if (field.uncheck) field.uncheck();
        } else if (field.setText) {
          field.setText(values[fieldName]);
        }
      }
    } catch (err) {
      // Ignore missing fields
    }
  });

  const pdfBytes = await pdfDoc.save({ 
    useObjectStreams: false,
    updateFieldAppearances: false
  });

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

// View PDF button - uses localStorage + viewer.html
document.getElementById('btn-newtab').addEventListener('click', async function() {
  const btn = this;
  const originalText = btn.textContent;
  
  try {
    btn.textContent = 'Generating...';
    btn.disabled = true;
    
    const { pdfBytes, filename } = await generatePDF();
    
    // Convert to base64
    const uint8Array = new Uint8Array(pdfBytes);
    let binary = '';
    const chunkSize = 8192;
    for (let i = 0; i < uint8Array.length; i += chunkSize) {
      const chunk = uint8Array.subarray(i, i + chunkSize);
      binary += String.fromCharCode.apply(null, chunk);
    }
    const base64 = btoa(binary);
    
    // Save to localStorage and navigate to viewer page
    try {
      localStorage.setItem('temp_pdf', base64);
      localStorage.setItem('temp_filename', filename);
      window.location.href = 'viewer.html';
    } catch (e) {
      alert('PDF too large for viewer. Try the Download button instead.');
      btn.textContent = originalText;
    }
    
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
    const formData = new FormData(form);
    const params = new URLSearchParams();
    
    // Add all form fields
    for (const [key, value] of formData.entries()) {
      if (value) { // Only add non-empty values
        params.append(key, value);
      }
    }
    
    // Build URL (strip existing query params)
    const baseUrl = window.location.origin + window.location.pathname;
    const fullUrl = baseUrl + '?' + params.toString();
    
    // Warn if URL is very long
    if (fullUrl.length > 2000) {
      alert('Warning: URL is ' + fullUrl.length + ' characters. Some browsers may truncate long URLs.');
    }
    
    // Copy to clipboard - use fallback method that works everywhere
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
      // If copy fails, show the URL in a prompt so user can manually copy
      prompt('Copy this link:', fullUrl);
    }
    
  } catch (error) {
    console.error('Error:', error);
    alert('Error: ' + error.message);
  }
});
