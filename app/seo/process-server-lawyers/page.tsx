import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Process Server for Lawyers Tulsa | Attorney Legal Document Service',
  description: 'Professional process server for law firms in Tulsa. Fast, reliable legal document delivery for attorneys. Court filing, subpoenas, summons. Call (539) 367-6832.',
  keywords: ['process server lawyers Tulsa', 'attorney process serving', 'law firm legal service', 'court document delivery', 'legal process serving attorneys', 'Tulsa lawyer services'],
  robots: 'index, follow'
};

export default function ProcessServerLawyers() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services for Lawyers & Law Firms in Tulsa
        </h1>
        
        {/* Professional Image */}
        <div className="mb-8 text-center">
          <Image
            src="https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?w=800&h=400&fit=crop&auto=format"
            alt="Professional legal services for lawyers and law firms in Tulsa Oklahoma"
            width={800}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
            priority
          />
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Specializing:</strong> Attorney & Law Firm Services
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions specializes in process serving for lawyers, attorneys, and law firms throughout 
            Tulsa and surrounding counties. We understand the legal profession&apos;s demands for speed, accuracy, 
            and professional service in document delivery and court filing.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Legal Services for Attorneys
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Summons & Complaints:</strong> Civil litigation service</li>
                <li><strong>Subpoenas:</strong> Witness and document subpoenas</li>
                <li><strong>Court Filings:</strong> Tulsa County Courthouse</li>
                <li><strong>Discovery Documents:</strong> Depositions, interrogatories</li>
                <li><strong>Eviction Notices:</strong> Landlord-tenant matters</li>
                <li><strong>Emergency Service:</strong> Same-day and rush delivery</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Attorney Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Law Firm Rates</h3>
                  <p className="text-green-700 mb-3">
                    Professional process serving with attorney-focused pricing. Volume discounts 
                    available for law firms with regular service needs.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                    <p className="text-sm text-blue-800">
                      <strong>Service Area Note:</strong> Standard rates apply to Tulsa County and select parts of 
                      Creek County (Sapulpa) & Wagoner County (Broken Arrow). A surcharge applies to all other areas.
                    </p>
                  </div>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Attorney Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Why Lawyers Choose Just Legal Solutions
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li>✓ <strong>Fast Service:</strong> Same-day and rush delivery available</li>
              <li>✓ <strong>Court Knowledge:</strong> Familiar with Tulsa County procedures</li>
              <li>✓ <strong>Professional Reports:</strong> Detailed affidavits of service</li>
              <li>✓ <strong>Secure Delivery:</strong> Confidential document handling</li>
              <li>✓ <strong>Volume Discounts:</strong> Cost-effective for law firms</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-3">
              Emergency Legal Service Available
            </h3>
            <p className="text-red-700">
              When deadlines matter, we deliver. Emergency same-day service for time-sensitive 
              legal documents. Call immediately for urgent attorney needs.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Legal Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving for lawyers and law firms throughout Tulsa area. 
              Fast, reliable, confidential legal document delivery services.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Tulsa Area Attorneys</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Attorney Service
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Content Freshness:</strong> This attorney process serving page updates daily 
              for SEO optimization. Professional legal consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

