import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Affidavit of Non-Service in Oklahoma: What It Should Document',
  description: 'Oklahoma non-service affidavits must log every attempt with dates, times, addresses, GPS, and due diligence before courts allow service by publication.',
  keywords: 'affidavit of non-service Oklahoma, return of non-service, due diligence process serving, service by publication Oklahoma, 12 O.S. 2004, process server affidavit Oklahoma',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Affidavit of Non-Service in Oklahoma: What It Should Document',
    description: 'Oklahoma non-service affidavits must log every attempt with dates, times, addresses, GPS, and due diligence before courts allow service by publication.',
    url: 'https://justlegalsolutions.org/blog/affidavit-of-non-service-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Affidavit of Non-Service in Oklahoma: What It Should Document',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/affidavit-of-non-service-oklahoma',
  },
  other: {
    'article:published_time': '2027-02-11',
    'article:modified_time': '2027-02-11',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'An Oklahoma affidavit of non-service is the process server\'s sworn record that personal service failed after documented due diligence — each attempt logged with date, time, address, and method — and courts review it before approving service by publication under 12 O.S. § 2004.',
    'ai-key-facts':
      'A non-service affidavit documents failed personal service attempts, not successful delivery; Oklahoma courts expect specific dates, times, addresses, and due diligence before publication; 12 O.S. § 2004 governs how service must be made and proved; A successful affidavit of service and a return of non-service serve opposite purposes in the same case; Thin or vague non-service returns get rejected and delay the plaintiff\'s case',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'What is an affidavit of non-service in Oklahoma?',
    answer: "It's a sworn statement from a licensed process server or authorized server saying they tried to serve the defendant personally but couldn't complete service. The return lists each attempt — when, where, and what happened — and explains why service failed. It's the opposite of an affidavit of service, which confirms the papers were delivered. Courts use the non-service return to decide whether the plaintiff has done enough due diligence to ask for service by publication or another alternative method under 12 O.S. § 2004.",
  },
  {
    question: 'How is a non-service affidavit different from an affidavit of service?',
    answer: "An affidavit of service proves the defendant received the summons and petition — who was served, when, where, and how. A non-service affidavit proves the opposite: the server made good-faith attempts but couldn't hand the papers to the defendant or a proper substitute. Both are sworn documents filed with the court clerk, but they answer different questions. Filing a non-service return doesn't end the case; it tells the court the plaintiff needs to try something else, like publication or certified mail, if the statute allows.",
  },
  {
    question: 'What due diligence must a process server show before non-service?',
    answer: "Oklahoma courts expect more than one drive-by. A solid return documents multiple attempts at different times of day — mornings, evenings, weekends when appropriate — at addresses tied to the defendant through public records, skip tracing, or client-provided leads. The server should note whether anyone answered the door, what they said, whether the address looked occupied or vacant, and any vehicle or mailbox clues. Vague entries like 'nobody home' without dates and times won't carry much weight when a judge decides whether to allow publication.",
  },
  {
    question: 'Should a non-service affidavit include GPS coordinates?',
    answer: "GPS isn't always required by statute, but it's become standard practice among professional servers in Oklahoma because it corroborates where and when each attempt happened. A timestamped GPS log paired with a written narrative makes it harder for a defendant to later claim the server never showed up. Courts in Tulsa County, Oklahoma County, and rural districts alike increasingly expect technology-backed documentation when a case may proceed to service by publication — the stakes are too high for a handwritten note with no proof of location.",
  },
  {
    question: 'When can a plaintiff use service by publication after non-service?',
    answer: "Only after the court is satisfied that personal service was genuinely attempted and failed. The plaintiff typically files a motion for service by publication along with the non-service affidavit and any supporting skip-trace reports. The judge reviews whether due diligence was reasonable under 12 O.S. § 2004 and local rules. Publication isn't a shortcut around serving someone you could find with another week of effort — it's a last resort when the defendant truly can't be located after documented attempts.",
  },
  {
    question: 'What happens if a non-service affidavit is incomplete?',
    answer: "The clerk may accept it, but a deficient return creates problems downstream. The plaintiff's motion for publication can be denied, the server may be ordered to make additional attempts, or a defendant who later appears can challenge whether service by publication was ever valid. Incomplete affidavits — missing attempt dates, wrong addresses, no description of who answered the door — are a common reason cases stall for weeks. Fixing a bad return costs more than doing it right the first time.",
  },
  {
    question: 'Can I file my own non-service affidavit in Oklahoma?',
    answer: "Anyone authorized to serve process under Oklahoma law can file a return, but most non-service affidavits come from licensed process servers because plaintiffs need credible, detailed documentation. A party or their attorney can serve in some circumstances, but self-serving returns invite scrutiny. Professional servers know what district courts in Cleveland County, Rogers County, or anywhere else in the state expect to see before they'll sign off on publication. The affidavit must be notarized, and the server must be prepared to testify if service is challenged.",
  },
  {
    question: 'How long does a non-service return stay on the court record?',
    answer: "It becomes part of the case file permanently, like any other filing. If the defendant eventually appears and challenges service by publication, the non-service affidavit is the first document the court will read to decide whether the plaintiff followed the rules. That means every word in the return matters years later. Servers who treat non-service affidavits as afterthoughts — rushed, vague, or copied from a template without case-specific detail — leave their clients exposed to motions to quash service long after the original attempt.",
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Affidavit of Non-Service in Oklahoma: What It Should Document"
        title="Affidavit of Non-Service in Oklahoma: What It Should Document"
        pageDescription="Oklahoma non-service affidavits must log every attempt with dates, times, addresses, GPS, and due diligence before courts allow service by publication."
        description="Oklahoma non-service affidavits must log every attempt with dates, times, addresses, GPS, and due diligence before courts allow service by publication."
        pageUrl="https://justlegalsolutions.org/blog/affidavit-of-non-service-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={112}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Affidavit of Non-Service in Oklahoma: What It Should Document', item: 'https://justlegalsolutions.org/blog/affidavit-of-non-service-oklahoma' }
        ]}
        articleDetails={{
          headline: 'Affidavit of Non-Service in Oklahoma: What It Should Document',
          datePublished: '2027-02-11',
          dateModified: '2027-02-11',
          author: 'Just Legal Solutions Team',
          
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'affidavit of non-service Oklahoma',
          'return of non-service',
          'due diligence process serving',
          'service by publication',
          'Oklahoma civil procedure',
          'process serving',
          'legal support services',
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
            Affidavit of Non-Service in Oklahoma: What It Should Document
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              An Oklahoma <strong>affidavit of non-service</strong> is the sworn return proving personal service failed
              after real <strong>due diligence</strong> — not a blank form saying "couldn't find them." It must list every
              attempt with <strong>dates, times, addresses</strong>, who answered (if anyone), and often{' '}
              <strong>GPS timestamps</strong>. Courts review that record under <strong>12 O.S. § 2004</strong> before
              approving <strong>service by publication</strong>. It's the opposite of a successful{' '}
              <strong>affidavit of service</strong>, and a thin return will get your publication motion denied.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2027-02-11').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~14 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            You've hired a process server, waited a week, and the answer comes back: non-service. That single word can feel like a dead end if you don't know what it means or what happens next. In Oklahoma civil cases, an affidavit of non-service isn't a failure of the case — it's a formal record that personal service didn't work despite documented effort. What goes into that return, and how much detail courts expect before they'll let you publish in the newspaper, matters more than most plaintiffs realize. A vague return gets rejected. A thorough one keeps your case moving.
          </p>

          <h2>What an Affidavit of Non-Service Actually Is</h2>

          <p>
            When a process server can't deliver summons and petition to the defendant personally — or to someone authorized to accept on their behalf — they file a return of non-service with the district court clerk. It's a sworn affidavit, usually notarized, stating that service was attempted but not completed. Under Oklahoma's civil procedure rules, service must be proved before a case can proceed on the merits. A successful affidavit of service does that by confirming delivery. A non-service affidavit does it by confirming the server tried and documenting why each attempt failed.
          </p>
          <p>
            Think of the two documents as mirror images. An affidavit of service says: "I handed these papers to this person at this address on this date." A non-service affidavit says: "I went to these addresses on these dates at these times, and here's exactly why I couldn't complete service." Both are filed in the same case file. Both become evidence if the defendant later challenges whether they had notice of the lawsuit. The difference is outcome — one proves notice, the other proves the plaintiff's server did the work required before asking the court for an alternative.
          </p>

          <h3>Who Files It and When</h3>
          <p>
            Licensed process servers under Oklahoma Title 12 O.S. § 158.1 file most non-service returns, though sheriffs, private investigators authorized to serve, and in limited circumstances parties or their attorneys may also serve. The return goes to the clerk in the county where the case is pending — Tulsa, Oklahoma City, Norman, Lawton, wherever the petition was filed. Timing matters: plaintiffs can't jump straight to publication after one failed attempt on a Tuesday afternoon. The non-service affidavit is supposed to reflect a reasonable effort first, and courts in all 77 Oklahoma counties review that effort before signing off on anything else.
          </p>

          <h2>Due Diligence: The Heart of Every Non-Service Return</h2>

          <p>
            "Due diligence" gets thrown around loosely, but in process serving it has a concrete meaning: did the server make a genuine, documented effort to find and serve the defendant before giving up on personal service? Oklahoma judges aren't looking for perfection — defendants hide, move without forwarding mail, and use PO boxes. They are looking for proof that someone competent tried more than once, at sensible hours, at addresses that have a real connection to the person being served.
          </p>
          <p>
            A single attempt rarely satisfies that standard. Professional servers in Oklahoma typically log three to five attempts minimum, spread across different days and times. Morning runs catch people leaving for work. Evening attempts catch people coming home. Weekend visits matter when weekday attempts show nobody answering. If the address came from a skip trace, the server should note the source — utility records, voter registration, prior court filings, DMV hits — so the court can see the address wasn't pulled from thin air.
          </p>

          <h3>What Each Attempt Should Record</h3>
          <p>
            Every line in a non-service affidavit should answer four questions: when, where, what did you see, and what did you do? "Attempt #1: March 4, 2027, 9:14 a.m., 1842 S Peoria Ave, Tulsa, OK 74104 — knocked front door three times, no answer, no vehicles in driveway, mailbox empty, no visible activity." That's useful. "Went by, nobody home" is not. Courts compare returns across cases every week, and the detailed ones survive scrutiny when a defendant later claims they never knew about the lawsuit.
          </p>
          <p>
            If someone answers the door, the return should say who — approximate age, relationship if stated ("I'm his ex-wife," "I rent the back unit"), and what they said about the defendant's whereabouts. If a neighbor speaks up, note that too, with the neighbor's description of whether the defendant still lives there. Servers aren't required to interrogate strangers, but anything observed goes in the affidavit because it shows the attempt was real, not a drive-by with the paperwork still in the car.
          </p>

          <h2>Dates, Times, Addresses, and GPS</h2>

          <p>
            Specificity is non-negotiable. Oklahoma district courts expect non-service returns to include the full street address for each attempt, including unit numbers, gate codes used (without publishing sensitive access info unnecessarily), and whether the address matched the last known address on file with the court. Dates should be written out or in a consistent format — March 4, 2027, not "last week." Times should be approximate but honest: 9:14 a.m., not "morning."
          </p>
          <p>
            GPS documentation has become the industry standard among serious process serving firms, and for good reason. A timestamped GPS log showing the server's location at each attempt corroborates the written narrative. When a defendant in a Payne County foreclosure or a Comanche County family case later swears the server never came to their door, the GPS record is often what convinces a judge the return is credible. It's not mandated in every statute paragraph, but it's what separates a court-ready affidavit from paperwork that gets your publication motion sent back for more attempts.
          </p>

          <h3>Multiple Addresses and Skip Tracing</h3>
          <p>
            Defendants rarely have just one address on record. A thorough return documents attempts at every address tied to the defendant — last known residence, workplace, family contacts, prior skip-trace hits. Each address gets its own attempt log. If the unit number was wrong, the return should note that the server verified with the leasing office. That detail tells the court publication isn't a shortcut — personal service genuinely didn't work.
          </p>

          <h2>What Courts Expect Before Service by Publication</h2>

          <p>
            Service by publication — running a legal notice in an approved newspaper — is a last resort under 12 O.S. § 2004, not a workaround for a lazy first attempt. Before a judge will sign an order allowing publication, the plaintiff typically files a motion along with the non-service affidavit and any supporting materials like skip-trace reports. The judge reads the return to decide whether due diligence was reasonable.
          </p>
          <p>
            What gets publication approved? Multiple documented attempts at verified addresses. Notes about who was spoken to and what they said. Evidence the server checked plausible leads — not just the address on the petition if other information was available. What gets it denied? One attempt. Returns with no times. Returns that don't explain why substitute service wasn't tried when someone eligible was home. Returns where the address clearly wasn't the defendant's but nobody bothered to update the file. Oklahoma judges see these patterns constantly, and they know the difference between a server who did the job and a form filled out in five minutes.
          </p>

          <h3>Publication Isn't Instant Relief</h3>
          <p>
            Even after publication is approved, the notice must run for the period the statute requires, and additional filings may be needed. If the defendant surfaces later, they'll read the non-service affidavit first to attack the service chain. A strong return survives that challenge; a weak one can unwind months of litigation.
          </p>

          <h2>Non-Service vs. Affidavit of Service: Don't Mix Them Up</h2>

          <p>
            Plaintiffs sometimes confuse the two documents because both come from the process server and both get filed with the clerk. They're opposites. An affidavit of service closes the service chapter — the defendant has notice, the 20-day answer clock under 12 O.S. § 2006(A) starts, and the case moves forward. A non-service affidavit opens the next chapter — the plaintiff must either authorize more attempts, hire skip tracing, seek alternative service, or file a motion for publication.
          </p>
          <p>
            Filing the wrong document, or filing a non-service return that's so thin it doesn't support the next step, wastes time and money. We've seen cases in Oklahoma County where a plaintiff spent six weeks waiting for publication approval because the original return listed two attempts with no times and no GPS. The judge ordered the server back out. Three more attempts and a rewritten affidavit later, publication was approved. The delay wasn't the law — it was the documentation.
          </p>

          <h3>What a Strong Affidavit of Service Looks Like (For Comparison)</h3>
          <p>
            A proper affidavit of service names the person served, states the date, time, address, and method, and includes the server's sworn signature. The non-service counterpart uses the same precision applied to failed attempts — same notarization, same exposure to cross-examination. The only difference is the outcome: papers delivered versus papers not delivered despite effort.
          </p>

          <h2>Common Mistakes That Sink Non-Service Returns</h2>

          <p>
            Copy-paste templates are the biggest offender. "Attempted service at listed address, unable to locate subject" repeated three times with different dates added in pen doesn't cut it. Neither does listing an address the server never physically visited, or claiming five attempts when GPS shows two. Courts and opposing counsel notice. Defendants who want to delay a case will seize on a sloppy return and file a motion to quash service by publication before you've even gotten a default.
          </p>
          <p>
            Another mistake: stopping after non-service instead of planning the next step. The return is a checkpoint, not a finish line. Plaintiffs should talk to their server about whether skip tracing makes sense, whether another address is worth trying, and what the local judge typically wants to see before publication. In Cleveland County, Rogers County, and the smaller districts, local practice varies slightly — some judges want four attempts, others want evidence the server checked with a landlord or employer. A server who works those courts regularly knows the difference.
          </p>

          <h2>Working With Your Process Server on the Return</h2>

          <p>
            Give your server every lead up front — old addresses, employer names, family contacts, vehicle descriptions. The more starting points they have, the stronger the non-service affidavit if personal service fails. Ask for GPS logs, review the draft before filing, and catch vague language before the judge reads it. Good servers treat non-service returns with the same seriousness as successful ones — their license under 12 O.S. § 158.1 and their reputation depend on it.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need a Court-Ready Non-Service Return — or Help Getting Someone Served?</h3>
            <p className="text-blue-800 mb-4">
              Just Legal Solutions serves all 77 Oklahoma counties from our Glenpool home office with flat-rate pricing, GPS-tracked attempts, and detailed affidavits — whether service succeeds or documents due diligence for your next step.
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
            An Oklahoma affidavit of non-service is only as good as the due diligence behind it. Courts don't want a checkbox saying service failed — they want dates, times, addresses, observations, and often GPS proof that someone actually tried to find your defendant before you publish notice in a newspaper. It's the mirror image of a successful affidavit of service, and it deserves the same level of care. A thin return delays your case. A thorough one keeps it on track.
          </p>
          <p>
            At Just Legal Solutions, we've filed service and non-service returns across all 77 Oklahoma counties with the documentation standards that district judges expect. Whether you need someone found or need a court-ready return when they can't be, we're ready to help.
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
