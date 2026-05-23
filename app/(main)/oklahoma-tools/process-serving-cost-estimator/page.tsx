'use client';

import { useState, useMemo } from 'react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';
import UnifiedSchema from '@/components/UnifiedSchema';

// --- Oklahoma counties (all 77) ---
const OKLAHOMA_COUNTIES = [
  'Adair','Alfalfa','Atoka','Beaver','Beckham','Blaine','Bryan','Caddo','Canadian','Carter',
  'Cherokee','Choctaw','Cimarron','Cleveland','Coal','Comanche','Cotton','Craig','Creek','Custer',
  'Delaware','Dewey','Ellis','Garfield','Garvin','Grady','Grant','Greer','Harmon','Harper',
  'Haskell','Hughes','Jackson','Jefferson','Johnston','Kay','Kingfisher','Kiowa','Latimer','Le Flore',
  'Lincoln','Logan','Love','Major','Marshall','Mayes','McClain','McCurtain','McIntosh','Murray',
  'Muskogee','Noble','Nowata','Okfuskee','Oklahoma','Okmulgee','Osage','Ottawa','Pawnee','Payne',
  'Pittsburg','Pontotoc','Pottawatomie','Pushmataha','Roger Mills','Rogers','Seminole','Sequoyah','Stephens','Texas',
  'Tillman','Tulsa','Wagoner','Washington','Washita','Woods','Woodward',
];

// Tiered counties (metro areas have higher base rates)
const TIER_1_COUNTIES = ['Oklahoma', 'Tulsa', 'Cleveland', 'Canadian', 'Comanche']; // Major metro
const TIER_2_COUNTIES = ['Rogers', 'Wagoner', 'Creek', 'Payne', 'Pottawatomie', 'Carter', 'Muskogee', 'Kay', 'Garfield', 'Grady', 'McClain']; // Mid-size urban

function getCountyTier(county: string): number {
  if (TIER_1_COUNTIES.includes(county)) return 1;
  if (TIER_2_COUNTIES.includes(county)) return 2;
  return 3; // Rural
}

// --- Service speed config ---
interface SpeedConfig {
  label: string;
  baseMin: number;
  baseMax: number;
  description: string;
  timeline: string;
}

const SPEED_OPTIONS: Record<string, SpeedConfig> = {
  standard: {
    label: 'Standard Service',
    baseMin: 50,
    baseMax: 75,
    description: 'Economy service with typical 3–7 day turnaround',
    timeline: '3–7 business days',
  },
  rush: {
    label: 'Rush Service',
    baseMin: 100,
    baseMax: 150,
    description: 'Prioritized handling with 1–2 day turnaround',
    timeline: '1–2 business days',
  },
  same_day: {
    label: 'Same-Day Service',
    baseMin: 175,
    baseMax: 250,
    description: 'Documents served the same day they are received',
    timeline: 'Same day (business hours)',
  },
  emergency: {
    label: 'Emergency Service',
    baseMin: 300,
    baseMax: 400,
    description: 'Immediate dispatch for urgent legal deadlines',
    timeline: 'Within hours (including after-hours)',
  },
};

// --- Special conditions ---
interface SpecialCondition {
  key: string;
  label: string;
  cost: number;
  costType: 'flat' | 'per_hour';
  description: string;
}

const SPECIAL_CONDITIONS: SpecialCondition[] = [
  {
    key: 'incarcerated',
    label: 'Incarcerated Defendant',
    cost: 25,
    costType: 'flat',
    description: 'Additional coordination with correctional facility staff',
  },
  {
    key: 'military_base',
    label: 'Military Base Access',
    cost: 50,
    costType: 'flat',
    description: 'Gate pass coordination and base security procedures',
  },
  {
    key: 'gated_community',
    label: 'Gated Community',
    cost: 15,
    costType: 'flat',
    description: 'Extra time for entry coordination with gate security',
  },
  {
    key: 'skip_trace',
    label: 'Skip Trace Needed',
    cost: 75,
    costType: 'flat',
    description: 'Database search to locate defendant\'s current address',
  },
  {
    key: 'stakeout',
    label: 'Stakeout / Surveillance',
    cost: 100,
    costType: 'per_hour',
    description: 'Waiting on-site for defendant to appear (billed hourly)',
  },
  {
    key: 'court_filing',
    label: 'Court Filing of Return',
    cost: 25,
    costType: 'flat',
    description: 'Filing the proof of service affidavit with the court clerk',
  },
];

// --- Citations ---
const CITATIONS = [
  {
    title: '12 O.S. § 158.1 — Licensed Process Servers',
    url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=158.1&title=12',
    description: 'Licensing requirements for private process servers in Oklahoma.',
  },
  {
    title: '28A O.S. § 28-81 — Witness Fees',
    url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=28-81&title=28A',
    description: 'Witness fee rates in Oklahoma.',
  },
];

export default function ProcessServingCostEstimator() {
  const [county, setCounty] = useState('');
  const [speed, setSpeed] = useState('standard');
  const [defendants, setDefendants] = useState(1);
  const [conditions, setConditions] = useState<Record<string, boolean>>({});
  const [stakeoutHours, setStakeoutHours] = useState(2);

  // Toggle condition
  function toggleCondition(key: string) {
    setConditions((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  // Computed estimate
  const estimate = useMemo(() => {
    if (!county) return null;

    const speedConfig = SPEED_OPTIONS[speed];
    const tier = getCountyTier(county);

    // County tier multiplier: rural areas cost more due to travel
    let tierMinMultiplier = 1;
    let tierMaxMultiplier = 1;
    if (tier === 3) {
      tierMinMultiplier = 1.15;
      tierMaxMultiplier = 1.25;
    } else if (tier === 2) {
      tierMinMultiplier = 1.05;
      tierMaxMultiplier = 1.1;
    }

    const baseMin = Math.round(speedConfig.baseMin * tierMinMultiplier);
    const baseMax = Math.round(speedConfig.baseMax * tierMaxMultiplier);

    const lineItems: { label: string; costMin: number; costMax: number; note?: string }[] = [];

    // Base service
    lineItems.push({
      label: `${speedConfig.label} — ${county} County (${tier === 1 ? 'Metro' : tier === 2 ? 'Urban' : 'Rural'})`,
      costMin: baseMin,
      costMax: baseMax,
      note: speedConfig.timeline,
    });

    // Additional defendants
    let additionalDefendantCost = 0;
    if (defendants > 1) {
      additionalDefendantCost = (defendants - 1) * 35;
      lineItems.push({
        label: `Additional ${defendants - 1} defendant${defendants - 1 > 1 ? 's' : ''}`,
        costMin: additionalDefendantCost,
        costMax: additionalDefendantCost,
      });
    }

    // Special conditions
    let conditionsTotalMin = 0;
    let conditionsTotalMax = 0;

    SPECIAL_CONDITIONS.forEach((cond) => {
      if (conditions[cond.key]) {
        let costMin = cond.cost;
        let costMax = cond.cost;
        if (cond.costType === 'per_hour') {
          costMin = cond.cost * stakeoutHours;
          costMax = cond.cost * stakeoutHours;
        }
        conditionsTotalMin += costMin;
        conditionsTotalMax += costMax;
        lineItems.push({
          label: cond.label,
          costMin,
          costMax,
          note: cond.costType === 'per_hour' ? `${stakeoutHours} hrs @ $${cond.cost}/hr` : undefined,
        });
      }
    });

    const totalMin = baseMin + additionalDefendantCost + conditionsTotalMin;
    const totalMax = baseMax + additionalDefendantCost + conditionsTotalMax;

    return { totalMin, totalMax, lineItems, speedConfig, tier };
  }, [county, speed, defendants, conditions, stakeoutHours]);

  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Process Serving Cost Estimator"
        pageDescription="Process Serving Cost Estimator — Just Legal Solutions, Oklahoma process server and legal support services."
        pageUrl="https://justlegalsolutions.org/oklahoma-tools/process-serving-cost-estimator"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Process Serving Cost Estimator', url: '/oklahoma-tools/process-serving-cost-estimator' },
        ]}
      />
    <HubPageLayout
      title="Process Serving Cost Estimator"
      description="Estimate the cost of process serving in any Oklahoma county. Get itemized pricing for service speed, additional defendants, and special conditions."
      citations={CITATIONS}
      showDisclaimer={true}
    >
      {/* Introduction */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-navy mb-3">
          Estimate Your Oklahoma Process Serving Costs
        </h2>
        <p className="text-text-dark mb-3">
          Process serving costs in Oklahoma vary based on location, urgency,
          number of defendants, and special circumstances. This estimator provides
          realistic price ranges based on industry standards for licensed Oklahoma
          process servers. Actual quotes from individual providers may differ, so
          always contact your process server directly for firm pricing.
        </p>
        <p className="text-text-dark mb-3">
          Pricing is influenced by three main factors: the county (metro areas
          like Oklahoma County and Tulsa County tend to have competitive base
          rates, while rural counties may charge more for travel time), the speed
          of service (standard vs. rush vs. same-day vs. emergency), and any
          special conditions that add complexity to the service.
        </p>
        <p className="text-text-dark">
          Use the form below to build an itemized estimate. This tool is for
          planning purposes only — the figures shown are estimates, not guaranteed
          quotes. For actual pricing from Just Legal Solutions, call{' '}
          <a href="tel:539-367-6832" className="text-indigo-600 underline hover:text-indigo-800">
            (539) 367-6832
          </a>{' '}
          or email{' '}
          <a href="mailto:info@JustLegalSolutions.org" className="text-indigo-600 underline hover:text-indigo-800">
            info@JustLegalSolutions.org
          </a>.
        </p>
      </div>

      {/* Estimator Form */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 md:p-6 mb-8">
        <h3 className="text-lg font-semibold text-navy mb-5">Build Your Estimate</h3>

        <div className="space-y-5">
          {/* County Selector */}
          <div>
            <label htmlFor="county" className="block text-sm font-medium text-navy mb-1">
              County <span className="text-red-500">*</span>
            </label>
            <select
              id="county"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
              aria-required="true"
            >
              <option value="">Select a county...</option>
              {OKLAHOMA_COUNTIES.map((c) => (
                <option key={c} value={c}>
                  {c} County
                </option>
              ))}
            </select>
            <p className="text-xs text-text-muted mt-1">
              All 77 Oklahoma counties available. Metro counties may have lower base rates due to proximity.
            </p>
          </div>

          {/* Service Speed */}
          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Service Speed <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="Service speed">
              {Object.entries(SPEED_OPTIONS).map(([key, config]) => {
                const isSelected = speed === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSpeed(key)}
                    className={`text-left border rounded-lg p-3 transition-all duration-200 ${
                      isSelected
                        ? 'border-gold bg-gold/5 ring-1 ring-gold'
                        : 'border-gray-200 hover:border-gold/50 hover:bg-gray-50'
                    }`}
                    role="radio"
                    aria-checked={isSelected}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm text-navy">{config.label}</span>
                      <span className="text-sm font-semibold text-gold">
                        ${config.baseMin}–${config.baseMax}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted">{config.description}</p>
                    <p className="text-xs text-text-muted mt-0.5">
                      Timeline: {config.timeline}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Number of Defendants */}
          <div>
            <label htmlFor="defendants" className="block text-sm font-medium text-navy mb-1">
              Number of Defendants to Serve
            </label>
            <div className="flex items-center gap-3">
              <input
                id="defendants"
                type="range"
                min={1}
                max={5}
                value={defendants}
                onChange={(e) => setDefendants(parseInt(e.target.value, 10))}
                className="flex-1 accent-gold"
                aria-valuemin={1}
                aria-valuemax={5}
                aria-valuenow={defendants}
              />
              <span className="text-sm font-semibold text-navy w-12 text-center">
                {defendants}
              </span>
            </div>
            <p className="text-xs text-text-muted mt-1">
              Each additional defendant after the first adds approximately $35.
            </p>
          </div>

          {/* Special Conditions */}
          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Special Conditions (check all that apply)
            </label>
            <div className="space-y-2">
              {SPECIAL_CONDITIONS.map((cond) => {
                const isChecked = !!conditions[cond.key];
                return (
                  <div key={cond.key}>
                    <label
                      className={`flex items-start gap-3 border rounded-lg p-3 cursor-pointer transition-all duration-200 ${
                        isChecked
                          ? 'border-gold bg-gold/5'
                          : 'border-gray-200 hover:border-gold/50 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleCondition(cond.key)}
                        className="mt-0.5 w-4 h-4 accent-gold flex-shrink-0"
                        aria-label={cond.label}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-navy">{cond.label}</span>
                          <span className="text-sm font-semibold text-gold">
                            +${cond.cost}
                            {cond.costType === 'per_hour' ? '/hr' : ''}
                          </span>
                        </div>
                        <p className="text-xs text-text-muted mt-0.5">{cond.description}</p>
                      </div>
                    </label>
                    {/* Stakeout hours input */}
                    {cond.key === 'stakeout' && isChecked && (
                      <div className="ml-10 mt-2">
                        <label htmlFor="stakeout-hours" className="block text-xs font-medium text-navy mb-1">
                          Estimated surveillance hours
                        </label>
                        <div className="flex items-center gap-3">
                          <input
                            id="stakeout-hours"
                            type="range"
                            min={1}
                            max={8}
                            value={stakeoutHours}
                            onChange={(e) => setStakeoutHours(parseInt(e.target.value, 10))}
                            className="w-48 accent-gold"
                            aria-valuemin={1}
                            aria-valuemax={8}
                            aria-valuenow={stakeoutHours}
                          />
                          <span className="text-sm font-semibold text-navy">
                            {stakeoutHours} hr{stakeoutHours !== 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Estimate Results */}
      {estimate ? (
        <div className="bg-white border-2 border-gold/30 rounded-lg p-5 md:p-6 mb-8">
          <h3 className="text-lg font-semibold text-navy mb-4">Estimated Cost Breakdown</h3>

          {/* Total */}
          <div className="bg-navy text-white rounded-lg p-5 text-center mb-5">
            <p className="text-white/70 text-sm mb-1">Estimated Total</p>
            <p className="text-3xl md:text-4xl font-bold text-gold">
              ${estimate.totalMin} — ${estimate.totalMax}
            </p>
            <p className="text-white/70 text-xs mt-2">
              This is an estimate only. Actual rates vary by provider.
            </p>
          </div>

          {/* Itemized Breakdown */}
          <div className="space-y-2 mb-5">
            <p className="text-sm font-medium text-navy mb-2">Itemized Breakdown</p>
            {estimate.lineItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex-1 pr-4">
                  <p className="text-sm text-text-dark">{item.label}</p>
                  {item.note && (
                    <p className="text-xs text-text-muted">{item.note}</p>
                  )}
                </div>
                <p className="text-sm font-semibold text-navy flex-shrink-0">
                  {item.costMin === item.costMax
                    ? `$${item.costMin}`
                    : `$${item.costMin}–$${item.costMax}`}
                </p>
              </div>
            ))}
          </div>

          {/* Disclaimer within results */}
          <div
            className="bg-amber-50 border border-amber-200 rounded-md p-3"
            role="note"
            aria-label="Cost estimate disclaimer"
          >
            <p className="text-xs text-amber-800">
              <strong>Important:</strong> These figures are rough estimates based on
              industry ranges in Oklahoma. Actual pricing varies by county, provider,
              case complexity, travel distance, time of day, and other factors. Some
              process servers charge flat fees while others bill hourly. Always
              request a written quote before engaging services. Mileage fees,
              notary fees, and court filing fees may be additional.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center mb-8">
          <p className="text-text-muted">
            Select a county above to generate a cost estimate.
          </p>
        </div>
      )}

      {/* Cost Factors Explained */}
      <div className="space-y-6 mb-8">
        <h2 className="text-xl font-bold text-navy">Understanding Cost Factors</h2>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Service Speed Tiers
          </h3>
          <p className="text-text-dark text-sm mb-2">
            Most Oklahoma process servers offer multiple speed tiers. Standard service
            (3–7 days) is the most economical and works well when you have plenty of
            time before a deadline. Rush service (1–2 days) costs more but prioritizes
            your documents. Same-day service is for urgent situations where documents
            must be served immediately. Emergency service is the premium tier for
            after-hours, weekends, or crisis situations — this includes multiple
            attempts and potential stakeout time.
          </p>
          <p className="text-text-dark text-sm">
            Rush and same-day service require the process server to drop other work
            or extend their hours, which is why the pricing increases significantly.
            Planning ahead and using standard service can reduce your costs by 50% or
            more.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            County Location Impact
          </h3>
          <p className="text-text-dark text-sm">
            Oklahoma process servers typically charge based on travel distance and
            time. Metro counties — Oklahoma, Tulsa, Cleveland, Canadian, and Comanche
            — have the most process servers, creating competitive pricing. Rural
            counties may have fewer licensed servers available, and travel time to
            remote locations increases costs. Some servers add a mileage surcharge
            for locations more than 25 miles from their base. The estimator applies
            a modest rural adjustment for Tier 3 counties.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Multiple Defendants
          </h3>
          <p className="text-text-dark text-sm">
            Each additional defendant requires a separate service attempt and
            separate proof of service documentation. Serving multiple defendants at
            the same address may reduce the incremental cost since travel is shared.
            However, each defendant still requires their own summons and service
            affidavit. The estimator adds approximately $35 per additional defendant
            as a reasonable industry standard.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Special Conditions That Add Cost
          </h3>
          <div className="space-y-3 mt-3">
            <div>
              <p className="text-sm font-medium text-navy">Incarcerated Defendants (+$25)</p>
              <p className="text-text-dark text-sm">
                Serving someone in jail or prison requires coordination with facility
                staff, adherence to visitation schedules, and sometimes background
                checks for the process server. These steps add time and administrative
                overhead.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-navy">Military Base Access (+$50)</p>
              <p className="text-text-dark text-sm">
                Military installations have strict security procedures. Process
                servers may need advance clearance, escorts, or specific entry
                documentation. Base access can add hours to the process and may
                require coordination days in advance.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-navy">Skip Tracing (+$75)</p>
              <p className="text-text-dark text-sm">
                When a defendant's current address is unknown, a skip tracer searches
                databases, public records, utility connections, and social media to
                locate them. This specialized service requires access to proprietary
                databases and investigative skills.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-navy">Stakeout / Surveillance ($100/hr)</p>
              <p className="text-text-dark text-sm">
                Sometimes a defendant is deliberately evading service. A stakeout
                involves waiting at a known location (home, work, etc.) for the
                person to appear. This is billed hourly because the duration is
                unpredictable. Most servers have a 2-hour minimum for stakeouts.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Additional Fees to Consider
          </h3>
          <p className="text-text-dark text-sm">
            Beyond the service fee, you may encounter additional charges: notary fees
            for the affidavit of service ($5–$10), court filing fees for submitting
            the return of service ($25+), mileage surcharges for long distances (varies),
            and photocopy/printing fees for document preparation. Some process servers
            include these in a flat rate; others itemize them separately. Always ask
            what is included in the quoted price.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy text-white rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Get an Actual Quote</h3>
        <p className="text-white/80 text-sm mb-4">
          This tool provides estimates only. For actual pricing tailored to your
          specific case, contact Just Legal Solutions. We serve all 77 Oklahoma
          counties with transparent, competitive rates.
        </p>
        <p className="text-sm">
          Call{' '}
          <a href="tel:539-367-6832" className="text-gold font-semibold hover:underline">
            (539) 367-6832
          </a>{' '}
          or email{' '}
          <a
            href="mailto:info@JustLegalSolutions.org"
            className="text-gold font-semibold hover:underline"
          >
            info@JustLegalSolutions.org
          </a>
        </p>
        <p className="text-white/60 text-xs mt-3">
          Just Legal Solutions — Joseph Iannazzi, NAPPS #14801
        </p>
      </div>
    </HubPageLayout>
    </>
  );
}
