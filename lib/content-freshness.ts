import type { Metadata } from 'next';

/** Site-wide content review date — update when hub pages are reviewed quarterly. */
export const SITE_CONTENT_REVIEW_DATE = '2026-05-04';

export const HUB_PAGE_DATES: Record<string, { datePublished?: string; dateModified: string }> = {
  '/': { datePublished: '2025-03-01', dateModified: '2026-05-04' },
  '/pricing': { datePublished: '2025-03-01', dateModified: '2026-05-04' },
  '/contact': { datePublished: '2025-03-01', dateModified: '2026-05-04' },
  '/process-serving': { datePublished: '2025-03-01', dateModified: '2026-05-04' },
  '/notary': { datePublished: '2025-03-01', dateModified: '2026-03-22' },
  '/mobile-notary': { datePublished: '2025-03-01', dateModified: '2026-05-04' },
  '/tulsa-process-server': { datePublished: '2025-03-01', dateModified: '2026-05-04' },
  '/apostille': { datePublished: '2025-03-01', dateModified: '2026-04-19' },
  '/about': { datePublished: '2025-03-01', dateModified: '2026-01-25' },
};

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '') return '/';
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
}

export function getPageFreshness(pathname: string): { datePublished?: string; dateModified: string } | undefined {
  return HUB_PAGE_DATES[normalizePathname(pathname)];
}

/** Normalize to ISO 8601 with Oklahoma timezone offset for schema.org. */
export function formatSchemaDate(isoOrDate?: string): string {
  if (!isoOrDate) {
    return `${SITE_CONTENT_REVIEW_DATE}T12:00:00-05:00`;
  }
  return isoOrDate.includes('T') ? isoOrDate : `${isoOrDate}T12:00:00-05:00`;
}

/** Date-only string for meta tags and display. */
export function formatMetaDate(isoOrDate?: string): string {
  if (!isoOrDate) return SITE_CONTENT_REVIEW_DATE;
  return isoOrDate.split('T')[0];
}

export function resolveFreshnessDates(options: {
  datePublished?: string;
  dateModified?: string;
  pathname?: string;
}): { datePublished: string; dateModified: string } {
  const hub = options.pathname ? getPageFreshness(options.pathname) : undefined;
  const datePublished =
    options.datePublished ??
    hub?.datePublished ??
    SITE_CONTENT_REVIEW_DATE;
  const dateModified =
    options.dateModified ??
    hub?.dateModified ??
    options.datePublished ??
    hub?.datePublished ??
    SITE_CONTENT_REVIEW_DATE;
  return { datePublished, dateModified };
}

export function buildFreshnessMetadata(options: {
  dateModified: string;
  datePublished?: string;
  isArticle?: boolean;
}): {
  other: Record<string, string>;
  openGraph?: NonNullable<Metadata['openGraph']>;
} {
  const { dateModified, datePublished, isArticle } = options;
  const metaModified = formatMetaDate(dateModified);
  const metaPublished = datePublished ? formatMetaDate(datePublished) : undefined;

  const other: Record<string, string> = {
    'last-modified': metaModified,
  };

  if (metaPublished) {
    other['article:published_time'] = metaPublished;
    other['article:modified_time'] = metaModified;
  }

  const openGraph: Metadata['openGraph'] = isArticle
    ? {
        type: 'article',
        ...(metaPublished ? { publishedTime: metaPublished } : {}),
        modifiedTime: metaModified,
      }
    : undefined;

  return { other, ...(openGraph ? { openGraph } : {}) };
}

export function formatLastUpdatedLabel(isoOrDate?: string): string {
  const date = new Date(formatMetaDate(isoOrDate) + 'T12:00:00');
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
