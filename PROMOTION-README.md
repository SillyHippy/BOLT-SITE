# South Tulsa Process Serving Promotion

## Promotion Details
- **Discount**: 30% off standard process serving
- **Regular Price**: $60
- **Promotional Price**: $42
- **Eligible ZIP Codes**: 74008 (Bixby), 74033 (Glenpool), 74037 (Jenks)
- **Duration**: October 6 - October 20, 2025 (2 weeks)

## Implementation Summary

### Files Created/Modified

1. **Component Created**: `components/ui/local-promo-banner.tsx`
   - Clean, professional banner component
   - Displays ZIP codes prominently
   - Dismissible (X button closes it)
   - Responsive design
   - Clear call-to-action buttons

2. **Pages Updated**:
   - `/app/(main)/pricing/page.tsx` - Main pricing page
   - `/app/service-areas/bixby/page.tsx` - Bixby service area
   - `/app/service-areas/glenpool/page.tsx` - Glenpool service area
   - `/app/service-areas/jenks/page.tsx` - Jenks service area

### Banner Placement
The promotion banner appears at the top of each relevant page, immediately after the schema markup and before the main content.

### How to Remove After October 20, 2025
Simply remove or comment out this line from each of the 4 pages:
```tsx
<LocalPromoBanner zips={["74008", "74033", "74037"]} />
```

Or delete the entire component file if no longer needed:
```
components/ui/local-promo-banner.tsx
```

### Testing
To see the promotion:
1. Start your dev server: `npm run dev`
2. Visit:
   - http://localhost:3000/pricing
   - http://localhost:3000/service-areas/bixby
   - http://localhost:3000/service-areas/glenpool
   - http://localhost:3000/service-areas/jenks

The blue banner should appear at the top of each page with:
- "Limited Time: 30% Off Process Serving"
- ZIP codes listed
- Price information ($42 instead of $60)
- End date (October 20, 2025)
- "Book Service Now" and "View Pricing" buttons
