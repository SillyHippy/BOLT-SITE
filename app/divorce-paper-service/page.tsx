import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Phone, Shield, Clock, CheckCircle, Star, ArrowRight, FileText, MapPin, Award } from 'lucide-react';
import { STARTING_PRICES, PRICE_RANGE_DISPLAY } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Divorce Paper Service in Oklahoma | Discreet Process Serving | Just Legal Solutions',
  description: 'Divorce paper service in Oklahoma starts at $30 single-attempt and $60 standard. Rush starts at $100, same-day starts at $150, after-hours rush starts at $265. Discreet, GPS-verified service of divorce petitions, summonses, and temporary orders. See full pricing at https://justlegalsolutions.org/pricing.',
  keywords: 'divorce paper service oklahoma, serve divorce papers tulsa, divorce process server, family law process server, serve divorce summons, 12 OS 2004, evasive spouse service, mobile notary divorce',
  alternates: { canonical: 'https://justlegalsolutions.org/divorce-paper-service' },
  openGraph: {
    title: 'Divorce Paper Service in Oklahoma | Just Legal Solutions',
    description: 'Discreet, court-ready service of divorce petitions, summonses, and temporary orders across all 77 Oklahoma counties. Same-day and after-hours available.',
    url: 'https://justlegalsolutions.org/divorce-paper-service',
    siteName: 'Just Legal Solutions',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://justlegalsolutions.org/og-image.webp', width: 1200, height: 630, alt: 'Divorce paper service in Oklahoma' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ServeOK',
    title: 'Divorce Paper Service in Oklahoma — Discreet & Court-Ready',
    description: 'Service starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours rush. GPS-verified affidavits.',
    images: ['https://justlegalsolutions.org/og-image.webp'],
  },
  other: {
    'ai-content-type': 'service-page',
    'ai-summary': 'Just Legal Solutions provides discreet, GPS-verified divorce paper service across all 77 Oklahoma counties under 12 O.S. § 2004. Service starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours rush. We serve divorce petitions, summonses, temporary orders, and protective orders connected to family law cases. We coordinate with attorneys, paralegals, and pro se filers and offer mobile notary support for verifying pleadings. See full pricing https://justlegalsolutions.org/pricing.',
    'ai-key-facts': 'Divorce paper service starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours rush. Authorized under 12 O.S. § 2004, all 77 Oklahoma counties, GPS-verified attempts, discreet handling, evasive spouse experience, mobile notary $25 starting. Full pricing https://justlegalsolutions.org/pricing, (539) 367-6832.',
  },
};

const faqs = [
  {
    question: 'How quickly can divorce papers be served in Oklahoma?',
    answer: 'Once we have the filed petition, summons, and a current address, standard service runs 5-10 business days with up to three attempts. Rush service starts at $100 and lands in 1-3 business days. Same-day service starts at $150 and is dispatched within 4-8 hours of pickup. After-hours rush starts at $265 with a two-hour response window.',
  },
  {
    question: 'Can my spouse refuse to accept divorce papers?',
    answer: 'Not in Oklahoma. Under 12 O.S. § 2004, if the server identifies the respondent and offers the documents, service is complete even if the respondent refuses to physically take them or shuts the door. The server can leave the papers at their feet and the notarized affidavit will still satisfy due process.',
  },
  {
    question: 'What if my spouse lives in another state?',
    answer: 'We coordinate out-of-state service through our process-server network. We handle the certified copy to the destination server, confirm the address, and return the original notarized affidavit to your Oklahoma case. Out-of-state work is quoted on top of the base service tier.',
  },
  {
    question: 'What is service by publication in an Oklahoma divorce?',
    answer: 'Service by publication is the last-resort method for divorces where the respondent cannot be located after diligent effort. The court must approve a motion for publication, and notice runs in a court-approved newspaper for the statutory period. We provide GPS-documented attempt records that support the diligence affidavit your attorney files with the motion.',
  },
  {
    question: 'Can I serve my own divorce papers in Oklahoma?',
    answer: 'You cannot personally serve papers on your own spouse — 12 O.S. § 2004 requires the server to be at least 18 and not a party to the case. Friends, family, and other adults can serve, but courts give the most weight to a notarized affidavit from a licensed process server, especially in contested or high-conflict matters.',
  },
  {
    question: 'Do I need to be present when my spouse is served?',
    answer: 'No, and we recommend you are not. Discretion and safety are part of the job. The petitioner being present can escalate confrontation and create unnecessary risk for everyone, including the server.',
  },
  {
    question: 'What goes into the notarized affidavit of service?',
    answer: 'Date, time, GPS coordinates, address, a description of the respondent, the manner of service (personal, substitute, or refusal), the documents served, and any relevant notes such as photos or a description of the residence. The affidavit is notarized and returned to you or your attorney for filing with the court.',
  },
  {
    question: 'How do I serve divorce papers in Tulsa County specifically?',
    answer: 'File the petition with the Tulsa County District Court Clerk and request the summons. Once you have the conformed copies, send them to us by email or in person. We pick up, attempt service, and return the notarized affidavit ready for filing back at the Tulsa County Courthouse at 500 S. Denver Ave.',
  },
];

export default function DivorcePaperServicePage() {
  return (
    <>
      <Navbar />
      <UnifiedSchema
        pageType="service"
        url="https://justlegalsolutions.org/divorce-paper-service"
        title="Divorce Paper Service in Oklahoma"
        description="Discreet, GPS-verified service of divorce petitions, summonses, and temporary orders across all 77 Oklahoma counties."
        priceRange={PRICE_RANGE_DISPLAY}
        faqItems={faqs}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Divorce Paper Service', url: '/divorce-paper-service' },
        ]}
      />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-rose-900 via-rose-800 to-rose-700 text-white pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-rose-100">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" prefetch={false} className="hover:underline">Home</Link></li>
                <li>/</li>
                <li className="text-white">Divorce Paper Service</li>
              </ol>
            </nav>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><Shield className="w-4 h-4 text-green-300" />Discreet & Confidential</span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><Clock className="w-4 h-4 text-rose-200" />Same-day available</span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><MapPin className="w-4 h-4 text-rose-200" />All 77 counties</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-5 drop-shadow-lg">
              Divorce Paper Service in Oklahoma — Discreet, Court-Ready Process Serving
            </h1>
            <p className="text-lg md:text-xl text-rose-100 mb-8 leading-relaxed">
              Serving divorce papers is one of the most emotionally charged moments in a family law case. Just Legal Solutions handles it with the calm, professionalism, and documentation Oklahoma courts expect — starting at <strong>${STARTING_PRICES[0].startsAt} for a single attempt</strong> and <strong>${STARTING_PRICES[1].startsAt} for standard service</strong>, with rush, same-day, and after-hours tiers when the deadline is tight.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors">
                <Phone className="w-5 h-5" /> (539) 367-6832
              </a>
              <Link href="/pricing" prefetch={false} className="inline-flex items-center gap-2 bg-white text-rose-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-rose-50 transition-colors">
                See Full Pricing <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" prefetch={false} className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-rose-50 border-l-4 border-rose-600 p-6 rounded-r-lg">
              <p className="text-gray-800 leading-relaxed">
                Whether you are an attorney filing a contested divorce, a paralegal coordinating a multi-county service, or a pro se filer doing this on your own, the rules are the same: the petition and summons have to be delivered in a way that satisfies <strong>12 O.S. § 2004</strong>, and the proof has to be filed back with the court before the answer deadline runs. We take that piece off your plate and bring back a notarized affidavit your judge will accept the first time.
              </p>
            </div>
          </div>
        </section>

        {/* How Divorce Papers Are Served */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-rose-900 mb-6">How Divorce Papers Are Served in Oklahoma</h2>
            <div className="space-y-5 text-gray-800 leading-relaxed">
              <p>
                Oklahoma law treats a divorce summons like any other civil summons. Under 12 O.S. § 2004(C)(1), service has to be made by an adult who is not a party to the case — meaning the petitioning spouse can never serve their own papers. The standard method is personal service: the process server identifies the respondent, hands them the petition, summons, automatic temporary order, and any related pleadings, and notes the date, time, and location.
              </p>
              <p>
                The clock that matters in a divorce is the answer deadline printed on the summons. Once service is complete, the respondent generally has 20 days to file an answer or risk a default. That makes the speed and accuracy of service the single most important variable in early case posture.
              </p>
              <p>
                Just Legal Solutions handles every divorce service with that 20-day clock in mind. We confirm the address before dispatch, attempt at the times the respondent is most likely home, and return a notarized affidavit within 24 hours of successful service so your attorney or filer can put it in the court record immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Personal vs Substitute */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-rose-900 mb-6 text-center">Personal vs Substitute Service in Family Law</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-rose-900 mb-3">Personal Service</h3>
                <p className="text-gray-700 leading-relaxed">
                  The strongest, most defensible form of service. The server physically hands the documents to the respondent. In a divorce, this is the form we attempt first because it is the hardest to challenge in a later motion to set aside a default. GPS coordinates, timestamp, and a description of the respondent go into the affidavit.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-rose-900 mb-3">Substitute Service</h3>
                <p className="text-gray-700 leading-relaxed">
                  Authorized under 12 O.S. § 2004(C)(2) when personal service has been attempted with diligence and the respondent cannot be found. The server leaves the documents with a person at least 15 years old who resides at the dwelling, then mails a copy to the same address. We document every prior attempt so the affidavit demonstrates the diligence the rule requires.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Evasive Spouse */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-rose-900 mb-6">When the Respondent Is Hiding or Evading Service</h2>
            <div className="space-y-5 text-gray-800 leading-relaxed">
              <p>
                Family law brings out evasion. People stop answering doors, change shifts at work, move in with relatives, and ghost the address on the petition. We have seen it all. When standard daytime attempts fail, we shift to early morning, evening, and weekend windows. When a residence stops working, we run skip tracing to identify employer addresses, secondary residences, and known associates.
              </p>
              <p>
                For deeply evasive respondents, the <strong>triple-attempt service</strong> tier (starting at ${STARTING_PRICES[4].startsAt}) is built for the situation: three attempts spread across different days and times, with full documentation that supports a later motion for service by publication if it comes to that.
              </p>
              <p>
                The notarized affidavit we produce in those cases is intentionally detailed. It does not just say &quot;not found.&quot; It documents the date, time, what the server saw, who the server spoke with, and why it is reasonable to conclude the respondent is avoiding service.
              </p>
            </div>
          </div>
        </section>

        {/* GPS Verification */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-rose-900 mb-6">GPS-Verified Attempts That Hold Up in Court</h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              Every Just Legal Solutions attempt is GPS-stamped at the moment it happens. The affidavit includes the latitude and longitude of the address, the timestamp, and any notes the server captured at the door. If the respondent later files a motion to quash service or claims they were never served, that GPS record is what your attorney uses to defend the affidavit.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Photos are taken when appropriate — typically of the residence, the front door, or visible vehicles — and stored alongside the affidavit. We do not photograph the respondent for privacy reasons unless the documents specifically require it.
            </p>
          </div>
        </section>

        {/* Cross County */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-rose-900 mb-6 text-center">Service Across Tulsa County, Oklahoma County, and All 77 Counties</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Divorces often cross county lines. The petitioning spouse files in one county; the respondent has moved to another. We handle the geography so you do not have to coordinate with multiple sheriff offices.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                <h3 className="font-bold text-rose-900 mb-1">Tulsa County</h3>
                <p className="text-sm text-gray-700">Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Glenpool, Sapulpa metro overflow.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                <h3 className="font-bold text-rose-900 mb-1">Oklahoma County</h3>
                <p className="text-sm text-gray-700">Oklahoma City, Edmond, Midwest City, Del City, Bethany, Nichols Hills.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                <h3 className="font-bold text-rose-900 mb-1">Statewide</h3>
                <p className="text-sm text-gray-700">All 77 counties, urban or rural, on a single notarized affidavit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-rose-900 mb-6">What We Serve in a Typical Divorce Case</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
              <li className="flex items-start gap-2 bg-white p-4 rounded-lg shadow-sm border border-gray-100"><CheckCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />Petition for dissolution of marriage</li>
              <li className="flex items-start gap-2 bg-white p-4 rounded-lg shadow-sm border border-gray-100"><CheckCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />Summons (with answer deadline)</li>
              <li className="flex items-start gap-2 bg-white p-4 rounded-lg shadow-sm border border-gray-100"><CheckCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />Automatic temporary order</li>
              <li className="flex items-start gap-2 bg-white p-4 rounded-lg shadow-sm border border-gray-100"><CheckCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />Application for temporary orders</li>
              <li className="flex items-start gap-2 bg-white p-4 rounded-lg shadow-sm border border-gray-100"><CheckCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />Restraining orders connected to a civil case</li>
              <li className="flex items-start gap-2 bg-white p-4 rounded-lg shadow-sm border border-gray-100"><CheckCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />Notice of hearing</li>
              <li className="flex items-start gap-2 bg-white p-4 rounded-lg shadow-sm border border-gray-100"><CheckCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />Discovery requests when service is required</li>
              <li className="flex items-start gap-2 bg-white p-4 rounded-lg shadow-sm border border-gray-100"><CheckCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />QDRO and post-decree motions</li>
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12 bg-gradient-to-r from-rose-50 to-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-rose-900 mb-3 text-center">Divorce Service Pricing</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Every tier includes a notarized affidavit of service. Final price depends on distance, complexity, and add-ons. See the full breakdown on the pricing page.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {STARTING_PRICES.map((tier) => (
                <div key={tier.id} className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-bold text-rose-900">{tier.label}</h3>
                    <span className="text-2xl font-extrabold text-rose-700">${tier.startsAt}<span className="text-sm font-normal text-gray-500">+</span></span>
                  </div>
                  {tier.note && <p className="text-sm text-gray-600">{tier.note}</p>}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              Divorce paper service starts at ${STARTING_PRICES[0].startsAt} single-attempt and ${STARTING_PRICES[1].startsAt} standard. Rush starts at ${STARTING_PRICES[2].startsAt}, same-day starts at ${STARTING_PRICES[3].startsAt}, and after-hours rush starts at ${STARTING_PRICES[5].startsAt}.{' '}
              <Link href="/pricing" prefetch={false} className="text-rose-700 font-semibold underline">See full pricing</Link>.
            </p>
          </div>
        </section>

        {/* Working With Us */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-rose-900 mb-6">Built to Work With Attorneys, Paralegals, and Pro Se Filers</h2>
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                Our intake process is the same whether you are a partner at a downtown firm or a self-represented spouse filing your first petition. Send us the conformed copies, the address, and any notes about the respondent (work schedule, secondary addresses, evasion concerns). We confirm pricing in writing, dispatch a server, and send status updates after every attempt.
              </p>
              <p>
                We are available 24/7. After-hours intake routes to the on-call server, which is what makes the same-day and after-hours rush tiers actually work in practice. For attorneys with recurring family law volume, we set up a billing account so individual matters can be invoiced together.
              </p>
              <p>
                If you also need a notary for a verified petition or a sworn declaration, our <Link href="/notary" prefetch={false} className="text-rose-700 underline font-semibold">mobile notary service</Link> starts at $25 and pairs naturally with a divorce service appointment.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-rose-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold mb-3 text-rose-900 flex items-start gap-2">
                    <FileText className="w-5 h-5 text-rose-600 shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-rose-900 to-rose-700 text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-rose-200" />
            <h2 className="text-3xl font-bold mb-4">Get Divorce Papers Served Today</h2>
            <p className="text-lg text-rose-100 mb-8">
              Discreet, GPS-verified, and notarized. Call now or send the documents and we will tell you exactly what your serve will cost before any work begins.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors">
                <Phone className="w-5 h-5" /> Call (539) 367-6832
              </a>
              <Link href="/contact" prefetch={false} className="inline-flex items-center gap-2 bg-white text-rose-900 px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-rose-50 transition-colors">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pricing" prefetch={false} className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors">
                See Full Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-rose-900 mb-4 text-center">Related Resources</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <Link href="/process-serving" prefetch={false} className="block p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
                <h3 className="font-semibold text-rose-800">Process Serving Overview</h3>
                <p className="text-sm text-gray-600 mt-1">All service methods explained</p>
              </Link>
              <Link href="/service-areas" prefetch={false} className="block p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
                <h3 className="font-semibold text-rose-800">Service Areas</h3>
                <p className="text-sm text-gray-600 mt-1">All 77 Oklahoma counties</p>
              </Link>
              <Link href="/tulsa-county-divorce-process-serving" prefetch={false} className="block p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
                <h3 className="font-semibold text-rose-800">Tulsa County Divorce Service</h3>
                <p className="text-sm text-gray-600 mt-1">County-specific filing tips</p>
              </Link>
              <Link href="/notary" prefetch={false} className="block p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
                <h3 className="font-semibold text-rose-800">Mobile Notary</h3>
                <p className="text-sm text-gray-600 mt-1">For verified pleadings, starts at $25</p>
              </Link>
              <Link href="/protective-order-service" prefetch={false} className="block p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
                <h3 className="font-semibold text-rose-800">Protective Order Service</h3>
                <p className="text-sm text-gray-600 mt-1">When divorce escalates</p>
              </Link>
              <Link href="/process-server-vs-sheriff" prefetch={false} className="block p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
                <h3 className="font-semibold text-rose-800">Process Server vs Sheriff</h3>
                <p className="text-sm text-gray-600 mt-1">Why private is faster than the sheriff</p>
              </Link>
              <Link href="/tulsa-process-server-faq" prefetch={false} className="block p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
                <h3 className="font-semibold text-rose-800">Tulsa Process Server FAQ</h3>
                <p className="text-sm text-gray-600 mt-1">Common questions answered</p>
              </Link>
              <Link href="/pricing" prefetch={false} className="block p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
                <h3 className="font-semibold text-rose-800">Full Pricing</h3>
                <p className="text-sm text-gray-600 mt-1">Every tier and add-on</p>
              </Link>
              <Link href="/contact" prefetch={false} className="block p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
                <h3 className="font-semibold text-rose-800">Contact</h3>
                <p className="text-sm text-gray-600 mt-1">Start a divorce serve today</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
