import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Building } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Enid, OK | Garfield County | Vance AFB Service',
  description: 'Licensed process server in Enid, Oklahoma. Serving Garfield County District Court, Vance Air Force Base, Integris Bass, St. Mary\'s, and all Enid neighborhoods. Same-day service available. (539) 367-6832.',
  keywords: 'process server Enid OK, Garfield County process server, Vance AFB process service, serve papers Enid Oklahoma, Enid subpoena service, legal document service Enid, licensed process server Enid',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Process Server Enid, OK | Garfield County | Vance AFB Service',
    description: 'Licensed process server in Enid, Oklahoma. Garfield County filings, Vance AFB coordination, hospital campuses, and rural Garfield County addresses.',
    url: 'https://justlegalsolutions.org/service-areas/enid',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/enid',
  },
};

const enidFAQs = [
  {
    question: 'How do you handle service at Vance Air Force Base?',
    answer: 'For most cases, we serve Vance AFB personnel at their off-base residence in Enid — neighborhoods like Wheatridge and Chestnut have a high concentration of military families. This avoids the security delays and access restrictions of on-base service. If your court order specifically requires on-base service, we coordinate with the Vance AFB Security Forces Squadron to arrange escorted access, which can add 2–5 business days.',
  },
  {
    question: 'What is the best way to serve someone at Integris Bass or St. Mary\'s?',
    answer: 'Both hospitals have HR departments that handle legal mail and workplace service during standard business hours (M–F 8 AM–5 PM). Integris Bass Baptist Health Center (600 S Monroe St) and St. Mary\'s Regional Medical Center (305 S 5th St) have security desks at their main entrances. If the recipient is a patient rather than an employee, we consult with your attorney on HIPAA-compliant service protocols.',
  },
  {
    question: 'Does the Tyson/AdvancePierre plant operate on shifts?',
    answer: 'Yes. The AdvancePierre (Tyson Foods) facility runs multiple production shifts. We time workplace service attempts to coincide with shift changes or supervisor handoffs. If the recipient is not available at the plant, we immediately pivot to their home address in south or west Enid.',
  },
  {
    question: 'Which courthouse handles Enid cases?',
    answer: 'All Enid and Garfield County district-court cases file at the Garfield County Courthouse (100 W Broadway Ave, Enid, OK 73701). The Enid Municipal Court at 401 W Owen K Garriott Rd handles city ordinance violations only. We verify the correct venue for every serve.',
  },
  {
    question: 'Is same-day service available in Enid?',
    answer: 'Yes. Enid is a core service zone for Just Legal Solutions. Same-day service is available seven days a week, subject to order volume and cutoff times. Rush service guarantees next-business-day attempt. Call (539) 367-6832 to confirm current availability.',
  },
];

const enidEmployers = [
  { name: 'Vance Air Force Base', address: 'Enid, OK 73705', industry: 'Military', notes: '1,500+ personnel; off-base service preferred; on-base via Security Forces' },
  { name: 'Integris Bass Baptist Health Center', address: '600 S Monroe St, Enid, OK 73701', industry: 'Healthcare', notes: '1,000+ employees; HR M–F 8 AM–5 PM' },
  { name: 'St. Mary\'s Regional Medical Center', address: '305 S 5th St, Enid, OK 73701', industry: 'Healthcare', notes: '800+ employees; legal mail via HR; security desk at entry' },
  { name: 'AdvancePierre Foods (Tyson)', address: 'Enid, OK 73701', industry: 'Food Processing', notes: '700+ employees; multi-shift; best served at shift change' },
  { name: 'Enid Public Schools', address: '500 S Independence, Enid, OK 73701', industry: 'Education', notes: '3,200+ students; admin at district office' },
  { name: 'Northern Oklahoma College – Enid', address: '100 S University Ave, Enid, OK 73701', industry: 'Higher Education', notes: '2,000+ students; HR handles faculty/staff service' },
  { name: 'City of Enid', address: '401 W Owen K Garriott Rd, Enid, OK 73701', industry: 'Government', notes: 'Municipal complex; city clerk available weekdays' },
  { name: 'Walmart Supercenter', address: '5505 W Owen K Garriott Rd, Enid, OK 73703', industry: 'Retail', notes: '200+ employees; management office inside' },
];

export default function EnidProcessServerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <nav className="text-sm mb-6 text-blue-200" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Enid</span>
          </nav>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            Licensed — PSL-2026-2
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Process Server<br className="hidden md:block" /> Enid, OK
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            The economic engine of northwest Oklahoma. We serve Garfield County papers, Vance AFB personnel, Integris Bass, St. Mary&apos;s hospital campuses, and all of Enid — from the downtown courthouse corridor to rural farmland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5393676832" className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 px-8 rounded-xl text-center transition-all shadow-xl text-lg flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" /> Call (539) 367-6832
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-xl text-center transition-all flex items-center justify-center gap-2">
              <FileText className="h-5 w-5" /> Get a Free Quote
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-blue-200 text-sm">
            <span>✓ Standard Service</span>
            <span>✓ Rush Service</span>
            <span>✓ Same-Day Service</span>
            <span>✓ Vance AFB Coordination</span>
            <span>✓ Notarized Affidavit Included</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-12 space-y-10">

        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><Building className="h-6 w-6" /> Enid Courthouse &amp; Filing Information</h2>
            <p className="text-slate-300">Garfield County Courthouse — Enid, Oklahoma</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-2">Garfield County Courthouse</h3>
              <p className="text-gray-700 text-sm leading-relaxed">100 W Broadway Ave<br />Enid, OK 73701<br />(580) 237-0236</p>
              <p className="text-gray-600 text-sm mt-2">All civil, family law, felony, probate, and protective order cases file here. We verify case numbers and judge assignments before every serve.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Enid Municipal Court</h3>
              <p className="text-gray-700 text-sm leading-relaxed">401 W Owen K Garriott Rd<br />Enid, OK 73701<br />(580) 616-7370</p>
              <p className="text-gray-600 text-sm mt-2">City ordinance violations only. All district-court matters go to Garfield County Courthouse on Broadway.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Where We Serve Papers in Enid</h2>
            <p className="text-indigo-100">Six service zones from downtown to rural Garfield County</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Downtown Enid &amp; Broadway Corridor</h3>
              <p className="text-gray-700 text-sm">The city center along <strong>Broadway Avenue</strong> includes the Garfield County Courthouse, <strong>Leonardo&apos;s Children&apos;s Museum</strong> (200 E Maple Ave), <strong>Cherokee Strip Regional Heritage Center</strong> (507 S 4th St), and government offices. Older homes here often have rear entrances and multi-unit configurations — we scout on foot.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">East Enid &amp; Vance AFB Area</h3>
              <p className="text-gray-700 text-sm"><strong>Vance Air Force Base</strong> is one of the busiest pilot-training installations in the U.S. Military families dominate neighborhoods like <strong>Wheatridge</strong> and <strong>Chestnut</strong>. On-base service requires Security Forces coordination — in most cases, we serve at the off-base residence for speed.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">West Enid &amp; Family Subdivisions</h3>
              <p className="text-gray-700 text-sm">Newer residential subdivisions with clear addressing, popular with Vance AFB families and healthcare workers from Integris Bass and St. Mary&apos;s. We attempt service during early morning and evening to catch residents before/after commutes.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">North Enid — Owen K Garriott Retail Corridor</h3>
              <p className="text-gray-700 text-sm">Enid&apos;s primary commercial artery along <strong>Owen K Garriott Road</strong> and <strong>Van Buren Street</strong>. Major retailers, restaurants, and big-box stores line this stretch. Workplace service during business hours or shift changes is highly effective here.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">South Enid &amp; Industrial Zone</h3>
              <p className="text-gray-700 text-sm">Light industrial, warehouses, and the AdvancePierre/Tyson processing facility. Multi-shift operations here require flex timing. We track shift schedules and attempt service across morning, afternoon, and evening windows.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Rural Garfield County</h3>
              <p className="text-gray-700 text-sm">Communities including <strong>Waukomis</strong>, <strong>Drummond</strong>, and <strong>Lahoma</strong>. Long driveways, minimal signage, and seasonal occupancy are common. We verify residency through Garfield County assessor records and utility data before attempting service.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Major Employers &amp; Workplace Service in Enid</h2>
            <p className="text-emerald-100">Vance AFB, Integris Bass, Tyson, and more</p>
          </div>
          <div className="p-8 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-800 font-semibold">
                <tr>
                  <th className="px-4 py-3 text-left">Employer</th>
                  <th className="px-4 py-3 text-left">Address</th>
                  <th className="px-4 py-3 text-left">Industry</th>
                  <th className="px-4 py-3 text-left">Service Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {enidEmployers.map((emp, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                    <td className="px-4 py-3 font-medium">{emp.name}</td>
                    <td className="px-4 py-3 text-gray-600">{emp.address}</td>
                    <td className="px-4 py-3 text-gray-600">{emp.industry}</td>
                    <td className="px-4 py-3 text-gray-600">{emp.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Enid Process Server FAQ</h2>
            <p className="text-teal-100">Common questions about process serving in Enid and Garfield County</p>
          </div>
          <div className="p-8 space-y-6">
            {enidFAQs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: {faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <AlertCircle className="h-14 w-14 mx-auto mb-5 text-red-200" />
            <h2 className="text-3xl font-bold mb-3">Need Emergency Process Service in Enid?</h2>
            <p className="text-xl mb-6 text-red-100">24/7 availability for urgent legal documents throughout Enid and Garfield County</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5393676832" className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" /> Emergency: (539) 367-6832
              </a>
              <Link href="/contact" className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" /> Schedule Service
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6" /> Enid Service Area Map</h2>
            <p className="text-blue-100">Garfield County process serving — all cities and rural routes</p>
          </div>
          <div className="p-8">
            <GoogleMapsEmbed countyName="Garfield County" cityName="Enid" state="Oklahoma" title="Enid Process Server Service Area" />
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Nearby Service Areas &amp; Resources</h2>
            <p className="text-purple-100">Northwest Oklahoma coverage</p>
          </div>
          <div className="p-8 grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">📍 Nearby Cities</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/service-areas/ponca-city" className="text-blue-600 hover:underline">Ponca City Process Server</Link></li>
                <li><Link href="/service-areas/stillwater" className="text-blue-600 hover:underline">Stillwater Process Server</Link></li>
                <li><Link href="/service-areas/guthrie" className="text-blue-600 hover:underline">Guthrie Process Server</Link></li>
                <li><Link href="/counties/garfield-county" className="text-blue-600 hover:underline">Garfield County Process Server</Link></li>
                <li><Link href="/counties/kay-county" className="text-blue-600 hover:underline">Kay County Process Server</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">📚 Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/oklahoma-process-server-faq" className="text-blue-600 hover:underline">Process Serving FAQ 2026</Link></li>
                <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">Oklahoma Process Server Laws</Link></li>
                <li><Link href="/pricing" className="text-blue-600 hover:underline">Pricing Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🏢 Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/law-firm-services" className="text-blue-600 hover:underline">Law Firm Services</Link></li>
                <li><Link href="/weekend-emergency" className="text-blue-600 hover:underline">Emergency Process Service</Link></li>
                <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Serve Papers in Enid?</h2>
            <p className="text-xl mb-6 text-blue-100">Military, medical, or main street — Enid is our territory.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5393676832" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" /> Call (539) 367-6832
              </a>
              <Link href="/contact" className="bg-blue-900 hover:bg-blue-950 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
                <FileText className="h-5 w-5" /> Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        <div className="text-center py-4">
          <Link href="/service-areas" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
            ← Browse All Oklahoma Service Areas
          </Link>
        </div>
      </div>

      <UnifiedSchema
        pageType="location"
        url="https://justlegalsolutions.org/service-areas/enid"
        title="Process Server Enid, OK | Garfield County | Vance AFB Service"
        description="Licensed process server in Enid, Oklahoma. Garfield County filings, Vance AFB coordination, Integris Bass, St. Mary Hospital, and rural Garfield County."
        faqItems={enidFAQs.slice(0, 4).map(f => ({ question: f.question, answer: f.answer }))}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Service Areas', item: 'https://justlegalsolutions.org/service-areas' },
          { name: 'Enid', item: 'https://justlegalsolutions.org/service-areas/enid' },
        ]}
      />
    </div>
  );
}