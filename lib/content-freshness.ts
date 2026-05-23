import type { Metadata } from 'next';
import generatedManifest from './page-freshness.generated.json';

export interface PageFreshnessEntry {
  datePublished?: string;
  dateModified: string;
  sourceFile?: string;
  fileMtime?: string;
  manualOverride?: string;
}

export interface PageFreshnessManifest {
  generatedAt: string;
  siteContentReviewDate: string;
  defaultDatePublished: string;
  pages: Record<string, PageFreshnessEntry>;
}

const SITE_REVIEW_PATHS = [
  '/',
  '/pricing',
  '/contact',
  '/process-serving',
  '/tulsa-process-server',
  '/notary',
  '/mobile-notary',
  '/apostille',
  '/about',
];

const FALLBACK_MANIFEST: PageFreshnessManifest = {
  generatedAt: '1970-01-01T00:00:00.000Z',
  siteContentReviewDate: '2026-05-04',
  defaultDatePublished: '2025-03-01',
  pages: {
    '/': { datePublished: '2025-03-01', dateModified: '2026-05-04' },
    '/pricing': { datePublished: '2025-03-01', dateModified: '2026-05-04' },
    '/contact': { datePublished: '2025-03-01', dateModified: '2026-05-04' },
    '/process-serving': { datePublished: '2025-03-01', dateModified: '2026-05-04' },
    '/notary': { datePublished: '2025-03-01', dateModified: '2026-03-22' },
    '/mobile-notary': { datePublished: '2025-03-01', dateModified: '2026-05-04' },
    '/tulsa-process-server': { datePublished: '2025-03-01', dateModified: '2026-05-04' },
    '/apostille': { datePublished: '2025-03-01', dateModified: '2026-04-19' },
    '/about': { datePublished: '2025-03-01', dateModified: '2026-01-25' },
  },
};

const manifest = (generatedManifest as PageFreshnessManifest)?.pages
  ? (generatedManifest as PageFreshnessManifest)
  : FALLBACK_MANIFEST;

/** Newest hub-page review date — auto-generated from page file mtimes on build. */
export const SITE_CONTENT_REVIEW_DATE = manifest.siteContentReviewDate;

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '') return '/';
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
}

export function getPageFreshness(pathname: string): PageFreshnessEntry | undefined {
  return manifest.pages[normalizePathname(pathname)];
}

/** @deprecated Use getPageFreshness() — kept for imports that referenced HUB_PAGE_DATES. */
export const HUB_PAGE_DATES: Record<string, PageFreshnessEntry> = Object.fromEntries(
  SITE_REVIEW_PATHS.map((pathname) => [pathname, getPageFreshness(pathname)]).filter(
    (entry): entry is [string, PageFreshnessEntry] => Boolean(entry[1])
  )
);

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
  const auto = options.pathname ? getPageFreshness(options.pathname) : undefined;
  const datePublished =
    options.datePublished ??
    auto?.datePublished ??
    manifest.defaultDatePublished ??
    SITE_CONTENT_REVIEW_DATE;
  const dateModified =
    options.dateModified ??
    auto?.dateModified ??
    options.datePublished ??
    auto?.datePublished ??
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

/** Long weekday format used in llms.txt headers. */
export function formatLlmsHeaderDate(isoOrDate?: string): string {
  const date = new Date(formatMetaDate(isoOrDate) + 'T12:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
