import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, Clock, CheckCircle, FileText, MapPin, ShieldCheck, HelpCircle } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Submit a Job | Oklahoma Process Serving Intake — Just Legal Solutions',
  description: 'Submit a process serving job to Just Legal Solutions. Use our serve request form — no customer login. Or call or text (539) 367-6832.',
  keywords: 'submit process serving job oklahoma, serve request form, process server intake tulsa, send legal documents for service, oklahoma process serving submission',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Submit a Job | Oklahoma Process Serving Intake',
    description: 'Send the details and documents to Just Legal Solutions. No customer account signup. Call or text (539) 367-6832.',
    url: 'https://justlegalsolutions.org/submit-a-job',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: { canonical: 'https://justlegalsolutions.org/submit-a-job' },
  other: {
    'ai-content-type': 'service',
    'ai-summary': 'Job intake page for Just Legal Solutions process serving. Submit a serve request with case details and documents, receive confirmation when the request is accepted, no login required. Phone and email fallbacks available.',
    'ai-key-facts': 'Serve request form, no login, PDF/JPG/PNG uploads, confirmation on acceptance, call or text (539) 367-6832, info@justlegalsolutions.org',
  },
};

const faqs = [
  {
    question: 'Is this a client login?',
    answer: 'No. It is a job request form. There is no customer account to create — you send the details, we take it from there.',
  },
  {
    question: 'What file types work for document uploads?',
    answer: 'PDF, JPG, and PNG files up to 25MB per file. If your packet is in another format, email it to info@justlegalsolutions.org with the case number in the subject.',
  },
  {
    question: 'Why are there so many required fields?',
    answer: 'Affidavits and dispatch need a quality caption, the name of the person or business to serve, and a serviceable address. If you are stuck on any field, call or text (539) 367-6832 and we will help take the job.',
  },
  {
    question: 'How do I know my request was accepted?',
    answer: 'The confirmation on this page appears only when your request is accepted into our intake system. An email notification alone does not mean the job was accepted — the on-page confirmation is the real signal.',
  },
  {
    question: 'I already work with Just Legal Solutions. Do I still use the form?',
    answer: 'Yes — submit through this form or use your usual phone, text, or email contact. Repeat submissions are handled by our team; the form does not merge accounts in the browser.',
  },
  {
    question: 'Can I get pricing before I submit?',
    answer: 'Yes. The pricing page shows starting rates. Final cost can depend on location, attempts, timing, and add-ons.',
  },
];

const checklist = [
  { icon: FileText, text: 'Your name, firm or company, phone, and email' },
  { icon: MapPin, text: 'Person or business to serve, plus service address' },
  { icon: FileText, text: 'Case number (if known) and court information' },
  { icon: CheckCircle, text: 'Plaintiff / defendant caption fields' },
  { icon: FileText, text: 'Document titles as they should appear on the affidavit' },
  { icon: FileText, text: 'PDF/JPG/PNG packet — or plan to email it right after' },
  { icon: Clock, text: 'Desired service level (standard / rush / same-day)' },
];

export default function SubmitAJobPage() {
  return (
    <div className="pt-14">
      <UnifiedSchema
        pageType="service"
        pageTitle="Submit a Job | Oklahoma Process Serving Intake"
        pageDescription="Submit a process serving job to Just Legal Solutions — serve request form, no login, phone and email fallbacks."
        pageUrl="https://justlegalsolutions.org/submit-a-job"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Process Serving Intake', 'Serve Request Form', 'Document Upload']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Submit a Job', url: '/submit-a-job' },
        ]}
        faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
        keywords={['submit process serving job', 'serve request form', 'oklahoma process serving intake']}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-14 lg:py-20">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="text-blue-300">/</span>
            <span className="text-white font-medium">Submit a Job</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Submit a Process Serving Job</h1>
            <p className="text-xl text-blue-100 mb-8">
              Send the details and documents to Just Legal Solutions. No customer account signup.
              Prefer phone? Call or text <a href="tel:5393676832" className="underline hover:text-white">(539) 367-6832</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Open the Serve Request Form
              </a>
              <a href="tel:5393676832" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Call (539) 367-6832
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-slate-100 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-700">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-600" /> Oklahoma process serving</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-blue-600" /> Confirmation when intake accepts your request</span>
            <span className="inline-flex items-center gap-1.5"><Phone className="w-4 h-4 text-blue-600" /> Phone and email fallbacks</span>
            <Link href="/pricing" className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-900 underline">Starting rates</Link>
          </div>
        </div>
      </section>

      {/* Before you start */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Before You Start</h2>
          <p className="text-gray-700 mb-8">Have these ready — complete information means faster dispatch and a cleaner affidavit.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
                <item.icon className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span className="text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The form */}
      <section className="pb-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-2">
            <p className="text-gray-800">
              The Serve Request Form is at the bottom of this page{' '}
              <a href="#contact" className="text-blue-700 hover:text-blue-900 underline font-medium">— jump to it now</a>.
              This is a <strong>service request</strong>, not a login. Required fields are marked.
              If upload fails, email the packet to <a href="mailto:info@justlegalsolutions.org" className="text-blue-700 hover:text-blue-900 underline">info@justlegalsolutions.org</a> with the case number in the subject.
            </p>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Happens Next</h2>
          <div className="space-y-6">
            {[
              { n: 1, t: 'You submit the request', d: 'Fill out the Serve Request Form and attach your documents (PDF, JPG, or PNG).' },
              { n: 2, t: 'You see confirmation when it is accepted', d: 'The on-page confirmation appears only when your request is accepted into our intake system. An email notification alone does not mean the job was accepted.' },
              { n: 3, t: 'Our team reviews the packet', d: 'We review the details and follow up by phone or email if we need anything else.' },
              { n: 4, t: 'We attempt service and prepare proof', d: 'Service is attempted per your selected level, and proof of service is prepared for your file.' },
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
          <p className="text-sm text-gray-600 mt-8 bg-white border border-slate-200 rounded-lg p-4">
            We do not promise instantaneous dispatch, guaranteed service completion, or an automatic invoice at the moment you click submit.
          </p>
        </div>
      </section>

      {/* Other ways */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Other Ways to Send Work</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <a href="tel:5393676832" className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg p-5 hover:border-blue-400 transition-colors">
              <Phone className="w-6 h-6 text-blue-600 shrink-0" />
              <div><div className="font-semibold text-gray-900">Call</div><div className="text-gray-600 text-sm">(539) 367-6832</div></div>
            </a>
            <a href="sms:5393676832" className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg p-5 hover:border-blue-400 transition-colors">
              <Phone className="w-6 h-6 text-blue-600 shrink-0" />
              <div><div className="font-semibold text-gray-900">Text</div><div className="text-gray-600 text-sm">(539) 367-6832</div></div>
            </a>
            <a href="mailto:info@justlegalsolutions.org" className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg p-5 hover:border-blue-400 transition-colors">
              <Mail className="w-6 h-6 text-blue-600 shrink-0" />
              <div><div className="font-semibold text-gray-900">Email</div><div className="text-gray-600 text-sm">info@justlegalsolutions.org</div></div>
            </a>
          </div>
          <p className="text-gray-600 mt-6 text-sm">
            For general questions, use the <Link href="/contact" className="text-blue-700 hover:text-blue-900 underline">contact page</Link> — prefer this page for job tickets.
          </p>
        </div>
      </section>

      {/* Privacy */}
      <section className="pb-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-gray-800 text-sm">
                <strong>Privacy &amp; sensitive data:</strong> upload only documents needed for service.
                Avoid putting full Social Security numbers or full primary account numbers in text fields — use matter IDs instead.
                See our <Link href="/privacy-policy" className="text-blue-700 hover:text-blue-900 underline">privacy policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <HelpCircle className="w-7 h-7 text-blue-600" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — the (main) layout renders the Footer (with the form) right below */}
      <section className="py-14 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Send the Job?</h2>
          <p className="text-xl text-blue-100 mb-8">The Serve Request Form is directly below this section.</p>
          <a href="#contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Open the Serve Request Form
          </a>
          <p className="text-blue-200 mt-6 text-sm">
            Need help finishing the form? Call or text <a href="tel:5393676832" className="underline text-white">(539) 367-6832</a>.
            Starting rates: <Link href="/pricing" className="underline text-white">pricing page</Link>.
          </p>
          <p className="text-blue-300 mt-8 text-sm">
            Related: <Link href="/for-attorneys" className="underline hover:text-white">For Attorneys</Link> ·{' '}
            <Link href="/process-serving-for-debt-collection" className="underline hover:text-white">Debt Collection</Link> ·{' '}
            <Link href="/process-serving-for-lenders" className="underline hover:text-white">Lenders &amp; Credit Unions</Link> ·{' '}
            <Link href="/process-serving-for-property-managers" className="underline hover:text-white">Property Managers</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
