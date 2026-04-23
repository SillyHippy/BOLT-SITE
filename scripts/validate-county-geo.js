#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const COUNTY_DATA_PATH = path.join(ROOT, 'lib', 'county-data.ts');
const COUNTY_GEO_PATH = path.join(ROOT, 'lib', 'county-geo.ts');

const LAT_MIN = 33.6;
const LAT_MAX = 37.1;
const LON_MIN = -103.1;
const LON_MAX = -94.2;

function extractCountySlugsFromCountyData(fileContent) {
  const matches = [...fileContent.matchAll(/\n\s*'([a-z0-9-]+-county)'\s*:\s*\{/g)];
  return new Set(matches.map((m) => m[1]));
}

function parseCountyGeoFromTs(fileContent) {
  const startToken = 'export const COUNTY_GEO: Record<string, CountyGeoDatum> = ';
  const startIdx = fileContent.indexOf(startToken);
  if (startIdx === -1) {
    throw new Error('Could not find COUNTY_GEO export in lib/county-geo.ts');
  }

  const jsonStart = startIdx + startToken.length;
  const jsonEnd = fileContent.indexOf(';\n\nexport function getCountyGeoData', jsonStart);
  if (jsonEnd === -1) {
    throw new Error('Could not find end of COUNTY_GEO object in lib/county-geo.ts');
  }

  const jsonText = fileContent.slice(jsonStart, jsonEnd);
  return JSON.parse(jsonText);
}

function main() {
  const countyDataTs = fs.readFileSync(COUNTY_DATA_PATH, 'utf8');
  const countyGeoTs = fs.readFileSync(COUNTY_GEO_PATH, 'utf8');

  const countySlugs = extractCountySlugsFromCountyData(countyDataTs);
  const countyGeo = parseCountyGeoFromTs(countyGeoTs);
  const geoSlugs = new Set(Object.keys(countyGeo));

  const errors = [];
  const warnings = [];

  const missingInGeo = [...countySlugs].filter((slug) => !geoSlugs.has(slug));
  if (missingInGeo.length > 0) {
    errors.push(`Missing geo entries for ${missingInGeo.length} county slugs: ${missingInGeo.join(', ')}`);
  }

  const extraInGeo = [...geoSlugs].filter((slug) => !countySlugs.has(slug));
  if (extraInGeo.length > 0) {
    warnings.push(`Geo dataset contains ${extraInGeo.length} extra slugs not in county-data.ts: ${extraInGeo.join(', ')}`);
  }

  for (const slug of geoSlugs) {
    const rec = countyGeo[slug];

    if (!rec || typeof rec !== 'object') {
      errors.push(`${slug}: invalid geo record object`);
      continue;
    }

    const lat = Number(rec.latitude);
    const lon = Number(rec.longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      errors.push(`${slug}: latitude/longitude must be finite numbers`);
      continue;
    }

    if (lat < LAT_MIN || lat > LAT_MAX) {
      errors.push(`${slug}: latitude ${lat} is out of Oklahoma bounds [${LAT_MIN}, ${LAT_MAX}]`);
    }
    if (lon < LON_MIN || lon > LON_MAX) {
      errors.push(`${slug}: longitude ${lon} is out of Oklahoma bounds [${LON_MIN}, ${LON_MAX}]`);
    }

    if (!rec.sourceUrl || typeof rec.sourceUrl !== 'string') {
      errors.push(`${slug}: sourceUrl is required`);
    }
    if (!rec.sourceType || typeof rec.sourceType !== 'string') {
      errors.push(`${slug}: sourceType is required`);
    }
    if (!rec.lastVerified || typeof rec.lastVerified !== 'string') {
      errors.push(`${slug}: lastVerified is required`);
    }
  }

  console.log(`County slugs in county-data.ts: ${countySlugs.size}`);
  console.log(`County slugs in county-geo.ts: ${geoSlugs.size}`);
  if (warnings.length > 0) {
    console.warn('\nWarnings:');
    for (const warning of warnings) console.warn(`- ${warning}`);
  }

  if (errors.length > 0) {
    console.error('\nValidation failed:');
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }

  console.log('\nCounty geo validation passed.');
}

main();
