import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
    title: 'Skip Tracing Services Oklahoma | Locate Hard-to-Find People | Just Legal Solutions',
    description: 'Professional skip tracing in Oklahoma to locate defendants, witnesses, and missing persons. Database searches, social media investigation, field work. 95%+ success rate starting at $50.',
    keywords: ['skip tracing oklahoma', 'locate defendant', 'find person for process serving', 'skip trace service tulsa', 'people search legal'],
    authors: [{ name: 'Just Legal Solutions' }],
    creator: 'Just Legal Solutions',
    publisher: 'Just Legal Solutions',
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    openGraph: {
        title: 'Skip Tracing Services | Locate People for Legal Proceedings in Oklahoma',
        description: 'Locate hard-to-find defendants and witnesses. Database searches, social media investigation, field surveillance. 95%+ success rate.',
        type: 'website', locale: 'en_US', url: 'https://justlegalsolutions.org/skip-tracing', siteName: 'Just Legal Solutions',
        images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630, alt: 'Skip Tracing Services Oklahoma' }],
    },
    alternates: { canonical: 'https://justlegalsolutions.org/skip-tracing' },
    other: {
        'ai-content-type': 'service-page',
        'ai-summary': 'Professional skip tracing to locate defendants and witnesses for legal proceedings in Oklahoma. Database, social media, and field investigation. Starting at $50. 95%+ success rate.',
        'ai-key-facts': 'Skip tracing from $50, 95%+ success rate, database + social media + field work, licensed Oklahoma servers, (539) 367-6832.',
    },
};

const faqs = [
    { question: "What is skip tracing?", answer: "Skip tracing is the process of locating a person who has 'skipped' or whose current address is unknown. Just Legal Solutions uses database searches, public records, social media investigation, and field work to locate individuals throughout Oklahoma for legal proceedings." },
    { question: "When do I need skip tracing?", answer: "You need skip tracing when: the defendant moved from their last known address, the address on file is invalid, previous service attempts failed, you only have a name but no current address, or the individual is actively evading service. Courts typically require proof of diligent efforts before approving service by publication." },
    { question: "How much does skip tracing cost?", answer: "Basic database search starts at $50 (results in 24-48 hours). Advanced investigation with social media and field work is $100+. Skip trace bundled with process serving starts at $80. Call (539) 367-6832 for a custom quote." },
    { question: "How long does skip tracing take?", answer: "Basic database skip traces return results within 24-48 hours. Complex investigations involving field work may take 3-7 business days. Rush skip tracing is available for urgent legal matters." },
    { question: "What information do I need to provide?", answer: "At minimum, the person's full legal name. Helpful additional details: date of birth, last known address, old phone numbers, employer information, vehicle details, names of known associates, and social media handles." },
    { question: "Is skip tracing legal in Oklahoma?", answer: "Yes. Skip tracing for legitimate legal purposes—locating individuals for service of process, debt collection, or legal proceedings—is legal in Oklahoma. We conduct all investigations within federal and Oklahoma state law." },
];

export default function SkipTracingPage() {
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
                            <li><span className="text-gray-700">Skip Tracing</span></li>
                        </ol>
                    </nav>

                    <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skip Tracing Services in Oklahoma</h1>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            <strong>Can&apos;t find the person you need to serve?</strong> Just Legal Solutions provides professional skip tracing to locate defendants, witnesses, and other individuals. We use database searches, public records analysis, social media investigation, and field work. <strong>95%+ success rate</strong> starting at <strong>$50</strong>. Call <a href="tel:5393676832" className="text-purple-700 font-bold hover:underline">(539) 367-6832</a>.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">How Our Skip Tracing Works</h2>
                        <div className="space-y-6">
                            {[
                                { step: '1', title: 'Information Gathering', desc: 'You provide whatever you have: name, last known address, DOB, phone numbers, employer, vehicle info, or social media handles.' },
                                { step: '2', title: 'Database & Public Records Search', desc: 'We search professional databases including address history, phone records, property records, court records, motor vehicle registrations, and voter data.' },
                                { step: '3', title: 'Social Media & Digital Investigation', desc: 'When databases are insufficient, we analyze social media profiles, online activity, and digital footprints to identify current locations.' },
                                { step: '4', title: 'Field Verification', desc: 'Our licensed servers physically verify the identified address before attempting service, ensuring we serve the right person.' },
                                { step: '5', title: 'Service or Report', desc: 'If bundled with process serving, we proceed directly to service. Otherwise, we provide a detailed report of verified addresses and contact info.' },
                            ].map((item) => (
                                <div key={item.step} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">{item.step}</div>
                                    <div><h3 className="font-bold text-lg text-gray-900">{item.title}</h3><p className="text-gray-700">{item.desc}</p></div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">When You Need Skip Tracing</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: '🏠', title: 'Defendant Moved', desc: 'Person moved from last known address with no forwarding information.' },
                                { icon: '🚫', title: 'Evading Service', desc: 'Individual is actively avoiding process servers or hiding their location.' },
                                { icon: '📋', title: 'Pre-Publication Requirement', desc: 'Courts require proof of diligent search before approving service by publication.' },
                                { icon: '👥', title: 'Witness Location', desc: 'A witness needs to be found for subpoena service before a trial or deposition.' },
                            ].map((item) => (
                                <div key={item.title} className="bg-purple-50 border border-purple-200 p-5 rounded-lg">
                                    <h3 className="font-bold text-lg mb-2">{item.icon} {item.title}</h3>
                                    <p className="text-gray-700">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Skip Tracing Pricing</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg text-center">
                                <h3 className="text-lg font-bold mb-2">Basic Database Search</h3>
                                <div className="text-4xl font-bold text-purple-600 mb-2">$50</div>
                                <div className="text-sm text-gray-500 mb-4">24&ndash;48 hours</div>
                                <ul className="text-sm text-gray-600 space-y-1 text-left">
                                    <li>&#x2713; Public records search</li><li>&#x2713; Address history</li><li>&#x2713; Phone verification</li><li>&#x2713; Known associates</li>
                                </ul>
                            </div>
                            <div className="bg-white border-2 border-purple-300 p-6 rounded-lg text-center shadow-lg">
                                <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">COMPREHENSIVE</div>
                                <h3 className="text-lg font-bold mb-2">Advanced Investigation</h3>
                                <div className="text-4xl font-bold text-purple-600 mb-2">$100+</div>
                                <div className="text-sm text-gray-500 mb-4">3&ndash;7 business days</div>
                                <ul className="text-sm text-gray-600 space-y-1 text-left">
                                    <li>&#x2713; Everything in Basic</li><li>&#x2713; Social media investigation</li><li>&#x2713; Employment verification</li><li>&#x2713; Field verification visit</li>
                                </ul>
                            </div>
                            <div className="bg-white border-2 border-orange-300 p-6 rounded-lg text-center shadow-lg">
                                <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">BUNDLE</div>
                                <h3 className="text-lg font-bold mb-2">Skip Trace + Service</h3>
                                <div className="text-4xl font-bold text-orange-600 mb-2">$80+</div>
                                <div className="text-sm text-gray-500 mb-4">Locate &amp; serve</div>
                                <ul className="text-sm text-gray-600 space-y-1 text-left">
                                    <li>&#x2713; Basic skip trace</li><li>&#x2713; Standard process serving</li><li>&#x2713; Up to 3 attempts</li><li>&#x2713; Notarized affidavit</li>
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

                    <section className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 p-8 rounded-lg text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Need to Locate Someone?</h2>
                        <p className="text-lg text-gray-700 mb-6">95%+ success rate. Get started with a basic search for just $50.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                            <a href="tel:5393676832" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg">&#x1F4DE; Call (539) 367-6832</a>
                            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">&#x1F4DD; Request Skip Trace</a>
                        </div>
                    </section>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                        <p className="text-sm text-gray-700">All skip tracing conducted lawfully per federal and Oklahoma state privacy statutes. Licensed under <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline font-medium">12 O.S. § 158.1</Link>.</p>
                        <p className="text-xs text-gray-500 mt-2">Last updated: March 2026</p>
                    </div>
                </div>
            </div>

            <Script id="faq-schema-skip-tracing" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
            <UnifiedSchema pageType="service" title="Skip Tracing Services Oklahoma" description="Professional skip tracing to locate defendants and witnesses. 95%+ success rate from $50." url="https://justlegalsolutions.org/skip-tracing" image="https://justlegalsolutions.org/og-image.png" keywords={['skip tracing oklahoma', 'locate defendant', 'find person']} reviewCount={156} services={['Skip Tracing', 'Database Search', 'Social Media Investigation', 'Field Verification']} breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Process Serving', url: '/process-serving' }, { name: 'Skip Tracing', url: '/skip-tracing' }]} />
        </>
    );
}
