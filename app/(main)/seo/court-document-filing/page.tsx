import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Court Document Filing Service Tulsa | Legal Filing Assistance',
  description: 'Professional court document filing service in Tulsa County. Expert filing of legal papers, court forms, and judicial documents. Fast, accurate courthouse filings. Call (539) 367-6832.',
  keywords: ['court filing Tulsa', 'legal document filing', 'courthouse filing service', 'court forms filing', 'judicial document filing', 'Tulsa County court filing'],
  robots: 'index, follow'
};

export default function CourtDocumentFiling() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Court Document Filing Service in Tulsa County
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Courthouse Filing Experts</strong> | Last Updated: {lastUpdated} | Accurate Legal Filings
          </p>
        </div>

        <div className="mb-8">
          <Image 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop&auto=format" 
            alt="Professional legal documents being filed at Tulsa County courthouse"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
            priority={false}
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides comprehensive court document filing services throughout 
            Tulsa County. Our experienced team ensures your legal documents are filed correctly, 
            on time, and in compliance with all court requirements.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Filing Services Available
              </h3>
              <ul className="text-green-700 space-y-2">
                <li>✓ Civil litigation documents</li>
                <li>✓ Family court filings</li>
                <li>✓ Criminal court papers</li>
                <li>✓ Probate court documents</li>
                <li>✓ Small claims filings</li>
                <li>✓ Appeals and motions</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Filing Service Pricing
              </h3>
              <p className="text-blue-700 mb-4">
                Professional court filing with transparent rates. Includes court costs 
                and filing fees quoted upfront.
              </p>
              <a href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                View Filing Rates
              </a>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Same-Day Court Filing Available
            </h3>
            <p className="text-yellow-700">
              Time-sensitive legal matters require immediate attention. We offer same-day court 
              filing services for urgent documents, ensuring your deadlines are met and your 
              legal rights are protected.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Tulsa County Court Systems
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-semibold mb-2">District Courts:</h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Tulsa County District Court</li>
                <li>Family Division filings</li>
                <li>Civil Division documents</li>
                <li>Criminal Division papers</li>
                <li>Probate Division filings</li>
                <li>Juvenile Court documents</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Specialized Courts:</h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Small Claims Court</li>
                <li>Traffic Court filings</li>
                <li>Municipal Court documents</li>
                <li>Workers&apos; Compensation Court</li>
                <li>Court of Appeals filings</li>
                <li>Supreme Court documents</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-indigo-800 mb-3">
              Document Preparation & Review
            </h3>
            <p className="text-indigo-700 mb-3">
              Not sure if your documents are court-ready? We offer document review and preparation 
              services to ensure proper formatting and compliance with court rules.
            </p>
            <ul className="text-indigo-700 space-y-1">
              <li>• Format verification and correction</li>
              <li>• Required signature verification</li>
              <li>• Filing fee calculation</li>
              <li>• Deadline compliance checking</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Contact Court Filing Service
            </h3>
            <p className="text-gray-700 mb-4">
              Professional court document filing throughout Tulsa County. Expert knowledge 
              of all court procedures and filing requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:(539) 367-6832" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block text-center">
                Call (539) 367-6832
              </a>
              <a href="/card/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block text-center">
                Schedule Filing Service
              </a>
            </div>
          </div>

          <div className="text-sm text-gray-500 border-t pt-4">
            <p>
              <strong>Content Freshness:</strong> This court filing service page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
