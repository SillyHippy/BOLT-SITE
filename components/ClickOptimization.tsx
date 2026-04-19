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
  image = "https://justlegalsolutions.org/jls-logo.webp"
}: ClickOptimizationProps) {
  const optimizedSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Just Legal Solutions - Tulsa Process Server",
    "description": "Professional process serving company. Same-day service, licensed staff, competitive rates.",
    "url": url,
    "image": image,
    "telephone": "+15393676832",
    "priceRange": "$30-$265",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "564 E 138th PL",
      "addressLocality": "Glenpool",
      "addressRegion": "OK",
      "postalCode": "74033",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.1540,
      "longitude": -95.9928
    },
    "areaServed": {
      "@type": "State",
      "name": "Oklahoma",
      "@id": "https://en.wikipedia.org/wiki/Oklahoma"
    },
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
          "url": "https://justlegalsolutions.org/services",
          "price": "30.00",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "30.00",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false
          },
          "itemOffered": {
            "@type": "Service",
            "name": "Single-Attempt Posting",
            "description": "Single-attempt posting/service for straightforward addresses with notarized affidavit of attempt."
          }
        },
        {
          "@type": "Offer",
          "url": "https://justlegalsolutions.org/services",
          "price": "60.00",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "60.00",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false
          },
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Process Serving",
            "description": "Professional document delivery within 5-7 business days, up to 3 attempts. Includes notarized affidavit of service."
          }
        },
        {
          "@type": "Offer",
          "url": "https://justlegalsolutions.org/services",
          "price": "100.00",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "100.00",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false
          },
          "itemOffered": {
            "@type": "Service",
            "name": "Rush Process Serving",
            "description": "Expedited document delivery within 1-3 business days."
          }
        },
        {
          "@type": "Offer",
          "url": "https://justlegalsolutions.org/services",
          "price": "150.00",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "150.00",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false
          },
          "itemOffered": {
            "@type": "Service",
            "name": "Same-Day Process Serving",
            "description": "Same-business-day legal document delivery within 4-8 hours."
          }
        },
        {
          "@type": "Offer",
          "url": "https://justlegalsolutions.org/services",
          "price": "265.00",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "265.00",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false
          },
          "itemOffered": {
            "@type": "Service",
            "name": "After-Hours Rush",
            "description": "Critical legal document delivery outside business hours with 2-hour response."
          }
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
          { name: "Process Server Tulsa", url: "/tulsa-process-server" }
        ]}
      />
    </>
  );
}
