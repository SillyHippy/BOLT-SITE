import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: "Serving Oil and Gas Litigation Papers in Oklahoma",
  description: 'Oil and gas litigation in Oklahoma needs precise service on operators, mineral owners, and surface owners, plus the Corporation Commission notice rules.',
  keywords: 'oil gas litigation process serving Oklahoma, serve oil company Oklahoma, Corporation Commission service, mineral interest lawsuit service, serve operator Oklahoma, oil field process server',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: "Serving Oil and Gas Litigation Papers in Oklahoma",
    description: 'Oil and gas litigation in Oklahoma needs precise service on operators, mineral owners, and surface owners, plus the Corporation Commission notice rules.',
    url: 'https://justlegalsolutions.org/blog/oil-gas-litigation-process-serving-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: "Serving Oil and Gas Litigation Papers in Oklahoma",
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/oil-gas-litigation-process-serving-oklahoma',
  },
  other: {
    'article:published_time': '2027-01-13',
    'article:modified_time': '2027-01-13',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'Oklahoma oil and gas litigation spans operators, working interest owners, royalty holders, and surface owners scattered across leaseholds — service follows 12 O.S. § 2004, with companies served through registered agents and individuals wherever they are, from Tulsa headquarters to remote well sites in the SCOOP and STACK plays.',
    'ai-key-facts':
      'Oil and gas companies are served under 12 O.S. § 2004(C)(5) through their registered agent or authorized officers — the registered agent address is the fastest reliable route; Working interest owners and royalty holders are often individuals scattered across states, requiring skip tracing and personal service at residences; Oklahoma Corporation Commission proceedings have their own notice rules, but civil litigation follows the standard service statutes; Field service at remote well sites is possible but the operator\'s office or agent is usually the cleaner target; Mineral title disputes and surface damage cases routinely name dozens of parties, making organized multi-party service essential',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'How is an oil and gas company served in Oklahoma?',
    answer: "Under 12 O.S. § 2004(C)(5), service on a corporation or LLC goes to its registered agent, president, or another authorized officer. Every oil and gas company doing business in Oklahoma has a registered agent on file with the Secretary of State — that's the fastest, most reliable service route. Field personnel, well-site supervisors, and lease operators' employees generally can't accept service for the company, so the agent is the professional's first stop.",
  },
  {
    question: 'Can papers be served at a remote oil well site?',
    answer: "Physically, yes — individuals can be served anywhere in Oklahoma, including at a well site. Practically, it's usually the wrong move. Remote sites mean locked gates, road conditions, safety rules, and a good chance the target isn't there. The operator's field office, the registered agent, or the individual's residence are cleaner targets. A server will go to the field when the case requires it, but the paperwork trail usually leads somewhere more reliable first.",
  },
  {
    question: 'Who gets sued in Oklahoma oil and gas litigation?',
    answer: "A wide cast. Operators who run the wells, working interest owners who fund them, royalty holders, surface owners, pipeline companies, and sometimes the Corporation Commission itself in appeals of its orders. Mineral title disputes can name dozens of parties — every interest holder in a section of land, some of whom haven't been heard from in decades. That breadth is exactly why organized, documented service matters in this practice area.",
  },
  {
    question: 'Do Oklahoma Corporation Commission cases follow different service rules?',
    answer: "Yes, and it's worth knowing the split. Corporation Commission proceedings — pooling orders, well spacing, regulatory matters — operate under the Commission's own rules for notice to parties. But once a dispute becomes civil litigation — a title suit, a surface damage case, a royalty dispute — service follows the standard Oklahoma statutes under 12 O.S. § 2004. Attorneys in this space routinely need both: Commission notice practice and ordinary process service, sometimes on the same file.",
  },
  {
    question: 'Why are out-of-state interest owners so common in Oklahoma oil and gas cases?',
    answer: "Because mineral interests are bought, sold, and inherited like any property, and Oklahoma's oil and gas wealth has attracted owners from everywhere. A working interest owner might live in Dallas, a royalty heir in California, a former operator in Colorado. Those out-of-state parties need service under Oklahoma's rules — which can mean working with a server who understands the state's long-arm and out-of-state service methods, or coordinating with servers in other states. The 180-day deadline under 12 O.S. § 2004(I) applies to all of them.",
  },
  {
    question: 'What makes oil and gas service harder than average process serving?',
    answer: "The parties are spread out, the corporate structures are layered, and the records are complicated. Operators, investors, and subsidiaries hide behind LLC names and registered agents. Interest owners die and their heirs inherit fractions of fractions. Surface owners live on the leasehold while the company is a thousand miles away. Each layer adds a skip trace, a records search, or a corporate lookup. It's not that the law is different — it's that the party list is a spreadsheet.",
  },
  {
    question: 'Can a process server help with title and heir searches?',
    answer: "Servers don't do title work — that's the attorney's job — but they're often the boots on the ground for locating the people the title work names. When a mineral title examiner identifies forty interest owners and fifteen of them need locating, that's exactly what skip tracing and field investigation are for. A server who understands oil and gas records — county deed books, Corporation Commission filings, pooling order parties — speeds up the whole process.",
  },
  {
    question: 'Do oil and gas companies have to keep a registered agent in Oklahoma?',
    answer: "Yes. Any corporation or LLC doing business in Oklahoma — an operator, a midstream company, a service firm — must keep a registered agent on file with the Secretary of State, and that agent is required to accept service. If an agent resigns or a company lets its registration lapse, service can fall back to the Secretary of State as statutory agent. That route works, but it adds steps and days to the file — one more reason the agent is the professional's first stop.",
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Serving Oil and Gas Litigation Papers in Oklahoma"
        title="Serving Oil and Gas Litigation Papers in Oklahoma"
        pageDescription="Oil and gas litigation in Oklahoma needs precise service on operators, mineral owners, and surface owners, plus the Corporation Commission notice rules."
        description="Oil and gas litigation in Oklahoma needs precise service on operators, mineral owners, and surface owners, plus the Corporation Commission notice rules."
        pageUrl="https://justlegalsolutions.org/blog/oil-gas-litigation-process-serving-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={118}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: "Serving Oil and Gas Litigation Papers in Oklahoma", item: 'https://justlegalsolutions.org/blog/oil-gas-litigation-process-serving-oklahoma' }
        ]}
        articleDetails={{
          headline: "Serving Oil and Gas Litigation Papers in Oklahoma",
          datePublished: '2027-01-13',
          dateModified: '2027-01-13',
          author: 'Just Legal Solutions Team',
          
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'oil gas litigation Oklahoma',
          'serve oil company',
          'registered agent',
          'Corporation Commission',
          'mineral interest service',
          'working interest owner',
          'Oklahoma process serving'
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
            Process Serving
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Serving Oil and Gas Litigation Papers in Oklahoma
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Oil and gas cases follow the same service rules as any Oklahoma civil suit. Companies are served via{' '}
              <strong>registered agent</strong> under <strong>12 O.S. § 2004(C)(5)</strong>; individuals —{' '}
              <strong>working interest owners, royalty heirs, surface owners</strong> — are served personally under{' '}
              <strong>§ 2004(C)(1)</strong>, wherever they are, from Tulsa boardrooms to remote SCOOP well sites.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2027-01-13').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~13 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            Oklahoma runs on oil and gas — the SCOOP, the STACK, the Mississippian, a hundred years of wells from the Panhandle to the Red River — and where the industry runs, litigation follows. Surface damage disputes, mineral title fights, royalty claims, pooling order appeals, contract suits between operators. And every one of those cases has the same first hurdle: getting the right people served. It sounds straightforward until you realize the party list includes a corporation in Tulsa, a working interest owner in Dallas, and a surface owner who's lived on the same section of land for sixty years. Here's how service actually works in this corner of Oklahoma law.
          </p>

          <h2>The Same Rules, a Bigger Party List</h2>

          <p>
            Let's get the fundamentals out of the way: oil and gas litigation follows the same service statutes as everything else in Oklahoma. Individual defendants are served personally under 12 O.S. § 2004(C)(1). Companies are served through a registered agent, president, or authorized officer under § 2004(C)(5). The 180-day deadline in § 2004(I) applies. What makes the practice area distinctive isn't the law — it's the shape of the parties.
          </p>
          <p>
            An oil and gas case can name an operator, several working interest owners, a royalty heir who lives out of state, a surface owner, and a pipeline company — all in one petition. Each one needs proper service, and each one presents a different locating problem. That's the real work, and it's why servers who know this industry are worth their weight.
          </p>

          <h2>The Case Types Behind Energy Litigation</h2>

          <p>
            Know what you're serving, and the where gets easier. Most energy cases in Oklahoma fall into a few well-worn categories. Surface damage and contamination claims — a saltwater spill, a tank battery leak, a road the operator never restored — pit the surface owner against the company running the lease. Mineral title suits ask a court to quiet title to a section, or a fraction of one, and name every interest holder the title examiner could find. Royalty cases are accounting fights: the operator sold the gas, and the royalty owner says the math came up short. Then come the contract disputes — operating agreements, joint ventures, unit participations — where two companies that should be partners are suddenly adversaries. And behind a fair number of them sits a Corporation Commission order that started the whole fight: a pooling order that forced parties together, a spacing decision that changed what could be drilled and where.
          </p>
          <p>
            Each of those case types draws a different party list, and the party list dictates the service plan. That's why the first question a good server asks isn't "where" — it's "who's in the petition?"
          </p>

          <h2>Serving the Company: The Registered Agent Is Your Friend</h2>

          <p>
            For every oil and gas company doing business in Oklahoma — operators, midstream companies, service firms — the registered agent is the cleanest target in the state. The agent's name and address are on file with the Secretary of State, public for anyone to look up. The agent is paid to accept service and forward the papers. No gates, no field offices, no guessing.
          </p>
          <p>
            The trap is assuming every related entity uses the same agent. Operators, subsidiaries, and investment vehicles often have separate filings — sometimes with different agents in different cities. A server who pulls the right entity's agent and confirms the address before driving is a server who doesn't waste a day. The Secretary of State's business search is free and takes two minutes; skipping it is how you end up serving the wrong LLC.
          </p>

          <h3>Field Personnel Can't Accept Service for the Company</h3>
          <p>
            The well-site supervisor, the pumper, the field foreman — none of them can accept service for the operating company. They're employees, not officers. Handing a lawsuit to the guy running the pump jack doesn't count, and the company will beat the service challenge. If you're serving the company, go to the agent or an officer. If you're serving an individual who happens to be at a site, that's personal service — a different animal entirely.
          </p>

          <h2>Operators, Affiliates, and the Entity Puzzle</h2>

          <p>
            The other thing to know about oil companies: they rarely come one at a time. A single well might be operated by one company, funded by a joint venture, serviced by a subsidiary, and marketed by a midstream affiliate — each a separate entity with its own registered agent, sometimes in different cities. Pull the wrong entity's agent and you've served a company that isn't even a party to the case. The fix is boring but bulletproof: match every named defendant against the Secretary of State's business records before anyone drives anywhere.
          </p>
          <p>
            Confirm the exact legal name — "Petro Operating, LLC" is not "Petro Operating Company" — then confirm the agent on file actually still represents that entity. Foreign corporations doing business here play by the same rules: they register in Oklahoma and keep an agent in the state, and if they let that registration lapse, the law has a fallback that lands service on the Secretary of State. It works. It's just slower, and in a case running on the 180-day clock, slow matters.
          </p>

          <h2>The Scattered Interest Owner Problem</h2>

          <p>
            Here's where oil and gas service gets genuinely interesting. Mineral interests are property, and property gets bought, sold, inherited, and subdivided until the ownership of a single section of land reads like a phone book. Working interest owners live in Tulsa and Houston and Denver. Royalty heirs scattered by generations of inheritance live everywhere. Some of them don't know they own a mineral interest at all.
          </p>
          <p>
            Serving that crowd is a locating exercise. County deed books show the chain of title. Corporation Commission filings list parties to pooling orders. Probate records name heirs. Skip tracing finds the current address of the heir in California who inherited 1/128th of a section. None of it is exotic — it's just methodical, and it eats time if it isn't organized. A server who keeps oil and gas records in their toolkit turns a forty-party title case from a nightmare into a checklist.
          </p>

          <h2>Field Service: When the Well Site Is the Target</h2>

          <p>
            Sometimes the case genuinely calls for field service — a surface damage dispute where the surface owner lives on the leasehold, or an individual defendant who works in the field. A server can serve them at home or at work, including at a well site, because personal service works anywhere in Oklahoma.
          </p>
          <p>
            That said, remote sites are a last resort, not a first move. Locked gates, private roads, mud after rain, and safety rules all complicate a visit, and the target is often somewhere else anyway. The professional sequence is: check the agent and corporate records, check the residence, use skip tracing if needed — and go to the field when the case requires it, with the same documentation discipline as every other serve.
          </p>

          <h2>Corporation Commission Cases: A Different Notice World</h2>

          <p>
            One distinction worth understanding: Oklahoma Corporation Commission proceedings — pooling, spacing, regulatory orders — run on the Commission's own notice rules, which have their own requirements for who gets notice and how. Once a dispute leaves the Commission and becomes civil litigation, standard service statutes take over.
          </p>
          <p>
            Attorneys often need both on the same file — Commission notice practice for the regulatory side, ordinary process service for the civil claims. A good service company understands the split and can handle either, which matters more in this industry than almost anywhere else, because the two tracks have different deadlines and different documentation needs.
          </p>

          <h3>Appeals Take a Different Road</h3>
          <p>
            One more wrinkle worth knowing: appeals of Commission orders don't go to district court. Under the Oklahoma Constitution, they go straight to the Oklahoma Supreme Court, and the Commission itself is usually a party to the appeal. That means the server's job can include serving the Corporation Commission at its offices in Oklahoma City — along with every adverse party from the underlying proceeding. Different court, different rules, same discipline: serve the right parties, document every attempt, beat the deadline.
          </p>

          <h2>Why Documentation Quality Rules in Oil and Gas</h2>

          <p>
            There's a reason oil and gas lawyers obsess over service records: the money is big, the parties are many, and the challenges come years later. A surface damage judgment against an operator — or a title decision quieting ownership of a section — will be attacked on every available ground, and defective service is the classic ground. The affidavit of service, the skip-trace report, the documentation of every attempt: that's the armor that keeps the judgment standing.
          </p>
          <p>
            It's also why the 180-day clock matters so much here. With forty parties to serve and half of them out of state, the timeline fills up fast. Attorneys who organize service early — agents first, skip tracing running in parallel, out-of-state coordination started on day one — finish inside the window comfortably. The ones who serve one party at a time, in order, with no plan, are the ones checking the calendar in month five.
          </p>

          <h2>A Spreadsheet, Not a Mystery</h2>

          <p>
            Strip away the industry mystique and oil and gas service is a spreadsheet problem: every party, every entity type, every address, every deadline. The law is the same as any civil case. The skill is in the organizing — knowing that companies go through agents, individuals go through personal service, scattered heirs go through skip tracing, and the Corporation Commission has its own lane. Do that, and the biggest, most complicated cases in Oklahoma get served like everything else: on time, documented, and done.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Multi-Party Oil and Gas Service? We Handle the Spreadsheet.</h3>
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
                <h2 className="text-3xl font-bold mb-4">Need Professional Legal Support?</h2>
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
            <h2>The Bottom Line</h2>
            <p>
            Oil and gas litigation looks exotic, but service on it is a discipline problem, not a mystery. Companies get served through their registered agents, individuals get served personally, scattered interest owners get located with records and skip tracing, and Commission cases follow their own notice lane. Organize the party list, start early, document everything — and the biggest energy case in the state gets served like any other.
          </p>
          <p>
            At Just Legal Solutions, we've served summonses and legal documents across all 77 Oklahoma counties with the professionalism, speed, and documentation standards that courts expect. Whether you're on the serving side or the receiving side of a case, we're ready to help.
          </p>

          <p className="text-gray-700 italic mt-8">
            Need professional process serving in Oklahoma?{' '}
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
