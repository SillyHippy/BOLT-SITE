#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc);
    else if (ent.name === 'page.tsx') acc.push(full);
  }
  return acc;
}

let n = 0;
for (const file of walk('app')) {
  let s = fs.readFileSync(file, 'utf8');
  if (!s.includes("'],],")) continue;
  fs.writeFileSync(file, s.replaceAll("'],],", "'],"));
  n++;
  console.log('Fixed', file);
}
console.log('Total', n);
