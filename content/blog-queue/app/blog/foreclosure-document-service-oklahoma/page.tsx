import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen, FileText } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Serving Foreclosure Documents in Oklahoma',
  description: 'How foreclosure summons and petition service works in Oklahoma: who gets served, personal and substituted service, service by publication, and proof of service.',
  keywords: 'foreclosure document service Oklahoma, mortgage foreclosure papers, serve foreclosure summons Oklahoma, foreclosure service by publication, Oklahoma foreclosure petition, process server Oklahoma',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Serving Foreclosure Documents in Oklahoma',
    description: 'How foreclosure summons and petition service works in Oklahoma: who gets served, personal and substituted service, service by publication, and proof of service.',
    url: 'https://justlegalsolutions.org/blog/foreclosure-document-service-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Serving Foreclosure Documents in Oklahoma',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/foreclosure-document-service-oklahoma',
  },
  other: {
    'article:published_time': '2026-10-28',
    'article:modified_time': '2026-10-28',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'Oklahoma foreclosures are judicial: the lender files a petition, the court issues a summons, and every defendant whose interest may be affected must be served. Personal service under 12 O.S. § 2004 is the standard; substituted service at the residence and service by publication after documented due diligence come next, and a clean return of service protects the judgment and the title it produces.',
    'ai-key-facts':
      'Oklahoma foreclosures are judicial: lenders file a petition in district court and a judge orders the sale; The summons and petition must be served on borrowers, record owners, lienholders, spouses, and tenants or occupants; Personal service is the standard under 12 O.S. § 2004, with substituted service at the usual place of abode and service by publication under 12 O.S. § 2004(C)(3) as alternatives; Publication requires an affidavit or verified petition showing due diligence; A defendant generally has 20 days to answer under 12 O.S. § 2006(A) and plaintiffs have a 180-day service window under 12 O.S. § 2004(I); A clean return of service protects the foreclosure judgment and the title it produces',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Who has to be served in an Oklahoma foreclosure?',
    answer: "Every defendant whose interest may be affected by the judgment: the borrower and co-borrowers on the note, record owners, a spouse with a potential interest, junior lienholders and judgment creditors whose liens would be affected by the sale, and tenants or occupants whose right to stay could be cut off. Counsel builds the defendant list from the loan file and title work, and the process server serves each named party separately.",
  },
  {
    question: 'How long does the borrower have to answer after being served?',
    answer: "In Oklahoma district court, a defendant generally has 20 days from the date of service to file a written answer under 12 O.S. § 2006(A). The summons states the deadline, and the petition attached to it explains what is being claimed. A borrower who misses the deadline risks a default judgment, which is one reason the date of service on the return matters so much.",
  },
  {
    question: 'Can foreclosure papers be served by publication in Oklahoma?',
    answer: "Yes, but only when the plaintiff files an affidavit or verified petition stating that with due diligence service cannot be made by any other method, under 12 O.S. § 2004(C)(3). The affidavit must be earned with real attempts, substituted service where possible, inquiries, and records searches. The affidavit and the published notice are jurisdictional: a defective publication can void service and allow a default judgment to be set aside later.",
  },
  {
    question: 'Does the process server have to serve tenants and occupants too?',
    answer: "Occupants hold rights in the property that a foreclosure sale can affect, and federal law gives bona fide tenants protections after a sale. Counsel often names occupants as parties or asks for service by a court-authorized method. The process server cannot decide who needs service; the attorney's defendant list controls, and the server should report every occupant encountered so counsel can make that call.",
  },
  {
    question: 'What if the borrower refuses to take the papers?',
    answer: "Refusing the papers does not stop service. Oklahoma law does not require the defendant to accept the packet, and a server can complete service by leaving the documents in a way the rule permits, then documenting the refusal. The return of service should describe exactly what happened: who was present, what was said, and how the documents were delivered.",
  },
  {
    question: 'What happens if foreclosure service is done wrong?',
    answer: "A defective service can void the court's judgment against that defendant, even after the sale. The defendant can later attack the judgment, and title companies will not insure a foreclosure sale without a clean service record. The cost of a bad return is not a redo; it is a set-aside judgment and a title problem, which is why accurate returns matter so much in foreclosure work.",
  },
  {
    question: 'How many attempts are needed before substituted service or publication?',
    answer: "There is no fixed number. What matters is a genuine effort: multiple visits to the last-known address at different times of day, including evenings and weekends; attempts at a known workplace; and a substituted-service attempt where a household resident is available. Publication requires documented due diligence under 12 O.S. § 2004(C)(3). A server's GPS-dated attempt log is the evidence the attorney and the court rely on.",
  },
  {
    question: 'What proof do I get that foreclosure papers were served?',
    answer: "A court-ready affidavit or return of service for each defendant, describing who was served, what was delivered, when and where it happened, and the method used. GPS data and photographs support the return but do not replace an accurate written description. The attorney files the returns with the court, and the title company reads them before the sale closes.",
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Serving Foreclosure Documents in Oklahoma"
        title="Serving Foreclosure Documents in Oklahoma"
        pageDescription="How foreclosure summons and petition service works in Oklahoma: who gets served, personal and substituted service, service by publication, and proof of service."
        description="How foreclosure summons and petition service works in Oklahoma: who gets served, personal and substituted service, service by publication, and proof of service."
        pageUrl="https://justlegalsolutions.org/blog/foreclosure-document-service-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={114}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Serving Foreclosure Documents in Oklahoma', item: 'https://justlegalsolutions.org/blog/foreclosure-document-service-oklahoma' }
        ]}
        articleDetails={{
          headline: 'Serving Foreclosure Documents in Oklahoma',
          datePublished: '2026-10-28',
          dateModified: '2026-10-28',
          author: 'Just Legal Solutions Team',
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'foreclosure document service Oklahoma',
          'mortgage foreclosure papers',
          'serve foreclosure summons Oklahoma',
          'foreclosure service by publication',
          'Oklahoma foreclosure petition',
          'process server Oklahoma',
          'foreclosure',
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
            <FileText className="w-4 h-4" />
            Foreclosure Service
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Serving Foreclosure Documents in Oklahoma
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Oklahoma foreclosures are <strong>judicial</strong>. The lender files a <strong>petition</strong>,
              the court issues a <strong>summons</strong>, and both must be served on every defendant whose
              interest may be affected: borrowers, co-signers, record owners, lienholders, spouses, and tenants
              or occupants. <strong>Personal service</strong> under <strong>12 O.S. § 2004</strong> is the
              standard. When a defendant cannot be reached, <strong>substituted service</strong> at the residence
              or <strong>service by publication</strong> after documented due diligence may apply, and a clean
              return of service protects the judgment and the title it produces.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and serves all 77 Oklahoma counties. We align every foreclosure service assignment with 12 O.S. 2004 requirements and document each attempt with GPS and a court-ready return.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2026-10-28').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~11 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
              Foreclosure in Oklahoma is a court case, and a court case starts with papers in someone's hand.
              Before a judge can order a foreclosure sale, the lender's petition and the court's summons must
              reach everyone whose interest in the property could be affected, and the service has to be done
              right the first time. This guide walks through the summons and petition, who has to be served,
              the methods Oklahoma allows, when publication becomes necessary, and the proof that protects the
              judgment at the end.
            </p>

            <h2>Oklahoma Foreclosures Are Court Cases</h2>
            <p>
              Oklahoma does not generally allow a lender to foreclose through a simple power of sale hidden in
              the mortgage. Foreclosure here is judicial: the lender files a petition in the district court in
              the county where the property sits, the court issues a summons, and a judgment and order of sale
              come from a judge. 12 O.S. § 686 is the statute that governs the foreclosure action itself, from
              the judgment for the amount due to the order directing the sale of the property.
            </p>
            <p>
              Because a judge must act, the borrower and every other interested party are entitled to notice in
              a form the court will accept. Service is how the court learns it can safely proceed against a
              defendant. If service is defective, the court's judgment can be set aside, sometimes after the
              sale has already happened, and the title the buyer thought they received can be thrown into doubt.
            </p>

            <h2>The Petition and the Summons</h2>

            <h3>The petition names the parties</h3>
            <p>
              The petition is the lender's complaint. It names the plaintiff (the lender or the current holder
              of the note and mortgage), the defendants, the property, and the claim: typically the note, the
              default, and the request for judgment and sale. Getting the caption right matters at service time,
              because every defendant named in the petition is a person who must be served.
            </p>
            <p>
              Who ends up in the caption? Usually the borrower and any co-borrowers, a spouse whose homestead
              or marital interest could be affected, junior mortgage holders, judgment lienholders, homeowners'
              associations with unpaid assessments, and tenants or occupants whose rights in the property might
              be cut off by the sale. When the lender does not know who occupies the property or claims an
              interest, Oklahoma practice often names them as unknown parties, sometimes styled "John Doe," so
              the court can clear the title.
            </p>

            <h3>The summons sets the clock</h3>
            <p>
              The summons is the court's official notice. It tells each defendant that a lawsuit has been filed
              and that they must respond. In Oklahoma district court, a defendant generally has 20 days from the
              date of service to file a written answer under 12 O.S. § 2006(A). The summons carries the case
              number, the court, and the deadline, and the petition attached to it tells the defendant exactly
              what is being claimed.
            </p>
            <p>
              For a process server, the summons and petition travel as one packet. The assignment is to deliver
              both, to the right person, at the right place, within the plaintiff's time to complete service:
              the general 180-day window under 12 O.S. § 2004(I), unless the court shortens or extends it.
            </p>

            <h2>Who Has to Be Served</h2>
            <p>
              The short answer: every defendant whose interest may be affected by the foreclosure judgment.
              That usually means the borrower and co-borrowers on the note, the record owners of the property,
              any spouse with a potential interest, junior lienholders and judgment creditors whose liens would
              be wiped out or pushed down by the sale, and tenants or occupants who hold rights in the property.
              A lender that misses a party does not necessarily get a second chance: the omitted party can later
              attack the judgment, and title companies will not insure a sale without a clean service record.
            </p>
            <p>
              This is why the service list for a foreclosure is rarely a single name. The attorney usually
              supplies the defendant list from the loan file and the title work. The process server's job is to
              serve each named party, and to report honestly when a party cannot be located so counsel can
              decide on the next lawful step.
            </p>

            <h2>Personal Service on the Borrower</h2>
            <p>
              Personal delivery is the gold standard. Under 12 O.S. § 2004, the server hands the summons and
              petition to the defendant personally, wherever they are found: at home, at work, or in the front
              yard. Personal service leaves the least room for dispute, and it is the method courts prefer. The
              server should verify identity before handing over the packet: name, physical description, date of
              birth when available, and any identifying documents or statements that confirm the person is the
              defendant.
            </p>
            <p>
              Foreclosure defendants can be harder to find than most. The borrower may have moved after the
              notice of default, the property may sit vacant, or the house may be locked and gated. Address
              verification, skip tracing, and attempts at varied times of day, evenings and weekends included,
              turn a stale address into a served defendant more often than people expect. Every attempt is
              logged with date, time, and GPS location so the record tells the whole story.
            </p>

            <h2>Substituted Service at the Home</h2>
            <p>
              When the defendant cannot be reached personally but a home exists, Oklahoma allows substituted
              service at the defendant's usual place of abode. The papers are left with a resident of the
              household, generally a family member or household resident 15 years of age or older, and the
              server documents who received them and their relationship to the defendant. This is not a
              shortcut; it is a separate, court-recognized method that works when personal service is genuinely
              unavailable.
            </p>
            <p>
              Substituted service fails the moment the server hands papers to the wrong person. A neighbor
              visiting for coffee, a contractor painting the porch, or a tenant who does not live with the
              defendant does not qualify. The server notes exactly who accepted the papers and why that person
              resides at the address, because the return of service is what the court and the title examiner
              will read later.
            </p>

            <h2>Tenants, Occupants, and Unknown Parties</h2>
            <p>
              Foreclosures frequently involve people who are not on the note: tenants renting the house,
              relatives living there, or squatters. A foreclosure sale can cut off their right to stay, and
              federal law gives bona fide tenants protections after a sale, so identifying and serving occupants
              matters even when their names are not in the loan file. Counsel will often name occupants as
              parties or ask that they be served by whatever method the court authorizes.
            </p>
            <p>
              Unknown parties are handled differently. When the lender cannot identify who might hold an
              interest, such as an estranged spouse, an heir, or a lienholder whose claim never surfaced,
              Oklahoma courts permit notice by publication to those unknown parties, clearing the title against
              claims the lender could not name. The known defendants still get personal or substituted service;
              publication is not a substitute for serving people you can actually find.
            </p>

            <h2>Service by Publication</h2>
            <p>
              Publication is the notice of last resort, and Oklahoma does not hand it out freely. Under 12 O.S.
              § 2004(C)(3), a plaintiff may serve by publication only when an affidavit or a verified petition
              states that with due diligence service cannot be made by any other method. That affidavit has to
              be earned: real attempts at the last-known address at varied times, substituted service where a
              resident was available, inquiries to relatives, neighbors, and employers, and a search of the
              records and databases that might reveal a current address.
            </p>
            <p>
              When the court permits publication, the notice is published in a newspaper as the court directs,
              and the record must show the publication and the defendant's last-known address. The stakes are
              high: the affidavit and the notice are jurisdictional. A defective publication can void the
              service, and a default judgment built on it can be set aside later, after the lender has already
              spent months and money on the case. This is the scenario where a thorough process server and a
              complete due-diligence file are worth far more than the service fee.
            </p>

            <h2>Deadlines and Proof of Service</h2>
            <p>
              Two clocks matter in every foreclosure. The defendant has 20 days to answer after service under
              12 O.S. § 2006(A). The plaintiff has 180 days from filing to complete service under 12 O.S. §
              2004(I). A foreclosure that stalls because the defendant list was not finished on time pushes
              every other deadline, motion practice, judgment, and sale, down the calendar.
            </p>
            <p>
              Proof of service closes the loop. The server returns a court-ready affidavit or return describing
              the defendant served, the documents delivered, the date, time, and address, and the method used.
              GPS data and photographs support the return but never replace an accurate written description. A
              clean return is what the court accepts when it enters judgment and what a title company reads
              before insuring the sale.
            </p>

            <h2>How a Foreclosure Service Assignment Should Run</h2>
            <p>
              A professional foreclosure assignment starts with the paperwork: the summons, the petition, the
              complete defendant list, and the deadline. The server verifies each address, runs location work
              on defendants with stale addresses, and plans attempts at the right times: evenings and weekends
              for working borrowers, early calls for rural routes that run long.
            </p>
            <p>
              Every defendant gets a separate attempt log, because foreclosure defendants are not
              interchangeable. The server documents what happened at each address, who answered, what was said,
              and what was left behind. If a defendant cannot be found, the log says so plainly. An honest
              unsuccessful report lets counsel choose between more attempts, substituted service, or a
              publication motion, instead of discovering the gap at the default-judgment hearing.
            </p>

            <h2>Mistakes That Delay Foreclosures</h2>
            <p>
              The most expensive mistakes are the preventable ones: handing the papers to a roommate who is not
              a household resident and calling it service; publishing against a borrower who was sitting at a
              known address; skipping substituted service because personal service failed once; missing a junior
              lienholder on the defendant list; or describing a delivery that never happened. Each one buys a
              hearing, a motion, or a set-aside judgment. The fix is boring and reliable: serve the right
              people, document everything, and tell counsel the truth about what could not be done.
            </p>

            {/* Primary CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Need Foreclosure Papers Served?</h3>
              <p className="text-blue-800 mb-4">
                Just Legal Solutions serves all 77 Oklahoma counties with flat-rate pricing, GPS-tracked
                attempts, and court-ready affidavits delivered within 24 hours. We handle the full defendant
                list, from borrowers to lienholders to occupants.
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
              <Link href="/blog/due-diligence-service-publication-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Publication Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Due Diligence Before Service by Publication</h3>
                <p className="text-sm text-gray-600">What Oklahoma courts require before you can publish notice against a missing defendant.</p>
              </Link>
              <Link href="/blog/substituted-service-residence-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Service Method Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Substituted Service at the Residence</h3>
                <p className="text-sm text-gray-600">When and how Oklahoma allows papers to be left with a household resident.</p>
              </Link>
              <Link href="/blog/serving-summons-answer-deadline-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Deadline Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">The 20-Day Answer Deadline</h3>
                <p className="text-sm text-gray-600">What happens after the summons is served and what defendants must file.</p>
              </Link>
              <Link href="/blog/skip-tracing-bad-address-oklahoma-process-serving" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Location Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Skip Tracing a Bad Address</h3>
                <p className="text-sm text-gray-600">How location work finds borrowers who moved after the notice of default.</p>
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
                <h2 className="text-3xl font-bold mb-4">Foreclosure Case Moving? Get the Defendant List Served Right.</h2>
                <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                  Just Legal Solutions provides licensed, bonded, and insured process serving across all 77
                  Oklahoma counties, with GPS-tracked attempts and court-ready returns for every defendant.
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
              Serving foreclosure documents in Oklahoma is about more than leaving a packet at the property. The
              summons and petition have to reach every defendant whose interest could be affected, through a
              method the court will accept: personal service under 12 O.S. § 2004, substituted service at the
              residence, or service by publication after real, documented due diligence. The 20-day answer
              clock, the 180-day service window, and the return of service are the moving parts that keep the
              case on track, and a clean record is what makes the judgment and the title it produces stick.
            </p>
            <p>
              At Just Legal Solutions, we build that record every day: verified addresses, GPS-tagged attempts,
              honest unsuccessful reports, and court-ready returns across all 77 Oklahoma counties. If your
              foreclosure needs the full defendant list served, we will handle it the way the court expects.
            </p>

            <p className="text-gray-700 italic mt-8">
              Need a foreclosure packet served in Oklahoma?{' '}
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
