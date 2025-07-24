'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLd from '../JsonLd'; 
import defaultFaqs from '@/data/default-faqs.json';

interface Faq {
  question: string;
  answer: string;
}

interface EnhancedFaqSchemaProps {
  faqs?: Faq[];
  pageTitle?: string; 
}

export default function EnhancedFaqSchema({ faqs }: EnhancedFaqSchemaProps) {
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
        {/* This line has been corrected. It was '(index, faq)' before. */}
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