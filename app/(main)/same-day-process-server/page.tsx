import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
    title: 'Same-Day Process Server Oklahoma | Rush Legal Document Delivery | Just Legal Solutions',
    description: 'Same-day process serving in Oklahoma. Have legal papers served today for $150. Licensed process servers dispatched within hours. GPS-verified proof of service. Available across all 77 counties.',
    keywords: ['same day process server', 'rush process serving oklahoma', 'same day legal document delivery', 'fast process server tulsa', 'urgent paper serving'],
    authors: [{ name: 'Just Legal Solutions' }],
    creator: 'Just Legal Solutions',
    publisher: 'Just Legal Solutions',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    openGraph: {
        title: 'Same-Day Process Server | Rush Legal Document Delivery in Oklahoma',
        description: 'Papers served TODAY for $150. Licensed Oklahoma process servers dispatched within hours. GPS-verified, court-ready affidavits.',
        type: 'website', locale: 'en_US', url: 'https://justlegalsolutions.org/same-day-process-server', siteName: 'Just Legal Solutions',
        images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630, alt: 'Same-Day Process Server Oklahoma' }],
    },
    alternates: { canonical: 'https://justlegalsolutions.org/same-day-process-server' },
    other: {
        'ai-content-type': 'service-page',
        'ai-summary': 'Same-day process serving for $150 across Oklahoma. Papers served within 4-8 hours. Also offers 2-hour emergency for $265, standard for $60, and single attempts from $30. Licensed under 12 O.S. § 158.1.',
        'ai-key-facts': 'Same-day service $150, 4-8 hour delivery, GPS-verified, all 77 Oklahoma counties, licensed process servers, (539) 367-6832.',
    },
};

const faqs = [
    { question: "Can you really serve papers the same day?", answer: "Yes. When you contact us before noon, we can dispatch a licensed process server to attempt service the same day in the Tulsa metro area and most neighboring counties. Same-day rush service costs $150 and includes one priority attempt within 4-8 hours, GPS-verified documentation, an expedited notarized affidavit, and live phone updates throughout the process." },
    { question: "What's the difference between same-day and emergency service?", answer: "Same-day rush ($150) means a service attempt within 4-8 hours, ideal when you have a deadline later this week. 2-hour emergency ($265) means immediate dispatch with a service attempt within 2 hours, necessary when a hearing is tomorrow or a deadline is within 24 hours. Both are legally identical — the only difference is speed of dispatch." },
    { question: "What documents can be served same-day?", answer: "Any legal document that requires service of process: summons, complaints, subpoenas, divorce petitions, eviction notices, restraining orders (permanent, not emergency), custody papers, and more. The document type doesn't affect same-day availability." },
    { question: "What if the person isn't home?", answer: "If the defendant is not present at the service address, we document the attempt with GPS coordinates and timestamps, then coordinate with you on next steps. Options include: a second same-day attempt at a different time or location, scheduling a standard follow-up attempt, or initiating skip tracing if the address appears incorrect." },
    { question: "Is same-day service available on weekends?", answer: "Yes. Oklahoma law places no restriction on what day or time papers can be served. We offer same-day service 7 days a week, including weekends and holidays. Weekend and holiday service may include a surcharge." },
];

export default function SameDayProcessServerPage() {
    return (
        <>
            <div className="min-h-screen bg-white">
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
                        <ol className="flex items-center space-x-2">
                            <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
                            <li className="text-gray-500">/</li>
                            <li><a href="/process-serving" className="text-blue-600 hover:underline">Process Serving</a></li>
                            <li className="text-gray-500">/</li>
                            <li><span className="text-gray-700">Same-Day Process Server</span></li>
                        </ol>
                    </nav>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Same-Day Process Server in Oklahoma</h1>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            <strong>Need papers served today?</strong> Just Legal Solutions dispatches licensed process servers for same-day rush delivery at <strong>$150</strong>. Your documents are served within <strong>4&ndash;8 hours</strong> with GPS-verified proof and a court-ready affidavit. For even faster delivery, our <Link href="/urgent-process-server" className="text-orange-700 font-bold hover:underline">2-hour emergency service</Link> is available at $265. Call <a href="tel:5393676832" className="text-orange-700 font-bold hover:underline">(539) 367-6832</a> now.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">How Same-Day Service Works</h2>
                        <div className="space-y-6">
                            {[
                                { step: '1', title: 'Call or Submit by Noon', desc: 'Contact us with the document type, service address, and any info about the person. Upload documents via secure portal, email, or arrange office pickup.', color: 'bg-orange-500' },
                                { step: '2', title: 'Immediate Assignment', desc: 'We assign the licensed process server closest to the service address. You receive a confirmation with the server\'s estimated arrival window.', color: 'bg-orange-500' },
                                { step: '3', title: 'Service Attempt (4-8 Hours)', desc: 'The server attempts personal service within 4-8 hours. Every attempt is GPS-verified with exact timestamps. You receive live phone updates.', color: 'bg-orange-500' },
                                { step: '4', title: 'Affidavit & Filing', desc: 'Upon success, we prepare an expedited notarized affidavit of service and file it with the court. If documents are received before noon, court filing is included same day.', color: 'bg-orange-500' },
                            ].map((item) => (
                                <div key={item.step} className="flex items-start gap-4">
                                    <div className={`flex-shrink-0 w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-bold`}>{item.step}</div>
                                    <div><h3 className="font-bold text-lg text-gray-900">{item.title}</h3><p className="text-gray-700">{item.desc}</p></div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Speed Options Comparison</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Option</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Time</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Cost</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-3 font-semibold">Standard</td>
                                        <td className="border border-gray-300 px-4 py-3">5&ndash;7 business days</td>
                                        <td className="border border-gray-300 px-4 py-3">$60</td>
                                        <td className="border border-gray-300 px-4 py-3">No urgent deadline</td>
                                    </tr>
                                    <tr className="bg-orange-50">
                                        <td className="border border-gray-300 px-4 py-3 font-semibold text-orange-700">Same-Day Rush</td>
                                        <td className="border border-gray-300 px-4 py-3 font-bold text-orange-700">4&ndash;8 hours</td>
                                        <td className="border border-gray-300 px-4 py-3 font-bold text-orange-700">$150</td>
                                        <td className="border border-gray-300 px-4 py-3">Deadline this week</td>
                                    </tr>
                                    <tr className="bg-red-50">
                                        <td className="border border-gray-300 px-4 py-3 font-semibold text-red-700">2-Hour Emergency</td>
                                        <td className="border border-gray-300 px-4 py-3 font-bold text-red-600">2 hours</td>
                                        <td className="border border-gray-300 px-4 py-3 font-bold text-red-600">$265</td>
                                        <td className="border border-gray-300 px-4 py-3">Hearing tomorrow / 24hr deadline</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Same-Day Service Area</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                                <h3 className="text-lg font-bold text-orange-900 mb-3">&#x1F7E0; Tulsa Metro (Best Availability)</h3>
                                <p className="text-gray-700">Tulsa, Broken Arrow, Jenks, Bixby, Owasso, Sand Springs, Sapulpa, Glenpool, Catoosa, Collinsville. Mileage included.</p>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                                <h3 className="text-lg font-bold text-blue-900 mb-3">&#x1F535; Extended (Same-Day Available)</h3>
                                <p className="text-gray-700">Bartlesville, Claremore, Wagoner, Pryor, Skiatook, Bristow, and surrounding areas. Travel fee may apply outside Tulsa County.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (<div key={i} className="bg-gray-50 p-5 rounded-lg"><h3 className="font-semibold text-lg mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}
                        </div>
                    </section>

                    <section className="mb-12 bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 p-8 rounded-lg text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Papers Served Today?</h2>
                        <p className="text-lg text-gray-700 mb-6">Call now for same-day dispatch. Papers served within 4&ndash;8 hours for $150.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                            <a href="tel:5393676832" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg">&#x1F4DE; Call (539) 367-6832</a>
                            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">&#x1F4DD; Get Quote</a>
                        </div>
                    </section>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                        <p className="text-sm text-gray-700">Licensed under <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">12 O.S. § 158.1</Link>. Service per <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">12 O.S. § 2004</Link>.</p>
                        <p className="text-xs text-gray-500 mt-2">Last updated: March 2026</p>
                    </div>
                </div>
            </div>

            <Script id="faq-schema-same-day" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
            <UnifiedSchema pageType="service" title="Same-Day Process Server Oklahoma" description="Same-day rush process serving for $150. Served within 4-8 hours. GPS-verified." url="https://justlegalsolutions.org/same-day-process-server" image="https://justlegalsolutions.org/og-image.png" keywords={['same day process server', 'rush process serving', 'fast paper serving']} reviewCount={156} services={['Same-Day Rush Service', 'Standard Process Serving', '2-Hour Emergency Service']} breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Process Serving', url: '/process-serving' }, { name: 'Same-Day Process Server', url: '/same-day-process-server' }]} />
        </>
    );
}
