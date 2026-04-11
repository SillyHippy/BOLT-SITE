import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, FileText, CheckCircle, AlertTriangle, Scale, Clock, Shield, XCircle, ListChecks } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'How to Serve Eviction Notices in Oklahoma: Rules & Deadlines',
  description: 'Complete guide to Oklahoma eviction service rules. Learn the critical difference between Title 41 initial notices (age 12+) and Title 12 FED summonses (age 15+).',
  keywords: 'Oklahoma eviction notice, how to serve eviction Oklahoma, 5 day notice to quit Oklahoma, FED summons Oklahoma, Title 41 notice, Title 12 summons service',
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'How to Serve Eviction Notices in Oklahoma: Rules & Deadlines',
    description: 'Learn the critical difference between Title 41 initial notices (age 12+) and Title 12 FED summonses (age 15+) in Oklahoma evictions.',
    url: 'https://justlegalsolutions.org/blog/how-to-serve-eviction-notices-in-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [{
      url: 'https://justlegalsolutions.org/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Eviction Notice Service Rules Oklahoma - Just Legal Solutions',
    }],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/how-to-serve-eviction-notices-in-oklahoma',
  },
  other: {
    'ai-content-type': 'article',
    'ai-summary': 'Comprehensive guide explaining the two distinct stages of Oklahoma eviction service. The initial notice to quit (Title 41) allows substitute service on a family member over 12, or posting plus mailing. The later Forcible Entry and Detainer (FED) summons (Title 12) requires personal service, or substitute service on a resident over 15. Includes statutory timelines (5-day, 15-day, 30-day notices), common landlord mistakes, and FAQs backed by 41 O.S. and 12 O.S. citations.',
    'ai-key-facts': 'Initial eviction notice (41 O.S. § 111E) can be served on family members 12+. FED court summons (12 O.S. § 1148.5) requires residents 15+. 5-day notice for non-payment (41 O.S. § 131B). 10/15-day notice for lease breaches (41 O.S. § 132B). 30-day notice for month-to-month. FED summons must be served 3 days before trial. Posting/mailing summons only yields possession judgments, not rent money judgments unless tenant appears (12 O.S. § 1148.5A).',
  },
};

const faqs = [
  {
    question: "Is the age requirement 12 or 15 in Oklahoma evictions?",
    answer: "Both apply, but at different stages. The initial eviction notice under 41 O.S. § 111(E) may be left with a family member over age 12 residing with the tenant. The later FED court summons under 12 O.S. § 1148.5 may be left with a person over age 15 residing on the premises. Mixing these up is a common error."
  },
  {
    question: "Can a landlord serve an eviction notice themselves in Oklahoma?",
    answer: "Yes, the landlord may serve the initial written notice to quit if it is served in compliance with 41 O.S. § 111(E). The court-issued FED summons, however, must be served through legally authorized process under Title 12, which requires the sheriff or a licensed private process server."
  },
  {
    question: "Does posting a notice on the door alone count in Oklahoma?",
    answer: "Not for the initial notice under 41 O.S. § 111(E); if posted, a copy must also be mailed by certified or accountable mail. For court summons service, posting and mailing is governed separately by 12 O.S. § 1148.5A and has additional timing rules and severe limits on money judgments."
  },
  {
    question: "How many days before court must the eviction summons be served?",
    answer: "At least 3 days before trial under 12 O.S. § 1148.5, when employing personal or substitute residential service. Different timing (5 days) applies for posting-and-mailing service under 12 O.S. § 1148.5A."
  },
  {
    question: "Can I get a money judgment if the summons was only posted and mailed?",
    answer: "Generally no, not unless the tenant actually appears in court. Otherwise, the judgment under 12 O.S. § 1148.5A is typically limited to possession of the premises, and a separate lawsuit may be required to pursue back rent or damages."
  },
  {
    question: "What proof should a landlord keep after serving an eviction notice?",
    answer: "Keep the signed notice, detailed service notes indicating time/date/recipient, photos of any posted notice on the door, certified mailing receipts with tracking records, the lease, the rent ledger, and any communications relevant to the default."
  },
  {
    question: "What happens if the eviction notice is served incorrectly?",
    answer: "Defective notice or defective summons service can delay the case, cause continuances, or result in outright dismissal, forcing the landlord to start over with a new notice and a newly paid court filing fee."
  },
  {
    question: "Can Oklahoma eviction notices be served by certified mail only?",
    answer: "For the initial notice, certified mail alone is not the primary mechanism described in 41 O.S. § 111(E); posting triggers the mailing requirement, and personal service is preferred. The FED summons has separate certified-mail provisions under Title 12 when specific statutory conditions are met and due diligence is shown."
  },
  {
    question: "What is the difference between the initial eviction notice and the FED summons?",
    answer: "The initial eviction notice is the landlord's pre-lawsuit notice required before filing in many cases. The FED summons is the court-issued document served after the case is filed. They are governed by different statutes, different service rules, and different age thresholds for substitute service."
  },
  {
    question: "Can an Oklahoma eviction be dismissed for defective service?",
    answer: "Yes. If the landlord uses the wrong notice, serves it the wrong way, files too early, or fails to comply with summons service requirements after filing, the tenant may challenge the case and the court may refuse to grant relief until proper notice and service requirements are satisfied."
  }
];

export default function EvictionNoticeGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Serve Eviction Notices in Oklahoma",
        "description": "Step-by-step guide to serving eviction notices and FED summonses in Oklahoma under Title 41 and Title 12.",
        "totalTime": "PT72H",
        "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "60" },
        "step": [
    {"@type":"HowToStep","name":"Determine the Correct Notice Type","text":"For nonpayment, serve a 5-Day Notice to Quit under Title 41. For lease violations, a 15-Day Notice. For FED lawsuits, use the court-issued FED Summons."},
    {"@type":"HowToStep","name":"Prepare the Notice with Required Information","text":"Include the tenant's name, property address, reason for eviction, deadline to cure or vacate, and landlord signature."},
    {"@type":"HowToStep","name":"Hire a Process Server for FED Summons","text":"Title 41 notices (ages 12+) can be served by the landlord. FED Summonses (Title 12) require a licensed process server (age 15+ for substituted service). Call (539) 367-6832."},
    {"@type":"HowToStep","name":"Serve the Notice","text":"Attempt personal service first. If unavailable, leave with a resident 12+ (Title 41) or 15+ (FED), then mail a copy the same day."},
    {"@type":"HowToStep","name":"Document and Return Proof of Service","text":"Your process server provides an affidavit of service. File it with the district court clerk to proceed with your FED case."}
        ]
      }) }} />
      <UnifiedSchema
        pageType="article"
        pageTitle="How to Serve Eviction Notices in Oklahoma: Notice Rules, Summons Service, and FED Deadlines"
        pageDescription="Learn the critical difference between Title 41 initial notices (age 12+) and Title 12 FED summonses (age 15+) in Oklahoma evictions."
        pageUrl="https://justlegalsolutions.org/blog/how-to-serve-eviction-notices-in-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Process Serving', 'Eviction Notice Service', 'FED Summons Service', 'Same-Day Service']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Serving Eviction Notices OK', url: '/blog/how-to-serve-eviction-notices-in-oklahoma' },
        ]}
        articleDetails={{
          headline: "How to Serve Eviction Notices in Oklahoma: Notice Rules, Summons Service, and FED Deadlines",
          author: "Joseph Iannazzi",
          datePublished: "2025-05-15",
          dateModified: "2026-03-27",
          image: "https://justlegalsolutions.org/og-image.png"
        }}
        faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
        keywords={['Oklahoma eviction notice', 'how to serve eviction Oklahoma', '5 day notice to quit', 'FED summons', 'Title 41 notice', '12 OS 1148.5']}
      />

      <Navbar />
      <LocalPromoBanner zips={[]} />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-blue-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Eviction Notices Guide</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            How to Serve Eviction Notices in Oklahoma: Notice Rules, Summons Service, and FED Deadlines
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">By</span>
              <span className="text-white font-semibold text-sm">Joseph Iannazzi</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">Updated:</span>
              <span className="text-white font-semibold text-sm">March 27, 2026</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">Reading Time:</span>
              <span className="text-white font-semibold text-sm">~12 min</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">

          {/* Article Content */}
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mt-0 mb-2">The Short Answer: Age 12 or Age 15?</h3>
              <p className="m-0 text-blue-800">
                No, Oklahoma does not use the same age rule for both stages of an eviction. For the landlord&apos;s initial written notice, the law allows service on a family member over <strong>age 12</strong> residing with the tenant under 41 O.S. § 111(E). For the later FED court summons, Oklahoma uses an <strong>over-15</strong> standard under 12 O.S. § 1148.5. Mixing those rules up is a common reason eviction cases get challenged or delayed.
              </p>
            </div>

            <p className="text-sm text-gray-500 italic mb-8">
              This guide is written for Oklahoma landlords, property managers, real estate investors, and legal staff who need a practical explanation of how eviction notices and FED summonses must be served under Oklahoma law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Oklahoma Has Two Different Service Rules in Eviction Cases</h2>
            <p>
              Oklahoma eviction cases involve two separate service stages, and each has its own rule. The landlord&apos;s initial notice to quit or notice to comply is governed by the Oklahoma Residential Landlord and Tenant Act in Title 41, while the court-issued Forcible Entry and Detainer (FED) summons is governed by Title 12.
            </p>

            <p>
              For the initial written notice, <strong>41 O.S. § 111(E)</strong> allows service on the tenant personally. If the tenant cannot be located, the notice may be delivered to a family member over the age of twelve (12) residing with the tenant. If service cannot be made on the tenant or that family member, the notice may be posted conspicuously on the dwelling unit, and a copy must also be mailed by certified mail or accountable mail.
            </p>

            <p>
              For the FED summons after the case is filed, Oklahoma uses a different standard. Under <strong>12 O.S. § 1148.5</strong>, the summons may be personally served on the tenant or left with a person over the age of fifteen (15) residing on the premises. If personal or substitute service cannot be completed with reasonable diligence, Oklahoma law allows certified-mail service or posting and mailing under 12 O.S. § 1148.5A.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Step 1: Serve the Correct Oklahoma Eviction Notice</h2>
            <p>
              Before filing a Forcible Entry and Detainer (FED) case, the landlord must first serve the tenant with the correct written notice required by Oklahoma law. The notice period depends on why the tenancy is being terminated.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>5-Day Notice for Nonpayment of Rent:</strong> Under 41 O.S. § 131(B), if rent is unpaid when due and remains unpaid for five (5) days after written demand, the landlord may terminate the rental agreement. The written demand for rent also serves as a demand for possession.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>15-Day Notice for Lease Violations:</strong> Under 41 O.S. § 132(B), for a material noncompliance other than nonpayment, the landlord must give written notice specifying the breach. The notice must state that the rental agreement will terminate in fifteen (15) days unless the breach is remedied within ten (10) days.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>30-Day Notice for Month-to-Month Tenancy:</strong> Under 41 O.S. § 111, a month-to-month tenancy generally requires at least thirty (30) days&apos; written notice to terminate without cause.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How the Initial Eviction Notice Must Be Served in Oklahoma</h2>
            <p>
              For the landlord&apos;s initial written notice, Oklahoma law requires personal service unless another method is necessary. If the tenant cannot be located, the notice may be delivered to a family member over age twelve (12) residing with the tenant. If neither the tenant nor a qualifying family member can be served, the notice may be posted in a conspicuous place on the dwelling unit, but if it is posted, a copy must also be mailed to the tenant by certified mail or by accountable mail through the U.S. Postal Service. See 41 O.S. § 111(E).
            </p>

            <p>
              Because service of the initial notice is often challenged in court, landlords should keep a copy of the notice, note the exact date and time of service, preserve mailing receipts, and photograph any posted notice before filing an eviction case. (If you need a professional to serve your final hearing documents, learn more about <Link href="/blog/understanding-the-affidavit-of-service" className="text-blue-600 hover:underline">what an Affidavit of Service proves in court</Link>.)
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Step 2: Serve the FED Summons and Petition</h2>
            <p>
              If the tenant does not comply before the notice period expires, the landlord may file a Forcible Entry and Detainer (FED) action. After filing, the court issues a summons that must be served in compliance with Title 12, not Title 41.
            </p>

            <p>
              Under 12 O.S. § 1148.5, the summons must be served at least three (3) days before trial. It may be personally served on the tenant or left with a person over the age of fifteen (15) residing on the premises. If service cannot be completed with reasonable diligence, Oklahoma law permits alternative methods including certified mail or, in qualifying cases, posting and mailing under 12 O.S. § 1148.5A.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                <p className="m-0 text-amber-900 font-medium">
                  <strong>Warning on Money Judgments:</strong> If the summons is served only by posting and mailing, the court may generally enter judgment for possession of the premises, but <strong>not a money judgment for rent or damages</strong> unless the tenant appears. The landlord may still bring a separate action later for monetary relief. See 12 O.S. § 1148.5A.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Oklahoma Eviction Timeline at a Glance</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Step 1:</strong> Serve the correct written notice based on nonpayment, lease violation, or termination of tenancy.</span></li>
              <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Step 2:</strong> Wait until the full statutory notice period has expired.</span></li>
              <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Step 3:</strong> File the FED case in the proper Oklahoma court.</span></li>
              <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Step 4:</strong> Have the court-issued summons served under Title 12.</span></li>
              <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Step 5:</strong> Make sure the summons is served at least three days before trial, unless a different statutory timing rule applies to the service method used.</span></li>
              <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" /><span><strong>Step 6:</strong> Bring your lease, rent ledger, notices, proof of service, photos, mailing records, and any other supporting evidence to court.</span></li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Proof and Documentation Matter</h2>
            <p>
              Even when a notice or summons is served correctly, poor documentation can still create avoidable problems in court. Landlords should keep a copy of the notice, note the exact date and time of service, preserve mailing receipts and tracking, photograph any posted notice, and maintain a complete rent ledger and lease file.
            </p>
            <p>
              Strong documentation can help show that the landlord used the correct notice, waited the proper amount of time, and followed the correct Oklahoma service method for that stage of the case. In practice, this can reduce continuances, defenses based on defective service, and disputes over whether the tenant received legally sufficient notice.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
              {/* Mistakes List */}
              <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-red-900 flex items-center mb-4">
                  <XCircle className="w-6 h-6 text-red-600 mr-2" />
                  Common Eviction Service Mistakes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span className="text-gray-800 text-sm">Using the wrong notice period for the reason for eviction.</span></li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span className="text-gray-800 text-sm">Confusing the service rules for the initial notice with the service rules for the court summons.</span></li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span className="text-gray-800 text-sm">Posting the initial notice on the property but failing to mail a copy as required by 41 O.S. § 111(E).</span></li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span className="text-gray-800 text-sm">Assuming that service on a person over 15 applies to the initial notice; that age threshold applies to the FED summons, not the Title 41 notice.</span></li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span className="text-gray-800 text-sm">Seeking a money judgment after relying only on posting and mailing service under 12 O.S. § 1148.5A.</span></li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span> <span className="text-gray-800 text-sm">Failing to keep mailing receipts, photos, and written proof of service attempts.</span></li>
                </ul>
              </div>

              {/* Checklist */}
              <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-900 flex items-center mb-4">
                  <ListChecks className="w-6 h-6 text-green-600 mr-2" />
                  Landlord Eviction Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> <span className="text-gray-800 text-sm">Use the correct written notice for nonpayment, lease breach, or tenancy termination.</span></li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> <span className="text-gray-800 text-sm">Serve the notice using the method allowed by 41 O.S. § 111(E).</span></li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> <span className="text-gray-800 text-sm">Wait until the full statutory notice period expires.</span></li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> <span className="text-gray-800 text-sm">Keep the lease, rent ledger, notice copy, service notes, and mailing proof.</span></li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> <span className="text-gray-800 text-sm">File the FED action only after the notice period has fully run.</span></li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> <span className="text-gray-800 text-sm">Use proper <Link href="/blog/understanding-the-affidavit-of-service" className="text-green-700 hover:underline">Title 12 service and return of service protocols</Link> for the summons and petition.</span></li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Not Every Occupant Is a Tenant</h2>
            <p>
              Some occupants may not have a rental agreement or may be unauthorized occupants. In those situations, the correct legal path may differ from a standard landlord-tenant eviction, and property owners should consult an Oklahoma attorney before relying on a standard notice form or FED filing strategy.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl my-10 border border-blue-100">
              <h2 className="text-xl font-bold text-blue-900 mt-0 mb-4">Who This Oklahoma Guide Is For</h2>
              <p className="text-blue-800 m-0">
                This guide is written for Oklahoma landlords, property managers, investors, and legal support staff who want a practical explanation of how eviction notices and FED summonses are served under Oklahoma law. It is designed to explain the basic process in plain English while highlighting the service rules that most often create delay or dismissal.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Oklahoma Statutes Commonly Referenced</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-3 rounded border text-center font-mono text-sm shadow-sm">41 O.S. § 111(E)</div>
              <div className="bg-gray-50 p-3 rounded border text-center font-mono text-sm shadow-sm">41 O.S. § 131(B)</div>
              <div className="bg-gray-50 p-3 rounded border text-center font-mono text-sm shadow-sm">41 O.S. § 132(B)</div>
              <div className="bg-gray-50 p-3 rounded border text-center font-mono text-sm shadow-sm">12 O.S. § 1148.4</div>
              <div className="bg-gray-50 p-3 rounded border text-center font-mono text-sm shadow-sm">12 O.S. § 1148.5</div>
              <div className="bg-gray-50 p-3 rounded border text-center font-mono text-sm shadow-sm">12 O.S. § 1148.5A</div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-10 shadow-sm">
              <h2 className="text-xl font-bold text-green-900 mt-0 mb-3">Plain-English Takeaway</h2>
              <p className="m-0 text-green-800 leading-relaxed">
                If you only remember one thing, remember this: Oklahoma uses one service rule for the landlord&apos;s initial eviction notice and a different service rule for the court-issued FED summons. The initial notice can involve a family member over age 12 under Title 41, while the later summons can involve a resident over age 15 under Title 12. That distinction matters, and getting it right can help avoid delays, refiling, and service-based defenses.
              </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions About Oklahoma Eviction Service</h2>
            <div className="space-y-4 not-prose">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <summary className="flex items-center justify-between cursor-pointer p-5 text-lg font-semibold text-gray-900 [&::-webkit-details-marker]:hidden list-none">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-blue-500 transition-transform duration-300 group-open:rotate-90 flex-shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 pt-3 text-gray-700 leading-relaxed border-t border-gray-200">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

          </article>
          <div className="mt-12">
            <AuthorBox />
          </div>

          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 mt-8">
            <p className="text-sm text-gray-700 font-medium mb-2">Disclaimer & Legal Information</p>
            <p className="text-sm text-gray-600">This article provides general legal information about eviction procedures in Oklahoma. It is not legal advice. The procedures for commercial tenancies or unique occupancy situations may differ substantially from the Residential Landlord and Tenant Act. Always consult a qualified Oklahoma attorney for your specific situation.</p>
            <p className="text-xs text-gray-500 mt-4">Reviewed against Oklahoma Statutes (Title 12 and Title 41) in March 2026. Last updated: March 27, 2026</p>
          </div>

          
          {/* Related Guides */}
          <section className="mt-12 mb-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides &amp; Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/tulsa-process-server" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Tulsa Process Server — Same-Day from $60</span>
                <p className="text-sm text-gray-600 mt-1">Licensed Tulsa process server for all document types. GPS-tracked, court-ready affidavits.</p>
              </Link>
              <Link href="/process-serving" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Professional Process Serving Services</span>
                <p className="text-sm text-gray-600 mt-1">Complete overview of our service offerings and coverage areas across Oklahoma.</p>
              </Link>
              <Link href="/pricing" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Process Server Pricing in Oklahoma</span>
                <p className="text-sm text-gray-600 mt-1">Transparent flat-rate pricing starting at $60 — no mileage fees, no hidden charges.</p>
              </Link>
              <Link href="/oklahoma-process-server-faq" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Oklahoma Process Server FAQ</span>
                <p className="text-sm text-gray-600 mt-1">Answers to the most common questions about process serving in Oklahoma.</p>
              </Link>
              <Link href="/blog/how-to-serve-small-claims-oklahoma" className="group block p-5 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 hover:border-green-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] transition-all duration-300">
                <span className="font-semibold text-green-900 group-hover:text-green-700 transition-colors">How to Serve Small Claims Papers in Oklahoma</span>
                <p className="text-sm text-gray-600 mt-1">After eviction, recover unpaid rent in small claims court. Learn service rules and deadlines.</p>
              </Link>
              <Link href="/blog/oklahoma-landlord-tenant-eviction-timelines" className="group block p-5 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 hover:border-green-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] transition-all duration-300">
                <span className="font-semibold text-green-900 group-hover:text-green-700 transition-colors">Oklahoma Landlord-Tenant Eviction Timelines</span>
                <p className="text-sm text-gray-600 mt-1">Understand the full eviction process timeline from notice to FED judgment.</p>
              </Link>
            </div>
          </section>
          {/* CTA Section */}
          <section className="mt-12 relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="relative p-8 md:p-12 text-center">
              <Shield className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need an FED Court Summons Served Fast?</h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">Once you file your FED action, the clock starts ticking. Just Legal Solutions provides verified, statutorily compliant process serving for evictions across all 77 Oklahoma counties.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Get a Free Quote
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <a href="tel:5393676832" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Call (539) 367-6832
                </a>
              </div>
            </div>
          </section>

          {/* Back to Blog */}
          <div className="mt-10 text-center">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}