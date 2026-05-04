export const metadata = {
  title: '(539) 367-6832 | Contact Just Legal Solutions',
  description: 'Get a free quote for process serving in Oklahoma. Service starts at $35 single-attempt, $60 standard, $100 rush, $150 same-day. Call (539) 367-6832 or submit online. Licensed & bonded. All 77 OK counties.',
  keywords: [
    'contact process server',
    'oklahoma process server',
    'tulsa process server contact',
    'legal courier oklahoma',
    'business services contact',
    '2026 process serving',
    'emergency process server',
    'licensed bonded process server',
    'just legal solutions contact'
  ],
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  category: 'Contact Information',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: 'https://justlegalsolutions.org/contact'
  },
  openGraph: {
    title: '(539) 367-6832 | Contact Just Legal Solutions',
    description: 'Get a free quote for process serving in Oklahoma. Service starts at $35 single-attempt, $60 standard, $100 rush, $150 same-day. Call (539) 367-6832. Licensed & bonded. All 77 OK counties.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/contact',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/image-pack/images/image-041-contact-hero.webp',
        width: 1920,
        height: 1080,
        alt: 'Modern professional office reception area with Tulsa city view',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '(539) 367-6832 | Contact Just Legal Solutions',
    description: 'Get a free quote for process serving in Oklahoma. Service starts at $35 single-attempt, $60 standard, $100 rush. Call (539) 367-6832. Licensed & bonded. All 77 OK counties.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-041-contact-hero.webp'],
    site: '@ServeOK',
  }
};

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Star, Clock, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import AIVoiceSupremacy from '@/components/ui/ai-voice-supremacy';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Just Legal Solutions",
            "description": "Contact Just Legal Solutions for professional process serving, courier services, and business solutions in Tulsa County, Oklahoma.",
            "url": "https://justlegalsolutions.org/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "@id": "https://justlegalsolutions.org/#localbusiness",
              "name": "Just Legal Solutions",
              "url": "https://justlegalsolutions.org",
              "telephone": "+15393676832",
              "email": "info@JustLegalSolutions.org",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "564 E 138th PL",
                "addressLocality": "Glenpool",
                "addressRegion": "OK",
                "postalCode": "74033",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "36.154",
                "longitude": "-95.9928"
              },
              "priceRange": "$35-$200",
              "openingHours": ["Mo-Su 00:00-23:59"],
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59",
                "description": "24/7 Emergency Process Serving Available"
              }],
              "review": [{
                "@type": "Review",
                "author": { "@type": "Person", "name": "Oklahoma Client" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Professional and reliable process serving throughout Oklahoma.",
                "datePublished": "2025-10-15"
              }],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+15393676832",
                "contactType": "customer service",
                "areaServed": "Oklahoma",
                "availableLanguage": "English"
              },
              "image": "https://justlegalsolutions.org/image-pack/images/image-041-contact-hero.webp",
              "logo": {
                "@type": "ImageObject",
                "url": "https://justlegalsolutions.org/images/jls-logo.webp",
                "width": 180,
                "height": 60
              },
              "description": "Professional process serving and legal document delivery throughout Oklahoma with same-day service available.",
              "areaServed": [
                { "@type": "State", "name": "Oklahoma" },
                { "@type": "City", "name": "Tulsa" },
                { "@type": "City", "name": "Broken Arrow" }
              ],
              "paymentAccepted": ["Cash", "Credit Card", "Check"],
              "currenciesAccepted": "USD",
              "foundingDate": "2025-03-01",
              "slogan": "Oklahoma's #1 Process Server - Professional, Fast, Reliable"
            }
          })
        }}
      />
      <EnhancedBreadcrumbSchema 
        items={[
          { name: "Home", url: "https://justlegalsolutions.org" },
          { name: "Contact", url: "https://justlegalsolutions.org/contact" }
        ]} 
      />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="relative h-48 md:h-64 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-8 ring-1 ring-white/20">
              <Image
                src="/image-pack/images/image-041-contact-hero.webp"
                alt="Modern professional office reception area with Tulsa city view"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
            <div className="max-w-4xl mx-auto text-center">
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Licensed & Bonded</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">4.9★ Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-blue-300" />
                  <span className="text-sm font-medium">24/7 Available</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">Contact Just Legal Solutions</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Professional process serving, courier, and business services in Tulsa County and across Oklahoma.</p>
            
              {/* Quick Contact Cards */}
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <a href="tel:5393676832" className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group">
                  <Phone className="h-8 w-8 text-white mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-white mb-1">Call Us</h3>
                  <p className="text-blue-100 font-semibold">(539) 367-6832</p>
                </a>
                <a href="mailto:info@JustLegalSolutions.org" className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group">
                  <Mail className="h-8 w-8 text-white mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-white mb-1">Email Us</h3>
                  <p className="text-blue-100 font-semibold text-sm">info@JustLegalSolutions.org</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="max-w-4xl bg-white rounded-2xl shadow-xl p-8 my-12 mx-4 md:mx-auto border border-gray-100">
          {/* Clean badge grid */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <Image src="/badges/5-star-google-rating-badge.svg" alt="5-Star Google Rating" width={80} height={80} className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity" priority />
            <Image src="/badges/licensed-bonded-badge.svg" alt="Licensed & Bonded" width={80} height={80} className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            <Image src="/badges/court-certified-professional-badge.svg" alt="Court Certified Professional" width={80} height={80} className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            <Image src="/badges/oklahoma-statewide-coverage-badge.svg" alt="Oklahoma Statewide Coverage" width={80} height={80} className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            <Image src="/badges/secure-payment-processing-badge.svg" alt="Secure Payment Processing" width={80} height={80} className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          
          {/* Quick Links */}
          <nav className="mb-8 flex flex-wrap justify-center gap-3 md:gap-6">
            <Link href="/pricing" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">Our Services</Link>
            <Link href="/pricing" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">Pricing</Link>
            <Link href="/ultimate-guide-process-serving-oklahoma" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">FAQ</Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">About Us</Link>
            <Link href="/service-areas" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">Service Areas</Link>
          </nav>
          
          {/* Featured Testimonial */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-1 mb-3 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-center text-gray-700 italic mb-3">
              &quot;Fast, professional, and reliable! Just Legal Solutions made the process easy and stress-free.&quot;
            </blockquote>
            <p className="text-center text-sm text-gray-500">— Sarah T., Tulsa</p>
          </div>
          <div className="mb-6 flex flex-wrap justify-center gap-3">
            <Link href="/pricing" className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300 font-semibold">
              <ArrowRight className="w-4 h-4" />
              Request Service
            </Link>
            <Link href="/urgent-process-server" className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 font-semibold">Urgent Service</Link>
            <Link href="/weekend-emergency" className="inline-flex items-center gap-2 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 hover:scale-105 transition-all duration-300 font-semibold">Weekend Service</Link>
            <a href="/contact-details.vcf" download className="inline-flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-semibold">Download vCard</a>
          </div>
          {/* Unique Selling Points Section */}
          <section className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl shadow-lg p-6 mb-8 border border-blue-100">
            <h2 className="text-xl font-bold mb-4 text-blue-900">Why Choose Just Legal Solutions?</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm">Licensed, bonded, and court-certified process servers</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm">Statewide Oklahoma coverage with local expertise</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm">Same-day, urgent, and weekend service available</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm">Transparent pricing and secure payment options</span>
              </div>
              <div className="flex items-start gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm">Hundreds of 5-star reviews and proven results</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm">Trusted by law firms, businesses, and individuals</span>
              </div>
            </div>
          </section>
          {/* Helpful Resources */}
          <section className="max-w-3xl mx-auto bg-blue-50 rounded-lg shadow-md p-4 mb-8 border border-blue-100">
            <p className="text-sm text-gray-700">While you wait, explore our <Link href="/resources" className="text-blue-600 hover:underline font-medium">legal resources and guides</Link> for helpful information about process serving, Oklahoma laws, and how to prepare your documents.</p>
          </section>

          {/* Office Information & Hours */}
          <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Office Location &amp; Business Hours</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Our Address</h3>
                <p className="text-gray-700 mb-1">564 E 138th PL</p>
                <p className="text-gray-700 mb-1">Glenpool, OK 74033</p>
                <p className="text-gray-600 text-sm mt-2">Serving all of Tulsa County and the surrounding Oklahoma metro area, including Broken Arrow, Bixby, Jenks, Owasso, and Sand Springs.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Hours of Operation</h3>
                <div className="space-y-1 text-gray-700 text-sm">
                  <p><span className="font-medium">Standard Service:</span> Monday&ndash;Friday, 8:00 AM&ndash;6:00 PM</p>
                  <p><span className="font-medium">Phone &amp; Email:</span> Monday&ndash;Saturday, 7:00 AM&ndash;9:00 PM</p>
                  <p><span className="font-medium">Emergency Service:</span> Available 24/7, including weekends and holidays</p>
                </div>
                <p className="text-gray-600 text-sm mt-3">For after-hours emergencies involving time-sensitive court filings or protective orders, call (539) 367-6832 directly. Our team monitors calls around the clock to ensure urgent legal documents are served without delay.</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">How to Submit Documents</h3>
              <p className="text-gray-700 text-sm">You can submit documents for service by email at info@JustLegalSolutions.org or through our secure online portal. We accept PDF, DOCX, and physical copies. Once received, our team will confirm receipt and provide an estimated service timeline, typically within one business hour during standard hours.</p>
            </div>
          </section>
          {/* Accessibility Statement */}
          <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md p-4 mb-8 border border-gray-200">
            <p className="text-xs text-gray-600">We are committed to accessibility. If you have trouble using this site or need assistance, please <a href="mailto:info@JustLegalSolutions.org" className="text-blue-600 hover:underline">contact us</a> and we will help promptly.</p>
          </section>
          <div className="mb-4">
            <div className="rounded overflow-hidden shadow border border-gray-200">
              <iframe
                title="Just Legal Solutions Service Area"
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d412900.2319122265!2d-95.93!3d36.05!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sus!4v1768104993252!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            <span>
              Serving
              {' '}<Link href="/tulsa-process-server" className="text-blue-600 hover:underline">Tulsa</Link>,
              {' '}<Link href="/service-areas/broken-arrow" className="text-blue-600 hover:underline">Broken Arrow</Link>,
              {' '}<Link href="/service-areas/bixby" className="text-blue-600 hover:underline">Bixby</Link>,
              {' '}<Link href="/service-areas/jenks" className="text-blue-600 hover:underline">Jenks</Link>,
              {' '}<Link href="/service-areas/owasso" className="text-blue-600 hover:underline">Owasso</Link>,
              {' '}<Link href="/service-areas/sand-springs" className="text-blue-600 hover:underline">Sand Springs</Link>,
              {' '}<Link href="/service-areas/sapulpa" className="text-blue-600 hover:underline">Sapulpa</Link>,
              and <Link href="/ultimate-guide-process-serving-oklahoma" className="text-blue-600 hover:underline">all of Oklahoma</Link>.
            </span>
          </div>
        </section>
        {/* FAQ Section for SEO and user trust */}
        <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">How quickly will I get a response?</h3>
              <p className="text-gray-700">We respond to most inquiries within 1 business hour during normal operating times. For urgent matters, please call for fastest service or visit our <Link href="/urgent-process-server" className="text-blue-600 hover:underline font-medium">urgent service page</Link>.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">What areas do you serve?</h3>
              <p className="text-gray-700">We serve all of Tulsa County and surrounding areas, including <Link href="/service-areas/broken-arrow" className="text-blue-600 hover:underline">Broken Arrow</Link>, <Link href="/service-areas/bixby" className="text-blue-600 hover:underline">Bixby</Link>, <Link href="/service-areas/jenks" className="text-blue-600 hover:underline">Jenks</Link>, <Link href="/service-areas/owasso" className="text-blue-600 hover:underline">Owasso</Link>, <Link href="/service-areas/sand-springs" className="text-blue-600 hover:underline">Sand Springs</Link>, <Link href="/service-areas/sapulpa" className="text-blue-600 hover:underline">Sapulpa</Link>, and more. See our <Link href="/service-areas" className="text-blue-600 hover:underline font-medium">full service area list</Link>.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Are you licensed and bonded?</h3>
              <p className="text-gray-700">Yes, we are fully licensed, bonded, and court-certified for process serving in Oklahoma. Learn more on our <Link href="/why-choose-us" className="text-blue-600 hover:underline font-medium">Why Choose Us</Link> page.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">How much does process serving cost?</h3>
              <p className="text-gray-700">Standard service starts at $60 with all-inclusive flat-rate pricing — no mileage, no per-attempt fees, no hidden charges. View our complete <Link href="/pricing" className="text-blue-600 hover:underline font-medium">pricing page</Link> for all service options including same-day, rush, and statewide rates.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Do you offer weekend or emergency service?</h3>
              <p className="text-gray-700">Yes! We offer <Link href="/weekend-emergency" className="text-blue-600 hover:underline font-medium">weekend and emergency service</Link> for urgent legal matters. Contact us anytime for time-sensitive documents.</p>
            </div>
          </div>
        </section>
      </main>
      {/* FAQ Schema for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How quickly will I get a response from Just Legal Solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We respond to most inquiries within 1 business hour during normal operating times. For urgent matters, please call (539) 367-6832 for fastest service."
                }
              },
              {
                "@type": "Question",
                "name": "What areas does Just Legal Solutions serve in Oklahoma?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve all of Tulsa County and surrounding areas, including Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, and all 77 Oklahoma counties."
                }
              },
              {
                "@type": "Question",
                "name": "Is Just Legal Solutions licensed and bonded in Oklahoma?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we are fully licensed, bonded, and court-certified for process serving in Oklahoma under 12 O.S. § 158.1."
                }
              },
              {
                "@type": "Question",
                "name": "How much does process serving cost in Oklahoma?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard service starts at $60 for Tulsa County and nearby areas. We offer various service levels including rush and same-day options. View our pricing page for complete details."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer weekend or emergency process serving?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We offer weekend and emergency service for urgent legal matters. Contact us anytime at (539) 367-6832 for time-sensitive documents."
                }
              }
            ]
          })
        }}
      />
      <Footer />
    </>
  );
}
