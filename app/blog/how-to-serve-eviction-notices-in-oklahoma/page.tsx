import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { ChevronRight, FileText, CheckCircle, AlertTriangle, Scale, Clock, Shield, XCircle, ListChecks } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'How to Serve Eviction Notices in Oklahoma: Rules & Deadlines | Just Legal Solutions',
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
  }
];

export default function EvictionNoticeGuide() {
  return (
    <>
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

      {/* Standalone LegalService Schema */}
      <Script id="legal-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Just Legal Solutions",
          "description": "Professional process serving in Oklahoma specializing in FED summons delivery and eviction service of process.",
          "areaServed": { "@type": "State", "name": "Oklahoma" },
          "telephone": "(539) 367-6832",
          "url": "https://justlegalsolutions.org/blog/how-to-serve-eviction-notices-in-oklahoma",
          "priceRange": "$30-$265",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Glenpool",
            "addressRegion": "OK",
            "postalCode": "74033",
            "addressCountry": "US"
          }
        })
      }} />

      <Script id="faq-schema-eviction" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          }))
        })
      }} />
      <Navbar />
      <LocalPromoBanner zips={[]} />

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium truncate">Eviction Notices Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              How to Serve Eviction Notices in Oklahoma: Notice Rules, Summons Service, and FED Deadlines
            </h1>
            <div className="flex items-center text-gray-600 space-x-4">
              <span className="font-medium text-blue-600">By Joseph Iannazzi</span>
              <span>•</span>
              <span>Updated: March 27, 2026</span>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">

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

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4 not-prose">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-gray-50 p-5 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-blue-900 text-white p-10 rounded-2xl text-center mt-12 not-prose shadow-lg">
              <Shield className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Need an FED Court Summons Served Fast?</h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Once you file your FED action, the clock starts ticking. Just Legal Solutions provides verified, statutorily compliant process serving for evictions across all 77 Oklahoma counties.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:5393676832" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg shadow-md transition-colors">
                  Call (539) 367-6832
                </a>
                <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors">
                  Request Service Online
                </Link>
              </div>
            </div>

          </article>

          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 mt-8">
            <p className="text-sm text-gray-700 font-medium mb-2">Disclaimer & Legal Information</p>
            <p className="text-sm text-gray-600">This article provides general legal information about eviction procedures in Oklahoma. It is not legal advice. The procedures for commercial tenancies or unique occupancy situations may differ substantially from the Residential Landlord and Tenant Act. Always consult a qualified Oklahoma attorney for your specific situation.</p>
            <p className="text-xs text-gray-500 mt-4">Reviewed against Oklahoma Statutes (Title 12 and Title 41) in March 2026. Last updated: March 27, 2026</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}