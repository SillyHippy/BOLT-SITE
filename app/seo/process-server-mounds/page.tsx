import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Mounds | Creek County Legal Document Service',
  description: 'Professional process server in Mounds, Creek County. Expert legal document delivery in rural Oklahoma communities. Call (539) 367-6832 for reliable service.',
  keywords: ['process server Mounds', 'Mounds process serving', 'Creek County legal service', '74047 process server', 'rural legal document delivery'],
  robots: 'index, follow'
};

export default function ProcessServerMounds() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Mounds, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Mounds, Creek County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides comprehensive process serving in Mounds, Oklahoma (74047). 
            Our experienced process servers deliver legal documents throughout Creek County 
            with specialized expertise in rural and small community service.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Mounds Service Coverage
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Town of Mounds:</strong> Complete coverage</li>
                <li><strong>Rural Routes:</strong> Country properties</li>
                <li><strong>Creek County:</strong> Extended coverage</li>
                <li><strong>Industrial Areas:</strong> Oil and gas facilities</li>
                <li><strong>Agricultural:</strong> Farm and ranch properties</li>
                <li><strong>Residential:</strong> All neighborhoods</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Service Pricing
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-green-700">Standard Service (3-5 days)</span>
                  <span className="font-bold text-green-800">$40</span>
                </div>
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-green-700">Rush Service (1-2 days)</span>
                  <span className="font-bold text-green-800">$60</span>
                </div>
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-green-700">Same-Day Service</span>
                  <span className="font-bold text-green-800">$75</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Emergency (2 hours)</span>
                  <span className="font-bold text-green-800">$100</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Mounds Legal Document Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Family court and divorce documents</li>
                <li>Civil litigation papers</li>
                <li>Property and land disputes</li>
                <li>Small claims court papers</li>
                <li>Protective orders</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Subpoenas and court summons</li>
                <li>Oil and gas legal documents</li>
                <li>Agricultural litigation papers</li>
                <li>Debt collection notices</li>
                <li>Emergency legal deliveries</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Rural Oklahoma Expertise
            </h3>
            <p className="text-yellow-700">
              Specialized knowledge of rural Creek County communities, oil and gas properties, 
              and agricultural areas. Expert navigation of country roads and remote locations.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Why Choose Our Mounds Process Servers
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Local Expertise:</h4>
                <ul className="list-disc ml-6 text-blue-600 space-y-1">
                  <li>Deep knowledge of Creek County</li>
                  <li>Familiar with rural property access</li>
                  <li>Understanding of agricultural schedules</li>
                  <li>Experience with oil/gas industry</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Professional Standards:</h4>
                <ul className="list-disc ml-6 text-blue-600 space-y-1">
                  <li>GPS tracking for remote locations</li>
                  <li>Detailed photo documentation</li>
                  <li>Comprehensive service affidavits</li>
                  <li>Multiple delivery attempts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Mounds Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Mounds and Creek County. 
              Reliable rural and agricultural community legal document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Mounds, Creek County</p>
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
              <strong>Content Freshness:</strong> This Mounds process serving page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

