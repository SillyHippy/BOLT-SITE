import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: "Serving Legal Papers at an Oklahoma Construction Site",
  description: 'Serve legal papers at an Oklahoma construction site: site access, superintendent contact, GC and owner service, plus GPS-proofed affidavits in all 77 counties.',
  keywords: 'serve papers construction site Oklahoma, process server job site, serve contractor Oklahoma, construction company service of process, serve superintendent construction, Oklahoma process serving',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: "Serving Legal Papers at an Oklahoma Construction Site",
    description: 'Serve legal papers at an Oklahoma construction site: site access, superintendent contact, GC and owner service, plus GPS-proofed affidavits in all 77 counties.',
    url: 'https://justlegalsolutions.org/blog/serve-legal-papers-construction-site-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: "Serving Legal Papers at an Oklahoma Construction Site",
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/serve-legal-papers-construction-site-oklahoma',
  },
  other: {
    'article:published_time': '2026-12-08',
    'article:modified_time': '2026-12-08',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'Serving papers at an Oklahoma construction site means finding the right person — an owner, contractor, or superintendent — safely on an active job site, using the site trailer and gate crew to identify targets, while remembering that service on a company must go to its registered agent or an authorized officer under 12 O.S. § 2004.',
    'ai-key-facts':
      'Under 12 O.S. § 2004(C)(5), a corporation is served through its registered agent, president, or other authorized officer — the foreman cannot accept service for the company; Personal service on individuals at a job site follows the same rules as anywhere else under 12 O.S. § 2004(C)(1); OSHA safety rules apply to process servers entering active sites — hard hats, site escort, and staying out of work zones; The site trailer, gate guard, and superintendent are the fastest way to locate the right person on a construction site; Oklahoma construction defendants often have registered agents on file with the Secretary of State — the cleanest service route when a site visit fails',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Can papers be served at an Oklahoma construction site?',
    answer: "Yes — a construction site is just a workplace, and individuals can be served there under the same personal service rules that apply anywhere else in Oklahoma (12 O.S. § 2004(C)(1)). The practical challenges are access and safety: active sites have gates, escorts, hard-hat requirements, and supervisors who screen visitors. A server who arrives prepared — with credentials, a hard hat if required, and a plan for who they're there to see — gets the job done without becoming a safety liability.",
  },
  {
    question: 'Can a foreman accept papers for a construction company?',
    answer: "Usually not. Under 12 O.S. § 2004(C)(5), service on a corporation or LLC goes to its registered agent, president, or another authorized officer. A foreman or site superintendent is an employee, not an officer, and generally can't accept service for the company. If you serve the wrong person, the company can challenge service later. The reliable route is the registered agent on file with the Oklahoma Secretary of State — or the company's actual officers if you can locate them.",
  },
  {
    question: 'How do servers find the right person on a construction site?',
    answer: "The site trailer is the hub — that's where the superintendent, project manager, and paperwork live. The gate crew or a trusted employee usually knows who's on site that day and who isn't. Servers also use the job-site signage: Oklahoma construction sites post the contractor, owner, and architect, which tells you whose site it is before you ever walk in. Matching the defendant's name to the person on site is the whole game.",
  },
  {
    question: 'Are process servers required to wear safety gear on job sites?',
    answer: "If the site requires it, yes — and smart servers bring it. Active construction sites in Oklahoma are OSHA-regulated workplaces, and most general contractors enforce hard hats, high-visibility vests, and site escorts for visitors. A process server who refuses to follow site safety rules won't get access, and more importantly shouldn't. Professional servers keep a hard hat and vest in the vehicle and follow the site's rules to the letter.",
  },
  {
    question: 'What if the contractor is never at the site?',
    answer: "That's common — owners and upper management spend most of their time at offices and other projects. When the site visit doesn't produce the defendant, the next moves are the registered agent (for companies) or a residence serve (for individuals). A server will document the site attempts, then pivot to the routes that work: the agent on file, the home address, or skip tracing if both fail. The site visit is often step one, not the whole plan.",
  },
  {
    question: 'Can a construction worker on site be served personally?',
    answer: "Yes. If the defendant is an individual working on the site — a subcontractor's owner, a foreman being sued personally, a property owner on site — personal service works the same as anywhere else. The server approaches, identifies the person, and hands over the papers. Construction noise and machinery make communication harder, but the legal standard doesn't change: personal delivery to the defendant is service, wherever it happens.",
  },
  {
    question: 'What service documents do construction companies usually receive?',
    answer: "A wide range: mechanics lien foreclosure suits, breach of contract claims, personal injury suits from site accidents, and occasionally notices tied to lien rights. The mechanics lien process itself (under Oklahoma's lien statutes in Title 42) has its own notice requirements, but once a lawsuit is filed, service follows the standard rules under 12 O.S. § 2004. The registered agent is where most of these land — which is why keeping that agent current matters to every contractor.",
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Serving Legal Papers at an Oklahoma Construction Site"
        title="Serving Legal Papers at an Oklahoma Construction Site"
        pageDescription="Serve legal papers at an Oklahoma construction site: site access, superintendent contact, GC and owner service, plus GPS-proofed affidavits in all 77 counties."
        description="Serve legal papers at an Oklahoma construction site: site access, superintendent contact, GC and owner service, plus GPS-proofed affidavits in all 77 counties."
        pageUrl="https://justlegalsolutions.org/blog/serve-legal-papers-construction-site-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={117}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: "Serving Legal Papers at an Oklahoma Construction Site", item: 'https://justlegalsolutions.org/blog/serve-legal-papers-construction-site-oklahoma' }
        ]}
        articleDetails={{
          headline: "Serving Legal Papers at an Oklahoma Construction Site",
          datePublished: '2026-12-08',
          dateModified: '2026-12-08',
          author: 'Just Legal Solutions Team',
          
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'serve papers construction site',
          'contractor service of process',
          'registered agent Oklahoma',
          'mechanics lien lawsuit',
          'job site process serving',
          'Oklahoma construction law',
          'serve superintendent'
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
            Serving Legal Papers at an Oklahoma Construction Site
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Yes, you can serve papers at an Oklahoma construction site — individuals under{' '}
              <strong>12 O.S. § 2004(C)(1)</strong>, and companies through their <strong>registered agent</strong> or
              an authorized officer under <strong>§ 2004(C)(5)</strong>. The foreman usually can't accept service
              for the company. A server uses the <strong>site trailer</strong>, gate crew, and job-site signage to
              find the right person — safely.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2026-12-08').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~14 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            There are not many places louder, busier, or harder to walk into unannounced than an active construction site. Between the excavators, the concrete trucks, and the crew spread across three floors of rebar, a process server with a manila envelope can feel like the least expected person on the job. But construction sites are workplaces like any other, and the people who run them — owners, contractors, superintendents — get sued like anyone else. Here's how service at a job site actually works in Oklahoma, who can accept the papers, and how a professional handles the chaos without becoming a safety hazard.
          </p>

          <h2>Yes, You Can Serve Someone at a Job Site</h2>

          <p>
            Start with the law, because it's more straightforward than people expect. A construction site is a workplace, and personal service on an individual works there exactly as it does anywhere else in Oklahoma. Under 12 O.S. § 2004(C)(1), a server hands the papers to the defendant personally. If the defendant is an individual on the site — the subcontractor's owner, a foreman named in the suit, a property owner checking on progress — the server can approach and serve them on the spot.
          </p>
          <p>
            The legal rules don't change because there's a crane overhead. What changes is everything practical: access, safety, and identifying the right person in a crowd of hard hats.
          </p>

          <h2>Who Can Accept Service for a Construction Company</h2>

          <p>
            Here's the mistake that gets service tossed out: handing papers to the wrong person. Under 12 O.S. § 2004(C)(5), service on a corporation or LLC goes to its registered agent, its president, or another officer authorized to accept service. The registered agent is on file with the Oklahoma Secretary of State and is paid specifically to accept papers.
          </p>
          <p>
            The foreman running the crew is not an officer. The superintendent is not an officer. The project manager, no matter how senior, usually isn't either. Hand the lawsuit to any of them and the company can challenge service — and win. That's why the reliable route for company service is the registered agent, or the officers listed in public filings. A site visit for a company defendant is often reconnaissance: find out who's who, confirm the corporate identity, then serve the right party.
          </p>

          <h3>The Individual Defendant Is Different</h3>
          <p>
            If the defendant is a person, not a company, the site is just a workplace. Serve the individual directly. The trap is confusing the two: suing "ABC Construction LLC" and serving the general foreman. The entity needs the agent or an officer; the individual needs themselves. Getting this right is the difference between a case that moves and a case that stalls for months.
          </p>

          <h2>How a Server Actually Works a Job Site</h2>

          <p>
            The professional approach starts before the boots hit the gravel. Oklahoma construction sites are required to post signage identifying the contractor, owner, and often the architect — that sign tells the server whose site it is and who to ask for. The next stop is the site trailer, the nerve center where the superintendent and project manager keep their offices. The gate crew knows who's on site and who's not; a five-minute conversation with the right person avoids an hour of wandering.
          </p>
          <p>
            Safety comes first, always. Active sites are OSHA-regulated workplaces, and general contractors enforce rules: hard hats, high-visibility vests, and site escorts for visitors. Professional servers keep a hard hat and vest in the vehicle, check in with the site office, and stay out of active work zones. A server who argues with the safety rules doesn't get the serve — and shouldn't.
          </p>

          <h3>When the Defendant Isn't There</h3>
          <p>
            Owners and upper management are frequently off-site — at the home office, at another project, or on the road. When the site visit comes up empty, the server documents the attempt and pivots. For companies, that means the registered agent, whose address is public record and whose entire job is accepting papers. For individuals, it means the residence. Both routes are usually cleaner than chasing a contractor across three job sites.
          </p>

          <h2>What Kinds of Cases Show Up at Job Sites</h2>

          <p>
            Construction defendants get served for a lot of reasons. Mechanics lien foreclosures — a subcontractor suing to enforce a lien on the property for unpaid work. Breach of contract claims between owners and builders. Personal injury suits from accidents on the site. Sometimes the papers aren't even a lawsuit: notices tied to lien rights, subpoenas for site records, or court orders related to an ongoing dispute.
          </p>
          <p>
            The mechanics lien world deserves its own note: Oklahoma's lien laws in Title 42 have strict notice and filing deadlines, and the parties involved are often small subcontractors who operate from a truck and a phone number. Finding them can be genuinely hard — which is why the skip tracing that follows a failed site attempt matters so much in this industry.
          </p>

          <h2>Site Access: Gates, Trailers, and Visitor Rules</h2>

          <p>
            Getting onto an Oklahoma construction site is half the serve. Most commercial and residential projects use a controlled entrance — a gate, a check-in desk, or a temporary fence with a sign-in sheet. The gate crew's job is safety and accountability, not blocking lawful process. A professional server treats the gate like a front desk: state the purpose clearly, show identification and a hard hat or vest if the site requires PPE, and ask for the person named in the papers or for the superintendent who can point the way.
          </p>
          <p>
            Do not climb fences, walk through active excavation zones, or follow a crew into a restricted area without an escort. Courts expect diligence, not recklessness. If the gate turns you away because the defendant is off-site or the superintendent is unavailable, document the date, time, who you spoke with, and what you were told. That attempt record supports the next step — registered-agent service for a company, a residence attempt for an individual, or a later return when the target is scheduled to be on site.
          </p>
          <p>
            Job-site signage helps before you even park. Oklahoma sites commonly post the general contractor, owner, and architect. Those names tell you whether you are looking for an individual defendant walking the slab or a corporate defendant whose cleanest path is the registered agent on file with the Secretary of State. Matching the caption to the signboard keeps you from serving the wrong entity on a multi-contractor job.
          </p>

          <h2>The Superintendent as Your On-Site Guide</h2>

          <p>
            On most Oklahoma jobs, the superintendent (or site supervisor) is the person who knows the daily roster. They know which subcontractors are on the pad, whether the owner is expected for a walkthrough, and whether the general contractor's project manager is in the trailer or at another site. A polite check-in at the trailer — hard hat on, papers ready, no drama — is the fastest way to locate an individual defendant without wandering into a work zone.
          </p>
          <p>
            Important distinction: the superintendent can help you find someone, but that does not mean the superintendent can accept service for a company. Under 12 O.S. § 2004(C)(5), corporate and LLC service still goes to the registered agent, president, or other authorized officer. Treat the superintendent as a locator and safety escort, not as a substitute for proper corporate service — unless that superintendent is personally named as an individual defendant in the caption.
          </p>
          <p>
            Timing matters. Superintendents are easiest to catch early morning at the trailer meeting, mid-day during a lunch break, or late afternoon when crews wrap. Lunch rush and pour days are poor windows. Ask when the target usually arrives, leave a professional callback number if appropriate, and schedule a return instead of camping in a hard-hat area. Documented, timed attempts look better on an affidavit than a vague claim that "the site was busy."
          </p>

          <h2>Serving the General Contractor Versus the Owner</h2>

          <p>
            Construction lawsuits often name both the general contractor and the property owner — and those are different service problems. The GC is usually a corporation or LLC. Serve that entity through its registered agent or an authorized officer under 12 O.S. § 2004(C)(5). A site visit may confirm which GC is running the job and whether officers ever appear on site, but the agent address remains the reliable delivery point when the trailer is empty of decision-makers.
          </p>
          <p>
            The owner may be an individual, a developer LLC, or both. An individual owner who walks the site can be served personally under 12 O.S. § 2004(C)(1) the same way as any other defendant. An owner entity still needs proper entity service. Lien foreclosure and construction-defect captions frequently list multiple parties — lenders, subs asserting liens, and owners — so servers must match each named defendant to the correct method rather than handing one set of papers to whoever answers the trailer door.
          </p>
          <p>
            When both GC and owner need service, plan parallel tracks: site attempts for individuals who actually appear on the job, and registered-agent or office service for entities. That approach protects the 180-day service window under 12 O.S. § 2004(I) and keeps the case from stalling because one party was easy to find while another was never properly served. Title 42 lien deadlines (pre-lien notice, recording, and the one-year enforcement clock) make clean, timely service especially important in construction disputes.
          </p>

          <h2>Why Registered Agents Matter to Every Contractor</h2>

          <p>
            There's a lesson in all this for the construction companies themselves: keep your registered agent current. The agent's address is public record, and that's where most lawsuits land. A contractor whose agent lapsed or changed without updating the Secretary of State filing creates a service nightmare — a default judgment risk for the company and a headache for the server trying to do it right.
          </p>
          <p>
            From the server's side, the registered agent is the most reliable address in Oklahoma. One lookup, one address, one clean serve. Attorneys who check the agent before dispatching a server to a job site save time and avoid the "wrong person served" problem entirely.
          </p>

          <h2>The Site Visit Is Step One, Not the Whole Plan</h2>

          <p>
            Here's the honest summary for anyone hiring a server for a construction case: the site visit is often step one, not the finish line. A good server will go to the site, identify who's there, follow the safety rules, and serve the individual if they can. But the company itself gets served through the agent or an officer, and if the individual defendant isn't on site, the residence or a skip trace comes next. Plan for the whole sequence, and service becomes routine instead of a saga.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need Service on a Construction Defendant?</h3>
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
            Construction sites look chaotic, but service on them follows clean rules: serve individuals directly, serve companies through the registered agent or an officer, and never hand the papers to a foreman hoping it counts. The site visit is worth making — it's where the people are — but the agent is where the reliable serve happens. Know the difference, and the job site stops being a problem.
          </p>
          <p>
            At Just Legal Solutions, we've served summonses and legal documents across all 77 Oklahoma counties with the professionalism, speed, and documentation standards that courts expect. Whether you're on the serving side or the receiving side of a case, we're ready to help.
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
