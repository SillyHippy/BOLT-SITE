import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/ui/json-ld';
import {
  Globe,
  FileCheck,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  Layers,
  BookOpen,
  Building,
  Map
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/apostille';

export const metadata: Metadata = {
  title: 'Oklahoma Apostille Services | International Document Authentication',
  description:
    'Just Legal Solutions manages Oklahoma apostille services for birth certificates, marriage certificates, diplomas, corporate records, and court documents. We handle notarization, Secretary of State submissions, and global delivery for all 77 counties.',
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'Oklahoma Apostille Services | Just Legal Solutions',
    description:
      'Full-service apostille processing for Oklahoma documents. We guide you from notarization to Secretary of State authentication so your paperwork is accepted overseas.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oklahoma Apostille Services',
    description: 'International document authentication for every Oklahoma county with expedited Secretary of State handling.'
  }
};

const heroStats = [
  { label: 'Counties Served', value: '77' },
  { label: 'Daily SOS Drop-Offs', value: 'Yes' },
  { label: 'Documents Guided Each Month', value: '100+' },
  { label: 'Client Satisfaction', value: '4.9★' }
];

const contactMethods = [
  { label: 'Call', value: '(539) 367-6832', href: 'tel:5393676832', icon: Phone },
  { label: 'Email', value: 'info@justlegalsolutions.org', href: 'mailto:info@justlegalsolutions.org', icon: Mail }
];

const valueProps = [
  {
    icon: Shield,
    title: 'Chain-of-custody assurance',
    description:
      'Background-checked couriers and secure packaging protect your originals from the moment we receive them until they are apostilled and returned.'
  },
  {
    icon: Clock,
    title: 'Expedited & transparent timelines',
    description:
      'Daily visits to the Oklahoma Secretary of State Authentication Unit with proactive status updates so you always know where your documents stand.'
  },
  {
    icon: Globe,
    title: 'International compliance experts',
    description:
      'We align your paperwork with Hague Convention standards so foreign ministries, consulates, and universities accept it without delays.'
  },
  {
    icon: FileCheck,
    title: 'Document eligibility review',
    description:
      'Birth certificates, marriage certificates, diplomas, corporate resolutions, court orders, and more are verified before submission.'
  }
];

const howToSteps = [
  {
    title: 'Secure certified documents',
    description:
      'Request certified copies from the issuing vital records office, court clerk, university registrar, or corporate records custodian so the apostille verifies an official document.'
  },
  {
    title: 'Complete notarization (when required)',
    description:
      'Many documents must be notarized before they can be apostilled. We coordinate Oklahoma notarization through our in-house team or review the certificate you already have.'
  },
  {
    title: 'Oklahoma Secretary of State apostille',
    description:
      'Just Legal Solutions prepares the apostille cover letter, hand-carries or priority mails the packet, and obtains the state-issued apostille seal for Oklahoma documents.'
  },
  {
    title: 'Delivery for international use',
    description:
      'We return your apostilled originals via pick-up, courier, or overnight shipping so you can present them abroad with confidence and tracked custody.'
  }
];

const docCategories = [
  {
    title: 'Vital Records',
    icon: Layers,
    items: ['Birth certificates', 'Marriage certificates', 'Adoption dossiers']
  },
  {
    title: 'Education & Career',
    icon: BookOpen,
    items: ['Diplomas & transcripts', 'Professional licenses', 'Teaching credentials']
  },
  {
    title: 'Powers & Legal Authority',
    icon: CheckCircle,
    items: ['General & durable powers of attorney', 'Travel consent letters', 'Guardianship or custody orders']
  },
  {
    title: 'Corporate & Commercial',
    icon: Building,
    items: ['Articles of incorporation & bylaws', 'Certificates of good standing', 'Commercial invoices & contracts']
  },
  {
    title: 'Court & Government Filings',
    icon: Map,
    items: ['Court judgments and decrees', 'Background checks', 'Immigration or adoption packets']
  }
];

const faqs = [
  {
    question: 'What is an apostille?',
    answer:
      'An apostille is an international authentication issued under the Hague Convention that proves the signature, seal, and authority on your Oklahoma document are genuine so the document can be used abroad.'
  },
  {
    question: 'What is the Hague Convention?',
    answer:
      'The 1961 Hague Convention abolished the need for embassy legalization between member countries. A single apostille certificate from Oklahoma is enough for those nations to honor your paperwork.'
  },
  {
    question: 'How long does it take?',
    answer:
      'Most apostilles are completed in 3-5 business days, while urgent matters can often be rushed the same day depending on the Secretary of State queue. Shipping time is additional.'
  },
  {
    question: 'What documents need an apostille?',
    answer:
      'Any Oklahoma document destined for a foreign government, school, court, or employer may need an apostille. Common items include birth certificates, marriage certificates, diplomas, transcripts, powers of attorney, corporate resolutions, and court rulings.'
  },
  {
    question: 'Do I need notarization first?',
    answer:
      'Many documents must be notarized before the Secretary of State can issue an apostille. Our notary team (https://justlegalsolutions.org/notary) can meet you in person or online to keep the chain of authentication intact.'
  },
  {
    question: 'Can you help with documents from other states?',
    answer:
      'Yes. While we specialize in Oklahoma filings, we coordinate with trusted partners across the United States and can guide you through state-specific apostille requirements.'
  },
  {
    question: 'What about non-Hague countries (embassy legalization)?',
    answer:
      'If your destination country is not part of the Hague Convention, we extend the process to include U.S. Department of State certification and embassy or consulate legalization.'
  },
  {
    question: 'Do I have to visit the Secretary of State myself?',
    answer:
      'No. Just Legal Solutions handles every interaction with the Oklahoma Secretary of State Authentication Unit, including drop-off, pick-up, and document tracking.'
  },
  {
    question: 'How do I get started?',
    answer:
      'Call (539) 367-6832 or email info@justlegalsolutions.org with scans of your documents. We confirm eligibility, quote competitive rates, and send intake instructions the same day.'
  }
];

const hagueCountries = [
  'Mexico',
  'Canada',
  'United Kingdom',
  'France',
  'Germany',
  'Spain',
  'Italy',
  'Netherlands',
  'Portugal',
  'Japan',
  'South Korea',
  'Australia',
  'New Zealand',
  'Brazil',
  'Chile',
  'Colombia',
  'Philippines',
  'India',
  'South Africa',
  'Turkey'
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Just Legal Solutions',
  url: canonicalUrl,
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  description: 'Apostille and legalization specialists serving all 77 Oklahoma counties with secure nationwide shipping.',
  areaServed: [{ '@type': 'State', name: 'Oklahoma' }],
  sameAs: ['https://justlegalsolutions.org', 'https://www.facebook.com/justlegalsolutions'],
  serviceType: 'Apostille Services'
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Oklahoma Apostille Services',
  description:
    'Full-service apostille preparation for birth certificates, marriage certificates, diplomas, powers of attorney, corporate records, and court documents issued in Oklahoma.',
  provider: { '@type': 'Organization', name: 'Just Legal Solutions' },
  areaServed: 'Oklahoma',
  serviceOutput: 'Apostilled documents recognized by Hague Convention member countries',
  offers: {
    '@type': 'Offer',
    description: 'Contact Just Legal Solutions for competitive apostille and legalization rates tailored to your deadline.'
  }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://justlegalsolutions.org/' },
    { '@type': 'ListItem', position: 2, name: 'Apostille Services', item: canonicalUrl }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer }
  }))
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to obtain an Oklahoma apostille',
  step: howToSteps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.title,
    text: step.description
  }))
};

export default function ApostillePage() {
  return (
    <>
      <Navbar />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />

      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-widest text-sm text-indigo-200 mb-4">
                Apostille & Legalization · Serving every Oklahoma county
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Oklahoma Apostille Services for International Document Use
              </h1>
              <p className="text-lg text-indigo-100 mb-6">
                An apostille is the official authentication that proves your document&apos;s signature and seal are legitimate so it can be accepted overseas under the Hague Convention. We manage every step—document intake, notarization, Oklahoma Secretary of State submission, and tracked delivery back to you.
              </p>
              <p className="text-indigo-100 mb-8">
                Just Legal Solutions supports families, law firms, corporations, and schools across all 77 Oklahoma counties. Whether you are sending a birth certificate to Spain, a diploma to South Korea, or a power of attorney to Mexico, our team keeps the process simple and secure.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:5393676832"
                  className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-50 transition"
                >
                  <Phone className="w-5 h-5" />
                  Call (539) 367-6832
                </a>
                <a
                  href="mailto:info@justlegalsolutions.org"
                  className="inline-flex items-center gap-2 border border-white/60 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
                >
                  <Mail className="w-5 h-5" />
                  Email the team
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-3xl p-6 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="text-center bg-white/10 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <p className="text-sm text-indigo-100">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      className="flex items-center justify-between bg-white/5 rounded-2xl px-4 py-3 border border-white/10 hover:bg-white/10 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="bg-white/10 rounded-full p-2">
                          <Icon className="w-5 h-5 text-white" />
                        </span>
                        <div>
                          <p className="text-sm text-indigo-200">{method.label}</p>
                          <p className="font-semibold text-white">{method.value}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-indigo-100" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-slate-50">
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How the apostille process works</h2>
              <p className="text-lg text-slate-600 mb-4">
                Every apostille follows a strict chain: <strong>document</strong> → <strong>notarization or certification</strong> → <strong>Oklahoma Secretary of State apostille</strong> → <strong>delivery abroad</strong>. Breaking that chain can cause foreign authorities to reject your paperwork, which is why our team reviews each requirement before we move forward.
              </p>
              <p className="text-slate-600 mb-6">
                We stay in touch with the Oklahoma Secretary of State Authentication Unit daily, so we know current turnaround times and documentation nuances. You receive proactive updates at each milestone along with scanned copies of completed apostilles for your records.
              </p>
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <Map className="w-6 h-6 text-indigo-600" />
                <p className="text-sm text-slate-600">
                  Need notarization before the apostille? Our commissioned notaries can meet anywhere in Oklahoma or online.{' '}
                  <Link href="/notary" className="text-indigo-600 font-semibold hover:underline">
                    Explore notary options
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {valueProps.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex gap-4">
                    <span className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white rounded-2xl p-3">
                      <Icon className="w-6 h-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-indigo-600 font-semibold uppercase tracking-wide text-sm">Step-by-step guidance</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Document → Notary → Secretary of State → Delivery</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Our How-To framework keeps your originals moving. Whether you are down the street from the capitol or across the globe, we coordinate every handoff so you never have to stand in line at the Secretary of State.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {howToSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-3xl p-5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-indigo-600 font-semibold uppercase tracking-wide text-sm">Documents we handle</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">From vital records to corporate filings</h2>
              <p className="text-slate-600">
                If it was issued in Oklahoma, we can help authenticate it. Below are the most requested categories.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.title} className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-indigo-100 text-indigo-700 rounded-2xl p-2">
                        <Icon className="w-5 h-5" />
                      </span>
                      <h3 className="font-semibold text-slate-900">{category.title}</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
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

        <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Oklahoma Secretary of State partnership</h2>
              <p className="text-indigo-100 mb-4">
                The Oklahoma Secretary of State is the only agency that can issue apostilles for Oklahoma documents. We prepare compliant requests, submit them in person or via priority mail, and confirm issuance before your originals leave the building.
              </p>
              <p className="text-indigo-100 mb-6">
                Whether you are in Tulsa, Lawton, Guymon, or Idabel, you don&apos;t have to travel to Oklahoma City. Our statewide logistics cover pick-up, overnight shipping, or digital intake instructions so every county has equal access to international authentication.
              </p>
              <div className="space-y-3 text-sm text-indigo-100">
                <div className="flex items-center gap-3">
                  <Map className="w-5 h-5" />
                  <span>Serving families, agencies, and businesses in all 77 counties.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5" />
                  <span>Secure custody with tamper-evident envelopes and insurance coverage.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>Rush, same-day, or standard processing based on your deadline.</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-3xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-3">Countries that accept apostilles</h3>
              <p className="text-sm text-indigo-100 mb-4">
                Apostilles are recognized by every member of the Hague Convention. Here are some of the destinations we help every week:
              </p>
              <div className="flex flex-wrap gap-2">
                {hagueCountries.map((country) => (
                  <span key={country} className="bg-white/15 px-3 py-1 rounded-full text-sm">
                    {country}
                  </span>
                ))}
              </div>
              <div className="mt-6 text-sm text-indigo-100">
                Traveling to China, United Arab Emirates, Qatar, or another non-Hague country? We extend the process to include U.S. Department of State certification and embassy legalization so you receive the correct stamps.
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-indigo-600 font-semibold uppercase text-sm tracking-wide">Need notarization first?</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">One team for notary + apostille</h2>
            <p className="text-slate-600 mb-6">
              Many apostille delays stem from incorrect notarization. Avoid rework by scheduling our commissioned mobile, in-office, or remote notaries before the apostille submission. We ensure the venue, wording, seal, and ID requirements match Secretary of State standards.
            </p>
            <Link
              href="/notary"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-2xl shadow hover:bg-indigo-500"
            >
              Visit Notary Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-indigo-600 font-semibold uppercase tracking-wide text-sm">FAQ</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Answers to common apostille questions</h2>
              <p className="text-slate-600">Have more questions? Call or email anytime for personalized guidance.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group bg-slate-50 border border-slate-200 rounded-3xl p-5">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <span className="font-semibold text-slate-900">{faq.question}</span>
                    <span className="text-indigo-600 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-indigo-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to authenticate your Oklahoma documents?</h2>
            <p className="text-lg text-indigo-100 mb-8">
              Contact Just Legal Solutions for competitive apostille rates, rush availability, and clear instructions tailored to your destination country.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:5393676832"
                className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-blue-50"
              >
                <Phone className="w-5 h-5" />
                (539) 367-6832
              </a>
              <a
                href="mailto:info@justlegalsolutions.org"
                className="inline-flex items-center gap-2 border border-white/60 px-6 py-3 rounded-2xl font-semibold hover:bg-white/10"
              >
                <Mail className="w-5 h-5" />
                info@justlegalsolutions.org
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
