import { Metadata } from 'next';
import UnifiedSchema from '@/components/UnifiedSchema';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Process Server Cost Calculator Oklahoma | Accurate Pricing Guide 2025',
  description: 'Calculate exact process serving costs in Oklahoma. Comprehensive pricing guide with county-specific fees, rush service rates, and mileage calculations.',
  keywords: 'oklahoma process server cost, process server pricing oklahoma, how much does process server cost oklahoma, oklahoma legal service fees',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://justlegalsolutions.org/oklahoma-process-server-cost-calculator' }
};

export default function OklahomaProcessServerCostCalculator() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="article"
          title="Process Server Cost Calculator Oklahoma | Accurate Pricing Guide"
          description="Calculate exact process serving costs in Oklahoma with our comprehensive pricing guide and calculator tool."
          url="https://justlegalsolutions.org/oklahoma-process-server-cost-calculator"
          breadcrumbItems={[
            { name: 'Home', url: '/' },
            { name: 'Cost Calculator', url: '/oklahoma-process-server-cost-calculator' }
          ]}
          faqItems={[
            {
              question: "What factors affect process server costs in Oklahoma?",
              answer: "Costs vary based on distance traveled, urgency of service, number of attempts required, document type, and county-specific fees. Rush service and difficult-to-locate defendants increase costs."
            },
            {
              question: "How much does standard process serving cost in Oklahoma?",
              answer: "Standard process serving in Oklahoma typically ranges from $30-$200 depending on location, complexity, and service type. Rural areas and rush services cost more than urban standard service."
            }
          ]}
        />

        <div className="bg-gradient-to-r from-green-900 via-blue-900 to-green-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Oklahoma Process Server Cost Calculator
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get accurate pricing for process serving anywhere in Oklahoma
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <h2 className="text-2xl font-bold mb-6">Cost Factors</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Service Type</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span>Standard Service (3-5 days)</span>
                      <span className="font-bold">$30-$75</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span>Rush Service (24-48 hours)</span>
                      <span className="font-bold">$75-$150</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span>Same-Day Emergency</span>
                      <span className="font-bold">$150-$200</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Location Factors</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span>Urban Areas (Tulsa, OKC)</span>
                      <span className="font-bold">Base Rate</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span>Suburban Areas</span>
                      <span className="font-bold">+$10-20</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span>Rural/Remote Areas</span>
                      <span className="font-bold">+$25-50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
