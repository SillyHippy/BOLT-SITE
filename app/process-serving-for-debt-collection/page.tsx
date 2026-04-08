import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Shield, Scale, Clock, FileText, Target, Users, MapPin, Zap, AlertTriangle, Building2, Star, DollarSign, TrendingUp, BookOpen, Gavel, Award, Globe, BarChart3, Briefcase } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Process Serving for Debt Collection Agencies Oklahoma',
  description: 'High-volume process serving for Oklahoma debt collection agencies. Collection lawsuit service, skip tracing, FDCPA-compliant documentation, GPS-verified service statewide.',
  keywords: 'process server for debt collection, debt collection process serving Oklahoma, collection lawsuit service, FDCPA process serving, high volume process server Oklahoma, debt collection skip tracing',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Process Serving for Debt Collection Agencies Oklahoma',
    description: 'High-volume collection lawsuit service, skip tracing, and FDCPA-compliant documentation for Oklahoma debt collection agencies.',
    url: 'https://justlegalsolutions.org/process-serving-for-debt-collection',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630, alt: 'Process Serving for Debt Collection Agencies Oklahoma' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Serving for Debt Collection Agencies Oklahoma',
    description: 'High-volume collection lawsuit service with skip tracing and GPS-verified documentation for Oklahoma debt collection agencies.',
    images: ['https://justlegalsolutions.org/og-image.png'],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/process-serving-for-debt-collection' },
  other: {
    'ai-content-type': 'service',
    'ai-summary': 'Process serving for Oklahoma debt collection agencies covering collection lawsuits, skip tracing for hard-to-locate debtors, FDCPA compliance documentation, and high-volume account management.',
    'ai-key-facts': 'Debt collection litigation, skip tracing, FDCPA compliance, multiple service attempts, GPS verification, high-volume capability, statewide Oklahoma, affidavit of service',
  },
};

const faqs = [
  {
    question: "How does your service help debt collection agencies keep their litigation moving?",
    answer: "The single biggest bottleneck in collection litigation is service of process. When a debtor is hard to locate, when service is improperly documented, or when a process server can't handle the volume your docket requires, cases stall and your recovery timeline stretches. Just Legal Solutions provides high-volume service capacity, skip tracing for hard-to-locate debtors, GPS-verified documentation that protects against default judgment challenges, and a dedicated account management model that keeps your entire docket visible and moving.",
  },
  {
    question: "What FDCPA documentation requirements apply to process serving?",
    answer: "The Fair Debt Collection Practices Act (FDCPA) imposes strict requirements on debt collectors regarding communication, timing, and documentation. While the FDCPA itself does not directly regulate process servers, collection agencies must maintain documentation that demonstrates their service of process activities are lawful and accurate — particularly given the risk of 'sewer service' litigation, where debtors claim they were never served. GPS-verified, photo-documented service with sworn affidavits provides the compliance-ready documentation chain that protects your agency against FDCPA exposure related to improper service claims.",
  },
  {
    question: "Do you offer skip tracing services for debtors who can't be located for service?",
    answer: "Yes. Skip tracing is a core capability at Just Legal Solutions. When a debtor cannot be located at the address in your file, we can conduct skip tracing to identify current addresses, workplace information, and other location data before attempting re-service. Our skip tracing combines database searches, public record analysis, and investigative techniques to locate hard-to-find individuals across Oklahoma. Visit our skip tracing page for more details on our locate capabilities.",
  },
  {
    question: "Can you handle high-volume collection lawsuit service for our agency?",
    answer: "Absolutely. High-volume collection accounts are a specialty. Debt collection agencies filing dozens to hundreds of lawsuits per month can establish a dedicated account with Just Legal Solutions. We have the process server capacity, workflow infrastructure, and reporting systems to handle large dockets consistently. Volume accounts receive dedicated account management, priority scheduling, batch submission capability, and consolidated invoicing — all designed to minimize the administrative burden on your collections team.",
  },
  {
    question: "What happens when service cannot be accomplished at the debtor's address?",
    answer: "When personal service is not possible after diligent attempts, we document each attempt with GPS coordinates, timestamps, and notes. This due diligence documentation is essential when filing for alternative service (such as service by publication or alias and pluries summons). We can conduct skip tracing to identify alternate addresses or workplace locations for subsequent service attempts, and our attempt logs provide the court-ready documentation needed to support your motion for alternative service.",
  },
  {
    question: "What does your affidavit of service include for collection cases?",
    answer: "Our affidavit of service for collection litigation includes: the full name and description of the individual served (or the basis for substitute or posted service), the specific documents delivered, the date, time, and location of service, the method of service used, GPS coordinates confirming the server's location at time of service, and the process server's certification under oath. We can customize affidavit formats to match court requirements in specific Oklahoma districts and can provide batch affidavit delivery for multi-case accounts.",
  },
  {
    question: "What is the statute of limitations for debt collection lawsuits in Oklahoma?",
    answer: "Oklahoma statute of limitations for debt collection varies by debt type: written contracts are generally subject to a 5-year limitation period, oral contracts carry a 3-year limitation, and promissory notes may have up to a 6-year period under 12A O.S. \u00A7 3-118. These windows begin running from the date of default or last payment. Filing a lawsuit within the limitations period is only the first step \u2014 the debtor must also be properly served to stop the clock. Delayed or defective service can create arguments that the action is time-barred.",
  },
  {
    question: "How does skip tracing work with your process serving service?",
    answer: "When a debtor cannot be located at the address in your file, we initiate skip tracing to identify a current address before attempting service. Our skip tracing combines database searches, public records analysis, and investigative techniques. Once a current address is identified, we proceed directly to service \u2014 eliminating the gap between locate and serve that costs time with separate vendors. Visit our skip tracing page for more information on our locate capabilities.",
  },
  {
    question: "Do you handle garnishment summons service after a judgment is obtained?",
    answer: "Yes. Post-judgment collection involves service of process at every stage \u2014 wage garnishment summons served on employers, bank garnishment summons served on financial institutions, and execution writs for property seizure. These documents have the same strict service requirements as initial collection lawsuit summons. Just Legal Solutions handles service at every stage of the collection lifecycle, from initial complaint through final judgment enforcement.",
  },
  {
    question: "What is 'sewer service' and how does your GPS verification prevent it?",
    answer: "Sewer service is the illegal practice of a process server claiming to have served documents that were never actually delivered \u2014 effectively throwing them in the sewer. It is a serious problem in debt collection that leads to default judgments against debtors who had no notice of the lawsuit, FDCPA liability for the collection agency, and sanctions for the process server. GPS-verified service with timestamped coordinates and photo documentation proves the documents were actually delivered, protecting your agency from sewer service allegations.",
  },
  {
    question: "How do you handle service when a debtor lives in a gated community or secure building?",
    answer: "Gated communities, apartment complexes with security, and secure office buildings present challenges for service of process. Our process servers are trained to use lawful methods to access these locations: contacting building management, using intercom systems, coordinating with HOA security, and making multiple timed attempts to catch the defendant in accessible common areas. When access cannot be gained after diligent attempts, we document our efforts thoroughly to support a motion for alternative service.",
  },
  {
    question: "Can you serve defendants at their place of employment for collection cases?",
    answer: "Yes. Workplace service is generally permissible under Oklahoma law when the defendant cannot be served at their residence. Our process servers conduct workplace service professionally and discreetly, minimizing disruption to the defendant\u2019s work environment. We do not announce the nature of the documents to coworkers or supervisors beyond what is legally required for delivery. This approach complies with FDCPA best practices regarding debtor dignity while accomplishing lawful service.",
  },
  {
    question: "What records do you maintain for collection agency compliance audits?",
    answer: "We maintain complete service records for all assignments, including: the original service request, all attempt logs with GPS coordinates and timestamps, the affidavit of service or non-service, any skip tracing documentation, and communication records. These records are available for compliance audit purposes and can be provided in organized, auditable formats. High-volume collection agency accounts receive consolidated record packages that simplify internal compliance reviews.",
  },
];

export default function ProcessServingForDebtCollection() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema
          pageType="service"
          pageTitle="Process Serving for Debt Collection Agencies Oklahoma"
          pageDescription="High-volume process serving for Oklahoma debt collection agencies — collection lawsuit service, skip tracing, FDCPA-compliant documentation, and GPS-verified statewide coverage."
          pageUrl="https://justlegalsolutions.org/process-serving-for-debt-collection"
          siteName="Just Legal Solutions"
          reviewCount={156}
          services={['Process Serving for Debt Collection', 'Collection Lawsuit Service', 'Skip Tracing', 'Affidavit of Service']}
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'Process Serving for Debt Collection', url: '/process-serving-for-debt-collection' },
          ]}
          faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
          keywords={['process server for debt collection', 'debt collection process serving Oklahoma', 'collection lawsuit service', 'FDCPA process serving']}
        />

        <LocalPromoBanner zips={[]} />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-blue-200 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Process Serving for Debt Collection</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <DollarSign className="w-6 h-6 text-orange-400" />
                <span className="text-orange-300 font-semibold uppercase tracking-wide text-sm">Debt Collection Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Process Serving for Debt Collection Agencies in Oklahoma</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                High-volume collection lawsuit service, skip tracing for hard-to-find debtors, and GPS-verified documentation that protects your default judgments — statewide across Oklahoma.
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

        {/* Why Debt Collection Needs Specialized Service */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Debt Collection Litigation Requires Specialized Process Serving</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  Collection litigation is fundamentally different from other civil litigation. It&apos;s driven by volume, speed, and tight documentation standards. A process serving firm that works well for a small law firm handling occasional matters is often completely overwhelmed by the pace and scale of collection docket management.
                </p>
                <p className="text-gray-700 mb-4">
                  Debt collection agencies and their counsel face unique process serving challenges: debtors who have moved since the debt was incurred, addresses that have gone stale in credit bureau files, debtors actively avoiding service, and the constant pressure to move cases from filing to judgment quickly before the statute of limitations creates new exposure.
                </p>
                <p className="text-gray-700 mb-4">
                  Add to this the heightened scrutiny that debt collection litigation receives from courts — and the significant FDCPA liability risk associated with improper service documentation — and it becomes clear that collection agencies need a process serving partner with specific experience, capacity, and compliance orientation.
                </p>
                <p className="text-gray-700">
                  Just Legal Solutions has built the infrastructure to serve collection agencies at scale: GPS-verified service, integrated skip tracing capability, high-volume account management, and documentation standards designed to protect your judgments and your agency&apos;s compliance posture.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Zap, title: 'Volume Capacity', desc: 'Handle dozens to hundreds of service assignments per month under a single account with consistent documentation and turnaround times.' },
                  { icon: Target, title: 'Skip Tracing Integration', desc: 'When a debtor\'s address has gone stale, our skip tracing capability locates current addresses before re-service — keeping your docket moving.' },
                  { icon: Shield, title: 'GPS-Verified Documentation', desc: 'Timestamped location data and photo documentation protect your default judgments against post-judgment challenges to service validity.' },
                  { icon: FileText, title: 'FDCPA-Aligned Records', desc: 'Comprehensive service documentation that supports your agency\'s compliance obligations and protects against improper service claims.' },
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

        {/* Collection Lawsuit Service */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Collection Lawsuit Service of Process</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              From initial summons service to post-judgment enforcement, we handle every service of process need in the collection litigation lifecycle.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FileText,
                  title: 'Summons & Petition Service',
                  desc: 'Service of the initial collection lawsuit summons and petition on debtors across Oklahoma. Personal service wherever possible, with documented substitute service where permitted by law.',
                },
                {
                  icon: Scale,
                  title: 'Garnishment Notices',
                  desc: 'Post-judgment garnishment notices served on employers and financial institutions. Proper service of garnishment documents is essential to collecting on your judgments.',
                },
                {
                  icon: Building2,
                  title: 'Writ of Execution Service',
                  desc: 'Service related to writs of execution for post-judgment levy on assets. We work with attorneys to coordinate proper service in the execution process.',
                },
                {
                  icon: Users,
                  title: 'Third-Party Defendant Service',
                  desc: 'Multi-party collection cases involving co-signers, guarantors, or third-party defendants require coordinated service. We handle all parties simultaneously.',
                },
                {
                  icon: Clock,
                  title: 'Alias & Pluries Summons',
                  desc: 'When initial service fails and an alias or pluries summons is issued, we execute re-service immediately with updated address information from skip tracing if needed.',
                },
                {
                  icon: Target,
                  title: 'Deposition & Discovery Subpoenas',
                  desc: 'Subpoenas to debtors, witnesses, and third-party record custodians in collection litigation — served with the same GPS-verified documentation as any service assignment.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skip Tracing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Skip Tracing for Debt Collection</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  One of the most significant service failures in collection litigation is attempting service at an address that&apos;s months or years out of date. Consumer debt data can lag significantly behind actual debtor location — and in the time between account origination and lawsuit filing, debtors move, change jobs, and otherwise go off the map.
                </p>
                <p className="text-gray-700 mb-4">
                  Just Legal Solutions integrates skip tracing directly into the collection litigation service workflow. When initial service fails because the debtor is no longer at the address in your file, we can immediately pivot to a skip trace to identify current address, workplace, and other location information before re-attempting service.
                </p>
                <p className="text-gray-700">
                  Our skip tracing capability uses public record databases, proprietary data sources, and investigative analysis to locate debtors across Oklahoma and, in many cases, across state lines when your debtor has relocated out of Oklahoma.
                </p>
                <div className="mt-6">
                  <Link href="/skip-tracing" className="text-blue-600 hover:text-blue-800 font-medium underline">
                    Learn more about our skip tracing services →
                  </Link>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-bold text-gray-800 mb-6 text-lg">Skip Tracing Sources We Use</h3>
                <ul className="space-y-3">
                  {[
                    'Public records and court filing databases',
                    'Property ownership and assessment records',
                    'Voter registration records',
                    'Business registration and licensing databases',
                    'Professional license records',
                    'Social media and public online presence',
                    'DMV and vehicle registration (where legally accessible)',
                    'Utility connection records (where available)',
                    'Employment and professional directory data',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FDCPA Compliance */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">FDCPA Compliance and Documentation Standards</h2>
            <div className="bg-white border-l-4 border-blue-600 p-6 mb-10 rounded-r-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Protecting Your Agency from Service-Related FDCPA Exposure</h3>
              <p className="text-blue-800">
                While process servers themselves are not debt collectors under the FDCPA, debt collection agencies face exposure when service of process is used improperly — most notably in so-called &ldquo;sewer service&rdquo; cases where debtors claim they were never served. GPS-verified, photo-documented service with a complete audit trail is your primary defense against these claims.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Documented Attempts',
                  desc: 'Every service attempt — successful or not — is logged with GPS coordinates, timestamp, and notes. This creates the due diligence record needed if alternative service becomes necessary.',
                },
                {
                  icon: FileText,
                  title: 'Sworn Affidavits',
                  desc: 'Properly executed affidavits of service from certified Oklahoma process servers, formatted for the specific court where your collection case is pending.',
                },
                {
                  icon: Target,
                  title: 'Audit Trail',
                  desc: 'Complete chain of custody documentation from document receipt through service completion — supporting both compliance audits and any future litigation challenging the validity of service.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-10 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-amber-900 mb-2">Important Legal Notice</h3>
                  <p className="text-amber-800 text-sm">
                    Just Legal Solutions provides process serving and skip tracing services. We are not attorneys and do not provide legal advice. Collection agencies should consult with qualified legal counsel regarding FDCPA compliance requirements applicable to their specific operations and litigation activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multiple Attempt Documentation */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Multiple Attempt Documentation</h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              In collection litigation, the ability to document multiple, good-faith service attempts is essential — both for qualifying for alternative service and for building the due diligence record that supports your case.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Why Multiple Attempts Matter</h3>
                <p className="text-gray-700 mb-4">
                  Oklahoma courts expect genuine, documented diligence before allowing alternative service methods like service by publication or alias summons. A single failed attempt is typically insufficient. Our standard collection litigation service protocol includes multiple attempts at different times of day and different days of the week to maximize the chance of personal service and to create a thorough attempt record.
                </p>
                <p className="text-gray-700">
                  When alternative service becomes necessary, our GPS-logged attempt records — showing the specific addresses visited, dates, times, and observations — provide exactly the documentation courts expect when reviewing motions for alternative service.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Our Attempt Protocol</h3>
                <ul className="space-y-3">
                  {[
                    'Initial attempt at primary debtor address',
                    'Second attempt at different time of day (evening/weekend)',
                    'GPS coordinates and timestamp on every attempt',
                    'Observation notes on property status (occupied, vacant, etc.)',
                    'Photo documentation of address and surroundings',
                    'Employer or alternate address attempt if known',
                    'Skip trace triggered if no contact after multiple attempts',
                    'Full attempt log included with affidavit of non-service',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Account Management */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Account Management for Collection Agencies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">What Your Account Includes</h3>
                <ul className="space-y-3">
                  {[
                    'Dedicated account manager for your agency',
                    'Batch submission portal for high-volume dockets',
                    'GPS-verified service on every assignment',
                    'Sworn affidavit of service within 24 hours of completion',
                    'All attempt logs for alternative service documentation',
                    'Skip tracing integration for stale addresses',
                    'Consolidated invoicing and reporting',
                    'Statewide Oklahoma coverage',
                    'Priority scheduling for time-sensitive judgments',
                    'Customized affidavit formats by court district',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Statewide Oklahoma Coverage</h3>
                  <p className="text-gray-700 mb-4">
                    Collection litigation doesn&apos;t stay in one county. Debtors move, accounts originate in one city and defendants live in another. Our statewide Oklahoma process serving network provides consistent documentation standards and turnaround times whether the debtor is in Tulsa County or the far corners of Oklahoma.
                  </p>
                  <ul className="space-y-2">
                    {['Tulsa metro & Creek County (primary)', 'Oklahoma City metro', 'Lawton / Comanche County', 'Payne County (Stillwater)', 'All 77 Oklahoma counties by request'].map((c, i) => (
                      <li key={i} className="flex items-center text-gray-700 text-sm">
                        <MapPin className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Link href="/service-areas" className="text-blue-600 hover:text-blue-800 font-medium text-sm underline">
                      View complete service areas →
                    </Link>
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Volume Pricing Available</h4>
                  <p className="text-blue-800 text-sm">
                    Collection agencies with recurring high-volume service needs may qualify for preferred volume pricing. <Link href="/pricing" className="underline font-medium">Visit our pricing page</Link> or <Link href="/contact" className="underline font-medium">contact us</Link> to discuss your volume requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Services for Debt Collection</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Skip Tracing', desc: 'Locate hard-to-find debtors and witnesses across Oklahoma and nationwide.', href: '/skip-tracing' },
                { title: 'Process Serving', desc: 'Full-service document delivery with certified Oklahoma process servers.', href: '/process-serving' },
                { title: 'Subpoena Service', desc: 'Court-compliant subpoena delivery to debtors, witnesses, and record custodians.', href: '/subpoena-service' },
                { title: 'Same-Day Process Server', desc: 'Urgent same-day service for time-sensitive collection deadlines.', href: '/same-day-process-server' },
                { title: 'Urgent Process Server', desc: 'Rush service for judgment enforcement windows and critical filings.', href: '/urgent-process-server' },
                { title: 'Courthouse Filing', desc: 'File collection petitions and post-judgment documents at Oklahoma courts.', href: '/courthouse-filing-services' },
              ].map((service, i) => (
                <Link key={i} href={service.href} className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-6 transition-colors border border-gray-200 hover:border-blue-300">
                  <h3 className="font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Oklahoma Statute of Limitations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Oklahoma Statute of Limitations for Debt Collection</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
              Understanding the applicable limitation periods is critical for debt collection litigation. Filing a complaint within the statutory window is only half the battle &mdash; if service of process is delayed past the expiration date, the defendant may argue the claim is time-barred.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { title: 'Written Contracts', period: '5 Years', statute: '12A O.S. &sect; 2-725 (sale of goods); general contract limitations for other written agreements', icon: FileText },
                { title: 'Oral Contracts', period: '3 Years', statute: 'Oklahoma general statute of limitations for oral agreements', icon: Scale },
                { title: 'Promissory Notes', period: '6 Years', statute: '12A O.S. &sect; 3-118 governs negotiable instruments including promissory notes', icon: BookOpen },
                { title: 'Open Accounts / Credit Cards', period: '3–5 Years', statute: 'Varies by characterization — open account vs. written agreement analysis applies', icon: DollarSign },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
                  <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-2xl font-extrabold text-blue-700 mb-2">{item.period}</p>
                  <p className="text-gray-600 text-sm">{item.statute}</p>
                </div>
              ))}
            </div>
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Oklahoma Statute Quick Reference
              </h3>
              <p className="text-gray-700 mb-3">
                Key limitation periods under <a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST12" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Oklahoma Statutes</a>:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>5 years — Written contracts:</strong> <a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST12" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">12A O.S. &sect; 2-725</a> (sale of goods); general written contract limitations for other agreements</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>3 years — Oral contracts:</strong> <a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST12" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">12 O.S. &sect; 95(2)</a> — Oklahoma general statute of limitations for oral agreements</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span><strong>6 years — Promissory notes:</strong> 12A O.S. &sect; 3-118 governs negotiable instruments</span></li>
              </ul>
              <p className="text-gray-600 text-xs mt-3 italic">Consult a licensed Oklahoma attorney for the limitations period applicable to your specific debt type.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="w-6 h-6 text-blue-600 mr-2" />
                Why Timely Service Matters
              </h3>
              <p className="text-gray-700 mb-4">
                The statute of limitations clock generally begins running from the date of default or last payment. Filing a collection complaint within the statutory window preserves the claim &mdash; but the complaint must be properly served on the defendant within the timeframe allowed by court rules. If service is delayed or defective, the defendant may successfully argue that the claim has expired.
              </p>
              <p className="text-gray-700">
                Proper, prompt service within the limitations window is critical to protecting the validity of the collection action. Just Legal Solutions prioritizes timely service on all collection filings and provides detailed attempt documentation that demonstrates diligent service efforts from the moment a complaint is filed.
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <p className="text-blue-900 font-medium">
                <AlertTriangle className="w-5 h-5 inline-block mr-2 text-blue-700" />
                &ldquo;Filing a collection complaint protects your claim &mdash; but only if the defendant is properly served. Delayed or defective service can give a debtor grounds to argue the claim is time-barred.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Skip Tracing for Debt Collection */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Skip Tracing for Debt Collection Service</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
              When debtors move, change employers, or go off-grid to avoid creditors, standard service attempts at outdated addresses fail repeatedly. Professional skip tracing bridges the gap between an unlocatable debtor and successful service of process.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-6 h-6 text-blue-600 mr-2" />
                  Professional Skip Tracing Methods
                </h3>
                <ul className="space-y-3">
                  {[
                    'Database searches across public records, utilities, and credit header data',
                    'Social media investigation to identify location indicators',
                    'Neighborhood canvassing when digital methods are insufficient',
                    'Employment verification through commercial databases and direct inquiry',
                    'Cross-referencing known associates and prior addresses for leads',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="w-6 h-6 text-blue-600 mr-2" />
                  Integrated Locate-to-Serve Workflow
                </h3>
                <p className="text-gray-700 mb-4">
                  When skip tracing and process serving are handled by separate vendors, there&apos;s always a gap between locating a debtor and serving the documents. That delay gives debtors time to move again.
                </p>
                <p className="text-gray-700 mb-4">
                  At Just Legal Solutions, skip tracing and service are handled under one roof. Once we identify a current address, we immediately dispatch a process server &mdash; no handoff delays, no communication gaps, and consistent documentation from first locate attempt through successful service.
                </p>
                <p className="text-gray-700">
                  Professional skip tracing significantly increases service success rates versus re-attempting old addresses. Our integrated approach means faster turnaround and higher completion rates on your collection docket.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <p className="text-blue-900 font-medium">
                <TrendingUp className="w-5 h-5 inline-block mr-2 text-blue-700" />
                &ldquo;Skip tracing and process serving under one roof means faster locate-to-serve turnaround and consistent documentation from first attempt through successful service.&rdquo;
              </p>
            </div>
            <div className="text-center">
              <Link href="/skip-tracing" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Learn More About Skip Tracing
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Post-Judgment Collection */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Post-Judgment Collection: Garnishment and Execution</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
              Winning a collection judgment is only the first step &mdash; collecting on it requires additional legal action, and every stage of post-judgment enforcement involves service of process. Professional service is required at every step, not just the initial lawsuit.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                {
                  title: 'Wage Garnishment',
                  desc: 'Serving a garnishment summons on the debtor&apos;s employer to redirect a portion of wages toward the judgment. Requires proper service on the employer entity.',
                  icon: Briefcase,
                },
                {
                  title: 'Bank Garnishment',
                  desc: 'Serving a garnishment summons on the debtor&apos;s financial institution to freeze and redirect funds held in deposit accounts toward the judgment.',
                  icon: Building2,
                },
                {
                  title: 'Property Execution',
                  desc: 'Serving appropriate writs to authorize seizure and sale of the debtor&apos;s personal property to satisfy the outstanding judgment balance.',
                  icon: Gavel,
                },
                {
                  title: 'Judgment Liens',
                  desc: 'Recording a certified copy of the judgment creates a lien on real property in Oklahoma, encumbering the debtor&apos;s real estate until the judgment is satisfied.',
                  icon: FileText,
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="w-6 h-6 text-blue-600 mr-2" />
                Full Collection Lifecycle Service
              </h3>
              <p className="text-gray-700 mb-4">
                Many process serving companies focus exclusively on initial complaint service and leave collection agencies scrambling to find servers for post-judgment enforcement. Just Legal Solutions handles service at all stages of the collection lifecycle &mdash; from the original complaint and summons through wage garnishment, bank garnishment, execution writs, and judgment renewal filings.
              </p>
              <p className="text-gray-700">
                This full-lifecycle capability means your agency works with one trusted service provider from filing through final collection, with consistent documentation standards and a single point of contact for case status updates across every enforcement action.
              </p>
            </div>
          </div>
        </section>

        {/* FDCPA Compliance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">FDCPA Compliance in Service of Process</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
              The Fair Debt Collection Practices Act (15 U.S.C. &sect; 1692 et seq.) imposes strict requirements on debt collectors. While process servers are not directly regulated as &ldquo;debt collectors&rdquo; under the FDCPA, the manner in which service is conducted can create significant liability exposure for the collection agency that retained them.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {[
                {
                  title: 'Discreet Service Practices',
                  desc: 'Our process servers do not announce the nature of the documents to neighbors, coworkers, or others present at the time of service. Documents are delivered directly to the intended recipient without publicly identifying the debt or the creditor.',
                  icon: Shield,
                },
                {
                  title: 'Time-of-Day Considerations',
                  desc: 'While FDCPA time restrictions technically apply to direct communication rather than service, professional servers avoid unnecessarily inconvenient times. We schedule attempts during reasonable hours to minimize disruption and reduce the risk of debtor complaints.',
                  icon: Clock,
                },
                {
                  title: 'Workplace Service Protocol',
                  desc: 'Service at a debtor&apos;s workplace is generally permissible under Oklahoma law. Our servers conduct workplace service discreetly and efficiently, without revealing the nature of the documents to supervisors or coworkers beyond what is legally required.',
                  icon: Building2,
                },
                {
                  title: 'GPS-Verified Documentation',
                  desc: 'Every service attempt is documented with GPS coordinates, timestamps, and server notes. This verification chain provides irrefutable evidence that service was actually accomplished, protecting your agency against allegations of defective or fabricated service.',
                  icon: MapPin,
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-blue-700" />
                The &ldquo;Sewer Service&rdquo; Litigation Risk
              </h4>
              <p className="text-blue-800">
                &ldquo;Sewer service&rdquo; &mdash; the practice of a process server falsely claiming to have delivered documents &mdash; is a serious and growing litigation risk for collection agencies. Debtors who obtain default judgments vacated on sewer service grounds frequently pursue FDCPA claims against the collection agency, not just the process server. GPS-verified service with timestamped coordinates and photo documentation eliminates this exposure by providing irrefutable proof that documents were actually delivered to the correct location.
              </p>
            </div>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Our process servers understand the sensitivity of debt collection service and are trained to conduct every service attempt professionally, discreetly, and in a manner that minimizes FDCPA compliance risk for your agency.
            </p>
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Scale className="w-6 h-6 text-blue-600 mr-2" />
                FDCPA Compliance Considerations for Process Serving
              </h3>
              <p className="text-gray-700 mb-4">
                While process servers are not classified as &ldquo;debt collectors&rdquo; under the <a href="https://www.consumer.ftc.gov/articles/debt-collection-faqs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Fair Debt Collection Practices Act</a>, the manner in which service is conducted directly affects your agency&apos;s FDCPA exposure. Courts have found that collection agencies bear responsibility when their process serving vendors engage in unlawful practices &mdash; including &ldquo;sewer service,&rdquo; disclosing the nature of documents to third parties, or serving at unreasonable times. The <a href="https://www.consumer.ftc.gov/articles/debt-collection-faqs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">FTC&apos;s debt collection guidance</a> emphasizes that proper documentation and professional conduct are critical throughout the collection process.
              </p>
              <p className="text-gray-700 mb-4">
                Our GPS-verified, photo-documented service provides the compliance-ready audit trail your agency needs. Every attempt is logged, every successful service is documented with sworn <Link href="/affidavit-of-service" className="text-blue-600 hover:text-blue-800 underline">affidavits of service</Link>, and our servers follow strict protocols that align with <a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST12" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Oklahoma Statutes</a> governing service of process and the professional conduct standards recognized by the <a href="https://napps.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">National Association of Professional Process Servers (NAPPS)</a>.
              </p>
              <p className="text-gray-700">
                For a comprehensive overview of Oklahoma service rules and legal requirements, see our <Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:text-blue-800 underline">Oklahoma process server laws guide</Link> and the <Link href="/ultimate-guide-process-serving-oklahoma" className="text-blue-600 hover:text-blue-800 underline">Ultimate Guide to Process Serving in Oklahoma</Link>. The <a href="https://www.okbar.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Oklahoma Bar Association</a> can provide referrals to qualified collection law attorneys for complex compliance questions.
              </p>
            </div>
          </div>
        </section>

        {/* Bulk Service Programs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Bulk Service Programs for Collection Agencies</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
              Collection agencies with recurring high-volume dockets need more than a process server &mdash; they need a service partner with dedicated capacity, streamlined intake, and consolidated reporting. Our bulk service program is built specifically for agency-scale operations.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                {
                  title: 'Volume Processing',
                  desc: 'Dedicated capacity allocation for high-volume accounts ensures your assignments are processed without delays, even during peak filing periods.',
                  icon: BarChart3,
                },
                {
                  title: 'Batch Assignments',
                  desc: 'Submit 10, 50, or 500 service assignments at once through our portal or via email. No need to create individual requests for each case.',
                  icon: FileText,
                },
                {
                  title: 'Prioritized Queues',
                  desc: 'Your assignments are processed ahead of standard single-case requests, ensuring faster first-attempt turnaround on your entire docket.',
                  icon: TrendingUp,
                },
                {
                  title: 'Consolidated Reporting',
                  desc: 'A single weekly or monthly report showing the status of all active assignments &mdash; eliminating the need to track individual cases across multiple systems.',
                  icon: Globe,
                },
                {
                  title: 'Unified Invoicing',
                  desc: 'One invoice per billing period with matter-level detail for easy cost allocation across your client accounts and internal case management.',
                  icon: DollarSign,
                },
                {
                  title: 'Custom Documentation',
                  desc: 'Affidavit formats matched to your jurisdiction and case management requirements. We adapt our documentation to fit your workflow, not the other way around.',
                  icon: Award,
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
                API Integration &amp; Data Exchange
              </h3>
              <p className="text-gray-700">
                For agencies with case management systems that support data exchange, we offer integration options to automate assignment submission, status updates, and document delivery. Whether your platform supports CSV imports, API connections, or custom formats, we work with your technical team to streamline the data flow between your system and our service workflow.
              </p>
            </div>
            <div className="text-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Set Up Your Volume Program
                <ChevronRight className="w-5 h-5 ml-2" />
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Client Success: 200+ Account Portfolio Service</h2>
                  <p className="text-gray-700 mb-4">
                    A regional debt collection agency engaged our services for a portfolio of 200+ accounts requiring service across eastern Oklahoma. Through our volume service program with <Link href="/skip-tracing" className="text-blue-600 hover:text-blue-800 underline">skip tracing support</Link>, we achieved an 87% successful service rate within 30 days, with <Link href="/gps-tracked-process-serving" className="text-blue-600 hover:text-blue-800 underline">GPS-verified documentation</Link> for every attempt. All <Link href="/affidavit-of-service" className="text-blue-600 hover:text-blue-800 underline">affidavits of service</Link> were delivered in a consolidated batch format compatible with the agency&apos;s case management system. See our <Link href="/blog/how-to-serve-small-claims-oklahoma" className="text-blue-600 hover:text-blue-800 underline">small claims service guide</Link> for related guidance.
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-800">200+ accounts served</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-800">87% success rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-800">30-day completion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-800">GPS docs on every attempt</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic mt-4">Details generalized for client confidentiality.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources for Debt Collection Agencies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resources for Debt Collection Agencies</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Service Options &amp; Guides</h3>
                <ul className="space-y-3">
                  <li><Link href="/skip-tracing" className="text-blue-600 hover:text-blue-800 underline text-sm">Skip Tracing for Hard-to-Find Debtors</Link></li>
                  <li><Link href="/gps-tracked-process-serving" className="text-blue-600 hover:text-blue-800 underline text-sm">GPS-Tracked Process Serving — How It Works</Link></li>
                  <li><Link href="/affidavit-of-service" className="text-blue-600 hover:text-blue-800 underline text-sm">Affidavit of Service — Documentation Standards</Link></li>
                  <li><Link href="/courthouse-filing-services" className="text-blue-600 hover:text-blue-800 underline text-sm">Courthouse Filing Services</Link></li>
                  <li><Link href="/rush-vs-standard-vs-same-day-service" className="text-blue-600 hover:text-blue-800 underline text-sm">Rush vs. Standard vs. Same-Day Service Options</Link></li>
                  <li><Link href="/same-day-process-server" className="text-blue-600 hover:text-blue-800 underline text-sm">Same-Day Process Server for Urgent Deadlines</Link></li>
                  <li><Link href="/what-happens-if-someone-refuses-service" className="text-blue-600 hover:text-blue-800 underline text-sm">What Happens If a Debtor Refuses Service</Link></li>
                  <li><Link href="/pricing" className="text-blue-600 hover:text-blue-800 underline text-sm">Pricing &amp; Volume Discounts for Collection Agencies</Link></li>
                  <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:text-blue-800 underline text-sm">Oklahoma Process Server Laws &amp; Requirements</Link></li>
                  <li><Link href="/ultimate-guide-process-serving-oklahoma" className="text-blue-600 hover:text-blue-800 underline text-sm">Ultimate Guide to Process Serving in Oklahoma</Link></li>
                  <li><Link href="/blog/how-to-serve-small-claims-oklahoma" className="text-blue-600 hover:text-blue-800 underline text-sm">How to Serve Small Claims in Oklahoma (Blog)</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Related B2B Services</h3>
                <ul className="space-y-3">
                  <li><Link href="/process-serving-for-insurance-companies" className="text-blue-600 hover:text-blue-800 underline text-sm">Process Serving for Insurance Companies</Link></li>
                  <li><Link href="/process-serving-for-property-managers" className="text-blue-600 hover:text-blue-800 underline text-sm">Process Serving for Property Managers</Link></li>
                </ul>
                <h3 className="text-lg font-bold text-gray-800 mb-4 mt-6">External Authority Resources</h3>
                <ul className="space-y-3">
                  <li><a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST12" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm">Oklahoma Statutes Title 12 (OSCN)</a></li>
                  <li><a href="https://www.courts.ok.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm">Oklahoma Courts — Official Site</a></li>
                  <li><a href="https://napps.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm">NAPPS — National Association of Professional Process Servers</a></li>
                  <li><a href="https://www.okbar.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm">Oklahoma Bar Association</a></li>
                  <li><a href="https://www.consumer.ftc.gov/articles/debt-collection-faqs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm">FTC — Debt Collection FAQs</a></li>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your Collection Docket?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Set up a dedicated collection agency account with Just Legal Solutions and get GPS-verified, FDCPA-compliant process serving across all 77 Oklahoma counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Set Up Your Account
              </Link>
              <Link href="/skip-tracing" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Learn About Skip Tracing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
