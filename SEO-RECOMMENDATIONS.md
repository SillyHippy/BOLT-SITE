Searched for files matching **/schema*.json, no matches

Searched for files matching **/blog/**, no matches

Here is a comprehensive list of all relevant code and configuration files in your workspace that pertain to your request for a thorough review of SEO, metadata, content automation, and workflow improvements. These files are directly related to feed generation, schema integration, service coverage, automation, validation, and error handling for your Next.js/static site:

1. Feed Generation & Automation
Feed Files:
public/feed.xml
public/feed.json
Feed Generation Scripts:
scripts/generate-feeds.js
.github/scripts/build-feed.js
GitHub Actions for Feed Generation:
.github/workflows/generate-dynamic-feeds.yml
.github/workflows/dynamic-content-feed.yml
2. Local Business Schema Integration
Schema File:
public/local-business-schema.json
Schema Automation/Validation Scripts:
scripts/update-business-schema.js
scripts/schema-markup-domination.js
scripts/validate-schema.js
GitHub Actions for Schema:
.github/workflows/schema-validation.yml
.github/workflows/schema-markup-domination.yml
3. Service Coverage in Content & SEO Schema
Content Files (Markdown/Blog):
content/welcome.md (contains service area/city coverage)
blog-posts/*.md (multiple files for Oklahoma cities/towns/services)
SEO/Schema Scripts:
scripts/local-seo-domination.js
scripts/enhanced-city-automation.js
scripts/missing-cities-automation.js
App Pages for Service Areas:
app/(main)/seo/* (pages for various cities/towns)
app/(main)/tulsa-process-server/page.tsx
app/(main)/seo-dashboard/page.tsx
app/(main)/faq/page.tsx
4. Continuous Automation (GitHub Actions)
Feed, Sitemap, Schema, Pre-deploy Checks:
.github/workflows/generate-dynamic-feeds.yml
.github/workflows/dynamic-content-feed.yml
.github/workflows/schema-validation.yml
.github/workflows/schema-markup-domination.yml
.github/workflows/deploy.yml
.github/workflows/auto-content-freshness.yml
.github/workflows/content-freshness.yml
.github/workflows/content-velocity-automation.yml
.github/workflows/safe-seo-automation.yml
.github/workflows/nextjs.yml
.github/workflows/emergency-seo-cleanup.yml
.github/workflows/emergency-ranking-acceleration.yml
.github/workflows/hourly-indexnow-push.yml
.github/workflows/local-seo-domination.yml
.github/workflows/local-events-automation.yml
.github/workflows/faq-schema-domination.yml
.github/workflows/voice-search-domination.yml
.github/workflows/voice-bulletproof.yml
5. Sitemap & Freshness Automation
Sitemap Files:
public/sitemap.xml
sitemap-status.txt
Sitemap Scripts:
scripts/generate-sitemap.js
scripts/update-sitemap.js
scripts/update-sitemap.ps1
scripts/natural-sitemap-updater.js
App Sitemap Page:
app/(main)/sitemap/page.tsx
6. Next.js & Deployment Configs
Next.js Config:
next.config.js
Cloudflare/Static Hosting Docs:
CLOUDFLARE-PAGES-OPTIMIZATION.md
DEPLOYMENT-READY-CHECKLIST.md
FINAL-TESTING-COMPLETE.md
Deployment Status:
deployment-status.json
7. Error Handling, Maintenance, and Documentation
Scripts for Error Handling:
scripts/validate-schema.js
scripts/safe-seo-protocol.js
scripts/test-advanced-seo-automations.js
README & Docs:
README.md
README-SEO-AUTOMATION.md
GITHUB-ACTIONS-USAGE.md
SEO-AUDIT-FIXES.md
INFRASTRUCTURE-AUDIT-REPORT.md
PERFORMANCE.md
8. Additional SEO, FAQ, Voice/AI Discoverability
FAQ/HowTo Schema:
scripts/update-faq-content.js
.github/workflows/faq-schema-domination.yml
app/(main)/faq/page.tsx
Voice/AI Discoverability:
scripts/voice-search-optimization.js
.github/workflows/voice-search-domination.yml
.github/workflows/voice-bulletproof.yml
voice-search-content.md
app/voice-search-marker/page.tsx
app/local-voice-content.js
Next Steps for Review:

Examine the above files for:
Feed generation logic and automation triggers.
Schema content, registration (server/client), and discoverability.
Service area coverage in both schema and content.
Workflow YAMLs for automation, error handling, and edge cases.
Static hosting compatibility and freshness validation.
Error handling robustness and documentation clarity.
If you need code-level feedback or step-by-step edits, specify which files/scripts/workflows you want to see in detail.

Here’s a detailed review and recommendations based on your codebase and content:

1. Current Implementation Review
Feed Generation (feed.xml and feed.json)
Scripts: You have generate-feeds.js that scans the content folder for markdown files and generates feeds in public.
Automation: No direct evidence of a GitHub Action or workflow YAML automating this on commit/push. If not present, add a workflow to run this script on content changes.
Feed Content: Your feed.json only lists the welcome page. Blog posts in blog-posts are not indexed. Update the script to include all markdown posts from both content and blog-posts.
Local Business Schema (local-business-schema.json)
File: Exists in public and contains basic business info.
Coverage: Only includes business name, image, URL, and phone. No explicit service areas, address, geo, or county/city coverage.
Registration: No evidence of server-side or client-side injection (e.g., <script type="application/ld+json"> in HTML/JSX). For best SEO, inject this schema in your main layout or homepage.
Service Coverage Expansion
Content: Your markdown and blog posts cover many cities, but the schema does not reflect this. Expand local-business-schema.json to include areaServed, address, and geo properties for all Oklahoma cities/counties you serve.
Continuous Automation (GitHub Actions)
Scripts: Many scripts for feeds, sitemaps, schema, etc.
Workflows: No workflow YAMLs shown. If missing, add workflows to automate:
Feed generation
Sitemap/schema rebuilds
Pre-deploy checks (lint, test, build)
Edge cases (e.g., only run on content/schema changes)
Validation for Static Hosting (Cloudflare Pages)
Static Output: Feeds and schema are in public, which is good for static hosting.
Freshness: If automation is not triggered on every relevant change, old content may persist. Ensure workflows/scripts run on every content/schema update.
Error Handling
Scripts: Most scripts lack robust error handling/logging. Add try/catch and meaningful error messages, especially for file I/O and network operations.
2. Blind Spots & Improvements
Local SEO, FAQ/HowTo Schema, Voice/AI Discoverability
FAQ/HowTo Schema: No evidence of FAQ or HowTo schema. Add a script or manual content for FAQ markup (JSON-LD) and inject into relevant pages.
Voice/AI: You have voice-search-content.md and a script for voice search optimization, but no schema for voice assistants (e.g., Speakable schema). Add this for key pages.
Citation/Authority: Consider adding sameAs links in your schema to business profiles, social media, and legal directories.
Feed Freshness, Code-Splitting, Workflow Timing
Feed Freshness: Ensure feeds are rebuilt on every content change. Use timestamps in feeds for freshness.
Code-Splitting: No direct evidence, but for Next.js, ensure dynamic imports and minimal bundle size for performance.
Workflow Timing: Stagger or parallelize jobs to avoid bottlenecks. Use cache for dependencies.
Richer Local Search, Citation, Voice Assistant Support
Schema: Expand with areaServed, geo, address, sameAs, aggregateRating, and review for richer results.
Voice Assistant: Add Speakable schema and optimize content for common voice queries.
3. Files/Scripts/Configs for Improvement
Error Handling & Maintenance
Scripts: Add error handling to all scripts. Example:
try {
  // ...existing code...
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
README: Expand with automation instructions, workflow triggers, and troubleshooting.
Workflow Docs: Document each workflow, what triggers it, and expected outputs.
Next-Level Authority, Performance, AI Optimization
Example: Expanded LocalBusiness Schema
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Just Legal Solutions",
  "image": "https://justlegalsolutions.org/logo.png",
  "@id": "https://justlegalsolutions.org/",
  "url": "https://justlegalsolutions.org/",
  "telephone": "(539) 367-6832",
  "priceRange": "$35-$150",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "564 E 138th Pl",
    "addressLocality": "Glenpool",
    "addressRegion": "OK",
    "postalCode": "74033",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.9556,
    "longitude": -96.0086
  },
  "areaServed": [
    "Tulsa County", "Creek County", "Wagoner County", "Rogers County", "Osage County", "Collinsville", "Skiatook", "Prattville", "Turley", "Liberty", "Lotsee", "Oakhurst", "Redbird", "Fair Oaks", "Justice", "Limestone", "Valley Park", "New Tulsa", "Leonard", "Haskell", "Porter", "Taft", "Okay", "Tullahassee", "Chouteau", "Inola"
  ],
  "sameAs": [
    "https://facebook.com/yourprofile",
    "https://linkedin.com/in/yourprofile",
    "https://yelp.com/biz/yourprofile"
    // Add other profiles
  ]
}
Example: GitHub Action Workflow for Feed/Sitemap/Schema Automation
name: Content Automation

on:
  push:
    paths:
      - 'content/**'
      - 'blog-posts/**'
      - 'scripts/**'
      - 'public/local-business-schema.json'

jobs:
  build-content:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Generate Feeds
        run: node scripts/generate-feeds.js
      - name: Generate Sitemap
        run: node scripts/generate-sitemap.js
      - name: Validate Schema
        run: node scripts/validate-schema.js
      - name: Commit and Push Changes
        run: |
          git config --global user.name "github-actions"
          git config --global user.email "github-actions@github.com"
          git add public/feed.xml public/feed.json public/sitemap.xml public/local-business-schema.json
          git commit -m "Automated content, feed, and schema update"
          git push

          Example: Injecting Schema in Next.js Layout


// In app/layout.js or pages/_document.js
import Head from 'next/head';
import fs from 'fs';
const schema = fs.readFileSync('public/local-business-schema.json', 'utf-8');

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      </Head>
      {children}
    </>
  );
}


Here’s a thorough review and actionable recommendations for your Next.js static site, focusing on SEO, schema, automation, and workflow robustness for Cloudflare Pages:

1. Automated Feed, Sitemap, and Schema Generation
Feed Generation:

You have generate-feeds.js that scans markdown in content and outputs feed.xml and feed.json in public. This is correct for static hosting.
Your feed.json and feed.xml are present, but the XML is missing actual <entry> data. Ensure the script populates entries for each post.
Sitemap Generation:

You have generate-sitemap.js, update-sitemap.js, and PowerShell/Bash scripts for updating sitemap dates.
sitemap.xml exists, but is mostly empty <url> tags. Confirm your scripts are populating URLs for all pages and posts.
Schema Automation:

local-business-schema.json is present and correctly formatted for LocalBusiness, but lacks address, geo, and service area details.
You have scripts like update-business-schema.js, validate-schema.js, and schema-markup-domination.js for schema management.
local-business-schema.tsx likely injects schema client-side. For best SEO, inject server-side in <head> or statically in HTML.
GitHub Actions:

You mention automation in your README, but no workflow YAMLs are attached. If present, ensure they run feed/sitemap/schema scripts on push/merge to main.
2. Coverage, Robustness, and Discoverability
Service Area Coverage:

Your content and schema should list all cities/towns/counties you serve. Expand local-business-schema.json with "areaServed" and "address" fields.
Use scripts like enhanced-city-automation.js and missing-cities-automation.js to keep coverage up-to-date.
Schema Markup:

Add FAQ and HowTo schema for voice/AI discoverability. Use update-faq-content.js and inject FAQPage/HowTo markup in relevant pages.
For LocalBusiness, add "address", "geo", "areaServed", "openingHours", and "sameAs" (for social profiles).
Voice/AI Optimization:

You have voice-search-optimization.js and multi-search-optimization.js. Ensure these update schema and content for voice assistant queries.
3. Error Handling, Maintenance, and Next-Level Upgrades
Error Handling:

Many scripts lack error handling/logging. Add try/catch and log errors to console or a file for easier debugging.
Validate output files after each run (e.g., check that feed.xml and sitemap.xml are not empty).
Documentation:

Your README is good, but add a section on troubleshooting automation, manual script usage, and workflow triggers.
Document how to manually run scripts and what to check if automation fails.
Recommended Upgrades:

Schema: Expand local-business-schema.json
