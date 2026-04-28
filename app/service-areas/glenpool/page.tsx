import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building, Scale, Shield, Clock, Droplets } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import LocalPromoBanner from '@/components/ui/local-promo-banner';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Glenpool, OK | South Tulsa County',
  description: 'Licensed professional process server for Glenpool, Oklahoma. Specialized in same-day legal document delivery, summons, and subpoenas along the Highway 75 corridor and 74033.',
  keywords: 'process server Glenpool OK, serve papers Glenpool, Glenpool process server, legal document serving 74033, same-day process server South Tulsa',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Process Server Glenpool, OK | South Tulsa County',
    description: 'Licensed professional process server for Glenpool, Oklahoma. Specialized in same-day legal document delivery, summons, and subpoenas along the Highway 75 corridor and 74033.',
    url: 'https://justlegalsolutions.org/service-areas/glenpool',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/glenpool',
  },
};

const pageFAQs: { question: string; answer: string }[] = [
  { question: 'What county handles legal filings for Glenpool?', answer: 'Glenpool is entirely located within Tulsa County. All civil, family, and eviction cases involving Glenpool residents or businesses are filed and heard at the Tulsa County Courthouse in downtown Tulsa.' },
  { question: 'Do you serve logistics hubs and industrial areas along Highway 75?', answer: 'Yes. Glenpool serves as a major logistical corridor south of Tulsa. Our process servers are highly experienced in serving corporate and industrial entities, interacting with registered agents and HR personnel at complex commercial sites.' },
  { question: 'Will my Glenpool service include a GPS-tracked affidavit?', answer: 'Yes. Every service attempt in Glenpool includes rigorous GPS geocoding, embedded photographic evidence, and timestamped logs. Your final Affidavit of Service is court-ready and fully complies with Oklahoma Statutes.' },
  { question: 'Do you offer same-day process serving in Glenpool?', answer: 'Absolutely. Situated directly on US Highway 75, we can rapidly deploy servers to Glenpool for same-day priority deliveries from our Tulsa routing centers. Please contact us before noon to initiate a same-day dispatch.' },
  { question: 'What happens if the defendant in Glenpool is avoiding service?', answer: 'If an individual is actively dodging service in Glenpool or the surrounding rural areas heading toward Kiefer or Mounds, we utilize advanced skip-tracing techniques, perform multiple residential attempts at varied times, or legally serve them at their workplace.' },
];

const employers: { name: string; address: string; industry: string; notes: string }[] = [
  { name: 'Glenpool Public Schools', address: '140 W 141st St, Glenpool, OK 74033', industry: 'Education', notes: 'Administration and numerous school campuses.' },
  { name: 'City of Glenpool Municipal', address: '12205 S Yukon Ave, Glenpool, OK 74033', industry: 'Municipal', notes: 'City hall, public works, and local police department.' },
  { name: 'Walmart Supercenter', address: '12101 S Waco Ave, Glenpool, OK 74033', industry: 'Retail', notes: 'Massive retail employee base; management office service.' },
  { name: 'Saint Francis Hospital South', address: '10501 E 91st St S, Tulsa, OK', industry: 'Healthcare', notes: 'Major employer just northeast of city limits; HR verification required.' },
  { name: 'Highway 75 Distribution Corridors', address: 'Varies along US-75', industry: 'Logistics', notes: 'Multiple freight and trucking terminals; corporate registered agents.' },
];

export default function GlenpoolServiceAreaPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <LocalPromoBanner zips={['74033']} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-orange-800 to-orange-700 text-white py-16 md:py-24 relative overflow-hidden">

        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <nav className="text-sm mb-6 text-amber-200" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:ring-2 focus:ring-white rounded">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-white transition-colors focus:ring-2 focus:ring-white rounded">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium" aria-current="page">Glenpool</span>
          </nav>
          
          <div className="inline-flex items-center bg-yellow-400 text-amber-900 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider shadow-sm">
            <Shield className="w-4 h-4 mr-2" /> Licensed Professional
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Process Server in<br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-white">Glenpool, Oklahoma</span>
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-6 text-amber-100 font-medium text-sm">
            <span className="flex items-center gap-1.5 bg-amber-800/50 px-3 py-1 rounded-lg backdrop-blur-sm border border-amber-700"><Users className="h-4 w-4 text-amber-300" /> Servicing Zip: 74033</span>
            <span className="flex items-center gap-1.5 bg-amber-800/50 px-3 py-1 rounded-lg backdrop-blur-sm border border-amber-700"><MapPin className="h-4 w-4 text-amber-300" /> South Tulsa County</span>
            <span className="flex items-center gap-1.5 bg-amber-800/50 px-3 py-1 rounded-lg backdrop-blur-sm border border-amber-700"><Clock className="h-4 w-4 text-amber-300" /> Rush Service Available</span>
          </div>
          
          <p className="text-xl text-amber-50 mb-8 max-w-3xl leading-relaxed text-shadow-sm">
            Fast, court-compliant legal document delivery across the entirety of Glenpool. We specialize in serving evasive defendants with GPS-tracked precision and court-admissible affidavits, maneuvering the US Highway 75 logistical corridor flawlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="tel:5393676832" className="bg-yellow-400 hover:bg-yellow-300 text-amber-900 font-bold py-4 px-8 rounded-xl text-center transition-all shadow-xl text-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95 focus:ring-4 focus:ring-yellow-400/50 outline-none">
              <Phone className="h-6 w-6" /> (539) 367-6832
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-xl text-center transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:border-white/50 focus:ring-4 focus:ring-white/20 outline-none">
              <FileText className="h-6 w-6" /> Send Documents Now
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-amber-200 text-sm font-medium">
            <span className="flex items-center gap-1.5">✓ Standard 3-Day Service</span>
            <span className="flex items-center gap-1.5">✓ Next-Day Rush</span>
            <span className="flex items-center gap-1.5">✓ Same-Day Emergency</span>
            <span className="flex items-center gap-1.5 text-white bg-amber-600/30 px-2 py-0.5 rounded">✓ GPS & Photo Proof</span>
            <Link href="/pricing" className="underline underline-offset-4 hover:text-white transition-colors">View All Rates →</Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-16 space-y-16">

        {/* Introduction / Authority Text */}
        <section className="prose prose-lg prose-amber max-w-none text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">Professional Legal Document Service in Glenpool, OK</h2>
          <p>
            When legal proceedings require swift, undeniable delivery south of the Tulsa metropolitan area, law firms, landlords, and private individuals trust Just Legal Solutions for process serving in <strong>Glenpool, Oklahoma</strong>. Known as "The Town that Made Tulsa Famous" due to its historic oil strikes, Glenpool today is a vital suburban and logistics hub anchored by the Highway 75 corridor.
          </p>
          <p>
            From civil summonses and family law petitions to eviction notices and urgent subpoenas, we execute every serve with meticulous adherence to <strong>Oklahoma Statutes Title 12, Section 2004</strong>. You receive more than just delivery; you receive comprehensive peace of mind backed by GPS-coded coordinates, time-stamped photographic evidence, and flawlessly prepared, court-ready affidavits of service. We eliminate the stress of tracking down evasive individuals in the quiet residential developments and massive industrial grids of the 74033 area code.
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
              <p className="text-slate-300 text-sm font-medium">South Tulsa County Filings</p>
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Glenpool lies entirely within the borders of Tulsa County. Consequently, all district-level civil suits, small claims cases, evictions, and family court matters originating here must be filed at the Tulsa County Courthouse.
                </p>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 mb-4 shadow-inner">
                  <p className="font-bold text-lg text-gray-900 mb-1">Tulsa County Courthouse</p>
                  <div className="space-y-2 mt-3">
                    <p className="text-gray-700 flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                      <span>500 S Denver Ave<br />Tulsa, OK 74103</span>
                    </p>
                    <p className="text-gray-700 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                      <span>(918) 596-5000</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-500" /> We provide daily courthouse filing services connecting Glenpool to the central Tulsa docket.
                </p>
              </div>
            </div>
          </section>

          {/* Local Service Notes */}
          <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-6 w-6 text-orange-300" />
                <h2 className="text-2xl font-bold">Coverage Highlights</h2>
              </div>
              <p className="text-orange-200 text-sm font-medium">Residential Subdivisions & Highway 75</p>
            </div>
            <div className="p-8 flex-grow">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Navigating Glenpool demands experience with rapidly expanding subdivisions and heavily trafficked commercial arteries:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg shrink-0 mt-0.5">
                    <Building className="h-4 w-4 text-orange-700" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block">Highway 75 Commercial Corridor</strong>
                    <span className="text-gray-600 text-sm">Executing service on retail chains, logistics headquarters, and corporate agents rapidly.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-orange-700" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block">Newer Master-Planned Communities</strong>
                    <span className="text-gray-600 text-sm">Navigating subdivisions tracking late-afternoon returns for maximum efficiency.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg shrink-0 mt-0.5">
                    <Droplets className="h-4 w-4 text-orange-700" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block">Southern Industrial & Energy Roots</strong>
                    <span className="text-gray-600 text-sm">Managing difficult service attempts in deeply entrenched rural spaces bordering Kiefer and Mounds.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Corporate & Employment Serving */}
        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mt-12">
          <div className="p-6 bg-gradient-to-r from-amber-700 to-orange-800 text-white">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><Building className="h-6 w-6" /> Serving Employers in Glenpool</h2>
            <p className="text-orange-200 font-medium">Wage garnishments, subpoenas, and corporate legal notices</p>
          </div>
          <div className="p-8">
            <p className="text-gray-700 mb-6">
              When serving a business or executing a wage garnishment against an employee, we utilize highly professional protocols designed to minimize workplace disruption while ensuring strict legal compliance. We routinely serve major employers, logistics hubs, and local corporations in the Glenpool area.
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
                        <div className="text-xs text-amber-600 font-medium mt-1 uppercase tracking-wide">{emp.industry}</div>
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-bl-full z-0 opacity-50"></div>
          <div className="p-8 md:p-10 relative z-10">
            <div className="text-center mb-10 border-b border-gray-100 pb-8">
              <div className="inline-flex justify-center items-center bg-amber-100 text-amber-700 p-3 rounded-2xl mb-4">
                <DollarSign className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Transparent Pricing for Glenpool</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                No hidden mileage charges. No surprise fees. You receive flat-rate billing based exactly on how quickly you need your documents delivered in Glenpool.
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
              <div className="bg-gradient-to-b from-amber-50 to-white rounded-2xl p-8 border-2 border-amber-500 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative transform md:scale-105 z-10">
                <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">Most Popular</div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Priority Rush</h3>
                <div className="text-amber-700 font-medium h-12">First attempt by next business day</div>
                <ul className="space-y-3 mb-8 mt-6">
                  <li className="flex items-center text-sm text-gray-800"><span className="text-amber-500 mr-2 font-bold">✓</span> Expedited routing to Glenpool</li>
                  <li className="flex items-center text-sm text-gray-800"><span className="text-amber-500 mr-2 font-bold">✓</span> Early morning / evening attempts</li>
                  <li className="flex items-center text-sm text-gray-800"><span className="text-amber-500 mr-2 font-bold">✓</span> Priority notarization</li>
                </ul>
              </div>
              
              {/* Same Day */}
              <div className="bg-white rounded-2xl p-8 border border-amber-200 hover:border-amber-400 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-amber-700 mb-2">Same-Day Service</h3>
                <div className="text-amber-600 font-medium h-12">Immediate deployment<br/><span className="text-xs">(Call by 12:00 PM)</span></div>
                <ul className="space-y-3 mb-8 mt-6">
                  <li className="flex items-center text-sm text-gray-700"><span className="text-amber-500 mr-2 font-bold">✓</span> Same-day driving dispatch</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="text-amber-500 mr-2 font-bold">✓</span> High-priority communications</li>
                  <li className="flex items-center text-sm text-gray-700"><span className="text-amber-500 mr-2 font-bold">✓</span> Guaranteed prompt action</li>
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
              <p className="text-slate-600">Common inquiries about process serving in Glenpool, Oklahoma.</p>
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
              <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6 text-amber-400" /> Glenpool Area</h2>
              <p className="text-slate-400 text-sm">Interactive GPS coverage map for Glenpool.</p>
            </div>
          </div>
          <div className="p-2 bg-slate-100">
            <div className="rounded-xl overflow-hidden shadow-inner border border-slate-200 bg-white">
              <GoogleMapsEmbed
                countyName="Tulsa County"
                cityName="Glenpool"
                state="Oklahoma"
                title="Glenpool Process Server GPS Area Maps"
              />
            </div>
          </div>
        </section>

        {/* Action Bottom Bar */}
        <section className="bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900 rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[url('/images/hero.webp')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10 p-10 md:p-16 text-center text-white">
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Need Papers Served Quickly in Glenpool?</h2>
            <p className="text-xl mb-10 text-amber-100 max-w-2xl mx-auto font-medium">
              Delaying service can stall your case. Rely on the local expertise of our Glenpool process servers for rapid, unassailable legal delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="tel:5393676832" className="bg-yellow-400 text-amber-900 hover:bg-yellow-300 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl flex items-center justify-center gap-3 hover:-translate-y-1">
                <Phone className="h-6 w-6" /> Talk to a Server: (539) 367-6832
              </a>
              <Link href="/contact" className="bg-amber-700/80 hover:bg-amber-600 text-white border border-amber-400 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 backdrop-blur-sm hover:-translate-y-1">
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
        url="https://justlegalsolutions.org/service-areas/glenpool"
        title="Process Server Glenpool, OK | South Tulsa County"
        description="Licensed professional process server for Glenpool, Oklahoma. Specialized in same-day legal document delivery, summons, and subpoenas along the Highway 75 corridor and 74033."
        faqItems={pageFAQs.slice(0, 4)}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Service Areas', item: 'https://justlegalsolutions.org/service-areas' },
          { name: 'Glenpool', item: 'https://justlegalsolutions.org/service-areas/glenpool' },
        ]}
      />
    </div>
  );
}