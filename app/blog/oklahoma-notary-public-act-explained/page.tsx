import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: "The Oklahoma Notary Public Act Explained: Rules and Requi...",
  description: "Understand the Oklahoma Notary Public Act (Title 49 O.S.). Learn what notaries can and cannot do, qualifications, and recent law changes. Serving all 77 Oklahom",
  keywords:
    'Oklahoma Notary Public Act, notary laws Oklahoma, notary rules, Oklahoma notary qualifications, what notaries can do Oklahoma, electronic notarization Oklahoma, notary misconduct penalties',
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'The Oklahoma Notary Public Act Explained: Rules and Requirements',
    description:
      'Understand the Oklahoma Notary Public Act (Title 49 O.S.). Learn what notaries can and cannot do, qualifications, and recent law changes.',
    url: 'https://justlegalsolutions.org/blog/oklahoma-notary-public-act-explained',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'The Oklahoma Notary Public Act Explained: Rules and Requi...',
      },
    ],
  },
  alternates: {
    canonical:
      'https://justlegalsolutions.org/blog/oklahoma-notary-public-act-explained',
  },
  other: {
    'article:published_time': '2026-06-02',
    'article:modified_time': '2026-06-02',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary': 'Understand the Oklahoma Notary Public Act (Title 49 O.S.). Learn what notaries can and cannot do, qualifications, and recent law changes. Serving all 77 Oklahom Includes Oklahoma notary compliance context and practical document guidance.',
    'ai-key-facts': 'Oklahoma-specific legal process guidance; Licensed and bonded support; Service across 77 counties; Includes practical compliance steps',
  
  
  },
};

const faqs = [
  {
    question:
      'What is the Oklahoma Notary Public Act?',
    answer:
      'The Oklahoma Notary Public Act is the body of law codified in Title 49 of the Oklahoma Statutes that governs the appointment, duties, powers, and limitations of notaries public in the state. It establishes the qualifications to become a notary, the acts a notary is authorized to perform, prohibited activities, record-keeping requirements, and penalties for misconduct.',
  },
  {
    question:
      'Can an Oklahoma notary give legal advice?',
    answer:
      'No. Under the Oklahoma Notary Public Act, notaries are strictly prohibited from providing legal advice, preparing legal documents, or representing individuals in legal matters unless they are also licensed attorneys. A notary who crosses this line commits unauthorized practice of law, which is a misdemeanor offense in Oklahoma and can result in fines, imprisonment, and revocation of their notary commission.',
  },
  {
    question:
      'How do I verify that a notary is properly commissioned in Oklahoma?',
    answer: 'You can verify a notary\'s commission status through the Oklahoma Secretary of State\'s office. The Secretary of State maintains a public database of all active notary commissions in the state. You will need the notary\'s name or commission number to perform the search. This verification step is especially important for documents involving significant financial or legal transactions.',
  },
  {
    question:
      'Is electronic notarization legal in Oklahoma?',
    answer:
      'Yes. Oklahoma law permits electronic notarization (e-notarization) and remote online notarization (RON) under specific rules established by the Secretary of State. Notaries must complete additional training, use approved technology platforms, and comply with identity verification standards that exceed those required for traditional in-person notarizations.',
  },
  {
    question:
      'What happens if a notary commits misconduct in Oklahoma?',
    answer:
      'Notary misconduct in Oklahoma can result in civil liability, criminal penalties, and administrative sanctions. Under Title 49 O.S., a notary who knowingly falsifies an acknowledgment, performs a notarial act without the signer\'s presence, or engages in fraud can be charged with a misdemeanor punishable by fines up to the statutory maximum and potential imprisonment. The notary\'s commission may also be revoked by the Secretary of State.',
  },
  {
    question:
      'Does Just Legal Solutions offer notary services?',
    answer:
      'Yes. Just Legal Solutions provides professional notary services compliant with all requirements of the Oklahoma Notary Public Act. Our notaries are properly commissioned, bonded, and trained to handle acknowledgments, jurats, oaths, affirmations, and electronic notarizations. We offer mobile notary services across all 77 Oklahoma counties. Visit our notary services page for more information.',
  },
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>{' '}
          <ChevronRight className="inline w-4 h-4" />{' '}
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>{' '}
          <ChevronRight className="inline w-4 h-4" />{' '}
          <span>Oklahoma Notary Public Act</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          The Oklahoma Notary Public Act Explained: Rules and Requirements
        </h1>

        {/* Intro */}
        <p className="text-gray-600 mb-8 text-lg">
          The Oklahoma Notary Public Act forms the legal backbone for every
          notarization performed in the Sooner State. Whether you are executing
          a power of attorney, closing on real estate, or authenticating legal
          documents, understanding this law ensures your documents hold up in
          court. At Just Legal Solutions, our team brings over 50 years of
          combined experience in legal support services, and we have helped
          thousands of clients across all{' '}
          <Link href="/service-areas" className="text-blue-600 hover:underline">
            77 Oklahoma counties
          </Link>{' '}
          navigate notarization requirements with confidence. Licensed and
          bonded under Oklahoma Title 12 O.S. 158.1, we ensure every notarial
          act we perform complies fully with the Oklahoma Notary Public Act.
        </p>
        <p className="mb-6 text-gray-700">At Just Legal Solutions, we pair 50+ years of combined experience with licensed, bonded operations under Oklahoma Title 12 O.S. 158.1. Our team has served thousands of documents in all 77 Oklahoma counties, with procedure guidance grounded in 12 O.S. 2004 and Title 49 O.S.</p>

        {/* Section 1: Overview */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Overview of the Oklahoma Notary Public Act
          </h2>
          <p className="mb-4">
            The Oklahoma Notary Public Act is codified primarily in{' '}
            <strong>Title 49 of the Oklahoma Statutes</strong>, with additional
            provisions scattered throughout the Oklahoma Administrative Code.
            This body of law establishes the framework within which notaries
            public operate, defining everything from who may become a notary to
            what specific acts they may perform and what penalties they face for
            violations.
          </p>
          <p className="mb-4">
            The Act is administered by the{' '}
            <strong>Oklahoma Secretary of State</strong>, who receives
            applications, issues commissions, maintains records, and has
            authority to suspend or revoke commissions for misconduct. The law
            reflects Oklahoma&apos;s commitment to ensuring the integrity of
            notarized documents while providing accessible notarial services
            to residents across the state.
          </p>
          <p className="mb-4">
            Understanding this statute is essential not only for commissioned
            notaries but also for attorneys, real estate professionals,
            financial institutions, and private individuals who rely on
            notarized documents in their personal and business affairs.
          </p>
        </section>

        {/* Section 2: Qualifications */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Notary Qualifications and Requirements
          </h2>
          <p className="mb-4">
            To qualify for a notary commission in Oklahoma, an applicant must
            meet several statutory requirements. First, the applicant must be{' '}
            <strong>at least 18 years of age</strong> and a legal resident of
            Oklahoma. Non-residents may qualify if they are employed in Oklahoma
            and maintain a regular place of work in the state.
          </p>
          <p className="mb-4">
            Applicants must also demonstrate the ability to read and write
            English and must not have been convicted of a felony unless they
            have received a full pardon or had their civil rights restored. A
            completed application, accompanied by a{' '}
            <strong>$1,000 surety bond</strong>, must be filed with the
            Secretary of State. The bond protects the public against financial
            losses resulting from a notary&apos;s misconduct or negligence.
          </p>
          <p className="mb-4">
            Once approved, the applicant receives a four-year commission and
            must obtain an official notary seal or stamp before performing any
            notarial acts. The seal must include the notary&apos;s name exactly
            as commissioned, the words &quot;Notary Public,&quot; &quot;State of
            Oklahoma,&quot; and the commission expiration date.
          </p>
        </section>

        {/* Section 3: What Notaries Can Do */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            What Oklahoma Notaries Can Do
          </h2>
          <p className="mb-4">
            The Oklahoma Notary Public Act authorizes commissioned notaries to
            perform several specific acts. Understanding each of these acts is
            critical to ensuring your documents are properly executed and
            legally enforceable:
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Acknowledgments</h3>
          <p className="mb-4">
            An acknowledgment is a notarial act in which the signer personally
            appears before the notary, is identified, and declares that the
            signature on the document is voluntary and was executed for the
            purposes stated within it. Acknowledgments are commonly required
            for deeds, mortgages, powers of attorney, and other instruments
            affecting real or personal property.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Jurats</h3>
          <p className="mb-4">
            A jurat requires the signer to appear before the notary, sign the
            document in the notary&apos;s presence, and take an oath or
            affirmation that the contents of the document are true. Affidavits,
            depositions, and sworn statements typically require jurats. Unlike
            an acknowledgment, a jurat involves a truth-telling pledge about
            the document&apos;s contents.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">
            Oaths and Affirmations
          </h3>
          <p className="mb-4">
            Oklahoma notaries are authorized to administer oaths and
            affirmations. An oath is a solemn pledge to a higher power, while
            an affirmation is a solemn pledge on one&apos;s personal honor.
            Both carry the same legal weight and consequences for false
            statements. These are commonly used in court proceedings, depositions,
            and official certifications.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">
            Certified Copies
          </h3>
          <p className="mb-4">
            Under specific circumstances, Oklahoma notaries may certify copies
            of documents. However, notaries cannot certify copies of vital
            records (birth certificates, death certificates, marriage licenses)
            or public records that can only be certified by the issuing agency.
            Certified copy authority is limited to documents over which the
            notary has direct custody or that are presented for copy
            certification under specific statutory authority.
          </p>
        </section>

        {/* Section 4: What Notaries Cannot Do */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            What Oklahoma Notaries Cannot Do
          </h2>
          <p className="mb-4">
            The Oklahoma Notary Public Act imposes strict limitations on
            notarial authority. Violating these prohibitions can result in
            criminal charges, civil liability, and revocation of commission.
            Every notary—and every consumer of notary services—should be aware
            of these critical restrictions:
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">
            No Legal Advice
          </h3>
          <p className="mb-4">
            Oklahoma notaries are <strong>strictly prohibited</strong> from
            providing legal advice, interpreting legal documents, or advising
            signers on the legal consequences of a document. This restriction
            exists because notaries are not required to have legal training,
            and providing legal advice without a license constitutes the
            unauthorized practice of law—a misdemeanor under Oklahoma law.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">
            No Document Drafting
          </h3>
          <p className="mb-4">
            Notaries may not draft, prepare, or assist in the preparation of
            legal documents unless they are also licensed attorneys. This
            includes selecting forms for signers, filling in blanks on legal
            instruments, or offering language suggestions for contracts,
            wills, or other legal instruments. The line between notarization
            and document preparation is one that every ethical notary respects.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">
            No Legal Representation
          </h3>
          <p className="mb-4">
            A notary cannot represent any party in a legal proceeding, mediate
            disputes, or advocate for a signer&apos;s interests. The notary&apos;s
            role is strictly that of an impartial witness who verifies identity
            and willingness to sign—not an advocate or advisor.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">
            No Notarizing Without Personal Appearance
          </h3>
          <p className="mb-4">
            With the exception of remote online notarization conducted through
            approved platforms, Oklahoma law requires the signer to personally
            appear before the notary at the time of notarization. Notarizing
            based on a previously obtained signature, a photocopied signature,
            or the representation of another person that the signature is
            genuine constitutes fraud and subjects the notary to severe
            penalties.
          </p>
        </section>

        {/* Section 5: Liability and Penalties */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Liability and Penalties for Notary Misconduct
          </h2>
          <p className="mb-4">
            The Oklahoma Notary Public Act establishes a comprehensive penalty
            framework for notaries who violate their duties. Misconduct can
            expose a notary to three categories of consequences:
            <strong> civil liability</strong>,{' '}
            <strong>criminal prosecution</strong>, and{' '}
            <strong>administrative sanctions</strong>.
          </p>
          <p className="mb-4">
            <strong>Civil liability</strong> arises when a notary&apos;s
            negligence or intentional misconduct causes financial harm to
            another party. The notary&apos;s $1,000 surety bond provides a
            source of recovery for injured parties, but a notary can be sued
            personally for damages exceeding the bond amount. Common scenarios
            include notarizing a forged signature, failing to verify identity
            properly, or notarizing outside the scope of statutory authority.
          </p>
          <p className="mb-4">
            <strong>Criminal penalties</strong> apply to more serious
            violations. Knowingly falsifying an acknowledgment, certifying a
            false document, or performing a notarial act with intent to defraud
            can result in misdemeanor or felony charges under Oklahoma law.
            Penalties may include substantial fines and imprisonment depending
            on the severity of the offense.
          </p>
          <p className="mb-4">
            <strong>Administrative sanctions</strong> include suspension or
            revocation of the notary&apos;s commission by the Secretary of
            State, mandatory retraining, and public censure. The Secretary has
            broad discretion to investigate complaints and impose sanctions
            proportionate to the violation.
          </p>
        </section>

        {/* Section 6: Record-Keeping */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Notary Record-Keeping Requirements
          </h2>
          <p className="mb-4">
            While Oklahoma does not currently mandate that notaries maintain a
            journal of their acts, the Oklahoma Notary Public Act strongly
            encourages it, and professional best practices demand it. A notary
            journal serves as the notary&apos;s primary defense against
            allegations of misconduct and provides a reliable record of every
            notarial act performed.
          </p>
          <p className="mb-4">
            A well-maintained journal should record the date and time of each
            notarization, the type of notarial act, a description of the
            document, the signer&apos;s name and address, the method of
            identification used, and the fee charged. For electronic
            notarizations, additional data including the technology platform
            used and the authentication method must be documented.
          </p>
          <p className="mb-4">
            At Just Legal Solutions, all our notaries maintain detailed journals
            for every transaction. This documentation supports our commitment
            to transparency and accountability, and it provides our clients
            with peace of mind knowing that a complete record exists for every
            notarization we perform.
          </p>
        </section>

        {/* Section 7: Electronic Notarization */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Electronic Notarization Provisions
          </h2>
          <p className="mb-4">
            Oklahoma has embraced the digital transformation of notarial
            services through statutes authorizing both{' '}
            <strong>electronic notarization</strong> (e-notarization) and{' '}
            <strong>remote online notarization</strong> (RON). These provisions
            allow notaries to perform notarial acts on electronic documents
            using digital signatures and seals, and in the case of RON, to
            interact with signers through secure audio-video technology rather
            than requiring physical presence.
          </p>
          <p className="mb-4">
            To perform electronic or remote notarizations, Oklahoma notaries
            must complete additional registration with the Secretary of State,
            use technology platforms that meet state security standards, and
            implement multi-factor identity verification processes for signers.
            Remote online notarizations must also be recorded and retained for
            a specified period to ensure auditability.
          </p>
          <p className="mb-4">
            These provisions have significantly expanded access to notarial
            services for Oklahomans in rural areas, individuals with mobility
            limitations, and parties engaged in interstate transactions. At Just
            Legal Solutions, we offer{' '}
            <Link href="/notary" className="text-blue-600 hover:underline">
              electronic notarization services
            </Link>{' '}
            that comply fully with Oklahoma&apos;s statutory requirements,
            providing convenience without compromising legal validity.
          </p>
        </section>

        {/* Section 8: Recent Law Changes */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Recent Law Changes Affecting Oklahoma Notaries
          </h2>
          <p className="mb-4">
            Oklahoma&apos;s notary laws have evolved significantly in recent
            years, driven by technological advancement and the growing demand
            for remote services. The most impactful changes have involved the
            expansion of remote online notarization authority and the
            modernization of identification requirements.
          </p>
          <p className="mb-4">
            Recent amendments have clarified that RON may be used for a broader
            range of document types, including real estate transactions,
            estate planning documents, and financial instruments. The
            legislature has also updated requirements for signer identity
            verification, allowing for knowledge-based authentication (KBA)
            and credential analysis as approved methods in remote settings.
          </p>
          <p className="mb-4">
            Additionally, Oklahoma has aligned its notary statutes more closely
            with the Revised Uniform Law on Notarial Acts (RULONA), creating
            greater consistency with other states and facilitating interstate
            recognition of notarial acts. These changes reflect
            Oklahoma&apos;s commitment to maintaining a modern, efficient, and
            secure notarial system.
          </p>
          <p className="mb-4">
            For the most current information on notary laws, always consult the
            Oklahoma Secretary of State&apos;s website or work with a
            professional notary service like Just Legal Solutions that stays
            current on all statutory changes.
          </p>
        </section>

        {/* Section 9: Verify Commission */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            How to Verify a Notary&apos;s Commission in Oklahoma
          </h2>
          <p className="mb-4">
            Before entrusting important documents to a notary, it is wise to
            verify that their commission is active and in good standing. The
            Oklahoma Secretary of State provides a free online search tool
            where anyone can look up a notary by name or commission number.
          </p>
          <p className="mb-4">
            To verify a commission, visit the Secretary of State&apos;s website
            and navigate to the notary search portal. Enter the notary&apos;s
            full name as it appears on their seal or commission certificate.
            The search results will show the commission number, issuance date,
            and expiration date. If the commission has expired or been
            revoked, the search will reflect that status.
          </p>
          <p className="mb-4">
            This verification step is particularly important for documents that
            will be recorded with county clerks, submitted to courts, or used
            in financial transactions. An expired or invalid commission can
            render a notarization void, creating significant legal and
            financial complications down the road.
          </p>
        </section>

        {/* Section 10: JLS Notary Compliance */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Just Legal Solutions&apos; Notary Compliance
          </h2>
          <p className="mb-4">
            At Just Legal Solutions, compliance with the Oklahoma Notary Public
            Act is not merely a legal requirement—it is a core operating
            principle. Every notary on our team maintains an active commission
            in good standing, carries the required surety bond, and undergoes
            ongoing training to stay current with statutory changes and best
            practices.
          </p>
          <p className="mb-4">
            We have performed notarizations for thousands of clients across all
            77 Oklahoma counties, handling everything from simple
            acknowledgments to complex real estate closings and estate planning
            document executions. Our{' '}
            <Link href="/notary" className="text-blue-600 hover:underline">
              notary services
            </Link>{' '}
            are available both in-person at our Tulsa location and through our
            mobile notary program, which brings professional notarization
            directly to homes, offices, hospitals, and correctional facilities
            statewide.
          </p>
          <p className="mb-4">
            For clients who need the added convenience of electronic
            notarization, we offer fully compliant e-notary and remote online
            notarization services using state-approved technology platforms.
            Whether you are an attorney managing a high-volume practice, a
            business executing contracts, or an individual handling personal
            legal matters, our notary team ensures every document is executed
            in strict compliance with Oklahoma law.
          </p>
          <p className="mb-4">
            Transparent pricing, professional service, and unwavering
            compliance are the hallmarks of our notary program. To learn more
            about our{' '}
            <Link href="/pricing" className="text-blue-600 hover:underline">
              current rates
            </Link>{' '}
            or to schedule a notarization, contact us today.
          </p>
        </section>

        {/* RELATED ARTICLES */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <Link
                href="/blog/oklahoma-mobile-notary-guide"
                className="text-blue-600 hover:underline"
              >
                Oklahoma Mobile Notary Guide
              </Link>
            </li>
            <li>
              <Link
                href="/blog/oklahoma-notary-vs-attorney-whats-difference"
                className="text-blue-600 hover:underline"
              >
                Oklahoma Notary vs Attorney: What&apos;s the Difference?
              </Link>
            </li>
            <li>
              <Link
                href="/blog/oklahoma-power-of-attorney-notarization"
                className="text-blue-600 hover:underline"
              >
                Oklahoma Power of Attorney Notarization
              </Link>
            </li>
            <li>
              <Link
                href="/blog/oklahoma-real-estate-closing-notary"
                className="text-blue-600 hover:underline"
              >
                Oklahoma Real Estate Closing Notary
              </Link>
            </li>
          </ul>
        </section>

        
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related Oklahoma Resources</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><Link href="/blog/mobile-notary-tulsa-guide" className="text-blue-600 hover:underline">Mobile Notary Guide for Tulsa and Oklahoma</Link></li>
            <li><Link href="/blog/ron-vs-mobile-notary-oklahoma" className="text-blue-600 hover:underline">RON vs Mobile Notary in Oklahoma</Link></li>
            <li><Link href="/blog/how-to-apostille-document-oklahoma" className="text-blue-600 hover:underline">How to Apostille a Document in Oklahoma</Link></li>
          </ul>
        </section>

        {/* FAQ SECTION */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-medium text-lg">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* CTA SECTION */}
        <section className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Need a Compliant Oklahoma Notary?
          </h2>
          <p className="mb-4">
            Don&apos;t leave your important documents to chance. With over 50
            years of combined experience, Just Legal Solutions provides
            professional notary services that fully comply with the Oklahoma
            Notary Public Act. From traditional in-person notarizations to
            remote online notarization, we have the expertise and technology
            to handle all your notarial needs across all 77 Oklahoma counties.
          </p>
          <p className="mb-4">
            For current pricing on all our services,{' '}
            <Link href="/pricing" className="text-blue-600 font-semibold">
              view our pricing page
            </Link>
            .
          </p>
          <p className="font-semibold">
            Call{' '}
            <a href="tel:539-367-6832" className="text-blue-600">
              (539) 367-6832
            </a>{' '}
            or{' '}
            <Link href="/" className="text-blue-600">
              request service online
            </Link>
            . We serve all 77 Oklahoma counties.
          </p>
        </section>
      </main>

            <p className="mb-8 text-gray-700">At Just Legal Solutions, with 50+ years of combined experience, we are licensed and bonded under Oklahoma Title 12 O.S. 158.1 and have served thousands of documents across all 77 Oklahoma counties.</p>
      <LocalPromoBanner />
      <AuthorBox />
      <Footer />

      <UnifiedSchema
        pageType="article"
        title="The Oklahoma Notary Public Act Explained: Rules and Requirements"
        description="Understand the Oklahoma Notary Public Act (Title 49 O.S.). Learn what notaries can and cannot do, qualifications, and recent law changes."
        url="https://justlegalsolutions.org/blog/oklahoma-notary-public-act-explained"
        articleDetails={{
          headline: 'The Oklahoma Notary Public Act Explained: Rules and Requirements',
          datePublished: '2026-06-02',
          dateModified: '2026-06-02',
          author: 'Just Legal Solutions Team',
          image: 'https://justlegalsolutions.org/images/jls-logo.webp',
        }}
        faqs={faqs}
        image="https://justlegalsolutions.org/images/jls-logo.webp"
      />
    </div>
  );
}
