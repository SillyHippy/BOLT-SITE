import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building, CheckCircle, Star, Scale } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Broken Arrow, OK | Licensed Legal Document Service',
  description: 'Licensed process server in Broken Arrow, Oklahoma. GPS-tracked and court-ready. Serving all Tulsa County with 24/7 emergency availability. (539) 367-6832.',
  keywords: 'process server Broken Arrow OK, serve papers Broken Arrow Oklahoma, legal document service Broken Arrow, subpoena service Broken Arrow, emergency process server Broken Arrow, licensed process server Tulsa County',
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
    title: 'Process Server Broken Arrow, OK | Licensed Legal Document Service',
    description: 'Licensed process server in Broken Arrow, Oklahoma. GPS-tracked and court-ready. Serving all Tulsa County with 24/7 emergency availability. (539) 367-6832.',
    url: 'https://justlegalsolutions.org/service-areas/broken-arrow',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.webp',
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
    title: 'Process Server Broken Arrow, OK | Licensed Legal Document Service',
    description: 'Licensed process server in Broken Arrow, Oklahoma. GPS-tracked and court-ready. Serving all Tulsa County with 24/7 emergency availability. (539) 367-6832.',
    images: ['https://justlegalsolutions.org/og-image.webp'],
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

const brokenArrowFAQs = [
  {
    question: "How much does a process server cost in Broken Arrow?",
    answer: "Our professional process serving offers competitive rates with transparent pricing. We provide detailed quotes based on your specific needs. Contact us at (539) 367-6832 for current rates and service options, or visit our pricing page for complete information."
  },
  {
    question: "How long does it take to serve papers in Broken Arrow?",
    answer: "Standard service in Broken Arrow typically takes 2-4 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent situations. Call before noon for best same-day scheduling."
  },
  {
    question: "Where are court documents filed for Broken Arrow?",
    answer: "Court documents for Broken Arrow are filed at the Tulsa County courthouse (500 South Denver Avenue, Tulsa, OK 74103). Broken Arrow Municipal Court at 2302 South 1st Place handles city ordinance violations only. All civil, family, and felony matters go through Tulsa County District Court."
  },
  {
    question: "Can you serve papers on weekends in Broken Arrow?",
    answer: "Yes, we offer weekend and evening service in Broken Arrow for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays."
  },
  {
    question: "What areas of Broken Arrow do you serve?",
    answer: "We serve all areas of Broken Arrow including Downtown/Rose District, South Broken Arrow aerospace corridor, East Broken Arrow subdivisions, West Broken Arrow neighborhoods, and Northeast Broken Arrow gated communities. Our coverage extends throughout Tulsa County."
  },
  {
    question: "Are you licensed to serve process in Broken Arrow?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with Tulsa County. We maintain all required bonds and certifications for professional service throughout Oklahoma."
  },
  {
    question: "What types of legal documents do you serve in Broken Arrow?",
    answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, and all other court-ordered service of process."
  },
  {
    question: "Do you provide skip tracing services in Broken Arrow?",
    answer: "Yes, we offer professional skip tracing services in Broken Arrow. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient."
  },
  {
    question: "Can you serve FlightSafety employees?",
    answer: "Yes. Workplace service at FlightSafety International and other aerospace employers is available. Facility security may require advance notice, so we coordinate with HR departments for smooth service."
  },
];

const brokenArrowEmployers = [
  { name: 'FlightSafety International', address: '3001 South Highway 169, Broken Arrow, OK 74012', industry: 'Aerospace', notes: 'Flight simulation and training; 1,000+ employees; security coordination required' },
  { name: 'Broken Arrow Public Schools', address: '1901 South Main Street, Broken Arrow, OK 74012', industry: 'Education', notes: 'One of Oklahoma\'s largest districts; 20,000+ students; admin building preferred' },
  { name: 'City of Broken Arrow', address: '2302 South 1st Place, Broken Arrow, OK 74012', industry: 'Government', notes: 'Municipal complex; city clerk receives service' },
  { name: 'Northeastern State University', address: '5210 South 145th East Avenue, Broken Arrow, OK 74012', industry: 'Higher Education', notes: 'Broken Arrow campus; HR office open weekdays 8 AM – 5 PM' },
  { name: 'Walmart Supercenter', address: '301 South Elm Place, Broken Arrow, OK 74012', industry: 'Retail', notes: '200+ employees; management office inside store' },
  { name: 'St. John Broken Arrow', address: '2840 South 145th East Avenue, Broken Arrow, OK 74012', industry: 'Healthcare', notes: 'Hospital campus; HR department open 8 AM – 5 PM' },
];

export default function BrokenArrowProcessServerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="service"
          title="Just Legal Solutions - Broken Arrow"
          description="Professional process serving in Broken Arrow, Oklahoma with fast, reliable legal document delivery and 24/7 emergency service"
          url="https://justlegalsolutions.org/service-areas/broken-arrow"
          breadcrumbItems={breadcrumbItems}
          location={{
            name: "Broken Arrow",
            state: "Oklahoma",
            zipCode: "74012"
          }}
          services={["Process Serving", "Legal Document Delivery", "Court Filing Services", "Skip Tracing", "Corporate Service", "Emergency Rush Service", "GPS Tracked Delivery", "24/7 Emergency Service"]}
          faqItems={brokenArrowFAQs}
        />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Scale className="h-16 w-16 text-blue-400 mr-4" />
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-2">
                    Process Server Broken Arrow
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-200">Professional Legal Document Service</p>
                </div>
              </div>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Licensed, bonded, and insured process server in Broken Arrow, Oklahoma. 
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
                  <div className="text-sm text-blue-100">Bonded & Insured</div>
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
                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 mr-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
          {/* Service Information */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Professional Process Serving in Broken Arrow</h2>
              <p className="text-blue-100">Fast, reliable legal document service with transparent pricing</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Our Services Include:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Divorce Papers & Family Law Documents</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Child Custody & Support Documents</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Eviction Notices & Landlord Tenant</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Subpoenas & Court Summons</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Civil Complaints & Lawsuits</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Corporate & Business Documents</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Why Choose Us:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Licensed & Bonded in Oklahoma</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Local Broken Arrow Area Expertise</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Professional Court Affidavits</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Same-Day Service Available</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />GPS Tracking & Digital Proof</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />24/7 Emergency Service</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  href="/pricing" 
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  <DollarSign className="h-5 w-5 mr-2" />
                  View Pricing & Service Options
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-teal-100">Common questions about process serving in Broken Arrow</p>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {brokenArrowFAQs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Where We Serve Papers in Broken Arrow */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Where We Serve Papers in Broken Arrow</h2>
              <p className="text-indigo-100">Local expertise across every Broken Arrow neighborhood</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 max-w-3xl">
                Broken Arrow spans Tulsa County as Oklahoma's fourth-largest city, featuring diverse neighborhoods from the historic Rose District to aerospace corridors and master-planned communities. Our servers know every subdivision, from gated golf communities to rural acreage east of Highway 169.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Downtown Broken Arrow / Rose District</h3>
                  <p className="text-gray-700 text-sm">
                    The historic town center along <strong>Main Street</strong> between Hillside Drive and Main Street. Key landmarks: <strong>Broken Arrow City Hall</strong> (2302 South 1st Place), <strong>Rose District</strong> entertainment area, and <strong>Broken Arrow Historical Society</strong>. Older neighborhoods here feature visible front porches and straightforward daytime access.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">South Broken Arrow / Aerospace Corridor</h3>
                  <p className="text-gray-700 text-sm">
                    Industrial and commercial corridor along <strong>Highway 169</strong> south of 101st Street. Home to <strong>FlightSafety International</strong> (3001 South Highway 169) and other aerospace employers. This area features workplace service opportunities during weekday business hours. Many employees commute from across the Tulsa metro.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">East Broken Arrow / Subdivisions</h3>
                  <p className="text-gray-700 text-sm">
                    Rapidly growing residential subdivisions east of <strong>Aspen Avenue</strong> and 101st Street. Areas like <strong>Aspen Creek</strong>, <strong>Shadow Mountain</strong>, and <strong>Country Place</strong> feature newer construction with clear addressing. Many residents work in Tulsa or at nearby aerospace employers.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Northeast Broken Arrow / Gated Communities</h3>
                  <p className="text-gray-700 text-sm">
                    Newer master-planned communities and golf subdivisions in northeast Broken Arrow. Areas like <strong>Baton Rouge</strong> and <strong>Troon North</strong> feature gated access and HOA management. We coordinate with HOA offices for legal entry or serve defendants at their workplaces during business hours.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Major Employers & Workplace Service in Broken Arrow */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Major Employers &amp; Workplace Service in Broken Arrow</h2>
              <p className="text-emerald-100">We serve at Broken Arrow&apos;s major employers efficiently</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 max-w-3xl">
                Workplace service requires knowing shift schedules, HR office locations, and the best times to reach management staff. We maintain current contact information for Broken Arrow&apos;s largest employers.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                  <thead className="bg-gray-100 text-gray-900 font-semibold">
                    <tr>
                      <th className="px-4 py-3">Employer</th>
                      <th className="px-4 py-3">Address</th>
                      <th className="px-4 py-3">Industry</th>
                      <th className="px-4 py-3">Service Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {brokenArrowEmployers.map((emp, i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                        <td className="px-4 py-3 font-medium">{emp.name}</td>
                        <td className="px-4 py-3">{emp.address}</td>
                        <td className="px-4 py-3">{emp.industry}</td>
                        <td className="px-4 py-3">{emp.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Broken Arrow-Specific FAQ */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Broken Arrow-Specific Questions</h2>
              <p className="text-amber-100">Answers to frequently asked questions about Broken Arrow service</p>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Which courthouse do Broken Arrow cases file in?</h3>
                  <p className="text-gray-600">
                    Broken Arrow cases file in <strong>Tulsa County</strong> at the <strong>Tulsa County Courthouse</strong> (500 South Denver Avenue, Tulsa, OK 74103). Broken Arrow Municipal Court at 2302 South 1st Place handles city ordinance violations only. All civil, family, and felony matters go through Tulsa County District Court.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Can you serve papers at Broken Arrow Public Schools?</h3>
                  <p className="text-gray-600">
                    Yes. The Broken Arrow Public Schools administration building at 1901 South Main Street is the preferred location for workplace service involving district employees. Individual campus service is also possible, though the admin building streamlines the process for central office staff.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: How do you handle aerospace facilities like FlightSafety?</h3>
                  <p className="text-gray-600">
                    Aerospace employers like FlightSafety International have security protocols. We coordinate with HR departments for workplace service, providing advance notice when required. Alternative service locations include the administration building or known break areas during shift changes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Is same-day service available in Broken Arrow?</h3>
                  <p className="text-gray-600">
                    Yes. Broken Arrow is within our standard Tulsa metro service area. We provide standard, rush, and same-day service throughout all Broken Arrow ZIP codes (74012, 74014, and surrounding areas). Call before noon for best same-day scheduling.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Contact Section */}
          <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-8 text-center">
              <AlertCircle className="h-16 w-16 mx-auto mb-6 text-red-200" />
              <h2 className="text-3xl font-bold mb-4">Need Emergency Process Service?</h2>
              <p className="text-xl mb-6 text-red-100">
                Available 24/7 for urgent legal document service in Broken Arrow
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
              <h2 className="text-2xl font-bold mb-2">Broken Arrow Service Area Map</h2>
              <p className="text-blue-100">Professional process serving throughout Broken Arrow, Oklahoma</p>
            </div>
            <div className="p-8">
              <GoogleMapsEmbed 
                countyName="Tulsa County"
                cityName="Broken Arrow"
                state="Oklahoma"
                title="Broken Arrow Process Server Service Area"
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
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">📍 Nearby Service Areas</h3>
                  <ul className="space-y-2">
                    <li><Link href="/tulsa-process-server" className="text-blue-600 hover:underline">Tulsa Process Server</Link></li>
                    <li><Link href="/service-areas/bixby" className="text-blue-600 hover:underline">Bixby Process Server</Link></li>
                    <li><Link href="/service-areas/coweta" className="text-blue-600 hover:underline">Coweta Process Server</Link></li>
                    <li><Link href="/service-areas/wagoner" className="text-blue-600 hover:underline">Wagoner Process Server</Link></li>
                    <li><Link href="/counties/tulsa-county" className="text-blue-600 hover:underline">Tulsa County Process Server</Link></li>
                    <li><Link href="/counties/wagoner-county" className="text-blue-600 hover:underline">Wagoner County Process Server</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">📚 Helpful Guides</h3>
                  <ul className="space-y-2">
                    <li><Link href="/oklahoma-process-server-faq" className="text-blue-600 hover:underline">Process Serving FAQ 2026</Link></li>
                    <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">Oklahoma Process Server Laws</Link></li>
                    <li><Link href="/oklahoma-process-server-pricing" className="text-blue-600 hover:underline">Pricing Guide</Link></li>
                    <li><Link href="/family-law-service-guide-tulsa" className="text-blue-600 hover:underline">Family Law Service Guide</Link></li>
                    <li><Link href="/ai-skip-tracing-guide-oklahoma" className="text-blue-600 hover:underline">Skip Tracing Guide</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">🏢 Our Services</h3>
                  <ul className="space-y-2">
                    <li><Link href="/law-firm-services" className="text-blue-600 hover:underline">Law Firm Services</Link></li>
                    <li><Link href="/weekend-emergency" className="text-blue-600 hover:underline">Emergency Process Service</Link></li>
                    <li><Link href="/about" className="text-blue-600 hover:underline">About Just Legal Solutions</Link></li>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-6 text-blue-100">
                Professional process serving in Broken Arrow with competitive rates and 24/7 emergency service
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

          {/* Browse All Service Areas */}
          <div className="text-center py-8">
            <Link
              href="/service-areas"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors"
            >
              ← Browse All Oklahoma Service Areas
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
