# SEO Consistency Fix Plan

## Issues Identified from SEO Audit:

### 1. Pricing Inconsistencies
- **Problem**: Homepage states "$30-$200 range" but actual pricing starts at $60 for process serving
- **Root Cause**: $30 refers to "single serve attempt" additional service, not main pricing
- **Impact**: Misleading visitors and hurting SEO credibility

### 2. Schema Markup Issues
- **BusinessSchema.tsx**: `"priceRange": "$30-$200"` conflicts with actual service pricing
- **FAQSchema.tsx**: Contains outdated pricing ($75 same-day vs actual $150)
- **Review Count**: Inconsistent across different schema files

### 3. Missing $30 Service Explanation
- **Problem**: $30 mentioned on homepage but not clearly explained
- **Context**: $30 is for "single serve attempt" additional service option

## Fix Strategy:

### Phase 1: Align Homepage Content (CRITICAL)
1. Update homepage description to reflect actual service pricing
2. Either add explanation for $30 service or update range to reflect standard services

### Phase 2: Fix All Schema Files
1. Update BusinessSchema.tsx priceRange to "$60-$200" 
2. Fix FAQSchema.tsx pricing inconsistencies
3. Standardize review count across all schemas

### Phase 3: Add $30 Service Clarity
1. Either prominently feature $30 single-attempt service on pricing page
2. Or update homepage to clarify the range represents different service types

### Phase 4: Verification
1. Test all changes
2. Validate schema markup
3. Ensure pricing consistency across entire site

## Files to Update:
- app/(main)/page.tsx (homepage)
- components/BusinessSchema.tsx
- components/FAQSchema.tsx
- app/(main)/pricing/page.tsx (potentially add $30 service)
- Any other schema files with pricing references
