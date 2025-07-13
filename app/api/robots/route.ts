import { NextResponse } from 'next/server';

// Configure for static export compatibility
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export async function GET() {
  return NextResponse.json({
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/security-policy'],
    },
    sitemap: 'https://justlegalsolutions.org/sitemap.xml',
  });
}
