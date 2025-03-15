import React from 'react';

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Just Legal Solutions",
    "image": "https://justlegalsolutions.org/images/jls-logo.webp",
    "description": "Professional process serving and legal support services in Oklahoma",
    "url": "https://justlegalsolutions.org",
    "telephone": "+15393676832",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "564 E 138th Pl",
      "addressLocality": "Glenpool",
      "addressRegion": "Oklahoma",
      "postalCode": "74033",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.9584,
      "longitude": -95.8678
    },
    "areaServed": {
      "@type": "State",
      "name": "Oklahoma"
    },
    "priceRange": "$75-$200",
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
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}