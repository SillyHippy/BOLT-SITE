import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, FileText, MapPin, AlertCircle, Building, Scale, Shield, Clock, Search, BookOpen, CheckCircle } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Out-of-State Subpoena Service in Oklahoma | UIDDA Process Server',
  description: 'Domesticate and serve out-of-state subpoenas in Oklahoma. Expert process servers familiar with the Uniform Interstate Depositions and Discovery Act (UIDDA). Call (539) 367-6832.',
  keywords: 'out of state subpoena oklahoma, UIDDA oklahoma, domesticate subpoena oklahoma, foreign subpoena oklahoma, process server oklahoma UIDDA, foreign deposition subpoena, oklahoma UIDDA process server',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Out-of-State Subpoena Service in Oklahoma | UIDDA Process Server',
    description: 'Domesticate and serve out-of-state subpoenas in Oklahoma. Expert process servers familiar with the Uniform Interstate Depositions and Discovery Act (UIDDA).',
    url: 'https://justlegalsolutions.org/out-of-state-subpoena',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/out-of-state-subpoena',
  },
};

const pageFAQs: { question: string; answer: string }[] = [
  { question: 'What is the UIDDA?', answer: 'The Uniform Interstate Depositions and Discovery Act (UIDDA) provides a standardized, simple process for issuing discovery subpoenas in foreign jurisdictions. Oklahoma adopted the UIDDA under 12 O.S. § 3253.' },
  { question: 'How do I domesticate an out-of-state subpoena in Oklahoma?', answer: 'Under the UIDDA, you can simply forward a foreign subpoena to an Oklahoma court clerk in the county where discovery is sought. The clerk will then issue a matching Oklahoma subpoena for service. Alternatively, an Oklahoma-licensed attorney can issue the subpoena directly.' },
  { question: 'Can Just Legal Solutions domesticate my subpoena for me?', answer: 'Yes! We offer full court filing services to domesticate your foreign subpoena at the local Oklahoma courthouse before executing service. This saves your firm significant time and prevents out-of-state travel.' },
  { question: 'How much does it cost to serve an out-of-state subpoena?', answer: 'Standard service starts at $60, plus any applicable court filing fees required to domesticate the document. Rush and same-day services are available for urgent discovery deadlines.' },
  { question: 'Do you offer skip tracing if the witness has moved?', answer: 'Yes. If your key witness or defendant has moved within or out of Oklahoma, our expert skip tracers can locate them utilizing proprietary legal databases.' },
  { question: 'How long does out-of-state subpoena domestication usually take in Oklahoma?', answer: 'Most straightforward UIDDA domestications can be filed with the county clerk quickly once your foreign subpoena packet is complete. Timing depends on county clerk processing, but we prioritize same-day filing whenever possible and can typically move to service immediately after the Oklahoma subpoena is issued.' },
  { question: 'Do I need to hire an Oklahoma attorney for every UIDDA subpoena?', answer: 'Not always. Under UIDDA, many foreign subpoenas can be domesticated through clerk issuance without full local counsel engagement. For contested discovery disputes or motions to quash, you may still need Oklahoma counsel. We can coordinate with your litigation team and local counsel when required.' },
  { question: 'Can you handle federal out-of-state subpoenas in Oklahoma?', answer: 'Yes. We can serve federal subpoenas in Oklahoma, including matters tied to the Northern, Western, and Eastern federal districts, and coordinate related domestication or local service requirements based on your issuing court and subpoena type.' },
];

export default function OutOfStateSubpoenaPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/oklahoma-pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <nav className="text-sm mb-6 text-blue-200" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:ring-2 focus:ring-white rounded">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium" aria-current="page">Out-of-State Subpoenas</span>
          </nav>
          
          <div className="inline-flex items-center bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider shadow-sm">
            <Scale className="w-4 h-4 mr-2" /> UIDDA Specialists
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Out-of-State Subpoenas <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">in Oklahoma (UIDDA)</span>
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-6 text-blue-100 font-medium text-sm">
            <span className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1 rounded-lg backdrop-blur-sm border border-slate-700"><Scale className="h-4 w-4 text-blue-300" /> 12 O.S. § 3253</span>
            <span className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1 rounded-lg backdrop-blur-sm border border-slate-700"><MapPin className="h-4 w-4 text-blue-300" /> All 77 Counties</span>
            <span className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1 rounded-lg backdrop-blur-sm border border-slate-700"><Shield className="h-4 w-4 text-blue-300" /> Court-Ready Affidavits</span>
          </div>
          
          <p className="text-xl text-blue-50 mb-8 max-w-3xl leading-relaxed text-shadow-sm">
            Seamless domestication and service of foreign subpoenas in Oklahoma. We act as your local partners, facilitating the UIDDA process so your law firm can secure critical out-of-state discovery without the hassle of retaining local counsel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="tel:5393676832" className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-4 px-8 rounded-xl text-center transition-all shadow-xl text-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95 focus:ring-4 focus:ring-yellow-400/50 outline-none">
              <Phone className="h-6 w-6" /> (539) 367-6832
            </a>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-xl text-center transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:border-white/50 focus:ring-4 focus:ring-white/20 outline-none">
              <FileText className="h-6 w-6" /> Submit Foreign Subpoena
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 max-w-5xl py-16 space-y-16">

        {/* Introduction / Authority Text */}
        <section className="prose prose-lg prose-blue max-w-none text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">Domesticating Your Subpoena in Oklahoma</h2>
          <p>
            When discovery trails cross state lines, prosecuting or defending your case can suddenly become bogged down by jurisdictional red tape. If your law firm is located outside of Oklahoma but you need to depose a resident or recover documents from an Oklahoma-based corporation, you cannot simply serve them an out-of-state subpoena. It must conform to Oklahoma's jurisdictional powers.
          </p>
          <p>
            Fortunately, Oklahoma is one of the many states to adopt the <strong>Uniform Interstate Depositions and Discovery Act (UIDDA)</strong>. Codified in Oklahoma under <strong>12 O.S. § 3253</strong>, this act simplifies the process of domesticating a foreign subpoena. Instead of the costly and time-consuming process of filing a miscellaneous action or retaining local counsel to issue an <em>ex parte</em> letter rogatory, the UIDDA allows the clerk of the court in the Oklahoma county where discovery is sought to issue a local subpoena upon the filing of the foreign one.
          </p>
          <p>
            <strong>Just Legal Solutions</strong> specializes in bridging the gap between foreign jurisdictions and the Oklahoma court system. Our licensed professionals do more than serve process—we can file the required documentation with the appropriate District Court Clerk on your behalf, obtain the newly domesticated Oklahoma subpoena, and execute prompt, undeniable service upon your witness.
          </p>
        </section>

        {/* How It Works - The UIDDA Process */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-12">
          <div className="p-8 bg-slate-50 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue-600" />
              The UIDDA Process in Oklahoma (Step-by-Step)
            </h2>
            <p className="text-slate-600 mt-2">How we facilitate your out-of-state discovery under 12 O.S. § 3253.</p>
          </div>
          <div className="p-8">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              
              {/* Step 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                  1
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded bg-white border border-gray-200 shadow-sm ml-4 md:ml-0 md:group-odd:text-right">
                  <h3 className="font-bold text-lg text-slate-800 mb-1">Issue the Foreign Subpoena</h3>
                  <p className="text-gray-600 text-sm">You issue a subpoena under the authority of the trial state (your local jurisdiction). This is known as the "Foreign Subpoena."</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded bg-white border border-gray-200 shadow-sm ml-4 md:ml-0 md:group-odd:text-right">
                  <h3 className="font-bold text-lg text-slate-800 mb-1">Submit to Just Legal Solutions</h3>
                  <p className="text-gray-600 text-sm">Send your Foreign Subpoena and any accompanying attachments to our team via our secure intake portal or email.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                  <Building className="h-5 w-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded bg-white border border-gray-200 shadow-sm ml-4 md:ml-0 md:group-odd:text-right">
                  <h3 className="font-bold text-lg text-slate-800 mb-1">Courthouse Domestication</h3>
                  <p className="text-gray-600 text-sm">We take your Foreign Subpoena to the District Court Clerk in the Oklahoma county where the witness or records are located. The clerk then issues an Oklahoma subpoena that incorporates the original terms.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-green-600 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded bg-white border border-gray-200 shadow-sm ml-4 md:ml-0 md:group-odd:text-right">
                  <h3 className="font-bold text-lg text-slate-800 mb-1">Execution of Service</h3>
                  <p className="text-gray-600 text-sm">Our licensed Oklahoma Process Server immediately executes service upon the deponent. You receive a formalized, court-ready Affidavit of Service complete with GPS and photographic tracking data.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="p-6 bg-slate-800 text-white text-center">
            <p className="text-sm">
              *If the witness actively attempts to evade service, our Skip Tracing division will locate them anywhere in the state. 
            </p>
          </div>
        </section>

        {/* Types of UIDDA Service */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Types of Subpoenas We Domesticate</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center mb-6">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Subpoena Duces Tecum</h3>
              <p className="text-gray-600">
                Commands an individual, organization, or registered agent in Oklahoma to produce documents, electronically stored information, or tangible things. We verify that the issued Oklahoma subpoena strictly reflects the exact discovery schedule and document requests of the trial state's underlying subpoena.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-6">
                <Scale className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Subpoena Ad Testificandum</h3>
              <p className="text-gray-600">
                Commands an individual within Oklahoma's borders to give testimony at a deposition. Whether the deposition is taking place in Oklahoma or remotely via Zoom, we ensure strict compliance with Oklahoma's geographical boundary rules for witnesses who are not parties to the underlying suit.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Just Legal Solutions */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden mb-16">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8">Why Out-of-State Attorneys Trust Us</h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="shrink-0 pt-1">
                  <div className="bg-blue-600/30 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-blue-300" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">Licensed & Insured</h3>
                  <p className="text-slate-300 text-sm">We are fully licensed and bonded statewide in Oklahoma. Our affidavits are court-admissible in your local jurisdiction.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 pt-1">
                  <div className="bg-blue-600/30 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-blue-300" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">Rush & Same-Day Dispatch</h3>
                  <p className="text-slate-300 text-sm">Discovery deadlines are unforgiving. We offer expedited courthouse domestication and same-day service loops.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 pt-1">
                  <div className="bg-blue-600/30 p-2 rounded-lg">
                    <Building className="h-5 w-5 text-blue-300" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">All 77 Oklahoma Counties</h3>
                  <p className="text-slate-300 text-sm">From Tulsa and Oklahoma City to the rural panhandle. If your witness is in Oklahoma, we have the reach to serve them.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 pt-1">
                  <div className="bg-blue-600/30 p-2 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-blue-300" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">No Hidden Fees</h3>
                  <p className="text-slate-300 text-sm">Transparent, flat-rate pricing for process serving. Court filing fees for domestication are passed through honestly via receipt.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
              <h4 className="font-bold text-lg mb-2 flex items-center justify-center sm:justify-start gap-2">
                <FileText className="h-5 w-5 text-yellow-400" /> What to send us:
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                To begin the domestication process immediately, please securely transmit your issued Foreign Subpoena, all necessary exhibits or document requests, and specific physical identifiers or addresses for the target. We handle the rest.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {pageFAQs.length > 0 && (
          <section className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">FAQ: Out-of-State Subpoenas</h2>
              <p className="text-slate-600">Common questions about the UIDDA and domesticating legal processes in Oklahoma.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pageFAQs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg text-slate-800 mb-3 leading-snug">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Explore More Resources */}
        <section className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-slate-200 mt-16">
          <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <h2 className="text-2xl font-bold mb-2">Explore More Resources</h2>
            <p className="text-slate-300">Learn more about our services and legal solutions</p>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">⚖️ Specialized Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/law-firm-services" className="text-blue-600 hover:text-blue-800 underline">Law Firm & Attorney Services</Link></li>
                  <li><Link href="/courthouse-filing-services" className="text-blue-600 hover:underline">Courthouse Document Filing</Link></li>
                  <li><Link href="/ai-skip-tracing-guide-oklahoma" className="text-blue-600 hover:underline">Skip Tracing</Link></li>
                  <li><Link href="/registered-agent" className="text-blue-600 hover:underline">Registered Agent Services</Link></li>
                  <li><Link href="/serving-legal-papers-on-tribal-land" className="text-blue-600 hover:underline">Tribal Court Services</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">📚 Helpful Guides</h3>
                <ul className="space-y-2">
                  <li><Link href="/oklahoma-process-server-faq" className="text-blue-600 hover:underline">Process Serving FAQ 2026</Link></li>
                  <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:underline">Oklahoma Process Server Laws</Link></li>
                  <li><Link href="/oklahoma-process-server-pricing" className="text-blue-600 hover:underline">Pricing Guide</Link></li>
                  <li><Link href="/family-law-service-guide-tulsa" className="text-blue-600 hover:underline">Family Law Service</Link></li>
                  <li><Link href="/types-of-service-process-oklahoma" className="text-blue-600 hover:underline">Types of Legal Service</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">📍 Coverage Areas</h3>
                <ul className="space-y-2">
                  <li><Link href="/tulsa-process-server" className="text-blue-600 hover:underline">Tulsa Process Server</Link></li>
                  <li><Link href="/counties/tulsa-county" className="text-blue-600 hover:underline">Tulsa County</Link></li>
                  <li><Link href="/counties/creek-county" className="text-blue-600 hover:underline">Creek County</Link></li>
                  <li><Link href="/counties/wagoner-county" className="text-blue-600 hover:underline">Wagoner County</Link></li>
                  <li><Link href="/service-areas" className="text-blue-600 hover:underline">Browse All 77 Counties</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Action Bottom Bar */}
        <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[url('/img/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10 p-10 md:p-16 text-center text-white">
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Need a Foreign Subpoena Domesticated?</h2>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto font-medium">
              We specialize in UIDDA compliance. Let us handle the courthouse filing and rapid execution of service upon your target.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="tel:5393676832" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl flex items-center justify-center gap-3 hover:-translate-y-1">
                <Phone className="h-6 w-6" /> Talk to an Expert: (539) 367-6832
              </a>
              <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/50 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 backdrop-blur-sm hover:-translate-y-1">
                <FileText className="h-5 w-5" /> Retain Our Services
              </Link>
            </div>
          </div>
        </section>

      </div>

      <UnifiedSchema
        pageType="service"
        url="https://justlegalsolutions.org/out-of-state-subpoena"
        title="Out-of-State Subpoena Service in Oklahoma | UIDDA Process Server"
        description="Domesticate and serve out-of-state subpoenas in Oklahoma. Expert process servers familiar with the Uniform Interstate Depositions and Discovery Act (UIDDA)."
        faqItems={pageFAQs}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 156 }}
        breadcrumbItems={[
          { name: 'Home', item: 'https://justlegalsolutions.org' },
          { name: 'Services', item: 'https://justlegalsolutions.org/services' },
          { name: 'Out-Of-State Subpoenas', item: 'https://justlegalsolutions.org/out-of-state-subpoena' },
        ]}
      />
    </div>
  );
}
