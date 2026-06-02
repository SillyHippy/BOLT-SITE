#!/usr/bin/env node
/**
 * Inject missing openGraph.images, openGraph.url, and twitter blocks into page.tsx files under app/.
 * Run: node scripts/fix-open-graph-metadata.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const APP = path.join(ROOT, 'app');
const SITE_URL = 'https://justlegalsolutions.org';

const OG_IMAGES = {
  county: { filename: 'image-085-counties-hero.webp', alt: 'Oklahoma county process serving — licensed and bonded service statewide' },
  serviceArea: { filename: 'image-032-service-areas-card.webp', alt: 'Oklahoma process server service area — local legal document delivery' },
  blog: { filename: 'image-043-blog-hero.png', alt: 'Just Legal Solutions blog — Oklahoma process serving and legal support' },
  guide: { filename: 'image-077-guides-hero.png', alt: 'Oklahoma legal process guides from Just Legal Solutions' },
  glossary: { filename: 'image-052-glossary-og.png', alt: 'Oklahoma legal glossary — process serving and court terms' },
  downloads: { filename: 'image-051-downloads-card.png', alt: 'Free Oklahoma process server forms and legal document downloads' },
  generic: { filename: 'image-002-home-og.webp', alt: 'Just Legal Solutions — professional process serving in Oklahoma' },
};

const manifest = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'public/image-pack/images/image-seo-manifest.json'), 'utf8')
);
const manifestOgByPage = new Map();
for (const img of manifest.images) {
  if (img.slot === 'og') manifestOgByPage.set(img.page, img);
}

const SKIP_FILES = new Set([
  path.join(APP, '(main)', 'page.tsx'),
]);

const HANDBUILT_OG = new Set([
  path.join(APP, 'counties', 'tulsa-county', 'page.tsx'),
  path.join(APP, 'counties', 'creek-county', 'page.tsx'),
]);

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc);
    else if (ent.name === 'page.tsx') acc.push(full);
  }
  return acc;
}

function inferPageType(relPath) {
  const p = relPath.replace(/\\/g, '/');
  if (p.startsWith('counties/')) return 'county';
  if (p.startsWith('service-areas/')) return 'serviceArea';
  if (p.startsWith('blog/')) return 'blog';
  if (p.startsWith('guides')) return 'guide';
  if (p.includes('legal-glossary') || p.includes('glossary')) return 'glossary';
  if (p.includes('download') || p.startsWith('resources/')) return 'downloads';
  return 'generic';
}

function pathnameFromFile(filePath) {
  let rel = path.relative(APP, filePath).replace(/\\/g, '/');
  rel = rel.replace(/\/page\.tsx$/, '');
  rel = rel.replace(/^\([^)]+\)\//, '');
  if (rel === 'page.tsx' || rel === '') return '/';
  return `/${rel}`;
}

function resolveImage(pathname, pageType) {
  const manifestEntry = manifestOgByPage.get(pathname);
  if (manifestEntry) {
    const [width, height] = (manifestEntry.dimensions || '1200x630').split('x').map(Number);
    return {
      url: `${SITE_URL}/image-pack/images/${manifestEntry.filename}`,
      width: width || 1200,
      height: height || 630,
      alt: manifestEntry.alt_text || OG_IMAGES[pageType].alt,
    };
  }
  const d = OG_IMAGES[pageType];
  return {
    url: `${SITE_URL}/image-pack/images/${d.filename}`,
    width: 1200,
    height: 630,
    alt: d.alt,
  };
}

function extractStringProp(block, key) {
  const re = new RegExp(`${key}\\s*:\\s*'((?:\\\\'|[^'])*)'`);
  const m = block.match(re);
  return m ? m[1].replace(/\\'/g, "'") : null;
}

function jsSingleQuoted(value) {
  return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

function buildTwitterBlock(title, description, imageUrl) {
  return `twitter: {
    card: 'summary_large_image',
    title: ${jsSingleQuoted(title)},
    description: ${jsSingleQuoted(description)},
    images: ['${imageUrl}'],
  },`;
}

function hasOpenGraphImages(src) {
  return /openGraph\s*:\s*\{[\s\S]*?images\s*:/m.test(src);
}

function hasOpenGraphUrl(src) {
  return /openGraph\s*:\s*\{[\s\S]*?\burl\s*:/m.test(src);
}

function hasTwitterBlock(src) {
  return /\btwitter\s*:\s*\{/m.test(src);
}

function buildImagesBlock(img) {
  return `images: [{
      url: '${img.url}',
      width: ${img.width},
      height: ${img.height},
      alt: ${jsSingleQuoted(img.alt)},
    }],`;
}

function fixStaticMetadataFile(filePath) {
  if (SKIP_FILES.has(filePath) || HANDBUILT_OG.has(filePath)) {
    return { file: filePath, status: 'skipped' };
  }
  if (/generateMetadata\s*\(/.test(fs.readFileSync(filePath, 'utf8'))) {
    return { file: filePath, status: 'skipped-dynamic' };
  }

  let src = fs.readFileSync(filePath, 'utf8');
  const original = src;

  const metaMatch = src.match(/export const metadata:\s*Metadata\s*=\s*\{/);
  if (!metaMatch) return { file: filePath, status: 'no-metadata' };

  const pathname = pathnameFromFile(filePath);
  if (pathname === '/') return { file: filePath, status: 'skipped-home' };

  const pageType = inferPageType(path.relative(APP, filePath));
  const img = resolveImage(pathname, pageType);
  const canonical = `${SITE_URL}${pathname}`;

  const title =
    extractStringProp(src, 'title') ||
    (src.match(/title:\s*['"`]([^'"`]+)['"`]/)?.[1] ?? 'Just Legal Solutions');
  const description =
    extractStringProp(src, 'description') ||
    (src.match(/description:\s*['"`]([^'"`]+)['"`]/)?.[1] ?? 'Professional process serving in Oklahoma.');

  let changed = false;

  if (!/openGraph\s*:\s*\{/.test(src)) {
    const ogType = pathname.startsWith('/blog') ? 'article' : 'website';
    const ogBlock = `openGraph: {
    title: '${title.replace(/'/g, "\\'")}',
    description: '${description.replace(/'/g, "\\'")}',
    url: '${canonical}',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: '${ogType}',
    ${buildImagesBlock(img)}
  },`;
    src = src.replace(
      /export const metadata:\s*Metadata\s*=\s*\{/,
      `export const metadata: Metadata = {\n  ${ogBlock}`
    );
    changed = true;
  } else {
    if (!hasOpenGraphUrl(src)) {
      src = src.replace(/openGraph\s*:\s*\{/, `openGraph: {\n    url: '${canonical}',`);
      changed = true;
    }
    if (!hasOpenGraphImages(src)) {
      src = src.replace(/openGraph\s*:\s*\{/, `openGraph: {\n    ${buildImagesBlock(img)}`);
      changed = true;
    }
  }

  if (!hasTwitterBlock(src)) {
    const insertBefore = src.match(/(\n\s*alternates\s*:\s*\{)/);
    const twitter = buildTwitterBlock(title, description, img.url);
    if (insertBefore) {
      src = src.replace(insertBefore[0], `\n  ${twitter}${insertBefore[0]}`);
    } else {
      src = src.replace(/(\n\s*openGraph\s*:\s*\{[\s\S]*?\n\s*\},)/, `$1\n  ${twitter}`);
    }
    changed = true;
  }

  if (!/alternates\s*:\s*\{/.test(src)) {
    src = src.replace(/export const metadata:\s*Metadata\s*=\s*\{/, `export const metadata: Metadata = {\n  alternates: {\n    canonical: '${canonical}',\n  },`);
    changed = true;
  } else if (!/canonical\s*:/.test(src)) {
    src = src.replace(/alternates\s*:\s*\{/, `alternates: {\n    canonical: '${canonical}',`);
    changed = true;
  }

  if (changed && src !== original) {
    fs.writeFileSync(filePath, src, 'utf8');
    return { file: filePath, status: 'fixed', pathname };
  }
  return { file: filePath, status: 'unchanged', pathname };
}

const results = walk(APP).map(fixStaticMetadataFile);
const fixed = results.filter((r) => r.status === 'fixed');
console.log(`Open Graph fix complete: ${fixed.length} pages updated`);
for (const r of fixed) {
  console.log(`  ✓ ${r.pathname}`);
}
console.log(`Skipped: ${results.filter((r) => r.status.startsWith('skip')).length}`);
console.log(`Unchanged: ${results.filter((r) => r.status === 'unchanged').length}`);
console.log(`No metadata: ${results.filter((r) => r.status === 'no-metadata').length}`);
