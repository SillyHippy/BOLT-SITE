"use client";
import { useState, useEffect } from "react";
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
export const metadata = {
  robots: 'noindex, nofollow'
};

export default function SEOCommandCenter() {
  const [competitorData, setCompetitorData] = useState<any>(null);
  const [contentGaps, setContentGaps] = useState<any>(null);
  const [performance, setPerformance] = useState<any>(null);
  const [loading, setLoading] = useState(true);

// ...existing code...
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
            🎯 SEO Command Center
          </h1>
          {/* ...existing code... */}
        </div>
      </main>
      <Footer />
    </>
  );
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
