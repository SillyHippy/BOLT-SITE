import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Process Server Collinsville | Northern Tulsa County Legal Service',
  description: 'Professional process server in Collinsville, Oklahoma. Expert legal document delivery in northern Tulsa County. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['process server Collinsville', 'Collinsville process serving', 'legal document delivery Collinsville', '74021 process server', 'northern Tulsa County legal'],
  robots: 'index, follow'
};

export default function ProcessServerCollinsville() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Collinsville, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Collinsville, Tulsa County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides expert process serving in Collinsville, Oklahoma (74021). 
            Our certified process servers deliver legal documents throughout northern Tulsa County 
            with professional service tailored to small-town communities.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=400&fit=crop&auto=format" 
              alt="Collinsville Oklahoma small town legal services and process server"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Collinsville Service Coverage
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Downtown Collinsville:</strong> Main business district</li>
                <li><strong>Residential Areas:</strong> All neighborhoods</li>
                <li><strong>School District:</strong> Collinsville Public Schools</li>
                <li><strong>Industrial Areas:</strong> Manufacturing zones</li>
                <li><strong>Rural Routes:</strong> Outlying properties</li>
                <li><strong>Highway 169 Corridor:</strong> Commercial strip</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Service Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Competitive Rates</h3>
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

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Collinsville Legal Document Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Family court and divorce documents</li>
                <li>Civil litigation papers</li>
                <li>Small claims court papers</li>
                <li>Protective orders</li>
                <li>Landlord and tenant notices</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Subpoenas and court summons</li>
                <li>Business litigation documents</li>
                <li>Debt collection papers</li>
                <li>Probate and estate notices</li>
                <li>Emergency legal deliveries</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Small Town Service Excellence
            </h3>
            <p className="text-yellow-700">
              Personalized service for Collinsville&apos;s community-focused environment. Professional 
              document delivery with understanding of local customs and business practices.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Why Choose Our Collinsville Process Servers
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Local Knowledge:</h4>
                <ul className="list-disc ml-6 text-blue-600 space-y-1">
                  <li>Familiar with Collinsville layout</li>
                  <li>Knowledge of local business hours</li>
                  <li>Understanding of community patterns</li>
                  <li>Established local professional network</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Professional Standards:</h4>
                <ul className="list-disc ml-6 text-blue-600 space-y-1">
                  <li>GPS tracking and documentation</li>
                  <li>Professional affidavits of service</li>
                  <li>Multiple service attempts included</li>
                  <li>Real-time status updates</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Collinsville Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Collinsville and northern Tulsa County. 
              Reliable small-town legal document delivery with big-city professionalism.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Collinsville, Tulsa County</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/calendar" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
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
