import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'How to Apostille a Document in Oklahoma (2026)',
  description: 'Step-by-step guide to apostilling documents in Oklahoma. Processing times, $25 fee, common mistakes. Call (539) 367-6832.',
  keywords: 'apostille oklahoma, how to apostille document oklahoma, oklahoma secretary of state apostille, apostille fee oklahoma, hague apostille convention oklahoma, notarize document for apostille, apostille birth certificate oklahoma, apostille processing time oklahoma',
  authors: [{ name: 'Just Legal Solutions' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'How to Apostille a Document in Oklahoma | Step-by-Step 2026',
    description: 'Complete guide to getting an apostille in Oklahoma. Processing times, fees, requirements, and common mistakes to avoid.',
    url: 'https://justlegalsolutions.org/blog/how-to-apostille-document-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-043-blog-hero.webp', width: 1200, height: 630, alt: 'How to Apostille a Document in Oklahoma' }],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/blog/how-to-apostille-document-oklahoma' },
  other: {
    'article:published_time': '2026-04-07',
    'article:modified_time': '2026-04-07',
    'article:author': 'Joseph Iannazzi',
    'ai-content-type': 'article',
    'ai-summary': 'Step-by-step guide to apostilling documents in Oklahoma. Covers process, $25 fee, Secretary of State requirements, common mistakes, and which documents qualify under the Hague Convention.',
    'ai-key-facts': 'Oklahoma apostille fee $25 per document; Secretary of State at 421 NW 13th St Suite 210 OKC; 1-2 business day processing; 120+ Hague Convention countries; Just Legal Solutions offers apostille assistance at (539) 367-6832',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'How much does an apostille cost in Oklahoma?',
    answer: 'The Oklahoma Secretary of State charges $25 per apostille. If you use a service provider like Just Legal Solutions to handle the process, additional service and shipping fees may apply. Payment is by check, money order, or credit card (in person).'
  },
  {
    question: 'How long does it take to get an apostille in Oklahoma?',
    answer: 'Standard processing takes 1-2 business days once the Secretary of State receives your documents. Add mailing time for mail-in requests. Rush and same-day processing may be available for an additional fee. Total turnaround for mailed requests is typically 5-7 business days.'
  },
  {
    question: 'What documents can be apostilled in Oklahoma?',
    answer: 'Documents that originate in Oklahoma can be apostilled: certified birth/death certificates from OSDH, marriage certificates from county clerks, court documents with court seals, documents notarized by Oklahoma notaries, and corporate documents certified by the Secretary of State. Federal documents (FBI checks, federal court docs) require U.S. Department of State authentication instead.'
  },
  {
    question: 'Do I need to notarize a document before getting an apostille?',
    answer: 'It depends on the document type. Vital records need certified copies from the issuing authority. Private documents like affidavits, powers of attorney, and contracts must be notarized by an Oklahoma notary before they can be apostilled. Court documents need certified copies from the court clerk.'
  },
  {
    question: 'Can I apostille a document for use in China or the UAE?',
    answer: 'No. China, the UAE, Saudi Arabia, Egypt, and several other countries are NOT members of the Hague Apostille Convention. Documents for non-member countries require embassy or consulate legalization — a separate, more complex process. Check the Hague Conference website for the full member list.'
  },
  {
    question: 'Can I get an apostille for a document notarized in another state?',
    answer: 'No. The Oklahoma Secretary of State can only apostille documents that originate in Oklahoma — meaning notarized by an Oklahoma notary, issued by an Oklahoma court, or certified by an Oklahoma government agency. Documents notarized in Texas, for example, must be apostilled by the Texas Secretary of State.'
  },
  {
    question: 'What if my apostille request gets rejected?',
    answer: 'Common rejection reasons include: uncertified vital records (photocopies), incomplete notarization (missing seal or signature), expired notary commission, or documents notarized outside Oklahoma. Fix the identified issue and resubmit. Just Legal Solutions can review your documents before submission to prevent rejections.'
  },
  {
    question: 'Does Just Legal Solutions handle the entire apostille process?',
    answer: 'Yes. We offer full-service apostille assistance including document review, notarization if needed, submission to the Secretary of State, and return shipping. Call (539) 367-6832 to get started.'
  }
];

export default function HowToApostilleDocumentOklahoma() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Get an Apostille on a Document in Oklahoma",
          "description": "Step-by-step guide to apostilling documents through the Oklahoma Secretary of State for international use.",
          "totalTime": "PT168H",
          "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "25" },
          "step": [
            { "@type": "HowToStep", "name": "Notarize Your Document", "text": "Most documents must be notarized by an Oklahoma notary public before apostille. Contact Just Legal Solutions for same-day mobile notary service � (539) 367-6832." },
            { "@type": "HowToStep", "name": "Complete the Apostille Request Form", "text": "Download the apostille request form from the Oklahoma Secretary of State website (sos.ok.gov). Complete with your contact info and document details." },
            { "@type": "HowToStep", "name": "Submit to Oklahoma Secretary of State", "text": "Mail or walk in your notarized document + request form +  fee per document. Walk-in available at 421 NW 13th St, Oklahoma City, OK 73103." },
            { "@type": "HowToStep", "name": "Wait for Processing", "text": "Walk-in: same-day processing. Mail: 5�10 business days. Expedite available for additional fee." },
            { "@type": "HowToStep", "name": "Receive Your Apostilled Document", "text": "The Secretary of State attaches the apostille certificate to your document, making it valid in all 120+ Hague Convention countries." }
          ]
        })
      }} />

      <UnifiedSchema
        pageType="article"
        pageTitle="How to Apostille a Document in Oklahoma | Step-by-Step 2026"
        pageDescription="Learn how to apostille a document in Oklahoma. Step-by-step guide covering processing times, $25 fee, common mistakes, and which documents qualify."
        pageUrl="https://justlegalsolutions.org/blog/how-to-apostille-document-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={156}
        services={['Apostille Services', 'Notary Services', 'Document Authentication']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'How to Apostille a Document in Oklahoma', url: '/blog/how-to-apostille-document-oklahoma' },
        ]}
        articleDetails={{
          headline: 'How to Apostille a Document in Oklahoma | Step-by-Step 2026',
          author: 'Joseph Iannazzi',
          datePublished: '2026-04-07',
          dateModified: '2026-04-07',
          image: 'https://justlegalsolutions.org/image-pack/images/image-043-blog-hero.webp'
        }}
        faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
        keywords={['apostille oklahoma', 'oklahoma secretary of state apostille', 'apostille fee oklahoma', 'hague apostille convention']}
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
            <span className="text-white font-medium">How to Apostille a Document in Oklahoma</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            How to Apostille a Document in Oklahoma — Step by Step
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">By</span>
              <span className="text-white font-semibold text-sm">Joseph Iannazzi</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">Published:</span>
              <span className="text-white font-semibold text-sm">April 7, 2026</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-blue-200 text-sm">Reading Time:</span>
              <span className="text-white font-semibold text-sm">~15 min</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">

            <p>Need to use an Oklahoma document in a foreign country? Whether you&apos;re getting married abroad, adopting a child internationally, or expanding your business overseas, you&apos;ll likely need an <strong>apostille</strong> — a certificate that authenticates your document for use in countries that are members of the Hague Apostille Convention.</p>

            <p>This guide walks you through the entire Oklahoma apostille process step by step, including what documents qualify, how much it costs, common mistakes to avoid, and how Just Legal Solutions can help.</p>

            {/* Quick Answer Box */}
            <div className="not-prose bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h2 className="text-lg font-bold text-blue-900 mb-3">Quick Answer: How to Get an Apostille in Oklahoma</h2>
              <ol className="space-y-2 text-blue-800">
                <li className="flex gap-2"><span className="font-bold">1.</span> Ensure your document is properly notarized or certified by the issuing authority</li>
                <li className="flex gap-2"><span className="font-bold">2.</span> Complete the Oklahoma Secretary of State&apos;s apostille request form</li>
                <li className="flex gap-2"><span className="font-bold">3.</span> Submit your document with the <strong>$25 fee</strong> per apostille</li>
                <li className="flex gap-2"><span className="font-bold">4.</span> Allow <strong>1-2 business days</strong> for processing (rush available)</li>
              </ol>
              <p className="text-blue-700 text-sm mt-3">The Oklahoma Secretary of State&apos;s office at 421 NW 13th St, Suite 210, Oklahoma City issues apostilles for documents used in 120+ Hague Convention countries.</p>
            </div>

            <h2>What Is an Apostille?</h2>
            <p>An <strong>apostille</strong> is a certificate that authenticates the origin of a public document — such as a birth certificate, court order, or notarized document — for use in foreign countries that are members of the <a href="https://www.hcch.net/en/instruments/conventions/full-text/?cid=41" target="_blank" rel="noopener noreferrer">Hague Apostille Convention</a>.</p>
            <p>The apostille certifies three things:</p>
            <ul>
              <li>The <strong>authenticity of the signature</strong> on the document</li>
              <li>The <strong>capacity</strong> in which the person signing acted</li>
              <li>The <strong>identity of any seal or stamp</strong> the document bears</li>
            </ul>
            <p><strong>Important:</strong> An apostille does NOT certify the content of the document — only the authenticity of the signature and seal. The Hague Convention, established in 1961, simplified international document authentication by replacing the old chain-of-certifications process with a single apostille certificate. Over 120 countries are now members.</p>

            <h2>When Do You Need an Apostille?</h2>
            <p>You need an Oklahoma apostille when you have a document issued or notarized in Oklahoma that must be used in a Hague Convention member country.</p>

            <h3>Personal Matters</h3>
            <ul>
              <li><strong>Marriage abroad</strong> — birth certificates, single-status affidavits</li>
              <li><strong>International adoption</strong> — home study documents, background checks, financial affidavits</li>
              <li><strong>Dual citizenship</strong> — birth certificates, marriage certificates, naturalization documents</li>
              <li><strong>Studying overseas</strong> — diplomas, transcripts, enrollment verification</li>
              <li><strong>Working abroad</strong> — background checks, professional licenses, employment verification</li>
              <li><strong>Inheritance matters</strong> — death certificates, wills, probate documents</li>
            </ul>

            <h3>Business Matters</h3>
            <ul>
              <li><strong>International contracts</strong> — corporate documents, powers of attorney</li>
              <li><strong>Foreign business registration</strong> — articles of incorporation, certificates of good standing</li>
              <li><strong>Patent/trademark filings</strong> — intellectual property documents</li>
              <li><strong>Import/export licenses</strong> — business authorization documents</li>
            </ul>

            <h3>Popular Destination Countries Requiring Apostilles</h3>
            <p>Mexico, Canada, most European countries (Spain, Italy, Germany, France), Australia, New Zealand, Japan, South Korea, Brazil, Argentina, Colombia, India, and the Philippines — among 120+ member nations.</p>

            <h2>Documents That Can Be Apostilled in Oklahoma</h2>

            <h3>Vital Records</h3>
            <ul>
              <li><strong>Birth certificates</strong> — certified copies from Oklahoma State Department of Health (OSDH)</li>
              <li><strong>Death certificates</strong> — certified copies from OSDH</li>
              <li><strong>Marriage certificates</strong> — certified copies from county court clerk</li>
              <li><strong>Divorce decrees</strong> — certified copies from district court</li>
            </ul>

            <h3>Notarized Documents</h3>
            <ul>
              <li>Affidavits, powers of attorney, consent forms</li>
              <li>Financial documents, contracts</li>
              <li>Must be notarized by a currently commissioned <strong>Oklahoma notary public</strong></li>
            </ul>

            <h3>Court &amp; Corporate Documents</h3>
            <ul>
              <li>Judgments, orders, court filings — certified copies with court seal</li>
              <li>Articles of incorporation, certificates of good standing — certified by Secretary of State</li>
              <li>Corporate resolutions, bylaws — must be notarized</li>
            </ul>

            <h3>Educational Documents</h3>
            <ul>
              <li>Diplomas, transcripts, enrollment verification — notarized by school registrar or official</li>
            </ul>

            {/* Warning Box */}
            <div className="not-prose bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
              <div className="flex gap-3">
                <span className="text-xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">Documents That CANNOT Be Apostilled in Oklahoma</h3>
                  <ul className="space-y-1.5 text-amber-800 text-sm">
                    <li>❌ Photocopies of vital records (must be certified copies)</li>
                    <li>❌ Documents notarized by non-Oklahoma notaries (use that state&apos;s process)</li>
                    <li>❌ Documents with expired notary commissions (must be re-notarized)</li>
                    <li>❌ Federal documents: FBI checks, federal court docs, IRS, Social Security (use U.S. Dept of State)</li>
                    <li>❌ Documents for non-Hague countries like China, UAE, Saudi Arabia (need embassy legalization)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Step-by-Step Oklahoma Apostille Process</h2>

            <h3>Step 1: Prepare Your Document</h3>
            <p><strong>For vital records:</strong> Obtain a certified copy from the appropriate authority — OSDH for birth/death certificates, county court clerk for marriage certificates, district court for divorce decrees.</p>
            <p><strong>For notarized documents:</strong> Have your document notarized by an Oklahoma notary public. Ensure the notarization includes a complete notarial certificate (acknowledgment or jurat), notary signature, clear seal/stamp, and commission information.</p>
            <p><strong>For court documents:</strong> Obtain a certified copy from the court clerk with the court seal and clerk signature.</p>

            <h3>Step 2: Complete the Request Form</h3>
            <p>Download and complete the <strong>Request for Apostille/Certificate of Authentication</strong> form from the Oklahoma Secretary of State website. You&apos;ll need: the destination country, your contact information, document type and description, number of apostilles requested.</p>

            <h3>Step 3: Prepare Your Submission</h3>
            <p>Include:</p>
            <ul>
              <li>Original document(s) to be apostilled</li>
              <li>Completed request form</li>
              <li>Payment: <strong>$25 per apostille</strong> (check or money order payable to &quot;Oklahoma Secretary of State&quot;)</li>
              <li>Prepaid return envelope (if mailing)</li>
            </ul>

            <h3>Step 4: Submit Your Request</h3>
            <p><strong>By mail:</strong></p>
            <p>Oklahoma Secretary of State, Apostille Section<br />421 N.W. 13th Street, Suite 210<br />Oklahoma City, OK 73103</p>
            <p><strong>In person:</strong> Same address. Monday–Friday, 8:00 AM–4:30 PM. Credit card accepted for in-person payments.</p>
            <p><strong>Through a service provider:</strong> Just Legal Solutions handles the entire process — document review, notarization if needed, submission, and return shipping. Call <a href="tel:+15393676832">(539) 367-6832</a>.</p>

            <h3>Step 5: Receive Your Apostille</h3>
            <p>You&apos;ll receive your original document(s) with the attached apostille certificate (an 8.5&quot; × 11&quot; page) bearing the Secretary of State seal and signature. <strong>Standard processing: 1-2 business days.</strong> Rush/same-day may be available for an additional fee.</p>

            <h2>How Long Does an Oklahoma Apostille Take?</h2>
            <div className="not-prose bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-bold text-blue-900 mb-3">Processing Timeline</h3>
              <div className="space-y-2 text-blue-800">
                <div className="flex justify-between border-b border-blue-100 pb-2"><span>Secretary of State processing</span><span className="font-bold">1-2 business days</span></div>
                <div className="flex justify-between border-b border-blue-100 pb-2"><span>Mail-in total turnaround</span><span className="font-bold">5-7 business days</span></div>
                <div className="flex justify-between border-b border-blue-100 pb-2"><span>In-person (walk-in)</span><span className="font-bold">Same day or next day</span></div>
                <div className="flex justify-between"><span>Rush processing</span><span className="font-bold">Available for additional fee</span></div>
              </div>
            </div>

            <h2>Common Mistakes That Delay Your Apostille</h2>
            <div className="not-prose bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6 my-8">
              <h3 className="font-bold text-red-900 mb-3">Avoid These Errors</h3>
              <ul className="space-y-2 text-red-800 text-sm">
                <li><strong>1. Submitting photocopies instead of certified copies</strong> — Vital records must be certified originals from the issuing authority.</li>
                <li><strong>2. Using an out-of-state notary</strong> — Oklahoma&apos;s Secretary of State can only apostille documents notarized by Oklahoma notaries.</li>
                <li><strong>3. Incomplete notarization</strong> — Missing seals, signatures, or notarial certificates will cause rejection.</li>
                <li><strong>4. Expired notary commission</strong> — Check that your notary&apos;s commission was current at the time of notarization.</li>
                <li><strong>5. Sending federal documents to the state</strong> — FBI background checks and federal court documents must go through the U.S. Department of State in Washington, D.C.</li>
                <li><strong>6. Requesting an apostille for a non-Hague country</strong> — Countries like China, UAE, and Saudi Arabia require embassy legalization instead.</li>
                <li><strong>7. Forgetting the return envelope</strong> — Mail-in requests need a prepaid return envelope or your documents may be held.</li>
              </ul>
            </div>

            <h2>Apostille vs. Embassy Legalization</h2>
            <p>Not all countries accept apostilles. If your destination country is NOT a member of the Hague Convention, you&apos;ll need <strong>embassy or consulate legalization</strong> instead — a more complex, multi-step process:</p>
            <ol>
              <li>Notarize the document (if needed)</li>
              <li>Authenticate through the Oklahoma Secretary of State</li>
              <li>Authenticate through the U.S. Department of State</li>
              <li>Legalize at the destination country&apos;s embassy or consulate</li>
            </ol>
            <p>Notable non-Hague countries: China, United Arab Emirates, Saudi Arabia, Egypt, Vietnam, Qatar, and Canada (for some document types).</p>

            <h2>How Just Legal Solutions Can Help</h2>
            <p>Navigating the apostille process can be confusing, especially when you&apos;re dealing with time-sensitive international matters. Just Legal Solutions offers complete apostille assistance:</p>
            <ul>
              <li><strong>Document review</strong> — We verify your documents meet all requirements before submission</li>
              <li><strong>Notarization</strong> — If your documents need notarization first, we handle it</li>
              <li><strong>Submission</strong> — We submit directly to the Secretary of State on your behalf</li>
              <li><strong>Rush processing</strong> — When time is critical, we expedite the process</li>
              <li><strong>Return shipping</strong> — Your apostilled documents delivered back to you</li>
            </ul>
            <p><strong>Ready to get started?</strong> Call <a href="tel:+15393676832">(539) 367-6832</a> or visit our <Link href="/apostille">apostille services page</Link> for more information.</p>

            <hr />
            <p className="text-sm text-gray-500"><em>Disclaimer: This guide is for informational purposes only and does not constitute legal advice. Requirements and fees may change. Contact the Oklahoma Secretary of State at (405) 521-3911 for the most current information. Last updated April 2026.</em></p>
          </article>
          <div className="mt-12">
            <AuthorBox />
          </div>

          {/* Related Guides */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/tulsa-process-server" className="group block p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                <span className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Tulsa Process Server — Same-Day, starts at $35</span>
                <p className="text-sm text-gray-600 mt-1">Licensed Tulsa process server for all document types. GPS-tracked, court-ready affidavits.</p>
              </Link>
              <Link href="/apostille" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Apostille Services Oklahoma</h3>
                <p className="text-gray-600 text-sm mt-2">Full apostille service — we handle everything from notarization to submission.</p>
              </Link>
              <Link href="/mobile-notary" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Mobile Notary Services</h3>
                <p className="text-gray-600 text-sm mt-2">Need notarization before your apostille? We come to you across Tulsa metro.</p>
              </Link>
              <Link href="/immigration-document-notary-oklahoma" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Immigration Document Notary</h3>
                <p className="text-gray-600 text-sm mt-2">USCIS form notarization — I-130, I-485, I-751, I-864 and more.</p>
              </Link>
              <Link href="/notary" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Notary Services Overview</h3>
                <p className="text-gray-600 text-sm mt-2">All notary services — acknowledgments, jurats, oaths, and certifications.</p>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Apostille Assistance?</h2>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">Just Legal Solutions handles the entire apostille process — document review, notarization, submission, and return shipping.</p>
              <a href="tel:+15393676832" className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                📞 Call (539) 367-6832
              </a>
            </div>
          </section>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
