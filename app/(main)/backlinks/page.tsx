import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
// app/(main)/backlinks/page.tsx

export default function BacklinksPage() {
  const backlinkUrls = [
    // Original Links
    'https://www.manta.com/c/m1x7pgf/just-legal-solutions',
    'https://www.showmelocal.com/38832951-just-legal-solutions-glenpool',
    'https://www.crunchbase.com/organization/just-legal-solutions',
    
    // Additional Links Found
    'https://www.alignable.com/glenpool-ok/just-legal-solutions',
    'https://www.elocal.com/profile/just-legal-solutions-21951593',
    'https://www.yellowpages.com/glenpool-ok/mip/just-legal-solutions-606085805',
    'https://www.dnb.com/business-directory/company-profiles.just_legal_solutions_llc.html',
    'https://clutch.co/profile/just-legal-solutions'
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Backlink Indexing Page</h1>
        <p className="text-lg text-gray-700 mb-8">This page is for search engine crawlers to discover our backlinks and for users to verify our online presence.</p>
        <ul className="list-disc ml-6 text-gray-700 mb-8">
          {backlinkUrls.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{url}</a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
