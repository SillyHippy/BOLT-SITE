import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Shield, Scale, Clock, FileText, Building2, Target, Star, Users, AlertTriangle, MapPin, Zap, TrendingUp, Globe, Award, Briefcase, Gavel, BookOpen } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Process Serving for Insurance Companies Oklahoma',
  description: 'Dedicated process serving for Oklahoma insurance companies. Claims litigation, SIU support, subrogation, workers\' comp service, and high-volume statewide coverage.',
  keywords: 'process server for insurance companies, insurance litigation service Oklahoma, insurance claims process serving, SIU process server Oklahoma, subrogation service of process, workers compensation process serving',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Process Serving for Insurance Companies Oklahoma',
    description: 'High-volume process serving for Oklahoma insurance companies. Claims litigation, SIU, subrogation, and workers\' comp service with GPS verification.',
    url: 'https://justlegalsolutions.org/process-serving-for-insurance-companies',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630, alt: 'Process Serving for Insurance Companies Oklahoma' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Serving for Insurance Companies Oklahoma',
    description: 'Dedicated high-volume process serving for Oklahoma insurance companies — claims litigation, SIU support, and GPS-verified service.',
    images: ['https://justlegalsolutions.org/og-image.png'],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/process-serving-for-insurance-companies' },
  other: {
    'ai-content-type': 'service',
    'ai-summary': 'Process serving services specifically designed for insurance companies in Oklahoma, covering claims litigation, SIU investigations, subrogation, and workers compensation cases with GPS verification.',
    'ai-key-facts': 'Insurance litigation, SIU support, subrogation service, workers compensation, high-volume capability, statewide Oklahoma, GPS verification, account management',
  },
};

const faqs = [
  {
    question: "Why do insurance companies need specialized process serving?",
    answer: "Insurance companies handle a uniquely high volume of litigation matters simultaneously — from small claims subrogation cases to complex multi-party liability suits. A general process serving firm may not have the volume capacity, documentation standards, or statewide coverage needed to keep an insurance litigation docket moving. Just Legal Solutions specializes in high-volume accounts with dedicated account management, standardized reporting, and GPS-verified service that satisfies both court requirements and internal compliance audits.",
  },
  {
    question: "What types of insurance litigation cases do you handle process serving for?",
    answer: "We handle service of process for virtually all insurance litigation case types including: auto liability and uninsured/underinsured motorist claims, property damage litigation, personal injury defense, workers' compensation disputes, professional liability, subrogation recovery actions, fraud investigations requiring SIU witness service, interpleader actions, and garnishment/judgment enforcement in settled cases. Our team is experienced with the documentation standards expected by insurance carriers and their outside counsel.",
  },
  {
    question: "How does GPS verification help insurance companies specifically?",
    answer: "Insurance carriers are frequent targets of improper service claims because defendants in insurance litigation — particularly fraud defendants — are highly motivated to challenge service and delay proceedings. GPS verification creates objective, timestamped location data showing exactly where and when documents were served. This documentation substantially reduces the risk that a court will grant a motion to quash service, protecting the integrity of your litigation timeline and your subrogation or defense position.",
  },
  {
    question: "Can you handle high-volume service of process for insurance companies?",
    answer: "Yes. High-volume accounts are a core part of our business model. We have the capacity to process dozens of service assignments per week for a single insurance account, with standardized workflows that ensure consistent documentation, reporting, and turnaround times. For accounts with recurring or volume needs, we offer dedicated account management so you have a single point of contact who understands your internal protocols and can prioritize your assignments appropriately.",
  },
  {
    question: "Do you serve documents in workers' compensation matters?",
    answer: "Yes. Workers' compensation litigation in Oklahoma involves service on employers, injured workers, medical providers, and third parties depending on the stage of litigation. We handle service of process for workers' comp disputes at the Workers' Compensation Commission level as well as appeals to district court. Our familiarity with workers' comp procedure in Oklahoma ensures documents are served in a manner that satisfies both Commission rules and district court requirements.",
  },
  {
    question: "What does the reporting package look like for insurance company clients?",
    answer: "For insurance company accounts, our standard reporting package includes: sworn affidavit of service with complete service details, GPS coordinate data and timestamp at point of service, photograph documentation of the service location, all attempt logs (successful and unsuccessful), and a chain of custody record. We can customize reporting formats to match your internal claim management system requirements and provide batch reporting for multi-case invoicing. Contact us to discuss your specific documentation needs.",
  },
  {
    question: "What is subrogation and how does process serving support it?",
    answer: "Subrogation is the right of an insurance carrier to step into its insured's shoes and pursue recovery from the party responsible for the loss the carrier paid. Once a carrier pays a claim — for a car accident, property damage, or medical bill — it may have a subrogation right against the at-fault party. Pursuing that recovery requires litigation, which requires service of process on the defendant. Just Legal Solutions handles subrogation service efficiently, including service on individuals, businesses, and their insurers across Oklahoma.",
  },
  {
    question: "How do you handle service in insurance fraud and SIU investigations?",
    answer: "Special Investigations Unit (SIU) matters often require serving witnesses, co-conspirators, and claimants who are actively avoiding contact. Our team uses professional skip tracing, multiple timed service attempts, and GPS documentation to create a service record that holds up in court and before the Oklahoma Insurance Commissioner. SIU witness service requires both technical proficiency and professional discretion — we understand the sensitivity of fraud investigation matters.",
  },
  {
    question: "What is the statute of limitations for insurance bad faith claims in Oklahoma?",
    answer: "Under Oklahoma law, bad faith insurance claims are generally subject to a two-year statute of limitations. This means insurance carriers involved in bad faith litigation face strict timing requirements that make prompt, properly documented service of process critically important. Delays in service — or service that is later quashed — can compress your response timeline and create settlement pressure. Our priority processing options help insurance clients meet tight deadline requirements.",
  },
  {
    question: "Can you serve documents on out-of-state insurance defendants?",
    answer: "Yes. Oklahoma's long-arm statute (12 O.S. § 2004(F)) permits service on out-of-state defendants with connections to Oklahoma, including insurance companies doing business here. For corporate defendants, service is typically made on the registered agent in their state of incorporation or their Oklahoma registered agent. We coordinate with process server networks in all 50 states to handle multi-state insurance matters efficiently, with consistent documentation standards across all jurisdictions.",
  },
  {
    question: "How does proper service protect against insurance fraud defense arguments?",
    answer: "Fraud defendants are highly motivated to challenge every procedural aspect of a case, including claiming they were never properly served. GPS-verified service with photo documentation of the defendant's actual location at the time of service creates objective evidence that is extremely difficult to refute. Our sworn affidavits, timestamped GPS data, and attempt logs provide a complete chain of documentary evidence that protects your case from procedural attacks commonly used in insurance fraud defense.",
  },
  {
    question: "What turnaround times can insurance companies expect for service of process?",
    answer: "Standard service assignments are typically completed within 3-5 business days. Rush and same-day service is available for urgent litigation matters — including time-sensitive insurance defense filings, injunctions, and temporary restraining orders. For high-volume insurance accounts, we prioritize your assignments to minimize docket delays. Contact us to discuss specific turnaround requirements for your litigation matters.",
  },
  {
    question: "Do you provide consolidated invoicing for insurance company accounts?",
    answer: "Yes. Insurance company accounts can receive consolidated monthly invoicing covering all service assignments during the billing period, with individual matter references for cost allocation to specific claim files. We can provide invoice formats compatible with common legal billing systems. For large accounts with multiple practice groups or departments, we can structure billing by department or matter type. Contact us to set up your preferred billing arrangement.",
  },
  {
    question: "Are your process servers certified and bonded in Oklahoma?",
    answer: "Our process servers comply with Oklahoma certification requirements under the Oklahoma Process Server Licensing Act. Oklahoma requires process servers to be licensed through the Council on Law Enforcement Education and Training (CLEET). Our team maintains current licensing, bonding, and continuing education requirements, providing insurance companies with the confidence that their service of process meets all applicable Oklahoma standards and will withstand court scrutiny.",
  },
];

export default function ProcessServingForInsuranceCompanies() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema
          pageType="service"
          pageTitle="Process Serving for Insurance Companies Oklahoma"
          pageDescription="Dedicated process serving for Oklahoma insurance companies — claims litigation, SIU support, subrogation, workers' comp service, and high-volume statewide coverage."
          pageUrl="https://justlegalsolutions.org/process-serving-for-insurance-companies"
          siteName="Just Legal Solutions"
          reviewCount={156}
          services={['Process Serving for Insurance Companies', 'Insurance Litigation Service', 'SIU Process Serving', 'Subrogation Service']}
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'Process Serving for Insurance Companies', url: '/process-serving-for-insurance-companies' },
          ]}
          faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
          keywords={['process server for insurance companies', 'insurance litigation service Oklahoma', 'SIU process server', 'subrogation service of process']}
        />

        <LocalPromoBanner zips={[]} />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-blue-200 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Process Serving for Insurance Companies</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="w-6 h-6 text-orange-400" />
                <span className="text-orange-300 font-semibold uppercase tracking-wide text-sm">B2B Insurance Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Process Serving for Insurance Companies in Oklahoma</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                High-volume, GPS-verified process serving built for insurance carriers, third-party administrators, and insurance defense law firms operating across Oklahoma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Set Up Your Account
                </Link>
                <Link href="/pricing" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Insurance Companies Need This */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Insurance Companies Need Reliable Process Serving</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  Insurance litigation moves fast. Subrogation windows close. Statute of limitations deadlines are unforgiving. Defense timelines are rigid. When service of process fails — or is successfully challenged — the consequences extend far beyond a single case. They can compromise recovery amounts, trigger bad faith exposure, and create cascading delays across an entire litigation portfolio.
                </p>
                <p className="text-gray-700 mb-4">
                  For insurance companies, the volume and geographic spread of litigation matters creates a unique operational challenge. A carrier handling claims across all 77 Oklahoma counties needs a process serving partner with genuine statewide capability — not a Tulsa-based firm that sub-contracts rural service to unreliable third parties.
                </p>
                <p className="text-gray-700">
                  Just Legal Solutions was built for exactly this type of account. Our GPS-verified service, comprehensive documentation standards, and dedicated account management model are designed to meet the compliance and reporting requirements of insurance carriers and their legal teams.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Clock, title: 'Time-Critical Subrogation Windows', desc: 'Subrogation recovery rights have strict timelines. Missed service windows mean missed recovery opportunities — a direct financial impact on your claims portfolio.' },
                  { icon: Shield, title: 'Defense Against Service Challenges', desc: 'Fraud defendants and liability targets are highly motivated to challenge service and delay proceedings. GPS documentation closes that evidentiary gap.' },
                  { icon: Building2, title: 'Multi-County Litigation Coordination', desc: 'Oklahoma insurance litigation spans 77 counties. You need a process serving partner with genuine statewide capability and consistent standards.' },
                  { icon: FileText, title: 'Compliance-Ready Documentation', desc: 'Internal audit requirements, outside counsel protocols, and court standards all require specific documentation. We build that into every assignment.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Insurance Litigation Requires Specialized Process Serving */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Insurance Litigation Requires Specialized Process Serving</h2>
            <div className="bg-white rounded-xl shadow-sm p-8 border border-blue-100 space-y-8">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">SIU Investigations &amp; Fraud Defense</h3>
                  <p className="text-gray-700">
                    Special Investigations Unit (SIU) matters demand a higher level of process serving expertise than standard civil litigation. Witnesses in fraud investigations are often actively avoiding contact, and improper or unverified service can collapse a complex fraud case before it reaches trial. Our <Link href="/gps-tracked-process-serving" className="text-blue-600 hover:text-blue-800 underline">GPS-verified documentation</Link> and <Link href="/skip-tracing" className="text-blue-600 hover:text-blue-800 underline">skip tracing capabilities</Link> are purpose-built for the demands of insurance fraud investigation and defendant location work. The <a href="https://napps.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">National Association of Professional Process Servers (NAPPS)</a> recognizes GPS-verified documentation as best practice in complex litigation service.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bad Faith Defense Timelines</h3>
                  <p className="text-gray-700">
                    Insurance bad faith litigation in Oklahoma operates under strict statutory timelines. Under <a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST12" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Oklahoma Statutes Title 12</a>, carriers face a two-year statute of limitations on bad faith claims &mdash; and any delay caused by a motion to quash service compresses the response window and creates settlement pressure at unfavorable terms. <Link href="/rush-vs-standard-vs-same-day-service" className="text-blue-600 hover:text-blue-800 underline">Rush and priority service options</Link> are available for time-sensitive bad faith defense matters, and our <Link href="/affidavit-of-service" className="text-blue-600 hover:text-blue-800 underline">court-ready affidavits of service</Link> are returned within 24 hours of completion. The <a href="https://www.okbar.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Oklahoma Bar Association</a> can provide referrals to qualified insurance defense counsel for complex bad faith matters.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Coverage Dispute Urgency</h3>
                  <p className="text-gray-700">
                    Coverage dispute litigation &mdash; including declaratory judgment actions to determine policy obligations &mdash; frequently involves urgent service requirements. The <a href="https://www.courts.ok.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Oklahoma Courts</a> require timely, properly documented service for all civil actions. Our <Link href="/courthouse-filing-services" className="text-blue-600 hover:text-blue-800 underline">courthouse filing services</Link> can coordinate same-day document delivery alongside service of process, and our <Link href="/same-day-process-server" className="text-blue-600 hover:text-blue-800 underline">same-day process server</Link> capability handles emergency coverage dispute filings. For a complete overview of Oklahoma service requirements, see our <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:text-blue-800 underline">Oklahoma process server laws guide</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Insurance Case Types We Serve</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              From routine auto claims litigation to complex fraud investigations, Just Legal Solutions handles the full spectrum of insurance-related process serving.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Claims Litigation',
                  items: ['Auto liability defense', 'Property damage claims', 'Personal injury defense', 'Uninsured/underinsured motorist', 'Commercial liability matters'],
                },
                {
                  title: 'SIU — Special Investigations Unit',
                  items: ['Fraud witness service', 'EUO (examination under oath) notice delivery', 'Expert witness subpoenas', 'Document subpoenas in fraud cases', 'Multi-party fraud scheme service'],
                },
                {
                  title: 'Subrogation Recovery',
                  items: ['Third-party tortfeasor service', 'Manufacturer & product liability service', 'Multi-defendant subrogation', 'Cross-claim service', 'Interpleader actions'],
                },
                {
                  title: "Workers' Compensation",
                  items: ['Injured worker service of process', 'Employer respondent service', 'Medical provider subpoenas', 'Commission proceeding notices', 'District court appeal service'],
                },
              ].map((category, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg border-b border-gray-100 pb-3">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GPS Verification for Insurance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">GPS Verification for Insurance Defense</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-10 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Why GPS Matters in Insurance Litigation</h3>
              <p className="text-blue-800">
                Insurance fraud defendants and liability targets are among the most motivated defendants in Oklahoma civil litigation when it comes to challenging service of process. A bare affidavit is significantly more vulnerable to a sworn denial than GPS-corroborated proof of service with timestamped coordinates and photographic documentation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: MapPin, title: 'Timestamped Location Data', desc: 'Every service attempt captures precise GPS coordinates and an encrypted timestamp, creating an objective record that corroborates the process server\'s affidavit.' },
                { icon: Shield, title: 'Photo Documentation', desc: 'Photographic evidence of the service location and environment ties the GPS data to a specific, identifiable place — critical when defendants claim a wrong address.' },
                { icon: Scale, title: 'Court-Admissible Evidence', desc: 'GPS data is admissible in Oklahoma courts as corroborating evidence alongside the affidavit, making motions to quash substantially harder for defendants to sustain.' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/gps-tracked-process-serving" className="text-blue-600 hover:text-blue-800 font-medium underline">
                Learn more about GPS-tracked process serving →
              </Link>
            </div>
          </div>
        </section>

        {/* Account Management */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Dedicated Account Management for Insurance Clients</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {[
                  { icon: Users, title: 'Single Point of Contact', desc: 'Your account is assigned to a dedicated account manager who understands your internal protocols, priority levels, and reporting requirements.' },
                  { icon: FileText, title: 'Customized Reporting', desc: 'We generate reports in formats compatible with your claim management system. Batch invoicing, status updates, and completion confirmations formatted to your specifications.' },
                  { icon: Zap, title: 'Priority Processing', desc: 'Insurance account assignments are flagged for priority handling. Time-sensitive subrogation filings and SIU witness service receive expedited scheduling.' },
                  { icon: Target, title: 'Statewide Coordination', desc: 'Multi-county and multi-defendant cases are coordinated from a single account — one contact managing service across all 77 Oklahoma counties.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">What Insurance Clients Receive</h3>
                <ul className="space-y-3">
                  {[
                    'Dedicated account manager for your organization',
                    'GPS-verified service with photo documentation on every assignment',
                    'Sworn affidavit of service within 24 hours of completion',
                    'All attempt logs for due diligence documentation',
                    'Batch reporting and consolidated invoicing',
                    'Priority scheduling for SIU and time-critical matters',
                    'Statewide Oklahoma coverage with consistent documentation standards',
                    'Skip tracing for hard-to-locate defendants and witnesses',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link href="/pricing" className="text-blue-600 hover:text-blue-800 font-medium text-sm underline">
                    View volume pricing for insurance accounts →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Statewide Oklahoma Coverage</h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Insurance litigation doesn&apos;t stay within county lines. Our statewide Oklahoma process serving network ensures consistent documentation and turnaround times whether your matter is in Tulsa County or the Oklahoma panhandle.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-800 mb-4">Primary Coverage Areas</h3>
                <ul className="space-y-2">
                  {['Tulsa County & Tulsa metro', 'Creek County (Sapulpa)', 'Wagoner County', 'Rogers County (Claremore)', 'Osage County', 'Okmulgee County', 'Pawnee County', 'Mayes County'].map((c, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-4">Extended Statewide Service</h3>
                <ul className="space-y-2">
                  {['Oklahoma City metro', 'Cleveland County (Norman)', 'Canadian County (Yukon/Mustang)', 'Comanche County (Lawton)', 'Logan County (Guthrie)', 'Payne County (Stillwater)', 'All 77 Oklahoma counties upon request'].map((c, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/service-areas" className="text-blue-600 hover:text-blue-800 font-medium underline">
                View complete service areas →
              </Link>
            </div>
          </div>
        </section>

        {/* Types of Insurance Litigation We Support */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Types of Insurance Litigation We Support</h2>
            <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
              Our process servers handle the full spectrum of insurance litigation matters across Oklahoma, from routine subrogation filings to complex multi-party defense cases.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <Shield className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Auto &amp; Vehicle Claims</h3>
                <p className="text-gray-700 text-sm">
                  Service of process for bodily injury liability, property damage, and uninsured/underinsured motorist claims. We serve defendants, witnesses, and third-party claimants across Oklahoma&apos;s busiest jurisdictions.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <FileText className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Workers&apos; Compensation</h3>
                <p className="text-gray-700 text-sm">
                  Employer disputes, third-party liability actions, and medical provider service in workers&apos; comp matters. We handle service at both the Workers&apos; Compensation Commission and district court levels.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <Building2 className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Homeowners &amp; Property Damage</h3>
                <p className="text-gray-700 text-sm">
                  Fire, wind, hail, and water damage litigation service. We also handle contractor disputes and service on construction-related defendants in property damage subrogation cases.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <Users className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Health &amp; Medical Malpractice</h3>
                <p className="text-gray-700 text-sm">
                  Provider disputes, coverage denial litigation, and subrogation against negligent parties in medical malpractice matters. Timely service is critical in these time-sensitive cases.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <Star className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Life Insurance Disputes</h3>
                <p className="text-gray-700 text-sm">
                  Beneficiary contests, policy rescission actions, and interpleader filings. These sensitive matters require professional, discreet service with thorough documentation.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <Target className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Subrogation Recovery</h3>
                <p className="text-gray-700 text-sm">
                  Service on at-fault parties and their insurers to recover paid claims. We handle high-volume subrogation service across Oklahoma with the speed and documentation carriers require.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Regulatory Considerations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Compliance &amp; Regulatory Considerations</h2>
            <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
              Insurance litigation in Oklahoma operates under strict regulatory oversight. Proper service of process is not just a procedural formality &mdash; it&apos;s a compliance requirement.
            </p>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-start gap-4">
                  <Gavel className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Oklahoma Insurance Commissioner Oversight</h3>
                    <p className="text-gray-700">
                      Insurance companies operating in Oklahoma are subject to oversight by the Oklahoma Insurance Commissioner. Litigation involving insurance carriers &mdash; whether as plaintiff or defendant &mdash; receives heightened scrutiny from the courts. Proper service of process is the foundation of valid jurisdiction, and any deficiency can undermine the carrier&apos;s legal position or create grounds for sanctions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Bad Faith Claims &amp; Defective Service</h3>
                    <p className="text-gray-700">
                      In insurance bad faith litigation, defective service can expose the carrier to additional damages and significantly delay resolution. Under Oklahoma bad faith law, carriers face a two-year statute of limitations, making prompt and properly documented service critically important. Any delay caused by a motion to quash service compresses your response timeline and can create settlement pressure at unfavorable terms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Certified Process Servers &amp; Court Scrutiny</h3>
                    <p className="text-gray-700">
                      Oklahoma-certified process servers provide an additional layer of credibility that holds up under court scrutiny. Our servers maintain current CLEET licensing, carry proper bonding, and follow documented service protocols. Every service attempt is logged with GPS coordinates and timestamps, creating an evidentiary record that withstands challenges from opposing counsel.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <p className="text-gray-800 font-medium">
                  In insurance bad faith litigation, a motion to quash service can cost weeks of delay and create settlement pressure. GPS-verified, certified service eliminates this vulnerability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-State Insurance Service Coordination */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Multi-State Insurance Service Coordination</h2>
            <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
              Insurance cases frequently involve parties outside Oklahoma. We coordinate seamless service across state lines through professional networks and established legal procedures.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <Globe className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Out-of-State Party Service</h3>
                <p className="text-gray-700 mb-4">
                  Insurance cases often involve claimants who have relocated, corporate defendants registered in other states, or witnesses scattered across state lines. We coordinate with professional process server networks in all 50 states to ensure consistent documentation standards regardless of where service occurs.
                </p>
                <ul className="space-y-2">
                  {['Claimants who moved after filing', 'Corporate defendants in other states', 'Out-of-state witnesses and experts', 'Multi-state accident litigation'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <Scale className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Long-Arm Statute &amp; Registered Agent Service</h3>
                <p className="text-gray-700 mb-4">
                  Oklahoma&apos;s long-arm statute (12 O.S. &sect; 2004(F)) permits service on out-of-state defendants with connections to Oklahoma, including insurance companies conducting business in the state. We handle service on insurance company registered agents in Oklahoma as well as coordinating with out-of-state registered agent services for corporate defendants.
                </p>
                <ul className="space-y-2">
                  {['Long-arm statute service under 12 O.S. § 2004(F)', 'Oklahoma registered agent service', 'Address location for relocated claimants', 'Coordination with nationwide server networks'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Volume Discount Programs for Insurance Firms */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Volume Discount Programs for Insurance Firms</h2>
            <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
              High-volume insurance clients benefit from dedicated resources, priority scheduling, and streamlined billing designed for enterprise-level litigation support.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Users className="w-8 h-8 text-blue-600" />, title: 'Dedicated Account Manager', desc: 'A single point of contact who learns your internal protocols, preferred service methods, and reporting requirements.' },
                { icon: <Briefcase className="w-8 h-8 text-blue-600" />, title: 'Batch Submission Portal', desc: 'Submit multiple service assignments simultaneously through our portal, eliminating the need for individual case-by-case requests.' },
                { icon: <Zap className="w-8 h-8 text-blue-600" />, title: 'Priority Scheduling', desc: 'High-volume account assignments receive priority scheduling over standard single-case requests, minimizing docket delays.' },
                { icon: <TrendingUp className="w-8 h-8 text-blue-600" />, title: 'Consolidated Monthly Billing', desc: 'Simplified accounting with consolidated monthly invoices covering all service assignments, with individual matter references for cost allocation.' },
                { icon: <Clock className="w-8 h-8 text-blue-600" />, title: 'Real-Time Status Updates', desc: 'Track all active service assignments through portal access with real-time status updates, attempt logs, and completion notifications.' },
                { icon: <FileText className="w-8 h-8 text-blue-600" />, title: 'Customized Affidavit Formats', desc: 'Affidavit and reporting formats tailored to match your claim management system for seamless integration with your existing workflows.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/contact" className="text-blue-600 hover:underline font-medium">
                Contact us to set up your volume account →
              </Link>
            </div>
          </div>
        </section>

        {/* Client Success Story */}
        <section className="py-12 bg-orange-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white border-l-4 border-orange-500 rounded-r-xl shadow-sm p-8">
              <div className="flex items-start gap-4">
                <Star className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Client Success: Statewide Subrogation Service</h2>
                  <p className="text-gray-700 mb-4">
                    When a Tulsa insurance carrier needed service on 12 claimants across 5 Oklahoma counties for a subrogation case, our <Link href="/gps-tracked-process-serving" className="text-blue-600 hover:text-blue-800 underline">GPS-verified process servers</Link> completed all 12 serves within 8 business days with a 100% success rate, providing court-ready <Link href="/affidavit-of-service" className="text-blue-600 hover:text-blue-800 underline">affidavits of service</Link> for each. See our <Link href="/blog/how-to-serve-a-subpoena-oklahoma" className="text-blue-600 hover:text-blue-800 underline">subpoena service guide</Link> for more on multi-party service strategy.
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-800">12 of 12 serves completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-800">5 Oklahoma counties covered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-800">8 business days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-800">100% success rate</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic mt-4">Details generalized for client confidentiality.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Case Study: How Proper Service Saved an Insurance Defense</h2>
            <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
              GPS-verified service creates an objective record that protects insurance defense cases from procedural attacks.
            </p>
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    A large auto insurer&apos;s defense team was defending a bodily injury claim in Tulsa County. After initial pleadings were filed, the plaintiff&apos;s attorney filed a motion to dismiss alleging that the defendant driver had never been properly served with the original petition.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Just Legal Solutions had served the defendant with GPS coordinates, timestamped photos, and a detailed sworn affidavit documenting the service. The GPS data placed the process server at the defendant&apos;s residence at 7:14 PM on the date of service &mdash; directly contradicting the defendant&apos;s claim of non-service.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Gavel className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    The court reviewed the GPS evidence, timestamped photographs, and the process server&apos;s sworn affidavit. The motion to dismiss was denied, and the case proceeded on its merits &mdash; preserving the insurer&apos;s defense position and avoiding the cost and delay of re-service.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6 rounded-r-lg">
                <p className="text-gray-700 text-sm italic">
                  This scenario is illustrative of how GPS-verified service protects insurance defense cases from procedural attacks. Actual case details have been generalized for confidentiality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources for Insurance Litigation Teams */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resources for Insurance Litigation Teams</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Service Options &amp; Guides</h3>
                <ul className="space-y-3">
                  <li><Link href="/gps-tracked-process-serving" className="text-blue-600 hover:text-blue-800 underline text-sm">GPS-Tracked Process Serving — How It Works</Link></li>
                  <li><Link href="/rush-vs-standard-vs-same-day-service" className="text-blue-600 hover:text-blue-800 underline text-sm">Rush vs. Standard vs. Same-Day Service Options</Link></li>
                  <li><Link href="/same-day-process-server" className="text-blue-600 hover:text-blue-800 underline text-sm">Same-Day Process Server for Urgent Matters</Link></li>
                  <li><Link href="/affidavit-of-service" className="text-blue-600 hover:text-blue-800 underline text-sm">Affidavit of Service — Documentation Standards</Link></li>
                  <li><Link href="/courthouse-filing-services" className="text-blue-600 hover:text-blue-800 underline text-sm">Courthouse Filing Services</Link></li>
                  <li><Link href="/skip-tracing" className="text-blue-600 hover:text-blue-800 underline text-sm">Skip Tracing for Defendants &amp; Witnesses</Link></li>
                  <li><Link href="/what-happens-if-someone-refuses-service" className="text-blue-600 hover:text-blue-800 underline text-sm">What Happens If Someone Refuses Service</Link></li>
                  <li><Link href="/pricing" className="text-blue-600 hover:text-blue-800 underline text-sm">Pricing &amp; Volume Discounts for Insurance Accounts</Link></li>
                  <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:text-blue-800 underline text-sm">Oklahoma Process Server Laws &amp; Requirements</Link></li>
                  <li><Link href="/ultimate-guide-process-serving-oklahoma" className="text-blue-600 hover:text-blue-800 underline text-sm">Ultimate Guide to Process Serving in Oklahoma</Link></li>
                  <li><Link href="/blog/how-to-serve-a-subpoena-oklahoma" className="text-blue-600 hover:text-blue-800 underline text-sm">How to Serve a Subpoena in Oklahoma (Blog)</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Related B2B Services</h3>
                <ul className="space-y-3">
                  <li><Link href="/process-serving-for-property-managers" className="text-blue-600 hover:text-blue-800 underline text-sm">Process Serving for Property Managers</Link></li>
                  <li><Link href="/process-serving-for-debt-collection" className="text-blue-600 hover:text-blue-800 underline text-sm">Process Serving for Debt Collection Agencies</Link></li>
                </ul>
                <h3 className="text-lg font-bold text-gray-800 mb-4 mt-6">External Authority Resources</h3>
                <ul className="space-y-3">
                  <li><a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST12" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm">Oklahoma Statutes Title 12 (OSCN)</a></li>
                  <li><a href="https://www.courts.ok.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm">Oklahoma Courts — Official Site</a></li>
                  <li><a href="https://napps.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm">NAPPS — National Association of Professional Process Servers</a></li>
                  <li><a href="https://www.okbar.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm">Oklahoma Bar Association</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {/* Legal Disclaimer */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-sm text-gray-500 italic border-t border-gray-200 pt-6">
              <strong>Legal Disclaimer:</strong> This information is for educational purposes only and does not constitute legal advice. For specific legal questions about your situation, consult a licensed Oklahoma attorney. Just Legal Solutions provides process serving and legal support services  we are not a law firm and do not provide legal counsel.
            </p>
          </div>
        </section>

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
            <h2 className="text-3xl font-bold mb-6">Partner with Just Legal Solutions for Your Insurance Litigation</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Set up a dedicated insurance account today and get GPS-verified, compliance-ready process serving across all 77 Oklahoma counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Set Up Your Account
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                View Volume Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
