# Just Legal Solutions — Complete SEO Fix & New Page Instructions
## For GitHub Copilot Implementation

**Date:** April 10, 2026  
**Site:** https://justlegalsolutions.org  
**Repo:** https://github.com/SillyHippy/BOLT-SITE  

---

## PART 1: NEW FILES TO ADD (30 files)

### A. 26 City Location Pages (Markdown)
Copy all `.md` files from `new-pages/seo-content/locations/` into `seo-content/locations/` in the repo.

These are consumed by the existing dynamic route at `app/service-areas/[slug]/page.tsx` via `lib/markdown-utils.ts`. No code changes needed — just drop the files in.

**Files:** ada.md, altus.md, atoka.md, bethany.md, broken-bow.md, checotah.md, chickasha.md, choctaw.md, durant.md, el-reno.md, elk-city.md, fort-sill.md, guthrie.md, guymon.md, henryetta.md, idabel.md, mcalester.md, mustang.md, okmulgee.md, pauls-valley.md, ponca-city.md, poteau.md, stilwell.md, sulphur.md, tahlequah.md, yukon.md

### B. 4 Topic Pages (TSX)
Copy each folder from `new-pages/app/` into `app/(main)/` in the repo.

- `new-pages/app/oklahoma-process-server-bond-requirements/page.tsx` → `app/(main)/oklahoma-process-server-bond-requirements/page.tsx`
- `new-pages/app/tulsa-county-divorce-process-serving/page.tsx` → `app/(main)/tulsa-county-divorce-process-serving/page.tsx`
- `new-pages/app/how-to-serve-legal-papers-oklahoma/page.tsx` → `app/(main)/how-to-serve-legal-papers-oklahoma/page.tsx`
- `new-pages/app/process-server-license-oklahoma/page.tsx` → `app/(main)/process-server-license-oklahoma/page.tsx`

These use the same pattern as existing pages like `app/(main)/subpoena-service/page.tsx`. The `(main)` layout provides Navbar/Footer — do NOT add those imports.

### C. Add New Pages to Sitemap
In `app/sitemap.ts`, add these URLs:
```
/oklahoma-process-server-bond-requirements
/tulsa-county-divorce-process-serving
/how-to-serve-legal-papers-oklahoma
/process-server-license-oklahoma
```
The 26 city pages should auto-generate from the dynamic `[slug]` route if `generateStaticParams` reads the markdown directory.

---

## PART 2: CRITICAL FIXES (Do These First)

### Fix 1: Pricing Page Cannibalization (5 pages competing)
**Problem:** 5 URLs fight for "process server pricing/cost" queries. None rank well.
**Files:** `app/(main)/oklahoma-process-server-pricing/`, `app/(main)/oklahoma-process-serving-costs-comparison/`, and their 2025 variants.
**Fix:**
- Keep `/pricing` as the ONE canonical pricing page
- In `next.config.js` or `middleware.ts`, add 301 redirects:
  - `/oklahoma-process-server-pricing` → `/pricing`
  - `/oklahoma-process-serving-costs-comparison` → `/pricing`
  - `/oklahoma-process-server-pricing-2025` → `/pricing`
  - `/oklahoma-process-serving-costs-comparison-2025` → `/pricing`
- Merge any unique content from those pages into `/pricing` before deleting them

### Fix 2: /services Redirect Conflict
**Problem:** `/services` redirects to `/pricing` but has its own metadata/canonical.
**File:** `app/(main)/services/`
**Fix:** Delete the metadata in `/services` since it just redirects. Or convert to a proper 301 redirect in next.config.js.

### Fix 3: Typo on Top Ranking Page
**Problem:** `/tulsa-process-server` meta description has "prcess" instead of "process"
**File:** `app/(main)/tulsa-process-server/page.tsx`
**Fix:** Find `prcess` → replace with `process` in the metadata description.

### Fix 4: Hash Fragment URL Indexed
**Problem:** `/#reviews` appears as separate URL in Google.
**Fix:** In `app/layout.tsx` or `next.config.js`, ensure canonical for homepage is just `https://justlegalsolutions.org/` (no hash).

### Fix 5: /resume.pdf Indexed
**Problem:** A resume PDF is indexed in Google — looks unprofessional.
**Fix:** Add to `robots.txt`: `Disallow: /resume.pdf` — or delete the file from `public/`.

---

## PART 3: HIGH PRIORITY FIXES

### Fix 6: Meta Descriptions Too Long (117 pages)
**Problem:** 117 pages have meta descriptions over 160 characters. Google truncates them.
**Fix:** In each page's `metadata` export, shorten `description` to ≤155 characters. Focus on the top-traffic pages first:
- `/tulsa-process-server` 
- `/ultimate-guide-process-serving-oklahoma`
- `/oklahoma-process-server-laws`
- `/pricing`
- `/contact`
- `/process-serving`

### Fix 7: Title Tags Too Long (14+ pages)
**Problem:** Several titles exceed 60 characters and get truncated in Google results.
**Fix:** Shorten the `title` in metadata to ≤60 characters on these key pages:
- `/ultimate-guide-process-serving-oklahoma` — shorten to "Process Serving Oklahoma | Complete Guide 2026"
- `/oklahoma-process-server-faq-2026` — shorten to "Oklahoma Process Server FAQ (2026) | Common Questions"
- `/family-law-service-guide-tulsa` — shorten to "Family Law Process Serving Tulsa | Service Guide"

### Fix 8: Year-Variant Duplicate Pages (12 pairs)
**Problem:** Pages like `/oklahoma-electronic-service-guide` and `/oklahoma-electronic-service-guide-2025` have near-identical content.
**Fix:** For each pair, 301 redirect the older/2025 version to the current version:
- `/oklahoma-electronic-service-guide-2025` → `/oklahoma-electronic-service-guide`
- `/process-server-tulsa-guide-2025` → `/process-server-tulsa-guide`
- (Apply same pattern to all 12 pairs)

### Fix 9: /seo/what-is-a-process-server — 1,197 Impressions, 0 Clicks
**Problem:** Good impressions but zero clicks. Title/description aren't compelling.
**File:** `app/(main)/seo/what-is-a-process-server/page.tsx`
**Fix:** 
- Title → "What Is a Process Server? | Role, Laws & How It Works"
- Description → "Learn what process servers do, how they work in Oklahoma, legal requirements, and when you need one. Licensed servers from $60."
- Add a clear CTA in the first paragraph.

### Fix 10: /contact — 704 Impressions, 0 Clicks
**Problem:** Contact page gets impressions but no clicks.
**File:** `app/(main)/contact/page.tsx`
**Fix:**
- Title → "Contact Just Legal Solutions | Tulsa Process Server (539) 367-6832"
- Description → "Get a free quote for process serving in Oklahoma. Call (539) 367-6832 or submit online. Same-day service available. Licensed & bonded."

### Fix 11: Remove From Sitemap
These pages should NOT be in the sitemap (they're redirects, drafts, or off-topic):
- `/services` (redirects to /pricing)
- `/oklahoma-process-server-pricing` (redirect to /pricing)
- `/oklahoma-process-serving-costs-comparison` (redirect to /pricing)
- `/virtual-assistant-services` (off-topic for a process server site)
- `/platform-supremacy` (not relevant)
- `/backlinks` (not relevant)
- `/resume.pdf`
- All 2025 variant URLs that redirect

---

## PART 4: MEDIUM PRIORITY FIXES

### Fix 12: Update 2025 References
**Problem:** Many non-year-specific pages still say "2025" in titles/content.
**Fix:** Global find-and-replace in page metadata and content:
- "2025" → "2026" where it refers to the current year (NOT in URLs that redirect)
- Check: page titles, meta descriptions, and H1 headings

### Fix 13: Add Canonical Tags
**Problem:** Some pages don't set explicit canonical URLs.
**Fix:** In every page's metadata, ensure `alternates.canonical` is set:
```tsx
alternates: { canonical: 'https://justlegalsolutions.org/[page-path]' },
```
Make sure ALL canonicals use `https://` (not `http://`).

### Fix 14: Blog Interlinking (Biggest Structural Issue)
**Problem:** Blog posts don't link to each other or to service pages. Each exists in isolation.
**Fix for each blog post:**
- Add a "Related Articles" section at the bottom with 3-4 links to related blog posts
- Add 2-3 contextual internal links within the body content pointing to service pages
- Key connections to make:
  - Blog posts about divorce → `/tulsa-county-divorce-process-serving` and `/family-law-service-guide-tulsa`
  - Blog posts about process serving → `/process-serving` and `/how-to-serve-legal-papers-oklahoma`
  - Blog posts about laws → `/oklahoma-process-server-laws`
  - All blog posts → relevant `/service-areas/[city]` pages

### Fix 15: /guides/attorney-guide — Zero Internal Links
**Problem:** This page exists but nothing links to it.
**Fix:** Add links to `/guides/attorney-guide` from:
- `/law-firm-services` page
- `/about` page
- At least 2 blog posts about working with attorneys

### Fix 16: Service Area Pages with Zero Clicks
**Problem:** Several service area pages rank positions 5-15 but get 0 clicks.
**Fix:** For each underperforming service area page, improve the title tag to include the city name + "Process Server" + a benefit:
- Example: "Process Server in Norman, OK | Same-Day Service from $60"

### Fix 17: Heading Hierarchy
**Problem:** Some pages jump from H1 to H3 (skipping H2), or have multiple H1 tags.
**Fix:** Audit heading structure — every page should have exactly 1 H1, followed by H2s, then H3s nested under them. Never skip levels.

---

## PART 5: LOW PRIORITY CLEANUP

### Fix 18: Remove /virtual-assistant-services
**Problem:** Off-topic page on a process serving website. Confuses Google about site focus.
**Fix:** Either delete this page entirely or noindex it. If you want to keep the service, move it to a subdomain or separate section.

### Fix 19: Noindex /platform-supremacy and /backlinks
**Problem:** These pages are getting indexed but aren't relevant to your business.
**Fix:** Add `robots: 'noindex, nofollow'` to their metadata.

### Fix 20: Remove console.log Statements
**Problem:** Found `console.log` in production code.
**Fix:** Search repo for `console.log` and remove all instances from production pages.

### Fix 21: Orphan Pages
**Problem:** Several pages exist but aren't linked from navigation or other pages.
**Fix:** Add internal links to these orphan pages from relevant parent pages:
- `/notary` — add to main navigation or footer
- `/mobile-notary` — link from `/notary`
- `/courier-services-tulsa` — add to services section

---

## PART 6: SITEMAP HTML PAGE TWEAK

### Fix 22: Rename Sitemap Page Title
**File:** The sitemap HTML page (likely `app/(main)/sitemap-page/page.tsx` or similar)
**Fix:** Change title from "Sitemap" to "All Services & Pages | Just Legal Solutions"

---

## PRIORITY ORDER (Impact Ranking)

1. **Add 30 new page files** (Part 1) — immediate new content
2. **Fix pricing cannibalization** (Fix 1) — biggest ranking blocker  
3. **Fix typo on top page** (Fix 3) — quick win, top traffic page
4. **Shorten meta descriptions** (Fix 6) — affects 117 pages
5. **Blog interlinking** (Fix 14) — biggest structural SEO issue
6. **301 redirect year-variant duplicates** (Fix 8) — 12 pairs of duplicates
7. **Fix /contact title/description** (Fix 10) — 704 impressions wasted
8. **Fix /seo/what-is-a-process-server** (Fix 9) — 1,197 impressions wasted
9. **Remove off-topic pages from index** (Fixes 18-19)
10. **Everything else** (Fixes 4, 5, 11-13, 15-17, 20-22)

---

*Generated by Viktor AI SEO Audit — April 10, 2026*
