import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Script from 'next/script';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import GoogleSpecificOptimization from '@/components/ui/google-specific-optimization';
import BingYahooOptimization from '@/components/ui/bing-yahoo-optimization';
import DuckDuckGoOptimization from '@/components/ui/duckduckgo-optimization';
import SearchEngineUniversalOptimization from '@/components/ui/search-engine-universal-optimization';
import EnhancedBreadcrumbSchema from '@/components/ui/enhanced-breadcrumb-schema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export const metadata = {
  title: 'Contact Just Legal Solutions - Process Server & Business Services in Oklahoma',
  description: 'Contact Just Legal Solutions for professional process serving, courier services, and business solutions in Tulsa County, Oklahoma. Call (539) 367-6832 or email for immediate assistance.',
  keywords: ['contact process server', 'just legal solutions contact', 'process server tulsa contact', 'legal services oklahoma contact', 'business services contact', 'process serving contact'],
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  category: 'Contact Information',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: 'https://justlegalsolutions.org/contact'
  },
  openGraph: {
    title: 'Contact Just Legal Solutions - Process Server & Business Services in Oklahoma',
    description: 'Contact Just Legal Solutions for professional process serving, courier services, and business solutions in Tulsa County, Oklahoma. Call (539) 367-6832 or email for immediate assistance.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/contact',
    siteName: 'Just Legal Solutions',
    images: [{
      url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIHZpZXdCb3g9IjAgMCAxMjAwIDYzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjMwIiBmaWxsPSIjMEIxMzJCIi8+Cjx0ZXh0IHg9IjYwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkp1c3QgTGVnYWwgU29sdXRpb25zPC90ZXh0Pgo8dGV4dCB4PSI2MDAiIHk9IjM2MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjQ0JENUU4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UHJvY2VzcyBTZXJ2aW5nICZhbXA7IEJ1c2luZXNzIFNlcnZpY2VzPC90ZXh0Pgo8L3N2Zz4K',
      width: 1200,
      height: 630,
      alt: 'Contact Just Legal Solutions - Process Server & Business Services in Oklahoma',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Just Legal Solutions - Process Server & Business Services in Oklahoma',
    description: 'Contact Just Legal Solutions for professional process serving, courier services, and business solutions in Tulsa County, Oklahoma. Call (539) 367-6832 or email for immediate assistance.',
    images: ['data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIHZpZXdCb3g9IjAgMCAxMjAwIDYzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjMwIiBmaWxsPSIjMEIxMzJCIi8+Cjx0ZXh0IHg9IjYwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkp1c3QgTGVnYWwgU29sdXRpb25zPC90ZXh0Pgo8dGV4dCB4PSI2MDAiIHk9IjM2MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjQ0JENUU4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UHJvY2VzcyBTZXJ2aW5nICZhbXA7IEJ1c2luZXNzIFNlcnZpY2VzPC90ZXh0Pgo8L3N2Zz4K'],
  }
};

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
                "streetAddress": "123 Main Street",
        <main className="min-h-screen bg-gray-50 pt-24 pb-12">
          <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
            <h1 className="text-3xl font-bold mb-2 text-blue-900">Contact Just Legal Solutions</h1>
            <p className="mb-4 text-gray-700">Reach out for professional process serving, courier, and business services in Tulsa County and across Oklahoma. Fast, reliable, and confidential.</p>
            <div className="flex flex-wrap gap-3 mb-4">
              <img src="/badges/5-star-google-rating-badge.png" alt="5-Star Google Rating" className="h-10" />
              <img src="/badges/licensed-bonded-badge.png" alt="Licensed & Bonded" className="h-10" />
              <img src="/badges/court-certified-professional-badge.png" alt="Court Certified Professional" className="h-10" />
              <img src="/badges/oklahoma-statewide-coverage-badge.png" alt="Oklahoma Statewide Coverage" className="h-10" />
              <img src="/badges/secure-payment-processing-badge.png" alt="Secure Payment Processing" className="h-10" />
            </div>
            <div className="mb-4">
              <a href="tel:5393676832" className="text-lg font-semibold text-blue-700 hover:underline">Call: (539) 367-6832</a><br />
              <a href="mailto:info@justlegalsolutions.org" className="text-blue-700 hover:underline">info@justlegalsolutions.org</a>
            </div>
            <div className="mb-4">
              <a href="/services" className="text-blue-600 hover:underline mr-4">Our Services</a>
              <a href="/pricing" className="text-blue-600 hover:underline mr-4">Pricing</a>
              <a href="/faq" className="text-blue-600 hover:underline mr-4">FAQ</a>
              <a href="/about" className="text-blue-600 hover:underline mr-4">About Us</a>
              <a href="/resources" className="text-blue-600 hover:underline mr-4">Resources</a>
              <a href="/service-areas" className="text-blue-600 hover:underline">Service Areas</a>
            </div>
            <div className="mb-4">
              <img src="/images/process-server-client-testimonials-reviews.png" alt="Client Reviews" className="rounded-lg shadow h-32 w-auto mx-auto" />
            </div>
            <div className="mb-4">
              <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800 mb-2">
                      "Fast, professional, and reliable! Just Legal Solutions made the process easy and stress-free."
                      <br />
                      <span className="text-sm text-gray-500">- Sarah T., <a href="/seo/tulsa-process-server-comprehensive" className="text-blue-600 hover:underline">Tulsa</a></span>
                    </blockquote>
                  </CarouselItem>
                  <CarouselItem>
                    <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800 mb-2">
                      "Highly recommend for anyone needing process serving in Oklahoma. Great communication and results."
                      <br />
                      <span className="text-sm text-gray-500">- Mark D., <a href="/seo/broken-arrow-process-server" className="text-blue-600 hover:underline">Broken Arrow</a></span>
                    </blockquote>
                  </CarouselItem>
                  <CarouselItem>
                    <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800">
                      "Very knowledgeable and trustworthy. Will use again!"
                      <br />
                      <span className="text-sm text-gray-500">- Lisa W., <a href="/seo/owasso-process-server" className="text-blue-600 hover:underline">Owasso</a></span>
                    </blockquote>
                  </CarouselItem>
                  <CarouselItem>
                    <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800">
                      "Best process server in <a href=\"/seo/bixby-process-server\" className=\"text-blue-600 hover:underline\">Bixby</a>! Fast and affordable."
                      <br />
                      <span className="text-sm text-gray-500">- John S., <a href="/seo/bixby-process-server" className="text-blue-600 hover:underline">Bixby</a></span>
                    </blockquote>
                  </CarouselItem>
                  <CarouselItem>
                    <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800">
                      "Handled my legal documents in <a href=\"/seo/jenks-process-server\" className=\"text-blue-600 hover:underline\">Jenks</a> with care and speed."
                      <br />
                      <span className="text-sm text-gray-500">- Emily R., <a href="/seo/jenks-process-server" className="text-blue-600 hover:underline">Jenks</a></span>
                    </blockquote>
                  </CarouselItem>
                  <CarouselItem>
                    <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800">
                      "Sand Springs process serving was quick and professional."
                      <br />
                      <span className="text-sm text-gray-500">- Mike P., <a href="/seo/sand-springs-process-server" className="text-blue-600 hover:underline">Sand Springs</a></span>
                    </blockquote>
                  </CarouselItem>
                  <CarouselItem>
                    <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800">
                      "Sapulpa service was excellent. Highly recommend."
                      <br />
                      <span className="text-sm text-gray-500">- Rachel F., <a href="/service-areas/sapulpa" className="text-blue-600 hover:underline">Sapulpa</a></span>
                    </blockquote>
                  </CarouselItem>
                  <CarouselItem>
                    <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-800">
                      "Needed statewide service—Just Legal Solutions handled everything across Oklahoma."
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
              <a href="/reviews" className="inline-block bg-green-700 text-white px-6 py-2 rounded shadow hover:bg-green-800 font-semibold">See More Reviews</a>
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
              {/* Google Maps Embed: Replace the src below with your actual embed code if available */}
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
                {' '}<a href="/seo/tulsa-process-server-comprehensive" className="text-blue-600 hover:underline">Tulsa</a>,
                {' '}<a href="/seo/broken-arrow-process-server" className="text-blue-600 hover:underline">Broken Arrow</a>,
                {' '}<a href="/seo/bixby-process-server" className="text-blue-600 hover:underline">Bixby</a>,
                {' '}<a href="/seo/jenks-process-server" className="text-blue-600 hover:underline">Jenks</a>,
                {' '}<a href="/seo/owasso-process-server" className="text-blue-600 hover:underline">Owasso</a>,
                {' '}<a href="/seo/sand-springs-process-server" className="text-blue-600 hover:underline">Sand Springs</a>,
                {' '}<a href="/service-areas/sapulpa" className="text-blue-600 hover:underline">Sapulpa</a>,
                and <a href="/ultimate-guide-process-serving-oklahoma" className="text-blue-600 hover:underline">all of Oklahoma</a>.
              </span>
            </div>
          </section>
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
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Just Legal Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to get started? Contact us for professional process serving, courier services, 
              and business solutions throughout Tulsa County, Oklahoma.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div>
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    Get In Touch
                  </CardTitle>
                  <CardDescription>
                    Multiple ways to reach our team for immediate assistance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a 
                        href="tel:+15393676832" 
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        (539) 367-6832
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Call for immediate assistance and quotes
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a 
                        href="mailto:info@justlegalsolutions.org" 
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        info@justlegalsolutions.org
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Send us detailed requests and documents
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Service Area</h3>
                      <p className="text-gray-700">
                        Tulsa County, Oklahoma<br />
                        Tulsa, Broken Arrow, Sapulpa<br />
                        Bixby, Owasso, Glenpool
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Statewide Oklahoma coverage available
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <div className="text-gray-700">
                        <p className="font-semibold">Available 24/7</p>
                        <p>We&apos;re here when you need us</p>
                        <p>Same-day service available</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Professional service available anytime, day or night
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-red-600">Emergency Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">
                    Need same-day or emergency process serving?
                  </p>
                  <a 
                    href="tel:+15393676832" 
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now: (539) 367-6832
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Process Serving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional legal document delivery throughout Oklahoma with certified, bonded process servers.
                </p>
                <Link 
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Pricing & Service Options
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Business Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Executive support, event coordination, HR services, and administrative solutions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Executive Assistant Services</li>
                  <li>• Event Planning & Coordination</li>
                  <li>• HR & Payroll Support</li>
                  <li>• Travel Management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Courier Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Secure document delivery and courier services for businesses and legal professionals.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Same-Day Delivery Available</li>
                  <li>• Secure Document Handling</li>
                  <li>• Statewide Oklahoma Coverage</li>
                  <li>• Professional Service</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
