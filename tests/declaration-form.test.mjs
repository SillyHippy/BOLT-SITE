import { test, expect } from 'bun:test';
import { buildDeclarationVars, fillDeclarationForm, parseDeclarantAddress } from '../lib/jurisdiction/declaration';

test('fills TX-style declaration tokens from signing fields', () => {
  const vars = buildDeclarationVars({
    execDate: '10/24/2026',
    signingCity: 'Tulsa',
    signingState: 'Oklahoma',
    signingCounty: 'Tulsa',
    affiantName: 'Alex Vance',
    serverDob: '01/02/1990',
    street: '123 Main St',
  });
  const tpl =
    'My name is {affiantName}, my date of birth is {serverDob}, and my address is {street}. I declare under penalty of perjury that the foregoing is true and correct. Executed in {execCounty} County, State of {execState}, on the {dayOrdinal} day of {month}, {year}.';
  const filled = fillDeclarationForm(tpl, vars);
  expect(filled.missing).toEqual([]);
  expect(filled.text).toContain('Alex Vance');
  expect(filled.text).toContain('Tulsa County, State of Oklahoma');
  expect(filled.text).not.toContain('{');
});

test('unresolved tokens are reported and retained', () => {
  const filled = fillDeclarationForm('Executed on {date} at {execCity}.', { date: '10/24/2026' });
  expect(filled.missing).toEqual(['execCity']);
  expect(filled.text).toContain('{execCity}');
});

// ── 2026-11-25: TX §132.001(d) full declarant address (street, city, state, zip, country) ──

const TX_FULL_ADDRESS_TPL =
  'My name is {affiantName}, my date of birth is {serverDob}, and my address is {street}, {city}, {state} {zip}, and {country}. I declare under penalty of perjury that the foregoing is true and correct. Executed in {execCounty} County, State of {execState}, on the {dayOrdinal} day of {month}, {year}.';

test('parseDeclarantAddress splits a typed "Street, City, ST ZIP" line', () => {
  const parsed = parseDeclarantAddress('564 E 138th Pl, Glenpool, OK 74033');
  expect(parsed).not.toBeNull();
  expect(parsed.street).toBe('564 E 138th Pl');
  expect(parsed.city).toBe('Glenpool');
  expect(parsed.state).toBe('OK');
  expect(parsed.zip).toBe('74033');
});

test('parseDeclarantAddress handles ZIP+4, full state names, and rejects bare street lines', () => {
  const zip4 = parseDeclarantAddress('123 Main St, Tulsa, OK 74103-1234');
  expect(zip4).not.toBeNull();
  expect(zip4.zip).toBe('74103-1234');
  const named = parseDeclarantAddress('123 Main St, Tulsa, Oklahoma 74103');
  expect(named).not.toBeNull();
  expect(named.state).toBe('Oklahoma');
  expect(parseDeclarantAddress('564 E 138th Pl')).toBeNull();
  expect(parseDeclarantAddress('')).toBeNull();
});

test('TX full-address template fills completely from a parsed address line', () => {
  const parsed = parseDeclarantAddress('564 E 138th Pl, Glenpool, OK 74033');
  const vars = buildDeclarationVars({
    execDate: '11/25/2026',
    signingCity: 'Tulsa',
    signingState: 'Oklahoma',
    signingCounty: 'Tulsa',
    affiantName: 'Joseph Iannazzi',
    serverDob: '01/14/1992',
    street: parsed.street,
    addressCity: parsed.city,
    addressState: parsed.state,
    addressZip: parsed.zip,
    country: 'USA',
  });
  const filled = fillDeclarationForm(TX_FULL_ADDRESS_TPL, vars);
  expect(filled.missing).toEqual([]);
  expect(filled.text).toContain('my address is 564 E 138th Pl, Glenpool, OK 74033, and USA.');
  expect(filled.text).toContain('my date of birth is January 14, 1992');
  expect(filled.text).not.toContain('{');
});

test('street-only line falls back to signing city/state; missing zip is reported', () => {
  const vars = buildDeclarationVars({
    execDate: '11/25/2026',
    signingCity: 'Tulsa',
    signingState: 'Oklahoma',
    signingCounty: 'Tulsa',
    affiantName: 'Joseph Iannazzi',
    serverDob: '01/14/1992',
    street: '564 E 138th Pl',
    country: 'USA',
  });
  const filled = fillDeclarationForm(TX_FULL_ADDRESS_TPL, vars);
  expect(filled.missing).toEqual(['zip']);
  expect(filled.text).toContain('{zip}');
});

test('serverDob formats to a readable date when parseable, raw otherwise', () => {
  const iso = buildDeclarationVars({ serverDob: '1992-01-14' });
  expect(iso.serverDob).toBe('January 14, 1992');
  const raw = buildDeclarationVars({ serverDob: 'age 34' });
  expect(raw.serverDob).toBe('age 34');
});
