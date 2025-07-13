import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Notary Services Tulsa | Mobile Notary Public & Document Notarization',
  description: 'Professional notary services in Tulsa, Oklahoma. Mobile notary public for document notarization, real estate closings, and legal documents. Available 24/7. Call (539) 367-6832.',
  keywords: ['notary Tulsa', 'mobile notary', 'notary public', 'document notarization', 'real estate notary', 'legal document notary'],
  robots: 'index, follow'
};

export default function NotaryServicesTulsa() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Notary Services in Tulsa, Oklahoma
        </h1>
        
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-8">
          <p className="text-lg text-emerald-800">
            <strong>Licensed Notary Public</strong> | Last Updated: {lastUpdated} | Mobile Notary Available
          </p>
        </div>

        <div className="mb-8">
          <Image 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop&auto=format" 
            alt="Professional notary public services and document notarization in Tulsa"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
            priority={false}
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides comprehensive notary services throughout Tulsa 
            and the greater Oklahoma area. Our licensed notary public offers both mobile 
            and office-based notarization for all your document authentication needs.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Notary Services Available
              </h3>
              <ul className="text-green-700 space-y-2">
                <li>✓ Real estate document notarization</li>
                <li>✓ Legal document authentication</li>
                <li>✓ Power of attorney notarization</li>
                <li>✓ Wills and estate documents</li>
                <li>✓ Business contract notarization</li>
                <li>✓ Loan document signing</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Notary Service Pricing
              </h3>
              <p className="text-blue-700 mb-4">
                Professional notary services with competitive rates. Mobile notary 
                available with transparent travel fees.
              </p>
              <a href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                View Notary Rates
              </a>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              Mobile Notary Service
            </h3>
            <p className="text-purple-700">
              Convenience matters when you need documents notarized. Our mobile notary 
              service comes to your location - home, office, hospital, or anywhere in 
              the Tulsa metro area. Available evenings and weekends.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Document Types We Notarize
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-semibold mb-2">Real Estate Documents:</h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Mortgage and refinance papers</li>
                <li>Deed transfers and quitclaims</li>
                <li>Real estate purchase agreements</li>
                <li>Property disclosure forms</li>
                <li>Loan modification documents</li>
                <li>Homeowner association papers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal Documents:</h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Powers of attorney</li>
                <li>Wills and living wills</li>
                <li>Affidavits and sworn statements</li>
                <li>Contracts and agreements</li>
                <li>Adoption papers</li>
                <li>Court documents</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">
              Emergency Notary Service
            </h3>
            <p className="text-orange-700 mb-3">
              When you need notary services immediately, we provide emergency notarization 
              available 24/7 for urgent situations including:
            </p>
            <ul className="text-orange-700 space-y-1">
              <li>• Hospital bedside notarization</li>
              <li>• Last-minute real estate closings</li>
              <li>• Court deadline documents</li>
              <li>• Travel document emergencies</li>
            </ul>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-teal-800 mb-3">
              Notarization Process
            </h3>
            <div className="text-teal-700 space-y-2">
              <p><strong>1. Document Review:</strong> We verify the document is complete and ready for notarization</p>
              <p><strong>2. Identity Verification:</strong> Valid photo ID is required for all signers</p>
              <p><strong>3. Signer Verification:</strong> We confirm the signer&apos;s willingness and mental capacity</p>
              <p><strong>4. Notarization:</strong> Official notary seal and signature applied</p>
              <p><strong>5. Record Keeping:</strong> All notarizations recorded in our official journal</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              What to Bring for Notarization
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-yellow-700">
              <div>
                <h4 className="font-semibold">Required Items:</h4>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Valid government-issued photo ID</li>
                  <li>Unsigned documents</li>
                  <li>All parties who need to sign</li>
                  <li>Understanding of document contents</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Accepted ID Types:</h4>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Driver&apos;s license</li>
                  <li>State-issued ID card</li>
                  <li>Passport</li>
                  <li>Military ID</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-indigo-800 mb-3">
              Business Notary Services
            </h3>
            <p className="text-indigo-700 mb-3">
              We provide ongoing notary services for businesses, law firms, and organizations 
              throughout Tulsa. Services include:
            </p>
            <ul className="text-indigo-700 space-y-1">
              <li>• On-site notary visits</li>
              <li>• Volume discounts available</li>
              <li>• Scheduled regular service</li>
              <li>• Corporate document authentication</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Contact Notary Service
            </h3>
            <p className="text-gray-700 mb-4">
              Professional notary public services throughout Tulsa and Oklahoma. Licensed, 
              bonded, and insured. Mobile service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:(539) 367-6832" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block text-center">
                Call (539) 367-6832
              </a>
              <a href="/card/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block text-center">
                Schedule Notary Service
              </a>
            </div>
          </div>

          <div className="text-sm text-gray-500 border-t pt-4">
            <p>
              <strong>Content Freshness:</strong> This notary service page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
