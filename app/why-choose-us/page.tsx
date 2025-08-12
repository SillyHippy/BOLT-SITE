
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import Image from 'next/image';

export const metadata = {
  title: 'Why Choose Us | Best Oklahoma Process Server | Just Legal Solutions',
  description: 'Why choose Just Legal Solutions? Oklahoma’s most trusted, AI-powered process server—fast, reliable, and professional with 24/7 support, transparent pricing, and advanced technology.',
  keywords: 'why choose us, best process server, oklahoma, AI legal solutions, 24/7 process server',
};

export default function WhyChooseUs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Why Choose Us | Best Oklahoma Process Server | Just Legal Solutions',
            description: 'Why choose Just Legal Solutions? Oklahoma’s most trusted, AI-powered process server—fast, reliable, and professional with 24/7 support, transparent pricing, and advanced technology.',
            url: 'https://justlegalsolutions.org/why-choose-us'
          })
        }}
      />
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-12">
        <section className="flex flex-col md:flex-row items-start gap-8 mb-10">
          <div className="flex-1 min-w-0">
            <h1 className="text-5xl font-extrabold mb-4 text-blue-900 drop-shadow-lg">Why Choose Just Legal Solutions?</h1>
            <p className="text-xl text-gray-800 mb-6">
              Just Legal Solutions sets the standard for professional process serving in Tulsa, Broken Arrow, and throughout Oklahoma. Choosing the right process server can make or break legal proceedings. Here’s why attorneys, paralegals, landlords, and individuals across Oklahoma trust us:
            </p>
            <h2 className="text-2xl font-bold mb-2 text-blue-800">Licensed, Bonded, and Insured Professionals</h2>
            <p className="text-lg text-gray-700 mb-4">Our team is fully licensed and bonded in Oklahoma, providing you with peace of mind and protecting you from liability. Each serve is backed by a guarantee of legal compliance, reliability, and strict adherence to the Oklahoma Rules of Civil Procedure.</p>
            <h2 className="text-2xl font-bold mb-2 text-blue-800">Unmatched Experience & Local Expertise</h2>
            <p className="text-lg text-gray-700 mb-4">Our experienced process servers know Oklahoma’s legal landscape inside and out. We have a proven record of fast, accurate delivery—whether it’s subpoenas, summons, complaints, or writs of execution. With deep roots in Tulsa and the surrounding counties, we navigate local neighborhoods efficiently, ensuring timely and documented service.</p>
            <h2 className="text-2xl font-bold mb-2 text-blue-800">Fast, Reliable, and Transparent</h2>
            <p className="text-lg text-gray-700 mb-4">Time is critical in legal matters. We prioritize speed and reliability, offering multiple delivery attempts including early mornings, evenings, and weekends. GPS tracking and real-time updates mean you can monitor your service progress every step of the way. Our transparent pricing ensures there are never hidden fees.</p>
            <h2 className="text-2xl font-bold mb-2 text-blue-800">Statewide & Same-Day Coverage</h2>
            <p className="text-lg text-gray-700 mb-4">We serve every county in Oklahoma—urban or rural, business or residential addresses. Need documents served urgently or same-day? Our dedicated team delivers, even under tight deadlines or urgent scenarios.</p>
            <h2 className="text-2xl font-bold mb-2 text-blue-800">Technology-Driven Efficiency</h2>
            <p className="text-lg text-gray-700 mb-4">Using advanced technology—such as mobile apps, GPS, and secure digital document management—our workflow is streamlined to reduce errors, improve speed, and minimize paperwork. E-signatures, photo proof, and detailed affidavits are standard.</p>
            <h2 className="text-2xl font-bold mb-2 text-blue-800">Superior to Sheriff’s Service</h2>
            <p className="text-lg text-gray-700 mb-4">Unlike sheriff’s departments, whose priorities are split between many duties, our sole focus is process service. Independent process servers like us are faster, more responsive, and offer flexible hours. We provide better customer service, regular updates, and higher success rates, especially with evasive or hard-to-find recipients.</p>
            <h2 className="text-2xl font-bold mb-2 text-blue-800">Trusted by Legal Professionals</h2>
            <p className="text-lg text-gray-700 mb-6">Hundreds of law firms, property managers, and individuals rely on our expertise. Our reputation is built on proven results, professionalism, and positive testimonials from across Oklahoma.</p>
            <a href="/about" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-900 transition mb-4">Why We’re Different: Read Our Story</a>
            <a href="/weekend-emergency" className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-red-900 transition ml-2 mb-4">Weekend Emergency Service</a>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center min-w-0">
            <Image src="/images/oklahoma-licensed-bonded-process-server-badges.png" alt="Oklahoma Licensed Bonded Process Server Badges" width={400} height={120} className="mb-2" />
            <Image src="/images/Legal-document-types-process-server.png" alt="Legal Document Types Process Server" width={400} height={220} className="rounded-xl shadow-lg" />
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image src="/images/tulsa-process-server-delivering-documents.png" alt="Tulsa Process Server Delivering Documents" width={400} height={260} className="mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-blue-800">Our Promise</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Every serve is handled with care, urgency, and legal precision</li>
              <li>AI-enhanced route optimization for faster delivery</li>
              <li>Real-time status updates and proof of service</li>
            </ul>
          </div>
          <div>
            <Image src="/images/due-process-legal-concept.png" alt="Due Process Legal Concept" width={320} height={200} className="mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-blue-800">Who We Serve</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Attorneys, law firms, and businesses</li>
              <li>Individuals needing urgent or routine service</li>
              <li>All legal document types—see <a href="/images/Legal-document-types-process-server.png" className="underline text-blue-700" target="_blank" rel="noopener">full list</a></li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <Image src="/images/OklahomaFlag.jpg" alt="Oklahoma State Flag" width={320} height={200} className="rounded shadow-md mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Proudly Serving Oklahoma</h2>
            <p className="text-gray-700">From Tulsa to every corner of Oklahoma, our team is ready to deliver—day or night, weekend or holiday.</p>
          </div>
          <div className="flex-1">
            <Image src="/images/emergency-24hour-process-server-service.png" alt="24 Hour Process Server Service" width={320} height={200} className="rounded shadow-md mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Always On, Always Reliable</h2>
            <p className="text-gray-700">We leverage AI and human expertise to ensure your documents are served quickly, securely, and with full legal compliance.</p>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LegalService',
          name: 'Just Legal Solutions',
          url: 'https://justlegalsolutions.org/why-choose-us',
          image: 'https://justlegalsolutions.org/images/oklahoma-licensed-bonded-process-server-badges.png',
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
          description: 'Oklahoma’s most trusted, AI-powered process server. Fast, reliable, and professional service with 24/7 support.',
        }) }} />
      </main>
      <Footer />
    </>
  );
}
