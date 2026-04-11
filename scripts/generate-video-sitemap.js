#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const VIDEOS_PAGE_PATH = path.join(process.cwd(), 'app', 'videos', 'page.tsx');
const SITEMAP_PATH = path.join(process.cwd(), 'public', 'video-sitemap.xml');
let ALL_VIDEOS = [];

try {
  const content = fs.readFileSync(VIDEOS_PAGE_PATH, 'utf8');
  
  const idMatch = Array.from(content.matchAll(/videoId:\s*'([^']+)'/g));
  const titleMatch = Array.from(content.matchAll(/title:\s*'([^']+(?:\\'[^']*)*)'/g));
  // description can use double quotes or single quotes in code
  const descMatch = Array.from(content.matchAll(/description:\s*(?:'([^']+(?:\\'[^']*)*)'|"([^"]+)")/g));
  const dateMatch = Array.from(content.matchAll(/datePublished:\s*'([^']+)'/g));

  for(let i=0; i<idMatch.length; i++) {
      if (titleMatch[i] && descMatch[i] && dateMatch[i]) {
        let desc = descMatch[i][1] || descMatch[i][2] || '';
        ALL_VIDEOS.push({
            videoId: idMatch[i][1],
            title: titleMatch[i][1].replace(/\\'/g, "'").replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'),
            description: desc.replace(/\\'/g, "'").replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'),
            datePublished: dateMatch[i][1]
        });
      }
  }

  console.log(`Found ${ALL_VIDEOS.length} videos.`);

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

  ALL_VIDEOS.forEach(video => {
    const locUrl = `https://justlegalsolutions.org/videos`;
    
    sitemapXml += `  <url>
    <loc>${locUrl}</loc>
    <video:video>
      <video:thumbnail_loc>https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg</video:thumbnail_loc>
      <video:title>${video.title}</video:title>
      <video:description>${video.description}</video:description>
      <video:player_loc>https://www.youtube.com/embed/${video.videoId}</video:player_loc>
      <video:publication_date>${video.datePublished}T00:00:00+00:00</video:publication_date>
      <video:uploader>Just Legal Solutions</video:uploader>
    </video:video>
  </url>
`;
  });

  sitemapXml += `</urlset>\n`;

  fs.writeFileSync(SITEMAP_PATH, sitemapXml);
  
  // Also write to 'out' directory if it exists
  const outPath = path.join(process.cwd(), 'out', 'video-sitemap.xml');
  if (fs.existsSync(path.join(process.cwd(), 'out'))) {
    fs.writeFileSync(outPath, sitemapXml);
  }
  
  console.log('✅ Generated public/video-sitemap.xml successfully.');

} catch (err) {
  console.error('Error generating video sitemap:', err);
}
