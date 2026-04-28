import type { Metadata } from "next";
import Link from "next/link";
import {
  Navbar,
  AuthorBox,
  Footer,
  LocalPromoBanner,
  UnifiedSchema,
} from "../../components";
import { processServing } from "../../lib/structured-data";

const faqs = [
  {
    question: "What types of documents can a process server deliver in Oklahoma?",
    answer:
      "In Oklahoma, licensed process servers can deliver a wide range of legal documents including summons and complaints, subpoenas, divorce petitions, child custody papers, eviction notices, small claims documents, restraining orders, foreclosure notices, and civil lawsuits. Under Title 12 O.S. \u00a7 2004, any document that requires formal service of process can be served by a certified process server.",
  },
  {
    question: "Can a process server serve criminal documents or warrants?",
    answer:
      "Generally, no. Criminal warrants, arrest warrants, and certain criminal court documents are served by law enforcement officers such as sheriff's deputies or police officers. Process servers in Oklahoma primarily handle civil matters. However, some subpoenas for criminal cases may be served by process servers depending on the court order.",
  },
  {
    question: "Can a process server serve papers on a Sunday in Oklahoma?",
    answer:
      "Yes, Oklahoma law does not prohibit service of process on Sundays or holidays for most civil documents. However, certain documents like eviction notices or foreclosure papers may have specific timing restrictions. At Just Legal Solutions, we offer 7-day service including weekends to ensure timely delivery.",
  },
  {
    question: "What documents require personal service versus substituted service?",
    answer:
      "Summons and complaints, divorce petitions, and restraining orders typically require personal service on the named defendant. Subpoenas may sometimes be served by substituted service at the recipient's place of business. Under Title 12 O.S. \u00a7 2004, if personal service is impossible after diligent attempts, the court may authorize alternative service methods such as nail-and-mail or publication.",
  },
  {
    question: "Do process servers handle out-of-state or foreign documents?",
    answer:
      "Yes, experienced process servers like Just Legal Solutions can serve out-of-state subpoenas and foreign documents in Oklahoma under the UIDDA (Uniform Interstate Depositions and Discovery Act). We coordinate with out-of-state attorneys to ensure proper domestication and service of foreign subpoenas in all 77 Oklahoma counties.",
  },
  {
    question: "What proof do I receive that my documents were served?",
    answer:
      "After successful service, you receive a notarized Affidavit of Service (Return of Service) that details the date, time, location, and manner of service. This legal document is filed with the court as proof that the defendant was properly served according to Oklahoma law.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "What Documents Can a Process Server Deliver in Oklahoma? Complete List",
  description: "Comprehensive guide to documents a process server can deliver in Oklahoma. Learn about summons, subpoenas, divorce papers, eviction notices & more under Title 1",
  author: {
    "@type": "Organization",
    name: "Just Legal Solutions",
    url: "https://justlegalsolutions.org",
    telephone: "(539) 367-6832",
  },
  publisher: {
    "@type": "Organization",
    name: "Just Legal Solutions",
    logo: {
      "@type": "ImageObject",
      url: "https://justlegalsolutions.org/images/jls-logo.webp",
    },
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://justlegalsolutions.org/blog/what-documents-can-process-server-deliver-oklahoma",
  },
  keywords:
    "what documents can a process server serve, types of legal documents served, process server document types oklahoma, process serving oklahoma, civil process service",
};

export const metadata: Metadata = {
  title: "What Documents Can a Process Server Deliver in Oklahoma?...",
  description:
    "Comprehensive guide to documents a process server can deliver in Oklahoma. Learn about summons, subpoenas, divorce papers, eviction notices & more under Title 12 O.S.",
  keywords:
    "what documents can a process server serve, types of legal documents served, process server document types oklahoma, process serving oklahoma, civil process service",
  openGraph: {
    title:
      "What Documents Can a Process Server Deliver in Oklahoma? Complete List",
    description:
      "Comprehensive guide to documents a process server can deliver in Oklahoma. Learn about summons, subpoenas, divorce papers, eviction notices & more under Title 12 O.S.",
    url: "https://justlegalsolutions.org/blog/what-documents-can-process-server-deliver-oklahoma",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <UnifiedSchema
        type="article"
        data={articleSchema}
        faqs={faqs}
      />

      {/* Hero */}
      <header className="bg-gradient-to-r from-[#1E2D78] to-[#4A3C7D] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-yellow-400">
            Oklahoma Legal Guide
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            What Documents Can a Process Server Deliver in Oklahoma? Complete
            List
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            A comprehensive guide to every type of document Oklahoma process
            servers can legally serve — from summons and subpoenas to divorce
            papers and eviction notices.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <a
              href="tel:5393676832"
              className="bg-yellow-500 text-[#1E2D78] font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
            >
              Call (539) 367-6832
            </a>
            <Link
              href="/pricing"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#1E2D78] transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <AuthorBox
          name="Just Legal Solutions"
          title="Oklahoma Licensed Process Server"
          date="January 15, 2025"
          readTime="9 min read"
        />

        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            If you\u2019re involved in a legal case in Oklahoma \u2014 whether
            you\u2019re filing a lawsuit, seeking a divorce, or handling an
            eviction \u2014 one question inevitably comes up: <strong>what
            documents can a process server actually deliver?</strong> The answer
            matters because improper service can delay your case, lead to
            dismissals, or even violate Oklahoma law. At{" "}
            <Link href="/" className="text-blue-600 underline">
              Just Legal Solutions
            </Link>
            , our team has served thousands of documents across all 77 Oklahoma
            counties. In this guide, we\u2019ll walk you through every type of
            document a licensed process server can deliver in Oklahoma, what we
            can\u2019t serve, and how special handling requirements apply under{" "}
            <strong>Title 12 O.S. \u00a7 2004</strong>.
          </p>

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            What Is Service of Process Under Oklahoma Law?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Service of process is the formal delivery of legal documents to a
            person or entity involved in a court proceeding. Oklahoma\u2019s
            legal system requires that defendants, witnesses, and other parties
            receive proper notice before a case can move forward. This
            constitutional requirement is rooted in the Due Process Clause, and
            Oklahoma codifies these procedures under{" "}
            <strong>Title 12 of the Oklahoma Statutes</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under <strong>Title 12 O.S. \u00a7 2004</strong>, process may be
            served by a sheriff, a licensed process server, or any person over
            18 who is not a party to the action. However, most attorneys and law
            firms prefer licensed process servers because we offer faster
            turnaround, better reporting, and specialized expertise in locating
            evasive defendants.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At{" "}
            <Link href="/process-serving" className="text-blue-600 underline">
              Just Legal Solutions
            </Link>
            , we\u2019re licensed and bonded in Oklahoma with{" "}
            <strong>over 50 years of combined experience</strong> serving
            everything from routine summons to complex multi-defendant cases.
          </p>

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            Complete List of Documents a Process Server Can Deliver in Oklahoma
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here\u2019s the most comprehensive list available of serveable
            documents in Oklahoma. If you\u2019re unsure whether your specific
            document qualifies, give us a call at{" "}
            <strong>(539) 367-6832</strong> and we\u2019ll confirm in minutes.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            1. Summons and Complaints (Civil Lawsuits)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most common document we serve, a <strong>summons and
            complaint</strong> initiates a civil lawsuit. The summons notifies
            the defendant that they\u2019ve been sued and must respond within a
            specific timeframe (typically 20 days in Oklahoma). The complaint
            outlines the plaintiff\u2019s allegations. These must generally be
            served personally on the defendant under{" "}
            <strong>Title 12 O.S. \u00a7 2004</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Just Legal Solutions, we handle summons and complaints for cases
            ranging from <strong>breach of contract</strong> and{" "}
            <strong>personal injury</strong> to <strong>debt
            collection</strong> and <strong>property disputes</strong>. Our
            standard service tier includes up to three attempts, ensuring we make
            every reasonable effort to effect personal service.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            2. Subpoenas (Trial and Discovery)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            A <strong>subpoena</strong> compels a witness to appear in court or
            produce documents. Oklahoma recognizes two types: subpoenas ad
            testificandum (to testify) and subpoenas duces tecum (to produce
            documents). Process servers frequently serve both types, often on
            tight deadlines. Under <strong>Title 12 O.S. \u00a7 2004(C)</strong>,
            subpoenas may be served anywhere within the state.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We regularly serve subpoenas for attorneys in Tulsa, Oklahoma City,
            and nationwide who need witnesses located and served quickly. Our{" "}
            <Link href="/pricing" className="text-blue-600 underline">
              Rush (our rush rate) and Same-Day (our same-day rate) service tiers
            </Link>{" "}
            are designed specifically for time-sensitive subpoenas.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            3. Divorce Petitions and Family Court Documents
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Divorce petitions</strong>, child custody motions, child
            support modifications, and protective orders are among the most
            sensitive documents we handle. These must almost always be served
            personally on the respondent. Oklahoma family courts are particularly
            strict about proper service because the outcomes affect parental
            rights and child welfare.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our process servers understand the emotional complexity of family law
            service. We handle these cases with professionalism and discretion,
            often coordinating service at neutral locations or workplaces to
            minimize conflict.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            4. Eviction Notices and Forcible Entry & Detainer Papers
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Oklahoma landlords must follow strict procedures to evict a tenant.
            This starts with serving a <strong>Notice to Quit</strong> or{" "}
            <strong>Forcible Entry and Detainer</strong> complaint. These
            documents must be served at least <strong>48 hours</strong> before the
            court date (or longer depending on the notice type). Process servers
            are commonly used because sheriff\u2019s offices may have slower
            turnaround times for eviction service.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We work with landlords and property management companies throughout
            Tulsa, Oklahoma City, and rural counties to ensure eviction papers
            are served quickly and correctly, keeping your case on track.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            5. Small Claims Court Documents
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Small claims cases in Oklahoma (disputes under $10,000) require the
            same formal service as larger civil cases. We regularly serve small
            claims summons and complaints for individuals and businesses who need
            cost-effective, reliable service. Our{" "}
            <Link href="/pricing" className="text-blue-600 underline">
              Single-Attempt (our base rate) and Standard (our standard rate) tiers
            </Link>{" "}
            are popular with small claims plaintiffs.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            6. Restraining Orders and Protective Orders
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Emergency Temporary Restraining Orders (TROs)</strong> and
            <strong>protective orders</strong> in domestic violence cases
            require immediate, often same-day service. These cases are urgent,
            and timing can affect victim safety. At Just Legal Solutions, we
            treat protective order service with the highest priority and offer{" "}
            <strong>same-day and after-hours service</strong> to ensure the
            respondent is served as quickly as possible.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            7. Foreclosure Notices
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Foreclosure proceedings require serving the homeowner with a{" "}
            <strong>Notice of Default</strong>, <strong>Lis Pendens</strong>, or
            foreclosure summons. These documents have strict timing and content
            requirements under Oklahoma foreclosure law. Improper service can
            delay foreclosure proceedings significantly or give the homeowner
            grounds to challenge the action.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            8. Motions, Orders to Show Cause, and Court Orders
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Any court order or motion that requires personal notice can be
            served by a process server. This includes{" "}
            <strong>Orders to Show Cause</strong>,{" "}
            <strong>contempt motions</strong>, and{" "}
            <strong>hearing notices</strong>. Attorneys frequently use process
            servers for these documents when the opposing party is difficult to
            locate or when sheriff service is too slow.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            9. Garnishments and Writs of Execution
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            After obtaining a judgment, creditors may need to serve{" "}
            <strong>garnishment orders</strong> on employers or banks, or{" "}
            <strong>writs of execution</strong> on sheriffs for property levy.
            These post-judgment documents require precise service and detailed
            affidavits. Our team at Just Legal Solutions has extensive
            experience with post-judgment enforcement service across Oklahoma.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            10. Out-of-State Subpoenas (UIDDA)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under the <strong>Uniform Interstate Depositions and Discovery
            Act (UIDDA)</strong>, out-of-state attorneys can domesticate and
            serve subpoenas in Oklahoma. The process involves issuing an
            Oklahoma subpoena that mirrors the out-of-state subpoena, then
            serving it on the Oklahoma witness. We handle the entire process,
            from domestication through service and affidavit filing.
          </p>

                <p className="mb-8 text-gray-700">At Just Legal Solutions, with 50+ years of combined experience, we are licensed and bonded under Oklahoma Title 12 O.S. 158.1 and have served thousands of documents across all 77 Oklahoma counties.</p>
      <LocalPromoBanner />

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            Documents That Process Servers Generally CANNOT Serve
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While process servers handle the vast majority of civil legal
            documents, there are important exceptions:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>
              <strong>Criminal warrants and arrest warrants</strong> — These are
              served exclusively by law enforcement.
            </li>
            <li>
              <strong>Tax warrants in certain jurisdictions</strong> — Some
              Oklahoma counties require sheriff service for tax warrants.
            </li>
            <li>
              <strong>Certain confidential court orders</strong> — Juvenile and
              sealed proceedings may have restricted service requirements.
            </li>
            <li>
              <strong>Documents requiring special court appointment</strong> —
              Some probate and guardianship papers require a court-appointed
              process server or special process server.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you\u2019re unsure whether your document can be served by a
            private process server, call us at{" "}
            <strong>(539) 367-6832</strong>. We\u2019ll review your document
            type and advise you at no cost.
          </p>

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            Special Handling Requirements for Sensitive Documents
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certain documents require additional care, documentation, or timing
            considerations:
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            Time-Sensitive Documents
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            TROs, temporary custody orders, and emergency motions often have
            service deadlines measured in hours, not days. Our{" "}
            <Link href="/pricing" className="text-blue-600 underline">
              Same-Day (our same-day rate) and After-Hours (our after-hours rate) service tiers
            </Link>{" "}
            are specifically designed for these situations. When you call, we
            dispatch immediately and keep you updated throughout the process.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            Corporate and Business Service
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Serving a business entity requires delivering documents to a
            <strong>registered agent</strong>, an officer of the company, or a
            person authorized to accept service. Under{" "}
            <strong>Title 12 O.S. \u00a7 2004(B)</strong>, service on a
            corporation\u2019s registered agent is valid personal service on the
            corporation. We verify registered agent information through the{" "}
            <strong>Oklahoma Secretary of State</strong> before attempting
            service to ensure compliance.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            Military Personnel
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Serving active-duty military members involves additional protections
            under the <strong>Servicemembers Civil Relief Act (SCRA)</strong>.
            Process servers must verify military status and ensure service
            doesn\u2019t violate SCRA protections. Our team has protocols in
            place to check military status and coordinate service accordingly.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            Minors and Incompetent Persons
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under Oklahoma law, service on a minor or person adjudicated
            incompetent must be made on their <strong>guardian</strong>,{" "}
            <strong>conservator</strong>, or{" "}
            <strong>guardian ad litem</strong>. Direct personal service on the
            minor or incompetent person is not sufficient. Our servers are
            trained to identify these situations and follow proper procedures.
          </p>

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            How the Service Process Works at Just Legal Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you hire us to serve your documents, here\u2019s what happens:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
            <li>
              <strong>Document review</strong> — We review your documents to
              confirm they\u2019re appropriate for private process service and
              identify any special requirements.
            </li>
            <li>
              <strong>Defendant research</strong> — We use skip tracing,
              database searches, and public records to locate the best address
              for service.
            </li>
            <li>
              <strong>Service attempts</strong> — We make the agreed-upon
              number of attempts at various times (morning, afternoon, evening,
              weekend) to maximize the chance of successful service.
            </li>
            <li>
              <strong>Real-time updates</strong> — You receive status updates
              after each attempt, including GPS coordinates, timestamps, and
              photographs (where permitted).
            </li>
            <li>
              <strong>Affidavit of service</strong> — Upon successful service,
              we prepare and notarize your Affidavit of Service for court
              filing.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            Why Choose Just Legal Solutions for Document Service in Oklahoma?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not all process servers are created equal. Here\u2019s why attorneys,
            law firms, and individuals across Oklahoma trust us with their most
            important documents:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>
              <strong>Licensed & Bonded</strong> — Fully compliant with all
              Oklahoma process serving requirements.
            </li>
            <li>
              <strong>50+ Years Combined Experience</strong> — Our team has
              seen virtually every service scenario and knows how to handle
              them.
            </li>
            <li>
              <strong>All 77 Oklahoma Counties</strong> — From Tulsa and
              Oklahoma City to the most rural counties, we\u2019ve got you
              covered.
            </li>
            <li>
              <strong>4.9-Star Rating</strong> — Consistently rated among the
              top process serving companies in Oklahoma.
            </li>
            <li>
              <strong>Transparent Pricing</strong> — No hidden fees. Know
              exactly what you\u2019ll pay before we start.
            </li>
            <li>
              <strong>Same-Day & After-Hours Available</strong> — When timing
              is critical, we\u2019re ready.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b pb-4">
                <h3 className="font-bold text-[#4A3C7D] mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            Need Documents Served in Oklahoma? Contact Us Today
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you need a single summons served in Tulsa or hundreds of
            subpoenas delivered across all 77 Oklahoma counties,{" "}
            <strong>Just Legal Solutions</strong> has the experience,
            technology, and dedication to get the job done right. We handle
            every type of serveable document with professionalism and ensure
            full compliance with <strong>Title 12 O.S.</strong> and all
            applicable court rules.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Don\u2019t let improper service delay your case or jeopardize your
            legal rights. Call us today at{" "}
            <a href="tel:5393676832" className="text-blue-600 font-bold">
              (539) 367-6832
            </a>{" "}
            or{" "}
            <Link href="/pricing" className="text-blue-600 underline">
              view our transparent pricing online
            </Link>
            . We\u2019re ready to serve your documents — quickly, legally, and
            professionally.
          </p>

          <div className="bg-gradient-to-r from-[#1E2D78] to-[#4A3C7D] rounded-xl p-8 text-white text-center mt-12">
            <h3 className="text-2xl font-bold mb-3">
              Ready to Get Your Documents Served?
            </h3>
            <p className="mb-6 text-gray-200">
              Call Now: Licensed & Bonded \u2022 All 77 Oklahoma Counties \u2022 Same-Day
              Available
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:5393676832"
                className="bg-yellow-500 text-[#1E2D78] font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition text-lg"
              >
                Call (539) 367-6832
              </a>
              <Link
                href="/pricing"
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#1E2D78] transition text-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mt-8">
            <strong>Related:</strong>{" "}
            <Link href="/service-areas" className="text-blue-600 underline">
              Our Service Areas
            </Link>{" "}
            |{" "}
            <Link href="/notary" className="text-blue-600 underline">
              Notary Services
            </Link>{" "}
            |{" "}
            <Link href="/process-serving" className="text-blue-600 underline">
              Process Serving Details
            </Link>
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
