import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Entry Services Tulsa | Professional Data Management | Just Legal Solutions',
  description: 'Expert data entry services in Tulsa. Fast, accurate data management, database entry, digitization, and administrative support. Call (539) 367-6832.',
  keywords: ['data entry Tulsa', 'data entry services Oklahoma', 'database management Tulsa', 'document digitization', 'data processing Tulsa', 'administrative data services'],
  robots: 'index, follow'
};

export default function DataEntryServicesTulsa() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Professional Data Entry Services in Tulsa, Oklahoma
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Accurate & Efficient</strong> | Updated: {lastUpdated} | Serving Tulsa Area Businesses
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Transform your business operations with professional data entry services in Tulsa. 
            Our experienced team provides fast, accurate, and secure data management solutions 
            for businesses of all sizes throughout Oklahoma.
          </p>

          {/* Core Data Entry Services */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-green-900 mb-6">
              📊 Core Data Entry Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Database Management</h3>
                <ul className="list-disc ml-6 text-green-700 space-y-2">
                  <li><strong>CRM Data Entry:</strong> Customer information, contacts, leads</li>
                  <li><strong>Inventory Management:</strong> Product data, stock levels, SKUs</li>
                  <li><strong>Financial Records:</strong> Accounting data, invoices, expenses</li>
                  <li><strong>Employee Records:</strong> HR data, payroll information</li>
                  <li><strong>Sales Data:</strong> Transaction records, customer history</li>
                  <li><strong>Vendor Information:</strong> Supplier data and contacts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Document Processing</h3>
                <ul className="list-disc ml-6 text-green-700 space-y-2">
                  <li><strong>Form Processing:</strong> Applications, surveys, registrations</li>
                  <li><strong>Document Digitization:</strong> Paper to digital conversion</li>
                  <li><strong>Data Verification:</strong> Accuracy checking and validation</li>
                  <li><strong>Image to Text:</strong> OCR and manual transcription</li>
                  <li><strong>Spreadsheet Creation:</strong> Excel and Google Sheets</li>
                  <li><strong>Data Cleanup:</strong> Duplicate removal, formatting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Industry-Specific Services */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-blue-900 mb-6">
              🏢 Industry-Specific Data Entry
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Legal Data Entry</h3>
                <ul className="list-disc ml-6 text-blue-700 space-y-1">
                  <li>Case file management</li>
                  <li>Client information databases</li>
                  <li>Court document processing</li>
                  <li>Legal research data</li>
                  <li>Time tracking entries</li>
                  <li>Billing and invoice data</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Healthcare Data</h3>
                <ul className="list-disc ml-6 text-blue-700 space-y-1">
                  <li>Patient record entry</li>
                  <li>Medical billing data</li>
                  <li>Insurance information</li>
                  <li>Prescription records</li>
                  <li>Appointment scheduling data</li>
                  <li>Medical research data</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Real Estate Data</h3>
                <ul className="list-disc ml-6 text-blue-700 space-y-1">
                  <li>Property listings</li>
                  <li>MLS data entry</li>
                  <li>Client contact information</li>
                  <li>Transaction records</li>
                  <li>Market analysis data</li>
                  <li>Property management records</li>
                </ul>
              </div>
            </div>
          </div>

          {/* E-commerce & Online Business */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-purple-900 mb-6">
              🛒 E-commerce Data Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Product Management</h3>
                <ul className="list-disc ml-6 text-purple-700 space-y-2">
                  <li><strong>Product Listings:</strong> Amazon, eBay, Shopify, WooCommerce</li>
                  <li><strong>Inventory Updates:</strong> Stock levels, pricing, availability</li>
                  <li><strong>Product Descriptions:</strong> SEO-optimized content entry</li>
                  <li><strong>Image Processing:</strong> Photo uploads and optimization</li>
                  <li><strong>Category Management:</strong> Product organization and tagging</li>
                  <li><strong>Bulk Uploads:</strong> Mass product data import</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Customer Data</h3>
                <ul className="list-disc ml-6 text-purple-700 space-y-2">
                  <li><strong>Customer Profiles:</strong> Contact info, preferences, history</li>
                  <li><strong>Order Processing:</strong> Transaction data entry</li>
                  <li><strong>Review Management:</strong> Customer feedback compilation</li>
                  <li><strong>Marketing Lists:</strong> Email and contact list building</li>
                  <li><strong>Analytics Data:</strong> Sales metrics and performance data</li>
                  <li><strong>CRM Integration:</strong> Customer relationship management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Research & Analysis */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-yellow-900 mb-6">
              🔍 Research & Data Collection
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">Market Research</h3>
                <ul className="list-disc ml-6 text-yellow-700 space-y-2">
                  <li><strong>Lead Generation:</strong> Contact information research</li>
                  <li><strong>Competitor Analysis:</strong> Market data compilation</li>
                  <li><strong>Industry Research:</strong> Trend and statistic gathering</li>
                  <li><strong>Directory Listings:</strong> Business information collection</li>
                  <li><strong>Survey Data:</strong> Response compilation and analysis</li>
                  <li><strong>Social Media Data:</strong> Engagement metrics and insights</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">Data Verification</h3>
                <ul className="list-disc ml-6 text-yellow-700 space-y-2">
                  <li><strong>Contact Verification:</strong> Email and phone validation</li>
                  <li><strong>Address Verification:</strong> Location accuracy checking</li>
                  <li><strong>Data Cleaning:</strong> Duplicate removal and standardization</li>
                  <li><strong>Quality Assurance:</strong> Double-checking and validation</li>
                  <li><strong>Database Updates:</strong> Keeping information current</li>
                  <li><strong>Compliance Checking:</strong> Regulatory requirement verification</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technology & Tools */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-teal-900 mb-6">
              💻 Technology Expertise
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-3">Microsoft Office</h3>
                <ul className="text-teal-700 space-y-1">
                  <li>Excel (Advanced)</li>
                  <li>Access Database</li>
                  <li>Word Processing</li>
                  <li>PowerPoint</li>
                  <li>Outlook</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-3">Google Workspace</h3>
                <ul className="text-teal-700 space-y-1">
                  <li>Google Sheets</li>
                  <li>Google Forms</li>
                  <li>Google Docs</li>
                  <li>Google Drive</li>
                  <li>Google Analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-3">CRM Systems</h3>
                <ul className="text-teal-700 space-y-1">
                  <li>Salesforce</li>
                  <li>HubSpot</li>
                  <li>Pipedrive</li>
                  <li>Zoho CRM</li>
                  <li>Custom databases</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-3">E-commerce</h3>
                <ul className="text-teal-700 space-y-1">
                  <li>Shopify</li>
                  <li>WooCommerce</li>
                  <li>Amazon Seller</li>
                  <li>eBay</li>
                  <li>BigCommerce</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Benefits */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              ✨ Why Choose Our Data Entry Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Accuracy Guarantee</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>99.9% accuracy rate</li>
                  <li>Double-checking process</li>
                  <li>Quality assurance protocols</li>
                  <li>Error correction included</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Fast Turnaround</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>Same-day service available</li>
                  <li>Rush order processing</li>
                  <li>Flexible scheduling</li>
                  <li>Real-time progress updates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Security</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>Confidentiality agreements</li>
                  <li>Secure file transfer</li>
                  <li>HIPAA compliance available</li>
                  <li>Data protection protocols</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-indigo-900 mb-6">
              💰 Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-indigo-300">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Basic Data Entry</h3>
                <ul className="text-indigo-700 space-y-2 mb-4">
                  <li>✓ Simple data entry tasks</li>
                  <li>✓ Form processing</li>
                  <li>✓ Basic spreadsheet work</li>
                  <li>✓ Standard turnaround time</li>
                </ul>
                <p className="text-indigo-800 font-semibold">Starting at </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-indigo-300">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Professional Data</h3>
                <ul className="text-indigo-700 space-y-2 mb-4">
                  <li>✓ Complex database work</li>
                  <li>✓ CRM data management</li>
                  <li>✓ Data verification included</li>
                  <li>✓ Priority processing</li>
                </ul>
                <p className="text-indigo-800 font-semibold">Starting at </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-indigo-300">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Specialized Services</h3>
                <ul className="text-indigo-700 space-y-2 mb-4">
                  <li>✓ Industry-specific expertise</li>
                  <li>✓ Research & data collection</li>
                  <li>✓ Custom solutions</li>
                  <li>✓ Rush delivery available</li>
                </ul>
                <p className="text-indigo-800 font-semibold">Starting at </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-6">
              Ready to Streamline Your Data Management?
            </h2>
            <p className="text-xl mb-6">
              Let our professional data entry team handle your data management needs so you can 
              focus on growing your business. Accurate, fast, and secure data services in Tulsa.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Contact Us Today</h3>
                <p className="text-2xl font-bold mb-2">📞 (539) 367-6832</p>
                <p className="text-lg mb-2">📧 info@justlegalsolutions.org</p>
                <p className="text-lg">🌐 Serving businesses throughout Tulsa, Oklahoma</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Get Started</h3>
                <div className="space-y-3">
                  <a href="/card/" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100">
                    Free Consultation
                  </a>
                  <p className="text-green-100">
                    Discuss your data entry needs and receive a custom quote 
                    for your specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Professional Data Services:</strong> This data entry services page highlights 
              our comprehensive data management capabilities in Tulsa. Updated daily for current 
              pricing and service information. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
