/**
 * One-shot: replace legacy https://justlegalsolutions.org/og-image.webp
 * with image-pack URLs aligned to public/image-pack/image-seo-manifest.json.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const OLD = 'https://justlegalsolutions.org/og-image.webp';
const BASE = 'https://justlegalsolutions.org/image-pack/images';
const img = (file) => `${BASE}/${file}`;
const DEFAULT = img('image-002-home-og.png');

/** @param {string} relPosix path from repo root with / */
function pickUrl(relPosix) {
  const f = relPosix;
  // --- exact / high-specificity first ---
  if (f === 'app/layout.tsx') return img('image-002-home-og.png');
  if (f.endsWith('components/UnifiedSchema.tsx')) return DEFAULT;

  if (f.includes('blog/how-to-serve-a-subpoena-oklahoma')) return img('image-096-blog-how-to-serve-a-subpoena-oklahoma-card.png');
  if (f.includes('blog/how-to-serve-divorce-papers-oklahoma')) return img('image-097-blog-how-to-serve-divorce-papers-oklahoma-card.png');
  if (f.includes('blog/how-to-serve-eviction-notices-in-oklahoma')) return img('image-098-blog-how-to-serve-eviction-notices-in-oklahoma-card.png');
  if (f.includes('blog/become-process-server-oklahoma')) return img('image-099-blog-become-process-server-oklahoma-card.png');
  if (f.includes('blog/oklahoma-landlord-tenant-eviction-timelines')) return img('image-100-blog-oklahoma-landlord-tenant-eviction-timelines-card.png');
  if (f.includes('blog/skip-tracing-oklahoma-guide')) return img('image-058-skip-tracing-oklahoma-guide-og.png');
  if (f.includes('blog/loan-signing-agent-oklahoma')) return img('image-063-loan-signing-agent-tulsa-hero.png');

  if (f.includes('service-areas/')) return img('image-032-service-areas-card.png');
  if (f.includes('counties/')) return img('image-085-counties-hero.png');

  if (f.includes('reviews/google')) return img('image-086-reviews-google-card.png');
  if (f.includes('/reviews/')) return img('image-044-reviews-hero.png');

  if (f.includes('/guides/')) return img('image-077-guides-hero.png');

  if (f.includes('/blog/')) return img('image-043-blog-hero.png');

  if (f.includes('law-firm-services')) return img('image-048-law-firm-services-hero.png');
  if (f.includes('virtual-assistant-services')) return img('image-049-virtual-assistant-services-og.png');
  if (f.includes('/payments')) return img('image-050-payments-og.png');
  if (f.includes('/downloads')) return img('image-051-downloads-card.png');
  if (f.includes('/glossary')) return img('image-052-glossary-og.png');
  if (f.includes('gps-tracked-process-serving')) return img('image-053-gps-tracked-process-serving-hero.png');
  if (f.includes('how-much-does-process-server-cost')) return img('image-057-how-much-does-process-server-cost-og.png');
  if (f.includes('broken-arrow-process-server')) return img('image-059-broken-arrow-process-server-hero.png');
  if (f.includes('affidavit-of-service')) return img('image-060-affidavit-of-service-og.png');
  if (f.includes('protective-order-service')) return img('image-061-protective-order-service-hero.png');
  if (f.includes('courthouse-filing-services')) return img('image-062-courthouse-filing-services-og.png');
  if (f.includes('oklahoma-courthouse-directory')) return img('image-062-courthouse-filing-services-og.png');
  if (f.includes('compare/process-server-vs-sheriff')) return img('image-071-compare-process-server-vs-sheriff-card.png');
  if (f.includes('compare/')) return img('image-070-process-server-vs-sheriff-og.png');
  if (f.includes('process-server-vs-sheriff')) return img('image-070-process-server-vs-sheriff-og.png');

  if (f.includes('process-serving-for-debt-collection')) return img('image-073-process-serving-for-debt-collection-card.png');
  if (f.includes('process-serving-for-insurance-companies')) return img('image-074-process-serving-for-insurance-companies-card.png');
  if (f.includes('process-serving-for-property-managers')) return img('image-075-process-serving-for-property-managers-card.png');
  if (f.includes('bail-bondsmen-process-serving')) return img('image-093-bail-bondsmen-process-serving-card.png');

  if (f.includes('cost-calculator')) return img('image-079-cost-calculator-card.png');
  if (f.includes('pdf-tools/') || f.includes('service-time-estimator') || f.includes('service-checker')) return img('image-080-oklahoma-tools-hero.png');
  if (f.includes('card/calendar')) return img('image-080-oklahoma-tools-hero.png');

  if (f.includes('join-our-network')) return img('image-084-join-our-network-hero.png');
  if (f.includes('oklahoma-process-server-laws')) return img('image-046-oklahoma-process-server-laws-hero.png');
  if (f.includes('oklahoma-process-server-authority')) return img('image-046-oklahoma-process-server-laws-hero.png');
  if (f.includes('tulsa-process-server-faq')) return img('image-045-oklahoma-process-server-faq-og.png');

  if (f.includes('tulsa-county-divorce-process-serving')) return img('image-037-divorce-paper-service-hero.png');
  if (f.includes('small-claims-process-serving')) return img('image-072-family-law-service-guide-tulsa-hero.png');
  if (f.includes('subpoena-service-oklahoma')) return img('image-020-subpoena-service-hero.png');

  if (f.includes('weekend-emergency')) return img('image-015-urgent-process-server-hero.png');
  if (f.includes('rush-vs-standard-vs-same-day-service')) return img('image-047-oklahoma-process-server-pricing-og.png');
  if (f.includes('courier-services-tulsa')) return img('image-030-courier-services-og.png');

  if (f.includes('mobile-notary-vs-bank')) return img('image-028-notary-card.png');
  if (f.includes('serving-legal-papers-on-tribal-land')) return img('image-085-counties-hero.png');
  if (f.includes('oklahoma-electronic-service-guide')) return img('image-095-oklahoma-process-server-technology-hero.png');
  if (f.includes('how-long-does-process-serving-take')) return img('image-057-how-much-does-process-server-cost-og.png');

  if (f.includes('oklahoma-process-serving-hub')) return img('image-009-process-serving-hero.png');
  if (f.includes('why-choose-us')) return img('image-042-about-hero.png');

  return DEFAULT;
}

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules' || name === '.git') continue;
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (/\.(tsx|ts|jsx|js)$/.test(name)) acc.push(p);
  }
  return acc;
}

let changed = 0;
let scanned = 0;

for (const abs of walk(path.join(ROOT, 'app'))) {
  let text = fs.readFileSync(abs, 'utf8');
  if (!text.includes(OLD)) continue;
  scanned++;
  const rel = path.relative(ROOT, abs).split(path.sep).join('/');
  const nu = pickUrl(rel);
  const next = text.split(OLD).join(nu);
  if (next !== text) {
    fs.writeFileSync(abs, next, 'utf8');
    changed++;
  }
}

const unified = path.join(ROOT, 'components', 'UnifiedSchema.tsx');
let uText = fs.readFileSync(unified, 'utf8');
if (uText.includes(OLD)) {
  uText = uText.split(OLD).join(DEFAULT);
  fs.writeFileSync(unified, uText, 'utf8');
  changed++;
  scanned++;
}

console.log(JSON.stringify({ filesWithOld: scanned, filesWritten: changed }, null, 0));
