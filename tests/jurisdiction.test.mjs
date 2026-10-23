/**
 * Tests for the pure jurisdiction module (lib/jurisdiction).
 *
 * Run: cd /home/workspace/BOLT-SITE && bun test tests/jurisdiction.test.mjs
 *
 * The 52-state parity block is gated on data/jurisdiction.bundle.json actually containing
 * states. While that file is the empty placeholder those assertions report PENDING (skipped)
 * rather than failing, and the fail-closed / parseVenue / qualification behaviour is still
 * exercised for real.
 */
import { describe, expect, test } from 'bun:test';
import {
  GENERATED_FROM,
  HAS_STATE_DATA,
  STATES,
  STATE_CODES,
  fillQualificationTemplate,
  getContentRule,
  getQualification,
  getQualificationTokens,
  getReturnRule,
  listJurisdictions,
  normalizeStateCode,
  parseVenue,
  resolveInstrument,
  validateForPrint,
} from '../lib/jurisdiction/index.ts';

/** The 22 jurisdictions whose return may be an unsworn declaration (SaaS jurisdictionReturnRules.json). */
const DECLARATION_STATES = [
  'FED', 'CA', 'TX', 'OK', 'CO', 'UT', 'NV', 'OR', 'AZ', 'NY', 'PA',
  'IL', 'MI', 'MN', 'KS', 'IA', 'HI', 'VT', 'ND', 'SD', 'WY', 'MD',
];

/** The 30 that fail closed to a notarized affidavit / return of service. */
const BLOCKED_STATES = [
  'WA', 'FL', 'GA', 'VA', 'NC', 'SC', 'NJ', 'MA', 'OH', 'AL', 'AR',
  'CT', 'DE', 'LA', 'MS', 'MO', 'MT', 'NE', 'DC', 'AK', 'NH', 'RI',
  'ME', 'TN', 'NM', 'KY', 'IN', 'ID', 'WV', 'WI',
];

const bundleTest = HAS_STATE_DATA ? test : test.skip;

describe('normalizeStateCode', () => {
  test('empty input stays empty (never defaults to Oklahoma)', () => {
    expect(normalizeStateCode('')).toBe('');
    expect(normalizeStateCode('   ')).toBe('');
    expect(normalizeStateCode(undefined)).toBe('');
    expect(normalizeStateCode(null)).toBe('');
  });

  test('accepts codes', () => {
    expect(normalizeStateCode('ok')).toBe('OK');
    expect(normalizeStateCode(' tx ')).toBe('TX');
    expect(normalizeStateCode('dc')).toBe('DC');
  });

  test('accepts full names and captions', () => {
    expect(normalizeStateCode('Oklahoma')).toBe('OK');
    expect(normalizeStateCode('State of Texas')).toBe('TX');
    expect(normalizeStateCode('Washington County, Arkansas')).toBe('AR');
  });

  test('accepts federal aliases', () => {
    expect(normalizeStateCode('FED')).toBe('FED');
    expect(normalizeStateCode('federal')).toBe('FED');
    expect(normalizeStateCode('US District Court')).toBe('FED');
  });

  test('passes unknown tokens through so the caller can fail closed', () => {
    expect(normalizeStateCode('ZZ')).toBe('ZZ');
  });
});

describe('getReturnRule fails closed', () => {
  test('unknown state never throws and allows no declaration', () => {
    const rule = getReturnRule('ZZ');
    expect(rule.allowDeclaration).toBe(false);
    expect(rule.declarationTitle).toBe('Affidavit of Service');
    expect(rule.confidence).toBe('low');
    expect(rule.declarationStatute).toBe('');
  });

  test('empty state never throws and allows no declaration', () => {
    for (const input of ['', undefined, null]) {
      const rule = getReturnRule(input);
      expect(rule.allowDeclaration).toBe(false);
      expect(rule.stateCode).toBe('');
      expect(rule.declarationTitle).toBe('Affidavit of Service');
      expect(rule.confidence).toBe('low');
    }
  });

  test('content rule is null for unknown and empty states', () => {
    expect(getContentRule('ZZ')).toBeNull();
    expect(getContentRule('')).toBeNull();
  });
});

describe('parseVenue', () => {
  test('does not route a surname to a state', () => {
    expect(parseVenue('Toni Washington').state).toBe('');
    expect(parseVenue('Mary Virginia Smith').state).toBe('');
    expect(parseVenue('Georgia Brown').state).toBe('');
  });

  test('handles Washington County, Arkansas as AR', () => {
    const venue = parseVenue('Washington County, Arkansas');
    expect(venue.state).toBe('AR');
    expect(venue.county).toBe('WASHINGTON');
  });

  test('keeps a bare county name without inventing a state', () => {
    const venue = parseVenue('Superior Court of Washington County');
    expect(venue.state).toBe('');
    expect(venue.county).toBe('WASHINGTON');
  });

  test('reads the state from trailing ", STATE" form and the county', () => {
    const venue = parseVenue('Superior Court of California, County of Los Angeles');
    expect(venue.state).toBe('CA');
    expect(venue.county).toBe('LOS ANGELES');
  });

  test('reads STATE OF X form', () => {
    const venue = parseVenue('District Court of Tulsa County, State of Oklahoma');
    expect(venue.state).toBe('OK');
    expect(venue.county).toBe('TULSA');
  });

  test('detects federal district courts', () => {
    expect(
      parseVenue('United States District Court for the Northern District of Illinois').state,
    ).toBe('FED');
  });

  test('empty input yields an empty venue, not Oklahoma', () => {
    expect(parseVenue('')).toEqual({ state: '', county: '' });
    expect(parseVenue(undefined)).toEqual({ state: '', county: '' });
  });
});

describe('resolveInstrument', () => {
  test('affidavit requests are never blocked', () => {
    for (const state of ['', 'ZZ', 'WA', 'OK']) {
      const resolution = resolveInstrument('affidavit', state);
      expect(resolution.docType).toBe('affidavit');
      expect(resolution.blocked).toBe(false);
      expect(resolution.reason).toBe('');
    }
  });

  test('declaration with an empty state downgrades to affidavit and says STATE_REQUIRED', () => {
    for (const state of ['', undefined, null]) {
      const resolution = resolveInstrument('declaration', state);
      expect(resolution.docType).toBe('affidavit');
      expect(resolution.blocked).toBe(true);
      expect(resolution.reason).toBe('STATE_REQUIRED');
      expect(resolution.stateCode).toBe('');
    }
  });

  test('unknown state ZZ fails closed', () => {
    const resolution = resolveInstrument('declaration', 'ZZ');
    expect(resolution.docType).toBe('affidavit');
    expect(resolution.blocked).toBe(true);
    expect(resolution.reason).toBe('STATE_REQUIRED');
    expect(resolution.statute).toBe('');
  });

  test('every blocked state resolves to a blocked affidavit with a reason', () => {
    for (const state of BLOCKED_STATES) {
      const resolution = resolveInstrument('declaration', state);
      expect(resolution.docType).toBe('affidavit');
      expect(resolution.blocked).toBe(true);
      expect(resolution.reason.length).toBeGreaterThan(0);
      expect(resolution.statute).toBe('');
    }
  });

  test('a blocked declaration request never returns a declaration for WA', () => {
    const resolution = resolveInstrument('declaration', 'WA');
    expect(resolution.docType).toBe('affidavit');
    expect(resolution.blocked).toBe(true);
    expect(resolution.reason.length).toBeGreaterThan(0);
  });
});

describe('getQualification token handling', () => {
  test('fills tokens and leaves none behind', () => {
    const text = fillQualificationTemplate(
      'I, {{serverName}}, License No. {{licenseNumber}}.',
      { serverName: 'A Server', licenseNumber: '12345' },
    );
    expect(text).toBe('I, A Server, License No. 12345.');
    expect(text.includes('{{')).toBe(false);
  });

  test('returns empty string when any token is unresolved', () => {
    const text = fillQualificationTemplate('I, {{serverName}}, License No. {{licenseNumber}}.', {
      serverName: 'A Server',
    });
    expect(text).toBe('');
  });

  test('returns empty string for empty templates', () => {
    expect(fillQualificationTemplate('', {})).toBe('');
    expect(fillQualificationTemplate(undefined, {})).toBe('');
  });

  test('unknown or empty state yields no qualification', () => {
    expect(getQualification('ZZ', { serverName: 'A Server' })).toBe('');
    expect(getQualification('', { serverName: 'A Server' })).toBe('');
  });

  test('never emits an unresolved token, whatever the state', () => {
    // Without bundle data there is nothing to fill; with data every state must fill cleanly.
    for (const code of ['OK', 'WA', 'FED', 'ZZ']) {
      const text = getQualification(code, { serverName: 'A Server', licenseNumber: '1' });
      expect(text.includes('{{')).toBe(false);
    }
  });
});

describe('validateForPrint', () => {
  test('Sunday, officer-only and abode age never become errors', () => {
    const result = validateForPrint({
      courtState: 'MN',
      serviceState: 'MN',
      requested: 'affidavit',
      serviceDate: '2026-10-25', // a Sunday
      servedByAbode: true,
      recipientAge: 11,
    });
    const joined = result.errors.join(' | ');
    expect(/sunday/i.test(joined)).toBe(false);
    expect(/officer/i.test(joined)).toBe(false);
    expect(/years old|age/i.test(joined)).toBe(false);
  });

  test('declaration request without a filing state is a blocking error', () => {
    const result = validateForPrint({ requested: 'declaration' });
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors.join(' ')).toMatch(/declaration/i);
  });

  test('unknown state declaration request is a blocking error', () => {
    const result = validateForPrint({ requested: 'declaration', courtState: 'ZZ' });
    expect(result.errors.length).toBeGreaterThan(0);
  });

  test('a clean affidavit request has no errors and no warnings', () => {
    const result = validateForPrint({ courtState: '', requested: 'affidavit' });
    expect(result.errors).toEqual([]);
    expect(result.warnings).toEqual([]);
  });

  test('tolerates a missing input object', () => {
    const result = validateForPrint();
    expect(Array.isArray(result.errors)).toBe(true);
    expect(Array.isArray(result.warnings)).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// 52-state parity. PENDING (skipped) while data/jurisdiction.bundle.json is the
// empty placeholder; runs for real once the generator lands.
// ---------------------------------------------------------------------------
describe('52-state bundle parity', () => {
  bundleTest('bundle carries 52 jurisdictions with return rules', () => {
    expect(STATE_CODES.length).toBe(52);
    expect(new Set([...DECLARATION_STATES, ...BLOCKED_STATES]).size).toBe(52);
    for (const code of [...DECLARATION_STATES, ...BLOCKED_STATES]) {
      expect(STATES[code]).toBeTruthy();
      expect(typeof STATES[code].return?.allowDeclaration).toBe('boolean');
      expect(String(STATES[code].stateName || '').length).toBeGreaterThan(1);
    }
    expect(typeof GENERATED_FROM.commit).toBe('string');
  });

  bundleTest('the 22 declaration jurisdictions resolve to declaration', () => {
    for (const code of DECLARATION_STATES) {
      const rule = getReturnRule(code);
      expect(rule.allowDeclaration).toBe(true);
      const resolution = resolveInstrument('declaration', code);
      expect(resolution.docType).toBe('declaration');
      expect(resolution.blocked).toBe(false);
      expect(resolution.reason).toBe('');
      expect(resolution.statute.length).toBeGreaterThan(0);
      expect(resolution.stateCode).toBe(code);
    }
  });

  bundleTest('the 30 blocked jurisdictions resolve to affidavit plus blocked', () => {
    for (const code of BLOCKED_STATES) {
      const resolution = resolveInstrument('declaration', code);
      expect(resolution.docType).toBe('affidavit');
      expect(resolution.blocked).toBe(true);
      expect(resolution.reason.length).toBeGreaterThan(0);
      expect(resolution.reason).not.toBe('STATE_REQUIRED');
      expect(resolution.citation.length).toBeGreaterThan(0);
      expect(resolution.statute).toBe('');
    }
  });

  bundleTest('WA blocked resolution carries a plain-English reason and the citation', () => {
    const resolution = resolveInstrument('declaration', 'WA');
    expect(resolution.docType).toBe('affidavit');
    expect(resolution.blocked).toBe(true);
    expect(resolution.stateName).toBe('Washington');
    expect(resolution.reason).toMatch(/affidavit|declaration/i);
    expect(resolution.reason).not.toBe('STATE_REQUIRED');
    expect(resolution.citation.length).toBeGreaterThan(0);
  });

  bundleTest('getReturnRule agrees with the bundle for every state', () => {
    for (const code of STATE_CODES) {
      const rule = getReturnRule(code);
      const expected = STATES[code].return;
      expect(rule.allowDeclaration).toBe(expected.allowDeclaration);
      expect(rule.stateCode).toBe(code);
      expect(rule.declarationTitle).toBe(expected.declarationTitle);
      expect(rule.declarationStatute).toBe(expected.declarationStatute);
    }
  });

  bundleTest('the declaration allow-list matches the expected 22 exactly', () => {
    const allowed = STATE_CODES.filter((code) => getReturnRule(code).allowDeclaration).sort();
    expect(allowed).toEqual([...DECLARATION_STATES].sort());
  });

  bundleTest('listJurisdictions mirrors the bundle', () => {
    const rows = listJurisdictions();
    expect(rows.length).toBe(52);
    expect(rows.map((row) => row.code)).toEqual([...STATE_CODES].sort());
    for (const row of rows) {
      expect(row.allowDeclaration).toBe(getReturnRule(row.code).allowDeclaration);
      expect(typeof row.name).toBe('string');
      expect(row.name.length).toBeGreaterThan(1);
    }
  });

  bundleTest('qualification fills with no unresolved token in every state', () => {
    for (const code of STATE_CODES) {
      const tokens = getQualificationTokens(code);
      const vars = {};
      for (const token of tokens) vars[token] = `X-${token}`;
      const text = getQualification(code, vars);
      expect(text.includes('{{')).toBe(false);
      if (tokens.length > 0) expect(text.length).toBeGreaterThan(0);
      if (STATES[code].qualification?.qualificationText) {
        expect(text.length).toBeGreaterThan(0);
      }
    }
  });

  bundleTest('filing-state requirements are errors (came-to-hand, documents, attestations)', () => {
    const tx = validateForPrint({ courtState: 'TX', requested: 'affidavit' });
    expect(tx.errors.join(' ')).toMatch(/came to hand/i);
    expect(tx.errors.join(' ')).toMatch(/documents/i);
    expect(tx.errors.join(' ')).toMatch(/attestation/i);

    const fl = validateForPrint({ courtState: 'FL', requested: 'affidavit' });
    expect(fl.errors.join(' ')).toMatch(/came to hand/i);
    expect(fl.errors.join(' ')).toMatch(/documents/i);

    const satisfied = validateForPrint({
      courtState: 'FL',
      requested: 'affidavit',
      cameToHandDate: '2026-10-20',
      cameToHandTime: '10:15 AM',
      documentsServed: ['Summons', 'Petition'],
      attestationsAccepted: getContentRule('FL').attestations,
    });
    expect(satisfied.errors).toEqual([]);
  });

  bundleTest('Sunday block, officer-only and abode age are warnings, never errors', () => {
    const minnesota = validateForPrint({
      courtState: 'MN',
      serviceState: 'MN',
      requested: 'affidavit',
      serviceDate: '2026-10-25', // Sunday
      cameToHandDate: '2026-10-20',
      documentsServed: 'Summons',
      attestationsAccepted: getContentRule('MN').attestations,
    });
    expect(minnesota.warnings.join(' ')).toMatch(/sunday/i);
    expect(minnesota.errors.join(' ')).not.toMatch(/sunday/i);

    const connecticut = validateForPrint({
      courtState: 'CT',
      serviceState: 'CT',
      requested: 'affidavit',
      cameToHandDate: '2026-10-20',
      documentsServed: 'Summons',
      attestationsAccepted: getContentRule('CT').attestations,
    });
    expect(connecticut.warnings.join(' ')).toMatch(/officer/i);
    expect(connecticut.errors.join(' ')).not.toMatch(/officer/i);

    const ageState = STATE_CODES.find(
      (code) => typeof getContentRule(code)?.abode?.minRecipientAge === 'number',
    );
    expect(ageState).toBeTruthy();
    const abode = validateForPrint({
      courtState: ageState,
      serviceState: ageState,
      requested: 'affidavit',
      servedByAbode: true,
      recipientAge: 5,
      cameToHandDate: '2026-10-20',
      documentsServed: 'Summons',
      attestationsAccepted: getContentRule(ageState).attestations,
    });
    expect(abode.warnings.join(' ')).toMatch(/years old/i);
    expect(abode.errors.join(' ')).not.toMatch(/years old/i);
  });
});
