import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Phone, MapPin, Clock, Award, DollarSign, Users, Building2, Shield, CheckCircle, Star, Calendar, FileText, Scale, AlertCircle } from 'lucide-react';

import GoogleMapsEmbed from '@/components/ui/google-maps-embed';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Vinita Process Server | Craig County Legal Document Delivery | Just Legal Solutions',
  description: 'Licensed process server in Vinita, Oklahoma serving Craig County and the Grand Lake region. Court papers, subpoenas, eviction notices, and rush legal document delivery with GPS-verified proof of service.',
  keywords: 'process server vinita, vinita process server, legal document service vinita, serve papers vinita, court documents vinita, subpoena service vinita, eviction notice vinita, emergency process server vinita, craig county process server, grand lake process server, licensed process server craig county, professional process server vinita oklahoma',
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
    title: 'Vinita Process Server | Craig County Court Document Delivery',
    description: 'Professional process server in Vinita, Oklahoma. Fast, reliable legal document service throughout Craig County with 24/7 emergency availability and competitive rates.',
    url: 'https://justlegalsolutions.org/service-areas/vinita',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Professional Process Server Vinita Oklahoma',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinita Process Server | Craig County Legal Document Service',
    description: 'Licensed process server in Vinita, Oklahoma. Fast, reliable legal document service with 24/7 emergency availability.',
    images: ['https://justlegalsolutions.org/og-image.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/vinita',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
  { name: 'Vinita', url: '/service-areas/vinita' },
];

const vinitaFAQs = [
  {
    question: "How much does a process server cost in Vinita?",
    answer: "Our professional process serving in Vinita offers competitive, transparent pricing. Standard service rates are affordable for Craig County residents and businesses. Contact us at (539) 367-6832 for a detailed quote, or visit our pricing page for complete information on standard, rush, and same-day options."
  },
  {
    question: "How long does it take to serve papers in Vinita?",
    answer: "Standard service in Vinita typically takes 3-5 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent court deadlines. Rural addresses outside of Vinita city limits may require slightly longer timeframes."
  },
  {
    question: "Where are court documents filed for Vinita cases?",
    answer: "Court documents for Vinita are filed at the Craig County Courthouse located at 301 W Canadian Ave in downtown Vinita. We are intimately familiar with Craig County filing requirements and can assist with proper document preparation."
  },
  {
    question: "Can you serve papers near Grand Lake O' the Cherokees?",
    answer: "Yes. Our coverage area includes all of Craig County, including lake-area properties near Grand Lake O' the Cherokees and seasonal residences. We understand the challenges of serving at vacation homes and lake cabins where occupancy can be irregular."
  },
  {
    question: "Do you serve legal documents on tribal land near Vinita?",
    answer: "Yes. We have experience navigating service of process on tribal jurisdictions in the Vinita area, including Cherokee Nation lands. We follow all applicable tribal and state protocols to ensure valid, court-admissible service."
  },
  {
    question: "Can you serve papers on weekends in Vinita?",
    answer: "Yes, we offer weekend and evening service in Vinita for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays, to meet critical court deadlines."
  },
  {
    question: "What areas of Vinita and Craig County do you cover?",
    answer: "We serve all areas of Vinita including downtown, US-69 corridor, the residential neighborhoods east and west of town, and all of Craig County including Big Cabin, Welch, Ketchum, and the Grand Lake shoreline communities."
  },
  {
    question: "Are you licensed to serve process in Craig County?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers authorized to serve throughout Craig County and all 77 Oklahoma counties. We maintain all required bonds and certifications for professional service."
  },
  {
    question: "What types of legal documents do you serve in Vinita?",
    answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, protective orders, and all other court-ordered service of process."
  },
  {
    question: "Do you provide skip tracing services in Vinita?",
    answer: "Yes, we offer professional skip tracing services in Vinita and Craig County. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient—particularly useful in rural areas with limited public records."
  }
];

export default function VinitaProcessServer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="service"
          title="Just Legal Solutions - Vinita"
          description="Professional process serving in Vinita, Oklahoma with fast, reliable legal document delivery throughout Craig County and 24/7 emergency service"
          url="https://justlegalsolutions.org/service-areas/vinita"
          breadcrumbItems={breadcrumbItems}
          location={{
            name: "Vinita",
            state: "Oklahoma",
            zipCode: "74301"
          }}
          services={["Process Serving", "Legal Document Delivery", "Court Filing Services", "Skip Tracing", "Emergency Rush Service", "GPS Tracked Delivery", "24/7 Emergency Service"]}
          faqItems={vinitaFAQs}
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
                    Vinita Process Server &amp; Craig County Document Delivery
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-200">Trusted Legal Document Service for Northeast Oklahoma</p>
                </div>
              </div>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Licensed, bonded, and insured process server based in the Tulsa metro proudly serving Vinita, Craig County, and the Grand Lake region. 
                Fast, reliable service with professional standards, competitive rates, and 24/7 emergency availability.
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

          {/* Local Expertise Section - Unique to Vinita */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Local Expertise in Vinita &amp; Craig County</h2>
              <p className="text-indigo-100">Deep knowledge of northeast Oklahoma&apos;s legal landscape</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-4">
                    Vinita is the county seat of Craig County and sits at the crossroads of US-60 and US-69 in northeast Oklahoma. As a gateway to the Grand Lake region, the area sees a steady mix of permanent residents, seasonal lake-goers, and business travelers—all of whom may need reliable legal document delivery at some point.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our process servers understand the unique geography of Craig County, from the rural farmland surrounding Vinita to the lakefront properties along Grand Lake O&apos; the Cherokees. We know local roads, seasonal access issues, and the Craig County Courthouse filing procedures inside and out.
                  </p>
                  <p className="text-gray-700">
                    Whether you need to serve papers at a residence on the edge of town, a business along the US-69 corridor, or a vacation home near the lake, our team handles it with professionalism and discretion.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Craig County Quick Facts</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>County Seat:</strong> Vinita (Craig County Courthouse, 301 W Canadian Ave)</span></li>
                    <li className="flex items-start"><MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>ZIP Code:</strong> 74301</span></li>
                    <li className="flex items-start"><MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Nearby Cities:</strong> Big Cabin, Welch, Ketchum, Afton</span></li>
                    <li className="flex items-start"><MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Key Landmarks:</strong> Grand Lake O&apos; the Cherokees, Eastern Trails Museum, Will Rogers Memorial Turnpike</span></li>
                    <li className="flex items-start"><MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Tribal Jurisdictions:</strong> Cherokee Nation land is prevalent throughout Craig County</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Service Information */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Professional Process Serving in Vinita</h2>
              <p className="text-blue-100">Fast, reliable legal document service with transparent pricing</p>
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
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Local Craig County Area Expertise</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Professional Court Affidavits</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Same-Day &amp; Rush Service Available</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />GPS Tracking &amp; Digital Proof</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />24/7 Emergency Service</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Tribal Land Service Experience</li>
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

          {/* Vinita-Specific Content: Grand Lake & Rural Service */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Serving the Grand Lake Region &amp; Rural Craig County</h2>
              <p className="text-green-100">Specialized service for lake properties, rural routes, and seasonal addresses</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Lake-Area Document Delivery</h3>
                  <p className="text-gray-700 mb-4">
                    Grand Lake O&apos; the Cherokees draws thousands of seasonal residents to Craig County every year. Many property disputes, HOA conflicts, and landlord-tenant issues arise in lake communities where individuals may only be present part of the year. Our process servers are experienced with the timing challenges of serving seasonal lake residents and can coordinate attempts around known occupancy windows.
                  </p>
                  <p className="text-gray-700">
                    We also handle service at marinas, campgrounds, and resort properties in the greater Grand Lake area—always with the professionalism and discretion that sensitive legal matters require.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Rural &amp; Agricultural Properties</h3>
                  <p className="text-gray-700 mb-4">
                    Craig County includes miles of rural roads, ranch land, and agricultural properties where standard GPS directions may fall short. Our servers carry detailed area maps, coordinate with local contacts when necessary, and make multiple attempts at varied times to ensure successful service.
                  </p>
                  <p className="text-gray-700">
                    For properties off county roads or those without clear addressing, we combine skip tracing technology with local knowledge to locate and serve individuals who might otherwise be unreachable by out-of-area process servers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-teal-100">Common questions about process serving in Vinita and Craig County</p>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {vinitaFAQs.map((faq, index) => (
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
              <h2 className="text-3xl font-bold mb-4">Need Emergency Process Service in Vinita?</h2>
              <p className="text-xl mb-6 text-red-100">
                Available 24/7 for urgent legal document service in Vinita and Craig County
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
              <h2 className="text-2xl font-bold mb-2">Vinita Service Area Map</h2>
              <p className="text-blue-100">Professional process serving throughout Vinita and Craig County, Oklahoma</p>
            </div>
            <div className="p-8">
              <GoogleMapsEmbed 
                countyName="Craig County"
                cityName="Vinita"
                state="Oklahoma"
                title="Vinita Process Server Service Area"
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
                    <li><Link href="/service-areas/claremore" className="text-blue-600 hover:underline">Claremore Process Server</Link></li>
                    <li><Link href="/service-areas/pryor" className="text-blue-600 hover:underline">Pryor Process Server</Link></li>
                    <li><Link href="/service-areas/nowata" className="text-blue-600 hover:underline">Nowata Process Server</Link></li>
                    <li><Link href="/service-areas/bartlesville" className="text-blue-600 hover:underline">Bartlesville Process Server</Link></li>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started in Vinita?</h2>
              <p className="text-xl mb-6 text-blue-100">
                Professional process serving in Vinita and Craig County with competitive rates and 24/7 emergency service
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
