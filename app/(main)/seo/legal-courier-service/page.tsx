import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Legal Courier Service Tulsa | Secure Document Delivery & Transport',
  description: 'Professional legal courier service in Tulsa, Oklahoma. Secure document delivery, court filings transport, and confidential legal document courier. Same-day service. Call (539) 367-6832.',
  keywords: ['legal courier Tulsa', 'document delivery', 'court filing delivery', 'legal transport', 'secure courier', 'legal document delivery'],
  robots: 'index, follow'
};

export default function LegalCourierService() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' });
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Legal Courier Service in Tulsa, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Secure Legal Transport</strong> | Last Updated: {lastUpdated} | Confidential Document Delivery
          </p>
        </div>

        <div className="mb-8">
          <Image 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&auto=format" 
            alt="Professional legal courier service delivering secure documents in Tulsa"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
            priority={false}
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides specialized legal courier services throughout 
            Tulsa and Oklahoma. Our secure document delivery service ensures confidential 
            legal materials reach their destination safely and on time.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">
                Courier Services Available
              </h3>
              <ul className="text-purple-700 space-y-2">
                <li>✓ Court document delivery</li>
                <li>✓ Law firm document transport</li>
                <li>✓ Client document pickup/delivery</li>
                <li>✓ Medical record transport</li>
                <li>✓ Contract and agreement delivery</li>
                <li>✓ Evidence and discovery materials</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Courier Service Pricing
              </h3>
              <p className="text-green-700 mb-4">
                Professional legal courier with competitive rates. Pricing based on 
                distance, urgency, and special handling requirements.
              </p>
              <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                Get Delivery Quote
              </a>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-3">
              Same-Day Delivery Available
            </h3>
            <p className="text-red-700">
              When legal deadlines are critical, our same-day courier service ensures 
              your documents reach their destination on time. Emergency delivery available 
              for time-sensitive legal matters and court filings.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Legal Document Types We Transport
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-semibold mb-2">Court Documents:</h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Court filings and submissions</li>
                <li>Motions and legal briefs</li>
                <li>Discovery documents</li>
                <li>Exhibits and evidence</li>
                <li>Subpoenas and notices</li>
                <li>Appeal documents</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal Materials:</h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Contracts and agreements</li>
                <li>Deposition transcripts</li>
                <li>Medical records</li>
                <li>Financial documents</li>
                <li>Real estate papers</li>
                <li>Corporate documents</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Secure Chain of Custody
            </h3>
            <p className="text-yellow-700 mb-3">
              All legal documents are handled with strict chain of custody protocols. 
              We provide detailed tracking and delivery confirmation for every transport:
            </p>
            <ul className="text-yellow-700 space-y-1">
              <li>• Signature required delivery</li>
              <li>• Real-time tracking updates</li>
              <li>• Detailed delivery receipts</li>
              <li>• Photographic delivery proof</li>
            </ul>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-indigo-800 mb-3">
              Service Area Coverage
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-indigo-700">
              <div>
                <h4 className="font-semibold">Local Delivery:</h4>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Tulsa metro area</li>
                  <li>All Tulsa County courts</li>
                  <li>Law firm to law firm</li>
                  <li>Office to courthouse</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Regional Transport:</h4>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Oklahoma City delivery</li>
                  <li>Statewide court systems</li>
                  <li>Federal court buildings</li>
                  <li>Out-of-state coordination</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-teal-800 mb-3">
              Special Handling Services
            </h3>
            <p className="text-teal-700 mb-3">
              Some legal documents require special handling protocols. We provide:
            </p>
            <ul className="text-teal-700 space-y-1">
              <li>• Temperature-controlled transport</li>
              <li>• Sealed document handling</li>
              <li>• Multi-party signature collection</li>
              <li>• Notarization coordination</li>
              <li>• Document scanning and backup</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">
              Law Firm Partnerships
            </h3>
            <p className="text-orange-700 mb-3">
              We work with law firms throughout Oklahoma to provide reliable document 
              transport services. Partnership benefits include:
            </p>
            <ul className="text-orange-700 space-y-1">
              <li>• Priority scheduling</li>
              <li>• Volume discount pricing</li>
              <li>• Dedicated account management</li>
              <li>• Electronic tracking access</li>
            </ul>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-pink-800 mb-3">
              Confidentiality Guaranteed
            </h3>
            <p className="text-pink-700">
              All legal courier services are performed with the highest level of 
              confidentiality. Our couriers are bonded and insured, with background 
              checks and confidentiality agreements in place.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Contact Legal Courier Service
            </h3>
            <p className="text-gray-700 mb-4">
              Professional legal document courier throughout Tulsa and Oklahoma. 
              Secure, confidential, and reliable document transport services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:(539) 367-6832" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block text-center">
                Call (539) 367-6832
              </a>
              <a href="/card/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block text-center">
                Schedule Courier Service
              </a>
            </div>
          </div>

          <div className="text-sm text-gray-500 border-t pt-4">
            <p>
              <strong>Content Freshness:</strong> This legal courier service page updates daily 
              for SEO optimization. Confidential consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

