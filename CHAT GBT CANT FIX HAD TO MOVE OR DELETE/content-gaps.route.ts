// Moved from app/api/content-gaps/route.ts
// This file was moved to avoid Cloudflare Pages static build errors.

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action') || 'analyze';

  if (action === 'analyze') {
    const gaps = await analyzeContentGaps();
    const opportunities = await findKeywordOpportunities();
    const recommendations = generateContentStrategy(gaps, opportunities);

    return NextResponse.json({
      content_gaps: gaps,
      keyword_opportunities: opportunities,
      recommendations,
      priority_actions: recommendations.slice(0, 3),
      timestamp: new Date().toISOString()
    });
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}

async function analyzeContentGaps() {
  const missingTopics = [
    {
      topic: 'Emergency Weekend Process Serving',
      search_volume: 850,
      competition: 'LOW',
      opportunity_score: 95,
      suggested_url: '/emergency-weekend-process-server-tulsa'
    },
    {
      topic: 'Process Serving for Divorce Papers',
      search_volume: 1200,
      competition: 'MEDIUM',
      opportunity_score: 88,
      suggested_url: '/divorce-papers-process-server-oklahoma'
    },
    {
      topic: 'Corporate Legal Document Delivery',
      search_volume: 600,
      competition: 'LOW',
      opportunity_score: 92,
      suggested_url: '/corporate-legal-document-delivery-tulsa'
    },
    {
      topic: 'Small Claims Court Papers',
      search_volume: 400,
      competition: 'LOW',
      opportunity_score: 87,
      suggested_url: '/small-claims-court-papers-oklahoma'
    }
  ];

  return missingTopics;
}

async function findKeywordOpportunities() {
  const opportunities = [
    {
      keyword: 'same day process server tulsa oklahoma',
      monthly_searches: 320,
      competition: 'LOW',
      cpc: '$45',
      trend: 'RISING'
    },
    {
      keyword: 'process server broken arrow weekend',
      monthly_searches: 180,
      competition: 'LOW',
      cpc: '$38',
      trend: 'STABLE'
    },
    {
      keyword: 'legal courier service tulsa county',
      monthly_searches: 250,
      competition: 'MEDIUM',
      cpc: '$42',
      trend: 'RISING'
    }
  ];

  return opportunities;
}

function generateContentStrategy(gaps: any[], opportunities: any[]) {
  const strategies: any[] = [];

  gaps.forEach(gap => {
    if (gap.opportunity_score > 90) {
      strategies.push({
        action: 'CREATE_PRIORITY_PAGE',
        topic: gap.topic,
        url: gap.suggested_url,
        priority: 'HIGH',
        estimated_traffic: gap.search_volume * 0.1,
        timeline: '1 week'
      });
    }
  });

  opportunities.forEach(opp => {
    if (opp.competition === 'LOW' && opp.trend === 'RISING') {
      strategies.push({
        action: 'OPTIMIZE_EXISTING_CONTENT',
        keyword: opp.keyword,
        priority: 'MEDIUM',
        estimated_traffic: opp.monthly_searches * 0.15,
        timeline: '3 days'
      });
    }
  });

  return strategies;
}
