import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Phone, Shield, Clock, CheckCircle, Star, ArrowRight, FileText, MapPin, Award } from 'lucide-react';
import { STARTING_PRICES, PRICE_RANGE_DISPLAY } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Protective Order Service in Oklahoma | Confidential, Trauma-Informed | Just Legal Solutions',
  description: 'Protective order service in Oklahoma starts at $60 standard, $100 rush, $150 same-day, $265 after-hours rush, and $30 single-attempt. Discreet, GPS-verified service of Final Protective Orders under 22 O.S. § 60.1-60.18. See full pricing at https://justlegalsolutions.org/pricing.',
  keywords: 'protective order service oklahoma, serve protective order tulsa, final protective order, 22 OS 60.1, 22 OS 60.18, VPO service, domestic violence protective order, trauma informed process server',
  alternates: { canonical: 'https://justlegalsolutions.org/protective-order-service' },
  openGraph: {
    title: 'Protective Order Service in Oklahoma | Just Legal Solutions',
    description: 'Confidential, trauma-informed service of Final Protective Orders in all 77 Oklahoma counties. Same-day and after-hours rush available.',
    url: 'https://justlegalsolutions.org/protective-order-service',
    siteName: 'Just Legal Solutions',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-061-protective-order-service-hero.png', width: 1200, height: 630, alt: 'Protective order service in Oklahoma' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ServeOK',
    title: 'Protective Order Service in Oklahoma — Confidential & Court-Ready',
    description: 'Service starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours rush. Trauma-informed and GPS-verified.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-061-protective-order-service-hero.png'],
  },
  other: {
    'ai-content-type': 'service-page',
    'ai-summary': 'Just Legal Solutions provides confidential, trauma-informed Final Protective Order service across all 77 Oklahoma counties under 22 O.S. § 60.1-60.18. Service starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, and $265 after-hours rush, with notarized return for the court file. Emergency Protective Orders are served by law enforcement; only Final POs require process server delivery. We work with Tulsa County, Oklahoma County, and rural court clerks, petitioner attorneys, DV shelters including DVIS in Tulsa and YWCA in OKC, and pro se petitioners. See full pricing https://justlegalsolutions.org/pricing.',
    'ai-key-facts': 'Final Protective Order service starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours rush. Authorized under 12 O.S. § 2004 and 22 O.S. § 60.1-60.18, all 77 Oklahoma counties, GPS-verified, notarized return included, trauma-informed handling. Full pricing https://justlegalsolutions.org/pricing, (539) 367-6832.',
  },
};

const faqs = [
  {
    question: 'Who serves emergency protective orders in Oklahoma?',
    answer: 'Emergency Ex Parte Protective Orders are served by law enforcement, not by private process servers. Once a judge signs the EPO, the court clerk transmits it to the appropriate sheriff or police department for immediate service. Final Protective Orders, which are entered after the full hearing, are the ones that typically come to a private process server like Just Legal Solutions.',
  },
  {
    question: 'How fast must Final Protective Orders be served?',
    answer: 'There is no single statutory deadline for Final PO service, but most petitioners and attorneys want the respondent served within 24-72 hours of entry so the order is enforceable as quickly as possible. Our same-day tier starts at $150 and our after-hours rush at $265 — both are common choices for Final PO service.',
  },
  {
    question: 'Can the petitioner be present when the respondent is served?',
    answer: 'No. We strongly recommend the petitioner is not at the address during service. The service is between the server and the respondent. Petitioner presence escalates risk and can compromise the discretion of the service.',
  },
  {
    question: 'What if the respondent has a weapon?',
    answer: 'Servers approach every PO service with the assumption that conflict is possible. We do not enter the home, we keep distance, and we are trained to disengage at the first sign of escalation. If we have credible information that the respondent is armed or volatile, we coordinate with local law enforcement for a stand-by service or refer the matter back to the court for sheriff service.',
  },
  {
    question: 'What if the respondent does not have a fixed address?',
    answer: 'We run skip tracing to identify employer addresses, secondary residences, or known associates. For unhoused respondents, we coordinate with shelters and known camps when safe to do so. If diligent attempts fail, our detailed affidavits support a motion for service by alternative means.',
  },
  {
    question: 'How does Just Legal Solutions protect petitioner confidentiality?',
    answer: 'We never share petitioner information with the respondent at the door. Our server identifies themselves as a process server, hands the documents, notes the date and time, and leaves. The petitioner&apos;s address, phone number, and personal details are not part of the conversation. All case communication is handled directly with the petitioner, attorney, or DV advocate.',
  },
];

export default function ProtectiveOrderServicePage() {
  return (
    <>
      <Navbar />
      <UnifiedSchema
        pageType="service"
        url="https://justlegalsolutions.org/protective-order-service"
        title="Protective Order Service in Oklahoma"
        description="Confidential, trauma-informed service of Final Protective Orders across all 77 Oklahoma counties."
        priceRange={PRICE_RANGE_DISPLAY}
        faqItems={faqs}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Protective Order Service', url: '/protective-order-service' },
        ]}
      />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-700 text-white pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-purple-100">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" prefetch={false} className="hover:underline">Home</Link></li>
                <li>/</li>
                <li className="text-white">Protective Order Service</li>
              </ol>
            </nav>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><Shield className="w-4 h-4 text-green-300" />22 O.S. § 60.1-60.18</span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><Clock className="w-4 h-4 text-purple-200" />Same-day available</span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />Trauma-informed</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-5 drop-shadow-lg">
              Protective Order Service in Oklahoma — Confidential, Trauma-Informed Process Serving
            </h1>
            <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed">
              Protective order cases are among the most sensitive on a court docket. The way the respondent is served affects whether the order can actually be enforced and whether the petitioner stays safe. Just Legal Solutions handles Final Protective Order service with calm, discretion, and bulletproof documentation — starting at <strong>${STARTING_PRICES[1].startsAt} for standard service</strong>, with rush starting at <strong>${STARTING_PRICES[2].startsAt}</strong> and same-day starting at <strong>${STARTING_PRICES[3].startsAt}</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors">
                <Phone className="w-5 h-5" /> (539) 367-6832
              </a>
              <Link href="/pricing" prefetch={false} className="inline-flex items-center gap-2 bg-white text-purple-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-purple-50 transition-colors">
                See Full Pricing <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" prefetch={false} className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Statute */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">The Oklahoma Protective Order Act</h2>
            <div className="space-y-5 text-gray-800 leading-relaxed">
              <p>
                Protective orders in Oklahoma are governed by the Protection from Domestic Abuse Act, codified at <strong>22 O.S. § 60.1 through § 60.18</strong>. The Act covers domestic abuse, stalking, harassment, rape, and certain other categories. It provides two main procedural tracks: an <em>Emergency Ex Parte Protective Order</em> entered before any hearing and a <em>Final Protective Order</em> entered after notice and a contested or default hearing.
              </p>
              <p>
                The two tracks are served differently, which is the single most important detail to get right.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency vs Final */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">Emergency vs Final Protective Orders</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-amber-900 mb-3">Emergency Ex Parte Protective Orders</h3>
                <p className="text-gray-800 leading-relaxed">
                  Entered the day the petition is filed, without a hearing, when the judge finds an immediate threat. EPOs are <strong>served by law enforcement</strong> — typically the sheriff or local police — because the order has to be in the respondent&apos;s hands quickly and a deputy can also enforce any restrictions on the spot. <strong>Private process servers do not serve EPOs.</strong>
                </p>
              </div>
              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-900 mb-3">Final Protective Orders</h3>
                <p className="text-gray-800 leading-relaxed">
                  Entered after the full hearing — usually 14-30 days after the petition is filed — and become enforceable for up to five years (or longer if extended). Final POs <strong>can be served by a private process server</strong> licensed under 12 O.S. § 158.1. This is where Just Legal Solutions comes in: discreet, fast, and notarized for the court file.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Discretion */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">Why Discretion Matters in PO Service</h2>
            <div className="space-y-5 text-gray-800 leading-relaxed">
              <p>
                Service of a protective order is not the same as service of a contract dispute. The respondent is being told, on paper, that they are now legally restricted from contacting, approaching, or harming the petitioner. That message lands differently. We approach each service knowing it could escalate, and we choose timing, location, and approach to minimize that risk for everyone.
              </p>
              <p>
                Discretion also means not turning the moment into a confrontation. Our server identifies themselves, hands the documents, notes the date and time, and leaves. We do not lecture, we do not argue, and we do not provide the petitioner&apos;s address or any details that the respondent does not already have from the court file.
              </p>
              <p>
                Trauma-informed service means we coordinate with the petitioner&apos;s advocate or attorney before we go. If there are kids in the home, weapons in the home, or a pattern of escalation, we want to know in advance so we can plan the service accordingly.
              </p>
            </div>
          </div>
        </section>

        {/* GPS */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">GPS-Verified Service for Court Enforcement</h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              A protective order is only enforceable once the respondent has been served. If the respondent later violates the order and the case turns into a contempt or criminal proceeding, the prosecutor will need to prove the respondent had notice. Our GPS-stamped, photo-supported, notarized affidavit is built for exactly that moment.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Every attempt is logged with coordinates and timestamps. The completed affidavit goes back to the petitioner or attorney within 24 hours, ready to be filed at the court clerk so the order is fully enforceable.
            </p>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">What to Expect When We Serve a Respondent in a Domestic Situation</h2>
            <ol className="space-y-4 list-decimal pl-6 text-gray-800 leading-relaxed">
              <li><strong>Intake.</strong> We collect the conformed Final PO, the address, any safety notes, and the desired tier (standard, rush, same-day, or after-hours rush).</li>
              <li><strong>Pre-attempt review.</strong> We coordinate with the petitioner&apos;s attorney or advocate and confirm any safety concerns.</li>
              <li><strong>Approach.</strong> The server identifies the residence, observes briefly to confirm the respondent is present, and approaches calmly.</li>
              <li><strong>Service.</strong> The server identifies themselves as a process server and hands over the Final PO. If the respondent refuses, the documents are left at their feet — service is still complete under 12 O.S. § 2004.</li>
              <li><strong>Documentation.</strong> GPS coordinates, timestamp, description, and any relevant notes go into the affidavit on the spot.</li>
              <li><strong>Return.</strong> The notarized return is delivered to the petitioner, attorney, or court clerk within 24 hours.</li>
            </ol>
          </div>
        </section>

        {/* Working With Petitioners and Advocates */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">Working With Petitioners, Attorneys, and DV Advocates</h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              Just Legal Solutions has experience working with Tulsa County, Oklahoma County, and rural court clerks on Final Protective Order service. We coordinate with petitioner&apos;s attorneys, domestic violence shelters — including <strong>Domestic Violence Intervention Services (DVIS)</strong> in Tulsa and the <strong>YWCA</strong> in Oklahoma City — and pro se petitioners.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4">
              For DV advocates, we offer flexible billing arrangements, including direct invoicing to the agency or attorney instead of the petitioner. For pro se petitioners, we keep our intake simple: send the conformed Final PO, the address, and any safety notes, and we will tell you what your service will cost before any work begins.
            </p>
            <p className="text-gray-800 leading-relaxed">
              We also coordinate with court clerks for direct return-of-service filing, so the order is enforceable as soon as humanly possible after entry.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12 bg-gradient-to-r from-purple-50 to-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-purple-900 mb-3 text-center">Protective Order Service Pricing</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Protective order service starts at ${STARTING_PRICES[1].startsAt} standard with rush starting at ${STARTING_PRICES[2].startsAt} and same-day starting at ${STARTING_PRICES[3].startsAt} for time-sensitive Final POs. Service includes a notarized return for the court file.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {STARTING_PRICES.map((tier) => (
                <div key={tier.id} className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-bold text-purple-900">{tier.label}</h3>
                    <span className="text-2xl font-extrabold text-purple-700">${tier.startsAt}<span className="text-sm font-normal text-gray-500">+</span></span>
                  </div>
                  {tier.note && <p className="text-sm text-gray-600">{tier.note}</p>}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              All prices are starting points. Final price depends on the address and complexity of your job.{' '}
              <Link href="/pricing" prefetch={false} className="text-purple-700 font-semibold underline">See full pricing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold mb-3 text-purple-900 flex items-start gap-2">
                    <FileText className="w-5 h-5 text-purple-600 shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-purple-900 to-indigo-700 text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-purple-200" />
            <h2 className="text-3xl font-bold mb-4">Get Your Final Protective Order Served Safely</h2>
            <p className="text-lg text-purple-100 mb-8">
              Confidential, trauma-informed, and notarized. Call now or send the documents and we will tell you exactly what your serve will cost before any work begins.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors">
                <Phone className="w-5 h-5" /> Call (539) 367-6832
              </a>
              <Link href="/contact" prefetch={false} className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-purple-50 transition-colors">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pricing" prefetch={false} className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors">
                See Full Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-10 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-purple-900 mb-4 text-center">Related Resources</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <Link href="/process-serving" prefetch={false} className="block p-4 bg-white rounded-lg hover:bg-purple-50 transition-colors border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-purple-800">Process Serving Overview</h3>
                <p className="text-sm text-gray-600 mt-1">All service methods explained</p>
              </Link>
              <Link href="/pricing" prefetch={false} className="block p-4 bg-white rounded-lg hover:bg-purple-50 transition-colors border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-purple-800">Full Pricing</h3>
                <p className="text-sm text-gray-600 mt-1">Every tier and add-on</p>
              </Link>
              <Link href="/blog/how-to-serve-restraining-order-oklahoma" prefetch={false} className="block p-4 bg-white rounded-lg hover:bg-purple-50 transition-colors border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-purple-800">Restraining Order Guide</h3>
                <p className="text-sm text-gray-600 mt-1">In-depth walkthrough</p>
              </Link>
              <Link href="/weekend-emergency" prefetch={false} className="block p-4 bg-white rounded-lg hover:bg-purple-50 transition-colors border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-purple-800">Weekend Emergency Service</h3>
                <p className="text-sm text-gray-600 mt-1">After-hours and Saturday/Sunday</p>
              </Link>
              <Link href="/contact" prefetch={false} className="block p-4 bg-white rounded-lg hover:bg-purple-50 transition-colors border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-purple-800">Contact</h3>
                <p className="text-sm text-gray-600 mt-1">Start a PO serve today</p>
              </Link>
              <Link href="/tulsa-process-server-faq" prefetch={false} className="block p-4 bg-white rounded-lg hover:bg-purple-50 transition-colors border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-purple-800">Tulsa Process Server FAQ</h3>
                <p className="text-sm text-gray-600 mt-1">Common questions answered</p>
              </Link>
              <Link href="/divorce-paper-service" prefetch={false} className="block p-4 bg-white rounded-lg hover:bg-purple-50 transition-colors border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-purple-800">Divorce Paper Service</h3>
                <p className="text-sm text-gray-600 mt-1">Often paired with VPOs</p>
              </Link>
              <Link href="/process-server-vs-sheriff" prefetch={false} className="block p-4 bg-white rounded-lg hover:bg-purple-50 transition-colors border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-purple-800">Process Server vs Sheriff</h3>
                <p className="text-sm text-gray-600 mt-1">Why private is faster for VPOs</p>
              </Link>
              <Link href="/service-areas" prefetch={false} className="block p-4 bg-white rounded-lg hover:bg-purple-50 transition-colors border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-purple-800">Service Areas</h3>
                <p className="text-sm text-gray-600 mt-1">All 77 Oklahoma counties</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
