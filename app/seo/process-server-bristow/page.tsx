import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Bristow | Creek County Legal Document Service',
  description: 'Professional process server in Bristow, Creek County. Expert legal document delivery throughout rural Oklahoma. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['process server Bristow', 'Bristow process serving', 'Creek County legal service', '74010 process server', 'rural Oklahoma legal'],
  robots: 'index, follow'
};

export default function ProcessServerBristow() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Bristow, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Bristow, Creek County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides expert process serving in Bristow, Oklahoma (74010). 
            Our certified process servers deliver legal documents throughout Creek County 
            with specialized expertise in small-town and rural community service.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Small Town & Rural Expertise
            </h3>
            <p className="text-yellow-700">
              Specialized knowledge of Bristow&apos;s tight-knit community and surrounding rural areas. 
              Professional service with understanding of local customs and business practices.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Bristow Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Bristow and Creek County. 
              Reliable small-town and rural legal document delivery services.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Bristow, Creek County</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Service
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              for search optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


