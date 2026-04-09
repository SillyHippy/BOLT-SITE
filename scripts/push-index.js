const SEOPerformanceBot = require('./seo-automation.js');

const bot = new SEOPerformanceBot();

const fs = require('fs');
const path = require('path');

let urls = [];
try {
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
        const sitemap = fs.readFileSync(sitemapPath, 'utf8');
        const regex = /<loc>(http[^<]+)<\/loc>/g;
        let match;
        while ((match = regex.exec(sitemap)) !== null) {
            urls.push(match[1]);
        }
    } else {
        console.warn("sitemap.xml not found! Fallback to default list.");
        urls = [
            'https://justlegalsolutions.org/',
            'https://justlegalsolutions.org/process-serving',
            'https://justlegalsolutions.org/pricing'
        ];
    }
} catch (e) {
    console.error("Error reading sitemap:", e);
}

// Remove duplicates
urls = [...new Set(urls)];

if (urls.length > 0) {
    console.log(`Found ${urls.length} URLs to submit to IndexNow...`);
    bot.submitToIndexNow(urls).then((status) => {
        console.log(`Successfully submitted to IndexNow. Status Code: ${status}`);
    }).catch(console.error);
} else {
    console.log("No URLs found to submit.");
}
