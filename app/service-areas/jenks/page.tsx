import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Phone, MapPin, Clock, Award, DollarSign, Users, Building2, Shield, CheckCircle, Star, Calendar, FileText, Scale, AlertCircle, Home } from 'lucide-react';
import FAQAccordion from '@/components/ui/faq-accordion';

import GoogleMapsEmbed from '@/components/ui/google-maps-embed';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Jenks Legal Papers Service | Divorce & Court Documents | Just Legal Solutions',
  description: 'Jenks process server—delivering divorce papers, family law documents, and court notices across Jenks schools, neighborhoods, and businesses. Rely on our local knowledge and 24/7 service for secure, prompt delivery.',
  keywords: 'process server jenks, legal document service jenks, serve papers jenks, court documents jenks, subpoena service jenks, eviction notice jenks, emergency process server jenks, 24/7 process server oklahoma, licensed process server tulsa county, professional process server jenks',
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
    title: 'Jenks Legal Papers Service | Divorce & Court Document Delivery',
    description: 'Professional process server in Jenks, Oklahoma. Fast, reliable legal document service with 24/7 emergency availability and competitive rates.',
    url: 'https://justlegalsolutions.org/service-areas/jenks',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions - Professional Process Server Jenks Oklahoma',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jenks Court Documents & Divorce Papers | Process Serving',
    description: 'Licensed process server in Jenks, Oklahoma. Fast, reliable legal document service with 24/7 emergency availability.',
    images: ['https://justlegalsolutions.org/og-image.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/jenks',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
  { name: 'Jenks', url: '/service-areas/jenks' },
];

const jenksServiceFAQs = [
  {
    question: "How much does a process server cost in Jenks?",
    answer: "Our professional process serving in the 'Antique Capital of Oklahoma' offers competitive rates with transparent pricing. Standard service starts at $30-$50 within Jenks city limits, including areas near the Oklahoma Aquarium (300 Aquarium Dr), Main Street District (107 E Main St), and Riverwalk Crossing (100 Riverwalk Dr). Rush and emergency services available throughout Jenks neighborhoods. For detailed pricing comparisons across Oklahoma, see our <Link href='/oklahoma-process-serving-costs-comparison-2025' className='text-blue-600 hover:text-blue-800 underline'>Oklahoma Process Serving Costs Comparison guide</Link>. Contact us at (539) 367-6832 for detailed quotes."
  },
  {
    question: "How quickly can you serve papers in Jenks?",
    answer: "Standard service in Jenks typically takes 1-3 business days. We offer same-day service for downtown Main Street District and Riverwalk Crossing, 24-hour rush service for residential areas like Southern Lakes, The Reserve at Stonebrooke, and Elwood Crossing, and emergency service for urgent court deadlines throughout the Arkansas River corridor and all Jenks neighborhoods."
  },
  {
    question: "What specific areas of Jenks do you serve?",
    answer: "We serve all of Jenks including: Downtown Main Street District (antique shops, professional offices), Oklahoma Aquarium area (hotels, residential developments), Riverwalk Crossing (retail complex), Southern Lakes (family community), The Reserve at Stonebrooke (luxury homes), Elwood Crossing, Creek Ridge Estates, Jenks West neighborhoods, and Arkansas Riverfront areas. Complete coverage throughout Tulsa County."
  },
  {
    question: "Can you serve papers at Jenks public venues and tourist areas?",
    answer: "Yes, we have extensive experience serving documents at Jenks public venues including the Oklahoma Aquarium complex, Riverwalk Crossing retail center, Main Street antique district, Jenks Riverwalk, and community event locations. We maintain professional discretion, understand visitor patterns, and follow proper protocols for all public service locations while respecting the family-friendly tourism environment."
  },
  {
    question: "Do you provide same-day service for Jenks emergency situations?",
    answer: "Absolutely! We offer 24/7 emergency service throughout Jenks for urgent legal deadlines. This includes immediate response to the Oklahoma Aquarium area, downtown Main Street District, Riverwalk Crossing, and all residential neighborhoods. Our local expertise ensures rapid location and professional service even during peak tourist seasons and community events."
  },
  {
    question: "What proof of service do you provide for Jenks deliveries?",
    answer: "We provide comprehensive proof of service including notarized affidavits, GPS tracking data, timestamped photos, and detailed service reports. For Jenks locations, we include specific landmark references (Oklahoma Aquarium, Main Street District, Riverwalk Crossing) and neighborhood details to ensure court-admissible documentation that meets all Oklahoma legal requirements."
  }
];

const jenksBusinessFAQs = [
  {
    question: "Do you serve business documents in Jenks commercial areas?",
    answer: "Yes, we regularly serve business documents throughout Jenks commercial districts including downtown Main Street District (107 E Main St) antique shops, Riverwalk Crossing (100 Riverwalk Dr) retail complex, Oklahoma Aquarium area (300 Aquarium Dr) businesses, and professional offices along Elm Street. We understand business hours, protocols, and security procedures for professional service at all commercial locations."
  },
  {
    question: "Can you serve papers in Jenks apartment complexes and gated communities?",
    answer: "Absolutely! Our servers are familiar with access protocols for all Jenks residential communities including The Reserve at Stonebrooke (luxury gated community), Southern Lakes (family apartments), Elwood Crossing developments, Creek Ridge Estates, Jenks West neighborhoods, and Woodland South apartments. We work with property management and security to ensure successful service while respecting all community rules."
  },
  {
    question: "Do you handle skip tracing in Jenks and the Oklahoma Aquarium area?",
    answer: "Yes, we provide comprehensive skip tracing services throughout Jenks and Tulsa County, including the high-traffic Oklahoma Aquarium area with its hotels and residential developments. Our advanced database searches help locate individuals who may have moved within the River District, downtown Main Street District, Riverwalk Crossing area, or surrounding residential neighborhoods. We combine local knowledge with professional investigation techniques."
  },
  {
    question: "What's your experience with Jenks school district and educational facility service?",
    answer: "We have extensive experience serving documents at all Jenks Public Schools locations including Jenks High School, Jenks West Elementary, Jenks East Elementary, and Jenks Middle School. We follow all district protocols, coordinate with administration, and ensure appropriate timing for school-related legal matters including <Link href='/family-law-service-guide-tulsa-2025' className='text-blue-600 hover:text-blue-800 underline'>child custody papers</Link> and subpoenas. For specialized guidance on family law process serving, including protective orders and custody documents, our comprehensive family law guide provides detailed protocols and safety requirements."
  },
  {
    question: "Do you serve papers during Jenks festivals and community events?",
    answer: "Yes! We're experienced with serving documents during Jenks' year-round events including antique shows on Main Street, Riverwalk festivals, Oklahoma Aquarium special events, and community celebrations. During peak seasons (spring antique events, summer festivals), we adjust our approach to accommodate increased foot traffic while maintaining professional service standards."
  },
  {
    question: "Can you handle corporate service at Jenks business parks and office complexes?",
    answer: "Certainly! We serve corporate documents throughout Jenks business districts including professional offices near downtown Main Street, business parks along Yale Avenue, and corporate locations near Riverwalk Crossing. Our team understands corporate service requirements, registered agent protocols, and business hour considerations for all commercial legal document delivery."
  }
];

const jenksLegalFAQs = [
  {
    question: "Where are court documents filed for Jenks cases?",
    answer: "Most court documents for Jenks residents are filed at the <Link href='/counties/tulsa-county' className='text-blue-600 hover:text-blue-800 underline'>Tulsa County Courthouse</Link> in downtown Tulsa (500 S Denver Ave). Municipal matters may be handled at Jenks City Hall (211 N Elm St). We handle all filing requirements, provide detailed courthouse information, and can coordinate between venues as needed for your specific case type and jurisdiction requirements. For information on court filing deadlines and requirements, see our <Link href='/oklahoma-case-law-service-process-2025' className='text-blue-600 hover:text-blue-800 underline'>Oklahoma Case Law & Service Process guide</Link>."
  },
  {
    question: "Are you licensed to serve process in Jenks and Tulsa County?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with <Link href='/counties/tulsa-county' className='text-blue-600 hover:text-blue-800 underline'>Tulsa County</Link> and the State of Oklahoma. We maintain all required certifications for professional service throughout the 'Antique Capital' and surrounding areas, with full compliance with Oklahoma Rules of Civil Procedure. Our bonds and insurance are current and meet all state requirements."
  },
  {
    question: "What types of legal documents do you serve in Jenks?",
    answer: "We serve all types of legal documents in Jenks including divorce papers, child custody documents, <Link href='/seo/eviction-notice-process-server' className='text-red-600 hover:text-red-800 underline'>eviction notices</Link>, small claims court papers, subpoenas, civil complaints, restraining orders, business litigation documents, <Link href='/family-law-service-guide-tulsa-2025' className='text-blue-600 hover:text-blue-800 underline'>family law filings</Link>, and all other court-ordered service of process throughout the Main Street District, Oklahoma Aquarium area, Riverwalk Crossing, and all residential neighborhoods."
  },
  {
    question: "What are the Oklahoma legal requirements for service in Jenks?",
    answer: "Oklahoma law requires personal service by a licensed process server or sheriff. We follow all Oklahoma Rules of Civil Procedure for proper service in Jenks, including attempt timing, identification verification, and affidavit completion. Our service meets all court requirements for valid legal notice in Tulsa County jurisdiction. For detailed process serving standards, see our comprehensive <Link href='/oklahoma-process-server-best-practices-checklist-2025' className='text-blue-600 hover:text-blue-800 underline'>Oklahoma Process Server Best Practices Checklist</Link>."
  },
  {
    question: "How do you ensure legally compliant service in Jenks?",
    answer: "We ensure legal compliance through proper identification verification, detailed service attempt documentation, GPS tracking, timestamped photography, and comprehensive affidavits that meet Oklahoma court standards. Every Jenks service includes specific location details (Main Street District, Oklahoma Aquarium area, Riverwalk Crossing) to ensure court-admissible proof of service."
  },
  {
    question: "What happens if service is refused or avoided in Jenks?",
    answer: "If service is refused or avoided, we document all attempts thoroughly and may pursue alternative service methods as allowed by Oklahoma law. This can include posting service, publication service, or other methods approved by the Tulsa County court. We work with your attorney to determine the best legal approach for your specific situation."
  },
  {
    question: "Do you provide affidavits for court filing in Jenks cases?",
    answer: "Yes, we provide complete, notarized affidavits of service that meet all Tulsa County court requirements. Our affidavits include detailed service information, GPS coordinates, photographs when appropriate, and specific Jenks location references (Oklahoma Aquarium area, Main Street District, Riverwalk Crossing) to ensure court acceptance and legal validity."
  }
];

const jenksLocalFAQs = [
  {
    question: "How do you handle service near the Oklahoma Aquarium and River District?",
    answer: "The River District near the Oklahoma Aquarium (300 Aquarium Dr) is one of our most served areas in Jenks. We&rsquo;re familiar with the area&rsquo;s layout, parking, and access points, including the hotel complexes and residential developments. Whether serving residents, employees, or visitors in this popular destination, we understand visitor patterns and access timing to ensure professional and discreet service while respecting the family-friendly environment."
  },
  {
    question: "Can you serve papers during Jenks Antique festivals and Main Street events?",
    answer: "Yes, we have extensive experience serving documents during Jenks&rsquo; famous antique events and festivals along Main Street District (107 E Main St). Our team knows the historic downtown core layout, understands event protocols, and works with local authorities when necessary. We can navigate parking challenges and building access protocols during busy community gatherings while maintaining appropriate discretion."
  },
  {
    question: "Do you serve papers at Riverwalk Crossing and the shopping district?",
    answer: "Absolutely! Riverwalk Crossing (100 Riverwalk Dr) is a frequent service location for us. We&rsquo;re familiar with this premier retail and entertainment complex&rsquo;s layout, all tenant locations, business hours, and security procedures. Whether serving employees, business owners, or customers, we follow proper mall protocols and maintain professional conduct to ensure efficient service."
  },
  {
    question: "How familiar are you with Jenks neighborhoods and specific areas?",
    answer: "Our team has extensive knowledge of all Jenks neighborhoods including: The Reserve at Stonebrooke (luxury homes), Southern Lakes (family community), Elwood Crossing (established neighborhood), Creek Ridge Estates, Jenks West, and the Arkansas Riverfront areas. We also know the transition zones between Jenks and South Tulsa, ensuring efficient service and successful first attempts throughout our coverage area."
  },
  {
    question: "Do you serve papers at Jenks schools and educational facilities?",
    answer: "Yes, we serve at all Jenks Public Schools following proper district protocols. This includes Jenks High School, Jenks West Elementary, Jenks East Elementary, Jenks Middle School, and other district facilities. We coordinate with school administration and follow all safety procedures to ensure compliant service during appropriate hours."
  },
  {
    question: "Can you handle service at Jenks business districts and commercial areas?",
    answer: "Certainly! We serve throughout Jenks&rsquo; commercial corridors including the Main Street business district, Elm Street professional offices, Yale Avenue commercial strip, and the Riverwalk Crossing retail complex. Our familiarity with local business hours, access procedures, and parking situations ensures efficient service at any commercial location."
  },
  {
    question: "What about service near the Arkansas River and recreational areas?",
    answer: "We regularly serve in Jenks&rsquo; recreational areas including Oklahoma Aquarium grounds, Jenks Riverwalk, Arkansas River trails, and nearby parks. Whether serving at riverfront residences, recreational facilities, or outdoor events, we understand seasonal access patterns and can coordinate timing for successful service in these scenic locations."
  },
  {
    question: "Do you have experience with Jenks seasonal events and festivals?",
    answer: "Yes! We&rsquo;re experienced with Jenks&rsquo; year-round events including antique shows, Riverwalk festivals, Oklahoma Aquarium special events, and community celebrations. During peak seasons (spring antique events, summer festivals), we adjust our scheduling and approach to accommodate increased foot traffic while maintaining professional service standards."
  }
];

export default function JenksProcessServer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="service"
          title="Just Legal Solutions - Jenks"
          description="Professional process serving in Jenks, Oklahoma with fast, reliable legal document delivery and 24/7 emergency service"
          url="https://justlegalsolutions.org/service-areas/jenks"
          breadcrumbItems={breadcrumbItems}
          location={{
            name: "Jenks",
            state: "Oklahoma", 
            zipCode: "74037"
          }}
          services={["Process Serving", "Legal Document Delivery", "Court Filing Services", "Skip Tracing", "Emergency Rush Service", "GPS Tracked Delivery", "24/7 Emergency Service"]}
          faqItems={[
            ...jenksServiceFAQs,
            ...jenksBusinessFAQs,
            ...jenksLegalFAQs,
            ...jenksLocalFAQs
          ]}
          priceRange="$30-$200"
          aggregateRating={{
            ratingValue: 4.9,
            reviewCount: 146
          }}
        />

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

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-yellow-400">Jenks</span> Process Server
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Expert legal document delivery in Jenks, Oklahoma. Serving the Oklahoma Aquarium area, Main Street District, and all residential neighborhoods with 24/7 emergency service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 bg-green-600 px-6 py-3 rounded-lg font-semibold">
                <CheckCircle className="w-5 h-5" />
                Licensed & Bonded in Jenks
              </div>
              <div className="flex items-center gap-2 bg-blue-700 px-6 py-3 rounded-lg font-semibold">
                <Clock className="w-5 h-5" />
                Same-Day Service Available
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              <Phone className="w-6 h-6" />
              Call (539) 367-6832 Now
            </Link>
          </div>
        </section>

        {/* Jenks Local Landmarks & Expertise */}
        <section className="bg-gradient-to-r from-blue-600 to-slate-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Jenks Local Expertise</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Deep knowledge of Jenks neighborhoods, landmarks, and local business districts ensures 
                successful service at every location throughout our community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-blue-300 mr-3" />
                  <h3 className="text-xl font-bold">Downtown Jenks</h3>
                </div>
                <p className="text-blue-100 mb-3">Main Street District at 107 E Main St</p>
                <p className="text-sm text-blue-200">
                  Historic downtown core with antique shops, restaurants, and professional offices. 
                  Expert navigation of parking challenges and building access protocols.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Building2 className="h-8 w-8 text-blue-300 mr-3" />
                  <h3 className="text-xl font-bold">Riverwalk Crossing</h3>
                </div>
                <p className="text-blue-100 mb-3">100 Riverwalk Dr - Premier Shopping District</p>
                <p className="text-sm text-blue-200">
                  Major retail and entertainment complex. Familiar with all tenant locations, 
                  business hours, and security procedures for efficient service.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Home className="h-8 w-8 text-blue-300 mr-3" />
                  <h3 className="text-xl font-bold">Oklahoma Aquarium Area</h3>
                </div>
                <p className="text-blue-100 mb-3">300 Aquarium Dr & Surrounding Developments</p>
                <p className="text-sm text-blue-200">
                  Tourist destination with hotel complexes and residential developments. 
                  Specialized knowledge of visitor patterns and access timing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Service Information */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Professional Process Serving in Jenks</h2>
              <p className="text-blue-100">Fast, reliable legal document service with transparent pricing</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Our Services Include:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" /><Link href="/family-law-service-guide-tulsa-2025" className="text-blue-600 hover:text-blue-800 underline">Divorce Papers & Family Law Documents</Link></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" /><Link href="/family-law-service-guide-tulsa-2025" className="text-blue-600 hover:text-blue-800 underline">Child Custody & Support Documents</Link></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" /><Link href="/seo/eviction-notice-process-server" className="text-red-600 hover:text-red-800 underline">Eviction Notices & Landlord Tenant</Link></li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Subpoenas & Court Summons</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Civil Complaints & Lawsuits</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />Corporate & Business Documents</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Why Choose Us:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Licensed & Bonded in Oklahoma</li>
                    <li className="flex items-center"><Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />Local Jenks Area Expertise</li>
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

          {/* Local Coverage Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Jenks Service Areas</h2>
              <p className="text-green-100">Complete coverage throughout Jenks and surrounding areas</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Central Jenks</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Downtown Jenks</li>
                    <li>• Jenks Public Schools Area</li>
                    <li>• City Center</li>
                    <li>• Main Street District</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">West Jenks</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Riverwalk Crossing</li>
                    <li>• The Outlets at Riverwalk</li>
                    <li>• Oklahoma Aquarium Area</li>
                    <li>• Jenks Riverwalk</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Surrounding Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• South Tulsa</li>
                    <li>• Bixby (nearby)</li>
                    <li>• Glenpool (nearby)</li>
                    <li>• All Tulsa County</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section with Accordion */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
              <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-teal-100">Common questions about process serving in Jenks</p>
            </div>
            <div className="p-8 space-y-8">
              {/* Service Information */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-teal-700 flex items-center">
                  <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Service Information
                </h3>
                <FAQAccordion faqs={jenksServiceFAQs} />
              </div>

              {/* Business & Legal */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
                  <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                  </svg>
                  Business & Legal
                </h3>
                <FAQAccordion faqs={jenksBusinessFAQs} />
              </div>

              {/* Legal Requirements */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-700 flex items-center">
                  <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                  </svg>
                  Legal Requirements
                </h3>
                <FAQAccordion faqs={jenksLegalFAQs} />
              </div>

              {/* Local Jenks Knowledge */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center">
                  <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Local Jenks Knowledge
                </h3>
                <FAQAccordion faqs={jenksLocalFAQs} />
              </div>
            </div>
          </section>

          {/* Comprehensive Neighborhood Coverage */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <h2 className="text-2xl font-bold mb-2">Complete Jenks Neighborhood Coverage</h2>
              <p className="text-green-100">Expert service throughout all Jenks districts and communities</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Historic Downtown */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
                  <Building2 className="h-8 w-8 text-red-600 mb-3" />
                  <h3 className="text-lg font-bold text-red-900 mb-2">Historic Downtown</h3>
                  <p className="text-sm text-gray-600 mb-3">Main Street District (107 E Main St)</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Historic antique shops & galleries</li>
                    <li>• Professional law offices</li>
                    <li>• Municipal government buildings</li>
                    <li>• Main Street event venues</li>
                  </ul>
                </div>

                {/* Riverwalk District */}
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg border border-blue-200">
                  <Building2 className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Riverwalk District</h3>
                  <p className="text-sm text-gray-600 mb-3">Riverwalk Crossing (100 Riverwalk Dr)</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Premier retail complex</li>
                    <li>• Restaurant & entertainment venues</li>
                    <li>• Professional office spaces</li>
                    <li>• Corporate headquarters</li>
                  </ul>
                </div>

                {/* Oklahoma Aquarium Area */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                  <Home className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="text-lg font-bold text-green-900 mb-2">Aquarium District</h3>
                  <p className="text-sm text-gray-600 mb-3">Oklahoma Aquarium (300 Aquarium Dr)</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Tourist destination hotels</li>
                    <li>• Riverfront residential developments</li>
                    <li>• Conference & event facilities</li>
                    <li>• Arkansas River corridor</li>
                  </ul>
                </div>

                {/* Luxury Communities */}
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                  <Home className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="text-lg font-bold text-purple-900 mb-2">Luxury Communities</h3>
                  <p className="text-sm text-gray-600 mb-3">Gated & Premium Neighborhoods</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• The Reserve at Stonebrooke</li>
                    <li>• Creek Ridge Estates</li>
                    <li>• Exclusive gated communities</li>
                    <li>• Luxury home developments</li>
                  </ul>
                </div>

                {/* Family Neighborhoods */}
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-lg border border-yellow-200">
                  <Home className="h-8 w-8 text-yellow-600 mb-3" />
                  <h3 className="text-lg font-bold text-yellow-900 mb-2">Family Communities</h3>
                  <p className="text-sm text-gray-600 mb-3">Established Residential Areas</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Southern Lakes (family community)</li>
                    <li>• Elwood Crossing</li>
                    <li>• Jenks West neighborhoods</li>
                    <li>• Traditional suburban areas</li>
                  </ul>
                </div>

                {/* Educational District */}
                <div className="bg-gradient-to-br from-cyan-50 to-sky-50 p-6 rounded-lg border border-cyan-200">
                  <Building2 className="h-8 w-8 text-cyan-600 mb-3" />
                  <h3 className="text-lg font-bold text-cyan-900 mb-2">Educational District</h3>
                  <p className="text-sm text-gray-600 mb-3">Jenks Public Schools Area</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Jenks High School district</li>
                    <li>• Elementary & middle schools</li>
                    <li>• Educational facilities</li>
                    <li>• School administration offices</li>
                  </ul>
                </div>
              </div>

              {/* Seasonal Service Alerts */}
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-6 w-6 text-amber-600 mr-3" />
                  <h3 className="text-lg font-bold text-amber-900">Seasonal Service Considerations</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Spring/Summer (Peak Tourist Season)</h4>
                    <ul className="space-y-1">
                      <li>• Oklahoma Aquarium area: Increased visitor traffic</li>
                      <li>• Main Street antique events: Weekend crowds</li>
                      <li>• Riverwalk festivals: Adjusted access timing</li>
                      <li>• Arkansas Riverfront: Enhanced security protocols</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Fall/Winter (Community Events)</h4>
                    <ul className="space-y-1">
                      <li>• School district activities: Coordinated timing</li>
                      <li>• Holiday shopping: Riverwalk Crossing crowds</li>
                      <li>• Community celebrations: Downtown access</li>
                      <li>• Weather considerations: Route adjustments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Testimonials */}
          <section className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
              <h2 className="text-2xl font-bold mb-2">What Jenks Clients Say</h2>
              <p className="text-blue-100">Real testimonials from local attorneys and residents</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div itemScope={true} itemType="https://schema.org/Review" className="bg-white p-6 rounded-lg shadow-md">
                  <meta itemProp="name" content="Jenks Process Server Review" />
                  <div itemProp="itemReviewed" itemScope={true} itemType="https://schema.org/LocalBusiness">
                    <meta itemProp="name" content="Just Legal Solutions - Jenks Process Server" />
                  </div>
                  <meta itemProp="datePublished" content="2025-01-15" />
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 text-lg">
                      ★★★★★
                    </div>
                    <div itemProp="reviewRating" itemScope={true} itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content="5" />
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="worstRating" content="1" />
                    </div>
                    <meta itemProp="datePublished" content="2024-08-15" />
                  </div>
                  <p className="text-gray-700 mb-4 italic" itemProp="reviewBody">
                    &ldquo;Needed urgent service near the Oklahoma Aquarium for a family law case. Just Legal Solutions delivered same-day service and navigated the hotel complex perfectly. Their knowledge of the Jenks area saved the day.&rdquo;
                  </p>
                  <div className="text-sm text-gray-600">
                    <span itemProp="author" itemScope={true} itemType="https://schema.org/Person">
                      <span itemProp="name">Jennifer K.</span>
                    </span> - Jenks Family Law Attorney
                  </div>
                </div>

                <div itemScope={true} itemType="https://schema.org/Review" className="bg-white p-6 rounded-lg shadow-md">
                  <meta itemProp="name" content="Jenks Process Server Review" />
                  <div itemProp="itemReviewed" itemScope={true} itemType="https://schema.org/LocalBusiness">
                    <meta itemProp="name" content="Just Legal Solutions - Jenks Process Server" />
                  </div>
                  <meta itemProp="datePublished" content="2024-07-22" />
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 text-lg">
                      ★★★★★
                    </div>
                    <div itemProp="reviewRating" itemScope={true} itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content="5" />
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="worstRating" content="1" />
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic" itemProp="reviewBody">
                    &ldquo;Outstanding service at Riverwalk Crossing! They knew exactly how to handle the retail complex service and worked professionally with mall security. Quick, discrete, and effective.&rdquo;
                  </p>
                  <div className="text-sm text-gray-600">
                    <span itemProp="author" itemScope={true} itemType="https://schema.org/Person">
                      <span itemProp="name">Robert M.</span>
                    </span> - Business Owner, Jenks
                  </div>
                </div>

                <div itemScope={true} itemType="https://schema.org/Review" className="bg-white p-6 rounded-lg shadow-md">
                  <meta itemProp="name" content="Jenks Process Server Review" />
                  <div itemProp="itemReviewed" itemScope={true} itemType="https://schema.org/LocalBusiness">
                    <meta itemProp="name" content="Just Legal Solutions - Jenks Process Server" />
                  </div>
                  <meta itemProp="datePublished" content="2024-09-10" />
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 text-lg">
                      ★★★★★
                    </div>
                    <div itemProp="reviewRating" itemScope={true} itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content="5" />
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="worstRating" content="1" />
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic" itemProp="reviewBody">
                    &ldquo;Impressed by their local knowledge of Jenks neighborhoods. They served papers during the antique festival weekend and handled the Main Street crowds like pros. Highly recommend!&rdquo;
                  </p>
                  <div className="text-sm text-gray-600">
                    <span itemProp="author" itemScope={true} itemType="https://schema.org/Person">
                      <span itemProp="name">Sarah L.</span>
                    </span> - Southern Lakes Resident
                  </div>
                </div>

                <div itemScope={true} itemType="https://schema.org/Review" className="bg-white p-6 rounded-lg shadow-md">
                  <meta itemProp="name" content="Jenks Process Server Review" />
                  <div itemProp="itemReviewed" itemScope={true} itemType="https://schema.org/LocalBusiness">
                    <meta itemProp="name" content="Just Legal Solutions - Jenks Process Server" />
                  </div>
                  <meta itemProp="datePublished" content="2024-10-05" />
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 text-lg">
                      ★★★★★
                    </div>
                    <div itemProp="reviewRating" itemScope={true} itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content="5" />
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="worstRating" content="1" />
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic" itemProp="reviewBody">
                    &ldquo;Needed papers served at The Reserve at Stonebrooke. They handled the gated community protocols perfectly and completed service efficiently. Professional and courteous throughout.&rdquo;
                  </p>
                  <div className="text-sm text-gray-600">
                    <span itemProp="author" itemScope={true} itemType="https://schema.org/Person">
                      <span itemProp="name">Michael D.</span>
                    </span> - Jenks Attorney
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
                Available 24/7 for urgent legal document service in Jenks
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
              <h2 className="text-2xl font-bold mb-2">Jenks Service Area Map</h2>
              <p className="text-blue-100">Professional process serving throughout Jenks, Oklahoma</p>
            </div>
            <div className="p-8">
              <GoogleMapsEmbed 
                countyName="Tulsa County"
                cityName="Jenks"
                state="Oklahoma"
                title="Jenks Process Server Service Area"
              />
            </div>
          </section>

          {/* Helpful Resources Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="p-6 bg-gradient-to-r from-gray-700 to-gray-800 text-white">
              <h2 className="text-2xl font-bold mb-2">Additional Resources & Guides</h2>
              <p className="text-gray-100">Comprehensive information to help with your legal document service needs</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                  <div className="flex items-center mb-3">
                    <Home className="h-6 w-6 text-red-600 mr-2" />
                    <h3 className="text-lg font-bold text-red-900">Landlord-Tenant Services</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">Complete guide to eviction notices and landlord-tenant law compliance</p>
                  <Link href="/seo/eviction-notice-process-server" className="text-red-600 hover:text-red-800 underline font-semibold">
                    Eviction Notice Process Server Guide →
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-3">
                    <Users className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-bold text-blue-900">Family Law Services</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">Specialized protocols for divorce papers, custody orders, and protective orders</p>
                  <Link href="/family-law-service-guide-tulsa-2025" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                    Family Law Process Serving Tips →
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <div className="flex items-center mb-3">
                    <Scale className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-bold text-green-900">Court Filing Requirements</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">Tulsa County court deadlines, case law, and filing requirements</p>
                  <Link href="/oklahoma-case-law-service-process-2025" className="text-green-600 hover:text-green-800 underline font-semibold">
                    Court Filing Deadlines Resource →
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-6 w-6 text-purple-600 mr-2" />
                    <h3 className="text-lg font-bold text-purple-900">Best Practices</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">Professional standards and best practices for process serving in Oklahoma</p>
                  <Link href="/oklahoma-process-server-best-practices-checklist-2025" className="text-purple-600 hover:text-purple-800 underline font-semibold">
                    Process Server Best Practices →
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                  <div className="flex items-center mb-3">
                    <DollarSign className="h-6 w-6 text-orange-600 mr-2" />
                    <h3 className="text-lg font-bold text-orange-900">Cost Comparison</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">Transparent pricing information and cost comparisons across Oklahoma</p>
                  <Link href="/oklahoma-process-serving-costs-comparison-2025" className="text-orange-600 hover:text-orange-800 underline font-semibold">
                    Pricing Comparison Guide →
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg border border-teal-200">
                  <div className="flex items-center mb-3">
                    <AlertCircle className="h-6 w-6 text-teal-600 mr-2" />
                    <h3 className="text-lg font-bold text-teal-900">FAQ & General Info</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">Frequently asked questions about Oklahoma process serving</p>
                  <Link href="/oklahoma-process-server-faq-2025" className="text-teal-600 hover:text-teal-800 underline font-semibold">
                    Process Server FAQ →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-6 text-blue-100">
                Professional process serving in Jenks with competitive rates and 24/7 emergency service
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
      </main>
      <Footer />
    </div>
  );
}
