# SEO & AI MANUAL TODO LIST
**Created**: April 9, 2026
**Project**: Just Legal Solutions SEO Audit

While you were away, I made sure all of the site's code was perfectly tuned to point AI crawlers to your actual base pricing ($60 / $100 / $150) and added your new Video Hub completely across the entire website codebase.

However, there are three very critical things you must do manually to complete this SEO surge.

## 1. Cloudflare Redirect (High Priority)
*Search engines currently see `www.justlegalsolutions.org` and `justlegalsolutions.org` as two separate websites, cutting your ranking power in half.*
- [ ] Log into your Cloudflare Dashboard.
- [ ] Go to **Rules** > **Page Rules**.
- [ ] Create a new rule.
- [ ] If the URL matches: `www.justlegalsolutions.org/*`
- [ ] Then the settings are: **Forwarding URL** (Status Code: 301 - Permanent Redirect).
- [ ] Forward it to: `https://justlegalsolutions.org/$1`
- [ ] Save and Deploy.

## 2. Google Search Console Initialization
*Force Google to immediately scrape your new 40+ pages, FAQ schemas, and the `/videos` hub.*
- [ ] Log into **Google Search Console** (make sure you use the email associated with your Google Business Profile).
- [ ] On the left menu, click **Sitemaps**.
- [ ] Enter `sitemap.xml` and submit it.
- [ ] In the search bar at the very top of the page, type `https://justlegalsolutions.org/videos` and hit Enter.
- [ ] Click **Request Indexing**.

## 3. Google Business Profile Saturation
*If you want AI engines (especially Perplexity and Gemini) to rank you for local queries like "Tulsa process server near me", you must feed them via Google Maps.*
- [ ] Log into your **Google Business Profile**.
- [ ] Go to the **Updates/Offers** section.
- [ ] Create a new post for each of the new YouTube videos you made. Do NOT post them all on the same day. Schedule them 2-3 times a week.
- [ ] In each update, add a button that links to `https://justlegalsolutions.org/videos`.
- [ ] Go to the **Q&A** section of your profile and manually ask, then answer, the FAQs we built on your website (e.g., "What is the cheapest option? Our post/single attempt starts at $30...").

---
### Codebase Changes Completed For You
1. Completely integrated the `/videos` link into your persistent Header and Footer so it passes domain authority instantly.
2. Hardcoded your `llms.txt`, `llms-full.txt`, and homepage Meta Tags with the correct canonical base pricing of $60/$100/$150 to feed AI the right fundamental data.
3. Cleaned out conflicting schema data and synced your LinkedIn URL across all platforms to avoid AI "hallucinations".
