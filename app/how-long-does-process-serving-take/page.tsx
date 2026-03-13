import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
    title: 'How Long Does Process Serving Take? | Oklahoma Timelines (2026)',
    description: 'Process serving timelines in Oklahoma: 2 hours (emergency) to 6 weeks (sheriff). Complete breakdown by service method, speed tier, and location. Learn what affects delivery time.',
    keywords: ['how long does process serving take', 'process serving timeline', 'how fast can papers be served', 'process server delivery time oklahoma'],
    authors: [{ name: 'Just Legal Solutions' }],
    creator: 'Just Legal Solutions',
    publisher: 'Just Legal Solutions',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    openGraph: {
        title: 'How Long Does Process Serving Take in Oklahoma?',
        description: 'From 2 hours (emergency) to 6 weeks (sheriff). Full timeline comparison for process serving in Oklahoma.',
        type: 'article', locale: 'en_US', url: 'https://justlegalsolutions.org/how-long-does-process-serving-take', siteName: 'Just Legal Solutions',
        images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630, alt: 'Process Serving Timeline Guide' }],
    },
    alternates: { canonical: 'https://justlegalsolutions.org/how-long-does-process-serving-take' },
    other: {
        'ai-content-type': 'article',
        'ai-summary': 'Process serving timelines: 2-hour emergency ($265), same-day rush 4-8 hours ($150), standard 1-7 business days ($60+), single attempts ($30+), sheriff 2-6 weeks ($25-$40). Factors: defendant availability, location, evasion, multiple attempts. Oklahoma has 180-day deadline to complete service after filing (12 O.S. § 2004).',
    },
};

const faqs = [
    { question: "How long does standard process serving take?", answer: "Standard process serving through a licensed process server typically takes 1-7 business days. In the Tulsa metro area, most standard serves are completed within 1-3 days. Rural areas or difficult-to-reach locations may take up to 5-7 days. Standard service is $60 and includes up to 3 service attempts." },
    { question: "How fast is same-day rush service?", answer: "Same-day rush service means a service attempt within 4-8 hours of submission for $150. To ensure same-day delivery, contact Just Legal Solutions before noon. You receive live phone updates throughout the process and a GPS-verified affidavit upon completion." },
    { question: "What is the 180-day rule in Oklahoma?", answer: "Under Oklahoma 12 O.S. § 2004, a plaintiff must complete service of process within 180 days of filing the lawsuit. If service is not completed within this window, the court may dismiss the case without prejudice. This deadline makes timely service critical, especially in cases where the defendant is hard to locate." },
    { question: "Why does the sheriff take so long?", answer: "The county sheriff's office handles service as a secondary responsibility alongside patrol, arrests, court security, and other duties. Deputies serve papers during limited business hours, typically making one attempt per week. They don't offer tracking, status updates, or rush options. The result is an average of 2-6 weeks, compared to 1-3 days for a private process server." },
    { question: "What delays process serving?", answer: "Common delays include: defendant not at the service address (requires multiple attempts at different times), wrong or outdated address (requires skip tracing), defendant actively evading service, gated communities or secured buildings that restrict access, rural or remote locations, and weather events. Working with a professional process server minimizes these delays through skip tracing, varied-time attempts, and persistence." },
];

export default function HowLongPage() {
    return (
        <>
            <div className="min-h-screen bg-white">
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
                        <ol className="flex items-center space-x-2">
                            <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
                            <li className="text-gray-500">/</li>
                            <li><span className="text-gray-700">How Long Does Process Serving Take?</span></li>
                        </ol>
                    </nav>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Long Does Process Serving Take in Oklahoma?</h1>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            <strong>Process serving can take as little as 2 hours or as long as 6 weeks</strong>, depending on who does it and how much you pay. A licensed process server completes most serves within <strong>1-3 business days</strong> (standard), <strong>4-8 hours</strong> (same-day rush), or <strong>2 hours</strong> (emergency). The county sheriff averages <strong>2-6 weeks</strong>. Here&apos;s a detailed breakdown.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline by Service Method</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Method</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Typical Time</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Cost</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-red-50">
                                        <td className="border border-gray-300 px-4 py-3 font-semibold">2-Hour Emergency</td>
                                        <td className="border border-gray-300 px-4 py-3 font-bold text-red-600">2 hours</td>
                                        <td className="border border-gray-300 px-4 py-3">$265</td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm">Hearing tomorrow, TRO expiring</td>
                                    </tr>
                                    <tr className="bg-orange-50">
                                        <td className="border border-gray-300 px-4 py-3 font-semibold">Same-Day Rush</td>
                                        <td className="border border-gray-300 px-4 py-3 font-bold text-orange-600">4&ndash;8 hours</td>
                                        <td className="border border-gray-300 px-4 py-3">$150</td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm">Deadline this week</td>
                                    </tr>
                                    <tr className="bg-green-50">
                                        <td className="border border-gray-300 px-4 py-3 font-semibold">Standard Process Server</td>
                                        <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">1&ndash;7 business days</td>
                                        <td className="border border-gray-300 px-4 py-3">$30&ndash;$125</td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm">No urgent deadline, routine cases</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-3 font-semibold">County Sheriff</td>
                                        <td className="border border-gray-300 px-4 py-3 font-bold text-red-600">2&ndash;6 weeks</td>
                                        <td className="border border-gray-300 px-4 py-3">$25&ndash;$40</td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm">No time pressure, budget priority</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-3 font-semibold">Service by Publication</td>
                                        <td className="border border-gray-300 px-4 py-3 font-bold text-red-600">41+ days</td>
                                        <td className="border border-gray-300 px-4 py-3">$200+</td>
                                        <td className="border border-gray-300 px-4 py-3 text-sm">Defendant cannot be located</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">What Factors Affect Delivery Time?</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { title: '📍 Location', desc: 'Tulsa metro: 1-2 days typical. Rural Oklahoma: 3-7 days. Out-of-county addresses may require coordination.' },
                                { title: '🏠 Defendant Availability', desc: 'If the person works irregular hours or travels frequently, multiple attempts at different times are needed.' },
                                { title: '🚫 Evasion', desc: 'Defendants who actively avoid service require more attempts, varied-time strategies, and potentially skip tracing.' },
                                { title: '🔍 Address Accuracy', desc: 'If the address is wrong or outdated, skip tracing ($50+) is needed to find the correct location before service can begin.' },
                                { title: '🏢 Secured Buildings', desc: 'Gated communities, doorman buildings, and corporate offices can slow access. Servers use legal strategies to gain entry.' },
                                { title: '📅 Holidays & Court Closures', desc: 'Service can be attempted on any day, but affidavit filing may be delayed until the next business day if courts are closed.' },
                            ].map((item) => (
                                <div key={item.title} className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-700">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Oklahoma&apos;s 180-Day Deadline</h2>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                            <p className="text-gray-700 mb-3"><strong>Critical:</strong> Under Oklahoma 12 O.S. § 2004, a plaintiff must complete service of process within <strong>180 days</strong> of filing the lawsuit. If the defendant hasn&apos;t been served within this window, the court may dismiss the case without prejudice.</p>
                            <p className="text-gray-700">This deadline makes choosing a reliable, fast service method important — especially if the defendant is difficult to locate. Don&apos;t wait until week 20 to switch from the sheriff to a private process server.</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (<div key={i} className="bg-gray-50 p-5 rounded-lg"><h3 className="font-semibold text-lg mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}
                        </div>
                    </section>

                    <section className="mb-12 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 p-8 rounded-lg text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Papers Served Fast?</h2>
                        <p className="text-lg text-gray-700 mb-6">Standard 1-3 day service is $60. Same-day rush $150. 2-hour emergency $265.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                            <a href="tel:5393676832" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg">&#x1F4DE; Call (539) 367-6832</a>
                            <Link href="/same-day-process-server" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">&#x26A1; Same-Day Service</Link>
                        </div>
                    </section>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                        <p className="text-sm text-gray-700">Licensed under <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">12 O.S. § 158.1</Link>.</p>
                        <p className="text-xs text-gray-500 mt-2">Last updated: March 2026</p>
                    </div>
                </div>
            </div>

            <Script id="faq-schema-timeline" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
            <UnifiedSchema pageType="article" title="How Long Does Process Serving Take?" description="Timeline guide: 2 hours to 6 weeks depending on method. Full comparison." url="https://justlegalsolutions.org/how-long-does-process-serving-take" image="https://justlegalsolutions.org/og-image.png" keywords={['how long process serving takes', 'process serving timeline', 'fast paper serving']} reviewCount={156} services={['Standard Service', 'Same-Day Rush', '2-Hour Emergency']} breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'How Long Does Process Serving Take?', url: '/how-long-does-process-serving-take' }]} />
        </>
    );
}
