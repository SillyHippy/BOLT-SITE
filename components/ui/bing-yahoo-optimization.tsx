import Script from 'next/script';

interface BingYahooOptimizationProps {
  businessName?: string;
  serviceTypes?: string[];
  expertise?: string[];
  serviceRadius?: number;
}

export default function BingYahooOptimization({ 
  businessName = "Just Legal Solutions",
  serviceTypes = ["Process Serving", "Legal Document Delivery", "Court Filing", "Skip Tracing"],
  expertise = ["Emergency Service", "Professional Delivery", "Statewide Coverage", "24/7 Availability"],
  serviceRadius = 100
}: BingYahooOptimizationProps) {
  const bingOptimizedSchema = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness", "ProfessionalService"],
    "@id": "https://justlegalsolutions.org/#organization",
    "name": businessName,
    "alternateName": ["JLS Process Server", "Just Legal Solutions Oklahoma"],
    "description": "Oklahoma's premier process serving company providing professional legal document delivery with 24/7 emergency service throughout the state",
    "url": "https://justlegalsolutions.org",
    "image": "https://justlegalsolutions.org/jls-logo.png",
    "priceRange": "$30-$200",
    "telephone": "(539) 367-6832",
    "email": "info@justlegalsolutions.org",
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
      "latitude": 36.154,
      "longitude": -95.9928
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "146",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
        "description": "24/7 Emergency Process Serving Available"
      }
    ],
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "David Thompson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Reliable and professional process server. Completed urgent service efficiently.",
        "datePublished": "2024-11-30"
      }
    ],
    "sameAs": [
      "https://justlegalsolutions.org/services",
      "https://justlegalsolutions.org/tulsa-process-server",
      "https://justlegalsolutions.org/tulsa-process-server"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+15393676832",
      "contactType": "customer service",
      "areaServed": "Oklahoma",
      "availableLanguage": "English",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certification",
        "name": "Oklahoma Process Server Certification"
      }
    ],
    "knowsAbout": expertise,
    "areaServed": [
      {
        "@type": "State",
        "name": "Oklahoma",
        "containsPlace": [
          {
            "@type": "City",
            "name": "Tulsa"
          },
          {
            "@type": "City", 
            "name": "Oklahoma City"
          },
          {
            "@type": "City",
            "name": "Broken Arrow"
          },
          {
            "@type": "City",
            "name": "Edmond"
          },
          {
            "@type": "City",
            "name": "Sapulpa"
          }
        ]
      }
    ],
    "serviceType": serviceTypes,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://justlegalsolutions.org"
    },
    "potentialAction": [
      {
        "@type": "ScheduleAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://justlegalsolutions.org/card/calendar"
        },
        "object": {
          "@type": "Service",
          "name": "Process Serving Appointment",
          "url": "https://justlegalsolutions.org/services"
        }
      }
    ],
    "brand": {
      "@type": "Brand",
      "name": businessName,
      "slogan": "Professional Process Serving - Available 24/7"
    },
    "award": "Top-Rated Oklahoma Process Server",
    "foundingDate": "2025-03-01",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "3-10"
    }
  };

  return (
    <Script
      id="bing-yahoo-optimization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(bingOptimizedSchema) }}
    />
  );
}
