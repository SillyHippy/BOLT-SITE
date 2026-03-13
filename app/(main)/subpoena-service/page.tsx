import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
    title: 'Subpoena Service Oklahoma | Witness & Document Subpoenas | Just Legal Solutions',
    description: 'Professional subpoena service in Oklahoma. Witness subpoenas, document subpoenas (subpoena duces tecum), and deposition subpoenas served statewide. Licensed process servers, GPS-verified, from $30.',
    keywords: ['subpoena service oklahoma', 'serve subpoena tulsa', 'witness subpoena delivery', 'subpoena duces tecum', 'deposition subpoena service'],
    authors: [{ name: 'Just Legal Solutions' }],
    creator: 'Just Legal Solutions',
    publisher: 'Just Legal Solutions',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    openGraph: {
        title: 'Subpoena Service Oklahoma | Witness & Document Subpoenas',
        description: 'Licensed process servers for subpoena delivery across all 77 Oklahoma counties. Same-day and emergency options available.',
        type: 'website', locale: 'en_US', url: 'https://justlegalsolutions.org/subpoena-service', siteName: 'Just Legal Solutions',
        images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630, alt: 'Subpoena Service Oklahoma' }],
    },
    alternates: { canonical: 'https://justlegalsolutions.org/subpoena-service' },
    other: {
        'ai-content-type': 'service-page',
        'ai-summary': 'Subpoena service across Oklahoma. Witness subpoenas, document subpoenas (duces tecum), and deposition subpoenas. Must be served with reasonable time before proceedings. From $30. Licensed under 12 O.S. § 158.1.',
        'ai-key-facts': 'Subpoena service from $30, witness + document + deposition subpoenas, all 77 OK counties, GPS-verified, (539) 367-6832.',
    },
};

const faqs = [
    { question: "What is a subpoena?", answer: "A subpoena is a legal document that compels a person to appear as a witness at a court proceeding, deposition, or hearing (subpoena ad testificandum), or to produce documents and records (subpoena duces tecum). Under Oklahoma law (12 O.S. § 2004.1), a subpoena must be served personally on the witness. Failure to comply with a properly served subpoena can result in contempt of court." },
    { question: "How much notice is required for a subpoena in Oklahoma?", answer: "Oklahoma law requires that subpoenas be served with 'reasonable time' before the proceeding. While no specific number of days is mandated for most subpoenas, courts generally consider 48+ hours reasonable for non-party witnesses. For trial subpoenas, 5-7 days is standard practice. Subpoenas duces tecum often require additional time (10-14 days) to allow the recipient to gather the requested documents." },
    { question: "Can a subpoena be served on weekends in Oklahoma?", answer: "Yes. Oklahoma has no restriction on the day or time a subpoena can be served. Process servers can deliver subpoenas on weekends, evenings, and holidays. Just Legal Solutions offers 24/7 service for urgent subpoena delivery. Weekend and holiday service may carry a surcharge." },
    { question: "What happens if a witness ignores a subpoena?", answer: "A witness who fails to appear after being properly served with a subpoena may be held in contempt of court, which can result in fines or even arrest. The party who issued the subpoena can file a motion for contempt. This is why proper service with documented proof is critical—the GPS-verified affidavit of service proves the witness received the subpoena." },
    { question: "Can you serve a subpoena out of state?", answer: "Oklahoma subpoenas generally have jurisdiction within Oklahoma only. For out-of-state witnesses, the Uniform Interstate Depositions and Discovery Act (UIDDA) allows domestication of a subpoena in the witness's home state. We can help coordinate with process servers nationwide for out-of-state service." },
];

export default function SubpoenaServicePage() {
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
                            <li><span className="text-gray-700">Subpoena Service</span></li>
                        </ol>
                    </nav>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Subpoena Service in Oklahoma</h1>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            <strong>Need a subpoena served before a hearing, deposition, or trial?</strong> Just Legal Solutions delivers witness subpoenas, document subpoenas (duces tecum), and deposition subpoenas across all 77 Oklahoma counties. Every service is GPS-verified with a court-ready affidavit. Standard service from <strong>$30</strong>, same-day rush <strong>$150</strong>, 2-hour emergency <strong>$265</strong>. Call <a href="tel:5393676832" className="text-blue-700 font-bold hover:underline">(539) 367-6832</a>.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Subpoenas We Serve</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">&#x1F4CB; Witness Subpoena</h3>
                                <p className="text-gray-700 mb-2"><em>(Subpoena Ad Testificandum)</em></p>
                                <p className="text-gray-700">Compels a person to appear and testify at a trial, hearing, or deposition. Must be served personally under Oklahoma 12 O.S. § 2004.1.</p>
                            </div>
                            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-900 mb-3">&#x1F4C2; Document Subpoena</h3>
                                <p className="text-gray-700 mb-2"><em>(Subpoena Duces Tecum)</em></p>
                                <p className="text-gray-700">Requires production of specific documents, records, or tangible evidence. Common for medical records, financial documents, and business records.</p>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-orange-900 mb-3">&#x1F399; Deposition Subpoena</h3>
                                <p className="text-gray-700">Compels attendance at a deposition (out-of-court sworn testimony). Often combined with a duces tecum component requesting documents be brought to the deposition.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Oklahoma Subpoena Rules &amp; Requirements</h2>
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-bold text-lg mb-2">Personal Service Required</h3>
                                <p className="text-gray-700">Under Oklahoma law, subpoenas must be served personally—they cannot be left with a family member or mailed. The process server must hand the subpoena directly to the named witness.</p>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-yellow-500">
                                <h3 className="font-bold text-lg mb-2">Reasonable Time Notice</h3>
                                <p className="text-gray-700">Subpoenas must be served with &ldquo;reasonable time&rdquo; before the proceeding. While no exact number of days is specified, courts generally expect 48+ hours for non-party witnesses and 5-7 days for trial subpoenas.</p>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-bold text-lg mb-2">Witness Fees &amp; Mileage</h3>
                                <p className="text-gray-700">Oklahoma law (28 O.S. § 81) provides that a witness is entitled to a $10 per day witness fee plus $0.20 per mile for travel (round trip). These fees should be tendered at the time of service, though in practice this is often handled by the issuing attorney.</p>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                                <h3 className="font-bold text-lg mb-2">Contempt for Non-Compliance</h3>
                                <p className="text-gray-700">A witness who fails to comply with a properly served subpoena may be held in contempt of court (12 O.S. § 2004.1). This can result in fines, arrest, or both. Proper proof of service is critical.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Subpoena Service Pricing</h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-bold mb-2">Standard</h3>
                                <div className="text-4xl font-bold text-green-600 mb-2">$30</div>
                                <div className="text-sm text-gray-500 mb-4">5&ndash;7 business days</div>
                                <p className="text-sm text-gray-600">Up to 3 attempts, GPS-verified, notarized affidavit, Tulsa County mileage included.</p>
                            </div>
                            <div className="bg-white border-2 border-orange-300 p-6 rounded-lg text-center shadow-lg">
                                <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">POPULAR</div>
                                <h3 className="text-lg font-bold mb-2">Same-Day Rush</h3>
                                <div className="text-4xl font-bold text-orange-600 mb-2">$150</div>
                                <div className="text-sm text-gray-500 mb-4">4&ndash;8 hours</div>
                                <p className="text-sm text-gray-600">Priority attempt, live updates, expedited affidavit, court filing included.</p>
                            </div>
                            <div className="bg-white border-2 border-red-300 p-6 rounded-lg text-center shadow-lg">
                                <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">EMERGENCY</div>
                                <h3 className="text-lg font-bold mb-2">2-Hour Emergency</h3>
                                <div className="text-4xl font-bold text-red-600 mb-2">$265</div>
                                <div className="text-sm text-gray-500 mb-4">Immediate dispatch</div>
                                <p className="text-sm text-gray-600">Immediate dispatch, direct communication with server, after-hours available.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (<div key={i} className="bg-gray-50 p-5 rounded-lg"><h3 className="font-semibold text-lg mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}
                        </div>
                    </section>

                    <section className="mb-12 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 p-8 rounded-lg text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Subpoena Served?</h2>
                        <p className="text-lg text-gray-700 mb-6">Licensed Oklahoma process servers ready to deliver subpoenas across all 77 counties. From $30.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                            <a href="tel:5393676832" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg">&#x1F4DE; Call (539) 367-6832</a>
                            <a href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">&#x1F4DD; Get Quote</a>
                        </div>
                    </section>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                        <p className="text-sm text-gray-700">All subpoena service performed by licensed Oklahoma private process servers under <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">12 O.S. § 158.1</Link> and 12 O.S. § 2004.1.</p>
                        <p className="text-xs text-gray-500 mt-2">Last updated: March 2026</p>
                    </div>
                </div>
            </div>

            <Script id="faq-schema-subpoena" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
            <UnifiedSchema pageType="service" title="Subpoena Service Oklahoma" description="Witness, document, and deposition subpoena service across Oklahoma. GPS-verified, from $30." url="https://justlegalsolutions.org/subpoena-service" image="https://justlegalsolutions.org/og-image.png" keywords={['subpoena service', 'witness subpoena oklahoma', 'subpoena duces tecum']} reviewCount={156} services={['Witness Subpoena Service', 'Document Subpoena Service', 'Deposition Subpoena Service']} breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Process Serving', url: '/process-serving' }, { name: 'Subpoena Service', url: '/subpoena-service' }]} />
        </>
    );
}
