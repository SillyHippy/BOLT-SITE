import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Building } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Edmond, OK | Oklahoma County | Same-Day Service Available',
  description: 'Licensed process server in Edmond, Oklahoma. Serving UCO campus, Coffee Creek, Rose Creek, and all Edmond ZIP codes. Oklahoma County filings. Same-day service available. Call (539) 367-6832.',
  keywords: 'process server Edmond OK, serve papers Edmond Oklahoma, legal document service Edmond, Oklahoma County process server, UCO campus process service, Edmond subpoena service, licensed process server Edmond',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-032-service-areas-card.webp',
      width: 1200,
      height: 630,
      alt: 'Oklahoma process server service area — local legal document delivery',
    }],
    title: 'Process Server Edmond, OK | Oklahoma County | Same-Day Service Available',
    description: 'Licensed process server in Edmond, Oklahoma. UCO campus, gated communities, and all Edmond ZIP codes. Fast, GPS-tracked, court-ready.',
    url: 'https://justlegalsolutions.org/service-areas/edmond',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Edmond, OK | Oklahoma County | Same-Day Service Available',
    description: 'Licensed process server in Edmond, Oklahoma. Serving UCO campus, Coffee Creek, Rose Creek, and all Edmond ZIP codes. Oklahoma County filings. Same-day service available. Call (539) 367-6832.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-032-service-areas-card.webp'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/edmond',
  },
};

const edmondFAQs = [
  {
    question: 'Do Edmond cases file in Oklahoma County or a different courthouse?',
    answer: 'All Edmond addresses file in Oklahoma County at the Oklahoma County District Court (320 Robert S. Kerr Avenue, Oklahoma City, OK 73102). Edmond has its own Municipal Court at 101 East Campbell Road for city ordinance violations, but all civil, family law, and felony cases go to Oklahoma County District Court. We verify the correct venue for every serve.',
  },
  {
    question: 'Can you serve papers in gated Edmond communities like Coffee Creek or Rose Creek?',
    answer: 'Yes. We coordinate with HOA management offices for legal entry into gated Edmond neighborhoods including Coffee Creek, Oak Tree Country Club, Rose Creek, Falling Water, and Tuscany Villas. We can also serve defendants at their workplaces — UCO campus offices, Mercy Hospital, or any other known location outside the gate.',
  },
  {
    question: 'Do you serve the University of Central Oklahoma campus?',
    answer: 'Yes. UCO campus service (100 North University Drive) includes dormitories, administrative offices, and academic buildings. We time our attempts around class schedules and avoid peak exam periods. Student housing turnover is highest in May and August — we verify current occupancy before every attempt.',
  },
  {
    question: 'How do you handle rural addresses east of Edmond near Arcadia Lake?',
    answer: 'Rural Edmond east of I-35 often lacks visible house numbers from the road. We use GPS coordinates, Oklahoma County assessor data, and satellite imagery to pre-verify locations before driving out. These are Oklahoma County addresses even though they feel rural.',
  },
  {
    question: 'Is same-day service available in Edmond?',
    answer: 'Yes. Edmond is within our primary service area. We provide standard, rush, and same-day service throughout all Edmond ZIP codes — 73003, 73012, 73013, 73025, and 73034.',
  },
];

const edmondEmployers = [
  { name: 'University of Central Oklahoma', address: '100 N University Drive, Edmond, OK 73034', industry: 'Higher Education', notes: '13,000+ students; 1,500+ employees; HR at Admin Building' },
  { name: 'Mercy Hospital Edmond', address: '2017 W I-35 Frontage Road, Edmond, OK 73013', industry: 'Healthcare', notes: '1,000+ employees; HR open M–F 8 AM–5 PM' },
  { name: 'Edmond Public Schools', address: '1001 W Danforth Road, Edmond, OK 73003', industry: 'Education', notes: '23,000+ students; 2,500+ employees; admin at district office' },
  { name: 'Integris Health Edmond', address: '4801 Integris Parkway, Edmond, OK 73034', industry: 'Healthcare', notes: 'Medical offices and inpatient campus' },
  { name: 'Oklahoma Christian University', address: '2501 E Memorial Road, Edmond, OK 73013', industry: 'Education', notes: '2,000+ students; administration open weekdays' },
  { name: 'Life.Church (National HQ)', address: 'Various Edmond campuses', industry: 'Religious/Nonprofit', notes: 'National HQ in Edmond; 1,000+ staff; coordinate through main campus office' },
  { name: 'Pelco Products', address: '330 W 15th Street, Edmond, OK 73013', industry: 'Manufacturing', notes: '400+ employees; HR at front office' },
  { name: 'City of Edmond', address: '100 E First Street, Edmond, OK 73034', industry: 'Government', notes: 'Municipal complex; city clerk receives service' },
];

export default function EdmondProcessServerPage() {
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
            <span className="text-white font-medium">Edmond</span>
          </nav>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            Licensed Professional
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Process Server<br className="hidden md:block" /> Edmond, OK
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            Oklahoma&apos;s fifth-largest city and home to UCO. We serve all Edmond ZIP codes — gated communities, campus housing, medical offices, and rural Arcadia Lake addresses — with GPS-tracked, court-ready affidavits.
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
            <span className="flex items-center gap-1">✓ Standard Service</span>
            <span className="flex items-center gap-1">✓ Rush Service</span>
            <span className="flex items-center gap-1">✓ Same-Day Service</span>
            <span className="flex items-center gap-1">✓ GPS-tracked every attempt</span>
            <span className="flex items-center gap-1">✓ Notarized affidavit included</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-12 space-y-10">

        {/* Courthouse Info */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><Building className="h-6 w-6" /> Edmond Courthouse &amp; Filing Information</h2>
            <p className="text-slate-300">Edmond falls entirely within Oklahoma County</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-2">Oklahoma County District Court</h3>
              <p className="text-gray-700 text-sm leading-relaxed">320 Robert S. Kerr Avenue<br />Oklahoma City, OK 73102<br />(405) 713-1700 | M–F 8 AM–5 PM</p>
              <p className="text-gray-600 text-sm mt-2">Handles all civil, family, felony, and probate cases for Edmond addresses. Civil filing window on 3rd floor.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Edmond Municipal Court</h3>
              <p className="text-gray-700 text-sm leading-relaxed">101 E Campbell Road<br />Edmond, OK 73034<br />(405) 359-4491 | M–F 8 AM–5 PM</p>
              <p className="text-gray-600 text-sm mt-2">City ordinance violations only. Civil and family matters go to Oklahoma County District Court.</p>
            </div>
          </div>
        </section>

        {/* Where We Serve */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Where We Serve Papers in Edmond</h2>
            <p className="text-indigo-100">Local knowledge across every Edmond neighborhood</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Downtown Edmond / UCO Campus (73034)</h3>
              <p className="text-gray-700 text-sm">The heart of Edmond runs along Broadway from 2nd to 15th Street. <strong>University of Central Oklahoma</strong> (100 N University Drive) anchors the area with 13,000+ students. Historic homes near campus have high rental turnover — we verify occupancy before every attempt. Landmarks: Mitch Park, Edmond Public Library, Edmond Santa Fe High.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">West Edmond — Coffee Creek, Oak Tree, Rose Creek (73025)</h3>
              <p className="text-gray-700 text-sm">The most affluent corridor in the OKC metro. Gated communities including <strong>Coffee Creek</strong>, <strong>Oak Tree Country Club</strong>, <strong>Rose Creek</strong>, <strong>Falling Water</strong>, and <strong>Tuscany Villas</strong> require HOA coordination for legal entry. We pre-coordinate or serve defendants at ungated workplaces.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">North Edmond — Frontier City &amp; Boulevard Corridor (73034)</h3>
              <p className="text-gray-700 text-sm">North of Memorial Road and east of I-35: <strong>Frontier City</strong> (11501 N I-35 Service Road), Edmond North High School, and major retail along Danforth Road and Kelly Avenue. Newer uniform suburban street grids make residential service efficient here.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">South Edmond — Memorial Road &amp; I-35 (73013)</h3>
              <p className="text-gray-700 text-sm">Near the OKC boundary: <strong>Mercy Hospital Edmond</strong> (2017 W I-35 Frontage), Deer Creek district schools, and the Edmond YMCA. Significant medical office and commercial space sits alongside residential neighborhoods. HR-coordinated workplace service is effective here.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl md:col-span-2">
              <h3 className="font-semibold text-gray-900 mb-2">East Edmond — Arcadia Lake &amp; Rural Oklahoma County</h3>
              <p className="text-gray-700 text-sm">East of I-35 north of 15th Street: <strong>Arcadia Lake</strong> (9000 E 2nd Street) and surrounding acreage properties. Rural route addresses here often lack visible house numbers. We use GPS coordinates and Oklahoma County assessor records to pre-verify locations before every attempt — these are still Oklahoma County addresses that file in OKC.</p>
            </div>
          </div>
        </section>

        {/* Employers Table */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Major Employers &amp; Workplace Service in Edmond</h2>
            <p className="text-emerald-100">UCO, Mercy Hospital, Edmond Public Schools, and more</p>
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
                {edmondEmployers.map((emp, i) => (
                  <tr key={i}>
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
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><DollarSign className="h-6 w-6" /> Service Pricing for Edmond</h2>
            <p className="text-blue-100">Flat rates — no hidden mileage fees for any Edmond address</p>
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
                <tr><td className="px-4 py-3 font-semibold">Same-Day Service</td><td className="px-4 py-3">Within 24 hours</td><td className="px-4 py-3 font-bold text-blue-700">See Pricing</td><td className="px-4 py-3">Immediate deployment, all features</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-semibold">Skip Tracing</td><td className="px-4 py-3">Case-by-case</td><td className="px-4 py-3 font-bold text-blue-700">See Pricing</td><td className="px-4 py-3">High-turnover areas like UCO campus housing</td></tr>
                <tr><td className="px-4 py-3 font-semibold">Additional Attempts</td><td className="px-4 py-3">After 3 standard</td><td className="px-4 py-3 font-bold text-blue-700">See Pricing</td><td className="px-4 py-3">Photo + timestamp documentation</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Edmond Process Server FAQ</h2>
            <p className="text-teal-100">Common questions about process serving in Edmond</p>
          </div>
          <div className="p-8 space-y-6">
            {edmondFAQs.map((faq, i) => (
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
            <h2 className="text-3xl font-bold mb-3">Need Emergency Process Service in Edmond?</h2>
            <p className="text-xl mb-6 text-red-100">Available 24/7 for urgent legal document service across all Edmond ZIP codes</p>
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
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6" /> Edmond Service Area Map</h2>
            <p className="text-blue-100">GPS-verified process serving throughout Edmond and Oklahoma County</p>
          </div>
          <div className="p-8">
            <GoogleMapsEmbed countyName="Oklahoma County" cityName="Edmond" state="Oklahoma" title="Edmond Process Server Service Area" />
          </div>
        </section>

        {/* Internal Links */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Nearby Service Areas &amp; Resources</h2>
            <p className="text-purple-100">Explore related cities and helpful guides</p>
          </div>
          <div className="p-8 grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">📍 Nearby Cities</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/service-areas/oklahoma-city" className="text-blue-600 hover:underline">Oklahoma City Process Server</Link></li>
                <li><Link href="/service-areas/moore" className="text-blue-600 hover:underline">Moore Process Server</Link></li>
                <li><Link href="/service-areas/norman" className="text-blue-600 hover:underline">Norman Process Server</Link></li>
                <li><Link href="/service-areas/yukon" className="text-blue-600 hover:underline">Yukon Process Server</Link></li>
                <li><Link href="/service-areas/guthrie" className="text-blue-600 hover:underline">Guthrie Process Server</Link></li>
                <li><Link href="/counties/oklahoma-county" className="text-blue-600 hover:underline">Oklahoma County Process Server</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">📚 Helpful Guides</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/oklahoma-process-server-faq" className="text-blue-600 hover:underline">Process Serving FAQ 2026</Link></li>
                <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">Oklahoma Process Server Laws</Link></li>
                <li><Link href="/pricing" className="text-blue-600 hover:underline">Pricing Guide</Link></li>
                <li><Link href="/family-law-service-guide-tulsa" className="text-blue-600 hover:underline">Family Law Service Guide</Link></li>
                <li><Link href="/ai-skip-tracing-guide-oklahoma" className="text-blue-600 hover:underline">Skip Tracing Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🏢 Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/law-firm-services" className="text-blue-600 hover:underline">Law Firm Services</Link></li>
                <li><Link href="/weekend-emergency" className="text-blue-600 hover:underline">Emergency Process Service</Link></li>
                <li><Link href="/about" className="text-blue-600 hover:underline">About Just Legal Solutions</Link></li>
                <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Serve Papers in Edmond?</h2>
            <p className="text-xl mb-6 text-blue-100">GPS-tracked, notarized, court-ready. From UCO campus to Arcadia Lake — we know Edmond.</p>
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
        url="https://justlegalsolutions.org/service-areas/edmond"
        title="Process Server Edmond, OK | Oklahoma County | Same-Day Service Available"
        description="Licensed process server in Edmond, Oklahoma. UCO campus, gated communities, Arcadia Lake, and all Edmond ZIP codes. GPS-tracked service."
        faqItems={edmondFAQs.slice(0, 4).map(f => ({ question: f.question, answer: f.answer }))}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Service Areas', item: 'https://justlegalsolutions.org/service-areas' },
          { name: 'Edmond', item: 'https://justlegalsolutions.org/service-areas/edmond' },
        ]}
      />
    </div>
  );
}