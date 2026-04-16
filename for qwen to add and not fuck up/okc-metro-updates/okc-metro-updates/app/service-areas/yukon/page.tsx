import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building, CheckCircle, Star } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Yukon, OK | Licensed Canadian County Legal Service',
  description: 'Licensed process server in Yukon, Oklahoma. Canadian County seat. GPS-tracked, court-ready document service. Call (539) 367-6832.',
  keywords: 'process server Yukon OK, serve papers Yukon Oklahoma, legal document service Yukon, subpoena service Yukon, Yukon process server, Canadian County process server',
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
    title: 'Process Server Yukon, OK | Licensed Canadian County Legal Service',
    description: 'Licensed process server in Yukon, Oklahoma. Canadian County seat with GPS-tracked, court-ready document service. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/service-areas/yukon',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Professional Process Server Yukon Oklahoma',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Yukon, OK | Licensed Canadian County Legal Service',
    description: 'Licensed process server in Yukon, Oklahoma. Canadian County seat with GPS-tracked, court-ready document service. Call (539) 367-6832.',
    images: ['https://justlegalsolutions.org/og-image.webp'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/yukon',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
  { name: 'Yukon', url: '/service-areas/yukon' },
];

const yukonFAQs = [
  {
    question: "How much does a process server cost in Yukon?",
    answer: "Our professional process serving offers competitive rates with transparent pricing. Standard service starts at competitive flat rates with no hidden mileage fees within Canadian County. We provide detailed quotes based on your specific needs. Contact us at (539) 367-6832 for current rates and service options."
  },
  {
    question: "How long does it take to serve papers in Yukon?",
    answer: "Standard service in Yukon typically takes 2-4 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent situations. Yukon is approximately 15 minutes west of Oklahoma City, allowing for quick response times from our OKC metro base."
  },
  {
    question: "Where are court documents filed for Yukon cases?",
    answer: "Court documents for Yukon are filed at the Canadian County Courthouse (301 N Choctaw Ave, El Reno, OK 73036). El Reno is the Canadian County seat. Yukon Municipal Court handles city ordinance violations at City Hall (500 W Main St). All civil, family, and felony matters go through Canadian County District Court in El Reno."
  },
  {
    question: "Can you serve papers on weekends in Yukon?",
    answer: "Yes, we offer weekend and evening service in Yukon for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays. This is valuable for serving employees at major employers like Walmart Supercenter and Integris Canadian Valley Hospital."
  },
  {
    question: "What areas of Yukon do you serve?",
    answer: "We serve all areas of Yukon including Downtown Yukon, neighborhoods along Yukon Avenue and Garth Brooks Boulevard, residential areas near Yukon High School, and communities around Integris Canadian Valley Hospital. Our coverage extends throughout all Yukon ZIP codes (73099 and surrounding areas)."
  },
  {
    question: "Are you licensed to serve process in Yukon?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with Canadian County. We maintain all required bonds and certifications for professional service throughout Oklahoma including Canadian County and Oklahoma County."
  },
  {
    question: "What types of legal documents do you serve in Yukon?",
    answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, and all other court-ordered service of process."
  },
  {
    question: "Do you provide skip tracing services in Yukon?",
    answer: "Yes, we offer professional skip tracing services in Yukon. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient."
  },
];

const yukonEmployers = [
  { name: 'Yukon Public Schools', address: '600 Yukon Ave, Yukon, OK 73099', industry: 'Education', notes: 'District administration building; 9,000+ students; preferred location for workplace service' },
  { name: 'Yukon High School', address: '1777 S Yukon Pkwy, Yukon, OK 73099', industry: 'Education', notes: '2,500+ students; separate campus service available' },
  { name: 'Integris Canadian Valley Hospital', address: '1201 N Country Club Rd, Yukon, OK 73099', industry: 'Healthcare', notes: 'Major medical center; 500+ employees; HIPAA-compliant protocols; 24-hour facility' },
  { name: 'City of Yukon', address: '500 W Main St, Yukon, OK 73099', industry: 'Government', notes: 'Municipal complex; city clerk receives service; includes Municipal Court' },
  { name: 'Walmart Supercenter', address: '1200 Garth Brooks Blvd, Yukon, OK 73099', industry: 'Retail', notes: '250+ employees; management office inside store; high-traffic location' },
  { name: 'Express Clydesdales', address: '12701 W Wilshire Blvd, Yukon, OK 73099', industry: 'Agriculture/Tourism', notes: 'Popular attraction; 50+ employees; seasonal variations in staffing' },
  { name: 'Yukon Community Center', address: '2200 S Holly Ave, Yukon, OK 73099', industry: 'Recreation', notes: 'Community facility; city programs and events; front desk during business hours' },
];

export default function YukonProcessServerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="service"
          title="Just Legal Solutions - Yukon"
          description="Professional process serving in Yukon, Oklahoma with fast, reliable legal document delivery and 24/7 emergency service"
          url="https://justlegalsolutions.org/service-areas/yukon"
          breadcrumbItems={breadcrumbItems}
          location={{
            name: "Yukon",
            state: "Oklahoma",
            zipCode: "73099"
          }}
          services={["Process Serving", "Legal Document Delivery", "Court Filing Services", "Skip Tracing", "Corporate Service", "Emergency Rush Service", "GPS Tracked Delivery", "24/7 Emergency Service"]}
          faqItems={yukonFAQs}
        />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-2">
                    Process Server Yukon
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-200">Professional Legal Document Service | Canadian County</p>
                </div>
              </div>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Licensed, bonded, and insured process server in Yukon, Oklahoma. 
                Fast, reliable service throughout Canadian County with 24/7 emergency availability.
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
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">25,529</div>
                  <div className="text-sm text-blue-100">Population</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">15 min</div>
                  <div className="text-sm text-blue-100">from OKC</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">Same Day</div>
                  <div className="text-sm text-blue-100">Rush Available</div>
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
          {/* Drive Times */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Drive Times from Yukon</h2>
              <p className="text-indigo-100">Convenient access to OKC metro and Canadian County</p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">15 min</div>
                  <div className="text-gray-600">to OKC</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">25 min</div>
                  <div className="text-gray-600">to El Reno (County Seat)</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">20 min</div>
                  <div className="text-gray-600">to Mustang</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">30 min</div>
                  <div className="text-gray-600">to Bethany</div>
                </div>
              </div>
            </div>
          </section>

          {/* Courthouse Info */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
              <h2 className="text-2xl font-bold mb-2">Courthouse & Filing Information</h2>
              <p className="text-slate-300">Yukon — Canadian County</p>
            </div>
            <div className="p-8 space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <p className="font-semibold text-lg text-gray-900">Canadian County Courthouse (County Seat)</p>
                <p className="text-gray-700">301 N Choctaw Ave, El Reno, OK 73036</p>
                <p className="text-gray-600 text-sm mt-1">📞 (405) 262-1070</p>
                <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 4:30 PM</p>
                <p className="text-gray-600 text-sm mt-3">All district court civil, family, and felony cases for Yukon residents file here in El Reno, the Canadian County seat.</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <p className="font-semibold text-lg text-gray-900">Yukon Municipal Court</p>
                <p className="text-gray-700">500 W Main St, Yukon, OK 73099 (City Hall)</p>
                <p className="text-gray-600 text-sm mt-1">📞 (405) 354-6310</p>
                <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 5:00 PM</p>
                <p className="text-gray-600 text-sm mt-3">Municipal citations and city ordinance violations only. Located within Yukon City Hall.</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <p className="font-semibold text-orange-800">Local Service Notes</p>
                <p className="text-orange-700 text-sm">Yukon is the largest city in Canadian County but El Reno serves as the county seat. All district court filings must be submitted in El Reno (25 miles west). Municipal matters are handled at Yukon City Hall on Main Street.</p>
              </div>
            </div>
          </section>

          {/* Service Information */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Professional Process Serving in Yukon</h2>
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
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Local Yukon Area Expertise</li>
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

          {/* Where We Serve Papers in Yukon */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Where We Serve Papers in Yukon</h2>
              <p className="text-indigo-100">Local expertise across every Yukon neighborhood</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 max-w-3xl">
                Yukon is one of the fastest-growing cities in Canadian County, located just west of Oklahoma City. From the historic downtown district along Main Street to newer residential developments, our servers know every area including the hospital district, school zones, and commercial corridors.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Downtown Yukon / Main Street District</h3>
                  <p className="text-gray-700 text-sm">
                    The historic town center along <strong>Main Street</strong> (Route 66) between 4th Street and 12th Street. Key landmarks: <strong>Yukon City Hall</strong> (500 W Main St), <strong>Yukon Public Schools Administration</strong> (600 Yukon Ave), and the <strong>Yukon Veterans Memorial</strong>. Historic buildings and local businesses with visible front access.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Yukon Parkway / School District</h3>
                  <p className="text-gray-700 text-sm">
                    Educational corridor along <strong>Yukon Parkway</strong> featuring <strong>Yukon High School</strong> (1777 S Yukon Pkwy) and surrounding residential neighborhoods. High-traffic area during school hours. Residential developments extend south toward the Canadian River.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Garth Brooks Blvd / Retail Corridor</h3>
                  <p className="text-gray-700 text-sm">
                    Major commercial corridor along <strong>Garth Brooks Boulevard</strong> featuring <strong>Walmart Supercenter</strong> (1200 Garth Brooks Blvd), restaurants, and retail. High-traffic employment area with shift workers requiring flexible service timing.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Hospital / Medical District</h3>
                  <p className="text-gray-700 text-sm">
                    Medical area around <strong>Integris Canadian Valley Hospital</strong> (1201 N Country Club Rd) and <strong>Yukon Community Center</strong> (2200 S Holly Ave). 24-hour facility requiring HIPAA-compliant service protocols. Residential neighborhoods surround the medical district.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Major Employers & Workplace Service in Yukon */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Major Employers &amp; Workplace Service in Yukon</h2>
              <p className="text-emerald-100">We serve at Yukon&apos;s major employers efficiently</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 max-w-3xl">
                Workplace service requires knowing shift schedules, HR office locations, and the best times to reach management staff. We maintain current contact information for Yukon&apos;s largest employers.
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
                    {yukonEmployers.map((emp, i) => (
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

          {/* Yukon-Specific FAQ */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Yukon-Specific Questions</h2>
              <p className="text-amber-100">Answers to frequently asked questions about Yukon service</p>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Which courthouse do Yukon cases file in?</h3>
                  <p className="text-gray-600">
                    Yukon cases file in <strong>Canadian County</strong> at the <strong>Canadian County Courthouse</strong> in <strong>El Reno</strong> (301 N Choctaw Ave, El Reno, OK 73036). El Reno is the Canadian County seat. Yukon Municipal Court at 500 W Main St (City Hall) handles city ordinance violations only. All civil, family, and felony matters go through Canadian County District Court in El Reno.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Can you serve papers at Yukon Public Schools?</h3>
                  <p className="text-gray-600">
                    Yes. The <strong>Yukon Public Schools</strong> administration building at <strong>600 Yukon Ave</strong> is the preferred location for workplace service involving district employees. Individual campus service is also possible, though the admin building streamlines the process for central office staff. <strong>Yukon High School</strong> (1777 S Yukon Pkwy) is a separate campus with 2,500+ students.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: How do you handle serving at Integris Canadian Valley Hospital?</h3>
                  <p className="text-gray-600">
                    We serve at <strong>Integris Canadian Valley Hospital</strong> (1201 N Country Club Rd) following HIPAA-compliant protocols. This 24-hour facility employs 500+ people. Healthcare worker service typically occurs through the HR department during business hours or via shift-change coordination. We understand hospital security protocols and parking access.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Is same-day service available in Yukon?</h3>
                  <p className="text-gray-600">
                    Yes. Yukon is approximately 15 minutes west of Oklahoma City and within our standard OKC metro service area. We provide standard, rush, and same-day service throughout all Yukon ZIP codes (73099). Call before noon for best same-day scheduling.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-teal-100">Common questions about process serving in Yukon</p>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {yukonFAQs.slice(0, 6).map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Internal Links to Nearby Service Areas */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Nearby Service Areas</h2>
              <p className="text-purple-100">We also serve these surrounding communities</p>
            </div>
            <div className="p-8 grid md:grid-cols-3 gap-4">
              <Link href="/oklahoma-city-process-server" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Oklahoma City →</h3>
                <p className="text-gray-600 text-sm mt-1">15 miles east. Major metro center and OKC metro hub.</p>
              </Link>
              <Link href="/service-areas/mustang" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Mustang →</h3>
                <p className="text-gray-600 text-sm mt-1">12 miles south. Canadian County suburb. Population 22,192.</p>
              </Link>
              <Link href="/service-areas/bethany" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Bethany →</h3>
                <p className="text-gray-600 text-sm mt-1">20 miles southeast. Oklahoma County. SNU campus.</p>
              </Link>
              <Link href="/service-areas/el-reno" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">El Reno →</h3>
                <p className="text-gray-600 text-sm mt-1">25 miles west. Canadian County seat. Courthouse location.</p>
              </Link>
              <Link href="/counties/canadian-county" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Canadian County →</h3>
                <p className="text-gray-600 text-sm mt-1">Full county coverage including all Canadian County courts.</p>
              </Link>
            </div>
          </section>

          {/* Emergency Contact Section */}
          <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-8 text-center">
              <AlertCircle className="h-16 w-16 mx-auto mb-6 text-red-200" />
              <h2 className="text-3xl font-bold mb-4">Need Emergency Process Service in Yukon?</h2>
              <p className="text-xl mb-6 text-red-100">
                Available 24/7 for urgent legal document service in Yukon and Canadian County
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
              <h2 className="text-2xl font-bold mb-2">Yukon Service Area Map</h2>
              <p className="text-blue-100">Professional process serving throughout Yukon, Oklahoma</p>
            </div>
            <div className="p-8">
              <GoogleMapsEmbed 
                countyName="Canadian County"
                cityName="Yukon"
                state="Oklahoma"
                title="Yukon Process Server Service Area"
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
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">📍 OKC Metro Areas</h3>
                  <ul className="space-y-2">
                    <li><Link href="/oklahoma-city-process-server" className="text-blue-600 hover:underline">Oklahoma City Process Server</Link></li>
                    <li><Link href="/service-areas/mustang" className="text-blue-600 hover:underline">Mustang Process Server</Link></li>
                    <li><Link href="/service-areas/bethany" className="text-blue-600 hover:underline">Bethany Process Server</Link></li>
                    <li><Link href="/service-areas/moore" className="text-blue-600 hover:underline">Moore Process Server</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">📚 Helpful Guides</h3>
                  <ul className="space-y-2">
                    <li><Link href="/oklahoma-process-server-faq" className="text-blue-600 hover:underline">Process Serving FAQ 2026</Link></li>
                    <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">Oklahoma Process Server Laws</Link></li>
                    <li><Link href="/oklahoma-process-server-pricing" className="text-blue-600 hover:underline">Pricing Guide</Link></li>
                    <li><Link href="/family-law-service-guide-oklahoma" className="text-blue-600 hover:underline">Family Law Service Guide</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">🏢 Our Services</h3>
                  <ul className="space-y-2">
                    <li><Link href="/law-firm-services" className="text-blue-600 hover:underline">Law Firm Services</Link></li>
                    <li><Link href="/weekend-emergency" className="text-blue-600 hover:underline">Emergency Process Service</Link></li>
                    <li><Link href="/about" className="text-blue-600 hover:underline">About Just Legal Solutions</Link></li>
                    <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
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
                Professional process serving in Yukon with competitive rates and 24/7 emergency service
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
