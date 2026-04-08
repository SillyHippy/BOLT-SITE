import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle, 
  Download, 
  FileText, 
  Clock, 
  DollarSign, 
  Shield, 
  Award,
  ChevronRight,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Oklahoma Process Server Licensing Checklist 2026 | Free PDF Download',
  description: 'Download our free 2026 Oklahoma Process Server Licensing Checklist. Step-by-step guide to CLEET certification, requirements, fees & timeline. Get licensed fast with Just Legal Solutions.',
  keywords: [
    'Oklahoma process server license',
    'CLEET certification checklist',
    'process server licensing Oklahoma 2026',
    'Oklahoma process server requirements',
    'CLEET process server training',
    'how to become process server Oklahoma',
    'process server license application',
    'Oklahoma legal process server'
  ],
  openGraph: {
    title: 'Oklahoma Process Server Licensing Checklist 2026',
    description: 'Free downloadable checklist with step-by-step licensing requirements, CLEET certification details, fees & timeline.',
    type: 'website',
    url: 'https://justlegalsolutions.org/resources/oklahoma-process-server-licensing-checklist/',
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/resources/oklahoma-process-server-licensing-checklist/',
  },
};

export default function OklahomaProcessServerLicensingChecklist() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-700/50 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>2026 Updated Edition</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Get Your Oklahoma Process Server License in 2026
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                The complete step-by-step checklist to CLEET certification. 
                Everything you need to start your legal services career in Oklahoma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#download"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Free Checklist
                </a>
                <Link 
                  href="/become-process-server-oklahoma-complete-guide/"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
                >
                  Read Full Guide
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-blue-900" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Free PDF Download</p>
                    <p className="text-2xl font-bold">Licensing Checklist 2026</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    'CLEET Requirements Breakdown',
                    'Step-by-Step Application Process',
                    'Fee Schedule & Timeline',
                    'Required Documents List',
                    'Exam Preparation Tips'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-blue-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Inside the 2026 Licensing Checklist
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive PDF checklist covers every requirement, deadline, and fee 
              you need to know to get licensed as an Oklahoma process server.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CLEET Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Age and residency requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Background check procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Training course details</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Exam registration steps</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Timeline & Process</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Application submission deadlines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Training schedule planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Exam dates and locations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>License processing timeframes</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-yellow-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Fee Breakdown</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Application fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Training course costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Background check fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>License issuance costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing Process Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Oklahoma Process Server Licensing Process
              </h2>
              <p className="text-gray-600 mb-8">
                Getting licensed as a process server in Oklahoma involves several key steps 
                through the Council on Law Enforcement Education and Training (CLEET). 
                Our checklist breaks down each phase so you know exactly what to expect.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Meet Basic Requirements',
                    desc: 'Be at least 18 years old, a U.S. citizen or legal resident, and have no disqualifying criminal history.'
                  },
                  {
                    step: '2',
                    title: 'Complete CLEET Training',
                    desc: 'Attend the mandatory process server training course covering Oklahoma law and proper service procedures.'
                  },
                  {
                    step: '3',
                    title: 'Pass the Certification Exam',
                    desc: 'Successfully complete the CLEET process server examination with a passing score.'
                  },
                  {
                    step: '4',
                    title: 'Submit Application & Fees',
                    desc: 'Complete the license application, submit required documentation, and pay all applicable fees.'
                  },
                  {
                    step: '5',
                    title: 'Receive Your License',
                    desc: 'Once approved, receive your official Oklahoma Process Server license and begin your career.'
                  }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Download Our Checklist?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Save Time & Avoid Mistakes',
                    desc: 'Our checklist ensures you complete every requirement correctly the first time, avoiding costly delays.'
                  },
                  {
                    title: '2026 Updated Information',
                    desc: 'All requirements, fees, and procedures are current for the 2026 licensing cycle.'
                  },
                  {
                    title: 'Expert Guidance',
                    desc: 'Created by licensed Oklahoma process servers who have successfully navigated the process.'
                  },
                  {
                    title: 'Printable & Portable',
                    desc: 'Take your checklist to training, keep it handy during the application process, and track your progress.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-blue-700 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Download className="w-4 h-4" />
              <span>Instant PDF Download</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Free 2026 Licensing Checklist
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Enter your email below to receive the complete Oklahoma Process Server 
              Licensing Checklist PDF. Start your journey to becoming a licensed 
              process server today.
            </p>

            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Now
                </button>
              </div>
              <p className="text-blue-200 text-sm mt-3">
                Or skip the email and{' '}
                <a 
                  href="/downloads/oklahoma-process-server-licensing-checklist-2026.pdf"
                  className="text-yellow-300 hover:text-yellow-200 underline"
                >
                  download directly
                </a>
              </p>
            </form>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-blue-200 text-sm">
                Your privacy is important. We never share your email address.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Continue Your Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              href="/become-process-server-oklahoma-complete-guide/"
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    Complete Licensing Guide
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Our comprehensive guide covers everything about becoming a licensed 
                    process server in Oklahoma, from requirements to career tips.
                  </p>
                  <span className="inline-flex items-center gap-1 text-blue-700 font-medium">
                    Read the full guide
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            <Link 
              href="/services/process-serving/"
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Shield className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    Professional Process Serving
                  </h3>
                  <p className="text-gray-600 mb-3">
                    See how licensed process servers serve legal documents with 
                    professionalism, compliance, and reliability across Oklahoma.
                  </p>
                  <span className="inline-flex items-center gap-1 text-green-700 font-medium">
                    View our services
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                JI
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  About the Author
                </h3>
                <p className="text-gray-600 mb-4">
                  Written by <strong>Joseph Iannazzi</strong>, owner of Just Legal Solutions 
                  and a licensed Oklahoma process server (License: PSL-2026-2). With years 
                  of experience serving legal documents across Oklahoma, Joseph created this 
                  checklist to help aspiring process servers navigate the licensing process 
                  with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a 
                    href="tel:539-367-6832"
                    className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800"
                  >
                    <Phone className="w-4 h-4" />
                    (539) 367-6832
                  </a>
                  <a 
                    href="mailto:info@justlegalsolutions.org"
                    className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800"
                  >
                    <Mail className="w-4 h-4" />
                    info@justlegalsolutions.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How long does it take to get licensed?',
                a: 'The typical timeline is 4-8 weeks from starting your training to receiving your license. This includes completing the CLEET training course, passing the exam, and processing your application. Our checklist includes a detailed timeline breakdown.'
              },
              {
                q: 'What are the total costs to get licensed?',
                a: 'Total costs typically range from $200-$400, including training fees, exam fees, background check, and license application fees. The checklist provides a complete fee breakdown with current 2026 rates.'
              },
              {
                q: 'Do I need to renew my license?',
                a: 'Yes, Oklahoma process server licenses must be renewed annually. The checklist includes renewal requirements and deadlines to help you maintain your license.'
              },
              {
                q: 'Can I serve papers anywhere in Oklahoma?',
                a: 'Yes, a CLEET-issued process server license allows you to serve legal documents anywhere in the state of Oklahoma, regardless of where you completed your training.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Process Server Career?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Download the complete 2026 Oklahoma Process Server Licensing Checklist 
            and take the first step toward your new career in legal services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#download"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Free Checklist
            </a>
            <a 
              href="tel:539-367-6832"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call for Questions
            </a>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-8 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              <p>Just Legal Solutions - Licensed Oklahoma Process Server</p>
              <p>License: PSL-2026-2 | Phone: (539) 367-6832</p>
            </div>
            <div className="text-sm">
              <p>© 2026 Just Legal Solutions. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
