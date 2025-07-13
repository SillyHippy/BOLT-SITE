import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Dashboard - Just Legal Solutions',
  description: 'Monitor SEO performance and page health for all Just Legal Solutions pages.',
  robots: 'noindex, nofollow'
};

export default function SEODashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          SEO Performance Dashboard
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Automated Monitoring Status
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">✅ Site Health</h3>
              <p className="text-green-700 text-sm">
                All critical pages monitored daily. Health checks include response times, 
                status codes, and content verification.
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">📊 SEO Tracking</h3>
              <p className="text-blue-700 text-sm">
                Dynamic sitemap with 60+ pages. Fresh content rotation and 
                automated meta descriptions for ranking optimization.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">🎯 Performance</h3>
              <p className="text-purple-700 text-sm">
                Image optimization, mobile performance, and Core Web Vitals 
                monitoring for superior user experience.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Page Categories
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-blue-800">Core Business Pages</h3>
                <p className="text-sm text-gray-600">Homepage, Services, Pricing, Calendar (4 pages)</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-green-800">Location-Specific Pages</h3>
                <p className="text-sm text-gray-600">35+ cities in Tulsa metro area coverage</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-purple-800">Service-Specific Pages</h3>
                <p className="text-sm text-gray-600">Same-day, eviction, subpoena, executive services</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-orange-800">Industry-Specific Pages</h3>
                <p className="text-sm text-gray-600">Lawyers, debt collection, insurance, real estate, medical, government</p>
              </div>
              
              <div className="border-l-4 border-gray-500 pl-4">
                <h3 className="font-semibold text-gray-800">Educational Content</h3>
                <p className="text-sm text-gray-600">FAQ, requirements, process server information</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Automated Features
            </h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <h4 className="font-medium text-gray-800">Dynamic Sitemap</h4>
                  <p className="text-sm text-gray-600">Auto-updates with timestamps and priorities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <h4 className="font-medium text-gray-800">Fresh Content</h4>
                  <p className="text-sm text-gray-600">Daily content rotation and date updates</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <h4 className="font-medium text-gray-800">Schema Markup</h4>
                  <p className="text-sm text-gray-600">LocalBusiness schema on all pages</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <h4 className="font-medium text-gray-800">Image Optimization</h4>
                  <p className="text-sm text-gray-600">External images with Next.js optimization</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <h4 className="font-medium text-gray-800">Health Monitoring</h4>
                  <p className="text-sm text-gray-600">Automated page status checking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Live Monitoring Access
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">API Endpoints</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded">
                  <code>/api/seo-monitor</code> - Page health status
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <code>/api/sitemap</code> - Dynamic XML sitemap
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <code>/api/fresh-content</code> - Content rotation
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Quick Actions</h3>
              <div className="space-y-2">
                <a 
                  href="/api/seo-monitor" 
                  target="_blank"
                  className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm text-center"
                >
                  Check Page Health
                </a>
                <a 
                  href="/api/sitemap" 
                  target="_blank"
                  className="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm text-center"
                >
                  View Live Sitemap
                </a>
                <a 
                  href="https://search.google.com/search-console" 
                  target="_blank"
                  className="block bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm text-center"
                >
                  Google Search Console
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">
            📈 SEO Strategy Summary
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
            <div>
              <ul className="space-y-1">
                <li>• <strong>60+ SEO-optimized pages</strong> targeting Tulsa area</li>
                <li>• <strong>Geographic coverage</strong> of entire metro area</li>
                <li>• <strong>Industry-specific targeting</strong> for fast ranking</li>
                <li>• <strong>Professional images</strong> via external optimization</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li>• <strong>Daily content freshness</strong> for search engines</li>
                <li>• <strong>LocalBusiness schema</strong> for local SEO</li>
                <li>• <strong>Mobile-optimized</strong> responsive design</li>
                <li>• <strong>Automated monitoring</strong> for maintenance-free operation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
