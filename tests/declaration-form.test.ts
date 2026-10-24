import { test, expect } from 'bun:test';
import { buildDeclarationVars, fillDeclarationForm } from '../lib/jurisdiction/declaration';

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
