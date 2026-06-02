/**
 * Maps legacy /resources/oklahoma-*.pdf form names to actual files in public/downloads/.
 * Legacy paths remain covered by _redirects for external bookmarks.
 */
const LEGACY_TO_DOWNLOAD: Record<string, string> = {
  'oklahoma-affidavit-of-service.pdf': 'JLS-Process-Server-Field-Sheet-v1.0.pdf',
  'oklahoma-substitute-service-affidavit.pdf': 'JLS-Process-Server-Field-Sheet-v1.0.pdf',
  'oklahoma-publication-service-affidavit.pdf': 'JLS-Process-Server-Field-Sheet-v1.0.pdf',
  'oklahoma-corporate-service-affidavit.pdf': 'JLS-How-To-Serve-Business-Papers-v1.0.pdf',
  'oklahoma-proof-personal-service.pdf': 'JLS-Process-Server-Field-Sheet-v1.0.pdf',
  'oklahoma-proof-certified-mail.pdf': 'JLS-Process-Server-Field-Sheet-v1.0.pdf',
  'oklahoma-proof-posting-service.pdf': 'JLS-Process-Server-Field-Sheet-v1.0.pdf',
  'oklahoma-diligent-search-checklist.pdf': 'JLS-Skip-Trace-Checklist-v1.0.pdf',
  'oklahoma-diligent-search-affidavit.pdf': 'JLS-Skip-Trace-Checklist-v1.0.pdf',
  'oklahoma-skip-trace-form.pdf': 'JLS-Skip-Trace-Checklist-v1.0.pdf',
  'oklahoma-service-invoice.pdf': 'JLS-Process-Server-Field-Sheet-v1.0.pdf',
  'oklahoma-rush-service-invoice.pdf': 'JLS-Process-Server-Field-Sheet-v1.0.pdf',
  'oklahoma-attempt-invoice.pdf': 'JLS-Service-Attempt-Log-v1.0.pdf',
  'oklahoma-monthly-statement.pdf': 'JLS-Service-Attempt-Log-v1.0.pdf',
  'oklahoma-client-intake-form.pdf': 'JLS-Client-Intake-Form-v1.0.pdf',
  'oklahoma-service-request-form.pdf': 'JLS-Client-Intake-Form-v1.0.pdf',
  'oklahoma-subject-info-sheet.pdf': 'JLS-Client-Intake-Form-v1.0.pdf',
  'oklahoma-attempt-log.pdf': 'JLS-Service-Attempt-Log-v1.0.pdf',
  'oklahoma-field-notes.pdf': 'JLS-Process-Server-Field-Sheet-v1.0.pdf',
  'oklahoma-vehicle-description.pdf': 'JLS-Process-Server-Field-Sheet-v1.0.pdf',
  'oklahoma-witness-form.pdf': 'JLS-Process-Server-Field-Sheet-v1.0.pdf',
  'oklahoma-service-log.xlsx': 'JLS-GPS-Service-Log-v1.0.pdf',
  'oklahoma-mileage-log.pdf': 'JLS-GPS-Service-Log-v1.0.pdf',
  'oklahoma-expense-report.pdf': 'JLS-GPS-Service-Log-v1.0.pdf',
  'oklahoma-cleet-compliance-checklist.pdf': 'JLS-Server-Safety-Checklist-v1.0.pdf',
};

/** Return canonical download href for a legacy form filename. */
export function formDownloadHref(legacyFilename: string): string {
  const downloadFile = LEGACY_TO_DOWNLOAD[legacyFilename] ?? legacyFilename;
  if (downloadFile.startsWith('JLS-')) {
    return `/downloads/${downloadFile}`;
  }
  return `/downloads/${downloadFile}`;
}

/** All legacy filenames that need _redirects from /resources/*. */
export function legacyFormRedirectPaths(): string[] {
  return Object.keys(LEGACY_TO_DOWNLOAD).map((f) => `/resources/${f}`);
}
