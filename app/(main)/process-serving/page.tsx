import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
    title: 'Process Serving Services Oklahoma | Licensed Servers from $30 | Just Legal Solutions',
    description: 'Professional process serving throughout Oklahoma. Personal service, substitute service, and service by publication. Licensed under 12 O.S. § 158.1. Same-day and emergency options available. Single attempts start at $30, standard service is $60.',
    keywords: ['process serving oklahoma', 'process server services', 'serve legal papers oklahoma', 'personal service of process', 'substitute service oklahoma', 'service by publication', 'licensed process server', 'professional process serving'],
    authors: [{ name: 'Just Legal Solutions' }],
    creator: 'Just Legal Solutions',
    publisher: 'Just Legal Solutions',
    category: 'Legal Services',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    openGraph: {
        title: 'Process Serving Services | Licensed Oklahoma Process Servers',
        description: 'Professional process serving throughout Oklahoma. Personal, substitute, and publication service methods. Licensed, bonded, and available 24/7.',
        type: 'website',
        locale: 'en_US',
        url: 'https://justlegalsolutions.org/process-serving',
        siteName: 'Just Legal Solutions',
        images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630, alt: 'Just Legal Solutions - Professional Process Serving in Oklahoma' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Process Serving Services Oklahoma | From $30',
        description: 'Licensed Oklahoma process servers. Personal service, substitute service, service by publication. 24/7 availability across all 77 counties.',
        images: ['https://justlegalsolutions.org/og-image.png'],
    },
    alternates: {
        canonical: 'https://justlegalsolutions.org/process-serving',
    },
    other: {
        'ai-content-type': 'service-page',
        'ai-summary': 'Just Legal Solutions provides professional process serving across all 77 Oklahoma counties. Services include personal service, substitute service, and service by publication per Oklahoma 12 O.S. § 2004. Pricing starts at $30 for a single attempt, $60 for standard service, $100 for rush, $150 for same-day rush, and $265 for 2-hour emergency. All servers are licensed under 12 O.S. § 158.1 with $5,000 surety bonds.',
        'ai-key-facts': 'Single attempts from $30, Standard service $60, licensed under 12 O.S. § 158.1, all 77 Oklahoma counties, personal and substitute service, GPS-verified, 24/7 availability, (539) 367-6832.',
    },
};

const serviceFaqs = [
    {
        question: "What types of documents can a process server deliver?",
        answer: "Licensed Oklahoma process servers can deliver virtually any legal document that requires formal service, including: summons and complaints, subpoenas (witness and document), divorce petitions, child custody and support papers, eviction notices, restraining orders and protective orders (permanent, not emergency), contract disputes, small claims court papers, and writs of execution. The key requirement under Oklahoma law is that service must be performed by someone at least 18 years old who is not a party to the case."
    },
    {
        question: "How does personal service of process work in Oklahoma?",
        answer: "Personal service is the most common and most reliable method. The process server physically hands the legal documents directly to the named individual (the 'respondent' or 'defendant'). Under Oklahoma 12 O.S. § 2004(C)(1), the server must identify the person, deliver the documents, and note the date, time, and location. Just Legal Solutions uses GPS verification to document every attempt, providing court-ready proof of service."
    },
    {
        question: "What is substitute service and when is it used?",
        answer: "Substitute service is authorized under Oklahoma 12 O.S. § 2004(C)(2) when the defendant cannot be personally found after diligent efforts. The process server leaves the documents with a person at least 15 years old who resides at the defendant's dwelling, then mails a copy to the same address. This creates a legally valid alternative when personal service proves difficult. Courts may require documentation of multiple personal service attempts before allowing substitute service."
    },
    {
        question: "How much does process serving cost in Oklahoma?",
        answer: "Process serving costs in Oklahoma vary by speed and complexity. Just Legal Solutions charges: Single attempts starting at $30, Standard service at $60 (5-7 business days, up to 3 attempts), Rush service at $100, Same-day rush service at $150 (4-8 hours), and 2-hour emergency service at $265. Mileage is included within Tulsa County; additional travel fees may apply for addresses outside the county. Skip tracing is available starting at $50 if the defendant's address is unknown."
    },
    {
        question: "Do I need a licensed process server in Oklahoma?",
        answer: "Oklahoma law (12 O.S. § 2004) allows service by any person who is at least 18 and not a party to the case. However, using a licensed process server under 12 O.S. § 158.1 provides significant advantages: they carry a required $5,000 surety bond, they are trained in proper service techniques, their affidavits carry more weight in court, and they can handle complex situations like evasive defendants. For important legal matters, a licensed server significantly reduces the risk of defective service."
    },
    {
        question: "What happens after papers are served?",
        answer: "After successful service, the process server prepares a notarized affidavit of service (also called a 'return of service') documenting exactly when, where, and how the documents were delivered. This affidavit is filed with the appropriate court as proof that due process requirements have been met. Just Legal Solutions provides GPS coordinates, timestamps, and photographs when applicable to create bulletproof documentation."
    },
];

export default function ProcessServingPage() {
    return (
        <>
            <div className="min-h-screen bg-white">
                <div className="max-w-6xl mx-auto px-4 py-16">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
                        <ol className="flex items-center space-x-2">
                            <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
                            <li className="text-gray-500">/</li>
                            <li><span className="text-gray-700">Process Serving Services</span></li>
                        </ol>
                    </nav>

                    {/* Hero Section */}
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Professional Process Serving in Oklahoma
                        </h1>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            <strong>Just Legal Solutions provides licensed, bonded process serving across all 77 Oklahoma counties.</strong> Whether you need personal service, substitute service, or assistance with service by publication, our team delivers court-ready results starting at <strong>$30 for a single attempt</strong> and <strong>$60 for standard service</strong>. Every service attempt is GPS-verified with timestamped proof. Available 24/7 with same-day and 2-hour emergency options. Call <a href="tel:5393676832" className="text-blue-700 font-bold hover:underline">(539) 367-6832</a> to get started.
                        </p>
                    </div>

                    {/* Methods of Service */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Methods of Service Under Oklahoma Law</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Oklahoma Title 12, Section 2004 governs how legal documents must be served. The method used depends on the type of case, the document being served, and whether the defendant can be located. Here are the three primary methods:
                        </p>
                        <div className="space-y-6">
                            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-900 mb-3">&#x1F4E8; Personal Service (Most Common)</h3>
                                <p className="text-gray-700 mb-2">
                                    The process server physically hands the documents to the named party. This is the gold standard of service and is virtually unchallengeable in court. Under 12 O.S. § 2004(C)(1), personal service requires identifying the individual and delivering the documents directly to them.
                                </p>
                                <p className="text-sm text-gray-600"><strong>Best for:</strong> All civil cases, divorce petitions, restraining orders, subpoenas</p>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-yellow-900 mb-3">&#x1F3E0; Substitute Service</h3>
                                <p className="text-gray-700 mb-2">
                                    When the defendant cannot be personally found after diligent attempts, Oklahoma law allows leaving the documents with a responsible person <strong>at least 15 years old</strong> at the defendant&apos;s usual place of residence, then mailing a copy to that address. This is authorized under 12 O.S. § 2004(C)(2).
                                </p>
                                <p className="text-sm text-gray-600"><strong>Best for:</strong> Evasive defendants, cases where multiple personal service attempts have failed</p>
                            </div>
                            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">&#x1F4F0; Service by Publication</h3>
                                <p className="text-gray-700 mb-2">
                                    Used only as a last resort when all other methods fail and the defendant&apos;s whereabouts are unknown. Requires court approval and publishing notice in a newspaper for three consecutive weeks. The entire process takes a minimum of 41 days under 12 O.S. § 2004.3.
                                </p>
                                <p className="text-sm text-gray-600"><strong>Best for:</strong> Defendants who cannot be located through any other means, after skip tracing has been exhausted</p>
                            </div>
                        </div>
                    </section>

                    {/* What We Serve */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents We Serve</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-bold text-lg mb-2">Civil Litigation</h3>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>&#x2713; Summons &amp; complaints</li>
                                    <li>&#x2713; Petitions</li>
                                    <li>&#x2713; Motions</li>
                                    <li>&#x2713; Writs of execution</li>
                                    <li>&#x2713; Garnishment notices</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-bold text-lg mb-2">Family Law</h3>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>&#x2713; Divorce petitions</li>
                                    <li>&#x2713; Custody modifications</li>
                                    <li>&#x2713; Child support orders</li>
                                    <li>&#x2713; Permanent protective orders</li>
                                    <li>&#x2713; Paternity actions</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-orange-500">
                                <h3 className="font-bold text-lg mb-2">Landlord-Tenant &amp; Business</h3>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>&#x2713; <Link href="/eviction-notice-service" className="text-blue-600 hover:underline">Eviction notices</Link></li>
                                    <li>&#x2713; <Link href="/subpoena-service" className="text-blue-600 hover:underline">Subpoenas</Link></li>
                                    <li>&#x2713; Lease terminations</li>
                                    <li>&#x2713; Corporate service on registered agents</li>
                                    <li>&#x2713; Small claims papers</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Service Speed Options */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Speed Options &amp; Pricing</h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Standard Service</h3>
                                <div className="text-4xl font-bold text-green-600 mb-2">$60</div>
                                <div className="text-sm text-gray-500 mb-4">Starting rate &bull; 5&ndash;7 business days</div>
                                <ul className="text-sm text-gray-600 space-y-1 text-left">
                                    <li>&#x2713; Up to 3 service attempts</li>
                                    <li>&#x2713; GPS-verified proof of service</li>
                                    <li>&#x2713; Notarized affidavit</li>
                                    <li>&#x2713; Real-time status updates</li>
                                    <li>&#x2713; Mileage included (Tulsa County)</li>
                                </ul>
                            </div>
                            <div className="bg-white border-2 border-orange-300 p-6 rounded-lg text-center shadow-lg">
                                <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">POPULAR</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2"><Link href="/same-day-process-server" className="hover:text-orange-600">Same-Day Rush</Link></h3>
                                <div className="text-4xl font-bold text-orange-600 mb-2">$150</div>
                                <div className="text-sm text-gray-500 mb-4">Served today &bull; 4&ndash;8 hours</div>
                                <ul className="text-sm text-gray-600 space-y-1 text-left">
                                    <li>&#x2713; 1 priority attempt within 4&ndash;8 hours</li>
                                    <li>&#x2713; GPS-verified with timestamps</li>
                                    <li>&#x2713; Expedited notarized affidavit</li>
                                    <li>&#x2713; Live phone updates</li>
                                    <li>&#x2713; Court filing included</li>
                                </ul>
                            </div>
                            <div className="bg-white border-2 border-red-300 p-6 rounded-lg text-center shadow-lg">
                                <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">EMERGENCY</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2"><Link href="/urgent-process-server" className="hover:text-red-600">2-Hour Emergency</Link></h3>
                                <div className="text-4xl font-bold text-red-600 mb-2">$265</div>
                                <div className="text-sm text-gray-500 mb-4">Immediate dispatch &bull; 2 hours</div>
                                <ul className="text-sm text-gray-600 space-y-1 text-left">
                                    <li>&#x2713; Immediate dispatch</li>
                                    <li>&#x2713; GPS-verified with exact timestamps</li>
                                    <li>&#x2713; Rush affidavit same day</li>
                                    <li>&#x2713; Direct communication with server</li>
                                    <li>&#x2713; After-hours &amp; weekend available</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">How Process Serving Works</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Submit Your Documents</h3>
                                    <p className="text-gray-700">Call <a href="tel:5393676832" className="text-blue-600 hover:underline font-medium">(539) 367-6832</a>, email, or use our <Link href="/contact" className="text-blue-600 hover:underline font-medium">web form</Link>. Tell us the document type, deadline, and any known information about the person to be served.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Assignment &amp; Dispatch</h3>
                                    <p className="text-gray-700">We assign the licensed process server nearest to the service address. All servers are licensed under 12 O.S. § 158.1 and carry a $5,000 surety bond as required by Oklahoma law.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Service Attempt</h3>
                                    <p className="text-gray-700">The server locates the individual and serves the documents according to Oklahoma law. Every attempt is GPS-verified with date, time, and location stamps. You receive real-time updates.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Affidavit &amp; Court Filing</h3>
                                    <p className="text-gray-700">Upon successful service, we prepare a notarized affidavit of service and file it with the appropriate Oklahoma district court. You receive a copy for your records.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Service Area */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Statewide Coverage — All 77 Oklahoma Counties</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Just Legal Solutions serves legal documents throughout the entire state of Oklahoma. Our primary coverage area includes the <Link href="/tulsa-process-server" className="text-blue-600 hover:underline font-medium">Tulsa metropolitan area</Link> and surrounding counties, with statewide reach through our network of licensed servers.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Primary: Tulsa Metro</h3>
                                <p className="text-sm text-gray-700">Tulsa, Broken Arrow, Owasso, Jenks, Bixby, Sand Springs, Glenpool, Sapulpa, Catoosa, Collinsville</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Extended: Neighboring Counties</h3>
                                <p className="text-sm text-gray-700">Rogers, Wagoner, Creek, Osage, Okmulgee, Washington, Nowata, Mayes counties</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Statewide Coverage</h3>
                                <p className="text-sm text-gray-700">All 77 Oklahoma counties including Oklahoma City, Norman, Edmond, Lawton, and rural areas</p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {serviceFaqs.map((faq, index) => (
                                <div key={index} className="bg-gray-50 p-5 rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                                    <p className="text-gray-700">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Related Services */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process Serving Services</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/same-day-process-server" className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                                <h3 className="font-semibold text-orange-800">Same-Day Process Serving</h3>
                                <p className="text-sm text-gray-600 mt-1">Rush service with same-day delivery</p>
                            </Link>
                            <Link href="/urgent-process-server" className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                                <h3 className="font-semibold text-red-800">2-Hour Emergency Service</h3>
                                <p className="text-sm text-gray-600 mt-1">Immediate dispatch for urgent deadlines</p>
                            </Link>
                            <Link href="/subpoena-service" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                <h3 className="font-semibold text-blue-800">Subpoena Service</h3>
                                <p className="text-sm text-gray-600 mt-1">Witness &amp; document subpoena delivery</p>
                            </Link>
                            <Link href="/eviction-notice-service" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                <h3 className="font-semibold text-green-800">Eviction Notice Service</h3>
                                <p className="text-sm text-gray-600 mt-1">5-day, 15-day &amp; 30-day notice delivery</p>
                            </Link>
                            <Link href="/skip-tracing" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                <h3 className="font-semibold text-purple-800">Skip Tracing</h3>
                                <p className="text-sm text-gray-600 mt-1">Locate hard-to-find defendants</p>
                            </Link>
                            <Link href="/courier-services" className="block p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors">
                                <h3 className="font-semibold text-teal-800">Legal Courier Services</h3>
                                <p className="text-sm text-gray-600 mt-1">Courthouse filing &amp; document transport</p>
                            </Link>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mb-12 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 p-8 rounded-lg text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Serve Papers?</h2>
                        <p className="text-lg text-gray-700 mb-6">Licensed Oklahoma process servers standing by. Single attempts starting at $30 and standard service at $60 with GPS-verified proof.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                            <a href="tel:5393676832" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg">
                                &#x1F4DE; Call (539) 367-6832
                            </a>
                            <a href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">
                                &#x1F4DD; Get Free Quote
                            </a>
                        </div>
                        <p className="text-sm text-gray-600">Available 24/7 &bull; All 77 Oklahoma counties &bull; GPS-verified &bull; From $30 for a single attempt</p>
                    </section>

                    {/* Compliance */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                        <p className="text-sm text-gray-700">
                            All process serving is performed by licensed Oklahoma private process servers under <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">12 O.S. § 158.1</Link> and in compliance with <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">12 O.S. § 2004</Link>. Each server carries a $5,000 surety bond as required by state law.
                        </p>
                        <p className="text-xs text-gray-500 mt-2">Last updated: March 2026</p>
                    </div>
                </div>
            </div>

            {/* FAQ Schema */}
            <Script
                id="faq-schema-process-serving"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": serviceFaqs.map(faq => ({
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
                title="Process Serving Services Oklahoma | Licensed Servers from $30"
                description="Professional process serving throughout Oklahoma. Personal service, substitute service, and service by publication. Starts at $30 for single attempt, $60 for standard service. Licensed, bonded, 24/7."
                url="https://justlegalsolutions.org/process-serving"
                image="https://justlegalsolutions.org/og-image.png"
                keywords={['process serving', 'process server oklahoma', 'serve legal papers', 'personal service', 'substitute service']}
                reviewCount={156}
                services={[
                    'Personal Service of Process',
                    'Substitute Service',
                    'Service by Publication Assistance',
                    'Same-Day Rush Service',
                    '2-Hour Emergency Service'
                ]}
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Process Serving', url: '/process-serving' }
                ]}
            />
        </>
    );
}
