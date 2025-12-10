import Script from 'next/script';

interface EnhancedServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceArea: string;
  priceRange?: string;
  serviceType?: string;
  additionalServices?: string[];
  businessHours?: string;
  contactInfo?: {
    phone: string;
    email: string;
  };
}

export default function EnhancedServiceSchema({ 
  serviceName,
  serviceDescription,
  serviceArea,
  priceRange = "Contact for Quote",
  serviceType = "Process Serving",
  additionalServices = [],
  businessHours = "Mo-Su 00:00-23:59",
  contactInfo = { phone: "(539) 367-6832", email: "info@justlegalsolutions.org" }
}: EnhancedServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "serviceType": serviceType,
    "category": "Legal Services",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://justlegalsolutions.org/#organization",
      "name": "Just Legal Solutions",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "564 E 138th PL",
        "addressLocality": "Glenpool",
        "addressRegion": "OK",
        "postalCode": "74033",
        "addressCountry": "US"
      },
      "telephone": contactInfo.phone,
      "email": contactInfo.email,
      "url": "https://justlegalsolutions.org",
      "openingHours": businessHours,
      "priceRange": priceRange,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "146",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": serviceArea,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "36.1540",
        "longitude": "-95.9928"
      }
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://justlegalsolutions.org/card/calendar",
      "serviceName": "Online Scheduling",
      "availableLanguage": "English"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://justlegalsolutions.org/services",
      "description": "Professional legal document service with competitive rates based on urgency and location",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0],
      "seller": {
        "@type": "LocalBusiness",
        "@id": "https://justlegalsolutions.org/#organization",
        "name": "Just Legal Solutions",
        "url": "https://justlegalsolutions.org",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "564 E 138th PL",
          "addressLocality": "Glenpool",
          "addressRegion": "OK",
          "postalCode": "74033",
          "addressCountry": "US"
        }
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceType} Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "url": "https://justlegalsolutions.org/services",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Service",
            "description": "Professional service within 3-5 business days"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "description": "Contact for competitive rates"
          }
        },
        {
"@type": "Offer",
          "url": "https://justlegalsolutions.org/services",          "itemOffered": {
            "@type": "Service",
            "name": "Rush Service",
            "description": "Expedited service within 1-2 business days"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD", 
            "description": "Premium rates for expedited service"
          }
        },
        {
"@type": "Offer",
          "url": "https://justlegalsolutions.org/services",          "itemOffered": {
            "@type": "Service",
            "name": "Same-Day Service",
            "description": "Emergency service within same business day"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "description": "Emergency rates for immediate service"
          }
        },
        {
"@type": "Offer",
          "url": "https://justlegalsolutions.org/services",          "itemOffered": {
            "@type": "Service",
            "name": "Emergency 2-Hour Service",
            "description": "Critical delivery when time-sensitive situations require immediate attention"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "description": "Expedited rates for 2-hour service"
          }
        },
        ...additionalServices.map(service => ({
"@type": "Offer",
          "url": "https://justlegalsolutions.org/services",          "itemOffered": {
            "@type": "Service",
            "name": service,
            "description": `Professional ${service.toLowerCase()} services`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "description": "Contact for service-specific rates"
          }
        }))
      ]
    },
    "priceRange": priceRange,
    "image": "https://justlegalsolutions.org/images/jls-logo.webp",
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
      "worstRating": "1",
      "description": "Verified reviews from Google, Yelp, Facebook, and client testimonials"
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
          "name": "Lisa Anderson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Exceptional service quality and professional handling of legal documents.",
        "datePublished": "2024-12-20"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Service Client"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Professional service throughout Oklahoma with reliable document delivery.",
        "datePublished": "2024-09-15"
      }
    ],
    "isRelatedTo": [
      {
        "@type": "Service",
        "name": "Legal Document Delivery",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://justlegalsolutions.org/#organization",
          "name": "Just Legal Solutions",
          "url": "https://justlegalsolutions.org",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "564 E 138th PL",
            "addressLocality": "Glenpool",
            "addressRegion": "OK",
            "postalCode": "74033",
            "addressCountry": "US"
          }
        }
      },
      {
        "@type": "Service", 
        "name": "Court Filing Services",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://justlegalsolutions.org/#organization",
          "name": "Just Legal Solutions",
          "url": "https://justlegalsolutions.org",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "564 E 138th PL",
            "addressLocality": "Glenpool",
            "addressRegion": "OK",
            "postalCode": "74033",
            "addressCountry": "US"
          }
        }
      }
    ]
  };

  return (
    <Script
      id="enhanced-service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
