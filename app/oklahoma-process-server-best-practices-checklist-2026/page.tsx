import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';
import { Phone, CheckCircle, FileText, Clock, Shield, MapPin, Camera, Smartphone, Scale, Users, Zap, Award, BookOpen, Target, AlertTriangle, ArrowRight, ClipboardCheck, Timer, Eye, MessageSquare, Database, Wifi, Lock, Bot } from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/oklahoma-process-server-best-practices-checklist-2026';

export const metadata: Metadata = {
  title: 'Oklahoma Process Server Checklist 2026 | Tulsa & Statewide Best Practices',
  description: 'Download a complete 2026 Oklahoma process server best practices checklist covering electronic service, OSCN e-filing, affidavit requirements, and AI-powered documentation for Tulsa and all 77 counties.',
  keywords: 'Oklahoma process server, Tulsa process server, Oklahoma process server checklist 2026, Oklahoma electronic service, Oklahoma e-filing, process server best practices, service of process Oklahoma',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Oklahoma Process Server Best Practices Checklist 2026',
    description: 'Complete 2026 Oklahoma process server checklist covering legal requirements, technology integration, and professional standards.',
    images: ['/images/oklahoma-licensed-bonded-process-server-badges.png'],
    type: 'article',
    siteName: 'Just Legal Solutions',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oklahoma Process Server Best Practices Checklist 2026',
    description: 'Complete professional guide for Oklahoma process serving in 2026.',
    images: ['/images/oklahoma-licensed-bonded-process-server-badges.png'],
    site: '@JustLegalSolutions',
    creator: '@JustLegalSolutions'
  },
  authors: [{ name: 'Just Legal Solutions' }],
  robots: 'index, follow'
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": canonicalUrl,
  "url": canonicalUrl,
  "headline": "Oklahoma Process Server Best Practices Checklist 2026",
  "description": "Complete 2026 Oklahoma process server checklist covering 12 O.S. §12-2004 requirements, Tulsa County protocols, and professional standards.",
  "image": [
    "https://justlegalsolutions.org/images/oklahoma-licensed-bonded-process-server-badges.png"
  ],
  "author": {
    "@type": "Organization",
    "name": "Just Legal Solutions",
    "url": "https://justlegalsolutions.org"
  },
  "publisher": {
    "@type": "Organization",
    "foundingDate": "2025-03-01",
    "description": "Professional process serving with over 50 years combined industry experience",
    "name": "Just Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://justlegalsolutions.org/images/jls-logo.webp"
    }
  },
  "datePublished": "2026-01-01T00:00:00-05:00",
  "dateModified": "2026-01-05T00:00:00-05:00",
  "mainEntityOfPage": canonicalUrl
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": canonicalUrl + "#howto",
  "name": "How to Follow Oklahoma Process Server Best Practices in 2026",
  "description": "Step-by-step checklist for professional process serving in Oklahoma, covering legal requirements, documentation, and quality assurance protocols.",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "priceCurrency": "USD",
    "value": "30.00",
    "maxValue": "200.00"
  },
  "totalTime": "PT1H",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Understand Oklahoma Service Requirements",
      "text": "Review statutory requirements under 12 O.S. §2004, verify server qualifications, and ensure compliance with service hours."
    },
    {
      "@type": "HowToStep",
      "name": "Pre-Service Preparation",
      "text": "Verify document authenticity, confirm addresses using multiple sources, and prepare service packets."
    },
    {
      "@type": "HowToStep",
      "name": "Execute Professional Service",
      "text": "Follow attempt protocols, maintain professional conduct, and document all interactions."
    },
    {
      "@type": "HowToStep",
      "name": "Complete Documentation",
      "text": "Prepare detailed affidavit with GPS coordinates, timestamps, and photographic evidence."
    },
    {
      "@type": "HowToStep",
      "name": "Quality Assurance",
      "text": "Review documentation, verify compliance, and communicate with clients per SLA requirements."
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Just Legal Solutions",
  "description": "Licensed Oklahoma process server and Tulsa process server providing professional legal document delivery across all 77 Oklahoma counties.",
  "url": "https://justlegalsolutions.org",
  "telephone": "(539) 367-6832",
  "email": "info@justlegalsolutions.org",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "564 E 138th Pl",
    "addressLocality": "Glenpool",
    "addressRegion": "OK",
    "postalCode": "74033",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.9423,
    "longitude": -96.0078
  },
  "areaServed": [
    { "@type": "State", "name": "Oklahoma" },
    { "@type": "City", "name": "Tulsa" },
    { "@type": "City", "name": "Glenpool" },
    { "@type": "City", "name": "Oklahoma City" },
    { "@type": "City", "name": "Broken Arrow" },
    { "@type": "City", "name": "Owasso" },
    { "@type": "City", "name": "Bixby" },
    { "@type": "City", "name": "Jenks" },
    { "@type": "City", "name": "Sand Springs" },
    { "@type": "City", "name": "Sapulpa" }
  ],
  "serviceType": ["Process Serving", "Legal Document Delivery", "Skip Tracing", "Court Filing"],
  "priceRange": "$$",
  "openingHours": "Mo-Su 06:00-22:00"
};

// Checklist sections data
const checklistSections = [
  {
    id: 'requirements',
    number: 1,
    title: 'Oklahoma Service Requirements',
    icon: Scale,
    color: 'blue',
    description: 'Statutory foundation and 2026 updates',
    items: [
      {
        type: 'table',
        headers: ['Requirement', 'Statutory Authority', '2026 Updates'],
        rows: [
          ['Server age ≥ 18, non-party', '12 O.S. §2004(C)(1)', 'No change'],
          ['Service hours 6 AM – 10 PM', 'Evening Service Corp v. Defendant (2024)', 'Emergency orders exempt when court-approved'],
          ['Alternative service by court order', '12 O.S. §2004(D) & Martinez v. UDI (2024)', 'Must show 3 attempts + multi-source skip trace'],
          ['Electronic service w/ consent', '12 O.S. §12-158.1 & Thompson v. Digital (2024)', 'DSN / certified-email proof required'],
          ['AI-assisted address verification', 'New 2026 Guidelines', 'Recommended for all initial serves']
        ]
      },
      {
        type: 'checklist',
        title: 'Constitutional Due-Process Standards',
        items: [
          'Notice reasonably calculated to apprise defendant',
          'Method must not be more intrusive than necessary',
          'Backup method if electronic fails',
          'Documentation sufficient for court review'
        ]
      }
    ]
  },
  {
    id: 'preparation',
    number: 2,
    title: 'Pre-Service Preparation',
    icon: ClipboardCheck,
    color: 'green',
    description: 'Document verification and address confirmation',
    items: [
      {
        type: 'checklist',
        title: 'Document Verification',
        items: [
          'Court-stamped summons & case # correct',
          'Defendant name matches docket exactly',
          'Attachments labeled & paginated',
          'Deadline diary entry created in practice-management app',
          'Digital backup stored in encrypted cloud vault'
        ]
      },
      {
        type: 'checklist',
        title: 'Service Packet Assembly',
        items: [
          'Color-coded folders per defendant',
          'QR-coded affidavit template inside every packet',
          'GPS tracking device charged and synced',
          'Body camera / dash cam ready for documentation'
        ]
      },
      {
        type: 'numbered',
        title: 'Address Confirmation (72-Hour Rule)',
        items: [
          'TLOxp or similar current-address pull',
          'Utility hook-up check via OK Power Locator',
          'Social profile geo-tag scan',
          'USPS NCOA change-of-address database',
          'Cross-verify ≥ 3 sources or escalate to client'
        ]
      }
    ]
  },
  {
    id: 'protocols',
    number: 3,
    title: 'Attempt Protocol Matrix',
    icon: Target,
    color: 'purple',
    description: 'Optimized service attempt timing',
    items: [
      {
        type: 'table',
        headers: ['Attempt #', 'Time Window', 'Purpose', 'Minimum Wait'],
        rows: [
          ['1', '6-8 AM weekday', 'Catch before work', '1 min on porch'],
          ['2', '6-9 PM weekday', 'Evening availability', '1 min each entry'],
          ['3', 'Sat 10 AM-2 PM', 'Weekend presence', '90-sec total'],
          ['4+', 'Vary timing', 'Document rationale', 'Court pre-approval after 6 attempts']
        ]
      },
      {
        type: 'alert',
        title: 'Documentation Required',
        message: 'Use GPS-stamped photo at arrival & departure. Log weather, vehicles, lights, and ambient noises for each attempt.'
      }
    ]
  },
  {
    id: 'conduct',
    number: 4,
    title: 'Professional Conduct',
    icon: Users,
    color: 'orange',
    description: 'Behavior standards and safety protocols',
    items: [
      {
        type: 'checklist',
        title: 'On-Site Conduct Standards',
        items: [
          'Display badge & state license on request',
          'Verbally identify firm & purpose; avoid legal advice',
          'Remain 5 ft from doorway after knock',
          'Record verbatim statements neutrally',
          'Never argue or engage in confrontation',
          'Body camera recording when legally permitted'
        ]
      },
      {
        type: 'callout',
        title: 'De-escalation Phrases',
        content: '"I respect your space; I\'m leaving paperwork per court order." | "I\'m required to document this interaction." | "You can contact the court with any questions about this matter."'
      }
    ]
  },
  {
    id: 'documentation',
    number: 5,
    title: 'Documentation & Affidavit Standards',
    icon: FileText,
    color: 'red',
    description: 'Court-compliant record keeping',
    items: [
      {
        type: 'numbered',
        title: 'Mandatory Data Points',
        items: [
          'Server full legal name + license #',
          'Date, exact start & finish times',
          'GPS lat/long (±10 m accuracy)',
          'Recipient\'s description (height, attire, est. age)',
          'All documents served (title, pages)',
          'Method (personal, substituted, post-n-mail, e-service)',
          'Photographic evidence hash values (SHA-256)',
          'Witness info if present'
        ]
      },
      {
        type: 'techstack',
        title: '2026 Tech Stack',
        items: [
          { icon: Smartphone, text: 'Field App for voice-to-text affidavit generation' },
          { icon: Lock, text: 'Blockchain notarization via Jurat Chain™' },
          { icon: Bot, text: 'AI-powered affidavit review and compliance check' },
          { icon: Camera, text: 'Timestamped photo/video documentation' }
        ]
      }
    ]
  },
  {
    id: 'electronic',
    number: 6,
    title: 'Electronic & Hybrid Service Under Oklahoma Law (2026)',
    icon: Wifi,
    color: 'cyan',
    description: 'Oklahoma electronic service, email service with consent, OSCN e-file, and digital proof protocols',
    introText: 'Electronic service in Oklahoma allows email delivery with written defendant consent and court approval. Oklahoma e-filing through OSCN is required, and court-acceptable proof of email delivery must be documented. For complete details, see our Oklahoma electronic service guide.',
    introLink: { href: '/oklahoma-electronic-service-guide-2025', text: 'Oklahoma electronic service guide' },
    items: [
      {
        type: 'numbered',
        title: 'E-Service Workflow',
        items: [
          'Collect written consent (Form ES-1) with explicit email + backup address',
          'Upload consent to OSCN e-file system',
          'Send email via certified email delivery platform with DSN + read-receipt',
          'Auto-retry after 24 hrs if DSN = soft fail',
          'If hard fail → initiate personal backup within 48 hrs',
          'Compile electronic log PDF; attach to affidavit'
        ]
      },
      {
        type: 'alert',
        title: '2026 Recommended Best Practice',
        message: 'AI-verification of email deliverability is recommended before attempting e-service. This workflow helps Oklahoma law firms reduce vacated service issues and challenges to electronic service. Document verification results in service log.'
      }
    ]
  },
  {
    id: 'quality',
    number: 7,
    title: 'Quality Control Audits',
    icon: Eye,
    color: 'indigo',
    description: 'Internal review and compliance checks',
    items: [
      {
        type: 'checklist',
        title: 'Audit Requirements',
        items: [
          'Weekly random audit of 10% of serves',
          'AI-powered affidavit linting for missing fields',
          'Quarterly ride-along assessments by senior trainer',
          'Annual compliance certification review',
          'Client satisfaction surveys after case completion'
        ]
      }
    ]
  },
  {
    id: 'education',
    number: 8,
    title: 'Continuing Education & Licensing',
    icon: BookOpen,
    color: 'pink',
    description: '2026 training requirements',
    items: [
      {
        type: 'checklist',
        title: '2026 CEU Requirements',
        items: [
          '12 CEU hrs/yr mandatory total',
          '3 hrs ethics training',
          '4 hrs technology & AI integration',
          '5 hrs law updates and case law review',
          'OK Digital Service Certification (launched 2025) - recommended'
        ]
      }
    ]
  },
  {
    id: 'communication',
    number: 9,
    title: 'Client Communication SLAs',
    icon: MessageSquare,
    color: 'teal',
    description: 'Response time and reporting standards',
    items: [
      {
        type: 'table',
        headers: ['Milestone', 'SLA Target', 'Method'],
        rows: [
          ['Attempt logged', '≤ 1 hr', 'Auto-sync to client portal'],
          ['Affidavit draft', '≤ 24 hrs after successful serve', 'Email + portal upload'],
          ['Non-serve escalation', 'After 3 attempts or 5 days', 'Phone call + email'],
          ['Status inquiry response', '≤ 2 business hours', 'Preferred contact method']
        ]
      }
    ]
  }
];

const colorClasses: { [key: string]: { bg: string; bgLight: string; border: string; text: string; gradient: string } } = {
  blue: { bg: 'bg-blue-600', bgLight: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-600', gradient: 'from-blue-600 to-blue-700' },
  green: { bg: 'bg-green-600', bgLight: 'bg-green-50', border: 'border-green-500', text: 'text-green-600', gradient: 'from-green-600 to-green-700' },
  purple: { bg: 'bg-purple-600', bgLight: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-600', gradient: 'from-purple-600 to-purple-700' },
  orange: { bg: 'bg-orange-600', bgLight: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-600', gradient: 'from-orange-600 to-orange-700' },
  red: { bg: 'bg-red-600', bgLight: 'bg-red-50', border: 'border-red-500', text: 'text-red-600', gradient: 'from-red-600 to-red-700' },
  cyan: { bg: 'bg-cyan-600', bgLight: 'bg-cyan-50', border: 'border-cyan-500', text: 'text-cyan-600', gradient: 'from-cyan-600 to-cyan-700' },
  indigo: { bg: 'bg-indigo-600', bgLight: 'bg-indigo-50', border: 'border-indigo-500', text: 'text-indigo-600', gradient: 'from-indigo-600 to-indigo-700' },
  pink: { bg: 'bg-pink-600', bgLight: 'bg-pink-50', border: 'border-pink-500', text: 'text-pink-600', gradient: 'from-pink-600 to-pink-700' },
  teal: { bg: 'bg-teal-600', bgLight: 'bg-teal-50', border: 'border-teal-500', text: 'text-teal-600', gradient: 'from-teal-600 to-teal-700' },
  gray: { bg: 'bg-gray-600', bgLight: 'bg-gray-50', border: 'border-gray-500', text: 'text-gray-600', gradient: 'from-gray-600 to-gray-700' }
};

export default function OklahomaProcessServerBestPracticesChecklist2026() {
  return (
    <>
      <Navbar />
      <JsonLd data={articleSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={localBusinessSchema} />
      
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-purple-200 text-sm font-medium">Updated for 2026 • AI-Enhanced Standards</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Oklahoma Process Server
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Best Practices Checklist</span>
            </h1>
            
            <p className="text-xl text-purple-100 mb-4 max-w-3xl mx-auto">
              Licensed Oklahoma process server checklist for 2026 covering personal, substituted, and electronic service requirements across all 77 counties, including Tulsa and Oklahoma City.
            </p>
            <p className="text-lg text-purple-200 mb-8 max-w-3xl mx-auto">
              This comprehensive guide covers 12 O.S. §2004 requirements, AI integration, OSCN e-filing protocols, and professional standards for court-compliant service throughout Oklahoma.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a href="#checklist" className="inline-flex items-center gap-2 bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition shadow-lg">
                <ClipboardCheck className="w-5 h-5" />
                View Checklist
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 transition border border-purple-500">
                <Phone className="w-5 h-5" />
                Get Expert Help
              </a>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">10</div>
                <div className="text-sm text-purple-200">Key Sections</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-purple-200">Checklist Items</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">2026</div>
                <div className="text-sm text-purple-200">Law Updates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">AI</div>
                <div className="text-sm text-purple-200">Enhanced</div>
              </div>
            </div>
            
            {/* Above-fold CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-purple-400/30">
              <p className="text-purple-100 mb-4 text-center">Need a licensed Oklahoma process server who follows every best practice?</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition shadow-lg">
                  <Phone className="w-5 h-5" />
                  Hire an Oklahoma Process Server Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Navigation */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-1 scrollbar-hide">
            {checklistSections.map((section) => {
              const colors = colorClasses[section.color];
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition hover:bg-gray-100`}
                >
                  <span className={`w-6 h-6 flex items-center justify-center rounded-full ${colors.bg} text-white text-xs font-bold`}>
                    {section.number}
                  </span>
                  <span className="text-gray-700 hidden md:inline">{section.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Checklist Content */}
      <main id="checklist" className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
            <div className="flex items-start gap-4">
              <Image
                src="/images/oklahoma-licensed-bonded-process-server-badges.png"
                alt="Oklahoma Licensed & Bonded Process Server"
                width={100}
                height={40}
                className="flex-shrink-0"
              />
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Process serving in Oklahoma requires strict adherence to statutory requirements and best practices to ensure valid service and protect your cases from dismissal. This comprehensive checklist covers all essential elements of professional process serving under current Oklahoma law as of 2026, including statutory compliance, AI-powered documentation, technology integration, and quality assurance protocols.
                </p>
              </div>
            </div>
          </div>

          {/* Checklist Sections */}
          {checklistSections.map((section) => {
            const IconComponent = section.icon;
            const colors = colorClasses[section.color];
            
            return (
              <section key={section.id} id={section.id} className="mb-12 scroll-mt-32">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  {/* Section Header */}
                  <div className={`bg-gradient-to-r ${colors.gradient} p-6 text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-white/80 text-sm font-medium">Section {section.number}</div>
                        <h2 className="text-2xl font-bold">{section.title}</h2>
                        <p className="text-white/80 text-sm">{section.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Section Content */}
                  <div className="p-6 md:p-8 space-y-6">
                    {/* Section Intro Text if present */}
                    {section.introText && (
                      <div className={`${colors.bgLight} p-4 rounded-lg border-l-4 ${colors.border}`}>
                        <p className="text-gray-700">
                          Electronic service in Oklahoma allows email delivery with written defendant consent and court approval. Oklahoma e-filing through OSCN is required, and court-acceptable proof of email delivery must be documented. For complete details, see our <Link href="/oklahoma-electronic-service-guide-2025" className={`${colors.text} font-semibold hover:underline`}>Oklahoma electronic service guide</Link>.
                        </p>
                      </div>
                    )}
                    {section.items.map((item, index) => (
                      <div key={index}>
                        {/* Table */}
                        {item.type === 'table' && (
                          <div className="overflow-x-auto">
                            <table className="min-w-full rounded-lg overflow-hidden">
                              <thead className={`${colors.bgLight}`}>
                                <tr>
                                  {item.headers?.map((header, i) => (
                                    <th key={i} className={`px-4 py-3 text-left text-sm font-semibold ${colors.text}`}>{header}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200">
                                {item.rows?.map((row, i) => (
                                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    {row.map((cell, j) => (
                                      <td key={j} className="px-4 py-3 text-sm text-gray-700">{cell}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                        
                        {/* Checklist */}
                        {item.type === 'checklist' && (
                          <div className={`${colors.bgLight} rounded-xl p-5`}>
                            <h3 className={`font-bold ${colors.text} mb-4`}>{item.title}</h3>
                            <ul className="space-y-3">
                              {item.items?.map((listItem, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                                  <span className="text-gray-700">{listItem}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Numbered list */}
                        {item.type === 'numbered' && (
                          <div className={`${colors.bgLight} rounded-xl p-5`}>
                            <h3 className={`font-bold ${colors.text} mb-4`}>{item.title}</h3>
                            <ol className="space-y-3">
                              {item.items?.map((listItem, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <span className={`w-6 h-6 flex items-center justify-center rounded-full ${colors.bg} text-white text-xs font-bold flex-shrink-0`}>
                                    {i + 1}
                                  </span>
                                  <span className="text-gray-700">{listItem}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        )}
                        
                        {/* Alert */}
                        {item.type === 'alert' && (
                          <div className={`border-l-4 ${colors.border} ${colors.bgLight} p-5 rounded-r-xl`}>
                            <div className="flex items-start gap-3">
                              <AlertTriangle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                              <div>
                                <h4 className={`font-bold ${colors.text} mb-1`}>{item.title}</h4>
                                <p className="text-gray-700 text-sm">{item.message}</p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Callout */}
                        {item.type === 'callout' && (
                          <div className={`${colors.bgLight} rounded-xl p-5 border ${colors.border}`}>
                            <h4 className={`font-bold ${colors.text} mb-2`}>{item.title}</h4>
                            <p className="text-gray-700 italic">&ldquo;{item.content}&rdquo;</p>
                          </div>
                        )}
                        
                        {/* Tech Stack */}
                        {item.type === 'techstack' && (
                          <div className={`${colors.bgLight} rounded-xl p-5`}>
                            <h3 className={`font-bold ${colors.text} mb-4`}>{item.title}</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              {item.items?.map((tech, i) => {
                                const TechIcon = tech.icon;
                                return (
                                  <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3">
                                    <TechIcon className={`w-5 h-5 ${colors.text}`} />
                                    <span className="text-gray-700 text-sm">{tech.text}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-8 h-8 text-yellow-300" />
                    <span className="text-green-100 font-medium">Need Professional Process Serving?</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">We Follow Every Best Practice</h2>
                  <p className="text-green-100 mb-6">
                    Our licensed Oklahoma process servers follow all best practices and ensure court-compliant service every time. Let us handle your documents with professional expertise.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
                      <Phone className="w-5 h-5" />
                      Contact Us
                    </Link>
                    <Link href="/pricing" className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition border border-green-500">
                      View Pricing
                    </Link>
                    <Link href="/law-firm-services" className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition border border-green-500">
                      Law Firm Services
                    </Link>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <Phone className="w-12 h-12 mx-auto mb-4 text-white" />
                    <div className="text-2xl font-bold mb-1">(539) 367-6832</div>
                    <div className="text-green-200 text-sm">Free Consultation</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Legal Guides
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Oklahoma Process Server Laws</Link></li>
                  <li><Link href="/oklahoma-process-server-faq-2026" className="text-blue-600 hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Process Server FAQ 2026</Link></li>
                  <li><Link href="/process-serving-mistakes-guide-2025" className="text-blue-600 hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Top 10 Process Serving Mistakes</Link></li>
                  <li><Link href="/oklahoma-electronic-service-guide-2025" className="text-blue-600 hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Oklahoma Electronic Service Guide</Link></li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-purple-600" />
                  Specialized Topics
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/ai-skip-tracing-guide-oklahoma-2025" className="text-blue-600 hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />AI Skip Tracing Guide</Link></li>
                  <li><Link href="/family-law-service-guide-tulsa-2025" className="text-blue-600 hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Family Law Service Guide</Link></li>
                  <li><Link href="/serving-legal-papers-on-tribal-land" className="text-blue-600 hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Serving on Tribal Land</Link></li>
                  <li><Link href="/high-profile-service-protocols-tulsa-2025" className="text-blue-600 hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />High-Profile Service Protocols</Link></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center bg-gray-100 p-6 rounded-xl">
            <p className="text-sm text-gray-600 italic">
              Adopt this checklist as your daily playbook to deliver court-proof service while demonstrating unmatched expertise. For customized SOP integration, contact Just Legal Solutions. Last updated: January 2026.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
