# Kimi Local Audit Workflow

This project supports local page-quality audits using your own Kimi API key so you can reduce Cursor token usage for bulk content review.

## 1) Security first

- Do **not** hardcode API keys in source files.
- Set your key in an environment variable.
- If a key was pasted into chat or committed anywhere, rotate it first.

## 2) Configure environment

Copy values from `.env.example` into your local shell environment.

Required:

- `KIMI_API_KEY`

Optional:

- `KIMI_BASE_URL` (default: `https://api.moonshot.cn/v1`)
- `KIMI_MODEL` (default: `kimi-k2-0711-preview`)

## 3) Run audits

Audit the first 15 supported files under `app/`:

```bash
npm run audit:kimi
```

Audit a specific folder and limit file count:

```bash
npm run audit:kimi -- "app/counties" --limit 25
```

Audit one file and set custom output folder:

```bash
npm run audit:kimi -- "app/(main)/process-serving/page.tsx" --out reports/kimi
```

## 4) Output

Reports are written to:

- `reports/kimi-audit-<timestamp>.json`
- `reports/kimi-audit-<timestamp>.md`

The JSON includes structured issue lists and quick wins per page.

## 5) Typecheck behavior

- Main project typecheck now excludes `_kimi_import`:
  - `npm run typecheck`
- Draft-only checks for `_kimi_import`:
  - `npm run typecheck:drafts`
