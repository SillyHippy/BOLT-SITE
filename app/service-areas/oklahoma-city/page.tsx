import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building, CheckCircle, Star, Scale } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Oklahoma City, OK | Licensed Legal Document Service',
  description: 'Licensed process server in Oklahoma City, Oklahoma. GPS-tracked and court-ready. Serving Oklahoma County and OKC metro with 24/7 emergency availability. (539) 367-6832.',
  keywords: 'process server Oklahoma City OK, serve papers OKC, legal document service Oklahoma City, subpoena service OKC, emergency process server Oklahoma County, licensed process server OKC metro',
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
    title: 'Process Server Oklahoma City, OK | Licensed Legal Document Service',
    description: 'Licensed process server in Oklahoma City, Oklahoma. GPS-tracked and court-ready. Serving Oklahoma County and OKC metro with 24/7 emergency availability. (539) 367-6832.',
    url: 'https://justlegalsolutions.org/service-areas/oklahoma-city',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Professional Process Server Oklahoma City',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Oklahoma City, OK | Licensed Legal Document Service',
    description: 'Licensed process server in Oklahoma City, Oklahoma. GPS-tracked and court-ready. Serving Oklahoma County and OKC metro with 24/7 emergency availability. (539) 367-6832.',
    images: ['https://justlegalsolutions.org/og-image.webp'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/oklahoma-city',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
  { name: 'Oklahoma City', url: '/service-areas/oklahoma-city' },
];

const okcFAQs = [
  {
    question: "How much does a process server cost in Oklahoma City?",
    answer: "Our professional process serving offers competitive rates with transparent pricing. Standard service starts at competitive flat rates with no hidden fees. We provide detailed quotes based on your specific needs. Contact us at (539) 367-6832 for current rates and service options, or visit our pricing page for complete information."
  },
  {
    question: "How long does it take to serve papers in Oklahoma City?",
    answer: "Standard service in Oklahoma City typically takes 2-4 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent situations. Call before noon for best same-day scheduling. Our coverage extends throughout OKC metro including Yukon, Mustang, Moore, Midwest City, Bethany, and El Reno."
  },
  {
    question: "Where are court documents filed for Oklahoma City cases?",
    answer: "Court documents for Oklahoma City are filed at the Oklahoma County Courthouse (320 Robert S. Kerr Avenue, Oklahoma City, OK 73102). Oklahoma City Municipal Court handles city ordinance violations only. All civil, family, and felony matters go through Oklahoma County District Court."
  },
  {
    question: "Can you serve papers on weekends in Oklahoma City?",
    answer: "Yes, we offer weekend and evening service in Oklahoma City for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays. This is especially important for serving employees at major employers like Tinker AFB, OU Health, and Devon Energy."
  },
  {
    question: "What areas of Oklahoma City do you serve?",
    answer: "We serve all areas of Oklahoma City including Downtown OKC, Bricktown, Midtown, Nichols Hills, The Village, Edmond area, and all surrounding suburbs including Yukon, Mustang, Moore, Midwest City, Del City, Bethany, Warr Acres, and El Reno. Our coverage extends throughout Oklahoma County and Canadian County."
  },
  {
    question: "Are you licensed to serve process in Oklahoma City?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with Oklahoma County. We maintain all required bonds and certifications for professional service throughout the State of Oklahoma including Oklahoma County and Canadian County."
  },
  {
    question: "What types of legal documents do you serve in Oklahoma City?",
    answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, corporate documents, and all other court-ordered service of process."
  },
  {
    question: "Do you provide skip tracing services in Oklahoma City?",
    answer: "Yes, we offer professional skip tracing services in Oklahoma City. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient. This is valuable for serving defendants in a metro area the size of OKC."
  },
  {
    question: "How do you handle serving at major OKC employers like Tinker AFB?",
    answer: "We have experience serving at major Oklahoma City employers including Tinker Air Force Base, OU Health, Devon Energy, Chesapeake Energy, and Paycom. We understand base access requirements, hospital protocols, and corporate campus procedures. For military installations, we follow all federal and base-specific security protocols."
  },
];

const okcEmployers = [
  { name: 'Oklahoma City Public Schools', address: '900 N Klein Ave, Oklahoma City, OK 73106', industry: 'Education', notes: 'District administration; 45,000+ students; HR office 8 AM - 4:30 PM' },
  { name: 'OU Health', address: '825 NE 10th St, Oklahoma City, OK 73104', industry: 'Healthcare', notes: 'Major medical center; 11,000+ employees; HIPAA-compliant service protocols' },
  { name: 'Tinker Air Force Base', address: '7600 1st St, Midwest City, OK 73145', industry: 'Military/Government', notes: '26,000+ military/civilian personnel; DOD ID required for base access; coordinate with base legal office' },
  { name: 'Devon Energy', address: '333 W Sheridan Ave, Oklahoma City, OK 73102', industry: 'Energy', notes: 'Fortune 500 HQ; 1,600+ downtown employees; security desk registration required' },
  { name: 'Chesapeake Energy', address: '6100 N Western Ave, Oklahoma City, OK 73118', industry: 'Energy', notes: 'Major energy employer; campus-style headquarters; visitor check-in at main gate' },
  { name: 'Hobby Lobby', address: '7707 SW 44th St, Oklahoma City, OK 73179', industry: 'Retail/Corporate', notes: 'Corporate headquarters; 1,000+ employees; admin building preferred for service' },
  { name: 'Paycom', address: '7501 W Memorial Rd, Oklahoma City, OK 73142', industry: 'Technology', notes: 'Major tech employer; 4,500+ OKC employees; security-controlled campus' },
  { name: 'Integris Baptist Medical Center', address: '3300 NW Expressway, Oklahoma City, OK 73112', industry: 'Healthcare', notes: 'Regional hospital; 2,000+ employees; 24-hour facility; coordinate with HR' },
  { name: 'VA Medical Center', address: '921 NE 13th St, Oklahoma City, OK 73104', industry: 'Healthcare/Government', notes: 'Federal facility; 1,800+ employees; follow federal service protocols' },
  { name: 'Oklahoma County Courthouse', address: '320 Robert S Kerr Ave, Oklahoma City, OK 73102', industry: 'Government', notes: 'Oklahoma County seat; 12 floors; Clerk office 8 AM - 5 PM weekdays' },
];

export default function OklahomaCityProcessServerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="service"
          title="Just Legal Solutions - Oklahoma City"
          description="Professional process serving in Oklahoma City, Oklahoma with fast, reliable legal document delivery and 24/7 emergency service"
          url="https://justlegalsolutions.org/service-areas/oklahoma-city"
          breadcrumbItems={breadcrumbItems}
          location={{
            name: "Oklahoma City",
            state: "Oklahoma",
            zipCode: "73102"
          }}
          services={["Process Serving", "Legal Document Delivery", "Court Filing Services", "Skip Tracing", "Corporate Service", "Emergency Rush Service", "GPS Tracked Delivery", "24/7 Emergency Service"]}
          faqItems={okcFAQs}
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
                    Process Server Oklahoma City
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-200">Professional Legal Document Service | OKC Metro</p>
                </div>
              </div>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Licensed, bonded, and insured process server in Oklahoma City, Oklahoma. 
                Serving OKC metro including Yukon, Mustang, Moore, Midwest City, Bethany & El Reno. 
                Fast, reliable service with 24/7 emergency availability.
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
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">681K</div>
                  <div className="text-sm text-blue-100">OKC Population</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-bold text-blue-300">24/7</div>
                  <div className="text-sm text-blue-100">Emergency Service</div>
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
              <h2 className="text-2xl font-bold mb-2">OKC Metro Drive Times</h2>
              <p className="text-indigo-100">Serving all Oklahoma City suburbs with fast response times</p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">15 min</div>
                  <div className="text-gray-600">to Yukon</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">20 min</div>
                  <div className="text-gray-600">to Mustang</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">20 min</div>
                  <div className="text-gray-600">to Moore</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">20 min</div>
                  <div className="text-gray-600">to Midwest City</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">15 min</div>
                  <div className="text-gray-600">to Bethany</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">30 min</div>
                  <div className="text-gray-600">to El Reno</div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Information */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Professional Process Serving in Oklahoma City</h2>
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
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Local OKC Metro Expertise</li>
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

          {/* Courthouse Info */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
              <h2 className="text-2xl font-bold mb-2">Courthouse & Filing Information</h2>
              <p className="text-slate-300">Oklahoma City — Oklahoma County Seat</p>
            </div>
            <div className="p-8 space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <p className="font-semibold text-lg text-gray-900">Oklahoma County Courthouse</p>
                <p className="text-gray-700">320 Robert S Kerr Ave, Oklahoma City, OK 73102</p>
                <p className="text-gray-600 text-sm mt-1">📞 (405) 713-1700</p>
                <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 5:00 PM</p>
                <p className="text-gray-600 text-sm mt-3">All district court civil, family, and felony cases for Oklahoma City and Oklahoma County residents file here. 12-floor courthouse in downtown OKC.</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <p className="font-semibold text-lg text-gray-900">Oklahoma City Municipal Court</p>
                <p className="text-gray-700">700 Couch Dr, Oklahoma City, OK 73102</p>
                <p className="text-gray-600 text-sm mt-1">📞 (405) 297-3900</p>
                <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 4:30 PM</p>
                <p className="text-gray-600 text-sm mt-3">Municipal citations and local ordinance violations only. Downtown location near Civic Center Music Hall.</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <p className="font-semibold text-orange-800">Local Service Notes</p>
                <p className="text-orange-700 text-sm">Oklahoma County Courthouse is located in downtown OKC with multiple parking garages nearby. Peak hours are 9-11 AM and 2-4 PM. The courthouse handles all major civil, criminal, and family matters for Oklahoma County.</p>
              </div>
            </div>
          </section>

          {/* Where We Serve Papers in OKC */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Where We Serve Papers in Oklahoma City</h2>
              <p className="text-indigo-100">Local expertise across every OKC neighborhood</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 max-w-3xl">
                Oklahoma City spans over 620 square miles across Oklahoma and Canadian Counties. From the revitalized Downtown and Bricktown districts to suburban neighborhoods in every direction, our servers know every area including gated communities, apartment complexes, and major employment centers.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Downtown OKC / Bricktown / Midtown</h3>
                  <p className="text-gray-700 text-sm">
                    The urban core including <strong>Bricktown</strong> entertainment district, <strong>Midtown</strong> medical and business district, and the <strong>Central Business District</strong>. Key landmarks: <strong>Oklahoma County Courthouse</strong> (320 Robert S Kerr Ave), <strong>OU Health</strong> (825 NE 10th St), <strong>Devon Energy Center</strong> (333 W Sheridan Ave), <strong>Paycom Center</strong>. High-rise residential and commercial buildings with secure access.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Nichols Hills / The Village / NW OKC</h3>
                  <p className="text-gray-700 text-sm">
                    Affluent residential areas northwest of downtown including <strong>Nichols Hills</strong>, <strong>The Village</strong>, and established neighborhoods along <strong>Western Avenue</strong> and <strong>May Avenue</strong>. Features <strong>Integris Baptist Medical Center</strong> (3300 NW Expressway), upscale retail corridors, and mature residential areas with clear addressing.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">SW OKC / Capitol Hill / Southside</h3>
                  <p className="text-gray-700 text-sm">
                    Diverse neighborhoods south of the Oklahoma River including <strong>Capitol Hill</strong> historic district, <strong>Hobby Lobby headquarters</strong> (7707 SW 44th St), and residential areas extending toward <strong>Moore</strong> and <strong>Norman</strong>. Mix of historic homes, new construction, and commercial corridors along <strong>I-240</strong> and <strong>I-35</strong>.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">NE OKC / Lincoln Boulevard / Tinker Area</h3>
                  <p className="text-gray-700 text-sm">
                    Northeast quadrant including <strong>Tinker Air Force Base</strong> area (7600 1st St, Midwest City), <strong>VA Medical Center</strong> (921 NE 13th St), and neighborhoods along <strong>Lincoln Boulevard</strong> and <strong>I-40</strong>. Major federal and military presence requires specialized knowledge of base access protocols.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Major Employers & Workplace Service in OKC */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Major Employers &amp; Workplace Service in Oklahoma City</h2>
              <p className="text-emerald-100">We serve at OKC&apos;s major employers efficiently</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 max-w-3xl">
                Oklahoma City is home to major employers across energy, healthcare, military, education, and technology sectors. Workplace service requires knowing shift schedules, HR office locations, and the best times to reach management staff. We maintain current contact information for OKC&apos;s largest employers.
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
                    {okcEmployers.map((emp, i) => (
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

          {/* OKC-Specific FAQ */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Oklahoma City-Specific Questions</h2>
              <p className="text-amber-100">Answers to frequently asked questions about OKC service</p>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Which courthouse do OKC cases file in?</h3>
                  <p className="text-gray-600">
                    OKC cases file in <strong>Oklahoma County</strong> at the <strong>Oklahoma County Courthouse</strong> (320 Robert S Kerr Ave, Oklahoma City, OK 73102). Oklahoma City Municipal Court at 700 Couch Dr handles city ordinance violations only. All civil, family, and felony matters go through Oklahoma County District Court.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Can you serve papers at Tinker Air Force Base?</h3>
                  <p className="text-gray-600">
                    Yes. We serve at <strong>Tinker Air Force Base</strong> (7600 1st St, Midwest City). This requires coordination with base security and legal office. DOD ID or escort pass required for access. We recommend workplace service at base administrative buildings or coordinating service through the base legal office for military personnel.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: How do you handle serving at major hospitals like OU Health?</h3>
                  <p className="text-gray-600">
                    We serve at <strong>OU Health</strong> (825 NE 10th St) and <strong>Integris Baptist</strong> (3300 NW Expressway) following HIPAA-compliant protocols. Healthcare worker service typically occurs through HR departments during business hours. We understand shift schedules for nurses and medical staff, and coordinate with hospital security as needed.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Can you serve at corporate campuses like Devon Energy and Paycom?</h3>
                  <p className="text-gray-600">
                    Yes. We regularly serve at <strong>Devon Energy</strong> (333 W Sheridan Ave) downtown and <strong>Paycom</strong> (7501 W Memorial Rd) in NW OKC. Both locations have security-controlled access requiring visitor registration. We coordinate with corporate reception and HR departments for efficient workplace service.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Is same-day service available throughout OKC metro?</h3>
                  <p className="text-gray-600">
                    Yes. We provide same-day service throughout Oklahoma City and all suburbs including <strong>Yukon</strong>, <strong>Mustang</strong>, <strong>Moore</strong>, <strong>Midwest City</strong>, <strong>Bethany</strong>, and <strong>El Reno</strong>. Call before noon for best same-day scheduling. Our OKC metro coverage ensures rapid response anywhere in the 681,000+ population area.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-teal-100">Common questions about process serving in Oklahoma City</p>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {okcFAQs.slice(0, 6).map((faq, index) => (
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
              <h2 className="text-2xl font-bold mb-2">OKC Metro Service Areas</h2>
              <p className="text-purple-100">We serve all Oklahoma City suburbs and surrounding communities</p>
            </div>
            <div className="p-8 grid md:grid-cols-3 gap-4">
              <Link href="/service-areas/yukon" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Yukon →</h3>
                <p className="text-gray-600 text-sm mt-1">15 miles west. Canadian County. Population 25,529.</p>
              </Link>
              <Link href="/service-areas/mustang" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Mustang →</h3>
                <p className="text-gray-600 text-sm mt-1">20 miles southwest. Canadian County. Population 22,192.</p>
              </Link>
              <Link href="/service-areas/moore" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Moore →</h3>
                <p className="text-gray-600 text-sm mt-1">10 miles south. Cleveland County. Population 63,420.</p>
              </Link>
              <Link href="/service-areas/midwest-city" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Midwest City →</h3>
                <p className="text-gray-600 text-sm mt-1">10 miles east. Oklahoma County. Home to Tinker AFB. Population 58,145.</p>
              </Link>
              <Link href="/service-areas/bethany" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">Bethany →</h3>
                <p className="text-gray-600 text-sm mt-1">5 miles west. Oklahoma County. SNU campus. Population 20,429.</p>
              </Link>
              <Link href="/service-areas/el-reno" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-blue-700">El Reno →</h3>
                <p className="text-gray-600 text-sm mt-1">30 miles west. Canadian County seat. Population 16,831.</p>
              </Link>
            </div>
          </section>

          {/* Emergency Contact Section */}
          <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-8 text-center">
              <AlertCircle className="h-16 w-16 mx-auto mb-6 text-red-200" />
              <h2 className="text-3xl font-bold mb-4">Need Emergency Process Service in OKC?</h2>
              <p className="text-xl mb-6 text-red-100">
                Available 24/7 for urgent legal document service in Oklahoma City and all suburbs
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
              <h2 className="text-2xl font-bold mb-2">Oklahoma City Service Area Map</h2>
              <p className="text-blue-100">Professional process serving throughout OKC metro</p>
            </div>
            <div className="p-8">
              <GoogleMapsEmbed 
                countyName="Oklahoma County"
                cityName="Oklahoma City"
                state="Oklahoma"
                title="Oklahoma City Process Server Service Area"
              />
            </div>
          </section>

          {/* Explore More Resources */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Explore More Resources</h2>
              <p className="text-purple-100">Learn more about our services and OKC legal resources</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">📍 OKC Metro Areas</h3>
                  <ul className="space-y-2">
                    <li><Link href="/service-areas/yukon" className="text-blue-600 hover:underline">Yukon Process Server</Link></li>
                    <li><Link href="/service-areas/mustang" className="text-blue-600 hover:underline">Mustang Process Server</Link></li>
                    <li><Link href="/service-areas/moore" className="text-blue-600 hover:underline">Moore Process Server</Link></li>
                    <li><Link href="/service-areas/midwest-city" className="text-blue-600 hover:underline">Midwest City Process Server</Link></li>
                    <li><Link href="/service-areas/bethany" className="text-blue-600 hover:underline">Bethany Process Server</Link></li>
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
                Professional process serving in Oklahoma City with competitive rates and 24/7 emergency service
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
