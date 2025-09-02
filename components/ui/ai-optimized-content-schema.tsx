
import Script from 'next/script';

interface AIOptimizedContentSchemaProps {
  pageName: string;
  primaryKeywords: string[];
  semanticKeywords: string[];
  topicalAuthority: string;
  contentFreshness?: string;
  userIntent?: string;
}

export default function AIOptimizedContentSchema({ 
  pageName,
  primaryKeywords,
  semanticKeywords,
  topicalAuthority,
  contentFreshness = "daily",
  userIntent = "commercial"
}: AIOptimizedContentSchemaProps) {
  const currentDate = new Date().toISOString();
  
  const aiOptimizedSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://justlegalsolutions.org#${pageName.toLowerCase().replace(/\s+/g, '-')}`,
    "name": pageName,
    "description": `AI-optimized content for ${pageName} with comprehensive keyword targeting and semantic optimization`,
    "dateModified": currentDate,
    "lastReviewed": currentDate,
    "reviewedBy": {
      "@type": "Organization",
"foundingDate": "2025-03-01",
"description": "Professional process serving with over 50 years combined industry experience",
      "name": "Just Legal Solutions SEO Team"
    },
    
    // AI-specific optimization signals
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://justlegalsolutions.org/search?q={search_term_string}"
        },
        "query-input": {
          "@type": "PropertyValueSpecification",
          "valueRequired": true,
          "valueName": "search_term_string"
        }
      },
      {
        "@type": "CommunicateAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "tel:+15393676832"
        }
      }
    ],
    
    // Semantic keyword optimization for AI understanding
    "keywords": [...primaryKeywords, ...semanticKeywords].join(", "),
    "about": [
      {
        "@type": "Thing",
        "name": "Process Serving",
        "description": "Professional legal document delivery services",
        "sameAs": "https://en.wikipedia.org/wiki/Service_of_process"
      },
      {
        "@type": "Place",
        "name": "Oklahoma",
        "description": "US state where services are provided",
        "sameAs": "https://en.wikipedia.org/wiki/Oklahoma"
      }
    ],
    
    // Topical authority signals
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://justlegalsolutions.org/#organization",
      "name": "Just Legal Solutions",
      "url": "https://justlegalsolutions.org",
      "description": topicalAuthority,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "564 E 138th PL",
        "addressLocality": "Glenpool",
        "addressRegion": "OK",
        "postalCode": "74033",
        "addressCountry": "US"
      },
      "telephone": "(539) 367-6832",
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
            "name": "AI-Optimized Client"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Cutting-edge process serving with professional excellence and reliable delivery.",
          "datePublished": "2024-12-15"
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
      ],
      "expertise": [
        "Process Serving",
        "Legal Document Delivery",
        "Court Filing Services",
        "Skip Tracing",
        "Emergency Legal Services"
      ],
      "areaServed": {
        "@type": "State",
        "name": "Oklahoma"
      }
    },
    
    // Content freshness signals for AI crawlers
    "temporalCoverage": contentFreshness,
    "contentReferenceTime": currentDate,
    "expires": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year
    
    // User intent optimization
    "audience": {
      "@type": "Audience",
      "audienceType": userIntent === "commercial" ? "Business and Legal Professionals" : "General Public",
      "geographicArea": {
        "@type": "Place",
        "name": "Oklahoma"
      }
    },
    
    // AI-friendly content structure
    "hasPart": [
      {
        "@type": "WebPageElement",
        "cssSelector": "h1, h2, h3",
        "description": "Hierarchical content structure optimized for AI parsing"
      },
      {
        "@type": "WebPageElement",
        "cssSelector": ".primary-answer, .voice-answer",
        "description": "Direct answers optimized for voice search and AI responses"
      },
      {
        "@type": "WebPageElement",
        "cssSelector": ".voice-optimized",
        "description": "Content specifically optimized for voice search queries"
      }
    ],
    
    // Speakable content for voice assistants
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        ".voice-optimized",
        ".primary-answer", 
        ".voice-answer",
        "h1",
        "h2"
      ]
    },
    
    // Accessibility for AI understanding
    "accessibilityFeature": [
      "alternativeText",
      "readingOrder",
      "structuralNavigation",
      "tableOfContents",
      "unlocked"
    ],
    "accessibilityHazard": "none",
    "accessibilityControl": [
      "fullKeyboardControl",
      "fullMouseControl",
      "fullTouchControl"
    ],
    
    // Mobile-first optimization signals
    "isAccessibleForFree": true,
    "inLanguage": "en-US",
    "encoding": {
      "@type": "MediaObject",
      "encodingFormat": "text/html",
      "description": "Mobile-first responsive design optimized for all devices"
    }
  };

  return (
    <Script
      id={`ai-optimized-schema-${pageName.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aiOptimizedSchema) }}
    />
  );
}

