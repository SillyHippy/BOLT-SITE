#!/usr/bin/env node
/**
 * Audit live app/ for /blog/* hrefs without matching published pages.
 * Writes content/blog-queue/pending-redirects.json and appends interim 301 rules.
 * Run: node scripts/audit-blog-queue-redirects.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const APP = path.join(ROOT, 'app');
const QUEUE_ROOT = path.join(ROOT, 'content', 'blog-queue');
const PENDING_PATH = path.join(QUEUE_ROOT, 'pending-redirects.json');
const REDIRECTS_PATH = path.join(ROOT, 'public', '_redirects');
const MANIFEST_PATH = path.join(QUEUE_ROOT, 'BLOG_MANIFEST.json');

const REDIRECT_MARKER = '# ── interim blog queue redirects ──';

/** Curated slug → interim target (topical accuracy over keyword heuristics). */
const MANUAL_SLUG_TARGETS = {
  'electronic-filing-service-oklahoma-courts': '/blog/oklahoma-court-filing-services',
  'electronic-proof-service-digital-signatures-court-acceptance-oklahoma': '/blog/proof-of-service-oklahoma-guide',
  'electronic-service-process-oklahoma-eservice': '/blog/oklahoma-court-filing-services',
  'understanding-proof-of-service-oklahoma': '/blog/proof-of-service-oklahoma-guide',
  'tulsa-county-court-filing-guide': '/blog/tulsa-court-filing-guide',
  'skip-tracing-technology-process-serving': '/blog/skip-tracing-oklahoma-guide',
  'process-server-vs-sheriff-oklahoma': '/process-server-vs-sheriff',
  'scale-solo-practice-virtual-support-oklahoma': '/blog/virtual-assistants-court-filing-efiling-support-oklahoma',
  'how-long-to-respond-lawsuit-oklahoma': '/blog/how-long-respond-lawsuit-oklahoma',
  'what-happens-if-someone-refuses-service': '/what-happens-if-someone-refuses-service',
  'oklahoma-process-server-faq': '/oklahoma-process-server-faq',
  'oklahoma-process-server-best-practices-checklist': '/oklahoma-process-server-best-practices-checklist',
  'oklahoma-process-server-laws': '/oklahoma-process-server-laws',
  'oklahoma-document-retrieval-services': '/blog/oklahoma-court-filing-services',
  'rush-same-day-process-serving-importance': '/same-day-process-server',
  'small-claims-tulsa-county-filing-guide': '/blog/how-to-serve-small-claims-oklahoma',
  'process-server-safety-guide-oklahoma': '/process-server-safety-guide-oklahoma',
  'virtual-assistant-transform-law-firm-efficiency-oklahoma': '/blog/virtual-assistants-court-filing-efiling-support-oklahoma',
};

/** Category / keyword → best live interim target (order matters). */
const INTERIM_BY_KEYWORD = [
  { test: /electronic-filing|efiling|e-filing|court-filing|eservice|electronic-service/i, target: '/blog/oklahoma-court-filing-services' },
  { test: /virtual-assistant|virtual assistant|paralegal|law-firm-efficiency|solo-practice/i, target: '/blog/virtual-assistants-court-filing-efiling-support-oklahoma' },
  { test: /\bnotary\b|notariz|apostille|power-of-attorney-notar/i, target: '/blog/mobile-notary-tulsa-guide' },
  { test: /remote-online|\bron\b/i, target: '/blog/what-is-remote-online-notarization-oklahoma' },
  { test: /courier|document-delivery|same-day-delivery/i, target: '/blog/document-courier-vs-regular-mail-law-firms-oklahoma' },
  { test: /skip-trace|evasive|difficult-defendant|find-people/i, target: '/blog/skip-tracing-oklahoma-guide' },
  { test: /subpoena|witness/i, target: '/blog/how-to-serve-a-subpoena-oklahoma' },
  { test: /eviction|landlord|tenant/i, target: '/blog/how-to-serve-eviction-notices-in-oklahoma' },
  { test: /divorce|custody|family/i, target: '/blog/how-to-serve-divorce-papers-oklahoma' },
  { test: /business|corporation|llc|entity/i, target: '/blog/serve-business-corporation-oklahoma' },
  { test: /government|agency|municipal/i, target: '/blog/serving-government-entities-oklahoma' },
  { test: /tribal|mcgirt|reservation/i, target: '/serving-legal-papers-on-tribal-land' },
  { test: /proof-of-service|affidavit|documentation|gps|digital-proof/i, target: '/blog/proof-of-service-oklahoma-guide' },
  { test: /cost|pricing|fee|invoice/i, target: '/blog/process-serving-cost-guide-oklahoma' },
  { test: /hire|hiring|choose|reliable|legitimate/i, target: '/blog/how-to-hire-a-process-server-oklahoma' },
  { test: /become|license|training|career/i, target: '/blog/become-licensed-process-server-oklahoma' },
  { test: /substitute|publication|alternative-service/i, target: '/blog/substitute-service-oklahoma' },
  { test: /workers-comp|employment/i, target: '/blog/workers-comp-subpoena-service' },
  { test: /protective-order|restraining|domestic-violence/i, target: '/blog/how-to-serve-restraining-order-oklahoma' },
  { test: /ai-|automation|legal-tech|technology/i, target: '/blog/ai-changing-legal-support-services-2026' },
  { test: /retention|chain-of-custody|document-handling/i, target: '/blog/legal-support-services-beyond-process-serving' },
];

const CATEGORY_FALLBACK = {
  'Process Serving': '/blog/how-to-hire-a-process-server-oklahoma',
  'Notary Services': '/blog/mobile-notary-tulsa-guide',
  'Virtual Assistant': '/blog/virtual-assistants-court-filing-efiling-support-oklahoma',
  'Courier Services': '/blog/document-courier-vs-regular-mail-law-firms-oklahoma',
  'Court Filing': '/blog/oklahoma-court-filing-services',
  'Legal Support': '/blog/legal-support-services-beyond-process-serving',
};

const DEFAULT_INTERIM = '/blog/25-faq-process-serving-oklahoma';

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (full.includes('blog-queue')) continue;
      walk(full, acc);
    } else if (/\.(tsx|ts|jsx|js|mdx?)$/.test(ent.name)) {
      acc.push(full);
    }
  }
  return acc;
}

function listPublishedBlogSlugs() {
  const blogDir = path.join(APP, 'blog');
  if (!fs.existsSync(blogDir)) return new Set();
  return new Set(
    fs.readdirSync(blogDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
  );
}

function loadQueueManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) return new Map();
  const data = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  const map = new Map();
  for (const post of data.posts || []) {
    map.set(post.slug, post);
  }
  return map;
}

function queueSlugExists(slug) {
  const queuePage = path.join(QUEUE_ROOT, 'app', 'blog', slug, 'page.tsx');
  return fs.existsSync(queuePage);
}

function pickInterimTarget(slug, queueMeta) {
  if (MANUAL_SLUG_TARGETS[slug]) return MANUAL_SLUG_TARGETS[slug];

  const haystack = `${slug} ${queueMeta?.title || ''} ${queueMeta?.category || ''}`;
  for (const rule of INTERIM_BY_KEYWORD) {
    if (rule.test.test(haystack)) return rule.target;
  }
  if (queueMeta?.category && CATEGORY_FALLBACK[queueMeta.category]) {
    return CATEGORY_FALLBACK[queueMeta.category];
  }
  return DEFAULT_INTERIM;
}

function extractBlogHrefs(content) {
  const hrefs = new Set();
  const re = /href=["'`]\/blog\/([a-z0-9-]+)["'`]/gi;
  let m;
  while ((m = re.exec(content)) !== null) {
    hrefs.add(m[1]);
  }
  return hrefs;
}

function countInboundLinks(slug, allFiles) {
  let count = 0;
  const pattern = new RegExp(`href=["'\`]/blog/${slug}["'\`]`, 'g');
  for (const file of allFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(pattern);
    if (matches) count += matches.length;
  }
  return count;
}

function main() {
  const published = listPublishedBlogSlugs();
  const queueMeta = loadQueueManifest();
  const appFiles = walk(APP);

  const allHrefs = new Set();
  for (const file of appFiles) {
    for (const slug of extractBlogHrefs(fs.readFileSync(file, 'utf8'))) {
      allHrefs.add(slug);
    }
  }

  const missing = [...allHrefs].filter((slug) => !published.has(slug)).sort();

  /** @type {Record<string, { target: string, reason: string, inboundLinkCount: number, inQueue: boolean }>} */
  const pending = {};
  const redirectLines = [];

  for (const slug of missing) {
    const inQueue = queueSlugExists(slug);
    const meta = queueMeta.get(slug);
    const target = pickInterimTarget(slug, meta);
    const inboundLinkCount = countInboundLinks(slug, appFiles);

    pending[slug] = {
      target,
      reason: inQueue
        ? 'Queued post — interim redirect until weekly publish'
        : 'No published page — redirect to closest live topic',
      inboundLinkCount,
      inQueue,
      updatedAt: new Date().toISOString().slice(0, 10),
    };
    redirectLines.push(`/blog/${slug} ${target} 301`);
  }

  fs.mkdirSync(path.dirname(PENDING_PATH), { recursive: true });
  fs.writeFileSync(
    PENDING_PATH,
    JSON.stringify({ generatedAt: new Date().toISOString(), redirects: pending }, null, 2) + '\n',
    'utf8'
  );

  let redirectsText = fs.readFileSync(REDIRECTS_PATH, 'utf8');
  const markerIdx = redirectsText.indexOf(REDIRECT_MARKER);
  if (markerIdx >= 0) {
    redirectsText = redirectsText.slice(0, markerIdx).replace(/\s+$/, '') + '\n';
  }
  redirectsText += `\n${REDIRECT_MARKER}\n`;
  redirectsText += `# regen: node scripts/audit-blog-queue-redirects.mjs\n`;
  for (const line of redirectLines) {
    redirectsText += `${line}\n`;
  }
  fs.writeFileSync(REDIRECTS_PATH, redirectsText, 'utf8');

  console.log(`Blog queue redirect audit complete:`);
  console.log(`  Missing slugs: ${missing.length}`);
  console.log(`  In queue: ${Object.values(pending).filter((p) => p.inQueue).length}`);
  console.log(`  Wrote: ${PENDING_PATH}`);
  console.log(`  Appended ${redirectLines.length} rules to _redirects`);
}

main();
