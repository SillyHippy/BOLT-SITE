import Script from 'next/script';

interface VoiceSearchOptimizationProps {
  primaryQuestions: string[];
  conversationalAnswers: string[];
  localIntent?: boolean;
  // when false, the component will not inject its FAQPage JSON-LD script
  emitSchema?: boolean;
}

export default function VoiceSearchOptimization({ 
  primaryQuestions,
  conversationalAnswers,
  localIntent = true,
  emitSchema = true
}: VoiceSearchOptimizationProps) {
  if (!emitSchema) return null;
  const voiceSearchSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".voice-optimized", "h1", "h2", ".primary-answer"]
    },
    "mainEntity": primaryQuestions.map((question, index) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": conversationalAnswers[index] || "Contact Just Legal Solutions for expert assistance.",
        "url": "https://justlegalsolutions.org",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ".voice-answer"
        },
        "author": {
          "@type": "Organization",
"foundingDate": "2025-03-01",
"description": "Professional process serving with over 50 years combined industry experience",
          "name": "Just Legal Solutions",
          "address": localIntent ? {
            "@type": "PostalAddress",
            "addressLocality": "Tulsa",
            "addressRegion": "Oklahoma",
            "addressCountry": "US"
          } : undefined
        }
      },
      "answerCount": 1,
      "upvoteCount": 127,
      "dateCreated": new Date().toISOString()
    })),
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://justlegalsolutions.org/search?q={voice_query}",
        "actionPlatform": [
          "http://schema.org/VoiceApplication",
          "http://schema.org/MobileApplication"
        ]
      }
    }
  };

  return (
    <Script
      id="voice-search-optimization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceSearchSchema) }}
    />
  );
}
