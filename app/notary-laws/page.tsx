import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';
import AIVoiceSupremacy from '../../components/ui/ai-voice-supremacy';
import {
  Phone, Mail, Clock, Shield, MapPin, FileText, Scale, Users,
  CheckCircle, HelpCircle, DollarSign, Award, Star, Briefcase,
  Home, Car, Monitor, Globe, Heart, Lock, Gavel, Building2,
  AlertTriangle, CreditCard, Calendar, Zap, BookOpen, ExternalLink
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/notary-laws';

export const metadata: Metadata = {
  title: 'Oklahoma Notary Laws & Requirements 2026 | Complete Guide',
  description: 'Complete guide to Oklahoma notary laws: fees, bond requirements, background checks, remote notarization, ID requirements, and what can be notarized. Verified against official sources.',
  keywords: 'Oklahoma notary laws, Oklahoma notary requirements, notary fees Oklahoma, notary bond Oklahoma, RON Oklahoma, remote notarization Oklahoma, become notary Oklahoma, notary commission Oklahoma',
  authors: [{ name: 'Just Legal Solutions Team' }],
  openGraph: {
    title: 'Oklahoma Notary Laws & Requirements 2026 | Complete Guide',
    description: 'Complete guide to Oklahoma notary laws: fees, bond requirements, background checks, remote notarization, ID requirements, and what can be notarized.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    images: [{ url: 'https://justlegalsolutions.org/images/hero.webp', width: 1200, height: 630, alt: 'Oklahoma Notary Laws Guide 2026' }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oklahoma Notary Laws & Requirements 2026 | Complete Guide',
    description: 'Everything you need to know about Oklahoma notary laws, requirements, and fees.',
    images: ['https://justlegalsolutions.org/images/hero.webp'],
    creator: '@ServeOK',
    site: '@ServeOK',
  },
  robots: 'index, follow',
  alternates: { canonical: canonicalUrl },
  other: {
    'article:author': 'Just Legal Solutions Team',
    'article:published_time': '2026-03-22',
    'article:modified_time': '2026-03-22',
    'ai-content-type': 'guide',
    'ai-summary': 'Oklahoma notary law guide: Notary fees capped at $5/act traditional (49 O.S. § 5), $25/act RON (49 O.S. § 209). Requirements: $10,000 surety bond (49 O.S. § 2), background check through OSBI, journal required for RON. Commission term: 4 years. Must be 18+, U.S. citizen, able to read/write English (49 O.S. § 1). Application: $50 new, $45 renewal. RON authorized since 2019 (49 O.S. § 201 et seq.).',
    'ai-key-facts': 'Oklahoma notary fees: $5 traditional, $25 RON max per act. $10,000 bond required. Background check via OSBI $50. 4-year commission. Application $50 new/$45 renewal. RON authorized 2019. Absentee ballot affidavits free by law.',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Oklahoma Notary Laws & Requirements 2026: Complete Guide",
  "description": "Complete guide to Oklahoma notary laws: fees, bond requirements, background checks, remote notarization, ID requirements, and what can be notarized.",
  "author": { "@type": "Organization", "name": "Just Legal Solutions", "url": "https://justlegalsolutions.org" },
  "publisher": { "@type": "Organization", "name": "Just Legal Solutions", "url": "https://justlegalsolutions.org", "logo": { "@type": "ImageObject", "url": "https://justlegalsolutions.org/images/jls-logo.webp" } },
  "datePublished": "2026-03-22",
  "dateModified": "2026-03-22",
  "url": canonicalUrl,
  "mainEntityOfPage": canonicalUrl
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://justlegalsolutions.org/" },
    { "@type": "ListItem", "position": 2, "name": "Notary Services", "item": "https://justlegalsolutions.org/notary" },
    { "@type": "ListItem", "position": 3, "name": "Oklahoma Notary Laws", "item": canonicalUrl }
  ]
};

const tocItems = [
  { id: 'requirements', label: 'Current Requirements', icon: Shield },
  { id: 'fees', label: 'Notary Fees', icon: DollarSign },
  { id: 'documents', label: 'What Can Be Notarized', icon: FileText },
  { id: 'id', label: 'ID Requirements', icon: CreditCard },
  { id: 'ron', label: 'Remote Online Notarization', icon: Monitor },
  { id: 'becoming', label: 'Becoming a Notary', icon: Award },
  { id: 'resources', label: 'Resources & Links', icon: ExternalLink },
];

export default function NotaryLawsPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-indigo-200" />
                <span className="text-indigo-200 text-sm font-medium">Verified Against Official Sources — Updated March 2026</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Oklahoma Notary Laws &{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Requirements Guide</span>
              </h1>

              <p className="text-xl text-indigo-100 mb-8 max-w-2xl">
                Everything you need to know about getting documents notarized in the Sooner State — current requirements, fee schedules, ID rules, RON, and how to become a notary.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#requirements" className="inline-flex items-center gap-2 bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition shadow-lg">
                  <BookOpen className="w-5 h-5" />
                  Read the Guide
                </a>
                <Link href="/notary" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500 transition border border-indigo-500">
                  <Gavel className="w-5 h-5" />
                  Notary Services
                </Link>
              </div>
            </div>

            <div className="flex-1 max-w-sm">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Traditional Fee', value: '$5/act max' },
                    { label: 'RON Fee', value: '$25/act max' },
                    { label: 'Surety Bond', value: '$10,000' },
                    { label: 'Commission Term', value: '4 years' },
                    { label: 'Background Check', value: 'Required' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3">
                      <span className="text-indigo-200 text-sm">{item.label}</span>
                      <span className="text-white font-bold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-3 scrollbar-hide">
            {tocItems.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 px-2.5 py-2 sm:px-4 rounded-full whitespace-nowrap text-sm font-medium transition flex-shrink-0 bg-indigo-50 text-indigo-600 hover:opacity-80">
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <main className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notary Laws Don&apos;t Have to Be Boring</h2>
            <p className="text-lg text-gray-700 mb-4">
              Look, we get it. Legal stuff can be dry. But understanding Oklahoma notary laws matters — whether you&apos;re getting a document notarized, thinking about becoming a notary, or just curious about the process.
            </p>
            <p className="text-gray-700">
              This guide breaks down everything you need to know about notary services in Oklahoma, including current requirements, fee schedules, and what you can expect. We&apos;ll keep it conversational, skip the legalese, and focus on what actually matters to you.
            </p>
          </section>

          {/* Current Requirements */}
          <section id="requirements" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-blue-600 text-white"><Shield className="w-6 h-6" /></div>
              <h2 className="text-3xl font-bold text-gray-900">Current Oklahoma Notary Requirements (2026)</h2>
            </div>

            <p className="text-gray-700 mb-8">Oklahoma notary laws include security measures to protect the public and prevent fraud. Here are the current requirements that all Oklahoma notaries must follow:</p>

            <div className="space-y-6">
              {/* Background Checks */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Background Checks Required</h3>
                <p className="text-gray-700 mb-3">All new and renewing notaries must undergo a national criminal history record check through the Oklahoma State Bureau of Investigation (OSBI).</p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-800"><strong>What it means for you:</strong> Your notary has been fingerprinted and background-checked. Extra peace of mind when handing over sensitive documents.</p>
                  <p className="text-sm text-blue-700 mt-2"><strong>Cost:</strong> $50 (paid by notary applicant, not you) | <strong>Processing time:</strong> 2-4 weeks</p>
                </div>
              </div>

              {/* Surety Bond */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. $10,000 Surety Bond</h3>
                <p className="text-gray-700 mb-3">All Oklahoma notaries must maintain a $10,000 surety bond. The bond protects YOU, not the notary.</p>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-800"><strong>Important:</strong> If a member of the public files a claim against a notary&apos;s bond, the bonding company may sue the notary to recoup funds. That&apos;s why E&O insurance is also recommended for notaries.</p>
                  <p className="text-sm text-green-700 mt-2"><strong>Source:</strong> 49 O.S. § 2 (Oath, signature, bond and seal)</p>
                </div>
              </div>

              {/* Journal */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Notary Journal Requirements</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-amber-50 rounded-lg p-4">
                    <p className="font-semibold text-amber-800 mb-1">Traditional Notarizations</p>
                    <p className="text-sm text-amber-700">Journal is <strong>recommended but not required</strong> by Oklahoma law</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-purple-800 mb-1">RON Notarizations</p>
                    <p className="text-sm text-purple-700">Journal is <strong>required</strong> and must be tamper-evident and electronic</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">What goes in a journal: Date and type of act, description of document, signer information, type of ID provided, location, and fee charged.</p>
              </div>

              {/* Application Fees */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Application & Filing Fees</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Fee Type</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr><td className="px-4 py-3 text-sm text-gray-700">New application fee</td><td className="px-4 py-3 text-sm font-semibold">$50</td></tr>
                      <tr className="bg-gray-50"><td className="px-4 py-3 text-sm text-gray-700">Renewal fee</td><td className="px-4 py-3 text-sm font-semibold">$45</td></tr>
                      <tr><td className="px-4 py-3 text-sm text-gray-700">Bond filing fee</td><td className="px-4 py-3 text-sm font-semibold">$25</td></tr>
                      <tr className="bg-gray-50"><td className="px-4 py-3 text-sm text-gray-700">Background check</td><td className="px-4 py-3 text-sm font-semibold">$50</td></tr>
                      <tr><td className="px-4 py-3 text-sm text-gray-700">Expedited service (optional)</td><td className="px-4 py-3 text-sm font-semibold">$50</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-3">These are costs notaries pay to the state — not charged to you.</p>
              </div>

              {/* Eligibility */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. Standard Eligibility Requirements</h3>
                <ul className="space-y-2">
                  {['Be at least 18 years old', 'Be a U.S. citizen', 'Be an Oklahoma resident OR a non-resident employed in Oklahoma', 'Be able to read and write English', 'Have no felony convictions'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mt-3">Source: 49 O.S. § 1 (Appointment) &amp; § 1.1 (Application requirements)</p>
              </div>
            </div>
          </section>

          {/* Notary Fees */}
          <section id="fees" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-green-600 text-white"><DollarSign className="w-6 h-6" /></div>
              <h2 className="text-3xl font-bold text-gray-900">Notary Fees in Oklahoma</h2>
            </div>

            <p className="text-gray-700 mb-8">Oklahoma law sets maximum fees that notaries can charge. Here&apos;s the breakdown from 49 O.S. § 5:</p>

            {/* Traditional fees */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Notarization Fees (In-Office or Mobile)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Notarial Act</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Maximum Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Taking an acknowledgment', '$5.00'],
                      ['Administering an oath or affirmation', '$5.00'],
                      ['Taking a verification upon oath/affirmation', '$5.00'],
                      ['Witnessing or attesting a signature', '$5.00'],
                      ['Noting a protest of negotiable instrument', '$5.00'],
                      ['Certifying or attesting a copy', '$5.00'],
                    ].map(([act, fee], i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                        <td className="px-4 py-3 text-sm text-gray-700">{act}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-green-700">{fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-3"><strong>Important:</strong> These are MAXIMUMS. Notaries can charge less (or nothing) if they choose.</p>
            </div>

            {/* RON fees */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Remote Online Notarization (RON) Fees</h3>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-purple-800"><strong>Any RON notarial act: $25.00 maximum</strong> (49 O.S. § 209)</p>
                <p className="text-sm text-purple-700 mt-1">RON costs more because of the technology platform, recording requirements, and added security measures.</p>
              </div>
            </div>

            {/* Travel fees */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Fees (Mobile Notary Only)</h3>
              <p className="text-gray-700 mb-3"><strong>Not capped by law.</strong> Travel fees are separate from notarial act fees and are negotiated between you and the notary.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-blue-500">•</span>Distance from notary&apos;s location</li>
                <li className="flex items-start gap-2"><span className="text-blue-500">•</span>Urgency (same-day, after-hours, holidays)</li>
                <li className="flex items-start gap-2"><span className="text-blue-500">•</span>Number of documents/signers</li>
                <li className="flex items-start gap-2"><span className="text-blue-500">•</span>Location type (hospital, jail, remote area)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3"><strong>Always ask for a quote upfront</strong> before scheduling mobile service. Call <a href="tel:5393676832" className="text-blue-600 font-semibold">(539) 367-6832</a> for a transparent quote.</p>
            </div>

            {/* Free by law */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-900 mb-2">What&apos;s FREE by Law</h3>
              <p className="text-green-800"><strong>Absentee ballot affidavits</strong> — Oklahoma notaries CANNOT charge for notarizing official absentee ballot affidavits. It&apos;s free by law (49 O.S. § 5).</p>
            </div>
          </section>

          {/* What Can Be Notarized */}
          <section id="documents" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-red-600 text-white"><FileText className="w-6 h-6" /></div>
              <h2 className="text-3xl font-bold text-gray-900">Documents We Can (and Can&apos;t) Notarize</h2>
            </div>

            <p className="text-gray-700 mb-8">Notaries don&apos;t verify the CONTENT of your document — they verify YOUR IDENTITY and that you&apos;re signing willingly.</p>

            {/* Can notarize */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-green-700 mb-4">✅ Common Documents We CAN Notarize</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Legal & Estate Planning', items: ['Wills and testaments', 'Living wills', 'Powers of attorney (medical & financial)', 'Trust documents', 'Affidavits of common law marriage'] },
                  { title: 'Real Estate & Property', items: ['Mortgage documents', 'Refinance packages', 'Deeds (warranty, quitclaim)', 'Title transfers', 'Lease agreements', 'Home equity loan documents'] },
                  { title: 'Business Documents', items: ['Contracts and agreements', 'Corporate resolutions', 'Partnership agreements', 'Articles of incorporation', 'Business licenses', 'NDAs'] },
                  { title: 'Personal & Court', items: ['Vehicle title transfers', 'Bills of sale', 'Permission to travel with minor', 'Name change affidavits', 'Court affidavits', 'Depositions', 'Government applications'] },
                ].map((cat, idx) => (
                  <div key={idx} className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">{cat.title}</h4>
                    <ul className="space-y-1">
                      {cat.items.map((item, i) => (
                        <li key={i} className="text-sm text-green-700 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Cannot notarize */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-red-200 mb-6">
              <h3 className="text-xl font-bold text-red-700 mb-4">❌ Documents We CANNOT Notarize</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Federal Documents', items: ['Birth certificates', 'Death certificates', 'Marriage certificates', 'Passports', 'Immigration forms (I-9, etc.)'] },
                  { title: 'Academic & Other', items: ['University diplomas/degrees', 'Transcripts', 'Documents already signed', 'Incomplete documents', 'Documents without proper ID', 'Notary\'s own signature'] },
                ].map((cat, idx) => (
                  <div key={idx} className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">{cat.title}</h4>
                    <ul className="space-y-1">
                      {cat.items.map((item, i) => (
                        <li key={i} className="text-sm text-red-700 flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">✕</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Special cases */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-amber-900 mb-3">⚠️ Special Cases</h3>
              <div className="space-y-3 text-sm text-amber-800">
                <p><strong>Photocopies:</strong> Notaries can certify a photocopy is a true copy of an original you present, but cannot certify copies of vital records.</p>
                <p><strong>Electronic Documents:</strong> Yes! Electronic documents can be notarized, especially through RON. The electronic signature and seal have the same legal weight as ink and paper.</p>
                <p><strong>Documents from Other States:</strong> Oklahoma notaries can notarize documents used in other states. The notarization is valid nationwide.</p>
              </div>
            </div>
          </section>

          {/* ID Requirements */}
          <section id="id" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-purple-600 text-white"><CreditCard className="w-6 h-6" /></div>
              <h2 className="text-3xl font-bold text-gray-900">ID Requirements for Notarization</h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-green-700 mb-4">✅ Acceptable Forms of ID (Must Have ONE)</h3>
              <ul className="space-y-2 mb-4">
                {[
                  'Driver\'s license (any U.S. state or Canadian province)',
                  'State ID card (any U.S. state)',
                  'U.S. Passport (current or expired within last 5 years)',
                  'U.S. Military ID',
                  'Foreign passport (if stamped by USCIS)',
                  'Tribal ID card (federally recognized tribe)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700"><strong>ID must be:</strong> Current (or passport expired &lt;5 years), government-issued, include photo, signature, and physical description.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-red-100 mb-6">
              <h3 className="text-xl font-bold text-red-700 mb-4">❌ Not Acceptable</h3>
              <div className="flex flex-wrap gap-2">
                {['Social Security cards', 'Credit/debit cards', 'Birth certificates', 'Student IDs (unless government-issued)', 'Temporary paper licenses (without photo)', 'Photocopies of IDs', 'Expired IDs (except passports <5 years)'].map((item, i) => (
                  <span key={i} className="bg-red-50 text-red-700 text-sm px-3 py-1.5 rounded-full border border-red-200">{item}</span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What If I Don&apos;t Have ID?</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Option 1: Credible Witness</h4>
                  <p className="text-sm text-blue-700">Bring someone who has valid ID, is personally known to the notary, and is NOT named in the document.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Option 2: Get ID</h4>
                  <p className="text-sm text-green-700">Visit Oklahoma DPS for a state ID. It&apos;s quick, inexpensive, and solves this problem permanently.</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Option 3: Personally Known</h4>
                  <p className="text-sm text-purple-700">If the notary personally knows you from previous interactions, ID may be waived (rare).</p>
                </div>
              </div>
            </div>
          </section>

          {/* RON Section */}
          <section id="ron" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-indigo-600 text-white"><Monitor className="w-6 h-6" /></div>
              <h2 className="text-3xl font-bold text-gray-900">Remote Online Notarization in Oklahoma</h2>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              <strong>Yes, you can get notarized without leaving your house.</strong> Oklahoma has authorized Remote Online Notarization (RON) since 2019 under the Remote Online Notary Act (49 O.S. § 201 et seq.), and it&apos;s fully integrated into state law.
            </p>

            {/* How RON Works */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">How RON Works</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Upload Your Document', desc: 'Upload your unsigned document to the notary\'s secure platform. The system creates a tamper-evident electronic copy.' },
                  { step: '2', title: 'Schedule Your Appointment', desc: 'Book a time that works for you. Many RON notaries offer 24/7 scheduling.' },
                  { step: '3', title: 'Identity Verification', desc: 'Knowledge-based authentication (KBA), credential analysis (scan your ID), and biometric verification before the video call.' },
                  { step: '4', title: 'Video Call with Notary', desc: 'Connect via secure, encrypted video. The notary confirms identity, verifies willingness, and watches you sign electronically.' },
                  { step: '5', title: 'Receive Your Document', desc: 'Download your notarized document immediately with electronic signature, seal, digital certificate, and recorded session link.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">{item.step}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison table */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">RON vs. Traditional Notarization</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Feature</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Traditional</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Remote Online (RON)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Maximum fee', '$5 per act', '$25 per act'],
                      ['Location', 'In-person', 'Anywhere in the world'],
                      ['ID verification', 'Physical ID shown', 'Digital ID + KBA questions'],
                      ['Record keeping', 'Journal entry', 'Journal + audio-video recording'],
                      ['Document format', 'Paper', 'Electronic (can be printed)'],
                      ['Availability', 'Business hours (usually)', 'Often 24/7'],
                      ['Best for', 'Local, simple documents', 'Out-of-state, urgent, complex'],
                    ].map(([feature, trad, ron], i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                        <td className="px-4 py-3 text-sm font-semibold text-gray-700">{feature}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{trad}</td>
                        <td className="px-4 py-3 text-sm text-indigo-700 font-medium">{ron}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Security */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-indigo-900 mb-3">🔒 RON Security & Privacy</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {['Encrypted video transmission', 'Tamper-evident technology', 'Multi-factor identity verification', 'Audio-video recording stored 10 years', 'Electronic journals with audit trails', 'Access only via court order or official investigation'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span className="text-sm text-indigo-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Becoming a Notary */}
          <section id="becoming" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-amber-600 text-white"><Award className="w-6 h-6" /></div>
              <h2 className="text-3xl font-bold text-gray-900">How to Become an Oklahoma Notary Public</h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Step-by-Step Process</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Submit Application', desc: 'Complete the Oklahoma Notary Public Application online. Pay $50 ($45 for renewals).' },
                  { step: '2', title: 'Background Check', desc: 'Submit fingerprints to OSBI, pay $50 for national criminal history check. Processing: 2-4 weeks.' },
                  { step: '3', title: 'Receive Commission Approval', desc: 'Get your commission certificate. Your 60-day filing window begins.' },
                  { step: '4', title: 'Purchase Bond & Seal', desc: 'Buy a $10,000 surety bond (~$50 for 4 years) and order your official notary seal.' },
                  { step: '5', title: 'Take Your Oaths', desc: 'Have an existing notary administer your oath of office and loyalty oath, and notarize your bond form.' },
                  { step: '6', title: 'File with Secretary of State', desc: 'Upload completed bond form, oaths, and seal impression. Pay $25 bond filing fee within 60 days.' },
                  { step: '7', title: 'Start Notarizing', desc: 'After Secretary of State approval, you\'re officially commissioned to perform notarial acts.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">{item.step}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost table */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Total Cost to Become a Notary</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gradient-to-r from-amber-600 to-amber-700 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Item</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Application fee', '$50'],
                      ['Background check', '$50'],
                      ['Surety bond (4 years)', '~$50'],
                      ['Notary seal', '~$35'],
                      ['Bond filing fee', '$25'],
                      ['Optional: E&O insurance', '~$50-100'],
                      ['Optional: Journal', '~$20-40'],
                    ].map(([item, cost], i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                        <td className="px-4 py-3 text-sm text-gray-700">{item}</td>
                        <td className="px-4 py-3 text-sm font-semibold">{cost}</td>
                      </tr>
                    ))}
                    <tr className="bg-amber-50">
                      <td className="px-4 py-3 text-sm font-bold text-amber-900">Total</td>
                      <td className="px-4 py-3 text-sm font-bold text-amber-900">~$220-$320</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-amber-900 mb-2">Commission Details</h3>
              <ul className="space-y-1 text-sm text-amber-800">
                <li><strong>Term length:</strong> 4 years</li>
                <li><strong>Renewal:</strong> Must reapply (same process as new application)</li>
                <li><strong>Renewal window:</strong> Up to 6 weeks before expiration</li>
                <li><strong>Late renewal:</strong> Must apply as new applicant ($50 vs. $45)</li>
              </ul>
            </div>
          </section>

          {/* Resources */}
          <section id="resources" className="mb-16 scroll-mt-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-teal-600 text-white"><ExternalLink className="w-6 h-6" /></div>
              <h2 className="text-3xl font-bold text-gray-900">Resources & Links</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Official Oklahoma Resources</h3>
                <ul className="space-y-3">
                  <li><a href="https://www.sos.ok.gov/notary" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2"><ExternalLink className="w-4 h-4" />Oklahoma Secretary of State — Notary Division</a></li>
                  <li><a href="https://www.sos.ok.gov/notary/filing/Default.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2"><ExternalLink className="w-4 h-4" />Notary Application Portal</a></li>
                  <li><a href="https://www.sos.ok.gov/notary/verify.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2"><ExternalLink className="w-4 h-4" />Verify a Notary Commission</a></li>
                  <li><a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST49" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2"><ExternalLink className="w-4 h-4" />Oklahoma Notary Statutes (Title 49)</a></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">National Resources</h3>
                <ul className="space-y-3">
                  <li><a href="https://www.nationalnotary.org/oklahoma" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline flex items-center gap-2"><ExternalLink className="w-4 h-4" />National Notary Association — Oklahoma</a></li>
                  <li><a href="https://www.oklahomanotary.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2"><ExternalLink className="w-4 h-4" />American Association of Notaries — Oklahoma</a></li>
                </ul>
                <h3 className="font-bold text-gray-900 mt-6 mb-4">Our Notary Services</h3>
                <ul className="space-y-3">
                  <li><Link href="/notary" className="text-blue-600 hover:underline">Notary Services — Overview & Booking</Link></li>
                  <li><Link href="/notary-faqs" className="text-blue-600 hover:underline">Notary FAQ — 50+ Questions Answered</Link></li>
                  <li><Link href="/pricing#notary" className="text-blue-600 hover:underline">Notary Pricing</Link></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="bg-gray-100 rounded-xl p-6 text-center">
            <p className="text-sm text-gray-600 italic mb-2">
              <strong>This guide is for informational purposes only and does not constitute legal advice.</strong> Notary laws can change, and specific situations may have unique requirements. For legal questions about your documents, consult an attorney.
            </p>
            <p className="text-sm text-gray-500 italic">
              Just Legal Solutions is a licensed Oklahoma Process Server and employs commissioned notaries public. We are not attorneys and do not provide legal advice.
            </p>
            <p className="text-xs text-gray-400 mt-3">
              Last updated: March 22, 2026 | Sources: Oklahoma Secretary of State, 49 O.S. § 5, National Notary Association, American Association of Notaries
            </p>
          </div>
        </div>
      </main>

      <AIVoiceSupremacy
        businessName="Just Legal Solutions"
        location="Oklahoma"
        services={['Notary Services', 'Mobile Notary', 'Remote Online Notarization', 'Process Serving']}
        phone="(539) 367-6832"
        skipSchema={true}
      />
      <Footer />
    </>
  );
}
