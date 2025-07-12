import { NextResponse } from 'next/server';

// Provides fresh content snippets that rotate daily for SEO
export async function GET() {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  
  // Rotating tips based on day of year for automatic content freshness
  const processTips = [
    "Serve documents efficiently with proper identification and detailed service reports.",
    "Professional process servers ensure legal compliance and accurate documentation.",
    "Same-day service available for urgent legal documents throughout Tulsa County.",
    "Certified process servers provide reliable court document delivery services.",
    "Licensed professionals handle sensitive legal documents with complete confidentiality.",
    "Rush service options available for time-sensitive legal proceedings.",
    "GPS tracking and photo documentation ensure transparent service delivery.",
    "Experienced servers navigate complex legal requirements professionally."
  ];
  
  const businessTips = [
    "Document all service attempts with detailed timestamps and locations.",
    "Maintain professional appearance and conduct during all service attempts.",
    "Verify recipient identity before completing any document service.",
    "Provide clear service affidavits for all successful document deliveries.",
    "Follow proper legal protocols for substitute service when necessary.",
    "Keep detailed records for all client communications and service requests.",
    "Ensure compliance with local and state process serving regulations.",
    "Offer flexible scheduling to accommodate client and court requirements."
  ];
  
  const currentTip = processTips[dayOfYear % processTips.length];
  const currentBusinessTip = businessTips[dayOfYear % businessTips.length];
  
  return NextResponse.json({
    dailyTip: currentTip,
    businessTip: currentBusinessTip,
    lastUpdated: today.toLocaleDateString(),
    dayOfYear,
    freshContent: {
      headline: `Professional Process Serving - ${today.toLocaleDateString()}`,
      subheading: "Updated daily for accurate, timely legal services",
      callToAction: "Schedule your service today for reliable document delivery",
    }
  });
}
