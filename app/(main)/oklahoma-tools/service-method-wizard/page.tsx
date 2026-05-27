'use client';

import { useState } from 'react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';
import UnifiedSchema from '@/components/UnifiedSchema';

// --- Types ---
interface Question {
  id: number;
  text: string;
  options: { value: string; label: string; help?: string }[];
}

interface Recommendation {
  method: string;
  description: string;
  details: string;
  statute: string;
  statuteUrl: string;
  pros: string[];
  cons: string[];
}

// --- Questions ---
const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'What type of document are you serving?',
    options: [
      { value: 'summons', label: 'Summons & Complaint', help: 'Initial lawsuit documents to start a case' },
      { value: 'subpoena', label: 'Subpoena', help: 'Orders a witness to appear or produce documents' },
      { value: 'eviction', label: 'Eviction Notice', help: 'Forcible entry and detainer proceedings' },
      { value: 'vpo', label: 'Protective Order (VPO)', help: 'Victim protective order paperwork' },
      { value: 'other', label: 'Other', help: 'Motion, discovery, or other court filing' },
    ],
  },
  {
    id: 2,
    text: 'Who is the recipient (defendant / witness)?',
    options: [
      { value: 'individual', label: 'Individual Adult', help: 'A person 18 or older' },
      { value: 'corporation', label: 'Corporation / Business', help: 'A registered business entity' },
      { value: 'military', label: 'Active-Duty Military Member', help: 'Subject to SCRA protections' },
      { value: 'incarcerated', label: 'Incarcerated Person', help: 'Currently in jail or prison' },
      { value: 'minor', label: 'Minor (under 18)', help: 'Requires service on parent/guardian too' },
      { value: 'unknown', label: 'Unknown Location', help: 'Current whereabouts are unknown' },
    ],
  },
  {
    id: 3,
    text: 'Do you know their current address?',
    options: [
      { value: 'home', label: 'Yes — Home Address', help: 'Residential address confirmed' },
      { value: 'work', label: 'Yes — Work Address', help: 'Place of employment confirmed' },
      { value: 'last-known', label: 'Only Last Known Address', help: 'They may have moved' },
      { value: 'none', label: 'No Idea', help: 'No address information available' },
    ],
  },
  {
    id: 4,
    text: 'How urgent is the service?',
    options: [
      { value: 'standard', label: 'Standard', help: '3–7 day turnaround is acceptable' },
      { value: 'rush', label: 'Rush', help: 'Need service within 1–2 days' },
      { value: 'emergency', label: 'Same-Day Emergency', help: 'Must serve today' },
    ],
  },
  {
    id: 5,
    text: 'What is your budget priority?',
    options: [
      { value: 'low-cost', label: 'Lowest Cost', help: 'Choose the least expensive method' },
      { value: 'balanced', label: 'Balance Speed & Cost', help: 'Best value for reliable service' },
      { value: 'speed', label: 'Speed Regardless of Cost', help: 'Fastest method, cost is secondary' },
    ],
  },
];

// --- Recommendation logic ---
function getRecommendation(answers: Record<number, string>): Recommendation {
  const docType = answers[1];
  const recipient = answers[2];
  const address = answers[3];
  const urgency = answers[4];
  // const budget = answers[5]; // used for emphasis

  // Unknown location → Publication (for initial docs) or skip trace
  if (address === 'none' || recipient === 'unknown') {
    if (docType === 'summons' || docType === 'eviction' || docType === 'vpo') {
      return {
        method: 'Service by Publication (After Due Diligence)',
        description:
          'When a defendant\'s location is unknown after exhaustive search efforts, Oklahoma courts permit service by publication.',
        details:
          'Before the court will authorize publication, you must demonstrate due diligence in locating the defendant. This includes checking last-known address, contacting relatives, searching public records, and potentially hiring a skip tracer. Once authorized, publish once per week for three consecutive weeks in a qualified newspaper. The defendant has 41 days after final publication to respond. Publication is expensive, slow, and often a last resort — but it satisfies due process when other methods fail.',
        statute: '12 O.S. § 2004(C)(3)',
        statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
        pros: ['Allows case to proceed when defendant cannot be found', 'Satisfies due process requirements'],
        cons: ['Slow — minimum 3 weeks plus 41 days', 'Expensive — newspaper fees are costly', 'Lower response rate than personal service'],
      };
    }
    return {
      method: 'Skip Trace + Personal Service',
      description:
        'For non-initial documents, a skip trace can locate the defendant for subsequent personal service.',
      details:
        'When you need to serve a subpoena or motion but lack a current address, a professional skip tracer can search databases, utility records, social media, and other sources to locate the individual. Once located, personal service follows. This combines investigative work with traditional service and is typically faster than publication.',
      statute: '12 O.S. § 2004(A)',
      statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
      pros: ['Higher success rate than publication', 'Maintains personal service advantages'],
      cons: ['Requires additional skip trace fee (+$75)', 'Adds time to the process', 'Not guaranteed to locate the person'],
    };
  }

  // Corporation / business
  if (recipient === 'corporation') {
    return {
      method: 'Secretary of State Service or Service on Registered Agent',
      description:
        'Oklahoma corporations and registered businesses can be served through their registered agent or the Secretary of State.',
      details:
        'Under Oklahoma law, you may serve a corporation by delivering copies to its registered agent at the registered office. If the registered agent cannot be served, you may serve the Oklahoma Secretary of State as the corporation\'s statutory agent. This method is reliable, creates a clear record of service, and avoids the challenges of serving individual officers directly. Always verify the current registered agent through the Oklahoma Secretary of State\'s business entity database before attempting service.',
      statute: '12 O.S. § 2004(C)(1)',
      statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
      pros: ['Reliable — corporations must maintain a registered agent', 'Clear legal framework', 'Good documentation'],
      cons: ['May be slower than direct service', 'Requires verifying current registered agent'],
    };
  }

  // Military member — SCRA protections
  if (recipient === 'military') {
    return {
      method: 'Personal Service with SCRA Compliance',
      description:
        'Active-duty military members have special protections under the Servicemembers Civil Relief Act (SCRA).',
      details:
        'The SCRA (50 U.S.C. § 3901 et seq.) provides protections for active-duty service members, including potential stays of proceedings. Personal service is still required, but you must be mindful of SCRA requirements. The court may require an affidavit of non-military service before entering a default judgment. If the service member is stationed on a military base, coordinated base access may be needed. Personal service is the gold standard here — substituted service or mail should only be used as fallback with court approval.',
      statute: '50 U.S.C. § 3901 et seq. (SCRA)',
      statuteUrl: 'https://www.justice.gov/civil/servicemembers-civil-relief-act-scra',
      pros: ['Fully compliant with federal protections', 'Clear proof of service', 'Avoids SCRA-related challenges'],
      cons: ['Base access may require coordination', 'SCRA affidavits add steps', 'Service member may request a stay'],
    };
  }

  // Incarcerated person
  if (recipient === 'incarcerated') {
    return {
      method: 'Service Through Correctional Facility',
      description:
        'Incarcerated individuals can be served through the warden or designated agent of the correctional facility.',
      details:
        'Under Oklahoma law, serving an incarcerated person typically involves coordinating with the facility\'s legal mail department or the warden\'s office. The process server delivers the documents to the facility, which then provides them to the inmate. Some facilities have specific procedures and time windows for legal service. This method adds a facility-processing layer but is generally reliable. Plan for additional time due to facility intake procedures.',
      statute: '12 O.S. § 2004(F)',
      statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
      pros: ['Defendant is locatable', 'Facility provides documentation', 'Reliable delivery'],
      cons: ['Additional facility fee (+$25)', 'Subject to facility schedules and intake delays', 'May take extra time'],
    };
  }

  // Minor
  if (recipient === 'minor') {
    return {
      method: 'Personal Service on Minor + Parent/Guardian',
      description:
        'Minors under 18 must be served personally, with a copy also served on a parent or legal guardian.',
      details:
        'Oklahoma law requires service on a minor to include delivery of the summons and petition to the minor personally, plus a copy to the minor\'s parent, guardian, or person having legal custody. If no parent or guardian can be found after reasonable inquiry, the court may authorize service on another appropriate adult or by another method. Serving minors involves extra steps but ensures due process protections for young defendants.',
      statute: '12 O.S. § 2004(B)',
      statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
      pros: ['Legally compliant for minor defendants', 'Protects minor\'s due process rights'],
      cons: ['Requires locating and serving two people', 'Adds time and cost', 'More complex logistics'],
    };
  }

  // VPO / protective order — 24-hour priority
  if (docType === 'vpo') {
    return {
      method: 'Priority Personal Service (24-Hour)',
      description:
        'Victim protective orders require priority service — typically within 24 hours of issuance.',
      details:
        'Under 22 O.S. § 60.4, protective orders receive priority handling. Law enforcement typically serves VPOs, but private process servers can also handle these with the proper urgency. Same-day or next-day service is essential. The respondent must be personally served because VPOs carry significant legal consequences, including restrictions on firearm possession and potential criminal penalties for violation.',
      statute: '22 O.S. § 60.4',
      statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=60.4&title=22',
      pros: ['Priority handling available', 'Full legal protection for petitioner once served', 'Personal service ensures respondent is aware'],
      cons: ['Must be done urgently', 'Respondent may evade service', 'Higher cost for rush service'],
    };
  }

  // Urgency-based recommendations for individuals
  if (urgency === 'emergency') {
    return {
      method: 'Emergency Same-Day Personal Service',
      description:
        'For same-day emergencies, a dedicated process server will make immediate, repeated attempts until service is completed.',
      details:
        'Emergency service is designed for time-sensitive situations — pending hearings, TROs, imminent deadlines, or court-ordered same-day service. The server will attempt service at home and work addresses, using stakeout techniques if necessary. This is the fastest and most reliable method but carries premium pricing. Call Just Legal Solutions at (539) 367-6832 for immediate emergency dispatch.',
      statute: '12 O.S. § 2004(A)',
      statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
      pros: ['Fastest possible service', 'Multiple same-day attempts', 'Direct proof of service'],
      cons: ['Highest cost tier', 'Not guaranteed if subject is unreachable', 'May require stakeout time'],
    };
  }

  if (urgency === 'rush') {
    return {
      method: 'Rush Personal Service (1–2 Days)',
      description:
        'Rush service prioritizes your documents for completion within 24–48 hours.',
      details:
        'Rush personal service is ideal when you have an approaching deadline but do not need same-day completion. The process server will make the first attempt within hours of receiving the documents, with follow-up attempts as needed. This balances speed and cost effectively, and provides the reliability of personal service with affidavit documentation.',
      statute: '12 O.S. § 2004(A)',
      statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
      pros: ['Fast turnaround', 'Reliable personal service', 'Documented with affidavit'],
      cons: ['Higher fee than standard service', 'Still requires locating the defendant'],
    };
  }

  // Last known address — substituted service may be appropriate
  if (address === 'last-known') {
    return {
      method: 'Personal Service with Skip Trace Backup',
      description:
        'Attempt personal service at the last known address; if the person has moved, upgrade to a skip trace to locate their current residence.',
      details:
        'Starting with the last known address is a reasonable first step. If the person no longer resides there, neighbors or the current occupant may provide forwarding information. If service fails, a skip trace adds database searches and investigative techniques to locate the current address. This two-phase approach is cost-effective — you only pay for skip tracing if the initial attempt fails.',
      statute: '12 O.S. § 2004(A)',
      statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
      pros: ['Cost-effective two-phase approach', 'Skip trace only if needed', 'High success rate'],
      cons: ['Adds time if skip trace is needed', 'Additional skip trace fee if upgraded'],
    };
  }

  // Default: Standard personal service for individuals
  return {
    method: 'Personal Service',
    description:
      'The gold standard for service of process — personal delivery directly to the defendant.',
    details:
      'Personal service means delivering the summons and petition directly to the named defendant. Under 12 O.S. § 2004(A), this is accomplished by delivering a copy of the summons and petition to the defendant personally. This method provides the strongest legal foundation for your case, is the hardest for a defendant to challenge, and creates clear evidence of service via the server\'s affidavit. For most individual defendants with a known home or work address, personal service is the recommended approach.',
    statute: '12 O.S. § 2004(A)',
    statuteUrl: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
    pros: ['Highest legal validity', 'Hard to challenge', 'Clear proof via affidavit', 'Creates personal jurisdiction'],
    cons: ['Defendant may evade service', 'Requires knowing their location', 'May need multiple attempts'],
  };
}

// --- Citations ---
const CITATIONS = [
  {
    title: '12 O.S. § 2004 — Methods of Service of Process',
    url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12',
    description: 'Oklahoma statutes governing methods of service of process.',
  },
  {
    title: '12 O.S. § 2006 — Computation of Time',
    url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2006&title=12',
    description: 'Rules for computing time periods under Oklahoma civil procedure.',
  },
  {
    title: '50 U.S.C. § 3901 et seq. — Servicemembers Civil Relief Act',
    url: 'https://www.justice.gov/civil/servicemembers-civil-relief-act-scra',
    description: 'Federal law protecting active-duty military members.',
  },
];

export default function ServiceMethodWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const question = QUESTIONS[currentStep];
  const totalSteps = QUESTIONS.length;
  const recommendation = showResult ? getRecommendation(answers) : null;

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

  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Service Method Wizard"
        pageDescription="Service Method Wizard — Just Legal Solutions, Oklahoma process server and legal support services."
        pageUrl="https://justlegalsolutions.org/oklahoma-tools/service-method-wizard"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Method Wizard', url: '/oklahoma-tools/service-method-wizard' },
        ]}
      />
    <HubPageLayout
      title="Service Method Wizard"
      description="Answer 5 questions to find the right Oklahoma process serving method for your specific situation."
      citations={CITATIONS}
      showDisclaimer={true}
    >
      {/* Introduction */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-navy mb-3">
          Find the Right Service Method
        </h2>
        <p className="text-text-dark mb-3">
          Oklahoma law provides several methods for serving legal documents, each
          suited to different circumstances. Choosing the wrong method can delay your
          case, increase costs, or even result in a service challenge. This wizard
          asks five key questions about your situation and recommends the most
          appropriate service method under Oklahoma statutes.
        </p>
        <p className="text-text-dark">
          The wizard considers the type of document, who you are serving, whether
          you have a current address, how quickly you need service completed, and
          your budget priorities. The result includes a detailed explanation of the
          recommended method, its pros and cons, and the governing statutory
          citation. Always consult a licensed Oklahoma attorney for case-specific
          advice.
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
          <div className="w-full bg-gray-200 rounded-full h-2" role="progressbar" aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={totalSteps}>
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
          <h3 className="text-lg font-semibold text-navy mb-4">
            {question.text}
          </h3>

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
                      {isSelected && (
                        <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                      )}
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

          {/* Back Button */}
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
      {showResult && recommendation && (
        <div className="space-y-6 mb-8">
          {/* Success Banner */}
          <div className="bg-green-50 border border-green-300 rounded-lg p-5">
            <p className="text-sm text-green-700 font-medium mb-1">
              Recommended Service Method
            </p>
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              {recommendation.method}
            </h3>
            <p className="text-green-800 text-sm">{recommendation.description}</p>
          </div>

          {/* Details */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 md:p-6">
            <h4 className="text-base font-semibold text-navy mb-3">How It Works</h4>
            <p className="text-text-dark text-sm mb-4">{recommendation.details}</p>

            <h4 className="text-base font-semibold text-navy mb-2">Governing Statute</h4>
            <p className="text-sm mb-4">
              <a
                href={recommendation.statuteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-indigo-800 font-medium"
              >
                {recommendation.statute}
              </a>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-md p-4">
                <p className="text-sm font-semibold text-green-800 mb-2">Advantages</p>
                <ul className="space-y-1">
                  {recommendation.pros.map((pro, i) => (
                    <li key={i} className="text-sm text-green-800 flex items-start gap-2">
                      <span aria-hidden="true">&#10003;</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-md p-4">
                <p className="text-sm font-semibold text-red-800 mb-2">Considerations</p>
                <ul className="space-y-1">
                  {recommendation.cons.map((con, i) => (
                    <li key={i} className="text-sm text-red-800 flex items-start gap-2">
                      <span aria-hidden="true">&#8226;</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Your Answers Summary */}
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
              Start Over
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
        <h2 className="text-xl font-bold text-navy">About Oklahoma Service Methods</h2>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Personal Service (12 O.S. § 2004(A))
          </h3>
          <p className="text-text-dark text-sm">
            Personal service is the preferred method under Oklahoma law. It involves
            delivering the summons and petition directly to the defendant. This method
            establishes personal jurisdiction, is the hardest to challenge, and provides
            clear proof through the process server\'s affidavit. It works for individuals
            at home, work, or any place they can be found. Multiple attempts are common
            and expected — professionalism and persistence are key.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Substituted Service (12 O.S. § 2004(C)(2))
          </h3>
          <p className="text-text-dark text-sm">
            Substituted service allows delivery to a person of suitable age and
            discretion residing at the defendant\'s dwelling house or usual place of
            abode. This method is useful when the defendant is not personally available
            but someone else at their residence can accept service. It is not available
            for all document types and has specific requirements that must be met.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Service by Certified Mail (12 O.S. § 2004(D))
          </h3>
          <p className="text-text-dark text-sm">
            Certified mail with return receipt requested is permitted for certain
            document types, particularly subsequent filings and some motions. It is
            generally not valid for initial service of summons unless the defendant
            has agreed to accept service by mail. The receipt must be filed with the
            court as proof of service.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Service by Publication (12 O.S. § 2004(C)(3))
          </h3>
          <p className="text-text-dark text-sm">
            Publication is a last-resort method used when a defendant cannot be
            located after diligent search. It requires court authorization and
            publication in a qualified newspaper once per week for three consecutive
            weeks. After final publication, 41 days must pass before a default may be
            entered. This method is slow, expensive, and has a low response rate — but
            it satisfies due process requirements when no other method is possible.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-base font-semibold text-navy mb-2">
            Secretary of State Service (12 O.S. § 2004(C)(1))
          </h3>
          <p className="text-text-dark text-sm">
            Oklahoma corporations and LLCs must maintain a registered agent for
            service of process. If the registered agent cannot be served, the Oklahoma
            Secretary of State becomes the statutory agent for service. This method is
            highly reliable for business entities and creates an official record of
            service through the Secretary of State\'s office.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy text-white rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Need Professional Process Serving?</h3>
        <p className="text-white/80 text-sm mb-4">
          Just Legal Solutions serves all 77 Oklahoma counties with licensed,
          experienced process servers. We handle personal service, rush jobs,
          evictions, VPOs, and more.
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
