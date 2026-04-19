import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '../../../components/ui/navbar';
import Footer from '../../../components/ui/footer';
import JsonLd from '../../../components/JsonLd';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  FileText,
  CheckCircle,
  Shield,
  Calendar,
  Building2,
  Briefcase,
  Heart,
  Gavel,
  Users,
  Star,
  Globe,
  Truck,
  ArrowRight,
  Flame
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/notary/tulsa-county';

export const metadata: Metadata = {
  title: 'Mobile Notary Tulsa County OK | 24/7 Notary Public Tulsa',
  description:
    'Tulsa County mobile notary professionals serving ~669,000 residents across Downtown, Midtown, Owasso, Broken Arrow, Jenks, and every Tulsa neighborhood. Mobile, in-office, and remote online notarization for oil & gas, hospitals, law firms, courthouses, and residents. Response times 30-60 min Tulsa, 45-90 min Broken Arrow.',
  keywords:
    'Tulsa mobile notary, downtown Tulsa notary, notary public Tulsa OK, Tulsa County notary services, 24/7 notary Tulsa, mobile notary Oklahoma, remote online notarization Tulsa, emergency notary Tulsa County, Brady Arts District notary, Blue Dome District notary, Pearl District notary, Kendall-Whittier notary',
  openGraph: {
    title: 'Mobile Notary Tulsa County OK | 24/7 Notary Public Tulsa',
    description:
      'On-demand Tulsa County notary signing agents serving ~669,000 residents. 30-60 min response in Tulsa, 45-90 min to Broken Arrow. Oil & gas, hospitals, courthouses, and residents. Mobile, in-office, and remote online notarization 24/7.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tulsa County Mobile Notary | Available 24/7',
    description: 'Book a Tulsa mobile notary for emergency, after-hours, and same-day signings anywhere in the county. Serving 669,000+ residents.'
  },
  alternates: {
    canonical: canonicalUrl
  }
};

const neighborhoods = [
  'Downtown Tulsa',
  'Brady Arts District',
  'Blue Dome District',
  'Kendall-Whittier',
  'Pearl District',
  'Midtown',
  'South Tulsa',
  'East Tulsa',
  'North Tulsa',
  'West Tulsa'
];

const cities = [
  { name: 'Tulsa', population: '~400,000', responseTime: '30-60 min' },
  { name: 'Broken Arrow', population: '116,000+', responseTime: '45-90 min' },
  { name: 'Owasso', population: '38,000+', responseTime: '45-75 min' },
  { name: 'Bixby', population: '29,000+', responseTime: '45-75 min' },
  { name: 'Jenks', population: '26,000+', responseTime: '40-70 min' },
  { name: 'Sand Springs', population: '20,000+', responseTime: '40-70 min' },
  { name: 'Sapulpa', population: '21,000+', responseTime: '45-75 min' },
  { name: 'Glenpool', population: '14,000+', responseTime: '40-70 min' },
  { name: 'Collinsville', population: '7,500+', responseTime: '50-80 min' },
  { name: 'Skiatook', population: '8,000+', responseTime: '50-80 min' }
];

const services = [
  {
    title: 'Mobile Notary Dispatch',
    subtitle: 'Anywhere in Tulsa County',
    description:
      'Rapid-response travel teams cover lofts downtown, rigs west of the river, suburban homes, hospitals, and detention facilities.',
    bullets: [
      '24/7 scheduling with ETA updates',
      'Badge-ready for refineries and secure campuses',
      'Hospital, hospice, and jail clearances',
      'Document scan-backs within one hour'
    ],
    icon: Truck
  },
  {
    title: 'In-Office Signing Lounge',
    subtitle: 'Quiet, professional environment',
    description:
      'Perfect for attorneys, title teams, and families that prefer a controlled setting with live document coaching.',
    bullets: [
      'High-speed scan and print support',
      'Conference-ready seating for up to 6 signers',
      'Identity verification concierge',
      'See /pricing for published fee details'
    ],
    icon: Building2
  },
  {
    title: 'Remote Online Notarization',
    subtitle: 'RON from any device',
    description:
      'Oklahoma commissioned RON specialists using secure ID proofing and tamper-evident audit trails.',
    bullets: [
      'Global signer access with webcam + ID',
      'Meets lender and title underwriting standards',
      'Digital evidence package delivered instantly',
      'Backed by Joseph&apos;s credentials on file'
    ],
    icon: Globe
  }
];

const industries = [
  {
    title: 'Energy & Oilfield Operations',
    description:
      'Rig moves, pipeline easements, vendor onboarding, and right-of-way packets for companies operating along the Tulsa metro energy corridor.',
    icon: Flame
  },
  {
    title: 'Law Firms & Courthouses',
    description:
      'Court filings, affidavits, probate work, and witness statements for teams appearing at the Tulsa County Courthouse, Federal Courthouse, and municipal courts.',
    icon: Gavel
  },
  {
    title: 'Hospitals & Care Systems',
    description:
      'Saint Francis, Hillcrest, OSU Medical Center, and regional rehab facilities rely on us for urgent medical POAs, consent forms, and guardianship packets.',
    icon: Heart
  },
  {
    title: 'Corporate & Agency Campuses',
    description:
      'From downtown towers to distribution hubs in East and West Tulsa, we coordinate access with security teams and compliance officers.',
    icon: Building2
  }
];

const documentCategories = [
  {
    title: 'Real Estate & Title',
    items: ['Warranty and quitclaim deeds', 'Refinance and HELOC packages', 'Construction lien waivers', '1031 exchange affidavits']
  },
  {
    title: 'Legal & Court Filings',
    items: ['Probate affidavits', 'Family law consents', 'Deposition transcripts', 'Structured settlement paperwork']
  },
  {
    title: 'Business & Oilfield',
    items: ['Vendor contracts', 'Rig release forms', 'Master service agreements', 'Equipment bill of sale']
  },
  {
    title: 'Healthcare & Personal',
    items: ['Medical power of attorney', 'Advance directives', 'Adoption packets', 'School travel affidavits']
  }
];

const faqs = [
  {
    question: 'Do you handle after-hours notarizations in downtown Tulsa?',
    answer:
      'Yes. We dispatch mobile notaries 24/7 for rooftop condos, law offices, or courthouse filings downtown. Call (539) 367-6832 and we will confirm arrival time and parking instructions.'
  },
  {
    question: 'Can you go to hospitals like Saint Francis or Hillcrest?',
    answer:
      'Absolutely. Our team is familiar with patient intake policies at Saint Francis, Hillcrest, OSU Medical Center, and major rehab facilities. We coordinate with nurses before entering any room.'
  },
  {
    question: 'What identification do signers need for Tulsa County notarizations?',
    answer:
      'Bring an unexpired government-issued photo ID such as an Oklahoma driver&apos;s license, passport, or military ID. When a signer lacks ID, we can arrange credible witnesses who do have proper ID.'
  },
  {
    question: 'Do you offer remote online notarization for Tulsa businesses?',
    answer:
      'Yes. Our RON platform supports multi-signer video sessions, KBA checks, and digital certificates that meet lender, oil and gas, and government standards.'
  },
  {
    question: 'How do I confirm availability or get a quote?',
    answer:
      'Call (539) 367-6832 or email info@JustLegalSolutions.org for an instant quote. You can also review service details on the main notary page or visit /pricing for published information.'
  },
  {
    question: 'Where can I review Joseph&apos;s Tulsa County credentials?',
    answer:
      'All credentials, bonds, and RON certifications are posted at /notary/joseph so you can verify our commission and insurance before booking.'
  }
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Just Legal Solutions - Tulsa County Mobile Notary',
  url: canonicalUrl,
  telephone: '(539) 367-6832',
  email: 'info@JustLegalSolutions.org',
  areaServed: cities.map((city) => ({ '@type': 'City', name: `${city.name}, OK` })),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tulsa County',
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
  name: 'Tulsa County Mobile Notary Services',
  provider: {
    '@type': 'Organization',
    name: 'Just Legal Solutions',
    url: 'https://justlegalsolutions.org/notary'
  },
  serviceType: ['Mobile Notary', 'In-Office Notary', 'Remote Online Notarization'],
  areaServed: neighborhoods.map((name) => ({ '@type': 'AdministrativeArea', name })),
  availableChannel: [
    { '@type': 'ServiceChannel', serviceUrl: canonicalUrl, name: 'Mobile Dispatch' },
    { '@type': 'ServiceChannel', serviceUrl: 'https://justlegalsolutions.org/remote-online-notary', name: 'Remote Online Notary' }
  ],
  telephone: '(539) 367-6832',
  email: 'info@JustLegalSolutions.org'
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://justlegalsolutions.org/' },
    { '@type': 'ListItem', position: 2, name: 'Notary Services', item: 'https://justlegalsolutions.org/notary' },
    { '@type': 'ListItem', position: 3, name: 'Tulsa County', item: canonicalUrl }
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

const stats = [
  { label: 'Emergency Dispatch', value: '24/7', icon: Clock },
  { label: 'County Population', value: '~669K', icon: Users },
  { label: 'Downtown Response', value: '30-60 min', icon: MapPin },
  { label: 'Broken Arrow', value: '45-90 min', icon: Globe }
];

export default function TulsaCountyNotaryPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={notaryServiceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <main className="bg-gray-50">
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Tulsa mobile notary dispatch — available 24/7
                </span>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Tulsa County Mobile Notary & Remote Online Notary Experts
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-6">
                  Serving ~669,000 Tulsa County residents across Downtown, Midtown, Brady Arts District, Blue Dome District, Pearl District, Kendall-Whittier, Broken Arrow (116,000+), Owasso (38,000+), Bixby (29,000+), and Jenks (26,000+) with certified in-person and remote notarization. 30-60 minute response in Tulsa, 45-90 minutes to Broken Arrow. Trusted by law firms, oil and gas operators, hospitals, and residents who need a notary public in Tulsa OK without the wait.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:5393676832"
                    className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50"
                  >
                    <Phone className="w-5 h-5" />
                    (539) 367-6832
                  </a>
                  <a
                    href="mailto:info@JustLegalSolutions.org"
                    className="inline-flex items-center gap-2 border border-white/60 px-6 py-3 rounded-lg font-semibold hover:bg-white/10"
                  >
                    <Mail className="w-5 h-5" />
                    info@JustLegalSolutions.org
                  </a>
                  <Link
                    href="/notary"
                    className="inline-flex items-center gap-2 bg-blue-500/30 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500/40"
                  >
                    <ArrowRight className="w-5 h-5" />
                    View all notary services
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="bg-white/10 rounded-2xl p-5 backdrop-blur border border-white/20">
                        <Icon className="w-6 h-6 mb-3" />
                        <p className="text-sm text-blue-100">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                    );
                  })}
                </div>
                <p className="text-sm text-blue-100 mt-4">
                  Fully bonded and insured. See Joseph&apos;s credentials at <Link href="/notary/joseph" className="underline font-semibold">/notary/joseph</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobile, In-Office, and RON Coverage</h2>
                <p className="text-gray-700 mb-6">
                  Whether you need a Tulsa County notary services team onsite at a refinery, in a Midtown boardroom, or online for remote stakeholders, Just Legal Solutions builds a signing plan around your timeline. Every appointment includes ID verification, journal entry, and compliant seals.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div key={service.title} className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white">
                        <Icon className="w-10 h-10 text-blue-700 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-blue-700 mb-2">{service.subtitle}</p>
                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {service.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Neighborhoods Covered</h2>
              <p className="text-gray-600 mb-6">
                From historic districts to fast-growing suburbs, our Tulsa mobile notary team already has parking plans, building access codes, and security contacts.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {neighborhoods.map((name) => (
                  <div key={name} className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 px-4 py-3">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-800">{name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cities We Serve Daily</h2>
              <p className="text-gray-600 mb-6">
                Our dispatch board tracks traffic on Highway 51, Creek Turnpike, and I-244 to deliver reliable arrival times across Tulsa County&apos;s ~669,000 residents.
              </p>
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <ul className="space-y-3">
                  {cities.map((city) => (
                    <li key={city.name} className="flex items-center justify-between text-gray-800">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">{city.name}</span>
                        <span className="text-sm text-gray-500">({city.population})</span>
                      </div>
                      <span className="text-sm text-blue-600">{city.responseTime}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Need another Oklahoma county? Visit our statewide notary hub at <Link href="/notary" className="text-blue-700 font-semibold">/notary</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold">Local Business Focus</p>
              <h2 className="text-3xl font-bold text-gray-900">Trusted by Tulsa&apos;s Critical Industries</h2>
              <p className="text-gray-600 mt-4">
                Oil and gas field offices, litigation teams, hospital administrators, and courthouse clerks choose Just Legal Solutions for reliable witness services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div key={industry.title} className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white">
                    <Icon className="w-10 h-10 text-blue-700 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.title}</h3>
                    <p className="text-gray-700 text-sm">{industry.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Documents We Notarize Every Day</h2>
                <p className="text-gray-600 mb-6">
                  Our Tulsa County notary services include document prep review, witness coordination, and secure scan backs so your filings reach the next desk fast.
                </p>
                <div className="space-y-4">
                  {documentCategories.map((category) => (
                    <div key={category.title} className="bg-white rounded-2xl border border-gray-200 p-5">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {category.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <FileText className="w-4 h-4 text-blue-600 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-3xl border border-blue-100 p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Tulsa Chooses Us</h3>
                <ul className="space-y-4 text-gray-700">
                  {[
                    'Local dispatchers monitor Tulsa traffic so we give accurate ETAs.',
                    'Commissioned Oklahoma notaries with surety bond and E&O protection.',
                    'Court-compliant journals and tamper-proof seals for every act.',
                    'Secure handling for sensitive oil & gas, legal, and medical data.',
                    'Direct line to our leadership team and Joseph&apos;s verified credentials.',
                    'Remote online notarization that meets Oklahoma Secretary of State rules.'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-5 bg-blue-50 rounded-2xl">
                  <p className="text-sm text-gray-700 mb-2">Need formal pricing?</p>
                  <Link href="/pricing" className="inline-flex items-center gap-2 text-blue-800 font-semibold">
                    Visit our pricing page
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tulsa County Notary FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="bg-gray-50 border border-gray-200 rounded-2xl p-5" open>
                  <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                    {faq.question}
                    <span className="text-blue-600">+</span>
                  </summary>
                  <p className="text-gray-700 mt-3 text-sm">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-wide mb-4">Ready When Tulsa Needs Us</p>
            <h2 className="text-3xl font-bold mb-4">Book Your Tulsa County Notary in Minutes</h2>
            <p className="text-blue-100 mb-8">
              Call, email, or start at our main notary page to dispatch a vetted signing agent for mobile, in-office, or RON appointments anywhere in Tulsa County.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a href="mailto:info@JustLegalSolutions.org" className="inline-flex items-center gap-2 border border-white px-6 py-3 rounded-lg font-semibold">
                <Mail className="w-5 h-5" />
                Email Dispatch
              </a>
              <Link href="/notary" className="inline-flex items-center gap-2 bg-blue-500/40 px-6 py-3 rounded-lg font-semibold">
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







