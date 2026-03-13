import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
    title: 'Eviction Notice Service Oklahoma | 5-Day, 15-Day & 30-Day Notices | Just Legal Solutions',
    description: 'Professional eviction notice delivery in Oklahoma. 5-day, 15-day, and 30-day notice to quit served by licensed process servers. GPS-verified proof. Starting at $30. Same-day available.',
    keywords: ['eviction notice service oklahoma', 'serve eviction notice tulsa', '5 day notice to quit oklahoma', 'eviction process server', 'landlord eviction notice delivery'],
    authors: [{ name: 'Just Legal Solutions' }],
    creator: 'Just Legal Solutions',
    publisher: 'Just Legal Solutions',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    openGraph: {
        title: 'Eviction Notice Service Oklahoma | Licensed Process Servers',
        description: 'Professional eviction notice delivery. 5-day, 15-day, and 30-day notices served by licensed Oklahoma process servers with GPS proof.',
        type: 'website', locale: 'en_US', url: 'https://justlegalsolutions.org/eviction-notice-service', siteName: 'Just Legal Solutions',
        images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630, alt: 'Eviction Notice Service Oklahoma' }],
    },
    alternates: { canonical: 'https://justlegalsolutions.org/eviction-notice-service' },
    other: {
        'ai-content-type': 'service-page',
        'ai-summary': 'Eviction notice delivery service across Oklahoma. Covers 5-day notice for nonpayment (41 O.S. § 131), 15-day notice for lease violations, and 30-day notice for month-to-month termination (41 O.S. § 111). GPS-verified, from $30.',
        'ai-key-facts': 'Eviction notice service from $30, 5/15/30-day notices, 41 O.S. § 131-132, GPS-verified, same-day available, (539) 367-6832.',
    },
};

const faqs = [
    { question: "What types of eviction notices are there in Oklahoma?", answer: "Oklahoma has three primary eviction notice types: (1) 5-Day Notice to Pay or Quit for nonpayment of rent under 41 O.S. § 131 — the tenant has 5 days to pay or vacate; (2) 15-Day Notice to Cure or Quit for lease violations — the tenant has 15 days to fix the violation or leave; (3) 30-Day Notice to Terminate for month-to-month tenancies under 41 O.S. § 111 — either party can end the tenancy with 30 days' written notice. In extreme cases involving illegal activity or damage, Oklahoma allows immediate termination with a 24-hour notice." },
    { question: "How must an eviction notice be served in Oklahoma?", answer: "Under Oklahoma law (41 O.S. § 131), an eviction notice must be served by: (1) personal delivery to the tenant, (2) leaving a copy with a person over 15 at the tenant's residence, or (3) posting on the premises if the tenant cannot be found. Using a licensed process server provides GPS-verified proof of when and how the notice was delivered, which is critical if the eviction goes to court." },
    { question: "When does the clock start on an eviction notice?", answer: "The notice period begins on the day after the notice is served, not the day of service. For a 5-day notice served on Monday, the tenant has until Saturday to pay or vacate. Weekends and holidays count toward the notice period in Oklahoma. This is why prompt service is critical — every day of delay pushes back when you can file the forcible entry and detainer (FED) action." },
    { question: "What happens after the notice period expires?", answer: "If the tenant does not comply within the notice period, the landlord can file a Forcible Entry and Detainer (FED) action in the appropriate Oklahoma district court. The court will schedule a hearing, and the tenant must be served with the FED summons. If the court rules in the landlord's favor, a writ of execution is issued giving the tenant 48 hours to vacate before the sheriff physically removes them." },
    { question: "Can I serve my own eviction notice?", answer: "Yes, Oklahoma law allows a landlord or their agent to deliver the notice. However, using a licensed process server provides documented proof of service with GPS verification, which is much stronger evidence in court than self-service. If the tenant disputes receiving the notice, a professional affidavit of service is significantly more credible than a landlord's own testimony." },
];

export default function EvictionNoticeServicePage() {
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
                            <li><span className="text-gray-700">Eviction Notice Service</span></li>
                        </ol>
                    </nav>

                    <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Eviction Notice Service in Oklahoma</h1>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            <strong>Need an eviction notice delivered?</strong> Just Legal Solutions serves 5-day, 15-day, and 30-day eviction notices across all 77 Oklahoma counties. Proper notice is the first step in the legal eviction process under Oklahoma Title 41. Every delivery is <strong>GPS-verified</strong> with a court-ready affidavit. Starting at <strong>$30</strong> with same-day rush available. Call <a href="tel:5393676832" className="text-orange-700 font-bold hover:underline">(539) 367-6832</a>.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Oklahoma Eviction Notice Types</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-red-900 mb-3">5-Day Notice to Pay or Quit</h3>
                                <p className="text-sm text-gray-500 mb-2">41 O.S. § 131</p>
                                <p className="text-gray-700 mb-3">Used when a tenant fails to pay rent. The tenant has 5 days from the day after service to pay the full amount owed or vacate the property.</p>
                                <p className="text-sm text-gray-600"><strong>Common for:</strong> Residential &amp; commercial nonpayment of rent</p>
                            </div>
                            <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-yellow-900 mb-3">15-Day Notice to Cure or Quit</h3>
                                <p className="text-sm text-gray-500 mb-2">Lease Violation</p>
                                <p className="text-gray-700 mb-3">Used for lease violations other than nonpayment (unauthorized pets, noise complaints, property damage). Tenant has 15 days to cure the violation or leave.</p>
                                <p className="text-sm text-gray-600"><strong>Common for:</strong> Lease violations, unauthorized occupants, property damage</p>
                            </div>
                            <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">30-Day Notice to Terminate</h3>
                                <p className="text-sm text-gray-500 mb-2">41 O.S. § 111</p>
                                <p className="text-gray-700 mb-3">Used to end a month-to-month tenancy. Either the landlord or tenant can terminate with 30 days&apos; written notice. No cause is required.</p>
                                <p className="text-sm text-gray-600"><strong>Common for:</strong> Month-to-month tenancy termination, property sale, renovation</p>
                            </div>
                            <div className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">24-Hour Immediate Termination</h3>
                                <p className="text-sm text-gray-500 mb-2">41 O.S. § 132</p>
                                <p className="text-gray-700 mb-3">For extreme situations: illegal drug activity on the premises, criminal acts endangering health/safety, or acts causing imminent danger. Tenant must vacate within 24 hours.</p>
                                <p className="text-sm text-gray-600"><strong>Common for:</strong> Drug activity, violence, imminent danger situations</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">The Oklahoma Eviction Timeline</h2>
                        <div className="space-y-4">
                            {[
                                { step: '1', title: 'Serve Notice', desc: 'Deliver the appropriate notice (5, 15, or 30-day) to the tenant. The clock starts the day after service.', color: 'bg-orange-600' },
                                { step: '2', title: 'Wait for Notice Period', desc: 'The tenant has the full notice period to pay, cure, or vacate. If they comply, no further action is needed.', color: 'bg-orange-600' },
                                { step: '3', title: 'File FED Action', desc: 'If the tenant does not comply, file a Forcible Entry and Detainer action at the district court. Cost is approximately $58 in filing fees.', color: 'bg-orange-600' },
                                { step: '4', title: 'Serve FED Summons', desc: 'The tenant must be served with the court summons at least 3 days before the hearing date.', color: 'bg-orange-600' },
                                { step: '5', title: 'Court Hearing', desc: 'Both parties appear before a judge. If ruled in landlord\'s favor, a writ of execution is issued.', color: 'bg-orange-600' },
                                { step: '6', title: 'Writ of Execution', desc: 'The tenant has 48 hours to vacate after the writ is posted. If they remain, the sheriff physically removes them.', color: 'bg-red-600' },
                            ].map((item) => (
                                <div key={item.step} className="flex items-start gap-4">
                                    <div className={`flex-shrink-0 w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-bold`}>{item.step}</div>
                                    <div><h3 className="font-bold text-lg text-gray-900">{item.title}</h3><p className="text-gray-700">{item.desc}</p></div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Use a Process Server for Eviction Notices</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-bold mb-2">&#x2713; Court-Ready Proof</h3>
                                <p className="text-sm text-gray-700">GPS-verified affidavit of service is much stronger evidence than self-service testimony.</p>
                            </div>
                            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-bold mb-2">&#x2713; Avoid Confrontation</h3>
                                <p className="text-sm text-gray-700">A neutral third party reduces the risk of disputes or confrontations during delivery.</p>
                            </div>
                            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-bold mb-2">&#x2713; Protect Your Timeline</h3>
                                <p className="text-sm text-gray-700">Same-day service starts the notice clock immediately, avoiding costly delays.</p>
                            </div>
                            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-bold mb-2">&#x2713; Legal Compliance</h3>
                                <p className="text-sm text-gray-700">Licensed servers ensure notice is delivered per Oklahoma law, preventing dismissal on procedural grounds.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (<div key={i} className="bg-gray-50 p-5 rounded-lg"><h3 className="font-semibold text-lg mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}
                        </div>
                    </section>

                    <section className="mb-12 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 p-8 rounded-lg text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Need an Eviction Notice Served?</h2>
                        <p className="text-lg text-gray-700 mb-6">Don&apos;t delay your timeline. Licensed process servers ready to deliver eviction notices today.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                            <a href="tel:5393676832" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg">&#x1F4DE; Call (539) 367-6832</a>
                            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">&#x1F4DD; Get Quote</a>
                        </div>
                    </section>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                        <p className="text-sm text-gray-700">Eviction notice service per Oklahoma <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">41 O.S. § 131-132</Link> and <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">12 O.S. § 158.1</Link>.</p>
                        <p className="text-xs text-gray-500 mt-2">Last updated: March 2026</p>
                    </div>
                </div>
            </div>

            <Script id="faq-schema-eviction" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
            <UnifiedSchema pageType="service" title="Eviction Notice Service Oklahoma" description="5-day, 15-day, and 30-day eviction notices served by licensed process servers. GPS-verified, from $30." url="https://justlegalsolutions.org/eviction-notice-service" image="https://justlegalsolutions.org/og-image.png" keywords={['eviction notice service', 'serve eviction notice oklahoma', '5 day notice']} reviewCount={156} services={['5-Day Notice Service', '15-Day Notice Service', '30-Day Notice Service', '24-Hour Emergency Notice']} breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Process Serving', url: '/process-serving' }, { name: 'Eviction Notice Service', url: '/eviction-notice-service' }]} />
        </>
    );
}
