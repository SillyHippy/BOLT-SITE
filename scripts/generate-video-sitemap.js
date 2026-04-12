#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const VIDEOS_PAGE_PATH = path.join(process.cwd(), 'lib', 'video-data.ts');
const SITEMAP_PATH = path.join(process.cwd(), 'public', 'video-sitemap.xml');
let ALL_VIDEOS = [];

/**
 * Generate a URL-friendly slug from a video title.
 * Matches the logic in app/videos/[slug]/page.tsx
 */
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

try {
  const content = fs.readFileSync(VIDEOS_PAGE_PATH, 'utf8');

  // Regex to extract video objects from the arrays in lib/video-data.ts
  const videoObjectRegex = /\{[\s\S]*?videoId:\s*'([^']+)'[\s\S]*?title:\s*'((?:[^'\\]|\\.)*)'[\s\S]*?description:\s*'((?:[^'\\]|\\.)*)'[\s\S]*?datePublished:\s*'([^']+)'[\s\S]*?duration:\s*'([^']+)'[\s\S]*?\}/g;
  
  let match;
  while ((match = videoObjectRegex.exec(content)) !== null) {
    const [_, videoId, rawTitleEscaped, rawDescEscaped, datePublished, duration] = match;
    
    let rawTitle = rawTitleEscaped.replace(/\\'/g, "'");
    let rawDesc = rawDescEscaped.replace(/\\'/g, "'");

    // XML-escape special characters
    let xmlTitle = rawTitle.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    let xmlDesc = rawDesc.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

    // Convert ISO 8601 duration (e.g. PT15M0S) to total seconds
    let durationSecs = 0;
    const hoursMatch = duration.match(/(\d+)H/);
    const minutesMatch = duration.match(/(\d+)M/);
    const secondsMatch = duration.match(/(\d+)S/);
    
    if (hoursMatch) durationSecs += parseInt(hoursMatch[1]) * 3600;
    if (minutesMatch) durationSecs += parseInt(minutesMatch[1]) * 60;
    if (secondsMatch) durationSecs += parseInt(secondsMatch[1]);

    if (durationSecs === 0 && /^\d+$/.test(duration)) {
      durationSecs = parseInt(duration) * 60; // Fallback
    } else if (durationSecs === 0) {
      durationSecs = 60; 
    }

    ALL_VIDEOS.push({
      videoId,
      rawTitle,
      title: xmlTitle,
      description: xmlDesc,
      datePublished,
      duration: durationSecs.toString()
    });
  }

  console.log(`Found ${ALL_VIDEOS.length} videos.`);

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

  ALL_VIDEOS.forEach(video => {
    // Each video gets its own unique URL: /videos/[slug]
    const slug = slugify(video.rawTitle)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    const locUrl = `https://justlegalsolutions.org/videos/${slug}`;

    sitemapXml += `  <url>
    <loc>${locUrl}</loc>
    <video:video>
      <video:thumbnail_loc>https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg</video:thumbnail_loc>
      <video:title>${video.title}</video:title>
      <video:description>${video.description}</video:description>
      <video:player_loc>https://www.youtube.com/embed/${video.videoId}</video:player_loc>
      <video:publication_date>${video.datePublished}T00:00:00+00:00</video:publication_date>
      <video:uploader>Just Legal Solutions</video:uploader>
      <video:duration>${video.duration}</video:duration>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
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
  console.log(`   - ${ALL_VIDEOS.length} individual video pages`);

} catch (err) {
  console.error('Error generating video sitemap:', err);
}
