import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, Award, DollarSign, Users, Building2, Shield, CheckCircle, Star, Calendar, FileText, Scale, AlertCircle } from 'lucide-react';

import GoogleMapsEmbed from '@/components/ui/google-maps-embed';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';
import FAQAccordion from '@/components/ui/faq-accordion';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Bixby Process Serving | Civil & Family Court Documents | Just Legal Solutions',
  description: 'Bixby’s process server—handling court documents, family law, and urgent legal delivery for neighborhoods, schools, and businesses. Fast, licensed, and reliable with same-day and after-hours service.',
  keywords: 'process server bixby, legal document service bixby, serve papers bixby, court documents bixby, subpoena service bixby, eviction notice bixby, emergency process server bixby, 24/7 process server oklahoma, licensed process server tulsa county, professional process server bixby',
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
    title: 'Bixby Civil & Family Court Documents | Process Serving Service',
    description: 'Professional process server in Bixby, Oklahoma. Fast, reliable legal document service with 24/7 emergency availability and competitive rates.',
    url: 'https://justlegalsolutions.org/service-areas/bixby',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.png',
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
    title: 'Bixby Court Papers & Legal Documents | 24/7 Process Serving',
    description: 'Licensed process server in Bixby, Oklahoma. Fast, reliable legal document service with 24/7 emergency availability.',
    images: ['https://justlegalsolutions.org/og-image.png'],
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
    answer: "Our professional process serving offers competitive rates with transparent pricing. Standard service typically ranges from $50-75, with rush and emergency service available at premium rates. Contact us at (539) 367-6832 for current rates and service options, or visit our pricing page for complete information."
  },
  {
    question: "How long does it take to serve papers in Bixby?", 
    answer: "Standard service in Bixby typically takes 2-4 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent situations. Service times may vary based on the complexity of the case and availability of the individual being served."
  },
  {
    question: "My case is in Wagoner County but the person is in Bixby. Can you handle that?",
    answer: "Yes. We are fully licensed to serve in both Tulsa and Wagoner counties. Bixby spans both counties, and we regularly handle cross-county serves for Bixby residents, ensuring the Affidavit of Service is filed correctly with the appropriate court."
  },
  {
    question: "How do you serve documents in newer, gated communities in Bixby like White Hawk?",
    answer: "Our process servers are experienced with the protocols of gated communities like White Hawk and The Estates at Stonebrooke. We use professional and legal methods to gain access and effectuate service in a discreet and timely manner, working with gate security when necessary."
  },
  {
    question: "Do you serve in the rural parts of Bixby?",
    answer: "Absolutely. We cover all of Bixby, including rural routes, properties near the Arkansas River, and areas that may be difficult to locate. Our servers are equipped with GPS technology to handle service in less-developed areas and rural addresses."
  },
  {
    question: "What is your turnaround time for standard service in Bixby?",
    answer: "Standard service in Bixby is typically attempted within 24-48 hours and completed within 3-5 business days. We also offer same-day and emergency rush services for urgent matters with court deadlines."
  },
  {
    question: "Can you serve papers to someone at their job in Bixby?",
    answer: "Yes, we can serve documents at a place of employment, provided it is permitted by the location and can be done professionally. We have experience serving individuals in Bixby's business districts and commercial areas."
  },
  {
    question: "Where are court documents filed for Bixby?",
    answer: "Court documents for Bixby may be filed at either the Tulsa County courthouse or Wagoner County courthouse, depending on which county the address falls within. We handle all filing requirements and provide detailed courthouse information with our service."
  },
  {
    question: "Can you serve papers on weekends in Bixby?",
    answer: "Yes, we offer weekend and evening service in Bixby for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays. Weekend service may incur additional fees."
  },
  {
    question: "What areas of Bixby do you serve?",
    answer: "We serve all areas of Bixby including downtown, White Hawk, The Estates at Stonebrooke, Bixby North, South Bixby near the Arkansas River, Leonard, County Line Road areas, and all rural Bixby addresses in both Tulsa and Wagoner Counties."
  },
  {
    question: "Are you licensed to serve process in Bixby?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with both Tulsa and Wagoner Counties. We maintain all required bonds and certifications for professional service throughout Oklahoma."
  },
  {
    question: "What types of legal documents do you serve in Bixby?",
    answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, and all other court-ordered service of process."
  },
  {
    question: "Do you provide skip tracing services in Bixby?",
    answer: "Yes, we offer professional skip tracing services in Bixby. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient. This service is particularly useful for older cases or when people have moved."
  },
  {
    question: "What happens if the person cannot be found at the address provided?",
    answer: "If the individual cannot be located at the provided address, we will attempt service multiple times at different times of day. We also offer skip tracing services to locate current addresses and can discuss alternative service methods with you and your attorney."
  },
  {
    question: "How do you handle aggressive or evasive individuals in Bixby?",
    answer: "Our experienced process servers are trained to handle difficult situations professionally and safely. We follow all legal protocols and can work with local law enforcement when necessary. We also document all service attempts thoroughly for court proceedings."
  },
  {
    question: "Can you serve divorce papers to my spouse in Bixby?",
    answer: "Yes, we regularly serve divorce papers and family law documents in Bixby. We handle these sensitive situations with discretion and professionalism, ensuring proper service while maintaining dignity for all parties involved."
  },
  {
    question: "Do you provide same-day service for emergency situations?",
    answer: "Yes, we offer same-day emergency service throughout Bixby. This service is available for urgent court deadlines, restraining orders, and other time-sensitive legal matters. Contact us immediately at (539) 367-6832 for emergency service."
  },
  {
    question: "What proof of service do you provide?",
    answer: "We provide a complete Affidavit of Service that includes detailed information about the service attempt, time, date, location, description of the person served, and any relevant circumstances. We also include GPS tracking data and digital photos when appropriate."
  },
  {
    question: "How do you ensure the documents reach the right person?",
    answer: "We verify the identity of the person being served through multiple methods including photo identification when possible, physical description confirmation, and verification of personal details. We follow all Oklahoma legal requirements for proper service."
  },
  {
    question: "Where can I learn more about Oklahoma process serving laws and procedures?",
    answer: "For comprehensive information about process serving requirements, legal tips, and best practices across Oklahoma, visit our resources page. We also have detailed guides covering everything from court procedures to document requirements."
  }
];

export default function BixbyProcessServer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="location"
          url="https://justlegalsolutions.org/service-areas/bixby"
          title="Bixby Process Serving | Civil & Family Court Documents"
          description="Professional process serving in Bixby, Oklahoma with fast, reliable legal document delivery and 24/7 emergency service"
          location={{
            name: "Just Legal Solutions - Bixby",
            geo: {
              latitude: 35.9413,
              longitude: -95.8806
            }
          }}
          serviceDetails={{
            name: "Process Server Services",
            description: "Professional process serving in Bixby, Oklahoma with fast, reliable legal document delivery and 24/7 emergency service",
            areaServed: ["Bixby", "Tulsa County", "Oklahoma"],
            serviceType: [
              "Process Serving",
              "Legal Document Delivery", 
              "Court Filing Services",
              "Skip Tracing",
              "Corporate Service",
              "Emergency Rush Service",
              "GPS Tracked Delivery",
              "24/7 Emergency Service"
            ]
          }}
          priceRange="$30-$200"
          aggregateRating={{
            ratingValue: 4.9,
            reviewCount: 146
          }}
          faqItems={bixbyFAQs.map(faq => ({
            question: faq.question,
            answer: faq.answer
          }))}
          breadcrumbs={breadcrumbItems.map(item => ({
            name: item.name,
            item: `https://justlegalsolutions.org${item.url}`
          }))}
        />
      
      <LocalPromoBanner zips={["74008", "74033", "74037"]} />
      
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

        {/* Local Expertise Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
                Deep Local Knowledge of Bixby&apos;s Communities
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">Historic &ldquo;Garden Spot&rdquo; Heritage</h3>
                  <p className="text-gray-700 mb-4">
                    Known as &ldquo;The Garden Spot of Oklahoma,&rdquo; Bixby was founded in 1899 along the fertile Arkansas River valley. Today, it&apos;s one of the fastest-growing suburbs in Tulsa County, combining established rural properties with modern residential developments.
                  </p>
                  <p className="text-gray-700">
                    Our process servers understand both the historic downtown area and the newer developments, ensuring efficient service whether you need documents delivered to century-old farms or modern subdivisions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">Dual County Coverage</h3>
                  <p className="text-gray-700 mb-4">
                    Bixby uniquely spans both Tulsa and Wagoner Counties, requiring specialized knowledge of dual-county jurisdictions. We&apos;re fully licensed to serve in both counties and ensure your Affidavit of Service is filed with the correct courthouse.
                  </p>
                  <p className="text-gray-700">
                    From downtown Bixby near the Arkansas River to the rural areas along County Line Road, we navigate the complex jurisdictional requirements seamlessly.
                  </p>
                </div>
              </div>
              
              {/* Local Landmarks & Areas */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Bixby Areas We Serve</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Established Communities</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Downtown Bixby Historic District</li>
                      <li>• South Bixby (Arkansas River area)</li>
                      <li>• Bixby North</li>
                      <li>• Leonard Community</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Modern Developments</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• White Hawk</li>
                      <li>• The Estates at Stonebrooke</li>
                      <li>• Forest Creek</li>
                      <li>• Riverwalk developments</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Rural & Outlying Areas</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• County Line Road properties</li>
                      <li>• Rural Wagoner County sections</li>
                      <li>• Arkansas River farmland</li>
                      <li>• Remote residential properties</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

          {/* Comprehensive FAQ Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-teal-100">Comprehensive answers about process serving in Bixby, Oklahoma</p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* General Questions */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-blue-800 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    General Questions
                  </h3>
                  <FAQAccordion faqs={[
                    {
                      question: "How much does a process server cost in Bixby?",
                      answer: "Our professional process serving offers competitive rates with transparent pricing. Standard service typically ranges from $50-75, with rush and emergency service available at premium rates. Contact us at (539) 367-6832 for current rates and service options, or visit our pricing page for complete information."
                    },
                    {
                      question: "How long does it take to serve papers in Bixby?", 
                      answer: "Standard service in Bixby typically takes 2-4 business days. We also offer expedited rush service (24-48 hours) and same-day emergency service for urgent situations. Service times may vary based on the complexity of the case and availability of the individual being served."
                    },
                    {
                      question: "What types of legal documents do you serve in Bixby?",
                      answer: "We serve all types of legal documents including divorce papers, child custody documents, eviction notices, small claims court papers, subpoenas, civil complaints, restraining orders, and all other court-ordered service of process."
                    },
                    {
                      question: "Are you licensed to serve process in Bixby?",
                      answer: "Yes, we are fully licensed, bonded, and insured process servers registered with both Tulsa and Wagoner Counties. We maintain all required bonds and certifications for professional service throughout Oklahoma."
                    }
                  ]} />
                </div>

                {/* Service Areas & Coverage */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-blue-800 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Service Areas & Coverage
                  </h3>
                  <FAQAccordion faqs={[
                    {
                      question: "What areas of Bixby do you serve?",
                      answer: "We serve all areas of Bixby including downtown, White Hawk, The Estates at Stonebrooke, Bixby North, South Bixby near the Arkansas River, Leonard, County Line Road areas, and all rural Bixby addresses in both Tulsa and Wagoner Counties."
                    },
                    {
                      question: "My case is in Wagoner County but the person is in Bixby. Can you handle that?",
                      answer: "Yes. We are fully licensed to serve in both Tulsa and Wagoner counties. Bixby spans both counties, and we regularly handle cross-county serves for Bixby residents, ensuring the Affidavit of Service is filed correctly with the appropriate court."
                    },
                    {
                      question: "Do you serve in the rural parts of Bixby?",
                      answer: "Absolutely. We cover all of Bixby, including rural routes, properties near the Arkansas River, and areas that may be difficult to locate. Our servers are equipped with GPS technology to handle service in less-developed areas and rural addresses."
                    },
                    {
                      question: "How do you serve documents in newer, gated communities in Bixby like White Hawk?",
                      answer: "Our process servers are experienced with the protocols of gated communities like White Hawk and The Estates at Stonebrooke. We use professional and legal methods to gain access and effectuate service in a discreet and timely manner, working with gate security when necessary."
                    }
                  ]} />
                </div>

                {/* Timing & Speed */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-blue-800 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Timing & Speed
                  </h3>
                  <FAQAccordion faqs={[
                    {
                      question: "What is your turnaround time for standard service in Bixby?",
                      answer: "Standard service in Bixby is typically attempted within 24-48 hours and completed within 3-5 business days. We also offer same-day and emergency rush services for urgent matters with court deadlines."
                    },
                    {
                      question: "Do you provide same-day service for emergency situations?",
                      answer: "Yes, we offer same-day emergency service throughout Bixby. This service is available for urgent court deadlines, restraining orders, and other time-sensitive legal matters. Contact us immediately at (539) 367-6832 for emergency service."
                    },
                    {
                      question: "Can you serve papers on weekends in Bixby?",
                      answer: "Yes, we offer weekend and evening service in Bixby for urgent situations. Our 24/7 emergency service is available 7 days a week, including holidays. Weekend service may incur additional fees."
                    },
                    {
                      question: "Can you serve papers to someone at their job in Bixby?",
                      answer: "Yes, we can serve documents at a place of employment, provided it is permitted by the location and can be done professionally. We have experience serving individuals in Bixby's business districts and commercial areas."
                    }
                  ]} />
                </div>

                {/* Specialized Services */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-blue-800 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Specialized Services
                  </h3>
                  <FAQAccordion faqs={[
                    {
                      question: "Do you provide skip tracing services in Bixby?",
                      answer: "Yes, we offer professional skip tracing services in Bixby. Our advanced skip tracing helps locate individuals when standard address information is outdated or insufficient. This service is particularly useful for older cases or when people have moved."
                    },
                    {
                      question: "What happens if the person cannot be found at the address provided?",
                      answer: "If the individual cannot be located at the provided address, we will attempt service multiple times at different times of day. We also offer skip tracing services to locate current addresses and can discuss alternative service methods with you and your attorney."
                    },
                    {
                      question: "Can you serve divorce papers to my spouse in Bixby?",
                      answer: "Yes, we regularly serve divorce papers and family law documents in Bixby. We handle these sensitive situations with discretion and professionalism, ensuring proper service while maintaining dignity for all parties involved."
                    },
                    {
                      question: "How do you handle aggressive or evasive individuals in Bixby?",
                      answer: "Our experienced process servers are trained to handle difficult situations professionally and safely. We follow all legal protocols and can work with local law enforcement when necessary. We also document all service attempts thoroughly for court proceedings."
                    }
                  ]} />
                </div>

                {/* Legal & Documentation */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-bold mb-4 text-blue-800 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                    </svg>
                    Legal & Documentation
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <FAQAccordion faqs={[
                      {
                        question: "Where are court documents filed for Bixby?",
                        answer: "Court documents for Bixby may be filed at either the Tulsa County courthouse or Wagoner County courthouse, depending on which county the address falls within. We handle all filing requirements and provide detailed courthouse information with our service."
                      },
                      {
                        question: "What proof of service do you provide?",
                        answer: "We provide a complete Affidavit of Service that includes detailed information about the service attempt, time, date, location, description of the person served, and any relevant circumstances. We also include GPS tracking data and digital photos when appropriate."
                      },
                      {
                        question: "How do you ensure the documents reach the right person?",
                        answer: "We verify the identity of the person being served through multiple methods including photo identification when possible, physical description confirmation, and verification of personal details. We follow all Oklahoma legal requirements for proper service."
                      }
                    ]} />
                    <FAQAccordion faqs={[
                      {
                        question: "Where can I learn more about Oklahoma process serving laws and procedures?",
                        answer: "For comprehensive information about process serving requirements, legal tips, and best practices across Oklahoma, visit our resources page. We also have detailed guides covering everything from court procedures to document requirements."
                      }
                    ]} />
                  </div>
                </div>
              </div>

              {/* Local Bixby Area Specific Questions */}
              <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-bold mb-4 text-blue-800 text-center flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Local Bixby Area Questions
                </h3>
                <div className="max-w-4xl mx-auto">
                  <FAQAccordion faqs={[
                    {
                      question: "Can you serve subpoenas at the Bixby Riverwalk Market?",
                      answer: "Yes. We coordinate with Riverwalk vendors at 101 S Elm Place to discreetly serve subpoenas and court papers during market hours without disrupting foot traffic."
                    },
                    {
                      question: "What's the best time to serve papers near Bixby Historic Main Street?",
                      answer: "Schedule between 10 AM–11 AM or 2 PM–4 PM along S Broadway Ave to align with boutique and law-office slow periods and minimize missed attempts."
                    },
                    {
                      question: "Can you serve documents at Bixby Community Center events like Taste of Bixby?",
                      answer: "Yes. Our rapid-response teams operate onsite at annual festivals and networking events at 1211 S Memorial Dr to guarantee timely service."
                    },
                    {
                      question: "Is there an extra fee for gated communities like The Bridges or Greer Ranch?",
                      answer: "No. All locations—including private-security entries—are served at our standard rate with no hidden surcharges."
                    },
                    {
                      question: "Can you serve court papers at Bixby Public Library and local playgrounds?",
                      answer: "Yes. We deliver child-custody and safety-plan filings at Bixby Public Library (605 W 101st St S) and community parks with prior coordination."
                    },
                    {
                      question: "Can you serve documents at River Bend Plaza shopping center?",
                      answer: "Absolutely. We provide fast, professional service for commercial leases and corporate filings at River Bend Plaza (1500 N Memorial Dr) and surrounding office parks."
                    },
                    {
                      question: "Do you serve papers at Bixby City Hall and civic buildings?",
                      answer: "Yes. We handle compliant service at Bixby City Hall (116 W Hutchinson St) and other civic buildings, coordinating with security and staff when necessary."
                    },
                    {
                      question: "What's your success rate in South Bixby residential areas?",
                      answer: "South Bixby residential areas including Greer Ranch, Creekmoor, and Aspen Creek have our highest success rates during evening hours (5–8 PM) when residents are typically home from work."
                    },
                    {
                      question: "Can you serve papers during Bixby community events and festivals?",
                      answer: "Yes. We coordinate onsite service at events like Taste of Bixby, Business Expo, and Chamber networking events, ensuring minimal disruption to the activities."
                    },
                    {
                      question: "How do you handle service in gated communities like Greer Ranch and The Bridges?",
                      answer: "We work directly with security at gated communities off Creekmoor Blvd and other private neighborhoods to ensure legal-compliant serving while respecting community guidelines."
                    }
                  ]} />
                </div>
              </div>

              {/* Neighborhood & Landmark Spotlights */}
              <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-bold mb-4 text-green-800 text-center flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 14.846 4.632 16 6.414 16H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 6H6.28l-.31-1.243A1 1 0 005 4H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                  Neighborhood & Landmark Service Areas
                </h3>
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">🏞️ Bixby Riverwalk (101 S Elm Place)</h4>
                        <p className="text-gray-600 text-sm">Discreet service along the Arkansas River Market, coordinating with event organizers.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">🏛️ Historic Main Street (S Broadway Ave)</h4>
                        <p className="text-gray-600 text-sm">Serving subpoenas and civil complaints outside Bixby Theater and local law offices between New Orleans Park Rd & Houston St.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">🛒 River Bend Plaza (1500 N Memorial Dr)</h4>
                        <p className="text-gray-600 text-sm">Fast, professional service for commercial leases and corporate filings at shopping and office parks.</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">📚 Civic Buildings</h4>
                        <p className="text-gray-600 text-sm">Bixby Public Library (605 W 101st St S) & City Hall (116 W Hutchinson St) - Compliant service inside or at entrances.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">🎪 Community Center Events (1211 S Memorial Dr)</h4>
                        <p className="text-gray-600 text-sm">Onsite service at Taste of Bixby, Business Expo, and Chamber networking events.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-gray-800 mb-2">🏘️ Gated Communities</h4>
                        <p className="text-gray-600 text-sm">Greer Ranch, The Bridges off Creekmoor Blvd - Coordinated security access for legal-compliant serving.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">🏡 South Bixby Residential Strategy</h4>
                    <p className="text-gray-600 text-sm">
                      <strong>Optimal Hours:</strong> Evening service (5–8 PM) yields highest success rates in Greer Ranch, Creekmoor, and Aspen Creek neighborhoods when residents are home from work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seasonal Alerts & Service Tips */}
          <section className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-lg overflow-hidden mb-12 border border-orange-200">
            <div className="p-6 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Seasonal Alerts & Service Tips
              </h2>
              <p className="text-orange-100">Important timing information for optimal service in Bixby</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                  <h3 className="font-bold text-red-700 mb-2">🦃 Holiday Service Notice</h3>
                  <p className="text-gray-700 text-sm">Thanksgiving & Christmas: Allow extra 24 hours during major holidays. Our 24/7 emergency line remains open for urgent serves.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                  <h3 className="font-bold text-yellow-700 mb-2">☀️ Summer Peak Season</h3>
                  <p className="text-gray-700 text-sm">June–August move-in season sees high residential demand. Plan evening slots (5-8 PM) for optimal results in South Bixby.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <h3 className="font-bold text-blue-700 mb-2">🎪 Taste of Bixby Festival</h3>
                  <p className="text-gray-700 text-sm">During annual festival, road closures near Memorial Dr may affect timing. Schedule serves before 10 AM or after 6 PM.</p>
                </div>
              </div>
              
              <div className="mt-6 bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-3">📍 &ldquo;Serve Near&rdquo; Popular Locations</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-blue-700 font-medium">🏞️</span> Process server near Bixby Riverwalk<br/>
                    <span className="text-blue-700 font-medium">🏛️</span> Legal document delivery at Bixby Historic Main Street<br/>
                    <span className="text-blue-700 font-medium">📚</span> Subpoena service at Bixby Public Library
                  </div>
                  <div>
                    <span className="text-blue-700 font-medium">🏘️</span> Same-day service in South Bixby neighborhoods<br/>
                    <span className="text-blue-700 font-medium">🛒</span> Court papers served at River Bend Plaza<br/>
                    <span className="text-blue-700 font-medium">🎪</span> Process serving at Bixby Community Center events
                  </div>
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

          {/* Enhanced Google Maps Section with Local Landmarks */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Bixby Service Area Map & Landmark Coverage</h2>
              <p className="text-blue-100">Serving all of Bixby including key landmarks, community centers, and neighborhoods</p>
            </div>
            <div className="p-8">
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-bold mb-3 text-gray-800">Key Service Locations</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Community Centers</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Bixby Riverwalk (101 S Elm Place)</li>
                      <li>• Community Center (1211 S Memorial Dr)</li>
                      <li>• Public Library (605 W 101st St S)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Business Districts</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Historic Main Street (S Broadway Ave)</li>
                      <li>• River Bend Plaza (1500 N Memorial Dr)</li>
                      <li>• City Hall (116 W Hutchinson St)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Neighborhoods</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Greer Ranch</li>
                      <li>• The Bridges (Creekmoor Blvd)</li>
                      <li>• Aspen Creek Area</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Custom Google Maps embed with multiple pins */}
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52015.47824123456!2d-95.93456789012345!3d35.94130987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b64b1234567890%3A0x1234567890abcdef!2sBixby%2C%20OK!5e0!3m2!1sen!2sus!4v1690222882674!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map showing Just Legal Solutions' service areas and landmark coverage in Bixby, OK"
                  className="rounded-lg shadow-md"
                ></iframe>
                
                {/* Overlay with landmark pins information */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
                  <h4 className="font-bold text-sm text-blue-900 mb-2">📍 Service Coverage</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>🏛️ Bixby City Hall & Library</li>
                    <li>🏪 River Bend Plaza Shopping</li>
                    <li>🌊 Riverwalk Market District</li>
                    <li>🏫 All Bixby Schools & Parks</li>
                    <li>🏘️ Gated Communities</li>
                    <li>📍 Historic Main Street</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-center text-gray-600 mt-4 text-sm">
                We provide professional process serving throughout all of Bixby including downtown, residential neighborhoods, 
                business districts, and special event locations. GPS tracking and photo documentation included with every service.
              </p>
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
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
