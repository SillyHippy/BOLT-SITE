import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Building } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Norman, OK | Cleveland County | OU Campus Service',
  description: 'Licensed process server in Norman, Oklahoma. Serving Cleveland County District Court, University of Oklahoma, NOAA, Norman Regional Hospital, and all Norman neighborhoods. Same-day service available. (539) 367-6832.',
  keywords: 'process server Norman OK, serve papers Norman Oklahoma, Cleveland County process server, OU campus process service, Norman subpoena service, legal document service Norman, University of Oklahoma process server',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-032-service-areas-card.webp',
      width: 1200,
      height: 630,
      alt: 'Oklahoma process server service area — local legal document delivery',
    }],
    title: 'Process Server Norman, OK | Cleveland County | OU Campus Service',
    description: 'Licensed process server in Norman, Oklahoma. Cleveland County courthouse filings, OU campus, Norman Regional Hospital, and every Norman neighborhood.',
    url: 'https://justlegalsolutions.org/service-areas/norman',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Norman, OK | Cleveland County | OU Campus Service',
    description: 'Licensed process server in Norman, Oklahoma. Serving Cleveland County District Court, University of Oklahoma, NOAA, Norman Regional Hospital, and all Norman neighborhoods. Same-day service available. (539) 367-6832.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-032-service-areas-card.webp'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/norman',
  },
};

const normanFAQs = [
  {
    question: 'Which courthouse handles Norman cases?',
    answer: 'Most Norman addresses file at Cleveland County District Court (200 South Peters Avenue, Norman, OK 73069). This is one of the busiest courthouses in the state outside Tulsa and Oklahoma Counties. Our servers are in this building multiple times per week. Some northern Norman addresses near Moore may involve Moore Municipal Court or, in rare cases, Oklahoma County — we verify the correct venue before every serve.',
  },
  {
    question: 'Can you serve papers on the University of Oklahoma campus?',
    answer: 'Yes. OU campus service (660 Parrington Oval) includes dormitories, administrative offices, and academic buildings. We coordinate with OU building security for restricted areas like NOAA (120 David L. Boren Blvd) and serve at public entry points where direct access is limited. We time attempts around the academic calendar — spring move-out (mid-May) and fall move-out (mid-December) create significant address turnover.',
  },
  {
    question: 'Do you understand the OU academic calendar for service timing?',
    answer: 'Absolutely. Campus Corner and University Avenue apartments see the highest turnover in May and December. We verify current occupancy through apartment office records, USPS forwarding data, and Oklahoma voter-registration records before every attempt in high-turnover campus zones.',
  },
  {
    question: 'Can you serve at Norman Regional Hospital or the HealthPlex?',
    answer: 'Yes. We serve both the Porter Avenue campus (901 N Porter Ave) and the HealthPlex (3400 West Tecumseh Road). Medical facility service is handled discreetly through HR offices or at employee residences — never interrupting patient care. HR hours are typically M–F 8 AM–5 PM.',
  },
  {
    question: 'Is same-day service available in Norman?',
    answer: 'Yes. Norman is one of our most frequently served cities. Same-day and rush service are available throughout all Norman ZIP codes. Order before 1 PM for best same-day completion odds.',
  },
];

const normanEmployers = [
  { name: 'University of Oklahoma', address: '660 Parrington Oval, Norman, OK 73019', industry: 'Higher Education', notes: '29,000+ students; 11,000+ employees; HR at Evans Hall' },
  { name: 'Norman Regional Health System', address: '901 N Porter Ave & 3400 W Tecumseh Rd', industry: 'Healthcare', notes: '2,500+ employees; two main campuses; HR M–F 8 AM–5 PM' },
  { name: 'NOAA National Severe Weather Lab', address: '120 David L. Boren Blvd, Norman, OK 72072', industry: 'Government/Research', notes: '600+ employees; secure facility; serve at entry point' },
  { name: 'City of Norman', address: '201 W Gray Street, Norman, OK 73069', industry: 'Government', notes: 'Municipal complex; city clerk available weekdays' },
  { name: 'Norman Public Schools', address: '131 S Flood Avenue, Norman, OK 73069', industry: 'Education', notes: '16,000+ students; admin at district office' },
  { name: 'Moore Norman Technology Center', address: '4701 12th Avenue NW, Norman, OK 73069', industry: 'Vocational Education', notes: '1,000+ students; admin office handles service' },
  { name: 'Tinker Federal Credit Union', address: 'Various Norman locations', industry: 'Financial', notes: 'Corporate offices in north Norman; branch managers can receive' },
  { name: 'Walmart / Target / Lowe\'s', address: 'I-35 & Highway 9 corridor', industry: 'Retail', notes: '150–250 employees each; management office handles service' },
];

export default function NormanProcessServerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <nav className="text-sm mb-6 text-blue-200" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Norman</span>
          </nav>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            Licensed Professional
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Process Server<br className="hidden md:block" /> Norman, OK
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            Oklahoma&apos;s third-largest city and home to the University of Oklahoma. We serve Cleveland County papers, OU campus housing, NOAA, Norman Regional Hospital, and every neighborhood from Campus Corner to East Norman — with court-ready affidavits every time.
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
            <span>✓ OU Academic Calendar Aware</span>
            <span>✓ Notarized Affidavit Included</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-12 space-y-10">

        {/* Courthouse */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><Building className="h-6 w-6" /> Norman Courthouse &amp; Filing Information</h2>
            <p className="text-slate-300">Cleveland County District Court — one of Oklahoma&apos;s busiest courthouses</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-2">Cleveland County District Court</h3>
              <p className="text-gray-700 text-sm leading-relaxed">200 South Peters Avenue<br />Norman, OK 73069<br />(405) 321-6402 | M–F 8 AM–4:30 PM</p>
              <p className="text-gray-600 text-sm mt-2">Returns of service accepted until 4:00 PM. Filing lines longest Monday mornings and Friday afternoons. Visitor parking on south side and along Peters Avenue.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Norman Municipal Court</h3>
              <p className="text-gray-700 text-sm leading-relaxed">201 West Gray Street<br />Norman, OK 73069<br />(405) 366-5267 | M–F 8 AM–5 PM</p>
              <p className="text-gray-600 text-sm mt-2">City ordinance violations only. All civil, family, and felony cases go to Cleveland County District Court.</p>
            </div>
          </div>
        </section>

        {/* Where We Serve */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Where We Serve Papers in Norman</h2>
            <p className="text-indigo-100">From Campus Corner to rural Cleveland County</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Campus Corner &amp; University Area (73072)</h3>
              <p className="text-gray-700 text-sm">Dense student housing south of Lindsey Street and east of Jenkins Avenue. <strong>Oklahoma Memorial Stadium</strong>, <strong>Lloyd Noble Center</strong>, and <strong>OU Health Sciences Center</strong> anchor this zone. Apartment complexes — The Ivy, The Edge, Campus Lodge, Westbrook — have high semester turnover. We track the academic calendar for best service timing.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Downtown Norman &amp; Miller Historic District (73069)</h3>
              <p className="text-gray-700 text-sm">North of Main Street and east of Classen Boulevard. Historic homes, law offices, the <strong>Norman Public Library Central</strong> (103 W Acres St), <strong>Fred Jones Jr. Museum of Art</strong>, and <strong>Sooner Theatre</strong>. These are stable, owner-occupied addresses with easy daytime access.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">East Norman — Twin Creek &amp; Windstone (73026)</h3>
              <p className="text-gray-700 text-sm">Rapidly developing east of I-35: newer subdivisions including <strong>Twin Creek Village</strong>, <strong>Windstone</strong>, and <strong>Tuscany</strong>. Clear addressing and standard suburban layouts. <strong>Norman Regional Hospital Porter Campus</strong> (2015 W Porter Ave) serves this side of town.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">West Norman — Highway 9 &amp; I-35 Corridor</h3>
              <p className="text-gray-700 text-sm">Dominated by medical offices, retail, and the <strong>Norman Regional HealthPlex</strong> (3400 W Tecumseh Road). Residential neighborhoods west of I-35 include <strong>Briarwood Estates</strong> and <strong>Cedar Lane</strong>. Workplace service is highly effective along this corridor during business hours.</p>
            </div>
          </div>
        </section>

        {/* Employers */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Major Employers &amp; Workplace Service in Norman</h2>
            <p className="text-emerald-100">OU, Norman Regional, NOAA, and 8 other major employers</p>
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
                {normanEmployers.map((emp, i) => (
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

        {/* Pricing */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><DollarSign className="h-6 w-6" /> Service Pricing for Norman</h2>
            <p className="text-blue-100">No mileage fees for any Norman or Cleveland County address</p>
          </div>
          <div className="p-8 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-800 font-semibold">
                <tr>
                  <th className="px-4 py-3 text-left">Service Level</th>
                  <th className="px-4 py-3 text-left">Turnaround</th>
                  <th className="px-4 py-3 text-left">Price</th>
                  <th className="px-4 py-3 text-left">Includes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr><td className="px-4 py-3 font-semibold">Standard Service</td><td className="px-4 py-3">2–3 business days</td><td className="px-4 py-3 font-bold text-blue-700">See Pricing</td><td className="px-4 py-3">3 attempts, GPS affidavit, photo documentation</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-semibold">Rush Service</td><td className="px-4 py-3">Next business day</td><td className="px-4 py-3 font-bold text-blue-700">See Pricing</td><td className="px-4 py-3">Priority scheduling, same features</td></tr>
                <tr><td className="px-4 py-3 font-semibold">Same-Day Service</td><td className="px-4 py-3">Within 24 hours</td><td className="px-4 py-3 font-bold text-blue-700">See Pricing</td><td className="px-4 py-3">Order before 1 PM; immediate deployment</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-semibold">Skip Tracing</td><td className="px-4 py-3">Case-by-case</td><td className="px-4 py-3 font-bold text-blue-700">See Pricing</td><td className="px-4 py-3">Essential for Campus Corner student turnover</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Norman Process Server FAQ</h2>
            <p className="text-teal-100">Answers to common questions about serving in Norman</p>
          </div>
          <div className="p-8 space-y-6">
            {normanFAQs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Q: {faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <AlertCircle className="h-14 w-14 mx-auto mb-5 text-red-200" />
            <h2 className="text-3xl font-bold mb-3">Need Emergency Process Service in Norman?</h2>
            <p className="text-xl mb-6 text-red-100">Available 24/7 for urgent legal document service in Norman and Cleveland County</p>
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

        {/* Map */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6" /> Norman Service Area Map</h2>
            <p className="text-blue-100">Serving all Norman neighborhoods and Cleveland County</p>
          </div>
          <div className="p-8">
            <GoogleMapsEmbed countyName="Cleveland County" cityName="Norman" state="Oklahoma" title="Norman Process Server Service Area" />
          </div>
        </section>

        {/* Internal Links */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Nearby Service Areas &amp; Resources</h2>
            <p className="text-purple-100">Explore nearby cities and legal guides</p>
          </div>
          <div className="p-8 grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">📍 Nearby Cities</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/service-areas/moore" className="text-blue-600 hover:underline">Moore Process Server</Link></li>
                <li><Link href="/service-areas/edmond" className="text-blue-600 hover:underline">Edmond Process Server</Link></li>
                <li><Link href="/service-areas/midwest-city" className="text-blue-600 hover:underline">Midwest City Process Server</Link></li>
                <li><Link href="/service-areas/shawnee" className="text-blue-600 hover:underline">Shawnee Process Server</Link></li>
                <li><Link href="/counties/cleveland-county" className="text-blue-600 hover:underline">Cleveland County Process Server</Link></li>
                <li><Link href="/counties/oklahoma-county" className="text-blue-600 hover:underline">Oklahoma County Process Server</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">📚 Helpful Guides</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/oklahoma-process-server-faq" className="text-blue-600 hover:underline">Process Serving FAQ 2026</Link></li>
                <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">Oklahoma Process Server Laws</Link></li>
                <li><Link href="/pricing" className="text-blue-600 hover:underline">Pricing Guide</Link></li>
                <li><Link href="/ai-skip-tracing-guide-oklahoma" className="text-blue-600 hover:underline">Skip Tracing Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🏢 Our Services</h3>
              <ul className="space-y-2 text-sm">
                  <li><Link href="/law-firm-services" className="text-blue-600 hover:underline">Law Firm Services</Link></li>
                  <li><Link href="/courier-services" className="text-blue-600 hover:underline">Legal Document Courier</Link></li>
                  <li><Link href="/weekend-emergency" className="text-blue-600 hover:underline">Emergency Process Service</Link></li>
                <li><Link href="/about" className="text-blue-600 hover:underline">About Just Legal Solutions</Link></li>
                <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Serve Papers in Norman?</h2>
            <p className="text-xl mb-6 text-blue-100">From Boomer Sooner to Cleveland County District Court — we know Norman inside out.</p>
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
        url="https://justlegalsolutions.org/service-areas/norman"
        title="Process Server Norman, OK | Cleveland County | OU Campus Service"
        description="Licensed process server in Norman, Oklahoma. Cleveland County filings, OU campus, NOAA, Norman Regional Hospital. GPS-tracked service."
        faqItems={normanFAQs.slice(0, 4).map(f => ({ question: f.question, answer: f.answer }))}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Service Areas', item: 'https://justlegalsolutions.org/service-areas' },
          { name: 'Norman', item: 'https://justlegalsolutions.org/service-areas/norman' },
        ]}
      />
    </div>
  );
}