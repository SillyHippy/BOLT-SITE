import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Process Server Glenpool | Professional Document Delivery | Just Legal Solutions',
  description: 'Certified process server in Glenpool, Tulsa County. Fast, reliable legal document delivery. Licensed and bonded. Call (539) 367-6832 for same-day service in 74033.',
  keywords: ['process server Glenpool', 'Glenpool process serving', 'legal document delivery Glenpool', 'court documents Tulsa County', '74033 process server'],
  robots: 'index, follow'
};

export default function ProcessServerGlenpool() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Glenpool, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Glenpool, Tulsa County
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Certified Legal Document Delivery in Tulsa County
        </h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides expert process serving in Glenpool, Oklahoma (74033). 
            Our professional process servers deliver legal documents throughout Tulsa County with 
            speed, accuracy, and complete confidentiality.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop&auto=format" 
              alt="Glenpool Oklahoma Tulsa County legal services and professional process server"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4">Our Glenpool Process Serving Services</h3>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Same-day process serving in Glenpool</li>
            <li>Court document delivery throughout 74033 area</li>
            <li>Legal courier services for attorneys</li>
            <li>Rush delivery for urgent legal matters</li>
            <li>GPS tracking and photographic proof</li>
            <li>Detailed service affidavits and reports</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Why Choose Just Legal Solutions in Glenpool?</h3>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>Local Expertise:</strong> Deep knowledge of Glenpool and Tulsa County</li>
            <li><strong>Fast Turnaround:</strong> Same-day and rush services available</li>
            <li><strong>Licensed Professionals:</strong> Bonded and insured process servers</li>
            <li><strong>Reliable Documentation:</strong> Complete service records and proof</li>
            <li><strong>Competitive Pricing:</strong> Transparent rates starting at $40</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Our Glenpool Process Servers
            </h3>
            <p className="text-green-700 mb-3">
              Need professional document service in Glenpool? View Pricing today!
            </p>
            <p className="text-2xl font-bold text-green-800">
              📞 (539) 367-6832
            </p>
            <p className="text-green-700 mt-2">
              📧 info@justlegalsolutions.org
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Glenpool Service Areas</h3>
          <p className="mb-4">
            Complete process serving coverage throughout Glenpool and nearby communities:
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>Central Glenpool (74033)</li>
            <li>Glenpool residential neighborhoods</li>
            <li>Glenpool business and commercial areas</li>
            <li>Near Bixby and Tulsa border areas</li>
            <li>All of Tulsa County coverage</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Glenpool Court and Legal Services</h3>
          <p className="mb-4">
            Our Glenpool process servers are familiar with all local legal procedures and can handle:
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li>Civil process serving</li>
            <li>Family court document delivery</li>
            <li>Small claims court papers</li>
            <li>Eviction notice service</li>
            <li>Subpoena delivery</li>
            <li>Corporate document service</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>SEO Freshness:</strong> This page updates automatically daily to provide current information 
              about our Glenpool process serving services. Available 24/7 for emergency legal document delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


