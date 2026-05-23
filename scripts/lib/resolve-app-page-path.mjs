import fs from 'fs';
import path from 'path';

/**
 * Resolve a public URL path to its Next.js app router page file, if one exists.
 */
export function resolveAppPagePath(urlPath, appDir) {
  const normalizedPath = urlPath.replace(/\/+$/, '');

  const candidates = [
    normalizedPath === '/' ? path.join(appDir, '(main)', 'page.tsx') : null,
    normalizedPath === '/' ? path.join(appDir, 'page.tsx') : null,
    normalizedPath === '' ? path.join(appDir, '(main)', 'page.tsx') : null,
    normalizedPath === '' ? path.join(appDir, 'page.tsx') : null,
    normalizedPath
      ? path.join(appDir, '(main)', normalizedPath.replace(/^\//, ''), 'page.tsx')
      : null,
    normalizedPath ? path.join(appDir, normalizedPath.replace(/^\//, ''), 'page.tsx') : null,
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

/**
 * Map an app/page.tsx file path to a site pathname. Skips dynamic route segments.
 */
export function appPageFileToPathname(filePath, appDir) {
  let rel = path.relative(appDir, filePath).replace(/\\/g, '/');
  if (!rel.endsWith('/page.tsx') && !rel.endsWith('/page.ts')) return null;
  if (rel.includes('[')) return null;

  rel = rel.replace(/\/page\.tsx$/, '').replace(/\/page\.ts$/, '');
  if (rel === 'page.tsx' || rel === '(main)' || rel === '(main)/page.tsx') return '/';

  rel = rel.replace(/^\(main\)\//, '').replace(/^\(main\)$/, '');
  if (!rel || rel === 'page.tsx') return '/';

  return `/${rel}`;
}

export function walkAppPages(appDir, dir = appDir, results = []) {
  if (!fs.existsSync(dir)) return results;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkAppPages(appDir, fullPath, results);
      continue;
    }
    if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      results.push(fullPath);
    }
  }
  return results;
}
