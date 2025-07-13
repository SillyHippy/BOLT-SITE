import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Loan Company Process Server Tulsa | Financial Legal Service',
  description: 'Professional process server for loan companies and financial institutions in Tulsa. Default notices, foreclosure documents, financial litigation. Call (539) 367-6832.',
  keywords: ['loan company process server', 'financial institution legal service', 'mortgage process serving', 'foreclosure documents', 'default notices', 'bank legal service Tulsa'],
  robots: 'index, follow'
};

export default function ProcessServerLoans() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server for Loan Companies & Financial Institutions
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Specializing:</strong> Financial & Loan Services
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides specialized process serving for loan companies, financial institutions, 
            and credit organizations throughout Tulsa and surrounding areas. We understand the sensitive 
            nature of financial proceedings and ensure professional, compliant service delivery.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop&auto=format" 
              alt="Financial institution and loan company legal document processing in Tulsa"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Financial Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Financial Industry Expertise
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li>✓ <strong>Regulatory Compliance:</strong> FDCPA and state law compliance</li>
              <li>✓ <strong>Secure Handling:</strong> Confidential financial document service</li>
              <li>✓ <strong>Court Experience:</strong> Familiar with foreclosure procedures</li>
              <li>✓ <strong>Professional Service:</strong> Respectful borrower interaction</li>
              <li>✓ <strong>Detailed Reporting:</strong> Comprehensive service documentation</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Financial Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving for loan companies and financial institutions. 
              Compliant, secure financial document delivery throughout Tulsa area.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Financial Institutions</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Financial Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


