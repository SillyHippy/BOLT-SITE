# Post-deploy verification summary (4xx / broken URL work)

**Deploy:** Cloudflare Pages build `3ba4ac2` (2026-05-22) — **279** redirect rules parsed; county short slugs **live**.

## Automated checks (run locally)

```bash
npm run verify:sitemap      # Layer 1 — 538 sitemap URLs
npm run verify:redirects    # Layer 2 — county + malformed redirect sources
npm run verify:audit-export # Layer 3 — original audit export list
npm run verify:http         # all three
```

Reports:

| Layer | Output |
|-------|--------|
| 1 | [sitemap-http-verification.md](sitemap-http-verification.md) |
| 2 | [redirect-http-verification.md](redirect-http-verification.md) |
| 3 | [audit-export-verification.md](audit-export-verification.md) |

## What was fixed vs what the audit measured

| Issue type | Example | Status after deploy |
|------------|---------|---------------------|
| County slug without `-county` | `/counties/harper` | **301 → `/counties/harper-county`** (live) |
| Markdown scraper junk | `/service-areas/ada)**` | **301 via encoded rule** after next deploy (`/service-areas/ada%29%2A%2A`) — literal `*` breaks Cloudflare splat parsing |
| Wrong legacy paths | `/blog/oklahoma-process-server-faq` | **301** after next deploy (section `10c` in `_redirects`) |
| Sitemap canonical URLs | all `<loc>` entries | **200** (Layer 1) |
| Tool noise | `/cdn-cgi/l/email-protection` | **Exclude** from audits |

## Layer 4 — Re-run your SEO crawler (manual)

1. Use the **same tool** that produced the original 4xx export.
2. Apply exclusions from [seo-audit-url-rules.md](seo-audit-url-rules.md): `/cdn-cgi/*`, fragments.
3. Compare **4xx count** to the baseline (~121 URLs in [audit-urls-baseline.txt](audit-urls-baseline.txt)).
4. Expect a large drop once deploy includes sections **10a** (encoded `ada`/`lawton`) and **10c** (legacy audit paths).

## Bing / AI visibility (separate from 404 hygiene)

404 fixes help crawlers reach real pages. Rankings and AI citations also depend on:

- Content depth (city/county/service pages)
- `sitemap.xml`, `ai-sitemap.xml`, `llms.txt` (refreshed each build)
- Prebuild AI/entity files under `public/ai-search/`
- Internal links using canonical paths (markdown normalization completed)

Monitor in **Bing Webmaster Tools** / **Google Search Console** over 1–2 weeks as recrawl completes.

## Pending redeploy (committed locally)

- `_redirects` **10a:** URL-encoded `ada` / `lawton` malformed paths
- `_redirects` **10c:** legacy audit export redirects (~30 rules)

After that deploy, re-run `npm run verify:http` and your external crawler.
