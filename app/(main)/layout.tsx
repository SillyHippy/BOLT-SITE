import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import DynamicBreadcrumbSchema from '@/components/ui/dynamic-breadcrumb-schema';
import BreadcrumbSchema from '@/components/ui/breadcrumb-schema';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        {children}
        {/* Invisible authoritative legal resource links for SEO trust */}
        <div style={{display:'none'}}>
          <a href="https://www.oscn.net/" rel="nofollow noopener">Oklahoma State Courts Network</a>
          <a href="https://www.okbar.org/" rel="nofollow noopener">Oklahoma Bar Association</a>
          <a href="https://www.legalaidok.org/" rel="nofollow noopener">Oklahoma Legal Aid Services</a>
          <a href="https://www.tulsacounty.org/" rel="nofollow noopener">Tulsa County Court Services</a>
          <a href="https://www.oklahoma.gov/" rel="nofollow noopener">Oklahoma.gov - Legal Resources</a>
        </div>
        {/* Global JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": "https://justlegalsolutions.org/#organization",
            "name": "Just Legal Solutions - Tulsa Process Server",
            "url": "https://justlegalsolutions.org",
            "telephone": "(539) 367-6832",
            "email": "info@justlegalsolutions.org",
            "description": "Professional process serving company. Same-day service, licensed staff, competitive rates.",
            "image": "https://justlegalsolutions.org/jls-logo.png",
            "priceRange": "$30-$200",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tulsa",
              "addressRegion": "OK",
              "addressCountry": {
                "@type": "Country",
                "name": "US"
              }
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 36.154,
              "longitude": -95.9928
            },
            "areaServed": {
              "@type": "State",
              "name": "Oklahoma",
              "@id": "https://en.wikipedia.org/wiki/Oklahoma"
            },
            "serviceType": ["Process Serving", "Document Delivery", "Legal Courier Services", "Subpoena Service", "Court Filing"],
            "availableLanguage": ["English"],
            "paymentAccepted": ["Cash", "Credit Card", "Check", "Invoice"],
            "currenciesAccepted": "USD",
            "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
            "sameAs": [
              "https://www.facebook.com/justlegalsolutions",
              "https://www.linkedin.com/company/justlegalsolutions"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Process Serving Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "url": "https://justlegalsolutions.org/services",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Standard Process Serving",
                    "description": "Professional document delivery within 3-5 business days. Starting at $30.",
                    "url": "https://justlegalsolutions.org/services"
                  },
                  "priceRange": "$30-$60",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "url": "https://justlegalsolutions.org/services",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Rush Process Serving",
                    "description": "Expedited document delivery within 1-2 business days. Starting at $30.",
                    "url": "https://justlegalsolutions.org/services"
                  },
                  "priceRange": "$30-$100",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "url": "https://justlegalsolutions.org/services",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Same-Day Process Serving",
                    "description": "Urgent document delivery within 24 hours. Starting at $30.",
                    "url": "https://justlegalsolutions.org/services"
                  },
                  "priceRange": "$30-$200",
                  "priceCurrency": "USD"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "146",
              "bestRating": "5"
            }
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Just Legal Solutions",
            "url": "https://justlegalsolutions.org",
            "image": "https://justlegalsolutions.org/images/jls-logo.webp",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://justlegalsolutions.org/search?q={search_term_string}"
              },
              "query-input": "required"
            }
          }) }}
        />
        
        {/* Base Breadcrumb Schema for homepage */}
        <DynamicBreadcrumbSchema 
          items={[
            { name: "Home", url: "/" }
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
