import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building, CheckCircle, Star } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Midwest City, OK | Licensed Oklahoma County Legal Service',
  description: 'Licensed process server in Midwest City, Oklahoma. Home to Tinker Air Force Base. GPS-tracked, court-ready document service. Call (539) 367-6832.',
  keywords: 'process server Midwest City OK, serve papers Midwest City Oklahoma, legal document service Midwest City, subpoena service Tinker AFB, Midwest City process server, Oklahoma County process server',
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
    title: 'Process Server Midwest City, OK | Licensed Oklahoma County Legal Service',
    description: 'Licensed process server in Midwest City, Oklahoma. Home to Tinker Air Force Base with GPS-tracked, court-ready document service. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/service-areas/midwest-city',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Professional Process Server Midwest City Oklahoma',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Midwest City, OK | Licensed Oklahoma County Legal Service',
    description: 'Licensed process server in Midwest City, Oklahoma. Home to Tinker Air Force Base with GPS-tracked, court-ready document service. Call (539) 367-6832.',
    images: ['https://justlegalsolutions.org/og-image.webp'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/midwest-city',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
  { name: 'Midwest City', url: '/service-areas/midwest-city' },
];

const midwestCityFAQs = [
  {
    question: "How much does a process server cost in Midwest City?",
    answer: "Our professional process serving offers competitive rates with transparent pricing. Standard service starts at competitive flat rates with no hidden mileage fees within Oklahoma County. We provide detailed quotes based on your specific needs. Contact us at (539) 367-6832 for current rates and service options."
  },
  {
    question: "How long does it take to serve papers in Midwest City?",
    answer: "Standard service in Midwest City typically takes 2-4 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent situations. Midwest City is approximately 10-15 minutes east of Oklahoma City, allowing for quick response times."
  },
  {
    question: "Where are court documents filed for Midwest City cases?",
    answer: "Court documents for Midwest City are filed at the Oklahoma County Courthouse (320 Robert S. Kerr Ave, Oklahoma City, OK 73102). Midwest City Municipal Court handles city ordinance violations at City Hall (100 E Main St). All civil, family, and felony matters go through Oklahoma County District Court in Oklahoma City."
  },
  {
    question: "Can you serve papers on weekends in Midwest City?",
    answer: "Yes, we offer weekend and evening service in Midwest City for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays. This is valuable for serving employees at major employers like Tinker Air Force Base, Boeing Defense, and Rose State College."
  },
  {
    question: "What areas of Midwest City do you serve?",
    answer: "We serve all areas of Midwest City including Downtown Midwest City along Main Street, neighborhoods near Tinker Air Force Base, residential areas along SE 15th Street, and communities around Rose State College. Our coverage extends throughout all Midwest City ZIP codes (73110, 73130, 73141 and surrounding areas)."
  },
  {
    question: "Are you licensed to serve process in Midwest City?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with Oklahoma County. We maintain all required bonds and certifications for professional service throughout Oklahoma including Oklahoma County. We are also experienced with federal installation service protocols for Tinker AFB."
  },
  {
    question: "What types of legal documents do you serve in Midwest City?",
    answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, and all other court-ordered service of process. We are experienced with military and federal employee service requirements."
  },
  {
    question: "Do you provide skip tracing services in Midwest City?",
    answer: "Yes, we offer professional skip tracing services in Midwest City. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient. This is particularly valuable for transient military populations associated with Tinker AFB."
  },
];

const midwestCityEmployers = [
  { name: 'Tinker Air Force Base', address: '7600 1st St, Midwest City, OK 73145', industry: 'Military/Federal', notes: '26,000+ military/civilian personnel; DOD ID required for base access; coordinate with base legal office; largest single-site employer in Oklahoma' },
  { name: 'Boeing Defense, Space & Security', address: '4200 SE 10th St, Midwest City, OK 73110', industry: 'Aerospace/Defense', notes: 'Major defense contractor; 3,000+ employees; off-base facility near Tinker AFB; security protocols required' },
  { name: 'Rose State College', address: '6420 SE 15th St, Midwest City, OK 73110', industry: 'Education', notes: 'Community college; 8,000+ students; 500+ faculty/staff; public campus with administration building' },
  { name: 'Mid-Del Public Schools', address: '7217 SE 15th St, Midwest City, OK 73110', industry: 'Education', notes: 'District administration; 14,000+ students; serves Midwest City and Del City; admin building preferred for service' },
  { name: 'City of Midwest City', address: '100 E Main St, Midwest City, OK 73110', industry: 'Government', notes: 'Municipal complex; city clerk receives service; includes Municipal Court; downtown location' },
  { name: 'Walmart Supercenter', address: '7535 SE 15th St, Midwest City, OK 73110', industry: 'Retail', notes: '200+ employees; management office inside store; high-traffic location on SE 15th' },
  { name: 'Reed Center', address: '5800 Will Rogers Rd, Midwest City, OK 73110', industry: 'Conference/Events', notes: 'Conference center and event venue; city-owned facility; administrative offices on-site' },
];

export default function MidwestCityProcessServerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="service"
          title="Just Legal Solutions - Midwest City"
          description="Professional process serving in Midwest City, Oklahoma with fast, reliable legal document delivery and 24/7 emergency service. Tinker AFB service specialists."
          url="https://justlegalsolutions.org/service-areas/midwest-city"
          breadcrumbItems={breadcrumbItems}
          location={{
            name: "Midwest City",
            state: "Oklahoma",
            zipCode: "73110"
          }}
          services={["Process Serving", "Legal Document Delivery", "Court Filing Services", "Skip Tracing", "Corporate Service", "Emergency Rush Service", "GPS Tracked Delivery", "24/7 Emergency Service", "Military Installation Service"]}
          faqItems={midwestCityFAQs}
        />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-2">
                    Process Server Midwest City
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-200">Professional Legal Document Service | Tinker AFB Specialists</p>
                </div>
              </div>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Licensed, bonded, and insured process server in Midwest City, Oklahoma. 
                Specialists in Tinker Air Force Base service. Fast, reliable service throughout 
                Oklahoma County with 24/7 emergency availability.
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
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">58,145</div>
                  <div className="text-sm text-blue-100">Population</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">20 min</div>
                  <div className="text-sm text-blue-100">from OKC</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">Tinker AFB</div>
                  <div className="text-sm text-blue-100">Service Specialists</div>
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
              <h2 className="text-2xl font-bold mb-2">Drive Times from Midwest City</h2>
              <p className="text-indigo-100">Convenient access to OKC metro and surrounding areas</p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">20 min</div>
                  <div className="text-gray-600">to OKC</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">25 min</div>
                  <div className="text-gray-600">to Moore</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">10 min</div>
                  <div className="text-gray-600">to Del City</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">30 min</div>
                  <div className="text-gray-600">to Norman</div>
                </div>
              </div>
            </div>
          </section>

          {/* Courthouse Info */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
              <h2 className="text-2xl font-bold mb-2">Courthouse & Filing Information</h2>
              <p className="text-slate-300">Midwest City — Oklahoma County</p>
            </div>
            <div className="p-8 space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <p className="font-semibold text-lg text-gray-900">Oklahoma County Courthouse (County Seat)</p>
                <p className="text-gray-700">320 Robert S Kerr Ave, Oklahoma City, OK 73102</p>
                <p className="text-gray-600 text-sm mt-1">📞 (405) 713-1700</p>
                <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 5:00 PM</p>
                <p className="text-gray-600 text-sm mt-3">All district court civil, family, and felony cases for Midwest City residents file here. Approximately 20 minutes west of Midwest City.</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <p className="font-semibold text-lg text-gray-900">Midwest City Municipal Court</p>
                <p className="text-gray-700">100 E Main St, Midwest City, OK 73110 (City Hall)</p>
                <p className="text-gray-600 text-sm mt-1">📞 (405) 739-1221</p>
                <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 5:00 PM</p>
                <p className="text-gray-600 text-sm mt-3">Municipal citations and city ordinance violations only. Located within Midwest City Hall in downtown area.</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <p className="font-semibold text-orange-800">Local Service Notes</p>
                <p className="text-orange-700 text-sm">Midwest City is in Oklahoma County with Oklahoma City serving as the county seat. All district court filings must be submitted at the Oklahoma County Courthouse downtown (approximately 20 minutes west). Municipal matters are handled at City Hall on Main Street. Tinker AFB legal matters may involve both federal and state court systems.</p>
              </div>
            </div>
          </section>

          {/* Service Information */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Professional Process Serving in Midwest City</h2>
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
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Tinker AFB Service Specialists</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Military & Federal Experience</li>
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

          {/* Where We Serve Papers in Midwest City */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Where We Serve Papers in Midwest City</h2>
              <p className="text-indigo-100">Local expertise across every Midwest City neighborhood</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 max-w-3xl">
                Midwest City is a major suburban community east of Oklahoma City, anchored by Tinker Air Force Base. The city features diverse neighborhoods from military housing areas to established residential communities, with major retail and educational corridors along SE 15th Street.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Tinker AFB / Military Community</h3>
                  <p className="text-gray-700 text-sm">
                    The <strong>Tinker Air Force Base</strong> area (7600 1st St) is the economic and community anchor of Midwest City. We specialize in serving military personnel and civilian employees both on-base (with proper access) and off-base in surrounding neighborhoods. Military housing areas extend into nearby residential communities. Federal service protocols apply for on-base service.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Downtown Midwest City / Main Street</h3>
                  <p className="text-gray-700 text-sm">
                    The historic town center along <strong>Main Street</strong> between Air Depot and Midwest Boulevard. Key landmarks: <strong>Midwest City Hall</strong> (100 E Main St), <strong>Reed Center</strong> (5800 Will Rogers Rd), and historic downtown businesses. Established residential neighborhoods surround the downtown area.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">SE 15th Street / Education Corridor</h3>
                  <p className="text-gray-700 text-sm">
                    Major east-west corridor featuring <strong>Rose State College</strong> (6420 SE 15th St), <strong>Mid-Del Public Schools Administration</strong> (7217 SE 15th St), and <strong>Walmart Supercenter</strong> (7535 SE 15th St). High-traffic employment and education zone with multiple service opportunities during business hours.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Residential Neighborhoods / Boeing Area</h3>
                  <p className="text-gray-700 text-sm">
                    Established residential areas near <strong>Boeing Defense</strong> (4200 SE 10th St) and throughout the community. Mix of military families, aerospace workers, and long-time residents. Quiet neighborhoods with single-family homes effective for evening service. <strong>Boeing</strong> facility is a major off-base employer with security protocols.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Major Employers & Workplace Service in Midwest City */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Major Employers &amp; Workplace Service in Midwest City</h2>
              <p className="text-emerald-100">We serve at Midwest City&apos;s major employers efficiently</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 max-w-3xl">
                Midwest City&apos;s economy is dominated by Tinker Air Force Base and related aerospace/defense industries. Workplace service requires understanding military protocols, shift schedules, and base access requirements. We maintain current contact information for Midwest City&apos;s largest employers including Tinker AFB coordination procedures.
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
                    {midwestCityEmployers.map((emp, i) => (
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

          {/* Midwest City-Specific FAQ */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Midwest City-Specific Questions</h2>
              <p className="text-amber-100">Answers to frequently asked questions about Midwest City service</p>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Which courthouse do Midwest City cases file in?</h3>
                  <p className="text-gray-600">
                    Midwest City cases file in <strong>Oklahoma County</strong> at the <strong>Oklahoma County Courthouse</strong> (320 Robert S Kerr Ave, Oklahoma City, OK 73102). <strong>Midwest City Municipal Court</strong> at 100 E Main St (City Hall) handles city ordinance violations only. All civil, family, and felony matters go through Oklahoma County District Court in downtown Oklahoma City (approximately 20 minutes west).
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Can you serve papers at Tinker Air Force Base?</h3>
                  <p className="text-gray-600">
                    Yes, we are Tinker AFB service specialists. <strong>Tinker Air Force Base</strong> (7600 1st St) has 26,000+ military and civilian personnel. Service on-base requires DOD ID or escort pass, and we coordinate with the base legal office. Off-base service is often more efficient for military personnel residing in nearby communities. We understand federal service of process requirements for military installations.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: How is service handled at Boeing Defense?</h3>
                  <p className="text-gray-600">
                    We serve at <strong>Boeing Defense, Space & Security</strong> (4200 SE 10th St), a major off-base aerospace facility with 3,000+ employees. This secure facility requires coordination with Boeing security and HR. We understand shift schedules for manufacturing and engineering staff, and coordinate service through appropriate channels for this defense contractor facility.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Can you serve at Rose State College?</h3>
                  <p className="text-gray-600">
                    Yes. <strong>Rose State College</strong> (6420 SE 15th St) is a public community college with 8,000+ students and 500+ faculty/staff. As a public campus, service is coordinated through the administration building during business hours. We understand academic calendars and can adjust timing around breaks and peak class periods.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Is same-day service available in Midwest City?</h3>
                  <p className="text-gray-600">
                    Yes. Midwest City is approximately 10-20 minutes from Oklahoma City and within our standard OKC metro service area. We provide standard, rush, and same-day service throughout all Midwest City ZIP codes. Our Tinker AFB expertise allows efficient service even for military personnel with complex schedules. Call before noon for best same-day scheduling.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-teal-100">Common questions about process serving in Midwest City</p>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {midwestCityFAQs.slice(0, 6).map((faq, index) => (
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
                <p className="text-gray-600 text-sm mt-1">20 miles west. County seat and major metro hub.</p>
              </Link>
              <Link href="/service-areas/del-city" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Del City →</h3>
                <p className="text-gray-600 text-sm mt-1">5 miles west. Oklahoma County suburb.</p>
              </Link>
              <Link href="/service-areas/moore" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Moore →</h3>
                <p className="text-gray-600 text-sm mt-1">25 miles south. Cleveland County. Population 63,420.</p>
              </Link>
              <Link href="/service-areas/norman" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Norman →</h3>
                <p className="text-gray-600 text-sm mt-1">30 miles south. Cleveland County seat and OU home.</p>
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
              <h2 className="text-3xl font-bold mb-4">Need Emergency Process Service in Midwest City?</h2>
              <p className="text-xl mb-6 text-red-100">
                Available 24/7 for urgent legal document service in Midwest City and Oklahoma County
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
              <h2 className="text-2xl font-bold mb-2">Midwest City Service Area Map</h2>
              <p className="text-blue-100">Professional process serving throughout Midwest City, Oklahoma</p>
            </div>
            <div className="p-8">
              <GoogleMapsEmbed 
                countyName="Oklahoma County"
                cityName="Midwest City"
                state="Oklahoma"
                title="Midwest City Process Server Service Area"
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
                    <li><Link href="/service-areas/moore" className="text-blue-600 hover:underline">Moore Process Server</Link></li>
                    <li><Link href="/service-areas/norman" className="text-blue-600 hover:underline">Norman Process Server</Link></li>
                    <li><Link href="/service-areas/del-city" className="text-blue-600 hover:underline">Del City Process Server</Link></li>
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
                Professional process serving in Midwest City with competitive rates and 24/7 emergency service
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
