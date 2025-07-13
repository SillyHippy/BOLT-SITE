import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Wagoner | Wagoner County Legal Document Service',
  description: 'Professional process server in Wagoner, Oklahoma. Expert legal document delivery in Wagoner County. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['process server Wagoner', 'Wagoner process serving', 'Wagoner County legal service', '74467 process server', 'rural Oklahoma legal'],
  robots: 'index, follow'
};

export default function ProcessServerWagoner() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Wagoner, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Wagoner, Wagoner County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides comprehensive process serving in Wagoner, Oklahoma (74467). 
            Our experienced process servers deliver legal documents throughout Wagoner County 
            with professional service for both urban and rural communities.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Wagoner Service Coverage
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Downtown Wagoner:</strong> County seat and business district</li>
                <li><strong>Residential Areas:</strong> All city neighborhoods</li>
                <li><strong>Fort Gibson Lake:</strong> Lakeside properties</li>
                <li><strong>Rural Routes:</strong> Country and farm properties</li>
                <li><strong>County Facilities:</strong> Courthouse and government</li>
                <li><strong>Industrial Areas:</strong> Manufacturing zones</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Service Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2"></h3>
                  <p className="text-green-700 mb-3">
                    Professional process serving with transparent pricing. Rates vary by service type and urgency.
                  </p>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Complete Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              County Seat Service Excellence
            </h3>
            <p className="text-yellow-700">
              Specialized service to Wagoner as the county seat with direct courthouse access. 
              Complete understanding of county procedures and local legal community.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Wagoner Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Wagoner and Wagoner County. 
              Expert courthouse filing and rural community legal document delivery.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Wagoner, Wagoner County</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Service
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Content Freshness:</strong> This Wagoner process serving page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
