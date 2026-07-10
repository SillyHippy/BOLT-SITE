'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

const documentTypes = [
  "Divorce / Family Law",
  "Eviction / 5-Day Notice",
  "Subpoena",
  "Small Claims",
  "General Civil Summons",
  "Protective Order"
];

const counties = [
  { id: 'tulsa', label: 'Tulsa County (Primary Service Area)' },
  { id: 'metro', label: 'Other Major Metro (OKC, Cleveland, Canadian)' },
  { id: 'rural', label: 'Rural or Remote County' }
];

const urgencyLevels = [
  { id: 'standard', label: 'Standard Service (Base Rate)' },
  { id: 'rush', label: 'Rush Service (+ fee)' },
  { id: 'sameday', label: 'Same-Day Service (++ fee)' },
];

export default function ServiceTimeEstimatorPage() {
  const [docType, setDocType] = useState('');
  const [countyType, setCountyType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [calculated, setCalculated] = useState(false);

  const getEstimate = () => {
    if (!docType || !countyType || !urgency) return null;

    let timeRange = "";
    let firstAttempt = "";
    let notes: string[] = [];

    // Base attempt rules
    if (urgency === 'sameday') {
      firstAttempt = "Within 24 hours";
      timeRange = "1 - 2 business days";
    } else if (urgency === 'rush') {
      firstAttempt = "Within 72 hours";
      timeRange = "2 - 5 business days";
    } else {
      firstAttempt = "Within 3 - 5 business days";
      timeRange = "7 - 14 business days";
    }

    // Rural delays
    if (countyType === 'rural' && urgency === 'standard') {
      timeRange = "10 - 21 business days";
    }

    // Document specific rules
    if (docType === 'Protective Order') {
      notes.push("Protective Orders are prioritized for safety. We highly recommend at least Rush Service for these.");
    } else if (docType === 'Eviction / 5-Day Notice') {
      notes.push("Eviction notices legally require strict posting timelines. We ensure compliance with Oklahoma 12 O.S. property posting rules if personal service fails.");
    } else if (docType === 'Small Claims') {
      notes.push("Statute requires small claims to be served at least 7 days before the hearing. Ensure you order with enough time.");
    }

    return { timeRange, firstAttempt, notes };
  };

  const estimate = calculated ? getEstimate() : null;
  const isReady = docType && countyType && urgency;

  return (
    <>
      <Navbar />
      <LocalPromoBanner zips={[]} />

      <div className="min-h-screen bg-gray-50 font-sans pt-24 pb-12">
        {/* Header */}
        <section className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white py-12 px-4 shadow-inner">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-4">⏱️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Time Estimator</h1>
            <p className="text-indigo-200 text-lg">
              Find out exactly how long it takes to serve your legal documents in Oklahoma. 
              Speed depends on location and urgency level.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-8 space-y-8">

                {/* Step 1: Document Type */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Step 1 — What are you serving?
                  </label>
                  <select
                    value={docType}
                    onChange={(e) => { setDocType(e.target.value); setCalculated(false); }}
                    className="w-full border-2 border-gray-200 focus:border-indigo-500 rounded-xl px-4 py-3 text-gray-800 text-base font-medium outline-none transition-colors"
                  >
                    <option value="">— Select document type —</option>
                    {documentTypes.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Step 2: County Profile */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                    Step 2 — Where is the recipient?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3" role="group" aria-label="Recipient Location Selection">
                    {counties.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => { setCountyType(c.id); setCalculated(false); }}
                        aria-pressed={countyType === c.id}
                        className={`border-2 rounded-xl p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                          countyType === c.id
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-900'
                            : 'border-gray-200 bg-white hover:border-indigo-300 text-gray-700'
                        }`}
                      >
                        <span className="font-bold text-sm">{c.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Urgency */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                    Step 3 — How fast do you need it?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3" role="group" aria-label="Service Speed Selection">
                    {urgencyLevels.map((u) => (
                      <button
                        key={u.id}
                        onClick={() => { setUrgency(u.id); setCalculated(false); }}
                        aria-pressed={urgency === u.id}
                        className={`border-2 rounded-xl p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                          urgency === u.id
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-900'
                            : 'border-gray-200 bg-white hover:border-indigo-300 text-gray-700'
                        }`}
                      >
                        <span className="font-bold text-sm block">{u.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculate Button */}
                <button
                  disabled={!isReady}
                  onClick={() => setCalculated(true)}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                    isReady
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isReady ? '⏱️ Get Time Estimate' : 'Complete selections to continue'}
                </button>
              </div>

              {/* Results */}
              {estimate && (
                <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 text-white p-8 border-t border-indigo-700">
                  <h2 className="text-2xl font-bold mb-6 text-center">Your Timeline Estimate</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                      <p className="text-indigo-200 font-medium text-sm mb-1">First Attempt Made:</p>
                      <p className="text-2xl font-bold text-white">{estimate.firstAttempt}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                      <p className="text-indigo-200 font-medium text-sm mb-1">Average Completion:</p>
                      <p className="text-2xl font-bold text-white">{estimate.timeRange}</p>
                    </div>
                  </div>

                  {estimate.notes.length > 0 && (
                    <div className="bg-blue-900/50 border border-blue-400/50 rounded-xl p-4 mb-6 text-sm text-blue-100">
                      <p className="font-semibold text-white mb-2">Important Case Notes:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {estimate.notes.map((note, i) => <li key={i}>{note}</li>)}
                      </ul>
                    </div>
                  )}

                  <p className="text-indigo-200 text-xs text-center mb-6">
                    * Estimates assume a valid address is provided and the recipient is not actively evading service. 
                    If evasion occurs, service time may be dramatically extended.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:5393676832"
                      className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-bold py-3 rounded-xl text-center transition-all shadow-md"
                    >
                      📞 Fast Track Now
                    </a>
                    <Link
                      href="/contact"
                      className="flex-1 bg-white hover:bg-gray-100 text-indigo-900 font-semibold py-3 rounded-xl text-center transition-all shadow-md"
                    >
                      Hire Online →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Disclaimer + Cross-links */}
            <div className="mt-8 bg-white rounded-xl border border-gray-200 p-5 text-sm text-gray-600">
              <p className="mb-3"><strong>Pro Tip:</strong> Service of process cannot be completed on Sundays in Oklahoma except under very specific court orders. If your deadline is approaching, factor the weekend out of your timeline entirely.</p>
              <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100">
                <Link href="/cost-calculator" className="text-indigo-600 hover:underline font-medium">Cost Calculator →</Link>
                <Link href="/oklahoma-process-server-faq" className="text-indigo-600 hover:underline font-medium">Process Server FAQ →</Link>
                <Link href="/contact" className="text-indigo-600 hover:underline font-medium">Submit Documents →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long does it take for a process server to serve someone in Oklahoma?",
              "acceptedAnswer": { "@type": "Answer", "text": "Standard process serving typically takes 7-14 days to complete, with the first attempt usually made within 3-5 days. If you need it faster, rush service offers attempts within 72 hours, and same-day service guarantees an attempt within 24 hours." },
            },
            {
              "@type": "Question",
              "name": "Can a process server legally serve papers on a Sunday in Oklahoma?",
              "acceptedAnswer": { "@type": "Answer", "text": "Under typical circumstances, process serving on a Sunday is not legally valid in Oklahoma unless there is a specific, signed court order authorizing Sunday service due to extenuating circumstances." },
            }
          ],
        })}} />
      </div>
      <Footer />
    </>
  );
}
