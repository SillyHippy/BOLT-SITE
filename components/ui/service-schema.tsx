import Script from 'next/script';

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceArea: string;
  priceRange?: string;
  serviceType?: string;
}

export default function ServiceSchema({ 
  serviceName,
  serviceDescription,
  serviceArea,
  priceRange = "$35-$265",
  serviceType = "Process Serving"
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "serviceType": serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://justlegalsolutions.org/#localbusiness",
      "name": "Just Legal Solutions",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "564 E 138th PL",
        "addressLocality": "Glenpool",
        "addressRegion": "OK",
        "postalCode": "74033",
        "addressCountry": "US"
      },
      "telephone": "+15393676832",
      "url": "https://justlegalsolutions.org"
    },
    "areaServed": {
      "@type": "Place",
      "name": serviceArea
    },
    "offers": {
      "@type": "Offer",         "url": "https://justlegalsolutions.org/services",
      "priceRange": priceRange,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    },
    "category": "Legal Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Process Serving Services",
      "itemListElement": [
        {
          "@type": "Offer", "url": "https://justlegalsolutions.org/services",
          "itemOffered": {
            "@type": "Service",
            "name": "Single-Attempt Posting",
            "description": "Single-attempt posting/service for straightforward addresses. Includes notarized affidavit of attempt."
          },
          "price": "35",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", "url": "https://justlegalsolutions.org/services",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Process Serving",
            "description": "Professional legal document delivery within 5-7 business days, up to 3 attempts. Includes notarized affidavit of service."
          },
          "price": "60",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", "url": "https://justlegalsolutions.org/services",
          "itemOffered": {
            "@type": "Service",
            "name": "Rush Process Serving",
            "description": "Expedited legal document delivery within 1-3 business days."
          },
          "price": "100",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", "url": "https://justlegalsolutions.org/services",
          "itemOffered": {
            "@type": "Service",
            "name": "Same-Day Process Serving",
            "description": "Same-business-day legal document delivery within 4-8 hours."
          },
          "price": "150",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", "url": "https://justlegalsolutions.org/services",
          "itemOffered": {
            "@type": "Service",
            "name": "Triple-Attempt Service",
            "description": "Up to three documented attempts at multiple addresses or time windows."
          },
          "price": "200",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", "url": "https://justlegalsolutions.org/services",
          "itemOffered": {
            "@type": "Service",
            "name": "After-Hours Rush",
            "description": "Critical legal document delivery outside business hours with 2-hour response."
          },
          "price": "265",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
