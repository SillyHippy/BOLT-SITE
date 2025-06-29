import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://justlegalsolutions.org';
  const lastModified = '2025-01-15T00:00:00.000Z'; // Fixed date for SEO optimization

  return NextResponse.json([
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/tulsa-process-server`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/payments`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/card`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/card/calendar`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]);
}