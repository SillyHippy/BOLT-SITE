'use client';

import { useState, useMemo } from 'react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';
import UnifiedSchema from '@/components/UnifiedSchema';

interface TimelineResult {
  orderDate: Date;
  week1Date: Date;
  week2Date: Date;
  week3Date: Date;
  earliestDefaultDate: Date;
  daysUntilDefault: number;
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function isValidDate(d: Date): boolean {
  return d instanceof Date && !isNaN(d.getTime());
}

export default function PublicationTimelineCalculator() {
  const [orderDateStr, setOrderDateStr] = useState<string>('');
  const [newspaperName, setNewspaperName] = useState<string>('');

  const result: TimelineResult | null = useMemo(() => {
    if (!orderDateStr) return null;

    const orderDate = new Date(orderDateStr + 'T00:00:00');
    if (!isValidDate(orderDate)) return null;

    // Week 1: first publication, typically the next available issue
    const week1Date = addDays(orderDate, 3);
    // Week 2: one week after first
    const week2Date = addDays(week1Date, 7);
    // Week 3: one week after second
    const week3Date = addDays(week2Date, 7);
    // Earliest default: 41 days from first publication per 12 O.S. § 2004
    const earliestDefaultDate = addDays(week1Date, 41);
    const daysUntilDefault = 41;

    return {
      orderDate,
      week1Date,
      week2Date,
      week3Date,
      earliestDefaultDate,
      daysUntilDefault,
    };
  }, [orderDateStr]);

  const citationSources = [
    {
      title: '12 O.S. \u00A7 2004(C)(3) \u2014 Service by Publication',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
      description: 'Requirements for service by publication including due diligence, 3 consecutive weeks, and 41-day waiting period.',
    },
    {
      title: '12 O.S. \u00A7 2006 \u2014 Computation of Time',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2006&title=12',
      description: 'Rules for computing time periods under Oklahoma civil procedure.',
    },
  ];

  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Publication Timeline Calculator"
        pageDescription="Publication Timeline Calculator — Just Legal Solutions, Oklahoma process server and legal support services."
        pageUrl="https://justlegalsolutions.org/oklahoma-tools/publication-timeline-calculator"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Publication Timeline Calculator', url: '/oklahoma-tools/publication-timeline-calculator' },
        ]}
      />
    <HubPageLayout
      title="Publication Timeline Calculator"
      description="Calculate the timeline for service by publication in Oklahoma under 12 O.S. \u00A7 2004(C)(3)."
      citations={citationSources}
    >
      <div className="space-y-8">
        {/* Calculator Card */}
        <section className="card p-6" aria-label="Publication timeline calculator">
          <h2 className="text-xl font-semibold text-navy mb-4">Calculate Publication Schedule</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="order-date" className="label block mb-1.5">
                Court order date (date judge signed the order)
              </label>
              <input
                id="order-date"
                type="date"
                value={orderDateStr}
                onChange={(e) => setOrderDateStr(e.target.value)}
                className="input-field w-full"
                aria-describedby="order-date-help"
              />
              <p id="order-date-help" className="text-xs text-gray-500 mt-1">
                The date the court authorized service by publication.
              </p>
            </div>

            <div>
              <label htmlFor="newspaper" className="label block mb-1.5">
                Newspaper name (optional)
              </label>
              <input
                id="newspaper"
                type="text"
                value={newspaperName}
                onChange={(e) => setNewspaperName(e.target.value)}
                className="input-field w-full"
                placeholder="e.g., Tulsa World"
                aria-describedby="newspaper-help"
              />
              <p id="newspaper-help" className="text-xs text-gray-500 mt-1">
                For your records only — not used in calculation.
              </p>
            </div>
          </div>

          {/* Timeline Visualization */}
          {result && (
            <div
              className="bg-navy/5 border border-navy/20 rounded-lg p-5 mt-4"
              role="region"
              aria-label="Publication timeline results"
            >
              <h3 className="font-semibold text-navy mb-4">Publication Schedule</h3>

              {/* Week-by-week timeline */}
              <div className="relative pl-6 space-y-4">
                {/* Vertical line */}
                <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-navy/20" aria-hidden="true" />

                {/* Court Order */}
                <div className="relative">
                  <div className="absolute -left-4 top-1.5 w-2.5 h-2.5 rounded-full bg-navy" aria-hidden="true" />
                  <div className="text-sm">
                    <span className="font-medium text-navy">Court Order Signed</span>
                    <span className="text-gray-600 ml-2">{formatDate(result.orderDate)}</span>
                  </div>
                </div>

                {/* Week 1 */}
                <div className="relative">
                  <div className="absolute -left-4 top-1.5 w-2.5 h-2.5 rounded-full bg-[#d4a017]" aria-hidden="true" />
                  <div className="text-sm">
                    <span className="font-medium text-navy">Week 1 — First Publication</span>
                    <span className="text-gray-600 ml-2">{formatDate(result.week1Date)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 ml-0">
                    First of three required consecutive weekly publications.
                  </p>
                </div>

                {/* Week 2 */}
                <div className="relative">
                  <div className="absolute -left-4 top-1.5 w-2.5 h-2.5 rounded-full bg-[#d4a017]" aria-hidden="true" />
                  <div className="text-sm">
                    <span className="font-medium text-navy">Week 2 — Second Publication</span>
                    <span className="text-gray-600 ml-2">{formatDate(result.week2Date)}</span>
                  </div>
                </div>

                {/* Week 3 */}
                <div className="relative">
                  <div className="absolute -left-4 top-1.5 w-2.5 h-2.5 rounded-full bg-[#d4a017]" aria-hidden="true" />
                  <div className="text-sm">
                    <span className="font-medium text-navy">Week 3 — Third Publication</span>
                    <span className="text-gray-600 ml-2">{formatDate(result.week3Date)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 ml-0">
                    Final required publication. Must be 3 consecutive weeks.
                  </p>
                </div>

                {/* Earliest Default */}
                <div className="relative">
                  <div className="absolute -left-4 top-1.5 w-2.5 h-2.5 rounded-full bg-green-600" aria-hidden="true" />
                  <div className="text-sm">
                    <span className="font-medium text-green-700">Earliest Default Judgment Eligibility</span>
                    <span className="text-gray-600 ml-2">{formatDate(result.earliestDefaultDate)}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5 ml-0">
                    {result.daysUntilDefault} days after first publication. This is the earliest date a default 
                    judgment may be requested.
                  </p>
                </div>
              </div>

              {/* Estimated Cost */}
              <div className="mt-5 pt-4 border-t border-navy/20">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div>
                    <span className="text-sm font-medium text-navy">Estimated newspaper cost (3-week run): </span>
                    <span className="text-sm font-bold text-navy">$60 – $120</span>
                  </div>
                  <span className="text-xs text-gray-500">Varies by newspaper. Contact your chosen publication for exact pricing.</span>
                </div>
              </div>
            </div>
          )}

          {!result && orderDateStr && (
            <p className="text-sm text-orange-600 mt-4" role="alert">
              Please select a valid court order date to see the timeline.
            </p>
          )}

          {!orderDateStr && (
            <p className="text-sm text-gray-500 mt-4 italic">
              Select a court order date above to calculate your publication timeline.
            </p>
          )}
        </section>

        {/* Step-by-Step Process */}
        <section className="card p-6" aria-label="Step-by-step publication process">
          <h2 className="text-xl font-semibold text-navy mb-4">The Publication Process in Oklahoma</h2>

          <div className="space-y-5">
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm"
                aria-hidden="true"
              >
                1
              </div>
              <div>
                <h3 className="font-medium text-navy text-sm">Attempt Personal Service First</h3>
                <p className="text-sm text-gray-700 leading-relaxed mt-1">
                  Before a court will authorize publication, you must demonstrate due diligence in attempting 
                  personal service. This typically means at least three attempts at different times of day 
                  and on different days. Document every attempt with dates, times, and outcomes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm"
                aria-hidden="true"
              >
                2
              </div>
              <div>
                <h3 className="font-medium text-navy text-sm">File a Motion for Publication</h3>
                <p className="text-sm text-gray-700 leading-relaxed mt-1">
                  Submit a motion to the court requesting authorization for service by publication. Include 
                  an affidavit detailing your due diligence efforts and explaining why the defendant cannot 
                  be located. The judge will review and, if satisfied, sign an order authorizing publication.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm"
                aria-hidden="true"
              >
                3
              </div>
              <div>
                <h3 className="font-medium text-navy text-sm">Choose a Newspaper</h3>
                <p className="text-sm text-gray-700 leading-relaxed mt-1">
                  Select a newspaper of general circulation in the area where the defendant was last known 
                  to reside. The newspaper must be approved by the court. Some courts maintain a list of 
                  approved publications. Contact the newspaper&apos;s legal notice department to arrange publication.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm"
                aria-hidden="true"
              >
                4
              </div>
              <div>
                <h3 className="font-medium text-navy text-sm">Publish for Three Consecutive Weeks</h3>
                <p className="text-sm text-gray-700 leading-relaxed mt-1">
                  Oklahoma law requires the notice to be published once per week for three consecutive weeks. 
                  The notice must include the case caption, a general description of the relief sought, and 
                  instructions for the defendant to respond. Keep copies of each published notice as proof.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm"
                aria-hidden="true"
              >
                5
              </div>
              <div>
                <h3 className="font-medium text-navy text-sm">File Proof of Publication</h3>
                <p className="text-sm text-gray-700 leading-relaxed mt-1">
                  After the third publication, obtain an affidavit or certificate of publication from the 
                  newspaper. File this proof with the court. The affidavit should include the dates of 
                  each publication and a statement that the newspaper is of general circulation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm"
                aria-hidden="true"
              >
                6
              </div>
              <div>
                <h3 className="font-medium text-navy text-sm">Wait 41 Days, Then Request Default</h3>
                <p className="text-sm text-gray-700 leading-relaxed mt-1">
                  The earliest you may request a default judgment is 41 days after the first publication. 
                  This waiting period gives the defendant a reasonable opportunity to see the notice and 
                  respond. After this period, file a motion for default judgment with the court.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="card p-6 border-l-4 border-l-orange-400" aria-label="Important notes">
          <h2 className="text-lg font-semibold text-navy mb-3">Important Notes About Publication</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Service by publication is considered a last resort in Oklahoma. Courts require a showing of 
            due diligence before authorizing it. If the defendant is eventually located, personal service 
            must still be attempted even after publication has begun.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Publication does not provide actual notice to the defendant in most cases. For this reason, 
            courts may impose limitations on the types of relief available. For example, monetary judgments 
            may be limited to the amount stated in the published notice. Always consult an attorney about 
            the specific implications for your case.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            If the defendant is on active military duty, the Servicemembers Civil Relief Act (SCRA) may 
            provide additional protections. You may need to file an affidavit regarding military service 
            before a default judgment can be entered.
          </p>
        </section>

        {/* CTA */}
        <section className="card p-6 bg-navy text-white text-center" aria-label="Contact section">
          <h2 className="text-lg font-semibold mb-2">Need Help with Service by Publication?</h2>
          <p className="text-sm text-white/80 mb-4">
            Just Legal Solutions assists with due diligence attempts, affidavit preparation, and publication 
            coordination across Oklahoma. Call for guidance on your specific case.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:539-367-6832"
              className="inline-block bg-[#d4a017] text-navy font-semibold px-6 py-2.5 rounded hover:bg-[#c29415] transition-colors"
            >
              Call (539) 367-6832
            </a>
            <a
              href="mailto:info@JustLegalSolutions.org"
              className="inline-block bg-white/10 text-white font-semibold px-6 py-2.5 rounded hover:bg-white/20 transition-colors"
            >
              Email for Help
            </a>
          </div>
        </section>
      </div>
    </HubPageLayout>
    </>
  );
}
