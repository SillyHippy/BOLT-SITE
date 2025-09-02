import Script from 'next/script';

interface WebsiteSchemaProps {
  url?: string;
  name?: string;
  description?: string;
  keywords?: string[];
}

export default function WebsiteSchema({ 
  url = "https://justlegalsolutions.org",
  name = "Just Legal Solutions",
  description = "Professional process serving and legal document delivery services throughout Oklahoma. Same-day, rush, and standard service options available.",
  keywords = ["process server", "legal document delivery", "Oklahoma", "Tulsa", "court documents"]
}: WebsiteSchemaProps) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "alternateName": "JLS Process Server",
    "url": url,
    "description": description,
    "keywords": keywords.join(", "),
    "inLanguage": "en-US",
    "copyrightYear": "2024",
    "copyrightHolder": {
      "@type": "Organization",
"foundingDate": "2025-03-01",
"description": "Professional process serving with over 50 years combined industry experience",
      "name": name
    },
    "publisher": {
      "@type": "Organization",
"foundingDate": "2025-03-01",
"description": "Professional process serving with over 50 years combined industry experience",
      "name": name,
      "url": url,
      "logo": {
        "@type": "ImageObject",
        "url": `${url}/contactlogo.png`,
        "width": 400,
        "height": 400
      }
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${url}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "Action",
        "target": {
          "@type": "EntryPoint", 
          "urlTemplate": `${url}/card/calendar`
        }
      }
    ],
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://justlegalsolutions.org/#localbusiness",
      "name": name,
      "description": description,
      "url": url,
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
      "areaServed": [
        {
          "@type": "State",
          "name": "Oklahoma"
        },
        {
          "@type": "City",
          "name": "Tulsa"
        },
        {
          "@type": "City", 
          "name": "Broken Arrow"
        },
        {
          "@type": "City",
          "name": "Sapulpa"
        }
      ],
      "serviceType": [
        "Process Serving",
        "Legal Document Delivery", 
        "Court Document Filing",
        "Skip Tracing Services"
      ],
      "priceRange": "$30-$200",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "36.154",
        "longitude": "-95.9928"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "146",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Oklahoma Client"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Reliable service throughout Oklahoma with professional document handling.",
          "datePublished": "2024-08-25"
        }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59",
          "description": "24/7 Emergency Process Serving Available"
        }
      ]
    },
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "Process Serving Services",
        "url": `${url}/services`,
        "description": "Professional process serving throughout Oklahoma"
      },
      {
        "@type": "WebPage",
        "name": "Pricing Information",
        "url": `${url}/pricing`,
        "description": "Transparent pricing for all process serving services"
      },
      {
        "@type": "WebPage",
        "name": "Service Areas",
        "url": `${url}/tulsa-process-server`,
        "description": "Complete coverage throughout Oklahoma with priority service in Tulsa County"
      }
    ]
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}
