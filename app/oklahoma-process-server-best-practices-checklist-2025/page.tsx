import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';

const canonicalUrl = 'https://justlegalsolutions.org/oklahoma-process-server-best-practices-checklist-2025';
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Oklahoma Process Server Best Practices Checklist 2025",
  "description": "Complete 2025 Oklahoma process server checklist covering 12 O.S. §12-2004 requirements, Tulsa County protocols, and professional standards.",
  "image": [
    "/images/oklahoma-licensed-bonded-process-server-badges.png"
  ],
  "author": {
    "@type": "Person",
    "name": "JLS Legal Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Just Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "/images/jls-logo.webp"
    }
  },
  "datePublished": "2025-08-14",
  "dateModified": "2025-08-14",
  "mainEntityOfPage": canonicalUrl
};

export default function OklahomaProcessServerBestPracticesChecklist2025() {
  return (
    <>
      <Head>
        <title>Oklahoma Process Server Best Practices Checklist 2025</title>
        <meta name="description" content="Complete 2025 Oklahoma process server checklist covering 12 O.S. §12-2004 requirements, Tulsa County protocols, and professional standards." />
        <meta name="keywords" content="Oklahoma process server, best practices, checklist, 2025, service of process, compliance, documentation" />
        <meta property="og:title" content="Oklahoma Process Server Best Practices Checklist 2025" />
        <meta property="og:description" content="Complete 2025 Oklahoma process server checklist covering 12 O.S. §12-2004 requirements, Tulsa County protocols, and professional standards." />
        <meta property="og:image" content="/images/oklahoma-licensed-bonded-process-server-badges.png" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Just Legal Solutions" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oklahoma Process Server Best Practices Checklist 2025" />
        <meta name="twitter:description" content="Complete 2025 Oklahoma process server checklist covering 12 O.S. §12-2004 requirements, Tulsa County protocols, and professional standards." />
        <meta name="twitter:image" content="/images/oklahoma-licensed-bonded-process-server-badges.png" />
        <meta name="twitter:site" content="@JustLegalSolutions" />
        <meta name="twitter:creator" content="@JustLegalSolutions" />
        <meta name="author" content="JLS Legal Solutions" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="language" content="en" />
        <meta name="publish_date" content="2025-08-14" />
      </Head>
      <Navbar />
      <JsonLd data={articleSchema} />
      <main className="max-w-4xl mx-auto px-4 py-8 pt-24">
        <h1 className="text-4xl font-bold mb-4">Oklahoma Process Server Best Practices Checklist 2025</h1>
        <p className="italic mb-6">Complete 2025 Oklahoma process server checklist covering 12 O.S. §12-2004 requirements, Tulsa County protocols, and professional standards.</p>
        <Image src="/images/oklahoma-licensed-bonded-process-server-badges.png" alt="Oklahoma Process Server Badges" width={800} height={400} className="rounded shadow mb-4" />
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Understanding Oklahoma Service Requirements</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Statutory framework: 12 O.S. §12-2004</li>
            <li>Constitutional due process standards</li>
            <li>Service authority and limitations</li>
            <li>Geographic limitations</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Pre-Service Preparation Checklist</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Document verification and preparation</li>
            <li>Address and location verification</li>
            <li>Database resources: TLOxp, Accurint, IRBsearch, Westlaw PeopleMap</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Service Attempt Protocols</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>First attempt requirements</li>
            <li>Professional conduct standards</li>
            <li>Multiple attempt strategy</li>
            <li>Documentation requirements</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Documentation and Affidavit Requirements</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Required documentation elements</li>
            <li>Mandatory information: server name, license, date/time/location</li>
            <li>Quality assurance protocols</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
