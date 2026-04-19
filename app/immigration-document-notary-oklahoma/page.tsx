import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';
import {
  FileText,
  Globe,
  Shield,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  MapPin,
  Users,
  AlertTriangle,
  BookOpen,
  Heart,
  Briefcase,
  Scale,
  Star,
  XCircle
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/immigration-document-notary-oklahoma';

export const metadata: Metadata = {
  title: 'Immigration Document Notary Tulsa | I-130, I-485, I-751 Forms',
  description: 'Immigration notary Tulsa services for USCIS forms. I-130, I-485, I-751, I-864 notarization. Bilingual services available. Oklahoma fee cap $5/act. Call (539) 367-6832.',
  keywords: [
    'immigration notary Tulsa',
    'immigration document notary Oklahoma',
    'I-130 notarization Tulsa',
    'I-485 notarization Oklahoma',
    'I-751 notarization Tulsa',
    'I-864 affidavit of support notary',
    'USCIS notary Tulsa',
    'bilingual notary Tulsa',
    'Spanish notary Oklahoma',
    'mobile immigration notary Tulsa',
    'immigration forms notarization',
    'notarize USCIS documents Oklahoma',
    'immigration notary near me',
    'affidavit of support notarization Tulsa'
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: 'Immigration Document Notary Tulsa | I-130, I-485, I-751',
    description: 'Professional notary for USCIS forms in Tulsa. Bilingual services. Oklahoma fee cap $5/act (49 O.S. § 5). Call (539) 367-6832.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immigration Document Notary Tulsa | USCIS Forms',
    description: 'I-130, I-485, I-751, I-864 notarization in Tulsa. Bilingual services available. Call (539) 367-6832.',
  },
  other: {
    'ai-content-type': 'service',
    'ai-summary': 'Immigration document notary services in Tulsa, Oklahoma. Notarizes USCIS forms including I-130, I-485, I-751, I-864 Affidavit of Support, and supporting affidavits. Bilingual Spanish services available. Oklahoma notary fee cap: $5/act traditional (49 O.S. § 5), $25/act RON (49 O.S. § 209). Mobile notary available throughout Tulsa metro. Cannot provide legal immigration advice — notarization only. Call (539) 367-6832.',
    'ai-key-facts': 'Immigration notary Tulsa: I-130, I-485, I-751, I-864. Fee cap $5/act (49 O.S. § 5). $10,000 surety bond (49 O.S. § 2). Bilingual Spanish. Mobile notary available. Cannot provide immigration legal advice. Led by Joseph Iannazzi, commissioned Oklahoma notary.',
  }
};

const heroHighlights = [
  { icon: Globe, title: 'USCIS Compliant', desc: 'Meets all federal notarization requirements' },
  { icon: Users, title: 'Bilingual Services', desc: 'Spanish-language scheduling available' },
  { icon: Clock, title: 'Same-Day Available', desc: 'Urgent filing? We accommodate your timeline' },
];

const formsWeNotarize = [
  {
    title: 'Family-Based Immigration',
    icon: Heart,
    items: [
      'I-130 Petition for Alien Relative — supporting affidavits',
      'I-485 Application to Register Permanent Residence — employment letters',
      'I-751 Petition to Remove Conditions — joint financial affidavits',
      'I-864 Affidavit of Support — sponsor signature notarization',
      'I-765 Application for Employment Authorization'
    ]
  },
  {
    title: 'Naturalization & Citizenship',
    icon: Star,
    items: [
      'N-400 Application for Naturalization — supporting docs',
      'N-600 Application for Certificate of Citizenship',
      'N-565 Application for Replacement Document',
      'Oath of allegiance supporting documentation',
      'Citizenship ceremony preparation documents'
    ]
  },
  {
    title: 'Employment-Based Immigration',
    icon: Briefcase,
    items: [
      'I-140 Immigrant Petition for Alien Worker',
      'I-129 Petition for Nonimmigrant Worker',
      'I-539 Application to Extend/Change Status',
      'Employment verification letters',
      'Professional credential certifications'
    ]
  },
  {
    title: 'Supporting Documents',
    icon: FileText,
    items: [
      'Certified translation affidavits',
      'Financial affidavits and support letters',
      'Marriage affidavits and relationship documentation',
      'Power of attorney for immigration matters',
      'Property ownership and insurance documentation'
    ]
  }
];

const processSteps = [
  { step: '1', title: 'Call or Email', desc: 'Contact us at (539) 367-6832 or info@JustLegalSolutions.org with your document type.' },
  { step: '2', title: 'Confirm Documents', desc: 'Let us know which forms and supporting documents need notarization.' },
  { step: '3', title: 'Schedule Appointment', desc: 'Choose an office visit or mobile notary service at your location.' },
  { step: '4', title: 'Bring Valid ID', desc: 'Government-issued photo ID required: driver\'s license, passport, or state ID.' },
  { step: '5', title: 'Complete Your Forms', desc: 'Have documents filled out before your appointment — notary cannot help complete forms.' },
  { step: '6', title: 'Get Notarized', desc: 'Professional notarization with proper jurat/acknowledgment and official seal.' },
];

const faqs = [
  {
    question: 'Can a notary help me fill out my immigration forms?',
    answer: 'No. A notary public cannot provide legal advice or assist with completing immigration forms. Only licensed immigration attorneys or DOJ-accredited representatives can provide legal assistance. A notary\'s role is limited to verifying identity and witnessing signatures on completed documents.'
  },
  {
    question: 'How much does immigration document notarization cost in Tulsa?',
    answer: 'Oklahoma notary fees are regulated by state law. The maximum fee is $5 per signature for acknowledgments and jurats (49 O.S. § 5). Remote Online Notarization (RON) is capped at $25 per act (49 O.S. § 209). Mobile notary services may include additional travel fees. Call (539) 367-6832 for a complete quote.'
  },
  {
    question: 'Do all USCIS forms need to be notarized?',
    answer: 'No. Many USCIS forms do not require notarization. The Affidavit of Support (I-864) and certain supporting affidavits typically require notarization. The main I-130, I-485, and N-400 forms generally do not. Always check the specific form instructions or consult with an immigration attorney.'
  },
  {
    question: 'What ID do I need for immigration document notarization?',
    answer: 'You need a valid government-issued photo ID such as a driver\'s license, state ID card, passport, or military ID. The ID must be current and contain your photograph and signature. Foreign passports are acceptable for notarization purposes.'
  },
  {
    question: 'Can you notarize documents in Spanish or other languages?',
    answer: 'Yes. Oklahoma notaries can notarize documents written in foreign languages, provided the notarial certificate is in English and the notary can communicate with the signer sufficiently to verify identity and willingness. We offer bilingual Spanish scheduling services for your convenience.'
  },
  {
    question: 'How long does immigration document notarization take?',
    answer: 'Most notarizations are completed in 15-30 minutes, depending on the number of documents. Multiple documents can be notarized in a single session. We recommend scheduling an appointment to ensure prompt service.'
  },
  {
    question: 'Do you offer mobile notary for immigration documents?',
    answer: 'Yes. We provide mobile notary services throughout the Tulsa metro area — Broken Arrow, Jenks, Bixby, Owasso, Sand Springs, Sapulpa, and beyond. We come to your home, office, or attorney\'s location. Call (539) 367-6832 to schedule.'
  },
  {
    question: 'What is the difference between a notary and a "notario"?',
    answer: 'In many Latin American countries, a "notario público" is an attorney-level position with authority to provide legal advice. In the United States, a notary public can ONLY verify identities and witness signatures — they cannot provide legal advice, complete forms, or represent you. Beware of anyone claiming to be a "notario" offering immigration legal services unless they are a licensed attorney.'
  }
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': 'Just Legal Solutions - Immigration Document Notary Tulsa',
  'description': 'Professional notary services for immigration documents including I-130, I-485, I-751, and I-864 notarization. Bilingual services available.',
  'url': canonicalUrl,
  'telephone': '+1-539-367-6832',
  'email': 'info@JustLegalSolutions.org',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '564 E 138th Pl',
    'addressLocality': 'Glenpool',
    'addressRegion': 'OK',
    'postalCode': '74033',
    'addressCountry': 'US'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': '35.9476',
    'longitude': '-96.0083'
  },
  'priceRange': '$5 per notarial act',
  'areaServed': {
    '@type': 'State',
    'name': 'Oklahoma'
  },
  'openingHoursSpecification': [
    { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday'], 'opens': '08:00', 'closes': '18:00' },
    { '@type': 'OpeningHoursSpecification', 'dayOfWeek': 'Saturday', 'opens': '09:00', 'closes': '14:00' }
  ]
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'serviceType': 'Immigration Document Notarization',
  'provider': {
    '@type': 'ProfessionalService',
    'name': 'Just Legal Solutions',
    'telephone': '+1-539-367-6832'
  },
  'areaServed': { '@type': 'State', 'name': 'Oklahoma' },
  'description': 'Notarization of USCIS immigration forms and supporting documents including I-130, I-485, I-751, I-864 Affidavit of Support, translation certifications, and financial affidavits.',
  'offers': {
    '@type': 'Offer',
    'price': '5.00',
    'priceCurrency': 'USD',
    'description': 'Per notarial act (Oklahoma fee cap per 49 O.S. § 5)'
  }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://justlegalsolutions.org' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Notary Services', 'item': 'https://justlegalsolutions.org/notary' },
    { '@type': 'ListItem', 'position': 3, 'name': 'Immigration Document Notary', 'item': canonicalUrl }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map((faq) => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
  }))
};

export default function ImmigrationDocumentNotaryPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Globe className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-medium text-blue-200">USCIS-Compliant Notarization</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Immigration Document<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Notary Services Tulsa</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Professional notarization of USCIS forms — I-130, I-485, I-751, and I-864 Affidavit of Support.
              Bilingual services available. Oklahoma notary fee cap: $5 per act.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+15393676832" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <Phone className="w-5 h-5" />
                (539) 367-6832
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/30 hover:bg-white/20 transition-all">
                <Mail className="w-5 h-5" />
                Schedule Online
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {heroHighlights.map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <item.icon className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-blue-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="bg-gray-50">
        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is an Immigration Document Notary?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  An <strong>immigration document notary</strong> is a commissioned notary public who notarizes signatures on USCIS forms
                  and supporting documents required for immigration cases. While notaries cannot provide legal immigration advice, they
                  verify identities and witness signatures on forms like the I-130, I-485, I-751, and Affidavit of Support (I-864) —
                  ensuring documents meet USCIS authentication requirements.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Just Legal Solutions, we provide professional <strong>immigration notary Tulsa</strong> services for individuals,
                  families, and immigration attorneys throughout the Tulsa metro area. Led by Joseph Iannazzi, a commissioned Oklahoma
                  notary, we understand the specific requirements for notarizing immigration documents and ensure every notarization
                  complies with both Oklahoma notary laws and USCIS standards.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-amber-800 text-sm">
                      <strong>Important:</strong> A notary public is NOT an immigration consultant and cannot provide legal advice,
                      help complete forms, or advise on immigration strategy. For legal assistance, consult a licensed immigration attorney.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Oklahoma Notary Fee Schedule
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-blue-100">
                    <span className="text-gray-700">Acknowledgment / Jurat</span>
                    <span className="font-bold text-blue-800">$5 max per act</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-blue-100">
                    <span className="text-gray-700">Remote Online (RON)</span>
                    <span className="font-bold text-blue-800">$25 max per act</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-blue-100">
                    <span className="text-gray-700">Mobile Travel Fee</span>
                    <span className="font-bold text-blue-800">Varies by distance</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    Per 49 O.S. § 5 (traditional) and 49 O.S. § 209 (RON). Oklahoma&apos;s regulated fee structure protects consumers.
                  </p>
                </div>
                <a href="tel:+15393676832" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                  <Phone className="w-4 h-4" />
                  Get a Quote: (539) 367-6832
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Forms We Notarize */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Forms We Notarize for Immigration Cases</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide notarization services for all major USCIS forms and supporting documents.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {formsWeNotarize.map((category) => (
                <div key={category.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="w-6 h-6 text-indigo-600" />
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* I-864 Deep Dive */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Affidavit of Support (I-864) Notarization</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The <strong>Form I-864, Affidavit of Support</strong>, is a legally enforceable contract in which the sponsor agrees
                  to provide financial support to the intending immigrant until they become a U.S. citizen or have worked 40 qualifying
                  quarters. The I-864 <strong>requires</strong> the sponsor&apos;s signature to be notarized.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What Needs Notarization</h3>
                <ul className="space-y-2">
                  {[
                    'Primary sponsor signature — must be notarized',
                    'Joint sponsor signatures — if applicable, must be notarized',
                    'Household member signatures — if combining income',
                    'Supporting financial documents — bank letters, employment verification'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our I-864 Notarization Process</h3>
                <div className="space-y-4">
                  {[
                    { num: '1', title: 'Identity Verification', desc: 'Valid government-issued photo ID required' },
                    { num: '2', title: 'Signature Witnessing', desc: 'Notary observes signature in person' },
                    { num: '3', title: 'Jurat or Acknowledgment', desc: 'Proper notarial certificate applied' },
                    { num: '4', title: 'Official Seal', desc: 'Oklahoma notary seal affixed clearly' },
                    { num: '5', title: 'Journal Entry', desc: 'Complete notarial journal record maintained' },
                  ].map((step) => (
                    <div key={step.num} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm flex-shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notary vs Notario Warning */}
        <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notary vs. Immigration Consultant — Know the Difference</h2>
              <p className="text-blue-200 max-w-2xl mx-auto">
                Protect yourself from unauthorized practice of law. Understanding the difference can save you from fraud.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-green-300 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  What a Notary CAN Do
                </h3>
                <ul className="space-y-3">
                  {[
                    'Verify your identity using valid photo ID',
                    'Witness your signature on completed documents',
                    'Notarize signatures on USCIS forms and supporting docs',
                    'Administer oaths and affirmations when required',
                    'Certify copies of certain documents (where permitted by Oklahoma law)'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-blue-100">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-red-300 mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  What a Notary CANNOT Do
                </h3>
                <ul className="space-y-3">
                  {[
                    'Provide legal advice about immigration law',
                    'Help you complete USCIS forms',
                    'Advise on which forms to file',
                    'Represent you before USCIS or immigration court',
                    'Guarantee outcomes or processing times'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-blue-100">
                      <XCircle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-red-900/30 border border-red-500/30 rounded-2xl p-6 text-center">
              <AlertTriangle className="w-6 h-6 text-red-400 mx-auto mb-3" />
              <p className="text-red-200 font-semibold mb-2">Warning: &quot;Notario&quot; Fraud</p>
              <p className="text-blue-200 text-sm max-w-2xl mx-auto">
                In Latin America, a &quot;notario público&quot; is an attorney-level position. In the U.S., a notary public
                can only verify identities and witness signatures. Beware of anyone calling themselves a &quot;notario&quot; who
                offers immigration legal services — unless they are a licensed attorney.
              </p>
            </div>
          </div>
        </section>

        {/* Documents That Don't Need Notarization */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Which Immigration Documents Need Notarization?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Documents That MAY Require Notarization
                </h3>
                <ul className="space-y-2">
                  {[
                    'Affidavit of Support (I-864) — requires notarization',
                    'Supporting affidavits from friends/family',
                    'Translation certification affidavits',
                    'Financial verification letters (if requested by USCIS)',
                    'Power of attorney for immigration matters',
                    'Property and insurance documentation for I-751'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-green-800">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Forms That Typically DON&apos;T Need Notarization
                </h3>
                <ul className="space-y-2">
                  {[
                    'I-130 Petition for Alien Relative (main form)',
                    'I-485 Application to Register Permanent Residence',
                    'I-765 Application for Employment Authorization',
                    'N-400 Application for Naturalization',
                    'I-90 Application to Replace Permanent Resident Card',
                    'I-131 Application for Travel Document'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700">
                      <FileText className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 text-sm">
              Unsure if your document needs notarization? Call <a href="tel:+15393676832" className="text-blue-600 font-semibold hover:underline">(539) 367-6832</a> for guidance.
            </p>
          </div>
        </section>

        {/* Bilingual Services */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Bilingual Services for Tulsa&apos;s Diverse Communities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tulsa&apos;s immigrant community is vibrant and diverse. At Just Legal Solutions, we offer <strong>bilingual notary
                  services</strong> to serve our Spanish-speaking clients with appointment scheduling and clear explanations of the
                  notarization process.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-4">
                  <p className="text-blue-800 font-semibold">¿Habla español?</p>
                  <p className="text-blue-700 text-sm mt-1">
                    Llámenos al <a href="tel:+15393676832" className="font-bold hover:underline">(539) 367-6832</a> para programar su cita de notarización.
                  </p>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Communities We Serve</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Hispanic/Latino', 'Asian', 'Middle Eastern', 'African', 'European', 'All cultures welcome'].map((community) => (
                    <div key={community} className="flex items-center gap-2 text-gray-700 text-sm">
                      <Users className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                      <span>{community}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  Mobile Notary Service Areas
                </h3>
                <p className="text-gray-600 mb-4 text-sm">Can&apos;t come to our office? We come to you throughout the Tulsa metro:</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Downtown Tulsa', 'Midtown Tulsa', 'South Tulsa', 'East Tulsa',
                    'Broken Arrow', 'Jenks', 'Bixby', 'Owasso',
                    'Sand Springs', 'Sapulpa', 'Glenpool', 'Claremore'
                  ].map((area) => (
                    <div key={area} className="flex items-center gap-2 text-gray-700 text-sm py-1">
                      <MapPin className="w-3 h-3 text-blue-500 flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
                <a href="tel:+15393676832" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                  <Phone className="w-4 h-4" />
                  Request Mobile Notary
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Scheduling Process */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How to Schedule Your Notarization</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Immigration Notary FAQ</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Common questions about immigration document notarization in Tulsa, Oklahoma.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to Notarize Your Immigration Documents?</h2>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Just Legal Solutions provides professional, USCIS-compliant notarization for all your immigration documents.
                Bilingual services available. Mobile notary throughout Tulsa metro.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Same-day appointments available',
                  'Oklahoma regulated fees — $5 per act maximum',
                  'Mobile notary at your home, office, or attorney',
                  'Bilingual Spanish services',
                  'Compliant with USCIS notarization standards'
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-blue-100">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Contact Us Today</h3>
              <div className="space-y-4">
                <a href="tel:+15393676832" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
                  <Phone className="w-5 h-5" />
                  (539) 367-6832
                </a>
                <a href="mailto:info@JustLegalSolutions.org" className="w-full inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-medium border border-white/30 hover:bg-white/20 transition-all">
                  <Mail className="w-5 h-5" />
                  info@JustLegalSolutions.org
                </a>
              </div>
              <div className="mt-6 text-sm text-blue-200">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>564 E 138th Pl, Glenpool, OK 74033</span>
                </div>
                <p>Mon–Fri: 8 AM – 6 PM | Sat: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Notary Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Mobile Notary', href: '/mobile-notary', desc: 'Notary at your location' },
              { title: 'Hospital Notary', href: '/hospital-notary', desc: '24/7 bedside notarization' },
              { title: 'Apostille Services', href: '/apostille', desc: 'International authentication' },
              { title: 'Notary FAQs', href: '/notary-faqs', desc: 'Oklahoma notary questions' },
            ].map((service) => (
              <Link key={service.href} href={service.href} className="bg-white rounded-xl p-4 border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all group">
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                  {service.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Need legal immigration advice? Visit the <a href="https://www.uscis.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USCIS website</a> or find a licensed immigration attorney through the <a href="https://www.ailalawyer.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">American Immigration Lawyers Association</a>.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
