import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Broken Arrow OK - Same Day Legal Document Service',
  description: 'Professional process server in Broken Arrow, Oklahoma. Same-day service for court papers, subpoenas, and legal notices. Licensed, bonded, and serving all of Tulsa County.',
  keywords: 'process server broken arrow, broken arrow process server, legal document service broken arrow, court papers broken arrow, subpoena service broken arrow oklahoma',
  openGraph: {
    title: 'Process Server Broken Arrow OK - Same Day Legal Document Service',
    description: 'Professional process server in Broken Arrow, Oklahoma. Same-day service for court papers, subpoenas, and legal notices.',
    url: 'https://justlegalsolutions.org/seo/broken-arrow-process-server',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.png',
        width: 1200,
        height: 630,
        alt: 'Process Server Broken Arrow Oklahoma'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Broken Arrow OK - Same Day Service',
    description: 'Professional process server in Broken Arrow, Oklahoma. Same-day service for court papers and legal documents.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/broken-arrow-process-server',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const courthouse = {
  name: 'Broken Arrow Municipal Court',
  address: '2302 S 1st Pl, Broken Arrow, OK 74012',
  phone: '(918) 451-8558',
  website: 'https://www.brokenarrowok.gov/government/municipal-court',
};

const history = `Broken Arrow, founded in 1902, is the largest suburb of Tulsa and the fourth most populous city in Oklahoma. Its name comes from a Muscogee (Creek) community forcibly relocated from Alabama. The city grew from an agricultural hub to a thriving manufacturing and residential center, with a vibrant downtown Rose District and a population of over 113,000. Broken Arrow is known for its strong schools, diverse economy, and family-friendly atmosphere.`;

const processServingLaw = `Oklahoma law requires process servers to be licensed, impartial, and at least 18 years old. Service of process in Broken Arrow must comply with the Oklahoma Rules of Civil Procedure (Title 12, Section 2004), which mandate personal delivery, substitute service, or, in some cases, service by publication. Proof of service must be documented and notarized for court acceptance. Our servers are fully licensed and bonded for Tulsa and Wagoner counties.`;

const serviceAreas = [
  'Broken Arrow',
  'Rose District',
  'South Tulsa',
  'East Tulsa',
  'New Tulsa',
  'Liberty',
  'Forest Ridge',
  'Stone Wood Hills',
  'Country Aire',
  'Wagoner County',
  'Tulsa County',
];

const faqs = [
  {
    q: 'What types of documents do you serve in Broken Arrow?',
    a: 'We serve summons, complaints, subpoenas, eviction notices, divorce papers, small claims, and all other legal documents.'
  },
  {
    q: 'How fast can you serve papers in Broken Arrow?',
    a: 'Standard service is typically completed within 3-5 business days. Rush and same-day service are available for urgent cases.'
  },
  {
    q: 'Is your service legally valid in Broken Arrow courts?',
    a: 'Yes. We are fully licensed and bonded in Oklahoma. All service is performed in strict compliance with state law, and we provide a notarized Affidavit of Service for court filing.'
  },
  {
    q: 'What if the recipient is avoiding service?',
    a: 'Our servers use advanced techniques and multiple attempts. If personal service is not possible, we follow Oklahoma law for substitute service or service by publication.'
  },
  {
    q: 'Do you serve outside Broken Arrow?',
    a: 'Yes, we serve all of Tulsa and Wagoner counties and the greater Tulsa metro area.'
  },
];

export default function ProcessServerBrokenArrowPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Broken Arrow, Oklahoma Process Server</h1>
        <p className="text-lg text-gray-700 mb-6">Professional, licensed, and bonded process servers for all your legal document delivery needs in Broken Arrow and the Tulsa metro area.</p>

        {/* Brief City History */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow">
          <h2 className="text-2xl font-semibold mb-2">About Broken Arrow</h2>
          <p className="text-gray-800">{history}</p>
        </div>

        {/* Courthouse Info */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow">
          <h2 className="text-2xl font-semibold mb-2">Broken Arrow Municipal Court</h2>
          <p className="text-gray-800 mb-2">Address: {courthouse.address}</p>
          <p className="text-gray-800 mb-2">Phone: {courthouse.phone}</p>
          <p className="text-gray-800">Website: <a href={courthouse.website} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">{courthouse.website}</a></p>
        </div>

        {/* Process Serving Law */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow">
          <h2 className="text-2xl font-semibold mb-2">Oklahoma Process Serving Laws</h2>
          <p className="text-gray-800">{processServingLaw}</p>
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow">
          <h2 className="text-2xl font-semibold mb-2">Service Areas</h2>
          <ul className="list-disc list-inside text-gray-800">
            {serviceAreas.map(area => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-gray-900">{faq.q}</h3>
                <p className="text-gray-800 mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-100 rounded-lg p-6 mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-2">Ready to Get Started?</h2>
          <p className="mb-4 text-gray-800">Call us now for a quote or to schedule service. We offer same-day and rush options for urgent cases.</p>
          <a href="tel:5393676832" className="bg-blue-600 text-white px-8 py-4 rounded-lg inline-block font-bold text-lg hover:bg-blue-700 transition-colors">
            Call (539) 367-6832
          </a>
        </div>
      </div>
    </div>
  );
}
