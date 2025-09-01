import Script from 'next/script';

interface PerformanceSchemaProps {
  pageName?: string;
  pageUrl?: string;
  loadTime?: number;
  mobileOptimized?: boolean;
}

export default function PerformanceSchema({ 
  pageName = "Just Legal Solutions Page",
  pageUrl = "/",
  loadTime = 2.5,
  mobileOptimized = true 
}: PerformanceSchemaProps) {
  const performanceSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageName,
    "url": `https://justlegalsolutions.org${pageUrl}`,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "hasPart": {
      "@type": "WebPageElement",
      "cssSelector": "body",
      "description": "Main content area optimized for fast loading and accessibility"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".important-info"]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": "main, .main-content"
    },
    "accessibilityFeature": [
      "alternativeText",
      "readingOrder",
      "structuralNavigation",
      "tableOfContents"
    ],
    "accessibilityHazard": "none",
    "accessibilityControl": [
      "fullKeyboardControl",
      "fullMouseControl",
      "fullTouchControl"
    ]
  };

  return (
    <Script
      id="performance-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(performanceSchema) }}
    />
  );
}
