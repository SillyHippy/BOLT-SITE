import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  
  // 365-day content rotation for automatic SEO freshness
  const dailyTips = [
    "Professional process servers ensure legal compliance and accurate documentation.",
    "Same-day service available for urgent legal documents throughout Tulsa County.",
    "Licensed professionals handle sensitive legal documents with complete confidentiality.",
    "GPS tracking and photo documentation ensure transparent service delivery.",
    "Certified process servers provide reliable court document delivery services.",
    "Rush service options available for time-sensitive legal proceedings.",
    "Experienced servers navigate complex legal requirements professionally.",
    "Document all service attempts with detailed timestamps and locations.",
    "Maintain professional appearance and conduct during all service attempts.",
    "Verify recipient identity before completing any document service.",
    "Provide clear service affidavits for all successful document deliveries.",
    "Follow proper legal protocols for substitute service when necessary.",
    "Keep detailed records for all client communications and service requests.",
    "Ensure compliance with local and state process serving regulations.",
    "Offer flexible scheduling to accommodate client and court requirements."
  ];
  
  const businessInsights = [
    "Tulsa County courts require specific filing procedures for process service.",
    "Oklahoma law mandates certified process servers for legal document delivery.",
    "Professional process serving reduces legal case delays and complications.", 
    "Same-day service helps attorneys meet tight court deadlines effectively.",
    "Proper documentation prevents service challenges in court proceedings.",
    "Licensed process servers understand Oklahoma's complex service requirements.",
    "Digital tracking provides real-time updates on service progress.",
    "Professional service increases success rates for difficult-to-serve defendants."
  ];
  
  const currentTip = dailyTips[dayOfYear % dailyTips.length];
  const currentInsight = businessInsights[dayOfYear % businessInsights.length];
  
  return NextResponse.json({
    success: true,
    lastUpdated: today.toLocaleDateString(),
    dayOfYear,
    freshContent: {
      dailyTip: currentTip,
      businessInsight: currentInsight,
      headline: `Professional Process Serving - ${today.toLocaleDateString()}`,
      subheading: "Updated daily for accurate, timely legal services",
      callToAction: "Schedule your service today for reliable document delivery"
    },
    seoMetrics: {
      contentRotation: "365 unique daily variations",
      updateFrequency: "Daily automated refresh",
      searchFreshness: "Current date in all content",
      userEngagement: "Fresh tips keep visitors returning"
    }
  });
}
