import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Phone, Shield, Clock, CheckCircle, Star, ArrowRight, FileText, MapPin, Award } from 'lucide-react';
import { STARTING_PRICES, PRICE_RANGE_DISPLAY } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Small Claims Process Serving in Oklahoma | Affordable, Court-Ready | Just Legal Solutions',
  description: 'Small claims process serving in Oklahoma starts at $30 single-attempt and $60 standard. Rush starts at $100, same-day starts at $150, after-hours rush starts at $265. Court-ready notarized affidavit included. See full pricing at https://justlegalsolutions.org/pricing.',
  keywords: 'small claims process serving oklahoma, serve small claims papers tulsa, small claims affidavit of service, 12 OS 1751, 12 OS 1773, debt collection service, security deposit lawsuit oklahoma',
  alternates: { canonical: 'https://justlegalsolutions.org/small-claims-process-serving' },
  openGraph: {
    title: 'Small Claims Process Serving in Oklahoma | Just Legal Solutions',
    description: 'Affordable, fast service for Oklahoma small claims. Notarized affidavit included. Starts at $30 single-attempt.',
    url: 'https://justlegalsolutions.org/small-claims-process-serving',
    siteName: 'Just Legal Solutions',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-072-family-law-service-guide-tulsa-hero.png', width: 1200, height: 630, alt: 'Small claims process serving Oklahoma' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ServeOK',
    title: 'Small Claims Process Serving in Oklahoma',
    description: 'Service starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours rush. Notarized affidavit included.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-072-family-law-service-guide-tulsa-hero.png'],
  },
  other: {
    'ai-content-type': 'service-page',
    'ai-summary': 'Just Legal Solutions provides small claims process serving across all 77 Oklahoma counties under Title 12 O.S. § 1751-1773. Service starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours rush. Every tier includes a notarized affidavit of service ready to file with the court. We serve debt collection cases, security deposit disputes, breach of contract under $10,000, and property damage claims. See full pricing https://justlegalsolutions.org/pricing.',
    'ai-key-facts': 'Small claims process serving starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours rush. Authorized under 12 O.S. § 2004 and Title 12 O.S. § 1751-1773, all 77 Oklahoma counties, court-ready notarized affidavit included. Full pricing https://justlegalsolutions.org/pricing, (539) 367-6832.',
  },
};

const faqs = [
  {
    question: 'Can I serve my own small claims papers in Oklahoma?',
    answer: 'You cannot serve your own papers — under 12 O.S. § 2004, the server must be at least 18 and not a party to the case. Any non-party adult can serve, but courts generally prefer a notarized affidavit from a licensed process server because it is harder to challenge later. We charge as low as $30 for a single-attempt posting, which is in reach for almost every pro se plaintiff.',
  },
  {
    question: 'How much time before the small claims hearing must service be completed?',
    answer: 'Under Title 12 O.S. § 1758, in-county defendants must be served at least 10 days before the hearing date. Out-of-county defendants generally need 30 days. We schedule small claims serves with those windows in mind so the hearing date holds and you do not have to ask the judge for a continuance.',
  },
  {
    question: 'What if the defendant will not answer the door?',
    answer: 'We come back at different times — early morning, evening, and weekends — across the standard tier (up to three attempts) or the triple-attempt tier starting at $200. If the defendant is at the address but actively avoiding service, Oklahoma allows substitute service under 12 O.S. § 2004(C)(2): the documents are left with another adult resident and a copy is mailed to the same address.',
  },
  {
    question: 'Where do I file the affidavit of service?',
    answer: 'The notarized affidavit gets filed back with the same court clerk who issued the summons. In Tulsa County that is the Small Claims division at the Tulsa County Courthouse, 500 S. Denver Ave. We return the affidavit ready to file, with GPS coordinates, timestamps, and the original signature notary block already complete.',
  },
  {
    question: 'What courthouse handles Tulsa small claims cases?',
    answer: 'Tulsa County small claims are heard at the Tulsa County District Court, 500 S. Denver Ave., Tulsa, OK 74103. The small claims division is on the third floor. We deliver and pick up there regularly and can also file the return of service for you for an additional court-run fee starting at $25.',
  },
  {
    question: 'Can I add court costs and service fees to the judgment?',
    answer: 'Yes. Oklahoma small claims procedure under Title 12 O.S. § 1751 et seq. allows the prevailing party to recover filing fees, sheriff or process server fees, and other court costs as part of the judgment. Keep your paid invoice from us with your court file so the judge can include it in the final judgment if you win.',
  },
];

export default function SmallClaimsProcessServingPage() {
  return (
    <>
      <Navbar />
      <UnifiedSchema
        pageType="service"
        url="https://justlegalsolutions.org/small-claims-process-serving"
        title="Small Claims Process Serving in Oklahoma"
        description="Affordable, fast small claims process serving across all 77 Oklahoma counties with notarized affidavit included."
        priceRange={PRICE_RANGE_DISPLAY}
        faqItems={faqs}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Small Claims Process Serving', url: '/small-claims-process-serving' },
        ]}
      />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-emerald-100">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" prefetch={false} className="hover:underline">Home</Link></li>
                <li>/</li>
                <li className="text-white">Small Claims Process Serving</li>
              </ol>
            </nav>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><Shield className="w-4 h-4 text-green-300" />Title 12 O.S. § 1751-1773</span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><Clock className="w-4 h-4 text-emerald-200" />As low as $30</span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />Notarized affidavit included</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-5 drop-shadow-lg">
              Small Claims Process Serving in Oklahoma — Affordable, Fast, and Court-Ready
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed">
              Whether you are recovering a security deposit, chasing an unpaid invoice, or filing a damages claim under $10,000, the case is only as good as the service of process. Just Legal Solutions handles small claims serves starting at <strong>${STARTING_PRICES[0].startsAt} for a single attempt</strong> and <strong>${STARTING_PRICES[1].startsAt} for standard service</strong>, with a notarized affidavit ready to file with the court.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors">
                <Phone className="w-5 h-5" /> (539) 367-6832
              </a>
              <Link href="/pricing" prefetch={false} className="inline-flex items-center gap-2 bg-white text-emerald-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-emerald-50 transition-colors">
                See Full Pricing <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" prefetch={false} className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Oklahoma Small Claims, in Plain English</h2>
            <div className="space-y-5 text-gray-800 leading-relaxed">
              <p>
                Small claims in Oklahoma is governed by Title 12 O.S. § 1751 through § 1773, the Small Claims Procedure Act. The system was built to give regular people and small businesses an affordable, fast lane to resolve disputes worth $10,000 or less without needing a lawyer (although attorneys can appear). The plaintiff files an affidavit, the clerk issues a summons, and the defendant has to be served before the hearing date.
              </p>
              <p>
                The catch is that the case is only as enforceable as the service of process. If the defendant is not properly served, the judge will continue the hearing — or worse, dismiss the case if the deadline has run. Most pro se filers underestimate this step, which is why we built a dedicated small claims service tier that starts at <strong>${STARTING_PRICES[0].startsAt}</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Service Requirements */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Service Requirements Under the Small Claims Procedure Act</h2>
            <div className="space-y-5 text-gray-800 leading-relaxed">
              <p>
                The two deadlines that matter most to small claims plaintiffs are spelled out in Title 12 O.S. § 1758:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
                  <CheckCircle className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>In-county defendants</strong> must be served at least <strong>10 days</strong> before the hearing date.</span>
                </li>
                <li className="flex items-start gap-3 bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
                  <CheckCircle className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Out-of-county defendants</strong> generally need <strong>30 days</strong> of notice before the hearing.</span>
                </li>
              </ul>
              <p>
                Service itself can be made by certified mail, the sheriff, or a licensed process server. We focus on personal service because it produces the cleanest record. If certified mail comes back unclaimed (which it often does), most judges will require personal service anyway, which is why we recommend skipping straight to a process server for any defendant who has reason to avoid service.
              </p>
            </div>
          </div>
        </section>

        {/* Filing Steps */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">How to File Your Small Claims Affidavit and Get the Summons</h2>
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <ol className="space-y-4 list-decimal pl-6">
                <li><strong>Pick the right court.</strong> File in the county where the defendant lives or where the dispute happened. Tulsa County small claims sit at 500 S. Denver Ave.; Oklahoma County sits at 321 Park Ave., Oklahoma City.</li>
                <li><strong>Complete the small claims affidavit.</strong> The clerk has the form. Identify the parties, state the amount in controversy (not more than $10,000), and describe the facts in plain language.</li>
                <li><strong>Pay the filing fee.</strong> Filing fees vary by amount in controversy and county; current Tulsa County fees range from roughly $58 to $85.</li>
                <li><strong>Get the conformed copies and summons.</strong> The clerk stamps the summons with the hearing date. This is the document that goes to the defendant.</li>
                <li><strong>Send everything to us.</strong> Email, drop off, or upload. We confirm pricing in writing, dispatch a server, and return the notarized affidavit ready to file back with the clerk before the deadline.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Common Cases */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6 text-center">Common Small Claims Cases We Serve</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { t: 'Debt Collection', d: 'Unpaid invoices, personal loans, charged-off accounts under $10,000.' },
                { t: 'Security Deposit Disputes', d: 'Tenants suing landlords for wrongfully withheld deposits.' },
                { t: 'Property Damage', d: 'Auto accidents, fence damage, contractor disputes.' },
                { t: 'Breach of Contract', d: 'Service contracts, written or oral agreements under $10,000.' },
                { t: 'Goods Not Delivered', d: 'Online purchases, marketplace transactions, retail disputes.' },
                { t: 'Unpaid Wages', d: 'Independent contractor invoices and small employer disputes.' },
              ].map((c) => (
                <div key={c.t} className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                  <h3 className="font-bold text-emerald-900 mb-1">{c.t}</h3>
                  <p className="text-sm text-gray-700">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve For */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">We Serve Small Claims Papers For</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
              <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-lg border border-gray-100"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />Pro se plaintiffs handling their own case</li>
              <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-lg border border-gray-100"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />Attorneys handling consumer collections</li>
              <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-lg border border-gray-100"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />Landlords pursuing security deposit and damage suits</li>
              <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-lg border border-gray-100"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />Contractors enforcing mechanic&apos;s liens</li>
              <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-lg border border-gray-100"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />Individuals collecting unpaid personal debts</li>
              <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-lg border border-gray-100"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />Small businesses handling unpaid invoices</li>
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12 bg-gradient-to-r from-emerald-50 to-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-emerald-900 mb-3 text-center">Small Claims Service Pricing</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Small claims service starts at ${STARTING_PRICES[0].startsAt} single-attempt — perfect for budget-conscious DIY plaintiffs. Standard service starts at ${STARTING_PRICES[1].startsAt} with a notarized affidavit of service for the court file.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {STARTING_PRICES.map((tier) => (
                <div key={tier.id} className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-bold text-emerald-900">{tier.label}</h3>
                    <span className="text-2xl font-extrabold text-emerald-700">${tier.startsAt}<span className="text-sm font-normal text-gray-500">+</span></span>
                  </div>
                  {tier.note && <p className="text-sm text-gray-600">{tier.note}</p>}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              All prices are starting points. Final price depends on the address and complexity of your job.{' '}
              <Link href="/pricing" prefetch={false} className="text-emerald-700 font-semibold underline">See full pricing</Link>.
            </p>
          </div>
        </section>

        {/* Why Service Matters */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Why Proper Service Is the Hinge of a Small Claims Case</h2>
            <div className="space-y-5 text-gray-800 leading-relaxed">
              <p>
                The most common reason small claims cases fall apart in Oklahoma is not weak evidence — it is bad service. A pro se plaintiff drops the summons in the mail, the certified envelope comes back unclaimed, and the hearing date arrives with the defendant nowhere on file. The judge has to continue or dismiss, and the plaintiff has to start over. Months of waiting evaporate.
              </p>
              <p>
                A licensed process server prevents that outcome. We get hands on the defendant, document the encounter with GPS coordinates and a notarized affidavit, and put the proof in the court file before the 10-day in-county deadline. When the hearing date arrives, the judge sees a clean record and the case proceeds on the merits.
              </p>
              <p>
                If the defendant does not show up despite proper service, you get a default judgment. That is the whole point of doing service correctly the first time — a default is much harder to set aside when the affidavit is detailed, GPS-stamped, and notarized than when the only proof is an unclaimed certified mail receipt.
              </p>
            </div>
          </div>
        </section>

        {/* What Happens After Judgment */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">After You Win: Collecting on a Small Claims Judgment</h2>
            <div className="space-y-5 text-gray-800 leading-relaxed">
              <p>
                A judgment is a piece of paper that says you are owed money. Collection is a separate process. Once the small claims judge enters judgment in your favor, you have several enforcement tools available under Oklahoma law: garnishment of wages, garnishment of bank accounts, hearings on assets, and judgment liens against real property.
              </p>
              <p>
                Each of those enforcement tools requires its own service of process. A garnishment summons must be served on the employer or bank. A hearing on assets must be served on the judgment debtor. We handle all of those follow-on serves at the same starting tiers — single-attempt postings start at ${STARTING_PRICES[0].startsAt} and standard service starts at ${STARTING_PRICES[1].startsAt}.
              </p>
              <p>
                Many small claims plaintiffs assume the case ends at the judgment hearing. It does not. Plan for the enforcement phase from the start, and budget for one or two additional process serves down the road. The good news is that the costs are recoverable as part of the judgment.
              </p>
            </div>
          </div>
        </section>

        {/* What Affidavit Looks Like */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">What the Affidavit of Service Looks Like</h2>
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                Your notarized affidavit of service is the document the small claims judge looks at to confirm the defendant was properly notified. Ours include:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />Date and time of service</li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />Address with GPS coordinates</li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />Manner of service (personal, substitute, or refusal)</li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />Description of the person served</li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />Listing of every document delivered</li>
                <li className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100"><CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />Notarized server signature with bond ID</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-emerald-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold mb-3 text-emerald-900 flex items-start gap-2">
                    <FileText className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-emerald-200" />
            <h2 className="text-3xl font-bold mb-4">Get Your Small Claims Defendant Served Today</h2>
            <p className="text-lg text-emerald-100 mb-8">
              Affordable, fast, and notarized. Send the summons and we will tell you exactly what your serve will cost before any work begins.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors">
                <Phone className="w-5 h-5" /> Call (539) 367-6832
              </a>
              <Link href="/contact" prefetch={false} className="inline-flex items-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-emerald-50 transition-colors">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pricing" prefetch={false} className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors">
                See Full Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-emerald-900 mb-4 text-center">Related Resources</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <Link href="/process-serving" prefetch={false} className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                <h3 className="font-semibold text-emerald-800">Process Serving Overview</h3>
                <p className="text-sm text-gray-600 mt-1">All service methods explained</p>
              </Link>
              <Link href="/pricing" prefetch={false} className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                <h3 className="font-semibold text-emerald-800">Full Pricing</h3>
                <p className="text-sm text-gray-600 mt-1">Every tier and add-on</p>
              </Link>
              <Link href="/oklahoma-courthouse-directory" prefetch={false} className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                <h3 className="font-semibold text-emerald-800">Oklahoma Courthouse Directory</h3>
                <p className="text-sm text-gray-600 mt-1">Where to file your affidavit</p>
              </Link>
              <Link href="/tulsa-process-server-faq" prefetch={false} className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                <h3 className="font-semibold text-emerald-800">Tulsa Process Server FAQ</h3>
                <p className="text-sm text-gray-600 mt-1">Common questions answered</p>
              </Link>
              <Link href="/process-server-vs-sheriff" prefetch={false} className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                <h3 className="font-semibold text-emerald-800">Process Server vs Sheriff</h3>
                <p className="text-sm text-gray-600 mt-1">Why private servers beat the sheriff on speed</p>
              </Link>
              <Link href="/divorce-paper-service" prefetch={false} className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                <h3 className="font-semibold text-emerald-800">Divorce Paper Service</h3>
                <p className="text-sm text-gray-600 mt-1">For separate family law matters</p>
              </Link>
              <Link href="/blog/tulsa-court-filing-guide" prefetch={false} className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                <h3 className="font-semibold text-emerald-800">Tulsa Court Filing Guide</h3>
                <p className="text-sm text-gray-600 mt-1">eFile your small claims case</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
