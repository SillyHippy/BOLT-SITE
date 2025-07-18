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
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "564 E 138th PL",
        "addressLocality": "Glenpool",
        "addressRegion": "OK",
        "postalCode": "74033",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Suite 200, 123 Main St",
        "addressLocality": "Tulsa",
        "addressRegion": "OK",
        "postalCode": "74103",
        "addressCountry": "US"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/justlegalsolutions",
      "https://www.linkedin.com/company/justlegalsolutions",
      "https://twitter.com/justlegalsol", // <-- Add more if you have
      "https://www.instagram.com/justlegalsolutions/"
    ]
  };
  // Static list generated from sitemap.xml
  const sitemapLinks = [
    { url: '/404/' },
    { url: '/404' },
    { url: '/ai-business-info' },
    { url: '/backlinks/' },
    { url: '/card/calendar/' },
    { url: '/card/' },
    { url: '/competitor-analysis/' },
    { url: '/courier-services-tulsa/' },
    { url: '/future-ai-ready' },
    { url: '/' },
    { url: '/local-legal-events' },
    { url: '/local-seo-marker/' },
    { url: '/local-seo-marker' },
    { url: '/multi-search-marker/' },
    { url: '/multi-search-marker' },
    { url: '/payments/' },
    { url: '/performance-marker/' },
    { url: '/performance-marker' },
    { url: '/platform-supremacy/' },
    { url: '/pricing/' },
    { url: '/process-server-tulsa/' },
    { url: '/resources/' },
    { url: '/security-policy/' },
    { url: '/seo/bixby-process-server/' },
    { url: '/seo/broken-arrow-process-server/' },
    { url: '/seo/eviction-notice-process-server/' },
    { url: '/seo/glenpool-process-server/' },
    { url: '/seo/jenks-process-server/' },
    { url: '/seo/legal-posting-process-server/' },
    { url: '/seo/owasso-process-server/' },
    { url: '/seo/process-server-sand-springs/' },
    { url: '/seo/sand-springs-process-server/' },
    { url: '/seo/tulsa-process-server-comprehensive/' },
    { url: '/seo-dashboard/' },
    { url: '/services/' },
    { url: '/sitemap/' },
    { url: '/tulsa-process-server/' },
    { url: '/urgent-process-server/' },
    { url: '/voice-friendly' },
    { url: '/voice-search-marker/' },
    { url: '/voice-search-marker' },
    { url: '/weekend-emergency/' },
    { url: '/weekend-emergency' },
    { url: '/why-choose-us/' },
    { url: '/why-choose-us' },
  ];

  return (
    <>
      <Navbar />
      {/* Organization Schema Markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Website Sitemap</h1>
            <p className="text-xl text-gray-600">A complete guide to all pages on our website.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">All Pages</h2>
            <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-2">
              {sitemapLinks.map((page, idx) => (
                <li key={page.url + idx}>
                  <Link href={page.url} className="flex items-center text-gray-700 hover:text-blue-600 hover:underline">
                    <ChevronRight className="h-5 w-5 mr-2" />
                    {page.url}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default SitemapPage;
