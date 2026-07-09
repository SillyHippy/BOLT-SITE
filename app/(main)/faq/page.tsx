import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';
import {
  Phone,
  Shield,
  Clock,
  CheckCircle,
  FileText,
  Scale,
  MapPin,
  ArrowRight,
  HelpCircle,
  DollarSign,
  Gavel,
  Building2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Oklahoma Process Server & Notary FAQ - All Your Questions Answered | Just Legal Solutions',
  description: 'Complete FAQ for Oklahoma process serving and notary services. 30+ questions answered on pricing ($35-$265), timelines, licensing, GPS proof, coverage (all 77 counties), and notary requirements. Licensed & bonded.',
  keywords: 'Oklahoma process server FAQ, process serving questions, notary FAQ Oklahoma, Tulsa process server cost, legal document service questions, Oklahoma notary requirements, process serving pricing, how does process serving work',
  alternates: {
    canonical: 'https://justlegalsolutions.org/faq',
  },
  openGraph: {
    title: 'Oklahoma Process Server & Notary FAQ - All Your Questions Answered | Just Legal Solutions',
    description: '30+ questions answered about Oklahoma process serving and notary services. Pricing, timelines, licensing, GPS proof, and more.',
    url: 'https://justlegalsolutions.org/faq',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/Legal-document-types-process-server.webp',
        width: 1200,
        height: 630,
        alt: 'Oklahoma Process Server & Notary FAQ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oklahoma Process Server & Notary FAQ | Just Legal Solutions',
    description: '30+ questions answered about Oklahoma process serving and notary services. Licensed & bonded, all 77 counties.',
    images: ['https://justlegalsolutions.org/images/Legal-document-types-process-server.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'ai-summary': 'Complete FAQ hub for Just Legal Solutions Oklahoma process serving and notary services. Process serving starts at $35 single-attempt, $60 standard, $100 rush, $150 same-day, $200 triple-attempt, $265 after-hours rush. Notary starts at $20 in-office, $25 mobile/RON. Licensed under 12 O.S. § 158.1, all 77 Oklahoma counties, GPS-verified proof, 24/7 availability, 50+ years combined experience.',
    'ai-key-facts': 'Process serving $35-$265; Notary $20-$25; All 77 OK counties; Licensed bonded insured; GPS proof included; 24/7 availability; (539) 367-6832',
  },
};

// FAQ data organized by category
const faqCategories = [
  {
    id: 'process-serving',
    title: 'Process Serving',
    icon: FileText,
    color: 'blue',
    faqs: [
      {
        question: 'What is a process server in Oklahoma?',
        answer: 'A process server in Oklahoma is a professional licensed under 12 O.S. § 158.1 who delivers legal documents such as summonses, complaints, subpoenas, and orders. They must be at least 18 years old, of good moral character, an Oklahoma resident, and have posted the required $5,000 surety bond. Just Legal Solutions servers meet all these requirements and carry additional professional liability insurance.',
      },
      {
        question: 'How does process serving work in Oklahoma?',
        answer: 'A licensed process server personally delivers legal documents to the named recipient. The server makes multiple attempts at different times and days, documents each attempt with GPS-stamped proof, and files a notarized affidavit of service with the court. Under 12 O.S. § 2004, service is complete when the server identifies the person and offers the documents, even if the recipient refuses to take them.',
      },
      {
        question: 'How long does process serving take?',
        answer: 'Standard service typically takes 5-10 business days with up to three attempts. Rush service completes within 1-3 business days. Same-day service dispatches within 4-8 hours. After-hours rush provides a 2-hour response window. Most urgent calls get a server moving within an hour of the request.',
      },
      {
        question: 'Can you serve someone at their workplace?',
        answer: 'Yes, workplace service is legal in Oklahoma and is often the easiest place to find an evasive defendant. Our servers approach the receptionist or front desk professionally, ask for the named individual, and complete the service discreetly. We understand workplace sensitivity and handle these situations with maximum discretion.',
      },
      {
        question: 'Can the defendant refuse service?',
        answer: 'No. Under 12 O.S. § 2004, if a server identifies the named person and offers the documents, service is complete even if the person refuses to physically take them, walks away, or shuts the door. The server can leave the documents at their feet — this is called "drop service" and it is legally valid in Oklahoma.',
      },
      {
        question: 'What if the address is wrong or the person moved?',
        answer: 'If the defendant is no longer at the provided address, we can run a skip-tracing search starting at $50 to locate their current address and re-dispatch. We never bill for a successful serve at a stale address. Our team confirms addresses before dispatch when possible, but addresses do go stale, especially in high-mobility situations.',
      },
      {
        question: 'Do you provide GPS proof of service?',
        answer: 'Yes. Every service attempt is GPS-stamped at the moment it happens. The notarized affidavit includes the latitude and longitude coordinates, the exact timestamp, and any photos the server captured. This GPS evidence protects against future motions to quash service and provides ironclad proof that service was properly completed.',
      },
      {
        question: 'What is an affidavit of service and why do I need one?',
        answer: 'An affidavit of service (also called a return of service) is the notarized document that proves the defendant was properly served. It is filed with the court and triggers the answer deadline on the summons. Without a proper affidavit, the case cannot move forward. A flawed affidavit can be challenged later, which is why notarization, GPS data, and detailed documentation matter.',
      },
      {
        question: 'Do you serve after-hours, on weekends, and on holidays?',
        answer: 'Yes. Oklahoma law does not restrict the days or times that service can occur, and many evasive defendants are only home in the evening or on weekends. Our after-hours rush tier starts at $265 and our same-day tier at $150 both include weekend and holiday windows when needed. We are available 24/7.',
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing',
    icon: DollarSign,
    color: 'green',
    faqs: [
      {
        question: 'How much does a process server cost in Oklahoma?',
        answer: 'Process server costs in Oklahoma range from $35 for a single-attempt posting to $265 for 2-hour emergency after-hours service. Standard service (up to 3 attempts) starts at $60. Rush service starts at $100, same-day at $150, and triple-attempt at $200. All pricing is transparent with no hidden fees.',
      },
      {
        question: 'What is the cheapest process server option?',
        answer: 'Our Single-Attempt Posting starts at just $35 and is ideal for budget-conscious clients or straightforward serves where the defendant is easy to locate. For standard service with up to three attempts, pricing starts at $60. Both options include GPS-verified proof and a notarized affidavit.',
      },
      {
        question: 'Are there any hidden fees for process serving?',
        answer: 'No hidden fees. Our pricing is transparent and upfront. Surcharges for areas outside Tulsa County are quoted before service begins. We clearly communicate all costs including any rush fees, filing fees, or printing charges before you commit. What we quote is what you pay.',
      },
      {
        question: 'What is included in the base process serving price?',
        answer: 'Every tier includes the actual service attempts, GPS-stamped documentation, and a notarized affidavit of service ready to file with the court. Within Tulsa County, mileage is included. Standard service includes up to 3 attempts at varied times of day. Skip tracing, court runs, and mobile notary are billed separately when needed.',
      },
      {
        question: 'Do you charge per attempt or per case?',
        answer: 'Both options exist. Single-attempt posting is per attempt and starts at $35. Standard service is a flat $60 starting price that includes up to three attempts. Triple-attempt service starts at $200 for evasive respondents who need spread-out attempts on different days and times.',
      },
      {
        question: 'Do you offer volume discounts for law firms?',
        answer: 'Yes. Firms with consistent monthly volume qualify for automatic volume pricing. We offer priority scheduling, custom billing, consolidated monthly invoicing, and preferential rates. No long-term contracts required. Call (539) 367-6832 to discuss your typical monthly load and get a custom quote.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept cash, check, credit card, Venmo, PayPal, and Zelle. Law firms and recurring business clients can set up an invoiced billing account so individual matters are billed monthly. Prepayment is required for non-established clients to ensure we can dedicate resources to your case without delay.',
      },
      {
        question: 'How do I get a quote for process serving outside Tulsa?',
        answer: 'Call or text us at (539) 367-6832 or email info@JustLegalSolutions.org with the service address. We serve all 77 Oklahoma counties and provide upfront quotes with no surprises. Same-day quotes are available for most locations. Our license under 12 O.S. § 158.1 is recognized statewide.',
      },
    ],
  },
  {
    id: 'tulsa-process-serving',
    title: 'Tulsa Process Serving',
    icon: MapPin,
    color: 'cyan',
    faqs: [
      {
        question: 'Do you serve all 77 Oklahoma counties?',
        answer: 'Yes. Our license under 12 O.S. § 158.1 is recognized statewide, so a single server can cover urban metros and rural counties without handing off to local sheriffs. We serve everywhere from downtown Tulsa to the Panhandle, including Oklahoma City, Lawton, Enid, and every county in between.',
      },
      {
        question: 'Where are you based and what areas do you cover?',
        answer: 'Our office is at 564 E 138th Pl, Glenpool, OK 74033 — about 15 minutes south of downtown Tulsa. We routinely cover Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Sapulpa, Glenpool, and the entire Tulsa metro area, plus all 77 Oklahoma counties statewide.',
      },
      {
        question: 'Can you do same-day service in Tulsa?',
        answer: 'Yes. Same-day service starts at $150 and is one of the most-requested tiers in the Tulsa metro. A server dispatches within 4-8 hours of your request. We also offer after-hours rush starting at $265 for a 2-hour response time outside normal business hours.',
      },
      {
        question: 'How fast can you serve papers in Tulsa?',
        answer: 'It depends on the tier you choose. Standard service runs 5-10 business days with up to three attempts. Rush service is 1-3 business days. Same-day service dispatches within 4-8 hours. After-hours rush hits a 2-hour response window. Most urgent calls in the Tulsa metro get a server moving within an hour.',
      },
      {
        question: 'What is the difference between a private process server and the Tulsa County Sheriff?',
        answer: 'A private process server like Just Legal Solutions offers faster turnaround (same-day to 10 days vs. 2-4 weeks for the sheriff), GPS-verified proof (sheriffs typically do not provide GPS data), flexible scheduling including evenings and weekends, and professional discretion. Sheriff service costs $40-$50 per attempt but takes significantly longer and offers fewer tracking options.',
      },
      {
        question: 'Do you serve in Tulsa County courthouses?',
        answer: 'Yes. We regularly file returns of service at the Tulsa County Courthouse and all other Oklahoma courthouses. We can also eFile for free in Oklahoma upon request. For in-person filing in Tulsa County, the fee is $35 plus court costs. Fees for other counties are quoted upfront.',
      },
    ],
  },
  {
    id: 'notary-services',
    title: 'Notary Services',
    icon: Scale,
    color: 'purple',
    faqs: [
      {
        question: 'What does a notary do?',
        answer: 'A notary public is an official witness appointed by the state to verify your identity using government-issued photo ID, confirm you are signing willingly (not under duress), witness your signature on legal documents, and apply their official seal to certify the notarization. Notaries do NOT verify the truthfulness of document contents or provide legal advice.',
      },
      {
        question: 'How much does a notary cost in Oklahoma?',
        answer: 'In-office notary services start at $20 per act. Mobile notary starts at $25 per act plus travel fees that vary by distance. Remote Online Notarization (RON) starts at $25 per act. Oklahoma law caps traditional notary fees at $5 per act (49 O.S. § 5) and RON at $25 per act (49 O.S. § 209). Each signature needing notarization equals one act.',
      },
      {
        question: 'What types of documents can be notarized?',
        answer: 'Almost any document can be notarized, including powers of attorney, deeds, affidavits, contracts, wills, loan documents, medical releases, travel consent forms, and court filings. The document must be complete but unsigned when you arrive — the notary must witness you signing. We cannot notarize incomplete documents or provide legal advice about document contents.',
      },
      {
        question: 'What ID do I need for notarization?',
        answer: 'You need a current, government-issued photo ID with your signature, such as a driver\'s license, passport, military ID, or state ID card. The ID must be unexpired or have been issued within the last 5 years. If you do not have acceptable ID, two credible witnesses with valid ID may vouch for your identity instead.',
      },
      {
        question: 'Do I need to make an appointment for notary services?',
        answer: 'For in-office notary, appointments are recommended but walk-ins are often accommodated during business hours (Mon-Fri 8 AM-6 PM, Sat by appointment). Mobile notary always requires scheduling so we can plan travel. Remote Online Notarization can be scheduled same-day in most cases.',
      },
      {
        question: 'What is Remote Online Notarization (RON)?',
        answer: 'Remote Online Notarization allows you to be notarized via secure video call from anywhere in the world. Oklahoma authorized RON in 2019. The process includes uploading your document, verifying your identity through knowledge-based authentication, a live video session with the notary, and instant download of your notarized document. RON starts at $25 per act.',
      },
      {
        question: 'How long does a notarization take?',
        answer: 'Timing varies by service type. In-office notarization takes 15-30 minutes for simple documents. Mobile notary takes 20-45 minutes on-site plus travel time. Remote Online Notarization takes 30-60 minutes including upload, verification, and the video session. Complex documents like loan packages with multiple signers may take 1-2 hours.',
      },
    ],
  },
];

// Flatten all FAQs for schema
const allFaqItems = faqCategories.flatMap((cat) =>
  cat.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }))
);

export default function FAQHubPage() {
  return (
    <>
      <Navbar />
      <UnifiedSchema
        pageType="faq"
        url="https://justlegalsolutions.org/faq"
        title="Oklahoma Process Server & Notary FAQ - All Your Questions Answered | Just Legal Solutions"
        description="Complete FAQ for Oklahoma process serving and notary services. 30+ questions answered on pricing, timelines, licensing, GPS proof, coverage, and notary requirements."
        faqItems={allFaqItems}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' },
        ]}
        speakable={[
          'Process server costs in Oklahoma range from $35 for a single-attempt posting to $265 for 2-hour emergency after-hours service.',
          'We serve all 77 Oklahoma counties with GPS-verified proof and notarized affidavits.',
        ]}
      />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-[Inter,system-ui,sans-serif]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1e3a5f] via-blue-800 to-cyan-700 text-white pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-blue-100">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white">FAQ</li>
              </ol>
            </nav>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                <Shield className="w-4 h-4 text-green-300" />
                Licensed & bonded
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                <Clock className="w-4 h-4 text-blue-200" />
                24/7 availability
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                <MapPin className="w-4 h-4 text-blue-200" />
                All 77 counties
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-5 drop-shadow-lg">
              Oklahoma Process Server & Notary FAQ
            </h1>

            {/* Direct Answer Paragraph */}
            <div className="max-w-3xl mb-8">
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                <strong>
                  Process serving in Oklahoma costs $35-$265 depending on speed and complexity.
                  Standard service starts at $60 with up to 3 attempts, GPS-verified proof, and a
                  notarized affidavit included. Notary services start at $20 in-office or $25 for
                  mobile/RON. Just Legal Solutions is licensed under 12 O.S. § 158.1, serves all 77
                  Oklahoma counties, and is available 24/7 with 50+ years combined experience.
                </strong>
              </p>
            </div>

            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Thirty-plus questions answered in plain English. If your question is not here, call us
              at{' '}
              <a className="underline font-semibold" href="tel:5393676832">
                (539) 367-6832
              </a>{' '}
              and we will answer it on the spot.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:5393676832"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors"
              >
                <Phone className="w-5 h-5" /> (539) 367-6832
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors"
              >
                See Full Pricing <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors"
              >
                Start a Serve
              </Link>
            </div>
          </div>
        </section>

        {/* Category Navigation (Sticky) */}
        <section className="sticky top-14 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
              <span className="text-sm font-semibold text-gray-500 mr-2 whitespace-nowrap">
                Jump to:
              </span>
              {faqCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors whitespace-nowrap border border-blue-100"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {cat.title}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Individual FAQ Page Links */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              Detailed FAQ Pages by Topic
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              <Link
                href="/oklahoma-process-server-faq"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-100"
              >
                <h3 className="font-semibold text-blue-800 text-sm">Oklahoma Process Server FAQ</h3>
                <p className="text-xs text-gray-600 mt-1">Statewide laws & requirements</p>
              </Link>
              <Link
                href="/tulsa-process-server-faq"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-100"
              >
                <h3 className="font-semibold text-blue-800 text-sm">Tulsa Process Server FAQ</h3>
                <p className="text-xs text-gray-600 mt-1">Tulsa-specific answers</p>
              </Link>
              <Link
                href="/notary-faqs"
                className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors border border-purple-100"
              >
                <h3 className="font-semibold text-purple-800 text-sm">Notary FAQ</h3>
                <p className="text-xs text-gray-600 mt-1">50+ notary questions</p>
              </Link>
              <Link
                href="/pricing"
                className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors border border-green-100"
              >
                <h3 className="font-semibold text-green-800 text-sm">Full Pricing</h3>
                <p className="text-xs text-gray-600 mt-1">Every tier & add-on</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        {faqCategories.map((category, catIndex) => {
          const Icon = category.icon;
          return (
            <section
              key={category.id}
              id={category.id}
              className={`py-12 ${catIndex % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
            >
              <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-8 flex items-center gap-3">
                  <Icon className="w-7 h-7 text-blue-600" />
                  {category.title}
                </h2>
                <div className="space-y-5">
                  {category.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100"
                    >
                      <h3 className="text-lg font-bold mb-3 text-[#1e3a5f] flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Trust Strip */}
        <section className="py-10 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <Building2 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-[#1e3a5f]">50+ years combined</h3>
                <p className="text-sm text-gray-600">Process serving experience on staff</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <h3 className="font-bold text-[#1e3a5f]">Licensed & bonded</h3>
                <p className="text-sm text-gray-600">Under 12 O.S. § 158.1, $5,000 bond</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-[#1e3a5f]">All 77 counties</h3>
                <p className="text-sm text-gray-600">Statewide license, single point of contact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-16 bg-gradient-to-br from-[#1e3a5f] to-cyan-700 text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <Phone className="w-12 h-12 mx-auto mb-4 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Call us at (539) 367-6832 and a real person — usually the server who would handle your
              case — will answer. No phone trees, no callbacks tomorrow. We will quote you on the
              call and tell you when the serve can happen.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:5393676832"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors"
              >
                <Phone className="w-5 h-5" /> Call (539) 367-6832
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors"
              >
                See Full Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-[#1e3a5f] mb-4 text-center">Explore More</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <Link
                href="/process-serving"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-800">Process Serving Overview</h3>
                <p className="text-sm text-gray-600 mt-1">All service methods explained</p>
              </Link>
              <Link
                href="/process-server-vs-sheriff"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-800">Process Server vs Sheriff</h3>
                <p className="text-sm text-gray-600 mt-1">Side-by-side comparison</p>
              </Link>
              <Link
                href="/notary"
                className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <h3 className="font-semibold text-purple-800">Notary Services</h3>
                <p className="text-sm text-gray-600 mt-1">In-office, mobile & RON</p>
              </Link>
              <Link
                href="/divorce-paper-service"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-800">Divorce Paper Service</h3>
                <p className="text-sm text-gray-600 mt-1">Discreet, court-ready</p>
              </Link>
              <Link
                href="/small-claims-process-serving"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-800">Small Claims Service</h3>
                <p className="text-sm text-gray-600 mt-1">Affordable, fast</p>
              </Link>
              <Link
                href="/pricing"
                className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <h3 className="font-semibold text-green-800">Full Pricing</h3>
                <p className="text-sm text-gray-600 mt-1">Every tier and add-on</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
