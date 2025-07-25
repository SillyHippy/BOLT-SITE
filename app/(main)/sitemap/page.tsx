import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Map, FileText, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap | Just Legal Solutions',
  description: 'A complete list of all pages on the Just Legal Solutions website. Easily navigate to any of our services or resources.',
  robots: 'index, follow'
};

const SitemapPage = () => {
  // Organization schema markup (improved for Google Rich Results)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Just Legal Solutions",
    "url": "https://justlegalsolutions.org",
    "logo": "https://justlegalsolutions.org/logo.png",
    "description": "Just Legal Solutions provides comprehensive legal services in Tulsa, Oklahoma and beyond. Contact us for process serving, courier, and legal support.",
    "foundingDate": "2020-01-01",
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+1-539-367-6832",
      "contactType": "customer service",
      "email": "info@justlegalsolutions.org",
      "areaServed": "US",
      "availableLanguage": ["English"]
    }],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "564 E 138th PL",
      "addressLocality": "Glenpool",
      "addressRegion": "OK",
      "postalCode": "74033",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/justlegalsolutions",
      "https://www.linkedin.com/company/justlegalsolutions",
      "https://twitter.com/justlegalsol", // <-- Add more if you have
      "https://www.instagram.com/justlegalsolutions/"
    ]
  };
  // Static list generated from sitemap.xml
  // Static list of unique URLs (no duplicates, no trailing slash)
  const sitemapLinks = [
    // Static list generated from sitemap.xml
    // Static list of unique URLs (no duplicates, no trailing slash)
    { url: '/' },
    { url: '/404' },
    { url: '/ai-business-info' },
    { url: '/backlinks' },
    { url: '/card' },
    { url: '/card/calendar' },
    { url: '/competitor-analysis' },
    { url: '/courier-services-tulsa' },
    { url: '/future-ai-ready' },
    { url: '/local-legal-events' },
    { url: '/local-seo-marker' },
    { url: '/multi-search-marker' },
    { url: '/process-server-tulsa' },
    { url: '/resources' },
    { url: '/security-policy' },
    { url: '/tulsa-process-server' },
    { url: '/tulsa-county' },
    { url: '/ultimate-guide-process-serving-oklahoma' },
    // SEO city/service pages (deduped and current)
    { url: '/seo/bixby-process-server' },
    { url: '/seo/broken-arrow-process-server' },
    { url: '/seo/eviction-notice-process-server' },
    { url: '/seo/glenpool-process-server' },
    { url: '/seo/jenks-process-server' },
    { url: '/seo/legal-posting-process-server' },
    { url: '/seo/owasso-process-server' },
    { url: '/seo/process-server-sand-springs' },
    { url: '/seo/sand-springs-process-server' },
    { url: '/seo/what-is-a-process-server' },
    { url: '/seo/tulsa-process-server-comprehensive' },
    { url: '/seo-dashboard' },
    { url: '/services' },
    { url: '/sitemap' },
    { url: '/urgent-process-server' },
    { url: '/voice-friendly' },
    { url: '/voice-search-marker' },
    { url: '/weekend-emergency' },
    { url: '/why-choose-us' },
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Map className="inline-block mr-2" /> All Pages
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sitemapLinks.map(({ url }) => (
            <div key={url} className="mb-2 flex items-center">
              <ChevronRight className="w-5 h-5 mr-2 text-blue-600" />
              <Link href={url} className="text-blue-700 hover:underline text-lg">
                {url}
              </Link>
            </div>
          ))}
        </div>
      </main>
      
      {/* Organization Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
    </>
  )
}

export default SitemapPage;
