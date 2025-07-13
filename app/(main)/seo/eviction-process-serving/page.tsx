import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Eviction Process Serving Tulsa | Landlord Document Delivery | Just Legal Solutions',
  description: 'Professional eviction process serving in Tulsa, Oklahoma. Fast, reliable service of eviction notices, unlawful detainer, and landlord documents. Call (539) 367-6832.',
  keywords: ['eviction process serving Tulsa', 'eviction notice service', 'landlord document delivery', 'unlawful detainer service', 'tenant eviction papers'],
  robots: 'index, follow'
};

export default function EvictionProcessServing() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Eviction Process Serving in Tulsa, Oklahoma
        </h1>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
          <p className="text-lg text-red-800">
            <strong>Urgent Service Available!</strong> Last Updated: {lastUpdated} | Same-Day Eviction Notice Service
          </p>
        </div>

        <div className="mb-8">
          <Image 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop&auto=format" 
            alt="Professional eviction notice process serving and landlord document delivery in Tulsa"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
            priority={false}
          />
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Professional Eviction Document Delivery for Landlords
        </h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Just Legal Solutions specializes in eviction process serving throughout Tulsa County. We understand 
            the time-sensitive nature of eviction proceedings and provide fast, professional service of all 
            landlord-tenant documents with complete legal compliance.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">
              🏠 Landlord Emergency Service
            </h3>
            <p className="text-orange-700 mb-3">
              Need eviction papers served immediately? Our emergency response team is ready!
            </p>
            <p className="text-3xl font-bold text-orange-800">
              📞 (539) 367-6832
            </p>
            <p className="text-orange-700 mt-2">
              Same-Day Eviction Notice Service Available
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Types of Eviction Documents We Serve</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-800 mb-3">Pre-Eviction Notices:</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• 5-Day Notice to Quit (Non-Payment)</li>
                <li>• 10-Day Notice to Quit (Lease Violation)</li>
                <li>• 30-Day Notice to Quit (Month-to-Month)</li>
                <li>• Notice to Cure or Quit</li>
                <li>• Demand for Rent notices</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-semibold text-green-800 mb-3">Court Documents:</h4>
              <ul className="text-green-700 space-y-1">
                <li>• Unlawful Detainer summons</li>
                <li>• Eviction lawsuit papers</li>
                <li>• Court hearing notices</li>
                <li>• Judgment and possession orders</li>
                <li>• Writ of possession execution</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Oklahoma Eviction Process Timeline</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-semibold">Notice to Quit Service</h4>
                  <p className="text-gray-600">Professional service of initial eviction notice (5, 10, or 30 days)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-semibold">Filing Unlawful Detainer</h4>
                  <p className="text-gray-600">If tenant doesn&apos;t comply, file eviction lawsuit with court</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-semibold">Summons Service</h4>
                  <p className="text-gray-600">Serve tenant with court summons and eviction lawsuit</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-semibold">Court Judgment</h4>
                  <p className="text-gray-600">Obtain judgment and writ of possession if tenant doesn&apos;t respond</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Why Landlords Choose Just Legal Solutions</h3>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>Speed:</strong> Same-day and rush eviction notice service available</li>
            <li><strong>Compliance:</strong> Full knowledge of Oklahoma landlord-tenant law</li>
            <li><strong>Documentation:</strong> Detailed affidavits with photo proof for court</li>
            <li><strong>Experience:</strong> Hundreds of eviction cases handled successfully</li>
            <li><strong>Reliability:</strong> Multiple service attempts with detailed reports</li>
            <li><strong>Court Ready:</strong> Proper documentation for legal proceedings</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Eviction Service Areas</h3>
          <p className="mb-4">
            We serve eviction documents throughout the Tulsa metropolitan area:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Tulsa County:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Tulsa</li>
                <li>Broken Arrow</li>
                <li>Bixby</li>
                <li>Glenpool</li>
                <li>Jenks</li>
                <li>Sand Springs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Surrounding Areas:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Sapulpa</li>
                <li>Owasso</li>
                <li>Catoosa</li>
                <li>Claremore</li>
                <li>Coweta</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Property Types:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Residential rentals</li>
                <li>Apartment complexes</li>
                <li>Commercial properties</li>
                <li>Mobile home parks</li>
                <li>Condominiums</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Eviction Service Pricing</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Document Type</th>
                  <th className="border border-gray-300 p-3 text-left">Service Level</th>
                  <th className="border border-gray-300 p-3 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Notice to Quit</td>
                  <td className="border border-gray-300 p-3">Standard (3-5 days)</td>
                  <td className="border border-gray-300 p-3 font-semibold"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Notice to Quit</td>
                  <td className="border border-gray-300 p-3">Same-Day</td>
                  <td className="border border-gray-300 p-3 font-semibold"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Unlawful Detainer</td>
                  <td className="border border-gray-300 p-3">Standard</td>
                  <td className="border border-gray-300 p-3 font-semibold"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Unlawful Detainer</td>
                  <td className="border border-gray-300 p-3">Rush</td>
                  <td className="border border-gray-300 p-3 font-semibold"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Important Eviction Service Notes
            </h3>
            <ul className="text-yellow-700 space-y-2">
              <li>• All eviction documents must be served according to Oklahoma state law</li>
              <li>• We provide detailed affidavits suitable for court proceedings</li>
              <li>• Multiple service attempts included in standard pricing</li>
              <li>• Posted service available when personal service is not possible</li>
              <li>• Weekend and holiday service available for urgent evictions</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Legal Compliance:</strong> This eviction service page updates daily with current Oklahoma 
              landlord-tenant law information. Emergency eviction service: (539) 367-6832 available 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

