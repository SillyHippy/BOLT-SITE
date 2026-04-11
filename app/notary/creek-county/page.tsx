import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '../../../components/ui/navbar';
import Footer from '../../../components/ui/footer';
import JsonLd from '../../../components/JsonLd';
import {
  Phone,
  Mail,
  MapPin,
  FileText,
  CheckCircle,
  Shield,
  Calendar,
  Users,
  Leaf,
  Layers,
  Compass,
  Clock,
  ArrowRight,
  PenTool
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/notary/creek-county';

export const metadata: Metadata = {
  title: 'Mobile Notary Creek County OK | Sapulpa Notary Public',
  description:
    'Creek County mobile notary team serving Sapulpa (population 21,000), Bristow, Drumright, Kellyville, Depew, Mannford, Oilton, and Slick with on-demand witnesses, estate planning support, and secure remote online notarization. Oil and gas document specialists. St. John Sapulpa hospital notarizations available.',
  keywords:
    'Creek County notary, mobile notary Sapulpa, notary public Creek County Oklahoma, Sapulpa notary services, remote online notarization Creek County, mobile notary Bristow, oil and gas notary Oklahoma, St. John Sapulpa hospital notary, mineral lease notary',
  openGraph: {
    title: 'Mobile Notary Creek County OK | Sapulpa Notary Public',
    description:
      'Certified Creek County notaries for real estate, oil and gas, agricultural business, and estate planning documents. Serving Sapulpa (21,000 residents) with mobile and remote appointments.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creek County Mobile Notary | Sapulpa & Rural Coverage',
    description: 'Mobile and remote notary dispatch for every Creek County community, including Sapulpa, Bristow, Drumright, Kellyville, Depew, Mannford, Oilton, and Slick.'
  },
  alternates: {
    canonical: canonicalUrl
  }
};

const cities = [
  { name: 'Sapulpa', population: '21,000+', note: 'County Seat' },
  { name: 'Bristow', population: '4,300+', note: '' },
  { name: 'Drumright', population: '2,800+', note: 'Oil heritage' },
  { name: 'Kellyville', population: '1,200+', note: '' },
  { name: 'Depew', population: '500+', note: '' },
  { name: 'Mannford', population: '3,200+', note: '' },
  { name: 'Oilton', population: '1,000+', note: 'Oil heritage' },
  { name: 'Slick', population: '150+', note: '' }
];

const services = [
  {
    title: 'Mobile Notary Dispatch',
    subtitle: 'Barns, boardrooms, and courthouse steps',
    description:
      'From ranch closings outside Mannford to same-day deeds in Sapulpa (population 21,000), our notaries arrive with compliant stamps, witnesses, and scan-back kits. St. John Sapulpa hospital notarizations available 24/7.',
    bullets: [
      '24/7 scheduling with live ETA updates',
      'Clear access plans for farms, oil pads, and gated communities',
      'Hospital clearances including St. John Sapulpa and rehab facilities',
      'Travel logs and document scans returned within an hour'
    ],
    icon: Compass
  },
  {
    title: 'Oil & Gas Document Specialists',
    subtitle: 'Creek County&apos;s energy industry partner',
    description:
      'We understand the unique documentation needs of Creek County&apos;s oil and gas industry—from mineral lease assignments and division orders to surface use agreements and right-of-way packets.',
    bullets: [
      'Mineral lease and assignment notarization',
      'Division order and royalty documentation',
      'Surface use and right-of-way agreements',
      'Field service and vendor contract witnessing'
    ],
    icon: Layers
  },
  {
    title: 'Remote Online Notary (RON)',
    subtitle: 'Secure video notarization anywhere',
    description:
      'Commissioned Oklahoma RON specialists use ID proofing, audit trails, and tamper-evident seals for out-of-state signers and Creek County residents abroad.',
    bullets: [
      'Global signer access with webcam + government ID',
      'Meets lender, title, and oilfield compliance standards',
      'Digital evidence packages delivered immediately',
      'Start at /remote-online-notary to reserve a session'
    ],
    icon: PenTool
  }
];

const documentCategories = [
  {
    title: 'Real Estate & Land Use',
    items: ['Warranty and quitclaim deeds', 'Seller and refinance packages', 'Easements for pipelines and driveways', '1031 exchange affidavits']
  },
  {
    title: 'Estate & Family Planning',
    items: ['Wills and living trusts', 'Advance directives and medical POAs', "Guardianship and adoption consents", 'Transfer-on-death deeds']
  },
  {
    title: 'Oil, Gas, & Agricultural',
    items: ['Mineral leases and assignments', 'Surface use agreements', 'Vendor and field service contracts', 'Farm operating lines and collateral agreements']
  },
  {
    title: 'Business & Government',
    items: ['Loan packages and SBA forms', 'Bids, bonds, and procurement documents', 'School and municipal affidavits', 'Professional licensing packets']
  }
];

const countyCharacter = ['Historic oil boom heritage centered around Cushing and Drumright', 'Agricultural roots with cattle, pecan, and row-crop operations', 'Tight-knit small-town communities that expect familiar faces at the signing table'];

const faqs = [
  {
    question: 'Do you travel to every Creek County town?',
    answer:
      'Yes. We dispatch notaries across Sapulpa, Bristow, Drumright, Kellyville, Depew, Mannford, Oilton, Slick, and rural routes between them. Provide the meeting spot and we will confirm travel time and access instructions.'
  },
  {
    question: 'Can you notarize oil and gas or agricultural paperwork?',
    answer:
      'We routinely witness mineral assignments, division orders, crop financing forms, and agricultural operating agreements. Our team understands how to handle large exhibit packets and retain chain-of-custody notes.'
  },
  {
    question: 'Do you offer remote online notarization for Creek County clients?',
    answer:
      'Absolutely. Schedule through /remote-online-notary to complete documents by video with secure ID verification, credential analysis, and downloadable audit trails.'
  },
  {
    question: 'What identification should signers bring?',
    answer:
      'Bring a current government-issued photo ID such as an Oklahoma driver license, passport, or military ID. When someone lacks ID, we can coordinate credible witnesses who do have acceptable identification.'
  },
  {
    question: 'How do I confirm availability or request pricing?',
    answer:
      'Call (539) 367-6832, email info@justlegalsolutions.org, or start at our main notary page at /notary. For published fee references visit /pricing.'
  },
  {
    question: 'Where can I review Joseph’s credentials?',
    answer:
      'Joseph’s commission details, bonding, insurance, and RON authorizations are posted at /notary/joseph for easy verification before you book.'
  }
];

const stats = [
  { label: 'Sapulpa Response', value: '45 min', icon: Clock },
  { label: 'Sapulpa Population', value: '21,000+', icon: Users },
  { label: 'RON Turnaround', value: 'Same Day', icon: PenTool },
  { label: 'Rural Access Routes Logged', value: '30+', icon: MapPin }
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Just Legal Solutions - Creek County Mobile Notary',
  url: canonicalUrl,
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: cities.map((city) => ({ '@type': 'City', name: `${city.name}, OK` })),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Creek County',
    addressRegion: 'OK',
    addressCountry: 'US'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59'
  },
  sameAs: ['https://justlegalsolutions.org/notary', 'https://justlegalsolutions.org/notary/joseph'],
  image: 'https://justlegalsolutions.org/images/hero.webp'
};

const notaryServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Creek County Notary Services',
  provider: {
    '@type': 'Organization',
    name: 'Just Legal Solutions',
    url: 'https://justlegalsolutions.org/notary'
  },
  serviceType: ['Mobile Notary', 'Signing Studio', 'Remote Online Notarization'],
  areaServed: cities.map((city) => ({ '@type': 'City', name: `${city.name}, Creek County` })),
  availableChannel: [
    { '@type': 'ServiceChannel', serviceUrl: canonicalUrl, name: 'Mobile Dispatch' },
    { '@type': 'ServiceChannel', serviceUrl: 'https://justlegalsolutions.org/remote-online-notary', name: 'Remote Online Notary' }
  ],
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org'
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://justlegalsolutions.org/' },
    { '@type': 'ListItem', position: 2, name: 'Notary Services', item: 'https://justlegalsolutions.org/notary' },
    { '@type': 'ListItem', position: 3, name: 'Creek County', item: canonicalUrl }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
};

export default function CreekCountyNotaryPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={notaryServiceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <main className="bg-gray-50">
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 text-white pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
                  <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></span>
                  Creek County mobile notary — Sapulpa, Bristow, Drumright, Kellyville, Depew, Mannford, Oilton, Slick
                </span>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Creek County Notary Publics for Mobile and Remote Signings
                </h1>
                <p className="text-lg md:text-xl text-emerald-100 mb-6">
                  Just Legal Solutions keeps Creek County paperwork moving with certified mobile notaries and remote online notarization. We respect the county’s historic oil boom heritage, agricultural backbone, and small-town expectations for punctual, familiar service.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:5393676832"
                    className="inline-flex items-center gap-2 bg-white text-green-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-50"
                  >
                    <Phone className="w-5 h-5" />
                    (539) 367-6832
                  </a>
                  <a
                    href="mailto:info@justlegalsolutions.org"
                    className="inline-flex items-center gap-2 border border-white/60 px-6 py-3 rounded-lg font-semibold hover:bg-white/10"
                  >
                    <Mail className="w-5 h-5" />
                    info@justlegalsolutions.org
                  </a>
                  <Link
                    href="/notary"
                    className="inline-flex items-center gap-2 bg-emerald-500/30 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500/40"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Visit main notary page
                  </Link>
                </div>
                <p className="text-sm text-emerald-100 mt-4">
                  Verify bonds, insurance, and RON credentials anytime at <Link href="/notary/joseph" className="underline font-semibold">/notary/joseph</Link>.
                </p>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="bg-white/10 rounded-2xl p-5 backdrop-blur border border-white/20">
                        <Icon className="w-6 h-6 mb-3" />
                        <p className="text-sm text-emerald-100">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wide text-emerald-700 font-semibold">Creek County Coverage</p>
              <h2 className="text-3xl font-bold text-gray-900">Mobile Notary and Remote Support Wherever You Are</h2>
              <p className="text-gray-600 mt-4">
                Whether you are finalizing a land deal in Sapulpa, updating estate plans in Bristow, or closing an oil and gas assignment near Drumright, our Creek County notary public team arrives prepared with journals, seals, and digital scan equipment.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition bg-gradient-to-br from-emerald-50 to-white">
                    <Icon className="w-10 h-10 text-emerald-700 mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-emerald-700 mb-2">{service.subtitle}</p>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                          <span>{bullet}</span>
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cities and Towns We Serve Daily</h2>
              <p className="text-gray-600 mb-6">
                Dispatch routes follow Highway 66, Turner Turnpike, Highway 33, and the Cimarron River corridor so we can provide dependable arrival times for every Creek County notary callout.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {cities.map((city) => (
                  <div key={city.name} className="flex items-center gap-2 bg-white rounded-2xl border border-gray-200 px-4 py-3">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-800">{city.name}</span>
                      <span className="text-xs text-gray-500">{city.population}{city.note && ` • ${city.note}`}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Need another Oklahoma county? Start at <Link href="/notary" className="text-emerald-700 font-semibold">/notary</Link> for our statewide dispatch map.
              </p>
            </div>
            <div className="bg-white rounded-3xl border border-emerald-100 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Creek County Character</h3>
              <p className="text-gray-600 mb-6">
                Local knowledge matters when you are coordinating with refinery gates outside Drumright, reaching a rural driveway in Depew, or meeting elders in Slick. We document every idiosyncrasy so repeat visits feel effortless.
              </p>
              <ul className="space-y-4">
                {countyCharacter.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <Leaf className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Documents We Notarize Every Week</h2>
              <p className="text-gray-600 mb-6">
                Every Creek County appointment includes ID verification, journal entries, compliant seals, and optional scan backs so your files reach the next desk fast.
              </p>
              <div className="space-y-4">
                {documentCategories.map((category) => (
                  <div key={category.title} className="bg-gray-50 rounded-2xl border border-gray-200 p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <FileText className="w-4 h-4 text-emerald-600 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-800 to-emerald-600 text-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Why Creek County Chooses Local Notaries</h3>
              <ul className="space-y-4 text-emerald-50">
                {[
                  'Dispatchers who track ag traffic, refinery shifts, and courthouse hours to keep you on schedule',
                  'Oklahoma commissioned notaries with surety bond and E&O protection',
                  'Experience navigating farm roads, lake properties, and secure industrial gates',
                  'Remote online notarization that meets Secretary of State regulations for Creek County residents abroad',
                  'Document handling protocols for estate planning, oil and gas, and agricultural finance packets',
                  'Direct line to leadership and Joseph’s verified credentials for compliance teams'
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-white mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-5 bg-white/10 rounded-2xl">
                <p className="text-sm mb-2">Need published fee references?</p>
                <Link href="/pricing" className="inline-flex items-center gap-2 font-semibold">
                  Visit /pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Creek County Notary FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="bg-white border border-gray-200 rounded-2xl p-5" open>
                  <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                    {faq.question}
                    <span className="text-emerald-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-3 text-sm">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-wide mb-4">Ready When Creek County Calls</p>
            <h2 className="text-3xl font-bold mb-4">Book a Creek County Mobile Notary in Minutes</h2>
            <p className="text-emerald-100 mb-8">
              Call, email, or start with our main notary page to dispatch a vetted signing agent for mobile appointments or secure remote online notarization anywhere in Creek County, Oklahoma.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-white text-green-900 font-semibold px-6 py-3 rounded-lg">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a href="mailto:info@justlegalsolutions.org" className="inline-flex items-center gap-2 border border-white px-6 py-3 rounded-lg font-semibold">
                <Mail className="w-5 h-5" />
                Email Dispatch
              </a>
              <Link href="/notary" className="inline-flex items-center gap-2 bg-emerald-500/40 px-6 py-3 rounded-lg font-semibold">
                <Calendar className="w-5 h-5" />
                Schedule Online
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
