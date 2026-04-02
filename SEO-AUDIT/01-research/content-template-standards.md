# SEO Content Template Standards
## Just Legal Solutions Content Creation Guide

### Page Structure Template (1,200+ words)

```markdown
# [Primary Keyword] | [Location] | Just Legal Solutions

## H1: [Service] in [Location] - Professional & Licensed
[150-200 word introduction]
- Hook with problem statement
- Introduce Just Legal Solutions
- Mention experience/credentials
- Preview what reader will learn

## H2: What is [Service]? (100-150 words)
[Definition and overview]
- Clear, simple explanation
- When this service is needed
- Legal context in Oklahoma

## H2: Oklahoma [Service] Laws & Requirements (200-250 words)
### H3: [Statute Section]
[Detailed explanation of 12 O.S. § XXXX or relevant law]
- Actual statute requirements
- Compliance obligations
- How it affects clients

### H3: [Additional Requirements]
[Secondary legal requirements]
- Local county variations
- Timeline requirements
- Documentation needs

## H2: Our [Service] Process (150-200 words)
1. [Step 1]
2. [Step 2]
3. [Step 3]
4. [Step 4]

## H2: [Location] Coverage Area (150-200 words)
### H3: Neighborhoods We Serve
- [Neighborhood 1]
- [Neighborhood 2]
- [Neighborhood 3]

### H3: Local Landmarks & Reference Points
- [Landmark 1]
- [Landmark 2]
- Drive times to courthouses

## H2: Frequently Asked Questions (300-400 words)
### Q: [Question 1]?
**A:** [Detailed answer with 50-100 words]

### Q: [Question 2]?
**A:** [Detailed answer]

[Repeat for 4-6 FAQs]

## H2: Why Choose Just Legal Solutions? (100-150 words)
- Licensed & bonded
- [Location] experience
- [Specific credential/number]
- [Service guarantee]

## Call to Action
[Contact information reference - not detailed pricing]
```

---

### Meta Data Template

**Title Tag:**
```
[Service] [Location] | [Key Differentiator] | Just Legal Solutions
```
*Length: 50-60 characters*

**Meta Description:**
```
Professional [service] in [location] by licensed [provider]. [Key benefit]. 
[Years] experience serving [area]. [Call to action]. Call (539) 367-6832.
```
*Length: 150-160 characters*

---

### Keyword Placement Guidelines

#### Primary Keyword (Exact Match)
- H1 tag (beginning)
- First paragraph (first 100 words)
- One H2 heading
- Last paragraph
- **Density: 1-2%**

#### Secondary Keywords (LSI/Related)
- Sprinkle throughout content
- Use in H2/H3 headings
- Natural language variations
- **Density: 0.5-1%**

#### Location Keywords
- Include city name 3-5 times
- Include county name 2-3 times
- Mention neighboring cities 1-2 times
- Use "metro" and "area" variations

---

### Internal Linking Strategy

**Required Links (Include on ALL pages):**
- Link to `/` (homepage) - 1 instance
- Link to `/contact` - 1 instance
- Link to `/pricing` - 1 instance
- Link to relevant service parent page

**Recommended Links:**
- 2-3 related service pages
- 2-3 nearby location pages
- 1-2 legal guide pages
- Relevant FAQ pages

**Anchor Text Rules:**
- Mix exact match and partial match
- Use natural phrases
- Never "click here"
- Example: "Tulsa process serving services" not just "process serving"

---

### Schema Markup Requirements

Every page should include:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Just Legal Solutions",
  "image": "https://justlegalsolutions.org/logo.png",
  "@id": "https://justlegalsolutions.org",
  "url": "https://justlegalsolutions.org/[page-path]",
  "telephone": "+1-539-367-6832",
  "priceRange": "$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tulsa",
    "addressRegion": "OK",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.1547,
    "longitude": -95.9936
  },
  "openingHoursSpecification": [...],
  "sameAs": [...],
  "areaServed": {
    "@type": "City",
    "name": "[City Name]"
  }
}
```

---

### Content Quality Checklist

#### Before Publishing, Verify:

- [ ] 1,200+ words minimum
- [ ] No duplicate content from other pages
- [ ] All legal citations accurate and current
- [ ] No hallucinated statistics
- [ ] Title tag 50-60 characters
- [ ] Meta description 150-160 characters
- [ ] One H1 per page
- [ ] H2-H6 in logical hierarchy
- [ ] 3-5 internal links
- [ ] Alt text for any images mentioned
- [ ] FAQ section with 4-6 questions
- [ ] Call to action present
- [ ] No specific pricing in content
- [ ] Contact info references `/contact` or `/pricing`
- [ ] Local landmarks mentioned (location pages)
- [ ] Drive times included (location pages)
- [ ] Schema markup included in notes
- [ ] Readability score 8th grade or below
- [ ] Passive voice under 10%

---

### Readability Targets

**Flesch Reading Ease:** 60-70 (8th-9th grade)  
**Sentence Length:** Average under 20 words  
**Paragraph Length:** 3-5 sentences maximum  
**Subheadings:** Every 300-400 words  
**Bullet Points:** Use for lists of 3+ items

---

### Voice & Tone Guidelines

**Professional but Accessible:**
- Write like you're explaining to a client, not a judge
- Use contractions (we're, don't, can't)
- Active voice preferred
- Second person ("you", "your")

**Trust-Building Language:**
- "Licensed and bonded"
- "Years of experience"
- "Proven track record"
- "Professional team"

**Avoid:**
- Legal jargon without explanation
- Overly technical terms
- Promising specific outcomes
- Pricing discussions (refer to /pricing)
- Guarantees of service results

---

### Legal Citation Format

**Oklahoma Statutes:**
```
Under 12 O.S. § 2004, service of process must be completed within 180 days.
```

**Court References:**
```
The Tulsa County District Court requires...
```

**Disclaimer (Include on legal guide pages):**
```
*This information is for educational purposes only and does not constitute legal advice. 
Consult an Oklahoma attorney for specific legal questions.*
```

---

### Image Optimization Template

If images are referenced in content:

**Alt Text:**
```
[Service] in [Location] - Just Legal Solutions professional team
```

**File Name:**
```
just-legal-solutions-[service]-[location].webp
```

**Notes:**
- Mention images should be WebP format
- Max width: 1200px
- Lazy loading enabled

---

### File Naming Convention

**Content Files:**
```
[service-type]-[topic]-[location].md

Examples:
process-serving-12-os-2004-guide.md
mobile-notary-tulsa-laws.md
legal-courier-creek-county.md
wedding-officiant-requirements.md
```

**Location Pages:**
```
[city]-[service].md

Examples:
tulsa-process-server.md
broken-arrow-process-server.md
sapulpa-process-server.md
```

---

*Use this template for all content creation to ensure consistency and SEO optimization.*
