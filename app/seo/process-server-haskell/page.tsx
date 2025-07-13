import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Haskell | Muskogee County Legal Document Service',
  description: 'Expert process server in Haskell, Muskogee County. Professional legal document delivery throughout rural Oklahoma communities. Call (539) 367-6832.',
  keywords: ['process server Haskell', 'Haskell process serving', 'Muskogee County legal service', '74436 process server', 'rural Oklahoma legal'],
  robots: 'index, follow'
};

export default function ProcessServerHaskell() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Haskell, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Haskell, Muskogee County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides expert process serving in Haskell, Oklahoma (74436). 
            Our certified process servers deliver legal documents throughout Muskogee County 
            with specialized service for small towns and rural communities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Haskell Service Coverage
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Town of Haskell:</strong> Complete community</li>
                <li><strong>Rural Routes:</strong> Country properties</li>
                <li><strong>Muskogee County:</strong> Extended coverage</li>
                <li><strong>School District:</strong> Haskell Public Schools</li>
                <li><strong>Agricultural Areas:</strong> Farm properties</li>
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
                  <a href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-semibold">View Pricing</a>
                </div>
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-green-700">Rush Service (1-2 days)</span>
                  <a href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-semibold">View Pricing</a>
                </div>
                <div className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-green-700">Same-Day Service</span>
                  <a href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-semibold">View Pricing</a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700">Emergency (2 hours)</span>
                  <a href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-semibold">View Pricing</a>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Haskell Legal Document Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Family court and divorce papers</li>
                <li>Civil litigation documents</li>
                <li>Property and land disputes</li>
                <li>Small claims court papers</li>
                <li>Protective orders</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Subpoenas and court summons</li>
                <li>Agricultural litigation papers</li>
                <li>Business documents</li>
                <li>Debt collection notices</li>
                <li>Emergency legal deliveries</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Small Town Service Excellence
            </h3>
            <p className="text-yellow-700">
              Personalized service for Haskell&apos;s close-knit community. Understanding of local 
              customs and relationships while maintaining complete professional confidentiality.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Why Choose Our Haskell Process Servers
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Community Knowledge:</h4>
                <ul className="list-disc ml-6 text-blue-600 space-y-1">
                  <li>Familiar with Haskell community</li>
                  <li>Knowledge of rural delivery routes</li>
                  <li>Understanding of local schedules</li>
                  <li>Respectful small-town approach</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Professional Standards:</h4>
                <ul className="list-disc ml-6 text-blue-600 space-y-1">
                  <li>GPS tracking for all locations</li>
                  <li>Photo documentation of service</li>
                  <li>Detailed affidavits of service</li>
                  <li>Multiple delivery attempts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Haskell Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Haskell and Muskogee County. 
              Reliable small-town and rural legal document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Haskell, Muskogee County</p>
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
              <strong>Content Freshness:</strong> This Haskell process serving page updates daily 
              for search optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
