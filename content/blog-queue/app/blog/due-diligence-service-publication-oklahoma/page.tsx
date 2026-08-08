import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'What Counts as Due Diligence Before Service by Publication in Oklahoma',
  description: 'Due diligence before service by publication in Oklahoma: attempts, inquiries, skip tracing, and documentation — what judges require under 12 O.S. § 2004(C)(3).',
  keywords: 'due diligence service by publication Oklahoma, affidavit of due diligence, locate defendant Oklahoma, skip tracing before publication, service by publication requirements, Oklahoma process server',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'What Counts as Due Diligence Before Service by Publication in Oklahoma',
    description: 'Due diligence before service by publication in Oklahoma: attempts, inquiries, skip tracing, and documentation — what judges require under 12 O.S. § 2004(C)(3).',
    url: 'https://justlegalsolutions.org/blog/due-diligence-service-publication-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'What Counts as Due Diligence Before Service by Publication in Oklahoma',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/due-diligence-service-publication-oklahoma',
  },
  other: {
    'article:published_time': '2026-09-24',
    'article:modified_time': '2026-09-24',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'Before Oklahoma courts allow service by publication, plaintiffs must show due diligence — multiple attempts at varied times, real-world inquiries, and records searches — documented in an affidavit stating service cannot be made by any other method under 12 O.S. § 2004(C)(3)(a).',
    'ai-key-facts':
      'Publication requires an affidavit or verified petition stating that with due diligence service cannot be made by any other method, 12 O.S. § 2004(C)(3)(a); Due diligence means reasonable diligence under the circumstances, not exhausting every conceivable source; Courts expect attempts at varied times, substituted service where possible, contact with relatives and employers, and records searches; The affidavit and notice are jurisdictional — sloppy diligence can void a later default judgment; Skip tracing and GPS-documented attempts build the record a judge will accept',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'What is due diligence for service by publication in Oklahoma?',
    answer: "Due diligence is the good-faith effort to locate and personally serve the defendant before asking the court for the publication fallback. Under 12 O.S. § 2004(C)(3)(a), you must file a verified petition or separate affidavit stating that with due diligence service cannot be made upon the defendant by any other method. Oklahoma courts interpret that as reasonable diligence under the circumstances — a genuine, documented effort, not a single trip to an old address.",
  },
  {
    question: 'How many service attempts are enough before publication?',
    answer: "There's no magic number, and judges don't count attempts the way you'd count votes. What matters is that the attempts show genuine effort: multiple tries at the last-known address at different times of day, including evenings and weekends; attempts at a workplace if one is known; and a substituted-service attempt under 12 O.S. § 2004(C)(1) where a co-resident 15 or older is available at the dwelling. Two noon visits on weekdays tell a judge almost nothing. Varied, documented attempts tell the real story.",
  },
  {
    question: 'Do I have to try substituted service before publication?',
    answer: "Generally, yes — where it's available. Substituted service under 12 O.S. § 2004(C)(1) lets a server leave papers with a person 15 or older who resides at the defendant's dwelling house or usual place of abode. If a defendant has a home and a server reaches the door, that's a method of service other than publication, and the court will expect you to have used it or documented why it wasn't possible. Skipping straight to publication while a perfectly servable spouse sits behind the door is exactly the kind of shortcut courts reject.",
  },
  {
    question: 'What records and databases should I search?',
    answer: "A credible search covers the places real people leave traces: voter registration, property records, vehicle and driver records, utility and phone records, public records databases, jail and prison custody checks through VINELink and the DOC offender search, and social media or people-search engines. Skip tracing firms layer proprietary databases on top of those. The goal isn't to check everything — it's to check the sources most likely to reveal where the defendant actually is.",
  },
  {
    question: 'Can I use publication because the defendant is avoiding me?',
    answer: "Not automatically. Avoidance and unlocatability are different problems. A defendant who dodges the server but still lives at a known address hasn't made service impossible — the server can use varied times, drop service on refusal, and substituted service with a resident. Publication under 12 O.S. § 2004(C)(3) is for defendants who genuinely cannot be served by any other method. If the person is findable, the court will expect you to serve them where they are.",
  },
  {
    question: 'What goes in the affidavit of due diligence?',
    answer: "The affidavit should walk the court through every step you took: each service attempt with date, time, location, and result; every person contacted — neighbors, relatives, landlords, employers — with what they said; every database searched and what it returned; and the conclusion that the defendant's location remains unknown and publication is necessary. Specificity is credibility. An affidavit that says \"searched and couldn't find him\" without detail is an affidavit that gets the motion denied.",
  },
  {
    question: 'Does skip tracing count as due diligence?',
    answer: "Yes, and it's often the most important part of it. Skip tracing uses public records, utility data, proprietary databases, and social media to find a current address for a defendant who's moved or gone quiet. A documented skip trace — who was searched, when, and what came back — is concrete evidence of due diligence that judges take seriously. It's also usually the thing that actually finds the defendant, which is the best possible outcome for your case.",
  },
  {
    question: 'What if I find a new address during my search?',
    answer: "Then serve there first. Publication is only available when service cannot be made by any other method, and a fresh address changes that equation completely. If the search produces a lead, dispatch a server to that address, document the attempt, and only circle back to publication if the new lead also fails. Judges see right through a plaintiff who finds a forwarding address and publishes anyway.",
  },
  {
    question: 'Who prepares the due diligence affidavit?',
    answer: "The plaintiff or their attorney prepares and signs it — it's a sworn statement, so it has to be verified and notarized. A licensed process server supplies the evidence underneath it: GPS-tagged attempt logs, dated returns for every try, and skip-tracing reports. The server's documentation is what makes the plaintiff's affidavit credible, which is why the quality of the fieldwork matters as much as the quality of the writing.",
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="What Counts as Due Diligence Before Service by Publication in Oklahoma"
        title="What Counts as Due Diligence Before Service by Publication in Oklahoma"
        pageDescription="Due diligence before service by publication in Oklahoma: attempts, inquiries, skip tracing, and documentation — what judges require under 12 O.S. § 2004(C)(3)."
        description="Due diligence before service by publication in Oklahoma: attempts, inquiries, skip tracing, and documentation — what judges require under 12 O.S. § 2004(C)(3)."
        pageUrl="https://justlegalsolutions.org/blog/due-diligence-service-publication-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={115}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'What Counts as Due Diligence Before Service by Publication in Oklahoma', item: 'https://justlegalsolutions.org/blog/due-diligence-service-publication-oklahoma' }
        ]}
        articleDetails={{
          headline: 'What Counts as Due Diligence Before Service by Publication in Oklahoma',
          datePublished: '2026-09-24',
          dateModified: '2026-09-24',
          author: 'Just Legal Solutions Team',
          
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'due diligence service by publication Oklahoma',
          'affidavit of due diligence',
          'locate defendant Oklahoma',
          'skip tracing before publication',
          'service by publication requirements',
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
            Due Diligence
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            What Counts as Due Diligence Before Service by Publication in Oklahoma
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Before an Oklahoma court allows <strong>service by publication</strong>, you must file an
              affidavit or verified petition stating that with <strong>due diligence</strong> service
              cannot be made by any other method (<strong>12 O.S. § 2004(C)(3)(a)</strong>). That
              means <strong>varied attempts</strong>, <strong>substituted service</strong> where
              possible, real-world <strong>inquiries</strong>, and <strong>skip tracing</strong> —
              all documented with dates, times, and results.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2026-09-24').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~13 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            Service by publication is the legal equivalent of shouting into the newspaper and hoping the right person hears it. Courts don't hand that out lightly, and they've built a gate in front of it: due diligence. Before a judge lets you publish a notice, you have to prove you tried everything else first. This guide explains what due diligence actually means in Oklahoma, what judges expect you to do, and how to document the effort so the request survives scrutiny.
          </p>

          <h2>The Legal Trigger</h2>
          <p>
            The gate is in the statute itself. Under 12 O.S. § 2004(C)(3)(a), service by publication on a named defendant is available when it is stated in a petition verified by the plaintiff or the plaintiff's attorney — or in a separate affidavit filed with the court — that with due diligence service cannot be made upon the defendant by any other method. Notice the shape of that sentence: publication isn't a method you pick. It's a method you qualify for by proving the other methods failed.
          </p>
          <p>
            And Oklahoma courts hold the standard seriously. The case law describes due diligence as reasonable diligence under the circumstances — you don't have to exhaust every conceivable avenue of inquiry, but you do have to make a genuine, good-faith effort. What's "reasonable" depends on the case: a defendant with family ties, a job history, and property records in the county demands a deeper search than a drifter with no known connections. The common thread is effort you can prove.
          </p>

          <h2>What Courts Expect You to Try</h2>

          <h3>Personal Service Attempts — at Varied Times</h3>
          <p>
            The foundation of any due-diligence record is the process server's attempt log. Courts want to see attempts that look like a real effort to find a real person: visits to the last-known address at different times of day, including mornings, evenings, and weekends; attempts at a known workplace; and a substituted-service attempt under 12 O.S. § 2004(C)(1) when a co-resident 15 or older is available at the defendant's dwelling. Each attempt is logged with a date, time, and GPS-verified location. Two attempts at noon on back-to-back weekdays reads as theater. A spread of attempts across a week reads as diligence.
          </p>

          <h3>Real-World Inquiries</h3>
          <p>
            Records only go so far, which is why courts value the human layer: asking the neighbors when the defendant moved and where they went; talking to relatives who might know a forwarding address; checking with the landlord about where the lease went; calling the employer to see if the defendant still works there and where they live now. These inquiries have to be documented — who was asked, when, and what they said. A neighbor who says "they left for Texas last spring" is information your affidavit has to capture, because it's exactly the kind of lead that shows diligence and shapes the next step.
          </p>

          <h3>Records and Databases</h3>
          <p>
            The paper trail comes next. A credible search touches the sources where people leave traces: voter registration records, property ownership records, vehicle and driver records, utility accounts, public records databases, and people-search engines. Two checks that often turn up surprising answers: custody records — a defendant who "disappeared" may be in a county jail or a DOC facility, and VINELink or the DOC offender search will say so — and death records, which end the search for a different reason. Skip tracing layers proprietary databases on top of all of it. The point isn't to check every source known to man; it's to check the sources most likely to reveal where this defendant went.
 </p>

 <h2>What a Real Skip Trace Looks Like</h2>
 <p>
 Skip tracing is the investigation layer of due diligence, and it's more structured than running a name through a search engine. A professional trace starts with the identifiers you have — full legal name, date of birth, last known address, phone numbers, vehicle information, and any Social Security number — and builds outward through layers of data: public records, utility and subscription databases, property and tax records, employment data, and court filings. Each layer either confirms the last address, produces a new one, or throws up a lead worth an in-person check.
 </p>
 <p>
 The output is a report, not a guess. A good skip-trace report lists each source searched, the date it was checked, what it returned, and any candidate addresses or phone numbers in priority order. When a trace produces a fresh address, the next step is physical: a server visits the address, confirms whether the defendant actually lives there, and documents the attempt. When the trace comes up empty or stale, that report becomes an exhibit in your affidavit — concrete proof that the search went beyond the neighborhood and into the databases.
 </p>

 <h2>How to Document the Search</h2>
          <p>
            Documentation is the entire ballgame, because the judge never sees your effort — they only see the record of it. The affidavit of due diligence should walk through the search chronologically: every service attempt with date, time, location, and result; every person contacted and what they said; every database searched and what it returned; and the conclusion that the defendant's whereabouts remain unknown and no other method of service is available. GPS logs from the process server, certified returns, and skip-tracing reports get attached as exhibits.
          </p>
          <p>
            Vague affidavits get denied. An affidavit that lists dates and databases, names and responses, is an affidavit a judge can trust. This is where the quality of the fieldwork shows up on the page — a server who documents everything makes the affidavit write itself.
          </p>

          <h2>How Long Should the Diligence Run?</h2>
          <p>
            There's no clock in the statute — 12 O.S. § 2004(C)(3) doesn't say "try for 30 days" or "three attempts and you're done." What it requires is a good-faith effort proportionate to what's at stake and what you already know. In practice, that usually means a diligence window of one to three weeks: enough time to spread attempts across different days and hours, run the records searches, follow the leads that surface, and let a skip trace finish its cycle. A file that opens and closes in 48 hours looks like a decision that was made before the search started. A file that runs for a month without a single new lead looks like a case with a real problem.
          </p>
          <p>
            The honest answer is that diligence ends when the leads run out. Every attempt, inquiry, and database search either produces a new address or narrows the possibilities, and you keep going until another round stops generating information. The judge isn't counting calendar days — they're reading the record to see whether you stopped because you had to or stopped because you wanted to. Keep the effort going until the search genuinely bottoms out, and let the documentation show the trail.
          </p>

          <h2>What Doesn't Count</h2>
          <p>
            Judges have seen every shortcut, and they recognize them in a paragraph: one visit to an address that's been stale for two years; a certified letter to the old address that came back unclaimed, with no follow-up; a plaintiff's vague statement that "they probably left the state"; skipping substituted service entirely while someone clearly lives at the dwelling; a search that never touches a single public record. None of that is due diligence. It's a formality, and courts treat formalities accordingly — with denial.
          </p>
          <p>
            The rule of thumb: if you can't describe a specific, dateable, documentable effort, the effort didn't happen. And if the effort didn't happen, the publication motion won't fly.
          </p>

          <h2>Why It Matters — Jurisdictional Consequences</h2>
          <p>
            Here's the part that keeps lawyers up at night. In Oklahoma, the affidavit for publication and the publication notice are jurisdictional — meaning a defective affidavit can sink the court's power over the defendant entirely. Oklahoma courts have held that both the affidavit and the notice must comply with the statute, or the service fails. If service fails and the defendant never got actual notice, a default judgment entered on that service can be set aside. The cost isn't just a denied motion — it's a judgment that evaporates months later, after you've already started collecting.
          </p>
          <p>
            That's why the diligence phase deserves real work rather than box-checking. A judgment built on solid due diligence is a judgment that survives challenge. A judgment built on a thin affidavit is a judgment with a fuse in it.
          </p>

          <h2>How a Licensed Server Builds the Record</h2>
          <p>
            A professional process server brings the two things a due-diligence record needs: coverage and proof. Coverage means attempts at the right times and places, skip tracing that actually digs, and inquiries that reach the people who know. Proof means GPS-tagged logs, dated returns, and a skip-tracing report you can hand to your attorney. At Just Legal Solutions, our attempt documentation and skip tracing are built for exactly this purpose — so that if your case reaches the publication question, the answer is ready before the judge asks.
          </p>
          <p>
            And if the search succeeds — which it often does — you never need publication at all. The defendant gets served personally, the case moves, and the due-diligence file becomes a footnote instead of a foundation. Either way, the effort pays for itself.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need a Diligent Search Done Right?</h3>
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
              <Link href="/blog/oklahoma-service-by-publication" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Publication Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Service by Publication in Oklahoma</h3>
                <p className="text-sm text-gray-600">The 12 O.S. § 2004(C)(3) overview — when it's available and how it works.</p>
              </Link>
              <Link href="/blog/service-by-publication-oklahoma-requirements" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Proof Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Service by Publication: What Plaintiffs Must Prove</h3>
                <p className="text-sm text-gray-600">The affidavit, notice, publication, and proof requirements after diligence is done.</p>
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
                <h2 className="text-3xl font-bold mb-4">Need a Hard-to-Find Defendant Located?</h2>
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
            Due diligence is the price of admission to service by publication in Oklahoma, and it's a price worth paying properly. Make real attempts at varied times, try substituted service where it applies, ask the people who might know, search the records that might answer, and document every step with dates and detail. An affidavit that shows genuine effort is an affidavit a judge can trust — and a judgment built on it can stand.
          </p>
          <p>
            At Just Legal Solutions, we build that record every day: GPS-tagged attempts, skip-tracing reports, and due-diligence documentation across all 77 Oklahoma counties. If your defendant is out there, we'll find them — and if they can't be found, the record will prove it.
          </p>

          <p className="text-gray-700 italic mt-8">
            Need a diligent search or skip trace in Oklahoma?{' '}
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
