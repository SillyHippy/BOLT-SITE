import { NextRequest, NextResponse } from 'next/server';

// Real-time competitor ranking tracker
const competitors = [
  'yourserved.com',
  'tulsaprocessserver.com',
  'oklahomacourierservice.com',
  'processserverstulsa.com',
  'legalcourierservice.com'
];

const targetKeywords = [
  'tulsa process server',
  'broken arrow process server',
  'oklahoma legal courier',
  'process serving tulsa',
  'court document delivery'
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action') || 'monitor';

  if (action === 'monitor') {
    const competitorData = await Promise.all(
      competitors.map(async (competitor) => {
        try {
          // Check if competitor is ranking for our keywords
          const rankings = await checkCompetitorRankings(competitor);
          return {
            competitor,
            rankings,
            lastChecked: new Date().toISOString(),
            threats: rankings.filter(r => r.position <= 3).length
          };
        } catch (error) {
          return { competitor, error: (error as Error).message };
        }
      })
    );

    return NextResponse.json({
      competitors: competitorData,
      recommendations: generateCounterStrategies(competitorData),
      timestamp: new Date().toISOString()
    });
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}

async function checkCompetitorRankings(competitor: string) {
  // Simulate competitor ranking check
  return targetKeywords.map(keyword => ({
    keyword,
    position: Math.floor(Math.random() * 50) + 1,
    url: `https://${competitor}`,
    threat_level: Math.floor(Math.random() * 3) + 1
  }));
}

function generateCounterStrategies(competitorData: any[]) {
  const strategies: Array<{
    competitor: string;
    action: string;
    priority: string;
    suggestion: string;
  }> = [];
  
  competitorData.forEach(comp => {
    if (comp.threats > 2) {
      strategies.push({
        competitor: comp.competitor,
        action: 'URGENT: Create counter-content',
        priority: 'HIGH',
        suggestion: `Target their weak keywords with better content`
      });
    }
  });

  return strategies;
}
