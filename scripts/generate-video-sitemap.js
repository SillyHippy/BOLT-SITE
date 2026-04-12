#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const VIDEOS_PAGE_PATH = path.join(process.cwd(), 'app', 'videos', 'page.tsx');
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

  // Extract only the video arrays (featuredVideos, fullVideos, shorts) by finding blocks between [ and ]
  // This avoids matching the metadata title/description at the top of the file
  const videoBlocks = [];

  // Find all video object blocks within array definitions
  // Look for patterns inside [ ... ] that contain videoId
  const arrayRegex = /\[\s*\n(\s*\{[\s\S]*?videoId[\s\S]*?\},?\s*\n\s*)+\]/g;
  let arrayMatch;
  while ((arrayMatch = arrayRegex.exec(content)) !== null) {
    videoBlocks.push(arrayMatch[0]);
  }

  const allVideoContent = videoBlocks.join('\n');

  // Match videoId
  const idMatch = Array.from(allVideoContent.matchAll(/videoId:\s*'([^']+)'/g));

  // Match title - handle escaped apostrophes
  const titleMatch = Array.from(allVideoContent.matchAll(/title:\s*'((?:[^'\\]|\\.)*)'/g));

  // Match description - handle escaped apostrophes and double quotes
  const descMatch = Array.from(allVideoContent.matchAll(/description:\s*'((?:[^'\\]|\\.)*)'/g));

  // Match datePublished
  const dateMatch = Array.from(allVideoContent.matchAll(/datePublished:\s*'([^']+)'/g));

  // Match duration
  const durationMatch = Array.from(allVideoContent.matchAll(/duration:\s*'([^']+)'/g));

  for (let i = 0; i < idMatch.length; i++) {
    if (titleMatch[i] && descMatch[i] && dateMatch[i] && durationMatch[i]) {
      let rawTitle = titleMatch[i][1].replace(/\\'/g, "'");
      let rawDesc = descMatch[i][1].replace(/\\'/g, "'");

      // XML-escape special characters
      let xmlTitle = rawTitle.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
      let xmlDesc = rawDesc.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

      // Convert ISO 8601 duration (e.g. PT15M0S) to total seconds
      let durationSecs = 0;
      const rawDuration = durationMatch[i][1];
      const hoursMatch = rawDuration.match(/(\d+)H/);
      const minutesMatch = rawDuration.match(/(\d+)M/);
      const secondsMatch = rawDuration.match(/(\d+)S/);
      
      if (hoursMatch) durationSecs += parseInt(hoursMatch[1]) * 3600;
      if (minutesMatch) durationSecs += parseInt(minutesMatch[1]) * 60;
      if (secondsMatch) durationSecs += parseInt(secondsMatch[1]);

      if (durationSecs === 0 && /^\d+$/.test(rawDuration)) {
        durationSecs = parseInt(rawDuration) * 60; // Fallback
      } else if (durationSecs === 0) {
        durationSecs = 60; 
      }

      ALL_VIDEOS.push({
        videoId: idMatch[i][1],
        rawTitle: rawTitle,
        title: xmlTitle,
        description: xmlDesc,
        datePublished: dateMatch[i][1],
        duration: durationSecs.toString()
      });
    }
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
