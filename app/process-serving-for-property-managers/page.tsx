import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Building2, Clock, Shield, FileText, MapPin, Scale, AlertTriangle, Users, Target, Zap, Star, Home, ListChecks, Layers, BookOpen, Gavel, TrendingUp } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Process Serving for Property Managers Oklahoma | Eviction Service',
  description: 'Process serving for Oklahoma property managers — FED summons, eviction notices, lease violations, GPS-verified service. Tulsa metro & Creek County coverage.',
  keywords: 'process server for property managers, eviction service property management, FED summons Oklahoma, eviction notice service Tulsa, property manager process server, forcible entry detainer Oklahoma',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Process Serving for Property Managers Oklahoma',
    description: 'FED summons, eviction notices, and lease violation service for Oklahoma property management companies. GPS-verified, documented service across the Tulsa metro.',
    url: 'https://justlegalsolutions.org/process-serving-for-property-managers',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-075-process-serving-for-property-managers-card.png', width: 1200, height: 630, alt: 'Process Serving for Property Managers Oklahoma' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Serving for Property Managers Oklahoma',
    description: 'FED summons, eviction notices, and lease violation service for Oklahoma property management companies.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-075-process-serving-for-property-managers-card.png'],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/process-serving-for-property-managers' },
  other: {
    'ai-content-type': 'service',
    'ai-summary': 'Process serving services for Oklahoma property management companies covering eviction notices, FED summons, lease violations, and multi-property management support with GPS verification.',
    'ai-key-facts': 'FED summons, eviction notice service, Oklahoma eviction timing requirements, GPS-verified service, property management companies, Tulsa metro coverage',
  },
};

const faqs = [
  {
    question: "What is the FED process and how does proper service protect my eviction case?",
    answer: "FED stands for Forcible Entry and Detainer — the Oklahoma legal process used to evict a tenant who remains on the property without right. The FED process begins with a properly served notice to quit (or pay rent, cure a violation, or vacate), followed by a FED petition filed in district court and service of the FED summons on the tenant. Proper service is the foundation of a successful eviction. If a tenant challenges service, a defective FED summons or improperly served notice can result in dismissal, requiring you to restart the process entirely — losing weeks of time and revenue. GPS-verified, properly documented service eliminates this risk.",
  },
  {
    question: "How much notice is required before filing for eviction in Oklahoma?",
    answer: "Oklahoma notice requirements for eviction vary by the reason for eviction. For nonpayment of rent, the landlord must give five days' written notice to pay or vacate. For lease violations, Oklahoma law generally requires reasonable notice to cure the violation. For month-to-month tenancies being terminated, 30 days' written notice is typically required. These are general guidelines under Oklahoma's Residential Landlord and Tenant Act — specific lease terms and circumstances may affect the applicable notice period. We recommend consulting with a landlord-tenant attorney to ensure the correct notice type is used before service.",
  },
  {
    question: "Can you serve eviction notices at multiple properties for my property management company?",
    answer: "Absolutely. Multi-property volume is where Just Legal Solutions excels. Property management companies managing dozens or hundreds of units can submit multiple eviction notice service assignments through our portal simultaneously. We coordinate service across all your properties, provide a consolidated status update, and deliver affidavits of service for each unit. Volume pricing is available for property management companies with regular service needs — visit our pricing page for details.",
  },
  {
    question: "What is 'posted service' and when can it be used for evictions in Oklahoma?",
    answer: "Posted service (also called conspicuous service or posting) is an alternative service method permitted under Oklahoma law when personal service cannot be accomplished after diligent attempts. For residential evictions, posted service typically involves securely affixing the notice to the main entrance of the residence. Oklahoma law specifies the conditions and procedures required for posted service to be valid. Our GPS-verified attempt documentation is critical when you need to establish that personal service was diligently attempted before resorting to posting — protecting your FED case from dismissal.",
  },
  {
    question: "How does GPS tracking specifically help property managers in eviction proceedings?",
    answer: "Tenants facing eviction are highly motivated to challenge procedural aspects of the process, including claiming they were never properly served with the notice to quit or FED summons. GPS tracking provides objective, timestamped coordinates showing our process server was physically present at the rental property at a specific time. Combined with photo documentation of the property and affidavit of service, this creates a service record that is extremely difficult for a tenant to successfully challenge in district court, protecting your eviction timeline.",
  },
  {
    question: "Do you serve documents in commercial property evictions as well as residential?",
    answer: "Yes. While much of our property management work involves residential tenants, we also handle commercial lease FED proceedings, commercial tenant notice service, and service of process in commercial property disputes. Commercial evictions may involve different notice requirements and procedures than residential cases — we can discuss the specifics of your commercial matter and confirm the appropriate service approach.",
  },
  {
    question: "How long does the Oklahoma eviction process typically take from notice to writ?",
    answer: "In Oklahoma, the eviction process typically takes 2-6 weeks from initial notice to writ of execution, assuming no complications. The 5-day notice period for nonpayment, plus time to file the FED petition, plus 10-14 days for the scheduled hearing, adds up quickly. Delays in service — or service that is successfully challenged — can add weeks to this timeline. Professional, GPS-verified service minimizes delay risk and keeps your eviction on schedule.",
  },
  {
    question: "Can a tenant be evicted without going to court in Oklahoma?",
    answer: "No. Oklahoma law strictly prohibits self-help evictions. A landlord cannot change locks, remove doors, shut off utilities, or physically remove a tenant's belongings without going through the court process and obtaining a writ of execution. Self-help eviction is illegal in Oklahoma and can expose the landlord to civil liability. The only lawful way to remove a non-paying or violating tenant is through the FED court process — which begins with properly served written notice.",
  },
  {
    question: "What happens to a tenant's belongings after an eviction in Oklahoma?",
    answer: "After a writ of possession is executed and the tenant is removed, any belongings left on the property must be handled according to Oklahoma law. Generally, the landlord must provide reasonable notice before disposing of abandoned property. Improper disposal of a tenant's belongings can create additional liability. We recommend consulting with a landlord-tenant attorney for specific guidance on abandoned property procedures after an eviction.",
  },
  {
    question: "What is substituted service and when is it used for eviction notices?",
    answer: "Substituted service means delivering the documents to another adult (age 15 or older) who resides at the property, rather than the tenant personally. It is used when the tenant cannot be personally reached after diligent attempts. Oklahoma courts require evidence of diligent attempts at personal service before substituted service is accepted. Our GPS-documented attempt logs provide exactly this evidence, protecting your eviction case from challenges based on service method.",
  },
  {
    question: "Can tenants challenge eviction based on improper service?",
    answer: "Yes — and they frequently do. A tenant facing eviction has a strong incentive to challenge any procedural weakness in the process, including claiming the notice or FED summons was improperly served. Courts take service requirements seriously because due process requires a defendant to have actual notice of proceedings against them. GPS-verified, professionally documented service is your best defense against service challenges that could reset your eviction timeline.",
  },
  {
    question: "Do you serve commercial eviction notices as well as residential?",
    answer: "Yes. Commercial lease FED proceedings involve different notice requirements and timelines than residential cases. Commercial leases may have specific notice provisions in the lease agreement itself that override statutory defaults. We handle commercial eviction notice service, commercial FED summons delivery, and related commercial property dispute document service. Contact us to discuss the specific requirements of your commercial lease and property.",
  },
  {
    question: "How do I submit multiple eviction service requests for my property portfolio?",
    answer: "Property management companies with multiple simultaneous eviction service needs can contact us to set up a dedicated account. We can accept batch submissions covering multiple properties and tenants, coordinate service across your portfolio, and provide consolidated status reporting and invoicing. Volume pricing is available for property management companies with regular service needs — visit our pricing page or contact us to discuss a custom arrangement.",
  },
  {
    question: "What documentation do you provide after serving an eviction notice?",
    answer: "After service, we provide a sworn affidavit of service that includes: the full name of the person served (or basis for substituted/posted service), the specific documents delivered, the exact date, time, and address of service, the method of service, GPS coordinates confirming server location at time of service, and the server's certification under oath. This affidavit is the critical document if service is ever challenged in the FED proceeding.",
  },
];

export default function ProcessServingForPropertyManagers() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema
          pageType="service"
          pageTitle="Process Serving for Property Managers Oklahoma"
          pageDescription="FED summons, eviction notices, and lease violation service for Oklahoma property management companies. GPS-verified, documented service across the Tulsa metro."
          pageUrl="https://justlegalsolutions.org/process-serving-for-property-managers"
          siteName="Just Legal Solutions"
          reviewCount={156}
          services={['Process Serving for Property Managers', 'Eviction Notice Service', 'FED Summons Service', 'Lease Violation Notice Delivery']}
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'Process Serving for Property Managers', url: '/process-serving-for-property-managers' },
          ]}
          faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
          keywords={['process server for property managers', 'eviction service property management', 'FED summons Oklahoma', 'eviction notice Tulsa']}
        />

        <LocalPromoBanner zips={[]} />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-blue-200 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Process Serving for Property Managers</span>
            </nav>
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="w-6 h-6 text-orange-400" />
                <span className="text-orange-300 font-semibold uppercase tracking-wide text-sm">Property Management Services</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Process Serving for Property Managers in Oklahoma</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Eviction notices, FED summons, and lease violation service — GPS-verified, properly documented, and ready to stand up in court. Tulsa metro and Creek County coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Request Eviction Service
                </Link>
                <Link href="/pricing" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Volume Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What We Handle for Property Managers</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Property management companies need a process serving partner who understands the eviction timeline, the required notice types, and the documentation standards that protect FED cases from dismissal.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: FileText,
                  title: 'Notice to Quit / Pay or Vacate',
                  desc: 'Proper service of the initial notice — the foundation of every Oklahoma eviction. We serve five-day nonpayment notices, cure-or-vacate notices, and unconditional quit notices with GPS documentation.',
                },
                {
                  icon: Scale,
                  title: 'FED Summons Service',
                  desc: 'After the FED petition is filed, the court issues a summons that must be served on the tenant. We handle personal service of FED summonses to keep your eviction on schedule.',
                },
                {
                  icon: AlertTriangle,
                  title: 'Lease Violation Notices',
                  desc: 'Written notices for lease violations — unauthorized occupants, pet violations, property damage, noise complaints, and other breaches requiring documented notice to the tenant.',
                },
                {
                  icon: Building2,
                  title: 'Multi-Property Coordination',
                  desc: 'Managing dozens or hundreds of units? Submit batch service requests and receive consolidated reporting. We coordinate service across all your properties with a single account manager.',
                },
                {
                  icon: Shield,
                  title: 'GPS-Verified Service',
                  desc: 'Every eviction notice and FED summons is GPS-tracked with timestamped coordinates and photo documentation — your best defense against tenant challenges to service.',
                },
                {
                  icon: Users,
                  title: 'Tenant Communication Documentation',
                  desc: 'Maintain a complete documented record of all legally required tenant communications, supporting your landlord-tenant compliance and protecting your right to proceed with eviction.',
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

        {/* Oklahoma Eviction Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Oklahoma Eviction Notice Requirements</h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Oklahoma&apos;s Residential Landlord and Tenant Act sets specific timing and content requirements for eviction notices. Proper service from the start keeps your eviction on track.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-10 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-amber-900 mb-2">Notice Requirements Are Strictly Enforced</h3>
                  <p className="text-amber-800">
                    Oklahoma district courts scrutinize eviction notices for proper form, content, and service. A defective notice — whether due to incorrect notice period, improper content, or defective service — can result in dismissal of your FED case. Always consult with a landlord-tenant attorney to ensure your notice is legally sufficient before serving.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { type: 'Nonpayment of Rent', notice: '5 days', desc: 'Written notice to pay overdue rent or vacate. Must specify the amount owed. Tenant has five days to pay in full or vacate before FED petition can be filed.' },
                { type: 'Lease Violation (Curable)', notice: 'Reasonable time', desc: 'Notice specifying the violation and giving the tenant a reasonable opportunity to cure. If not cured, landlord may proceed to terminate and file FED.' },
                { type: 'Month-to-Month Termination', notice: '30 days', desc: 'Either party may terminate a month-to-month tenancy with 30 days\' written notice. Proper service of this notice is required before the tenancy ends.' },
                { type: 'Unconditional Quit', notice: 'Varies', desc: 'For serious, repeated, or uncurable violations, Oklahoma law may permit unconditional quit notices. Specific requirements apply — consult an attorney.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-48 flex-shrink-0">
                      <span className="font-bold text-gray-800">{item.type}</span>
                      <div className="mt-1">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{item.notice}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">* Notice requirements are provided as general guidance only. Specific circumstances may vary. Consult a licensed Oklahoma attorney for legal advice on your eviction matter.</p>
          </div>
        </section>

        {/* Seasonal Eviction Patterns */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-blue-100">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Seasonal Eviction Patterns: Plan Ahead</h2>
                  <p className="text-gray-700 mb-4">
                    Oklahoma evictions often spike during winter months &mdash; December through February &mdash; when economic pressures, holiday spending, and cold weather intersect with rental payment difficulties. Property managers who wait until a tenant is already months behind risk losing revenue across multiple properties simultaneously during peak filing periods when court dockets are busiest.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Planning ahead means establishing your eviction service workflow <em>before</em> the seasonal spike hits. Under the <a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST12" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Oklahoma Residential Landlord and Tenant Act</a> and as administered by <a href="https://www.courts.ok.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Oklahoma Courts</a>, notice and FED summons requirements are strictly enforced regardless of season. Pre-qualify your notice types, set up your account, and be ready to submit batch requests the moment nonpayment occurs.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/eviction-notice-service" className="text-blue-600 hover:text-blue-800 underline font-medium text-sm">Eviction notice service →</Link>
                    <Link href="/rush-vs-standard-vs-same-day-service" className="text-blue-600 hover:text-blue-800 underline font-medium text-sm">Rush service options →</Link>
                    <Link href="/same-day-process-server" className="text-blue-600 hover:text-blue-800 underline font-medium text-sm">Same-day service →</Link>
                    <Link href="/pricing" className="text-blue-600 hover:text-blue-800 underline font-medium text-sm">Volume pricing →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GPS For Evictions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">GPS-Verified Eviction Service — Why It Matters</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 mb-4">
                  Tenant challenges to eviction notices are extremely common. A tenant who wants to delay eviction has strong incentive to claim in court that they were never served with the notice to quit or the FED summons. Without objective evidence, it often comes down to a process server&apos;s word versus a tenant&apos;s denial.
                </p>
                <p className="text-gray-700 mb-4">
                  GPS tracking eliminates this vulnerability. When our process server serves an eviction notice at your rental property, the GPS device captures precise coordinates placing the server at your specific address, with a timestamped record of the date and time. Photo documentation of the property exterior further corroborates the service.
                </p>
                <p className="text-gray-700">
                  The result: a service record that is objectively documented, not just sworn to — giving your FED case a substantially stronger foundation when tenant challenges arise.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="font-bold text-gray-800 mb-6 text-lg">What&apos;s Included With Every Service</h3>
                <ul className="space-y-3">
                  {[
                    'GPS coordinates at point of service',
                    'Encrypted UTC timestamp (local Oklahoma time)',
                    'Photo documentation of the property',
                    'Sworn affidavit of service',
                    'All attempt logs for posted service qualification',
                    'Returned within 24 hours of service',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <Link href="/eviction-notice-service" className="text-blue-600 hover:text-blue-800 font-medium text-sm underline">
                    Learn more about our eviction notice service →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Volume / Multi-Property */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Multi-Property Management Support</h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              Property management companies with large portfolios need a process serving partner who can handle volume without sacrificing documentation quality or service speed.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Building2, title: 'Batch Submissions', desc: 'Submit multiple eviction service assignments at once through our portal. Specify each property address, tenant name, and document type in a single submission.' },
                { icon: FileText, title: 'Consolidated Reporting', desc: 'Receive a single consolidated status report covering all active service assignments across your portfolio, with individual affidavits of service for each unit.' },
                { icon: Target, title: 'Volume Pricing', desc: 'Property management companies with recurring eviction service needs qualify for volume pricing. Visit our pricing page or contact us to discuss your portfolio size.' },
                { icon: Clock, title: 'Priority Scheduling', desc: 'Eviction timeline is money. Your assignments are prioritized for same-day or next-day service attempts to keep your FED proceedings on schedule.' },
                { icon: MapPin, title: 'Multi-County Coverage', desc: 'Managing properties across multiple Oklahoma counties? We cover Tulsa, Creek, Wagoner, Rogers, and surrounding counties under a single account.' },
                { icon: Users, title: 'Dedicated Account Manager', desc: 'Large property management accounts receive a dedicated point of contact who understands your portfolio, priorities, and documentation requirements.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-10 rounded-r-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Volume Pricing Available</h3>
              <p className="text-blue-800">
                Property management companies with regular eviction service needs may qualify for volume pricing. <Link href="/pricing" className="underline font-medium">Visit our pricing page</Link> for current rate information, or <Link href="/contact" className="underline font-medium">contact us</Link> to discuss a custom pricing arrangement for your portfolio.
              </p>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Coverage Area for Property Managers</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              We serve eviction notices and FED summonses across the Tulsa metropolitan area and surrounding counties, with extended coverage available statewide.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { region: 'Tulsa Metro', locations: ['Tulsa', 'Broken Arrow', 'Owasso', 'Jenks', 'Bixby', 'Sand Springs', 'Skiatook'] },
                { region: 'Creek County', locations: ['Sapulpa', 'Bristow', 'Drumright', 'Kellyville', 'Kiefer', 'Mannford'] },
                { region: 'Wagoner & Rogers County', locations: ['Wagoner', 'Broken Arrow East', 'Claremore', 'Catoosa', 'Verdigris'] },
                { region: 'Extended Coverage', locations: ['Osage County', 'Okmulgee County', 'Pawnee County', 'Mayes County', 'Additional counties by request'] },
              ].map((area, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                    {area.region}
                  </h3>
                  <ul className="space-y-1">
                    {area.locations.map((loc, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {loc}
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

        {/* Oklahoma Eviction Process Step by Step */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Oklahoma Eviction Process: Step by Step</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Understanding the full eviction timeline helps property managers plan ahead and avoid costly missteps. Each step carries specific service requirements under Oklahoma law.
            </p>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Written Notice to Tenant',
                  icon: FileText,
                  details: [
                    'Nonpayment of rent: 5-day notice to pay or vacate (Oklahoma Residential Landlord and Tenant Act)',
                    'Lease violation: notice to cure violation within a reasonable period',
                    'Month-to-month termination: 30-day written notice',
                  ],
                  note: 'EACH notice type has specific service requirements — improper notice delivery can void the entire eviction.',
                },
                {
                  step: 2,
                  title: 'File Forcible Entry and Detainer (FED) Petition',
                  icon: Gavel,
                  details: [
                    'Filed in district court in the county where the property is located',
                    'Petition must be served on the tenant with court summons',
                  ],
                  note: null,
                },
                {
                  step: 3,
                  title: 'Service of FED Summons',
                  icon: Target,
                  details: [
                    'This is where professional process serving is critical',
                    'The tenant must be personally served with the FED summons and petition',
                    'If personal service fails, substituted service or posting rules apply (requires court approval in some cases)',
                  ],
                  note: null,
                },
                {
                  step: 4,
                  title: 'FED Hearing',
                  icon: Scale,
                  details: [
                    'Typically scheduled 10\u201314 days after filing',
                    'If tenant is properly served and does not appear, default judgment may be entered',
                    'If tenant appears, hearing proceeds on the merits',
                  ],
                  note: null,
                },
                {
                  step: 5,
                  title: 'Writ of Execution (Writ of Possession)',
                  icon: Shield,
                  details: [
                    'After a judgment for possession is entered, landlord may obtain a writ of execution',
                    'Sheriff or constable executes the writ to remove the tenant',
                  ],
                  note: 'Only law enforcement may physically remove a tenant — landlords may NOT engage in self-help eviction.',
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <item.icon className="w-5 h-5 text-blue-600 mr-2" />
                        {item.title}
                      </h3>
                      <ul className="space-y-2 mb-2">
                        {item.details.map((d, j) => (
                          <li key={j} className="flex items-start text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                      {item.note && (
                        <p className="text-sm text-amber-700 bg-amber-50 rounded-lg px-4 py-2 mt-3 flex items-start">
                          <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <p className="text-blue-900 font-medium">
                &ldquo;Each step in the Oklahoma eviction process has specific service requirements. Missing a service requirement at any step can reset the clock — costing weeks of lost rent and legal fees.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Serving Tenants Who Are Avoiding Service */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Serving Tenants Who Are Avoiding Service</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Tenants facing eviction often try to delay the process by making service difficult. Just Legal Solutions has the experience, persistence, and documentation practices to achieve valid service even when tenants are evasive.
            </p>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                  Common Evasion Tactics
                </h3>
                <ul className="space-y-3">
                  {[
                    'Not answering the door despite being home',
                    'Refusing to identify themselves when confronted',
                    'Temporarily staying at another location',
                    'Having other household members claim the tenant doesn\u2019t live there',
                  ].map((tactic, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">{i + 1}</span>
                      {tactic}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <ListChecks className="w-5 h-5 text-blue-600 mr-2" />
                  How We Overcome Evasion
                </h3>
                <ul className="space-y-3">
                  {[
                    'Multiple service attempts at varying days and times (early morning, evening, weekend)',
                    'Surveillance-style patience: waiting in the area if the tenant is known to be home',
                    'Substituted service: delivering to another adult household member aged 15 or older plus mailing',
                    'Posting and mailing: as a last resort with proper documentation and (where required) court approval',
                    'GPS documentation of ALL attempts creates the record needed for substituted service or posting',
                  ].map((solution, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <p className="text-blue-900">
                Our attempt documentation log is designed to satisfy Oklahoma courts&apos; requirements for showing diligent service attempts before alternative methods are authorized. Every attempt is GPS-tracked, timestamped, and recorded in detail.
              </p>
            </div>
          </div>
        </section>

        {/* Multi-Property Portfolio Service */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Multi-Property Portfolio Service</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Property management companies with multiple properties — whether 10, 50, or 500+ units — benefit from a single process serving partner who delivers consistent, documented service across the entire portfolio.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Layers, title: 'Consistent Documentation', desc: 'The same GPS-verified, affidavit-backed documentation standard applies to every property in your portfolio — no variation in quality.' },
                { icon: ListChecks, title: 'Batch Submission', desc: 'Submit multiple service assignments at once for different properties. We process them efficiently and report status on each.' },
                { icon: TrendingUp, title: 'Route Optimization', desc: 'We coordinate service across multiple properties in the same trip where geography permits, reducing turnaround time.' },
                { icon: FileText, title: 'Consolidated Invoicing', desc: 'Receive a single consolidated invoice per billing period instead of per-property invoicing — simplifying your accounting.' },
                { icon: Users, title: 'Dedicated Account Contact', desc: 'A dedicated contact who knows your properties, your procedures, and your tenants — no need to re-explain every assignment.' },
                { icon: Clock, title: 'Real-Time Status Updates', desc: 'Know which properties have been served, which are pending, and which require additional attempts — all in real time.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <p className="text-blue-900 font-medium">
                &ldquo;Whether you manage 5 properties or 500, we provide the same GPS-verified, court-ready documentation for every single eviction notice.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Lease Violation Documentation */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Lease Violation Documentation</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Professional service documentation for lease violation notices creates a legally defensible record — even if the tenant refuses to acknowledge receipt. If a violation escalates to FED, your prior notices must demonstrate proper service.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Professional Service Matters for Violations</h3>
                <p className="text-gray-700 mb-4">
                  Many property managers deliver lease violation notices informally — taping a letter to the door or slipping it under the doormat. If that violation later escalates to an FED proceeding, the tenant&apos;s attorney can argue that prior notices were improperly served and potentially get the case dismissed.
                </p>
                <p className="text-gray-700 mb-4">
                  There is a significant legal difference between &ldquo;I taped it to the door&rdquo; and GPS-verified, photographed, affidavit-backed professional service. Professional documentation removes ambiguity and protects your right to proceed.
                </p>
                <p className="text-gray-700">
                  Professional service creates a legally defensible record even if the tenant refuses to acknowledge receipt — because your documentation proves delivery regardless of the tenant&apos;s response.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Violations Requiring Formal Notice</h3>
                <ul className="space-y-3">
                  {[
                    'Noise and nuisance complaints from other tenants or neighbors',
                    'Unauthorized occupants not listed on the lease',
                    'Property damage caused by the tenant',
                    'Unauthorized pets or pet policy violations',
                    'Illegal activity on the premises',
                    'Subletting without landlord permission',
                  ].map((violation, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                      {violation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, title: 'Noise / Nuisance', desc: 'Documented service of noise violation notices protects your right to escalate to lease termination if the behavior continues.' },
                { icon: Home, title: 'Unauthorized Occupants', desc: 'Formal notice of unauthorized occupant violations establishes the record needed if eviction becomes necessary.' },
                { icon: AlertTriangle, title: 'Property Damage', desc: 'Served damage notices with photo documentation create an objective record of the violation and your notification to the tenant.' },
                { icon: Shield, title: 'Pet Policy Violations', desc: 'Pet policy violation notices served professionally prevent tenants from claiming they were never informed of the violation.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                    <card.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{card.title}</h4>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              ))}
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Client Success: 15 Eviction Notices in 72 Hours</h2>
                  <p className="text-gray-700 mb-4">
                    A Broken Arrow property management company needed to serve 15 eviction notices across multiple properties. Using our <Link href="/rush-vs-standard-vs-same-day-service" className="text-blue-600 hover:text-blue-800 underline">rush service</Link> with <Link href="/gps-tracked-process-serving" className="text-blue-600 hover:text-blue-800 underline">GPS tracking</Link>, all 15 tenants were served within 72 hours, and every <Link href="/affidavit-of-service" className="text-blue-600 hover:text-blue-800 underline">affidavit of service</Link> was filed with the <Link href="/counties/tulsa-county" className="text-blue-600 hover:text-blue-800 underline">Tulsa County</Link> Court Clerk &mdash; resulting in zero service challenges during proceedings.
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-800">15 of 15 serves completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-800">72-hour turnaround</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-800">All affidavits court-filed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-800">Zero service challenges</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic mt-4">Details generalized for client confidentiality.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources for Property Managers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resources for Property Managers</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Eviction &amp; Service Options</h3>
                <ul className="space-y-3">
                  <li><Link href="/eviction-notice-service" className="text-blue-600 hover:text-blue-800 underline text-sm">Eviction Notice Service — Dedicated Page</Link></li>
                  <li><Link href="/blog/how-to-serve-eviction-notices-in-oklahoma" className="text-blue-600 hover:text-blue-800 underline text-sm">How to Serve Eviction Notices in Oklahoma (Blog)</Link></li>
                  <li><Link href="/gps-tracked-process-serving" className="text-blue-600 hover:text-blue-800 underline text-sm">GPS-Tracked Process Serving — How It Works</Link></li>
                  <li><Link href="/rush-vs-standard-vs-same-day-service" className="text-blue-600 hover:text-blue-800 underline text-sm">Rush vs. Standard vs. Same-Day Service</Link></li>
                  <li><Link href="/same-day-process-server" className="text-blue-600 hover:text-blue-800 underline text-sm">Same-Day Process Server for Urgent Evictions</Link></li>
                  <li><Link href="/affidavit-of-service" className="text-blue-600 hover:text-blue-800 underline text-sm">Affidavit of Service — Documentation Standards</Link></li>
                  <li><Link href="/courthouse-filing-services" className="text-blue-600 hover:text-blue-800 underline text-sm">Courthouse Filing Services</Link></li>
                  <li><Link href="/skip-tracing" className="text-blue-600 hover:text-blue-800 underline text-sm">Skip Tracing for Tenants Who Cannot Be Located</Link></li>
                  <li><Link href="/what-happens-if-someone-refuses-service" className="text-blue-600 hover:text-blue-800 underline text-sm">What Happens If a Tenant Refuses Service</Link></li>
                  <li><Link href="/pricing" className="text-blue-600 hover:text-blue-800 underline text-sm">Pricing &amp; Volume Discounts for Property Managers</Link></li>
                  <li><Link href="/oklahoma-process-server-laws" className="text-blue-600 hover:text-blue-800 underline text-sm">Oklahoma Process Server Laws &amp; Requirements</Link></li>
                  <li><Link href="/ultimate-guide-process-serving-oklahoma" className="text-blue-600 hover:text-blue-800 underline text-sm">Ultimate Guide to Process Serving in Oklahoma</Link></li>
                  <li><Link href="/counties/tulsa-county" className="text-blue-600 hover:text-blue-800 underline text-sm">Tulsa County — Local Coverage Details</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Related B2B Services</h3>
                <ul className="space-y-3">
                  <li><Link href="/process-serving-for-insurance-companies" className="text-blue-600 hover:text-blue-800 underline text-sm">Process Serving for Insurance Companies</Link></li>
                  <li><Link href="/process-serving-for-debt-collection" className="text-blue-600 hover:text-blue-800 underline text-sm">Process Serving for Debt Collection Agencies</Link></li>
                </ul>
                <h3 className="text-lg font-bold text-gray-800 mb-4 mt-6">External Authority Resources</h3>
                <ul className="space-y-3">
                  <li><a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST12" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm">Oklahoma Statutes Title 12 — Landlord &amp; Tenant Act (OSCN)</a></li>
                  <li><a href="https://www.courts.ok.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm">Oklahoma Courts — Official Site</a></li>
                  <li><a href="https://napps.org" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:text-blue-800 underline text-sm">NAPPS — National Association of Professional Process Servers</a></li>
                  <li><a href="https://www.okbar.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-sm">Oklahoma Bar Association — Find a Landlord-Tenant Attorney</a></li>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Streamline Your Eviction Process?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Set up your property management account today and get GPS-verified eviction notice service that stands up in court — across all your Oklahoma properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Request Service Now
              </Link>
              <Link href="/eviction-notice-service" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Eviction Notice Service
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
