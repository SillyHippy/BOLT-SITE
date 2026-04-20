'use client';

import { useState } from 'react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';

export default function AttorneyHiringProcessServerPage() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const checklist = [
    'Verified active Oklahoma process server license',
    'Confirmed $5,000 bond is in place',
    'Asked about liability/E&O insurance coverage',
    'Clarified service area (counties covered)',
    'Confirmed GPS tracking and photo documentation provided',
    'Discussed success rate methodology (not just a number)',
    'Understood approach to difficult or evasive serves',
    'Agreed on standard turnaround time',
    'Confirmed proof of service delivery method and format',
    'Reviewed rush and emergency service rates',
    'Obtained and reviewed written service agreement',
    'Confirmed NAPPS membership (or other professional affiliation)',
    'Discussed communication methods and update frequency',
    'Asked about skip tracing capabilities',
    'Verified CLEET compliance and training record',
  ];

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  const citations = [
    {
      title: '12 O.S. § 158.1 — Licensed Process Servers',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=158.1&title=12',
      description:
        'Oklahoma licensing requirements including age, residency, $5,000 bond, and court-issued license.',
    },
    {
      title: 'CLEET — Council on Law Enforcement Education and Training',
      url: 'https://www.ok.gov/cleet/',
      description:
        'Oklahoma agency overseeing process server training, certification, and continuing education.',
    },
    {
      title: 'National Association of Professional Process Servers (NAPPS)',
      url: 'https://napps.org/',
      description:
        'National professional association for process servers; membership indicates commitment to industry standards.',
    },
  ];

  return (
    <HubPageLayout
      title="Attorney&apos;s Guide to Hiring a Process Server in Oklahoma"
      description="A vendor-neutral guide for Oklahoma attorneys on how to hire a licensed process server. Covers license verification, key questions to ask, red flags to avoid, NAPPS membership benefits, and written agreement essentials."
      citations={citations}
    >
      <div className="prose-content">
        <p className="lead">
          Hiring the right process server protects your case, your client, and your professional
          reputation. A missed deadline, improper service, or missing documentation can derail a
          case and expose you to malpractice risk. This guide walks Oklahoma attorneys through the
          key steps of vetting and hiring a qualified process server.
        </p>

        <h2>Why Hiring a Licensed Process Server Matters</h2>
        <p>
          Oklahoma law requires private process servers to hold a valid license issued by the
          district court. An unlicensed server&apos;s service may be invalid, putting your default
          judgment or case outcome at risk. Licensed servers have met statutory requirements
          including age, residency, bonding, and training standards. They understand Oklahoma civil
          procedure and know how to complete service that holds up in court.
        </p>
        <p>
          When you hire a licensed process server, you gain a professional who is accountable to the
          court system, carries a bond for financial protection, and follows established ethical
          standards. The small difference in cost between a licensed professional and an unlicensed
          alternative is insignificant compared to the cost of a failed service.
        </p>

        <h2>How to Verify a Process Server License in Oklahoma</h2>
        <p>
          Under 12 O.S. § 158.1, every licensed process server in Oklahoma must meet these
          requirements:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Be at least 18 years of age</li>
          <li>Be a resident of Oklahoma</li>
          <li>Post a $5,000 surety bond</li>
          <li>Hold a court-issued license from the district court</li>
          <li>Complete CLEET-mandated training and continuing education</li>
        </ul>
        <p>
          To verify a license, ask the process server for their license number and the issuing
          court. You can confirm the license is active by contacting the court clerk&apos;s office
          or checking with CLEET. Some counties maintain public lists of licensed process servers.
        </p>

        <h2>10 Questions to Ask Before Hiring</h2>
        <p>
          Before you turn over sensitive legal documents, interview the process server as you would
          any professional vendor. Here are ten essential questions:
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-navy font-semibold mb-1">1. Are you licensed in Oklahoma?</h3>
            <p className="text-sm text-gray-700">
              Confirm the server holds a current, valid license issued by an Oklahoma district court.
              Ask for the license number and verify it if you have any doubts.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-navy font-semibold mb-1">2. What is your bond amount?</h3>
            <p className="text-sm text-gray-700">
              Oklahoma requires a $5,000 surety bond. Some servers carry additional bonds or Errors
              &amp; Omissions insurance. Ask about both.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-navy font-semibold mb-1">3. Do you carry insurance?</h3>
            <p className="text-sm text-gray-700">
              Bonding and insurance are different. A bond protects against misconduct; E&amp;O
              insurance covers mistakes in service. Both provide extra protection for your client.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-navy font-semibold mb-1">4. What is your service area?</h3>
            <p className="text-sm text-gray-700">
              Some servers only work in metro counties. If your case is in rural Oklahoma, confirm
              the server covers that county and understands local courthouse procedures.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-navy font-semibold mb-1">5. Do you provide GPS tracking?</h3>
            <p className="text-sm text-gray-700">
              GPS data, photographs, and timestamped records strengthen your proof of service. Ask
              what documentation is included as part of standard service.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-navy font-semibold mb-1">
              6. What is your success rate — and how do you calculate it?
            </h3>
            <p className="text-sm text-gray-700">
              Be cautious of servers who quote a high percentage without explaining their
              methodology. Ask how they define &quot;successful&quot; service and whether their rate
              includes difficult cases or only routine serves.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-navy font-semibold mb-1">
              7. How do you handle difficult serves?
            </h3>
            <p className="text-sm text-gray-700">
              Evasive respondents require creative strategies. Ask about skip tracing, stakeout
              experience, multiple attempt protocols, and substitute service procedures.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-navy font-semibold mb-1">8. What is your turnaround time?</h3>
            <p className="text-sm text-gray-700">
              Standard service should be attempted within 24 to 72 hours. Rush service may be
              available same-day. Get turnaround expectations in writing.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-navy font-semibold mb-1">
              9. How do you deliver proof of service?
            </h3>
            <p className="text-sm text-gray-700">
              Confirm the format (paper, PDF, both), delivery method (email, portal, mail), and
              typical time from service to receipt of the affidavit.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-navy font-semibold mb-1">
              10. What are your rush and emergency rates?
            </h3>
            <p className="text-sm text-gray-700">
              Standard, rush, and after-hours rates should be clear before you engage. Ask about
              additional fees for mileage, multiple attempts, or special services.
            </p>
          </div>
        </div>

        <h2>Red Flags to Watch For</h2>
        <p>
          Protect your practice by watching for warning signs that a process server may not be
          professional or qualified:
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-1">Cannot prove licensure</h4>
            <p className="text-sm text-red-700">
              If a server hesitates to provide a license number or cannot name their issuing court,
              walk away.
            </p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-1">No bond or insurance</h4>
            <p className="text-sm text-red-700">
              A $5,000 bond is mandatory. Lack of bonding means no financial recourse if something
              goes wrong.
            </p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-1">Refuses to provide proof</h4>
            <p className="text-sm text-red-700">
              A professional server documents every service. Refusal to provide detailed proof is a
              major red flag.
            </p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-1">Guarantees service</h4>
            <p className="text-sm text-red-700">
              No one can guarantee service. Evasive respondents, wrong addresses, and other factors
              are beyond any server&apos;s control.
            </p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-1">Vague about pricing</h4>
            <p className="text-sm text-red-700">
              All fees should be clear upfront. Hidden charges and unclear rate structures suggest
              poor business practices.
            </p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-1">No written agreement</h4>
            <p className="text-sm text-red-700">
              A professional server provides a written service agreement outlining scope, fees, and
              responsibilities.
            </p>
          </div>
        </div>

        <h2>NAPPS Membership as a Quality Indicator</h2>
        <p>
          The National Association of Professional Process Servers (NAPPS) is the leading national
          organization for process servers. Members agree to a code of ethics, complete continuing
          education, and have access to industry best practices. While NAPPS membership alone does
          not guarantee quality, it is a useful indicator that the server takes their profession
          seriously and invests in ongoing development.
        </p>
        <p>
          Joseph Iannazzi of Just Legal Solutions is NAPPS member #14801. When you see a NAPPS
          membership number, you know the server has met national standards for professionalism and
          ethics.
        </p>

        <h2>Written Service Agreement Essentials</h2>
        <p>
          Always insist on a written service agreement before turning over documents. A proper
          agreement should include:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Scope of service (what documents, how many defendants, where)</li>
          <li>Fee structure (base rate, per-attempt fees, mileage, rush rates)</li>
          <li>Timeline expectations (first attempt, turnaround for proof)</li>
          <li>Documentation standards (GPS, photos, affidavit format)</li>
          <li>Communication protocol (how and when updates are provided)</li>
          <li>Liability and insurance information</li>
          <li>Termination conditions and refund policy</li>
        </ul>

        <h2>Managing the Relationship</h2>
        <p>
          A strong attorney-process server relationship benefits both parties. Communicate clearly
          about deadlines, special circumstances, and client expectations. Provide accurate address
          information, photos of the respondent when available, and any known risks (aggressive
          dogs, security gates, safety concerns). The more information you share, the better the
          server can plan and execute service.
        </p>
        <p>
          Set expectations for updates. Most servers provide status updates after each attempt and
          immediate notification upon successful service. Agree on the preferred communication
          method — email, phone, or a client portal — and respond promptly when the server reaches
          out with questions.
        </p>

        <h2>Downloadable Hiring Checklist</h2>
        <p>
          Print or save this checklist for your next process server hire. Check each item off as you
          confirm it:
        </p>
        <div className="my-6 bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-navy">Process Server Vetting Checklist</h3>
            <span className="text-sm font-medium text-gold">
              {checkedCount} of {checklist.length} completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-gold h-2 rounded-full transition-all"
              style={{ width: `${(checkedCount / checklist.length) * 100}%` }}
            />
          </div>
          <ul className="space-y-2">
            {checklist.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <button
                  onClick={() => toggleCheck(idx)}
                  className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    checkedItems[idx]
                      ? 'bg-gold border-gold text-white'
                      : 'border-gray-300 hover:border-gold'
                  }`}
                  aria-label={item}
                >
                  {checkedItems[idx] && (
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                <span className={`text-sm ${checkedItems[idx] ? 'line-through text-gray-400' : ''}`}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <h2>Need a Qualified Process Server?</h2>
        <p>
          Just Legal Solutions is licensed, bonded, and NAPPS-certified. We serve attorneys
          throughout Oklahoma with GPS-documented service, real-time updates, and court-ready
          affidavits. Call{' '}
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
  );
}
