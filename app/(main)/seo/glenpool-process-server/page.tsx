import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import VoiceSearchOptimization from '@/components/ui/voice-search-optimization';
import WebsiteSchema from '@/components/ui/website-schema';
import SearchEngineSignals from '@/components/ui/search-engine-signals';

export const metadata: Metadata = {
  title: 'Process Server Glenpool Oklahoma - 24/7 Legal Document Delivery',
  description: 'Expert process server in Glenpool, Oklahoma. Same-day service available. Licensed statewide coverage with competitive rates starting at $60.',
  keywords: ['process server Glenpool', 'Glenpool process server', 'legal document delivery Glenpool Oklahoma', '24 hour process server Glenpool', 'same day process server Glenpool Oklahoma'],
  openGraph: {
    title: 'Process Server Glenpool Oklahoma - 24/7 Legal Document Delivery',
    description: 'Expert process server in Glenpool, Oklahoma. Same-day service available.',
    url: 'https://justlegalsolutions.org/seo/glenpool-process-server',
    images: [
      {
        url: '/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Glenpool Process Server - Just Legal Solutions'
      }
    ]
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/glenpool-process-server/'
  }
};

const primaryQuestions = [
  "Who is the best process server in Glenpool Oklahoma?",
  "How much does process serving cost in Glenpool?",
  "Do you provide 24-hour process serving in Glenpool?",
  "What areas around Glenpool do you serve?"
];

const conversationalAnswers = [
  "Just Legal Solutions is the premier process server in Glenpool, Oklahoma, providing 24/7 statewide coverage with professional, licensed service.",
  "Process serving in Glenpool starts at $60 for standard service, with same-day options available. View our pricing page for complete rates.",
  "Yes, we offer 24-hour emergency process serving in Glenpool, Oklahoma for urgent legal documents and critical deadlines.",
  "We serve all of Glenpool and surrounding areas including Tulsa County, Creek County, and provide statewide Oklahoma coverage."
];

export default function GlenpoolProcessServer() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-12 bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-700 to-green-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Process Server Glenpool, Oklahoma
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                24/7 Emergency Service • Same-Day Delivery • Statewide Licensed Coverage
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:5393676832" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Emergency Service: (539) 367-6832
                </a>
                <a href="/pricing" className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Professional Process Serving in Glenpool
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Same-Day Service</h3>
                <p className="text-gray-700">
                  Emergency same-day process serving in Glenpool for urgent legal matters and tight deadlines.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4 text-green-800">24/7 Availability</h3>
                <p className="text-gray-700">
                  Round-the-clock emergency service available for critical legal document delivery in Glenpool.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Statewide Coverage</h3>
                <p className="text-gray-700">
                  Licensed throughout Oklahoma with primary focus on Glenpool and surrounding Tulsa County areas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section - Voice Optimized */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="voice-optimized bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Who is the best process server in Glenpool Oklahoma?</h3>
                <p className="voice-answer text-gray-700">Just Legal Solutions is the premier process server in Glenpool, Oklahoma, providing 24/7 statewide coverage with professional, licensed service and competitive rates.</p>
              </div>
              <div className="voice-optimized bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-green-800">How much does process serving cost in Glenpool?</h3>
                <p className="voice-answer text-gray-700">Process serving in Glenpool starts at $60 for standard service, with same-day options available. <a href="/pricing" className="text-blue-600 hover:underline">View our pricing page</a> for complete rates and service options.</p>
              </div>
              <div className="voice-optimized bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">Do you provide 24-hour process serving in Glenpool?</h3>
                <p className="voice-answer text-gray-700">Yes, we offer 24-hour emergency process serving in Glenpool, Oklahoma for urgent legal documents and critical deadlines. Call (539) 367-6832 for immediate assistance.</p>
              </div>
              <div className="voice-optimized bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-orange-800">What areas around Glenpool do you serve?</h3>
                <p className="voice-answer text-gray-700">We serve all of Glenpool and surrounding areas including Tulsa County, Creek County, and provide complete statewide Oklahoma coverage for all legal document delivery needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-gradient-to-r from-blue-700 to-green-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Contact Our Glenpool Process Server
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Professional legal document delivery service in Glenpool, Oklahoma
              </p>
              <div className="bg-blue-600 p-6 rounded-lg max-w-md mx-auto">
                <p className="text-lg mb-4">
                  <strong>24/7 Emergency:</strong> <a href="tel:5393676832" className="text-blue-200 hover:text-white">(539) 367-6832</a>
                </p>
                <p className="text-lg mb-4">
                  <strong>Email:</strong> <a href="mailto:info@justlegalsolutions.org" className="text-blue-200 hover:text-white">info@justlegalsolutions.org</a>
                </p>
                <p className="text-lg">
                  <strong>Service Area:</strong> Glenpool and all of Oklahoma
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Schema and Optimization Components */}
        <VoiceSearchOptimization 
          primaryQuestions={primaryQuestions}
          conversationalAnswers={conversationalAnswers}
          localIntent={true}
        />
        <WebsiteSchema 
          url="https://justlegalsolutions.org/seo/glenpool-process-server"
          name="Glenpool Process Server - Just Legal Solutions"
          description="Expert process server in Glenpool, Oklahoma with 24/7 emergency service and statewide coverage."
          keywords={["process server Glenpool", "legal document delivery", "Oklahoma", "24 hour service"]}
        />
        <SearchEngineSignals 
          clickThroughRate={9.2}
          bounceRate={22}
          timeOnPage={195}
          userEngagement={94}
          contentFreshness="daily"
          mobileFriendly={true}
          pagespeed={96}
        />
      </div>
      <Footer />
    </>
  );
}