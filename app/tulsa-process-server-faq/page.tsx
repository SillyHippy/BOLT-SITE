import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Phone, Shield, Clock, CheckCircle, Star, ArrowRight, FileText, MapPin, Award } from 'lucide-react';
import { STARTING_PRICES, PRICE_RANGE_DISPLAY } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Tulsa Process Server FAQ 2026 | Pricing, Speed & Coverage | Just Legal Solutions',
  description: 'Tulsa process server FAQ for 2026. Service starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours rush. Answers on coverage, GPS proof, after-hours, and more. See full pricing at https://justlegalsolutions.org/pricing.',
  keywords: 'tulsa process server faq, tulsa process server cost, oklahoma process server questions, just legal solutions, process server hours, process server tulsa pricing, gps proof of service',
  alternates: { canonical: 'https://justlegalsolutions.org/tulsa-process-server-faq' },
  openGraph: {
    title: 'Tulsa Process Server FAQ — 2026 | Just Legal Solutions',
    description: '20+ answers about pricing, speed, coverage, and how to get started with a Tulsa-based process server who covers all 77 Oklahoma counties.',
    url: 'https://justlegalsolutions.org/tulsa-process-server-faq',
    siteName: 'Just Legal Solutions',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://justlegalsolutions.org/image-pack/images/image-045-oklahoma-process-server-faq-og.png', width: 1200, height: 630, alt: 'Tulsa Process Server FAQ 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ServeOK',
    title: 'Tulsa Process Server FAQ — 2026',
    description: 'Service starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours rush. Get answers on coverage, GPS proof, and starter steps.',
    images: ['https://justlegalsolutions.org/image-pack/images/image-045-oklahoma-process-server-faq-og.png'],
  },
  other: {
    'ai-content-type': 'faq',
    'ai-summary': 'Comprehensive 2026 FAQ for Just Legal Solutions, a Tulsa-based licensed process server covering all 77 Oklahoma counties. Service starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, and $265 after-hours rush. Topics include company background, service speed, coverage area, pricing, included items, payment methods, volume discounts, legal basics, GPS proof, affidavits, and how to start a serve. See full pricing https://justlegalsolutions.org/pricing.',
    'ai-key-facts': 'Tulsa process server FAQ. Service starts at $30 single-attempt, $60 standard, $100 rush, $150 same-day, $265 after-hours rush, $20 in-office notary, $25 mobile/RON notary. Licensed under 12 O.S. § 158.1, all 77 Oklahoma counties, GPS-verified, 24/7 availability, accepts cash, check, credit card, Venmo, PayPal, Zelle. Full pricing https://justlegalsolutions.org/pricing, (539) 367-6832.',
  },
};

const faqGroups: { heading: string; items: { question: string; answer: string }[] }[] = [
  {
    heading: 'About Just Legal Solutions',
    items: [
      {
        question: 'Who is Just Legal Solutions?',
        answer: 'Just Legal Solutions is a Tulsa-based process serving and legal support company founded by Joseph Iannazzi. We handle process serving, skip tracing, mobile notary, and court runs across all 77 Oklahoma counties, with a focus on speed, GPS-verified proof, and 24/7 availability.',
      },
      {
        question: 'Where are you based and what areas do you cover?',
        answer: 'Our office address is 564 E 138th Pl, Glenpool, OK 74033 — about 15 minutes south of downtown Tulsa. We routinely cover Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, Sapulpa, Glenpool, and the entire Tulsa metro, and we travel to all 77 Oklahoma counties.',
      },
      {
        question: 'Are you licensed and bonded?',
        answer: 'Yes. Our servers are licensed under 12 O.S. § 158.1 and carry the required $5,000 surety bond. We are also fully insured with professional liability coverage, which is what allows us to serve in any Oklahoma county and produce notarized affidavits that hold up in court.',
      },
      {
        question: 'What are your hours?',
        answer: 'We are available 24 hours a day, seven days a week, including weekends and federal holidays. Standard intake happens during business hours; after-hours intake routes to the on-call server. Same-day, rush, and after-hours rush tiers exist precisely because legal deadlines do not respect business hours.',
      },
    ],
  },
  {
    heading: 'Service Speed and Coverage',
    items: [
      {
        question: 'How fast can you serve papers?',
        answer: 'It depends on the tier you choose. Standard service runs 5-10 business days with up to three attempts. Rush service is 1-3 business days. Same-day service dispatches within 4-8 hours. After-hours rush hits a 2-hour response window. Most urgent calls get a server moving within an hour.',
      },
      {
        question: 'Can you do same-day service in Tulsa?',
        answer: 'Yes. Same-day service starts at $150 and is one of the most-requested tiers in the Tulsa metro. We also offer after-hours rush starting at $265 for 2-hour response time outside normal business hours.',
      },
      {
        question: 'Do you serve all 77 Oklahoma counties?',
        answer: 'Yes. Our license under 12 O.S. § 158.1 is recognized statewide, so a single server can cover urban metros and rural counties without handing off to local sheriffs. We serve everywhere from downtown Tulsa to the Panhandle.',
      },
      {
        question: 'Do you serve after-hours, on weekends, and on holidays?',
        answer: 'Yes. Oklahoma law does not restrict the days or times that service can occur, and many evasive defendants are only home in the evening or on weekends. Our after-hours rush tier starts at $265 and our same-day tier at $150 both include weekend and holiday windows when needed.',
      },
    ],
  },
  {
    heading: "Pricing & What's Included",
    items: [
      {
        question: 'What does process serving cost?',
        answer: `Service starts at $${STARTING_PRICES[0].startsAt} for a single-attempt posting and $${STARTING_PRICES[1].startsAt} for standard service with up to three attempts. Rush starts at $${STARTING_PRICES[2].startsAt}, same-day at $${STARTING_PRICES[3].startsAt}, triple-attempt at $${STARTING_PRICES[4].startsAt}, and after-hours rush at $${STARTING_PRICES[5].startsAt}. Final price depends on distance and complexity. See the full breakdown at https://justlegalsolutions.org/pricing.`,
      },
      {
        question: 'What is included in the base price?',
        answer: 'Every tier includes the actual service attempts, GPS-stamped documentation, and a notarized affidavit of service ready to file with the court. Within Tulsa County, mileage is included. Skip tracing, court runs, and mobile notary are billed separately when needed.',
      },
      {
        question: 'Do you charge per attempt or per case?',
        answer: 'Both options exist. Single-attempt posting is per attempt and starts at $30. Standard service is a flat $60 starting price that includes up to three attempts. Triple-attempt service starts at $200 for evasive respondents who need spread-out attempts on different days and times.',
      },
      {
        question: 'Do you accept credit cards?',
        answer: 'Yes. We accept cash, check, credit card, Venmo, PayPal, and Zelle. Law firms and recurring business clients can set up an invoiced billing account so individual matters are billed monthly.',
      },
      {
        question: 'Do you offer volume discounts for law firms?',
        answer: 'Yes. Firms with consistent monthly volume qualify for volume pricing. Reach out through the contact page or call (539) 367-6832 to discuss what your typical monthly load looks like and we will quote a custom rate.',
      },
    ],
  },
  {
    heading: 'Legal & Process Questions',
    items: [
      {
        question: 'Can you serve someone at their workplace?',
        answer: 'Yes, with discretion. Workplace service is legal in Oklahoma and is often the easiest place to find an evasive defendant. We approach the receptionist or front desk professionally, ask for the named individual, and complete the service in private when possible.',
      },
      {
        question: 'Can the defendant refuse service?',
        answer: 'No. Under 12 O.S. § 2004, if a server identifies the named person and offers the documents, service is complete even if the person refuses to physically take them, walks away, or shuts the door. The server can leave the documents at their feet — this is called drop service and it is legally valid.',
      },
      {
        question: 'What if the address is wrong?',
        answer: 'We confirm before dispatch when possible, but addresses do go stale. If the defendant is no longer at the address you provided, we can run a skip-tracing search starting at $50 and re-dispatch to the corrected address. We never bill for a successful serve at a stale address.',
      },
      {
        question: 'Do you provide GPS proof of service?',
        answer: 'Yes. Every attempt is GPS-stamped at the moment it happens. The notarized affidavit includes the latitude and longitude of the address, the timestamp, and any photos the server captured. This is what protects against future motions to quash service.',
      },
      {
        question: 'What is an affidavit of service and why do I need one?',
        answer: 'An affidavit of service (also called a return of service) is the notarized document that proves the defendant was properly served. It is filed with the court and triggers the answer deadline on the summons. Without a proper affidavit, the case cannot move forward — and a flawed affidavit can be challenged later, which is why notarization, GPS data, and detail matter.',
      },
    ],
  },
  {
    heading: 'Getting Started',
    items: [
      {
        question: 'How do I request a serve?',
        answer: 'Call (539) 367-6832, send an email through the contact page, or upload your documents and address details. We confirm pricing in writing, dispatch a server, and provide status updates after every attempt. Visit our contact page to get started.',
      },
      {
        question: 'What information do I need to provide?',
        answer: 'At minimum: a copy of the documents to be served (typically a summons and complaint, petition, subpoena, or order), the full name of the person to be served, the address where they can be found, the desired tier (standard, rush, same-day, or after-hours rush), and any notes about evasion, work schedule, or safety concerns.',
      },
      {
        question: "What if I'm representing myself (pro se)?",
        answer: 'We work with pro se filers every day. The process is the same as for attorneys — send the conformed copies, the address, and any notes, and we handle the rest. We cannot give legal advice, but we can explain how the service tiers map to your hearing date so you pick the right one.',
      },
    ],
  },
];

const flatFaqs = faqGroups.flatMap((g) => g.items);

export default function TulsaProcessServerFaqPage() {
  return (
    <>
      <Navbar />
      <UnifiedSchema
        pageType="faq"
        url="https://justlegalsolutions.org/tulsa-process-server-faq"
        title="Tulsa Process Server FAQ — 2026"
        description="20+ answers about pricing, speed, coverage, GPS proof, and how to get started with Just Legal Solutions, a Tulsa-based licensed process server covering all 77 Oklahoma counties."
        priceRange={PRICE_RANGE_DISPLAY}
        faqItems={flatFaqs}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Tulsa Process Server FAQ', url: '/tulsa-process-server-faq' },
        ]}
      />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-blue-100">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" prefetch={false} className="hover:underline">Home</Link></li>
                <li>/</li>
                <li className="text-white">Tulsa Process Server FAQ</li>
              </ol>
            </nav>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><Shield className="w-4 h-4 text-green-300" />Licensed & bonded</span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><Clock className="w-4 h-4 text-blue-200" />24/7 availability</span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs"><MapPin className="w-4 h-4 text-blue-200" />All 77 counties</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-5 drop-shadow-lg">
              Tulsa Process Server FAQ — Everything You Need to Know in 2026
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Twenty-plus quick, plain-English answers about how Just Legal Solutions works, what it costs, and how to get a serve moving today. If your question is not here, call us at <a className="underline" href="tel:5393676832">(539) 367-6832</a> and we will answer it on the spot.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors">
                <Phone className="w-5 h-5" /> (539) 367-6832
              </a>
              <Link href="/pricing" prefetch={false} className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors">
                See Full Pricing <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" prefetch={false} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-colors">
                Start a Serve
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Pricing Strip */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {STARTING_PRICES.map((tier) => (
                <div key={tier.id} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-bold text-blue-900 text-sm">{tier.label}</h3>
                    <span className="text-lg font-extrabold text-blue-700">${tier.startsAt}<span className="text-xs font-normal text-gray-500">+</span></span>
                  </div>
                  {tier.note && <p className="text-xs text-gray-600 mt-1">{tier.note}</p>}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              In-office notary starts at $20 and mobile/RON notary at $25.{' '}
              <Link href="/pricing" prefetch={false} className="text-blue-700 font-semibold underline">See full pricing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ Groups */}
        {faqGroups.map((group) => (
          <section key={group.heading} className="py-12 odd:bg-slate-50 even:bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                <FileText className="w-7 h-7 text-blue-600" />
                {group.heading}
              </h2>
              <div className="space-y-5">
                {group.items.map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
                    <h3 className="text-lg font-bold mb-3 text-blue-900 flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Trust Strip */}
        <section className="py-10 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 mx-auto mb-2" />
                <h3 className="font-bold text-blue-900">4.9 average rating</h3>
                <p className="text-sm text-gray-600">From Oklahoma legal pros and individuals</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <Award className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-blue-900">50+ years combined</h3>
                <p className="text-sm text-gray-600">Process serving experience on staff</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <h3 className="font-bold text-blue-900">All 77 counties</h3>
                <p className="text-sm text-gray-600">Statewide license, single point of contact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-cyan-700 text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <Phone className="w-12 h-12 mx-auto mb-4 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Call us at (539) 367-6832 and a real person — usually the server who would handle your case — will answer. No phone trees, no callbacks tomorrow. We will quote you on the call and tell you when the serve can happen.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:5393676832" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors">
                <Phone className="w-5 h-5" /> Call (539) 367-6832
              </a>
              <Link href="/contact" prefetch={false} className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pricing" prefetch={false} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-colors">
                See Full Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-blue-900 mb-4 text-center">Explore More</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <Link href="/process-serving" prefetch={false} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Process Serving Overview</h3>
                <p className="text-sm text-gray-600 mt-1">All service methods explained</p>
              </Link>
              <Link href="/process-server-vs-sheriff" prefetch={false} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Process Server vs Sheriff</h3>
                <p className="text-sm text-gray-600 mt-1">Side-by-side comparison</p>
              </Link>
              <Link href="/divorce-paper-service" prefetch={false} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Divorce Paper Service</h3>
                <p className="text-sm text-gray-600 mt-1">Discreet, court-ready</p>
              </Link>
              <Link href="/small-claims-process-serving" prefetch={false} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Small Claims Service</h3>
                <p className="text-sm text-gray-600 mt-1">Affordable, fast</p>
              </Link>
              <Link href="/protective-order-service" prefetch={false} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Protective Order Service</h3>
                <p className="text-sm text-gray-600 mt-1">Confidential & trauma-informed</p>
              </Link>
              <Link href="/pricing" prefetch={false} className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="font-semibold text-blue-800">Full Pricing</h3>
                <p className="text-sm text-gray-600 mt-1">Every tier and add-on</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
