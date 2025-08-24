import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, Award, DollarSign, Users, Building2, Shield, CheckCircle, Star, Calendar, FileText, Scale, AlertCircle } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';
import FAQAccordion from '@/components/ui/faq-accordion';
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
    answer: "Our professional process serving offers competitive rates with transparent pricing. Standard service typically ranges from $50-75, with rush and emergency service available at premium rates. Contact us at (539) 367-6832 for current rates and service options, or visit our <Link href='/pricing' className='text-blue-600 hover:text-blue-800 underline'>pricing page</Link> for complete information."
  },
  {
    question: "How long does it take to serve papers in Broken Arrow?",
    answer: "Standard service in Broken Arrow typically takes 2-4 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent situations. Service times may vary based on the complexity of the case and availability of the individual being served."
  },
  {
    question: "How do you handle service in large, gated communities in Broken Arrow?",
    answer: "Our process servers are experienced with the protocols of gated communities like Forest Ridge Estates and Arrow Springs. We use professional and legal methods to gain access and effectuate service in a discreet and timely manner, working with gate security when necessary."
  },
  {
    question: "The person I need to serve lives in the Wagoner County part of Broken Arrow. Is that a problem?",
    answer: "Not at all. We are fully licensed to serve in both Tulsa and Wagoner counties. We handle cross-county serves for Broken Arrow residents regularly and ensure the Affidavit of Service is filed with the correct court jurisdiction."
  },
  {
    question: "What is your turnaround time for standard service in Broken Arrow?",
    answer: "Standard service in Broken Arrow is typically attempted within 24-48 hours and completed within 3-5 business days. We also offer same-day and emergency rush services for urgent matters with court deadlines."
  },
  {
    question: "Can you serve papers to someone at their job in Broken Arrow?",
    answer: "Yes, we can serve documents at a place of employment, provided it is permitted by the location and can be done professionally. We have experience serving individuals in the commercial and industrial areas of Broken Arrow, including the Rose District and business parks."
  },
  {
    question: "Where are court documents filed for Broken Arrow?",
    answer: "Court documents for Broken Arrow are filed at the Tulsa County courthouse for most cases. Some municipal matters may be filed at the Broken Arrow Municipal Court. We handle all filing requirements and provide detailed courthouse information with our service."
  },
  {
    question: "Can you serve papers on weekends in Broken Arrow?",
    answer: "Yes, we offer weekend and evening service in Broken Arrow for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays. Weekend service may incur additional fees."
  },
  {
    question: "What areas of Broken Arrow do you serve?",
    answer: "We serve all areas of Broken Arrow including downtown Rose District, Forest Ridge Estates, Arrow Springs, Aspen Creek, New Orleans Park, Indian Springs, and all surrounding neighborhoods. Our coverage extends throughout both Tulsa and Wagoner Counties."
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
    answer: "Yes, we offer professional skip tracing services in Broken Arrow. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient. This service is particularly useful for older cases or when people have moved."
  },
  {
    question: "What happens if the person cannot be found at the address provided?",
    answer: "If the individual cannot be located at the provided address, we will attempt service multiple times at different times of day. We also offer skip tracing services to locate current addresses and can discuss alternative service methods with you and your attorney."
  },
  {
    question: "How do you handle aggressive or evasive individuals in Broken Arrow?",
    answer: "Our experienced process servers are trained to handle difficult situations professionally and safely. We follow all legal protocols and can work with local law enforcement when necessary. We also document all service attempts thoroughly for court proceedings."
  },
  {
    question: "Can you serve divorce papers to my spouse in Broken Arrow?",
    answer: "Yes, we regularly serve divorce papers and family law documents in Broken Arrow. We handle these sensitive situations with discretion and professionalism, ensuring proper service while maintaining dignity for all parties involved."
  },
  {
    question: "Do you provide same-day service for emergency situations?",
    answer: "Yes, we offer same-day emergency service throughout Broken Arrow. This service is available for urgent court deadlines, restraining orders, and other time-sensitive legal matters. Contact us immediately at (539) 367-6832 for emergency service."
  },
  {
    question: "What proof of service do you provide?",
    answer: "We provide a complete Affidavit of Service that includes detailed information about the service attempt, time, date, location, description of the person served, and any relevant circumstances. We also include GPS tracking data and digital photos when appropriate."
  },
  {
    question: "How do you ensure the documents reach the right person?",
    answer: "We verify the identity of the person being served through multiple methods including photo identification when possible, physical description confirmation, and verification of personal details. We follow all Oklahoma legal requirements for proper service."
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Broken Arrow Process Server
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Professional legal document delivery throughout Rose District, Forest Ridge, and all Broken Arrow neighborhoods. Same-day emergency service available.
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
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Professional Excellence</h3>
                    <p className="text-gray-700 mb-4">
                      Just Legal Solutions brings extensive legal experience to Broken Arrow process serving. Our founder&apos;s background in legal services since 2020 provides the expertise needed for professional document delivery throughout the area.
                    </p>
                    <p className="text-gray-700 mb-4">
                      We understand the unique characteristics of Broken Arrow&apos;s diverse neighborhoods and business districts, from the historic Rose District downtown to the modern developments in Forest Ridge and Arrow Springs.
                    </p>
                    <p className="text-gray-700">
                      As Oklahoma&apos;s fourth-largest city spanning both Tulsa and Wagoner counties, Broken Arrow requires specialized knowledge of dual-county jurisdictions - expertise we bring to every service.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <Image 
                        src="/images/Broken-Arrow-Municipal-Court.jpeg" 
                        alt="Broken Arrow Municipal Court - Legal Document Filing" 
                        width={300} 
                        height={200} 
                        className="rounded-lg shadow-md w-full h-32 object-cover"
                      />
                      <p className="text-xs text-gray-500 mt-2">Broken Arrow Municipal Court</p>
                    </div>
                    <div className="text-center">
                      <Image 
                        src="/images/broken-arrow-rose-district.jpg" 
                        alt="Historic Broken Arrow Downtown - Rose District" 
                        width={300} 
                        height={200} 
                        className="rounded-lg shadow-md w-full h-32 object-cover"
                      />
                      <p className="text-xs text-gray-500 mt-2">Historic Rose District</p>
                    </div>
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
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Our Service Guarantees:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Court-admissible affidavits with GPS tracking</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Professional photography documentation</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Detailed service reports and notes</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Multiple attempt scheduling</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Secure online status tracking</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Bilingual service capability</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Weekend and evening availability</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-500" /> Direct attorney communication</li>
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

        {/* Local Areas & Landmarks */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
                Serving All Broken Arrow Areas & Local Landmarks
              </h2>
              
              {/* Historic & Cultural Landmarks */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Historic Landmarks & Cultural Sites</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <MapPin className="w-8 h-8 text-red-600 mb-4" />
                    <h4 className="text-lg font-semibold mb-2 text-red-900">Route 66 Tulsa Admiral Landmark</h4>
                    <p className="text-sm text-gray-600 mb-3">N Mingo Rd, near Broken Arrow</p>
                    <p className="text-gray-700">Rush service available near the iconic Route 66 Tulsa Admiral Landmark. Perfect for urgent court-date filings close to this historic roadside attraction.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                    <h4 className="text-lg font-semibold mb-2 text-blue-900">Tulsa Aviator&apos;s Arrow Monument</h4>
                    <p className="text-sm text-gray-600 mb-3">E Haskell St, Tulsa, OK 74106 (just north of Broken Arrow)</p>
                    <p className="text-gray-700">Our process servers handle service near Tulsa Aviator&apos;s Arrow Monument, blending aviation heritage proximity with professional, discreet full-proof affidavits.</p>
                  </div>
                </div>
              </div>

              {/* Business & Commerce Hubs */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Business & Commerce Hubs</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Building2 className="w-8 h-8 text-green-600 mb-4" />
                    <h4 className="text-lg font-semibold mb-2 text-green-900">Broken Arrow Chamber of Commerce</h4>
                    <p className="text-sm text-gray-600 mb-3">210 N Main St – Suite C, Broken Arrow, OK 74012</p>
                    <p className="text-gray-700">As a trusted partner of the Broken Arrow Chamber of Commerce, we deliver corporate filings, commercial-lease documents, and litigation papers directly in the Chamber district.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Building2 className="w-8 h-8 text-purple-600 mb-4" />
                    <h4 className="text-lg font-semibold mb-2 text-purple-900">Broken Arrow Business Center</h4>
                    <p className="text-sm text-gray-600 mb-3">2136 W Albany St, Broken Arrow, OK 74012</p>
                    <p className="text-gray-700">Serving business-park and office-space rentals at the Broken Arrow Business Center—document filing solutions for local entrepreneurs and startups.</p>
                  </div>
                </div>
              </div>

              {/* Rose District Attractions */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Rose District & Downtown Attractions</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Image 
                      src="/images/broken-arrow-rose-district.jpg" 
                      alt="Historic Broken Arrow Main Street - Rose District Downtown" 
                      width={400} 
                      height={250} 
                      className="rounded-lg shadow-md w-full h-40 object-cover mb-4"
                    />
                    <Star className="w-8 h-8 text-orange-600 mb-4" />
                    <h4 className="text-lg font-semibold mb-2 text-orange-900">Historic Main Street</h4>
                    <p className="text-sm text-gray-600 mb-3">Downtown Rose District</p>
                    <p className="text-gray-700">Professional document delivery throughout the historic downtown district with same-day service for Main Street businesses and law offices.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Image 
                      src="/images/Broken-Arrow-Municipal-Court.jpeg" 
                      alt="Broken Arrow Municipal Court - Legal Document Filing" 
                      width={400} 
                      height={250} 
                      className="rounded-lg shadow-md w-full h-40 object-cover mb-4"
                    />
                    <Building2 className="w-8 h-8 text-indigo-600 mb-4" />
                    <h4 className="text-lg font-semibold mb-2 text-indigo-900">Civic Center & Municipal Court</h4>
                    <p className="text-sm text-gray-600 mb-3">Municipal Government District</p>
                    <p className="text-gray-700">Court document filing and service at Broken Arrow Municipal Court and City Hall. Professional service for municipal legal matters.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <Image 
                      src="https://lh3.googleusercontent.com/p/AF1QipMA0vcY9DJFeFo2vyDQ1mFxhD2QvWHXhjyczPYQ=s1360-w1360-h1020-rw" 
                      alt="Broken Arrow Brewing Company - Rose District" 
                      width={400} 
                      height={250} 
                      className="rounded-lg shadow-md w-full h-40 object-cover mb-4"
                    />
                    <Star className="w-8 h-8 text-red-600 mb-4" />
                    <h4 className="text-lg font-semibold mb-2 text-red-900">Broken Arrow Brewing Company</h4>
                    <p className="text-sm text-gray-600 mb-3">333 W Dallas St, Rose District</p>
                    <p className="text-gray-700">Process server near Broken Arrow Brewing Company. Legal document delivery in the Rose District with same-day service for downtown businesses.</p>
                    <div className="mt-4 text-center">
                      <Link href="https://www.brokenarrowbrewingco.com/" target="_blank" className="text-blue-600 hover:text-blue-800 underline text-sm">
                        Visit Brewery Website →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Educational & Community Services */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Educational & Community Anchors</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Scale className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-blue-900">Broken Arrow Public Schools District Office</h4>
                  <p className="text-sm text-gray-600 mb-3">701 S Main St, Broken Arrow, OK 74012</p>
                  <p className="text-gray-700">We handle school-related filings—child-custody papers, safety-plan petitions, and subpoenas—at the Broken Arrow Public Schools district office.</p>
                </div>
              </div>

              {/* Residential Areas */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Residential & Gated Communities</h3>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                  <MapPin className="w-8 h-8 text-green-600 mb-4 mx-auto" />
                  <p className="text-gray-700 text-center">
                    Just Legal Solutions covers all residential areas, including <strong>Forest Ridge Estates</strong>, <strong>Arrow Springs</strong>, <strong>Aspen Creek</strong>, <strong>New Orleans Park</strong>, and <strong>Indian Springs</strong>. We expertly navigate gated communities like Forest Ridge, ensuring timely service in even the most secure neighborhoods.
                  </p>
                </div>
              </div>

              {/* Legal Facilities */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Nearby Courthouses & Legal Facilities</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Scale className="w-8 h-8 text-orange-600 mb-4 mx-auto" />
                  <p className="text-gray-700 text-center">
                    Court documents filed at the <strong>Tulsa County Courthouse</strong> (just 15 minutes from Broken Arrow) and served at the <strong>Broken Arrow Municipal Court</strong>. We also deliver to local law offices on Main Street and Family Court Services locations.
                  </p>
                </div>
              </div>

              {/* Quick Reference Coverage List */}
              <div className="bg-blue-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-center mb-6">Complete Broken Arrow Coverage</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-200">Historic & Cultural</h4>
                    <ul className="space-y-1 text-blue-100">
                      <li>• Rose District (Historic Downtown)</li>
                      <li>• Broken Arrow Brewing Company (333 W Dallas St)</li>
                      <li>• The Museum Broken Arrow (400 S Main St)</li>
                      <li>• Route 66 Tulsa Admiral Landmark (N Mingo Rd)</li>
                      <li>• Tulsa Aviator&apos;s Arrow (E Haskell St)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-200">Business & Education</h4>
                    <ul className="space-y-1 text-blue-100">
                      <li>• Broken Arrow Chamber of Commerce (210 N Main St C)</li>
                      <li>• Broken Arrow Business Center (2136 W Albany St)</li>
                      <li>• Broken Arrow Public Schools (701 S Main St)</li>
                      <li>• Main Street Law Offices</li>
                      <li>• Family Court Services locations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-200">Residential & Legal</h4>
                    <ul className="space-y-1 text-blue-100">
                      <li>• Forest Ridge Estates, Arrow Springs, Aspen Creek</li>
                      <li>• New Orleans Park, Indian Springs</li>
                      <li>• Tulsa County Courthouse</li>
                      <li>• Broken Arrow Municipal Court</li>
                      <li>• All gated communities & neighborhoods</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Serving Tips */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
                Broken Arrow Process Serving Guide
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Best Times for Service in Broken Arrow</h3>
                      <p className="text-gray-600">Weekday evenings (5-8 PM) and Saturday mornings typically yield the highest success rates for residential service in Broken Arrow neighborhoods.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Service Locations</h3>
                      <p className="text-gray-600">For businesses in the Rose District or Main Street area, we recommend service during normal business hours (9 AM - 5 PM) for optimal results.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Court Filing Requirements</h3>
                      <p className="text-gray-600">All Broken Arrow legal documents are filed at the Tulsa County Courthouse. We handle all filing requirements and provide detailed proof of service.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Address Verification</h3>
                      <p className="text-gray-600">We verify all Broken Arrow addresses before service attempts and offer skip tracing for outdated or incomplete address information.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Emergency Service</h3>
                      <p className="text-gray-600">Our 24/7 emergency service covers all of Broken Arrow including weekends and holidays for urgent legal situations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Digital Documentation</h3>
                      <p className="text-gray-600">All service attempts include GPS tracking, digital photos, and detailed affidavits for court filing requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">Need Legal Resources?</h3>
                  <p className="text-gray-700 mb-4">
                    For comprehensive guides on Oklahoma process serving laws, court procedures, and legal document requirements, visit our legal resources section.
                  </p>
                  <Link href="/resources" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                    View Legal Resources & Guides →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
                Frequently Asked Questions - Broken Arrow Process Server
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Get answers to the most common questions about our professional process serving services in Broken Arrow, Oklahoma.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Service & Timing Questions */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
                    <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Service & Timing
                  </h3>
                  <FAQAccordion faqs={[
                    {
                      question: "How long does it take to serve papers in Broken Arrow?",
                      answer: "Standard service in Broken Arrow typically takes 2-4 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent situations. Service times may vary based on the complexity of the case and availability of the individual being served."
                    },
                    {
                      question: "Do you provide same-day service for emergency situations?",
                      answer: "Yes, we offer same-day emergency service throughout Broken Arrow. This service is available for urgent court deadlines, restraining orders, and other time-sensitive legal matters. Contact us immediately at (539) 367-6832 for emergency service."
                    },
                    {
                      question: "Can you serve papers on weekends in Broken Arrow?",
                      answer: "Yes, we offer weekend and evening service in Broken Arrow for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays. Weekend service may incur additional fees."
                    },
                    {
                      question: "What is your turnaround time for standard service in Broken Arrow?",
                      answer: "Standard service in Broken Arrow is typically attempted within 24-48 hours and completed within 3-5 business days. We also offer same-day and emergency rush services for urgent matters with court deadlines."
                    }
                  ]} />
                </div>

                {/* Legal & Documentation Questions */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center">
                    <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                    </svg>
                    Legal & Documentation
                  </h3>
                  <FAQAccordion faqs={[
                    {
                      question: "Are you licensed to serve process in Broken Arrow?",
                      answer: "Yes, we are fully licensed, bonded, and insured process servers registered with both Tulsa and Wagoner Counties. We maintain all required bonds and certifications for professional service throughout Oklahoma."
                    },
                    {
                      question: "What types of legal documents do you serve in Broken Arrow?",
                      answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, and all other court-ordered service of process. For specialized eviction services, visit our <a href='/seo/eviction-notice-process-server' className='text-blue-600 hover:text-blue-800 underline'>eviction notice process server page</a>."
                    },
                    {
                      question: "What proof of service do you provide?",
                      answer: "We provide a complete Affidavit of Service that includes detailed information about the service attempt, time, date, location, description of the person served, and any relevant circumstances. We also include GPS tracking data and digital photos when appropriate."
                    },
                    {
                      question: "Where are court documents filed for Broken Arrow?",
                      answer: "Court documents for Broken Arrow are filed at the Tulsa County courthouse for most cases. Some municipal matters may be filed at the Broken Arrow Municipal Court. We handle all filing requirements and provide detailed courthouse information with our service."
                    }
                  ]} />
                </div>

                {/* Service Areas & Coverage */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-purple-700 flex items-center">
                    <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Service Areas & Coverage
                  </h3>
                  <FAQAccordion faqs={[
                    {
                      question: "What areas of Broken Arrow do you serve?",
                      answer: "We serve all areas of Broken Arrow including downtown Rose District, Forest Ridge Estates, Arrow Springs, Aspen Creek, New Orleans Park, Indian Springs, and all surrounding neighborhoods. Our coverage extends throughout both Tulsa and Wagoner Counties."
                    },
                    {
                      question: "How do you handle service in large, gated communities in Broken Arrow?",
                      answer: "Our process servers are experienced with the protocols of gated communities like Forest Ridge Estates and Arrow Springs. We use professional and legal methods to gain access and effectuate service in a discreet and timely manner, working with gate security when necessary."
                    },
                    {
                      question: "The person I need to serve lives in the Wagoner County part of Broken Arrow. Is that a problem?",
                      answer: "Not at all. We are fully licensed to serve in both Tulsa and Wagoner counties. We handle cross-county serves for Broken Arrow residents regularly and ensure the Affidavit of Service is filed with the correct court jurisdiction."
                    },
                    {
                      question: "Can you serve papers to someone at their job in Broken Arrow?",
                      answer: "Yes, we can serve documents at a place of employment, provided it is permitted by the location and can be done professionally. We have experience serving individuals in the commercial and industrial areas of Broken Arrow, including the Rose District and business parks."
                    }
                  ]} />
                </div>

                {/* Pricing & Service Quality */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-orange-700 flex items-center">
                    <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                    Pricing & Service Quality
                  </h3>
                  <FAQAccordion faqs={[
                    {
                      question: "How much does a process server cost in Broken Arrow?",
                      answer: "Our professional process serving offers competitive rates with transparent pricing. Standard service typically ranges from $50-75, with rush and emergency service available at premium rates. Contact us at (539) 367-6832 for current rates and service options, or visit our <a href='/pricing' className='text-blue-600 hover:text-blue-800 underline'>pricing page</a> for complete information."
                    },
                    {
                      question: "How do you handle aggressive or evasive individuals in Broken Arrow?",
                      answer: "Our experienced process servers are trained to handle difficult situations professionally and safely. We follow all legal protocols and can work with local law enforcement when necessary. We also document all service attempts thoroughly for court proceedings."
                    },
                    {
                      question: "How do you ensure the documents reach the right person?",
                      answer: "We verify the identity of the person being served through multiple methods including photo identification when possible, physical description confirmation, and verification of personal details. We follow all Oklahoma legal requirements for proper service."
                    },
                    {
                      question: "Can you serve divorce papers to my spouse in Broken Arrow?",
                      answer: "Yes, we regularly serve divorce papers and family law documents in Broken Arrow. We handle these sensitive situations with discretion and professionalism, ensuring proper service while maintaining dignity for all parties involved."
                    }
                  ]} />
                </div>
              </div>

              {/* Additional Services */}
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4 text-blue-800 text-center">Additional Services</h3>
                <div className="max-w-4xl mx-auto">
                  <FAQAccordion faqs={[
                    {
                      question: "Do you provide skip tracing services in Broken Arrow?",
                      answer: "Yes, we offer professional skip tracing services in Broken Arrow. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient. This service is particularly useful for older cases or when people have moved."
                    },
                    {
                      question: "What happens if the person cannot be found at the address provided?",
                      answer: "If the individual cannot be located at the provided address, we will attempt service multiple times at different times of day. We also offer skip tracing services to locate current addresses and can discuss alternative service methods with you and your attorney."
                    },
                    {
                      question: "Where can I learn more about Oklahoma process serving laws and procedures?",
                      answer: "For comprehensive information about process serving requirements, legal tips, and best practices across Oklahoma, visit our <a href='/resources' className='text-blue-600 hover:text-blue-800 underline'>legal resources page</a>. We also have detailed guides covering everything from court procedures to document requirements."
                    }
                  ]} />
                </div>
              </div>

              {/* Local Area Specific Questions */}
              <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-bold mb-4 text-blue-800 text-center flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Local Broken Arrow Area Questions
                </h3>
                <div className="max-w-4xl mx-auto">
                  <FAQAccordion faqs={[
                    {
                      question: "Can you serve subpoenas at the Broken Arrow Farmers Market?",
                      answer: "Yes. Our process servers regularly cover community events like the Broken Arrow Farmers Market at 2 S Main St. We coordinate with market organizers to ensure discreet, compliant service of subpoenas and court papers during market hours."
                    },
                    {
                      question: "What's the best time to serve on weekdays near Main Street law offices?",
                      answer: "For service near the Main Street legal corridor—between New Orleans Park Rd and Houston St—we recommend scheduling between 10 AM–11 AM or 2 PM–4 PM. These windows align with attorney break periods and minimize missed attempts."
                    },
                    {
                      question: "Can you serve documents at the Rose District Coffee House?",
                      answer: "Absolutely. We offer onsite service at Rose District Coffee (106 N Main St). Specify the café location and we'll deliver affidavits with photo proof inside or just outside the coffee house."
                    },
                    {
                      question: "Do you provide service at Broken Arrow's annual Art & Wine Festival?",
                      answer: "Yes. During the Art & Wine Festival at Central Park, we deploy rapid-response teams to serve urgent court documents within the festival footprint, ensuring service even amid large crowds."
                    },
                    {
                      question: "Is there an extra fee for serving papers at schools like Aspen Creek Elementary?",
                      answer: "No. We charge our standard rate for service at all addresses, including public schools (e.g., Aspen Creek Elementary at 22700 E 81st St)."
                    },
                    {
                      question: "Can you serve court papers at The Museum Broken Arrow?",
                      answer: "Yes. We handle service of subpoenas, civil complaints, and family-law filings adjacent to The Museum Broken Arrow (400 S Main St) with respect for visitor traffic and exhibit hours."
                    },
                    {
                      question: "What is the process for serving documents at Broken Arrow Brewing Company?",
                      answer: "We deliver affidavits at Broken Arrow Brewing Company (333 W Dallas St) during non–peak customer hours. GPS tracking and timestamped photo proof are provided for each serve."
                    },
                    {
                      question: "Do you handle service at Broken Arrow Chamber of Commerce events?",
                      answer: "Yes. We coordinate onsite process serving at Chamber of Commerce workshops and networking events (210 N Main St Suite C), ensuring minimal disruption."
                    },
                    {
                      question: "Can you serve legal notices during the Rose District Art Walk?",
                      answer: "Yes. During monthly Rose District Art Walk evenings, we manage discreet service of legal notices along Main St and surrounding galleries."
                    },
                    {
                      question: "What permissions are required to serve at gated communities like Forest Ridge Estates?",
                      answer: "We work directly with Forest Ridge Estates security at the guardhouse to gain lawful entry. Multiple attempts at varied times ensure compliant service in gated neighborhoods."
                    }
                  ]} />
                </div>
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



        {/* Trust Signals & Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
                Trusted by Broken Arrow Legal Professionals
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600 font-semibold">5.0 Rating</span>
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    &ldquo;Just Legal Solutions has been our go-to process server for all Broken Arrow cases. Their knowledge of the local area and professional service is unmatched. They always get the job done quickly and correctly.&rdquo;
                  </blockquote>
                  <cite className="text-blue-600 font-semibold">
                    — Local Broken Arrow Law Firm
                  </cite>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600 font-semibold">5.0 Rating</span>
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    &ldquo;Needed emergency service on a weekend in the Rose District. They responded immediately and completed service the same day. Professional, reliable, and reasonably priced.&rdquo;
                  </blockquote>
                  <cite className="text-blue-600 font-semibold">
                    — Broken Arrow Business Owner
                  </cite>
                </div>
              </div>
              <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">Licensed</div>
                  <div className="text-gray-600">Professional Service</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">Bonded</div>
                  <div className="text-gray-600">& Insured</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">Same Day</div>
                  <div className="text-gray-600">Service Available</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">Court</div>
                  <div className="text-gray-600">Admissible Affidavits</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-6 text-red-100">
                Professional process serving in Broken Arrow with competitive rates and 24/7 emergency service available.
              </p>
              
              {/* Emergency Service Highlight */}
              <div className="bg-red-700 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-yellow-300 mb-2">🚨 Need Emergency Service?</h3>
                <p className="text-red-100">
                  Available 24/7 for urgent legal document service in Broken Arrow - weekends, holidays, and same-day service
                </p>
              </div>

              <h3 className="text-xl font-bold text-red-100 mb-2">Need a licensed Broken Arrow process server?</h3>
              <p className="text-red-100 mb-8">Call today for same-day service and competitive rates throughout Tulsa & Wagoner Counties.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="tel:5393676832" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (539) 367-6832
                </Link>
                <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                  Get Free Quote
                </Link>
                <Link href="/pricing" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
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
