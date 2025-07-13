import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Small Business Courier Service Tulsa | Document & Package Delivery',
  description: 'Professional courier service for small businesses in Tulsa. Document delivery, package transport, business-to-business service. Fast delivery. Call (539) 367-6832.',
  keywords: ['small business courier', 'business document delivery Tulsa', 'B2B courier service', 'office delivery', 'business package delivery', 'commercial courier Tulsa'],
  robots: 'index, follow'
};

export default function SmallBusinessCourier() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Courier Service for Small Businesses in Tulsa
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Specializing:</strong> Small Business Support Services
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides dedicated courier and document delivery services for small businesses 
            throughout Tulsa. We understand that small businesses need reliable, cost-effective delivery solutions 
            to keep operations running smoothly and maintain professional client relationships.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop&auto=format" 
              alt="Small business courier delivering documents and packages in Tulsa office building"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Business Courier Services
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Document Delivery:</strong> Contracts, proposals, legal papers</li>
                <li><strong>Bank Runs:</strong> Deposits, check delivery, financial documents</li>
                <li><strong>Client Deliveries:</strong> Products, samples, presentation materials</li>
                <li><strong>Office Supplies:</strong> Emergency supply runs and equipment</li>
                <li><strong>Inter-office Mail:</strong> Multi-location business delivery</li>
                <li><strong>Court Filings:</strong> Legal document filing and retrieval</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Small Business Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Affordable Business Rates</h3>
                  <p className="text-green-700 mb-3">
                    Cost-effective courier rates designed for small businesses. 
                    Regular service discounts and flexible scheduling available.
                  </p>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Business Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Why Small Businesses Choose Us
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li>✓ <strong>Reliable Service:</strong> Dependable delivery you can count on</li>
              <li>✓ <strong>Professional Image:</strong> Represent your business professionally</li>
              <li>✓ <strong>Flexible Scheduling:</strong> Work around your business hours</li>
              <li>✓ <strong>Cost Effective:</strong> Affordable alternative to in-house delivery</li>
              <li>✓ <strong>Local Knowledge:</strong> Familiar with Tulsa business community</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              Popular Small Business Services
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Daily Operations</h4>
                <ul className="space-y-1 text-purple-600 text-sm">
                  <li>• Contract delivery to clients</li>
                  <li>• Bank deposit runs</li>
                  <li>• Office supply emergency runs</li>
                  <li>• Inter-office document transport</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Special Projects</h4>
                <ul className="space-y-1 text-purple-600 text-sm">
                  <li>• Product sample delivery</li>
                  <li>• Presentation material transport</li>
                  <li>• Client gift delivery</li>
                  <li>• Equipment pickup/delivery</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Small Business Courier
            </h3>
            <p className="text-green-700 mb-4">
              Professional courier services designed for small businesses throughout Tulsa. 
              Reliable, cost-effective document and package delivery solutions.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Small Businesses</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Business Service
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

