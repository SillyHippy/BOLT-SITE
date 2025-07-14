import { NextRequest, NextResponse } from 'next/server';

// Dynamic schema generator based on page content
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pageType = searchParams.get('type') || 'service';
  const location = searchParams.get('location') || 'Tulsa';
  const service = searchParams.get('service') || 'Process Server';

  const schema = generateSmartSchema(pageType, location, service);

  return NextResponse.json({
    schema,
    structured_data: schema,
    seo_boost: calculateSEOBoost(schema),
    timestamp: new Date().toISOString()
  });
}

function generateSmartSchema(pageType: string, location: string, service: string) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Just Legal Solutions - ${service} in ${location}`,
    description: `Professional ${service.toLowerCase()} services in ${location}, Oklahoma. Same-day delivery, licensed and bonded.`,
    url: `https://justlegalsolutions.org/${service.toLowerCase().replace(/\s+/g, '-')}-${location.toLowerCase()}`,
    telephone: '+1-918-200-4577',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: location,
      addressRegion: 'OK',
      postalCode: '74101',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1540,
      longitude: -95.9928
    },
    openingHours: [
      'Mo-Fr 08:00-17:00',
      'Sa 09:00-15:00'
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 36.1540,
        longitude: -95.9928
      },
      geoRadius: 50000
    }
    areaServed: {} as any
  };

  // Add service-specific schema
  if (service === 'Process Server') {
    baseSchema['@type'] = 'LegalService';
    baseSchema['areaServed'] = {
      '@type': 'State',
      name: 'Oklahoma'
    };
  }

  // Add FAQ schema for better SERP features
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How fast can you serve papers in ${location}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `We provide same-day ${service.toLowerCase()} services in ${location}. Most documents are served within 2-4 hours of receipt.`
        }
      },
      {
        '@type': 'Question',
        name: `What areas do you serve around ${location}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `We serve ${location} and surrounding areas including Broken Arrow, Owasso, Bixby, Jenks, and all of Tulsa County.`
        }
      },
      {
        '@type': 'Question',
        name: 'How much does process serving cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our process serving rates start at $45 for standard service. Rush and weekend service available at competitive rates.'
        }
      }
    ]
  };

  return {
    business: baseSchema,
    faq: faqSchema,
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://justlegalsolutions.org'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://justlegalsolutions.org/services'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `${service} ${location}`,
          item: `https://justlegalsolutions.org/${service.toLowerCase().replace(/\s+/g, '-')}-${location.toLowerCase()}`
        }
      ]
    }
  };
}

function calculateSEOBoost(schema: any) {
  let boost = 0;
  
  // Rich snippets potential
  if (schema.business) boost += 25;
  if (schema.faq) boost += 35;
  if (schema.breadcrumb) boost += 15;
  
  // Local SEO boost
  if (schema.business?.address) boost += 20;
  if (schema.business?.geo) boost += 15;
  
  return {
    estimated_boost: `${boost}%`,
    features: [
      'Rich Business Snippets',
      'FAQ Rich Results',
      'Local Pack Rankings',
      'Enhanced SERP Presence'
    ]
  };
}
