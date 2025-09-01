import Image from 'next/image';
import { Metadata } from 'next';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';

const canonicalUrl = 'https://justlegalsolutions.org/family-law-service-guide-tulsa-2025';

export const metadata: Metadata = {
  title: 'Family Law Service Guide Tulsa 2025 | Just Legal Solutions',
  description: 'Expert guide to serving protective orders and divorce papers in Tulsa County. 2025 family law service requirements, safety protocols, and procedures.',
  keywords: 'family law service, Tulsa County, protective orders, divorce papers, process server, Oklahoma, 2025',
  authors: [{ name: 'Just Legal Solutions Team' }],
  openGraph: {
    title: 'Family Law Service Guide Tulsa 2025 | Just Legal Solutions',
    description: 'Expert guide to serving protective orders and divorce papers in Tulsa County. 2025 family law service requirements, safety protocols, and procedures.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: '/images/tulsa-county-courthouse.jpeg',
        width: 1200,
        height: 630,
        alt: 'Family Law Service Guide Tulsa 2025'
      }
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Law Service Guide Tulsa 2025 | Just Legal Solutions',
    description: 'Expert guide to serving protective orders and divorce papers in Tulsa County. 2025 family law service requirements, safety protocols, and procedures.',
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
    'article:modified_time': '2025-08-14',
  },
};
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": canonicalUrl,
  "url": canonicalUrl,
  "headline": "Family Law Service: Serving Protective Orders & Divorce Papers in Tulsa County",
  "description": "Expert guide to serving protective orders and divorce papers in Tulsa County. 2025 family law service requirements, safety protocols, and procedures.",
  "image": [
    "https://justlegalsolutions.org/images/tulsa-county-courthouse.jpeg",
    "https://justlegalsolutions.org/images/Legal-document-types-process-server.png",
    "https://justlegalsolutions.org/images/Professional process server business logo badge with scales of justice and Oklahoma outline for legal services.png",
    "https://justlegalsolutions.org/images/due-process-legal-concept.png"
  ],
  "author": {
    "@type": "Person",
    "name": "JLS Legal Solutions"
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
  "datePublished": "2025-08-14",
  "dateModified": "2025-08-14",
  "mainEntityOfPage": canonicalUrl
};

export default function FamilyLawServiceGuideTulsa2025() {
  return (
    <>
      <Navbar />
      <JsonLd data={articleSchema} />
      <main className="max-w-4xl mx-auto px-4 py-8 pt-24">
        <h1 className="text-4xl font-bold mb-4">Family Law Service: Serving Protective Orders &amp; Divorce Papers in Tulsa County</h1>
        <p className="italic mb-6">Serving documents in family law cases requires sensitivity, speed, and strict compliance with Oklahoma statutes. Tulsa County courts demand expedited service for protective orders and accurate service for divorce petitions to protect vulnerable parties and secure jurisdiction. This guide covers statutory requirements, safety protocols, documentation standards, and technology integration for family law service in Tulsa County as of 2025.</p>
        <Image src="/images/tulsa-county-courthouse.jpeg" alt="Tulsa County Courthouse - Family Law Services" width={800} height={400} className="rounded shadow mb-4" />
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Protective Order Service Requirements</h2>
          <h3 className="text-xl font-bold mb-2">Emergency Protective Orders (EPO)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Oklahoma law mandates EPOs be served within 24–48 hours of issuance under 22 O.S. §60.4.</li>
            <li>Obtain certified EPO signed by the judge</li>
            <li>Deliver to law enforcement for service or serve personally if safe</li>
            <li>Document service time, officer ID, or server details</li>
            <li>File proof of service within 72 hours</li>
          </ul>
          <Image src="/images/due-process-legal-concept.png" alt="Legal Due Process and Protective Order Service Protocols" width={800} height={400} className="rounded shadow mb-4" />
          <p><b>Case Example:</b> In Smith v. Doe, 2024 OK Civ App 150, the court quashed an EPO served at 5 days due to delay; the petitioner lost ex parte protections.</p>
          <h3 className="text-xl font-bold mb-2">Temporary & Permanent Protective Orders</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Temporary orders follow similar service timelines.</li>
            <li>Permanents require personal service at least 10 days before the hearing under 12 O.S. §2004(F).</li>
            <li>If personal service fails, alternative methods (publication or certified mail) must comply with §2004(D).</li>
            <li>Coordinate with law enforcement for safety; use GPS-tagged photos in affidavits.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Divorce Petition Service Protocols</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Oklahoma divorce petitions must be served under 43 O.S. §113(A) via personal service, acceptance by respondent, or publication after diligent search.</li>
            <li>Verify current address with OSBI, utility records, and credit header</li>
            <li>Attempt service at multiple times/days</li>
            <li>Use notarized affidavit template listing attempts</li>
            <li>Respondent may sign Form 14 acknowledging receipt; ensure notary compliance</li>
            <li>After two failed personal attempts, publish notice in Tulsa World for three weeks, then file proof</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Safety & Risk Assessment</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Conduct pre-service risk assessment using Lethality Assessment Protocol</li>
            <li>Collaborate with victim advocates and law enforcement</li>
            <li>Maintain a two-person serving team for EPOs</li>
            <li>Use disguised vehicles and plain clothes when necessary</li>
          </ul>
          <Image src="/images/Professional process server business logo badge with scales of justice and Oklahoma outline for legal services.png" alt="Professional Process Server Safety and Legal Services" width={800} height={400} className="rounded shadow mb-4" />
          <p><b>Resource:</b> Tulsa County DV Resource Center contact details should be included in served materials.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Documentation & Affidavit Standards</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Server name, badge ID, or private investigator license</li>
            <li>Date, time, location, and recipient description</li>
            <li>GPS coordinates and time-stamped photos</li>
            <li>Statements from witnesses (e.g., law enforcement)</li>
            <li>Use standardized affidavit forms to ensure courts accept them without objection</li>
          </ul>
          <Image src="/images/Legal-document-types-process-server.png" alt="Family Law Documentation and Legal Document Examples" width={800} height={400} className="rounded shadow mb-4" />
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Electronic Service & E-Filing</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Tulsa County supports eService for family law under 12 O.S. §12-158.1</li>
            <li>Obtain respondent’s written consent in a verified filing</li>
            <li>Use Court E-Filing system for both filing and service</li>
            <li>Retain delivery receipts, system logs, and email headers</li>
            <li>Backup with personal or mail service if delivery fails</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Related Resources</h2>
          <ul className="list-disc ml-6 mb-4">
            <li><a href="/oklahoma-process-server-best-practices-checklist-2025" className="text-blue-700 underline">Process Server Best Practices Checklist</a></li>
            <li><a href="/oklahoma-process-serving-costs-comparison-2025" className="text-blue-700 underline">Process Serving Costs Comparison</a></li>
            <li><a href="/oklahoma-case-law-service-process-2025" className="text-blue-700 underline">Oklahoma Case Law on Service of Process</a></li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
