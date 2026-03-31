import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';
import {
  Home,
  Key,
  FileText,
  DollarSign,
  Building,
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle,
  Users,
  PhoneCall,
  Calendar,
  ArrowRight,
  Compass
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/real-estate-notary';

export const metadata: Metadata = {
  title: 'Real Estate Notary & Loan Signing Oklahoma | Mobile Closing Agent Tulsa | Just Legal Solutions',
  description:
    'Just Legal Solutions delivers experienced real estate notary and mobile loan signing agents across Tulsa, Creek County, and all 77 Oklahoma counties. Mortgages, refinances, HELOCs, deeds, escrow packets, and remote online closings handled with deadline-driven precision.',
  keywords:
    'loan signing agent Oklahoma, real estate notary Tulsa, mobile notary loan signing, refinance notary Oklahoma, closing notary Tulsa',
  authors: [{ name: 'Just Legal Solutions' }],
  openGraph: {
    title: 'Real Estate Notary & Loan Signing Oklahoma | Mobile Closing Agent Tulsa',
    description:
      'Mobile and remote Oklahoma loan signing agents for mortgages, refinances, deeds, title and escrow documents, and deadline-sensitive closings.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/real-estate-notary-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Real Estate Notary and Loan Signing Team'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oklahoma Loan Signing & Real Estate Notary | Just Legal Solutions',
    description: 'Mobile, hybrid, and remote closing support anywhere in Oklahoma. Call (539) 367-6832.',
    images: ['https://justlegalsolutions.org/images/real-estate-notary-og.jpg']
  },
  alternates: {
    canonical: canonicalUrl
  }
};

const documentTypes = [
  {
    title: 'Mortgage & Refinance Signings',
    icon: Home,
    items: ['Mortgages', 'Refinances', 'HELOCs', 'Reverse mortgages']
  },
  {
    title: 'Loan Adjustments & Builds',
    icon: Building,
    items: ['Loan modifications', 'Construction loans']
  },
  {
    title: 'Deed & Ownership Transfers',
    icon: Key,
    items: ['Warranty deeds', 'Quitclaim deeds', 'Transfer-on-death deeds']
  },
  {
    title: 'Title & Escrow Packets',
    icon: FileText,
    items: ['Title documents', 'Escrow documents']
  },
  {
    title: 'Agreements & Statements',
    icon: DollarSign,
    items: ['Seller agreements', 'Buyer agreements', 'Closing statements']
  }
];

const serviceHighlights = [
  {
    title: 'Mobile Loan Signing',
    description: 'We come to borrowers, builders, realtors, or attorneys anywhere in Tulsa, Creek County, and beyond.',
    icon: MapPin
  },
  {
    title: 'Title Company Coordination',
    description: 'Escrow officers receive status updates, packaging photos, and return tracking within minutes.',
    icon: FileText
  },
  {
    title: 'Lender-Specific Instructions',
    description: 'National lender scripts, local bank affidavits, and custom funding forms are followed to the letter.',
    icon: DollarSign
  },
  {
    title: 'Evening & Weekend Closings',
    description: 'Flexible scheduling keeps relocations, new builds, and relocation closings on track after hours.',
    icon: Clock
  },
  {
    title: 'Same-Day Availability',
    description: 'Dispatch monitors urgent requests and routes the closest commissioned notary to your signer.',
    icon: PhoneCall
  },
  {
    title: 'White-Glove Signer Care',
    description: 'We brief signers on IDs, witnesses, and any lender prep list so every appointment starts ready.',
    icon: Users
  }
];

const benefits = [
  {
    title: 'Error-Free Execution',
    detail: 'Two-pass reviews catch initials, signatures, and notarial certificates across 100-plus page loan packages.',
    icon: ShieldCheck
  },
  {
    title: 'Deadline Awareness',
    detail: 'We track rate lock expirations, rescission periods, and funding cutoffs so nothing misses the wire.',
    icon: Clock
  },
  {
    title: 'Flexible Scheduling',
    detail: 'Buyer, seller, and agent calendars are balanced with evening, weekend, and travel-friendly slots.',
    icon: Calendar
  },
  {
    title: 'Remote Closing Ready',
    detail: 'If travel is impossible, we shift to a secure Remote Online Notary session without delaying funding.',
    icon: Users,
    linkHref: '/remote-online-notary',
    linkLabel: 'Remote Online Notary page'
  }
];

const serviceAreas = [
  {
    name: 'Tulsa County',
    detail:
      'Fast-response coverage across Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, and surrounding neighborhoods keeps local escrows on schedule.',
    icon: MapPin
  },
  {
    name: 'Creek County',
    detail:
      'Glenpool, Sapulpa, Kiefer, and rural properties benefit from mobile signings for new construction draws and estate transfers.',
    icon: MapPin
  },
  {
    name: 'Statewide Coverage',
    detail:
      'Mobile teams and remote options extend to all 77 Oklahoma counties with coordinated courier and scan-back support.',
    icon: Compass
  }
];

const faqItems = [
  {
    question: 'What makes your Oklahoma loan signing support different?',
    answer:
      'Every signing is handled by an experienced commissioned notary who focuses on real estate documents daily. We prep signers, confirm ID, and document every milestone so lenders and title partners stay informed.'
  },
  {
    question: 'Do borrowers need to travel to your office?',
    answer:
      'No. Mobile teams meet signers at homes, offices, builder trailers, coffee shops, or hospitals. When travel is not possible we pivot to a Remote Online Notary session so closings still fund.'
  },
  {
    question: 'How fast can a closing be scheduled?',
    answer:
      'Same-day appointments are available throughout Tulsa County and most of Oklahoma. Provide the package, lender instructions, and preferred time, and dispatch confirms in writing within minutes.'
  },
  {
    question: 'Do you coordinate directly with title companies or lenders?',
    answer:
      'Yes. We review settlement statements, scan-back requirements, and funding numbers with escrow officers and loan processors so documents return exactly as requested.'
  },
  {
    question: 'How do you prevent errors on large loan packets?',
    answer:
      'We follow a checklist that covers borrower signatures, notarizations, notarized affidavits, and shipping labels. Any discrepancies are reported before we leave the table.'
  },
  {
    question: 'Does Oklahoma require a special real estate signing certification?',
    answer:
      'Oklahoma does not impose a separate certification for loan signing agents. Any commissioned notary may handle closings, so we emphasize experience, attention to detail, and lender-specific training.'
  },
  {
    question: 'Which areas do you serve?',
    answer:
      'Tulsa County, Creek County, and all 77 Oklahoma counties receive mobile coverage, and remote clients worldwide can connect through our online notarization platform.'
  }
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Just Legal Solutions',
  description: 'Oklahoma real estate notary and loan signing services for mortgages, refinances, deeds, and escrow packets.',
  url: canonicalUrl,
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  image: 'https://justlegalsolutions.org/images/real-estate-notary-og.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tulsa',
    addressRegion: 'OK',
    addressCountry: 'US'
  },
  areaServed: [
    { '@type': 'Place', name: 'Tulsa County' },
    { '@type': 'Place', name: 'Creek County' },
    { '@type': 'State', name: 'Oklahoma' }
  ],
  sameAs: [
    'https://justlegalsolutions.org/notary',
    'https://justlegalsolutions.org/mobile-notary',
    'https://justlegalsolutions.org/remote-online-notary'
  ]
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Real estate notary and loan signing',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Just Legal Solutions',
    telephone: '(539) 367-6832',
    areaServed: 'Oklahoma'
  },
  areaServed: 'Oklahoma',
  availableChannel: [
    { '@type': 'ServiceChannel', serviceUrl: 'https://justlegalsolutions.org/mobile-notary', name: 'Mobile loan signing' },
    { '@type': 'ServiceChannel', serviceUrl: 'https://justlegalsolutions.org/remote-online-notary', name: 'Remote online notarization' }
  ],
  url: canonicalUrl,
  description: 'Mobile and remote Oklahoma loan signing agents for mortgages, refinances, deeds, title and escrow documents, and deadline-sensitive closings.'
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://justlegalsolutions.org/' },
    { '@type': 'ListItem', position: 2, name: 'Notary Services', item: 'https://justlegalsolutions.org/notary' },
    { '@type': 'ListItem', position: 3, name: 'Real Estate Notary', item: canonicalUrl }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
};

export default function RealEstateNotaryPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <main className="bg-gray-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-700 via-orange-600 to-amber-500 text-white pt-24 pb-20">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-20" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <p className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm mb-6">
                  <CheckCircle className="w-4 h-4" />
                  Real estate expertise with flexible scheduling
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Real Estate Notary & Loan Signing Agents Serving Tulsa and All of Oklahoma
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                  Mortgages, refinances, deeds, title packets, and escrow instructions completed wherever your borrowers are. Same-day appointments, evening closings, and Remote Online Notary support keep every transaction on track.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <a
                    href="tel:5393676832"
                    className="inline-flex items-center gap-2 bg-white text-amber-800 px-6 py-3 rounded-xl font-semibold shadow-lg"
                  >
                    <PhoneCall className="w-5 h-5" />
                    Call (539) 367-6832
                  </a>
                  <a
                    href="mailto:info@justlegalsolutions.org"
                    className="inline-flex items-center gap-2 border border-white/70 text-white px-6 py-3 rounded-xl font-semibold"
                  >
                    <ArrowRight className="w-5 h-5" />
                    info@justlegalsolutions.org
                  </a>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-white/90">
                  <Link href="/notary" className="px-4 py-2 rounded-full border border-white/40 hover:bg-white/10">
                    Main Notary Page
                  </Link>
                  <Link href="/mobile-notary" className="px-4 py-2 rounded-full border border-white/40 hover:bg-white/10">
                    Mobile Notary
                  </Link>
                  <Link href="/remote-online-notary" className="px-4 py-2 rounded-full border border-white/40 hover:bg-white/10">
                    Remote Online Notary
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <h2 className="text-2xl font-semibold mb-6">Document mastery for every closing</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Mortgages', 'Refinances', 'HELOCs', 'Reverse mortgages', 'Deeds', 'Title packets'].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="p-2 rounded-full bg-white/20">
                          <CheckCircle className="w-4 h-4" />
                        </span>
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-white/80 mt-6">
                    Detailed checklists cover lender instructions, ID requirements, witnesses, and courier or scan-back logistics before we arrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">Document Types</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Precision across every real estate document</h2>
              <p className="text-lg text-gray-600">
                Loan packets are never one-size-fits-all. We tailor every signing to the lender, title company, and borrower scenario so nothing is missed before funding.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {documentTypes.map((doc) => {
                const Icon = doc.icon;
                return (
                  <div key={doc.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="p-3 rounded-full bg-amber-100 text-amber-700">
                        <Icon className="w-5 h-5" />
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">{doc.title}</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      {doc.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-amber-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">Closing Support</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Services that keep transactions moving</h2>
              <p className="text-lg text-gray-600">Mobile, hybrid, and remote options adapt to buyers, sellers, builders, and lenders without sacrificing compliance.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {serviceHighlights.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="p-3 rounded-full bg-amber-50 text-amber-700">
                        <Icon className="w-5 h-5" />
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">Why lenders choose us</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits built for high-stakes closings</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Oklahoma does not require a special real estate signing certification, so we invest in experience, training, and double-check systems that protect your borrowers, rate locks, and funding timelines.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={benefit.title} className="bg-white border border-amber-100 rounded-2xl p-5 flex gap-4">
                        <span className="p-3 rounded-full bg-amber-100 text-amber-700">
                          <Icon className="w-5 h-5" />
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                          <p className="text-sm text-gray-600">
                            {benefit.detail}{' '}
                            {benefit.linkHref && benefit.linkLabel ? (
                              <Link href={benefit.linkHref} className="text-amber-700 font-semibold underline">
                                {benefit.linkLabel}
                              </Link>
                            ) : null}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bg-white border border-amber-100 rounded-3xl p-8 self-start shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Coordinated coverage</h3>
                <p className="text-gray-600 mb-6">
                  Dispatch syncs with lenders, REALTORS, and signers so every closing has the right ID, witnesses, and delivery plan before we arrive. Expect timeline updates the moment the final journal entry is complete.
                </p>
                <div className="space-y-4">
                  {serviceAreas.map((area) => {
                    const Icon = area.icon;
                    return (
                      <div key={area.name} className="flex gap-4">
                        <span className="p-3 rounded-full bg-amber-50 text-amber-700 h-fit">
                          <Icon className="w-5 h-5" />
                        </span>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{area.name}</h4>
                          <p className="text-sm text-gray-600">{area.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">Oklahoma signing assurance</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Experienced notaries without unnecessary titles</h2>
              <p className="text-gray-700 mb-4">
                Oklahoma allows any commissioned notary to conduct loan signings. Our team goes further with lender-specific playbooks, double-witness readiness, and meticulous journals so you get the precision usually associated with specialty certifications without the delay or cost.
              </p>
              <p className="text-gray-700">
                Whether it is a refinance in Midtown Tulsa, a construction draw in Creek County, or a remote seller halfway across the country, every package receives the same attentive preparation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">FAQ</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Real estate notarization answers</h2>
              <p className="text-lg text-gray-600">Transparent guidance for borrowers, agents, title teams, and lenders.</p>
            </div>
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <details key={faq.question} className="bg-white border border-gray-200 rounded-2xl p-6" open>
                  <summary className="flex justify-between items-center cursor-pointer">
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  </summary>
                  <p className="text-gray-600 mt-4 text-sm">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">Ready when you are</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Book your Oklahoma loan signing today</h2>
            <p className="text-lg text-gray-600 mb-8">
              Email your package to info@justlegalsolutions.org or call (539) 367-6832. We will confirm the schedule, witnesses, ID requirements, and delivery instructions so your closing stays on time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold shadow">
                <PhoneCall className="w-5 h-5" /> Call Now
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-amber-600 text-amber-700 px-6 py-3 rounded-xl font-semibold">
                <ArrowRight className="w-5 h-5" /> Request a Signing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
