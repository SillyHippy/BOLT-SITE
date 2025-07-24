'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { JsonLd } from '@/components/JsonLd';
// Import your new comprehensive default FAQs
import defaultFaqs from '@/data/default-faqs.json';

interface Faq {
  question: string;
  answer: string;
}

interface EnhancedFaqSchemaProps {
  // Make the faqs prop optional
  faqs?: Faq[];
}

export default function EnhancedFaqSchema({ faqs }: EnhancedFaqSchemaProps) {
  // This is the smart logic:
  // Use the specific faqs if they are provided for a page,
  // otherwise, use the comprehensive defaultFaqs.
  const finalFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  if (!finalFaqs || finalFaqs.length === 0) {
    return null;
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: finalFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div>
      <JsonLd data={faqSchema} />
      <Accordion type="single" collapsible className="w-full">
        {finalFaqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}