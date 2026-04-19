#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Directory to scan for static pages (Next.js export output or public)
const OUT_DIR = path.join(process.cwd(), 'out');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const APP_DIR = path.join(process.cwd(), 'app');
const DOMAIN = 'https://justlegalsolutions.org';

// Auto-discover blog posts from app/blog/ directory
function discoverBlogUrls() {
  const blogDir = path.join(APP_DIR, 'blog');
  const urls = ['/blog']; // Always include the index
  if (!fs.existsSync(blogDir)) return urls;
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const pagePath = path.join(blogDir, entry.name, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        urls.push(`/blog/${entry.name}`);
      }
    }
  }
  console.log(`📝 Auto-discovered ${urls.length} blog URLs (1 index + ${urls.length - 1} posts)`);
  return urls;
}

// Recursively get all .html files in a directory
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

// Convert file path to URL
function filePathToUrl(filePath, baseDir) {
  let rel = path.relative(baseDir, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return DOMAIN + '/';
  if (rel.endsWith('/index.html')) rel = rel.replace(/\/index\.html$/, '/');
  else rel = rel.replace(/\.html$/, '');
  return DOMAIN + '/' + rel;
}

// Main sitemap generation
function generateSitemap() {
  const baseDir = fs.existsSync(OUT_DIR) ? OUT_DIR : PUBLIC_DIR;
  const files = getHtmlFiles(baseDir);
  const today = new Date().toISOString().split('T')[0];

  // URLs to exclude (redirect pages, internal tools, utility pages)
  const excludeUrls = [
    '/faq', // Redirects to /ultimate-guide-process-serving-oklahoma
    '/faq/', // Trailing slash variant
    '/services', // Redirects to /pricing
    '/services/', // Trailing slash variant
    '/index.html', // Redirects to /
    '/sitemap/', // Not needed in sitemap (has sitemap.xml)
    // Original SEO redirects
    '/seo/process-server-sand-springs', // Redirects to /service-areas/sand-springs
    '/seo/process-server-bixby', // Redirects to /service-areas/bixby
    '/seo/process-server-broken-arrow', // Redirects to /service-areas/broken-arrow
    '/seo/process-server-jenks', // Redirects to /service-areas/jenks
    '/seo/process-server-nowata', // Redirects to /service-areas/nowata
    '/seo/process-server-vinita', // Redirects to /service-areas/vinita
    // Newly added SEO redirects (from fix)
    '/seo/process-server-coweta', // Redirects to /service-areas/coweta
    '/seo/process-server-catoosa', // Redirects to /service-areas/catoosa
    '/seo/process-server-skiatook', // Redirects to /service-areas/skiatook
    '/seo/process-server-collinsville', // Redirects to /service-areas/collinsville
    '/seo/process-server-kellyville', // Redirects to /service-areas/kellyville
    '/seo/process-server-wagoner', // Redirects to /service-areas/wagoner
    '/seo/process-server-mounds', // Redirects to /tulsa-process-server
    '/seo/process-server-drumright', // Redirects to /tulsa-process-server
    '/seo/courier-delivery-service', // Redirects to /courier-services-tulsa
    '/seo/small-business-courier', // Redirects to /law-firm-services
    '/seo/skip-tracing-services', // Redirects to /skip-tracing
    '/seo/tulsa-process-server-comprehensive', // Redirects to /tulsa-process-server
    '/seo/owasso-process-server', // Redirects to /service-areas/owasso
    '/seo/glenpool-process-server', // Redirects to /service-areas/glenpool
    '/seo/sand-springs-process-server', // Redirects to /service-areas/sand-springs
    // Root-level process-server variations
    '/process-server-tulsa', // Redirects to /tulsa-process-server
    '/process-server-tulsa/', // Trailing slash variant
    '/process-server-bixby', // Redirects to /service-areas/bixby
    '/process-server-bixby/', // Trailing slash variant
    '/process-server-porter', // Redirects to /tulsa-process-server
    '/process-server-porter/', // Trailing slash variant
    '/serving-legal-papers-in-oklahoma-guide', // Redirects to /ultimate-guide-process-serving-oklahoma
    '/oklahoma-process-server-cost-calculator', // Removed - page no longer exists
    '/404', // Error page - should not be indexed
    '/card', // Internal business card page
    '/card/calendar', // Internal calendar page
    '/leave-review', // Internal review submission form
    '/local-seo-marker', // Internal SEO marker
    '/multi-search-marker', // Internal search marker
    '/performance-marker', // Internal performance marker
    '/reviews/phone', // Internal review intake
    '/reviews/survey', // Internal review intake
    '/reviews/text', // Internal review intake
    '/security-policy', // Low-value policy page
    '/competitor-analysis', // Redirects to /why-choose-us
    '/voice-search-marker', // Internal voice search marker
    '/registered-agent', // Excluded from sitemap per user request, not ready for live service list
    // 301 redirect pages (year-versioned stubs)
    '/oklahoma-process-server-pricing-2025', // Redirects to /oklahoma-process-server-pricing
    '/oklahoma-process-server-pricing-2026', // Redirects to /oklahoma-process-server-pricing
    '/oklahoma-process-server-technology-2025', // Redirects to /oklahoma-process-server-technology
    '/high-profile-service-protocols-tulsa-2025', // Redirects to /high-profile-service-protocols-tulsa
    '/oklahoma-electronic-service-guide-2025', // Redirects to /oklahoma-electronic-service-guide
    '/oklahoma-case-law-service-process-2025', // Redirects to /oklahoma-case-law-service-process
    '/oklahoma-legal-service-areas-2025', // Redirects to /oklahoma-legal-service-areas
    '/oklahoma-process-serving-costs-comparison-2025', // Redirects to /oklahoma-process-serving-costs-comparison
    '/ai-skip-tracing-guide-oklahoma-2025', // Redirects to /ai-skip-tracing-guide-oklahoma
    '/family-law-service-guide-tulsa-2025', // Redirects to /family-law-service-guide-tulsa
    '/process-serving-mistakes-guide-2025', // Redirects to /process-serving-mistakes-guide
    '/oklahoma-process-server-faq-2025', // Redirects to /oklahoma-process-server-faq-2026
    '/oklahoma-process-server-best-practices-checklist-2025', // Redirects to /oklahoma-process-server-best-practices-checklist-2026
    '/oklahoma-vs-texas-process-server', // Redirects to /oklahoma-process-server-laws
    // Orphan/utility pages (no page files, internal tools)
    '/viewer',
    '/future-ai-ready',
    '/local-legal-events',
    '/seo-dashboard',
    '/ai-business-info',
    '/backlinks',
    '/affidavit',
    '/voice-friendly',
    '/platform-supremacy',
  ];

  // Additional URLs to ensure they're included (all service areas with Google Maps)
  const additionalUrls = [
    // Service Areas (all 20 with Google Maps) - Excluding /service-areas/tulsa (redirects to main page)
    '/service-areas',
    '/service-areas/broken-arrow',
    '/service-areas/owasso',
    '/service-areas/bixby',
    '/service-areas/jenks',
    '/service-areas/sand-springs',
    '/service-areas/glenpool',
    '/service-areas/collinsville',
    '/service-areas/skiatook',
    '/service-areas/claremore',
    '/service-areas/catoosa',
    '/service-areas/bartlesville',
    '/service-areas/sapulpa',
    '/service-areas/kellyville',
    '/service-areas/bristow',
    '/service-areas/wagoner',
    '/service-areas/coweta',
    '/service-areas/pawhuska',
    '/service-areas/pryor',
    '/service-areas/nowata',
    '/service-areas/vinita',

    // County Pages
    '/counties',
    '/counties/tulsa-county',
    '/counties/rogers-county',
    '/counties/washington-county',
    '/counties/creek-county',
    '/counties/wagoner-county',
    '/counties/osage-county',
    '/counties/mayes-county',
    '/counties/okmulgee-county',
    '/counties/nowata-county',

    // Main Pages (priority 1.0)
    '/',
    '/contact',
    '/pricing',
    '/tulsa-process-server',

    // Secondary Pages
    '/resources',
    '/payments',
    '/why-choose-us',
    '/law-firm-services',
    '/about',
    '/affidavit-of-service',

    // Core Service Pages (priority 0.9)
    '/process-serving',
    '/same-day-process-server',
    '/urgent-process-server',
    '/skip-tracing',
    '/subpoena-service',
    '/eviction-notice-service',
    '/courier-services',
    '/courier-services-tulsa',
    '/weekend-emergency',
    '/virtual-assistant-services',
    '/courthouse-filing-services',
    '/gps-tracked-process-serving',
    '/process-serving-for-debt-collection',
    '/process-serving-for-insurance-companies',
    '/process-serving-for-property-managers',
    '/rush-vs-standard-vs-same-day-service',

    // Notary Service Pages (priority 0.9)
    '/notary',
    '/notary/joseph',
    '/mobile-notary',
    '/mobile-notary-vs-bank',
    '/what-to-bring',
    '/remote-online-notary',
    '/hospital-notary',
    '/real-estate-notary',
    '/immigration-document-notary-oklahoma',
    '/notary/tulsa-county',
    '/notary/creek-county',
    '/wedding-officiant',
    '/apostille',
    '/notary-faqs',
    '/notary-laws',

    // Guide & Educational Pages
    '/ultimate-guide-process-serving-oklahoma',
    '/oklahoma-process-server-laws',
    '/oklahoma-process-server-authority',
    '/oklahoma-case-law-service-process',
    '/oklahoma-electronic-service-guide',
    '/oklahoma-legal-service-areas',
    '/oklahoma-process-server-pricing',
    '/oklahoma-process-server-technology',
    '/oklahoma-process-serving-costs-comparison',
    '/oklahoma-process-server-best-practices-checklist-2026',
    '/oklahoma-process-server-faq-2026',
    '/process-server-tulsa-guide',
    '/process-serving-mistakes-guide',
    '/ai-skip-tracing-guide-oklahoma',
    '/family-law-service-guide-tulsa',
    '/high-profile-service-protocols-tulsa',
    '/serving-legal-papers-on-tribal-land',
    '/guides',
    '/guides/attorney-guide',
    '/guides/mcgirt-v-oklahoma',
    '/guides/military-base-service',
    '/guides/rural-oklahoma',

    // Blog / Informational Content Pages
    '/how-much-does-process-server-cost',
    '/what-happens-if-someone-refuses-service',
    '/how-long-does-process-serving-take',
    '/can-process-server-serve-on-sunday',

    // Phase 2 — New Service & Notary Pages
    '/bankruptcy-process-serving-oklahoma',
    '/power-of-attorney-notary-oklahoma',
    '/title-company-notary-services',
    '/loan-signing-agent-tulsa',
    '/attorney-services',
    '/service-areas/oklahoma-city',

    // Phase 2 — Industry Guides
    '/become-process-server-oklahoma-complete-guide',
    '/process-server-equipment-checklist',
    '/process-server-safety-guide-oklahoma',
    '/process-server-business-startup-guide',
    '/oklahoma-process-server-forms-templates',
    '/process-server-marketing-guide',

    // Phase 3 — Content Expansion
    '/types-of-service-process-oklahoma',
    '/serve-business-corporation-oklahoma',
    '/legal-glossary',

    // Phase 2 — Resource Landing Pages
    '/resources/oklahoma-process-server-licensing-checklist',
    '/resources/oklahoma-service-of-process-reference',
    '/resources/attorneys-guide-hiring-process-server',
    '/resources/oklahoma-eviction-timeline',
    '/resources/process-server-field-sheet-template',
    '/resources/oklahoma-notarization-requirements',
    '/resources/what-to-do-when-served-oklahoma',

    // Blog Posts (auto-discovered below, these are the static info pages)
    ...discoverBlogUrls(),

    // SEO Landing Pages
    '/seo/eviction-notice-process-server',
    '/seo/legal-posting-process-server',
    '/seo/what-is-a-process-server',

    // Tool Pages
    '/tools',
    '/pdf-tools',
    '/field-sheet',
    '/service-checker',
    '/service-time-estimator',

    // Video Hub
    '/videos',

    // Additional Service Pages
    '/process-server-near-me',
    '/broken-arrow-process-server',
    '/oklahoma-courthouse-directory',
    '/join-our-network',

    // Video pages — individual URLs are in video-sitemap.xml, exclude from main sitemap
    '/videos/*', // Individual video pages covered by video-sitemap.xml
    '/videos/', // Trailing slash variant

    // Sitemap files (don't list sitemap files inside sitemap)
    '/sitemap-index',
    '/video-sitemap',
  ];

  // Get URLs from existing files
  const fileUrls = files.map(f => filePathToUrl(f, baseDir));

  // Process additionalUrls to ensure they start with the domain
  const processedAdditionalUrls = additionalUrls.map(url => {
    // Remove any single quotes that might be around the URL
    url = url.replace(/^'|'$/g, '');
    // Ensure URL starts with domain
    return url.startsWith('http') ? url : DOMAIN + url;
  });

  // Combine and deduplicate URLs, excluding redirect pages
  const allUrls = [...new Set([...fileUrls, ...processedAdditionalUrls])]
    .filter(url => !excludeUrls.some(excludeUrl => url.endsWith(excludeUrl)));

  // Priority tiers: only 3-4 pages should be 1.0, everything else tiered down
  // This prevents Google from ignoring priority signals when too many pages are at 1.0
  const PRIORITY_1_0_PAGES = ['/', '/tulsa-process-server', '/pricing', '/contact'];
  const PRIORITY_0_9_PATTERNS = ['/process-serving', '/same-day-process-server', '/urgent-process-server',
    '/skip-tracing', '/subpoena-service', '/eviction-notice-service', '/courier-services', '/weekend-emergency',
    '/notary', '/mobile-notary', '/apostille'];

  const urlEntries = allUrls.map(url => {
    let priority = '0.7'; // Default priority
    let changefreq = 'monthly';
    const urlPath = url.replace(DOMAIN, '');

    // Use actual file modification date instead of today's date
    // This gives Google accurate signals about what actually changed
    let lastmod = today; // Default to today for safety
    try {
      // Map URL to actual file path
      let filePath;
      if (urlPath === '/') {
        filePath = path.join(APP_DIR, '(main)', 'page.tsx');
      } else if (urlPath.startsWith('/blog/')) {
        const slug = urlPath.replace('/blog/', '');
        filePath = path.join(APP_DIR, 'blog', slug, 'page.tsx');
      } else if (urlPath.startsWith('/counties/')) {
        const slug = urlPath.replace('/counties/', '');
        filePath = path.join(APP_DIR, 'counties', slug === 'counties' ? '' : slug, 'page.tsx');
      } else if (urlPath.startsWith('/service-areas/')) {
        const slug = urlPath.replace('/service-areas/', '');
        filePath = path.join(APP_DIR, 'service-areas', slug, 'page.tsx');
      } else if (urlPath.startsWith('/videos/')) {
        filePath = path.join(APP_DIR, '(main)', 'videos', '[slug]', 'page.tsx');
      } else {
        // For other pages, try to find them in app/(main)/
        const pageName = urlPath.replace(/^\//, '').replace(/\/$/, '');
        filePath = path.join(APP_DIR, '(main)', pageName, 'page.tsx');
      }

      if (filePath && fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        lastmod = stats.mtime.toISOString().split('T')[0];
      }
    } catch (err) {
      // Fallback to today's date if file not found
      lastmod = today;
    }

    if (PRIORITY_1_0_PAGES.includes(urlPath)) {
      priority = '1.0';
      changefreq = 'weekly';
    } else if (PRIORITY_0_9_PATTERNS.some(p => urlPath === p)) {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (urlPath === '/ultimate-guide-process-serving-oklahoma') {
      priority = '0.95';
      changefreq = 'weekly';
    } else if ([
      '/process-server-vs-sheriff',
      '/divorce-paper-service',
      '/small-claims-process-serving',
      '/protective-order-service',
      '/tulsa-process-server-faq',
      '/process-serving-for-debt-collection',
      '/process-serving-for-insurance-companies',
      '/process-serving-for-property-managers',
    ].includes(urlPath)) {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (urlPath.includes('/oklahoma-') || urlPath.includes('/seo/') || urlPath.includes('/process-server') || urlPath.includes('/ultimate-guide') || urlPath.includes('/process-serving-mistakes') || urlPath === '/notary-faqs' || urlPath === '/notary-laws') {
      priority = '0.85';
      changefreq = 'monthly';
    } else if (urlPath.includes('/counties/') || urlPath === '/counties') {
      priority = '0.8';
      changefreq = 'monthly';
    } else if (['/about', '/affidavit-of-service', '/why-choose-us', '/payments', '/law-firm-services',
      '/how-much-does-process-server-cost', '/what-happens-if-someone-refuses-service',
      '/how-long-does-process-serving-take', '/can-process-server-serve-on-sunday',
      '/courier-services-tulsa', '/family-law-service-guide-tulsa', '/high-profile-service-protocols-tulsa',
      '/serving-legal-papers-on-tribal-land', '/ai-skip-tracing-guide-oklahoma', '/weekend-emergency',
      '/virtual-assistant-services',
      '/bankruptcy-process-serving-oklahoma', '/power-of-attorney-notary-oklahoma',
      '/title-company-notary-services', '/loan-signing-agent-tulsa', '/attorney-services',
      '/become-process-server-oklahoma-complete-guide'].includes(urlPath)) {
      priority = '0.8';
      changefreq = 'monthly';
    } else if (urlPath.includes('/service-areas/')) {
      priority = '0.7';
      changefreq = 'monthly';
    } else if (['/service-areas', '/resources'].includes(urlPath)) {
      priority = '0.8';
      changefreq = 'monthly';
    } else if (['/tools', '/pdf-tools', '/field-sheet'].includes(urlPath)) {
      priority = '0.6';
      changefreq = 'monthly';
    } else if (urlPath === '/videos') {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (urlPath === '/blog') {
      priority = '0.8';
      changefreq = 'weekly';
    } else if (urlPath.startsWith('/blog/')) {
      priority = '0.7';
      changefreq = 'monthly';
    } else if (urlPath === '/sitemap') {
      priority = '0.5';
      changefreq = 'monthly';
    }

    return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries.join('\n')}\n</urlset>\n`;

  // Always write to public for local dev
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
  // Also write to out/ for deploys if it exists
  if (fs.existsSync(OUT_DIR)) {
    fs.writeFileSync(path.join(OUT_DIR, 'sitemap.xml'), sitemap);
  }
  console.log(`🗺️ Sitemap generated with ${urlEntries.length} URLs.`);
}

generateSitemap();
