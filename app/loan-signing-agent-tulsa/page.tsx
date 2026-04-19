import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    alternates: {
    canonical: 'https://justlegalsolutions.org/loan-signing-agent-tulsa',
  },
title: 'Loan Signing Agent Tulsa | Mortgage & Refinance Closings',
  description: 'Professional loan signing agent services in Tulsa, Oklahoma. NNA-certified notary signing agents for purchases, refinances, HELOCs & reverse mortgages. Call (539) 367-6832.',
  keywords: 'loan signing agent tulsa, notary signing agent oklahoma, mortgage closing notary tulsa, refinance closing notary, HELOC notary oklahoma, reverse mortgage notary, eClosing, hybrid closing',
  openGraph: {
    title: 'Loan Signing Agent Tulsa | Mortgage & Refinance Closings',
    description: 'Professional loan signing agent services in Tulsa, Oklahoma. NNA-certified notary signing agents for purchases, refinances, HELOCs & reverse mortgages.',
    type: 'website',
    url: 'https://justlegalsolutions.org/loan-signing-agent-tulsa/',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Just Legal Solutions',
  description: 'Professional loan signing agent and notary services in Tulsa, Oklahoma. NNA-certified notary signing agents for mortgage closings, refinances, HELOCs, and reverse mortgages.',
  url: 'https://justlegalsolutions.org/loan-signing-agent-tulsa/',
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
    '@type': 'City',
    name: 'Tulsa',
    containedInPlace: {
      '@type': 'State',
      name: 'Oklahoma',
    },
  },
  serviceType: ['Loan Signing Agent', 'Notary Signing Agent', 'Mortgage Closing Notary', 'Refinance Closing Notary'],
  priceRange: '$$',
  openingHours: 'Mo-Fr 08:00-18:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '156',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Loan Signing Agent Services Tulsa',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Just Legal Solutions',
    telephone: '+1-539-367-6832',
  },
  areaServed: {
    '@type': 'City',
    name: 'Tulsa',
    containedInPlace: {
      '@type': 'State',
      name: 'Oklahoma',
    },
  },
  serviceType: [
    'Purchase Closing Notary',
    'Refinance Closing Notary',
    'HELOC Notary Services',
    'Reverse Mortgage Notary',
    'eClosing Services',
    'Hybrid Closing Notary',
  ],
  description: 'Professional loan signing agent services for all types of real estate transactions in Tulsa and surrounding Oklahoma areas. NNA-certified agents with 50+ years combined legal experience.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
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
      name: 'Loan Signing Agent Tulsa',
      item: 'https://justlegalsolutions.org/loan-signing-agent-tulsa/',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a loan signing agent and a regular notary public?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A loan signing agent (also called a notary signing agent or NSA) is a specialized notary public who has additional training and certification specifically for handling mortgage loan documents. While a regular notary can witness signatures and administer oaths, a loan signing agent understands complex loan documents, knows how to properly execute mortgage packages, and is familiar with lender and title company requirements. Loan signing agents in Oklahoma must be commissioned notaries who have completed specialized training through organizations like the National Notary Association (NNA) and often carry errors and omissions insurance specifically for loan signings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of loan signings do you handle in Tulsa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Just Legal Solutions handles all types of loan signings in the Tulsa area, including purchase closings for home buyers, refinance closings for homeowners looking to lower their interest rates or access equity, Home Equity Line of Credit (HELOC) signings, reverse mortgages for seniors, construction loan closings, commercial real estate transactions, and loan modifications. We also handle eClosings and hybrid closings for clients who prefer digital document execution combined with in-person notarization.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a loan signing agent cost in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Loan signing agent fees in Oklahoma vary based on the type of transaction, document package size, location, and timing. Standard refinance or purchase closings typically range from $150-$250, while HELOCs and simpler transactions may cost less. After-hours, weekend, or rush signings may incur additional fees. Remote or rural locations outside the Tulsa metro area may also have travel fees. Contact Just Legal Solutions at (539) 367-6832 for a specific quote based on your transaction needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I bring to my loan signing appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For your loan signing appointment, bring a valid government-issued photo ID (driver\'s license, state ID, or passport), any additional identification documents your lender requested, a cashier\'s check for closing costs if required (verify amount with your lender), proof of homeowner\'s insurance if purchasing, and a list of questions you may have. Do not sign any documents before the appointment, as the notary must witness all signatures. If others are on the loan, they must also attend with proper ID.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical loan signing take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical loan signing appointment takes between 30 minutes to 1 hour, depending on the complexity of the transaction. Purchase closings and refinances with larger document packages usually take 45-60 minutes, while HELOCs or simpler transactions may be completed in 30-45 minutes. Reverse mortgages often take longer due to additional counseling requirements and document review. Your loan signing agent will review each document with you, explain what you\'re signing, and ensure all signatures, initials, and dates are completed correctly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an eClosing or hybrid closing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An eClosing (electronic closing) is a mortgage closing where all or most documents are signed electronically using secure digital platforms. A hybrid closing combines electronic signing of non-notarized documents with in-person signing of notarized documents. In Oklahoma, eClosings and hybrid closings are becoming increasingly popular as they offer convenience, faster processing, and reduced paper waste. Just Legal Solutions is equipped to handle both traditional paper closings and eClosing/hybrid transactions, using secure platforms that comply with Oklahoma notary laws under Title 49 O.S. § 1-101 et seq.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are loan signing agents required to be certified in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While Oklahoma law does not specifically require loan signing agents to hold additional certification beyond their notary commission, most title companies, lenders, and signing services require or strongly prefer agents who have completed specialized training. The National Notary Association (NNA) certification is the industry standard and demonstrates that an agent has completed comprehensive training on loan documents, signing procedures, and professional standards. Just Legal Solutions\' loan signing agents hold NNA certification and carry errors and omissions insurance specifically for loan signings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer mobile loan signing services in Tulsa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Just Legal Solutions offers mobile loan signing services throughout the Tulsa metropolitan area and surrounding communities. Our notary signing agents will travel to your home, office, or another convenient location to conduct your loan signing. Mobile service is available during business hours, evenings, and weekends to accommodate your schedule. We serve Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sapulpa, Sand Springs, and other nearby communities. Contact us at (539) 367-6832 to schedule a mobile loan signing appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after my loan signing is complete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After your loan signing is complete, the notary signing agent will review all documents to ensure everything is properly signed, dated, and notarized. The documents are then securely packaged and returned to the title company, lender, or signing service according to their specific instructions. For most transactions, documents are returned the same day or next business day. The title company will then coordinate with your lender to fund the loan, and you\'ll receive confirmation when the transaction is complete. For purchases, this typically means you\'ll receive keys to your new home.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a loan signing agent explain the documents I\'m signing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A loan signing agent can explain what each document is and point out where signatures and initials are required, but they cannot provide legal advice or explain the specific terms, conditions, or implications of the loan documents. For questions about interest rates, payment amounts, fees, or legal consequences of the documents, you should contact your loan officer, lender, or an attorney. Under Oklahoma law and professional standards, notaries must remain impartial and cannot advise signers on the content or consequences of documents they are notarizing.',
      },
    },
  ],
};

export default function LoanSigningAgentTulsa() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <nav className="text-sm mb-4" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-blue-200">
                  <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                  <li><span className="text-blue-300">/</span></li>
                  <li className="text-white">Loan Signing Agent Tulsa</li>
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Loan Signing Agent Tulsa
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Professional Notary Signing Agent Services for Mortgages, Refinances & HELOCs
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
                  href="/contact/"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-colors text-lg"
                >
                  Schedule a Signing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  NNA-Certified Notary Signing Agents in Tulsa, Oklahoma
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  When it comes to real estate transactions, accuracy and professionalism are paramount. 
                  Just Legal Solutions provides expert <strong>loan signing agent services in Tulsa</strong> and 
                  throughout Oklahoma, ensuring your mortgage closings, refinances, and HELOC transactions 
                  are handled with the precision and care they deserve.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  With over <strong>50 years of combined legal experience</strong> and more than 
                  <strong>156 five-star reviews</strong>, our team of National Notary Association (NNA) certified 
                  signing agents has the expertise to handle even the most complex loan document packages. 
                  We work with title companies, mortgage lenders, escrow officers, and individual borrowers 
                  throughout the Tulsa metropolitan area.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">NNA Certified</h3>
                      <p className="text-gray-600 text-sm">Background screened & certified</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">E&O Insured</h3>
                      <p className="text-gray-600 text-sm">$1M errors & omissions coverage</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">eClosing Ready</h3>
                      <p className="text-gray-600 text-sm">Digital & hybrid closing capable</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Mobile Service</h3>
                      <p className="text-gray-600 text-sm">We come to your location</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Just Legal Solutions?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">50+ years combined legal experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">156+ five-star client reviews</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Same-day and rush signing available</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Evening and weekend appointments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Secure document handling & transport</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Serving all of Tulsa metro & surrounding areas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Signing vs General Notary Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Loan Signing Agent vs. General Notary Public
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the difference between a loan signing agent and a regular notary can help you choose the right professional for your real estate transaction.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">General Notary Public</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Witnesses signatures on general documents
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Administers oaths and affirmations
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Limited training on loan documents
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    May not understand mortgage terminology
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Not familiar with lender requirements
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-blue-500">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Notary Signing Agent (NSA)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Specialized training in loan documents
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    NNA certification and background screening
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Understands mortgage terminology & processes
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Familiar with lender & title company requirements
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Carries E&O insurance for loan signings
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Knows proper document execution procedures
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-700">
                A <strong>notary signing agent</strong> is specifically trained to handle the complex documentation 
                involved in real estate transactions. Under Oklahoma law (Title 49 O.S. § 1-101 et seq.), 
                notaries must follow strict procedures, and loan signing agents have additional expertise 
                to ensure compliance with lender, title company, and regulatory requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Loan Signing Services We Provide
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Just Legal Solutions handles all types of real estate loan signings throughout Tulsa and Oklahoma.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Purchase Closings */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Purchase Closings</h3>
                <p className="text-gray-600 mb-4">
                  Complete signing services for home buyers, including deed of trust, promissory note, 
                  closing disclosure, and all lender-required documents. We ensure a smooth closing 
                  experience for your new home purchase.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• First-time buyer packages</li>
                  <li>• Investment property purchases</li>
                  <li>• FHA, VA, and conventional loans</li>
                </ul>
              </div>

              {/* Refinance Closings */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Refinance Closings</h3>
                <p className="text-gray-600 mb-4">
                  Professional signing services for rate-and-term refinances and cash-out refinances. 
                  We help homeowners take advantage of lower interest rates or access their home equity 
                  with accurate document execution.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Rate and term refinances</li>
                  <li>• Cash-out refinances</li>
                  <li>• Streamline refinances</li>
                </ul>
              </div>

              {/* HELOC Signings */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">HELOC Signings</h3>
                <p className="text-gray-600 mb-4">
                  Home Equity Line of Credit signing services for homeowners accessing their property's 
                  equity. We handle the unique documentation requirements for HELOCs, including the 
                  agreement, disclosure statements, and security instruments.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• New HELOC applications</li>
                  <li>• HELOC modifications</li>
                  <li>• Subordination agreements</li>
                </ul>
              </div>

              {/* Reverse Mortgages */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reverse Mortgages</h3>
                <p className="text-gray-600 mb-4">
                  Specialized signing services for HECM (Home Equity Conversion Mortgage) and proprietary 
                  reverse mortgages. We understand the additional counseling requirements and unique 
                  documentation for senior borrowers.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• HECM originations</li>
                  <li>• Reverse mortgage refinances</li>
                  <li>• Counseling verification</li>
                </ul>
              </div>

              {/* Construction Loans */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Construction Loans</h3>
                <p className="text-gray-600 mb-4">
                  Signing services for construction-to-permanent loans and stand-alone construction 
                  financing. We handle the complex draw schedules and builder agreements involved 
                  in new construction projects.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Construction-to-permanent loans</li>
                  <li>• Renovation loans</li>
                  <li>• Builder draw packages</li>
                </ul>
              </div>

              {/* eClosing/Hybrid */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">eClosing & Hybrid</h3>
                <p className="text-gray-600 mb-4">
                  Digital closing solutions combining the convenience of electronic signatures with 
                  the security of in-person notarization. We use secure platforms compliant with 
                  Oklahoma notary laws for a modern closing experience.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Remote online notarization (RON)</li>
                  <li>• Hybrid closings</li>
                  <li>• In-person electronic notarization (IPEN)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Loan Signing Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A smooth, professional experience from scheduling to document return.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule</h3>
                <p className="text-gray-600">
                  Contact us at <a href="tel:539-367-6832" className="text-blue-600 hover:underline">(539) 367-6832</a> or 
                  <a href="/contact/" className="text-blue-600 hover:underline"> online</a> to schedule your signing. 
                  We offer flexible appointment times including evenings and weekends.
                </p>
              </div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Confirmation</h3>
                <p className="text-gray-600">
                  We confirm all details including location, time, document type, and special requirements. 
                  You'll receive a confirmation call before the appointment.
                </p>
              </div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Signing</h3>
                <p className="text-gray-600">
                  Our NNA-certified agent arrives on time, verifies identity, explains each document, 
                  and ensures all signatures, initials, and dates are completed correctly.
                </p>
              </div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Return</h3>
                <p className="text-gray-600">
                  Documents are securely packaged and returned to the title company or lender 
                  according to their specifications, typically same-day or next business day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NNA Credentials Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  NNA-Certified & Background Screened
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Just Legal Solutions' loan signing agents hold certification from the National Notary Association (NNA), 
                  the gold standard in the notary signing agent industry. Our agents have completed comprehensive 
                  training on loan document execution, mortgage industry standards, and professional ethics.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">NNA Notary Signing Agent Certification</h4>
                      <p className="text-gray-600">Comprehensive training on loan documents and signing procedures</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Background Screening</h4>
                      <p className="text-gray-600">Annual background checks through NNA's certified screening program</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Errors & Omissions Insurance</h4>
                      <p className="text-gray-600">$1 million E&O coverage specifically for loan signing services</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Oklahoma Notary Commission</h4>
                      <p className="text-gray-600">Valid commissions in good standing under Oklahoma law (49 O.S. § 1-101)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why NNA Certification Matters</h3>
                <p className="text-gray-700 mb-4">
                  The National Notary Association is the leading professional organization for notaries in the United States. 
                  NNA certification demonstrates that a signing agent has:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    Completed specialized training on loan documents and mortgage processes
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    Passed a comprehensive examination on signing procedures
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    Undergone annual background screening for security clearance
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    Demonstrated commitment to professional standards and ethics
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">✓</span>
                    Access to ongoing education and industry updates
                  </li>
                </ul>
                <p className="text-gray-700 mt-6">
                  Most title companies, lenders, and signing services require or strongly prefer 
                  NNA-certified signing agents for their transactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* eClosing Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                eClosing & Hybrid Closing Solutions
              </h2>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                Modern closing options for the digital age. Secure, convenient, and compliant with Oklahoma law.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">eClosing</h3>
                <p className="text-indigo-100 mb-4">
                  Fully electronic closings where all documents are signed digitally using secure, 
                  compliant platforms. Fast, paperless, and environmentally friendly.
                </p>
                <ul className="text-sm text-indigo-200 space-y-1">
                  <li>• Electronic document execution</li>
                  <li>• Digital certificate authentication</li>
                  <li>• Secure audit trails</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Hybrid Closing</h3>
                <p className="text-indigo-100 mb-4">
                  The best of both worlds: sign non-notarized documents electronically in advance, 
                  then meet with our notary for the notarized documents.
                </p>
                <ul className="text-sm text-indigo-200 space-y-1">
                  <li>• Reduced appointment time</li>
                  <li>• Review documents in advance</li>
                  <li>• In-person notarization for security</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">RON Capable</h3>
                <p className="text-indigo-100 mb-4">
                  Remote Online Notarization allows signers to complete transactions from anywhere 
                  using secure video conferencing and identity verification.
                </p>
                <ul className="text-sm text-indigo-200 space-y-1">
                  <li>• Video conference notarization</li>
                  <li>• Multi-factor identity verification</li>
                  <li>• Tamper-evident digital seals</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-indigo-100 max-w-3xl mx-auto">
                All eClosing and hybrid closing services comply with Oklahoma notary laws under 
                <strong> Title 49 O.S. § 1-101 et seq.</strong> and the Oklahoma Remote Online Notarization Act. 
                Our platforms use bank-grade encryption and maintain complete audit trails for every transaction.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Loan Signing Services Throughout Tulsa & Oklahoma
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Mobile loan signing services available throughout the Tulsa metropolitan area and beyond.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">Tulsa</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">Broken Arrow</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">Owasso</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">Bixby</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">Jenks</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">Sapulpa</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">Sand Springs</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">Glenpool</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">Coweta</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">Claremore</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">Muskogee</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-semibold text-gray-900">And More</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Related Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our full range of notary and legal support services.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <a href="/title-company-notary-services/" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow block">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Title Company Notary Services</h3>
                <p className="text-gray-600">
                  Specialized notary services for title companies, including deed signings, affidavits, and closing document notarization.
                </p>
              </a>
              <a href="/mobile-notary/" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow block">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Mobile Notary Services</h3>
                <p className="text-gray-600">
                  Convenient mobile notary services that come to your location throughout Tulsa and surrounding areas.
                </p>
              </a>
              <a href="/notary/" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow block">
                <h3 className="text-xl font-bold text-blue-600 mb-2">General Notary Services</h3>
                <p className="text-gray-600">
                  Full-service notary for all your document notarization needs, including acknowledgments, jurats, and oaths.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about loan signing agent services in Tulsa, Oklahoma.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What is the difference between a loan signing agent and a regular notary public?
                </h3>
                <p className="text-gray-700">
                  A loan signing agent (also called a notary signing agent or NSA) is a specialized notary public 
                  who has additional training and certification specifically for handling mortgage loan documents. 
                  While a regular notary can witness signatures and administer oaths, a loan signing agent understands 
                  complex loan documents, knows how to properly execute mortgage packages, and is familiar with lender 
                  and title company requirements. Loan signing agents in Oklahoma must be commissioned notaries who 
                  have completed specialized training through organizations like the National Notary Association (NNA) 
                  and often carry errors and omissions insurance specifically for loan signings.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What types of loan signings do you handle in Tulsa?
                </h3>
                <p className="text-gray-700">
                  Just Legal Solutions handles all types of loan signings in the Tulsa area, including purchase closings 
                  for home buyers, refinance closings for homeowners looking to lower their interest rates or access equity, 
                  Home Equity Line of Credit (HELOC) signings, reverse mortgages for seniors, construction loan closings, 
                  commercial real estate transactions, and loan modifications. We also handle eClosings and hybrid closings 
                  for clients who prefer digital document execution combined with in-person notarization.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How much does a loan signing agent cost in Oklahoma?
                </h3>
                <p className="text-gray-700">
                  Loan signing agent fees in Oklahoma vary based on the type of transaction, document package size, 
                  location, and timing. Standard refinance or purchase closings typically range from $150-$250, while 
                  HELOCs and simpler transactions may cost less. After-hours, weekend, or rush signings may incur 
                  additional fees. Remote or rural locations outside the Tulsa metro area may also have travel fees. 
                  Contact Just Legal Solutions at <a href="tel:539-367-6832" className="text-blue-600 hover:underline">(539) 367-6832</a> for a specific quote based on your transaction needs.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What should I bring to my loan signing appointment?
                </h3>
                <p className="text-gray-700">
                  For your loan signing appointment, bring a valid government-issued photo ID (driver's license, 
                  state ID, or passport), any additional identification documents your lender requested, a cashier's 
                  check for closing costs if required (verify amount with your lender), proof of homeowner's insurance 
                  if purchasing, and a list of questions you may have. Do not sign any documents before the appointment, 
                  as the notary must witness all signatures. If others are on the loan, they must also attend with proper ID.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How long does a typical loan signing take?
                </h3>
                <p className="text-gray-700">
                  A typical loan signing appointment takes between 30 minutes to 1 hour, depending on the complexity 
                  of the transaction. Purchase closings and refinances with larger document packages usually take 45-60 
                  minutes, while HELOCs or simpler transactions may be completed in 30-45 minutes. Reverse mortgages 
                  often take longer due to additional counseling requirements and document review. Your loan signing agent 
                  will review each document with you, explain what you're signing, and ensure all signatures, initials, 
                  and dates are completed correctly.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What is an eClosing or hybrid closing?
                </h3>
                <p className="text-gray-700">
                  An eClosing (electronic closing) is a mortgage closing where all or most documents are signed 
                  electronically using secure digital platforms. A hybrid closing combines electronic signing of 
                  non-notarized documents with in-person signing of notarized documents. In Oklahoma, eClosings 
                  and hybrid closings are becoming increasingly popular as they offer convenience, faster processing, 
                  and reduced paper waste. Just Legal Solutions is equipped to handle both traditional paper closings 
                  and eClosing/hybrid transactions, using secure platforms that comply with Oklahoma notary laws under 
                  Title 49 O.S. § 1-101 et seq.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Are loan signing agents required to be certified in Oklahoma?
                </h3>
                <p className="text-gray-700">
                  While Oklahoma law does not specifically require loan signing agents to hold additional certification 
                  beyond their notary commission, most title companies, lenders, and signing services require or strongly 
                  prefer agents who have completed specialized training. The National Notary Association (NNA) certification 
                  is the industry standard and demonstrates that an agent has completed comprehensive training on loan 
                  documents, signing procedures, and professional standards. Just Legal Solutions' loan signing agents 
                  hold NNA certification and carry errors and omissions insurance specifically for loan signings.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Do you offer mobile loan signing services in Tulsa?
                </h3>
                <p className="text-gray-700">
                  Yes, Just Legal Solutions offers mobile loan signing services throughout the Tulsa metropolitan area 
                  and surrounding communities. Our notary signing agents will travel to your home, office, or another 
                  convenient location to conduct your loan signing. Mobile service is available during business hours, 
                  evenings, and weekends to accommodate your schedule. We serve Tulsa, Broken Arrow, Owasso, Bixby, 
                  Jenks, Sapulpa, Sand Springs, and other nearby communities. Contact us at <a href="tel:539-367-6832" className="text-blue-600 hover:underline">(539) 367-6832</a> to schedule a mobile loan signing appointment.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What happens after my loan signing is complete?
                </h3>
                <p className="text-gray-700">
                  After your loan signing is complete, the notary signing agent will review all documents to ensure 
                  everything is properly signed, dated, and notarized. The documents are then securely packaged and 
                  returned to the title company, lender, or signing service according to their specific instructions. 
                  For most transactions, documents are returned the same day or next business day. The title company 
                  will then coordinate with your lender to fund the loan, and you'll receive confirmation when the 
                  transaction is complete. For purchases, this typically means you'll receive keys to your new home.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Can a loan signing agent explain the documents I'm signing?
                </h3>
                <p className="text-gray-700">
                  A loan signing agent can explain what each document is and point out where signatures and initials 
                  are required, but they cannot provide legal advice or explain the specific terms, conditions, or 
                  implications of the loan documents. For questions about interest rates, payment amounts, fees, or 
                  legal consequences of the documents, you should contact your loan officer, lender, or an attorney. 
                  Under Oklahoma law and professional standards, notaries must remain impartial and cannot advise 
                  signers on the content or consequences of documents they are notarizing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Schedule Your Loan Signing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Just Legal Solutions today for professional loan signing agent services in Tulsa and throughout Oklahoma. 
              Our NNA-certified agents are ready to ensure your closing goes smoothly.
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
              <a
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-colors text-lg"
              >
                Request Appointment
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-gray-500">
              <strong>Disclaimer:</strong> The information provided on this page is for informational purposes only 
              and does not constitute legal advice. Notaries public are not attorneys and cannot provide legal advice 
              or explain the legal consequences of documents. For legal questions regarding your loan documents, 
              please consult with your lender, title company, or an attorney licensed to practice in Oklahoma. 
              Just Legal Solutions is not a law firm and does not provide legal representation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
