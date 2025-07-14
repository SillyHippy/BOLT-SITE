'use client';

import { useState, useEffect } from 'react';

export default function SEOCommandCenter() {
  const [competitorData, setCompetitorData] = useState<any>(null);
  const [contentGaps, setContentGaps] = useState<any>(null);
  const [performance, setPerformance] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [competitors, gaps, perf] = await Promise.all([
        fetch('/api/competitor-monitor').then(r => r.json()),
        fetch('/api/content-gaps').then(r => r.json()),
        fetch('/api/performance-monitor').then(r => r.json())
      ]);

      setCompetitorData(competitors);
      setContentGaps(gaps);
      setPerformance(perf);
    } catch (error) {
      console.error('Dashboard load error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl font-bold">🚀 Loading SEO Command Center...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          🎯 SEO Command Center
        </h1>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-green-600 mb-4">⚡ Performance</h3>
            {performance && (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lighthouse Score:</span>
                  <span className="font-bold">{performance.performance_metrics.lighthouse_scores.performance}/100</span>
                </div>
                <div className="flex justify-between">
                  <span>SEO Score:</span>
                  <span className="font-bold text-green-600">{performance.performance_metrics.lighthouse_scores.seo}/100</span>
                </div>
                <div className="flex justify-between">
                  <span>LCP:</span>
                  <span className="font-bold">{performance.performance_metrics.core_web_vitals.largest_contentful_paint}s</span>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-orange-600 mb-4">🎯 Content Gaps</h3>
            {contentGaps && (
              <div className="space-y-2">
                <div className="text-sm text-gray-600">High-Priority Opportunities:</div>
                {contentGaps.content_gaps.slice(0, 3).map((gap: any, i: number) => (
                  <div key={i} className="text-sm">
                    <div className="font-semibold">{gap.topic}</div>
                    <div className="text-gray-500">Score: {gap.opportunity_score}/100</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-red-600 mb-4">🔍 Competitors</h3>
            {competitorData && (
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Active Threats:</div>
                {competitorData.competitors.filter((c: any) => c.threats > 0).map((comp: any, i: number) => (
                  <div key={i} className="text-sm">
                    <div className="font-semibold">{comp.competitor}</div>
                    <div className="text-red-500">Threats: {comp.threats}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Priority Actions */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-purple-600 mb-4">🚨 Priority Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contentGaps?.priority_actions.map((action: any, i: number) => (
              <div key={i} className="border-l-4 border-blue-500 pl-4">
                <div className="font-bold text-blue-600">{action.action}</div>
                <div className="text-sm text-gray-600">{action.topic || action.keyword}</div>
                <div className="text-xs text-gray-500">Est. Traffic: +{action.estimated_traffic}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Issues */}
        {performance?.issues_found.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4">⚠️ Performance Issues</h3>
            <div className="space-y-4">
              {performance.issues_found.map((issue: any, i: number) => (
                <div key={i} className="border-l-4 border-red-500 pl-4">
                  <div className="font-bold text-red-600">{issue.issue}</div>
                  <div className="text-sm text-gray-600">{issue.impact}</div>
                  <div className="text-xs text-gray-500">
                    Current: {issue.current_value} | Target: {issue.target_value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-green-600 mb-4">⚡ Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button 
              onClick={() => window.open('/api/sitemap', '_blank')}
              className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-center"
            >
              📄 View Sitemap
            </button>
            <button 
              onClick={() => window.open('/api/seo-status', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg text-center"
            >
              📊 SEO Status
            </button>
            <button 
              onClick={() => window.open('/api/meta-descriptions', '_blank')}
              className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg text-center"
            >
              🏷️ Meta Descriptions
            </button>
            <button 
              onClick={loadDashboardData}
              className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg text-center"
            >
              🔄 Refresh Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
