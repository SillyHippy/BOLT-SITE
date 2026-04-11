'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';

export default function ServiceCheckerPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  const questions = [
    {
      id: 0,
      q: "Are you currently physically located inside the state of Oklahoma?",
      detail: "Process serving laws are jurisdictional."
    },
    {
      id: 1,
      q: "Is it currently a Sunday?",
      detail: "Oklahoma law has specific restrictions regarding Sunday service."
    },
    {
      id: 2,
      q: "Are you currently on recognized Native American Tribal Land/Territory?",
      detail: "Tribal sovereignty impacts how state court documents are served."
    },
    {
      id: 3,
      q: "Are you actively attending a court hearing or traveling to/from one right now?",
      detail: "Oklahoma statutory law provides certain exemptions for individuals actively attending court."
    }
  ];

  const handleAnswer = (val: boolean) => {
    setAnswers(prev => ({ ...prev, [currentStep]: val }));
    setCurrentStep(prev => prev + 1);
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
  };

  const isFinished = currentStep === questions.length;

  // Logic to determine if service is allowed based on OK rules
  // answers[0] = in OK
  // answers[1] = Sunday
  // answers[2] = Tribal Land
  // answers[3] = At Court
  let status = "LIKELY YES";
  let explanation = [];
  let riskLevel = "low"; // low, medium, high

  if (isFinished) {
    if (!answers[0]) {
      status = "OUT OF JURISDICTION";
      riskLevel = "medium";
      explanation.push("An Oklahoma process server cannot serve you outside of Oklahoma without specific interstate procedural authorization.");
    }

    if (answers[1]) {
      status = "LIKELY NO";
      riskLevel = "high";
      explanation.push("Oklahoma law generally prohibits the service of civil process on a Sunday, unless there is a specific, signed court order authorizing it.");
    }

    if (answers[2]) {
      status = "MAYBE (COMPLICATED)";
      riskLevel = "high";
      explanation.push("State process servers typically do not have jurisdiction on sovereign tribal land. Service usually requires tribal police involvement or following specific tribal court procedures.");
    }

    if (answers[3]) {
      status = "LIKELY NO";
      riskLevel = "high";
      explanation.push("Under Oklahoma law, individuals (especially out-of-county/state residents) are generally immune from being served with civil process while attending court as a witness or party to another case.");
    }

    if (explanation.length === 0) {
      explanation.push("There are no immediate statutory red flags preventing you from being legally served with civil process right now under Oklahoma law.");
    }
  }

  return (
    <>
      <Navbar />
      <LocalPromoBanner zips={[]} />

      <div className="min-h-screen bg-gray-50 font-sans pt-24 pb-12">
        {/* Header */}
        <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-12 px-4 shadow-inner">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-4">⚖️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">"Can I Be Served?" Checker</h1>
            <p className="text-emerald-100 text-lg">
              There are strict rules about when, where, and how you can be legally served in Oklahoma.
              Take our 4-question interactive test to see if you can be served right now.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              
              {!isFinished ? (
                <div className="p-8">
                  <div className="mb-8 flex justify-between items-center text-sm font-semibold text-gray-400">
                    <span>Question {currentStep + 1} of {questions.length}</span>
                    <div className="flex gap-1">
                      {questions.map((_, i) => (
                        <div key={i} className={`h-2 w-8 rounded-full ${i === currentStep ? 'bg-emerald-500' : i < currentStep ? 'bg-emerald-200' : 'bg-gray-100'}`} />
                      ))}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {questions[currentStep].q}
                  </h2>
                  <p className="text-gray-500 mb-8 max-w-sm">
                    {questions[currentStep].detail}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => handleAnswer(true)}
                      className="py-6 rounded-xl font-bold text-lg border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 transition-colors"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer(false)}
                      className="py-6 rounded-xl font-bold text-lg border-2 border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      No
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-0">
                  <div className={`p-8 pb-10 text-center text-white ${
                    riskLevel === 'low' ? 'bg-emerald-600' : 
                    riskLevel === 'medium' ? 'bg-amber-500' : 'bg-rose-600'
                  }`}>
                    <div className="text-sm font-black tracking-widest text-white/70 mb-2 uppercase">Analysis Complete</div>
                    <h2 className="text-4xl font-extrabold mb-4">{status}</h2>
                    <p className="text-lg opacity-90 max-w-md mx-auto">Based on Oklahoma process serving rules, here is the assessment of your situation.</p>
                  </div>
                  
                  <div className="p-8 bg-white">
                    <div className="space-y-4 mb-8">
                      {explanation.map((exp, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                          <span className="text-xl">👉</span>
                          <p className="text-gray-700 font-medium">{exp}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 mb-8">
                      <p className="text-sm text-slate-600">
                        <strong>Legal Disclaimer:</strong> This tool is a general guide and does not constitute legal advice. Process serving rules have many exceptions. If you are avoiding service, be aware that judges can authorize alternate methods (like taping it to your door or mailing it) if they believe you are evading a process server.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={reset}
                        className="flex-1 py-3 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        Start Over
                      </button>
                      <a
                        href="tel:5393676832"
                        className="flex-[2] py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors text-center"
                      >
                        Ask a Process Server →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Cross-links */}
            <div className="mt-8 bg-white rounded-xl border border-gray-200 p-5 items-center justify-center flex flex-wrap gap-6">
              <Link href="/blog/what-happens-if-someone-refuses-service" className="text-emerald-700 hover:underline font-medium text-sm">Refusing Service Laws →</Link>
              <Link href="/oklahoma-process-server-faq-2026" className="text-emerald-700 hover:underline font-medium text-sm">Process Server FAQ →</Link>
            </div>
          </div>
        </section>

        {/* FAQ Schema for general serving rules embedded here */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can a process server serve me at work in Oklahoma?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes, a process server can legally serve you at your place of employment in Oklahoma. However, if your employer refuses to allow the server onto private company property, the server must wait outside or attempt service elsewhere." }
            },
            {
              "@type": "Question",
              "name": "Can I be served while attending court in Oklahoma?",
              "acceptedAnswer": { "@type": "Answer", "text": "Generally, if you are attending court as a party or witness in an unrelated matter (and especially if you traveled from out of county/state), you have immunity from being served civil process at the courthouse under Oklahoma law." }
            }
          ]
        })}} />
      </div>
      <Footer />
    </>
  );
}
