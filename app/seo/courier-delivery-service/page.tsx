import { Metadata } from 'next';

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

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides comprehensive courier and delivery services throughout Tulsa. 
            From legal documents to donuts, from important packages to furniture - if it fits in our car, 
            we&apos;ll deliver it fast and professionally.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
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
                <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Delivery
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


