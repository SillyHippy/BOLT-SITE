/**
 * Render-probe: drive the REAL AffidavitOfService component through a real
 * browser render (happy-dom + react-dom/client, prefill effects flushed) and
 * assert the Phase-1 W1/W2 body text actually lands in the printed sheet.
 *
 *   bun run tests/render-probe-phase1.mjs
 */
process.env.NODE_ENV = 'production';

import { Window } from 'happy-dom';

// Bundle the component fresh (bun.build resolves ../components + jsx in prod mode).
const build = await Bun.build({
  entrypoints: ['./tests/probe-entry.ts'],
  target: 'browser',
  format: 'esm',
  outdir: '/tmp/phase1-probe-out',
  define: { 'process.env.NODE_ENV': '"production"' },
});
if (!build.success) throw new Error('build failed: ' + build.logs.join('\n'));
const { renderProbe } = await import('/tmp/phase1-probe-out/probe-entry.js');

const GLOBAL_KEYS = [
  'window', 'document', 'localStorage', 'navigator', 'HTMLElement',
  'Element', 'Node', 'customElements', 'requestAnimationFrame',
  'cancelAnimationFrame',
];

/**
 * One probe = one FRESH happy-dom Window with the probe query already in its
 * URL. Reassigning window.location.href a second time on a shared window does
 * not reliably navigate in happy-dom, so a shared window silently re-rendered
 * every probe after the first on the FIRST probe's query.
 */
async function runProbe(urlQuery) {
  const win = new Window({
    url: `https://affidavit-probe.local/${urlQuery ? `?${urlQuery}` : ''}`,
  });
  const globals = {
    window: win,
    document: win.document,
    localStorage: win.localStorage,
    navigator: win.navigator,
    HTMLElement: win.HTMLElement,
    Element: win.Element,
    Node: win.Node,
    customElements: win.customElements,
    requestAnimationFrame: win.requestAnimationFrame.bind(win),
    cancelAnimationFrame: win.cancelAnimationFrame.bind(win),
  };
  for (const [key, value] of Object.entries(globals)) global[key] = value;
  try {
    return await renderProbe();
  } finally {
    for (const key of Object.keys(globals)) delete global[key];
  }
}

async function assertRender(caseNumber, urlQuery, expectContains, expectAbsent = []) {
  const html = await runProbe(urlQuery);
  if (/\{\{/.test(html)) throw new Error(`[probe:${caseNumber}] unresolved {{token}} in render`);
  for (const phrase of expectContains) {
    if (!html.includes(phrase)) throw new Error(`[probe:${caseNumber}] missing: ${phrase}`);
  }
  for (const phrase of expectAbsent) {
    if (html.includes(phrase)) throw new Error(`[probe:${caseNumber}] unexpectedly present: ${phrase}`);
  }
  console.log(`PASS ${caseNumber}`);
}

// W2(a) — NC case: qualification recital renders and the knew-person clause prints.
await assertRender(
  'NC',
  'court_state=NC&server=A Server',
  ['I knew the person served to be the party mentioned in the summons and delivered to and left with him/her a copy (N.C. Gen. Stat. § 1-75.10(a)(1)b).'],
);

// W2(b) + W1(a) — WI: recital fills from license_state=OK; both WI literal clauses
// are already inside the recital, so the clause block must NOT duplicate them.
{
  const html = await runProbe('court_state=WI&server=A Server&license_state=OK');
  if (!html.includes('adult resident of the State of Oklahoma')) {
    throw new Error('[probe:WI] residency recital did not fill from license_state=OK');
  }
  const n801_10 = html.split('801.10(4)(a)').length - 1;
  if (n801_10 !== 1) throw new Error(`[probe:WI] 801.10(4)(a) printed ${n801_10} times; dedupe failed`);
  if (!html.includes('801.10(2)')) throw new Error('[probe:WI] endorsement recital missing');
  console.log('PASS WI');
}

// W1(b) — WI with license_state absent: recital dropped entirely (never half-filled).
await assertRender(
  'WI-no-license',
  'court_state=WI&server=A Server',
  [],
  ['adult resident of the State of'],
);

// W1(c) — SD elector recital filled from the license state.
await assertRender(
  'SD',
  'court_state=SD&server=A Server&license_state=WI',
  ['elector of the State of Wisconsin'],
);

// W2 — FL with the received stamp: came-to-hand recital prints ONCE (the requiredBodyClauses
// block dedupes the identical 48.21(1) recital clause) and 48.031(5) endorsement prints.
{
  const html = await runProbe('court_state=FL&server=A Server&received_date=11/09/2026&received_time=10:00%20AM');
  if (!html.includes('came to hand on 11/09/2026')) throw new Error('[probe:FL] came-to-hand recital missing');
  if (!html.includes('48.031(5)')) throw new Error('[probe:FL] FL endorsement clause missing');
  const nRecital = html.split('came to hand on the date and at the time stated above').length - 1;
  if (nRecital !== 1) throw new Error(`[probe:FL] came-to-hand recital printed ${nRecital} times; dedupe failed`);
  console.log('PASS FL');
}

// W2 — FL without the stamp: recital omitted; the method-independent 48.031(5) clause prints.
await assertRender(
  'FL-nostamp',
  'court_state=FL&server=A Server',
  ['48.031(5)'],
  ['came to hand on the date'],
);

console.log('ALL RENDER PROBES PASS');
