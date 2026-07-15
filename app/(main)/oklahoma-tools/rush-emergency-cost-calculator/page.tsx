'use client';

import { useState, useMemo } from 'react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';
import UnifiedSchema from '@/components/UnifiedSchema';

type ServiceTier = 'standard' | 'rush' | 'same-day' | 'emergency';
type CountyType = 'metro' | 'rural';

interface CostEstimate {
  baseLow: number;
  baseHigh: number;
  addOnTotal: number;
  totalLow: number;
  totalHigh: number;
  timeline: string;
}

export default function RushEmergencyCostCalculator() {
  const [tier, setTier] = useState<ServiceTier>('standard');
  const [county, setCounty] = useState<CountyType>('metro');
  const [afterHours, setAfterHours] = useState(false);
  const [weekend, setWeekend] = useState(false);
  const [holiday, setHoliday] = useState(false);
  const [defendantCount, setDefendantCount] = useState<string>('1');

  const estimate: CostEstimate | null = useMemo(() => {
    const defendants = parseInt(defendantCount, 10);
    if (isNaN(defendants) || defendants < 1) return null;

    // Base ranges by tier and county type — estimated market rates only
    const baseRanges: Record<ServiceTier, Record<CountyType, [number, number]>> = {
      standard: { metro: [65, 85], rural: [85, 110] },
      rush: { metro: [120, 160], rural: [160, 210] },
      'same-day': { metro: [175, 225], rural: [225, 290] },
      emergency: { metro: [275, 350], rural: [350, 450] },
    };

    const [baseLow, baseHigh] = baseRanges[tier][county];

    let addOnTotal = 0;
    if (afterHours) addOnTotal += 50;
    if (weekend) addOnTotal += 75;
    if (holiday) addOnTotal += 100;

    const totalLow = (baseLow + addOnTotal) * defendants;
    const totalHigh = (baseHigh + addOnTotal) * defendants;

    const timelines: Record<ServiceTier, string> = {
      standard: '1–3 business days',
      rush: 'Within 24 hours',
      'same-day': 'Attempt made today',
      emergency: 'Within 4 hours',
    };

    return {
      baseLow,
      baseHigh,
      addOnTotal,
      totalLow,
      totalHigh,
      timeline: timelines[tier],
    };
  }, [tier, county, afterHours, weekend, holiday, defendantCount]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const citationSources = [
    {
      title: '12 O.S. \u00A7 2004 \u2014 Methods of Service of Process',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
      description: 'General service of process requirements in Oklahoma.',
    },
    {
      title: '12 O.S. \u00A7 158.1 \u2014 Licensed Process Servers',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=158.1&title=12',
      description: 'Licensing and regulatory framework for Oklahoma process servers.',
    },
  ];

  const allTiers: ServiceTier[] = ['standard', 'rush', 'same-day', 'emergency'];

  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Rush Emergency Cost Calculator"
        pageDescription="Rush Emergency Cost Calculator — Just Legal Solutions, Oklahoma process server and legal support services."
        pageUrl="https://justlegalsolutions.org/oklahoma-tools/rush-emergency-cost-calculator"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Rush Emergency Cost Calculator', url: '/oklahoma-tools/rush-emergency-cost-calculator' },
        ]}
      />
    <HubPageLayout
      title="Rush & Emergency Cost Calculator"
      description="Compare estimated costs for standard, rush, same-day, and emergency process serving across Oklahoma."
      citations={citationSources}
    >
      <div className="space-y-8">
        {/* Disclaimer Banner */}
        <div
          className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-sm text-orange-800"
          role="note"
        >
          <strong>Important:</strong> All prices shown are <strong>estimated market rates</strong> for 
          planning purposes only. Actual pricing varies by provider, location, case complexity, and 
          other factors. Contact individual process servers for actual quotes.
        </div>

        {/* Calculator Card */}
        <section className="card p-6" aria-label="Rush service cost calculator">
          <h2 className="text-xl font-semibold text-navy mb-4">Calculate Estimated Cost</h2>

          {/* Tier Selector */}
          <div className="mb-5">
            <label className="label block mb-2">Service tier</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2" role="group" aria-label="Service Tier Selection">
              {allTiers.map((t) => {
                const labels: Record<ServiceTier, string> = {
                  standard: 'Standard (1–3 days)',
                  rush: 'Rush (24 hrs)',
                  'same-day': 'Same-Day',
                  emergency: 'Emergency (4 hrs)',
                };
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTier(t)}
                    className={`px-3 py-2.5 rounded text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ${
                      tier === t
                        ? 'bg-navy text-white border-navy'
                        : 'bg-white text-navy border-gray-300 hover:border-navy/50'
                    }`}
                    aria-pressed={tier === t}
                  >
                    {labels[t]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* County Type */}
          <div className="mb-5">
            <label className="label block mb-2">County type</label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setCounty('metro')}
                className={`px-4 py-2 rounded text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ${
                  county === 'metro'
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-navy border-gray-300 hover:border-navy/50'
                }`}
                aria-pressed={county === 'metro'}
              >
                Metro (Tulsa/OKC area)
              </button>
              <button
                type="button"
                onClick={() => setCounty('rural')}
                className={`px-4 py-2 rounded text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ${
                  county === 'rural'
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-navy border-gray-300 hover:border-navy/50'
                }`}
                aria-pressed={county === 'rural'}
              >
                Rural / Outlying
              </button>
            </div>
          </div>

          {/* Add-ons */}
          <div className="mb-5">
            <label className="label block mb-2">Add-on services</label>
            <div className="flex flex-wrap gap-3">
              {[
                { key: 'afterHours' as const, label: 'After-Hours (+$50)', state: afterHours, setter: setAfterHours },
                { key: 'weekend' as const, label: 'Weekend (+$75)', state: weekend, setter: setWeekend },
                { key: 'holiday' as const, label: 'Holiday (+$100)', state: holiday, setter: setHoliday },
              ].map((addon) => (
                <button
                  key={addon.key}
                  type="button"
                  onClick={() => addon.setter(!addon.state)}
                  className={`px-4 py-2 rounded text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ${
                    addon.state
                      ? 'bg-[#d4a017] text-navy border-[#d4a017]'
                      : 'bg-white text-navy border-gray-300 hover:border-navy/50'
                  }`}
                  aria-pressed={addon.state}
                >
                  {addon.state ? '✓ ' : ''}{addon.label}
                </button>
              ))}
            </div>
          </div>

          {/* Defendant Count */}
          <div className="mb-5">
            <label htmlFor="defendant-count" className="label block mb-1.5">
              Number of defendants to serve
            </label>
            <input
              id="defendant-count"
              type="number"
              min="1"
              step="1"
              value={defendantCount}
              onChange={(e) => setDefendantCount(e.target.value)}
              className="input-field w-full md:w-48"
            />
          </div>

          {/* Result */}
          {estimate && (
            <div
              className="bg-navy/5 border border-navy/20 rounded-lg p-5 mt-4"
              role="region"
              aria-label="Cost estimate"
            >
              <h3 className="font-semibold text-navy mb-3">Estimated Cost Range</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Base service fee ({tier}, {county}):</span>
                  <span className="font-medium">
                    {formatCurrency(estimate.baseLow)} – {formatCurrency(estimate.baseHigh)}
                  </span>
                </div>
                {estimate.addOnTotal > 0 && (
                  <div className="flex justify-between">
                    <span>Add-ons total:</span>
                    <span className="font-medium">{formatCurrency(estimate.addOnTotal)}</span>
                  </div>
                )}
                {parseInt(defendantCount, 10) > 1 && (
                  <div className="flex justify-between">
                    <span>Multiple defendants (×{defendantCount}):</span>
                    <span className="font-medium">Multiplier applied</span>
                  </div>
                )}
                <div className="border-t border-navy/20 pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-navy font-semibold">Estimated total:</span>
                    <span className="text-xl font-bold text-navy">
                      {formatCurrency(estimate.totalLow)} – {formatCurrency(estimate.totalHigh)}
                    </span>
                  </div>
                </div>
                <div className="pt-2 text-xs text-gray-600">
                  <strong>Estimated timeline:</strong> {estimate.timeline}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Comparison Table */}
        <section className="card p-6" aria-label="Service tier comparison">
          <h2 className="text-xl font-semibold text-navy mb-4">Compare All Service Tiers</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Below is a side-by-side comparison of estimated pricing across all service tiers. Remember, 
            these are estimated market rates — actual pricing varies by provider.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-navy/30">
                  <th className="text-left py-2 px-3 font-semibold text-navy">Service Tier</th>
                  <th className="text-left py-2 px-3 font-semibold text-navy">Timeline</th>
                  <th className="text-right py-2 px-3 font-semibold text-navy">Metro Est.</th>
                  <th className="text-right py-2 px-3 font-semibold text-navy">Rural Est.</th>
                  <th className="text-left py-2 px-3 font-semibold text-navy">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tier: 'Standard' as const, time: '1–3 business days', metro: '$65–$85', rural: '$85–$110', best: 'Non-urgent cases' },
                  { tier: 'Rush' as const, time: 'Within 24 hours', metro: '$120–$160', rural: '$160–$210', best: 'Upcoming deadlines' },
                  { tier: 'Same-Day' as const, time: 'Attempt today', metro: '$175–$225', rural: '$225–$290', best: 'Same-day filings' },
                  { tier: 'Emergency' as const, time: 'Within 4 hours', metro: '$275–$350', rural: '$350–$450', best: 'Critical time limits' },
                ].map((row, i) => (
                  <tr
                    key={row.tier}
                    className={`border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="py-2.5 px-3 font-medium text-navy">{row.tier}</td>
                    <td className="py-2.5 px-3">{row.time}</td>
                    <td className="py-2.5 px-3 text-right font-mono">{row.metro}</td>
                    <td className="py-2.5 px-3 text-right font-mono">{row.rural}</td>
                    <td className="py-2.5 px-3 text-sm">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Add-On Pricing */}
        <section className="card p-6" aria-label="Add-on pricing details">
          <h2 className="text-xl font-semibold text-navy mb-4">Add-On Service Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'After-Hours Service', price: '+$50', desc: 'Service attempts outside normal business hours (before 8 AM or after 6 PM).' },
              { name: 'Weekend Service', price: '+$75', desc: 'Saturday or Sunday service attempts when courts and businesses are closed.' },
              { name: 'Holiday Service', price: '+$100', desc: 'Service on recognized state or federal holidays. Limited availability.' },
            ].map((addon) => (
              <div key={addon.name} className="bg-white border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-navy text-sm">{addon.name}</h3>
                  <span className="text-lg font-bold text-[#d4a017]">{addon.price}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{addon.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* When to Choose */}
        <section className="card p-6" aria-label="When to choose rush service">
          <h2 className="text-xl font-semibold text-navy mb-4">When Do You Need Rush Service?</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Oklahoma law (12 O.S. § 2004(I)) requires service to be completed within 180 days of filing. 
            If your deadline is approaching, rush or emergency service may be necessary. Additionally, 
            certain case types — such as protective orders under 22 O.S. § 60.4 — require priority handling 
            due to the urgent nature of the matter.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Eviction proceedings under 41 O.S. § 111 also move quickly. Once a forcible entry and detainer 
            action is filed, service must be completed promptly to meet statutory timelines. Delays in service 
            can result in postponed hearings, additional filing fees, or even case dismissal.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            When selecting a rush tier, consider both the deadline and the location. Rural service requires 
            more travel time and typically costs more. If the recipient is evasive or hard to locate, 
            additional skip-tracing services may be needed, which can add to the overall timeline and cost.
          </p>
        </section>

        {/* CTA */}
        <section className="card p-6 bg-navy text-white text-center" aria-label="Contact section">
          <h2 className="text-lg font-semibold mb-2">Need Rush Service in Oklahoma?</h2>
          <p className="text-sm text-white/80 mb-4">
            Just Legal Solutions offers standard, rush, same-day, and emergency process serving statewide. 
            Call now for a custom quote based on your specific case needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:539-367-6832"
              className="inline-block bg-[#d4a017] text-navy font-semibold px-6 py-2.5 rounded hover:bg-[#c29415] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              Call (539) 367-6832
            </a>
            <a
              href="mailto:info@JustLegalSolutions.org"
              className="inline-block bg-white/10 text-white font-semibold px-6 py-2.5 rounded hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Email for Quote
            </a>
          </div>
        </section>
      </div>
    </HubPageLayout>
    </>
  );
}
