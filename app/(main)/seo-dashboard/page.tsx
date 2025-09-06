import React from 'react';

export const metadata = {
  title: 'SEO Dashboard | Just Legal Solutions',
  description: 'SEO dashboard and analytics for Just Legal Solutions. Track your legal service SEO performance and structured data health.',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo-dashboard',
  },
};


const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://justlegalsolutions.org/#organization',
  name: 'Just Legal Solutions',
  url: 'https://justlegalsolutions.org/',
  telephone: '(539) 367-6832',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '564 E 138th PL',
    addressLocality: 'Glenpool',
    addressRegion: 'OK',
    postalCode: '74033',
    addressCountry: {
      '@type': 'Country',
      name: 'US'
    },
  },
  image: 'https://justlegalsolutions.org/images/jls-logo.webp',
  priceRange: '$30-$200',
  description: 'Professional process serving with over 50 years combined industry experience',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://justlegalsolutions.org/#seo-dashboard-organization',
  name: 'Just Legal Solutions',
  url: 'https://justlegalsolutions.org/',
  telephone: '(539) 367-6832',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '564 E 138th PL',
    addressLocality: 'Glenpool',
    addressRegion: 'OK',
    postalCode: '74033',
    addressCountry: {
      '@type': 'Country',
      name: 'US'
    },
  },
  image: 'https://justlegalsolutions.org/images/jls-logo.webp',
  priceRange: '$30-$200',
  foundingDate: '2025-03-01',
  description: 'Professional process serving with over 50 years combined industry experience',
};

export default function SeoDashboardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">SEO Dashboard</h1>
        <p className="mb-4">Track your legal service SEO performance and structured data health.</p>
        {/* Add your dashboard analytics and widgets here */}
      </main>
    </>
  );
}
