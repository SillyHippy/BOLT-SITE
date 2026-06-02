import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import JsonLd from '@/components/JsonLd';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bankruptcy Process Serving Oklahoma | Chapter 7, 11, 13 Service',
  description: 'Professional bankruptcy process serving in Oklahoma. Chapter 7, 11, 13 filings, adversary proceedings, 341 meeting notices. FRBP Rule 7004 compliant. Call (539) 367-6832.',
  keywords: 'bankruptcy process serving oklahoma, serve bankruptcy papers tulsa, chapter 7 service of process, chapter 13 process serving, bankruptcy court tulsa, adversary proceeding service oklahoma',
  openGraph: {
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp',
      width: 1200,
      height: 630,
      alt: 'Just Legal Solutions — professional process serving in Oklahoma',
    }],
    title: 'Bankruptcy Process Serving Oklahoma | Chapter 7, 11, 13 Service',
    description: 'Professional bankruptcy process serving in Oklahoma. Chapter 7, 11, 13 filings, adversary proceedings, 341 meeting notices. FRBP Rule 7004 compliant.',
    type: 'website',
    url: 'https://justlegalsolutions.org/bankruptcy-process-serving-oklahoma',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bankruptcy Process Serving Oklahoma | Chapter 7, 11, 13 Service',
    description: 'Professional bankruptcy process serving in Oklahoma. Chapter 7, 11, 13 filings, adversary proceedings, 341 meeting notices. FRBP Rule 7004 compliant. Call (539) 367-6832.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/bankruptcy-process-serving-oklahoma',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions',
  description: 'Professional bankruptcy process serving throughout Oklahoma. Chapter 7, 11, and 13 bankruptcy filings, adversary proceedings, and 341 meeting notices.',
  url: 'https://justlegalsolutions.org/bankruptcy-process-serving-oklahoma/',
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
  serviceType: 'Bankruptcy Process Serving',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Bankruptcy Process Serving Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Standard Bankruptcy Service',
          description: '3-5 day service for bankruptcy petitions and notices',
        },
        price: '60.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Rush Bankruptcy Service',
          description: '24-48 hour priority service for urgent filings',
        },
        price: '150.00',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Same-Day Bankruptcy Service',
          description: 'Emergency same-day service for critical deadlines',
        },
        price: '265.00',
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
  serviceType: 'Bankruptcy Process Serving',
  provider: {
    '@type': 'LegalService',
    name: 'Just Legal Solutions',
    telephone: '+1-539-367-6832',
  },
  areaServed: {
    '@type': 'State',
    name: 'Oklahoma',
  },
  description: 'Professional bankruptcy process serving for Chapter 7, 11, and 13 filings, adversary proceedings, and 341 meeting notices throughout Oklahoma.',
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
      name: 'Process Serving',
      item: 'https://justlegalsolutions.org/process-serving/',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Bankruptcy Process Serving Oklahoma',
      item: 'https://justlegalsolutions.org/bankruptcy-process-serving-oklahoma/',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How to serve bankruptcy papers in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To serve bankruptcy papers in Oklahoma, you must follow Federal Rules of Bankruptcy Procedure (FRBP) Rule 7004, which governs service of process in bankruptcy cases. This includes serving the bankruptcy petition, summons, and all required notices to debtors, creditors, and other interested parties. Service can be accomplished through personal delivery, certified mail, or other methods approved by the court. A licensed Oklahoma process server ensures compliance with all federal and state requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is FRBP Rule 7004 and how does it affect bankruptcy service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FRBP Rule 7004 is the Federal Rule of Bankruptcy Procedure that governs service of process in bankruptcy cases. It specifies who must be served, how service must be accomplished, and the timeframes for service. The rule requires service of the bankruptcy petition and summons on the debtor and notice to all creditors listed in the bankruptcy schedules. Rule 7004 also addresses service in adversary proceedings and contested matters within bankruptcy cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I have to serve bankruptcy papers in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under FRBP Rule 7004, the bankruptcy petition and summons must be served within a reasonable time after filing, typically within 7-14 days. For adversary proceedings, service must generally be completed within 120 days of filing the complaint, though the court may extend this deadline for good cause. Time-sensitive notices, such as automatic stay notifications and 341 meeting notices, have specific deadlines that must be strictly observed to avoid case dismissal or other sanctions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a 341 meeting notice and who needs to be served?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 341 meeting notice informs creditors of the mandatory meeting of creditors under Section 341 of the Bankruptcy Code. The debtor must attend this meeting, and creditors may attend to question the debtor about their financial affairs. The notice must be sent to all creditors and parties in interest listed in the bankruptcy schedules at least 21 days before the meeting date. Proper service of this notice is essential for the bankruptcy case to proceed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an adversary proceeding in bankruptcy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An adversary proceeding is a lawsuit filed within a bankruptcy case to resolve disputes that arise during the bankruptcy process. Common types include objections to discharge, fraudulent transfer actions, preference actions, and disputes over the validity of liens. Adversary proceedings require formal service of process under FRBP Rule 7004, similar to civil litigation, and must include a summons and complaint served on all defendants.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an automatic stay notification in bankruptcy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An automatic stay notification informs creditors that the bankruptcy stay has gone into effect, prohibiting collection actions against the debtor. Under 11 U.S.C. § 362, the automatic stay takes effect immediately upon filing the bankruptcy petition. Creditors who violate the stay may face sanctions. Proper notification ensures creditors are aware of the stay and can avoid inadvertent violations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to serve bankruptcy papers in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Just Legal Solutions offers competitive pricing for bankruptcy process serving in Oklahoma: Standard service (3-5 days) is $60, Rush service (24-48 hours) is $150, and Same-Day emergency service is $265. These prices include up to three attempts, GPS verification, photo documentation, and electronic proof of service. Additional fees may apply for multiple defendants, out-of-county service, or special circumstances.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Chapter 7, Chapter 11, and Chapter 13 bankruptcy service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chapter 7 involves liquidation bankruptcy where a trustee sells non-exempt assets to pay creditors. Chapter 11 is reorganization bankruptcy primarily used by businesses to restructure debt while continuing operations. Chapter 13 is wage earner bankruptcy allowing individuals with regular income to develop repayment plans. Each chapter has specific service requirements, but all require proper notice to creditors, the trustee, and other parties under FRBP Rule 7004.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the Oklahoma Northern District Bankruptcy Court located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The United States Bankruptcy Court for the Northern District of Oklahoma is located at 224 S Boulder Ave, Suite 105, Tulsa, OK 74103. This court serves the northern counties of Oklahoma including Tulsa, Oklahoma County, and surrounding areas. The court handles Chapter 7, 11, and 13 bankruptcy filings for individuals and businesses within its jurisdiction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a process server serve bankruptcy papers anywhere in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Just Legal Solutions maintains a statewide network of licensed process servers covering all 77 Oklahoma counties. Whether your bankruptcy case is filed in the Northern District (Tulsa), Eastern District (Muskogee), or Western District (Oklahoma City), we can provide professional service of process anywhere in the state. Our network ensures timely and compliant service regardless of the defendant\'s location.',
      },
    },
  ],
};

export default function BankruptcyProcessServingPage() {
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
                  <li><Link href="/process-serving/" className="hover:text-white transition-colors">Process Serving</Link></li>
                  <li><span className="text-blue-400">/</span></li>
                  <li className="text-white font-medium">Bankruptcy Process Serving</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Bankruptcy Process Serving Oklahoma
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Professional service of process for Chapter 7, 11, and 13 bankruptcy filings. 
                FRBP Rule 7004 compliant service for adversary proceedings, 341 meeting notices, 
                and automatic stay notifications throughout Oklahoma.
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
                  View Pricing
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
                  Expert Bankruptcy Process Serving Throughout Oklahoma
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Bankruptcy proceedings require precise, timely service of process to ensure compliance 
                  with federal regulations and protect the rights of all parties involved. At 
                  <Link href="/" className="text-blue-600 hover:underline"> Just Legal Solutions</Link>, 
                  we specialize in bankruptcy process serving across all 77 Oklahoma counties, 
                  providing attorneys, trustees, and creditors with reliable service for Chapter 7, 
                  Chapter 11, and Chapter 13 bankruptcy cases.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our licensed process servers understand the unique requirements of Federal Rules 
                  of Bankruptcy Procedure (FRBP) Rule 7004 and ensure that all bankruptcy documents 
                  are served correctly and on time. Whether you need to serve a bankruptcy petition, 
                  adversary proceeding complaint, 341 meeting notice, or automatic stay notification, 
                  we have the expertise to handle your case professionally.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <p className="text-gray-800 font-medium">
                    Licensed Process Server: Licensed | 156+ Five-Star Reviews | Statewide Coverage
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Bankruptcy Documents We Serve</h3>
                <ul className="space-y-4">
                  {[
                    'Chapter 7 Bankruptcy Petitions & Summons',
                    'Chapter 11 Reorganization Filings',
                    'Chapter 13 Repayment Plan Notices',
                    'Adversary Proceeding Complaints',
                    '341 Meeting of Creditors Notices',
                    'Automatic Stay Notifications',
                    'Discharge Objections',
                    'Preference Action Complaints',
                    'Fraudulent Transfer Actions',
                    'Relief from Stay Motions',
                    'Trustee Notices & Communications',
                    'Creditor Meeting Notifications',
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

        {/* Chapter Types Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Bankruptcy Chapter Types We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">7</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Chapter 7 Bankruptcy</h3>
                <p className="text-gray-700 mb-4">
                  Liquidation bankruptcy for individuals and businesses seeking debt discharge. 
                  We serve petitions, summons, trustee notices, and creditor communications for 
                  Chapter 7 cases filed in all Oklahoma bankruptcy courts.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Individual debtor petitions</li>
                  <li>• Business liquidation filings</li>
                  <li>• Asset distribution notices</li>
                  <li>• Discharge notifications</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">11</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Chapter 11 Bankruptcy</h3>
                <p className="text-gray-700 mb-4">
                  Reorganization bankruptcy primarily used by businesses to restructure debt 
                  while continuing operations. We handle complex service requirements for 
                  Chapter 11 cases including disclosure statements and plan confirmations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Corporate reorganization petitions</li>
                  <li>• Disclosure statement service</li>
                  <li>• Plan confirmation notices</li>
                  <li>• Creditor committee communications</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">13</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Chapter 13 Bankruptcy</h3>
                <p className="text-gray-700 mb-4">
                  Wage earner bankruptcy allowing individuals with regular income to develop 
                  repayment plans. We serve Chapter 13 petitions, plan proposals, and payment 
                  modification notices throughout Oklahoma.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Individual repayment plans</li>
                  <li>• Plan modification notices</li>
                  <li>• Trustee payment communications</li>
                  <li>• Hardship discharge requests</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Court Information Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Oklahoma Bankruptcy Courts We Serve
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Northern District of Oklahoma</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Location:</strong> Tulsa</p>
                  <p><strong>Address:</strong> 224 S Boulder Ave, Suite 105, Tulsa, OK 74103</p>
                  <p><strong>Phone:</strong> (918) 699-4000</p>
                  <p><strong>Counties Served:</strong> Tulsa, Oklahoma, Creek, Osage, Pawnee, Washington, Nowata, Rogers, Mayes, Craig, Ottawa, Delaware, Cherokee, Adair, Sequoyah, Muskogee, Wagoner, Okmulgee, McIntosh, Haskell, Le Flore, Latimer, Pittsburg, McCurtain, Choctaw, Pushmataha, Atoka, Coal, Hughes, Seminole, Pottawatomie, Lincoln, Logan, Payne, Creek, Okfuskee</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Eastern District of Oklahoma</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Location:</strong> Muskogee</p>
                  <p><strong>Address:</strong> 101 N 5th St, Muskogee, OK 74401</p>
                  <p><strong>Phone:</strong> (918) 687-6100</p>
                  <p><strong>Counties Served:</strong> Adair, Cherokee, Haskell, McIntosh, Muskogee, Okfuskee, Okmulgee, Sequoyah, Wagoner, Atoka, Bryan, Carter, Choctaw, Johnston, Latimer, Le Flore, Love, Marshall, McCurtain, Murray, Pontotoc, Pushmataha, Coal, Hughes, Pittsburg, Garvin</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Western District of Oklahoma</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Location:</strong> Oklahoma City</p>
                <p><strong>Address:</strong> 200 NW 4th St, Oklahoma City, OK 73102</p>
                <p><strong>Phone:</strong> (405) 609-5000</p>
                <p><strong>Counties Served:</strong> Oklahoma, Canadian, Cleveland, Grady, McClain, Logan, Kingfisher, Blaine, Garfield, Grant, Kay, Noble, Alfalfa, Major, Woods, Woodward, Harper, Ellis, Roger Mills, Beckham, Custer, Dewey, Washita, Kiowa, Jackson, Tillman, Comanche, Stephens, Jefferson, Cotton, Greer, Harmon, Jackson, Kiowa, Tillman, Comanche, Cotton, Greer, Harmon, Jackson, Jefferson, Stephens</p>
              </div>
            </div>
          </div>
        </section>

        {/* FRBP Rules Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Federal Bankruptcy Procedure Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">FRBP Rule 7004</h3>
                <p className="text-gray-300 mb-4">
                  Federal Rules of Bankruptcy Procedure Rule 7004 governs service of process in 
                  bankruptcy cases and adversary proceedings. This rule specifies:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Methods of service permitted for bankruptcy documents
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Who must be served in different types of bankruptcy proceedings
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Time limits for completing service
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Requirements for proof of service documentation
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">FRCP Rule 4 Integration</h3>
                <p className="text-gray-300 mb-4">
                  FRBP Rule 7004 incorporates Federal Rules of Civil Procedure Rule 4 for service 
                  in adversary proceedings, requiring:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Personal service by a non-party over 18 years of age
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Proper identification of the defendant/respondent
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Delivery of summons and complaint to the defendant
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Timely filing of proof of service with the court
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 text-center">
                Our process servers are trained in federal bankruptcy service requirements and ensure 
                strict compliance with all applicable rules and regulations.
              </p>
            </div>
          </div>
        </section>

        {/* Adversary Proceedings Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Adversary Proceedings & Contested Matters
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Adversary proceedings are lawsuits filed within a bankruptcy case to resolve 
                  disputes between parties. These formal proceedings require service of process 
                  under FRBP Rule 7004, similar to traditional civil litigation.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Types of Adversary Proceedings:</h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'Objections to discharge of specific debts',
                    'Objections to general discharge',
                    'Fraudulent transfer actions under 11 U.S.C. § 548',
                    'Preference actions under 11 U.S.C. § 547',
                    'Lien avoidance actions',
                    'Dischargeability complaints under 11 U.S.C. § 523',
                    'Recovery of money or property',
                    'Subordination of claims',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-xl mb-8">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4">341 Meeting Notices</h3>
                  <p className="text-gray-700 mb-4">
                    The meeting of creditors under 11 U.S.C. § 341 is a mandatory proceeding 
                    where the debtor answers questions under oath about their financial affairs. 
                    Proper notice must be sent to all creditors at least 21 days before the meeting.
                  </p>
                  <p className="text-gray-700">
                    We ensure timely service of 341 meeting notices to protect the integrity 
                    of the bankruptcy process and prevent procedural challenges.
                  </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Automatic Stay Notifications</h3>
                  <p className="text-gray-700 mb-4">
                    The automatic stay under 11 U.S.C. § 362 immediately halts most collection 
                    actions against the debtor upon filing the bankruptcy petition. Creditors 
                    must be properly notified to avoid inadvertent stay violations.
                  </p>
                  <p className="text-gray-700">
                    Our service ensures creditors receive proper notification, protecting both 
                    the debtor and creditors from potential sanctions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Bankruptcy Process Serving Pricing
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Transparent pricing for all bankruptcy service needs. All packages include up to 
              three attempts, GPS verification, and electronic proof of service.
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
            
            <p className="text-center text-gray-600 mt-8">
              <Link href="/how-much-does-process-server-cost/" className="text-blue-600 hover:underline">
                View detailed pricing information →
              </Link>
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Why Choose Just Legal Solutions for Bankruptcy Service
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Federal Compliance',
                  description: 'Full compliance with FRBP Rule 7004 and FRCP Rule 4 requirements for all bankruptcy service.',
                  icon: '⚖️',
                },
                {
                  title: 'Statewide Coverage',
                  description: 'Licensed process servers in all 77 Oklahoma counties, from Tulsa to Oklahoma City.',
                  icon: '📍',
                },
                {
                  title: 'Experienced Team',
                  description: '156+ five-star reviews from attorneys, trustees, and legal professionals.',
                  icon: '⭐',
                },
                {
                  title: 'Fast Turnaround',
                  description: 'Standard, rush, and same-day service options to meet any court deadline.',
                  icon: '⚡',
                },
                {
                  title: 'Real-Time Updates',
                  description: 'GPS tracking and photo documentation with instant status notifications.',
                  icon: '📱',
                },
                {
                  title: 'Professional Proof',
                  description: 'Detailed affidavits of service accepted by all Oklahoma bankruptcy courts.',
                  icon: '📋',
                },
                {
                  title: 'Licensed & Bonded',
                  description: 'Oklahoma license Licensed with full insurance coverage.',
                  icon: '🔒',
                },
                {
                  title: 'Expert Support',
                  description: 'Direct access to Joseph Iannazzi for complex service situations.',
                  icon: '🤝',
                },
              ].map((item, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions About Bankruptcy Process Serving
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'How to serve bankruptcy papers in Oklahoma?',
                  answer: 'To serve bankruptcy papers in Oklahoma, you must follow Federal Rules of Bankruptcy Procedure (FRBP) Rule 7004, which governs service of process in bankruptcy cases. This includes serving the bankruptcy petition, summons, and all required notices to debtors, creditors, and other interested parties. Service can be accomplished through personal delivery, certified mail, or other methods approved by the court. A licensed Oklahoma process server ensures compliance with all federal and state requirements.',
                },
                {
                  question: 'What is FRBP Rule 7004 and how does it affect bankruptcy service?',
                  answer: 'FRBP Rule 7004 is the Federal Rule of Bankruptcy Procedure that governs service of process in bankruptcy cases. It specifies who must be served, how service must be accomplished, and the timeframes for service. The rule requires service of the bankruptcy petition and summons on the debtor and notice to all creditors listed in the bankruptcy schedules. Rule 7004 also addresses service in adversary proceedings and contested matters within bankruptcy cases.',
                },
                {
                  question: 'How long do I have to serve bankruptcy papers in Oklahoma?',
                  answer: 'Under FRBP Rule 7004, the bankruptcy petition and summons must be served within a reasonable time after filing, typically within 7-14 days. For adversary proceedings, service must generally be completed within 120 days of filing the complaint, though the court may extend this deadline for good cause. Time-sensitive notices, such as automatic stay notifications and 341 meeting notices, have specific deadlines that must be strictly observed to avoid case dismissal or other sanctions.',
                },
                {
                  question: 'What is a 341 meeting notice and who needs to be served?',
                  answer: 'A 341 meeting notice informs creditors of the mandatory meeting of creditors under Section 341 of the Bankruptcy Code. The debtor must attend this meeting, and creditors may attend to question the debtor about their financial affairs. The notice must be sent to all creditors and parties in interest listed in the bankruptcy schedules at least 21 days before the meeting date. Proper service of this notice is essential for the bankruptcy case to proceed.',
                },
                {
                  question: 'What is an adversary proceeding in bankruptcy?',
                  answer: 'An adversary proceeding is a lawsuit filed within a bankruptcy case to resolve disputes that arise during the bankruptcy process. Common types include objections to discharge, fraudulent transfer actions, preference actions, and disputes over the validity of liens. Adversary proceedings require formal service of process under FRBP Rule 7004, similar to civil litigation, and must include a summons and complaint served on all defendants.',
                },
                {
                  question: 'What is an automatic stay notification in bankruptcy?',
                  answer: 'An automatic stay notification informs creditors that the bankruptcy stay has gone into effect, prohibiting collection actions against the debtor. Under 11 U.S.C. § 362, the automatic stay takes effect immediately upon filing the bankruptcy petition. Creditors who violate the stay may face sanctions. Proper notification ensures creditors are aware of the stay and can avoid inadvertent violations.',
                },
                {
                  question: 'How much does it cost to serve bankruptcy papers in Oklahoma?',
                  answer: 'Just Legal Solutions offers competitive pricing for bankruptcy process serving in Oklahoma: Standard service (3-5 days) is $60, Rush service (24-48 hours) is $150, and Same-Day emergency service is $265. These prices include up to three attempts, GPS verification, photo documentation, and electronic proof of service. Additional fees may apply for multiple defendants, out-of-county service, or special circumstances.',
                },
                {
                  question: 'What is the difference between Chapter 7, Chapter 11, and Chapter 13 bankruptcy service?',
                  answer: 'Chapter 7 involves liquidation bankruptcy where a trustee sells non-exempt assets to pay creditors. Chapter 11 is reorganization bankruptcy primarily used by businesses to restructure debt while continuing operations. Chapter 13 is wage earner bankruptcy allowing individuals with regular income to develop repayment plans. Each chapter has specific service requirements, but all require proper notice to creditors, the trustee, and other parties under FRBP Rule 7004.',
                },
                {
                  question: 'Where is the Oklahoma Northern District Bankruptcy Court located?',
                  answer: 'The United States Bankruptcy Court for the Northern District of Oklahoma is located at 224 S Boulder Ave, Suite 105, Tulsa, OK 74103. This court serves the northern counties of Oklahoma including Tulsa, Oklahoma County, and surrounding areas. The court handles Chapter 7, 11, and 13 bankruptcy filings for individuals and businesses within its jurisdiction.',
                },
                {
                  question: 'Can a process server serve bankruptcy papers anywhere in Oklahoma?',
                  answer: 'Yes, Just Legal Solutions maintains a statewide network of licensed process servers covering all 77 Oklahoma counties. Whether your bankruptcy case is filed in the Northern District (Tulsa), Eastern District (Muskogee), or Western District (Oklahoma City), we can provide professional service of process anywhere in the state. Our network ensures timely and compliant service regardless of the defendant\'s location.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Related Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/process-serving/" className="bg-blue-50 p-8 rounded-xl hover:bg-blue-100 transition-colors">
                <h3 className="text-xl font-bold text-blue-900 mb-3">General Process Serving</h3>
                <p className="text-gray-700">
                  Comprehensive process serving for all types of legal documents throughout Oklahoma. 
                  Subpoenas, summons, complaints, and more.
                </p>
              </Link>
              <Link href="/tulsa-process-server/" className="bg-blue-50 p-8 rounded-xl hover:bg-blue-100 transition-colors">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Tulsa Process Server</h3>
                <p className="text-gray-700">
                  Local process serving in Tulsa and surrounding areas. Fast, reliable service 
                  for Tulsa County and Northern District cases.
                </p>
              </Link>
              <Link href="/how-much-does-process-server-cost/" className="bg-blue-50 p-8 rounded-xl hover:bg-blue-100 transition-colors">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Process Server Pricing</h3>
                <p className="text-gray-700">
                  Detailed information about our pricing structure, additional fees, and what 
                  to expect when hiring a process server in Oklahoma.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Serve Your Bankruptcy Documents?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Just Legal Solutions today for professional bankruptcy process serving 
              throughout Oklahoma. Licensed, experienced, and ready to help with your Chapter 7, 
              11, or 13 bankruptcy service needs.
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
              Licensed Process Server Licensed | 156+ Five-Star Reviews
            </p>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-8 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 text-center">
              <strong>Disclaimer:</strong> This information is provided for educational purposes only 
              and does not constitute legal advice. Bankruptcy laws and procedures are complex and 
              subject to change. Consult with a qualified bankruptcy attorney for advice specific to 
              your situation. Just Legal Solutions is a process serving company and does not provide 
              legal representation or advice.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
