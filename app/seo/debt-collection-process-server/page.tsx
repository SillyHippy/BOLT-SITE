import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Debt Collection Process Server Tulsa | Collections Legal Service',
  description: 'Professional process server for debt collection agencies in Tulsa. Fast collection document delivery, judgments, garnishments. Licensed and bonded. Call (539) 367-6832.',
  keywords: ['debt collection process server', 'collections legal service Tulsa', 'collection agency process serving', 'judgment service', 'garnishment documents', 'debt recovery legal'],
  robots: 'index, follow'
};

export default function ProcessServerCollections() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server for Debt Collection Agencies in Tulsa
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Specializing:</strong> Debt Collection & Recovery
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides specialized process serving for debt collection agencies, 
            collection law firms, and creditors throughout Tulsa and surrounding areas. We understand 
            the sensitive nature of collection proceedings and ensure professional, compliant service.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&auto=format" 
              alt="Professional debt collection process server delivering legal documents in Tulsa office building"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Collection Services
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Collection Lawsuits:</strong> Summons and complaints</li>
                <li><strong>Judgment Documents:</strong> Post-judgment service</li>
                <li><strong>Garnishment Papers:</strong> Wage and bank garnishments</li>
                <li><strong>Asset Discovery:</strong> Information subpoenas</li>
                <li><strong>Debtor Examinations:</strong> Court-ordered appearances</li>
                <li><strong>Demand Letters:</strong> Pre-litigation notices</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Collection Agency Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Volume Discounts Available</h3>
                  <p className="text-green-700 mb-3">
                    <div className="mt-8 text-center">
  <a 
    href="/pricing" 
    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
  >
    View Pricing 
  </a>
</div> for collection agencies with volume pricing for 
                    multiple serves. Professional service with fast turnaround times.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                    <p className="text-sm text-blue-800">
                      <strong>Service Area Note:</strong> Standard rates apply to Tulsa County and select parts of 
                      Creek County (Sapulpa) & Wagoner County (Broken Arrow). A surcharge applies to all other areas.
                    </p>
                  </div>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Collection Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Collection Industry Expertise
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li>✓ <strong>FDCPA Compliant:</strong> Professional, respectful service</li>
              <li>✓ <strong>Skip Tracing:</strong> Experienced in hard-to-find debtors</li>
              <li>✓ <strong>Court Experience:</strong> Familiar with collection procedures</li>
              <li>✓ <strong>Fast Turnaround:</strong> Quick service for time-sensitive matters</li>
              <li>✓ <strong>Detailed Reporting:</strong> Comprehensive service documentation</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-3">
              Rush Collection Service
            </h3>
            <p className="text-red-700">
              Same-day service available for urgent collection matters. When timing is critical 
              for asset protection or judgment enforcement, we deliver immediately.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Collection Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving for debt collection agencies throughout Tulsa area. 
              Compliant, efficient collection document delivery services.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Collection Agencies</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/calendar" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Collection Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
