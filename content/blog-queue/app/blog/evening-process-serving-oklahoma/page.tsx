import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Evening Process Serving in Oklahoma: When the Defendant Works Days',
  description: 'Evening process serving in Oklahoma reaches defendants who work days: after-hours attempts, shift-worker timing, rural logistics, and GPS-proofed affidavits.',
  keywords: 'evening process serving Oklahoma, after hours process server, serve shift worker Oklahoma, night service of process, serve defendant who works days, rural process serving Oklahoma, Oklahoma process server',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Evening Process Serving in Oklahoma: When the Defendant Works Days',
    description: 'Evening process serving in Oklahoma reaches defendants who work days: after-hours attempts, shift-worker timing, rural logistics, and GPS-proofed affidavits.',
    url: 'https://justlegalsolutions.org/blog/evening-process-serving-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Evening Process Serving in Oklahoma: When the Defendant Works Days',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/evening-process-serving-oklahoma',
  },
  other: {
    'article:published_time': '2026-10-01',
    'article:modified_time': '2026-10-01',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'Oklahoma sets no statutory hours for service of process, so an evening attempt after the defendant gets home from work is legal and often the fastest path to personal service under 12 O.S. 2004. Shift-worker timing, rural drive logistics, and GPS-documented attempts keep the affidavit defensible.',
    'ai-key-facts':
      'Oklahoma law sets no time-of-day limits on service, so evening attempts are legal under a reasonableness standard; Shift workers who sleep days are best served after their shift or on a day off; Varied attempts across different days and times build the due-diligence record; Every evening attempt is GPS-dated and logged in the affidavit of service',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Can a process server serve papers in the evening in Oklahoma?',
    answer: "Yes. Oklahoma's service statute, 12 O.S. § 2004, sets no hours during which process must be served. The practical standard is reasonableness: a server knocking at 7 a.m. or 9 p.m. is on solid ground, while a 2 a.m. visit invites a challenge. Evening service is a standard, effective move when the defendant works days and is only home after their shift.",
  },
  {
    question: 'Is there a time of day when a process server cannot serve papers in Oklahoma?',
    answer: "Not by statute. Oklahoma law doesn't restrict service to business hours, so service is valid whenever the server makes contact — evening, early morning, or weekend included. The limit is reasonableness: courts will look at whether the timing was chosen to harass or to reach a defendant who is genuinely only available then. A legitimate evening attempt on a day-shift worker passes that test every time.",
  },
  {
    question: 'What if the defendant works nights and sleeps during the day?',
    answer: "Then the day-window strategy flips. A night-shift worker — a nurse, a casino employee, a plant operator — is usually home and awake in the late afternoon before their shift, or in the morning right after it ends. The server times the attempt to when the person is actually up, not when the address looks 'normal.' The same rule applies: personal delivery to the defendant completes service under 12 O.S. § 2004(C)(1), no matter which side of the clock it happens on.",
  },
  {
    question: 'How many attempts should a server make on a shift worker before moving on?',
    answer: "There's no magic number, but a defensible pattern looks like three or more attempts at genuinely different times — one weekday evening, one weekend, one early morning — spread across days the defendant is likely to be home. The goal is a varied record that shows diligence, not a stack of identical 5 p.m. misses. Courts weigh that variety when a motion to quash or a due-diligence question comes up.",
  },
  {
    question: 'Do process servers charge extra for evening or after-hours service?',
    answer: "At Just Legal Solutions, evening service is part of the standard flat rate — there's no premium for working after business hours. Flat-rate pricing covers the attempts, the drive, and the court-ready affidavit. Ask any provider up front whether evening attempts cost more, because some firms bill after-hours visits as a separate line item.",
  },
  {
    question: 'Does an evening service attempt look different in the affidavit of service?',
    answer: "No. The affidavit records the same essentials whether service happened at 2 p.m. or 9 p.m.: the date, the exact time, the address, the manner of delivery, a physical description of the person served, and the server's notarized signature with their Oklahoma license number. GPS coordinates back it up. The time of day is just another data point in the record — and for a shift worker, it's the data point that proves the attempt was made when the defendant was actually home.",
  },
  {
    question: 'Can a process server serve papers after dark in rural Oklahoma?',
    answer: "Yes, and in much of rural Oklahoma it's the only realistic window. After dark, the server relies on GPS coordinates, vehicle description, and porch lights rather than street signs — many rural addresses don't have visible numbers. The server should confirm the residence before approaching, document the location by GPS, and keep the visit brief and professional. Trespassing law still applies, but a lawful approach to the front door of the defendant's residence is permitted.",
  },
  {
    question: 'What happens if the defendant is never home in the evening either?',
    answer: "Then the evening attempts become the backbone of a due-diligence record. Every documented miss — date, time, GPS, what happened — supports the next legal step, whether that's substituted service at the dwelling with a resident 15 or older under 12 O.S. § 2004(C)(1), service by publication with court approval, or a skip trace to find a better address. None of it works without a real, well-documented effort, and evening attempts are a big part of proving that effort.",
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Evening Process Serving in Oklahoma: When the Defendant Works Days"
        title="Evening Process Serving in Oklahoma: When the Defendant Works Days"
        pageDescription="Evening process serving in Oklahoma reaches defendants who work days: after-hours attempts, shift-worker timing, rural logistics, and GPS-proofed affidavits."
        description="Evening process serving in Oklahoma reaches defendants who work days: after-hours attempts, shift-worker timing, rural logistics, and GPS-proofed affidavits."
        pageUrl="https://justlegalsolutions.org/blog/evening-process-serving-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={117}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Evening Process Serving in Oklahoma: When the Defendant Works Days', item: 'https://justlegalsolutions.org/blog/evening-process-serving-oklahoma' }
        ]}
        articleDetails={{
          headline: 'Evening Process Serving in Oklahoma: When the Defendant Works Days',
          datePublished: '2026-10-01',
          dateModified: '2026-10-01',
          author: 'Just Legal Solutions Team',
          
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'evening process serving Oklahoma',
          'after hours process server',
          'serve shift worker Oklahoma',
          'night service of process',
          'serve defendant who works days',
          'rural process serving Oklahoma',
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
            Process Serving
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Evening Process Serving in Oklahoma: When the Defendant Works Days
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Oklahoma law sets <strong>no time-of-day limits</strong> on service of process, so an{' '}
              <strong>evening attempt</strong> after the defendant gets home from work is legal under{' '}
              <strong>12 O.S. § 2004</strong> and often the fastest way to personal service. Shift
              workers who sleep days get served on their own schedule, rural addresses get GPS-documented
              after-dark visits, and the <strong>180-day</strong> deadline under <strong>§ 2004(I)</strong>{' '}
              keeps ticking either way.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2026-10-01').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~12 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <p className="mb-6 text-gray-700 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            At <strong>Just Legal Solutions</strong>, our team brings <strong>50+ years of combined experience</strong>, is{' '}
            <strong>licensed and bonded under Oklahoma Title 12 O.S. 158.1</strong>, and has served{' '}
            <strong>thousands of documents across all 77 Oklahoma counties</strong>. We align every service with{' '}
            <strong>12 O.S. 2004</strong> requirements and Title 49 O.S. where applicable, and we routinely work
            evenings and weekends to reach defendants who are never home at 2 p.m.
          </p>
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            Some defendants are easy to find and impossible to catch during the day. They leave at 5:40 a.m. for a shift at the plant, come home exhausted at 6:30 p.m., and spend their weekends running errands. If your server only works 9-to-5, that defendant never gets served — and the 180-day clock under 12 O.S. § 2004(I) doesn't care. This guide covers why evening process serving is the answer in Oklahoma, how servers time attempts around shift work, what rural evening runs really involve, and how the whole thing gets documented so it holds up in court.
          </p>

          <h2>Oklahoma Law Sets No Clock on Service</h2>
          <p>
            Start with the rule that makes all of this possible: Oklahoma's service statute, 12 O.S. § 2004, says nothing about the time of day process may be served. Unlike a handful of states that restrict service to certain hours, Oklahoma leaves the door open. The practical standard is reasonableness. A server knocking at 7 a.m. before someone leaves for work, or at 9 p.m. after they get home, is well within the law. A 2 a.m. knock with no connection to the defendant's schedule is the kind of thing that invites a challenge — courts can smell harassment, and they'll look at whether the timing was chosen to reach the person or to punish them.
          </p>
          <p>
            The reasonableness test is why evening service is not just legal but strategically smart. When a defendant works days, the evening is when they're actually at the address on the summons. A court reviewing a service challenge isn't going to question a 7:30 p.m. visit to the home of someone who clocks out at 6. It's going to see a server who did the job properly. And because Oklahoma also permits service on weekends and holidays, a shift worker's days off are fair game too — the statute doesn't pause for anyone's calendar.
          </p>
          <p>
            One thing evening service does change is the countdown. Under 12 O.S. § 2012(A), a defendant personally served has twenty days to answer. That clock starts when the papers land in their hands — at 8 p.m. on a Tuesday just as surely as at 10 a.m. Serving in the evening doesn't buy anyone extra time; it just makes sure the clock starts at all.
          </p>

          <h2>Why the Evening Window Matters for Shift Workers</h2>
          <p>
            Oklahoma runs on shift work. Tinker Air Force Base, hospitals across Tulsa and Oklahoma City, Amazon and distribution warehouses, refineries in Ponca City and Cushing, manufacturing plants, 24-hour casinos, oilfield crews that work fourteen days on and seven off. A huge share of the state's workforce doesn't live on a 9-to-5 schedule, and the ones who do often aren't home when a traditional server comes calling.
          </p>
          <p>
            The fix is matching the attempt to the schedule instead of the other way around. For a day-shift defendant, that means weekday evenings after the commute home, or weekend mornings before errands start. For a night-shift worker, the window flips entirely: the nurse who sleeps until 2 p.m. is reachable in the late afternoon before her shift, or in the hour after she gets home. A server who only knocks between 9 and 5 will miss both of them, every single time.
          </p>
          <p>
            Shift workers also move around more than people expect. A welder may work a rotation in Woodward, come back to Tulsa for his days off, and head back out. A nurse picks up extra weekend shifts. A plant operator gets called in on his day off. That variability is exactly why a single evening attempt usually isn't enough — the schedule that made Tuesday night perfect might be gone by Thursday. The server works with what the defendant's actual life looks like: known work hours, vehicle patterns, even the grocery store run that happens like clockwork every payday.
          </p>

          <h3>The Commuter Defendant</h3>
          <p>
            Rural Oklahoma makes the commute problem worse. Someone who works in Tulsa or Oklahoma City but lives thirty, forty, or sixty minutes out on county roads isn't coming home for lunch, isn't taking a midday appointment, and isn't answering the door at 3 p.m. Their only reliable presence at the listed address is in the evening, after the drive home. For these defendants, evening service isn't a nice-to-have — it's the entire strategy.
          </p>

          <h2>Building a Varied Attempt Pattern</h2>
          <p>
            Nobody gets a guaranteed hit on the first knock, and the law doesn't expect one. What it expects — and what courts actually look at — is a pattern of varied attempts. That means different days of the week, different times of day, and a genuine reason for each one. A defensible run on a day-shift defendant looks like: a Tuesday at 6:45 p.m. (missed, no answer, vehicle gone), a Saturday at 9:30 a.m. (vehicle in the drive, no answer), and a Thursday at 7:15 p.m. (defendant answers, papers served). Each attempt lands at a different time for a different reason, and the record shows it.
          </p>
          <p>
            The variation matters for two reasons. First, it's the difference between diligence and a token effort — a court can tell the difference between three scattered attempts and five identical 5 p.m. misses on the same weekday. Second, a varied record is what makes substituted service possible later. When the defendant genuinely can't be reached, the documented evening attempts become the foundation for leaving papers with a resident 15 or older at the dwelling under 12 O.S. § 2004(C)(1), or for asking the court to approve service by publication. That foundation only holds if the attempts were real, timed intelligently, and recorded.
          </p>
          <p>
            It's also worth remembering that the 180-day window under 12 O.S. § 2004(I) runs from the day the petition is filed. A month of "we'll catch him next week" is a month the plaintiff can't get back. When the defendant works days, the smart move is to put evening attempts on the calendar immediately — not after three failed daytime visits.
          </p>

          <h2>Evening Service in Rural Oklahoma</h2>
          <p>
            Serving after dark in rural Oklahoma is a different operation than an evening run in Tulsa or Norman, and it deserves respect. Rural addresses don't announce themselves. The house sits a quarter-mile off the road behind a gate. The mailbox is on the highway but the driveway is a gravel track with no sign. Streetlights don't exist. Porch lights aren't always on. A server who doesn't know the territory can spend an hour finding the wrong house — or worse, knocking on the wrong door after dark and creating a situation nobody wants.
          </p>
          <p>
            The professionals handle it with preparation. GPS coordinates come first — many rural addresses are better located by coordinates than by the address printed on the summons. A vehicle description helps: the defendant's truck parked in the yard is the surest sign the attempt is worth making. When possible, a daytime recon pass confirms the house, the access route, and whether there's a dog situation, so the evening attempt is a clean, confident knock instead of a gamble.
          </p>
          <p>
            Then there's the drive itself. Oklahoma's 77 counties cover a lot of ground, and a single rural attempt can mean an hour on the road each way. Good evening routing batches multiple addresses in the same region into one run — a server who's already heading to Choctaw can work three nearby addresses in the same evening rather than making three separate round trips. It's faster for the case, cheaper for the client, and kinder to the server's odometer.
          </p>
          <p>
            Trespassing law doesn't take the night off, but it doesn't block the job either. Approaching the front door of a defendant's residence to serve process is a lawful purpose, and a server who stays on the walkway, knocks, identifies themselves, and keeps the visit brief is on solid ground. What's not okay is wandering onto dark acreage, peering in windows, or treating a gated property like a challenge. If access is genuinely blocked, the attempt is documented and the next option — a neighbor, a workplace, a skip trace — gets worked instead.
          </p>

          <h3>Gates, Gravel, and Dogs</h3>
          <p>
            Rural evening attempts have a few practical realities. Gates: if there's a closed gate and no intercom, the server documents the attempt at the gate rather than forcing entry. Gravel: a crunching driveway announces the server's arrival from a quarter-mile out, which is why stealth is less about silence and more about being calm and professional when the porch light flicks on. Dogs: they're part of rural life, and a server who has the owner call the dog off, or who waits at the gate until someone comes out, handles it without drama. Every one of these details goes into the record — not as complaints, but as part of an honest account of what the attempt involved.
          </p>

          <h2>Proving the Evening Attempt So It Holds Up</h2>
          <p>
            An evening service is only as good as its documentation, and the affidavit of service is where it all lands. The affidavit needs the date, the exact time — down to the minute — the address, the manner of delivery (personal delivery to the defendant, drop service on refusal, or substituted service with a resident), a physical description of the person served, and the server's notarized signature with their Oklahoma license number. GPS coordinates back up the location. For a rural evening service, those coordinates are the difference between "served at the residence" and "served somewhere out in the county."
          </p>
          <p>
            Refusal is worth calling out specifically, because it happens more at the end of a long day than any other time. A tired defendant who just got home and sees someone holding papers is often tempted to slam the door. Oklahoma doesn't let that end the attempt: when the server identifies the correct person and tenders the documents, service is complete even if the defendant refuses to take them. The server drops the papers at the person's feet or on a nearby surface and documents the refusal in the affidavit. The evening attempt that ends in a slammed door is still a valid service, and the record will say exactly that.
          </p>
          <p>
            Failed evening attempts get documented just as carefully. Date, time, GPS, vehicle presence or absence, whether anyone answered, anything the server observed. That record isn't a confession of failure — it's the evidence of diligence that protects the case later. If the defendant eventually fights service, or if the plaintiff needs substituted service or publication, the documented evening runs are what prove the plaintiff did everything reasonable to reach the defendant in person.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need a Day-Working Defendant Served?</h3>
            <p className="text-blue-800 mb-4">
              Just Legal Solutions serves all 77 Oklahoma counties from our Glenpool home office — evenings and weekends included — with flat-rate pricing, GPS-tracked service, and court-ready affidavits delivered within 24 hours.
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
              <Link href="/blog/skip-tracing-bad-address-oklahoma-process-serving" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Locating Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Skip Tracing for Bad Addresses</h3>
                <p className="text-sm text-gray-600">How Oklahoma process servers track down defendants who've gone missing.</p>
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
                <h2 className="text-3xl font-bold mb-4">Need Someone Served After Hours?</h2>
                <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                  Just Legal Solutions provides licensed, bonded, and insured process serving, courier, and notary services across all 77 Oklahoma counties — evenings and weekends included.
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
            Oklahoma law doesn't make process servers work banker's hours, and neither should your case. When the defendant works days, evening service is legal, strategic, and often the only way to get papers into the right hands before the 180-day clock runs out. Match the attempt to the defendant's schedule, vary the timing, handle rural logistics with preparation instead of guesswork, and document every visit — the successful ones and the misses alike — with the detail that makes an affidavit bulletproof.
          </p>
          <p>
            At Just Legal Solutions, we've served shift workers, commuters, and rural defendants across all 77 Oklahoma counties — often after dark, usually after the commute home, and always with court-ready affidavits delivered within 24 hours. Defendants who work days are the reason we work evenings, and we've gotten very good at it.
          </p>

          <p className="text-gray-700 italic mt-8">
            Need a defendant served who only shows up after hours?{' '}
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
