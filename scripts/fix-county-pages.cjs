/*
 * Batch-fixer for Oklahoma county landing pages.
 *
 * What this does:
 *  1. For every thin static county page (empty pageFAQs array):
 *     - Adds imports for getCountyData + generateCountyFAQs.
 *     - Replaces empty `pageFAQs = []` with a slug-keyed generator call.
 *     - Replaces the generic one-sentence hero <p> with {COUNTY.heroLead}.
 *     - Bumps UnifiedSchema faqItems from .slice(0, 4) to .slice(0, 6).
 *  2. Fixes wrong courthouse addresses in Love, Kay, Kiowa, McIntosh.
 *  3. Fixes pricing violations:
 *     - app/counties/page.tsx priceRange ($35-$265 -> removed)
 *     - app/counties/[slug]/page.tsx $35 metadata drift
 *     - app/counties/creek-county/page.tsx priceRange
 *     - app/counties/wagoner-county/page.tsx FAQ with $100/$150/$265
 *  4. Fixes "Okta Process Serving" branding bug in love-county.md + mcclain-county.md.
 *
 * Run:  node scripts/fix-county-pages.cjs
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_COUNTIES = path.join(ROOT, 'app', 'counties');
const CONTENT_COUNTIES = path.join(ROOT, 'content', 'counties');

// Counties whose static files are hand-built and must NOT be mass-modified.
// They get targeted pricing/FAQ fixes only where violations exist.
const HANDBUILT = new Set([
  'tulsa-county',
  'creek-county',
  'rogers-county',
  'wagoner-county',
]);

const OLD_IMPORTS_BLOCK = [
  "import UnifiedSchema from '@/components/UnifiedSchema';",
  "import GoogleMapsEmbed from '@/components/ui/google-maps-embed';",
].join('\n');

const NEW_IMPORTS_BLOCK = [
  "import UnifiedSchema from '@/components/UnifiedSchema';",
  "import GoogleMapsEmbed from '@/components/ui/google-maps-embed';",
  "import { getCountyData } from '@/lib/county-data';",
  "import { generateCountyFAQs } from '@/lib/markdown-utils';",
].join('\n');

const EMPTY_FAQ_RE =
  /const pageFAQs: \{ question: string; answer: string \}\[\] = \[\s*\n\s*\];/;

// Hero <p> starting with "Licensed process server in" (thin template version).
const THIN_HERO_RE =
  /<p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">\s*\n\s*Licensed process server in [\s\S]*?<\/p>/;

const THIN_HERO_REPLACEMENT =
  '<p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">\n            {COUNTY.heroLead}\n          </p>';

// Wrong courthouse addresses to correct on thin static pages.
const COURTHOUSE_FIXES = {
  'love-county': {
    from: '<p className="text-gray-700">301 N Broadway St, Walters, OK 73572</p>',
    to: '<p className="text-gray-700">405 W Main St, Marietta, OK 73448</p>',
  },
  'kay-county': {
    from: '<p className="text-gray-700">300 Courthouse Dr, Perry, OK 73077</p>',
    to: '<p className="text-gray-700">201 S Main St, Newkirk, OK 74647</p>',
  },
  'kiowa-county': {
    from: '<p className="text-gray-700">315 SW 5th St, Lawton, OK 73501</p>',
    to: '<p className="text-gray-700">316 S Main St, Hobart, OK 73651</p>',
  },
  'mcintosh-county': {
    from: '<p className="text-gray-700">222 E Dewey Ave, Sapulpa, OK 74066</p>',
    to: '<p className="text-gray-700">110 N 1st St, Eufaula, OK 74432</p>',
  },
};

// Also fix the "Serves:" line under Love County's courthouse block (was pointing
// at Marietta/Thackerville from Cotton County address; make it consistent).

function updateThinStaticFile(slug) {
  const filePath = path.join(APP_COUNTIES, slug, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    return { slug, status: 'skip', reason: 'no-file' };
  }
  if (HANDBUILT.has(slug)) {
    return { slug, status: 'skip', reason: 'handbuilt' };
  }
  let src = fs.readFileSync(filePath, 'utf8');
  const original = src;

  if (!EMPTY_FAQ_RE.test(src)) {
    return { slug, status: 'skip', reason: 'not-empty-pagefaqs' };
  }

  // 1. Add imports if not already present.
  if (src.includes(OLD_IMPORTS_BLOCK) && !src.includes("from '@/lib/county-data'")) {
    src = src.replace(OLD_IMPORTS_BLOCK, NEW_IMPORTS_BLOCK);
  }

  // 2. Replace empty pageFAQs with slug-keyed generator call.
  const replacementFaqBlock = [
    `const COUNTY = getCountyData('${slug}');`,
    "if (!COUNTY) throw new Error(`Missing county-data for ${'${' + `'${slug}'` + '}'}`);".replace(
      /\$\{'\$\{'.*'}\}/,
      '${`' + slug + '`}'
    ),
    'const pageFAQs = generateCountyFAQs(COUNTY.countyName, COUNTY.countySeat, COUNTY.courthouseAddress);',
  ].join('\n');
  // Simpler, less-fragile replacement:
  const simpleReplacement =
    `const COUNTY = getCountyData('${slug}')!;\n` +
    `const pageFAQs = generateCountyFAQs(COUNTY.countyName, COUNTY.countySeat, COUNTY.courthouseAddress);`;
  src = src.replace(EMPTY_FAQ_RE, simpleReplacement);

  // 3. Replace thin hero <p>.
  if (THIN_HERO_RE.test(src)) {
    src = src.replace(THIN_HERO_RE, THIN_HERO_REPLACEMENT);
  }

  // 4. Fix UnifiedSchema faqItems slice.
  src = src.replace(/pageFAQs\.slice\(0, 4\)/g, 'pageFAQs.slice(0, 6)');

  // 5. Courthouse address fix (if applicable).
  if (COURTHOUSE_FIXES[slug]) {
    const fix = COURTHOUSE_FIXES[slug];
    if (src.includes(fix.from)) {
      src = src.replace(fix.from, fix.to);
    }
  }

  if (src === original) {
    return { slug, status: 'skip', reason: 'no-change' };
  }
  fs.writeFileSync(filePath, src, 'utf8');
  return { slug, status: 'updated' };
}

function fixPricingViolations() {
  const results = [];

  // 1. app/counties/page.tsx priceRange
  {
    const p = path.join(APP_COUNTIES, 'page.tsx');
    let src = fs.readFileSync(p, 'utf8');
    const before = src;
    src = src.replace(/priceRange="\$35-\$265"/g, 'priceRange="Tiered"');
    if (src !== before) {
      fs.writeFileSync(p, src, 'utf8');
      results.push({ file: 'app/counties/page.tsx', status: 'updated' });
    }
  }

  // 2. app/counties/[slug]/page.tsx $35 metadata drift
  {
    const p = path.join(APP_COUNTIES, '[slug]', 'page.tsx');
    let src = fs.readFileSync(p, 'utf8');
    const before = src;
    src = src.replace(
      /const title = `\$\{countyName\} Process Server OK \| Starts at \$35`;/,
      'const title = `${countyName} Process Server OK | Licensed & Bonded`;'
    );
    src = src.replace(
      /const description = `Licensed process server in \$\{countyName\}, OK\. Service starts at \$35 single-attempt, \$60 standard; rush & same-day available\. GPS-tracked, court-ready affidavits\. \(539\) 367-6832`;/,
      'const description = `Licensed and bonded process server in ${countyName}, Oklahoma. Standard, rush, and same-day service with GPS-tracked attempts and notarized affidavits. See current rates at /pricing. Call (539) 367-6832.`;'
    );
    if (src !== before) {
      fs.writeFileSync(p, src, 'utf8');
      results.push({ file: 'app/counties/[slug]/page.tsx', status: 'updated' });
    }
  }

  // 3. app/counties/creek-county/page.tsx priceRange
  {
    const p = path.join(APP_COUNTIES, 'creek-county', 'page.tsx');
    let src = fs.readFileSync(p, 'utf8');
    const before = src;
    src = src.replace(/priceRange="\$35-\$200"/g, 'priceRange="Tiered"');
    if (src !== before) {
      fs.writeFileSync(p, src, 'utf8');
      results.push({ file: 'app/counties/creek-county/page.tsx', status: 'updated' });
    }
  }

  // 4. app/counties/wagoner-county/page.tsx FAQ pricing violation
  {
    const p = path.join(APP_COUNTIES, 'wagoner-county', 'page.tsx');
    let src = fs.readFileSync(p, 'utf8');
    const before = src;
    const oldFaq =
      "  { question: 'How much does it cost to serve someone in Wagoner County?', answer: 'Standard service starts at $100 for up to 3 attempts within Wagoner County. Rush service is $150. Same-day emergency service is $265. Travel to outlying areas like Hulbert or Porter may incur mileage fees.' },";
    const newFaq =
      "  { question: 'How much does it cost to serve someone in Wagoner County?', answer: 'We use tiered pricing in Wagoner County: standard, rush, same-day, and 24/7 emergency service. See current rates on our pricing page at /pricing. Every tier includes GPS-tracked attempts and a notarized affidavit ready for filing with the Wagoner County Clerk at 307 E Cherokee St.' },";
    if (src.includes(oldFaq)) {
      src = src.replace(oldFaq, newFaq);
    }
    // Also replace em-dashes in this file's FAQs with hyphens.
    src = src.replace(
      "lake properties are seasonal — occupied May through September but vacant in winter",
      "lake properties are seasonal, occupied May through September but often vacant in winter"
    );
    src = src.replace(
      "Coweta is larger, newer, and more suburban — most residents commute to Tulsa.",
      "Coweta is larger, newer, and more suburban, with most residents commuting to Tulsa."
    );
    src = src.replace(
      "Wagoner is the historic county seat with a mix of downtown, lake properties, and established neighborhoods.",
      "Wagoner is the historic county seat with a mix of downtown, lake properties, and established neighborhoods."
    );
    if (src !== before) {
      fs.writeFileSync(p, src, 'utf8');
      results.push({ file: 'app/counties/wagoner-county/page.tsx', status: 'updated' });
    }
  }

  return results;
}

function fixMarkdownBrandingBugs() {
  const results = [];
  for (const slug of ['love-county', 'mcclain-county']) {
    const p = path.join(CONTENT_COUNTIES, `${slug}.md`);
    if (!fs.existsSync(p)) continue;
    let src = fs.readFileSync(p, 'utf8');
    const before = src;
    src = src.replace(/Okta Process Serving/g, 'Just Legal Solutions');
    src = src.replace(/\bOkta Process\b/g, 'Just Legal Solutions');
    if (src !== before) {
      fs.writeFileSync(p, src, 'utf8');
      results.push({ file: `content/counties/${slug}.md`, status: 'updated' });
    }
  }
  return results;
}

function main() {
  console.log('[fix-county-pages] starting');

  // Discover all static county dirs.
  const countyDirs = fs
    .readdirSync(APP_COUNTIES, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name.endsWith('-county'))
    .map((d) => d.name);

  const staticResults = countyDirs.map(updateThinStaticFile);
  const pricingResults = fixPricingViolations();
  const mdResults = fixMarkdownBrandingBugs();

  const updated = staticResults.filter((r) => r.status === 'updated');
  const skipped = staticResults.filter((r) => r.status === 'skip');

  console.log(`\nStatic county pages: ${updated.length} updated, ${skipped.length} skipped`);
  updated.forEach((r) => console.log(`  UPDATED ${r.slug}`));
  skipped.forEach((r) => console.log(`  SKIP    ${r.slug} (${r.reason})`));

  console.log(`\nPricing violation fixes: ${pricingResults.length}`);
  pricingResults.forEach((r) => console.log(`  ${r.status.toUpperCase()} ${r.file}`));

  console.log(`\nMarkdown branding fixes: ${mdResults.length}`);
  mdResults.forEach((r) => console.log(`  ${r.status.toUpperCase()} ${r.file}`));

  console.log('\n[fix-county-pages] done');
}

main();
