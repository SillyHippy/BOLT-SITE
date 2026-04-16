import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, DollarSign, Shield, Building, CheckCircle, AlertCircle, Calendar, Clock, Mail } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Oklahoma Registered Agent Service | Just Legal Solutions',
  description: 'Professional registered agent services in Oklahoma. Never miss legal documents or state notices. Same-day notification, compliance monitoring. $99/year.',
  keywords: 'registered agent Oklahoma, OK registered agent service, statutory agent Oklahoma, business compliance Oklahoma, service of process Oklahoma',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Oklahoma Registered Agent Service | Just Legal Solutions',
    description: 'Professional registered agent services in Oklahoma. Never miss legal documents or state notices. Same-day notification, compliance monitoring. $99/year.',
    url: 'https://justlegalsolutions.org/registered-agent',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/registered-agent',
  },
};

const pageFAQs: { question: string; answer: string }[] = [
  {
    question: 'Can I be my own registered agent in Oklahoma?',
    answer: 'Yes, you can serve as your own registered agent if you meet the requirements: you must have a physical address in Oklahoma (not a P.O. box), be at least 18 years old, and be available during regular business hours. However, many business owners prefer professional services for privacy, reliability, and convenience.'
  },
  {
    question: 'What happens if I don\'t have a registered agent?',
    answer: 'If your business fails to maintain a registered agent, the Oklahoma Secretary of State may administratively dissolve your company. You could lose your authority to do business in Oklahoma, and you may be unable to sue or defend yourself in court.'
  },
  {
    question: 'How much does it cost to change registered agents in Oklahoma?',
    answer: 'The state filing fee is $25 for domestic entities (LLCs and corporations) when filed by mail, or $35 when filed online. Foreign entities pay $50. These fees are in addition to any registered agent service fees.'
  },
  {
    question: 'How long does it take to change registered agents?',
    answer: 'Online filings are typically processed within 1-2 business days. Mail filings take 7-10 business days. In-person filings take 3-5 business days.'
  },
  {
    question: 'Is a registered agent the same as an owner?',
    answer: 'No. A registered agent is not automatically an owner of the business. These are separate roles, though the same person can serve in both capacities.'
  },
  {
    question: 'What types of documents will my registered agent receive?',
    answer: 'Your registered agent may receive: service of process (lawsuits), subpoenas, tax notices, annual report reminders, Secretary of State correspondence, wage garnishment notices, and other official government documents.'
  }
];

export default function RegisteredAgentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <nav className="text-sm mb-6 text-blue-200" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Registered Agent Service</span>
          </nav>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            Licensed & Bonded
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Oklahoma Registered Agent<br className="hidden md:block" /> Services
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            Professional registered agent services for Oklahoma businesses. Never miss critical legal documents, state notices, or service of process. Same-day notification system keeps your business compliant and protected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5393676832" className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 px-8 rounded-xl text-center transition-all shadow-xl text-lg flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" /> Call (539) 367-6832
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-xl text-center transition-all flex items-center justify-center gap-2">
              <FileText className="h-5 w-5" /> Get Started
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-blue-200 text-sm">
            <span>✓ $99/year flat rate</span>
            <span>✓ Same-day notifications</span>
            <span>✓ Secure online portal</span>
            <span>✓ Compliance monitoring</span>
            <span>✓ Annual report reminders</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-12 space-y-10">
        
        {/* What Is a Registered Agent */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
            <h2 className="text-2xl font-bold mb-1">What Is a Registered Agent?</h2>
            <p className="text-slate-300">Understanding your legal requirement</p>
          </div>
          <div className="p-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              A <strong>registered agent</strong> (also called a statutory agent or resident agent) is a person or business entity designated to receive official legal documents and government correspondence on behalf of your business. Every formal business entity operating in Oklahoma is required by law to maintain a registered agent.
            </p>
            
            <h3 className="font-bold text-lg text-gray-900 mt-6">What Does a Registered Agent Do?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Accepting Service of Process:</strong> Receiving lawsuits, subpoenas, and other legal documents when your business is involved in litigation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Receiving State Correspondence:</strong> Accepting official notices from the Oklahoma Secretary of State, including annual report reminders and compliance notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Handling Tax Documents:</strong> Receiving tax forms and notices from the Oklahoma Tax Commission</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Maintaining Business Hours Presence:</strong> Being available at a physical Oklahoma address during regular business hours to receive documents in person</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Oklahoma Statutory Requirements */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
            <h2 className="text-2xl font-bold mb-1">Oklahoma Statutory Requirements</h2>
            <p className="text-blue-100">Legal requirements governed by Title 18, Sections 1022 & 2010</p>
          </div>
          <div className="p-8 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-3">Physical Address Requirement</h3>
              <p className="text-gray-700">Must maintain a physical street address in Oklahoma (P.O. boxes are NOT acceptable). The registered office must be open during regular business hours to accept service of process.</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-3">Availability Requirement</h3>
              <p className="text-gray-700">Must be available Monday through Friday during normal business hours (typically 9 AM - 5 PM). Must be present to accept documents in person when served.</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-3">Qualification Requirements</h3>
              <p className="text-gray-700 mb-2">The registered agent can be:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>An individual Oklahoma resident who is at least 18 years old</li>
                <li>A domestic or foreign corporation authorized to do business in Oklahoma</li>
                <li>A limited liability company (LLC) authorized to do business in Oklahoma</li>
                <li>A general or limited partnership, including limited liability partnerships</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Your Business Needs a Registered Agent */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Why Your Business Needs a Registered Agent</h2>
            <p className="text-emerald-100">More than just a legal requirement</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <Shield className="h-8 w-8 text-emerald-600 mb-3" />
              <h3 className="font-bold text-emerald-900 mb-2">Legal Compliance</h3>
              <p className="text-gray-700 text-sm">Oklahoma law requires every LLC, corporation, limited partnership, and nonprofit corporation to designate and continuously maintain a registered agent. Failure to do so can result in administrative dissolution, loss of good standing, and inability to file lawsuits.</p>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <Building className="h-8 w-8 text-emerald-600 mb-3" />
              <h3 className="font-bold text-emerald-900 mb-2">Privacy Protection</h3>
              <p className="text-gray-700 text-sm">When you serve as your own registered agent, your name and home address become part of the public record. Using a professional service keeps your personal address off public documents and prevents process servers from appearing at your home.</p>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <Clock className="h-8 w-8 text-emerald-600 mb-3" />
              <h3 className="font-bold text-emerald-900 mb-2">Business Continuity</h3>
              <p className="text-gray-700 text-sm">A professional registered agent ensures someone is always available during business hours, with no missed deliveries due to vacations, travel, or busy schedules. Continuity even if you relocate or change business locations.</p>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <Award className="h-8 w-8 text-emerald-600 mb-3" />
              <h3 className="font-bold text-emerald-900 mb-2">Professional Image</h3>
              <p className="text-gray-700 text-sm">Using a professional registered agent service demonstrates business stability and permanence, professional handling of legal matters, and a serious approach to compliance and legal obligations.</p>
            </div>
          </div>
        </section>

        {/* Notification Procedures */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-1">What Happens When We Receive Documents</h2>
            <p className="text-indigo-100">Our strict protocol ensures you never miss critical notices</p>
          </div>
          <div className="p-8 space-y-6">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-bold text-indigo-900 mb-2">Immediate Receipt and Processing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Physical receipt during business hours</li>
                <li>• Secure logging with date, time, and description</li>
                <li>• Document scanning to high-resolution digital format</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-bold text-indigo-900 mb-2">Same-Day Notification</h3>
              <p className="text-gray-700 mb-2">Within hours of receiving your documents, you will receive:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Email Alert:</strong> Immediate notification that documents have been received</li>
                <li>• <strong>Document Summary:</strong> Description of what was received and its apparent urgency</li>
                <li>• <strong>Secure Access Link:</strong> Portal access to view and download your documents</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-bold text-indigo-900 mb-2">Document Forwarding Options</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="font-semibold text-indigo-900">Digital Delivery (Standard)</p>
                  <p className="text-sm text-gray-700">Immediate access through secure online portal, unlimited downloads and storage</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="font-semibold text-indigo-900">Physical Mail (Optional)</p>
                  <p className="text-sm text-gray-700">Original documents forwarded via first-class mail, overnight delivery available</p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" /> Urgent Matter Protocol
              </h3>
              <p className="text-gray-700 text-sm">For time-sensitive legal documents (lawsuits, subpoenas, court orders): Immediate phone call notification in addition to email, marked as URGENT in your portal, expedited forwarding options available.</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><DollarSign className="h-6 w-6" /> Pricing</h2>
            <p className="text-blue-100">Simple, transparent pricing — no hidden fees</p>
          </div>
          <div className="p-8">
            <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 text-center mb-8">
              <p className="text-blue-900 font-semibold text-lg mb-2">Annual Registered Agent Service</p>
              <p className="text-5xl font-extrabold text-blue-900 mb-4">$99<span className="text-xl font-normal text-blue-700">/year</span></p>
              <div className="grid md:grid-cols-2 gap-4 text-left mt-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Oklahoma physical address</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Acceptance of service of process</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Same-day email notifications</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Secure online portal access</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Digital document delivery</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Annual report reminders</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Compliance monitoring alerts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Customer phone & email support</span>
                </div>
              </div>
            </div>
            
            <h3 className="font-bold text-lg text-gray-900 mb-4">Competitor Comparison</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100 text-gray-800 font-semibold">
                  <tr>
                    <th className="px-4 py-3 text-left">Service Provider</th>
                    <th className="px-4 py-3 text-left">Annual Cost</th>
                    <th className="px-4 py-3 text-left">Key Features</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="bg-blue-50">
                    <td className="px-4 py-3 font-bold text-blue-900">Just Legal Solutions</td>
                    <td className="px-4 py-3 font-bold text-blue-900">$99</td>
                    <td className="px-4 py-3 text-gray-700">Local Oklahoma presence, same-day notification, full compliance support</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Oklahoma Registered Agent LLC</td>
                    <td className="px-4 py-3">$49</td>
                    <td className="px-4 py-3 text-gray-600">Basic service, online account access</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Registered Agents Inc.</td>
                    <td className="px-4 py-3">$200</td>
                    <td className="px-4 py-3 text-gray-600">Premium service, compliance tools</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">LegalZoom</td>
                    <td className="px-4 py-3">$249</td>
                    <td className="px-4 py-3 text-gray-600">National brand, credit monitoring included</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Northwest Registered Agent</td>
                    <td className="px-4 py-3">$125</td>
                    <td className="px-4 py-3 text-gray-600">Address privacy, 20+ years experience</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Who Needs a Registered Agent */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Who Needs a Registered Agent in Oklahoma</h2>
            <p className="text-purple-100">All formal business entities must maintain a registered agent</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h3 className="font-bold text-purple-900 mb-2">Oklahoma LLCs</h3>
              <p className="text-gray-700 text-sm">Every limited liability company formed in Oklahoma must designate a registered agent, including single-member LLCs, multi-member LLCs, series LLCs, and professional LLCs (PLLCs).</p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h3 className="font-bold text-purple-900 mb-2">Oklahoma Corporations</h3>
              <p className="text-gray-700 text-sm">Both C-corporations and S-corporations must maintain registered agents, including for-profit corporations, non-profit corporations, professional corporations, and close corporations.</p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 md:col-span-2">
              <h3 className="font-bold text-purple-900 mb-2">Out-of-State Entities (Foreign Qualification)</h3>
              <p className="text-gray-700 mb-3">If your business was formed in another state but operates in Oklahoma, you must register as a <strong>foreign entity</strong> with the Oklahoma Secretary of State and maintain an Oklahoma registered agent.</p>
              <p className="text-gray-700 text-sm">Common scenarios: Texas LLC doing business in Oklahoma, California corporation with Oklahoma customers, Delaware company with Oklahoma operations, online businesses selling to Oklahoma residents.</p>
            </div>
          </div>
        </section>

        {/* How to Change */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <h2 className="text-2xl font-bold mb-1">How to Change Your Registered Agent to Us</h2>
            <p className="text-teal-100">Simple three-step process</p>
          </div>
          <div className="p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Sign Up for Our Service</h3>
                <p className="text-gray-700">Contact us to establish your registered agent account. Provide your business name and current registered agent information. Pay the annual service fee.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">We File the Change Form</h3>
                <p className="text-gray-700 mb-2">We prepare and file the <strong>Change or Designation of Registered Agent</strong> form with the Oklahoma Secretary of State:</p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Domestic LLCs and Corporations: $25 (mail) or $35 (online)</li>
                  <li>• Foreign Entities: $50</li>
                  <li>• Processing time: 3-5 business days</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Confirmation and Transition</h3>
                <p className="text-gray-700">Once the change is processed, you receive confirmation from the Secretary of State, your new registered agent information appears on public records, and we begin accepting documents on your behalf immediately.</p>
              </div>
            </div>
            
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
              <h3 className="font-bold text-teal-900 mb-2">Timeline</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Immediate:</strong> We begin preparing your change form</li>
                <li><strong>1-2 business days:</strong> Form filed with Oklahoma Secretary of State</li>
                <li><strong>3-5 business days:</strong> Change processed and confirmed</li>
                <li><strong>Ongoing:</strong> We serve as your registered agent</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {pageFAQs.length > 0 && (
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Frequently Asked Questions</h2>
            <p className="text-amber-100">Common questions about registered agent services</p>
          </div>
          <div className="p-8 space-y-6">
            {pageFAQs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: {faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
        )}

        {/* Emergency CTA */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl shadow-lg">
          <div className="p-8 text-center">
            <AlertCircle className="h-14 w-14 mx-auto mb-5 text-red-200" />
            <h2 className="text-3xl font-bold mb-3">Ready to Protect Your Business?</h2>
            <p className="text-xl mb-6 text-red-100">Ensure compliance with Oklahoma law. Never miss critical legal documents.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5393676832" className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" /> Call (539) 367-6832
              </a>
              <Link href="/contact" className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" /> Get Started Today
              </Link>
            </div>
          </div>
        </section>

        <div className="text-center py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <UnifiedSchema
        pageType="service"
        image="https://justlegalsolutions.org/images/jls-logo.webp"
        url="https://justlegalsolutions.org/registered-agent"
        title="Oklahoma Registered Agent Service | Just Legal Solutions"
        description="Professional registered agent services in Oklahoma. Never miss legal documents or state notices. Same-day notification, compliance monitoring. $99/year."
        faqItems={pageFAQs.slice(0, 4)}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Registered Agent Service', item: 'https://justlegalsolutions.org/registered-agent' },
        ]}
      />
    </div>
  );
}
