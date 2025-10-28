import React from 'react';
import { Metadata } from 'next';
import { CheckCircle, Truck } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import AIVoiceSupremacy from '@/components/ui/ai-voice-supremacy';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Process Server Pricing Oklahoma - Just Legal Solutions | Affordable Rates Starting $30',
  description: 'Transparent process server pricing in Oklahoma starting at $30. Same-day, rush, and standard service options. No hidden fees. Licensed and bonded professionals.',
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

// Data for additional services for easy management
const additionalServices = [
    { title: 'Immediate Action Service', description: 'Critical emergency service for time-sensitive legal situations requiring service within <strong>2-4 hours</strong>. Additional fee of <strong>$100</strong> on top of base service rate. Subject to availability and confirmation.' },
    { title: 'Holiday Service', description: 'Service available on holidays with an additional surcharge of <strong>$25-50</strong> depending on the specific date and urgency. Contact us for availability and exact pricing.' },
    { title: 'Filing Affidavits', description: 'We can file the Return of Service Affidavit with the court for you. <strong>eFiling is free where allowed in Oklahoma</strong>. For in-person filing in Tulsa County, the fee is <strong>$35 plus court costs</strong>. Fees for other counties will be quoted upfront.' },
    { title: 'Printing Documents', description: 'The first 10 pages are printed free of charge. Additional pages are <strong>$0.20 per page</strong>.' },
    { title: 'Set Time of Service', description: 'If you require service at a specific time and date, an additional rush fee may apply. This will be confirmed with you beforehand.' },
    { title: 'Evasive Respondent Stakeout', description: 'For difficult-to-serve individuals, stakeout services are available at <strong>$90 per hour</strong> (2 hour minimum). This is only performed at your request.' },
    { title: 'Multiple Services at Same Address', description: 'When serving multiple individuals at the same location, each additional person is only <strong>$30</strong>.' },
    { title: 'Posting Affidavits', description: 'For services that require posting a notice (e.g., eviction notices) instead of personal delivery, the fee is <strong>$30</strong>.' },
    { title: 'Single Serve Attempt', description: 'Reduced Rate for only a single serve attempt, the fee starts as low as <strong>$30</strong>.' },
    { title: 'Certified Mailing', description: 'We can send affidavits via certified mail for <strong>$35 plus postage costs</strong>.' },
    { title: 'Skip Tracing', description: 'Need to locate an individual? We offer skip tracing services. Please contact us for a quote.' },
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
              description: "First service attempt within 5 business days",
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
          reviewCount: 146,
          bestRating: 5,
          worstRating: 1
        }}
      />
      
      {/* <LocalPromoBanner zips={["74008", "74033", "74037"]} /> */}
      
      <main className="min-h-screen bg-white font-sans">
      <section className="pt-24 pb-10 px-4 bg-gray-100">
        {/* Subtle change: No extra disclaimer box, keep original style */}
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Process Server Pricing</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">JLS Wants to Partner with You</h2>
          <p className="text-gray-700 text-lg font-medium max-w-4xl mx-auto mb-6">
            <strong>If you don&apos;t see exactly what you&apos;re looking for</strong> in our service offerings, have a particularly complex or unique situation, or <strong>need more competitive pricing</strong>, we encourage you to reach out <strong>before exploring alternatives.</strong> We&apos;re happy to discuss your specific needs and create tailored solutions that work for you.
          </p>
          
          <div className="max-w-4xl mx-auto text-gray-700 text-base leading-relaxed">
            <p className="mb-4">
              <strong className="text-blue-600">Volume Discounts:</strong> We offer automatic monthly discounts based on service volume. No contracts required.
            </p>
            <p>
              <strong className="text-blue-600">Partnership Opportunities:</strong> Dedicated account management with priority scheduling and custom billing arrangements. Streamlined processes for businesses requiring regular document delivery and service. Established clients with consistent business receive priority service and preferential rates.
            </p>
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
                    <span className="font-semibold">Note on Service Area:</span> Standard rates apply to <strong>Tulsa County</strong> and select parts of <strong>Creek County (Sapulpa)</strong> & <strong>Wagoner County (Broken Arrow)</strong>. A surcharge applies to all other areas. Please contact us for a precise quote.
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 relative">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Standard Service</h3>
              <div className="mb-3">
                <p className="text-3xl font-bold text-green-600">$60</p>
                <p className="text-xs text-gray-400 mb-2">starting price</p>
              </div>
              <p className="text-gray-600 mb-3 text-sm">First Service Attempt Within 5 Business Days (usually sooner).</p>
              <p className="text-sm text-gray-500">
                Ideal for routine document delivery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 relative">
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
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-500 relative">
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
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 relative">
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
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Standard Courier</h3>
                    <p className="text-4xl font-bold mb-4 text-gray-800">$35</p>
                    <p className="text-xs text-gray-400 mb-2">starting price</p>
                    <p className="text-gray-600">Delivery within the same business day or next morning for non-urgent items.</p>
                </div>
                 <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Rush Courier</h3>
                    <p className="text-4xl font-bold mb-4 text-gray-800">$55</p>
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
        <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Additional & Optional Services</h2>
                <p className="text-lg text-gray-600 mt-2">Customize your service with these available add-ons.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {additionalServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-gray-800">{service.title}</h3>
                            <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: service.description }}></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section id="policies" className="py-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Policies</h2>
          <div className="text-left grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Non-Service Policy</h3>
                <p className="text-gray-700">
                While we strive to ensure the completion of our tasks swiftly and effectively, there may be instances when serving a respondent proves to be impossible for reasons beyond our control (e.g., incorrect addresses, evasive individuals). If we dedicate time and resources to an attempt but are unsuccessful, the standard service fee still applies. We pride ourselves on our high success rates but believe in full transparency.
                </p>
            </div>
            <div>
                 <h3 className="text-xl font-bold mb-3 text-gray-800">Due Diligence Policy</h3>
                <p className="text-gray-700">
                We execute a minimum of three service attempts at different times of the day and on different days of the week, or until all known addresses are drawn to a conclusive determination. <strong>This minimum effort is included in our standard service pricing.</strong>
<br /><br />
Any request for additional service attempts beyond this standard protocol must be negotiated and approved prior to execution, and will be subject to an additional fee.
                </p>
            </div>
            <div>
                 <h3 className="text-xl font-bold mb-3 text-gray-800">Payment & Late Fee Policy</h3>
                <p className="text-gray-700">
                    <strong>Prepayment is required for non-established clients.</strong> This ensures we can dedicate our resources to your case without delay.
                    <br /><br />
                    For established clients, payment is due on the date specified on the invoice. If payment is not received in full by the due date, a one-time late fee of <strong>$40.00</strong> will be assessed. Furthermore, a service charge of <strong>0.5%</strong> of the total outstanding balance will be applied for each day the payment is late, beginning the day after the due date, until the balance is paid in full.
                </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Schema removed and consolidated with the one at the top of the page */}
      
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
