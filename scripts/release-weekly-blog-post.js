#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DEFAULT_QUEUE_ROOT = path.join(ROOT, 'content', 'blog-queue');

const queueRoot = process.env.BLOG_QUEUE_ROOT
  ? path.resolve(process.env.BLOG_QUEUE_ROOT)
  : DEFAULT_QUEUE_ROOT;
const manifestPath = path.join(queueRoot, 'BLOG_MANIFEST.json');
const queueAppBlogRoot = path.join(queueRoot, 'app', 'blog');
const queuePublicBlogImagesRoot = path.join(queueRoot, 'public', 'blog', 'images');
const statePath = path.join(queueRoot, 'release-state.json');
const logPath = path.join(queueRoot, 'release-log.json');
const targetBlogRoot = path.join(ROOT, 'app', 'blog');
const targetPublicBlogImagesRoot = path.join(ROOT, 'public', 'blog', 'images');

const QUALITY_MIN_WORDS = Number(process.env.BLOG_MIN_WORDS || 900);
const QUALITY_MIN_HEADINGS = Number(process.env.BLOG_MIN_HEADINGS || 4);
const QUALITY_MIN_PARAGRAPHS = Number(process.env.BLOG_MIN_PARAGRAPHS || 8);

function ensureFile(pathname, fallbackContent) {
  if (!fs.existsSync(pathname)) {
    fs.mkdirSync(path.dirname(pathname), { recursive: true });
    fs.writeFileSync(pathname, fallbackContent, 'utf8');
  }
}

function readJson(pathname) {
  return JSON.parse(fs.readFileSync(pathname, 'utf8'));
}

function writeJson(pathname, value) {
  fs.mkdirSync(path.dirname(pathname), { recursive: true });
  fs.writeFileSync(pathname, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function normalizeCategory(category) {
  const v = String(category || '').toLowerCase();
  if (v.includes('notary')) return 'notary';
  if (v.includes('process')) return 'process';
  return 'other';
}

function sourcePathForPost(post) {
  const fromManifest = post.file_path || '';
  if (fromManifest.includes('app/blog/')) {
    return path.join(queueRoot, fromManifest);
  }
  return path.join(queueAppBlogRoot, post.slug, 'page.tsx');
}

function collectQualityMetrics(source) {
  const withoutImports = source.replace(/^import .*$/gm, ' ');
  const withoutJsxTags = withoutImports.replace(/<[^>]+>/g, ' ');
  const plain = withoutJsxTags.replace(/[{}()[\];,]/g, ' ').replace(/\s+/g, ' ').trim();
  const words = plain ? plain.split(' ').length : 0;
  const headings = (source.match(/<h[1-6]\b/g) || []).length;
  const paragraphs = (source.match(/<p\b/g) || []).length;
  return { words, headings, paragraphs };
}

function assertQuality(source, slug) {
  const metrics = collectQualityMetrics(source);
  const failures = [];
  if (metrics.words < QUALITY_MIN_WORDS) {
    failures.push(`word_count ${metrics.words} < ${QUALITY_MIN_WORDS}`);
  }
  if (metrics.headings < QUALITY_MIN_HEADINGS) {
    failures.push(`heading_count ${metrics.headings} < ${QUALITY_MIN_HEADINGS}`);
  }
  if (metrics.paragraphs < QUALITY_MIN_PARAGRAPHS) {
    failures.push(`paragraph_count ${metrics.paragraphs} < ${QUALITY_MIN_PARAGRAPHS}`);
  }
  if (failures.length) {
    const message =
      `Quality gate failed for "${slug}".\n` +
      `Metrics: ${JSON.stringify(metrics)}\n` +
      `Fix needed:\n- ${failures.join('\n- ')}`;
    throw new Error(message);
  }
  return metrics;
}

function extractReferencedBlogImages(source) {
  const refs = new Set();
  const regex = /['"`](\/blog\/images\/[^'"`\s)]+)['"`]/g;
  let match = regex.exec(source);
  while (match) {
    refs.add(match[1]);
    match = regex.exec(source);
  }
  return Array.from(refs);
}

function copyLikelySlugImages(slug) {
  if (!fs.existsSync(queuePublicBlogImagesRoot)) {
    return [];
  }
  const files = fs.readdirSync(queuePublicBlogImagesRoot);
  const copied = [];
  for (const file of files) {
    const lower = file.toLowerCase();
    if (!lower.includes(slug.toLowerCase())) continue;
    const from = path.join(queuePublicBlogImagesRoot, file);
    const to = path.join(targetPublicBlogImagesRoot, file);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to);
    copied.push(to);
  }
  return copied;
}

function syncAllQueueBlogImages() {
  if (!fs.existsSync(queuePublicBlogImagesRoot)) {
    return 0;
  }
  const files = fs.readdirSync(queuePublicBlogImagesRoot, { withFileTypes: true });
  let copiedCount = 0;
  for (const file of files) {
    if (!file.isFile()) continue;
    const from = path.join(queuePublicBlogImagesRoot, file.name);
    const to = path.join(targetPublicBlogImagesRoot, file.name);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to);
    copiedCount += 1;
  }
  return copiedCount;
}

function assertAndCopyReferencedImages(source, slug) {
  const refs = extractReferencedBlogImages(source);
  const missing = [];
  for (const ref of refs) {
    const relPath = ref.startsWith('/') ? ref.slice(1) : ref;
    const targetPath = path.join(ROOT, relPath.replace(/\//g, path.sep));
    const queuePath = path.join(queueRoot, relPath.replace(/\//g, path.sep));

    if (fs.existsSync(targetPath)) continue;
    if (fs.existsSync(queuePath)) {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      fs.copyFileSync(queuePath, targetPath);
      continue;
    }
    missing.push(ref);
  }

  if (missing.length) {
    throw new Error(
      `Image check failed for "${slug}". Referenced blog images are missing:\n- ${missing.join('\n- ')}\n` +
        'Add the files to queue public/blog/images or update post references.'
    );
  }
  return refs;
}

function releaseNextPost() {
  if (!fs.existsSync(manifestPath)) {
    throw new Error(
      `Queue manifest not found at ${manifestPath}.\n` +
        'Add your Kimi pipeline export under content/blog-queue (including BLOG_MANIFEST.json and app/blog/*).'
    );
  }

  ensureFile(statePath, JSON.stringify({ lastCategory: 'process' }, null, 2));
  ensureFile(logPath, JSON.stringify({ releases: [] }, null, 2));
  const syncedImageCount = syncAllQueueBlogImages();

  const manifest = readJson(manifestPath);
  const state = readJson(statePath);
  const releaseLog = readJson(logPath);

  const candidates = (manifest.posts || [])
    .map((post) => {
      const sourcePath = sourcePathForPost(post);
      const targetPath = path.join(targetBlogRoot, post.slug, 'page.tsx');
      return {
        ...post,
        normalizedCategory: normalizeCategory(post.category),
        sourcePath,
        targetPath,
        alreadyPublished: fs.existsSync(targetPath),
        sourceExists: fs.existsSync(sourcePath),
      };
    })
    .filter((post) => !post.alreadyPublished && post.sourceExists);

  if (candidates.length === 0) {
    console.log('No eligible queued posts were found. Nothing to release this week.');
    return;
  }

  const preferredCategory = state.lastCategory === 'notary' ? 'process' : 'notary';
  const next =
    candidates.find((post) => post.normalizedCategory === preferredCategory) ||
    candidates.find((post) => post.normalizedCategory !== 'other') ||
    candidates[0];

  const source = fs.readFileSync(next.sourcePath, 'utf8');
  const qualityMetrics = assertQuality(source, next.slug);
  const copiedBySlug = copyLikelySlugImages(next.slug);
  const referencedImages = assertAndCopyReferencedImages(source, next.slug);

  fs.mkdirSync(path.dirname(next.targetPath), { recursive: true });
  fs.copyFileSync(next.sourcePath, next.targetPath);

  state.lastCategory = next.normalizedCategory;
  state.lastSlug = next.slug;
  state.lastReleasedAt = new Date().toISOString();
  writeJson(statePath, state);

  releaseLog.releases = releaseLog.releases || [];
  releaseLog.releases.push({
    slug: next.slug,
    title: next.title,
    category: next.category,
    releasedAt: new Date().toISOString(),
    quality: qualityMetrics,
    images: {
      referenced: referencedImages,
      copiedBySlugCount: copiedBySlug.length,
    },
  });
  writeJson(logPath, releaseLog);

  console.log(`Released: ${next.slug}`);
  console.log(`Category: ${next.category}`);
  console.log(`Source: ${path.relative(ROOT, next.sourcePath)}`);
  console.log(`Target: ${path.relative(ROOT, next.targetPath)}`);
  console.log(`Quality: ${JSON.stringify(qualityMetrics)}`);
  console.log(`Images: referenced=${referencedImages.length}, copiedBySlug=${copiedBySlug.length}`);
  console.log(`Images: syncedQueueImages=${syncedImageCount}`);
}

releaseNextPost();
