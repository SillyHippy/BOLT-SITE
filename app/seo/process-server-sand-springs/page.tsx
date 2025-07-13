import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Process Server Sand Springs | Tulsa County Legal Document Service',
  description: 'Professional process server in Sand Springs, Oklahoma. Reliable legal document delivery in Tulsa County. Industrial area expertise. Call (539) 367-6832.',
  keywords: ['process server Sand Springs', 'Sand Springs process serving', 'legal document delivery Sand Springs', '74063 process server', 'Tulsa County legal service'],
  robots: 'index, follow'
};

export default function ProcessServerSandSprings() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Sand Springs, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Sand Springs, Tulsa County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides professional process serving in Sand Springs, Oklahoma (74063). 
            Our experienced process servers deliver legal documents throughout the Sand Springs area including 
            industrial districts, residential neighborhoods, and business locations with reliable efficiency.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&auto=format" 
              alt="Sand Springs Oklahoma industrial and residential area legal document delivery"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Sand Springs Rates
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Industrial Area Expertise
            </h3>
            <p className="text-blue-700">
              Sand Springs has a significant industrial presence. Our process servers are experienced 
              in navigating manufacturing facilities, industrial complexes, and business parks 
              while maintaining professional protocols and security requirements.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Sand Springs Area Knowledge
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li>✓ <strong>Industrial Facilities:</strong> Manufacturing and business complex access</li>
              <li>✓ <strong>Residential Zones:</strong> Neighborhood layout familiarity</li>
              <li>✓ <strong>Commercial Areas:</strong> Business district expertise</li>
              <li>✓ <strong>Security Protocols:</strong> Industrial facility compliance</li>
              <li>✓ <strong>GPS Tracking:</strong> Real-time location monitoring</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-3">
              Emergency Sand Springs Service
            </h3>
            <p className="text-red-700">
              Urgent legal document delivery in Sand Springs? Our same-day emergency service 
              provides immediate dispatch with GPS tracking and photo documentation for all areas including industrial zones.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Sand Springs Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving in Sand Springs, Oklahoma including industrial, residential, 
              and commercial areas. Licensed, bonded, and experienced with complete digital documentation.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Sand Springs (74063)</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Sand Springs Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


