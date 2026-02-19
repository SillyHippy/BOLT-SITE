import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { MapPin, FileText, BookOpen, Scale, Phone, Briefcase, ClipboardList, ArrowRight } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Sitemap | Just Legal Solutions — Oklahoma Process Serving',
  description: 'Find every page on Just Legal Solutions. Browse our services, service areas, guides, tools, and resources for Oklahoma process serving.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://justlegalsolutions.org/sitemap'
  }
};

/* ── Section type ────────────────────────────────────────── */
interface SitemapSection {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;           // tailwind color token (e.g. "blue")
  links: { url: string; label: string }[];
}

/* ── Data ────────────────────────────────────────────────── */
const sections: SitemapSection[] = [
  {
    title: 'Get Started',
    description: 'Core pages to learn about us, get pricing, and reach out.',
    icon: <Phone className="w-5 h-5" />,
    color: 'blue',
    links: [
      { url: '/', label: 'Home' },
      { url: '/about', label: 'About Us' },
      { url: '/services', label: 'Our Services' },
      { url: '/pricing', label: 'Pricing' },
      { url: '/contact', label: 'Contact Us' },
      { url: '/payments', label: 'Make a Payment' },
      { url: '/why-choose-us', label: 'Why Choose Us' },
      { url: '/faq', label: 'Frequently Asked Questions' },
      { url: '/leave-review', label: 'Leave a Review' },
      { url: '/card', label: 'Digital Business Card' },
    ],
  },
  {
    title: 'Process Serving',
    description: 'Specialized process serving services across Oklahoma.',
    icon: <Briefcase className="w-5 h-5" />,
    color: 'indigo',
    links: [
      { url: '/tulsa-process-server', label: 'Tulsa Process Server' },
      { url: '/urgent-process-server', label: 'Urgent / Same-Day Service' },
      { url: '/weekend-emergency', label: 'Weekend & Emergency Service' },
      { url: '/courier-services-tulsa', label: 'Courier Services — Tulsa' },
      { url: '/law-firm-services', label: 'Law Firm Services' },
      { url: '/seo/eviction-notice-process-server', label: 'Eviction Notice Service' },
      { url: '/seo/legal-posting-process-server', label: 'Legal Notice Posting' },
      { url: '/seo/what-is-a-process-server', label: 'What Is a Process Server?' },
    ],
  },
  {
    title: 'Tools & Forms',
    description: 'Free tools for process servers and legal professionals.',
    icon: <ClipboardList className="w-5 h-5" />,
    color: 'emerald',
    links: [
      { url: '/affidavit-of-service', label: 'Affidavit of Service Generator' },
      { url: '/field-sheet', label: 'Field Sheet' },
      { url: '/pdf-tools', label: 'Free PDF Tools' },
      { url: '/resources', label: 'All Resources' },
    ],
  },
  {
    title: 'Service Areas — Cities',
    description: 'We serve the greater Tulsa metro and beyond.',
    icon: <MapPin className="w-5 h-5" />,
    color: 'sky',
    links: [
      { url: '/service-areas', label: 'All Service Areas' },
      { url: '/service-areas/broken-arrow', label: 'Broken Arrow' },
      { url: '/service-areas/owasso', label: 'Owasso' },
      { url: '/service-areas/bixby', label: 'Bixby' },
      { url: '/service-areas/jenks', label: 'Jenks' },
      { url: '/service-areas/sand-springs', label: 'Sand Springs' },
      { url: '/service-areas/glenpool', label: 'Glenpool' },
      { url: '/service-areas/collinsville', label: 'Collinsville' },
      { url: '/service-areas/skiatook', label: 'Skiatook' },
      { url: '/service-areas/claremore', label: 'Claremore' },
      { url: '/service-areas/catoosa', label: 'Catoosa' },
      { url: '/service-areas/bartlesville', label: 'Bartlesville' },
      { url: '/service-areas/sapulpa', label: 'Sapulpa' },
      { url: '/service-areas/kellyville', label: 'Kellyville' },
      { url: '/service-areas/bristow', label: 'Bristow' },
      { url: '/service-areas/wagoner', label: 'Wagoner' },
      { url: '/service-areas/coweta', label: 'Coweta' },
      { url: '/service-areas/pawhuska', label: 'Pawhuska' },
      { url: '/service-areas/pryor', label: 'Pryor' },
      { url: '/counties/nowata-county', label: 'Nowata' },
      { url: '/seo/process-server-vinita', label: 'Vinita' },
    ],
  },
  {
    title: 'Service Areas — Counties',
    description: 'County-level process serving across Northeast Oklahoma.',
    icon: <MapPin className="w-5 h-5" />,
    color: 'teal',
    links: [
      { url: '/counties/tulsa-county', label: 'Tulsa County' },
      { url: '/counties/rogers-county', label: 'Rogers County' },
      { url: '/counties/washington-county', label: 'Washington County' },
      { url: '/counties/creek-county', label: 'Creek County' },
      { url: '/counties/wagoner-county', label: 'Wagoner County' },
      { url: '/counties/osage-county', label: 'Osage County' },
      { url: '/counties/mayes-county', label: 'Mayes County' },
    ],
  },
  {
    title: 'Guides & Legal Resources',
    description: 'In-depth guides, checklists, and Oklahoma process serving knowledge.',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'amber',
    links: [
      { url: '/ultimate-guide-process-serving-oklahoma', label: 'Ultimate Guide to Process Serving in Oklahoma' },
      { url: '/process-server-tulsa-guide', label: 'Process Server Tulsa Guide' },
      { url: '/oklahoma-process-server-authority', label: 'Oklahoma Process Server Authority & Regulations' },
      { url: '/oklahoma-process-server-laws', label: 'Oklahoma Process Server Laws' },
      { url: '/oklahoma-vs-texas-process-server', label: 'Oklahoma vs Texas — Process Server Comparison' },
      { url: '/serving-legal-papers-on-tribal-land', label: 'Serving Legal Papers on Tribal Land' },
      { url: '/oklahoma-process-server-best-practices-checklist-2025', label: 'Best Practices Checklist 2025' },
      { url: '/oklahoma-process-server-best-practices-checklist-2026', label: 'Best Practices Checklist 2026' },
      { url: '/oklahoma-legal-service-areas', label: 'Oklahoma Legal Service Areas' },
      { url: '/oklahoma-electronic-service-guide', label: 'Electronic Service Guide' },
      { url: '/oklahoma-case-law-service-process', label: 'Case Law & Service of Process' },
      { url: '/oklahoma-process-server-pricing', label: 'Pricing Guide' },
      { url: '/oklahoma-process-server-technology', label: 'Technology Trends in Process Serving' },
      { url: '/oklahoma-process-server-faq-2026', label: 'Process Server FAQ 2026' },
      { url: '/oklahoma-process-serving-costs-comparison', label: 'Cost Comparison Guide' },
      { url: '/ai-skip-tracing-guide-oklahoma', label: 'AI Skip Tracing Guide' },
      { url: '/process-serving-mistakes-guide', label: 'Common Process Serving Mistakes' },
      { url: '/high-profile-service-protocols-tulsa', label: 'High-Profile Service Protocols' },
      { url: '/family-law-service-guide-tulsa', label: 'Family Law Service Guide — Tulsa' },
    ],
  },
];

/* ── Color map helper ────────────────────────────────────── */
const colorMap: Record<string, { bg: string; bgHover: string; border: string; heading: string; icon: string; link: string }> = {
  blue:    { bg: 'bg-blue-50',    bgHover: 'hover:bg-blue-100',    border: 'border-blue-200',    heading: 'text-blue-900',    icon: 'text-blue-600',    link: 'text-blue-700'    },
  indigo:  { bg: 'bg-indigo-50',  bgHover: 'hover:bg-indigo-100',  border: 'border-indigo-200',  heading: 'text-indigo-900',  icon: 'text-indigo-600',  link: 'text-indigo-700'  },
  emerald: { bg: 'bg-emerald-50', bgHover: 'hover:bg-emerald-100', border: 'border-emerald-200', heading: 'text-emerald-900', icon: 'text-emerald-600', link: 'text-emerald-700' },
  sky:     { bg: 'bg-sky-50',     bgHover: 'hover:bg-sky-100',     border: 'border-sky-200',     heading: 'text-sky-900',     icon: 'text-sky-600',     link: 'text-sky-700'     },
  teal:    { bg: 'bg-teal-50',    bgHover: 'hover:bg-teal-100',    border: 'border-teal-200',    heading: 'text-teal-900',    icon: 'text-teal-600',    link: 'text-teal-700'    },
  amber:   { bg: 'bg-amber-50',   bgHover: 'hover:bg-amber-100',   border: 'border-amber-200',   heading: 'text-amber-900',   icon: 'text-amber-600',   link: 'text-amber-700'   },
};

/* ── Component ───────────────────────────────────────────── */
const SitemapPage = () => {
  const totalLinks = sections.reduce((n, s) => n + s.links.length, 0);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-14">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-3 tracking-tight">Site Map</h1>
          <p className="text-slate-300 text-lg">
            Browse all {totalLinks} pages across {sections.length} categories. Find any service, city, or guide in seconds.
          </p>
        </div>
      </div>

      {/* Quick-jump nav */}
      <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {sections.map((s) => {
            const c = colorMap[s.color];
            return (
              <a
                key={s.title}
                href={`#${s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className={`whitespace-nowrap text-sm font-medium px-3 py-1.5 rounded-full ${c.bg} ${c.link} ${c.bgHover} transition-colors`}
              >
                {s.title}
              </a>
            );
          })}
        </div>
      </nav>

      <main className="container mx-auto px-4 py-10 max-w-6xl space-y-12">
        {sections.map((section) => {
          const c = colorMap[section.color];
          const sectionId = section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

          return (
            <section key={section.title} id={sectionId} className="scroll-mt-20">
              {/* Section header */}
              <div className={`flex items-center gap-3 mb-1`}>
                <span className={`flex items-center justify-center w-9 h-9 rounded-lg ${c.bg} ${c.icon}`}>
                  {section.icon}
                </span>
                <h2 className={`text-2xl font-bold ${c.heading}`}>{section.title}</h2>
              </div>
              <p className="text-slate-500 text-sm mb-5 ml-12">{section.description}</p>

              {/* Link grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {section.links.map(({ url, label }) => (
                  <Link
                    key={url}
                    href={url}
                    className={`group flex items-center gap-2 px-4 py-3 rounded-lg border ${c.border} ${c.bg} ${c.bgHover} transition-all`}
                  >
                    <ArrowRight className={`w-3.5 h-3.5 ${c.icon} opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all`} />
                    <span className={`font-medium ${c.link} group-hover:underline`}>{label}</span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <UnifiedSchema
        pageType="generic"
        url="https://justlegalsolutions.org/sitemap"
        title="Sitemap | Just Legal Solutions"
        description="Sitemap for Just Legal Solutions—navigate all services, resources, and legal support pages in one place."
        organizationDetails={{
          name: "Just Legal Solutions",
          url: "https://justlegalsolutions.org",
          logo: "https://justlegalsolutions.org/logo.png",
          contactPoint: {
            telephone: "+1-539-367-6832",
            email: "info@justlegalsolutions.org"
          },
          address: {
            streetAddress: "564 E 138th PL",
            addressLocality: "Glenpool",
            addressRegion: "OK",
            postalCode: "74033",
            addressCountry: "US"
          }
        }}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 156
        }}
      />
    </>
  )
}

export default SitemapPage;
