import Image from 'next/image';
import { Metadata } from 'next';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';

const canonicalUrl = 'https://justlegalsolutions.org/family-law-service-guide-tulsa';

export const metadata: Metadata = {
  title: 'Family Law Service Guide Tulsa (Updated 2026) | Just Legal Solutions',
  description: 'Expert guide to serving protective orders and divorce papers in Tulsa County. Current family law service requirements, safety protocols, and procedures for 2026.',
  keywords: 'family law service, Tulsa County, protective orders, divorce papers, process server, Oklahoma,  2026',
  authors: [{ name: 'Just Legal Solutions Team' }],
  openGraph: {
    title: 'Family Law Service Guide Tulsa 2026 | Just Legal Solutions',
    description: 'Expert guide to serving protective orders and divorce papers in Tulsa County. 2026 family law service requirements, safety protocols, and procedures.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: '/images/tulsa-county-courthouse.jpeg',
        width: 1200,
        height: 630,
        alt: 'Family Law Service Guide Tulsa 2026'
      }
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Law Service Guide Tulsa 2026 | Just Legal Solutions',
    description: 'Expert guide to serving protective orders and divorce papers in Tulsa County. 2026 family law service requirements, safety protocols, and procedures.',
    images: ['/images/tulsa-county-courthouse.jpeg'],
    creator: '@JustLegalSolutions',
    site: '@JustLegalSolutions',
  },
  robots: 'index, follow',
  alternates: {
    canonical: canonicalUrl,
  },
  other: {
    'article:author': 'Just Legal Solutions Team',
    'article:published_time': '2025-08-14',
    'article:modified_time': '2026-01-25',
  },
};
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": canonicalUrl,
  "url": canonicalUrl,
  "headline": "Family Law Service: Serving Protective Orders & Divorce Papers in Tulsa County",
  "description": "Expert guide to serving protective orders and divorce papers in Tulsa County. 2026 family law service requirements, safety protocols, and procedures.",
  "image": [
    "https://justlegalsolutions.org/images/tulsa-county-courthouse.jpeg",
    "https://justlegalsolutions.org/images/Legal-document-types-process-server.png",
    "https://justlegalsolutions.org/images/Professional process server business logo badge with scales of justice and Oklahoma outline for legal services.png",
    "https://justlegalsolutions.org/images/due-process-legal-concept.png"
  ],
  "author": {
    "@type": "Organization",
    "name": "JLS Legal Solutions",
    "url": "https://justlegalsolutions.org"
  },
  "publisher": {
    "@type": "Organization",
"foundingDate": "2025-03-01",
"description": "Professional process serving with over 50 years combined industry experience",
    "name": "Just Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://justlegalsolutions.org/images/jls-logo.webp"
    }
  },
  "datePublished": "2025-08-14T00:00:00-05:00",
  "dateModified": "2026-01-25T00:00:00-05:00",
  "mainEntityOfPage": canonicalUrl
};

export default function FamilyLawServiceGuideTulsa() {
  return (
    <>
      <Navbar />
      <JsonLd data={articleSchema} />
      <main className="max-w-4xl mx-auto px-4 py-8 pt-24">
        <h1 className="text-4xl font-bold mb-4">Family Law Service: Serving Protective Orders &amp; Divorce Papers in Tulsa County</h1>
        <p className="italic mb-6">Serving documents in family law cases requires sensitivity, speed, and strict compliance with Oklahoma statutes. Tulsa County courts demand expedited service for protective orders and accurate service for divorce petitions to protect vulnerable parties and secure jurisdiction. This guide covers statutory requirements, safety protocols, documentation standards, and technology integration for family law service in Tulsa County as of 2026.</p>
        <Image src="/images/tulsa-county-courthouse.jpeg" alt="Tulsa County Courthouse - Family Law Services" width={800} height={400} className="rounded shadow mb-4" />
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Protective Order Service Requirements</h2>
          <h3 className="text-xl font-bold mb-2">Emergency Protective Orders (EPO)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Under 22 O.S. § 60.4, emergency protective orders <strong>must be served by law enforcement officers</strong>.</li>
            <li>Our role: coordinate with law enforcement agencies, track service status, and ensure timely filing of proof of service.</li>
            <li>Obtain certified EPO signed by the judge and deliver to the appropriate law enforcement agency for service.</li>
            <li>Document service time, officer ID, and agency details.</li>
            <li>File proof of service promptly after law enforcement confirms completion.</li>
          </ul>
          <Image src="/images/due-process-legal-concept.png" alt="Legal Due Process and Protective Order Service Protocols" width={800} height={400} className="rounded shadow mb-4" />
          <p className="text-sm italic text-gray-600 mb-4">Note: Delays in EPO service can jeopardize an applicant&apos;s ex parte protections. Prompt coordination with law enforcement is critical.</p>
          <h3 className="text-xl font-bold mb-2">Temporary & Permanent Protective Orders</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Temporary orders follow similar service timelines.</li>
            <li>Permanent protective orders require personal service within applicable timeframes before the hearing, as set by court order and consistent with 12 O.S. § 2004.</li>
            <li>If personal service fails, the court may authorize alternative methods (publication or certified mail) under 12 O.S. § 2004(D).</li>
            <li>Coordinate with law enforcement for safety; as a firm practice, we use GPS-tagged photos in affidavits for enhanced documentation.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Divorce Petition Service Protocols</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Oklahoma divorce petitions must be served under 43 O.S. §113(A) via personal service, acceptance by respondent, or publication after diligent search.</li>
            <li>Verify current address with OSBI, utility records, and credit header</li>
            <li>Attempt service at multiple times/days</li>
            <li>Use notarized affidavit template listing attempts</li>
            <li>Respondent may sign a court-approved acknowledgment of service form (check with the Tulsa County Court Clerk for the current form); ensure notary compliance.</li>
            <li>After exercising due diligence to locate the respondent (which may include multiple attempts at different times and days), court-authorized service by publication in the Tulsa World may be pursued. File proof of publication upon completion.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Safety & Risk Assessment</h2>
          <p className="text-sm italic text-gray-600 mb-2">The following are internal firm safety practices used by Just Legal Solutions — they are not statutory requirements.</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Conduct pre-service risk assessment using our internal Lethality Assessment Protocol</li>
            <li>Collaborate with victim advocates and law enforcement as appropriate</li>
            <li>Maintain a two-person team for high-risk service situations</li>
            <li>Use unmarked vehicles and plain clothes when appropriate for server safety</li>
          </ul>
          <Image src="/images/Professional process server business logo badge with scales of justice and Oklahoma outline for legal services.png" alt="Professional Process Server Safety and Legal Services" width={800} height={400} className="rounded shadow mb-4" />
          <p><b>Resource:</b> Tulsa County DV Resource Center contact details should be included in served materials.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Documentation & Affidavit Standards</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Server name, badge ID, or private investigator license</li>
            <li>Date, time, location, and recipient description</li>
            <li>GPS coordinates and time-stamped photos (firm practice for enhanced documentation)</li>
            <li>Statements from witnesses (e.g., law enforcement) when applicable</li>
            <li>Use standardized affidavit forms to ensure courts accept them without objection</li>
          </ul>
          <Image src="/images/Legal-document-types-process-server.png" alt="Family Law Documentation and Legal Document Examples" width={800} height={400} className="rounded shadow mb-4" />
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Electronic Service & E-Filing</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Tulsa County supports eService for family law filings under 12 O.S. § 2004.5</li>
            <li>Obtain respondent’s written consent in a verified filing</li>
            <li>Use Court E-Filing system for both filing and service</li>
            <li>Retain delivery receipts, system logs, and email headers</li>
            <li>Backup with personal or mail service if delivery fails</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Legal Guides</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li><a href="/oklahoma-process-server-laws" className="text-blue-700 underline">Oklahoma Process Server Laws</a></li>
                <li><a href="/oklahoma-process-server-best-practices-checklist-2026" className="text-blue-700 underline">Best Practices Checklist 2026</a></li>
                <li><a href="/oklahoma-electronic-service-guide-2025" className="text-blue-700 underline">Oklahoma Electronic Service Guide</a></li>
                <li><a href="/oklahoma-case-law-service-process" className="text-blue-700 underline">Oklahoma Case Law on Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Service Areas</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li><a href="/tulsa-process-server" className="text-blue-700 underline">Tulsa Process Server</a></li>
                <li><a href="/service-areas/broken-arrow" className="text-blue-700 underline">Broken Arrow Process Server</a></li>
                <li><a href="/counties/tulsa-county" className="text-blue-700 underline">Tulsa County Service</a></li>
                <li><a href="/service-areas" className="text-blue-700 underline">All Service Areas</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-green-50 border border-green-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-green-800">Need Family Law Process Serving in Tulsa?</h3>
            <p className="mb-4 text-gray-700">Our experienced team handles sensitive family law cases with professionalism and discretion.</p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">Contact Us Today</a>
              <a href="/pricing" className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50">View Pricing</a>
              <a href="/weekend-emergency" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">🚨 Emergency</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
