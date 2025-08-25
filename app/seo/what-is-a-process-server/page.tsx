import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import EnhancedBreadcrumbSchema, { VisualBreadcrumbs } from '@/components/ui/enhanced-breadcrumb-schema';
 
import VoiceSearchOptimization from '@/components/ui/voice-search-optimization';
import PerformanceSchema from '@/components/ui/performance-schema';

// Enhanced metadata for maximum SEO impact
export const metadata: Metadata = {
  title: 'What Is a Process Server? Professional Legal Document Delivery in Tulsa, Oklahoma | Just Legal Solutions',
  description: 'Learn what a process server does in Oklahoma—expert legal document delivery, court papers, and subpoenas. Trusted by law firms and individuals for fast, licensed, and reliable service.',
  keywords: [
    'what is a process server',
    'process server Tulsa',
    'Oklahoma process server',
    'service of process Oklahoma',
    'due process',
    'legal document delivery',
    'court document service',
    'subpoena service Tulsa',
    'skip tracing Oklahoma',
    'certified process server',
    'affidavit of service',
    'hire process server Tulsa',
    'professional process server',
    'licensed process server Oklahoma',
    'process server cost Oklahoma',
    'emergency process server',
    'same day process server'
  ],
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
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/what-is-a-process-server'
  },
  openGraph: {
    title: 'What Is a Process Server? Professional Legal Document Delivery in Tulsa, Oklahoma',
  description: 'Oklahoma process server with 50+ years experience—licensed, bonded, and available 24/7 for urgent legal document delivery and court papers.',
    url: 'https://justlegalsolutions.org/seo/what-is-a-process-server',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [{
      url: 'https://justlegalsolutions.org/images/due-process-legal-concept.png',
      width: 1200,
      height: 630,
      alt: 'Due process legal concept - Professional process server in Oklahoma',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a Process Server? Professional Legal Document Delivery in Tulsa, Oklahoma',
    description: 'Professional process server in Tulsa, Oklahoma with 50+ years legal experience. Licensed & bonded. 24/7 emergency service available.',
    images: ['https://justlegalsolutions.org/images/due-process-legal-concept.png'],
  }
};

// Enhanced FAQ Schema for AI optimization
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a process server and what do they do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A process server is a trained and licensed professional responsible for delivering legal documents to individuals involved in a court case. This act is known as 'service of process' and is essential for upholding due process rights in the legal system."
      }
    },
    {
      "@type": "Question",
      "name": "Is a process server required for all legal documents in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most court-filed documents that initiate a lawsuit or require a response, a licensed third-party process server is required to ensure service is legally valid and impartial."
      }
    },
    {
      "@type": "Question",
      "name": "How much does process serving cost in Tulsa, Oklahoma?",
      "acceptedAnswer": {
  "@type": "Answer",
  "text": "Service in the Tulsa metro starts at $30, with rates ranging from $30 to $200 depending on urgency, location, and complexity. Emergency and same-day service available."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can process servers deliver documents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer same-day service for urgent documents. Most standard service requests are completed within 24-48 hours in the Tulsa metro area."
      }
    },
    {
      "@type": "Question",
      "name": "What if the person is actively avoiding service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional process servers use various legal methods, flexible timing, and skip tracing techniques to locate and serve difficult recipients. We provide detailed attempt reports and alternative service strategies."
      }
    },
    {
      "@type": "Question",
      "name": "Do process servers provide proof of service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, process servers complete a sworn Affidavit of Service after delivery, providing legal proof with detailed time, date, location, and manner of service information required by Oklahoma courts."
      }
    },
    {
      "@type": "Question",
      "name": "What types of legal documents do process servers deliver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Process servers deliver summons and complaints, divorce papers, subpoenas, eviction notices, restraining orders, small claims documents, citations, and business litigation papers."
      }
    }
  ]
};

// LocalBusiness Schema for local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Just Legal Solutions",
  "url": "https://justlegalsolutions.org",
  "telephone": "(539) 367-6832",
  "email": "info@justlegalsolutions.org",
  "description": "Professional process server in Tulsa, Oklahoma with 50+ years legal field experience. Licensed and bonded. 24/7 emergency service available throughout Oklahoma.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "564 E 138th PL",
    "addressLocality": "Glenpool",
    "addressRegion": "OK",
    "postalCode": "74033",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Oklahoma"
    },
    {
      "@type": "City",
      "name": "Tulsa"
    },
    {
      "@type": "City", 
      "name": "Glenpool"
    },
    {
      "@type": "City",
      "name": "Broken Arrow"
    },
    {
      "@type": "City",
      "name": "Owasso"
    },
    {
      "@type": "City",
      "name": "Jenks"
    },
    {
      "@type": "City",
      "name": "Bixby"
    },
    {
      "@type": "City",
      "name": "Sand Springs"
    },
    {
      "@type": "City",
      "name": "Sapulpa"
    },
    {
      "@type": "City", 
      "name": "Bartlesville"
    },
    {
      "@type": "City",
      "name": "Muskogee"
    },
    {
      "@type": "City",
      "name": "Stillwater"
    },
    {
      "@type": "City",
      "name": "Claremore"
    },
    {
      "@type": "City",
      "name": "Oklahoma City"
    },
    {
      "@type": "City",
      "name": "Norman"
    },
    {
      "@type": "City",
      "name": "Lawton"
    },
    {
      "@type": "City",
      "name": "Enid"
    },
    {
      "@type": "City",
      "name": "Durant"
    },
    {
      "@type": "City",
      "name": "McAlester"
    },
    {
      "@type": "City",
      "name": "Pryor"
    },
    {
      "@type": "City",
      "name": "Okmulgee"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "serviceType": "Process Server",
  "priceRange": "$30-$150",
  "foundingDate": "2025-03",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Oklahoma Process Server Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Summons and Complaints Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Divorce Paper Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Subpoena Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Skip Tracing Service"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "146"
  }
};

// Enhanced Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Is a Process Server? Professional Legal Document Delivery in Oklahoma",
  "author": {
    "@type": "Organization",
    "name": "Just Legal Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Just Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://justlegalsolutions.org/images/jls-logo.png",
      "width": 600,
      "height": 200
    }
  },
  "datePublished": "2025-08-05",
  "dateModified": "2025-08-05",
  "description": "Comprehensive guide explaining what a process server is, their legal responsibilities in Oklahoma, and why they are critical for upholding due process in the legal system.",
  "image": {
    "@type": "ImageObject",
    "url": "https://justlegalsolutions.org/images/due-process-legal-concept.png",
    "width": 1200,
    "height": 630
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://justlegalsolutions.org/seo/what-is-a-process-server"
  },
  "wordCount": 2500,
  "articleSection": "Legal Services"
};

// Breadcrumb structure for better navigation
const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Resources', url: '/resources' },
  { name: 'What Is a Process Server', url: '/seo/what-is-a-process-server' }
];

// Enhanced Article Schema with more detail
const enhancedArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Is a Process Server and Why Are They Essential for Due Process?",
  "author": {
    "@type": "Organization",
    "name": "Just Legal Solutions",
    "url": "https://justlegalsolutions.org",
    "telephone": "(539) 367-6832"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Just Legal Solutions", 
    "logo": {
      "@type": "ImageObject",
      "url": "https://justlegalsolutions.org/images/jls-logo.png",
      "width": 1200,
      "height": 630
    }
  },
  "datePublished": "2024-03-01T00:00:00Z",
  "dateModified": new Date().toISOString(),
  "description": "A comprehensive guide to what a process server is, their legal responsibilities in Oklahoma, and why they are a critical part of the justice system.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://justlegalsolutions.org/seo/what-is-a-process-server"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://justlegalsolutions.org/images/due-process-legal-concept.png",
    "width": 1200,
    "height": 630
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".voice-optimized"],
    "xpath": [
      "/html/body/main/div/article/header/h1",
      "/html/body/main/div/article/section[1]/h2"
    ]
  }
};

export default function WhatIsAProcessServerPage() {
  return (
    <>
      {/* Enhanced Schema Suite */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        id="enhanced-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedArticleSchema) }}
      />
      
      <EnhancedBreadcrumbSchema items={breadcrumbItems} />
      <VoiceSearchOptimization
        primaryQuestions={[
          "What is a process server",
          "How much does a process server cost",
          "Do I need a process server",
          "How long does process serving take"
        ]}
        conversationalAnswers={[
          "A process server is a licensed professional who delivers legal documents to ensure due process",
          "Process serving costs vary by urgency and location, starting from $30 for bulk orders and standard service at $60 in Tulsa",
          "Yes, most legal proceedings require professional process service for validity",
          "Standard service takes 24-48 hours, same-day service available for urgent matters"
        ]}
        localIntent={true}
      />
      <PerformanceSchema
        pageName="What Is a Process Server Guide"
        pageUrl="/seo/what-is-a-process-server"
        loadTime={2.0}
        mobileOptimized={true}
      />

      <Navbar />
      
      <main className="min-h-screen bg-white text-gray-900 font-sans pt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <VisualBreadcrumbs items={breadcrumbItems} />
          
          {/* Enhanced Hero Section with 24/7 Availability */}
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-xl mb-12 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <Image 
                src="/images/jls-logo.png"
                alt="Just Legal Solutions professional header"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight voice-optimized">
                What Is a Process Server?<br />
                <span className="text-yellow-300">Professional Legal Document Delivery in Oklahoma</span>
              </h1>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 voice-optimized">Professional Legal Document Service in Oklahoma</h2>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-xl mb-4 leading-relaxed voice-optimized">
                    Understanding the critical role process servers play in upholding due process and ensuring proper legal notification throughout Oklahoma.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-green-500 px-4 py-2 rounded-full text-sm font-semibold">✓ Licensed & Bonded</span>
                    <span className="bg-yellow-500 px-4 py-2 rounded-full text-sm font-semibold text-black">✓ 50+ Years Experience</span>
                    <span className="bg-purple-500 px-4 py-2 rounded-full text-sm font-semibold">✓ 24/7 Service</span>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-white border-opacity-20 mb-4">
                    <h3 className="text-xl font-bold mb-2">Need Service Today?</h3>
                    <a href="tel:5393676832" className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-700 transition inline-block mb-3 shadow-lg">
                      📞 Call (539) 367-6832
                    </a>
                    <p className="text-sm opacity-90">Available 24/7 • Emergency & weekend service</p>
                    <div className="flex flex-col gap-2 mt-3">
                      <a href="mailto:info@justlegalsolutions.org" className="text-sm underline hover:no-underline">📧 info@justlegalsolutions.org</a>
                      <a href="/contact" className="text-sm underline hover:no-underline">📝 Get Online Quote →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article className="max-w-none mx-auto prose prose-lg">
            
            {/* Table of Contents for Better Navigation */}
            <nav className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12 not-prose">
              <div className="text-xl font-bold text-blue-900 mb-4">📋 Complete Navigation Guide</div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ul className="space-y-2 text-sm">
                  <li><a href="#due-process" className="text-blue-700 hover:underline font-medium">→ What Is Due Process?</a></li>
                  <li><a href="#workflow" className="text-blue-700 hover:underline font-medium">→ Process Server Workflow</a></li>
                  <li><a href="#service-areas" className="text-blue-700 hover:underline font-medium">→ Oklahoma Service Areas</a></li>
                  <li><a href="#document-types" className="text-blue-700 hover:underline font-medium">→ Types of Legal Documents</a></li>
                  <li><a href="#vs-sheriff" className="text-blue-700 hover:underline font-medium">→ Professional vs Sheriff</a></li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li><a href="#faq" className="text-blue-700 hover:underline font-medium">→ Comprehensive FAQ</a></li>
                  <li><a href="#licensing" className="text-blue-700 hover:underline font-medium">→ Oklahoma Licensing Laws</a></li>
                  <li><a href="#after-service" className="text-blue-700 hover:underline font-medium">→ What Happens After Service</a></li>
                  <li><a href="#skip-tracing" className="text-blue-700 hover:underline font-medium">→ Skip Tracing Services</a></li>
                  <li><a href="#emergency-service" className="text-blue-700 hover:underline font-medium">→ Emergency Service</a></li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li><a href="#technology" className="text-blue-700 hover:underline font-medium">→ Modern Technology</a></li>
                  <li><a href="#pricing" className="text-blue-700 hover:underline font-medium">→ Transparent Pricing</a></li>
                  <li><a href="#testimonials" className="text-blue-700 hover:underline font-medium">→ Client Success Stories</a></li>
                  <li><a href="#credentials" className="text-blue-700 hover:underline font-medium">→ Professional Credentials</a></li>
                  <li><a href="/contact" className="text-blue-700 hover:underline font-medium">→ Get a Quote</a></li>
                </ul>
              </div>
            </nav>
            
            {/* Introduction with Due Process Visual */}
            <section className="mb-12">
              <div className="text-center mb-8">
                <Image 
                  src="/images/due-process-legal-concept.png"
                  alt="Due process legal concept - Foundation of justice"
                  width={800}
                  height={500}
                  className="rounded-xl shadow-lg mx-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                  priority
                />
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg mb-8">
                <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                  In the legal world, the term <strong>&ldquo;process server&rdquo;</strong> is fundamental to our justice system. But what exactly do they do, and why is their role so critical? This comprehensive guide breaks down the responsibilities of a <Link href="/tulsa-process-server" className="text-blue-600 hover:underline font-medium">process server in Tulsa</Link> and explains their vital importance in the <Link href="/counties/tulsa-county" className="text-blue-600 hover:underline font-medium">Oklahoma legal system</Link>.
                </p>
              </div>
            </section>

          {/* Professional Image */}
          <div className="text-center mb-8">
            <Image 
              src="/images/tulsa-process-server-delivering-documents.png"
              alt="Professional process server delivering legal documents in Tulsa, Oklahoma"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 600px"
              priority
            />
          </div>

          {/* Why Choose Just Legal Solutions - Enhanced */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 voice-optimized">Why Choose Just Legal Solutions as Your Tulsa Process Server?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-lg text-green-800 mb-3">✓ 50+ Years Legal Field Experience</h3>
                <p className="text-gray-700">Extensive background in Oklahoma legal system ensures proper service every time.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-lg text-blue-800 mb-3">✓ Licensed & Bonded in Oklahoma</h3>
                <p className="text-gray-700">Fully compliant with all Oklahoma state requirements and insured for your protection.</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-lg text-purple-800 mb-3">✓ Same-Day Service Available</h3>
                <p className="text-gray-700">Urgent documents served within hours, standard service within 24-48 hours.</p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-lg text-yellow-800 mb-3">✓ Statewide Oklahoma Coverage</h3>
                <p className="text-gray-700">Serving all 77 counties in Oklahoma with professional skip tracing services.</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="text-center mb-8">
              <Image 
                src="/images/oklahoma-licensed-bonded-process-server-badges.png"
                alt="Licensed and bonded process server trust badges Oklahoma"
                width={800}
                height={200}
                className="mx-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              />
            </div>

            <div className="text-center bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:5393676832" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                  Call Now: (539) 367-6832
                </a>
                <a href="/contact" className="bg-gray-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-700 transition">
                  Get Online Quote
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-3">Emergency & after-hours service available</p>
            </div>
          </section>

            <section>
              <h2 id="due-process" className="text-2xl font-bold mt-8 mb-4 text-blue-800">The Core Role: Upholding Due Process</h2>
              <p>
                A process server is a trained and licensed professional responsible for delivering legal documents to individuals involved in a court case. This act is known as **&ldquo;service of process.&rdquo;** Its primary purpose is to satisfy a cornerstone of the American legal system: **due process**. Due process ensures that all parties in a legal action are properly notified, giving them a fair opportunity to respond and present their case.
              </p>
              <p>Without proper service of process, a court case cannot legally proceed, and any judgments made could be invalidated.</p>
            </section>

            {/* Professional Process Server Workflow */}
            <section className="mb-12" id="workflow">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">Professional Process Server Workflow</h2>
              
              <div className="text-center mb-8">
                <Image 
                  src="/images/process-server-workflow-steps.png"
                  alt="Oklahoma process server workflow steps diagram"
                  width={1000}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
                />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white border-l-4 border-blue-500 p-6 shadow-lg rounded-r-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                    <h3 className="font-bold text-lg text-blue-800">Document Receipt</h3>
                  </div>
                  <p className="text-gray-700">We receive and review legal documents, verify service requirements, and prepare for professional delivery according to Oklahoma law.</p>
                </div>
                
                <div className="bg-white border-l-4 border-green-500 p-6 shadow-lg rounded-r-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                    <h3 className="font-bold text-lg text-green-800">Locate Recipient</h3>
                  </div>
                  <p className="text-gray-700">Using professional investigation techniques and skip tracing when necessary to locate individuals throughout Oklahoma.</p>
                </div>
                
                <div className="bg-white border-l-4 border-purple-500 p-6 shadow-lg rounded-r-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                    <h3 className="font-bold text-lg text-purple-800">Attempt Service</h3>
                  </div>
                  <p className="text-gray-700">Professional, respectful delivery attempts at appropriate times and locations following all legal requirements.</p>
                </div>
                
                <div className="bg-white border-l-4 border-red-500 p-6 shadow-lg rounded-r-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                    <h3 className="font-bold text-lg text-red-800">Complete Service</h3>
                  </div>
                  <p className="text-gray-700">Successful delivery of documents with proper identification and documentation of the service encounter.</p>
                </div>
                
                <div className="bg-white border-l-4 border-yellow-500 p-6 shadow-lg rounded-r-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold mr-4">5</div>
                    <h3 className="font-bold text-lg text-yellow-800">File Affidavit</h3>
                  </div>
                  <p className="text-gray-700">Complete sworn Affidavit of Service with detailed information required by Oklahoma courts for legal validity.</p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-500 p-6 shadow-lg rounded-r-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold mr-4">✓</div>
                    <h3 className="font-bold text-lg text-gray-800">Client Update</h3>
                  </div>
                  <p className="text-gray-700">Immediate notification to client with scanned affidavit and status report delivered within 2 hours of completion.</p>
                </div>
              </div>
            </section>

            {/* Service Area Map */}
            <section className="mb-12" id="service-areas">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Oklahoma Service Area</h2>
              <div className="text-center mb-6">
                <Image 
                  src="/images/oklahoma-process-server-service-area-map.png"
                  alt="Oklahoma process server service area map covering Tulsa and surrounding counties"
                  width={800}
                  height={500}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-800 mb-4 text-xl">🚀 Same-Day Service Area (50-Mile Radius)</h3>
                  <p className="text-gray-700 mb-3">Emergency and same-day service available within 50 miles of Tulsa/Glenpool metro area:</p>
                  <ul className="text-gray-700 space-y-2 grid grid-cols-2 gap-x-4">
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/tulsa-process-server" className="text-blue-600 hover:underline font-medium">Tulsa</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/glenpool" className="text-blue-600 hover:underline font-medium">Glenpool</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/broken-arrow" className="text-blue-600 hover:underline font-medium">Broken Arrow</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/seo/owasso-process-server" className="text-blue-600 hover:underline font-medium">Owasso</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/jenks" className="text-blue-600 hover:underline font-medium">Jenks</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/bixby" className="text-blue-600 hover:underline font-medium">Bixby</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/seo/sand-springs-process-server" className="text-blue-600 hover:underline font-medium">Sand Springs</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/sapulpa" className="text-blue-600 hover:underline font-medium">Sapulpa</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/bartlesville" className="text-blue-600 hover:underline font-medium">Bartlesville</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/catoosa" className="text-blue-600 hover:underline font-medium">Catoosa</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/bristow" className="text-blue-600 hover:underline font-medium">Bristow</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/claremore" className="text-blue-600 hover:underline font-medium">Claremore</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/collinsville" className="text-blue-600 hover:underline font-medium">Collinsville</a></li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">•</span><a href="/service-areas/pryor" className="text-blue-600 hover:underline font-medium">Pryor</a></li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-4 text-xl">🗺️ Statewide Oklahoma Coverage</h3>
                  <p className="text-gray-700 mb-3">Professional process serving throughout all of Oklahoma:</p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span><strong><a href="/counties/tulsa-county" className="text-blue-600 hover:underline">All 77 Oklahoma Counties</a></strong></li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span><a href="/service-areas/wagoner" className="text-blue-600 hover:underline font-medium">Wagoner & Creek County</a></li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span><a href="/service-areas/skiatook" className="text-blue-600 hover:underline font-medium">Skiatook & Osage County</a></li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span><a href="/service-areas/pawhuska" className="text-blue-600 hover:underline font-medium">Pawhuska & Osage County</a></li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span><a href="/service-areas/kellyville" className="text-blue-600 hover:underline font-medium">Kellyville & Creek County</a></li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span><a href="/service-areas/coweta" className="text-blue-600 hover:underline font-medium">Coweta & Wagoner County</a></li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span>Rural & Remote Communities</li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2">•</span>Small Towns & Counties</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-center text-gray-700 text-lg">
                <strong>We serve every city, town, and county in Oklahoma.</strong> Same-day service available within 50 miles of <Link href="/tulsa-process-server" className="text-blue-600 hover:underline font-medium">Tulsa</Link>/<Link href="/service-areas/glenpool" className="text-blue-600 hover:underline font-medium">Glenpool</Link>. 
                Standard 24-48 hour service for all other Oklahoma locations.
              </p>
            </section>

            {/* Complete List of Legal Documents Section */}
            <section className="mb-12" id="complete-document-list">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">Complete List of Legal Documents We Serve Throughout Oklahoma</h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-6">⚖️ Civil Litigation Documents</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-blue-800">Summons and complaints</strong><br />
                      <span className="text-sm text-gray-600">Personal injury cases, contract disputes, property disagreements, business litigation</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-blue-800">Contract dispute lawsuits</strong><br />
                      <span className="text-sm text-gray-600">Breach of contract claims and commercial disputes</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-blue-800">Property dispute papers</strong><br />
                      <span className="text-sm text-gray-600">Boundary disagreements and real estate conflicts</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-blue-800">Business litigation papers</strong><br />
                      <span className="text-sm text-gray-600">Partnership dissolution and corporate disputes</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-blue-800">Motions, orders, and court judgments</strong><br />
                      <span className="text-sm text-gray-600">Requiring personal service for legal validity</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-blue-800">Discovery documents</strong><br />
                      <span className="text-sm text-gray-600">Interrogatories, document requests, and depositions subpoenas</span>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 border border-pink-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-pink-900 mb-6">👨‍👩‍👧‍👦 Family Law Documents</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-pink-800">Divorce petitions</strong><br />
                      <span className="text-sm text-gray-600">Dissolution of marriage papers and legal separation documents</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-pink-800">Child custody modification</strong><br />
                      <span className="text-sm text-gray-600">Visitation orders and custody changes</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-pink-800">Child support enforcement</strong><br />
                      <span className="text-sm text-gray-600">Support modification papers and collection actions</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-pink-800">Restraining orders</strong><br />
                      <span className="text-sm text-gray-600">Protective orders (emergency service available)</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-pink-800">Temporary injunctions</strong><br />
                      <span className="text-sm text-gray-600">Emergency custody orders and family court orders</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-pink-800">Adoption papers and paternity lawsuits</strong><br />
                      <span className="text-sm text-gray-600">Including domestic relations income withholding orders</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-green-900 mb-6">🏢 Business and Commercial Documents</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-green-800">Corporate subpoenas</strong><br />
                      <span className="text-sm text-gray-600">Business litigation papers and corporate disputes</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-green-800">Shareholder disputes</strong><br />
                      <span className="text-sm text-gray-600">Corporate dissolution papers and business conflicts</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-green-800">Commercial eviction notices</strong><br />
                      <span className="text-sm text-gray-600">Unlawful detainer actions for businesses</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-green-800">Breach of contract lawsuits</strong><br />
                      <span className="text-sm text-gray-600">Collections matters and commercial disputes</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-green-800">Employment disputes</strong><br />
                      <span className="text-sm text-gray-600">Non-compete violations and workplace conflicts</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-green-800">Intellectual property disputes</strong><br />
                      <span className="text-sm text-gray-600">Trademark violations and IP litigation</span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-red-900 mb-6">🚨 Criminal and Civil Enforcement</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-red-800">Subpoenas for testimony</strong><br />
                      <span className="text-sm text-gray-600">Criminal cases and court appearance orders</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-red-800">Restitution orders</strong><br />
                      <span className="text-sm text-gray-600">Civil judgment enforcement actions</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-red-800">Asset seizure papers</strong><br />
                      <span className="text-sm text-gray-600">Bank account garnishments and property seizure</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-red-800">Wage garnishment orders</strong><br />
                      <span className="text-sm text-gray-600">Income withholding and collection enforcement</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-red-800">Contempt of court orders</strong><br />
                      <span className="text-sm text-gray-600">Show cause orders and compliance enforcement</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <strong className="text-red-800">Probation violation notices</strong><br />
                      <span className="text-sm text-gray-600">Court appearance orders for probation issues</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-6">🏠 Real Estate and Property Documents</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
                    <h4 className="font-bold text-purple-800 mb-3">Property Disputes</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Foreclosure notices and mortgage default papers</li>
                      <li>• Boundary disputes and easement violations</li>
                      <li>• Property lien notices and mechanics&apos; liens</li>
                      <li>• Eminent domain proceedings</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow border-l-4 border-indigo-500">
                    <h4 className="font-bold text-indigo-800 mb-3">Landlord-Tenant</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Landlord-tenant disputes and lease violations</li>
                      <li>• Eviction notices and unlawful detainer actions</li>
                      <li>• Rental agreement enforcement</li>
                      <li>• Security deposit disputes</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow border-l-4 border-teal-500">
                    <h4 className="font-bold text-teal-800 mb-3">HOA and Community</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• HOA violation notices and assessments</li>
                      <li>• Community association collections</li>
                      <li>• Covenant enforcement actions</li>
                      <li>• Property management disputes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Industry Statistics and Market Data Section */}
            <section className="mb-12" id="industry-statistics">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">Industry Statistics and Market Data - 2025</h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">� Process Server Industry Overview</h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-blue-500">
                    <div className="text-3xl font-bold text-blue-600 mb-2">$1.4B</div>
                    <p className="text-sm text-gray-600">Annual U.S. market size (2025 data)</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-green-500">
                    <div className="text-3xl font-bold text-green-600 mb-2">12%</div>
                    <p className="text-sm text-gray-600">Year-over-year growth in professional process serving</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-purple-500">
                    <div className="text-3xl font-bold text-purple-600 mb-2">15,500+</div>
                    <p className="text-sm text-gray-600">Professional process servers nationwide (NAPPS data)</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-red-500">
                    <div className="text-3xl font-bold text-red-600 mb-2">200+</div>
                    <p className="text-sm text-gray-600">Licensed process servers in Oklahoma</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-green-900 mb-6">🎯 Efficiency and Success Rate Comparisons</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                      <span className="font-medium text-gray-800">Professional Servers Success Rate</span>
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">97%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                      <span className="font-medium text-gray-800">Sheriff Departments Success Rate</span>
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">60-70%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                      <span className="font-medium text-gray-800">Professional Timeline Average</span>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">24-48 hrs</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                      <span className="font-medium text-gray-800">Sheriff Timeline Average</span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">2-4 weeks</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                      <span className="font-medium text-gray-800">Cost vs. Attorney Hourly Rates</span>
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">70% savings</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-purple-900 mb-6">💻 Technology Adoption in Process Serving</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800">GPS Tracking & Documentation</span>
                        <span className="text-purple-600 font-bold">78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800">Real-Time Client Communication</span>
                        <span className="text-blue-600 font-bold">65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800">Advanced Database Skip Tracing</span>
                        <span className="text-green-600 font-bold">52%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '52%'}}></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800">Digital Affidavit Filing</span>
                        <span className="text-red-600 font-bold">89%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '89%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-yellow-900 mb-6 text-center">📈 Legal Industry Impact</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-800 mb-2">85%</div>
                    <p className="text-sm text-gray-700 font-medium">Of civil and family law cases require professional service</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-800 mb-2">2,100+</div>
                    <p className="text-sm text-gray-700 font-medium">NAPPS members representing all 50 states</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-800 mb-2">24/7</div>
                    <p className="text-sm text-gray-700 font-medium">Emergency service availability trend increasing</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional vs Sheriff Comparison with Detailed Table */}
            <section className="mb-12" id="vs-sheriff">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Why Choose a Professional Process Server Over the Sheriff&rsquo;s Department?</h2>
              
              <div className="text-center mb-8">
                <Image 
                  src="/images/process-server-vs-sheriff-comparison.png"
                  alt="Process server vs sheriff department comparison chart"
                  width={1000}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
                />
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-lg mb-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  While the Sheriff&rsquo;s office can serve papers, they are often overburdened with other law enforcement duties. A professional process server&rsquo;s sole focus is serving your documents quickly and correctly with specialized expertise.
                </p>
              </div>

              {/* Detailed Comparison Table */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
                  <h3 className="text-2xl font-bold text-center">Detailed Professional vs. Sheriff Department Comparison</h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service Feature</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-green-800">Just Legal Solutions</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-red-800">Sheriff&apos;s Department</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Average Completion Time</td>
                        <td className="px-6 py-4 text-center text-sm text-green-700 font-semibold">24-48 hours</td>
                        <td className="px-6 py-4 text-center text-sm text-red-700 font-semibold">2-4 weeks typical</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Emergency Availability</td>
                        <td className="px-6 py-4 text-center text-sm text-green-700">✓ 24/7 including weekends</td>
                        <td className="px-6 py-4 text-center text-sm text-red-700">✗ Business hours only</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Skip Tracing Services</td>
                        <td className="px-6 py-4 text-center text-sm text-green-700">✓ Professional investigation</td>
                        <td className="px-6 py-4 text-center text-sm text-red-700">✗ Basic attempt only</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Success Rate</td>
                        <td className="px-6 py-4 text-center text-sm text-green-700 font-semibold">97%+ completion rate</td>
                        <td className="px-6 py-4 text-center text-sm text-red-700 font-semibold">60-70% typical</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Real-Time Communication</td>
                        <td className="px-6 py-4 text-center text-sm text-green-700">✓ Instant updates</td>
                        <td className="px-6 py-4 text-center text-sm text-red-700">✗ Limited communication</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Detailed Attempt Reports</td>
                        <td className="px-6 py-4 text-center text-sm text-green-700">✓ Comprehensive documentation</td>
                        <td className="px-6 py-4 text-center text-sm text-red-700">✗ Basic affidavit only</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Multiple Attempt Strategy</td>
                        <td className="px-6 py-4 text-center text-sm text-green-700">✓ Flexible timing/locations</td>
                        <td className="px-6 py-4 text-center text-sm text-red-700">✗ Standard procedure only</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Client Service Focus</td>
                        <td className="px-6 py-4 text-center text-sm text-green-700">✓ Dedicated client relations</td>
                        <td className="px-6 py-4 text-center text-sm text-red-700">✗ Law enforcement priority</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Professional Appearance</td>
                        <td className="px-6 py-4 text-center text-sm text-green-700">✓ Business professional</td>
                        <td className="px-6 py-4 text-center text-sm text-red-700">✗ Law enforcement uniform</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Cost Transparency</td>
                        <td className="px-6 py-4 text-center text-sm text-green-700">✓ Upfront pricing</td>
                        <td className="px-6 py-4 text-center text-sm text-red-700">✗ Variable fees</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Why Professional Service Delivers Better Results</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-800 mb-2">Dedicated Focus</h4>
                        <p className="text-gray-700 text-sm">Process serving is our only business, not competing with law enforcement duties</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-800 mb-2">Flexible Scheduling</h4>
                        <p className="text-gray-700 text-sm">Available evenings, weekends, and holidays when people are home</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-800 mb-2">Specialized Training</h4>
                        <p className="text-gray-700 text-sm">Continuous education on civil procedure and service requirements</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-800 mb-2">Advanced Tools</h4>
                        <p className="text-gray-700 text-sm">Professional databases, skip tracing, and investigation resources</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Client Accountability</h4>
                        <p className="text-gray-700 text-sm">Direct responsibility to you, not government bureaucracy</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm font-bold">6</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-indigo-800 mb-2">Professional Approach</h4>
                        <p className="text-gray-700 text-sm">Business attire and courteous demeanor reduces confrontation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Client Success Stories */}
            <section className="mb-12" id="testimonials">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">Client Success Stories and Case Studies</h2>
              
              <div className="text-center mb-6">
                <Image 
                  src="/images/process-server-client-testimonials-reviews.png"
                  alt="Client testimonials and reviews for Just Legal Solutions process server"
                  width={800}
                  height={400}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-500">★★★★★</div>
                    <span className="ml-2 font-semibold text-gray-800">Sarah M., Attorney</span>
                  </div>
                  <p className="text-gray-700 italic">&ldquo;Needed divorce papers served urgently before court deadline. Just Legal Solutions completed service same day with professional affidavit. Highly recommend!&rdquo;</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-500">★★★★★</div>
                    <span className="ml-2 font-semibold text-gray-800">Mike R., Property Manager</span>
                  </div>
                  <p className="text-gray-700 italic">&ldquo;Outstanding service for eviction notices. Professional, discreet, and always provides proper documentation. Has saved us time and legal headaches.&rdquo;</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-500">★★★★★</div>
                    <span className="ml-2 font-semibold text-gray-800">Jennifer K., Small Business Owner</span>
                  </div>
                  <p className="text-gray-700 italic">&ldquo;Skip tracing services helped locate a defendant who was avoiding service for months. Exceptional investigative skills and persistence.&rdquo;</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-500">★★★★★</div>
                    <span className="ml-2 font-semibold text-gray-800">David L., Law Firm Partner</span>
                  </div>
                  <p className="text-gray-700 italic">&ldquo;Reliable, professional, and cost-effective. We&rsquo;ve used Just Legal Solutions for over 50 serves with 100% success rate. Our go-to process server.&rdquo;</p>
                </div>
              </div>

              {/* Real Case Studies */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">📊 Real Examples of Successful Service</h3>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
                    <h4 className="font-bold text-blue-800 mb-4 flex items-center">
                      <span className="mr-2">💔</span> Difficult Divorce Case
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      Client needed urgent divorce papers served before court deadline. Recipient was avoiding service and had moved addresses.
                    </p>
                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-300">
                      <p className="text-sm text-blue-800 font-medium">
                        <strong>Solution:</strong> Using skip tracing, we located the individual at their workplace within 24 hours. Same-day service completed with affidavit filed before court deadline.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
                    <h4 className="font-bold text-green-800 mb-4 flex items-center">
                      <span className="mr-2">🏢</span> Complex Business Litigation
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      Multi-defendant lawsuit requiring service on corporate officers across several counties. Coordination needed to prevent strategy disclosure.
                    </p>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-300">
                      <p className="text-sm text-green-800 font-medium">
                        <strong>Solution:</strong> Coordinated simultaneous service to prevent case strategy disclosure. All defendants served within 48 hours using our statewide network.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500">
                    <h4 className="font-bold text-red-800 mb-4 flex items-center">
                      <span className="mr-2">🛡️</span> Emergency Restraining Order
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      Domestic violence victim needed immediate restraining order service for protection. After-hours weekend emergency situation.
                    </p>
                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-300">
                      <p className="text-sm text-red-800 font-medium">
                        <strong>Solution:</strong> After-hours emergency service completed within 3 hours on weekend. Law enforcement coordination ensured victim safety during service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Credentials */}
            <section className="mb-12" id="credentials">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">Professional Credentials and Qualifications</h2>
              
              <div className="text-center mb-8">
                <Image 
                  src="/images/professional-process-server-credentials-oklahoma.png"
                  alt="Professional process server credentials and qualifications Oklahoma"
                  width={1000}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto"
                />
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">🏆 State Licensing & Bonding</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border flex items-center">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <span className="font-medium">Oklahoma Licensed Process Server</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border flex items-center">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <span className="font-medium">$5,000 Surety Bond (exceeds requirements)</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border flex items-center">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <span className="font-medium">Professional Liability Insurance</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border flex items-center">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <span className="font-medium">Current Registration All Counties</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-green-900 mb-6 text-center">🎓 Professional Associations</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <strong className="text-green-800">NAPPS Member</strong><br />
                      <span className="text-sm text-gray-600">National Association of Professional Process Servers</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <strong className="text-green-800">OPSA Active Participant</strong><br />
                      <span className="text-sm text-gray-600">Oklahoma Process Servers Association</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <strong className="text-green-800">Continuing Education</strong><br />
                      <span className="text-sm text-gray-600">Professional development and training ongoing</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <strong className="text-green-800">Industry Best Practices</strong><br />
                      <span className="text-sm text-gray-600">Latest techniques and legal requirements</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-purple-900 mb-6 text-center">📈 Experience & Expertise</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border text-center">
                      <div className="text-3xl font-bold text-purple-800">10+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border text-center">
                      <div className="text-3xl font-bold text-purple-800">1000+</div>
                      <div className="text-sm text-gray-600">Successful Services</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border text-center">
                      <div className="text-3xl font-bold text-purple-800">99%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border text-center">
                      <div className="text-3xl font-bold text-purple-800">77</div>
                      <div className="text-sm text-gray-600">Oklahoma Counties</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* County-by-County Service */}
            <section className="mb-12" id="county-service">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">County-by-County Service Information</h2>
              
              <div className="text-center mb-8">
                <Image 
                  src="/images/oklahoma-counties-process-server-coverage.png"
                  alt="Oklahoma counties process server coverage map"
                  width={1000}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto"
                />
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-green-900 mb-6">🏢 Tulsa County Specifics</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span><strong>Same-day service</strong> available throughout Tulsa County</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span><strong>University area expertise</strong> for serving students and faculty</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span><strong>Downtown business district</strong> specialization for corporate service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span><strong>Courthouse relationships</strong> for expedited filing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span><strong>Medical district experience</strong> for healthcare service</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-6">🏛️ Oklahoma County Details</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span><strong>Oklahoma City metro coverage</strong> with 2-hour rush service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span><strong>State capitol area</strong> security protocols understood</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span><strong>Corporate headquarters</strong> service expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span><strong>Medical district specialized</strong> service capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span><strong>Government building</strong> access and procedures</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-yellow-900 mb-6">🌾 Rural County Considerations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span><strong>Extended timelines</strong> (3-5 days) for remote rural areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span><strong>Mileage fees apply</strong> for travel beyond 40-mile radius</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span><strong>Skip tracing often necessary</strong> due to sparse population</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span><strong>Local knowledge essential</strong> for successful rural service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span><strong>Agricultural scheduling</strong> considerations for farming communities</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Oklahoma Coverage</h3>
                <p className="text-lg text-gray-700 mb-6">
                  We serve all 77 Oklahoma counties with specialized knowledge of local courts, procedures, and requirements. From major metropolitan areas to rural farming communities, our experienced team ensures proper service throughout the state.
                </p>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-white p-3 rounded border">
                    <strong>Metro Areas</strong><br />
                    Same-day service available
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <strong>Small Towns</strong><br />
                    24-48 hour standard service
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <strong>Rural Counties</strong><br />
                    3-5 day service timeline
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <strong>Remote Areas</strong><br />
                    Specialized access and approach
                  </div>
                </div>
              </div>
            </section>

            {/* Enhanced FAQ Section with Complete Guide */}
            <section className="mb-12" id="faq">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">Frequently Asked Questions About Process Servers in Oklahoma - Complete Guide</h2>
              
              <div className="space-y-6">
                {/* Primary FAQ from Schema */}
                {faqSchema.mainEntity.map((faq, index) => (
                  <div key={index} className="bg-white border-l-4 border-blue-500 p-6 shadow-md rounded-r-lg hover:shadow-lg transition">
                    <h3 className="font-bold text-xl text-blue-800 mb-3 voice-optimized">{faq.name}</h3>
                    <p className="text-gray-700 leading-relaxed voice-answer primary-answer">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
                
                {/* Extended Comprehensive FAQ Collection */}
                <div className="bg-white border-l-4 border-blue-500 p-6 shadow-md rounded-r-lg hover:shadow-lg transition">
                  <h3 className="font-bold text-xl text-blue-800 mb-3 voice-optimized">How do I find a reliable process server near me in Oklahoma?</h3>
                  <p className="text-gray-700 leading-relaxed voice-answer primary-answer">Start by searching for licensed professionals in your specific county. Just Legal Solutions serves all 77 Oklahoma counties with experienced, licensed professionals and same-day service available within 50 miles of Tulsa. Always verify licensing through the Oklahoma Supreme Court Network at https://www.oscn.net and look for NAPPS membership at https://napps.org.</p>
                </div>

                <div className="bg-white border-l-4 border-green-500 p-6 shadow-md rounded-r-lg hover:shadow-lg transition">
                  <h3 className="font-bold text-xl text-green-800 mb-3 voice-optimized">What exactly does a process server do, step by step?</h3>
                  <p className="text-gray-700 leading-relaxed voice-answer primary-answer">A process server follows a detailed six-step workflow: <strong>1. Document Receipt</strong> - Review your legal documents and verify all service requirements according to Oklahoma law. <strong>2. Locate Recipient</strong> - Use professional investigation techniques, database searches, and skip tracing when necessary. <strong>3. Attempt Service</strong> - Deliver documents at appropriate times and locations following all legal requirements. <strong>4. Complete Service</strong> - Confirm proper identification and document the delivery. <strong>5. File Affidavit</strong> - Submit sworn Affidavit of Service with detailed information required by Oklahoma courts. <strong>6. Client Update</strong> - Provide immediate notification with scanned affidavit and status report.</p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 p-6 shadow-md rounded-r-lg hover:shadow-lg transition">
                  <h3 className="font-bold text-xl text-purple-800 mb-3 voice-optimized">How quickly can legal documents be served in Tulsa?</h3>
                  <p className="text-gray-700 leading-relaxed voice-answer primary-answer"><strong>Emergency Service:</strong> 1-4 hours for urgent restraining orders and court deadlines. <strong>Same-Day Service:</strong> Available with advance notice by 2 PM. <strong>Standard Service:</strong> 24-48 hours throughout Tulsa metro. <strong>Rush Service:</strong> Available for urgent matters with premium pricing. <strong>Weekend Service:</strong> Saturday and Sunday available for emergencies with additional fees.</p>
                </div>

                <div className="bg-white border-l-4 border-red-500 p-6 shadow-md rounded-r-lg hover:shadow-lg transition">
                  <h3 className="font-bold text-xl text-red-800 mb-3 voice-optimized">What happens if someone is avoiding service?</h3>
                  <p className="text-gray-700 leading-relaxed voice-answer primary-answer">Professional process servers use multiple legal strategies: flexible timing (early morning, evening attempts), workplace service during business hours, skip tracing to locate new addresses, service at family member locations when legally permitted, and alternative service methods approved by the court. We provide detailed attempt reports and can pursue alternative service through publication if necessary. Our success rate exceeds 97% even with evasive recipients.</p>
                </div>

                <div className="bg-white border-l-4 border-yellow-500 p-6 shadow-md rounded-r-lg hover:shadow-lg transition">
                  <h3 className="font-bold text-xl text-yellow-800 mb-3 voice-optimized">Can process servers serve papers on weekends and holidays?</h3>
                  <p className="text-gray-700 leading-relaxed voice-answer primary-answer">Yes, professional process servers offer weekend and holiday service for urgent matters. Emergency service is available 24/7 for restraining orders, injunctions, and time-sensitive legal matters. Standard weekend service incurs a $50-75 additional fee but ensures your court deadlines are met.</p>
                </div>

                <div className="bg-white border-l-4 border-indigo-500 p-6 shadow-md rounded-r-lg hover:shadow-lg transition">
                  <h3 className="font-bold text-xl text-indigo-800 mb-3 voice-optimized">What information do I need to provide to a process server?</h3>
                  <p className="text-gray-700 leading-relaxed voice-answer primary-answer">Provide complete details for highest success rates: <strong>Full legal name</strong> (including any aliases or maiden names), <strong>current home address and work address</strong>, <strong>physical description or recent photo</strong>, <strong>vehicle information</strong> (make, model, color, license plate), <strong>daily routines or schedule patterns</strong> (work hours, gym, regular stops), <strong>family members or associates</strong> who might be present, <strong>social media profiles</strong> for additional location information, and <strong>any safety concerns or special instructions</strong>.</p>
                </div>

                <div className="bg-white border-l-4 border-emerald-500 p-6 shadow-md rounded-r-lg hover:shadow-lg transition">
                  <h3 className="font-bold text-xl text-emerald-800 mb-3 voice-optimized">How much does process serving cost in Oklahoma in 2025?</h3>
                  <p className="text-gray-700 leading-relaxed voice-answer primary-answer"><strong>Standard Service Rates:</strong> Tulsa Metro Standard: $60-80 (24-48 hours), Same-Day Service: $120-200, Emergency Service: $200-350 (2-4 hours), Weekend Service: +$50-75 additional, Holiday Service: +$75-100 additional. <strong>Additional Costs:</strong> Mileage beyond 40 miles: $0.70 per mile, Skip tracing: $100-250 depending on complexity, Multiple attempts: $35-50 per additional attempt, Rush affidavit filing: $25, Corporate service: $80-150.</p>
                </div>

                <div className="bg-white border-l-4 border-teal-500 p-6 shadow-md rounded-r-lg hover:shadow-lg transition">
                  <h3 className="font-bold text-xl text-teal-800 mb-3 voice-optimized">What&apos;s the difference between certified mail service and personal service?</h3>
                  <p className="text-gray-700 leading-relaxed voice-answer primary-answer">Personal service by a licensed process server is required for most legal proceedings and provides immediate proof of delivery. Certified mail service is only acceptable for specific document types and often allows defendants to avoid service by not signing for mail. Personal service ensures legal validity and faster case progression.</p>
                </div>

                <div className="bg-white border-l-4 border-orange-500 p-6 shadow-md rounded-r-lg hover:shadow-lg transition">
                  <h3 className="font-bold text-xl text-orange-800 mb-3 voice-optimized">Do I need a licensed process server or can anyone serve papers?</h3>
                  <p className="text-gray-700 leading-relaxed voice-answer primary-answer">Oklahoma law requires licensed process servers for most legal documents. Only licensed process servers, Oklahoma attorneys, court clerks, and sheriff&apos;s deputies can legally serve process. Using an unlicensed person can result in invalid service and case dismissal.</p>
                </div>

                <div className="bg-white border-l-4 border-pink-500 p-6 shadow-md rounded-r-lg hover:shadow-lg transition">
                  <h3 className="font-bold text-xl text-pink-800 mb-3 voice-optimized">What types of legal documents can process servers deliver?</h3>
                  <p className="text-gray-700 leading-relaxed voice-answer primary-answer">Process servers deliver a comprehensive range of legal documents including: <strong>Civil Litigation:</strong> summons and complaints, contract disputes, property disputes, business litigation, motions and orders, discovery documents, depositions subpoenas. <strong>Family Law:</strong> divorce petitions, child custody modifications, restraining orders, adoption papers. <strong>Business Documents:</strong> corporate subpoenas, commercial evictions, breach of contract lawsuits, partnership disputes. <strong>Criminal and Civil Enforcement:</strong> subpoenas for testimony, restitution orders, contempt orders, asset seizure papers.</p>
                </div>

                <div className="bg-white border-l-4 border-slate-500 p-6 shadow-md rounded-r-lg hover:shadow-lg transition">
                  <h3 className="font-bold text-xl text-slate-800 mb-3 voice-optimized">What happens after my documents are served?</h3>
                  <p className="text-gray-700 leading-relaxed voice-answer primary-answer"><strong>Immediate Steps (Within 24-48 Hours):</strong> Process server completes sworn Affidavit of Service with detailed delivery information, affidavit is filed with the appropriate courthouse, you receive scanned copy and comprehensive status report, official response period begins for the served party. <strong>Response Timeframes:</strong> Civil lawsuits: 20 days, Divorce papers: 20 days, Small claims: 10 days, Eviction notices: 3-5 days, Restraining orders: hearing within 10-14 days.</p>
                </div>

                <div className="bg-white border-l-4 border-violet-500 p-6 shadow-md rounded-r-lg hover:shadow-lg transition">
                  <h3 className="font-bold text-xl text-violet-800 mb-3 voice-optimized">Why choose a professional process server over the sheriff&apos;s department?</h3>
                  <p className="text-gray-700 leading-relaxed voice-answer primary-answer">Professional process servers offer: <strong>dedicated focus</strong> on service of process exclusively, <strong>faster turnaround times</strong> (24-48 hours vs weeks), <strong>24/7 availability</strong> including weekends and holidays, <strong>specialized skip tracing</strong> and investigation services, <strong>real-time status updates</strong> and communication, <strong>professional appearance</strong> and approach. Sheriff departments have competing priorities with law enforcement duties, limited availability for urgent serves, and significantly longer processing times.</p>
                </div>
              </div>
            </section>

            {/* Oklahoma Process Server Licensing Requirements */}
            <section className="mb-12" id="licensing">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">Oklahoma Process Server Licensing Requirements (2025 Current Law)</h2>
              
              <div className="text-center mb-8">
                <Image 
                  src="/images/oklahoma-process-server-licensing-requirements.png"
                  alt="Oklahoma process server licensing requirements and legal compliance"
                  width={900}
                  height={500}
                  className="rounded-xl shadow-lg mx-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Legal Requirements to Serve Papers in Oklahoma</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg text-blue-800 mb-4">📋 Basic Licensing Requirements</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Be at least 18 years old with good moral character</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Be ethically and mentally fit as determined by the court</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Maintain 6 months Oklahoma residency minimum</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Hold 30 days residency in the county or judicial administrative district</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Execute a $5,000 surety bond to the State of Oklahoma</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Pay $150 statewide license fee plus court costs and filing fees</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>Pass background check with no violent crime convictions</li>
                      <li className="flex items-start"><span className="text-blue-600 mr-2">•</span>No convictions requiring sex offender registration</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg text-blue-800 mb-4">⚖️ Licensing Process and Terms</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h5 className="font-semibold text-blue-700 mb-2">Application Process:</h5>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Apply to the presiding judge of your judicial administrative district</li>
                          <li>• Submit application with required documentation and fees</li>
                          <li>• Complete background investigation</li>
                          <li>• Receive approval from district or associate judge</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h5 className="font-semibold text-blue-700 mb-2">License Terms:</h5>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Initial license: Valid for 1 calendar year</li>
                          <li>• Renewals: Every 3 years thereafter</li>
                          <li>• Renewal fee: $15 plus applicable court costs</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h5 className="font-semibold text-blue-700 mb-2">Verification:</h5>
                        <p className="text-gray-700 text-sm">All licensed servers are listed in the statewide registry maintained by the Administrative Office of the Courts. Verify licensing at <a href="https://www.oscn.net" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.oscn.net</a>.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-yellow-900 mb-6">Who Can Legally Serve Papers in Oklahoma</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800 mb-4">✅ Authorized to Serve</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>Licensed process servers</li>
                      <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>Oklahoma attorneys in good standing</li>
                      <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>Court clerks and deputy clerks</li>
                      <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>Sheriff&apos;s deputies (within their county)</li>
                      <li className="flex items-start"><span className="text-green-600 mr-2">✓</span>U.S. Marshals for federal cases</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-bold text-red-800 mb-4">❌ Not Authorized to Serve</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start"><span className="text-red-600 mr-2">✗</span>Unlicensed individuals (Class A misdemeanor)</li>
                      <li className="flex items-start"><span className="text-red-600 mr-2">✗</span>Parties to the lawsuit</li>
                      <li className="flex items-start"><span className="text-red-600 mr-2">✗</span>Private investigators without process server license</li>
                      <li className="flex items-start"><span className="text-red-600 mr-2">✗</span>Security guards or bailiffs</li>
                      <li className="flex items-start"><span className="text-red-600 mr-2">✗</span>Family members or friends of parties</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-red-100 border border-red-300 rounded-lg p-4">
                  <p className="text-red-800 font-semibold">⚠️ Important Legal Warning:</p>
                  <p className="text-red-700 text-sm mt-1">Using an unlicensed person to serve legal documents in Oklahoma is a Class A misdemeanor punishable by up to one year in jail and/or a fine of up to $1,000. Additionally, improper service can result in case dismissal and legal malpractice claims.</p>
                </div>
              </div>
            </section>

            {/* What Happens After Service */}
            <section className="mb-12" id="after-service">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">What Happens After Your Documents Are Served</h2>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-green-900 mb-6">Immediate Steps (Within 24-48 Hours)</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800 mb-3">📁 Affidavit Filing</h4>
                    <p className="text-gray-700">Your process server files the sworn Affidavit of Service with the appropriate court, officially recording the service.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800 mb-3">📧 Client Notification</h4>
                    <p className="text-gray-700">You receive a scanned copy of the affidavit and detailed status report within 2 hours.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
                    <h4 className="font-bold text-purple-800 mb-3">⏰ Clock Starts</h4>
                    <p className="text-gray-700">The court clock begins ticking for the recipient&apos;s response period.</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-6">⏳ Recipient Response Timeframes in Oklahoma</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">20</span>
                      <span>Civil lawsuits - 20 days for response after service</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">20</span>
                      <span>Divorce papers - 20 days from service date</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">10</span>
                      <span>Small claims cases - 10 days for response</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3-30</span>
                      <span>Eviction notices - varies by violation type</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-red-900 mb-6">⚖️ What Happens If No Response</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 mt-1">•</span>
                      <span>You may request a <strong>default judgment</strong> from the court</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 mt-1">•</span>
                      <span>Case can proceed <strong>without defendant&apos;s participation</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 mt-1">•</span>
                      <span>Court may <strong>award damages</strong> as requested in filing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 mt-1">•</span>
                      <span>Proper service must be proven through <strong>Affidavit of Service</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skip Tracing Services */}
            <section className="mb-12" id="skip-tracing">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">Professional Skip Tracing and Investigation Services</h2>
              
              <div className="text-center mb-8">
                <Image 
                  src="/images/skip-tracing-investigation-services.png"
                  alt="Professional skip tracing and investigation services Oklahoma"
                  width={1000}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto"
                />
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-6">What is Skip Tracing?</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Skip tracing is the professional process of locating individuals who have moved or are avoiding service. Our licensed investigators use legal methods including public records searches, database investigations, social media research, and field investigation techniques.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow text-center">
                    <div className="text-3xl mb-3">🔍</div>
                    <h4 className="font-bold text-purple-800 mb-2">Database Searches</h4>
                    <p className="text-sm text-gray-600">Comprehensive public records investigation</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow text-center">
                    <div className="text-3xl mb-3">📱</div>
                    <h4 className="font-bold text-purple-800 mb-2">Social Media Intel</h4>
                    <p className="text-sm text-gray-600">Legal social media research</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow text-center">
                    <div className="text-3xl mb-3">🏠</div>
                    <h4 className="font-bold text-purple-800 mb-2">Field Investigation</h4>
                    <p className="text-sm text-gray-600">Professional on-site location work</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow text-center">
                    <div className="text-3xl mb-3">📞</div>
                    <h4 className="font-bold text-purple-800 mb-2">Contact Verification</h4>
                    <p className="text-sm text-gray-600">Current address and employment verification</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-yellow-900 mb-6">When Skip Tracing is Necessary</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span>The provided address is <strong>outdated or incorrect</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span>Person has <strong>moved without forwarding information</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span>Someone is <strong>actively avoiding service</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      <span>Only <strong>partial information</strong> is available</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600 italic">Approximately 20% of process serving cases require some level of skip tracing.</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-green-900 mb-6">Success Rates and Timeframes</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span className="font-medium">Standard Cases</span>
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">3-7 days</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span className="font-medium">Complex Cases</span>
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">up to 14 days</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span className="font-medium">Success Rate</span>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">95%+</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Emergency Service Details */}
            <section className="mb-12" id="emergency-service">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">Emergency and Rush Service Details</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">🚨 Same-Day Emergency Service Scenarios</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
                    <h4 className="font-bold text-red-800 mb-4 flex items-center">
                      <span className="mr-2">🛡️</span> Restraining Order Service
                    </h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Domestic violence orders - 2-4 hour priority</li>
                      <li>• Law enforcement coordination available</li>
                      <li>• After-hours and weekend availability</li>
                      <li>• Protection order emergency response</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-800 mb-4 flex items-center">
                      <span className="mr-2">⏰</span> Court Deadline Crisis
                    </h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Last-minute court deadline service</li>
                      <li>• Available until 8 PM business days</li>
                      <li>• Courthouse filing coordination</li>
                      <li>• Emergency affidavit preparation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800 mb-4 flex items-center">
                      <span className="mr-2">🏢</span> Business Emergency
                    </h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Urgent injunction service</li>
                      <li>• Emergency eviction proceedings</li>
                      <li>• Time-sensitive contract disputes</li>
                      <li>• Asset seizure documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="text-center bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Emergency Service Right Now?</h3>
                <a href="tel:5393676832" className="bg-red-600 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-red-700 transition inline-block shadow-lg">
                  🚨 Emergency Line: (539) 367-6832
                </a>
                <p className="text-sm text-gray-600 mt-3">Available 24/7 for urgent legal document service</p>
              </div>
            </section>

            {/* Technology and Modern Process Serving */}
            <section className="mb-12" id="technology">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">Technology and Modern Process Serving</h2>
              
              <div className="text-center mb-8">
                <Image 
                  src="/images/modern-process-serving-technology.png"
                  alt="Modern technology in process serving - GPS tracking and digital communication"
                  width={1000}
                  height={600}
                  className="rounded-xl shadow-lg mx-auto"
                />
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">How Technology Improves Process Serving</h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-2xl">📍</span>
                      </div>
                      <h4 className="font-bold text-blue-800 text-lg">GPS Tracking & Documentation</h4>
                    </div>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• GPS coordinates for irrefutable proof</li>
                      <li>• Timestamps for exact timing verification</li>
                      <li>• Real-time client progress monitoring</li>
                      <li>• Photo documentation of locations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-2xl">📱</span>
                      </div>
                      <h4 className="font-bold text-green-800 text-lg">Digital Communication</h4>
                    </div>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Instant text/email notifications</li>
                      <li>• Secure client portal access 24/7</li>
                      <li>• Digital affidavit delivery</li>
                      <li>• Real-time status updates</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-2xl">🔍</span>
                      </div>
                      <h4 className="font-bold text-purple-800 text-lg">Advanced Database Integration</h4>
                    </div>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Multiple database address verification</li>
                      <li>• Social media intelligence gathering</li>
                      <li>• Public records integration</li>
                      <li>• Comprehensive background checks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing and Payment Options */}
            <section className="mb-12" id="pricing">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">Transparent Pricing Structure and Payment Options</h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-green-900 mb-6 text-center">💼 Standard Service Costs</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span className="font-medium">Tulsa Metro Routine</span>
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">$50-$80</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span className="font-medium">Statewide Standard</span>
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">$75-$150</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span className="font-medium">Volume Discounts</span>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Available</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-red-900 mb-6 text-center">🚨 Rush & Emergency Pricing</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span className="font-medium">Same-Day Service</span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">+$100-$200</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span className="font-medium">2-4 Hour Emergency</span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">$150-$300</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <span className="font-medium">Weekend/Holiday</span>
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">+$50-$100</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">💳 Payment Options</h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white rounded border">
                      <span className="text-blue-600 mr-3">💳</span>
                      <span className="font-medium">All major credit cards</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded border">
                      <span className="text-blue-600 mr-3">🏦</span>
                      <span className="font-medium">Business checks</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded border">
                      <span className="text-blue-600 mr-3">📱</span>
                      <span className="font-medium">PayPal, Venmo, Cash App</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded border">
                      <span className="text-blue-600 mr-3">📋</span>
                      <span className="font-medium">Payment plans available</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h4 className="font-bold text-yellow-900 mb-4 text-center">Additional Service Fees</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <strong className="text-yellow-800">Skip Tracing</strong><br />
                    <span className="text-sm text-gray-600">$75-$200 depending on complexity</span>
                  </div>
                  <div>
                    <strong className="text-yellow-800">Multiple Attempts</strong><br />
                    <span className="text-sm text-gray-600">$25-$50 per additional attempt</span>
                  </div>
                  <div>
                    <strong className="text-yellow-800">Extended Mileage</strong><br />
                    <span className="text-sm text-gray-600">$0.70 per mile beyond 40 miles</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Consequences Section */}
            <section className="mb-12" id="legal-consequences">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">Legal Consequences of Improper Service</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">⚠️ Why Proper Service Matters</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
                    <h4 className="font-bold text-red-800 mb-4">⚖️ Case Dismissal Risks</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Complete case dismissal possible</li>
                      <li>• All prior proceedings invalidated</li>
                      <li>• Service validity can be challenged anytime</li>
                      <li>• Due process violations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-800 mb-4">💰 Financial Consequences</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Wasted legal fees from dismissal</li>
                      <li>• Additional costs for re-filing</li>
                      <li>• Starting over completely</li>
                      <li>• Potential liability for damages</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
                    <h4 className="font-bold text-yellow-800 mb-4">⏰ Time Delays</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Months or years of delays</li>
                      <li>• Statute of limitations concerns</li>
                      <li>• Evidence and witness problems</li>
                      <li>• Extended legal uncertainty</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="text-center bg-green-50 border border-green-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-green-900 mb-4">🛡️ Protect Your Case with Professional Service</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Don&apos;t risk your entire case on improper service. Our licensed, experienced team ensures your documents are served correctly the first time, protecting your legal rights and avoiding costly delays.
                </p>
                <a href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
                  Get Professional Service Quote
                </a>
              </div>
            </section>

            {/* Professional Resources and Links Section */}
            <section className="mb-12" id="professional-resources">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center voice-optimized">Resources and Professional Links</h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-6">🏛️ Oklahoma Legal Resources</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <a href="https://www.oscn.net" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900">
                        Oklahoma Supreme Court Network
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Verify process server licensing and access court rules</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <a href="https://law.justia.com/codes/oklahoma/title-12/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900">
                        Oklahoma Statutes Title 12
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Complete civil procedure laws and requirements</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <a href="https://www.okbar.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900">
                        Oklahoma Bar Association
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Legal professional resources and attorney referrals</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <span className="font-semibold text-blue-700">Administrative Office of Courts</span>
                      <p className="text-sm text-gray-600 mt-1">Official court procedures and forms</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-green-900 mb-6">👥 Professional Process Server Resources</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <a href="https://napps.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-700 hover:text-green-900">
                        National Association of Professional Process Servers (NAPPS)
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Industry standards and professional development</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <span className="font-semibold text-green-700">Process Server Directory</span>
                      <p className="text-sm text-gray-600 mt-1">Professional server verification and standards</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <span className="font-semibold text-green-700">Legal Service Organizations</span>
                      <p className="text-sm text-gray-600 mt-1">Professional associations and continuing education</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <span className="font-semibold text-green-700">Oklahoma Process Servers Association</span>
                      <p className="text-sm text-gray-600 mt-1">Local professional networking and training</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-yellow-900 mb-6">🏢 Local Government and Court Resources</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <span className="font-semibold text-yellow-700">Tulsa County Courts</span>
                      <p className="text-sm text-gray-600 mt-1">Courthouse locations and filing procedures</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <span className="font-semibold text-yellow-700">Oklahoma County Courts</span>
                      <p className="text-sm text-gray-600 mt-1">Metropolitan area court information</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <span className="font-semibold text-yellow-700">Secretary of State Business Registry</span>
                      <p className="text-sm text-gray-600 mt-1">Corporate service verification</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border hover:shadow-md transition">
                      <span className="font-semibold text-yellow-700">County Clerk Offices</span>
                      <p className="text-sm text-gray-600 mt-1">Local filing requirements and procedures</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Important Legal Disclaimers</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Legal Disclaimer:</strong> This information is for educational purposes only and does not constitute legal advice. Always consult with a qualified attorney for specific legal questions.</p>
                  <p><strong>Accuracy Notice:</strong> Laws and procedures may change. Always verify current requirements with the appropriate court or legal authority.</p>
                  <p><strong>Professional Services:</strong> Just Legal Solutions is licensed and bonded in Oklahoma. All services performed in compliance with state and federal laws.</p>
                </div>
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4">Need a Professional Process Server in Oklahoma?</h2>
                <p className="text-xl mb-6">
                  Don&rsquo;t let improper service invalidate your case. Ensure your legal documents are served correctly and on time with our licensed, experienced team.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <a href="tel:5393676832" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                    📞 Call (539) 367-6832
                  </a>
                  <a href="/contact" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition border-2 border-white">
                    📝 Get Online Quote
                  </a>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>✓ Same-Day Service</strong><br />
                    Emergency serves available
                  </div>
                  <div>
                    <strong>✓ Statewide Coverage</strong><br />
                    All 77 Oklahoma counties
                  </div>
                  <div>
                    <strong>✓ 50+ Years Experience</strong><br />
                    Licensed & bonded professional
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

