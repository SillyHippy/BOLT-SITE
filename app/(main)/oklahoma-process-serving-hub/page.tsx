import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Oklahoma Process Serving — Free Tools & Guides',
  description:
    'Free calculators, wizards, and legal guides for Oklahoma service of process — deadlines, publication, e-service, subpoenas, evictions, and more. Just Legal Solutions.',
  alternates: { canonical: 'https://justlegalsolutions.org/oklahoma-process-serving-hub' },
  openGraph: {
    title: 'Oklahoma Process Serving — Free Tools & Guides | Just Legal Solutions',
    description:
      'Free Oklahoma process serving calculators and citation-backed guides for attorneys and the public.',
    url: 'https://justlegalsolutions.org/oklahoma-process-serving-hub',
    siteName: 'Just Legal Solutions',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-009-process-serving-hero.webp', width: 1200, height: 630, alt: 'Just Legal Solutions' }],
  },
};

const tools = [
  { href: '/oklahoma-tools/service-deadline-calculator', title: 'Service Deadline Calculator', desc: 'Calculate 180-day, 20-day answer & other critical Oklahoma deadlines with court holiday adjustments.' },
  { href: '/oklahoma-tools/service-method-wizard', title: 'Service Method Wizard', desc: 'Answer 5 questions to get the right service method recommendation for your case.' },
  { href: '/oklahoma-tools/process-serving-cost-estimator', title: 'Cost Estimator', desc: 'Estimate process serving costs across all 77 Oklahoma counties.' },
  { href: '/oklahoma-tools/subpoena-witness-fee-calculator', title: 'Witness Fee Calculator', desc: 'Calculate witness fees & mileage for Oklahoma subpoenas.' },
  { href: '/oklahoma-tools/e-service-validity-checker', title: 'E-Service Validity Checker', desc: 'Check if electronic service is valid for your Oklahoma case.' },
  { href: '/oklahoma-tools/rush-emergency-cost-calculator', title: 'Rush Cost Calculator', desc: 'Compare rush, same-day & emergency serving costs.' },
  { href: '/oklahoma-tools/publication-timeline-calculator', title: 'Publication Timeline Calculator', desc: 'Plan your service by publication schedule and costs.' },
  { href: '/oklahoma-tools/can-i-serve-my-own-papers', title: 'Can I Serve My Own Papers?', desc: 'Find out if you can serve your own legal papers in Oklahoma.' },
];

const guides = [
  { href: '/learn/service-by-publication', title: 'Service by Publication Guide', desc: 'Step-by-step guide to Oklahoma service by publication.' },
  { href: '/learn/hb1162-safety-compliance', title: 'HB 1162 Safety Guide', desc: 'Process server safety requirements under Oklahoma law.' },
  { href: '/learn/electronic-filing-service', title: 'Electronic Filing & E-Service', desc: '2024 guide to Oklahoma e-filing and electronic service rules.' },
  { href: '/learn/uidda-subpoena-domestication', title: 'UIDDA Subpoena Domestication', desc: 'How to domesticate out-of-state subpoenas in Oklahoma.' },
  { href: '/learn/special-population-service', title: 'Special Population Service', desc: 'Serving military, incarcerated, minors & tribal members.' },
  { href: '/learn/vpo-protective-order-service', title: 'VPO Service Guide', desc: 'How protective orders are served in Oklahoma.' },
  { href: '/learn/gps-electronic-proof-of-service', title: 'GPS & Electronic Proof', desc: 'Standards for GPS and electronic proof of service.' },
  { href: '/learn/attorney-hiring-process-server', title: 'Hiring a Process Server', desc: 'Attorney\'s guide to vetting Oklahoma process servers.' },
  { href: '/learn/eviction-service-guide', title: 'Eviction Service Guide', desc: 'Serving eviction notices in Oklahoma\'s 14-day process.' },
];

export default function OklahomaProcessServingHubPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/favicon1.svg" alt="Just Legal Solutions" width={48} height={48} className="rounded" />
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Oklahoma Process Serving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Free Tools & Resources for Oklahoma Process Serving
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl">
              Calculators, step-by-step guides, and interactive tools built for Oklahoma attorneys,
              pro se litigants, and process servers. No account required.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/oklahoma-tools" className="btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Browse Tools
              </Link>
              <Link href="/learn" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-navy">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Read Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-navy">8</p>
              <p className="text-sm text-text-muted">Interactive Tools</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-navy">9</p>
              <p className="text-sm text-text-muted">In-Depth Guides</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-navy">77</p>
              <p className="text-sm text-text-muted">Counties Covered</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-navy">100%</p>
              <p className="text-sm text-text-muted">Free to Use</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-1">Interactive Tools</h2>
              <p className="text-text-muted">Calculators, wizards, and decision aids</p>
            </div>
            <Link href="/oklahoma-tools" className="text-sm font-semibold text-navy hover:text-gold transition-colors hidden md:inline-flex items-center gap-1">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.slice(0, 8).map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="card card-hover group"
              >
                <h3 className="font-semibold text-navy group-hover:text-gold transition-colors mb-1">{tool.title}</h3>
                <p className="text-sm text-text-muted">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-1">Legal Guides</h2>
              <p className="text-text-muted">Step-by-step Oklahoma process serving guides</p>
            </div>
            <Link href="/learn" className="text-sm font-semibold text-navy hover:text-gold transition-colors hidden md:inline-flex items-center gap-1">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="card card-hover group"
              >
                <h3 className="font-semibold text-navy group-hover:text-gold transition-colors mb-1">{guide.title}</h3>
                <p className="text-sm text-text-muted">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Process Serving Help?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Just Legal Solutions serves all 77 Oklahoma counties with licensed, bonded process servers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:539-367-6832" className="btn-primary !bg-gold !text-navy hover:!bg-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (539) 367-6832
            </a>
            <a href="mailto:info@JustLegalSolutions.org" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-navy">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
          <p className="mt-6 text-sm text-white/40">
            Licensed & bonded process servers | All 77 Oklahoma counties
          </p>
        </div>
      </section>

      <UnifiedSchema
        pageType="generic"
        pageTitle="Oklahoma Process Serving — Free Tools & Guides"
        pageDescription="Free calculators, wizards, and legal guides for Oklahoma service of process."
        pageUrl="https://justlegalsolutions.org/oklahoma-process-serving-hub"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Oklahoma process serving hub', url: '/oklahoma-process-serving-hub' },
        ]}
      />
    </div>
  );
}
