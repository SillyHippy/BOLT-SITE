import { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  Navbar,
  AuthorBox,
  Footer,
  LocalPromoBanner,
  UnifiedSchema,
} from "../components";

export const metadata: Metadata = {
  title:
    "What's the Difference Between a Notary and a Lawyer? | Just Legal Solutions",
  description:
    "Learn the key differences between notaries and lawyers, what notaries can and cannot do, when you need an attorney, and rules against the unauthorized practice of law in Oklahoma.",
  keywords:
    "notary vs lawyer, difference between attorney and notary, notary legal advice, unauthorized practice of law Oklahoma, what can notaries do",
  alternates: {
    canonical:
      "https://justlegalsolutions.org/blog/difference-between-notary-and-lawyer",
  },
};

const faqs = [
  {
    question: "What is the main difference between a notary and a lawyer?",
    answer:
      "The fundamental difference is that a notary is a public official who verifies identity, witnesses signatures, and administers oaths to deter fraud. A notary does not provide legal advice, represent clients in court, or prepare legal documents (except in very limited capacities). A lawyer, by contrast, is a licensed legal professional who has completed law school, passed the bar exam, and is authorized to provide legal advice, draft legal documents, represent clients in court proceedings, and negotiate on behalf of clients. Notaries focus on authentication; lawyers focus on advocacy and legal counsel. These roles are complementary but distinctly different.",
  },
  {
    question: "Can a notary give legal advice in Oklahoma?",
    answer:
      "No. Under Oklahoma law and the rules governing notaries in every U.S. state, notaries are strictly prohibited from giving legal advice unless they are also licensed attorneys. This prohibition is part of the broader doctrine against the unauthorized practice of law (UPL). A notary who provides legal advice — such as explaining what a contract means, advising on estate planning strategies, or recommending specific legal documents — commits a serious violation that can result in civil penalties, criminal charges, and revocation of their notary commission. Notaries can explain the notarization process itself and what the notarial act involves, but they cannot advise on the legal content, meaning, or effect of the document being notarized.",
  },
  {
    question: "Can a notary prepare legal documents?",
    answer:
      "Generally no. A non-attorney notary cannot prepare legal documents, select documents for clients, or fill in legal documents on behalf of a client. These activities constitute the unauthorized practice of law in Oklahoma. However, there are limited exceptions. Notaries who are not attorneys may use their judgment in completing notarial certificates and may assist with general clerical tasks like filling in dates or names on documents that the client has already prepared or selected. Some states allow notaries to act as document preparation services for certain non-legal forms, but Oklahoma notaries should exercise extreme caution and, when in doubt, refer the client to an attorney. The safest rule: if the task requires legal knowledge or judgment, a non-attorney notary should not do it.",
  },
  {
    question: "Do I need a notary or a lawyer for my document?",
    answer:
      "It depends on what you need. If you have a document that requires verification of identity and witnessing of a signature — such as a deed, affidavit, power of attorney, or contract — you need a notary. If you need help understanding what a document means, whether it protects your interests, how it fits into your overall legal situation, or if you need a document drafted from scratch — you need a lawyer. Many situations require both: you may need a lawyer to draft or review a real estate purchase agreement, and then a notary to notarize the signed deed. At Just Legal Solutions, we are notaries, not lawyers. When a client asks a question that requires legal advice, we always refer them to a qualified Oklahoma attorney.",
  },
  {
    question: "What is unauthorized practice of law (UPL) by notaries?",
    answer:
      "The unauthorized practice of law (UPL) occurs when a non-attorney performs activities that require a law license, such as providing legal advice, representing someone in court, or preparing legal documents with legal judgment. For notaries, common UPL violations include: advising clients on which type of document to use; explaining the legal effect of a document; drafting legal documents like wills, trusts, or contracts; representing oneself as qualified to provide legal services; or using titles like 'notario publico' in a way that implies legal authority. Oklahoma, like all states, takes UPL seriously. Violations can result in civil lawsuits, criminal misdemeanor or felony charges, fines, and permanent revocation of a notary commission. If you need legal advice, always consult a licensed Oklahoma attorney.",
  },
  {
    question: "Can someone be both a notary and a lawyer?",
    answer:
      "Yes, absolutely. Many attorneys are also commissioned notaries. When acting as a notary, an attorney must follow the same notary laws and restrictions as any other notary — including the prohibition against notarizing their own signature or notarizing documents in which they have a disqualifying interest. Being both an attorney and a notary can be convenient for legal practices because documents can be notarized in-house. However, the roles remain distinct. An attorney-notary must be careful to separate their legal advisory role from their notarial function and should avoid notarizing documents in transactions where they represent one of the parties, as this creates a conflict of interest.",
  },
];

export default function NotaryVsLawyerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <link
          rel="canonical"
          href="https://justlegalsolutions.org/blog/difference-between-notary-and-lawyer"
        />
        <meta
          property="og:title"
          content="What's the Difference Between a Notary and a Lawyer? | Just Legal Solutions"
        />
        <meta
          property="og:description"
          content="Learn the key differences between notaries and lawyers, what notaries can and cannot do, when you need an attorney, and UPL rules in Oklahoma."
        />
      </Head>

      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-10">
          <header className="mb-10 border-b border-gray-100 pb-8">
            <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2">
              <Link
                href="https://justlegalsolutions.org/blog"
                className="hover:underline"
              >
                Blog
              </Link>
              <span className="mx-2 text-gray-300">/</span>
              <span>Notary Services</span>
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              What's the Difference Between a Notary and a Lawyer?
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              Understanding the distinct roles, responsibilities, and legal
              boundaries between notaries and attorneys in Oklahoma.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              Published: June 2025 | By Just Legal Solutions Editorial Team
            </div>
          </header>

          <UnifiedSchema
            type="BlogPosting"
            name="What's the Difference Between a Notary and a Lawyer?"
            description="Understanding the distinct roles, responsibilities, and legal boundaries between notaries and attorneys in Oklahoma."
            url="https://justlegalsolutions.org/blog/difference-between-notary-and-lawyer"
            datePublished="2025-06-01"
            image="https://justlegalsolutions.org/images/notary-vs-lawyer.png"
          />

          <AuthorBox />

          <div className="prose prose-lg max-w-none mt-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              The distinction between a notary public and a lawyer is one of
              the most misunderstood aspects of the legal services world. Every
              week at{" "}
              <a
                href="https://justlegalsolutions.org"
                className="text-blue-600 hover:underline font-medium"
              >
                Just Legal Solutions
              </a>
              , we field calls from clients who ask us to "explain what this
              document means," "tell me if this contract is fair," or "help me
              write a will." These are all important requests, but they are not
              requests a notary can fulfill — at least not a notary who is not
              also a licensed attorney. Understanding the difference between
              these two essential but fundamentally different roles will save
              you time, protect your legal interests, and help you seek the
              right professional for your needs.
            </p>

            <p className="text-gray-700 leading-relaxed">
              In this article, we will break down the key differences between
              notaries and lawyers, explore what each profession can and cannot
              do, explain the critical rules around the unauthorized practice
              of law in Oklahoma, and help you determine when you need a
              notary, when you need a lawyer, and when you might need both.
              Whether you are buying a home, creating an estate plan, starting
              a business, or simply need a document authenticated, this guide
              will clarify the distinct roles of these legal professionals.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              The Core Difference: Authentication vs. Advocacy
            </h2>

            <p className="text-gray-700 leading-relaxed">
              At the most fundamental level, a notary is an authentication
              official while a lawyer is an advocacy and advisory
              professional. The notary's role is to prevent fraud by
              verifying that people are who they claim to be, that they are
              signing willingly, and that documents are executed properly.
              The lawyer's role is to advise clients on their legal rights and
              obligations, represent their interests in legal proceedings, and
              draft legal documents that achieve the client's goals.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Think of it this way: a notary verifies the execution of
              documents. A lawyer shapes the content and strategy of those
              documents. When you sign a mortgage at a closing, the notary
              confirms your identity, watches you sign, and notarizes the
              deed. But the lawyer (or title professional) prepared the
              purchase agreement, reviewed the title work, advised on the
              terms, and ensured the documents protect your interests. Both
              roles are essential to the transaction, but they serve
              completely different functions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              What a Notary Does: Roles and Responsibilities
            </h2>

            <p className="text-gray-700 leading-relaxed">
              A notary public is an individual commissioned by the Oklahoma
              Secretary of State to serve as an impartial witness in the
              signing of important documents. The notary's duties are defined
              by Oklahoma statute and include:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>
                <strong>Verifying identity:</strong> Confirming that signers
                are who they claim to be through acceptable identification
              </li>
              <li>
                <strong>Witnessing signatures:</strong> Watching the signer
                execute the document in the notary's physical presence
              </li>
              <li>
                <strong>Administering oaths and affirmations:</strong> For
                jurats and sworn statements
              </li>
              <li>
                <strong>Taking acknowledgments:</strong> Confirming that a
                signer voluntarily executed a document
              </li>
              <li>
                <strong>Certifying copies:</strong> In limited circumstances,
                certifying that a copy is true and accurate
              </li>
              <li>
                <strong>Keeping a journal:</strong> Recording notarial acts
                for documentation and evidence
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              A notary acts as a neutral, third-party witness. They do not
              represent either side in a transaction. They do not advise on
              the legal implications of a document. Their function is
              procedural — ensuring the signing process is proper and
              verifiable — not substantive in terms of the document's legal
              content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              What a Lawyer Does: Roles and Responsibilities
            </h2>

            <p className="text-gray-700 leading-relaxed">
              An attorney, by contrast, has completed years of legal
              education, passed the Oklahoma Bar Examination, and is licensed
              by the Oklahoma Bar Association to practice law. An attorney's
              duties include:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>
                <strong>Providing legal advice:</strong> Advising clients on
                their rights, obligations, and legal strategies
              </li>
              <li>
                <strong>Drafting legal documents:</strong> Creating contracts,
                wills, trusts, pleadings, and other legal instruments
              </li>
              <li>
                <strong>Representing clients in court:</strong> Advocating for
                clients in litigation, hearings, and trials
              </li>
              <li>
                <strong>Negotiating on behalf of clients:</strong> Settlement
                negotiations, contract terms, and dispute resolution
              </li>
              <li>
                <strong>Legal research and analysis:</strong> Interpreting
                statutes, case law, and regulations
              </li>
              <li>
                <strong>Client advocacy:</strong> Acting in the client's best
                interests with fiduciary duties of loyalty and
                confidentiality
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              An attorney represents a specific client's interests. They are
              not neutral; they are advocates. They owe their clients duties
              of confidentiality, loyalty, and competent representation. These
              are fundamentally different functions from a notary's neutral
              witnessing role.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Side-by-Side Comparison: Notary vs. Lawyer
            </h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 p-3 font-semibold text-gray-900">
                      Factor
                    </th>
                    <th className="border border-gray-200 p-3 font-semibold text-gray-900">
                      Notary
                    </th>
                    <th className="border border-gray-200 p-3 font-semibold text-gray-900">
                      Lawyer
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">
                      Primary Role
                    </td>
                    <td className="border border-gray-200 p-3">
                      Identity verification and fraud prevention
                    </td>
                    <td className="border border-gray-200 p-3">
                      Legal advice and client advocacy
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">
                      Education Required
                    </td>
                    <td className="border border-gray-200 p-3">
                      Application, bond, and commission from Secretary of State
                    </td>
                    <td className="border border-gray-200 p-3">
                      Law school degree and bar exam passage
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">
                      Can Give Legal Advice?
                    </td>
                    <td className="border border-gray-200 p-3">
                      No — prohibited by law
                    </td>
                    <td className="border border-gray-200 p-3">
                      Yes — this is their core function
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">
                      Can Draft Legal Documents?
                    </td>
                    <td className="border border-gray-200 p-3">
                      Limited — notarial certificates only; cannot draft
                      substantive legal documents
                    </td>
                    <td className="border border-gray-200 p-3">
                      Yes — drafts wills, contracts, pleadings, and more
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">
                      Can Represent in Court?
                    </td>
                    <td className="border border-gray-200 p-3">No</td>
                    <td className="border border-gray-200 p-3">Yes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">
                      Duty of Neutrality
                    </td>
                    <td className="border border-gray-200 p-3">
                      Yes — must be impartial
                    </td>
                    <td className="border border-gray-200 p-3">
                      No — advocates for client
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">
                      Client Confidentiality
                    </td>
                    <td className="border border-gray-200 p-3">
                      Limited — journal entries may be public records
                    </td>
                    <td className="border border-gray-200 p-3">
                      Yes — strict attorney-client privilege
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">
                      Standard Fee Structure
                    </td>
                    <td className="border border-gray-200 p-3">
                      $5 per signature + travel fees (mobile)
                    </td>
                    <td className="border border-gray-200 p-3">
                      Hourly rates or flat fees (typically our competitive rate-$500+/hour)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              What a Notary Cannot Do: The Unauthorized Practice of Law
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The unauthorized practice of law (UPL) is one of the most
              serious issues in the notary profession. Oklahoma law, like
              every state, restricts the practice of law to licensed
              attorneys. Notaries who cross this line face severe
              consequences including civil liability, criminal charges, and
              permanent loss of their notary commission.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Here are specific activities that constitute UPL when performed
              by a non-attorney notary:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>
                <strong>Providing legal advice:</strong> Explaining what a
                document means, advising on legal rights, or recommending
                courses of legal action
              </li>
              <li>
                <strong>Selecting documents:</strong> Telling a client what
                type of legal document they need (e.g., "you need a
                revocable living trust")
              </li>
              <li>
                <strong>Drafting legal documents:</strong> Preparing wills,
                trusts, contracts, divorce papers, or other legal
                instruments
              </li>
              <li>
                <strong>Explaining legal consequences:</strong> Telling a
                signer what will happen legally if they sign a document
              </li>
              <li>
                <strong>Representing clients:</strong> Acting as someone's
                representative in any legal matter
              </li>
              <li>
                <strong>Using misleading titles:</strong> Using "notario
                publico" or similar terms that suggest legal authority
                (particularly harmful in Spanish-speaking communities where
                "notario" means lawyer)
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              At{" "}
              <a
                href="https://justlegalsolutions.org/notary-services"
                className="text-blue-600 hover:underline font-medium"
              >
                Just Legal Solutions
              </a>
              , our notaries are trained to recognize the boundary between
              notarial acts and legal advice. When a client asks a question
              that requires legal expertise, our standard response is: "That
              is a legal question that requires a licensed attorney's advice.
              I can refer you to qualified legal counsel." This protects both
              our clients and our notaries.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              When You Need a Notary vs. When You Need a Lawyer
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Many legal transactions require both a lawyer and a notary at
              different stages. Here is a practical guide to which
              professional you need for common situations:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">
                Situations Requiring a Notary
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>Notarizing a signature on a deed or mortgage</li>
                <li>Swearing to an affidavit's truthfulness</li>
                <li>Creating a certified copy of a document</li>
                <li>Notarizing a power of attorney (after it is drafted)</li>
                <li>Notarizing consent forms or authorizations</li>
                <li>Verifying identity for a financial transaction</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 my-6 border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-3">
                Situations Requiring a Lawyer
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>Drafting a will, trust, or estate plan</li>
                <li>Reviewing a contract before you sign</li>
                <li>Handling a lawsuit or court proceeding</li>
                <li>Advising on business formation or corporate structure</li>
                <li>Negotiating a settlement or dispute</li>
                <li>Interpreting laws, regulations, or legal documents</li>
                <li>Advising on divorce, custody, or family law matters</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Many situations require both professionals. For example, when
              buying a home, you need a lawyer (or title company) to handle
              the legal work and a notary to witness the signing of the deed.
              When creating an estate plan, you need an attorney to draft
              the will and trust documents, and then a notary to notarize
              the signatures on those documents. When executing a business
              contract, you need an attorney to draft and review the
              agreement, and a notary to authenticate the signatures.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              The "Notario Publico" Danger: A Special Warning
            </h2>

            <p className="text-gray-700 leading-relaxed">
              One of the most serious problems in immigrant communities
              involves the misuse of the title "notario publico." In many
              Latin American countries, a "notario" is a highly trained
              legal professional with authority similar to an attorney. In
              the United States, a "notary public" is an authentication
              official with no legal training or authority.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Unscrupulous individuals have exploited this linguistic
              confusion to mislead immigrants into believing they are
              receiving legal services when they are only getting
              notarization. These impostors may prepare immigration papers,
              draft legal documents, and give legal advice — all without a
              law license — causing devastating harm to vulnerable people.
              Oklahoma law prohibits non-attorneys from using titles that
              suggest legal authority. If you encounter someone calling
              themselves a "notario" and offering legal advice, report them
              to the Oklahoma Bar Association and the Secretary of State.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Conclusion: Choose the Right Professional for Your Needs
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Notaries and lawyers serve complementary but fundamentally
              different roles in our legal system. Notaries prevent fraud by
              verifying identity and witnessing signatures. Lawyers protect
              your interests by providing legal advice, drafting documents,
              and advocating for you. Both are essential, but they are not
              interchangeable.
            </p>

            <p className="text-gray-700 leading-relaxed">
              At Just Legal Solutions, we are proud to be professional
              notaries serving all 77 Oklahoma counties. We know our role,
              we respect its boundaries, and we are committed to providing
              expert authentication services while referring clients to
              qualified attorneys when legal advice is needed. Our 4.9-star
              rating reflects our professionalism, our expertise, and our
              commitment to doing things the right way.
            </p>

            <p className="text-gray-700 leading-relaxed">
              If you need notary services anywhere in Oklahoma, call{" "}
              <a
                href="tel:539-367-6832"
                className="text-blue-600 hover:underline font-medium"
              >
                (539) 367-6832
              </a>{" "}
              or{" "}
              <a
                href="https://justlegalsolutions.org/contact"
                className="text-blue-600 hover:underline font-medium"
              >
                schedule online
              </a>
              . If your needs require legal advice, we will be happy to refer
              you to a qualified Oklahoma attorney. Either way, you will get
              the right professional for your situation.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-lg cursor-pointer"
                >
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                    <span>{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 pb-4 px-4 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-10 bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Need Professional Notary Services in Oklahoma?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Just Legal Solutions provides expert mobile notary services across
              all 77 Oklahoma counties. Licensed, bonded, and committed to doing
              things the right way. Need legal advice? We will refer you to a
              qualified attorney.
            </p>
            <a
              href="tel:539-367-6832"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Call (539) 367-6832
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Mobile notary | Same-day service | All 77 counties | Licensed & Bonded
            </p>
          </div>
        </article>
              
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related Notary Articles</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><Link href="/blog/how-much-does-notary-cost-oklahoma" className="text-blue-600 hover:underline">How Much Does a Notary Cost in Oklahoma?</Link></li>
            <li><Link href="/blog/what-documents-need-notarized-oklahoma" className="text-blue-600 hover:underline">What Documents Need to Be Notarized?</Link></li>
            <li><Link href="/blog/mobile-notary-come-to-office-oklahoma" className="text-blue-600 hover:underline">Can a Mobile Notary Come to My Office?</Link></li>
            <li><Link href="/blog/how-quickly-get-documents-notarized-oklahoma" className="text-blue-600 hover:underline">How Quickly Can I Get Documents Notarized?</Link></li>
          </ul>
        </section>
        <section className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">Transparent Pricing</h2>
          <p className="text-gray-700">View our complete pricing on our <Link href="/pricing" className="text-blue-600 font-semibold">pricing page</Link>. No hidden fees.</p>
        </section>
      </main>

      <LocalPromoBanner />
      <Footer />
    </div>
  );
}


=== FILE: documents-notarized-weekends-after-hours-oklahoma ===