import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Clock, Zap, Shield, AlertTriangle, Star, FileText, MapPin, ListChecks, ArrowRight } from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export const metadata: Metadata = {
  title: 'Rush vs Standard vs Same-Day Process Serving | Just Legal Solutions',
  description: 'Compare our three process serving tiers: Standard (5-7 days), Rush (24-48 hours), and Same-Day service. Find the right option for your Oklahoma legal needs.',
  keywords: 'rush process server, same-day process serving, standard process serving, process server speed, urgent process server Oklahoma, fast process server Tulsa',
  authors: [{ name: 'Just Legal Solutions', url: 'https://justlegalsolutions.org' }],
  creator: 'Just Legal Solutions',
  publisher: 'Just Legal Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Rush vs Standard vs Same-Day Process Serving',
    description: 'Compare our three process serving tiers to find the right option for your Oklahoma legal needs.',
    url: 'https://justlegalsolutions.org/rush-vs-standard-vs-same-day-service',
    siteName: 'Just Legal Solutions',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630, alt: 'Process serving service tiers comparison' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rush vs Standard vs Same-Day Process Serving',
    description: 'Compare our three process serving tiers.',
    images: ['https://justlegalsolutions.org/og-image.png'],
  },
  alternates: { canonical: 'https://justlegalsolutions.org/rush-vs-standard-vs-same-day-service' },
  other: {
    'ai-content-type': 'comparison',
    'ai-summary': 'Comparison of three process serving service tiers: Standard (5-7 days), Rush (24-48 hours), and Same-Day service in Oklahoma',
    'ai-key-facts': 'Three service tiers, GPS tracking included in all tiers, Same-day available for emergencies, Statewide Oklahoma coverage',
  },
};

const faqs = [
  {
    question: 'What is the difference between Standard, Rush, and Same-Day process serving?',
    answer:
      'Standard service is designed for routine filings and typically completes within 5–7 business days with multiple well-timed attempts. Rush service prioritizes your papers for service within roughly 24–48 hours, ideal when courts or opposing counsel have set near-term deadlines. Same-day process serving is reserved for situations where you need a rush process server dispatched within hours, such as day-of filing deadlines, emergency hearings, or last-minute settlements in Oklahoma courts.',
  },
  {
    question: 'How fast can a process server realistically serve papers in Oklahoma?',
    answer:
      'How fast a process server can complete service depends on address quality, access to the location, and when you place the order. With a same-day process serving tier, attempts can begin within hours of approval when the address is in our primary Oklahoma coverage area. Rush service targets the next business day or within 24–48 hours. Standard service focuses on strategic timing over several days to catch the defendant at home or work while still meeting most 12 O.S. § 2005 response and hearing timelines.',
  },
  {
    question: 'Is GPS tracking included in every service tier?',
    answer:
      'Yes. All three tiers—Standard, Rush, and Same-Day—use GPS-tracked attempts with timestamped logs. Each attempt records location data and time of visit so that your affidavit is backed by objective technology. This is especially helpful if opposing counsel questions whether diligent attempts were made before seeking substitute service or publication under Oklahoma rules.',
  },
  {
    question: 'When should I upgrade from Standard to Rush or Same-Day service?',
    answer:
      'Consider upgrading when your court date is close, your filing has strict response windows under 12 O.S. § 2005, or you suspect the defendant may attempt to avoid service. If you have less than two weeks before a hearing, Rush service is often the better fit. When a judge orders service completed by a specific same-day or next-day deadline, or you are dealing with an emergency protective order or eviction setting, a same-day process server is usually the safest choice.',
  },
  {
    question: 'Do all tiers include an affidavit of service for my Oklahoma case?',
    answer:
      'Every tier includes a detailed affidavit of service prepared to comply with Oklahoma requirements. The affidavit outlines who was served, what documents were delivered, the method used, and the exact date and time of service. For Rush and Same-Day tiers, affidavit preparation and delivery are prioritized so you can quickly file proof of service with the appropriate Oklahoma court clerk.',
  },
  {
    question: 'Can I combine process serving tiers with skip tracing or stake-out services?',
    answer:
      'Yes. When an address is outdated or the defendant is actively avoiding service, you can pair any tier with add-on services such as skip tracing, targeted stake-outs during likely presence windows, or additional attempts in multiple locations. These add-ons are tailored to your case needs and can help ensure that even difficult or evasive recipients are ultimately located and served in compliance with Oklahoma law.',
  },
  {
    question: 'How do I choose the right tier for my Oklahoma matter?',
    answer:
      'Start by looking at your hearing date, any court-ordered deadlines, and the service requirements under 12 O.S. § 2005. If your event is several weeks away and the defendant is stable at a known address, Standard service usually provides plenty of time. If you are inside a two-week window or need extra confidence on timing, Rush service is a strong middle option. For same-day hearings, emergency relief, or situations where delaying service could harm your case, same-day process serving is typically the most appropriate.',
  },
  {
    question: 'Does same-day process serving cover weekends and holidays in Oklahoma?',
    answer:
      'Just Legal Solutions offers emergency and weekend process serving for genuine urgent matters. While standard business days apply to most service tiers, our weekend and after-hours service is available for emergency protective orders, time-sensitive eviction notices, and situations where court-ordered service must occur on a specific day. Visit our weekend emergency service page for details. An additional rush premium applies to after-hours and weekend service.',
  },
  {
    question: 'What counties in Oklahoma does Just Legal Solutions cover for process serving?',
    answer:
      'Just Legal Solutions provides process serving across all 77 Oklahoma counties. Our primary same-day and rush coverage area is the Tulsa metropolitan region including Tulsa County, Creek County, Wagoner County, Rogers County, Osage County, and adjacent counties. For rural or distant counties, we offer statewide coverage with adjusted timelines. Visit our service areas page for a complete county-by-county breakdown.',
  },
  {
    question: 'What documentation do I receive after service is completed?',
    answer:
      'After service is completed under any tier, you receive a sworn affidavit of service prepared in accordance with Oklahoma requirements, GPS coordinates and timestamp of the service attempt, photographic documentation where applicable, and case status updates. For Rush and Same-Day tiers, affidavit preparation and delivery are prioritized so you can promptly file proof of service with the appropriate Oklahoma court clerk.',
  },
  {
    question: 'Can I request a specific process server or escalate mid-assignment?',
    answer:
      'Contact Just Legal Solutions if you need to escalate an in-progress Standard assignment to Rush or Same-Day service. While we cannot always guarantee a specific individual server, we can upgrade the priority level of your assignment. Upgrades are subject to availability and the geographic location of the service address. Contact our office as soon as you know a deadline has changed.',
  },
];

export default function RushVsStandardVsSameDayService() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema
          pageType="service"
          pageTitle="Rush vs Standard vs Same-Day Process Serving"
          pageDescription="Compare process serving tiers"
          pageUrl="https://justlegalsolutions.org/rush-vs-standard-vs-same-day-service"
          siteName="Just Legal Solutions"
          reviewCount={156}
          services={['Standard Process Serving', 'Rush Process Serving', 'Same-Day Process Serving']}
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'Process Serving', url: '/process-serving' },
            { name: 'Service Tiers', url: '/rush-vs-standard-vs-same-day-service' },
          ]}
          faqItems={faqs.map(f => ({ question: f.question, answer: f.answer }))}
          keywords={['rush process server', 'same-day process serving', 'standard process serving']}
        />

        <LocalPromoBanner zips={[]} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-blue-200 mb-8">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/process-serving" className="hover:text-white">
                Process Serving
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Service Tiers</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Rush vs Standard vs Same-Day Process Serving</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Choose the right service tier for your timeline and budget in Oklahoma courts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Free Quote
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Updated April 2, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Compliant with 12 O.S. 
                  <span className="align-top">§</span> 2005 timelines
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>Trusted by Oklahoma law firms</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview / Intro Section */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2 space-y-6 text-gray-800 leading-relaxed">
                <p>
                  When you are asking, <strong>“how fast can a process server serve someone in Oklahoma?”</strong> the real answer is
                  that speed depends on the tier you choose. Just Legal Solutions offers three clearly defined service levels—Standard,
                  Rush, and Same-Day—so you can match the urgency of your case to the right response time without overpaying or
                  taking unnecessary risks with court deadlines.
                </p>
                <p>
                  Each tier is built around Oklahoma procedure, including the response and notice timelines in <strong>12 O.S. 
                    <span className="align-top">§</span> 2005</strong>. All service levels use GPS-tracked attempts, photo documentation where
                  appropriate, and court-ready affidavits. The difference is <em>how fast</em> your papers move to the front of the line and
                  how aggressively our team schedules attempts throughout the day and evening.
                </p>
                <p>
                  This page walks through what is included in each option, when to choose Standard service, when a rush process server
                  is a better fit, and when only same-day process serving will properly protect your client or legal rights. Along the
                  way you will find internal links to more detailed resources, including our core{' '}
                  <Link href="/process-serving" className="text-blue-700 font-semibold hover:underline">
                    process serving overview
                  </Link>{' '}
                  and our dedicated pages for{' '}
                  <Link href="/same-day-process-server" className="text-blue-700 font-semibold hover:underline">
                    same-day process servers
                  </Link>{' '}
                  and{' '}
                  <Link href="/urgent-process-server" className="text-blue-700 font-semibold hover:underline">
                    urgent process server support
                  </Link>
                  .
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">At-a-Glance Service Tiers</h3>
                <p className="text-blue-800 mb-3">
                  All tiers include GPS-tracked attempts, photo evidence when appropriate, and a notarized affidavit of service. The
                  only change is how quickly we dispatch and how tightly we compress your service window.
                </p>
                <ul className="space-y-2 text-sm text-blue-900">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 mt-0.5" />
                    <span>
                      <strong>Standard Service:</strong> 5–7 business days, best for routine filings and stable defendants.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 mt-0.5" />
                    <span>
                      <strong>Rush Service:</strong> 24–48 hour window for time-sensitive but not emergency matters.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 mt-0.5" />
                    <span>
                      <strong>Same-Day Service:</strong> Attempts within hours for true emergencies and last-minute orders.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Three-column comparison cards */}
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Compare Our Process Serving Tiers</h2>
              <div className="hidden md:flex items-center gap-2 text-sm text-slate-700">
                <FileText className="w-4 h-4" />
                <span>Every tier includes a detailed Oklahoma-compliant affidavit of service.</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Standard Tier */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col">
                <div className="px-6 pt-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        Standard Service
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">5–7 business days</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Most economical
                    </span>
                  </div>
                  <p className="text-sm text-slate-700">
                    Designed for routine filings where you have breathing room before hearings or responsive pleading deadlines.
                  </p>
                </div>
                <div className="px-6 py-4 flex-1">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Best for:</p>
                  <ul className="space-y-1.5 text-sm text-slate-700 mb-4">
                    <li>• New civil cases with 20-day response windows</li>
                    <li>• Family law matters with known, stable addresses</li>
                    <li>• Business disputes where service is not urgent</li>
                    <li>• Landlord-tenant matters filed well in advance</li>
                  </ul>
                  <p className="text-sm font-semibold text-slate-900 mb-2">What&apos;s included:</p>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Multiple attempts over 5–7 business days</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>GPS-tracked locations and timestamps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-700" />
                      <span>Notarized Oklahoma affidavit of service</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <span>Court-ready documentation for challenges</span>
                    </li>
                  </ul>
                </div>
                <div className="px-6 pb-6 pt-2 mt-auto">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center w-full text-sm font-semibold text-blue-700 border border-blue-200 rounded-lg py-2.5 hover:bg-blue-50 transition-colors"
                  >
                    View Standard tier details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Rush Tier */}
              <div className="bg-white rounded-2xl shadow-lg border-2 border-amber-300 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
                <div className="px-6 pt-8 pb-4 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-amber-500" />
                        Rush Service
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">Target 24–48 hours</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-amber-600">Priority routing</span>
                  </div>
                  <p className="text-sm text-slate-700">
                    A rush process server tier that moves your file close to the top of the queue while keeping costs reasonable for
                    law firms and self-represented litigants.
                  </p>
                </div>
                <div className="px-6 py-4 flex-1">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Best for:</p>
                  <ul className="space-y-1.5 text-sm text-slate-700 mb-4">
                    <li>• Hearings 7–14 days away</li>
                    <li>• Matters where opposing counsel demands quick proof</li>
                    <li>• Parties who travel for work or keep odd hours</li>
                    <li>• Cases needing extra assurance on timing</li>
                  </ul>
                  <p className="text-sm font-semibold text-slate-900 mb-2">What&apos;s included:</p>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Attempts prioritized within a 24–48 hour window</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>GPS and photo documentation where appropriate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-700" />
                      <span>Expedited affidavit preparation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500" />
                      <span>Proactive status updates to your team</span>
                    </li>
                  </ul>
                </div>
                <div className="px-6 pb-6 pt-2 mt-auto">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center w-full text-sm font-semibold text-amber-700 border border-amber-300 rounded-lg py-2.5 hover:bg-amber-50 transition-colors"
                  >
                    View Rush tier options
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Same-Day Tier */}
              <div className="bg-white rounded-2xl shadow-lg border-2 border-red-300 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Emergency
                </div>
                <div className="px-6 pt-8 pb-4 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        Same-Day Service
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">Within hours of approval</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-red-600">Fastest response</span>
                  </div>
                  <p className="text-sm text-slate-700">
                    For non-negotiable deadlines, emergency hearings, and last-minute orders where delaying service could cause
                    serious prejudice to your case or client.
                  </p>
                </div>
                <div className="px-6 py-4 flex-1">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Best for:</p>
                  <ul className="space-y-1.5 text-sm text-slate-700 mb-4">
                    <li>• Same-day or next-morning hearings</li>
                    <li>• Emergency family law or protective relief</li>
                    <li>• Expiring settlement offers or judgment deadlines</li>
                    <li>• Weekend or after-hours crisis situations</li>
                  </ul>
                  <p className="text-sm font-semibold text-slate-900 mb-2">What&apos;s included:</p>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Dispatch within hours when capacity allows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>Real-time GPS-tracked attempts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-slate-700" />
                      <span>Fast-tracked affidavit for court filing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-red-600" />
                      <span>Priority communication with your team</span>
                    </li>
                  </ul>
                </div>
                <div className="px-6 pb-6 pt-2 mt-auto">
                  <Link
                    href="/same-day-process-server"
                    className="inline-flex items-center justify-center w-full text-sm font-semibold text-red-700 border border-red-300 rounded-lg py-2.5 hover:bg-red-50 transition-colors"
                  >
                    Explore Same-Day service
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-700">
              For a full breakdown of fees and any add-ons, review our{' '}
              <Link href="/pricing" className="text-blue-700 font-semibold hover:underline">
                pricing page
              </Link>
              .
            </p>
          </div>
        </section>

        {/* When to choose each tier */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">When to Choose Each Service Tier</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  The right process serving tier depends on more than just how fast you want things done. You also need to consider
                  the type of case, the personality of the defendant, the court&apos;s expectations, and the specific timing rules under
                  Oklahoma law. Here is a practical framework you can use in real-world scenarios.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Start with your court date and count backwards using the service and response windows in 12 O.S. 
                  <span className="align-top">§</span> 2005. Then ask whether the person to be served keeps predictable hours, whether they have a
                  history of avoiding legal mail or calls, and whether any downstream actions—such as wage garnishments or eviction
                  lockouts—depend on prompt proof of service.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-2 rounded-r-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Fast Decision Checklist</h3>
                <p className="text-blue-800 mb-2">
                  Use this quick checklist when you are short on time and need to pick a tier confidently:
                </p>
                <ul className="list-disc list-inside text-blue-900 space-y-1 text-sm">
                  <li>Is your hearing or deadline less than 14 days away?</li>
                  <li>Has the defendant dodged calls, mail, or prior service attempts?</li>
                  <li>Will a delay in service risk dismissal or continuance?</li>
                  <li>Do you need an affidavit on file before a specific motion date?</li>
                  <li>Are there weekends or holidays that reduce business days?</li>
                </ul>
                <p className="text-blue-800 mt-3 text-sm">
                  If you answered yes to several of these questions, a Rush or Same-Day tier is usually the safer choice.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Standard Service Scenarios</h3>
                <p className="text-slate-700 text-sm mb-3">
                  Standard service is ideal when you have a cushion of time and a cooperative or predictable recipient.
                </p>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1.5">
                  <li>Filing a new civil petition with a 20-day answer deadline.</li>
                  <li>Serving a local business at a registered office with set hours.</li>
                  <li>Routine post-judgment collection actions where no hearing is set.</li>
                  <li>Family law cases where parties still communicate reasonably.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Rush Service Scenarios</h3>
                <p className="text-slate-700 text-sm mb-3">
                  Rush service fits matters that are important and time-sensitive, but not quite in emergency territory.
                </p>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1.5">
                  <li>Hearings or conferences scheduled in the next one to two weeks.</li>
                  <li>Cases where opposing counsel is monitoring service closely.</li>
                  <li>Employment disputes where the employee may relocate quickly.</li>
                  <li>Last-minute filings that still allow a day or two of buffer.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Same-Day Service Scenarios</h3>
                <p className="text-slate-700 text-sm mb-3">
                  Same-day process serving is reserved for files where any delay creates unacceptable risk.
                </p>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1.5">
                  <li>Emergency custody, visitation, or support hearings.</li>
                  <li>Time-limited protection orders and injunctive relief.</li>
                  <li>Evictions scheduled for immediate lockout dates.</li>
                  <li>Matters where a judge has set a same-day service directive.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cost-Benefit Analysis */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Cost-Benefit Analysis: Choosing the Right Service Tier</h2>
            <p className="text-center text-slate-700 mb-10 max-w-3xl mx-auto">
              The least expensive option is not always the most economical when you factor in the cost of a continuance, a missed default judgment, or a motion to quash caused by a service challenge. Here&apos;s how to think about the real value of each tier relative to the risks in your case.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Standard — Value Case
                </h3>
                <p className="text-slate-700 text-sm mb-4">
                  Standard service offers the lowest per-service cost and is appropriate when time is not a constraint. The &ldquo;risk cost&rdquo; is low when you have weeks before your deadline and the defendant is readily accessible at a known address. For routine filings — new civil petitions with a 20-day answer window, family law matters with stable parties — Standard is the economical choice.
                </p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Lowest service fee per document</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Multiple attempts over 5–7 days</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Same GPS documentation as all tiers</span></li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  Rush — Insurance Value
                </h3>
                <p className="text-slate-700 text-sm mb-4">
                  The premium for Rush service is typically far less than the cost of one continuance, one missed default, or one rescheduled hearing. When you&apos;re inside a two-week window, Rush service is frequently the most cost-effective choice on a risk-adjusted basis — particularly for matters where opposing counsel is monitoring service closely. Compare all tier costs on our <Link href="/pricing" className="text-blue-700 font-semibold hover:underline">pricing page</Link>.
                </p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Modest premium over Standard</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Dramatically reduces deadline risk</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Preferred by high-volume Oklahoma firms</span></li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Same-Day — Emergency Value
                </h3>
                <p className="text-slate-700 text-sm mb-4">
                  Same-day service carries the highest per-service premium — but when the alternative is a dismissed case, a continued hearing, or a defendant who disappears overnight, the value proposition is clear. Emergency service exists because legal emergencies exist. Available for <Link href="/weekend-emergency" className="text-blue-700 font-semibold hover:underline">weekend and after-hours situations</Link> with advance arrangement.
                </p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Highest fee, justified by true urgency</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Prevents case-ending procedural failures</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Pairs with <Link href="/skip-tracing" className="text-blue-600 hover:underline font-medium">skip tracing</Link> for evasive parties</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Additional Resources for Your Oklahoma Case</h3>
              <p className="text-blue-800 mb-3 text-sm">
                Before selecting a tier, review these resources for the legal context behind service timelines and documentation requirements in Oklahoma courts.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/ultimate-guide-process-serving-oklahoma" className="text-blue-700 font-semibold hover:underline">Ultimate Guide: Process Serving in Oklahoma →</Link>
                <Link href="/oklahoma-process-server-laws" className="text-blue-700 font-semibold hover:underline">Oklahoma Process Server Laws →</Link>
                <Link href="/affidavit-of-service" className="text-blue-700 font-semibold hover:underline">Affidavit of Service Documentation →</Link>
                <Link href="/what-happens-if-someone-refuses-service" className="text-blue-700 font-semibold hover:underline">When Service Is Refused →</Link>
                <Link href="/courthouse-filing-services" className="text-blue-700 font-semibold hover:underline">Courthouse Filing Services →</Link>
                <Link href="/gps-tracked-process-serving" className="text-blue-700 font-semibold hover:underline">GPS-Tracked Service →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Licensing */}
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Licensed, Credentialed Oklahoma Process Servers</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Every process server employed by Just Legal Solutions is licensed and in full compliance with <strong>12 O.S. § 158.1</strong> — Oklahoma&apos;s statute governing the certification requirements for professional process servers. This means our servers have passed required background checks, carry valid Oklahoma certification, and operate within the legal boundaries that protect the integrity of your service of process across all three service tiers.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Oklahoma&apos;s certification requirement under 12 O.S. § 158.1 was designed to ensure that only qualified, vetted individuals serve legal process in the state. Hiring an unlicensed process server — or attempting service through informal channels — creates serious risk that the service will be challenged successfully and rejected by the court, potentially causing your case to be dismissed or reset regardless of which speed tier you selected.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Our team also maintains professional membership with the <a href="https://napps.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">National Association of Professional Process Servers (NAPPS)</a>, the leading industry organization for process serving professionals. NAPPS membership signals a commitment to professional standards, ethical conduct, and continuing education in process serving law and best practices — including the latest developments in <Link href="/gps-tracked-process-serving" className="text-blue-700 font-semibold hover:underline">GPS-tracked service documentation</Link>.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  For a comprehensive overview of Oklahoma&apos;s process serving rules, licensing requirements, and procedures applicable to all service tiers, visit our <Link href="/oklahoma-process-server-laws" className="text-blue-700 font-semibold hover:underline">Oklahoma process server laws guide</Link> and our <Link href="/ultimate-guide-process-serving-oklahoma" className="text-blue-700 font-semibold hover:underline">Ultimate Guide to Process Serving in Oklahoma</Link>. For questions about how licensing intersects with specific case types, the <a href="https://www.okbar.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Oklahoma Bar Association</a> maintains resources for attorneys and litigants. The full text of applicable statutes is available at <a href="https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST12" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Oklahoma Statutes Title 12 via OSCN</a>.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3">Why Licensing Matters for Your Case</h3>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Service validity:</strong> Service by an unlicensed individual may be void under Oklahoma law, meaning your case could start over regardless of which tier you paid for.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Affidavit authenticity:</strong> Only a properly certified process server&apos;s affidavit carries full evidentiary weight under 12 O.S. § 158.1 in Oklahoma courts.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Professional accountability:</strong> Licensed servers are subject to professional discipline, providing clients an additional layer of protection and recourse.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>GPS + licensed combination:</strong> GPS-tracked service by a licensed server creates the strongest possible proof of service record at any speed tier.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-semibold text-slate-900 mb-3">Quick Reference Links</h3>
                  <div className="space-y-2">
                    <Link href="/process-serving" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"><ChevronRight className="w-3 h-3" />Process serving overview</Link>
                    <Link href="/same-day-process-server" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"><ChevronRight className="w-3 h-3" />Same-day process server</Link>
                    <Link href="/gps-tracked-process-serving" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"><ChevronRight className="w-3 h-3" />GPS-tracked process serving</Link>
                    <Link href="/courthouse-filing-services" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"><ChevronRight className="w-3 h-3" />Courthouse filing services</Link>
                    <Link href="/affidavit-of-service" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"><ChevronRight className="w-3 h-3" />Affidavit of service documentation</Link>
                    <Link href="/what-happens-if-someone-refuses-service" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"><ChevronRight className="w-3 h-3" />When someone refuses service</Link>
                    <Link href="/weekend-emergency" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"><ChevronRight className="w-3 h-3" />Weekend &amp; emergency process serving</Link>
                    <Link href="/skip-tracing" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"><ChevronRight className="w-3 h-3" />Skip tracing — locate parties</Link>
                    <Link href="/pricing" className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"><ChevronRight className="w-3 h-3" />View pricing for all service tiers</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add-on services section */}
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Add-On Services That Strengthen Any Tier</h2>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Sometimes the question is not only <em>how fast process servers move</em>, but also how deeply they investigate and how
                  persistent they are when the subject is difficult to reach. Just Legal Solutions offers several optional services that
                  can be paired with any tier to increase your chances of successful service in challenging Oklahoma cases.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  When an address is stale or the person being served is intentionally avoiding contact, you can combine your chosen
                  tier with{' '}
                  <Link href="/skip-tracing" className="text-blue-700 font-semibold hover:underline">
                    skip tracing investigations
                  </Link>
                  , targeted stake-outs during high-likelihood windows, and extra attempts at alternate locations such as workplaces,
                  relatives&apos; homes, or frequently visited businesses.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-2 rounded-r-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Popular Add-Ons</h3>
                <ul className="space-y-2 text-blue-900 text-sm">
                  <li className="flex items-start gap-2">
                    <ListChecks className="w-4 h-4 mt-0.5" />
                    <span>Skip tracing to locate updated addresses, employers, or contact points.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 mt-0.5" />
                    <span>Evening and weekend stake-outs in high-traffic windows.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 mt-0.5" />
                    <span>Safety-focused protocols for high-conflict or high-profile serves.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5" />
                    <span>Additional attempts at multiple residential or business locations.</span>
                  </li>
                </ul>
                <p className="text-blue-800 mt-3 text-sm">
                  For matters that combine tight deadlines with evasive recipients, pairing a Rush or Same-Day tier with these add-ons
                  can be the difference between dismissals and successfully completed service.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm text-slate-700">
              For GPS-focused updates and audit trails, explore our dedicated{' '}
              <Link href="/gps-tracked-process-serving" className="text-blue-700 font-semibold hover:underline">
                GPS-tracked process serving overview
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Oklahoma-specific timing and coverage */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Oklahoma Deadline Considerations Under 12 O.S. 
                  <span className="align-top">§</span> 2005
                </h2>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Oklahoma&apos;s civil procedure rules outline specific timelines for service, responses, and hearings. While the exact
                  deadlines depend on your case type, many matters require service within a defined window after filing and allow the
                  recipient a set number of days to answer. Choosing the right service speed is essential to avoid dismissal, default
                  issues, or last-minute continuances.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Standard service is generally compatible with filings made several weeks before anticipated hearings. However, once
                  you are inside the two-week zone, a rush process server is often a smarter option because it reduces the risk that
                  weekends, holidays, or access issues will push your attempts too close to critical dates. When a judge explicitly ties
                  relief to same-day or next-day service, or when your case hinges on rapid notice—such as emergency family law
                  matters—same-day service is the recommended tier.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Remember that mailing, substitute service, or publication can extend timelines in ways that interact with 12 O.S. 
                  <span className="align-top">§</span> 2005. Working with an Oklahoma-focused provider that understands these interactions helps ensure your
                  service choices support, rather than undermine, your overall litigation strategy.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-2 rounded-r-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Coverage Area & Availability</h3>
                <p className="text-blue-800 mb-2 text-sm">
                  Just Legal Solutions coordinates service across major metro areas and many rural counties in Oklahoma. Availability by
                  tier generally follows this pattern:
                </p>
                <ul className="space-y-1.5 text-blue-900 text-sm">
                  <li>• <strong>Standard:</strong> Broadest statewide coverage, including rural addresses.</li>
                  <li>• <strong>Rush:</strong> Widely available in and around population centers, with scheduling in select rural areas.</li>
                  <li>• <strong>Same-Day:</strong> Concentrated in metropolitan corridors where we can dispatch quickly.</li>
                </ul>
                <p className="text-blue-800 mt-3 text-sm">
                  For a full list of locations and typical scheduling patterns, review our{' '}
                  <Link href="/service-areas" className="text-blue-700 font-semibold hover:underline">
                    Oklahoma service areas page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Decision framework CTA */}
        <section className="bg-slate-900 text-white">
          <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Not Sure Which Tier Fits Your Case?</h2>
                <p className="text-slate-200 mb-4 leading-relaxed">
                  Whether you are a seasoned Oklahoma litigator or filing on your own for the first time, it can be hard to decide how
                  aggressive to be about service. Over-ordering speed can strain budgets, but underestimating timelines can derail an
                  otherwise strong case.
                </p>
                <p className="text-slate-200 mb-4 leading-relaxed">
                  A helpful approach is to assign each matter a risk level. Low-risk, routine files can usually remain on the Standard
                  tier. Moderate-risk or visibility cases often justify Rush service so you are not explaining to a judge why proof of
                  service arrived late. High-risk or emergency matters, especially those involving safety or housing, generally belong
                  on the Same-Day track.
                </p>
                <p className="text-slate-200 mb-4 leading-relaxed">
                  When you are ready to move forward, you can request a quote and double-check that your expected court dates line up
                  with the selected tier&apos;s timing by visiting our{' '}
                  <Link href="/pricing" className="text-orange-300 font-semibold hover:underline">
                    pricing page
                  </Link>
                  .
                </p>
              </div>
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-orange-400" />
                  Quick Tier Selection Guide
                </h3>
                <ol className="list-decimal list-inside text-sm text-slate-100 space-y-2">
                  <li>Confirm filing and hearing dates on your Oklahoma docket.</li>
                  <li>Review how 12 O.S. 
                    <span className="align-top">§</span> 2005 applies to service and response timelines.
                  </li>
                  <li>Assess how likely the defendant is to cooperate or evade service.</li>
                  <li>Choose Standard if time is plentiful and risk is low.</li>
                  <li>Choose Rush if you need service completed within a couple of days.</li>
                  <li>Choose Same-Day when any delay could harm your case outcome.</li>
                  <li>Pair your choice with add-ons like skip tracing when addresses are uncertain.</li>
                </ol>
              </div>
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
        <section className="bg-white">
          <div className="container mx-auto px-4 py-12 lg:py-16 max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions About Service Tiers</h2>
            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Star className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {index + 1}. {faq.question}
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency After-Hours Service */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-3">Emergency After-Hours &amp; Weekend Service</h2>
              <p className="text-blue-800 mb-4">
                Just Legal Solutions offers emergency process serving outside of standard business hours — including weekends and after-hours service — for genuine urgent situations. Emergency protective orders, last-minute court-ordered service, and time-critical eviction notices often cannot wait until Monday morning.
              </p>
              <p className="text-blue-800 mb-4">
                Our after-hours service is available by advance arrangement for verified urgent matters. Weekend service is dispatched from our Glenpool, Oklahoma base and covers the full Tulsa metropolitan area and surrounding counties.
              </p>
              <Link href="/weekend-emergency" className="text-blue-600 hover:underline font-semibold">
                Learn more about weekend &amp; emergency process serving &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Geographic Coverage */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Geographic Coverage Across Oklahoma</h2>
              <p className="text-gray-700 mb-4 max-w-3xl mx-auto">
                All three service tiers — Standard, Rush, and Same-Day — are available throughout our primary Tulsa metropolitan coverage area. Statewide coverage across all 77 Oklahoma counties is available for Standard and Rush tiers, with Same-Day service subject to distance and availability.
              </p>
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                Whether your case involves a Tulsa County civil matter, a Creek County eviction, a Rogers County family law proceeding, or a rural county courthouse in western Oklahoma, Just Legal Solutions has the statewide reach to execute service effectively.
              </p>
              <Link href="/service-areas" className="text-blue-600 hover:underline font-semibold">
                View our complete Oklahoma service areas coverage &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
          <div className="container mx-auto px-4 py-14 lg:py-20 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Standard, Rush, or Same-Day—We Match Your Timeline</h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              From routine filings to genuine emergencies, Just Legal Solutions helps Oklahoma clients choose the right balance of
              speed, documentation, and persistence. Every tier includes GPS-tracked process serving, photo evidence when appropriate,
              and a detailed affidavit so you can move confidently to your next step in the litigation process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Request Tier Recommendation
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Review Pricing & Options
              </Link>
            </div>
            <p className="text-sm text-blue-100">
              Need additional context about how we serve across the state? Visit our{' '}
              <Link href="/service-areas" className="text-orange-300 font-semibold hover:underline">
                Oklahoma service areas overview
              </Link>{' '}
              or learn more about{' '}
              <Link href="/same-day-process-server" className="text-orange-300 font-semibold hover:underline">
                same-day process serving
              </Link>{' '}
              and our{' '}
              <Link href="/urgent-process-server" className="text-orange-300 font-semibold hover:underline">
                urgent process server options
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
