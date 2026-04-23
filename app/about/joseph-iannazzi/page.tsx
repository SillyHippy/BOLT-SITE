import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';
import {
  BadgeCheck,
  GraduationCap,
  Scale,
  Shield,
  Stamp,
  Award,
  Globe,
  ExternalLink,
  FileCheck,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Users,
  Star,
} from 'lucide-react';

const url = 'https://justlegalsolutions.org/about/joseph-iannazzi';
const title = 'Joseph Iannazzi | Founder & CEO, Just Legal Solutions — Oklahoma Process Server & Notary';
const description =
  "Meet Joseph Iannazzi, Founder & CEO of Just Legal Solutions. Licensed and bonded Oklahoma process server (12 O.S. § 158.1), commissioned notary public and Remote Online Notary (RON), NAPPS Member ID 14801, Snapdocs-verified (ID, Commission, E&O, background check), NSU alumnus, and disability-owned business owner serving all 77 Oklahoma counties.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    'Joseph Iannazzi, Just Legal Solutions founder, Oklahoma process server, Tulsa process server owner, NAPPS 14801, Oklahoma notary public, Remote Online Notary, Snapdocs verified, NSU alumnus, disability-owned business Oklahoma, Glenpool process server, Joseph Iannazzi bio, process server credentials',
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Joseph Iannazzi',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow',
  openGraph: {
    title,
    description,
    url,
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/1Headshot.webp',
        width: 1200,
        height: 1200,
        alt: 'Joseph Iannazzi, Founder & CEO of Just Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ServeOK',
    creator: '@ServeOK',
    title,
    description,
    images: ['https://justlegalsolutions.org/images/1Headshot.webp'],
  },
  alternates: { canonical: url },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://justlegalsolutions.org/#joseph-iannazzi',
  name: 'Joseph Iannazzi',
  givenName: 'Joseph',
  familyName: 'Iannazzi',
  jobTitle: 'Founder & CEO',
  description:
    "Founder & CEO of Just Legal Solutions. Licensed and bonded Oklahoma process server (12 O.S. § 158.1), commissioned Oklahoma Notary Public, Remote Online Notary (RON), NAPPS Member ID 14801, Snapdocs-verified, NSU alumnus with 10+ years of legal, logistics, and operations experience. Founded Just Legal Solutions after a five-year workers' compensation battle to eliminate delay in legal document delivery across Oklahoma.",
  image: 'https://justlegalsolutions.org/images/1Headshot.webp',
  url,
  sameAs: [
    'https://napps.org/member-info.aspx?id=14801',
    'https://nationalprocessservernetwork.com/directory/just-legal-solutions/',
    'https://notary.snapdocs.com/notary-public/oklahoma/glenpool/joseph-iannazzi',
    'https://www.bbb.org/us/ok/glenpool/profile/process-server/just-legal-solutions-1025-38110450',
    'https://www.linkedin.com/in/joseph-iannazzi',
    'https://medium.com/@justlegalsolutionsok',
    'https://www.youtube.com/@Just-Legal-Solutions',
    'https://twitter.com/ServeOK',
    'https://www.issuewire.com/founders-five-year-battle-with-legal-system-inspires-5-star-rated-process-serving-firm-in-tulsa-1839846063085062',
  ],
  worksFor: {
    '@type': 'LegalService',
    '@id': 'https://justlegalsolutions.org/#organization',
    name: 'Just Legal Solutions',
    url: 'https://justlegalsolutions.org',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Northeastern State University',
      sameAs: 'https://www.nsuok.edu/',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tahlequah',
        addressRegion: 'OK',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Tulsa Community College',
      sameAs: 'https://www.tulsacc.edu/',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tulsa',
        addressRegion: 'OK',
        addressCountry: 'US',
      },
    },
  ],
  memberOf: [
    {
      '@type': 'Organization',
      name: 'National Association of Professional Process Servers (NAPPS)',
      url: 'https://napps.org/member-info.aspx?id=14801',
      identifier: '14801',
    },
    {
      '@type': 'Organization',
      name: 'National Process Server Network (NPSN)',
      url: 'https://nationalprocessservernetwork.com/directory/just-legal-solutions/',
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'License',
      name: 'Licensed Oklahoma Process Server',
      description: 'Licensed under 12 O.S. § 158.1 with $5,000 surety bond payable to the State of Oklahoma.',
      recognizedBy: { '@type': 'Organization', name: 'Oklahoma District Court' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Certification',
      name: 'Oklahoma Commissioned Notary Public',
      description: 'Oklahoma-commissioned Notary Public bonded with $10,000 surety bond per 49 O.S. § 2.',
      recognizedBy: { '@type': 'Organization', name: 'Oklahoma Secretary of State' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Certification',
      name: 'Remote Online Notary (RON)',
      description: 'Certified Remote Online Notary authorized to perform remote notarizations for clients nationwide.',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Verification',
      name: 'Snapdocs Verified (ID, Commission, E&O, Background Check)',
      recognizedBy: { '@type': 'Organization', name: 'Snapdocs', url: 'https://snapdocs.com' },
    },
  ],
  knowsAbout: [
    'Oklahoma process serving',
    'Service of process under 12 O.S. § 2004',
    'Substitute service',
    'Skip tracing',
    'Court filing and eFiling (OCIS)',
    'Oklahoma notary law (49 O.S.)',
    'Remote Online Notarization (RON)',
    'Loan signing',
    'Apostille services',
    'Legal courier and chain of custody',
    'Mobile notary',
    'Tribal jurisdiction post-McGirt',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '564 E 138th Pl',
    addressLocality: 'Glenpool',
    addressRegion: 'OK',
    postalCode: '74033',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-539-367-6832',
    contactType: 'Customer Service',
    areaServed: 'US-OK',
    availableLanguage: 'English',
  },
  email: 'joseph@justlegalsolutions.org',
  telephone: '+1-539-367-6832',
};

const credentialSections = [
  {
    icon: Scale,
    color: 'blue',
    title: 'Process Server License',
    items: [
      { label: 'Statutory authority', value: '12 O.S. § 158.1' },
      { label: 'Surety bond', value: '$5,000, payable to the State of Oklahoma' },
      { label: 'License cycle', value: '1-year initial, 3-year renewals' },
      { label: 'Counties served (NAPPS)', value: 'Tulsa, Wagoner, Rogers, Osage (primary); statewide via partner network' },
    ],
    verifyLabel: 'Verify NAPPS Member Profile',
    verifyUrl: 'https://napps.org/member-info.aspx?id=14801',
  },
  {
    icon: Stamp,
    color: 'indigo',
    title: 'Notary Commission & RON',
    items: [
      { label: 'Notary type', value: 'Oklahoma Commissioned Notary Public' },
      { label: 'Remote Online Notary', value: 'Certified RON provider' },
      { label: 'Notary bond', value: '$10,000 surety bond per 49 O.S. § 2' },
      { label: 'Insurance', value: 'E&O insurance on file' },
    ],
    verifyLabel: 'Verify Snapdocs Profile',
    verifyUrl: 'https://notary.snapdocs.com/notary-public/oklahoma/glenpool/joseph-iannazzi',
  },
  {
    icon: GraduationCap,
    color: 'emerald',
    title: 'Education',
    items: [
      { label: "Bachelor's degree", value: 'Northeastern State University (NSU), Tahlequah, OK' },
      { label: "Associate's degree", value: 'Tulsa Community College' },
      { label: 'Alumni email', value: 'iannazzi@alumni.nsuok.edu' },
    ],
    verifyLabel: 'Northeastern State University',
    verifyUrl: 'https://www.nsuok.edu/',
  },
  {
    icon: BadgeCheck,
    color: 'amber',
    title: 'Professional Memberships',
    items: [
      { label: 'NAPPS Member ID', value: '14801 (since 2025)' },
      { label: 'NPSN', value: 'Listed in National Process Server Network directory' },
      { label: 'BBB', value: 'Listed with A- rating (not accredited)' },
    ],
    verifyLabel: 'Verify NPSN Directory Listing',
    verifyUrl: 'https://nationalprocessservernetwork.com/directory/just-legal-solutions/',
  },
  {
    icon: Briefcase,
    color: 'rose',
    title: 'Professional Experience',
    items: [
      { label: 'Process serving', value: 'Since 2020 — founder & primary process server' },
      { label: 'Legal industry', value: '4+ years as Executive Assistant at Enterline Law (2020–2024)' },
      { label: 'Logistics & operations', value: '5+ years at FedEx Ground (2019–2024)' },
      { label: 'Total professional experience', value: '10+ years across legal, logistics, and operations' },
      { label: 'Partner network', value: '50+ years combined experience with subcontractor partners' },
    ],
  },
  {
    icon: Award,
    color: 'violet',
    title: 'Specialty Certifications',
    items: [
      { label: 'Skip tracing (ST)', value: 'NAPPS-listed skip tracing service' },
      { label: 'Court filing / eFiling', value: 'OCIS (Tulsa County) and statewide filing' },
      { label: 'Loan signing agent', value: 'Via Snapdocs platform' },
      { label: 'Apostille services', value: 'Oklahoma apostille processing' },
      { label: 'Wedding officiant', value: 'Ordained since 2017' },
      { label: 'Hospital & jail notary', value: 'On-site mobile notary for restricted facilities' },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; accent: string }> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', accent: 'bg-blue-600' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', accent: 'bg-indigo-600' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', accent: 'bg-emerald-600' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', accent: 'bg-amber-600' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', accent: 'bg-rose-600' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700', accent: 'bg-violet-600' },
};

export default function JosephIannazziPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <UnifiedSchema
        pageType="article"
        url={url}
        title={title}
        description={description}
        breadcrumbs={[
          { name: 'Home', url: 'https://justlegalsolutions.org/' },
          { name: 'About', url: 'https://justlegalsolutions.org/about' },
          { name: 'Joseph Iannazzi', url },
        ]}
        articleDetails={{
          headline: title,
          author: 'Joseph Iannazzi',
          datePublished: '2026-04-19',
          dateModified: '2026-04-19',
          image: 'https://justlegalsolutions.org/images/1Headshot.webp',
        }}
      />
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Navbar />

      <main>
        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b border-blue-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-blue-700 underline">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/about" className="hover:text-blue-700 underline">
                    About
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-gray-900" aria-current="page">
                  Joseph Iannazzi
                </li>
              </ol>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
                  <Image
                    src="/images/1Headshot.webp"
                    alt="Joseph Iannazzi, Founder & CEO of Just Legal Solutions"
                    fill
                    sizes="(max-width: 1024px) 192px, 224px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 flex items-center gap-2 justify-center lg:justify-start">
                  <BadgeCheck className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                    Disability-owned business
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                  Founder &amp; CEO · Just Legal Solutions
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Joseph Iannazzi
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  Licensed and bonded Oklahoma process server, commissioned Notary Public and
                  Remote Online Notary, NAPPS Member ID <strong>14801</strong>,
                  Snapdocs-verified, Northeastern State University alumnus, and founder of
                  Oklahoma&apos;s most transparent process serving and mobile notary firm.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  <a
                    href="tel:5393676832"
                    className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    <span>(539) 367-6832</span>
                  </a>
                  <a
                    href="mailto:joseph@justlegalsolutions.org"
                    className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-700 transition"
                  >
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    <span>joseph@justlegalsolutions.org</span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gray-500" aria-hidden="true" />
                    <span>Glenpool, Oklahoma · serving all 77 Oklahoma counties</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                    <span>
                      5.0 Google rating ·{' '}
                      <Link href="/reviews" className="text-blue-700 underline">
                        156+ verified reviews
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BIO */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              About Joseph
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                <strong>Joseph Iannazzi</strong> is the Founder &amp; CEO of{' '}
                <Link href="/" className="text-blue-700 hover:text-blue-800 underline">
                  Just Legal Solutions
                </Link>
                , a licensed and bonded process serving and mobile notary firm based in
                Glenpool, Oklahoma. After a debilitating workplace injury led to a{' '}
                <Link href="/about" className="text-blue-700 hover:text-blue-800 underline">
                  five-year battle with the workers&apos; compensation system
                </Link>
                , Joseph channeled that experience into building a company designed to
                eliminate delay and restore humanity to Oklahoma&apos;s legal support
                workflow.
              </p>
              <p>
                Joseph holds a Bachelor&apos;s degree from{' '}
                <strong>Northeastern State University (NSU)</strong> in Tahlequah and an
                Associate&apos;s degree from{' '}
                <strong>Tulsa Community College</strong>, with 10+ years of executive
                support experience spanning legal, logistics, and operations — including
                four years as an Executive Assistant at <strong>Enterline Law</strong>{' '}
                supporting senior attorneys with legal document preparation and court
                scheduling.
              </p>
              <p>
                Joseph is a member of the{' '}
                <a
                  href="https://napps.org/member-info.aspx?id=14801"
                  className="text-blue-700 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Association of Professional Process Servers (NAPPS, Member ID 14801)
                </a>{' '}
                and the{' '}
                <a
                  href="https://nationalprocessservernetwork.com/directory/just-legal-solutions/"
                  className="text-blue-700 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Process Server Network (NPSN)
                </a>
                . He is an Oklahoma-commissioned Notary Public, a certified Remote Online
                Notary (RON), and has been{' '}
                <a
                  href="https://notary.snapdocs.com/notary-public/oklahoma/glenpool/joseph-iannazzi"
                  className="text-blue-700 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Snapdocs-verified
                </a>{' '}
                (ID, Commission, E&amp;O insurance, and background check). Just Legal
                Solutions maintains a{' '}
                <a
                  href="https://www.bbb.org/us/ok/glenpool/profile/process-server/just-legal-solutions-1025-38110450"
                  className="text-blue-700 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BBB profile (A- rating, not accredited)
                </a>{' '}
                and a 5.0-star Google Business Profile average.
              </p>
            </div>
          </div>
        </section>

        {/* CREDENTIALS GRID */}
        <section className="bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Credentials &amp; Verification
              </h2>
              <p className="text-gray-700">
                Every credential below is independently verifiable. We link to the
                issuing authority or third-party directory wherever possible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {credentialSections.map((section) => {
                const Icon = section.icon;
                const colors = colorMap[section.color];
                return (
                  <div
                    key={section.title}
                    className={`rounded-xl border ${colors.border} ${colors.bg} p-6`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg ${colors.accent} text-white flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {section.title}
                      </h3>
                    </div>
                    <dl className="space-y-2 text-sm">
                      {section.items.map((item) => (
                        <div key={item.label} className="flex flex-col sm:flex-row sm:gap-2">
                          <dt className="font-semibold text-gray-900 sm:min-w-[11rem]">
                            {item.label}:
                          </dt>
                          <dd className="text-gray-700">{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                    {section.verifyUrl && (
                      <a
                        href={section.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${colors.text} hover:underline`}
                      >
                        {section.verifyLabel}
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CAREER HIGHLIGHTS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Career Highlights
          </h2>
          <ol className="space-y-6">
            {[
              {
                n: '01',
                title: 'Founded Just Legal Solutions',
                body: 'Built a disability-owned process serving and mobile notary firm from personal adversity — after a five-year workers&apos; compensation battle — into a 5.0-star-rated business serving all 77 Oklahoma counties with 156+ verified reviews across Google and internal client channels.',
              },
              {
                n: '02',
                title: 'NAPPS Membership (Member ID 14801)',
                body: "Accepted as a member of the National Association of Professional Process Servers in 2025, gaining recognition in the national professional process server directory.",
              },
              {
                n: '03',
                title: 'Multi-Certified Notary &amp; RON Provider',
                body: 'Obtained Oklahoma notary commission, Remote Online Notary certification, and full Snapdocs verification (ID, Commission, E&O, Background Check) — built a notary services division offering 24/7 mobile, in-office, and remote notarization statewide.',
              },
              {
                n: '04',
                title: '30% Administrative Efficiency Improvement',
                body: 'While at Enterline Law and previous executive assistant roles, spearheaded payroll and HR system implementations across multi-state operations, achieving a documented 30% improvement in administrative efficiency.',
              },
              {
                n: '05',
                title: 'Employee Recognition Awards',
                body: 'Employee of the Quarter at Enterline Law, Top Manager Nominee at FedEx Ground, Outstanding Service Award at Ruth Shaw, Top Performer at Ricalday, and Administrative Excellence Award at Alpine Roofing.',
              },
            ].map((item) => (
              <li
                key={item.n}
                className="flex gap-4 bg-white rounded-xl border border-gray-200 p-5"
              >
                <div
                  aria-hidden="true"
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 text-white font-bold text-lg flex items-center justify-center"
                >
                  {item.n}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-700"
                     
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* MEDIA & AUTHORSHIP */}
        <section className="bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Published Work &amp; Media
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <a
                href="https://www.issuewire.com/founders-five-year-battle-with-legal-system-inspires-5-star-rated-process-serving-firm-in-tulsa-1839846063085062"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition"
              >
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Press Release · IssueWire · Aug 7, 2025
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  Founder&apos;s Five-Year Battle With Legal System Inspires 5-Star Rated
                  Process Serving Firm in Tulsa
                </h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-700">
                  Read release <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </a>
              <a
                href="https://medium.com/@justlegalsolutionsok"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition"
              >
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Medium · Author profile
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  Joseph Iannazzi on Medium
                </h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-700">
                  Read articles <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </a>
              <a
                href="https://www.youtube.com/@Just-Legal-Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition"
              >
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  YouTube · Just Legal Solutions
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  48-video educational library on Oklahoma process serving, notary, and
                  court procedure
                </h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-700">
                  Watch channel <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </a>
              <a
                href="https://www.reddit.com/r/smallbusiness/comments/1miclr8/lessons_learned_running_a_legal_process_serving/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition"
              >
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Reddit · r/smallbusiness
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  Lessons Learned: Running a Legal Process Serving &amp; Delivery Business
                </h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-700">
                  Read post <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* RELATED LINKS */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Explore Joseph&apos;s Work
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                href: '/about',
                title: 'The Fight That Forged a Business',
                body: "The full origin story — Joseph's five-year workers&apos; comp battle and the founding of Just Legal Solutions.",
                icon: FileCheck,
              },
              {
                href: '/notary/joseph',
                title: 'Notary Credentials',
                body: 'Full notary credentials page with Snapdocs verification, commission, bond, and E&O details.',
                icon: Stamp,
              },
              {
                href: '/tulsa-process-server',
                title: 'Tulsa Process Server',
                body: 'Core Tulsa County process serving service page — pricing, coverage, and FAQs.',
                icon: Scale,
              },
              {
                href: '/pricing',
                title: 'Transparent Pricing',
                body: 'Full pricing guide for process serving, notary, skip tracing, and court filing.',
                icon: Award,
              },
              {
                href: '/blog',
                title: 'Blog Library',
                body: 'Oklahoma process serving, notary, and legal procedure guides authored by Joseph.',
                icon: Globe,
              },
              {
                href: '/reviews',
                title: 'Verified Reviews',
                body: '5.0 Google rating plus 156+ verified reviews across Google and internal client channels.',
                icon: Users,
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {card.title}
                  </h3>
                  <p
                    className="text-sm text-gray-700"
                     
                    dangerouslySetInnerHTML={{ __html: card.body }}
                  />
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-blue-200" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Work directly with Oklahoma&apos;s most transparent process server
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Licensed, bonded, and NAPPS-listed. Service starts at $30 single-attempt and
              $60 standard, with same-day, triple-attempt, and after-hours rush options
              available statewide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:5393676832"
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition"
              >
                Call (539) 367-6832
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition"
              >
                Request a Service
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
