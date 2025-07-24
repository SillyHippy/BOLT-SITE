
import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professional Courier Services Tulsa County | Legal Document Delivery',
  description: 'Expert courier services in Tulsa County, Oklahoma. Same-day legal document delivery, court filings, and secure business document transport throughout Oklahoma.',
  keywords: 'courier services Tulsa, legal document delivery, court filing services, same-day courier Oklahoma, secure document transport',
  alternates: {
    canonical: 'https://justlegalsolutions.org/courier-services-tulsa'
  }
};

export default function CourierServicesTulsaPage() {
  const faqs = [
    {
      question: 'How fast can you deliver legal documents in Tulsa?',
      answer: 'We offer same-day and on-demand courier service throughout Tulsa County. Most deliveries are completed within hours.'
    },
    {
      question: 'Do you provide secure delivery for sensitive legal materials?',
      answer: 'Yes, all deliveries are handled by professional, uniformed couriers with secure, point-to-point transport.'
    },
    {
      question: 'Can you file documents at the Tulsa County Courthouse?',
      answer: 'Absolutely. We offer courthouse filing and document stamping as part of our courier services.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve all of Tulsa County, including Broken Arrow, Bixby, Jenks, Owasso, and Sand Springs.'
    },
    {
      question: 'How do I schedule a rush courier delivery?',
      answer: 'Call us or use our online form to request a rush or after-hours delivery. We are available 24/7 for urgent needs.'
    }
  ];

  return (
    <>
      {/* Speakable Schema for Voice Search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Professional Courier Services Tulsa County | Legal Document Delivery',
          'speakable': {
            '@type': 'SpeakableSpecification',
            'xpath': [
              '/html/head/title',
              '/html/body//h1',
              '/html/body//section[contains(@class, "faq")]//h3'
            ]
          },
          'url': 'https://justlegalsolutions.org/courier-services-tulsa'
        })
      }} />
      <main className="min-h-screen pt-12 bg-white">
        {/* Unique Tulsa Courier History Section */}
        <section className="bg-white py-10 border-b">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Tulsa’s Courier Tradition</h2>
            <p className="text-lg text-gray-700">From the early “Oil Capital” days to the modern business corridor, Tulsa has always depended on reliable movement of documents. Law firms, medical offices, and corporate clients across Tulsa County trust local couriers to keep business flowing smoothly. Our service continues this tradition—adapting to changes in Tulsa’s bustling economy, embracing new neighborhoods, and delivering with security and speed to every sector, from downtown courthouses to lakeside offices.</p>
          </div>
        </section>
        {/* By the Numbers Stats Bar */}
        <section className="bg-blue-50 py-6 border-b">
          <div className="container mx-auto flex flex-wrap justify-center gap-8 text-center">
            <div>
              <span className="block text-3xl font-bold text-blue-800">97%</span>
              <span className="block text-gray-700">First-attempt serve success</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-blue-800">6,000+</span>
              <span className="block text-gray-700">Documents delivered countywide</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-blue-800">Serving Tulsa</span>
              <span className="block text-gray-700">since 2018</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
                  <li>Professional & Uniformed Couriers</li>
                  <li>Competitive Flat-Rate Pricing</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <a
                href="/pricing"
                className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg shadow-lg"
              >
      </main>
    </>
  );
}
              When time-sensitive documents need to be delivered securely, Just Legal Solutions offers the premier courier service in Tulsa. We specialize in the swift and confidential transport of legal documents, courthouse filings, and professional packages.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-10">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Courier Services For:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Law Firms & Attorneys</li>
                  <li>Real Estate & Title Companies</li>
                  <li>Architectural & Engineering Firms</li>
                  <li>Medical Offices</li>
                  <li>Corporate & Small Businesses</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Commitment:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Same-Day & On-Demand Delivery</li>
                  <li>Secure, Point-to-Point Transport</li>
                  <li>Courthouse Filing & Document Stamping</li>
                  <li>Professional & Uniformed Couriers</li>
                  <li>Competitive Flat-Rate Pricing</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <a
                href="/pricing"
                className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg shadow-lg"
              >
                Explore Our Courier Rates
              </a>
            </div>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50 border-t mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Tulsa Courier Service FAQs</h2>
              <ul className="space-y-6 mt-8">
                {faqs.map((faq, idx) => (
                  <li key={idx} className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                    <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700 mt-2">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
