import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, DollarSign, Shield, Building, CheckCircle, AlertCircle, Calendar, Clock, MapPin, Users, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Jail & Prison Notary Services Oklahoma | Just Legal Solutions',
  description: 'Professional notary services for Oklahoma correctional facilities. Power of attorney, parental consent, real estate documents. DOC-compliant visits. Call (539) 367-6832.',
  keywords: 'jail notary Oklahoma, prison notary service, DOC notary Oklahoma, inmate notarization, correctional facility notary, power of attorney notary jail, Oklahoma Department of Corrections notary',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Jail & Prison Notary Services Oklahoma | Just Legal Solutions',
    description: 'Professional notary services for Oklahoma correctional facilities. Power of attorney, parental consent, real estate documents. DOC-compliant visits.',
    url: 'https://justlegalsolutions.org/jail-notary',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/jail-notary',
  },
};

const pageFAQs: { question: string; answer: string }[] = [
  {
    question: 'What documents can be notarized in jail or prison?',
    answer: 'We regularly notarize power of attorney documents, parental consent forms, affidavits and sworn statements, real estate documents, immigration forms, business and financial documents, loan applications, contracts, and more.'
  },
  {
    question: 'How long does it take to schedule a jail notary visit?',
    answer: 'Oklahoma DOC requires visitor applications to be submitted in advance, and approval can take up to 90 days. However, notary visits may qualify for expedited processing. County jails typically have faster scheduling. Contact us to discuss your timeline.'
  },
  {
    question: 'What identification does an inmate need for notarization?',
    answer: 'All inmates in Oklahoma state correctional facilities are issued official DOC identification cards containing their photo, name, DOC number, and physical description. This serves as valid government-issued ID for notarization purposes.'
  },
  {
    question: 'Can you visit any Oklahoma correctional facility?',
    answer: 'Yes, we serve all Oklahoma Department of Corrections facilities including Eddie Warrior Correctional Center, Mabel Bassett Correctional Center, Joseph Harp Correctional Center, Dick Conner Correctional Center, and all county jails including David L. Moss Criminal Justice Center in Tulsa.'
  },
  {
    question: 'What are the fees for jail notary services?',
    answer: 'Jail and prison notary services require specialized clearance, scheduling, and travel. Pricing varies by facility and document complexity. Standard notary fees are $5 per act under Oklahoma law, plus travel and service fees. Contact us for a quote.'
  }
];

const facilities = [
  { name: 'Eddie Warrior Correctional Center', location: 'Taft, OK', type: 'State Prison', security: 'Medium/Minimum' },
  { name: 'Mabel Bassett Correctional Center', location: 'McAlester, OK', type: 'State Prison', security: 'Medium' },
  { name: 'Joseph Harp Correctional Center', location: 'Tulsa, OK', type: 'State Prison', security: 'Medium' },
  { name: 'Dick Conner Correctional Center', location: 'Hominy, OK', type: 'State Prison', security: 'Medium' },
  { name: 'David L. Moss Criminal Justice Center', location: 'Tulsa, OK', type: 'County Jail', security: 'Various' },
  { name: 'Oklahoma County Detention Center', location: 'Oklahoma City, OK', type: 'County Jail', security: 'Various' },
];

export default function JailNotaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <nav className="text-sm mb-6 text-slate-300" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/notary" className="hover:text-white transition-colors">Notary</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Jail & Prison Notary</span>
          </nav>
          <div className="inline-block bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            DOC-Certified Notaries
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Jail & Prison Notary<br className="hidden md:block" /> Services Oklahoma
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl leading-relaxed">
            Professional mobile notary services for Oklahoma correctional facilities. Power of attorney, parental consent, real estate documents, and more. We navigate DOC procedures so you don't have to.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5393676832" className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-4 px-8 rounded-xl text-center transition-all shadow-xl text-lg flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" /> Call (539) 367-6832
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-xl text-center transition-all flex items-center justify-center gap-2">
              <FileText className="h-5 w-5" /> Schedule a Visit
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-slate-300 text-sm">
            <span>✓ All Oklahoma DOC facilities</span>
            <span>✓ County jails statewide</span>
            <span>✓ DOC-cleared notaries</span>
            <span>✓ Power of attorney specialists</span>
            <span>✓ Same-day emergency available</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-12 space-y-10">
        
        {/* What Is Jail Notary Service */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
            <h2 className="text-2xl font-bold mb-1">What Is Jail Notary Service?</h2>
            <p className="text-slate-300">Specialized notarization for incarcerated individuals</p>
          </div>
          <div className="p-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Jail and prison notary services involve a commissioned notary public traveling to correctional facilities to witness signatures and administer oaths for incarcerated individuals. Unlike standard mobile notarizations, facility-based notarizations require specialized knowledge of <strong>Department of Corrections (DOC) procedures</strong>, security protocols, and unique identification verification methods for inmates.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Just Legal Solutions, our notaries are experienced with Oklahoma's correctional system. We understand the specific requirements for both county jails and state prisons, ensuring your notarization is completed correctly the first time. From David L. Moss Criminal Justice Center in Tulsa to Eddie Warrior Correctional Center in Taft, we navigate the complex clearance and scheduling procedures so you don't have to worry about rejected documents or wasted trips.
            </p>
          </div>
        </section>

        {/* Documents We Notarize */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
            <h2 className="text-2xl font-bold mb-1">Documents We Notarize in Correctional Facilities</h2>
            <p className="text-blue-100">Comprehensive notary services for all legal needs</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <BookOpen className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">Power of Attorney</h3>
              <p className="text-gray-700 text-sm">Durable powers of attorney, financial powers of attorney, and limited powers of attorney. These allow inmates to designate trusted individuals to handle financial matters, pay bills, manage accounts, and make time-sensitive decisions.</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <Users className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">Parental Consent Forms</h3>
              <p className="text-gray-700 text-sm">Childcare decisions, school enrollment, medical treatment authorizations, and travel permissions. We regularly notarize custody-related affidavits, temporary guardianship forms, and parental permission documents for minors.</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <FileText className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">Affidavits & Sworn Statements</h3>
              <p className="text-gray-700 text-sm">Court filings, witness statements, financial affidavits, and various legal declarations requiring notarization for admissibility. Our notaries administer oaths and witness signatures for all types of sworn statements.</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <Building className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">Real Estate Documents</h3>
              <p className="text-gray-700 text-sm">Property transactions, quitclaim deeds, mortgage documents, forbearance agreements, and loan modifications. Time-sensitive real estate matters can't wait for release dates.</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">Immigration Forms</h3>
              <p className="text-gray-700 text-sm">Affidavits of support, visa-related documents, and immigration petitions requiring notarization for federal immigration proceedings.</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <DollarSign className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">Business & Financial Documents</h3>
              <p className="text-gray-700 text-sm">Loan applications, business formation documents, contracts, and financial agreements requiring the signature of an incarcerated party.</p>
            </div>
          </div>
        </section>

        {/* DOC Requirements */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Oklahoma DOC Requirements for Visiting Notaries</h2>
            <p className="text-emerald-100">Understanding the visitor application process</p>
          </div>
          <div className="p-8 space-y-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <h3 className="font-bold text-emerald-900 mb-3">Visitor Application Requirements</h3>
              <p className="text-gray-700 mb-3">All notaries visiting Oklahoma state prisons must complete the DOC Visitor Application Form. This process includes:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Background Check:</strong> A comprehensive background check is conducted for all visitors 18 and older. Approval can take up to 90 days, though notary visits may qualify for expedited processing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Photo Identification Submission:</strong> A copy of your valid government-issued photo ID must accompany the application.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Application Submission:</strong> Paper applications should be addressed to the Visitation Unit at the specific facility or mailed to Oklahoma Department of Corrections, Attn: Visitation Unit, P.O. Box 11400, Oklahoma City, OK 73136-0400.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <h3 className="font-bold text-emerald-900 mb-3">Notary Credentials Verification</h3>
              <p className="text-gray-700 mb-2">Notaries visiting Oklahoma correctional facilities must provide:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Valid Oklahoma notary commission certificate</li>
                <li>Current photo identification (driver's license or state ID)</li>
                <li>Notary seal and journal for inspection by facility staff</li>
                <li>Documentation of the specific notarization purpose</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm">Facility staff may inspect all notary materials, including seals, journals, and documents to be notarized, before allowing entry.</p>
            </div>
          </div>
        </section>

        {/* Scheduling Procedures */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Scheduling and Clearance Procedures</h2>
            <p className="text-indigo-100">Advance planning is essential</p>
          </div>
          <div className="p-8 space-y-6">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-bold text-indigo-900 mb-2">Advance Scheduling Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>All visits must be scheduled</strong> – no walk-ins are accepted at Oklahoma DOC facilities</li>
                <li>• <strong>Schedule requests must be received by Wednesday at 1 p.m.</strong> for weekend visits</li>
                <li>• No changes or additions are permitted after the Wednesday deadline unless authorized by facility administration</li>
                <li>• Notary visits typically occur during regular visitation hours or during designated special visit times</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-bold text-indigo-900 mb-2">Special Visit Classification</h3>
              <p className="text-gray-700 mb-2">Notary visits may qualify as "special visits" under Oklahoma DOC policy, which includes:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Professional service visits</li>
                <li>Attorney and legal support visits</li>
                <li>Clergy and ministerial visits</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm">Special visits are typically scheduled for Mondays and Thursdays, though this varies by facility.</p>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
              <h3 className="font-bold text-indigo-900 mb-2">County Jail Procedures</h3>
              <p className="text-gray-700">County facilities like David L. Moss Criminal Justice Center have different scheduling procedures than state prisons. Visitation must be scheduled in advance through the facility's scheduling system. Notary visits may require coordination with the facility's legal visitation department. Some county jails allow professional visits during extended hours compared to general public visitation.</p>
            </div>
          </div>
        </section>

        {/* Facilities We Serve */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6" /> Facilities We Serve</h2>
            <p className="text-purple-100">All Oklahoma correctional facilities</p>
          </div>
          <div className="p-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100 text-gray-800 font-semibold">
                  <tr>
                    <th className="px-4 py-3 text-left">Facility Name</th>
                    <th className="px-4 py-3 text-left">Location</th>
                    <th className="px-4 py-3 text-left">Type</th>
                    <th className="px-4 py-3 text-left">Security Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {facilities.map((facility, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                      <td className="px-4 py-3 font-medium">{facility.name}</td>
                      <td className="px-4 py-3 text-gray-600">{facility.location}</td>
                      <td className="px-4 py-3 text-gray-600">{facility.type}</td>
                      <td className="px-4 py-3 text-gray-600">{facility.security}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm mt-4">Plus all county jails throughout Oklahoma. Contact us for facilities not listed above.</p>
          </div>
        </section>

        {/* Inmate Identification */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Inmate Identification Requirements</h2>
            <p className="text-teal-100">Proper ID verification for incarcerated signers</p>
          </div>
          <div className="p-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Proper identification verification is a fundamental notary responsibility, and incarcerated signers present unique identification challenges that require specialized knowledge.
            </p>
            
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
              <h3 className="font-bold text-teal-900 mb-3">Oklahoma DOC Inmate ID Cards</h3>
              <p className="text-gray-700 mb-3">All inmates in Oklahoma state correctional facilities are issued official identification cards containing:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Inmate photograph</li>
                <li>Full legal name</li>
                <li>DOC identification number</li>
                <li>Date of birth</li>
                <li>Physical description (height, weight, eye color, hair color)</li>
                <li>Facility assignment</li>
              </ul>
              <p className="text-gray-700 mt-3">This DOC-issued ID card serves as valid government-issued identification for notarization purposes under Oklahoma notary law.</p>
            </div>
            
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
              <h3 className="font-bold text-teal-900 mb-3">County Jail Identification</h3>
              <p className="text-gray-700">County jails typically issue inmate ID bracelets or cards. Our notaries are trained to verify these identification methods and ensure proper documentation for each notarization.</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><DollarSign className="h-6 w-6" /> Pricing</h2>
            <p className="text-blue-100">Transparent pricing for specialized services</p>
          </div>
          <div className="p-8 space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-3">Standard Notary Fees</h3>
              <p className="text-gray-700 mb-3">Under Oklahoma law, the maximum fee for traditional notarial acts is <strong>$5 per signature/notarial act</strong>. For Remote Online Notarization (RON), the maximum fee is <strong>$25 per notarial act</strong>.</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 mb-3">Jail/Prison Service Fees</h3>
              <p className="text-gray-700 mb-3">Correctional facility notarizations require additional services beyond standard notary fees:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Travel Fee:</strong> Based on distance to facility</li>
                <li>• <strong>Wait Time:</strong> Facilities often have unpredictable schedules</li>
                <li>• <strong>Clearance Costs:</strong> Background check and application processing</li>
                <li>• <strong>Document Preparation:</strong> Ensuring all forms meet facility requirements</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" /> Get a Custom Quote
              </h3>
              <p className="text-gray-700 text-sm">Because jail and prison notary services vary significantly based on facility, location, document complexity, and urgency, we provide custom quotes for each request. Contact us at <strong>(539) 367-6832</strong> for pricing specific to your situation.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {pageFAQs.length > 0 && (
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Frequently Asked Questions</h2>
            <p className="text-amber-100">Common questions about jail notary services</p>
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
            <h2 className="text-3xl font-bold mb-3">Need a Notary for an Incarcerated Loved One?</h2>
            <p className="text-xl mb-6 text-red-100">Don't navigate DOC procedures alone. Our experienced notaries handle all the paperwork and scheduling.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5393676832" className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" /> Call (539) 367-6832
              </a>
              <Link href="/contact" className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" /> Schedule a Visit
              </Link>
            </div>
          </div>
        </section>

        <div className="text-center py-4">
          <Link href="/notary" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
            ← Back to Notary Services
          </Link>
        </div>
      </div>

      <UnifiedSchema
        pageType="service"
        image="https://justlegalsolutions.org/images/jls-logo.webp"
        url="https://justlegalsolutions.org/jail-notary"
        title="Jail & Prison Notary Services Oklahoma | Just Legal Solutions"
        description="Professional notary services for Oklahoma correctional facilities. Power of attorney, parental consent, real estate documents. DOC-compliant visits."
        faqItems={pageFAQs.slice(0, 4)}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Notary', item: 'https://justlegalsolutions.org/notary' },
          { name: 'Jail & Prison Notary', item: 'https://justlegalsolutions.org/jail-notary' },
        ]}
      />
    </div>
  );
}
