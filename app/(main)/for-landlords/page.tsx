import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Home, Clock, CheckCircle, FileText, Shield } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { buildFreshnessMetadata, getPageFreshness } from '@/lib/content-freshness';

const canonicalUrl = 'https://justlegalsolutions.org/for-landlords';
const freshness = getPageFreshness('/for-landlords')!;

export const metadata: Metadata = {
  title: 'Process Serving for Landlords | Eviction Notices Oklahoma',
  description:
    'Oklahoma eviction notice and process serving for landlords. 5-day, 10-day, and 30-day notices served correctly with GPS proof. Licensed under 12 O.S. § 158.1. Call (539) 367-6832.',
  keywords:
    'landlord process server oklahoma, eviction notice service, serve eviction papers tulsa, landlord tenant service of process, oklahoma eviction server',
  twitter: {
    card: 'summary_large_image',
    title: 'Process Serving for Landlords | Eviction Notices Oklahoma',
    description: 'Oklahoma eviction notice and process serving for landlords. 5-day, 10-day, and 30-day notices served correctly with GPS proof. Licensed under 12 O.S. § 158.1. Call (539) 367-6832.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp'],
  },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'Process Serving for Landlords | Just Legal Solutions Oklahoma',
    description:
      'Professional eviction notice and court document service for Oklahoma landlords. GPS-verified proof, same-day available.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://justlegalsolutions.org/image-pack/images/image-039-eviction-notice-service-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Process server delivering an eviction notice at an Oklahoma rental property',
      },
    ],
  },
  other: {
    'ai-content-type': 'professional-service',
    'ai-summary':
      'Just Legal Solutions serves eviction notices and landlord-tenant court documents across Oklahoma. Licensed process servers under 12 O.S. § 158.1. Proper notice service for 5-day, 10-day, and 30-day evictions with GPS-verified affidavits. Same-day and weekend service available.',
    'ai-key-facts':
      'Landlord eviction notice service, 5/10/30-day notices, licensed bonded servers, GPS proof, all 77 counties, starts at $35 single-attempt, (539) 367-6832',
    ...buildFreshnessMetadata({
      datePublished: freshness.datePublished,
      dateModified: freshness.dateModified,
    }).other,
  },
};

const faqs = [
  {
    question: 'Who can serve an eviction notice in Oklahoma?',
    answer:
      'Any person 18 or older who is not a party to the case may serve an eviction notice. However, hiring a licensed private process server under 12 O.S. § 158.1 provides GPS-verified proof and a court-ready affidavit if the tenant challenges service — the most common reason eviction cases are delayed.',
  },
  {
    question: 'How much does eviction notice service cost in Oklahoma?',
    answer:
      'Just Legal Solutions starts at $35 for a single-attempt posting and $60 for standard service (up to three attempts). Same-day service starts at $150 when you need notice served before a filing deadline. See /pricing for full rates.',
  },
  {
    question: 'Can you serve eviction notices on weekends in Oklahoma?',
    answer:
      'Yes. Oklahoma does not restrict service to business hours. We serve evenings, weekends, and holidays — often when tenants are actually home.',
  },
  {
    question: 'What happens if the tenant refuses the eviction notice?',
    answer:
      'The tenant does not have to accept papers. If we identify the correct person or properly post at the dwelling per Oklahoma law, service is still valid. We document every attempt with photos and GPS coordinates when applicable.',
  },
];

export default function ForLandlordsPage() {
  return (
    <main className="min-h-screen bg-white">
      <UnifiedSchema
        pageType="service"
        url={canonicalUrl}
        title="Process Serving for Landlords | Eviction Notice Service Oklahoma"
        description="Eviction notice and landlord-tenant document service across Oklahoma with GPS-verified proof."
        datePublished={freshness.datePublished}
        dateModified={freshness.dateModified}
        serviceName="Landlord Process Serving"
        serviceType="LegalService"
        telephone="(539) 367-6832"
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org/' },
          { name: 'For Landlords', item: canonicalUrl },
        ]}
        image="https://justlegalsolutions.org/image-pack/images/image-039-eviction-notice-service-hero.webp"
        faqItems={faqs}
      />

      <section className="relative bg-gradient-to-br from-amber-900 to-orange-800 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative h-48 md:h-56 max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-10">
            <Image
              src="/image-pack/images/image-039-eviction-notice-service-hero.webp"
              alt="Process server at an Oklahoma rental property for eviction notice delivery"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 48rem"
            />
          </div>
          <p className="text-sm uppercase tracking-wide text-amber-200 mb-4">Oklahoma Landlords</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Eviction Notice &amp; Court Document Service for Landlords
          </h1>
          <p className="text-lg text-amber-100 max-w-3xl mx-auto mb-8">
            Wrong notice type or bad service can dismiss your case. We serve 5-day, 10-day, and 30-day notices
            with GPS-verified proof so your forcible entry and detainer stays on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5393676832"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-900 font-bold px-8 py-4 rounded-full"
            >
              <Phone className="w-5 h-5" /> (539) 367-6832
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 font-semibold px-8 py-4 rounded-full"
            >
              Request Eviction Service
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-amber-50 border-b border-amber-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            How much does it cost to serve an eviction notice in Oklahoma?
          </h2>
          <p className="text-lg text-gray-800">
            <strong>Eviction notice service in Oklahoma typically starts at $35 for a single-attempt posting and $60 for standard service (up to three attempts).</strong> Same-day service starts at $150 when you are up against a filing deadline. Licensed servers provide GPS-verified affidavits — critical if a tenant claims they were never notified.{' '}
            <Link href="/pricing" className="text-amber-800 font-semibold underline">
              View full pricing →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What We Serve for Landlords</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: FileText, title: '5-Day Pay-or-Quit Notices', desc: 'Nonpayment of rent under 41 O.S. § 131.' },
            { icon: Home, title: '10-Day Cure or Quit', desc: 'Lease violations with statutory notice periods.' },
            { icon: Clock, title: '30-Day Termination', desc: 'Month-to-month and holdover tenancy notices.' },
            { icon: Shield, title: 'FED Summons & Complaints', desc: 'After notice period — court filing service.' },
            { icon: CheckCircle, title: 'Writ of Execution', desc: 'Post-judgment possession documents.' },
            { icon: FileText, title: 'Small Claims & Deposit Disputes', desc: 'Landlord-tenant civil filings statewide.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-slate-200 rounded-xl p-6">
              <Icon className="w-8 h-8 text-amber-700 mb-3" />
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-600">
          Guide:{' '}
          <Link href="/learn/eviction-service-guide" className="text-blue-700 underline">
            Oklahoma eviction service explained
          </Link>
          {' · '}
          <Link href="/resources/oklahoma-eviction-timeline" className="text-blue-700 underline">
            Eviction timeline
          </Link>
        </p>
      </section>

      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Landlord FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white p-5 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Landlord Resources &amp; Services</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <Link href="/process-serving" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-amber-400 transition">
            <span className="font-semibold text-blue-800">Oklahoma Process Serving</span>
            <p className="text-gray-600 mt-1">Eviction notices and FED service statewide</p>
          </Link>
          <Link href="/resources/oklahoma-eviction-timeline" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-amber-400 transition">
            <span className="font-semibold text-blue-800">Eviction Timeline Guide</span>
            <p className="text-gray-600 mt-1">Statutory notice periods and court deadlines</p>
          </Link>
          <Link href="/tulsa-process-server" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-amber-400 transition">
            <span className="font-semibold text-blue-800">Tulsa Process Server</span>
            <p className="text-gray-600 mt-1">Tulsa County landlord-tenant service</p>
          </Link>
          <Link href="/mobile-notary" className="rounded-lg border border-slate-200 bg-white p-4 hover:border-amber-400 transition">
            <span className="font-semibold text-blue-800">Mobile Notary</span>
            <p className="text-gray-600 mt-1">Lease signings and affidavit notarization</p>
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-amber-900 text-white">
        <h2 className="text-2xl font-bold mb-4">Keep Your Eviction on Schedule</h2>
        <p className="max-w-xl mx-auto mb-6 text-amber-100">
          Send the notice type, property address, and deadline. We confirm service method and quote before dispatch.
        </p>
        <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-white text-amber-900 font-bold px-8 py-4 rounded-full">
          <Phone className="w-5 h-5" /> Call (539) 367-6832
        </a>
      </section>
    </main>
  );
}
