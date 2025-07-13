import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Property Management Process Server Tulsa | Landlord Legal Service',
  description: 'Professional process server for property managers and landlords in Tulsa. Eviction notices, lease violations, tenant legal documents. Fast service. Call (539) 367-6832.',
  keywords: ['property management process server', 'landlord legal service Tulsa', 'eviction notice service', 'tenant legal documents', 'lease violation notices', 'rental property legal'],
  robots: 'index, follow'
};

export default function ProcessServerPropertyManagement() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server for Property Managers & Landlords in Tulsa
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Specializing:</strong> Property Management & Landlord Services
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions specializes in process serving for property management companies, 
            landlords, and real estate professionals throughout Tulsa. We understand landlord-tenant 
            law and provide fast, professional service for all rental property legal needs.
          </p>

          <div className="mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop&auto=format" 
              alt="Property management and rental property legal services in Tulsa"
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              priority={false}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Property Management Services
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Eviction Notices:</strong> 3-day, 5-day, and 30-day notices</li>
                <li><strong>Lease Violations:</strong> Notice to quit or cure</li>
                <li><strong>Court Summons:</strong> Unlawful detainer actions</li>
                <li><strong>Judgment Service:</strong> Money judgment delivery</li>
                <li><strong>Garnishment Papers:</strong> Tenant wage garnishments</li>
                <li><strong>Property Notices:</strong> Various tenant notifications</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Landlord Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Property Manager Rates</h3>
                  <p className="text-green-700 mb-3">
                     for property management companies with volume discounts. 
                    Fast turnaround for time-sensitive eviction proceedings.
                  </p>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Property Management Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Why Property Managers Choose Us
            </h3>
            <ul className="space-y-2 text-yellow-700">
              <li>✓ <strong>Fast Eviction Service:</strong> Same-day service available</li>
              <li>✓ <strong>Court Knowledge:</strong> Familiar with local eviction procedures</li>
              <li>✓ <strong>Professional Service:</strong> Respectful tenant interaction</li>
              <li>✓ <strong>Volume Discounts:</strong> Cost-effective for property managers</li>
              <li>✓ <strong>Detailed Reports:</strong> Comprehensive service documentation</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-3">
              Emergency Eviction Service
            </h3>
            <p className="text-red-700">
              When eviction deadlines are tight, we deliver immediately. Emergency same-day service 
              for urgent eviction notices and court documents. Call for immediate service.
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              Tulsa Rental Market Expertise
            </h3>
            <p className="text-purple-700">
              With extensive knowledge of Tulsa&apos;s rental market and Oklahoma landlord-tenant law, 
              we provide informed, professional service to property management companies throughout 
              the metro area. From downtown high-rises to suburban single-family rentals.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Property Management Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving for property managers and landlords throughout Tulsa. 
              Fast, reliable eviction and tenant legal document delivery services.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Property Managers</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Property Service
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Content Freshness:</strong> This property management process serving page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

