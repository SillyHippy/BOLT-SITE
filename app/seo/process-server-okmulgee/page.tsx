import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Okmulgee | Okmulgee County Legal Document Service',
  description: 'Professional process server in Okmulgee, Oklahoma. Expert legal document delivery in county seat. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['process server Okmulgee', 'Okmulgee process serving', 'Okmulgee County legal service', '74447 process server', 'county seat legal'],
  robots: 'index, follow'
};

export default function ProcessServerOkmulgee() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Okmulgee, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Okmulgee, Okmulgee County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides comprehensive process serving in Okmulgee, Oklahoma (74447). 
            Our experienced process servers deliver legal documents throughout Okmulgee County 
            with specialized service for the county seat and surrounding communities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              County Seat Expertise
            </h3>
            <p className="text-yellow-700">
              Specialized service for county seat operations. Direct courthouse access and 
              understanding of county procedures, legal community, and government facilities.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Okmulgee Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Okmulgee and Okmulgee County. 
              Expert courthouse filing and county seat legal document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Okmulgee, Okmulgee County</p>
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


