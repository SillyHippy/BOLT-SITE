# Just Legal Solutions - Service Area Pages Update Package

## Summary

This package contains **8 expanded and new service area pages** with detailed local content, real employer addresses, and internal linking.

### Pages Included

| File | Status | Population | County | Key Improvements |
|------|--------|------------|--------|------------------|
| `bixby/page.tsx` | **Expanded** | 30,155 | Tulsa | 10 real employer addresses, local neighborhoods, FAQ |
| `jenks/page.tsx` | **Expanded** | 26,739 | Tulsa | 12 employer addresses including Aquarium, Riverwalk Crossing |
| `broken-arrow/page.tsx` | **Expanded** | 117,911 | Tulsa | 10 employer addresses including FlightSafety, NSU-BA |
| `sapulpa/page.tsx` | **Expanded** | 21,929 | Creek | 10 employer addresses including Creek County Courthouse |
| `collinsville/page.tsx` | **Expanded** | 9,196 | Tulsa/Rogers | Dual county info, school district addresses |
| `kellyville/page.tsx` | **Expanded** | 1,168 | Creek | Highway 66 corridor employers, small town notes |
| `kiefer/page.tsx` | **NEW** | 2,187 | Creek | Bridge Crane Specialists, Kiefer Castle history |
| `mounds/page.tsx` | **NEW** | 936 | Creek | Glenn Pool oil history, QuickTrip landmark |

## What Was Fixed

### Before (Generic Pages):
- ❌ Empty employer addresses: `""`
- ❌ Generic neighborhood descriptions
- ❌ No real local landmarks
- ❌ Missing internal links
- ❌ Generic FAQs

### After (Expanded Pages):
- ✅ **Real employer addresses** with specific service notes
- ✅ **Neighborhood-specific content** (gated communities, new developments, historic districts)
- ✅ **Local landmarks** mentioned (Kiefer Castle, Oklahoma Aquarium, etc.)
- ✅ **Internal links** to all nearby service areas
- ✅ **Location-specific FAQs** addressing local service challenges

## Internal Linking Structure

Each page now links to nearby service areas:

- **Bixby** → Jenks, Glenpool, Broken Arrow, Sapulpa, Kiefer, Mounds
- **Jenks** → Bixby, Glenpool, Tulsa, Broken Arrow, Sapulpa
- **Broken Arrow** → Bixby, Jenks, Tulsa, Coweta, Catoosa
- **Sapulpa** → Tulsa, Glenpool, Kiefer, Kellyville, Bristow, Mounds, Mannford
- **Collinsville** → Owasso, Tulsa, Skiatook, Oologah
- **Kellyville** → Sapulpa, Bristow, Depew, Drumright
- **Kiefer** → Glenpool, Sapulpa, Mounds, Bixby
- **Mounds** → Kiefer, Beggs, Okmulgee, Sapulpa

## Implementation Instructions for Quinn

### 1. Backup Existing Files
```bash
cd /path/to/BOLT-SITE
cp app/service-areas/bixby/page.tsx app/service-areas/bixby/page.tsx.backup
cp app/service-areas/jenks/page.tsx app/service-areas/jenks/page.tsx.backup
# etc for all 6 existing pages
```

### 2. Copy New Files
```bash
cd /path/to/BOLT-SITE
# Copy expanded pages
cp /path/to/just-legal-updates/app/service-areas/bixby/page.tsx app/service-areas/bixby/page.tsx
cp /path/to/just-legal-updates/app/service-areas/jenks/page.tsx app/service-areas/jenks/page.tsx
cp /path/to/just-legal-updates/app/service-areas/broken-arrow/page.tsx app/service-areas/broken-arrow/page.tsx
cp /path/to/just-legal-updates/app/service-areas/sapulpa/page.tsx app/service-areas/sapulpa/page.tsx
cp /path/to/just-legal-updates/app/service-areas/collinsville/page.tsx app/service-areas/collinsville/page.tsx
cp /path/to/just-legal-updates/app/service-areas/kellyville/page.tsx app/service-areas/kellyville/page.tsx

# Create new directories and copy
mkdir -p app/service-areas/kiefer
cp /path/to/just-legal-updates/app/service-areas/kiefer/page.tsx app/service-areas/kiefer/page.tsx

mkdir -p app/service-areas/mounds
cp /path/to/just-legal-updates/app/service-areas/mounds/page.tsx app/service-areas/mounds/page.tsx
```

### 3. Add New Routes to Navigation (if needed)

If you have a service areas index page that lists all locations, add:
- Kiefer, OK
- Mounds, OK

### 4. Build and Deploy
```bash
npm run build
# or
next build
```

## Page Details

### Bixby (Expanded)
**Employers Added:**
- Bixby Public Schools Administration (4 E Breckenridge Ave)
- Bixby High School (601 S Riverview Dr)
- Saint Francis Hospital South (10109 E 91st St S)
- Bixby City Hall (2 S Main St)
- Walmart Supercenter (11407 S Memorial Dr)
- Target (11415 S Memorial Dr)
- Fleming Construction Group (14900 S Bryant Ave)
- BTC Broadband (11118 S Memorial Dr)
- Mabrey Bank (11518 S Memorial Dr)
- Easton Sod Farms (12801 S Memorial Dr)

**Neighborhoods:** Downtown, North Bixby, South Bixby/Riverfront, Southeast Bixby

### Jenks (Expanded)
**Employers Added:**
- Jenks High School & Planetarium (205 E B St)
- Jenks Middle School (301 E A St)
- Oklahoma Aquarium (300 Aquarium Dr)
- Jenks City Hall (211 E A St)
- Riverwalk Crossing (300 Riverwalk Terrace)
- Saint Francis Hospital South (10109 E 91st St S)
- Kimberly Clark Corporation (13252 S Yale Pl)
- First Oklahoma Bank (115 S Riverwalk Ter)
- Walmart Neighborhood Market (12117 S Elm St)
- The Suites at Riverwalk (300 Riverwalk Terrace)
- Jenks Southeast Elementary (12001 S Atlanta Pl)
- Jenks Northwest Elementary (11510 S Olympia Ave)

**Neighborhoods:** Downtown/The Ten District, Riverwalk/South, West Jenks, East/Southeast

### Broken Arrow (Expanded)
**Employers Added:**
- Broken Arrow Public Schools (701 S Main St)
- FlightSafety International (700 N 9th St)
- Northeastern State University - Broken Arrow (3100 E New Orleans St)
- Saint John Broken Arrow Hospital (1000 W Boise St)
- City of Broken Arrow (220 S 1st St)
- Walmart Supercenter (1313 E Hillside Dr)
- Zeeco (22151 E 91st St S)
- Oxford HealthCare (2600 E Kenosha St)
- Ascensia Diabetes Care (2214 W Detroit St)
- The Floral Shop (803 W New Orleans St)

**Neighborhoods:** Rose District/Downtown, South Broken Arrow, North BA/Washington, Southeast BA/Oakhurst

### Sapulpa (Expanded)
**Employers Added:**
- Creek County Courthouse (222 E Dewey Ave)
- Sapulpa Public Schools (630 S Mission St)
- City of Sapulpa (425 E Dewey Ave)
- Sapulpa Municipal Court (425 E Dewey Ave)
- Walmart Supercenter (1002 W Taft St)
- Hillcrest Hospital South (8801 S 101st E Ave)
- Berryhill Public Schools (3128 S 63rd W Ave)
- Tulsa Tech - Sapulpa Campus (344 W 18th St)
- Paragon Industries (3378 W Hwy 117)
- Minnetonka Lumber Company (1010 S Main St)

**Neighborhoods:** Downtown/Route 66, North Sapulpa, South Sapulpa, East/Creek Turnpike

### Collinsville (Expanded)
**Employers Added:**
- Collinsville Public Schools Administration (1109 W Center St)
- Collinsville City Hall (106 N 12th St)
- Walmart Supercenter (12901 E 96th St N)
- Collinsville High School (2200 W Broadway St)
- Wilson 6th Grade Center (1716 W Broadway)
- Collinsville Middle School (1510 W Broadway)
- Herald Lower Elementary (1616 W Quincy)
- Collinsville Upper Elementary (1512 W Quincy)
- Early Childhood Center (1110 W Center St)
- Collinsville Library (1223 W Main St)

**Note:** Collinsville spans both Tulsa County and Rogers County

### Kellyville (Expanded)
**Employers Added:**
- Kellyville Public Schools Administration (1101 W Highway 66)
- Kellyville High School (100 W Highway 66)
- Kellyville Middle School (404 W Highway 66)
- Kellyville Elementary (1114 W Highway 66)
- City of Kellyville (149 W Highway 66)
- Kellyville Municipal Court (149 W Highway 66)
- Dollar General (720 W Highway 66)
- Creek Nation Casino (100 W Highway 66)

**Note:** Historic Route 66 corridor between Sapulpa and Bristow

### Kiefer (NEW)
**Population:** 2,187
**History:** Originally called Praper, renamed December 12, 1906. Oil boom town from Glenn Pool field.

**Employers:**
- Bridge Crane Specialists (1200 W Tallahassee St)
- Kiefer Public Works (401 W Kiefer Ave)
- Kiefer Town Hall (401 W Kiefer Ave)
- QuickTrip (10601 S Highway 75)

**Landmarks:** Kiefer Castle (private residence), historic downtown, Highway 67/75 intersection

**Nearby:** Links to Glenpool, Sapulpa, Mounds, Bixby

### Mounds (NEW)
**Population:** 936
**History:** Named for nearby twin hills. Glenn Pool oil field shipping point. Peak population 1,078 in 1920.

**Employers:**
- Mounds Town Hall (Main St & Commerce St)
- Liberty Public Schools (Mounds campus, 18th St)
- QuickTrip (12911 S 161st E Ave) - **major landmark**
- BNSF Railway facility

**Landmarks:** QuickTrip on 161st (main landmark), twin hills, historic downtown

**Nearby:** Links to Kiefer, Beggs, Okmulgee, Sapulpa

## SEO Enhancements

Each page includes:
- Unique title tags with location-specific keywords
- Meta descriptions mentioning "process server [city], Oklahoma"
- OpenGraph tags for social sharing
- Canonical URLs
- LocalBusiness schema via UnifiedSchema component
- FAQ schema for FAQ sections
- BreadcrumbList schema for navigation

## Testing Checklist

- [ ] All 8 pages build without errors
- [ ] Internal links work correctly
- [ ] Google Maps embeds display properly
- [ ] Employer addresses are accurate
- [ ] Phone numbers link correctly (tel:5393676832)
- [ ] FAQ accordion works (if applicable)
- [ ] Mobile responsive design
- [ ] Metadata displays correctly in social previews

## Questions or Issues?

Contact Just Legal Solutions at (539) 367-6832 or through the main website.

---
**Generated:** April 2026
**Package Version:** 1.0
