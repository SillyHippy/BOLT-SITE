import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is a Process Server? | Legal Document Delivery Guide | Just Legal Solutions',
  description: 'Complete guide to process servers: what they do, legal requirements, and why you need professional service. Expert process serving in Tulsa, Oklahoma. Call (539) 367-6832.',
  keywords: ['what is a process server', 'process serving explained', 'legal document delivery', 'process server definition', 'legal service of process'],
  robots: 'index, follow'
};

export default function WhatIsProcessServer() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' });
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          What is a Process Server? Complete Guide to Legal Document Delivery
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Educational Guide</strong> | Last Updated: {lastUpdated} | Expert Information from Tulsa Professionals
          </p>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Understanding Process Servers and Legal Document Delivery
          </h2>
          
          <p className="text-lg mb-6">
            A process server is a licensed professional who delivers legal documents to individuals involved 
            in court proceedings. This essential service ensures that all parties in a legal matter are 
            properly notified of court actions, lawsuits, or other legal proceedings as required by law.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              📋 Quick Definition
            </h3>
            <p className="text-green-700">
              <strong>Process Server:</strong> A certified individual authorized to deliver (serve) legal documents 
              to ensure proper notification in legal proceedings. They act as neutral third parties to verify 
              that due process requirements are met.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">What Do Process Servers Do?</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-800 mb-3">Primary Functions:</h4>
              <ul className="text-blue-700 space-y-2">
                <li>• Deliver legal documents to defendants</li>
                <li>• Serve court summons and complaints</li>
                <li>• Provide proof of service to courts</li>
                <li>• Ensure legal notification requirements are met</li>
                <li>• Document service attempts and methods</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h4 className="font-semibold text-purple-800 mb-3">Document Types:</h4>
              <ul className="text-purple-700 space-y-2">
                <li>• Divorce and family court papers</li>
                <li>• Civil lawsuit documents</li>
                <li>• Eviction notices</li>
                <li>• Subpoenas and witness summons</li>
                <li>• Restraining orders</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Why Are Process Servers Important?</h3>
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-yellow-800">Due Process Protection</h4>
              <p className="text-gray-700">Process servers ensure constitutional due process rights by guaranteeing proper notification of legal proceedings.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-800">Legal Compliance</h4>
              <p className="text-gray-700">Professional service ensures compliance with state and federal laws governing legal notification.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-green-800">Court Requirements</h4>
              <p className="text-gray-700">Courts require proof of proper service before proceedings can continue or default judgments can be entered.</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Process Server Qualifications in Oklahoma</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold mb-3">Requirements Include:</h4>
            <ul className="space-y-2">
              <li>• <strong>Age Requirement:</strong> Must be at least 18 years old</li>
              <li>• <strong>Legal Standing:</strong> Not a party to the legal case being served</li>
              <li>• <strong>Licensing:</strong> May require state or local licensing depending on jurisdiction</li>
              <li>• <strong>Bonding:</strong> Professional process servers are typically bonded and insured</li>
              <li>• <strong>Training:</strong> Knowledge of legal procedures and service requirements</li>
              <li>• <strong>Background Check:</strong> Clean criminal background required</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Types of Service Methods</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Personal Service:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Direct hand-delivery to the individual</li>
                <li>Most preferred method by courts</li>
                <li>Requires positive identification</li>
                <li>Immediate proof of delivery</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Substitute Service:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Service to household member</li>
                <li>Service at place of business</li>
                <li>Posted service (as last resort)</li>
                <li>Requires court approval in some cases</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">When Do You Need a Process Server?</h3>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-orange-800 mb-3">Common Situations:</h4>
            <ul className="text-orange-700 space-y-2">
              <li>• <strong>Starting a Lawsuit:</strong> Serving defendants with court papers</li>
              <li>• <strong>Divorce Proceedings:</strong> Notifying spouse of divorce action</li>
              <li>• <strong>Eviction Cases:</strong> Serving tenants with eviction notices</li>
              <li>• <strong>Debt Collection:</strong> Serving collection lawsuit papers</li>
              <li>• <strong>Subpoenas:</strong> Compelling witness testimony or document production</li>
              <li>• <strong>Restraining Orders:</strong> Emergency protective order service</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Professional vs. DIY Service</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Aspect</th>
                  <th className="border border-gray-300 p-3 text-left">Professional Service</th>
                  <th className="border border-gray-300 p-3 text-left">DIY Service</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Legal Knowledge</td>
                  <td className="border border-gray-300 p-3 text-green-700">Expert understanding of laws</td>
                  <td className="border border-gray-300 p-3 text-red-700">Limited legal knowledge</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Documentation</td>
                  <td className="border border-gray-300 p-3 text-green-700">Professional affidavits</td>
                  <td className="border border-gray-300 p-3 text-red-700">May lack proper documentation</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Success Rate</td>
                  <td className="border border-gray-300 p-3 text-green-700">High success rate</td>
                  <td className="border border-gray-300 p-3 text-red-700">Lower success rate</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Time Investment</td>
                  <td className="border border-gray-300 p-3 text-green-700">No time required from client</td>
                  <td className="border border-gray-300 p-3 text-red-700">Significant time investment</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Choosing the Right Process Server</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-blue-800 mb-3">Key Factors to Consider:</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• <strong>Licensing and Bonding:</strong> Verify proper credentials and insurance</li>
              <li>• <strong>Experience:</strong> Look for established professionals with proven track records</li>
              <li>• <strong>Local Knowledge:</strong> Choose servers familiar with your jurisdiction</li>
              <li>• <strong>Technology:</strong> GPS tracking and electronic documentation capabilities</li>
              <li>• <strong>Availability:</strong> Rush and same-day service options</li>
              <li>• <strong>Communication:</strong> Regular updates on service attempts and status</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Cost of Process Serving</h3>
          <p className="mb-4">
            Process serving costs vary based on several factors:
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-1">
            <li><strong>Document type</strong> and complexity</li>
            <li><strong>Service timeline</strong> (standard vs. rush)</li>
            <li><strong>Location</strong> and distance from server base</li>
            <li><strong>Difficulty of service</strong> (multiple attempts, evasive subjects)</li>
            <li><strong>Additional services</strong> (skip tracing, document filing)</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Professional Process Serving in Tulsa
            </h3>
            <p className="text-green-700 mb-3">
              Just Legal Solutions provides expert process serving throughout Oklahoma with licensed, 
              bonded professionals who understand the critical importance of proper legal notification.
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
                <p className="text-green-700">📧 info@justlegalsolutions.org</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="/services" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg inline-block">
                  Our Services
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>Educational Resource:</strong> This guide to process servers updates regularly with current 
              legal information and industry best practices. For expert service in Oklahoma: (539) 367-6832.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


