const fs = require('fs');
const path = require('path');

// Update sitemap with new city pages - only adds pages that actually exist as routes
const updateSitemap = () => {
  const statusFile = path.join(process.cwd(), 'deployment-status.json');
  const sitemapFile = path.join(process.cwd(), 'public', 'sitemap.xml');
  
  if (!fs.existsSync(statusFile)) {
    console.log('No deployment status found - skipping sitemap update');
    return;
  }

  if (!fs.existsSync(sitemapFile)) {
    console.log('Sitemap not found - skipping');
    return;
  }

  const status = JSON.parse(fs.readFileSync(statusFile, 'utf8'));
  
  if (!status.deployed || !Array.isArray(status.deployed)) {
    console.log('No deployed cities in status file');
    return;
  }

  // Read current sitemap
  let sitemap = fs.readFileSync(sitemapFile, 'utf8');
  let added = 0;
  
  // Get current date for lastmod
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Add new city pages to sitemap (no trailing slashes to match existing format)
  status.deployed.forEach(city => {
    if (!city.slug) return;
    
    // Verify the page directory actually exists before adding to sitemap
    const pagePath = path.join(process.cwd(), 'app', '(main)', 'seo', city.slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      console.log(`Skipping ${city.slug} - page file does not exist`);
      return;
    }

    const locUrl = `https://justlegalsolutions.org/seo/${city.slug}`;
    
    // Check if this exact URL already exists in sitemap
    if (sitemap.includes(locUrl)) {
      return; // Already in sitemap
    }

    const cityUrl = `  <url>\n    <loc>${locUrl}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
    
    sitemap = sitemap.replace('</urlset>', cityUrl + '\n</urlset>');
    console.log(`Added ${city.name || city.slug} to sitemap`);
    added++;
  });

  if (added > 0) {
    fs.writeFileSync(sitemapFile, sitemap);
    console.log(`Sitemap updated - ${added} new pages added`);
  } else {
    console.log('Sitemap already up to date - no changes');
  }
};

updateSitemap();
