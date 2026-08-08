import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Oklahoma Notary for Immigration Forms: Legal Limits',
  description:'Oklahoma notaries cannot give immigration legal advice or use notario publico. Learn the legal limits, required warnings, and safe notarization practices.',
  keywords: 'notary immigration forms Oklahoma, notario publico Oklahoma, immigration notary limits, 49 O.S. 6, unauthorized practice immigration law',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Oklahoma Notary for Immigration Forms: Legal Limits',
    description:'Oklahoma notaries cannot give immigration legal advice or use notario publico. Learn the legal limits, required warnings, and safe notarization practices.',
    url: 'https://justlegalsolutions.org/blog/oklahoma-notary-immigration-form-limits',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Oklahoma Notary for Immigration Forms: Legal Limits',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/oklahoma-notary-immigration-form-limits',
  },
  other: {
    'article:published_time': '2026-08-27',
    'article:modified_time': '2026-08-27',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary': 'Under 49 O.S. § 6(B), Oklahoma notaries cannot hold themselves out as immigration experts, cannot use the Spanish title "notario publico," and must give a written and verbal disclaimer when providing nonlegal help. Violations are misdemeanors with up to $1,000 fines and 8-year commission revocation.',
    'ai-key-facts': '49 O.S. § 6(B) bars notaries from immigration legal advice; "Notario publico" title use is prohibited in Oklahoma; Mandatory disclaimer required verbally and in writing; Violation is a misdemeanor, up to $1,000 fine; Commission revoked 8 years on final judgment; Only attorneys and DOJ-accredited reps may represent before USCIS',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'What can an Oklahoma notary legally do with immigration forms?',
    answer: 'An Oklahoma notary may perform notarial acts — notarizing signatures on affidavits, sworn statements, and other documents used in immigration matters — and may provide purely nonlegal assistance such as typing information you provide onto a form or arranging for translations. What the notary cannot do is advise you which forms to file, coach you on how to answer questions, explain your immigration options, or act in a representative capacity. Under 49 O.S. § 6(B), any notary providing nonlegal assistance must give you a specific disclaimer, verbally and in writing.',
  },
  {
    question: 'What is the exact notice an Oklahoma notary must give under 49 O.S. § 6(B)?',
    answer: 'The statute requires this statement, given both verbally and in writing: "I am not a licensed attorney or representative of any government agency with authority over immigration or citizenship and, therefore, cannot offer legal advice about immigration or any other legal matters." If the notary operates a business or advertises in any language other than English, the notice must be given in both English and the other language. A notary who fails to provide this notice — or who gives immigration advice anyway — is violating Oklahoma law.',
  },
  {
    question: 'What happens if a notary gives immigration legal advice in Oklahoma?',
    answer: 'Under 49 O.S. § 6.1, any individual convicted of violating 49 O.S. § 6(B) is guilty of a misdemeanor punishable by a fine of up to $1,000. Beyond the fine, once a district court enters a final judgment against a notary for this violation, the Oklahoma Secretary of State must revoke the notary\'s commission for eight years. And separately, unauthorized practice of immigration law can carry federal consequences under U.S. immigration law, including civil penalties and possible criminal charges. This is not a paperwork technicality — it is a serious enforcement area.',
  },
  {
    question: 'Can an Oklahoma notary translate immigration documents?',
    answer: 'Translation is a nonlegal service, and the ABA and USCIS guidance recognize that notaries (or other individuals) may translate documents as a lawful auxiliary service — so long as the translator is not also advising on the case. A translator must not be the person deciding which documents are needed or explaining legal strategy. If a notary offers translation, make sure the translation is complete and accurate and that the notary is not using the translation role as a cover for legal advice. USCIS requires certified translations of foreign-language documents, and the certification is typically a signed statement from the translator, not a notarization.',
  },
  {
    question: 'Can a notary prepare a USCIS form like the I-130 or I-485 for me?',
    answer: 'A notary cannot select the form for you, advise you to file it, or decide what to write in the answers — that is legal advice under the definition in 49 O.S. § 6(B), which explicitly covers "assistance in the selection of immigration forms" and "advice or counsel related to responses to information required on forms." What is permissible is typing information you provide onto a form as a clerical service, as long as the notary does not hold themselves out as qualified and the assistance is nominal. The line is clear: the applicant decides; the notary types or notarizes.',
  },
  {
    question: 'Who can legally represent me before USCIS?',
    answer: 'Under federal regulations (8 C.F.R. § 1292.1), representation before USCIS and immigration courts is limited to licensed attorneys, accredited representatives of recognized organizations, and a few other narrow categories — plus, for certain matters, law students and law graduates in accredited clinics. A notary public is not on that list. If someone who is not an attorney or accredited representative offers to "represent" you, file a G-28 on your behalf, or accompany you to an interview as your representative, that is a red flag for unauthorized practice. You may file forms yourself, and only people in the authorized categories can represent you.',
  },
  {
    question: 'What is the difference between a notary and an immigration consultant in Oklahoma?',
    answer: 'A notary public is a state-commissioned officer whose job is to verify signatures, administer oaths, and attest documents. An immigration consultant (in the handful of states that license them) is a non-attorney who may offer limited clerical help with immigration paperwork. Oklahoma does not have a licensed immigration consultant program — instead, 49 O.S. § 6(B) restricts what notaries can do and requires the disclaimer. In many Latin American countries, "notario publico" means a lawyer with broad powers; in the United States it does not. That gap is exactly why Oklahoma prohibits notaries from using that title.',
  },
  {
    question: 'How do I report a notary who is acting as a notario publico in Oklahoma?',
    answer: 'If you believe an Oklahoma notary is giving immigration legal advice, using the prohibited "notario publico" title, or defrauding clients, you can report them to the Oklahoma Secretary of State (which commissions notaries and revokes commissions), the Oklahoma Attorney General\'s office (consumer protection), and the U.S. Department of Justice or USCIS\'s disciplinary counsel for unauthorized practice of immigration law. Keep copies of any advertisements, contracts, receipts, and the notices (or missing notices) you received. For suspected fraud, contact your local district attorney as well. USCIS also publishes guidance on reporting immigration scams.',
  },
  {
    question: 'Can a notary notarize an affidavit in support of my immigration case?',
    answer: 'Yes. Affidavits — sworn written statements used to support immigration filings, such as affidavits from relatives, employers, or friends about a relationship or hardship — are routinely notarized. The notary\'s role is to verify the affiant\'s identity and administer the oath or affirmation under 49 O.S. § 113. That is a proper notarial act. What the notary cannot do is tell you whether the affidavit will help your case, what to say in it, or which affidavits to gather — those decisions belong to you and, if you have one, your attorney or accredited representative.',
  },
  {
    question: 'What should I ask before using a notary for immigration-related paperwork?',
    answer: 'Ask three questions: (1) "Are you a licensed attorney or DOJ-accredited representative?" — if not, they cannot represent you or advise you; (2) "Will you provide the 49 O.S. § 6(B) disclaimer in writing?" — Oklahoma requires it; and (3) "Are you only notarizing my signature and typing what I tell you?" — if they start choosing forms or drafting answers, stop and leave. Also ask about fees: notarial acts are capped at $5 each under 49 O.S. § 5, so large "immigration consultation" fees from a notary are a warning sign. When in doubt, contact a licensed immigration attorney or a recognized nonprofit with DOJ accreditation.',
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Oklahoma Notary for Immigration Forms: Legal Limits"
        pageDescription="Oklahoma notaries cannot give immigration legal advice or use notario publico. Learn the legal limits, required warnings, and safe notarization practices."
        pageUrl="https://justlegalsolutions.org/blog/oklahoma-notary-immigration-form-limits"
        siteName="Just Legal Solutions"
        reviewCount={112}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Oklahoma Notary for Immigration Forms: Legal Limits', item: 'https://justlegalsolutions.org/blog/oklahoma-notary-immigration-form-limits' }
        ]}
        articleDetails={{
          headline: 'Oklahoma Notary for Immigration Forms: Legal Limits',
          datePublished: '2026-08-27',
          dateModified: '2026-08-27',
          author: 'Just Legal Solutions Team',
          
          image: 'https://justlegalsolutions.org/images/jls-logo.webp'
        }}
        faqItems={faqs}
        keywords={[
          'process server Oklahoma',
          'legal support services',
          'court filing',
          'skip tracing',
          'notary public',
          'legal courier',
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
            Notary &amp; Immigration Compliance
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Oklahoma Notary for Immigration Forms: Legal Limits
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Under <strong>49 O.S. § 6(B)</strong>, Oklahoma notaries cannot hold themselves out as immigration
              experts, cannot use the Spanish title <strong>"notario publico,"</strong> and must give a{' '}
              <strong>written and verbal disclaimer</strong> when providing nonlegal help. Violations are
              misdemeanors with fines up to <strong>$1,000</strong> and <strong>8-year commission revocation</strong>.
            </p>

          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2026-08-27').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~12 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            A family in Oklahoma City pays $1,800 to a woman who calls herself a "notario publico" to "fix" a green card application. She takes their passports, fills out an I-485 with answers she invented, promises approval in 90 days, and disappears when USCIS sends a Request for Evidence. The family doesn't just lose the money — their case now carries misrepresentations they never made, and untangling it costs more than the original filing. This story repeats across Oklahoma every year, which is exactly why the state draws a hard legal line around notaries and immigration forms. Here's where that line sits, what a notary can and cannot do, and how to protect yourself.
          </p>

          <h2>The Hard Line: 49 O.S. § 6(B)</h2>
          <p>
            Oklahoma doesn't leave this to common sense or general "unauthorized practice of law" rules. The state wrote a specific statute just for notaries and immigration. <strong>49 O.S. § 6(B)</strong> says, in plain terms: no notary public — except a licensed attorney or someone otherwise authorized by law — may hold themselves out as having expertise in providing legal advice on any proceeding, filing, or action affecting the immigration or citizenship status of another person.
          </p>
          <p>
            The statute then defines "legal advice" broadly enough to catch the common tricks:
          </p>
          <ul>
            <li>Assistance in <strong>selecting immigration forms</strong> — telling you which form to file is legal advice</li>
            <li>Advice or counsel about <strong>responses to information required on forms</strong> — telling you what to write is legal advice</li>
            <li>Acting in a <strong>representative capacity</strong> to redress wrongs or secure benefits under immigration law — representing you is legal advice</li>
          </ul>
          <p>
            That definition closes the loopholes. A notary who says "you need Form I-130, not I-485" has crossed the line. A notary who says "answer yes to question 14" has crossed it. A notary who says "I'll handle your case" has crossed it. The only people who may do those things are licensed attorneys, DOJ-accredited representatives of recognized organizations, and the narrow categories of representatives listed in federal regulations.
          </p>

          <h2>The Mandatory Disclaimer: Verbal and Written</h2>
          <p>
            Here's a detail most people — and unfortunately, some notaries — don't know. When an Oklahoma notary provides <em>nonlegal</em> assistance on any immigration-related proceeding or filing, the notary must give you this exact notice, both verbally and in writing:
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-800 font-medium mb-1">The 49 O.S. § 6(B) Notice</p>
            <p className="text-blue-700 text-sm">"I am not a licensed attorney or representative of any government agency with authority over immigration or citizenship and, therefore, cannot offer legal advice about immigration or any other legal matters."</p>
          </div>
          <p>
            And if the notary operates a business or advertises in any language other than English, the notice must be given <strong>in both English and the other language</strong>. A Spanish-language ad that doesn't carry the disclaimer in Spanish is a violation. This requirement exists because the entire "notario" problem is a translation problem: in Mexico and most of Latin America, a notario público is a high-ranking attorney who drafts contracts, validates documents, and holds near-judicial authority. In Oklahoma, a notary public verifies signatures. The statute closes that gap by making the distinction explicit, in writing, in your language.
          </p>

          <h2>What a Notary CAN Still Do</h2>
          <p>
            The line isn't "notaries and immigration don't mix." There are legitimate, valuable services a notary performs in this space, and they're worth knowing so you can use them correctly:
          </p>
          <ul>
            <li><strong>Notarize signatures.</strong> Affidavits in support of immigration cases — from relatives, employers, neighbors — are sworn statements that need notarization. The notary verifies identity and administers the oath under 49 O.S. § 113.</li>
            <li><strong>Type what you tell them.</strong> Under federal guidance (8 C.F.R. § 1001.1), clerical assistance filling in blank spaces with information provided solely by the applicant is not "practice" — as long as compensation is nominal and the person doesn't hold themselves out as qualified. The applicant supplies the answers; the typist types.</li>
            <li><strong>Arrange translations.</strong> Getting documents translated (with the translator's certification) is an auxiliary service. The translator must not be steering the case.</li>
            <li><strong>Notarize translations and certifications.</strong> Where a signature on a translation certification or a supporting affidavit needs notarizing, that's a proper notarial act.</li>
          </ul>
          <p>
            Notice what's missing from that list: choosing forms, drafting answers, predicting outcomes, contacting USCIS, attending interviews as your representative, and collecting "case fees." None of those are notary functions.
          </p>

          <h2>The Penalties: What Happens to a Rogue Notary</h2>
          <p>
            Oklahoma backs the rule with teeth. Under <strong>49 O.S. § 6.1</strong>:
          </p>
          <ul>
            <li>A conviction for violating 49 O.S. § 6(B) is a <strong>misdemeanor</strong> punishable by a fine of up to <strong>$1,000</strong>.</li>
            <li>On a final district court judgment against the notary, the Secretary of State <strong>must revoke the notary's commission for eight years</strong>.</li>
          </ul>
          <p>
            Beyond the state statute, the federal layer looms. Unauthorized practice of immigration law can bring federal civil penalties under the immigration laws, and immigration document fraud — helping someone file a form with false statements — is a federal crime with fines and imprisonment. The people running "notario" shops in Oklahoma are not just bending state notary rules; they're often committing federal offenses. That's why this is one of the most aggressively enforced corners of notary law.
          </p>

          <h2>Spotting the Scam: Red Flags Before You Pay</h2>
          <p>
            Whether you're an immigrant looking for help or a community member watching out for neighbors, these warning signs should end the conversation:
          </p>
          <ul>
            <li>The word <strong>"notario"</strong> or <strong>"notario publico"</strong> in advertising — prohibited outright in Oklahoma</li>
            <li>Promises of <strong>guaranteed approval</strong>, "fast green cards," or timelines — no one can promise USCIS outcomes</li>
            <li>Flat fees of hundreds or thousands of dollars for "case handling" by someone who isn't an attorney or accredited representative</li>
            <li>Keeping your original documents "for safekeeping" — your passport and green card should stay with you</li>
            <li>Refusing to give the 49 O.S. § 6(B) disclaimer in writing</li>
            <li>Filling out forms <em>for</em> you, or telling you what to answer, rather than typing what you provide</li>
            <li>Asking you to sign blank forms or forms you can't read</li>
          </ul>
          <p>
            If you see these, walk away. A legitimate notary charges $5 per notarial act under 49 O.S. § 5 — not $1,800. Real immigration help comes from licensed attorneys or recognized nonprofits with DOJ accreditation, and their fees are transparent and tied to actual services.
          </p>

          <h2>What to Do If You've Been Harmed</h2>
          <p>
            If you or someone you know has already paid a "notario" or been given bad advice, you have options:
          </p>
          <ul>
            <li><strong>Stop using their services immediately.</strong> Do not let them file anything else or "fix" the damage.</li>
            <li><strong>Gather evidence.</strong> Ads, business cards, receipts, texts, the forms they prepared, and the disclaimer (or absence of it).</li>
            <li><strong>Report to the Oklahoma Secretary of State</strong> — they commission notaries and can revoke commissions.</li>
            <li><strong>Report to the Oklahoma Attorney General</strong> (consumer protection) and your local district attorney (possible criminal fraud).</li>
            <li><strong>Report to USCIS/DHS disciplinary counsel</strong> using Form EOIR-44 or emailing DisciplinaryCounsel@uscis.dhs.gov — unauthorized practitioners are a federal priority.</li>
            <li><strong>See a licensed immigration attorney</strong> before any further filing. If the rogue notary filed documents with errors, an attorney can assess whether USCIS has already acted on them and what corrections are possible.</li>
          </ul>
          <p>
            Timing matters. If a fraudulent filing is already in the system, every day of delay can compound the problem — so get professional advice before the situation worsens.
          </p>

          <h2>The Honest Notary's Role: Where We Fit</h2>
          <p>
            At Just Legal Solutions, our notaries handle the parts of immigration paperwork that are legitimately notarial: notarizing affidavits of support and sworn statements, witnessing signatures on supporting documents, and providing the 49 O.S. § 6(B) disclaimer in English and Spanish so every client knows exactly where our authority ends. We do not select your forms, draft your answers, or promise outcomes — because the law doesn't allow it, and because you deserve honesty over theater.
          </p>
          <p>
            If you need an affidavit notarized for a family petition, a sworn statement for an adjustment case, or a signature witnessed on a support document, our mobile notaries come to you across all 77 Oklahoma counties. And if your situation needs real representation, we'll say so plainly and point you toward a licensed immigration attorney — the same way we'd want someone to treat our own family.
          </p>

          <h2>Conclusion</h2>
          <p>
            Oklahoma's rules on notaries and immigration forms exist to protect people from a specific, well-documented form of exploitation. 49 O.S. § 6(B) draws the line: notaries verify signatures and provide clerical help, nothing more. The "notario publico" title is banned. The disclaimer is mandatory, in your language. The penalties — misdemeanor fines and eight-year commission revocation — are real and enforced. And the federal government stands behind all of it with its own enforcement power.
          </p>
          <p>
            If you're preparing immigration paperwork, use a notary for what a notary is for, and get legal help from someone authorized to give it. And if you need a signature notarized on a supporting affidavit anywhere in Oklahoma, call or text <a href="tel:5393676832" className="text-blue-600 hover:underline">(539) 367-6832</a> — we'll handle the notarization, give you the notice the law requires, and never pretend to be something we're not.
          </p>
          </article>
          
          <div className="mt-12">
            <AuthorBox />
          </div>

          {/* Related Guides */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Related Legal Guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/blog/notary-services-immigration-documents-i9-affidavits-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Immigration Docs</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Notary Immigration Documents: I-9 &amp; Affidavits</h3>
                <p className="text-sm text-gray-600">What Oklahoma notaries can handle for immigration-related documents.</p>
              </Link>
              <Link href="/blog/oklahoma-notary-vs-attorney-whats-difference" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Notary vs Attorney</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Oklahoma Notary vs. Attorney: What's the Difference?</h3>
                <p className="text-sm text-gray-600">Why a notary's stamp is not legal advice — and when you need a lawyer.</p>
              </Link>
            </div>
          </section>

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
            <h2>Conclusion</h2>
            <p>
            The legal limits on Oklahoma notaries and immigration forms aren't bureaucratic friction — they're a consumer protection statute written for a real, recurring harm. 49 O.S. § 6(B) says a notary cannot advise, select forms, or represent you; the "notario publico" title is banned; the disclaimer is mandatory in your language; and the penalties run from $1,000 fines to eight-year commission revocations, with federal enforcement behind them.
          </p>
          <p>
            Use notaries for notarial acts — signatures, oaths, affidavits — and get legal help from attorneys or accredited representatives. If you need a supporting affidavit notarized anywhere in Oklahoma, Just Legal Solutions is ready: call or text <a href="tel:5393676832" className="text-blue-600 hover:underline">(539) 367-6832</a>.
          </p>

          <p className="text-gray-700 italic mt-8">
            Need a notary for an immigration-related document in Oklahoma?{' '}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact Just Legal Solutions
            </Link>{' '}
            for professional, licensed support across all 77 Oklahoma counties. Call or text{' '}
            <a href="tel:5393676832" className="text-blue-600 hover:underline">(539) 367-6832</a>.
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
