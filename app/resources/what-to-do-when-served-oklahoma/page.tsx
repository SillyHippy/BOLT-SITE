import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What to Do When You\'ve Been Served in Oklahoma | Free Guide',
  description: 'Free PDF guide: What to do when served with legal papers in Oklahoma. Learn response deadlines, immediate steps, common mistakes to avoid, and when to hire an attorney.',
  keywords: 'served with papers Oklahoma, what to do when served, legal papers served, Oklahoma court deadlines, respond to lawsuit Oklahoma, process server Oklahoma',
  openGraph: {
    title: 'What to Do When You\'ve Been Served in Oklahoma | Free Guide',
    description: 'Free PDF guide with immediate steps, response deadlines, and common mistakes to avoid when served with legal papers in Oklahoma.',
    type: 'website',
  },
};

export default function WhatToDoWhenServedPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-500 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Free Download
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                You've Been Served with Legal Papers in Oklahoma — Now What?
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Take a breath. This free guide walks you through exactly what to do next, 
                step by step. Know your deadlines, protect your rights, and avoid costly mistakes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/downloads/what-to-do-when-served-oklahoma.pdf"
                  download
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg text-center transition-colors shadow-lg"
                >
                  Download Free Guide (PDF)
                </a>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                No email required. Instant download.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl mb-4">📄</div>
                <h3 className="text-2xl font-bold mb-4">Inside This Guide:</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">✓</span>
                    Immediate steps to take today
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">✓</span>
                    Response deadlines by document type
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">✓</span>
                    Common mistakes that hurt your case
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">✓</span>
                    When you need an attorney (and when you don't)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">✓</span>
                    How to read and understand your documents
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Acting Quickly Matters
          </h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Being served with legal papers can feel overwhelming. Your heart races. Your mind 
              fills with questions. <strong>But here's the truth:</strong> the clock starts ticking 
              the moment you're served, and what you do in the next few hours and days can 
              significantly impact your case.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The good news? Most legal issues are manageable when you know the right steps to take. 
              This guide was created specifically for Oklahomans who've just been served — whether 
              it's a lawsuit, divorce papers, eviction notice, or any other legal document.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-red-800 font-semibold mb-2">⚠️ Critical Warning</p>
              <p className="text-red-700">
                Ignoring legal papers or missing deadlines can result in default judgments against 
                you — meaning you lose automatically. Don't let that happen. This guide shows you 
                exactly how to respond properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What's Inside the Guide
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Immediate Steps (First 24 Hours)
              </h3>
              <p className="text-gray-700">
                A clear checklist of exactly what to do from the moment you're served. 
                From documenting the service to securing your documents safely.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Response Deadlines by Document Type
              </h3>
              <p className="text-gray-700">
                Different documents have different deadlines. Learn the specific timelines 
                for civil lawsuits, family court matters, small claims, evictions, and more.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-red-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Common Mistakes to Avoid
              </h3>
              <p className="text-gray-700">
                Learn from others' mistakes. Discover the most common errors defendants make 
                — and how to avoid them — so you don't hurt your own case.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                When to Hire an Attorney
              </h3>
              <p className="text-gray-700">
                Not every situation requires a lawyer. Learn when you can handle things yourself, 
                when you absolutely need professional help, and how to find affordable options.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-yellow-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How to Read Your Documents
              </h3>
              <p className="text-gray-700">
                Legal documents can be confusing. We break down the key sections, explain 
                legal terminology in plain English, and show you what to look for first.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-teal-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Oklahoma-Specific Information
              </h3>
              <p className="text-gray-700">
                Laws vary by state. This guide is tailored specifically for Oklahoma courts, 
                Oklahoma deadlines, and Oklahoma legal procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Urgency Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Response Timeline by Document Type
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Different legal documents have different response deadlines in Oklahoma. Here's what you need to know:
          </p>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 flex items-start gap-4">
              <div className="bg-red-500 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                20
                <span className="text-xs block">days</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Civil Lawsuit (District Court)</h3>
                <p className="text-gray-300">
                  You typically have 20 days from the date of service to file an answer or other response. 
                  Missing this deadline can result in a default judgment.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 flex items-start gap-4">
              <div className="bg-orange-500 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                10
                <span className="text-xs block">days</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Small Claims Court</h3>
                <p className="text-gray-300">
                  Small claims matters often have shorter deadlines. Check your summons carefully 
                  — some require a response within 10 days.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 flex items-start gap-4">
              <div className="bg-yellow-500 text-gray-900 font-bold rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                5
                <span className="text-xs block">days</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Forcible Entry & Detainer (Eviction)</h3>
                <p className="text-gray-300">
                  Eviction cases move quickly in Oklahoma. You may have as little as 5 days to respond. 
                  This is one situation where speed is absolutely critical.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 flex items-start gap-4">
              <div className="bg-blue-500 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                30
                <span className="text-xs block">days</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Divorce & Family Court</h3>
                <p className="text-gray-300">
                  Family law matters typically allow 30 days for response, but temporary orders 
                  hearings may be scheduled much sooner.
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-8 text-center">
            ⚠️ Always check your specific documents — deadlines can vary based on case type and court.
          </p>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Your Free Guide Now
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Download the complete "What to Do When You've Been Served — Oklahoma Guide" 
            and take control of your situation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href="/downloads/what-to-do-when-served-oklahoma.pdf"
              download
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg transition-colors shadow-lg text-lg"
            >
              Download PDF Guide
            </a>
          </div>
          <div className="bg-blue-700 rounded-lg p-6 max-w-lg mx-auto">
            <p className="text-blue-200 text-sm mb-4">
              Want updates on Oklahoma legal resources?
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email (optional)"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-blue-300 text-xs mt-3">
              No spam. Unsubscribe anytime. Your email is never shared.
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Need to Serve Legal Papers?
              </h3>
              <p className="text-gray-700 mb-6">
                If you're on the other side and need to have legal documents served to someone else, 
                we can help. Just Legal Solutions provides professional process serving throughout Oklahoma.
              </p>
              <Link
                href="/process-serving/"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn About Process Serving
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Oklahoma Court Resources
              </h3>
              <p className="text-gray-700 mb-6">
                Access official Oklahoma court forms, find your courthouse, and learn about 
                self-help resources available to Oklahoma residents.
              </p>
              <a
                href="https://www.oscn.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Visit OSCN.net
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              About This Guide
            </h2>
            <p className="text-gray-700 mb-4">
              This guide was created by <strong>Joseph Iannazzi</strong>, owner of Just Legal Solutions, 
              to help Oklahomans navigate the stressful experience of being served with legal papers. 
              With years of experience in the legal support industry, Joseph understands both sides 
              of the process — from serving documents to helping recipients understand their rights 
              and responsibilities.
            </p>
            <p className="text-gray-700 mb-4">
              While this guide provides valuable information, it is not a substitute for legal advice. 
              Every case is unique, and we always recommend consulting with a qualified attorney 
              for matters specific to your situation.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                JI
              </div>
              <div>
                <p className="font-bold text-gray-900">Joseph Iannazzi</p>
                <p className="text-gray-600">Owner, Just Legal Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            How to Download
          </h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <ol className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                <p className="text-gray-700">
                  Click the <strong>"Download PDF Guide"</strong> button above
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                <p className="text-gray-700">
                  The PDF will open in your browser or download to your device
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                <p className="text-gray-700">
                  Save the file to a secure location where you can easily find it
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                <p className="text-gray-700">
                  Read through the guide and follow the steps that apply to your situation
                </p>
              </li>
            </ol>
            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 text-sm">
                <strong>File details:</strong> what-to-do-when-served-oklahoma.pdf | PDF format | 
                Requires Adobe Reader or similar PDF viewer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Questions About Being Served?
          </h2>
          <p className="text-blue-200 text-xl mb-8">
            While we can't provide legal advice, we're happy to answer general questions 
            about the process serving system in Oklahoma.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:539-367-6832"
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Call (539) 367-6832
            </a>
            <Link
              href="/contact/"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-gray-900 text-gray-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Just Legal Solutions. All rights reserved. 
            This guide is for informational purposes only and does not constitute legal advice.
          </p>
        </div>
      </section>
    </main>
  );
}
