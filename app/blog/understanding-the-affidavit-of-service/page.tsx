import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Shield, AlertTriangle, Scale, Clock, MapPin, FileText } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Affidavit of Service Oklahoma | Process Server Proof of Service',
  description: 'Learn what an Affidavit of Service is, why it\'s crucial for due process in Oklahoma courts, and what must be included under 12 O.S. § 2004. Professional process serving starting at $60.',
  keywords: 'Affidavit of Service Oklahoma, proof of service Oklahoma, return of service, Oklahoma process server requirements, Title 12 service laws, 12 OS 2004',
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Affidavit of Service Oklahoma | Proof of Service Guide',
    description: 'Complete guide to Oklahoma Affidavits of Service under 12 O.S. § 2004(G). What must be included, service methods, deadlines, and why details matter.',
    url: 'https://justlegalsolutions.org/blog/understanding-the-affidavit-of-service',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [{
      url: 'https://justlegalsolutions.org/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Oklahoma Affidavit of Service Guide - Just Legal Solutions',
    }],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/understanding-the-affidavit-of-service',
  },
  other: {
    'ai-content-type': 'article',
    'ai-summary': 'Comprehensive guide to the Affidavit of Service (Return of Service / Proof of Service) in Oklahoma under 12 O.S. § 2004(G) and 12 O.S. § 158.1(G). Covers what the document is, due process requirements, the exact statutory elements required (county of issuance, name of person served, date, place, and method), service methods including personal delivery and substitute residential service under § 2004(C)(1)(c)(1), the 180-day service deadline under § 2004(I), and why failure to file proof does not automatically invalidate proper service per § 2004(G)(1). Explains how Just Legal Solutions creates court-ready affidavits with GPS coordinates, photographic evidence, and detailed physical descriptions.',
    'ai-key-facts': 'Affidavit of Service is a sworn legal document proving service under Oklahoma law. Required elements per 12 O.S. § 2004(G): county of issuance, name of person served, date, place, and method of service. Private process servers prove service by affidavit per § 158.1(G). Substitute service allowed at dwelling with resident age 15+ per § 2004(C)(1)(c)(1). 180-day service deadline per § 2004(I). Failure to file proof does not invalidate otherwise proper service per § 2004(G)(1). Licensed private process servers have statewide authority under § 158.1.',
  },
};

const faqs = [
  {
    question: "What does Oklahoma law require in an Affidavit of Service?",
    answer: "Under 12 O.S. § 2004(G), the return of service must state the county of issuance, the name of the person served, and the date, place, and method of service. When service is made by a licensed private process server rather than a sheriff, the server must make an affidavit containing these elements."
  },
  {
    question: "What is an Affidavit of Service?",
    answer: "An Affidavit of Service, also called Proof of Service or Return of Service, is a sworn legal document signed by the process server under penalty of perjury. It details exactly who was served, what documents were delivered, when and where service occurred, and what method was used."
  },
  {
    question: "Why is an Affidavit of Service important?",
    answer: "It proves to the court that the defendant received proper notice of the legal action, fulfilling their constitutional right to due process. Without proper proof of service on file, the court cannot enter default judgments and may not move certain matters forward."
  },
  {
    question: "Can service be left with someone else at the house in Oklahoma?",
    answer: "Yes. Under 12 O.S. § 2004(C)(1)(c)(1), service may be completed by leaving the summons and petition at the person's dwelling or usual place of abode with a resident who is 15 years of age or older. This is known as substitute residential service."
  },
  {
    question: "How long do I have to serve a defendant in Oklahoma?",
    answer: "Under 12 O.S. § 2004(I), service must generally be made within 180 days after the petition is filed. If service is not completed within that period and good cause is not shown, the action may be dismissed without prejudice as to that defendant."
  },
  {
    question: "Does a missing return of service automatically make service invalid?",
    answer: "No. Under 12 O.S. § 2004(G)(1), failure to make proof of service does not affect the validity of the service itself. However, proper proof is still critical for moving the case forward, obtaining defaults, and avoiding later disputes about notice."
  },
  {
    question: "Can a private process server serve papers anywhere in Oklahoma?",
    answer: "Yes. A licensed private process server's authority is statewide under 12 O.S. § 158.1. They can serve legal documents in any of Oklahoma's 77 counties."
  },
  {
    question: "Is a private process server required to be licensed in Oklahoma?",
    answer: "Yes. Oklahoma law provides for licensed private process servers, and knowingly serving process without the required Oklahoma license can be a misdemeanor in covered circumstances."
  },
  {
    question: "How much does an affidavit of service cost in Oklahoma?",
    answer: "The affidavit is included with any process serving job. At Just Legal Solutions, standard service starts at $60. Refer to our pricing page for the most up-to-date information. The affidavit with GPS verification and photo documentation is included at no extra charge."
  },
  {
    question: "What happens if service is done incorrectly in Oklahoma?",
    answer: "Improper service can result in the court refusing to enter defaults, dismissal of the case, or any judgment obtained being overturned on appeal. This is why using a licensed process server with detailed documentation practices is critical for protecting your case."
  },
];

export default function AffidavitGuide() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Affidavit of Service in Oklahoma: Complete Guide to Proof of Service"
        pageDescription="Complete guide to Oklahoma Affidavits of Service under 12 O.S. § 2004(G). What must be included, service methods, deadlines, and why details matter."
        pageUrl="https://justlegalsolutions.org/blog/understanding-the-affidavit-of-service"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Process Serving', 'Affidavit of Service', 'Legal Document Delivery', 'Skip Tracing']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Affidavit of Service Oklahoma', url: '/blog/understanding-the-affidavit-of-service' },
        ]}
        articleDetails={{
          headline: "Affidavit of Service in Oklahoma: Complete Guide to Proof of Service",
          author: "Joseph Iannazzi",
          datePublished: "2025-06-01",
          dateModified: "2026-03-27",
          image: "https://justlegalsolutions.org/og-image.png"
        }}
        faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
        keywords={['Affidavit of Service', 'proof of service', 'return of service', 'Oklahoma process server', '12 OS 2004', 'Oklahoma service of process']}
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
            <span className="text-white font-medium">Affidavit of Service Oklahoma</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Affidavit of Service in Oklahoma: Complete Guide to Proof of Service
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
              <span className="text-white font-semibold text-sm">~14 min</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">

          {/* Article Content */}
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">

            <p className="text-sm text-gray-500 italic mb-6">
              This guide is written for self-represented litigants, attorneys, and legal staff in Oklahoma who need clear, practical information about Affidavits of Service under 12 O.S. § 2004 and § 158.1.
            </p>

            <p className="lead text-xl text-gray-700 mb-8">
              You&apos;ve hired a process server, they&apos;ve successfully delivered your legal documents, and now they hand you a document called an &quot;Affidavit of Service&quot; — sometimes called a <strong>Return of Service</strong> or <strong>Proof of Service</strong>. What is this document, and why is it arguably the most important piece of paper in your lawsuit?
            </p>

            {/* Section: What is an Affidavit */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What is an Affidavit of Service?</h2>
            <p>
              An Affidavit of Service is a sworn legal document signed by the process server under penalty of perjury. It serves as documentary evidence for the court, proving that the defendant or respondent was properly notified of the legal action against them, as required by Oklahoma law.
            </p>
            <p>
              In short, it tells the judge the <strong>Who, What, When, Where, and How</strong> of the document delivery.
            </p>

            {/* Section: Due Process */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why is it Critical? (Due Process)</h2>
            <p>
              Under the U.S. Constitution and Oklahoma law, a person cannot have their property, liberty, or rights taken away without &quot;due process of law.&quot; Notice of the lawsuit is the fundamental requirement of due process.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="m-0 text-amber-900 font-medium mb-2">
                    <strong>Important Clarification:</strong> Oklahoma law states that failure to make proof of service <strong>does not affect the validity of the service itself</strong> (12 O.S. § 2004(G)(1)).
                  </p>
                  <p className="m-0 text-amber-800 text-sm">
                    However, the court still requires proper proof of service before entering defaults or moving certain matters forward. A late or missing proof does not automatically invalidate otherwise proper service, but it will create procedural barriers to advancing your case.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Oklahoma Statutory Requirements */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Oklahoma Law Requires in a Return of Service</h2>
            <p>
              In Oklahoma, proof of service must be made to the court promptly. When service is completed by a licensed private process server rather than a sheriff or deputy sheriff, the process server must make an affidavit of service. Under <strong>12 O.S. § 2004(G)</strong>, the return must state:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>County of Issuance:</strong> The county where the court issued the documents being served.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Name of the Person Served:</strong> The full name of the individual who received the documents.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Date of Service:</strong> The exact date when service was completed.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Place of Service:</strong> The precise location where the documents were delivered.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Method of Service:</strong> Whether it was personal service (direct delivery to the named party) or substitute service (left with a qualifying resident).</span>
              </li>
            </ul>
            <p>
              For licensed private process servers, <strong>12 O.S. § 158.1(G)</strong> specifically provides that proof of service is shown by affidavit as provided in Section 2004(G).
            </p>

            {/* Section: Service Methods */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Oklahoma Service Methods at a Glance</h2>
            <p>
              Oklahoma law allows several service methods depending on the situation. Understanding these is important because the method used must be accurately reflected in the Affidavit of Service:
            </p>
            <div className="grid md:grid-cols-2 gap-4 not-prose my-8">
              <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <FileText className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-bold text-gray-900">Personal Service</h3>
                </div>
                <p className="text-sm text-gray-700">Direct delivery of documents to the named defendant. The most common and preferred method.</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="font-bold text-gray-900">Substitute Residential Service</h3>
                </div>
                <p className="text-sm text-gray-700">Leaving documents at the person&apos;s dwelling with a resident <strong>age 15 or older</strong>, per 12 O.S. § 2004(C)(1)(c)(1).</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <FileText className="w-5 h-5 text-yellow-600 mr-2" />
                  <h3 className="font-bold text-gray-900">Certified Mail Service</h3>
                </div>
                <p className="text-sm text-gray-700">Permitted in qualifying cases. The signed return receipt serves as proof of delivery.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <Scale className="w-5 h-5 text-purple-600 mr-2" />
                  <h3 className="font-bold text-gray-900">Service by Publication</h3>
                </div>
                <p className="text-sm text-gray-700">Published in a newspaper for 3 consecutive weeks. Last resort, requires court approval and proof of due diligence.</p>
              </div>
              <div className="bg-red-50 border border-red-200 p-5 rounded-lg md:col-span-2">
                <div className="flex items-center mb-3">
                  <Scale className="w-5 h-5 text-red-600 mr-2" />
                  <h3 className="font-bold text-gray-900">Court-Ordered Alternative Service</h3>
                </div>
                <p className="text-sm text-gray-700">When personal delivery or mail cannot be accomplished and due diligence is shown, the court may approve an alternative method. See 12 O.S. § 2004(C).</p>
              </div>
            </div>

            {/* Section: Why Details Matter */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why a Detailed Return of Service Matters</h2>
            <p>
              A return of service is not just paperwork. It is the court record showing when, where, and how notice was given. Because Oklahoma law specifically requires the <strong>date, place, and method</strong> of service, incomplete or vague affidavits can create unnecessary disputes over whether service was properly made.
            </p>
            <p>
              A poorly drafted affidavit can invite a legal challenge from the defendant&apos;s attorney, claiming they were never properly served. Stronger documentation — such as detailed field notes, recipient descriptions, GPS-stamped location records, and supporting photographs — may help defend against later factual challenges, even though those extra items are business-quality features rather than express statutory elements.
            </p>

            {/* Section: Documentation Standard */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Our Documentation Standard for Every Oklahoma Affidavit of Service</h2>
            <p>
              At Just Legal Solutions, we go well beyond the minimum statutory requirements. Here is what we include in every case file:
            </p>
            <ul>
              <li><strong>Exact date and time range</strong> for each attempt and each completed service.</li>
              <li><strong>GPS coordinates</strong> with accuracy typically within ±10 meters, preserved in the case file.</li>
              <li><strong>Contemporaneous notes</strong> about vehicles, lighting, weather, and statements made at the door when helpful.</li>
              <li><strong>Recipient description</strong> including approximate height, build, age range, hair color, and distinctive features.</li>
              <li><strong>Securely stored photos</strong> and file-hash identifiers so we can prove the images haven&apos;t been altered if ever challenged.</li>
            </ul>
            <p>
              While Oklahoma law does not require this level of detail, it can be invaluable when a defendant later claims they were never served or that the wrong person was served.
            </p>

            {/* Section: Service Deadline */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-red-900 mt-0 mb-2">Service Deadline in Oklahoma</h3>
                  <p className="m-0 text-red-800">
                    Under <strong>12 O.S. § 2004(I)</strong>, service generally must be made within <strong>180 days</strong> after the petition is filed. If service is not made within that period and good cause is not shown, the action may be dismissed without prejudice as to that defendant. Don&apos;t wait — contact a <Link href="/contact" className="text-red-700 font-bold hover:underline">licensed process server</Link> as soon as your case is filed.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Default Judgments */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Important Note About Filing Proof of Service</h2>
            <p>
              Oklahoma law states that failure to make proof of service does not affect the validity of the service itself (12 O.S. § 2004(G)(1)). However, proper proof of service is still critical for:
            </p>
            <ul>
              <li>Moving the case forward procedurally</li>
              <li>Obtaining default judgments when the defendant fails to respond</li>
              <li>Avoiding later disputes about whether proper notice was given</li>
            </ul>
            <p>
              Oklahoma courts can set aside default judgments where a defendant shows they were not properly served or did not receive legally adequate notice of the case, even if a return of service was filed. Accurate, detailed affidavits reduce the risk of later challenges to a judgment based on defective service or lack of notice.
            </p>
            <p>
              Additionally, no default judgment may be entered on service by publication until proof of publication service is filed and approved by the court (12 O.S. § 2004(C)(3)(d)).
            </p>

            {/* Section: Special Situations */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Special Service Situations in Oklahoma</h2>
            <p>
              Oklahoma law has additional rules for service by publication, service on minors or incompetent persons, corporations and LLCs, and incarcerated defendants. These situations often require strict statutory steps and, in some cases, court approval before a default judgment can be entered.
            </p>
            <p>
              If your case involves any of these scenarios, you should speak with an attorney about the correct method of service and proof requirements, as the rules differ meaningfully from standard personal service.
            </p>

            {/* FAQ Section */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions About Oklahoma Process Service</h2>
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

            {/* Section: When to Call a Lawyer vs. a Process Server */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">When to Call a Lawyer vs. a Process Server</h2>
            <p>
              Just Legal Solutions is a professional process serving company — we are <strong>not a law firm</strong> and we do not provide legal advice. We handle the logistics of serving your legal documents quickly, legally, and with thorough documentation. Attorneys handle legal strategy, motions practice, and court appearances.
            </p>
            <p>
              If you have questions about <em>what</em> to file or <em>which</em> service method is appropriate for your specific case type, consult with a qualified Oklahoma attorney. If you need documents <em>served</em>, that&apos;s where we come in.
            </p>

            {/* Statutes Cited */}
            <div className="bg-gray-100 border border-gray-300 p-6 rounded-lg mt-12 not-prose">
              <h3 className="font-bold text-gray-900 text-lg mb-3">Oklahoma Statutes Cited</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>12 O.S. § 2004</strong> — Procedure for service of summons and process in Oklahoma civil actions</li>
                <li><strong>12 O.S. § 2004(C)(1)(c)(1)</strong> — Personal and substitute residential service methods</li>
                <li><strong>12 O.S. § 2004(C)(3)(d)</strong> — Publication service default judgment requirements</li>
                <li><strong>12 O.S. § 2004(G)</strong> — Requirements for return/proof of service</li>
                <li><strong>12 O.S. § 2004(G)(1)</strong> — Failure to make proof does not affect validity of service</li>
                <li><strong>12 O.S. § 2004(I)</strong> — 180-day service deadline</li>
                <li><strong>12 O.S. § 158.1</strong> — Licensed private process servers; statewide authority</li>
                <li><strong>12 O.S. § 158.1(G)</strong> — Proof of service by affidavit for private process servers</li>
              </ul>
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
              <Link href="/oklahoma-process-server-faq-2026" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Oklahoma Process Server FAQ</span>
                <p className="text-sm text-gray-600 mt-1">Answers to the most common questions about process serving in Oklahoma.</p>
              </Link>
            </div>
          </section>
          {/* CTA */}
          </article>

          {/* Disclaimer */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <p className="text-sm text-gray-700">This article provides general legal information about Affidavits of Service in Oklahoma under the Oklahoma Pleading Code (Title 12). Procedures vary by case type, county practice, and court order — especially for publication service, alternative service, minors, incompetent persons, corporations, and incarcerated persons, all of which Section 2004 addresses separately. This is not legal advice. Consult an attorney for your specific situation.</p>
            <p className="text-xs text-gray-500 mt-2">Last updated: March 2026</p>
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
              <Link href="/oklahoma-process-server-faq-2026" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Oklahoma Process Server FAQ</span>
                <p className="text-sm text-gray-600 mt-1">Answers to the most common questions about process serving in Oklahoma.</p>
              </Link>
            </div>
          </section>
          {/* CTA Section */}
          <section className="mt-12 relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="relative p-8 md:p-12 text-center">
              <Shield className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Your GPS-Verified Affidavit of Service Today</h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">Ensure your documents are served correctly and your Affidavit of Service is unassailable. Professional process serving across all 77 Oklahoma counties, starting at $60.</p>
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