import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subpoena Service Tulsa | Professional Witness Summons Delivery | Just Legal Solutions',
  description: 'Expert subpoena service in Tulsa, Oklahoma. Fast, reliable delivery of witness summons, court subpoenas, and legal notices. Call (539) 367-6832 for professional service.',
  keywords: ['subpoena service Tulsa', 'witness summons delivery', 'court subpoena serving', 'legal subpoena service Oklahoma', 'witness subpoena Tulsa'],
  robots: 'index, follow'
};

export default function SubpoenaService() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Subpoena Service in Tulsa, Oklahoma
        </h1>
        
        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-8">
          <p className="text-lg text-purple-800">
            <strong>Expert Witness Service!</strong> Last Updated: {lastUpdated} | Specialized Subpoena Delivery
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Specialized Subpoena and Witness Summons Delivery
        </h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Just Legal Solutions provides expert subpoena service throughout Tulsa County and surrounding areas. 
            Our experienced process servers understand the critical importance of proper subpoena delivery and 
            ensure compliance with all Oklahoma court requirements for witness summons.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              ⚖️ Professional Subpoena Service
            </h3>
            <p className="text-blue-700 mb-3">
              Time-sensitive subpoena delivery with detailed documentation for court proceedings.
            </p>
            <p className="text-3xl font-bold text-blue-800">
              📞 (539) 367-6832
            </p>
            <p className="text-blue-700 mt-2">
              Same-Day Subpoena Service Available
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Types of Subpoenas We Serve</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-semibold text-green-800 mb-3">Witness Subpoenas:</h4>
              <ul className="text-green-700 space-y-1">
                <li>• Subpoena to testify in court</li>
                <li>• Deposition subpoenas</li>
                <li>• Expert witness summons</li>
                <li>• Character witness subpoenas</li>
                <li>• Medical professional subpoenas</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h4 className="font-semibold text-orange-800 mb-3">Document Subpoenas:</h4>
              <ul className="text-orange-700 space-y-1">
                <li>• Subpoena duces tecum</li>
                <li>• Medical records subpoenas</li>
                <li>• Business records requests</li>
                <li>• Bank records subpoenas</li>
                <li>• Employment records subpoenas</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Oklahoma Subpoena Service Requirements</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Legal Compliance Standards:</h4>
            <ul className="text-yellow-700 space-y-2">
              <li>• <strong>Personal Service:</strong> Must be served personally to the witness</li>
              <li>• <strong>Advance Notice:</strong> Minimum time requirements must be met</li>
              <li>• <strong>Witness Fees:</strong> Appropriate fees must be tendered with service</li>
              <li>• <strong>Proper Documentation:</strong> Detailed return of service required</li>
              <li>• <strong>Geographic Limits:</strong> Service within Oklahoma state boundaries</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Subpoena Service Process</h3>
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</div>
              <div>
                <h4 className="font-semibold">Document Review</h4>
                <p className="text-gray-600">Verify subpoena completeness and service requirements</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</div>
              <div>
                <h4 className="font-semibold">Witness Location</h4>
                <p className="text-gray-600">Locate witness and determine best service approach</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</div>
              <div>
                <h4 className="font-semibold">Personal Service</h4>
                <p className="text-gray-600">Serve subpoena personally with witness fees if required</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">4</div>
              <div>
                <h4 className="font-semibold">Return of Service</h4>
                <p className="text-gray-600">Complete detailed affidavit of service for court filing</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Court Types We Serve Subpoenas For</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Civil Courts:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>District Court civil cases</li>
                <li>Personal injury litigation</li>
                <li>Contract disputes</li>
                <li>Property disputes</li>
                <li>Business litigation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Family Court:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Divorce proceedings</li>
                <li>Child custody cases</li>
                <li>Support hearings</li>
                <li>Adoption proceedings</li>
                <li>Guardianship matters</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Special Situations We Handle</h3>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>Reluctant Witnesses:</strong> Professional approach to difficult service situations</li>
            <li><strong>Out-of-County Service:</strong> Service throughout Oklahoma and border states</li>
            <li><strong>Business Subpoenas:</strong> Corporate officers and employee witness service</li>
            <li><strong>Medical Professionals:</strong> Hospital and clinic witness service coordination</li>
            <li><strong>Expert Witnesses:</strong> Academic and professional expert subpoena service</li>
            <li><strong>Emergency Service:</strong> Rush subpoena service for trial preparation</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Subpoena Service Pricing</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Service Type</th>
                  <th className="border border-gray-300 p-3 text-left">Timeframe</th>
                  <th className="border border-gray-300 p-3 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Standard Subpoena</td>
                  <td className="border border-gray-300 p-3">3-5 business days</td>
                  <td className="border border-gray-300 p-3 font-semibold">$40</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Rush Subpoena</td>
                  <td className="border border-gray-300 p-3">1-2 business days</td>
                  <td className="border border-gray-300 p-3 font-semibold">$60</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Same-Day Subpoena</td>
                  <td className="border border-gray-300 p-3">Within 8 hours</td>
                  <td className="border border-gray-300 p-3 font-semibold">$100</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Out-of-County</td>
                  <td className="border border-gray-300 p-3">Standard + mileage</td>
                  <td className="border border-gray-300 p-3 font-semibold">$60 + $0.67/mile</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-3">
              Important Subpoena Service Notes
            </h3>
            <ul className="text-red-700 space-y-2">
              <li>• Witness fees must be provided for service (when required by law)</li>
              <li>• Subpoenas must be served within reasonable time before hearing</li>
              <li>• Personal service is required - no substitute service allowed</li>
              <li>• Detailed return of service provided for court filing</li>
              <li>• We coordinate with attorneys for complex witness situations</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Our Subpoena Service Team
            </h3>
            <p className="text-green-700 mb-3">
              Professional subpoena and witness summons service throughout Oklahoma.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Get Quote
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Legal Expertise:</strong> This subpoena service page updates daily with current Oklahoma 
              court requirements. Professional witness service available statewide: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

