import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Phone, Shield, Clock, CheckCircle, Star, ArrowRight, FileText, MapPin, Award } from 'lucide-react';
import { STARTING_PRICES, PRICE_RANGE_DISPLAY } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Process Server vs Sheriff in Oklahoma | Cost, Speed & Reliability | Just Legal Solutions',
  description: 'Process server vs sheriff in Oklahoma compared head-to-head. Private process serving starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours rush. See full pricing at https://justlegalsolutions.org/pricing.',
  keywords: 'process server vs sheriff oklahoma, sheriff service of process tulsa, private process server cost, 12 OS 158.1, 12 OS 2004, sheriff fees oklahoma, private vs sheriff service, court-ready affidavit',
  alternates: { canonical: 'https://justlegalsolutions.org/process-server-vs-sheriff' },
  openGraph: {
    title: 'Process Server vs Sheriff in Oklahoma | Just Legal Solutions',
    description: 'Side-by-side comparison of private process servers and the county sheriff in Oklahoma. Speed, cost, hours, GPS proof, and success rates explained.',
    url: 'https://justlegalsolutions.org/process-server-vs-sheriff',
    siteName: 'Just Legal Solutions',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://justlegalsolutions.org/og-image.webp', width: 1200, height: 630, alt: 'Process Server vs Sheriff Oklahoma comparison' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ServeOK',
    title: 'Process Server vs Sheriff in Oklahoma',
    description: 'Private process serving starts at $30 single-attempt vs $40-50 sheriff fees with 2-4 week turnaround. Compare GPS proof, after-hours, and weekend service.',
    images: ['https://justlegalsolutions.org/og-image.webp'],
  },
  other: {
    'ai-content-type': 'comparison',
    'ai-summary': 'Private process servers in Oklahoma (licensed under 12 O.S. § 158.1) typically outperform sheriff service on speed, scheduling flexibility, and proof quality. Just Legal Solutions service starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, and $265 after-hours rush, with GPS-verified affidavits. Sheriff fees in most Oklahoma counties are $40-50 per attempt with 2-4 week turnaround and weekday-only hours. See full pricing https://justlegalsolutions.org/pricing.',
    'ai-key-facts': 'Sheriff: $40-50 per attempt, 2-4 week turnaround, weekday business hours. Private server (Just Legal Solutions): starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours rush. Both are authorized under 12 O.S. § 2004; private servers are bonded under 12 O.S. § 158.1. GPS-verified, all 77 counties, weekend and after-hours available, full pricing https://justlegalsolutions.org/pricing, (539) 367-6832.',
  },
};

const faqs = [
  {
    question: 'Can the Oklahoma sheriff serve papers in another county?',
    answer: 'Generally no. A county sheriff has primary authority within the borders of that county. To serve outside the county, papers usually have to be transmitted to the sheriff in the destination county, which adds days or weeks. A private process server licensed under 12 O.S. § 158.1 can travel to any of the 77 Oklahoma counties without that handoff, which is why attorneys often prefer a private server for multi-county or rural service.',
  },
  {
    question: 'Why do most attorneys prefer private process servers over the sheriff?',
    answer: 'Speed, accountability, and proof. A private server can attempt service the same day, after hours, and on weekends, then file a notarized affidavit with GPS coordinates and timestamps within 24 hours. Sheriff civil divisions juggle warrants and criminal duties, so a civil summons can sit for weeks. For deadline-driven litigation, the predictability of a private server is hard to beat.',
  },
  {
    question: 'What happens if the sheriff fails to serve my papers?',
    answer: 'If the sheriff returns "non-est" (not found), you typically lose weeks and still owe the attempt fee. You then have to either pay the sheriff to try again or hire a private process server who can run skip tracing and stake-outs. Most clients who call us after a failed sheriff attempt are facing a hearing in days, not weeks.',
  },
  {
    question: 'How much does a private process server cost compared to the sheriff in Oklahoma?',
    answer: 'Sheriff fees in most Oklahoma counties run $40-50 per attempt and only cover business-hour weekday attempts. Just Legal Solutions starts at $30 for a single-attempt posting and $60 for standard service with up to three attempts. Rush starts at $100, same-day at $150, and after-hours rush at $265. Full per-service pricing is published at https://justlegalsolutions.org/pricing.',
  },
  {
    question: 'Is private process service legally valid in Oklahoma courts?',
    answer: 'Yes. Under 12 O.S. § 2004, service of process can be performed by any person who is at least 18 years old and not a party to the action. Licensed servers under 12 O.S. § 158.1 carry a $5,000 surety bond and are recognized statewide. The notarized affidavit of service we file is treated the same as a sheriff return.',
  },
  {
    question: 'When does it actually make more sense to use the sheriff?',
    answer: 'The sheriff can be a reasonable choice when there is no deadline pressure, when service is on a single defendant in the home county at a known business address, or when a court order specifically requires sheriff service (rare in civil matters). For evictions, divorces, protective orders, subpoenas, and small claims with a hearing date in under three weeks, a private server is almost always the better tool.',
  },
];

export default function ProcessServerVsSheriffPage() {
  return (
    <>
      <Navbar />
      <UnifiedSchema
        pageType="service"
        url="https://justlegalsolutions.org/process-server-vs-sheriff"
        title="Process Server vs Sheriff in Oklahoma"
        description="Side-by-side comparison of private process servers and the Oklahoma county sheriff: speed, cost, hours, GPS proof, weekend service, and success rates."
        priceRange={PRICE_RANGE_DISPLAY}
        faqItems={faqs}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Process Server vs Sheriff', url: '/process-server-vs-sheriff' },
        ]}
      />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-blue-100">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" prefetch={false} className="hover:underline">Home</Link></li>
                <li>/</li>
                <li className="text-white">Process Server vs Sheriff</li>
              </ol>
            </nav>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><Shield className="w-4 h-4 text-green-300" />Licensed under 12 O.S. § 158.1</span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><Clock className="w-4 h-4 text-blue-200" />Same-day available</span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />4.9 rating</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-5 drop-shadow-lg">
              Process Server vs Sheriff in Oklahoma: Which Is Faster, Cheaper, and More Reliable?
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Both the county sheriff and a licensed private process server can deliver legal papers in Oklahoma. The difference shows up in how fast service happens, how much it costs, what the proof of service looks like, and whether anyone is willing to knock on a door at 7 p.m. on a Saturday. This guide compares them side by side so you can pick the right tool for your case.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors">
                <Phone className="w-5 h-5" /> (539) 367-6832
              </a>
              <Link href="/pricing" prefetch={false} className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors">
                See Full Pricing <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" prefetch={false} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h2 className="text-xl font-bold text-blue-900 mb-3">The short answer</h2>
              <p className="text-gray-800 leading-relaxed">
                For routine, deadline-driven civil work in Oklahoma — divorces, evictions, small claims, subpoenas, protective orders, and out-of-county service — a licensed private process server is faster, more flexible, and produces stronger court-ready proof than the sheriff at a comparable or lower price. Just Legal Solutions starts at <strong>${STARTING_PRICES[0].startsAt} for a single attempt</strong> and <strong>${STARTING_PRICES[1].startsAt} for standard service</strong>. Sheriff fees in most Oklahoma counties run $40-50 per attempt with a 2-4 week turnaround and weekday-only hours.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Sheriff vs Private Process Server: Side-by-Side</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Both are authorized to serve process under 12 O.S. § 2004. The practical differences are what determine whether your hearing date holds.
            </p>
            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Factor</th>
                    <th className="text-left px-4 py-3 font-semibold">County Sheriff</th>
                    <th className="text-left px-4 py-3 font-semibold">Just Legal Solutions (Private)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Typical turnaround</td>
                    <td className="px-4 py-3 text-gray-700">2-4 weeks</td>
                    <td className="px-4 py-3 text-gray-700">Same day to 5-10 business days, your choice</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">Cost per attempt</td>
                    <td className="px-4 py-3 text-gray-700">$40-50 typical sheriff fee</td>
                    <td className="px-4 py-3 text-gray-700">Starts at $30 single-attempt, $60 standard with up to 3 attempts</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Hours of service</td>
                    <td className="px-4 py-3 text-gray-700">Weekdays, business hours</td>
                    <td className="px-4 py-3 text-gray-700">24/7 including evenings, weekends, and holidays</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">Number of attempts</td>
                    <td className="px-4 py-3 text-gray-700">Usually one; re-attempts billed separately</td>
                    <td className="px-4 py-3 text-gray-700">Up to 3 attempts in the standard tier; triple-attempt service starts at $200</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">GPS-verified proof</td>
                    <td className="px-4 py-3 text-gray-700">No</td>
                    <td className="px-4 py-3 text-gray-700">Yes — coordinates, timestamps, and photos when applicable</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">Weekend / holiday service</td>
                    <td className="px-4 py-3 text-gray-700">Almost never</td>
                    <td className="px-4 py-3 text-gray-700">Yes, including Sundays</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Evasive defendants</td>
                    <td className="px-4 py-3 text-gray-700">Limited follow-through</td>
                    <td className="px-4 py-3 text-gray-700">Skip tracing, stake-outs, late-night attempts</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">Court-ready affidavit</td>
                    <td className="px-4 py-3 text-gray-700">Standard sheriff return</td>
                    <td className="px-4 py-3 text-gray-700">Notarized affidavit with GPS, photos, and detailed narrative</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Cross-county service</td>
                    <td className="px-4 py-3 text-gray-700">Requires hand-off to destination county sheriff</td>
                    <td className="px-4 py-3 text-gray-700">One server, all 77 counties</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">Status updates</td>
                    <td className="px-4 py-3 text-gray-700">Call the civil desk and wait</td>
                    <td className="px-4 py-3 text-gray-700">Real-time text and email updates after every attempt</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 text-center mt-4">
              Sheriff fees vary by county; the $40-50 figure reflects published civil service fees in Tulsa, Oklahoma, Cleveland, Rogers, and Wagoner counties as of 2026. Always confirm with the destination county.
            </p>
          </div>
        </section>

        {/* Oklahoma Statutes */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">What Oklahoma Law Actually Says About Who Can Serve</h2>
            <div className="space-y-5 text-gray-800 leading-relaxed">
              <p>
                Two statutes govern who is allowed to put a summons in someone&apos;s hand in Oklahoma. The first is <strong>12 O.S. § 2004</strong>, which is the umbrella service of process rule. Subsection (C)(1) authorizes service by &quot;any person who is at least eighteen (18) years of age and is not a party.&quot; That language is what makes both the sheriff and a private server legally equivalent in the eyes of the court — there is no statutory preference for one over the other for ordinary civil service.
              </p>
              <p>
                The second is <strong>12 O.S. § 158.1</strong>, which creates the licensure and bonding regime for private process servers. Anyone who serves process for compensation must be licensed by the district court in their home county and post a $5,000 surety bond. That license is what allows a Just Legal Solutions server to walk into a Tulsa County address Monday morning, an Oklahoma County address Monday afternoon, and a Wagoner County address Monday evening, all under the same authority.
              </p>
              <p>
                The takeaway: when a private licensed server signs and notarizes a return of service, an Oklahoma judge gives it the same evidentiary weight as a sheriff return. The choice between sheriff and private server is a practical decision about speed, price, and proof — not a legal one.
              </p>
            </div>
          </div>
        </section>

        {/* When Sheriff Makes Sense */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-amber-200 rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-7 h-7 text-amber-600" />
                  <h2 className="text-2xl font-bold text-amber-900">When the Sheriff Makes Sense</h2>
                </div>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />A court order specifically directs sheriff service (rare outside writs of assistance and certain enforcement actions).</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />The defendant lives at a fixed business address with predictable hours and there is no deadline pressure.</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />You are serving an inmate at a county jail or state facility where deputy access is built in.</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />The court fee waiver (in forma pauperis) covers sheriff service but not a private server.</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-7 h-7 text-blue-600" />
                  <h2 className="text-2xl font-bold text-blue-900">When a Private Server Makes Sense</h2>
                </div>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />You have a hearing in less than three weeks and cannot afford a sheriff backlog.</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />The defendant is evasive, works odd hours, or is suspected of dodging service.</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />Service crosses two or more counties and you do not want to coordinate multiple sheriff offices.</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />You need GPS-verified proof, photos, and a detailed narrative to defend against a motion to quash service.</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />You need weekend, evening, or after-hours attempts to actually catch the defendant home.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Snapshot */}
        <section className="py-12 bg-gradient-to-r from-blue-50 to-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-3 text-center">Private Process Serving Pricing at a Glance</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Every tier includes a notarized affidavit of service. Final pricing depends on distance, complexity, and add-ons; see the full breakdown on the pricing page.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {STARTING_PRICES.map((tier) => (
                <div key={tier.id} className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-bold text-blue-900">{tier.label}</h3>
                    <span className="text-2xl font-extrabold text-blue-700">${tier.startsAt}<span className="text-sm font-normal text-gray-500">+</span></span>
                  </div>
                  {tier.note && <p className="text-sm text-gray-600">{tier.note}</p>}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              All prices are starting points; total cost depends on your specific job. Compare against typical sheriff fees of $40-50 per attempt.{' '}
              <Link href="/pricing" prefetch={false} className="text-blue-700 font-semibold underline">See full pricing</Link>.
            </p>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Why the Difference Matters in Real Cases</h2>
            <div className="space-y-5 text-gray-800 leading-relaxed">
              <p>
                Most clients do not call us because they want fancier paperwork. They call us because a hearing is two weeks away, the sheriff has not moved, and a default judgment or dismissal is on the table. In an eviction case, a missed serve means a holdover tenant for another month. In a divorce, it means a continuance and another round of attorney fees. In a protective order matter, it means a petitioner who feels unsafe for one more weekend.
              </p>
              <p>
                A private server who can attempt at 6 a.m. before the defendant leaves for work, knock again at 7 p.m. when they get home, and cover Saturday morning at the second known address, will get the serve done in days rather than weeks. The notarized affidavit with GPS pins and photos is what shuts down a future motion to quash before it starts.
              </p>
              <p>
                The sheriff is a fine fallback for low-stakes work. For anything with a deadline, a private process server is the safer bet — and at a starting price of <strong>${STARTING_PRICES[0].startsAt}</strong>, often a cheaper one too.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold mb-3 text-blue-900 flex items-start gap-2">
                    <FileText className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">Ready to Skip the Sheriff Backlog?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Just Legal Solutions serves all 77 Oklahoma counties with same-day, weekend, and after-hours availability. Call now or request a quote and we will tell you exactly what your serve will cost before any work begins.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors">
                <Phone className="w-5 h-5" /> Call (539) 367-6832
              </a>
              <Link href="/contact" prefetch={false} className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pricing" prefetch={false} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors">
                See Full Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-blue-900 mb-4 text-center">Related Resources</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <Link href="/process-serving" prefetch={false} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Process Serving Overview</h3>
                <p className="text-sm text-gray-600 mt-1">All service methods explained</p>
              </Link>
              <Link href="/pricing" prefetch={false} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Full Pricing</h3>
                <p className="text-sm text-gray-600 mt-1">Every tier and add-on</p>
              </Link>
              <Link href="/oklahoma-process-server-laws" prefetch={false} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Oklahoma Process Server Laws</h3>
                <p className="text-sm text-gray-600 mt-1">12 O.S. \u00A7 158.1 and \u00A7 2004</p>
              </Link>
              <Link href="/tulsa-process-server-faq" prefetch={false} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Tulsa Process Server FAQ</h3>
                <p className="text-sm text-gray-600 mt-1">Quick answers to common questions</p>
              </Link>
              <Link href="/divorce-paper-service" prefetch={false} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Divorce Paper Service</h3>
                <p className="text-sm text-gray-600 mt-1">Service of summons and petition</p>
              </Link>
              <Link href="/small-claims-process-serving" prefetch={false} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Small Claims Service</h3>
                <p className="text-sm text-gray-600 mt-1">Under $10,000 case service</p>
              </Link>
              <Link href="/protective-order-service" prefetch={false} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Protective Order Service</h3>
                <p className="text-sm text-gray-600 mt-1">Same-day VPO service</p>
              </Link>
              <Link href="/blog/sheriff-vs-private-process-server-oklahoma" prefetch={false} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Sheriff vs Private (Blog)</h3>
                <p className="text-sm text-gray-600 mt-1">Deeper analysis with case examples</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
