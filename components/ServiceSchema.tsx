import Script from 'next/script';

export default function ServiceSchema() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Process Serving Services",
    "description": "Professional legal document delivery and process serving throughout Tulsa County, Oklahoma.",
    "url": "https://justlegalsolutions.org/services",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://justlegalsolutions.org/#organization",
      "name": "Just Legal Solutions",
      "url": "https://justlegalsolutions.org",
      "telephone": "(539) 367-6832",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "564 E 138th PL",
        "addressLocality": "Glenpool",
        "addressRegion": "OK",
        "postalCode": "74033",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "36.1540",
        "longitude": "-95.9928"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Process Serving Services",
      "itemListElement": [
        {
          "@type": "Offer",         "url": "https://justlegalsolutions.org/services",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Process Serving",
            "description": "Professional document delivery within 3-5 business days",
            "url": "https://justlegalsolutions.org/services"
          },
          "price": "60",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",         "url": "https://justlegalsolutions.org/services", 
          "itemOffered": {
            "@type": "Service",
            "name": "Rush Process Serving",
            "description": "Expedited document delivery within 1-2 business days",
            "url": "https://justlegalsolutions.org/services"
          },
          "price": "100",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",         "url": "https://justlegalsolutions.org/services",
          "itemOffered": {
            "@type": "Service", 
            "name": "Same-Day Process Serving",
            "description": "Urgent document delivery on the same day",
            "url": "https://justlegalsolutions.org/services"
          },
          "price": "150",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",         "url": "https://justlegalsolutions.org/services",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Process Serving", 
            "description": "Critical document delivery within 2 hours",
            "url": "https://justlegalsolutions.org/services"
          },
          "price": "200",
          "priceCurrency": "USD"
        }
      ]
    },
    "priceRange": "$30-$200",
    "image": "https://justlegalsolutions.org/images/jls-logo.webp",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.154,
      "longitude": -95.9928
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": 146,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": [
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services"
        },
        "author": {
          "@type": "Person",
          "name": "Lisa Anderson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Exceptional service quality and professional handling of legal documents.",
        "datePublished": "2024-12-20"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Process Serving Services"
        },
        "author": {
          "@type": "Person",
          "name": "Oklahoma Client"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Reliable service throughout Oklahoma with professional document handling.",
        "datePublished": "2024-08-25"
      }
    ]
  };

  return (
    <script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
