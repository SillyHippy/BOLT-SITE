/**
 * Sync AI-facing freshness timestamps from lib/page-freshness.generated.json.
 * Usage: node scripts/sync-ai-freshness-dates.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const MANIFEST_PATH = path.join(ROOT, 'lib', 'page-freshness.generated.json');

function readSiteReviewDate() {
  if (fs.existsSync(MANIFEST_PATH)) {
    const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    if (manifest.siteContentReviewDate) return manifest.siteContentReviewDate;
  }

  const source = fs.readFileSync(path.join(ROOT, 'lib', 'content-freshness.ts'), 'utf8');
  const match = source.match(/siteContentReviewDate: '([^']+)'/);
  if (match) return match[1];
  throw new Error('Could not resolve site content review date');
}

function formatLlmsHeaderDate(isoDate) {
  const date = new Date(`${isoDate}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function updateLlmsFile(filePath, headerDate) {
  if (!fs.existsSync(filePath)) return false;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/# Last Updated:.*$/m, `# Last Updated: ${headerDate}`);
  fs.writeFileSync(filePath, content);
  return true;
}

const reviewDate = readSiteReviewDate();
const headerDate = formatLlmsHeaderDate(reviewDate);
const readableStamp = new Date().toISOString();

const llmsPaths = [
  path.join(ROOT, 'llms.txt'),
  path.join(ROOT, 'public', 'llms.txt'),
  path.join(ROOT, 'public', '.well-known', 'llms.txt'),
];

for (const llmsPath of llmsPaths) {
  if (updateLlmsFile(llmsPath, headerDate)) {
    console.log(`Updated ${path.relative(ROOT, llmsPath)}`);
  }
}

const lastUpdatePath = path.join(ROOT, 'public', 'ai-search', 'last-update.txt');
fs.mkdirSync(path.dirname(lastUpdatePath), { recursive: true });
fs.writeFileSync(
  lastUpdatePath,
  `Last content review: ${headerDate}\nSite review date (ISO): ${reviewDate}\nAI search bundle synced: ${readableStamp}\n`,
  'utf8'
);
console.log(`Updated ${path.relative(ROOT, lastUpdatePath)}`);
console.log(`Synced AI freshness dates to ${reviewDate} (${headerDate})`);
