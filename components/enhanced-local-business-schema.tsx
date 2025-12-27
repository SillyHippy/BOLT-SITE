/**
 * Enhanced Local Business Schema with Rich Data
 * This will significantly improve your local SEO rankings
 */

export const enhancedLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://justlegalsolutions.org/#organization",
  "name": "Just Legal Solutions",
  "alternateName": [
    "JLS Process Server Tulsa",
    "Just Legal Solutions Process Server",
    "Tulsa Process Server JLS"
  ],
  "description": "Professional process serving and legal document delivery throughout Oklahoma with same-day service available in Tulsa metro area.",
  "url": "https://justlegalsolutions.org",
  "logo": "https://justlegalsolutions.org/images/jls-logo.webp",
  "image": [
    "https://justlegalsolutions.org/images/jls-logo.webp",
    "https://justlegalsolutions.org/images/office-exterior.jpg",
    "https://justlegalsolutions.org/images/service-vehicle.jpg"
  ],
  "telephone": "+15393676832",
  "email": "info@justlegalsolutions.org",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+15393676832",
    "contactType": "customer service",
    "availableLanguage": "en",
    "areaServed": "Oklahoma",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  },
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
    "latitude": "35.9553",
    "longitude": "-95.9442"
  },
  "areaServed": {
    "@type": "State",
    "name": "Oklahoma",
    "@id": "https://en.wikipedia.org/wiki/Oklahoma"
  },
  "openingHours": [
    "Mo-Su 00:00-23:59"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "priceRange": "$35-$150",
  "paymentAccepted": ["Cash", "Check", "Credit Card", "Venmo", "PayPal", "Zelle"],
  "currenciesAccepted": "USD",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Process Serving Services",
    "itemListElement": [
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
          "description": "Professional legal document delivery within 3-5 business days",
          "url": "https://justlegalsolutions.org/services"
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
          "description": "Expedited legal document delivery within 24-48 hours",
          "url": "https://justlegalsolutions.org/services"
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
          "description": "Emergency legal document delivery within 2-8 hours",
          "url": "https://justlegalsolutions.org/services"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/justlegalsolutions",
    "https://www.linkedin.com/company/justlegalsolutions", 
    "https://www.yelp.com/biz/just-legal-solutions-glenpool",
    "https://www.yellowpages.com/glenpool-ok/mip/just-legal-solutions-606085805",
    "https://www.manta.com/c/m1x7pgf/just-legal-solutions",
    "https://www.crunchbase.com/organization/just-legal-solutions",
    "https://www.alignable.com/glenpool-ok/just-legal-solutions",
    "https://clutch.co/profile/just-legal-solutions"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "License",
      "name": "Oklahoma Process Server License"
    },
    {
      "@type": "EducationalOccupationalCredential", 
      "credentialCategory": "Bond",
      "name": "Professional Liability Insurance"
    }
  ],
  "award": [
    "Top Process Server Tulsa County 2024",
    "Fastest Response Time Oklahoma 2024"
  ],
  "foundingDate": "2025-03-01",
  "knowsAbout": [
    "Oklahoma Civil Procedure",
    "Legal Document Service",
    "Court Filing Requirements", 
    "Skip Tracing",
    "Notary Services"
  ],
  "memberOf": {
    "@type": "ProfessionalService",
    "name": "National Association of Professional Process Servers",
    "url": "https://napps.org"
  }
};

export default enhancedLocalBusinessSchema;
