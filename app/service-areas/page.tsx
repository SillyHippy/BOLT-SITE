import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, Search, Star, CheckCircle, Shield, Building2, HelpCircle } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import JsonLd from '@/components/JsonLd';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

// LocalBusiness schema with explicit ServiceArea
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://justlegalsolutions.org/#localbusiness",
  "name": "Just Legal Solutions",
  "image": "https://justlegalsolutions.org/images/process-server-tulsa.webp",
  "telephone": "+1-539-367-6832",
  "email": "contact@justlegalsolutions.org",
  "url": "https://justlegalsolutions.org",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "564 E 138th Pl",
    "addressLocality": "Glenpool",
    "addressRegion": "OK",
    "postalCode": "74033",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.9495,
    "longitude": -96.0017
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Oklahoma",
      "containsPlace": [
        { "@type": "City", "name": "Tulsa" },
        { "@type": "City", "name": "Oklahoma City" },
        { "@type": "City", "name": "Broken Arrow" },
        { "@type": "City", "name": "Norman" },
        { "@type": "City", "name": "Lawton" },
        { "@type": "City", "name": "Edmond" },
        { "@type": "City", "name": "Owasso" },
        { "@type": "City", "name": "Sapulpa" },
        { "@type": "City", "name": "Glenpool" },
        { "@type": "City", "name": "Jenks" },
        { "@type": "City", "name": "Bixby" },
        { "@type": "City", "name": "Bartlesville" },
        { "@type": "City", "name": "Claremore" },
        { "@type": "City", "name": "Sand Springs" },
        { "@type": "City", "name": "Enid" },
        { "@type": "City", "name": "Stillwater" }
      ]
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 35.4676,
      "longitude": -97.5164
    },
    "geoRadius": "300 mi",
    "description": "All 77 Oklahoma counties"
  },
  "priceRange": "$30-$200",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/justlegalsolutions",
    "https://www.google.com/maps/place/Just+Legal+Solutions"
  ]
};

// FAQ Schema for Service Area questions
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you serve papers in all 77 Oklahoma counties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Just Legal Solutions provides professional process serving throughout all 77 Oklahoma counties—from the Panhandle to the southeastern corner. Whether you need service in major metros like Tulsa and Oklahoma City or rural communities, we have you covered with licensed, bonded, and insured service."
      }
    },
    {
      "@type": "Question",
      "name": "Is there an extra fee for rural serves?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer transparent, competitive pricing statewide. While standard service rates apply to most locations, serves requiring significant travel outside the Tulsa metro area may include a mileage component. We always provide upfront quotes before accepting any serve so there are no surprises."
      }
    },
    {
      "@type": "Question",
      "name": "Can you coordinate multiple serves across different counties on the same day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We specialize in route-optimized multi-serve runs that save you time and money. If you have multiple defendants across different counties, we can often coordinate same-day or next-day service runs that reduce per-serve costs."
      }
    }
  ]
};

export const metadata: Metadata = {
  title: 'Oklahoma Process Server | All 77 Counties | Just Legal Solutions',
  description: 'Professional process server serving all 77 Oklahoma counties. Statewide coverage with same-day service available. Licensed, bonded, insured. Call (539) 367-6832.',
  keywords: 'process server Oklahoma, statewide process serving, Oklahoma process serving, legal document service Oklahoma, court papers Oklahoma counties, skip tracing Oklahoma',
  openGraph: {
    title: 'Process Server Service Areas Oklahoma | Statewide Coverage | Just Legal Solutions',
    description: 'Professional process server serving statewide throughout all of Oklahoma. Complete county coverage with same-day service available.',
    url: 'https://justlegalsolutions.org/service-areas',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Service Areas Oklahoma | Statewide Coverage',
    description: 'Professional process server serving statewide throughout all of Oklahoma.',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Areas', url: '/service-areas' },
];

const counties = [
  {
    name: "Tulsa County",
    seat: "Tulsa",
    cities: ["Tulsa", "Broken Arrow", "Owasso", "Bixby", "Jenks", "Sand Springs", "Glenpool", "Collinsville"],
    link: "/counties/tulsa-county",
    description: "Oil Capital county with 669,279 residents, Art Deco courthouse, energy industry hub"
  },
  {
    name: "Creek County", 
    seat: "Sapulpa",
    cities: ["Sapulpa", "Bristow", "Kellyville", "Kiefer", "Mounds", "Mannford", "Taft"],
    link: "/counties/creek-county",
    description: "Oil boom heritage county, Frankoma Pottery, Route 66 history"
  },
  {
    name: "Rogers County",
    seat: "Claremore", 
    cities: ["Claremore", "Catoosa", "Verdigris", "Oologah", "Inola", "Foyil", "Chelsea", "Talala"],
    link: "/counties/rogers-county",
    description: "Will Rogers heritage, Route 66 corridor, inland port at Catoosa"
  },
  {
    name: "Wagoner County",
    seat: "Wagoner",
    cities: ["Wagoner", "Coweta", "Porter", "Redbird", "Haskell"],
    link: "/counties/wagoner-county", 
    description: "Railroad crossroads heritage, agricultural and government center"
  },
  {
    name: "Washington County",
    seat: "Bartlesville",
    cities: ["Bartlesville", "Dewey", "Copan", "Ramona", "Ochelata", "Vera", "Wann", "Lenapah"],
    link: "/counties/washington-county",
    description: "First commercial oil well, Phillips Petroleum headquarters, Frank Lloyd Wright architecture"
  },
  {
    name: "Mayes County", 
    seat: "Pryor",
    cities: ["Pryor", "Chouteau", "Locust Grove", "Salina", "Spavinaw", "Adair"],
    link: "/counties/mayes-county",
    description: "Manufacturing center, Lewis and Clark expedition heritage"
  },
  {
    name: "Osage County",
    seat: "Pawhuska",
    cities: ["Pawhuska", "Skiatook", "Hominy", "Fairfax"],
    link: "/counties/osage-county",
    description: "Osage Nation heritage, oil lease history, Pioneer Woman Museum"
  },
  {
    name: "Nowata County",
    seat: "Nowata", 
    cities: ["Nowata", "Delaware", "Wann", "Lenapah"],
    link: "/counties/nowata-county",
    description: "Cherokee heritage, agricultural community"
  },
  {
    name: "Okmulgee County",
    seat: "Okmulgee",
    cities: ["Okmulgee", "Beggs", "Henryetta", "Taft"],
    link: "/counties/okmulgee-county",
    description: "Creek Nation capital, historic downtown, government center"
  }
];

const majorCities = [
  { name: "Tulsa", county: "Tulsa", population: "413,066", link: "/tulsa-process-server" },
  { name: "Broken Arrow", county: "Tulsa", population: "113,540", link: "/service-areas/broken-arrow" },
  { name: "Bartlesville", county: "Washington", population: "36,495", link: "/service-areas/bartlesville" },
  { name: "Owasso", county: "Tulsa", population: "36,926", link: "/service-areas/owasso" },
  { name: "Bixby", county: "Tulsa", population: "27,315", link: "/service-areas/bixby" },
  { name: "Jenks", county: "Tulsa", population: "25,949", link: "/service-areas/jenks" },
  { name: "Sapulpa", county: "Creek", population: "20,544", link: "/service-areas/sapulpa" },
  { name: "Sand Springs", county: "Tulsa", population: "19,912", link: "/service-areas/sand-springs" },
  { name: "Claremore", county: "Rogers", population: "18,766", link: "/service-areas/claremore" },
  { name: "Glenpool", county: "Tulsa", population: "14,683", link: "/service-areas/glenpool" },
  { name: "Okmulgee", county: "Okmulgee", population: "11,768", link: "/counties/okmulgee-county" },
  { name: "Coweta", county: "Wagoner", population: "9,943", link: "/service-areas/coweta" },
  { name: "Pryor", county: "Mayes", population: "9,539", link: "/service-areas/pryor" },
  { name: "Wagoner", county: "Wagoner", population: "9,090", link: "/service-areas/wagoner" },
  { name: "Skiatook", county: "Osage", population: "8,036", link: "/service-areas/skiatook" },
  { name: "Catoosa", county: "Rogers", population: "7,930", link: "/service-areas/catoosa" },
  { name: "Collinsville", county: "Tulsa", population: "7,140", link: "/service-areas/collinsville" }
];

export default function ServiceAreasHub() {
  return (
    <>
      <UnifiedSchema
        pageType="service"
        pageTitle="Process Server Service Areas Oklahoma | Statewide Coverage | Just Legal Solutions"
        pageDescription="Professional process server serving statewide throughout Oklahoma. Complete coverage of all 77 counties with same-day service available. Licensed, bonded, and insured statewide."
        pageUrl="https://justlegalsolutions.org/service-areas"
        siteName="Just Legal Solutions"
        organizationName="Just Legal Solutions"
        organizationUrl="https://justlegalsolutions.org"
        serviceType="Process Server"
        serviceName="Oklahoma Process Server Service Areas"
        serviceDescription="Professional process server serving statewide throughout all of Oklahoma including all 77 counties with same-day service available."
        serviceArea="Oklahoma, Statewide"
        priceRange="$30-$200"
        telephone="+1-539-367-6832"
        address={{
          streetAddress: "Statewide Service",
          addressLocality: "Oklahoma",
          addressRegion: "Oklahoma",
          postalCode: "74101",
          addressCountry: "US"
        }}
        breadcrumbItems={breadcrumbItems}
        reviewCount={156}
      />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Modern Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-28 pb-20 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-200 mb-6">
                <MapPin className="w-4 h-4" />
                Statewide Oklahoma Coverage
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Oklahoma Process Server
                <span className="block text-yellow-400 mt-2">Service Areas</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-2xl mx-auto">
                All 77 Counties • 500+ Cities • Same-Day Available
              </p>
              
              {/* Feature pills */}
              <div className="flex flex-wrap gap-3 justify-center items-center mb-8">
                <div className="flex items-center gap-2 bg-green-500/90 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-white shadow-lg">
                  <MapPin className="w-4 h-4" />
                  All 77 Counties Covered
                </div>
                <div className="flex items-center gap-2 bg-orange-500/90 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-white shadow-lg">
                  <Clock className="w-4 h-4" />
                  Same-Day Available
                </div>
                <div className="flex items-center gap-2 bg-blue-500/90 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-white shadow-lg">
                  <Shield className="w-4 h-4" />
                  Licensed & Bonded
                </div>
              </div>
              
              {/* SEO intro paragraph */}
              <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10">
                Statewide Oklahoma process server coverage across all 77 counties, including <Link href="/tulsa-process-server" className="text-yellow-400 hover:text-yellow-300 underline">Tulsa</Link>, Oklahoma City, Lawton, Norman, and Enid, with same-day service available in the Tulsa–Glenpool metro.
              </p>
              
              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:5393676832" 
                  className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (539) 367-6832
                </a>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all"
                >
                  <CheckCircle className="w-5 h-5" />
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
          
          {/* Bottom wave decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
            </svg>
          </div>
        </section>

        {/* Service Coverage Overview */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Oklahoma Statewide Legal Document Service Coverage
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Professional process serving throughout the entire state of Oklahoma, covering all 77 counties and 500+ cities and towns. From Oklahoma City and Tulsa to the smallest rural communities, we provide comprehensive legal document service with the same professional standards and competitive pricing statewide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Statewide Coverage</h3>
                <p className="text-gray-600">Complete Oklahoma coverage including all 77 counties, urban centers, suburban communities, and rural areas throughout the entire state.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Standards</h3>
                <p className="text-gray-600">Licensed, bonded, and insured statewide service with 95% success rate and same professional standards in every Oklahoma location.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Service Speed</h3>
                <p className="text-gray-600">Standard, rush, and same-day service available statewide. <Link href="/pricing" className="text-blue-600 hover:text-blue-800 font-medium">View pricing options →</Link></p>
              </div>
            </div>
          </div>
        </section>

        {/* Counties Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Primary Coverage Areas
              </h2>
              <p className="text-gray-600">Plus all 77 Oklahoma counties served at competitive flat rates</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {counties.map((county, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{county.name}</h3>
                      <p className="text-sm text-slate-500">County Seat: {county.seat}</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{county.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Major Cities:</p>
                    <div className="text-xs text-gray-600">
                      {county.cities.slice(0, 4).join(", ")}
                      {county.cities.length > 4 && ` + ${county.cities.length - 4} more`}
                    </div>
                  </div>
                  <Link 
                    href={county.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    View County Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Cities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Major Cities & Towns We Serve
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Professional process serving in Oklahoma&apos;s largest cities and growing metro areas.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {majorCities.map((city, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{city.name}</h3>
                    <span className="text-xs text-gray-500">{city.county} Co.</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Pop: {city.population}</p>
                  <Link 
                    href={city.link}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    City Details →
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Plus Oklahoma City, Norman, Edmond, Lawton, Enid, Stillwater, and dozens of smaller communities, rural areas, and unincorporated locations throughout all 77 Oklahoma counties.
              </p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Just Legal Solutions Across Oklahoma?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Licensed Statewide</h3>
                <p className="text-gray-600">Properly licensed, bonded, and insured in all counties we serve with all required registrations current.</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Local Knowledge</h3>
                <p className="text-gray-600">Deep understanding of each county&apos;s courthouse procedures, local customs, and geographic characteristics.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Consistent Quality</h3>
                <p className="text-gray-600">Same high standards and professional service whether serving in downtown Tulsa or rural Nowata County.</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">Consistent professional rates throughout entire state. <Link href="/pricing" className="text-blue-600 hover:text-blue-800 font-medium">View our pricing structure →</Link></p>
              </div>
            </div>
            
            {/* Unique geography-focused differentiators */}
            <div className="mt-12 bg-white rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="font-bold text-gray-900 mb-4 text-center">Our Statewide Advantage</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Route-optimized statewide runs</strong> to reduce extra mileage charges on multi-serve orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Experience with remote/rural Oklahoma service</strong> including unmarked roads, gated properties, and tribal land</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Familiarity with specific county courthouse filing cutoffs</strong> and local procedural requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Search Your Area */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Find Your Service Area
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Not sure if we serve your location? We provide <Link href="/oklahoma-process-server-faq-2026" className="text-blue-600 hover:text-blue-800 font-medium">statewide coverage throughout all of Oklahoma</Link> including urban, suburban, and rural areas across all 77 counties.
            </p>
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Areas We Serve Include:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Major Metropolitan Areas:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Greater Tulsa Metro</li>
                    <li>• Oklahoma City Metro</li>
                    <li>• Norman / Moore Area</li>
                    <li>• Lawton / Fort Sill Region</li>
                    <li>• Broken Arrow / Bixby</li>
                    <li>• Edmond / Stillwater</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Rural & Small Town Areas:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• All incorporated cities</li>
                    <li>• Unincorporated areas</li>
                    <li>• Rural residential areas</li>
                    <li>• Agricultural communities</li>
                    <li>• Tribal jurisdictions</li>
                    <li>• Remote locations</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Same-Day Radius Callout */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-orange-600" />
                <h3 className="font-bold text-gray-900">Same-Day Service Radius</h3>
              </div>
              <p className="text-gray-700">
                Same-day process serving available within ~50 miles of Tulsa/Glenpool, including <Link href="/service-areas/broken-arrow" className="text-blue-600 hover:underline">Broken Arrow</Link>, <Link href="/service-areas/jenks" className="text-blue-600 hover:underline">Jenks</Link>, <Link href="/service-areas/bixby" className="text-blue-600 hover:underline">Bixby</Link>, <Link href="/service-areas/owasso" className="text-blue-600 hover:underline">Owasso</Link>, <Link href="/service-areas/sapulpa" className="text-blue-600 hover:underline">Sapulpa</Link>, <Link href="/service-areas/sand-springs" className="text-blue-600 hover:underline">Sand Springs</Link>, <Link href="/service-areas/claremore" className="text-blue-600 hover:underline">Claremore</Link>, and <Link href="/service-areas/bartlesville" className="text-blue-600 hover:underline">Bartlesville</Link>. <Link href="/pricing" className="text-orange-600 font-medium hover:underline">View same-day pricing →</Link>
              </p>
            </div>
            
            {/* Google Map Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206558.86084829054!2d-96.0892372!3d36.0344292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6eb9d8b7c7b15%3A0x55eaf3b9f3ee9f44!2sGlenpool%2C%20OK!5e0!3m2!1sen!2sus!4v1704412800000!5m2!1sen!2sus"
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Just Legal Solutions Service Area - Glenpool, Oklahoma"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Helpful Resources */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Helpful Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/oklahoma-process-server-faq-2026" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-900 mb-2">Oklahoma Process Server FAQ 2026</h3>
                <p className="text-gray-600 text-sm">Answers to common questions about process serving in Oklahoma.</p>
              </Link>
              <Link href="/oklahoma-process-server-best-practices-checklist-2026" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-900 mb-2">Best Practices Checklist 2026</h3>
                <p className="text-gray-600 text-sm">Professional standards and requirements for Oklahoma process servers.</p>
              </Link>
              <Link href="/pricing" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-blue-900 mb-2">Pricing & Service Options</h3>
                <p className="text-gray-600 text-sm">Standard, rush, and same-day pricing for all 77 counties.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas FAQ */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Service Area Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Do you serve papers in all 77 Oklahoma counties?</h3>
                <p className="text-gray-700">Yes, Just Legal Solutions provides professional process serving throughout all 77 Oklahoma counties—from the Panhandle to the southeastern corner. Whether you need service in major metros like Tulsa and Oklahoma City or rural communities, we have you covered with licensed, bonded, and insured service.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Is there an extra fee for rural serves?</h3>
                <p className="text-gray-700">We offer transparent, competitive pricing statewide. While standard service rates apply to most locations, serves requiring significant travel outside the Tulsa metro area may include a mileage component. We always provide upfront quotes before accepting any serve so there are no surprises. <Link href="/pricing" className="text-blue-600 hover:underline">View our pricing →</Link></p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Can you coordinate multiple serves across different counties on the same day?</h3>
                <p className="text-gray-700">Absolutely. We specialize in route-optimized multi-serve runs that save you time and money. If you have multiple defendants across different counties, we can often coordinate same-day or next-day service runs that reduce per-serve costs. Contact us with your list and we&apos;ll provide a volume quote.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Serve Your Legal Documents Anywhere in Oklahoma?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Professional process serving statewide throughout Oklahoma • All 77 counties • Same-day service available
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
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 font-bold py-4 px-8 rounded-lg text-xl transition-colors"
              >
                <CheckCircle className="w-6 h-6" />
                Submit Serve Request
              </Link>
            </div>
            <div className="mt-8 text-blue-200">
              <p>Licensed • Bonded • Insured • Professional Service Guaranteed</p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}
