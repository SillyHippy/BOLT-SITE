import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { COUNTIES } from './county-data';
import { COUNTY_FAQ_OVERRIDES } from './county-faq-overrides';

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

/**
 * Generate 6 county-specific FAQs for use on both static county pages and the
 * dynamic [slug] route. No dollar amounts (routes cost questions to /pricing).
 * No em-dashes. Each answer names the county or county seat to keep Google
 * from deduplicating identical FAQ schema across pages.
 */
export function generateCountyFAQs(
  countyName: string,
  countySeat: string,
  courthouseAddress?: string
): Array<{ question: string; answer: string }> {
  const sanitizeFAQ = (
    question: string,
    answer: string
  ): { question: string; answer: string } => {
    const cleanedQuestion = question.replace(/\s+/g, ' ').trim();

    const rawSentences = answer
      .replace(/\s+/g, ' ')
      .trim()
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);

    const promoSentence =
      /(call\s*\(?539\)?|visit\s*\/contact|contact\s+just\s+legal\s+solutions|reach\s+out\s+to\s+just\s+legal\s+solutions|for\s+process\s+serving|for\s+legal\s+document\s+serving|to\s+get\s+started)/i;
    const filtered = rawSentences.filter((s) => !promoSentence.test(s));

    const kept = (filtered.length ? filtered : rawSentences).slice(0, 3);
    let cleanedAnswer = kept.join(' ').replace(/\s+/g, ' ').trim();
    cleanedAnswer = cleanedAnswer.replace(
      /\$\s*\d[\d,]*(?:\.\d+)?/g,
      'the required statutory amount'
    );

    if (cleanedAnswer.length > 460) {
      cleanedAnswer = `${cleanedAnswer.slice(0, 457).trimEnd()}...`;
    }

    return { question: cleanedQuestion, answer: cleanedAnswer };
  };

  const normalizeName = (value: string): string =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9 ]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  const countySlug = Object.values(COUNTIES).find(
    (c) => normalizeName(c.countyName) === normalizeName(countyName)
  )?.slug;
  const overridden = countySlug ? COUNTY_FAQ_OVERRIDES[countySlug] : undefined;
  if (overridden && overridden.length > 0) {
    const seenQuestions = new Set<string>();
    const polished = overridden
      .map((faq) => sanitizeFAQ(faq.question, faq.answer))
      .filter((faq) => faq.question.length >= 18 && faq.answer.length >= 60)
      .filter((faq) => {
        const key = faq.question.toLowerCase();
        if (seenQuestions.has(key)) return false;
        seenQuestions.add(key);
        return true;
      })
      .slice(0, 6);

    if (polished.length >= 4) return polished;
  }

  const addrClause = courthouseAddress
    ? ` at ${courthouseAddress}`
    : ` in ${countySeat}`;
  return [
    {
      question: `How much does it cost to hire a process server in ${countyName}?`,
      answer: `We use tiered pricing across ${countyName}: standard, rush, same-day, and 24/7 emergency service. See current rates on our pricing page at /pricing. Every tier includes GPS-tracked attempts, timestamped photo evidence, and a notarized affidavit of service ready for filing.`,
    },
    {
      question: `How quickly can you serve papers in ${countyName}?`,
      answer: `Standard service in ${countySeat} and the rest of ${countyName} typically begins within 48 hours and completes within 3 to 5 business days. Rush and same-day options are available throughout ${countyName} for tight court deadlines. Call (539) 367-6832 before noon for same-day dispatch.`,
    },
    {
      question: `Where is the ${countyName} Courthouse and how do I file proof of service?`,
      answer: `The ${countyName} Courthouse is located${addrClause}. Our servers return stamped, notarized affidavits of service ready for filing with the court clerk, typically within 48 to 72 hours of a successful service attempt. Electronic copies are delivered by email with physical returns following by mail.`,
    },
    {
      question: `Can you serve papers in rural areas of ${countyName}?`,
      answer: `Yes. Our servers are familiar with rural-route addressing, ranch and farm properties, gated communities, and remote residences across ${countyName}. We plan routing carefully for outlying towns and unincorporated areas, and we build appropriate drive time into every attempt. No location surcharges apply within ${countyName}.`,
    },
    {
      question: `What if the person I need served in ${countyName} is avoiding service or hard to locate?`,
      answer: `We offer skip tracing and stakeout service throughout ${countyName} when a defendant is evading service or the address is outdated. Our servers use database searches, neighbor interviews, and employment checks to locate subjects and complete service. Call (539) 367-6832 to discuss a difficult service in ${countySeat} or anywhere in the county.`,
    },
    {
      question: `Are your ${countyName} process servers licensed and bonded?`,
      answer: `Yes. Just Legal Solutions is licensed under 12 O.S. section 158.1 and carries the required $5,000 surety bond on every server we deploy in ${countyName}. Every assignment is GPS-verified, photographed, and returned with a notarized affidavit. Request service through our contact page or call (539) 367-6832.`,
    },
  ];
}

// Location page utilities

const LOCATIONS_DIR = join(process.cwd(), 'content', 'locations');

export function getLocationSlugs(): string[] {
  try {
    const files = readdirSync(LOCATIONS_DIR).filter((f) => f.endsWith('.md'));
    return files.map((f) => f.replace(/\.md$/, ''));
  } catch {
    return [];
  }
}

export function getLocationContent(slug: string): string {
  const filePath = join(LOCATIONS_DIR, `${slug}.md`);
  return readFileSync(filePath, 'utf-8');
}

export function slugToLocationName(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
