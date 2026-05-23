'use client';

import { useState, useMemo } from 'react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';
import UnifiedSchema from '@/components/UnifiedSchema';

// --- Oklahoma court holidays (fixed-date holidays for 2024-2026) ---
const OK_COURT_HOLIDAYS: string[] = [
  // New Year's Day
  '2024-01-01', '2025-01-01', '2026-01-01',
  // MLK Day (third Monday in Jan)
  '2024-01-15', '2025-01-20', '2026-01-19',
  // Presidents Day (third Monday in Feb)
  '2024-02-19', '2025-02-17', '2026-02-16',
  // Memorial Day (last Monday in May)
  '2024-05-27', '2025-05-26', '2026-05-25',
  // Juneteenth
  '2024-06-19', '2025-06-19', '2026-06-19',
  // Independence Day
  '2024-07-04', '2025-07-04', '2026-07-04',
  // Labor Day (first Monday in Sep)
  '2024-09-02', '2025-09-01', '2026-09-07',
  // Veterans Day
  '2024-11-11', '2025-11-11', '2026-11-11',
  // Thanksgiving (fourth Thursday in Nov) + day after
  '2024-11-28', '2024-11-29', '2025-11-27', '2025-11-28', '2026-11-26', '2026-11-27',
  // Christmas Eve
  '2024-12-24', '2025-12-24', '2026-12-24',
  // Christmas Day
  '2024-12-25', '2025-12-25', '2026-12-25',
  // New Year's Eve
  '2024-12-31', '2025-12-31', '2026-12-31',
];

const HOLIDAY_SET = new Set(OK_COURT_HOLIDAYS);

// --- Deadline config ---
interface DeadlineConfig {
  label: string;
  days: number;
  warningDays?: number;
  warningText?: string;
  description: string;
  citationKey?: string;
}

const DEADLINE_TYPES: Record<string, DeadlineConfig> = {
  '180-day': {
    label: '180-Day Service Deadline (12 O.S. §2004(I))',
    days: 180,
    warningDays: 150,
    warningText:
      'You are within 30 days of the 180-day deadline. If service has not been completed, file a motion for extension immediately to avoid dismissal.',
    description:
      'Oklahoma law requires that a summons and petition be served on the defendant within 180 days of filing the case. Failure to serve within this period may result in dismissal of the action without prejudice.',
    citationKey: '12_O_S_2004_I',
  },
  '20-day-answer': {
    label: '20-Day Answer Deadline (12 O.S. §2012)',
    days: 20,
    description:
      'A defendant generally has 20 days from the date of service to file an answer or otherwise respond to the complaint. This deadline is calculated from the service date, not the filing date.',
    citationKey: '12_O_S_2006',
  },
  '15-day-motion': {
    label: '15-Day Motion Response Deadline',
    days: 15,
    description:
      'Parties typically have 15 days to respond to motions filed in Oklahoma civil cases. Always verify the specific deadline set by the court in its scheduling order or local rules.',
    citationKey: '12_O_S_2006',
  },
  '41-day-publication': {
    label: '41-Day Publication Minimum (12 O.S. §2004(C)(3))',
    days: 41,
    description:
      'When serving by publication, the notice must run once a week for three consecutive weeks in a newspaper of general circulation. After the final publication, the defendant has 41 days before a default may be considered.',
    citationKey: '12_O_S_2004_C_3',
  },
};

// --- Helper functions ---
function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function isHoliday(date: Date): boolean {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return HOLIDAY_SET.has(`${y}-${m}-${d}`);
}

function isBusinessDay(date: Date): boolean {
  return !isWeekend(date) && !isHoliday(date);
}

function addCalendarDays(start: Date, days: number): Date {
  const result = new Date(start);
  result.setDate(result.getDate() + days);
  return result;
}

function countBusinessDays(start: Date, end: Date): number {
  let count = 0;
  const current = new Date(start);
  const endDate = new Date(end);
  while (current <= endDate) {
    if (isBusinessDay(current)) count++;
    current.setDate(current.getDate() + 1);
  }
  return count;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getDaysRemaining(target: Date): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const targetDate = new Date(target);
  targetDate.setHours(0, 0, 0, 0);
  const diffMs = targetDate.getTime() - today.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

// --- Citations ---
const CITATIONS = [
  {
    title: '12 O.S. § 2004(I) — 180-Day Service Deadline',
    url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
    description:
      'Requires summons and petition to be served within 180 days of filing; case may be dismissed for failure to serve.',
  },
  {
    title: '12 O.S. § 2006 — Computation of Time',
    url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2006&title=12',
    description:
      'Rules for computing time periods under Oklahoma civil procedure, including court holidays and extensions.',
  },
  {
    title: '12 O.S. § 2004(C)(3) — Service by Publication',
    url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
    description:
      'Requirements for service by publication including due diligence, newspaper selection, and minimum publication period.',
  },
];

export default function ServiceDeadlineCalculator() {
  const [filingDate, setFilingDate] = useState('');
  const [deadlineType, setDeadlineType] = useState('180-day');

  const result = useMemo(() => {
    if (!filingDate) return null;

    const start = new Date(filingDate);
    if (isNaN(start.getTime())) return null;

    const config = DEADLINE_TYPES[deadlineType];
    if (!config) return null;

    const deadlineDate = addCalendarDays(start, config.days);
    const daysRemaining = getDaysRemaining(deadlineDate);
    const businessDaysRemaining = countBusinessDays(
      new Date(),
      deadlineDate
    );

    const showWarning =
      config.warningDays !== undefined &&
      daysRemaining <= (config.days - config.warningDays) &&
      daysRemaining > 0;

    return {
      deadlineDate,
      daysRemaining,
      businessDaysRemaining,
      showWarning,
      warningText: config.warningText,
      description: config.description,
    };
  }, [filingDate, deadlineType]);

  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Service Deadline Calculator"
        pageDescription="Service Deadline Calculator — Just Legal Solutions, Oklahoma process server and legal support services."
        pageUrl="https://justlegalsolutions.org/oklahoma-tools/service-deadline-calculator"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Deadline Calculator', url: '/oklahoma-tools/service-deadline-calculator' },
        ]}
      />
    <HubPageLayout
      title="Service Deadline Calculator"
      description="Calculate Oklahoma process serving deadlines based on your filing date. Account for court holidays and business days."
      citations={CITATIONS}
      showDisclaimer={true}
    >
      {/* Introduction */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-navy mb-3">
          Calculate Your Oklahoma Service Deadlines
        </h2>
        <p className="text-text-dark mb-3">
          Oklahoma law imposes strict deadlines for serving legal documents. Missing
          these deadlines can result in case dismissal, default judgments, or other
          serious consequences. This calculator helps attorneys, paralegals, and
          self-represented litigants determine critical deadlines under Oklahoma
          statutes and rules of civil procedure.
        </p>
        <p className="text-text-dark">
          Select your filing date and the type of deadline you need to track. The
          calculator accounts for Oklahoma court holidays and distinguishes between
          calendar days and business days. For the 180-day service deadline, a
          warning appears when you approach 150 days, giving you time to file a
          motion for extension if needed.
        </p>
      </div>

      {/* Calculator Card */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 md:p-6 mb-8">
        <h3 className="text-lg font-semibold text-navy mb-4">Deadline Calculator</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {/* Filing Date */}
          <div>
            <label htmlFor="filing-date" className="block text-sm font-medium text-navy mb-1">
              Filing Date <span className="text-red-500">*</span>
            </label>
            <input
              id="filing-date"
              type="date"
              value={filingDate}
              onChange={(e) => setFilingDate(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
              aria-required="true"
            />
            <p className="text-xs text-text-muted mt-1">
              Enter the date the case was filed with the court clerk.
            </p>
          </div>

          {/* Deadline Type */}
          <div>
            <label htmlFor="deadline-type" className="block text-sm font-medium text-navy mb-1">
              Deadline Type <span className="text-red-500">*</span>
            </label>
            <select
              id="deadline-type"
              value={deadlineType}
              onChange={(e) => setDeadlineType(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
              aria-required="true"
            >
              {Object.entries(DEADLINE_TYPES).map(([key, config]) => (
                <option key={key} value={key}>
                  {config.label}
                </option>
              ))}
            </select>
            <p className="text-xs text-text-muted mt-1">
              Select the type of deadline you need to calculate.
            </p>
          </div>
        </div>

        {/* Results */}
        {result ? (
          <div className="space-y-4">
            {/* Warning Banner */}
            {result.showWarning && (
              <div
                className="bg-amber-50 border border-amber-300 rounded-md p-4"
                role="alert"
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  <span className="text-amber-600 text-lg flex-shrink-0" aria-hidden="true">
                    &#9888;
                  </span>
                  <div>
                    <p className="font-semibold text-amber-800 text-sm">Deadline Warning</p>
                    <p className="text-amber-800 text-sm mt-0.5">{result.warningText}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Past Deadline */}
            {result.daysRemaining < 0 && (
              <div
                className="bg-red-50 border border-red-300 rounded-md p-4"
                role="alert"
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  <span className="text-red-600 text-lg flex-shrink-0" aria-hidden="true">
                    &#10071;
                  </span>
                  <div>
                    <p className="font-semibold text-red-800 text-sm">Deadline Has Passed</p>
                    <p className="text-red-800 text-sm mt-0.5">
                      This deadline expired {Math.abs(result.daysRemaining)} calendar day
                      {Math.abs(result.daysRemaining) !== 1 ? 's' : ''} ago. Contact a
                      licensed Oklahoma attorney immediately to discuss your options,
                      which may include filing a motion for enlargement of time.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Result Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-navy/5 rounded-md p-4 text-center">
                <p className="text-xs text-text-muted uppercase tracking-wide mb-1">
                  Deadline Date
                </p>
                <p className="text-lg font-bold text-navy">
                  {formatDate(result.deadlineDate)}
                </p>
              </div>
              <div className="bg-navy/5 rounded-md p-4 text-center">
                <p className="text-xs text-text-muted uppercase tracking-wide mb-1">
                  Calendar Days Remaining
                </p>
                <p
                  className={`text-lg font-bold ${
                    result.daysRemaining <= 7 && result.daysRemaining >= 0
                      ? 'text-red-600'
                      : result.daysRemaining <= 30 && result.daysRemaining >= 0
                      ? 'text-amber-600'
                      : 'text-navy'
                  }`}
                >
                  {result.daysRemaining >= 0 ? result.daysRemaining : 'Expired'}
                </p>
              </div>
              <div className="bg-navy/5 rounded-md p-4 text-center">
                <p className="text-xs text-text-muted uppercase tracking-wide mb-1">
                  Business Days Remaining
                </p>
                <p
                  className={`text-lg font-bold ${
                    result.businessDaysRemaining <= 5 && result.businessDaysRemaining >= 0
                      ? 'text-red-600'
                      : result.businessDaysRemaining <= 10 && result.businessDaysRemaining >= 0
                      ? 'text-amber-600'
                      : 'text-navy'
                  }`}
                >
                  {result.businessDaysRemaining >= 0 ? result.businessDaysRemaining : 'Expired'}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-50 rounded-md p-4">
              <p className="text-sm font-medium text-navy mb-1">
                About This Deadline
              </p>
              <p className="text-sm text-text-dark">{result.description}</p>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-md p-6 text-center text-text-muted">
            <p>Select a filing date to see the calculated deadline.</p>
          </div>
        )}
      </div>

      {/* Explanation Section */}
      <div className="space-y-6 mb-8">
        <h2 className="text-xl font-bold text-navy">Understanding Oklahoma Service Deadlines</h2>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            180-Day Service Deadline
          </h3>
          <p className="text-text-dark text-sm mb-2">
            Under{' '}
            <a
              href="https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline hover:text-indigo-800"
            >
              12 O.S. § 2004(I)
            </a>
            , a summons and petition must be served within 180 days after the case
            is filed. If service is not completed within this window, the court may
            dismiss the action without prejudice on its own motion or on motion of
            any party. Courts may grant extensions for "good cause shown," but
            waiting until the deadline approaches is risky. File extension motions
            early, and document all service attempts to demonstrate diligence.
          </p>
          <p className="text-text-dark text-sm">
            This deadline applies to the initial service of process — getting the
            summons and petition into the defendant's hands. It does not apply to
            subsequent filings like motions or discovery requests.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            20-Day Answer Deadline
          </h3>
          <p className="text-text-dark text-sm">
            Once a defendant is properly served, they typically have 20 calendar
            days to file an answer or other responsive pleading. This deadline is
            computed under{' '}
            <a
              href="https://okpublic.oscn.net/forms/view.php?type=statute&num=2006&title=12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline hover:text-indigo-800"
            >
              12 O.S. § 2006
            </a>
            , which governs how time is calculated in Oklahoma civil procedure. If
            the final day falls on a weekend or court holiday, the deadline extends
            to the next business day. Defendants who fail to answer risk default
            judgment.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Service by Publication — 41-Day Minimum
          </h3>
          <p className="text-text-dark text-sm">
            When a defendant's whereabouts are unknown after diligent search,
            service by publication may be authorized. The notice must be published
            once per week for three consecutive weeks in a newspaper qualified under
            Oklahoma law. After the final publication date, at least 41 days must
            pass before a default judgment can be entered. Publication service is
            considered a last resort — courts require proof of diligent efforts to
            locate the defendant before granting leave to publish.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Motion Response Deadlines
          </h3>
          <p className="text-text-dark text-sm">
            Responses to motions are typically due within 15 days of service under
            standard Oklahoma civil procedure. However, always check the court's
            scheduling order and local rules, as some judges set different timeframes.
            Like answer deadlines, if the response deadline falls on a weekend or
            court holiday, it rolls to the next business day under the "next business
            day" rule.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Court Holidays Observed
          </h3>
          <p className="text-text-dark text-sm">
            This calculator accounts for the following Oklahoma court holidays: New
            Year's Day, Martin Luther King Jr. Day, Presidents Day, Memorial Day,
            Juneteenth, Independence Day, Labor Day, Veterans Day, Thanksgiving Day
            and the day after, Christmas Eve, Christmas Day, and New Year's Eve.
            When a deadline falls on one of these holidays or a weekend, it extends
            to the next business day under 12 O.S. § 2006.
          </p>
        </div>
      </div>

      {/* Need Help CTA */}
      <div className="bg-navy text-white rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Need Help Meeting a Deadline?</h3>
        <p className="text-white/80 text-sm mb-4">
          Just Legal Solutions provides fast, reliable process serving throughout
          Oklahoma. We offer standard, rush, same-day, and emergency service to
          help you meet critical deadlines.
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
      </div>
    </HubPageLayout>
    </>
  );
}
