import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Process Server Broken Arrow, OK | Licensed Legal Document Service',
  description: 'Licensed process server in Broken Arrow, Oklahoma. GPS-tracked and court-ready. Call (539) 367-6832.',
  keywords: 'process server Broken Arrow OK, serve papers Broken Arrow Oklahoma, legal document service Broken Arrow, subpoena service Broken Arrow',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Process Server Broken Arrow, OK | Licensed Legal Document Service',
    description: 'Licensed process server in Broken Arrow, Oklahoma. GPS-tracked and court-ready. Call (539) 367-6832.',
    url: 'https://justlegalsolutions.org/service-areas/broken-arrow',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/service-areas/broken-arrow',
  },
};

const pageFAQs: { question: string; answer: string }[] = [
  { question: 'Do Broken Arrow cases file in Broken Arrow?', answer: 'No. District cases file at the Tulsa County Courthouse in Tulsa. Broken Arrow Municipal Court handles city ordinance violations only.' },
  { question: 'Can you serve FlightSafety employees?', answer: 'Yes. Workplace service at FlightSafety and other aerospace employers is available; facility security may require advance notice.' },
  { question: 'Do all Tulsa County cases file at the Tulsa County Courthouse?', answer: 'Yes. All district-court civil, family, and felony cases for Tulsa County residents file at the Tulsa County Courthouse. Municipal cases are handled separately at the local municipal court.' },
  { question: 'Is same-day process service available?', answer: 'Yes. Our same-day service can cover Broken-Arrow and all surrounding areas. Call before noon for best scheduling.' },
  { question: 'Do you notarize affidavits of service?', answer: 'Yes. Every completed service includes a signed, notarized Affidavit of Service prepared to Oklahoma Statutes §12-2004 standards.' },
];

const employers: { name: string; address: string; industry: string; notes: string }[] = [
  { name: 'FlightSafety International', address: '', industry: 'Aerospace', notes: 'Flight simulation and training.' },
  { name: 'Broken Arrow Public Schools', address: '', industry: 'Education', notes: 'One of the largest districts in Oklahoma.' },
  { name: 'City of Broken Arrow', address: '', industry: 'Government', notes: 'Municipal operations.' },
  { name: 'Northeastern State University', address: '', industry: 'Higher Education', notes: 'Broken Arrow campus.' },
  { name: 'Walmart Supercenter', address: '', industry: 'Retail', notes: 'Multiple locations.' },
  { name: 'St. John Broken Arrow', address: '', industry: 'Healthcare', notes: 'Hospital campus.' },
];

export default function BrokenArrowProcessServerPage() {
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
            <span className="text-white font-medium">Broken Arrow</span>
          </nav>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            Licensed Professional
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Process Server<br className="hidden md:block" /> Broken Arrow, Oklahoma
          </h1>
          <div className="flex flex-wrap gap-4 mb-4 text-blue-200 text-sm">
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> Population: 118,180</span>
            
            <span>🚗 95 min from OKC</span>
            <span>🚗 15 min from Tulsa</span>
          </div>
          <p className="text-lg text-blue-100 mb-4 italic">Oklahoma's fourth-largest city and a major aerospace manufacturing hub..</p>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            Licensed process server in Broken Arrow, Oklahoma. GPS-tracked and court-ready. Call (539) 367-6832.
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
            <p className="text-slate-300">Broken Arrow, Oklahoma</p>
          </div>
          <div className="p-8 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="font-semibold text-lg text-gray-900">Tulsa County Courthouse</p>
              <p className="text-gray-700">500 S Denver Ave, Tulsa, OK 74103</p>
              <p className="text-gray-600 text-sm mt-1">📞 (918) 596-5000</p>
              <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 4:30 PM</p>
              
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="font-semibold text-gray-800">Municipal Court</p>
              <p className="text-gray-700 text-sm">Broken Arrow Municipal Court</p>
              <p className="text-gray-600 text-sm">2302 S 1st Pl, Broken Arrow, OK 74012</p>
              <p className="text-gray-600 text-sm">📞 (918) 259-2462</p>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="font-semibold text-orange-800">Local Service Notes</p>
              <p className="text-orange-700 text-sm">FlightSafety and aerospace facilities may require security coordination.</p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Where We Serve Papers in Broken Arrow</h2>
            <p className="text-indigo-100">Local coverage across Tulsa County</p>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Downtown Broken Arrow</h3>
              <p className="text-gray-700 text-sm">Historic Rose District with shops and municipal offices.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">South Broken Arrow</h3>
              <p className="text-gray-700 text-sm">Aerospace corridor near FlightSafety.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">East Broken Arrow</h3>
              <p className="text-gray-700 text-sm">Rapidly growing subdivisions east of Aspen Ave.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">West Broken Arrow</h3>
              <p className="text-gray-700 text-sm">Established neighborhoods near Tulsa.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Northeast Broken Arrow</h3>
              <p className="text-gray-700 text-sm">Newer gated communities and golf subdivisions.</p>
            </div>
          </div>
        </section>

        {employers.length > 0 && (
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Major Employers &amp; Workplace Service</h2>
            <p className="text-emerald-100">Serving businesses and employees in Broken Arrow</p>
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
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><DollarSign className="h-6 w-6" /> Pricing for Broken Arrow</h2>
            <p className="text-blue-100">Flat rates — no hidden mileage fees in Tulsa County</p>
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
                <p className="text-xs text-gray-400 mt-2">Immediate deployment · Broken Arrow coverage</p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/pricing" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow">
                <DollarSign className="h-4 w-4" /> View Current Rates &amp; Full Pricing
              </Link>
              <p className="text-xs text-gray-500 mt-3">All rates are flat — no hidden mileage fees in Tulsa County.</p>
            </div>
          </div>
        </section>

        {pageFAQs.length > 0 && (
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Broken Arrow FAQ</h2>
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
            <h2 className="text-3xl font-bold mb-3">Emergency Process Service in Broken Arrow?</h2>
            <p className="text-xl mb-6 text-red-100">Available 24/7 for urgent legal document service across Tulsa County</p>
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
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6" /> Broken Arrow Service Area Map</h2>
            <p className="text-blue-100">GPS-verified coverage throughout Tulsa County</p>
          </div>
          <div className="p-8">
            <GoogleMapsEmbed
              countyName="Tulsa County"
              cityName="Broken Arrow"
              state="Oklahoma"
              title="Broken Arrow Process Server Service Area"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl shadow-lg">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Serve Papers in Broken Arrow?</h2>
            <p className="text-xl mb-6 text-blue-100">GPS-tracked, notarized, court-ready — in Tulsa County.</p>
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
        url="https://justlegalsolutions.org/service-areas/broken-arrow"
        title="Process Server Broken Arrow, OK | Licensed Legal Document Service"
        description="Licensed process server in Broken Arrow, Oklahoma. GPS-tracked and court-ready. Call (539) 367-6832."
        faqItems={pageFAQs.slice(0, 4)}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Service Areas', item: 'https://justlegalsolutions.org/service-areas' },
          { name: 'Broken Arrow', item: 'https://justlegalsolutions.org/service-areas/broken-arrow' },
        ]}
      />
    </div>
  );
}
