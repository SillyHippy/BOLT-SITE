import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Title Company Notary Services Tulsa | Real Estate Closing Notary Oklahoma',
  description: 'Professional title company notary services in Tulsa, Oklahoma. Expert real estate closing notary for deeds, mortgages, title transfers. Volume pricing for title companies. Call (539) 367-6832.',
  keywords: 'title company notary tulsa, closing notary oklahoma, real estate notary tulsa, title closing notary services, deed notarization oklahoma, mortgage notary, escrow notary, property transfer notary',
  alternates: {
    canonical: 'https://justlegalsolutions.org/title-company-notary-services/',
  },
  openGraph: {
    title: 'Title Company Notary Services Tulsa | Real Estate Closing Notary',
    description: 'Professional title company notary services for real estate closings, deeds, and mortgage documents in Tulsa, Oklahoma. Volume pricing available.',
    url: 'https://justlegalsolutions.org/title-company-notary-services/',
    type: 'website',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Just Legal Solutions',
  description: 'Professional title company notary services for real estate closings, deeds, and mortgage documents in Tulsa, Oklahoma.',
  url: 'https://justlegalsolutions.org/title-company-notary-services/',
  telephone: '+1-539-367-6832',
  email: 'joseph@justlegalsolutions.org',
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
  serviceType: 'Title Company Notary Services, Real Estate Closing Notary, Deed Notarization',
  priceRange: '$$',
  openingHours: 'Mo-Su 00:00-23:59',
  paymentAccepted: 'Cash, Check, Credit Card, Venmo, Zelle',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Title Company Notary Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Just Legal Solutions',
    telephone: '+1-539-367-6832',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '564 E 138th Pl',
      addressLocality: 'Glenpool',
      addressRegion: 'OK',
      postalCode: '74033',
    },
  },
  description: 'Professional notary services for title companies, real estate closings, mortgage documents, and property transfers throughout Tulsa and Oklahoma.',
  areaServed: {
    '@type': 'State',
    name: 'Oklahoma',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Title Company Notary Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Real Estate Closing Notarization',
        },
        price: '5.00',
        priceCurrency: 'USD',
        priceValidUntil: '2025-12-31',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Deed Notarization',
        },
        price: '5.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile Notary for Title Companies',
        },
        price: 'Contact for volume pricing',
        priceCurrency: 'USD',
      },
    ],
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
      name: 'Notary Services',
      item: 'https://justlegalsolutions.org/notary/',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Title Company Notary Services',
      item: 'https://justlegalsolutions.org/title-company-notary-services/',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the role of a notary in Oklahoma real estate closings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Oklahoma real estate closings, a notary public serves as an impartial witness who verifies the identity of signers, ensures they sign voluntarily without coercion, and administers oaths when required. The notary confirms that all parties understand the documents they are signing and properly notarizes deeds, mortgages, affidavits, and other closing documents as required by Oklahoma law (49 O.S. § 1). This notarization makes documents legally binding and acceptable for recording with county clerks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents require notarization in an Oklahoma real estate transaction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common documents requiring notarization in Oklahoma real estate transactions include: Warranty Deeds, Quit Claim Deeds, Mortgages and Deeds of Trust, Affidavits of Title, Owner\'s Affidavits, Closing Disclosures, Loan Documents, Powers of Attorney for real estate transactions, and various lender-required affidavits. Under Oklahoma Statutes Title 16, deeds must be notarized before they can be recorded with the county clerk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do title companies in Oklahoma need mobile notary services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, title companies frequently need mobile notary services to accommodate clients who cannot visit an office. Mobile notaries travel to clients\' homes, workplaces, hospitals, nursing facilities, or other convenient locations. This is especially valuable for elderly clients, busy professionals, out-of-state buyers, or anyone with mobility limitations. Just Legal Solutions provides 24/7 mobile notary services throughout the Tulsa metro area and surrounding counties.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the Oklahoma requirements for recording a deed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under Oklahoma law (16 O.S. § 26), a deed must meet several requirements for recording: it must be in writing, signed by the grantor, properly notarized with an acknowledgment, and include a legal description of the property. The document should also contain the grantor\'s mailing address and the grantee\'s name and mailing address. Recording fees vary by county but typically range from $13-$18 for the first page plus additional fees for subsequent pages.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does title company notary service cost in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under Oklahoma law (49 O.S. § 118), notary fees are capped at $5 per notarial act for traditional in-person notarization. For Remote Online Notarization (RON), the maximum fee is $25 per act. However, title companies and other businesses with recurring notary needs can benefit from volume pricing arrangements. Mobile notary services include reasonable travel fees based on distance. Contact Just Legal Solutions at (539) 367-6832 to discuss customized pricing for your title company.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a notary and a loan signing agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While all loan signing agents are notaries, not all notaries are loan signing agents. A loan signing agent is a notary public with specialized training in handling mortgage loan documents. They understand the complete loan signing process, can explain documents (without providing legal advice), ensure all signatures and initials are completed properly, and return documents promptly. For title companies, working with a certified loan signing agent ensures smoother closings and fewer document errors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a notary notarize documents for family members in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oklahoma law (49 O.S. § 114) prohibits notaries from notarizing documents in which they have a direct financial or beneficial interest. While not explicitly prohibited from notarizing for family members, best practices and many professional standards recommend against it to avoid any appearance of bias or conflict of interest. Professional notaries serving title companies maintain strict impartiality and avoid even the appearance of conflicts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you provide notary services for a title closing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Just Legal Solutions understands that title closings often operate on tight schedules. We offer same-day and emergency notary services throughout the Tulsa metro area and surrounding counties. For scheduled closings, we recommend booking 24-48 hours in advance when possible. For urgent situations, we can often accommodate within a few hours. Our 24/7 availability ensures your closings proceed on time, even during evenings, weekends, and holidays. Call (539) 367-6832 for immediate assistance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What identification is required for real estate document notarization in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under Oklahoma law (49 O.S. § 115), signers must present satisfactory evidence of identity, which includes: a current government-issued photo ID (driver\'s license, state ID, passport, or military ID), or the oath of a credible witness who personally knows both the notary and the signer. The ID must be current or issued within the past five years and contain the signer\'s photograph and signature. For remote online notarization, identity verification follows additional RON-specific requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer volume pricing for title companies with regular notary needs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Just Legal Solutions offers customized volume pricing and partnership arrangements for title companies, escrow companies, real estate attorneys, and lenders with recurring notary needs. Volume pricing can significantly reduce per-transaction costs while ensuring priority scheduling and dedicated service. We can establish standing agreements that include preferred rates, guaranteed response times, and streamlined scheduling processes. Contact Joseph Iannazzi at (539) 367-6832 to discuss a partnership arrangement tailored to your business needs.',
      },
    },
  ],
};

export default function TitleCompanyNotaryServicesPage() {
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
            <nav className="text-sm mb-6">
              <ol className="flex items-center space-x-2 text-blue-200">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/notary/" className="hover:text-white transition-colors">Notary</Link></li>
                <li>/</li>
                <li className="text-white">Title Company Notary Services</li>
              </ol>
            </nav>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Title Company Notary Services in Tulsa, Oklahoma
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Professional real estate closing notary services for title companies, escrow firms, and lenders throughout Oklahoma. Expert deed notarization, mortgage document signing, and volume pricing for recurring partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:539-367-6832" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold rounded-lg transition-colors text-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call (539) 367-6832
                </a>
                <Link 
                  href="/contact/" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold rounded-lg transition-colors text-lg"
                >
                  Request Volume Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Trusted Notary Partner for Oklahoma Title Companies
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Real estate transactions require precision, accuracy, and strict adherence to legal requirements. As a professional notary serving title companies throughout Tulsa and Oklahoma, Just Legal Solutions provides the reliable notarization services your closings demand.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  With over 156 five-star reviews and years of experience handling complex real estate documents, we understand the unique needs of title companies, escrow firms, and lenders. Our mobile notary services ensure your clients can sign documents conveniently while maintaining the highest standards of professionalism and legal compliance.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you need a single closing notarized or require ongoing partnership arrangements with volume pricing, Joseph Iannazzi and Just Legal Solutions deliver the expertise and responsiveness your business requires.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Why Title Companies Choose Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">24/7 availability for urgent closings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Volume pricing for recurring relationships</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Mobile service throughout Tulsa metro</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Expertise in Oklahoma real estate law</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Same-day and emergency service available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Role of Notary Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Critical Role of a Notary in Oklahoma Real Estate Closings
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding how notaries protect all parties in property transactions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Identity Verification</h3>
                <p className="text-gray-700 leading-relaxed">
                  Under Oklahoma Statutes 49 O.S. § 115, notaries must verify the identity of every signer using government-issued photo identification. This critical step prevents fraud and ensures that only authorized individuals can execute real estate documents. We carefully examine each ID for validity and match photographs to signers.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fraud Prevention</h3>
                <p className="text-gray-700 leading-relaxed">
                  Notaries serve as the frontline defense against real estate fraud. By requiring personal appearance, verifying identities, and maintaining detailed journal entries as required by Oklahoma law, notaries create an audit trail that protects buyers, sellers, lenders, and title companies from fraudulent transactions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Document Authentication</h3>
                <p className="text-gray-700 leading-relaxed">
                  The notary seal and signature transform private documents into legally binding, recordable instruments. Oklahoma county clerks require proper notarization before accepting deeds, mortgages, and other real estate documents for recording. Our precise notarial acts ensure your documents meet all recording requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Title Company Notary Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete notarization solutions for all your real estate closing needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Deed Notarization</h3>
                <p className="text-gray-600 text-sm mb-3">Warranty Deeds, Quit Claim Deeds, Special Warranty Deeds</p>
                <p className="text-gray-700 text-sm">
                  Proper acknowledgment and notarization of all deed types to ensure valid property transfers under Oklahoma law.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mortgage Documents</h3>
                <p className="text-gray-600 text-sm mb-3">Mortgages, Deeds of Trust, Loan Modifications</p>
                <p className="text-gray-700 text-sm">
                  Expert handling of lender documents with attention to signature requirements and notarial certificates.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Title Transfer Documents</h3>
                <p className="text-gray-600 text-sm mb-3">Affidavits of Title, Owner's Affidavits</p>
                <p className="text-gray-700 text-sm">
                  Notarization of affidavits required for clear title transfers and title insurance policies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Powers of Attorney</h3>
                <p className="text-gray-600 text-sm mb-3">Real Estate POA, Limited POA for Closings</p>
                <p className="text-gray-700 text-sm">
                  Careful notarization of powers of attorney used in real estate transactions with proper acknowledgment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Seller & Buyer Packages</h3>
                <p className="text-gray-600 text-sm mb-3">Complete Closing Document Packages</p>
                <p className="text-gray-700 text-sm">
                  Efficient handling of complete closing packages with thorough review to ensure all signatures and notarizations are complete.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Refinance Closings</h3>
                <p className="text-gray-600 text-sm mb-3">Home Refinance, Cash-Out Refinance</p>
                <p className="text-gray-700 text-sm">
                  Professional notarization services for refinance transactions with quick turnaround times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Oklahoma Recording Requirements Section */}
        <section className="py-16 md:py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Oklahoma Real Estate Recording Requirements
                </h2>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                  Understanding Oklahoma's recording requirements is essential for valid property transfers. Under Oklahoma Statutes Title 16, specific criteria must be met for documents to be accepted by county clerks.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-blue-800 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-400 mb-2">Notarization Required (16 O.S. § 26)</h4>
                    <p className="text-blue-100 text-sm">
                      All deeds must be acknowledged before a notary public or other authorized officer before they can be recorded with the county clerk.
                    </p>
                  </div>
                  
                  <div className="bg-blue-800 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-400 mb-2">Legal Description</h4>
                    <p className="text-blue-100 text-sm">
                      Documents must include an accurate legal description of the property being transferred, not just a street address.
                    </p>
                  </div>
                  
                  <div className="bg-blue-800 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-400 mb-2">Grantor Information</h4>
                    <p className="text-blue-100 text-sm">
                      The grantor's (seller's) name must appear in the acknowledgment, and their mailing address must be included in the document.
                    </p>
                  </div>
                  
                  <div className="bg-blue-800 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-400 mb-2">Recording Fees</h4>
                    <p className="text-blue-100 text-sm">
                      Recording fees vary by county. Tulsa County charges $18 for the first page and $2 for each additional page of deeds.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white text-gray-900 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Why Proper Notarization Matters</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Improperly notarized documents will be rejected by county clerks, causing costly delays in real estate transactions. Common issues that cause rejection include:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Expired notary commission</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Missing or incomplete notarial certificate</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Illegible notary seal or signature</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Incorrect venue or jurisdiction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Name mismatches between document and ID</span>
                  </li>
                </ul>
                
                <p className="text-gray-700 leading-relaxed">
                  Our experienced notaries ensure every document meets Oklahoma's strict requirements, preventing costly delays and rejections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Volume Pricing Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Volume Pricing for Title Company Partnerships
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cost-effective solutions for businesses with recurring notary needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Benefits of Partnership</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Reduced Per-Transaction Costs</span>
                      <p className="text-gray-600 text-sm">Volume discounts significantly lower your notary expenses</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Priority Scheduling</span>
                      <p className="text-gray-600 text-sm">Guaranteed availability for your closings</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Streamlined Communication</span>
                      <p className="text-gray-600 text-sm">Direct line for scheduling and urgent requests</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Consistent Service Quality</span>
                      <p className="text-gray-600 text-sm">Same professional notary for your transactions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-gray-900">Monthly Billing Options</span>
                      <p className="text-gray-600 text-sm">Consolidated invoicing for easier accounting</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border-2 border-blue-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Custom Quote</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Every title company has unique needs. We create customized pricing packages based on your transaction volume, geographic coverage area, and service requirements.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No minimum volume requirements
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Flexible agreement terms
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Scales with your business growth
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cancel anytime
                  </div>
                </div>
                
                <a 
                  href="tel:539-367-6832" 
                  className="block w-full text-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-lg"
                >
                  Call (539) 367-6832 for Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mobile Notary Coverage Area
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We travel throughout the Tulsa metro area and surrounding counties to serve title companies and their clients
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Tulsa County</h4>
                <p className="text-gray-600 text-sm">Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Creek County</h4>
                <p className="text-gray-600 text-sm">Sapulpa, Mannford, Drumright, Oilton, Kiefer</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Wagoner County</h4>
                <p className="text-gray-600 text-sm">Coweta, Wagoner, Broken Arrow, Porter</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Rogers County</h4>
                <p className="text-gray-600 text-sm">Claremore, Catoosa, Oologah, Inola</p>
              </div>
            </div>
            
            <p className="text-center text-gray-600 mt-8">
              Don't see your area? <a href="tel:539-367-6832" className="text-blue-600 hover:underline font-semibold">Call us</a> – we may still be able to accommodate your needs.
            </p>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Related Notary Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our full range of professional notary services
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/loan-signing-agent-tulsa/" className="group">
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Loan Signing Agent</h3>
                  <p className="text-gray-600">Certified loan signing agent services for mortgage lenders, title companies, and escrow firms throughout Tulsa.</p>
                </div>
              </Link>
              
              <Link href="/mobile-notary/" className="group">
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Mobile Notary</h3>
                  <p className="text-gray-600">24/7 mobile notary services that come to your location – home, office, hospital, or any convenient meeting place.</p>
                </div>
              </Link>
              
              <Link href="/notary/" className="group">
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">General Notary</h3>
                  <p className="text-gray-600">Traditional notary services for all document types including affidavits, powers of attorney, contracts, and more.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about title company notary services in Oklahoma
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What is the role of a notary in Oklahoma real estate closings?</h3>
                <p className="text-gray-700 leading-relaxed">
                  In Oklahoma real estate closings, a notary public serves as an impartial witness who verifies the identity of signers, ensures they sign voluntarily without coercion, and administers oaths when required. The notary confirms that all parties understand the documents they are signing and properly notarizes deeds, mortgages, affidavits, and other closing documents as required by Oklahoma law (49 O.S. § 1). This notarization makes documents legally binding and acceptable for recording with county clerks.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What documents require notarization in an Oklahoma real estate transaction?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Common documents requiring notarization in Oklahoma real estate transactions include: Warranty Deeds, Quit Claim Deeds, Mortgages and Deeds of Trust, Affidavits of Title, Owner's Affidavits, Closing Disclosures, Loan Documents, Powers of Attorney for real estate transactions, and various lender-required affidavits. Under Oklahoma Statutes Title 16, deeds must be notarized before they can be recorded with the county clerk.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Do title companies in Oklahoma need mobile notary services?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, title companies frequently need mobile notary services to accommodate clients who cannot visit an office. Mobile notaries travel to clients' homes, workplaces, hospitals, nursing facilities, or other convenient locations. This is especially valuable for elderly clients, busy professionals, out-of-state buyers, or anyone with mobility limitations. Just Legal Solutions provides 24/7 mobile notary services throughout the Tulsa metro area and surrounding counties.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What are the Oklahoma requirements for recording a deed?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Under Oklahoma law (16 O.S. § 26), a deed must meet several requirements for recording: it must be in writing, signed by the grantor, properly notarized with an acknowledgment, and include a legal description of the property. The document should also contain the grantor's mailing address and the grantee's name and mailing address. Recording fees vary by county but typically range from $13-$18 for the first page plus additional fees for subsequent pages.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">How much does title company notary service cost in Oklahoma?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Under Oklahoma law (49 O.S. § 118), notary fees are capped at $5 per notarial act for traditional in-person notarization. For Remote Online Notarization (RON), the maximum fee is $25 per act. However, title companies and other businesses with recurring notary needs can benefit from volume pricing arrangements. Mobile notary services include reasonable travel fees based on distance. Contact Just Legal Solutions at (539) 367-6832 to discuss customized pricing for your title company.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What is the difference between a notary and a loan signing agent?</h3>
                <p className="text-gray-700 leading-relaxed">
                  While all loan signing agents are notaries, not all notaries are loan signing agents. A loan signing agent is a notary public with specialized training in handling mortgage loan documents. They understand the complete loan signing process, can explain documents (without providing legal advice), ensure all signatures and initials are completed properly, and return documents promptly. For title companies, working with a certified loan signing agent ensures smoother closings and fewer document errors.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Can a notary notarize documents for family members in Oklahoma?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Oklahoma law (49 O.S. § 114) prohibits notaries from notarizing documents in which they have a direct financial or beneficial interest. While not explicitly prohibited from notarizing for family members, best practices and many professional standards recommend against it to avoid any appearance of bias or conflict of interest. Professional notaries serving title companies maintain strict impartiality and avoid even the appearance of conflicts.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">How quickly can you provide notary services for a title closing?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Just Legal Solutions understands that title closings often operate on tight schedules. We offer same-day and emergency notary services throughout the Tulsa metro area and surrounding counties. For scheduled closings, we recommend booking 24-48 hours in advance when possible. For urgent situations, we can often accommodate within a few hours. Our 24/7 availability ensures your closings proceed on time, even during evenings, weekends, and holidays. Call (539) 367-6832 for immediate assistance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What identification is required for real estate document notarization in Oklahoma?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Under Oklahoma law (49 O.S. § 115), signers must present satisfactory evidence of identity, which includes: a current government-issued photo ID (driver's license, state ID, passport, or military ID), or the oath of a credible witness who personally knows both the notary and the signer. The ID must be current or issued within the past five years and contain the signer's photograph and signature. For remote online notarization, identity verification follows additional RON-specific requirements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Do you offer volume pricing for title companies with regular notary needs?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, Just Legal Solutions offers customized volume pricing and partnership arrangements for title companies, escrow companies, real estate attorneys, and lenders with recurring notary needs. Volume pricing can significantly reduce per-transaction costs while ensuring priority scheduling and dedicated service. We can establish standing agreements that include preferred rates, guaranteed response times, and streamlined scheduling processes. Contact Joseph Iannazzi at (539) 367-6832 to discuss a partnership arrangement tailored to your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with Tulsa's Trusted Title Company Notary
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Experience the difference of working with a professional notary who understands the unique needs of title companies. From single closings to ongoing partnerships, we're here to support your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:539-367-6832" 
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold rounded-lg transition-colors text-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (539) 367-6832
              </a>
              <Link 
                href="/contact/" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold rounded-lg transition-colors text-lg"
              >
                Request Volume Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-8 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-500 text-sm">
              <strong>Disclaimer:</strong> This information is provided for educational purposes only and does not constitute legal advice. 
              Oklahoma notary laws and real estate recording requirements may change. Consult with a qualified attorney for legal advice 
              specific to your situation. Notaries public are not attorneys and cannot provide legal advice or draft legal documents.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
