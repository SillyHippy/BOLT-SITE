import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: "Process Server Stillwater, OK | OSU & Payne County",
  description: "Licensed process server in Stillwater, Oklahoma. Serving Payne County, Oklahoma State University, and surrounding areas. Rush and same-day service available.",
  keywords: "process server Stillwater OK, legal document service Stillwater Oklahoma, serve papers Stillwater, court documents Stillwater, subpoena service Stillwater, licensed process server Oklahoma",
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Process Server Stillwater, OK | OSU & Payne County",
    description: "Licensed process server in Stillwater, Oklahoma. Serving Payne County, Oklahoma State University, and surrounding areas. Rush and same-day service available.",
    url: "https://justlegalsolutions.org/service-areas/stillwater",
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: "https://justlegalsolutions.org/service-areas/stillwater",
  },
};

export default function StillwaterProcessServerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <nav className="text-sm mb-6 text-blue-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Stillwater</span>
          </nav>
          <div className="inline-block bg-yellow-500 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
            Licensed Oklahoma Process Server
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">Process Server Stillwater, OK | OSU & Payne County</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl">Licensed process server in Stillwater, Oklahoma. Serving Payne County, Oklahoma State University, and surrounding areas. Rush and same-day service available.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:5393676832" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg text-center transition-colors shadow-lg text-lg">
              Call (539) 367-6832
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-lg text-center transition-colors">
              Get a Free Quote
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-blue-200 text-sm">
            <span>Standard from $60</span>
            <span>Rush $150</span>
            <span>Same-Day $265</span>
            <span>GPS-tracked</span>
            <span>Court-ready affidavits</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-12">
        <section className="bg-white rounded-xl shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Process Serving in Stillwater, Oklahoma</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Just Legal Solutions provides licensed, GPS-verified process serving throughout Stillwater, Oklahoma. We serve subpoenas, summonses, divorce papers, eviction notices, protective orders, and civil litigation documents throughout the area. Our servers verify addresses through county assessor records and USPS data, and deliver notarized, court-ready affidavits after every serve.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are licensed by the State of Oklahoma (PSL-2026-2), bonded, and have completed over 156 verified five-star serves across northeastern, central, and western Oklahoma.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Pricing for Stillwater</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Service Level</th>
                  <th className="px-4 py-3 text-left">Turnaround</th>
                  <th className="px-4 py-3 text-left">Price</th>
                  <th className="px-4 py-3 text-left">What's Included</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold">Standard Service</td>
                  <td className="px-4 py-3">2-3 business days</td>
                  <td className="px-4 py-3 font-bold text-blue-700">$60</td>
                  <td className="px-4 py-3">3 attempts, notarized affidavit, GPS documentation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Rush Service</td>
                  <td className="px-4 py-3">Next business day</td>
                  <td className="px-4 py-3 font-bold text-blue-700">$150</td>
                  <td className="px-4 py-3">Priority same-day attempt, same features</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold">Same-Day Service</td>
                  <td className="px-4 py-3">Within 24 hours</td>
                  <td className="px-4 py-3 font-bold text-blue-700">$265</td>
                  <td className="px-4 py-3">Immediate deployment, all features</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Stillwater FAQ</h2>
          <div className="space-y-5">
                <div className="border-b border-gray-200 pb-5 last:border-0">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">How do you handle OSU student housing turnover?</h3>
                  <p className="text-gray-600">Student turnover is one of the biggest challenges in Stillwater. We verify current occupancy through apartment office records (where permitted), USPS forwarding data, and Oklahoma voter-registration records before attempting service. If a student has moved out of a dorm or off-campus apartment, we trace their forwarding address.</p>
                </div>
                <div className="border-b border-gray-200 pb-5 last:border-0">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Can you serve papers at Boone Pickens Stadium or Gallagher-Iba Arena during events?</h3>
                  <p className="text-gray-600">Yes, but we plan strategically. Game days create massive traffic and access restrictions around Boone Pickens Stadium and Gallagher-Iba Arena. We typically serve at off-campus residences before or after events, or we coordinate with OSU HR for workplace service during standard business hours.</p>
                </div>
                <div className="border-b border-gray-200 pb-5 last:border-0">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">How do Payne County courthouse filing procedures work?</h3>
                  <p className="text-gray-600">Payne County District Court (606 S Husband St) handles all civil, family, and criminal filings for Stillwater and Payne County. We verify case numbers, judge assignments, and filing divisions before every serve to eliminate rejections.</p>
                </div>
                <div className="border-b border-gray-200 pb-5 last:border-0">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Is same-day service available during OSU football weekends?</h3>
                  <p className="text-gray-600">Same-Day service ($265) is available even during football weekends, but we recommend ordering as early as possible. Traffic and parking congestion around campus can add time, so morning orders have the best chance of same-day completion.</p>
                </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link href="/oklahoma-process-server-faq" className="text-blue-600 hover:underline text-sm">
              View our complete Oklahoma Process Server FAQ
            </Link>
          </div>
        </section>

        <section className="bg-blue-50 rounded-xl p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Resources</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <Link href="/service-areas" className="bg-white p-3 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition text-center">All Service Areas</Link>
            <Link href="/tulsa-process-server" className="bg-white p-3 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition text-center">Tulsa Process Server</Link>
            <Link href="/oklahoma-process-server-laws" className="bg-white p-3 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition text-center">Oklahoma Process Serving Laws</Link>
            <Link href="/oklahoma-process-server-faq" className="bg-white p-3 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition text-center">Process Server FAQ</Link>
            <Link href="/pricing" className="bg-white p-3 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition text-center">Pricing Guide</Link>
            <Link href="/contact" className="bg-white p-3 rounded-lg text-blue-700 font-medium hover:bg-blue-100 transition text-center">Contact Us</Link>
          </div>
        </section>

        <section className="bg-blue-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Need a Process Server in </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Licensed, bonded, and GPS-verified. Flat-rate pricing that covers every address in Stillwater, Oklahoma.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:5393676832" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg transition-colors text-lg">Call (539) 367-6832</a>
            <Link href="/contact" className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors">Get a Free Quote Online</Link>
          </div>
        </section>
      </div>

      <UnifiedSchema
        pageType="location"
        url="https://justlegalsolutions.org/service-areas/stillwater"
        title="Process Server Stillwater, OK | OSU & Payne County"
        description="Licensed process server in Stillwater, Oklahoma. Serving Payne County, Oklahoma State University, and surrounding areas. Rush and same-day service available."
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
      />
    </div>
  );
}