import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Medical Office Process Server Tulsa | Healthcare Document Delivery',
  description: 'Professional process server for medical offices and healthcare facilities in Tulsa. Patient records, subpoenas, legal notices. HIPAA compliant. Call (539) 367-6832.',
  keywords: ['medical office process server', 'healthcare document delivery', 'medical records subpoena', 'HIPAA compliant service', 'hospital legal service', 'medical litigation support'],
  robots: 'index, follow'
};

export default function ProcessServerMedical() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server for Medical Offices & Healthcare Facilities
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Specializing:</strong> Healthcare Document Services
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides specialized process serving for medical offices, hospitals, and 
            healthcare facilities throughout Tulsa. We understand healthcare regulations and provide 
            HIPAA-compliant, professional document delivery services for medical litigation and compliance needs.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&auto=format" 
              alt="Medical office document delivery and healthcare legal service in Tulsa"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Healthcare Services
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Medical Records Subpoenas:</strong> Patient record requests</li>
                <li><strong>Malpractice Documents:</strong> Medical litigation support</li>
                <li><strong>HIPAA Notices:</strong> Privacy compliance documents</li>
                <li><strong>Insurance Documents:</strong> Claim verification papers</li>
                <li><strong>Regulatory Notices:</strong> State and federal compliance</li>
                <li><strong>Patient Documents:</strong> Legal notices and summons</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibent text-green-800 mb-4">
                Healthcare Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Medical Facility Rates</h3>
                  <p className="text-green-700 mb-3">
                    Professional healthcare document delivery with HIPAA compliance. 
                    Specialized rates for medical offices and healthcare systems.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                    <p className="text-sm text-blue-800">
                      <strong>Service Area Note:</strong> Standard rates apply to Tulsa County and select parts of 
                      Creek County (Sapulpa) & Wagoner County (Broken Arrow). A surcharge applies to all other areas.
                    </p>
                  </div>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Medical Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Healthcare Industry Expertise
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li>✓ <strong>HIPAA Compliance:</strong> Understanding of healthcare privacy laws</li>
              <li>✓ <strong>Medical Terminology:</strong> Familiar with healthcare documentation</li>
              <li>✓ <strong>Facility Protocols:</strong> Respectful of hospital and clinic procedures</li>
              <li>✓ <strong>Urgent Service:</strong> Emergency delivery for time-sensitive matters</li>
              <li>✓ <strong>Professional Discretion:</strong> Confidential handling of medical information</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-3">
              Emergency Medical Document Service
            </h3>
            <p className="text-red-700">
              When medical litigation deadlines are critical, we provide immediate service. 
              Emergency same-day delivery for urgent medical records subpoenas and time-sensitive healthcare documents.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              HIPAA Compliance Assurance
            </h3>
            <p className="text-blue-700">
              All medical document handling follows strict HIPAA privacy requirements. We understand 
              healthcare regulations and ensure proper protocols for patient information protection 
              throughout the document delivery process.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Medical Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving for medical offices and healthcare facilities. 
              HIPAA-compliant, secure medical document delivery throughout Tulsa area.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Healthcare Facilities</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Medical Service
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}


