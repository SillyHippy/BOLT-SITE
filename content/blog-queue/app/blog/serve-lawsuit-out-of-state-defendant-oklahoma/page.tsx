import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Serving a Lawsuit on an Out-of-State Oklahoma Defendant',
  description: 'Suing an out-of-state defendant from Oklahoma? Long-arm jurisdiction, 12 O.S. § 2004 out-of-state service, UIDDA subpoenas, and the 180-day deadline explained.',
  keywords: 'out of state defendant Oklahoma, long arm jurisdiction Oklahoma, 12 O.S. 2004 service, serve lawsuit another state, UIDDA subpoena Oklahoma, registered agent foreign entity Oklahoma',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Serving a Lawsuit on an Out-of-State Oklahoma Defendant',
    description: 'Suing an out-of-state defendant from Oklahoma? Long-arm jurisdiction, 12 O.S. § 2004 out-of-state service, UIDDA subpoenas, and the 180-day deadline explained.',
    url: 'https://justlegalsolutions.org/blog/serve-lawsuit-out-of-state-defendant-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Serving a Lawsuit on an Out-of-State Oklahoma Defendant',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/serve-lawsuit-out-of-state-defendant-oklahoma',
  },
  other: {
    'article:published_time': '2027-02-02',
    'article:modified_time': '2027-02-02',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'Oklahoma plaintiffs can sue out-of-state defendants when long-arm jurisdiction applies under 12 O.S. § 2004.1, but service must follow 12 O.S. § 2004 — often through a local server in the defendant\'s state — and the 180-day deadline in § 2004(I) is hard. UIDDA handles subpoenas, not summonses.',
    'ai-key-facts':
      'Long-arm jurisdiction under 12 O.S. § 2004.1 lets Oklahoma courts reach defendants who have minimum contacts with the state; Out-of-state service of a summons follows 12 O.S. § 2004 and usually requires a process server licensed where the defendant lives; The 180-day service deadline in 12 O.S. § 2004(I) can end a case if the plaintiff cannot complete service; Foreign corporations registered in Oklahoma must maintain a registered agent for service under 12 O.S. § 1148; UIDDA governs out-of-state subpoenas for discovery — it does not substitute for serving a summons to start a lawsuit',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Can I sue someone who lives in another state from an Oklahoma court?',
    answer: "Yes, if Oklahoma has personal jurisdiction over them. Under 12 O.S. § 2004.1, Oklahoma's long-arm statute lets district courts reach out-of-state defendants who have minimum contacts with the state — they did business here, caused harm here, or agreed to be sued here. Jurisdiction and service are separate questions. You can have jurisdiction and still fail if you don't get the summons delivered correctly under 12 O.S. § 2004.",
  },
  {
    question: 'How do I serve an out-of-state defendant in an Oklahoma lawsuit?',
    answer: "Most of the time you hire a process server licensed in the defendant's home state. Oklahoma's service rules under 12 O.S. § 2004 generally require delivery according to the law of the state where service happens, or by certified mail with return receipt when that state allows it. You file the Oklahoma summons and petition with your server, they attempt delivery locally, and they return a notarized affidavit that you file with the district court clerk. Don't mail the papers yourself unless the rules specifically permit it.",
  },
  {
    question: 'What is the 180-day deadline in 12 O.S. § 2004(I)?',
    answer: "After you file a lawsuit, you have 180 days to complete service on every defendant. If you can't get it done in that window, the court can dismiss the case without prejudice — meaning you can refile, but you lose time and momentum. Extensions are possible, but you have to ask before the clock runs out. Out-of-state defendants who move, hide, or dodge service are a common reason plaintiffs blow this deadline. Plan service before you file, not after.",
  },
  {
    question: 'Can I use UIDDA to serve a lawsuit on someone in another state?',
    answer: "No. The Uniform Interstate Depositions and Discovery Act — adopted in Oklahoma at 12 O.S. § 3201 et seq. — is for subpoenas in discovery, not for serving a summons and petition that starts a lawsuit. UIDDA lets you domesticate an Oklahoma subpoena through a court in the witness's state so they produce documents or testify. Serving the initial lawsuit still goes through 12 O.S. § 2004 and a process server in the defendant's jurisdiction. Mixing those up wastes weeks.",
  },
  {
    question: 'How do I serve a foreign corporation in an Oklahoma lawsuit?',
    answer: "Start with the registered agent. Foreign corporations doing business in Oklahoma must register with the Secretary of State and appoint a registered agent under 12 O.S. § 1148. Service on that agent at the address on file counts as service on the company. If the entity never registered, you may need alternative service under 12 O.S. § 2004(G) after showing ordinary service isn't possible. Pull the current registered agent listing before you assign the job — companies change agents more often than you'd think.",
  },
  {
    question: 'Do Oklahoma process servers handle out-of-state service themselves?',
    answer: "Licensed Oklahoma servers handle service inside Oklahoma's borders. For defendants in Texas, Kansas, Missouri, or anywhere else, we coordinate with vetted local servers who know that state's rules, courts, and filing requirements. We prepare the Oklahoma papers, transmit them to the out-of-state server, track the attempt, and return the affidavit to your file. You get one point of contact instead of juggling three time zones and two sets of court forms.",
  },
  {
    question: 'What if the out-of-state defendant avoids service?',
    answer: "Document every attempt. Each failed try goes in the server's log — dates, times, addresses, who answered the door, vehicle descriptions. After diligent but unsuccessful attempts, you can ask the Oklahoma court for alternative service under 12 O.S. § 2004(G), which may allow service by certified mail, publication, or other methods the judge approves. None of that is automatic. You need affidavits showing you tried the ordinary routes first, and the 180-day clock in § 2004(I) is still running while you work through it.",
  },
  {
    question: 'Does serving an out-of-state defendant give Oklahoma courts full power over them?',
    answer: "Service gets them into the case; jurisdiction determines what the court can decide. Long-arm jurisdiction under § 2004.1 covers many commercial and tort claims tied to Oklahoma, but not everything. A defendant can challenge jurisdiction in a pre-answer motion under 12 O.S. § 2012(B). If the court lacks jurisdiction, service was valid but the case still gets dismissed. Your attorney should evaluate both jurisdiction and service strategy before you spend money tracking someone across state lines.",
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Serving a Lawsuit on an Out-of-State Oklahoma Defendant"
        title="Serving a Lawsuit on an Out-of-State Oklahoma Defendant"
        pageDescription="Suing an out-of-state defendant from Oklahoma? Long-arm jurisdiction, 12 O.S. § 2004 out-of-state service, UIDDA subpoenas, and the 180-day deadline explained."
        description="Suing an out-of-state defendant from Oklahoma? Long-arm jurisdiction, 12 O.S. § 2004 out-of-state service, UIDDA subpoenas, and the 180-day deadline explained."
        pageUrl="https://justlegalsolutions.org/blog/serve-lawsuit-out-of-state-defendant-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={112}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Serving a Lawsuit on an Out-of-State Oklahoma Defendant', item: 'https://justlegalsolutions.org/blog/serve-lawsuit-out-of-state-defendant-oklahoma' }
        ]}
        articleDetails={{
          headline: 'Serving a Lawsuit on an Out-of-State Oklahoma Defendant',
          datePublished: '2027-02-02',
          dateModified: '2027-02-02',
          author: 'Just Legal Solutions Team',
          
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'out of state defendant Oklahoma',
          'long arm jurisdiction',
          '12 O.S. 2004 service',
          'UIDDA subpoena',
          'registered agent Oklahoma',
          'process serving',
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
            Process Serving
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Serving a Lawsuit on an Out-of-State Oklahoma Defendant
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Oklahoma can reach an out-of-state defendant when <strong>long-arm jurisdiction</strong> under{' '}
              <strong>12 O.S. § 2004.1</strong> applies — but you still have to <strong>serve the summons</strong>{' '}
              under <strong>12 O.S. § 2004</strong>, usually through a <strong>licensed server in their home state</strong>.
              You have <strong>180 days</strong> under <strong>§ 2004(I)</strong> to finish service or risk dismissal.
              <strong> UIDDA</strong> handles out-of-state <strong>subpoenas</strong>, not lawsuit summonses — and{' '}
              <strong>foreign corporations</strong> get served through their <strong>Oklahoma registered agent</strong>.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We coordinate out-of-state service under 12 O.S. 2004 and work with licensed servers nationwide when your defendant lives beyond our borders.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2027-02-02').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~14 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            Your client got hurt in Tulsa. The other driver lives in Dallas. Or a Kansas contractor skipped town after botching a job in Broken Arrow. Or a Nevada company sold defective equipment to an Oklahoma business and now won't return calls. You've got a case worth filing in Oklahoma district court — but the person you need to sue isn't here. That gap between "we have a claim" and "they're actually in the lawsuit" is where a lot of attorneys lose months. Out-of-state defendants aren't unservable. They're just served differently, under rules that trip people up when they're rushed or assumed to work like in-state delivery.
          </p>

          <h2>Long-Arm Jurisdiction: Can Oklahoma Even Reach Them?</h2>

          <p>
            Before you spend money on a server in another state, confirm Oklahoma has personal jurisdiction. Filing in the wrong court wastes filing fees and burns the 180-day service clock under 12 O.S. § 2004(I) before you've learned anything useful. Oklahoma's long-arm statute, 12 O.S. § 2004.1, lets district courts exercise jurisdiction over non-residents who have certain contacts with the state — transacting business here, committing torts here, owning property here, or agreeing to Oklahoma jurisdiction in a contract.
          </p>
          <p>
            Minimum contacts is the phrase you'll hear from the bench. Did the defendant purposefully direct activity toward Oklahoma? Did the harm land here? A one-off email probably isn't enough. A contract performed in Oklahoma County, an accident on the Creek Turnpike, or a product sold through an Oklahoma distributor — those usually are. Your petition should allege the specific § 2004.1 ground that fits. If jurisdiction is thin, expect a motion to dismiss before you ever get to the service fight.
          </p>

          <h3>Jurisdiction and Service Are Two Different Hurdles</h3>
          <p>
            Winning on jurisdiction doesn't mean you've served them. And perfect service doesn't cure a jurisdiction defect. We've seen cases where a defendant was hand-delivered in Texas but moved to dismiss because Oklahoma had no business hearing the dispute. We've also seen valid jurisdiction wasted because a plaintiff mailed papers to a old address in Colorado and counted it as done. Map both issues before you file: Can Oklahoma reach them? And how will we put the summons in their hands — or on their registered agent — in a way a judge will accept?
          </p>

          <h2>How Out-of-State Service Works Under 12 O.S. § 2004</h2>

          <p>
            Oklahoma's general service statute, 12 O.S. § 2004, governs how summonses get delivered. For defendants outside Oklahoma, subsection (B) and the rules built around it generally require service according to the law of the state where delivery happens. That means your Oklahoma-form summons and petition travel to Texas, or Arkansas, or wherever the defendant lives, and a process server licensed in that state executes the attempt under local rules.
          </p>
          <p>
            From our Glenpool office, we handle the Oklahoma side every day — prep, assignment, tracking, affidavit return. When the defendant is out of state, we coordinate with vetted local servers we've worked with on prior cases. They know whether their county requires appointment before a sub-serve, whether certified mail with return receipt is available for that case type, and what their courts expect on the return affidavit. You don't want an Oklahoma server guessing at Texas Rule of Civil Procedure 106. You want someone who serves in Tarrant County every week.
          </p>

          <h3>What the Out-of-State Server Needs From You</h3>
          <p>
            Clean copies of the filed summons and petition. The case number and court. The defendant's full legal name, last known address, physical description if you've got it, and any intel on work hours or vehicles. If the defendant is a company, the registered agent name and address from the Secretary of State listing — more on that below. Turnaround improves when your office sends a complete packet the first time instead of a partial scan followed by three email threads.
          </p>

          <h3>Certified Mail and Other Shortcuts</h3>
          <p>
            Some states allow service by certified mail, return receipt requested, signed by the defendant. Oklahoma permits this in certain circumstances under § 2004 when the receiving state's law allows it. It's cheaper than a personal serve. It's also easier to challenge if someone else signed the green card or the defendant claims they never got it. We use mail service when the rules clearly authorize it and the client accepts the tradeoff. When the stakes are high or the defendant has already dodged contact, personal delivery by a local server is the safer bet.
          </p>

          <h2>The 180-Day Clock Under § 2004(I)</h2>

          <p>
            Here's the deadline that keeps plaintiffs' lawyers up at night: 12 O.S. § 2004(I) gives you 180 days from filing to complete service on each defendant. Miss it without a valid extension and the court can dismiss the case. Not always automatically — but the defendant will move, and judges take the rule seriously.
          </p>
          <p>
            Out-of-state defendants stretch that window fast. Wrong address from the intake form. Defendant moved twice. Roommate lied and said they didn't live there. Company dissolved but still operates under a new LLC name. Each failed attempt eats days while the calendar doesn't pause. Build a service plan before you file: identify the defendant's location, pull corporate records, assign the out-of-state server, and budget time for a second or third attempt if the first one misses.
          </p>

          <h3>Extensions and Diligent Attempts</h3>
          <p>
            You can ask the court for more time, but ask early. An extension motion that says "we're still looking" without documented attempts gets denied. Attach server affidavits showing dates, locations, and results. If you're pursuing alternative service under § 2004(G) — publication, mailing to last known address, service on a corporate officer — you need a paper trail proving ordinary service wasn't reasonably possible. Judges in Tulsa County and across the state grant extensions when plaintiffs show real effort. They deny them when the file looks like nobody tried until day 175.
          </p>

          <h2>Registered Agents: Serving Foreign Corporations</h2>

          <p>
            If your defendant is a corporation or LLC that registered to do business in Oklahoma, start with the registered agent. Under 12 O.S. § 1148 and the Business Organizations Code, foreign entities must maintain a registered agent and office on file with the Secretary of State. Service on that agent is service on the company for purposes of 12 O.S. § 2004.
          </p>
          <p>
            Pull the current listing before you assign service. Agents change. Companies use commercial registered agent services with mail-forwarding addresses. We've served CT Corporation and Northwest Registered Agent dozens of times — they're legitimate targets when they're the agent of record. If the entity never registered in Oklahoma, you won't find a local agent. Then you're back to long-arm jurisdiction plus out-of-state personal service wherever the company actually operates, or alternative service after you've shown the ordinary routes failed.
          </p>

          <h2>UIDDA Is for Subpoenas, Not Summonses</h2>

          <p>
            This mix-up costs people weeks. The Uniform Interstate Depositions and Discovery Act — Oklahoma's version lives at 12 O.S. § 3201 et seq. — lets you compel out-of-state witnesses to produce documents or appear for deposition. You get an Oklahoma subpoena, walk it through a clerk in the witness's state, and serve it locally. UIDDA is a discovery tool after the case exists.
          </p>
          <p>
            It does not start a lawsuit. You cannot UIDDA a summons and petition onto a defendant in Florida and call it good. Starting the case requires service under § 2004 — personal delivery, approved mail, or alternative methods a court orders. We get calls every month from attorneys who confused the two statutes. Subpoena for bank records in Georgia? UIDDA path. Sue the account holder who lives in Georgia? § 2004 path with a Georgia process server. Different papers, different courts, different deadlines.
          </p>

          <h2>Coordinating With Local Servers in Other States</h2>

          <p>
            Oklahoma license doesn't travel. A server bonded under 12 O.S. 158.1 can serve anywhere in Oklahoma's 77 counties, but step across the Red River and you're in someone else's regulatory world. Good coordination looks like this: Oklahoma firm prepares and files the case, transmits sealed or courtesy copies to a partner server in the target state, that server attempts delivery under local law, returns a notarized affidavit, and the Oklahoma firm files the return with the district court clerk and tracks the answer deadline.
          </p>
          <p>
            We maintain relationships with licensed servers in Texas, Kansas, Missouri, Arkansas, and most surrounding states. When your defendant lands somewhere we don't cover directly, we tap national networks and still give you a single invoice and one point of contact from our office. You shouldn't be on the phone with a Dallas server at 7 a.m. and your filing clerk at 9 and wondering whether the affidavit format matches what Tulsa County expects.
          </p>

          <h3>What Comes Back in the Affidavit</h3>
          <p>
            The return of service proves delivery happened. It should identify the server, date, time, place, manner of service, and who received the papers. Out-of-state affidavits must satisfy both local requirements and Oklahoma's expectations. A missing case number or wrong defendant name can trigger a service challenge under 12 O.S. § 2012(B) even when the defendant got the papers.
          </p>

          <h2>When Defendants Dodge or Disappear</h2>

          <p>
            Out-of-state defendants who know a lawsuit is coming sometimes make themselves scarce — they don't answer the door, use a relative's address, or work remote from a site listed on the contract. Document every attempt. Skip tracing can locate a current address before you burn runs on a stale one. The earlier you invest in location, the less likely you are to stare at a dismissal motion on day 181.
          </p>

          <h2>Practical Checklist Before You File</h2>

          <p>
            One: confirm long-arm jurisdiction under § 2004.1 with specific factual allegations. Two: identify whether the defendant is an individual or entity and pull registered agent records if applicable. Three: locate a current address — don't rely on a three-year-old contract signature line. Four: line up the out-of-state server or mail strategy before filing, not after. Five: calendar the 180-day deadline from the filing date and set internal reminders at 90 and 150 days. Six: keep UIDDA in the discovery column and § 2004 in the service column — never swap them.
          </p>
          <p>
            Out-of-state service costs more than a Tulsa County run. It takes longer. But it's routine for firms that plan ahead. The cases that fail aren't the ones with defendants in another state — they're the ones where nobody thought about service until the client asked why nothing's happened yet.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need an Out-of-State Defendant Served from Oklahoma?</h3>
            <p className="text-blue-800 mb-4">
              Just Legal Solutions handles Oklahoma filings and coordinates licensed out-of-state servers nationwide — flat-rate pricing, GPS-tracked attempts, and court-ready affidavits returned fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Submit Assignment
              </Link>
              <a href="tel:5393676832" className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                Call (539) 367-6832
              </a>
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
            Suing someone who doesn't live in Oklahoma is normal civil practice, not a dead end. Long-arm jurisdiction under § 2004.1 gets you in the door. Service under § 2004 — usually through a licensed server in the defendant's state — gets them on the record. The 180-day deadline in § 2004(I) keeps the pressure on. UIDDA handles subpoenas later; registered agents handle foreign entities now. Plan all of it before you file and you won't be explaining to your client why the case got dismissed for something preventable.
          </p>
          <p>
            At Just Legal Solutions, we've served Oklahoma cases and coordinated out-of-state delivery from our Glenpool office with the documentation standards Tulsa County and courts across all 77 counties expect. Tell us where your defendant is and we'll map the service path.
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
