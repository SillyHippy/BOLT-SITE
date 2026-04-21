import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Wagoner County, OK | Coweta, Wagoner & Fort Gibson',
  description: 'Licensed process server in Wagoner County, Oklahoma. Serving Coweta, Wagoner, Fort Gibson, Okay & all communities. GPS-tracked, court-ready. (539) 367-6832.',
  keywords: 'process server Wagoner County Oklahoma, Wagoner County process server, serve papers Wagoner County, legal document service Wagoner County',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Process Server Wagoner County, OK | Coweta, Wagoner & Fort Gibson',
    description: 'Licensed process server in Wagoner County, Oklahoma. Serving Coweta, Wagoner, Fort Gibson, Okay & all communities. GPS-tracked, court-ready. (539) 367-6832.',
    url: 'https://justlegalsolutions.org/counties/wagoner-county',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/counties/wagoner-county',
  },
};

const pageFAQs: { question: string; answer: string }[] = [
  { question: 'How long does process service take in Wagoner County?', answer: 'Standard service includes a first attempt within 48 hours. Most Wagoner County assignments complete within 3-5 days. We understand many residents work in Tulsa, so we offer evening and weekend attempts when needed.' },
  { question: 'Do you serve papers at Lake Fort Gibson properties?', answer: 'Yes. We serve at lake houses and properties around Fort Gibson Lake. Many lake properties are seasonal, occupied May through September but often vacant in winter. We verify occupancy patterns when possible.' },
  { question: 'What is the difference between Coweta and Wagoner for service?', answer: 'Coweta is larger, newer, and more suburban, with most residents commuting to Tulsa. Wagoner is the historic county seat with a mix of downtown, lake properties, and established neighborhoods. We adjust our approach based on which community we are serving.' },
  { question: 'Do you file proof of service with the Wagoner County Clerk?', answer: 'Yes. We can file affidavits of service with the Wagoner County Clerk at 307 E Cherokee St in Wagoner. Note: the courthouse closes at 4:30 PM, earlier than surrounding counties.' },
  { question: 'How much does it cost to serve someone in Wagoner County?', answer: 'We use tiered pricing in Wagoner County: standard, rush, same-day, and 24/7 emergency service. See current rates on our pricing page at /pricing. Every tier includes GPS-tracked attempts and a notarized affidavit ready for filing with the Wagoner County Clerk at 307 E Cherokee St.' },
  { question: 'Can you handle rush service to Coweta for last-minute court filings?', answer: 'Yes. Coweta is our most frequent Wagoner County destination due to its growth and proximity to Tulsa. Rush and same-day service to Coweta is available daily.' },
];

const employers: { name: string; address: string; industry: string; notes: string }[] = [
  { name: 'Wagoner County Government', address: '307 E Cherokee St, Wagoner, OK 74467', industry: 'Government', notes: 'Courthouse complex' },
  { name: 'Wagoner Public Schools', address: '301 E Cherokee St, Wagoner, OK 74467', industry: 'Education', notes: '600+ employees' },
  { name: 'Coweta Public Schools', address: '111 S Broadway St, Coweta, OK 74429', industry: 'Education', notes: '500+ employees' },
  { name: 'City of Wagoner', address: '200 S Casaver Ave, Wagoner, OK 74467', industry: 'Government', notes: 'Municipal court' },
  { name: 'Fort Gibson State Historic Site', address: '907 N Garrison Ave, Fort Gibson, OK 74434', industry: 'Tourism', notes: 'State-operated' },
  { name: 'Walmart Supercenter', address: '2815 E State Highway 51, Coweta, OK 74429', industry: 'Retail', notes: '200+ employees' },
  { name: 'Coweta High School', address: '14699 S 305th E Ave, Coweta, OK 74429', industry: 'Education', notes: 'Large campus; school activities influence schedules' },
  { name: 'Tulsa Tech - Coweta Campus', address: 'Industrial Park Area, Coweta, OK', industry: 'Education', notes: 'Technical training; varied schedules' },
  { name: 'Battle Creek Golf Club', address: 'Coweta, OK 74429', industry: 'Recreation', notes: 'Club house open during business hours' },
];

export default function WagonerCountyCountyPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <nav className="text-sm mb-6 text-blue-200" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/counties" className="hover:text-white transition-colors">Counties</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Wagoner County</span>
          </nav>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            Licensed Professional
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Process Server<br className="hidden md:block" /> Wagoner County, Oklahoma
          </h1>
          <div className="flex flex-wrap gap-4 mb-4 text-blue-200 text-sm">
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> Population: 80,981</span>
            <span className="flex items-center gap-1"><Building className="h-4 w-4" /> County Seat: Wagoner</span>
            
            
          </div>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            Licensed process server in Wagoner County, Oklahoma. Serving Wagoner, Coweta, and all surrounding communities.
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
            <h2 className="text-2xl font-bold mb-1">Courthouse &amp; Filing Information</h2>
            <p className="text-slate-300">Judicial District 15, Wagoner County</p>
          </div>
          <div className="p-8 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="font-semibold text-lg text-gray-900">Wagoner County Courthouse</p>
              <p className="text-gray-700">307 E Cherokee St, Wagoner, OK 74467</p>
              <p className="text-gray-600 text-sm mt-1">📞 (918) 485-4508</p>
              <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 4:30 PM</p>
              <p className="text-gray-600 mt-2 text-sm">Serves: Coweta, Wagoner, Fort Gibson, Okay, Porter, Hulbert</p>
            </div>
            
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-4">
              <p className="font-semibold text-amber-800">Tribal Jurisdiction Note</p>
              <p className="text-amber-700 text-sm">McGirt v. Oklahoma ruling and tribal jurisdiction may apply to criminal matters in this area. We coordinate with tribal courts and recommend confirming venue with your attorney.</p>
            </div>
            
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Where We Serve in Wagoner County</h2>
            <p className="text-indigo-100">Local expertise across every community</p>
          </div>
          <div className="p-8">
            <p className="text-gray-700 mb-6 max-w-3xl">Wagoner County blends small-town Oklahoma heritage with rapid suburban growth. From the booming bedroom community of Coweta to the lakeside neighborhoods of Fort Gibson, effective service requires understanding the county&apos;s unique commuter patterns and seasonal dynamics.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Coweta, The Growth Center</h3>
                <p className="text-gray-700 text-sm">Once a quiet agricultural town, now one of the fastest-growing communities in eastern Oklahoma. New subdivisions like <strong>Woodlake</strong> and <strong>Summerfield</strong> spread south toward the Arkansas River. Most residents work in Tulsa (25-30 minute commute), daytime residential service often fails.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Wagoner, Historic County Seat</h3>
                <p className="text-gray-700 text-sm">Charming downtown, historic homes, and the <strong>Wagoner County Courthouse</strong> (307 E Cherokee St). <strong>Lake Fort Gibson</strong> borders the northern edge, bringing seasonal population fluctuations. Commercial strip along <strong>U.S. Highway 69</strong>.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Okay &amp; Fort Gibson, Lake Communities</h3>
                <p className="text-gray-700 text-sm">Sitting on the shores of <strong>Fort Gibson Lake</strong>. Mix of year-round residents and seasonal lake house owners. Summer population surges May–September; some lake communities are nearly empty November–March.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Porter &amp; Hulbert, Rural Wagoner County</h3>
                <p className="text-gray-700 text-sm">Porter sits near the Rogers County line with <strong>Route 66</strong> corridor frontage. Hulbert in eastern Wagoner County lies within <strong>Cherokee Nation</strong> jurisdiction. Both feature rural route addressing and agricultural schedules.</p>
              </div>
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="font-semibold text-amber-800">Commuter Strategy</p>
              <p className="text-amber-700 text-sm">Many Wagoner County residents work in Tulsa. Attempting service at 10 AM on a Tuesday often means an empty house. We adjust with evening attempts (after 6 PM), weekend service, and workplace service when residential fails.</p>
            </div>
          </div>
        </section>

        

        {employers.length > 0 && (
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Major Employers &amp; Workplace Service</h2>
            <p className="text-emerald-100">Serving businesses and employees in Wagoner County</p>
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
        )}

        {/* Pricing */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><DollarSign className="h-6 w-6" /> Pricing for Wagoner County</h2>
            <p className="text-blue-100">Transparent tiered pricing for Wagoner County, full rates on our pricing page</p>
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
                <p className="text-xs text-gray-400 mt-2">Immediate deployment · Wagoner County coverage</p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/pricing" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow">
                <DollarSign className="h-4 w-4" /> View Current Rates &amp; Full Pricing
              </Link>
              <p className="text-xs text-gray-500 mt-3">Standard, rush, and same-day tiers available in Wagoner County. See current rates at /pricing.</p>
            </div>
          </div>
        </section>

        {pageFAQs.length > 0 && (
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Wagoner County FAQ</h2>
            <p className="text-teal-100">Local process serving questions answered</p>
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
        )}

        {/* Emergency CTA */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl shadow-lg">
          <div className="p-8 text-center">
            <AlertCircle className="h-14 w-14 mx-auto mb-5 text-red-200" />
            <h2 className="text-3xl font-bold mb-3">Emergency Process Service in Wagoner County?</h2>
            <p className="text-xl mb-6 text-red-100">Available 24/7 for urgent legal document service across Wagoner County</p>
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
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6" /> Wagoner County Service Area Map</h2>
            <p className="text-blue-100">GPS-verified coverage throughout Wagoner County</p>
          </div>
          <div className="p-8">
            <GoogleMapsEmbed
              countyName="Wagoner County"
              
              state="Oklahoma"
              title="Wagoner County Process Server Service Area"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl shadow-lg">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Serve Papers in Wagoner County?</h2>
            <p className="text-xl mb-6 text-blue-100">GPS-tracked, notarized, and court-ready in Wagoner County.</p>
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

        {/* Related Resources */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Nearby Counties & Resources</h2>
            <p className="text-purple-100">Related coverage areas and helpful guides</p>
          </div>
          <div className="p-8 grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">📍 Nearby Counties</h3>
              <ul className="space-y-2">
                <li><Link href="/counties/tulsa-county" className="text-blue-600 hover:underline">Tulsa County</Link></li>
                <li><Link href="/counties/rogers-county" className="text-blue-600 hover:underline">Rogers County</Link></li>
                <li><Link href="/counties/muskogee-county" className="text-blue-600 hover:underline">Muskogee County</Link></li>
                <li><Link href="/service-areas/coweta" className="text-blue-600 hover:underline">Coweta</Link></li>
                <li><Link href="/service-areas/broken-arrow" className="text-blue-600 hover:underline">Broken Arrow</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">📚 Helpful Guides</h3>
              <ul className="space-y-2">
                <li><Link href="/oklahoma-process-server-faq" className="text-blue-600 hover:underline">Process Serving FAQ</Link></li>
                <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">Oklahoma Process Server Laws</Link></li>
                <li><Link href="/oklahoma-process-server-pricing" className="text-blue-600 hover:underline">Pricing Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🏢 Services</h3>
              <ul className="space-y-2">
                <li><Link href="/law-firm-services" className="text-blue-600 hover:underline">Law Firm Services</Link></li>
                <li><Link href="/weekend-emergency" className="text-blue-600 hover:underline">Emergency Service</Link></li>
                <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center py-4">
          <Link href="/counties" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
            ← Browse All Counties
          </Link>
        </div>

      </div>

      <UnifiedSchema
        pageType="location"
        image="https://justlegalsolutions.org/images/jls-logo.webp"
        url="https://justlegalsolutions.org/counties/wagoner-county"
        title="Process Server Wagoner County, OK | Wagoner"
        description="Licensed process server in Wagoner County, Oklahoma. Serving Wagoner, Coweta, and all surrounding communities."
        faqItems={pageFAQs.slice(0, 4)}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Counties', item: 'https://justlegalsolutions.org/counties' },
          { name: 'Wagoner County', item: 'https://justlegalsolutions.org/counties/wagoner-county' },
        ]}
      />
    </div>
  );
}

