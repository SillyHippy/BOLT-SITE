import { readFile, readdir } from 'fs/promises';
import { join } from 'path';

const COUNTIES_DIR = join(process.cwd(), 'content', 'counties');

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

// ⚡ Bolt: Using asynchronous fs/promises to prevent blocking the Node.js event loop during I/O operations
export async function getCountySlugs(): Promise<string[]> {
  const filesDir = await readdir(COUNTIES_DIR);
  const files = filesDir.filter((f) => f.endsWith('.md'));
  return files
    .map((f) => f.replace(/\.md$/, ''))
    .filter(
      (slug) =>
        !EXISTING_COUNTY_PAGES.includes(slug) && !SKIP_FILES.includes(slug)
    );
}

export async function getCountyContent(slug: string): Promise<string> {
  const filePath = join(COUNTIES_DIR, `${slug}.md`);
  return await readFile(filePath, 'utf-8');
}

export function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  if (!match) return '';
  // Strip trailing "| Just Legal Solutions" to avoid duplication with layout template
  return match[1].trim().replace(/\s*\|\s*Just Legal Solutions$/i, '').trim();
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

/**
 * Extract FAQ-like Q&A pairs from markdown content.
 * Looks for ### headings that end with "?" and treats the following paragraph(s) as the answer.
 * Also looks for **Q:** / **A:** patterns.
 */
export function extractFAQs(content: string): Array<{ question: string; answer: string }> {
  const faqs: Array<{ question: string; answer: string }> = [];
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Pattern 1: ### heading ending with ?
    const h3Match = line.match(/^###\s+(.+\?)\s*$/);
    if (h3Match) {
      const question = h3Match[1].replace(/\*+/g, '').trim();
      const answerLines: string[] = [];
      for (let j = i + 1; j < lines.length; j++) {
        const next = lines[j].trim();
        if (next === '') {
          if (answerLines.length > 0) break;
          continue;
        }
        if (/^#{1,3}\s+/.test(next)) break;
        answerLines.push(next.replace(/^\*+|\*+$/g, ''));
      }
      if (answerLines.length > 0) {
        faqs.push({ question, answer: answerLines.join(' ') });
      }
    }
  }

  return faqs;
}

// ── Location page utilities ──

const LOCATIONS_DIR = join(process.cwd(), 'content', 'locations');

// ⚡ Bolt: Using asynchronous fs/promises for better concurrency in Server Components
export async function getLocationSlugs(): Promise<string[]> {
  try {
    const filesDir = await readdir(LOCATIONS_DIR);
    const files = filesDir.filter((f) => f.endsWith('.md'));
    return files.map((f) => f.replace(/\.md$/, ''));
  } catch {
    return [];
  }
}

export async function getLocationContent(slug: string): Promise<string> {
  const filePath = join(LOCATIONS_DIR, `${slug}.md`);
  return await readFile(filePath, 'utf-8');
}

export function slugToLocationName(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
