import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Building } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Stillwater, OK | OSU & Payne County | Same-Day Service',
  description: 'Licensed process server in Stillwater, Oklahoma. Serving Payne County District Court, Oklahoma State University, Stillwater Medical Center, and all Stillwater neighborhoods. Same-day service available. (539) 367-6832.',
  keywords: 'process server Stillwater OK, Payne County process server, OSU process service, Oklahoma State University papers, serve papers Stillwater Oklahoma, Stillwater subpoena service, licensed process server Payne County',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-032-service-areas-card.webp',
      width: 1200,
      height: 630,
      alt: 'Oklahoma process server service area — local legal document delivery',
    }],
    title: 'Process Server Stillwater, OK | OSU & Payne County | Same-Day Service',
    description: 'Licensed process server in Stillwater, Oklahoma. Payne County courthouse filings, OSU campus coordination, Stillwater Medical, and rural Payne County.',
    url: 'https://justlegalsolutions.org/service-areas/stillwater',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Stillwater, OK | OSU & Payne County | Same-Day Service',
    description: 'Licensed process server in Stillwater, Oklahoma. Serving Payne County District Court, Oklahoma State University, Stillwater Medical Center, and all Stillwater neighborhoods. Same-day service available. (539) 367-6832.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-032-service-areas-card.webp'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/stillwater',
  },
};

const stillwaterFAQs = [
  {
    question: 'How do you handle OSU student housing turnover?',
    answer: 'Student turnover is one of the biggest challenges in Stillwater — especially at the end of May and mid-December. We verify current occupancy through apartment office records (where permitted), USPS forwarding data, and Oklahoma voter-registration records before every attempt. If a student has moved out of a dorm or off-campus apartment on University West, we trace their forwarding address through multiple cross-referenced databases.',
  },
  {
    question: 'Can you serve papers at Boone Pickens Stadium or Gallagher-Iba Arena during events?',
    answer: 'We plan strategically around OSU game days. Boone Pickens Stadium and Gallagher-Iba Arena create massive traffic and access restrictions. We typically serve at off-campus residences before or after events, or coordinate with OSU HR for workplace service during standard business hours on weekdays.',
  },
  {
    question: 'How do Payne County courthouse filing procedures work?',
    answer: 'Payne County District Court (606 S Husband St, Stillwater, OK 74074) handles all civil, family, criminal, and probate filings for Stillwater and Payne County. We verify case numbers, judge assignments, and filing divisions before every serve. The Stillwater Municipal Court (723 S Lewis St) handles city ordinance violations only.',
  },
  {
    question: 'Is same-day service available during OSU football weekends?',
    answer: 'Yes. Same-day service is available even during football weekends, but we recommend ordering as early as possible — ideally before 1 PM. Traffic and parking congestion around campus can add time to serve addresses within 3 blocks of Boone Pickens Stadium.',
  },
  {
    question: 'Do you serve rural Payne County addresses?',
    answer: 'Yes. North, east, and west of Stillwater city limits, Payne County includes agricultural land, ranches, and small communities like Perkins, Cushing, Yale, and Ripley. Rural addresses often have long driveways and shared mailboxes. We verify residency through Payne County assessor records before attempting service.',
  },
];

const stillwaterEmployers = [
  { name: 'Oklahoma State University', address: 'Stillwater, OK 74078', industry: 'Higher Education', notes: '25,000+ students; HR at Whitehurst Hall; multiple campus entry points' },
  { name: 'Stillwater Medical Center', address: '1323 W 6th Ave, Stillwater, OK 74074', industry: 'Healthcare', notes: '1,300+ employees; HR M–F 8 AM–5 PM; medical campus' },
  { name: 'City of Stillwater', address: '723 S Lewis St, Stillwater, OK 74074', industry: 'Government', notes: 'Municipal complex; city clerk available weekdays' },
  { name: 'Payne County Government', address: '606 S Husband St, Stillwater, OK 74074', industry: 'Government', notes: 'Courthouse complex; civil-process coordinator on site' },
  { name: 'Stillwater Public Schools', address: '314 S Lewis St, Stillwater, OK 74074', industry: 'Education', notes: '2,800+ students; admin at district office' },
  { name: 'Meridian Technology Center', address: '1312 S Sangre Rd, Stillwater, OK 74074', industry: 'Vocational Education', notes: '1,000+ students; staff service at admin office' },
  { name: 'Walmart Supercenter', address: '4545 W 6th Ave, Stillwater, OK 74074', industry: 'Retail', notes: '200+ employees; management office inside' },
];

export default function StillwaterProcessServerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <nav className="text-sm mb-6 text-blue-200" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Stillwater</span>
          </nav>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            Licensed Professional
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Process Server<br className="hidden md:block" /> Stillwater, OK
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            Home to Oklahoma State University and the seat of Payne County. We serve OSU campus housing, The Strip, Stillwater Medical Center, and every corner of rural Payne County — even on Bedlam weekend.
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
            <span>✓ OSU Calendar Aware</span>
            <span>✓ Rural Payne County Covered</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-12 space-y-10">

        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><Building className="h-6 w-6" /> Stillwater Courthouse &amp; Filing Information</h2>
            <p className="text-slate-300">Payne County District Court — Stillwater, Oklahoma</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-2">Payne County District Court</h3>
              <p className="text-gray-700 text-sm leading-relaxed">606 S Husband St<br />Stillwater, OK 74074<br />(405) 372-3244</p>
              <p className="text-gray-600 text-sm mt-2">All civil, family, felony, and probate cases for Stillwater and Payne County. We verify case numbers, judge assignments, and filing divisions before every serve.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Stillwater Municipal Court</h3>
              <p className="text-gray-700 text-sm leading-relaxed">723 S Lewis St<br />Stillwater, OK 74074<br />(405) 742-8200</p>
              <p className="text-gray-600 text-sm mt-2">City ordinance violations only. All district-court matters file at Payne County Courthouse on Husband Street.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Where We Serve Papers in Stillwater</h2>
            <p className="text-indigo-100">Campus housing, The Strip, medical district, and rural Payne County</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Campus &amp; University West</h3>
              <p className="text-gray-700 text-sm">Dense student housing between <strong>University Avenue</strong>, <strong>Washington Street</strong>, and <strong>6th Avenue</strong>. Fraternity and sorority houses, dormitories, and off-campus apartments. Turnover is highest at end of each semester. We verify current occupancy and know which complexes have front-desk check-in requirements.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Downtown Stillwater &amp; The Strip</h3>
              <p className="text-gray-700 text-sm"><strong>Washington Street</strong> between campus and downtown is lined with bars, restaurants, and shops. The <strong>National Wrestling Hall of Fame</strong> (405 W Hall of Fame Ave) anchors the area. Many downtown residences are apartments above storefronts with alley or rear entrances — we scout these on foot.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">South Stillwater &amp; Medical District</h3>
              <p className="text-gray-700 text-sm">South of <strong>6th Avenue</strong>: <strong>Stillwater Medical Center</strong> (1323 W 6th Ave), medical offices, and family subdivisions. Healthcare workers here have irregular schedules — we attempt service across morning, afternoon, and evening windows.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">West Stillwater &amp; Family Subdivisions</h3>
              <p className="text-gray-700 text-sm">West of <strong>Perkins Road</strong> and north of <strong>Lake Road</strong>: newer family homes, cul-de-sacs, and clear street addressing. Our most efficient residential service zones in Stillwater.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Perkins Road Commercial Corridor</h3>
              <p className="text-gray-700 text-sm">Primary north-south commercial artery with big-box retailers, restaurants, and auto dealers. Workplace service during business hours is highly effective for defendants employed along this strip.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Rural Payne County</h3>
              <p className="text-gray-700 text-sm">Communities including <strong>Perkins</strong>, <strong>Cushing</strong>, <strong>Yale</strong>, and <strong>Ripley</strong>. Agricultural land and ranch properties with long driveways and seasonal occupancy. We verify residency through Payne County assessor records before driving out.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Major Employers &amp; Workplace Service in Stillwater</h2>
            <p className="text-emerald-100">OSU, Stillwater Medical, and key Payne County employers</p>
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
                {stillwaterEmployers.map((emp, i) => (
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
          <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><DollarSign className="h-6 w-6" /> Service Pricing for Stillwater</h2>
            <p className="text-blue-100">Flat rates — no hidden mileage fees for any Payne County address</p>
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
                <tr className="bg-gray-50"><td className="px-4 py-3 font-semibold">Rush Service</td><td className="px-4 py-3">Next business day</td><td className="px-4 py-3 font-bold text-blue-700">See Pricing</td><td className="px-4 py-3">Priority scheduling, all features</td></tr>
                <tr><td className="px-4 py-3 font-semibold">Same-Day Service</td><td className="px-4 py-3">Within 24 hours</td><td className="px-4 py-3 font-bold text-blue-700">See Pricing</td><td className="px-4 py-3">Available even on OSU game days; order before 1 PM</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-semibold">Skip Tracing</td><td className="px-4 py-3">Case-by-case</td><td className="px-4 py-3 font-bold text-blue-700">See Pricing</td><td className="px-4 py-3">Essential for end-of-semester campus turnover</td></tr>
                <tr><td className="px-4 py-3 font-semibold">Additional Attempts</td><td className="px-4 py-3">After 3 standard</td><td className="px-4 py-3 font-bold text-blue-700">See Pricing</td><td className="px-4 py-3">Photo + timestamp documentation</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Stillwater Process Server FAQ</h2>
            <p className="text-teal-100">Common questions about process serving in Stillwater and Payne County</p>
          </div>
          <div className="p-8 space-y-6">
            {stillwaterFAQs.map((faq, i) => (
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
            <h2 className="text-3xl font-bold mb-3">Need Emergency Process Service in Stillwater?</h2>
            <p className="text-xl mb-6 text-red-100">24/7 availability — even on OSU game days and exam weekends</p>
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
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6" /> Stillwater Service Area Map</h2>
            <p className="text-blue-100">Payne County process serving — Stillwater and surrounding communities</p>
          </div>
          <div className="p-8">
            <GoogleMapsEmbed countyName="Payne County" cityName="Stillwater" state="Oklahoma" title="Stillwater Process Server Service Area" />
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Nearby Service Areas &amp; Resources</h2>
            <p className="text-purple-100">Central Oklahoma coverage</p>
          </div>
          <div className="p-8 grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">📍 Nearby Cities</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/service-areas/guthrie" className="text-blue-600 hover:underline">Guthrie Process Server</Link></li>
                <li><Link href="/service-areas/edmond" className="text-blue-600 hover:underline">Edmond Process Server</Link></li>
                <li><Link href="/service-areas/shawnee" className="text-blue-600 hover:underline">Shawnee Process Server</Link></li>
                <li><Link href="/service-areas/ponca-city" className="text-blue-600 hover:underline">Ponca City Process Server</Link></li>
                <li><Link href="/counties/payne-county" className="text-blue-600 hover:underline">Payne County Process Server</Link></li>
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
            <h2 className="text-3xl font-bold mb-3">Ready to Serve Papers in Stillwater?</h2>
            <p className="text-xl mb-6 text-blue-100">Go Pokes — and go with a process server who actually knows where The Strip ends and the county begins.</p>
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
        url="https://justlegalsolutions.org/service-areas/stillwater"
        title="Process Server Stillwater, OK | OSU & Payne County | Same-Day Service"
        description="Licensed process server in Stillwater, Oklahoma. Payne County filings, OSU campus coordination, Stillwater Medical, and rural Payne County including Perkins, Cushing, and Yale."
        faqItems={stillwaterFAQs.slice(0, 4).map(f => ({ question: f.question, answer: f.answer }))}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Service Areas', item: 'https://justlegalsolutions.org/service-areas' },
          { name: 'Stillwater', item: 'https://justlegalsolutions.org/service-areas/stillwater' },
        ]}
      />
    </div>
  );
}