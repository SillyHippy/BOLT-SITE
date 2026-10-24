import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ExecutionText } from '../components/AffidavitExecutionText';
test('execution prose escapes markup while preserving whitespace', () => {
  const attack = '<img src=x onerror=alert(1)>\n<b>Recipient</b>';
  const html = renderToStaticMarkup(React.createElement(ExecutionText, { text: attack }));
  expect(html).not.toContain('<img');
  expect(html).toContain('&lt;img');
  expect(html).toContain('white-space:pre-wrap');
});
const source = readFileSync(new URL('../components/AffidavitOfService.tsx', import.meta.url), 'utf8');
test('every required attestation is available, never hidden as universal', () => {
  expect(source).not.toContain('UNIVERSAL_ATTESTATIONS');
  expect(source).toContain('requiredAttestations.map');
  expect(source).toContain('checked={attestationsAccepted.includes(token)}');
});
