'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { 
  Printer, 
  RotateCcw, 
  Trash2,
  Plus,
  Share2,
  Check,
  Scale,
  Sparkles
} from 'lucide-react';

export type DocumentType = 
  | 'AFFIDAVIT OF SERVICE'
  | 'DECLARATION OF SERVICE'
  | 'AFFIDAVIT OF NON-SERVICE'
  | 'DECLARATION OF NON-SERVICE';

interface Attempt {
  id: number;
  date: string;
  time: string;
  notes: string;
}

export default function AffidavitOfService() {
  // Document Type & Mode
  const [docType, setDocType] = useState<DocumentType>('AFFIDAVIT OF SERVICE');

  // Case / Caption Details
  const [courtName, setCourtName] = useState('IN THE DISTRICT COURT OF TULSA COUNTY, STATE OF OKLAHOMA');
  const [plaintiff, setPlaintiff] = useState('');
  const [defendant, setDefendant] = useState('');
  const [caseNumber, setCaseNumber] = useState('');
  const [county, setCounty] = useState('Tulsa');
  const [stateName, setStateName] = useState('Oklahoma');
  const [recipientName, setRecipientName] = useState('');

  // Process Server Credentials
  const [serverName, setServerName] = useState('Joseph Iannazzi');
  const [serverLicense, setServerLicense] = useState('PSL-2026-2');
  const [serverCompany, setServerCompany] = useState('Just Legal Solutions');
  const [serverPhone, setServerPhone] = useState('(539) 367-6832');
  const [serverEmail, setServerEmail] = useState('info@justlegalsolutions.org');

  // Service Details
  const [documentsLine, setDocumentsLine] = useState('Summons, Petition, and Notice of Hearing');
  const [serviceAddress, setServiceAddress] = useState('');
  const [serviceMethod, setServiceMethod] = useState<'personal' | 'substituted-residence' | 'substituted-business' | 'corporate' | 'posting' | 'non-service' | 'custom'>('personal');
  const [acceptedBy, setAcceptedBy] = useState('');
  const [recipientTitle, setRecipientTitle] = useState('Registered Agent');
  const [customExecutionText, setCustomExecutionText] = useState('');

  // Comments / Narrative Notes
  const [comments, setComments] = useState('');

  // Declaration Execution Info
  const [execDate, setExecDate] = useState('');
  const [execCity, setExecCity] = useState('Tulsa, OK');

  // Notary Block Info
  const [notaryState, setNotaryState] = useState('Oklahoma');
  const [notaryCounty, setNotaryCounty] = useState('Tulsa');
  const [swornDayPhrase, setSwornDayPhrase] = useState('');

  // Attempts Log (Chronological)
  const [attempts, setAttempts] = useState<Attempt[]>([
    { id: 1, date: '', time: '', notes: '' },
    { id: 2, date: '', time: '', notes: '' },
  ]);

  const [copiedLink, setCopiedLink] = useState(false);
  const commentsRef = useRef<HTMLTextAreaElement>(null);

  const isDeclaration = docType.includes('DECLARATION');
  const isNonService = docType.includes('NON-SERVICE') || serviceMethod === 'non-service';

  // Set default sworn date phrase and execution date
  useEffect(() => {
    const today = new Date();
    const ordinal = (n: number) => {
      const j = n % 10, k = n % 100;
      if (j === 1 && k !== 11) return `${n}st`;
      if (j === 2 && k !== 12) return `${n}nd`;
      if (j === 3 && k !== 13) return `${n}rd`;
      return `${n}th`;
    };
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const phrase = `this ${ordinal(today.getDate())} day of ${months[today.getMonth()]}, ${today.getFullYear()}`;
    if (!swornDayPhrase) setSwornDayPhrase(phrase);

    const dateStr = today.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    if (!execDate) setExecDate(dateStr);
  }, [swornDayPhrase, execDate]);

  // Sync title when method changes
  useEffect(() => {
    if (serviceMethod === 'non-service') {
      if (isDeclaration && docType !== 'DECLARATION OF NON-SERVICE') setDocType('DECLARATION OF NON-SERVICE');
      if (!isDeclaration && docType !== 'AFFIDAVIT OF NON-SERVICE') setDocType('AFFIDAVIT OF NON-SERVICE');
    } else {
      if (isDeclaration && docType !== 'DECLARATION OF SERVICE') setDocType('DECLARATION OF SERVICE');
      if (!isDeclaration && docType !== 'AFFIDAVIT OF SERVICE') setDocType('AFFIDAVIT OF SERVICE');
    }
  }, [serviceMethod, isDeclaration, docType]);

  // URL Query Parameters Pre-fill
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (!params.toString()) return;

    const getParam = (...keys: string[]) => {
      for (const k of keys) {
        const val = params.get(k);
        if (val !== null && val !== undefined) return val;
      }
      return null;
    };

    const cName = getParam('court', 'court_name', 'Name of Court');
    if (cName) setCourtName(cName);
    const cNum = getParam('case', 'case_num', 'Case Number');
    if (cNum) setCaseNumber(cNum);
    const pl = getParam('plaintiff', 'petitioner', 'Plaintiff/Petitioner');
    if (pl) setPlaintiff(pl);
    const def = getParam('defendant', 'respondent', 'Defendant/Respondent');
    if (def) setDefendant(def);
    const rec = getParam('recipient', 'target', 'Recipient Name');
    if (rec) setRecipientName(rec);
    const addr = getParam('address', 'service_address', 'Address', 'location');
    if (addr) setServiceAddress(addr);
    const docs = getParam('docs', 'documents_served', 'Documents');
    if (docs) setDocumentsLine(docs);
    const sName = getParam('server', 'server_name', 'Server Name');
    if (sName) setServerName(sName);
    const sCo = getParam('company', 'agency', 'Company');
    if (sCo) setServerCompany(sCo);
    const sLic = getParam('license', 'License');
    if (sLic) setServerLicense(sLic);
    const sPh = getParam('phone', 'Phone');
    if (sPh) setServerPhone(sPh);
    const sEm = getParam('email', 'Email');
    if (sEm) setServerEmail(sEm);
    const cty = getParam('county', 'County');
    if (cty) { setCounty(cty); setNotaryCounty(cty); }
    const st = getParam('state', 'State');
    if (st) { setStateName(st); setNotaryState(st); }

    const t = getParam('type', 'doc_type');
    if (t) {
      const u = t.toUpperCase();
      if (u.includes('DECLARATION') && u.includes('NON-SERVICE')) setDocType('DECLARATION OF NON-SERVICE');
      else if (u.includes('DECLARATION')) setDocType('DECLARATION OF SERVICE');
      else if (u.includes('NON-SERVICE')) setDocType('AFFIDAVIT OF NON-SERVICE');
      else setDocType('AFFIDAVIT OF SERVICE');
    }
  }, []);

  const handlePrint = useCallback(() => {
    const originalTitle = document.title;
    if (caseNumber.trim()) {
      document.title = `${caseNumber.trim()} - ${docType.replace(/\s+/g, '_')}`;
    } else {
      document.title = docType;
    }
    window.print();
    setTimeout(() => { document.title = originalTitle; }, 1000);
  }, [caseNumber, docType]);

  const handleShare = () => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.origin + window.location.pathname);
    url.searchParams.set('type', docType);
    if (courtName) url.searchParams.set('court', courtName);
    if (caseNumber) url.searchParams.set('case', caseNumber);
    if (plaintiff) url.searchParams.set('plaintiff', plaintiff);
    if (defendant) url.searchParams.set('defendant', defendant);
    if (recipientName) url.searchParams.set('recipient', recipientName);
    if (serviceAddress) url.searchParams.set('address', serviceAddress);
    if (documentsLine) url.searchParams.set('docs', documentsLine);
    if (serverName) url.searchParams.set('server', serverName);
    if (serverCompany) url.searchParams.set('company', serverCompany);
    if (serverLicense) url.searchParams.set('license', serverLicense);
    if (serverPhone) url.searchParams.set('phone', serverPhone);
    if (serverEmail) url.searchParams.set('email', serverEmail);
    if (county) url.searchParams.set('county', county);
    if (stateName) url.searchParams.set('state', stateName);

    navigator.clipboard.writeText(url.toString()).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    });
  };

  const addAttempt = () => {
    if (attempts.length >= 8) return;
    setAttempts(prev => [...prev, { id: prev.length + 1, date: '', time: '', notes: '' }]);
  };

  const removeAttempt = (id: number) => {
    if (attempts.length <= 1) return;
    setAttempts(prev => prev.filter(a => a.id !== id));
  };

  const updateAttempt = (id: number, field: keyof Attempt, val: string) => {
    setAttempts(prev => prev.map(a => a.id === id ? { ...a, [field]: val } : a));
  };

  const handleReset = () => {
    if (window.confirm('Clear all fields to a blank template?')) {
      setDocType('AFFIDAVIT OF SERVICE');
      setCourtName('');
      setPlaintiff('');
      setDefendant('');
      setCaseNumber('');
      setCounty('');
      setStateName('');
      setRecipientName('');
      setDocumentsLine('');
      setServiceAddress('');
      setAcceptedBy('');
      setCustomExecutionText('');
      setComments('');
      setServerName('');
      setServerLicense('');
      setServerCompany('');
      setServerPhone('');
      setServerEmail('');
      setAttempts([{ id: 1, date: '', time: '', notes: '' }]);
    }
  };

  // ServeTracker Statutory Execution Sentence
  const getExecutionSentence = () => {
    if (customExecutionText.trim()) return customExecutionText;
    const target = recipientName.trim() || 'the recipient named herein';
    const docs = documentsLine.trim() ? 'true and correct copies of the documents listed above' : 'true and correct copies of the legal process';
    const acc = acceptedBy.trim() || 'a person authorized to accept service';

    switch (serviceMethod) {
      case 'personal':
        return `I executed personal service upon ${target} by personally delivering ${docs} to ${target}.`;
      case 'substituted-residence':
        return `I executed substituted service upon ${target} by leaving ${docs} at the dwelling house or usual place of abode of ${target} with ${acc}, a person of suitable age and discretion residing therein, and I explained the general nature of the papers.`;
      case 'substituted-business':
        return `I executed substituted service upon ${target} by leaving, during regular business hours, ${docs} at the office / place of employment of ${target} with ${acc}, the person apparently in charge thereof.`;
      case 'corporate':
        return `I executed service of process upon ${target} by delivering ${docs} to ${acc}, the ${recipientTitle || 'Registered Agent'} authorized to accept service on behalf of said entity.`;
      case 'posting':
        return `I executed service upon ${target} by posting ${docs} in a conspicuous manner upon the front entrance door of the premises after diligent attempts.`;
      case 'non-service':
        return `After due search, careful inquiry, and diligent attempts at the address(es) listed above, I have been unable to effect process upon ${target} for the reasons recorded in the log above.`;
      default:
        return `I executed service of ${docs} upon ${target} in accordance with statutory civil procedure.`;
    }
  };

  return (
    <>
      <style jsx global>{`
        @page {
          size: letter portrait;
          margin: 0.35in 0.45in;
        }
        @media print {
          * {
            background-color: transparent !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          html, body {
            background: #fff !important;
            padding: 0 !important;
            margin: 0 !important;
            height: auto !important;
            overflow: visible !important;
            font-size: 10pt !important;
          }
          header, footer, footer#contact, nav, .navbar, .site-footer, .breadcrumb, .no-print-affidavit, [aria-label="Call or contact Just Legal Solutions"], .fixed, .sticky, [class*="sticky"], [class*="Sticky"], #mobile-menu, .ui-mobile-safe-panel, .ui-glass-nav {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            max-height: 0 !important;
            overflow: hidden !important;
            padding: 0 !important;
            margin: 0 !important;
            border: none !important;
            position: static !important;
          }
          .affidavit-wrapper {
            background: #fff !important;
            padding: 0 !important;
            margin: 0 !important;
            min-height: 0 !important;
          }
          main, .flex.flex-col.min-h-screen, .flex.flex-col.min-h-screen > main {
            padding: 0 !important;
            margin: 0 !important;
            min-height: 0 !important;
            background: #fff !important;
            display: block !important;
          }
          .pt-14 {
            padding-top: 0 !important;
          }
          .affidavit-page {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
            background: #fff !important;
            overflow: visible !important;
          }
          .screen-only {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
          .print-only-inline {
            display: inline !important;
          }
          .page-break-avoid {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }
      `}</style>

      {/* Top Mobile/Desktop Toolbar */}
      <div className="no-print-affidavit max-w-4xl mx-auto px-3 sm:px-4 mb-4">
        <div className="bg-slate-900 text-white rounded-xl shadow-lg p-3 sm:p-4 border border-slate-800 space-y-3">
          
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2.5 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-400 shrink-0" />
              <h2 className="font-bold text-sm sm:text-base text-white">ServeTracker Legal Affidavit &amp; Declaration</h2>
              <span className="bg-blue-600/30 text-blue-300 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border border-blue-500/30">
                50-State &amp; Federal
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-1.5 rounded-lg font-semibold text-xs shadow transition-all active:scale-95 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg font-semibold text-xs shadow transition-all active:scale-95 cursor-pointer"
                title="Copy shareable link"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied' : 'Share'}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all active:scale-95 cursor-pointer border border-slate-700"
                title="Clear form"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear</span>
              </button>
            </div>
          </div>

          {/* Mode & Method Selector Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-semibold shrink-0">Document Mode:</span>
              <select
                value={docType}
                onChange={(e) => setDocType(e.target.value as DocumentType)}
                className="bg-slate-800 border border-slate-700 text-white text-xs font-bold rounded-lg px-2.5 py-1.5 outline-none focus:border-blue-500 cursor-pointer w-full"
              >
                <option value="AFFIDAVIT OF SERVICE">Affidavit of Service (Sworn &amp; Notarized)</option>
                <option value="DECLARATION OF SERVICE">Declaration of Service (Penalty of Perjury)</option>
                <option value="AFFIDAVIT OF NON-SERVICE">Affidavit of Non-Service (Notarized Log)</option>
                <option value="DECLARATION OF NON-SERVICE">Declaration of Non-Service (Diligent Search)</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-semibold shrink-0">Manner / Method:</span>
              <select
                value={serviceMethod}
                onChange={(e) => setServiceMethod(e.target.value as any)}
                className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 outline-none focus:border-blue-500 cursor-pointer w-full"
              >
                <option value="personal">Personal Service (Delivered directly to recipient)</option>
                <option value="substituted-residence">Substitute (Residence — suitable age &amp; discretion)</option>
                <option value="substituted-business">Substitute (Business — person in charge)</option>
                <option value="corporate">Corporate / Registered Agent</option>
                <option value="posting">Posting (Conspicuous place on premises)</option>
                <option value="non-service">Non-Service (Diligent Inquiry &amp; Attempts)</option>
                <option value="custom">Custom Manner (Type custom text)</option>
              </select>
            </div>
          </div>

          {/* Substituted / Corporate Helper Inputs */}
          {['substituted-residence', 'substituted-business', 'corporate'].includes(serviceMethod) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 font-semibold block mb-0.5">Accepted By / Co-Resident Name:</span>
                <input
                  type="text"
                  value={acceptedBy}
                  onChange={(e) => setAcceptedBy(e.target.value)}
                  placeholder="e.g. Jane Doe (Wife / Co-Resident)"
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
                />
              </div>
              {serviceMethod === 'corporate' && (
                <div>
                  <span className="text-slate-400 font-semibold block mb-0.5">Recipient Title / Capacity:</span>
                  <input
                    type="text"
                    value={recipientTitle}
                    onChange={(e) => setRecipientTitle(e.target.value)}
                    placeholder="e.g. Registered Agent / Managing Member"
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ServeTracker Exact Legal Document Sheet */}
      <div className="affidavit-wrapper max-w-4xl mx-auto px-2 sm:px-4 pb-12">
        <div
          className="affidavit-page bg-white text-black shadow-xl rounded-sm p-6 sm:p-8 border border-slate-300"
          style={{
            fontFamily: '"Times New Roman", Times, Georgia, serif',
            color: '#000',
            fontSize: '10pt',
            lineHeight: 1.18,
          }}
        >
          {/* Header Court Title */}
          <div className="text-center font-bold text-xs uppercase mb-2 tracking-wide">
            <input
              type="text"
              value={courtName}
              onChange={(e) => setCourtName(e.target.value)}
              placeholder="IN THE DISTRICT COURT OF TULSA COUNTY, STATE OF OKLAHOMA"
              aria-label="Court Name"
              className="w-full text-center font-bold text-xs uppercase bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 screen-only"
            />
            <div className="print-only hidden text-center font-bold text-xs uppercase">
              {courtName || 'IN THE DISTRICT COURT'}
            </div>
          </div>

          {/* ServeTracker Exact 2-Column Caption Box */}
          <table className="w-full border-collapse mb-2" style={{ tableLayout: 'fixed', borderTop: '2px solid #000', borderBottom: '2px solid #000' }}>
            <tbody>
              <tr>
                {/* Left (55%): Caption */}
                <td style={{ width: '55%', verticalAlign: 'top', padding: '4px 10px 4px 2px', borderRight: '2px solid #000' }}>
                  <div>
                    <input
                      type="text"
                      value={plaintiff}
                      onChange={(e) => setPlaintiff(e.target.value)}
                      placeholder="PETITIONER / PLAINTIFF NAME(S)"
                      aria-label="Plaintiff"
                      className="w-full font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none screen-only"
                    />
                    <div className="print-only hidden font-bold">
                      {plaintiff || 'PETITIONER / PLAINTIFF'}
                    </div>
                  </div>
                  <div className="italic text-[9.5pt] text-gray-800">Plaintiff/Petitioner,</div>
                  
                  <div className="font-bold my-1 text-center text-gray-700 text-xs">vs.</div>
                  
                  <div>
                    <input
                      type="text"
                      value={defendant}
                      onChange={(e) => setDefendant(e.target.value)}
                      placeholder="DEFENDANT / RESPONDENT NAME(S)"
                      aria-label="Defendant"
                      className="w-full font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none screen-only"
                    />
                    <div className="print-only hidden font-bold">
                      {defendant || recipientName || 'DEFENDANT / RESPONDENT'}
                    </div>
                  </div>
                  <div className="italic text-[9.5pt] text-gray-800">Defendant/Respondent.</div>
                </td>

                {/* Right (45%): Case # & Person Served */}
                <td style={{ width: '45%', verticalAlign: 'top', padding: '4px 2px 4px 10px' }}>
                  <div className="mb-2">
                    <span className="font-bold text-[10pt] uppercase">CASE NO. </span>
                    <input
                      type="text"
                      value={caseNumber}
                      onChange={(e) => setCaseNumber(e.target.value)}
                      placeholder="CJ-2026-01234"
                      aria-label="Case Number"
                      className="font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none w-36 screen-only"
                    />
                    <span className="print-only-inline hidden font-bold text-[10pt]">
                      {caseNumber || '____________________'}
                    </span>
                  </div>

                  <div>
                    <span className="font-bold text-[9pt] uppercase block">PERSON SERVED / ATTEMPTED:</span>
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="Target Recipient Full Name"
                      aria-label="Recipient Name"
                      className="w-full font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none screen-only"
                    />
                    <div className="print-only hidden font-bold text-[10pt]">
                      {recipientName || '________________________________'}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Title */}
          <div className="text-center font-bold text-[11.5pt] uppercase underline my-2 tracking-wider">
            {docType}
          </div>

          {/* Competency Statement */}
          <p className="text-justify text-[10pt] mb-2 leading-snug">
            {isDeclaration ? (
              <>
                I, <strong><input
                  type="text"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                  placeholder="Server Full Name"
                  className="font-bold border-b border-black outline-none px-1 bg-transparent min-w-[140px] screen-only"
                /><span className="print-only-inline hidden font-bold">{serverName || '___________________________'}</span></strong>, declare under penalty of perjury under the laws of the State of <input
                  type="text"
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                  placeholder="State"
                  className="font-bold border-b border-black outline-none px-1 bg-transparent w-20 screen-only"
                /><span className="print-only-inline hidden font-bold">{stateName || '_________'}</span> and the United States of America that I am a legally authorized Private Process Server{serverLicense.trim() ? ` (License No. ${serverLicense})` : ''}, over the age of eighteen (18) years, and not a party to nor interested in the outcome of the above-entitled action.
              </>
            ) : (
              <>
                I, <strong><input
                  type="text"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                  placeholder="Server Full Name"
                  className="font-bold border-b border-black outline-none px-1 bg-transparent min-w-[140px] screen-only"
                /><span className="print-only-inline hidden font-bold">{serverName || '___________________________'}</span></strong>, being duly sworn, depose and state that I am a duly licensed Private Process Server in the State of <input
                  type="text"
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                  placeholder="State"
                  className="font-bold border-b border-black outline-none px-1 bg-transparent w-20 screen-only"
                /><span className="print-only-inline hidden font-bold">{stateName || '_________'}</span>{serverLicense.trim() ? ` (License No. ${serverLicense})` : ''}, over the age of eighteen (18) years, and not a party to nor interested in the outcome of the above-entitled action.
              </>
            )}
          </p>

          {/* Documents Line */}
          <div className="mb-1 text-[9.5pt]">
            <strong className="uppercase font-bold text-[9pt] block">Documents:</strong>
            <input
              type="text"
              value={documentsLine}
              onChange={(e) => setDocumentsLine(e.target.value)}
              placeholder="e.g. Summons, Petition, Notice of Hearing"
              className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none screen-only"
            />
            <div className="print-only hidden font-medium">
              {documentsLine || 'Legal process in this action'}
            </div>
          </div>

          {/* Service Address */}
          <div className="mb-2 text-[9.5pt]">
            <strong className="uppercase font-bold text-[9pt]">Service Address: </strong>
            <input
              type="text"
              value={serviceAddress}
              onChange={(e) => setServiceAddress(e.target.value)}
              placeholder="Street Address, Suite/Apt, City, State, ZIP"
              className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-[75%] screen-only"
            />
            <span className="print-only-inline hidden font-medium">
              {serviceAddress || '__________________________________________________'}
            </span>
          </div>

          {/* Service Attempts (Physical) - Exact ServeTracker Table */}
          <div className="mb-2 page-break-avoid">
            <div className="flex items-center justify-between mb-1">
              <strong className="uppercase font-bold text-[9pt]">Service Attempts (Physical):</strong>
              <button
                type="button"
                onClick={addAttempt}
                className="no-print-affidavit text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded font-semibold cursor-pointer border border-slate-300"
              >
                + Add Attempt
              </button>
            </div>

            <table className="w-full border-collapse border border-black text-[9.5pt]" style={{ tableLayout: 'fixed' }}>
              <thead>
                <tr className="bg-gray-100 uppercase text-[8pt] border-b border-black">
                  <th style={{ width: '28%', borderRight: '1px solid #333', padding: '2px 6px', textAlign: 'left' }}>Attempt</th>
                  <th style={{ width: '72%', padding: '2px 6px', textAlign: 'left' }}>Date &amp; Time</th>
                </tr>
              </thead>
              <tbody>
                {attempts.map((att, idx) => (
                  <tr key={att.id} className="border-b border-gray-300 last:border-b-0">
                    <td style={{ borderRight: '1px solid #333', padding: '2px 6px', fontWeight: 'bold' }}>
                      Attempt {idx + 1}
                    </td>
                    <td style={{ padding: '2px 6px' }}>
                      <div className="flex items-center gap-2 screen-only">
                        <input
                          type="text"
                          value={att.date}
                          onChange={(e) => updateAttempt(att.id, 'date', e.target.value)}
                          placeholder="MM/DD/YYYY"
                          className="w-24 bg-transparent border-b border-gray-200 focus:border-black outline-none text-xs"
                        />
                        <input
                          type="text"
                          value={att.time}
                          onChange={(e) => updateAttempt(att.id, 'time', e.target.value)}
                          placeholder="10:30 AM"
                          className="w-20 bg-transparent border-b border-gray-200 focus:border-black outline-none text-xs"
                        />
                        {attempts.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeAttempt(att.id)}
                            className="no-print-affidavit text-red-500 hover:text-red-700 ml-auto cursor-pointer"
                            title="Remove attempt"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                      <div className="print-only hidden">
                        {[att.date, att.time].filter(Boolean).join(' at ') || '—'}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Comments / Due Diligence Box - Exact ServeTracker Style */}
          <div className="mb-2 page-break-avoid">
            <strong className="uppercase font-bold text-[9pt] block mb-0.5">Comments:</strong>
            <textarea
              ref={commentsRef}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Attempt 1: No answer at residence, vehicle in driveway...\nAttempt 2: Spoke with neighbor who confirmed occupancy..."
              rows={2}
              className="w-full bg-transparent border border-black p-1 text-[9.5pt] leading-tight resize-y screen-only"
            />
            <div className="print-only hidden border border-black p-1.5 text-[9.5pt] leading-snug min-h-[40px] whitespace-pre-wrap">
              {comments || 'No additional comments.'}
            </div>
          </div>

          {/* Statutory Execution Sentence Paragraph */}
          <div className="mb-3 text-[10pt] leading-snug page-break-avoid font-normal">
            {serviceMethod === 'custom' ? (
              <textarea
                value={customExecutionText}
                onChange={(e) => setCustomExecutionText(e.target.value)}
                placeholder="Type custom sworn execution statement..."
                rows={2}
                className="w-full bg-transparent border border-gray-300 focus:border-black p-1 text-[9.5pt] screen-only"
              />
            ) : null}
            <div className={serviceMethod === 'custom' ? 'print-only hidden' : ''}>
              <span dangerouslySetInnerHTML={{ __html: getExecutionSentence() }} />
            </div>
          </div>

          {/* ServeTracker Exact Signature & Notary Block */}
          <div className="sig-block pt-1 page-break-avoid">
            {isDeclaration ? (
              /* ─── UNSWORN DECLARATION FOOTER ─── */
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td style={{ width: '48%', verticalAlign: 'top', fontSize: '9.5pt' }}>
                      <div className="mb-1">
                        <strong>Executed on: </strong>
                        <input
                          type="text"
                          value={execDate}
                          onChange={(e) => setExecDate(e.target.value)}
                          placeholder="MM/DD/YYYY"
                          className="font-bold border-b border-black bg-transparent outline-none w-28 screen-only"
                        />
                        <span className="print-only-inline hidden font-bold">{execDate || '_________________'}</span>
                      </div>
                      <div>
                        <strong>At: </strong>
                        <input
                          type="text"
                          value={execCity}
                          onChange={(e) => setExecCity(e.target.value)}
                          placeholder="City, State"
                          className="font-bold border-b border-black bg-transparent outline-none w-36 screen-only"
                        />
                        <span className="print-only-inline hidden font-bold">{execCity || '_________________'}</span>
                      </div>
                    </td>

                    <td style={{ width: '4%' }}></td>

                    <td style={{ width: '48%', verticalAlign: 'top' }}>
                      <div style={{ borderBottom: '1px solid #000', width: '260px', height: '48px', marginTop: '4px' }}></div>
                      <div style={{ marginTop: '4px', fontSize: '9.5pt', lineHeight: 1.3 }}>
                        <strong>{serverName || 'Process Server / Declarant'}</strong><br />
                        Private Process Server<br />
                        {serverLicense.trim() ? <>License No. {serverLicense}<br /></> : null}
                        {[serverCompany, serverPhone].filter(Boolean).join(' • ')}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              /* ─── SWORN NOTARIZED AFFIDAVIT FOOTER ─── */
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    {/* Process Server LEFT */}
                    <td style={{ width: '48%', verticalAlign: 'top' }}>
                      <div style={{ borderBottom: '1px solid #000', width: '260px', height: '52px', marginTop: '4px' }}></div>
                      <div style={{ marginTop: '4px', fontSize: '9.5pt', lineHeight: 1.3 }}>
                        <strong>{serverName || 'Joseph Iannazzi'}</strong><br />
                        Private Process Server<br />
                        {serverLicense.trim() ? <>License No. {serverLicense}<br /></> : null}
                        {[serverCompany, serverPhone].filter(Boolean).join(' • ')}
                      </div>
                    </td>

                    <td style={{ width: '4%' }}></td>

                    {/* Notary RIGHT — Wet-ink / stamp only */}
                    <td style={{ width: '48%', verticalAlign: 'top' }}>
                      <p style={{ fontSize: '9.5pt', margin: '0 0 4px 0', lineHeight: 1.2 }}>
                        STATE OF <input
                          type="text"
                          value={notaryState.toUpperCase()}
                          onChange={(e) => setNotaryState(e.target.value)}
                          placeholder="STATE"
                          className="font-bold border-b border-black bg-transparent outline-none w-24 screen-only"
                        /><span className="print-only-inline hidden font-bold">{notaryState.toUpperCase()}</span>&nbsp;&nbsp;)<br />
                        COUNTY OF <input
                          type="text"
                          value={notaryCounty.toUpperCase()}
                          onChange={(e) => setNotaryCounty(e.target.value)}
                          placeholder="COUNTY"
                          className="font-bold border-b border-black bg-transparent outline-none w-20 screen-only"
                        /><span className="print-only-inline hidden font-bold">{notaryCounty.toUpperCase()}</span>&nbsp;)&nbsp;ss.
                      </p>
                      <p style={{ fontSize: '9.5pt', margin: '0 0 4px 0', lineHeight: 1.2 }}>
                        Subscribed and sworn to before me {swornDayPhrase}.
                      </p>
                      <div style={{ borderBottom: '1px solid #000', width: '260px', height: '36px', marginTop: '4px' }}></div>
                      <div style={{ marginTop: '3px', fontSize: '9.5pt' }}>
                        Notary Public
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
