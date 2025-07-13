import Script from 'next/script';

interface AIOptimizedContentSchemaProps {
  pageName: string;
  primaryKeywords: string[];
  semanticKeywords: string[];
  topicalAuthority: string;
  contentQuality?: number;
}

export default function AIOptimizedContentSchema({ 
  pageName,
  primaryKeywords,
  semanticKeywords,
  topicalAuthority,
  contentQuality = 95
}: AIOptimizedContentSchemaProps) {
  const aiContentSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": pageName,
    "about": primaryKeywords.map(keyword => ({
      "@type": "Thing",
      "name": keyword,
      "description": `Expert ${keyword} services in Oklahoma`
    })),
    "mentions": semanticKeywords.map(keyword => ({
      "@type": "Thing", 
      "name": keyword
    })),
    "creator": {
      "@type": "Organization",
      "name": "Just Legal Solutions",
      "expertise": topicalAuthority,
      "hasCredential": "Oklahoma Licensed Process Server"
    },
    "contentRating": {
      "@type": "Rating",
      "ratingValue": contentQuality,
      "bestRating": 100,
      "ratingExplanation": "AI-optimized content quality score"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": ["Legal Professionals", "Individuals", "Businesses"],
      "geographicArea": {
        "@type": "Place",
        "name": "Oklahoma"
      }
    },
    "genre": "Legal Services Information",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "keywords": [...primaryKeywords, ...semanticKeywords].join(", "),
    "learningResourceType": "Reference Material",
    "educationalLevel": "Professional"
  };

  return (
    <Script
      id="ai-optimized-content-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aiContentSchema) }}
    />
  );
}
