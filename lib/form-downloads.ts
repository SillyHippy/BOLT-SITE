/** Legacy form links are resolved by public/_redirects. New cards link to real tools. */
export function formDownloadHref(filename: string): string {
  return `/downloads/${filename}`;
}
