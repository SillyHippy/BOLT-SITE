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
const BLOG_TARGET_DATE = process.env.BLOG_TARGET_DATE || '2027-02-28';
const BLOG_RELEASES_PER_RUN = Number(process.env.BLOG_RELEASES_PER_RUN || 0);
const BLOG_MAX_RELEASES_PER_RUN = Number(process.env.BLOG_MAX_RELEASES_PER_RUN || 5);
const BLOG_DRY_RUN = process.env.BLOG_DRY_RUN === '1';

const EEAT_REQUIREMENTS = [
  {
    key: 'experience',
    pattern: /50\+\s*years\s+of\s+combined\s+experience/i,
    message: 'Missing EEAT experience phrase: "50+ years of combined experience".',
  },
  {
    key: 'trust',
    pattern: /licensed\s+and\s+bonded\s+under\s+oklahoma\s+title\s+12\s+o\.s\.\s*158\.1/i,
    message: 'Missing EEAT trust phrase about Oklahoma Title 12 O.S. 158.1.',
  },
  {
    key: 'coverage',
    pattern: /thousands\s+of\s+documents\s+across\s+all\s+77\s+oklahoma\s+counties/i,
    message: 'Missing EEAT geography/experience proof for all 77 Oklahoma counties.',
  },
];

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

function getSourceSnippet(source, startToken, endToken = '};') {
  const start = source.indexOf(startToken);
  if (start === -1) return null;
  const end = source.indexOf(endToken, start);
  if (end === -1) return source.slice(start);
  return source.slice(start, end + endToken.length);
}

function extractStringProperty(block, key) {
  if (!block) return null;
  const re = new RegExp(`(?:['"\`])?${key}(?:['"\`])?\\s*:\\s*(['"\`])([\\s\\S]*?)\\1`);
  const match = block.match(re);
  return match ? match[2].trim() : null;
}

function inferWeekDistanceToTarget(targetDate) {
  const target = new Date(`${targetDate}T23:59:59.000Z`);
  if (Number.isNaN(target.getTime())) {
    throw new Error(`Invalid BLOG_TARGET_DATE: "${targetDate}"`);
  }
  const now = new Date();
  const millis = target.getTime() - now.getTime();
  if (millis <= 0) return 1;
  return Math.max(1, Math.ceil(millis / (1000 * 60 * 60 * 24 * 7)));
}

function determineReleaseCount(remainingPosts) {
  if (BLOG_RELEASES_PER_RUN > 0) {
    return Math.max(1, Math.min(BLOG_MAX_RELEASES_PER_RUN, BLOG_RELEASES_PER_RUN));
  }
  const weeksLeft = inferWeekDistanceToTarget(BLOG_TARGET_DATE);
  const computed = Math.ceil(remainingPosts / weeksLeft);
  return Math.max(1, Math.min(BLOG_MAX_RELEASES_PER_RUN, computed));
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

function validateSeoSchema(source, slug) {
  const errors = [];
  const warnings = [];
  const metadataBlock = getSourceSnippet(source, 'export const metadata');
  const openGraphBlock = metadataBlock ? getSourceSnippet(metadataBlock, 'openGraph: {', '},') : null;
  const alternatesBlock = metadataBlock ? getSourceSnippet(metadataBlock, 'alternates: {', '},') : null;
  const otherBlock = metadataBlock ? getSourceSnippet(metadataBlock, 'other: {', '},') : null;

  const title = extractStringProperty(metadataBlock, 'title');
  if (!title) {
    errors.push('Missing metadata.title');
  } else if (title.length > 60) {
    errors.push(`metadata.title is ${title.length} chars (must be <= 60)`);
  }

  const description = extractStringProperty(metadataBlock, 'description');
  if (!description) {
    errors.push('Missing metadata.description');
  } else if (description.length < 150 || description.length > 160) {
    errors.push(`metadata.description is ${description.length} chars (must be 150-160)`);
  }

  const keywords = extractStringProperty(metadataBlock, 'keywords');
  if (!keywords) {
    errors.push('Missing metadata.keywords');
  }

  const robots = extractStringProperty(metadataBlock, 'robots');
  if (!robots) {
    errors.push('Missing metadata.robots');
  } else {
    if (robots.includes('noindex')) {
      errors.push('metadata.robots must be index,follow (found noindex)');
    }
    if (!robots.includes('index')) {
      errors.push('metadata.robots missing index');
    }
    if (!robots.includes('max-snippet:-1')) {
      errors.push('metadata.robots missing max-snippet:-1');
    }
    if (!robots.includes('max-image-preview:large')) {
      errors.push('metadata.robots missing max-image-preview:large');
    }
  }

  const ogTitle = extractStringProperty(openGraphBlock, 'title');
  const ogDescription = extractStringProperty(openGraphBlock, 'description');
  const ogUrl = extractStringProperty(openGraphBlock, 'url');
  const ogSiteName = extractStringProperty(openGraphBlock, 'siteName');
  if (!ogTitle) errors.push('openGraph.title missing');
  if (!ogDescription) errors.push('openGraph.description missing');
  if (!ogUrl) errors.push('openGraph.url missing');
  if (!ogSiteName) errors.push('openGraph.siteName missing');
  if (!/width\s*:\s*1200/.test(openGraphBlock || '')) errors.push('openGraph image width 1200 missing');
  if (!/height\s*:\s*630/.test(openGraphBlock || '')) errors.push('openGraph image height 630 missing');

  const canonical = extractStringProperty(alternatesBlock, 'canonical');
  if (!canonical) {
    errors.push('alternates.canonical missing');
  }

  const aiContentType = extractStringProperty(otherBlock, 'ai-content-type');
  const aiSummary = extractStringProperty(otherBlock, 'ai-summary');
  const aiKeyFacts = extractStringProperty(otherBlock, 'ai-key-facts');
  if (aiContentType !== 'article') errors.push('metadata.other["ai-content-type"] must be "article"');
  if (!aiSummary) errors.push('metadata.other["ai-summary"] missing');
  if (!aiKeyFacts) errors.push('metadata.other["ai-key-facts"] missing');

  const unifiedSchemaBlock = getSourceSnippet(source, '<UnifiedSchema', '/>');
  if (!unifiedSchemaBlock) {
    errors.push('UnifiedSchema component missing');
  } else {
    if (!/pageType\s*=\s*["']article["']/.test(unifiedSchemaBlock)) {
      errors.push('UnifiedSchema pageType must be "article"');
    }
    if (!/(url|pageUrl)\s*=/.test(unifiedSchemaBlock)) {
      errors.push('UnifiedSchema url/pageUrl prop missing');
    }
    if (!/title\s*=/.test(unifiedSchemaBlock)) {
      errors.push('UnifiedSchema title prop missing');
    }
    if (!/description\s*=/.test(unifiedSchemaBlock)) {
      errors.push('UnifiedSchema description prop missing');
    }
    if (!/(faqs|faqItems)\s*=/.test(unifiedSchemaBlock)) {
      errors.push('UnifiedSchema must receive faqs or faqItems prop');
    }
  }

  const faqMatch = source.match(/const\s+faqs\s*=\s*\[([\s\S]*?)\];/);
  if (!faqMatch) {
    errors.push('FAQ array not found: expected const faqs = [...]');
  } else {
    const faqBody = faqMatch[1];
    const faqItems = faqBody.match(/question\s*:\s*['"`][\s\S]*?answer\s*:\s*['"`][\s\S]*?['"`]/g) || [];
    if (faqItems.length < 5 || faqItems.length > 6) {
      errors.push(`FAQ count is ${faqItems.length} (must be 5-6)`);
    }
    const answers = [...faqBody.matchAll(/answer\s*:\s*(['"`])([\s\S]*?)\1/g)].map((m) => m[2]);
    const shortAnswers = answers.filter((answer) => answer.trim().split(/\s+/).length < 20);
    if (shortAnswers.length > 0) {
      warnings.push(`FAQ answers short: ${shortAnswers.length} answers under 20 words`);
    }
  }

  if (!/Frequently Asked Questions/i.test(source) && !/<h2[^>]*>\s*FAQ/i.test(source)) {
    errors.push('Visible FAQ section missing on page');
  }

  for (const req of EEAT_REQUIREMENTS) {
    if (!req.pattern.test(source)) {
      errors.push(req.message);
    }
  }
  const statuteRefs = [
    /12\s*O\.S\.\s*(Section\s*)?2004/i,
    /Title\s*12\s*O\.S\.\s*158\.1/i,
    /Title\s*49\s*O\.S\./i,
  ];
  const statuteHits = statuteRefs.filter((re) => re.test(source)).length;
  if (statuteHits < 2) {
    errors.push('Need at least two Oklahoma statute citations (12 O.S. 2004 / Title 12 O.S. 158.1 / Title 49 O.S.)');
  }

  if (!metadataBlock) {
    warnings.push('Could not parse metadata block reliably; checks may be incomplete.');
  }

  return { slug, errors, warnings };
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

function pickNextPost(candidates, lastCategory) {
  if (candidates.length === 0) return null;
  const preferredCategory = lastCategory === 'notary' ? 'process' : 'notary';
  return (
    candidates.find((post) => post.normalizedCategory === preferredCategory) ||
    candidates.find((post) => post.normalizedCategory !== 'other') ||
    candidates[0]
  );
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

  const initialCandidates = (manifest.posts || [])
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

  if (initialCandidates.length === 0) {
    console.log('No eligible queued posts were found. Nothing to release this week.');
    return;
  }

  const requestedReleaseCount = determineReleaseCount(initialCandidates.length);
  const candidates = [...initialCandidates];
  const published = [];
  const failures = [];

  while (published.length < requestedReleaseCount && candidates.length > 0) {
    const next = pickNextPost(candidates, state.lastCategory);
    if (!next) break;
    const idx = candidates.findIndex((p) => p.slug === next.slug);
    if (idx >= 0) {
      candidates.splice(idx, 1);
    }

    const source = fs.readFileSync(next.sourcePath, 'utf8');
    const failedChecks = [];
    let qualityMetrics = null;

    try {
      qualityMetrics = assertQuality(source, next.slug);
    } catch (err) {
      failedChecks.push(String(err.message || err));
    }

    const seoSchema = validateSeoSchema(source, next.slug);
    if (seoSchema.errors.length > 0) {
      failedChecks.push(...seoSchema.errors.map((e) => `SEO/schema: ${e}`));
    }

    if (failedChecks.length > 0) {
      failures.push({
        slug: next.slug,
        title: next.title,
        category: next.category,
        failedChecks,
        warnings: seoSchema.warnings,
        checkedAt: new Date().toISOString(),
      });
      continue;
    }

    const copiedBySlug = copyLikelySlugImages(next.slug);
    const referencedImages = assertAndCopyReferencedImages(source, next.slug);

    if (!BLOG_DRY_RUN) {
      fs.mkdirSync(path.dirname(next.targetPath), { recursive: true });
      fs.copyFileSync(next.sourcePath, next.targetPath);
    }

    const releaseRecord = {
      slug: next.slug,
      title: next.title,
      category: next.category,
      releasedAt: new Date().toISOString(),
      quality: qualityMetrics,
      images: {
        referenced: referencedImages,
        copiedBySlugCount: copiedBySlug.length,
      },
      warnings: seoSchema.warnings,
      mode: BLOG_DRY_RUN ? 'dry-run' : 'published',
    };
    published.push(releaseRecord);

    state.lastCategory = next.normalizedCategory;
    state.lastSlug = next.slug;
    state.lastReleasedAt = new Date().toISOString();
  }

  releaseLog.releases = releaseLog.releases || [];
  releaseLog.failures = releaseLog.failures || [];
  releaseLog.releases.push(...published);
  releaseLog.failures.push(...failures);
  writeJson(logPath, releaseLog);
  if (!BLOG_DRY_RUN) {
    writeJson(statePath, state);
  }

  console.log(`Mode: ${BLOG_DRY_RUN ? 'dry-run' : 'publish'}`);
  console.log(`Target date: ${BLOG_TARGET_DATE}`);
  console.log(`Requested releases this run: ${requestedReleaseCount}`);
  console.log(`Published this run: ${published.length}`);
  for (const post of published) {
    console.log(`Released: ${post.slug} (${post.category})`);
    console.log(`Quality: ${JSON.stringify(post.quality)}`);
    console.log(
      `Images: referenced=${post.images.referenced.length}, copiedBySlug=${post.images.copiedBySlugCount}`
    );
  }
  if (failures.length > 0) {
    console.log(`Blocked posts (quality/SEO/schema failures): ${failures.length}`);
    for (const failure of failures) {
      console.log(`- ${failure.slug}`);
      for (const check of failure.failedChecks) {
        console.log(`  * ${check}`);
      }
    }
  }
  console.log(`Images: syncedQueueImages=${syncedImageCount}`);

  if (!BLOG_DRY_RUN && published.length === 0 && failures.length > 0) {
    throw new Error(
      `No posts were released because all candidates failed quality/SEO/schema checks.\n` +
        failures
          .map((failure) => `- ${failure.slug}: ${failure.failedChecks.join(' | ')}`)
          .join('\n')
    );
  }
}

releaseNextPost();
