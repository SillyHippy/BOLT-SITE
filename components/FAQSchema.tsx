import Script from 'next/script';

export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much experience does Just Legal Solutions have in process serving?",
        "answerCount": 1,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Just Legal Solutions and our professional partner network have over 50 years' combined experience serving legal documents throughout Oklahoma. Our team brings decades of expertise in process serving, court filings, and legal document delivery across all 77 Oklahoma counties.",
          "url": "https://justlegalsolutions.org"
        }
      },
      {
        "@type": "Question",
        "name": "How much does process serving cost in Tulsa?",
        "answerCount": 1,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Process serving in Tulsa typically costs $30-$200 depending on urgency and complexity. Rates start at $30 for bulk orders and single attempts, with standard service from $60, rush service $100, and same-day service $150.",
          "url": "https://justlegalsolutions.org/pricing"
        }
      },
      {
        "@type": "Question", 
        "name": "How long does process serving take in Oklahoma?",
        "answerCount": 1,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard process serving takes 3-5 business days in Oklahoma. Rush service is available in 1-2 days, and same-day service is available for urgent documents. Emergency 2-hour service is offered for critical legal deadlines.",
          "url": "https://justlegalsolutions.org"
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve for process serving?",
        "answerCount": 1,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all of Tulsa County including Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Sapulpa, Glenpool, and surrounding areas. We also cover Rogers County, Wagoner County, and Creek County.",
          "url": "https://justlegalsolutions.org/service-areas"
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide same-day process serving?",
        "answerCount": 1,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer same-day process serving for $150 throughout Tulsa County. Rush service is available for $100 within 1-2 business days for urgent legal document delivery.",
          "url": "https://justlegalsolutions.org/pricing"
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed process servers in Oklahoma?",
        "answerCount": 1,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are fully licensed and bonded process servers in Oklahoma. We comply with all state and local requirements for legal document service and provide detailed affidavits of service.",
          "url": "https://justlegalsolutions.org"
        }
      },
      {
        "@type": "Question",
        "name": "What documents can you serve?",
        "answerCount": 1,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all legal documents including subpoenas, summons, complaints, eviction notices, divorce papers, child custody documents, and court orders. We handle both civil and family court documents.",
          "url": "https://justlegalsolutions.org/services"
        }
      }
    ]
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
