import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';
import {
  Heart,
  Building2,
  Shield,
  Clock,
  FileText,
  Users,
  Activity,
  Stethoscope,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  LifeBuoy,
  ClipboardList
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/hospital-notary';

export const metadata: Metadata = {
  title: 'Hospital & Jail Notary Services Oklahoma | 24/7 Medical Notary Tulsa | Just Legal Solutions',
  description: 'HIPAA-aware hospital and jail notary services across Oklahoma. Bedside notarization at Saint Francis Hospital, Hillcrest Medical Center, and OSU Medical Center. Advance directives, healthcare proxies, and powers of attorney under 49 O.S. § 101 et seq. Call (539) 367-6832.',
  keywords: [
    'hospital notary Tulsa',
    'jail notary Oklahoma',
    'medical notary Oklahoma',
    'hospice notary services',
    'nursing home notary Tulsa',
    'Saint Francis Hospital notary',
    'Hillcrest Medical Center notary',
    'OSU Medical Center notary',
    'advance directives notary Oklahoma',
    'healthcare proxy notarization',
    'HIPAA aware notary',
    'Oklahoma Department of Corrections notary',
    'prison notary Oklahoma'
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: 'Hospital & Jail Notary Services Oklahoma | Just Legal Solutions',
    description: '24/7 mobile notaries for hospitals, nursing homes, hospices, and correctional facilities anywhere in Oklahoma.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '24/7 Medical & Jail Notary | Oklahoma',
    description: 'On-call notaries for hospitals, nursing homes, hospices, and correctional facilities statewide.',
  }
};

const heroHighlights = [
  {
    icon: Clock,
    title: '24/7 Dispatch',
    desc: 'Rapid deployment for urgent bedside signings'
  },
  {
    icon: Shield,
    title: 'HIPAA-Aware',
    desc: 'Secure handling of medical information'
  },
  {
    icon: Heart,
    title: 'Compassionate Support',
    desc: 'Experienced with end-of-life situations'
  },
];

const facilitiesServed = [
  {
    title: 'Healthcare Partners',
    icon: Stethoscope,
    items: [
      'Saint Francis Hospital (1,100+ beds) – Tulsa&apos;s largest medical facility',
      'Hillcrest Medical Center – Level II trauma center',
      'OSU Medical Center – academic teaching hospital',
      'VA Hospital & Clinics – veteran healthcare services',
      'Nursing homes & long-term care facilities',
      'Assisted living communities throughout Oklahoma',
      'Hospice & palliative care teams',
      'Rehabilitation & therapy centers'
    ]
  },
  {
    title: 'Correctional & Detention Facilities',
    icon: Shield,
    items: [
      'Oklahoma Department of Corrections facilities – advance coordination required',
      'Tulsa County Jail and detention centers',
      'State correctional centers – following DOC visitor procedures',
      'Juvenile detention programs',
      'Federal holding facilities (as allowed by facility policy)',
      'Community corrections and transitional housing programs'
    ]
  }
];

const documentCategories = [
  {
    title: 'Healthcare & Medical Documents',
    icon: FileText,
    items: [
      'Advance directives – legally binding healthcare instructions',
      'Healthcare proxies and surrogate designations',
      'DNR (Do Not Resuscitate) and AND orders',
      'Medical power of attorney – durable and springing',
      'HIPAA authorization and release forms',
      'Organ donation authorizations and anatomical gifts',
      'Living wills under Oklahoma statutes'
    ]
  },
  {
    title: 'Family & Property (Incarcerated Signers)',
    icon: Building2,
    items: [
      'General & limited powers of attorney',
      'Property transfer authorizations and deeds',
      'Vehicle title transfers and asset assignments',
      'Childcare authorizations and school enrollment forms',
      'Court-required affidavits and declarations',
      'Family legal matters and child custody documents',
      'Parental consent forms for minors'
    ]
  }
];

const considerations = [
  {
    title: 'Facility Coordination',
    icon: ClipboardList,
    desc: 'We coordinate with nursing stations, security desks, and visitation teams to ensure smooth entry and compliance.'
  },
  {
    title: 'Capacity & Witness Support',
    icon: Users,
    desc: 'Our notaries collaborate with healthcare staff to verify cognitive capacity and arrange neutral witnesses when needed.'
  },
  {
    title: 'Emergency Sensitivity',
    icon: LifeBuoy,
    desc: 'Trained to work calmly around critical care, hospice, and end-of-life situations where timing matters.'
  },
  {
    title: 'Secure Handling',
    icon: Shield,
    desc: 'We maintain confidentiality under HIPAA guidelines and follow each facility’s security protocols.'
  }
];

const faqs = [
  {
    question: 'How quickly can a notary arrive at a hospital or jail?',
    answer: 'We maintain a 24/7 dispatch. In Tulsa metro we can typically arrive within 60 minutes. Statewide response times vary based on travel and security clearance.'
  },
  {
    question: 'What identification is required for a patient or incarcerated signer?',
    answer: 'We accept government-issued photo IDs. For patients without ID, facility wristbands combined with staff identity verification may work. For inmates, we coordinate with security to confirm identity.'
  },
  {
    question: 'Can you notarize when the signer is sedated or non-verbal?',
    answer: 'We must confirm willingness and awareness. If the signer cannot communicate affirmatively, we collaborate with medical staff to determine capacity or pause until they can respond.'
  },
  {
    question: 'Do you assist with witness requirements?',
    answer: 'Yes. If witnesses are needed for healthcare directives or powers of attorney, we can help arrange impartial witnesses or coordinate with hospital staff when policy allows.'
  },
  {
    question: 'Are there additional steps for correctional facilities?',
    answer: 'Yes. We follow each facility’s intake process, bring only approved materials, and allow extra time for security checks. We also coordinate with legal counsel when necessary.'
  },
  {
    question: 'Can family members join the notarization?',
    answer: 'When facility rules allow, we encourage key family members or legal representatives to be present to ensure clarity and alignment.'
  },
  {
    question: 'Do you provide documents or only notarize?',
    answer: 'We can provide template medical directives or powers of attorney upon request. Many families bring documents prepared by attorneys. We ensure everything is complete before notarizing.'
  },
  {
    question: 'How do we schedule an urgent visit?',
    answer: 'Call (539) 367-6832 anytime or email info@justlegalsolutions.org. Provide patient or inmate details, location, required documents, and time sensitivity.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map((faq) => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer
    }
  }))
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://justlegalsolutions.org/'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Notary Services',
      'item': 'https://justlegalsolutions.org/notary'
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'name': 'Hospital & Jail Notary',
      'item': canonicalUrl
    }
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Just Legal Solutions',
  'telephone': '(539) 367-6832',
  'email': 'info@justlegalsolutions.org',
  'url': canonicalUrl,
  'areaServed': {
    '@type': 'State',
    'name': 'Oklahoma'
  },
  'sameAs': ['https://justlegalsolutions.org/notary']
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Hospital and Jail Notary Services',
  'provider': {
    '@type': 'Organization',
    'name': 'Just Legal Solutions',
    'telephone': '(539) 367-6832'
  },
  'areaServed': 'Oklahoma',
  'serviceType': 'Medical and correctional facility notarization',
  'availableChannel': {
    '@type': 'ServiceChannel',
    'serviceUrl': canonicalUrl,
    'availableLanguage': ['English']
  }
};

export default function HospitalNotaryPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6 text-sm">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                On-Call Hospital & Jail Notaries
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                HIPAA-Aware Hospital & Jail Notarization
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300">Available 24/7 Across Oklahoma</span>
              </h1>
              <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl">
                Bedside notarization at Saint Francis Hospital, Hillcrest Medical Center, OSU Medical Center, and correctional facilities statewide. Advance directives, healthcare proxies, and powers of attorney executed with capacity assessment support under 49 O.S. § 101 et seq. Call (539) 367-6832.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:5393676832" className="flex items-center gap-2 bg-white text-indigo-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-50 transition">
                  <Phone className="w-5 h-5" /> Call (539) 367-6832
                </a>
                <Link href="/contact" className="flex items-center gap-2 bg-transparent border border-white/60 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
                  <Mail className="w-5 h-5" /> Request Dispatch
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="grid sm:grid-cols-3 gap-4">
                {heroHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/10">
                      <Icon className="w-8 h-8 text-rose-200 mb-3" />
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-indigo-100">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-gray-50">
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-indigo-600 font-semibold uppercase tracking-wide mb-2">Trusted Medical & Correctional Support</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Facilities We Serve Daily</h2>
              <p className="text-lg text-gray-600">From critical care floors to secured visitation rooms, we adapt to every environment while keeping families informed.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {facilitiesServed.map((group) => {
                const Icon = group.icon;
                return (
                  <div key={group.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 text-indigo-700">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">{group.title}</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5" />
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

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-indigo-600 font-semibold uppercase tracking-wide mb-2">Critical Documents</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Documents We Notarize Most Often</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our team reviews each document for completeness before signatures to prevent delays. We coordinate with social workers, charge nurses, or legal counsel to ensure everyone stays aligned.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {documentCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.title} className="rounded-2xl border border-gray-200 shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 text-indigo-700">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-700">
                          <ArrowRight className="w-4 h-4 text-indigo-500 mt-1" />
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

        <section className="py-16 bg-gradient-to-br from-purple-950 via-indigo-900 to-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-indigo-200 uppercase tracking-wide mb-2">Why Specialized Notaries Matter</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Considerations in Hospitals & Correctional Settings</h2>
              <p className="text-lg text-indigo-100 max-w-3xl mx-auto">
                Sensitive environments demand more than a stamp. Our notaries are trained to collaborate with healthcare teams, security staff, and families under pressure to ensure lawful, compassionate execution.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {considerations.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur">
                    <Icon className="w-8 h-8 text-rose-200 mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-indigo-100 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-indigo-600 font-semibold uppercase tracking-wide mb-2">Compassionate Process</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Handle Sensitive Signings</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  From first call to final notarization, we remain flexible to medical emergencies, facility lockdowns, or transport schedules. Families rely on us to stay calm, communicate clearly, and protect the signer’s dignity every step of the way.
                </p>
                <div className="space-y-5">
                  {[
                    'Gather contact information for the signer, medical representative, or detention officer.',
                    'Confirm document readiness and witness needs before dispatch.',
                    'Arrive early to navigate visitor check-in or security screening.',
                    'Work alongside nurses, social workers, or legal counsel to confirm identity and capacity.',
                    'Provide notarized copies immediately and notify relevant parties when complete.'
                  ].map((step) => (
                    <div key={step} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mt-1" />
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-8 h-8 text-indigo-600" />
                  <div>
                    <p className="text-sm uppercase tracking-wide text-indigo-600">Always Available</p>
                    <h3 className="text-2xl font-bold text-gray-900">Request an Emergency Notary</h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Provide patient or inmate details, desired documents, and preferred time. We’ll confirm the earliest arrival window and keep you updated throughout the visit.
                </p>
                <div className="space-y-4">
                  <a href="tel:5393676832" className="flex items-center gap-3 text-indigo-900 bg-gradient-to-r from-indigo-100 to-purple-100 font-semibold px-5 py-3 rounded-xl">
                    <Phone className="w-5 h-5" /> (539) 367-6832
                  </a>
                  <a href="mailto:info@justlegalsolutions.org" className="flex items-center gap-3 text-indigo-700 px-5 py-3 border border-indigo-200 rounded-xl hover:bg-indigo-50">
                    <Mail className="w-5 h-5" /> info@justlegalsolutions.org
                  </a>
                  <Link href="/notary" className="flex items-center gap-2 text-indigo-700 font-semibold hover:text-indigo-900">
                    Learn about all notary services <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/mobile-notary" className="flex items-center gap-2 text-indigo-700 font-semibold hover:text-indigo-900">
                    Explore mobile notary coverage <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-indigo-600 font-semibold uppercase tracking-wide mb-2">Questions We Hear Most</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hospital & Jail Notary FAQs</h2>
              <p className="text-lg text-gray-600">
                We’re transparent about what to expect so families and legal teams can plan ahead. If you don’t see your question, call us anytime.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-gray-50">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-indigo-200 uppercase tracking-wide mb-2">Stay Prepared</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Advocate in High-Stress Moments</h2>
              <p className="text-indigo-100 mb-6">
                Whether you’re finalizing medical directives or handling urgent legal matters for a loved one in custody, our seasoned notaries bring calm assurance and legal precision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-rose-300" />
                  <p>Dedicated hospital, hospice, and correctional experience</p>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-rose-300" />
                  <p>Certified, background-screened notaries respecting every protocol</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-rose-300" />
                  <p>Fast dispatch with status updates to families or counsel</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
              <h3 className="text-2xl font-semibold mb-4">Ready when you call</h3>
              <p className="text-indigo-100 mb-6">Share the facility name, patient or inmate identifiers, and any special instructions. We coordinate the rest.</p>
              <div className="space-y-4">
                <a href="tel:5393676832" className="flex items-center gap-3 bg-white text-indigo-900 font-semibold px-5 py-3 rounded-xl">
                  <Phone className="w-5 h-5" /> (539) 367-6832
                </a>
                <a href="mailto:info@justlegalsolutions.org" className="flex items-center gap-3 text-white border border-white/50 px-5 py-3 rounded-xl">
                  <Mail className="w-5 h-5" /> info@justlegalsolutions.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
