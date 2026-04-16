import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building, CheckCircle, Star, Scale } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Bixby, OK | Licensed Legal Document Service',
  description: 'Licensed process server in Bixby, Oklahoma. GPS-tracked and court-ready. Serving all Tulsa County with 24/7 emergency availability. (539) 367-6832.',
  keywords: 'process server Bixby OK, serve papers Bixby Oklahoma, legal document service Bixby, subpoena service Bixby, emergency process server Bixby, licensed process server Tulsa County',
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
    title: 'Process Server Bixby, OK | Licensed Legal Document Service',
    description: 'Licensed process server in Bixby, Oklahoma. GPS-tracked and court-ready. Serving all Tulsa County with 24/7 emergency availability. (539) 367-6832.',
    url: 'https://justlegalsolutions.org/service-areas/bixby',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Professional Process Server Bixby Oklahoma',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Bixby, OK | Licensed Legal Document Service',
    description: 'Licensed process server in Bixby, Oklahoma. GPS-tracked and court-ready. Serving all Tulsa County with 24/7 emergency availability. (539) 367-6832.',
    images: ['https://justlegalsolutions.org/og-image.webp'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/bixby',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
  { name: 'Bixby', url: '/service-areas/bixby' },
];

const bixbyFAQs = [
  {
    question: "How much does a process server cost in Bixby?",
    answer: "Our professional process serving offers competitive rates with transparent pricing. We provide detailed quotes based on your specific needs. Contact us at (539) 367-6832 for current rates and service options, or visit our pricing page for complete information."
  },
  {
    question: "How long does it take to serve papers in Bixby?",
    answer: "Standard service in Bixby typically takes 2-4 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent situations. Call before noon for best same-day scheduling."
  },
  {
    question: "Where are court documents filed for Bixby?",
    answer: "Court documents for Bixby are filed at the Tulsa County courthouse (500 South Denver Avenue, Tulsa, OK 74103). Bixby Municipal Court at 2 South Main Street handles city ordinance violations only. All civil, family, and felony matters go through Tulsa County District Court."
  },
  {
    question: "Can you serve papers on weekends in Bixby?",
    answer: "Yes, we offer weekend and evening service in Bixby for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays."
  },
  {
    question: "What areas of Bixby do you serve?",
    answer: "We serve all areas of Bixby including Downtown Bixby, South Bixby subdivisions, North Bixby neighborhoods along Memorial Drive, and the rapidly growing Southeast Bixby master-planned communities. Our coverage extends throughout Tulsa County."
  },
  {
    question: "Are you licensed to serve process in Bixby?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with Tulsa County. We maintain all required bonds and certifications for professional service throughout Oklahoma."
  },
  {
    question: "What types of legal documents do you serve in Bixby?",
    answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, and all other court-ordered service of process."
  },
  {
    question: "Do you provide skip tracing services in Bixby?",
    answer: "Yes, we offer professional skip tracing services in Bixby. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient."
  },
  {
    question: "How do you handle gated communities in Bixby?",
    answer: "We verify gate codes and HOA access policies before attempting service in Bixby's gated subdivisions. For communities where gate access is restricted, we coordinate with HOA management or serve defendants at their workplaces."
  },
];

const bixbyEmployers = [
  { name: 'Bixby Public Schools', address: '201 West Madison Avenue, Bixby, OK 74008', industry: 'Education', notes: 'Fastest-growing district in Oklahoma; 8,000+ students; admin building preferred for service' },
  { name: 'City of Bixby', address: '201 West Madison Avenue, Bixby, OK 74008', industry: 'Government', notes: 'Municipal complex; city clerk receives service' },
  { name: 'Walmart Supercenter', address: '19510 South Memorial Drive, Bixby, OK 74008', industry: 'Retail', notes: '200+ employees; management office inside store' },
  { name: 'Target', address: '19300 South Memorial Drive, Bixby, OK 74008', industry: 'Retail', notes: '150+ employees; guest services counter' },
  { name: 'Saint Francis Hospital South', address: '6565 South Yale Avenue, Tulsa, OK 74136', industry: 'Healthcare', notes: 'Regional medical campus; HR department open 8 AM – 5 PM' },
  { name: 'Bixby Family YMCA', address: '12010 South Elm Place, Bixby, OK 74008', industry: 'Recreation', notes: 'Community center; front desk during business hours' },
];

export default function BixbyProcessServerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="service"
          title="Just Legal Solutions - Bixby"
          description="Professional process serving in Bixby, Oklahoma with fast, reliable legal document delivery and 24/7 emergency service"
          url="https://justlegalsolutions.org/service-areas/bixby"
          breadcrumbItems={breadcrumbItems}
          location={{
            name: "Bixby",
            state: "Oklahoma",
            zipCode: "74008"
          }}
          services={["Process Serving", "Legal Document Delivery", "Court Filing Services", "Skip Tracing", "Corporate Service", "Emergency Rush Service", "GPS Tracked Delivery", "24/7 Emergency Service"]}
          faqItems={bixbyFAQs}
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
                    Process Server Bixby
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-200">Professional Legal Document Service</p>
                </div>
              </div>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Licensed, bonded, and insured process server in Bixby, Oklahoma. 
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
              <h2 className="text-2xl font-bold mb-2">Professional Process Serving in Bixby</h2>
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
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Local Bixby Area Expertise</li>
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
              <p className="text-teal-100">Common questions about process serving in Bixby</p>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {bixbyFAQs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Where We Serve Papers in Bixby */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Where We Serve Papers in Bixby</h2>
              <p className="text-indigo-100">Local expertise across every Bixby neighborhood</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 max-w-3xl">
                Bixby spans Tulsa County with diverse neighborhoods ranging from historic downtown to rapidly growing master-planned communities. Our servers know every subdivision, from gated communities south of the Arkansas River to established neighborhoods along Memorial Drive.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Downtown Bixby / Main Street District</h3>
                  <p className="text-gray-700 text-sm">
                    The historic town center along <strong>Main Street</strong> between Madison Avenue and 111th Street South. Key landmarks: <strong>Bixby City Hall</strong> (201 West Madison Avenue), <strong>Bixby Public Library</strong> (222 West Madison Avenue), and the <strong>Bixby Antique District</strong>. Older neighborhoods here feature visible front porches and straightforward daytime access.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">South Bixby / Arkansas River Area</h3>
                  <p className="text-gray-700 text-sm">
                    Rapidly growing residential subdivisions south of 111th Street and west of Memorial Drive, extending toward the <strong>Arkansas River</strong>. Areas like <strong>Battle Creek</strong> and <strong>Rocky Ridge</strong> feature newer construction with clear addressing. Several gated communities in this area require HOA coordination for legal entry.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">North Bixby / Memorial Corridor</h3>
                  <p className="text-gray-700 text-sm">
                    Established neighborhoods along <strong>Memorial Drive</strong> (Highway 169) between 91st Street and 111th Street. This commercial corridor includes major retail employers like <strong>Walmart Supercenter</strong> and <strong>Target</strong>. Residential areas feature mature trees and uniform addressing, making evening service highly effective.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Southeast Bixby / Master-Planned Communities</h3>
                  <p className="text-gray-700 text-sm">
                    Newer master-planned communities east of Elm Place and south of 111th Street. These subdivisions feature gated access, community amenities, and HOA management. We coordinate with HOA offices for legal entry or serve defendants at their workplaces when gate access is restricted.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Major Employers & Workplace Service in Bixby */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Major Employers &amp; Workplace Service in Bixby</h2>
              <p className="text-emerald-100">We serve at Bixby&apos;s major employers efficiently</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 max-w-3xl">
                Workplace service requires knowing shift schedules, HR office locations, and the best times to reach management staff. We maintain current contact information for Bixby&apos;s largest employers.
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
                    {bixbyEmployers.map((emp, i) => (
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

          {/* Bixby-Specific FAQ */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Bixby-Specific Questions</h2>
              <p className="text-amber-100">Answers to frequently asked questions about Bixby service</p>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Which courthouse do Bixby cases file in?</h3>
                  <p className="text-gray-600">
                    Bixby cases file in <strong>Tulsa County</strong> at the <strong>Tulsa County Courthouse</strong> (500 South Denver Avenue, Tulsa, OK 74103). Bixby Municipal Court at 201 West Madison Avenue handles city ordinance violations only. All civil, family, and felony matters go through Tulsa County District Court.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Can you serve papers at Bixby Public Schools?</h3>
                  <p className="text-gray-600">
                    Yes. The Bixby Public Schools administration building at 201 West Madison Avenue is the preferred location for workplace service involving district employees. Individual campus service is also possible, though the admin building streamlines the process for central office staff.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: How do you handle gated communities in South Bixby?</h3>
                  <p className="text-gray-600">
                    We verify gate codes and HOA access policies before attempting service in Bixby&apos;s gated subdivisions. For communities where gate access is restricted, we coordinate with HOA management offices or serve defendants at their workplaces during business hours.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Is same-day service available in Bixby?</h3>
                  <p className="text-gray-600">
                    Yes. Bixby is within our standard Tulsa metro service area. We provide standard, rush, and same-day service throughout all Bixby ZIP codes (74008 and surrounding areas). Call before noon for best same-day scheduling.
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
                Available 24/7 for urgent legal document service in Bixby
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
              <h2 className="text-2xl font-bold mb-2">Bixby Service Area Map</h2>
              <p className="text-blue-100">Professional process serving throughout Bixby, Oklahoma</p>
            </div>
            <div className="p-8">
              <GoogleMapsEmbed 
                countyName="Tulsa County"
                cityName="Bixby"
                state="Oklahoma"
                title="Bixby Process Server Service Area"
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
                    <li><Link href="/service-areas/jenks" className="text-blue-600 hover:underline">Jenks Process Server</Link></li>
                    <li><Link href="/service-areas/glenpool" className="text-blue-600 hover:underline">Glenpool Process Server</Link></li>
                    <li><Link href="/service-areas/broken-arrow" className="text-blue-600 hover:underline">Broken Arrow Process Server</Link></li>
                    <li><Link href="/counties/tulsa-county" className="text-blue-600 hover:underline">Tulsa County Process Server</Link></li>
                    <li><Link href="/service-areas/coweta" className="text-blue-600 hover:underline">Coweta Process Server</Link></li>
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
                Professional process serving in Bixby with competitive rates and 24/7 emergency service
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
