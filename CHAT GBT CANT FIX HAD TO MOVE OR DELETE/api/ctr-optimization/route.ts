import { NextRequest, NextResponse } from 'next/server';

// High-converting title patterns that boost CTR
const titlePatterns = [
  "🚀 {service} in {city} | Same-Day Service Available",
  "⚡ URGENT {service} | {city} OK | 24/7 Availability", 
  "✅ Professional {service} | {city} | Get Quote Now!",
  "💯 Best {service} in {city} | Call Today!",
  "🏆 #1 {service} Company | {city} Oklahoma",
  "📞 Fast {service} | {city} | Free Consultation"
];

const descriptionPatterns = [
  "⚡ URGENT {service} in {city} OK | ✅ Same-Day Service | 💯 Professional & Reliable | 📞 Call Now for Instant Quote!",
  "🚀 Oklahoma's Fastest {service} | ✅ Licensed & Bonded | 💯 100% Success Rate | 📞 Free Consultation Available!",
  "💯 Professional {service} in {city} | ⚡ Quick Response | ✅ Competitive Rates | 🏆 Top-Rated Service!",
  "🏆 Award-Winning {service} | {city} Oklahoma | ✅ Same-Day Service | 💯 Satisfaction Guaranteed!",
  "📞 Call Now for {service} in {city} | ⚡ Fast & Reliable | ✅ Licensed Professionals | 💯 Best Rates!"
];

const cities = [
  'Tulsa', 'Broken Arrow', 'Owasso', 'Bixby', 'Jenks', 'Sand Springs',
  'Glenpool', 'Sapulpa', 'Claremore', 'Skiatook', 'Collinsville', 'Catoosa'
];

const services = [
  'Process Server', 'Document Delivery', 'Legal Courier', 'Subpoena Service',
  'Court Filing', 'Process Serving', 'Legal Documents', 'Sheriff Service'
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city') || 'Tulsa';
  const service = searchParams.get('service') || 'Process Server';
  const type = searchParams.get('type') || 'both';

  // Generate optimized titles and descriptions
  const optimizedTitles = titlePatterns.map(pattern => 
    pattern.replace('{service}', service).replace('{city}', city)
  );

  const optimizedDescriptions = descriptionPatterns.map(pattern =>
    pattern.replace('{service}', service).replace('{city}', city)
  );

  // CTR-boosting keywords and phrases
  const ctrKeywords = [
    `${service.toLowerCase()} ${city.toLowerCase()}`,
    `urgent ${service.toLowerCase()}`,
    `same day ${service.toLowerCase()}`,
    `professional ${service.toLowerCase()}`,
    `${city.toLowerCase()} ${service.toLowerCase()} cost`,
    `best ${service.toLowerCase()} ${city.toLowerCase()}`,
    `fast ${service.toLowerCase()} ${city.toLowerCase()}`,
    `${service.toLowerCase()} near me`,
    `cheap ${service.toLowerCase()} ${city.toLowerCase()}`,
    `${service.toLowerCase()} ${city.toLowerCase()} reviews`
  ];

  const response = {
    city,
    service,
    optimizedTitles,
    optimizedDescriptions,
    ctrKeywords,
    recommendations: {
      primaryTitle: optimizedTitles[0],
      primaryDescription: optimizedDescriptions[0],
      urgencyWords: ['URGENT', 'SAME-DAY', 'FAST', 'QUICK', 'IMMEDIATE'],
      trustSignals: ['Licensed', 'Bonded', 'Professional', 'Reliable', 'Guaranteed'],
      actionWords: ['Call Now', 'Get Quote', 'Free Consultation', 'Contact Today'],
      emoticons: ['🚀', '⚡', '✅', '💯', '📞', '🏆', '💰', '⭐']
    },
    automation: {
      suggestedSchedule: 'Update meta descriptions weekly for seasonal trends',
      abTestingTargets: ['Title length', 'Emoji usage', 'Urgency words', 'Local references'],
      performanceMetrics: ['CTR', 'Bounce rate', 'Time on page', 'Conversion rate']
    }
  };

  return NextResponse.json(response);
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { pages, updateType = 'titles' } = data;

    // Batch optimization for multiple pages
    const optimizedPages = pages.map((page: any) => {
      const city = page.city || extractCityFromUrl(page.url);
      const service = page.service || 'Process Server';
      
      let optimizations: any = {};
      
      if (updateType === 'titles' || updateType === 'both') {
        optimizations.title = titlePatterns[0]
          .replace('{service}', service)
          .replace('{city}', city);
      }
      
      if (updateType === 'descriptions' || updateType === 'both') {
        optimizations.description = descriptionPatterns[0]
          .replace('{service}', service)
          .replace('{city}', city);
      }

      return {
        ...page,
        ...optimizations,
        lastOptimized: new Date().toISOString()
      };
    });

    return NextResponse.json({
      success: true,
      optimizedPages,
      totalOptimized: optimizedPages.length,
      message: `Successfully optimized ${optimizedPages.length} pages`
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to optimize pages' }, 
      { status: 500 }
    );
  }
}

function extractCityFromUrl(url: string): string {
  const cityMatch = url.match(/process-server-([^\/]+)/);
  if (cityMatch) {
    return cityMatch[1].split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }
  return 'Tulsa';
}
