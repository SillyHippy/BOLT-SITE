import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Phone, MapPin, Clock, Award, DollarSign, Users, Building2, Shield, CheckCircle, Star, Calendar, FileText, Scale, AlertCircle } from 'lucide-react';

 

import GoogleMapsEmbed from '@/components/ui/google-maps-embed';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Process Server Sand Springs, OK',
  description:
    'Licensed process server in Sand Springs, OK. Same-day service available. GPS-tracked, court-ready affidavits. Serving all 77 OK counties. (539) 367-6832.',
  keywords: 'process server sand springs, legal document service sand springs, serve papers sand springs, court documents sand springs, subpoena service sand springs, eviction notice sand springs, emergency process server sand springs, 24/7 process server oklahoma, licensed process server tulsa county, professional process server sand springs',
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
    title: 'Process Server Sand Springs, OK',
    description:
    'Licensed process server in Sand Springs, OK. Same-day service available. GPS-tracked, court-ready affidavits. Serving all 77 OK counties. (539) 367-6832.',
    url: 'https://justlegalsolutions.org/service-areas/sand-springs',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Professional Process Server Sand Springs Oklahoma',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Sand Springs, OK',
    description:
    'Licensed process server in Sand Springs, OK. Same-day service available. GPS-tracked, court-ready affidavits. Serving all 77 OK counties. (539) 367-6832.',
    images: ['https://justlegalsolutions.org/og-image.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/sand-springs',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
  { name: 'Sand Springs', url: '/service-areas/sand-springs' },
];

const sandSpringsFAQs = [
  {
    question: "How much does a process server cost in Sand Springs?",
    answer: "Our professional process serving offers competitive rates with transparent pricing. We provide detailed quotes based on your specific needs. Contact us at (539) 367-6832 for current rates and service options, or visit our pricing page for complete information."
  },
  {
    question: "How long does it take to serve papers in Sand Springs?",
    answer: "Standard service in Sand Springs typically takes 2-4 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent situations."
  },
  {
    question: "Where are court documents filed for Sand Springs?",
    answer: "Court documents for Sand Springs are filed at the Tulsa County courthouse. We handle all filing requirements and provide detailed courthouse information with our service."
  },
  {
    question: "Can you serve papers on weekends in Sand Springs?",
    answer: "Yes, we offer weekend and evening service in Sand Springs for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays."
  },
  {
    question: "What areas of Sand Springs do you serve?",
    answer: "We serve all areas of Sand Springs including downtown Sand Springs, Prattville, Wekiwa, and all surrounding neighborhoods. Our coverage extends throughout Tulsa County."
  },
  {
    question: "Are you licensed to serve process in Sand Springs?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with Tulsa County. We maintain all required bonds and certifications for professional service throughout Oklahoma."
  },
  {
    question: "What types of legal documents do you serve in Sand Springs?",
    answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, and all other court-ordered service of process."
  },
  {
    question: "Do you provide skip tracing services in Sand Springs?",
    answer: "Yes, we offer professional skip tracing services in Sand Springs. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient."
  }
];

export default function SandSpringsProcessServer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="service"
          title="Just Legal Solutions - Sand Springs"
          description="Professional process serving in Sand Springs, Oklahoma with fast, reliable legal document delivery and 24/7 emergency service"
          url="https://justlegalsolutions.org/service-areas/sand-springs"
          breadcrumbItems={breadcrumbItems}
          location={{
            name: "Sand Springs",
            state: "Oklahoma",
            zipCode: "74063"
          }}
          services={["Process Serving", "Legal Document Delivery", "Court Filing Services", "Skip Tracing", "Emergency Rush Service", "GPS Tracked Delivery", "24/7 Emergency Service"]}
          faqItems={sandSpringsFAQs}
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
                    Process Server Sand Springs
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-200">Professional Legal Document Service</p>
                </div>
              </div>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Licensed, bonded, and insured process server in Sand Springs, Oklahoma. 
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
              <h2 className="text-2xl font-bold mb-2">Professional Process Serving in Sand Springs</h2>
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
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Local Sand Springs Area Expertise</li>
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
              <p className="text-teal-100">Common questions about process serving in Sand Springs</p>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {sandSpringsFAQs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Where We Serve Papers in Sand Springs */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Where We Serve Papers in Sand Springs</h2>
              <p className="text-indigo-100">Local expertise across every Sand Springs neighborhood</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Downtown Sand Springs / Main Street</h3>
                  <p className="text-gray-700 text-sm">
                    The historic core along Main Street and Broadway Avenue. Key landmarks: <strong>Sand Springs City Hall</strong> (100 East Pratt Street), <strong>Charles Page High School</strong> (500 North Adams Road), and the <strong>Case Community Park</strong> (1050 West Wekiwa Road) area. Older grid-style neighborhoods with visible front porches make daytime service efficient.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Prattville / Industrial West</h3>
                  <p className="text-gray-700 text-sm">
                    West Sand Springs along Highway 97 and the Prattville Road corridor. This area includes <strong>Webco Industries</strong> (9101 West 21st Street), <strong>Prattville Industrial Park</strong>, and working-class residential neighborhoods. Industrial shift schedules vary, so we attempt service across morning, afternoon, and evening windows.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">South Sand Springs / River Oaks</h3>
                  <p className="text-gray-700 text-sm">
                    Suburban neighborhoods south of 41st Street and east of Highway 97. The <strong>River Oaks</strong> and <strong>Southlake</strong> subdivisions feature newer homes with clear addressing and family demographics. <strong>Southlake Elementary</strong> and <strong>Garfield Elementary</strong> serve this area.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Keystone Lake &amp; Rural Sand Springs</h3>
                  <p className="text-gray-700 text-sm">
                    Southwest Sand Springs transitions into recreational and rural properties near <strong>Keystone Lake</strong>. Addresses along West 21st Street, West 41st Street, and Keystone Lake roads often feature long driveways and seasonal residency. We use satellite verification and pre-trip mapping for these properties.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Major Employers & Workplace Service in Sand Springs */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Major Employers &amp; Workplace Service in Sand Springs</h2>
              <p className="text-emerald-100">Webco Industries, Sand Springs Schools, and more</p>
            </div>
            <div className="p-8">
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
                    <tr>
                      <td className="px-4 py-3 font-medium">Webco Industries</td>
                      <td className="px-4 py-3">9101 West 21st Street, Sand Springs, OK 74063</td>
                      <td className="px-4 py-3">Manufacturing</td>
                      <td className="px-4 py-3">500+ employees; tubing and pipe manufacturing</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Sand Springs Public Schools</td>
                      <td className="px-4 py-3">S Highway 97, Sand Springs, OK 74063</td>
                      <td className="px-4 py-3">Education</td>
                      <td className="px-4 py-3">4,500+ students; admin at Charles Page High</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">St. John Health &amp; Wellness Center</td>
                      <td className="px-4 py-3">3916 South Highway 97, Sand Springs, OK 74063</td>
                      <td className="px-4 py-3">Healthcare</td>
                      <td className="px-4 py-3">200+ employees; medical campus</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">City of Sand Springs</td>
                      <td className="px-4 py-3">100 East Pratt Street, Sand Springs, OK 74063</td>
                      <td className="px-4 py-3">Government</td>
                      <td className="px-4 py-3">Municipal complex; city clerk available</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Walmart Supercenter</td>
                      <td className="px-4 py-3">220 North Sanders Street, Sand Springs, OK 74063</td>
                      <td className="px-4 py-3">Retail</td>
                      <td className="px-4 py-3">200+ employees; HR at rear of store</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Sand Springs-Specific FAQ */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Sand Springs-Specific Questions</h2>
              <p className="text-amber-100">Answers to frequently asked questions about Sand Springs service</p>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Which courthouse handles Sand Springs cases?</h3>
                  <p className="text-gray-600">
                    Sand Springs cases file in <strong>Tulsa County</strong> at the <strong>Tulsa County Courthouse</strong> (500 South Denver Avenue, Tulsa, OK 74103). Sand Springs Municipal Court at 100 East Pratt Street handles city ordinance violations only. All civil, family, and felony cases go through Tulsa County District Court.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: How do you handle industrial workplace service at Webco Industries?</h3>
                  <p className="text-gray-600">
                    Webco Industries operates multiple shifts at its 9101 West 21st Street facility. We attempt service through their HR department during standard business hours (8 AM – 5 PM) or at shift changes. If workplace service is impractical, we serve at the employee&apos;s residence in Sand Springs, Mannford, or Tulsa.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Do you serve rural properties near Keystone Lake?</h3>
                  <p className="text-gray-600">
                    Yes. Southwest Sand Springs properties near Keystone Lake often feature seasonal residency and long private driveways. We verify current occupancy through utility records and serve during peak residency periods (spring through fall). Winter service may require locating the owner&apos;s permanent residence.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Is same-day service available in Sand Springs?</h3>
                  <p className="text-gray-600">
                    Yes. Sand Springs is within our standard Tulsa metro service area. Same-day service and rush service are both available with standard scheduling.
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
                Available 24/7 for urgent legal document service in Sand Springs
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
              <h2 className="text-2xl font-bold mb-2">Sand Springs Service Area Map</h2>
              <p className="text-blue-100">Professional process serving throughout Sand Springs, Oklahoma</p>
            </div>
            <div className="p-8">
              <GoogleMapsEmbed 
                countyName="Tulsa County"
                state="Oklahoma"
                title="Sand Springs Process Server Service Area"
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
                    <li><Link href="/process-serving" className="text-blue-600 hover:text-blue-800 underline">process serving</Link>
                  <Link href="/tulsa-process-server" className="text-blue-600 hover:underline">Tulsa Process Server</Link></li>
                    <li><Link href="/service-areas/sapulpa" className="text-blue-600 hover:underline">Sapulpa Process Server</Link></li>
                    <li><Link href="/service-areas/skiatook" className="text-blue-600 hover:underline">Skiatook Process Server</Link></li>
                    <li><Link href="/counties/tulsa-county" className="text-blue-600 hover:underline">Tulsa County Process Server</Link></li>
                    <li><Link href="/counties/osage-county" className="text-blue-600 hover:underline">Osage County Process Server</Link></li>
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
                Professional process serving in Sand Springs with competitive rates and 24/7 emergency service
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
        </div>
      </main>
      <Footer />
    </div>
  );
}