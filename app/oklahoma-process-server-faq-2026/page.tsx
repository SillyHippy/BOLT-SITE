import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';
import { Phone, Mail, Clock, Shield, MapPin, FileText, Scale, Users, Zap, CheckCircle, HelpCircle, DollarSign, Gavel, Award, Search, Smartphone, Lock, Bot, Building2, Home, AlertCircle, Star } from 'lucide-react';
import AIVoiceSupremacy from '../../components/ui/ai-voice-supremacy';

const canonicalUrl = 'https://justlegalsolutions.org/oklahoma-process-server-faq-2026';

export const metadata: Metadata = {
  title: 'Oklahoma Process Server FAQ 2026 | Just Legal Solutions',
  description: 'Get 2026 Oklahoma process server FAQ answers on costs, timelines, licensing, electronic service, and legal requirements from licensed Tulsa-based professionals at Just Legal Solutions.',
  keywords: 'Oklahoma process server FAQ 2026, Tulsa process server, Oklahoma legal document service, process serving questions, Oklahoma court procedures, process server costs, 2026 requirements for process servers in Oklahoma',
  authors: [{ name: 'Just Legal Solutions Team' }],
  openGraph: {
    title: 'Oklahoma Process Server FAQ 2026: Complete Answers to Your Legal Service Questions',
    description: 'Get comprehensive answers to the most frequently asked questions about process serving in Oklahoma for 2026. Expert guidance on costs, licensing, procedures, and legal requirements.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: '/images/Legal-document-types-process-server.png',
        width: 1200,
        height: 630,
        alt: 'Oklahoma Process Server FAQ 2026'
      }
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oklahoma Process Server FAQ 2026: Complete Answers',
    description: 'Comprehensive answers to process serving questions in Oklahoma for 2026.',
    images: ['/images/Legal-document-types-process-server.png'],
    creator: '@JustLegalSolutions',
    site: '@JustLegalSolutions',
  },
  robots: 'index, follow',
  alternates: {
    canonical: canonicalUrl,
  },
  other: {
    'article:author': 'Just Legal Solutions Team',
    'article:published_time': '2026-01-01',
    'article:modified_time': '2026-02-17',
    'ai-content-type': 'faq',
    'ai-summary': 'Oklahoma process server FAQ for 2026: Process serving costs $30-$265 in Oklahoma depending on complexity. Servers must be 18+, licensed, and bonded ($5,000). Service includes personal delivery or substituted service on residents 15+. Just Legal Solutions serves all 77 Oklahoma counties.',
    'ai-key-facts': 'Process serving costs $30-$265 in Oklahoma, must be 18+ and posted $5,000 bond, substituted service requires resident 15+, 1-5 business day completion, Just Legal Solutions licensed statewide, (539) 367-6832',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a process server in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A process server in Oklahoma is a professional licensed under 12 O.S. § 158.1 who delivers legal documents. They must be at least 18 years old, of good moral character, a resident of Oklahoma, and have posted the required $5,000 bond."
      }
    },
    {
      "@type": "Question", 
      "name": "How much does process serving cost in Oklahoma in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oklahoma process serving costs in 2026 range from $85-$125 for standard service, $150-$200 for rush service, and $75/hour for stakeout services. These are business estimates; statutory fees for sheriffs differ."
      }
    },
    {
      "@type": "Question",
      "name": "How long does process serving take in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard process serving in Oklahoma typically takes 5-7 business days. While law does not mandate a specific number of attempts, reputable companies like Just Legal Solutions typically include multiple attempts as a best practice."
      }
    },
    {
      "@type": "Question",
      "name": "What documents can Oklahoma process servers deliver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oklahoma process servers can deliver summons and complaints, subpoenas, divorce papers, protective orders, eviction notices, garnishment papers, and other legal documents requiring formal service under 12 O.S. § 2004."
      }
    },
    {
      "@type": "Question",
      "name": "Are Oklahoma process servers licensed and bonded?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Under 12 O.S. § 158.1, private process servers must hold a state license issued by a judge and post a $5,000 bond to ensure faithful performance of their duties."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a licensed Oklahoma process server or can anyone serve papers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under 12 O.S. § 2004, process may be served by: (1) a sheriff or deputy sheriff, (2) a licensed private process server under 12 O.S. § 158.1, or (3) a person appointed by the court. Prisoners and parolees cannot be appointed to serve process. Using a licensed professional ensures the affidavit of service is properly executed and filed."
      }
    },
    {
      "@type": "Question",
      "name": "How does electronic service work in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Electronic service of process (initial documents) is generally not a primary method without a court order under 12 O.S. § 2004(D) for alternative service, or unless specific consent is established."
      }
    },
    {
      "@type": "Question",
      "name": "What are the 2026 rules for substituted service in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Substituted service may be made at the defendant's dwelling house or usual place of abode with some person residing therein who is at least 15 years of age, per 12 O.S. § 2004(C)(1)(c)(i)."
      }
    },
    {
      "@type": "Question",
      "name": "Who can serve process in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under 12 O.S. § 2004, process may be served by: (1) a sheriff or deputy sheriff, (2) a licensed private process server under 12 O.S. § 158.1, or (3) a person appointed by the court. Prisoners and parolees cannot be appointed to serve process."
      }
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

// FAQ Data organized by category
const faqCategories = [
  {
    id: 'general',
    title: 'General Questions',
    intro: 'Essential Oklahoma process server information for law firms and individuals across Tulsa, Oklahoma City, and all 77 Oklahoma counties.',
    icon: HelpCircle,
    color: 'blue',
    faqs: [
      {
        question: "What is a process server in Oklahoma?",
        answer: "A process server in Oklahoma is a licensed professional authorized to deliver legal documents. Under 12 O.S. § 158.1, servers must meet specific statutory criteria to ensure due process is upheld.",
        details: [
          "Must be at least 18 years old",
          "Must be of good moral character",
          "Must be a resident of the State of Oklahoma",
          "Must post a $5,000 bond",
          "Must hold a valid license issued by a District Judge"
        ]
      },
      {
        question: "Why do I need a professional process server?",
        answer: "Professional process servers ensure legal documents are delivered correctly according to 12 O.S. § 2004, protecting your case from dismissal due to improper service.",
        details: [
          "Court-compliant Return of Service affidavits",
          "Knowledge of specific service rules (e.g., age requirements for substituted service)",
          "Professional handling of difficult defendants",
          "Third-party neutrality (cannot be a party to the case)"
        ]
      }
    ]
  },
  {
    id: 'pricing',
    title: 'Pricing & Costs',
    intro: 'Oklahoma process server rates in 2026. Note: These are business estimates for Just Legal Solutions; statutory sheriff fees may differ.',
    icon: DollarSign,
    color: 'green',
    faqs: [
      {
        question: "How much does process serving cost in Oklahoma in 2026?",
        answer: "Private process serving costs vary based on urgency and complexity:",
        table: {
          headers: ["Service Type", "Price Range", "Timeframe"],
          rows: [
            ["Standard Service", "$85 - $125", "5-7 business days"],
            ["Rush Service", "$150 - $200", "Same/next day"],
            ["Stakeout Service", "$75/hour", "Extended monitoring"],
            ["Skip Tracing", "$50 - $150", "1-5 business days"],
            ["Additional Attempts", "$25 each", "As needed"]
          ]
        },
        details: [
          "Volume discounts available for law firms",
          "Clear upfront quoting",
          "Consultations for complex service requirements"
        ]
      }
    ]
  },
  {
    id: 'timing',
    title: 'Timing & Timeline',
    icon: Clock,
    color: 'purple',
    faqs: [
      {
        question: "How long does process serving take in Oklahoma?",
        answer: "Service timeframes depend on the type of service requested. While Oklahoma law does not mandate a specific minimum number of attempts, professional standards typically involve multiple efforts:",
        details: [
          "Standard Service: 5-7 business days (multiple attempts as per business practice)",
          "Rush Service: Same-day or next-day completion",
          "Difficult Serves: May require alternative strategies or stakeouts"
        ],
        note: "Statutory deadlines for service (e.g., 180 days for summons) are governed by 12 O.S. § 2004(I)."
      }
    ]
  },
  {
    id: 'documents',
    title: 'Document Types',
    icon: FileText,
    color: 'red',
    faqs: [
      {
        question: "What documents can Oklahoma process servers deliver?",
        answer: "Oklahoma process servers can deliver a wide variety of legal documents requiring formal service:",
        columns: [
          {
            title: "Civil Documents",
            items: ["Summons and complaints", "Subpoenas (witness and document)", "Divorce and family law papers", "Protective orders", "Garnishment papers", "Eviction notices"]
          },
          {
            title: "Business Documents", 
            items: ["Contract disputes", "Collections notices", "Cease and desist orders", "Corporate service of process", "Bankruptcy papers", "Administrative proceedings"]
          }
        ],
        note: "Professional servers ensure compliance with 12 O.S. § 2004 regarding the manner of service for each document type.",
        link: { text: "Learn about family law service in Tulsa", href: "/family-law-service-guide-tulsa-2025" }
      }
    ]
  },
  {
    id: 'laws',
    title: 'Laws & Requirements',
    icon: Gavel,
    color: 'orange',
    faqs: [
      {
        question: "What are Oklahoma's process serving laws?",
        answer: "Oklahoma process serving is governed by Title 12 of Oklahoma Statutes. Key provisions include:",
        details: [
          "Personal Service (12 O.S. § 2004(C)(1)(c)(i)): Direct delivery to the defendant personally.",
          "Substituted Service (12 O.S. § 2004(C)(1)(c)(i)): Service at the dwelling with a resident at least 15 years of age.",
          "Service by Publication (12 O.S. § 2004(C)(4)): Used when defendant cannot be located after diligent search.",
          "Certified Mail (12 O.S. § 2004(C)(2)(c)): Service by mail with return receipt requested.",
          "Court-Ordered Alternative Service (12 O.S. § 2004(D)): Methods ordered by the court when other means fail.",
          "Electronic Service: Sometimes allowed for specific documents when authorized by court order, local rule, or written consent filed with the court. Electronic methods do not replace traditional service requirements for initial pleadings."
        ],
        link: { text: "Read our complete Oklahoma Process Server Laws Guide", href: "/oklahoma-process-server-laws" }
      },
      {
        question: "Who can serve process in Oklahoma?",
        answer: "Oklahoma law (12 O.S. § 2004) authorizes specific categories of individuals to serve legal process:",
        details: [
          "Sheriff or Deputy Sheriff: Can serve papers within their jurisdiction.",
          "Licensed Private Process Server: Professionals licensed under 12 O.S. § 158.1 who meet all statutory requirements (age 18+, Oklahoma resident, good moral character, $5,000 bond).",
          "Court-Appointed Person: A judge may appoint an individual to serve process in certain situations.",
          "Important: Prisoners and parolees cannot be appointed to serve process in Oklahoma."
        ],
        note: "A party to the case cannot serve their own papers. Using a licensed professional ensures your Return of Service affidavit is properly executed and accepted by the court."
      }
    ]
  },
  {
    id: 'licensing',
    title: 'Licensing & Credentials',
    icon: Award,
    color: 'indigo',
    faqs: [
      {
        question: "Are Oklahoma process servers licensed and bonded?",
        answer: "Yes. 12 O.S. § 158.1 establishes the specific requirements for private process servers:",
        columns: [
          {
            title: "Licensing Requirements",
            items: ["Oklahoma private process server license issued under 12 O.S. § 158.1", "Background check and good\u2011moral\u2011character finding as part of the licensing process", "Oklahoma residency and county/judicial district residency as required by statute", "$5,000 surety bond filed with the court as required by 12 O.S. § 158.1"]
          },
          {
            title: "Professional Standards We Follow",
            items: ["Continuing education each year to stay current on Oklahoma procedure", "Ethics training focused on due process and professionalism", "Technology training for GPS tracking, digital documentation, and secure communications"]
          }
        ],
        note: "Just Legal Solutions meets all statutory requirements and maintains additional professional standards for client peace of mind."
      },
      {
        question: "How do I verify a process server's credentials?",
        answer: "You can verify a process server by checking their license status with the Court Clerk or requesting their license number.",
        details: [
          "License Verification: Check with the County Court Clerk",
          "Bond Verification: Confirm the $5,000 bond is active",
          "Experience Review: Ask about years of experience",
          "Technology Capabilities: Confirm GPS tracking and digital documentation"
        ]
      }
    ]
  },
  {
    id: 'technology',
    title: 'Technology & Methods',
    icon: Smartphone,
    color: 'pink',
    faqs: [
      {
        question: "What technology do modern process servers use in 2026?",
        answer: "Professional process servers in 2026 use advanced technology for enhanced accuracy and transparency:",
        cards: [
          { icon: MapPin, title: "GPS Technology", items: ["Real-time location tracking", "Timestamp verification", "Route documentation"] },
          { icon: Lock, title: "Digital Security", items: ["Secure client portals", "Encrypted communications", "Digital affidavits"] },
          { icon: Bot, title: "AI Integration", items: ["Address verification", "Skip tracing algorithms", "Automated reporting"] }
        ]
      },
      {
        question: "Is electronic service legal in Oklahoma?",
        answer: "Electronic service of initial process is not standard but may be permitted under specific circumstances:",
        details: [
          "Court Order: Typically requires a court order for alternative service under 12 O.S. § 2004(D).",
          "Consent: Parties may consent to receive service electronically in some contexts.",
          "Pleadings: Subsequent pleadings (after initial service) may be served electronically under 12 O.S. § 2005.",
          "Documentation: Any electronic method used must be strictly documented and approved by the court."
        ],
        note: "Oklahoma does not have a single \"electronic service statute\" for all cases. Electronic service is generally allowed only when a court rule or order permits it or when parties give written consent that is filed with the court."
      }
    ]
  },
  {
    id: 'challenges',
    title: 'Common Challenges',
    icon: AlertCircle,
    color: 'amber',
    faqs: [
      {
        question: "What if the defendant can't be found?",
        answer: "Professional process servers have multiple strategies for difficult-to-locate defendants:",
        details: [
          "Diligent Search: Documented efforts to locate the individual.",
          "Substituted Service: Service on a resident member of the household at least 15 years old.",
          "Stakeout Services: Monitoring known locations.",
          "Publication: If all efforts fail, service by publication may be pursued (12 O.S. § 2004(C)(4))."
        ]
      },
      {
        question: "Can process servers enter private property?",
        answer: "Process servers must respect property laws while attempting service:",
        details: [
          "Access: Generally may approach the front door or common access areas.",
          "Trespass: Cannot enter a home without permission or break into locked areas.",
          "Gated Communities: Access depends on community rules and guard cooperation.",
          "Safety: Must retreat if threatened; safety is paramount."
        ],
        note: "Professional servers operate within the law to effect service without violating property rights."
      }
    ]
  }
];

const colorClasses: { [key: string]: { bg: string; border: string; text: string; light: string; gradient: string } } = {
  blue: { bg: 'bg-blue-600', border: 'border-blue-500', text: 'text-blue-600', light: 'bg-blue-50', gradient: 'from-blue-600 to-blue-700' },
  green: { bg: 'bg-green-600', border: 'border-green-500', text: 'text-green-600', light: 'bg-green-50', gradient: 'from-green-600 to-green-700' },
  purple: { bg: 'bg-purple-600', border: 'border-purple-500', text: 'text-purple-600', light: 'bg-purple-50', gradient: 'from-purple-600 to-purple-700' },
  red: { bg: 'bg-red-600', border: 'border-red-500', text: 'text-red-600', light: 'bg-red-50', gradient: 'from-red-600 to-red-700' },
  orange: { bg: 'bg-orange-600', border: 'border-orange-500', text: 'text-orange-600', light: 'bg-orange-50', gradient: 'from-orange-600 to-orange-700' },
  indigo: { bg: 'bg-indigo-600', border: 'border-indigo-500', text: 'text-indigo-600', light: 'bg-indigo-50', gradient: 'from-indigo-600 to-indigo-700' },
  pink: { bg: 'bg-pink-600', border: 'border-pink-500', text: 'text-pink-600', light: 'bg-pink-50', gradient: 'from-pink-600 to-pink-700' },
  amber: { bg: 'bg-amber-600', border: 'border-amber-500', text: 'text-amber-600', light: 'bg-amber-50', gradient: 'from-amber-600 to-amber-700' },
};

export default function OklahomaProcessServerFAQ2026() {
  return (
    <>
      <Navbar />
      <JsonLd data={faqSchema} />
      <JsonLd data={localBusinessSchema} />
      
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-blue-200 text-sm font-medium">Updated for 2026</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Oklahoma Process Server
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">FAQ 2026</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-4 max-w-2xl">
                Your complete Oklahoma process server FAQ covering 2026 requirements for process servers in Oklahoma, <Link href="/tulsa-process-server" className="text-blue-200 underline hover:text-white">Tulsa process server</Link> costs, and Oklahoma legal document service procedures.
              </p>
              <p className="text-lg text-blue-200 mb-8 max-w-2xl">
                Expert guidance from licensed Tulsa-based professionals with 50+ years combined experience serving all 77 Oklahoma counties.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#faqs" className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg">
                  <HelpCircle className="w-5 h-5" />
                  Browse FAQs
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition border border-blue-500">
                  <Phone className="w-5 h-5" />
                  Ask an Expert
                </a>
              </div>
            </div>
            
            <div className="flex-1 max-w-md">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Image 
                    src="/images/oklahoma-licensed-bonded-process-server-badges.png" 
                    alt="Licensed & Bonded" 
                    width={80} 
                    height={30}
                    className="opacity-90"
                  />
                  <div className="text-sm text-blue-200">
                    Licensed Oklahoma Process Servers
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-sm text-blue-200">Years Experience</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-white">95%</div>
                    <div className="text-sm text-blue-200">Success Rate</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-blue-200">Emergency Service</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-white">77</div>
                    <div className="text-sm text-blue-200">OK Counties</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-3 scrollbar-hide">
            {faqCategories.map((cat) => {
              const IconComponent = cat.icon;
              const colors = colorClasses[cat.color];
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`flex items-center gap-2 px-2.5 py-2 sm:px-4 rounded-full whitespace-nowrap text-sm font-medium transition flex-shrink-0 ${colors.light} ${colors.text} hover:${colors.bg} hover:text-white`}
                >
                  <IconComponent className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden sm:inline">{cat.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <main id="faqs" className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            const colors = colorClasses[category.color];
            
            return (
              <section key={category.id} id={category.id} className="mb-16 scroll-mt-32">
                <div className={`flex items-center gap-3 mb-4`}>
                  <div className={`p-3 rounded-xl ${colors.bg} text-white`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>
                {category.intro && (
                  <p className="text-gray-600 mb-8 max-w-3xl">{category.intro}</p>
                )}
                
                <div className="space-y-6">
                  {category.faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                      <div className={`border-l-4 ${colors.border}`}>
                        <div className="p-6 md:p-8">
                          <h3 className={`text-xl font-bold mb-4 ${colors.text}`}>{faq.question}</h3>
                          <p className="text-gray-700 mb-4">{faq.answer}</p>
                          
                          {/* Table rendering */}
                          {faq.table && (
                            <div className="overflow-x-auto mb-4">
                              <table className="min-w-full bg-gray-50 rounded-lg overflow-hidden">
                                <thead className={`bg-gradient-to-r ${colors.gradient} text-white`}>
                                  <tr>
                                    {faq.table.headers.map((header, i) => (
                                      <th key={i} className="px-4 py-3 text-left text-sm font-semibold">{header}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                  {faq.table.rows.map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                      {row.map((cell, j) => (
                                        <td key={j} className={`px-4 py-3 text-sm ${j === 1 ? 'font-semibold ' + colors.text : 'text-gray-700'}`}>{cell}</td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                          
                          {/* Details list */}
                          {faq.details && (
                            <ul className="space-y-2 mb-4">
                              {faq.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                                  <span className="text-gray-700">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          
                          {/* Two columns */}
                          {faq.columns && (
                            <div className="grid md:grid-cols-2 gap-6 mb-4">
                              {faq.columns.map((col, i) => (
                                <div key={i} className={`${colors.light} p-4 rounded-xl`}>
                                  <h4 className="font-semibold text-gray-900 mb-3">{col.title}</h4>
                                  <ul className="space-y-2">
                                    {col.items.map((item, j) => (
                                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                                        <CheckCircle className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {/* Cards */}
                          {faq.cards && (
                            <div className="grid md:grid-cols-3 gap-4 mb-4">
                              {faq.cards.map((card, i) => {
                                const CardIcon = card.icon;
                                return (
                                  <div key={i} className={`${colors.light} p-4 rounded-xl`}>
                                    <CardIcon className={`w-6 h-6 ${colors.text} mb-2`} />
                                    <h4 className="font-semibold text-gray-900 mb-2">{card.title}</h4>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                      {card.items.map((item, j) => (
                                        <li key={j}>• {item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                          
                          {/* Note */}
                          {faq.note && (
                            <div className={`${colors.light} border ${colors.border} rounded-lg p-4 text-sm`}>
                              <strong>Note:</strong> {faq.note}
                            </div>
                          )}
                          
                          {/* Link */}
                          {faq.link && (
                            <Link href={faq.link.href} className={`inline-flex items-center gap-2 ${colors.text} font-semibold hover:underline mt-4`}>
                              📚 {faq.link.text} →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
          
          {/* Choosing the Right Process Server */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-yellow-400" />
                <h2 className="text-2xl md:text-3xl font-bold">Choosing the Right Process Server</h2>
              </div>
              
              <p className="text-blue-100 mb-8 max-w-3xl">
                Selecting the right process server can significantly impact your case outcome. Here&apos;s what to prioritize when choosing a professional:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">Essential Qualifications</h3>
                  <ul className="space-y-3">
                    {["Current Oklahoma license and bonding", "Minimum 5+ years experience", "Knowledge of 12 O.S. § 2004 requirements", "Technology integration capabilities", "Professional insurance coverage", "Clean disciplinary record"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-blue-50">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">Service Excellence Indicators</h3>
                  <ul className="space-y-3">
                    {["High first-attempt success rates", "Real-time status updates", "GPS-verified service documentation", "24/7 client communication", "Transparent pricing structure", "Strong law firm references"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-blue-50">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Why Choose Us CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-8 h-8 text-yellow-300" />
                    <span className="text-green-100 font-medium">Why Choose Just Legal Solutions?</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Oklahoma&apos;s Trusted Process Serving Experts</h2>
                  <p className="text-green-100 mb-6">
                    As licensed Tulsa-based Oklahoma process servers trusted by law firms and businesses statewide, our 50+ years of combined experience and cutting-edge technology ensure successful service for even the most challenging cases across all 77 Oklahoma counties.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>95.3% success rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>Licensed & bonded</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>GPS technology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>24/7 portal access</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
                      <Phone className="w-5 h-5" />
                      Contact Us
                    </Link>
                    <Link href="/pricing" className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition border border-green-500">
                      <DollarSign className="w-5 h-5" />
                      View Pricing
                    </Link>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <Phone className="w-12 h-12 mx-auto mb-4 text-white" />
                    <div className="text-2xl font-bold mb-1">(539) 367-6832</div>
                    <div className="text-green-200 text-sm">Call for Free Consultation</div>
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
                  Guides & Tutorials
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/oklahoma-process-server-pricing" className="text-blue-600 hover:underline">Oklahoma Process Server Pricing Guide</Link></li>
                  <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">Oklahoma Process Server Laws & Requirements</Link></li>
                  <li><Link href="/oklahoma-process-server-best-practices-checklist-2026" className="text-blue-600 hover:underline">Process Server Best Practices Checklist 2026</Link></li>
                  <li><Link href="/process-serving-mistakes-guide" className="text-blue-600 hover:underline">Top 10 Process Serving Mistakes to Avoid</Link></li>
                  <li><Link href="/ai-skip-tracing-guide-oklahoma" className="text-blue-600 hover:underline">AI-Powered Skip Tracing Guide</Link></li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-purple-600" />
                  Specialized Services
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/family-law-service-guide-tulsa-2025" className="text-blue-600 hover:underline">Family Law Service Guide — Tulsa</Link></li>
                  <li><Link href="/oklahoma-electronic-service-guide" className="text-blue-600 hover:underline">Oklahoma Electronic Service Guide</Link></li>
                  <li><Link href="/serving-legal-papers-on-tribal-land" className="text-blue-600 hover:underline">Serving Papers on Tribal Land</Link></li>
                  <li><Link href="/weekend-emergency" className="text-blue-600 hover:underline">Weekend & Emergency Service</Link></li>
                  <li><Link href="/law-firm-services" className="text-blue-600 hover:underline">Law Firm Partnership Services</Link></li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Disclaimer */}
          <div className="text-center bg-gray-100 p-6 rounded-xl">
            <p className="text-sm text-gray-600 italic">
              This FAQ is provided for educational purposes by Just Legal Solutions, licensed Oklahoma process servers with over 50 years combined experience. Last updated: January 2026. For specific case requirements, consult with legal counsel and professional process serving experts.
            </p>
          </div>
        </div>
      </main>
      
      <AIVoiceSupremacy
        businessName="Just Legal Solutions"
        location="Oklahoma"
        services={['Process Serving', 'Legal Document Delivery', 'Skip Tracing', 'Court Filing']}
        phone="(539) 367-6832"
        skipSchema={true}
      />
      <Footer />
    </>
  );
}
