// --- SEO Metadata for 2025 ---
export const metadata = {
  title: 'Contact Just Legal Solutions | Oklahoma Process Server & Legal Support 2025',
  description: 'Contact Just Legal Solutions—reach our team for 24/7 process serving, legal courier, and business support in Tulsa County and across Oklahoma. Fast, secure, and trusted by law firms and individuals.',
  keywords: [
    'contact process server',
    'oklahoma process server',
    'tulsa process server contact',
    'legal courier oklahoma',
    'business services contact',
    '2025 process serving',
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
    title: 'Contact Just Legal Solutions | Oklahoma Process Server & Legal Support 2025',
    description: 'Contact Just Legal Solutions for 24/7 process serving, legal courier, and business support in Tulsa County and statewide Oklahoma. Fast, secure, and trusted by law firms.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/contact',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Just Legal Solutions - Oklahoma Process Server & Legal Support',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Just Legal Solutions | Oklahoma Process Server & Legal Support 2025',
    description: 'Contact Just Legal Solutions for 24/7 process serving, legal courier, and business support in Tulsa County and statewide Oklahoma. Fast, secure, and trusted by law firms.',
    images: ['https://justlegalsolutions.org/og-image.png'],
    site: '@JustLegalOK',
  }
};

import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Script from 'next/script';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import GoogleSpecificOptimization from '@/components/ui/google-specific-optimization';
import BingYahooOptimization from '@/components/ui/bing-yahoo-optimization';
import DuckDuckGoOptimization from '@/components/ui/duckduckgo-optimization';
import SearchEngineUniversalOptimization from '@/components/ui/search-engine-universal-optimization';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Script id="contact-schema">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Just Legal Solutions",
            "description": "Contact Just Legal Solutions for professional process serving, courier services, and business solutions in Tulsa County, Oklahoma.",
            "url": "https://justlegalsolutions.org/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Just Legal Solutions",
              "url": "https://justlegalsolutions.org",
              "telephone": "+15393676832",
              "email": "info@justlegalsolutions.org",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "564 E 138th PL",
                "addressLocality": "Glenpool",
                "addressRegion": "OK",
                "postalCode": "74033",
                "addressCountry": "US"
              },
              "openingHours": [
                "Mo-Su 00:00-23:59"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+15393676832",
                "contactType": "customer service",
                "areaServed": "Oklahoma",
                "availableLanguage": "English"
              }
            }
          }
        `}
      </Script>

      <GoogleSpecificOptimization />
      <BingYahooOptimization />
      <DuckDuckGoOptimization />
      <SearchEngineUniversalOptimization />
      <EnhancedBreadcrumbSchema 
        items={[
          { name: "Home", url: "https://justlegalsolutions.org" },
          { name: "Contact", url: "https://justlegalsolutions.org/contact" }
        ]} 
      />

      <main className="min-h-screen bg-gray-50 pt-24 pb-12">
        <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold mb-2 text-blue-900">Contact Just Legal Solutions</h1>
          <p className="mb-4 text-gray-700">Reach out for professional process serving, courier, and business services in Tulsa County and across Oklahoma. Fast, reliable, and confidential.</p>
          {/* Badge carousel: show all badges in a continuous row, smooth rotation */}
          <div className="mb-8">
            <Carousel className="w-full max-w-2xl mx-auto" opts={{ loop: true, duration: 6000 }}>
              <CarouselContent className="flex gap-8 items-center">
                <CarouselItem className="basis-auto flex-shrink-0 w-auto">
                  <Image src="/badges/5-star-google-rating-badge.svg" alt="5-Star Google Rating" width={110} height={110} className="h-24 w-auto" priority />
                </CarouselItem>
                <CarouselItem className="basis-auto flex-shrink-0 w-auto">
                  <Image src="/badges/licensed-bonded-badge.svg" alt="Licensed & Bonded" width={110} height={110} className="h-24 w-auto" />
                </CarouselItem>
                <CarouselItem className="basis-auto flex-shrink-0 w-auto">
                  <Image src="/badges/court-certified-professional-badge.svg" alt="Court Certified Professional" width={110} height={110} className="h-24 w-auto" />
                </CarouselItem>
                <CarouselItem className="basis-auto flex-shrink-0 w-auto">
                  <Image src="/badges/oklahoma-statewide-coverage-badge.svg" alt="Oklahoma Statewide Coverage" width={110} height={110} className="h-24 w-auto" />
                </CarouselItem>
                <CarouselItem className="basis-auto flex-shrink-0 w-auto">
                  <Image src="/badges/secure-payment-processing-badge.svg" alt="Secure Payment Processing" width={110} height={110} className="h-24 w-auto" />
                </CarouselItem>
                <CarouselItem className="basis-auto flex-shrink-0 w-auto">
                  <Image src="/badges/locally-owned-operated-badge.svg" alt="Locally Owned & Operated Oklahoma Badge" width={110} height={110} className="h-24 w-auto" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="mb-4">
            <a href="tel:5393676832" className="text-lg font-semibold text-blue-700 hover:underline">Call: (539) 367-6832</a><br />
            <a href="mailto:info@justlegalsolutions.org" className="text-blue-700 hover:underline">info@justlegalsolutions.org</a>
          </div>
          <nav className="mb-6 flex flex-wrap justify-center gap-2 md:gap-4">
            <a href="/services" className="text-blue-600 hover:underline font-medium">Our Services</a>
            <a href="/pricing" className="text-blue-600 hover:underline font-medium">Pricing</a>
            <a href="/faq" className="text-blue-600 hover:underline font-medium">FAQ</a>
            <a href="/about" className="text-blue-600 hover:underline font-medium">About Us</a>
            <a href="/resources" className="text-blue-600 hover:underline font-medium">Resources</a>
            <a href="/service-areas" className="text-blue-600 hover:underline font-medium">Service Areas</a>
          </nav>
          {/* Reviews carousel only, no badge next to it */}
          <div className="mb-8">
            <Carousel className="w-full max-w-xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800 mb-2">
                    &quot;Fast, professional, and reliable! Just Legal Solutions made the process easy and stress-free.&quot;
                    <br />
                    <span className="text-sm text-gray-500">- Sarah T., <a href="/tulsa-process-server" className="text-blue-600 hover:underline">Tulsa</a></span>
                  </blockquote>
                </CarouselItem>
                <CarouselItem>
                  <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800 mb-2">
                    &quot;Highly recommend for anyone needing process serving in Oklahoma. Great communication and results.&quot;
                    <br />
                    <span className="text-sm text-gray-500">- Mark D., <a href="/service-areas/broken-arrow" className="text-blue-600 hover:underline">Broken Arrow</a></span>
                  </blockquote>
                </CarouselItem>
                <CarouselItem>
                  <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800">
                    &quot;Very knowledgeable and trustworthy. Will use again!&quot;
                    <br />
                    <span className="text-sm text-gray-500">- Lisa W., <a href="/seo/owasso-process-server" className="text-blue-600 hover:underline">Owasso</a></span>
                  </blockquote>
                </CarouselItem>
                <CarouselItem>
                  <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800">
                    &quot;Best process server in <a href="/service-areas/bixby" className="text-blue-600 hover:underline">Bixby</a>! Fast and affordable.&quot;
                    <br />
                    <span className="text-sm text-gray-500">- John S., <a href="/service-areas/bixby" className="text-blue-600 hover:underline">Bixby</a></span>
                  </blockquote>
                </CarouselItem>
                <CarouselItem>
                  <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800">
                    &quot;Handled my legal documents in <a href="/service-areas/jenks" className="text-blue-600 hover:underline">Jenks</a> with care and speed.&quot;
                    <br />
                    <span className="text-sm text-gray-500">- Emily R., <a href="/service-areas/jenks" className="text-blue-600 hover:underline">Jenks</a></span>
                  </blockquote>
                </CarouselItem>
                <CarouselItem>
                  <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800">
                    &quot;Sand Springs process serving was quick and professional.&quot;
                    <br />
                    <span className="text-sm text-gray-500">- Mike P., <a href="/seo/sand-springs-process-server" className="text-blue-600 hover:underline">Sand Springs</a></span>
                  </blockquote>
                </CarouselItem>
                <CarouselItem>
                  <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800">
                    &quot;Sapulpa service was excellent. Highly recommend.&quot;
                    <br />
                    <span className="text-sm text-gray-500">- Rachel F., <a href="/service-areas/sapulpa" className="text-blue-600 hover:underline">Sapulpa</a></span>
                  </blockquote>
                </CarouselItem>
                <CarouselItem>
                  <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800">
                    &quot;Needed statewide service—Just Legal Solutions handled everything across Oklahoma.&quot;
                    <br />
                    <span className="text-sm text-gray-500">- Statewide Client, <a href="/ultimate-guide-process-serving-oklahoma" className="text-blue-600 hover:underline">Oklahoma</a></span>
                  </blockquote>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="mb-4 flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
            <a href="/services" className="inline-block bg-blue-700 text-white px-6 py-2 rounded shadow hover:bg-blue-800 font-semibold">Request Service</a>
            <a href="/urgent-process-server" className="inline-block bg-red-600 text-white px-6 py-2 rounded shadow hover:bg-red-700 font-semibold">Urgent Service</a>
            <a href="/weekend-emergency" className="inline-block bg-yellow-500 text-white px-6 py-2 rounded shadow hover:bg-yellow-600 font-semibold">Weekend Service</a>
            <a href="/contact-details.vcf" download className="inline-block bg-gray-700 text-white px-6 py-2 rounded shadow hover:bg-gray-800 font-semibold">Download vCard</a>
          </div>
          {/* Unique Selling Points Section */}
          <section className="max-w-3xl mx-auto bg-blue-50 rounded-lg shadow-md p-6 mb-8 border border-blue-100">
            <h2 className="text-xl font-bold mb-3 text-blue-900">Why Choose Just Legal Solutions?</h2>
            <ul className="list-disc ml-6 text-gray-800 space-y-2">
              <li>Licensed, bonded, and court-certified process servers</li>
              <li>Statewide Oklahoma coverage with local expertise</li>
              <li>Same-day, urgent, and weekend service available</li>
              <li>Transparent pricing and secure payment options</li>
              <li>Hundreds of 5-star reviews and proven results</li>
              <li>Trusted by law firms, businesses, and individuals</li>
            </ul>
          </section>
          {/* Accessibility Statement */}
          <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md p-4 mb-8 border border-gray-200">
            <p className="text-xs text-gray-600">We are committed to accessibility. If you have trouble using this site or need assistance, please <a href="mailto:info@justlegalsolutions.org" className="text-blue-600 hover:underline">contact us</a> and we will help promptly.</p>
          </section>
          <div className="mb-4">
            <div className="rounded overflow-hidden shadow border border-gray-200">
              <iframe
                title="Just Legal Solutions Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.3439679184658!2d-96.00426502419964!3d35.96301517249761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d3a1c9aca7b5281%3A0x313651fd581f35bf!2sJust%20Legal%20Solutions!5e0!3m2!1sen!2sus!4v1754926145291!5m2!1sen!2sus"
                width="100%"
                height="300"
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
              {' '}<a href="/tulsa-process-server" className="text-blue-600 hover:underline">Tulsa</a>,
              {' '}<a href="/service-areas/broken-arrow" className="text-blue-600 hover:underline">Broken Arrow</a>,
              {' '}<a href="/service-areas/bixby" className="text-blue-600 hover:underline">Bixby</a>,
              {' '}<a href="/service-areas/jenks" className="text-blue-600 hover:underline">Jenks</a>,
              {' '}<a href="/seo/owasso-process-server" className="text-blue-600 hover:underline">Owasso</a>,
              {' '}<a href="/seo/sand-springs-process-server" className="text-blue-600 hover:underline">Sand Springs</a>,
              {' '}<a href="/service-areas/sapulpa" className="text-blue-600 hover:underline">Sapulpa</a>,
              and <a href="/ultimate-guide-process-serving-oklahoma" className="text-blue-600 hover:underline">all of Oklahoma</a>.
            </span>
          </div>
        </section>
        {/* FAQ Section for SEO and user trust */}
        <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Frequently Asked Questions</h2>
          <div className="mb-4">
            <h3 className="font-semibold text-blue-800">How quickly will I get a response?</h3>
            <p className="text-gray-700">We respond to most inquiries within 1 business hour during normal operating times. For urgent matters, please call for fastest service.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-blue-800">What areas do you serve?</h3>
            <p className="text-gray-700">We serve all of Tulsa County and surrounding areas, including Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, and more. See our <a href="/service-areas" className="text-blue-600 hover:underline">full service area list</a>.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-blue-800">Are you licensed and bonded?</h3>
            <p className="text-gray-700">Yes, we are fully licensed, bonded, and court-certified for process serving in Oklahoma.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
