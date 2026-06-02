import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import JsonLd from '@/components/JsonLd';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Process Serving for Attorneys & Law Firms | Oklahoma Legal Support',
  description: 'Dedicated process serving for Oklahoma attorneys and law firms. Volume pricing, monthly billing, real-time tracking portal, and dedicated account management. Call (539) 367-6832.',
  keywords: 'process serving for attorneys oklahoma, law firm process server tulsa, bulk process serving oklahoma, attorney document delivery, legal support services oklahoma, law firm partnership',
  openGraph: {
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp',
      width: 1200,
      height: 630,
      alt: 'Just Legal Solutions — professional process serving in Oklahoma',
    }],
    title: 'Process Serving for Attorneys & Law Firms | Oklahoma Legal Support',
    description: 'Dedicated process serving for Oklahoma attorneys and law firms. Volume pricing, monthly billing, real-time tracking portal, and dedicated account management.',
    type: 'website',
    url: 'https://justlegalsolutions.org/attorney-services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Serving for Attorneys & Law Firms | Oklahoma Legal Support',
    description: 'Dedicated process serving for Oklahoma attorneys and law firms. Volume pricing, monthly billing, real-time tracking portal, and dedicated account management. Call (539) 367-6832.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/attorney-services',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions',
  description: 'Professional process serving and legal support services for attorneys and law firms throughout Oklahoma. Volume pricing, monthly billing, and dedicated account management.',
  url: 'https://justlegalsolutions.org/attorney-services/',
  telephone: '+1-539-367-6832',
  email: 'info@JustLegalSolutions.org',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '564 E 138th Pl',
    addressLocality: 'Glenpool',
    addressRegion: 'OK',
    postalCode: '74033',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '35.9556',
    longitude: '-96.0083',
  },
  areaServed: {
    '@type': 'State',
    name: 'Oklahoma',
  },
  serviceType: 'Attorney Process Serving',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Attorney Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Standard Attorney Service',
          description: '3-5 day service for law firms with volume discounts available',
        },
        price: '60.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Rush Attorney Service',
          description: '24-48 hour priority service for urgent legal matters',
        },
        price: '150.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Same-Day Attorney Service',
          description: 'Emergency same-day service for critical court deadlines',
        },
        price: '265.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Court Filing Assistance',
          description: 'Professional court document filing services',
        },
        price: '25.00',
        priceCurrency: 'USD',
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '156',
  },
  founder: {
    '@type': 'Person',
    name: 'Joseph Iannazzi',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Attorney Process Serving',
  provider: {
    '@type': 'LegalService',
    name: 'Just Legal Solutions',
    telephone: '+1-539-367-6832',
  },
  areaServed: {
    '@type': 'State',
    name: 'Oklahoma',
  },
  description: 'Professional process serving and legal support services specifically designed for attorneys and law firms throughout Oklahoma.',
  offers: {
    '@type': 'Offer',
    price: '60.00',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://justlegalsolutions.org/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Attorney Services',
      item: 'https://justlegalsolutions.org/attorney-services/',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What process serving services do you offer for law firms in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Just Legal Solutions offers comprehensive process serving services for Oklahoma law firms including summons and complaint service, subpoena delivery, eviction notices, family court documents, civil litigation papers, and bankruptcy filings. We provide standard (3-5 day), rush (24-48 hour), and same-day emergency service options with volume discounts for high-volume firms. All services include real-time tracking, GPS verification, photo documentation, and electronic proof of service.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer volume pricing and monthly billing for attorneys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer specialized volume pricing and monthly billing arrangements for law firms with regular process serving needs. Volume discounts are available for firms processing 10+ serves per month. Monthly billing consolidates all services into a single invoice with detailed reporting, eliminating the need for individual transaction processing. Contact us at (539) 367-6832 to discuss customized pricing for your firm.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does private process serving compare to sheriff service in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Private process serving offers significant advantages over sheriff service in Oklahoma. Private servers typically complete service 2-3 times faster than sheriff departments, with success rates of 95%+ compared to 60-70% for sheriff service. Private servers provide real-time updates, GPS tracking, and dedicated customer service. While sheriff service may appear less expensive initially, the higher success rate and faster completion of private service often result in lower overall costs. Additionally, private servers can attempt service at optimal times, including evenings and weekends.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your real-time tracking portal for attorneys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our attorney tracking portal provides 24/7 access to real-time case status updates. Attorneys can view GPS-verified service attempts with timestamps, access photo documentation of service locations, download completed proofs of service, and receive automatic email notifications at each milestone. The portal maintains a complete history of all serves for your firm, making it easy to track patterns and manage multiple cases simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide electronic proof of service for Oklahoma courts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide electronic proof of service that is accepted by all Oklahoma state and federal courts. Our affidavits of service include all required elements under Oklahoma law: server identification and license number, date, time, and location of service, description of the person served, GPS coordinates, and photographic documentation when applicable. Electronic proofs are delivered via email within 24 hours of completed service and are digitally signed for court acceptance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What court filing assistance services do you offer for attorneys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer comprehensive court filing assistance for Oklahoma attorneys including document delivery to all state and federal courts, e-filing support where available, filing deadline management, and confirmation of filing with stamped copies. Our court filing service is available for $25 per filing and includes same-day filing for documents received before 2:00 PM. We serve all Oklahoma district courts, appellate courts, and federal courts in Tulsa, Oklahoma City, and Muskogee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer dedicated account management for law firms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, law firms with regular process serving needs receive dedicated account management from Joseph Iannazzi, owner of Just Legal Solutions. This includes personalized service protocols tailored to your practice areas, priority scheduling for time-sensitive matters, direct phone and email access for urgent requests, monthly usage reports and analytics, and quarterly business reviews to optimize service delivery. Dedicated account management ensures consistent, reliable service aligned with your firm\'s specific needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas of Oklahoma do you cover for attorney process serving?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Just Legal Solutions provides statewide coverage for attorney process serving across all 77 Oklahoma counties. Our network includes licensed process servers in Tulsa County, Oklahoma County, Cleveland County, Canadian County, Rogers County, Wagoner County, Creek County, and all other counties. We maintain servers in major metropolitan areas including Tulsa, Oklahoma City, Norman, Lawton, Enid, and Muskogee, with coverage extending to rural and remote areas throughout the state.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you serve legal documents for attorneys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer three service levels to meet attorney deadlines: Standard service completes within 3-5 business days, Rush service provides 24-48 hour delivery for urgent matters, and Same-Day service handles emergency situations with immediate dispatch. For critical court deadlines, we recommend Rush or Same-Day service to ensure adequate time for filing proof of service. Our success rate exceeds 95% on first attempts for routine service.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of legal documents do you serve for law firms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all types of legal documents for Oklahoma law firms including summons and complaints, subpoenas (witness, deposition, and records), eviction notices and unlawful detainer actions, family court documents (divorce papers, custody orders, child support), probate notices and estate documents, civil litigation papers, small claims documents, restraining orders and protective orders, bankruptcy filings and notices, and corporate service of process. If you have a specialized document type, contact us to discuss your specific requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are your process servers licensed in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all Just Legal Solutions process servers are properly licensed under Oklahoma law. Owner Joseph Iannazzi holds Oklahoma Process Server License. Our servers are bonded and insured, with comprehensive training in Oklahoma service of process requirements under Title 12 O.S. § 2004. We maintain strict compliance with all state and federal regulations governing process serving in Oklahoma.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with attorney services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Getting started is simple. Call (539) 367-6832 or email info@JustLegalSolutions.org to discuss your firm\'s needs. We\'ll set up your attorney account with preferred service protocols, provide access to our tracking portal, and establish billing arrangements (monthly invoicing available). For firms with immediate needs, we can begin service the same day your account is established. We also offer a complimentary consultation to review your current process serving workflow and identify optimization opportunities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you serve federal subpoenas in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We serve federal subpoenas issued under FRCP 45 throughout all three Oklahoma federal districts: Northern District (Tulsa), Western District (Oklahoma City), and Eastern District (Muskogee). This includes deposition, trial, and bankruptcy subpoenas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide status updates for active attorney matters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You receive real-time portal updates, optional text/email notifications after each attempt, and direct support for urgent case escalations so your team always knows current service status.',
      },
    },
  ],
};

const attorneyFaqItems = faqSchema.mainEntity.map((entity) => ({
  question: entity.name,
  answer: entity.acceptedAnswer.text,
}));

export default function AttorneyServicesPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <nav className="text-sm mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-blue-200">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><span className="text-blue-400">/</span></li>
                  <li className="text-white font-medium">Attorney Services</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Process Serving for Attorneys & Law Firms
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Dedicated legal support services for Oklahoma attorneys. Volume pricing, monthly billing, 
                real-time tracking portal, and dedicated account management for law firms of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:539-367-6832"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call (539) 367-6832
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors text-lg"
                >
                  View Attorney Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Your Trusted Legal Support Partner in Oklahoma
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At <Link href="/" className="text-blue-600 hover:underline">Just Legal Solutions</Link>, 
                  we understand the unique demands facing Oklahoma attorneys and law firms. Court deadlines 
                  are non-negotiable, clients expect results, and your reputation depends on reliable service. 
                  That is why we have built our attorney services around the specific needs of legal professionals.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Whether you are a solo practitioner handling occasional service needs or a large firm 
                  processing hundreds of serves monthly, our scalable solutions adapt to your workflow. 
                  With <Link href="/law-firm-services/" className="text-blue-600 hover:underline">dedicated 
                  law firm partnerships</Link>, volume pricing, and comprehensive support services, we function 
                  as an extension of your practice.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <p className="text-gray-800 font-medium">
                    Licensed Process Server | 156+ Five-Star Reviews | Statewide Coverage | 
                    Monthly Billing Available
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Services for Law Firms</h3>
                <ul className="space-y-4">
                  {[
                    'Summons & Complaint Service',
                    'Subpoena Delivery (Witness, Deposition, Records)',
                    'Eviction & Unlawful Detainer Notices',
                    'Family Court Document Service',
                    'Probate & Estate Notices',
                    'Civil Litigation Support',
                    'Small Claims Document Service',
                    'Restraining Order Delivery',
                    'Corporate Service of Process',
                    'Bankruptcy Document Service',
                    'Real-Time Tracking Portal Access',
                    'Court Filing Assistance',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Attorney Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Why Oklahoma Attorneys Choose Just Legal Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">%</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Volume Pricing</h3>
                <p className="text-gray-700 mb-4">
                  Competitive volume discounts for firms with regular service needs. The more you serve, 
                  the more you save. Custom pricing available for high-volume practices.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 10+ serves/month: 10% discount</li>
                  <li>• 25+ serves/month: 15% discount</li>
                  <li>• 50+ serves/month: Custom pricing</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">📅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Billing</h3>
                <p className="text-gray-700 mb-4">
                  Simplify your accounting with consolidated monthly invoicing. One bill, detailed 
                  reporting, and flexible payment terms for established firms.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Single monthly invoice</li>
                  <li>• Detailed service reports</li>
                  <li>• Net-30 payment terms</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">👤</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Account Manager</h3>
                <p className="text-gray-700 mb-4">
                  Direct access to Joseph Iannazzi for personalized service. Your dedicated contact 
                  understands your practice and priorities.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Direct phone/email access</li>
                  <li>• Priority scheduling</li>
                  <li>• Quarterly business reviews</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">📍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Tracking Portal</h3>
                <p className="text-gray-700 mb-4">
                  24/7 access to case status, GPS verification, and photo documentation. Know exactly 
                  where every serve stands at any moment.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Live status updates</li>
                  <li>• GPS location verification</li>
                  <li>• Photo documentation</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Turnaround Times</h3>
                <p className="text-gray-700 mb-4">
                  Standard, rush, and same-day service options to meet any court deadline. 95%+ 
                  first-attempt success rate keeps your cases moving.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 3-5 day standard service</li>
                  <li>• 24-48 hour rush service</li>
                  <li>• Same-day emergency service</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Electronic Proof of Service</h3>
                <p className="text-gray-700 mb-4">
                  Court-ready affidavits delivered electronically within 24 hours. All documents 
                  comply with Oklahoma requirements under Title 12 O.S. § 2004.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 24-hour delivery</li>
                  <li>• Court-compliant format</li>
                  <li>• Digital signatures accepted</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Private vs Sheriff Comparison Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Private Process Server vs. Sheriff Service
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Understanding the advantages of professional private process serving compared to 
              sheriff department service in Oklahoma.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Factor</th>
                    <th className="px-6 py-4 text-center font-semibold">Private Process Server</th>
                    <th className="px-6 py-4 text-center font-semibold">Sheriff Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Average Service Time</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">2-3 days</td>
                    <td className="px-6 py-4 text-center text-gray-600">7-14 days</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">First Attempt Success Rate</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">95%+</td>
                    <td className="px-6 py-4 text-center text-gray-600">60-70%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Service Attempt Hours</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Flexible (evenings/weekends)</td>
                    <td className="px-6 py-4 text-center text-gray-600">Business hours only</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Real-Time Updates</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Yes - GPS tracking</td>
                    <td className="px-6 py-4 text-center text-gray-600">No</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Photo Documentation</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Yes</td>
                    <td className="px-6 py-4 text-center text-gray-600">No</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Customer Service</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Dedicated support</td>
                    <td className="px-6 py-4 text-center text-gray-600">Limited availability</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Rush/Same-Day Options</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Available</td>
                    <td className="px-6 py-4 text-center text-gray-600">Not available</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Volume Pricing</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Yes - discounts available</td>
                    <td className="px-6 py-4 text-center text-gray-600">No</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Typical Cost (Tulsa County)</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">$60 flat rate</td>
                    <td className="px-6 py-4 text-center text-gray-600">$50-75 + mileage</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
              <p className="text-gray-700">
                <strong>Bottom Line:</strong> While sheriff service may appear less expensive initially, 
                the higher success rate, faster service times, and superior documentation of private 
                process serving typically result in lower overall costs and fewer case delays. For 
                time-sensitive matters, private service is often the only viable option.
              </p>
            </div>
          </div>
        </section>

        {/* Tracking Portal Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Real-Time Tracking Portal for Law Firms
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Our attorney tracking portal provides unprecedented visibility into every service 
                  attempt. Know exactly where your documents are, when attempts were made, and the 
                  status of each case—all in real-time.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Live Status Updates',
                      description: 'Track every service attempt as it happens with instant notifications.',
                    },
                    {
                      title: 'GPS Verification',
                      description: 'Confirm service locations with precise GPS coordinates for every attempt.',
                    },
                    {
                      title: 'Photo Documentation',
                      description: 'View photos of service locations for enhanced verification.',
                    },
                    {
                      title: 'Electronic Proof Download',
                      description: 'Download completed affidavits of service instantly, 24/7.',
                    },
                    {
                      title: 'Case History Archive',
                      description: 'Access complete service history for your firm at any time.',
                    },
                    {
                      title: 'Bulk Case Management',
                      description: 'Manage multiple cases simultaneously with our intuitive dashboard.',
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">{feature.title}</h4>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Portal Access Included Free</h3>
                <p className="text-gray-300 text-center mb-8">
                  All attorney accounts receive complimentary access to our tracking portal 
                  with no monthly fees or subscription costs.
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
                    <span className="text-gray-300">Portal Access</span>
                    <span className="text-green-400 font-semibold">FREE</span>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
                    <span className="text-gray-300">Unlimited Case Tracking</span>
                    <span className="text-green-400 font-semibold">FREE</span>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
                    <span className="text-gray-300">Document Downloads</span>
                    <span className="text-green-400 font-semibold">FREE</span>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
                    <span className="text-gray-300">Email Notifications</span>
                    <span className="text-green-400 font-semibold">FREE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Court Filing Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-blue-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Courts We Serve</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Oklahoma State Courts</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• District Courts (all 77 counties)</li>
                        <li>• Court of Civil Appeals</li>
                        <li>• Court of Criminal Appeals</li>
                        <li>• Oklahoma Supreme Court</li>
                        <li>• Workers' Compensation Court</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Federal Courts</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Northern District (Tulsa)</li>
                        <li>• Western District (Oklahoma City)</li>
                        <li>• Eastern District (Muskogee)</li>
                        <li>• Bankruptcy Courts (all districts)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Court Filing Assistance
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Streamline your practice with our professional <Link href="/courthouse-filing-services/" 
                  className="text-blue-600 hover:underline">court filing services</Link>. We handle 
                  document delivery to all Oklahoma state and federal courts, ensuring your filings 
                  are submitted correctly and on time.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    'Same-day filing for documents received before 2:00 PM',
                    'Filing deadline management and reminders',
                    'Confirmation of filing with stamped copies',
                    'E-filing support where available',
                    'Emergency filing services for urgent matters',
                    'Document retrieval and copy services',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Court Filing Service</span>
                    <span className="text-2xl font-bold text-blue-600">$25</span>
                  </div>
                  <p className="text-gray-600 text-sm">Per filing, includes confirmation and stamped copies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Attorney Pricing & Volume Discounts
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Transparent, flat-rate pricing with volume discounts for law firms. All packages 
              include up to three attempts, GPS verification, and electronic proof of service.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Standard Service</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$60</div>
                <p className="text-gray-600 mb-6">3-5 business days</p>
                <ul className="text-left text-gray-700 space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Up to 3 attempts
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    GPS verification
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Photo documentation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Electronic proof of service
                  </li>
                </ul>
                <a
                  href="tel:539-367-6832"
                  className="block w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-600 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rush Service</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$150</div>
                <p className="text-gray-600 mb-6">24-48 hours</p>
                <ul className="text-left text-gray-700 space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Priority handling
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Up to 3 attempts
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    GPS & photo verification
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Real-time updates
                  </li>
                </ul>
                <a
                  href="tel:539-367-6832"
                  className="block w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Service</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$265</div>
                <p className="text-gray-600 mb-6">Emergency service</p>
                <ul className="text-left text-gray-700 space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Immediate dispatch
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Multiple attempts same day
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Complete documentation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Court deadline compliance
                  </li>
                </ul>
                <a
                  href="tel:539-367-6832"
                  className="block w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
            
            <div className="mt-12 bg-blue-50 p-8 rounded-xl max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Volume Discounts for Law Firms</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600">serves/month</div>
                  <div className="text-green-600 font-semibold">10% off</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">25+</div>
                  <div className="text-gray-600">serves/month</div>
                  <div className="text-green-600 font-semibold">15% off</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">serves/month</div>
                  <div className="text-green-600 font-semibold">Custom</div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4">
                Contact us at (539) 367-6832 to discuss customized pricing for your firm.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions for Attorneys
            </h2>
            
            <div className="space-y-6">
              {attorneyFaqItems.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Related Services for Law Firms
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link href="/law-firm-services/" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Law Firm Partnerships</h3>
                <p className="text-gray-700">
                  Comprehensive partnership programs for Oklahoma law firms. Customized service 
                  agreements, priority scheduling, and dedicated support for your practice.
                </p>
              </Link>
              <Link href="/process-serving/" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Process Serving</h3>
                <p className="text-gray-700">
                  Professional process serving for all document types throughout Oklahoma. 
                  Learn more about our comprehensive service offerings.
                </p>
              </Link>
              <Link href="/courier-services" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Legal Document Courier</h3>
                <p className="text-gray-700">
                  Secure same-day delivery between law offices, courts, and opposing counsel with 
                  chain-of-custody documentation statewide.
                </p>
              </Link>
              <Link href="/courthouse-filing-services/" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Court Filing Services</h3>
                <p className="text-gray-700">
                  Professional document filing at all Oklahoma state and federal courts. 
                  Same-day filing available for time-sensitive matters.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Guides for Oklahoma Attorneys</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/resources/attorneys-guide-hiring-process-server" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Attorney&apos;s Hiring Guide</h3>
                <p className="text-gray-600 text-sm">Free PDF on vetting process servers and avoiding service defects</p>
              </Link>
              <Link href="/for-attorneys" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-blue-900 mb-2">For Attorneys Overview</h3>
                <p className="text-gray-600 text-sm">Portal access, volume pricing, and firm account setup</p>
              </Link>
              <Link href="/process-serving" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Process Serving Services</h3>
                <p className="text-gray-600 text-sm">Statewide service under Oklahoma Title 12 rules</p>
              </Link>
              <Link href="/tulsa-process-server" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Tulsa Process Server</h3>
                <p className="text-gray-600 text-sm">Tulsa County district court and metro service areas</p>
              </Link>
              <Link href="/resources/oklahoma-service-of-process-reference" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Service of Process Reference</h3>
                <p className="text-gray-600 text-sm">12 O.S. § 2004 personal, substitute, and publication methods</p>
              </Link>
              <Link href="/oklahoma-process-serving-hub" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Calculators &amp; Guides Hub</h3>
                <p className="text-gray-600 text-sm">Deadlines, witness fees, and service eligibility tools</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with Just Legal Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your firm's process serving needs. From volume pricing 
              to dedicated account management, we have the solutions to support your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:539-367-6832"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors text-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (539) 367-6832
              </a>
            </div>
            <p className="mt-6 text-blue-200">
              Licensed Process Server | 156+ Five-Star Reviews | Statewide Coverage
            </p>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-8 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 text-center">
              <strong>Disclaimer:</strong> This information is provided for educational purposes only 
              and does not constitute legal advice. Consult with a qualified attorney for advice 
              specific to your situation. Just Legal Solutions is a process serving company and does 
              not provide legal representation or advice. Service requirements may vary by jurisdiction 
              and case type.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
