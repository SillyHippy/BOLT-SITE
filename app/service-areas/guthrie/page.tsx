import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building, Scale, Shield, Clock } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import LocalPromoBanner from '@/components/ui/local-promo-banner';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Guthrie, OK | Logan County Legal Services',
  description: 'Licensed professional process server for Guthrie, Oklahoma. Specialized in same-day legal document delivery, summons, eviction notices, and subpoenas across Logan County.',
  keywords: 'process server Guthrie OK, serve papers Guthrie Oklahoma, Logan County process server, legal document serving Guthrie, same-day process server 73044',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Process Server Guthrie, OK | Logan County Legal Services',
    description: 'Licensed professional process server for Guthrie, Oklahoma. Specialized in same-day legal document delivery, summons, eviction notices, and subpoenas across Logan County.',
    url: 'https://justlegalsolutions.org/service-areas/guthrie',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/guthrie',
  },
};

const pageFAQs: { question: string; answer: string }[] = [
  { question: 'What county is Guthrie, Oklahoma in for legal filings?', answer: 'Guthrie is the county seat of Logan County. Civil, family, and criminal cases involving residents of Guthrie are filed and heard at the Logan County Courthouse located directly in downtown Guthrie.' },
  { question: 'Do you offer same-day process serving in Guthrie?', answer: 'Yes. We provide priority, same-day process serving for the entire Guthrie area and surrounding Logan County municipalities. Please call us before noon so we can dispatch a licensed server immediately.' },
  { question: 'Will my Guthrie service include a GPS-tracked affidavit?', answer: 'Yes. Every service attempt in Guthrie includes GPS geocoding, embedded photographic evidence, and timestamped logs. Your final Affidavit of Service is court-ready and fully complies with Oklahoma Statutes.' },
  { question: 'Do you serve businesses inside the Guthrie city limits?', answer: 'Absolutely. We serve legal documents, writs, and subpoenas to retail stores, local businesses, school district administrators, and corporate registered agents located within Guthrie.' },
  { question: 'What happens if the defendant in Guthrie is avoiding service?', answer: 'If an individual in Guthrie is actively dodging service, we utilize advanced skip-tracing techniques, perform multiple attempts at varied times, and execute discrete stakeouts if necessary to ensure legal delivery is completed.' },
];

const employers: { name: string; address: string; industry: string; notes: string }[] = [
  { name: 'Guthrie Public Schools', address: '802 E Vilas Ave, Guthrie, OK 73044', industry: 'Education', notes: 'Administration and multiple school campuses.' },
  { name: 'City of Guthrie Government', address: '101 N 2nd St, Guthrie, OK 73044', industry: 'Municipal', notes: 'City hall, public works, and local police department.' },
  { name: 'Logan County Government', address: '301 E Harrison Ave, Guthrie, OK 73044', industry: 'Government', notes: 'County administrative offices and courthouse operations.' },
  { name: 'Mercy Hospital Logan County', address: '200 Academy Rd, Guthrie, OK 73044', industry: 'Healthcare', notes: 'Regional medical and emergency care center.' },
  { name: 'Walmart Supercenter', address: '1608 E Noble Ave, Guthrie, OK 73044', industry: 'Retail', notes: 'Registered agents typically required for corporate legal service.' },
];

export default function GuthrieProcessServerPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <LocalPromoBanner zips={['73044']} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-16 md:py-24 relative overflow-hidden">

        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <nav className="text-sm mb-6 text-indigo-200" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:ring-2 focus:ring-white rounded">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-white transition-colors focus:ring-2 focus:ring-white rounded">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium" aria-current="page">Guthrie</span>
          </nav>
          
          <div className="inline-flex items-center bg-yellow-400 text-indigo-900 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider shadow-sm">
            <Shield className="w-4 h-4 mr-2" /> Licensed Professional
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Process Server in<br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-white">Guthrie, Oklahoma</span>
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-6 text-indigo-100 font-medium text-sm">
            <span className="flex items-center gap-1.5 bg-indigo-800/50 px-3 py-1 rounded-lg backdrop-blur-sm border border-indigo-700"><Users className="h-4 w-4 text-indigo-300" /> Servicing Zip: 73044</span>
            <span className="flex items-center gap-1.5 bg-indigo-800/50 px-3 py-1 rounded-lg backdrop-blur-sm border border-indigo-700"><MapPin className="h-4 w-4 text-indigo-300" /> Logan County Seat</span>
            <span className="flex items-center gap-1.5 bg-indigo-800/50 px-3 py-1 rounded-lg backdrop-blur-sm border border-indigo-700"><Clock className="h-4 w-4 text-indigo-300" /> Rush Service Available</span>
          </div>
          
          <p className="text-xl text-indigo-50 mb-8 max-w-3xl leading-relaxed text-shadow-sm">
            Fast, court-compliant legal document delivery across historic Guthrie and all of Logan County. We specialize in serving evasive defendants with GPS-tracked precision and court-admissible affadavits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="tel:5393676832" className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-bold py-4 px-8 rounded-xl text-center transition-all shadow-xl text-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95 focus:ring-4 focus:ring-yellow-400/50 outline-none">
              <Phone className="h-6 w-6" /> (539) 367-6832
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-xl text-center transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:border-white/50 focus:ring-4 focus:ring-white/20 outline-none">
              <FileText className="h-6 w-6" /> Send Documents Now
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-indigo-200 text-sm font-medium">
            <span className="flex items-center gap-1.5">✓ Standard 3-Day Service</span>
            <span className="flex items-center gap-1.5">✓ Next-Day Rush</span>
            <span className="flex items-center gap-1.5">✓ Same-Day Emergency</span>
            <span className="flex items-center gap-1.5 text-white bg-indigo-600/30 px-2 py-0.5 rounded">✓ GPS & Photo Proof</span>
            <Link href="/pricing" className="underline underline-offset-4 hover:text-white transition-colors">View All Rates →</Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-16 space-y-16">

        {/* Introduction / Authority Text */}
        <section className="prose prose-lg prose-indigo max-w-none text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">Professional Legal Document Service in Guthrie, OK</h2>
          <p>
            When legal proceedings require swift, undeniable delivery in Logan County, law firms, landlords, and private individuals trust Just Legal Solutions for process serving in <strong>Guthrie, Oklahoma</strong>. Situated just north of Oklahoma City, Guthrie serves as the historic county seat of Logan County, featuring a mix of highly preserved downtown commercial districts, sprawling residential neighborhoods, and extensive rural acreage. Our licensed process servers possess the local geographical insight and tactical persistence required to locate defendants, witnesses, and corporate registered agents throughout the 73044 zip code and surrounding areas.
          </p>
          <p>
            From civil summonses and family law petitions to eviction notices and urgent subpoenas, we execute every serve with meticulous adherence to <strong>Oklahoma Statutes Title 12, Section 2004</strong>. You receive more than just delivery; you receive comprehensive peace of mind backed by GPS-coded coordinates, time-stamped photographic evidence, and flawlessly prepared, court-ready affidavits of service. We eliminate the stress of tracking down evasive individuals in both Guthrie's historic subdivisions and hard-to-find county routes.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Courthouse Info */}
          <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Scale className="h-6 w-6 text-slate-300" />
                <h2 className="text-2xl font-bold">Courthouse Jurisdiction</h2>
              </div>
              <p className="text-slate-300 text-sm font-medium">Logan County Filings for Guthrie</p>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  As the county seat, all district-level civil suits, small claims cases, evictions, and family court matters originating in Guthrie must be filed directly at the Logan County Courthouse situated downtown.
                </p>
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 mb-4 shadow-inner">
                  <p className="font-bold text-lg text-gray-900 mb-1">Logan County Courthouse</p>
                  <div className="space-y-2 mt-3">
                    <p className="text-gray-700 flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>301 E Harrison Ave<br />Guthrie, OK 73044</span>
                    </p>
                    <p className="text-gray-700 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-indigo-500 shrink-0" />
                      <span>(405) 282-0193</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-500" /> We provide daily courthouse filing services in Guthrie.
                </p>
              </div>
            </div>
          </section>

          {/* Local Service Notes */}
          <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6 bg-gradient-to-br from-blue-700 to-blue-800 text-white">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-6 w-6 text-blue-300" />
                <h2 className="text-2xl font-bold">Guthrie Coverage Areas</h2>
              </div>
              <p className="text-blue-200 text-sm font-medium">Historic Districts & Rural Routes</p>
            </div>
            <div className="p-8 flex-grow">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Navigating Guthrie requires specific local knowledge. We efficiently execute service of process across all property types:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-blue-700" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block">Residential Neighborhoods</strong>
                    <span className="text-gray-600 text-sm">Including historic downtown properties, modern subdivisions, and multi-family structures.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg shrink-0 mt-0.5">
                    <Building className="h-4 w-4 text-blue-700" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block">Commercial Corridors</strong>
                    <span className="text-gray-600 text-sm">Serving commercial entities along Harrison Ave, Division St (Hwy 77), and Noble Ave (Hwy 33).</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg shrink-0 mt-0.5">
                    <AlertCircle className="h-4 w-4 text-blue-700" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block">Rural & Custom Addresses</strong>
                    <span className="text-gray-600 text-sm">Expertly locating hard-to-find acreages and obscure road alignments out into Logan County.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Corporate & Employment Serving */}
        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mt-12">
          <div className="p-6 bg-gradient-to-r from-emerald-700 to-teal-800 text-white">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Building className="h-6 w-6" /> Serving Employers in Guthrie</h2>
            <p className="text-teal-100 font-medium">Wage garnishments, subpoenas, and corporate legal notices</p>
          </div>
          <div className="p-8">
            <p className="text-gray-700 mb-6">
              When serving a business or executing a wage garnishment against an employee, we utilize highly professional protocols designed to minimize workplace disruption while ensuring strict legal compliance. We routinely serve major employers and local corporations in the Guthrie area.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="min-w-full text-left bg-white">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider">Entity name</th>
                    <th scope="col" className="px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider">Address / Area</th>
                    <th scope="col" className="px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider">Service Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {employers.map((emp, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">{emp.name}</div>
                        <div className="text-xs text-emerald-600 font-medium mt-1 uppercase tracking-wide">{emp.industry}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{emp.address}</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">{emp.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing Matrix */}
        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-bl-full z-0 opacity-50"></div>
          <div className="p-8 md:p-10 relative z-10">
            <div className="text-center mb-10 border-b border-gray-100 pb-8">
              <div className="inline-flex justify-center items-center bg-indigo-100 text-indigo-700 p-3 rounded-2xl mb-4">
                <DollarSign className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Transparent Pricing for Guthrie</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                No hidden mileage charges. No surprise fees. You receive flat-rate billing based exactly on how quickly you need your documents delivered in Logan County.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Standard */}
              <div className="bg-white rounded-2xl p-8 border hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Standard Delivery</h3>
                <div className="text-gray-500 font-medium h-12">First attempt within 2–3 days</div>
                <ul className="space-y-3 mb-8 mt-6">
                  <li className="flex items-center text-sm text-gray-700"><span className="text-green-500 mr-2 font-bold">✓</span> Up to 3 distinct attempts</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="text-green-500 mr-2 font-bold">✓</span> GPS coordinate logging</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="text-green-500 mr-2 font-bold">✓</span> Notarized Affidavit included</li>
                </ul>
              </div>
              
              {/* Rush */}
              <div className="bg-gradient-to-b from-indigo-50 to-white rounded-2xl p-8 border-2 border-indigo-500 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative transform md:scale-105 z-10">
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">Most Popular</div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Priority Rush</h3>
                <div className="text-indigo-700 font-medium h-12">First attempt by next business day</div>
                <ul className="space-y-3 mb-8 mt-6">
                  <li className="flex items-center text-sm text-gray-800"><span className="text-indigo-500 mr-2 font-bold">✓</span> Expedited routing to Guthrie</li>
                  <li className="flex items-center text-sm text-gray-800"><span className="text-indigo-500 mr-2 font-bold">✓</span> Early morning / evening attempts</li>
                  <li className="flex items-center text-sm text-gray-800"><span className="text-indigo-500 mr-2 font-bold">✓</span> Priority notarization</li>
                </ul>
              </div>
              
              {/* Same Day */}
              <div className="bg-white rounded-2xl p-8 border border-red-100 hover:border-red-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-red-700 mb-2">Same-Day Service</h3>
                <div className="text-red-600 font-medium h-12">Immediate deployment<br/><span className="text-xs">(Call by 12:00 PM)</span></div>
                <ul className="space-y-3 mb-8 mt-6">
                  <li className="flex items-center text-sm text-gray-700"><span className="text-red-500 mr-2 font-bold">✓</span> Same-day driving dispatch</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="text-red-500 mr-2 font-bold">✓</span> High-priority communications</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="text-red-500 mr-2 font-bold">✓</span> Guaranteed prompt action</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl group">
                Review Complete Pricing Guide <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {pageFAQs.length > 0 && (
          <section className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">Common inquiries about process serving in Guthrie, Oklahoma.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pageFAQs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg text-slate-800 mb-3 leading-snug">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Map Integration */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6 text-indigo-400" /> Guthrie Service Area</h2>
              <p className="text-slate-400 text-sm">Interactive GPS coverage map for Guthrie and Logan County.</p>
            </div>
          </div>
          <div className="p-2 bg-slate-100">
            <div className="rounded-xl overflow-hidden shadow-inner border border-slate-200 bg-white">
              <GoogleMapsEmbed
                countyName="Logan County"
                cityName="Guthrie"
                state="Oklahoma"
                title="Guthrie Process Server GPS Area Maps"
              />
            </div>
          </div>
        </section>

        {/* Action Bottom Bar */}
        <section className="bg-[url('/images/hero.webp')] bg-cover bg-center rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-indigo-900/90 backdrop-blur-sm"></div>
          <div className="relative z-10 p-10 md:p-16 text-center text-white">
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Need Papers Served Quickly in Guthrie?</h2>
            <p className="text-xl mb-10 text-indigo-100 max-w-2xl mx-auto font-medium">
              Delaying service can stall your case. Rely on the local expertise of our Guthrie process servers for rapid, unassailable legal delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="tel:5393676832" className="bg-yellow-400 text-indigo-900 hover:bg-yellow-300 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl flex items-center justify-center gap-3 hover:-translate-y-1">
                <Phone className="h-6 w-6" /> Talk to a Server: (539) 367-6832
              </a>
              <Link href="/contact" className="bg-indigo-700/80 hover:bg-indigo-600 text-white border border-indigo-400 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 backdrop-blur-sm hover:-translate-y-1">
                <FileText className="h-5 w-5" /> Submit Documents Form
              </Link>
            </div>
          </div>
        </section>

      
        {/* Explore More Resources */}
        <section className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-slate-200">
          <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <h2 className="text-2xl font-bold mb-2">Explore More Resources</h2>
            <p className="text-slate-300">Learn more about our services and nearby coverage areas</p>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">📍 Nearby Service Areas</h3>
                <ul className="space-y-2">
                  <li><Link href="/process-serving" className="text-blue-600 hover:text-blue-800 underline">process serving</Link></li>
                  <li><Link href="/tulsa-process-server" className="text-blue-600 hover:underline">Tulsa Process Server</Link></li>
                  <li><Link href="/service-areas/sapulpa" className="text-blue-600 hover:underline">Sapulpa Process Server</Link></li>
                  <li><Link href="/service-areas/jenks" className="text-blue-600 hover:underline">Jenks Process Server</Link></li>
                  <li><Link href="/service-areas/bixby" className="text-blue-600 hover:underline">Bixby Process Server</Link></li>
                  <li><Link href="/counties/tulsa-county" className="text-blue-600 hover:underline">Tulsa County Process Server</Link></li>
                  <li><Link href="/counties/creek-county" className="text-blue-600 hover:underline">Creek County Process Server</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">📚 Helpful Guides</h3>
                <ul className="space-y-2">
                  <li><Link href="/oklahoma-process-server-faq" className="text-blue-600 hover:underline">Process Serving FAQ 2026</Link></li>
                  <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">Oklahoma Process Server Laws</Link></li>
                  <li><Link href="/oklahoma-process-server-pricing" className="text-blue-600 hover:underline">Pricing Guide</Link></li>
                  <li><Link href="/family-law-service-guide-tulsa" className="text-blue-600 hover:underline">Family Law Service Guide</Link></li>
                  <li><Link href="/ai-skip-tracing-guide-oklahoma" className="text-blue-600 hover:underline">Skip Tracing Guide</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">🏢 Our Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/law-firm-services" className="text-blue-600 hover:underline">Law Firm Services</Link></li>
                  <li><Link href="/weekend-emergency" className="text-blue-600 hover:underline">Emergency Process Service</Link></li>
                  <li><Link href="/about" className="text-blue-600 hover:underline">About Just Legal Solutions</Link></li>
                  <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
                  <li><Link href="/seo/what-is-a-process-server" className="text-blue-600 hover:underline">What is a Process Server?</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Browse All Service Areas */}
        <div className="text-center py-8">
          <Link
            href="/service-areas"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors"
          >
            ← Browse All Oklahoma Service Areas
          </Link>
        </div>
</div>

      <UnifiedSchema
        pageType="location"
        url="https://justlegalsolutions.org/service-areas/guthrie"
        title="Process Server Guthrie, OK | Logan County Legal Services"
        description="Licensed professional process server for Guthrie, Oklahoma. Specialized in same-day legal document delivery, summons, eviction notices, and subpoenas across Logan County."
        faqItems={pageFAQs.slice(0, 4)}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Service Areas', item: 'https://justlegalsolutions.org/service-areas' },
          { name: 'Guthrie', item: 'https://justlegalsolutions.org/service-areas/guthrie' },
        ]}
      />
    </div>
  );
}
