import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';
import AIVoiceSupremacy from '../../components/ui/ai-voice-supremacy';
import {
  Phone, Mail, Clock, Shield, MapPin, FileText, Scale, Users,
  CheckCircle, HelpCircle, DollarSign, Award, Star, Briefcase,
  Home, Car, Monitor, Globe, Heart, Lock, Gavel, Building2,
  AlertTriangle, CreditCard, Calendar, Zap, ChevronRight
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/notary';

export const metadata: Metadata = {
  title: 'Mobile Notary Services Tulsa OK | 24/7 Notary Public | Just Legal Solutions',
  description: '24/7 mobile notary services in Tulsa and throughout Oklahoma. In-office, remote online notarization, and travel to you. Licensed & bonded Oklahoma notaries. Call (539) 367-6832.',
  keywords: 'notary Tulsa, mobile notary Oklahoma, notary public, remote notary, RON, notary near me, Tulsa County notary, 24/7 notary, Oklahoma notary services, mobile notary near me, notary public services Tulsa',
  authors: [{ name: 'Just Legal Solutions Team' }],
  openGraph: {
    title: 'Mobile Notary Services Tulsa OK | 24/7 Notary Public | Just Legal Solutions',
    description: '24/7 mobile notary services in Tulsa and throughout Oklahoma. In-office, remote online notarization, and travel to you. Licensed & bonded Oklahoma notaries.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Mobile Notary Services Tulsa Oklahoma'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Notary Services Tulsa OK | 24/7 Notary Public',
    description: '24/7 mobile notary services in Tulsa and throughout Oklahoma. In-office, remote online notarization, and travel to you.',
    images: ['https://justlegalsolutions.org/images/hero.webp'],
    creator: '@JustLegalSolutions',
    site: '@JustLegalSolutions',
  },
  robots: 'index, follow',
  alternates: {
    canonical: canonicalUrl,
  },
  other: {
    'article:author': 'Just Legal Solutions Team',
    'article:published_time': '2026-03-22',
    'article:modified_time': '2026-03-22',
    'ai-content-type': 'service-page',
    'ai-summary': 'Oklahoma notary services: In-office starting at $20, mobile notary with travel to any location in Oklahoma, and Remote Online Notarization (RON) for signing from anywhere. Licensed & bonded Oklahoma notaries, 24/7 availability, all 77 counties served. Notary fees set by Oklahoma law at $5/act traditional, $25/act RON. Call (539) 367-6832.',
    'ai-key-facts': 'In-office notary starts at $20, mobile notary anywhere in Oklahoma, RON available worldwide, licensed & bonded, 24/7 emergency service, 50+ years combined experience, all 77 Oklahoma counties, (539) 367-6832',
  },
};

const notaryServiceSchema = {
  "@context": "https://schema.org",
  "@type": "NotaryService",
  "name": "Just Legal Solutions - Notary Services",
  "telephone": "(539) 367-6832",
  "email": "info@justlegalsolutions.org",
  "url": "https://justlegalsolutions.org/notary",
  "image": "https://justlegalsolutions.org/images/hero.webp",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Glenpool",
    "addressRegion": "OK",
    "postalCode": "74033",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.9531,
    "longitude": -96.0039
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$5-$25 per notarial act",
  "areaServed": {
    "@type": "State",
    "name": "Oklahoma"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Notary Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "In-Office Notary" },
        "price": "20.00",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Mobile Notary" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Remote Online Notarization (RON)" },
        "price": "25.00",
        "priceCurrency": "USD"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "156"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://justlegalsolutions.org/" },
    { "@type": "ListItem", "position": 2, "name": "Notary Services", "item": "https://justlegalsolutions.org/notary" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What do I need to bring for notarization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A valid, government-issued photo ID (driver's license, state ID, passport, or military ID). The document must be unsigned — you'll sign in front of the notary. We cannot notarize documents you've already signed."
      }
    },
    {
      "@type": "Question",
      "name": "Can you notarize a document I already signed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Oklahoma law requires you to sign in the notary's presence. If you've already signed, you'll need to sign again on a new copy."
      }
    },
    {
      "@type": "Question",
      "name": "How long does notarization take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In-office: Typically 15-30 minutes. Mobile: Depends on travel time, usually 20-45 minutes on-site. RON: 30-60 minutes from upload to completion."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer same-day service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer same-day notary services for all three service types. Call (539) 367-6832 early for best availability. After-hours and weekend appointments also available."
      }
    },
    {
      "@type": "Question",
      "name": "Can a notary come to my house?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! That's our mobile notary service. We come to your home, office, hospital, nursing home, jail, or any location in Oklahoma. Travel fees apply based on distance."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a notary cost in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oklahoma law caps notary fees at $5 per traditional notarial act and $25 per Remote Online Notarization act. Our in-office service starts at $20. Mobile notary travel fees vary by distance and urgency — contact us for a quote."
      }
    }
  ]
};

const trustBadges = [
  { icon: Shield, label: 'Licensed & Bonded' },
  { icon: Star, label: '4.9★ (156+ Reviews)' },
  { icon: Clock, label: 'Same-Day Available' },
  { icon: Award, label: '50+ Years Combined Experience' },
  { icon: MapPin, label: 'Serving All 77 Oklahoma Counties' },
];

const documentCategories = [
  {
    title: 'Legal & Estate Documents',
    icon: Scale,
    items: ['Last will and testaments', 'Living wills and advance directives', 'Durable power of attorney (financial)', 'Medical power of attorney', 'Healthcare directives', 'Trust documents', 'Affidavits of common law marriage', 'Beneficiary designation forms', 'Probate documents']
  },
  {
    title: 'Real Estate & Property',
    icon: Home,
    items: ['Mortgage documents', 'Refinance packages', 'Deeds (warranty, quitclaim, etc.)', 'Title transfers', 'Lease agreements', 'Property affidavits', 'Home equity loans', 'Reverse mortgage paperwork', '1031 exchange documents', 'Closing disclosure forms']
  },
  {
    title: 'Business Documents',
    icon: Briefcase,
    items: ['Contracts and agreements', 'Corporate resolutions', 'Partnership agreements', 'Articles of incorporation', 'Business licenses', 'Employment verification letters', 'Vendor contracts', 'Non-disclosure agreements (NDAs)', 'Board meeting minutes', 'Stock transfer documents']
  },
  {
    title: 'Personal Documents',
    icon: FileText,
    items: ['Vehicle title transfers', 'Boat, RV, trailer titles', 'Bill of sale (vehicles, equipment)', 'Permission to travel with minor letters', 'Name change affidavits', 'Identity affidavits', 'Signature witnesses', 'Personal property affidavits']
  },
  {
    title: 'Court & Government Forms',
    icon: Gavel,
    items: ['Court affidavits', 'Depositions', 'Verification forms', 'Government applications', 'Social Security documents', 'Veterans benefits forms', 'IRS forms requiring notarization', 'State agency forms']
  }
];

const cannotNotarize = [
  { category: 'Federal Documents', items: ['Birth certificates — must be certified by state/county health department', 'Death certificates — must come from funeral home or vital records', 'Marriage certificates — must be filed with county clerk', 'Passports — only authorized passport acceptance agents', 'Immigration forms (I-9, etc.) — federal forms have specific requirements'] },
  { category: 'Academic Documents', items: ['University degrees/diplomas — must be certified by school registrar', 'Transcripts — must come directly from school', 'Professional certifications — must come from issuing organization'] },
  { category: 'Other Restrictions', items: ['Documents signed before you arrive — must sign in notary\'s presence', 'Incomplete documents — blanks must be filled before notarization', 'Documents without proper ID', 'Notary\'s own signature — cannot notarize their own documents', 'Documents in a language the notary doesn\'t understand'] }
];

const serviceAreas = {
  primary: ['Tulsa', 'Broken Arrow', 'Owasso', 'Bixby', 'Jenks', 'Sand Springs', 'Sapulpa', 'Catoosa', 'Collinsville', 'Glenpool', 'Skiatook', 'Inola', 'Coweta', 'Kiefer'],
  extended: ['Oklahoma City metro (OKC, Edmond, Norman, Moore)', 'Stillwater', 'Bartlesville', 'Muskogee', 'Enid', 'Lawton', 'Ardmore', 'Ponca City', 'Shawnee', 'McAlester']
};

const previewFaqs = [
  {
    q: 'What do I need to bring for notarization?',
    a: 'A valid, government-issued photo ID (driver\'s license, state ID, passport, or military ID). The document must be unsigned — you\'ll sign in front of the notary. We cannot notarize documents you\'ve already signed.'
  },
  {
    q: 'Can you notarize a document I already signed?',
    a: 'No. Oklahoma law requires you to sign in the notary\'s presence. If you\'ve already signed, you\'ll need to sign again on a new copy. This is a state law requirement, not our policy.'
  },
  {
    q: 'How long does notarization take?',
    a: 'In-office: Typically 15-30 minutes. Mobile: Depends on travel time, usually 20-45 minutes on-site. RON: 30-60 minutes from upload to completion.'
  },
  {
    q: 'Do you offer same-day service?',
    a: 'Yes! We offer same-day notary services for all three service types. Call (539) 367-6832 early for best availability. After-hours and weekend appointments also available.'
  },
  {
    q: 'Can a notary come to my house?',
    a: 'Yes! That\'s our mobile notary service. We come to your home, office, hospital, nursing home, jail, or any location in Oklahoma. Travel fees apply based on distance.'
  },
  {
    q: 'What if I don\'t have ID?',
    a: 'You can bring a credible witness who has valid ID and is personally known to the notary. Alternatively, get a state ID from Oklahoma DPS. We cannot notarize without proper ID verification.'
  }
];

export default function NotaryPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={notaryServiceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-blue-200 text-sm font-medium">Licensed & Bonded — Available 24/7</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Notary Public Services in{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tulsa & Throughout Oklahoma</span>
              </h1>

              <p className="text-xl text-blue-100 mb-4 max-w-2xl">
                Get documents notarized your way — in our office, at your location, or completely online. Same-day appointments available across all 77 Oklahoma counties.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg">
                  <Phone className="w-5 h-5" />
                  Call (539) 367-6832
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition border border-blue-500">
                  <Calendar className="w-5 h-5" />
                  Book Online
                </Link>
              </div>
            </div>

            <div className="flex-1 max-w-md">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-sm text-blue-200">Years Experience</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-white">4.9★</div>
                    <div className="text-sm text-blue-200">156+ Reviews</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-blue-200">Availability</div>
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

      {/* Trust Badges Bar */}
      <section className="bg-white border-b py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-6 justify-center scrollbar-hide">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="flex items-center gap-2 whitespace-nowrap text-sm text-gray-700">
                  <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <main className="bg-gray-50">
        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Notary Services That Fit Your Schedule</h2>
            <p className="text-xl text-gray-600 mb-4">Life doesn&apos;t wait for business hours. Neither do we.</p>
            <p className="text-lg text-gray-700 mb-8">
              At Just Legal Solutions, we understand that notarization needs don&apos;t always happen on a convenient schedule. That&apos;s why we offer <strong>three flexible ways</strong> to get your documents notarized — all backed by our team&apos;s 50+ years of combined experience serving Oklahoma&apos;s legal community.
            </p>
            <p className="text-gray-700 mb-8">
              Whether you&apos;re closing on a house, executing a power of attorney, handling estate documents, or need urgent notarization for a time-sensitive legal matter, our commissioned Oklahoma notaries are ready to help — day or night, weekends and holidays included.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Commissioned Oklahoma notaries (verified via Secretary of State)',
                '$10,000 surety bond protection (required by Oklahoma law)',
                'Errors & Omissions (E&O) insurance coverage',
                'Detailed journal records of every notarization',
                'Secure document handling and confidentiality',
                'Court-ready affidavits of notarization',
                'Digital copies emailed immediately',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Three Service Type Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Notary Service</h2>
              <p className="text-lg text-gray-600">Three convenient options to fit any situation</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {/* In-Office */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <Building2 className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-bold">In-Office Notary</h3>
                  <p className="mt-2 text-blue-100">Affordable flat-rate pricing</p>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-600 mb-4">Quick, professional notarization when you&apos;re in the Tulsa area.</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {['Comprehensive document review', 'Private signing area', 'Digital copy emailed to you', 'Court-ready affidavit', 'Professional notary seal & signature', 'Typical turnaround: 15-30 minutes'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mb-4"><strong>Hours:</strong> Mon–Fri 8 AM–6 PM | Sat by appointment | Sun emergency only</p>
                  <Link href="/pricing" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
                    View Pricing →
                  </Link>
                </div>
              </div>

              {/* Mobile */}
              <div className="flex flex-col">
                <div className="bg-green-600 text-white text-xs font-bold text-center py-2 rounded-t-2xl tracking-wider uppercase">★ Most Popular ★</div>
                <div className="bg-white rounded-b-2xl shadow-lg border-2 border-green-500 border-t-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col flex-1">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                  <Car className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-bold">Mobile Notary</h3>
                  <p className="mt-2 text-green-100">Competitive per-act pricing</p>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-600 mb-4">We come to you — home, office, hospital, or anywhere in Oklahoma.</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {['Everything from in-office service', 'Travel to your location statewide', 'Flexible scheduling (evenings/weekends)', 'Multiple signers — no extra notary fee', 'Hospital, nursing home & jail visits', 'Same-day available (1-4 hrs notice in Tulsa)'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mb-4">Travel fees vary by distance. <Link href="/pricing" className="text-green-600 underline">See our pricing</Link></p>
                  <a href="tel:5393676832" className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
                    Get Mobile Notary Quote →
                  </a>
                  <Link href="/mobile-notary" className="block text-center text-green-600 hover:text-green-700 font-medium mt-3 text-sm">
                    Learn More About Mobile Notary →
                  </Link>
                </div>
              </div>
              </div>

              {/* RON */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
                  <Monitor className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-bold">Remote Online (RON)</h3>
                  <p className="mt-2 text-purple-100">Simple flat-rate pricing</p>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-600 mb-4">100% online via secure video. Sign from anywhere in the world.</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {['Secure, encrypted video platform', 'Multi-factor identity verification', 'Electronic signature and seal', 'Recorded session (stored 10 years)', 'Instant download of notarized document', 'Works on any device — no download needed'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mb-4">Platform fee may apply. <Link href="/pricing" className="text-purple-600 underline">View pricing</Link></p>
                  <Link href="/contact" className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition">
                    Start Remote Notarization →
                  </Link>
                  <Link href="/remote-online-notary" className="block text-center text-purple-600 hover:text-purple-700 font-medium mt-3 text-sm">
                    Learn More About RON →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Just Legal Solutions for Notary Services?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: 'Licensed & Bonded', desc: 'All notaries commissioned by the Oklahoma Secretary of State with $10,000 surety bonds as required by law (49 O.S. § 101 et seq.).' },
                { icon: Clock, title: '24/7 Availability', desc: 'Document emergencies don\'t keep business hours. Available nights, weekends, and holidays with transparent pricing.' },
                { icon: MapPin, title: 'Statewide Coverage', desc: 'Based in Tulsa County, serving all 77 Oklahoma counties. From Tulsa to OKC, Bartlesville to Lawton — we\'ll come to you.' },
                { icon: Lock, title: 'Secure & Compliant', desc: 'We follow all Oklahoma notary laws, maintain detailed journals, and handle documents with complete confidentiality.' },
                { icon: Award, title: 'Experienced Team', desc: 'Trusted by Oklahoma\'s legal community since 2020 with 50+ years\' combined experience in legal document services.' },
                { icon: DollarSign, title: 'Transparent Pricing', desc: 'Notary fees capped by state law. Travel fees quoted upfront. We confirm total price before you book.' },
                { icon: Star, title: 'Proven Track Record', desc: '156+ verified reviews across Google, Yelp, and Facebook with a 4.9★ average rating.' },
                { icon: Users, title: 'One-Stop Shop', desc: 'Need process serving, courier services, or skip tracing too? One call handles everything.' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition">
                    <Icon className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Documents We Notarize */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Documents We Notarize</h2>
              <p className="text-lg text-gray-600">Our notaries handle a wide variety of documents for individuals, businesses, and legal professionals throughout Oklahoma.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {documentCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-gray-900">{cat.title}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {cat.items.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Cannot Notarize */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-red-900">Documents We Cannot Notarize</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {cannotNotarize.map((cat, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-red-800 mb-3">{cat.category}</h4>
                    <ul className="space-y-2">
                      {cat.items.map((item, i) => (
                        <li key={i} className="text-sm text-red-700 flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">✕</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-sm text-red-600 mt-6">
                For a complete explanation of these restrictions and Oklahoma notary laws, see our{' '}
                <Link href="/notary-laws" className="font-semibold underline hover:text-red-800">Oklahoma Notary Laws Guide</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-900">Primary — Tulsa County</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.primary.map((city, i) => (
                    <span key={i} className="bg-white text-sm text-blue-700 px-3 py-1 rounded-full border border-blue-200">{city}</span>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">Extended — All 77 Counties</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {serviceAreas.extended.map((city, i) => (
                    <span key={i} className="bg-white text-sm text-green-700 px-3 py-1 rounded-full border border-green-200">{city}</span>
                  ))}
                </div>
                <p className="text-sm text-green-700 mt-3">Travel fees apply. <a href="tel:5393676832" className="font-semibold underline">Call for a quote</a>.</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <Monitor className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-purple-900">RON — Anywhere</h3>
                </div>
                <p className="text-sm text-purple-700 mb-3">With Remote Online Notarization, you can sign from anywhere in the world. The notary must be physically in Oklahoma, but you can be located:</p>
                <ul className="space-y-1.5 text-sm text-purple-700">
                  <li>• Any U.S. state</li>
                  <li>• Any country internationally</li>
                  <li>• Military bases overseas</li>
                  <li>• Ships, remote locations, etc.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent, State-Compliant Pricing</h2>
              <p className="text-lg text-gray-600">Oklahoma law sets maximum notary fees. We charge fairly within these limits.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Service Type</th>
                    <th className="px-6 py-4 text-left font-semibold">State Maximum</th>
                    <th className="px-6 py-4 text-left font-semibold">Our Pricing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-4 text-gray-700">In-Office Notary</td>
                    <td className="px-6 py-4 text-gray-700">$5.00 per act</td>
                    <td className="px-6 py-4 font-semibold text-green-700">Starting at $20</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Mobile Notary</td>
                    <td className="px-6 py-4 text-gray-700">$5.00 per act + travel</td>
                    <td className="px-6 py-4 font-semibold text-green-700">Starting at $25/act</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Remote Online (RON)</td>
                    <td className="px-6 py-4 text-gray-700">$25.00 per act</td>
                    <td className="px-6 py-4 font-semibold text-green-700">Starting at $25/act</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Absentee Ballot Affidavits</td>
                    <td className="px-6 py-4 text-gray-700">FREE (required by law)</td>
                    <td className="px-6 py-4 font-semibold text-green-700">FREE</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-sm text-blue-800">
                <strong>What&apos;s a &quot;notarial act&quot;?</strong> Each signature that requires notarization counts as one act. A document with 3 signatures = 3 notarial acts. Volume discounts are available for law firms, title companies, and businesses with recurring needs.
              </p>
            </div>

            <div className="text-center">
              <Link href="/pricing#notary" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition">
                <DollarSign className="w-5 h-5" />
                View Complete Notary Pricing →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Notary FAQs</h2>
            </div>

            <div className="space-y-4 mb-8">
              {previewFaqs.map((faq, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-sm transition">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 ml-7">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/notary-faqs" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                <HelpCircle className="w-5 h-5" />
                See All 50+ Notary FAQs →
              </Link>
            </div>
          </div>
        </section>

        {/* Specialized Notary Services */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">Specialized Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expert Notary Services for Every Situation</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">From emergency hospital signings to complex real estate closings, our specialized notary services ensure your documents are handled with expertise and care.</p>
            </div>

            {/* Primary Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Link href="/mobile-notary" className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition">
                  <Car className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition">Mobile Notary</h3>
                <p className="text-gray-600 text-sm mb-4">We travel to your home, office, hospital, or any location in Oklahoma. 24/7 availability for urgent needs.</p>
                <div className="flex items-center text-green-600 font-medium text-sm">
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                </div>
              </Link>

              <Link href="/remote-online-notary" className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition">
                  <Monitor className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition">Remote Online Notarization</h3>
                <p className="text-gray-600 text-sm mb-4">Sign from anywhere in the world via secure video conference. Oklahoma RON-certified and available 24/7.</p>
                <div className="flex items-center text-purple-600 font-medium text-sm">
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                </div>
              </Link>

              <Link href="/real-estate-notary" className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition">
                  <Home className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">Real Estate & Loan Signing</h3>
                <p className="text-gray-600 text-sm mb-4">Expert loan signing agent services for closings, refinances, HELOCs, and complex loan packages up to 150 pages.</p>
                <div className="flex items-center text-amber-600 font-medium text-sm">
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                </div>
              </Link>

              <Link href="/hospital-notary" className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition">Hospital & Jail Notary</h3>
                <p className="text-gray-600 text-sm mb-4">Emergency notarizations at hospitals, nursing homes, jails, and correctional facilities. Capacity assessment expertise.</p>
                <div className="flex items-center text-red-600 font-medium text-sm">
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                </div>
              </Link>

              <Link href="/apostille" className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">Apostille Services</h3>
                <p className="text-gray-600 text-sm mb-4">International document authentication for 120+ Hague Convention countries. Complete preparation and filing assistance.</p>
                <div className="flex items-center text-indigo-600 font-medium text-sm">
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                </div>
              </Link>

              <Link href="/wedding-officiant" className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-rose-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-200 transition">
                  <Heart className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-500 transition">Wedding Officiant</h3>
                <p className="text-gray-600 text-sm mb-4">Ordained since 2017 to perform marriage ceremonies. Courthouse weddings, elopements, and personalized ceremonies.</p>
                <div className="flex items-center text-rose-500 font-medium text-sm">
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            </div>

            {/* Resource Cards */}
            <div className="bg-gradient-to-br from-gray-900 to-slate-800 rounded-3xl p-8 md:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Helpful Resources</h3>
                <p className="text-gray-400">Prepare for your appointment and learn about Oklahoma notary requirements</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/what-to-bring" className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition">
                  <FileText className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">What to Bring</h4>
                  <p className="text-gray-400 text-sm">ID requirements, documents, and appointment prep checklist</p>
                </Link>
                <Link href="/mobile-notary-vs-bank" className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition">
                  <Scale className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">Mobile vs Bank Notary</h4>
                  <p className="text-gray-400 text-sm">Compare options and hidden costs to make the best choice</p>
                </Link>
                <Link href="/notary-faqs" className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition">
                  <HelpCircle className="w-8 h-8 text-amber-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">Notary FAQs</h4>
                  <p className="text-gray-400 text-sm">50+ frequently asked questions about notarization</p>
                </Link>
                <Link href="/notary-laws" className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition">
                  <Gavel className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">Oklahoma Notary Laws</h4>
                  <p className="text-gray-400 text-sm">49 O.S. § 101 et seq and 2026 legislative updates</p>
                </Link>
              </div>
            </div>

            {/* County & Credentials Row */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Link href="/notary/tulsa-county" className="group flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">Tulsa County Notary</h4>
                  <p className="text-sm text-gray-500">Local notary services in Tulsa</p>
                </div>
              </Link>
              <Link href="/notary/creek-county" className="group flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">Creek County Notary</h4>
                  <p className="text-sm text-gray-500">Sapulpa, Bristow & surrounding areas</p>
                </div>
              </Link>
              <Link href="/notary/joseph" className="group flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition">Meet Joseph Iannazzi</h4>
                  <p className="text-sm text-gray-500">View credentials & certifications</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Documents Notarized?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Choose your preferred method and get started today. Our licensed Oklahoma notaries are standing by.</p>

              <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto text-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Building2 className="w-6 h-6 mb-2 text-blue-200" />
                  <h3 className="font-semibold mb-1">In-Office</h3>
                  <p className="text-sm text-blue-200">Visit us — appointments recommended</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Car className="w-6 h-6 mb-2 text-green-300" />
                  <h3 className="font-semibold mb-1">Mobile</h3>
                  <p className="text-sm text-blue-200">We come to you — anywhere in OK</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Monitor className="w-6 h-6 mb-2 text-purple-300" />
                  <h3 className="font-semibold mb-1">Remote</h3>
                  <p className="text-sm text-blue-200">100% online via secure video</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a href="tel:5393676832" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-lg">
                  <Phone className="w-5 h-5" />
                  Call (539) 367-6832
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 transition border border-blue-400">
                  <Mail className="w-5 h-5" />
                  Book Online
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto text-sm text-blue-200">
                <div><strong className="text-white">Business hrs</strong><br/>Within 1 hour</div>
                <div><strong className="text-white">After hours</strong><br/>Within 4 hours</div>
                <div><strong className="text-white">Emergencies</strong><br/>Immediate</div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-blue-200 mb-2"><strong className="text-white">Payment Methods:</strong> Cash, Credit/Debit Cards, Business Checks, Wire Transfer</p>
                <p className="text-sm text-blue-200"><strong className="text-white">Email:</strong> <a href="mailto:info@justlegalsolutions.org" className="underline hover:text-white">info@justlegalsolutions.org</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AIVoiceSupremacy
        businessName="Just Legal Solutions"
        location="Tulsa, Oklahoma"
        services={['Notary Services', 'Mobile Notary', 'Remote Online Notarization', 'Process Serving']}
        phone="(539) 367-6832"
        skipSchema={true}
      />
      <Footer />
    </>
  );
}
