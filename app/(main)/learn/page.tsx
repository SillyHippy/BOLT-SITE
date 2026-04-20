import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Guides',
  description: 'Comprehensive Oklahoma process serving guides for attorneys, pro se litigants, and legal professionals.',
};

const guides = [
  { href: '/learn/service-by-publication', title: 'Service by Publication Guide', desc: 'Complete step-by-step guide to Oklahoma service by publication, including due diligence requirements and timeline.', category: 'Procedure' },
  { href: '/learn/hb1162-safety-compliance', title: 'HB 1162 Safety & Compliance', desc: 'Process server safety requirements, background checks, and on-the-job protocols under Oklahoma law.', category: 'Safety' },
  { href: '/learn/electronic-filing-service', title: 'Electronic Filing & E-Service', desc: '2024 guide to Oklahoma e-filing pilot and electronic service rules under 12 O.S. § 2004.5.', category: 'Technology' },
  { href: '/learn/uidda-subpoena-domestication', title: 'UIDDA Subpoena Domestication', desc: 'How to domesticate out-of-state subpoenas in Oklahoma under the Uniform Interstate Depositions and Discovery Act.', category: 'Procedure' },
  { href: '/learn/special-population-service', title: 'Special Population Service', desc: 'Serving process on military members (SCRA), incarcerated individuals, minors, and tribal members in Oklahoma.', category: 'Specialized' },
  { href: '/learn/vpo-protective-order-service', title: 'VPO / Protective Order Service', desc: 'How protective orders are served in Oklahoma, including 24-hour priority service requirements.', category: 'Family Law' },
  { href: '/learn/gps-electronic-proof-of-service', title: 'GPS & Electronic Proof of Service', desc: 'Standards for GPS documentation and electronic affidavits accepted by Oklahoma courts.', category: 'Technology' },
  { href: '/learn/attorney-hiring-process-server', title: 'Attorney\'s Guide to Hiring Process Servers', desc: 'Vendor-neutral guide for Oklahoma attorneys on vetting and working with process servers.', category: 'Attorneys' },
  { href: '/learn/eviction-service-guide', title: 'Eviction Service of Process', desc: 'Serving eviction notices in Oklahoma with timeline for the 14-day compressed eviction process.', category: 'Real Estate' },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-navy text-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Legal Guides</h1>
          <p className="text-white/70 text-sm md:text-base max-w-2xl">
            Comprehensive, citation-backed guides to Oklahoma process serving procedures.
          </p>
        </div>
      </div>
      <main className="flex-1 bg-cream py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="card card-hover group"
              >
                <span className="text-xs font-semibold text-gold uppercase tracking-wider">{guide.category}</span>
                <h2 className="font-semibold text-navy group-hover:text-gold transition-colors mb-1 mt-1">{guide.title}</h2>
                <p className="text-sm text-text-muted">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
