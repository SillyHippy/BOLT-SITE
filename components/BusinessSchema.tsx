import Script from 'next/script';

export default function BusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Just Legal Solutions",
    "description": "Professional process serving and legal document delivery throughout Tulsa County, Oklahoma. Same-day service available.",
    "url": "https://justlegalsolutions.org",
    "telephone": "(539) 367-6832",
    "email": "info@justlegalsolutions.org",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tulsa",
      "addressRegion": "OK",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1540",
      "longitude": "-95.9928"
    },
    "areaServed": [
      "Tulsa County",
      "Rogers County", 
      "Wagoner County",
      "Creek County",
      "Mayes County"
    ],
    "serviceType": [
      "Process Serving",
      "Legal Document Delivery",
      "Court Filing Services",
      "Courier Services",
      "Skip Tracing"
    ],
    "priceRange": "$40-$150",
    "openingHours": "Mo-Fr 08:00-17:00",
    "sameAs": [
      "https://www.facebook.com/justlegalsolutions",
      "https://www.linkedin.com/company/just-legal-solutions"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Excellent process serving. Professional, fast, and reliable. Highly recommend for any legal document delivery needs."
      }
    ]
  };

  return (
    <Script
      id="business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
