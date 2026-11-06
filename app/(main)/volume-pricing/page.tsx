import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Phone, TrendingUp, Users, FileText, Handshake, CheckCircle, Building2, HelpCircle, Layers, Calendar, MapPin } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Volume Process Serving & Bulk Rates Oklahoma | Just Legal Solutions',
  description: 'Volume process serving for Oklahoma firms and businesses. Bulk serve pricing, consolidated invoicing, priority scheduling. Lender program $50 + mileage. Call (539) 367-6832.',
  keywords: 'volume process serving oklahoma, bulk process server rates, high volume process server tulsa, batch process serving oklahoma, wholesale process serving, volume discounts process server',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Volume Process Serving & Bulk Rates Oklahoma',
    description: 'Bulk serve pricing, consolidated invoicing, and priority scheduling for high-volume Oklahoma clients. Lender program $50 + mileage.',
    url: 'https://justlegalsolutions.org/volume-pricing',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: { canonical: 'https://justlegalsolutions.org/volume-pricing' },
  other: {
    'ai-content-type': 'service',
    'ai-summary': 'Volume process serving program for Oklahoma law firms, lenders, collection agencies, and property managers. Bulk rates based on monthly volume and consistency, consolidated invoicing, priority scheduling, and dedicated account management.',
    'ai-key-facts': 'Volume discounts, bulk rates, $50 plus mileage lender program, consolidated invoicing, priority scheduling, dedicated account manager, all 77 Oklahoma counties, (539) 367-6832',
  },
};

const faqs = [
  {
    question: 'How does volume pricing work?',
    answer: 'Rates are based on your monthly volume and consistency. Steady monthly volume gets better rates than one-off batches — we reward programs we can schedule around. Call (539) 367-6832 with your expected monthly volume and we quote your program.',
  },
  {
    question: 'What is the lender program rate?',
    answer: '$50 plus mileage per serve for banks, credit unions, and finance companies. Volume pricing is negotiable from there depending on volume and consistency.',
  },
  {
    question: 'Do you require a contract for volume rates?',
    answer: 'No long-term contracts required. Volume rates are based on actual monthly volume — if the volume is there, the rate holds.',
  },
  {
    question: 'How do we send bulk jobs?',
    answer: 'Use the Submit a Job form per matter, or call to coordinate batch drops and multi-property programs. There is no customer login — your team submits and we schedule.',
  },
  {
    question: 'How does consolidated invoicing work?',
    answer: 'Volume accounts receive one consolidated invoice on a regular cycle (Net-15 available for qualifying firms) instead of per-serve invoices. We align the invoice format with your AP process.',
  },
  {
    question: 'What happens if our volume drops?',
    answer: 'Rates are reviewed together. We do not surprise-bill — if volume changes materially, we talk about it before the next cycle.',
  },
];

const programs = [
  {
    icon: Building2,
    title: 'Lenders, Banks & Credit Unions',
    rate: '$50 + mileage',
    desc: 'Special assets, member recovery, and lender litigation programs. Volume pricing negotiable on volume and consistency.',
    href: '/process-serving-for-lenders',
    cta: 'Lender services',
  },
  {
    icon: Users,
    title: 'Law Firms',
    rate: 'Volume tiers',
    desc: 'Firms with regular monthly serve volume get tiered discounts, priority scheduling, and a dedicated account manager.',
    href: '/for-attorneys',
    cta: 'Attorney services',
  },
  {
    icon: Layers,
    title: 'Collection Agencies',
    rate: 'Volume tiers',
    desc: 'High-volume collection dockets with skip tracing integration and compliance-ready documentation.',
    href: '/process-serving-for-debt-collection',
    cta: 'Collection services',
  },
  {
    icon: Calendar,
    title: 'Property Managers',
    rate: 'Volume tiers',
    desc: 'Eviction notice and FED summons programs across portfolios — per-tenant or coordinated multi-property drops.',
    href: '/process-serving-for-property-managers',
    cta: 'PM services',
  },
];

export default function VolumePricingPage() {
  return (
    <div className="pt-14">
      <UnifiedSchema
        pageType="service"
        pageTitle="Volume Process Serving & Bulk Rates Oklahoma"
        pageDescription="Volume process serving and bulk rates for Oklahoma firms and businesses — consolidated invoicing, priority scheduling, dedicated account management."
        pageUrl="https://justlegalsolutions.org/volume-pricing"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Volume Process Serving', 'Bulk Serve Programs', 'Consolidated Invoicing', 'Lender Programs']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Volume Pricing', url: '/volume-pricing' },
        ]}
        faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
        keywords={['volume process serving', 'bulk process server rates', 'oklahoma volume pricing']}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-14 lg:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Volume Pricing</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="w-6 h-6 text-orange-400" />
              <span className="text-orange-300 font-semibold uppercase tracking-wide text-sm">Volume Programs</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Volume Process Serving &amp; Bulk Rates</h1>
            <p className="text-xl text-blue-100 mb-8">
              High-volume serve programs for Oklahoma firms and businesses — better rates for steady volume, one consolidated invoice, and priority scheduling across all 77 counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:5393676832" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Call for a Volume Quote
              </a>
              <Link href="/submit-a-job" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Submit a Job
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How volume pricing works */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Volume Pricing Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, t: 'Based on volume & consistency', d: 'Steady monthly volume gets better rates than one-off batches. We reward programs we can schedule around.' },
              { icon: FileText, t: 'One consolidated invoice', d: 'Volume accounts get a single consolidated invoice per cycle — Net-15 available for qualifying firms. No per-serve invoice pile.' },
              { icon: CheckCircle, t: 'No long-term contract', d: 'Rates hold on actual volume, not paperwork. If volume changes materially, we talk before the next cycle.' },
            ].map(item => (
              <div key={item.t} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <item.icon className="w-8 h-8 text-blue-700 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{item.t}</h3>
                <p className="text-gray-600 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Programs by Client Type</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map(p => (
              <div key={p.title} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <p.icon className="w-8 h-8 text-blue-700" />
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                </div>
                <div className="text-2xl font-bold text-blue-900 mb-2">{p.rate}</div>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{p.desc}</p>
                <Link href={p.href} className="text-blue-700 hover:text-blue-900 underline font-medium text-sm inline-flex items-center gap-1">
                  {p.cta} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lender callout */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <Handshake className="w-10 h-10 text-blue-700 shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Lender Program: $50 + Mileage</h2>
                <p className="text-gray-700 mb-3">
                  Banks, credit unions, and finance companies: $50 plus mileage per serve, with volume pricing negotiable depending on volume and consistency.
                </p>
                <Link href="/process-serving-for-lenders" className="text-blue-700 hover:text-blue-900 underline font-medium">
                  See lender services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What volume accounts get */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Every Volume Account Gets</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: 'Priority scheduling', d: 'Volume jobs move to the front of the queue.' },
              { t: 'Dedicated account manager', d: 'One point of contact for your whole docket.' },
              { t: 'Batch submission', d: 'Send multiple matters without per-job friction.' },
              { t: 'Statewide coverage', d: 'All 77 Oklahoma counties under one account.' },
            ].map(f => (
              <div key={f.t} className="bg-white border border-slate-200 rounded-lg p-5 text-center">
                <CheckCircle className="w-7 h-7 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{f.t}</h3>
                <p className="text-gray-600 text-xs">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <HelpCircle className="w-7 h-7 text-blue-600" /> Volume Pricing FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Volume Quote</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Call with your expected monthly volume and we quote your program the same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5393676832" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Call (539) 367-6832
            </a>
            <Link href="/submit-a-job" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Submit a Job
            </Link>
          </div>
          <p className="text-blue-200 mt-6 text-sm">
            Single-serve starting rates: <Link href="/pricing" className="underline text-white">pricing page</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
