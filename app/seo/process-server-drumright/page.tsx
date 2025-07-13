import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Drumright | Creek County Legal Document Service',
  description: 'Professional process server in Drumright, Oklahoma. Expert legal document delivery in Creek County oil fields. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['process server Drumright', 'Drumright process serving', 'Creek County legal service', '74030 process server', 'oil field legal service'],
  robots: 'index, follow'
};

export default function ProcessServerDrumright() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Drumright, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Drumright, Creek County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides expert process serving in Drumright, Oklahoma (74030). 
            Our experienced process servers deliver legal documents throughout Creek County 
            with specialized service for oil field communities and industrial operations.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Drumright Service Coverage
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Downtown Drumright:</strong> Historic oil town center</li>
                <li><strong>Oil Field Areas:</strong> Active drilling sites</li>
                <li><strong>Industrial Sites:</strong> Energy facilities</li>
                <li><strong>Residential Areas:</strong> All neighborhoods</li>
                <li><strong>Rural Properties:</strong> Country locations</li>
                <li><strong>Highway 99 Corridor:</strong> Commercial zones</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Service Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2"><div className="mt-8 text-center">
  <a 
    href="/pricing" 
    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
  >
    View Pricing 
  </a>
</div></h3>
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
              Oil Field & Industrial Expertise
            </h3>
            <p className="text-yellow-700">
              Specialized service for energy industry operations. Understanding of oil field 
              security, shift schedules, and industrial safety protocols for effective service.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Drumright Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Drumright and Creek County. 
              Expert oil field and industrial legal document delivery services.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Drumright, Creek County</p>
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
              <strong>Content Freshness:</strong> This Drumright process serving page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
