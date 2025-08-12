import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Dashboard | Just Legal Solutions',
  description: 'Monitor your legal website’s SEO performance, keyword rankings, and optimization progress with the Just Legal Solutions SEO Dashboard. Designed for attorneys and businesses in Oklahoma.',
  keywords: 'seo dashboard, legal seo, keyword rankings, website optimization, just legal solutions',
  alternates: {
    canonical: 'https://justlegalsolutions.org/seo-dashboard'
  }
};



const SeoDashboardPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          SEO Performance Dashboard
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">
            SEO dashboard content will be displayed here.
          </p>
        </div>
      </div>
    </main>
  );
};

export default SeoDashboardPage;
