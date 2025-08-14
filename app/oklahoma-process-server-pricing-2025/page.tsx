import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';

const canonicalUrl = 'https://justlegalsolutions.org/oklahoma-process-server-pricing-2025';
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Oklahoma Process Server Pricing Guide for 2025",
  "description": "Transparent pricing guide for process server services in Oklahoma for 2025, including standard rates, rush fees, and value-added options.",
  "image": [
    "/images/Oklahoma process server pricing chart.png"
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

export default function OklahomaProcessServerPricing2025() {
  return (
    <>
      <Head>
        <title>Oklahoma Process Server Pricing Guide for 2025</title>
        <meta name="description" content="Transparent pricing guide for process server services in Oklahoma for 2025, including standard rates, rush fees, and value-added options." />
        <meta name="keywords" content="Oklahoma process server, pricing, rates, rush fees, 2025" />
        <meta property="og:title" content="Oklahoma Process Server Pricing Guide for 2025" />
        <meta property="og:description" content="Transparent pricing guide for process server services in Oklahoma for 2025, including standard rates, rush fees, and value-added options." />
        <meta property="og:image" content="/images/Oklahoma process server pricing chart.png" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Just Legal Solutions" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oklahoma Process Server Pricing Guide for 2025" />
        <meta name="twitter:description" content="Transparent pricing guide for process server services in Oklahoma for 2025, including standard rates, rush fees, and value-added options." />
        <meta name="twitter:image" content="/images/Oklahoma process server pricing chart.png" />
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
        <h1 className="text-4xl font-bold mb-4">Oklahoma Process Server Pricing Guide for 2025</h1>
        <p className="italic mb-6">Transparent pricing guide for process server services in Oklahoma for 2025, including standard rates, rush fees, and value-added options.</p>
        <Image src="/images/Oklahoma process server pricing chart.png" alt="Oklahoma Process Server Pricing Chart" width={800} height={400} className="rounded shadow mb-4" />
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Standard Pricing</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Routine service: $85 - $125</li>
            <li>Rush service: $150 - $200</li>
            <li>Stakeout: $75/hour</li>
            <li>Additional attempts: $25/each</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Value-Added Options</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>GPS-verified affidavits</li>
            <li>Real-time status updates</li>
            <li>Secure document portal access</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Call to Action</h2>
          <div className="bg-purple-100 border-l-4 border-purple-500 text-purple-900 p-6 rounded mb-4">
            <h3 className="text-xl font-bold mb-2">Get a Custom Quote for Your Case</h3>
            <p>Contact Just Legal Solutions for transparent, competitive pricing on process serving in Oklahoma. <a href="/contact" className="underline text-purple-700">Request a Quote</a></p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Oklahoma Pricing Map</h2>
          <iframe src="https://www.google.com/maps/d/embed?mid=1QwK8QwK8QwK8QwK8QwK8QwK8QwK8QwK8" width="100%" height="400" title="Oklahoma Pricing Map" className="rounded shadow mb-4"></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
}
