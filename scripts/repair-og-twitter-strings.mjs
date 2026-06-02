#!/usr/bin/env node
/** Fix twitter.description strings broken by apostrophe escaping in fix-open-graph-metadata.mjs */

import fs from 'fs';
import path from 'path';

const APP = path.join(process.cwd(), 'app');

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc);
    else if (ent.name === 'page.tsx') acc.push(full);
  }
  return acc;
}

function extractQuotedAfter(key, block) {
  const re = new RegExp(`${key}\\s*:\\s*'((?:\\\\'|[^'])*)'`);
  const m = block.match(re);
  return m ? m[1].replace(/\\'/g, "'") : null;
}

let fixed = 0;
for (const file of walk(APP)) {
  let src = fs.readFileSync(file, 'utf8');
  if (!/twitter:\s*\{/.test(src)) continue;

  const twitterMatch = src.match(/twitter:\s*\{([\s\S]*?)\n\s*\},/);
  if (!twitterMatch) continue;
  const twitterBlock = twitterMatch[1];
  if (!/description:\s*'[^']*\\',\s*$/.test(twitterBlock) && !/description:\s*'[^']*\\',\s*\n/.test(twitterBlock)) {
    continue;
  }

  const ogMatch = src.match(/openGraph:\s*\{([\s\S]*?)\n\s*\},/);
  const ogDesc = ogMatch ? extractQuotedAfter('description', ogMatch[1]) : null;
  const mainDesc = extractQuotedAfter('description', src.slice(0, src.indexOf('openGraph')));
  const goodDesc = ogDesc || mainDesc;
  if (!goodDesc) {
    console.warn('No replacement desc:', file);
    continue;
  }

  const escaped = goodDesc.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const newSrc = src.replace(
    /(twitter:\s*\{[\s\S]*?description:\s*)'(?:\\'|[^'])*'/,
    `$1'${escaped}'`
  );

  const titleBroken = /title:\s*'[^']*\\',\s*\n\s*description:/.test(newSrc);
  let finalSrc = newSrc;
  if (titleBroken) {
    const ogTitle = ogMatch ? extractQuotedAfter('title', ogMatch[1]) : null;
    const mainTitle = extractQuotedAfter('title', src.slice(0, src.indexOf('openGraph')));
    const goodTitle = mainTitle || ogTitle;
    if (goodTitle) {
      const escapedTitle = goodTitle.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      finalSrc = newSrc.replace(
        /(twitter:\s*\{[\s\S]*?title:\s*)'(?:\\'|[^'])*'/,
        `$1'${escapedTitle}'`
      );
    }
  }

  if (finalSrc !== src) {
    fs.writeFileSync(file, finalSrc, 'utf8');
    fixed++;
    console.log('Fixed', path.relative(process.cwd(), file));
  }
}

console.log(`Repaired ${fixed} file(s)`);
