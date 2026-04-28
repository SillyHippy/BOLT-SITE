import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building, CheckCircle, Star } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Bethany, OK | Licensed Oklahoma County Legal Service',
  description: 'Licensed process server in Bethany, Oklahoma. Home to Southern Nazarene University. GPS-tracked, court-ready document service. Call (539) 367-6832.',
  keywords: 'process server Bethany OK, serve papers Bethany Oklahoma, legal document service Bethany, subpoena service Bethany, Bethany process server, Oklahoma County process server, SNU',
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
    title: 'Process Server Bethany, OK | Licensed Oklahoma County Legal Service',
    description: 'Licensed process server in Bethany, Oklahoma. Home to Southern Nazarene University with GPS-tracked, court-ready document service. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/service-areas/bethany',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/image-pack/images/image-032-service-areas-card.webp',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Professional Process Server Bethany Oklahoma',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Bethany, OK | Licensed Oklahoma County Legal Service',
    description: 'Licensed process server in Bethany, Oklahoma. Home to Southern Nazarene University with GPS-tracked, court-ready document service. Call (539) 367-6832.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-032-service-areas-card.webp'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/bethany',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
  { name: 'Bethany', url: '/service-areas/bethany' },
];

const bethanyFAQs = [
  {
    question: "How much does a process server cost in Bethany?",
    answer: "Our professional process serving offers competitive rates with transparent pricing. Standard service starts at competitive flat rates with no hidden mileage fees within Oklahoma County. We provide detailed quotes based on your specific needs. Contact us at (539) 367-6832 for current rates and service options."
  },
  {
    question: "How long does it take to serve papers in Bethany?",
    answer: "Standard service in Bethany typically takes 2-4 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent situations. Bethany is approximately 15 minutes west of Oklahoma City, allowing for quick response times from our OKC metro base."
  },
  {
    question: "Where are court documents filed for Bethany cases?",
    answer: "Court documents for Bethany are filed at the Oklahoma County Courthouse (320 Robert S. Kerr Ave, Oklahoma City, OK 73102). Bethany Municipal Court handles city ordinance violations at City Hall (6710 NW 40th St). All civil, family, and felony matters go through Oklahoma County District Court in Oklahoma City."
  },
  {
    question: "Can you serve papers on weekends in Bethany?",
    answer: "Yes, we offer weekend and evening service in Bethany for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays. This is valuable for serving employees at major employers like Southern Nazarene University, Integris Southwest Medical Center, and retail locations."
  },
  {
    question: "What areas of Bethany do you serve?",
    answer: "We serve all areas of Bethany including Downtown Bethany along NW 39th Expressway and NW 40th Street, neighborhoods near Southern Nazarene University, residential areas around Bethany High School, and communities near Integris Southwest Medical Center. Our coverage extends throughout all Bethany ZIP codes (73008 and surrounding areas)."
  },
  {
    question: "Are you licensed to serve process in Bethany?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with Oklahoma County. We maintain all required bonds and certifications for professional service throughout Oklahoma including Oklahoma County and Canadian County."
  },
  {
    question: "What types of legal documents do you serve in Bethany?",
    answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, and all other court-ordered service of process."
  },
  {
    question: "Do you provide skip tracing services in Bethany?",
    answer: "Yes, we offer professional skip tracing services in Bethany. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient."
  },
];

const bethanyEmployers = [
  { name: 'Southern Nazarene University', address: '6729 E Bethany Rd, Bethany, OK 73008', industry: 'Education/University', notes: 'Private Christian university; 3,000+ students; 400+ faculty/staff; campus-wide service coordination through administration' },
  { name: 'Bethany Public Schools', address: '4718 N Mueller Ave, Bethany, OK 73008', industry: 'Education', notes: 'District administration building; 4,000+ students; preferred location for workplace service' },
  { name: 'Bethany High School', address: '4500 N Mueller Ave, Bethany, OK 73008', industry: 'Education', notes: '1,200+ students; grades 9-12; separate campus service available' },
  { name: 'City of Bethany', address: '6710 NW 40th St, Bethany, OK 73008', industry: 'Government', notes: 'Municipal complex; city clerk receives service; includes Municipal Court' },
  { name: 'Walmart Neighborhood Market', address: '7800 NW 23rd St, Bethany, OK 73008', industry: 'Retail', notes: '100+ employees; management office inside store; high-traffic location' },
  { name: 'Integris Southwest Medical Center', address: '4401 S Western Ave, Oklahoma City, OK 73109', industry: 'Healthcare', notes: 'Regional hospital serving Bethany area; 24-hour facility; HIPAA-compliant protocols; 1,000+ employees' },
];

export default function BethanyProcessServerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="service"
          title="Just Legal Solutions - Bethany"
          description="Professional process serving in Bethany, Oklahoma with fast, reliable legal document delivery and 24/7 emergency service"
          url="https://justlegalsolutions.org/service-areas/bethany"
          breadcrumbItems={breadcrumbItems}
          location={{
            name: "Bethany",
            state: "Oklahoma",
            zipCode: "73008"
          }}
          services={["Process Serving", "Legal Document Delivery", "Court Filing Services", "Skip Tracing", "Corporate Service", "Emergency Rush Service", "GPS Tracked Delivery", "24/7 Emergency Service"]}
          faqItems={bethanyFAQs}
        />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-2">
                    Process Server Bethany
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-200">Professional Legal Document Service | Oklahoma County</p>
                </div>
              </div>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Licensed, bonded, and insured process server in Bethany, Oklahoma. 
                Fast, reliable service throughout Oklahoma County with 24/7 emergency availability.
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
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">20,429</div>
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
              <h2 className="text-2xl font-bold mb-2">Drive Times from Bethany</h2>
              <p className="text-indigo-100">Convenient access to OKC metro and surrounding areas</p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">15 min</div>
                  <div className="text-gray-600">to OKC</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">20 min</div>
                  <div className="text-gray-600">to Yukon</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">25 min</div>
                  <div className="text-gray-600">to El Reno</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">20 min</div>
                  <div className="text-gray-600">to The Village</div>
                </div>
              </div>
            </div>
          </section>

          {/* Courthouse Info */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
              <h2 className="text-2xl font-bold mb-2">Courthouse & Filing Information</h2>
              <p className="text-slate-300">Bethany — Oklahoma County</p>
            </div>
            <div className="p-8 space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <p className="font-semibold text-lg text-gray-900">Oklahoma County Courthouse (County Seat)</p>
                <p className="text-gray-700">320 Robert S Kerr Ave, Oklahoma City, OK 73102</p>
                <p className="text-gray-600 text-sm mt-1">📞 (405) 713-1700</p>
                <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 5:00 PM</p>
                <p className="text-gray-600 text-sm mt-3">All district court civil, family, and felony cases for Bethany residents file here. Approximately 15 minutes southeast of Bethany.</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <p className="font-semibold text-lg text-gray-900">Bethany Municipal Court</p>
                <p className="text-gray-700">6710 NW 40th St, Bethany, OK 73008 (City Hall)</p>
                <p className="text-gray-600 text-sm mt-1">📞 (405) 789-2554</p>
                <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 5:00 PM</p>
                <p className="text-gray-600 text-sm mt-3">Municipal citations and city ordinance violations only. Located within Bethany City Hall on NW 40th Street.</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <p className="font-semibold text-orange-800">Local Service Notes</p>
                <p className="text-orange-700 text-sm">Bethany is in Oklahoma County with Oklahoma City serving as the county seat. All district court filings must be submitted at the Oklahoma County Courthouse downtown (approximately 15 minutes southeast). Municipal matters are handled at City Hall on NW 40th Street. The city is bordered by Oklahoma City on three sides.</p>
              </div>
            </div>
          </section>

          {/* Service Information */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Professional Process Serving in Bethany</h2>
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
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Local Bethany Area Expertise</li>
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

          {/* Where We Serve Papers in Bethany */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Where We Serve Papers in Bethany</h2>
              <p className="text-indigo-100">Local expertise across every Bethany neighborhood</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 max-w-3xl">
                Bethany is a compact suburban community in Oklahoma County, bordered by Oklahoma City on three sides. The city features a mix of residential neighborhoods, the Southern Nazarene University campus, and commercial corridors along NW 39th Expressway and NW 23rd Street.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Downtown Bethany / NW 39th Expressway</h3>
                  <p className="text-gray-700 text-sm">
                    The central business corridor along <strong>NW 39th Expressway</strong> and <strong>NW 40th Street</strong>. Key landmarks: <strong>Bethany City Hall</strong> (6710 NW 40th St), municipal offices, and local businesses. The municipal heart of Bethany with established residential neighborhoods nearby. Easy access from the expressway.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Southern Nazarene University Campus</h3>
                  <p className="text-gray-700 text-sm">
                    The <strong>Southern Nazarene University</strong> campus (6729 E Bethany Rd) is a prominent landmark and major employer. Private Christian university with 3,000+ students and 400+ faculty/staff. Campus service is coordinated through the administration building. Surrounding area features student housing and faculty residences.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">School District / Mueller Avenue</h3>
                  <p className="text-gray-700 text-sm">
                    Educational corridor along <strong>Mueller Avenue</strong> featuring <strong>Bethany Public Schools Administration</strong> (4718 N Mueller Ave) and <strong>Bethany High School</strong> (4500 N Mueller Ave). High-traffic area during school hours. Residential neighborhoods surround the school campuses with clear addressing and good access.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">NW 23rd Street / Retail Corridor</h3>
                  <p className="text-gray-700 text-sm">
                    Commercial corridor along <strong>NW 23rd Street</strong> featuring <strong>Walmart Neighborhood Market</strong> (7800 NW 23rd St), restaurants, and retail. High-traffic employment area with significant daytime activity. Residential neighborhoods extend north and south from this commercial hub.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Major Employers & Workplace Service in Bethany */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Major Employers &amp; Workplace Service in Bethany</h2>
              <p className="text-emerald-100">We serve at Bethany&apos;s major employers efficiently</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 max-w-3xl">
                Workplace service requires knowing shift schedules, HR office locations, and the best times to reach management staff. We maintain current contact information for Bethany&apos;s largest employers including the university campus and medical facilities serving the area.
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
                    {bethanyEmployers.map((emp, i) => (
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

          {/* Bethany-Specific FAQ */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Bethany-Specific Questions</h2>
              <p className="text-amber-100">Answers to frequently asked questions about Bethany service</p>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Which courthouse do Bethany cases file in?</h3>
                  <p className="text-gray-600">
                    Bethany cases file in <strong>Oklahoma County</strong> at the <strong>Oklahoma County Courthouse</strong> (320 Robert S Kerr Ave, Oklahoma City, OK 73102). <strong>Bethany Municipal Court</strong> at 6710 NW 40th St (City Hall) handles city ordinance violations only. All civil, family, and felony matters go through Oklahoma County District Court in downtown Oklahoma City (approximately 15 minutes southeast).
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Can you serve papers at Southern Nazarene University?</h3>
                  <p className="text-gray-600">
                    Yes. <strong>Southern Nazarene University</strong> (6729 E Bethany Rd) is a private Christian university with 3,000+ students and 400+ faculty/staff. Service is coordinated through the university administration building during business hours. We understand academic calendars and can adjust timing around breaks, finals, and peak class periods.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: How is service handled at Integris Southwest Medical Center?</h3>
                  <p className="text-gray-600">
                    We serve at <strong>Integris Southwest Medical Center</strong> (4401 S Western Ave, Oklahoma City), which serves the Bethany area. This 24-hour regional hospital employs 1,000+ people. Healthcare worker service typically occurs through the HR department during business hours or via shift-change coordination. We understand hospital security protocols and parking access on Western Avenue.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Is same-day service available in Bethany?</h3>
                  <p className="text-gray-600">
                    Yes. Bethany is approximately 15 minutes west of Oklahoma City and within our standard OKC metro service area. We provide standard, rush, and same-day service throughout all Bethany ZIP codes (73008). Call before noon for best same-day scheduling.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-teal-100">Common questions about process serving in Bethany</p>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {bethanyFAQs.slice(0, 6).map((faq, index) => (
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
              <Link href="/service-areas/oklahoma-city" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Oklahoma City →</h3>
                <p className="text-gray-600 text-sm mt-1">15 miles east. County seat and major metro hub.</p>
              </Link>
              <Link href="/service-areas/yukon" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Yukon →</h3>
                <p className="text-gray-600 text-sm mt-1">20 miles west. Canadian County. Population 25,529.</p>
              </Link>
              <Link href="/service-areas/the-village" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">The Village →</h3>
                <p className="text-gray-600 text-sm mt-1">15 miles east. Oklahoma County suburb.</p>
              </Link>
              <Link href="/service-areas/warr-acres" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Warr Acres →</h3>
                <p className="text-gray-600 text-sm mt-1">10 miles southeast. Oklahoma County community.</p>
              </Link>
              <Link href="/counties/oklahoma-county" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Oklahoma County →</h3>
                <p className="text-gray-600 text-sm mt-1">Full county coverage including OKC courthouse.</p>
              </Link>
            </div>
          </section>

          {/* Emergency Contact Section */}
          <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-8 text-center">
              <AlertCircle className="h-16 w-16 mx-auto mb-6 text-red-200" />
              <h2 className="text-3xl font-bold mb-4">Need Emergency Process Service in Bethany?</h2>
              <p className="text-xl mb-6 text-red-100">
                Available 24/7 for urgent legal document service in Bethany and Oklahoma County
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
              <h2 className="text-2xl font-bold mb-2">Bethany Service Area Map</h2>
              <p className="text-blue-100">Professional process serving throughout Bethany, Oklahoma</p>
            </div>
            <div className="p-8">
              <GoogleMapsEmbed 
                countyName="Oklahoma County"
                cityName="Bethany"
                state="Oklahoma"
                title="Bethany Process Server Service Area"
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
                    <li><Link href="/service-areas/oklahoma-city" className="text-blue-600 hover:underline">Oklahoma City Process Server</Link></li>
                    <li><Link href="/service-areas/yukon" className="text-blue-600 hover:underline">Yukon Process Server</Link></li>
                    <li><Link href="/service-areas/mustang" className="text-blue-600 hover:underline">Mustang Process Server</Link></li>
                    <li><Link href="/service-areas/el-reno" className="text-blue-600 hover:underline">El Reno Process Server</Link></li>
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
                Professional process serving in Bethany with competitive rates and 24/7 emergency service
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
