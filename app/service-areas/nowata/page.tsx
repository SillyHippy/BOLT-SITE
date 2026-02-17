import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Phone, MapPin, Clock, Award, DollarSign, Users, Building2, Shield, CheckCircle, Star, Calendar, FileText, Scale, AlertCircle } from 'lucide-react';

import GoogleMapsEmbed from '@/components/ui/google-maps-embed';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Nowata Process Server | Nowata County Court Papers & Subpoenas | Just Legal Solutions',
  description: 'Dependable process server in Nowata, Oklahoma covering all of Nowata County. We deliver divorce papers, subpoenas, eviction notices, and emergency court documents with GPS-tracked proof of service.',
  keywords: 'process server nowata, nowata process server, legal document service nowata, serve papers nowata, court documents nowata, subpoena service nowata, eviction notice nowata, emergency process server nowata, nowata county process server, licensed process server nowata county, professional process server nowata oklahoma',
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
    title: 'Nowata Process Server | Nowata County Legal Document Delivery',
    description: 'Professional process server in Nowata, Oklahoma. Reliable legal document service throughout Nowata County with 24/7 emergency availability and transparent pricing.',
    url: 'https://justlegalsolutions.org/service-areas/nowata',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Professional Process Server Nowata Oklahoma',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nowata Process Server | Nowata County Legal Papers',
    description: 'Licensed process server in Nowata, Oklahoma. Reliable legal document delivery with 24/7 emergency availability.',
    images: ['https://justlegalsolutions.org/og-image.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/nowata',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
  { name: 'Nowata', url: '/service-areas/nowata' },
];

const nowataFAQs = [
  {
    question: "How much does a process server charge in Nowata, Oklahoma?",
    answer: "Our process serving rates for Nowata and Nowata County are competitive and transparent. Standard service, rush delivery, and same-day emergency options are all available. Contact us at (539) 367-6832 for a personalized quote, or visit our pricing page for a full rate breakdown."
  },
  {
    question: "How quickly can you serve papers in Nowata?",
    answer: "Standard service in Nowata typically takes 3-5 business days. For time-sensitive matters we offer rush service (24-48 hours) and same-day emergency delivery. Rural addresses outside Nowata city limits may require additional time due to distance and access."
  },
  {
    question: "Which courthouse handles Nowata legal filings?",
    answer: "Legal documents for Nowata are filed at the Nowata County Courthouse located at 229 N Maple St in downtown Nowata. Our team is thoroughly familiar with Nowata County clerk procedures and filing requirements."
  },
  {
    question: "Can you serve documents on rural properties in Nowata County?",
    answer: "Absolutely. Much of Nowata County consists of rural ranch and farmland. Our process servers carry detailed county maps, use GPS and skip tracing technology, and make multiple attempts at varied times to reach individuals at remote addresses."
  },
  {
    question: "Do you handle service near Oologah Lake?",
    answer: "Yes. Our coverage area includes all properties around Oologah Lake in southwest Nowata County. We are experienced with seasonal residences, lake cabins, and recreation areas where occupancy can be irregular."
  },
  {
    question: "Can you serve papers on weekends in Nowata?",
    answer: "Yes, we offer weekend and evening service in Nowata for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays, to meet critical court deadlines."
  },
  {
    question: "What areas does your Nowata County coverage include?",
    answer: "We serve all of Nowata County including downtown Nowata, Delaware, Lenapah, New Alluwe, Wann, South Coffeyville, and every rural route in between. Our coverage extends to neighboring counties as well."
  },
  {
    question: "Are you licensed to serve process in Nowata County?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers authorized to serve throughout Nowata County and all 77 Oklahoma counties. We maintain all required bonds and certifications for professional service."
  },
  {
    question: "What types of legal documents do you serve in Nowata?",
    answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, protective orders, and all other court-ordered service of process."
  },
  {
    question: "Do you offer skip tracing in Nowata County?",
    answer: "Yes, we provide professional skip tracing services throughout Nowata County. This is especially valuable in rural areas where individuals may have moved or where public records are limited. Our technology and local contacts help locate hard-to-find individuals."
  }
];

export default function NowataProcessServer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="service"
          title="Just Legal Solutions - Nowata"
          description="Professional process serving in Nowata, Oklahoma with reliable legal document delivery throughout Nowata County and 24/7 emergency service"
          url="https://justlegalsolutions.org/service-areas/nowata"
          breadcrumbItems={breadcrumbItems}
          location={{
            name: "Nowata",
            state: "Oklahoma",
            zipCode: "74048"
          }}
          services={["Process Serving", "Legal Document Delivery", "Court Filing Services", "Skip Tracing", "Emergency Rush Service", "GPS Tracked Delivery", "24/7 Emergency Service"]}
          faqItems={nowataFAQs}
        />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Scale className="h-16 w-16 text-blue-400 mr-4" />
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-2">
                    Nowata Process Server &amp; Nowata County Legal Delivery
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-200">Dependable Court Document Service for Northeast Oklahoma</p>
                </div>
              </div>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Licensed, bonded, and insured process server proudly serving Nowata, Nowata County, and the Oologah Lake region. 
                Reliable delivery with professional standards, transparent pricing, and 24/7 emergency availability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a 
                  href="tel:5393676832" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (539) 367-6832
                </a>
                <Link 
                  href="/contact" 
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20 flex items-center"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Get Quote Online
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">24/7</div>
                  <div className="text-sm text-blue-100">Emergency Service</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">Same Day</div>
                  <div className="text-sm text-blue-100">Rush Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">99.7%</div>
                  <div className="text-sm text-blue-100">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">Licensed</div>
                  <div className="text-sm text-blue-100">Bonded &amp; Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Breadcrumbs */}
        <nav className="bg-white border-b border-gray-200 py-4" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbItems.map((item, index) => (
                <li key={item.name}>
                  <div className="flex items-center">
                    {index > 0 && (
                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 mr-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {index === breadcrumbItems.length - 1 ? (
                      <span className="text-gray-500 font-medium">{item.name}</span>
                    ) : (
                      <Link href={item.url} className="text-blue-600 hover:text-blue-800 font-medium">
                        {item.name}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Local Expertise Section - Unique to Nowata */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Local Expertise in Nowata &amp; Nowata County</h2>
              <p className="text-indigo-100">Trusted service backed by genuine knowledge of the area</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-4">
                    Nowata is the county seat of Nowata County and sits along US-169 in northeast Oklahoma. The city&apos;s name derives from a Delaware word meaning &ldquo;welcome,&rdquo; and the community of roughly 3,700 people retains a close-knit, small-town character that requires a respectful, discreet approach to legal document delivery.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our process servers understand the geography of Nowata County—from the rolling hills and ranch land to the residential streets of downtown Nowata. We know the best times to reach people, the county road system, and how to work with rural addresses that may not show up on standard mapping applications.
                  </p>
                  <p className="text-gray-700">
                    Whether you need papers served at a home on Maple Street, a farm off a county section road, or a property near Oologah Lake, our team brings the local knowledge and professionalism needed for successful service every time.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Nowata County Quick Facts</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>County Seat:</strong> Nowata (Nowata County Courthouse, 229 N Maple St)</span></li>
                    <li className="flex items-start"><MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>ZIP Code:</strong> 74048</span></li>
                    <li className="flex items-start"><MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Nearby Cities:</strong> Delaware, Lenapah, South Coffeyville, Wann</span></li>
                    <li className="flex items-start"><MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Key Landmarks:</strong> Oologah Lake, Glass Mansion, Nowata County Fairgrounds</span></li>
                    <li className="flex items-start"><MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Tribal Jurisdictions:</strong> Cherokee Nation land is prevalent in Nowata County</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Service Information */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Professional Process Serving in Nowata</h2>
              <p className="text-blue-100">Reliable legal document delivery with transparent pricing</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Our Services Include:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Divorce Papers &amp; Family Law Documents</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Child Custody &amp; Support Documents</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Eviction Notices &amp; Landlord-Tenant Papers</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Subpoenas &amp; Court Summons</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Civil Complaints &amp; Lawsuits</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Corporate &amp; Business Documents</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Restraining &amp; Protective Orders</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Small Claims Court Papers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Why Choose Us:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Licensed &amp; Bonded in Oklahoma</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Local Nowata County Area Expertise</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Professional Court Affidavits</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Same-Day &amp; Rush Service Available</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />GPS Tracking &amp; Digital Proof</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />24/7 Emergency Service</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Rural &amp; Remote Property Service</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Skip Tracing for Hard-to-Find Individuals</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  href="/pricing" 
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  <DollarSign className="h-5 w-5 mr-2" />
                  View Pricing &amp; Service Options
                </Link>
              </div>
            </div>
          </section>

          {/* Nowata-Specific Content: Rural & Oologah Lake */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Serving Rural Nowata County &amp; the Oologah Lake Area</h2>
              <p className="text-green-100">Specialized service for ranches, rural routes, and lakeside properties</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Rural Property Access</h3>
                  <p className="text-gray-700 mb-4">
                    Nowata County is predominantly rural, with ranches, farms, and homesteads spread across the rolling northeast Oklahoma landscape. Many addresses use county road designations that don&apos;t appear on consumer GPS tools. Our process servers carry detailed county plat maps and coordinate with local contacts when needed to reach even the most secluded properties.
                  </p>
                  <p className="text-gray-700">
                    We schedule multiple attempts at varied times—early morning, evening, and weekends—to maximize the chance of contact at rural addresses where residents may be working fields or tending livestock during the day.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Oologah Lake Properties</h3>
                  <p className="text-gray-700 mb-4">
                    The southwest portion of Nowata County borders Oologah Lake, a popular recreation destination with lakefront homes, cabins, and campgrounds. Property disputes, HOA matters, and other legal issues frequently arise in lake communities where owners may only visit seasonally.
                  </p>
                  <p className="text-gray-700">
                    Our team coordinates service attempts around known occupancy patterns and can combine skip tracing with property records research to confirm when a lakeside respondent is likely to be present—saving you time and failed attempts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-teal-100">Common questions about process serving in Nowata and Nowata County</p>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {nowataFAQs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Emergency Contact Section */}
          <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-8 text-center">
              <AlertCircle className="h-16 w-16 mx-auto mb-6 text-red-200" />
              <h2 className="text-3xl font-bold mb-4">Need Emergency Process Service in Nowata?</h2>
              <p className="text-xl mb-6 text-red-100">
                Available 24/7 for urgent legal document service in Nowata and Nowata County
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:5393676832" 
                  className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency: (539) 367-6832
                </a>
                <Link 
                  href="/contact" 
                  className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Service
                </Link>
              </div>
            </div>
          </section>

          {/* Google Maps Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Nowata Service Area Map</h2>
              <p className="text-blue-100">Professional process serving throughout Nowata and Nowata County, Oklahoma</p>
            </div>
            <div className="p-8">
              <GoogleMapsEmbed 
                countyName="Nowata County"
                cityName="Nowata"
                state="Oklahoma"
                title="Nowata Process Server Service Area"
              />
            </div>
          </section>

          {/* Explore More Resources */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Explore More Resources</h2>
              <p className="text-purple-100">Learn more about our services and nearby coverage areas</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Nearby Service Areas</h3>
                  <ul className="space-y-2">
                    <li><Link href="/tulsa-process-server" className="text-blue-600 hover:underline">Tulsa Process Server</Link></li>
                    <li><Link href="/service-areas/bartlesville" className="text-blue-600 hover:underline">Bartlesville Process Server</Link></li>
                    <li><Link href="/service-areas/vinita" className="text-blue-600 hover:underline">Vinita Process Server</Link></li>
                    <li><Link href="/service-areas/claremore" className="text-blue-600 hover:underline">Claremore Process Server</Link></li>
                    <li><Link href="/service-areas/collinsville" className="text-blue-600 hover:underline">Collinsville Process Server</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Helpful Guides</h3>
                  <ul className="space-y-2">
                    <li><Link href="/oklahoma-process-server-faq-2026" className="text-blue-600 hover:underline">Process Serving FAQ 2026</Link></li>
                    <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">Oklahoma Process Server Laws</Link></li>
                    <li><Link href="/oklahoma-process-server-pricing" className="text-blue-600 hover:underline">Pricing Guide</Link></li>
                    <li><Link href="/serving-legal-papers-on-tribal-land" className="text-blue-600 hover:underline">Serving on Tribal Land</Link></li>
                    <li><Link href="/ai-skip-tracing-guide-oklahoma" className="text-blue-600 hover:underline">Skip Tracing Guide</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Our Services</h3>
                  <ul className="space-y-2">
                    <li><Link href="/law-firm-services" className="text-blue-600 hover:underline">Law Firm Services</Link></li>
                    <li><Link href="/weekend-emergency" className="text-blue-600 hover:underline">Emergency Process Service</Link></li>
                    <li><Link href="/seo/eviction-notice-process-server" className="text-blue-600 hover:underline">Eviction Notice Service</Link></li>
                    <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
                    <li><Link href="/seo/what-is-a-process-server" className="text-blue-600 hover:underline">What is a Process Server?</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started in Nowata?</h2>
              <p className="text-xl mb-6 text-blue-100">
                Professional process serving in Nowata and Nowata County with competitive rates and 24/7 emergency service
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:5393676832" 
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (539) 367-6832
                </a>
                <Link 
                  href="/contact" 
                  className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Get Free Quote
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      
        <Footer />
      </main>
    </div>
  );
}
