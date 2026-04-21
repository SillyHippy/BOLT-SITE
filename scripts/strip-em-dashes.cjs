/*
 * Pass 3: Strip em-dashes from county static pages and replace the
 * misleading "Flat rates - no hidden mileage fees" copy with tiered
 * pricing language that routes users to /pricing.
 *
 * Only touches files under app/counties/. Markdown files in content/counties/
 * are left alone for Phase 2 (swarm rewrite) because their em-dashes are in
 * long-form prose where context-aware replacement is risky.
 */

const fs = require('fs');
const path = require('path');

const APP_COUNTIES = path.join(path.resolve(__dirname, '..'), 'app', 'counties');

// Context-aware replacements to run in order across every county static file.
// Each entry: { from: RegExp | string, to: string, description }
// Order matters - more specific replacements run first.
const REPLACEMENTS = [
  // Pricing header card subtitle
  {
    from: /Flat rates\s+—\s+no hidden mileage fees in ([A-Za-z ]+County)/g,
    to: 'Transparent tiered pricing for $1, full rates on our pricing page',
    desc: 'pricing-card-header',
  },
  // Pricing footer disclaimer
  {
    from: /All rates are flat\s+—\s+no hidden mileage fees in ([A-Za-z ]+County)\./g,
    to: 'Standard, rush, and same-day tiers available in $1. See current rates at /pricing.',
    desc: 'pricing-footer',
  },
  // Final CTA tagline
  {
    from: /GPS-tracked, notarized, court-ready\s+—\s+in ([A-Za-z ]+County)\./g,
    to: 'GPS-tracked, notarized, and court-ready in $1.',
    desc: 'final-cta',
  },
  // Judicial district subtitle
  {
    from: /Judicial District (\d+)\s+—\s+([A-Za-z ]+County)/g,
    to: 'Judicial District $1, $2',
    desc: 'judicial-district',
  },
  // Tulsa/Wagoner metadata-description em-dashes
  {
    from: /Tulsa County—covering/g,
    to: 'Tulsa County, covering',
    desc: 'tulsa-meta',
  },
  {
    from: /Tulsa County's process server—serving/g,
    to: "Tulsa County's process server, serving",
    desc: 'tulsa-hero',
  },
  {
    from: /rural county borders\s+—\s+complete professional coverage/g,
    to: 'rural county borders, with complete professional coverage',
    desc: 'tulsa-coverage',
  },
  {
    from: /seminar—&ldquo;Process Serving Best Practices&rdquo;/g,
    to: 'seminar, &ldquo;Process Serving Best Practices&rdquo;',
    desc: 'tulsa-sponsor',
  },
  {
    from: /during major holidays—our 24\/7/g,
    to: 'during major holidays; our 24/7',
    desc: 'tulsa-holidays',
  },
];

// Fallback: any lingering em-dash becomes a comma.
const FALLBACK_EM_DASH = /\s*—\s*/g;

const dirs = fs
  .readdirSync(APP_COUNTIES, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name.endsWith('-county'))
  .map((d) => d.name);

let totalFiles = 0;
let totalReplacements = 0;

for (const slug of dirs) {
  const p = path.join(APP_COUNTIES, slug, 'page.tsx');
  if (!fs.existsSync(p)) continue;
  let src = fs.readFileSync(p, 'utf8');
  const original = src;
  let fileReplacements = 0;

  for (const rule of REPLACEMENTS) {
    const before = src;
    src = src.replace(rule.from, rule.to);
    if (src !== before) {
      fileReplacements++;
    }
  }

  // Fallback: any remaining em-dash becomes ", " (comma + space).
  // Skip inside HTML entities like &mdash; and inside JS string literals with
  // explicit em-dash (there should be none after the passes above).
  if (src.includes('—')) {
    const before = src;
    src = src.replace(FALLBACK_EM_DASH, ', ');
    if (src !== before) {
      fileReplacements++;
    }
  }

  if (src !== original) {
    fs.writeFileSync(p, src, 'utf8');
    console.log(`[fix] ${slug} (${fileReplacements} pattern groups)`);
    totalFiles++;
    totalReplacements += fileReplacements;
  }
}

console.log(
  `\nStripped em-dashes from ${totalFiles} files (${totalReplacements} pattern groups applied).`
);
