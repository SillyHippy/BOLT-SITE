import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Kiefer, OK | Licensed Creek County Legal Service',
  description: 'Licensed process server in Kiefer, Oklahoma. Historic Creek County town, formerly Praper, renamed 1906. Home of Bridge Crane Specialists and Kiefer Castle. Call (539) 367-6832.',
  keywords: 'process server Kiefer OK, serve papers Kiefer Oklahoma, legal document service Kiefer, subpoena service Kiefer, Kiefer process server, Creek County, Kiefer Castle, Bridge Crane Specialists',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Process Server Kiefer, OK | Licensed Creek County Legal Service',
    description: 'Licensed process server in Kiefer, Oklahoma. Historic Creek County town between Sapulpa and Glenpool. Home of Bridge Crane Specialists and Kiefer Castle. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/service-areas/kiefer',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/kiefer',
  },
};

const pageFAQs: { question: string; answer: string }[] = [
  { question: 'Where do I file cases for Kiefer residents?', answer: 'All district-court civil, family, and felony cases for Kiefer residents file at the Creek County Courthouse in Sapulpa at 222 E Dewey Ave. Municipal cases are handled by the appropriate municipal court.' },
  { question: 'Do you serve at Bridge Crane Specialists?', answer: 'Yes. Bridge Crane Specialists is a major employer in Kiefer. We coordinate with their management for professional service to employees at their facility.' },
  { question: 'What is the history of Kiefer?', answer: 'Kiefer was originally called "Praper" and was renamed in 1906. The town is home to the historic Kiefer Castle landmark and sits between Sapulpa and Glenpool on Highway 75.' },
  { question: 'Is same-day process service available in Kiefer?', answer: 'Yes. Our same-day service covers Kiefer and all surrounding Creek County areas. Call before noon for best scheduling. We can reach Kiefer within 25-35 minutes from our Glenpool base.' },
  { question: 'Do you notarize affidavits of service?', answer: 'Yes. Every completed service includes a signed, notarized Affidavit of Service prepared to Oklahoma Statutes §12-2004 standards, ready for filing at Creek County Courthouse in Sapulpa.' },
];

const employers: { name: string; address: string; industry: string; notes: string }[] = [
  { name: 'Bridge Crane Specialists', address: '401 W Division St, Kiefer, OK 74041', industry: 'Manufacturing', notes: 'Major employer in Kiefer. Crane and material handling equipment manufacturer. Industrial facility with office and production areas.' },
  { name: 'Town of Kiefer', address: '401 W Division St, Kiefer, OK 74041', industry: 'Government', notes: 'Town administration and municipal services. Located on Division Street in downtown Kiefer.' },
  { name: 'Kiefer Public Works', address: '401 W Division St, Kiefer, OK 74041', industry: 'Government', notes: 'Municipal utilities and public works operations. Coordinated with town administration.' },
];

export default function KieferProcessServerPage() {
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
            <span className="text-white font-medium">Kiefer</span>
          </nav>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            Licensed — PSL-2026-2
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Process Server<br className="hidden md:block" /> Kiefer, Oklahoma
          </h1>
          <div className="flex flex-wrap gap-4 mb-4 text-blue-200 text-sm">
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> Population: 2,187</span>
            <span>🚗 85 min from OKC</span>
            <span>🚗 20 min from Tulsa</span>
          </div>
          <p className="text-lg text-blue-100 mb-4 italic">Originally called "Praper," renamed in 1906. Home of Bridge Crane Specialists and the historic Kiefer Castle.</p>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            Licensed process server in Kiefer, Oklahoma. From Bridge Crane Specialists to the historic downtown 
            and residential areas along Highway 75, we serve legal documents throughout Kiefer with 
            GPS-tracked, notarized, court-ready affidavits. Call (539) 367-6832.
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
            <p className="text-slate-300">Kiefer, Oklahoma — Creek County</p>
          </div>
          <div className="p-8 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="font-semibold text-lg text-gray-900">Creek County Courthouse</p>
              <p className="text-gray-700">222 E Dewey Ave, Sapulpa, OK 74066</p>
              <p className="text-gray-600 text-sm mt-1">📞 (918) 224-4710</p>
              <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 4:30 PM</p>
              <p className="text-gray-600 text-sm mt-3">All district court cases for Kiefer residents file here. Located 12 miles west of Kiefer on Highway 66.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="font-semibold text-orange-800">Local Service Notes</p>
              <p className="text-orange-700 text-sm">Kiefer is a small community between Sapulpa and Glenpool on Highway 75. Bridge Crane Specialists is the major employer. The historic Kiefer Castle is a local landmark. Most residential areas are easily accessible from Highway 75.</p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Where We Serve Papers in Kiefer</h2>
            <p className="text-indigo-100">Local coverage across Creek County</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Downtown Kiefer</h3>
              <p className="text-gray-700 text-sm">Small downtown district along Division Street and Highway 75. Town offices at 401 W Division St, local businesses, and the historic Kiefer Castle area. Street parking available.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Bridge Crane Specialists Area</h3>
              <p className="text-gray-700 text-sm">Industrial area around Bridge Crane Specialists (401 W Division St). Major employer with industrial facility. Employee shift changes require timing for effective service.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">North Kiefer</h3>
              <p className="text-gray-700 text-sm">Residential areas north of Division Street toward Sapulpa. Mix of single-family homes and small properties along Highway 75 corridor.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">South Kiefer / Highway 75 Corridor</h3>
              <p className="text-gray-700 text-sm">Residential areas south of downtown toward Glenpool along Highway 75. Easy access from main highway. Mix of homes and small acreage properties.</p>
            </div>
          </div>
        </section>

        {/* Major Employers */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Major Employers & Workplace Service</h2>
            <p className="text-emerald-100">Serving businesses and employees throughout Kiefer</p>
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
            <Link href="/service-areas/sapulpa" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Sapulpa →</h3>
              <p className="text-gray-600 text-sm mt-1">8 miles west. Creek County seat on historic Route 66.</p>
            </Link>
            <Link href="/service-areas/glenpool" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Glenpool →</h3>
              <p className="text-gray-600 text-sm mt-1">5 miles south. Our base location with fastest response times.</p>
            </Link>
            <Link href="/service-areas/jenks" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Jenks →</h3>
              <p className="text-gray-600 text-sm mt-1">10 miles north. Home of the Oklahoma Aquarium.</p>
            </Link>
            <Link href="/service-areas/bixby" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Bixby →</h3>
              <p className="text-gray-600 text-sm mt-1">12 miles southeast. "Garden Spot of Oklahoma."</p>
            </Link>
            <Link href="/service-areas/tulsa" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Tulsa →</h3>
              <p className="text-gray-600 text-sm mt-1">20 miles north. Tulsa County seat and major metro center.</p>
            </Link>
            <Link href="/service-areas/mounds" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Mounds →</h3>
              <p className="text-gray-600 text-sm mt-1">12 miles south. Small Creek County community.</p>
            </Link>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><DollarSign className="h-6 w-6" /> Pricing for Kiefer</h2>
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
                <p className="text-xs text-gray-400 mt-2">Immediate deployment · Kiefer coverage</p>
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
            <h2 className="text-2xl font-bold mb-1">Kiefer Process Serving FAQ</h2>
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
            <h2 className="text-3xl font-bold mb-3">Emergency Process Service in Kiefer?</h2>
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
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6" /> Kiefer Service Area Map</h2>
            <p className="text-blue-100">GPS-verified coverage throughout Creek County</p>
          </div>
          <div className="p-8">
            <GoogleMapsEmbed
              countyName="Creek County"
              cityName="Kiefer"
              state="Oklahoma"
              title="Kiefer Process Server Service Area"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl shadow-lg">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Serve Papers in Kiefer?</h2>
            <p className="text-xl mb-6 text-blue-100">GPS-tracked, notarized, court-ready — home of Bridge Crane Specialists and Kiefer Castle.</p>
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
        url="https://justlegalsolutions.org/service-areas/kiefer"
        title="Process Server Kiefer, OK | Licensed Creek County Legal Service"
        description="Licensed process server in Kiefer, Oklahoma. GPS-tracked and court-ready. Call (539) 367-6832."
        faqItems={pageFAQs.slice(0, 4)}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Service Areas', item: 'https://justlegalsolutions.org/service-areas' },
          { name: 'Kiefer', item: 'https://justlegalsolutions.org/service-areas/kiefer' },
        ]}
      />
    </div>
  );
}
