import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';
import {
  Shield,
  Clock,
  FileText,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Building2,
  Users,
  Lock,
  MapPin,
  AlertTriangle,
  ClipboardList,
  Scale,
  BookOpen,
  DollarSign,
  Fingerprint,
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/jail-notary';

export const metadata: Metadata = {
  title: 'Jail & Prison Notary Services Oklahoma | Correctional Facility Notary',
  description:
    'Professional jail and prison notary services across Oklahoma. Power of attorney, parental consent, affidavits, and real estate documents notarized at David L. Moss, DOC facilities statewide. Call (539) 367-6832.',
  keywords: [
    'jail notary Oklahoma',
    'prison notary Oklahoma',
    'correctional facility notary',
    'jail notary Tulsa',
    'notary David L. Moss',
    'inmate notary service',
    'Oklahoma DOC notary',
    'power of attorney jail notary',
    'incarcerated notary services',
    'prison document notarization Oklahoma',
  ],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'Jail & Prison Notary Services Oklahoma',
    description: 'Professional notarization at Oklahoma correctional facilities. DOC-experienced notaries for power of attorney, real estate, affidavits, and more.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jail & Prison Notary Services | Oklahoma',
    description: 'DOC-experienced notaries serving all Oklahoma correctional facilities. Call (539) 367-6832.',
  },
  other: {
    'ai-content-type': 'service',
    'ai-summary':
      'Jail and prison notary services in Oklahoma. Serves David L. Moss Criminal Justice Center, Turley Correctional Center, and all Oklahoma DOC facilities statewide. Handles power of attorney, parental consent, affidavits, real estate documents, and immigration forms. Base fee $150–$300 per visit plus $10–$25 per signature. Call (539) 367-6832.',
  },
};

const heroHighlights = [
  { icon: Shield, title: 'DOC-Experienced', desc: 'Trained in Oklahoma corrections security protocols' },
  { icon: Clock, title: 'Advance Scheduling', desc: 'We handle all facility clearance and coordination' },
  { icon: Lock, title: 'Secure & Confidential', desc: 'Professional discretion in sensitive environments' },
];

const documentTypes = [
  {
    icon: Scale,
    title: 'Power of Attorney',
    desc: 'Durable, financial, and limited powers of attorney. Allow trusted individuals to handle financial matters, pay bills, and make decisions during incarceration.',
  },
  {
    icon: Users,
    title: 'Parental Consent Forms',
    desc: 'Childcare decisions, school enrollment, medical treatment authorizations, travel permissions, temporary guardianship, and custody-related affidavits.',
  },
  {
    icon: FileText,
    title: 'Affidavits & Sworn Statements',
    desc: 'Court filings, witness statements, financial affidavits, and legal declarations requiring notarization for admissibility in litigation or proceedings.',
  },
  {
    icon: Building2,
    title: 'Real Estate Documents',
    desc: 'Quitclaim deeds, mortgage documents, forbearance agreements, and loan modifications. Time-sensitive property matters that can\'t wait for release dates.',
  },
  {
    icon: MapPin,
    title: 'Immigration Forms',
    desc: 'Affidavits of support, visa-related documents, and immigration petitions handled with discretion and accuracy for federal proceedings.',
  },
  {
    icon: ClipboardList,
    title: 'Business & Financial Documents',
    desc: 'Loan applications, business formation documents, contracts, and financial agreements requiring an incarcerated party\'s signature.',
  },
];

const tulsaFacilities = [
  { name: 'David L. Moss Criminal Justice Center', detail: '300 N. Denver Avenue, Tulsa, OK 74103 — 1,700+ capacity, primary Tulsa County booking facility' },
  { name: 'Turley Correctional Center', detail: 'Tulsa, Oklahoma — State-operated minimum security facility' },
  { name: 'Community Corrections Center', detail: '303 W. 1st Street, Tulsa, OK 74103 — Work release and pre-release programs' },
];

const stateFacilities = [
  { category: 'Maximum Security', items: ['Oklahoma State Penitentiary (McAlester)', 'Dick Conner Correctional Center (Hominy)', 'James Crabtree Correctional Center (Helena)', 'Jess Dunn Correctional Center (Taft)', 'Mabel Bassett Correctional Center (McLoud)', 'North Fork Correctional Center (Sayre)'] },
  { category: 'Medium Security', items: ['Cimarron Correctional Facility (Cushing)', 'Davis Correctional Facility (Holdenville)', 'Eddie Warrior Correctional Center (Taft)', 'Great Plains Correctional Facility (Hinton)', 'Joseph Harp Correctional Center (Lexington)', 'Lexington Assessment & Reception Center', 'Mack Alford Correctional Center (Stringtown)', 'Northeast Oklahoma Correctional Center (Vinita)', 'Oklahoma State Reformatory (Granite)'] },
  { category: 'Minimum Security & Work Centers', items: ['Enid Community Corrections Center', 'Lawton Community Corrections Center', 'Union City Community Corrections Center', 'Various community work centers statewide'] },
  { category: 'Federal Facilities', items: ['Federal Correctional Institution, El Reno', 'Federal Transfer Center, Oklahoma City'] },
];

const faqs = [
  { question: 'How long does the visitor clearance process take?', answer: 'For Oklahoma DOC facilities, the standard visitor approval process can take up to 90 days. However, notary visits may qualify for expedited professional visitor status. County jails like David L. Moss typically have faster clearance — often 24–72 hours for professional visitors.' },
  { question: 'Can you notarize if the inmate is in disciplinary segregation?', answer: 'Inmates in disciplinary segregation have restricted visiting privileges. Attorney and clergy visits are typically permitted, but notary visits may be denied. We recommend contacting facility classification to verify privileges before scheduling.' },
  { question: 'What forms of ID do you accept from inmates?', answer: 'We accept the official Oklahoma DOC inmate ID card as primary identification (photo, ODOC number, name, DOB). For county jails, we work with booking photos and facility verification procedures.' },
  { question: 'Can family members be present during notarization?', answer: 'Generally, no. The signer must appear before the notary without other parties present who might exert influence. Family members may wait in the lobby but typically cannot participate.' },
  { question: 'How do I get the documents to the inmate?', answer: 'Mail or deliver documents to the inmate through the facility\'s standard mail procedures in advance. The notary should not bring unsigned documents except the specific pages requiring notarization.' },
  { question: 'What if the facility denies my notary visit?', answer: 'We\'ll help explore alternatives: rescheduling, coordinating through the inmate\'s case manager or attorney, exploring remote options for outside parties, or requesting temporary furlough for notarization.' },
  { question: 'Do you provide witnesses for documents requiring them?', answer: 'No — notaries cannot serve as witnesses on documents they notarize. If witnesses are needed, they must also complete facility clearance procedures.' },
  { question: 'Can you notarize for inmates awaiting transfer?', answer: 'Complete notarizations before transfer when possible. Tracking inmates during transport is difficult. If needed during transfer, coordinate with both sending and receiving facilities.' },
  { question: 'How far in advance should I schedule?', answer: 'For Oklahoma DOC facilities, schedule 2–3 weeks in advance when possible. For county jails, 3–5 business days is typically sufficient. Expedited service is available for urgent matters.' },
  { question: 'What happens if the inmate refuses to sign?', answer: 'Notarization is always voluntary. If an inmate refuses to sign, fees for travel and scheduling time already expended are not refunded. Confirm willingness before scheduling.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://justlegalsolutions.org/' },
    { '@type': 'ListItem', position: 2, name: 'Notary Services', item: 'https://justlegalsolutions.org/notary' },
    { '@type': 'ListItem', position: 3, name: 'Jail & Prison Notary', item: canonicalUrl },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Jail & Prison Notary Services',
  provider: { '@type': 'Organization', name: 'Just Legal Solutions', telephone: '(539) 367-6832' },
  areaServed: 'Oklahoma',
  serviceType: 'Correctional facility notarization',
};

export default function JailNotaryPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <nav className="text-sm mb-4 text-indigo-200" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/notary" className="hover:text-white transition-colors">Notary</Link>
                <span className="mx-2">/</span>
                <span className="text-white font-medium">Jail &amp; Prison Notary</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6 text-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                Correctional Facility Notary Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Jail &amp; Prison Notary
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Services in Oklahoma</span>
              </h1>
              <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl">
                When a loved one is incarcerated, important legal matters don&apos;t stop. Our DOC-experienced notaries handle power of attorney, parental consent, real estate, and more at correctional facilities statewide.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:5393676832" className="flex items-center gap-2 bg-white text-indigo-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-50 transition">
                  <Phone className="w-5 h-5" /> Call (539) 367-6832
                </a>
                <Link href="/contact" className="flex items-center gap-2 bg-transparent border border-white/60 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
                  <Mail className="w-5 h-5" /> Schedule a Visit
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="grid sm:grid-cols-3 gap-4">
                {heroHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/10">
                      <Icon className="w-8 h-8 text-purple-200 mb-3" />
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
        {/* What Is Jail Notary Service */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-4 text-sm font-medium">
                  <BookOpen className="w-4 h-4" />
                  Specialized Service
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Is Jail Notary Service?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Jail and prison notary services involve a commissioned notary public traveling to correctional facilities to witness signatures and administer oaths for incarcerated individuals. Unlike standard mobile notarizations, facility-based notarizations require specialized knowledge of Department of Corrections procedures, security protocols, and unique identification verification methods.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our notaries are experienced with Oklahoma&apos;s correctional system. We understand the specific requirements for both county jails and state prisons — from David L. Moss Criminal Justice Center in Tulsa to Eddie Warrior Correctional Center in Taft.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                <div className="flex items-center gap-3 mb-6">
                  <Fingerprint className="w-8 h-8 text-indigo-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Inmate ID Verification</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All Oklahoma DOC inmates are issued official ID cards with a color photograph, full legal name, ODOC number, security level, and date of birth. These are accepted as primary identification for notarization.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" /><span>Replacement cards available at facility ($5 fee)</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" /><span>Alternative: Consolidated Record Cards (CRC)</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" /><span>County jails: booking photos + wristband verification</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Documents We Notarize */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-indigo-600 font-semibold uppercase tracking-wide mb-2">Document Types</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Documents We Notarize in Correctional Facilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentTypes.map((doc) => {
                const Icon = doc.icon;
                return (
                  <div key={doc.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700 w-fit mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{doc.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{doc.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DOC Requirements & Security */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-indigo-200 uppercase tracking-wide mb-2">Facility Procedures</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">DOC Requirements &amp; Security Protocols</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur">
                <ClipboardList className="w-8 h-8 text-indigo-200 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Scheduling &amp; Clearance</h3>
                <ul className="space-y-3 text-indigo-100 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-300 mt-0.5 flex-shrink-0" /><span>All visits must be scheduled — no walk-ins</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-300 mt-0.5 flex-shrink-0" /><span>Schedule requests by Wednesday 1 PM for weekend visits</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-300 mt-0.5 flex-shrink-0" /><span>Notary visits may qualify as &quot;special visits&quot; (Mon/Thu)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-300 mt-0.5 flex-shrink-0" /><span>Background check required (up to 90 days standard)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-300 mt-0.5 flex-shrink-0" /><span>County jails have faster clearance (24–72 hours)</span></li>
                </ul>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur">
                <Shield className="w-8 h-8 text-indigo-200 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Security Screening</h3>
                <ul className="space-y-3 text-indigo-100 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-300 mt-0.5 flex-shrink-0" /><span>Metal detector and pat-down screening required</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-300 mt-0.5 flex-shrink-0" /><span>Drug detection canine screening possible</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-300 mt-0.5 flex-shrink-0" /><span>Only ID, car key, and coins permitted</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-300 mt-0.5 flex-shrink-0" /><span>No phones, electronics, bags, or recording devices</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-indigo-300 mt-0.5 flex-shrink-0" /><span>Strict dress code enforced — no revealing clothing</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-amber-500/20 border border-amber-400/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Important Limitation</h4>
                  <p className="text-indigo-100 text-sm leading-relaxed">
                    Oklahoma notaries must ensure signers act of their own free will. If we observe signs of coercion, undue influence, or mental incapacity, we are ethically and legally obligated to refuse notarization. Wills and testamentary documents may be restricted at many facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-indigo-600 font-semibold uppercase tracking-wide mb-2">Transparent Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Jail &amp; Prison Notarization Fees</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our pricing reflects specialized expertise, advance planning, and extended time required for facility visits.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
                <div className="flex items-center gap-2 mb-6">
                  <DollarSign className="w-8 h-8 text-indigo-600" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">$150 – $300<span className="text-base font-normal text-gray-600"> / facility visit</span></p>
                    <p className="text-gray-600 text-sm">Plus $10 – $25 per notarized signature</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm">
                  {[
                    'Advance scheduling and clearance coordination',
                    'Travel to the correctional facility',
                    'Wait time for security screening and processing',
                    'Professional notarization services',
                    'Return trip document delivery (if required)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Factors Affecting Pricing</h3>
                {[
                  { label: 'Facility Location', desc: 'Tulsa-area: base rate. OKC-area: base + mileage. Rural: premium rates for extended travel.' },
                  { label: 'Security Level', desc: 'Minimum/medium: standard rates. Maximum security: premium due to enhanced clearance.' },
                  { label: 'Urgency', desc: 'Standard (5–7 business days): standard rates. Expedited (24–48 hours): premium rates.' },
                  { label: 'Additional Fees', desc: 'After-hours: +$50. Holiday: +$75. Document prep assistance: $50–$100. Return delivery: $75–$150.' },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Facilities We Serve */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-indigo-600 font-semibold uppercase tracking-wide mb-2">Statewide Coverage</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Facilities We Serve</h2>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tulsa-Area Facilities</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {tulsaFacilities.map((f) => (
                  <div key={f.name} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{f.name}</h4>
                        <p className="text-gray-600 text-sm">{f.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {stateFacilities.map((group) => (
                <div key={group.category} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h4 className="font-bold text-gray-900 mb-3">{group.category}</h4>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <ArrowRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-indigo-600 font-semibold uppercase tracking-wide mb-2">Common Questions</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Jail &amp; Prison Notary FAQs</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-gray-50">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Don&apos;t Let Incarceration Delay Critical Legal Matters</h2>
              <p className="text-indigo-100 mb-6">
                Just Legal Solutions provides professional, reliable notary services for Oklahoma correctional facilities. Our experience with DOC procedures ensures your documents are notarized correctly and efficiently.
              </p>
              <div className="space-y-3">
                {['All Oklahoma DOC facilities served', 'County jails and federal facilities', 'Power of attorney, real estate, parental consent', 'Complete scheduling and clearance coordination'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-300 flex-shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
              <h3 className="text-2xl font-semibold mb-4">Schedule Your Facility Visit</h3>
              <p className="text-indigo-100 mb-6">Provide the facility name, inmate details, documents needed, and time sensitivity. We handle all coordination.</p>
              <div className="space-y-4">
                <a href="tel:5393676832" className="flex items-center gap-3 bg-white text-indigo-900 font-semibold px-5 py-3 rounded-xl">
                  <Phone className="w-5 h-5" /> (539) 367-6832
                </a>
                <a href="mailto:info@JustLegalSolutions.org" className="flex items-center gap-3 text-white border border-white/50 px-5 py-3 rounded-xl hover:bg-white/10">
                  <Mail className="w-5 h-5" /> info@JustLegalSolutions.org
                </a>
                <Link href="/hospital-notary" className="flex items-center gap-2 text-indigo-200 font-semibold hover:text-white">
                  Hospital notary services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/mobile-notary" className="flex items-center gap-2 text-indigo-200 font-semibold hover:text-white">
                  Mobile notary services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="text-center text-xs text-gray-500 py-4 bg-gray-50">
        <em>Just Legal Solutions is a commissioned Oklahoma notary public service. We are not attorneys and cannot provide legal advice.</em>
      </p>

      <Footer />
    </>
  );
}
