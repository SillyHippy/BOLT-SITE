import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Phone, MapPin, Clock, Award, DollarSign, Users, Building2, Shield, CheckCircle, Star, Calendar, FileText, Scale, AlertCircle } from 'lucide-react';

 

import GoogleMapsEmbed from '@/components/ui/google-maps-embed';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Process Server Owasso, OK',
  description:
    'Licensed process server in Owasso, OK. Standard from $60, rush $100, same-day $150. GPS-tracked, court-ready affidavits. Serving all 77 OK counties. (539) 367-6832.',
  keywords: 'process server owasso, legal document service owasso, serve papers owasso, court documents owasso, subpoena service owasso, eviction notice owasso, emergency process server owasso, 24/7 process server oklahoma, licensed process server tulsa county, professional process server owasso',
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
    title: 'Process Server Owasso, OK',
    description:
    'Licensed process server in Owasso, OK. Standard from $60, rush $100, same-day $150. GPS-tracked, court-ready affidavits. Serving all 77 OK counties. (539) 367-6832.',
    url: 'https://justlegalsolutions.org/service-areas/owasso',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Professional Process Server Owasso Oklahoma',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Owasso, OK',
    description:
    'Licensed process server in Owasso, OK. Standard from $60, rush $100, same-day $150. GPS-tracked, court-ready affidavits. Serving all 77 OK counties. (539) 367-6832.',
    images: ['https://justlegalsolutions.org/og-image.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/owasso',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
  { name: 'Owasso', url: '/service-areas/owasso' },
];

const owassoFAQs = [
  {
    question: "How much does a process server cost in Owasso?",
    answer: "Our professional process serving offers competitive rates with transparent pricing. We provide detailed quotes based on your specific needs. Contact us at (539) 367-6832 for current rates and service options, or visit our pricing page for complete information."
  },
  {
    question: "How long does it take to serve papers in Owasso?",
    answer: "Standard service in Owasso typically takes 2-4 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent situations."
  },
  {
    question: "Where are court documents filed for Owasso?",
    answer: "Court documents for Owasso are filed at the Tulsa County courthouse. We handle all filing requirements and provide detailed courthouse information with our service."
  },
  {
    question: "Can you serve papers on weekends in Owasso?",
    answer: "Yes, we offer weekend and evening service in Owasso for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays."
  },
  {
    question: "What areas of Owasso do you serve?",
    answer: "We serve all areas of Owasso including downtown Owasso, North Owasso, East Owasso, and all surrounding neighborhoods. Our coverage extends throughout Tulsa County."
  },
  {
    question: "Are you licensed to serve process in Owasso?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with Tulsa County. We maintain all required bonds and certifications for professional service throughout Oklahoma."
  },
  {
    question: "What types of legal documents do you serve in Owasso?",
    answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, and all other court-ordered service of process."
  },
  {
    question: "Do you provide skip tracing services in Owasso?",
    answer: "Yes, we offer professional skip tracing services in Owasso. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient."
  }
];

export default function OwassoProcessServer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="service"
          title="Just Legal Solutions - Owasso"
          description="Professional process serving in Owasso, Oklahoma with fast, reliable legal document delivery and 24/7 emergency service"
          url="https://justlegalsolutions.org/service-areas/owasso"
          breadcrumbItems={breadcrumbItems}
          location={{
            name: "Owasso",
            state: "Oklahoma",
            zipCode: "74055"
          }}
          services={["Process Serving", "Legal Document Delivery", "Court Filing Services", "Skip Tracing", "Emergency Rush Service", "GPS Tracked Delivery", "24/7 Emergency Service"]}
          faqItems={owassoFAQs}
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
                    Process Server Owasso
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-200">Professional Legal Document Service</p>
                </div>
              </div>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Licensed, bonded, and insured process server in Owasso, Oklahoma. 
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
              <h2 className="text-2xl font-bold mb-2">Professional Process Serving in Owasso</h2>
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
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Local Owasso Area Expertise</li>
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
              <p className="text-teal-100">Common questions about process serving in Owasso</p>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {owassoFAQs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Where We Serve Papers in Owasso */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Where We Serve Papers in Owasso</h2>
              <p className="text-indigo-100">Local expertise across every Owasso neighborhood</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 max-w-3xl">
                Owasso spans both Rogers County and Tulsa County, with the majority of residential and commercial development concentrated along Highway 169 and North 129th East Avenue. Our servers know every neighborhood, from gated golf-course communities to rural acreage north of 116th Street.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Smith Farm &amp; Stone Canyon</h3>
                  <p className="text-gray-700 text-sm">
                    Large-lot subdivisions in northeast Owasso off 76th Street North and East 86th Street North.
                    These are gated communities surrounding <strong>Stone Canyon Golf Club</strong> and <strong>Bailey Ranch Golf Club</strong>.
                    We coordinate with HOA management for legal entry or serve defendants at their workplaces.
                    Addresses here frequently use Owasso mailing addresses but file in Rogers County.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Downtown Owasso / Redbud District</h3>
                  <p className="text-gray-700 text-sm">
                    The historic corridor along Main Street between 76th Street North and 96th Street North.
                    Key landmarks: <strong>Owasso City Hall</strong> (111 North Main Street),
                    <strong>Owasso Police Department</strong> (111 North Main Street), and <strong>Rejoice Christian Schools</strong> (10025 North 137th East Avenue).
                    Older homes with open front porches make daytime residential service highly effective here.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Elm Creek, Summit Ridge &amp; Preston Lakes</h3>
                  <p className="text-gray-700 text-sm">
                    Newer construction west of Highway 169. Houses are close-set with visible front doors,
                    making evening residential service effective. Near <strong>Bailey Medical Center</strong> (10502 North 110th East Avenue) and the <strong>Owasso YMCA</strong>.
                    These subdivisions have uniform addressing and minimal turnover.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Rural Owasso (North of 116th Street North)</h3>
                  <p className="text-gray-700 text-sm">
                    Unincorporated Rogers County addresses that use &ldquo;Owasso&rdquo; mailing addresses.
                    Long driveways and limited house-number visibility require GPS verification and sometimes multiple attempts.
                    Properties near <strong>Oologah Lake</strong> and along County Line Road can be especially challenging
                    without advance satellite mapping.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Major Employers & Workplace Service in Owasso */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Major Employers &amp; Workplace Service in Owasso</h2>
              <p className="text-emerald-100">We know Owasso&apos;s largest employers and serve with precision</p>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-6 max-w-3xl">
                Workplace service requires knowing shift schedules, HR office locations, and the best times to reach management staff. We maintain current contact information for Owasso&apos;s largest employers.
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
                    <tr>
                      <td className="px-4 py-3 font-medium">Owasso Public Schools</td>
                      <td className="px-4 py-3">1101 North 129th East Avenue, Owasso, OK 74055</td>
                      <td className="px-4 py-3">Education</td>
                      <td className="px-4 py-3">9,000+ students; admin building preferred for service</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Rejoice Christian Schools</td>
                      <td className="px-4 py-3">10025 North 137th East Avenue, Owasso, OK 74055</td>
                      <td className="px-4 py-3">Private Education</td>
                      <td className="px-4 py-3">1,800+ students; main campus and athletic facilities</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Bailey Medical Center</td>
                      <td className="px-4 py-3">10502 North 110th East Avenue, Owasso, OK 74055</td>
                      <td className="px-4 py-3">Healthcare</td>
                      <td className="px-4 py-3">400+ employees; HR department open 8 AM – 5 PM</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Walmart Supercenter</td>
                      <td className="px-4 py-3">12101 East 96th Street North, Owasso, OK 74055</td>
                      <td className="px-4 py-3">Retail</td>
                      <td className="px-4 py-3">300+ employees; management office at rear of store</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">City of Owasso</td>
                      <td className="px-4 py-3">111 North Main Street, Owasso, OK 74055</td>
                      <td className="px-4 py-3">Government</td>
                      <td className="px-4 py-3">Municipal complex; city clerk receives service</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Home Depot</td>
                      <td className="px-4 py-3">11615 East 96th Street North, Owasso, OK 74055</td>
                      <td className="px-4 py-3">Retail/Home Improvement</td>
                      <td className="px-4 py-3">100+ employees; management office at customer service</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Owasso-Specific FAQ */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Owasso-Specific Questions</h2>
              <p className="text-amber-100">Answers to frequently asked questions about Owasso service</p>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Do Owasso cases file in Tulsa County or Rogers County?</h3>
                  <p className="text-gray-600">
                    It depends on the specific address. Most Owasso addresses file in <strong>Rogers County</strong> at the Claremore courthouse (219 South Missouri Avenue). However, some addresses on the southern and western edges of Owasso (particularly near the Tulsa city limits and along 129th East Avenue south of 86th Street) fall within <strong>Tulsa County</strong> jurisdiction and file at the Tulsa County Courthouse (500 South Denver Avenue). We verify the correct courthouse for every serve.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Can you serve papers inside gated communities like Stone Canyon or Bailey Ranch?</h3>
                  <p className="text-gray-600">
                    Yes. We coordinate with HOA management offices for legal entry into Owasso&apos;s gated golf-course communities. Alternatively, we serve defendants at their workplaces, the Owasso Public Schools administration building, or other non-gated locations where they are known to appear.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: How do you handle rural addresses north of 116th Street in Owasso?</h3>
                  <p className="text-gray-600">
                    Rural Owasso addresses often have long driveways and limited house-number visibility. We use GPS coordinates, Rogers County assessor data, and satellite imagery to pre-verify locations. These unincorporated Rogers County addresses may also have different sheriff jurisdiction than city addresses.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Is same-day service available in Owasso?</h3>
                  <p className="text-gray-600">
                    Yes. Owasso is within our primary Tulsa metro service area. We provide standard ($60), rush ($150), and same-day ($265) service throughout all Owasso ZIP codes (74055, 74073, and surrounding rural routes).
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
                Available 24/7 for urgent legal document service in Owasso
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
              <h2 className="text-2xl font-bold mb-2">Owasso Service Area Map</h2>
              <p className="text-blue-100">Professional process serving throughout Owasso, Oklahoma</p>
            </div>
            <div className="p-8">
              <GoogleMapsEmbed 
                countyName="Tulsa County"
                state="Oklahoma"
                title="Owasso Process Server Service Area"
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
                    <li><Link href="/service-areas/broken-arrow" className="text-blue-600 hover:underline">Broken Arrow Process Server</Link></li>
                    <li><Link href="/service-areas/collinsville" className="text-blue-600 hover:underline">Collinsville Process Server</Link></li>
                    <li><Link href="/service-areas/skiatook" className="text-blue-600 hover:underline">Skiatook Process Server</Link></li>
                    <li><Link href="/counties/tulsa-county" className="text-blue-600 hover:underline">Tulsa County Process Server</Link></li>
                    <li><Link href="/counties/rogers-county" className="text-blue-600 hover:underline">Rogers County Process Server</Link></li>
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
                Professional process serving in Owasso with competitive rates and 24/7 emergency service
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