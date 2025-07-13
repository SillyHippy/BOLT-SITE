import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Courier Delivery Service Tulsa | Package & Document Delivery',
  description: 'Professional courier and delivery service in Tulsa. Fast package delivery, documents, food, furniture, anything that fits in car. Same-day delivery. Call (539) 367-6832.',
  keywords: ['courier service Tulsa', 'package delivery Tulsa', 'same day delivery', 'document courier', 'food delivery service', 'furniture delivery', 'rush delivery Tulsa'],
  robots: 'index, follow'
};

export default function CourierDeliveryService() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Courier & Delivery Service in Tulsa, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service:</strong> Anything That Fits in Car
          </p>
        </div>

        <div className="mb-8">
          <Image 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&auto=format" 
            alt="Professional courier and delivery service for packages and documents in Tulsa"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
            priority={false}
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides comprehensive courier and delivery services throughout Tulsa. 
            From legal documents to donuts, from important packages to furniture - if it fits in our car, 
            we&apos;ll deliver it fast and professionally.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What We Deliver
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Legal Documents:</strong> Contracts, court papers, legal files</li>
                <li><strong>Business Packages:</strong> Important documents, supplies</li>
                <li><strong>Food Delivery:</strong> Restaurant orders, catering, groceries</li>
                <li><strong>Personal Items:</strong> Gifts, packages, personal documents</li>
                <li><strong>Small Furniture:</strong> Chairs, small tables, office supplies</li>
                <li><strong>Emergency Delivery:</strong> Medication, keys, urgent items</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Delivery Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Flexible Rates</h3>
                  <p className="text-green-700 mb-3">
                    Professional courier service with competitive pricing. Rates vary by 
                    distance, urgency, and item type. Same-day and rush delivery available.
                  </p>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Delivery Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Why Choose Our Courier Service
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li>✓ <strong>Same-Day Delivery:</strong> Rush service when you need it</li>
              <li>✓ <strong>Professional Service:</strong> Reliable, courteous delivery</li>
              <li>✓ <strong>Flexible Delivery:</strong> Business or residential addresses</li>
              <li>✓ <strong>Secure Handling:</strong> Safe transport of valuable items</li>
              <li>✓ <strong>Real-Time Updates:</strong> Delivery confirmation and tracking</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              Popular Delivery Services
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Business Services</h4>
                <ul className="space-y-1 text-purple-600 text-sm">
                  <li>• Contract delivery between offices</li>
                  <li>• Important document rush delivery</li>
                  <li>• Client package delivery</li>
                  <li>• Office supply runs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Personal Services</h4>
                <ul className="space-y-1 text-purple-600 text-sm">
                  <li>• Food and restaurant delivery</li>
                  <li>• Gift delivery for special occasions</li>
                  <li>• Emergency medication delivery</li>
                  <li>• Forgotten item rescue service</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-3">
              Emergency Rush Delivery
            </h3>
            <p className="text-red-700">
              Need it delivered NOW? Emergency same-day service available for urgent deliveries. 
              From forgotten keys to important contracts - we&apos;ll get it there fast.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Courier Service
            </h3>
            <p className="text-green-700 mb-4">
              Professional courier and delivery service throughout Tulsa area. 
              Fast, reliable delivery of packages, documents, food, and more.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Greater Tulsa Area</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Delivery
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Content Freshness:</strong> This courier delivery page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
