import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Serving Eviction Notices on Oklahoma Tenants',
  description: 'Eviction notice service in Oklahoma: the 41 O.S. 111 ladder, five-day rent demands, posting and certified mailing, proof of delivery, and the FED summons.',
  keywords: 'serve eviction notice Oklahoma, eviction notice service, 41 O.S. 111, five day rent demand, posting and mailing notice, FED summons Oklahoma, process server eviction',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Serving Eviction Notices on Oklahoma Tenants',
    description: 'Eviction notice service in Oklahoma: the 41 O.S. 111 ladder, five-day rent demands, posting and certified mailing, proof of delivery, and the FED summons.',
    url: 'https://justlegalsolutions.org/blog/serve-eviction-notice-oklahoma-tenant',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Serving Eviction Notices on Oklahoma Tenants',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/serve-eviction-notice-oklahoma-tenant',
  },
  other: {
    'article:published_time': '2026-11-10',
    'article:modified_time': '2026-11-10',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'Oklahoma eviction notices must travel a service ladder under 41 O.S. 111(E) — personal delivery, then a resident family member over age 12, then posting plus certified or accountable mail — while the five-day rent demand under 41 O.S. 131 and the FED summons under 12 O.S. 1148.5 keep separate clocks and separate proof rules.',
    'ai-key-facts':
      'Oklahoma termination notices are served personally, then to a resident family member over age 12, then by posting and mailing under 41 O.S. 111(E); Unpaid rent allows termination if not paid within five days of written demand under 41 O.S. 131(B); Lease-violation notices allow 10 days to cure with termination no earlier than 15 days after receipt under 41 O.S. 132(B); The FED summons is served at least three days before trial under 12 O.S. 1148.5; Lockouts and utility shutoffs without a court order are wrongful exclusion under 41 O.S. 123',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Can an eviction notice be taped to the door without mailing a copy?',
    answer: "Not if you want service to count. Under 41 O.S. 111(E), posting only satisfies the rule when a copy is also mailed to the tenant by certified mail or through the Postal Service's accountable mail book. Personal service comes first, then a resident family member over age 12, and only then posting plus the required mailing.",
  },
  {
    question: 'Does the five-day rent notice start when it is handed over or when it is mailed?',
    answer: "It starts when the notice is served under the ladder in 41 O.S. 111(E). A hand-delivered notice runs from the day it is handed over. A posted notice runs from posting and mailing, which is why the service date has to be pinned down in the field record. Every day of the five-day window matters, so the landlord should never estimate the date.",
  },
  {
    question: 'Can a process server leave the notice with a roommate?',
    answer: "Only if that person is a family member over age 12 who lives with the tenant. 41 O.S. 111(E) does not allow handing the notice to a roommate, guest, or neighbor. Leave it with the wrong person and the tenant can later argue the notice never arrived — which stalls the whole case.",
  },
  {
    question: 'What happens if the tenant refuses to take the notice?',
    answer: "Refusal does not stop the process. The server documents the refusal — time, place, who was present — and keeps working down the service ladder. A posted notice plus the required certified or accountable mailing usually follows. The affidavit and photos carry the day in court, not a signature.",
  },
  {
    question: 'Is serving the eviction notice the same as serving the lawsuit?',
    answer: "No. The notice is the landlord's pre-suit demand under Title 41 and can be delivered by the landlord or any adult acting for them. The lawsuit is a forcible entry and detainer action, and its summons is served under 12 O.S. 1148.5 — at least three days before trial, by the sheriff or a licensed process server. Two stages, two rule books.",
  },
  {
    question: 'Who can serve the notice, and who has to handle the FED summons?',
    answer: "The Act does not require a licensed server for the landlord's notice — the landlord or an adult acting for them can deliver it under 41 O.S. 111(E). The FED summons is different: it must be served by the sheriff or a licensed process server under Title 12. Using one licensed team for both stages keeps the paper trail clean.",
  },
  {
    question: 'Can the landlord change the locks once the notice period ends?',
    answer: "No. A served notice does not authorize self-help. Lockouts, utility shutoffs, and removing the tenant's belongings are wrongful exclusion under 41 O.S. 123, and the tenant can recover up to twice the monthly rent or double actual damages. Possession changes only through the court and the sheriff's office.",
  },
  {
    question: 'What happens if the tenant pays rent after the five-day notice?',
    answer: "Payment within the five-day window cures the default, and the landlord should not file on that demand. Under 41 O.S. 131(B), the demand for past-due rent is deemed a demand for possession, so accepting the money generally ends that termination path. Confirm the details with your attorney before filing anything.",
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Serving Eviction Notices on Oklahoma Tenants"
        title="Serving Eviction Notices on Oklahoma Tenants"
        pageDescription="Eviction notice service in Oklahoma: the 41 O.S. 111 ladder, five-day rent demands, posting and certified mailing, proof of delivery, and the FED summons."
        description="Eviction notice service in Oklahoma: the 41 O.S. 111 ladder, five-day rent demands, posting and certified mailing, proof of delivery, and the FED summons."
        pageUrl="https://justlegalsolutions.org/blog/serve-eviction-notice-oklahoma-tenant"
        siteName="Just Legal Solutions"
        reviewCount={112}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Serving Eviction Notices on Oklahoma Tenants', item: 'https://justlegalsolutions.org/blog/serve-eviction-notice-oklahoma-tenant' }
        ]}
        articleDetails={{
          headline: 'Serving Eviction Notices on Oklahoma Tenants',
          datePublished: '2026-11-10',
          dateModified: '2026-11-10',
          author: 'Just Legal Solutions Team',
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'serve eviction notice Oklahoma',
          'eviction notice service',
          '41 O.S. 111',
          'five day rent demand',
          'FED summons Oklahoma',
          'process serving',
          'Oklahoma landlord tenant law'
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
            Serving Eviction Notices on Oklahoma Tenants
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Oklahoma law makes the landlord serve written notice <strong>before any eviction lawsuit</strong>, and the{' '}
              <strong>41 O.S. § 111(E) service ladder</strong> controls how: personal delivery to the tenant first, then a{' '}
              <strong>resident family member over age 12</strong>, and only then <strong>posting on the dwelling unit</strong> plus a{' '}
              <strong>certified or accountable mailing</strong>. Unpaid rent gets a <strong>five-day demand under 41 O.S. § 131(B)</strong>,{' '}
              and the court summons that follows is a separate job under <strong>12 O.S. § 1148.5</strong>.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2026-11-10').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~13 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            An eviction in Oklahoma rarely starts in a courtroom. It starts with a piece of paper — a demand for rent, a notice to cure a lease violation, or a notice that the tenancy is ending — and with the question of whether that paper actually reached the tenant. I've walked a lot of Oklahoma driveways in this line of work, and the pattern repeats: the notice was served wrong, or served late, or served with no record at all. Then the whole case wobbles. Here's how serving eviction notices on Oklahoma tenants actually works under the Residential Landlord and Tenant Act, and what a process server does to keep your case on solid ground.
          </p>

          <h2>The Notice Comes First: Oklahoma Law Sets the Order</h2>

          <p>
            Under the Oklahoma Residential Landlord and Tenant Act (41 O.S. § 101 et seq.), a landlord can't just file a forcible entry and detainer case. The Act requires written notice first, and the kind and length depend on the reason. Nonpayment gets a five-day demand under 41 O.S. § 131(B). A fixable lease violation gets a cure notice under 41 O.S. § 132(B) — 10 days to remedy, with termination no earlier than 15 days after receipt. A month-to-month tenancy ends on 30 days' written notice under 41 O.S. § 111(A), and a shorter periodic tenancy on 7 days under § 111(B).
          </p>
          <p>
            The notice is the foundation; the lawsuit is the roof. Judges in Tulsa County, Oklahoma County, and every rural courthouse between them look first at whether the notice was served and whether the time ran. Miss that and nothing else gets a fair hearing. The notice deserves the same care as the summons — maybe more, because every later deadline is built on top of it.
          </p>

          <h2>The Service Ladder Under 41 O.S. § 111(E)</h2>

          <p>
            Here's the part most people get wrong: the Act spells out exactly how every termination notice must be delivered, and it's one rule for all of them. 41 O.S. § 111(E) requires service on the tenant personally. If the tenant cannot be located, service may go to any family member of the tenant over the age of 12 residing with the tenant. If neither can be served, the notice is posted at a conspicuous place on the dwelling unit — and a copy must be mailed by certified mail or through the Postal Service's Firm Mailing Book for Accountable Mail.
          </p>
          <p>
            Think of it as a ladder, not a menu. You don't get to skip the first rungs because posting is easier. A server who tapes the notice to the door on the first visit, without attempting personal delivery, hasn't followed the statute — and the tenant's lawyer will know it.
          </p>

          <h3>Personal Delivery Comes First</h3>
          <p>
            Personal delivery is the cleanest rung on the ladder. Knock, announce who you are and what you're delivering, hand the notice over, and note who received it. The clock starts the moment it's in the tenant's hand, and the record is simple: delivered to the tenant, on this date, at this address. We time visits for when people are home — early evenings, weekends, the day after payday — because a 9-to-5 landlord only ever finds the unit empty. A personal delivery starts the notice period cleanly and gives the landlord the strongest record if the case goes to trial.
          </p>

          <h3>A Resident Family Member Over Age 12</h3>
          <p>
            When the tenant can't be located, the Act allows service on "any family member of such tenant over the age of twelve (12) years residing with the tenant." Notice the limits: family member, over 12, and residing in the unit. Not a roommate, not a guest, not a neighbor in the parking lot. We confirm who the person is before we hand anything over — name, relationship, and the fact that they live there — and we write it down. Remember, this age-12 rule is for the notice stage; the FED summons later runs on a different age and a different rule.
          </p>

          <h2>Posting and Mailing: When Nobody Answers the Door</h2>

          <p>
            Posting means putting the notice somewhere conspicuous on the dwelling unit — the front door, a storm door, a spot visible at the main entry — then mailing a copy to the tenant's last known address by certified mail, or through the Postal Service's Firm Mailing Book for Accountable Mail. Both halves are required. Posting without mailing is incomplete service, and mailing without posting isn't what the statute describes either.
          </p>
          <p>
            We photograph the posted notice, record where it was placed, and keep the certified mail receipt with its tracking number. In an apartment complex, the dwelling unit is the unit itself — the leasing office door doesn't count as conspicuous posting. On a rural route in Creek County or up in Woodward, "last known address" gets genuinely hard; a cluster of mailboxes at the county road may be the only address that exists, and the server documents the search before mailing.
          </p>

          <h2>The Five-Day Rent Demand Under 41 O.S. § 131</h2>

          <p>
            Nonpayment is the most common eviction reason in Oklahoma, and it runs on its own clock. Under 41 O.S. § 131(B), if rent is unpaid when due and the tenant fails to pay within five days after written notice of the landlord's demand for payment, the landlord may terminate the rental agreement. The demand should say what's owed, and it has to be served by the same ladder in § 111(E) — personal delivery first, family member next, posting plus mailing last.
          </p>
          <p>
            One detail trips up landlords constantly: the statute says the demand for past-due rent "is deemed a demand for possession of the premises and no further notice to quit possession need be given." The five-day demand does double duty — it's both the bill and the notice to move. The five days run from service, so a hand-delivered demand starts the clock on day one, while a posted demand starts from posting and mailing. Pay within the window and the default is cured; there's no eviction on that demand.
          </p>

          <h2>Lease Violations and the 10-Day Cure Window</h2>

          <p>
            For a breach that can be fixed — a pet policy violation, an unauthorized occupant, damage beyond ordinary wear — 41 O.S. § 132(B) requires written notice served under § 111(E). The notice must spell out the noncompliance, state that the rental agreement will terminate on a date not less than 15 days after receipt, and give the tenant 10 days to remedy it. Remedy it in time and the tenancy survives; let it slide and the agreement terminates as the notice says.
          </p>
          <p>
            There are two sharp edges. A second breach after a cure notice can justify immediate termination on written notice. And if the noncompliance threatens imminent and irremediable harm to the premises or a person, § 132(C) lets the landlord skip the cure window and file the FED action right away. The server's job doesn't change: deliver, document, and get the clock running in a way the court can verify.
          </p>

          <h2>Refusals, Evasive Tenants, and Rural Addresses</h2>

          <p>
            The field reality is messier than the statute. The tenant who watches you through the blinds and won't answer. The pit bull behind the storm door of a Broken Arrow duplex. The January ice storm that turns a dirt lane in rural Osage County into a sheet of ice. The mobile home inside a gated park in Woodward where the office won't let you past the gate. Eviction service is where a process server earns the hourly rate.
          </p>
          <p>
            Refusal doesn't stop the process. We document it — time, date, who was present, what was said through the door — and keep working down the ladder. We try different days and hours before we call a unit unreachable. And we never argue, threaten, or push past a locked door; the law gives us the posting and mailing rung for a reason, and an ice storm or a locked gate is exactly what it was built for.
          </p>

          <h2>The Paper Trail That Carries the Case</h2>

          <p>
            The affidavit of service is where an eviction case is won or lost before trial. A proper one states the date, time, address, who was served (name, relationship, and age when a family member took it), the method, exactly which notice was delivered, and — when posting was involved — the mailing details with the certified mail receipt and tracking number. Add photos of the posted notice and a GPS stamp and you've built a record the judge can trust at a glance.
          </p>
          <p>
            The same discipline applies to a failed attempt. A clean report of two or three attempts at different times, each documented, justifies the next rung of the ladder. A vague "attempted" with no details helps nobody — least of all the landlord who has to explain the gaps under cross-examination. Documentation is the difference between "the tenant says they never got it" and "here's the proof they did."
          </p>

          <h2>When the Notice Runs Out: The FED Summons Is a Different Job</h2>

          <p>
            Once the notice period runs and the tenant stays put, the landlord files a forcible entry and detainer action under 12 O.S. § 1148.1 et seq. That starts a new service stage with a different rule book. The FED summons must be served at least three days before trial — personally on the tenant, or left with a person over age 15 residing on the premises, under 12 O.S. § 1148.5. The age-12 rule from the notice stage does not carry over.
          </p>
          <p>
            The FED summons is court process, so it goes through the sheriff or a licensed process server — not through the landlord's cousin. We treat the notice and the summons as two separate assignments with two separate field records, because courts do. Mixing the stages up — serving the notice like a summons, or skipping the notice and filing straight to court — is a common reason eviction cases get delayed or dismissed.
          </p>

          <h2>What Serving a Notice Does Not Authorize</h2>

          <p>
            One more boundary, and it's a hard one: serving the notice does not put the landlord in possession. Changing locks, shutting off utilities, or hauling out the tenant's belongings before a court order is wrongful exclusion under 41 O.S. § 123. The tenant can recover possession and up to twice the monthly rent or double their actual damages. Possession changes through the court and the sheriff's office — never through the process server's clipboard.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need an Eviction Notice Served — or a FED Summons Handled?</h3>
            <p className="text-blue-800 mb-4">
              Just Legal Solutions serves all 77 Oklahoma counties from our Glenpool home office, with licensed, bonded servers under Title 12 O.S. § 158.1, GPS-documented attempts, and court-ready affidavits delivered within 24 hours.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"><BookOpen className="w-6 h-6 text-blue-600" /> Frequently Asked Questions</h2>
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
            Serving an eviction notice in Oklahoma looks simple from the outside — it's one sheet of paper, one address, one visit. The law sees it differently. The notice has to say the right thing, be served the right way, and start the right clock, or the landlord's whole case rests on sand. Personal delivery first, a resident family member over age 12 next, posting and certified mailing only after both fail. That's the ladder in 41 O.S. § 111(E), and it's the same ladder whether you're handing over a five-day rent demand or a thirty-day notice to move.
          </p>
          <p>
            At Just Legal Solutions, we've served eviction notices and FED summonses across all 77 Oklahoma counties with the documentation standards courts expect. Whether you're a landlord starting the process the right way or an attorney who needs a stage-one notice and a stage-two summons handled cleanly, we're ready to help.
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
