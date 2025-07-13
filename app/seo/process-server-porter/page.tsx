import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Porter | Wagoner County Legal Document Service',
  description: 'Professional process server in Porter, Oklahoma. Expert legal document delivery in Wagoner County. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['process server Porter', 'Porter process serving', 'Wagoner County legal service', '74454 process server', 'rural Wagoner County legal'],
  robots: 'index, follow'
};

export default function ProcessServerPorter() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Porter, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Porter, Wagoner County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides reliable process serving in Porter, Oklahoma (74454). 
            Our certified process servers deliver legal documents throughout Wagoner County 
            with specialized service for small communities and rural properties.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Porter Service Coverage
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Porter Community:</strong> Small town center</li>
                <li><strong>Residential Areas:</strong> All neighborhoods</li>
                <li><strong>Rural Routes:</strong> Farm and ranch properties</li>
                <li><strong>Agricultural Areas:</strong> Farming communities</li>
                <li><strong>School District:</strong> Educational facilities</li>
                <li><strong>County Roads:</strong> Remote locations</li>
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

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Porter History & Community
            </h3>
            <p className="text-blue-700 mb-3">
              Porter, established in 1898, is a historic farming community in Wagoner County. Originally a 
              railroad town serving agricultural interests, Porter maintains its small-town character with 
              deep roots in farming and ranching traditions.
            </p>
            <p className="text-blue-700">
              Our process servers understand Porter&apos;s tight-knit community dynamics, agricultural schedules, 
              and the importance of respectful, professional service in rural Oklahoma communities.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Rural Community Expertise
            </h3>
            <p className="text-yellow-700">
              Specialized service for small towns and agricultural communities. Understanding of 
              local connections, farming schedules, and rural community dynamics.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Porter Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Porter and Wagoner County. 
              Expert small town and rural community legal document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Porter, Wagoner County</p>
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
              <strong>Content Freshness:</strong> This Porter process serving page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
