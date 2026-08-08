import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Serving an Oklahoma Corporation After Its Office Closes',
  description: 'When an Oklahoma corporate office closes, complete due diligence attempts, track agent resignations, and serve the Secretary of State under 12 O.S. 2004(C)(4).',
  keywords: 'serve closed corporation Oklahoma, Secretary of State service of process, registered agent resigned, dissolved corporation service, ousted foreign corporation, Oklahoma process server',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Serving an Oklahoma Corporation After Its Office Closes',
    description: 'When an Oklahoma corporate office closes, complete due diligence attempts, track agent resignations, and serve the Secretary of State under 12 O.S. 2004(C)(4).',
    url: 'https://justlegalsolutions.org/blog/serve-closed-business-corporation-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Serving an Oklahoma Corporation After Its Office Closes',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/serve-closed-business-corporation-oklahoma',
  },
  other: {
    'article:published_time': '2026-09-17',
    'article:modified_time': '2026-09-17',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'When an Oklahoma corporation\'s office closes and no registered agent is reachable, plaintiffs serve the Secretary of State under 12 O.S. § 2004(C)(4) — after attempting service at the company\'s last-known addresses — and the company then has 40 days to answer.',
    'ai-key-facts':
      'Secretary of State service applies when no registered agent is listed or neither the agent nor an officer can be found at the registered office, 12 O.S. § 2004(C)(4); Attempt service first at the company\'s last-known addresses on Tax Commission and Secretary of State records, plus any address known to the plaintiff; File two copies of the summons and petition with the SOS, notice under § 2004(C)(4), and pay the fee under 18 O.S. § 1142 (corporations) or § 2055 (LLCs); A registered agent resignation takes effect 30 days after filing, and the SOS becomes the agent if none is named, 18 O.S. § 1026; The corporation answers within 40 days of service on the Secretary of State',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Can I sue a corporation whose office has closed?',
    answer: "Yes. A corporation doesn't disappear just because its office is dark and the sign is gone. As long as the entity exists on the Secretary of State's records — even in a dissolved or ousted status — it can be sued, and Oklahoma law provides a service route for exactly this situation. Under 12 O.S. § 2004(C)(4), when there's no registered agent on file or neither the agent nor an officer can be found at the registered office, you serve the Oklahoma Secretary of State as the corporation's agent for process.",
  },
  {
    question: 'What if the registered agent resigned?',
    answer: "Check the timing. Under 18 O.S. § 1026, a registered agent's resignation doesn't take effect until 30 days after the certificate of resignation is filed with the Secretary of State. If the corporation names a new agent within that window, service goes to the new agent. If it doesn't, the Secretary of State becomes the registered agent, and service of process on the corporation is made on the Secretary of State under 12 O.S. § 2004(C)(4). The SOS records will show the current status.",
  },
  {
    question: 'How do I serve the Oklahoma Secretary of State?',
    answer: "The steps are in 12 O.S. § 2004(C)(4): file two copies of the summons and petition with the Secretary of State, notify the office that service is being made under that section, and pay the prescribed fee under 18 O.S. § 1142 for corporations or § 2055 for LLCs. If a registered agent is still listed, you must also attach a certified copy of the return showing service on the agent was attempted and that neither the agent nor an officer could be found at the registered office.",
  },
  {
    question: 'Do I have to try serving the company before going to the Secretary of State?',
    answer: "Yes — that's a prerequisite, not an option. Before serving the Secretary of State, 12 O.S. § 2004(C)(4)(b) requires an attempt to serve the corporation in person or by mail at all three places: the last-known address on the Oklahoma Tax Commission's Franchise Tax records, the last-known address on the Secretary of State's records, and the last address known to you. Those attempts, documented in certified returns, are what justify the shift to SOS service.",
  },
  {
    question: 'What if the corporation is foreign and has been ousted from Oklahoma?',
    answer: "The Secretary of State is the registered agent for ousted or withdrawn foreign corporations under 18 O.S. § 1135, and for foreign corporations transacting business in Oklahoma without qualifying to do so under 18 O.S. § 113. Service follows the same § 2004(C)(4) path — two copies of the summons and petition, the notice, the fee — and the SOS forwards the papers to the corporation's last-known address.",
  },
  {
    question: 'How long does the corporation have to answer after SOS service?',
    answer: "The statute is explicit: under 12 O.S. § 2004(C)(4)(d), the corporation is not required to serve its answer until 40 days after service of the summons and petition on the Secretary of State. That's a longer runway than the standard 20-day answer period, which makes sense — the papers have to travel from the SOS through the forwarding process to reach the company.",
  },
  {
    question: 'What does the Secretary of State do with the papers?',
    answer: "Within three working days of receiving the summons and petition, the Secretary of State must send notice by certified mail, return receipt requested, to the corporation at its registered office or last-known address on file — or, if no address is on file, to the last-known address you provided. The notice encloses a copy of the summons and petition. That forwarding step is how a company that's vanished from its office still gets actual notice of the lawsuit.",
  },
  {
    question: 'What if the corporation is dissolved?',
    answer: "A dissolved Oklahoma corporation can still be served while it winds up its affairs and settles claims. If it has no registered agent and no reachable office, the Secretary of State service route under 12 O.S. § 2004(C)(4) applies. There's also a separate provision for serving the unknown successors of a dissolved corporation by publication under 12 O.S. § 2004(C)(3)(b), which is available when you state, under oath, that you don't know and with due diligence cannot find who the successors are.",
  },
  {
    question: 'Is service on the Secretary of State valid for a default judgment?',
    answer: "Yes, if the statutory steps are followed and documented. The court has to be able to see that you attempted service at the required addresses, delivered the two copies to the SOS with notice and fee, and that the SOS forwarded the papers. The certified returns and the SOS's forwarding record go in the file. A clean § 2004(C)(4) service record is what makes a later default judgment hard to attack.",
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Serving an Oklahoma Corporation After Its Office Closes"
        title="Serving an Oklahoma Corporation After Its Office Closes"
        pageDescription="When an Oklahoma corporate office closes, complete due diligence attempts, track agent resignations, and serve the Secretary of State under 12 O.S. 2004(C)(4)."
        description="When an Oklahoma corporate office closes, complete due diligence attempts, track agent resignations, and serve the Secretary of State under 12 O.S. 2004(C)(4)."
        pageUrl="https://justlegalsolutions.org/blog/serve-closed-business-corporation-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={113}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Serving an Oklahoma Corporation After Its Office Closes', item: 'https://justlegalsolutions.org/blog/serve-closed-business-corporation-oklahoma' }
        ]}
        articleDetails={{
          headline: 'Serving an Oklahoma Corporation After Its Office Closes',
          datePublished: '2026-09-17',
          dateModified: '2026-09-17',
          author: 'Just Legal Solutions Team',
          
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'serve closed corporation Oklahoma',
          'Secretary of State service of process',
          'registered agent resigned',
          'dissolved corporation service',
          'ousted foreign corporation',
          'skip tracing',
          'Oklahoma process server',
          'Oklahoma courts'
        ]}
      />

      <Navbar />
      <LocalPromoBanner zips={[]} />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            Business Service
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Serving an Oklahoma Corporation After Its Office Closes
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              When an Oklahoma corporation's office closes and its{' '}
              <strong>registered agent</strong> is gone, you serve the{' '}
              <strong>Secretary of State</strong> under <strong>12 O.S. § 2004(C)(4)</strong> — after
              attempting service at the company's last-known addresses on{' '}
              <strong>Tax Commission</strong> and <strong>SOS</strong> records. File{' '}
              <strong>two copies</strong> of the summons and petition with notice and the{' '}
              <strong>18 O.S. § 1142/§ 2055</strong> fee; the SOS forwards by certified mail within 3
              working days, and the company answers within <strong>40 days</strong>.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2026-09-17').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~13 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            You've got a judgment to pursue or a lawsuit to file, and the defendant corporation's office is dark. The registered agent's name is still on file, but the office they listed is an empty suite. Mail comes back. Nobody answers. It feels like a dead end — but Oklahoma law built a door for exactly this situation: service on the Secretary of State. This guide walks through when that route opens, the attempts you have to make first, and how the process actually works under 12 O.S. § 2004(C)(4).
          </p>

          <h2>The Closed-Office Problem</h2>
          <p>
            A corporation is a legal creature, and like most legal creatures it doesn't stop existing because nobody's answering the phone. Even a corporation that has been dissolved continues to exist for the purpose of winding up its affairs — paying debts, settling claims, defending lawsuits. A foreign corporation that's been ousted from Oklahoma is still subject to suit here. So the question is never "can I sue it?" It's "how do I get the papers to it?"
          </p>
          <p>
            Normally the answer is simple: serve the registered agent. Under 18 O.S. § 1022, every domestic corporation must maintain a registered agent in Oklahoma, and that agent's whole job is accepting process. But when the office closes and the agent is gone, the normal answer stops working. That's when Oklahoma's fallback kicks in.
          </p>

          <h2>First, Check the Secretary of State Records</h2>
          <p>
            Before you do anything else, pull the corporation's record from the Oklahoma Secretary of State business entity search at sos.ok.gov. It tells you three things you need: the entity's current status — active, dissolved, withdrawn, or ousted; whether a registered agent is listed and at what address; and the last-known address on file. Cross-check the Oklahoma Tax Commission's Franchise Tax records for a last-known address there too. These records don't just tell you where to try — they tell you which statutory path applies.
          </p>

          <h3>When the Registered Agent Resigned</h3>
          <p>
            Registered agents resign all the time, and the statute handles it with a built-in grace period. Under 18 O.S. § 1026, a resignation doesn't take effect until 30 days after the certificate of resignation is filed with the Secretary of State. During that window the company can name a new agent. If it does, service goes to the new agent. If the 30 days pass with no successor named, the Secretary of State is deemed to be the registered agent — and from that point, service of process on the corporation is made on the Secretary of State under 12 O.S. § 2004(C)(4). The SOS records will confirm which of those situations you're in.
          </p>

          <h2>Service on the Secretary of State — Step by Step</h2>
          <p>
            12 O.S. § 2004(C)(4) opens the SOS service route in two situations: when there is no registered agent for the corporation listed in the SOS records, or when neither the registered agent nor an officer of the corporation could be found at the registered office when service was attempted. Both point the same direction — the Secretary of State stands in for the missing agent.
          </p>
          <p>
            But you can't jump straight there. The statute requires you to attempt service first — in person or by mail — at three addresses: the corporation's last-known address on the Oklahoma Tax Commission's Franchise Tax records (if one is listed), the last-known address on the Secretary of State's records, and the last address known to you, the plaintiff. Each attempt gets documented in a return of service, and those returns are part of what justifies the SOS route.
          </p>

          <h2>Due Diligence When the Suite Is Empty</h2>
          <p>
            Courts treat Secretary of State service as a fallback, not a shortcut. The due diligence record has to show that you genuinely tried to reach the company before asking the state to stand in as agent. That means more than a single knock on a locked door. Pull every address the entity has used — SOS filings, Franchise Tax returns, prior pleadings, contracts, invoices, and any forwarding note the landlord left behind — and attempt service at each one the statute names. If mail comes back "undeliverable" or "moved," keep the envelopes. If the suite is vacant, note the vacant suite, the date, the time, and what neighboring tenants or building staff said about when the company left.
          </p>
          <p>
            Skip tracing often fills gaps the official records miss. A corporation that closed its Tulsa office may still have an officer living in Broken Arrow, a warehouse lease in Muskogee, or a registered agent who moved one floor down and never updated the filing. Document those leads even when they fail: unsuccessful attempts at last-known officer residences and alternate business locations strengthen the showing that neither the agent nor an officer could be found at the registered office. GPS-stamped photos, time-stamped notes, and certified mail receipts turn a closed-office story into a file a judge can rely on when the defense later claims service was defective.
          </p>
          <p>
            Timing matters too. If the registered agent's resignation is still inside the 30-day window under 18 O.S. § 1026, attempt service on that agent before the resignation takes effect. If a successor agent appears on the SOS record mid-case, serve the new agent — do not keep chasing the old address out of habit. Due diligence is a moving target: re-check the SOS and Tax Commission records right before you file the two copies with the Secretary of State so your packet matches the entity's status on the day you invoke § 2004(C)(4).
          </p>

          <p>
            Once the attempts are done, the mechanics are straightforward. You file two copies of the summons and petition with the Secretary of State, along with the summons and petition served together, and you notify the SOS that service is being made under § 2004(C)(4). You pay the prescribed fee — 18 O.S. § 1142 for corporations, § 2055 for LLCs — which gets taxed as part of the costs if you prevail. And if a registered agent IS still listed on the records, you must furnish a certified copy of the return showing that service on the agent was attempted and that neither the agent nor an officer could be found at the registered office.
          </p>

          <h3>What the Secretary of State Does Next</h3>
          <p>
            The statute gives the SOS a deadline too. Within three working days of receiving the summons and petition, the Secretary of State sends notice by certified mail, return receipt requested, to the corporation at its registered office or last-known address on file. If no address is on file, the notice goes to the last-known address you provided. The notice encloses a copy of the summons and petition. That's how a company that's vanished from its office still gets real notice of the suit — the state acts as the delivery mechanism.
          </p>
          <p>
            The company then has a longer runway than usual to respond: under 12 O.S. § 2004(C)(4)(d), the corporation isn't required to serve its answer until 40 days after service on the Secretary of State. That's double the standard 20-day window, which makes sense given the papers have to travel through the forwarding process.
          </p>

          <h2>Ousted and Withdrawn Foreign Corporations</h2>
          <p>
            Foreign corporations get their own version of this rule. The Secretary of State is the registered agent for ousted or withdrawn foreign corporations under 18 O.S. § 1135, and for foreign corporations transacting business in Oklahoma without ever qualifying to do so under 18 O.S. § 113. In both cases, service runs through the SOS using the same two-copy, notice, and fee procedure. A foreign company that did business here and then disappeared isn't beyond the reach of Oklahoma courts — it's just served through a different door.
          </p>

          <h2>Dissolved Corporations and Unknown Successors</h2>
          <p>
            If the corporation has been dissolved, don't assume the case is over. A dissolved corporation can be served through the SOS route while it winds up, as long as the procedural steps are met. There's also a specialized provision for the unknown successors of a dissolved corporation: under 12 O.S. § 2004(C)(3)(b), they can be served by publication when the plaintiff states in a verified petition or affidavit that they don't know, and with due diligence cannot ascertain, who the successors are. That's a higher bar — publication is a last resort — but it exists precisely for the situation where a dissolved entity left no forwarding trail at all.
          </p>

          <h2>Documenting Everything</h2>
          <p>
            The SOS route is procedural, and courts want to see the paperwork. That means the certified returns from your attempts at the three addresses, the receipt for the two copies filed with the SOS, proof of the fee payment, and the record of the SOS's certified-mail forwarding. Each piece answers a question the court will ask: did the plaintiff really try the obvious addresses? Did they follow the statutory steps? Did the state actually forward the papers? A complete file makes the difference between a smooth path to judgment and a motion to quash.
          </p>
          <p>
            A licensed process server who handles entity service regularly knows how to document these attempts so they satisfy § 2004(C)(4) the first time — and can coordinate the SOS filing itself when the case calls for it. When a corporation has gone dark, that expertise is what keeps your case moving instead of stalling on procedure.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need a Closed Company Served?</h3>
            <p className="text-blue-800 mb-4">
              Just Legal Solutions serves all 77 Oklahoma counties from our Glenpool home office with flat-rate pricing, GPS-tracked service, and court-ready affidavits delivered within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:5393676832" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Call (539) 367-6832
              </a>
              <Link href="/pricing" className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                Get a Written Quote
              </Link>
            </div>
          </div>
          </article>
          
          <div className="mt-12">
            <AuthorBox />
          </div>

          {/* Related Guides */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Related Legal Guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/blog/serve-registered-agent-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Agent Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">How to Serve a Business Registered Agent</h3>
                <p className="text-sm text-gray-600">The reliable route when the company's agent is still there.</p>
              </Link>
              <Link href="/blog/service-by-publication-oklahoma-requirements" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Publication Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Service by Publication: What Plaintiffs Must Prove</h3>
                <p className="text-sm text-gray-600">The notice requirements and proof for unknown successors and missing defendants.</p>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group border border-gray-200 rounded-lg bg-gray-50 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 font-medium">
                      <span>{faq.question}</span>
                      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 border border-gray-200 group-open:bg-blue-50 group-open:text-blue-600 group-open:border-blue-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-4 pt-0 leading-relaxed text-gray-700 bg-white border-t border-gray-100 rounded-b-lg">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-12">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Scale className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Need a Vanished Business Served?</h2>
                <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                  Just Legal Solutions provides licensed, bonded, and insured process serving, courier, and notary services across all 77 Oklahoma counties.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-blue-700 bg-white hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Submit Assignment
                  </Link>
                  <a href="tel:5393676832" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white border-2 border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                    Call (539) 367-6832
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          <article className="prose prose-lg prose-blue max-w-none mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h2>Conclusion</h2>
            <p>
            A closed office doesn't close your case. Check the Secretary of State and Tax Commission records, attempt service at the company's last-known addresses, and if the registered agent is truly unreachable, serve the Secretary of State under 12 O.S. § 2004(C)(4) with the two copies, the notice, and the fee. The state forwards the papers, the company gets 40 days to answer, and your judgment path stays open.
          </p>
          <p>
            At Just Legal Solutions, we've handled entity service across all 77 Oklahoma counties — including Secretary of State filings for companies that left no forwarding address — with GPS-tracked attempts, certified returns, and court-ready documentation delivered on time.
          </p>

          <p className="text-gray-700 italic mt-8">
            Need a closed or vanished corporation served?{' '}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact Just Legal Solutions
            </Link>{' '}
            for licensed, bonded support across all 77 Oklahoma counties. Call or text{' '}
            <a href="tel:5393676832" className="text-blue-600 hover:underline">(539) 367-6832</a>{' '}
            for same-business-day intake. Visit our{' '}
            <Link href="/pricing" className="text-blue-600 hover:underline">pricing page</Link>{' '}
            for current service rates.
          </p>
          </article>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
              <ChevronRight className="w-5 h-5 rotate-180" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
