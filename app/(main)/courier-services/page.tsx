import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
    title: 'Legal Courier Services Oklahoma | Document Delivery & Court Filing | Just Legal Solutions',
    description: 'Professional legal courier services across Oklahoma. Courthouse filing, document pickup and delivery, file-stamped copy returns, and inter-office legal document transport. From $30.',
    keywords: ['legal courier services oklahoma', 'courthouse filing service', 'document delivery tulsa', 'legal document courier', 'court filing service oklahoma'],
    authors: [{ name: 'Just Legal Solutions' }],
    creator: 'Just Legal Solutions',
    publisher: 'Just Legal Solutions',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    openGraph: {
        title: 'Legal Courier Services Oklahoma | Document Delivery & Court Filing',
        description: 'Courthouse filing, document pickup, secure legal document transport across Oklahoma. Same-day service available.',
        type: 'website', locale: 'en_US', url: 'https://justlegalsolutions.org/courier-services', siteName: 'Just Legal Solutions',
        images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630, alt: 'Legal Courier Services Oklahoma' }],
    },
    alternates: { canonical: 'https://justlegalsolutions.org/courier-services' },
    other: {
        'ai-content-type': 'service-page',
        'ai-summary': 'Legal courier services across Oklahoma including courthouse filing, document pickup and delivery, file-stamped copy returns, and secure chain-of-custody transport. Distinct from process serving. From $30.',
        'ai-key-facts': 'Legal courier from $30, courthouse filing, document delivery, statewide, chain-of-custody tracking, (539) 367-6832.',
    },
};

const faqs = [
    { question: "What's the difference between a legal courier and a process server?", answer: "A process server delivers legal documents to parties in a lawsuit as required by law (service of process). A legal courier handles non-service document tasks: filing documents with the court, picking up file-stamped copies, transporting documents between law offices, delivering documents to court reporters, and other logistics. Just Legal Solutions provides both services — see our process serving page for formal service of process." },
    { question: "Can you file documents at the courthouse for me?", answer: "Yes. We pick up your documents from your office (or receive them electronically), file them at the appropriate Oklahoma district court clerk's office, and return file-stamped copies to you. We handle filings at Tulsa County Courthouse, Oklahoma County Courthouse, and courts across all 77 counties." },
    { question: "How much does legal courier service cost?", answer: "Legal courier services start at $30 for standard same-county pickups and deliveries. Courthouse filing runs $30-$50 depending on complexity (filing fees are separate and charged at cost). Custom routes and multi-stop deliveries are quoted based on distance and number of stops. Call (539) 367-6832 for a custom quote." },
    { question: "Do you handle confidential documents?", answer: "Yes. All documents are handled under strict chain-of-custody protocols. We track pickup time, transport method, and delivery confirmation for every item. Our couriers are bonded and trained in handling confidential legal materials. We can provide signed chain-of-custody logs for sensitive matters." },
];

export default function CourierServicesPage() {
    return (
        <>
            <div className="min-h-screen bg-white">
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
                        <ol className="flex items-center space-x-2">
                            <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
                            <li className="text-gray-500">/</li>
                            <li><span className="text-gray-700">Legal Courier Services</span></li>
                        </ol>
                    </nav>

                    <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Legal Courier Services in Oklahoma</h1>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            <strong>Beyond process serving, Just Legal Solutions offers full legal courier services</strong> across Oklahoma. Courthouse filings, document pickups, file-stamped copy returns, and secure inter-office transport. Every delivery is tracked with chain-of-custody documentation. Starting at <strong>$30</strong>. Call <a href="tel:5393676832" className="text-teal-700 font-bold hover:underline">(539) 367-6832</a>.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Courier Services</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-teal-900 mb-3">&#x1F3DB; Courthouse Filing</h3>
                                <p className="text-gray-700">We file motions, petitions, and other documents with any Oklahoma district court clerk. Includes pickup from your office, filing, and return of file-stamped copies the same day.</p>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x1F4E6; Document Pickup &amp; Delivery</h3>
                                <p className="text-gray-700">Secure pickup and delivery of legal documents between law firms, courthouses, corporate offices, and other locations throughout Oklahoma.</p>
                            </div>
                            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-900 mb-3">&#x1F4C4; File-Stamped Copy Returns</h3>
                                <p className="text-gray-700">After filing, we obtain file-stamped copies and return them to your office or deliver to specified parties. Critical for same-day motions and emergency filings.</p>
                            </div>
                            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">&#x1F512; Secure Document Transport</h3>
                                <p className="text-gray-700">Chain-of-custody tracked transport for sensitive legal documents, evidence, and exhibits. Ideal for trial preparation, depositions, and inter-firm transfers.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Courier vs. Process Serving</h2>
                        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6">
                            <p className="text-gray-700 mb-4"><strong>Important distinction:</strong> Legal courier services handle document logistics — filing, transport, and delivery. They are <em>not</em> a substitute for formal service of process, which requires compliance with Oklahoma 12 O.S. § 2004.</p>
                            <p className="text-gray-700">If you need to formally serve a party in a lawsuit, see our <Link href="/process-serving" className="text-blue-600 hover:underline font-medium">process serving services</Link>. For Tulsa-area courier needs specifically, see our <Link href="/courier-services-tulsa" className="text-blue-600 hover:underline font-medium">Tulsa legal courier page</Link>.</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-bold mb-2">Standard Delivery</h3>
                                <div className="text-4xl font-bold text-teal-600 mb-2">$30</div>
                                <div className="text-sm text-gray-500 mb-4">Same-county</div>
                                <ul className="text-sm text-gray-600 space-y-1 text-left">
                                    <li>&#x2713; Pickup &amp; delivery</li>
                                    <li>&#x2713; Chain-of-custody log</li>
                                    <li>&#x2713; Delivery confirmation</li>
                                </ul>
                            </div>
                            <div className="bg-white border-2 border-teal-300 p-6 rounded-lg text-center shadow-lg">
                                <h3 className="text-lg font-bold mb-2">Courthouse Filing</h3>
                                <div className="text-4xl font-bold text-teal-600 mb-2">$30-$50</div>
                                <div className="text-sm text-gray-500 mb-4">Filing fees separate</div>
                                <ul className="text-sm text-gray-600 space-y-1 text-left">
                                    <li>&#x2713; Document filing</li>
                                    <li>&#x2713; File-stamped copies</li>
                                    <li>&#x2713; Same-day return</li>
                                </ul>
                            </div>
                            <div className="bg-white border-2 border-orange-300 p-6 rounded-lg text-center shadow-lg">
                                <h3 className="text-lg font-bold mb-2">Rush Same-Day</h3>
                                <div className="text-4xl font-bold text-orange-600 mb-2">$75+</div>
                                <div className="text-sm text-gray-500 mb-4">Priority dispatch</div>
                                <ul className="text-sm text-gray-600 space-y-1 text-left">
                                    <li>&#x2713; Priority courier</li>
                                    <li>&#x2713; Live updates</li>
                                    <li>&#x2713; Multi-stop available</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (<div key={i} className="bg-gray-50 p-5 rounded-lg"><h3 className="font-semibold text-lg mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}
                        </div>
                    </section>

                    <section className="mb-12 bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200 p-8 rounded-lg text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Legal Courier?</h2>
                        <p className="text-lg text-gray-700 mb-6">Courthouse filings, document pickups, and secure transport. From $30.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                            <a href="tel:5393676832" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg">&#x1F4DE; Call (539) 367-6832</a>
                            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">&#x1F4DD; Get Quote</a>
                        </div>
                    </section>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                        <p className="text-sm text-gray-700">Bonded legal couriers. All transport tracked with chain-of-custody documentation.</p>
                        <p className="text-xs text-gray-500 mt-2">Last updated: March 2026</p>
                    </div>
                </div>
            </div>

            <Script id="faq-schema-courier" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
            <UnifiedSchema pageType="service" title="Legal Courier Services Oklahoma" description="Courthouse filing, document delivery, and secure legal transport across Oklahoma." url="https://justlegalsolutions.org/courier-services" image="https://justlegalsolutions.org/og-image.png" keywords={['legal courier', 'courthouse filing', 'document delivery oklahoma']} reviewCount={156} services={['Courthouse Filing', 'Document Pickup & Delivery', 'File-Stamped Copy Returns', 'Secure Document Transport']} breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Courier Services', url: '/courier-services' }]} />
        </>
    );
}
