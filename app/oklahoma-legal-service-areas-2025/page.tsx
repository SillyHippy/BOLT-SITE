import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';

const canonicalUrl = 'https://justlegalsolutions.org/oklahoma-legal-service-areas-2025';
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Oklahoma Legal Service Areas: Comprehensive Coverage for 2025",
  "description": "Discover the full range of legal service areas covered by process servers in Oklahoma for 2025, including urban, suburban, and rural regions.",
  "image": [
    "/images/Oklahoma legal service area map.png"
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

export default function OklahomaLegalServiceAreas2025() {
  return (
    <>
      <Head>
        <title>Oklahoma Legal Service Areas: Comprehensive Coverage for 2025</title>
        <meta name="description" content="Discover the full range of legal service areas covered by process servers in Oklahoma for 2025, including urban, suburban, and rural regions." />
        <meta name="keywords" content="Oklahoma legal service areas, process server coverage, urban, suburban, rural, 2025" />
        <meta property="og:title" content="Oklahoma Legal Service Areas: Comprehensive Coverage for 2025" />
        <meta property="og:description" content="Discover the full range of legal service areas covered by process servers in Oklahoma for 2025, including urban, suburban, and rural regions." />
        <meta property="og:image" content="/images/Oklahoma legal service area map.png" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Just Legal Solutions" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oklahoma Legal Service Areas: Comprehensive Coverage for 2025" />
        <meta name="twitter:description" content="Discover the full range of legal service areas covered by process servers in Oklahoma for 2025, including urban, suburban, and rural regions." />
        <meta name="twitter:image" content="/images/Oklahoma legal service area map.png" />
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
        <h1 className="text-4xl font-bold mb-4">Oklahoma Legal Service Areas: Comprehensive Coverage for 2025</h1>
        <p className="italic mb-6">Discover the full range of legal service areas covered by process servers in Oklahoma for 2025, including urban, suburban, and rural regions.</p>
        <Image src="/images/Oklahoma legal service area map.png" alt="Oklahoma Legal Service Area Map" width={800} height={400} className="rounded shadow mb-4" />
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Urban, Suburban, and Rural Coverage</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Tulsa, Oklahoma City, Norman, Edmond</li>
            <li>Suburban communities and business districts</li>
            <li>Remote rural regions and tribal lands</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Specialized Service Protocols</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Expedited service for urgent cases</li>
            <li>Compliance with local regulations</li>
            <li>Coordination with law enforcement</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Call to Action</h2>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-6 rounded mb-4">
            <h3 className="text-xl font-bold mb-2">Need Service Anywhere in Oklahoma?</h3>
            <p>Contact Just Legal Solutions for comprehensive process serving across all Oklahoma regions. <a href="/contact" className="underline text-yellow-700">Request Coverage</a></p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Oklahoma Legal Service Area Map</h2>
          <iframe src="https://www.google.com/maps/d/embed?mid=1QwK8QwK8QwK8QwK8QwK8QwK8QwK8QwK8" width="100%" height="400" title="Oklahoma Legal Service Area Map" className="rounded shadow mb-4"></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
}
