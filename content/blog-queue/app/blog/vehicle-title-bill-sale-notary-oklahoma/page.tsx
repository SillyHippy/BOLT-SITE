import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, MapPin, Scale, Shield, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { AuthorBox } from '@/components/ui/author-box';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Oklahoma Notary for Vehicle Titles & Bills of Sale',
  description:'Oklahoma vehicle titles need notarized assignments under 47 O.S. 1105. Learn transfer rules, bills of sale, and lien release notarization for all 77 counties.',
  keywords: 'notary public Oklahoma, vehicle title notary, bill of sale notary, car title notarization, Oklahoma mobile notary vehicle sale',
  authors: [{ name: 'Just Legal Solutions Team' }],
  creator: 'Just Legal Solutions Team',
  publisher: 'Just Legal Solutions',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Oklahoma Notary for Vehicle Titles & Bills of Sale',
    description:'Oklahoma vehicle titles need notarized assignments under 47 O.S. 1105. Learn transfer rules, bills of sale, and lien release notarization for all 77 counties.',
    url: 'https://justlegalsolutions.org/blog/vehicle-title-bill-sale-notary-oklahoma',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Oklahoma Notary for Vehicle Titles & Bills of Sale',
      },
    ],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/blog/vehicle-title-bill-sale-notary-oklahoma',
  },
  other: {
    'article:published_time': '2026-08-20',
    'article:modified_time': '2026-08-20',
    'article:author': 'Just Legal Solutions Team',
    'ai-content-type': 'article',
    'ai-summary': 'In Oklahoma, the seller\'s title assignment must be sworn to before a notary under 47 O.S. § 1107, and electronic-title sales close with a notarized Form 718 bill of sale. Buyers have 30 days to present the assigned title to Service Oklahoma with an $11 fee.',
    'ai-key-facts': 'Title assignment sworn before notary under 47 O.S. § 1107; Electronic titles use notarized Form 718 bill of sale; Buyers have 30 days to transfer title with $11 fee; Odometer disclosure (Form 729) required for 2011+ vehicles; Notary fee capped at $5 per act under 49 O.S. § 5',
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Does a bill of sale need to be notarized in Oklahoma?',
    answer: 'Only in specific situations. A plain bill of sale documenting a private vehicle sale does not require notarization. But the two cases where notarization is mandatory are: (1) electronic-title sales, which close with Service Oklahoma Form 718, Bill of Sale of an Electronic Title, subscribed and sworn to before a notary; and (2) title assignments themselves, which under 47 O.S. § 1107 must be sworn to before a notary public. For paper titles, the notarized assignment on the back of the title is what counts — the bill of sale is supporting purchase-price documentation.',
  },
  {
    question: 'When is a notarized bill of sale required in Oklahoma?',
    answer: 'The clearest case is an electronic title. If the vehicle\'s title is held electronically by the State of Oklahoma, the seller cannot hand over a paper title — instead both parties complete Form 718, Bill of Sale of an Electronic Title, and the seller\'s signature must be subscribed and sworn to before a notary public. A notarized bill of sale is also commonly requested by out-of-state buyers, lenders, and insurance companies, even when Oklahoma law does not strictly demand it.',
  },
  {
    question: 'What should an Oklahoma bill of sale include?',
    answer: 'A complete bill of sale should name the buyer and seller with addresses, describe the vehicle (year, make, model, VIN), state the sale price, note the odometer reading, list any liens, and carry the date and both signatures. If it is the Service Oklahoma Form 718 for an electronic title, every field must be filled in completely — the form says "void if altered" and incomplete submissions may be rejected. Service Oklahoma also accepts a purchase contract, Form 722-1 Declaration of Vehicle Purchase Price, or a sales agreement as purchase-price documentation.',
  },
  {
    question: 'Do I need both a title and a bill of sale to sell my car in Oklahoma?',
    answer: 'For a private sale of a vehicle with a paper title, the assigned and notarized title is the core transfer document, and Service Oklahoma requires purchase-price documentation — which can be a bill of sale, purchase contract, or Form 722-1. For an electronic title, the notarized Form 718 bill of sale takes the place of the title document itself. Either way, the buyer presents the paperwork to Service Oklahoma or a licensed operator within 30 days of delivery, along with an $11 fee and any excise tax due.',
  },
  {
    question: 'Can a notary notarize a bill of sale and a title assignment at the same time?',
    answer: 'Yes. A mobile notary can handle both documents in one visit: the seller signs and swears to the title assignment under 47 O.S. § 1107, and both parties sign the bill of sale, with the seller\'s signature notarized where required (such as Form 718 for electronic titles). The notary verifies identity with current ID, witnesses the signatures, and records the acts in their journal. It\'s one trip, and the $5 per-act cap under 49 O.S. § 5 keeps the notarial fees minimal.',
  },
  {
    question: 'What if the seller already signed the title before the notary arrives?',
    answer: 'That creates a problem. The title assignment must be sworn to before a notary, which means the notary needs to see the seller sign (or acknowledge the signature) in person. Many notaries will refuse to notarize a title that is already signed, because they cannot verify the signature or administer the oath retroactively. The seller should leave the assignment space blank until the notary is present. If the title is already signed, the safest fix is to have the seller sign again — or contact Service Oklahoma for guidance before the buyer is stuck with an un-notarizable title.',
  },
  {
    question: 'Do boat, trailer, or ATV sales need notarized bills of sale in Oklahoma?',
    answer: 'Boat and outboard motor transfers use Service Oklahoma\'s BM-26 application and title process, and boats titled in Oklahoma follow the same assigned-and-notarized title rules as vehicles under 47 O.S. § 1107. Trailers and ATVs used off-road may be sold by retail implement dealers with title reassignment. The practical rule: if a certificate of title exists for the vessel or trailer, the assignment needs the same notarized treatment. A bill of sale is still smart supporting documentation for the purchase price and the BM-10 serial number confirmation.',
  },
  {
    question: 'Is a bill of sale required when buying from a dealer in Oklahoma?',
    answer: 'Dealers must execute and deliver bills of sale on forms prescribed by Service Oklahoma for all new vehicles sold. For dealer sales, the dealer reassigns the certificate of title and provides the purchase agreement; the buyer presents it with the $11 fee and taxes. Dealer bill of sale forms are not typically notarized — the licensed dealer reassignment itself is the transfer. Private-party sales are where the notarized title assignment (and electronic-title bill of sale) really matters.',
  },
  {
    question: 'What is the odometer disclosure requirement in Oklahoma?',
    answer: 'Under 47 O.S. § 1107.1, the seller must verify mileage at transfer and disclose it in writing on the title or a separate document, certifying whether the reading is actual, not actual, or exceeds mechanical limits. For vehicles 2011 or newer, Service Oklahoma requires a completed odometer disclosure — usually incorporated into the title assignment, or Form 729 when it is not. Both transferor and transferee sign and print their names. The notary\'s role is limited to the title assignment oath; the odometer statement itself is a signature-and-print document.',
  },
  {
    question: 'How much does it cost to notarize a vehicle title and bill of sale in Oklahoma?',
    answer: 'The notarial act itself is capped at $5 per act under 49 O.S. § 5. A title assignment acknowledgment or jurat is one act; a Form 718 bill of sale oath is another. Travel time, after-hours service, and courier fees are separate and set by the notary service. So for a typical private sale with a paper title, you are looking at $5 for the title notarization — and a mobile notary coming to the seller\'s driveway across any of Oklahoma\'s 77 counties adds only the travel charge.',
  },
];

export default function BlogPost() {
  return (
    <>
      <UnifiedSchema
        pageType="article"
        pageTitle="Oklahoma Notary for Vehicle Titles & Bills of Sale"
        pageDescription="Oklahoma vehicle titles need notarized assignments under 47 O.S. 1105. Learn transfer rules, bills of sale, and lien release notarization for all 77 counties."
        pageUrl="https://justlegalsolutions.org/blog/vehicle-title-bill-sale-notary-oklahoma"
        siteName="Just Legal Solutions"
        reviewCount={112}
        services={['Process Serving', 'Skip Tracing', 'Court Filing', 'Notary Services', 'Courier Services']}
        breadcrumbs={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Blog', item: 'https://justlegalsolutions.org/blog' },
          { name: 'Oklahoma Notary for Vehicle Titles & Bills of Sale', item: 'https://justlegalsolutions.org/blog/vehicle-title-bill-sale-notary-oklahoma' }
        ]}
        articleDetails={{
          headline: 'Oklahoma Notary for Vehicle Titles & Bills of Sale',
          datePublished: '2026-08-20',
          dateModified: '2026-08-20',
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
            Vehicle &amp; Notary Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Oklahoma Notary for Vehicle Titles &amp; Bills of Sale
          </h1>
          <div className="bg-green-50 border-2 border-green-300 p-4 rounded-lg mb-6 max-w-3xl mx-auto text-left">
            <h2 className="text-lg font-bold text-green-900 mb-2">Quick Answer</h2>
            <p className="text-gray-800">
              Selling a vehicle in Oklahoma? The title assignment must be <strong>sworn to before a notary</strong>{' '}
              under <strong>47 O.S. § 1107</strong>, and electronic-title sales close with a{' '}
              <strong>notarized Form 718 bill of sale</strong>. The buyer then has{' '}
              <strong>30 days</strong> to transfer title at Service Oklahoma for an <strong>$11 fee</strong>.
            </p>

          </div>
          <p className="mb-6 text-gray-700">At Just Legal Solutions, our team brings 50+ years of combined experience, is licensed and bonded under Oklahoma Title 12 O.S. 158.1, and has served thousands of documents across all 77 Oklahoma counties. We align every service with 12 O.S. 2004 requirements and Title 49 O.S. where applicable.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue-200/80 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date('2026-08-20').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> ~11 min read</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Oklahoma Jurisdiction</span>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
          <article className="prose prose-lg prose-blue max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <p className="lead text-xl text-gray-600 mb-8">
            You found a buyer for your 2019 F-150 in a Tulsa parking lot, agreed on $18,500, and shook hands. Then comes the paperwork question: does the title need a notary? Does the bill of sale? What if the title is electronic — which most newer Oklahoma titles are? The answer tripped up a seller we met last month, who showed up at Service Oklahoma with a signed title and no notarization, and got sent home. Here's the full picture of when Oklahoma vehicle sales need a notary, what gets signed where, and how to close the deal without a second trip.
          </p>

          <h2>The Short Version: What Must Be Notarized</h2>
          <p>
            Oklahoma law is specific about vehicle transfers. Under <strong>47 O.S. § 1107</strong>, when a titled vehicle is sold, the seller must endorse on the back of the certificate a complete assignment with warranty of title and a statement of all liens, <strong>sworn to before a notary public</strong> — then hand the title to the buyer at delivery. That's the rule for paper titles, and it's not optional.
          </p>
          <p>
            For <strong>electronic titles</strong>, the mechanics change but the notarization stays. The seller can't physically sign the back of a title they don't hold, so Oklahoma uses <strong>Form 718, Bill of Sale of an Electronic Title</strong>. The seller affirms and attests that they hold an electronic title and assigns ownership to the buyer, and the form must be <strong>subscribed and sworn to before a notary</strong>. In other words: yes, that bill of sale gets notarized.
          </p>
          <p>
            The buyer then has <strong>30 days from delivery</strong> to present the assigned title (or Form 718), proof of insurance, purchase-price documentation, and the <strong>$11 transfer fee</strong> to Service Oklahoma or a licensed operator, along with any motor vehicle excise tax. Miss the window and you're looking at late fees and, in the worst cases, the vehicle sitting unregistered while the old owner's name stays on the record.
          </p>

          <h2>Paper Titles vs. Electronic Titles: Two Different Signing Ceremonies</h2>
          <p>
            Oklahoma issues most new titles electronically these days, but plenty of older vehicles still have paper certificates. Here's how each one plays out at the notary's table.
          </p>
          <h3>Paper Title: Assignment on the Back</h3>
          <p>
            The seller fills in the assignment block on the back of the title — buyer's name, sale price, odometer reading, lien statement — and signs it <em>in the notary's presence</em>. The notary administers the oath or takes the acknowledgment, verifies the seller's identity with a current government-issued ID, stamps and signs the certificate, and records the act in the notary journal. The buyer signs nothing on the title itself in most cases; the buyer's name goes in the assignment block as the transferee.
          </p>
          <p>
            One warning we give every seller: <strong>do not sign the title before the notary arrives.</strong> The assignment must be sworn to before the notary. A pre-signed title leaves the notary unable to administer the oath at the moment of signing, and many notaries will refuse. If you already signed, the clean fix is signing again in front of the notary (if there's room) or checking with Service Oklahoma before the buyer walks away with a title Service Oklahoma may reject.
          </p>
          <h3>Electronic Title: Form 718 Bill of Sale</h3>
          <p>
            If the title on record is electronic, Service Oklahoma's instructions are explicit: use Form 718. Both parties fill it out completely — the form literally warns "void if altered" and that incomplete submissions may not be accepted. The seller signs under oath before a notary, attesting that they hold the electronic title and assigning ownership to the buyer. The buyer also signs the form as transferee. Additional paperwork often rides along: Form 729 odometer disclosure for 2011+ vehicles, Form 722-1 declaration of purchase price, or a purchase agreement if a dealer is involved.
          </p>
          <p>
            A mobile notary is the practical answer here because Form 718 closings happen wherever the sale happens — a driveway in Broken Arrow, a parking lot in Norman, a farm gate in Woodward. The notary brings the journal, witnesses the oath, and both parties walk away with a complete, notarized package instead of a maybe-valid title.
          </p>

          <h2>The Bill of Sale: When It's Needed and When It's Optional</h2>
          <p>
            There's a lot of confusion about the humble bill of sale, so let's separate what's required from what's smart.
          </p>
          <p>
            <strong>Required:</strong> For electronic titles, Form 718 is the transfer document — it's a bill of sale by name and by function, and it must be notarized. Dealers also must execute bills of sale on Service Oklahoma forms for all new vehicles sold. For paper-title private sales, a bill of sale is not strictly required, but Service Oklahoma does require <em>purchase-price documentation</em>: a bill of sale, purchase contract, Form 722-1, or sales agreement.
          </p>
          <p>
            <strong>Smart even when optional:</strong> A notarized bill of sale is the best possible proof of the transaction if anything goes sideways later — the buyer claims they paid more, the seller claims they were paid less, a lienholder disputes the sale, or the IRS asks about the sale price. The notary's journal entry records the date, the signer, the document type, and the ID presented. That's evidence that survives.
          </p>
          <p>
            What a bill of sale does <em>not</em> do is transfer title. Ownership transfers through the assigned certificate of title (or Form 718 for electronic titles). A bill of sale alone — even a notarized one — does not make the buyer the legal owner. It proves the deal; the title proves the ownership.
          </p>

          <h2>Odometer Disclosure: Form 729 and the Mileage Rule</h2>
          <p>
            Under <strong>47 O.S. § 1107.1</strong>, the seller must verify the mileage at transfer and disclose it in writing on the title or a separate document, certifying one of three things: the reading reflects actual mileage, the reading does not reflect actual mileage, or the mileage exceeds the mechanical limits of the odometer. For vehicles from <strong>2011 or newer</strong>, Service Oklahoma requires a completed odometer disclosure statement — usually built into the title assignment, or on <strong>Form 729</strong> when it isn't.
          </p>
          <p>
            Both transferor and transferee sign and print their names on the disclosure. Federal law backs this up: a false odometer statement can mean fines and imprisonment. The notary's role here is limited — the notary handles the title assignment oath, not the odometer certification itself — but a notary can witness the whole package being signed so the seller doesn't juggle three separate signing events. One appointment, every signature witnessed, everything journaled.
          </p>

          <h2>Boats, Trailers, ATVs, and the Rest of the Garage</h2>
          <p>
            The same notarized-assignment logic applies beyond cars. Boats and outboard motors titled in Oklahoma transfer through the BM-26 application and the same assigned-and-notarized certificate rules under 47 O.S. § 1107. Trailers with titles follow suit. Off-road ATVs and utility vehicles sold by retail implement dealers move through dealer title reassignment, which is the dealer's job, not the buyer's.
          </p>
          <p>
            The recurring theme: <strong>if there's a certificate of title, the assignment gets notarized.</strong> That's true whether the "vehicle" is a bass boat on Lake Texoma, a horse trailer in Stillwater, or a side-by-side in the Ouachitas. And when a boat or trailer has no title at all (some older units were never titled), a notarized bill of sale becomes your best evidence of ownership for registration — worth having even when no one demands it.
          </p>

          <h2>How to Prep for the Notary: A Seller's Checklist</h2>
          <p>
            A notary visit should take ten minutes, not an hour. Here's what makes it smooth:
          </p>
          <ul>
            <li><strong>Leave the signature lines blank.</strong> The title assignment and Form 718 must be signed in the notary's presence. No pre-signing, no "just add my signature later."</li>
            <li><strong>Bring a current government-issued ID.</strong> Driver's license, passport, or state ID with photo and signature. The notary verifies identity under 49 O.S. § 113.</li>
            <li><strong>Know the odometer reading and sale price.</strong> Those go on the title assignment and the disclosure. Don't guess — the notary isn't the one certifying mileage, but the seller is, under penalty of law.</li>
            <li><strong>Have the VIN handy.</strong> Both parties should verify it matches the vehicle. A VIN typo on a title assignment can stall the transfer for days.</li>
            <li><strong>Line up both parties.</strong> The notary needs the seller for the oath; the buyer should be present to sign Form 718 and the odometer disclosure. If the buyer can't be there, ask the notary how to handle it before the appointment.</li>
            <li><strong>Know which title type you have.</strong> Paper title? Bring it. Electronic title? Download and print Form 718. Wasting a notary visit on the wrong form wastes everyone's time.</li>
          </ul>
          <p>
            And if the sale is out of state — say a buyer from Texas is taking the truck home — check Service Oklahoma's rules for out-of-state dealer assignments. Oklahoma does not require notarization on assignments to or from out-of-state dealers located in non-notary states, but private out-of-state buyers should still get the notarized package to avoid a title headache in the buyer's home state.
          </p>

          <h2>What It Costs and Where the Notary Comes To You</h2>
          <p>
            The notarial act itself is capped at <strong>$5 per act</strong> under <strong>49 O.S. § 5</strong>. A title assignment is one act; a Form 718 oath is another; add an acknowledgment and you're at three. Travel, after-hours, and courier fees are separate — which is exactly why a mobile notary makes sense for a vehicle sale. You're already meeting in a parking lot or driveway; the notary meeting you there is the natural fit.
          </p>
          <p>
            Just Legal Solutions covers all 77 Oklahoma counties, from Tulsa to Guymon, with notaries who handle vehicle packages every week. We bring the journal, the stamp, and the knowledge of which form goes with which title type — so your sale closes in one visit, and the buyer leaves with a package Service Oklahoma will actually accept.
          </p>

          <h2>Conclusion</h2>
          <p>
            Oklahoma vehicle sales come down to three documents and one rule: the title assignment must be sworn to before a notary under 47 O.S. § 1107, electronic-title sales need the notarized Form 718 bill of sale, and the odometer disclosure (Form 729 for 2011+ vehicles) rides along under 47 O.S. § 1107. Get those signed in front of a notary, hand the buyer the package with proof of insurance and the $11 fee, and the 30-day clock starts clean.
          </p>
          <p>
            Whether you're selling a sedan in Edmond, a boat at Grand Lake, or a trailer outside Lawton, Just Legal Solutions has a licensed mobile notary ready to meet you. Schedule a mobile notary for your vehicle sale, or call or text <a href="tel:5393676832" className="text-blue-600 hover:underline">(539) 367-6832</a>. We'll have the right form, the right journal, and the stamp — you bring the keys.
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
              <Link href="/blog/vehicle-title-transfer-notarization-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Title Transfers</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">Oklahoma Vehicle Title Notarization: What Sellers Must Know</h3>
                <p className="text-sm text-gray-600">Seller signature rules, electronic titles, and common title mistakes.</p>
              </Link>
              <Link href="/blog/what-documents-need-notarized-oklahoma" className="group block bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300">
                <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2 block">Document Guide</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">What Documents Need to Be Notarized?</h3>
                <p className="text-sm text-gray-600">Complete list of documents requiring notarization under Oklahoma law.</p>
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
            Selling a vehicle in Oklahoma isn't complicated — it's specific. Swear the title assignment before a notary under 47 O.S. § 1107, use the notarized Form 718 bill of sale for electronic titles, complete the odometer disclosure for 2011+ vehicles, and hand the buyer a complete package to take to Service Oklahoma within 30 days. Do it right once, and the transfer is done. Do it wrong, and you're making a second trip with a rejected title.
          </p>
          <p>
            Just Legal Solutions brings licensed mobile notaries to vehicle sales in all 77 Oklahoma counties. Call or text <a href="tel:5393676832" className="text-blue-600 hover:underline">(539) 367-6832</a> to schedule — and if the sale ever turns into a dispute, our process serving team is standing by.
          </p>

          <p className="text-gray-700 italic mt-8">
            Need a notary for a vehicle title or bill of sale in Oklahoma?{' '}
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
