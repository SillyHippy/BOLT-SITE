import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Process Server Owasso | Professional Legal Document Service | Just Legal Solutions',
  description: 'Expert process server in Owasso, Oklahoma. Fast, reliable legal document delivery throughout Tulsa County. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['process server Owasso', 'Owasso process serving', 'legal document delivery Owasso', '74055 process server', 'Tulsa County legal service'],
  robots: 'index, follow'
};

export default function ProcessServerOwasso() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Owasso, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Owasso, Tulsa County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides expert process serving in Owasso, Oklahoma (74055). 
            Our professional process servers deliver legal documents throughout Owasso and surrounding 
            Tulsa County communities with speed, accuracy, and complete digital documentation.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=400&fit=crop&auto=format" 
              alt="Owasso Oklahoma suburban area and professional legal document delivery service"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    Get Owasso Rates
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Owasso Community Expertise
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li>✓ <strong>Local Knowledge:</strong> Familiar with Owasso layout and addresses</li>
              <li>✓ <strong>School Districts:</strong> Owasso school zone familiarity</li>
              <li>✓ <strong>Business Areas:</strong> Commercial district expertise</li>
              <li>✓ <strong>Rapid Response:</strong> Quick dispatch and delivery</li>
              <li>✓ <strong>Professional Service:</strong> Courteous and discreet staff</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-3">
              Same-Day Owasso Service
            </h3>
            <p className="text-red-700">
              Urgent document delivery needed in Owasso? We provide emergency same-day service 
              with immediate dispatch, GPS tracking, and photo confirmation throughout the 74055 area.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Owasso Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Expert process serving in Owasso, Oklahoma and surrounding Tulsa County areas. 
              Professional, reliable, and efficient legal document delivery with complete documentation.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Owasso (74055)</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Owasso Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


