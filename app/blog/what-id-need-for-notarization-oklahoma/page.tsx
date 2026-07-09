import type { Metadata } from "next";
import Link from "next/link";
import UnifiedSchema from "@/components/UnifiedSchema";
import { Navbar } from "@/components/ui/navbar";
import { AuthorBox } from "@/components/ui/author-box";
import { Footer } from "@/components/ui/footer";
import LocalPromoBanner from "@/components/ui/local-promo-banner";
import AeoNotaryHubLinks from '@/components/seo/aeo-notary-hub-links';

const faqs = [
  {
    question: "What forms of ID are acceptable for notarization in Oklahoma?",
    answer:
      "Oklahoma notaries accept several forms of government-issued photo ID including: an Oklahoma driver's license or state ID card, any valid U.S. state driver's license, U.S. passport (book or card), U.S. military ID (active duty, reserve, or retired), tribal identification cards from federally recognized tribes, and foreign passports stamped by U.S. Customs and Immigration. All IDs must be current (not expired) and include a photograph and signature under 49 O.S. \u00a7 6.",
  },
  {
    question: "Can I use an expired driver's license for notarization in Oklahoma?",
    answer:
      "No. Oklahoma law requires that identification presented for notarization be current and valid. An expired driver's license — even one that expired only a day ago — is not acceptable as primary identification. If your ID has expired, you must renew it before your notary appointment or use an alternative form of valid ID such as a current passport or military ID. If you have no valid photo ID, you may use two credible witnesses who personally know you and have their own valid IDs.",
  },
  {
    question: "What if I don't have a valid photo ID? Can I still get documents notarized?",
    answer:
      "Yes, under limited circumstances. Oklahoma law allows a notary to rely on the oath of two credible witnesses who personally know the signer and have their own valid government-issued photo IDs. Both witnesses must swear or affirm under oath that they personally know you and that you are who you claim to be. Not all notaries are experienced with this process, so it's important to discuss this option when scheduling your appointment.",
  },
  {
    question: "Can I use an out-of-state driver's license at an Oklahoma notary?",
    answer:
      "Yes. An out-of-state driver's license from any U.S. state or territory is acceptable as identification for notarization in Oklahoma, provided it is current (not expired) and includes a photograph and your signature. This is particularly useful for visitors, new residents who haven't yet obtained an Oklahoma license, or people with documents requiring notarization while traveling through Oklahoma.",
  },
  {
    question: "Are foreign passports accepted for notarization in Oklahoma?",
    answer:
      "Yes, foreign passports are accepted if they have been stamped by U.S. Customs and Immigration, are current and valid, and include a photograph and signature. If the passport is not in English, some notaries may require additional verification. For non-U.S. citizens without a stamped passport, two credible witnesses with valid U.S. IDs may be used as an alternative method of identification.",
  },
  {
    question: "What information does the notary record from my ID?",
    answer:
      "Under Oklahoma law, notaries are required to document specific details in their notary journal, including: the type of ID presented (e.g., driver's license, passport), the issuing authority (e.g., Oklahoma DPS, U.S. Department of State), the ID number, the date of issuance or expiration, and in some cases, a physical description of the signer. This information helps verify that proper identification procedures were followed if the notarization is ever questioned.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "What ID Do I Need for Notarization in Oklahoma? Requirements Guide",
  description: "Complete guide to Oklahoma notary ID requirements. Learn acceptable ID types, expired ID rules, alternatives for those without ID & foreign passport policies.",
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
  datePublished: "2025-04-10",
  dateModified: "2025-04-10",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://justlegalsolutions.org/blog/what-id-need-for-notarization-oklahoma",
  },
  keywords:
    "notary ID requirements, acceptable ID for notary, identification notarization Oklahoma, what ID for notary, expired ID notarization",
  other: {
    'article:published_time': '2026-05-23',
    'article:modified_time': '2026-05-23',
    'ai-content-type': 'article',
  },
};

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/what-id-need-for-notarization-oklahoma',
  },
  title: "What ID Do I Need for Notarization in Oklahoma? Requireme...",
  description:
    "Complete guide to Oklahoma notary ID requirements. Learn acceptable ID types, expired ID rules, alternatives for those without ID & foreign passport policies.",
  keywords:
    "notary ID requirements, acceptable ID for notary, identification notarization Oklahoma, what ID for notary, expired ID notarization",
  openGraph: {
    images: [{
      url: 'https://justlegalsolutions.org/image-pack/images/image-043-blog-hero.png',
      width: 1200,
      height: 630,
      alt: 'Just Legal Solutions blog — Oklahoma process serving and legal support',
    }],
    title:
      "What ID Do I Need for Notarization in Oklahoma? Requirements Guide",
    description:
      "Complete guide to Oklahoma notary ID requirements. Learn acceptable ID types, expired ID rules, alternatives for those without ID & foreign passport policies.",
    url: "https://justlegalsolutions.org/blog/what-id-need-for-notarization-oklahoma",
    type: "article",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What ID Do I Need for Notarization in Oklahoma? Requireme...',
    description: 'Complete guide to Oklahoma notary ID requirements. Learn acceptable ID types, expired ID rules, alternatives for those without ID & foreign passport policies.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-043-blog-hero.png'],
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <UnifiedSchema type="article" data={articleSchema} faqs={faqs} />

      {/* Hero */}
      <header className="bg-gradient-to-r from-[#1E2D78] to-[#4A3C7D] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-yellow-400">
            Oklahoma Notary Law
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            What ID Do I Need for Notarization in Oklahoma?
          </h1>
        <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
          <p className="text-gray-800">Oklahoma requires <strong>a current government-issued photo ID</strong> (driver's license, state ID, passport, or tribal ID) for notarization under Title 49 O.S. The ID must match the signer's name on the document. Just Legal Solutions notaries verify ID correctly every time — <strong>(539) 367-6832</strong>.</p>
        </div>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            A complete guide to acceptable identification for notarization in
            Oklahoma — including driver's licenses, passports, military IDs,
            and what to do if your ID has expired.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <a
              href="tel:5393676832"
              className="bg-yellow-500 text-[#1E2D78] font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
            >
              Call (539) 367-6832
            </a>
            <Link
              href="/notary"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#1E2D78] transition"
            >
              Notary Services
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <AuthorBox
          name="Just Legal Solutions"
          title="Oklahoma Licensed Notary & Process Server"
          date="April 10, 2025"
          readTime="10 min read"
        />

        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            You've got your document ready, your appointment scheduled, and then
            it hits you — <strong>will the notary accept my ID?</strong> It's one
            of the most common concerns we hear from clients, and for good reason.
            Without proper identification, a notary cannot legally proceed with
            your notarization. At{" "}
            <Link href="/" className="text-blue-600 underline">
              Just Legal Solutions
            </Link>
            , our licensed Oklahoma notaries have verified identities for
            thousands of signings — from routine affidavits to complex real
            estate closings — and we've encountered virtually every ID scenario
            imaginable. In this guide, we'll walk you through every form of
            identification accepted by Oklahoma notaries, explain what happens
            when your ID is expired or unavailable, and provide solutions for
            non-U.S. citizens and those without traditional photo ID. Let's make
            sure you walk into your notary appointment fully prepared.
          </p>

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            Oklahoma Notary ID Requirements Under State Law
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Oklahoma notaries are governed by{" "}
            <strong>Title 49 of the Oklahoma Statutes</strong>, specifically{" "}
            <strong>49 O.S. \u00a7 6</strong>, which outlines the duties and
            identification verification requirements for notaries public. Under
            this statute, an Oklahoma notary must verify the identity of every
            signer through what the law calls "satisfactory evidence" before
            performing any notarial act.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Satisfactory evidence</strong> is defined as:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>
              Identification documents — government-issued photo IDs that are
              current, valid, and contain the signer's photograph and signature
            </li>
            <li>
              The oath of a credible witness — two individuals who personally
              know the signer and can verify their identity under oath
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            This means that while a government-issued photo ID is the standard
            method of identification, it's not the only method. Oklahoma law
            provides alternatives for individuals who may not have traditional
            photo identification available.
          </p>

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            Accepted Forms of ID for Notarization in Oklahoma
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here's the complete list of identification documents that Oklahoma
            notaries can accept for identity verification:
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            1. Oklahoma Driver's License or State ID Card
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            An <strong>Oklahoma driver's license</strong> or{" "}
            <strong>Oklahoma state-issued identification card</strong> (issued by
            the Oklahoma Department of Public Safety) is the most commonly
            presented and universally accepted form of ID for notarization in
            Oklahoma. It must be current (not expired), include a clear
            photograph, and display the holder's signature.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Key requirements:</strong> Current and unexpired, issued by
            Oklahoma DPS or an equivalent agency, includes photograph and
            signature, and the physical description should reasonably match the
            signer's appearance.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            2. Out-of-State Driver's License
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            A valid driver's license from <strong>any other U.S. state or
            territory</strong> is fully acceptable for notarization in Oklahoma.
            This is especially common for new Oklahoma residents who haven't yet
            transferred their license, business travelers passing through the
            state, and individuals who maintain residency in another state.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The out-of-state license must meet the same criteria: current and
            unexpired, government-issued, includes a photograph and signature.
            Oklahoma notaries are trained to recognize valid out-of-state IDs
            and verify their authenticity.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            3. U.S. Passport (Book or Card)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            A <strong>valid U.S. passport</strong> — whether the traditional
            passport book or the passport card — is an excellent form of
            identification for notarization. Passports are widely trusted,
            difficult to forge, and accepted by notaries nationwide.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            One important note: while passports don't contain a physical
            address, they are still fully valid for notarization because the
            notary's primary concern is verifying your identity, not your
            residency. Your passport must be current — expired passports are not
            acceptable as primary ID.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            4. U.S. Military Identification Card
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            An active-duty, reserve, or retired <strong>U.S. military
            identification card</strong> is accepted by Oklahoma notaries.
            This includes Common Access Cards (CAC) for active-duty personnel,
            retiree ID cards, and dependent ID cards that include the signer's
            photograph and signature.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Military IDs are government-issued, highly secure, and widely
            recognized. However, some military IDs may not include a signature
            in all cases. If your military ID doesn't show a signature, the
            notary may ask for a secondary form of identification or may use
            credible witnesses as a backup method.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            5. Tribal Identification Card
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Oklahoma is home to 39 federally recognized Native American tribes,
            and <strong>tribal identification cards</strong> issued by federally
            recognized tribes are valid for notarization in Oklahoma. Major
            tribal IDs such as those issued by the Cherokee Nation, Choctaw
            Nation, Chickasaw Nation, Creek (Muscogee) Nation, and Seminole
            Nation are all accepted.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tribal IDs must include a photograph and signature and must be
            current. If you have questions about whether your specific tribal
            ID is accepted, call us at <strong>(539) 367-6832</strong> and we'll
            be happy to verify before your appointment.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            6. Foreign Passport
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            A <strong>foreign passport</strong> is acceptable for notarization
            in Oklahoma if it meets certain conditions: the passport must be
            current and valid, include a photograph and the holder's signature,
            and must bear a <strong>stamp from U.S. Customs and Border
            Protection</strong> indicating legal entry into the United States.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            If the passport is entirely in a non-English language, some notaries
            may request additional documentation or use the credible witness
            method as a secondary verification. At Just Legal Solutions, our
            experienced notaries are familiar with foreign passports and can
            work with you to ensure proper verification.
          </p>

                <p className="mb-8 text-gray-700">At Just Legal Solutions, with 50+ years of combined experience, we are licensed and bonded under Oklahoma Title 12 O.S. 158.1 and have served thousands of documents across all 77 Oklahoma counties.</p>
      <LocalPromoBanner />

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            Summary Table: Accepted ID Types for Oklahoma Notarization
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#1E2D78] text-white">
                  <th className="border p-3 text-left">ID Type</th>
                  <th className="border p-3 text-left">Accepted?</th>
                  <th className="border p-3 text-left">Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Oklahoma Driver's License</td>
                  <td className="border p-3 font-bold text-green-600">Yes</td>
                  <td className="border p-3">Current, unexpired, photo + signature</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Out-of-State Driver's License</td>
                  <td className="border p-3 font-bold text-green-600">Yes</td>
                  <td className="border p-3">Current, unexpired, photo + signature</td>
                </tr>
                <tr>
                  <td className="border p-3">U.S. Passport (Book or Card)</td>
                  <td className="border p-3 font-bold text-green-600">Yes</td>
                  <td className="border p-3">Current, unexpired, photo + signature</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">U.S. Military ID</td>
                  <td className="border p-3 font-bold text-green-600">Yes</td>
                  <td className="border p-3">Current, photo + signature preferred</td>
                </tr>
                <tr>
                  <td className="border p-3">Tribal ID (Federally Recognized)</td>
                  <td className="border p-3 font-bold text-green-600">Yes</td>
                  <td className="border p-3">Current, photo + signature</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Foreign Passport</td>
                  <td className="border p-3 font-bold text-green-600">Yes*</td>
                  <td className="border p-3">Current, U.S. entry stamp, photo + signature</td>
                </tr>
                <tr>
                  <td className="border p-3">Expired Driver's License</td>
                  <td className="border p-3 font-bold text-red-600">No</td>
                  <td className="border p-3">Must be renewed first</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Work ID / Company Badge</td>
                  <td className="border p-3 font-bold text-red-600">No</td>
                  <td className="border p-3">Not government-issued</td>
                </tr>
                <tr>
                  <td className="border p-3">Student ID</td>
                  <td className="border p-3 font-bold text-red-600">No</td>
                  <td className="border p-3">Not government-issued (unless state-issued college ID with photo)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mb-6 italic">
            *Foreign passports must be stamped by U.S. Customs and Immigration.
          </p>
        <p className="mb-6 text-gray-700">With 50+ years of combined experience, Just Legal Solutions is licensed and bonded under Oklahoma Title 12 O.S. 158.1 and has completed thousands of successful services across all 77 Oklahoma counties. Our guidance reflects Oklahoma statutes including 12 O.S. 2004 and relevant Title 49 O.S. requirements.</p>

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            What If My ID Is Expired? Options and Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            An expired ID is one of the most common issues we encounter. Under
            Oklahoma law, notaries <strong>cannot accept expired
            identification</strong> — period. Even if your driver's license
            expired just last week, a properly commissioned notary must decline
            to use it as primary identification. Here's what you can do:
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            Option 1: Use an Alternative Valid ID
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            If your driver's license expired but your <strong>U.S. passport
            is current</strong>, simply present your passport instead. Many
            people forget they have a second valid form of ID. Check whether
            your passport, military ID, or any other government-issued ID is
            still current.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            Option 2: Use Two Credible Witnesses
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have no valid photo ID at all, Oklahoma law allows two
            <strong>credible witnesses</strong> to verify your identity. Both
            witnesses must:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Personally know you (the signer)</li>
            <li>Have their own valid government-issued photo ID</li>
            <li>Be physically present at the notarization</li>
            <li>Swear or affirm under oath that they know you</li>
            <li>Not have a financial interest in the document</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            This method is perfectly legal and valid under 49 O.S. \u00a7 6,
            but not all notaries are experienced with it. Be sure to mention
            that you need credible witnesses when scheduling your appointment.
          </p>

          <h3 className="text-xl font-bold text-[#4A3C7D] mt-8 mb-3">
            Option 3: Renew Your ID First
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            If time permits, the simplest solution is to renew your expired ID
            before your notary appointment. Oklahoma DPS offers same-day
            driver's license renewal at most locations. If your notarization
            isn't urgent, this may be your best option.
          </p>

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            What If I Have No Photo ID At All?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For individuals who don't have any form of photo identification —
            perhaps due to financial hardship, recent theft, or being new to
            the country — the two-credible-witness method provides a path
            forward. Here's how it works:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
            <li>
              Find two adults (18+) who personally know you and are willing to
              serve as your credible witnesses.
            </li>
            <li>
              Ensure both witnesses have their own valid government-issued
              photo IDs.
            </li>
            <li>
              Schedule your notary appointment and inform the notary in
              advance that you'll be using credible witnesses.
            </li>
            <li>
              All parties — you and both witnesses — must be physically
              present at the notarization.
            </li>
            <li>
              Each witness will swear or affirm under oath that they
              personally know you and that you are who you claim to be.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Just Legal Solutions, our experienced notaries are comfortable
            with the credible witness process and can guide you through each
            step. Call us at <strong>(539) 367-6832</strong> to discuss your
            specific situation.
          </p>

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            Non-U.S. Citizens and Notarization ID Requirements
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You <strong>do not need to be a U.S. citizen</strong> to have a
            document notarized in Oklahoma. Notarization is about verifying
            identity, not citizenship. Non-U.S. citizens can use:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>
              A <strong>foreign passport</strong> with a U.S. Customs stamp
            </li>
            <li>
              A <strong>permanent resident card</strong> (green card) — while
              not explicitly listed in statute, many Oklahoma notaries accept
              these as valid government-issued photo ID
            </li>
            <li>
              A <strong>work authorization card</strong> (EAD) combined with
              the two-credible-witness method
            </li>
            <li>
              The <strong>credible witness method</strong> with two witnesses
              who have valid U.S. IDs
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you're a non-U.S. citizen and unsure whether your ID will be
            accepted, we recommend calling ahead. At Just Legal Solutions, we
            work with clients from all backgrounds and can confirm your
            identification options before your appointment.
          </p>

          <h2 className="text-2xl font-bold text-[#1E2D78] mt-12 mb-4">
            How Notaries Verify Your ID: The Process
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you present your ID to an Oklahoma notary, here's what they
            do:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
            <li>
              <strong>Examine the ID</strong> — The notary inspects the front
              and back of the ID, checking for signs of tampering,
              alterations, or forgery.
            </li>
            <li>
              <strong>Verify it's current</strong> — The notary checks the
              expiration date. Expired IDs are rejected.
            </li>
            <li>
              <strong>Compare the photo</strong> — The notary compares the
              photo on the ID to your physical appearance, looking for
              reasonable likeness.
            </li>
            <li>
              <strong>Confirm the name</strong> — The name on the ID must
              match the name on the document being notarized. Middle initials
              vs. full middle names may require clarification.
            </li>
            <li>
              <strong>Record in journal</strong> — Under Oklahoma law, the
              notary records the ID type, issuing authority, ID number, and
              other details in their notary journal.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-6">
            This careful process is why proper identification is so important —
            it protects both you and the notary from fraud and ensures your
            notarized document will be accepted by courts, title companies,
            and government agencies.
          </p>

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
            Need a Notary? Just Legal Solutions Has You Covered
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Proper identification is the foundation of every notarization, and
            understanding Oklahoma's ID requirements before your appointment
            saves time, reduces stress, and ensures your documents are
            processed without delay. Whether you have a current Oklahoma
            driver's license, an out-of-state license, a U.S. passport, a
            foreign passport, or need to use the credible witness method,{" "}
            <Link href="/notary" className="text-blue-600 underline">
              Just Legal Solutions
            </Link>{" "}
            has the experience to handle your notarization professionally and
            efficiently.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our mobile notary service brings licensed, bonded Oklahoma notaries
            directly to your location — your home, office, hospital, nursing
            home, or anywhere else — across all 77 Oklahoma counties. With{" "}
            <strong>over 50 years of combined legal services
            experience</strong>, a <strong>4.9-star client rating</strong>, and{" "}
            <strong>same-day availability</strong>, we're the trusted choice
            for notarization throughout Oklahoma.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Not sure if your ID will work? Call us at{" "}
            <a href="tel:5393676832" className="text-blue-600 font-bold">
              (539) 367-6832
            </a>{" "}
            before your appointment and we'll confirm your identification
            options at no charge. Or{" "}
            <Link href="/notary" className="text-blue-600 underline">
              schedule your mobile notary appointment online
            </Link>{" "}
            and we'll make sure you're fully prepared before we arrive.
          </p>

          <div className="bg-gradient-to-r from-[#1E2D78] to-[#4A3C7D] rounded-xl p-8 text-white text-center mt-12">
            <h3 className="text-2xl font-bold mb-3">
              Mobile Notary Across All 77 Oklahoma Counties
            </h3>
            <p className="mb-6 text-gray-200">
              Licensed & Bonded \u2022 All ID Types Accepted \u2022 Same-Day Available
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:5393676832"
                className="bg-yellow-500 text-[#1E2D78] font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition text-lg"
              >
                Call (539) 367-6832
              </a>
              <Link
                href="/notary"
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#1E2D78] transition text-lg"
              >
                Notary Services
              </Link>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mt-8">
            <strong>Related:</strong>{" "}
            <Link href="/blog/what-to-bring-notary-appointment-oklahoma" className="text-blue-600 underline">
              What to Bring to a Notary Appointment
            </Link>{" "}
            |{" "}
            <Link href="/blog/find-local-notary-near-me-oklahoma" className="text-blue-600 underline">
              Where to Find a Notary
            </Link>{" "}
            |{" "}
            <Link href="/blog/how-long-does-notarization-take-oklahoma" className="text-blue-600 underline">
              How Long Does Notarization Take
            </Link>{" "}
            |{" "}
            <Link href="/notary" className="text-blue-600 underline">
              Our Notary Services
            </Link>
          </p>
        </article>
              <section className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">Transparent Pricing</h2>
          <p className="text-gray-700">View our complete pricing for all service tiers on our <Link href="/pricing" className="text-blue-600 font-semibold">pricing page</Link>. No hidden fees — ever.</p>
        </section>
      </main>

      
          <AeoNotaryHubLinks />
          <Footer />
    </div>
  );
}
