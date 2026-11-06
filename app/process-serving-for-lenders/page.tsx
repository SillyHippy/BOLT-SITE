import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle, Shield, Scale, Clock, FileText, Building2, Users, MapPin, TrendingUp, HelpCircle, Landmark, Handshake, DollarSign } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Process Serving for Oklahoma Banks, Credit Unions & Lenders',
  description: 'Process serving for bank special assets, credit-union recovery, and lenders. Litigation, replevin, and related papers as directed by counsel. Send a job or call (539) 367-6832.',
  keywords: 'process server for banks oklahoma, credit union process serving, lender process server, replevin service oklahoma, special assets process serving, bank litigation service tulsa',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Process Serving for Oklahoma Banks, Credit Unions & Lenders',
    description: 'Recovery and special-assets teams: reliable service of process across Oklahoma counties with a clear intake path.',
    url: 'https://justlegalsolutions.org/process-serving-for-lenders',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Serving for Oklahoma Banks, Credit Unions & Lenders',
    description: 'Recovery and special-assets teams: reliable service of process across Oklahoma counties.',
  },
  alternates: { canonical: 'https://justlegalsolutions.org/process-serving-for-lenders' },
  other: {
    'ai-content-type': 'service',
    'ai-summary': 'Process serving for Oklahoma banks, credit unions, and finance companies. Special assets, member recovery, replevin, and litigation papers served as directed by counsel, with volume rates for lender programs.',
    'ai-key-facts': 'Banks, credit unions, finance companies, special assets, replevin, $50 plus mileage lender rate, volume pricing available, statewide Oklahoma, (539) 367-6832',
  },
};

const faqs = [
  {
    question: 'Banks and credit unions — same process?',
    answer: 'Yes for intake. Differences are usually internal compliance paperwork, not a separate serving product. Credit-union recovery teams often share the same operational needs as bank special-assets teams — outside counsel packets, member address changes, multi-county defendants.',
  },
  {
    question: 'What are your rates for lenders and credit unions?',
    answer: 'Lender program rate: $50 plus mileage per serve. Volume pricing is negotiable depending on volume and consistency — recurring programs with steady monthly volume get better rates. Call (539) 367-6832 to align invoice format and affidavit delivery for your program.',
  },
  {
    question: 'Do you handle foreclosure timelines?',
    answer: 'We serve documents as directed and attempt within the selected service level. Court and statutory timelines are counsel\u2019s responsibility. We do not promise foreclosure outcomes.',
  },
  {
    question: 'Can outside counsel submit for us?',
    answer: 'Yes. The form captures firm/company and contact phone/email for confirmations, so your counsel can submit directly on your behalf.',
  },
  {
    question: 'Is there a lender login or portal?',
    answer: 'No customer software login is required. Use the Serve Request Form, or have your team call, text, or email. If your credit union requires vendor onboarding paperwork, say so when you call.',
  },
  {
    question: 'Where can I read more about lender service?',
    answer: 'See our banks and lenders process serving guide — educational only, not legal advice. Your counsel selects the papers; we effect service and document attempts.',
  },
];

const docTypes = [
  'Litigation summons or complaints involving borrowers or guarantors',
  'Replevin or possessory actions as directed by counsel',
  'Deficiency and related collection litigation service',
  'Subpoenas for records or testimony',
  'Post-judgment enforcement papers your counsel directs',
];

export default function ProcessServingForLenders() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema
          pageType="service"
          pageTitle="Process Serving for Oklahoma Banks, Credit Unions & Lenders"
          pageDescription="Process serving for bank special assets, credit-union recovery, and lenders — litigation, replevin, and related papers as directed by counsel, with volume rates."
          pageUrl="https://justlegalsolutions.org/process-serving-for-lenders"
          siteName="Just Legal Solutions"
          reviewCount={156}
          services={['Process Serving for Lenders', 'Replevin Service', 'Special Assets Service', 'Credit Union Recovery Service']}
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'Process Serving for Lenders', url: '/process-serving-for-lenders' },
          ]}
          faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
          keywords={['process server for banks', 'credit union process serving', 'lender process server oklahoma', 'replevin service']}
        />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-blue-200 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Process Serving for Lenders</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <Landmark className="w-6 h-6 text-orange-400" />
                <span className="text-orange-300 font-semibold uppercase tracking-wide text-sm">Lender Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Process Serving for Oklahoma Banks, Credit Unions &amp; Lenders</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Recovery and special-assets teams need reliable service of process across counties — with a clear intake path your counsel and ops staff can use the same day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/submit-a-job" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Submit a Job
                </Link>
                <a href="tel:5393676832" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Call (539) 367-6832
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Who This Page Is For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Landmark, title: 'Community & Regional Banks', desc: 'Special assets, retail recovery, commercial workout.' },
                { icon: Users, title: 'Credit Unions', desc: 'Member recovery and collections counsel packets.' },
                { icon: DollarSign, title: 'Finance Companies', desc: 'Non-bank lenders and specialty finance programs.' },
              ].map(c => (
                <div key={c.title} className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center">
                  <c.icon className="w-10 h-10 text-blue-700 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-8 max-w-3xl mx-auto text-center">
              Collection agencies that are not the originating creditor should use our{' '}
              <Link href="/process-serving-for-debt-collection" className="text-blue-700 hover:text-blue-900 underline">debt collection page</Link>.
              Law firms counseling lenders can also use <Link href="/for-attorneys" className="text-blue-700 hover:text-blue-900 underline">For Attorneys</Link>.
            </p>
          </div>
        </section>

        {/* Lender rates */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white border border-blue-200 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-7 h-7 text-blue-700" />
                <h2 className="text-3xl font-bold text-gray-900">Lender Program Rates</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="text-5xl font-bold text-blue-900 mb-2">$50<span className="text-xl text-gray-500 font-medium"> + mileage</span></div>
                  <p className="text-gray-700">Per serve for lender programs — banks, credit unions, and finance companies.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Handshake className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <p className="text-gray-800"><strong>Volume pricing:</strong> negotiable depending on volume and consistency. Recurring programs with steady monthly volume get better rates.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <p className="text-gray-800"><strong>Consolidated invoicing:</strong> align invoice format and affidavit delivery for your program — call to set up.</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 border-t border-slate-200 pt-4">
                Starting rates for all services are on the <Link href="/pricing" className="text-blue-700 hover:text-blue-900 underline">pricing page</Link>.
                Final cost depends on location, attempts, timing, and add-ons.
              </p>
            </div>
          </div>
        </section>

        {/* Common document types */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Document Types</h2>
            <p className="text-gray-700 mb-8">Teams commonly ask us to serve papers related to:</p>
            <div className="space-y-3">
              {docTypes.map(d => (
                <div key={d} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-gray-800">{d}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              We do not provide legal advice on which notice or method is required. Your counsel selects the papers; we effect service and document attempts.
            </p>
          </div>
        </section>

        {/* Credit unions */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Credit Unions</h2>
            <p className="text-gray-700 mb-4">
              Credit-union recovery teams often share the same operational needs as banks — outside counsel packets, member address changes, multi-county defendants.
              Use the same Serve Request Form path.
            </p>
            <p className="text-gray-700">
              If your credit union requires vendor onboarding paperwork, say so when you call — we will work with your procurement process.
            </p>
          </div>
        </section>

        {/* How intake works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How Intake Works for Lenders</h2>
            <div className="space-y-6">
              {[
                { n: 1, t: 'Open the Serve Request Form', d: 'Include hiring contact, caption, person or business to serve, addresses, and documents. Use the Submit a Job page.' },
                { n: 2, t: 'Use matter IDs, not full account numbers', d: 'Prefer including matter or loan references your team needs on invoices in special instructions. Avoid pasting full Social Security numbers or full primary account numbers into free-text fields.' },
                { n: 3, t: 'For recurring programs, call to align', d: 'We align invoice format and affidavit delivery with your program — one call sets up the whole account.' },
              ].map(step => (
                <div key={step.n} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold shrink-0">{step.n}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.t}</h3>
                    <p className="text-gray-700">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why JLS */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Just Legal Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: MapPin, title: 'Oklahoma Focus', desc: 'Statewide county coverage — all 77 Oklahoma counties.' },
                { icon: FileText, title: 'Web Intake', desc: 'Submit jobs online, plus phone and text.' },
                { icon: Shield, title: 'Documentation Options', desc: 'GPS, time, and photo documentation when captured on the assignment.' },
                { icon: Scale, title: 'Skip Tracing', desc: 'Related skip tracing when addresses fail.' },
              ].map(f => (
                <div key={f.title} className="bg-white border border-slate-200 rounded-lg p-6 text-center">
                  <f.icon className="w-9 h-9 text-blue-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-blue-600" /> Frequently Asked Questions
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
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Keep Your Recovery Docket Moving</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Bank special assets, credit-union recovery, and lender litigation papers served as directed by counsel — with volume rates for your program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/submit-a-job" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Submit a Job
              </Link>
              <a href="tel:5393676832" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Call (539) 367-6832
              </a>
            </div>
            <p className="text-blue-200 mt-8 text-sm">
              Educational guide: <Link href="/blog/banks-lenders-process-serving-oklahoma" className="underline hover:text-white">banks &amp; lenders process serving in Oklahoma</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
