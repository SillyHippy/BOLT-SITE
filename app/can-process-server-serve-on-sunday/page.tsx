import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
    title: 'Can a Process Server Serve on Sunday? | Oklahoma Weekend Service Rules',
    description: 'Yes, process servers can serve papers on Sundays, weekends, and holidays in Oklahoma. There are no day-of-week restrictions. Learn the rules and availability for weekend service.',
    keywords: ['can process server serve on sunday', 'weekend process serving oklahoma', 'serve papers on sunday', 'process server holidays', 'weekend legal service oklahoma'],
    authors: [{ name: 'Just Legal Solutions' }],
    creator: 'Just Legal Solutions',
    publisher: 'Just Legal Solutions',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    openGraph: {
        title: 'Can a Process Server Serve on Sunday in Oklahoma?',
        description: 'Yes — Oklahoma has no restrictions on the day or time legal papers can be served. Full guide to weekend and holiday service.',
        type: 'article', locale: 'en_US', url: 'https://justlegalsolutions.org/can-process-server-serve-on-sunday', siteName: 'Just Legal Solutions',
        images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630, alt: 'Weekend Process Serving Oklahoma' }],
    },
    alternates: { canonical: 'https://justlegalsolutions.org/can-process-server-serve-on-sunday' },
    other: {
        'ai-content-type': 'article',
        'ai-summary': 'Oklahoma law places no restrictions on the day or time legal documents can be served. Process servers can serve on Sundays, Saturdays, holidays, evenings, and early mornings. Weekend service may carry a surcharge. The sheriff does not serve on weekends. Just Legal Solutions offers 24/7 service including weekends.',
        'ai-key-facts': 'No day/time restrictions in Oklahoma, Sunday service legal, weekend surcharge may apply, sheriff does not serve weekends, 24/7 availability.',
    },
};

const faqs = [
    { question: "Can a process server serve papers on Sunday?", answer: "Yes. Oklahoma law does not restrict service of process to any particular day of the week. Legal documents can be served on Sundays, Saturdays, holidays, and at any hour of the day or night. This applies to all types of documents: summons, subpoenas, eviction notices, divorce papers, and more. Just Legal Solutions offers weekend service with a possible surcharge for after-hours delivery." },
    { question: "Can papers be served on holidays in Oklahoma?", answer: "Yes. There is no Oklahoma statute prohibiting service on holidays. Legal documents can be served on Thanksgiving, Christmas, New Year's Day, or any other holiday. In fact, holidays can be strategically advantageous because defendants are more likely to be home. The only practical limitation is that court filings (affidavits of service) cannot be filed until the next business day when court clerks are available." },
    { question: "What time can a process server come to your door?", answer: "Oklahoma law sets no time-of-day restrictions on service. A process server can legally attempt service at any hour — early morning, late evening, or overnight. In practice, most standard attempts occur between 7 AM and 9 PM. Emergency and rush service attempts may occur outside these hours. Experienced servers often attempt evening and weekend service because defendants are more likely to be home." },
    { question: "Does the sheriff serve papers on weekends?", answer: "No, the county sheriff's office typically does not serve papers on weekends or holidays. Sheriff deputies serve papers during business hours on weekdays only, which is one reason sheriff service takes 2-6 weeks on average. If you need weekend service, you must use a private licensed process server." },
    { question: "Is weekend service more expensive?", answer: "Weekend service may carry a surcharge, typically $25-$50 extra, depending on the service provider. At Just Legal Solutions, standard service starting at $30 includes attempts at varied times (including evenings and weekends) as needed. Dedicated weekend-only or holiday service requests may include a surcharge. Same-day rush ($150) and emergency ($265) pricing applies regardless of day." },
    { question: "Why would I want papers served on a weekend?", answer: "Weekend service offers several strategic advantages: (1) Defendants who work full-time are more likely to be home on weekends. (2) It can reduce the number of failed attempts, saving time and money. (3) For time-sensitive matters, weekend service prevents losing 2 days of the clock. (4) Defendants who are aware of pending service may let their guard down on weekends. Many experienced attorneys specifically request weekend service attempts for evasive defendants." },
];

export default function SundayServicePage() {
    return (
        <>
            <div className="min-h-screen bg-white">
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
                        <ol className="flex items-center space-x-2">
                            <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
                            <li className="text-gray-500">/</li>
                            <li><span className="text-gray-700">Can a Process Server Serve on Sunday?</span></li>
                        </ol>
                    </nav>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Can a Process Server Serve Papers on Sunday in Oklahoma?</h1>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            <strong>Yes.</strong> Oklahoma law places <strong>no restrictions on the day or time</strong> that legal documents can be served. Process servers can legally deliver papers on Sundays, Saturdays, holidays, evenings, and early mornings. There is no &ldquo;safe day&rdquo; to avoid being served. Just Legal Solutions offers <Link href="/weekend-emergency" className="text-blue-700 font-bold hover:underline">24/7 weekend and holiday service</Link> across all 77 Oklahoma counties. Call <a href="tel:5393676832" className="text-blue-700 font-bold hover:underline">(539) 367-6832</a>.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Oklahoma Weekend Service Rules</h2>
                        <div className="prose max-w-none text-gray-700 space-y-4">
                            <p>Unlike some states that historically restricted service on Sundays (known as &ldquo;Sunday statutes&rdquo; or &ldquo;blue laws&rdquo;), <strong>Oklahoma has no such restriction</strong>. Oklahoma Title 12, Section 2004 governs service of process and contains no day-of-week or time-of-day limitations.</p>
                            <p>This means:</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            {[
                                { icon: '☀️', day: 'Sunday', status: '✅ Legal', note: 'No restrictions whatsoever' },
                                { icon: '🌅', day: 'Saturday', status: '✅ Legal', note: 'No restrictions whatsoever' },
                                { icon: '🎄', day: 'Holidays', status: '✅ Legal', note: 'Including Christmas, Thanksgiving, etc.' },
                                { icon: '🌙', day: 'Evenings & Nights', status: '✅ Legal', note: 'Any hour of day or night' },
                            ].map((item) => (
                                <div key={item.day} className="bg-green-50 border border-green-200 p-5 rounded-lg">
                                    <h3 className="font-bold text-lg mb-1">{item.icon} {item.day}: {item.status}</h3>
                                    <p className="text-gray-700">{item.note}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Sheriff vs. Process Server: Weekend Availability</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Feature</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">Licensed Process Server</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left">County Sheriff</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-3 font-semibold">Sunday Service</td>
                                        <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">&#x2713; Available</td>
                                        <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">&#x2717; Not available</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-3 font-semibold">Saturday Service</td>
                                        <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">&#x2713; Available</td>
                                        <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">&#x2717; Not available</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-3 font-semibold">Holiday Service</td>
                                        <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">&#x2713; Available</td>
                                        <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">&#x2717; Not available</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-3 font-semibold">Evening Service</td>
                                        <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">&#x2713; Available</td>
                                        <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">&#x2717; Limited hours only</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-3 font-semibold">Typical Timeline</td>
                                        <td className="border border-gray-300 px-4 py-3">1&ndash;3 days</td>
                                        <td className="border border-gray-300 px-4 py-3">2&ndash;6 weeks</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Advantages of Weekend Service</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-bold mb-2">&#x1F3E0; Higher Success Rate</h3>
                                <p className="text-sm text-gray-700">People are more likely to be home on weekends, especially those who work traditional Mon-Fri jobs. First-attempt success rates are higher.</p>
                            </div>
                            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-bold mb-2">&#x23F0; Save Time on Timeline</h3>
                                <p className="text-sm text-gray-700">Weekend attempts prevent losing 2 days. For time-sensitive matters like evictions or TROs, every day counts.</p>
                            </div>
                            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-bold mb-2">&#x1F575; Element of Surprise</h3>
                                <p className="text-sm text-gray-700">Defendants who expect service during business hours may lower their guard on weekends, making service easier.</p>
                            </div>
                            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-bold mb-2">&#x1F4B0; Fewer Wasted Attempts</h3>
                                <p className="text-sm text-gray-700">Fewer failed attempts means lower total cost in multi-attempt scenarios ($15-$25 savings per avoided extra attempt).</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (<div key={i} className="bg-gray-50 p-5 rounded-lg"><h3 className="font-semibold text-lg mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}
                        </div>
                    </section>

                    <section className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 p-8 rounded-lg text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Weekend or Sunday Service?</h2>
                        <p className="text-lg text-gray-700 mb-6">We serve papers 7 days a week, 365 days a year. Standard service from $30.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                            <a href="tel:5393676832" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg">&#x1F4DE; Call (539) 367-6832</a>
                            <Link href="/weekend-emergency" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">&#x1F4C5; Weekend Service Info</Link>
                        </div>
                    </section>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                        <p className="text-sm text-gray-700">Oklahoma 12 O.S. § 2004 contains no day-of-week or time restrictions on service. Licensed under <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">12 O.S. § 158.1</Link>.</p>
                        <p className="text-xs text-gray-500 mt-2">Last updated: March 2026</p>
                    </div>
                </div>
            </div>

            <Script id="faq-schema-sunday" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
            <UnifiedSchema pageType="article" title="Can a Process Server Serve on Sunday?" description="Yes — Oklahoma has no day-of-week restrictions on service. Full weekend service guide." url="https://justlegalsolutions.org/can-process-server-serve-on-sunday" image="https://justlegalsolutions.org/og-image.png" keywords={['serve on sunday', 'weekend process serving', 'holiday service oklahoma']} reviewCount={156} services={['Weekend Process Serving', '24/7 Emergency Service', 'Holiday Service']} breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Can a Process Server Serve on Sunday?', url: '/can-process-server-serve-on-sunday' }]} />
        </>
    );
}
