'use client';

import { useState, useCallback, memo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

// ⚡ Bolt: Memoized FAQItem prevents unnecessary re-renders of all FAQs
// when only one is toggled open or closed.
const FAQItem = memo(({
  faq,
  index,
  isOpen,
  onToggle
}: {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden" itemScope itemType="https://schema.org/Question">
    <meta itemProp="image" content="https://justlegalsolutions.org/images/jls-logo.webp" />
    <button
      onClick={() => onToggle(index)}
      className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg text-gray-800 pr-4" itemProp="name">
          {faq.question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-blue-600" aria-hidden="true" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" aria-hidden="true" />
          )}
        </div>
      </div>
    </button>
    {isOpen && (
      <div className="px-6 pb-6" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
        <div className="border-t border-gray-100 pt-4">
          <meta itemProp="image" content="https://justlegalsolutions.org/images/jls-logo.webp" />
          <p className="text-gray-700 leading-relaxed" itemProp="text" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
        </div>
      </div>
    )}
  </div>
));
FAQItem.displayName = 'FAQItem';

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ⚡ Bolt: Stable reference for onToggle, ensuring memoized FAQItems
  // aren't re-rendered due to a new function reference.
  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  }, []);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          index={index}
          isOpen={openIndex === index}
          onToggle={toggleFAQ}
        />
      ))}
    </div>
  );
}
