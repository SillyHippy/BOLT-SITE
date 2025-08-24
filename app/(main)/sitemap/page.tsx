import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Map, FileText, ChevronRight } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Sitemap | Just Legal Solutions',
  description: 'Sitemap for Just Legal Solutions—navigate all services, resources, and legal support pages in one place.',
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
    // Main Pages
    { url: '/', label: 'Home' },
    { url: '/contact', label: 'Contact Us' },
    { url: '/pricing', label: 'Pricing' },
    { url: '/resources', label: 'Resources' },
    { url: '/payments', label: 'Payments' },
    { url: '/services', label: 'Services' },
    { url: '/about', label: 'About / Our Story' },
    { url: '/why-choose-us', label: 'Why Choose Us' },
    
    // Process Server Pages
    { url: '/tulsa-process-server', label: 'Tulsa Process Server' },
    { url: '/urgent-process-server', label: 'Urgent Process Server' },
    { url: '/weekend-emergency', label: 'Weekend Emergency Service' },
    { url: '/courier-services-tulsa', label: 'Courier Services Tulsa' },
    
    // Guide & Resources
    { url: '/ultimate-guide-process-serving-oklahoma', label: 'Ultimate Guide to Process Serving Oklahoma' },
    
    // Service Areas
    { url: '/service-areas', label: 'Service Areas Overview' },
    { url: '/service-areas/broken-arrow', label: 'Broken Arrow Process Server' },
    { url: '/service-areas/owasso', label: 'Owasso Process Server' },
    { url: '/service-areas/bixby', label: 'Bixby Process Server' },
    { url: '/service-areas/jenks', label: 'Jenks Process Server' },
    { url: '/service-areas/sand-springs', label: 'Sand Springs Process Server' },
    { url: '/service-areas/glenpool', label: 'Glenpool Process Server' },
    { url: '/service-areas/collinsville', label: 'Collinsville Process Server' },
    { url: '/service-areas/skiatook', label: 'Skiatook Process Server' },
    { url: '/service-areas/claremore', label: 'Claremore Process Server' },
    { url: '/service-areas/catoosa', label: 'Catoosa Process Server' },
    { url: '/service-areas/bartlesville', label: 'Bartlesville Process Server' },
    { url: '/service-areas/sapulpa', label: 'Sapulpa Process Server' },
    { url: '/service-areas/kellyville', label: 'Kellyville Process Server' },
    { url: '/service-areas/bristow', label: 'Bristow Process Server' },
    { url: '/service-areas/wagoner', label: 'Wagoner Process Server' },
    { url: '/service-areas/coweta', label: 'Coweta Process Server' },
    { url: '/service-areas/pawhuska', label: 'Pawhuska Process Server' },
    { url: '/service-areas/pryor', label: 'Pryor Process Server' },
    
    // County Pages
    { url: '/counties/tulsa-county', label: 'Tulsa County Services' },
    { url: '/counties/rogers-county', label: 'Rogers County Services' },
    { url: '/counties/washington-county', label: 'Washington County Services' },
    { url: '/counties/creek-county', label: 'Creek County Services' },
    { url: '/counties/wagoner-county', label: 'Wagoner County Services' },
    { url: '/counties/osage-county', label: 'Osage County Services' },
    { url: '/counties/mayes-county', label: 'Mayes County Services' },
    
    // SEO Pages (only ones not redirecting)
    { url: '/seo/eviction-notice-process-server', label: 'Eviction Notice Process Server' },
    { url: '/seo/glenpool-process-server', label: 'Glenpool Process Server SEO' },
    { url: '/seo/legal-posting-process-server', label: 'Legal Notice Posting Service' },
    { url: '/seo/owasso-process-server', label: 'Owasso Process Server SEO' },
    { url: '/seo/sand-springs-process-server', label: 'Sand Springs Process Server SEO' },
    { url: '/seo/what-is-a-process-server', label: 'What is a Process Server?' },
    
    // Tools & Analytics
    { url: '/backlinks', label: 'Backlinks' },
    { url: '/seo-dashboard', label: 'SEO Dashboard' },
    { url: '/competitor-analysis', label: 'Competitor Analysis' },
    { url: '/local-seo-marker', label: 'Local SEO Marker' },
    { url: '/multi-search-marker', label: 'Multi Search Marker' },
    { url: '/performance-marker', label: 'Performance Marker' },
    { url: '/platform-supremacy', label: 'Platform Supremacy' },
    { url: '/security-policy', label: 'Security Policy' },
    { url: '/voice-search-marker', label: 'Voice Search Marker' },
    
    // Card & Scheduling
    { url: '/card', label: 'Business Card' },
    { url: '/card/calendar', label: 'Calendar Scheduling' },
    
    // --- 2025 Feature/Guide Pages ---
    { url: '/oklahoma-process-server-best-practices-checklist-2025', label: 'Process Server Best Practices Checklist 2025' },
    { url: '/oklahoma-legal-service-areas-2025', label: 'Oklahoma Legal Service Areas 2025' },
    { url: '/oklahoma-electronic-service-guide-2025', label: 'Oklahoma Electronic Service Guide 2025' },
    { url: '/oklahoma-case-law-service-process-2025', label: 'Oklahoma Case Law Service Process 2025' },
    { url: '/oklahoma-process-server-pricing-2025', label: 'Process Server Pricing Guide 2025' },
    { url: '/oklahoma-process-server-technology-2025', label: 'Process Server Technology Trends 2025' },
    { url: '/oklahoma-process-server-faq-2025', label: 'Process Server FAQ 2025' },
    { url: '/oklahoma-process-serving-costs-comparison-2025', label: 'Process Serving Costs Comparison 2025' },
    { url: '/ai-skip-tracing-guide-oklahoma-2025', label: 'AI Skip Tracing Guide Oklahoma 2025' },
    { url: '/process-serving-mistakes-guide-2025', label: 'Process Serving Mistakes Guide 2025' },
    { url: '/high-profile-service-protocols-tulsa-2025', label: 'High-Profile Service Protocols Tulsa 2025' },
    { url: '/family-law-service-guide-tulsa-2025', label: 'Family Law Service Guide Tulsa 2025' },
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Map className="inline-block mr-2" /> Complete Sitemap
        </h1>
        
        <div className="mb-8 text-gray-600">
          <p>Navigate to any page on our website. All {sitemapLinks.length} pages are listed below, organized by category.</p>
        </div>

        {/* Service Areas Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800 border-b-2 border-blue-200 pb-2">
            Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapLinks
              .filter(link => link.url.startsWith('/service-areas/'))
              .map(({ url, label }) => (
                <div key={url} className="flex items-center bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-blue-600" />
                  <Link href={url} className="text-blue-700 hover:underline font-medium">
                    {label}
                  </Link>
                </div>
              ))}
          </div>
        </section>

        {/* County Pages Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-green-800 border-b-2 border-green-200 pb-2">
            County Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapLinks
              .filter(link => link.url.startsWith('/counties/'))
              .map(({ url, label }) => (
                <div key={url} className="flex items-center bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-green-600" />
                  <Link href={url} className="text-green-700 hover:underline font-medium">
                    {label}
                  </Link>
                </div>
              ))}
          </div>
        </section>

        {/* Main Pages Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-purple-800 border-b-2 border-purple-200 pb-2">
            Main Pages & Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sitemapLinks
              .filter(link => 
                !link.url.startsWith('/service-areas/') && 
                !link.url.startsWith('/counties/') && 
                !link.url.startsWith('/seo/') &&
                !link.url.includes('marker') &&
                !link.url.includes('dashboard') &&
                !link.url.includes('analysis') &&
                link.url !== '/service-areas'
              )
              .map(({ url, label }) => (
                <div key={url} className="flex items-center bg-purple-50 p-3 rounded-lg hover:bg-purple-100 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-purple-600" />
                  <Link href={url} className="text-purple-700 hover:underline font-medium">
                    {label}
                  </Link>
                </div>
              ))}
          </div>
        </section>

        {/* SEO & Marketing Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-orange-800 border-b-2 border-orange-200 pb-2">
            SEO & Marketing Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sitemapLinks
              .filter(link => 
                link.url.startsWith('/seo/') || 
                link.url.includes('marker') ||
                link.url.includes('dashboard') ||
                link.url.includes('analysis') ||
                link.url.includes('supremacy')
              )
              .map(({ url, label }) => (
                <div key={url} className="flex items-center bg-orange-50 p-3 rounded-lg hover:bg-orange-100 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 text-orange-600" />
                  <Link href={url} className="text-orange-700 hover:underline font-medium">
                    {label}
                  </Link>
                </div>
              ))}
          </div>
        </section>
      </main>
      <UnifiedSchema
        pageType="generic"
        url="https://justlegalsolutions.org/sitemap"
        title="Sitemap | Just Legal Solutions"
        description="Sitemap for Just Legal Solutions—navigate all services, resources, and legal support pages in one place."
        organizationDetails={{
          name: "Just Legal Solutions",
          url: "https://justlegalsolutions.org",
          logo: "https://justlegalsolutions.org/logo.png",
          contactPoint: {
            telephone: "+1-539-367-6832",
            email: "info@justlegalsolutions.org"
          },
          address: {
            streetAddress: "564 E 138th PL",
            addressLocality: "Glenpool",
            addressRegion: "OK",
            postalCode: "74033",
            addressCountry: "US"
          }
        }}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 142
        }}
      />
    </>
  )
}

export default SitemapPage;
