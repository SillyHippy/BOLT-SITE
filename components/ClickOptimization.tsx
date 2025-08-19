import React from 'react';
import BreadcrumbSchema from './ui/breadcrumb-schema';

interface ClickOptimizationProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function ClickOptimization({
  title = "🚀 Tulsa Process Server | Same-Day Service | Just Legal Solutions",
  description = "⚡ URGENT Process Serving in Tulsa OK | ✅ Same-Day Service | 💯 Professional & Reliable | 📞 Call Now for Instant Quote!",
  url = "https://justlegalsolutions.org",
  image = "https://justlegalsolutions.org/jls-logo.png"
}: ClickOptimizationProps) {
  const optimizedSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Just Legal Solutions - Tulsa Process Server",
    "description": "Professional process serving company. Same-day service, licensed staff, competitive rates.",
    "url": url,
    "image": image,
    "telephone": "(539) 367-6832",
    "priceRange": "$30-$200",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tulsa",
      "addressRegion": "OK",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.1540,
      "longitude": -95.9928
    },
    "areaServed": [
      "Tulsa, OK",
      "Broken Arrow, OK", 
      "Owasso, OK",
      "Bixby, OK",
      "Jenks, OK",
      "Sand Springs, OK"
    ],
    "serviceType": [
      "Process Serving",
      "Document Delivery", 
      "Legal Courier Services",
      "Subpoena Service",
      "Court Filing"
    ],
    "availableLanguage": ["English"],
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
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
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Process Serving",
            "description": "Professional document delivery within 3-5 business days. Starting at $30."
          },
          "priceRange": "$30-$60",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Rush Process Serving",
            "description": "Expedited document delivery within 1-2 business days. Starting at $30."
          },
          "priceRange": "$30-$100",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Same-Day Process Serving",
            "description": "Urgent document delivery within 24 hours. Starting at $30."
          },
          "priceRange": "$30-$200",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <>
      {/* Schema markup only - meta tags handled by Next.js metadata */}
      
      {/* Enhanced Schema for Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(optimizedSchema) }}
      />
      
      {/* Use the BreadcrumbSchema component for proper formatting */}
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Process Server Tulsa", url: "/process-server-tulsa" }
        ]}
      />
    </>
  );
}
