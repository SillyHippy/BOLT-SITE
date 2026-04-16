# OKC Metro Update Package

## Summary

Complete update package for Oklahoma City metro service area pages. **7 pages total** - 1 new main hub + 6 expanded suburbs.

## Pages Included

| File | Status | Population | County | Key Features |
|------|--------|------------|--------|--------------|
| `oklahoma-city-process-server/page.tsx` | **NEW** | 697,125 | Oklahoma | Main OKC hub page with 10 real employer addresses |
| `service-areas/yukon/page.tsx` | **Expanded** | 25,529 | Canadian | 7 employers with addresses, Czech Festival angle |
| `service-areas/mustang/page.tsx` | **Expanded** | 22,192 | Canadian | 6 employers, fast-growing suburb focus |
| `service-areas/moore/page.tsx` | **Expanded** | 63,420 | Cleveland | 7 employers, Warren Theatre, Norman Regional |
| `service-areas/midwest-city/page.tsx` | **Expanded** | 58,145 | Oklahoma | Tinker AFB details, Boeing, Rose State |
| `service-areas/bethany/page.tsx` | **Expanded** | 20,429 | Oklahoma | SNU campus focus, historic 39th St |
| `service-areas/el-reno/page.tsx` | **Expanded** | 16,831 | Canadian | County seat, Fort Reno, Route 66 heritage |

## What Changed

### Before (Templated):
```tsx
{ name: 'Yukon Public Schools', address: '', industry: 'Education', notes: 'Major district employer.' }
```

### After (Real Addresses):
```tsx
{ name: 'Yukon Public Schools', address: '600 Yukon Ave, Yukon, OK 73099', industry: 'Education', notes: 'District administration and Yukon High School.' }
```

## Implementation for Quinn

### 1. Backup Existing Files
```bash
cd BOLT-SITE/app
cp service-areas/yukon/page.tsx service-areas/yukon/page.tsx.backup
cp service-areas/mustang/page.tsx service-areas/mustang/page.tsx.backup
cp service-areas/moore/page.tsx service-areas/moore/page.tsx.backup
cp service-areas/midwest-city/page.tsx service-areas/midwest-city/page.tsx.backup
cp service-areas/bethany/page.tsx service-areas/bethany/page.tsx.backup
cp service-areas/el-reno/page.tsx service-areas/el-reno/page.tsx.backup
```

### 2. Copy New Files
```bash
# From extracted package
cp okc-metro-updates/app/oklahoma-city-process-server/page.tsx ./oklahoma-city-process-server/
cp okc-metro-updates/app/service-areas/yukon/page.tsx ./service-areas/yukon/
cp okc-metro-updates/app/service-areas/mustang/page.tsx ./service-areas/mustang/
cp okc-metro-updates/app/service-areas/moore/page.tsx ./service-areas/moore/
cp okc-metro-updates/app/service-areas/midwest-city/page.tsx ./service-areas/midwest-city/
cp okc-metro-updates/app/service-areas/bethany/page.tsx ./service-areas/bethany/
cp okc-metro-updates/app/service-areas/el-reno/page.tsx ./service-areas/el-reno/
```

### 3. Create Directory for New Page
```bash
mkdir -p oklahoma-city-process-server
# Then copy the main OKC page there
```

### 4. Add Route to Navigation
Add "Oklahoma City" to your service areas index/listing page if it's not already there.

## Key Employer Addresses by Page

### Oklahoma City (Main)
- Oklahoma County Courthouse: 320 Robert S Kerr Ave
- OU Health: 825 NE 10th St
- Devon Energy: 333 W Sheridan Ave  
- Chesapeake Energy: 6100 N Western Ave
- Hobby Lobby: 7707 SW 44th St
- Paycom: 7501 W Memorial Rd
- Integris Baptist: 3300 NW Expressway
- VA Medical Center: 921 NE 13th St
- OKC Public Schools: 900 N Klein Ave

### Yukon
- Yukon Public Schools: 600 Yukon Ave
- Yukon High School: 1777 S Yukon Pkwy
- Integris Canadian Valley: 1201 N Country Club Rd
- City of Yukon: 500 W Main St
- Walmart: 1200 Garth Brooks Blvd
- Express Clydesdales: 12701 W Wilshire Blvd

### Mustang
- Mustang Public Schools: 1081 N Mustang Rd
- Mustang High School: 1001 N Mustang Rd
- City of Mustang: 1301 N Mustang Rd
- Walmart: 200 E State Highway 152
- Canadian Valley Tech: 6505 E Highway 66

### Moore
- Moore Public Schools: 300 N Eastern Ave
- City of Moore: 301 N Broadway St
- Warren Theatre: 1000 S Telephone Rd
- Walmart: 1401 S Telephone Rd
- Norman Regional Moore: 700 S Telephone Rd

### Midwest City
- Tinker AFB: 7600 1st St
- Boeing Defense: 4200 SE 10th St
- Rose State College: 6420 SE 15th St
- Mid-Del Schools: 7217 SE 15th St
- City of Midwest City: 100 E Main St
- Walmart: 7535 SE 15th St
- Reed Center: 5800 Will Rogers Rd

### Bethany
- Southern Nazarene University: 6729 E Bethany Rd
- Bethany Public Schools: 4718 N Mueller Ave
- Bethany High School: 4500 N Mueller Ave
- City of Bethany: 6710 NW 40th St
- Walmart Neighborhood Market: 7800 NW 23rd St

### El Reno
- Canadian County Courthouse: 301 N Choctaw Ave
- Redlands Community College: 1300 S Country Club Rd
- El Reno Public Schools: 300 S Choctaw Ave
- City of El Reno: 203 N Choctaw Ave
- Walmart: 2400 Country Club Rd
- Fort Reno: 7107 W Cheyenne St
- Lucky Star Casino: 7901 N U.S. 81

## Internal Linking

Each page links to nearby service areas:
- **OKC** → Yukon, Mustang, Moore, Midwest City, Bethany, Norman, Edmond
- **Yukon** → OKC, Mustang, El Reno, Bethany
- **Mustang** → OKC, Yukon, Moore, El Reno
- **Moore** → OKC, Norman, Mustang
- **Midwest City** → OKC, Tinker AFB area, Del City
- **Bethany** → OKC, Yukon, Warr Acres, Nichols Hills
- **El Reno** → Yukon, Mustang, OKC, Calumet

## SEO Features

All pages include:
- Unique metadata with location-specific keywords
- OpenGraph tags for social sharing
- Canonical URLs
- BreadcrumbList schema
- LocalBusiness schema via UnifiedSchema
- FAQ schema for FAQ sections
- Real population figures and drive times

## Testing Checklist

- [ ] All 7 pages build without errors
- [ ] Internal links work correctly
- [ ] Google Maps embeds display properly
- [ ] Phone numbers link correctly (tel:5393676832)
- [ ] Employer tables show real addresses (no empty strings)
- [ ] Mobile responsive design
- [ ] Metadata displays correctly in social previews

## Notes

- **El Reno** is Canadian County seat - all Canadian County cases file here
- **Moore** is Cleveland County - cases file in Norman
- **Midwest City** has Tinker AFB - largest single-site employer in OK
- **Bethany** has SNU - private university requiring campus coordination
- **OKC Main** page designed to match quality of existing /tulsa-process-server

---
**Generated:** April 2026
**Package:** OKC Metro Complete (7 pages)
