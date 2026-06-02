import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server El Reno, OK | Canadian County Seat',
  description: 'Licensed process server in El Reno, Oklahoma. Canadian County seat with historic Route 66 heritage. GPS-tracked, court-ready. Call (539) 367-6832.',
  keywords: 'process server El Reno OK, serve papers El Reno Oklahoma, legal document service El Reno, subpoena service El Reno, El Reno process server, Canadian County courthouse',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-032-service-areas-card.webp',
      width: 1200,
      height: 630,
      alt: 'Oklahoma process server service area — local legal document delivery',
    }],
    title: 'Process Server El Reno, OK | Canadian County Seat',
    description: 'Licensed process server in El Reno, Oklahoma. Canadian County seat with historic Route 66 heritage. GPS-tracked, court-ready. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/service-areas/el-reno',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server El Reno, OK | Canadian County Seat',
    description: 'Licensed process server in El Reno, Oklahoma. Canadian County seat with historic Route 66 heritage. GPS-tracked, court-ready. Call (539) 367-6832.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-032-service-areas-card.webp'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/el-reno',
  },
};

const pageFAQs: { question: string; answer: string }[] = [
  { question: 'Do all Canadian County cases file in El Reno?', answer: 'Yes. El Reno is the county seat of Canadian County. All district court civil, family, and felony cases for Canadian County residents file at the Canadian County Courthouse at 301 N Choctaw Ave in downtown El Reno.' },
  { question: 'Where is the Canadian County Courthouse located?', answer: 'The Canadian County Courthouse is located at 301 N Choctaw Ave, El Reno, OK 73036 — directly on historic Route 66 in downtown El Reno. The Clerk of Court\'s office is on the second floor.' },
  { question: 'Is same-day process service available in El Reno?', answer: 'Yes. El Reno is approximately 25 miles west of Oklahoma City with quick access via I-40 and Route 66. Same-day service available with call before noon.' },
  { question: 'What makes El Reno different for process serving?', answer: 'El Reno combines a historic Route 66 downtown with modern development along the I-40 corridor. The Canadian County Courthouse location means many legal professionals have offices in the downtown area. Fort Reno and the annual Fried Onion Burger Day Festival are local landmarks.' },
  { question: 'Do you notarize affidavits of service?', answer: 'Yes. Every completed service includes a signed, notarized Affidavit of Service prepared to Oklahoma Statutes §12-2004 standards, ready for filing at Canadian County Courthouse.' },
];

const employers: { name: string; address: string; industry: string; notes: string }[] = [
  { name: 'Canadian County Courthouse', address: '301 N Choctaw Ave, El Reno, OK 73036', industry: 'Government', notes: 'County seat courthouse. Second floor Clerk of Court. Limited parking on Choctaw Ave; additional parking on side streets.' },
  { name: 'Canadian County Sheriff', address: '300 S Evans Ave, El Reno, OK 73036', industry: 'Government', notes: 'Law enforcement and corrections facility south of downtown.' },
  { name: 'Redlands Community College', address: '1300 S Country Club Rd, El Reno, OK 73036', industry: 'Higher Education', notes: 'Community college campus. Faculty and student services available weekdays.' },
  { name: 'El Reno Public Schools', address: '300 S Choctaw Ave, El Reno, OK 73036', industry: 'Education', notes: 'District administration in historic downtown building near courthouse.' },
  { name: 'El Reno High School', address: '407 S Choctaw Ave, El Reno, OK 73036', industry: 'Education', notes: 'Historic high school campus one block south of downtown.' },
  { name: 'City of El Reno', address: '203 N Choctaw Ave, El Reno, OK 73036', industry: 'Government', notes: 'Municipal offices in historic downtown. City clerk available for service.' },
  { name: 'Walmart Supercenter', address: '2400 Country Club Rd, El Reno, OK 73036', industry: 'Retail', notes: 'Large-format retail off I-40 at Country Club Road exit.' },
  { name: 'Fort Reno', address: '7107 W Cheyenne St, El Reno, OK 73036', industry: 'Historic/Tourism', notes: 'Historic U.S. Army cavalry post and POW camp. Administration offices on site.' },
  { name: 'Lucky Star Casino', address: '7901 N U.S. 81, El Reno, OK 73036', industry: 'Gaming', notes: 'Cheyenne & Arapaho Tribes casino north of El Reno on Highway 81.' },
  { name: 'Hilands Golf Course', address: '300 Country Club Rd, El Reno, OK 73036', industry: 'Recreation', notes: 'Municipal golf course and event venue near Country Club Road.' },
];

export default function ElRenoProcessServerPage() {
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
            <span className="text-white font-medium">El Reno</span>
          </nav>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            Licensed Professional
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Process Server<br className="hidden md:block" /> El Reno, Oklahoma
          </h1>
          <div className="flex flex-wrap gap-4 mb-4 text-blue-200 text-sm">
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> Population: 16,831</span>
            <span>🚗 30 min from OKC</span>
            <span>🚗 100 min from Tulsa</span>
          </div>
          <p className="text-lg text-blue-100 mb-4 italic">The county seat of Canadian County, located on historic Route 66 with a rich western heritage.</p>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            Licensed process server in El Reno, Oklahoma. Serving Canadian County District Court at the historic downtown courthouse, 
            with expertise in rural addressing west of OKC and Route 66 corridor service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5393676832" className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 px-8 rounded-xl text-center transition-all shadow-xl text-lg flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" /> Call (539) 367-6832
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-xl text-center transition-all flex items-center justify-center gap-2">
              <FileText className="h-5 w-5" /> Get a Free Quote
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-blue-200 text-sm">
            <span>✓ Standard Service</span>
            <span>✓ Rush Service</span>
            <span>✓ Same-Day Service</span>
            <span>✓ GPS-tracked every attempt</span>
            <span>✓ Notarized affidavit included</span>
            <Link href="/pricing" className="underline underline-offset-2 hover:text-white transition-colors">View Current Pricing →</Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-12 space-y-10">

        {/* Courthouse Info */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
            <h2 className="text-2xl font-bold mb-1">Courthouse & Filing Information</h2>
            <p className="text-slate-300">El Reno, Oklahoma — Canadian County Seat</p>
          </div>
          <div className="p-8 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="font-semibold text-lg text-gray-900">Canadian County Courthouse</p>
              <p className="text-gray-700">301 N Choctaw Ave, El Reno, OK 73036</p>
              <p className="text-gray-600 text-sm mt-1">📞 (405) 262-1070</p>
              <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 4:30 PM</p>
              <p className="text-gray-600 text-sm mt-3">All Canadian County district court cases file here. Located on historic Route 66 in downtown El Reno. Clerk of Court on second floor.</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <p className="font-semibold text-lg text-gray-900">El Reno Municipal Court</p>
              <p className="text-gray-700">203 N Choctaw Ave, El Reno, OK 73036</p>
              <p className="text-gray-600 text-sm mt-1">📞 (405) 262-1472</p>
              <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 5:00 PM</p>
              <p className="text-gray-600 text-sm mt-3">Municipal citations and city ordinance violations. Same building as City Hall.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="font-semibold text-orange-800">Local Service Notes</p>
              <p className="text-orange-700 text-sm">Canadian County Courthouse has limited parking on Choctaw Avenue. Use side streets or the county parking lot south of the building. The downtown area can be busy during the annual Fried Onion Burger Day Festival.</p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Where We Serve Papers in El Reno</h2>
            <p className="text-indigo-100">Local coverage throughout Canadian County</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Historic Downtown / Route 66</h3>
              <p className="text-gray-700 text-sm">The original downtown along Choctaw Avenue (Route 66). Canadian County Courthouse, City Hall, historic businesses, and legal offices concentrated in this area.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">I-40 Corridor</h3>
              <p className="text-gray-700 text-sm">Modern commercial development along the Interstate 40 corridor. Walmart, hotels, and chain restaurants. Easy access from OKC metro.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Redlands Community College Area</h3>
              <p className="text-gray-700 text-sm">South side of El Reno near Country Club Road. College campus and residential areas south of the railroad tracks.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">West El Reno / Rural Routes</h3>
              <p className="text-gray-700 text-sm">Rural properties west of town toward Calumet and Geary. Farm and ranch properties with rural addressing. Fort Reno located southwest of town.</p>
            </div>
          </div>
        </section>

        {/* Major Employers */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Major Employers & Workplace Service</h2>
            <p className="text-emerald-100">Serving businesses and employees throughout El Reno</p>
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
                {employers.map((emp, i) => (
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

        {/* Internal Links */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Nearby Service Areas</h2>
            <p className="text-purple-100">We also serve these surrounding communities</p>
          </div>
          <div className="p-8 grid md:grid-cols-3 gap-4">
            <Link href="/service-areas/yukon" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Yukon →</h3>
              <p className="text-gray-600 text-sm mt-1">12 miles east. The other major Canadian County city.</p>
            </Link>
            <Link href="/service-areas/mustang" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Mustang →</h3>
              <p className="text-gray-600 text-sm mt-1">20 miles east. Fast-growing suburb in Canadian County.</p>
            </Link>
            <Link href="/service-areas/oklahoma-city" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Oklahoma City →</h3>
              <p className="text-gray-600 text-sm mt-1">25 miles east via I-40. State capital and Oklahoma County seat.</p>
            </Link>
            <Link href="/service-areas/calumet" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Calumet →</h3>
              <p className="text-gray-600 text-sm mt-1">15 miles west. Small Canadian County community.</p>
            </Link>
            <Link href="/service-areas/geary" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Geary →</h3>
              <p className="text-gray-600 text-sm mt-1">20 miles west. Rural community in Blaine County.</p>
            </Link>
            <Link href="/service-areas/union-city" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Union City →</h3>
              <p className="text-gray-600 text-sm mt-1">10 miles south. Small community on Highway 81.</p>
            </Link>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><DollarSign className="h-6 w-6" /> Pricing for El Reno</h2>
            <p className="text-blue-100">Flat rates — no hidden mileage fees in Canadian County</p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-200">
                <p className="font-bold text-gray-900 text-lg mb-1">Standard Service</p>
                <p className="text-sm text-gray-600">2–3 business days</p>
                <p className="text-xs text-gray-400 mt-2">3 attempts · GPS affidavit · Photo docs</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 text-center border border-blue-200">
                <p className="font-bold text-gray-900 text-lg mb-1">Rush Service</p>
                <p className="text-sm text-gray-600">Next business day</p>
                <p className="text-xs text-gray-400 mt-2">Priority scheduling · All features</p>
              </div>
              <div className="bg-red-50 rounded-xl p-5 text-center border border-red-200">
                <p className="font-bold text-gray-900 text-lg mb-1">Same-Day Service</p>
                <p className="text-sm text-gray-600">Call before noon</p>
                <p className="text-xs text-gray-400 mt-2">Immediate deployment · El Reno coverage</p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/pricing" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow">
                <DollarSign className="h-4 w-4" /> View Current Rates & Full Pricing
              </Link>
              <p className="text-xs text-gray-500 mt-3">All rates are flat — no hidden mileage fees in Canadian County.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <h2 className="text-2xl font-bold mb-1">El Reno Process Serving FAQ</h2>
            <p className="text-teal-100">Local questions answered</p>
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

        {/* Emergency CTA */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl shadow-lg">
          <div className="p-8 text-center">
            <AlertCircle className="h-14 w-14 mx-auto mb-5 text-red-200" />
            <h2 className="text-3xl font-bold mb-3">Emergency Process Service in El Reno?</h2>
            <p className="text-xl mb-6 text-red-100">Available 24/7 for urgent legal document service</p>
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
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6" /> El Reno Service Area Map</h2>
            <p className="text-blue-100">GPS-verified coverage throughout Canadian County</p>
          </div>
          <div className="p-8">
            <GoogleMapsEmbed
              countyName="Canadian County"
              cityName="El Reno"
              state="Oklahoma"
              title="El Reno Process Server Service Area"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl shadow-lg">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Serve Papers in El Reno?</h2>
            <p className="text-xl mb-6 text-blue-100">GPS-tracked, notarized, court-ready — at the Canadian County Courthouse and beyond.</p>
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
            ← Browse All Service Areas
          </Link>
        </div>

      </div>

      <UnifiedSchema
        pageType="location"
        url="https://justlegalsolutions.org/service-areas/el-reno"
        title="Process Server El Reno, OK | Canadian County Seat"
        description="Licensed process server in El Reno, Oklahoma. GPS-tracked and court-ready. Call (539) 367-6832."
        faqItems={pageFAQs.slice(0, 4)}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Service Areas', item: 'https://justlegalsolutions.org/service-areas' },
          { name: 'El Reno', item: 'https://justlegalsolutions.org/service-areas/el-reno' },
        ]}
      />
    </div>
  );
}
