/*
 * Ingest a swarm research bundle of per-county JSON or Markdown files and
 * surgically update lib/county-data.ts, writing canonical JSON into
 * content/research/counties/<slug>.json.
 *
 * Safe by design:
 *   - Never rebuilds the COUNTIES map from scratch.
 *   - Only replaces the single line matching 'slug': { ... } for each
 *     county present in the bundle. Any slug not in the bundle is left
 *     completely untouched.
 *
 * Usage:
 *   node scripts/ingest-swarm-bundle.cjs <path-to-bundle-dir-or-zip>
 *
 * Accepted input formats (inside the bundle directory or zip):
 *   - <slug>.json    -- preferred canonical shape (see fields below).
 *   - <slug>.md      -- v2 prompt output; must contain a ```json ... ```
 *                       fenced code block with the same shape.
 *
 * Canonical JSON shape:
 *   {
 *     "slug": "creek-county",
 *     "countyName": "Creek County",
 *     "countySeat": "Sapulpa",
 *     "population": 73971,
 *     "courthouse": {"street":"222 E Dewey St","city":"Sapulpa","state":"OK","zip":"74066"},
 *     "heroLead": "<2-3 sentence unique prose>",
 *     ...additional enrichment fields are preserved verbatim in the JSON.
 *   }
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const RESEARCH_DIR = path.join(ROOT, 'content', 'research', 'counties');
const COUNTY_DATA_FILE = path.join(ROOT, 'lib', 'county-data.ts');
const FAQ_OVERRIDES_FILE = path.join(ROOT, 'lib', 'county-faq-overrides.ts');

function usage() {
  console.error('Usage: node scripts/ingest-swarm-bundle.cjs <bundle-path>');
  process.exit(1);
}

function extractZipIfNeeded(bundlePath) {
  if (!bundlePath.toLowerCase().endsWith('.zip')) return bundlePath;
  const tmp = path.join(
    path.dirname(bundlePath),
    path.basename(bundlePath, '.zip') + '-extracted'
  );
  if (fs.existsSync(tmp)) fs.rmSync(tmp, { recursive: true, force: true });
  fs.mkdirSync(tmp, { recursive: true });
  execSync(
    `powershell -Command "Expand-Archive -Path '${bundlePath.replace(
      /'/g,
      "''"
    )}' -DestinationPath '${tmp.replace(/'/g, "''")}' -Force"`,
    { stdio: 'inherit' }
  );
  return tmp;
}

function extractJsonFromMarkdown(md) {
  const fence = /```json\s*([\s\S]*?)```/;
  const m = fence.exec(md);
  if (!m) return null;
  try {
    return JSON.parse(m[1]);
  } catch (err) {
    console.error('  [warn] failed to parse fenced json:', err.message);
    return null;
  }
}

function walkBundle(bundleDir) {
  const entries = fs.readdirSync(bundleDir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(bundleDir, e.name);
    if (e.isDirectory()) {
      files.push(...walkBundle(full));
    } else if (e.name.endsWith('.json') || e.name.endsWith('.md')) {
      files.push(full);
    }
  }
  return files;
}

function normalize(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw.data && typeof raw.data === 'object' ? raw.data : raw;
  if (!r.slug || !r.countyName || !r.countySeat) return null;
  const out = {
    slug: String(r.slug).trim().toLowerCase(),
    countyName: r.countyName,
    countySeat: r.countySeat,
    population: typeof r.population === 'number' ? r.population : null,
    populationYear: r.populationYear ?? null,
    courthouse: r.courthouse ?? null,
    majorCities: r.majorCities ?? [],
    neighboringCounties: r.neighboringCounties ?? [],
    tribalJurisdiction: r.tribalJurisdiction ?? [],
    majorEmployers: r.majorEmployers ?? [],
    uniqueFacts: r.uniqueFacts ?? [],
    processServingNotes: r.processServingNotes ?? [],
    heroLead:
      typeof r.heroLead === 'string' && r.heroLead.trim().length > 0
        ? r.heroLead.trim()
        : null,
    faqs: r.faqs ?? r.pageFAQs ?? r.uniqueFAQs ?? null,
    verificationSources: r.verificationSources ?? null,
    schemaVersion: 1,
    receivedAt: new Date().toISOString().slice(0, 10),
  };
  return out;
}

function mergeRecord(existing, incoming) {
  const keep = (next, prev) => {
    if (next === null || next === undefined) return prev ?? null;
    if (Array.isArray(next) && next.length === 0) return prev ?? [];
    return next;
  };
  return {
    slug: incoming.slug,
    countyName: keep(incoming.countyName, existing?.countyName),
    countySeat: keep(incoming.countySeat, existing?.countySeat),
    population: keep(incoming.population, existing?.population),
    populationYear: keep(incoming.populationYear, existing?.populationYear),
    courthouse: keep(incoming.courthouse, existing?.courthouse),
    majorCities: keep(incoming.majorCities, existing?.majorCities),
    neighboringCounties: keep(
      incoming.neighboringCounties,
      existing?.neighboringCounties
    ),
    tribalJurisdiction: keep(
      incoming.tribalJurisdiction,
      existing?.tribalJurisdiction
    ),
    majorEmployers: keep(incoming.majorEmployers, existing?.majorEmployers),
    uniqueFacts: keep(incoming.uniqueFacts, existing?.uniqueFacts),
    processServingNotes: keep(
      incoming.processServingNotes,
      existing?.processServingNotes
    ),
    heroLead: keep(incoming.heroLead, existing?.heroLead),
    faqs: keep(incoming.faqs, existing?.faqs),
    verificationSources: keep(
      incoming.verificationSources,
      existing?.verificationSources
    ),
    schemaVersion: 1,
    receivedAt: new Date().toISOString().slice(0, 10),
  };
}

function generateFaqOverridesFile() {
  const sanitizeFAQ = (question, answer) => {
    const cleanedQuestion = String(question || '')
      .replace(/\s+/g, ' ')
      .trim();
    const sentences = String(answer || '')
      .replace(/\s+/g, ' ')
      .trim()
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);
    const promoSentence =
      /(call\s*\(?539\)?|visit\s*\/contact|contact\s+just\s+legal\s+solutions|reach\s+out\s+to\s+just\s+legal\s+solutions|for\s+process\s+serving|for\s+legal\s+document\s+serving|to\s+get\s+started)/i;
    const filtered = sentences.filter((s) => !promoSentence.test(s));
    const kept = (filtered.length ? filtered : sentences).slice(0, 3);
    let cleanedAnswer = kept.join(' ').replace(/\s+/g, ' ').trim();
    cleanedAnswer = cleanedAnswer.replace(
      /\$\s*\d[\d,]*(?:\.\d+)?/g,
      'the required statutory amount'
    );
    if (cleanedAnswer.length > 460) {
      cleanedAnswer = `${cleanedAnswer.slice(0, 457).trimEnd()}...`;
    }
    return { question: cleanedQuestion, answer: cleanedAnswer };
  };

  const files = fs
    .readdirSync(RESEARCH_DIR)
    .filter((name) => name.endsWith('-county.json'))
    .sort();

  const overrides = {};
  for (const file of files) {
    const full = path.join(RESEARCH_DIR, file);
    let data;
    try {
      data = JSON.parse(fs.readFileSync(full, 'utf8'));
    } catch {
      continue;
    }
    if (!data?.slug || !Array.isArray(data?.faqs)) continue;
    const seenQuestions = new Set();
    const rows = data.faqs
      .filter(
        (f) =>
          f &&
          typeof f.question === 'string' &&
          typeof f.answer === 'string' &&
          f.question.trim().length > 10 &&
          f.answer.trim().length > 20
      )
      .map((f) => sanitizeFAQ(f.question, f.answer))
      .filter((f) => f.question.length >= 18 && f.answer.length >= 60)
      .filter((f) => {
        const key = f.question.toLowerCase();
        if (seenQuestions.has(key)) return false;
        seenQuestions.add(key);
        return true;
      })
      .slice(0, 6)
      .map((f) => ({ question: f.question, answer: f.answer }));
    if (rows.length) {
      overrides[data.slug] = rows;
    }
  }

  const src =
    `// AUTO-GENERATED by scripts/ingest-swarm-bundle.cjs\n` +
    `// Do not edit by hand. Re-run ingest script after updating research JSON.\n\n` +
    `export interface CountyFAQOverride {\n` +
    `  question: string;\n` +
    `  answer: string;\n` +
    `}\n\n` +
    `export const COUNTY_FAQ_OVERRIDES: Record<string, CountyFAQOverride[]> = ` +
    `${JSON.stringify(overrides, null, 2)};\n`;
  fs.writeFileSync(FAQ_OVERRIDES_FILE, src, 'utf8');
  return Object.keys(overrides).length;
}

function courthouseAddressFrom(rec) {
  if (!rec.courthouse) return null;
  const c = rec.courthouse;
  if (!c.street || !c.city) return null;
  const zip = c.zip ? ` ${c.zip}` : '';
  return `${c.street}, ${c.city}, ${c.state || 'OK'}${zip}`.trim();
}

/**
 * Build the single-line TS entry for a slug, matching the style already in
 * lib/county-data.ts.
 */
function buildEntryLine(rec, fallbackAddress) {
  const q = (s) => `'${String(s).replace(/'/g, "\\'")}'`;
  const parts = [`slug: ${q(rec.slug)}`];
  parts.push(`countyName: ${q(rec.countyName)}`);
  parts.push(`countySeat: ${q(rec.countySeat)}`);
  if (rec.population) parts.push(`population: ${rec.population}`);
  const addr = courthouseAddressFrom(rec) || fallbackAddress;
  if (addr) parts.push(`courthouseAddress: ${q(addr)}`);
  const hero = rec.heroLead || '';
  parts.push(`heroLead: ${q(hero)}`);
  return `  '${rec.slug}': { ${parts.join(', ')} },`;
}

/**
 * Surgically replace the single line for a slug inside lib/county-data.ts.
 * Returns { updated: boolean, src: string }.
 */
function replaceSlugLine(src, slug, newLine) {
  const lineRe = new RegExp(`^\\s*'${slug}':\\s*\\{[^\\n]*\\},?\\s*$`, 'm');
  if (!lineRe.test(src)) {
    return { updated: false, src };
  }
  return { updated: true, src: src.replace(lineRe, newLine) };
}

/**
 * Pull the current courthouseAddress for a slug out of lib/county-data.ts so
 * we can preserve it when the bundle record has no structured courthouse
 * object.
 */
function currentAddress(src, slug) {
  const re = new RegExp(
    `'${slug}':\\s*\\{[^\\n]*courthouseAddress:\\s*'([^']+)'`,
    'm'
  );
  const m = re.exec(src);
  return m ? m[1] : null;
}

/**
 * Pull the current heroLead for a slug out of lib/county-data.ts so we can
 * preserve it if the bundle record did not ship a new heroLead.
 * Handles both plain 'string literal' values and lead(...) function calls
 * (for the latter we return null so the caller can fall back to keeping
 * the original line untouched).
 */
function currentHeroLead(src, slug) {
  const re = new RegExp(
    `'${slug}':\\s*\\{[^\\n]*heroLead:\\s*(.+?)\\s*\\}\\s*,?\\s*$`,
    'm'
  );
  const m = re.exec(src);
  if (!m) return { kind: 'missing' };
  const raw = m[1];
  if (raw.startsWith('lead(')) return { kind: 'call', raw };
  const strMatch = /^'((?:\\'|[^'])*)'$/.exec(raw);
  if (strMatch) return { kind: 'string', value: strMatch[1].replace(/\\'/g, "'") };
  return { kind: 'other', raw };
}

function main() {
  const arg = process.argv[2];
  if (!arg) usage();
  const bundlePath = path.resolve(arg);
  if (!fs.existsSync(bundlePath)) {
    console.error(`[error] not found: ${bundlePath}`);
    process.exit(1);
  }

  console.log(`[ingest] bundle: ${bundlePath}`);
  const dir = fs.statSync(bundlePath).isDirectory()
    ? bundlePath
    : extractZipIfNeeded(bundlePath);

  if (!fs.existsSync(RESEARCH_DIR)) fs.mkdirSync(RESEARCH_DIR, { recursive: true });

  const files = walkBundle(dir);
  console.log(`[ingest] scanning ${files.length} file(s)`);

  const records = [];
  for (const f of files) {
    const content = fs.readFileSync(f, 'utf8');
    let raw = null;
    if (f.endsWith('.json')) {
      try {
        raw = JSON.parse(content);
      } catch (err) {
        console.log(`  [skip] ${path.basename(f)}: bad json (${err.message})`);
        continue;
      }
    } else {
      raw = extractJsonFromMarkdown(content);
    }
    const rec = normalize(raw);
    if (!rec) {
      console.log(`  [skip] ${path.basename(f)}: no valid county record`);
      continue;
    }
    const outPath = path.join(RESEARCH_DIR, `${rec.slug}.json`);
    let merged = rec;
    if (fs.existsSync(outPath)) {
      try {
        const existing = JSON.parse(fs.readFileSync(outPath, 'utf8'));
        merged = mergeRecord(existing, rec);
      } catch {
        merged = rec;
      }
    }
    fs.writeFileSync(outPath, JSON.stringify(merged, null, 2), 'utf8');
    console.log(`  [save] ${rec.slug}`);
    records.push(merged);
  }

  if (!records.length) {
    console.log('[ingest] nothing to merge');
    return;
  }

  let src = fs.readFileSync(COUNTY_DATA_FILE, 'utf8');
  let updated = 0;
  let missing = [];
  let skippedEmpty = [];
  for (const rec of records) {
    const fallback = currentAddress(src, rec.slug);
    // If the bundle did not ship a heroLead, keep whatever is already in the
    // TS file. Never replace a real heroLead with an empty string.
    if (!rec.heroLead) {
      const existing = currentHeroLead(src, rec.slug);
      if (existing.kind === 'string' && existing.value.trim().length > 40) {
        rec.heroLead = existing.value;
      } else if (existing.kind === 'call') {
        // Leave the existing lead(...) call intact — skip this slug
        // rather than collapse it into a quoted string.
        skippedEmpty.push(rec.slug);
        continue;
      } else {
        skippedEmpty.push(rec.slug);
        continue;
      }
    }
    const line = buildEntryLine(rec, fallback);
    const res = replaceSlugLine(src, rec.slug, line);
    if (res.updated) {
      src = res.src;
      updated++;
    } else {
      missing.push(rec.slug);
    }
  }
  fs.writeFileSync(COUNTY_DATA_FILE, src, 'utf8');
  console.log(`\n[done] updated ${updated} slugs in lib/county-data.ts`);
  if (skippedEmpty.length) {
    console.log(
      `[info] skipped ${skippedEmpty.length} record(s) with no heroLead (kept existing entry): ${skippedEmpty.join(', ')}`
    );
  }
  if (missing.length) {
    console.log(
      `[warn] ${missing.length} slug(s) not found in county-data.ts: ${missing.join(', ')}`
    );
  }
  const faqOverrideCount = generateFaqOverridesFile();
  console.log(`[done] generated FAQ overrides for ${faqOverrideCount} counties`);
}

main();
