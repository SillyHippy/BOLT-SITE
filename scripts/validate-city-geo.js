#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * validate-city-geo.js
 *
 * Validates the CITY_GEO dataset in lib/city-geo.ts.
 * Mirrors the style of validate-county-geo.js.
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const CITY_GEO_PATH = path.join(ROOT, 'lib', 'city-geo.ts');

const LAT_MIN = 33.6;
const LAT_MAX = 37.1;
const LON_MIN = -103.1;
const LON_MAX = -94.2;

const VALID_SOURCE_TYPES = new Set(['Census', 'StateGIS', 'CountyGIS', 'Other']);

const KEBAB_CASE_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/**
 * Parse the CITY_GEO Record object out of a TypeScript file.
 * Looks for the export const block between the opening brace and the
 * matching closing `};`.
 */
function parseCityGeoFromTs(fileContent) {
  const startToken = 'export const CITY_GEO: Record<string, CityGeoDatum> = ';
  const startIdx = fileContent.indexOf(startToken);
  if (startIdx === -1) {
    throw new Error('Could not find CITY_GEO export in lib/city-geo.ts');
  }

  const jsonStart = startIdx + startToken.length;

  // Find the end of the object — the closing `};` that terminates the record.
  // Scan from jsonStart to find the matching `};` (closing brace + semicolon).
  let braceDepth = 0;
  let inString = false;
  let stringChar = null;
  let escapeNext = false;
  let jsonEnd = -1;

  for (let i = jsonStart; i < fileContent.length; i++) {
    const ch = fileContent[i];

    if (escapeNext) {
      escapeNext = false;
      continue;
    }

    if (ch === '\\') {
      escapeNext = true;
      continue;
    }

    if (inString) {
      if (ch === stringChar) {
        inString = false;
        stringChar = null;
      }
      continue;
    }

    if (ch === '"' || ch === "'") {
      inString = true;
      stringChar = ch;
      continue;
    }

    if (ch === '{') {
      braceDepth++;
      continue;
    }

    if (ch === '}') {
      braceDepth--;
      if (braceDepth === 0) {
        // Look for the semicolon after the closing brace
        const rest = fileContent.slice(i + 1).trimStart();
        if (rest.startsWith(';')) {
          jsonEnd = i + 1 + rest.indexOf(';') + 1;
        } else {
          jsonEnd = i + 1;
        }
        break;
      }
      continue;
    }
  }

  if (jsonEnd === -1) {
    throw new Error('Could not find end of CITY_GEO object in lib/city-geo.ts');
  }

  const jsonText = fileContent.slice(jsonStart, jsonEnd);

  // The exported block should already be valid JSON (double-quoted keys/values).
  // Strip any trailing semicolons outside the JSON object before parsing.
  const cleaned = jsonText.replace(/;\s*$/, '').trim();
  return JSON.parse(cleaned);
}

/**
 * Validate that a string looks like an ISO date (YYYY-MM-DD).
 */
function isValidIsoDate(str) {
  if (typeof str !== 'string' || str.length === 0) return false;
  const isoRe = /^\d{4}-\d{2}-\d{2}$/;
  if (!isoRe.test(str)) return false;
  const d = new Date(str);
  return !isNaN(d.getTime());
}

function main() {
  /* ------------------------------------------------------------------ */
  /* 1. Read and parse the dataset                                      */
  /* ------------------------------------------------------------------ */
  let cityGeoTs;
  try {
    cityGeoTs = fs.readFileSync(CITY_GEO_PATH, 'utf8');
  } catch (err) {
    console.error(`Failed to read ${CITY_GEO_PATH}: ${err.message}`);
    process.exit(1);
  }

  let cityGeo;
  try {
    cityGeo = parseCityGeoFromTs(cityGeoTs);
  } catch (err) {
    console.error(`Failed to parse CITY_GEO: ${err.message}`);
    process.exit(1);
  }

  const slugs = Object.keys(cityGeo);
  const errors = [];
  const warnings = [];

  /* ------------------------------------------------------------------ */
  /* 2. Check for duplicate slugs (belt-and-suspenders)                 */
  /* ------------------------------------------------------------------ */
  const seenSlugs = new Set();
  const duplicateSlugs = [];
  for (const slug of slugs) {
    if (seenSlugs.has(slug)) {
      duplicateSlugs.push(slug);
    }
    seenSlugs.add(slug);
  }
  if (duplicateSlugs.length > 0) {
    errors.push(`Duplicate slugs found: ${duplicateSlugs.join(', ')}`);
  }

  /* ------------------------------------------------------------------ */
  /* 3. Validate each record                                            */
  /* ------------------------------------------------------------------ */
  for (const slug of slugs) {
    const rec = cityGeo[slug];
    const prefix = `${slug}`;

    if (!rec || typeof rec !== 'object') {
      errors.push(`${prefix}: invalid geo record object`);
      continue;
    }

    // 3a. slug matches kebab-case
    if (typeof rec.slug !== 'string' || rec.slug.length === 0) {
      errors.push(`${prefix}: slug is required`);
    } else if (!KEBAB_CASE_RE.test(rec.slug)) {
      errors.push(`${prefix}: slug "${rec.slug}" does not match kebab-case format (lowercase, hyphens, alphanumeric)`);
    } else if (rec.slug !== slug) {
      errors.push(`${prefix}: slug "${rec.slug}" does not match key "${slug}"`);
    }

    // 3b. cityName is a non-empty string
    if (typeof rec.cityName !== 'string' || rec.cityName.trim().length === 0) {
      errors.push(`${prefix}: cityName must be a non-empty string`);
    }

    // 3c. countyName ends with " County"
    if (typeof rec.countyName !== 'string' || !rec.countyName.endsWith(' County')) {
      errors.push(`${prefix}: countyName "${rec.countyName}" must end with " County"`);
    }

    // 3d. latitude / longitude are finite numbers
    const lat = Number(rec.latitude);
    const lon = Number(rec.longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      errors.push(`${prefix}: latitude/longitude must be finite numbers`);
    } else {
      // 3e. Coordinates within Oklahoma bounds
      if (lat < LAT_MIN || lat > LAT_MAX) {
        errors.push(`${prefix}: latitude ${lat} is out of Oklahoma bounds [${LAT_MIN}, ${LAT_MAX}]`);
      }
      if (lon < LON_MIN || lon > LON_MAX) {
        errors.push(`${prefix}: longitude ${lon} is out of Oklahoma bounds [${LON_MIN}, ${LON_MAX}]`);
      }
    }

    // 3f. sourceUrl is a non-empty string
    if (typeof rec.sourceUrl !== 'string' || rec.sourceUrl.trim().length === 0) {
      errors.push(`${prefix}: sourceUrl must be a non-empty string`);
    }

    // 3g. sourceType is one of the allowed values
    if (!VALID_SOURCE_TYPES.has(rec.sourceType)) {
      errors.push(`${prefix}: sourceType "${rec.sourceType}" must be one of: ${[...VALID_SOURCE_TYPES].join(', ')}`);
    }

    // 3h. lastVerified is a non-empty ISO date string
    if (typeof rec.lastVerified !== 'string' || rec.lastVerified.length === 0) {
      errors.push(`${prefix}: lastVerified must be a non-empty string`);
    } else if (!isValidIsoDate(rec.lastVerified)) {
      errors.push(`${prefix}: lastVerified "${rec.lastVerified}" must be a valid ISO date (YYYY-MM-DD)`);
    }
  }

  /* ------------------------------------------------------------------ */
  /* 4. Summary                                                         */
  /* ------------------------------------------------------------------ */
  console.log(`City geo records: ${slugs.length}`);
  console.log(`Errors:   ${errors.length}`);
  console.log(`Warnings: ${warnings.length}`);

  if (warnings.length > 0) {
    console.warn('\nWarnings:');
    for (const w of warnings) console.warn(`- ${w}`);
  }

  if (errors.length > 0) {
    console.error('\nErrors:');
    for (const e of errors) console.error(`- ${e}`);
    console.error('\nCity geo validation FAIL.');
    process.exit(1);
  }

  console.log('\nCity geo validation PASS.');
  process.exit(0);
}

if (require.main === module) {
  main();
}

module.exports = { parseCityGeoFromTs, isValidIsoDate };
