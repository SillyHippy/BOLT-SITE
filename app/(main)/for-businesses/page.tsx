import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Building2, Clock, CheckCircle, FileText, Shield } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { buildFreshnessMetadata, getPageFreshness } from '@/lib/content-freshness';

const canonicalUrl = 'https://justlegalsolutions.org/for-businesses';
const freshness = getPageFreshness('/for-businesses')!;

export const metadata: Metadata = {
  title: 'Corporate Process Serving Oklahoma | Registered Agent Service',
  description:
    'Process serving for Oklahoma businesses: registered agent service, corporate defendants, subpoenas, and HR/legal compliance documents. Licensed servers, GPS proof. (539) 367-6832.',
  keywords:
    'corporate process server oklahoma, serve business lawsuit, registered agent service oklahoma, serve corporation oklahoma, business subpoena service',
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Process Serving Oklahoma | Registered Agent Service',
    description: 'Process serving for Oklahoma businesses: registered agent service, corporate defendants, subpoenas, and HR/legal compliance documents. Licensed servers, GPS proof. (539) 367-6832.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-002-home-og.webp'],
  },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'Corporate Process Serving | Just Legal Solutions Oklahoma',
    description:
      'Serve corporations, LLCs, and registered agents across Oklahoma with court-ready GPS-verified proof.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://justlegalsolutions.org/image-pack/images/image-010-process-serving-og.webp',
        width: 1200,
        height: 630,
        alt: 'Professional process server delivering legal documents to a business in Oklahoma',
      },
    ],
  },
  other: {
    'ai-content-type': 'professional-service',
    'ai-summary':
      'Just Legal Solutions serves corporations, LLCs, partnerships, and registered agents in Oklahoma under 12 O.S. § 2004. Corporate service on officers, managing agents, or Secretary of State registered agents. Subpoenas, contract disputes, employment matters. Licensed under 12 O.S. § 158.1.',
    'ai-key-facts':
      'Corporate process serving, registered agent service, LLC and corporation defendants, licensed bonded, all 77 counties, GPS affidavits, (539) 367-6832',
    ...buildFreshnessMetadata({
      datePublished: freshness.datePublished,
      dateModified: freshness.dateModified,
    }).other,
  },
};

const faqs = [
  {
    question: 'How do you serve a corporation in Oklahoma?',
    answer:
      'Under 12 O.S. § 2004(3), service on a corporation is typically made on an officer, managing agent, or the registered agent listed with the Oklahoma Secretary of State. We verify the current registered agent before attempting service and document delivery with GPS-verified affidavits.',
  },
  {
    question: 'Can you serve papers at a business after hours?',
    answer:
      'Yes. We serve during evenings and weekends when decision-makers or registered agents are more likely to be reachable. Same-day and rush tiers are available for urgent corporate matters.',
  },
  {
    question: 'Do you handle subpoenas to businesses?',
    answer:
      'Yes. We serve subpoenas duces tecum and witness subpoenas on corporations, LLCs, and individual officers throughout Oklahoma, with proof suitable for trial or deposition settings.',
  },
  {
    question: 'What does corporate process serving cost?',
    answer:
      'Standard service starts at $60 (up to three attempts). Single-attempt posting starts at $35. Rush and same-day options available. Multi-defendant or multi-location serves are quoted upfront.',
  },
];

export default function ForBusinessesPage() {
  return (
    <main className="min-h-screen bg-white">
      <UnifiedSchema
        pageType="service"
        url={canonicalUrl}
        title="Corporate Process Serving Oklahoma | Business & Registered Agent Service"
        description="Serve corporations, LLCs, and registered agents across Oklahoma with licensed GPS-verified process servers."
        datePublished={freshness.datePublished}
        dateModified={freshness.dateModified}
        serviceName="Corporate Process Serving"
        serviceType="LegalService"
        telephone="(539) 367-6832"
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org/' },
          { name: 'For Businesses', item: canonicalUrl },
        ]}
        image="https://justlegalsolutions.org/image-pack/images/image-010-process-serving-og.webp"
        faqItems={faqs}
      />

      <section className="relative bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative h-48 md:h-56 max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-10">
            <Image
              src="/image-pack/images/image-009-process-serving-hero.webp"
              alt="Process server delivering legal documents at an Oklahoma business location"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 48rem"
            />
          </div>
          <p className="text-sm uppercase tracking-wide text-slate-300 mb-4">Corporate &amp; Business Clients</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Corporate Process Serving in Oklahoma
          </h1>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto mb-8">
            Serve LLCs, corporations, partnerships, and registered agents with proper 12 O.S. § 2004 service —
            verified registered-agent records, GPS proof, and affidavits your counsel can file.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5393676832"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 font-bold px-8 py-4 rounded-full"
            >
              <Phone className="w-5 h-5" /> (539) 367-6832
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 font-semibold px-8 py-4 rounded-full"
            >
              Request Corporate Service
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-blue-50 border-b border-blue-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Who can serve papers on a business in Oklahoma?</h2>
          <p className="text-lg text-gray-800">
            <strong>Any person 18 or older who is not a party may serve process, but corporate service must follow 12 O.S. § 2004 — usually on an officer, managing agent, or the Secretary of State registered agent.</strong> Licensed private process servers under 12 O.S. § 158.1 verify agent records, attempt service correctly, and provide GPS-verified affidavits if service is challenged.{' '}
            <Link href="/blog/can-process-server-serve-business-oklahoma" className="text-blue-800 font-semibold underline">
              Read the business service guide →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Business Documents We Serve</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Building2, title: 'Registered Agent Service', desc: 'Secretary of State agent of record for LLCs and corporations.' },
            { icon: FileText, title: 'Contract & Commercial Lawsuits', desc: 'Summons and complaints on business entities.' },
            { icon: Shield, title: 'Employment & HR Matters', desc: 'EEOC, wage claims, and workplace litigation papers.' },
            { icon: Clock, title: 'Subpoenas Duces Tecum', desc: 'Document production demands on companies.' },
            { icon: CheckCircle, title: 'Garnishments & Levies', desc: 'Post-judgment collection on business accounts.' },
            { icon: FileText, title: 'HOA & Property Management', desc: 'Association and management company defendants.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-slate-200 rounded-xl p-6">
              <Icon className="w-8 h-8 text-blue-700 mb-3" />
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link href="/for-attorneys" className="text-blue-700 underline font-medium">
            Law firm volume accounts →
          </Link>
          {' · '}
          <Link href="/attorney-services" className="text-blue-700 underline font-medium">
            Attorney services hub
          </Link>
        </p>
      </section>

      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Corporate Service FAQ</h2>
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

      <section className="py-16 px-6 text-center bg-slate-900 text-white">
        <h2 className="text-2xl font-bold mb-4">Serve Your Corporate Defendant Correctly the First Time</h2>
        <p className="max-w-xl mx-auto mb-6 text-slate-300">
          Provide entity name, registered agent if known, and preferred deadline. We confirm method and quote before dispatch.
        </p>
        <Link href="/pricing" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 font-bold px-8 py-4 rounded-full">
          View Pricing
        </Link>
      </section>
    </main>
  );
}
