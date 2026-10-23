// Generates data/jurisdiction.bundle.json for the static site.
// READ-ONLY against the ServeTracker source tree: imports the live rule functions,
// writes nothing back. Run: bun scripts/build-jurisdiction-bundle.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const SAAS = process.env.SAAS_REPO || '/home/workspace/Projects/servetracker-saas';
const OUT = new URL('../data/jurisdiction.bundle.json', import.meta.url);

const { getReturnRule, getContentRule } = await import(
  pathToFileURL(`${SAAS}/src/utils/jurisdictionRules.ts`).href
);

const qualifications = JSON.parse(
  readFileSync(`${SAAS}/src/data/stateReturnQualifications.json`, 'utf8')
);
const returnsRaw = JSON.parse(
  readFileSync(`${SAAS}/src/data/jurisdictionReturnRules.json`, 'utf8')
);

const CODES = Object.keys(returnsRaw).sort();
if (CODES.length !== 52) throw new Error(`expected 52 jurisdictions, got ${CODES.length}`);

const states = {};
for (const code of CODES) {
  const merged = getReturnRule(code);
  const raw = returnsRaw[code] || {};
  const content = getContentRule(code);
  const qual = qualifications[code] || null;

  // The research file is the legal determination for affidavit vs declaration.
  // getReturnRule() additionally requires a verified venues.json record, which
  // today exists for only 8 states; that stricter gate is recorded separately as
  // engineEnforcedDeclaration and is NOT used to gate this site.
  const allowResearch = Boolean(raw.allowDeclaration);
  const allowEngine = Boolean(merged.allowDeclaration);

  states[code] = {
    stateCode: code,
    stateName: merged.stateName,
    return: {
      ...merged,
      allowDeclaration: allowResearch,
      declarationStatute: raw.declarationStatute || merged.declarationStatute,
      declarationFormText: raw.declarationFormText || merged.declarationFormText,
      declarationTitle: allowResearch
        ? raw.declarationTitle || merged.declarationTitle
        : 'Affidavit of Service',
      sources: raw.sources && raw.sources.length ? raw.sources : merged.sources,
      confidence: raw.confidence || merged.confidence,
      notes: raw.notes || merged.notes,
      primarySourceUrl: raw.primarySourceUrl || merged.primarySourceUrl,
    },
    engineEnforcedDeclaration: allowEngine,
    content: content || null,
    qualification: qual
      ? {
          qualificationText: qual.qualificationText || '',
          qualificationTextUnserved: qual.qualificationTextUnserved || '',
          requiredBodyClauses: qual.requiredBodyClauses || [],
          requiredFooterFields: qual.requiredFooterFields || [],
        }
      : null,
  };
}

const generatedFrom = {
  repo: 'servetracker-saas',
  branch: execSync('git rev-parse --abbrev-ref HEAD', { cwd: SAAS }).toString().trim(),
  commit: execSync('git rev-parse --short HEAD', { cwd: SAAS }).toString().trim(),
};

const bundle = { schemaVersion: 1, generatedFrom, states };
writeFileSync(OUT, JSON.stringify(bundle, null, 2) + '\n');

const allow = Object.keys(states).filter((c) => states[c].return.allowDeclaration);
console.log(`wrote ${OUT.pathname}`);
console.log(`jurisdictions: ${CODES.length}`);
console.log(`declaration allowed (${allow.length}): ${allow.join(', ')}`);
console.log(`generatedFrom: ${generatedFrom.branch}@${generatedFrom.commit}`);
