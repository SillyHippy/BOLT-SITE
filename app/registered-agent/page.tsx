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
  DollarSign,
  Users,
  Globe,
  Lock,
  Bell,
  Briefcase,
  ClipboardList,
  BookOpen,
  Scale,
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/registered-agent';

export const metadata: Metadata = {
  title: 'Oklahoma Registered Agent Service | $99/Year — Just Legal Solutions',
  description:
    'Professional registered agent service for Oklahoma LLCs, corporations, and foreign entities. Same-day document notification, secure portal access, compliance reminders. $99/year flat rate. Call (539) 367-6832.',
  keywords: [
    'registered agent Oklahoma',
    'Oklahoma registered agent service',
    'statutory agent Oklahoma',
    'LLC registered agent Oklahoma',
    'corporation registered agent Oklahoma',
    'change registered agent Oklahoma',
    'foreign entity registered agent Oklahoma',
    'service of process Oklahoma',
    'Oklahoma Secretary of State registered agent',
    'professional registered agent Tulsa',
  ],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'Oklahoma Registered Agent Service | $99/Year',
    description:
      'Reliable registered agent services for Oklahoma businesses. Same-day notifications, secure portal, compliance support.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oklahoma Registered Agent Service | $99/Year',
    description:
      'Professional registered agent for Oklahoma LLCs & corporations. Same-day notifications, $99/year.',
  },
  other: {
    'ai-content-type': 'service',
    'ai-summary':
      'Oklahoma registered agent service at $99/year. Includes physical address, same-day email notification, secure document portal, annual report reminders, and compliance monitoring. Serves LLCs, corporations, foreign entities, LPs, and nonprofits. Oklahoma Statutes Title 18, Section 1022 (corporations) and Section 2010 (LLCs). Call (539) 367-6832.',
  },
};

const heroHighlights = [
  { icon: Clock, title: 'Same-Day Alerts', desc: 'Immediate email notification when documents are received' },
  { icon: Shield, title: 'Compliance Shield', desc: 'Never miss a filing deadline or legal notice' },
  { icon: Lock, title: 'Privacy Protected', desc: 'Keep your personal address off public records' },
];

const faqs = [
  { question: 'Can I be my own registered agent in Oklahoma?', answer: 'Yes, if you have a physical Oklahoma address (not a P.O. box), are at least 18 years old, and are available during regular business hours. However, many owners prefer professional services for privacy, reliability, and convenience.' },
  { question: 'What happens if I don\'t have a registered agent?', answer: 'The Oklahoma Secretary of State may administratively dissolve your company. You could lose your authority to do business in Oklahoma and may be unable to sue or defend yourself in court.' },
  { question: 'How much does it cost to change registered agents?', answer: 'The state filing fee is $25 for domestic entities (LLCs and corporations) by mail, or $35 online. Foreign entities pay $50. These fees are in addition to any registered agent service fees.' },
  { question: 'How long does it take to change registered agents?', answer: 'Online filings are typically processed within 1–2 business days. Mail filings take 7–10 business days. In-person filings take 3–5 business days.' },
  { question: 'Is a registered agent the same as an owner?', answer: 'No. A registered agent is not automatically an owner of the business. These are separate roles, though the same person can serve in both capacities.' },
  { question: 'What is service of process?', answer: 'Service of process is the formal delivery of legal documents notifying a business that it is involved in a lawsuit. This includes summonses, complaints, subpoenas, and court orders.' },
  { question: 'Do I need a registered agent in every state?', answer: 'No. You only need a registered agent in the state where your business is formed and in any states where you are registered to do business as a foreign entity.' },
  { question: 'Can my accountant or attorney be my registered agent?', answer: 'Yes, if they meet Oklahoma requirements and agree. However, many professionals charge significant fees—dedicated registered agent services often provide better value.' },
  { question: 'What types of documents will my registered agent receive?', answer: 'Service of process (lawsuits), subpoenas, tax notices, annual report reminders, Secretary of State correspondence, wage garnishment notices, and other official government documents.' },
  { question: 'How will I know if my business receives legal documents?', answer: 'With Just Legal Solutions, you receive same-day email notifications whenever we receive documents. You also have 24/7 access to your secure online portal.' },
  { question: 'What if I move my business to a different Oklahoma address?', answer: 'You can either update your own agent address or maintain your professional registered agent service without changes. Many businesses prefer the stability of a professional agent when relocating.' },
  { question: 'Can a company serve as its own registered agent?', answer: 'No. However, an individual within the company (such as an owner or executive) can serve as the registered agent if they meet the state\'s requirements.' },
];

const competitors = [
  { name: 'Just Legal Solutions', cost: '$99', features: 'Local Oklahoma presence, same-day notification, full compliance support', highlight: true },
  { name: 'Oklahoma Registered Agent LLC', cost: '$49', features: 'Basic service, online account access', highlight: false },
  { name: 'Registered Agents Inc.', cost: '$200', features: 'Premium service, compliance tools', highlight: false },
  { name: 'LegalZoom', cost: '$249', features: 'National brand, credit monitoring included', highlight: false },
  { name: 'Northwest Registered Agent', cost: '$125', features: 'Address privacy, 20+ years experience', highlight: false },
  { name: 'ZenBusiness', cost: '$100–300', features: 'Varies by package, formation bundles', highlight: false },
  { name: 'MyCompanyWorks', cost: '$119', features: 'Overnight delivery for legal documents', highlight: false },
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
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://justlegalsolutions.org/' },
    { '@type': 'ListItem', position: 3, name: 'Registered Agent', item: canonicalUrl },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Oklahoma Registered Agent Service',
  provider: { '@type': 'Organization', name: 'Just Legal Solutions', telephone: '(539) 367-6832' },
  areaServed: 'Oklahoma',
  serviceType: 'Registered Agent / Statutory Agent',
  offers: {
    '@type': 'Offer',
    price: '99',
    priceCurrency: 'USD',
    priceSpecification: { '@type': 'UnitPriceSpecification', price: '99', priceCurrency: 'USD', unitText: 'year' },
  },
};

export default function RegisteredAgentPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <nav className="text-sm mb-4 text-emerald-200" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-white font-medium">Registered Agent</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6 text-sm">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Oklahoma Registered Agent Service
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Professional Registered Agent
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Services for Oklahoma Businesses</span>
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-2xl">
                Never miss critical legal documents, state notices, or service of process. Our local Oklahoma presence and same-day notification system keep your business compliant and protected — all for <strong>$99/year</strong>.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:5393676832" className="flex items-center gap-2 bg-white text-emerald-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-50 transition">
                  <Phone className="w-5 h-5" /> Call (539) 367-6832
                </a>
                <Link href="/contact" className="flex items-center gap-2 bg-transparent border border-white/60 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
                  <Mail className="w-5 h-5" /> Get Started
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="grid sm:grid-cols-3 gap-4">
                {heroHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/10">
                      <Icon className="w-8 h-8 text-emerald-200 mb-3" />
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-emerald-100">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-gray-50">
        {/* What Is a Registered Agent */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-4 text-sm font-medium">
                  <Scale className="w-4 h-4" />
                  Essential Business Requirement
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Is a Registered Agent?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A <strong>registered agent</strong> (also called a statutory agent or resident agent) is a person or business entity designated to receive official legal documents and government correspondence on behalf of your business. Every formal business entity operating in Oklahoma is required by law to maintain a registered agent.
                </p>
                <div className="space-y-4">
                  {[
                    'Accepting service of process — lawsuits, subpoenas, and legal documents',
                    'Receiving state correspondence from the Oklahoma Secretary of State',
                    'Handling tax documents from the Oklahoma Tax Commission',
                    'Maintaining a physical Oklahoma address during regular business hours',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-8 h-8 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Oklahoma Statutory Requirements</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Oklahoma law mandates registered agents under <strong>Title 18, Section 1022</strong> (corporations) and <strong>Title 18, Section 2010</strong> (LLCs).
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /><span>Physical Oklahoma street address required (no P.O. boxes)</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /><span>Available Monday–Friday during normal business hours</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /><span>Individual resident (18+) or authorized business entity</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /><span>Must promptly forward all documents to the business</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Your Business Needs One */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-emerald-600 font-semibold uppercase tracking-wide mb-2">Protect Your Business</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Your Business Needs a Professional Registered Agent</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Scale, title: 'Legal Compliance', items: ['Avoid administrative dissolution', 'Maintain good standing', 'File lawsuits and defend claims', 'Avoid penalties and late fees'] },
                { icon: Lock, title: 'Privacy Protection', items: ['Keep personal address private', 'No process servers at your home', 'Professional separation'] },
                { icon: Briefcase, title: 'Business Continuity', items: ['Always available during business hours', 'No missed documents on vacation', 'Seamless if you relocate'] },
                { icon: Building2, title: 'Professional Image', items: ['Demonstrates stability', 'Professional legal handling', 'Serious compliance approach'] },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700 w-fit mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                    <ul className="space-y-2">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
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

        {/* Document Handling Process */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-emerald-200 uppercase tracking-wide mb-2">Our Process</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Happens When We Receive Documents</h2>
              <p className="text-lg text-emerald-100 max-w-3xl mx-auto">Every document is logged, scanned, and delivered to you within hours.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', icon: ClipboardList, title: 'Immediate Receipt', desc: 'Our staff accepts all documents in person. Every item is logged with date, time, and description, then scanned to high-resolution digital format.' },
                { step: '2', icon: Bell, title: 'Same-Day Notification', desc: 'Within hours you receive an email alert with a document summary, urgency assessment, and a secure link to your document portal.' },
                { step: '3', icon: Globe, title: 'Secure Delivery', desc: 'Access documents 24/7 through your secure portal. Options include digital delivery, physical mail forwarding, or hold for pickup.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur relative">
                    <div className="absolute -top-4 -left-2 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">{item.step}</div>
                    <Icon className="w-8 h-8 text-emerald-200 mb-4 mt-2" />
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-emerald-100 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-emerald-600 font-semibold uppercase tracking-wide mb-2">Transparent Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">$99/Year — Everything Included</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">No hidden fees for document forwarding, online access, or annual report reminders.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-300">
                <div className="flex items-center gap-2 mb-6">
                  <DollarSign className="w-8 h-8 text-emerald-600" />
                  <div>
                    <p className="text-3xl font-bold text-gray-900">$99<span className="text-lg font-normal text-gray-600">/year</span></p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    'Oklahoma physical address for registered agent purposes',
                    'Acceptance of service of process during business hours',
                    'Same-day email notifications for all received documents',
                    'Secure online portal access (24/7)',
                    'Digital document delivery and storage',
                    'Annual report deadline reminders',
                    'Compliance monitoring alerts',
                    'Customer phone and email support',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a href="tel:5393676832" className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow">
                    <Phone className="w-5 h-5" /> Get Started
                  </a>
                </div>
              </div>

              <div className="overflow-x-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How We Compare</h3>
                <table className="min-w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-100 text-gray-800 font-semibold">
                    <tr>
                      <th className="px-4 py-3 text-left">Provider</th>
                      <th className="px-4 py-3 text-left">Annual Cost</th>
                      <th className="px-4 py-3 text-left">Key Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {competitors.map((c, i) => (
                      <tr key={i} className={c.highlight ? 'bg-emerald-50 font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3">{c.highlight ? `⭐ ${c.name}` : c.name}</td>
                        <td className="px-4 py-3">{c.cost}</td>
                        <td className="px-4 py-3 text-gray-600">{c.features}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs a Registered Agent */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-emerald-600 font-semibold uppercase tracking-wide mb-2">Who We Serve</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Needs a Registered Agent in Oklahoma?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Briefcase, title: 'Oklahoma LLCs', items: ['Single-member LLCs', 'Multi-member LLCs', 'Series LLCs', 'Professional LLCs (PLLCs)'] },
                { icon: Building2, title: 'Oklahoma Corporations', items: ['C-corporations & S-corporations', 'Non-profit corporations', 'Professional corporations', 'Close corporations'] },
                { icon: Globe, title: 'Out-of-State Entities', items: ['Foreign qualification required', 'Must register with OK Secretary of State', 'Certificate of Authority ($300)', 'TX, CA, DE companies operating in OK'] },
                { icon: Users, title: 'Limited Partnerships', items: ['Registered limited partnerships', 'Limited liability partnerships (LLPs)', 'General partnerships with OK registration'] },
                { icon: Shield, title: 'Nonprofit Organizations', items: ['Oklahoma nonprofit corporations', 'Same requirements as for-profit', 'Exempt status doesn\'t waive agent requirement'] },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <Icon className="w-8 h-8 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                    <ul className="space-y-2">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                          <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
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

        {/* How to Change */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-emerald-600 font-semibold uppercase tracking-wide mb-2">Easy Switch</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Change Your Registered Agent to Us</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Switching is simple — we handle the entire filing process for you.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Sign Up', desc: 'Contact us to establish your account. Provide your business name, current agent info, and pay the $99 annual fee.' },
                { step: '2', title: 'We File the Change', desc: 'We prepare and file the Change or Designation of Registered Agent form with the Oklahoma Secretary of State. Filing fee: $25 (mail) or $35 (online).' },
                { step: '3', title: 'You\'re Covered', desc: 'Once processed (3–5 business days), we begin accepting documents immediately. Your former agent is notified of the change.' },
              ].map((item) => (
                <div key={item.step} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 relative">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow">{item.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-emerald-600 font-semibold uppercase tracking-wide mb-2">Common Questions</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Registered Agent FAQs</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
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
      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Protect Your Oklahoma Business Today</h2>
              <p className="text-emerald-100 mb-6">
                Ensure compliance with Oklahoma law and never miss a critical legal document. Professional registered agent service for just $99/year.
              </p>
              <div className="space-y-3">
                {['Same-day document notifications', '$99/year flat rate — no hidden fees', 'Secure online portal access 24/7', 'Compliance reminders and deadline alerts'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
              <h3 className="text-2xl font-semibold mb-4">Get Started Now</h3>
              <p className="text-emerald-100 mb-6">Call or email us to establish your registered agent account. We handle the filing — you focus on your business.</p>
              <div className="space-y-4">
                <a href="tel:5393676832" className="flex items-center gap-3 bg-white text-emerald-900 font-semibold px-5 py-3 rounded-xl">
                  <Phone className="w-5 h-5" /> (539) 367-6832
                </a>
                <a href="mailto:info@justlegalsolutions.org" className="flex items-center gap-3 text-white border border-white/50 px-5 py-3 rounded-xl hover:bg-white/10">
                  <Mail className="w-5 h-5" /> info@justlegalsolutions.org
                </a>
                <Link href="/contact" className="flex items-center gap-2 text-emerald-200 font-semibold hover:text-white">
                  Contact us online <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
