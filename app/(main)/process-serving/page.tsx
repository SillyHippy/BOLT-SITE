import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import UnifiedSchema from '@/components/UnifiedSchema';
import dynamic from 'next/dynamic';
import { LiteYouTubeEmbed } from '@/components/lite-youtube-embed';
import {
    CorePageCountyLinksPanel,
    LegalTrustSignalsPanel,
} from '@/components/seo/internal-link-trust-panels';
import { buildFreshnessMetadata, getPageFreshness } from '@/lib/content-freshness';
import LastUpdated from '@/components/ui/last-updated';

const processServingFreshness = getPageFreshness('/process-serving')!;

const ReviewWidget = dynamic(() => import('@/components/ui/review-widget'));

export const metadata: Metadata = {
    title: 'Process Serving Oklahoma | Licensed Servers, Starts at $35',
    description: 'Oklahoma process serving: starts at $35 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours. Personal, substitute, and publication service. Licensed under 12 O.S. § 158.1. All 77 counties. See full pricing online.',
    keywords: ['process serving oklahoma', 'process server services', 'serve legal papers oklahoma', 'personal service of process', 'substitute service oklahoma', 'service by publication', 'licensed process server', 'professional process serving', 'process server vs sheriff oklahoma', 'evasive defendant service', 'skip tracing oklahoma', 'GPS process serving'],
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
        images: [{
            url: 'https://justlegalsolutions.org/image-pack/images/image-010-process-serving-og.webp',
            width: 1200,
            height: 630,
            alt: 'Legal envelope being delivered through a residential mail slot',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Process Serving Oklahoma | Starts at $35 Single-Attempt',
        description: 'Licensed Oklahoma process servers. Personal service, substitute service, service by publication. 24/7 availability across all 77 counties.',
        images: ['https://justlegalsolutions.org/image-pack/images/image-010-process-serving-og.webp'],
    },
    alternates: {
        canonical: 'https://justlegalsolutions.org/process-serving',
    },
    other: {
        'ai-content-type': 'service-page',
        'ai-summary': 'Just Legal Solutions provides professional process serving across all 77 Oklahoma counties. Services include personal service, substitute service, and service by publication per Oklahoma 12 O.S. § 2004. Pricing starts at $35 for a single attempt, $60 for standard service, $100 for rush, $150 for same-day rush, and $265 for 2-hour emergency. All servers are licensed under 12 O.S. § 158.1 with $5,000 surety bonds.',
        'ai-key-facts': 'Service starts at $35 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours rush. Licensed under 12 O.S. § 158.1, all 77 Oklahoma counties, personal and substitute service, GPS-verified, 24/7 availability, full pricing https://justlegalsolutions.org/pricing, (539) 367-6832.',
        ...buildFreshnessMetadata({
            datePublished: processServingFreshness.datePublished,
            dateModified: processServingFreshness.dateModified,
        }).other,
    },
};

const serviceFaqs = [
    {
        question: "Who can serve papers in Oklahoma?",
        answer: "Oklahoma authorizes three main options: the county sheriff, any adult (18+) who is not a party to the lawsuit, or a licensed private process server under 12 O.S. § 158.1. Licensed servers must carry a $5,000 surety bond and are trained to produce court-ready affidavits with GPS verification. For important cases, a licensed server significantly reduces the risk of defective service being challenged in court."
    },
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
    {
        question: "Can someone refuse to accept service in Oklahoma?",
        answer: "No — in Oklahoma, a defendant cannot legally 'refuse' service. Under 12 O.S. § 2004, if a process server identifies the individual and makes a reasonable attempt to hand them the documents, service is considered complete even if the person refuses to physically take the papers. The server can leave the documents at the person's feet or nearest location. This is called 'drop service' and is legally valid. An affidavit documenting the refusal satisfies due process requirements."
    },
    {
        question: "Can papers be served on Sundays and holidays in Oklahoma?",
        answer: "Yes, Oklahoma law permits service of process on Sundays and holidays. There is no statutory restriction on the days of the week when service can occur. Process servers may serve documents any day, including weekends and federal holidays. Just Legal Solutions offers weekend and holiday service for urgent matters — call (539) 367-6832 for availability."
    },
    {
        question: "What is the difference between a process server and the sheriff?",
        answer: "Both can legally serve documents in Oklahoma, but there are major differences. The county sheriff often takes 2-4 weeks, only serves during business hours, and may deprioritize civil service. A private process server like Just Legal Solutions offers same-day service, evenings/weekends, GPS-verified proof, real-time status updates, and multiple attempts within your deadline. Private servers also specialize in difficult serves with skip tracing and surveillance capabilities."
    },
    {
        question: "How long does process serving take in Oklahoma?",
        answer: "Timeframes depend on the service tier you select. Standard service takes 5-7 business days (up to 3 attempts). Rush service is completed within 1-3 business days. Same-day rush means the documents are served within 4-8 hours. Our 2-hour emergency service dispatches immediately. Factors that can extend timelines include evasive defendants, incorrect addresses, or gated community access. We provide real-time updates throughout the process."
    },
];

const howToSteps = [
    {
        name: 'Submit Your Documents',
        text: 'Call (539) 367-6832, email, or use our web form. Tell us the document type, deadline, and any known information about the person to be served.',
        url: '/contact',
    },
    {
        name: 'Assignment and Dispatch',
        text: 'We assign the licensed process server nearest to the service address. All servers are licensed under 12 O.S. § 158.1 and carry a $5,000 surety bond.',
        url: '/process-server-license-oklahoma',
    },
    {
        name: 'Service Attempt',
        text: 'The server locates the individual and serves the documents according to Oklahoma law. Every attempt is GPS-verified with date, time, and location stamps.',
        url: '/gps-tracked-process-serving',
    },
    {
        name: 'Affidavit and Court Filing',
        text: 'Upon successful service, we prepare a notarized affidavit of service and file it with the appropriate Oklahoma district court. You receive a copy for your records.',
        url: '/courthouse-filing-services',
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
                            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
                            <li className="text-gray-500">/</li>
                            <li><span className="text-gray-700">Process Serving Services</span></li>
                        </ol>
                    </nav>

                    <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-xl mb-8">
                        <Image
                            src="/image-pack/images/image-009-process-serving-hero.webp"
                            alt="Professional process server delivering legal documents at an Oklahoma residence"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 72rem"
                        />
                    </div>

                    {/* Hero Section */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-8 rounded-r-lg mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Professional Process Serving in Oklahoma
                        </h1>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            <strong>A process server is a licensed individual authorized under Oklahoma law (12 O.S. § 158.1) to deliver legal documents — such as summons, subpoenas, and eviction notices — to parties in a lawsuit, ensuring constitutional due process is satisfied.</strong>
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                            Just Legal Solutions provides licensed, bonded process serving across all 77 Oklahoma counties. Whether you need personal service, substitute service, or assistance with service by publication, our team delivers court-ready results starting at <strong>$35 for a single attempt</strong> and <strong>$60 for standard service</strong>. Every service attempt is GPS-verified with timestamped proof. Available 24/7 with same-day and 2-hour emergency options. Call <a href="tel:5393676832" className="text-blue-700 font-bold hover:underline">(539) 367-6832</a> to get started.
                        </p>
                        {/* Quick-Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href="tel:5393676832" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-base transition-colors shadow-md">
                                📞 Call Now — (539) 367-6832
                            </a>
                            <Link href="/contact" className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-base transition-colors shadow-md">
                                📝 Get a Free Quote in 15 Minutes
                            </Link>
                        </div>
                    </div>

                    <div id="who-can-serve-papers-oklahoma" className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-10">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Who can serve papers in Oklahoma?</h2>
                        <p className="text-gray-800 leading-relaxed">
                            <strong>Oklahoma allows the county sheriff, any person 18 or older who is not a party to the case, or a licensed private process server under 12 O.S. § 158.1.</strong> Licensed servers carry a $5,000 surety bond and provide GPS-verified affidavits — the safest choice for court deadlines.{' '}
                            <Link href="/how-to-serve-legal-papers-oklahoma" className="text-green-800 font-semibold underline">Full serving guide</Link>
                            {' · '}
                            <Link href="/process-server-license-oklahoma" className="text-green-800 font-semibold underline">Licensing requirements</Link>
                        </p>
                    </div>

                    {/* Trust Signal Stats Bar */}
                    <section className="mb-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-center">
                                <div className="text-3xl font-bold text-blue-700">77</div>
                                <div className="text-sm text-gray-700 font-medium">Counties Covered</div>
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
                                <div className="text-3xl font-bold text-green-700">4.9★</div>
                                <div className="text-sm text-gray-700 font-medium">Google Rating</div>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 text-center">
                                <div className="text-3xl font-bold text-yellow-700">50+</div>
                                <div className="text-sm text-gray-700 font-medium">Years Combined Experience</div>
                            </div>
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-5 text-center">
                                <div className="text-3xl font-bold text-purple-700">24/7</div>
                                <div className="text-sm text-gray-700 font-medium">Emergency Availability</div>
                            </div>
                        </div>
                    </section>

                    {/* AI-Ready Quick Answer Blocks */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Answers (AI & Voice Search)</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                                <h3 className="font-bold text-slate-900 mb-2">What does process serving cost in Oklahoma?</h3>
                                <p className="text-sm text-slate-700">
                                    Process serving starts at $35 for a single attempt and $60 for standard service. Rush starts at $100, same-day at $150, and 2-hour emergency at $265. Final pricing depends on distance, attempts, and complexity.
                                </p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                                <h3 className="font-bold text-slate-900 mb-2">How fast can papers be served?</h3>
                                <p className="text-sm text-slate-700">
                                    Standard service is typically 5-7 business days, rush is 1-3 business days, same-day is usually 4-8 hours, and emergency service can dispatch in about 2 hours depending on location and timing.
                                </p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                                <h3 className="font-bold text-slate-900 mb-2">Is private process serving better than sheriff service?</h3>
                                <p className="text-sm text-slate-700">
                                    Private servers are usually faster and more flexible for evening/weekend attempts, and provide detailed GPS-backed documentation. Sheriff service can be valid, but often runs slower and with less schedule flexibility.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Video Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Watch: How Process Serving Works</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black aspect-video">
                                    <LiteYouTubeEmbed videoid="NFAhglMUNqc" title="Best Process Server in Tulsa, Oklahoma" />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center">Why Attorneys Choose Just Legal Solutions</p>
                            </div>
                            <div>
                                <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black aspect-video">
                                    <LiteYouTubeEmbed videoid="IEKOF4TiEDY" title="Attorney's Guide to Hiring a Process Server in Oklahoma" />
                                </div>
                                <p className="text-sm text-gray-600 mt-2 text-center">Attorney&apos;s Guide to Hiring a Process Server</p>
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <Link href="/videos" className="text-blue-600 hover:underline font-medium text-sm">
                                Watch all 42+ educational videos →
                            </Link>
                        </div>
                    </section>

                    {/* What Is Process Serving */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Process Serving in Oklahoma?</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Process serving is the legal procedure of delivering court documents — such as summons, complaints, subpoenas, and eviction notices — to an individual or business involved in a lawsuit. Under Oklahoma law (<Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">12 O.S. § 2004</Link>), proper service of process is a constitutional requirement that ensures every party receives notice of legal action against them.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            In Oklahoma, process servers must be licensed under <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">12 O.S. § 158.1</Link>, which requires a $5,000 surety bond, at least 6 months of Oklahoma residency, and registration with the district court. Without properly completed service, a court cannot proceed with a case — making professional process serving essential to every lawsuit.
                        </p>
                    </section>

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

                    {/* Oklahoma Law Quick Reference */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Oklahoma Process Serving Laws — Quick Reference</h2>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-slate-100">
                                            <th className="text-left px-4 py-3 font-bold text-gray-900">Statute</th>
                                            <th className="text-left px-4 py-3 font-bold text-gray-900">What It Covers</th>
                                            <th className="text-left px-4 py-3 font-bold text-gray-900">Key Rule</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-blue-700">12 O.S. § 2004</td>
                                            <td className="px-4 py-3 text-gray-700">Service of process methods</td>
                                            <td className="px-4 py-3 text-gray-700">Personal service is preferred; substitute and publication allowed under specific conditions</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-4 py-3 font-medium text-blue-700">12 O.S. § 158.1</td>
                                            <td className="px-4 py-3 text-gray-700">Process server licensing</td>
                                            <td className="px-4 py-3 text-gray-700">Requires $5,000 surety bond, 6+ months residency, district court registration</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-blue-700">12 O.S. § 2004(C)(1)</td>
                                            <td className="px-4 py-3 text-gray-700">Personal service rules</td>
                                            <td className="px-4 py-3 text-gray-700">Deliver documents directly to named individual; document date, time, location</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-4 py-3 font-medium text-blue-700">12 O.S. § 2004(C)(2)</td>
                                            <td className="px-4 py-3 text-gray-700">Substitute service rules</td>
                                            <td className="px-4 py-3 text-gray-700">Leave with resident 15+ years old at dwelling, then mail copy to same address</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-blue-700">12 O.S. § 2004.3</td>
                                            <td className="px-4 py-3 text-gray-700">Service by publication</td>
                                            <td className="px-4 py-3 text-gray-700">3 consecutive weeks in newspaper; minimum 41 days; requires court approval</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-4 py-3 font-medium text-blue-700">12 O.S. § 2004(J)</td>
                                            <td className="px-4 py-3 text-gray-700">Who can serve</td>
                                            <td className="px-4 py-3 text-gray-700">Any person 18+ who is not a party to the case</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-blue-700">12 O.S. § 2005</td>
                                            <td className="px-4 py-3 text-gray-700">Response deadlines</td>
                                            <td className="px-4 py-3 text-gray-700">Defendant has 20 days to respond after personal/substitute service in Oklahoma</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="px-4 py-3 bg-blue-50 border-t border-slate-200">
                                <p className="text-xs text-gray-600">
                                    For the complete Oklahoma process serving legal guide, visit our <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">Oklahoma Process Server Laws</Link> page.
                                </p>
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

                    {/* Who We Serve (Target Audiences) */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Serve</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">⚖️ Law Firms &amp; Attorneys</h3>
                                <p className="text-gray-700 mb-3">Oklahoma&apos;s law firms trust us for reliable, court-compliant service with GPS-verified proof that holds up to motions to quash. We offer volume discounts, dedicated account management, and real-time case status updates.</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>&#x2713; Court-run transfers &amp; same-day filing</li>
                                    <li>&#x2713; Bulletproof affidavits with GPS coordinates</li>
                                    <li>&#x2713; Volume pricing for high-caseload firms</li>
                                    <li>&#x2713; <Link href="/law-firm-services" className="text-blue-600 hover:underline">Learn about our law firm services →</Link></li>
                                </ul>
                            </div>
                            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-900 mb-3">🏠 Landlords &amp; Property Managers</h3>
                                <p className="text-gray-700 mb-3">Eviction timelines are strict — the wrong service method can restart your clock. We know Oklahoma&apos;s FED (Forcible Entry &amp; Detainer) rules inside and out and serve 5-day, 15-day, and 30-day notices correctly the first time.</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>&#x2713; 5-day, 15-day &amp; 30-day eviction notices</li>
                                    <li>&#x2713; FED summons &amp; complaints</li>
                                    <li>&#x2713; Lease violation notices</li>
                                    <li>&#x2713; <Link href="/eviction-notice-service" className="text-blue-600 hover:underline">Eviction service details →</Link></li>
                                </ul>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-orange-900 mb-3">🏢 Corporations &amp; Businesses</h3>
                                <p className="text-gray-700 mb-3">Serving a business entity requires knowing how to identify and serve the correct registered agent, officer, or authorized representative. Improper corporate service can invalidate your entire case.</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>&#x2713; Service on registered agents (LLC, Corp, LP)</li>
                                    <li>&#x2713; Service on corporate officers &amp; directors</li>
                                    <li>&#x2713; Secretary of State fallback service</li>
                                    <li>&#x2713; <Link href="/serve-business-corporation-oklahoma" className="text-blue-600 hover:underline">Corporate service guide →</Link></li>
                                </ul>
                            </div>
                            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">👤 Individuals &amp; Self-Represented Parties</h3>
                                <p className="text-gray-700 mb-3">Filing your own case? We make it easy. Whether it&apos;s a divorce, small claims suit, or protective order, we guide you through exactly what documents to bring and handle the service so you can focus on your case.</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>&#x2713; Simple process — call, drop off papers, we serve</li>
                                    <li>&#x2713; Clear pricing with no hidden fees</li>
                                    <li>&#x2713; Court-ready affidavit provided</li>
                                    <li>&#x2713; <Link href="/contact" className="text-blue-600 hover:underline">Request service now →</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Industries We Serve */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Link href="/process-serving-for-insurance-companies" className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center group">
                                <div className="text-2xl mb-2">🛡️</div>
                                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-700">Insurance Companies</h3>
                                <p className="text-xs text-gray-500 mt-1">Claims &amp; subrogation papers</p>
                            </Link>
                            <Link href="/process-serving-for-debt-collection" className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center group">
                                <div className="text-2xl mb-2">💳</div>
                                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-700">Debt Collectors</h3>
                                <p className="text-xs text-gray-500 mt-1">Collection &amp; garnishment service</p>
                            </Link>
                            <Link href="/process-serving-for-property-managers" className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center group">
                                <div className="text-2xl mb-2">🏘️</div>
                                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-700">Property Managers</h3>
                                <p className="text-xs text-gray-500 mt-1">Eviction &amp; lease notices</p>
                            </Link>
                            <Link href="/attorney-services" className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center group">
                                <div className="text-2xl mb-2">🏛️</div>
                                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-700">HR Departments</h3>
                                <p className="text-xs text-gray-500 mt-1">Employment litigation papers</p>
                            </Link>
                        </div>
                    </section>

                    {/* Service Speed Options */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Speed Options &amp; Pricing</h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Standard Service</h3>
                                <div className="text-4xl font-bold text-green-600 mb-2">Starting at $60</div>
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
                                <div className="text-4xl font-bold text-orange-600 mb-2">Starting at $150</div>
                                <div className="text-sm text-gray-500 mb-4">Same-day availability &bull; 4&ndash;8 hours</div>
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
                                <div className="text-4xl font-bold text-red-600 mb-2">Starting at $265</div>
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
                        <p className="text-sm text-gray-500 text-center">
                            <Link href="/pricing" className="text-blue-600 hover:underline font-medium">View complete pricing details →</Link> &bull; All prices are starting rates &bull; Same-day and emergency dispatch depend on location and server availability &bull; No mileage fees within Tulsa County
                        </p>
                    </section>

                    {/* Mid-Page CTA */}
                    <section className="mb-12 bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-xl text-white text-center shadow-xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">Get a Quote in 15 Minutes</h2>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Tell us who needs to be served, the document type, and your deadline. We&apos;ll provide a guaranteed quote — no surprises, no hidden fees.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:5393676832" className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg text-lg transition-colors hover:bg-blue-50 shadow-md">
                                📞 Call (539) 367-6832
                            </a>
                            <Link href="/contact" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors border border-blue-400">
                                📝 Submit Online
                            </Link>
                        </div>
                    </section>

                    {/* Process Server vs Sheriff Comparison */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Process Server vs. County Sheriff — Which Should You Choose?</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Oklahoma law allows both county sheriffs and private process servers to serve legal documents. Here&apos;s how they compare:
                        </p>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="text-left px-4 py-3 font-bold text-gray-900">Feature</th>
                                            <th className="text-left px-4 py-3 font-bold text-blue-700">Just Legal Solutions</th>
                                            <th className="text-left px-4 py-3 font-bold text-gray-600">County Sheriff</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-gray-900">Typical Timeframe</td>
                                            <td className="px-4 py-3 text-green-700 font-semibold">1–3 days (standard)</td>
                                            <td className="px-4 py-3 text-gray-600">2–4 weeks</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-4 py-3 font-medium text-gray-900">Same-Day Available</td>
                                            <td className="px-4 py-3 text-green-700 font-semibold">✅ Yes (4–8 hours)</td>
                                            <td className="px-4 py-3 text-red-600">❌ No</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-gray-900">Evening &amp; Weekend Service</td>
                                            <td className="px-4 py-3 text-green-700 font-semibold">✅ Yes, 24/7</td>
                                            <td className="px-4 py-3 text-red-600">❌ Business hours only</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-4 py-3 font-medium text-gray-900">GPS-Verified Proof</td>
                                            <td className="px-4 py-3 text-green-700 font-semibold">✅ Coordinates + timestamps</td>
                                            <td className="px-4 py-3 text-red-600">❌ Paper affidavit only</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-gray-900">Real-Time Updates</td>
                                            <td className="px-4 py-3 text-green-700 font-semibold">✅ Text/call updates</td>
                                            <td className="px-4 py-3 text-red-600">❌ No updates</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-4 py-3 font-medium text-gray-900">Skip Tracing</td>
                                            <td className="px-4 py-3 text-green-700 font-semibold">✅ Available ($50+)</td>
                                            <td className="px-4 py-3 text-red-600">❌ Not available</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-gray-900">Multiple Attempts</td>
                                            <td className="px-4 py-3 text-green-700 font-semibold">✅ Up to 3 included</td>
                                            <td className="px-4 py-3 text-yellow-600">⚠️ Usually 1 attempt</td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-4 py-3 font-medium text-gray-900">Difficult/Evasive Serves</td>
                                            <td className="px-4 py-3 text-green-700 font-semibold">✅ Experienced handling</td>
                                            <td className="px-4 py-3 text-red-600">❌ Low priority</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black aspect-video max-w-lg mx-auto">
                                <LiteYouTubeEmbed videoid="RWmgeCJ502U" title="Process Server vs Sheriff in Oklahoma — Which Should You Choose?" />
                            </div>
                            <p className="text-sm text-gray-600 mt-2 text-center">Watch: Process Server vs. Sheriff — An Honest Comparison</p>
                        </div>
                        <p className="mt-6 text-center">
                            <Link href="/process-server-vs-sheriff" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline">
                                Read the full process server vs. sheriff comparison guide →
                            </Link>
                        </p>
                    </section>

                    {/* Difficult Serves & Evasive Defendants */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Difficult Serves &amp; Evasive Defendants</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Some defendants don&apos;t want to be found. That&apos;s where experience matters most. Our team has handled thousands of difficult serves across Oklahoma and has the tools, training, and persistence to get the job done.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-red-900 mb-3">🔍 Skip Tracing &amp; Locate Services</h3>
                                <p className="text-gray-700 mb-3">
                                    When you don&apos;t have a current address, our skip tracing services can locate defendants using database searches, public records, social media analysis, and field investigation. Skip tracing starts at $50.
                                </p>
                                <Link href="/skip-tracing" className="text-blue-600 hover:underline font-medium text-sm">Learn about skip tracing →</Link>
                            </div>
                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-amber-900 mb-3">🕐 Odd-Hours &amp; Weekend Service</h3>
                                <p className="text-gray-700 mb-3">
                                    Defendants who dodge service during business hours can often be found early mornings, late evenings, or on weekends. We serve 24/7 — including holidays when necessary — to catch evasive individuals at home.
                                </p>
                                <Link href="/weekend-emergency" className="text-blue-600 hover:underline font-medium text-sm">Weekend &amp; emergency service →</Link>
                            </div>
                            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-indigo-900 mb-3">📍 GPS &amp; Photographic Evidence</h3>
                                <p className="text-gray-700 mb-3">
                                    Every service attempt is GPS-verified with exact coordinates and timestamps. When appropriate, we capture photographic evidence of the serve location to create documentation that stands up to any court challenge.
                                </p>
                                <Link href="/gps-tracked-process-serving" className="text-blue-600 hover:underline font-medium text-sm">GPS-tracked service details →</Link>
                            </div>
                            <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-teal-900 mb-3">🚫 Drop Service for Refusals</h3>
                                <p className="text-gray-700 mb-3">
                                    Under Oklahoma law, a defendant cannot &ldquo;refuse&rdquo; service. If identified and the documents are offered, service is complete — even if they refuse to take the papers. We properly document refusals with GPS proof, timestamps, and detailed narratives.
                                </p>
                                <Link href="/what-happens-if-someone-refuses-service" className="text-blue-600 hover:underline font-medium text-sm">What happens if someone refuses? →</Link>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black aspect-video max-w-lg mx-auto">
                                <LiteYouTubeEmbed videoid="bzlgKgUfEtI" title="What Happens If You Avoid Being Served in Oklahoma?" />
                            </div>
                            <p className="text-sm text-gray-600 mt-2 text-center">Watch: What Happens If You Avoid Being Served in Oklahoma?</p>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">How Process Serving Works</h2>
                        <div className="space-y-6">
                            {howToSteps.map((step, idx) => (
                                <div key={step.name} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">{idx + 1}</div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900">{step.name}</h3>
                                        <p className="text-gray-700">{step.text}</p>
                                    </div>
                                </div>
                            ))}
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
                        <p className="text-sm text-gray-500 mt-4 text-center">
                            <Link href="/service-areas" className="text-blue-600 hover:underline font-medium">Browse all service areas by city →</Link>
                        </p>
                    </section>

                    <section className="mb-12">
                        <CorePageCountyLinksPanel />
                    </section>

                    <section className="mb-12">
                        <LegalTrustSignalsPanel />
                    </section>

                    {/* Reviews Section */}
                    <ReviewWidget />

                    {/* Trust & Verification Links */}
                    <section className="mb-12">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-blue-900 mb-3">Trust & Verification</h2>
                            <p className="text-blue-900/80 mb-4">
                                Review verified feedback and core company credentials before you hire.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link href="/reviews/google" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition">
                                    Google Review Hub
                                </Link>
                                <Link href="/reviews" className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-4 py-2.5 text-sm font-semibold text-blue-800 hover:bg-blue-100 transition">
                                    All Verified Reviews
                                </Link>
                                <Link href="/about/joseph-iannazzi" className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-4 py-2.5 text-sm font-semibold text-blue-800 hover:bg-blue-100 transition">
                                    Founder Credentials
                                </Link>
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

                    {/* More Videos */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">More Process Serving Videos</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black aspect-video">
                                    <LiteYouTubeEmbed videoid="iuSq5CGC07w" title="Divorce & Family Law Process Serving in Oklahoma" />
                                </div>
                                <p className="text-xs text-gray-600 mt-2 text-center">Divorce &amp; Family Law Process Serving</p>
                            </div>
                            <div>
                                <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black aspect-video">
                                    <LiteYouTubeEmbed videoid="tEASEYhCM1o" title="Substitute Service in Oklahoma" />
                                </div>
                                <p className="text-xs text-gray-600 mt-2 text-center">Substitute Service — When Personal Service Fails</p>
                            </div>
                            <div>
                                <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black aspect-video">
                                    <LiteYouTubeEmbed videoid="P8doTW8k3YU" title="Service by Publication in Oklahoma" />
                                </div>
                                <p className="text-xs text-gray-600 mt-2 text-center">Service by Publication — Last Resort Guide</p>
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <Link href="/videos" className="text-blue-600 hover:underline font-medium text-sm">
                                Watch all 42+ videos on our Video Page →
                            </Link>
                        </div>
                    </section>

                    {/* Related Services */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process Serving Services</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/for-attorneys" className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                                <h3 className="font-semibold text-slate-800">For Attorneys &amp; Law Firms</h3>
                                <p className="text-sm text-gray-600 mt-1">Volume accounts, Net-15 billing, same-day affidavits</p>
                            </Link>
                            <Link href="/for-landlords" className="block p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                                <h3 className="font-semibold text-amber-900">For Landlords</h3>
                                <p className="text-sm text-gray-600 mt-1">Eviction notices &amp; FED service with GPS proof</p>
                            </Link>
                            <Link href="/for-businesses" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                <h3 className="font-semibold text-blue-900">For Businesses</h3>
                                <p className="text-sm text-gray-600 mt-1">Corporate defendants &amp; registered-agent service</p>
                            </Link>
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
                            <Link href="/gps-tracked-process-serving" className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                                <h3 className="font-semibold text-indigo-800">GPS-Tracked Process Serving</h3>
                                <p className="text-sm text-gray-600 mt-1">Real-time tracking &amp; verified proof of service</p>
                            </Link>
                            <Link href="/courthouse-filing-services" className="block p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                                <h3 className="font-semibold text-amber-800">Courthouse Filing Services</h3>
                                <p className="text-sm text-gray-600 mt-1">Same-day courthouse document filing</p>
                            </Link>
                            <Link href="/out-of-state-subpoena" className="block p-4 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors">
                                <h3 className="font-semibold text-cyan-800">Out-of-State Subpoena (UIDDA)</h3>
                                <p className="text-sm text-gray-600 mt-1">Interstate subpoena domestication &amp; service</p>
                            </Link>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="mb-12 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 p-8 rounded-lg text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Serve Papers?</h2>
                        <p className="text-lg text-gray-700 mb-6">Licensed Oklahoma process servers standing by. Single attempts starting at $35 and standard service at $60 with GPS-verified proof.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                            <a href="tel:5393676832" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg">
                                &#x1F4DE; Call (539) 367-6832
                            </a>
                            <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">
                                &#x1F4DD; Get Free Quote
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600">Available 24/7 &bull; All 77 Oklahoma counties &bull; GPS-verified &bull; Starts at $35 for a single attempt</p>
                    </section>

                    {/* Compliance */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                        <p className="text-sm text-gray-700">
                            All process serving is performed by licensed Oklahoma private process servers under <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">12 O.S. § 158.1</Link> and in compliance with <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">12 O.S. § 2004</Link>. Each server carries a $5,000 surety bond as required by state law.
                        </p>
                        <LastUpdated pathname="/process-serving" className="text-xs text-gray-500 mt-2" />
                    </div>
                </div>
            </div>
            <UnifiedSchema
                pageType="service"
                title="Process Serving Services Oklahoma | Licensed Servers, Starts at $35"
                description="Professional process serving throughout Oklahoma. Personal service, substitute service, and service by publication. Starts at $35 for single attempt, $60 for standard service. Licensed, bonded, 24/7."
                url="https://justlegalsolutions.org/process-serving"
                datePublished={processServingFreshness.datePublished}
                dateModified={processServingFreshness.dateModified}
                image="https://justlegalsolutions.org/image-pack/images/image-010-process-serving-og.webp"
                keywords={['process serving', 'process server oklahoma', 'serve legal papers', 'personal service', 'substitute service', 'process server vs sheriff', 'evasive defendant service']}
                reviewCount={156}
                services={[
                    'Personal Service of Process',
                    'Substitute Service',
                    'Service by Publication Assistance',
                    'Same-Day Rush Service',
                    '2-Hour Emergency Service',
                    'Skip Tracing',
                    'GPS-Tracked Service'
                ]}
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Process Serving', url: '/process-serving' }
                ]}
                faqItems={serviceFaqs}
                howToSteps={howToSteps}
            />
        </>
    );
}
