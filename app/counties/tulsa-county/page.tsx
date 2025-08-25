import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, Award, DollarSign, Users, Building2, Shield, CheckCircle, Star, Calendar, FileText, Scale, AlertCircle } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata: Metadata = {
  title: 'Tulsa County Legal Document Service | Metropolitan Process Serving | Just Legal Solutions',
  description: 'Tulsa County’s process server—serving Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Glenpool, Collinsville, and all communities. Fast, local legal document delivery for every need.',
  keywords: 'process server Tulsa County, legal document service Tulsa County, court papers Oklahoma, Tulsa County courthouse, process serving Broken Arrow Owasso Bixby, skip tracing Tulsa County, licensed process server Oklahoma, process server near me Tulsa, Tulsa County process serving, legal papers delivery Tulsa, subpoena service Tulsa County, divorce papers service Tulsa, eviction notice service Oklahoma, civil litigation support Tulsa, process server 74101 74103 74104 74105 74106 74107, legal document delivery Broken Arrow, court filing Tulsa County courthouse, professional process server Oklahoma',
  openGraph: {
    title: 'Tulsa County Metropolitan Legal Documents | Process Serving Service',
  description: 'Legal document service for every city and town in Tulsa County—trusted by law firms, families, and businesses for reliable, local process serving.',
    url: 'https://justlegalsolutions.org/counties/tulsa-county',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tulsa County Court Documents & Civil Litigation | Metro Area Service',
  description: 'Process serving in Tulsa County—covering all cities, suburbs, and rural areas with professional, prompt legal document delivery.',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/counties/tulsa-county',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Counties', url: '/counties' },
  { name: 'Tulsa County', url: '/counties/tulsa-county' },
];

const tulsaCountyFAQs = [
  {
    question: "How much does a process server cost in Tulsa County?",
    answer: "We offer competitive rates for Tulsa County process serving with standard, rush, and same-day emergency service available throughout all cities including Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Glenpool, and Collinsville. Contact us for current pricing or visit our pricing page for detailed information."
  },
  {
    question: "Which cities in Tulsa County do you serve?",
    answer: "We serve all cities and towns in Tulsa County including Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Glenpool, and Collinsville, plus all unincorporated areas within the county boundaries."
  },
  {
    question: "Where do you file court documents in Tulsa County?",
    answer: "Court documents are filed at the Tulsa County Courthouse located at 500 S. Denver Ave., Tulsa, OK 74103. We also handle municipal court filings in individual cities as needed."
  },
  {
    question: "How long does service take in Tulsa County?",
    answer: "Standard service takes 3-5 business days anywhere in Tulsa County. Rush service is completed within 24 hours, and same-day emergency service is available for urgent situations."
  },
  {
    question: "Are you licensed to serve process throughout Tulsa County?",
    answer: "Yes, we are fully licensed, bonded, and insured process servers registered with the Tulsa County Clerk. We maintain all required bonds and certifications for county-wide service."
  },
  {
    question: "Can you serve papers in rural areas of Tulsa County?",
    answer: "Yes, we serve legal documents in all areas of Tulsa County including rural and unincorporated areas outside city limits with the same professional standards and pricing."
  },
  {
    question: "What types of legal documents do you serve in Tulsa County?",
    answer: "We serve all types of legal documents including civil litigation, family law papers, real estate documents, business litigation, criminal subpoenas, and probate papers throughout Tulsa County."
  },
  {
    question: "Do you provide skip tracing services in Tulsa County?",
    answer: "Yes, we provide professional skip tracing services throughout Tulsa County to locate hard-to-find defendants, witnesses, and parties using advanced databases and local knowledge."
  },
  {
    question: "Can you deliver to homes, businesses, or gated communities in Tulsa County?",
    answer: "Yes. We routinely serve papers in residential neighborhoods, office parks, schools, medical facilities, and secure gated communities throughout Tulsa County with professional protocols for each location type."
  },
  {
    question: "How fast can you serve in smaller towns like Sperry or Glenpool?",
    answer: "Service is typically attempted within 24-48 hours in all Tulsa County towns, including smaller communities like Sperry, Collinsville, and unincorporated areas. Expedited same-day options are available for urgent situations."
  },
  {
    question: "What if the recipient lives in a part of a city that crosses county lines?",
    answer: "We verify jurisdiction and ensure the court receives correct, county-compliant affidavit of service, even if a city crosses into another county (such as Broken Arrow, Bixby, or Sand Springs which span multiple counties)."
  },
  {
    question: "Do you serve legal documents after hours or on weekends in Tulsa County?",
    answer: "Yes, we offer after-hours and weekend service for urgent legal deliveries throughout Tulsa County. Contact us for availability and rush options in all cities and unincorporated areas."
  },
  {
    question: "What happens if the person to be served is not at home?",
    answer: "We use legal skip tracing and make diligent attempts at varying times throughout Tulsa County to ensure the highest chance of successful service, and keep you informed throughout the process with detailed progress reports."
  }
];

const tulsaCountyCities = [
  {
    name: "Tulsa",
    population: "413,066",
    description: "County seat and Oklahoma's second-largest city, Oil Capital of the World",
    link: "/tulsa-process-server"
  },
  {
    name: "Broken Arrow",
    population: "113,540",
    description: "Fastest growing suburb with excellent schools and family communities",
    link: "/service-areas/broken-arrow"
  },
  {
    name: "Owasso",
    population: "36,926",
    description: "Growing suburban community with strong residential neighborhoods",
    link: "/service-areas/owasso"
  },
  {
    name: "Bixby",
    population: "27,315",
    description: "Charming downtown with Arkansas River access and growing families",
    link: "/service-areas/bixby"
  },
  {
    name: "Jenks",
    population: "25,949",
    description: "Antique Capital of Oklahoma with tourism and education focus",
    link: "/service-areas/jenks"
  },
  {
    name: "Sand Springs",
    population: "19,912",
    description: "Manufacturing community with glass production and industrial heritage",
    link: "/service-areas/sand-springs"
  },
  {
    name: "Glenpool",
    population: "14,683",
    description: "Oil heritage community, site of Glenn Pool discovery that started Oklahoma oil boom",
    link: "/service-areas/glenpool"
  },
  {
    name: "Collinsville",
    population: "7,140",
    description: "Rural character community with agricultural and small manufacturing base",
    link: "/service-areas/collinsville"
  }
];

export default function TulsaCountyProcessServer() {
  return (
    <>
      <Navbar />
      
      <UnifiedSchema
        pageType="location"
        url="https://justlegalsolutions.org/counties/tulsa-county"
        title="Tulsa County Legal Document Service | Metropolitan Process Serving | Just Legal Solutions"
        description="Tulsa County's process server—serving Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Glenpool, Collinsville, and all communities. Fast, local legal document delivery for every need."
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org/' },
          { name: 'Counties', item: 'https://justlegalsolutions.org/counties' },
          { name: 'Tulsa County', item: 'https://justlegalsolutions.org/counties/tulsa-county' }
        ]}
        serviceDetails={{
          name: "Process Server Tulsa County",
          description: "Professional legal document service throughout Tulsa County, Oklahoma including all cities, towns, and unincorporated areas with same-day service available.",
          areaServed: ["Tulsa County", "Tulsa", "Broken Arrow", "Owasso", "Bixby", "Jenks", "Sand Springs", "Glenpool", "Collinsville"]
        }}
        location={{
          name: "Just Legal Solutions - Tulsa County Process Server",
          geo: {
            latitude: 36.1156,
            longitude: -95.9713
          }
        }}
        faqItems={tulsaCountyFAQs}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 142,
          bestRating: 5,
          worstRating: 1
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Process Server <span className="text-yellow-400">Tulsa County, Oklahoma</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                County-Wide Legal Document Service • All Cities & Towns • Professional Excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link 
                  href="/pricing" 
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  <DollarSign className="w-6 h-6" />
                  View Pricing & Service Options
                </Link>
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

        {/* Comprehensive Service Guarantee */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 border-b border-green-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <Shield className="w-8 h-8 text-green-600 inline-block mr-2" />
                Comprehensive Service Guarantee
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional excellence backed by technology and proven results across Tulsa County
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-green-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">99.7% Success Rate</h3>
                  <p className="text-green-600 font-semibold mb-4">County-Wide Excellence</p>
                  <p className="text-gray-700">
                    Proven track record across all Tulsa County communities, from downtown Tulsa to rural areas
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">GPS-Tracked Attempts</h3>
                  <p className="text-blue-600 font-semibold mb-4">Timestamped Photos</p>
                  <p className="text-gray-700">
                    Complete documentation with GPS coordinates and timestamped photographic evidence
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-yellow-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Same-Day Affidavits</h3>
                  <p className="text-yellow-600 font-semibold mb-4">Court-Admissible</p>
                  <p className="text-gray-700">
                    Professional affidavits delivered same day for immediate court filing requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tulsa County Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Oklahoma&apos;s Premier County for Legal Services
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    <strong>Established:</strong> November 16, 1907 (Oklahoma Statehood)<br/>
                    <strong>County Seat:</strong> Tulsa<br/>
                    <strong>Population:</strong> 669,279 (2020 Census)<br/>
                    <strong>Area:</strong> 587 square miles
                  </p>
                  <p>
                    Tulsa County stands as Oklahoma&apos;s most populous and economically significant county, serving as the heart of the state&apos;s energy industry and second-largest metropolitan area. From the Oil Capital of the World in <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800 underline">Tulsa</Link> to the fastest-growing suburbs like <Link href="/service-areas/broken-arrow" className="text-blue-600 hover:text-blue-800 underline">Broken Arrow</Link> and <Link href="/service-areas/owasso" className="text-blue-600 hover:text-blue-800 underline">Owasso</Link>, our county encompasses diverse communities with sophisticated legal needs.
                  </p>
                  <p>
                    Our process serving team provides comprehensive coverage throughout all of Tulsa County&apos;s incorporated cities and unincorporated areas. We understand the unique characteristics of each community, from urban Tulsa&apos;s complex business district to the suburban neighborhoods of <Link href="/service-areas/bixby" className="text-blue-600 hover:text-blue-800 underline">Bixby</Link> and <Link href="/service-areas/jenks" className="text-blue-600 hover:text-blue-800 underline">Jenks</Link>, ensuring professional service regardless of location. Learn more about our <Link href="/oklahoma-process-server-technology-2025" className="text-blue-600 hover:text-blue-800 underline">advanced GPS tracking technology</Link> and <Link href="/oklahoma-process-server-pricing-2025" className="text-blue-600 hover:text-blue-800 underline">transparent pricing structure</Link>.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Tulsa County Statistics</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Total Cities:</span>
                    <span className="font-semibold">8 incorporated cities</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Largest City:</span>
                    <span className="font-semibold">Tulsa (413,066)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Economic Base:</span>
                    <span className="font-semibold">Energy, Aerospace, Healthcare</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Courthouse:</span>
                    <span className="font-semibold">Historic Art Deco (1937)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Legal Districts:</span>
                    <span className="font-semibold">District, Municipal, Federal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Area:</span>
                    <span className="font-semibold">587 square miles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Map */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Tulsa County Service Area
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional process serving throughout all of Tulsa County including urban, suburban, and rural areas. 
                Click on the map to explore our complete service coverage. For detailed information about our <Link href="/process-server-tulsa-guide" className="text-blue-600 hover:text-blue-800 underline">comprehensive service areas</Link> and <Link href="/oklahoma-legal-service-areas-2025" className="text-blue-600 hover:text-blue-800 underline">Oklahoma legal service zones</Link>.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <GoogleMapsEmbed 
                countyName="Tulsa County"
                cityName="Tulsa"
                title="Tulsa County Process Server Service Area"
              />
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                <strong>Complete Coverage:</strong> Tulsa • Broken Arrow • Owasso • Bixby • Jenks • Sand Springs • Glenpool • Collinsville
              </p>
            </div>
          </div>
        </section>

        {/* Extensive Coverage & Neighborhood Listings - Professional Redesign */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Extensive Coverage & Neighborhood Listings
                </span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Professional process serving throughout every district, neighborhood, and community in Tulsa County&apos;s 587 square miles
              </p>
            </div>

            {/* Scrolling Image Gallery for SEO */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Tulsa County Service Areas Gallery</h3>
              <Carousel className="w-full max-w-6xl mx-auto">
                <CarouselContent className="-ml-6">
                  <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="w-full h-60 relative group">
                      <Image 
                        src="/images/tulsa-county-courthouse.jpeg" 
                        alt="Tulsa County Courthouse downtown Tulsa legal district process serving hub for court document delivery and legal services"
                        fill
                        className="object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end p-4">
                        <p className="text-white font-bold text-lg">Tulsa County Courthouse District</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="w-full h-60 relative group">
                      <Image 
                        src="/images/tulsa-courier-downtown.jpeg" 
                        alt="Downtown Tulsa business district skyscrapers and financial center where professional process servers deliver legal documents to corporate offices"
                        fill
                        className="object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end p-4">
                        <p className="text-white font-bold text-lg">Downtown Business District</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="w-full h-60 relative group">
                      <Image 
                        src="/images/Tulsa_skyline_aerial,_April_2023.jpg" 
                        alt="Aerial view Tulsa skyline showing comprehensive coverage area for process serving across all Tulsa neighborhoods and districts"
                        fill
                        className="object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end p-4">
                        <p className="text-white font-bold text-lg">Complete Tulsa Coverage</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="w-full h-60 relative group">
                      <Image 
                        src="/images/tulsa-process-server-delivering-documents.png" 
                        alt="Professional process server delivering legal documents in Tulsa residential neighborhood ensuring proper service of process throughout Tulsa County"
                        fill
                        className="object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end p-4">
                        <p className="text-white font-bold text-lg">Residential Service Excellence</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="w-full h-60 relative group">
                      <Image 
                        src="/images/Tulsa_11.jpg" 
                        alt="Tulsa County suburban neighborhoods and residential areas served by professional process servers for legal document delivery and court papers"
                        fill
                        className="object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end p-4">
                        <p className="text-white font-bold text-lg">Suburban Communities</p>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="w-full h-60 relative group">
                      <Image 
                        src="/images/Tulsa business district building.png" 
                        alt="Tulsa business district commercial buildings and office complexes where corporate process serving and legal document delivery services are provided"
                        fill
                        className="object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end p-4">
                        <p className="text-white font-bold text-lg">Commercial & Office Districts</p>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>

            {/* Professional Badges Section for SEO */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Trust & Quality Badges</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div className="flex justify-center">
                  <Image 
                    src="/badges/licensed-bonded-badge.svg" 
                    alt="Oklahoma licensed and bonded process server certification badge ensuring legal compliance and professional service standards"
                    width={120} 
                    height={120}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-center">
                  <Image 
                    src="/badges/fastest-process-server-oklahoma-badge.svg" 
                    alt="Fastest process server in Oklahoma badge guaranteeing same-day and rush legal document delivery services"
                    width={120} 
                    height={120}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-center">
                  <Image 
                    src="/badges/99-9-percent-success-rate-badge.svg" 
                    alt="99.9% success rate badge demonstrating exceptional process serving performance and legal document delivery effectiveness"
                    width={120} 
                    height={120}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-center">
                  <Image 
                    src="/badges/24-7-emergency-service-badge.svg" 
                    alt="24/7 emergency process serving service badge available for urgent legal document delivery throughout Tulsa County"
                    width={120} 
                    height={120}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-center">
                  <Image 
                    src="/badges/Trusted-by-Tulsa-Law-Firms-Badge.svg" 
                    alt="Trusted by Tulsa law firms badge showing attorney and legal professional endorsements for reliable process serving"
                    width={120} 
                    height={120}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-center">
                  <Image 
                    src="/badges/oklahoma-statewide-coverage-badge.svg" 
                    alt="Oklahoma statewide coverage badge indicating complete process serving availability across all 77 Oklahoma counties"
                    width={120} 
                    height={120}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Modern Coverage Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Urban Districts */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Urban Core Districts</h3>
                  <p className="text-gray-600 text-lg">Downtown & metropolitan areas</p>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-4 text-xl">Downtown Financial District</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <span className="inline-flex items-center gap-2 text-blue-800 font-medium">
                        <MapPin className="w-4 h-4" />
                        <span>BOK Tower & Wells Fargo Buildings</span>
                      </span>
                      <span className="inline-flex items-center gap-2 text-blue-800 font-medium">
                        <MapPin className="w-4 h-4" />
                        <span>Brady Arts District</span>
                      </span>
                      <span className="inline-flex items-center gap-2 text-blue-800 font-medium">
                        <MapPin className="w-4 h-4" />
                        <span>Blue Dome Entertainment</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-4 text-xl">Midtown & Cultural Districts</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <span className="inline-flex items-center gap-2 text-green-800 font-medium">
                        <MapPin className="w-4 h-4" />
                        <span>Brookside Shopping District</span>
                      </span>
                      <span className="inline-flex items-center gap-2 text-green-800 font-medium">
                        <MapPin className="w-4 h-4" />
                        <span>Cherry Street Historic</span>
                      </span>
                      <span className="inline-flex items-center gap-2 text-green-800 font-medium">
                        <MapPin className="w-4 h-4" />
                        <span>Utica Square Luxury</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Suburban Cities */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Major Suburban Cities</h3>
                  <p className="text-gray-600 text-lg">Growing family communities</p>
                </div>
                
                <div className="space-y-4">
                  {tulsaCountyCities.slice(0, 4).map((city, index) => (
                    <div key={index} className="p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:from-green-50 hover:to-green-100 transition-colors duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900 text-lg">{city.name}</h4>
                        <span className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full font-bold">{city.population}</span>
                      </div>
                      <p className="text-gray-600 mb-3 leading-relaxed">{city.description}</p>
                      <Link 
                        href={city.link}
                        className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-bold"
                      >
                        <MapPin className="w-4 h-4" />
                        Detailed Service Info
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Rural & Unincorporated */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Rural & Small Cities</h3>
                  <p className="text-gray-600 text-lg">Complete county coverage</p>
                </div>
                
                <div className="space-y-4">
                  {tulsaCountyCities.slice(4).map((city, index) => (
                    <div key={index} className="p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:from-orange-50 hover:to-orange-100 transition-colors duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900 text-lg">{city.name}</h4>
                        <span className="text-xs bg-orange-200 text-orange-800 px-3 py-1 rounded-full font-bold">{city.population}</span>
                      </div>
                      <p className="text-gray-600 mb-3 leading-relaxed">{city.description}</p>
                      <Link 
                        href={city.link}
                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-bold"
                      >
                        <MapPin className="w-4 h-4" />
                        Service Details
                      </Link>
                    </div>
                  ))}
                  
                  {/* Unincorporated Communities */}
                  <div className="p-5 bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl border-2 border-dashed border-orange-300">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Unincorporated Communities</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['Skiatook', 'Sperry', 'Liberty', 'Lotsee', 'Fair Oaks', 'Turley'].map((community, idx) => (
                        <div key={idx} className="text-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <span className="text-sm font-bold text-gray-900">{community}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Coverage Statistics */}
            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white p-12 rounded-3xl shadow-2xl">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">587</div>
                  <div className="text-gray-300 text-lg font-medium">Square Miles Covered</div>
                  <div className="text-sm text-gray-400 mt-1">Complete Tulsa County</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">8+</div>
                  <div className="text-gray-300 text-lg font-medium">Incorporated Cities</div>
                  <div className="text-sm text-gray-400 mt-1">Plus Unincorporated Areas</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">669K+</div>
                  <div className="text-gray-300 text-lg font-medium">Residents Served</div>
                  <div className="text-sm text-gray-400 mt-1">Growing Daily</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-gray-300 text-lg font-medium">Emergency Service</div>
                  <div className="text-sm text-gray-400 mt-1">Always Available</div>
                </div>
              </div>
              <div className="text-center mt-12">
                <p className="text-2xl text-gray-200 font-medium leading-relaxed">
                  From downtown Tulsa&apos;s corporate towers to rural county borders — complete professional coverage
                </p>
                <div className="mt-6 flex justify-center gap-4">
                  <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-bold transition-colors duration-300">
                    Get Service Quote
                  </Link>
                  <Link href="/service-areas" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-bold transition-colors duration-300">
                    View All Areas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courthouse Information Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-blue-600" />
                  Tulsa County Courthouse
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-lg border">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <strong>Address:</strong> 500 S. Denver Ave., Tulsa, OK 74103
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <strong>Phone:</strong> (918) 596-5000
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <strong>Hours:</strong> 24/7 Emergency Service Available
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Scale className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <strong>Jurisdiction:</strong> All civil, criminal, family, and probate matters in Tulsa County
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Historical Significance</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Built:</strong> 1937 during the Great Depression<br/>
                    <strong>Architect:</strong> Solomon Layton<br/>
                    <strong>Style:</strong> Art Deco/Art Moderne<br/>
                    <strong>Recognition:</strong> National Register of Historic Places (1992)
                  </p>
                  <p>
                    The magnificent Tulsa County Courthouse stands as one of the finest examples of Art Deco architecture in Oklahoma. Built with PWA funds during the Great Depression at a cost of $1.5 million, this 11-floor limestone building replaced the original 1906 courthouse and represents the prosperity of Tulsa&apos;s oil boom era.
                  </p>
                  <p>
                    Our process servers are intimately familiar with all courthouse procedures, filing requirements, and the various departments within this historic building. We ensure efficient service and proper documentation for all court-related matters throughout Tulsa County.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas & Internal Resources Hub */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Service Areas & Legal Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete process serving coverage throughout Tulsa County with professional legal resources and guides
              </p>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Major Cities */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  Major Cities
                </h3>
                <div className="space-y-3">
                  <Link href="/tulsa-process-server" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Tulsa Process Server
                  </Link>
                  <Link href="/service-areas/broken-arrow" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Broken Arrow Service
                  </Link>
                  <Link href="/service-areas/owasso" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Owasso Process Serving
                  </Link>
                  <Link href="/service-areas/bixby" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Bixby Legal Documents
                  </Link>
                  <Link href="/service-areas/jenks" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Jenks Court Papers
                  </Link>
                </div>
              </div>
              
              {/* Additional Areas */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Additional Areas
                </h3>
                <div className="space-y-3">
                  <Link href="/service-areas/sand-springs" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Sand Springs Service
                  </Link>
                  <Link href="/service-areas/glenpool" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Glenpool Process Server
                  </Link>
                  <Link href="/service-areas/collinsville" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Collinsville Legal Service
                  </Link>
                  <Link href="/service-areas/sapulpa" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Sapulpa Document Delivery
                  </Link>
                  <Link href="/oklahoma-legal-service-areas-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                    All Oklahoma Areas
                  </Link>
                </div>
              </div>
              
              {/* Legal Document Types */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Document Types
                </h3>
                <div className="space-y-3">
                  <Link href="/family-law-service-guide-tulsa-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Family Law Documents
                  </Link>
                  <Link href="/high-profile-service-protocols-tulsa-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                    High-Profile Service
                  </Link>
                  <Link href="/oklahoma-case-law-service-process-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Case Law & Process
                  </Link>
                  <Link href="/oklahoma-electronic-service-guide-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Electronic Service Guide
                  </Link>
                  <Link href="/process-serving-mistakes-guide-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Avoid Common Mistakes
                  </Link>
                </div>
              </div>
              
              {/* Professional Resources */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Professional Resources
                </h3>
                <div className="space-y-3">
                  <Link href="/oklahoma-process-server-pricing-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Pricing & Service Options
                  </Link>
                  <Link href="/oklahoma-process-server-technology-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Technology & GPS Tracking
                  </Link>
                  <Link href="/ai-skip-tracing-guide-oklahoma-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                    AI Skip Tracing Guide
                  </Link>
                  <Link href="/oklahoma-process-server-best-practices-checklist-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Best Practices Checklist
                  </Link>
                  <Link href="/oklahoma-process-server-faq-2025" className="block text-blue-600 hover:text-blue-800 font-medium">
                    Complete FAQ Guide
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Additional Service Links */}
            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Related Services & Counties</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Adjacent Counties</h4>
                  <div className="space-y-2">
                    <Link href="/counties/creek-county" className="block text-blue-600 hover:text-blue-800 text-sm">
                      Creek County Service
                    </Link>
                    <Link href="/counties/rogers-county" className="block text-blue-600 hover:text-blue-800 text-sm">
                      Rogers County Process Server
                    </Link>
                    <Link href="/counties/wagoner-county" className="block text-blue-600 hover:text-blue-800 text-sm">
                      Wagoner County Service
                    </Link>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Specialized Services</h4>
                  <div className="space-y-2">
                    <Link href="/courier-services-tulsa" className="block text-blue-600 hover:text-blue-800 text-sm">
                      Courier Services Tulsa
                    </Link>
                    <Link href="/process-server-tulsa-guide" className="block text-blue-600 hover:text-blue-800 text-sm">
                      Complete Tulsa Guide
                    </Link>
                    <Link href="/seo/what-is-a-process-server" className="block text-blue-600 hover:text-blue-800 text-sm">
                      What Is A Process Server?
                    </Link>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Cost & Comparison</h4>
                  <div className="space-y-2">
                    <Link href="/oklahoma-process-serving-costs-comparison-2025" className="block text-blue-600 hover:text-blue-800 text-sm">
                      Cost Comparison Guide
                    </Link>
                    <Link href="/pricing" className="block text-blue-600 hover:text-blue-800 text-sm">
                      Current Pricing
                    </Link>
                    <Link href="/contact" className="block text-blue-600 hover:text-blue-800 text-sm">
                      Get Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Pricing Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Process Serving Throughout Tulsa County
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Licensed, bonded, and insured process servers covering all cities in Tulsa County including <Link href="/tulsa-process-server" className="text-blue-600 hover:text-blue-800 underline">Tulsa</Link>, <Link href="/service-areas/broken-arrow" className="text-blue-600 hover:text-blue-800 underline">Broken Arrow</Link>, <Link href="/service-areas/owasso" className="text-blue-600 hover:text-blue-800 underline">Owasso</Link>, <Link href="/service-areas/bixby" className="text-blue-600 hover:text-blue-800 underline">Bixby</Link>, <Link href="/service-areas/jenks" className="text-blue-600 hover:text-blue-800 underline">Jenks</Link>, <Link href="/service-areas/sand-springs" className="text-blue-600 hover:text-blue-800 underline">Sand Springs</Link>, <Link href="/service-areas/glenpool" className="text-blue-600 hover:text-blue-800 underline">Glenpool</Link>, and <Link href="/service-areas/collinsville" className="text-blue-600 hover:text-blue-800 underline">Collinsville</Link>. Same-day service available with our <Link href="/oklahoma-process-server-technology-2025" className="text-blue-600 hover:text-blue-800 underline">advanced tracking technology</Link>.
              </p>
              <Link 
                href="/pricing" 
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg text-xl font-bold transition-colors shadow-lg"
              >
                <DollarSign className="w-7 h-7" />
                View Complete Pricing & Service Options
              </Link>
              <p className="text-sm text-gray-600 mt-4">
                Transparent pricing • No hidden fees • Same professional standards county-wide
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Just Legal Solutions for Tulsa County?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Licensed & Bonded</h3>
                <p className="text-gray-600">Fully licensed with Tulsa County Clerk, $2,000 bond, and comprehensive insurance coverage.</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">County-Wide Coverage</h3>
                <p className="text-gray-600">Complete coverage of all 8 cities and unincorporated areas throughout Tulsa County&apos;s 587 square miles.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">95% Success Rate</h3>
                <p className="text-gray-600">Highest success rate in Tulsa County with professional skip tracing and persistent service attempts.</p>
              </div>
              <div className="text-center">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Courthouse Expertise</h3>
                <p className="text-gray-600">Deep knowledge of Tulsa County Courthouse procedures and all municipal court systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Tulsa County Attorneys Choose Just Legal Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlike other process servers in Tulsa County, we combine technology, local expertise, and professional standards to deliver superior results.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Competitive Edge</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Real-Time GPS Tracking</h4>
                      <p className="text-gray-600">Unlike traditional process servers, we provide real-time location updates and progress tracking.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">24/7 Emergency Service</h4>
                      <p className="text-gray-600">When other companies are closed, we&apos;re available for urgent legal matters around the clock.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Advanced Skip Tracing</h4>
                      <p className="text-gray-600">Professional investigators with access to databases other process servers don&apos;t have.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Local Courthouse Knowledge</h4>
                      <p className="text-gray-600">Deep relationships with Tulsa County Clerk staff and understanding of local court procedures.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Process Server Comparison</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Same-Day Service</span>
                    <div className="flex gap-4">
                      <span className="text-green-600 font-semibold">✓ Us</span>
                      <span className="text-red-500">✗ Others</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">GPS Tracking</span>
                    <div className="flex gap-4">
                      <span className="text-green-600 font-semibold">✓ Us</span>
                      <span className="text-red-500">✗ Others</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">24/7 Availability</span>
                    <div className="flex gap-4">
                      <span className="text-green-600 font-semibold">✓ Us</span>
                      <span className="text-red-500">✗ Others</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Digital Affidavits</span>
                    <div className="flex gap-4">
                      <span className="text-green-600 font-semibold">✓ Us</span>
                      <span className="text-gray-400">△ Some</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">County-Wide Coverage</span>
                    <div className="flex gap-4">
                      <span className="text-green-600 font-semibold">✓ Us</span>
                      <span className="text-gray-400">△ Limited</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick-Reference Coverage Table */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quick-Reference Coverage Table
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete coverage across all Tulsa County districts and venues
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="px-6 py-4 text-left font-bold">Historic & Cultural</th>
                    <th className="px-6 py-4 text-left font-bold">Business & Commerce</th>
                    <th className="px-6 py-4 text-left font-bold">Residential & Courts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-blue-900 mb-2">Downtown Tulsa Financial</div>
                      <div className="text-sm text-gray-600">Historic financial district</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-green-900 mb-2">ONEOK Plaza (100 W 5th St)</div>
                      <div className="text-sm text-gray-600">Major corporate headquarters</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-purple-900 mb-2">South Jenks (Greer Ranch, Aspen Creek)</div>
                      <div className="text-sm text-gray-600">Premium residential areas</div>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-blue-900 mb-2">Brookside District</div>
                      <div className="text-sm text-gray-600">Historic shopping & dining</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-green-900 mb-2">River Bend Plaza</div>
                      <div className="text-sm text-gray-600">Commercial development</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-purple-900 mb-2">Glenpool neighborhoods</div>
                      <div className="text-sm text-gray-600">Family residential zones</div>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-blue-900 mb-2">Cherry Street District</div>
                      <div className="text-sm text-gray-600">Entertainment & arts corridor</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-green-900 mb-2">Tulsa International Airport</div>
                      <div className="text-sm text-gray-600">Transportation hub</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-purple-900 mb-2">Bixby subdivisions</div>
                      <div className="text-sm text-gray-600">Growing suburban communities</div>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-blue-900 mb-2">Gathering Place Riverfront</div>
                      <div className="text-sm text-gray-600">World-class riverfront park</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-green-900 mb-2">QuikTrip Corporate Campus</div>
                      <div className="text-sm text-gray-600">Major employer headquarters</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-purple-900 mb-2">Sand Springs municipal areas</div>
                      <div className="text-sm text-gray-600">Historic western suburbs</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-blue-900 mb-2">Blue Dome Entertainment</div>
                      <div className="text-sm text-gray-600">Historic entertainment district</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-green-900 mb-2">Outlets at Jenks Riverwalk</div>
                      <div className="text-sm text-gray-600">Premier shopping destination</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-purple-900 mb-2">Collinsville rural zones</div>
                      <div className="text-sm text-gray-600">Agricultural & rural residential</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* "Serve Near" Keyword Phrases */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Process Server &ldquo;Near Me&rdquo; Locations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional legal document delivery at key Tulsa County venues and landmarks
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  Financial District
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Process server near Tulsa Financial District</li>
                  <li>• Legal document delivery downtown Tulsa</li>
                  <li>• Court papers served at major office buildings</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Event Venues
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Legal document delivery at Tulsa State Fairgrounds</li>
                  <li>• Process serving at BOK Center events</li>
                  <li>• Subpoena service at convention centers</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Neighborhood Hubs
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Subpoena service at Brookside Village</li>
                  <li>• Same-day service in South Tulsa neighborhoods</li>
                  <li>• Process serving Cherry Street District</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                  <Scale className="w-5 h-5 mr-2" />
                  Court Facilities
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Court papers served at Tulsa County Courthouse</li>
                  <li>• Municipal court document delivery</li>
                  <li>• Federal courthouse legal service</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Community Areas
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Legal papers at Gathering Place</li>
                  <li>• Document service at Arkansas River parks</li>
                  <li>• Process serving residential communities</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Urgent Service
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Emergency process server Tulsa County</li>
                  <li>• Same-day legal document delivery</li>
                  <li>• Rush service all Tulsa neighborhoods</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Serve Your Legal Documents in Tulsa County?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Professional process serving throughout all cities and towns in Tulsa County • Licensed • Bonded • Insured
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
            <div className="mt-8 text-blue-200">
              <p>County-wide service including Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Glenpool, Collinsville</p>
            </div>
          </div>
        </section>

        {/* Related Counties */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Other Counties We Serve Near Tulsa County
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <Link href="/counties/creek-county" className="text-blue-600 hover:text-blue-800 font-medium">
                Creek County
              </Link>
              <Link href="/counties/rogers-county" className="text-blue-600 hover:text-blue-800 font-medium">
                Rogers County
              </Link>
              <Link href="/counties/wagoner-county" className="text-blue-600 hover:text-blue-800 font-medium">
                Wagoner County
              </Link>
              <Link href="/counties/washington-county" className="text-blue-600 hover:text-blue-800 font-medium">
                Washington County
              </Link>
              <Link href="/counties/mayes-county" className="text-blue-600 hover:text-blue-800 font-medium">
                Mayes County
              </Link>
              <Link href="/counties/osage-county" className="text-blue-600 hover:text-blue-800 font-medium">
                Osage County
              </Link>
            </div>
          </div>
        </section>

        {/* Tulsa-Specific FAQs */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Tulsa-Specific FAQs & Local Expertise
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Local Venue FAQs */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-blue-900 mb-6">Venue-Specific Questions</h3>
                
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <MapPin className="w-5 h-5 text-green-600 mr-2" />
                    Can you serve papers at the Tulsa Botanic Garden?
                  </h4>
                  <p className="text-gray-700">
                    Yes. We coordinate with staff at 3900 Tulsa Botanic Dr to discreetly serve documents during visiting hours with full respect for the venue&apos;s peaceful environment.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Clock className="w-5 h-5 text-yellow-600 mr-2" />
                    What are peak traffic times to avoid on I-244 serves?
                  </h4>
                  <p className="text-gray-700">
                    Avoid 7–9 AM and 4–6 PM rush hours when scheduling serves along I-244 corridor. We plan routes strategically for optimal timing.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                    Do you handle process serving at OSU-Tulsa campus?
                  </h4>
                  <p className="text-gray-700">
                    Yes. We work with campus security at 700 N Greenwood Ave for compliant service following all university protocols.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Shield className="w-5 h-5 text-purple-600 mr-2" />
                    How do you serve in gated Creek-County border areas?
                  </h4>
                  <p className="text-gray-700">
                    We verify precise jurisdiction and coordinate gate access for compliant serves in Creek Turnpike neighborhoods and border areas.
                  </p>
                </div>
              </div>
              
              {/* Court & Filing Tips */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-blue-900 mb-6">Court & Filing Tips</h3>
                
                <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 mr-2" />
                    Tulsa County Courthouse Filing
                  </h4>
                  <p className="text-gray-700 mb-3">
                    File affidavits same day at 500 S Denver Ave for next-day docket entry.
                  </p>
                  <p className="text-gray-700">
                    Bring multiple copies of affidavits when serving in downtown and suburban courts.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Scale className="w-5 h-5 text-green-600 mr-2" />
                    Municipal Court Matters
                  </h4>
                  <p className="text-gray-700">
                    Each city has specific hours and clerk contacts. We maintain current information for all municipal courts in Tulsa County.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Users className="w-5 h-5 text-yellow-600 mr-2" />
                    Local Insights & Community Involvement
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Sponsor of Tulsa County Bar Association annual seminar—&ldquo;Process Serving Best Practices&rdquo;</li>
                    <li>• Volunteer process-serving clinic for pro bono family-law cases at Legal Aid Services Tulsa</li>
                    <li>• Host quarterly &ldquo;Meet Your Server&rdquo; webinars for Tulsa attorneys</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <AlertCircle className="w-5 h-5 text-purple-600 mr-2" />
                    Seasonal & Weather Considerations
                  </h4>
                  <div className="text-gray-700 space-y-2">
                    <p><strong>Rainy Season (April–June):</strong> Allow extra travel time for river-lowland serves</p>
                    <p><strong>Heat Advisory (July–August):</strong> Schedule morning serves in South Tulsa to beat midday heat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Hyperlocal FAQs */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Additional Hyperlocal FAQs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specific questions about serving at major Tulsa venues and events
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  State Fair & Events
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Can you serve papers at Tulsa State Fair&apos;s Expo Square?</h4>
                    <p className="text-gray-700 text-sm">
                      Yes. Our teams operate onsite during fair season at Expo Square (4145 E 21st St), ensuring compliance with event regulations for court documents.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Do you handle serves at the BOK Center during concerts?</h4>
                    <p className="text-gray-700 text-sm">
                      Yes. We coordinate with arena security to serve employment or vendor-related documents at BOK Center events on Arena Drive.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3" />
                  Timing & Logistics
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What&apos;s the best way to coordinate serves in Sand Springs?</h4>
                    <p className="text-gray-700 text-sm">
                      Schedule between 10 AM–2 PM near Sand Springs Municipal Court (818 N Main St) when court staff is available to facilitate same-day affidavits.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tulsa Festival Road Closures</h4>
                    <p className="text-gray-700 text-sm">
                      During Mayfest and other downtown events, road closures on Riverside and Second Street may affect timing; plan serves before 10 AM or after 6 PM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Seasonal & Event Alerts */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <h4 className="text-lg font-bold text-yellow-900 mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Holiday Notice
                </h4>
                <p className="text-sm text-yellow-800">
                  <strong>Thanksgiving & Christmas:</strong> Allow an extra 24 hours during major holidays—our 24/7 emergency line remains open.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h4 className="text-lg font-bold text-orange-900 mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Summer Peak Season
                </h4>
                <p className="text-sm text-orange-800">
                  <strong>June–August:</strong> Increased residential serves; schedule evening slots (5–8 PM) for best success.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h4 className="text-lg font-bold text-green-900 mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Trust & Credibility
                </h4>
                <div className="text-sm text-green-800 space-y-1">
                  <p>• Licensed, bonded, insured (Bond #2000)</p>
                  <p>• 24/7 emergency availability</p>
                  <p>• GPS tracking & timestamped photos</p>
                  <p>• 50+ years combined experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Modernized */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions - Tulsa County Process Serving
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our professional legal document services across Tulsa County
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* FAQ Content Column */}
              <div className="space-y-6">
                {tulsaCountyFAQs.slice(0, Math.ceil(tulsaCountyFAQs.length / 2)).map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* FAQ Content Column 2 + Images */}
              <div className="space-y-6">
                {tulsaCountyFAQs.slice(Math.ceil(tulsaCountyFAQs.length / 2)).map((faq, index) => (
                  <div key={index + Math.ceil(tulsaCountyFAQs.length / 2)} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + Math.ceil(tulsaCountyFAQs.length / 2) + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Process Serving Help?</h3>
                <p className="text-gray-700 mb-6">
                  Our experienced Tulsa County team is ready to assist with your legal document needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:(539)367-6832" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (539) 367-6832
                  </a>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Internal Linking Section */}
            <div className="mt-12 bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Comprehensive Legal Resources</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-blue-900 mb-3">Process Server Guides</h4>
                  <div className="space-y-2">
                    <Link href="/process-server-tulsa-guide" className="block text-blue-600 hover:text-blue-800 text-sm underline">
                      Complete Tulsa Process Server Guide
                    </Link>
                    <Link href="/oklahoma-process-server-faq-2025" className="block text-blue-600 hover:text-blue-800 text-sm underline">
                      Oklahoma Process Server FAQ
                    </Link>
                    <Link href="/oklahoma-process-server-best-practices-checklist-2025" className="block text-blue-600 hover:text-blue-800 text-sm underline">
                      Best Practices Checklist
                    </Link>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="font-semibold text-blue-900 mb-3">Legal Document Types</h4>
                  <div className="space-y-2">
                    <Link href="/family-law-service-guide-tulsa-2025" className="block text-blue-600 hover:text-blue-800 text-sm underline">
                      Family Law Document Service
                    </Link>
                    <Link href="/high-profile-service-protocols-tulsa-2025" className="block text-blue-600 hover:text-blue-800 text-sm underline">
                      High-Profile Service Protocols
                    </Link>
                    <Link href="/oklahoma-case-law-service-process-2025" className="block text-blue-600 hover:text-blue-800 text-sm underline">
                      Oklahoma Case Law Guide
                    </Link>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="font-semibold text-blue-900 mb-3">Technology & Pricing</h4>
                  <div className="space-y-2">
                    <Link href="/oklahoma-process-server-technology-2025" className="block text-blue-600 hover:text-blue-800 text-sm underline">
                      Technology & GPS Tracking
                    </Link>
                    <Link href="/oklahoma-process-server-pricing-2025" className="block text-blue-600 hover:text-blue-800 text-sm underline">
                      Pricing & Service Options
                    </Link>
                    <Link href="/ai-skip-tracing-guide-oklahoma-2025" className="block text-blue-600 hover:text-blue-800 text-sm underline">
                      AI Skip Tracing Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}
