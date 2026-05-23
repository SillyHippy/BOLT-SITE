/**
 * Sync article freshness dates across metadata.other, UnifiedSchema props, and articleDetails.
 */

const DEFAULT_IMAGE = 'https://justlegalsolutions.org/images/jls-logo.webp';
const DEFAULT_AUTHOR = 'Just Legal Solutions Team';

function releaseDateInChicago() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Chicago',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

function extractMetaDates(source) {
  const published =
    source.match(/['"]article:published_time['"]\s*:\s*['"]([^'"]+)['"]/)?.[1] ||
    source.match(/['"]article:published_time['"]\s*:\s*['"]([^'"]+)['"]/)?.[1];
  const modified =
    source.match(/['"]article:modified_time['"]\s*:\s*['"]([^'"]+)['"]/)?.[1] ||
    published;
  return { datePublished: published, dateModified: modified || published };
}

function extractArticleDetailsDates(source) {
  const block = source.match(/articleDetails\s*=\s*\{\{([\s\S]*?)\}\}/);
  if (!block) return {};
  const inner = block[1];
  return {
    datePublished: inner.match(/datePublished\s*:\s*['"]([^'"]+)['"]/)?.[1],
    dateModified: inner.match(/dateModified\s*:\s*['"]([^'"]+)['"]/)?.[1],
  };
}

function extractHeadline(source, slug) {
  const fromDetails = source.match(/articleDetails\s*=\s*\{\{[\s\S]*?headline\s*:\s*['"]([^'"]+)['"]/)?.[1];
  if (fromDetails) return fromDetails;
  const fromSchemaTitle = source.match(/<UnifiedSchema[\s\S]*?\btitle\s*=\s*["']([^"']+)["']/)?.[1];
  if (fromSchemaTitle) return fromSchemaTitle;
  const fromPageTitle = source.match(/pageTitle\s*=\s*["']([^"']+)["']/)?.[1];
  if (fromPageTitle) return fromPageTitle;
  const fromMeta = source.match(/title\s*:\s*['"]([^'"]+)['"]/)?.[1];
  if (fromMeta) return fromMeta.replace(/\s*\|\s*Just Legal Solutions$/, '');
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function extractBlogUrl(source, slug) {
  const canonical = source.match(/canonical\s*:\s*['"](https:\/\/justlegalsolutions\.org\/blog\/[^'"]+)['"]/)?.[1];
  if (canonical) return canonical;
  const ogUrl = source.match(/url\s*:\s*['"](https:\/\/justlegalsolutions\.org\/blog\/[^'"]+)['"]/)?.[1];
  if (ogUrl) return ogUrl;
  const schemaUrl = source.match(/url\s*=\s*["'](https:\/\/justlegalsolutions\.org\/blog\/[^"']+)["']/)?.[1];
  if (schemaUrl) return schemaUrl;
  return `https://justlegalsolutions.org/blog/${slug}`;
}

function upsertMetaDates(source, datePublished, dateModified) {
  let out = source;
  const upsertInOther = (body) => {
    let next = body;
    if (/['"]article:published_time['"]\s*:/.test(next)) {
      next = next.replace(
        /(['"]article:published_time['"]\s*:\s*['"])([^'"]*)(['"])/,
        `$1${datePublished}$3`
      );
    } else {
      next = next.replace(/(\n\s*)(\},?\s*\n\s*\};)/, `$1    'article:published_time': '${datePublished}',\n$1$2`);
    }
    if (/['"]article:modified_time['"]\s*:/.test(next)) {
      next = next.replace(
        /(['"]article:modified_time['"]\s*:\s*['"])([^'"]*)(['"])/,
        `$1${dateModified}$3`
      );
    } else {
      next = next.replace(
        /(['"]article:published_time['"]\s*:\s*['"][^'"]+['"],?\s*\n)/,
        `$1    'article:modified_time': '${dateModified}',\n`
      );
    }
    return next;
  };

  const otherBlock = out.match(/other\s*:\s*\{([\s\S]*?)\n\s*\},/);
  if (otherBlock) {
    const updatedOther = upsertInOther(otherBlock[0]);
    out = out.replace(otherBlock[0], updatedOther);
    return out;
  }

  const metadataClose = out.match(/export const metadata[\s\S]*?(\n\};)/);
  if (!metadataClose) return out;

  const insert = `\n  other: {\n    'article:published_time': '${datePublished}',\n    'article:modified_time': '${dateModified}',\n    'ai-content-type': 'article',\n  },`;

  const metadataBlockMatch = out.match(/export const metadata[\s\S]*?\n\};/);
  if (!metadataBlockMatch) return out;

  const metadataBlock = metadataBlockMatch[0];
  const closingBraceIdx = metadataBlock.lastIndexOf('\n};');
  const beforeClose = metadataBlock.slice(0, closingBraceIdx).trimEnd();
  const needsComma = !beforeClose.endsWith(',');
  const updatedBlock = `${beforeClose}${needsComma ? ',' : ''}${insert}\n};`;
  return out.replace(metadataBlock, updatedBlock);
}

function setOrReplaceProp(source, prop, value, scopeStart, scopeEnd) {
  const segment = source.slice(scopeStart, scopeEnd);
  const re = new RegExp(`\\b${prop}\\s*=\\s*["'][^"']*["']`);
  const reColon = new RegExp(`${prop}\\s*:\\s*['"][^'"]*['"]`);
  if (re.test(segment)) {
    const updated = segment.replace(re, `${prop}="${value}"`);
    return source.slice(0, scopeStart) + updated + source.slice(scopeEnd);
  }
  if (reColon.test(segment)) {
    const updated = segment.replace(reColon, `${prop}: '${value}'`);
    return source.slice(0, scopeStart) + updated + source.slice(scopeEnd);
  }
  return null;
}

function upsertUnifiedSchemaDates(source, datePublished, dateModified) {
  const schemaIdx = source.indexOf('<UnifiedSchema');
  if (schemaIdx === -1) return source;
  const schemaEnd = source.indexOf('/>', schemaIdx);
  if (schemaEnd === -1) return source;
  const end = schemaEnd + 2;

  let out = source;
  let segment = out.slice(schemaIdx, end);

  for (const prop of ['datePublished', 'dateModified']) {
    const val = prop === 'datePublished' ? datePublished : dateModified;
    if (new RegExp(`\\b${prop}\\s*=`).test(segment)) {
      segment = segment.replace(new RegExp(`\\b${prop}\\s*=\\s*["'][^"']*["']`), `${prop}="${val}"`);
    } else if (new RegExp(`${prop}\\s*:`).test(segment)) {
      segment = segment.replace(new RegExp(`${prop}\\s*:\\s*['"][^'"]*['"]`), `${prop}: '${val}'`);
    } else {
      segment = segment.replace(
        /(<UnifiedSchema[\s\S]*?)(\n\s*\/>)/,
        `$1\n        ${prop}="${val}"$2`
      );
    }
  }

  out = out.slice(0, schemaIdx) + segment + out.slice(end);
  return out;
}

function upsertArticleDetails(source, { datePublished, dateModified, headline, slug }) {
  if (!source.includes('<UnifiedSchema')) return source;

  const image =
    source.match(/image\s*:\s*['"]([^'"]+)['"]/)?.[1] ||
    source.match(/image\s*=\s*["']([^"']+)["']/)?.[1] ||
    DEFAULT_IMAGE;

  if (/articleDetails\s*=\s*\{\{/.test(source)) {
    let out = source;
    if (/datePublished\s*:/.test(out)) {
      out = out.replace(/datePublished\s*:\s*['"][^'"]*['"]/, `datePublished: '${datePublished}'`);
    } else {
      out = out.replace(
        /(articleDetails\s*=\s*\{\{[\s\S]*?)(\n\s*\}\})/,
        `$1\n          datePublished: '${datePublished}',$2`
      );
    }
    if (/dateModified\s*:/.test(out)) {
      out = out.replace(/dateModified\s*:\s*['"][^'"]*['"]/, `dateModified: '${dateModified}'`);
    } else {
      out = out.replace(
        /(datePublished\s*:\s*'[^']+',)/,
        `$1\n          dateModified: '${dateModified}',`
      );
    }
    if (!/headline\s*:/.test(out.split('articleDetails')[1]?.split('}}')[0] || '')) {
      out = out.replace(
        /(articleDetails\s*=\s*\{\{\s*\n)/,
        `$1          headline: '${headline.replace(/'/g, "\\'")}',\n`
      );
    }
    return out;
  }

  const block = `        articleDetails={{
          headline: '${headline.replace(/'/g, "\\'")}',
          datePublished: '${datePublished}',
          dateModified: '${dateModified}',
          author: '${DEFAULT_AUTHOR}',
          image: '${image}',
        }}`;

  const schemaIdx = source.indexOf('<UnifiedSchema');
  const schemaEnd = source.indexOf('/>', schemaIdx);
  if (schemaEnd === -1) return source;

  const segment = source.slice(schemaIdx, schemaEnd);
  const insertBefore = /(\n\s*)(faqs=|faqItems=|keywords=|image=|\/>)/;
  const match = segment.match(insertBefore);
  if (!match) {
    const injected = segment.replace(/\n\s*\/>/, `\n${block}\n      />`);
    return source.slice(0, schemaIdx) + injected + source.slice(schemaEnd);
  }

  const injected = segment.replace(insertBefore, `\n${block}$1$2`);
  return source.slice(0, schemaIdx) + injected + source.slice(schemaEnd);
}

function resolveBlogDates(source, { datePublished, dateModified, mode = 'sync' }) {
  const meta = extractMetaDates(source);
  const details = extractArticleDetailsDates(source);

  if (mode === 'release') {
    const releaseDay = datePublished || releaseDateInChicago();
    return { datePublished: releaseDay, dateModified: dateModified || releaseDay };
  }

  const published =
    datePublished ||
    meta.datePublished ||
    details.datePublished ||
    releaseDateInChicago();
  const modified =
    dateModified ||
    meta.dateModified ||
    details.dateModified ||
    published;

  return { datePublished: published, dateModified: modified };
}

function applyBlogFreshnessDates(source, options = {}) {
  const { slug = 'blog-post', mode = 'sync' } = options;
  const dates = resolveBlogDates(source, options);
  const headline = options.headline || extractHeadline(source, slug);

  if (!source.includes('UnifiedSchema') && !source.includes('pageType="article"')) {
    return source;
  }

  let out = source;
  out = upsertMetaDates(out, dates.datePublished, dates.dateModified);
  out = upsertArticleDetails(out, { ...dates, headline, slug });
  out = upsertUnifiedSchemaDates(out, dates.datePublished, dates.dateModified);
  return out;
}

function hasJsonLdArticleDates(source) {
  return /datePublished\s*:\s*['"]/.test(source) || /datePublished="/.test(source);
}

function hasMetaArticleDates(source) {
  return /article:published_time/.test(source);
}

module.exports = {
  releaseDateInChicago,
  extractMetaDates,
  extractArticleDetailsDates,
  extractHeadline,
  extractBlogUrl,
  applyBlogFreshnessDates,
  hasJsonLdArticleDates,
  hasMetaArticleDates,
  resolveBlogDates,
};
