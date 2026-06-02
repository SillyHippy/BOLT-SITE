#!/usr/bin/env node
import fs from 'fs';

const files = [
  'app/blog/process-serving-small-business-owners-oklahoma/page.tsx',
  'app/service-areas/enid/page.tsx',
  'app/blog/can-you-avoid-being-served-oklahoma/page.tsx',
  'app/blog/notarize-documents-when-cant-leave-home-oklahoma/page.tsx',
  'app/blog/what-to-do-when-served-papers-oklahoma/page.tsx',
  'app/how-much-does-process-server-cost/page.tsx',
  'app/blog/understanding-the-affidavit-of-service/page.tsx',
  'app/(main)/backlinks/page.tsx',
];

for (const f of files) {
  let s = fs.readFileSync(f, 'utf8');
  const fixed = s.replace(
    /description: '((?:\\'|[^'])*)'https:\/\/([^'\]]+)'/,
    (_, desc, rest) => {
      const url = `https://${rest.replace(/\],$/, '')}`;
      return `description: '${desc}',\n    images: ['${url}'],`;
    }
  );
  if (fixed === s) {
    console.warn('No match:', f);
  } else {
    fs.writeFileSync(f, fixed);
    console.log('Fixed', f);
  }
}
