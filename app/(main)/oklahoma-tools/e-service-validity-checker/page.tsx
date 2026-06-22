'use client';

import { useState, useMemo } from 'react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';
import UnifiedSchema from '@/components/UnifiedSchema';

// --- Question types ---
interface Question {
  id: number;
  text: string;
  options: { value: string; label: string; help?: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Is this the initial service of process or a subsequent filing?',
    options: [
      {
        value: 'initial',
        label: 'Initial Service of Process',
        help: 'First time serving summons and petition to start the case',
      },
      {
        value: 'subsequent',
        label: 'Subsequent Filing',
        help: 'Motion, discovery, notice, or other post-commencement document',
      },
    ],
  },
  {
    id: 2,
    text: 'Does the defendant have a registered e-filing account?',
    options: [
      { value: 'yes', label: 'Yes', help: 'They have an active account in the Oklahoma e-filing system' },
      { value: 'no', label: 'No', help: 'They do not have an e-filing account' },
      { value: 'unknown', label: 'Unknown', help: 'Not sure if they have an account' },
    ],
  },
  {
    id: 3,
    text: 'Has the defendant explicitly consented to electronic service in writing?',
    options: [
      { value: 'yes', label: 'Yes', help: 'Signed consent form or agreement on file' },
      { value: 'no', label: 'No', help: 'No written consent has been obtained' },
    ],
  },
  {
    id: 4,
    text: 'What type of document are you serving?',
    options: [
      { value: 'summons', label: 'Summons & Complaint', help: 'Initial lawsuit documents' },
      { value: 'subpoena', label: 'Subpoena', help: 'Witness appearance or document production order' },
      { value: 'motion', label: 'Motion', help: 'Request for court order or ruling' },
      { value: 'discovery', label: 'Discovery', help: 'Interrogatories, requests for production, depositions' },
      { value: 'other', label: 'Other Filing', help: 'Notice, brief, or other court document' },
    ],
  },
];

// --- Result types ---
interface ValidityResult {
  status: 'VALID' | 'INVALID' | 'CONDITIONAL';
  title: string;
  explanation: string;
  details: string[];
  nextSteps: string[];
  statute: string;
  statuteUrl: string;
  warning?: string;
}

function getValidityResult(answers: Record<number, string>): ValidityResult {
  const serviceType = answers[1];
  const efilingAccount = answers[2];
  const consent = answers[3];
  const docType = answers[4];

  // --- INVALID: Initial service of summons must be personal/substituted/publication ---
  if (serviceType === 'initial') {
    if (docType === 'summons') {
      return {
        status: 'INVALID',
        title: 'Electronic Service Is NOT Valid for Initial Summons',
        explanation:
          'Under Oklahoma law, the initial service of a summons and petition must be accomplished by personal service, substituted service, or (as a last resort) publication. Electronic service is not permitted for the initial service of summons.',
        details: [
          '12 O.S. § 2004.5 requires written consent for electronic service.',
          'Initial service of summons cannot be made electronically under current Oklahoma law.',
          'The defendant must be served personally, by substituted service, or by publication after court authorization.',
          'E-filing system participation alone does not constitute consent to electronic service of the initial summons.',
        ],
        nextSteps: [
          'Arrange for personal service by a licensed Oklahoma process server.',
          'If the defendant cannot be located, prepare a motion for service by publication.',
          'Document all due diligence efforts to locate the defendant.',
          'After the defendant enters an appearance, you may seek consent for subsequent electronic service.',
        ],
        statute: '12 O.S. § 2004.5 — Electronic Service',
        statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004.5&title=12',
        warning: 'Attempting to serve a summons electronically without proper personal service may result in the court lacking personal jurisdiction over the defendant.',
      };
    }

    // Initial service of something other than summons (e.g., subpoena as part of initial action)
    return {
      status: 'INVALID',
      title: 'Electronic Service Is NOT Valid for Initial Service',
      explanation:
        'For initial service of process in Oklahoma, electronic service is not permitted regardless of document type. The first service of process in any action must be personal, substituted, or by publication.',
      details: [
        '12 O.S. § 2004.5 limits electronic service to subsequent filings.',
        'Even if the defendant has an e-filing account, initial service cannot be electronic.',
        'Written consent alone does not authorize electronic service for the initial filing.',
      ],
      nextSteps: [
        'Use personal service for the initial service of process.',
        'After the defendant has been properly served and enters an appearance, electronic service may be used for subsequent filings if consent is obtained.',
      ],
      statute: '12 O.S. § 2004.5 — Electronic Service',
      statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004.5&title=12',
    };
  }

  // --- Subsequent filing path ---

  // No written consent → INVALID
  if (consent === 'no') {
    return {
      status: 'INVALID',
      title: 'Electronic Service Is NOT Valid Without Written Consent',
      explanation:
        'For subsequent filings, Oklahoma law requires the defendant\'s explicit written consent before electronic service is permitted. Without that consent, you must use traditional service methods.',
      details: [
        '12 O.S. § 2004.5(B) requires written consent for electronic service.',
        'Having an e-filing account does not automatically equal consent to electronic service.',
        'Consent must be explicit and in writing — implied consent is insufficient.',
        'Subpoenas served electronically without consent are particularly risky and may be challenged.',
      ],
      nextSteps: [
        'Obtain written consent from the defendant or their attorney for electronic service.',
        'Serve documents using traditional methods: personal service, mail, or fax.',
        'File a motion requesting the court to authorize electronic service if the defendant refuses consent.',
        'If the defendant has an attorney, service on the attorney may satisfy requirements under 12 O.S. § 2004(E).',
      ],
      statute: '12 O.S. § 2004.5(B)',
      statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004.5&title=12',
    };
  }

  // Has written consent + subsequent → VALID
  if (consent === 'yes' && serviceType === 'subsequent') {
    // Special note for subpoenas
    if (docType === 'subpoena') {
      return {
        status: 'CONDITIONAL',
        title: 'Electronic Service May Be Valid for Subpoenas (With Caution)',
        explanation:
          'While 12 O.S. § 2004.5 permits electronic service of subsequent filings with written consent, subpoenas have additional requirements. A subpoena served electronically must still comply with 12 O.S. § 2004.1, which governs subpoena service. Some Oklahoma courts require personal service for subpoenas.',
        details: [
          'Written consent for electronic service is present — satisfying the primary requirement.',
          'The document is a subpoena, which some judges require to be personally served.',
          'Check local court rules and the judge\'s standing orders for subpoena service requirements.',
          'Tangible evidence subpoenas or those with penalty provisions may require personal service.',
        ],
        nextSteps: [
          'Verify local court rules for subpoena service requirements.',
          'Consider also serving the subpoena by certified mail as a backup method.',
          'If the subpoena involves a significant penalty (contempt), use personal service.',
          'Document the written consent for electronic service in your case file.',
        ],
        statute: '12 O.S. § 2004.5 & 12 O.S. § 2004.1',
        statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004.5&title=12',
        warning: 'Subpoenas have unique requirements. Even with consent, verify whether your specific court requires personal service.',
      };
    }

    // Unknown e-filing account but has consent → VALID (consent is what matters)
    if (efilingAccount === 'unknown') {
      return {
        status: 'CONDITIONAL',
        title: 'Electronic Service Likely Valid — Verify E-Filing Access',
        explanation:
          'Written consent is the key requirement under 12 O.S. § 2004.5. Since you have the defendant\'s written consent to electronic service, the service is likely valid for this subsequent filing. However, if the defendant does not actually have an e-filing account, they may not receive the documents through the electronic system.',
        details: [
          'Written consent is present — the primary statutory requirement is satisfied.',
          'If the defendant lacks an e-filing account, they may not receive electronically filed documents.',
          'The Oklahoma e-filing system (OSCN) delivers documents to registered accounts.',
          'Consider confirming the defendant\'s e-filing registration status.',
        ],
        nextSteps: [
          'Verify that the defendant has an active e-filing account in the Oklahoma system.',
          'If the defendant does not have an account, serve by an alternative method (mail or fax) to ensure receipt.',
          'Keep the written consent document in your records.',
          'Follow up to confirm the defendant received the documents.',
        ],
        statute: '12 O.S. § 2004.5(B)',
        statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004.5&title=12',
        warning: 'E-filing system access is separate from consent. If the defendant cannot access the e-filing portal, electronic service may be ineffective even if legally valid.',
      };
    }

    // Full valid path: subsequent + consent + known e-filing account
    return {
      status: 'VALID',
      title: 'Electronic Service Is VALID',
      explanation:
        'Under 12 O.S. § 2004.5, electronic service is valid for subsequent filings when the defendant has provided written consent to electronic service. All statutory requirements appear to be met.',
      details: [
        'The document is a subsequent filing — not initial service of summons.',
        'Written consent for electronic service has been obtained from the defendant.',
        'Electronic service is permitted for motions, discovery, notices, and other post-commencement filings.',
        'The Oklahoma e-filing pilot program (launched July 2024) provides a framework for electronic service.',
        'Retain the written consent document in your case file for future reference.',
      ],
      nextSteps: [
        'Serve the document through the Oklahoma e-filing system.',
        'Retain proof of electronic transmission and delivery confirmation.',
        'Keep the written consent form in your case records.',
        'If the defendant claims non-receipt, the delivery confirmation from the e-filing system serves as evidence.',
      ],
      statute: '12 O.S. § 2004.5 — Electronic Service',
      statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004.5&title=12',
    };
  }

  // Fallback (should not reach here with valid answers)
  return {
    status: 'INVALID',
    title: 'Cannot Determine Validity — Additional Information Needed',
    explanation:
      'The tool could not determine the validity of electronic service based on the answers provided. Please review the statutory requirements or consult a licensed Oklahoma attorney.',
    details: ['Incomplete or contradictory information was provided.'],
    nextSteps: [
      'Review your answers and ensure all questions are completed.',
      'Consult a licensed Oklahoma attorney for case-specific advice.',
      'Review 12 O.S. § 2004.5 directly for the full statutory text.',
    ],
    statute: '12 O.S. § 2004.5',
    statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004.5&title=12',
  };
}

// --- Citations ---
const CITATIONS = [
  {
    title: '12 O.S. § 2004.5 — Electronic Service',
    url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004.5&title=12',
    description: 'Rules governing electronic service of process in Oklahoma, including consent requirements.',
  },
  {
    title: '12 O.S. § 2004 — Methods of Service of Process',
    url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
    description: 'Traditional methods of service including personal, substituted, and publication.',
  },
  {
    title: '12 O.S. § 2004.1 — Service of Subpoenas',
    url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004.1&title=12',
    description: 'Methods and requirements for service of subpoenas in Oklahoma.',
  },
];

export default function EServiceValidityChecker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const question = QUESTIONS[currentStep];
  const totalSteps = QUESTIONS.length;
  const result = useMemo(
    () => (showResult ? getValidityResult(answers) : null),
    [showResult, answers]
  );

  function handleSelect(value: string) {
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  }

  function handleBack() {
    if (showResult) {
      setShowResult(false);
      setCurrentStep(totalSteps - 1);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  function handleRestart() {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  }

  const progressPercent = ((currentStep + (showResult ? 1 : 0)) / totalSteps) * 100;

  const statusColors = {
    VALID: { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-800', icon: '&#10003;' },
    INVALID: { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-800', icon: '&#10007;' },
    CONDITIONAL: { bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-800', icon: '&#9888;' },
  };

  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="E Service Validity Checker"
        pageDescription="E Service Validity Checker — Just Legal Solutions, Oklahoma process server and legal support services."
        pageUrl="https://justlegalsolutions.org/oklahoma-tools/e-service-validity-checker"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'E Service Validity Checker', url: '/oklahoma-tools/e-service-validity-checker' },
        ]}
      />
    <HubPageLayout
      title="E-Service Validity Checker"
      description="Check whether electronic service of process is valid under Oklahoma law for your specific situation."
      citations={CITATIONS}
      showDisclaimer={true}
    >
      {/* Introduction */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-navy mb-3">
          Is Electronic Service Valid in Your Case?
        </h2>
        <p className="text-text-dark mb-3">
          Oklahoma began expanding electronic service capabilities in 2024, but the
          rules are not universal. Under{' '}
          <a
            href="https://okpublic.oscn.net/forms/view.php?type=statute&num=2004.5&title=12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            12 O.S. § 2004.5
          </a>
          , electronic service is generally limited to subsequent filings and
          requires the defendant's explicit written consent. Initial service of
          summons must still be accomplished through personal service, substituted
          service, or publication.
        </p>
        <p className="text-text-dark mb-3">
          This tool walks through four key questions to determine whether electronic
          service would be legally valid in your specific situation. The result
          includes a detailed explanation of the relevant statute, practical next
          steps, and any warnings or conditions that apply.
        </p>
        <p className="text-text-dark">
          <strong>Note:</strong> Oklahoma launched an e-filing pilot program in
          July 2024 that expanded electronic filing capabilities, but this does
          not change the fundamental requirement for written consent to electronic
          service. Participation in the e-filing system alone does not constitute
          consent to electronic service of process.
        </p>
      </div>

      {/* Progress Bar */}
      {!showResult && (
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-text-muted mb-1">
            <span>
              Step {currentStep + 1} of {totalSteps}
            </span>
            <span>{Math.round(progressPercent)}% complete</span>
          </div>
          <div
            className="w-full bg-gray-200 rounded-full h-2"
            role="progressbar"
            aria-valuenow={currentStep + 1}
            aria-valuemin={1}
            aria-valuemax={totalSteps}
          >
            <div
              className="bg-gold h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Question Card */}
      {!showResult && question && (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 md:p-6 mb-8">
          <h3 className="text-lg font-semibold text-navy mb-4">{question.text}</h3>

          <div className="space-y-3" role="radiogroup" aria-label={question.text}>
            {question.options.map((option) => {
              const isSelected = answers[question.id] === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`w-full text-left border rounded-lg p-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                    isSelected
                      ? 'border-gold bg-gold/5 ring-1 ring-gold'
                      : 'border-gray-200 hover:border-gold/50 hover:bg-gray-50'
                  }`}
                  role="radio"
                  aria-checked={isSelected}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                        isSelected ? 'border-gold' : 'border-gray-300'
                      }`}
                      aria-hidden="true"
                    >
                      {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-gold" />}
                    </span>
                    <div>
                      <p className="font-medium text-sm text-navy">{option.label}</p>
                      {option.help && (
                        <p className="text-xs text-text-muted mt-0.5">{option.help}</p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="mt-4 text-sm text-navy underline hover:text-indigo-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 rounded"
              aria-label="Go back to previous question"
            >
              ← Back to previous question
            </button>
          )}
        </div>
      )}

      {/* Result Card */}
      {showResult && result && (
        <div className="space-y-6 mb-8">
          {/* Status Banner */}
          <div
            className={`${statusColors[result.status].bg} border ${statusColors[result.status].border} rounded-lg p-5`}
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <span
                className={`text-2xl flex-shrink-0 ${statusColors[result.status].text}`}
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: statusColors[result.status].icon }}
              />
              <div>
                <p className={`text-sm font-semibold uppercase tracking-wide ${statusColors[result.status].text} mb-1`}>
                  {result.status === 'VALID'
                    ? 'Valid'
                    : result.status === 'INVALID'
                    ? 'Invalid'
                    : 'Conditionally Valid'}
                </p>
                <h3 className={`text-xl font-bold ${statusColors[result.status].text} mb-2`}>
                  {result.title}
                </h3>
                <p className={`text-sm ${statusColors[result.status].text}`}>
                  {result.explanation}
                </p>
              </div>
            </div>
          </div>

          {/* Warning */}
          {result.warning && (
            <div
              className="bg-amber-50 border border-amber-300 rounded-md p-4"
              role="alert"
            >
              <div className="flex items-start gap-3">
                <span className="text-amber-600 text-lg flex-shrink-0" aria-hidden="true">
                  &#9888;
                </span>
                <p className="text-sm text-amber-800">{result.warning}</p>
              </div>
            </div>
          )}

          {/* Details */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 md:p-6">
            <h4 className="text-base font-semibold text-navy mb-3">
              Legal Analysis
            </h4>
            <ul className="space-y-2 mb-5">
              {result.details.map((detail, i) => (
                <li key={i} className="text-sm text-text-dark flex items-start gap-2">
                  <span className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true">
                    &#8226;
                  </span>
                  {detail}
                </li>
              ))}
            </ul>

            <h4 className="text-base font-semibold text-navy mb-3">
              Recommended Next Steps
            </h4>
            <ol className="space-y-2">
              {result.nextSteps.map((step, i) => (
                <li key={i} className="text-sm text-text-dark flex items-start gap-2">
                  <span className="text-gold font-semibold flex-shrink-0">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>

            <div className="mt-5 pt-4 border-t border-gray-100">
              <p className="text-sm font-medium text-navy">Governing Statute</p>
              <p className="text-sm mt-1">
                <a
                  href={result.statuteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800 font-medium"
                >
                  {result.statute}
                </a>
              </p>
            </div>
          </div>

          {/* Answers Summary */}
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="text-sm font-semibold text-navy mb-3">Your Answers</h4>
            <div className="space-y-2">
              {QUESTIONS.map((q) => {
                const selected = q.options.find((o) => o.value === answers[q.id]);
                return (
                  <div key={q.id} className="flex justify-between text-sm">
                    <span className="text-text-muted">{q.text}</span>
                    <span className="font-medium text-navy text-right ml-4">
                      {selected?.label || 'Not answered'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleRestart}
              className="bg-navy text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-navy/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              Check Another Scenario
            </button>
            <button
              onClick={handleBack}
              className="border border-gray-300 text-navy px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              Change Answers
            </button>
          </div>
        </div>
      )}

      {/* Educational Content */}
      <div className="space-y-6 mb-8">
        <h2 className="text-xl font-bold text-navy">
          Electronic Service in Oklahoma — What You Need to Know
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            The Written Consent Requirement
          </h3>
          <p className="text-text-dark text-sm mb-2">
            The cornerstone of electronic service in Oklahoma is written consent.
            Under 12 O.S. § 2004.5, a party cannot be served electronically unless
            they have explicitly agreed in writing to accept service through
            electronic means. This consent must be clear and unambiguous — merely
            having an e-filing account or participating in the court's electronic
            system does not automatically constitute consent to electronic service.
          </p>
          <p className="text-text-dark text-sm">
            Written consent can take the form of a signed consent form filed with
            the court, a written agreement between the parties, or a stipulation
            entered by the court. The consent should specify the email address or
            electronic portal through which the party agrees to accept service.
            Keep this consent document in your records — it is your defense if the
            defendant later challenges the validity of electronic service.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Initial Service vs. Subsequent Filings
          </h3>
          <p className="text-text-dark text-sm mb-2">
            Oklahoma law draws a bright-line distinction between initial service of
            process and subsequent filings. The initial service of a summons and
            petition — the documents that start a lawsuit — must be accomplished by
            personal service, substituted service, or (if the defendant cannot be
            found) service by publication. Electronic service is explicitly not
            permitted for the initial summons.
          </p>
          <p className="text-text-dark text-sm">
            Once the defendant has been properly served and has entered an
            appearance in the case, subsequent documents — motions, discovery
            requests, notices, and other filings — may be served electronically if
            the defendant has given written consent. This distinction exists because
            initial service establishes the court's personal jurisdiction over the
            defendant, which requires a higher standard of proof than subsequent
            communications within an existing case.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Oklahoma E-Filing Pilot Program (July 2024)
          </h3>
          <p className="text-text-dark text-sm mb-2">
            In July 2024, Oklahoma expanded its electronic filing pilot program
            through the Oklahoma State Courts Network (OSCN). This program allows
            attorneys and self-represented parties to file documents electronically
            in participating courts. However, it is important to understand that
            e-filing and electronic service are related but distinct concepts.
          </p>
          <p className="text-text-dark text-sm">
            E-filing refers to submitting documents to the court electronically.
            Electronic service refers to delivering documents to the opposing party
            through electronic means. While the e-filing system may facilitate
            electronic service, the statutory requirements for written consent and
            proper method of service still apply. Not all Oklahoma courts
            participate in the e-filing pilot, and not all defendants have
            registered for electronic access. Always verify that your court and
            the opposing party are set up for electronic service before relying on
            it as your sole method of service.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Best Practices for Electronic Service
          </h3>
          <ul className="space-y-2">
            <li className="text-sm text-text-dark flex items-start gap-2">
              <span className="text-gold flex-shrink-0" aria-hidden="true">&#8226;</span>
              <span>
                Always obtain written consent before attempting electronic service.
                Verbal consent or assumed consent is insufficient.
              </span>
            </li>
            <li className="text-sm text-text-dark flex items-start gap-2">
              <span className="text-gold flex-shrink-0" aria-hidden="true">&#8226;</span>
              <span>
                File the consent form with the court so there is an official record.
              </span>
            </li>
            <li className="text-sm text-text-dark flex items-start gap-2">
              <span className="text-gold flex-shrink-0" aria-hidden="true">&#8226;</span>
              <span>
                For critical documents, use electronic service as a supplement — not
                a replacement — for traditional service methods until electronic
                service is well-established in your case.
              </span>
            </li>
            <li className="text-sm text-text-dark flex items-start gap-2">
              <span className="text-gold flex-shrink-0" aria-hidden="true">&#8226;</span>
              <span>
                Keep records of delivery confirmations, read receipts, and system
                logs as evidence of successful electronic transmission.
              </span>
            </li>
            <li className="text-sm text-text-dark flex items-start gap-2">
              <span className="text-gold flex-shrink-0" aria-hidden="true">&#8226;</span>
              <span>
                If the defendant does not respond to an electronically served
                document, follow up with a traditional service method to ensure
                they actually received it.
              </span>
            </li>
            <li className="text-sm text-text-dark flex items-start gap-2">
              <span className="text-gold flex-shrink-0" aria-hidden="true">&#8226;</span>
              <span>
                Check local court rules and the judge's standing orders — some
                judges have specific requirements for electronic service in their
                courtroom.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            When in Doubt, Use Traditional Service
          </h3>
          <p className="text-text-dark text-sm">
            Electronic service in Oklahoma is still evolving. If you have any doubt
            about whether electronic service is appropriate or valid for your
            specific document and situation, the safest course is to use personal
            service or another traditional method. A defective service can delay
            your case, result in a motion to quash, or require you to start over.
            The modest cost savings of electronic service are rarely worth the risk
            of a service challenge. Consult a licensed Oklahoma attorney for
            guidance on your specific case.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy text-white rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Need Help with Service?</h3>
        <p className="text-white/80 text-sm mb-4">
          Just Legal Solutions provides reliable process serving throughout
          Oklahoma. We stay current on the latest developments in electronic
          service law and can advise on the best method for your case.
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
