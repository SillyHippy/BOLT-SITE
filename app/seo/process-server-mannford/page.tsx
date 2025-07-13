import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Mannford | Creek County Legal Document Service',
  description: 'Professional process server in Mannford, Oklahoma. Expert legal document delivery at Keystone Lake area. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['process server Mannford', 'Mannford process serving', 'Creek County legal service', '74044 process server', 'Keystone Lake legal'],
  robots: 'index, follow'
};

export default function ProcessServerMannford() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Mannford, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Mannford, Creek County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides comprehensive process serving in Mannford, Oklahoma (74044). 
            Our experienced process servers deliver legal documents throughout the Keystone Lake area 
            with specialized service for lakeside communities and recreational properties.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Mannford Service Coverage
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Downtown Mannford:</strong> City center and marina</li>
                <li><strong>Keystone Lake:</strong> Lakefront properties</li>
                <li><strong>Residential Areas:</strong> All neighborhoods</li>
                <li><strong>Recreation Areas:</strong> Camping and resort facilities</li>
                <li><strong>Marinas:</strong> Boat and dock services</li>
                <li><strong>Rural Routes:</strong> Country properties</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Service Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Competitive Rates</h3>
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
              Lake Community Expertise
            </h3>
            <p className="text-yellow-700">
              Specialized service for lakeside and recreational communities. Understanding of 
              seasonal residents, marina operations, and waterfront property access.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Mannford Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Mannford and Keystone Lake area. 
              Expert lakeside and recreational community legal document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Mannford, Creek County</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Service
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Content Freshness:</strong> This Mannford process serving page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

