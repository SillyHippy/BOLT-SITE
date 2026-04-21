import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  Briefcase,
  Scale,
  FileText,
  Clock,
  CheckCircle,
  Building2,
  DollarSign,
  Users,
  Shield,
  Download,
} from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Process Serving for Attorneys | Just Legal Solutions',
  description: 'Oklahoma process serving for law firms. Volume discounts, Net-15 billing, same-day affidavits. Licensed in all 77 OK counties. Call (539) 367-6832.',
  keywords:
    'process server for attorneys, law firm process server oklahoma, legal document service for attorneys, subpoena service law firms, volume process serving, net-15 billing process server, tulsa attorney services, oklahoma process server law firms',
  other: {
    'ai-content-type': 'professional-service',
    'ai-summary':
      'Just Legal Solutions provides dedicated process serving for Oklahoma law firms. Features include volume account pricing, Net-15 billing, same-day affidavits, bulk document upload, and direct account management. Licensed, bonded, and serving all 77 Oklahoma counties.',
    'ai-key-facts':
      'Volume account discounts, Net-15 billing, same-day affidavits, bulk upload portal, dedicated account manager, licensed in all 77 OK counties, (539) 367-6832',
  },
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
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
  openGraph: {
    title: 'Process Serving for Attorneys | Just Legal Solutions',
    description: 'Oklahoma process serving for law firms. Volume discounts, Net-15 billing, same-day affidavits. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/for-attorneys',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://justlegalsolutions.org/image-pack/images/image-026-for-attorneys-og.png',
        width: 1200,
        height: 630,
        alt: 'Leather briefcase with legal documents on a desk next to reading glasses and a fountain pen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Serving for Attorneys | Just Legal Solutions',
    description: 'Oklahoma process serving for law firms. Volume discounts, Net-15 billing, same-day affidavits.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-026-for-attorneys-og.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/for-attorneys',
  },
};

const faqs = [
  {
    question: 'Do you offer volume discounts for law firms?',
    answer:
      'Yes. We offer tiered volume discounts for law firms based on monthly serve volume. Higher volume means a higher discount percentage, plus priority scheduling and a dedicated account manager. See our pricing page for current rates.',
  },
  {
    question: 'Can you bill our firm Net-15 or Net-30?',
    answer:
      'Absolutely. Approved law firm clients can request Net-15 billing. Net-30 is available for established partnerships with approved credit. We also accept credit cards and ACH for faster turnaround.',
  },
  {
    question: 'How fast do we receive the affidavit of service?',
    answer:
      'Same-day affidavits are standard for all rush and same-day serves. Standard service affidavits are delivered within 24 hours of completion. All affidavits are court-ready, GPS-verified, and notarized when required.',
  },
  {
    question: 'Do you serve all 77 Oklahoma counties?',
    answer:
      'Yes. We are licensed and bonded to serve process in every Oklahoma county, including all tribal jurisdictions with proper coordination.',
  },
  {
    question: 'Can paralegals submit documents directly?',
    answer:
      'Yes. We provide a direct portal link and a dedicated text line for your paralegals and legal assistants. Submit documents, check status, and download affidavits without playing phone tag.',
  },
  {
    question: 'What types of legal documents do you serve?',
    answer:
      'We serve summons and complaints, subpoenas (including subpoena duces tecum), eviction notices, restraining orders, divorce papers, child custody documents, garnishments, writs, and all civil litigation documents.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
};

export default function ForAttorneysPage() {
  return (
    <main className="min-h-screen bg-white">
      <UnifiedSchema
        pageType="service"
        url="https://justlegalsolutions.org/for-attorneys"
        title="Process Serving for Attorneys | Volume Accounts & Same-Day Service | Just Legal Solutions"
        description="Oklahoma process serving built for law firms. Volume account discounts, Net-15 billing, same-day affidavits, and dedicated account support."
        serviceName="Attorney Process Serving"
        serviceType="LegalService"
        telephone="(539) 367-6832"
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org/' },
          { name: 'For Attorneys', item: 'https://justlegalsolutions.org/for-attorneys' },
        ]}
        image="https://justlegalsolutions.org/image-pack/images/image-026-for-attorneys-og.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative h-52 md:h-64 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-10">
            <Image
              src="/image-pack/images/image-025-for-attorneys-hero.png"
              alt="Attorney reviewing case files in a modern Oklahoma law office"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 56rem"
            />
          </div>
          <div className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-1 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
            Built for Oklahoma Law Firms
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Process Serving Built for{' '}
            <span className="text-blue-400">Oklahoma Law Firms</span>
          </h1>
          <p className="speakable-summary text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-8">
            Same-day affidavits. Volume pricing up to <strong>15% off</strong>. Net-15 billing.
            Licensed in all 77 Oklahoma counties. Trusted by attorneys who need it done right the
            first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5393676832"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Call (539) 367-6832
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all"
            >
              Request Firm Partnership
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-400" /> Net-15 / Net-30 Billing
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-400" /> Volume Account Discounts
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-400" /> Same-Day Affidavits
            </span>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-slate-900">156+</div>
            <div className="text-sm text-slate-600">Five-Star Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">77</div>
            <div className="text-sm text-slate-600">Oklahoma Counties</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">24–48hrs</div>
            <div className="text-sm text-slate-600">Standard Turnaround</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">50+</div>
            <div className="text-sm text-slate-600">Years Experience</div>
          </div>
        </div>
      </section>

      {/* Volume Pricing — no dollar amounts, routes to /pricing */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Volume Account Pricing for Law Firms</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The more you trust us with, the more you save. No contracts. No hidden fees.{' '}
            <Link href="/pricing" className="text-blue-600 hover:underline font-semibold">
              View current rates →
            </Link>
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Tier 1 */}
          <div className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold text-lg">
              <Briefcase className="w-5 h-5" /> 10–25 Serves / Mo
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">5% Off</div>
            <p className="text-slate-700 text-sm mb-4">
              Automatic discount on every serve. Priority scheduling included.
            </p>
            <Link
              href="/pricing"
              className="text-blue-600 hover:underline text-sm font-semibold"
            >
              View Base Rates →
            </Link>
          </div>
          {/* Tier 2 */}
          <div className="rounded-2xl border-2 border-blue-600 p-8 bg-white shadow-md ring-1 ring-blue-100">
            <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold text-lg">
              <Scale className="w-5 h-5" /> 26–50 Serves / Mo
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">10% Off</div>
            <p className="text-slate-700 text-sm mb-4">
              Plus a dedicated account manager and direct portal access for your entire team.
            </p>
            <Link
              href="/pricing"
              className="text-blue-600 hover:underline text-sm font-semibold"
            >
              View Base Rates →
            </Link>
          </div>
          {/* Tier 3 */}
          <div className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold text-lg">
              <Building2 className="w-5 h-5" /> 50+ Serves / Mo
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">15% Off</div>
            <p className="text-slate-700 text-sm mb-4">
              Custom billing terms, bulk upload, and white-glove service coordination.
            </p>
            <Link
              href="/pricing"
              className="text-blue-600 hover:underline text-sm font-semibold"
            >
              View Base Rates →
            </Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow transition-all"
          >
            <DollarSign className="w-5 h-5" /> View Full Pricing & Volume Tiers
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Services Attorneys Rely On</h2>
            <p className="text-slate-600">From routine summons to complex tribal-court service, we handle it all.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: 'Subpoena Service',
                desc: 'Personal service, duces tecum, and out-of-state subpoenas with court-ready proof.',
              },
              {
                icon: Clock,
                title: 'Same-Day & Rush',
                desc: 'Same-day attempts and emergency service when deadlines matter most.',
              },
              {
                icon: Shield,
                title: 'Skip Tracing',
                desc: 'Locate evasive defendants with database and field investigation.',
              },
              {
                icon: Users,
                title: 'Tribal Court Coordination',
                desc: 'Proper service on tribal land with Cherokee, Creek, and Chickasaw Nation compliance.',
              },
              {
                icon: DollarSign,
                title: 'Garnishments & Writs',
                desc: 'Execute wage garnishments, bank levies, and writs of execution statewide.',
              },
              {
                icon: CheckCircle,
                title: 'Apostille & eFiling',
                desc: 'Document authentication and electronic filing assistance to keep your case moving.',
              },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3 text-blue-600 font-semibold text-lg">
                  <s.icon className="w-5 h-5" /> {s.title}
                </div>
                <p className="text-slate-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Billing & Resources */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="md:flex gap-10 items-start">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Billing That Works Like a Law Firm</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Net-15 and Net-30 terms available
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Itemized invoices with case references
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Direct portal for document upload and status tracking
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Dedicated text line for your paralegals
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:5393676832"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call to Set Up Billing
              </a>
              <a
                href="/JudicialDirectory.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Judicial Directory
              </a>
            </div>
          </div>
          <div className="md:w-1/2 bg-slate-900 text-white rounded-2xl p-8">
            <blockquote className="text-lg italic mb-4">
              &ldquo;Fast, professional, and reliable. Just Legal Solutions made the process easy and
              stress-free.&rdquo;
            </blockquote>
            <div className="font-semibold">— Sarah T., Tulsa Attorney</div>
            <div className="text-slate-400 text-sm">Family Law Practice</div>
            <div className="mt-6 flex gap-1 text-yellow-400 text-xl">★★★★★</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Attorney FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-slate-200 p-6 group">
                <summary className="font-semibold text-slate-800 cursor-pointer list-none flex justify-between items-center gap-4">
                  {f.question}
                  <span className="text-blue-600 text-xl font-bold group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-700 to-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Add Just Legal Solutions to Your Approved Vendor List
          </h2>
          <p className="text-blue-100 mb-8">
            One call gets you a dedicated account manager, portal access, and volume pricing that
            scales with your caseload.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5393676832"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-full shadow-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Call (539) 367-6832
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all"
            >
              <Mail className="w-5 h-5" />
              Request Partnership
            </Link>
          </div>
          <div className="mt-6">
            <Link href="/pricing" className="text-blue-300 hover:text-white underline underline-offset-2 text-sm transition-colors">
              View current pricing & volume tiers →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
