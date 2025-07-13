import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Government Contractor Process Server Tulsa | Federal Document Delivery',
  description: 'Specialized process server for government contractors and federal agencies in Tulsa. Security clearance aware. Contract disputes, compliance docs. Call (539) 367-6832.',
  keywords: ['government contractor process server', 'federal document delivery', 'security clearance service', 'contract dispute service', 'government compliance documents', 'federal litigation support'],
  robots: 'index, follow'
};

export default function ProcessServerGovernment() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server for Government Contractors & Federal Agencies
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Specializing:</strong> Government Contract Services
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides specialized process serving for government contractors, 
            federal agencies, and military contractors throughout Tulsa. We understand security protocols 
            and provide professional document delivery for contract disputes and federal compliance matters.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop&auto=format" 
              alt="Government contractor document delivery and federal legal service in Tulsa"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Government Services
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Contract Disputes:</strong> Federal contractor litigation</li>
                <li><strong>Security Clearance Docs:</strong> Personnel investigation papers</li>
                <li><strong>Compliance Notices:</strong> Regulatory violation documents</li>
                <li><strong>Subpoenas:</strong> Government procurement inquiries</li>
                <li><strong>Military Contracts:</strong> Defense contractor documents</li>
                <li><strong>Federal Audits:</strong> Audit response documentation</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Government Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Federal Contract Rates</h3>
                  <p className="text-green-700 mb-3">
                    Professional government document delivery with security protocol awareness. 
                    Specialized rates for federal contractors and government agencies.
                  </p>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Government Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Government Contract Expertise
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li>✓ <strong>Security Protocols:</strong> Understanding of clearance requirements</li>
              <li>✓ <strong>Federal Regulations:</strong> Familiar with government compliance</li>
              <li>✓ <strong>Military Facilities:</strong> Experience with base access procedures</li>
              <li>✓ <strong>Contract Law:</strong> Understanding of procurement processes</li>
              <li>✓ <strong>Audit Support:</strong> Federal audit and investigation assistance</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-3">
              Urgent Government Document Service
            </h3>
            <p className="text-red-700">
              When federal contract deadlines are critical, we provide immediate service. 
              Emergency same-day delivery for urgent government documents and time-sensitive federal matters.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Security & Confidentiality
            </h3>
            <p className="text-blue-700">
              All government document handling follows strict security protocols. We understand 
              federal security requirements and ensure proper handling of sensitive contractor 
              information and classified document protocols.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Government Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving for government contractors and federal agencies. 
              Security-aware, confidential document delivery throughout Tulsa area.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Government Contractors</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Government Service
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
