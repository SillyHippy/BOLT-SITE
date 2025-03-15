import { Organization, WithContext } from 'schema-dts';

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Just Legal Solutions",
  "legalName": "Just Legal Solutions",
  "url": "https://justlegalsolutions.org",
  "logo": "https://justlegalsolutions.org/images/jls-logo.webp",
  "image": "https://justlegalsolutions.org/images/jls-logo.webp",
  "description": "Expert process serving, secure document delivery, court transfers, and skip tracing services in Oklahoma. Fast, reliable, and professional legal support services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "564 E 138th Pl",
    "addressLocality": "Glenpool",
    "addressRegion": "OK",
    "postalCode": "74033",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.9473",
    "longitude": "-96.0006"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Tulsa",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      }
    },
    {
      "@type": "City",
      "name": "Glenpool",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      }
    },
    {
      "@type": "City",
      "name": "Broken Arrow",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      }
    },
    {
      "@type": "City",
      "name": "Bixby",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      }
    },
    {
      "@type": "City",
      "name": "Jenks",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      }
    },
    {
      "@type": "City",
      "name": "Owasso",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      }
    },
    {
      "@type": "City",
      "name": "Sand Springs",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      }
    },
    {
      "@type": "City",
      "name": "Sapulpa",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      }
    }
  ],
  "telephone": "+15393676832",
  "email": "Info@JustLegalSolutions.org",
  "founder": {
    "@type": "Person",
    "name": "Joseph Iannazzi",
    "jobTitle": "Process Server"
  },
  "sameAs": [
    "https://justlegalsolutions.org"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  },
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Legal Support Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Process Serving",
        "description": "Professional process serving with standard, rush, and same-day options",
        "areaServed": "Tulsa Metropolitan Area"
      },
      {
        "@type": "Service",
        "name": "Document Delivery",
        "description": "Secure and timely document delivery services",
        "areaServed": "Tulsa Metropolitan Area"
      },
      {
        "@type": "Service",
        "name": "Court Transfers",
        "description": "Reliable court document transfer services",
        "areaServed": "Tulsa Metropolitan Area"
      },
      {
        "@type": "Service",
        "name": "Skip Tracing",
        "description": "Professional skip tracing services to locate individuals",
        "areaServed": "Oklahoma"
      }
    ]
  }
};