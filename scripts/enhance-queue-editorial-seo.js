#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const BLOG_ROOT = path.join(ROOT, 'content', 'blog-queue', 'app', 'blog');

const EEAT_VARIANTS = [
  'At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every recommendation with 12 O.S. 2004 and Title 49 O.S. where applicable.',
  'With 50+ years of combined experience, Just Legal Solutions is licensed and bonded under Oklahoma Title 12 O.S. 158.1 and has completed thousands of successful services across all 77 Oklahoma counties. Our guidance reflects Oklahoma statutes including 12 O.S. 2004 and relevant Title 49 O.S. requirements.',
  'Just Legal Solutions combines 50+ years of practical field experience with licensed, bonded compliance under Oklahoma Title 12 O.S. 158.1. We have served thousands of documents in all 77 Oklahoma counties and anchor timelines and procedure details to 12 O.S. 2004 and Title 49 O.S.',
  'Clients trust Just Legal Solutions for 50+ years of combined experience, licensed and bonded service under Oklahoma Title 12 O.S. 158.1, and statewide execution across all 77 Oklahoma counties. We reference 12 O.S. 2004 and Title 49 O.S. standards to keep filings and service defensible.',
  'At Just Legal Solutions, we pair 50+ years of combined experience with licensed, bonded operations under Oklahoma Title 12 O.S. 158.1. Our team has served thousands of documents in all 77 Oklahoma counties, with procedure guidance grounded in 12 O.S. 2004 and Title 49 O.S.',
];

const PROCESS_LINKS = [
  { href: '/blog/how-to-hire-a-process-server-oklahoma', label: 'How to Hire a Process Server in Oklahoma' },
  { href: '/blog/how-to-serve-a-subpoena-oklahoma', label: 'How to Serve a Subpoena in Oklahoma' },
  { href: '/blog/serve-out-of-state-defendant-oklahoma', label: 'Serving Out-of-State Defendants in Oklahoma Cases' },
  { href: '/blog/certified-mail-vs-personal-service-oklahoma', label: 'Certified Mail vs Personal Service in Oklahoma' },
];

const NOTARY_LINKS = [
  { href: '/blog/mobile-notary-tulsa-guide', label: 'Mobile Notary Guide for Tulsa and Oklahoma' },
  { href: '/blog/ron-vs-mobile-notary-oklahoma', label: 'RON vs Mobile Notary in Oklahoma' },
  { href: '/blog/how-to-apostille-document-oklahoma', label: 'How to Apostille a Document in Oklahoma' },
  { href: '/blog/power-of-attorney-guide-oklahoma', label: 'Power of Attorney Notarization Guide' },
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function hash(text) {
  let v = 0;
  for (let i = 0; i < text.length; i += 1) v = (v * 31 + text.charCodeAt(i)) % 1000003;
  return v;
}

function inferCategory(slug, source) {
  const s = `${slug} ${source}`.toLowerCase();
  if (s.includes('notary') || s.includes('notariz') || s.includes('apostille')) return 'notary';
  return 'process';
}

function extractMetadataValue(source, key) {
  const match = source.match(new RegExp(`(?:['"\`])?${key}(?:['"\`])?\\s*:\\s*(['"\`])([\\s\\S]*?)\\1`));
  return match ? match[2].trim() : '';
}

function replaceAiSummary(source, summary) {
  return source.replace(
    /(['"`]ai-summary['"`]\s*:\s*)(['"`])([\s\S]*?)\2/,
    `$1'${
      summary.replace(/\\/g, '').replace(/'/g, "\\'")
    }'`
  );
}

function ensureOgAltFromTitle(source, title) {
  if (/alt:\s*['"`][\s\S]*?['"`]/.test(source)) {
    return source.replace(/alt:\s*['"`][\s\S]*?['"`]/, `alt: '${title.replace(/'/g, "\\'")}'`);
  }
  return source;
}

function buildRelatedSection(slug, category, variantIdx) {
  const pool = category === 'notary' ? NOTARY_LINKS : PROCESS_LINKS;
  const links = [];
  for (let i = 0; i < 3; i += 1) {
    links.push(pool[(variantIdx + i) % pool.length]);
  }
  const filtered = links.filter((item) => !item.href.endsWith(slug));
  const selected = (filtered.length >= 3 ? filtered : links).slice(0, 3);

  return `
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related Oklahoma Resources</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><Link href="${selected[0].href}" className="text-blue-600 hover:underline">${selected[0].label}</Link></li>
            <li><Link href="${selected[1].href}" className="text-blue-600 hover:underline">${selected[1].label}</Link></li>
            <li><Link href="${selected[2].href}" className="text-blue-600 hover:underline">${selected[2].label}</Link></li>
          </ul>
        </section>
`;
}

function enhanceFile(filePath) {
  const slug = path.basename(path.dirname(filePath));
  let source = fs.readFileSync(filePath, 'utf8');
  const variantIdx = hash(slug) % EEAT_VARIANTS.length;
  const category = inferCategory(slug, source);

  const title = extractMetadataValue(source, 'title') || slug.split('-').join(' ');
  const description = extractMetadataValue(source, 'description');
  const statuteHint =
    category === 'notary'
      ? 'Includes Oklahoma notary compliance context and practical document guidance.'
      : 'Includes Oklahoma service-of-process compliance context and practical filing guidance.';
  const aiSummary = `${description} ${statuteHint}`.replace(/\s+/g, ' ').trim();

  source = replaceAiSummary(source, aiSummary);
  source = ensureOgAltFromTitle(source, title);

  source = source.replace(
    /<p className="mb-6 text-gray-700">[\s\S]*?<\/p>/,
    `<p className="mb-6 text-gray-700">${EEAT_VARIANTS[variantIdx]}</p>`
  );

  const exactEeatSentence =
    'At Just Legal Solutions, with 50+ years of combined experience, we are licensed and bonded under Oklahoma Title 12 O.S. 158.1 and have served thousands of documents across all 77 Oklahoma counties.';
  if (
    !/50\+\s*years\s+of\s+combined\s+experience/i.test(source) ||
    !/licensed\s+and\s+bonded\s+under\s+oklahoma\s+title\s+12\s+o\.s\.\s*158\.1/i.test(source) ||
    !/thousands\s+of\s+documents\s+across\s+all\s+77\s+oklahoma\s+counties/i.test(source)
  ) {
    if (source.includes('<LocalPromoBanner')) {
      source = source.replace(
        '<LocalPromoBanner',
        `      <p className="mb-8 text-gray-700">${exactEeatSentence}</p>\n      <LocalPromoBanner`
      );
    }
  }

  if (!source.includes('Related Oklahoma Resources')) {
    const section = buildRelatedSection(slug, category, variantIdx);
    if (source.includes('{/* FAQ SECTION */}')) {
      source = source.replace('{/* FAQ SECTION */}', `${section}\n        {/* FAQ SECTION */}`);
    } else if (source.includes('Frequently Asked Questions')) {
      source = source.replace(
        /<h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions<\/h2>/,
        `${section}\n          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>`
      );
    } else if (source.includes('<LocalPromoBanner')) {
      source = source.replace('<LocalPromoBanner', `${section}\n      <LocalPromoBanner`);
    }
  }

  fs.writeFileSync(filePath, source, 'utf8');
}

function run() {
  if (!fs.existsSync(BLOG_ROOT)) {
    throw new Error(`Queue blog directory not found: ${BLOG_ROOT}`);
  }
  const files = walk(BLOG_ROOT).filter((file) => file.endsWith(`${path.sep}page.tsx`));
  for (const file of files) enhanceFile(file);
  console.log(`Enhanced ${files.length} queue posts for editorial SEO and AI uniqueness.`);
}

run();
