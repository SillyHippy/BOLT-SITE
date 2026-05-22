# SEO crawler / audit URL handling

Companion to the 4xx triage plan: classify tool output before chasing “broken links,” and reuse these repo-maintained safeguards.

## Source of truth

- **Canonical URL list:** [`public/sitemap.xml`](/public/sitemap.xml) `<loc>` entries (regenerated via `npm run postbuild` / `scripts/generate-sitemap.js`).
- **HTTP sanity check:** `npm run verify:sitemap` writes [`docs/sitemap-http-verification.md`](/docs/sitemap-http-verification.md). Use this—not a third-party crawl export—as the authoritative pass/fail sweep for URLs you actually emit.

## Exclusions / expected non-200

| Pattern | Typical behavior | Action |
|---------|-----------------|--------|
| `/cdn-cgi/l/email-protection` | Cloudflare obfuscation endpoint; bots often see **403/404** vs browsers | Exclude from crawl or treat as informational only |
| `robots.txt` `Disallow` paths still served when requested directly | Policies block good bots indexing, not browsing | HEAD/GET can still **200**; mismatches with crawler settings are tooling noise |

## Normalize URL lists before asserting 4xx

1. **Strip markdown junk** — bogus paths like `/service-areas/ada)**` usually come from tools reading **Markdown source** adjacent to `- **[city](href)**` patterns (addressed sitewide by `npm run normalize:adjacent-city-md`). After deployment, malformed paths **301** to canonical (see `_redirects` section `10a`).

2. **County slug shape** — Live county pages use **`/counties/{name}-county`** (mirrors [`content/counties/*.md`](/content/counties)); bare `/counties/harper` is not canonical. **`301` rules:** section `10b` in [`public/_redirects`](/public/_redirects). Regenerate the block with `npm run generate:county-short-redirects` and merge if new counties ship (skips conflicting sources already in file).

3. **Do not strip `-county` in spreadsheets** unless you prepend it back before HTTP checks—otherwise reports show mass phantom 404s.

## Operational commands

```bash
npm run verify:sitemap
npm run generate:county-short-redirects
npm run normalize:adjacent-city-md
```

`normalize:adjacent-city-md` is idempotent; run after bulk content edits touching “Adjacent cities” style bullets.

## When a URL still fails after normalization

Probe the exact string with `curl -sI -L` (HEAD, follow redirects). If only one tool sees 403, try another User-Agent / GET vs HEAD; some edge rules differ. Persistent 404 against a `<loc>` in `sitemap.xml` is then a **real regression** worth fixing at page build or redirects.
