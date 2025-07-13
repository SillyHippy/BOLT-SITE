import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Process Server Claremore | Rogers County Legal Document Service',
  description: 'Expert process server in Claremore, Rogers County. Professional legal document delivery throughout Will Rogers country. Call (539) 367-6832 for 74017 service.',
  keywords: ['process server Claremore', 'Claremore process serving', 'Rogers County legal service', '74017 process server', 'Will Rogers country legal'],
  robots: 'index, follow'
};

export default function ProcessServerClaremore() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server Services in Claremore, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Service Area:</strong> Claremore, Rogers County
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Just Legal Solutions provides comprehensive process serving in Claremore, Oklahoma (74017). 
            Our experienced process servers deliver legal documents throughout Rogers County 
            with professional service in Will Rogers&apos; hometown.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Claremore Service Coverage
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Downtown Claremore:</strong> Historic district</li>
                <li><strong>Rogers State University:</strong> Campus area</li>
                <li><strong>Medical District:</strong> Hospital and clinics</li>
                <li><strong>Residential Areas:</strong> All neighborhoods</li>
                <li><strong>Business District:</strong> Commercial zones</li>
                <li><strong>Rural Areas:</strong> Outlying Rogers County</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Service Pricing
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Professional Process Serving</h3>
                  <p className="text-green-700 mb-3">
                    Professional process serving with transparent pricing. Rates vary by service type and urgency.
                  </p>
                  <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    View Complete Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Claremore Legal Document Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Divorce and family court documents</li>
                <li>Civil litigation papers</li>
                <li>Eviction and landlord notices</li>
                <li>Small claims court summons</li>
                <li>Protective orders and restraining orders</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Subpoenas and witness summons</li>
                <li>Business and corporate service</li>
                <li>Debt collection documents</li>
                <li>Probate and estate papers</li>
                <li>Emergency legal deliveries</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Rogers County Court Service
            </h3>
            <p className="text-yellow-700">
              Professional document filing and delivery to Rogers County Courthouse. 
              Complete courier services from Claremore to all county facilities.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Why Choose Our Claremore Process Servers
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Regional Expertise:</h4>
                <ul className="list-disc ml-6 text-blue-600 space-y-1">
                  <li>Deep knowledge of Rogers County</li>
                  <li>Familiar with Claremore layout</li>
                  <li>Understanding of rural delivery routes</li>
                  <li>Established courthouse relationships</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Professional Standards:</h4>
                <ul className="list-disc ml-6 text-blue-600 space-y-1">
                  <li>GPS tracking and photo documentation</li>
                  <li>Comprehensive affidavits of service</li>
                  <li>Multiple service attempts included</li>
                  <li>Professional appearance and conduct</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Claremore Process Server
            </h3>
            <p className="text-green-700 mb-4">
              Professional process serving throughout Claremore and Rogers County. 
              Reliable legal document delivery with complete documentation and tracking.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
                <p className="text-green-700">📍 Serving Claremore, Rogers County</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Service
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Content Freshness:</strong> This Claremore process serving page updates daily 
              for SEO optimization. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <Image 
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=400&fit=crop&auto=format" 
            alt="Professional process server delivering legal documents in Claremore, Rogers County"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
