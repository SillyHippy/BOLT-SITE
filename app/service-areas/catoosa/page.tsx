import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, Award, DollarSign, Users, Building2, Shield, CheckCircle, Star, Calendar, FileText, Scale, AlertCircle } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';

import GoogleMapsEmbed from '@/components/ui/google-maps-embed';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Process Server Catoosa, OK | Same-Day Service from $60',
  description:
    'Licensed process server in Catoosa, OK. Standard from $60, rush $100, same-day $150. GPS-tracked, court-ready affidavits. Serving all 77 OK counties. (539) 367-6832.',
  keywords: 'process server catoosa, legal document service catoosa, serve papers catoosa, court documents catoosa, subpoena service catoosa, eviction notice catoosa, emergency process server catoosa, 24/7 process server oklahoma, licensed process server rogers county, professional process server catoosa',
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
    title: 'Process Server Catoosa, OK | Same-Day Service from $60',
    description:
    'Licensed process server in Catoosa, OK. Standard from $60, rush $100, same-day $150. GPS-tracked, court-ready affidavits. Serving all 77 OK counties. (539) 367-6832.',
    url: 'https://justlegalsolutions.org/service-areas/catoosa',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Professional Process Server Catoosa Oklahoma',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Catoosa, OK | Same-Day Service from $60',
    description:
    'Licensed process server in Catoosa, OK. Standard from $60, rush $100, same-day $150. GPS-tracked, court-ready affidavits. Serving all 77 OK counties. (539) 367-6832.',
    images: ['https://justlegalsolutions.org/og-image.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/catoosa',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
  { name: 'Catoosa', url: '/service-areas/catoosa' },
];

const catoosaFAQs = [
  {
    question: "How much does a process server cost in Catoosa?",
    answer: "Our professional process serving offers competitive rates with transparent pricing. We provide detailed quotes based on your specific needs. Contact us at (539) 367-6832 for current rates and service options, or visit our pricing page for complete information."
  },
  {
    question: "How long does it take to serve papers in Catoosa?",
    answer: "Standard service in Catoosa typically takes 3-5 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent situations."
  },
  {
    question: "Where are court documents filed for Catoosa?",
    answer: "Court documents for Catoosa are filed at the Rogers County courthouse. We handle all filing requirements and provide detailed courthouse information with our service."
  },
  {
    question: "Can you serve papers on weekends in Catoosa?",
    answer: "Yes, we offer weekend and evening service in Catoosa for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays."
  },
  {
    question: "What areas of Catoosa do you serve?",
    answer: "We serve all areas of Catoosa including downtown Catoosa, residential neighborhoods, Cherokee Hills, and all surrounding areas. Our coverage extends throughout Rogers County."
  },
  {
    question: "Are you licensed to serve process in Catoosa?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with Rogers County. We maintain all required bonds and certifications for professional service throughout Oklahoma."
  },
  {
    question: "What types of legal documents do you serve in Catoosa?",
    answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, and all other court-ordered service of process."
  },
  {
    question: "Do you provide skip tracing services in Catoosa?",
    answer: "Yes, we offer professional skip tracing services in Catoosa. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient."
  }
];

export default function CatoosaProcessServer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="service"
          title="Just Legal Solutions - Catoosa"
          description="Professional process serving in Catoosa, Oklahoma with fast, reliable legal document delivery and 24/7 emergency service"
          url="https://justlegalsolutions.org/service-areas/catoosa"
          breadcrumbItems={breadcrumbItems}
          location={{
            name: "Catoosa",
            state: "Oklahoma",
            zipCode: "74015"
          }}
          services={["Process Serving", "Legal Document Delivery", "Court Filing Services", "Skip Tracing", "Rural Property Service", "Emergency Rush Service", "GPS Tracked Delivery", "24/7 Emergency Service"]}
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
                    Process Server Catoosa
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-200">Professional Legal Document Service</p>
                </div>
              </div>
              
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Licensed, bonded, and insured process server in Catoosa, Oklahoma. 
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
              <h2 className="text-2xl font-bold mb-2">Professional Process Serving in Catoosa</h2>
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
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Local Catoosa Area Expertise</li>
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

          {/* Location & Coverage Map */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Our Catoosa Service Area</h2>
              <p className="text-green-100">Professional process serving throughout Catoosa and Rogers County</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Coverage Areas:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center"><MapPin className="h-4 w-4 text-green-500 mr-2" />Downtown Catoosa</li>
                    <li className="flex items-center"><MapPin className="h-4 w-4 text-green-500 mr-2" />Cherokee Hills</li>
                    <li className="flex items-center"><MapPin className="h-4 w-4 text-green-500 mr-2" />Residential Neighborhoods</li>
                    <li className="flex items-center"><MapPin className="h-4 w-4 text-green-500 mr-2" />Commercial Districts</li>
                    <li className="flex items-center"><MapPin className="h-4 w-4 text-green-500 mr-2" />Rural Properties</li>
                    <li className="flex items-center"><MapPin className="h-4 w-4 text-green-500 mr-2" />All Rogers County Areas</li>
                  </ul>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Professional Local Service</h4>
                    <p className="text-blue-800 text-sm">Licensed process server with extensive knowledge of Catoosa neighborhoods, businesses, and local court procedures. We serve papers efficiently throughout Rogers County.</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Catoosa Location Map:</h3>
                  <div className="relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51681.89998922147!2d-95.77168665!3d36.1983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b68ff5b7d5a5eb%3A0x9c8b8f5a5f5f5f5f!2sCatoosa%2C%20OK!5e0!3m2!1sen!2sus!4v1691234567890!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg shadow-md"
                      title="Catoosa Oklahoma Process Server Coverage Area"
                    ></iframe>
                  </div>
                  <div className="mt-4 text-center">
                    <a 
                      href="https://maps.google.com/maps?q=Catoosa,+OK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      ðŸ“ View Larger Map & Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-teal-100">Common questions about process serving in Catoosa</p>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {catoosaFAQs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Where We Serve Papers in Catoosa */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Where We Serve Papers in Catoosa</h2>
              <p className="text-indigo-100">Local expertise across every Catoosa neighborhood and employer</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Port of Catoosa / Industrial Catoosa</h3>
                  <p className="text-gray-700 text-sm">
                    The <strong>Port of Catoosa</strong> (9800 Pine Street) is one of the largest inland river ports in the United States and a major employment hub. The surrounding industrial area includes warehouses, distribution centers, and manufacturing facilities. Service here typically occurs at HR offices or employee parking lot exits during shift changes.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Hard Rock Casino &amp; Cherokee Nation District</h3>
                  <p className="text-gray-700 text-sm">
                    The <strong>Hard Rock Hotel &amp; Casino Tulsa</strong> (777 West Cherokee Street) anchors southeastern Catoosa. This area includes tribal housing, casino employee neighborhoods, and the <strong>Cherokee Hills Golf Club</strong>. We are experienced with tribal jurisdiction protocols and serve casino employees at off-site residences or through HR coordination.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Downtown Catoosa / Historic Route 66</h3>
                  <p className="text-gray-700 text-sm">
                    The original town center along <strong>Historic Route 66</strong> and <strong>Cherokee Street</strong>. Notable landmarks include the <strong>Blue Whale of Catoosa</strong> (2600 Highway 66), <strong>Catoosa City Hall</strong> (201 South Cherokee Street), and <strong>Catoosa High School</strong> (2000 South Cherokee Street). Older residential neighborhoods feature easy daytime access.
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Stone Canyon, Heatherstone &amp; East Catoosa</h3>
                  <p className="text-gray-700 text-sm">
                    Suburban residential development east of Highway 167 and north of I-44. Communities like <strong>Stone Canyon</strong> and <strong>Heatherstone</strong> feature newer homes on larger lots. Some gated access requires HOA coordination. These Rogers County addresses file at the Claremore courthouse.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Major Employers & Workplace Service in Catoosa */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Major Employers &amp; Workplace Service in Catoosa</h2>
              <p className="text-emerald-100">Port of Catoosa, Hard Rock Casino, Amazon, and more</p>
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
                      <td className="px-4 py-3 font-medium">Hard Rock Hotel &amp; Casino Tulsa</td>
                      <td className="px-4 py-3">777 West Cherokee Street, Catoosa, OK 74015</td>
                      <td className="px-4 py-3">Gaming/Hospitality</td>
                      <td className="px-4 py-3">2,000+ employees; 24-hour operation; tribal HR preferred</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Port of Catoosa</td>
                      <td className="px-4 py-3">10614 East Pine Street, Catoosa, OK 74015</td>
                      <td className="px-4 py-3">Transportation/Logistics</td>
                      <td className="px-4 py-3">Major inland port; warehouse and shipping employers</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Catoosa Public Schools</td>
                      <td className="px-4 py-3">2000 South Cherokee Street, Catoosa, OK 74015</td>
                      <td className="px-4 py-3">Education</td>
                      <td className="px-4 py-3">2,100+ students; admin at high school campus</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Amazon Fulfillment Center (TUL2)</td>
                      <td className="px-4 py-3">7507 East Port Road, Catoosa, OK 74015</td>
                      <td className="px-4 py-3">Logistics/Warehouse</td>
                      <td className="px-4 py-3">1,500+ employees; multi-shift operation</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">City of Catoosa</td>
                      <td className="px-4 py-3">201 South Cherokee Street, Catoosa, OK 74015</td>
                      <td className="px-4 py-3">Government</td>
                      <td className="px-4 py-3">Municipal complex; city clerk</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Catoosa-Specific FAQ */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Catoosa-Specific Questions</h2>
              <p className="text-amber-100">Answers to frequently asked questions about Catoosa service</p>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Do Catoosa cases file in Rogers County or Tulsa County?</h3>
                  <p className="text-gray-600">
                    Most Catoosa addresses file in <strong>Rogers County</strong> at the Claremore courthouse (219 South Missouri Avenue). However, some addresses on the southern and western edges of Catoosa (particularly west of Highway 167 and south of I-44) may fall within <strong>Tulsa County</strong> and file at the Tulsa County Courthouse (500 South Denver Avenue). We verify the correct courthouse for every serve.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Can you serve papers at the Port of Catoosa?</h3>
                  <p className="text-gray-600">
                    The Port of Catoosa (10614 East Pine Street) is a secure industrial facility. We typically serve employees at their specific workplace addresses within the port boundaries during business hours, or serve them at their residences in Catoosa, Owasso, or Tulsa. Direct on-dock service requires security clearance and escort arrangements.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-5">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: How do you handle service at the Hard Rock Casino?</h3>
                  <p className="text-gray-600">
                    The Hard Rock Hotel &amp; Casino employs over 2,000 people and operates 24/7. We coordinate with Cherokee Nation HR for workplace service during standard business hours, or serve employees at their residences in Catoosa and surrounding communities after hours.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: Is same-day service available in Catoosa?</h3>
                  <p className="text-gray-600">
                    Yes. Catoosa is within our standard Tulsa metro service area. We provide standard ($60), rush ($150), and same-day ($265) service throughout Catoosa ZIP code 74015.
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
                Available 24/7 for urgent legal document service in Catoosa
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
              <h2 className="text-2xl font-bold mb-2">Catoosa Service Area Map</h2>
              <p className="text-blue-100">Professional process serving throughout Catoosa, Oklahoma</p>
            </div>
            <div className="p-8">
              <GoogleMapsEmbed 
                countyName="Rogers County"
                state="Oklahoma"
                title="Catoosa Process Server Service Area"
              />
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-6 text-blue-100">
                Professional process serving in Catoosa with competitive rates and 24/7 emergency service
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
              â† Browse All Oklahoma Service Areas
            </Link>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}