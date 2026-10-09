/** Honest direct links to the actual files in public/downloads. Legacy URLs live in public/_redirects. */
export function formDownloadHref(filename: string): string {
  return `/downloads/${filename}`;
}
