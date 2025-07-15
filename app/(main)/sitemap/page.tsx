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
  const mainPages = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Contact Us', url: '/contact' },
    { name: 'Resources', url: '/resources' },
    { name: 'Competitor Analysis', url: '/competitor-analysis' },
  ];

  const servicePages = [
    { name: 'Urgent Process Server', url: '/urgent-process-server' },
    { name: 'Tulsa Process Server', url: '/tulsa-process-server' },
    { name: 'Tulsa County Process Server', url: '/process-server-tulsa' },
    { name: 'Courier Services Tulsa', url: '/courier-services-tulsa' },
  ];
  
  const seoPages = [
    { name: 'Bixby Process Server', url: '/seo/bixby-process-server' },
    { name: 'Broken Arrow Process Server', url: '/seo/broken-arrow-process-server' },
    { name: 'Jenks Process Server', url: '/seo/jenks-process-server' },
    { name: 'Owasso Process Server', url: '/seo/owasso-process-server' },
    { name: 'Sand Springs Process Server', url: '/seo/sand-springs-process-server' },
    { name: 'Comprehensive Tulsa Process Server', url: '/seo/tulsa-process-server-comprehensive' },
    { name: 'Eviction Notice Process Server', url: '/seo/eviction-notice-process-server' },
    { name: 'Legal Posting Process Server', url: '/seo/legal-posting-process-server' },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Website Sitemap</h1>
            <p className="text-xl text-gray-600">A complete guide to all pages on our website.</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">Main Pages</h2>
              <ul className="space-y-3">
                {mainPages.map((page) => (
                  <li key={page.name}>
                    <Link href={page.url} className="flex items-center text-gray-700 hover:text-blue-600 hover:underline">
                      <ChevronRight className="h-5 w-5 mr-2" />
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">Our Services</h2>
               <ul className="space-y-3">
                {servicePages.map((page) => (
                  <li key={page.name}>
                    <Link href={page.url} className="flex items-center text-gray-700 hover:text-blue-600 hover:underline">
                      <ChevronRight className="h-5 w-5 mr-2" />
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">Service Area Pages</h2>
                 <ul className="space-y-3 grid grid-cols-1 sm:grid-cols-2">
                  {seoPages.map((page) => (
                    <li key={page.name}>
                      <Link href={page.url} className="flex items-center text-gray-700 hover:text-blue-600 hover:underline">
                        <ChevronRight className="h-5 w-5 mr-2" />
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
};

export default SitemapPage;
