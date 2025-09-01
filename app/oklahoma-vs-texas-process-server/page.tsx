import { Metadata } from 'next';
import UnifiedSchema from '@/components/UnifiedSchema';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Oklahoma vs Texas Process Server Laws: Complete State Comparison 2025',
  description: 'Detailed comparison of process serving laws, requirements, and procedures between Oklahoma and Texas. Essential guide for multi-state legal practices.',
  keywords: 'oklahoma vs texas process server, oklahoma texas process serving laws, multi state process serving, oklahoma texas legal requirements',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://justlegalsolutions.org/oklahoma-vs-texas-process-server' }
};

export default function OklahomaVsTexasProcessServer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-14 flex-grow">
        <UnifiedSchema 
          pageType="article"
          title="Oklahoma vs Texas Process Server Laws: Complete State Comparison"
          description="Detailed comparison of process serving laws between Oklahoma and Texas for legal professionals."
          url="https://justlegalsolutions.org/oklahoma-vs-texas-process-server"
          breadcrumbItems={[
            { name: 'Home', url: '/' },
            { name: 'Oklahoma vs Texas Process Server', url: '/oklahoma-vs-texas-process-server' }
          ]}
          faqItems={[
            {
              question: "What are the main differences between Oklahoma and Texas process serving?",
              answer: "Oklahoma requires county-level registration in most areas, while Texas has statewide certification. Oklahoma allows posting and mailing after 3 attempts, while Texas requires court approval for alternative service."
            },
            {
              question: "Which state has stricter process serving requirements?",
              answer: "Texas generally has more standardized statewide requirements, while Oklahoma varies significantly by county. Both states require proper bonding and insurance for professional servers."
            }
          ]}
        />

        <div className="bg-gradient-to-r from-red-900 via-blue-900 to-red-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Oklahoma vs Texas Process Server Laws
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Complete comparison of process serving requirements across state lines
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Oklahoma Requirements</h2>
                <ul className="space-y-3">
                  <li>✓ County-level registration (most counties)</li>
                  <li>✓ $1,000-$5,000 bond requirement</li>
                  <li>✓ 3 attempt rule before alternative service</li>
                  <li>✓ 77 different county procedures</li>
                  <li>✓ Posting & mailing allowed</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-red-900 mb-6">Texas Requirements</h2>
                <ul className="space-y-3">
                  <li>✓ Statewide certification system</li>
                  <li>✓ $10,000 minimum bond</li>
                  <li>✓ Court approval for alternative service</li>
                  <li>✓ Standardized statewide procedures</li>
                  <li>✓ Strict documentation requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
