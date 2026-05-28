import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import UnifiedSchema from '@/components/UnifiedSchema';
import { 
  Clock, 
  FileText, 
  Gavel, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Download,
  Phone,
  ArrowRight,
  Calendar,
  UserCheck,
  Home
} from 'lucide-react';

export const metadata: Metadata = {
    alternates: {
    canonical: 'https://justlegalsolutions.org/resources/oklahoma-eviction-timeline',
  },
title: 'Oklahoma Eviction Timeline PDF | Free Download',
  description: 'Download our free Oklahoma eviction timeline PDF. Learn the exact timeframe for each stage of the eviction process, from notice to writ of execution. Professional process serving available.',
  keywords: 'Oklahoma eviction timeline, eviction process Oklahoma, landlord eviction steps, Oklahoma eviction timeframe, eviction notice service, writ of execution Oklahoma',
  authors: [{ name: 'Joseph Iannazzi' }],
  openGraph: {
    title: 'Oklahoma Eviction Timeline PDF - Free Download',
    description: 'Master the Oklahoma eviction process with our comprehensive timeline guide. Download your free PDF today.',
    type: 'website',
  },
};

export default function OklahomaEvictionTimelinePage() {
  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Oklahoma Eviction Timeline PDF | Free Download"
        pageDescription="Download our free Oklahoma eviction timeline PDF. Learn the exact timeframe for each stage of the eviction process, from notice to writ of execution. Professional process serving available."
        pageUrl="https://justlegalsolutions.org/resources/oklahoma-eviction-timeline"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Oklahoma Eviction Timeline PDF | Free Download', url: '/resources/oklahoma-eviction-timeline' },
        ]}
      />
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/patterns/legal-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Download className="w-4 h-4" />
              Free PDF Download
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Oklahoma Eviction Timeline:
              <span className="block text-amber-400">The Complete Guide for Landlords</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Master the Oklahoma eviction process with our comprehensive timeline. 
              Know exactly how long each step takes and avoid costly delays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/downloads/oklahoma-eviction-timeline.pdf" 
                download
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                <Download className="w-5 h-5" />
                Download Free PDF
              </a>
              <Link 
                href="/eviction-notice-service/"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
              >
                <Shield className="w-5 h-5" />
                Professional Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Flowchart Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
              The 5-Stage Oklahoma Eviction Process
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Understanding the complete eviction timeline helps you plan effectively 
              and minimize rental income loss.
            </p>
            
            {/* Flowchart */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {[
                { icon: FileText, title: 'Notice', desc: 'Serve legal notice', color: 'bg-blue-500' },
                { icon: Gavel, title: 'Filing', desc: 'File with court', color: 'bg-indigo-500' },
                { icon: UserCheck, title: 'Service', desc: 'Serve summons', color: 'bg-purple-500' },
                { icon: Calendar, title: 'Hearing', desc: 'Court appearance', color: 'bg-amber-500' },
                { icon: Home, title: 'Writ', desc: 'Removal order', color: 'bg-emerald-500' },
              ].map((step, index) => (
                <div key={step.title} className="relative">
                  <div className={`${step.color} rounded-lg p-6 text-white text-center h-full`}>
                    <div className="text-2xl font-bold mb-1">{index + 1}</div>
                    <step.icon className="w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <p className="text-sm opacity-90">{step.desc}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-slate-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Timeline Breakdown */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Detailed Stage Breakdown
            </h2>
            
            <div className="space-y-8">
              {/* Stage 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-slate-900">Stage 1: Notice Period</h3>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        5-30 Days
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">
                      The eviction process begins with serving proper legal notice to the tenant. 
                      Oklahoma law requires specific notice periods based on the violation type:
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Non-Payment of Rent:</strong> 5-day notice to pay or quit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Lease Violations:</strong> 15-day notice to cure or quit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Month-to-Month Termination:</strong> 30-day written notice</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-lg shrink-0">
                    <Gavel className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-slate-900">Stage 2: Court Filing</h3>
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                        Same Day
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">
                      If the tenant doesn't comply with the notice, file a Forcible Entry and 
                      Detainer action at your local county courthouse. Required documents include:
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Completed petition form</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Copy of the lease agreement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Proof of notice service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Filing fee (varies by county, typically $75-$150)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg shrink-0">
                    <UserCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-slate-900">Stage 3: Service of Summons</h3>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        3-5 Days
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">
                      The court issues a summons that must be properly served to the tenant. 
                      Oklahoma law requires personal service or substituted service. Professional 
                      process serving ensures compliance and provides court-admissible proof.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-amber-800 text-sm">
                        <strong>Pro Tip:</strong> Using a professional process server like 
                        Just Legal Solutions ensures proper service and eliminates delays. 
                        <Link href="/eviction-notice-service/" className="text-amber-700 underline ml-1">
                          Learn about our eviction service options →
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 4 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg shrink-0">
                    <Calendar className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-slate-900">Stage 4: Court Hearing</h3>
                      <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                        5-10 Days After Service
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Oklahoma law requires the hearing to be scheduled within 5-10 days of 
                      successful service. Both parties present their case, and the judge issues 
                      a ruling. Bring all documentation:
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Lease agreement and any amendments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Rent payment records and ledger</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Proof of notice and summons service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Documentation of lease violations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Stage 5 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg shrink-0">
                    <Home className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-slate-900">Stage 5: Writ of Execution</h3>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        2-7 Days After Judgment
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">
                      If you win the case, the court issues a Writ of Execution. The tenant has 
                      48 hours to vacate after the writ is posted. If they don't leave, the sheriff 
                      will enforce the removal.
                    </p>
                    <div className="bg-slate-100 rounded-lg p-4">
                      <p className="text-slate-700 text-sm">
                        <strong>Total Timeline:</strong> From notice to removal, the typical 
                        Oklahoma eviction takes <strong>3-6 weeks</strong> when handled properly. 
                        Delays in service or improper notice can extend this significantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Delays Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Common Delays & How to Avoid Them
            </h2>
            <p className="text-center text-slate-600 mb-12">
              Many evictions take longer than necessary due to preventable mistakes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  issue: 'Improper Notice Service',
                  solution: 'Use a professional process server to ensure proper service with court-admissible proof.',
                  icon: AlertTriangle
                },
                {
                  issue: 'Incorrect Notice Period',
                  solution: 'Verify the correct notice period for your specific violation type before serving.',
                  icon: Clock
                },
                {
                  issue: 'Incomplete Documentation',
                  solution: 'Keep thorough records of all rent payments, communications, and lease violations.',
                  icon: FileText
                },
                {
                  issue: 'Tenant Avoiding Service',
                  solution: 'Professional servers follow the method each eviction document requires—personal, substitute residential, or posting-and-mailing only where Oklahoma statutes authorize it.',
                  icon: UserCheck
                },
              ].map((item, index) => (
                <div key={index} className="bg-red-50 border border-red-100 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <item.icon className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">{item.issue}</h4>
                      <p className="text-red-700 text-sm">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Service Benefits */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Why Use Professional Eviction Service?
            </h2>
            <p className="text-slate-300 text-center mb-12">
              Working with Just Legal Solutions streamlines your eviction process
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Faster Service',
                  desc: 'Standard, Rush, and Same-Day options to meet your timeline needs.',
                  icon: Clock
                },
                {
                  title: 'Legal Compliance',
                  desc: 'Every service follows Oklahoma law with court-admissible documentation.',
                  icon: Shield
                },
                {
                  title: 'Proof of Service',
                  desc: 'Detailed affidavits and photographic evidence for court proceedings.',
                  icon: FileText
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.desc}</p>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="mt-12 bg-slate-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-center mb-6">Eviction Service Pricing</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-slate-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400">$60</div>
                  <div className="text-sm text-slate-300">Standard Service</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-amber-400">$150</div>
                  <div className="text-sm text-slate-300">Rush Service</div>
                </div>
                <div className="bg-slate-700 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-400">$265</div>
                  <div className="text-sm text-slate-300">Same-Day Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-16 bg-amber-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Download className="w-16 h-16 text-slate-900 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Download Your Free Oklahoma Eviction Timeline PDF
            </h2>
            <p className="text-slate-800 text-lg mb-8">
              Get the complete timeline with all stages, timeframes, and Oklahoma-specific 
              requirements. Print it, save it, and reference it whenever you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/downloads/oklahoma-eviction-timeline.pdf" 
                download
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                <Download className="w-5 h-5" />
                Download PDF Now
              </a>
            </div>
            <p className="text-slate-700 text-sm">
              PDF includes: Complete 5-stage timeline • Oklahoma-specific requirements • 
              Common delay prevention tips • Professional service information
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/eviction-notice-service/"
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg group-hover:bg-amber-200 transition-colors">
                    <Shield className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                      Eviction Notice Service
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Professional process serving for Oklahoma evictions. Standard, Rush, 
                      and Same-Day options available.
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="/resources/"
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      All Resources
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Browse our complete library of legal guides, checklists, and downloadable 
                      resources for Oklahoma landlords.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Need Professional Eviction Service?
            </h2>
            <p className="text-slate-600 mb-8">
              Joseph Iannazzi and the team at Just Legal Solutions are ready to help 
              with fast, reliable eviction notice service across Oklahoma.
            </p>
            <a 
              href="tel:539-367-6832"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              (539) 367-6832
            </a>
            <p className="text-slate-500 text-sm mt-4">
              Author: Joseph Iannazzi | Just Legal Solutions
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
