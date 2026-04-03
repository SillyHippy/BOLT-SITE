import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const COUNTIES_DIR = join(process.cwd(), 'seo-content', 'counties');

const EXISTING_COUNTY_PAGES = [
  'creek-county',
  'mayes-county',
  'nowata-county',
  'okmulgee-county',
  'osage-county',
  'rogers-county',
  'tulsa-county',
  'wagoner-county',
  'washington-county',
];

const SKIP_FILES = ['tulsa-county-enhanced'];

export function getCountySlugs(): string[] {
  const files = readdirSync(COUNTIES_DIR).filter((f) => f.endsWith('.md'));
  return files
    .map((f) => f.replace(/\.md$/, ''))
    .filter(
      (slug) =>
        !EXISTING_COUNTY_PAGES.includes(slug) && !SKIP_FILES.includes(slug)
    );
}

export function getCountyContent(slug: string): string {
  const filePath = join(COUNTIES_DIR, `${slug}.md`);
  return readFileSync(filePath, 'utf-8');
}

export function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

export function extractDescription(content: string): string {
  const lines = content.split('\n');
  let pastH1 = false;
  for (const line of lines) {
    if (!pastH1) {
      if (/^#\s+/.test(line)) pastH1 = true;
      continue;
    }
    const trimmed = line.trim();
    if (trimmed === '' || trimmed.startsWith('#') || trimmed === '---') continue;
    // Strip leading/trailing markdown italic markers
    return trimmed.replace(/^\*+|\*+$/g, '').trim();
  }
  return '';
}

export function slugToCountyName(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
