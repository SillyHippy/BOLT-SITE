
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import Image from 'next/image';

export const metadata = {
  title: '24/7 Weekend Emergency Process Server | Tulsa & Oklahoma | Just Legal Solutions',
  description: 'Fast, reliable, and AI-powered weekend emergency process serving in Tulsa and all Oklahoma counties. Licensed, bonded, and available 24/7. Call now for immediate legal document delivery.',
  keywords: 'weekend emergency process server, 24/7 process server, Tulsa, Oklahoma, urgent legal delivery, AI legal solutions',
};

export default function WeekendEmergency() {
  return (
    <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                name: 'Weekend & Emergency Process Server | Oklahoma',
                description: 'Need urgent legal documents served on weekends or after hours? Our Oklahoma process servers are available 24/7 for emergency service of process.',
                url: 'https://justlegalsolutions.org/weekend-emergency'
              })
            }}
          />
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-12">
        <section className="flex flex-col md:flex-row items-start gap-8 mb-10">
          <div className="flex-1 min-w-0">
            <h1 className="text-5xl font-extrabold mb-4 text-red-700 drop-shadow-lg">Weekend & 24/7 Emergency Process Serving in Tulsa and Oklahoma</h1>
            <p className="text-xl text-gray-800 mb-6">
              Legal emergencies don’t wait for business hours—and neither do we. Just Legal Solutions provides true 24/7 emergency process service, including nights, early mornings, weekends, and holidays throughout Tulsa, Oklahoma City, and every county statewide.
            </p>
            <h2 className="text-2xl font-bold mb-2 text-red-800">Why Use Our Weekend Emergency Service?</h2>
            <ul className="list-disc ml-6 text-lg text-gray-700 mb-6">
              <li><strong>Immediate Response:</strong> Critical deadlines looming? Court orders or restraining orders that need instant action? We answer the phone and dispatch agents to serve at any time, even late nights and weekends.</li>
              <li><strong>Coverage Across Oklahoma:</strong> No matter where you need service—urban Tulsa, rural counties, apartment complexes, or gated communities—we have local experts ready to act.</li>
              <li><strong>Maximum Success:</strong> People tend to be home during off-hours. Our weekend and night process serving greatly increases the chance of completing tricky serves or locating elusive recipients.</li>
              <li><strong>Proof & Documentation:</strong> Receive GPS-stamped, time-logged proof of every attempt, along with digital photos and detailed affidavits suitable for Oklahoma courts.</li>
              <li><strong>Trusted by Professionals:</strong> Landlords, attorneys, and businesses choose us for rapid turnarounds and consistent results in urgent situations.</li>
              <li><strong>Competitive Rates:</strong> Emergency service pricing is always clear. You get what you pay for: reliability, professionalism, and local expertise.</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2 text-red-800">Common Emergency Scenarios:</h2>
            <ul className="list-disc ml-6 text-lg text-gray-700 mb-6">
              <li>Serving emergency protective or restraining orders</li>
              <li>Urgent eviction notices or landlord-tenant legal postings</li>
              <li>Last-minute court filing deadlines before dismissal</li>
              <li>Rush delivery for subpoenas, summons, or legal notices</li>
            </ul>
            <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 rounded">
              <strong>Don’t Risk Missing Deadlines:</strong> Missed service can mean losing your day in court, wasted attorney fees, or delayed justice. When time is of the essence, contact Just Legal Solutions anytime—day or night—for emergency process service that gets the job done in Tulsa, Broken Arrow, or anywhere in Oklahoma.
            </div>
            <a href="tel:5393676832" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-2xl font-bold shadow-lg hover:bg-red-700 transition mb-4">
              Call or Text (539) 367-6832 Now
            </a>
            <div className="mt-2 text-gray-600 text-sm mb-4">Or email: <a href="mailto:info@justlegalsolutions.org" className="underline text-blue-700">info@justlegalsolutions.org</a></div>
            <a href="/about" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-900 transition mt-2">Why We’re Different: Read Our Story</a>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center min-w-0">
            <Image src="/images/emergency-weekend-service-banner-complete.png" alt="Emergency Weekend Service Banner" width={480} height={320} className="rounded-xl shadow-xl" priority />
            <Image src="/images/emergency-24hour-process-server-service.png" alt="24 Hour Process Server Service" width={480} height={320} className="rounded-xl shadow-lg" />
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image src="/images/oklahoma-licensed-bonded-process-server-badges.png" alt="Oklahoma Licensed Bonded Process Server Badges" width={400} height={120} className="mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-red-800">Why Trust Just Legal Solutions?</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Trusted by attorneys, businesses, and individuals statewide</li>
              <li>AI-driven efficiency for faster, more accurate service</li>
              <li>Full compliance with Oklahoma legal requirements</li>
            </ul>
          </div>
          <div>
            <Image src="/images/tulsa-process-server-delivering-documents.png" alt="Tulsa Process Server Delivering Documents" width={400} height={260} className="mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-red-800">What We Serve</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Summons, subpoenas, complaints, restraining orders</li>
              <li>Eviction notices, family law, and more</li>
              <li>All document types—see <a href="/images/Legal-document-types-process-server.png" className="underline text-blue-700" target="_blank" rel="noopener">full list</a></li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <Image src="/images/OklahomaFlag.jpg" alt="Oklahoma State Flag" width={320} height={200} className="rounded shadow-md mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Serving All Oklahoma Counties</h2>
            <p className="text-gray-700">No matter where you are in Oklahoma, our emergency process servers are ready to help—day or night, weekend or holiday.</p>
          </div>
          <div className="flex-1">
            <Image src="/images/due-process-legal-concept.png" alt="Due Process Legal Concept" width={320} height={200} className="rounded shadow-md mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">AI-Enhanced Service</h2>
            <p className="text-gray-700">We use the latest AI tools for route optimization, instant notifications, and secure document handling—ensuring your legal needs are met with speed and accuracy.</p>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LegalService',
          name: 'Just Legal Solutions',
          url: 'https://justlegalsolutions.org/weekend-emergency',
          image: 'https://justlegalsolutions.org/images/emergency-weekend-service-banner-complete.png',
          telephone: '+1-539-367-6832',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Tulsa',
            addressRegion: 'OK',
            postalCode: '74119',
            addressCountry: 'US',
          },
          openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59',
          areaServed: 'Oklahoma',
          priceRange: '$$',
          description: '24/7 weekend emergency process server for all Oklahoma counties. AI-powered, licensed, and bonded.',
        }) }} />
      </main>
      <Footer />
    </>
  );
}
