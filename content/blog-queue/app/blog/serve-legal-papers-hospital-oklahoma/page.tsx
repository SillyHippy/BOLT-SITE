import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Serving Legal Papers at an Oklahoma Hospital',
  description: 'Serving legal papers at an Oklahoma hospital: HIPAA privacy rules, visitor policy limits, and what staff can accept. How service works in all 77 counties.',
  keywords: 'serve papers hospital Oklahoma, process server hospital, serving patient lawsuit, HIPAA process serving, serve legal papers hospital visitor, Oklahoma process server',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Serving Legal Papers at an Oklahoma Hospital',
    description: 'Serving legal papers at an Oklahoma hospital: HIPAA privacy rules, visitor policy limits, and what staff can accept. How service works in all 77 counties.',
    url: 'https://justlegalsolutions.org/blog/serve-legal-papers-hospital-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Serving Legal Papers at an Oklahoma Hospital',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/serve-legal-papers-hospital-oklahoma',
  },
  other: {
    'article:published_time': '2027-01-07',
    'article:modified_time': '2027-01-07',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'An Oklahoma hospital is private property with public lobbies: service on a patient works under 12 O.S. 2004 when they understand the papers, HIPAA only limits what staff may say, and no nurse or clerk can accept service for a patient.',
    'ai-key-facts':
      'Personal service on a hospitalized Oklahoma patient follows 12 O.S. 2004(C)(1) and needs no hospital permission; The HIPAA directory rule under 45 CFR 164.510 lets a hospital confirm a patient by name unless the patient opts out, but it is permitted not required; Hospital nurses, clerks, and security have no authority to accept legal papers for a patient; An incapacitated patient requires dual service on the person and guardian under 12 O.S. 2004(C)(1)(c)(2); The 180-day service clock under 12 O.S. 2004(I) keeps running while a defendant is hospitalized',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Do I need permission from a hospital to serve legal papers on a patient in Oklahoma?',
    answer: "No — nothing in Oklahoma law requires a hospital's permission before you make personal service under 12 O.S. § 2004(C)(1). What you do need is to follow the hospital's visitor policy while you're on their property. Public areas like the lobby and waiting rooms are open during visiting hours. Patient care floors usually require a badge and an approved reason to be there. You can be asked to leave at any time, and patient care always comes first, so plan around visiting hours and be ready to explain why you're there.",
  },
  {
    question: 'Can a nurse or front desk clerk accept legal papers for a hospital patient?',
    answer: 'No. Hospital staff have no authority to accept service on behalf of a patient, and no Oklahoma statute gives them that power. The substituted service rule under 12 O.S. § 2004(C)(1)(c)(1) only covers leaving papers with a resident of the defendant\'s own household who is 15 or older — a hospital room is not a dwelling, and a nurse is not a co-resident. Handing papers to a nurse and walking away means service never happened, and the defendant can use it to get the case dismissed or delayed.',
  },
  {
    question: 'Are process servers subject to HIPAA rules when they deliver papers at a hospital?',
    answer: 'No — a process server is not a HIPAA-covered entity, so the Privacy Rule does not bind you directly. It binds the hospital. What you cannot do is demand protected health information or build your service plan around staff disclosing a patient\'s condition. The practical effect runs the other direction: under the facility directory rule (45 CFR § 164.510), a hospital may tell someone who asks by name whether a patient is there, what room they are in, and their general condition — unless the patient has opted out of the directory.',
  },
  {
    question: 'Can a process server be charged with trespassing at an Oklahoma hospital?',
    answer: "Walking into a public lobby and asking questions is not trespass. Staying after you've been told to leave is a different story. Oklahoma's criminal trespass statute, 21 O.S. § 1835, punishes entering or remaining on property after being expressly forbidden to do so. Hospital security can ask you to leave, and if you refuse, you can be cited or arrested. When security says leave, leave — politely and without escalating. Document the refusal in your notes, then work the next attempt at a different time or through a different method.",
  },
  {
    question: 'What if the hospital will not confirm that the defendant is a patient?',
    answer: "That happens more often than you'd think. The HIPAA directory rule permits a hospital to confirm a patient by name, but it does not require it — many Oklahoma hospitals train staff to say they cannot confirm or deny anything to anyone who is not family. The patient may also have opted out of the directory entirely, and substance abuse or psychiatric units follow the stricter 42 CFR Part 2 rules. When the hospital stonewalls, don't argue. Document the refusal, then use other locating tools: family members, public records, social media, or simply waiting for the patient's discharge date.",
  },
  {
    question: 'Can a process server hand papers to a visitor in a hospital waiting room?',
    answer: "Yes. If the defendant is visiting a patient, the waiting room or lobby is a public space, and personal service there works exactly like service anywhere else. Confirm identity first — ask their name, check a photo ID if you can do it without making a scene — then hand over the papers quietly. A hospital waiting room full of worried families is the wrong place for a loud confrontation. Pull the person aside, keep your voice down, and let them know what's in the envelope before you walk away.",
  },
  {
    question: 'What happens if a patient is sedated, unconscious, or in surgery during service?',
    answer: "That's the hard case, and it deserves care. Oklahoma's rule for incapacitated defendants is dual service: 12 O.S. § 2004(C)(1)(c)(2) requires personal service on the incompetent person AND on their guardian. If the patient has a guardian, you serve both. If the patient is merely sedated and expected to recover, the smart play is usually to wait and come back during visiting hours — a judge who sees a summons 'handed to' someone who was asleep will not thank you. Talk to the attorney handling the case before forcing service on someone who cannot respond.",
  },
  {
    question: 'What goes on the affidavit of service after a hospital serve?',
    answer: "Everything a court needs to believe the service happened. List the exact date and time, the precise location (lobby, waiting room, or room number), and how you identified the defendant — photo ID, confirmation of name, or a family member's word. Note what the patient said or did, any witnesses, and every staff interaction, including refusals to confirm a patient or a security officer asking you to leave. Take photos of the public area and the building exterior, never the patient's room. The notarized affidavit is your evidence, and a judge will read it line by line.",
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Serving Legal Papers at an Oklahoma Hospital"
        title="Serving Legal Papers at an Oklahoma Hospital"
        pageDescription="Serving legal papers at an Oklahoma hospital: HIPAA privacy rules, visitor policy limits, and what staff can accept. How service works in all 77 counties."
        description="Serving legal papers at an Oklahoma hospital: HIPAA privacy rules, visitor policy limits, and what staff can accept. How service works in all 77 counties."
        pageUrl="https://justlegalsolutions.org/blog/serve-legal-papers-hospital-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={112}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Serving Legal Papers at an Oklahoma Hospital', item: 'https://justlegalsolutions.org/blog/serve-legal-papers-hospital-oklahoma' }
        ]}
        articleDetails={{
          headline: 'Serving Legal Papers at an Oklahoma Hospital',
          datePublished: '2027-01-07',
          dateModified: '2027-01-07',
          author: 'Just Legal Solutions Team',
          
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'serve papers hospital Oklahoma',
          'process server hospital',
          'serving patient lawsuit',
          'HIPAA process serving',
          'Oklahoma process server',
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
            Serving Legal Papers at an Oklahoma Hospital
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Serving papers at an Oklahoma hospital is legal under <strong>12 O.S. § 2004(C)(1)</strong>{' '}
              personal service, but HIPAA and visitor policies shape how it happens. A hospital may confirm a
              patient by name under the <strong>45 CFR § 164.510</strong> directory rule unless the patient opts
              out, staff cannot accept papers for a patient, and the <strong>180-day clock</strong> under{' '}
              <strong>12 O.S. § 2004(I)</strong> keeps running through a hospital stay.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2027-01-07').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~13 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            Some service jobs are simple: pull up, knock, hand over the envelope. Serving someone at an Oklahoma hospital is not one of them. Locked doors, visitor sign-ins, security officers who eye every stranger, and a privacy law half the staff thinks means they can't even say a patient's name — the hospital can feel like a fortress built to stop you. It isn't. With the right timing and a working knowledge of what HIPAA actually does, hospital service gets done every day across this state. Here's how.
          </p>

          <h2>Serving Someone at an Oklahoma Hospital Is Legal — and Tricky</h2>

          <p>
            Let's settle the legal question first. Nothing in Oklahoma law makes a hospital off-limits for service of process, and a defendant doesn't get immunity because they're in a bed at Saint Francis in Tulsa or OU Medical in Oklahoma City. Under 12 O.S. § 2004(C)(1), personal service means handing the summons and petition to the defendant yourself, and the statute carves out no hospital, nursing home, or clinic.
          </p>
          <p>
            What the law doesn't give you is a free pass through the front door. Hospitals are private property with their own security, visitor policies, and sense of what's urgent. You have no more right to wander a patient floor than the pizza delivery driver does. The job is working inside their rules to get papers into the right hands — without a scene in a hallway full of sick people.
          </p>

          <h3>Personal Service Still Rules Under 12 O.S. § 2004(C)(1)</h3>
          <p>
            The service rules don't change because the location is unusual. Personal delivery to the defendant is the gold standard, and your affidavit must show you handed the documents to the named defendant at a place and time you can describe. What you can't do is improvise — if you can't reach the patient, you can't fall back on leaving papers with a nurse. Substituted service under 12 O.S. § 2004(C)(1)(c)(1) covers a defendant's dwelling and a household resident 15 or older. A hospital room isn't a dwelling, and a nurse isn't a co-resident. Papers left at a nurses' station never got served.
          </p>

          <h2>Visitor Policies Decide Where You Can Stand</h2>

          <p>
            Walk into most Oklahoma hospitals and you'll pass a front desk, a security checkpoint, or both. Visiting hours get posted, and more facilities add badge requirements and sign-in sheets. None of that targets process servers — it applies to everyone, including a grandparent coming to see a newborn.
          </p>
          <p>
            The rule of thumb: public areas — lobbies, waiting rooms, cafeterias, the corridor to the gift shop — are open to anyone during visiting hours. That's where most hospital service happens, and usually where it should.
          </p>

          <h3>Public Spaces You Can Use</h3>
          <p>
            The lobby and ER waiting room are public, and so is the cafeteria during meal hours. If you know the patient is being discharged, a seat near the main exit is the highest-value spot in the building. Patients leave to smoke, to walk with family, or to meet a ride — and a patient on the way out can be served without ever touching a restricted floor. I've finished more than one hospital serve in a cafeteria line.
          </p>

          <h3>Patient Care Units and the Honest Check-In</h3>
          <p>
            The floors are another story. Most hospitals limit nursing units to badged visitors, and badges go to family and approved guests. Don't lie about who you are. Posing as a family member to reach a floor is the fastest way to get banned, cited for trespass, or both — and it destroys your affidavit's credibility with a judge who's heard that story before.
          </p>
          <p>
            Instead, check in at the front desk, say you're there on legal business, and ask how the hospital handles service requests. Some will call the patient's room; others point you to patient relations or security; a few shrug and tell you visiting hours. Treat every answer as information — not permission, not denial — and act on it.
          </p>

          <h2>HIPAA Limits Information, Not Service</h2>

          <p>
            Here's the myth that trips up more people than anything else: "HIPAA means the hospital can't tell me anything." The truth is more useful. HIPAA regulates the hospital, not you, and it has a specific rule for exactly this situation.
          </p>

          <h3>The Facility Directory Rule (45 CFR § 164.510)</h3>
          <p>
            Under the HIPAA Privacy Rule, a hospital may keep a facility directory with a patient's name, location in the building, and condition in general terms — and may share that with anyone who asks by name, unless the patient objected. Notice the word "may." The rule permits the disclosure; it doesn't demand it. Ask by name and the volunteer says "let me check" — that's the directory rule working. They say "we can't confirm anyone" — that's a hospital choosing a stricter policy, which it's allowed to do.
          </p>

          <h3>When the Hospital Will Not Confirm Anything</h3>
          <p>
            Patients can opt out of the directory entirely, and plenty do — that's their right under the same rule. Substance-abuse and psychiatric units operate under tighter federal rules in 42 CFR Part 2, where even the fact of treatment can be protected. And some Oklahoma hospitals simply train staff to say "we cannot confirm or deny" to anyone who isn't immediate family. When that happens, don't argue with the front desk — that's not where you litigate HIPAA. Document the refusal, then work other angles: family, public records, social media, the discharge date. A hospital stay has an end, and the end is a service opportunity.
          </p>

          <h2>What Hospital Staff Can and Cannot Do</h2>

          <p>
            Staff cooperation is a two-way street. They don't have to help you, and you don't have to vanish because service is awkward. The line between the two is what keeps a hospital serve from becoming a mess.
          </p>

          <h3>Nobody at the Desk Can Accept Service for a Patient</h3>
          <p>
            A nurse, a clerk, a security guard, even an administrator — none can accept legal papers for a patient. No statute gives them that authority, and an affidavit that says "left with Nurse Jones at the nurses' station" is a gift to the defendant's lawyer. The only people who can accept service for a patient are the patient themself or a guardian with real legal authority under 12 O.S. § 2004(C)(1)(c)(2). If you're tempted to hand papers to a nurse "just to get them delivered," don't.
          </p>

          <h3>Security, Trespass, and Knowing When to Leave</h3>
          <p>
            Hospital security officers have one job: keep the building safe. They can ask you to leave public areas and escort you out if you push back. Refuse to go after being told, and you're looking at criminal trespass under 21 O.S. § 1835 — which punishes entering or remaining after being expressly forbidden. Asking questions isn't trespass; staying after you've been told to leave is.
          </p>
          <p>
            So when security says leave, leave — politely, hands visible, no confrontation. Note the officer's name if you can and write down what was said. Then regroup. A professional server treats a security escort like a bad storm: weather, not the end of the trip.
          </p>

          <h2>Three People You Might Serve at a Hospital</h2>

          <p>
            The hospital doesn't just hold defendants in beds. Depending on the case, you might be there for any of three people, and each takes a slightly different approach.
          </p>

          <h3>The Patient</h3>
          <p>
            If the patient is alert and understands what's happening, bedside service is an ordinary personal service with an unusual backdrop. Confirm their name, tell them plainly what's in the envelope, hand it over. Patients in gowns keep their rights and their obligations — nobody gets a service holiday for being in a hospital bed. Just don't get between a nurse and a patient; if a procedure is happening, step back and try again. Patient care wins that argument, and it should.
          </p>

          <h3>A Visitor in the Lobby</h3>
          <p>
            Sometimes the defendant isn't the patient. They're in the surgical waiting room while their mother is in surgery, or pacing the lobby while a spouse is in the ER. A waiting room is a public space, and personal service there works like service in a coffee shop — with one difference: this is a room full of worried people, and a loud "you've been served" moment is the wrong move. Pull the person aside, confirm who they are, keep your voice down, hand over the papers quietly.
          </p>

          <h3>Hospital Employees and Doctors</h3>
          <p>
            If the defendant works at the hospital — a doctor, nurse, or administrator — you're doing workplace service, and the same rules apply as at any job site. You serve the person, not the department. Don't ask HR to summon them, don't hand papers to a receptionist on their floor, and don't expect the hospital to make it easy. If the lawsuit is against the hospital corporation itself, you're usually serving the registered agent or an officer — a different job entirely.
          </p>

          <h2>When the Patient Cannot Understand the Papers</h2>

          <p>
            Sedated. Unconscious. Ventilated. In surgery. This is the hard case. Personal service assumes the person can receive the documents — and courts get nervous when a summons was "handed to" someone asleep.
          </p>
          <p>
            Oklahoma's rule for incapacitated defendants is dual service: 12 O.S. § 2004(C)(1)(c)(2) requires personal service on the incompetent person AND on their guardian. If there's a guardian, you serve both, and the affidavit must show it. If the patient is only temporarily sedated, the smarter play is usually to wait — come back when they're awake. And the call on forcing service on a vulnerable patient belongs to the attorney, not the server.
          </p>

          <h2>Documenting the Hospital Serve for the Affidavit</h2>

          <p>
            A hospital serve lives or dies on the affidavit. Courts have heard every story — papers left at the nurses' station, handed to someone in scrubs, lost in the mail — so your sworn statement needs to leave nothing to imagination.
          </p>
          <p>
            Put this on it: the exact date and time; the precise location, down to the lobby bench or room number; how you identified the defendant; what the patient said or did when you handed over the envelope; every staff interaction, including a refused confirmation or a security escort; any witnesses; and photos of the public area and exterior — never the patient's room. The notarized affidavit is evidence of service under Oklahoma law, and it's what a judge leans on when the defendant swears they never got the papers. Make it boring, specific, and true.
          </p>

          <h2>The 180-Day Clock Does Not Wait for a Hospital Stay</h2>

          <p>
            One last thing for plaintiffs and attorneys: 12 O.S. § 2004(I) gives you 180 days from filing to get the defendant served, and a hospital stay doesn't pause that clock. If the defendant will be laid up past the deadline, file for an extension before it runs. And once service lands, the defendant's 20-day answer clock under 12 O.S. § 2006(A) starts that day, whether they're in a Tulsa County hospital room or recovering in Woodward County. A clean hospital serve finishes your job and starts theirs.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need Papers Served at an Oklahoma Hospital — or Anywhere Else?</h3>
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
            Serving papers at an Oklahoma hospital is a planning problem, not a legal problem. The law allows it. HIPAA doesn't forbid it. The hospital's visitor policy just decides where you can stand while you do it. Know the directory rule, never leave papers with a nurse, document everything, and don't argue with security. Get those pieces right, and a hospital serve goes from impossible to routine — patient care and process serving can absolutely share a building.
          </p>
          <p>
            At Just Legal Solutions, we've served summonses and legal documents across all 77 Oklahoma counties — including hospitals, nursing homes, and clinics — with the professionalism, speed, and documentation standards that courts expect. If you've got a defendant in a hospital bed and a deadline on the calendar, we're ready to help.
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
