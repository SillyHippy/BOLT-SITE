'use client';

import { useState } from 'react';
import Link from 'next/link';

const serviceAreas = [
  "City of Tulsa", "Tulsa County (Standard Zone)", "Broken Arrow", "Wagoner County", "Creek County (Sapulpa area)",
  "Oklahoma City (OKC)", "Cleveland County (Norman)", 
  "Rogers County", "Osage County", "Mayes County", "Washington County",
  "Cherokee County", "Muskogee County", "Okmulgee County",
  "Payne County (Stillwater)",
  "Pottawatomie County", "Comanche County (Lawton)", "Other Oklahoma County",
];

const areaPriceAdders: Record<string, number> = {
  "City of Tulsa": 0,
  "Tulsa County (Standard Zone)": 0,
  "Broken Arrow": 15,
  "Wagoner County": 10,
  "Creek County (Sapulpa area)": 10,
  "Oklahoma City (OKC)": 15,
  "Cleveland County (Norman)": 25,
  "Rogers County": 20,
  "Osage County": 25,
  "Mayes County": 30,
  "Washington County": 35,
  "Cherokee County": 40,
  "Muskogee County": 40,
  "Okmulgee County": 35,
  "Payne County (Stillwater)": 60,
  "Pottawatomie County": 60,
  "Comanche County (Lawton)": 75,
  "Other Oklahoma County": 50,
};

const serviceTypes = [
  { id: 'standard', label: 'Standard Service', base: 80, desc: 'Up to 3 attempts within 10 business days' },
  { id: 'rush', label: 'Rush Service', base: 120, desc: 'Attempt within 72 hours' },
  { id: 'sameday', label: 'Same-Day Service', base: 170, desc: 'Attempt within 24 hours' },
  { id: 'triple', label: 'Triple-Attempt Rush', base: 200, desc: '3 guaranteed attempts within 72 hours' },
];

const addOns = [
  { id: 'stakeout', label: 'Stakeout (per hour, 2hr min)', cost: 110 },
  { id: 'skip_trace', label: 'Skip Tracing', cost: 75 },
  { id: 'court_filing', label: 'In-person court filing (Tulsa Co.)', cost: 35 },
  { id: 'certified_mail', label: 'Certified mailing', cost: 35 },
  { id: 'posting', label: 'Posting affidavit', cost: 35 },
  { id: 'holiday', label: 'Holiday service surcharge', cost: 37 },
];

export default function CostCalculatorPage() {
  const [area, setArea] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [stakeoutHours, setStakeoutHours] = useState(2);
  const [calculated, setCalculated] = useState(false);

  const handleAddOnToggle = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
    setCalculated(false);
  };

  const getEstimate = () => {
    if (!area || !serviceType) return null;
    const service = serviceTypes.find(s => s.id === serviceType);
    if (!service) return null;

    let base = service.base;
    const areaAdd = areaPriceAdders[area] ?? 50;
    let addOnTotal = 0;
    let breakdown: { label: string; cost: number }[] = [];

    breakdown.push({ label: service.label, cost: base });
    if (areaAdd > 0) breakdown.push({ label: `${area} surcharge`, cost: areaAdd });

    for (const id of selectedAddOns) {
      const addOn = addOns.find(a => a.id === id);
      if (!addOn) continue;
      let cost = addOn.cost;
      if (id === 'stakeout') cost = addOn.cost * Math.max(stakeoutHours, 2);
      addOnTotal += cost;
      breakdown.push({ label: addOn.label + (id === 'stakeout' ? ` (${Math.max(stakeoutHours, 2)} hrs)` : ''), cost });
    }

    const total = base + areaAdd + addOnTotal;
    const low = total;
    const high = Math.round(total * 1.15);

    return { low, high, breakdown, total };
  };

  const estimate = calculated ? getEstimate() : null;
  const isReady = area && serviceType;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-blue-900 font-bold px-3 py-1 rounded-full text-sm mb-4">BETA TOOL</div>
          <div className="text-4xl mb-4">🧮</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Oklahoma Process Server Cost Calculator</h1>
          <p className="text-blue-200 text-lg">
            Estimate your process serving cost in seconds. No account required. Get an exact quote by calling{' '}
            <a href="tel:5393676832" className="text-yellow-400 font-semibold hover:text-yellow-300">(539) 367-6832</a>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          
          <div className="mb-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-900">
            <p className="font-bold mb-1">⚠️ Disclaimer: This is an Estimate</p>
            <p className="text-sm">This calculator is in BETA. Due to the complexity of process serving (exact rural mileage, defendant evasion, complex addresses), your actual cost may vary. <strong>Always call (539) 367-6832 to confirm your final rate before service.</strong></p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-8 space-y-8">

              {/* Step 1: Area */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Step 1 — Select the City or County
                </label>
                <select
                  value={area}
                  onChange={(e) => { setArea(e.target.value); setCalculated(false); }}
                  className="w-full border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-gray-800 text-base font-medium outline-none transition-colors"
                >
                  <option value="">— Select a location —</option>
                  {serviceAreas.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {area && areaPriceAdders[area] > 0 && (
                  <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-2">
                    ⚠️ Distance surcharge applies: +${areaPriceAdders[area]} (exact quote confirmed before service)
                  </p>
                )}
                {area && areaPriceAdders[area] === 0 && (
                  <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2 mt-2">
                    ✅ Standard zone — no distance surcharge
                  </p>
                )}
              </div>

              {/* Step 2: Service Type */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                  Step 2 — Select Service Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label="Service Type Selection">
                  {serviceTypes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => { setServiceType(s.id); setCalculated(false); }}
                      aria-pressed={serviceType === s.id}
                      className={`border-2 rounded-xl p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                        serviceType === s.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 bg-white hover:border-blue-300'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-gray-900 text-sm">{s.label}</span>
                        <span className="text-blue-700 font-bold text-sm">${s.base}+</span>
                      </div>
                      <p className="text-xs text-gray-500">{s.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-ons */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                  Step 3 — Optional Add-Ons
                </label>
                <div className="space-y-2">
                  {addOns.map((a) => (
                    <div key={a.id}>
                      <label className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedAddOns.includes(a.id) ? 'border-blue-400 bg-blue-50' : 'border-gray-100 bg-gray-50 hover:border-gray-300'
                      }`}>
                        <input
                          type="checkbox"
                          checked={selectedAddOns.includes(a.id)}
                          onChange={() => handleAddOnToggle(a.id)}
                          className="accent-blue-600 w-4 h-4"
                        />
                        <span className="flex-1 text-sm font-medium text-gray-800">{a.label}</span>
                        <span className="text-sm font-bold text-gray-600">
                          {a.id === 'stakeout' ? `$${a.cost}/hr` : `+$${a.cost}`}
                        </span>
                      </label>
                      {a.id === 'stakeout' && selectedAddOns.includes('stakeout') && (
                        <div className="ml-7 mt-2 flex items-center gap-3">
                          <label className="text-xs text-gray-600 font-medium">Hours (2 hr min):</label>
                          <input
                            type="number"
                            min={2}
                            max={12}
                            value={stakeoutHours}
                            onChange={(e) => { setStakeoutHours(parseInt(e.target.value) || 2); setCalculated(false); }}
                            className="border border-gray-300 rounded-lg px-2 py-1 text-sm w-20 text-center"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <button
                disabled={!isReady}
                onClick={() => setCalculated(true)}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  isReady
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isReady ? '🧮 Calculate My Estimate' : 'Select a location and service type to continue'}
              </button>
            </div>

            {/* Results */}
            {estimate && (
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Your Estimated Cost</h2>

                <div className="bg-white/10 rounded-xl p-5 mb-6">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-white/10">
                      {estimate.breakdown.map((item, i) => (
                        <tr key={i}>
                          <td className="py-2 text-blue-100">{item.label}</td>
                          <td className="py-2 text-right font-semibold text-white">${item.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-white/30">
                        <td className="pt-3 text-lg font-bold text-white">Estimated Total</td>
                        <td className="pt-3 text-right text-2xl font-bold text-yellow-300">
                          ${estimate.low}–${estimate.high}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <p className="text-blue-200 text-xs text-center mb-6">
                  * Estimates are shown as a range. Your exact quote is confirmed before any work begins — no surprises.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:5393676832"
                    className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 rounded-xl text-center transition-all"
                  >
                    📞 Get Exact Quote — (539) 367-6832
                  </a>
                  <Link
                    href="/contact"
                    className="flex-1 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3 rounded-xl text-center transition-all"
                  >
                    Submit Online →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Disclaimer + Cross-links */}
          <div className="mt-8 bg-white rounded-xl border border-gray-200 p-5 text-sm text-gray-600">
            <p className="mb-3"><strong>About these estimates:</strong> Current fuel-dependent rates include the temporary $20 fuel and operating-cost adjustment effective July 21, 2026. Distance charges are estimates and will be confirmed before you commit. All quotes are free.</p>
            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100">
              <Link href="/pricing" className="text-blue-600 hover:underline font-medium">Full Pricing Page →</Link>
              <Link href="/contact" className="text-blue-600 hover:underline font-medium">Request Service →</Link>
              <Link href="/oklahoma-process-server-faq" className="text-blue-600 hover:underline font-medium">Process Server FAQ →</Link>
              <Link href="/process-server-near-me" className="text-blue-600 hover:underline font-medium">Service Areas →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema for the calculator */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a process server cost in Oklahoma?",
            "acceptedAnswer": { "@type": "Answer", "text": "Current standard process serving in Oklahoma starts at $80 for Tulsa County. Rush service (within 72 hours) starts at $120. Same-day service starts at $170. These fuel-dependent rates include a temporary $20 fuel and operating-cost adjustment. Additional fees may apply for mileage, distant counties, and add-on services. Use our cost calculator above to estimate your total." },
          },
          {
            "@type": "Question",
            "name": "Are there extra charges for serving in rural Oklahoma counties?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. A distance surcharge applies for counties outside our primary service area (Tulsa, Wagoner, and Creek). Surcharges range from $10 (nearby counties) to $75+ (distant counties) and are always quoted upfront before service begins." },
          },
          {
            "@type": "Question",
            "name": "What is the cost for same-day process serving in Oklahoma?",
            "acceptedAnswer": { "@type": "Answer", "text": "Current same-day process serving in Oklahoma starts at $170 for Tulsa County, with any applicable mileage or county charges added. Same-day service guarantees an attempt within 24 hours of your order." },
          },
        ],
      })}} />
    </div>
  );
}
