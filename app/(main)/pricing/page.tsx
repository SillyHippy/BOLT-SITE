import React from 'react';
import { Metadata } from 'next';
import { CheckCircle, Truck, Clock, Zap, Flame, Target, Shield, Star, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import AIVoiceSupremacy from '@/components/ui/ai-voice-supremacy';
import LocalPromoBanner from '@/components/ui/local-promo-banner';
import { getPromoDescription } from '@/lib/promo-utils';

export const metadata: Metadata = {
  title: 'Process Server Pricing Oklahoma - Just Legal Solutions | Affordable Rates Starting $30',
  description: getPromoDescription(
    'Transparent process server pricing in Oklahoma starting at $30. Same-day, rush, and standard service options. No hidden fees. Licensed and bonded professionals.',
    '30% OFF LIMITED TIME for ZIP 74008, 74033, 74037! Transparent process server pricing in Oklahoma starting at $30. Same-day, rush, and standard service options. No hidden fees. Licensed and bonded.'
  ),
  keywords: 'process server pricing Oklahoma, legal document service costs, process serving rates Tulsa, Oklahoma court service fees, affordable process server, transparent pricing legal services',
  alternates: {
    canonical: 'https://justlegalsolutions.org/pricing'
  },
  openGraph: {
    title: 'Process Server Pricing Oklahoma - Just Legal Solutions | Starting $30',
    description: 'Transparent process server pricing in Oklahoma starting at $30. Same-day, rush, and standard service options. No hidden fees.',
    url: 'https://justlegalsolutions.org/pricing',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Process Server Pricing Oklahoma'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Pricing Oklahoma - Just Legal Solutions | Starting $30',
    description: 'Transparent process server pricing in Oklahoma starting at $30. Same-day, rush, and standard service options.',
    images: ['https://justlegalsolutions.org/images/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

// Data for additional services organized by category
const serviceCategories = [
    {
        category: 'Rush & Emergency Services',
        services: [
            { title: 'Immediate Action Service', description: 'Critical emergency service for time-sensitive legal situations requiring service within <strong>2-4 hours</strong>. Additional fee of <strong>$100</strong> on top of base service rate. Subject to availability and confirmation.' },
            { title: 'Holiday Service', description: 'Service available on holidays with an additional surcharge of <strong>$25-50</strong> depending on the specific date and urgency. Contact us for availability and exact pricing.' },
            { title: 'Set Time of Service', description: 'If you require service at a specific time and date, an additional rush fee may apply. This will be confirmed with you beforehand.' },
        ]
    },
    {
        category: 'Filing & Documentation',
        services: [
            { title: 'Filing Affidavits', description: 'We can file the Return of Service Affidavit with the court for you. <strong>eFiling is free where allowed in Oklahoma</strong>. For in-person filing in Tulsa County, the fee is <strong>$35 plus court costs</strong>. Fees for other counties will be quoted upfront.' },
            { title: 'Posting Affidavits', description: 'For services that require posting a notice (e.g., eviction notices) instead of personal delivery, the fee is <strong>$30</strong>.' },
            { title: 'Certified Mailing', description: 'We can send affidavits via certified mail for <strong>$35 plus postage costs</strong>.' },
            { title: 'Printing Documents', description: 'The first 10 pages are printed free of charge. Additional pages are <strong>$0.20 per page</strong>.' },
        ]
    },
    {
        category: 'Difficult Service & Investigations',
        services: [
            { title: 'Evasive Respondent Stakeout', description: 'For difficult-to-serve individuals, stakeout services are available at <strong>$90 per hour</strong> (2 hour minimum). This is only performed at your request.' },
            { title: 'Skip Tracing', description: 'Need to locate an individual? We offer skip tracing services. Please contact us for a quote.' },
        ]
    },
    {
        category: 'Special Pricing & Court',
        services: [
            { title: 'Multiple Services at Same Address', description: 'When serving multiple individuals at the same location, each additional person is only <strong>$30</strong>.' },
            { title: 'Single Serve Attempt', description: 'Reduced Rate for only a single serve attempt, the fee starts as low as <strong>$30</strong>.' },
            { title: 'Court Appearance Fees', description: 'Tulsa County appearances: <strong>Up to $500/hour</strong>, billed in full-hour increments (contact us for negotiated rates). Appearances outside Tulsa County: Additional fees based on travel/time will be negotiated beforehand. This fee is separate from standard document service charges and covers time spent attending court and testifying. Rescheduling/cancellation fees may apply.' },
        ]
    },
];

export default function PricingPage() {
  return (
    <>
      <UnifiedSchema 
        pageType="service"
        url="https://justlegalsolutions.org/pricing"
        title="Process Server Pricing Oklahoma - Just Legal Solutions"
        description="Professional process serving and legal document delivery services in Oklahoma with transparent pricing starting at $30."
        serviceDetails={{
          name: "Process Server Services Oklahoma",
          description: "Professional process serving and legal document delivery services in Oklahoma with transparent pricing starting at $30.",
          price: "$30-$200",
          areaServed: ["Tulsa", "Broken Arrow", "Bixby", "Jenks", "Owasso", "Sand Springs", "Glenpool", "Sapulpa"],
          serviceType: ["Process Serving", "Legal Document Delivery", "Court Filing", "Skip Tracing"]
        }}
        hasOfferCatalog={{
          name: "Process Serving Services",
          itemListElement: [
            {
              name: "Standard Process Service",
              description: "First service attempt within 10 business days",
              price: "$60",
              priceCurrency: "USD",
              itemOffered: {
                name: "Standard Process Service",
                serviceType: "Process Serving"
              }
            },
            {
              name: "Rush Process Service", 
              description: "Service attempt within 72 hours or sooner",
              price: "$100",
              priceCurrency: "USD",
              itemOffered: {
                name: "Rush Process Service",
                serviceType: "Expedited Process Serving"
              }
            },
            {
              name: "Same-Day Rush Service",
              description: "Emergency same-day service available",
              price: "$150", 
              priceCurrency: "USD",
              itemOffered: {
                name: "Same-Day Rush Service",
                serviceType: "Emergency Process Serving"
              }
            },
            {
              name: "Specialty Service",
              description: "Document filing, skip tracing, and specialized legal services",
              price: "$75",
              priceCurrency: "USD", 
              itemOffered: {
                name: "Specialty Legal Service",
                serviceType: "Legal Document Services"
              }
            }
          ]
        }}
        organizationDetails={{
          name: "Just Legal Solutions",
          url: "https://justlegalsolutions.org",
          logo: "https://justlegalsolutions.org/email%20signature%20logo.png",
          contactPoint: {
            telephone: "(539) 367-6832",
            email: "info@justlegalsolutions.org"
          },
          address: {
            streetAddress: "564 E 138th PL",
            addressLocality: "Glenpool",
            addressRegion: "OK", 
            postalCode: "74033",
            addressCountry: "US"
          }
        }}
        priceRange="$30-$200"
        currenciesAccepted="USD"
        paymentAccepted={["Cash", "Check", "Credit Card", "Online Payment"]}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 156,
          bestRating: 5,
          worstRating: 1
        }}
      />
      
      <LocalPromoBanner zips={["74008", "74033", "74037"]} />
      
      <main className="min-h-screen bg-white font-sans">
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Process Server Pricing</h1>
          <p className="text-xl text-gray-600 mb-6">Transparent, competitive rates for Oklahoma legal services</p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Licensed & Bonded</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-gray-700">4.9★ Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Clock className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Same-Day Available</span>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">JLS Wants to Partner with You</h2>
            <p className="text-gray-700 text-lg font-medium mb-6">
              <strong>If you don&apos;t see exactly what you&apos;re looking for</strong> in our service offerings, have a particularly complex or unique situation, or <strong>need more competitive pricing</strong>, we encourage you to reach out <strong>before exploring alternatives.</strong>
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-blue-600">Volume Discounts</strong>
                  <p className="text-sm text-gray-600">Automatic monthly discounts based on service volume. No contracts required.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-blue-600">Partnership Opportunities</strong>
                  <p className="text-sm text-gray-600">Priority scheduling, custom billing, and preferential rates for established clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Process Service Packages</h2>
            <p className="text-lg text-gray-600 mt-2 mb-6">
              Explore our competitive pricing plans tailored for your legal needs.
            </p>
            <div className="max-w-3xl mx-auto bg-blue-50/50 border border-blue-200 rounded-lg p-3 mb-12">
                <p className="text-sm text-blue-800">
                    <span className="font-semibold">Note on Service Area:</span> Standard rates apply to most of <strong>Tulsa County</strong> and select parts of <strong>Creek County (Sapulpa)</strong> & <strong>Wagoner County (Broken Arrow)</strong>. A surcharge applies to all other areas. Please contact us for a precise quote.
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 relative hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center bg-gray-100 rounded-full p-2 mb-3">
                <Clock className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Standard Service</h3>
              <div className="mb-3">
                <p className="text-3xl font-bold text-green-600">$60</p>
                <p className="text-xs text-gray-400 mb-2">starting price</p>
              </div>
              <p className="text-gray-600 mb-3 text-sm">First Service Attempt Within 10 Business Days (usually sooner).</p>
              <p className="text-sm text-gray-500">
                Ideal for routine document delivery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 relative hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center bg-yellow-100 rounded-full p-2 mb-3">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Rush Service</h3>
              <div className="mb-3">
                <p className="text-3xl font-bold text-green-600">$100</p>
                <p className="text-xs text-gray-400 mb-2">starting price</p>
              </div>
              <p className="text-gray-600 mb-3 text-sm">A JLS Agent Will Attempt Service Within 72 Hours or Sooner.</p>
              <p className="text-sm text-gray-500">
                For urgent demands that need immediate attention.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border-2 border-blue-500 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
              <div className="inline-flex items-center justify-center bg-orange-100 rounded-full p-2 mb-3 mt-2">
                <Flame className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Same-Day Rush</h3>
              <div className="mb-3">
                <p className="text-3xl font-bold text-green-600">$150</p>
                <p className="text-xs text-gray-400 mb-2">starting price</p>
              </div>
              <p className="text-gray-600 mb-3 text-sm">A JLS Agent Will Attempt Service Within 24 Hours or Sooner.</p>
              <p className="text-sm text-gray-500">
                For the most urgent, time-critical matters.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 relative hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center bg-red-100 rounded-full p-2 mb-3">
                <Target className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Triple-Attempt Rush</h3>
              <div className="mb-3">
                <p className="text-3xl font-bold text-green-600">$200</p>
                <p className="text-xs text-gray-400 mb-2">starting price</p>
              </div>
              <p className="text-gray-600 mb-3 text-sm">Guaranteed 3 service attempts within 72 hours with detailed reporting.</p>
              <p className="text-sm text-gray-500">
                For evasive or hard-to-serve respondents.
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-10">
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              <Phone className="h-5 w-5" />
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm text-gray-500 mt-3">Or call us directly: <a href="tel:5393676832" className="text-blue-600 font-semibold hover:underline">(539) 367-6832</a></p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center bg-blue-100 rounded-full p-3 mb-4">
                    <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Courier Service Pricing</h2>
                <p className="text-lg text-gray-600 mt-2">
                    For fast and reliable document transportation.
                </p>
            </div>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Standard Courier</h3>
                    <p className="text-4xl font-bold mb-4 text-gray-800">$60</p>
                    <p className="text-xs text-gray-400 mb-2">starting price</p>
                    <p className="text-gray-600">Delivery within the same business day or next morning for non-urgent items.</p>
                </div>
                 <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Rush Courier</h3>
                    <p className="text-4xl font-bold mb-4 text-gray-800">$100</p>
                    <p className="text-xs text-gray-400 mb-2">starting price</p>
                    <p className="text-gray-600">Priority delivery guaranteed within 2-3 hours for time-sensitive documents.</p>
                </div>
            </div>
             <p className="text-center text-sm text-gray-500 mt-8">
                Courier pricing applies to Tulsa County, Broken Arrow, & the Sapulpa area. A surcharge applies to other locations.
            </p>
        </div>
      </section>

       <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Additional & Optional Services</h2>
                <p className="text-lg text-gray-600 mt-2">Customize your service with these available add-ons.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {serviceCategories.map((category, catIndex) => (
                    <div key={catIndex} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-lg font-bold text-blue-900 mb-4 pb-2 border-b border-gray-200">{category.category}</h3>
                        <div className="space-y-4">
                            {category.services.map((service, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm">{service.title}</h4>
                                        <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: service.description }}></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section id="policies" className="py-12 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Our Policies</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-blue-900">Non-Service Policy</h3>
                <p className="text-gray-700">
                While we strive to ensure the completion of our tasks swiftly and effectively, there may be instances when serving a respondent proves to be impossible for reasons beyond our control (e.g., incorrect addresses, evasive individuals). If we dedicate time and resources to an attempt but are unsuccessful, the standard service fee still applies. We pride ourselves on our high success rates but believe in full transparency.
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Invalid or incorrect addresses</strong> provided by the Client do not constitute a failure of service by Provider. It is the Client&apos;s responsibility to provide accurate and current address information.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Refusal of mail</strong> by a defendant does not constitute a failure of service.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Re-service attempts</strong> required due to bad addresses or refusals will be billed separately.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Client will receive an <strong>affidavit of service or non-service</strong>, as applicable, as documentation of Provider&apos;s performance.</span>
                  </li>
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">Due Diligence Policy</h3>
                  <p className="text-gray-700">
                  We execute a minimum of three service attempts at different times of the day and on different days of the week, or until the address(es) are drawn to a conclusive determination. <strong>This minimum effort is included in our standard service pricing.</strong>
                  </p>
                  <p className="text-gray-700 mt-4">
                  Any request for additional service attempts beyond this standard protocol must be negotiated and approved prior to execution, and will be subject to an additional fee.
                  </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">Payment & Late Fee Policy</h3>
                  <p className="text-gray-700">
                      <strong>Prepayment is required for non-established clients.</strong> This ensures we can dedicate our resources to your case without delay.
                  </p>
                  <p className="text-gray-700 mt-4">
                      For established clients, payment is due on the date specified on the invoice. If payment is not received in full by the due date, a one-time late fee of <strong>$40.00</strong> will be assessed. Furthermore, a service charge of <strong>0.5%</strong> of the total outstanding balance will be applied for each day the payment is late, beginning the day after the due date, until the balance is paid in full.
                  </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">Refund Policy</h3>
                  <p className="text-gray-700">
                      <strong>All fees are non-refundable once a service attempt has been made.</strong> This includes instances where service is unsuccessful due to factors beyond our control, such as evasive respondents, incorrect addresses provided by the Client, or refusal of service by the defendant.
                  </p>
                  <p className="text-gray-700 mt-4">
                      We charge for the <em>act of service</em>, not the outcome of your case. Our fees compensate for the time, mileage, and professional effort expended on your behalf.
                  </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold mb-3 text-blue-900">Scope of Services & Liability</h3>
                  <p className="text-gray-700">
                      Just Legal Solutions is a <strong>licensed Oklahoma Process Server</strong> under 12 O.S. § 158.1. We are <strong>not attorneys</strong> and do not provide legal advice, draft legal documents, or represent clients in court.
                  </p>
                  <p className="text-gray-700 mt-4">
                      To the fullest extent permitted by law, our total liability for any claim arising from our services shall not exceed the fees actually paid by the Client for the specific service in question.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Schema removed and consolidated with the one at the top of the page */}
      
      {/* Pricing FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Process Server Pricing FAQ</h2>
          <p className="text-center text-gray-600 mb-12">Answers to common questions about our Oklahoma process serving rates</p>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-lg font-bold mb-3 text-blue-900">What is the cheapest process server option in Oklahoma?</h3>
              <p className="text-gray-600 leading-relaxed">Our Standard Service starts at just $60 for Tulsa County and nearby areas. For budget-conscious clients, we also offer a Single Serve Attempt option starting as low as $30. Contact us to discuss your specific needs and find the most cost-effective solution.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-lg font-bold mb-3 text-blue-900">Are there any hidden fees?</h3>
              <p className="text-gray-600 leading-relaxed">No hidden fees. Our pricing is transparent and upfront. Surcharges for areas outside Tulsa County are quoted before service begins. We clearly communicate all costs including any rush fees, filing fees, or printing charges before you commit.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-lg font-bold mb-3 text-blue-900">Do you offer volume discounts?</h3>
              <p className="text-gray-600 leading-relaxed">Yes! We offer automatic monthly discounts based on your service volume. Law firms and businesses with regular process serving needs receive preferential rates, priority scheduling, and consolidated monthly invoicing. No long-term contracts required.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-lg font-bold mb-3 text-blue-900">What&apos;s included in the base price?</h3>
              <p className="text-gray-600 leading-relaxed">Our standard pricing includes up to 3 service attempts at varied times, GPS-tracked delivery, real-time status updates, a court-ready affidavit of service, and 10 free printed pages. Rush services include expedited scheduling and priority handling.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
              <h3 className="text-lg font-bold mb-3 text-blue-900">How do I get a quote for areas outside Tulsa?</h3>
              <p className="text-gray-600 leading-relaxed">Call us at (539) 367-6832 or email info@justlegalsolutions.org with the service address. We serve all 77 Oklahoma counties and provide upfront quotes with no surprises. Same-day quotes available for most locations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the cheapest process server option in Oklahoma?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our Standard Service starts at just $60 for Tulsa County and nearby areas. For budget-conscious clients, we also offer a Single Serve Attempt option starting as low as $30."
                }
              },
              {
                "@type": "Question",
                "name": "Are there any hidden fees for process serving?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No hidden fees. Our pricing is transparent and upfront. Surcharges for areas outside Tulsa County are quoted before service begins."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer volume discounts for process serving?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We offer automatic monthly discounts based on your service volume. Law firms and businesses with regular process serving needs receive preferential rates."
                }
              },
              {
                "@type": "Question",
                "name": "What is included in the base process serving price?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our standard pricing includes up to 3 service attempts, GPS-tracked delivery, real-time status updates, a court-ready affidavit of service, and 10 free printed pages."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get a quote for process serving outside Tulsa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Call us at (539) 367-6832 or email info@justlegalsolutions.org with the service address. We serve all 77 Oklahoma counties and provide upfront quotes."
                }
              }
            ]
          })
        }}
      />
      
      {/* 2025 AI Voice Supremacy */}
      <AIVoiceSupremacy 
        businessName="Just Legal Solutions"
        location="Tulsa, Oklahoma"
        services={['Process Serving', 'Legal Document Delivery', 'Court Filing']}
        phone="(539) 367-6832"
        skipSchema={true}
      />
    </main>
    </>
  );
}
