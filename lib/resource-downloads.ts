/**
 * Maps legacy /downloads/*.pdf resource names to actual files in public/downloads/.
 */
const LEGACY_TO_DOWNLOAD: Record<string, string> = {
  'attorneys-guide-hiring-process-server.pdf': 'JLS-Attorney-Quick-Reference-v1.0.pdf',
  'oklahoma-eviction-timeline.pdf': 'JLS-Landlord-Eviction-Service-Guide-v1.0.pdf',
  'oklahoma-service-of-process-reference-card.pdf': 'JLS-OK-Statutes-Quick-Reference-v1.0.pdf',
  'process-server-field-sheet-template.pdf': 'JLS-Process-Server-Field-Sheet-v1.0.pdf',
  'what-to-do-when-served-oklahoma.pdf': 'JLS-Youve-Been-Served-Guide-v1.0.pdf',
};

/** Return canonical download href for a legacy resource PDF filename. */
export function resourceDownloadHref(legacyFilename: string): string {
  const downloadFile = LEGACY_TO_DOWNLOAD[legacyFilename];
  if (downloadFile) {
    return `/downloads/${downloadFile}`;
  }
  return `/downloads/${legacyFilename}`;
}

/** Whether a real mapped download exists for this legacy filename. */
export function hasResourceDownload(legacyFilename: string): boolean {
  return legacyFilename in LEGACY_TO_DOWNLOAD;
}
