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
  // Improved list with descriptive labels for each page
  const sitemapLinks = [
    { url: '/', label: 'Home' },
    { url: '/faq', label: 'FAQ (redirects to Ultimate Guide)' },
    { url: '/pricing', label: 'Pricing' },
    { url: '/resources', label: 'Resources' },
    { url: '/payments', label: 'Payments' },
    { url: '/backlinks', label: 'Backlinks' },
    { url: '/courier-services-tulsa', label: 'Courier Services Tulsa' },
    { url: '/tulsa-county', label: 'Tulsa County Process Server' },
    { url: '/tulsa-process-server', label: 'Tulsa Process Server' },
    { url: '/urgent-process-server', label: 'Urgent Process Server' },
    { url: '/ultimate-guide-process-serving-oklahoma', label: 'Ultimate Guide to Process Serving Oklahoma' },
    { url: '/seo-dashboard', label: 'SEO Dashboard' },
    { url: '/process-server-tulsa', label: 'Process Server Tulsa' },
    { url: '/services', label: 'Services' },
    // SEO Pages
    { url: '/seo/bixby-process-server', label: 'Bixby Process Server' },
    { url: '/seo/broken-arrow-process-server', label: 'Broken Arrow Process Server' },
    { url: '/seo/eviction-notice-process-server', label: 'Eviction Notice Process Server' },
    { url: '/seo/glenpool-process-server', label: 'Glenpool Process Server' },
    { url: '/seo/jenks-process-server', label: 'Jenks Process Server' },
    { url: '/seo/legal-posting-process-server', label: 'Legal Notice Posting Service' },
    { url: '/seo/owasso-process-server', label: 'Owasso Process Server' },
    { url: '/seo/process-server-bixby', label: 'Process Server Bixby' },
    { url: '/seo/process-server-broken-arrow', label: 'Process Server Broken Arrow' },
    { url: '/seo/process-server-fart-town', label: 'Process Server Fart Town' },
    { url: '/seo/sand-springs-process-server', label: 'Sand Springs Process Server' },
    { url: '/seo/tulsa-process-server-comprehensive', label: 'Comprehensive Tulsa Process Server' },
    // Add more as needed
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Map className="inline-block mr-2" /> All Pages
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sitemapLinks.map(({ url, label }) => (
            <div key={url} className="mb-2 flex items-center">
              <ChevronRight className="w-5 h-5 mr-2 text-blue-600" />
              <Link href={url} className="text-blue-700 hover:underline text-lg" aria-label={label || url}>
                {label || url}
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
