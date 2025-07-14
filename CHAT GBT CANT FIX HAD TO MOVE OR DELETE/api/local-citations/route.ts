import { NextRequest, NextResponse } from 'next/server';

// Local citation consistency checker
const citationSources = [
  'yelp.com',
  'yellowpages.com',
  'superpages.com',
  'manta.com',
  'localeze.com',
  'infogroup.com',
  'factual.com',
  'foursquare.com'
];

const businessInfo = {
  name: 'Just Legal Solutions',
  phone: '(539) 367-6832',
  address: 'Tulsa, OK 74101',
  website: 'justlegalsolutions.org'
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action') || 'check';

  if (action === 'check') {
    const citationResults = await Promise.all(
      citationSources.map(async (source) => {
        try {
          const consistency = await checkCitationConsistency(source);
          return {
            source,
            status: consistency.found ? 'found' : 'missing',
            nameMatch: consistency.nameMatch,
            phoneMatch: consistency.phoneMatch,
            addressMatch: consistency.addressMatch,
            lastChecked: new Date().toISOString()
          };
        } catch (error) {
          return {
            source,
            status: 'error',
            error: 'Failed to check citation',
            lastChecked: new Date().toISOString()
          };
        }
      })
    );

    return NextResponse.json({
      businessInfo,
      citationResults,
      summary: {
        total: citationSources.length,
        found: citationResults.filter(r => r.status === 'found').length,
        missing: citationResults.filter(r => r.status === 'missing').length,
        inconsistent: citationResults.filter(r => r.status === 'found' && 
          (!r.nameMatch || !r.phoneMatch || !r.addressMatch)).length
      },
      recommendations: generateRecommendations(citationResults)
    });
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}

async function checkCitationConsistency(source: string): Promise<{
  found: boolean;
  nameMatch: boolean;
  phoneMatch: boolean;
  addressMatch: boolean;
}> {
  // Simulate citation checking (in real implementation, you'd scrape or use APIs)
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = Math.random() > 0.3; // 70% chance of being found
      resolve({
        found,
        nameMatch: found ? Math.random() > 0.1 : false, // 90% accuracy if found
        phoneMatch: found ? Math.random() > 0.15 : false, // 85% accuracy if found
        addressMatch: found ? Math.random() > 0.2 : false // 80% accuracy if found
      });
    }, 1000);
  });
}

function generateRecommendations(results: any[]) {
  const recommendations = [];
  
  const missing = results.filter(r => r.status === 'missing');
  if (missing.length > 0) {
    recommendations.push({
      type: 'missing_citations',
      priority: 'high',
      message: `Submit your business to ${missing.length} missing directories`,
      sources: missing.map(r => r.source)
    });
  }

  const inconsistent = results.filter(r => r.status === 'found' && 
    (!r.nameMatch || !r.phoneMatch || !r.addressMatch));
  if (inconsistent.length > 0) {
    recommendations.push({
      type: 'inconsistent_info',
      priority: 'medium',
      message: `Fix inconsistent business info on ${inconsistent.length} directories`,
      sources: inconsistent.map(r => r.source)
    });
  }

  return recommendations;
}
