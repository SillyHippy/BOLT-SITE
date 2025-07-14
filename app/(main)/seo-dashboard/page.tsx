
import { Metadata } from 'next';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'SEO Dashboard - Just Legal Solutions',
  description: 'Monitor SEO performance and page health for all Just Legal Solutions pages.',
  robots: 'noindex, nofollow'
};

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            SEO Performance Dashboard
          </h1>
          {/* ...existing code... */}
        </div>
      </main>
      <Footer />
    </>
  );
              
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
