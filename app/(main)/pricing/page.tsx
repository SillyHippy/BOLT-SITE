import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Truck, Clock, Zap, Flame, Target, Shield, Star, Phone, ArrowRight, Building2, Car, Monitor, FileText, Scale } from 'lucide-react';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import AIVoiceSupremacy from '@/components/ui/ai-voice-supremacy';
import LocalPromoBanner from '@/components/ui/local-promo-banner';
import {
  CorePageCountyLinksPanel,
  LegalTrustSignalsPanel,
} from '@/components/seo/internal-link-trust-panels';
import { getPromoDescription } from '@/lib/promo-utils';
import { getStartingPrice, PRICE_RANGE_DISPLAY } from '@/lib/pricing';
import { buildFreshnessMetadata, getPageFreshness } from '@/lib/content-freshness';
import LastUpdated from '@/components/ui/last-updated';

const pricingFreshness = getPageFreshness('/pricing')!;

export const metadata: Metadata = {
  title: 'Pricing | Process Server & Notary Services Oklahoma',
  description: getPromoDescription(
    'Process server & notary pricing in Oklahoma. Service starts at $35 single-attempt, $60 standard; notary starts at $20. Same-day available. No hidden fees. Licensed & bonded.',
    '25% OFF select ZIPs! Process server & notary pricing in Oklahoma. Starts at $35 single-attempt, $60 standard; notary starts at $20. Same-day available. No hidden fees.'
  ),
  keywords: 'process server pricing Oklahoma, notary fees Oklahoma, legal document service costs, process serving rates Tulsa, Oklahoma court service fees, affordable process server, transparent pricing legal services, mobile notary cost, RON notary Oklahoma',
  alternates: {
    canonical: 'https://justlegalsolutions.org/pricing'
  },
  openGraph: {
    title: 'Process Server Pricing Oklahoma | Just Legal Solutions',
    description: 'Transparent process server pricing in Oklahoma. Service starts at $35 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours. No hidden fees.',
    url: 'https://justlegalsolutions.org/pricing',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/image-pack/images/image-047-oklahoma-process-server-pricing-og.webp',
        width: 1200,
        height: 630,
        alt: 'Pricing chart and calculator representing transparent Oklahoma process serving costs'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Pricing Oklahoma | Just Legal Solutions',
    description: 'Transparent process server pricing in Oklahoma. Starts at $35 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-047-oklahoma-process-server-pricing-og.webp'],
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
  },
  other: {
    'ai-summary': 'Just Legal Solutions transparent pricing for process serving and notary services in Oklahoma. Starts at: single-attempt $35, standard $60, rush $100, same-day $150, triple-attempt $200, after-hours rush $265. Notary starts at $20 in-office, $25 mobile/RON. Courier starts at $60. All 77 Oklahoma counties served. These are starting prices; final cost depends on distance, attempts, and complexity.',
    'ai-key-facts': 'Single attempt $35, Standard $60, Rush $100, Same-Day $150, Triple-Attempt $200, Standard Courier $60, Rush Courier $100, In-Office Notary $20, Mobile Notary $25/act, RON $25/act, Skip Tracing $50+, Stakeout $105/hr, eFiling free, Tulsa County primary service area, (539) 367-6832',
    ...buildFreshnessMetadata({
      datePublished: pricingFreshness.datePublished,
      dateModified: pricingFreshness.dateModified,
    }).other,
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
      { title: 'Filing Affidavits', description: 'We can file the Return of Service Affidavit with the court for you. <strong>eFiling is free in Oklahoma upon request</strong>. For in-person filing in Tulsa County, the fee is <strong>$35 plus court costs</strong>. Fees for other counties will be quoted upfront.' },
      { title: 'Posting Affidavits', description: 'For services that require posting a notice (e.g., eviction notices) instead of personal delivery, the fee is <strong>$35</strong>.' },
      { title: 'Certified Mailing', description: 'We can send affidavits via certified mail for <strong>$35 plus postage costs</strong>.' },
      { title: 'Printing Documents', description: 'A printing fee of <strong>$0.20 per page</strong> may apply for documents requiring substantial printing. Please contact us for details regarding large or complex print jobs.' },
    ]
  },
  {
    category: 'Difficult Service & Investigations',
    services: [
      { title: 'Evasive Respondent Stakeout', description: 'For difficult-to-serve individuals, stakeout services are available at <strong>$105 per hour</strong> (2 hour minimum). This is only performed at your request.' },
      { title: 'Skip Tracing', description: 'Need to locate an individual? We offer skip tracing services. Please contact us for a quote.' },
    ]
  },
  {
    category: 'Special Pricing & Court',
    services: [
      { title: 'Single Serve Attempt', description: 'Reduced Rate for only a single serve attempt, the fee starts as low as <strong>$35</strong>.' },
      { title: 'Court Appearance Fees', description: 'Tulsa County appearances: <strong>Up to $500/hour</strong>, billed in full-hour increments (contact us for negotiated rates). Appearances outside Tulsa County: Additional fees based on travel/time will be negotiated beforehand. This fee is separate from standard document service charges and covers time spent attending court and testifying. Rescheduling/cancellation fees may apply.' },
    ]
  },
];

const pricingFaqItems = [
  {
    question: "How much does a process server cost in Tulsa?",
    answer: "Process server costs in Tulsa start at $35 for a single-attempt posting and $60 for standard service (up to three attempts). Rush service starts at $100; same-day delivery starts at $150. County sheriff service in Tulsa County typically runs $40–$50 per attempt with a longer wait. Just Legal Solutions includes GPS-verified proof and real-time updates in every tier."
  },
  {
    question: "What is the cheapest process server option in Oklahoma?",
    answer: "Our Standard Service starts at just $60 for Tulsa County and nearby areas. For budget-conscious clients, we also offer a Single Serve Attempt option starting as low as $35."
  },
  {
    question: "Are there any hidden fees for process serving?",
    answer: "No hidden fees. Our pricing is transparent and upfront. Surcharges for areas outside Tulsa County are quoted before service begins."
  },
  {
    question: "Do you offer volume discounts for process serving?",
    answer: "Yes! We offer automatic monthly discounts based on your service volume. Law firms and businesses with regular process serving needs receive preferential rates."
  },
  {
    question: "What is included in the base process serving price?",
    answer: "Our standard pricing includes up to 3 service attempts, GPS-tracked delivery, real-time status updates, a court-ready affidavit of service, and 10 free printed pages."
  },
  {
    question: "How do I get a quote for process serving outside Tulsa?",
    answer: "Call or text us at (539) 367-6832 or email info@JustLegalSolutions.org with the service address. We serve all 77 Oklahoma counties and provide upfront quotes."
  }
];

export default function PricingPage() {
  return (
    <>
      <UnifiedSchema
        pageType="service"
        url="https://justlegalsolutions.org/pricing"
        title="Process Server Pricing Oklahoma - Just Legal Solutions"
        description="Professional process serving and legal document delivery in Oklahoma with transparent starting prices. Service starts at $35 single-attempt, $60 standard."
        datePublished={pricingFreshness.datePublished}
        dateModified={pricingFreshness.dateModified}
        serviceDetails={{
          name: "Process Server Services Oklahoma",
          description: "Professional process serving and legal document delivery in Oklahoma with transparent starting prices. Service starts at $35 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours.",
          price: "$60-$265",
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
          logo: "https://justlegalsolutions.org/images/jls-logo.webp",
          contactPoint: {
            telephone: "(539) 367-6832",
            email: "info@JustLegalSolutions.org"
          },
          address: {
            streetAddress: "564 E 138th PL",
            addressLocality: "Glenpool",
            addressRegion: "OK",
            postalCode: "74033",
            addressCountry: "US"
          }
        }}
        priceRange={PRICE_RANGE_DISPLAY}
        currenciesAccepted="USD"
        paymentAccepted={["Cash", "Check", "Credit Card", "Online Payment"]}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 156,
          bestRating: 5,
          worstRating: 1
        }}
        faqItems={pricingFaqItems}
      />
      <LocalPromoBanner zips={["74008", "74033", "74037"]} />
      <div className="min-h-screen bg-white font-sans">
        <section className="relative pt-24 pb-12 px-4 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/image-pack/images/image-007-pricing-hero.webp"
              alt="Transparent pricing document on clipboard with coffee on a professional desk"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-blue-50/85 to-slate-100/90" />
          </div>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Process Server Pricing</h1>

            <div id="process-server-cost-tulsa" className="max-w-3xl mx-auto mb-8 text-left bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">How much does a process server cost in Tulsa?</h2>
              <p className="text-gray-800 leading-relaxed">
                <strong>Process server costs in Tulsa start at ${getStartingPrice('single-attempt')} for a single-attempt posting and ${getStartingPrice('standard')} for standard service (up to three attempts).</strong> Rush service starts at ${getStartingPrice('rush')}; same-day delivery starts at ${getStartingPrice('same-day')}. County sheriff fees in Tulsa County typically run $40–$50 per attempt with a 2–4 week turnaround. Just Legal Solutions publishes transparent starting rates with GPS-verified proof included — call (539) 367-6832 for a quote.
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-2"><strong>Process server costs in Oklahoma range from ${getStartingPrice('single-attempt')} for a single attempt to ${getStartingPrice('after-hours-rush')} for 2-hour emergency service.</strong> Standard service (up to 3 attempts) starts at ${getStartingPrice('standard')}. All pricing below is transparent — no hidden fees.</p>
            <p className="text-xl text-gray-600 mb-8">Transparent, competitive rates for Oklahoma legal services</p>

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

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/reviews/google" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition">
                Verify Google Reviews
              </Link>
              <Link href="/process-server-vs-sheriff" className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-4 py-2.5 text-sm font-semibold text-blue-800 hover:bg-blue-100 transition">
                Process Server vs Sheriff
              </Link>
              <Link href="/process-serving" className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-4 py-2.5 text-sm font-semibold text-blue-800 hover:bg-blue-100 transition">
                Compare Service Methods
              </Link>
            </div>

            {/* Provider comparison — featured snippet table */}
            <section className="mt-10 max-w-5xl mx-auto text-left" aria-labelledby="oklahoma-process-server-comparison">
              <h2 id="oklahoma-process-server-comparison" className="text-2xl font-bold text-blue-900 mb-2 text-center">
                Oklahoma Process Server Cost Comparison
              </h2>
              <p className="text-sm text-gray-600 mb-4 text-center max-w-3xl mx-auto">
                Starting prices for standard civil service in the Tulsa metro. Competitor figures are publicly advertised rates; final quotes vary by county, attempts, and urgency.
              </p>
              <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
                <table className="w-full text-sm md:text-base">
                  <thead className="bg-blue-900 text-white">
                    <tr>
                      <th scope="col" className="text-left px-4 py-3 font-semibold">Service tier</th>
                      <th scope="col" className="text-left px-4 py-3 font-semibold">Just Legal Solutions</th>
                      <th scope="col" className="text-left px-4 py-3 font-semibold">ABC Legal</th>
                      <th scope="col" className="text-left px-4 py-3 font-semibold">County Sheriff</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">Single attempt / posting</td>
                      <td className="px-4 py-3 text-green-700 font-semibold">From ${getStartingPrice('single-attempt')}</td>
                      <td className="px-4 py-3 text-gray-700">Varies by market</td>
                      <td className="px-4 py-3 text-gray-700">$40–$50 typical</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Standard (up to 3 attempts)</td>
                      <td className="px-4 py-3 text-green-700 font-semibold">From ${getStartingPrice('standard')}</td>
                      <td className="px-4 py-3 text-gray-700">From ~$88</td>
                      <td className="px-4 py-3 text-gray-700">$40–$50 per attempt</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">Rush / expedited</td>
                      <td className="px-4 py-3 text-green-700 font-semibold">From ${getStartingPrice('rush')}</td>
                      <td className="px-4 py-3 text-gray-700">Premium surcharge</td>
                      <td className="px-4 py-3 text-gray-700">Not available</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Same-day</td>
                      <td className="px-4 py-3 text-green-700 font-semibold">From ${getStartingPrice('same-day')}</td>
                      <td className="px-4 py-3 text-gray-700">Limited availability</td>
                      <td className="px-4 py-3 text-gray-700">Not available</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">Typical turnaround</td>
                      <td className="px-4 py-3 text-gray-700">Same day to 5–10 business days</td>
                      <td className="px-4 py-3 text-gray-700">3–7 business days</td>
                      <td className="px-4 py-3 text-gray-700">2–4 weeks</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-3 font-medium text-gray-900">GPS-verified proof</td>
                      <td className="px-4 py-3 text-green-700 font-semibold">Included</td>
                      <td className="px-4 py-3 text-gray-700">Platform-dependent</td>
                      <td className="px-4 py-3 text-gray-700">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                See also:{' '}
                <Link href="/process-server-vs-sheriff" className="text-blue-700 underline hover:text-blue-900">
                  private process server vs county sheriff
                </Link>
                {' · '}
                <Link href="/oklahoma-process-serving-costs-comparison" className="text-blue-700 underline hover:text-blue-900">
                  county-by-county pricing guide
                </Link>
              </p>
            </section>

            {/* Temporary Fuel Adjustment Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl text-left px-6 py-5 shadow-sm mt-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">⛽</span>
                <div>
                  <p className="font-bold text-amber-900 text-base">Temporary Fuel Adjustment — Effective April 8, 2026</p>
                  <p className="text-amber-800 text-sm mt-1">
                    Due to recent increases in fuel costs in Oklahoma, a temporary $10
                    fuel surcharge has been applied to all fuel-dependent services. We will reduce rates promptly if fuel prices
                    stabilize or drop.{' '}
                    <Link href="/contact" className="font-semibold underline text-amber-900 hover:text-amber-700">
                      Questions? Contact us.
                    </Link>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Standard Service', old: '$60', new: '$70' },
                  { label: 'Rush Service', old: '$100', new: '$110' },
                  { label: 'Same-Day Rush', old: '$150', new: '$160' },
                  { label: 'Standard Courier', old: '$60', new: '$70' },
                  { label: 'Rush Courier', old: '$100', new: '$110' },
                  { label: 'Stakeout', old: '$90/hr', new: '$100/hr' },
                ].map(({ label, old, new: newPrice }) => (
                  <div key={label} className="bg-amber-100/60 rounded-lg px-4 py-3">
                    <p className="text-xs font-semibold text-amber-900 mb-1">{label}</p>
                    <p className="text-sm">
                      <span className="line-through text-amber-600 mr-1">{old}</span>
                      <span className="font-bold text-amber-900">{newPrice}</span>
                    </p>
                  </div>
                ))}
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
                  <span className="font-semibold">Note on Service Area:</span> Standard rates apply to most of <strong>Tulsa County</strong> and select parts of <strong>Creek County (Sapulpa)</strong> & <strong>Wagoner County (Broken Arrow)</strong>. Through our trusted network of process servers, we cover all 77 counties in Oklahoma. A surcharge applies to areas outside the standard-rate zones. Please contact us for a precise quote.
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
                  <p className="text-3xl font-bold text-green-600">${getStartingPrice('standard')}</p>
                  <p className="text-xs text-gray-500 mb-2">starting price</p>
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
                  <p className="text-3xl font-bold text-green-600">${getStartingPrice('rush')}</p>
                  <p className="text-xs text-gray-500 mb-2">starting price</p>
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
                  <p className="text-3xl font-bold text-green-600">${getStartingPrice('same-day')}</p>
                  <p className="text-xs text-gray-500 mb-2">starting price</p>
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
                  <p className="text-3xl font-bold text-green-600">${getStartingPrice('triple-attempt')}</p>
                  <p className="text-xs text-gray-500 mb-2">starting price</p>
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
                <p className="text-xs text-gray-500 mb-2">starting price</p>
                <p className="text-gray-600">Delivery within the same business day or next morning for non-urgent items.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Rush Courier</h3>
                <p className="text-4xl font-bold mb-4 text-gray-800">$100</p>
                <p className="text-xs text-gray-500 mb-2">starting price</p>
                <p className="text-gray-600">Priority delivery guaranteed within 2-3 hours for time-sensitive documents.</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-8">
              Courier pricing applies to Tulsa County, Broken Arrow, &amp; the Sapulpa area. A surcharge applies to other locations.<br />
              <span className="text-gray-600 font-medium">Note: Rates assume documents are complete and court-ready. Additional fees apply for wait time or return trips due to deficient documentation.</span>
            </p>
          </div>
        </section>

        {/* Notary Services Pricing */}
        <section id="notary" className="py-10 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center bg-purple-100 rounded-full p-3 mb-4">
                <Scale className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Notary Services Pricing</h2>
              <p className="text-lg text-gray-600 mt-2">
                Licensed Oklahoma notaries with transparent, state-compliant pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
              {/* In-Office */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center bg-blue-100 rounded-full p-2 mb-3">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">In-Office Notary</h3>
                <div className="mb-3">
                  <p className="text-3xl font-bold text-green-600">Starting at $20</p>
                </div>
                <p className="text-gray-600 mb-3 text-sm">Quick, professional notarization at our office. Includes document review, notary seal, and digital copy.</p>
                <ul className="text-sm text-gray-600 space-y-1.5 mb-4">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />Private signing area</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />15-30 minute turnaround</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />Digital copy emailed</li>
                </ul>
                <p className="text-xs text-gray-500">Mon–Fri 8 AM–6 PM | Sat by appt.</p>
              </div>

              {/* Mobile */}
              <div className="flex flex-col">
                <div className="bg-green-600 text-white text-xs font-bold text-center py-2 rounded-t-xl tracking-wider uppercase">★ Most Popular ★</div>
                <div className="bg-white p-6 rounded-b-xl shadow-lg border-2 border-green-500 border-t-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-2 mb-3">
                    <Car className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-green-600">Mobile Notary</h3>
                  <div className="mb-3">
                    <p className="text-3xl font-bold text-green-600">Starting at $25/act</p>
                    <p className="text-xs text-gray-500 mb-2">travel fees vary by distance</p>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm">We come to you — home, office, hospital, or anywhere in Oklahoma.</p>
                  <ul className="text-sm text-gray-600 space-y-1.5 mb-4">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />Travel to any location in OK</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />Evenings &amp; weekends available</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />Multiple signers welcome</li>
                  </ul>
                  <p className="text-xs text-gray-500">Contact us for travel fee quote</p>
                </div>
              </div>

              {/* RON */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:border-purple-200 transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center bg-purple-100 rounded-full p-2 mb-3">
                  <Monitor className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Remote Online (RON)</h3>
                <div className="mb-3">
                  <p className="text-3xl font-bold text-green-600">Starting at $25/act</p>
                  <p className="text-xs text-gray-500 mb-2">state maximum per act</p>
                </div>
                <p className="text-gray-600 mb-3 text-sm">100% online via secure video. Sign from anywhere in the world.</p>
                <ul className="text-sm text-gray-600 space-y-1.5 mb-4">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />Secure encrypted platform</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />Multi-factor ID verification</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />Instant notarized download</li>
                </ul>
                <p className="text-xs text-gray-500">A platform fee may apply</p>
              </div>
            </div>

            {/* Additional Notary Info */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  What&apos;s Included
                </h3>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-green-500">✓</span>Notary seal &amp; official signature</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✓</span>Document review</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✓</span>Digital copy emailed</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✓</span>Journal records maintained</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✓</span>Errors &amp; Omissions (E&amp;O) insurance</li>
                  <li className="flex items-start gap-2"><span className="text-green-500">✓</span>Absentee ballot affidavits — FREE by law</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Additional Notary Services
                </h3>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-blue-500">•</span><strong>Loan Signing:</strong> Contact us for pricing</li>
                  <li className="flex items-start gap-2"><span className="text-blue-500">•</span><strong>Emergency/After-Hours:</strong> Surcharge may apply</li>
                  <li className="flex items-start gap-2"><span className="text-blue-500">•</span><strong>Holiday Service:</strong> Surcharge may apply — call for availability</li>
                  <li className="flex items-start gap-2"><span className="text-blue-500">•</span><strong>Volume Discounts:</strong> Available for law firms &amp; businesses</li>
                </ul>
              </div>
            </div>

            {/* Notary Pricing Note */}
            <div className="max-w-5xl mx-auto mb-10">
              <div className="bg-purple-50/50 border border-purple-200 rounded-lg p-3 text-center">
                <p className="text-sm text-purple-800">
                  Oklahoma law caps notary fees at <strong>$5 per traditional act</strong> (49 O.S. § 5) and <strong>$25 per RON act</strong> (49 O.S. § 209). Each signature needing notarization = 1 act. <Link href="/notary-laws" className="text-purple-600 font-semibold underline hover:text-purple-800">View Oklahoma notary law details →</Link>
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/notary" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                <Scale className="h-5 w-5" />
                Learn More About Notary Services
                <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="text-sm text-gray-500 mt-3">Or call us directly: <a href="tel:5393676832" className="text-blue-600 font-semibold hover:underline">(539) 367-6832</a></p>
            </div>
          </div>
        </section>

        <section className="py-10 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Additional &amp; Optional Services</h2>
              <p className="text-lg text-gray-600 mt-2">Customize your service with these available add-ons.</p>
            </div>

            <div className="max-w-4xl mx-auto mb-10 bg-amber-50 border border-amber-200 rounded-xl px-6 py-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-2 rounded-full flex-shrink-0 mt-0.5">
                  <Clock className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-900 text-base mb-1">Wait Time &amp; Deficient Documents</h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Filing and courier rates assume documents are <strong>complete and court-ready</strong>. If documents are missing signatures, improperly executed, or rejected—requiring our agent to wait for corrections or make an additional return trip—an <strong>additional wait-time or return-trip fee will apply</strong>. Clients are responsible for ensuring all paperwork is properly prepared prior to submission.
                  </p>
                </div>
              </div>
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
                  <p className="text-gray-700 mt-4 text-sm bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                    <span className="font-semibold text-blue-800">Note on Same-Day Attempts:</span> Occasionally, you may see multiple attempts logged on the same day (e.g., if a respondent communicates they will be home at a specific time but fails to appear). Regardless of same-day follow-ups, we guarantee that your attempts will be spread across at least two distinct days to ensure thorough diligence.
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

        {/* FAQ schema is emitted only by UnifiedSchema via faqItems (no HTML microdata) */}

        {/* AI-Ready Pricing FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Process Server Pricing FAQ</h2>
            <p className="text-center text-gray-600 mb-12">Answers to common questions about our Oklahoma process serving rates</p>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
                <h3 className="text-lg font-bold mb-3 text-blue-900">What is the cheapest process server option in Oklahoma?</h3>
                <p className="text-gray-600 leading-relaxed">Our Standard Service starts at just $60 for Tulsa County and nearby areas. For budget-conscious clients, we also offer a Single Serve Attempt option starting as low as $35. Contact us to discuss your specific needs and find the most cost-effective solution.</p>
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
                <p className="text-gray-600 leading-relaxed">Call or text us at (539) 367-6832 or email info@JustLegalSolutions.org with the service address. We serve all 77 Oklahoma counties and provide upfront quotes with no surprises. Same-day quotes available for most locations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">Related Pricing & Service Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/oklahoma-process-server-pricing" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-blue-800">Oklahoma Process Server Pricing Guide</h3>
                <p className="text-sm text-gray-600 mt-1">Detailed breakdown of process serving costs across Oklahoma</p>
              </Link>
              <Link href="/oklahoma-process-serving-costs-comparison" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-blue-800">Oklahoma Process Serving Costs Comparison</h3>
                <p className="text-sm text-gray-600 mt-1">Compare process serving fees across Oklahoma providers</p>
              </Link>
              <Link href="/process-server-vs-sheriff" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-blue-800">Process Server vs County Sheriff</h3>
                <p className="text-sm text-gray-600 mt-1">Side-by-side comparison for Tulsa and all Oklahoma counties</p>
              </Link>
              <Link href="/oklahoma-process-server-faq" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-blue-800">Process Server FAQ 2026</h3>
                <p className="text-sm text-gray-600 mt-1">Answers to frequently asked questions about Oklahoma process serving</p>
              </Link>
              <Link href="/payments" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-blue-800">Make a Payment</h3>
                <p className="text-sm text-gray-600 mt-1">Securely pay your process serving invoice online</p>
              </Link>
              <Link href="/service-areas" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-blue-800">Oklahoma Service Areas</h3>
                <p className="text-sm text-gray-600 mt-1">View all cities and counties we serve across Oklahoma</p>
              </Link>
              <Link href="/contact" className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-blue-800">Request a Free Quote</h3>
                <p className="text-sm text-gray-600 mt-1">Get a custom quote for your process serving or notary needs</p>
              </Link>
              <Link href="/notary" className="block p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-purple-800">Notary Services</h3>
                <p className="text-sm text-gray-600 mt-1">In-office, mobile, and remote online notarization in Oklahoma</p>
              </Link>
              <Link href="/notary-faqs" className="block p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-purple-800">Notary FAQ</h3>
                <p className="text-sm text-gray-600 mt-1">50+ common notary questions answered for Oklahoma</p>
              </Link>
              <Link href="/notary-laws" className="block p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-purple-800">Oklahoma Notary Laws Guide</h3>
                <p className="text-sm text-gray-600 mt-1">Complete guide to Oklahoma notary requirements and regulations</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <CorePageCountyLinksPanel />
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <LegalTrustSignalsPanel />
          </div>
        </section>

        {/* VideoObject Schema - moved to bottom to keep pricing page focused */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": "How Much Does a Process Server Cost in Oklahoma? — Full 2026 Pricing Breakdown",
          "description": "Complete 2026 breakdown of Oklahoma process server pricing. Service starts at $35 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours. Learn what affects your final cost.",
          "thumbnailUrl": "https://img.youtube.com/vi/zTuTJiO71Gk/maxresdefault.jpg",
          "uploadDate": "2026-04-01T08:00:00-05:00",
          "duration": "PT5M00S",
          "contentUrl": "https://www.youtube.com/watch?v=zTuTJiO71Gk",
          "embedUrl": "https://www.youtube.com/embed/zTuTJiO71Gk",
          "publisher": { "@type": "Organization", "name": "Just Legal Solutions", "logo": { "@type": "ImageObject", "url": "https://justlegalsolutions.org/images/jls-logo.webp" } }
        })}} />

        {/* 2025 AI Voice Supremacy */}
        <AIVoiceSupremacy
          businessName="Just Legal Solutions"
          location="Tulsa, Oklahoma"
          services={['Process Serving', 'Legal Document Delivery', 'Court Filing']}
          phone="(539) 367-6832"
          skipSchema={true}
        />
        <LastUpdated pathname="/pricing" className="text-center text-sm text-gray-500 pb-8" />
      </div>
    </>
  );
}
