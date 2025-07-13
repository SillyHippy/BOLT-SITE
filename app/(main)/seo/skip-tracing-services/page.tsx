import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Skip Tracing Services Tulsa | Professional Investigative Location Services',
  description: 'Expert skip tracing services in Tulsa, Oklahoma. Professional location services for legal cases, debt collection, and investigations. Fast, accurate results. Call (539) 367-6832.',
  keywords: ['skip tracing Tulsa', 'people finder', 'location services', 'investigative services', 'debt collection', 'legal investigations'],
  robots: 'index, follow'
};

export default function SkipTracingServices() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' });
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Skip Tracing Services in Tulsa, Oklahoma
        </h1>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
          <p className="text-lg text-red-800">
            <strong>Licensed Investigators</strong> | Last Updated: {lastUpdated} | Professional Location Services
          </p>
        </div>

        <div className="mb-8">
          <Image 
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=400&fit=crop&auto=format" 
            alt="Professional investigative services and skip tracing in Tulsa"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
            priority={false}
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides professional skip tracing services throughout Tulsa 
            and the greater Oklahoma area. Our experienced investigators utilize advanced 
            techniques and databases to locate individuals quickly and accurately.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">
                Skip Tracing Services
              </h3>
              <ul className="text-purple-700 space-y-2">
                <li>✓ Legal service location</li>
                <li>✓ Debt collection assistance</li>
                <li>✓ Witness location services</li>
                <li>✓ Asset investigation</li>
                <li>✓ Background investigations</li>
                <li>✓ Missing person searches</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Investigation Pricing
              </h3>
              <p className="text-blue-700 mb-4">
                Professional skip tracing with competitive rates. Pricing based on 
                case complexity and timeline requirements.
              </p>
              <a href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                Get Investigation Quote
              </a>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">
              Advanced Database Access
            </h3>
            <p className="text-orange-700">
              Our skip tracing services utilize professional-grade databases and investigative 
              tools not available to the general public. This ensures comprehensive searches 
              and higher success rates in locating individuals.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Skip Tracing Process
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-semibold mb-2">Initial Information Gathering:</h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Full name and known aliases</li>
                <li>Last known address</li>
                <li>Date of birth or age range</li>
                <li>Social Security Number (if available)</li>
                <li>Employment information</li>
                <li>Family member details</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Investigation Methods:</h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Database searches</li>
                <li>Public record research</li>
                <li>Asset searches</li>
                <li>Social media investigation</li>
                <li>Field investigation</li>
                <li>Interview techniques</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Legal Service Skip Tracing
            </h3>
            <p className="text-green-700 mb-3">
              Specialized skip tracing for legal professionals who need to serve legal documents 
              but cannot locate the intended recipient. We combine investigation expertise with 
              process serving experience.
            </p>
            <ul className="text-green-700 space-y-1">
              <li>• Court-required documentation</li>
              <li>• Comprehensive search reports</li>
              <li>• Chain of custody maintenance</li>
              <li>• Rapid turnaround times</li>
            </ul>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-indigo-800 mb-3">
              Industries We Serve
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-indigo-700">
              <div>
                <h4 className="font-semibold">Legal Services:</h4>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Law firms</li>
                  <li>Collection agencies</li>
                  <li>Insurance companies</li>
                  <li>Legal aid organizations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Private Clients:</h4>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Private investigators</li>
                  <li>Landlords</li>
                  <li>Small business owners</li>
                  <li>Individual cases</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Confidential & Professional
            </h3>
            <p className="text-yellow-700">
              All skip tracing investigations are conducted with the highest level of 
              confidentiality and professionalism. We maintain detailed case files and 
              provide comprehensive reports of our findings.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Contact Skip Tracing Service
            </h3>
            <p className="text-gray-700 mb-4">
              Professional investigative services throughout Tulsa and Oklahoma. Licensed 
              investigators with proven track record in location services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:(539) 367-6832" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block text-center">
                Call (539) 367-6832
              </a>
              <a href="/card/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block text-center">
                Schedule Investigation
              </a>
            </div>
          </div>

          <div className="text-sm text-gray-500 border-t pt-4">
            <p>
              <strong>Content Freshness:</strong> This skip tracing service page updates daily 
              for SEO optimization. Confidential consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


