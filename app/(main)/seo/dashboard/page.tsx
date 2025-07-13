import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Performance Dashboard | Just Legal Solutions Ranking Monitor',
  description: 'Monitor SEO performance and Google ranking for Just Legal Solutions process serving and courier services across Tulsa metro area.',
  keywords: ['SEO dashboard', 'Google ranking monitor', 'process server SEO', 'Tulsa SEO performance'],
  robots: 'noindex, nofollow' // This is an internal dashboard
};

export default function SEODashboard() {
  const lastUpdated = new Date().toLocaleDateString();
  const totalPages = 55; // Approximate total SEO pages
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          SEO Performance Dashboard
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-lg text-blue-800">
            <strong>Last Updated:</strong> {lastUpdated} | <strong>Total SEO Pages:</strong> {totalPages}+
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Location Pages</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">35+</div>
            <p className="text-gray-600">City-specific process server pages covering entire Tulsa metro area</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Industry Pages</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
            <p className="text-gray-600">Industry-specific pages targeting lawyers, collections, loans, property management</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Service Pages</h3>
            <div className="text-3xl font-bold text-purple-600 mb-2">12+</div>
            <p className="text-gray-600">Service-specific pages including courier, eviction, subpoena, same-day service</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Target Keywords Coverage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Primary Keywords</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ process server Tulsa</li>
                <li>✓ process serving [all cities]</li>
                <li>✓ legal document delivery</li>
                <li>✓ court document service</li>
                <li>✓ subpoena service</li>
                <li>✓ eviction notice service</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Industry Keywords</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ lawyer process server</li>
                <li>✓ debt collection legal service</li>
                <li>✓ property management eviction</li>
                <li>✓ loan company process server</li>
                <li>✓ courier delivery service</li>
                <li>✓ same day delivery Tulsa</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">SEO Automation Status</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">✓ Active Automation</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Daily sitemap timestamp updates</li>
                <li>• Dynamic content freshness dates</li>
                <li>• Auto-updating meta descriptions</li>
                <li>• GitHub Actions SEO workflow</li>
                <li>• XML sitemap generation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">📊 SEO Features</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• LocalBusiness schema markup</li>
                <li>• Structured data for all locations</li>
                <li>• Optimized meta descriptions</li>
                <li>• Internal linking structure</li>
                <li>• Mobile-optimized responsive design</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-yellow-800 mb-3">Ranking Strategy Status</h2>
          <p className="text-yellow-700 mb-3">
            Comprehensive SEO empire deployed targeting every major search query related to process serving, 
            legal document delivery, and courier services in Tulsa metro area.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded p-3">
              <h4 className="font-semibold text-green-700">Geographic Dominance</h4>
              <p className="text-sm text-gray-600">Pages for every major city in 5-county area</p>
            </div>
            <div className="bg-white rounded p-3">
              <h4 className="font-semibold text-blue-700">Industry Targeting</h4>
              <p className="text-sm text-gray-600">Specific pages for lawyers, collections, loans, property management</p>
            </div>
            <div className="bg-white rounded p-3">
              <h4 className="font-semibold text-purple-700">Service Expansion</h4>
              <p className="text-sm text-gray-600">Courier services covering any delivery need</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-800 mb-3">Contact for SEO Consultation</h2>
          <p className="text-green-700 mb-4">
            Professional SEO optimization and digital marketing strategy for legal and courier services.
          </p>
          <div className="flex items-center">
            <div>
              <p className="text-2xl font-bold text-green-800">📞 (539) 367-6832</p>
              <p className="text-green-700">📧 info@justlegalsolutions.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
