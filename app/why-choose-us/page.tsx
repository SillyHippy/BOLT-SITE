import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Clock, MapPin, Zap, Smartphone, Users, CheckCircle, Star, Phone, ArrowRight, Award, Target, FileText, BadgeCheck } from 'lucide-react';

export const metadata = {
  title: 'Why Choose Us | Best Oklahoma Process Server 2026 | Just Legal Solutions',
  description: "Why choose Just Legal Solutions? Oklahoma's most trusted process server—fast, reliable, and professional with 24/7 support, transparent pricing, and advanced technology. Serving all 77 counties.",
  keywords: 'why choose us, best process server, oklahoma process server 2026, trusted process server tulsa, licensed bonded process server, 24/7 process server oklahoma',
  alternates: {
    canonical: 'https://justlegalsolutions.org/why-choose-us',
  },
};

const benefits = [
  {
    icon: Shield,
    title: 'Licensed, Bonded & Insured',
    description: 'Fully licensed and bonded in Oklahoma, protecting you from liability with guaranteed legal compliance and strict adherence to Oklahoma Rules of Civil Procedure.',
  },
  {
    icon: Zap,
    title: 'Fast & Reliable Service',
    description: 'Multiple delivery attempts including early mornings, evenings, and weekends. GPS tracking and real-time updates let you monitor service progress.',
  },
  {
    icon: MapPin,
    title: 'Statewide Coverage',
    description: 'We serve every county in Oklahoma—urban or rural, business or residential. Same-day and emergency service available statewide.',
  },
  {
    icon: Smartphone,
    title: 'Technology-Driven',
    description: 'Advanced mobile apps, GPS tracking, and secure digital document management. E-signatures, photo proof, and detailed affidavits are standard.',
  },
  {
    icon: Target,
    title: 'Better Than Sheriff',
    description: "Unlike sheriff's departments with split priorities, our sole focus is process service. Faster, more responsive, with higher success rates.",
  },
  {
    icon: Users,
    title: 'Trusted by Professionals',
    description: 'Hundreds of law firms, property managers, and individuals rely on our expertise. Proven results and positive testimonials across Oklahoma.',
  },
];

const promises = [
  'Every serve handled with care, urgency, and legal precision',
  'AI-enhanced route optimization for faster delivery',
  'Real-time status updates and proof of service',
  'Transparent pricing with no hidden fees',
  'Multiple attempts until successful service',
];

const clientTypes = [
  { name: 'Law Firms & Attorneys', description: 'Reliable service for your case deadlines' },
  { name: 'Property Managers', description: 'Eviction notices and tenant communications' },
  { name: 'Businesses', description: 'Commercial litigation and contract disputes' },
  { name: 'Individuals', description: 'Personal legal matters handled professionally' },
];

const faqs = [
  {
    question: 'What makes Just Legal Solutions different from other Oklahoma process servers?',
    answer: 'We combine 50+ years of combined experience with advanced technology including GPS tracking, real-time updates, and AI-enhanced route optimization. We offer 24/7 availability, transparent pricing with no hidden fees, and serve all 77 Oklahoma counties with a 98% first-attempt success rate.'
  },
  {
    question: 'Are you licensed and insured in Oklahoma?',
    answer: 'Yes, Just Legal Solutions is fully licensed, bonded, and insured in the state of Oklahoma. This protects you from liability and ensures all service of process is conducted in strict compliance with Oklahoma Rules of Civil Procedure.'
  },
  {
    question: 'How fast can you serve documents in Oklahoma?',
    answer: 'We offer multiple service levels: Standard, Rush (24-48 hours), Same-Day (within hours), and 2-Hour Emergency service. We also offer weekend and holiday service when you need it most.'
  },
  {
    question: 'Do you serve all areas of Oklahoma?',
    answer: 'Yes, we provide statewide coverage across all 77 Oklahoma counties. Whether you need service in downtown Tulsa, rural areas, or anywhere in between, we have you covered with no surprise mileage fees.'
  },
  {
    question: 'Why should I choose you over the sheriff for process serving?',
    answer: "Unlike sheriff's departments with split priorities, our sole focus is process service. This means faster turnaround, higher success rates, real-time tracking, multiple attempt options, and dedicated customer service. We're more responsive and flexible than government agencies."
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                name: 'Why Choose Us | Best Oklahoma Process Server 2026 | Just Legal Solutions',
                description: "Why choose Just Legal Solutions? Oklahoma's most trusted process server—fast, reliable, and professional with 24/7 support, transparent pricing, and advanced technology.",
                url: 'https://justlegalsolutions.org/why-choose-us'
              },
              {
                '@type': 'LegalService',
                name: 'Just Legal Solutions',
                url: 'https://justlegalsolutions.org/why-choose-us',
                image: 'https://justlegalsolutions.org/images/oklahoma-licensed-bonded-process-server-badges.png',
                telephone: '+1-539-367-6832',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '564 E 138th PL',
                  addressLocality: 'Glenpool',
                  addressRegion: 'OK',
                  postalCode: '74033',
                  addressCountry: 'US',
                },
                openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59',
                areaServed: {
                  '@type': 'State',
                  name: 'Oklahoma'
                },
                priceRange: '$30-$200',
                description: "Oklahoma's most trusted process server. Fast, reliable, and professional service with 24/7 support.",
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  reviewCount: '156',
                  bestRating: '5'
                }
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map(faq => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Licensed & Bonded</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">4.9 Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-blue-300" />
                  <span className="text-sm font-medium">Same-Day Available</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
                Why Choose Just Legal Solutions?
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Oklahoma&apos;s most trusted process server since day one. Fast, reliable, and professional service backed by advanced technology and genuine care for your legal needs.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="tel:+15393676832" 
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  (539) 367-6832
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">What Sets Us Apart</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choosing the right process server can make or break legal proceedings. Here&apos;s why Oklahoma trusts us.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                      <benefit.icon className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image 
                  src="/images/tulsa-process-server-delivering-documents.png" 
                  alt="Tulsa Process Server Delivering Documents" 
                  width={500} 
                  height={350} 
                  className="rounded-xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Promise to You</h2>
                <div className="space-y-4">
                  {promises.map((promise, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{promise}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a 
                    href="/weekend-emergency"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300"
                  >
                    Weekend Emergency Service
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Who We Serve</h2>
              <p className="text-lg text-gray-600">Trusted by legal professionals and individuals across Oklahoma</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {clientTypes.map((client, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-7 h-7 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">{client.name}</h3>
                  <p className="text-gray-600 text-sm">{client.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Oklahoma Pride Banner */}
        <section className="py-12 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0">
                <Image 
                  src="/images/OklahomaFlag.jpg" 
                  alt="Oklahoma State Flag" 
                  width={180} 
                  height={120} 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-3">Proudly Serving All of Oklahoma</h2>
                <p className="text-blue-100 mb-4">
                  From Tulsa to every corner of Oklahoma, our team is ready to deliver—day or night, weekend or holiday. Deep local roots with statewide coverage.
                </p>
                <a 
                  href="/service-areas"
                  className="inline-flex items-center gap-2 text-white underline hover:text-blue-200 transition-colors"
                >
                  View All Service Areas
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Common questions about choosing Just Legal Solutions</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold mb-3 text-blue-900">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience the difference of working with Oklahoma&apos;s most trusted process server. Contact us today for a free quote.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300"
                >
                  Request a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 border-2 border-blue-700 px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Our Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">Explore Our Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/tulsa-process-server" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Tulsa Process Server</h3>
                <p className="text-sm text-gray-600 mt-1">Professional process serving in Tulsa County</p>
              </Link>
              <Link href="/urgent-process-server" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Urgent Process Server</h3>
                <p className="text-sm text-gray-600 mt-1">Same-day and 2-hour emergency service</p>
              </Link>
              <Link href="/courier-services-tulsa" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Courier Services Tulsa</h3>
                <p className="text-sm text-gray-600 mt-1">Legal document delivery and courier service</p>
              </Link>
              <Link href="/service-areas" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Oklahoma Service Areas</h3>
                <p className="text-sm text-gray-600 mt-1">All cities and counties we serve</p>
              </Link>
              <Link href="/oklahoma-process-server-laws" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Oklahoma Process Server Laws</h3>
                <p className="text-sm text-gray-600 mt-1">Legal requirements for serving process</p>
              </Link>
              <Link href="/resources" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Resources &amp; Guides</h3>
                <p className="text-sm text-gray-600 mt-1">Legal guides, tools, and educational resources</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
