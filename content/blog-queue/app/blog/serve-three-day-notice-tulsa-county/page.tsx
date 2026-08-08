import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Serving a Three-Day Notice in Tulsa County',
  description: 'Tulsa County rent demands follow 41 O.S. 111 ladder and five-day cure under 131, not a three-day notice. Field service, proof, and FED timing for landlords.',
  keywords: 'three-day notice Tulsa County, Tulsa County eviction notice service, 41 O.S. 111, five day rent demand Tulsa, FED summons Tulsa County, process server Tulsa',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Serving a Three-Day Notice in Tulsa County',
    description: 'Tulsa County rent demands follow 41 O.S. 111 ladder and five-day cure under 131, not a three-day notice. Field service, proof, and FED timing for landlords.',
    url: 'https://justlegalsolutions.org/blog/serve-three-day-notice-tulsa-county',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Serving a Three-Day Notice in Tulsa County',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/serve-three-day-notice-tulsa-county',
  },
  other: {
    'article:published_time': '2026-10-23',
    'article:modified_time': '2026-10-23',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'Landlords in Tulsa County often ask for a three-day notice, but Oklahoma nonpayment demands run five days under 41 O.S. 131(B) and must be served on the 41 O.S. 111(E) ladder before a forcible entry and detainer case is filed in the 19th Judicial District.',
    'ai-key-facts':
      'Oklahoma rent demands are five days under 41 O.S. 131(B), not three; Notice service follows personal delivery, resident family member over 12, then posting plus certified or accountable mail under 41 O.S. 111(E); The FED summons is served at least three days before trial under 12 O.S. 1148.5 by sheriff or licensed server; Tulsa County FED cases are filed in the 19th Judicial District courthouse downtown; Lockouts without a court order are wrongful exclusion under 41 O.S. 123',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Is a three-day rent notice valid in Tulsa County?',
    answer: "No. Oklahoma does not use a three-day rent cure period for residential nonpayment. Under 41 O.S. § 131(B), the tenant must be given five days after written demand before the landlord may terminate for unpaid rent. A form labeled \"three-day notice\" borrowed from another state will not match the statute Tulsa County judges apply.",
  },
  {
    question: 'Where does the three-day rule actually show up in Tulsa eviction cases?',
    answer: "The three-day window most landlords mean is the FED trial clock, not the rent demand. After you file a forcible entry and detainer action in Tulsa County District Court, the summons must be served at least three days before trial under 12 O.S. § 1148.5 — personally on the tenant or left with a person over age 15 residing on the premises. That is a different document, a different server rule, and a different deadline than the pre-suit notice.",
  },
  {
    question: 'Who can serve the rent demand on a Tulsa rental property?',
    answer: "The landlord or any adult acting for the landlord can deliver the termination notice under 41 O.S. § 111(E). A licensed process server is not required for that first paper, but many Tulsa landlords hire one anyway because apartment complexes, gate codes, and refused deliveries need a neutral witness and a clean photo record before the case lands in the 19th Judicial District.",
  },
  {
    question: 'How do you serve notice at a Tulsa apartment complex?',
    answer: "The dwelling unit is the tenant's unit, not the leasing office. Under 41 O.S. § 111(E), the server attempts personal delivery at the unit door first. If posting is required, the notice goes on a conspicuous place on the dwelling unit — typically the front door or storm door — and a copy must be mailed by certified mail or through the Postal Service Firm Mailing Book for Accountable Mail. We record the unit number, building, and gate access in the field notes.",
  },
  {
    question: 'What rent amount must a Tulsa County five-day demand state?',
    answer: "The demand should identify the rental property, state that rent is past due, and spell out the amount claimed. Under 41 O.S. § 131(B), failure to pay within five days after written notice of the landlord's demand for payment allows termination. Vague language or the wrong total invites a tenant to argue the notice was defective — and Tulsa County judges routinely start there.",
  },
  {
    question: 'Does certified mailing alone count as notice service in Tulsa?',
    answer: "Mailing alone does not satisfy 41 O.S. § 111(E). Certified or accountable mail is the second half of the posting step, not a substitute for personal delivery. The ladder runs personal service first, then a resident family member over age 12, and only then posting plus the required mailing. Skip a rung and the notice period may never start.",
  },
  {
    question: 'When should a Tulsa landlord file the FED after the notice runs?',
    answer: "After the five-day window closes and the tenant remains, the landlord files a forcible entry and detainer petition with Tulsa County District Court — typically at the downtown courthouse for cases within the city limits. Filing before the notice period ends is a common mistake. Your attorney should confirm the service date, the cure deadline, and whether partial payment changes the calculus under 41 O.S. § 131(B).",
  },
  {
    question: 'Can Just Legal Solutions handle both the notice and the FED summons in Tulsa County?',
    answer: "Yes. We deliver pre-suit notices with GPS-tagged attempts and photo documentation, then serve the FED summons under 12 O.S. § 1148.5 when counsel is ready. One licensed team carrying both stages keeps the paper trail consistent from Midtown duplexes to Broken Arrow subdivisions and rural leases at the edge of Tulsa County.",
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Serving a Three-Day Notice in Tulsa County"
        title="Serving a Three-Day Notice in Tulsa County"
        pageDescription="Tulsa County rent demands follow 41 O.S. 111 ladder and five-day cure under 131, not a three-day notice. Field service, proof, and FED timing for landlords."
        description="Tulsa County rent demands follow 41 O.S. 111 ladder and five-day cure under 131, not a three-day notice. Field service, proof, and FED timing for landlords."
        pageUrl="https://justlegalsolutions.org/blog/serve-three-day-notice-tulsa-county"
        siteName="Just Legal Solutions"
        reviewCount={118}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Serving a Three-Day Notice in Tulsa County', item: 'https://justlegalsolutions.org/blog/serve-three-day-notice-tulsa-county' },
        ]}
        articleDetails={{
          headline: 'Serving a Three-Day Notice in Tulsa County',
          datePublished: '2026-10-23',
          dateModified: '2026-10-23',
          author: 'Just Legal Solutions Team',
          image: 'https://justlegalsolutions.org/images/jls-logo.webp',
        }}
        faqItems={faqs}
        keywords={[
          'three-day notice Tulsa County',
          'Tulsa County eviction notice',
          '41 O.S. 111',
          'five day rent demand',
          'FED summons Tulsa',
          'process server Tulsa County',
        ]}
      />

      <Navbar />
      <LocalPromoBanner zips={[]} />

      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            Tulsa County Landlord Service
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Serving a Three-Day Notice in Tulsa County
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Tulsa landlords often ask for a <strong>three-day notice</strong>, but Oklahoma nonpayment demands run{' '}
              <strong>five days under 41 O.S. § 131(B)</strong> and must travel the{' '}
              <strong>41 O.S. § 111(E) service ladder</strong> — personal delivery, resident family member over 12, then posting plus{' '}
              <strong>certified or accountable mail</strong>. The <strong>three-day rule</strong> that actually appears in statute is the{' '}
              <strong>FED summons</strong> clock under <strong>12 O.S. § 1148.5</strong>, served after you file in Tulsa County District Court.
            </p>
          </div>
          <p className="mb-6 text-gray-700">
            At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {new Date('2026-10-23').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> ~14 min read
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> Tulsa County, Oklahoma
            </span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
              Every week someone in Tulsa County calls asking us to serve a three-day notice. The phrase sounds right — landlords hear it on TV, copy forms from California, or remember an old commercial lease from another state. Oklahoma residential law does not work that way. In Tulsa County District Court — the 19th Judicial District — judges start with whether the landlord served the correct notice, on the correct ladder, for the correct number of days. This guide walks through what Tulsa landlords actually need to deliver, how service should look on a Midtown duplex or a Broken Arrow cul-de-sac, and where the real three-day deadline hides in the statute books.
            </p>

            <h2>Why Tulsa Landlords Say Three Days When the Statute Says Five</h2>
            <p>
              The Oklahoma Residential Landlord and Tenant Act lives in Title 41. For unpaid rent, 41 O.S. § 131(B) is explicit: if rent is unpaid when due and the tenant fails to pay within five days after written notice of the landlord&apos;s demand for payment, the landlord may terminate the rental agreement. Five days, not three. A notice that gives only three days to pay does not match the cure period Tulsa County judges expect for residential nonpayment.
            </p>
            <p>
              The confusion usually comes from mixing two different clocks. The pre-suit rent demand runs five days under § 131(B). The lawsuit summons that follows — the forcible entry and detainer summons — must be served at least three days before trial under 12 O.S. § 1148.5. Landlords compress both into one mental picture and end up with the wrong form, the wrong deadline, or both. Separating those stages before you leave the office saves a dismissed case later.
            </p>

            <h2>The 41 O.S. § 111(E) Ladder in Tulsa County Rentals</h2>
            <p>
              Every termination notice under the Act — rent demand, cure notice, or end-of-tenancy letter — must be served the same way. 41 O.S. § 111(E) requires service on the tenant personally. If the tenant cannot be located, service may go to any family member of the tenant over the age of twelve residing with the tenant. If neither can be served, the notice is posted at a conspicuous place on the dwelling unit, and a copy must be mailed by certified mail or through the Postal Service&apos;s Firm Mailing Book for Accountable Mail.
            </p>
            <p>
              That ladder is not optional in Tulsa County. A landlord who posts on the first visit without knocking for the tenant has not followed the statute. A server who hands the paper to a roommate who is not a family member has not followed it either. Tulsa apartment managers sometimes tell tenants to pick up mail at the leasing office — that office is not the dwelling unit for posting purposes. The unit door is.
            </p>

            <h3>Personal Delivery at the Dwelling Unit</h3>
            <p>
              Personal delivery is the cleanest record. Knock, identify yourself, state that you are delivering a written notice regarding the tenancy, and hand the document to the tenant. Note the date, time, unit number, and who received it. In Tulsa&apos;s older neighborhoods — Kendall Whittier, Brookside, parts of north Tulsa — that often means evening attempts when wage earners are home. In newer subdivisions around Bixby and Jenks, the same timing logic applies even when the houses look identical.
            </p>
            <p>
              Refusal does not stop the process. Document who was present, that the tenant refused to accept the paper, and move down the ladder. Tulsa County judges care about what happened at the door, not whether the tenant signed a receipt.
            </p>

            <h3>Resident Family Member Over Age 12</h3>
            <p>
              When the tenant is not available, § 111(E) allows service on a family member over twelve who resides with the tenant. Confirm the relationship and residency before you hand anything over — name, how they are related, and that they live in the unit. A cousin visiting for the weekend does not count. A teenage child who lives there does.
            </p>
            <p>
              This age-twelve rule applies only to the notice stage. Do not carry it forward to the FED summons. Trial service under 12 O.S. § 1148.5 uses a person over age fifteen residing on the premises — a different threshold and a different statute.
            </p>

            <h2>Posting Plus Mailing in Tulsa Apartment and Duplex Stock</h2>
            <p>
              Posting means placing the notice somewhere conspicuous on the dwelling unit — the front door, a storm door, a spot visible from the main entry — then mailing a copy by certified mail or accountable mail to the tenant&apos;s last known address. Both halves matter. Post without mail and the notice is incomplete. Mail without post and you have not followed the statute&apos;s posting step.
            </p>
            <p>
              Tulsa&apos;s rental market is heavy on garden-style complexes and converted duplexes. Gate codes, intercoms that nobody answers, and &quot;no solicitation&quot; signs are everyday obstacles. We photograph the posted notice, record the building and unit, and retain the certified mail receipt with its tracking number. For a sprawling complex off Memorial or 71st Street, the field notes should read like a map — building letter, unit number, stairwell — so counsel can reconstruct the visit months later in a crowded courtroom.
            </p>

            <h2>What the Five-Day Rent Demand Must Say</h2>
            <p>
              The demand is not a generic &quot;pay or quit&quot; slogan. It should identify the rental property, state that rent is past due, and demand payment of the amount claimed. Under 41 O.S. § 131(B), the written notice of demand for payment is deemed a demand for possession — meaning the tenant&apos;s failure to pay within five days after that notice allows termination.
            </p>
            <p>
              Tulsa landlords sometimes lump in late fees, utilities, or repair charges that the lease does not treat as rent. If the tenant disputes the total, the notice becomes a battlefield. Your attorney should review the ledger before service. The server&apos;s job is to deliver exactly what counsel approved — not to negotiate the balance at the door.
            </p>

            <h2>After the Notice: Filing in Tulsa County District Court</h2>
            <p>
              When the five-day window closes and the tenant stays, the landlord files a forcible entry and detainer action under 12 O.S. § 1148.1 et seq. Tulsa County cases are heard in the 19th Judicial District — for most city addresses, filing and calendaring run through the downtown Tulsa County courthouse on Denver Avenue. Suburban and rural Tulsa County addresses may involve different filing logistics, so confirm the correct venue with your attorney before you pay filing fees twice.
            </p>
            <p>
              Filing early is a classic mistake. If the notice was posted and mailed on Monday, counting five full days matters. A petition filed on Friday afternoon when the cure period still has hours left gives the tenant a straightforward defense. Pin the service date in the field record and let counsel set the filing date from that anchor.
            </p>

            <h2>The Real Three-Day Rule: FED Summons Service</h2>
            <p>
              Here is where three days actually appears. After the FED petition is filed, the summons must be served at least three days before the date set for trial — personally on the tenant, or by leaving a copy with a person over age fifteen residing on the premises, under 12 O.S. § 1148.5. That service must be performed by the sheriff or a licensed process server under Title 12, not by the landlord walking the paper over themselves.
            </p>
            <p>
              Tulsa County&apos;s FED calendar moves fast. A summons served late can push the hearing, which pushes possession, which pushes lost rent. Licensed servers watch the trial date, the service window, and the age-fifteen substituted-service rule simultaneously. Mixing up the notice-stage ladder with the summons-stage rule is how cases stall in the hallway outside a Tulsa County courtroom.
            </p>

            <h2>Tulsa County Geography and Access Realities</h2>
            <p>
              Tulsa County is not one neighborhood. Downtown high-rise units involve parking, elevators, and security desks that want a work order before they buzz you up. A rural lease near Collinsville may be the only structure on a county road with no mailbox at the gate. The statute is statewide; the logistics are local.
            </p>
            <p>
              We plan routes across Tulsa, Broken Arrow, Owasso, and Sand Springs. Gate codes expire. Tenants work shifts. Good field notes capture access conditions so the affidavit reads like a witness statement, not a template.
            </p>

            <h2>Proof Landlords Should Keep Before Calling the Courthouse</h2>
            <p>
              Tulsa County judges reward paper trails. For the notice stage, keep the original notice, a delivery log, photos of any posted copy, certified mail receipts, and any communication from the tenant about payment. For the summons stage, keep the server&apos;s return of service, GPS attempt logs, and the affidavit that matches what was actually delivered.
            </p>
            <p>
              Self-help does not substitute for that record. Changing locks, shutting off utilities, or removing belongings before a court order is wrongful exclusion under 41 O.S. § 123. The tenant can recover possession and up to twice the monthly rent or double actual damages. Possession changes through the court and the sheriff — never through a notice taped to a door in Brookside.
            </p>

            <h2>When Payment Arrives During the Five-Day Window</h2>
            <p>
              Payment within the five-day period generally cures the default for a nonpayment demand under § 131(B). Accepting rent after a proper demand can end the termination path for that notice. Landlords should confirm with counsel before filing if a partial payment lands on day four, if the tenant pays into an online portal after posting, or if a check shows up in the mail on the last day.
            </p>
            <p>
              Servers should report any payment conversation at the door without negotiating on behalf of the landlord. &quot;The tenant said they mailed a check&quot; is useful intelligence for counsel. &quot;I told them they could pay half&quot; is a problem.
            </p>

            <h2>Why Tulsa Landlords Hire a Licensed Server Anyway</h2>
            <p>
              The Act does not require a licensed server for the landlord&apos;s notice — any adult acting for the landlord may deliver it. Many Tulsa landlords still hire us because neutrality matters when the tenant knows the landlord&apos;s face, because apartment access is easier with a professional who documents every attempt, and because using one licensed team for the notice and the FED summons keeps the story consistent from the first knock to the trial date.
            </p>
            <p>
              We are licensed and bonded under Title 12 O.S. § 158.1, carry GPS-verified attempt logs, and return court-ready affidavits across Tulsa County and all 77 Oklahoma counties. Whether you need the five-day demand served tonight or the FED summons before a fast calendar date downtown, the goal is the same: a record Tulsa County judges can read without squinting.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Need a Tulsa County Notice or FED Summons Served?</h3>
              <p className="text-blue-800 mb-4">
                Just Legal Solutions serves rent demands and FED summons across Tulsa County with flat-rate pricing, GPS-tracked attempts, and affidavits returned within 24 hours.
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

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Related Legal Guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/blog/serve-eviction-notice-oklahoma-tenant" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Statewide Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Serving Eviction Notices on Oklahoma Tenants</h3>
                <p className="text-sm text-gray-600">The full 41 O.S. § 111 ladder, five-day demands, and FED summons rules statewide.</p>
              </Link>
              <Link href="/blog/eviction-notice-service-oklahoma-landlord-guide" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Landlord Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Eviction Notice Service: Oklahoma Landlord Guide</h3>
                <p className="text-sm text-gray-600">Notice types, tape-and-mail requirements, and GPS affidavit proof for landlords.</p>
              </Link>
            </div>
          </section>

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

          <section className="mt-12">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Scale className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Need Tulsa County Notice Service?</h2>
                <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                  Just Legal Solutions provides licensed, bonded, and insured process serving across Tulsa County and all 77 Oklahoma counties.
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
              Serving a three-day notice in Tulsa County is a phrase that points landlords in the wrong direction unless they know which clock they mean. Oklahoma rent demands run five days under 41 O.S. § 131(B), delivered on the § 111(E) ladder before any forcible entry and detainer case is filed in the 19th Judicial District. The three-day deadline that actually appears in statute belongs to the FED summons under 12 O.S. § 1148.5 — a separate paper, a separate server, and a separate proof rule.
            </p>
            <p>
              Get the notice right — personal delivery first, family member over twelve next, posting plus certified or accountable mail last — and Tulsa County judges have a foundation they recognize. Get it wrong, and no amount of courthouse filing fixes the calendar. At Just Legal Solutions, we serve those notices and the summonses that follow, from downtown towers to county-line leases, with GPS-backed records built for Oklahoma courts.
            </p>
            <p className="text-gray-700 italic mt-8">
              Need a Tulsa County rent demand or FED summons served?{' '}
              <Link href="/contact" className="text-blue-600 hover:underline">Contact Just Legal Solutions</Link>{' '}
              for licensed, bonded support across all 77 Oklahoma counties. Call or text{' '}
              <a href="tel:5393676832" className="text-blue-600 hover:underline">(539) 367-6832</a>{' '}
              for same-business-day intake. Visit our{' '}
              <Link href="/pricing" className="text-blue-600 hover:underline">pricing page</Link>{' '}
              for current service rates.
            </p>
          </article>

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
