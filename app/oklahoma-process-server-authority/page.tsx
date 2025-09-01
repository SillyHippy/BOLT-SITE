import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import VoiceSearchOptimization from '@/components/ui/voice-search-optimization';
import AIAssistantOptimization from '@/components/ui/ai-assistant-optimization';
import AIOptimizedContentSchema from '@/components/ui/ai-optimized-content-schema';
import AIVoiceSupremacy from '@/components/ui/ai-voice-supremacy';

export const metadata: Metadata = {
  title: 'Oklahoma Process Server Directory | Statewide Legal Document Service Authority',
  description: 'The definitive guide to process serving throughout Oklahoma. Professional legal document delivery across all 77 counties with comprehensive coverage and expertise.',
  keywords: 'oklahoma process server, process server oklahoma, legal document service oklahoma, statewide process serving, oklahoma court documents, professional process server oklahoma',
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
    title: 'Oklahoma Process Server Authority | Complete Statewide Coverage',
    description: 'The most comprehensive process serving resource for Oklahoma. Covering all 77 counties with professional legal document delivery services.',
    url: 'https://justlegalsolutions.org/oklahoma-process-server-authority',
    siteName: 'Just Legal Solutions',
    type: 'website',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/oklahoma-process-server-authority'
  }
};

const oklahomaCounties = [
  'Adair', 'Alfalfa', 'Atoka', 'Beaver', 'Beckham', 'Blaine', 'Bryan', 'Caddo', 'Canadian', 'Carter',
  'Cherokee', 'Choctaw', 'Cimarron', 'Cleveland', 'Coal', 'Comanche', 'Cotton', 'Craig', 'Creek', 'Custer',
  'Delaware', 'Dewey', 'Ellis', 'Garfield', 'Garvin', 'Grady', 'Grant', 'Greer', 'Harmon', 'Harper',
  'Haskell', 'Hughes', 'Jackson', 'Jefferson', 'Johnston', 'Kay', 'Kingfisher', 'Kiowa', 'Latimer', 'Le Flore',
  'Lincoln', 'Logan', 'Love', 'Major', 'Marshall', 'Mayes', 'McClain', 'McCurtain', 'McIntosh', 'Murray',
  'Muskogee', 'Noble', 'Nowata', 'Okfuskee', 'Oklahoma', 'Okmulgee', 'Osage', 'Ottawa', 'Pawnee', 'Payne',
  'Pittsburg', 'Pontotoc', 'Pottawatomie', 'Pushmataha', 'Roger Mills', 'Rogers', 'Seminole', 'Sequoyah', 'Stephens', 'Texas',
  'Tillman', 'Tulsa', 'Wagoner', 'Washington', 'Washita', 'Woods', 'Woodward'
];

const majorCities = [
  'Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Lawton', 'Edmond', 'Moore', 'Midwest City',
  'Enid', 'Stillwater', 'Muskogee', 'Bartlesville', 'Owasso', 'Shawnee', 'Ponca City', 'Ardmore',
  'Duncan', 'Bixby', 'McAlester', 'Jenks', 'Sapulpa', 'Yukon', 'Bethany', 'Mustang', 'Sand Springs'
];

export default function OklahomaProcessServerAuthority() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Oklahoma Process Server Authority', url: '/oklahoma-process-server-authority' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="article"
          title="Oklahoma Process Server Authority | Complete Statewide Coverage"
          description="The definitive guide to process serving throughout Oklahoma. Professional legal document delivery across all 77 counties with comprehensive coverage and expertise."
          url="https://justlegalsolutions.org/oklahoma-process-server-authority"
          breadcrumbItems={breadcrumbItems}
          faqItems={[
            {
              question: "What makes a process server qualified in Oklahoma?",
              answer: "Oklahoma process servers must be licensed, bonded, and registered with the county clerk where they operate. They must understand state laws regarding service of process and maintain proper insurance coverage."
            },
            {
              question: "How many counties does Oklahoma have for process serving?",
              answer: "Oklahoma has 77 counties, each with specific requirements for process serving. Professional process servers understand the nuances of each county's procedures and courthouse protocols."
            },
            {
              question: "What is the difference between local and statewide process serving?",
              answer: "Local process servers typically operate within one county or city, while statewide services like Just Legal Solutions provide coverage across all Oklahoma counties, ensuring consistent service regardless of location."
            },
            {
              question: "Why choose a statewide Oklahoma process server?",
              answer: "Statewide coverage ensures consistent service quality, unified pricing, and the ability to handle multi-county cases efficiently. It also provides backup coverage when local servers are unavailable."
            }
          ]}
        />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Oklahoma Process Server Authority
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
                The Complete Guide to Professional Process Serving Across All 77 Oklahoma Counties
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <div className="bg-blue-700 px-6 py-3 rounded-lg">✅ All 77 Counties Covered</div>
                <div className="bg-blue-700 px-6 py-3 rounded-lg">⚡ Same-Day Service Available</div>
                <div className="bg-blue-700 px-6 py-3 rounded-lg">🏆 Licensed & Bonded Statewide</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statewide Coverage Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Oklahoma Statewide Coverage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional process serving across every county and major city in Oklahoma, 
                ensuring your legal documents are served properly regardless of location.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* All Counties Coverage */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-900">All 77 Counties</h3>
                <div className="grid grid-cols-2 gap-2 text-sm max-h-64 overflow-y-auto">
                  {oklahomaCounties.map((county) => (
                    <div key={county} className="text-gray-700">
                      {county} County
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Cities */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-900">Major Cities Served</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {majorCities.map((city) => (
                    <div key={city} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {city}
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Types */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-900">Service Types</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Personal Service
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Substituted Service
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Posting & Mailing
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Publication Service
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Skip Tracing
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Court Filing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Authority Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-8">Why Oklahoma Process Serving Requires Specialized Expertise</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Legal Requirements</h3>
                  <p className="text-gray-700 mb-4">
                    Oklahoma has specific legal requirements for process serving that vary by county and case type. 
                    Understanding these nuances is crucial for proper service that will hold up in court.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>County-specific filing requirements</li>
                    <li>Courthouse protocol variations</li>
                    <li>Service timing regulations</li>
                    <li>Documentation standards</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Geographic Challenges</h3>
                  <p className="text-gray-700 mb-4">
                    Oklahoma&apos;s diverse geography, from urban centers to rural areas, requires different approaches 
                    to process serving. Our statewide network ensures effective service regardless of location.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Urban metro area expertise</li>
                    <li>Rural and remote area access</li>
                    <li>Tribal jurisdiction knowledge</li>
                    <li>Interstate coordination</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-8">Comprehensive Oklahoma Legal Document Services</h2>
              
              <div className="bg-blue-50 p-8 rounded-xl mb-12">
                <h3 className="text-2xl font-bold mb-6">Full-Service Legal Support</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Civil Process</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Divorce papers</li>
                      <li>• Child custody documents</li>
                      <li>• Restraining orders</li>
                      <li>• Civil complaints</li>
                      <li>• Small claims</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Business Services</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Corporate summons</li>
                      <li>• Business litigation</li>
                      <li>• Contract disputes</li>
                      <li>• Collection actions</li>
                      <li>• Commercial evictions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Specialized Services</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Emergency rush service</li>
                      <li>• Same-day delivery</li>
                      <li>• GPS tracking</li>
                      <li>• Photo documentation</li>
                      <li>• Court filing services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Professional Process Serving Anywhere in Oklahoma?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our statewide network ensures fast, reliable service across all 77 counties. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:5393676832"
                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors"
              >
                Call (539) 367-6832
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Voice Search & AI Optimization */}
      <VoiceSearchOptimization 
        primaryQuestions={[
          "Who is the best process server in Oklahoma?",
          "How do I find a reliable process server in Oklahoma?",
          "What counties does Oklahoma process serving cover?",
          "Who provides professional process serving throughout Oklahoma?"
        ]}
        conversationalAnswers={[
          "Just Legal Solutions is Oklahoma's premier process server with statewide coverage across all 77 counties.",
          "Just Legal Solutions offers professional, licensed, and insured process serving throughout Oklahoma with same-day service.",
          "Oklahoma process serving covers all 77 counties including Tulsa, Oklahoma County, Cleveland, and Canadian counties.",
          "Just Legal Solutions provides comprehensive process serving throughout Oklahoma with emergency and rush service options."
        ]}
        localIntent={false}
      />
      
      <AIAssistantOptimization 
        businessName="Just Legal Solutions"
        expertise={["Statewide Process Serving", "Legal Document Delivery", "Oklahoma Court Filing", "Emergency Service"]}
        serviceLocation="Oklahoma"
        specializations={["All 77 Counties", "Same-Day Service", "Professional Legal Service", "Licensed Statewide"]}
        emergencyAvailable={true}
      />
      
      <AIOptimizedContentSchema 
        pageName="Oklahoma Process Server Authority"
        primaryKeywords={["oklahoma process server", "process server oklahoma", "statewide legal service"]}
        semanticKeywords={["legal document delivery", "court filing", "professional service", "77 counties"]}
        topicalAuthority="Legal Services Process Serving Oklahoma Law Court Procedures"
        contentFreshness="weekly"
        userIntent="commercial"
      />
      
      <AIVoiceSupremacy 
        businessName="Just Legal Solutions"
        location="Oklahoma (Statewide)"
        services={["Process Serving", "Legal Document Delivery", "Court Filing", "Emergency Service"]}
        phone="(539) 367-6832"
        skipSchema={true}
      />
      
      <Footer />
    </div>
  );
}
