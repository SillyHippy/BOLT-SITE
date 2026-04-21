#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'reports');
const DEFAULT_SCAN_DIR = path.join(ROOT, 'app');
const SUPPORTED_EXT = new Set(['.tsx', '.ts', '.md']);
const MAX_CONTENT_CHARS = 14000;

function walkFiles(startPath, out = []) {
  if (!fs.existsSync(startPath)) return out;
  const stat = fs.statSync(startPath);
  if (stat.isFile()) {
    const ext = path.extname(startPath).toLowerCase();
    if (SUPPORTED_EXT.has(ext)) out.push(startPath);
    return out;
  }
  const entries = fs.readdirSync(startPath, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(startPath, entry.name);
    if (entry.isDirectory()) {
      if (
        entry.name === 'node_modules' ||
        entry.name === '.next' ||
        entry.name === 'out' ||
        entry.name === 'dist'
      ) {
        continue;
      }
      walkFiles(full, out);
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (SUPPORTED_EXT.has(ext)) out.push(full);
  }
  return out;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    input: DEFAULT_SCAN_DIR,
    out: REPORTS_DIR,
    limit: 15,
  };
  if (args[0] && !args[0].startsWith('--')) {
    config.input = path.resolve(args[0]);
  }
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--out' && args[i + 1]) {
      config.out = path.resolve(args[i + 1]);
    }
    if (args[i] === '--limit' && args[i + 1]) {
      const n = Number(args[i + 1]);
      if (Number.isFinite(n) && n > 0) config.limit = n;
    }
  }
  return config;
}

function buildPrompt(filePath, content) {
  return `You are auditing one website page for SEO and conversion quality.
Return only strict JSON with this shape:
{
  "pageSummary": "string",
  "seoIssues": [{"severity":"high|medium|low","issue":"string","fix":"string"}],
  "internalLinkOpportunities": ["string"],
  "trustSignalIssues": ["string"],
  "schemaIssues": ["string"],
  "quickWins": ["string"]
}

File: ${filePath}
Content:
${content}`;
}

async function auditWithKimi({ baseUrl, apiKey, model, filePath, content }) {
  const body = {
    model,
    temperature: 0.1,
    response_format: { type: 'json_object' },
    messages: [
      {
        role: 'system',
        content:
          'You are a precise technical SEO and legal-services conversion auditor. Output valid JSON only.',
      },
      { role: 'user', content: buildPrompt(filePath, content) },
    ],
  };

  const res = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Kimi API ${res.status}: ${text.slice(0, 400)}`);
  }

  const payload = await res.json();
  const message = payload?.choices?.[0]?.message?.content;
  if (!message) throw new Error('No response content from Kimi.');

  try {
    return JSON.parse(message);
  } catch {
    return { raw: message };
  }
}

function toMarkdown(results) {
  const lines = ['# Kimi Page Audit', ''];
  for (const item of results) {
    lines.push(`## ${item.file}`);
    lines.push('');
    if (item.error) {
      lines.push(`- Error: ${item.error}`);
      lines.push('');
      continue;
    }
    const data = item.audit || {};
    if (data.pageSummary) lines.push(`- Summary: ${data.pageSummary}`);
    if (Array.isArray(data.quickWins) && data.quickWins.length) {
      lines.push('- Quick wins:');
      for (const w of data.quickWins.slice(0, 5)) lines.push(`  - ${w}`);
    }
    if (Array.isArray(data.seoIssues) && data.seoIssues.length) {
      lines.push('- SEO issues:');
      for (const issue of data.seoIssues.slice(0, 5)) {
        lines.push(
          `  - [${issue.severity || 'unknown'}] ${issue.issue || 'n/a'} -> ${issue.fix || 'n/a'}`
        );
      }
    }
    lines.push('');
  }
  return lines.join('\n');
}

async function main() {
  const { input, out, limit } = parseArgs();
  const apiKey = process.env.KIMI_API_KEY;
  const baseUrl = process.env.KIMI_BASE_URL || 'https://api.moonshot.cn/v1';
  const model = process.env.KIMI_MODEL || 'kimi-k2-0711-preview';

  if (!apiKey) {
    console.error(
      'Missing KIMI_API_KEY. Set it in your shell env before running this script.'
    );
    process.exit(1);
  }

  const files = walkFiles(input).slice(0, limit);
  if (!files.length) {
    console.error(`No supported files found in: ${input}`);
    process.exit(1);
  }

  if (!fs.existsSync(out)) fs.mkdirSync(out, { recursive: true });
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const jsonPath = path.join(out, `kimi-audit-${ts}.json`);
  const mdPath = path.join(out, `kimi-audit-${ts}.md`);

  const results = [];
  for (const f of files) {
    const rel = path.relative(ROOT, f).replace(/\\/g, '/');
    const content = fs
      .readFileSync(f, 'utf8')
      .slice(0, MAX_CONTENT_CHARS);
    try {
      const audit = await auditWithKimi({
        baseUrl,
        apiKey,
        model,
        filePath: rel,
        content,
      });
      console.log(`audited: ${rel}`);
      results.push({ file: rel, audit });
    } catch (err) {
      console.log(`failed: ${rel}`);
      results.push({ file: rel, error: String(err.message || err) });
    }
  }

  fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2), 'utf8');
  fs.writeFileSync(mdPath, toMarkdown(results), 'utf8');

  console.log(`\nSaved JSON report: ${jsonPath}`);
  console.log(`Saved Markdown report: ${mdPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
