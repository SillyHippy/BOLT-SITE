'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { JsonLd } from '@/components/JsonLd';

// Define the type for a single FAQ item
interface Faq {
  question: string;
  answer: string;
}

// Define the type for the component's props
interface EnhancedFaqSchemaProps {
  faqs: Faq[];
}

// This is the updated, corrected component
export default function EnhancedFaqSchema({ faqs }: EnhancedFaqSchemaProps) {
  // Check if faqs array exists and has content
  if (!faqs || faqs.length === 0) {
    return null; // Don't render anything if there are no FAQs
  }

  // Format the FAQs for the JSON-LD schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
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
        {faqs.map((faq, index) => (
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
