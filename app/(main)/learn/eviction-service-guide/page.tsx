'use client';

import { useState } from 'react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';
import UnifiedSchema from '@/components/UnifiedSchema';

type EvictionType = 'five-day' | 'ten-day';

export default function EvictionServiceGuidePage() {
  const [noticeType, setNoticeType] = useState<EvictionType>('five-day');
  const [noticeDate, setNoticeDate] = useState<string>('');
  const [timelineCalculated, setTimelineCalculated] = useState(false);

  // Helper: add business days to a date (excluding Sundays)
  const addBusinessDays = (dateStr: string, days: number) => {
    const date = new Date(dateStr + 'T12:00:00');
    let added = 0;
    while (added < days) {
      date.setDate(date.getDate() + 1);
      const day = date.getDay();
      if (day !== 0) added++;
    }
    return date;
  };

  // Helper: add calendar days
  const addCalendarDays = (dateStr: string, days: number) => {
    const date = new Date(dateStr + 'T12:00:00');
    date.setDate(date.getDate() + days);
    return date;
  };

  // Helper: format date
  const fmt = (d: Date) =>
    d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });

  let hearingDate: Date | null = null;
  let writWindowStart: Date | null = null;
  let writWindowEnd: Date | null = null;
  let earliestFiling: Date | null = null;

  if (timelineCalculated && noticeDate) {
    const noticePeriod = noticeType === 'five-day' ? 5 : 10;
    earliestFiling = addBusinessDays(noticeDate, noticePeriod);
    hearingDate = addCalendarDays(earliestFiling.toISOString().split('T')[0], 5);
    writWindowStart = addCalendarDays(earliestFiling.toISOString().split('T')[0], 5);
    writWindowEnd = addCalendarDays(earliestFiling.toISOString().split('T')[0], 10);
  }

  const citations = [
    {
      title: '41 O.S. § 111 — Forcible Entry and Detainer (Eviction) Service',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=111&title=41',
      description:
        'Governs service of eviction notices and forcible entry and detainer proceedings in Oklahoma.',
    },
    {
      title: '12 O.S. § 2004 — Methods of Service of Process',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
      description:
        'General service of process rules applicable to eviction proceedings.',
    },
    {
      title: '12 O.S. § 2006 — Computation of Time',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2006&title=12',
      description:
        'Rules for computing time periods under Oklahoma civil procedure, including court holidays.',
    },
    {
      title: 'Oklahoma Supreme Court Network (OSCN)',
      url: 'https://www.oscn.net/',
      description: 'Oklahoma court records, eviction forms, and hearing schedules.',
    },
  ];

  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Eviction Service Guide"
        pageDescription="Eviction Service Guide — Just Legal Solutions, Oklahoma process server and legal support services."
        pageUrl="https://justlegalsolutions.org/learn/eviction-service-guide"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Eviction Service Guide', url: '/learn/eviction-service-guide' },
        ]}
      />
    <HubPageLayout
      title="Eviction Service of Process in Oklahoma"
      description="A step-by-step guide to Oklahoma eviction service of process. Covers the 14-day compressed timeline, notice requirements, who can serve eviction papers, common landlord mistakes, and an interactive eviction timeline calculator."
      citations={citations}
    >
      <div className="prose-content">
        <p className="lead">
          Eviction cases move fast in Oklahoma. From the first notice to the sheriff executing a
          writ of execution, the entire process can take as little as two weeks. Because the
          timeline is so compressed, proper service at every stage is critical. A mistake in notice
          delivery or summons service can delay the case or result in dismissal. This guide explains
          how eviction service works in Oklahoma and what landlords and attorneys need to know.
        </p>

        <h2>Oklahoma Eviction Process Overview</h2>
        <p>
          Oklahoma evictions follow the Forcible Entry and Detainer (FED) procedure under Title 41
          of the Oklahoma Statutes. The process starts with a written notice and ends with the
          sheriff removing the tenant. Service of process plays a role at multiple points:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Written notice</strong> — Required before filing; must be served on the tenant
          </li>
          <li>
            <strong>Summons and petition</strong> — Served after the FED action is filed
          </li>
          <li>
            <strong>Judgment and writ</strong> — Enforced by the sheriff after court order
          </li>
        </ul>
        <p>
          Each stage has specific service rules. Failing to follow them gives the tenant a defense
          and can restart the clock.
        </p>

        <h2>The 14-Day Compressed Timeline</h2>
        <p>
          Oklahoma&apos;s eviction timeline is among the fastest in the country. Once the landlord
          files the FED action, a hearing may be scheduled within 5 to 10 days. If the landlord
          wins, the court issues a writ of execution, and the sheriff can remove the tenant shortly
          after. Because of this speed, every day counts and delays in service can cost the landlord
          weeks of lost rent.
        </p>

        <h2>Step-by-Step Eviction Service Process</h2>

        <div className="space-y-4 my-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                1
              </span>
              <div>
                <h3 className="text-navy font-semibold">Serve Written Notice</h3>
                <p className="text-sm text-gray-700 mt-1">
                  Before filing an eviction case, the landlord must give the tenant written notice.
                  The type of notice depends on the reason for eviction. For non-payment of rent, a
                  5-day notice is required. For lease violations (other than rent), a 10-day notice
                  is typically required. The notice must state the reason for eviction and inform
                  the tenant that they must cure the problem or vacate.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                2
              </span>
              <div>
                <h3 className="text-navy font-semibold">File Forcible Entry and Detainer Action</h3>
                <p className="text-sm text-gray-700 mt-1">
                  If the tenant does not cure the violation or move out within the notice period,
                  the landlord files a forcible entry and detainer action in the district court of
                  the county where the property is located. The landlord must provide the court with
                  a copy of the notice served on the tenant and proof of service.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                3
              </span>
              <div>
                <h3 className="text-navy font-semibold">Serve Summons and Petition</h3>
                <p className="text-sm text-gray-700 mt-1">
                  After the FED action is filed, the court issues a summons. The summons and petition
                  must be served on the tenant personally or by substituted service at their
                  residence. Leaving the papers at the door is not sufficient. Personal service is
                  preferred and provides the strongest foundation for the case.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                4
              </span>
              <div>
                <h3 className="text-navy font-semibold">Court Hearing</h3>
                <p className="text-sm text-gray-700 mt-1">
                  The court hearing is typically scheduled 5 to 10 days after service of the
                  summons. Both the landlord and tenant may present evidence and testimony. If the
                  tenant was not properly served, they may not appear, and the hearing may be
                  continued to allow proper service.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                5
              </span>
              <div>
                <h3 className="text-navy font-semibold">Judgment and Writ of Execution</h3>
                <p className="text-sm text-gray-700 mt-1">
                  If the landlord prevails, the court enters a judgment for possession and issues a
                  writ of execution. The writ authorizes the sheriff to remove the tenant and their
                  belongings from the property. The landlord may also be awarded past-due rent,
                  damages, and court costs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                6
              </span>
              <div>
                <h3 className="text-navy font-semibold">Sheriff Executes Writ</h3>
                <p className="text-sm text-gray-700 mt-1">
                  The sheriff serves the writ of execution on the tenant and coordinates the physical
                  removal if the tenant has not vacated. Landlords cannot remove a tenant
                  themselves — only the sheriff has authority to execute a writ of eviction in
                  Oklahoma.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2>Service Requirements for Eviction Notices</h2>
        <p>
          Oklahoma law requires that eviction notices be served on the tenant. Proper methods
          include:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Personal delivery</strong> — Handing the notice directly to the tenant
          </li>
          <li>
            <strong>Substituted service</strong> — Leaving the notice with a person of suitable age
            and discretion who resides at the property
          </li>
          <li>
            <strong>Posting</strong> — In some cases, posting the notice on the premises in a
            conspicuous place
          </li>
        </ul>
        <p>
          Mailing the notice alone is generally not sufficient for the initial notice unless
          specifically authorized by the lease or by court order. Always check the lease agreement
          for any additional notice requirements.
        </p>

        <h2>Who Can Serve Eviction Papers in Oklahoma?</h2>
        <p>
          Forcible entry and detainer summons and petitions may be served by a sheriff, deputy,
          or a licensed private process server. The landlord can serve the initial written notice
          themselves, but once the case is filed, court papers should be served by a qualified
          professional.
        </p>
        <p>
          Licensed process servers often offer faster service than sheriff&apos;s offices, which is
          valuable in Oklahoma&apos;s compressed timeline. A private server can attempt service
          multiple times and at hours when the sheriff may not be available.
        </p>

        <h2>Landlord Service vs. Professional Service</h2>
        <p>
          Landlords often consider serving notices themselves to save money. While this is legally
          permitted for the initial written notice, there are good reasons to hire a professional:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Proof of service</strong> — A professional provides an affidavit that holds up
            in court.
          </li>
          <li>
            <strong>Avoiding confrontation</strong> — Tenants may become hostile when receiving
            eviction papers.
          </li>
          <li>
            <strong>Legal compliance</strong> — Professionals know the rules for substituted service
            and proper documentation.
          </li>
          <li>
            <strong>Speed</strong> — Professional servers prioritize your case and make multiple
            attempts quickly.
          </li>
        </ul>

        <h2>Common Mistakes Landlords Make</h2>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-1">Wrong notice period</h4>
            <p className="text-sm text-amber-700">
              Using a 5-day notice for a lease violation that requires 10 days, or vice versa, can
              get the case dismissed.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-1">Insufficient proof of service</h4>
            <p className="text-sm text-amber-700">
              Failing to document how and when the notice was served leaves the landlord with no
              evidence if the tenant denies receiving it.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-1">Self-help eviction</h4>
            <p className="text-sm text-amber-700">
              Changing locks, shutting off utilities, or removing belongings without a court order
              is illegal and can result in damages awarded to the tenant.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-1">Accepting partial rent</h4>
            <p className="text-sm text-amber-700">
              Accepting a partial payment after serving a non-payment notice may void the notice and
              force the landlord to start over.
            </p>
          </div>
        </div>

        <h2>Local Ordinances May Add Requirements</h2>
        <p>
          Oklahoma&apos;s eviction laws are set at the state level, but many cities have additional
          landlord-tenant ordinances. Cities like Oklahoma City, Tulsa, and Norman may have local
          regulations affecting notice content, timing, or tenant rights. Always check local
          ordinances before beginning an eviction. A local attorney or court clerk can point you to
          the right resources.
        </p>

        <h2>Interactive Eviction Timeline Calculator</h2>
        <p>
          Use this tool to estimate key dates in your Oklahoma eviction case based on the date you
          served the initial notice. Select the notice type and enter the service date:
        </p>

        <div className="my-6 bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="font-semibold text-navy mb-4">Eviction Timeline Calculator</h3>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notice Type</label>
              <div className="flex gap-4" role="group" aria-label="Notice Type Selection">
                <button
                  onClick={() => { setNoticeType('five-day'); setTimelineCalculated(false); }}
                  aria-pressed={noticeType === 'five-day'}
                  className={`px-4 py-2 rounded border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ${
                    noticeType === 'five-day'
                      ? 'bg-navy text-white border-navy'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-navy'
                  }`}
                >
                  5-Day (Non-Payment)
                </button>
                <button
                  onClick={() => { setNoticeType('ten-day'); setTimelineCalculated(false); }}
                  aria-pressed={noticeType === 'ten-day'}
                  className={`px-4 py-2 rounded border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ${
                    noticeType === 'ten-day'
                      ? 'bg-navy text-white border-navy'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-navy'
                  }`}
                >
                  10-Day (Lease Violation)
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="notice-date" className="block text-sm font-medium text-gray-700 mb-1">
                Date Notice Was Served
              </label>
              <input
                id="notice-date"
                type="date"
                value={noticeDate}
                onChange={(e) => { setNoticeDate(e.target.value); setTimelineCalculated(false); }}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>

            <button
              onClick={() => setTimelineCalculated(true)}
              disabled={!noticeDate}
              className="bg-gold text-white px-6 py-2 rounded font-medium text-sm hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Calculate Timeline
            </button>
          </div>

          {timelineCalculated && noticeDate && earliestFiling && hearingDate && (
            <div className="border-t border-gray-200 pt-5">
              <h4 className="font-semibold text-navy mb-3">Estimated Timeline</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Notice Served:</span>{' '}
                    <span className="text-gray-700">{fmt(new Date(noticeDate + 'T12:00:00'))}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  <div>
                    <span className="font-medium">Earliest FED Filing Date:</span>{' '}
                    <span className="text-gray-700">{fmt(earliestFiling)}</span>
                    <p className="text-xs text-gray-500">
                      ({noticeType === 'five-day' ? '5' : '10'} business days after notice)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  <div>
                    <span className="font-medium">Earliest Hearing Date:</span>{' '}
                    <span className="text-gray-700">{fmt(hearingDate)}</span>
                    <p className="text-xs text-gray-500">(5–10 days after filing; earliest shown)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  <div>
                    <span className="font-medium">Writ Execution Window:</span>{' '}
                    <span className="text-gray-700">
                      {fmt(writWindowStart!)} – {fmt(writWindowEnd!)}
                    </span>
                    <p className="text-xs text-gray-500">
                      (after judgment; varies by court schedule and sheriff availability)
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Disclaimer: This calculator provides estimates only. Actual dates vary by county,
                court schedule, and service delays. Always consult an Oklahoma attorney for case-specific
                advice.
              </p>
            </div>
          )}
        </div>

        <h2>Need Eviction Service in Oklahoma?</h2>
        <p>
          Just Legal Solutions provides fast, licensed eviction service throughout Oklahoma. We
          understand the compressed timeline and can serve notices, summonses, and petitions with
          court-ready documentation. Call{' '}
          <a href="tel:539-367-6832" className="underline text-navy hover:text-gold">
            (539) 367-6832
          </a>{' '}
          or email{' '}
          <a href="mailto:info@JustLegalSolutions.org" className="underline text-navy hover:text-gold">
            info@JustLegalSolutions.org
          </a>
          .
        </p>
      </div>
    </HubPageLayout>
    </>
  );
}
