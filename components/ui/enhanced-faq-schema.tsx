'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLd from '../JsonLd.tsx'; 
import defaultFaqs from '@/data/default-faqs.json';

interface Faq {
  question: string;
  answer: string;
}

// This is the corrected interface that makes pageTitle optional
interface EnhancedFaqSchemaProps {
  faqs?: Faq[];
  pageTitle?: string; // Make the pageTitle prop optional
}

export default function EnhancedFaqSchema({ faqs, pageTitle }: EnhancedFaqSchemaProps) {
  // Use the provided faqs, or use the defaultFaqs if none are provided
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
        {finalFaqs.map((index, faq) => (
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