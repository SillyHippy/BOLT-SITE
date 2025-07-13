import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Executive Assistant & Business Support Services | Data Entry | Just Legal Solutions',
  description: 'Professional executive assistant services, data entry, administrative support, and business solutions in Tulsa. Expert organizational support. Call (539) 367-6832.',
  keywords: ['executive assistant Tulsa', 'data entry services', 'administrative support', 'business solutions Tulsa', 'virtual assistant Oklahoma', 'professional organizer'],
  robots: 'index, follow'
};

export default function ExecutiveAssistantServices() {
  const lastUpdated = new Date().toLocaleDateString();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Executive Assistant & Professional Business Support Services
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Professional Excellence</strong> | Updated: {lastUpdated} | Comprehensive Business Support Solutions
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-8">
            Leverage decades of executive assistant expertise and professional administrative support 
            to streamline your business operations. From data entry to comprehensive executive support, 
            we provide the professional backbone your business needs to thrive.
          </p>

          {/* Executive Assistant Services */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-blue-900 mb-6">
              🎯 Executive Assistant Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Executive Support</h3>
                <ul className="list-disc ml-6 text-blue-700 space-y-2">
                  <li><strong>Calendar Management:</strong> Complex scheduling coordination</li>
                  <li><strong>Email Management:</strong> Professional correspondence handling</li>
                  <li><strong>Meeting Coordination:</strong> Planning and logistics</li>
                  <li><strong>Travel Arrangements:</strong> Complete itinerary management</li>
                  <li><strong>Document Preparation:</strong> Reports, presentations, proposals</li>
                  <li><strong>Client Relations:</strong> Professional communication management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Administrative Excellence</h3>
                <ul className="list-disc ml-6 text-blue-700 space-y-2">
                  <li><strong>Project Management:</strong> Timeline and deliverable tracking</li>
                  <li><strong>Vendor Relations:</strong> Supplier communication and management</li>
                  <li><strong>Office Systems:</strong> Workflow optimization and organization</li>
                  <li><strong>Confidential Support:</strong> Discretion and professional handling</li>
                  <li><strong>Multi-tasking Expertise:</strong> Simultaneous project management</li>
                  <li><strong>Problem Resolution:</strong> Proactive issue identification and solutions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Entry Services */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-green-900 mb-6">
              📊 Professional Data Entry Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Data Management</h3>
                <ul className="list-disc ml-6 text-green-700 space-y-2">
                  <li><strong>Database Entry:</strong> CRM, inventory, customer data</li>
                  <li><strong>Document Digitization:</strong> Paper to digital conversion</li>
                  <li><strong>Spreadsheet Creation:</strong> Excel and Google Sheets expertise</li>
                  <li><strong>Data Verification:</strong> Accuracy checking and validation</li>
                  <li><strong>Form Processing:</strong> Survey and application data entry</li>
                  <li><strong>Online Research:</strong> Data collection and compilation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Specialized Data Services</h3>
                <ul className="list-disc ml-6 text-green-700 space-y-2">
                  <li><strong>Legal Data Entry:</strong> Case files, client information</li>
                  <li><strong>Medical Records:</strong> Patient data and documentation</li>
                  <li><strong>Financial Records:</strong> Accounting and bookkeeping data</li>
                  <li><strong>E-commerce Data:</strong> Product listings, inventory management</li>
                  <li><strong>Real Estate Data:</strong> Property information and listings</li>
                  <li><strong>Contact Management:</strong> Lead generation and CRM updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Business Solutions */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-purple-900 mb-6">
              💼 Comprehensive Business Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Organizational Services</h3>
                <ul className="list-disc ml-6 text-purple-700 space-y-1">
                  <li>File system organization</li>
                  <li>Document management</li>
                  <li>Process standardization</li>
                  <li>Workflow optimization</li>
                  <li>Quality control systems</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Research & Analysis</h3>
                <ul className="list-disc ml-6 text-purple-700 space-y-1">
                  <li>Market research</li>
                  <li>Competitive analysis</li>
                  <li>Vendor evaluation</li>
                  <li>Industry trend analysis</li>
                  <li>Report compilation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Support Services</h3>
                <ul className="list-disc ml-6 text-purple-700 space-y-1">
                  <li>Customer service support</li>
                  <li>Social media management</li>
                  <li>Content creation assistance</li>
                  <li>Event planning support</li>
                  <li>Training coordination</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              🏆 Extensive Professional Background
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Executive Assistant Expertise</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li><strong>Decades of Experience:</strong> Supporting C-level executives</li>
                  <li><strong>Multi-Industry Knowledge:</strong> Legal, corporate, healthcare</li>
                  <li><strong>Technology Proficiency:</strong> Advanced software expertise</li>
                  <li><strong>Communication Skills:</strong> Professional written and verbal</li>
                  <li><strong>Discretion & Confidentiality:</strong> Trusted with sensitive information</li>
                  <li><strong>Problem-Solving:</strong> Proactive issue resolution</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Competencies</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li><strong>Microsoft Office Suite:</strong> Expert-level proficiency</li>
                  <li><strong>Google Workspace:</strong> Full platform expertise</li>
                  <li><strong>CRM Systems:</strong> Salesforce, HubSpot, and others</li>
                  <li><strong>Project Management:</strong> Asana, Monday.com, Trello</li>
                  <li><strong>Database Management:</strong> SQL, Access, cloud databases</li>
                  <li><strong>Document Management:</strong> SharePoint, Box, Dropbox</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Packages */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-yellow-900 mb-6">
              📦 Flexible Service Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-yellow-300">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">Basic Support</h3>
                <ul className="text-yellow-700 space-y-2 mb-4">
                  <li>✓ Email management</li>
                  <li>✓ Calendar scheduling</li>
                  <li>✓ Basic data entry</li>
                  <li>✓ Document formatting</li>
                </ul>
                <p className="text-yellow-800 font-semibold">Starting at $25/hour</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-yellow-300">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">Professional Package</h3>
                <ul className="text-yellow-700 space-y-2 mb-4">
                  <li>✓ All basic services</li>
                  <li>✓ Project management</li>
                  <li>✓ Research & analysis</li>
                  <li>✓ Client communication</li>
                  <li>✓ Advanced data management</li>
                </ul>
                <p className="text-yellow-800 font-semibold">Starting at $35/hour</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-yellow-300">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">Executive Support</h3>
                <ul className="text-yellow-700 space-y-2 mb-4">
                  <li>✓ Complete executive assistance</li>
                  <li>✓ Strategic project support</li>
                  <li>✓ Confidential document handling</li>
                  <li>✓ Travel & event coordination</li>
                  <li>✓ Comprehensive business support</li>
                </ul>
                <p className="text-yellow-800 font-semibold">Starting at $50/hour</p>
              </div>
            </div>
          </div>

          {/* Industries Served */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-teal-900 mb-6">
              🏢 Industries We Serve
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-3">Legal</h3>
                <ul className="text-teal-700 space-y-1">
                  <li>Law firms</li>
                  <li>Legal departments</li>
                  <li>Court systems</li>
                  <li>Legal consultants</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-3">Healthcare</h3>
                <ul className="text-teal-700 space-y-1">
                  <li>Medical practices</li>
                  <li>Hospitals</li>
                  <li>Healthcare administrators</li>
                  <li>Medical consultants</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-3">Corporate</h3>
                <ul className="text-teal-700 space-y-1">
                  <li>Executive offices</li>
                  <li>Small businesses</li>
                  <li>Startups</li>
                  <li>Non-profits</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-teal-800 mb-3">Specialized</h3>
                <ul className="text-teal-700 space-y-1">
                  <li>Real estate</li>
                  <li>Financial services</li>
                  <li>E-commerce</li>
                  <li>Professional services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-6">
              Ready to Elevate Your Business Operations?
            </h2>
            <p className="text-xl mb-6">
              Let our extensive executive assistant experience and professional administrative 
              expertise streamline your business and free you to focus on what matters most.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                <p className="text-2xl font-bold mb-2">📞 (539) 367-6832</p>
                <p className="text-lg mb-2">📧 info@justlegalsolutions.org</p>
                <p className="text-lg">🌐 Professional services throughout Tulsa area</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Get Started Today</h3>
                <div className="space-y-3">
                  <a href="/pricing" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100">
                    Schedule Consultation
                  </a>
                  <p className="text-blue-100">
                    Free initial consultation to discuss your specific business needs 
                    and how our executive assistant services can help.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Professional Excellence:</strong> This comprehensive business support page showcases 
              our extensive executive assistant background and specialized services. Updated daily for 
              current service information. Professional consultation: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


