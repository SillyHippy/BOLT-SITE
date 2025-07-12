import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://justlegalsolutions.org';
  const lastModified = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- High Priority Pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/tulsa-process-server/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/process-server-tulsa/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/courier-services-tulsa/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Service Pages -->
  <url>
    <loc>${baseUrl}/services/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/pricing/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/payments/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Security & Policy Pages -->
  <url>
    <loc>${baseUrl}/security-policy/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Contact & Card Pages -->
  <url>
    <loc>${baseUrl}/card/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/card/calendar/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
    },
  });
}