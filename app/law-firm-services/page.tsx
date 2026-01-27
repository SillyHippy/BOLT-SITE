import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Law Firm Process Serving | Volume Discounts | Just Legal Solutions',
  description: 'Oklahoma law firm process serving with flat-rate statewide pricing, volume discounts for high-frequency firms, priority scheduling, monthly invoicing, and court-ready affidavits. Call (539) 367-6832.',
  keywords: 'law firm process server Oklahoma, Tulsa law firm process serving, attorney process serving, litigation support for law firms, outsourced process serving for law firms, volume discount process serving, corporate legal services Oklahoma',
  openGraph: {
    title: 'Law Firm Process Serving Partnership | Just Legal Solutions',
    description: 'Exclusive process serving services for Oklahoma law firms with flat-rate pricing, priority scheduling, and volume discounts.',
    url: 'https://justlegalsolutions.org/law-firm-services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/law-firm-services',
  },
};

export default function LawFirmServicesPage() {
  const lawFirmBenefits = [
    {
      icon: '💰',
      title: 'Flat-Rate Pricing',
      description: 'No surprise mileage fees. Service available anywhere in all 77 Oklahoma counties.',
      highlight: 'Volume discounts for high-frequency firms'
    },
    {
      icon: '⚡',
      title: 'Priority Scheduling',
      description: 'Law firm clients get first priority for same-day and rush services. Never miss a deadline.',
      highlight: 'Jump the queue'
    },
    {
      icon: '📊',
      title: 'Monthly Invoicing',
      description: 'Consolidated billing for easier accounting. No per-serve payment hassles.',
      highlight: 'Net-30 terms available'
    },
    {
      icon: '👤',
      title: 'Dedicated Account Manager',
      description: 'Direct line to Joseph for all your process serving needs. One point of contact.',
      highlight: 'Personal service'
    },
    {
      icon: '📱',
      title: 'Real-Time Tracking',
      description: 'Live GPS tracking and instant notifications when documents are served.',
      highlight: 'Full transparency'
    },
    {
      icon: '📋',
      title: 'Court-Ready Affidavits',
      description: 'Detailed, properly formatted affidavits ready for court filing. Every time.',
      highlight: '100% compliance'
    }
  ];

  const practiceAreas = [
    {
      area: 'Family Law',
      icon: '👨‍👩‍👧',
      services: ['Divorce papers', 'Custody documents', 'Protective orders'],
      needs: 'Discreet handling, weekend availability. Coordinate directly with paralegals and legal assistants for status updates.'
    },
    {
      area: 'Civil Litigation',
      icon: '⚖️',
      services: ['Summons & complaints', 'Subpoenas', 'Discovery documents'],
      needs: 'Designed for high-volume Oklahoma litigation practices with strict court deadlines.'
    },
    {
      area: 'Real Estate & Property',
      icon: '🏠',
      services: ['Eviction notices', 'Property liens', 'Lease violations'],
      needs: 'Quick turnaround for property managers. Batch serving for multi-unit evictions.'
    },
    {
      area: 'Corporate Law',
      icon: '🏢',
      services: ['Contract disputes', 'Business litigation', 'Corporate filings'],
      needs: 'Multi-location service, confidential handling. Coordinate with corporate counsel offices.'
    },
    {
      area: 'Bankruptcy',
      icon: '📊',
      services: ['Creditor notices', 'Court filings', 'Debtor service'],
      needs: 'Strict deadline compliance. Court-ready documentation for Oklahoma bankruptcy courts.'
    },
    {
      area: 'Personal Injury',
      icon: '🏥',
      services: ['Demand letters', 'Medical subpoenas', 'Witness service'],
      needs: 'Skip tracing for hard-to-find defendants. Support for Tulsa PI litigation teams.'
    }
  ];

  const lawFirmFaqs = [
    {
      question: 'Do you offer volume discounts for law firms?',
      answer: 'Yes! We offer automatic volume discounts for law firms based on monthly service volume. High-frequency firms receive preferential rates, priority scheduling, and dedicated account management. Contact us at (539) 367-6832 to discuss your firm\'s needs.'
    },
    {
      question: 'How does your law firm billing work?',
      answer: 'We offer consolidated monthly invoicing for established law firm clients with Net-30 terms available. No per-serve payment hassles—one invoice for easier accounting and expense tracking.'
    },
    {
      question: 'Can you handle urgent court deadlines?',
      answer: 'Absolutely. Law firm clients receive priority scheduling for same-day and rush services. We understand litigation deadlines and can mobilize quickly for emergency service, including weekends and holidays.'
    },
    {
      question: 'Do you provide court-ready affidavits?',
      answer: 'Yes, every serve includes a detailed, properly formatted affidavit of service ready for court filing. We also offer eFiling where permitted in Oklahoma courts, and can handle in-person filing at Tulsa County courts.'
    },
    {
      question: 'What practice areas do you specialize in?',
      answer: 'We serve all practice areas including family law, civil litigation, real estate/property, corporate law, bankruptcy, and personal injury. Each practice area has specialized procedures we\'re experienced with.'
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "Just Legal Solutions - Law Firm Services",
        "description": "Dedicated process serving partnership for Oklahoma law firms with flat-rate pricing, priority scheduling, and volume discounts.",
        "url": "https://justlegalsolutions.org/law-firm-services",
        "image": "https://justlegalsolutions.org/images/jls-logo.webp",
        "telephone": "+15393676832",
        "email": "info@justlegalsolutions.org",
        "priceRange": "$18-$105",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "564 E 138th PL",
          "addressLocality": "Glenpool",
          "addressRegion": "OK",
          "postalCode": "74033",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "State",
          "name": "Oklahoma"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "156",
          "bestRating": "5"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Law Firm Process Serving Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Standard Process Serving",
              "price": "30.00",
              "priceCurrency": "USD",
              "description": "3-5 business day service for Oklahoma law firms"
            },
            {
              "@type": "Offer",
              "name": "Rush Process Serving",
              "price": "75.00",
              "priceCurrency": "USD",
              "description": "24-48 hour priority service for Oklahoma law firms"
            },
            {
              "@type": "Offer",
              "name": "Same-Day Emergency",
              "price": "150.00",
              "priceCurrency": "USD",
              "description": "2-4 hour emergency service for Oklahoma law firms"
            }
          ]
        },
        "serviceType": ["Process serving for law firms", "Litigation support", "Legal document delivery for Oklahoma law firms"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": lawFirmFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
              ⚖️ EXCLUSIVE LAW FIRM PARTNERSHIP
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Process Serving Built for <span className="text-yellow-400">Oklahoma Law Firms</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Flat-rate process serving for Oklahoma law firms with priority scheduling and volume discounts. 
              One call to (539) 367-6832 for all your statewide process serving needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5393676832"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
              >
                📞 Call Now: (539) 367-6832
              </a>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              ✅ 156+ Five-Star Reviews | ✅ 50+ Years Combined Experience | ✅ All 77 OK Counties
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Why Oklahoma Law Firms Choose Us</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Outsourced process serving designed specifically for Tulsa law firms and Oklahoma litigation practices. Litigation support you can count on.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lawFirmBenefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100 hover:border-blue-500 transition-colors">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 mb-3">{benefit.description}</p>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {benefit.highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Areas - Consultative Approach */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Tailored Solutions for Your Practice Area</h2>
            <p className="text-center text-gray-600 mb-4 max-w-3xl mx-auto">
              Every law firm has unique process serving requirements. We create customized service plans 
              based on your practice area, volume, and specific needs.
            </p>
            <p className="text-center text-blue-600 font-semibold mb-12">
              📞 Call (539) 367-6832 to discuss your firm&apos;s specific requirements
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceAreas.map((practice, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                  <div className="text-3xl mb-3">{practice.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{practice.area}</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Common Documents:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {practice.services.map((service, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>{service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-blue-700 italic">{practice.needs}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Law Firm Partnership Today
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Call now to discuss your firm&apos;s needs and get set up with priority scheduling and monthly invoicing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5393676832"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                📞 (539) 367-6832
              </a>
              <a
                href="mailto:info@justlegalsolutions.org?subject=Law%20Firm%20Partnership%20Inquiry"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-400 transition-colors text-lg border-2 border-white"
              >
                ✉️ Email Partnership Inquiry
              </a>
            </div>
            <p className="mt-8 text-green-200 text-sm">
              Ask about our FREE first serve for new law firm partners
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Law Firm FAQ</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Answers to common questions from Oklahoma law firms about volume pricing, invoicing, and emergency process serving.
            </p>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-bold text-lg mb-2">How does monthly invoicing work?</h3>
                <p className="text-gray-600">
                  We track all serves for your firm and send a consolidated invoice at month-end. Net-30 terms available for established partnerships. No more processing individual payments.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="font-bold text-lg mb-2">What if a defendant is difficult to locate?</h3>
                <p className="text-gray-600">
                  Our skip tracing service starts at $25 and can locate hard-to-find individuals using multiple databases and investigative techniques. If we can&apos;t locate them after exhaustive research, you only pay a reduced $15 research fee—not the full skip tracing charge.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="font-bold text-lg mb-2">Do you cover rural Oklahoma counties?</h3>
                <p className="text-gray-600">
                  Yes, standard service in all 77 Oklahoma counties—from Tulsa County to the Panhandle. No mileage fees on standard statewide serves; rare exceptions quoted upfront for extremely remote locations.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="font-bold text-lg mb-2">How fast can you serve in an emergency?</h3>
                <p className="text-gray-600">
                  Our same-day emergency service targets service within 2–4 hours in the Tulsa metro area. For urgent statewide needs, we coordinate immediate dispatch. Call (539) 367-6832 for emergencies.
                </p>
              </div>
              <div className="pb-6">
                <h3 className="font-bold text-lg mb-2">What documentation do you provide?</h3>
                <p className="text-gray-600">
                  Every serve includes a detailed affidavit of service with date, time, location, description of recipient, GPS coordinates, and photographs when appropriate. Court-ready documentation every time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">How Our Law Firm Partnership Works</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Getting started is simple. We make the process seamless so you can focus on your cases.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-lg mb-2">Initial Consultation</h3>
                <p className="text-gray-600 text-sm">Call us to discuss your firm&apos;s volume, practice areas, and specific needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-lg mb-2">Custom Service Plan</h3>
                <p className="text-gray-600 text-sm">We create a tailored plan with your preferred communication methods and billing terms.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-lg mb-2">Priority Access</h3>
                <p className="text-gray-600 text-sm">Your serves get priority scheduling. Direct access to Joseph for urgent matters.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold text-lg mb-2">Simplified Billing</h3>
                <p className="text-gray-600 text-sm">Monthly consolidated invoices with Net-30 terms. No per-serve payment hassles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Map Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Statewide Oklahoma Coverage</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              One flat rate covers service anywhere in Oklahoma. No mileage fees on standard serves, no surprise charges.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-900">Key Service Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span>Tulsa County</div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span>Oklahoma County</div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span>Rogers County</div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span>Creek County</div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span>Wagoner County</div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span>Osage County</div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span>Washington County</div>
                  <div className="flex items-center"><span className="text-green-500 mr-2">✓</span>Mayes County</div>
                </div>
                <p className="mt-4 text-blue-700 font-semibold">+ All 77 Oklahoma Counties</p>
                <p className="mt-2 text-gray-500 text-sm">
                  From the Panhandle to the Red River, we cover every county at competitive flat rates.
                </p>
                <Link href="/service-areas" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                  See full Oklahoma process server service areas →
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">🗺️</div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">Flat-Rate Statewide</h4>
                <p className="text-gray-600 mb-4">Unlike competitors who charge per-mile, our flat-rate covers standard serves statewide.</p>
                <p className="text-2xl font-bold text-green-600">Save $50–$200+ per serve</p>
                <p className="text-sm text-gray-500 mt-2">on rural and distant locations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 px-4 bg-blue-900 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">156+</div>
                <p className="text-blue-200">5-Star Reviews</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <p className="text-blue-200">Years Combined Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">77</div>
                <p className="text-blue-200">Oklahoma Counties Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
                <p className="text-blue-200">First-Attempt Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources for Law Firms */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Law Firm Process Serving FAQ</h2>
            <p className="text-center text-gray-600 mb-12">Common questions from Oklahoma attorneys and legal professionals</p>
            
            <div className="space-y-6">
              {lawFirmFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <h3 className="text-lg font-bold mb-3 text-blue-900">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources for Law Firms */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Resources for Legal Professionals</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/oklahoma-process-server-laws" className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-blue-800 mb-2">📚 Oklahoma Laws Guide</h3>
                <p className="text-gray-600 text-sm">Use this guide to onboard new paralegals and staff quickly on Oklahoma service requirements.</p>
              </Link>
              <Link href="/oklahoma-process-server-faq-2026" className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-green-800 mb-2">❓ Process Server FAQ</h3>
                <p className="text-gray-600 text-sm">Quick reference for common questions your litigation team may have about Oklahoma process serving.</p>
              </Link>
              <Link href="/family-law-service-guide-tulsa" className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-purple-800 mb-2">👨‍👩‍👧 Family Law Guide</h3>
                <p className="text-gray-600 text-sm">Specialized procedures for serving protective orders and divorce papers in Oklahoma family courts.</p>
              </Link>
              <Link href="/ai-skip-tracing-guide-oklahoma" className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-orange-800 mb-2">🔍 Skip Tracing Guide</h3>
                <p className="text-gray-600 text-sm">Learn how we locate evasive defendants using AI-powered databases and investigative techniques.</p>
              </Link>
              <Link href="/oklahoma-electronic-service-guide" className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-teal-800 mb-2">📧 E-Service Guide</h3>
                <p className="text-gray-600 text-sm">When electronic service is permitted in Oklahoma courts and how to document consent.</p>
              </Link>
              <Link href="/weekend-emergency" className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-red-800 mb-2">🚨 Emergency Service</h3>
                <p className="text-gray-600 text-sm">24/7 weekend and holiday process serving when your client faces urgent court deadlines.</p>
              </Link>
            </div>
            
            {/* Distinct CTA Button */}
            <div className="mt-12 text-center bg-blue-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Submit a Serve?</h3>
              <p className="text-blue-200 mb-6">Law firm clients receive priority scheduling and dedicated account management.</p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
              >
                📋 Submit New Serve for Your Firm
              </Link>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/pricing" className="text-blue-600 font-semibold hover:underline">View Complete Pricing →</Link>
              {' | '}
              <Link href="/service-areas" className="text-blue-600 font-semibold hover:underline">Service Areas →</Link>
              {' | '}
              <Link href="/about" className="text-blue-600 font-semibold hover:underline">About Our Team →</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
