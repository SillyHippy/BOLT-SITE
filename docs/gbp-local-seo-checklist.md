# Google Business Profile — Local Pack & Off-Repo SEO Checklist

Use this in Google Business Profile (web or app). The April 2026 verified audit and the Kimi notary audit both flagged **map-pack absence** as the #1 discovery gap despite strong organic long-tail performance. The fixes below live outside the repo — execute them in GBP, citation sites, and Search Console, then check off here.

---

## 1. Categories and Services

### Primary category
- [ ] Set primary category to the single strongest revenue match. Recommended: **Process Server** (or "Legal Services" if Process Server is unavailable in your market).

### Secondary categories (add as many accurate ones as GBP allows)
- [ ] Notary Public
- [ ] Courier Service
- [ ] Mobile Notary Service (if listed)
- [ ] Legal Services
- [ ] Document Preparation Service
- [ ] Business-to-Business Service

### Custom services (add every paid service line; align names with site)
- [ ] Single-Attempt Posting (starts at $30)
- [ ] Standard Process Service (starts at $60)
- [ ] Rush Process Service (starts at $100)
- [ ] Same-Day Rush (starts at $150)
- [ ] Triple-Attempt Service (starts at $200)
- [ ] After-Hours / 2-Hour Emergency Rush (starts at $265)
- [ ] In-Office Notary (starts at $20)
- [ ] Mobile Notary (starts at $25/act + travel)
- [ ] Remote Online Notarization / RON (starts at $25/act)
- [ ] Legal Courier (standard from $60, rush from $100)
- [ ] Skip Tracing (from $50)
- [ ] Court Filing / eFiling
- [ ] Loan Signing Agent

> **Naming rule:** Use the **exact wording** from `/pricing` and `/notary` so Google's category classifier doesn't see drift between GBP and the site.

---

## 2. Service Area vs. Address

- [ ] Operating from Glenpool but selling Tulsa-metro-wide → confirm **service areas** include every county and city you want to rank for:
  - Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, Glenpool, Coweta, Catoosa, Collinsville, Skiatook, Mounds, Kiefer, Kellyville
  - Tulsa County, Creek County, Wagoner County, Rogers County, Osage County, Pawnee County
- [ ] If eligible for **service-area business** (hide street address on Maps): evaluate with operations — can reduce centroid bias for downtown Tulsa map-pack searches.
- [ ] Add "**all 77 Oklahoma counties**" language in the description so statewide queries resolve.

---

## 3. Profile Completeness

### Business description (750-char field — front-load priority terms)
> Lead sentence template:
> > "Just Legal Solutions is a licensed, bonded Oklahoma process server and mobile notary based in Glenpool, serving Tulsa County and all 77 Oklahoma counties — service starts at $30 (single-attempt) and $60 (standard), with same-day, after-hours, and 24/7 emergency tiers. Mobile notary and Remote Online Notarization (RON) starting at $20."

- [ ] Description includes: starts-at pricing, 24/7, licensed/bonded, counties served, notary + RON in the first 2 sentences.
- [ ] Description ends with a phone-CTA sentence: "Call (539) 367-6832 for a free quote."

### Photos (Kimi audit minimum — refresh quarterly)
- [ ] Logo (square, transparent or white background)
- [ ] Cover photo (Glenpool office or Tulsa County Courthouse exterior)
- [ ] **Office** — exterior + interior reception
- [ ] **Vehicle(s)** — branded if applicable; otherwise a clean shot
- [ ] **Team** — at least one face shot (Joseph + any team members) with caption
- [ ] **Sample affidavit** — fully redacted, showing court-ready format
- [ ] **Courthouse photos** — Tulsa, Broken Arrow, Sapulpa, Wagoner courthouses
- [ ] **Mobile notary in action** — discreet shot of notary kit / seal / journal
- [ ] **Service-area map** — graphic showing the 77-county coverage
- [ ] Add **geo-tagged** photos when uploaded from a phone in the field

### Attributes (check every accurate one)
- [ ] Identifies as: Veteran-owned / Family-owned / LGBTQ+ friendly (only if accurate)
- [ ] Service options: Online appointments, Onsite services, Online estimates
- [ ] Accessibility: Wheelchair-accessible entrance / parking (only if accurate)
- [ ] Planning: Appointment required (or "appointments recommended")
- [ ] Payments: Credit cards, Debit cards, Mobile payments (Apple/Google/Cash App), Checks
- [ ] Hours: 24/7 emergency available (set hours to reflect this — or note in description)

---

## 4. Engagement Signals

### Google Posts (cadence: 1-2 per week)
Rotate post types so the profile looks active:
- [ ] **Service spotlight** — "Same-day process serving in Tulsa County, starts at $150" with CTA
- [ ] **Customer wins** — "Served evasive defendant in Broken Arrow on first attempt" (no PII)
- [ ] **Education** — "What is substitute service in Oklahoma?" linking to a blog post
- [ ] **Holiday hours** — Thanksgiving, Christmas, Memorial Day, July 4, Labor Day
- [ ] **Notary** — "Mobile notary available evenings & weekends across Tulsa metro"
- [ ] **Promotion** — "25% OFF select ZIPs through April 30, 2026"

### Q&A — seed 8-12 owner-answered questions
Pre-populate so prospects see answers before competitors do:
- [ ] How much does a process server cost in Tulsa?
- [ ] How fast can you serve papers?
- [ ] Do you serve papers on weekends and holidays?
- [ ] Are you licensed and bonded in Oklahoma?
- [ ] Can you serve papers in [neighboring county]?
- [ ] Do you offer mobile notary services?
- [ ] How does Remote Online Notarization (RON) work in Oklahoma?
- [ ] What if the defendant won't open the door?
- [ ] Do you provide GPS proof of service?
- [ ] Can law firms set up a monthly billing account?
- [ ] How do I send you my documents?
- [ ] What courthouse handles Tulsa County small claims service?

### Reviews
- [ ] Reply to **every** review within 72 hours; vary wording so replies don't read as templates.
- [ ] Ask satisfied clients for reviews via the short URL: `g.page/r/<your-id>/review`
- [ ] Active reply variations should naturally include: "Tulsa County," "process serving," "mobile notary," and the city name when known — keyword-rich without being spammy.

---

## 5. NAP Consistency (Name / Address / Phone)

- [ ] Exact business name matches site footer + JSON-LD on `/contact` + `lib/pricing.ts` ancillary references.
  - Canonical name: **Just Legal Solutions**
  - Canonical phone: **(539) 367-6832**
  - Canonical address: **564 E 138th Pl, Glenpool, OK 74033**
- [ ] Fix top citations — confirm each lists the canonical NAP:
  - [ ] Yelp
  - [ ] Facebook Business
  - [ ] Bing Places
  - [ ] Apple Maps Connect
  - [ ] Better Business Bureau
  - [ ] Avvo (if attorney-adjacent listing exists)
  - [ ] Justia legal directory
  - [ ] Process Server Directory (NAPPS, ServeNow)
  - [ ] Notary directories (Notary Rotary, 123notary.com, Snapdocs)
  - [ ] Local chamber of commerce listings (Glenpool, Tulsa Regional Chamber)

---

## 6. Measurement

Track in Search Console + monthly incognito map-pack checks:
- [ ] **Map-pack rank** for: `process server tulsa`, `tulsa process server`, `mobile notary tulsa`, `notary tulsa`, `process server near me` (from a Tulsa IP)
- [ ] **Organic rank** for the same terms
- [ ] **Insights → Searches** in GBP — note the top 10 queries triggering profile views; compare month-over-month
- [ ] **Direction requests** and **website clicks** trends in GBP Insights
- [ ] **Phone calls** from the GBP listing (if call tracking enabled)

### Monthly review template
Run on the 1st of each month:
1. Pull last-30-day GBP Insights → screenshot top 10 search queries
2. Run incognito searches for the 5 priority queries from a Tulsa IP → record map-pack position
3. Compare to prior month; note any new competitors entering the pack
4. Update Q&A or Posts to address any high-volume question that appeared

---

## 7. Notary-Specific (Kimi Audit Additions)

The Kimi notary audit highlighted that notary searches are largely won in the map pack and Apple Maps:
- [ ] Add a **separate GBP secondary category** for "Notary Public" if not already present
- [ ] Create a **Notary photo album** showing seal, journal, mobile kit, and a setup at a hospital / nursing home (with permission)
- [ ] Add Notary-specific custom services with starting prices ($20 in-office, $25 mobile, $25 RON)
- [ ] Seed Notary-specific Q&A: "Do you do hospital notary?" "Do you do RON in Oklahoma?" "How much is a mobile notary in Tulsa?"
- [ ] Build out **Apple Maps Connect** listing — Apple Maps drives a meaningful share of "notary near me" voice searches that GBP doesn't catch
- [ ] Submit to **specialty notary directories** for hospital/jail/loan-signing referrals: Notary Cafe, Snapdocs, NotaryRotary

---

## 8. Cadence Summary (do these on a schedule)

| Frequency | Action |
|-----------|--------|
| Weekly | 1-2 Google Posts |
| Weekly | Reply to all new reviews |
| Monthly | Update Q&A with any new common questions |
| Monthly | Refresh photos (add 2-3 new ones, archive stale) |
| Monthly | Pull GBP Insights + map-pack rank check |
| Quarterly | Re-audit citations for NAP drift |
| Quarterly | Refresh business description with current promos / pricing |
| Annually | Full GBP profile audit against this checklist |
