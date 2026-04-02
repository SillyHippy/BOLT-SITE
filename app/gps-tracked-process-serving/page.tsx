import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle, MapPin, Shield, Clock, FileText, Star, Target, Zap, Scale, AlertTriangle, Lock } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'GPS Tracked Process Serving Oklahoma | Just Legal Solutions',
  description: 'GPS-verified process serving in Oklahoma with timestamped location data, photo documentation, and court-admissible proof of service. Tulsa, Creek County & statewide.',
  keywords: 'GPS tracked process server, GPS process serving Oklahoma, GPS verified service of process, process server Tulsa GPS, court admissible proof of service',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'GPS Tracked Process Serving Oklahoma | Just Legal Solutions',
    description: 'GPS-verified process serving with timestamped location data and photo documentation. Court-admissible proof of service across Oklahoma.',
    url: 'https://justlegalsolutions.org/gps-tracked-process-serving',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630, alt: 'GPS Tracked Process Serving Oklahoma' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPS Tracked Process Serving Oklahoma | Just Legal Solutions',
    description: 'GPS-verified process serving with timestamped location data and photo documentation across Oklahoma.',
    images: ['https://justlegalsolutions.org/og-image.png'],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/gps-tracked-process-serving' },
  other: {
    'ai-content-type': 'service',
    'ai-summary': 'GPS tracked process serving in Oklahoma provides timestamped location data, photo documentation, and court-admissible proof of service for attorneys and law firms.',
    'ai-key-facts': 'GPS verification, timestamped coordinates, photo documentation, Oklahoma coverage, court admissible evidence, 12 O.S. § 2004 compliance',
  },
};

const faqs = [
  {
    question: "What is GPS-tracked process serving and how does it work?",
    answer: "GPS-tracked process serving uses real-time satellite positioning technology to record the precise geographic coordinates, date, and time at the exact moment documents are delivered. When our process server executes service, the GPS device captures encrypted location data that is logged immutably. This creates an independent, technology-driven record that complements the process server's sworn affidavit. The resulting data package — coordinates, timestamp, and photo — provides layered proof of service that is far more difficult to challenge in court than traditional sworn statements alone.",
  },
  {
    question: "Is GPS evidence admissible in Oklahoma courts?",
    answer: "Yes. GPS location data, when properly authenticated, is admissible as supporting evidence in Oklahoma courts. It is used alongside the sworn affidavit of service to corroborate the process server's testimony. Oklahoma's proof of service requirements under 12 O.S. § 2004 are satisfied by a proper affidavit, and GPS data serves as additional corroborating documentation that substantially reduces the likelihood a court will grant a motion to quash service based on a defendant's denial of receipt.",
  },
  {
    question: "What information is captured in the GPS record?",
    answer: "Each GPS-verified service attempt captures: precise latitude and longitude coordinates (typically accurate to within 3–5 meters), UTC timestamp converted to local Oklahoma time, the process server's device identifier, and photographic documentation taken at the scene. The photo may include street-level imagery of the service address, the individual served (where legally permissible and appropriate), or the doorway/mailbox area for posted service. All data is encrypted and stored securely.",
  },
  {
    question: "How does GPS tracking help attorneys defend against improper service claims?",
    answer: "One of the most common defense tactics in civil litigation is challenging the validity of service of process. GPS tracking provides objective, third-party corroboration of exactly where and when service was completed. When a defendant claims they were never served, your attorney can produce GPS coordinates that place our process server at the defendant's address at a specific time — data that is far harder to refute than a bare denial. This documentation is particularly valuable in default judgment proceedings and eviction cases.",
  },
  {
    question: "Does GPS tracking cover all service attempts, including unsuccessful ones?",
    answer: "Absolutely. Every service attempt — whether successful or not — is GPS logged. This is particularly important for cases requiring due diligence documentation prior to seeking alternative service methods such as publication or posted service. When you need to demonstrate to a court that multiple good-faith attempts were made at a specific address, GPS records of each attempt provide compelling proof of diligence.",
  },
  {
    question: "What areas of Oklahoma do you cover with GPS-tracked process serving?",
    answer: "We provide GPS-tracked process serving throughout the Tulsa metropolitan area, including Tulsa County, Creek County, Wagoner County, Rogers County, Osage County, Okmulgee County, and Pawnee County. We also offer statewide Oklahoma service for cases outside the immediate Tulsa metro. Visit our service areas page for the complete list of counties and cities we serve with GPS verification capabilities.",
  },
  {
    question: "How does GPS evidence hold up when service is challenged in Oklahoma court?",
    answer: "Under Oklahoma Evidence Code (12 O.S. § 2004), GPS records maintained in the ordinary course of business qualify as business records — a well-established category of admissible evidence. When a defendant files a motion to quash service, the GPS timestamp and coordinates corroborate the process server\u0027s sworn affidavit with independent, objective data. Courts in Oklahoma and across the country have consistently found GPS-verified service records to be highly persuasive when resolving service disputes.",
  },
  {
    question: "Can GPS-tracked service be used as evidence if a default judgment is appealed?",
    answer: "Yes. GPS-tracked service records provide a robust evidentiary foundation for defending default judgments on appeal. If an appellate court reviews whether service was properly made at the trial level, GPS coordinates, timestamps, and photographic documentation provide an objective record that the defendant was served at a specific location and time. This record supplements the affidavit of service filed with the court and makes it substantially harder to overturn a default judgment on service grounds.",
  },
  {
    question: "Do insurance companies and property managers use GPS-tracked service?",
    answer: "Yes. Insurance companies use GPS-tracked process serving to document service in coverage dispute litigation and subrogation cases. Property managers rely on GPS verification for eviction proceedings, particularly when serving tenants who claim non-receipt of notices. Debt collection firms use GPS documentation to establish service validity in collection lawsuits. Just Legal Solutions serves all of these industries with the same GPS-verified documentation standard.",
  },
  {
    question: "How do I access my GPS service records as a client?",
    answer: "Just Legal Solutions provides clients with access to GPS service records through our client portal and by direct delivery of the documentation package. After service is completed, you receive a service packet that includes the sworn affidavit, GPS coordinates and timestamp, photographic documentation, and a confirmation of service. For cases requiring court filing, we prepare documentation in the format required by Oklahoma district courts.",
  },
  {
    question: "Is GPS tracking available for statewide Oklahoma service, or only Tulsa metro?",
    answer: "GPS tracking is available for all process serving we perform throughout Oklahoma, including both our primary Tulsa metro coverage area and statewide service in all 77 Oklahoma counties. Whether your service address is in Oklahoma City, Lawton, Enid, or a rural county courthouse location, GPS tracking is a standard component of our service — not an add-on.",
  },
];

export default function GPSTrackedProcessServing() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema
          pageType="service"
          pageTitle="GPS Tracked Process Serving Oklahoma"
          pageDescription="GPS-verified process serving in Oklahoma with timestamped location data, photo documentation, and court-admissible proof of service."
          pageUrl="https://justlegalsolutions.org/gps-tracked-process-serving"
          siteName="Just Legal Solutions"
          reviewCount={156}
          services={['GPS Tracked Process Serving', 'Process Serving', 'Legal Document Delivery']}
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'GPS Tracked Process Serving', url: '/gps-tracked-process-serving' },
          ]}
          faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
          keywords={['GPS tracked process server', 'GPS process serving Oklahoma', 'GPS verified service of process']}
        />

        <LocalPromoBanner zips={[]} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-blue-200 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">GPS Tracked Process Serving</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-6 h-6 text-orange-400" />
                <span className="text-orange-300 font-semibold uppercase tracking-wide text-sm">Technology-Verified Service</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">GPS Tracked Process Serving in Oklahoma</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Timestamped location data, photo documentation, and encrypted GPS records that give your proof of service bulletproof credibility in court.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Request GPS-Verified Service
                </Link>
                <Link href="/pricing" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What Is GPS Process Serving */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is GPS-Tracked Process Serving?</h2>
                <p className="text-gray-700 mb-4">
                  GPS-tracked process serving is the practice of using real-time satellite positioning technology to create an objective, immutable record of exactly where and when service of process was executed. Unlike traditional service — which relies solely on a process server&apos;s sworn affidavit — GPS verification adds an independent, technology-driven layer of proof that is far harder to challenge in court.
                </p>
                <p className="text-gray-700 mb-4">
                  When our process servers deliver legal documents, a GPS-enabled device records precise geographic coordinates (latitude and longitude), a UTC timestamp, and photographic evidence at the exact moment of service. This data is encrypted, logged, and preserved as part of the official service record alongside the sworn affidavit.
                </p>
                <p className="text-gray-700">
                  The result: attorneys, insurance companies, property managers, and debt collection firms receive proof of service documentation that meets and exceeds the standards expected under Oklahoma civil procedure, specifically the affidavit requirements outlined in 12 O.S. § 2004.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: MapPin, title: 'Precise Location Coordinates', desc: 'Latitude and longitude accurate to within 3–5 meters, recorded at the moment of service.' },
                  { icon: Clock, title: 'Encrypted Timestamp', desc: 'UTC time converted to local Oklahoma time, creating an unalterable record of when service occurred.' },
                  { icon: FileText, title: 'Photo Documentation', desc: 'Street-level photographs of the service location and surrounding environment captured at time of service.' },
                  { icon: Lock, title: 'Encrypted Data Storage', desc: 'All GPS and photo records are encrypted and stored securely, available for court subpoena if needed.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why GPS Verification Matters in Oklahoma Litigation</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Service of process challenges are among the most common and frustrating procedural hurdles in civil litigation. GPS tracking closes the evidentiary gap that traditional service creates.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Oklahoma Proof of Service Standard — 12 O.S. § 2004</h3>
              <p className="text-blue-800">
                Under Oklahoma law, proof of service must include the process server&apos;s sworn statement identifying who was served, the date, and the method of service. GPS data does not replace this requirement — it powerfully supplements it, creating corroborating evidence that makes challenges to service substantially more difficult.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-10">
              {[
                {
                  icon: Shield,
                  title: 'Defend Against Bad Faith Denials',
                  desc: 'When a defendant falsely claims they were never served, GPS coordinates placing your process server at their address at a specific time creates objective rebuttal evidence that courts take seriously.',
                },
                {
                  icon: Scale,
                  title: 'Strengthen Default Judgments',
                  desc: 'Default judgments are frequently attacked on service grounds. GPS-verified proof of service creates a substantially stronger record supporting the validity of your judgment.',
                },
                {
                  icon: Target,
                  title: 'Document Due Diligence',
                  desc: 'For alternative service motions (publication, posting), courts require proof of multiple good-faith attempts. GPS records of each attempt at specific addresses are compelling due diligence documentation.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How GPS-Tracked Service Works — Step by Step</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              From document receipt to court filing, every step is tracked, documented, and preserved.
            </p>
            <div className="space-y-6">
              {[
                { step: '01', title: 'You Upload or Deliver Documents', desc: 'Submit your documents through our online portal, email, or in person at our Tulsa office. Provide the serve address, any alternate locations, and any special instructions.' },
                { step: '02', title: 'Assignment to a GPS-Equipped Process Server', desc: 'Your case is assigned to a certified Oklahoma process server whose mobile device is GPS-enabled and configured for encrypted location logging.' },
                { step: '03', title: 'Service Attempted at Address', desc: 'The process server approaches the address. The GPS device automatically begins capturing location data upon arrival, logging coordinates and timestamp before any interaction.' },
                { step: '04', title: 'Photo Documentation Captured', desc: 'Our server photographs the service location — the property, street number, and relevant surroundings — creating a visual record tied to the GPS coordinates and timestamp.' },
                { step: '05', title: 'Documents Served and Data Logged', desc: 'Documents are delivered in accordance with Oklahoma law. The GPS record captures the exact moment of completion with a final encrypted log entry.' },
                { step: '06', title: 'Affidavit Prepared and Records Delivered', desc: 'You receive a sworn affidavit of service plus the full GPS data package (coordinates, timestamps, photos) within 24 hours of service completion, ready for court filing.' },
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

        {/* GPS vs Traditional */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">GPS-Tracked vs. Traditional Process Serving</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">GPS-Tracked Service</th>
                    <th className="text-center p-4 font-semibold">Traditional Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Location proof', '✅ Precise GPS coordinates', '❌ Affidavit only'],
                    ['Timestamp verification', '✅ Encrypted UTC timestamp', '⚠️ Server-reported time'],
                    ['Photo documentation', '✅ Automatic at time of service', '⚠️ Sometimes included'],
                    ['Challenge resistance', '✅ High — objective data', '⚠️ Moderate — sworn statement'],
                    ['Due diligence proof', '✅ Every attempt logged', '⚠️ Written records only'],
                    ['Data integrity', '✅ Encrypted, tamper-evident', '⚠️ Paper-based'],
                    ['Client real-time updates', '✅ Status notifications available', '⚠️ Variable'],
                  ].map(([feat, gps, trad], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 text-gray-800 font-medium">{feat}</td>
                      <td className="p-4 text-center text-gray-700">{gps}</td>
                      <td className="p-4 text-center text-gray-700">{trad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Benefits for Attorneys */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Benefits for Attorneys and Law Firms</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Oklahoma attorneys who work with Just Legal Solutions gain a significant procedural advantage when service of process is disputed.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Scale,
                  title: 'Reduce Motions to Quash',
                  desc: 'GPS data gives you objective evidence to oppose motions to quash service, protecting your default judgments, injunctions, and hard-won case positions.',
                },
                {
                  icon: Clock,
                  title: 'Faster Case Progression',
                  desc: 'When service is undeniable, defendants are less likely to delay proceedings with procedural challenges, allowing your case to move forward on the merits.',
                },
                {
                  icon: FileText,
                  title: 'Comprehensive Documentation Package',
                  desc: 'Receive a complete service package: affidavit of service, GPS coordinates, timestamped photos, and attempt logs — everything you need for your file and court submissions.',
                },
                {
                  icon: Star,
                  title: 'Enhanced Client Credibility',
                  desc: 'Presenting GPS-verified proof of service demonstrates thoroughness to your clients and to the court, reinforcing your reputation for meticulous case management.',
                },
                {
                  icon: Shield,
                  title: 'Protection in Malpractice Context',
                  desc: 'If a client later questions whether service was properly executed, GPS records provide an objective audit trail that protects both you and your client\'s case.',
                },
                {
                  icon: Zap,
                  title: 'Same-Day and Rush Service Available',
                  desc: 'GPS tracking is included with our standard, same-day, and urgent service options. Visit our same-day process server and urgent process server pages for time-sensitive matters.',
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

        {/* Coverage Area */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">GPS-Tracked Coverage Area</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Just Legal Solutions provides GPS-tracked process serving across the Tulsa metro and throughout Oklahoma. Our process servers are equipped with GPS technology for every assignment, regardless of location.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { region: 'Tulsa Metro', counties: ['Tulsa County', 'Creek County', 'Wagoner County', 'Rogers County', 'Osage County'] },
                { region: 'Greater Oklahoma', counties: ['Okmulgee County', 'Pawnee County', 'Mayes County', 'Cherokee County', 'Muskogee County'] },
                { region: 'Statewide Service', counties: ['Oklahoma City metro', 'Lawton area', 'Norman area', 'Edmond area', 'All 77 Oklahoma counties'] },
              ].map((area, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-gray-800">{area.region}</h3>
                  </div>
                  <ul className="space-y-1">
                    {area.counties.map((c, j) => (
                      <li key={j} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/service-areas" className="text-blue-600 hover:text-blue-800 font-medium underline">
                View complete service areas →
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Process Serving', desc: 'Full-service document delivery with certified Oklahoma process servers.', href: '/process-serving' },
                { title: 'Same-Day Process Server', desc: 'Urgent same-day service for time-sensitive legal matters.', href: '/same-day-process-server' },
                { title: 'Subpoena Service', desc: 'Court-compliant subpoena delivery to witnesses and custodians of record.', href: '/subpoena-service' },
                { title: 'Eviction Notice Service', desc: 'FED summons and eviction notice delivery for property managers.', href: '/eviction-notice-service' },
                { title: 'Skip Tracing', desc: 'Locate hard-to-find defendants and witnesses for service.', href: '/skip-tracing' },
                { title: 'Courier Services', desc: 'Document courier and delivery across the Tulsa metro.', href: '/courier-services' },
              ].map((service, i) => (
                <Link key={i} href={service.href} className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-6 transition-colors border border-gray-200 hover:border-blue-300">
                  <h3 className="font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Admissibility Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Legal Admissibility of GPS Evidence in Oklahoma</h2>
            <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
              GPS-stamped service records provide an evidentiary foundation that goes well beyond the traditional sworn affidavit. Oklahoma courts evaluate proof of service disputes under established evidentiary rules — and GPS documentation meets those standards decisively.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Business Records Under Oklahoma Evidence Code</h3>
              <p className="text-blue-800">
                Under Oklahoma&apos;s Evidence Code (12 O.S. § 2803(6)), records made in the regular course of business activity are admissible as an exception to the hearsay rule. GPS logs maintained by Just Legal Solutions as part of our ordinary service documentation practice meet this standard. When GPS records are properly authenticated and accompanied by an affidavit from the process server, they constitute admissible corroborating evidence in any Oklahoma district court proceeding.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {[
                {
                  title: 'Timestamped Records vs. Handwritten Affidavits',
                  desc: 'A handwritten affidavit alone relies entirely on the credibility of one individual. GPS-stamped records provide independent, machine-generated corroboration that is far more resistant to attack by opposing counsel.',
                },
                {
                  title: 'Geotagged Photo Evidence',
                  desc: 'Photographs automatically tagged with GPS coordinates and timestamp metadata create a visual record that ties the service event to a specific address and moment in time — valuable in contested eviction and default judgment proceedings.',
                },
                {
                  title: 'Digital Audit Trail',
                  desc: 'Every GPS service record includes a complete digital audit trail: device ID, route log, service coordinates, timestamp, and photo hash. This chain of data makes fabrication or alteration essentially impossible to allege credibly.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-bold text-amber-900 mb-2">When GPS Evidence Is Most Critical</h3>
              <p className="text-amber-800">
                GPS documentation is most valuable in default judgment proceedings where the defendant later claims non-receipt, contested eviction matters where tenants dispute proper notice, cases requiring substitute service or publication where multiple failed attempts must be documented, and post-judgment enforcement actions where the defendant challenges the validity of original service.
              </p>
            </div>
          </div>
        </section>

        {/* How GPS Technology Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How Our GPS Tracking Technology Works</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              From the moment an assignment is received to delivery of your complete service documentation, every step is tracked, logged, and preserved.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  step: '01',
                  title: 'Assignment Received, Device Activated',
                  desc: 'When your service order is accepted, a GPS-enabled device is assigned to the process server handling your case. Device activation creates a unique session ID tied to your case file, ensuring all data captured during service attempts is linked to your matter.',
                },
                {
                  step: '02',
                  title: 'Real-Time Route Tracking During Service Attempt',
                  desc: 'As the process server travels to the service address, real-time route data is logged. This establishes a verified path from origin to the service location, providing additional corroboration that the server physically traveled to and arrived at the correct address.',
                },
                {
                  step: '03',
                  title: 'Geostamped Photo Capture at Service Location',
                  desc: 'At the moment of service (or attempted service), photographic documentation is captured. Each photo is automatically embedded with GPS coordinates and timestamp metadata — creating a geotagged image that is cryptographically tied to the specific location and time.',
                },
                {
                  step: '04',
                  title: 'Automatic Timestamp and Coordinates Logged',
                  desc: 'The exact latitude, longitude, and UTC timestamp are recorded automatically at the moment of service or attempted service. This data is transmitted to our secure servers in real time, creating an immutable record that cannot be altered after the fact.',
                },
                {
                  step: '05',
                  title: 'Digital Affidavit Generated With Embedded GPS Data',
                  desc: 'After service is completed, a digital affidavit of service is prepared that incorporates the GPS coordinates, timestamp, and photo documentation directly into the service record. This integrated document is formatted for filing with Oklahoma district courts.',
                },
                {
                  step: '06',
                  title: 'Client Portal Access for Real-Time Updates',
                  desc: 'Clients receive access to service status updates as attempts are made. Upon completion, your full documentation package — affidavit, GPS record, and photos — is delivered through our secure client portal and is available for court filing or attorney review.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex gap-4">
                  <div className="text-3xl font-bold text-blue-200 flex-shrink-0 w-12">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GPS vs Traditional and Industries */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">GPS Tracking vs. Traditional Service Documentation</h2>
                <p className="text-gray-700 mb-6">
                  Traditional process serving relies entirely on the process server&apos;s handwritten notes and sworn affidavit. GPS-tracked service adds multiple independent, objective data layers on top of the affidavit.
                </p>
                <div className="space-y-3">
                  {[
                    { feature: 'Proof of Location', traditional: 'Server&apos;s sworn statement only', gps: 'GPS coordinates accurate to 3–5 meters' },
                    { feature: 'Timestamp Accuracy', traditional: 'Server&apos;s handwritten time', gps: 'Encrypted UTC timestamp' },
                    { feature: 'Route Verification', traditional: 'Not available', gps: 'Complete route log from origin to address' },
                    { feature: 'Photo Evidence', traditional: 'Optional, not standard', gps: 'Geotagged photos, standard on every attempt' },
                    { feature: 'Digital Audit Trail', traditional: 'Paper record only', gps: 'Encrypted digital chain of custody' },
                    { feature: 'Challenge Resistance', traditional: 'Vulnerable to &ldquo;swearing contest&rdquo;', gps: 'Machine-generated, objective corroboration' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 text-sm border-b border-gray-100 pb-3">
                      <div className="font-semibold text-gray-800">{row.feature}</div>
                      <div className="text-gray-500">{row.traditional}</div>
                      <div className="text-blue-700 font-medium">{row.gps}</div>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 gap-2 text-xs text-gray-400 pt-1">
                    <div></div>
                    <div>Traditional</div>
                    <div>GPS-Tracked</div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Industries That Benefit From GPS-Tracked Service</h2>
                <p className="text-gray-700 mb-6">
                  GPS-verified service documentation is valuable across multiple industries that rely on documented, defensible proof of process serving.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Law Firms & Litigation Support',
                      desc: 'Attorneys and paralegals handling civil litigation, family law, collections, and eviction matters benefit from GPS-verified proof of service when opposing counsel challenges service validity.',
                      href: '/process-serving',
                    },
                    {
                      title: 'Insurance Companies',
                      desc: 'Insurance carriers use GPS-tracked service in coverage dispute litigation, subrogation cases, and when serving defendants in complex multi-party claims.',
                      href: '/process-serving-for-insurance-companies',
                    },
                    {
                      title: 'Property Managers',
                      desc: 'Property management companies serving eviction notices, lease terminations, and cure-or-quit notices rely on GPS documentation to defend against tenant challenges in Oklahoma eviction courts.',
                      href: '/process-serving-for-property-managers',
                    },
                    {
                      title: 'Debt Collection Firms',
                      desc: 'Debt collectors serving summonses in collection lawsuits use GPS-tracked documentation to demonstrate proper service and protect judgments from collateral attack.',
                      href: '/process-serving-for-debt-collection',
                    },
                  ].map((item, i) => (
                    <Link key={i} href={item.href} className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-5 transition-colors border border-gray-200 hover:border-blue-300">
                      <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Case Study Callout */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white border-l-4 border-green-600 rounded-r-xl shadow-sm p-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-green-700 text-sm font-semibold uppercase tracking-wide mb-2">Real-World Example — GPS Evidence in Action</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How GPS Evidence Defended a Challenged Service in Tulsa County</h2>
                  <p className="text-gray-700 mb-4">
                    In a recent Tulsa County eviction proceeding, a tenant filed a motion to quash service, claiming they were never served with the summons and petition. The tenant&apos;s position was straightforward: a sworn denial that service ever occurred.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Just Legal Solutions&apos; GPS records told a different story. The digital log showed our process server at the exact address — precise latitude and longitude coordinates matching the tenant&apos;s unit — at the documented time on the date shown in the <Link href="/affidavit-of-service" className="text-blue-700 font-semibold hover:underline">affidavit of service</Link>. A geotagged photograph captured at that moment showed the building entrance and unit number clearly visible.
                  </p>
                  <p className="text-gray-700 mb-4">
                    When the GPS data package was presented alongside the sworn affidavit, the motion to quash was denied. The eviction proceeded on schedule, saving the property manager weeks of delay and additional legal expense. Without GPS documentation, the case would have devolved into a credibility battle — the classic &ldquo;swearing contest&rdquo; that courts find difficult to resolve in the plaintiff&apos;s favor.
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    This example reflects the typical outcome in GPS-verified service disputes. Specific case details have been generalized to protect client privacy. For legal questions about your specific matter, consult a licensed Oklahoma attorney or contact the <a href="https://www.okbar.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Oklahoma Bar Association</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How GPS Integrates With Your Affidavit */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How GPS Coordinates Supplement Your Affidavit Under 12 O.S. § 2004</h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Oklahoma&apos;s proof of service requirements are codified under <a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST12" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">12 O.S. § 2004</a>. GPS data doesn&apos;t replace the affidavit — it powerfully supplements it, creating a two-layer evidentiary record that is far more difficult to challenge. For comprehensive legal context, see our <Link href="/oklahoma-process-server-laws" className="text-blue-700 font-semibold hover:underline">Oklahoma process server laws guide</Link>.
            </p>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What the Affidavit Provides</h3>
                <p className="text-gray-700 mb-4">
                  Under Oklahoma law, the <Link href="/affidavit-of-service" className="text-blue-700 font-semibold hover:underline">affidavit of service</Link> is the foundational document establishing proof of service. The sworn statement must identify who was served, the documents delivered, the date and time, the method of service, and the process server&apos;s identity and certification.
                </p>
                <p className="text-gray-700">
                  The affidavit is a sworn statement — legally binding and sufficient under 12 O.S. § 2004 on its own. However, it relies entirely on the credibility of the individual process server. When a defendant challenges service and disputes the affidavit&apos;s accuracy, the court faces a credibility contest. Learn what courts do when <Link href="/what-happens-if-someone-refuses-service" className="text-blue-700 font-semibold hover:underline">someone refuses or disputes service</Link>.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What GPS Data Adds</h3>
                <p className="text-gray-700 mb-4">
                  GPS coordinates and timestamps are machine-generated data — objective, automatic, and independent of any individual&apos;s testimony. When GPS records are submitted alongside the affidavit, the court has two independent sources of evidence pointing to the same conclusion: our server was at that address, at that time, on that date.
                </p>
                <p className="text-gray-700">
                  Under Oklahoma&apos;s Evidence Code (12 O.S. § 2803(6)), GPS logs maintained in the ordinary course of business qualify as business records — admissible evidence that does not depend on the declarant being available for cross-examination. This combination makes a successful motion to quash substantially more difficult. For deeper background, review our <Link href="/ultimate-guide-process-serving-oklahoma" className="text-blue-700 font-semibold hover:underline">Ultimate Guide to Process Serving in Oklahoma</Link>.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-8 rounded-r-lg">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Device Accuracy &amp; Chain of Custody for Digital Evidence</h3>
              <p className="text-blue-800 mb-3">
                Our process servers use enterprise-grade GPS-enabled mobile devices calibrated for location accuracy to within 3–5 meters under normal conditions. Each device is assigned a unique identifier tied to your case file, creating an unbroken chain of custody for digital evidence from the moment an assignment is activated to final data delivery.
              </p>
              <p className="text-blue-800 mb-3">
                The chain of custody for GPS evidence includes: device assignment log, session activation timestamp, route data from origin to service address, coordinate and timestamp capture at moment of service, geotagged photograph hash, and encrypted transmission to our secure servers. This chain is preserved and available for court subpoena or production in discovery.
              </p>
              <p className="text-blue-800">
                When courts evaluate digital evidence authenticity under Oklahoma evidentiary standards, the integrity of this chain — not just the raw data — determines admissibility. Our documentation practices are designed to satisfy authentication challenges before they arise. See the <a href="https://www.courts.ok.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-medium">Oklahoma Courts</a> portal for district court procedures and evidence submission requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Who Benefits Most from GPS-Tracked Service */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Who Benefits Most From GPS-Tracked Service</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              While GPS tracking strengthens any <Link href="/process-serving" className="text-blue-700 font-semibold hover:underline">process serving</Link> engagement, certain industries and practice areas benefit most from the additional layer of objective documentation.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Attorneys &amp; Law Firms</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Litigators handling civil disputes, collections, family law, and eviction matters face service challenges regularly. GPS-verified documentation dramatically reduces the risk that a well-executed service will be quashed on technical grounds — protecting default judgments, injunctions, and hearing dates. GPS records also support motions for alternative service when multiple attempts must be documented.
                </p>
                <ul className="space-y-1">
                  <li><Link href="/process-serving" className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline flex items-center gap-1"><ChevronRight className="w-3 h-3" />Core process serving services</Link></li>
                  <li><Link href="/affidavit-of-service" className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline flex items-center gap-1"><ChevronRight className="w-3 h-3" />Affidavit of service documentation</Link></li>
                  <li><Link href="/what-happens-if-someone-refuses-service" className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline flex items-center gap-1"><ChevronRight className="w-3 h-3" />When service is refused or challenged</Link></li>
                  <li><Link href="/same-day-process-server" className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline flex items-center gap-1"><ChevronRight className="w-3 h-3" />Same-day process server for urgent matters</Link></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Insurance Companies</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Coverage dispute litigation and subrogation cases require airtight proof of service when serving defendants in complex, multi-party claims. Insurance legal departments and outside counsel managing Oklahoma litigation use GPS-tracked service to protect judgments and avoid procedural challenges that delay resolution.
                </p>
                <ul className="space-y-1">
                  <li><Link href="/process-serving-for-insurance-companies" className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline flex items-center gap-1"><ChevronRight className="w-3 h-3" />Process serving for insurance companies</Link></li>
                  <li><Link href="/skip-tracing" className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline flex items-center gap-1"><ChevronRight className="w-3 h-3" />Skip tracing for hard-to-locate parties</Link></li>
                  <li><Link href="/pricing" className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline flex items-center gap-1"><ChevronRight className="w-3 h-3" />View pricing for all service tiers</Link></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Property Managers</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Eviction proceedings are among the most frequently challenged service situations in Oklahoma courts. Tenants facing eviction have every incentive to dispute service validity as a delay tactic. GPS-verified service of FED summons, pay-or-quit notices, and eviction petitions gives property managers objective evidence to defeat these challenges and keep proceedings on track.
                </p>
                <ul className="space-y-1">
                  <li><Link href="/process-serving-for-property-managers" className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline flex items-center gap-1"><ChevronRight className="w-3 h-3" />Process serving for property managers</Link></li>
                  <li><Link href="/same-day-process-server" className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline flex items-center gap-1"><ChevronRight className="w-3 h-3" />Same-day service for urgent eviction notices</Link></li>
                  <li><Link href="/weekend-emergency" className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline flex items-center gap-1"><ChevronRight className="w-3 h-3" />Weekend &amp; emergency process serving</Link></li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Debt Collectors &amp; Collection Firms</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Debt collection lawsuits depend on valid service of process to obtain and enforce judgments. When debtors challenge service in post-judgment proceedings, GPS records provide the objective corroboration needed to uphold the validity of original service — protecting the enforceability of judgments and preventing collateral attacks.
                </p>
                <ul className="space-y-1">
                  <li><Link href="/process-serving-for-debt-collection" className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline flex items-center gap-1"><ChevronRight className="w-3 h-3" />Process serving for debt collection</Link></li>
                  <li><Link href="/ultimate-guide-process-serving-oklahoma" className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline flex items-center gap-1"><ChevronRight className="w-3 h-3" />Ultimate Guide: Process Serving in Oklahoma</Link></li>
                  <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline flex items-center gap-1"><ChevronRight className="w-3 h-3" />Oklahoma process server laws &amp; requirements</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* External Authority Resources */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Oklahoma Legal Resources &amp; Authority References</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              The following resources provide authoritative information about Oklahoma process serving law, court procedures, and professional standards relevant to GPS-verified service.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  label: 'Oklahoma Statutes Title 12',
                  desc: 'Civil procedure rules governing service of process, proof of service requirements, and affidavit standards under 12 O.S. § 2004.',
                  href: 'https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST12',
                },
                {
                  label: 'Oklahoma Courts Official Site',
                  desc: 'Official portal for the Oklahoma court system including district court locations, eCourts eFiling, and case access.',
                  href: 'https://www.courts.ok.gov/',
                },
                {
                  label: 'NAPPS — National Assoc. of Professional Process Servers',
                  desc: 'The national professional association for process servers, setting industry standards and ethical guidelines.',
                  href: 'https://napps.org',
                },
              ].map((resource, i) => (
                <a key={i} href={resource.href} target="_blank" rel="noopener noreferrer" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-5 transition-colors border border-gray-200 hover:border-blue-300">
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm">{resource.label} ↗</h3>
                  <p className="text-xs text-gray-600">{resource.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-sm text-gray-500 italic border-t border-gray-200 pt-6">
              <strong>Legal Disclaimer:</strong> This information is for educational purposes only and does not constitute legal advice. For specific legal questions about your situation, consult a licensed Oklahoma attorney. Just Legal Solutions provides process serving and legal support services  we are not a law firm and do not provide legal counsel.
            </p>
          </div>
        </section>


        {/* FAQ Section */}
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

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready for GPS-Verified Process Serving?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Protect your case with objective, technology-backed proof of service. Request GPS-tracked service today or review our transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Request Service Now
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
