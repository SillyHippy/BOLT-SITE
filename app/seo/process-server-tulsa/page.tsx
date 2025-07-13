import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Tulsa Oklahoma | Professional Legal Document Delivery | Just Legal Solutions',
  description: 'Expert process server in Tulsa, Oklahoma. Complete legal document delivery services throughout Tulsa County. Licensed, bonded, insured. Call (539) 367-6832 for all process serving needs.',
  keywords: ['process server Tulsa', 'Tulsa process server', 'legal document delivery Tulsa', 'process serving Tulsa Oklahoma', 'court documents Tulsa', 'professional process server'],
  robots: 'index, follow'
};

export default function ProcessServerTulsaPage() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Process Server in Tulsa, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Full Service Coverage:</strong> Tulsa County & Beyond
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Complete Legal Document Delivery Services in Tulsa
        </h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Just Legal Solutions is Tulsa&apos;s premier process serving company, providing comprehensive legal document 
            delivery throughout Tulsa County and surrounding areas. Our experienced, licensed process servers handle 
            all types of legal documents with professionalism, speed, and complete accuracy.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Standard Process Serving</h3>
              <ul className="text-green-700 space-y-1">
                <li>✓ Civil court documents</li>
                <li>✓ Family court papers</li>
                <li>✓ Small claims summons</li>
                <li>✓ Business litigation</li>
                <li>✓ Starting at <div className="mt-8 text-center">
  <a 
    href="/pricing" 
    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
  >
    View Pricing 
  </a>
</div></li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Rush & Same-Day Service</h3>
              <ul className="text-orange-700 space-y-1">
                <li>✓ 2-hour emergency service</li>
                <li>✓ Same-day guarantee</li>
                <li>✓ Weekend availability</li>
                <li>✓ Holiday service</li>
                <li>✓ Starting at <div className="mt-8 text-center">
  <a 
    href="/pricing" 
    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
  >
    View Pricing 
  </a>
</div></li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Complete Tulsa Process Serving Services</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Document Types:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Divorce papers and family court documents</li>
                <li>Civil litigation and business disputes</li>
                <li>Eviction notices and landlord documents</li>
                <li>Subpoenas and witness summons</li>
                <li>Small claims court papers</li>
                <li>Restraining orders and protective orders</li>
                <li>Corporate and commercial documents</li>
                <li>Bankruptcy and collection papers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Service Areas:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Downtown Tulsa (74103, 74120, 74114)</li>
                <li>South Tulsa (74104, 74105, 74135, 74137)</li>
                <li>North Tulsa (74106, 74110, 74115, 74126)</li>
                <li>East Tulsa (74112, 74116, 74128, 74129)</li>
                <li>West Tulsa (74107, 74127, 74131, 74132)</li>
                <li>Midtown Tulsa (74114, 74119, 74120)</li>
                <li>All surrounding Tulsa County areas</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Why Choose Just Legal Solutions in Tulsa?</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">📍 Local Expertise</h4>
                <p className="text-blue-700 text-sm">Deep knowledge of Tulsa courts, procedures, and local requirements</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">⚡ Fast Service</h4>
                <p className="text-blue-700 text-sm">Same-day, rush, and standard service options available</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">🛡️ Professional</h4>
                <p className="text-blue-700 text-sm">Licensed, bonded, and insured process servers</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Tulsa Court Locations We Serve</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Tulsa County Courts:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Tulsa County District Court</li>
                  <li>• Tulsa County Family Court</li>
                  <li>• Tulsa County Small Claims</li>
                  <li>• Municipal Court of Tulsa</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Specialized Services:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Court document filing</li>
                  <li>• Document retrieval</li>
                  <li>• Skip tracing assistance</li>
                  <li>• Legal courier services</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Contact Tulsa&apos;s Top Process Servers
            </h3>
            <p className="text-green-700 mb-3">
              Ready to serve your legal documents in Tulsa? Get professional, reliable service today!
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/card/calendar" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Schedule Service Online
                </a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Tulsa Process Serving Pricing</h3>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-green-800 mb-3"><div className="mt-8 text-center">
  <a 
    href="/pricing" 
    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
  >
    View Pricing 
  </a>
</div> for Tulsa Area</h4>
            <p className="text-green-700 mb-4">
              Professional process serving with transparent pricing. Rates vary by service type, urgency, and location.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800">
                <strong>Service Area Note:</strong> Standard rates apply to Tulsa County and select parts of 
                Creek County (Sapulpa) & Wagoner County (Broken Arrow). A surcharge applies to all other areas. 
                Please contact us for a precise quote.
              </p>
            </div>
            <a href="/pricing" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg inline-block font-semibold">
              View Complete Pricing & Packages
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>SEO Optimization:</strong> This comprehensive Tulsa process server page updates daily with fresh 
              content and current availability. We serve all Tulsa County zip codes with professional legal document delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
