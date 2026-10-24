import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';

test('declaration opening uses court rule, not editable legacy state or signing state', () => {
  const source = readFileSync(new URL('../components/AffidavitOfService.tsx', import.meta.url), 'utf8');
  expect(source).toContain("courtRule.stateCode === 'FED' ? 'the United States of America' : `the State of ${courtRule.stateName}`");
  expect(source).not.toContain("{stateName || '_________'}</span> and the United States of America");
});
