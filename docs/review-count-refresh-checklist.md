# Review Count Refresh Checklist (When New 2026 Reviews Are Ready)

Current temporary sitewide verified review count is set to: **156**.

Use this checklist when you are ready to provide the updated totals and source breakdown.

## What To Gather First

- [ ] New total verified review count (single source of truth).
- [ ] Breakdown by source (Google, phone, text, email, survey).
- [ ] Date the count was last verified.
- [ ] Any wording changes needed (for example: "verified reviews" phrasing).

## Update Pass (Agent Task)

- [ ] Update all `reviewCount` schema values to the new total.
- [ ] Update all user-facing "XXX+ verified reviews" text to match.
- [ ] Keep `app/reviews/page.tsx` and `app/reviews/google/page.tsx` as the primary canonical review source pages.
- [ ] Re-check homepage, process-serving, pricing, about/founder, and notary pages for consistency.
- [ ] Run lint + type-check after replacements.

## Verification Before Publish

- [ ] Confirm no stale counts remain via repo search (`156+`, `reviewCount: 156`, `reviewCount={156}`).
- [ ] Confirm schema output on key pages still validates.
- [ ] Confirm review messaging is consistent with what you can substantiate.

## Reusable Skill Prompt (for later)

Use this prompt when you are ready:

> Update the sitewide verified review count using this source-of-truth: `<NEW_COUNT>`.
> Replace old review-count text and schema values consistently across all pages.
> Prioritize review pages, homepage, pricing, process-serving, notary, and founder pages.
> Do not change unrelated numeric values (prices, employee counts, population, etc.).
> Run lint/type-check and provide a changed-files summary.
