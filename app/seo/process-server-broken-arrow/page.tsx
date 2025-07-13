import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Process Server Broken Arrow | Professional Document Delivery | Just Legal Solutions',
  description: 'Certified process server in Broken Arrow, Tulsa County. Fast, reliable legal document delivery. Licensed and bonded. Call (539) 367-6832 for same-day service in 74012.',
  keywords: ['process server Broken Arrow', 'Broken Arrow process serving', 'legal document delivery Broken Arrow', 'court documents Tulsa County', '74012 process server'],
  robots: 'index, follow'
};

export default function ProcessServerBrokenArrow() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Broken Arrow, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Broken Arrow, Tulsa County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides professional process serving in Broken Arrow, Oklahoma (74012). 
            Our certified process servers are licensed, bonded, and experienced in serving legal documents 
            throughout Tulsa County with speed and precision.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop&auto=format" 
              alt="Broken Arrow Oklahoma courthouse and legal services in Tulsa County"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Broken Arrow Services
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Court Documents:</strong> Summons, complaints, subpoenas</li>
                <li><strong>Same-Day Service:</strong> Rush delivery available</li>
                <li><strong>GPS Tracking:</strong> Real-time location updates</li>
                <li><strong>Photo Proof:</strong> Digital documentation</li>
                <li><strong>Legal Courier:</strong> Law firm document delivery</li>
                <li><strong>Affidavits:</strong> Professional service documentation</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Broken Arrow Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Standard Service</h3>
                  <p className="text-green-700 mb-3">
                    Professional process serving throughout Broken Arrow and surrounding areas. 
                    Fast, reliable service with GPS tracking and photo documentation.
                  </p>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Pricing Details
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Why Choose Just Legal Solutions in Broken Arrow?
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li>✓ <strong>Local Knowledge:</strong> Familiar with Broken Arrow courts and procedures</li>
              <li>✓ <strong>Fast Service:</strong> Same-day and rush options available</li>
              <li>✓ <strong>Licensed & Bonded:</strong> Fully certified for legal document service</li>
              <li>✓ <strong>Digital Documentation:</strong> GPS tracking and photo proof</li>
              <li>✓ <strong>Professional Service:</strong> Courteous and discreet process servers</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-3">
              Emergency Service Available
            </h3>
            <p className="text-red-700">
              Need same-day process serving in Broken Arrow? We provide emergency delivery 
              for urgent legal documents with immediate dispatch and GPS tracking throughout the 74012 area.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Broken Arrow Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Broken Arrow and Tulsa County. 
              Licensed, bonded, and insured with GPS tracking and photo documentation.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Broken Arrow (74012)</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/calendar" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Service Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
