import Script from 'next/script';

interface EnhancedFAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  pageTitle?: string;
}

export default function EnhancedFAQSchema({ faqs, pageTitle }: EnhancedFAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": pageTitle ? `${pageTitle} - Frequently Asked Questions` : "Frequently Asked Questions",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Organization",
          "name": "Just Legal Solutions",
          "url": "https://justlegalsolutions.org"
        }
      }
    })),
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebPage",
      "name": pageTitle || "FAQ",
      "publisher": {
        "@type": "Organization",
        "name": "Just Legal Solutions",
        "url": "https://justlegalsolutions.org"
      }
    }
  };

  return (
    <Script
      id="enhanced-faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

// Generate common FAQs for process serving pages
export function generateProcessServingFAQs(city?: string, service?: string): Array<{question: string, answer: string}> {
  const locationText = city ? `in ${city}` : "in Oklahoma";
  const serviceText = service || "process serving";
  
  return [
    {
      question: `How much does ${serviceText} cost ${locationText}?`,
      answer: `${serviceText.charAt(0).toUpperCase() + serviceText.slice(1)} pricing ${locationText} varies based on service urgency and location. We offer competitive rates for standard, rush, same-day, and emergency service options. Contact us at (539) 367-6832 for a customized quote based on your specific requirements.`
    },
    {
      question: `How quickly can ${serviceText} be completed ${locationText}?`,
      answer: `We offer flexible timing options for ${serviceText} ${locationText}. Standard service typically takes 3-5 business days, with expedited rush, same-day, and emergency 2-hour service available when time-sensitive situations require immediate attention.`
    },
    {
      question: `What areas do you serve for ${serviceText}?`,
      answer: `We provide ${serviceText} throughout Oklahoma with priority service in Tulsa County, Broken Arrow, Sapulpa, Bixby, Jenks, Sand Springs, Owasso, and surrounding areas. Statewide service is available.`
    },
    {
      question: `Are you licensed for ${serviceText} ${locationText}?`,
      answer: `Yes, Just Legal Solutions is a professional process serving company operating in full compliance with Oklahoma state requirements. Our process servers follow all Oklahoma due diligence standards and court rules.`
    },
    {
      question: `Do you provide proof of ${serviceText}?`,
      answer: `Yes! We provide comprehensive documentation including professional affidavit of service, photo documentation, GPS tracking data, detailed service reports, and digital delivery for immediate use.`
    }
  ];
}
