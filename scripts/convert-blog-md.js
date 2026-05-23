const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join('C:', 'Users', 'ianna', 'Downloads', 'Kimi_Agent_Just Legal Blog Series');
const TARGET_DIR = path.join(__dirname, '..', 'app', 'blog');

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error('No frontmatter found');
  const fm = {};
  const lines = match[1].split('\n');
  let currentKey = null;
  let currentList = null;
  for (const line of lines) {
    const listStart = line.match(/^(\w+):\s*$/);
    const listItem = line.match(/^\s+-\s+(.+)$/);
    const kvMatch = line.match(/^(\w+):\s+"?(.+?)"?\s*$/);
    if (listStart && !listItem) {
      currentKey = listStart[1];
      fm[currentKey] = [];
      currentList = currentKey;
    } else if (kvMatch && !listItem) {
      currentKey = kvMatch[1];
      fm[currentKey] = kvMatch[2];
      currentList = null;
    } else if (listStart) {
      currentKey = listStart[1];
      fm[currentKey] = [];
      currentList = currentKey;
    } else if (listItem && currentList) {
      fm[currentList].push(listItem[1]);
    }
  }
  return { frontmatter: fm, body: match[2] };
}

function escapeJSX(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\u2019/g, '&apos;')
    .replace(/\u2018/g, '&apos;')
    .replace(/\u201C/g, '&ldquo;')
    .replace(/\u201D/g, '&rdquo;')
    .replace(/\u2014/g, '&mdash;')
    .replace(/\*\*/g, '');
}

function convertInlineMarkdown(text) {
  // First escape special characters in plain text BEFORE inserting JSX tags
  // Save markdown links/bold/italic from being corrupted
  const links = [];
  let idx = 0;
  // Extract and preserve markdown links
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match) => {
    const placeholder = '%%LINK' + idx + '%%';
    links.push(match);
    idx++;
    return placeholder;
  });
  // Extract and preserve bold
  const bolds = [];
  idx = 0;
  text = text.replace(/\*\*([^*]+)\*\*/g, (match, p1) => {
    const placeholder = '%%BOLD' + idx + '%%';
    bolds.push(p1);
    idx++;
    return placeholder;
  });
  // Extract and preserve italic
  const italics = [];
  idx = 0;
  text = text.replace(/\*([^*]+)\*/g, (match, p1) => {
    const placeholder = '%%ITAL' + idx + '%%';
    italics.push(p1);
    idx++;
    return placeholder;
  });

  // Now escape special chars in remaining plain text
  text = text.replace(/'/g, '&apos;');
  text = text.replace(/\u2019/g, '&apos;');
  text = text.replace(/\u2018/g, '&apos;');
  text = text.replace(/"/g, '&quot;');
  text = text.replace(/\u201C/g, '&ldquo;');
  text = text.replace(/\u201D/g, '&rdquo;');
  text = text.replace(/\u2014/g, '&mdash;');

  // Restore bold (escaping content)
  bolds.forEach((b, i) => {
    const escaped = b.replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/\u2019/g, '&apos;').replace(/\u2018/g, '&apos;').replace(/\u201C/g, '&ldquo;').replace(/\u201D/g, '&rdquo;').replace(/\u2014/g, '&mdash;');
    text = text.replace('%%BOLD' + i + '%%', '<strong>' + escaped + '</strong>');
  });
  // Restore italic (escaping content)
  italics.forEach((it, i) => {
    const escaped = it.replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/\u2019/g, '&apos;').replace(/\u2018/g, '&apos;').replace(/\u201C/g, '&ldquo;').replace(/\u201D/g, '&rdquo;').replace(/\u2014/g, '&mdash;');
    text = text.replace('%%ITAL' + i + '%%', '<em>' + escaped + '</em>');
  });
  // Restore links (converting to JSX)
  links.forEach((link, i) => {
    const m = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (m) {
      const linkText = m[1].replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/\u2019/g, '&apos;').replace(/\u2018/g, '&apos;');
      const href = m[2];
      if (href.startsWith('http')) {
        text = text.replace('%%LINK' + i + '%%', '<a href="' + href + '" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">' + linkText + '</a>');
      } else {
        text = text.replace('%%LINK' + i + '%%', '<Link href="' + href + '" className="text-blue-600 hover:underline">' + linkText + '</Link>');
      }
    }
  });
  return text;
}

function renderTable(headers, rows) {
  let jsx = '\n            <div className="overflow-x-auto my-8">\n';
  jsx += '              <table className="min-w-full border border-gray-200 rounded-lg">\n';
  jsx += '                <thead className="bg-gray-50">\n                  <tr>\n';
  for (const h of headers) {
    jsx += '                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">' + escapeJSX(h) + '</th>\n';
  }
  jsx += '                  </tr>\n                </thead>\n                <tbody>\n';
  for (const row of rows) {
    jsx += '                  <tr className="border-b">\n';
    for (const cell of row) {
      jsx += '                    <td className="px-4 py-3 text-sm text-gray-700">' + convertInlineMarkdown(cell) + '</td>\n';
    }
    jsx += '                  </tr>\n';
  }
  jsx += '                </tbody>\n              </table>\n            </div>';
  return jsx;
}

function markdownToJSX(body) {
  const lines = body.split('\n');
  const jsxParts = [];
  let inList = false;
  let inOrderedList = false;
  let inBlockquote = false;
  let inTable = false;
  let tableRows = [];
  let tableHeaders = [];
  let faqSection = false;
  const faqs = [];
  let currentFaqQ = null;
  let currentFaqA = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.match(/^##\s+Frequently Asked Questions/i)) {
      faqSection = true;
      continue;
    }
    if (trimmed.match(/^##\s+(Related Resources|Need Help|Related Guides)/i)) {
      if (currentFaqQ && currentFaqA) {
        faqs.push({ question: currentFaqQ, answer: currentFaqA.trim() });
        currentFaqQ = null;
        currentFaqA = '';
      }
      faqSection = false;
      continue;
    }

    if (faqSection) {
      if (trimmed.startsWith('### ')) {
        if (currentFaqQ && currentFaqA) {
          faqs.push({ question: currentFaqQ, answer: currentFaqA.trim() });
          currentFaqA = '';
        }
        currentFaqQ = trimmed.replace(/^###\s+/, '').replace(/^\*\*Q:\s*/, '').replace(/\*\*$/, '').replace(/^Q:\s*/, '');
      } else if (trimmed.match(/^\*\*[^*]+\?\*\*$/)) {
        if (currentFaqQ && currentFaqA) {
          faqs.push({ question: currentFaqQ, answer: currentFaqA.trim() });
          currentFaqA = '';
        }
        currentFaqQ = trimmed.replace(/^\*\*/, '').replace(/\*\*$/, '');
      } else if (trimmed && currentFaqQ) {
        const cleaned = trimmed.replace(/^\*\*A:\*\*\s*/, '').replace(/\*\*/g, '');
        currentFaqA += (currentFaqA ? ' ' : '') + cleaned;
      }
      continue;
    }

    if (trimmed === '---' || trimmed === '***' || trimmed === '___') continue;
    if (trimmed.startsWith('# ') && !trimmed.startsWith('## ')) continue;

    if (trimmed.startsWith('## ')) {
      if (inList) { jsxParts.push('            </ul>'); inList = false; }
      if (inOrderedList) { jsxParts.push('            </ol>'); inOrderedList = false; }
      if (inTable) { jsxParts.push(renderTable(tableHeaders, tableRows)); inTable = false; tableHeaders = []; tableRows = []; }
      const text = trimmed.replace(/^##\s+/, '');
      jsxParts.push('');
      jsxParts.push('            <h2>' + escapeJSX(text) + '</h2>');
      continue;
    }

    if (trimmed.startsWith('### ')) {
      if (inList) { jsxParts.push('            </ul>'); inList = false; }
      if (inOrderedList) { jsxParts.push('            </ol>'); inOrderedList = false; }
      const text = trimmed.replace(/^###\s+/, '');
      jsxParts.push('');
      jsxParts.push('            <h3>' + escapeJSX(text) + '</h3>');
      continue;
    }

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableHeaders = trimmed.split('|').filter(c => c.trim()).map(c => c.trim());
        continue;
      }
      if (trimmed.match(/^\|[\s\-:|]+\|$/)) continue;
      tableRows.push(trimmed.split('|').filter(c => c.trim()).map(c => c.trim()));
      continue;
    } else if (inTable) {
      jsxParts.push(renderTable(tableHeaders, tableRows));
      inTable = false;
      tableHeaders = [];
      tableRows = [];
    }

    if (trimmed.startsWith('> ')) {
      const content = trimmed.replace(/^>\s*/, '');
      if (!inBlockquote) {
        inBlockquote = true;
        if (content.match(/\*\*(Important|Warning|Note|Caution)/i)) {
          jsxParts.push('');
          jsxParts.push('            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">');
          jsxParts.push('              <p className="text-amber-900 font-medium">' + convertInlineMarkdown(content) + '</p>');
        } else {
          jsxParts.push('');
          jsxParts.push('            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">');
          jsxParts.push('              <p className="text-blue-900">' + convertInlineMarkdown(content) + '</p>');
        }
      } else {
        jsxParts.push('              <p className="mt-2">' + convertInlineMarkdown(content) + '</p>');
      }
      continue;
    } else if (inBlockquote) {
      jsxParts.push('            </div>');
      inBlockquote = false;
    }

    if (trimmed.match(/^[-*]\s+/)) {
      const content = trimmed.replace(/^[-*]\s+/, '');
      if (!inList) {
        if (inOrderedList) { jsxParts.push('            </ol>'); inOrderedList = false; }
        jsxParts.push('            <ul>');
        inList = true;
      }
      jsxParts.push('              <li>' + convertInlineMarkdown(content) + '</li>');
      continue;
    } else if (inList && trimmed === '') {
      if (i + 1 >= lines.length || !lines[i + 1].trim().match(/^[-*]\s+/)) {
        jsxParts.push('            </ul>');
        inList = false;
      }
      continue;
    }

    if (trimmed.match(/^\d+\.\s+/)) {
      const content = trimmed.replace(/^\d+\.\s+/, '');
      if (!inOrderedList) {
        if (inList) { jsxParts.push('            </ul>'); inList = false; }
        jsxParts.push('            <ol>');
        inOrderedList = true;
      }
      jsxParts.push('              <li>' + convertInlineMarkdown(content) + '</li>');
      continue;
    } else if (inOrderedList && trimmed === '') {
      if (i + 1 >= lines.length || !lines[i + 1].trim().match(/^\d+\.\s+/)) {
        jsxParts.push('            </ol>');
        inOrderedList = false;
      }
      continue;
    }

    if (trimmed !== '') {
      jsxParts.push('            <p>' + convertInlineMarkdown(trimmed) + '</p>');
    }
  }

  if (inList) jsxParts.push('            </ul>');
  if (inOrderedList) jsxParts.push('            </ol>');
  if (inBlockquote) jsxParts.push('            </div>');
  if (inTable) jsxParts.push(renderTable(tableHeaders, tableRows));
  if (currentFaqQ && currentFaqA) {
    faqs.push({ question: currentFaqQ, answer: currentFaqA.trim() });
  }

  return { articleJSX: jsxParts.join('\n'), faqs };
}

function extractRelatedResources(body) {
  const resources = [];
  const lines = body.split('\n');
  let inRelated = false;
  for (const line of lines) {
    if (line.trim().match(/^##\s+(Related Resources|Related Guides)/i)) { inRelated = true; continue; }
    if (inRelated && line.trim().startsWith('## ')) break;
    if (inRelated) {
      const m = line.match(/\[([^\]]+)\]\(([^)]+)\)\s*[:\u2014-]?\s*(.*)/);
      if (m) resources.push({ text: m[1], href: m[2], description: m[3] || '' });
    }
  }
  return resources;
}

function slugToComponentName(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/`/g, '\\`');
}

function escDQ(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function generatePageTSX(fm, body) {
  const { articleJSX, faqs } = markdownToJSX(body);
  const relatedResources = extractRelatedResources(body);
  const slug = fm.slug;
  const componentName = slugToComponentName(slug);
  const title = fm.title;
  const description = fm.description;
  const keywords = Array.isArray(fm.keywords) ? fm.keywords : [fm.keywords];
  const datePublished = fm.datePublished || '2026-04-08';
  const dateModified = fm.dateModified || '2026-04-08';
  const h1 = (body.match(/^#\s+(.+)$/m) || [])[1] || title.replace(' | Just Legal Solutions', '');
  const shortTitle = h1
    .replace(/\s*\(20\d{2}\)\s*/g, '')
    .replace(/\s*\|\s*Just Legal Solutions/g, '')
    .replace(/\s*\|\s*.*/g, '')
    .trim();

  const faqsStr = faqs.map(f => {
    return '  {\n    question: "' + escDQ(f.question) + '",\n    answer: "' + escDQ(f.answer) + '"\n  }';
  }).join(',\n');

  const relatedJSX = relatedResources.slice(0, 6).map(r => {
    const isExt = r.href.startsWith('http');
    if (isExt) {
      return '              <a href="' + r.href + '" target="_blank" rel="noopener noreferrer" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">\n'
        + '                <span className="font-semibold text-blue-800">' + escapeJSX(r.text) + '</span>\n'
        + '                <p className="text-sm text-blue-700 mt-1">' + escapeJSX(r.description) + '</p>\n'
        + '              </a>';
    }
    return '              <Link href="' + r.href + '" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">\n'
      + '                <span className="font-semibold text-blue-800">' + escapeJSX(r.text) + '</span>\n'
      + '                <p className="text-sm text-blue-700 mt-1">' + escapeJSX(r.description) + '</p>\n'
      + '              </Link>';
  }).join('\n');

  const kwArr = keywords.slice(0, 4).map(k => "'" + esc(k) + "'").join(', ');
  const pubDate = new Date(datePublished + 'T12:00:00');
  const pubFormatted = pubDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  let page = '';
  page += "import { Metadata } from 'next';\n";
  page += "import Link from 'next/link';\n";
  page += "import { ChevronRight } from 'lucide-react';\n";
  page += "import UnifiedSchema from '@/components/UnifiedSchema';\n";
  page += "import { Navbar } from '@/components/ui/navbar';\n";
  page += "import { Footer } from '@/components/ui/footer';\n";
  page += "import LocalPromoBanner from '@/components/ui/local-promo-banner';\n";
  page += "\n";
  page += "export const metadata: Metadata = {\n";
  page += "  title: '" + esc(title) + "',\n";
  page += "  description: '" + esc(description) + "',\n";
  page += "  keywords: '" + esc(keywords.join(', ')) + "',\n";
  page += "  authors: [{ name: 'Just Legal Solutions' }],\n";
  page += "  creator: 'Just Legal Solutions',\n";
  page += "  publisher: 'Just Legal Solutions',\n";
  page += "  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',\n";
  page += "  openGraph: {\n";
  page += "    title: '" + esc(title.replace(/ \| Just Legal Solutions$/, '')) + "',\n";
  page += "    description: '" + esc(description) + "',\n";
  page += "    url: 'https://justlegalsolutions.org/blog/" + slug + "',\n";
  page += "    siteName: 'Just Legal Solutions',\n";
  page += "    locale: 'en_US',\n";
  page += "    type: 'article',\n";
  page += "    images: [{ url: 'https://justlegalsolutions.org/og-image.webp', width: 1200, height: 630, alt: '" + esc(shortTitle) + "' }],\n";
  page += "  },\n";
  page += "  alternates: { canonical: 'https://justlegalsolutions.org/blog/" + slug + "' },\n";
  page += "  other: {\n";
  page += "    'article:published_time': '" + datePublished + "',\n";
  page += "    'article:modified_time': '" + dateModified + "',\n";
  page += "    'article:author': 'Joseph Iannazzi',\n";
  page += "    'last-modified': '" + dateModified + "',\n";
  page += "    'ai-content-type': 'article',\n";
  page += "    'ai-summary': '" + esc(description) + "',\n";
  page += "    'ai-key-facts': '" + esc(keywords.slice(0, 3).join('; ')) + "',\n";
  page += "  },\n";
  page += "};\n\n";
  page += "const faqs: { question: string; answer: string }[] = [\n" + faqsStr + "\n];\n\n";
  page += "export default function " + componentName + "() {\n";
  page += "  return (\n";
  page += "    <>\n";
  page += '      <UnifiedSchema\n';
  page += '        pageType="article"\n';
  page += '        pageTitle="' + escDQ(title.replace(/ \| Just Legal Solutions$/, '')) + '"\n';
  page += '        pageDescription="' + escDQ(description) + '"\n';
  page += '        pageUrl="https://justlegalsolutions.org/blog/' + slug + '"\n';
  page += '        datePublished="' + datePublished + '"\n';
  page += '        dateModified="' + dateModified + '"\n';
  page += '        siteName="Just Legal Solutions"\n';
  page += '        reviewCount={156}\n';
  page += "        services={['Process Serving', 'Legal Document Delivery', 'Same-Day Service']}\n";
  page += '        breadcrumbs={[\n';
  page += "          { name: 'Home', url: '/' },\n";
  page += "          { name: 'Blog', url: '/blog' },\n";
  page += "          { name: '" + esc(shortTitle) + "', url: '/blog/" + slug + "' },\n";
  page += '        ]}\n';
  page += '        articleDetails={{\n';
  page += '          headline: "' + escDQ(h1) + '",\n';
  page += '          author: "Joseph Iannazzi",\n';
  page += '          datePublished: "' + datePublished + '",\n';
  page += '          dateModified: "' + dateModified + '",\n';
  page += '          image: "https://justlegalsolutions.org/og-image.webp"\n';
  page += '        }}\n';
  page += '        faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}\n';
  page += '        keywords={[' + kwArr + ']}\n';
  page += '      />\n\n';
  page += '      <Navbar />\n';
  page += '      <LocalPromoBanner zips={[]} />\n\n';
  page += '      <div className="bg-gray-50 min-h-screen py-12">\n';
  page += '        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">\n';
  page += '          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-500 mb-8">\n';
  page += '            <Link href="/" className="hover:text-blue-600">Home</Link>\n';
  page += '            <ChevronRight className="w-4 h-4" />\n';
  page += '            <Link href="/blog" className="hover:text-blue-600">Blog</Link>\n';
  page += '            <ChevronRight className="w-4 h-4" />\n';
  page += '            <span className="text-gray-900 font-medium">' + escapeJSX(shortTitle) + '</span>\n';
  page += '          </nav>\n\n';
  page += '          <header className="mb-12">\n';
  page += '            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">\n';
  page += '              ' + escapeJSX(h1) + '\n';
  page += '            </h1>\n';
  page += '            <div className="flex items-center text-gray-600 space-x-4">\n';
  page += '              <span className="font-medium text-blue-600">By Joseph Iannazzi</span>\n';
  page += '              <span>&bull;</span>\n';
  page += '              <span>Published: ' + pubFormatted + '</span>\n';
  page += '            </div>\n';
  page += '          </header>\n\n';
  page += '          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 rounded-xl shadow-sm">\n';
  page += articleJSX + '\n\n';
  page += '            <hr className="my-8 border-gray-200" />\n';
  page += '            <p className="text-sm text-gray-500 italic">\n';
  page += '              <strong>Legal Disclaimer:</strong> This information is for educational purposes only and does not constitute legal advice. Consult an Oklahoma attorney for specific legal questions.\n';
  page += '            </p>\n';
  page += '          </article>\n\n';

  if (relatedResources.length > 0) {
    page += '          <section className="mt-12 mb-8 bg-white rounded-xl shadow-sm p-8">\n';
    page += '            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides &amp; Resources</h2>\n';
    page += '            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">\n';
    page += relatedJSX + '\n';
    page += '            </div>\n';
    page += '          </section>\n\n';
  }

  page += '          <section className="mt-16">\n';
  page += '            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>\n';
  page += '            <div className="space-y-4">\n';
  page += '              {faqs.map((faq, index) => (\n';
  page += '                <div key={index} className="bg-white rounded-xl shadow-sm p-6">\n';
  page += '                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>\n';
  page += '                  <p className="text-gray-700">{faq.answer}</p>\n';
  page += '                </div>\n';
  page += '              ))}\n';
  page += '            </div>\n';
  page += '          </section>\n';
  page += '        </div>\n';
  page += '      </div>\n\n';
  page += '      <Footer />\n';
  page += '    </>\n';
  page += '  );\n';
  page += '}\n';

  return page;
}

// Main
const files = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.md'));
console.log('Found ' + files.length + ' markdown files to convert');

let success = 0;
const errors = [];

for (const file of files) {
  try {
    const content = fs.readFileSync(path.join(SOURCE_DIR, file), 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);
    const slug = frontmatter.slug;
    if (!slug) { errors.push(file + ': No slug'); continue; }
    const tsx = generatePageTSX(frontmatter, body);
    const targetDir = path.join(TARGET_DIR, slug);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'page.tsx'), tsx, 'utf-8');
    console.log('OK ' + slug + '/page.tsx');
    success++;
  } catch (err) {
    errors.push(file + ': ' + err.message);
    console.error('FAIL ' + file + ': ' + err.message);
  }
}

console.log('\nDone: ' + success + ' converted, ' + errors.length + ' errors');
if (errors.length > 0) {
  console.log('Errors:');
  errors.forEach(e => console.log('  - ' + e));
}
