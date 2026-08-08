import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Serving a Defendant Who Lives on Tribal Land in Oklahoma',
  description: 'Serving a defendant who lives on tribal land in Oklahoma: state, tribal and federal court service rules, McGirt jurisdiction, and personal service steps.',
  keywords: 'serve defendant tribal land Oklahoma, tribal jurisdiction process service, McGirt service of process, tribal court service rules, Indian Country personal service, Oklahoma process server',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Serving a Defendant Who Lives on Tribal Land in Oklahoma',
    description: 'Serving a defendant who lives on tribal land in Oklahoma: state, tribal and federal court service rules, McGirt jurisdiction, and personal service steps.',
    url: 'https://justlegalsolutions.org/blog/serve-defendant-tribal-land-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Serving a Defendant Who Lives on Tribal Land in Oklahoma',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/serve-defendant-tribal-land-oklahoma',
  },
  other: {
    'article:published_time': '2027-01-06',
    'article:modified_time': '2027-01-06',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'The issuing court decides which service rules apply when a defendant lives on tribal land in Oklahoma. State court summons can be served personally in Indian Country under 12 O.S. § 2004, tribal courts follow their own codes, and federal cases follow Rule 4.',
    'ai-key-facts':
      'State court process may be served personally in Indian Country under 12 O.S. § 2004 and LeClair v. Powers; Tribal courts are separate sovereigns with their own service codes, so call the tribal court clerk before dispatch; McGirt restored Five Tribes reservations and made the issuing court the first question; Personal delivery with GPS-documented attempts builds the record a judge will accept',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Can a state court summons be served on tribal land in Oklahoma?',
    answer: "Yes. Under 12 O.S. § 2004(H)(1), service may be made anywhere within the state, and Oklahoma's Supreme Court held in LeClair v. Powers that personal service in Indian Country is valid — tribal land is not off limits to state process servers. The catch is jurisdiction: the state court must be able to hear the case, so confirm the forum before dispatching service.",
  },
  {
    question: 'Do tribal courts have their own rules for serving process?',
    answer: "Yes. Each tribe writes its own civil procedure code, and the rules differ from tribe to tribe. Some tribes require service through tribal marshals, tribal police, or the court clerk; others allow any adult who is not a party to serve. The reliable move is to call the tribal court clerk and confirm the current code provisions, forms, and proof requirements before any attempt.",
  },
  {
    question: 'Who can serve papers in a tribal court case?',
    answer: "It depends on the tribal code. Some Oklahoma tribal courts permit any competent adult who is not a party, which mirrors state practice under 12 O.S. § 2004(C)(2). Others direct service through tribal law enforcement or court personnel. The tribal court clerk can confirm who is authorized for the specific tribe and case.",
  },
  {
    question: 'Does McGirt mean my civil case has to be filed in tribal court?',
    answer: "Not automatically. McGirt v. Oklahoma was a criminal case about the Major Crimes Act, and it restored reservations for the Five Tribes. Civil jurisdiction is decided separately: tribal courts hear civil claims that arise in Indian Country and involve tribal members, while state courts can hear cases involving non-Indians and claims arising off tribal land. An attorney should make that call before service is attempted.",
  },
  {
    question: 'What if the defendant lives on tribal land but the case is in state court?',
    answer: "Personal service proceeds under 12 O.S. § 2004(C)(1) — delivery to the defendant personally, or substituted service at the dwelling with a resident who is fifteen or older. Verify the current address, make attempts at varied times, and document each one with dates, times, and GPS locations. The 180-day service deadline in 12 O.S. § 2004(I) still applies.",
  },
  {
    question: 'Can a process server just drive onto tribal land to serve papers?',
    answer: "For service of process in a proper case, generally yes — LeClair v. Powers recognizes that Indian Country is not a federal enclave closed to state process servers. That does not mean disregarding tribal authority: respect checkpoints and private roads, do not trespass, coordinate with tribal law enforcement when the tribal code or court clerk directs it, and never argue jurisdiction at the door.",
  },
  {
    question: 'What proof does a tribal court require after service?',
    answer: "The tribal code controls. Many tribal courts accept a certificate of service or affidavit from the server that states the date, time, place, method, and recipient. Because tribal court litigants are protected by the Indian Civil Rights Act's due process guarantees, the proof should be specific enough for the court to verify that the named defendant received notice.",
  },
  {
    question: 'What if the defendant cannot be found on tribal land?',
    answer: "Treat it like any diligent search: verify the address through public records, contact the tribal court clerk for any tribal registry or forwarding information, make attempts at varied times, and use substituted service where 12 O.S. § 2004(C)(1) permits. If service still cannot be made, the issuing court decides whether another method — such as service by publication under 12 O.S. § 2004(C)(3) — is available.",
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Serving a Defendant Who Lives on Tribal Land in Oklahoma"
        title="Serving a Defendant Who Lives on Tribal Land in Oklahoma"
        pageDescription="Serving a defendant who lives on tribal land in Oklahoma: state, tribal and federal court service rules, McGirt jurisdiction, and personal service steps."
        description="Serving a defendant who lives on tribal land in Oklahoma: state, tribal and federal court service rules, McGirt jurisdiction, and personal service steps."
        pageUrl="https://justlegalsolutions.org/blog/serve-defendant-tribal-land-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={115}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Serving a Defendant Who Lives on Tribal Land in Oklahoma', item: 'https://justlegalsolutions.org/blog/serve-defendant-tribal-land-oklahoma' }
        ]}
        articleDetails={{
          headline: 'Serving a Defendant Who Lives on Tribal Land in Oklahoma',
          datePublished: '2027-01-06',
          dateModified: '2027-01-06',
          author: 'Just Legal Solutions Team',

          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'serve defendant tribal land Oklahoma',
          'tribal jurisdiction process service',
          'McGirt service of process',
          'tribal court service rules',
          'Indian Country personal service',
          'Oklahoma process server',
          'tribal court',
          'McGirt v. Oklahoma'
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
            Tribal Land Service
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Serving a Defendant Who Lives on Tribal Land in Oklahoma
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Serving a defendant on tribal land starts with a <strong>jurisdiction question</strong>,
              not an address question. A <strong>state court</strong> summons can be served personally
              in Indian Country under <strong>12 O.S. § 2004</strong> and{' '}
              <strong>LeClair v. Powers</strong>, <strong>tribal courts</strong> follow their own
              service codes, and <strong>federal cases</strong> follow Rule 4 — so confirm the
              issuing court, call the tribal court clerk when a tribal court is involved, and
              document every personal service attempt with <strong>GPS</strong> and detail.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2027-01-06').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~12 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Tribal Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            Some service addresses raise a question before a process server ever knocks: whose court is this, and whose rules apply? Tribal land in Oklahoma is a legal boundary that runs through the middle of neighborhoods, highways, and rural routes. The answer to that question decides how the summons gets served, who may serve it, and what proof the court will accept. This guide covers the jurisdiction questions that come first, the service rules for state, tribal, and federal courts, and what personal service actually looks like when the defendant lives on tribal land.
          </p>

          <h2>Start With the Court, Not the Address</h2>
          <p>
            The classic mistake is treating a tribal address as just another stop on the route. Service of process is only as good as the court's authority to hear the case, and that authority has limits in Indian Country. For more than sixty years, the Supreme Court's decision in Williams v. Lee has held that state courts lack subject-matter jurisdiction over civil claims that arise in Indian Country between tribal members — cases that belong in tribal court instead. If the state court cannot hear the case, a perfect service of process in that case does not create jurisdiction. It just documents the mistake.
          </p>
          <p>
            The address still matters, of course. Under 12 O.S. § 2004(H)(1), an Oklahoma summons and petition may be served anywhere within the state, and the Oklahoma Supreme Court held in LeClair v. Powers that personal service in Indian Country is valid — Indian Country is not a federal enclave off limits to state process servers. The practical rule is simple: service on tribal land is allowed, but it has to be service in a case the court can actually hear. Jurisdiction first, then the route.
          </p>

          <h2>Why McGirt Changed the Question</h2>
          <p>
            McGirt v. Oklahoma, decided in 2020, held that Congress never disestablished the Muscogee (Creek) Nation's reservation, which means much of eastern Oklahoma remains Indian Country for federal purposes. The ruling was extended to the Cherokee, Chickasaw, Choctaw, and Seminole Nations — the Five Tribes — and to other reservations across the state. McGirt itself was a criminal case about the Major Crimes Act, but its civil shadow is what process servers feel on the ground: for matters arising on tribal land and involving tribal members, tribal courts hold jurisdiction, and the old assumption that every case is a state case is gone.
          </p>
          <p>
            The planning takeaway is that jurisdiction is no longer predictable from the county line. Two houses a mile apart can sit in different sovereigns' courts. Before dispatch, counsel confirms the case type, the parties, and where the claim arose, then identifies the issuing court. The issuing court determines the service rules, the proof, and the deadline — which is why the single most useful question a server can ask is which court issued the summons.
          </p>

          <h2>State Court Cases: 12 O.S. § 2004 Applies on Tribal Land</h2>
          <p>
            When a state court case proceeds — a dispute between non-Indian parties, a claim that arose off tribal land, or a matter the state court is otherwise authorized to hear — personal service follows the familiar statute. Under 12 O.S. § 2004(C)(1), service on an individual is made by delivering a copy of the summons and petition to the person personally, or by leaving copies at the defendant's dwelling house or usual place of abode with a resident who is fifteen years of age or older. Service may be made anywhere within the state, and that includes tribal land.
          </p>
          <p>
            Who may serve: a sheriff, or a private process server licensed and bonded under 12 O.S. § 158.1. A state summons does not need tribal permission to be served in Indian Country — LeClair v. Powers settled that question in 1981. What still applies is the 180-day service clock in 12 O.S. § 2004(I). When the route runs through tribal land, the practical work matters more: verifying the address is current, making attempts at varied times, and documenting each one so the record is unassailable.
          </p>

          <h2>Tribal Court Cases: Follow the Tribal Code</h2>
          <p>
            Tribal courts are courts of separate sovereigns, and each tribe writes its own service rules. The Cherokee Nation, Muscogee (Creek) Nation, Chickasaw Nation, Choctaw Nation, and Seminole Nation each publish civil procedure codes that specify how a summons is issued, who may serve it, and what proof the court accepts. Some tribes require service through tribal marshals, tribal police, or the court itself; others allow any adult who is not a party to serve, mirroring state practice. There is no single statewide answer, and assuming there is one is how service gets rejected.
          </p>
          <p>
            The step that saves the assignment is a phone call to the tribal court clerk before dispatch. The clerk can confirm the current code provisions, the correct forms, and whether the tribe requires coordination with tribal law enforcement. Tribal court litigants are protected by the due process guarantees of the Indian Civil Rights Act, so service that follows the tribal code protects the judgment that follows. And in child-custody matters, the Indian Child Welfare Act can move a case from state court to tribal court entirely — one more reason to confirm the forum early rather than after service.
          </p>

          <h2>Federal Court Cases: Rule 4 Sets the Pace</h2>
          <p>
            Post-McGirt criminal cases and certain civil matters run in federal court, where Federal Rule of Civil Procedure 4 governs service. Any person who is at least eighteen years old and not a party may serve a summons and complaint, as may a process server licensed in the state where service occurs. The summons and complaint must be delivered within 90 days after filing. On tribal land the same field realities apply, but the proof goes to a federal court's standards, and the return must satisfy Rule 4's requirements.
          </p>

          <h2>Personal Service on the Ground</h2>
          <p>
            Tribal land service is personal service with extra logistics. Many addresses are rural: gravel roads with no street signs, mail delivered to a post office box, a house sitting a quarter mile down a private lane. Gate codes, dogs, and unmarked turns are routine, and a written address can be nearly useless without a description of how to get there. GPS coordinates are often more reliable than the mailing address itself, which is why professional servers capture location data on every attempt.
          </p>
          <p>
            Respect the community. Some tribal communities restrict access to certain roads and facilities, and tribal police enforce their own authority. A server should never push past a checkpoint, argue jurisdiction at the door, or treat a ceremonial gathering or community event as an opportunity to make a delivery. If the tribal code or the court clerk says service goes through tribal law enforcement, that is the route to follow — coordination is not weakness, it is competence.
          </p>
          <p>
            Identity verification matters in close-knit communities. Confirm that the person receiving the papers is the named defendant: ask for the name, compare against the description or photograph in the instructions, and record what you observed. A clean, documented personal delivery on tribal land is the strongest form of service there is — and a misidentified recipient is the fastest way to waste the attempt.
          </p>

          <h2>What If the Address Does Not Pan Out</h2>
          <p>
            When the defendant is not home, substituted service under 12 O.S. § 2004(C)(1) can complete the job in a state court case: leave the copies with a resident fifteen or older at the dwelling, and document who accepted them. When the defendant genuinely cannot be found, the issuing court decides the next method. Service by publication under 12 O.S. § 2004(C)(3) requires an affidavit or verified petition showing that with due diligence service cannot be made by any other method — and publication does nothing to fix a case filed in the wrong court.
          </p>

          <h2>Proof That Holds Up in the Issuing Court</h2>
          <p>
            The return must match the court that issued the summons. For a state court case, the affidavit or return describes the delivery under 12 O.S. § 2004 and identifies the person served. For a tribal court case, the tribal code's certificate of service controls. For a federal case, Rule 4's proof requirements apply. Whatever the forum, the record should include the date, time, address, GPS location, who was present, what was delivered, and any coordination with tribal authorities — the clerk contacted, the instructions received, the law enforcement officer who assisted.
          </p>
          <p>
            One warning worth repeating: if the case turns out to belong in tribal court, a state court judgment entered against a tribal member on a claim arising in Indian Country can be challenged for lack of jurisdiction. Service confirms notice; the court's authority is the foundation. Get the forum right first, serve properly second, and the judgment is built to last.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need a Tribal Land Service Done Right?</h3>
            <p className="text-blue-800 mb-4">
              Just Legal Solutions serves all 77 Oklahoma counties from our Glenpool home office with flat-rate pricing, GPS-tracked service, and court-ready affidavits delivered within 24 hours — including routes across tribal land.
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
              <Link href="/blog/serving-papers-rural-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Rural Routes</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Serving Papers in Rural Oklahoma</h3>
                <p className="text-sm text-gray-600">Unmarked roads, GPS location work, and attempt documentation for remote addresses.</p>
              </Link>
              <Link href="/blog/in-state-vs-out-of-state-service-process-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Jurisdiction Basics</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">In-State vs. Out-of-State Service</h3>
                <p className="text-sm text-gray-600">How the court's reach shapes service methods, deadlines, and proof.</p>
              </Link>
              <Link href="/blog/due-diligence-service-publication-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Last Resort</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Due Diligence Before Publication</h3>
                <p className="text-sm text-gray-600">What judges require before service by publication under 12 O.S. § 2004(C)(3).</p>
              </Link>
              <Link href="/blog/process-serving-federal-courts-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Federal Rules</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Process Serving for Federal Courts</h3>
                <p className="text-sm text-gray-600">Rule 4 service, deadlines, and proof requirements in federal cases.</p>
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
                <h2 className="text-3xl font-bold mb-4">Need a Defendant Served on Tribal Land?</h2>
                <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                  Just Legal Solutions provides licensed, bonded, and insured process serving, courier, and notary services across all 77 Oklahoma counties — with court-clerk coordination for tribal court assignments.
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
            Serving a defendant who lives on tribal land in Oklahoma is a jurisdiction question with a delivery at the end of it. Confirm which court issued the summons and whether that court can hear the case. Then serve under the rules that court follows: 12 O.S. § 2004 for state court, the tribal code for tribal court, Rule 4 for federal court. Verify the address, coordinate when the tribe requires it, and document every attempt with the kind of detail a judge can rely on.
          </p>
          <p>
            At Just Legal Solutions, we handle tribal land assignments every week — licensed and bonded under 12 O.S. § 158.1, GPS-documented on every attempt, and coordinated with tribal court clerks when the assignment calls for it. If your defendant lives on tribal land, we can get it done across all 77 Oklahoma counties.
          </p>

          <p className="text-gray-700 italic mt-8">
            Need process served on tribal land in Oklahoma?{' '}
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
