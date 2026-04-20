'use client';

import { useState } from 'react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';

export default function VPOProtectiveOrderServicePage() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const steps = [
    {
      title: 'Step 1: File the Petition',
      content:
        'The victim (or their attorney) files a petition for a protective order at the district court in the county where they live, where the abuse happened, or where the respondent can be found. Oklahoma does not charge a filing fee for protective order cases. The petitioner fills out forms describing the abuse, threats, or harassment and lists any minor children who should be included in the order.',
    },
    {
      title: 'Step 2: Judge Reviews the Petition',
      content:
        'A judge reviews the petition the same day it is filed. If the judge finds that the petitioner is in immediate danger, they issue an emergency ex parte order. This temporary order goes into effect right away, even before the respondent is notified. The ex parte order can grant emergency protections such as removing the respondent from a shared home and awarding temporary custody of children.',
    },
    {
      title: 'Step 3: Order Forwarded for Service',
      content:
        'The court forwards the protective order and supporting documents to law enforcement for service. In most Oklahoma counties, the sheriff\'s office handles VPO service as a priority. The respondent must receive actual notice of the order before the full hearing can take place. This is a due process requirement under Oklahoma law.',
    },
    {
      title: 'Step 4: Respondent Is Served',
      content:
        'A law enforcement officer locates the respondent and hands them a copy of the protective order. The officer records the date, time, and location of service. Service must happen before the full hearing so the respondent has time to prepare. The respondent receives notice of the hearing date and information about their right to attend and contest the order.',
    },
    {
      title: 'Step 5: Full Hearing Within 14 Days',
      content:
        'Oklahoma law requires a full court hearing typically within 14 days of the emergency order. At the hearing, both sides may present evidence and testimony. The judge decides whether to dismiss the case or issue a final protective order, which can last up to three years and include provisions for child custody, financial support, and firearm restrictions.',
    },
  ];

  const citations = [
    {
      title: '22 O.S. § 60.4 — Protective Order Service',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=60.4&title=22',
      description:
        'Requires priority service of protective orders within 24 hours; governs who may serve and how service is documented.',
    },
    {
      title: '12 O.S. § 2004 — Methods of Service of Process',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
      description:
        'General service of process rules applicable to VPO proceedings including personal and substituted service.',
    },
    {
      title: 'Oklahoma Supreme Court Network (OSCN)',
      url: 'https://www.oscn.net/',
      description: 'Official Oklahoma court records, protective order forms, and hearing schedules.',
    },
  ];

  return (
    <HubPageLayout
      title="VPO &amp; Protective Order Service in Oklahoma"
      description="Learn how Victim Protective Orders are filed, served, and enforced in Oklahoma. Covers the 24-hour priority service rule, the service process, what happens if the respondent avoids service, and safety resources for victims."
      citations={citations}
    >
      <div className="prose-content">
        {/* Introduction */}
        <p className="lead">
          A Victim Protective Order (VPO) — also known as a protective order or restraining order — is
          a legal tool that helps protect people from domestic violence, stalking, harassment, or
          sexual assault. In Oklahoma, the protective order process moves quickly, and service of the
          order is one of the most important steps. Without proper service, the order cannot be
          enforced and the case cannot move forward to a full hearing.
        </p>

        <h2>What Is a VPO in Oklahoma?</h2>
        <p>
          A Victim Protective Order is a court order that tells a person (the respondent) to stop
          certain behavior and stay away from the victim (the petitioner). Oklahoma law allows VPOs
          in cases of domestic abuse, stalking, harassment, and sexual assault. A VPO can include
          orders to:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Stop contacting, threatening, or abusing the petitioner</li>
          <li>Stay away from the petitioner&apos;s home, workplace, or school</li>
          <li>Move out of a shared residence</li>
          <li>Surrender firearms and weapons</li>
          <li>Pay temporary child support or spousal support</li>
          <li>Attend counseling or treatment programs</li>
        </ul>
        <p>
          Violating a protective order is a crime in Oklahoma and can result in arrest and criminal
          charges.
        </p>

        <h2>The 24-Hour Priority Service Rule</h2>
        <p>
          Under Oklahoma law (22 O.S. § 60.4), protective orders receive priority service. Law
          enforcement agencies are required to make service within 24 hours of receiving the order
          when the respondent is in their jurisdiction. This 24-hour rule exists because protective
          orders often involve urgent safety concerns. Delays in service put the petitioner at risk
          and can delay the full hearing.
        </p>
        <p>
          If the respondent is outside the jurisdiction, the order is forwarded to the appropriate
          agency. Service may take longer when the respondent has moved, is hiding, or works
          irregular hours.
        </p>

        <h2>Who Serves Protective Orders in Oklahoma?</h2>
        <p>
          In Oklahoma, law enforcement officers — typically sheriff&apos;s deputies — serve Victim
          Protective Orders. This differs from regular civil process, which can be served by licensed
          private process servers. The reason is simple: VPOs often involve volatile situations where
          officer safety training and authority are necessary. Law enforcement has resources that
          private servers do not, including databases for locating people and the legal authority to
          make an arrest if the respondent violates the order during service.
        </p>
        <p>
          Some counties may use private process servers for certain protective order matters when law
          enforcement is backlogged, but this is not the standard practice. If you are a petitioner,
          you should not try to serve the order yourself — service must be done by a qualified
          officer or authorized server.
        </p>

        <h2>From Filing to Service: The Full Process</h2>
        <div className="space-y-3 my-6">
          {steps.map((step, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenStep(openStep === idx ? null : idx)}
                className="w-full text-left px-5 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={openStep === idx}
              >
                <span className="font-semibold text-navy">{step.title}</span>
                <span className="text-gold text-xl" aria-hidden="true">
                  {openStep === idx ? '−' : '+'}
                </span>
              </button>
              {openStep === idx && (
                <div className="px-5 pb-4 text-gray-700">{step.content}</div>
              )}
            </div>
          ))}
        </div>

        <h2>What Happens After Service?</h2>
        <p>
          Once the respondent is served, the protective order is in full effect. The respondent must
          follow every condition listed in the order. Even if the respondent disagrees with the
          order, they must comply until the hearing. At the full hearing, the respondent can tell
          their side of the story and contest the order. The judge then decides whether to issue a
          final protective order.
        </p>
        <p>
          If the respondent does not show up for the hearing, the judge may grant the final order by
          default. If the petitioner does not show up, the case may be dismissed.
        </p>

        <h2>What If the Respondent Avoids Service?</h2>
        <p>
          Sometimes respondents try to avoid being served. They may hide, refuse to answer the door,
          or stay away from known locations. When this happens, law enforcement may:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Make multiple attempts at different times of day</li>
          <li>Try the respondent&apos;s workplace or other known locations</li>
          <li>Use substitute service at the respondent&apos;s home (leaving with a resident adult)</li>
          <li>Coordinate with other agencies if the respondent left the area</li>
        </ul>
        <p>
          If the respondent cannot be served before the hearing date, the court may continue
          (postpone) the hearing to allow more time. Petitioners should tell the court about any
          known addresses, work schedules, or vehicle descriptions that could help locate the
          respondent.
        </p>

        <h2>Safety Considerations for Petitioners</h2>
        <p>
          While waiting for service and the hearing, petitioners should take steps to stay safe:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Stay with trusted friends or family, or at a domestic violence shelter</li>
          <li>Keep a copy of the protective order with you at all times</li>
          <li>Change locks and phone numbers if needed</li>
          <li>Tell your employer, children&apos;s school, and neighbors about the situation</li>
          <li>Document any contact or threats from the respondent</li>
          <li>Call 911 immediately if the respondent violates the order</li>
        </ul>

        <h2>Resources for Domestic Violence Victims in Oklahoma</h2>
        <p>
          Help is available 24 hours a day, 7 days a week. If you or someone you know needs help,
          contact these organizations:
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <h3 className="text-navy font-semibold mb-2">National Domestic Violence Hotline</h3>
            <p className="text-sm text-gray-600">Call or text 1-800-799-SAFE (7233)</p>
            <p className="text-sm text-gray-600">Available 24/7, confidential, free</p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <h3 className="text-navy font-semibold mb-2">Oklahoma Safeline</h3>
            <p className="text-sm text-gray-600">1-800-522-SAFE (7233)</p>
            <p className="text-sm text-gray-600">24/7 crisis intervention and referrals</p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <h3 className="text-navy font-semibold mb-2">Oklahoma Coalition Against Domestic Violence</h3>
            <p className="text-sm text-gray-600">
              <a
                href="https://www.ocadvsa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-navy hover:text-gold"
              >
                www.ocadvsa.org
              </a>
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <h3 className="text-navy font-semibold mb-2">StrongHearts Native Helpline</h3>
            <p className="text-sm text-gray-600">1-844-7NATIVE (762-8483)</p>
            <p className="text-sm text-gray-600">Culturally appropriate support for Native Americans</p>
          </div>
        </div>
        <p>
          If you are in immediate danger, call 911. Emergency operators can dispatch law enforcement
          and connect you with local resources.
        </p>

        <h2>Need Help with Process Service?</h2>
        <p>
          Just Legal Solutions provides licensed, bonded process serving throughout Oklahoma.
          While protective orders are typically served by law enforcement, we can assist with
          related civil matters including custody, divorce, and other cases involving protective
          orders. Call{' '}
          <a href="tel:539-367-6832" className="underline text-navy hover:text-gold">
            (539) 367-6832
          </a>{' '}
          or email{' '}
          <a
            href="mailto:info@JustLegalSolutions.org"
            className="underline text-navy hover:text-gold"
          >
            info@JustLegalSolutions.org
          </a>
          .
        </p>
      </div>
    </HubPageLayout>
  );
}
