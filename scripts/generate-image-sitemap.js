#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://justlegalsolutions.org';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const APP_DIR = path.join(process.cwd(), 'app');
const OUT_DIR = path.join(process.cwd(), 'out');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap-images.xml');
const MAX_IMAGES_PER_URL = 1000;

const EXCLUDE_PAGE_PATHS = new Set([
  '/404',
  '/card',
  '/card/calendar',
  '/leave-review',
  '/local-seo-marker',
  '/multi-search-marker',
  '/performance-marker',
  '/reviews/phone',
  '/reviews/survey',
  '/reviews/text',
  '/security-policy',
  '/seo-dashboard',
  '/viewer',
  '/future-ai-ready',
  '/local-legal-events',
  '/ai-business-info',
  '/backlinks',
  '/affidavit',
  '/voice-friendly',
  '/platform-supremacy',
  '/voice-search-marker',
]);

const EXCLUDE_IMAGE_RE = [
  /favicon/i,
  /apple-touch-icon/i,
  /web-app-manifest/i,
  /grid-pattern\.svg/i,
  /contactlogo/i,
  /landingpage\/icons/i,
  /NPSN-logo/i,
  /notary-credentials/i,
];

const IMAGE_EXT_RE = /\.(webp|jpg|jpeg|png|gif|svg)$/i;

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildPublicFileIndex() {
  const index = new Map();

  function walk(dir, base = '') {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const rel = base ? `${base}/${entry.name}` : entry.name;
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath, rel);
        continue;
      }

      if (!IMAGE_EXT_RE.test(entry.name)) continue;

      const normalized = `/${rel.replace(/\\/g, '/')}`.toLowerCase();
      index.set(normalized, `/${rel.replace(/\\/g, '/')}`);
    }
  }

  walk(PUBLIC_DIR);
  return index;
}

function shouldExcludeImage(urlPath) {
  if (!urlPath.startsWith('/')) return true;
  if (EXCLUDE_IMAGE_RE.some((pattern) => pattern.test(urlPath))) return true;
  return false;
}

function resolvePublicPath(urlPath, fileIndex) {
  const normalized = urlPath.split('?')[0].toLowerCase();
  if (fileIndex.has(normalized)) {
    return fileIndex.get(normalized);
  }

  const ext = path.extname(normalized);
  const base = normalized.slice(0, -ext.length);
  const preferredExts = ['.webp', '.jpg', '.jpeg', '.png', '.gif', '.svg'];

  for (const nextExt of preferredExts) {
    const candidate = `${base}${nextExt}`;
    if (fileIndex.has(candidate)) {
      return fileIndex.get(candidate);
    }
  }

  return null;
}

function toAbsoluteImageUrl(urlPath) {
  return `${DOMAIN}${urlPath}`;
}

function normalizeExtractedPath(raw) {
  let value = raw.trim();

  if (value.startsWith(DOMAIN)) {
    value = value.slice(DOMAIN.length);
  }

  if (!value.startsWith('/')) {
    value = `/${value}`;
  }

  value = value.split('?')[0];
  if (!IMAGE_EXT_RE.test(value)) return null;
  if (shouldExcludeImage(value)) return null;

  return value;
}

function extractImagesFromContent(content) {
  const found = new Map();

  const absolutePattern = /https:\/\/justlegalsolutions\.org(\/[^'"`\s>]+?\.(?:webp|jpg|jpeg|png|gif|svg))/gi;
  let match;
  while ((match = absolutePattern.exec(content)) !== null) {
    const normalized = normalizeExtractedPath(match[1]);
    if (normalized) found.set(normalized, found.get(normalized) || null);
  }

  const relativePattern = /['"`](\/(?:images|badges|image-pack|blog\/images)\/[^'"`\s>]+?\.(?:webp|jpg|jpeg|png|gif|svg))['"`]/gi;
  while ((match = relativePattern.exec(content)) !== null) {
    const normalized = normalizeExtractedPath(match[1]);
    if (normalized) found.set(normalized, found.get(normalized) || null);
  }

  const altPattern = /alt:\s*['"`]([^'"`]+)['"`][\s\S]{0,200}?url:\s*['"`]https:\/\/justlegalsolutions\.org(\/[^'"`]+?\.(?:webp|jpg|jpeg|png|gif|svg))['"`]/gi;
  while ((match = altPattern.exec(content)) !== null) {
    const normalized = normalizeExtractedPath(match[2]);
    if (normalized) found.set(normalized, match[1]);
  }

  const altPatternRelative = /alt:\s*['"`]([^'"`]+)['"`][\s\S]{0,200}?url:\s*['"`](\/[^'"`]+?\.(?:webp|jpg|jpeg|png|gif|svg))['"`]/gi;
  while ((match = altPatternRelative.exec(content)) !== null) {
    const normalized = normalizeExtractedPath(match[2]);
    if (normalized) found.set(normalized, match[1]);
  }

  const imagePropPattern = /image(?:Url)?[=:]\s*['"`](https:\/\/justlegalsolutions\.org\/[^'"`]+?\.(?:webp|jpg|jpeg|png|gif|svg)|\/[^'"`]+?\.(?:webp|jpg|jpeg|png|gif|svg))['"`]/gi;
  while ((match = imagePropPattern.exec(content)) !== null) {
    const normalized = normalizeExtractedPath(match[1]);
    if (normalized) found.set(normalized, found.get(normalized) || null);
  }

  return found;
}

function filePathToPageUrl(filePath) {
  const rel = path.relative(APP_DIR, filePath).replace(/\\/g, '/');
  const parts = rel.split('/');

  if (parts.some((part) => part.startsWith('[') && part.endsWith(']'))) {
    return null;
  }

  if (parts[parts.length - 1] === 'metadata.ts') {
    parts.pop();
  } else if (parts[parts.length - 1] === 'page.tsx') {
    parts.pop();
  } else {
    return null;
  }

  const routeParts = parts.filter((part) => part !== '(main)' && part !== '(marketing)');
  if (routeParts.length === 0) return '/';

  const pagePath = `/${routeParts.join('/')}`;
  if (EXCLUDE_PAGE_PATHS.has(pagePath)) return null;

  return pagePath;
}

function collectAppPageFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectAppPageFiles(fullPath, files);
      continue;
    }

    if (entry.name === 'page.tsx' || entry.name === 'metadata.ts') {
      files.push(fullPath);
    }
  }

  return files;
}

function titleFromPath(urlPath) {
  const basename = path.basename(urlPath, path.extname(urlPath));
  return basename
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function addImage(pageMap, pageUrl, publicPath, title, fileIndex) {
  const resolvedPath = resolvePublicPath(publicPath, fileIndex);
  if (!resolvedPath) return;

  const absoluteUrl = toAbsoluteImageUrl(resolvedPath);
  if (!pageMap.has(pageUrl)) pageMap.set(pageUrl, new Map());
  const imagesForPage = pageMap.get(pageUrl);

  if (!imagesForPage.has(absoluteUrl)) {
    imagesForPage.set(absoluteUrl, title || titleFromPath(resolvedPath));
  }
}

function mapBlogImages(pageMap, fileIndex) {
  const blogImagesDir = path.join(PUBLIC_DIR, 'blog', 'images');
  const blogPagesDir = path.join(APP_DIR, 'blog');

  if (!fs.existsSync(blogImagesDir) || !fs.existsSync(blogPagesDir)) return;

  const blogSlugs = new Set(
    fs
      .readdirSync(blogPagesDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && entry.name !== 'category' && !entry.name.startsWith('['))
      .map((entry) => entry.name)
  );

  const seenSlugs = new Set();

  for (const filename of fs.readdirSync(blogImagesDir)) {
    if (!filename.endsWith('.webp')) continue;

    const slug = filename.replace(/\.webp$/i, '');
    if (!blogSlugs.has(slug) || seenSlugs.has(slug)) continue;

    seenSlugs.add(slug);
    addImage(pageMap, `/blog/${slug}`, `/blog/images/${filename}`, titleFromPath(slug), fileIndex);
  }
}

function generateImageSitemap() {
  const fileIndex = buildPublicFileIndex();
  const pageMap = new Map();

  for (const filePath of collectAppPageFiles(APP_DIR)) {
    const pageUrl = filePathToPageUrl(filePath);
    if (!pageUrl) continue;

    const content = fs.readFileSync(filePath, 'utf8');
    const images = extractImagesFromContent(content);

    for (const [imagePath, alt] of images.entries()) {
      addImage(pageMap, pageUrl, imagePath, alt, fileIndex);
    }
  }

  mapBlogImages(pageMap, fileIndex);

  const sortedPages = [...pageMap.entries()]
    .filter(([, images]) => images.size > 0)
    .sort(([a], [b]) => a.localeCompare(b));

  let urlBlocks = '';
  let totalImages = 0;

  for (const [pageUrl, images] of sortedPages) {
    const imageEntries = [...images.entries()].slice(0, MAX_IMAGES_PER_URL);
    totalImages += imageEntries.length;

    urlBlocks += `  <url>\n    <loc>${DOMAIN}${pageUrl === '/' ? '/' : pageUrl}</loc>\n`;

    for (const [imageUrl, title] of imageEntries) {
      urlBlocks += `    <image:image>\n      <image:loc>${escapeXml(imageUrl)}</image:loc>\n      <image:title>${escapeXml(title)}</image:title>\n    </image:image>\n`;
    }

    urlBlocks += `  </url>\n`;
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urlBlocks}</urlset>\n`;

  fs.writeFileSync(SITEMAP_PATH, sitemapXml);

  if (fs.existsSync(OUT_DIR)) {
    fs.writeFileSync(path.join(OUT_DIR, 'sitemap-images.xml'), sitemapXml);
  }

  console.log(`✅ Generated public/sitemap-images.xml successfully.`);
  console.log(`   - ${sortedPages.length} pages`);
  console.log(`   - ${totalImages} images`);
}

try {
  generateImageSitemap();
} catch (err) {
  console.error('Error generating image sitemap:', err);
  process.exit(1);
}
