import Script from 'next/script';

interface DuckDuckGoOptimizationProps {
  businessName?: string;
  focusKeywords?: string[];
  privacyFocused?: boolean;
  quickAnswers?: boolean;
}

export default function DuckDuckGoOptimization({ 
  businessName = "Just Legal Solutions",
  focusKeywords = ["process server tulsa", "legal document delivery", "oklahoma process serving", "emergency legal service"],
  privacyFocused = true,
  quickAnswers = true
}: DuckDuckGoOptimizationProps) {
  const duckDuckGoSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "foundingDate": "2025-03-01",
    "name": businessName,
    "description": "Professional process serving and legal document delivery throughout Oklahoma with guaranteed privacy and confidential handling",
    "url": "https://justlegalsolutions.org",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://justlegalsolutions.org",
      "name": "Just Legal Solutions - Professional Process Server in Oklahoma",
      "description": "Confidential process serving with professional legal document delivery throughout Oklahoma. Available 24/7 for emergency service.",
      "keywords": focusKeywords.join(", "),
      "inLanguage": "en-US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+15393676832",
      "contactType": "customer service",
      "areaServed": "Oklahoma"
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
      "latitude": "36.1540",
      "longitude": "-95.9928"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Process Serving Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Standard Process Serving",
          "description": "Professional legal document delivery within 3-5 business days throughout Oklahoma",
          "url": "https://justlegalsolutions.org/services"
        },
        {
          "@type": "Service",
          "name": "Emergency Process Serving", 
          "description": "Urgent legal document delivery when time-sensitive situations require immediate attention",
          "url": "https://justlegalsolutions.org/services"
        },
        {
          "@type": "Service",
          "name": "Skip Tracing Services",
          "description": "Professional location services to find individuals for legal document delivery",
          "url": "https://justlegalsolutions.org/services"
        }
      ]
    }
  };

  return (
    <Script
      id="duckduckgo-optimization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(duckDuckGoSchema) }}
    />
  );
}
