import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Henryetta | Okmulgee County Legal Document Service',
  description: 'Professional process server in Henryetta, Oklahoma. Expert legal document delivery in Okmulgee County. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['process server Henryetta', 'Henryetta process serving', 'Okmulgee County legal service', '74437 process server', 'mining town legal'],
  robots: 'index, follow'
};

export default function ProcessServerHenryetta() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Henryetta, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Henryetta, Okmulgee County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides expert process serving in Henryetta, Oklahoma (74437). 
            Our certified process servers deliver legal documents throughout Okmulgee County 
            with specialized service for historic communities and industrial areas.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Historic & Industrial Expertise
            </h3>
            <p className="text-yellow-700">
              Specialized service for historic mining communities and industrial operations. 
              Understanding of shift schedules, safety protocols, and community traditions.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Henryetta Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Henryetta and Okmulgee County. 
              Expert historic community and industrial legal document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Henryetta, Okmulgee County</p>
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


