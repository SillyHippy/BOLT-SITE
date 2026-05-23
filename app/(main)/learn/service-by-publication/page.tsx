'use client';

import { useState, useMemo } from 'react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';
import UnifiedSchema from '@/components/UnifiedSchema';

const citations = [
  {
    title: '12 O.S. § 2004(C)(3) — Service by Publication',
    url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
    description:
      'Requirements for service by publication including due diligence, newspaper selection, and minimum publication period.',
  },
  {
    title: '12 O.S. § 2004 — Methods of Service of Process',
    url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
    description:
      'Oklahoma statutes governing methods of service of process including personal service, substituted service, service by publication, and service by mail.',
  },
  {
    title: '12 O.S. § 2006 — Computation of Time',
    url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2006&title=12',
    description:
      'Rules for computing time periods under Oklahoma civil procedure, including court holidays and extensions.',
  },
  {
    title: '12 O.S. § 2004(I) — 180-Day Service Deadline',
    url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
    description:
      'Requires summons and petition to be served within 180 days of filing; case may be dismissed for failure to serve.',
  },
  {
    title: 'Oklahoma Supreme Court Network (OSCN)',
    url: 'https://www.oscn.net/',
    description:
      'Official Oklahoma court records, dockets, forms, and rules repository.',
  },
];

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export default function ServiceByPublicationPage() {
  const [courtOrderDate, setCourtOrderDate] = useState('');

  const timelineDates = useMemo(() => {
    if (!courtOrderDate) return null;
    const orderDate = new Date(courtOrderDate + 'T12:00:00');
    if (isNaN(orderDate.getTime())) return null;

    const pub1 = addDays(orderDate, 0);
    const pub2 = addDays(orderDate, 7);
    const pub3 = addDays(orderDate, 14);
    const earliestDefault = addDays(pub3, 20);

    return { pub1, pub2, pub3, earliestDefault };
  }, [courtOrderDate]);

  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Service By Publication"
        pageDescription="Service By Publication — Just Legal Solutions, Oklahoma process server and legal support services."
        pageUrl="https://justlegalsolutions.org/learn/service-by-publication"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service By Publication', url: '/learn/service-by-publication' },
        ]}
      />
    <HubPageLayout
      title="Service by Publication in Oklahoma"
      description="Complete step-by-step guide to Oklahoma service by publication, including due diligence requirements, timeline, and an interactive publication date calculator."
      citations={citations}
    >
      <div className="prose-content">
        <h2 className="text-2xl font-bold text-navy mb-4">
          What Is Service by Publication?
        </h2>
        <p>
          Service by publication is a method of notifying a defendant about a lawsuit
          when the defendant cannot be located through normal means. Under Oklahoma law,
          specifically <strong>12 O.S. § 2004(C)(3)</strong>, a court may authorize
          service by publication after the plaintiff demonstrates that reasonable efforts
          to find and serve the defendant personally have failed. Instead of handing the
          summons and petition directly to the defendant, notice of the lawsuit is
          published in a newspaper of general circulation in the area where the defendant
          was last known to reside. The publication serves as legal notice, and if the
          defendant does not respond within the required time, the plaintiff may seek a
          default judgment.
        </p>
        <p>
          This method is considered a last resort because it does not guarantee that the
          defendant will actually see the notice. Courts require plaintiffs to show due
          diligence before granting permission for publication service. The requirements
          are strict, and mistakes in the process can delay your case or result in the
          default judgment being set aside. This guide explains the entire process from
          start to finish, including how to demonstrate due diligence, how to select the
          right newspaper, what the timeline looks like, and common mistakes to avoid.
        </p>

        <h2 className="text-2xl font-bold text-navy mb-4 mt-10">
          When Service by Publication Is Appropriate
        </h2>
        <p>
          Service by publication is appropriate only when the defendant&apos;s location
          is unknown despite a genuine, good-faith effort to find them. It is not a
          shortcut for plaintiffs who have not tried to locate the defendant. Oklahoma
          courts expect plaintiffs to exhaust reasonable search methods before turning to
          publication. Acceptable circumstances include: the defendant has moved without
          leaving a forwarding address, all known addresses have been checked and the
          defendant is no longer there, the post office has no forwarding information,
          and online searches, directory assistance, and other reasonable locator methods
          have been attempted without success.
        </p>
        <p>
          Service by publication is <strong>not</strong> appropriate if you know where
          the defendant lives or works but simply have not made the effort to serve them
          personally. It is also not appropriate if the defendant is actively avoiding
          service — in those cases, substituted service under 12 O.S. § 2004 may be a
          better option. The court will evaluate your due diligence affidavit carefully
          before granting an order for publication. If the judge believes you have not
          tried hard enough to find the defendant, the motion will be denied.
        </p>

        <h2 className="text-2xl font-bold text-navy mb-4 mt-10">
          Step-by-Step Service by Publication Process
        </h2>

        <h3 className="text-xl font-semibold text-navy mt-6 mb-3">
          Step 1: Attempt Personal Service First (Due Diligence)
        </h3>
        <p>
          Before you can even ask the court for permission to serve by publication, you
          must demonstrate due diligence. This means you must make a real, documented
          effort to find and personally serve the defendant. Courts look for a pattern of
          reasonable attempts across multiple sources. At a minimum, due diligence
          typically includes the following efforts: visiting the defendant&apos;s last
          known address at different times of day, checking with neighbors or property
          managers, contacting known relatives or employers, searching online databases
          and social media, checking telephone directories and public records, contacting
          the post office for forwarding addresses, and reviewing motor vehicle and voter
          registration records if available. The more attempts you document, the stronger
          your affidavit will be.
        </p>

        <h3 className="text-xl font-semibold text-navy mt-6 mb-3">
          Step 2: Document All Attempts (Affidavit of Due Diligence)
        </h3>
        <p>
          Every attempt to locate the defendant must be documented in a sworn affidavit.
          This affidavit is your proof to the court that you have done everything
          reasonable to find the defendant. The affidavit should include the date, time,
          and method of each search attempt, the results of each attempt (for example,
          &quot;no one answered the door&quot; or &quot;neighbor stated defendant moved
          six months ago&quot;), and copies of any supporting documents such as returned
          mail, database search results, or notes from conversations. The affidavit must
          be signed under oath, either before a notary public or with a proper unsworn
          declaration under penalty of perjury. A vague or incomplete affidavit is one of
          the most common reasons a motion for service by publication is denied.
        </p>

        <h3 className="text-xl font-semibold text-navy mt-6 mb-3">
          Step 3: File a Motion for Service by Publication
        </h3>
        <p>
          Once your due diligence affidavit is complete, file a motion with the court
          requesting permission to serve the defendant by publication. The motion should
          include the case caption and number, a statement explaining why personal
          service is not possible, your affidavit of due diligence as an exhibit, and a
          proposed order for the judge to sign. Some courts have local forms for this
          motion. Check with your specific district court or review the OSCN website for
          available forms. The motion should be filed in the same court where the case
          was originally filed.
        </p>

        <h3 className="text-xl font-semibold text-navy mt-6 mb-3">
          Step 4: Obtain a Court Order
        </h3>
        <p>
          The judge will review your motion and affidavit. If the court finds that you
          have made a reasonable effort to locate the defendant, the judge will sign an
          order authorizing service by publication. This order will typically specify the
          newspaper where publication must occur, the content of the publication notice,
          and the number of times and frequency of publication. Do not publish anything
          until you have the signed court order in hand. Publishing without a court order
          is a waste of money and will not satisfy the legal requirements for service.
          Keep the signed order for your records — you will need to file it with the
          court along with proof of publication.
        </p>

        <h3 className="text-xl font-semibold text-navy mt-6 mb-3">
          Step 5: Select a Newspaper
        </h3>
        <p>
          The court order will require publication in a newspaper of general circulation
          in the area where the defendant was last known to reside. Selecting the right
          newspaper is important. The newspaper must have general circulation in that
          geographic area, which typically means it is distributed to the general public
          rather than a specialty or limited-audience publication. Contact the newspaper
          directly to confirm they handle legal notices and to obtain their publication
          schedule and rates. Ask about their experience with legal notices — an
          established newspaper that regularly publishes legal notices will be familiar
          with the requirements and can help ensure your notice is formatted correctly.
        </p>

        <h3 className="text-xl font-semibold text-navy mt-6 mb-3">
          Step 6: Publish Once a Week for Three Consecutive Weeks
        </h3>
        <p>
          Under <strong>12 O.S. § 2004(C)(3)</strong>, the notice must be published at
          least <strong>once a week for three consecutive weeks</strong>. This means three
          separate publications, each spaced approximately seven days apart. The first
          publication marks the beginning of the notice period. After the third
          publication, the defendant has an additional period of time to respond before a
          default judgment can be entered. The newspaper will provide you with an
          affidavit of publication after the final publication is complete. This
          affidavit is your proof that the publication requirement was satisfied and must
          be filed with the court.
        </p>

        <h3 className="text-xl font-semibold text-navy mt-6 mb-3">
          Step 7: File Proof of Publication With the Court
        </h3>
        <p>
          After the third and final publication, the newspaper will provide an affidavit
          of publication signed by an authorized representative. This document certifies
          that the notice was published on the specified dates in accordance with the
          court&apos;s order. File this affidavit with the court clerk as soon as you
          receive it, along with a copy of the court order authorizing publication and
          your return of service. These documents complete the service record and allow
          the case to proceed toward default judgment if the defendant has not responded.
        </p>

        <h2 className="text-2xl font-bold text-navy mb-4 mt-10">
          Due Diligence Requirements in Detail
        </h2>
        <p>
          Oklahoma courts evaluate due diligence on a case-by-case basis, but there is a
          general expectation that plaintiffs will make multiple attempts using different
          methods. A single visit to the defendant&apos;s address is rarely enough.
          Courts typically expect to see at least two to three service attempts at
          different times and days, plus alternative search efforts. The following efforts
          are generally considered reasonable:
        </p>
        <ul className="space-y-2">
          <li>
            At least two personal service attempts at different times (morning, evening,
            weekend)
          </li>
          <li>Contact with neighbors or building managers</li>
          <li>Mail sent to the last known address with return receipt requested</li>
          <li>Online people-search database inquiries</li>
          <li>Social media and internet searches</li>
          <li>Telephone directory and reverse lookup searches</li>
          <li>Post office forwarding address request (Form 3575 check)</li>
          <li>Department of Motor Vehicles or voter registration lookups where available</li>
          <li>Contact with known employers, family members, or associates</li>
        </ul>
        <p>
          Document everything. Each entry should include the date, the method used, and
          the result. If you hire a professional process server, their affidavit of
          attempted service can be included as part of your due diligence package. Many
          process servers offer skip-tracing services that can help locate hard-to-find
          defendants before you resort to publication.
        </p>

        <h2 className="text-2xl font-bold text-navy mb-4 mt-10">
          Cost Considerations
        </h2>
        <p>
          The cost of service by publication varies depending on the newspaper, the
          length of the notice, and whether the newspaper charges extra for legal notice
          formatting. In Oklahoma, the total cost typically ranges from{' '}
          <strong>$60 to $120</strong> for three weekly publications. Larger newspapers
          in urban areas like Oklahoma City or Tulsa may charge more than small-town
          papers. In addition to the publication fee, you may incur costs for due
          diligence searches, certified mailings, and court filing fees for the motion.
          Factor these costs into your case budget and consider whether skip-tracing
          services might be a more cost-effective first step.
        </p>

        <h2 className="text-2xl font-bold text-navy mb-4 mt-10">
          Timeline: From First Publication to Default Judgment
        </h2>
        <p>
          The minimum timeline from the first publication to eligibility for a default
          judgment is approximately 41 days. This breaks down as follows: three weekly
          publications (approximately 14 days from the first to the third publication),
          plus a minimum waiting period of 20 days after the final publication before a
          default judgment may be requested. Courts may require additional time depending
          on local rules and the judge&apos;s schedule. In practice, most plaintiffs
          should expect the process to take at least six to eight weeks from the date of
          the court order to the date a default judgment can be entered.
        </p>

        {/* Interactive Timeline Calculator */}
        <div className="bg-navy rounded-lg p-6 my-8 text-white">
          <h3 className="text-xl font-bold text-white mb-2">
            Publication Timeline Calculator
          </h3>
          <p className="text-white/70 text-sm mb-5">
            Enter your court order date to see the three publication dates and the
            earliest date you can request a default judgment.
          </p>

          <div className="mb-5">
            <label
              htmlFor="court-order-date"
              className="block text-sm font-semibold text-white mb-2"
            >
              Court Order Date (authorizing publication)
            </label>
            <input
              id="court-order-date"
              type="date"
              value={courtOrderDate}
              onChange={(e) => setCourtOrderDate(e.target.value)}
              className="w-full max-w-xs px-3 py-2 rounded-md bg-white text-navy font-medium focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Select the court order date authorizing publication"
            />
          </div>

          {timelineDates && (
            <div className="bg-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
                Calculated Timeline
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-white/60 text-xs mb-1">1st Publication</p>
                  <p className="text-white font-semibold">
                    {formatDate(timelineDates.pub1)}
                  </p>
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-1">2nd Publication</p>
                  <p className="text-white font-semibold">
                    {formatDate(timelineDates.pub2)}
                  </p>
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-1">3rd Publication</p>
                  <p className="text-white font-semibold">
                    {formatDate(timelineDates.pub3)}
                  </p>
                </div>
                <div>
                  <p className="text-gold text-xs mb-1">
                    Earliest Default Judgment Date
                  </p>
                  <p className="text-gold font-bold">
                    {formatDate(timelineDates.earliestDefault)}
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-xs mt-4 italic">
                Note: This calculator provides estimates based on Oklahoma statutory
                minimums. Actual timelines may vary. Always verify with your court.
              </p>
            </div>
          )}

          {!timelineDates && (
            <p className="text-white/50 text-sm italic">
              Select a date above to calculate your publication timeline.
            </p>
          )}
        </div>

        <h2 className="text-2xl font-bold text-navy mb-4 mt-10">
          After Publication: Filing Return of Service and Requesting Default Judgment
        </h2>
        <p>
          Once publication is complete and you have filed the newspaper&apos;s affidavit
          of publication, the next step is to prepare your return of service. This
          document summarizes the entire service process and certifies that the defendant
          was served by publication in compliance with the court&apos;s order. File the
          return of service with the court clerk along with the court order, your
          original due diligence affidavit, and the newspaper&apos;s affidavit of
          publication. If the defendant has not responded within the statutory time
          period (minimum 20 days after the third publication), you may file a motion
          for default judgment. The court will review the service record before granting
          the motion. If service was not done correctly, the default judgment may be set
          aside, so accuracy at every stage is critical.
        </p>

        <h2 className="text-2xl font-bold text-navy mb-4 mt-10">
          Common Mistakes to Avoid
        </h2>
        <ul className="space-y-3">
          <li>
            <strong>Insufficient due diligence.</strong> Courts frequently deny
            publication motions because the affidavit lacks detail. Document every single
            attempt with dates, times, and results.
          </li>
          <li>
            <strong>Publishing without a court order.</strong> Never begin publication
            before the court authorizes it. Publication done without a court order does
            not count as valid service.
          </li>
          <li>
            <strong>Using the wrong newspaper.</strong> The newspaper must have general
            circulation in the area where the defendant last resided. Specialty
            publications or online-only outlets may not qualify.
          </li>
          <li>
            <strong>Missing publication deadlines.</strong> The three publications must
            be consecutive weekly publications. Gaps or missed weeks can invalidate the
            service.
          </li>
          <li>
            <strong>Not filing proof of publication.</strong> The newspaper&apos;s
            affidavit must be filed with the court. Without it, the court has no
            evidence that publication occurred.
          </li>
          <li>
            <strong>Requesting default judgment too early.</strong> You must wait at
            least 20 days after the third publication. Requesting a default judgment
            before this waiting period expires will result in a denial.
          </li>
          <li>
            <strong>Not accounting for the 180-day deadline.</strong> Remember that
            service must be completed within 180 days of filing the petition under 12
            O.S. § 2004(I). Service by publication takes time, so start the process
            early.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-navy mb-4 mt-10">
          Special Considerations
        </h2>
        <p>
          Service by publication is rarely the fastest or most reliable method of
          service, but it is sometimes the only option available. Before pursuing
          publication, consider whether alternative methods such as substituted service
          on a co-resident, service by mail with signed receipt, or hiring a
          professional process server with skip-tracing capability might be more
          effective. Every case is different, and the right approach depends on the
          specific facts of your situation. If you are unsure whether service by
          publication is appropriate for your case, consult an Oklahoma-licensed
          attorney who can evaluate your options.
        </p>

        <div className="bg-gold/10 border-l-4 border-gold p-5 my-6 rounded-r-md">
          <p className="font-semibold text-navy mb-1">
            Need Help With Service by Publication?
          </p>
          <p className="text-sm text-text-secondary mb-0">
            Just Legal Solutions handles service by publication cases throughout
            Oklahoma. We can assist with due diligence documentation, court motion
            preparation, newspaper coordination, and proof of service filing. Contact
            us at{' '}
            <a href="tel:539-367-6832" className="text-navy underline font-semibold">
              (539) 367-6832
            </a>{' '}
            or{' '}
            <a
              href="mailto:info@JustLegalSolutions.org"
              className="text-navy underline font-semibold"
            >
              info@JustLegalSolutions.org
            </a>{' '}
            for assistance.
          </p>
        </div>
      </div>
    </HubPageLayout>
    </>
  );
}
