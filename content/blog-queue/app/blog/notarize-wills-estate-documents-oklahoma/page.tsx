import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Notarizing Wills and Estate Documents in Oklahoma',
  description: 'Under 84 O.S. § 55, Oklahoma wills need two witnesses, not notarization. Learn self-proving affidavits, trusts, codicils, and limits on what notaries may do.',
  keywords: 'Oklahoma will notarization, 84 O.S. 55, self-proving affidavit Oklahoma, estate documents notary, codicil witnesses Oklahoma, trust notarization Oklahoma',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Notarizing Wills and Estate Documents in Oklahoma',
    description: 'Under 84 O.S. § 55, Oklahoma wills need two witnesses, not notarization. Learn self-proving affidavits, trusts, codicils, and limits on what notaries may do.',
    url: 'https://justlegalsolutions.org/blog/notarize-wills-estate-documents-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Notarizing Wills and Estate Documents in Oklahoma',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/notarize-wills-estate-documents-oklahoma',
  },
  other: {
    'article:published_time': '2027-03-11',
    'article:modified_time': '2027-03-11',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary':
      'Under 84 O.S. § 55, a valid Oklahoma will requires the testator signature and two competent witnesses at the signing; notarization of the will itself is not mandatory. An optional self-proving affidavit may be notarized so witnesses need not testify in probate, but a notary cannot replace the two witnesses. Trusts, codicils, powers of attorney, and beneficiary forms follow separate rules; notaries verify identity and administer oaths but cannot give estate planning legal advice.',
    'ai-key-facts':
      'Oklahoma wills require two witnesses under 84 O.S. § 55, not a notary seal on the will; Self-proving affidavits are optional and allow probate without live witness testimony; A notary is not a substitute for either required witness; Codicils amending a will generally need the same witness formalities as the original; Revocable trusts are usually witnessed but often not filed with the court; Notaries cannot draft wills, advise on beneficiaries, or explain tax consequences',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Does an Oklahoma will have to be notarized to be valid?',
    answer: 'No. Under 84 O.S. § 55, a valid Oklahoma will requires a written document signed by the testator (or by someone at the testator direction in the testator presence) and attested by two competent witnesses who sign in the testator presence. Notarization of the will itself is not a statutory requirement for validity. Many people add a separate self-proving affidavit that is notarized, but that affidavit is optional — it speeds probate by letting the court accept the will without calling witnesses to testify. If your will has two proper witnesses and no notary, it can still be a lawful Oklahoma will.',
  },
  {
    question: 'What is a self-proving affidavit and do I need one in Oklahoma?',
    answer: 'A self-proving affidavit is a sworn statement, usually attached to the will, in which the testator and both witnesses declare under oath that the will was properly signed and witnessed. When a notary takes those acknowledgments or administers the oaths and notarizes the affidavit, Oklahoma probate courts can often admit the will without requiring the witnesses to appear in person later. You do not need a self-proving affidavit for the will to be valid — it is a convenience for the probate process. If witnesses move away, die, or cannot be located, a self-proving affidavit saves time and cost. Ask your estate planning attorney whether your situation warrants one.',
  },
  {
    question: 'Can a notary serve as one of the two witnesses to my Oklahoma will?',
    answer: 'Oklahoma law does not automatically disqualify a notary from also being a witness, but using your notary as a witness is usually a bad idea. The notary role and the witness role are separate functions with different legal purposes. Witnesses attest that they saw you sign; the notary on a self-proving affidavit verifies identity and administers oaths on the affidavit — not on the will body itself. If the same person wears both hats, confusion can arise about what they actually observed, and some title companies or probate courts prefer clean separation. More importantly, a notary cannot replace both witnesses: you still need two witnesses regardless of who notarizes an optional affidavit.',
  },
  {
    question: 'Is a notary a substitute for the two witnesses Oklahoma requires?',
    answer: 'Absolutely not. This is one of the most common misunderstandings we see at signing appointments across Oklahoma. A notary public verifies identity, takes acknowledgments, and administers oaths — they do not fulfill the witness attestation requirement under 84 O.S. § 55. You need two individuals who watch you sign (or acknowledge your signature) and then sign the will as witnesses in your presence. Showing up alone to a notary office and getting a stamp on the will does not create a valid witnessed will. If someone tells you that notarization alone makes a will legal in Oklahoma, they are wrong.',
  },
  {
    question: 'Do codicils to an Oklahoma will need notarization or just witnesses?',
    answer: 'A codicil is an amendment to an existing will and generally must meet the same execution formalities as the original will under Oklahoma law — meaning the testator signature plus two competent witnesses, not merely a notary seal. Notarization of the codicil itself is not required for validity, though a self-proving affidavit can be attached to a codicil the same way it can to a will. If you scratch changes in the margin of your old will or type a one-page addendum without witnesses, you risk creating an invalid amendment. Treat a codicil with the same seriousness as signing a new will.',
  },
  {
    question: 'How are trusts and estate documents different from wills for notarization?',
    answer: 'Revocable living trusts, transfer-on-death deeds, beneficiary designations, and powers of attorney each follow their own statutes and institutional rules — they are not governed solely by 84 O.S. § 55. Oklahoma trusts are typically signed and witnessed like wills, but they are usually not filed in probate court, so a self-proving affidavit is less common. Powers of attorney may need acknowledgment before a notary depending on how they are drafted and who will rely on them — banks and hospitals often insist on notarization even when statute does not. Beneficiary forms and pay-on-death account designations generally require no notary at all, just the financial institution paperwork. Always match the execution requirements to the specific document, not a one-size-fits-all notary visit.',
  },
  {
    question: 'What can an Oklahoma notary do at a will signing appointment?',
    answer: 'At a properly organized signing, a notary can notarize a self-proving affidavit if one is included in the estate packet, take acknowledgments on separate estate affidavits, notarize a power of attorney that requires it, and perform standard notarial acts on related transfer documents. The notary verifies that signers personally appear, confirms identity with satisfactory evidence, records the act in a journal, and applies a seal where appropriate. What the notary cannot do is tell you whether the will distributes property fairly, who should be executor, whether you need a trust instead, or how Oklahoma estate tax rules apply — that is legal advice reserved for licensed attorneys.',
  },
  {
    question: 'What estate planning tasks can a notary NOT perform in Oklahoma?',
    answer: 'Notaries cannot draft wills, trusts, or codicils; cannot recommend that you disinherit someone or add a particular beneficiary; cannot explain probate timelines or tax consequences; and cannot hold themselves out as estate planners because they offer low-cost notarization. Doing so crosses into the unauthorized practice of law. They also cannot waive the two-witness requirement by putting a notary seal on an unwitnessed will, cannot serve as both witnesses simultaneously, and cannot backdate or rush a signing when the testator lacks capacity. If you need document preparation or strategy, hire an Oklahoma estate planning lawyer; use a notary for the authorized notarial acts your attorney or your forms require.',
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Notarizing Wills and Estate Documents in Oklahoma"
        title="Notarizing Wills and Estate Documents in Oklahoma"
        pageDescription="Under 84 O.S. § 55, Oklahoma wills need two witnesses, not notarization. Learn self-proving affidavits, trusts, codicils, and limits on what notaries may do."
        description="Under 84 O.S. § 55, Oklahoma wills need two witnesses, not notarization. Learn self-proving affidavits, trusts, codicils, and limits on what notaries may do."
        pageUrl="https://justlegalsolutions.org/blog/notarize-wills-estate-documents-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={112}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Notarizing Wills and Estate Documents in Oklahoma', item: 'https://justlegalsolutions.org/blog/notarize-wills-estate-documents-oklahoma' }
        ]}
        articleDetails={{
          headline: 'Notarizing Wills and Estate Documents in Oklahoma',
          datePublished: '2027-03-11',
          dateModified: '2027-03-11',
          author: 'Just Legal Solutions Team',
          
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'Oklahoma will notarization',
          '84 O.S. 55',
          'self-proving affidavit',
          'estate documents notary',
          'codicil witnesses Oklahoma',
          'legal support services',
          'Oklahoma notary public'
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
            Notary Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Notarizing Wills and Estate Documents in Oklahoma
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Under <strong>84 O.S. § 55</strong>, a valid Oklahoma will needs your signature and{' '}
              <strong>two competent witnesses</strong> — not a notary seal on the will itself. You may attach an
              optional <strong>self-proving affidavit</strong> that a notary can swear to, which helps probate courts
              accept the will without live witness testimony. A notary is <strong>not a substitute for either witness</strong>.
              Trusts, codicils, and powers of attorney follow their own rules, and notaries{' '}
              <strong>cannot give estate planning legal advice</strong>.
            </p>
          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2027-03-11').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~12 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            Your attorney sends a will packet, or you download a form online, and the first question is always the same: do I need a notary? In Oklahoma the answer surprises people. A notary stamp on the will itself is not what makes it legal. Two witnesses watching you sign is what 84 O.S. § 55 requires. Notaries still show up in estate work — usually on a separate self-proving affidavit — but their role is narrower than most families assume. This guide explains what Oklahoma law actually demands for wills, codicils, and related estate documents, where notarization fits, and the lines a notary cannot cross.
          </p>

          <h2>What 84 O.S. § 55 Requires for a Valid Oklahoma Will</h2>

          <p>
            Oklahoma wills are governed by Title 84 of the Oklahoma Statutes. Section 55 sets out the execution requirements: the will must be in writing, signed by the testator (or signed by someone else in the testator presence and at the testator direction), and attested by two competent witnesses who sign in the testator presence. Those witnesses confirm that you are the person signing, that you appear to know what you are doing, and that the document presented is your will.
          </p>
          <p>
            Notice what is not on that list. There is no requirement that a notary public notarize the will. Oklahoma follows a witnessed-will tradition, not a notarized-will tradition like some other states. If you sign at your kitchen table in Stillwater with two neighbors watching and everyone signs in the correct order, you may have a valid will with zero notarial acts. Probate might take an extra step to locate those witnesses years later, but validity and convenience are different questions.
          </p>

          <h3>Who Counts as a Competent Witness</h3>
          <p>
            Oklahoma expects witnesses to be adults who are generally competent and not obviously interested in inheriting under the will. A beneficiary signing as a witness can create problems — under 84 O.S. § 56, a witness who is also an heir may lose the legacy the will would have given them unless there are other disinterested witnesses or the court finds clear evidence the testator intended the gift anyway. Estate planning attorneys usually bring in two people who are not named in the document. That is a drafting strategy, not a notary rule, but it affects who should be in the room when you sign.
          </p>

          <h2>Where Notarization Actually Enters the Picture</h2>

          <p>
            Even though the will itself does not need a notary, Oklahoma practice often includes a self-proving affidavit. That is a separate page — sometimes printed as the last sheet of the will packet — where you and both witnesses appear before a notary and swear that the will was signed voluntarily, that you are the testator, and that the witnesses saw the execution. The notary administers oaths or takes acknowledgments on that affidavit, not on the substantive dispositive clauses of the will.
          </p>
          <p>
            The payoff shows up in probate. When a self-proving affidavit is properly executed, the district court can admit the will to probate without requiring the witnesses to testify in person about the signing. That matters when witnesses have moved to Texas, passed away, or simply do not want to take time off work to sit in a courthouse in Oklahoma City or Tulsa. The affidavit is optional. Leaving it out does not invalidate the will; it just means the estate may need live witness testimony or other proof of proper execution later.
          </p>

          <h3>Scheduling a Signing That Satisfies Both Roles</h3>
          <p>
            A clean estate signing usually gathers the testator, two witnesses, and optionally a notary in one room. Everyone watches the testator sign the will. The witnesses sign immediately afterward in the testator presence. If a self-proving affidavit is part of the packet, the notary then takes each person through the oath or acknowledgment on that affidavit and applies a seal. Mobile notaries across Oklahoma handle these appointments at homes, assisted living facilities, and law offices daily. The key is sequencing: witnesses first for the will, notary second for the affidavit.
          </p>

          <h2>A Notary Is Not a Substitute for Two Witnesses</h2>

          <p>
            This bears repeating because the mistake is expensive. Walking into a shipping store alone and asking the clerk-notary to stamp your will does not satisfy 84 O.S. § 55. The notary did not attested as a witness in the legal sense required for wills unless they also signed as a witness — and one witness, notary or not, is still one witness. You need two.
          </p>
          <p>
            Some online articles blur "notarize" and "witness" because in other contexts a notary acknowledgment stands in for extra formalities. Oklahoma wills are different. A notary public is a state commission focused on identity verification and authorized notarial acts under Title 49. Witnesses serve a distinct probate function under Title 84. Hiring a mobile notary for convenience does not reduce the witness count. Bring two people, or reschedule until you have them.
          </p>

          <h3>Can the Notary Be One of the Witnesses?</h3>
          <p>
            Statute does not flatly forbid it, but estate lawyers rarely recommend doubling roles. If your notary signs as Witness One and your cousin signs as Witness Two, you may technically meet the witness count, but the self-proving affidavit becomes awkward — the notary would swear to facts they partially observed in dual capacities. Keep roles separated when possible: two witnesses who are not the notary, plus a notary who handles only the affidavit. Clarity protects your beneficiaries when the will reaches the probate judge years from now.
          </p>

          <h2>Codicils: Amendments Need the Same Respect as the Original Will</h2>

          <p>
            Life changes. You bought property in Broken Arrow, had another grandchild, or want to change who serves as executor. A codicil amends part of your existing will without rewriting the whole document. Under Oklahoma law, a codicil generally must be executed with the same formalities as a will — testator signature plus two witnesses. Notarization of the codicil body is still not required for validity.
          </p>
          <p>
            The same optional self-proving affidavit can attach to a codicil. If you scribble changes on page two of your old will without witnesses, you risk leaving the estate with two conflicting instructions and a invalid amendment. Treat codicil signings like fresh will signings: witnesses present, order of signing correct, no shortcuts because the document is only one page.
          </p>

          <h2>Trusts, Powers of Attorney, and Other Estate Papers</h2>

          <p>
            Estate planning is bigger than the will sitting in your fireproof box. Revocable living trusts are common in Oklahoma for clients who want to avoid probate on funded assets. Trusts are typically written, signed, and witnessed, but they are usually not filed in probate court. Self-proving affidavits appear less often because the trust administration path differs. Notaries may still be involved when trust certificates need acknowledgment for banks or when separate affidavits of trust existence go to title companies.
          </p>
          <p>
            Durable powers of attorney for finances and health care advance directives follow yet another pattern. Oklahoma statutory forms and many custom drafts include acknowledgment lines before a notary because banks, hospitals, and insurers demand notarized signatures even when pure statutory validity might only require witnesses. Always read the footer of the form your attorney gave you — "acknowledged before me" means notary; "witnessed by" means witnesses.
          </p>

          <h3>Transfer-on-Death Deeds and Beneficiary Forms</h3>
          <p>
            Oklahoma transfer-on-death deeds for real estate require recording with the county clerk and must meet statutory execution rules, which include acknowledgment before a notary. That is a recording requirement, not a will requirement. Life insurance and retirement account beneficiary designations usually need no notary at all — just the carrier form. Mixing up which document needs which formalities sends families back to lawyers for cures. Match the execution checklist to each paper in the estate plan, not one generic notary visit for everything in the folder.
          </p>

          <h2>What Oklahoma Notaries Can Do at Estate Signings</h2>

          <p>
            When roles are properly divided, notaries provide real value. They verify identity with satisfactory evidence — usually a government ID — and administer oaths or take acknowledgments on self-proving affidavits. They record the act in a notary journal, apply their seal, and charge up to the statutory fee per act under Title 49. Mobile notaries travel to hospitals in Lawton, nursing homes in Enid, and law firm conference rooms in Norman so fragile testators do not need to drive across town.
          </p>
          <h2>What Notaries Cannot Do — Especially in Estate Planning</h2>

          <p>
            Oklahoma notaries are not estate attorneys. They cannot tell you whether to use a will or a trust, who should inherit your mineral interests, how to minimize taxes, or whether disinheriting an adult child will hold up in court. They cannot draft dispositive language, select forms for you, or explain probate timelines. Charging for that advice is unauthorized practice of law, regardless of what someone calls the fee on the invoice.
          </p>
          <p>
            Notaries also cannot fix a defective will by adding a seal after the fact when no witnesses were present. They cannot backdate a journal entry, notarize for a signer who lacks capacity, or pressure a family to sign changes they do not understand. The Spanish phrase "notario publico" confuses many Oklahoma families because in some countries that title denotes a lawyer. In Oklahoma it does not. Your notary verifies signatures; your lawyer shapes the plan.
          </p>

          <h3>Red Flags at Will-Signing Appointments</h3>
          <p>
            Walk away if someone offering notary services says witnesses are optional, promises that a notary stamp alone makes the will "court ready," or bundles "estate planning advice" with a $50 notarization. Legitimate notaries ask who the witnesses are before they travel. They ask whether the packet includes a self-proving affidavit so they know which acts to perform. They refer legal questions back to your attorney without pretending to answer them.
          </p>

          <h2>Probate With or Without a Self-Proving Affidavit</h2>

          <p>
            If your valid will has two witnesses but no notarized affidavit, Oklahoma probate still works — the personal representative may need live witness testimony or a deposition, which adds time and cost but does not void the will. Conversely, a notary seal on a will without two witness signatures does not rescue the document. Probate judges look for compliance with 84 O.S. § 55 first. Read your attorney packet before signing, confirm two witnesses and photo ID are ready, and store the executed original where your executor can find it.
          </p>

          {/* Primary CTA */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need a Notary for a Will or Estate Signing?</h3>
            <p className="text-blue-800 mb-4">
              Just Legal Solutions provides mobile and office notary services across all 77 Oklahoma counties for self-proving affidavits, powers of attorney, and related estate paperwork — with clear fees and proper journals, never legal advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:5393676832" className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Call (539) 367-6832
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                Request Notary Service
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
            Oklahoma wills live or die on two witnesses under 84 O.S. § 55, not on whether a notary stamped the will itself. A self-proving affidavit is the usual place notarization appears, and it is optional — a probate convenience, not a validity requirement. Codicils, trusts, and powers of attorney each carry their own execution checklist. Notaries help with authorized acts on those papers but cannot replace witnesses, draft your plan, or answer legal strategy questions.
          </p>
          <p>
            At Just Legal Solutions, we support estate signings across all 77 Oklahoma counties with the same precision we bring to process serving and court filing — proper journals, clear per-act fees, and respect for the line between notarial service and legal advice.
          </p>

          <p className="text-gray-700 italic mt-8">
            Need professional notary services in Oklahoma?{' '}
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
