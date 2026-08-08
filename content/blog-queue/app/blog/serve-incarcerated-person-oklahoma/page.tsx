import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Serving Papers on an Oklahoma Incarcerated Person',
  description: 'Serve papers on an Oklahoma incarcerated person: deliver the summons to the warden or jail administrator, follow facility rules, and get court-ready proof.',
  keywords: 'serve incarcerated person Oklahoma, serve inmate papers, jail service of process, DOC warden service, county jail summons, prison legal service, Oklahoma process server',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Serving Papers on an Oklahoma Incarcerated Person',
    description: 'Serve papers on an Oklahoma incarcerated person: deliver the summons to the warden or jail administrator, follow facility rules, and get court-ready proof.',
    url: 'https://justlegalsolutions.org/blog/serve-incarcerated-person-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Serving Papers on an Oklahoma Incarcerated Person',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/serve-incarcerated-person-oklahoma',
  },
  other: {
    'article:published_time': '2026-08-25',
    'article:modified_time': '2026-08-25',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'In Oklahoma, an incarcerated defendant is served by delivering the summons and petition to the warden or superintendent at a DOC facility, or to the jail or detention center administrator at a county jail, under 12 O.S. § 2004(C)(1)(c) — not to the inmate directly.',
    'ai-key-facts':
      'DOC facilities: serve the warden, superintendent, or designee, 12 O.S. § 2004(C)(1)(c)(6); County jails: serve the jail or detention center administrator or designee, (7); The facility must promptly deliver the papers to the inmate; The 180-day window under 12 O.S. § 2004(I) still applies',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'How do you serve someone who is in jail in Oklahoma?',
    answer: 'You serve the jail, not the inmate. Under 12 O.S. § 2004(C)(1)(c)(7), service is made by delivering a copy of the summons and petition to the jail or detention center administrator, or their designee, at the facility where the inmate is housed. That official has a legal duty to promptly deliver the papers to the inmate. The same idea applies at DOC prisons, where service goes to the warden or superintendent.',
  },
  {
    question: 'Who accepts service at an Oklahoma DOC prison?',
    answer: 'At a facility under the Oklahoma Department of Corrections, service goes to the warden or superintendent of the institution, or a designee, under 12 O.S. § 2004(C)(1)(c)(6). The receiving official must promptly deliver the summons and petition to the inmate named in the papers — and they will reject service for any inmate who is not actually housed there. Confirm the inmate\'s current facility before you dispatch a server.',
  },
  {
    question: 'Does the inmate have to sign for the papers?',
    answer: 'No, and that catches a lot of people off guard. The signature that matters belongs to the facility official who accepts service — the warden, superintendent, or jail administrator. Once the papers are in that official\'s hands the way the statute requires, the facility takes over delivery to the inmate. If the inmate later refuses to take the papers from staff, service is still complete; the refusal just gets documented.',
  },
  {
    question: 'Can an incarcerated person be served by publication instead?',
    answer: 'Practically never. Service by publication under 12 O.S. § 2004(C)(3) requires an affidavit stating that with due diligence, service cannot be made by any other method. An inmate\'s whereabouts are usually a matter of public record — DOC runs an offender search, jails publish rosters, and VINELink tracks custody status. When the defendant\'s location is known, courts expect the statutory method for inmates, not publication.',
  },
  {
    question: 'What happens if the inmate has been transferred to another facility?',
    answer: 'You serve the new facility. The warden or jail administrator at the inmate\'s current facility is the only one authorized to accept service, and they will reject papers for an inmate who is not actually present. If a transfer happens mid-attempt, recheck the DOC offender search or the jail\'s online roster, confirm the new location, and re-dispatch. Every completed or rejected attempt gets documented in the return of service.',
  },
  {
    question: 'What if the jail or prison refuses to take the papers?',
    answer: 'The statute puts a duty on the warden, superintendent, or jail administrator to receive service and deliver it to the inmate, and in practice Oklahoma facilities comply. If you hit a genuine refusal, record who you spoke to, when, and what was said — that documented attempt is your record and the basis for asking the court for direction. A licensed server who works with facilities regularly can usually sort out a policy hurdle before it becomes a roadblock.',
  },
  {
    question: 'Does the 180-day service deadline apply to incarcerated defendants?',
    answer: 'Yes. The 180-day service window under 12 O.S. § 2004(I) runs from the date the petition is filed, and it applies whether the defendant is free or in custody. Courts sometimes give self-represented inmates extra time to respond because of their limited access to legal materials, but that concerns their answer deadline, not your obligation to get service done. Don\'t let a slow facility eat into your 180 days.',
  },
  {
    question: 'Can a prisoner be appointed to serve process in Oklahoma?',
    answer: 'No. Oklahoma law is explicit: no prisoner in any jail, DOC facility, or private prison — and no parolee or probationer under DOC supervision — may be appointed by any court to serve process on any defendant, party, or witness. Service has to be performed by someone impartial, licensed, and bonded, and that rule closes the door on creative shortcuts.',
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Serving Papers on an Oklahoma Incarcerated Person"
        title="Serving Papers on an Oklahoma Incarcerated Person"
        pageDescription="Serve papers on an Oklahoma incarcerated person: deliver the summons to the warden or jail administrator, follow facility rules, and get court-ready proof."
        description="Serve papers on an Oklahoma incarcerated person: deliver the summons to the warden or jail administrator, follow facility rules, and get court-ready proof."
        pageUrl="https://justlegalsolutions.org/blog/serve-incarcerated-person-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={114}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Serving Papers on an Oklahoma Incarcerated Person', item: 'https://justlegalsolutions.org/blog/serve-incarcerated-person-oklahoma' }
        ]}
        articleDetails={{
          headline: 'Serving Papers on an Oklahoma Incarcerated Person',
          datePublished: '2026-08-25',
          dateModified: '2026-08-25',
          author: 'Just Legal Solutions Team',

          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'serve incarcerated person Oklahoma',
          'serve inmate papers',
          'jail service of process',
          'DOC warden service',
          'county jail summons',
          'prison legal service',
          'skip tracing',
          'Oklahoma process server'
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
            Serving Papers on an Oklahoma Incarcerated Person
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              In Oklahoma, you serve an incarcerated defendant by delivering the{' '}
              <strong>summons and petition</strong> to the <strong>warden or superintendent</strong> at a{' '}
              <strong>DOC facility</strong> (<strong>12 O.S. § 2004(C)(1)(c)(6)</strong>) or to the{' '}
              <strong>jail or detention center administrator</strong> at a county jail. The facility must
              promptly hand the papers to the inmate, and it will <strong>reject service</strong> if the
              inmate isn't actually housed there — so confirm the facility first, and the{' '}
              <strong>180-day deadline</strong> under <strong>§ 2004(I)</strong> still applies.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2026-08-25').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~12 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            When the person you need to serve is sitting in a county jail or a DOC prison, it's tempting to think the case has to stall. It doesn't. Oklahoma has a specific, workable rule for serving an incarcerated defendant — it's just not the rule most folks expect. You don't slide the papers through a visitation window. You deliver them to the official who runs the facility, and the law puts the delivery obligation on that official. This guide walks through the statute, how it plays out at DOC prisons versus county jails, what personal service and the return of service actually require, and what to do when an inmate gets transferred or released.
          </p>

          <h2>Oklahoma's Rule: Service Goes to the Facility, Not the Inmate</h2>
          <p>
            The rule lives in 12 O.S. § 2004(C)(1)(c), the same statute that governs personal service across the state. For inmates, it sets up two parallel tracks. At a facility under the Oklahoma Department of Corrections, service is made by delivering a copy of the summons and petition to the warden or superintendent of the institution, or their designee. At a county jail or detention center — the kind run by the county sheriff or a jail trust — service goes to the jail or detention center administrator, or their designee.
          </p>
          <p>
            Either way, the receiving official has a legal duty to promptly deliver the summons and petition to the inmate named in the papers. And here's the safeguard built into the statute: the warden or administrator will reject service for any inmate who is not actually present in their institution. That keeps a plaintiff from "serving" someone at the wrong facility and calling it a day.
          </p>
          <p>
            This is a departure from the usual picture of process serving, and it's worth understanding why the law works this way. An inmate can't be handed papers at a residence or a workplace — they're locked down, and their movement, schedule, and contact with the outside world are controlled by the facility. So the statute makes the facility the delivery point. Serve the right official, and the facility takes it from there.
          </p>

          <h3>Why the Rule Exists</h3>
          <p>
            Two principles sit underneath this rule. The first is due process: an incarcerated defendant is still entitled to actual notice of a lawsuit against them. Being in custody doesn't waive that right, and a judgment entered without proper notice is exactly the kind that gets attacked later. The second principle is that an inmate's whereabouts are usually known — DOC runs an offender search, jails publish rosters, and VINELink tracks custody status. When you know exactly where someone is, courts expect you to serve them there rather than falling back on publication or other constructive methods.
          </p>

          <h2>Serving Someone in an Oklahoma DOC Facility</h2>
          <p>
            The first step is confirming where the inmate actually is. The Oklahoma Department of Corrections offender search lets you look up an inmate by name or DOC number and shows the facility where they're currently housed. That matters more than you'd think — DOC transfers inmates between facilities, and the warden at the old facility will reject service for someone who's no longer there.
          </p>
          <p>
            Once you know the facility, the practical work begins. DOC facilities have their own procedures for accepting legal documents, and they differ from site to site. Some accept service through certified mail addressed to the inmate with a notation that legal documents are enclosed. Others require personal delivery by a process server — but by appointment, with advance notice, and with the server cleared through the facility's intake and security process. You'll typically need the inmate's full name, DOC number, and the facility name, and you should call ahead to confirm the procedure, the hours, and who the designated recipient is.
          </p>
          <p>
            When personal delivery is the route, the licensed process server presents the summons and petition to the warden, superintendent, or the facility's designee. The facility logs the delivery, and the designated official gets the papers into the inmate's hands. The server documents the exact date, time, facility, and the name and title of the person who accepted — because that's what the court will read in the return of service.
          </p>

          <h3>County Jails — Tulsa, Oklahoma County, and the Rest</h3>
          <p>
            County jails work on the same statutory model. Under 12 O.S. § 2004(C)(1)(c)(7), you serve the jail or detention center administrator, or a designee, at the facility where the inmate is housed. That covers jails under the county sheriff's jurisdiction as well as those run through a county jail trust, which is the setup in several of Oklahoma's larger counties.
          </p>
          <p>
            In practice, jail service is usually faster and simpler than prison service. Many jails have an intake or administration office that handles legal documents as a routine matter, and some will accept service without an appointment during business hours. Still, policies vary — one jail may want you at the administrative entrance, another at the records window, and a third may route everything through a specific sergeant. A quick call to the jail's administrative office answers all of it before you send a server on a wasted trip.
          </p>
          <p>
            To confirm an inmate's current housing before you dispatch, check the jail's online roster or VINELink, which tracks custody status across Oklahoma's jails and prisons. If the person has been transferred to DOC custody, the whole calculation shifts to the warden-service track. If they've been released, the facility will reject service, and you serve them wherever they're living now.
          </p>

          <h2>Personal Service and the Proof It Requires</h2>
          <p>
            Here's where "personal service" means something a little different in an inmate case. The person served personally is the facility official — the warden, superintendent, or jail administrator — not the defendant. That's the delivery the statute describes, and the affidavit of service has to say so plainly. A return that just reads "served at the jail" without naming the facility and the official leaves a court with no way to verify the statutory method was followed.
          </p>
          <p>
            A bulletproof return of service in an inmate case should state the method used — delivery to the warden, superintendent, or jail administrator (or designee) — along with the facility's name and street address, the exact date and time, the name and title of the person who accepted, and the documents delivered. It also needs the server's notarized signature and Oklahoma license number, plus GPS-tagged proof of the attempt. The same documentation standard applies when the facility rejects service because the inmate isn't there: that rejection should be recorded too, because it's evidence of your diligence and the reason you're redirecting to a new facility.
          </p>
          <p>
            Courts rely on this document to confirm service was completed the way the statute requires. If the affidavit is thin, a challenged service can stall or unravel a case that was otherwise going fine. The paperwork isn't busywork — it's the whole proof of service.
          </p>

          <h2>Transfers, Releases, and the 180-Day Clock</h2>
          <p>
            Custody status changes quickly, and the statute accounts for it. If an inmate is transferred to another DOC facility or another county's jail, the receiving official at the new facility is the one to serve. The warden or administrator will reject service for an inmate not actually present, so that rejection is the system telling you to update the location and try again. Recheck the offender search or VINELink, confirm the new facility, and re-dispatch.
          </p>
          <p>
            If the inmate is released before service is completed, you're back on the standard track. Serve them at their residence or wherever they're staying, just like any other defendant. The facility's rejection — documented and dated — goes in your file as proof you pursued the correct statutory method while they were in custody.
          </p>
          <p>
            Timing still matters. The 180-day service window under 12 O.S. § 2004(I) runs from the date the petition is filed, and it applies to incarcerated defendants like everyone else. If the inmate is representing themselves, courts sometimes allow them extra time to respond given the limits on their access to legal materials — but that's about their answer deadline, not your service deadline. Don't let a slow facility eat into your 180 days; get the paperwork moving the moment you confirm where the inmate is housed.
          </p>

          <h2>When a Facility Refuses or Drags Its Feet</h2>
          <p>
            What if facility staff refuse to accept the papers? The statute imposes a duty on the warden or administrator to receive service and deliver it to the inmate, and in practice facilities comply. If you hit a genuine refusal, the documented attempt — who you spoke to, when, what was said — is your record, and it's the basis for asking the court for direction. This is also where a licensed process server earns their keep: they've navigated facility procedures across the state and know the difference between a policy hurdle and a true roadblock.
          </p>
          <p>
            One more rule worth knowing: no prisoner in any jail, DOC facility, or private prison — and no parolee or probationer under DOC supervision — can be appointed by a court to serve process on any defendant, party, or witness. Service has to be done by someone impartial and licensed, and that rule closes the door on any creative-but-illegal shortcut.
          </p>

          <h2>Why Facility Coordination Is the Real Job</h2>
          <p>
            Inmate service is a coordination problem as much as a legal one. The statute tells you who to serve; the facility tells you how. A server who does this regularly knows the DOC facilities by name, knows which jails want an appointment and which take walk-ins, knows the right office to call, and knows how to document a warden-service or administrator-service return so it survives scrutiny. That institutional knowledge turns a case that could take weeks of back-and-forth into a clean delivery with a court-ready affidavit.
          </p>
          <p>
            And if the case goes sideways — a transfer, a release, a facility policy change — you want a server who adapts fast and documents every step. The court file tells the whole story, and the story needs to be complete.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need Papers Served on an Inmate?</h3>
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
              <Link href="/blog/serving-summons-answer-deadline-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Defendant Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Served Papers in Oklahoma? Here's What's Next</h3>
                <p className="text-sm text-gray-600">Your answer deadline and what happens if you ignore the summons.</p>
              </Link>
              <Link href="/blog/oklahoma-180-day-rule-service-process" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Deadline Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Oklahoma's 180-Day Service Rule</h3>
                <p className="text-sm text-gray-600">The service window that keeps cases alive — and how to protect it.</p>
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
                <h2 className="text-3xl font-bold mb-4">Need an Inmate Served Anywhere in Oklahoma?</h2>
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
            Serving an incarcerated defendant in Oklahoma isn't a dead end — it's a different route with a clear map. Deliver the summons and petition to the warden or superintendent at a DOC facility, or to the jail or detention center administrator at a county jail, confirm the inmate's current facility first, and document every step so the return of service tells the whole story. The 180-day clock still runs, so move deliberately, not slowly.
          </p>
          <p>
            At Just Legal Solutions, we've served inmates at DOC facilities and county jails across all 77 Oklahoma counties, coordinating with facility staff and delivering court-ready affidavits within 24 hours. Whether the defendant is in a Tulsa County cell or a prison in the Panhandle, we know the drill.
          </p>

          <p className="text-gray-700 italic mt-8">
            Need papers served on someone in custody?{' '}
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
