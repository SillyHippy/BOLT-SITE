#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const BLOG_ROOT = path.join(ROOT, 'app', 'blog');
const REPORT_DIR = path.join(ROOT, 'reports', 'seo-audit');
const REPORT_PATH = path.join(REPORT_DIR, `monthly-seo-audit-${new Date().toISOString().slice(0, 10)}.md`);
const STRICT_AUDIT = process.env.STRICT_SEO_AUDIT === '1';

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function extract(source, pattern) {
  const match = source.match(pattern);
  return match ? match[1].trim() : '';
}

function countMatches(source, pattern) {
  return (source.match(pattern) || []).length;
}

function parsePost(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const slug = path.basename(path.dirname(filePath));
  const title = extract(source, /title\s*:\s*['"`]([\s\S]*?)['"`]/);
  const description = extract(source, /description\s*:\s*['"`]([\s\S]*?)['"`]/);
  const robots = extract(source, /robots\s*:\s*['"`]([\s\S]*?)['"`]/);
  const canonical = extract(source, /canonical\s*:\s*['"`]([\s\S]*?)['"`]/);
  const hasAiSummary = /['"`]ai-summary['"`]\s*:/.test(source);
  const hasAiFacts = /['"`]ai-key-facts['"`]\s*:/.test(source);
  const hasAiType = /['"`]ai-content-type['"`]\s*:\s*['"`]article['"`]/.test(source);
  const hasUnifiedSchema = /<UnifiedSchema[\s\S]*pageType\s*=\s*['"`]article['"`]/.test(source);
  const hasFaqProp = /<UnifiedSchema[\s\S]*(faqs|faqItems)\s*=/.test(source);
  const faqCount = countMatches(source, /question\s*:\s*['"`]/g);
  const h2Count = countMatches(source, /<h2\b/g);
  const internalLinks = countMatches(source, /<Link\s+href=['"`]\/(?!\/)/g);

  return {
    slug,
    path: path.relative(ROOT, filePath).replace(/\\/g, '/'),
    title,
    description,
    robots,
    canonical,
    hasAiSummary,
    hasAiFacts,
    hasAiType,
    hasUnifiedSchema,
    hasFaqProp,
    faqCount,
    h2Count,
    internalLinks,
  };
}

function pushIssue(issues, severity, slug, message) {
  issues.push({ severity, slug, message });
}

function analyze(posts) {
  const issues = [];
  const titleMap = new Map();
  const descMap = new Map();

  for (const post of posts) {
    if (!post.title) pushIssue(issues, 'high', post.slug, 'Missing metadata title.');
    if (post.title && post.title.length > 60) pushIssue(issues, 'medium', post.slug, `Title too long (${post.title.length}).`);

    if (!post.description) pushIssue(issues, 'high', post.slug, 'Missing metadata description.');
    if (post.description && (post.description.length < 150 || post.description.length > 160)) {
      pushIssue(issues, 'medium', post.slug, `Description out of range (${post.description.length}; expected 150-160).`);
    }

    if (!post.robots.includes('max-snippet:-1') || !post.robots.includes('max-image-preview:large')) {
      pushIssue(issues, 'high', post.slug, 'Robots directive missing max-snippet or max-image-preview guardrails.');
    }
    if (!post.canonical) pushIssue(issues, 'high', post.slug, 'Canonical URL missing.');
    if (!post.hasAiType || !post.hasAiSummary || !post.hasAiFacts) {
      pushIssue(issues, 'high', post.slug, 'Missing required AI metadata fields.');
    }
    if (!post.hasUnifiedSchema || !post.hasFaqProp) {
      pushIssue(issues, 'high', post.slug, 'UnifiedSchema article+FAQ props missing.');
    }
    if (post.faqCount < 5) pushIssue(issues, 'medium', post.slug, `FAQ count low (${post.faqCount}; expected >=5).`);
    if (post.internalLinks < 3) pushIssue(issues, 'low', post.slug, `Low internal links (${post.internalLinks}; target >=3).`);
    if (post.h2Count < 4) pushIssue(issues, 'low', post.slug, `Low section depth (${post.h2Count} h2 headings).`);

    if (post.title) {
      const arr = titleMap.get(post.title) || [];
      arr.push(post.slug);
      titleMap.set(post.title, arr);
    }
    if (post.description) {
      const arr = descMap.get(post.description) || [];
      arr.push(post.slug);
      descMap.set(post.description, arr);
    }
  }

  for (const [title, slugs] of titleMap.entries()) {
    if (slugs.length > 1) pushIssue(issues, 'high', slugs.join(', '), `Duplicate title: "${title}"`);
  }
  for (const [desc, slugs] of descMap.entries()) {
    if (slugs.length > 1) pushIssue(issues, 'medium', slugs.join(', '), `Duplicate description: "${desc}"`);
  }

  return issues;
}

function generateReport(posts, issues) {
  const total = posts.length;
  const bySeverity = {
    high: issues.filter((i) => i.severity === 'high').length,
    medium: issues.filter((i) => i.severity === 'medium').length,
    low: issues.filter((i) => i.severity === 'low').length,
  };

  const lines = [];
  lines.push('# Monthly SEO/AI Audit (No API)');
  lines.push('');
  lines.push(`- Generated: ${new Date().toISOString()}`);
  lines.push(`- Posts scanned: ${total}`);
  lines.push(`- Issues: high=${bySeverity.high}, medium=${bySeverity.medium}, low=${bySeverity.low}`);
  lines.push('');
  lines.push('## Priority Fixes');
  lines.push('');
  if (issues.length === 0) {
    lines.push('No issues found. All scanned posts meet configured checks.');
  } else {
    for (const severity of ['high', 'medium', 'low']) {
      const scoped = issues.filter((i) => i.severity === severity);
      if (scoped.length === 0) continue;
      lines.push(`### ${severity.toUpperCase()}`);
      for (const issue of scoped) {
        lines.push(`- \`${issue.slug}\`: ${issue.message}`);
      }
      lines.push('');
    }
  }

  lines.push('## Spot-Check Metrics');
  lines.push('');
  const sample = posts.slice(0, 10);
  for (const post of sample) {
    lines.push(
      `- \`${post.slug}\`: title=${post.title.length || 0}, desc=${post.description.length || 0}, faqs=${post.faqCount}, h2=${post.h2Count}, links=${post.internalLinks}`
    );
  }
  lines.push('');
  lines.push('## Notes');
  lines.push('');
  lines.push('- This audit is fully rule-based and local. No AI APIs are required.');
  lines.push('- Tune thresholds in `scripts/monthly-seo-audit.js` as your editorial strategy evolves.');

  return lines.join('\n');
}

function main() {
  if (!fs.existsSync(BLOG_ROOT)) {
    throw new Error(`Blog root not found: ${BLOG_ROOT}`);
  }
  const files = walk(BLOG_ROOT).filter((file) => file.endsWith(`${path.sep}page.tsx`));
  const posts = files.map(parsePost);
  const issues = analyze(posts);
  const report = generateReport(posts, issues);

  fs.mkdirSync(REPORT_DIR, { recursive: true });
  fs.writeFileSync(REPORT_PATH, `${report}\n`, 'utf8');

  console.log(`Scanned posts: ${posts.length}`);
  console.log(`Issues found: ${issues.length}`);
  console.log(`Report: ${path.relative(ROOT, REPORT_PATH).replace(/\\/g, '/')}`);

  if (STRICT_AUDIT && issues.some((i) => i.severity === 'high')) {
    process.exitCode = 1;
  }
}

main();
