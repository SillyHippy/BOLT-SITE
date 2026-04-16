import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Collinsville, OK | Licensed Tulsa & Rogers County Service',
  description: 'Licensed process server in Collinsville, Oklahoma. Located in both Tulsa and Rogers counties. GPS-tracked, court-ready document service. Call (539) 367-6832.',
  keywords: 'process server Collinsville OK, serve papers Collinsville Oklahoma, legal document service Collinsville, subpoena service Collinsville, Collinsville process server, Tulsa County, Rogers County',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Process Server Collinsville, OK | Licensed Tulsa & Rogers County Service',
    description: 'Licensed process server in Collinsville, Oklahoma. Located in both Tulsa and Rogers counties with GPS-tracked, court-ready document service. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/service-areas/collinsville',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/collinsville',
  },
};

const pageFAQs: { question: string; answer: string }[] = [
  { question: 'Which courthouse do I use for Collinsville cases?', answer: 'Collinsville is unique—it spans both Tulsa and Rogers counties. Cases file at Tulsa County Courthouse (500 S Denver Ave) for the Tulsa County portion, and Rogers County Courthouse (200 S Miller Blvd, Claremore) for the Rogers County portion. We can serve documents for either jurisdiction.' },
  { question: 'Do you serve at Collinsville Public Schools?', answer: 'Yes. We regularly serve legal documents at all Collinsville school facilities including the high school, middle school, and elementary campuses. We coordinate with administration for professional, discreet service.' },
  { question: 'How do you handle the Rogers County portion of Collinsville?', answer: 'The eastern part of Collinsville is in Rogers County. We serve these addresses and file documents at the Rogers County Courthouse in Claremore when required. Our coverage spans both counties seamlessly.' },
  { question: 'Is same-day process service available in Collinsville?', answer: 'Yes. Our same-day service covers Collinsville and all surrounding areas in both Tulsa and Rogers counties. Call before noon for best scheduling. We can reach most Collinsville addresses within 40-50 minutes from our base.' },
  { question: 'Do you notarize affidavits of service?', answer: 'Yes. Every completed service includes a signed, notarized Affidavit of Service prepared to Oklahoma Statutes §12-2004 standards, ready for filing at the appropriate county courthouse.' },
];

const employers: { name: string; address: string; industry: string; notes: string }[] = [
  { name: 'Collinsville Public Schools Administration', address: '1109 W Center St, Collinsville, OK 74021', industry: 'Education', notes: 'District administration building. Serves at administration and all school campuses throughout Collinsville.' },
  { name: 'City of Collinsville', address: '106 N 12th St, Collinsville, OK 74021', industry: 'Government', notes: 'City administration and municipal services. Located in downtown Collinsville.' },
  { name: 'Walmart Collinsville', address: '12901 E 96th St N, Owasso, OK 74055', industry: 'Retail', notes: 'Major retail employer near Collinsville border. High-traffic location at 96th Street North.' },
  { name: 'Collinsville High School', address: '2200 W Broadway St, Collinsville, OK 74021', industry: 'Education', notes: 'Main high school campus. Athletic events and activities may affect parking and access.' },
  { name: 'Wilson 6th Grade Center', address: '1716 W Broadway St, Collinsville, OK 74021', industry: 'Education', notes: 'Middle school facility on Broadway. Shared campus area with other school facilities.' },
  { name: 'Collinsville Middle School', address: '1510 W Broadway St, Collinsville, OK 74021', industry: 'Education', notes: 'Middle school campus on Broadway Street. Close to other school facilities.' },
  { name: 'Herald Lower Elementary', address: '1616 W Quincy St, Collinsville, OK 74021', industry: 'Education', notes: 'Elementary school on Quincy Street. Drop-off and pick-up times create traffic patterns.' },
  { name: 'Collinsville Upper Elementary', address: '1512 W Quincy St, Collinsville, OK 74021', industry: 'Education', notes: 'Elementary school adjacent to Middle School on Quincy Street.' },
];

export default function CollinsvilleProcessServerPage() {
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
            <span className="text-white font-medium">Collinsville</span>
          </nav>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            Licensed Professional
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Process Server<br className="hidden md:block" /> Collinsville, Oklahoma
          </h1>
          <div className="flex flex-wrap gap-4 mb-4 text-blue-200 text-sm">
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> Population: 9,196</span>
            <span>🚗 110 min from OKC</span>
            <span>🚗 25 min from Tulsa</span>
          </div>
          <p className="text-lg text-blue-100 mb-4 italic">A unique community spanning both Tulsa and Rogers counties in northeastern Oklahoma.</p>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            Licensed process server in Collinsville, Oklahoma. From the downtown historic district 
            to the school campuses and across both county jurisdictions, we serve legal documents 
            with GPS-tracked, notarized, court-ready affidavits. Call (539) 367-6832.
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
            <p className="text-slate-300">Collinsville, Oklahoma — Tulsa & Rogers Counties</p>
          </div>
          <div className="p-8 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="font-semibold text-lg text-gray-900">Tulsa County Courthouse (West Collinsville)</p>
              <p className="text-gray-700">500 S Denver Ave, Tulsa, OK 74103</p>
              <p className="text-gray-600 text-sm mt-1">📞 (918) 596-5000</p>
              <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 4:30 PM</p>
              <p className="text-gray-600 text-sm mt-3">District court cases for the Tulsa County portion of Collinsville file here.</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <p className="font-semibold text-lg text-gray-900">Rogers County Courthouse (East Collinsville)</p>
              <p className="text-gray-700">200 S Miller Blvd, Claremore, OK 74017</p>
              <p className="text-gray-600 text-sm mt-1">📞 (918) 341-4500</p>
              <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 4:30 PM</p>
              <p className="text-gray-600 text-sm mt-3">District court cases for the Rogers County portion of Collinsville file here.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="font-semibold text-orange-800">Local Service Notes</p>
              <p className="text-orange-700 text-sm">Collinsville spans two counties—addresses west of the county line file in Tulsa, addresses east of the line file in Rogers. We serve both jurisdictions and file at the appropriate courthouse based on the address served.</p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Where We Serve Papers in Collinsville</h2>
            <p className="text-indigo-100">Local coverage across both Tulsa and Rogers counties</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Downtown Collinsville</h3>
              <p className="text-gray-700 text-sm">Historic downtown district along Main Street and Center Street. City Hall at 106 N 12th St, local businesses, and municipal offices. Street parking available throughout downtown.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Collinsville School District</h3>
              <p className="text-gray-700 text-sm">Educational corridor along Broadway and Quincy Streets. High School (2200 W Broadway), Middle School (1510 W Broadway), Wilson 6th Grade (1716 W Broadway), and Elementary campuses (1512 & 1616 W Quincy). High traffic during school hours.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">West Collinsville / Tulsa County</h3>
              <p className="text-gray-700 text-sm">Residential and commercial areas in the Tulsa County portion. Walmart area (12901 E 96th St N) and surrounding neighborhoods. Cases file at Tulsa County Courthouse.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">East Collinsville / Rogers County</h3>
              <p className="text-gray-700 text-sm">Residential areas in the Rogers County portion. Cases file at Rogers County Courthouse in Claremore. We seamlessly handle service and filing for both counties.</p>
            </div>
          </div>
        </section>

        {/* Major Employers */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Major Employers & Workplace Service</h2>
            <p className="text-emerald-100">Serving businesses and employees throughout Collinsville</p>
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
            <Link href="/service-areas/owasso" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Owasso →</h3>
              <p className="text-gray-600 text-sm mt-1">10 miles south. Major suburb with Renaissance Shopping Center.</p>
            </Link>
            <Link href="/service-areas/claremore" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Claremore →</h3>
              <p className="text-gray-600 text-sm mt-1">20 miles east. Rogers County seat and Will Rogers Museum.</p>
            </Link>
            <Link href="/service-areas/skiatook" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Skiatook →</h3>
              <p className="text-gray-600 text-sm mt-1">20 miles west. Osage County town with lake recreation.</p>
            </Link>
            <Link href="/service-areas/tulsa" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Tulsa →</h3>
              <p className="text-gray-600 text-sm mt-1">25 miles south. Tulsa County seat and major metro center.</p>
            </Link>
            <Link href="/service-areas/catoosa" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Catoosa →</h3>
              <p className="text-gray-600 text-sm mt-1">25 miles southeast. Port of Catoosa on the Verdigris River.</p>
            </Link>
            <Link href="/service-areas/broken-arrow" className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="font-semibold text-blue-700">Broken Arrow →</h3>
              <p className="text-gray-600 text-sm mt-1">35 miles south. Rose District and FlightSafety International.</p>
            </Link>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><DollarSign className="h-6 w-6" /> Pricing for Collinsville</h2>
            <p className="text-blue-100">Flat rates — no hidden mileage fees in Tulsa or Rogers County</p>
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
                <p className="text-xs text-gray-400 mt-2">Immediate deployment · Collinsville coverage</p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/pricing" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow">
                <DollarSign className="h-4 w-4" /> View Current Rates & Full Pricing
              </Link>
              <p className="text-xs text-gray-500 mt-3">All rates are flat — no hidden mileage fees in Tulsa or Rogers County.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Collinsville Process Serving FAQ</h2>
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
            <h2 className="text-3xl font-bold mb-3">Emergency Process Service in Collinsville?</h2>
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
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6" /> Collinsville Service Area Map</h2>
            <p className="text-blue-100">GPS-verified coverage throughout Tulsa and Rogers counties</p>
          </div>
          <div className="p-8">
            <GoogleMapsEmbed
              countyName="Tulsa & Rogers Counties"
              cityName="Collinsville"
              state="Oklahoma"
              title="Collinsville Process Server Service Area"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl shadow-lg">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Serve Papers in Collinsville?</h2>
            <p className="text-xl mb-6 text-blue-100">GPS-tracked, notarized, court-ready — in both Tulsa and Rogers counties.</p>
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
        url="https://justlegalsolutions.org/service-areas/collinsville"
        title="Process Server Collinsville, OK | Licensed Tulsa & Rogers County Service"
        description="Licensed process server in Collinsville, Oklahoma. GPS-tracked and court-ready. Call (539) 367-6832."
        faqItems={pageFAQs.slice(0, 4)}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Service Areas', item: 'https://justlegalsolutions.org/service-areas' },
          { name: 'Collinsville', item: 'https://justlegalsolutions.org/service-areas/collinsville' },
        ]}
      />
    </div>
  );
}
