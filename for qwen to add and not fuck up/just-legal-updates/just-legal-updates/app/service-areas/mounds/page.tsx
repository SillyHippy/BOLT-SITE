import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Mounds, OK | Licensed Creek County Legal Service',
  description: 'Licensed process server in Mounds, Oklahoma. Small Creek County town named for twin hills. Historic Glenn Pool oil field connection. QuickTrip on 161st is main landmark. Call (539) 367-6832.',
  keywords: 'process server Mounds OK, serve papers Mounds Oklahoma, legal document service Mounds, subpoena service Mounds, Mounds process server, Creek County, Glenn Pool, QuickTrip 161st',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Process Server Mounds, OK | Licensed Creek County Legal Service',
    description: 'Licensed process server in Mounds, Oklahoma. Small Creek County town between Kiefer and Beggs on Highway 75. Historic Glenn Pool oil field connection. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/service-areas/mounds',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/mounds',
  },
};

const pageFAQs: { question: string; answer: string }[] = [
  { question: 'Where do I file cases for Mounds residents?', answer: 'All district-court civil, family, and felony cases for Mounds residents file at the Creek County Courthouse in Sapulpa at 222 E Dewey Ave. Municipal cases are handled by the appropriate municipal court.' },
  { question: 'Why is it called "Mounds"?', answer: 'Mounds was named for the twin hills (mounds) that are a distinctive feature of the local landscape. The area also has historic connections to the Glenn Pool oil field, one of Oklahoma\'s most significant early oil discoveries.' },
  { question: 'Do you serve at the QuickTrip on 161st?', answer: 'Yes. The QuickTrip on 161st Street is a major landmark and employer in Mounds. We can serve employees at this location and other businesses along the 161st Street corridor.' },
  { question: 'Is same-day process service available in Mounds?', answer: 'Yes. Our same-day service covers Mounds and all surrounding Creek County areas. Call before noon for best scheduling. We can reach Mounds within 30-40 minutes from our base.' },
  { question: 'Do you notarize affidavits of service?', answer: 'Yes. Every completed service includes a signed, notarized Affidavit of Service prepared to Oklahoma Statutes §12-2004 standards, ready for filing at Creek County Courthouse in Sapulpa.' },
];

const employers: { name: string; address: string; industry: string; notes: string }[] = [
  { name: 'QuickTrip (161st Street)', address: '161st St S & Highway 75, Mounds, OK 74047', industry: 'Retail/Convenience', notes: 'Major landmark and employer in Mounds. 24-hour location on Highway 75 at 161st Street. High traffic area.' },
  { name: 'Town of Mounds', address: '1201 S Hickory St, Mounds, OK 74047', industry: 'Government', notes: 'Town administration and municipal services. Located in downtown Mounds area.' },
];

export default function MoundsProcessServerPage() {
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
            <span className="text-white font-medium">Mounds</span>
          </nav>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            Licensed Professional
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Process Server<br className="hidden md:block" /> Mounds, Oklahoma
          </h1>
          <div className="flex flex-wrap gap-4 mb-4 text-blue-200 text-sm">
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> Population: 936</span>
            <span>🚗 90 min from OKC</span>
            <span>🚗 25 min from Tulsa</span>
          </div>
          <p className="text-lg text-blue-100 mb-4 italic">Named for the twin hills. Historic Glenn Pool oil field connection. QuickTrip on 161st is the main landmark.</p>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            Licensed process server in Mounds, Oklahoma. Between Kiefer and Beggs on Highway 75, 
            we serve legal documents throughout Mounds with GPS-tracked, notarized, court-ready affidavits. 
            Call (539) 367-6832.
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
            <p className="text-slate-300">Mounds, Oklahoma — Creek County</p>
          </div>
          <div className="p-8 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="font-semibold text-lg text-gray-900">Creek County Courthouse</p>
              <p className="text-gray-700">222 E Dewey Ave, Sapulpa, OK 74066</p>
              <p className="text-gray-600 text-sm mt-1">📞 (918) 224-4710</p>
              <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 4:30 PM</p>
              <p className="text-gray-600 text-sm mt-3">All district court cases for Mounds residents file here. Located 20 miles northwest of Mounds.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="font-semibold text-orange-800">Local Service Notes</p>
              <p className="text-orange-700 text-sm">Mounds is a small rural community on Highway 75 between Kiefer and Beggs. The QuickTrip at 161st Street is the main commercial landmark. Most addresses are residential with some rural properties. The area has historic significance as part of the Glenn Pool oil field.</p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Where We Serve Papers in Mounds</h2>
            <p className="text-indigo-100">Local coverage across Creek County</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Mounds Town Center</h3>
              <p className="text-gray-700 text-sm">Small town center around Hickory Street. Town offices at 1201 S Hickory St, local businesses, and residential areas. Quiet community with easy access to all addresses.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">161st Street / QuickTrip Area</h3>
              <p className="text-gray-700 text-sm">The QuickTrip at 161st Street and Highway 75 is the main commercial landmark. 24-hour location with high traffic. Other businesses along 161st Street corridor.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">North Mounds / Kiefer Direction</h3>
              <p className="text-gray-700 text-sm">Residential and rural areas north of town center toward Kiefer along Highway 75. Mix of homes and some larger acreage properties.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">South Mounds / Beggs Direction</h3>
              <p className="text-gray-700 text-sm">Residential and rural areas south of town center toward Beggs along Highway 75. Some historic oil field area properties with rural character.</p>
            </div>
          </div>
        </section>

        {/* Major Employers */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Major Employers & Workplace Service</h2>
            <p className="text-emerald-100">Serving businesses and employees throughout Mounds</p>
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

        {/* Internal Links to Nearby Areas */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Nearby Service Areas</h2>
            <p className="text-purple-100">We also serve these surrounding communities</p>
          </div>
          <div className="p-8 grid md:grid-cols-3 gap-4">
            <Link href="/service-areas/kiefer" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Kiefer →</h3>
              <p className="text-gray-600 text-sm mt-1">12 miles north. Historic Creek County town, home of Kiefer Castle.</p>
            </Link>
            <Link href="/service-areas/beggs" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Beggs →</h3>
              <p className="text-gray-600 text-sm mt-1">15 miles south. Historic Creek County town on Highway 75.</p>
            </Link>
            <Link href="/service-areas/sapulpa" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Sapulpa →</h3>
              <p className="text-gray-600 text-sm mt-1">20 miles northwest. Creek County seat on historic Route 66.</p>
            </Link>
            <Link href="/service-areas/glenpool" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Glenpool →</h3>
              <p className="text-gray-600 text-sm mt-1">18 miles north. Our base location with fastest response times.</p>
            </Link>
            <Link href="/service-areas/kellyville" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Kellyville →</h3>
              <p className="text-gray-600 text-sm mt-1">25 miles west. Small Route 66 town in Creek County.</p>
            </Link>
            <Link href="/service-areas/okmulgee" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Okmulgee →</h3>
              <p className="text-gray-600 text-sm mt-1">25 miles southeast. Okmulgee County seat.</p>
            </Link>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><DollarSign className="h-6 w-6" /> Pricing for Mounds</h2>
            <p className="text-blue-100">Flat rates — no hidden mileage fees in Creek County</p>
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
                <p className="text-xs text-gray-400 mt-2">Immediate deployment · Mounds coverage</p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/pricing" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow">
                <DollarSign className="h-4 w-4" /> View Current Rates & Full Pricing
              </Link>
              <p className="text-xs text-gray-500 mt-3">All rates are flat — no hidden mileage fees in Creek County.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Mounds Process Serving FAQ</h2>
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
            <h2 className="text-3xl font-bold mb-3">Emergency Process Service in Mounds?</h2>
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
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6" /> Mounds Service Area Map</h2>
            <p className="text-blue-100">GPS-verified coverage throughout Creek County</p>
          </div>
          <div className="p-8">
            <GoogleMapsEmbed
              countyName="Creek County"
              cityName="Mounds"
              state="Oklahoma"
              title="Mounds Process Server Service Area"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl shadow-lg">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Serve Papers in Mounds?</h2>
            <p className="text-xl mb-6 text-blue-100">GPS-tracked, notarized, court-ready — in the shadow of the twin hills.</p>
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
        url="https://justlegalsolutions.org/service-areas/mounds"
        title="Process Server Mounds, OK | Licensed Creek County Legal Service"
        description="Licensed process server in Mounds, Oklahoma. GPS-tracked and court-ready. Call (539) 367-6832."
        faqItems={pageFAQs.slice(0, 4)}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Service Areas', item: 'https://justlegalsolutions.org/service-areas' },
          { name: 'Mounds', item: 'https://justlegalsolutions.org/service-areas/mounds' },
        ]}
      />
    </div>
  );
}
