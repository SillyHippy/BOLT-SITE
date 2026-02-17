import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'What Services Do Legal Couriers Provide? | Tulsa County Legal Document Delivery 2026',
  description: 'Legal couriers provide same-day document delivery, court filings, process serving, and secure transport for law firms. Just Legal Solutions serves Tulsa County starting at $30. 24/7 emergency available.',
  keywords: 'legal courier services, what services do legal couriers provide, courier services Tulsa, legal document delivery, court filing services, same-day courier Oklahoma, secure document transport, legal courier Tulsa County',
  alternates: {
    canonical: 'https://justlegalsolutions.org/courier-services-tulsa'
  },
  openGraph: {
    title: 'What Services Do Legal Couriers Provide? | Tulsa Legal Document Delivery',
    description: 'Legal couriers deliver court filings, serve legal documents, transport evidence, and handle time-sensitive legal materials. Same-day service starting at $30.',
    type: 'website',
    locale: 'en_US',
    url: 'https://justlegalsolutions.org/courier-services-tulsa',
    siteName: 'Just Legal Solutions',
  },
  other: {
    'ai-content-type': 'service-guide',
    'ai-summary': 'Legal couriers provide: 1) Same-day legal document delivery, 2) Court filing and document stamping, 3) Process serving, 4) Evidence and exhibit transport, 5) Inter-office legal mail, 6) Deposition material delivery, 7) Real estate closing document transport, 8) Medical record pickup. Just Legal Solutions in Tulsa County offers these services starting at $30 with 24/7 emergency availability.',
    'ai-key-facts': 'Legal courier services starting at $30, same-day delivery, court filing service, process serving, evidence transport, 24/7 emergency, Tulsa County and all 77 Oklahoma counties.',
  },
};

export default function CourierServicesTulsaPage() {
  const faqs = [
    {
      question: 'What services do legal couriers provide?',
      answer: 'Legal couriers provide same-day legal document delivery, court filing and document stamping, process serving, evidence and exhibit transport, inter-office legal mail between law firm locations, deposition material delivery, real estate closing document transport, and medical record pickup. Just Legal Solutions offers all of these services throughout Tulsa County and all 77 Oklahoma counties, starting at $30 per delivery with 24/7 emergency availability.'
    },
    {
      question: 'How fast can you deliver legal documents in Tulsa?',
      answer: 'We offer same-day and on-demand courier service throughout Tulsa County. Most standard deliveries are completed within 2-4 hours. Emergency 2-hour delivery is available for $265, and same-day rush service costs $150. Standard courier service starts at $30.'
    },
    {
      question: 'Do you provide secure delivery for sensitive legal materials?',
      answer: 'Yes. All deliveries are handled by professional, background-checked couriers with chain-of-custody documentation, GPS tracking, and tamper-evident packaging for sensitive materials. We comply with all Oklahoma confidentiality requirements for legal documents.'
    },
    {
      question: 'Can you file documents at the Tulsa County Courthouse?',
      answer: 'Absolutely. We offer courthouse filing and document stamping at the Tulsa County Courthouse, Oklahoma County Courthouse, and district courts statewide. Our couriers are familiar with filing requirements, clerk office hours, and fee schedules for each court.'
    },
    {
      question: 'What areas do legal courier services cover?',
      answer: 'Just Legal Solutions serves all of Tulsa County—including Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, and Glenpool—plus all 77 Oklahoma counties. Statewide delivery is available with same-day and next-day options.'
    },
    {
      question: 'How much do legal courier services cost?',
      answer: 'Legal courier services from Just Legal Solutions start at $30 for standard local delivery in Tulsa County. Same-day rush delivery costs $150, and 2-hour emergency delivery is $265. Volume discounts are available for law firms with recurring needs. Call (539) 367-6832 for a custom quote.'
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
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "areaServed": [
              { "@type": "County", "name": "Tulsa County" },
              { "@type": "State", "name": "Oklahoma" }
            ],
            "serviceType": ["Legal Courier", "Document Delivery", "Court Filing", "Process Serving"]
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
        title="What Services Do Legal Couriers Provide? | Tulsa County Legal Document Delivery"
        description="Legal couriers provide same-day document delivery, court filings, process serving, and secure transport. Just Legal Solutions serves Tulsa County starting at $30."
        serviceDetails={{
          name: "Legal Courier Services Tulsa",
          description: "Professional legal courier and document delivery services in Tulsa County with same-day and rush options available 24/7.",
          price: "$30-$265",
          areaServed: ["Tulsa County", "Broken Arrow", "Bixby", "Jenks", "Owasso", "Sand Springs", "Glenpool"],
          serviceType: ["Legal Document Delivery", "Court Filing", "Process Serving", "Evidence Transport", "Same-Day Delivery"]
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

        {/* Direct Answer Block — What services do legal couriers provide? */}
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
              What Services Do Legal Couriers Provide?
            </h1>
            <div className="direct-answer">
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                <strong>Legal couriers provide same-day delivery of court documents, process serving, courthouse filing and stamping, evidence and exhibit transport, deposition material delivery, inter-office legal mail, real estate closing documents, and medical record pickup.</strong> In Oklahoma, legal couriers must handle documents with chain-of-custody protocols to maintain admissibility. Just Legal Solutions provides all of these services throughout Tulsa County and all 77 Oklahoma counties, <strong>starting at $30 per delivery</strong> with <strong>24/7 emergency availability</strong>. Call <a href="tel:5393676832" className="text-green-700 font-bold hover:underline">(539) 367-6832</a> for immediate service.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-blue-900 text-white pb-12">
          <div className="container mx-auto px-4 pt-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Tulsa County Legal Courier &amp; Document Delivery</h2>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Same-day legal document delivery, court filings, process serving, and secure transport &mdash; starting at $30 with 24/7 emergency service.</p>
            <div className="flex justify-center mt-8">
              <Image src="/images/tulsa-courier-downtown.jpeg" width={600} height={350} alt="Legal courier services Tulsa County - professional document delivery" className="rounded-lg shadow-lg" />
            </div>
            <p className="text-sm text-blue-100 mt-2">Serving Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Glenpool &amp; all 77 Oklahoma counties</p>
          </div>
        </section>

        {/* Complete List of Legal Courier Services */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete List of Legal Courier Services</h2>
            <p className="text-lg text-gray-700 mb-8">
              Legal couriers handle a wide range of time-sensitive tasks that law firms, courts, and businesses depend on daily. Here is every service a professional legal courier provides, along with how Just Legal Solutions delivers each one in Oklahoma:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x1F4C4; Legal Document Delivery</h3>
                <p className="text-gray-700 mb-2">The core service: picking up legal documents from one location and delivering them to another with proof of delivery. This includes contracts, pleadings, motions, briefs, and correspondence between attorneys, courts, and clients.</p>
                <p className="text-sm text-green-700 font-semibold">Starting at $30 &bull; Same-day available</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x1F3DB;&#xFE0F; Court Filing &amp; Document Stamping</h3>
                <p className="text-gray-700 mb-2">Legal couriers file documents at the courthouse on your behalf, wait for clerk stamping, and return file-stamped copies to your office. This saves attorneys hours of wait time at the Tulsa County or Oklahoma County Courthouse.</p>
                <p className="text-sm text-green-700 font-semibold">Same-day filing &bull; All Oklahoma courts</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x2696;&#xFE0F; Process Serving</h3>
                <p className="text-gray-700 mb-2">Many legal courier companies also provide licensed process serving &mdash; the legal delivery of summons, subpoenas, divorce papers, eviction notices, and other court-ordered documents that require proof of personal service under Oklahoma Title 12.</p>
                <p className="text-sm text-green-700 font-semibold">Starting at $30 &bull; GPS-verified</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x1F4E6; Evidence &amp; Exhibit Transport</h3>
                <p className="text-gray-700 mb-2">Secure transport of physical evidence, trial exhibits, and sensitive case materials with chain-of-custody documentation. Tamper-evident packaging ensures materials remain admissible in court.</p>
                <p className="text-sm text-green-700 font-semibold">Chain-of-custody documented</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x1F4DD; Deposition Material Delivery</h3>
                <p className="text-gray-700 mb-2">Delivering deposition transcripts, video recordings, exhibits, and supporting materials to attorneys, court reporters, and mediators on tight deadlines before proceedings.</p>
                <p className="text-sm text-green-700 font-semibold">Rush delivery available</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x1F3E2; Inter-Office Legal Mail</h3>
                <p className="text-gray-700 mb-2">Scheduled daily or weekly courier runs between law firm offices, satellite locations, and partner firms. Eliminates delays from standard mail and ensures confidential documents never enter the public postal system.</p>
                <p className="text-sm text-green-700 font-semibold">Scheduled routes &bull; Volume discounts</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x1F3E0; Real Estate Closing Documents</h3>
                <p className="text-gray-700 mb-2">Title companies and real estate attorneys rely on legal couriers to transport closing packages, title documents, and mortgage paperwork between all parties on closing day &mdash; when every hour matters.</p>
                <p className="text-sm text-green-700 font-semibold">Same-day closings supported</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x1F3E5; Medical Record Pickup</h3>
                <p className="text-gray-700 mb-2">Personal injury and medical malpractice attorneys need physical medical records retrieved from hospitals, clinics, and providers. Legal couriers handle HIPAA-compliant pickup and secure delivery.</p>
                <p className="text-sm text-green-700 font-semibold">HIPAA-compliant transport</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Oklahoma Law Firms Use Legal Couriers */}
        <section className="py-12 bg-gray-50 border-b">
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
                <p className="text-gray-600">Oklahoma courts enforce strict filing deadlines. A professional courier ensures documents reach the clerk&apos;s office before cutoff &mdash; with same-day and emergency options when time is critical.</p>
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
              <span className="block text-gray-700">Documents delivered countywide</span>
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
                { name: 'Collinsville' },
                { name: 'Skiatook' },
                { name: 'Sapulpa' },
                { name: 'Sperry' },
                { name: 'Liberty' },
              ].map(city => (
                <div key={city.name} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  {city.href ? (
                    <Link href={city.href} className="text-blue-900 font-semibold underline block text-lg">{city.name}</Link>
                  ) : (
                    <span className="text-blue-900 font-semibold block text-lg opacity-60">{city.name}</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center mt-1">We serve every city, town, and community in Tulsa County and all 77 Oklahoma counties.</p>
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
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">
                &#x1F4DD; Get Instant Quote
              </a>
            </div>
            <p className="text-sm text-gray-600">Same-day service &bull; GPS tracking &bull; Chain-of-custody documentation &bull; $30 starting</p>
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
