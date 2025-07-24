
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
        {/* Tulsa Image Banner */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="/images/tulsadriller.png"
              alt="Tulsa Driller Landmark Courier Service"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-20 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Courier Services in Tulsa County, Oklahoma</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Secure, reliable courier services for legal documents, court filings, and business materials throughout Tulsa County and Oklahoma.
            </p>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Serving All of Tulsa County</h2>
          <div className="flex justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206181.1129303917!2d-95.87809005!3d36.15244105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b692b8ddd12e8f%3A0xe76910c81bd96af7!2sTulsa%2C%20OK!5e0!3m2!1sen!2sus!4v1753397857366!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-12 text-center">
            <Image
              src="/images/secure-delivery.webp"
              alt="Secure courier delivery in Tulsa County"
              width={800}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Reliable Legal & Professional Courier in Tulsa</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
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
