import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Join Our Network — Oklahoma Process Server Opportunities | Just Legal Solutions',
  description: 'Join the Just Legal Solutions process server network in Oklahoma. Earn flexible income serving documents statewide. PSL license required. Apply today.',
  keywords: 'join process server network oklahoma, process server jobs oklahoma, become process server tulsa, oklahoma psl license work, process server independent contractor oklahoma',
  alternates: { canonical: 'https://justlegalsolutions.org/join-our-network' },
  openGraph: {
    title: 'Join Our Network — Oklahoma Process Server Opportunities | Just Legal Solutions',
    description: 'Join the Just Legal Solutions process server network. Flexible income, established client base, statewide coverage. PSL license required.',
    url: 'https://justlegalsolutions.org/join-our-network',
    siteName: 'Just Legal Solutions',
    images: [{ url: 'https://justlegalsolutions.org/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const areas = [
  { county: 'Oklahoma County', city: 'Oklahoma City', level: 'High Need', color: 'bg-red-100 border-red-300 text-red-800' },
  { county: 'Rogers County', city: 'Claremore / Catoosa', level: 'High Need', color: 'bg-red-100 border-red-300 text-red-800' },
  { county: 'Osage County', city: 'Pawhuska / Skiatook', level: 'Moderate Need', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' },
  { county: 'Washington County', city: 'Bartlesville', level: 'Moderate Need', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' },
  { county: 'Muskogee County', city: 'Muskogee', level: 'Moderate Need', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' },
  { county: 'Pottawatomie County', city: 'Shawnee', level: 'Moderate Need', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' },
  { county: 'Comanche County', city: 'Lawton', level: 'Moderate Need', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' },
  { county: 'Cleveland County', city: 'Norman', level: 'Moderate Need', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' },
  { county: 'Multiple Rural Counties', city: 'Statewide Rural', level: 'Always Open', color: 'bg-green-100 border-green-300 text-green-800' },
];

export default function JoinOurNetworkPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/30 rounded-full px-4 py-2 mb-6 text-sm font-medium">
            🤝 Now Expanding Our Statewide Network
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Join Our Process Server Network
            <span className="block text-blue-400 mt-2">Earn. Grow. Serve Oklahoma.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Just Legal Solutions is expanding our network of licensed process servers across Oklahoma. If you hold an Oklahoma PSL license, we want to work with you — flexible schedule, no contracts, established client base.
          </p>
          <a
            href="mailto:info@justlegalsolutions.org?subject=Network Application — Process Server"
            className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-all"
          >
            📧 Apply Now — Send Email
          </a>
          <p className="text-gray-400 mt-4 text-sm">
            Or call Joseph directly: <a href="tel:5393676832" className="text-blue-300 hover:text-white">(539) 367-6832</a>
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">What You Get as a JLS Network Server</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: 'Competitive Per-Serve Pay', desc: 'We pay fair rates for successful service. Rush and same-day assignments pay more. Payments processed weekly via direct deposit or check.' },
              { icon: '📋', title: 'Steady Assignment Flow', desc: 'Tap into our existing client base of attorneys, law firms, and property managers who send us consistent volume every month.' },
              { icon: '🗓️', title: 'Fully Flexible Schedule', desc: 'You pick up assignments that work for your schedule. No minimums, no quotas. Take what you can handle.' },
              { icon: '📱', title: 'Simple Digital Workflow', desc: 'Receive assignments via text or email. Submit service attempts with GPS-tagged photos. No complicated software required.' },
              { icon: '📍', title: 'Work Your County', desc: 'We match assignments to your area. If you\'re in Muskogee, you get Muskogee runs. No long-haul travel required.' },
              { icon: '🤝', title: 'Collaborative, Not Competitive', desc: 'We\'re building a team, not a gig platform. When you win, we win. We share best practices and support new servers.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Requirements to Join</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">✅ Required</h3>
              <ul className="space-y-3">
                {[
                  'Active Oklahoma PSL (Process Server License) — no expired licenses',
                  'Reliable vehicle and valid driver\'s license',
                  'Smartphone with GPS capability and camera',
                  'Professional demeanor and appearance',
                  'Ability to document service attempts with photos and GPS coordinates',
                  'Willingness to follow Oklahoma service of process rules (12 O.S. § 2004)',
                ].map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">⭐ Preferred</h3>
              <ul className="space-y-3">
                {[
                  '1+ year of process serving experience',
                  'Familiarity with eViction filing and eviction service protocol',
                  'Experience serving evasive or difficult respondents',
                  'E&O (Errors & Omissions) insurance',
                  'Knowledge of multiple counties across Oklahoma',
                  'Previous work with attorneys or law firms',
                ].map((pref, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold mt-0.5">★</span>
                    <span className="text-gray-700 text-sm">{pref}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-blue-800 text-sm">
              <strong>Don't have your PSL yet?</strong> Read our complete guide:{' '}
              <Link href="/become-process-server-oklahoma-complete-guide" className="underline font-semibold hover:text-blue-900">
                How to Become a Process Server in Oklahoma →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Areas Needed */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Need Servers Most</h2>
          <p className="text-gray-600 mb-8">We have clients across the state — these counties have the highest demand right now.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {areas.map((area) => (
              <div key={area.county} className={`border-2 ${area.color} rounded-xl p-4`}>
                <div className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2 ${area.color}`}>{area.level}</div>
                <h3 className="font-bold text-gray-900 text-sm">{area.county}</h3>
                <p className="text-xs text-gray-600 mt-0.5">{area.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">How Our Network Works</h2>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Apply via Email', desc: 'Email us your name, county you serve, PSL number, and a brief intro. We typically respond within 24 hours.' },
              { step: '02', title: 'Quick Onboarding Call', desc: 'A 15-minute call to go over our documentation standards, photo requirements, and payment process.' },
              { step: '03', title: 'Receive Your First Assignment', desc: 'We\'ll text or email you assignment details: name, address, document type, and service deadline.' },
              { step: '04', title: 'Serve & Document', desc: 'Make your attempts, GPS-stamp each one with photos, and submit your service notes via email or our submission form.' },
              { step: '05', title: 'Get Paid', desc: 'We compile affidavits and pay all network servers weekly. No chasing invoices.' },
            ].map((step) => (
              <div key={step.step} className="flex gap-5 items-start">
                <div className="bg-blue-600 text-white text-xl font-bold rounded-xl px-4 py-3 flex-shrink-0">{step.step}</div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-blue-200 text-lg mb-8">Send us a quick email with your name, PSL number, and county. We\'ll take it from there.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@justlegalsolutions.org?subject=Network Application — Process Server"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-all"
            >
              📧 Email Your Application
            </a>
            <a
              href="tel:5393676832"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all"
            >
              📞 (539) 367-6832
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-6">
            Questions about the PSL license process?{' '}
            <Link href="/become-process-server-oklahoma-complete-guide" className="underline hover:text-white">
              Read our Oklahoma licensing guide →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
