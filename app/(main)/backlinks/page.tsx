// app/(main)/backlinks/page.tsx

export default function BacklinksPage() {
  const backlinkUrls = [
    // Original Links
    'https://www.manta.com/c/m1x7pgf/just-legal-solutions',
    'https://www.showmelocal.com/38832951-just-legal-solutions-glenpool',
    'https://www.crunchbase.com/organization/just-legal-solutions',
    'https://www.yelp.com/biz/just-legal-solutions-glenpool',
    'https://www.hotfrog.com/search/glenpool/just-legal-solutions',
    'https://patch.com/oklahoma/tulsa/business/listing/535828/just-legal-solutions',
    'https://reviews.birdeye.com/just-legal-solutions-175169188044203',
    'https://www.trustpilot.com/review/justlegalsolutions.org',
    'https://app.foursquare.com/v/just-legal-solutions/6878880907cad03b554a52cc',
    'https://medium.com/@justlegalsolutionsok/why-you-need-a-professional-process-server-in-oklahoma-fast-reliable-service-from-just-legal-195dc334cc8e',
    
    // Additional Links Found
    'https://www.alignable.com/glenpool-ok/just-legal-solutions',
    'https://www.elocal.com/profile/just-legal-solutions-21951593',
    'https://www.yellowpages.com/glenpool-ok/mip/just-legal-solutions-606085805',
    'https://www.dnb.com/business-directory/company-profiles.just_legal_solutions_llc.html',
    'https://clutch.co/profile/just-legal-solutions'
  ];

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Backlink Indexing Page</h1>
      <p>This page is for search engine crawlers to discover our backlinks.</p>
      <ul>
        {backlinkUrls.map((url, index) => (
          <li key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
