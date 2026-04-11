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

  for(let i=0; i<idMatch.length; i++) {
      if (titleMatch[i] && descMatch[i] && dateMatch[i] && durationMatch[i]) {
        let title = titleMatch[i][1].replace(/\\'/g, "'");
        let desc = descMatch[i][1].replace(/\\'/g, "'");

        // XML-escape special characters
        title = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
        desc = desc.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

        ALL_VIDEOS.push({
            videoId: idMatch[i][1],
            title: titleMatch[i][1].replace(/\\'/g, "'"),
            description: descMatch[i][1].replace(/\\'/g, "'"),
            datePublished: dateMatch[i][1],
            duration: durationMatch[i][1]
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
    const slug = slugify(video.title)
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

  // Also include the /videos hub page
  sitemapXml += `  <url>
    <loc>https://justlegalsolutions.org/videos</loc>
    <video:video>
      <video:thumbnail_loc>https://justlegalsolutions.org/images/jls-logo.webp</video:thumbnail_loc>
      <video:title>Oklahoma Process Serving &amp; Notary Video Guides</video:title>
      <video:description>Watch 42 free educational videos on Oklahoma process serving, notary services, skip tracing, pricing, and more from Joseph Iannazzi — Tulsa's #1 rated process server.</video:description>
      <video:player_loc>https://justlegalsolutions.org/videos</video:player_loc>
      <video:publication_date>2026-04-01T00:00:00+00:00</video:publication_date>
      <video:uploader>Just Legal Solutions</video:uploader>
    </video:video>
  </url>
`;

  sitemapXml += `</urlset>\n`;

  fs.writeFileSync(SITEMAP_PATH, sitemapXml);

  // Also write to 'out' directory if it exists
  const outPath = path.join(process.cwd(), 'out', 'video-sitemap.xml');
  if (fs.existsSync(path.join(process.cwd(), 'out'))) {
    fs.writeFileSync(outPath, sitemapXml);
  }

  console.log('✅ Generated public/video-sitemap.xml successfully.');
  console.log(`   - ${ALL_VIDEOS.length} individual video pages`);
  console.log(`   - 1 videos hub page`);
  console.log(`   - Total: ${ALL_VIDEOS.length + 1} video entries`);

} catch (err) {
  console.error('Error generating video sitemap:', err);
}
