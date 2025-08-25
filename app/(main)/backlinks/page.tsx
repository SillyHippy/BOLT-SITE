
import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Professional Process Server Directory & Business Verification | Just Legal Solutions',
  description: 'Verify Just Legal Solutions\' professional credentials and business listings. Trusted Oklahoma process server with established online presence across major business directories and legal platforms.',
  keywords: 'process server verification oklahoma, just legal solutions directory, business verification tulsa, professional process server credentials, oklahoma legal services verification',
  robots: {
    index: true,   // Allow indexing so Google can discover our backlinks
    follow: true,  // Allow following links
    noarchive: true
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/backlinks'
  }
};

// Internal site URLs from sitemap.xml
const internalUrls = [
  '/',
  '/404',
  '/ai-business-info',
  '/backlinks',
  '/card',
  '/card/calendar',
  '/competitor-analysis',
  '/courier-services-tulsa',
  '/future-ai-ready',
  '/local-legal-events',
  '/local-seo-marker',
  '/multi-search-marker',
  '/payments',
  '/performance-marker',
  '/platform-supremacy',
  '/pricing',
  '/tulsa-process-server',
  '/resources',
  '/security-policy',
  '/service-areas/bixby',
  '/service-areas/broken-arrow',
  '/seo/eviction-notice-process-server',
  '/seo/glenpool-process-server',
  '/service-areas/jenks',
  '/seo/legal-posting-process-server',
  '/seo/owasso-process-server',
  '/seo/process-server-sand-springs',
  '/seo/sand-springs-process-server',
  '/seo-dashboard',
  '/services',
  '/sitemap',
  '/tulsa-process-server',
  '/urgent-process-server',
  '/voice-friendly',
  '/voice-search-marker',
  '/weekend-emergency',
  '/why-choose-us',
];

const backlinkUrls = [
  // Primary Business Directories
  'https://www.manta.com/c/m1x7pgf/just-legal-solutions',
  'https://www.showmelocal.com/38832951-just-legal-solutions-glenpool',
  'https://www.crunchbase.com/organization/just-legal-solutions',
  'https://www.alignable.com/glenpool-ok/just-legal-solutions',
  'https://www.elocal.com/profile/just-legal-solutions-21951593',
  'https://www.yellowpages.com/glenpool-ok/mip/just-legal-solutions-606085805',
  'https://www.dnb.com/business-directory/company-profiles.just_legal_solutions_llc.html',
  'https://clutch.co/profile/just-legal-solutions',
  
  // Social Media & Reviews
  'https://www.facebook.com/JustLegalSolutionsOK/',
  'https://www.linkedin.com/company/justlegalsolutionsok/',
  'https://g.co/kgs/vMgnxex',
  'https://www.yelp.com/biz/just-legal-solutions-glenpool',
  
  // Press Releases & News
  'https://www.issuewire.com/founders-five-year-battle-with-legal-system-inspires-5-star-rated-process-serving-firm-in-tulsa-1839846063085062',
  'https://prfree.org/@iannazzi/founder-s-five-year-battle-with-legal-system-inspires-5-star-rated-process-serving-firm-in-tulsa-9aog0m6aveyg',
  'https://www.prlog.org/13092231-founders-five-year-battle-with-legal-system-inspires-5-star-rated-process-serving-firm-in-tulsa.html',
  
  // AI-Powered Emergency Service Press Coverage
  'https://www.wjhl.com/business/press-releases/ein-presswire/838483688/just-legal-solutions-launches-ai-powered-emergency-process-serving-to-combat-critical-delays-in-oklahomas-legal-system/',
  'https://www.wric.com/business/press-releases/ein-presswire/838483688/just-legal-solutions-launches-ai-powered-emergency-process-serving-to-combat-critical-delays-in-oklahomas-legal-system/',
  'https://www.oklahomafreepress.com/article/838483688-just-legal-solutions-launches-ai-powered-emergency-process-serving-to-combat-critical-delays-in-oklahoma-s-legal-system',
  'https://shipping.einnews.com/pr_news/838483688/just-legal-solutions-launches-ai-powered-emergency-process-serving-to-combat-critical-delays-in-oklahoma-s-legal-system',
  'https://www.oklahomabusinessjournal.com/article/838483688-just-legal-solutions-launches-ai-powered-emergency-process-serving-to-combat-critical-delays-in-oklahoma-s-legal-system',
  'https://www.oklahomaentertainmenttoday.com/article/838483688-just-legal-solutions-launches-ai-powered-emergency-process-serving-to-combat-critical-delays-in-oklahoma-s-legal-system',
  'https://www.oklahomapostobserver.com/article/838483688-just-legal-solutions-launches-ai-powered-emergency-process-serving-to-combat-critical-delays-in-oklahoma-s-legal-system',
  'https://wgno.com/business/press-releases/ein-presswire/838483688/just-legal-solutions-launches-ai-powered-emergency-process-serving-to-combat-critical-delays-in-oklahomas-legal-system/',
  'https://www.wearegreenbay.com/business/press-releases/ein-presswire/838483688/just-legal-solutions-launches-ai-powered-emergency-process-serving-to-combat-critical-delays-in-oklahomas-legal-system/',
  'https://www.louisianafirstnews.com/business/press-releases/ein-presswire/838483688/just-legal-solutions-launches-ai-powered-emergency-process-serving-to-combat-critical-delays-in-oklahomas-legal-system/',
  'https://www.globalrealestatewatch.com/article/838483688-just-legal-solutions-launches-ai-powered-emergency-process-serving-to-combat-critical-delays-in-oklahoma-s-legal-system',
  
  // Additional Business Directory Listings
  'https://www.americasbestcompanies.com/members/bp/1235AA9.aspx',
  'https://arrivebusiness.com/just-legal-solutions/s-e632fe89757822f524952bd7b4eb2aaa35ecb885897085f248e73e0007a51f98f2741f743e3e3886604bcbcdacc689f43206bbae5ad6',
  'https://belocalfocussed.com/Listing/L-f0e084b0416e67387837965484361a13d1f71c6a3036170f5b0d23d5b5c173ce2793d641d7b924e2ecca3afaf6c708b28d6bd49bce6905',
  'https://bizmetron.com/Listing/L-84b3e170b6e1e33c9546da2fa10c8397b4245c5377baafa3ed829e470fdf8f1aae71197e88aa7bd020938bfe8a4e8cd044',
  'https://www.chamberofcommerce.com/business-directory/oklahoma/glenpool/local-medical-services/2033827532-just-legal-solutions',
  'https://cityoptimum.com/just-legal-solutions/s-0b5fd51b6ec228dd2da5b252537ec7b11d3f40a87a30a25ee2045f56aae69ed331dbd8e3aeaeea0a57cd5c3b7bccdf3785e2df',
  'http://m.dateondeals.com/just-legal-solutions',
  'https://ebusinesspages.net/just-legal-solutions/s-d51821f61ce0d70cebbe874dc24e2766d6021fff56b8e284c9e466d007763cb86703a948ad55de976570fc0d5055065e3f26288849ae',
  'https://enrollbusiness.com/BusinessProfile/7473899',
  'https://www.iglobal.co/united-states/glenpool/just-legal-solutions',
  'https://galacticvibe.com/just-legal-solutions/s-d8d5dd56545e9e296499c1dc4f960a9f7228844d0d69e58ed959892dfeb794d024642169ad8dbd269c85ee01552d88c1f641ac8f',
  'https://golocalpages.com/Listing/L-63ae8873f67fe4a589d8cb433e194a3e132b24922dd76c2f2b293f355e410f29ca1ce469533b29b2264126a5d53c075c1dd165f2',
  'https://www.hotfrog.com/company/bdbe2e8ed172e532a4965f4af724dddc',
  'http://www.ibegin.com/directory/visit/20171038',
  'https://ibdb.us/locations/state/city/profile/246A2BE',
  'https://joomlocal.com/just-legal-solutions/s-809205f4b82adf299d3178b2dec4e5f5de6675b7cd6ddda3b4ed064bca5f442565c77c937d0b6ddcad0bcba18f0ed8203e',
  'https://www.judysbook.com/Just-Legal-Solutions-BtoB-glenpool-r41431705.htm',
  'https://localbusinessspotter.com/locations/ok/glenpool/57275421',
  'https://localist360.com/business-detail?id=db77e60fa6a1114b0a92b88d29e5c641512029832001630cc0eccaec50dac08e74875b63e137d0f663bebaa673229bc9707fc0',
  'https://local469.com/just-legal-solutions/s-bc33e7e3df74c6f75d187d0bfad1e387fa5128107801b358413545fbc7349d007b92a7896defef027160c36dbf699d12',
  'https://localizedlistings.com/just-legal-solutions/s-a674c2557b4263cee7c162c4ecf965d3685d029f7de57ccc32796858a5ae97e0016622318c7b51b88e87e0ba5c75ab1482c9057337c41fbad3',
  'https://www.localmint.com/us/just-legal-solutions-glenpool-hours-1641604',
  'https://m.localtunity.com/just-legal-solutions',
  'https://www.maplenmain.com/view/gg5y2',
  'https://merchantcircle.com/just-legal-solutions-glenpool-ok',
  'http://m.merchantsnearby.com/just-legal-solutions',
  'https://www.mylocalservices.com/Just+Legal+Solutions-Glenpool-Oklahoma-25751094.html',
  'https://mylocaledge.com/Listing/L-50af8d5fb20b9977ce2dceff017c42dbd7d1ef91aaec1f328372bef0c97582cd58a319d88bcdec23d3aa2a0873fc9271bb36cf',
  'https://www.n49.com/biz/6745993/just-legal-solutions-ok-glenpool-564-east-138th-place/',
  'https://glenpool-ok.opendi.us/13337098.html',
  'https://passpages.com/just-legal-solutions/s-e7615d2f7088c953fda0da32dbc329157ed2fc0e9e739e7eed89ed4cec46bb06d65f157c4b94b052c1a01007d1b8f4bd3d',
  'https://prosearchdirectory.com/business-detail?id=40dc78a21b83af6b979c5ef8e0dacba65c5a1174d05438abb81f321fe6ed98fa5d311e183df76e4748bf673d12ad408a0412e34cd1ba751215d8',
  'https://www.showmelocal.com/profile.aspx?bid=38832951',
  'https://smartbusinesssearch.com/Listing/L-4c83505a4e8e6f3f7aaa76d7680ee2f3e374cc76a02369ab0d45c4e3d9ad0868f26960725edd1ad2c74ff0108358e17be40c2a5fd1b77a009ced01',
  'https://speedylocal.com/just-legal-solutions/s-575c17b171492b0184fdb1b983e366b868791a947faad91112a58a82d4abdc2e2a05dbb5bf95e2732459b280ed5ab6005da676',
  'https://uscity.io/single-listing.php?lid=ba06ce321bfc92e6785b2bfcf3da645d255a61872f8b3c845aeec0967869921b2f35715ee1a158c86fca542b38',
  'https://ok.usindex.app/p/BFe8q',
  'https://www.us-info.com/en/usa/just_legal_solutions/glenpool/USOK100490864-5393676832/businessdetails.aspx',
  'https://wheretoapp.io/Listing/L-0aa4cc42cd220b96e94ee83809e1b4b17d9c1fee8f1d8308f0a661251cafa553b7d3895056eb58cf3b55704a9ba45c1f30',
  'https://yellow411.org/profile/123515F',
  'https://www.yellowpages.biz/sprofile-just-legal-solutions-74033-8734c1bee0d897fd77320e40174364e9f7d11781160ce6099c43be9f786151f728d8a7d5440e6eade69cd537c568e4b296de0f.html',
  'http://find.yourtownvip.com/just-legal-solutions',
  'https://www.yoys.com/sprofile-just-legal-solutions-74033-8b9d2e5090c84bbfec2678610db135e26a6b40a8e9d09e39bfad643ce4b778d5f677e75ee66f07ac077ec542.html',
  'https://yplisting.com/business-detail?id=7ca84c1c11ff2b29d6f6224974336d7e915f6e2625785f18df4edf84313e8b97055472654f7a4317c8b98901135cfa1f2f',
  'https://zoomlocalsearch.com/just-legal-solutions/s-41a26eae55ecdd406a5cb1ac004db5285a21ab07e35c22f1bac2d9f741be154697da13a47613af59f5e479ca14af896cb6ac89918c4a07'
];

export default function BacklinksPage() {
  return (
    <>
      <UnifiedSchema
        pageType="generic"
        url="https://justlegalsolutions.org/backlinks"
        title="Professional Process Server Directory & Business Verification"
        description="Verify Just Legal Solutions' professional credentials and business listings. Trusted Oklahoma process server with established online presence."
      />
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Backlink Indexing & Internal Links Page</h1>
        <p className="text-lg text-gray-700 mb-8">This page is for search engine crawlers to discover our backlinks and for users to verify our online presence. It also provides internal links to every page on our site for SEO and navigation.</p>
  {/* Internal Links section removed; see sitemap for full list of pages */}
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Backlinks</h2>
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
