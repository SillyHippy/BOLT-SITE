'use client';

import { useState, useMemo } from 'react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';

interface CalculationResult {
  dailyFeeTotal: number;
  mileageTotal: number;
  roundTripMiles: number;
  total: number;
}

export default function SubpoenaWitnessFeeCalculator() {
  const [mileage, setMileage] = useState<string>('');
  const [days, setDays] = useState<string>('1');
  const [dailyRate, setDailyRate] = useState<string>('10');
  const [mileageRate, setMileageRate] = useState<string>('0.70');

  const result: CalculationResult | null = useMemo(() => {
    const miles = parseFloat(mileage);
    const numDays = parseFloat(days);
    const daily = parseFloat(dailyRate);
    const rate = parseFloat(mileageRate);

    if (isNaN(miles) || isNaN(numDays) || isNaN(daily) || isNaN(rate)) return null;
    if (miles < 0 || numDays < 1) return null;

    const roundTripMiles = miles * 2;
    const dailyFeeTotal = daily * numDays;
    const mileageTotal = roundTripMiles * rate;
    const total = dailyFeeTotal + mileageTotal;

    return {
      dailyFeeTotal,
      mileageTotal,
      roundTripMiles,
      total,
    };
  }, [mileage, days, dailyRate, mileageRate]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const citationSources = [
    {
      title: '28A O.S. \u00A7 28-81 \u2014 Witness Fees',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=28-81&title=28A',
      description: 'Oklahoma statute establishing witness fee rates including daily attendance fees and mileage reimbursement.',
    },
    {
      title: '12 O.S. \u00A7 2004.1 \u2014 Service of Subpoenas',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004.1&title=12',
      description: 'Methods and requirements for service of subpoenas in Oklahoma civil cases.',
    },
  ];

  return (
    <HubPageLayout
      title="Subpoena Witness Fee Calculator"
      description="Calculate witness fees and mileage reimbursement for subpoenaed witnesses in Oklahoma under 28A O.S. \u00A7 28-81."
      citations={citationSources}
    >
      <div className="space-y-8">
        {/* Calculator Card */}
        <section className="card p-6" aria-label="Witness fee calculator">
          <h2 className="text-xl font-semibold text-navy mb-4">Calculate Witness Fees</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="mileage" className="label block mb-1.5">
                One-way mileage (miles to courthouse)
              </label>
              <input
                id="mileage"
                type="number"
                min="0"
                step="0.1"
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
                className="input-field w-full"
                placeholder="e.g., 15"
                aria-describedby="mileage-help"
              />
              <p id="mileage-help" className="text-xs text-gray-500 mt-1">
                Enter the one-way distance from the witness&apos;s address to the courthouse.
              </p>
            </div>

            <div>
              <label htmlFor="days" className="label block mb-1.5">
                Number of days witness expected to attend
              </label>
              <input
                id="days"
                type="number"
                min="1"
                step="1"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="input-field w-full"
                placeholder="e.g., 1"
              />
            </div>

            <div>
              <label htmlFor="daily-rate" className="label block mb-1.5">
                Daily witness fee ($)
              </label>
              <input
                id="daily-rate"
                type="number"
                min="0"
                step="1"
                value={dailyRate}
                onChange={(e) => setDailyRate(e.target.value)}
                className="input-field w-full"
                aria-describedby="daily-rate-note"
              />
              <p id="daily-rate-note" className="text-xs text-gray-500 mt-1">
                Current Oklahoma rate is $10/day. Verify current rate before issuing.
              </p>
            </div>

            <div>
              <label htmlFor="mileage-rate" className="label block mb-1.5">
                Mileage rate ($ per mile)
              </label>
              <input
                id="mileage-rate"
                type="number"
                min="0"
                step="0.01"
                value={mileageRate}
                onChange={(e) => setMileageRate(e.target.value)}
                className="input-field w-full"
                aria-describedby="mileage-rate-note"
              />
              <p id="mileage-rate-note" className="text-xs text-gray-500 mt-1">
                Rate subject to change. $0.70/mi is a reasonable estimate.
              </p>
            </div>
          </div>

          {/* Result Display */}
          {result && (
            <div
              className="bg-navy/5 border border-navy/20 rounded-lg p-5 mt-4"
              role="region"
              aria-label="Calculation results"
            >
              <h3 className="font-semibold text-navy mb-3">Fee Breakdown</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Daily witness fee ({days} day{parseFloat(days) !== 1 ? 's' : ''} × {formatCurrency(parseFloat(dailyRate))}):</span>
                  <span className="font-medium">{formatCurrency(result.dailyFeeTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Round-trip mileage ({result.roundTripMiles.toFixed(1)} mi × {formatCurrency(parseFloat(mileageRate))}/mi):</span>
                  <span className="font-medium">{formatCurrency(result.mileageTotal)}</span>
                </div>
                <div className="border-t border-navy/20 pt-2 mt-2 flex justify-between text-lg font-bold text-navy">
                  <span>Total witness fee:</span>
                  <span>{formatCurrency(result.total)}</span>
                </div>
              </div>
            </div>
          )}

          {!result && mileage && (
            <p className="text-sm text-orange-600 mt-4" role="alert">
              Please enter valid numbers for all fields to see the calculation.
            </p>
          )}
        </section>

        {/* Important Notice */}
        <section className="card p-6 border-l-4 border-l-orange-400" aria-label="Important legal notice">
          <h2 className="text-lg font-semibold text-navy mb-3">Important: Fee Must Accompany Subpoena</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Under Oklahoma law, the witness fee must accompany the subpoena when it is served. If the fee is 
            not provided, the subpoena may be invalid, and the witness is not legally required to appear. 
            Always include the calculated fee — covering both the daily attendance rate and mileage 
            reimbursement — with the subpoena document at the time of service.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            The mileage reimbursement covers the round-trip distance the witness must travel from their 
            residence or place of business to the courthouse and back. Be sure to use an accurate mileage 
            figure; online mapping tools can help determine the precise one-way distance.
          </p>
        </section>

        {/* Context: Service Methods */}
        <section className="card p-6" aria-label="Subpoena service methods">
          <h2 className="text-xl font-semibold text-navy mb-4">How Subpoenas Are Served in Oklahoma</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Oklahoma law (12 O.S. § 2004.1) specifies several methods for serving subpoenas. A subpoena 
            may be served by a sheriff, deputy sheriff, a licensed process server, or any person who is 
            over 18 years of age and not a party to the action. Service must be made by delivering a copy 
            of the subpoena to the person named and tendering the witness fee.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            For witnesses who cannot be located after diligent effort, a court may authorize alternative 
            service methods. However, the fee requirement remains — the witness fee is an essential component 
            of a valid subpoena. Without it, even proper personal service may not compel attendance.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Subpoenas for out-of-state witnesses may require domestication under the UIDDA (12 O.S. § 3253) 
            and can involve additional fees. If you need help serving a subpoena anywhere in Oklahoma, 
            contact Just Legal Solutions at{' '}
            <a href="tel:539-367-6832" className="text-blue-600 hover:underline">(539) 367-6832</a>.
          </p>
        </section>

        {/* FAQ */}
        <section className="card p-6" aria-label="Frequently asked questions">
          <h2 className="text-xl font-semibold text-navy mb-4">Common Questions About Witness Fees</h2>

          <div className="space-y-4">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-navy hover:text-blue-600 transition-colors">
                <span>What if the witness refuses to accept the fee?</span>
                <span className="transform group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <p className="text-sm text-gray-700 leading-relaxed mt-2 pl-4 border-l-2 border-gray-200">
                If a witness refuses to accept the fee, the server should note this on the return of service. 
                The fact that the fee was tendered is often sufficient for legal purposes, but consult your 
                attorney for guidance on specific situations.
              </p>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-navy hover:text-blue-600 transition-colors">
                <span>Does the fee rate ever change?</span>
                <span className="transform group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <p className="text-sm text-gray-700 leading-relaxed mt-2 pl-4 border-l-2 border-gray-200">
                Yes. Both the daily witness fee and the mileage reimbursement rate are set by statute and 
                may be updated by the Oklahoma Legislature. Always verify the current rate before calculating 
                fees. The mileage rate is typically tied to the state employee mileage rate.
              </p>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-navy hover:text-blue-600 transition-colors">
                <span>Are expert witnesses paid the same rate?</span>
                <span className="transform group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <p className="text-sm text-gray-700 leading-relaxed mt-2 pl-4 border-l-2 border-gray-200">
                No. Expert witnesses typically negotiate their own fees, which are separate from the statutory 
                witness fee. The $10/day rate applies to fact witnesses compelled by subpoena, not retained 
                experts.
              </p>
            </details>

            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-navy hover:text-blue-600 transition-colors">
                <span>Can I serve a subpoena myself?</span>
                <span className="transform group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <p className="text-sm text-gray-700 leading-relaxed mt-2 pl-4 border-l-2 border-gray-200">
                If you are a party to the case, you generally cannot serve your own subpoena. Oklahoma law 
                requires service by a disinterested person over the age of 18. Use our{' '}
                <a href="/oklahoma-tools/can-i-serve-my-own-papers" className="text-blue-600 hover:underline">decision tool</a>{' '}
                for a personalized answer.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="card p-6 bg-navy text-white text-center" aria-label="Contact section">
          <h2 className="text-lg font-semibold mb-2">Need Help Serving a Subpoena?</h2>
          <p className="text-sm text-white/80 mb-4">
            Just Legal Solutions serves subpoenas throughout Oklahoma with proper fee handling and documentation.
          </p>
          <a
            href="tel:539-367-6832"
            className="inline-block bg-[#d4a017] text-navy font-semibold px-6 py-2.5 rounded hover:bg-[#c29415] transition-colors"
          >
            Call (539) 367-6832
          </a>
        </section>
      </div>
    </HubPageLayout>
  );
}
