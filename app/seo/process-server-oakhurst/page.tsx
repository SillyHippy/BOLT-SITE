import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Oakhurst | Tulsa County Legal Document Service',
  description: 'Professional process server in Oakhurst, Oklahoma. Expert legal document delivery in Sand Springs area. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['process server Oakhurst', 'Oakhurst process serving', 'Tulsa County legal service', '74050 process server', 'Sand Springs area legal'],
  robots: 'index, follow'
};

export default function ProcessServerOakhurst() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Oakhurst, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Oakhurst, Tulsa County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides comprehensive process serving in Oakhurst, Oklahoma (74050). 
            Our certified process servers deliver legal documents throughout the Sand Springs area 
            with professional service for both residential and commercial properties.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Oakhurst Service Coverage
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Oakhurst Community:</strong> Residential neighborhoods</li>
                <li><strong>Sand Springs Area:</strong> Adjacent communities</li>
                <li><strong>Arkansas River:</strong> Riverside properties</li>
                <li><strong>Industrial Parks:</strong> Business facilities</li>
                <li><strong>Highway 97 Corridor:</strong> Commercial zones</li>
                <li><strong>Creek Properties:</strong> Waterfront areas</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Service Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Standard Rates</h3>
                  <p className="text-green-700 mb-3">
                    Professional process serving with transparent pricing. Rates vary by service type and urgency.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                    <p className="text-sm text-blue-800">
                      <strong>Service Area Note:</strong> Standard rates apply to Tulsa County and select parts of 
                      Creek County (Sapulpa) & Wagoner County (Broken Arrow). A surcharge applies to all other areas.
                    </p>
                  </div>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Complete Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Community Focused Service
            </h3>
            <p className="text-yellow-700">
              Specialized service for the Sand Springs metropolitan area. Understanding of 
              local geography, waterfront access, and community-specific requirements.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Oakhurst Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Oakhurst and the Sand Springs area. 
              Expert residential and commercial legal document delivery services.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Oakhurst, Tulsa County</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/calendar" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Service
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Content Freshness:</strong> This Oakhurst process serving page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
