import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fast Process Server Tulsa | Same-Day Legal Document Delivery - Call Now',
  description: 'URGENT process serving in Tulsa? Get documents served TODAY! Licensed process servers covering all of Tulsa County. Call (539) 367-6832 for immediate service.',
  keywords: ['urgent process server tulsa', 'same day process serving', 'emergency document delivery', 'fast process server oklahoma', 'tulsa county legal services'],
  robots: 'index, follow'
};

export default function UrgentProcessServer() {
  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Alert Banner */}
      <div className="bg-red-600 text-white py-3 text-center">
        <div className="container mx-auto px-4">
          <p className="font-bold">🚨 URGENT PROCESS SERVING AVAILABLE 24/7 - CALL NOW: (539) 367-6832 🚨</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            SAME-DAY Process Server Tulsa
          </h1>
          <p className="text-2xl text-red-600 mb-4 font-semibold">
            Need Documents Served TODAY? We&apos;re Ready!
          </p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Licensed Oklahoma process servers serving Tulsa County with 
            <span className="font-bold text-green-600"> 2-HOUR EMERGENCY SERVICE</span> when you need it most.
          </p>
        </div>

        {/* Urgency Section */}
        <div className="bg-yellow-50 border-l-8 border-yellow-400 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">⏰ Court Deadline Tomorrow?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-red-600">We Handle URGENT Situations:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Last-minute court filings</li>
                <li>✅ Emergency restraining orders</li>
                <li>✅ Time-sensitive evictions</li>
                <li>✅ Divorce papers before hearings</li>
                <li>✅ Subpoenas for tomorrow&apos;s court</li>
              </ul>
            </div>
            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-800">EMERGENCY PRICING</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>2-Hour Attempt:</span>
                  <span className="font-bold text-2xl text-green-700">$265</span>
                </div>
                <div className="flex justify-between">
                  <span>Same-Day Rush:</span>
                  <span className="font-bold text-xl">$150</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white p-12 rounded-lg text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Don&apos;t Risk Missing Your Deadline!</h2>
          <p className="text-xl mb-8">Our licensed process servers are standing by RIGHT NOW</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="tel:5393676832" 
               className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-2xl">
              📞 CALL NOW: (539) 367-6832
            </a>
            <a href="/card" 
               className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl">
              Get Quote Now
            </a>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-2">⚡ FAST</h3>
            <p className="text-gray-700">2-hour emergency service available throughout Tulsa County</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">🏆 LICENSED</h3>
            <p className="text-gray-700">Fully licensed & bonded Oklahoma process servers</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-purple-600 mb-2">📋 GUARANTEED</h3>
            <p className="text-gray-700">Complete affidavit of service for all deliveries</p>
          </div>
        </div>

        {/* Coverage Area */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">🗺️ EMERGENCY SERVICE COVERAGE</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div><strong>Tulsa</strong></div>
            <div><strong>Broken Arrow</strong></div>
            <div><strong>Owasso</strong></div>
            <div><strong>Bixby</strong></div>
            <div><strong>Jenks</strong></div>
            <div><strong>Sand Springs</strong></div>
            <div><strong>Sapulpa</strong></div>
            <div><strong>Glenpool</strong></div>
          </div>
          <p className="text-center mt-4 text-gray-600">
            + All surrounding Tulsa County communities
          </p>
        </div>
      </div>
    </div>
  );
}
