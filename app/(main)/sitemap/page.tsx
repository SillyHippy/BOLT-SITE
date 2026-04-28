import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, FileText, BookOpen, Scale, Phone, Briefcase, ClipboardList, ArrowRight, Stamp, Newspaper } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Find every page on Just Legal Solutions. Browse our services, service areas, guides, tools, and resources for Oklahoma process serving.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://justlegalsolutions.org/sitemap'
  },
  openGraph: {
    title: 'Sitemap',
    description: 'Find every page on Just Legal Solutions. Browse our services, service areas, guides, tools, and resources for Oklahoma process serving.',
    url: 'https://justlegalsolutions.org/sitemap',
    siteName: 'Just Legal Solutions',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-002-home-og.png', width: 1200, height: 630, alt: 'Just Legal Solutions - Professional Process Serving in Oklahoma' }],
  },
};

/* ── Section type ────────────────────────────────────────── */
interface SitemapSection {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;           // tailwind color token (e.g. "blue")
  links: { url: string; label: string }[];
}

const routeLabelOverrides: Record<string, string> = {
  '/': 'Home',
  '/seo-dashboard': 'SEO Dashboard',
  '/oklahoma-tools': 'Oklahoma Tools Hub',
};

const humanizeRoute = (url: string): string => {
  if (routeLabelOverrides[url]) return routeLabelOverrides[url];

  const clean = url.replace(/^\/+|\/+$/g, '');
  if (!clean) return 'Home';

  return clean
    .split('/')
    .map((segment) =>
      segment
        .split('-')
        .map((word) => {
          const upper = word.toUpperCase();
          if (['SEO', 'GPS', 'HB', 'UIDDA'].includes(upper)) return upper;
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ')
    )
    .join(' - ');
};

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
      { url: '/pricing', label: 'Pricing' },
      { url: '/contact', label: 'Contact Us' },
      { url: '/payments', label: 'Make a Payment' },
      { url: '/why-choose-us', label: 'Why Choose Us' },
      { url: '/videos', label: '▶ Video Guides (48+ Videos)' },
      { url: '/ultimate-guide-process-serving-oklahoma', label: 'Frequently Asked Questions' },
      { url: '/join-our-network', label: 'Join Our Network' },
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
      { url: '/process-serving', label: 'Process Serving Overview' },
      { url: '/process-server-near-me', label: 'Process Server Near Me' },
      { url: '/same-day-process-server', label: 'Same-Day Process Server' },
      { url: '/urgent-process-server', label: 'Urgent / Same-Day Service' },
      { url: '/weekend-emergency', label: 'Weekend & Emergency Service' },
      { url: '/courier-services', label: 'Courier Services' },
      { url: '/courier-services-tulsa', label: 'Courier Services — Tulsa' },
      { url: '/skip-tracing', label: 'Skip Tracing' },
      { url: '/subpoena-service', label: 'Subpoena Service' },
      { url: '/courthouse-filing-services', label: 'Courthouse Filing Services' },
      { url: '/gps-tracked-process-serving', label: 'GPS Tracked Process Serving' },
      { url: '/process-serving-for-debt-collection', label: 'Process Serving for Debt Collection' },
      { url: '/process-serving-for-insurance-companies', label: 'Process Serving for Insurance Companies' },
      { url: '/process-serving-for-property-managers', label: 'Process Serving for Property Managers' },
      { url: '/rush-vs-standard-vs-same-day-service', label: 'Rush vs Standard vs Same-Day Service' },
      { url: '/law-firm-services', label: 'Law Firm Services' },
      { url: '/attorney-services', label: 'Attorney Services' },
      { url: '/bankruptcy-process-serving-oklahoma', label: 'Bankruptcy Process Serving' },
      { url: '/process-server-safety-guide-oklahoma', label: 'Process Server Safety Guide' },
      { url: '/broken-arrow-process-server', label: 'Broken Arrow Process Server' },
      { url: '/seo/eviction-notice-process-server', label: 'Eviction Notice Service' },
      { url: '/seo/legal-posting-process-server', label: 'Legal Notice Posting' },
      { url: '/seo/what-is-a-process-server', label: 'What Is a Process Server?' },
    ],
  },
  {
    title: 'Notary Services',
    description: 'Oklahoma notary public services — in-office, mobile, and remote online notarization.',
    icon: <Stamp className="w-5 h-5" />,
    color: 'green',
    links: [
      { url: '/notary', label: 'Notary Services' },
      { url: '/notary/joseph', label: "Joseph's Credentials" },
      { url: '/mobile-notary', label: 'Mobile Notary' },
      { url: '/mobile-notary-tulsa', label: 'Mobile Notary Tulsa' },
      { url: '/mobile-notary-oklahoma-city', label: 'Mobile Notary Oklahoma City' },
      { url: '/mobile-notary-broken-arrow', label: 'Mobile Notary Broken Arrow' },
      { url: '/mobile-notary-norman', label: 'Mobile Notary Norman' },
      { url: '/mobile-notary-edmond', label: 'Mobile Notary Edmond' },
      { url: '/mobile-notary-lawton', label: 'Mobile Notary Lawton' },
      { url: '/mobile-notary-vs-bank', label: 'Mobile Notary vs Bank Notary' },
      { url: '/what-to-bring', label: 'What to Bring to Your Appointment' },
      { url: '/remote-online-notary', label: 'Remote Online Notarization (RON)' },
      { url: '/hospital-notary', label: 'Hospital & Jail Notary' },
      { url: '/real-estate-notary', label: 'Real Estate & Loan Signing' },
      { url: '/immigration-document-notary-oklahoma', label: 'Immigration Document Notary' },
      { url: '/notary/tulsa-county', label: 'Tulsa County Notary' },
      { url: '/notary/creek-county', label: 'Creek County Notary' },
      { url: '/wedding-officiant', label: 'Wedding Officiant Services' },
      { url: '/apostille', label: 'Apostille Services' },
      { url: '/power-of-attorney-notary-oklahoma', label: 'Power of Attorney Notarization' },
      { url: '/title-company-notary-services', label: 'Title Company Notary Services' },
      { url: '/loan-signing-agent-tulsa', label: 'Loan Signing Agent — Tulsa' },
      { url: '/notary-faqs', label: 'Notary FAQs (50+)' },
      { url: '/notary-laws', label: 'Oklahoma Notary Laws Guide' },
    ],
  },
  {
    title: 'Tools & Forms',
    description: 'Free tools for process servers and legal professionals.',
    icon: <ClipboardList className="w-5 h-5" />,
    color: 'emerald',
    links: [
      { url: '/tools', label: 'Tools' },
      { url: '/affidavit-of-service', label: 'Affidavit of Service Generator' },
      { url: '/field-sheet', label: 'Field Sheet' },
      { url: '/pdf-tools', label: 'Free PDF Tools' },
      { url: '/service-checker', label: 'Service Eligibility Checker' },
      { url: '/service-time-estimator', label: 'Service Time Estimator' },
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
      { url: '/service-areas/ada', label: 'Ada' },
      { url: '/service-areas/altus', label: 'Altus' },
      { url: '/service-areas/ardmore', label: 'Ardmore' },
      { url: '/service-areas/atoka', label: 'Atoka' },
      { url: '/service-areas/bartlesville', label: 'Bartlesville' },
      { url: '/service-areas/bethany', label: 'Bethany' },
      { url: '/service-areas/bixby', label: 'Bixby' },
      { url: '/service-areas/bristow', label: 'Bristow' },
      { url: '/service-areas/broken-arrow', label: 'Broken Arrow' },
      { url: '/service-areas/broken-bow', label: 'Broken Bow' },
      { url: '/service-areas/catoosa', label: 'Catoosa' },
      { url: '/service-areas/chickasha', label: 'Chickasha' },
      { url: '/service-areas/choctaw', label: 'Choctaw' },
      { url: '/service-areas/claremore', label: 'Claremore' },
      { url: '/service-areas/collinsville', label: 'Collinsville' },
      { url: '/service-areas/coweta', label: 'Coweta' },
      { url: '/service-areas/durant', label: 'Durant' },
      { url: '/service-areas/edmond', label: 'Edmond' },
      { url: '/service-areas/el-reno', label: 'El Reno' },
      { url: '/service-areas/elk-city', label: 'Elk City' },
      { url: '/service-areas/enid', label: 'Enid' },
      { url: '/service-areas/glenpool', label: 'Glenpool' },
      { url: '/service-areas/guthrie', label: 'Guthrie' },
      { url: '/service-areas/guymon', label: 'Guymon' },
      { url: '/service-areas/jenks', label: 'Jenks' },
      { url: '/service-areas/kellyville', label: 'Kellyville' },
      { url: '/service-areas/lawton', label: 'Lawton' },
      { url: '/service-areas/mcalester', label: 'Mcalester' },
      { url: '/service-areas/miami', label: 'Miami' },
      { url: '/service-areas/midwest-city', label: 'Midwest City' },
      { url: '/service-areas/moore', label: 'Moore' },
      { url: '/service-areas/muskogee', label: 'Muskogee' },
      { url: '/service-areas/mustang', label: 'Mustang' },
      { url: '/service-areas/norman', label: 'Norman' },
      { url: '/service-areas/nowata', label: 'Nowata' },
      { url: '/service-areas/oklahoma-city', label: 'Oklahoma City' },
      { url: '/service-areas/okmulgee', label: 'Okmulgee' },
      { url: '/service-areas/owasso', label: 'Owasso' },
      { url: '/service-areas/pauls-valley', label: 'Pauls Valley' },
      { url: '/service-areas/pawhuska', label: 'Pawhuska' },
      { url: '/service-areas/ponca-city', label: 'Ponca City' },
      { url: '/service-areas/poteau', label: 'Poteau' },
      { url: '/service-areas/pryor', label: 'Pryor' },
      { url: '/service-areas/sallisaw', label: 'Sallisaw' },
      { url: '/service-areas/sand-springs', label: 'Sand Springs' },
      { url: '/service-areas/sapulpa', label: 'Sapulpa' },
      { url: '/service-areas/shawnee', label: 'Shawnee' },
      { url: '/service-areas/skiatook', label: 'Skiatook' },
      { url: '/service-areas/stillwater', label: 'Stillwater' },
      { url: '/service-areas/sulphur', label: 'Sulphur' },
      { url: '/service-areas/tahlequah', label: 'Tahlequah' },
      { url: '/service-areas/vinita', label: 'Vinita' },
      { url: '/service-areas/wagoner', label: 'Wagoner' },
      { url: '/service-areas/yukon', label: 'Yukon' },
    
      { url: '/service-areas/checotah', label: 'Checotah' },
      { url: '/service-areas/fort-sill', label: 'Fort Sill' },
      { url: '/service-areas/henryetta', label: 'Henryetta' },
      { url: '/service-areas/idabel', label: 'Idabel' },
      { url: '/service-areas/stilwell', label: 'Stilwell' },
        ],
  },
  {
    title: 'Service Areas — Counties',
    description: 'County-level process serving across Northeast Oklahoma.',
    icon: <MapPin className="w-5 h-5" />,
    color: 'teal',
    links: [
      { url: '/counties/adair-county', label: 'Adair County' },
      { url: '/counties/atoka-county', label: 'Atoka County' },
      { url: '/counties/beckham-county', label: 'Beckham County' },
      { url: '/counties/blaine-county', label: 'Blaine County' },
      { url: '/counties/bryan-county', label: 'Bryan County' },
      { url: '/counties/caddo-county', label: 'Caddo County' },
      { url: '/counties/canadian-county', label: 'Canadian County' },
      { url: '/counties/carter-county', label: 'Carter County' },
      { url: '/counties/cherokee-county', label: 'Cherokee County' },
      { url: '/counties/choctaw-county', label: 'Choctaw County' },
      { url: '/counties/cimarron-county', label: 'Cimarron County' },
      { url: '/counties/cleveland-county', label: 'Cleveland County' },
      { url: '/counties/comanche-county', label: 'Comanche County' },
      { url: '/counties/craig-county', label: 'Craig County' },
      { url: '/counties/creek-county', label: 'Creek County' },
      { url: '/counties/custer-county', label: 'Custer County' },
      { url: '/counties/delaware-county', label: 'Delaware County' },
      { url: '/counties/dewey-county', label: 'Dewey County' },
      { url: '/counties/garfield-county', label: 'Garfield County' },
      { url: '/counties/grady-county', label: 'Grady County' },
      { url: '/counties/hughes-county', label: 'Hughes County' },
      { url: '/counties/jackson-county', label: 'Jackson County' },
      { url: '/counties/kay-county', label: 'Kay County' },
      { url: '/counties/kiowa-county', label: 'Kiowa County' },
      { url: '/counties/leflore-county', label: 'Leflore County' },
      { url: '/counties/lincoln-county', label: 'Lincoln County' },
      { url: '/counties/logan-county', label: 'Logan County' },
      { url: '/counties/love-county', label: 'Love County' },
      { url: '/counties/marshall-county', label: 'Marshall County' },
      { url: '/counties/mayes-county', label: 'Mayes County' },
      { url: '/counties/mcclain-county', label: 'Mcclain County' },
      { url: '/counties/mccurtain-county', label: 'Mccurtain County' },
      { url: '/counties/mcintosh-county', label: 'Mcintosh County' },
      { url: '/counties/murray-county', label: 'Murray County' },
      { url: '/counties/muskogee-county', label: 'Muskogee County' },
      { url: '/counties/noble-county', label: 'Noble County' },
      { url: '/counties/nowata-county', label: 'Nowata County' },
      { url: '/counties/okfuskee-county', label: 'Okfuskee County' },
      { url: '/counties/oklahoma-county', label: 'Oklahoma County' },
      { url: '/counties/okmulgee-county', label: 'Okmulgee County' },
      { url: '/counties/osage-county', label: 'Osage County' },
      { url: '/counties/ottawa-county', label: 'Ottawa County' },
      { url: '/counties/payne-county', label: 'Payne County' },
      { url: '/counties/pittsburg-county', label: 'Pittsburg County' },
      { url: '/counties/pontotoc-county', label: 'Pontotoc County' },
      { url: '/counties/pottawatomie-county', label: 'Pottawatomie County' },
      { url: '/counties/pushmataha-county', label: 'Pushmataha County' },
      { url: '/counties/rogers-county', label: 'Rogers County' },
      { url: '/counties/seminole-county', label: 'Seminole County' },
      { url: '/counties/sequoyah-county', label: 'Sequoyah County' },
      { url: '/counties/stephens-county', label: 'Stephens County' },
      { url: '/counties/texas-county', label: 'Texas County' },
      { url: '/counties/tulsa-county', label: 'Tulsa County' },
      { url: '/counties/wagoner-county', label: 'Wagoner County' },
      { url: '/counties/washington-county', label: 'Washington County' },
      { url: '/counties/woodward-county', label: 'Woodward County' },
    
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
      { url: '/serving-legal-papers-on-tribal-land', label: 'Serving Legal Papers on Tribal Land' },
      { url: '/oklahoma-process-server-best-practices-checklist', label: 'Best Practices Checklist 2025' },
      { url: '/oklahoma-legal-service-areas', label: 'Oklahoma Legal Service Areas' },
      { url: '/oklahoma-electronic-service-guide', label: 'Electronic Service Guide' },
      { url: '/oklahoma-case-law-service-process', label: 'Case Law & Service of Process' },
      { url: '/oklahoma-process-server-pricing', label: 'Pricing Guide' },
      { url: '/oklahoma-process-server-technology', label: 'Technology Trends in Process Serving' },
      { url: '/oklahoma-process-server-faq', label: 'Process Server FAQ 2026' },
      { url: '/oklahoma-process-serving-costs-comparison', label: 'Cost Comparison Guide' },
      { url: '/ai-skip-tracing-guide-oklahoma', label: 'AI Skip Tracing Guide' },
      { url: '/process-serving-mistakes-guide', label: 'Common Process Serving Mistakes' },
      { url: '/high-profile-service-protocols-tulsa', label: 'High-Profile Service Protocols' },
      { url: '/family-law-service-guide-tulsa', label: 'Family Law Service Guide — Tulsa' },
      { url: '/oklahoma-courthouse-directory', label: 'Oklahoma Courthouse Directory' },
      { url: '/how-long-does-process-serving-take', label: 'How Long Does Process Serving Take?' },
      { url: '/how-much-does-process-server-cost', label: 'How Much Does a Process Server Cost?' },
      { url: '/what-happens-if-someone-refuses-service', label: 'What Happens if Someone Refuses Service?' },
      { url: '/can-process-server-serve-on-sunday', label: 'Can a Process Server Serve on Sunday?' },
      { url: '/guides', label: 'Process Serving Guides' },
      { url: '/guides/attorney-guide', label: 'Attorney Guide' },
      { url: '/guides/mcgirt-v-oklahoma', label: 'McGirt v. Oklahoma Guide' },
      { url: '/guides/military-base-service', label: 'Military Base Service Guide' },
      { url: '/guides/rural-oklahoma', label: 'Rural Oklahoma Process Serving' },
      { url: '/become-process-server-oklahoma-complete-guide', label: 'Complete Guide: Become a Process Server' },
      { url: '/process-server-equipment-checklist', label: 'Process Server Equipment Checklist' },
      { url: '/process-server-business-startup-guide', label: 'Process Server Business Startup Guide' },
      { url: '/process-server-marketing-guide', label: 'Process Server Marketing Guide' },
      { url: '/oklahoma-process-server-forms-templates', label: 'Oklahoma Process Server Forms & Templates' },
      { url: '/process-server-license-oklahoma', label: 'Licensing Checklist (Guide)' },
      { url: '/resources/oklahoma-service-of-process-reference', label: 'Service of Process Quick Reference' },
      { url: '/resources/attorneys-guide-hiring-process-server', label: "Attorney's Guide to Hiring a Process Server" },
      { url: '/resources/oklahoma-eviction-timeline', label: 'Oklahoma Eviction Timeline' },
      { url: '/resources/process-server-field-sheet-template', label: 'Field Sheet Template' },
      { url: '/resources/oklahoma-notarization-requirements', label: 'Oklahoma Notarization Requirements' },
      { url: '/resources/what-to-do-when-served-oklahoma', label: 'What to Do When Served' },
    ],
  },
  {
    title: 'Blog',
    description: 'Expert articles on Oklahoma process serving, legal procedures, and industry insights.',
    icon: <Newspaper className="w-5 h-5" />,
    color: 'purple',
    links: [
      { url: '/blog', label: 'All Blog Posts' },
      { url: '/blog/how-to-serve-a-subpoena-oklahoma', label: 'How to Serve a Subpoena in Oklahoma' },
      { url: '/blog/how-to-serve-divorce-papers-oklahoma', label: 'How to Serve Divorce Papers in Oklahoma' },
      { url: '/blog/how-to-serve-eviction-notices-in-oklahoma', label: 'How to Serve Eviction Notices in Oklahoma' },
      { url: '/blog/how-to-serve-small-claims-oklahoma', label: 'How to Serve Small Claims in Oklahoma' },
      { url: '/blog/understanding-the-affidavit-of-service', label: 'Understanding the Affidavit of Service' },
      { url: '/blog/what-to-do-when-served-papers-oklahoma', label: 'What to Do When Served Papers in Oklahoma' },
      { url: '/blog/can-you-avoid-being-served-oklahoma', label: 'Can You Avoid Being Served in Oklahoma?' },
      { url: '/blog/what-does-process-server-do-day-in-life', label: 'A Day in the Life of a Process Server' },
      { url: '/blog/become-process-server-oklahoma', label: 'How to Become a Process Server in Oklahoma (2026)' },
      { url: '/blog/sheriff-vs-private-process-server-oklahoma', label: 'Sheriff vs Private Process Server' },
      { url: '/blog/diy-vs-professional-service-oklahoma', label: 'DIY vs Professional Process Service' },
      { url: '/blog/certified-mail-vs-personal-service-oklahoma', label: 'Certified Mail vs Personal Service' },
      { url: '/blog/substitute-service-oklahoma', label: 'Substitute Service in Oklahoma' },
      { url: '/blog/serve-business-corporation-oklahoma', label: 'How to Serve a Business or Corporation' },
      { url: '/blog/serve-out-of-state-defendant-oklahoma', label: 'Serving an Out-of-State Defendant' },
      { url: '/blog/contest-improper-service-oklahoma', label: 'How to Contest Improper Service' },
      { url: '/blog/how-long-respond-lawsuit-oklahoma', label: 'How Long to Respond to a Lawsuit' },
      { url: '/blog/oklahoma-default-judgment-guide', label: 'Oklahoma Default Judgment Guide' },
      { url: '/blog/how-to-file-protective-order-oklahoma', label: 'How to File a Protective Order' },
      { url: '/blog/oklahoma-child-custody-support-service', label: 'Child Custody & Support Service' },
      { url: '/blog/oklahoma-landlord-tenant-eviction-timelines', label: 'Landlord-Tenant Eviction Timelines' },
      { url: '/blog/oklahoma-eviction-moratorium-history', label: 'Oklahoma Eviction Moratorium History' },
      { url: '/blog/bail-bondsmen-process-servers-oklahoma', label: 'Bail Bondsmen & Process Servers' },
      { url: '/blog/banks-lenders-process-serving-oklahoma', label: 'Banks & Lenders Process Serving' },
      { url: '/blog/real-estate-agents-process-serving-oklahoma', label: 'Real Estate Agents & Process Serving' },
      { url: '/blog/process-serving-small-business-owners-oklahoma', label: 'Process Serving for Small Business Owners' },
      { url: '/blog/process-serving-oil-gas-companies-oklahoma', label: 'Process Serving for Oil & Gas Companies' },
      { url: '/blog/process-serving-healthcare-hospitals-oklahoma', label: 'Process Serving for Healthcare & Hospitals' },
      { url: '/blog/january-process-serving-spike-oklahoma', label: 'January Process Serving Spike' },
      { url: '/blog/tax-season-legal-actions-oklahoma', label: 'Tax Season Legal Actions in Oklahoma' },
      { url: '/blog/estate-planning-notarization-oklahoma', label: 'Estate Planning Notarization in Oklahoma' },
      { url: '/blog/handling-evasive-defendants-oklahoma', label: 'Handling Evasive Defendants in Oklahoma' },
      { url: '/blog/how-to-serve-restraining-order-oklahoma', label: 'How to Serve a Restraining Order' },
      { url: '/blog/oklahoma-service-by-publication', label: 'Service by Publication in Oklahoma' },
      { url: '/blog/power-of-attorney-guide-oklahoma', label: 'Power of Attorney Guide — Oklahoma' },
      { url: '/blog/process-serving-hoa-oklahoma', label: 'Process Serving for HOA & Condo Associations' },
      { url: '/blog/proof-of-service-oklahoma-guide', label: 'Proof of Service Oklahoma Guide' },
      { url: '/blog/ron-vs-mobile-notary-oklahoma', label: 'RON vs Mobile Notary in Oklahoma' },
      { url: '/blog/serving-government-entities-oklahoma', label: 'Serving Government Entities in Oklahoma' },
      { url: '/blog/bankruptcy-process-serving-oklahoma', label: 'Bankruptcy Process Serving in Oklahoma' },
      { url: '/blog/employment-law-service-oklahoma', label: 'Employment Law Process Serving in Oklahoma' },
      { url: '/blog/workers-comp-subpoena-service', label: "Workers' Compensation Subpoena Service in Oklahoma" },
      { url: '/blog/do-process-servers-call-ahead', label: 'Do Process Servers Call Ahead? Oklahoma Guide' },
      { url: '/blog/process-server-scams-oklahoma', label: 'Fake Process Server Scams in Oklahoma' },
    ],
  },
  {
    title: 'Current Main Routes',
    description: 'Complete index of routes currently present under app/(main) in this workspace.',
    icon: <FileText className="w-5 h-5" />,
    color: 'blue',
    links: [
      '/',
      '/about',
      '/affidavit-of-service',
      '/backlinks',
      '/compare',
      '/compare/process-server-vs-sheriff',
      '/courier-services',
      '/courier-services-tulsa',
      '/downloads',
      '/eviction-notice-service',
      '/faq',
      '/field-sheet',
      '/for-attorneys',
      '/glossary',
      '/how-to-serve-legal-papers-oklahoma',
      '/join-our-network',
      '/learn',
      '/learn/attorney-hiring-process-server',
      '/learn/electronic-filing-service',
      '/learn/eviction-service-guide',
      '/learn/gps-electronic-proof-of-service',
      '/learn/hb1162-safety-compliance',
      '/learn/service-by-publication',
      '/learn/special-population-service',
      '/learn/uidda-subpoena-domestication',
      '/learn/vpo-protective-order-service',
      '/oklahoma-process-serving-hub',
      '/oklahoma-process-server-bond-requirements',
      '/oklahoma-tools',
      '/oklahoma-tools/can-i-serve-my-own-papers',
      '/oklahoma-tools/e-service-validity-checker',
      '/oklahoma-tools/process-serving-cost-estimator',
      '/oklahoma-tools/publication-timeline-calculator',
      '/oklahoma-tools/rush-emergency-cost-calculator',
      '/oklahoma-tools/service-deadline-calculator',
      '/oklahoma-tools/service-method-wizard',
      '/oklahoma-tools/subpoena-witness-fee-calculator',
      '/payments',
      '/pricing',
      '/process-server-license-oklahoma',
      '/process-serving',
      '/resources',
      '/resources/chain-of-custody-form',
      '/resources/client-intake-form',
      '/resources/gps-service-log',
      '/resources/skip-trace-checklist',
      '/resources/tools-and-guides',
      '/same-day-process-server',
      '/seo-dashboard',
      '/seo/eviction-notice-process-server',
      '/seo/legal-posting-process-server',
      '/seo/process-server-nowata',
      '/seo/process-server-vinita',
      '/services',
      '/sitemap',
      '/skip-tracing',
      '/subpoena-service',
      '/tools',
      '/tulsa-county-divorce-process-serving',
      '/tulsa-process-server',
      '/ultimate-guide-process-serving-oklahoma',
      '/urgent-process-server',
      '/videos',
    ].map((url) => ({ url, label: humanizeRoute(url) })),
  },
];

/* ── Color map helper ────────────────────────────────────── */
const colorMap: Record<string, { bg: string; bgHover: string; border: string; heading: string; icon: string; link: string }> = {
  blue: { bg: 'bg-blue-50', bgHover: 'hover:bg-blue-100', border: 'border-blue-200', heading: 'text-blue-900', icon: 'text-blue-600', link: 'text-blue-700' },
  indigo: { bg: 'bg-indigo-50', bgHover: 'hover:bg-indigo-100', border: 'border-indigo-200', heading: 'text-indigo-900', icon: 'text-indigo-600', link: 'text-indigo-700' },
  emerald: { bg: 'bg-emerald-50', bgHover: 'hover:bg-emerald-100', border: 'border-emerald-200', heading: 'text-emerald-900', icon: 'text-emerald-600', link: 'text-emerald-700' },
  sky: { bg: 'bg-sky-50', bgHover: 'hover:bg-sky-100', border: 'border-sky-200', heading: 'text-sky-900', icon: 'text-sky-600', link: 'text-sky-700' },
  teal: { bg: 'bg-teal-50', bgHover: 'hover:bg-teal-100', border: 'border-teal-200', heading: 'text-teal-900', icon: 'text-teal-600', link: 'text-teal-700' },
  amber: { bg: 'bg-amber-50', bgHover: 'hover:bg-amber-100', border: 'border-amber-200', heading: 'text-amber-900', icon: 'text-amber-600', link: 'text-amber-700' },
  green: { bg: 'bg-green-50', bgHover: 'hover:bg-green-100', border: 'border-green-200', heading: 'text-green-900', icon: 'text-green-600', link: 'text-green-700' },
  purple: { bg: 'bg-purple-50', bgHover: 'hover:bg-purple-100', border: 'border-purple-200', heading: 'text-purple-900', icon: 'text-purple-600', link: 'text-purple-700' },
};

/* ── Component ───────────────────────────────────────────── */
const SitemapPage = () => {
  const totalLinks = sections.reduce((n, s) => n + s.links.length, 0);

  return (
    <>
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

      <div className="container mx-auto px-4 py-10 max-w-6xl space-y-12">
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
      </div>
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
            email: "info@JustLegalSolutions.org"
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
