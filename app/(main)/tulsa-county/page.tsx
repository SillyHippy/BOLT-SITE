import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BusinessSchema from '@/components/BusinessSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Tulsa County Process Server & Legal Document Services | Same-Day Delivery',
  description: 'Professional process server services for every city and community in Tulsa County. Licensed, bonded, fast turnaround, with coverage in Tulsa, Broken Arrow, Bixby, Jenks, Sand Springs, and more.',
  keywords: 'tulsa county process server, legal document delivery tulsa county, process server tulsa, process server broken arrow, process server bixby, process server jenks, process server sand springs, serve papers tulsa, subpoena service tulsa county',
  alternates: {
    canonical: 'https://justlegalsolutions.org/tulsa-county'
  },
  openGraph: {
    title: 'Tulsa County Process Server & Legal Document Services | Just Legal Solutions',
    description: 'Licensed, bonded, and fast process servers for every city and community in Tulsa County, Oklahoma.',
    url: 'https://justlegalsolutions.org/tulsa-county',
    siteName: 'Just Legal Solutions',
    images: [{
      url: 'https://justlegalsolutions.org/images/tulsa-county-courthouse.jpg',
      width: 1200,
      height: 630,
      alt: 'Tulsa County Courthouse Process Server'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tulsa County Process Server & Legal Document Services',
    description: 'Same-day process serving and legal document delivery for all Tulsa County cities and towns.',
    images: ['https://justlegalsolutions.org/images/tulsa-county-courthouse.jpg'],
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Just Legal Solutions - Tulsa County Process Server',
  description: 'Professional process server and legal document delivery for every city and community in Tulsa County, Oklahoma.',
  url: 'https://justlegalsolutions.org/tulsa-county',
  telephone: '(539) 367-6832',
  email: 'info@justlegalsolutions.org',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Tulsa County' },
    { '@type': 'City', name: 'Tulsa' },
    { '@type': 'City', name: 'Broken Arrow' },
    { '@type': 'City', name: 'Bixby' },
    { '@type': 'City', name: 'Jenks' },
    { '@type': 'City', name: 'Sand Springs' },
    { '@type': 'City', name: 'Owasso' },
    { '@type': 'City', name: 'Collinsville' },
    { '@type': 'City', name: 'Glenpool' },
    { '@type': 'City', name: 'Skiatook' },
    { '@type': 'City', name: 'Sapulpa' },
    { '@type': 'Town', name: 'Sperry' },
    { '@type': 'Town', name: 'Liberty' },
    { '@type': 'Town', name: 'Lotsee' },
    { '@type': 'Town', name: 'Fair Oaks' },
    { '@type': 'Community', name: 'Oakhurst' },
    { '@type': 'Community', name: 'Turley' },
    { '@type': 'Community', name: 'Berryhill' },
    { '@type': 'Community', name: 'Mingo' },
    { '@type': 'Community', name: 'Leonard' },
    { '@type': 'Community', name: 'Garnett' },
    { '@type': 'Community', name: 'Lake' }
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$60 - $150',
};

const serviceAreas = [
  {
    name: 'Tulsa',
    paths: [
      { href: '/tulsa-process-server', label: 'Main Tulsa Page' },
      { href: '/process-server-tulsa', label: 'Tulsa County Page' },
      { href: '/seo/tulsa-process-server-comprehensive', label: 'SEO/Comprehensive' }
    ],
    note: 'County seat, business and courthouse center'
  },
  {
    name: 'Broken Arrow',
    paths: [
      { href: '/seo/broken-arrow-process-server', label: 'SEO Page' },
      { href: '/seo/process-server-broken-arrow', label: 'Alt SEO Page' }
    ],
    note: 'Spans Tulsa/Wagoner Co.; rapidly growing suburb'
  },
  {
    name: 'Bixby',
    paths: [
      { href: '/seo/bixby-process-server', label: 'SEO Page' } 
    ],
    note: 'Suburban community, partly in Wagoner County'
  },
  {
    name: 'Jenks',
    paths: [
      { href: '/seo/jenks-process-server', label: 'SEO Page' }
    ],
    note: 'South Tulsa metro, riverfront & schools'
  },
  {
    name: 'Sand Springs',
    paths: [
      { href: '/seo/sand-springs-process-server', label: 'SEO Page' },
      { href: '/seo/process-server-sand-springs', label: 'Alt SEO Page' }
    ],
    note: 'West side, historic town'
  },
  {
    name: 'Owasso',
    paths: [
      { href: '/seo/owasso-process-server', label: 'SEO Page' }
    ],
    note: 'North suburbs'
  },
  {
    name: 'Glenpool',
    paths: [
      { href: '/seo/glenpool-process-server', label: 'SEO Page' }
    ],
    note: 'Southwestern edge, oil town'
  },
  // The following do not have pages yet:
  { name: 'Collinsville', paths: [], note: 'Northern edge (no page yet)' },
  { name: 'Skiatook', paths: [], note: 'Small part in Tulsa Co. (no page yet)' },
  { name: 'Sapulpa', paths: [], note: 'Partly in Tulsa County (no page yet)' },
  { name: 'Sperry', paths: [], note: 'North, small town (no page yet)' },
  { name: 'Liberty', paths: [], note: 'Partially in Tulsa County (no page yet)' },
  { name: 'Lotsee', paths: [], note: 'Tiny town (no page yet)' },
  { name: 'Fair Oaks', paths: [], note: 'Partially in Tulsa County (no page yet)' },
  { name: 'Oakhurst', paths: [], note: 'Community/CDP (no page yet)' },
  { name: 'Turley', paths: [], note: 'Community/CDP (no page yet)' },
  { name: 'Berryhill', paths: [], note: 'Community (no page yet)' },
  { name: 'Mingo', paths: [], note: 'Community (no page yet)' },
  { name: 'Leonard', paths: [], note: 'Community (no page yet)' },
  { name: 'Garnett', paths: [], note: 'Community (no page yet)' },
  { name: 'Lake', paths: [], note: 'Community (no page yet)' }
];

const faqs = [
  {
    q: 'What areas of Tulsa County do you serve?',
    a: 'We serve every city, suburb, and neighborhood—from Tulsa to Glenpool, Jenks, Sand Springs, and every community in between.'
  },
  {
    q: 'Do you offer same-day process service in Tulsa County?',
    a: 'Yes, most locations in Tulsa County qualify for same-day or next-day priority delivery.'
  },
  {
    q: 'Are your process servers licensed for all city/county courts?',
    a: 'Absolutely. Our servers are licensed and bonded for every court in Tulsa County, and understand the unique procedures for each city’s judicial system.'
  },
  {
    q: 'Can you deliver to homes, businesses, or gated communities in Tulsa County?',
    a: 'Yes. We routinely serve papers in residential neighborhoods, office parks, schools, medical facilities, and secure gated communities.'
  },
  {
    q: 'What happens if the person to be served is not at home?',
    a: 'We use legal skip tracing and make diligent attempts at varying times to ensure the highest chance of successful service, and keep you informed throughout the process.'
  },
  {
    q: 'How fast can you serve in a smaller town like Sperry or Glenpool?',
    a: 'Service is typically attempted within 24-48 hours, with expedited options available in all Tulsa County towns.'
  },
  {
    q: 'What if the recipient lives in a part of a city that crosses county lines?',
    a: 'We verify jurisdiction and ensure the court receives correct, county-compliant affidavit of service, even if a city crosses into another county (e.g., Broken Arrow, Bixby, Sand Springs).'
  },
  {
    q: 'Do you serve eviction notices, subpoenas, and family law documents?',
    a: 'Yes, we serve all legal papers—evictions, civil and family documents, subpoenas, and more—across Tulsa County.'
  }
  ,
  {
    q: 'Do you serve legal documents after hours or on weekends in Tulsa County?',
    a: 'Yes, we offer after-hours and weekend service for urgent legal deliveries throughout Tulsa County. Contact us for availability and rush options.'
  },
  {
    q: 'What types of legal documents can you deliver in Tulsa County?',
    a: 'We deliver all types of legal documents, including subpoenas, summons, divorce papers, eviction notices, court filings, and more.'
  }
];

export default function TulsaCountyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Service Coverage Narrative Section */}
        <section className="bg-white py-10 border-b">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Serving Tulsa County with Local Expertise & Trusted Legal Document Delivery</h2>
            <p className="text-lg text-gray-700 mb-4">
              Tulsa County has long been a vital hub of legal, business, and community activity in Oklahoma. Founded in 1907, this region grew rapidly alongside Tulsa’s oil boom, developing a rich cultural heritage and a mosaic of neighborhoods ranging from historic downtown districts to thriving suburbs and pioneering communities.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our process serving and legal courier services are tailored to meet the unique demands of Tulsa County’s diverse landscape. Whether you need reliable process serving in <Link href="/tulsa-process-server" className="text-blue-700 underline font-semibold">Tulsa</Link> or specialized courier solutions in the fast-growing suburbs, we understand the nuances of each area—from the bustling business corridors of Tulsa to the well-established residential enclaves of <Link href="/seo/broken-arrow-process-server" className="text-blue-700 underline font-semibold">Broken Arrow</Link> and beyond.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Deep Roots in Tulsa City &amp; Surrounding Areas:</strong> Serving the heart of Tulsa means more than just delivering documents—it&apos;s about understanding the city&apos;s complex judicial environment, courthouse protocols, and local community expectations. For those seeking comprehensive and detailed service offerings, our <Link href="/seo/tulsa-process-server-comprehensive" className="text-blue-700 underline font-semibold">Tulsa Process Server Comprehensive</Link> page offers an in-depth look at how we navigate the city&apos;s courts and neighborhoods with precision and professionalism. If you&apos;re focused on specific aspects of Tulsa legal document service, such as urgent court filings or handling family law papers, our <Link href="/process-server-tulsa" className="text-blue-700 underline font-semibold">Tulsa County Process Server</Link> page provides focused insights tailored to a wide range of legal scenarios. For businesses and individuals needing swift delivery of important documents beyond serving, our <Link href="/courier-services-tulsa" className="text-blue-700 underline font-semibold">Courier Services Tulsa</Link> page details our same-day and secure courier options designed to keep your legal and business needs moving efficiently.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Expertise in Broken Arrow &amp; Suburban Communities:</strong> Broken Arrow, a major suburb within Tulsa County, presents its own service considerations—from gated communities to sprawling commercial zones that require experienced process servers who know the area well. Our deep familiarity with Broken Arrow&apos;s Rose District, municipal courts, and residential neighborhoods ensures that your legal documents are served not only quickly, but compliantly. For detailed service information specifically for Broken Arrow, visit our dedicated pages: <Link href="/seo/broken-arrow-process-server" className="text-blue-700 underline font-semibold">Broken Arrow SEO Page</Link> and <Link href="/seo/process-server-broken-arrow" className="text-blue-700 underline font-semibold">Process Server Broken Arrow Alternative SEO Page</Link>.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Serving All Corners of Tulsa County:</strong> Beyond Tulsa and Broken Arrow, our services extend to <Link href="/seo/bixby-process-server" className="text-blue-700 underline font-semibold">Bixby</Link>, <Link href="/seo/jenks-process-server" className="text-blue-700 underline font-semibold">Jenks</Link>, <Link href="/seo/sand-springs-process-server" className="text-blue-700 underline font-semibold">Sand Springs</Link>, <Link href="/seo/owasso-process-server" className="text-blue-700 underline font-semibold">Owasso</Link>, <Link href="/seo/glenpool-process-server" className="text-blue-700 underline font-semibold">Glenpool</Link>, and many smaller communities. Each area brings its own requirements and community nuances, and we pride ourselves on adapting to these with expert knowledge and attention to detail.
            </p>
            <p className="text-lg text-gray-700">
              By combining historic understanding, local insights, and cutting-edge delivery technology, we ensure that whether your service request is in downtown Tulsa or a neighborhood on the county&apos;s edge, your legal documents are handled with the utmost care and professionalism.
            </p>
          </div>
        </section>
        {/* Hero Section */}
        <section className="bg-blue-900 text-white pb-12">
          <div className="container mx-auto px-4 pt-16 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Tulsa County Process Server & Legal Document Delivery</h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">Licensed, bonded, and fast process servers for every city and community in Tulsa County. Same-day and rush service available.</p>
            <div className="flex justify-center mt-8">
              <Image src="/images/tulsa-county-courthouse.jpg" width={600} height={350} alt="Tulsa County courthouse process server" className="rounded-lg shadow-lg" />
            </div>
            <p className="text-sm text-blue-100 mt-2">Serving Tulsa, Broken Arrow, Bixby, Jenks, Sand Springs, and every Tulsa County community</p>
            {/* Google Maps Embed for Tulsa County */}
            <div className="flex justify-center mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412235.1229762693!2d-96.2239487441333!3d36.13012920197728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b69324e23801f7%3A0x4296e34c3835c065!2sTulsa%20County%2C%20OK!5e0!3m2!1sen!2sus!4v1690222882674!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tulsa County, OK Map"
                className="rounded-lg shadow-lg w-full max-w-2xl"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Local History Section */}
        <section className="bg-white py-10 border-b">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Tulsa County: A Regional Hub</h2>
            <p className="text-lg text-gray-700">Tulsa County has been a regional hub since it was founded in 1907, home to the oil boom that fueled the city of Tulsa’s meteoric rise. Today, the county blends historic neighborhoods, dynamic suburbs, and vital court systems. Serving legal documents here requires a deep knowledge of both city life and smaller towns across the county.</p>
          </div>
        </section>

        {/* Service Area Grid with Internal Links */}
        <section className="py-10 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Cities, Towns & Communities We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-4">
              {serviceAreas.map(area => (
                <div key={area.name} className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-1">
                    <span className="text-blue-900 font-semibold block text-lg">{area.name}</span>
                    {area.paths && area.paths.length > 0 && (
                      <div className="flex flex-col gap-1 mt-1">
                        {area.paths.map((p, i) => (
                          <Link key={p.href} href={p.href} className="text-blue-700 underline text-sm font-semibold">{p.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-600">{area.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center mt-1">Every city, town, and community in Tulsa County is covered—no job too big or small.</p>
          </div>
        </section>

        {/* Service Descriptions */}
        <section className="py-10 border-b">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Tulsa County Services</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Legal document delivery (all case types)</li>
              <li>Process serving for subpoenas, summons, divorce papers, and more</li>
              <li>Court filings and document stamping</li>
              <li>Skip tracing and diligent search for hard-to-locate recipients</li>
              <li>Same-day and rush service available in every city</li>
              <li>Licensed and bonded for all Tulsa County courts</li>
              <li>Service to homes, businesses, schools, medical facilities, and gated communities</li>
            </ul>
          </div>
        </section>

        {/* Trust & Stats Bar */}
        <section className="bg-blue-50 py-6 border-b">
          <div className="container mx-auto flex flex-wrap justify-center gap-8 text-center">
            <div>
              <span className="block text-3xl font-bold text-blue-800">97%</span>
              <span className="block text-gray-700">First-attempt serve success</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-blue-800">6,000+</span>
              <span className="block text-gray-700">Court papers delivered</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-blue-800">Serving Tulsa County</span>
              <span className="block text-gray-700">since 2018</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-blue-800">100%</span>
              <span className="block text-gray-700">Licensed & Bonded</span>
            </div>
          </div>
        </section>

        {/* Community Connection Section */}
        <section className="bg-white py-10 border-b">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Community Connection</h2>
            <p className="text-lg text-gray-700">We partner with Tulsa County law offices, participate in Chamber of Commerce events, and support local legal outreach. Our team is active in community events and dedicated to serving every neighborhood with professionalism and care.</p>
          </div>
        </section>

        {/* Featured Local Images */}
        <section className="py-10 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Tulsa County in Action</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Image src="/images/tulsa-county-courthouse.jpg" width={350} height={200} alt="Tulsa County courthouse process server" className="rounded shadow mb-2" />
                <span className="text-xs text-gray-600">Tulsa County Courthouse</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/tulsa-downtown-legal.jpg" width={350} height={200} alt="Legal document delivery in downtown Tulsa" className="rounded shadow mb-2" />
                <span className="text-xs text-gray-600">Downtown Tulsa Legal District</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/broken-arrow-rose-district.jpg" width={350} height={200} alt="Process server Broken Arrow Rose District" className="rounded shadow mb-2" />
                <span className="text-xs text-gray-600">Broken Arrow Rose District</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-gray-50 border-t mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Tulsa County FAQs</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-gray-900">{faq.q}</h3>
                <p className="text-gray-700 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Strong CTAs */}
        <section className="bg-blue-100 py-8 border-t text-center">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Request a Tulsa County Process Server Today</h3>
          <p className="text-gray-800 mb-4">Contact us for fast, compliant legal delivery in ANY Tulsa County neighborhood.</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">Get a Free Quote</a>
        </section>

        {/* More Internal Links */}
        <section className="py-8 text-center">
          <h4 className="text-lg font-semibold mb-2">Explore More</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pricing" className="text-blue-700 underline font-semibold">See Pricing</Link>
            <Link href="/faq" className="text-blue-700 underline font-semibold">Main FAQs</Link>
            <Link href="/contact" className="text-blue-700 underline font-semibold">Contact Us</Link>
            <Link href="/courier-services-tulsa" className="text-blue-700 underline font-semibold">Courier Services Tulsa</Link>
          </div>
        </section>
      </div>
      <BusinessSchema />
      <ServiceSchema />
      <FAQSchema />
    </>
  );
}
