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
  ClipboardList,
  AlertTriangle,
  Brain,
  MapPin,
  PhoneCall,
  Lock,
  BookOpen
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/hospital-notary';

export const metadata: Metadata = {
  title: 'Hospital & Jail Notary Services Oklahoma | 24/7 Medical Notary Tulsa',
  description: 'HIPAA-aware hospital and jail notary services across Oklahoma. Bedside notarization at Saint Francis Hospital, Hillcrest Medical Center, and OSU Medical Center. Advance directives, healthcare proxies, and powers of attorney under 49 O.S. § 111 et seq. (Revised Uniform Law on Notarial Acts). Call (539) 367-6832.',
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
    title: 'Hospital & Jail Notary Services Oklahoma',
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
  },
  other: {
    'ai-content-type': 'service',
    'ai-summary': 'Hospital and jail notary services in Oklahoma available 24/7. Bedside notarization at Saint Francis Hospital, Hillcrest Medical Center, and OSU Medical Center. Handles advance directives, healthcare proxies, and powers of attorney with HIPAA awareness and capacity assessment under 49 O.S. § 111 et seq. (Revised Uniform Law on Notarial Acts). Notary fee cap: $5/act traditional (49 O.S. § 5), $25/act RON (49 O.S. § 209). Call (539) 367-6832.',
    'ai-key-facts': 'Oklahoma hospital notary: 24/7 availability. Notary fee cap $5/act (49 O.S. § 5). $10,000 surety bond required (49 O.S. § 2). Signer must be mentally competent and willing. HIPAA-aware. Serves Saint Francis, Hillcrest, OSU Medical Center, correctional facilities statewide.',
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
    desc: 'We maintain confidentiality under HIPAA guidelines and follow each facility&apos;s security protocols.'
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
    answer: 'Yes. We follow each facility&apos;s intake process, bring only approved materials, and allow extra time for security checks. We also coordinate with legal counsel when necessary.'
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
  },
  {
    question: 'What if the patient cannot physically sign?',
    answer: 'Oklahoma allows signature by mark (X) witnessed by two people, or signature by direction where the signer instructs another person to sign on their behalf. Both methods require specific procedures and additional witnesses. Our notaries are trained in these alternative signature methods.'
  },
  {
    question: 'Can you notarize for someone on a ventilator?',
    answer: 'Potentially, if the patient can communicate understanding and consent through nodding, blinking, or written responses. We work with medical staff to determine appropriate communication methods. However, if meaningful communication isn&apos;t possible, notarization must wait until the patient&apos;s condition improves.'
  },
  {
    question: 'Do you handle psychiatric facility notarizations?',
    answer: 'Yes, with additional considerations. We coordinate with treatment teams to ensure appropriate timing and verify that any medications don&apos;t impair the signer&apos;s understanding. Documentation of capacity assessment is particularly important in these settings.'
  }
];

const documentChecklist = [
  'Valid government-issued photo ID (driver&apos;s license, passport, state ID)',
  'All documents requiring notarization (printed, not electronic)',
  'Any supporting documents (powers of attorney, trust documents)',
  'Blue or black ink pens (some facilities restrict pen colors)',
  'Contact information for all parties who need to sign',
  'Healthcare proxy or agent contact information if relevant'
];

const hospitalNavigation = [
  {
    name: 'Saint Francis Hospital',
    details: '(1,100+ beds): Contact Guest Services for notary coordination; visitor badges required; parking in main garage'
  },
  {
    name: 'Hillcrest Medical Center',
    details: 'Check in at information desk; some units restrict visiting hours'
  },
  {
    name: 'St. John Medical Center',
    details: 'Larger campus—confirm building and floor in advance'
  },
  {
    name: 'Oklahoma Surgical Hospital',
    details: 'Outpatient focus; coordinate with discharge planning'
  }
];

const correctionalProcedures = [
  'Contact facility administration 24-48 hours in advance',
  'Clear security screening (no prohibited items)',
  'Expect delays due to facility lockdowns or counts',
  'Inmate ID verification through facility staff',
  'Limited document types may be accepted (verify in advance)',
  'Witness availability may be restricted'
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
                Bedside notarization at Saint Francis Hospital, Hillcrest Medical Center, OSU Medical Center, and correctional facilities statewide. Our team includes a commissioned Oklahoma notary public experienced in advance directives, healthcare proxies, and powers of attorney — executed with capacity assessment support under 49 O.S. § 111 et seq. (Revised Uniform Law on Notarial Acts). Call (539) 367-6832.
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
        {/* Why Hospital Notarization Requires Specialized Expertise */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4 text-sm font-medium">
                  <Brain className="w-4 h-4" />
                  Specialized Expertise
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Hospital Notarization Requires Specialized Expertise
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Hospital notarization demands skills beyond standard notarial practice. Healthcare environments present unique challenges: patients may be recovering from surgery, managing pain medication effects, or facing life-altering diagnoses. The notary must balance legal requirements with medical realities, working within visiting hour restrictions while ensuring document validity.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                    <p className="text-gray-700">Understanding of medical protocols and patient care schedules</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                    <p className="text-gray-700">Ability to assess cognitive capacity in challenging circumstances</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1" />
                    <p className="text-gray-700">Experience coordinating with healthcare staff and family members</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-amber-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Capacity Assessment Awareness</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Oklahoma law (49 O.S. § 111 et seq.) requires signers to be mentally competent and willing. In hospital settings, this assessment becomes critical. Our notaries are trained to recognize signs that may indicate impaired capacity: confusion about the document&apos;s purpose, inability to recall recent conversations, or apparent pressure from family members.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If concerns arise, we may recommend postponement or consultation with medical staff—protecting the signer&apos;s interests and the document&apos;s validity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Document Preparation Checklist */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Document Preparation Checklist</h3>
                </div>
                <p className="text-gray-600 mb-6">Before your hospital notary appointment, gather the following:</p>
                <ul className="space-y-4">
                  {documentChecklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 text-red-700">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Correctional Facility Procedures</h3>
                </div>
                <p className="text-gray-600 mb-6">Notarizing for inmates requires additional preparation:</p>
                <ul className="space-y-4">
                  {correctionalProcedures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ICU & Critical Care Considerations */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-4 text-sm">
                  <Activity className="w-4 h-4" />
                  Critical Care Expertise
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ICU & Critical Care Considerations
                </h2>
                <p className="text-lg text-indigo-100 leading-relaxed mb-6">
                  Intensive care units present the most challenging notarization environments. Patients may be intubated, heavily sedated, or experiencing delirium. Timing is crucial—we coordinate with nursing staff to arrive during lucid periods.
                </p>
                <p className="text-indigo-100 leading-relaxed mb-6">
                  Some ICU patients can communicate through nodding or written responses; our notaries are experienced in adapting the notarization process while maintaining legal validity. In cases where the patient cannot meaningfully participate, we honestly advise families that notarization may need to wait—protecting everyone from potentially voidable documents.
                </p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur">
                <div className="flex items-center gap-3 mb-6">
                  <PhoneCall className="w-8 h-8 text-rose-300" />
                  <h3 className="text-xl font-semibold">24/7 Emergency Response</h3>
                </div>
                <p className="text-indigo-100 leading-relaxed mb-4">
                  Medical emergencies don&apos;t follow business hours. We maintain after-hours availability for urgent hospital notarizations.
                </p>
                <p className="text-indigo-100 leading-relaxed">
                  When a family calls at 2 AM because their father needs a healthcare power of attorney before emergency surgery, we respond. This commitment reflects our understanding that some documents simply cannot wait until morning.
                </p>
                <div className="mt-6">
                  <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-white text-indigo-900 font-semibold px-5 py-3 rounded-xl">
                    <Phone className="w-5 h-5" /> (539) 367-6832
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Served */}
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

        {/* Hospital-Specific Navigation */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-indigo-600 font-semibold uppercase tracking-wide mb-2">Local Knowledge</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hospital-Specific Navigation</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each Tulsa-area hospital has unique procedures. Our familiarity with local facilities ensures smooth, efficient service.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {hospitalNavigation.map((hospital) => (
                <div key={hospital.name} className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-6 border border-indigo-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{hospital.name}</h3>
                      <p className="text-gray-700">{hospital.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-amber-600 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Nursing Homes & Rehabilitation Facilities</h4>
                  <p className="text-gray-700">
                    For nursing homes and rehabilitation facilities, advance coordination with social services departments ensures smooth access and appropriate timing. We work with facility staff to schedule visits during optimal periods for the resident.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Family Dynamics Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-rose-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Navigating Family Dynamics</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hospital notarizations often occur during family stress. Adult children may disagree about a parent&apos;s care decisions. Spouses may have conflicting interests. Our role is to ensure the signer&apos;s wishes are accurately documented—not to mediate family disputes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We maintain neutrality, focus on the signer&apos;s expressed intentions, and will not proceed if we observe coercion or undue influence. This protection benefits everyone, including family members who might later question whether the document reflects the signer&apos;s true wishes.
                </p>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4 text-sm font-medium">
                  <BookOpen className="w-4 h-4" />
                  Real Case Study
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">When Every Minute Counts</h3>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Mr. Williams, 78, was admitted to Saint Francis following a stroke. His daughter called us Sunday evening—he needed to sign a power of attorney before Monday&apos;s surgery.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We arrived at 7 AM, coordinated with the nursing station, and found Mr. Williams alert and oriented. He clearly expressed his wishes, signed with a slightly shaky but legible signature, and the document was completed before his 9 AM pre-op preparation.
                  </p>
                  <p className="text-gray-700 leading-relaxed italic">
                    His daughter later told us the peace of mind was immeasurable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Section */}
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

        {/* Special Considerations */}
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

        {/* How We Handle Sensitive Signings */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-indigo-600 font-semibold uppercase tracking-wide mb-2">Compassionate Process</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Handle Sensitive Signings</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  From first call to final notarization, we remain flexible to medical emergencies, facility lockdowns, or transport schedules. Families rely on us to stay calm, communicate clearly, and protect the signer&apos;s dignity every step of the way.
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
                  Provide patient or inmate details, desired documents, and preferred time. We&apos;ll confirm the earliest arrival window and keep you updated throughout the visit.
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

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-indigo-600 font-semibold uppercase tracking-wide mb-2">Questions We Hear Most</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hospital & Jail Notary FAQs</h2>
              <p className="text-lg text-gray-600">
                We&apos;re transparent about what to expect so families and legal teams can plan ahead. If you don&apos;t see your question, call us anytime.
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

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-indigo-200 uppercase tracking-wide mb-2">Stay Prepared</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Advocate in High-Stress Moments</h2>
              <p className="text-indigo-100 mb-6">
                Whether you&apos;re finalizing medical directives or handling urgent legal matters for a loved one in custody, our seasoned notaries bring calm assurance and legal precision.
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

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Notary Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/mobile-notary" className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors group text-center">
              <p className="font-bold group-hover:text-blue-600">Mobile Notary</p>
              <p className="text-sm text-gray-600">We come to you</p>
            </Link>
            <Link href="/remote-online-notary" className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors group text-center">
              <p className="font-bold group-hover:text-blue-600">Remote Online Notary</p>
              <p className="text-sm text-gray-600">Video notarization</p>
            </Link>
            <Link href="/what-to-bring" className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors group text-center">
              <p className="font-bold group-hover:text-blue-600">What to Bring</p>
              <p className="text-sm text-gray-600">Appointment checklist</p>
            </Link>
            <Link href="/notary/joseph" className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors group text-center">
              <p className="font-bold group-hover:text-blue-600">Meet Your Notary</p>
              <p className="text-sm text-gray-600">Credentials & certifications</p>
            </Link>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-2">Official Resources:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.sos.ok.gov/business/notary" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                Oklahoma Secretary of State ↗
              </a>
              <a href="https://www.hcch.net/en/instruments/conventions/full-text/?cid=41" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                Hague Apostille Convention ↗
              </a>
              <a href="https://www.nationalnotary.org/knowledge-center" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                National Notary Association ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
