import { Metadata } from 'next';
import { CountyRelatedLinks } from '@/components/ui/county-related-links';
import Link from 'next/link';
import { Phone, FileText, MapPin, DollarSign, AlertCircle, Calendar, Users, Building } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import GoogleMapsEmbed from '@/components/ui/google-maps-embed';
import { getCountyData } from '@/lib/county-data';
import { generateCountyFAQs } from '@/lib/markdown-utils';

export const metadata: Metadata = {
  title: 'Process Server Seminole County, OK | Wewoka',
  description: 'Licensed process server in Seminole County, Oklahoma. Serving Wewoka, Seminole, and all surrounding communities.',
  keywords: 'process server Seminole County Oklahoma, Seminole County process server, serve papers Seminole County, legal document service Seminole County',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-085-counties-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Oklahoma county process serving — licensed and bonded service statewide',
    }],
    title: 'Process Server Seminole County, OK | Wewoka',
    description: 'Licensed process server in Seminole County, Oklahoma. Serving Wewoka, Seminole, and all surrounding communities.',
    url: 'https://justlegalsolutions.org/counties/seminole-county',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Seminole County, OK | Wewoka',
    description: 'Licensed process server in Seminole County, Oklahoma. Serving Wewoka, Seminole, and all surrounding communities.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-085-counties-hero.webp'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/counties/seminole-county',
  },
};

const COUNTY = getCountyData('seminole-county')!;
const pageFAQs = generateCountyFAQs(COUNTY.countyName, COUNTY.countySeat, COUNTY.courthouseAddress);

const employers: { name: string; address: string; industry: string; notes: string }[] = [
  { name: 'Seminole Nation of Oklahoma', address: 'Wewoka, OK 74884', industry: 'Tribal Government', notes: 'Tribal HR and legal compliance' },
  { name: 'Seminole Public Schools', address: '501 N Timmons St, Seminole, OK 74868', industry: 'Education', notes: '400+ employees' },
  { name: 'Wewoka Public Schools', address: '1020 N Mekusukey Ave, Wewoka, OK 74884', industry: 'Education', notes: '250+ employees' },
  { name: 'City of Wewoka', address: '101 S Wewoka Ave, Wewoka, OK 74884', industry: 'Government', notes: 'Municipal court' },
  { name: 'Seminole County Government', address: '120 S Wewoka Ave, Wewoka, OK 74884', industry: 'Government', notes: 'Courthouse complex' },
  { name: 'Creek Nation Casino – Holdenville', address: 'Holdenville, OK 74848', industry: 'Gaming/Hospitality', notes: 'Regional casino' },
  { name: 'Walmart Supercenter', address: '2401 N Milt Phillips Ave, Seminole, OK 74868', industry: 'Retail', notes: '200+ employees' },
];

export default function SeminoleCountyCountyPage() {
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
            <span className="text-white font-medium">Seminole County</span>
          </nav>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            Licensed Professional
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Process Server<br className="hidden md:block" /> Seminole County, Oklahoma
          </h1>
          <div className="flex flex-wrap gap-4 mb-4 text-blue-200 text-sm">
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> Population: 23,556</span>
            <span className="flex items-center gap-1"><Building className="h-4 w-4" /> County Seat: Wewoka</span>
            
            
          </div>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            {COUNTY.heroLead}
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
            <p className="text-slate-300">Judicial District 22, Seminole County</p>
          </div>
          <div className="p-8 space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="font-semibold text-lg text-gray-900">Seminole County Courthouse</p>
              <p className="text-gray-700">Courthouse, Wewoka, OK 74884</p>
              
              <p className="text-gray-500 text-xs mt-1">🕐 Mon-Fri 8:00 AM - 4:30 PM</p>
              <p className="text-gray-600 mt-2 text-sm">Serves: Wewoka, Seminole, Konawa, Wanette</p>
            </div>
            
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-4">
              <p className="font-semibold text-amber-800">Tribal Jurisdiction Note</p>
              <p className="text-amber-700 text-sm">McGirt v. Oklahoma ruling and tribal jurisdiction may apply to criminal matters in this area. We coordinate with tribal courts and recommend confirming venue with your attorney.</p>
            </div>
            
          </div>
        </section>

        

        {employers.length > 0 && (
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Major Employers &amp; Workplace Service</h2>
            <p className="text-emerald-100">Serving businesses and employees in Seminole County</p>
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
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><DollarSign className="h-6 w-6" /> Pricing for Seminole County</h2>
            <p className="text-blue-100">Transparent tiered pricing for Seminole County, full rates on our pricing page</p>
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
                <p className="text-xs text-gray-400 mt-2">Immediate deployment · Seminole County coverage</p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/pricing" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow">
                <DollarSign className="h-4 w-4" /> View Current Rates &amp; Full Pricing
              </Link>
              <p className="text-xs text-gray-500 mt-3">Standard, rush, and same-day tiers available in Seminole County. See current rates at /pricing.</p>
            </div>
          </div>
        </section>

        {pageFAQs.length > 0 && (
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
            <h2 className="text-2xl font-bold mb-1">Seminole County FAQ</h2>
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
            <h2 className="text-3xl font-bold mb-3">Emergency Process Service in Seminole County?</h2>
            <p className="text-xl mb-6 text-red-100">Available 24/7 for urgent legal document service across Seminole County</p>
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
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"><MapPin className="h-6 w-6" /> Seminole County Service Area Map</h2>
            <p className="text-blue-100">GPS-verified coverage throughout Seminole County</p>
          </div>
          <div className="p-8">
            <GoogleMapsEmbed
              countyName="Seminole County"
              
              state="Oklahoma"
              title="Seminole County Process Server Service Area"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl shadow-lg">
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Serve Papers in Seminole County?</h2>
            <p className="text-xl mb-6 text-blue-100">GPS-tracked, notarized, and court-ready in Seminole County.</p>
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

        
                <p className="text-sm text-gray-500 mt-6 mb-2">
          <time dateTime="2026-07-08">Last reviewed: July 8, 2026</time> by Just Legal Solutions
        </p>
        {/* CountyRelatedLinks */}
        <CountyRelatedLinks countySlug="seminole-county" countyName="Seminole County" />

        <div className="text-center py-4">
          <Link href="/counties" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
            ← Browse All Counties
          </Link>
        </div>

      </div>

      <UnifiedSchema
        pageType="location"
        image="https://justlegalsolutions.org/images/jls-logo.webp"
        url="https://justlegalsolutions.org/counties/seminole-county"
        title="Process Server Seminole County, OK | Wewoka"
        description="Licensed process server in Seminole County, Oklahoma. Serving Wewoka, Seminole, and all surrounding communities."
        faqItems={pageFAQs.slice(0, 6)}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Counties', item: 'https://justlegalsolutions.org/counties' },
          { name: 'Seminole County', item: 'https://justlegalsolutions.org/counties/seminole-county' },
        ]}
      />
    </div>
  );
}

