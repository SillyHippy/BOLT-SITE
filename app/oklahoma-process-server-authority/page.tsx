import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import VoiceSearchOptimization from '@/components/ui/voice-search-optimization';
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
              answer: "Under 12 O.S. § 158.1, Oklahoma process servers must be licensed by a district court, which grants statewide authority to serve legal documents. They must also be bonded and meet additional requirements set by the licensing court. Licensing is not county-specific—a process server licensed in any Oklahoma district court may serve documents anywhere in the state."
            },
            {
              question: "How many counties does Oklahoma have for process serving?",
              answer: "Oklahoma has 77 counties. The legal requirements for service of process are governed statewide by 12 O.S. § 2004, so the rules for valid service are the same across all counties. Counties may differ in administrative courthouse procedures (filing hours, drop-off locations, etc.), but the substantive service requirements are uniform."
            },
            {
              question: "What is the difference between local and statewide process serving?",
              answer: "Under 12 O.S. § 158.1, a licensed Oklahoma process server has statewide authority—there is no legal distinction between 'local' and 'statewide' licensing. However, a statewide service like Just Legal Solutions offers the practical advantage of crews across major metro areas, reducing travel time and enabling faster service across all 77 counties."
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

              {/* Statewide Authority Statement */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Statewide Authority Under 12 O.S. § 158.1</h3>
                <p className="text-gray-700">
                  Under <strong>12 O.S. § 158.1</strong>, a private process server licensed by any Oklahoma district court has <strong>statewide authority</strong> to serve legal documents. Licensing is not limited to the county where the process server applied—it applies across all 77 Oklahoma counties. The substantive rules for valid service are set by <strong>12 O.S. § 2004</strong> and apply uniformly statewide. For the full statutory breakdown, see our <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">Oklahoma Process Server Laws</Link> guide.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Legal Requirements</h3>
                  <p className="text-gray-700 mb-4">
                    Oklahoma&apos;s legal requirements for service of process are governed statewide by 12 O.S. § 2004. 
                    While the substantive rules are uniform, counties may differ in administrative courthouse procedures 
                    (filing hours, drop-off locations, and local clerk preferences). Understanding these practical nuances 
                    is crucial for efficient service.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Statewide legal requirements under § 2004 (counties may differ in administrative procedures)</li>
                    <li>Courthouse protocol variations by location</li>
                    <li>Service timing and documentation standards</li>
                    <li>Licensing and bonding under § 158.1</li>
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
                      <li>• Protective orders (note: emergency protective orders are served by law enforcement per 22 O.S. § 60.4)</li>
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

        {/* Related Resources */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/oklahoma-process-server-laws" className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Oklahoma Process Server Laws & Requirements</h3>
                <p className="text-gray-600 text-sm">Complete guide to licensing, bonding, and state law requirements for process servers in Oklahoma.</p>
              </Link>
              <Link href="/oklahoma-process-server-best-practices-checklist-2026" className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Process Server Best Practices Checklist 2026</h3>
                <p className="text-gray-600 text-sm">Essential checklist covering documentation, service methods, and compliance standards.</p>
              </Link>
              <Link href="/seo/what-is-a-process-server" className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">What Is a Process Server?</h3>
                <p className="text-gray-600 text-sm">Learn what process servers do, how they operate, and when you need one for your legal matter.</p>
              </Link>
              <Link href="/service-areas" className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Oklahoma Service Areas</h3>
                <p className="text-gray-600 text-sm">Browse our complete list of cities and counties served throughout Oklahoma.</p>
              </Link>
              <Link href="/process-serving-mistakes-guide" className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Common Process Serving Mistakes</h3>
                <p className="text-gray-600 text-sm">The most frequent errors that lead to case dismissals—and how to avoid them.</p>
              </Link>
              <Link href="/ultimate-guide-process-serving-oklahoma" className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Ultimate Guide to Process Serving in Oklahoma</h3>
                <p className="text-gray-600 text-sm">Comprehensive 2026 resource covering laws, procedures, costs, and best practices.</p>
              </Link>
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
        emitSchema={false}
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
