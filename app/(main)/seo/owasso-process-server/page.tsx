export const metadata = {
  title: 'Process Server Owasso OK - Same Day Legal Document Service',
  description: 'Professional process server in Owasso, Oklahoma. Same-day service for court papers, subpoenas, and legal notices. Licensed, bonded, and serving all of Tulsa and Rogers County.',
  keywords: 'process server owasso, owasso process server, legal document service owasso, court papers owasso, subpoena service owasso oklahoma',
  openGraph: {
    title: 'Process Server Owasso OK - Same Day Legal Document Service',
    description: 'Professional process server in Owasso, Oklahoma. Same-day service for court papers, subpoenas, and legal notices.',
    url: 'https://justlegalsolutions.org/seo/owasso-process-server',
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/jls-logo.png',
        width: 1200,
        height: 630,
        alt: 'Process Server Owasso Oklahoma'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Owasso OK - Same Day Service',
    description: 'Professional process server in Owasso, Oklahoma. Same-day service for court papers and legal documents.',
    images: ['https://justlegalsolutions.org/images/jls-logo.png'],
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo/owasso-process-server',
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
  name: 'Owasso Municipal Court',
  address: '111 N Main St, Owasso, OK 74055',
  phone: '(918) 376-1550',
  website: 'https://www.cityofowasso.com/183/Municipal-Court',
};

const history = `Owasso, founded in 1904, is a rapidly growing suburb north of Tulsa, Oklahoma. Originally a railroad stop, Owasso has evolved into a vibrant city known for its excellent schools, family-friendly neighborhoods, and strong community spirit. With a population exceeding 39,000, Owasso offers a blend of small-town charm and modern amenities, making it one of the most desirable places to live in the Tulsa metro area.`;

const processServingLaw = `Oklahoma law requires process servers to be licensed, impartial, and at least 18 years old. Service of process in Owasso must comply with the Oklahoma Rules of Civil Procedure (Title 12, Section 2004), which mandate personal delivery, substitute service, or, in some cases, service by publication. Proof of service must be documented and notarized for court acceptance. Our servers are fully licensed and bonded for Tulsa and Rogers counties.`;

const serviceAreas = [
  'Owasso',
  'Collinsville',
  'Tulsa',
  'Sperry',
  'Claremore',
  'Verdigris',
  'Rogers County',
  'Tulsa County',
];

const faqs = [
  {
    q: 'What types of documents do you serve in Owasso?',
    a: 'We serve summons, complaints, subpoenas, eviction notices, divorce papers, small claims, and all other legal documents.'
  },
  {
    q: 'How fast can you serve papers in Owasso?',
    a: 'Standard service is typically completed within 3-5 business days. Rush and same-day service are available for urgent cases.'
  },
  {
    q: 'Is your service legally valid in Owasso courts?',
    a: 'Yes. We are fully licensed and bonded in Oklahoma. All service is performed in strict compliance with state law, and we provide a notarized Affidavit of Service for court filing.'
  },
  {
    q: 'What if the recipient is avoiding service?',
    a: 'Our servers use advanced techniques and multiple attempts. If personal service is not possible, we follow Oklahoma law for substitute service or service by publication.'
  },
  {
    q: 'Do you serve outside Owasso?',
    a: 'Yes, we serve all of Tulsa and Rogers counties and the greater Tulsa metro area.'
  },
];

export default function OwassoProcessServer() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Owasso, Oklahoma Process Server</h1>
        <p className="text-lg text-gray-700 mb-6">Professional, licensed, and bonded process servers for all your legal document delivery needs in Owasso and the Tulsa metro area.</p>

        {/* Brief City History */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow">
          <h2 className="text-2xl font-semibold mb-2">About Owasso</h2>
          <p className="text-gray-800">{history}</p>
        </div>

        {/* Courthouse Info */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow">
          <h2 className="text-2xl font-semibold mb-2">Owasso Municipal Court</h2>
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
