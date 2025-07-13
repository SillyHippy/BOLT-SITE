import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Civil Litigation Process Server Tulsa | Court Document Service',
  description: 'Professional civil litigation process serving in Tulsa County. Expert service of summons, complaints, subpoenas, and court documents. Licensed process servers. Call (539) 367-6832.',
  keywords: ['civil litigation process server', 'court document service', 'Tulsa process server', 'summons service', 'subpoena service', 'civil lawsuit service'],
  robots: 'index, follow'
};

export default function CivilLitigationProcessServer() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Civil Litigation Process Server in Tulsa County, Oklahoma
        </h1>
        
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-8">
          <p className="text-lg text-indigo-800">
            <strong>Licensed Civil Process Server</strong> | Last Updated: {lastUpdated} | Expert Court Document Service
          </p>
        </div>

        <div className="mb-8">
          <Image 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&auto=format" 
            alt="Professional civil litigation process server delivering court documents in Tulsa"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
            priority={false}
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions specializes in civil litigation process serving throughout 
            Tulsa County and Oklahoma. Our experienced process servers ensure proper service 
            of all civil court documents in compliance with state and federal rules.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Civil Documents We Serve
              </h3>
              <ul className="text-blue-700 space-y-2">
                <li>✓ Summons and complaints</li>
                <li>✓ Subpoenas and depositions</li>
                <li>✓ Motions and orders</li>
                <li>✓ Discovery documents</li>
                <li>✓ Judgments and garnishments</li>
                <li>✓ Temporary restraining orders</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Process Service Pricing
              </h3>
              <p className="text-green-700 mb-4">
                Professional civil litigation service with transparent rates. 
                Competitive pricing for all types of civil court documents.
              </p>
              <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                View Service Rates
              </a>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              Civil Litigation Expertise
            </h3>
            <p className="text-purple-700">
              Our process servers understand the unique requirements of civil litigation cases. 
              We provide detailed affidavits of service and maintain comprehensive case documentation 
              to support your legal proceedings.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Civil Court Systems Served
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-semibold mb-2">State Courts:</h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Oklahoma District Courts</li>
                <li>Civil Division filings</li>
                <li>Small Claims Court</li>
                <li>Workers&apos; Compensation Court</li>
                <li>Court of Appeals</li>
                <li>Oklahoma Supreme Court</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Federal Courts:</h4>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>U.S. District Court</li>
                <li>Federal civil litigation</li>
                <li>Bankruptcy Court documents</li>
                <li>Immigration Court papers</li>
                <li>Federal appeals</li>
                <li>Administrative proceedings</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">
              Rush Service Available
            </h3>
            <p className="text-orange-700 mb-3">
              Civil litigation often requires immediate action. We offer same-day and 
              next-day service for urgent court documents and time-sensitive legal matters.
            </p>
            <ul className="text-orange-700 space-y-1">
              <li>• Same-day service for emergency orders</li>
              <li>• Weekend and holiday service</li>
              <li>• Real-time status updates</li>
              <li>• Priority scheduling for law firms</li>
            </ul>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-teal-800 mb-3">
              Service Areas Coverage
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-teal-700">
              <div>
                <h4 className="font-semibold">Tulsa Metro:</h4>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Tulsa County</li>
                  <li>Broken Arrow</li>
                  <li>Sand Springs</li>
                  <li>Bixby</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Surrounding Areas:</h4>
                <ul className="list-disc ml-4 space-y-1">
                  <li>Rogers County</li>
                  <li>Creek County</li>
                  <li>Wagoner County</li>
                  <li>Osage County</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-3">
              Difficult Service Specialists
            </h3>
            <p className="text-red-700">
              When standard service attempts fail, our experienced team specializes in 
              difficult service situations. We use skip tracing, surveillance, and 
              alternative service methods when authorized by the court.
            </p>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-cyan-800 mb-3">
              Law Firm Partnerships
            </h3>
            <p className="text-cyan-700 mb-3">
              We work closely with law firms throughout Oklahoma to provide reliable 
              civil litigation process serving. Our services include:
            </p>
            <ul className="text-cyan-700 space-y-1">
              <li>• Dedicated account management</li>
              <li>• Volume discounts available</li>
              <li>• Electronic case tracking</li>
              <li>• Detailed billing reports</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Contact Civil Process Server
            </h3>
            <p className="text-gray-700 mb-4">
              Professional civil litigation process serving throughout Tulsa County. 
              Licensed, bonded, and insured for your protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:(539) 367-6832" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block text-center">
                Call (539) 367-6832
              </a>
              <a href="/card/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block text-center">
                Schedule Service
              </a>
            </div>
          </div>

          <div className="text-sm text-gray-500 border-t pt-4">
            <p>
              <strong>Content Freshness:</strong> This civil litigation service page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
