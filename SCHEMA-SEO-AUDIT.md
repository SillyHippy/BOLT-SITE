# SCHEMA & SEO AUDIT — Just Legal Solutions

**Generated:** April 5, 2026  
**Last Updated:** April 6, 2026  
**Status:** All critical/high items RESOLVED. Statute citations VERIFIED & corrected. 0 build errors, 201/201 pages passing.

---

## TABLE OF CONTENTS

1. [RESOLVED: Duplicate Schemas (14 pages)](#1-resolved-duplicate-schemas)
2. [RESOLVED: UnifiedSchema Defaults Fix](#2-resolved-unifiedschema-defaults-fix)
3. [RESOLVED: FAQs Added to 11 Location Pages](#3-resolved-faqs-added-to-11-location-pages)
4. [MEDIUM: Pages Missing Schema Entirely](#4-medium-pages-missing-schema-entirely)
5. [Additional Schema Opportunities](#5-additional-schema-opportunities)
6. [AI CITATION & FEATURED SNIPPET STRATEGY](#6-ai-citation--featured-snippet-strategy)
7. [GOOGLE #1 RANKING PLAYBOOK — Process Serving & Notary](#7-google-1-ranking-playbook)
8. [CONTENT AUTHORITY GAPS TO FILL](#8-content-authority-gaps-to-fill)
9. [TECHNICAL SEO CHECKLIST](#9-technical-seo-checklist)
10. [RESOLVED: Statute Citation Verification & Correction](#10-resolved-statute-citation-verification--correction)
11. [RESOLVED: AI Meta Tags (ai-summary / ai-key-facts)](#11-resolved-ai-meta-tags)

---

## 1. RESOLVED: Duplicate Schemas

✅ **14 pages cleaned** — all inline `<Script>` / `<script>` / `<JsonLd>` blocks that duplicated UnifiedSchema output have been removed. 13 unused `Script` imports also cleaned.

Pages cleaned:
- `courier-services`, `eviction-notice-service`, `same-day-process-server`, `skip-tracing`, `subpoena-service` (inline FAQPage)
- `can-process-server-serve-on-sunday`, `how-long-does-process-serving-take`, `how-much-does-process-server-cost` (inline FAQPage)
- `blog/understanding-the-affidavit-of-service`, `blog/how-to-serve-eviction-notices-in-oklahoma` (LegalService + FAQPage)
- `courier-services-tulsa` (LegalService), `urgent-process-server` (LocalBusiness + FAQPage)
- `tulsa-process-server` (LocalBusiness + FAQPage), `process-serving` (FAQPage)

---

## 2. RESOLVED: UnifiedSchema Defaults Fix

✅ `ratingValue` default changed from `5.0` → `4.9` (2 locations in UnifiedSchema.tsx)  
✅ `reviewCount` fallback changed from `157` → `156`  
✅ `notary/joseph/page.tsx` ratingValue changed from `"5.0"` → `"4.9"`

---

## 3. RESOLVED: FAQs Added to 11 Location Pages

✅ All 11 `seo-content/locations/*.md` files now have 6-8 location-specific FAQs in `### Question?` format. No pricing, no addresses. FAQs are tailored to each city's unique characteristics (military bases, universities, tribal land, rural areas, industrial zones).

---

## 4. MEDIUM: Pages Missing Schema Entirely

These pages have NO JSON-LD structured data at all. Most are utility/internal pages that don't need indexing, but a few could benefit from basic schema.

### Should Add Schema:

| Page | URL | Recommended Action |
|------|-----|--------------------|
| `app/leave-review/page.tsx` | `/leave-review` | Add `UnifiedSchema` with `pageType="generic"`, basic breadcrumbs |
| `app/pdf-tools/page.tsx` | `/pdf-tools` | Add `UnifiedSchema` with `pageType="generic"`, `SoftwareApplication` schema consideration |
| `app/platform-supremacy/page.tsx` | `/platform-supremacy` | Add `UnifiedSchema` with `pageType="generic"` |

### Can Skip (utility/noindex pages):

| Page | URL | Why Skip |
|------|-----|----------|
| `app/reviews/survey/page.tsx` | `/reviews/survey` | Has `robots: {index: false}` |
| `app/security-policy/page.tsx` | `/security-policy` | Has `robots: {index: false}` |
| `app/reviews/phone/page.tsx` | `/reviews/phone` | Review verification — internal |
| `app/reviews/text/page.tsx` | `/reviews/text` | Review verification — internal |
| seo-dashboard, viewer, field-sheet | Internal tools | Not public-facing content |
| Marker pages | SEO testing | Not real content pages |

---

## 5. Additional Schema Opportunities

### 5A. HowTo Schema

Pages with step-by-step processes could earn HowTo rich results:

- `what-to-bring` — "How to Prepare for a Notary Appointment"
- `guides/attorney-guide` — "How to Hire a Process Server in Oklahoma"
- `how-long-does-process-serving-take` — "How the Process Serving Timeline Works"

### 5B. ItemList Schema for Index Pages

- `guides/page.tsx` — List of guides with URLs/titles/descriptions
- `service-areas/page.tsx` — List of all service area cities

### 5C. Speakable Schema for Voice Search

- `tulsa-process-server` — main service description, pricing
- Homepage — business description, CTA

### 5D. Review Schema with Real Testimonials

Several pages display customer testimonials (wedding-officiant has 3) that could be marked up as individual Review schemas.

---

## 6. AI CITATION & FEATURED SNIPPET STRATEGY

AI systems (ChatGPT, Gemini, Perplexity, Copilot) and Google Featured Snippets both pull from pages that present information in a structured, authoritative, citable format. Here is what to do:

### 6A. Write "Definition-First" Paragraphs

AI citation engines look for direct answers in the first 1-2 sentences of a section. Every key page should open with a clear factual definition, not a marketing pitch.

**Example pattern for process serving pages:**
> "A process server is a licensed individual authorized under Oklahoma statute 12 O.S. § 158.1 to deliver legal documents to parties in a lawsuit, ensuring due process is satisfied."

This pattern should appear on: `process-serving`, `tulsa-process-server`, `how-much-does-process-server-cost`, `how-long-does-process-serving-take`, all guide pages.

### 6B. Use "What Is" / "How Does" H2 Headings

AI systems match questions to headings. Pages should have H2s like:
- "What Is Process Serving in Oklahoma?"
- "What Does a Notary Public Do?"
- "How Does Service of Process Work Under Oklahoma Law?"
- "What Is an Affidavit of Service?"

These match the exact queries people type into AI chatbots and voice search.

### 6C. Add Statute Citation Boxes

Pages that cite Oklahoma statutes (12 O.S. § 2004, 12 O.S. § 158.1, 49 O.S. § 113) are more likely to be cited by AI because they demonstrate authoritative legal knowledge. The site already does this on several pages — ensure ALL process serving and notary pages cite the governing statute.

### 6D. Add "Quick Answer" Summary Boxes

Add a visually distinct summary box at the top of long-form articles with the key answer in 2-3 sentences. These get pulled by Google Featured Snippets and AI answers. Pattern:

```
<div class="quick-answer">
  <strong>Quick Answer:</strong> A process server in Oklahoma costs $30-$265 depending on speed...
</div>
```

### 6E. Comparison Tables Beat Prose

AI systems and Featured Snippets strongly prefer tables for comparison queries. Current pages that should have comparison tables:
- `how-much-does-process-server-cost` → Process Server vs. Sheriff vs. DIY (already has this — good)
- `mobile-notary-vs-bank` → Mobile Notary vs. Bank Notary comparison
- `how-long-does-process-serving-take` → Timeline by service method

### 6F. Author / E-E-A-T Signals

Google and AI systems weight authorship. Consider:
- Adding an author bio section on blog articles and guides ("Written by [name], licensed Oklahoma process server since [year]")
- Linking to `notary/joseph` page or a team page from articles
- The fact that the company has an established notary strengthens E-E-A-T — mention "team includes a commissioned Oklahoma notary public" on notary pages

---

## 7. GOOGLE #1 RANKING PLAYBOOK

### 7A. Process Serving — Target Keywords to Own

**Primary (highest volume):**
- "process server Oklahoma" / "Oklahoma process server"
- "process server Tulsa" / "Tulsa process server"
- "process server near me" (local pack)
- "how to serve someone papers in Oklahoma"
- "process serving cost Oklahoma"

**Long-tail (lower competition, higher conversion):**
- "same day process server Oklahoma"
- "emergency process server Tulsa"
- "serve eviction notice Oklahoma"
- "subpoena service Oklahoma"
- "skip tracing Oklahoma"
- "process server Broken Arrow" / "process server Glenpool"
- "can a process server serve on Sunday"
- "what happens if you refuse to be served"

**Action items:**
1. Ensure each primary keyword has a dedicated, optimized page (most already exist)
2. Internal link from every service page back to `process-serving` (hub page) and from `process-serving` to each spoke
3. Every page's H1 contains the exact target keyword
4. Meta descriptions include the keyword + a differentiator + CTA phone number

### 7B. Notary Services — Target Keywords to Own

**Primary:**
- "mobile notary Oklahoma" / "Oklahoma mobile notary"
- "mobile notary Tulsa" / "Tulsa mobile notary"
- "notary near me" (local pack)
- "mobile notary near me"
- "hospital notary Oklahoma"
- "apostille service Oklahoma"

**Long-tail:**
- "24 hour notary Tulsa"
- "mobile notary Glenpool"
- "what to bring to notary appointment Oklahoma"
- "mobile notary vs bank notary"
- "wedding officiant Tulsa"
- "notary for power of attorney Oklahoma"
- "notary for real estate closing Oklahoma"

**Key differentiators to emphasize:**
- Company has an established, experienced notary on the team (this is an E-E-A-T signal)
- 24/7 mobile availability — meets clients at their location
- Hospital and care facility notary services (emotional, high-need niche)
- Apostille expertise (specialized, low competition)

### 7C. Local SEO / Google Business Profile Alignment

Every service area page should reinforce local signals:
- City name in H1, title tag, meta description, URL slug
- County name mentioned within first 100 words
- Nearby landmarks, neighborhoods, or courthouse addresses referenced naturally
- NAP (Name, Address, Phone) consistent: "Just Legal Solutions, Glenpool, OK, (539) 367-6832"
- Service area pages should link to the Google Business Profile review page

### 7D. Internal Linking Architecture (Hub-and-Spoke)

Build topical authority by connecting related pages:

**Process Serving Hub:** `/process-serving`
- Spokes: `/same-day-process-server`, `/urgent-process-server`, `/eviction-notice-service`, `/subpoena-service`, `/skip-tracing`, `/courier-services`, `/gps-tracked-process-serving`
- Every spoke links back to hub. Hub links to every spoke.

**Notary Hub:** `/notary` or `/mobile-notary`
- Spokes: `/hospital-notary`, `/apostille`, `/wedding-officiant`, `/notary-faqs`, `/notary-laws`, `/what-to-bring`, `/mobile-notary-vs-bank`

**Guides Hub:** `/guides`
- Spokes: all guide pages, blog articles, FAQ articles

### 7E. Content Freshness Signals

Google rewards regularly updated content:
- Every key page already has "Last updated: [date]" — keep these current
- Update pricing, statute references, and county-specific info quarterly
- Blog posts should include `datePublished` and `dateModified` in schema (UnifiedSchema already does this for article pages)

---

## 8. CONTENT AUTHORITY GAPS TO FILL

These are pages/topics the site does NOT yet have that competitors likely rank for. Creating these establishes topical completeness and signals authority to Google and AI systems.

### 8A. Process Serving Content Gaps

| Topic | Suggested URL | Why It Matters |
| ----- | ------------- | -------------- |
| "Types of Service of Process in Oklahoma" | `/types-of-service-process-oklahoma` | Defines personal, substitute, service by publication, service by mail. Foundational reference page. |
| "How to Become a Process Server in Oklahoma" | `/how-to-become-process-server-oklahoma` | Massive search volume. Builds authority even if not a direct customer query. |
| "Oklahoma Process Server Bond Requirements" | `/oklahoma-process-server-bond` | Niche authority topic. Citable by AI when explaining OK licensing. |
| "Serving a Business or Corporation in Oklahoma" | `/serve-business-corporation-oklahoma` | Different rules (registered agent, Secretary of State). High attorney interest. |
| "Out-of-State Service of Process from Oklahoma" | `/out-of-state-service-oklahoma` | Long-arm statute queries. Attorneys search this frequently. |

### 8B. Notary Content Gaps

| Topic | Suggested URL | Why It Matters |
| ----- | ------------- | -------------- |
| "Oklahoma Notary Laws Explained" | `/oklahoma-notary-laws` | (may already exist) Comprehensive reference, AI citation magnet |
| "Remote Online Notarization (RON) Oklahoma" | `/remote-online-notarization-oklahoma` | Growing trend. Position as early authority. |
| "Notary for Real Estate Closings Oklahoma" | `/real-estate-notary-oklahoma` | High-value service, high conversion intent |
| "Power of Attorney Notarization Oklahoma" | `/power-of-attorney-notary-oklahoma` | Common need. Parents, military, estate planning. |
| "What Documents Need to Be Notarized in Oklahoma?" | `/documents-that-need-notarized-oklahoma` | Frequently asked. AI citation-friendly. |

### 8C. Combined Authority Content

| Topic | Suggested URL | Why It Matters |
| ----- | ------------- | -------------- |
| "Legal Services Glossary: Oklahoma Process Serving & Notary Terms" | `/legal-glossary` | AI systems love glossaries — they quote definitions |
| "Just Legal Solutions: About Our Team" | `/about` or `/our-team` | E-E-A-T: shows real people, credentials, experience |

---

## 9. TECHNICAL SEO CHECKLIST

### Already in Place (Verified)

- [x] JSON-LD schemas on all 201 pages via UnifiedSchema
- [x] FAQPage schema on service and location pages
- [x] Organization/LocalBusiness/ProfessionalService schema
- [x] BreadcrumbList schema on all pages
- [x] Aggregate ratings (4.9/5, 156 reviews) consistent
- [x] `robots.txt` exists
- [x] `sitemap.xml` generation
- [x] Static export for Cloudflare Pages (fast TTFB)
- [x] Meta titles and descriptions on all pages
- [x] Open Graph tags for social sharing
- [x] "Last updated" dates on content pages

### Should Verify / Add

- [ ] **Canonical URLs** — every page should have `<link rel="canonical">` to prevent duplicate content issues
- [ ] **Image alt text** — all `<Image>` components should have descriptive alt text including target keywords
- [ ] **Core Web Vitals** — run Lighthouse on key pages to ensure good LCP, CLS, INP scores
- [ ] **Mobile responsiveness** — verify all pages render well on mobile (Google uses mobile-first indexing)
- [ ] **Internal linking audit** — ensure no orphan pages (pages with 0 internal links pointing to them)
- [ ] **404 monitoring** — check for broken internal links
- [ ] **Google Search Console** — submit sitemap, monitor indexing, check for crawl errors
- [ ] **Google Business Profile** — ensure NAP matches site exactly, post weekly updates, respond to all reviews
- [ ] **Schema validation** — paste key page URLs into Google Rich Results Test to verify schema renders correctly
- [ ] **Page speed** — Cloudflare static export should be fast, but verify images are optimized (WebP, proper sizing)

---

## 10. RESOLVED: Statute Citation Verification & Correction

✅ **Every Oklahoma statute citation on the site verified against Justia (law.justia.com) — 16 corrections applied across 6 files.**

### Critical Bug Found & Fixed

**`49 O.S. §§ 101-109` were ALL REPEALED** by Laws 1985, c. 131, § 12. The site had 15 references citing `§ 101 et seq.` across mobile-notary, hospital-notary, notary-laws, and notary pages — all pointing to dead law.

**`49 O.S. § 115` was cited for notary fee caps on the pricing page** — but § 115 actually governs "Notarial acts performed in another state," NOT fees.

### Corrections Applied

| File | Old Citation | Corrected To | Reason |
| --- | --- | --- | --- |
| `pricing/page.tsx` | `49 O.S. § 115` | `49 O.S. § 5` (traditional) / `§ 209` (RON) | § 115 = other-state acts, not fees |
| `mobile-notary/page.tsx` (7 fixes) | `49 O.S. § 101 et seq.` | `§ 111 et seq.`, `§ 201 et seq.`, `§ 113`, `§ 5`, `§ 209` | §§ 101-109 repealed since 1985 |
| `hospital-notary/page.tsx` (3 fixes) | `49 O.S. § 101 et seq.` | `§ 111 et seq.` | §§ 101-109 repealed since 1985 |
| `notary-laws/page.tsx` (4 fixes) | `§ 101 et seq.`, `§ 102` | `§ 2`, `§ 1 & § 1.1`, added `§ 209`, `§ 201 et seq.` | §§ 101-109 repealed; § 102 doesn't exist |
| `notary/page.tsx` (2 fixes) | `49 O.S. § 101 et seq.` | `§ 2` (bond), `§ 111 et seq.` (laws link) | §§ 101-109 repealed since 1985 |

### Verified Statute Reference Table

| Statute | Verified Content | Source |
| --- | --- | --- |
| **49 O.S. § 1** | Notary appointment: 18+, US citizen, OK resident/employed, felony bars, 4-yr commission | Justia ✅ |
| **49 O.S. § 1.1** | Application requirements: name, address, 18+, read/write English, no felony | Justia ✅ |
| **49 O.S. § 2** | Oath, $10,000 bond, seal, $25 filing fee | Justia ✅ |
| **49 O.S. § 5** | Traditional notary: $5 max per act, absentee ballot affidavits free | Justia ✅ |
| **49 O.S. §§ 101-109** | **ALL REPEALED** by Laws 1985, c. 131, § 12 | Justia ✅ |
| **49 O.S. § 111** | Short title — Revised Uniform Law on Notarial Acts | Justia ✅ |
| **49 O.S. § 113** | Notarial acts: acknowledgment, verification, identity determination | Justia ✅ |
| **49 O.S. § 115** | Notarial acts performed in ANOTHER STATE (not fees!) | Justia ✅ |
| **49 O.S. § 201 et seq.** | Remote Online Notary Act (RON) — effective Jan 1, 2020 | Justia ✅ |
| **49 O.S. § 209** | RON fee: $25 max per act | Justia ✅ |
| **12 O.S. § 2004** | Process service: personal, substitute, publication, 180-day deadline | Justia ✅ |
| **12 O.S. § 158.1** | Private process server licensing: 18+, $5,000 bond, $150 initial fee | Justia ✅ |
| **41 O.S. § 111** | Termination of tenancy: 30-day notice for month-to-month | Justia ✅ |
| **41 O.S. § 131** | Delinquent rent: 5-day written notice to pay or quit | Justia ✅ |
| **41 O.S. § 132** | Tenant noncompliance: 15-day notice with 10-day cure period | Justia ✅ |

---

## 11. RESOLVED: AI Meta Tags (ai-summary / ai-key-facts)

✅ **4 pages updated with missing AI meta tags for citation engine optimization.**

| Page | Added |
| --- | --- |
| `hospital-notary/page.tsx` | ai-summary + ai-key-facts |
| `mobile-notary/page.tsx` | ai-summary + ai-key-facts |
| `apostille/page.tsx` | ai-summary + ai-key-facts |
| `how-long-does-process-serving-take/page.tsx` | ai-key-facts (already had ai-summary) |

---

## IMPLEMENTATION PRIORITY (Remaining Items)

1. **Sections 6A-6F** — Add definition-first paragraphs, "What Is" headings, quick answer boxes to top 10 pages
2. **Section 7D** — Audit internal links, ensure hub-and-spoke architecture
3. **Section 8A-8B** — Create 3-5 new content gap pages (start with "How to Become a Process Server" and "Types of Service of Process")
4. **Section 9** — Run technical checklist items
5. **Section 5** — Add HowTo/ItemList schemas where applicable
