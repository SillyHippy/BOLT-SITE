import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Process Server Skiatook | Northern Tulsa County Legal Service',
  description: 'Professional process server in Skiatook, Oklahoma. Expert legal document delivery in northern Tulsa County. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['process server Skiatook', 'Skiatook process serving', 'legal document delivery Skiatook', '74070 process server', 'northern Tulsa County legal'],
  robots: 'index, follow'
};

export default function ProcessServerSkiatook() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Skiatook, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Skiatook, Tulsa County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides comprehensive process serving in Skiatook, Oklahoma (74070). 
            Our experienced process servers deliver legal documents throughout northern Tulsa County 
            with specialized service for lakeside and rural communities.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&auto=format" 
              alt="Skiatook Oklahoma lakeside community legal services and process server"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Skiatook Lake Community Service
            </h3>
            <p className="text-yellow-700">
              Specialized service to Skiatook Lake area properties and seasonal residents. 
              Understanding of lakeside access routes and seasonal occupancy patterns.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Skiatook Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Skiatook and northern Tulsa County. 
              Reliable lakeside and rural community legal document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Skiatook, Tulsa County</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


