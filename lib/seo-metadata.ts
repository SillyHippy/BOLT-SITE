import type { Metadata } from 'next';
import manifest from '@/public/image-pack/images/image-seo-manifest.json';

export const SITE_URL = 'https://justlegalsolutions.org';

export const OG_IMAGES = {
  county: {
    filename: 'image-085-counties-hero.webp',
    width: 1200,
    height: 630,
    alt: 'Oklahoma county process serving — licensed and bonded service statewide',
  },
  serviceArea: {
    filename: 'image-032-service-areas-card.webp',
    width: 1200,
    height: 630,
    alt: 'Oklahoma process server service area — local legal document delivery',
  },
  blog: {
    filename: 'image-043-blog-hero.png',
    width: 1200,
    height: 630,
    alt: 'Just Legal Solutions blog — Oklahoma process serving and legal support',
  },
  guide: {
    filename: 'image-077-guides-hero.png',
    width: 1200,
    height: 630,
    alt: 'Oklahoma legal process guides from Just Legal Solutions',
  },
  glossary: {
    filename: 'image-052-glossary-og.png',
    width: 1200,
    height: 630,
    alt: 'Oklahoma legal glossary — process serving and court terms',
  },
  downloads: {
    filename: 'image-051-downloads-card.png',
    width: 1200,
    height: 630,
    alt: 'Free Oklahoma process server forms and legal document downloads',
  },
  generic: {
    filename: 'image-002-home-og.webp',
    width: 1200,
    height: 630,
    alt: 'Just Legal Solutions — professional process serving in Oklahoma',
  },
} as const;

export type OgPageType = keyof typeof OG_IMAGES;

type ManifestImage = {
  page: string;
  slot: string;
  filename: string;
  alt_text?: string;
  dimensions?: string;
};

const manifestOgByPage = new Map<string, ManifestImage>();
for (const img of (manifest as { images: ManifestImage[] }).images) {
  if (img.slot === 'og') {
    manifestOgByPage.set(img.page, img);
  }
}

function parseDimensions(dimensions?: string): { width: number; height: number } {
  if (!dimensions) return { width: 1200, height: 630 };
  const [w, h] = dimensions.split('x').map(Number);
  return { width: w || 1200, height: h || 630 };
}

function resolveOgImage(pathname: string, pageType: OgPageType) {
  const manifestEntry = manifestOgByPage.get(pathname);
  if (manifestEntry) {
    const { width, height } = parseDimensions(manifestEntry.dimensions);
    return {
      url: `${SITE_URL}/image-pack/images/${manifestEntry.filename}`,
      width,
      height,
      alt: manifestEntry.alt_text || OG_IMAGES[pageType].alt,
    };
  }

  const defaults = OG_IMAGES[pageType];
  return {
    url: `${SITE_URL}/image-pack/images/${defaults.filename}`,
    width: defaults.width,
    height: defaults.height,
    alt: defaults.alt,
  };
}

export function inferOgPageType(pathname: string): OgPageType {
  if (pathname.startsWith('/counties')) return 'county';
  if (pathname.startsWith('/service-areas')) return 'serviceArea';
  if (pathname.startsWith('/blog')) return 'blog';
  if (pathname.startsWith('/guides')) return 'guide';
  if (pathname.includes('legal-glossary') || pathname.includes('glossary')) return 'glossary';
  if (pathname.includes('download') || pathname.startsWith('/resources')) return 'downloads';
  return 'generic';
}

export interface BuildOpenGraphMetadataOptions {
  pathname: string;
  title: string;
  description: string;
  pageType?: OgPageType;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
}

/** Build complete openGraph + twitter metadata for a page. */
export function buildOpenGraphMetadata(options: BuildOpenGraphMetadataOptions): Pick<
  Metadata,
  'openGraph' | 'twitter' | 'alternates'
> {
  const pathname = options.pathname.startsWith('/')
    ? options.pathname
    : `/${options.pathname}`;
  const canonical = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
  const pageType = options.pageType ?? inferOgPageType(pathname);
  const image = options.image ?? resolveOgImage(pathname, pageType);
  const imageUrl = image.url;

  return {
    openGraph: {
      title: options.title,
      description: options.description,
      url: canonical,
      siteName: 'Just Legal Solutions',
      locale: 'en_US',
      type: pathname.startsWith('/blog') ? 'article' : 'website',
      images: [
        {
          url: imageUrl,
          width: image.width ?? 1200,
          height: image.height ?? 630,
          alt: image.alt ?? OG_IMAGES[pageType].alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: options.title,
      description: options.description,
      images: [imageUrl],
    },
    alternates: {
      canonical,
    },
  };
}

/** Merge OG metadata into an existing Metadata object. */
export function buildPageMetadata(
  base: Metadata,
  options: BuildOpenGraphMetadataOptions
): Metadata {
  const og = buildOpenGraphMetadata(options);
  return {
    ...base,
    openGraph: { ...og.openGraph, ...(base.openGraph as object) },
    twitter: { ...og.twitter, ...(base.twitter as object) },
    alternates: { ...og.alternates, ...(base.alternates as object) },
  };
}
