# Discount Banner Management Guide

## Quick Reference: How to Disable the 30% Off Promotion

### Option 1: Turn Off Banner (RECOMMENDED - 2 minutes)

Comment out the `<LocalPromoBanner />` component in these 6 files:

1. **Homepage**: `app/(main)/page.tsx` (around line 66)
   ```tsx
   {/* <LocalPromoBanner zips={["74008", "74033", "74037"]} /> */}
   ```

2. **Contact Page**: `app/contact/page.tsx` (around line 68)
   ```tsx
   {/* <LocalPromoBanner zips={["74008", "74033", "74037"]} /> */}
   ```

3. **Pricing Page**: `app/(main)/pricing/page.tsx` (around line 153)
   ```tsx
   {/* <LocalPromoBanner zips={["74008", "74033", "74037"]} /> */}
   ```

4. **Bixby Service Area**: `app/service-areas/bixby/page.tsx` (around line 193)
   ```tsx
   {/* <LocalPromoBanner zips={["74008", "74033", "74037"]} /> */}
   ```

5. **Jenks Service Area**: `app/service-areas/jenks/page.tsx` (around line 214)
   ```tsx
   {/* <LocalPromoBanner zips={["74008", "74033", "74037"]} /> */}
   ```

6. **Glenpool Service Area**: `app/service-areas/glenpool/page.tsx` (around line 117)
   ```tsx
   {/* <LocalPromoBanner zips={["74008", "74033", "74037"]} /> */}
   ```

---

## Reverting Individual Features

### 1. Remove Sticky Scroll Behavior

**File**: `components/ui/local-promo-banner.tsx` (line 58)

**Change from:**
```tsx
<div className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-3 md:py-6 px-3 md:px-4 relative shadow-lg">
```

**Change to:**
```tsx
<div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-3 md:py-6 px-3 md:px-4 relative shadow-lg">
```

**What to remove:** `sticky top-0 z-50`

---

### 2. Remove Urgency Countdown ("41 days left!")

**File**: `components/ui/local-promo-banner.tsx`

**Step 1:** Delete the countdown calculation (lines 16-24)
```tsx
// DELETE THIS SECTION:
const calculateDaysRemaining = () => {
  const end = new Date(endDate);
  const today = new Date();
  const diffTime = end.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
};

const daysRemaining = calculateDaysRemaining();
```

**Step 2:** Remove countdown badge (lines 83-87)
```tsx
// DELETE THIS:
<span className="inline-flex items-center gap-1 bg-red-600 px-2 py-0.5 md:py-1 rounded-full text-white font-bold text-xs">
  <Clock className="h-3 w-3" />
  {daysRemaining} days left!
</span>
```

**Step 3:** Add back the original text
```tsx
<p className="text-blue-200 text-xs flex flex-wrap items-center justify-center md:justify-start gap-2">
  <span>Standard service just <strong>$42</strong> (regularly $60) • Offer ends {endDate}</span>
</p>
```

**Step 4:** Remove Clock import (line 4)
```tsx
// Change from:
import { BadgePercent, MapPin, X, Clock } from 'lucide-react';
// Change to:
import { BadgePercent, MapPin, X } from 'lucide-react';
```

---

### 3. Remove Schema Markup for Offer

**File**: `components/ui/local-promo-banner.tsx`

**Step 1:** Delete the schema object (lines 29-48)
```tsx
// DELETE THIS ENTIRE SECTION:
const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": "30% Off Process Serving",
  "description": "Limited time discount on process serving for ZIP codes 74008, 74033, and 74037",
  "price": "42.00",
  "priceCurrency": "USD",
  "priceValidUntil": endDate,
  "availability": "https://schema.org/InStock",
  "validFrom": "2025-12-20",
  "areaServed": {
    "@type": "PostalCodeRangeSpecification",
    "postalCode": zips
  },
  "seller": {
    "@type": "LocalBusiness",
    "name": "Just Legal Solutions",
    "url": "https://justlegalsolutions.org"
  }
};
```

**Step 2:** Delete the Script tag (lines 53-57)
```tsx
// DELETE THIS:
<Script
  id="offer-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
/>
```

**Step 3:** Change the return wrapper from `<>...</>` back to just the div
```tsx
// Change from:
return (
  <>
    <Script ... />
    <div className="sticky...">
      ...
    </div>
  </>
);

// Change to:
return (
  <div className="sticky...">
    ...
  </div>
);
```

**Step 4:** Remove Script import (line 6)
```tsx
// DELETE THIS LINE:
import Script from 'next/script';
```

---

### 4. Revert Meta Descriptions (Remove "30% OFF")

Update these 6 files to remove the discount language:

#### **Homepage**: `app/(main)/page.tsx` (line 24)
**Change from:**
```tsx
description: '30% OFF LIMITED TIME! Expert process serving for Tulsa, Broken Arrow, Sapulpa, Glenpool & Oklahoma. 50+ years combined experience. Process serving starts at $30, with standard, rush and same-day options available',
```

**Change to:**
```tsx
description: 'Expert process serving for Tulsa, Broken Arrow, Sapulpa, Glenpool & Oklahoma. 50+ years combined experience. Process serving starts at $30, with standard, rush and same-day options available',
```

---

#### **Contact Page**: `app/contact/page.tsx` (line 4)
**Change from:**
```tsx
description: '30% OFF for select ZIP codes! Contact Just Legal Solutions—reach our team for 24/7 process serving, legal courier, and business support in Tulsa County and across Oklahoma. Fast, secure, and trusted by law firms.',
```

**Change to:**
```tsx
description: 'Contact Just Legal Solutions—reach our team for 24/7 process serving, legal courier, and business support in Tulsa County and across Oklahoma. Fast, secure, and trusted by law firms and individuals.',
```

---

#### **Pricing Page**: `app/(main)/pricing/page.tsx` (line 10)
**Change from:**
```tsx
description: '30% OFF LIMITED TIME for ZIP 74008, 74033, 74037! Transparent process server pricing in Oklahoma starting at $30. Same-day, rush, and standard service options. No hidden fees. Licensed and bonded.',
```

**Change to:**
```tsx
description: 'Transparent process server pricing in Oklahoma starting at $30. Same-day, rush, and standard service options. No hidden fees. Licensed and bonded professionals.',
```

---

#### **Bixby Page**: `app/service-areas/bixby/page.tsx` (line 14)
**Change from:**
```tsx
description: '30% OFF for Bixby residents! Professional process server handling court documents, family law, and urgent legal delivery for neighborhoods, schools, and businesses. Fast, licensed, and reliable with same-day service.',
```

**Change to:**
```tsx
description: 'Bixby's process server—handling court documents, family law, and urgent legal delivery for neighborhoods, schools, and businesses. Fast, licensed, and reliable with same-day and after-hours service.',
```

---

#### **Jenks Page**: `app/service-areas/jenks/page.tsx` (line 14)
**Change from:**
```tsx
description: '30% OFF for Jenks residents! Process server delivering divorce papers, family law documents, and court notices across Jenks schools, neighborhoods, and businesses. Local knowledge and 24/7 service for secure, prompt delivery.',
```

**Change to:**
```tsx
description: 'Jenks process server—delivering divorce papers, family law documents, and court notices across Jenks schools, neighborhoods, and businesses. Rely on our local knowledge and 24/7 service for secure, prompt delivery.',
```

---

#### **Glenpool Page**: `app/service-areas/glenpool/page.tsx` (line 13)
**Change from:**
```tsx
description: '30% OFF for Glenpool residents! Legal document service serving families, businesses, and oil industry professionals. We cover Lake Glenpool, downtown, and all neighborhoods with fast, accurate, and locally informed process serving.',
```

**Change to:**
```tsx
description: 'Glenpool's legal document service—serving families, businesses, and oil industry professionals. We cover Lake Glenpool, downtown, and all neighborhoods with fast, accurate, and locally informed process serving.',
```

---

## Should You Remove These Features?

### ✅ **Keep These (They Help Conversions & SEO)**

1. **Sticky Scroll** - Keeps banner visible = more conversions. No negative impact.
2. **Urgency Element** - The countdown creates urgency. Very effective for conversions.
3. **Schema Markup** - Helps Google understand your promotion. Good for SEO, no downside.

### ⚠️ **Only Remove This If You Want**

4. **Meta Descriptions** - The "30% OFF" in search results attracts clicks, but if the promotion ends and you forget to update them, it could mislead customers. **RECOMMENDATION:** Remove these when the promotion ends on January 30th.

---

## Complete Removal Checklist

When promotion ends on **January 30, 2026**:

- [ ] **Banner auto-hides** - No action needed! Disappears automatically on Jan 31.
- [ ] **Meta descriptions auto-revert** - No action needed! Updates automatically on next daily deploy after Jan 30.
- [ ] Optional: Comment out `<LocalPromoBanner />` in all 6 files (only if you want to completely remove the code)
- [ ] Test the site after Feb 1 to confirm everything reverted

**Total Time:** ~0 minutes (fully automatic with daily deploys!) ✨

---

## Quick Tips

- **Banner auto-hides:** Automatically disappears after January 30, 2026 (no manual removal needed!)
- **To reactivate:** Just uncomment the `<LocalPromoBanner />` lines
- **To change dates:** Edit `endDate` in `local-promo-banner.tsx` line 12
- **To change ZIP codes:** Edit the `zips={["74008", "74033", "74037"]}` prop
- **To change discount:** Edit the banner text and pricing in the component

---

## SEO & Search Engine Indexing Timeline

### How Long Until Google Shows the Discount?

When you publish this promotion, here's the typical timeline:

**Meta Descriptions (Google Search Results)**
- **Fast sites (with daily deploys):** 1-3 days
- **Average sites:** 3-7 days
- **Slower sites:** 1-2 weeks

**Schema Markup (Rich Results)**
- **Initial indexing:** 3-7 days
- **Appearing in rich results:** 1-2 weeks
- **Full rollout:** 2-4 weeks

**AI Search Engines (ChatGPT, Perplexity, Bing AI)**
- **Bing AI/ChatGPT:** 1-2 weeks
- **Perplexity:** 3-5 days (faster crawling)
- **Google AI Overviews:** 1-3 weeks

### Speed Up Indexing

**Do these immediately after publishing:**

1. **Request Indexing in Google Search Console**
   - Go to URL Inspection tool
   - Enter each page URL with the promo
   - Click "Request Indexing"
   - Do this for all 6 pages

2. **Update Your Sitemap**
   - Ensure your sitemap is up to date
   - Submit to Google Search Console
   - Resubmit to Bing Webmaster Tools

3. **Get Fresh Backlinks**
   - Post about the promotion on social media
   - Link to your promo pages from other sites
   - Google crawls linked pages faster

4. **Increase Crawl Activity**
   - Your daily deploys help! Google notices active sites
   - Update multiple pages at once (you did this ✓)
   - More updates = more frequent crawling

**Expected Timeline for Your Site:**
- ✅ Daily deploys = Active site signal
- ✅ 6 pages updated = Multiple entry points
- ✅ Schema markup = Rich result potential

**Most realistic:** Google shows "30% OFF" in search results within **3-5 days** after requesting indexing.

---

## Need Help?

All banner code is in: `components/ui/local-promo-banner.tsx`

The banner is imported and used in these 6 pages - search for `LocalPromoBanner` to find exact locations.

---

## Future Promotions - Quick Reference

**To run a new promotion:**

1. **Update dates** in `lib/promo-utils.ts`:
   ```tsx
   export const PROMO_END_DATE = new Date('March 31, 2026'); // New end date
   ```

2. **Update banner text** in `components/ui/local-promo-banner.tsx`:
   - Change "30% OFF" to new discount
   - Update "$42" to new price
   - Update offer end date display

3. **Update meta descriptions** - The function will handle it automatically, just update the promo text in each page

4. **Update ZIP codes** (if needed):
   ```tsx
   <LocalPromoBanner zips={["74101", "74102", "74103"]} />
   ```

5. **Request indexing** in Google Search Console for all updated pages

6. **Timeline:** Expect 3-5 days for Google to show new promotion in search results

**That's it!** Banner auto-hides and descriptions auto-revert when the date passes.
