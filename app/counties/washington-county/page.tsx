import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, Award, DollarSign, Users, Building2, Shield, CheckCircle, Star, Calendar, FileText, Scale, AlertCircle } from 'lucide-react';
import LocalBusinessSchema from '@/components/ui/local-business-schema';
import ServiceSchema from '@/components/ui/service-schema';
import FAQSchema from '@/components/ui/enhanced-faq-schema';
import BreadcrumbSchema from '@/components/ui/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'Process Server Washington County OK | $60 Standard Service | Just Legal Solutions',
  description: 'Licensed process server throughout Washington County, Oklahoma. Serving Bartlesville. $60 standard, same-day available.',
  keywords: 'process server Washington County, legal document service Washington County, court papers Oklahoma, Bartlesville courthouse, process serving Bartlesville, skip tracing Washington County',
  openGraph: {
    title: 'Process Server Washington County OK | Just Legal Solutions',
    description: 'Licensed process server throughout Washington County, Oklahoma. Professional legal document service in all cities and towns.',
    url: 'https://justlegalsolutions.org/counties/washington-county',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Washington County OK',
    description: 'Licensed process server throughout Washington County, Oklahoma. Professional service in all cities.',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/counties/washington-county',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Counties', url: '/counties' },
  { name: 'Washington County', url: '/counties/washington-county' },
];

const washingtonCountyFAQs = [
  {
    question: "How much does a process server cost in Washington County?",
    answer: "Our Washington County process serving starts at $60 for standard service, $100 for rush service, and $150 for same-day emergency service throughout all cities including Bartlesville."
  },
  {
    question: "Which cities in Washington County do you serve?",
    answer: "We serve all cities and towns in Washington County including Bartlesville, plus all unincorporated areas within the county boundaries."
  },
  {
    question: "Where do you file court documents in Washington County?",
    answer: "Court documents are filed at the Washington County Courthouse located at 420 S. Johnstone Ave., Bartlesville, OK 74003. Phone: (918) 337-2870."
  },
  {
    question: "How long does service take in Washington County?",
    answer: "Standard service takes 3-5 business days anywhere in Washington County. Rush service is completed within 24 hours, and same-day emergency service is available for urgent situations."
  },
  {
    question: "Are you licensed to serve process throughout Washington County?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with the Washington County Clerk. We maintain all required bonds and certifications for county-wide service."
  },
  {
    question: "Can you serve papers in rural areas of Washington County?",
    answer: "Yes, we serve legal documents in all areas of Washington County including rural and unincorporated areas outside city limits with the same professional standards and pricing."
  }
];

export default function WashingtonCountyProcessServer() {
  return (
    <>
      <LocalBusinessSchema
        name="Just Legal Solutions - Washington County Process Server"
        address={{
          streetAddress: "County-wide Service",
          addressLocality: "Bartlesville",
          addressRegion: "Oklahoma",
          postalCode: "74000"
        }}
        phone="(539) 367-6832"
        description="Professional process server throughout Washington County, Oklahoma providing legal document service in all cities including Bartlesville."
        serviceArea={["Washington County", "Oklahoma"]}
      />
      
      <ServiceSchema
        serviceName="Process Server Washington County"
        serviceDescription="Professional legal document service throughout Washington County, Oklahoma including all cities, towns, and unincorporated areas with same-day service available."
        serviceArea="Washington County, Oklahoma"
        priceRange="$60-$150"
        serviceType="Legal Services"
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <FAQSchema faqs={washingtonCountyFAQs} pageTitle="Process Server Washington County Oklahoma" />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Process Server <span className="text-yellow-400">Washington County, Oklahoma</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                County-Wide Legal Document Service • All Cities & Towns • Professional Excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 bg-green-600 px-6 py-3 rounded-lg font-semibold">
                  <DollarSign className="w-5 h-5" />
                  Standard Service: $60
                </div>
                <div className="flex items-center gap-2 bg-orange-600 px-6 py-3 rounded-lg font-semibold">
                  <Clock className="w-5 h-5" />
                  Same-Day Available: $150
                </div>
              </div>
              <a 
                href="tel:5393676832" 
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-xl transition-colors"
              >
                <Phone className="w-6 h-6" />
                Call Now: (539) 367-6832
              </a>
            </div>
          </div>
        </section>

        {/* County Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Professional Legal Services Throughout Washington County
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong>County Seat:</strong> Bartlesville<br/>
                    <strong>Established:</strong> 1907 (Oklahoma Statehood)<br/>
                    <strong>Major Cities:</strong> Bartlesville
                  </p>
                  <p>
                    Washington County represents an important part of Oklahoma&apos;s legal landscape, serving diverse communities from the county seat of Bartlesville to rural areas throughout the county. Our process serving team provides comprehensive coverage throughout all incorporated cities and unincorporated areas.
                  </p>
                  <p>
                    We understand the unique characteristics of each community in Washington County, ensuring professional service regardless of location while maintaining consistent standards and competitive pricing throughout the county.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Washington County Service Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>County Seat:</span>
                    <span className="font-semibold">Bartlesville</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cities Served:</span>
                    <span className="font-semibold">1 incorporated cities</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Courthouse:</span>
                    <span className="font-semibold">420 S. Johnstone Ave.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Hours:</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Cities & Towns We Serve in Washington County
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Bartlesville</h3>
                <p className="text-sm text-gray-600 mb-2">Population: 36,495</p>
                <p className="text-gray-700 text-sm mb-4">Named for Jacob Bartles who noticed oil seeps during Civil War. Nellie Johnstone No. 1 well April 15, 1897 - Oklahoma&apos;s ...</p>
                <Link 
                  href="/service-areas/bartlesville"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Serve Your Legal Documents in Washington County?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Professional process serving throughout all cities and towns in Washington County • Licensed • Bonded • Insured
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:5393676832" 
                className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-xl transition-colors"
              >
                <Phone className="w-6 h-6" />
                Call: (539) 367-6832
              </a>
              <Link 
                href="/contact" 
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 border-2 border-blue-500 font-bold py-4 px-8 rounded-lg text-xl transition-colors"
              >
                <Calendar className="w-6 h-6" />
                Request Quote
              </Link>
            </div>
          </div>
        </section>
      
        {/* County Statistics Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
                <div className="text-gray-700">Emergency Service Available</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-green-900 mb-2">$60</div>
                <div className="text-gray-700">Starting Price Countywide</div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-yellow-900 mb-2">Licensed</div>
                <div className="text-gray-700">Bonded & Insured</div>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-red-900 mb-2">100%</div>
                <div className="text-gray-700">Professional Affidavits</div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Process Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Process Serving Throughout the County
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our County-Wide Services</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <strong>All Legal Documents:</strong> Divorce papers, custody modifications, eviction notices, small claims, civil complaints, subpoenas
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <strong>Professional Skip Tracing:</strong> Advanced location services when addresses are unknown or outdated
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <strong>Court Filing Services:</strong> Same-day filing, certified copies, and document retrieval services
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <strong>Rush & Emergency Service:</strong> Same-day service available throughout the county for urgent legal matters
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Oklahoma Legal Requirements</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <strong>Process Server Licensing:</strong> All process servers must be licensed with the county clerk and maintain a $2,000 bond.
                  </div>
                  <div>
                    <strong>Service Standards:</strong> Service must comply with Oklahoma Rules of Civil Procedure Title 12. Proper service includes personal delivery or approved substitute methods.
                  </div>
                  <div>
                    <strong>Affidavit Requirements:</strong> Professional affidavits of service must be filed with the court, detailing time, place, and method of service.
                  </div>
                  <div>
                    <strong>Due Process Protection:</strong> Proper service ensures constitutional due process rights are protected in all legal proceedings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Coverage Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Complete County Coverage
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Professional process serving in every city, town, and unincorporated area throughout the county
            </p>
            <div className="bg-blue-900 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Ready to Serve Your Documents?</h3>
              <p className="text-blue-100 mb-6">
                Licensed, bonded, and insured process serving throughout the county • Same-day service available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:5393676832" 
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg text-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call: (539) 367-6832
                </a>
                <Link 
                  href="/contact" 
                  className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 border-2 border-blue-500 font-bold py-3 px-6 rounded-lg text-lg transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
</div>
    </>
  );
}