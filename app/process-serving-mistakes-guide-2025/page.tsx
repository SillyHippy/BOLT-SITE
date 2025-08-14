import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';

const canonicalUrl = 'https://justlegalsolutions.org/process-serving-mistakes-guide-2025';
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Top 10 Process Serving Mistakes That Can Cost You Your Case",
  "description": "Avoid costly process serving errors in Oklahoma. Learn the top 10 mistakes that invalidate service and jeopardize your legal case in 2025.",
  "image": [
    "/images/Mistake prevention checklist infographic.png"
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

export default function ProcessServingMistakesGuide2025() {
  return (
    <>
      <Head>
        <title>Top 10 Process Serving Mistakes That Can Cost You Your Case</title>
        <meta name="description" content="Avoid costly process serving errors in Oklahoma. Learn the top 10 mistakes that invalidate service and jeopardize your legal case in 2025." />
        <meta name="keywords" content="process serving mistakes, Oklahoma process server, service errors, legal case, 2025, checklist" />
        <meta property="og:title" content="Top 10 Process Serving Mistakes That Can Cost You Your Case" />
        <meta property="og:description" content="Avoid costly process serving errors in Oklahoma. Learn the top 10 mistakes that invalidate service and jeopardize your legal case in 2025." />
        <meta property="og:image" content="/images/Mistake prevention checklist infographic.png" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Just Legal Solutions" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top 10 Process Serving Mistakes That Can Cost You Your Case" />
        <meta name="twitter:description" content="Avoid costly process serving errors in Oklahoma. Learn the top 10 mistakes that invalidate service and jeopardize your legal case in 2025." />
        <meta name="twitter:image" content="/images/Mistake prevention checklist infographic.png" />
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
        <h1 className="text-4xl font-bold mb-4">Top 10 Process Serving Mistakes That Can Cost You Your Case</h1>
        <p className="italic mb-6">Avoid costly process serving errors in Oklahoma. Learn the top 10 mistakes that invalidate service and jeopardize your legal case in 2025.</p>
        <Image src="/images/Mistake prevention checklist infographic.png" alt="Process Serving Mistakes Checklist" width={800} height={400} className="rounded shadow mb-4" />
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Mistake #1: Inadequate Address Verification</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Serving documents at outdated or incorrect addresses</li>
            <li>Failure to conduct comprehensive verification</li>
            <li>Multi-source verification protocol required</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Mistake #2: Improper Timing and Deadline Violations</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Statutory service timelines and deadline management</li>
            <li>Service hour restrictions and holiday rules</li>
            <li>Documentation requirements for timing</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Mistake #3: Insufficient Documentation and Affidavit Errors</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Incomplete or inaccurate affidavits</li>
            <li>Required documentation elements</li>
            <li>Quality assurance protocols</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Mistake #4: Wrong Person Service and Identity Errors</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Serving documents to incorrect individuals</li>
            <li>Insufficient defendant verification</li>
            <li>Identity verification protocols</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
