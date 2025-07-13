import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Lotsee | Tulsa County Legal Document Service',
  description: 'Professional process server in Lotsee, Oklahoma. Expert legal document delivery in rural Tulsa County. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['process server Lotsee', 'Lotsee process serving', 'Tulsa County legal service', '74063 process server', 'rural Oklahoma legal'],
  robots: 'index, follow'
};

export default function ProcessServerLotsee() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Lotsee, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Lotsee, Tulsa County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides reliable process serving in Lotsee, Oklahoma (74063). 
            Our experienced process servers deliver legal documents throughout rural Tulsa County 
            with specialized service for remote and agricultural communities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Rural Expertise
            </h3>
            <p className="text-yellow-700">
              Specialized experience in rural and remote area service. Knowledge of agricultural 
              schedules, tribal protocols, and hard-to-reach location navigation.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Lotsee Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Lotsee and rural Tulsa County. 
              Expert agricultural and remote community legal document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Lotsee, Tulsa County</p>
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


