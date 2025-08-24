import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, Award, DollarSign, Users, Building2, Shield, CheckCircle, Star, Calendar, FileText, Scale, AlertCircle } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Broken Arrow Process Server | Legal Document Service 2025 | Just Legal Solutions',
  description: 'Professional Broken Arrow process server delivering legal documents, subpoenas, and court papers throughout Rose District, Forest Ridge, and all Broken Arrow neighborhoods. Licensed in both Tulsa & Wagoner Counties with same-day emergency service available.',
  keywords: 'process server broken arrow, broken arrow process server, legal document service broken arrow, serve papers broken arrow, court documents broken arrow, subpoena service broken arrow, eviction notice broken arrow, emergency process server broken arrow, 24/7 process server oklahoma, licensed process server tulsa county, wagoner county process server, professional process server broken arrow 2025',
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
  openGraph: {
    title: 'Broken Arrow Process Server | Expert Legal Document Delivery 2025',
    description: 'Trusted Broken Arrow process server with years of local experience. Professional legal document service throughout Rose District, Forest Ridge, and all Broken Arrow communities with dual-county licensing.',
    url: 'https://justlegalsolutions.org/service-areas/broken-arrow',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Professional Process Server Broken Arrow Oklahoma',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Broken Arrow Process Server | Same-Day Court Document Service',
    description: 'Licensed Broken Arrow process server providing expert legal document delivery throughout Tulsa & Wagoner Counties. Emergency and same-day service available.',
    images: ['https://justlegalsolutions.org/og-image.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/broken-arrow',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
  { name: 'Broken Arrow', url: '/service-areas/broken-arrow' },
];

// Comprehensive FAQ combining unique content from all three pages
const brokenArrowFAQs = [
  {
    question: "How much does a process server cost in Broken Arrow?",
    answer: "Our professional process serving offers competitive rates with transparent pricing. We provide detailed quotes based on your specific needs. Contact us at (539) 367-6832 for current rates and service options, or visit our pricing page for complete information."
  },
  {
    question: "How long does it take to serve papers in Broken Arrow?",
    answer: "Standard service in Broken Arrow typically takes 2-4 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent situations."
  },
  {
    question: "How do you handle service in large, gated communities in Broken Arrow?",
    answer: "Our process servers are experienced with the protocols of gated communities like Forest Ridge. We use professional and legal methods to gain access and effectuate service in a discreet and timely manner."
  },
  {
    question: "The person I need to serve lives in the Wagoner County part of Broken Arrow. Is that a problem?",
    answer: "Not at all. We are fully licensed to serve in both Tulsa and Wagoner counties. We handle cross-county serves for Broken Arrow residents regularly and ensure the Affidavit of Service is filed with the correct court."
  },
  {
    question: "What is your turnaround time for standard service in Broken Arrow?",
    answer: "Standard service in Broken Arrow is typically attempted within 24-48 hours and completed within 3-5 business days. We also offer same-day and emergency rush services for urgent matters."
  },
  {
    question: "Can you serve papers to someone at their job in Broken Arrow?",
    answer: "Yes, we can serve documents at a place of employment, provided it is permitted by the location and can be done professionally. We have experience serving individuals in the commercial and industrial areas of Broken Arrow."
  },
  {
    question: "Where are court documents filed for Broken Arrow?",
    answer: "Court documents for Broken Arrow are filed at the Tulsa County courthouse. We handle all filing requirements and provide detailed courthouse information with our service."
  },
  {
    question: "Can you serve papers on weekends in Broken Arrow?",
    answer: "Yes, we offer weekend and evening service in Broken Arrow for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays."
  },
  {
    question: "What areas of Broken Arrow do you serve?",
    answer: "We serve all areas of Broken Arrow including downtown, Rose District, Arrow Springs, Forest Ridge, Aspen Creek, New Orleans Park, and all surrounding neighborhoods. Our coverage extends throughout both Tulsa and Wagoner Counties."
  },
  {
    question: "Are you licensed to serve process in Broken Arrow?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with both Tulsa and Wagoner Counties. We maintain all required bonds and certifications for professional service throughout Oklahoma."
  },
  {
    question: "What types of legal documents do you serve in Broken Arrow?",
    answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, and all other court-ordered service of process. For specialized eviction services, visit our <Link href='/seo/eviction-notice-process-server' className='text-blue-600 hover:text-blue-800 underline'>eviction notice process server page</Link>."
  },
  {
    question: "Do you provide skip tracing services in Broken Arrow?",
    answer: "Yes, we offer professional skip tracing services in Broken Arrow. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient."
  },
  {
    question: "Where can I learn more about Oklahoma process serving laws and procedures?",
    answer: "For comprehensive information about process serving requirements, legal tips, and best practices across Oklahoma, visit our <Link href='/resources' className='text-blue-600 hover:text-blue-800 underline'>legal resources page</Link>. We also have detailed guides covering everything from court procedures to document requirements."
  }
];

export default function BrokenArrowProcessServer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="location"
          url="https://justlegalsolutions.org/service-areas/broken-arrow"
          title="Broken Arrow Process Server | Legal Document Service 2025"
          description="Professional Broken Arrow process server delivering legal documents, subpoenas, and court papers throughout Rose District, Forest Ridge, and all Broken Arrow neighborhoods."
          breadcrumbs={breadcrumbItems}
        />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-16 lg:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Licensed in Tulsa & Wagoner Counties
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Broken Arrow Process Server
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Professional legal document delivery throughout Rose District, Forest Ridge, and all Broken Arrow neighborhoods. Licensed in both Tulsa & Wagoner Counties with same-day emergency service available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="tel:5393676832" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (539) 367-6832
                </Link>
                <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                  Get Free Quote
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Same-Day Service Available
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Licensed & Bonded
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Dual County Coverage
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  24/7 Emergency Service
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Expertise Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Local Expertise in Broken Arrow</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Community Connection</h3>
                    <p className="text-gray-700 mb-4">
                      Just Legal Solutions has been serving Broken Arrow since 2025, building on extensive legal experience since 2020. We partner with local attorneys, participate in Chamber of Commerce events, and support Broken Arrow&apos;s legal and civic community.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our team understands the unique needs of Broken Arrow&apos;s diverse neighborhoods and business districts, from the historic Rose District downtown to the modern developments in Forest Ridge and Arrow Springs.
                    </p>
                    <p className="text-gray-700">
                      As Oklahoma&apos;s fourth-largest city spanning both Tulsa and Wagoner counties, Broken Arrow requires specialized knowledge of dual-county jurisdictions - expertise we bring to every service.
                    </p>
                  </div>
                  <div className="text-center">
                    <Image 
                      src="/images/broken-arrow-rose-district.webp" 
                      alt="Broken Arrow Rose District - Professional Process Server Service Area" 
                      width={400} 
                      height={300} 
                      className="rounded-lg shadow-md mx-auto"
                      priority
                    />
                    <p className="text-xs text-gray-500 text-center mt-2">Rose District, Broken Arrow - Our primary service area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Choose Us as Your Broken Arrow Process Server?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Years of Local Experience</h3>
                      <p className="text-gray-600">Over 5 years serving Broken Arrow with deep knowledge of local courts, neighborhoods, and legal requirements in both Tulsa and Wagoner counties.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Same-Day & Rush Service Options</h3>
                      <p className="text-gray-600">Emergency and same-day Broken Arrow process server service available when time is critical. We understand urgent legal deadlines.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Fully Licensed for Tulsa & Wagoner Counties</h3>
                      <p className="text-gray-600">Licensed and bonded to serve throughout both counties where Broken Arrow is located. Complete dual-county coverage.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Real Customer Satisfaction</h3>
                      <p className="text-gray-600">Proven track record of successful serves and satisfied clients throughout Broken Arrow, with 5-star reviews from local attorneys and residents.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive Area Knowledge</h3>
                      <p className="text-gray-600">Expert knowledge of all Broken Arrow neighborhoods, from Rose District and Forest Ridge to Arrow Springs and Aspen Creek developments.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Documentation</h3>
                      <p className="text-gray-600">Complete affidavits of service with detailed notes, photos when appropriate, and GPS tracking for court-admissible proof of service.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Professional Process Serving in Broken Arrow</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Our Services Include:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Divorce papers & family court documents</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Civil lawsuits & small claims</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Eviction notices & landlord-tenant documents</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Subpoenas & court summons</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Child custody & support papers</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Restraining orders & protective orders</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Business litigation documents</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Skip tracing services</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Why Choose Us:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Licensed in both Tulsa & Wagoner Counties</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Same-day & emergency service available</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Experienced with gated communities</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> GPS tracking & detailed reporting</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Professional & discreet service</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Competitive transparent pricing</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> 24/7 availability for urgent matters</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Court-admissible affidavits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">What Broken Arrow Clients Say</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div itemScope itemType="https://schema.org/Review">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        <span>★★★★★</span>
                      </div>
                      <meta itemProp="ratingValue" content="5" />
                    </div>
                    <p className="text-gray-700 mb-4 italic" itemProp="reviewBody">
                      &ldquo;Needed urgent process serving in Broken Arrow for a court deadline. Just Legal Solutions delivered same-day service and saved my case. Their Broken Arrow process server knew exactly how to handle the gated community service.&rdquo;
                    </p>
                    <div className="text-sm text-gray-600">
                      <span itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">Sarah M.</span>
                      </span> - Broken Arrow Attorney
                    </div>
                  </div>
                </div>

                <div itemScope itemType="https://schema.org/Review">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        <span>★★★★★</span>
                      </div>
                      <meta itemProp="ratingValue" content="5" />
                    </div>
                    <p className="text-gray-700 mb-4 italic" itemProp="reviewBody">
                      &ldquo;As a Broken Arrow resident, I was impressed by their local knowledge and professionalism. The process server understood our area and completed service efficiently and discreetly.&rdquo;
                    </p>
                    <div className="text-sm text-gray-600">
                      <span itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">Michael R.</span>
                      </span> - Broken Arrow Resident
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Linking Opportunities */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Serving All of Broken Arrow and Beyond</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Eviction Services</h3>
                  <p className="text-gray-600 mb-4">Specialized eviction notice service for Broken Arrow landlords and property managers.</p>
                  <Link href="/seo/eviction-notice-process-server" className="text-blue-600 hover:text-blue-800 underline">
                    Learn About Eviction Services →
                  </Link>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Legal Resources</h3>
                  <p className="text-gray-600 mb-4">Comprehensive guides on Oklahoma process serving laws and procedures.</p>
                  <Link href="/resources" className="text-blue-600 hover:text-blue-800 underline">
                    View Legal Resources →
                  </Link>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Tulsa County Service</h3>
                  <p className="text-gray-600 mb-4">Complete process serving throughout all of Tulsa County and surrounding areas.</p>
                  <Link href="/counties/tulsa-county" className="text-blue-600 hover:text-blue-800 underline">
                    View County Coverage →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {brokenArrowFAQs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg" itemScope itemType="https://schema.org/Question">
                    <h3 className="font-semibold text-lg mb-3 text-gray-800" itemProp="name">{faq.question}</h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="text-gray-700" itemProp="text" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Service CTA */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Need Emergency Process Service?</h2>
              <p className="text-xl mb-8 text-red-100">
                Our 24/7 emergency service ensures your urgent documents are served promptly, even on weekends and holidays in Broken Arrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="tel:5393676832" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Emergency Line: (539) 367-6832
                </Link>
                <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Map */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Broken Arrow Service Area Map</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <GoogleMapsEmbed
                  countyName="Tulsa County"
                  cityName="Broken Arrow"
                  state="Oklahoma"
                  title="Broken Arrow Process Server Service Area Map"
                />
                <p className="text-center text-gray-600 mt-4">
                  We serve all of Broken Arrow including Rose District, Forest Ridge, Arrow Springs, Aspen Creek, New Orleans Park, and surrounding neighborhoods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact Broken Arrow&apos;s trusted process server for fast, professional legal document delivery.
              </p>
              <h3 className="text-xl font-bold text-blue-100 mb-2">Need a licensed Broken Arrow process server?</h3>
              <p className="text-blue-100 mb-8">Call today for same-day service and competitive rates throughout Tulsa & Wagoner Counties.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="tel:5393676832" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (539) 367-6832
                </Link>
                <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                  Get Free Quote
                </Link>
                <Link href="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
