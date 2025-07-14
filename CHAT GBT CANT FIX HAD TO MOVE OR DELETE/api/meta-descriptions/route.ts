import { NextResponse } from 'next/server';

// Configure for static export compatibility
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export async function GET() {
  const today = new Date();
  const currentDate = today.toLocaleDateString('en-US', { 
    month: 'numeric', 
    day: 'numeric', 
    year: 'numeric', 
    timeZone: 'America/Chicago' 
  });
  
  // Dynamic meta descriptions with current date for SEO freshness (CST timezone)
  const metaUpdates = {
    homepage: {
      title: `Professional Process Server Tulsa | Just Legal Solutions - ${currentDate}`,
      description: `Expert process serving in Tulsa County. Same-day service available. Licensed & bonded. Updated ${currentDate}. Call (539) 367-6832.`
    },
    brokenArrow: {
      title: `Broken Arrow Process Server | Fast Document Delivery - ${currentDate}`,
      description: `Certified process server in Broken Arrow, OK. Professional legal document delivery. Updated ${currentDate}. Call today!`
    },
    jenks: {
      title: `Jenks Process Server | Legal Document Service - ${currentDate}`,
      description: `Reliable process serving in Jenks, Oklahoma. Licensed professionals. Updated ${currentDate}. Same-day service available.`
    },
    services: {
      title: `Process Serving Services Tulsa | Complete Legal Solutions - ${currentDate}`,
      description: `Full-service process serving throughout Tulsa metro. Court documents, subpoenas, evictions. Updated ${currentDate}.`
    }
  };
  
  return NextResponse.json({
    success: true,
    lastUpdated: currentDate,
    timestamp: today.toISOString(),
    metaUpdates,
    seoBoost: {
      contentFreshness: "✅ Daily meta description updates",
      searchSignals: "✅ Current date in titles and descriptions", 
      localSEO: "✅ Location-specific optimization",
      mobileFriendly: "✅ Responsive design maintained"
    }
  });
}
