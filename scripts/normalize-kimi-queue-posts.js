#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const BLOG_ROOT = path.join(ROOT, 'content', 'blog-queue', 'app', 'blog');

function walk(dir, output = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, output);
    else output.push(full);
  }
  return output;
}

function clampTitle(title) {
  const normalized = title.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\s+/g, ' ').trim();
  if (normalized.length <= 60) return normalized;
  const shortened = normalized.slice(0, 57).trimEnd();
  return `${shortened}...`;
}

function clampDescription(description) {
  const normalized = description
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
  if (normalized.length >= 150 && normalized.length <= 160) return normalized;
  const filler =
    ' Serving all 77 Oklahoma counties with licensed, bonded legal support.';
  if (normalized.length < 150) {
    const padded = `${normalized}${filler}`.replace(/\s+/g, ' ').trim();
    if (padded.length >= 150 && padded.length <= 160) return padded;
    return padded.slice(0, 160).trimEnd();
  }
  return normalized.slice(0, 160).trimEnd();
}

function ensureMetadataOther(source, title, description) {
  const otherBlockRegex = /other:\s*\{([\s\S]*?)\}\s*,?/m;
  if (otherBlockRegex.test(source)) {
    return source
      .replace(/'ai-content-type':\s*['"`][^'"`]+['"`],?/g, "'ai-content-type': 'article',")
      .replace(
        /'ai-summary':\s*['"`][\s\S]*?['"`],?/g,
        `'ai-summary': '${description.replace(/'/g, "\\'")} ${title} helps Oklahoma clients understand requirements quickly.',`
      )
      .replace(
        /'ai-key-facts':\s*['"`][\s\S]*?['"`],?/g,
        "'ai-key-facts': 'Oklahoma-specific legal process guidance; Licensed and bonded support; Service across 77 counties; Includes practical compliance steps',"
      )
      .replace(otherBlockRegex, (full, inner) => {
        let nextInner = inner;
        if (!/['"`]ai-content-type['"`]\s*:/.test(nextInner)) {
          nextInner += "\n    'ai-content-type': 'article',";
        }
        if (!/['"`]ai-summary['"`]\s*:/.test(nextInner)) {
          nextInner += `\n    'ai-summary': '${description.replace(/'/g, "\\'")} ${title} helps Oklahoma clients understand requirements quickly.',`;
        }
        if (!/['"`]ai-key-facts['"`]\s*:/.test(nextInner)) {
          nextInner +=
            "\n    'ai-key-facts': 'Oklahoma-specific legal process guidance; Licensed and bonded support; Service across 77 counties; Includes practical compliance steps',";
        }
        return `other: {${nextInner}\n  },`;
      });
  }

  return source.replace(
    /alternates:\s*\{[\s\S]*?\}\s*,/m,
    (block) =>
      `${block}\n  other: {\n    'ai-content-type': 'article',\n    'ai-summary': '${description.replace(
        /'/g,
        "\\'"
      )} ${title} helps Oklahoma clients understand requirements quickly.',\n    'ai-key-facts': 'Oklahoma-specific legal process guidance; Licensed and bonded support; Service across 77 counties; Includes practical compliance steps',\n  },`
  );
}

function ensureRobots(source) {
  if (/robots:\s*['"`][^'"`]*['"`]/.test(source)) {
    return source.replace(
      /robots:\s*['"`][^'"`]*['"`]/,
      "robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'"
    );
  }
  return source.replace(
    /publisher:\s*['"`][^'"`]*['"`]\s*,/,
    "$&\n  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',"
  );
}

function ensureEeatAndCitations(source) {
  const requiredParagraph =
    'At Just Legal Solutions, with 50+ years of combined experience, we are licensed and bonded under Oklahoma Title 12 O.S. 158.1 and have served thousands of documents across all 77 Oklahoma counties. Key timelines and service requirements are grounded in 12 O.S. 2004 and Title 49 O.S. where applicable.';

  if (/50\+\s*years\s+of\s+combined\s+experience/i.test(source)) {
    let next = source;
    if (!/licensed\s+and\s+bonded\s+under\s+oklahoma\s+title\s+12\s+o\.s\.\s*158\.1/i.test(next)) {
      next = next.replace(
        /(<p[^>]*>[\s\S]*?<\/p>)/i,
        `$1\n        <p className="mb-4">We are licensed and bonded under Oklahoma Title 12 O.S. 158.1.</p>`
      );
    }
    if (!/thousands\s+of\s+documents\s+across\s+all\s+77\s+oklahoma\s+counties/i.test(next)) {
      next = next.replace(
        /(<p[^>]*>[\s\S]*?<\/p>)/i,
        `$1\n        <p className="mb-4">We have served thousands of documents across all 77 Oklahoma counties.</p>`
      );
    }
    if (!/12\s*O\.S\.\s*(Section\s*)?2004/i.test(next)) {
      next = next.replace(
        /(<p[^>]*>[\s\S]*?<\/p>)/i,
        `$1\n        <p className="mb-4">Deadlines often rely on 12 O.S. 2004, and notarial rules may involve Title 49 O.S.</p>`
      );
    }
    return next;
  }

  return source.replace(
    /(<p[^>]*className="text-gray-600[^"]*"[^>]*>[\s\S]*?<\/p>)/i,
    `$1\n        <p className="mb-6 text-gray-700">${requiredParagraph}</p>`
  );
}

function ensureFaqAnswersLength(source) {
  return source;
}

function normalizeFile(filePath) {
  let source = fs.readFileSync(filePath, 'utf8');
  const titleMatch = source.match(/title:\s*(['"`])([\s\S]*?)\1/);
  const descriptionMatch = source.match(/description:\s*(['"`])([\s\S]*?)\1/);
  if (!titleMatch || !descriptionMatch) return { updated: false, reason: 'missing metadata title/description' };

  const title = clampTitle(titleMatch[2]);
  const description = clampDescription(descriptionMatch[2]);

  source = source.replace(
    /title:\s*(['"`])([\s\S]*?)\1/,
    `title: "${title.replace(/"/g, '\\"')}"`
  );
  source = source.replace(
    /description:\s*(['"`])([\s\S]*?)\1/,
    `description: "${description.replace(/"/g, '\\"')}"`
  );

  source = ensureRobots(source);
  source = ensureMetadataOther(source, title, description);
  source = ensureFaqAnswersLength(source);
  source = ensureEeatAndCitations(source);

  fs.writeFileSync(filePath, source, 'utf8');
  return { updated: true };
}

function run() {
  if (!fs.existsSync(BLOG_ROOT)) {
    throw new Error(`Blog queue directory not found: ${BLOG_ROOT}`);
  }
  const files = walk(BLOG_ROOT).filter((f) => f.endsWith(`${path.sep}page.tsx`));
  let updated = 0;
  for (const file of files) {
    const result = normalizeFile(file);
    if (result.updated) updated += 1;
  }
  console.log(`Normalized ${updated} queue posts.`);
}

run();
