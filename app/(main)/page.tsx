import SearchDominance2026 from '@/components/ui/2026-search-dominance';
import AIVoiceSupremacy from '@/components/ui/ai-voice-supremacy';
import RankingSupremacy2026 from '@/components/ui/2026-ranking-supremacy';
import MobileVoiceOptimization from '@/components/ui/mobile-voice-optimization';
import LocalPromoBanner from '@/components/ui/local-promo-banner';
import { getPromoDescription } from '@/lib/promo-utils';
import { STARTING_PRICES, PRICE_RANGE_DISPLAY } from '@/lib/pricing';

import React from 'react';
import Image from 'next/image';
import { ResponsiveImage } from '@/components/ui/responsive-image';
import Script from 'next/script';
import { Mail, Phone, MapPin, Truck, FileText, Building2, Clock, Shield, Star, ArrowRight } from "lucide-react";
import { Metadata } from 'next';
import UnifiedSchema from '@/components/UnifiedSchema';
import SocialProof from '@/components/SocialProof';
import OwnerBio from '@/components/ui/owner-bio';
import dynamic from 'next/dynamic';

const ReviewWidget = dynamic(() => import('@/components/ui/review-widget'));

import { LiteYouTubeEmbed } from '@/components/lite-youtube-embed';

export const metadata: Metadata = {
  title: {
    absolute: 'Just Legal Solutions | Oklahoma Process Server Since 2020'
  },
  description: getPromoDescription(
    'Oklahoma process server &mdash; service starts at $30 (single-attempt) and $60 standard. Same-day available in Tulsa & all 77 counties. Licensed, bonded, GPS-tracked. 50+ years experience.',
    '25% OFF select ZIPs! Oklahoma process server &mdash; starts at $30 single-attempt, $60 standard. Same-day Tulsa service across all 77 counties. Licensed, bonded & GPS-tracked.'
  ),
  keywords: 'Oklahoma process server, process serving Oklahoma, legal document delivery, court papers served, divorce papers service, summons delivery, skip tracing Oklahoma, same day process serving, Broken Arrow process server, Sapulpa legal services, professional process serving, certified process server, legal courier Oklahoma, court document transfer',
  other: {
    'ai-content-type': 'homepage',
    'ai-summary': 'Just Legal Solutions is a licensed, bonded Oklahoma process server based in Glenpool serving Tulsa County and all 77 Oklahoma counties. Service tiers (starting prices): single-attempt posting starts at $30, standard process serving starts at $60, rush starts at $100, same-day starts at $150, after-hours rush starts at $265. Skip tracing starts at $50; court filing starts at $25; notary starts at $20; legal courier starts at $30. 50+ years combined experience. Same-day and 24/7 emergency service available. See full pricing at https://justlegalsolutions.org/pricing.',
    'ai-key-facts': 'Just Legal Solutions, licensed bonded Oklahoma process server, Glenpool OK, serves all 77 counties, starts at $30 single-attempt, starts at $60 standard, starts at $100 rush, starts at $150 same-day, starts at $265 after-hours rush, same-day service, 24/7 emergency, 50+ years experience, (539) 367-6832, info@justlegalsolutions.org, full pricing https://justlegalsolutions.org/pricing',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/'
  },
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
  openGraph: {
    title: 'Just Legal Solutions | Oklahoma Process Server Since 2020',
    description: 'Expert process serving for Tulsa, Broken Arrow, Sapulpa, Glenpool & Oklahoma. 50+ years combined experience. Service starts at $30; standard, rush, same-day & after-hours options. See pricing page for full breakdown.',
    url: 'https://justlegalsolutions.org/',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Process Server Services in Tulsa County Oklahoma'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@JustLegalOK',
    creator: '@JustLegalOK',
    title: 'Professional Process Server Tulsa County - Just Legal Solutions Oklahoma',
    description: 'Expert process serving for Tulsa, Broken Arrow, Sapulpa, Glenpool & Oklahoma. 50+ years combined experience.',
    images: ['https://justlegalsolutions.org/images/hero.webp'],
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <LocalPromoBanner zips={["74008", "74033", "74037"]} />

      {/* Hero Section - Mobile Optimized */}
      <section className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)]" aria-label="Hero section">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.webp"
            alt="Professional legal services office with modern workspace and legal documents"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            quality={85}
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          {/* H1 - visible and SEO-optimized */}
          <h1 className="speakable-heading text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Tulsa Process Server &amp; Courier Services
          </h1>

          {/* Description - visible and SEO-friendly */}
          <p className="speakable-summary text-lg md:text-xl max-w-3xl drop-shadow-md mb-6">
            Professional process serving throughout Oklahoma. From routine legal papers to urgent same-day service in Tulsa, Broken Arrow, Sapulpa &amp; all 77 counties.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6">
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Shield className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <span className="text-sm font-medium text-gray-700">Licensed &amp; Bonded</span>
            </div>
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
              <span className="text-sm font-medium text-gray-700">4.9★ Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Clock className="h-5 w-5 text-green-600" aria-hidden="true" />
              <span className="text-sm font-medium text-gray-700">Same-Day Available</span>
            </div>
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <MapPin className="h-5 w-5 text-red-500" aria-hidden="true" />
              <span className="text-sm font-medium text-gray-700">Locally Owned &amp; Operated</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              Request Service
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="tel:5393676832" className="inline-flex items-center justify-center gap-2 bg-white/95 backdrop-blur-sm hover:bg-white text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              <Phone className="h-5 w-5 text-blue-600" aria-hidden="true" />
              (539) 367-6832
            </a>
          </div>

          {/* 50+ Years Experience Badge */}
          <div className="mb-4">
            <div className="inline-block bg-blue-100/90 backdrop-blur-sm text-blue-800 font-semibold rounded-lg px-6 py-3 shadow-lg text-base md:text-lg border border-blue-200" aria-label="Combined legal experience of team and partners">
              ⭐ Over 50 Years&apos; Combined Experience Serving Oklahoma&apos;s Legal Community
            </div>
          </div>


        </div>
      </section>

      {/* Speakable JSON-LD Schema for Voice Search */}
      <Script
        type="application/ld+json"
        id="speakable-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['.speakable-heading', '.speakable-summary']
            },
            url: 'https://justlegalsolutions.org/'
          })
        }}
      />

      {/* VideoObject Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": "Best Process Server in Tulsa, Oklahoma | Just Legal Solutions",
          "description": "Learn why Just Legal Solutions is rated 4.9 stars by attorneys and landlords across Oklahoma. Licensed, GPS-tracked process serving with service starting at $30.",
          "thumbnailUrl": "https://img.youtube.com/vi/NFAhglMUNqc/maxresdefault.jpg",
          "uploadDate": "2026-04-01T08:00:00-05:00",
          "duration": "PT4M30S",
          "contentUrl": "https://www.youtube.com/watch?v=NFAhglMUNqc",
          "embedUrl": "https://www.youtube.com/embed/NFAhglMUNqc",
          "publisher": { "@type": "Organization", "name": "Just Legal Solutions", "logo": { "@type": "ImageObject", "url": "https://justlegalsolutions.org/email%20signature%20logo.png" } }
        })
      }} />



      {/* Services Grid */}
      <section className="bg-black text-white py-16 md:py-24" aria-label="Our services">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Legal Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {/* Service 1 */}
            <a href="/process-serving" className="text-center flex flex-col group cursor-pointer">
              <div className="mb-4 relative h-48 sm:h-56 w-full rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 group-hover:-translate-y-2">
                <ResponsiveImage
                  src="/images/secure-delivery.webp"
                  mobileSrc="/images/mobile/secure-delivery.webp"
                  alt="Professional courier delivering legal documents securely"
                  className="object-cover object-position-upper-center"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Process Serving Services</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Our core service. Click here to view our methods, pricing, and coverage map for professional process serving.
              </p>
            </a>
            {/* Service 2 */}
            <div className="text-center flex flex-col group">
              <div className="mb-4 relative h-48 sm:h-56 w-full rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 group-hover:-translate-y-2">
                <ResponsiveImage
                  src="/images/court-transfer.webp"
                  mobileSrc="/images/mobile/court-transfer.webp"
                  alt="Court document transfer service"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Court-Run Transfers</h3>
              <p className="text-gray-300 text-sm md:text-base">
                We specialize in court-run document transfers, ensuring your critical files reach their destination without delay.
              </p>
            </div>
            {/* Service 3 */}
            <div className="text-center flex flex-col group">
              <div className="mb-4 relative h-48 sm:h-56 w-full rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 group-hover:-translate-y-2">
                <ResponsiveImage
                  src="/images/skip-trace.webp"
                  mobileSrc="/images/mobile/skip-trace.webp"
                  alt="Professional skip tracing and investigation services for locating individuals in Oklahoma"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Skip Tracing Services</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Professional skip tracing services to locate individuals throughout Oklahoma when traditional methods fail.
              </p>
            </div>
            {/* Service 4 */}
            <div className="text-center flex flex-col group">
              <div className="mb-4 relative h-48 sm:h-56 w-full rounded-lg overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 group-hover:-translate-y-2">
                <ResponsiveImage
                  src="/images/same-day.webp"
                  mobileSrc="/images/mobile/same-day.webp"
                  alt="Same-day process serving and urgent document delivery services"
                  className="object-cover object-position-same-day"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Same-Day Service</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Get your time-sensitive documents delivered quickly with our reliable same-day process serving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Courier Services */}
      <section id="courier-services" className="relative py-24">
        <div className="absolute inset-0">
          <Image loading="lazy"
            src="/images/courier-bg.webp"
            alt="Legal office environment"
            fill
            className="object-cover"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h2 className="text-4xl font-bold text-center mb-16">Dedicated Courier Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center flex flex-col items-center">
              <div className="bg-white/10 rounded-full p-4 mb-4">
                <Clock className="w-10 h-10 mx-auto" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">Same-Day Delivery</h3>
              <p className="text-gray-300">When time is critical, our same-day courier service ensures your documents reach their destination quickly.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="bg-white/10 rounded-full p-4 mb-4">
                <FileText className="w-10 h-10 mx-auto" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Handling</h3>
              <p className="text-gray-300">Our secure handling procedures ensure your sensitive materials are protected throughout the delivery process.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="bg-white/10 rounded-full p-4 mb-4">
                <Building2 className="w-10 h-10 mx-auto" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2">Electronic Filing Assistance</h3>
              <p className="text-gray-300">Let our experienced staff handle your electronic court filings efficiently and accurately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compact YouTube Feature Video */}
      <section className="bg-slate-50 py-10 px-4 border-y border-gray-200" aria-label="About Just Legal Solutions Video">
        <div className="max-w-sm mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">See Us in Action</p>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Why Attorneys Choose Just Legal Solutions</h2>
          <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black" style={{ aspectRatio: '9/16', maxHeight: '480px' }}>
            <LiteYouTubeEmbed videoid="NFAhglMUNqc" title="Why Attorneys Choose Just Legal Solutions" />
          </div>
          <p className="text-gray-500 mt-3 text-xs">4.9 ⭐ rated by attorneys &amp; landlords across Oklahoma</p>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <ReviewWidget />

      {/* How It Works - 3-step process (visible) */}
      <section className="bg-white py-16 md:py-20" aria-label="How our process serving works">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Simple Three-Step Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Process Serving Works in Oklahoma</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From first call to court-ready affidavit, we make legal document service in Tulsa County and statewide simple, transparent, and fast.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">1</div>
              <Phone className="w-10 h-10 text-blue-600 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call or Submit Online</h3>
              <p className="text-gray-700">Reach us at <a href="tel:5393676832" className="font-semibold text-blue-700 hover:underline">(539) 367-6832</a> or use our contact form. Tell us the type of document, the recipient, and the deadline. Standard, rush, same-day, and after-hours options are available.</p>
            </div>
            <div className="relative bg-yellow-50 border border-yellow-100 rounded-2xl p-8 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">2</div>
              <FileText className="w-10 h-10 text-yellow-600 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Send the Documents</h3>
              <p className="text-gray-700">Email PDFs or drop off physical copies. We confirm the address, run skip tracing if needed, and dispatch a licensed, bonded process server to the recipient&rsquo;s home, office, or other lawful location.</p>
            </div>
            <div className="relative bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">3</div>
              <Shield className="w-10 h-10 text-green-600 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Receive Court-Ready Proof</h3>
              <p className="text-gray-700">Every attempt is GPS-timestamped. You receive a notarized affidavit of service that meets Oklahoma Title 12 O.S. § 158.1 and § 2004 requirements &mdash; ready to file with the clerk.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="/process-serving" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow">
              See Full Process Serving Methods <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Comprehensive Solutions Overview (visible) */}
      <section className="bg-slate-50 py-16 md:py-20" aria-label="Service areas and details">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Process Serving Solutions Throughout Oklahoma</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Just Legal Solutions provides professional process serving and courier services across Tulsa County and all 77 Oklahoma counties. Our experienced team ensures timely, accurate, and compliant document delivery for law firms, businesses, and individuals. Service tiers <strong>start at $30</strong> for single-attempt postings, with standard, rush, same-day, and after-hours options available. <a href="/pricing" className="text-blue-700 font-semibold hover:underline">See all starting prices &rarr;</a>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Process Serving Services</h3>
              <p className="text-gray-600 mb-4">
                Our certified process servers handle all types of legal document service including summons, subpoenas, divorce papers, eviction notices, and court orders. We provide detailed affidavits of service and maintain strict compliance with Oklahoma state laws.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Divorce document service</li>
                <li>Summons and complaints</li>
                <li>Subpoena delivery</li>
                <li>Eviction notices</li>
                <li>Small claims service</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Courier Solutions</h3>
              <p className="text-gray-600 mb-4">
                Professional courier services for urgent document delivery, court filings, and business-to-business transfers. Our secure handling ensures confidential materials reach their destination safely and on time.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Same-day delivery available</li>
                <li>Secure chain of custody</li>
                <li>Electronic filing assistance</li>
                <li>Business document transfer</li>
                <li>Time-sensitive deliveries</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Coverage Areas</h3>
              <p className="text-gray-600 mb-4">
                Serving Tulsa County, Broken Arrow, Sapulpa, and surrounding areas with reliable process serving and courier services. We also provide statewide Oklahoma coverage across all 77 counties for urgent legal document delivery.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Tulsa County (primary)</li>
                <li>Broken Arrow</li>
                <li>Sapulpa</li>
                <li>Wagoner County</li>
                <li>Creek County</li>
                <li>Statewide Oklahoma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (visible) */}
      <section className="bg-white py-16 md:py-20" aria-label="Why choose Just Legal Solutions">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Just Legal Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Legal Document Delivery You Can Trust</h3>
              <p className="text-gray-600 mb-4">
                With 50+ years of combined experience serving the Tulsa County legal community, Just Legal Solutions has built a reputation for reliable, professional process serving and courier services. Our team understands the critical importance of timely document delivery in legal proceedings.
              </p>
              <p className="text-gray-600 mb-6">
                We maintain detailed records, provide comprehensive affidavits of service, and ensure full compliance with Oklahoma state regulations. Whether you need routine document service or urgent same-day delivery, our professional team delivers results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certified Process Servers</h4>
                    <p className="text-gray-600 text-sm">Licensed and bonded professionals ensuring legal compliance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast Turnaround Times</h4>
                    <p className="text-gray-600 text-sm">Same-day, rush, and standard service options available</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                    <p className="text-gray-600 text-sm">Transparent rates with no hidden fees or surprises</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl border border-blue-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Starting Prices</h3>
              <p className="text-sm text-gray-600 mb-6">Each tier below is a <strong>starting price</strong> &mdash; final cost depends on distance, attempts, and complexity. See the full breakdown on our pricing page.</p>
              <div className="space-y-3">
                {STARTING_PRICES.map((tier, idx) => (
                  <div
                    key={tier.id}
                    className={`flex justify-between items-center py-3 ${
                      idx < STARTING_PRICES.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <span className="font-medium text-gray-900">{tier.label}</span>
                    <span className="text-xl font-bold text-blue-600">starts at ${tier.startsAt}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-6">
                All services include a notarized affidavit of service and GPS-timestamped attempt records.
              </p>
              <a
                href="/pricing"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg transition shadow-sm"
              >
                View Full Pricing &amp; Add-Ons <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Bio Section */}
      <OwnerBio />

      {/* Explore Resources Section */}
      <section className="py-16 bg-gray-50" aria-label="Resources and guides">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Explore Our Resources</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Learn more about process serving in Oklahoma with our comprehensive guides and educational resources</p>
          <div className="grid md:grid-cols-4 gap-6">
            <a href="/process-serving" className="bg-blue-50 border-2 border-blue-600 p-6 rounded-lg shadow-md hover:shadow-lg transition text-center block">
              <div className="text-3xl mb-3">📄</div>
              <h3 className="font-bold text-blue-900 mb-2">Process Serving Info</h3>
              <p className="text-blue-800 text-sm">Full methods, pricing and service options</p>
            </a>
            <a href="/oklahoma-process-server-faq" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center block">
              <div className="text-3xl mb-3">❓</div>
              <h3 className="font-bold text-gray-900 mb-2">FAQ</h3>
              <p className="text-gray-600 text-sm">Common questions about process serving answered</p>
            </a>
            <a href="/oklahoma-process-server-laws" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center block">
              <div className="text-3xl mb-3">📜</div>
              <h3 className="font-bold text-gray-900 mb-2">Oklahoma Laws</h3>
              <p className="text-gray-600 text-sm">Legal requirements for process serving</p>
            </a>
            <a href="/pricing" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center block">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">Pricing</h3>
              <p className="text-gray-600 text-sm">Transparent pricing for all services</p>
            </a>
            <a href="/seo/what-is-a-process-server" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center block">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-bold text-gray-900 mb-2">What is a Process Server?</h3>
              <p className="text-gray-600 text-sm">Complete guide to process serving</p>
            </a>
            <a href="/family-law-service-guide-tulsa" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center block">
              <div className="text-3xl mb-3">👨‍👩‍👧</div>
              <h3 className="font-bold text-gray-900 mb-2">Family Law Guide</h3>
              <p className="text-gray-600 text-sm">Specialized family law process serving</p>
            </a>
            <a href="/weekend-emergency" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center block">
              <div className="text-3xl mb-3">🚨</div>
              <h3 className="font-bold text-gray-900 mb-2">Emergency Service</h3>
              <p className="text-gray-600 text-sm">24/7 weekend and emergency service</p>
            </a>
            <a href="/law-firm-services" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center block">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="font-bold text-gray-900 mb-2">Law Firm Services</h3>
              <p className="text-gray-600 text-sm">Partner solutions for legal professionals</p>
            </a>
            <a href="/tulsa-process-server" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center block">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-gray-900 mb-2">Tulsa Process Server</h3>
              <p className="text-gray-600 text-sm">Serving all of Tulsa County</p>
            </a>
            <a href="/service-areas" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center block">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="font-bold text-gray-900 mb-2">Oklahoma Service Areas</h3>
              <p className="text-gray-600 text-sm">Browse all cities and counties we serve</p>
            </a>
            <a href="/urgent-process-server" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center block">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Urgent Process Server</h3>
              <p className="text-gray-600 text-sm">Same-day rush process serving</p>
            </a>
            <a href="/courier-services-tulsa" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center block">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="font-bold text-gray-900 mb-2">Courier Services Tulsa</h3>
              <p className="text-gray-600 text-sm">Fast document delivery and courier service</p>
            </a>
            <a href="/resources" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center block">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-bold text-gray-900 mb-2">Resources & Guides</h3>
              <p className="text-gray-600 text-sm">Legal guides, tools, and educational resources</p>
            </a>
          </div>
        </div>
      </section>



      {/* Unified Schema Markup */}
      <UnifiedSchema
        pageType="home"
        url="https://justlegalsolutions.org/"
        title="Professional Process Server Tulsa County - Just Legal Solutions Oklahoma"
        description="Expert process serving for Tulsa, Broken Arrow, Sapulpa, Glenpool & Oklahoma. 50+ years combined experience. Service starts at $30 (single-attempt) and $60 standard. Full pricing at https://justlegalsolutions.org/pricing. Call (539) 367-6832."
        image="https://justlegalsolutions.org/images/hero.webp"
        priceRange={PRICE_RANGE_DISPLAY}
        serviceDetails={{
          name: "Process Serving Services",
          description: "Professional process serving and legal document delivery services throughout Tulsa County and Oklahoma. Service starts at $30 for single-attempt postings and $60 for standard service. Expert court document service, skip tracing, and courier solutions with 50+ years combined experience.",
          price: PRICE_RANGE_DISPLAY,
          areaServed: ["Tulsa", "Broken Arrow", "Sapulpa", "Glenpool", "Oklahoma"]
        }}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 156,
          bestRating: 5,
          worstRating: 1
        }}
        faqItems={[
          {
            question: "How much does a process server cost in Tulsa County?",
            answer: "Just Legal Solutions process serving starts at $30 for a single-attempt posting and $60 for standard service (up to 3 attempts). Rush service starts at $100, same-day starts at $150, and after-hours rush starts at $265. Final pricing depends on distance, attempts, and complexity \u2014 see https://justlegalsolutions.org/pricing for the full breakdown."
          },
          {
            question: "What areas do you serve?",
            answer: "We provide process serving services throughout Tulsa County, including Tulsa, Broken Arrow, Sapulpa, Glenpool, Wagoner County, Creek County, and all 77 Oklahoma counties."
          },
          {
            question: "How fast can you serve documents?",
            answer: "We offer standard service (5-7 business days), rush service (1-3 business days), same-day service (within 4-8 hours), and after-hours rush (2-hour response)."
          },
          {
            question: "What types of documents do you serve?",
            answer: "We serve all types of legal documents including summons, subpoenas, divorce papers, eviction notices, protective orders, small-claims paperwork, and more."
          }
        ]}
      />

      {/* 2026 SEO Dominance Components */}
      <SearchDominance2026
        pageTitle="Oklahoma's #1 Process Server | Just Legal Solutions"
        primaryKeywords={['process server tulsa', 'process server oklahoma', 'legal document delivery', 'same day process serving']}
        location="Tulsa, Oklahoma"
        businessType="Process Server"
        skipSchema={true}
      />

      <AIVoiceSupremacy
        businessName="Just Legal Solutions"
        location="Tulsa, Oklahoma"
        services={['Process Serving', 'Legal Document Delivery', 'Skip Tracing', 'Emergency Service']}
        phone="(539) 367-6832"
        skipSchema={true}
      />

      <RankingSupremacy2026
        targetKeywords={['process server tulsa', 'process server oklahoma', 'tulsa process server', 'oklahoma process server']}
        location="Tulsa, Oklahoma"
        businessName="Just Legal Solutions"
        skipSchema={true}
      />

      <MobileVoiceOptimization
        businessName="Just Legal Solutions"
        phone="(539) 367-6832"
        primaryService="process serving"
        location="Tulsa, Oklahoma"
      />


    </div>
  );
}
