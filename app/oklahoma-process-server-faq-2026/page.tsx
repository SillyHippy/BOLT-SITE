import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';
import { Phone, Mail, Clock, Shield, MapPin, FileText, Scale, Users, Zap, CheckCircle, HelpCircle, DollarSign, Gavel, Award, Search, Smartphone, Lock, Bot, Building2, Home, AlertCircle, Star } from 'lucide-react';

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
    'article:modified_time': '2026-01-05',
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
        "text": "A process server in Oklahoma is a licensed professional who delivers legal documents to parties involved in court cases, ensuring proper notification according to Oklahoma statutes and constitutional due process requirements. Process servers must be at least 18 years old, not be a party to the case, and comply with all state licensing and bonding requirements."
      }
    },
    {
      "@type": "Question", 
      "name": "How much does process serving cost in Oklahoma in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oklahoma process serving costs in 2026 range from $85-$125 for standard service, $150-$200 for rush service, and $75/hour for stakeout services. Additional attempts cost $25 each, and skip tracing ranges from $50-$150. Volume discounts are available for law firms with multiple monthly serves."
      }
    },
    {
      "@type": "Question",
      "name": "How long does process serving take in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard process serving in Oklahoma typically takes 5-7 business days. Rush service can be completed same-day or next-day for an additional fee. Difficult serves may take longer and require additional attempts or skip tracing services."
      }
    },
    {
      "@type": "Question",
      "name": "What documents can Oklahoma process servers deliver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oklahoma process servers can deliver summons and complaints, subpoenas, divorce papers, protective orders, eviction notices, garnishment papers, and other legal documents requiring formal service. Each document type has specific service requirements under Oklahoma law."
      }
    },
    {
      "@type": "Question",
      "name": "Are Oklahoma process servers licensed and bonded?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, professional process servers in Oklahoma must be licensed and bonded. Just Legal Solutions maintains all required licenses, bonds, and insurance to ensure complete protection for our clients and compliance with Oklahoma regulations."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a licensed Oklahoma process server or can anyone serve papers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While Oklahoma law allows any person over 18 who is not a party to the case to serve papers, using a licensed professional process server ensures proper documentation, court-compliant affidavits, and higher success rates. Professional servers are trained in Oklahoma service laws and provide GPS-verified proof of service."
      }
    },
    {
      "@type": "Question",
      "name": "How does electronic service work in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Electronic service in Oklahoma is available with written consent from the defendant and court approval. It requires certified email delivery with read receipts, OSCN e-filing, and backup personal service if electronic delivery fails. See Oklahoma Rules of Civil Procedure and local court orders for specific requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What are the 2026 rules for rush and emergency process service in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rush and emergency process service in Oklahoma for 2026 follows the same statutory requirements as standard service but with expedited timelines. Same-day service is available for urgent matters, and weekend/holiday service can be arranged. Emergency court orders may permit service outside normal hours (6 AM - 10 PM)."
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
        answer: "A process server in Oklahoma is a licensed professional who delivers legal documents to parties involved in court cases, ensuring proper notification according to Oklahoma statutes and constitutional due process requirements.",
        details: [
          "Must be at least 18 years old",
          "Cannot be a party to the case being served",
          "Must comply with Oklahoma licensing requirements",
          "Must maintain proper bonding and insurance",
          "Must follow all constitutional due process protections"
        ]
      },
      {
        question: "Why do I need a professional process server?",
        answer: "Professional process servers ensure legal documents are delivered correctly and provide court-admissible proof of service, protecting your case from dismissal due to improper service.",
        details: [
          "Court-compliant documentation and affidavits",
          "GPS-verified service with timestamps",
          "Expert knowledge of Oklahoma service laws",
          "Higher first-attempt success rates",
          "Professional handling of difficult serves"
        ]
      }
    ]
  },
  {
    id: 'pricing',
    title: 'Pricing & Costs',
    intro: 'Oklahoma process server rates in 2026 for Tulsa and statewide service. Exact quotes are provided upfront in writing before dispatch.',
    icon: DollarSign,
    color: 'green',
    faqs: [
      {
        question: "How much does process serving cost in Oklahoma in 2026?",
        answer: "Oklahoma process serving costs vary based on service type, urgency, and complexity:",
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
          "No hidden fees or surprise charges",
          "Free consultations for complex serves"
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
        answer: "Service timeframes depend on the type of service requested and the complexity of locating the defendant:",
        details: [
          "Standard Service: 5-7 business days with 3 attempts",
          "Rush Service: Same-day or next-day completion",
          "Difficult Serves: 10-14 days with additional attempts",
          "Skip Tracing Required: 2-4 weeks depending on complexity"
        ],
        note: "Factors affecting timing: Address accuracy, defendant availability, geographic location, and case complexity."
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
        note: "Each document type has specific service requirements under Oklahoma law. Professional servers ensure compliance with all applicable statutes."
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
        answer: "Oklahoma process serving is governed by Title 12 of Oklahoma Statutes and must comply with federal constitutional requirements:",
        details: [
          "Personal Service (12 O.S. § 2004(A)): Direct delivery to the defendant personally",
          "Substituted Service (12 O.S. § 2004(C)): Service on competent household member or business agent",
          "Service by Publication (12 O.S. § 2004(E)): Used when defendant cannot be located after diligent search",
          "Electronic Service (12 O.S. § 12-158.1): Available with written consent from defendant",
          "Alternative Service (12 O.S. § 2004(D)): Court-ordered alternative methods when traditional service fails"
        ],
        link: { text: "Read our complete Oklahoma Process Server Laws Guide", href: "/oklahoma-process-server-laws" }
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
        answer: "Yes, professional process servers in Oklahoma must meet strict licensing and bonding requirements:",
        columns: [
          {
            title: "Licensing Requirements",
            items: ["Oklahoma state license", "Background check completion", "Continuing education (12 CEU hours/year)", "Ethics training certification", "Technology training requirements"]
          },
          {
            title: "Bonding & Insurance",
            items: ["Professional liability insurance", "Errors & omissions coverage", "Surety bond protection", "General liability coverage", "Worker's compensation"]
          }
        ],
        note: "Just Legal Solutions maintains all required licenses, bonds, and insurance for complete client protection."
      },
      {
        question: "How do I verify a process server's credentials?",
        answer: "Always verify your process server's credentials before hiring:",
        details: [
          "License Verification: Check with Oklahoma licensing authority",
          "Insurance Confirmation: Request certificate of insurance",
          "Experience Review: Ask about years of experience and specializations",
          "Technology Capabilities: Confirm GPS tracking and digital documentation",
          "References Check: Review client testimonials and law firm references",
          "Compliance Record: Verify clean disciplinary record"
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
          { icon: Lock, title: "Digital Security", items: ["Blockchain affidavits", "Encrypted communications", "Secure client portals"] },
          { icon: Bot, title: "AI Integration", items: ["Address verification", "Skip tracing algorithms", "Automated reporting"] }
        ]
      },
      {
        question: "Is electronic service legal in Oklahoma?",
        answer: "Yes, electronic service is legal in Oklahoma under specific conditions:",
        details: [
          "Written Consent Required: Defendant must provide explicit written consent (Form ES-1)",
          "Court Approval: Electronic service consent must be filed with the court",
          "Delivery Confirmation: Must use certified email with delivery and read receipts",
          "Backup Method: Personal service backup required if electronic delivery fails",
          "Documentation Standards: Comprehensive electronic service logs required"
        ],
        note: "Statute Reference: 12 O.S. § 12-158.1 governs electronic service requirements in Oklahoma."
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
          "Enhanced Skip Tracing: Database searches, social media investigation, field inquiries",
          "Stakeout Services: Extended surveillance at known addresses and workplaces",
          "Alternative Locations: Service at employment, family, or frequent locations",
          "Substituted Service: Service on competent household members or business agents",
          "Court-Ordered Alternative Service: Motion for alternative service methods",
          "Service by Publication: Newspaper publication as last resort with court approval"
        ]
      },
      {
        question: "Can process servers enter private property?",
        answer: "Oklahoma process servers can enter property to effect service but must follow specific limitations:",
        details: [
          "Public Access Areas: Driveways, walkways, and porches accessible to public",
          "Business Premises: Public areas of businesses during operating hours",
          "Gated Communities: May follow legitimate visitors or use intercom systems",
          "Prohibited Areas: Cannot break locks, enter homes, or trespass on clearly marked private areas",
          "Safety First: Must retreat if confronted with threats or violence"
        ],
        note: "Professional Standard: Experienced servers prioritize safety and legal compliance in all service attempts."
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
                Your complete Oklahoma process server FAQ covering 2026 requirements for process servers in Oklahoma, Tulsa process server costs, and Oklahoma legal document service procedures.
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
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {faqCategories.map((cat) => {
              const IconComponent = cat.icon;
              const colors = colorClasses[cat.color];
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition ${colors.light} ${colors.text} hover:${colors.bg} hover:text-white`}
                >
                  <IconComponent className="w-4 h-4" />
                  {cat.title}
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
                    {["Current Oklahoma license and bonding", "Minimum 5+ years experience", "Specialized training and certifications", "Technology integration capabilities", "Professional insurance coverage", "Clean disciplinary record"].map((item, i) => (
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
                  <li><Link href="/oklahoma-process-server-pricing-2025" className="text-blue-600 hover:underline">Oklahoma Process Server Pricing Guide</Link></li>
                  <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">Oklahoma Process Server Laws & Requirements</Link></li>
                  <li><Link href="/oklahoma-process-server-best-practices-checklist-2026" className="text-blue-600 hover:underline">Process Server Best Practices Checklist 2026</Link></li>
                  <li><Link href="/process-serving-mistakes-guide-2025" className="text-blue-600 hover:underline">Top 10 Process Serving Mistakes to Avoid</Link></li>
                  <li><Link href="/ai-skip-tracing-guide-oklahoma-2025" className="text-blue-600 hover:underline">AI-Powered Skip Tracing Guide</Link></li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-purple-600" />
                  Specialized Services
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/family-law-service-guide-tulsa-2025" className="text-blue-600 hover:underline">Family Law Service Guide</Link></li>
                  <li><Link href="/oklahoma-electronic-service-guide-2025" className="text-blue-600 hover:underline">Oklahoma Electronic Service Guide</Link></li>
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
      
      <Footer />
    </>
  );
}
