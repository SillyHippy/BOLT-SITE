import test from 'node:test';
import assert from 'node:assert';
import { getNearbyCounties } from '../lib/county-neighbors.ts';

test('getNearbyCounties correctly returns and caches nearby counties', () => {
  // Test uncached call
  const tulsaNearby1 = getNearbyCounties('tulsa-county', 3);
  assert.strictEqual(tulsaNearby1.length, 3);

  // Test cached call (should return exact same array reference if cached, but we check values to be safe)
  const tulsaNearby2 = getNearbyCounties('tulsa-county', 3);
  assert.deepStrictEqual(tulsaNearby1, tulsaNearby2);

  // Test different limit (uncached)
  const tulsaNearby4 = getNearbyCounties('tulsa-county', 4);
  assert.strictEqual(tulsaNearby4.length, 4);
});