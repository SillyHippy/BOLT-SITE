import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Clock, FileCheck, MapPin, Phone, ArrowRight, Star, Building2, Users, Scale, CheckCircle, AlertTriangle } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Eviction Notice Process Server Tulsa County | Same-Day Service',
  description:
    'Tulsa County eviction notice process server offering same-day and rush service. Properly documented eviction notice delivery for landlords, property managers, and attorneys across Oklahoma.',
  keywords:
    'tulsa eviction notice process server, eviction notice service tulsa county, oklahoma eviction notice service, eviction process server tulsa, serve eviction notice tulsa, notice to quit process server oklahoma, landlord tenant process server tulsa county',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/eviction-notice-process-server',
  },
  openGraph: {
    title: 'Eviction Notice Process Server for Tulsa County | Just Legal Solutions',
    description:
      'Fast, compliant eviction notice service for Tulsa County landlords, property managers, and attorneys. Same-day attempts, documented proof of service, and experienced Oklahoma process servers.',
    url: 'https://justlegalsolutions.org/seo/eviction-notice-process-server',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions — Tulsa County Eviction Notice Process Server',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eviction Notice Process Server for Tulsa County | Just Legal Solutions',
    description:
      'Fast, compliant eviction notice service for Tulsa County landlords, property managers, and attorneys.',
    images: ['https://justlegalsolutions.org/images/jls-logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

// ─── FAQ Data ────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: 'How long does it take to serve an eviction notice in Tulsa County?',
    answer:
      'In many cases we can attempt service the same day or within 24 hours of receiving your documents, depending on scheduling and when the request comes in. Standard service is typically completed within 1–3 business days. Rush and same-day options are available for urgent situations.',
  },
  {
    question: 'What proof of service will I receive for court?',
    answer:
      'You will receive a detailed, notarized Affidavit of Service that documents the date, time, location, method of service, and a description of the person served (when applicable). This affidavit is designed to meet Oklahoma court requirements and can be filed directly with your case.',
  },
  {
    question: 'Can you attempt service on evenings or weekends?',
    answer:
      'Yes. We understand that tenants are not always home during regular business hours. Our process servers make attempts during evenings, weekends, and at varied times to improve the chances of successful service.',
  },
  {
    question: 'Do you offer skip tracing if my tenant has moved?',
    answer:
      'Absolutely. If a tenant has moved or is difficult to locate, we offer skip tracing services to help find their current address. Visit our skip tracing services page for more details on how we can assist when a tenant has relocated.',
  },
  {
    question: 'Can you serve eviction papers at a tenant\'s workplace in Oklahoma?',
    answer:
      'In most situations, yes. Personal service can generally be made wherever the individual is located, including their place of employment. Our process servers handle workplace service with professionalism and discretion.',
  },
  {
    question: 'Do I need an attorney to start an eviction in Tulsa County?',
    answer:
      'While Oklahoma law does not always require an attorney for eviction filings, the eviction process involves strict legal rules and deadlines. We strongly encourage landlords and property managers to consult with an Oklahoma-licensed attorney to ensure their rights are protected. As process servers, we handle the delivery and documentation of legal documents — we cannot provide legal advice or representation.',
  },
  {
    question: 'Why can\'t I just tape the eviction notice to the door myself?',
    answer:
      'Posting a notice on a door has specific legal requirements in Oklahoma, and doing it incorrectly can invalidate your notice and delay the entire eviction process. Professional personal service, with a notarized Affidavit of Service as proof, gives you the strongest legal standing in court.',
  },
  {
    question: 'Do you work with large apartment complexes and property management companies?',
    answer:
      'Yes. We regularly work with property management companies and apartment complexes throughout Tulsa County, handling bulk eviction notice service and ongoing tenant-related document delivery. Contact us to discuss volume arrangements.',
  },
  {
    question: 'What if the tenant has already abandoned the property?',
    answer:
      'If a tenant appears to have abandoned the property, the legal requirements for service may differ. Our process servers can document the condition of the property (empty unit, utilities off, etc.) to support your case, in addition to completing the required legal service. An attorney can advise on the specific steps for your situation.',
  },
  {
    question: 'Where can I learn more about process serving in Oklahoma?',
    answer:
      'For a detailed overview of process serving requirements and best practices across the state, visit our Ultimate Guide to Process Serving in Oklahoma. We also link to several official Oklahoma court resources at the bottom of this page.',
  },
];

// ─── Service area cities ─────────────────────────────────────────────────────
const serviceAreas = [
  'Tulsa',
  'Broken Arrow',
  'Bixby',
  'Jenks',
  'Owasso',
  'Sand Springs',
  'Glenpool',
  'Sapulpa',
];

// ─── Page Component ──────────────────────────────────────────────────────────
export default function EvictionNoticeProcessServer() {
  return (
    <>
      {/* ── Structured Data ─────────────────────────────────────────────── */}
      <UnifiedSchema
        pageType="service"
        url="https://justlegalsolutions.org/seo/eviction-notice-process-server"
        title="Eviction Notice Process Server for Tulsa County"
        description="Specialized eviction notice process server for Tulsa County landlords, property managers, and attorneys. Expert delivery of Notice to Quit, 5-Day Pay or Quit notices, and all landlord-tenant documents with proper documentation for Oklahoma courts."
        serviceDetails={{
          name: 'Eviction Notice Process Server',
          description:
            'Fast, professional delivery of all eviction notices and landlord-tenant documents in Tulsa County with notarized Affidavit of Service.',
          areaServed: serviceAreas,
          serviceType: [
            'Eviction Notice Service',
            'Landlord-Tenant Document Delivery',
            'Notice to Quit Service',
            'Forcible Entry and Detainer Service',
          ],
        }}
        priceRange="$30-$200"
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        faqItems={faqItems}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org/' },
          { name: 'SEO', item: 'https://justlegalsolutions.org/seo' },
          {
            name: 'Eviction Notice Process Server',
            item: 'https://justlegalsolutions.org/seo/eviction-notice-process-server',
          },
        ]}
        speakable={['h1', 'h2', '.important-info', '.contact-info']}
      />

      <div className="min-h-screen bg-white text-gray-800">
        {/* ════════════════════════════════════════════════════════════════
            SECTION 1 — HERO
        ════════════════════════════════════════════════════════════════ */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Eviction Notice Process Server for Tulsa County
              </h1>
              <p className="mt-5 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                Fast, compliant, same-day eviction notice service — properly documented so your case
                stays on track and out of jeopardy.
              </p>

              {/* Key benefit pills */}
              <ul className="mt-8 flex flex-wrap justify-center gap-3 text-sm md:text-base">
                <li className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="h-4 w-4 text-yellow-400" />
                  Same-Day &amp; 24-Hour Rush Attempts
                </li>
                <li className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <FileCheck className="h-4 w-4 text-green-400" />
                  Notarized Affidavit of Service
                </li>
                <li className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="h-4 w-4 text-blue-400" />
                  Experienced Oklahoma Process Servers
                </li>
                <li className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Building2 className="h-4 w-4 text-purple-400" />
                  Homes, Apartments &amp; Commercial Properties
                </li>
              </ul>

              {/* SVG Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Image
                  src="/badges/24-7-emergency-service-badge.svg"
                  alt="24/7 Emergency Eviction Service Tulsa County"
                  width={100}
                  height={64}
                  className="h-14 w-auto opacity-90"
                />
                <Image
                  src="/badges/court-certified-professional-badge.svg"
                  alt="Court Certified Eviction Notice Process Server"
                  width={100}
                  height={64}
                  className="h-14 w-auto opacity-90"
                />
                <Image
                  src="/badges/fastest-process-server-oklahoma-badge.svg"
                  alt="Fastest Eviction Notice Process Server Oklahoma"
                  width={100}
                  height={64}
                  className="h-14 w-auto opacity-90"
                />
                <Image
                  src="/badges/trusted-by-law-firms-badge.svg"
                  alt="Trusted by Property Management Law Firms"
                  width={100}
                  height={64}
                  className="h-14 w-auto opacity-90"
                />
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:5393676832"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Now for Rush Eviction Service
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  Request Eviction Service Online
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 2 — WHO WE SERVE
        ════════════════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                Eviction Notice Service for Landlords, Property Managers, and Attorneys
              </h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Whether you own one rental property or manage hundreds of units, we deliver your eviction
                notices quickly, correctly, and with the documentation Oklahoma courts expect.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Individual Landlords */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Individual Landlords</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    If you own a rental house or a small portfolio of properties, dealing with a problem
                    tenant can be stressful. We take the guesswork out of serving eviction notices by
                    handling the delivery for you — correctly, on time, and with a notarized Affidavit
                    of Service you can present in court.
                  </p>
                </div>

                {/* Property Management Companies */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Property Management Companies</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Managing dozens or hundreds of units means eviction notices are a regular part of
                    business. We handle bulk service requests for apartment complexes and multi-property
                    management companies throughout Tulsa County, providing consistent documentation and
                    reliable turnaround times you can count on.
                  </p>
                </div>

                {/* Attorneys & Law Firms */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Scale className="h-6 w-6 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Real Estate Attorneys &amp; Law Firms</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Attorneys handling landlord-tenant cases need reliable, well-documented service of
                    process. We deliver thorough Affidavits of Service and maintain clear communication
                    on every attempt, so your filings and court appearances are supported by solid proof
                    of proper service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 3 — WHY PROPER SERVICE MATTERS
        ════════════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Proper Eviction Notice Service Matters in Oklahoma
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Oklahoma courts require proper service of eviction notices before a case can move forward.
                If a notice is not delivered correctly — or if there is no acceptable proof that it was
                delivered — the consequences can be serious and expensive:
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <AlertTriangle className="h-6 w-6 text-red-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Case Dismissed</h3>
                  <p className="text-gray-700 text-sm">
                    A judge can dismiss your eviction case outright if service was not completed correctly,
                    forcing you to start the entire process over.
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Extra Fees &amp; Re-Filing</h3>
                  <p className="text-gray-700 text-sm">
                    Improper service means re-filing paperwork, paying additional court fees, and losing
                    valuable time — all while rent remains unpaid.
                  </p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Weeks of Lost Rent</h3>
                  <p className="text-gray-700 text-sm">
                    Every delay adds weeks or even months of lost rental income. Proper service the first
                    time keeps your case on the fastest possible timeline.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                When you use a professional Tulsa eviction notice process server, you get correctly
                executed service backed by a detailed, notarized Affidavit of Service. That affidavit
                includes the date, time, location, and method of delivery — exactly what the court needs
                to verify that the tenant was properly notified.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you are a first-time landlord or a seasoned property manager, professional
                process serving gives you the reliability and documentation to move your eviction case
                forward with confidence. For more on our full range of legal document delivery, visit our{' '}
                <Link href="/tulsa-process-server" className="text-blue-700 underline hover:text-blue-900">
                  main Tulsa process server services page
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 4 — HOW OUR SERVICE WORKS (5 steps)
        ════════════════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                How Our Tulsa Eviction Notice Service Works
              </h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                A straightforward, five-step process — from preparing the notice to court hearing and
                beyond.
              </p>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      You Prepare the Proper Eviction Notice
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      You or your attorney determine which notice is required for your situation — for
                      example, a 5-Day Notice to Pay or Quit for unpaid rent, a 15-Day Notice for lease
                      violations, or another notice as required by Oklahoma law. The landlord or their
                      attorney decides which notice is appropriate; the process server does not make that
                      determination.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      We Serve the Eviction Notice on Your Tenant
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our process server attempts personal service first — hand-delivering the eviction
                      notice directly to the tenant at their Tulsa County address. When personal service
                      is not possible, we may complete substituted service or posting and mailing as
                      permitted by local rules. Every attempt is thoroughly documented for your records
                      and the court.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      You File the Eviction Case (FED) in Court
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      If the tenant does not comply within the notice period, you or your attorney file a
                      Forcible Entry and Detainer (FED) action at the appropriate Tulsa County court. Our
                      notarized proof of service on the initial notice supports your filing and establishes
                      that the tenant was properly notified.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      We Serve the Court Summons and Petition on the Tenant
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Once the court issues a summons and petition, timely service on the tenant is
                      critical for the hearing to proceed as scheduled. We make multiple attempts at
                      varied times and thoroughly document each one. Proper service of the summons is
                      what gives the court jurisdiction to hear the case.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Court Hearing, Judgment, and Next Steps
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      After the hearing, if the court issues a judgment for possession, there may be
                      additional orders such as a Writ of Execution. We can assist with serving any
                      related documents or notices as required. All legal decisions and strategy come from
                      your attorney — we handle the professional delivery and documentation.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-sm text-gray-500 italic text-center">
                This overview is for informational purposes only. Always consult an Oklahoma-licensed
                attorney for legal advice specific to your eviction case.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 5 — HOW WE SERVE EVICTION PAPERS
        ════════════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How We Serve Eviction Notices and Court Papers in Oklahoma
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                There are several ways eviction papers and court documents can be served under Oklahoma
                rules. Here is how we handle each method:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {/* Personal Service */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Personal Service</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This is the preferred and strongest method. Our process server physically hands the
                    eviction documents directly to the tenant. Personal service provides the clearest
                    proof that the tenant received the notice.
                  </p>
                </div>

                {/* Substituted Service */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <Users className="h-5 w-5 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Substituted Service</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    When the tenant is not available, documents may be left with a responsible adult
                    resident at the property, if permitted. Our server records the name, description, and
                    relationship of the person accepting the documents.
                  </p>
                </div>

                {/* Posting & Mailing */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                    <FileCheck className="h-5 w-5 text-amber-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Posting &amp; Mailing</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    In certain situations, documents may be posted in a visible location at the property
                    and mailed to the tenant, if rules allow. We document every step — photos of posting,
                    mailing receipts, and full details in the affidavit. Learn more about our{' '}
                    <Link href="/seo/legal-posting-process-server" className="text-blue-700 underline hover:text-blue-900">
                      legal notice posting service
                    </Link>.
                  </p>
                </div>
              </div>

              {/* Documentation emphasis */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-slate-700" />
                  Thorough Documentation on Every Attempt
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Regardless of the method used, every service attempt is backed by detailed documentation
                  that includes:
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Date and time of each service attempt
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Full address and location details
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Description of person served (when applicable)
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Method of service used
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Process server name and information
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Notarized Affidavit of Service for court filing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 6 — SERVICE AREA
        ════════════════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                Tulsa County Eviction Service Area
              </h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                We regularly serve eviction notices at rental houses, apartment units, duplexes, and
                commercial properties throughout Tulsa County, including:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
                {serviceAreas.map((city) => (
                  <div
                    key={city}
                    className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <MapPin className="h-4 w-4 text-slate-500 mx-auto mb-1" />
                    <p className="font-semibold text-gray-900">{city}</p>
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-500 text-sm">
                Need eviction notice service outside Tulsa County or in a neighboring county?{' '}
                <Link href="/contact" className="text-blue-700 underline hover:text-blue-900">
                  Contact us
                </Link>{' '}
                — we may be able to assist or arrange service in your area.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 7 — PRICING & WHAT TO EXPECT
        ════════════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Eviction Notice Service Pricing &amp; What to Expect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                We believe in transparent, straightforward pricing. Here is what to expect when you work
                with us for eviction notice service in Tulsa County:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Standard Service
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A base fee covers standard eviction notice delivery within Tulsa County. We typically
                    make our first attempt the same day or within 24 hours of receiving your documents,
                    when scheduling allows.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-amber-600" />
                    Rush &amp; Same-Day Service
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    For urgent situations, rush and same-day service options are available at an additional
                    fee. These are ideal for time-sensitive eviction notices where every day counts.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Additional Attempts &amp; Mileage
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Additional service attempts or extended travel outside core Tulsa County areas may
                    incur extra fees. We will always communicate costs upfront before proceeding.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-purple-600" />
                    Communication &amp; Proof of Service
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    You will receive updates after each attempt and confirmation when service is
                    completed. Your notarized Affidavit of Service is provided as a scanned copy, paper
                    copy, or both — whatever works best for you and your attorney.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 underline"
                >
                  View our full pricing page for detailed rates
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 8 — CTA
        ════════════════════════════════════════════════════════════════ */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Tulsa Eviction Notice Service?
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                With years of experience serving eviction notices throughout Tulsa County, we know how
                important timing and proper documentation are for your case. Our process servers are
                familiar with local courts, responsive to urgent requests, and committed to clear
                communication from first attempt to final affidavit.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <a
                  href="tel:5393676832"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call or Text: (539) 367-6832
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  Submit a Service Request Online
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-slate-400 text-sm">
                Available 7 days a week — including evenings and weekends for urgent eviction service.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 9 — FAQ (Accordion)
        ════════════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                Eviction Notice Service FAQ for Tulsa County
              </h2>
              <p className="text-gray-600 text-center mb-10">
                Common questions from landlords, property managers, and attorneys about our Tulsa
                eviction notice process serving.
              </p>

              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-base font-semibold text-gray-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 10 — OFFICIAL RESOURCE LINKS
        ════════════════════════════════════════════════════════════════ */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Helpful Oklahoma Eviction Resources (Forms &amp; Information)
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                The following official resources may be helpful for landlords, tenants, and property
                managers navigating the eviction process in Oklahoma. These links go to external
                government and legal aid websites.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="https://oksc.oscn.net/forms/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 font-semibold underline hover:text-blue-900"
                    >
                      Oklahoma Supreme Court Official Forms
                    </a>
                    <p className="text-gray-500 text-sm">General court forms and resources from the Oklahoma courts.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="https://oklaw.org/legal-aid-self-help-forms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 font-semibold underline hover:text-blue-900"
                    >
                      Legal Aid Services of Oklahoma — Self-Help Forms
                    </a>
                    <p className="text-gray-500 text-sm">Free self-help legal forms for Oklahoma residents.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="https://oklaw.org/issues/housing/landlord-and-tenant-problems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 font-semibold underline hover:text-blue-900"
                    >
                      Legal Aid Services of Oklahoma — Landlord and Tenant Problems
                    </a>
                    <p className="text-gray-500 text-sm">Housing information and forms for landlord-tenant issues in Oklahoma.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="https://oklaw.org/resource/eviction-for-non-payment-of-rent"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 font-semibold underline hover:text-blue-900"
                    >
                      Legal Aid — Eviction for Non-Payment of Rent
                    </a>
                    <p className="text-gray-500 text-sm">Oklahoma-focused information about evictions due to non-payment of rent.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 11 — INTERNAL LINKS
        ════════════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related Process Serving Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Process Serving Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/tulsa-process-server" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline">
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        Learn more about our Oklahoma process serving services
                      </Link>
                    </li>
                    <li>
                      <Link href="/process-server-tulsa-guide" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline">
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        Complete process server guide for Tulsa
                      </Link>
                    </li>
                    <li>
                      <Link href="/ultimate-guide-process-serving-oklahoma" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline">
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        Ultimate guide to process serving in Oklahoma
                      </Link>
                    </li>
                    <li>
                      <Link href="/seo/legal-posting-process-server" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline">
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        Legal notice posting service for alternative service
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Service Area Coverage</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/service-areas/broken-arrow" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline">
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        Broken Arrow process server services
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-areas/glenpool" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline">
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        Glenpool process server services
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-areas/owasso" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline">
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        Owasso process server services
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 underline">
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        Legal resources and process serving guides
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 12 — DISCLAIMER
        ════════════════════════════════════════════════════════════════ */}
        <section className="bg-gray-100 border-t border-gray-200 py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">
                Important Disclaimer
              </h2>
              <p className="text-gray-500 text-xs leading-relaxed">
                Just Legal Solutions and its process servers are not attorneys and are not a law firm.
                We do not provide legal advice, legal representation, or interpret the law. The
                information on this page is general information about process serving and eviction
                notice delivery in Oklahoma and should not be relied upon as legal advice. Landlords,
                tenants, and property managers should consult an Oklahoma-licensed attorney for specific
                legal advice, case evaluation, and representation regarding eviction proceedings.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

