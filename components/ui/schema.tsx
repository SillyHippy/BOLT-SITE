import { Organization, WithContext } from 'schema-dts';

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Just Legal Solutions",
  "description": "Professional process serving and legal support services in Oklahoma",
  "url": "https://justlegalsolutions.org",
  "logo": "https://justlegalsolutions.org/images/jls-logo.webp",
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
    "longitude": "-96.0003"
  },
  "telephone": "+15393676832",
  "email": "Info@JustLegalSolutions.org",
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
  },
  "sameAs": [
    "https://justlegalsolutions.org"
  ]
};