import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Legal Courier Services Tulsa | Courthouse Filing & Document Delivery 2026',
  description: 'Professional legal courier services in Tulsa County: same-day courthouse filing, file-stamped copy retrieval, and secure legal document delivery. Starting at $30. 24/7 emergency available.',
  keywords: 'legal courier services, legal courier tulsa, courthouse filing service, legal document delivery, court filing services, same-day courier Oklahoma, secure document transport, legal courier Tulsa County',
  alternates: {
    canonical: 'https://justlegalsolutions.org/courier-services-tulsa'
  },
  openGraph: {
    title: 'Legal Courier Services Tulsa | Courthouse Filing & Document Delivery',
    description: 'Professional legal courier: courthouse filings, file-stamped copy retrieval, and secure document delivery for law firms. Same-day service starting at $30.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/courier-services-tulsa',
    siteName: 'Just Legal Solutions',
  },
  other: {
    'ai-content-type': 'service-guide',
    'ai-summary': 'Just Legal Solutions provides professional legal courier services in Tulsa County — courthouse filings, file-stamped copy retrieval, deliveries to judges chambers, firm-to-firm transfers, and discovery/exhibit transport. Starting at $30 with 24/7 emergency availability. Legal courier service is distinct from formal service of process, which is performed by licensed process servers.',
    'ai-key-facts': 'Legal courier services starting at $30, same-day courthouse filing, file-stamped copy delivery, secure chain-of-custody transport, 24/7 emergency, Tulsa County and all 77 Oklahoma counties.',
  },
};

export default function CourierServicesTulsaPage() {
  const faqs = [
    {
      question: 'Can you file documents at the Tulsa County Courthouse for us?',
      answer: 'Yes. We can file civil and family law documents at the Tulsa County District Court and return file-stamped copies to you. Some documents requiring original signatures or in-person appearances may require attorney or client presence. We are familiar with clerk office hours, filing fees, and procedures at Tulsa County and courts statewide.'
    },
    {
      question: 'Do you handle confidential materials?',
      answer: 'Yes. We maintain chain-of-custody practices and never open sealed documents. All deliveries are handled by professional, background-checked couriers with GPS tracking and tamper-evident packaging for sensitive materials. We can sign basic delivery receipts but do not provide legal review of documents.'
    },
    {
      question: 'Is this the same as serving process?',
      answer: 'No. Legal courier service is for filing, retrieving, and transporting legal documents. Formal service of process — delivering summons, subpoenas, and other court-ordered papers to parties in a lawsuit — is performed by licensed process servers under 12 O.S. § 158.1, which we also provide through our process serving division. Visit our Tulsa process server page for details.'
    },
    {
      question: 'How fast can you deliver legal documents in Tulsa?',
      answer: 'Most standard deliveries within Tulsa County are completed within 2-4 hours. Same-day rush service is available for $150, and 2-hour emergency delivery is available for $265. Standard courier service starts at $30.'
    },
    {
      question: 'What areas do your legal courier services cover?',
      answer: 'We serve all of Tulsa County — including Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, and Glenpool — plus all 77 Oklahoma counties. Statewide delivery is available with same-day and next-day options.'
    },
    {
      question: 'How much do legal courier services cost?',
      answer: 'Legal courier services start at $30 for standard local delivery in Tulsa County. Same-day rush delivery costs $150, and 2-hour emergency delivery is $265. Volume discounts are available for law firms with recurring needs. Call (539) 367-6832 for a custom quote.'
    }
  ];

  return (
    <>
      {/* LocalBusiness JSON-LD Schema */}
      <Script
        id="local-business-schema-courier"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Just Legal Solutions",
            "url": "https://justlegalsolutions.org",
            "telephone": "+15393676832",
            "email": "info@justlegalsolutions.org",
            "priceRange": "$30-$265",
            "image": "https://justlegalsolutions.org/images/jls-logo.webp",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Glenpool",
              "addressLocality": "Glenpool",
              "addressRegion": "OK",
              "postalCode": "74033",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 35.9531,
              "longitude": -96.0039
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "areaServed": [
              { "@type": "County", "name": "Tulsa County" },
              { "@type": "State", "name": "Oklahoma" }
            ],
            "serviceType": ["Legal Courier", "Document Delivery", "Court Filing", "File-Stamped Copy Retrieval"]
          })
        }}
      />

      {/* FAQPage JSON-LD Schema */}
      <Script
        id="faq-schema-courier"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <UnifiedSchema
        pageType="service"
        url="https://justlegalsolutions.org/courier-services-tulsa"
        title="Legal Courier Services Tulsa | Courthouse Filing & Document Delivery"
        description="Professional legal courier services in Tulsa County: courthouse filings, file-stamped copy retrieval, and secure document delivery for law firms. Starting at $30."
        serviceDetails={{
          name: "Legal Courier Services Tulsa",
          description: "Professional legal courier and document delivery services in Tulsa County with same-day and rush options available 24/7.",
          price: "$30-$265",
          areaServed: ["Tulsa County", "Broken Arrow", "Bixby", "Jenks", "Owasso", "Sand Springs", "Glenpool"],
          serviceType: ["Legal Document Delivery", "Court Filing", "File-Stamped Copy Retrieval", "Evidence Transport", "Same-Day Delivery"]
        }}
        priceRange="$30-$265"
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 156
        }}
        faqItems={faqs.map(faq => ({
          question: faq.question,
          answer: faq.answer
        }))}
        speakable={['h1', 'h2', '.direct-answer']}
      />

      <main className="min-h-screen pt-12 bg-white">

        {/* Direct Answer Block */}
        <section className="bg-green-50 border-b-4 border-green-600 py-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-4 text-sm">
              <ol className="flex items-center space-x-2">
                <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
                <li className="text-gray-400">/</li>
                <li><span className="text-gray-700">Legal Courier Services Tulsa</span></li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Legal Courier Services in Tulsa County
            </h1>
            <div className="direct-answer">
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>We provide professional legal courier services &mdash; courthouse filings, file-stamped copy retrievals, and deliveries to law offices and agencies.</strong> Service of process is performed by our <Link href="/tulsa-process-server" className="text-green-700 font-bold hover:underline">licensed process servers</Link>; see our process serving pages for details. Legal courier service starts at <strong>$30 per delivery</strong> with <strong>24/7 emergency availability</strong>. Call <a href="tel:5393676832" className="text-green-700 font-bold hover:underline">(539) 367-6832</a> for immediate service.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-blue-900 text-white pb-12">
          <div className="container mx-auto px-4 pt-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Tulsa County Legal Courier &amp; Document Delivery</h2>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Same-day courthouse filing, file-stamped copy retrieval, and secure legal document transport &mdash; starting at $30 with 24/7 emergency service.</p>
            <div className="flex justify-center mt-8">
              <Image src="/images/tulsa-courier-downtown.jpeg" width={600} height={350} alt="Legal courier services Tulsa County - professional document delivery" className="rounded-lg shadow-lg" />
            </div>
            <p className="text-sm text-blue-100 mt-2">Serving Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Glenpool &amp; all 77 Oklahoma counties</p>
          </div>
        </section>

        {/* Legal Courier Services We Provide */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Courier Services We Provide</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <p className="text-sm text-blue-800">
                <strong>Important distinction:</strong> For legal service of process on parties (delivering summons, subpoenas, and court-ordered documents), we use <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">licensed process servers under 12 O.S. &sect; 158.1</Link>. This page focuses on <strong>legal courier work</strong> &mdash; filing, retrieving, and transporting legal documents.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x1F3DB;&#xFE0F; Same-Day Courthouse Filing</h3>
                <p className="text-gray-700 mb-2">We file civil, family, and small claims documents at the Tulsa County Courthouse and district courts statewide on your behalf. We wait for clerk stamping and return file-stamped copies to your office the same day.</p>
                <p className="text-sm text-green-700 font-semibold">Same-day filing &bull; All Oklahoma courts</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x1F4C4; File-Stamped Copy Pickup &amp; Delivery</h3>
                <p className="text-gray-700 mb-2">Need a file-stamped copy retrieved from the courthouse? We pick up stamped copies, certified documents, and filed records and deliver them directly to your office or wherever you need them.</p>
                <p className="text-sm text-green-700 font-semibold">Starting at $30 &bull; Same-day available</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x2696;&#xFE0F; Delivery to Judges&apos; Chambers</h3>
                <p className="text-gray-700 mb-2">Where permitted by local court rules, we deliver documents directly to judges&apos; chambers &mdash; proposed orders, briefs, and other time-sensitive materials that need to reach the bench before a ruling.</p>
                <p className="text-sm text-green-700 font-semibold">Subject to local court rules</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x1F3E2; Firm-to-Firm Legal Document Transfers</h3>
                <p className="text-gray-700 mb-2">Scheduled daily or weekly courier runs between law firm offices, satellite locations, co-counsel, and partner firms. Confidential documents never enter the public postal system.</p>
                <p className="text-sm text-green-700 font-semibold">Scheduled routes &bull; Volume discounts</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x1F4E6; Discovery Materials &amp; Trial Exhibits</h3>
                <p className="text-gray-700 mb-2">Secure transport of physical evidence, deposition transcripts, trial exhibits, and sensitive case materials with chain-of-custody documentation and tamper-evident packaging.</p>
                <p className="text-sm text-green-700 font-semibold">Chain-of-custody documented</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x1F3E5; Medical Record &amp; Real Estate Docs</h3>
                <p className="text-gray-700 mb-2">HIPAA-compliant medical record pickup from hospitals and clinics for personal injury cases. Same-day real estate closing document transport for title companies and real estate attorneys.</p>
                <p className="text-sm text-green-700 font-semibold">HIPAA-compliant &bull; Same-day closings</p>
              </div>
            </div>
          </div>
        </section>

        {/* How Legal Courier Service Works */}
        <section className="py-12 bg-gray-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Legal Courier Service Works</h2>
            <p className="text-lg text-gray-700 mb-8">From your request to confirmed delivery, here is the process:</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Request</h3>
                  <p className="text-gray-700">Call <a href="tel:5393676832" className="text-blue-600 hover:underline font-medium">(539) 367-6832</a> or submit a request through our <Link href="/contact" className="text-blue-600 hover:underline font-medium">online form</Link>. Tell us what you need filed, picked up, or delivered, and your deadline.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Document Readiness</h3>
                  <p className="text-gray-700">Let us know if documents are ready for pickup as hard copies at your office, or if we should print them on arrival. For courthouse filings, confirm whether filing fees should be advanced.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Pickup</h3>
                  <p className="text-gray-700">Our courier picks up the documents from your office, the courthouse, or another designated location according to the agreed schedule.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Delivery to Court or Destination</h3>
                  <p className="text-gray-700">Documents are filed with the clerk, delivered to the destination office, or transported to the designated recipient. For filings, the courier waits for the clerk&apos;s stamp before departing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Proof of Delivery</h3>
                  <p className="text-gray-700">You receive confirmation of delivery or filing &mdash; including a signature, timestamp, or scanned file-stamped copy &mdash; via email or our client portal.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Oklahoma Law Firms Use Legal Couriers */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Oklahoma Law Firms Use Legal Couriers</h2>
            <p className="text-lg text-gray-700 mb-6">
              Oklahoma&apos;s court system spans 77 counties and 26 judicial districts. The Tulsa County Courthouse alone handles thousands of filings per month. Law firms that rely on staff to make courthouse runs lose billable hours, face unpredictable wait times, and risk missed deadlines. Here&apos;s why professional couriers are the standard:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-5 rounded-lg shadow border-t-4 border-blue-500">
                <h3 className="font-bold text-lg mb-2">&#x23F1;&#xFE0F; Time Savings</h3>
                <p className="text-gray-600">A courthouse filing run takes 1&ndash;3 hours for an attorney or paralegal. At $200+/hour billable rates, a $30 courier delivery pays for itself many times over.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow border-t-4 border-green-500">
                <h3 className="font-bold text-lg mb-2">&#x1F512; Chain of Custody</h3>
                <p className="text-gray-600">Professional couriers maintain documented chain of custody with GPS tracking, timestamped pickups, and delivery confirmations &mdash; critical for evidence admissibility.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow border-t-4 border-purple-500">
                <h3 className="font-bold text-lg mb-2">&#x26A1; Deadline Compliance</h3>
                <p className="text-gray-600">Oklahoma courts enforce strict filing deadlines. A professional courier ensures documents reach the clerk&apos;s office before cutoff &mdash; with same-day and <Link href="/urgent-process-server" className="text-blue-600 hover:underline">emergency options</Link> when time is critical.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Courier Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Standard Delivery</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$30</div>
                <div className="text-sm text-gray-500 mb-4">Starting rate &bull; Tulsa County</div>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>&#x2713; GPS-tracked delivery</li>
                  <li>&#x2713; Proof of delivery</li>
                  <li>&#x2713; Same-day available</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-orange-300 p-6 rounded-lg text-center shadow-lg">
                <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">RUSH</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Same-Day Rush</h3>
                <div className="text-4xl font-bold text-orange-600 mb-2">$150</div>
                <div className="text-sm text-gray-500 mb-4">Guaranteed same-day</div>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>&#x2713; Priority dispatch</li>
                  <li>&#x2713; Live tracking updates</li>
                  <li>&#x2713; Confirmation call</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-red-300 p-6 rounded-lg text-center shadow-lg">
                <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">EMERGENCY</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2-Hour Emergency</h3>
                <div className="text-4xl font-bold text-red-600 mb-2">$265</div>
                <div className="text-sm text-gray-500 mb-4">Immediate dispatch</div>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>&#x2713; Immediate courier dispatch</li>
                  <li>&#x2713; Direct communication</li>
                  <li>&#x2713; After-hours available</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-gray-600">Volume discounts available for law firms with recurring courier needs. Call <a href="tel:5393676832" className="text-blue-600 font-bold hover:underline">(539) 367-6832</a> for a custom quote.</p>
          </div>
        </section>

        {/* Service Coverage Section */}
        <section className="bg-white py-10 border-b narrative">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Serving All of Tulsa County &amp; Statewide Oklahoma</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our legal courier and document delivery services are trusted by law firms, businesses, and individuals across every city in Tulsa County. Whether you need urgent delivery in <Link href="/tulsa-process-server" className="text-blue-700 underline font-semibold">Tulsa</Link>, secure transport in <Link href="/service-areas/broken-arrow" className="text-blue-700 underline font-semibold">Broken Arrow</Link>, or fast service in <Link href="/service-areas/bixby" className="text-blue-700 underline font-semibold">Bixby</Link>, <Link href="/service-areas/jenks" className="text-blue-700 underline font-semibold">Jenks</Link>, <Link href="/service-areas/sand-springs" className="text-blue-700 underline font-semibold">Sand Springs</Link>, or <Link href="/service-areas/owasso" className="text-blue-700 underline font-semibold">Owasso</Link>, we have you covered.
            </p>
            <p className="text-lg text-gray-700">
              Beyond Tulsa County, we provide statewide legal courier services across all 77 Oklahoma counties &mdash; including Oklahoma County, Rogers County, Creek County, Wagoner County, and more. Our network of professional couriers ensures your documents arrive on time, every time.
            </p>
          </div>
        </section>

        {/* By the Numbers Stats Bar */}
        <section className="bg-blue-50 py-6 border-b">
          <div className="container mx-auto flex flex-wrap justify-center gap-8 text-center">
            <div>
              <span className="block text-3xl font-bold text-blue-800">97%</span>
              <span className="block text-gray-700">On-time delivery rate</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-blue-800">6,000+</span>
              <span className="block text-gray-700">Documents delivered since 2019</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-blue-800">24/7</span>
              <span className="block text-gray-700">Emergency availability</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-blue-800">$30</span>
              <span className="block text-gray-700">Starting rate</span>
            </div>
          </div>
        </section>

        {/* Service Area Grid */}
        <section className="py-10 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Service Areas in Tulsa County</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-4 service-area">
              {[
                { name: 'Tulsa', href: '/tulsa-process-server' },
                { name: 'Broken Arrow', href: '/service-areas/broken-arrow' },
                { name: 'Bixby', href: '/service-areas/bixby' },
                { name: 'Jenks', href: '/service-areas/jenks' },
                { name: 'Sand Springs', href: '/service-areas/sand-springs' },
                { name: 'Owasso', href: '/service-areas/owasso' },
                { name: 'Glenpool', href: '/service-areas/glenpool' },
                { name: 'Sapulpa' },
                { name: 'Collinsville' },
                { name: 'Skiatook' },
                { name: 'Sperry' },
                { name: 'Catoosa' },
              ].map(city => (
                <div key={city.name} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  {city.href ? (
                    <Link href={city.href} className="text-blue-900 font-semibold underline block text-lg">{city.name}</Link>
                  ) : (
                    <span className="text-blue-900 font-semibold block text-lg">{city.name}</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center mt-1">We serve every city, town, and community in Tulsa County and <Link href="/service-areas" className="text-blue-600 hover:underline">all 77 Oklahoma counties</Link>.</p>
          </div>
        </section>

        {/* Insurance & Professionalism Note */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Insurance &amp; Professionalism</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Commercial Liability Insurance:</strong> Just Legal Solutions carries commercial general liability insurance to protect clients and their documents during transport.</li>
                <li><strong>Background-Checked Couriers:</strong> All couriers are background-checked and trained in chain-of-custody handling of legal materials.</li>
                <li><strong>Confidentiality:</strong> We maintain strict confidentiality protocols. Sealed documents are never opened. We do not provide legal review or advice &mdash; we transport and file.</li>
                <li><strong>Process Serving Division:</strong> Our <Link href="/tulsa-process-server" className="text-blue-600 hover:underline font-medium">process serving team</Link> consists of <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">licensed Oklahoma process servers under 12 O.S. &sect; 158.1</Link> for formal service of process.</li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">Last updated: February 2026</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 py-10 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Legal Courier Service Today?</h2>
            <p className="text-lg text-gray-700 mb-6">Professional legal document delivery starting at $30. Available 24/7 for emergency needs across all 77 Oklahoma counties.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <a href="tel:5393676832" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg">
                &#x1F4DE; Call (539) 367-6832
              </a>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">
                &#x1F4DD; Get Instant Quote
              </Link>
            </div>
            <p className="text-sm text-gray-600">Same-day service &bull; GPS tracking &bull; Chain-of-custody documentation &bull; $30 starting</p>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Process Serving &amp; Delivery Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/tulsa-process-server" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Tulsa Process Server</h3>
                <p className="text-sm text-gray-600 mt-1">Licensed process serving throughout Tulsa County</p>
              </Link>
              <Link href="/urgent-process-server" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Emergency Process Service</h3>
                <p className="text-sm text-gray-600 mt-1">Same-day and 2-hour emergency process serving</p>
              </Link>
              <Link href="/weekend-emergency" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Weekend &amp; Emergency Service</h3>
                <p className="text-sm text-gray-600 mt-1">24/7 availability for critical legal deadlines</p>
              </Link>
              <Link href="/oklahoma-process-server-laws" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Oklahoma Process Server Laws</h3>
                <p className="text-sm text-gray-600 mt-1">Legal requirements for serving documents in Oklahoma</p>
              </Link>
              <Link href="/family-law-service-guide-tulsa-2025" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Family Law Service Guide</h3>
                <p className="text-sm text-gray-600 mt-1">Divorce, custody &amp; family law document delivery</p>
              </Link>
              <Link href="/pricing" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Service Pricing Guide</h3>
                <p className="text-sm text-gray-600 mt-1">Transparent rates for all services starting at $30</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 border-t">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Legal Courier Service FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                  <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
