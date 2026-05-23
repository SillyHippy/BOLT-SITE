'use client';

import { useState, useMemo } from 'react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';
import UnifiedSchema from '@/components/UnifiedSchema';

type CaseType = 'divorce' | 'custody' | 'small-claims' | 'eviction' | 'civil' | 'other';
type PartyType = 'plaintiff' | 'defendant' | 'third-party';
type OklahomaResident = 'yes' | 'no' | 'unknown';
type KnowAddress = 'yes' | 'no';
type WillCooperate = 'yes' | 'probably-not';

interface DecisionResult {
  answer: 'YES' | 'NO' | 'MAYBE';
  heading: string;
  explanation: string;
  alternatives: string[];
  caution?: string;
}

export default function CanIServeMyOwnPapers() {
  const [caseType, setCaseType] = useState<CaseType | ''>('');
  const [partyType, setPartyType] = useState<PartyType | ''>('');
  const [okResident, setOkResident] = useState<OklahomaResident | ''>('');
  const [knowAddress, setKnowAddress] = useState<KnowAddress | ''>('');
  const [willCooperate, setWillCooperate] = useState<WillCooperate | ''>('');

  const result: DecisionResult | null = useMemo(() => {
    if (!caseType || !partyType || !okResident || !knowAddress) return null;

    // Logic: Parties generally CANNOT serve their own documents
    // 12 O.S. § 2004 requires disinterested service

    // If you're a party to the case, the answer is generally NO
    if (partyType === 'plaintiff' || partyType === 'defendant') {
      // Small claims exception - sometimes allowed with court permission
      if (caseType === 'small-claims') {
        return {
          answer: 'MAYBE',
          heading: 'Possible with Court Permission',
          explanation:
            'In Oklahoma small claims court, plaintiffs are generally allowed to handle their own case presentation, but service of the initial summons and petition still requires a disinterested third party. However, some judges may allow a party to serve certain subsequent documents with prior court approval. You should contact the small claims court clerk to ask about specific local rules.',
          alternatives: [
            'Ask a friend or family member over 18 who is not a party to serve the papers',
            'Hire a licensed Oklahoma process server',
            'Use the sheriff\'s department for service (fees apply)',
            'Request court guidance on local small claims procedures',
          ],
          caution:
            'Even in small claims, serving your own initial process is risky and may invalidate service. Always verify with the court first.',
        };
      }

      // Eviction - NEVER serve your own
      if (caseType === 'eviction') {
        return {
          answer: 'NO',
          heading: 'You Cannot Serve Your Own Eviction Papers',
          explanation:
            'Oklahoma eviction proceedings under 41 O.S. § 111 require service by a disinterested person. A landlord (plaintiff) can never serve their own eviction notice or forcible entry and detainer summons. This is strictly prohibited to ensure due process and avoid confrontations between landlords and tenants.',
          alternatives: [
            'Hire a licensed Oklahoma process server experienced in evictions',
            'Use the sheriff\'s department for the county where the property is located',
            'Ask a trusted adult who is not involved in the case to handle service',
          ],
          caution:
            'Self-service in eviction cases can result in the case being dismissed and may expose you to legal liability.',
        };
      }

      // Divorce / Custody - NO
      if (caseType === 'divorce' || caseType === 'custody') {
        return {
          answer: 'NO',
          heading: 'Parties Cannot Serve Divorce or Custody Papers',
          explanation:
            'Oklahoma family law cases require neutral, disinterested service. Because divorce and child custody matters involve highly sensitive personal issues, the law strictly prohibits parties from serving documents on each other. This protects all parties and ensures proper legal procedure.',
          alternatives: [
            'Hire a licensed process server who handles family law cases',
            'Use the sheriff\'s department in the county where the respondent lives',
            'Ask a neutral adult (over 18, not a party) to serve the papers',
          ],
          caution:
            'Improper service in family law cases can delay proceedings for months and may affect custody outcomes.',
        };
      }

      // General civil / other
      if (!knowAddress) return null;

      // If they don't know the address and defendant probably won't cooperate
      if (knowAddress === 'no' && willCooperate === 'probably-not') {
        return {
          answer: 'NO',
          heading: 'Service Requires Professional Help',
          explanation:
            'You cannot serve your own papers in Oklahoma, and the fact that you do not know the defendant\'s current address makes personal service significantly more complex. A professional process server can use skip-tracing techniques to locate the defendant and complete proper service legally.',
          alternatives: [
            'Hire a process server with skip-tracing capabilities',
            'Consider service by publication if the defendant cannot be located after due diligence',
            'Consult an attorney about alternative service methods',
          ],
          caution:
            'Without knowing the defendant\'s address, you may also need court approval for alternative service methods.',
        };
      }

      // Standard answer for civil / other
      return {
        answer: 'NO',
        heading: 'Oklahoma Law Prohibits Self-Service',
        explanation:
          'Under 12 O.S. § 2004, service of process in Oklahoma must be made by a disinterested person who is at least 18 years old. If you are a named party in the case — whether plaintiff or defendant — you cannot serve your own legal documents. This rule exists to ensure fairness, prevent conflicts, and uphold due process.',
        alternatives: [
          'Hire a licensed Oklahoma process server (recommended for reliability and proof of service)',
          'Use the sheriff\'s department in the county where service is needed',
          'Ask any adult over 18 who is not a party or witness in the case to serve the papers',
        ],
        caution:
          'Service by a party to the case may be deemed invalid, forcing you to restart the process and potentially miss deadlines.',
      };
    }

    // Third party (not a party to the case)
    if (partyType === 'third-party') {
      if (okResident === 'no') {
        return {
          answer: 'MAYBE',
          heading: 'Out-of-State Service Has Additional Requirements',
          explanation:
            'As a non-party, you are legally allowed to serve process in Oklahoma. However, because the defendant is not an Oklahoma resident, service may need to comply with both Oklahoma law and the rules of the defendant\'s home state. Out-of-state service often requires following the Uniform Interstate Depositions and Discovery Act (UIDDA) or long-arm statutes.',
          alternatives: [
            'Hire a licensed process server in the state where the defendant resides',
            'Domesticate the out-of-state subpoena under 12 O.S. § 3253 (UIDDA)',
            'Consult an attorney about interstate service requirements',
          ],
          caution:
            'Serving papers out-of-state without following proper procedures can invalidate service.',
        };
      }

      return {
        answer: 'YES',
        heading: 'You Can Serve the Papers',
        explanation:
          'As a non-party who is at least 18 years old, Oklahoma law permits you to serve legal documents. You do not need a special license for one-time service, though licensed process servers are held to higher professional standards. Be sure to complete a return of service affidavit after delivery, as this proof of service is required by the court.',
        alternatives: [
          'Download a return of service form from the Oklahoma State Courts Network (OSCN)',
          'Complete the affidavit immediately after service while details are fresh',
          'File the return of service with the court promptly',
        ],
        caution:
          'If the defendant refuses service or cannot be located after multiple attempts, professional assistance may still be needed.',
      };
    }

    return null;
  }, [caseType, partyType, okResident, knowAddress, willCooperate]);

  const reset = () => {
    setCaseType('');
    setPartyType('');
    setOkResident('');
    setKnowAddress('');
    setWillCooperate('');
  };

  const answerColors = {
    YES: 'bg-green-50 border-green-400 text-green-800',
    NO: 'bg-red-50 border-red-400 text-red-800',
    MAYBE: 'bg-amber-50 border-amber-400 text-amber-800',
  };

  const answerBadgeColors = {
    YES: 'bg-green-600 text-white',
    NO: 'bg-red-600 text-white',
    MAYBE: 'bg-amber-600 text-white',
  };

  const allQuestionsAnswered = caseType && partyType && okResident && knowAddress && (knowAddress === 'no' ? willCooperate : true);

  const citationSources = [
    {
      title: '12 O.S. \u00A7 2004 \u2014 Methods of Service of Process',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
      description: 'Requires service by a disinterested person over the age of 18. Parties generally cannot serve their own documents.',
    },
    {
      title: '12 O.S. \u00A7 2004.1 \u2014 Service of Subpoenas',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004.1&title=12',
      description: 'Subpoena service requirements and who may serve.',
    },
    {
      title: '41 O.S. \u00A7 111 \u2014 Forcible Entry and Detainer',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=111&title=41',
      description: 'Eviction service requirements prohibiting self-service by landlords.',
    },
  ];

  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Can I Serve My Own Papers"
        pageDescription="Can I Serve My Own Papers — Just Legal Solutions, Oklahoma process server and legal support services."
        pageUrl="https://justlegalsolutions.org/oklahoma-tools/can-i-serve-my-own-papers"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Can I Serve My Own Papers', url: '/oklahoma-tools/can-i-serve-my-own-papers' },
        ]}
      />
    <HubPageLayout
      title="Can I Serve My Own Papers?"
      description="Interactive decision tree to determine whether you can serve your own legal papers in Oklahoma under 12 O.S. \u00A7 2004."
      citations={citationSources}
    >
      <div className="space-y-8">
        {/* Intro */}
        <section aria-label="Introduction">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            One of the most common questions in Oklahoma civil procedure is whether a party to a lawsuit 
            can serve their own legal documents. The short answer is usually <strong>no</strong> — Oklahoma 
            law requires service by a disinterested third party. However, there are limited exceptions 
            depending on your case type and role. Answer the questions below to get a personalized answer.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            This tool applies the rules found in 12 O.S. § 2004 and related statutes to your specific 
            situation. It is for educational purposes and does not constitute legal advice. When in doubt, 
            consult an attorney or hire a licensed process server.
          </p>
        </section>

        {/* Decision Tree Card */}
        <section className="card p-6" aria-label="Decision tree questions">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-navy">Answer These Questions</h2>
            <button
              type="button"
              onClick={reset}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Reset all
            </button>
          </div>

          {/* Question 1: Case Type */}
          <div className="mb-6">
            <p className="label block mb-2">1. What type of case is this?</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                { value: 'divorce', label: 'Divorce' },
                { value: 'custody', label: 'Child Custody' },
                { value: 'small-claims', label: 'Small Claims' },
                { value: 'eviction', label: 'Eviction' },
                { value: 'civil', label: 'Civil Lawsuit' },
                { value: 'other', label: 'Other' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    setCaseType(opt.value as CaseType);
                    setPartyType('');
                    setOkResident('');
                    setKnowAddress('');
                    setWillCooperate('');
                  }}
                  className={`px-3 py-2.5 rounded text-sm font-medium border transition-colors text-left ${
                    caseType === opt.value
                      ? 'bg-navy text-white border-navy'
                      : 'bg-white text-navy border-gray-300 hover:border-navy/50'
                  }`}
                  aria-pressed={caseType === opt.value}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Party Type */}
          {caseType && (
            <div className="mb-6 animate-fade-in">
              <p className="label block mb-2">2. Are you a party to the case?</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'plaintiff', label: 'Plaintiff (I filed the case)' },
                  { value: 'defendant', label: 'Defendant (I was sued)' },
                  { value: 'third-party', label: 'Third party (not involved)' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setPartyType(opt.value as PartyType);
                      setOkResident('');
                      setKnowAddress('');
                      setWillCooperate('');
                    }}
                    className={`px-4 py-2.5 rounded text-sm font-medium border transition-colors ${
                      partyType === opt.value
                        ? 'bg-navy text-white border-navy'
                        : 'bg-white text-navy border-gray-300 hover:border-navy/50'
                    }`}
                    aria-pressed={partyType === opt.value}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 3: Oklahoma Resident */}
          {partyType && (
            <div className="mb-6 animate-fade-in">
              <p className="label block mb-2">3. Is the defendant an Oklahoma resident?</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                  { value: 'unknown', label: 'Unknown' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setOkResident(opt.value as OklahomaResident);
                      setKnowAddress('');
                      setWillCooperate('');
                    }}
                    className={`px-4 py-2.5 rounded text-sm font-medium border transition-colors ${
                      okResident === opt.value
                        ? 'bg-navy text-white border-navy'
                        : 'bg-white text-navy border-gray-300 hover:border-navy/50'
                    }`}
                    aria-pressed={okResident === opt.value}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 4: Know Address */}
          {okResident && (
            <div className="mb-6 animate-fade-in">
              <p className="label block mb-2">4. Do you know the defendant&apos;s current address?</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setKnowAddress(opt.value as KnowAddress);
                      setWillCooperate('');
                    }}
                    className={`px-4 py-2.5 rounded text-sm font-medium border transition-colors ${
                      knowAddress === opt.value
                        ? 'bg-navy text-white border-navy'
                        : 'bg-white text-navy border-gray-300 hover:border-navy/50'
                    }`}
                    aria-pressed={knowAddress === opt.value}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 5: Will Cooperate */}
          {knowAddress === 'no' && (
            <div className="mb-6 animate-fade-in">
              <p className="label block mb-2">5. Is the defendant likely to cooperate?</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'yes', label: 'Yes' },
                  { value: 'probably-not', label: 'Probably not' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setWillCooperate(opt.value as WillCooperate)}
                    className={`px-4 py-2.5 rounded text-sm font-medium border transition-colors ${
                      willCooperate === opt.value
                        ? 'bg-navy text-white border-navy'
                        : 'bg-white text-navy border-gray-300 hover:border-navy/50'
                    }`}
                    aria-pressed={willCooperate === opt.value}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Result */}
        {result && (
          <section
            className={`card p-6 border-l-4 ${answerColors[result.answer]}`}
            role="region"
            aria-label="Decision result"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${answerBadgeColors[result.answer]}`}>
                {result.answer}
              </span>
              <h2 className="text-lg font-semibold text-navy">{result.heading}</h2>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-4">{result.explanation}</p>

            <div className="mb-4">
              <h3 className="font-medium text-navy text-sm mb-2">Recommended alternatives:</h3>
              <ul className="space-y-1.5">
                {result.alternatives.map((alt, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#d4a017] font-bold mt-0.5 flex-shrink-0" aria-hidden="true">→</span>
                    <span>{alt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {result.caution && (
              <div className="bg-orange-50 border border-orange-200 rounded p-3 text-sm text-orange-800">
                <strong>⚠ Caution:</strong> {result.caution}
              </div>
            )}
          </section>
        )}

        {/* Waiting for more answers */}
        {caseType && partyType && okResident && knowAddress && knowAddress === 'no' && !willCooperate && (
          <p className="text-sm text-gray-500 italic text-center">Please answer question 5 above to see your result.</p>
        )}

        {/* Who Can Serve */}
        <section className="card p-6" aria-label="Who can serve papers in Oklahoma">
          <h2 className="text-xl font-semibold text-navy mb-4">Who Can Serve Legal Papers in Oklahoma?</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Under 12 O.S. § 2004, any person who is at least 18 years old and not a party to the case may 
            serve legal process in Oklahoma. This includes friends, family members, coworkers, or anyone 
            else who meets these two simple requirements. No special license is required for one-time service.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            However, using a <strong>licensed process server</strong> offers significant advantages. Licensed 
            servers are regulated by the state, carry a bond, and are trained in proper service techniques. 
            They know how to handle evasive defendants, complete accurate return of service affidavits, and 
            testify in court if service is challenged. Professional service provides peace of mind and reduces 
            the risk of a case being delayed or dismissed due to defective service.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Sheriffs and deputy sheriffs can also serve process anywhere within their jurisdiction. However, 
            sheriff&apos;s offices are often busy with criminal matters, so turnaround times may be longer than 
            with a private process server.
          </p>
        </section>

        {/* Why Self-Service Is Prohibited */}
        <section className="card p-6" aria-label="Why parties cannot serve their own papers">
          <h2 className="text-xl font-semibold text-navy mb-4">Why Parties Cannot Serve Their Own Papers</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The prohibition against self-service exists for several important reasons rooted in fairness 
            and due process. First, a party serving their own papers creates an inherent conflict of interest. 
            The server has a stake in the outcome, which could lead to false claims of service or undue 
            pressure on the recipient.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Second, requiring a disinterested third party ensures that there is an impartial witness who 
            can verify service if it is ever challenged in court. The return of service affidavit signed by 
            a neutral server carries far more weight than a party&apos;s self-serving testimony.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Third, in emotionally charged cases — such as divorces, custody battles, and evictions — 
            personal confrontation between parties can escalate into unsafe situations. Using a neutral 
            server protects everyone involved and maintains the integrity of the legal process.
          </p>
        </section>

        {/* What Happens If You Serve Your Own Papers */}
        <section className="card p-6 border-l-4 border-l-red-400" aria-label="Consequences of improper service">
          <h2 className="text-lg font-semibold text-navy mb-3">Consequences of Improper Service</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            If a court discovers that a party served their own papers, the service may be declared invalid. 
            This can have serious consequences: the case may be delayed, hearings may be rescheduled, and 
            you may need to pay additional filing fees to restart the process. In some cases, improper service 
            can lead to dismissal of the case entirely.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            The defendant may also challenge service as defective, claiming they were never properly notified. 
            If the challenge succeeds, any judgment entered may be set aside. Investing in proper service from 
            the beginning saves time, money, and stress in the long run.
          </p>
        </section>

        {/* CTA */}
        <section className="card p-6 bg-navy text-white text-center" aria-label="Contact section">
          <h2 className="text-lg font-semibold mb-2">Need a Professional Process Server in Oklahoma?</h2>
          <p className="text-sm text-white/80 mb-4">
            Just Legal Solutions is licensed, bonded, and experienced in all types of service. We handle 
            personal service, substitute service, publication coordination, and out-of-state domestication. 
            Every serve includes a detailed affidavit and photographic proof when possible.
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
              Email for Quote
            </a>
          </div>
          <p className="text-xs text-white/60 mt-3">
            Joseph Iannazzi, NAPPS #14801 · Licensed Oklahoma Process Server
          </p>
        </section>
      </div>
    </HubPageLayout>
    </>
  );
}
