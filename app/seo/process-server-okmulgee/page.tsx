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
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Okmulgee Service Coverage
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Downtown Okmulgee:</strong> County seat and courthouse</li>
                <li><strong>Government District:</strong> County facilities</li>
                <li><strong>Residential Areas:</strong> All city neighborhoods</li>
                <li><strong>Business District:</strong> Commercial zones</li>
                <li><strong>Industrial Areas:</strong> Manufacturing facilities</li>
                <li><strong>Educational Facilities:</strong> Schools and college</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Service Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2"><div className="mt-8 text-center">
  <a 
    href="/pricing" 
    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
  >
    View Pricing 
  </a>
</div></h3>
                  <p className="text-green-700 mb-3">
                    Professional process serving with transparent pricing. Rates vary by service type and urgency.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                    <p className="text-sm text-blue-800">
                      <strong>Service Area Note:</strong> Standard rates apply to Tulsa County and select parts of 
                      Creek County (Sapulpa) & Wagoner County (Broken Arrow). A surcharge applies to all other areas.
                    </p>
                  </div>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Complete Pricing
                  </a>
                </div>
              </div>
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
                <a href="/card/calendar" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Service
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Content Freshness:</strong> This Okmulgee process serving page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
