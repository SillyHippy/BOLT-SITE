import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle, FileText, Clock, Shield, MapPin, Building2, Scale, Zap, AlertTriangle, Star, Target } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Courthouse Filing Services Oklahoma | Tulsa & Creek County',
  description: 'Professional courthouse filing services in Oklahoma. Same-day filing at Tulsa County & Creek County District Courts, document retrieval, and multi-county coverage.',
  keywords: 'courthouse filing service Oklahoma, court document filing Tulsa, courthouse filing Tulsa County, court filing Creek County, same-day court filing Oklahoma, document filing service',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Courthouse Filing Services Oklahoma',
    description: 'Same-day courthouse filing at Tulsa County and Creek County District Courts. Document retrieval, chain of custody, and multi-county coverage.',
    url: 'https://justlegalsolutions.org/courthouse-filing-services',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-062-courthouse-filing-services-og.png', width: 1200, height: 630, alt: 'Courthouse Filing Services Oklahoma' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Courthouse Filing Services Oklahoma',
    description: 'Same-day courthouse filing at Tulsa County and Creek County District Courts with full chain of custody documentation.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-062-courthouse-filing-services-og.png'],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/courthouse-filing-services' },
  other: {
    'ai-content-type': 'service',
    'ai-summary': 'Courthouse filing services in Oklahoma including same-day filing at Tulsa and Creek County District Courts, document retrieval, and multi-county coverage.',
    'ai-key-facts': 'Tulsa County District Court, Creek County District Court, same-day filing, document retrieval, chain of custody, multi-county Oklahoma',
  },
};

const faqs = [
  {
    question: "What types of documents can you file at the courthouse on my behalf?",
    answer: "We handle a wide range of civil and family court documents including petitions and civil complaints, motions and responses, answers and counterclaims, subpoenas, discovery documents, proposed orders, garnishments, writs of execution, notices of appeal, and most other documents filed in the Oklahoma District Court system. If you have a document type not listed here, contact us and we can confirm whether we can file it for you.",
  },
  {
    question: "How fast is same-day courthouse filing?",
    answer: "For documents received by our cutoff time (typically mid-morning for same-day service), we will proceed to the courthouse that business day and file your documents. We provide you with file-stamped copies and a chain of custody receipt confirming the filing occurred on the requested date. Turnaround to get your file-stamped copies back to you is typically within a few hours of filing. Contact us for current cutoff times and rush options.",
  },
  {
    question: "Which Oklahoma courthouses do you file at?",
    answer: "Our primary courthouse filing coverage includes Tulsa County District Court (downtown Tulsa), Creek County District Court (Sapulpa), Wagoner County District Court, Rogers County District Court (Claremore), Osage County District Court (Pawhuska), and Okmulgee County District Court. We also provide statewide filing services for other Oklahoma counties. Contact us for availability outside our primary coverage counties.",
  },
  {
    question: "Do you provide document retrieval as well as filing?",
    answer: "Yes. In addition to filing documents, we offer courthouse retrieval services to pick up filed documents, obtain certified copies of existing court records, retrieve case information, and bring documents to your office or ship them to you. Document retrieval is a flat-fee service — see our pricing page for current rates.",
  },
  {
    question: "What is chain of custody documentation and why do I need it?",
    answer: "Chain of custody documentation is a detailed record of who handled your documents, when, and what actions were taken at each stage — from receipt at our office through courthouse filing and return of file-stamped copies. This documentation is essential for malpractice protection, client billing, and proving that filings occurred on time when deadlines are contested. Every courthouse filing engagement includes a complete chain of custody record.",
  },
  {
    question: "Can you assist with eFiling as well as physical courthouse filing?",
    answer: "Yes. Oklahoma's district courts have progressively adopted electronic filing (eFiling) systems. We provide eFiling assistance including preparing documents in the required electronic format, submitting through the Oklahoma eCourts system, and obtaining confirmation of electronic filing. We can advise on which document types and courts require or accept eFiling versus traditional counter filing.",
  },
  {
    question: "What is the filing deadline to answer a civil complaint in Oklahoma?",
    answer: "Under 12 O.S. § 2012, a defendant has 20 days after service of summons to file an answer to a civil complaint in Oklahoma District Court. This 20-day window begins from the date of service — not the date the complaint was filed. Missing this deadline can result in a default judgment being entered against the defendant. Our courthouse filing team tracks deadlines and confirms same-day filing to help attorneys avoid missing critical response windows.",
  },
  {
    question: "How long do I have to file a Notice of Appeal in Oklahoma?",
    answer: "Under Oklahoma appellate rules, a Notice of Appeal must generally be filed within 30 days of a final order or judgment. This is a jurisdictional deadline — missing it can result in the appellate court dismissing your appeal. For post-trial motions that toll the deadline, the 30-day period may restart from the order ruling on those motions. Our courthouse filing service handles urgent same-day appellate filings to ensure the Notice of Appeal reaches the clerk on the deadline date.",
  },
  {
    question: "Does Oklahoma require appointments for courthouse filing?",
    answer: "Tulsa County District Court and Creek County District Court generally accept walk-in filings during business hours (Monday through Friday, 8:00 AM to 4:30 PM). Oklahoma County District Court in Oklahoma City has historically required or strongly encouraged appointments for counter filings due to high volume. We recommend confirming current procedures before same-day filings at Oklahoma County. Our team is familiar with current clerk requirements at each courthouse we regularly serve.",
  },
  {
    question: "What happens if I miss the 4:30 PM filing cutoff at Tulsa County?",
    answer: "The Tulsa County District Court clerk&apos;s office stops accepting filings promptly at 4:30 PM on business days. Documents presented after 4:30 PM will receive a next-business-day file stamp, which can be critical if you are working against a same-day deadline. Just Legal Solutions sets internal cutoff times earlier than 4:30 PM to ensure all documents are filed with sufficient buffer time. Contact us early in the day for any same-day filing needs.",
  },
  {
    question: "What is Oklahoma&apos;s eCourts eFiling system and how does it work?",
    answer: "Oklahoma eCourts is the statewide electronic filing management system used by Oklahoma district courts that have adopted eFiling. Registered attorneys and their authorized agents can submit documents electronically through the eCourts portal, receive electronic confirmation of filing, and access electronic court records. Not all Oklahoma courts or case types are eFiling-required, and some document types still require physical counter filing. Just Legal Solutions assists with both eFiling submission and traditional counter filing depending on the court and document type.",
  },
  {
    question: "Can you handle filings in multiple counties on the same day?",
    answer: "Yes. Just Legal Solutions can coordinate same-day filing in multiple Oklahoma counties when needed for cases involving multi-county service or parallel proceedings. Our primary same-day coverage includes Tulsa County, Creek County, and adjacent counties. For same-day multi-county filing needs, contact us as early as possible to confirm availability and routing. Statewide filings in other counties are available with advance scheduling.",
  },
];

export default function CourthouseFilingServices() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema
          pageType="service"
          pageTitle="Courthouse Filing Services Oklahoma"
          pageDescription="Professional courthouse filing services in Oklahoma. Same-day filing at Tulsa County and Creek County District Courts with full chain of custody documentation."
          pageUrl="https://justlegalsolutions.org/courthouse-filing-services"
          siteName="Just Legal Solutions"
          reviewCount={156}
          services={['Courthouse Filing Services', 'Document Filing', 'Court Document Retrieval']}
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'Courthouse Filing Services', url: '/courthouse-filing-services' },
          ]}
          faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
          keywords={['courthouse filing service Oklahoma', 'court document filing Tulsa', 'same-day court filing']}
        />

        <LocalPromoBanner zips={[]} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-blue-200 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Courthouse Filing Services</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="w-6 h-6 text-orange-400" />
                <span className="text-orange-300 font-semibold uppercase tracking-wide text-sm">Oklahoma Court Filing</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Courthouse Filing Services in Oklahoma</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Same-day filing at Tulsa County and Creek County District Courts. Full chain of custody documentation, document retrieval, and multi-county coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Schedule a Filing
                </Link>
                <Link href="/pricing" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We File */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What Our Courthouse Filing Service Includes</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Just Legal Solutions acts as your courthouse liaison, handling the time-consuming task of physically appearing at the clerk&apos;s office so you and your staff don&apos;t have to. Our service covers the full lifecycle of courthouse document handling.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: FileText,
                  title: 'Civil Complaint & Petition Filing',
                  desc: 'Initial pleadings filed with the correct court clerk, with file-stamped copies returned to you same day. We ensure the correct court, division, and fee schedule are applied.',
                },
                {
                  icon: Scale,
                  title: 'Motions, Orders & Responses',
                  desc: 'Ongoing motion practice filings handled quickly and accurately. We track filing deadlines with your team and confirm same-day filings for time-sensitive submissions.',
                },
                {
                  icon: Shield,
                  title: 'Subpoenas & Discovery Documents',
                  desc: 'Subpoenas for witnesses and records, discovery requests, responses, and supplemental disclosures filed with the proper court and returned with filing confirmation.',
                },
                {
                  icon: Building2,
                  title: 'Writs, Garnishments & Post-Judgment Filings',
                  desc: 'Post-judgment enforcement documents including writs of execution, garnishments, and abstract of judgment filings handled across multiple counties.',
                },
                {
                  icon: MapPin,
                  title: 'Document Retrieval & Certified Copies',
                  desc: 'Retrieve filed documents, obtain certified copies of court records, pull case indexes, and collect issued summonses — all with same-day or next-day turnaround.',
                },
                {
                  icon: Zap,
                  title: 'eFiling Assistance',
                  desc: 'Oklahoma eCourts eFiling submission support including document preparation, format compliance, submission, and retrieval of electronic filing confirmation.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courts We File At */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Oklahoma Courthouses We Serve</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tulsa County */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-blue-900 text-white p-4">
                  <div className="flex items-center">
                    <Building2 className="w-5 h-5 mr-2" />
                    <h3 className="font-bold text-lg">Tulsa County District Court</h3>
                  </div>
                  <p className="text-blue-200 text-sm mt-1">Tulsa, Oklahoma — Primary Coverage</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    The Tulsa County District Court is the largest district court in northeastern Oklahoma, handling civil, criminal, family, and probate matters. Our team makes regular courthouse runs to the Tulsa County Courthouse, offering same-day filing for documents received before our morning cutoff.
                  </p>
                  <ul className="space-y-2">
                    {['Civil division filings', 'Family law court filings', 'Small claims court', 'Probate filings', 'Document retrieval & certified copies'].map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Creek County */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-blue-800 text-white p-4">
                  <div className="flex items-center">
                    <Building2 className="w-5 h-5 mr-2" />
                    <h3 className="font-bold text-lg">Creek County District Court</h3>
                  </div>
                  <p className="text-blue-200 text-sm mt-1">Sapulpa, Oklahoma — Primary Coverage</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Creek County District Court in Sapulpa serves a growing population across the Creek County area, including Sapulpa, Bristow, Drumright, and surrounding communities. We provide reliable filing services for attorneys with matters in Creek County courts, including cases involving Sapulpa-based defendants and Creek County property matters.
                  </p>
                  <ul className="space-y-2">
                    {['Civil case filings', 'Eviction / FED filings', 'Garnishment filings', 'Document retrieval', 'Judgment abstracts'].map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Additional Oklahoma County Courts</h3>
              <p className="text-blue-800">
                Beyond Tulsa and Creek Counties, we provide courthouse filing services at Wagoner County, Rogers County (Claremore), Osage County (Pawhuska), Okmulgee County, and additional Oklahoma counties upon request. Statewide filing services are available — contact us to confirm availability and turnaround time for your county.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How Our Filing Service Works</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              A streamlined, five-step process designed to save your legal staff hours while ensuring accurate, on-time filings every time.
            </p>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Submit Your Documents to Us', desc: 'Send documents electronically via our secure portal or email, or drop them off at our office. Include instructions for the court, division, and any fee information. We confirm receipt immediately.' },
                { step: '02', title: 'We Review for Filing Completeness', desc: 'Our team performs a preliminary review to ensure documents are properly captioned, signed, and include required exhibits or attachments. We flag any potential issues before proceeding to the courthouse.' },
                { step: '03', title: 'Same-Day Courthouse Presentation', desc: 'For documents received before our daily cutoff, a courier proceeds to the courthouse clerk\'s office and presents your documents for filing. We pay any required filing fees on your behalf (reimbursed per invoice).' },
                { step: '04', title: 'File-Stamped Copies Obtained', desc: 'We obtain conformed or file-stamped copies of all filed documents directly from the clerk, confirming the filing date, case number, and assigned judge.' },
                { step: '05', title: 'Chain of Custody Documentation Delivered', desc: 'You receive your file-stamped copies plus a complete chain of custody document recording every handling step from document receipt to courthouse return — delivered digitally or by courier.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">{item.step}</div>
                  <div className="bg-gray-50 rounded-xl p-6 flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chain of Custody */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Chain of Custody Documentation</h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Every courthouse filing engagement includes a full chain of custody record — because when deadlines and filing dates are on the line, documentation protects your firm and your clients.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  Chain of custody documentation is a detailed log of every person who handled your documents, every location those documents passed through, and every action taken — from the moment we received them to the moment file-stamped copies were returned to your office.
                </p>
                <p className="text-gray-700 mb-4">
                  This documentation serves multiple critical purposes for law firms and legal departments. It provides irrefutable proof of timely filing if a deadline is later disputed. It supports billing and client communication with a verified record of service performed. And it creates an audit trail that protects your firm against allegations of missed deadlines or improper handling.
                </p>
                <p className="text-gray-700">
                  Our chain of custody record includes: document description and page count at receipt, date and time received, date and time delivered to courthouse, clerk name (when available), file-stamp date and case number confirmation, and date and time returned to client.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  'Document description, page count, and condition at receipt',
                  'Date and time your documents were received by us',
                  'Courier identity and assignment confirmation',
                  'Courthouse arrival and clerk interaction timestamp',
                  'Filing confirmation — case number, file-stamp date',
                  'Date and time file-stamped copies returned to client',
                  'Digital delivery confirmation or in-person receipt',
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Uses This Service */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Who Uses Courthouse Filing Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Scale, title: 'Law Firms', desc: 'Solo practitioners and multi-attorney firms that want to free up staff time from courthouse runs and ensure no filing deadline is missed, even on high-volume days.' },
                { icon: Building2, title: 'Insurance Companies', desc: 'Legal departments and outside counsel handling litigation across multiple Oklahoma counties need reliable, multi-county filing capability without maintaining local staff.' },
                { icon: Target, title: 'Debt Collection Agencies', desc: 'High-volume collection agencies filing dozens of collection lawsuits monthly rely on our batch filing service to keep their docket moving efficiently.' },
                { icon: MapPin, title: 'Out-of-State Attorneys', desc: 'Attorneys licensed in other states with Oklahoma matters use our filing service as their local courthouse presence, ensuring proper local filing procedures are followed.' },
                { icon: FileText, title: 'Corporate Legal Departments', desc: 'In-house legal teams at Oklahoma companies use our service for routine court filings, allowing their legal staff to focus on substantive legal work.' },
                { icon: Star, title: 'Title Companies & Real Estate', desc: 'Real estate attorneys and title companies filing quiet title actions, abstracts of judgment, and property-related court documents rely on our prompt filing service.' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* County Filing Guide */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">County-by-County Filing Guide</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Each Oklahoma courthouse has its own procedures, hours, and requirements. Here&apos;s what you need to know about the three counties we most frequently serve.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-blue-900 text-white p-4">
                  <h3 className="font-bold text-lg">Tulsa County</h3>
                  <p className="text-blue-200 text-sm mt-1">Primary Coverage</p>
                </div>
                <div className="p-5 space-y-3 text-sm text-gray-700">
                  <div><span className="font-semibold">Main Location:</span> 500 S. Denver Avenue, Tulsa OK 74103</div>
                  <div><span className="font-semibold">Hours:</span> Mon&ndash;Fri, 8:00 AM &ndash; 4:30 PM</div>
                  <div><span className="font-semibold">Filing Cutoff:</span> Filings stop promptly at 4:30 PM — no exceptions</div>
                  <div><span className="font-semibold">Satellite Office:</span> 123 N. Main St, Broken Arrow OK 74012 (limited services)</div>
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-800 text-xs mt-2">Walk-in filing accepted. High volume during morning hours — plan accordingly for time-sensitive filings.</div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="font-bold text-lg">Creek County</h3>
                  <p className="text-blue-200 text-sm mt-1">Primary Coverage</p>
                </div>
                <div className="p-5 space-y-3 text-sm text-gray-700">
                  <div><span className="font-semibold">Location:</span> 222 E. Dewey Avenue, Sapulpa OK 74066</div>
                  <div><span className="font-semibold">Hours:</span> Mon&ndash;Fri, 8:00 AM &ndash; 4:30 PM</div>
                  <div><span className="font-semibold">Walk-In:</span> Walk-in service available during business hours</div>
                  <div><span className="font-semibold">Note:</span> Family law filings require specific cover sheets — we prepare these automatically</div>
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-800 text-xs mt-2">Smaller volume than Tulsa County — faster counter service, but same strict cutoff times apply.</div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-slate-700 text-white p-4">
                  <h3 className="font-bold text-lg">Oklahoma County</h3>
                  <p className="text-slate-300 text-sm mt-1">Statewide Coverage</p>
                </div>
                <div className="p-5 space-y-3 text-sm text-gray-700">
                  <div><span className="font-semibold">Location:</span> 320 Robert S. Kerr Avenue, Oklahoma City OK 73102</div>
                  <div><span className="font-semibold">Hours:</span> Mon&ndash;Fri, 8:00 AM &ndash; 4:30 PM</div>
                  <div><span className="font-semibold text-amber-700">Important:</span> Appointments required — unlike Tulsa and Creek County</div>
                  <div><span className="font-semibold">Volume:</span> High-volume courthouse with extended wait times</div>
                  <div className="bg-amber-50 p-3 rounded-lg text-amber-800 text-xs mt-2">Plan well in advance for Oklahoma County filings. Walk-in service is not reliably available — advance scheduling is required.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Filing Deadlines */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Critical Filing Deadlines in Oklahoma</h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Missing a filing deadline in Oklahoma civil litigation can have severe consequences — from default judgment to losing appellate rights entirely. Here are the key deadlines you need to track.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-amber-900 mb-2">Disclaimer: Verify Deadlines With Your Attorney</h3>
              <p className="text-amber-800 text-sm">
                Filing deadlines are jurisdiction-specific and can be affected by court orders, holidays, rule amendments, and case-specific circumstances. Always verify deadlines with licensed counsel. Just Legal Solutions executes filings as directed — we do not provide legal advice on deadline calculations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Answer to Civil Complaint',
                  deadline: '20 days from service',
                  detail: 'Under 12 O.S. § 2012, defendants have 20 days after service to file an answer. Missing this window risks a default judgment.',
                },
                {
                  title: 'Notice of Appeal',
                  deadline: '30 days from final order',
                  detail: 'Appellate notices must be filed within 30 days of the final order or judgment. This deadline is jurisdictional — courts cannot extend it.',
                },
                {
                  title: 'Motion to Dismiss',
                  deadline: 'Before responsive pleadings',
                  detail: 'Motions to dismiss under 12 O.S. § 2012(B) must be filed before or simultaneously with an answer to avoid waiver of certain defenses.',
                },
                {
                  title: 'Discovery Responses',
                  deadline: 'Per court order / scheduling order',
                  detail: 'Discovery response deadlines are set by the court&apos;s scheduling order. Failures to respond timely can result in waiver or sanctions.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-2">{item.deadline}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* eFiling vs Physical Filing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">E-Filing vs. Physical Filing in Oklahoma</h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Oklahoma has progressively expanded its eCourts electronic filing system. Understanding when eFiling is available — and when physical filing is still required — is essential for compliance.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Zap className="w-5 h-5 text-blue-600 mr-2" />
                  Oklahoma eCourts eFiling
                </h3>
                <ul className="space-y-3">
                  {[
                    'Available in participating Oklahoma district courts',
                    'Registered attorneys and authorized agents may submit electronically',
                    'Instant filing confirmation and electronic case access',
                    'Eliminates travel time and physical courier costs',
                    'Accepted for most civil, family, and probate case types in participating courts',
                    'Documents must meet strict format requirements (PDF/A)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                  Physical Counter Filing
                </h3>
                <ul className="space-y-3">
                  {[
                    'Required for courts that have not adopted eCourts eFiling',
                    'Necessary when original documents with wet signatures are required',
                    'Required for certain eviction, probate, and small claims filings',
                    'Provides same-day file stamp and immediate clerk processing',
                    'Essential when eFiling system experiences downtime or technical issues',
                    'Required for filing original exhibits and physical evidence',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-8 rounded-r-lg">
              <p className="text-blue-800">
                <strong>Our approach:</strong> Just Legal Solutions handles both eFiling submissions and physical counter filings. We advise on the appropriate method based on the court, case type, and your specific filing requirements — and execute either method with the same chain of custody documentation standards.
              </p>
            </div>
          </div>
        </section>

        {/* Chain of Custody Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Chain of Custody: Why It Matters for Courthouse Filings</h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Chain of custody documentation is not just a formality — it is a critical risk management tool for law firms, protecting against malpractice claims, proving deadline compliance, and authenticating evidence.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What Our Chain of Custody Includes</h3>
                <div className="space-y-3">
                  {[
                    { title: 'Pickup Confirmation', desc: 'Date, time, and acknowledgment of document receipt from your office or via secure upload.' },
                    { title: 'Transport Log', desc: 'Record of document handling from pickup through courthouse arrival, including GPS tracking of courier route.' },
                    { title: 'Filing Confirmation', desc: 'File-stamped copy or electronic confirmation proving the document was accepted by the court clerk on a specific date.' },
                    { title: 'Return Documentation', desc: 'Confirmation of file-stamped copy delivery back to your office, including timestamp and delivery receipt.' },
                    { title: 'GPS Tracking Record', desc: 'GPS coordinates of the courthouse visit, timestamped, to corroborate the date and location of filing.' },
                    { title: 'Photographic Evidence', desc: 'Photos of the filed documents with visible file stamps where permitted, providing visual confirmation of filing.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-800 text-sm">{item.title}: </span>
                        <span className="text-gray-600 text-sm">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Chain of Custody Matters</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Evidence Authentication',
                      desc: 'A complete chain of custody establishes that documents were handled properly and without tampering from your office to the courthouse — essential for evidence admissibility arguments.',
                    },
                    {
                      title: 'Deadline Compliance Proof',
                      desc: 'If opposing counsel challenges whether a filing was timely, GPS records and timestamped filing confirmations provide objective proof of the exact date and time of filing.',
                    },
                    {
                      title: 'Malpractice Protection',
                      desc: 'Law firms face malpractice exposure when filings are delayed or missed. A documented chain of custody shows that filing tasks were properly delegated and executed — protecting attorneys from liability based on courier error.',
                    },
                    {
                      title: 'Client Billing Support',
                      desc: 'Chain of custody documentation supports accurate client billing by providing a detailed record of every action taken on each filing task.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 border border-gray-100">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Filing Mistakes to Avoid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-8">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-amber-900 mb-4">Common Courthouse Filing Mistakes to Avoid</h2>
                  <p className="text-amber-800 mb-6">
                    Even experienced legal professionals make filing errors that cause delays, rejected documents, and missed deadlines. Here are the most common mistakes we see — and how our team prevents them.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { mistake: 'Wrong court or division', detail: 'Filing a civil petition in the family law division, or vice versa, results in rejection and a lost filing day. We confirm the correct court and division before every submission.' },
                      { mistake: 'Missing or incorrect filing fees', detail: 'Oklahoma courts have specific filing fees that vary by case type, county, and document. Incorrect fee amounts result in rejected filings. We verify fees in advance and pay on your behalf.' },
                      { mistake: 'Improper caption or case number', detail: 'Documents without the correct case caption, case number format, or judicial district designation are frequently rejected by Oklahoma clerks without exception.' },
                      { mistake: 'Missing required exhibits or attachments', detail: 'Certain filings require supporting documents — a summons with a petition, supporting affidavits with motions. Missing attachments cause rejection and delay service timelines.' },
                      { mistake: 'Arriving after the 4:30 PM cutoff', detail: 'Tulsa County and Creek County clerks stop accepting filings at 4:30 PM sharp. A same-day filing submitted at 4:31 PM gets the next business day\'s file stamp — potentially missing your deadline.' },
                      { mistake: 'Wet signature required but not obtained', detail: 'Some Oklahoma filings require original signatures in wet ink, not electronic signatures. Submitting a document that requires a wet signature via eFiling results in rejection.' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-4 border border-amber-200">
                        <h4 className="font-semibold text-amber-900 text-sm mb-1 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          {item.mistake}
                        </h4>
                        <p className="text-amber-800 text-xs">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect When Filing */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What to Expect When Filing at an Oklahoma Courthouse</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              First-time filers and out-of-state attorneys often have questions about what actually happens at the courthouse counter. Here&apos;s a realistic walkthrough of what to expect when filing civil documents at <Link href="/counties/tulsa-county" className="text-blue-700 font-semibold hover:underline">Tulsa County</Link> and <Link href="/counties/creek-county" className="text-blue-700 font-semibold hover:underline">Creek County</Link> District Courts.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">01</div>
                <div className="bg-white rounded-xl p-6 flex-1 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Arrive Before the Cutoff</h3>
                  <p className="text-gray-600">
                    Both Tulsa County and Creek County clerks&apos; offices close for filings at 4:30 PM, Monday through Friday. Arriving before 2:00 PM is strongly recommended for same-day service to allow time for any document issues to be resolved before cutoff. Court holidays follow the Oklahoma state holiday schedule — verify current hours and closures on the <a href="https://www.tulsacounty.org/Tulsa/County/Departments/Court+Clerk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Tulsa County Court Clerk</a> page or the <a href="https://www.courts.ok.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Oklahoma Courts official website</a>.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">02</div>
                <div className="bg-white rounded-xl p-6 flex-1 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Present Documents at the Filing Counter</h3>
                  <p className="text-gray-600">
                    The court clerk reviews documents for basic completeness — correct caption, case number (for existing cases), required attachments, and proper signatures. This review is administrative, not substantive. Clerks do not advise on whether documents are legally sufficient — only whether they meet format requirements. Our team performs a preliminary compliance review before arriving at the courthouse so rejections are rare.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">03</div>
                <div className="bg-white rounded-xl p-6 flex-1 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Filing Fees Are Assessed and Paid</h3>
                  <p className="text-gray-600">
                    The clerk calculates filing fees based on document type and case category. Oklahoma district courts accept cash, checks, and credit cards at most locations. Filing fees for new civil petitions typically range from $75 to $250 depending on case type and amount in controversy. For exact current fee schedules, reference the <a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST12" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Oklahoma Statutes Title 12</a>. We pay filing fees on your behalf and invoice you directly. See our <Link href="/pricing" className="text-blue-700 font-semibold hover:underline">pricing page</Link> for our service fees.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">04</div>
                <div className="bg-white rounded-xl p-6 flex-1 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Documents Are File-Stamped</h3>
                  <p className="text-gray-600">
                    Accepted documents receive a file stamp with the date, time, and clerk&apos;s initials or identifier. This stamp is the official proof of filing and establishes the filing date for all deadline purposes. If you are filing an answer or response against a deadline, the file stamp date is what counts — not the date you submitted to us or the date the clerk began reviewing the document.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">05</div>
                <div className="bg-white rounded-xl p-6 flex-1 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Conformed Copies Returned to You</h3>
                  <p className="text-gray-600">
                    You receive conformed copies (file-stamped copies) of all filed documents. These are your evidence of filing. For new cases, the clerk also issues a case number and assigns the matter to a judge or division. Our team delivers your file-stamped copies to your office the same day, along with complete chain of custody documentation. For cases requiring follow-up service on the defendant, we coordinate directly with our <Link href="/process-serving" className="text-blue-700 font-semibold hover:underline">process serving</Link> team.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">06</div>
                <div className="bg-white rounded-xl p-6 flex-1 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Issuance of Summons (For New Petitions)</h3>
                  <p className="text-gray-600">
                    When filing a new civil petition, the clerk issues a summons that must be served on each defendant. This is where our filing and process serving services integrate seamlessly — we file your petition, obtain the issued summons, and immediately schedule service under your chosen tier. See our <Link href="/rush-vs-standard-vs-same-day-service" className="text-blue-700 font-semibold hover:underline">Rush vs. Standard vs. Same-Day service comparison</Link> to choose the right speed for your case, or request <Link href="/same-day-process-server" className="text-blue-700 font-semibold hover:underline">same-day process serving</Link> for urgent matters. All service is <Link href="/gps-tracked-process-serving" className="text-blue-700 font-semibold hover:underline">GPS-tracked</Link> with a court-ready <Link href="/affidavit-of-service" className="text-blue-700 font-semibold hover:underline">affidavit of service</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services & Cross-References */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Legal Support Services</h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Courthouse filing is often one step in a larger legal process. Just Legal Solutions provides the full range of support services attorneys and legal departments need to manage Oklahoma litigation efficiently. For a complete reference, see our <Link href="/ultimate-guide-process-serving-oklahoma" className="text-blue-700 font-semibold hover:underline">Ultimate Guide to Process Serving in Oklahoma</Link>.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { title: 'Process Serving', desc: 'After filing, serve defendants and witnesses with the same team that handled your courthouse filing — seamless coordination from petition to proof of service.', href: '/process-serving' },
                { title: 'GPS-Tracked Service', desc: 'All process serving is GPS-verified with timestamped coordinates. For cases with anticipated service challenges, GPS documentation strengthens your affidavit.', href: '/gps-tracked-process-serving' },
                { title: 'Affidavit of Service', desc: 'Oklahoma-compliant affidavits of service prepared for every assignment — ready for filing with the court as soon as service is completed.', href: '/affidavit-of-service' },
                { title: 'Rush vs Standard vs Same-Day', desc: 'Compare our three service speed tiers. Rush and same-day dispatch available for time-sensitive matters and upcoming hearing dates.', href: '/rush-vs-standard-vs-same-day-service' },
                { title: 'Skip Tracing', desc: 'When defendants can\'t be located for service, our skip tracing service finds updated addresses, employers, and contact information across Oklahoma.', href: '/skip-tracing' },
                { title: 'Weekend & Emergency Service', desc: 'For genuine after-hours and weekend emergencies — protective orders, time-critical evictions, and court-ordered same-day service.', href: '/weekend-emergency' },
              ].map((service, i) => (
                <Link key={i} href={service.href} className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-6 transition-colors border border-gray-200 hover:border-blue-300">
                  <h3 className="font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </Link>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3">County-Specific Filing Information</h3>
                <p className="text-blue-800 text-sm mb-3">
                  Each Oklahoma county has specific filing procedures, fees, and local rules. We maintain current knowledge of requirements at every courthouse we serve.
                </p>
                <div className="space-y-2">
                  <Link href="/counties/tulsa-county" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium">
                    <ChevronRight className="w-3 h-3" />Tulsa County process serving &amp; filing guide
                  </Link>
                  <Link href="/counties/creek-county" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium">
                    <ChevronRight className="w-3 h-3" />Creek County process serving &amp; filing guide
                  </Link>
                  <Link href="/oklahoma-process-server-laws" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium">
                    <ChevronRight className="w-3 h-3" />Oklahoma process server laws overview
                  </Link>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">External Legal Authority Resources</h3>
                <p className="text-gray-600 text-sm mb-3">Key external resources for Oklahoma filing procedures and legal requirements.</p>
                <div className="space-y-2">
                  <a href="https://www.courts.ok.gov/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium">
                    <ChevronRight className="w-3 h-3" />Oklahoma Courts official website ↗
                  </a>
                  <a href="https://www.tulsacounty.org/Tulsa/County/Departments/Court+Clerk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium">
                    <ChevronRight className="w-3 h-3" />Tulsa County Court Clerk ↗
                  </a>
                  <a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium">
                    <ChevronRight className="w-3 h-3" />Oklahoma Statutes Title 12 ↗
                  </a>
                  <a href="https://www.okbar.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium">
                    <ChevronRight className="w-3 h-3" />Oklahoma Bar Association ↗
                  </a>
                  <a href="https://napps.org" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium">
                    <ChevronRight className="w-3 h-3" />NAPPS — Professional Process Servers ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-sm text-gray-500 italic border-t border-gray-200 pt-6">
              <strong>Legal Disclaimer:</strong> This information is for educational purposes only and does not constitute legal advice. For specific legal questions about your situation, consult a licensed Oklahoma attorney. Just Legal Solutions provides process serving and legal support services — we are not a law firm and do not provide legal counsel.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Outsource Your Courthouse Filings?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Free your legal staff from courthouse runs. Let Just Legal Solutions handle your filings with same-day capability and full chain of custody documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Request Filing Service
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
