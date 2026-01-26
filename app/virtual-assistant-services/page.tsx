
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, CheckCircle2, Clock, Shield, Users, Calendar, Briefcase } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import PerformanceSchema from '@/components/ui/performance-schema';

export const metadata = {
  title: 'Virtual Assistant Services Oklahoma | Executive Support Tulsa | Just Legal Solutions',
  description: 'Professional virtual assistant services in Oklahoma. Executive support, HR & payroll, event coordination, travel management, customer service & data entry. 10+ years experience. Starting at $15/hr.',
  keywords: [
    'virtual assistant oklahoma',
    'virtual assistant tulsa',
    'executive assistant oklahoma',
    'remote executive support tulsa',
    'virtual assistant services near me',
    'oklahoma virtual assistant',
    'executive assistant tulsa ok',
    'business support services oklahoma',
    'HR payroll services tulsa',
    'event coordination oklahoma',
    'travel management tulsa',
    'data entry services oklahoma',
    'customer service support tulsa',
    'administrative assistant oklahoma'
  ],
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  category: 'Virtual Assistant Services',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: 'https://justlegalsolutions.org/virtual-assistant-services'
  },
  openGraph: {
    title: 'Virtual Assistant Services Oklahoma | Executive Support | Just Legal Solutions',
    description: 'Professional virtual assistant & executive support services in Tulsa & Oklahoma. HR, payroll, event planning, travel management, customer service. 10+ years experience. Starting at $15/hr.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/virtual-assistant-services',
    siteName: 'Just Legal Solutions',
    images: [{
      url: 'https://justlegalsolutions.org/images/virtual-assistant-services-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Virtual Assistant Services in Oklahoma - Just Legal Solutions',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Assistant Services Oklahoma | Just Legal Solutions',
    description: 'Professional virtual assistant & executive support in Oklahoma. HR, payroll, events, travel, customer service. 10+ years experience.',
    images: ['https://justlegalsolutions.org/images/virtual-assistant-services-og.jpg'],
  }
};

export default function VirtualAssistantServicesPage() {
  const services = [
    {
      title: 'Executive Support',
      description: 'Professional administrative assistance for executives—calendar management, communications, travel coordination, and day-to-day operations support.',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80',
      iconType: 'briefcase',
    },
    {
      title: 'Event Coordination',
      description: 'End-to-end event planning for corporate events, conferences, team building, and special occasions throughout Oklahoma.',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
      iconType: 'calendar',
    },
    {
      title: 'HR & Payroll',
      description: 'Comprehensive human resources support—recruitment assistance, employee onboarding, payroll processing, and compliance documentation.',
      image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=400&q=80',
      iconType: 'users',
    },
    {
      title: 'Travel Management',
      description: 'Business travel planning, booking, itinerary management, and expense tracking to optimize your corporate travel experience.',
      image: 'https://images.unsplash.com/photo-1507149833265-60c372daea22?auto=format&fit=crop&w=400&q=80',
      iconType: 'clock',
    },
    {
      title: 'Customer Service',
      description: 'Professional customer support via phone, email, and chat. Inquiry management, appointment scheduling, and client communications.',
      image: 'https://images.unsplash.com/photo-1590599605877-29fa62b1f143?q=80&w=2940&auto=format&fit=crop',
      iconType: 'phone',
    },
    {
      title: 'Data Entry & Admin',
      description: 'Accurate data entry, document management, CRM updates, spreadsheet maintenance, and administrative task support.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop',
      iconType: 'check',
    },
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'briefcase': return <Briefcase className="h-5 w-5 text-blue-600" />;
      case 'calendar': return <Calendar className="h-5 w-5 text-blue-600" />;
      case 'users': return <Users className="h-5 w-5 text-blue-600" />;
      case 'clock': return <Clock className="h-5 w-5 text-blue-600" />;
      case 'phone': return <Phone className="h-5 w-5 text-blue-600" />;
      case 'check': return <CheckCircle2 className="h-5 w-5 text-blue-600" />;
      default: return <Briefcase className="h-5 w-5 text-blue-600" />;
    }
  };

  const pricingTiers = [
    {
      name: 'Basic Support',
      price: '$15',
      unit: '/hour',
      description: 'Perfect for small tasks and occasional support',
      features: [
        'Data entry & admin tasks',
        'Email management',
        'Basic scheduling',
        'Document formatting',
        'Research tasks',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Executive Package',
      price: '$25',
      unit: '/hour',
      description: 'Comprehensive support for busy professionals',
      features: [
        'Everything in Basic',
        'Calendar management',
        'Travel booking & coordination',
        'Meeting preparation',
        'Expense tracking',
        'Priority response times',
      ],
      cta: 'Most Popular',
      popular: true,
    },
    {
      name: 'Full-Service',
      price: 'Custom',
      unit: 'quote',
      description: 'Complete business operations support',
      features: [
        'Everything in Executive',
        'HR & payroll support',
        'Event coordination',
        'Project management',
        'Dedicated support hours',
        'Custom workflows',
      ],
      cta: 'Contact Us',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'What virtual assistant services do you offer in Oklahoma?',
      answer: 'We provide comprehensive virtual assistant services including executive support, HR & payroll management, event coordination, travel management, customer service, and data entry. We serve clients throughout Oklahoma including Tulsa, Oklahoma City, Broken Arrow, and surrounding areas.',
    },
    {
      question: 'How much do virtual assistant services cost?',
      answer: 'Our virtual assistant services start at $15/hour for basic administrative tasks. Executive support packages start at $25/hour. For comprehensive business support including HR, payroll, and event coordination, we provide custom quotes based on your specific needs. Contact us for a free consultation.',
    },
    {
      question: 'Do you work remotely or on-site in Tulsa?',
      answer: 'We offer both remote virtual assistant services and on-site support in the Tulsa metro area. Many clients prefer a hybrid approach—remote for day-to-day tasks with on-site availability for meetings, events, and special projects.',
    },
    {
      question: 'What experience do you have as an executive assistant?',
      answer: 'With over 10 years of experience supporting C-suite executives, we bring expertise in confidential communications, complex calendar management, high-stakes travel coordination, and executive-level project management. We understand the discretion and precision that executive support requires.',
    },
    {
      question: 'How do I get started with your virtual assistant services?',
      answer: 'Getting started is easy! Call us at (539) 367-6832 or email contact@justlegalsolutions.org to schedule a free consultation. We\'ll discuss your needs, workflow, and provide a customized quote within 24 hours.',
    },
    {
      question: 'Can you help with HR and payroll for my small business?',
      answer: 'Yes! We provide HR support including recruitment assistance, employee onboarding, policy documentation, and payroll processing for small to medium businesses in Oklahoma. We work with popular platforms like Gusto, ADP, and QuickBooks Payroll.',
    },
  ];

  return (
    <>
      {/* Schema Markup */}
      <script 
        id="va-services-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Just Legal Solutions - Virtual Assistant Services",
            "description": "Professional virtual assistant and executive support services in Oklahoma. Specializing in executive support, HR & payroll, event coordination, travel management, and administrative services.",
            "url": "https://justlegalsolutions.org/virtual-assistant-services",
            "telephone": "(539) 367-6832",
            "email": "contact@justlegalsolutions.org",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tulsa",
              "addressRegion": "OK",
              "addressCountry": "US"
            },
            "areaServed": [
              { "@type": "State", "name": "Oklahoma" },
              { "@type": "City", "name": "Tulsa" },
              { "@type": "City", "name": "Oklahoma City" },
              { "@type": "City", "name": "Broken Arrow" }
            ],
            "priceRange": "$15-$50/hour",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Virtual Assistant Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Executive Support",
                    "description": "Professional administrative assistance for executives"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HR & Payroll Services",
                    "description": "Human resources and payroll management support"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Event Coordination",
                    "description": "Corporate event planning and management"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script 
        id="faq-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-[85vh] flex items-center justify-center">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1558478551-1a378f63328e?q=80&w=1469&auto=format&fit=crop)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-5xl">
            <p className="text-blue-300 font-semibold text-lg mb-3 tracking-wide uppercase">Oklahoma&apos;s Trusted Virtual Assistant</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Virtual Assistant Services<br />
              <span className="text-blue-400">Tulsa & Oklahoma</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-3xl mx-auto">
              Executive support, HR & payroll, event coordination, travel management, and administrative services. 10+ years experience supporting C-suite executives.
            </p>
            <p className="text-yellow-300 font-bold text-xl mb-8">Starting at $15/hr • Custom quotes available</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:5393676832"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5" />
                Call (539) 367-6832
              </Link>
              <Link
                href="mailto:contact@justlegalsolutions.org?subject=Virtual Assistant Services Inquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                <Mail className="h-5 w-5" />
                Get Free Quote
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-8 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-blue-600 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6" />
                <span className="font-semibold">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                <span className="font-semibold">C-Suite Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                <span className="font-semibold">Oklahoma Based</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6" />
                <span className="font-semibold">Flexible Hours</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container mx-auto py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Oklahoma Businesses Choose Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              More than just task completion—we become an extension of your team, anticipating needs and delivering results.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Strategic Calendar & Travel Management</h3>
                <p className="text-gray-600">Optimizing executive time with intelligent scheduling, conflict resolution, and seamless travel coordination across time zones.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">HR Systems & Payroll Implementation</h3>
                <p className="text-gray-600">Setting up efficient systems using Gusto, ADP, QuickBooks—ensuring accurate, timely payroll and compliant HR processes.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">End-to-End Event Planning</h3>
                <p className="text-gray-600">From corporate retreats to client appreciation events—venue selection, vendor coordination, and flawless execution in Oklahoma.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Confidential & Discreet Support</h3>
                <p className="text-gray-600">Handling sensitive information with the highest level of professionalism. NDA-ready and experienced with confidential executive matters.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Virtual Assistant Services</h2>
              <p className="text-gray-600 text-lg">Comprehensive support for Oklahoma businesses and executives</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Virtual Assistant Service in Oklahoma`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-300"
                      priority={index < 3}
                    />
                    <div className="absolute top-4 right-4 h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md">
                      {getIcon(service.iconType)}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 flex-grow">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Flexible packages designed for your needs. No hidden fees, no long-term contracts required.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl shadow-lg p-8 flex flex-col ${
                  tier.popular ? 'ring-2 ring-blue-600 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-500">{tier.unit}</span>
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="tel:5393676832"
                  className={`w-full py-3 rounded-lg font-semibold text-center transition-colors ${
                    tier.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Call for Quote
                </Link>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-8">
            Have specific requirements? <Link href="mailto:contact@justlegalsolutions.org" className="text-blue-600 hover:underline">Email us</Link> for a custom quote.
          </p>
        </section>

        {/* VA vs Full-Time Comparison */}
        <section className="bg-gray-900 text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Virtual Assistant vs. Full-Time Employee</h2>
              <p className="text-gray-300 text-lg">See why Oklahoma businesses are choosing virtual assistant services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Virtual Assistant</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Pay only for hours worked</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>No benefits, insurance, or payroll taxes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Scale up or down as needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>No office space or equipment costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Immediate availability</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-400">Full-Time Employee</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5">✗</span>
                    <span>Fixed salary regardless of workload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5">✗</span>
                    <span>Benefits add 20-30% to costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5">✗</span>
                    <span>Hiring/firing is costly and slow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5">✗</span>
                    <span>Need desk, computer, supplies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5">✗</span>
                    <span>Weeks to recruit and train</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know about our virtual assistant services</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule your free consultation today. We&apos;ll discuss your needs and provide a custom quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:5393676832"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all text-lg font-semibold shadow-lg"
              >
                <Phone className="h-5 w-5" />
                (539) 367-6832
              </Link>
              <Link
                href="mailto:contact@justlegalsolutions.org?subject=Virtual Assistant Services - Free Consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all text-lg font-semibold shadow-lg border border-blue-500"
              >
                <Mail className="h-5 w-5" />
                Email for Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      {/* Enhanced Schema Components */}
      <EnhancedBreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Virtual Assistant Services", url: "/virtual-assistant-services" }
      ]} />
      
      <UnifiedSchema
        pageType="service"
        url="https://justlegalsolutions.org/virtual-assistant-services"
        title="Virtual Assistant Services Oklahoma | Executive Support | Just Legal Solutions"
        description="Professional virtual assistant and executive support services in Tulsa & Oklahoma. HR, payroll, event planning, travel management, customer service. 10+ years experience. Starting at $15/hr."
        serviceDetails={{
          name: "Virtual Assistant Services Oklahoma",
          description: "Professional virtual assistant and executive support services including HR & payroll, event coordination, travel management, and administrative support",
          price: "$15-$50/hour",
          areaServed: ["Oklahoma", "Tulsa", "Oklahoma City", "Broken Arrow", "Sapulpa", "Owasso"],
          serviceType: ["Virtual Assistant", "Executive Support", "HR & Payroll", "Event Coordination", "Travel Management", "Data Entry"]
        }}
        breadcrumbs={[
          { name: "Home", item: "https://justlegalsolutions.org/" },
          { name: "Virtual Assistant Services", item: "https://justlegalsolutions.org/virtual-assistant-services" }
        ]}
      />
      
      <PerformanceSchema 
        pageName="Virtual Assistant Services Oklahoma - Tulsa Executive Support"
        pageUrl="/virtual-assistant-services"
        loadTime={2.0}
        mobileOptimized={true}
      />
    </>
  );
}
