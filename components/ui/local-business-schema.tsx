'use client';

import { useEffect, useMemo } from 'react';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  phone?: string;
  email?: string;
  url?: string;
  serviceArea?: string[];
  services?: string[];
}

export default function LocalBusinessSchema({
  name = "Just Legal Solutions",
  description = "Professional process serving and courier services in Tulsa, Oklahoma. Fast, reliable, and affordable legal document delivery.",
  address = {
    streetAddress: "Tulsa Metropolitan Area",
    addressLocality: "Tulsa",
    addressRegion: "Oklahoma",
    postalCode: "74101"
  },
  phone = "+1-(539) 367-6832",
  email = "info@justlegalsolutions.org",
  url = "https://justlegalsolutions.org",
  serviceArea = ["Tulsa", "Broken Arrow", "Owasso", "Bixby", "Jenks", "Sand Springs", "Sapulpa"],
  services = ["Process Serving", "Court Document Delivery", "Legal Courier Services", "Document Filing"]
}: LocalBusinessSchemaProps) {
  
  const schemaData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#business`,
    "name": name,
    "description": description,
    "url": url,
    "image": "https://justlegalsolutions.org/images/jls-logo.webp",
    "telephone": phone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1540",
      "longitude": "-95.9928"
    },
    "priceRange": "$30-$200",
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
          "name": "Regional Client"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Outstanding service coverage throughout Oklahoma. Professional and reliable.",
        "datePublished": "2024-12-01"
      }
    ],
    "areaServed": serviceArea.map(area => ({
      "@type": "City",
      "name": area,
      "containedInPlace": {
        "@type": "State", 
        "name": "Oklahoma"
      }
    })),
    "serviceType": services,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": services.map((service, index) => ({
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
          "name": service,
          "description": `Professional ${service.toLowerCase()} in Tulsa, Oklahoma`
        }
      }))
    },
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Check, Online Payment",
    "sameAs": [
      // Add your social media profiles here
      // "https://www.facebook.com/justlegalsolutions",
      // "https://www.linkedin.com/company/justlegalsolutions"
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/card/calendar`
      },
      "result": {
        "@type": "Reservation",
        "name": "Schedule Legal Service"
      }
    }
  }), [name, description, address, phone, email, url, serviceArea, services]);

  useEffect(() => {
    // Add schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData, null, 2);
    script.id = 'local-business-schema';
    
    // Remove existing schema if present
    const existing = document.getElementById('local-business-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const schemaScript = document.getElementById('local-business-schema');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [schemaData]);

  return null; // This component doesn't render anything visible
}

// Enhanced Local Business Schema for SEO pages
export function LocalSEOSchema({ city, service }: { city?: string; service?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://justlegalsolutions.org/#localbusiness-${city?.toLowerCase().replace(/\s+/g, '-') || 'main'}`,
    "name": `Just Legal Solutions${city ? ` - ${city}` : ''}`,
    "description": `Professional process serving${service ? ` and ${service}` : ''} in ${city || 'Oklahoma'}${city ? `, Oklahoma` : ''}. Licensed and bonded process servers.`,
    "url": "https://justlegalsolutions.org",
    "image": "https://justlegalsolutions.org/images/jls-logo.webp",
    "telephone": "(539) 367-6832",
    "email": "info@justlegalsolutions.org",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city || "Tulsa",
      "addressRegion": "Oklahoma",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city === "Tulsa" ? "36.1540" : "36.0766",
      "longitude": city === "Tulsa" ? "-95.9928" : "-95.8395"
    },
    "openingHours": [
      "Mo-Su 00:00-23:59"
    ],
    "priceRange": "$30-$200",
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
          "name": "Local Client"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": `Excellent process serving in ${city || 'Oklahoma'}. Fast and professional.`,
        "datePublished": "2024-10-01"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
