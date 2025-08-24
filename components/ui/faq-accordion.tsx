'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden" itemScope itemType="https://schema.org/Question">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
            aria-expanded={openIndex === index}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-gray-800 pr-4" itemProp="name">
                {faq.question}
              </h3>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-700 leading-relaxed" itemProp="text" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
