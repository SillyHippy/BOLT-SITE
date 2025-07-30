document.getElementById('affidavit-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const values = {};
  for (const [key, value] of formData.entries()) {
    values[key] = value;
  }

  // Fetch the PDF template
  const existingPdfBytes = await fetch('Affidavit.pdf').then(res => res.arrayBuffer());

  // Load PDF with pdf-lib
  const { PDFDocument } = window.pdfLib;
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Get the form
  const form = pdfDoc.getForm();

  // Fill fields by name
  Object.keys(values).forEach(fieldName => {
    try {
      const field = form.getFieldMaybe ? form.getFieldMaybe(fieldName) : form.getField(fieldName);
      if (field) {
        field.setText(values[fieldName]);
      }
    } catch (err) {
      // Ignore missing fields
    }
  });

  // Flatten the form (optional: makes fields uneditable in the output PDF)
  form.flatten();

  // Download the filled PDF
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'Filled_Affidavit.pdf';
  a.click();
  URL.revokeObjectURL(url);
});
