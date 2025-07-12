import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://justlegalsolutions.org';
  const lastModified = '2025-07-11T00:00:00.000Z'; // Updated for current SEO optimization

  return NextResponse.json([
    // High Priority Pages (1.0-0.9)
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/tulsa-process-server/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/process-server-tulsa/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/courier-services-tulsa/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Service Pages (0.9-0.8)
    {
      url: `${baseUrl}/services/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/payments/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Security & Policy Pages (0.7-0.6)
    {
      url: `${baseUrl}/security-policy/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    
    // Contact & Card Pages (0.7-0.6)
    {
      url: `${baseUrl}/card/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/card/calendar/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]);
}