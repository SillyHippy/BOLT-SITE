import Head from 'next/head';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';

const canonicalUrl = 'https://justlegalsolutions.org/oklahoma-process-server-faq-2025';
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a process server?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A process server is a professional who delivers legal documents to parties involved in court cases, ensuring proper notification and legal compliance."
      }
    },
    {
      "@type": "Question",
      "name": "How much does process serving cost in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Routine service typically costs $85-$125, with rush and special services available for additional fees."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do Oklahoma process servers cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Process servers cover all major cities, suburban areas, and rural regions throughout Oklahoma."
      }
    },
    {
      "@type": "Question",
      "name": "Are process servers licensed in Oklahoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Oklahoma requires process servers to be licensed and comply with state regulations."
      }
    }
  ]
};

export default function OklahomaProcessServerFAQ2025() {
  return (
    <>
      <Head>
        <title>Oklahoma Process Server FAQ 2025</title>
        <meta name="description" content="Frequently asked questions about process servers in Oklahoma for 2025, including costs, coverage, and licensing." />
        <meta name="keywords" content="Oklahoma process server, FAQ, costs, coverage, licensing, 2025" />
        <meta property="og:title" content="Oklahoma Process Server FAQ 2025" />
        <meta property="og:description" content="Frequently asked questions about process servers in Oklahoma for 2025, including costs, coverage, and licensing." />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Just Legal Solutions" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oklahoma Process Server FAQ 2025" />
        <meta name="twitter:description" content="Frequently asked questions about process servers in Oklahoma for 2025, including costs, coverage, and licensing." />
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
        <h1 className="text-4xl font-bold mb-4">Oklahoma Process Server FAQ 2025</h1>
        <p className="italic mb-6">Frequently asked questions about process servers in Oklahoma for 2025, including costs, coverage, and licensing.</p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">What is a process server?</h3>
              <p>A process server is a professional who delivers legal documents to parties involved in court cases, ensuring proper notification and legal compliance.</p>
            </div>
            <div>
              <h3 className="font-bold">How much does process serving cost in Oklahoma?</h3>
              <p>Routine service typically costs $85-$125, with rush and special services available for additional fees.</p>
            </div>
            <div>
              <h3 className="font-bold">What areas do Oklahoma process servers cover?</h3>
              <p>Process servers cover all major cities, suburban areas, and rural regions throughout Oklahoma.</p>
            </div>
            <div>
              <h3 className="font-bold">Are process servers licensed in Oklahoma?</h3>
              <p>Yes, Oklahoma requires process servers to be licensed and comply with state regulations.</p>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Call to Action</h2>
          <div className="bg-indigo-100 border-l-4 border-indigo-500 text-indigo-900 p-6 rounded mb-4">
            <h3 className="text-xl font-bold mb-2">Have More Questions?</h3>
            <p>Contact Just Legal Solutions for expert answers and reliable process serving in Oklahoma. <a href="/contact" className="underline text-indigo-700">Ask Us Anything</a></p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Oklahoma Service Area Map</h2>
          <iframe src="https://www.google.com/maps/d/embed?mid=1QwK8QwK8QwK8QwK8QwK8QwK8QwK8QwK8" width="100%" height="400" title="Oklahoma Service Area Map" className="rounded shadow mb-4"></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
}
