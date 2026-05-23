import Link from 'next/link';
import { Metadata } from 'next';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Interactive Tools',
  description: 'Free interactive calculators and decision tools for Oklahoma process serving.',
};

const tools = [
  { href: '/oklahoma-tools/service-deadline-calculator', title: 'Service Deadline Calculator', desc: 'Calculate 180-day, 20-day answer & other critical Oklahoma deadlines with court holiday adjustments.', icon: '📅' },
  { href: '/oklahoma-tools/service-method-wizard', title: 'Service Method Wizard', desc: 'Answer 5 questions to get the right service method recommendation for your case.', icon: '🔮' },
  { href: '/oklahoma-tools/process-serving-cost-estimator', title: 'Process Serving Cost Estimator', desc: 'Estimate process serving costs across all 77 Oklahoma counties based on service speed and conditions.', icon: '💰' },
  { href: '/oklahoma-tools/subpoena-witness-fee-calculator', title: 'Subpoena Witness Fee Calculator', desc: 'Calculate witness fees and mileage for Oklahoma subpoenas under 28A O.S. § 28-81.', icon: '⚖️' },
  { href: '/oklahoma-tools/e-service-validity-checker', title: 'E-Service Validity Checker', desc: 'Check if electronic service is valid for your Oklahoma case under 12 O.S. § 2004.5.', icon: '✅' },
  { href: '/oklahoma-tools/rush-emergency-cost-calculator', title: 'Rush & Emergency Cost Calculator', desc: 'Compare rush, same-day, and emergency process serving costs in Oklahoma.', icon: '⚡' },
  { href: '/oklahoma-tools/publication-timeline-calculator', title: 'Publication Timeline Calculator', desc: 'Plan your service by publication schedule and estimate newspaper costs.', icon: '📰' },
  { href: '/oklahoma-tools/can-i-serve-my-own-papers', title: 'Can I Serve My Own Papers?', desc: 'Interactive decision tree to find out if you can serve your own legal papers in Oklahoma.', icon: '🤔' },
];

export default function ToolsPage() {
  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Interactive Tools"
        pageDescription="Free interactive calculators and decision tools for Oklahoma process serving."
        pageUrl="https://justlegalsolutions.org/oklahoma-tools"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Interactive Tools', url: '/oklahoma-tools' },
        ]}
      />
    <div className="min-h-screen flex flex-col">
      <div className="bg-navy text-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Interactive Tools</h1>
          <p className="text-white/70 text-sm md:text-base max-w-2xl">
            Free calculators, wizards, and decision aids for Oklahoma process serving.
            No account required — use instantly.
          </p>
        </div>
      </div>
      <main className="flex-1 bg-cream py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="card card-hover group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0" aria-hidden="true">{tool.icon}</span>
                  <div>
                    <h2 className="font-semibold text-navy group-hover:text-gold transition-colors mb-1">{tool.title}</h2>
                    <p className="text-sm text-text-muted">{tool.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
