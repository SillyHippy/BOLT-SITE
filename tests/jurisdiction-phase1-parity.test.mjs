import { describe, expect, test } from 'bun:test';
import {
  HAS_STATE_DATA,
  STATES,
  getQualification,
  getQualificationTokens,
  getRequiredBodyClauses,
} from '../lib/jurisdiction/index.ts';

/** False while data/jurisdiction.bundle.json is still the empty placeholder. */
const bundleTest = HAS_STATE_DATA ? test : test.skip;

/**
 * Phase-1 site parity (captures parallel to SaaS commits 843d7d0 + dc083d1).
 *
 * W1 — server residency state: the site's getQualification call site must fill
 * {{serverStateOfResidence}} from the server's LICENSE/residence state. The WI
 * recital is "adult resident of the State of X" and SD's is "elector of the
 * State of X"; when the residency state is unknown the paragraph must be
 * dropped entirely (never a half-filled recital on a sworn page).
 *
 * W2 — requiredBodyClauses render: literal clauses print as separate
 * paragraphs after the qualification recital, deduped against content the
 * qualification text already emitted (WI clause 1 duplicates the WI recital).
 */

describe('W1 — serverStateOfResidence fills the WI/SD recitals', () => {
  bundleTest('WI recital fills with the server residency state name', () => {
    const text = getQualification('WI', {
      serverName: 'A Server',
      serverStateOfResidence: 'Oklahoma',
    });
    expect(text.length).toBeGreaterThan(0);
    expect(text.includes('adult resident of the State of Oklahoma')).toBe(true);
  });

  bundleTest('SD elector recital fills with the server residency state name', () => {
    const text = getQualification('SD', {
      serverName: 'A Server',
      serverStateOfResidence: 'Oklahoma',
    });
    expect(text.length).toBeGreaterThan(0);
    expect(text.includes('elector of the State of Oklahoma')).toBe(true);
  });

  bundleTest('unknown residency drops the paragraph (never a half-filled recital)', () => {
    expect(getQualification('WI', { serverName: 'A Server' })).toBe('');
    expect(getQualification('SD', { serverName: 'A Server' })).toBe('');
  });

  bundleTest('serverStateOfResidence is a declared WI/SD qualification token', () => {
    expect(getQualificationTokens('WI').includes('serverStateOfResidence')).toBe(true);
    expect(getQualificationTokens('SD').includes('serverStateOfResidence')).toBe(true);
  });
});

describe('W2 — getRequiredBodyClauses (lib-level render filter)', () => {
  const CLAUSES = (...stateCodes) => stateCodes.map((code) => STATES[code].qualification?.requiredBodyClauses || []);

  bundleTest('WI exposes 2 literal clauses and both render', () => {
    const clauses = STATES.WI.qualification?.requiredBodyClauses || [];
    expect(clauses.length).toBe(2);
    const rendered = getRequiredBodyClauses('WI', { successfulServe: true });
    expect(rendered.length).toBe(2);
  });

  bundleTest('WI clauses already inside the qualification text are deduped', () => {
    const qual = getQualification('WI', { serverName: 'A Server', serverStateOfResidence: 'Oklahoma' });
    const rendered = getRequiredBodyClauses('WI', { successfulServe: true, haystack: [qual] });
    // BOTH literal clauses print verbatim inside the filled recital (801.10(4)(a)
    // knew-person + 801.10(2) endorsement) — the dedupe drops each of them, and
    // they still render when the recital itself was dropped (unknown residency).
    expect(rendered.length).toBe(0);
    expect(getRequiredBodyClauses('WI', { successfulServe: true }).length).toBe(2);
  });

  bundleTest('NC knew-person clause renders', () => {
    const rendered = getRequiredBodyClauses('NC', { successfulServe: true });
    expect(rendered.length).toBe(1);
    expect(rendered[0].includes('1-75.10(a)(1)b')).toBe(true);
  });

  bundleTest('non-service drops every service-asserting clause', () => {
    expect(getRequiredBodyClauses('WI', { successfulServe: false }).length).toBe(0);
    expect(getRequiredBodyClauses('NC', { successfulServe: false }).length).toBe(0);
  });

  bundleTest('came-to-hand recitals gate on the received stamp', () => {
    const withStamp = getRequiredBodyClauses('FL', { successfulServe: true, stampPrinted: true });
    const withoutStamp = getRequiredBodyClauses('FL', { successfulServe: true, stampPrinted: false });
    expect(withStamp.some((c) => /came to hand on the date/i.test(c))).toBe(true);
    expect(withoutStamp.some((c) => /came to hand on the date/i.test(c))).toBe(false);
    // FL's second clause (date/time endorsed on copy served) is method-independent.
    expect(withoutStamp.some((c) => /48\.031\(5\)/.test(c))).toBe(true);
  });

  bundleTest('abode-mail recital gates on the abode method', () => {
    const onAbode = getRequiredBodyClauses('MA', { successfulServe: true, abodeMethod: true });
    const offAbode = getRequiredBodyClauses('MA', { successfulServe: true, abodeMethod: false });
    expect(onAbode.some((c) => /last and usual place of abode/i.test(c))).toBe(true);
    expect(offAbode.some((c) => /last and usual place of abode/i.test(c))).toBe(false);
  });

  bundleTest('formula/token clauses never render twice', () => {
    // token keys (cameToHandDate etc.) and {{placeholder}} formulas stay owned
    // by their existing paths (cameToHandSentence, physical description, fees).
    expect(getRequiredBodyClauses('OK', { successfulServe: true }).length).toBe(0);
    expect(getRequiredBodyClauses('CT', { successfulServe: true }).join(' ').includes('{{')).toBe(false);
  });

  bundleTest('unknown / empty state yields no clauses', () => {
    expect(getRequiredBodyClauses('ZZ', { successfulServe: true })).toEqual([]);
    expect(getRequiredBodyClauses('', { successfulServe: true })).toEqual([]);
  });
});
