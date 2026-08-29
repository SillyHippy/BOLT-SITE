'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { 
  Printer, 
  Share2, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Check, 
  Scale, 
  Sparkles,
  Building2,
  User,
  FileCheck
} from 'lucide-react';

export type DocumentType = 
  | 'AFFIDAVIT OF SERVICE'
  | 'DECLARATION OF SERVICE'
  | 'AFFIDAVIT OF NON-SERVICE'
  | 'DECLARATION OF NON-SERVICE'
  | 'CERTIFICATE OF SERVICE';

interface Attempt {
  id: number;
  date: string;
  time: string;
  notes: string;
}

export default function AffidavitOfService() {
  // Document Type & Jurisdiction
  const [docType, setDocType] = useState<DocumentType>('AFFIDAVIT OF SERVICE');
  const [jurisdictionState, setJurisdictionState] = useState('');
  const [county, setCounty] = useState('');
  
  // Case & Court Info
  const [courtName, setCourtName] = useState('');
  const [caseNumber, setCaseNumber] = useState('');
  const [jobNumber, setJobNumber] = useState('');
  const [plaintiff, setPlaintiff] = useState('');
  const [defendant, setDefendant] = useState('');
  const [clientFirm, setClientFirm] = useState('');

  // Process Server / Affiant Info
  const [serverName, setServerName] = useState('');
  const [serverCompany, setServerCompany] = useState('');
  const [serverPhone, setServerPhone] = useState('');
  const [serverEmail, setServerEmail] = useState('');
  const [serverLicense, setServerLicense] = useState('');

  // Service Details
  const [recipientName, setRecipientName] = useState('');
  const [serviceAddress, setServiceAddress] = useState('');
  const [documentsServed, setDocumentsServed] = useState('');
  const [mannerText, setMannerText] = useState('');
  const [selectedMannerKey, setSelectedMannerKey] = useState<string>('');

  // Military / SCRA Status (Default: Hidden)
  const [showMilitary, setShowMilitary] = useState<boolean>(false);
  const [militaryStatus, setMilitaryStatus] = useState<'not_active' | 'active' | 'unknown'>('not_active');

  // Execution Details (For Declarations)
  const [executionDate, setExecutionDate] = useState('');
  const [executionCity, setExecutionCity] = useState('');

  // Notary Details (For Affidavits)
  const [notaryCounty, setNotaryCounty] = useState('');
  const [notaryState, setNotaryState] = useState('');
  const [commissionExp, setCommissionExp] = useState('');
  const [commissionNum, setCommissionNum] = useState('');

  // Service Attempts Log
  const [attempts, setAttempts] = useState<Attempt[]>([
    { id: 1, date: '', time: '', notes: '' },
  ]);

  // UI feedback
  const [copiedLink, setCopiedLink] = useState(false);

  const mannerTextareaRef = useRef<HTMLTextAreaElement>(null);

  const isDeclaration = docType.includes('DECLARATION') || docType === 'CERTIFICATE OF SERVICE';
  const isNonService = docType.includes('NON-SERVICE');

  // Auto-resize textarea
  const adjustMannerHeight = useCallback(() => {
    if (mannerTextareaRef.current) {
      mannerTextareaRef.current.style.height = 'auto';
      mannerTextareaRef.current.style.height = `${Math.max(64, mannerTextareaRef.current.scrollHeight)}px`;
    }
  }, []);

  useEffect(() => {
    adjustMannerHeight();
  }, [mannerText, adjustMannerHeight]);

  // Set default execution date to today if empty
  useEffect(() => {
    const today = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    if (!executionDate) setExecutionDate(today);
  }, [executionDate]);

  // URL Query Parameter Pre-fill & Backward Compatibility
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

    // Court & Case
    const cName = getParam('Name of Court', 'court', 'court_name');
    if (cName) setCourtName(cName);

    const cNum = getParam('Case Number', 'case', 'case_num', 'caseNumber');
    if (cNum) setCaseNumber(cNum);

    const jNum = getParam('Job Number', 'job', 'job_num', 'jobId');
    if (jNum) setJobNumber(jNum);

    const pl = getParam('Plaintiff/Petitioner', 'plaintiff', 'petitioner');
    if (pl) setPlaintiff(pl);

    const def = getParam('Defendant/Respondent', 'defendant', 'respondent');
    if (def) setDefendant(def);

    const firm = getParam('For', 'firm', 'client', 'client_name');
    if (firm) setClientFirm(firm);

    const cty = getParam('County', 'county');
    if (cty) {
      setCounty(cty);
      setNotaryCounty(cty);
    }

    const st = getParam('State', 'state');
    if (st) {
      setJurisdictionState(st);
      setNotaryState(st);
    }

    // Recipient & Address
    const rec = getParam('Recipient Name', 'recipient', 'target');
    if (rec) setRecipientName(rec);

    const addr = getParam('Address', 'service_address', 'location');
    if (addr) setServiceAddress(addr);

    const docs = getParam('Documents', 'documents_served', 'docs');
    if (docs) setDocumentsServed(docs);

    // Server Info
    const sName = getParam('Server Name', 'server', 'server_name', 'affiant');
    if (sName) setServerName(sName);

    const sCo = getParam('Company', 'company', 'agency');
    if (sCo) setServerCompany(sCo);

    const sLic = getParam('License', 'license', 'server_license');
    if (sLic) setServerLicense(sLic);

    const sPh = getParam('Phone', 'phone', 'server_phone');
    if (sPh) setServerPhone(sPh);

    const sEm = getParam('Email', 'email', 'server_email');
    if (sEm) setServerEmail(sEm);

    const execCity = getParam('city', 'exec_city', 'execution_city');
    if (execCity) setExecutionCity(execCity);

    // Document Type
    const t = getParam('type', 'doc_type', 'doctype');
    const isDeclParam = getParam('declaration', 'is_declaration');
    const isNonServParam = getParam('Non-Service', 'non_service', 'nonservice');

    if (t) {
      const upper = t.toUpperCase();
      if (upper.includes('DECLARATION') && upper.includes('NON-SERVICE')) {
        setDocType('DECLARATION OF NON-SERVICE');
      } else if (upper.includes('DECLARATION')) {
        setDocType('DECLARATION OF SERVICE');
      } else if (upper.includes('NON-SERVICE')) {
        setDocType('AFFIDAVIT OF NON-SERVICE');
      } else if (upper.includes('CERTIFICATE')) {
        setDocType('CERTIFICATE OF SERVICE');
      } else {
        setDocType('AFFIDAVIT OF SERVICE');
      }
    } else if (isNonServParam === 'on' || isNonServParam === 'true' || isNonServParam === '1') {
      if (isDeclParam === 'true' || isDeclParam === '1') {
        setDocType('DECLARATION OF NON-SERVICE');
      } else {
        setDocType('AFFIDAVIT OF NON-SERVICE');
      }
    } else if (isDeclParam === 'true' || isDeclParam === '1') {
      setDocType('DECLARATION OF SERVICE');
    }

    // Military
    const militaryParam = getParam('military', 'scra', 'include_military');
    if (militaryParam === '1' || militaryParam === 'true' || militaryParam === 'on') {
      setShowMilitary(true);
      const mStatus = getParam('military_status');
      if (mStatus === 'active' || mStatus === 'unknown' || mStatus === 'not_active') {
        setMilitaryStatus(mStatus);
      }
    }

    // Manner Presets
    if (params.get('Personal Service') === 'on' || params.get('personal') === '1') {
      applyMannerPreset('personal');
    } else if (params.get('Substituted at Residence') === 'on' || params.get('sub_residence') === '1') {
      applyMannerPreset('sub_residence');
    } else if (params.get('Substituted at Business') === 'on' || params.get('sub_business') === '1') {
      applyMannerPreset('sub_business');
    } else if (params.get('Posting') === 'on' || params.get('posting') === '1') {
      applyMannerPreset('posting');
    } else if (params.get('Unknown at address') === 'on') {
      applyMannerPreset('non_unknown');
    } else if (params.get('Moved left no forwarding') === 'on') {
      applyMannerPreset('non_moved');
    } else if (params.get('Address does not exist') === 'on') {
      applyMannerPreset('non_bad_address');
    } else if (params.get('manner')) {
      setMannerText(params.get('manner') || '');
    }

    // Attempts
    const comments = getParam('Comments', 'comments', 'notes');
    const parsedAttempts: Attempt[] = [];

    for (let i = 1; i <= 8; i++) {
      const d = getParam(`Service attempt ${i} Date`, `attempt_${i}_date`, `attempt${i}Date`);
      const tm = getParam(`Service attempt ${i} time`, `attempt_${i}_time`, `attempt${i}Time`);
      const n = getParam(`Service attempt ${i} notes`, `attempt_${i}_notes`, `attempt${i}Notes`);
      if (d || tm || n) {
        parsedAttempts.push({
          id: i,
          date: d || '',
          time: tm || '',
          notes: n || (i === 1 && comments ? comments : ''),
        });
      }
    }

    if (parsedAttempts.length > 0) {
      setAttempts(parsedAttempts);
    } else if (comments) {
      setAttempts([{ id: 1, date: '', time: '', notes: comments }]);
    }
  }, []);

  const handlePrint = useCallback(() => {
    const originalTitle = document.title;
    const docLabel = docType.replace(/\s+/g, '_');
    if (caseNumber.trim()) {
      document.title = `${caseNumber.trim()}_${docLabel}`;
    } else {
      document.title = docLabel;
    }
    window.print();
    setTimeout(() => { document.title = originalTitle; }, 1000);
  }, [caseNumber, docType]);

  const handleCopyShareLink = () => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.origin + window.location.pathname);
    
    url.searchParams.set('type', docType);
    if (courtName) url.searchParams.set('court', courtName);
    if (caseNumber) url.searchParams.set('case', caseNumber);
    if (jobNumber) url.searchParams.set('job', jobNumber);
    if (county) url.searchParams.set('county', county);
    if (jurisdictionState) url.searchParams.set('state', jurisdictionState);
    if (plaintiff) url.searchParams.set('plaintiff', plaintiff);
    if (defendant) url.searchParams.set('defendant', defendant);
    if (clientFirm) url.searchParams.set('firm', clientFirm);
    if (recipientName) url.searchParams.set('recipient', recipientName);
    if (serviceAddress) url.searchParams.set('location', serviceAddress);
    if (documentsServed) url.searchParams.set('docs', documentsServed);
    if (mannerText) url.searchParams.set('manner', mannerText);
    if (serverName) url.searchParams.set('server', serverName);
    if (serverCompany) url.searchParams.set('company', serverCompany);
    if (serverLicense) url.searchParams.set('license', serverLicense);
    if (serverPhone) url.searchParams.set('phone', serverPhone);
    if (serverEmail) url.searchParams.set('email', serverEmail);
    if (executionCity) url.searchParams.set('city', executionCity);

    if (showMilitary) {
      url.searchParams.set('military', '1');
      url.searchParams.set('military_status', militaryStatus);
    }

    attempts.forEach((att, idx) => {
      if (att.date || att.time || att.notes) {
        if (att.date) url.searchParams.set(`attempt_${idx + 1}_date`, att.date);
        if (att.time) url.searchParams.set(`attempt_${idx + 1}_time`, att.time);
        if (att.notes) url.searchParams.set(`attempt_${idx + 1}_notes`, att.notes);
      }
    });

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

  const applyMannerPreset = (presetKey: string) => {
    setSelectedMannerKey(presetKey);
    switch (presetKey) {
      case 'personal':
        setMannerText('PERSONAL SERVICE: By personally delivering true and correct copies of the above-described documents to the recipient named herein at the address stated above.');
        break;
      case 'sub_residence':
        // Universal 50-state language (suitable age and discretion)
        setMannerText('SUBSTITUTED SERVICE (RESIDENCE): By leaving true and correct copies of the above-described documents at the dwelling house or usual place of abode of the recipient with a person of suitable age and discretion residing therein, and informing said person of the general contents thereof.');
        break;
      case 'sub_business':
        setMannerText('SUBSTITUTED SERVICE (BUSINESS): By delivering true and correct copies of the above-described documents during regular business hours to the recipient\'s usual place of business/employment with the person in charge or authorized to receive process.');
        break;
      case 'corp_agent':
        setMannerText('CORPORATE / REGISTERED AGENT: By delivering true and correct copies of the above-described documents to the designated Registered Agent or authorized officer of the entity.');
        break;
      case 'posting':
        setMannerText('POSTING / CONSPICUOUS PLACE: After multiple diligent attempts, by posting true and correct copies in a conspicuous place on the main entrance of the premises, and subsequently mailing a copy via First Class U.S. Mail.');
        break;
      case 'certified_mail':
        setMannerText('CERTIFIED MAIL: By mailing true and correct copies via USPS Certified Mail, Return Receipt Requested with restricted delivery.');
        break;
      case 'non_unknown':
        if (!isNonService) setDocType(isDeclaration ? 'DECLARATION OF NON-SERVICE' : 'AFFIDAVIT OF NON-SERVICE');
        setMannerText('NON-SERVICE (UNKNOWN AT ADDRESS): Diligent inquiry with current resident/occupant confirmed that the subject does not reside at this location and is unknown.');
        break;
      case 'non_moved':
        if (!isNonService) setDocType(isDeclaration ? 'DECLARATION OF NON-SERVICE' : 'AFFIDAVIT OF NON-SERVICE');
        setMannerText('NON-SERVICE (MOVED / NO FORWARDING): Diligent inquiry confirmed the subject has moved from this location. No forwarding address was available or provided.');
        break;
      case 'non_bad_address':
        if (!isNonService) setDocType(isDeclaration ? 'DECLARATION OF NON-SERVICE' : 'AFFIDAVIT OF NON-SERVICE');
        setMannerText('NON-SERVICE (VACANT / BAD ADDRESS): Address does not exist or property was found vacant/abandoned with no connection to the subject.');
        break;
      case 'non_evasion':
        if (!isNonService) setDocType(isDeclaration ? 'DECLARATION OF NON-SERVICE' : 'AFFIDAVIT OF NON-SERVICE');
        setMannerText('NON-SERVICE (EVASION / HOSTILE REFUSAL): Subject or occupant actively avoided service, refused to open the door, or refused to accept papers despite confirmed presence.');
        break;
      default:
        break;
    }
  };

  const handlePrefillJLS = () => {
    setServerName('Joseph Iannazzi');
    setServerCompany('Just Legal Solutions');
    setServerPhone('(539) 367-6832');
    setServerEmail('info@justlegalsolutions.org');
    setServerLicense('Licensed Private Process Server');
    setJurisdictionState('Oklahoma');
    setCounty('Tulsa');
    setCourtName('IN THE DISTRICT COURT OF TULSA COUNTY, STATE OF OKLAHOMA');
    setExecutionCity('Tulsa, OK');
    setNotaryState('Oklahoma');
    setNotaryCounty('Tulsa');
  };

  const handleReset = () => {
    if (window.confirm('Clear all fields to a blank form?')) {
      setDocType('AFFIDAVIT OF SERVICE');
      setCourtName('');
      setCaseNumber('');
      setJobNumber('');
      setCounty('');
      setJurisdictionState('');
      setPlaintiff('');
      setDefendant('');
      setClientFirm('');
      setRecipientName('');
      setServiceAddress('');
      setDocumentsServed('');
      setMannerText('');
      setSelectedMannerKey('');
      setServerName('');
      setServerCompany('');
      setServerPhone('');
      setServerEmail('');
      setServerLicense('');
      setExecutionCity('');
      setNotaryCounty('');
      setNotaryState('');
      setCommissionNum('');
      setCommissionExp('');
      setShowMilitary(false);
      setAttempts([{ id: 1, date: '', time: '', notes: '' }]);
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
          html, body {
            background: #fff !important;
            margin: 0 !important;
            padding: 0 !important;
            font-size: 10pt !important;
          }
          header, footer, nav, aside, .navbar, .site-footer, .no-print, .no-print-affidavit, [aria-label="Call or contact Just Legal Solutions"], .fixed, .sticky, [class*="sticky"], [class*="Sticky"], #mobile-menu, .ui-mobile-safe-panel, .ui-glass-nav {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            max-height: 0 !important;
            overflow: hidden !important;
            margin: 0 !important;
            padding: 0 !important;
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
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
            background: #fff !important;
            overflow: visible !important;
          }
          .print-clean-input {
            border: none !important;
            border-bottom: 1px solid #000 !important;
            background: transparent !important;
            padding: 0 1px !important;
          }
          /* Hide inputs in print and show pure text so nothing is ever clipped or scrolled */
          .screen-only-input {
            display: none !important;
          }
          .print-only-text {
            display: block !important;
            white-space: pre-wrap !important;
            word-break: break-word !important;
          }
          .page-break-avoid {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }
      `}</style>

      {/* Top Mobile/Desktop Control Toolbar */}
      <div className="no-print-affidavit max-w-4xl mx-auto px-3 sm:px-4 mb-4">
        <div className="bg-slate-900 text-white rounded-xl shadow-lg p-3 sm:p-4 border border-slate-800 space-y-3">
          
          {/* Header Row: Title & Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-400 shrink-0" />
              <h2 className="font-bold text-sm sm:text-base text-white">Nationwide Court Document Generator</h2>
              <span className="bg-blue-600/30 text-blue-300 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border border-blue-500/30 hidden sm:inline-block">
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
                onClick={handleCopyShareLink}
                className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg font-semibold text-xs shadow transition-all active:scale-95 cursor-pointer"
                title="Copy shareable pre-filled link"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied' : 'Share Link'}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all active:scale-95 cursor-pointer border border-slate-700"
                title="Clear all fields to blank"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear</span>
              </button>
            </div>
          </div>

          {/* Document Type Selector Segmented Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {[
              { type: 'AFFIDAVIT OF SERVICE', label: 'Affidavit of Service', sub: 'Sworn & Notarized' },
              { type: 'DECLARATION OF SERVICE', label: 'Declaration of Service', sub: 'Penalty of Perjury' },
              { type: 'AFFIDAVIT OF NON-SERVICE', label: 'Affidavit Non-Service', sub: 'Notarized Log' },
              { type: 'DECLARATION OF NON-SERVICE', label: 'Declaration Non-Service', sub: 'Diligent Search' },
            ].map((tab) => {
              const active = docType === tab.type;
              return (
                <button
                  key={tab.type}
                  type="button"
                  onClick={() => setDocType(tab.type as DocumentType)}
                  className={`p-2 rounded-lg text-left border transition-all cursor-pointer flex flex-col justify-center ${
                    active
                      ? 'bg-blue-600 border-blue-400 text-white shadow ring-1 ring-blue-400'
                      : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span className="font-bold text-xs leading-tight">{tab.label}</span>
                  <span className={`text-[10px] mt-0.5 ${active ? 'text-blue-100' : 'text-slate-400'}`}>
                    {tab.sub}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Presets Dropdown & Options */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800 text-xs">
            <div className="flex items-center gap-2 flex-grow sm:flex-grow-0">
              <span className="text-slate-400 font-semibold flex items-center gap-1 shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Presets:
              </span>
              <select
                value={selectedMannerKey}
                onChange={(e) => applyMannerPreset(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1 outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="" disabled>-- Select Manner / Non-Service Preset --</option>
                <optgroup label="Completed Service">
                  <option value="personal">Personal Delivery</option>
                  <option value="sub_residence">Substituted Service (Residence)</option>
                  <option value="sub_business">Substituted Service (Business / Employment)</option>
                  <option value="corp_agent">Registered Agent / Entity Officer</option>
                  <option value="posting">Posting / Conspicuous Place</option>
                  <option value="certified_mail">Certified Mail Service</option>
                </optgroup>
                <optgroup label="Diligent Non-Service">
                  <option value="non_unknown">Non-Service: Unknown at Address</option>
                  <option value="non_moved">Non-Service: Moved, Left No Forwarding</option>
                  <option value="non_bad_address">Non-Service: Vacant / Bad Address</option>
                  <option value="non_evasion">Non-Service: Evasion / Hostile Refusal</option>
                </optgroup>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrefillJLS}
                className="text-xs text-amber-400 hover:text-amber-300 underline font-medium cursor-pointer"
                title="Prefill Just Legal Solutions server info"
              >
                Prefill JLS Info
              </button>

              <label className="inline-flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showMilitary}
                  onChange={(e) => setShowMilitary(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-0 cursor-pointer"
                />
                <span>Include SCRA Military</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* ServeTracker-Style Compact Legal Sheet */}
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <div
          className="affidavit-page bg-white text-black shadow-xl rounded-sm p-4 sm:p-6 md:p-8 font-serif leading-tight border border-slate-300"
          style={{
            fontFamily: '"Times New Roman", Times, Georgia, serif',
            color: '#000',
            fontSize: '10pt',
            lineHeight: 1.25,
          }}
        >
          {/* Header: Court & Venue */}
          <div className="text-center font-bold text-xs uppercase mb-2 tracking-wide">
            <input
              type="text"
              value={courtName}
              onChange={(e) => setCourtName(e.target.value)}
              placeholder="IN THE DISTRICT COURT / SUPERIOR COURT / MUNICIPAL COURT"
              aria-label="Court and Venue"
              className="w-full text-center font-bold text-xs sm:text-sm uppercase bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input screen-only-input"
            />
            <div className="print-only-text hidden text-center font-bold text-xs sm:text-sm uppercase">
              {courtName || 'IN THE DISTRICT COURT'}
            </div>
          </div>

          {/* Caption Table */}
          <table className="w-full border-collapse border-b-2 border-t-2 border-black mb-2 text-xs">
            <tbody>
              <tr>
                <td className="w-[55%] align-top p-1.5 border-r-2 border-black pr-2">
                  <div>
                    <input
                      type="text"
                      value={plaintiff}
                      onChange={(e) => setPlaintiff(e.target.value)}
                      placeholder="PETITIONER / PLAINTIFF NAME(S)"
                      aria-label="Plaintiff or Petitioner"
                      className="w-full font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input screen-only-input"
                    />
                    <div className="print-only-text hidden font-bold">
                      {plaintiff || 'PLAINTIFF / PETITIONER'}
                    </div>
                  </div>
                  <div className="italic text-[10px] text-gray-700">Plaintiff / Petitioner,</div>
                  <div className="font-bold my-1 text-center text-gray-600">vs.</div>
                  <div>
                    <input
                      type="text"
                      value={defendant}
                      onChange={(e) => setDefendant(e.target.value)}
                      placeholder="DEFENDANT / RESPONDENT NAME(S)"
                      aria-label="Defendant or Respondent"
                      className="w-full font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input screen-only-input"
                    />
                    <div className="print-only-text hidden font-bold">
                      {defendant || 'DEFENDANT / RESPONDENT'}
                    </div>
                  </div>
                  <div className="italic text-[10px] text-gray-700">Defendant / Respondent.</div>
                </td>

                <td className="w-[45%] align-top p-1.5 pl-2 space-y-1">
                  <div>
                    <span className="font-bold text-[10px] uppercase">Case No: </span>
                    <input
                      type="text"
                      value={caseNumber}
                      onChange={(e) => setCaseNumber(e.target.value)}
                      placeholder="Case Number"
                      aria-label="Case Number"
                      className="font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none w-36 print-clean-input screen-only-input"
                    />
                    <span className="print-only-text hidden font-bold inline">
                      {caseNumber || '____________________'}
                    </span>
                  </div>

                  <div>
                    <span className="font-bold text-[10px] uppercase">County/State: </span>
                    <input
                      type="text"
                      value={county}
                      onChange={(e) => setCounty(e.target.value)}
                      placeholder="County"
                      aria-label="County"
                      className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-20 print-clean-input screen-only-input"
                    />
                    <span className="screen-only-input">, </span>
                    <input
                      type="text"
                      value={jurisdictionState}
                      onChange={(e) => setJurisdictionState(e.target.value)}
                      placeholder="State"
                      aria-label="State"
                      className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-20 print-clean-input screen-only-input"
                    />
                    <span className="print-only-text hidden inline">
                      {county ? `${county}, ` : ''}{jurisdictionState || ''}
                    </span>
                  </div>

                  {jobNumber ? (
                    <div>
                      <span className="font-bold text-[10px] uppercase">Job Ref #: </span>
                      <input
                        type="text"
                        value={jobNumber}
                        onChange={(e) => setJobNumber(e.target.value)}
                        placeholder="Job Ref #"
                        aria-label="Job Number"
                        className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-28 print-clean-input screen-only-input"
                      />
                      <span className="print-only-text hidden inline">{jobNumber}</span>
                    </div>
                  ) : (
                    <div className="no-print">
                      <span className="font-bold text-[10px] uppercase text-gray-500">Job Ref #: </span>
                      <input
                        type="text"
                        value={jobNumber}
                        onChange={(e) => setJobNumber(e.target.value)}
                        placeholder="e.g. 12345 (optional)"
                        aria-label="Job Number"
                        className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-28 print-clean-input text-xs"
                      />
                    </div>
                  )}

                  <div className="pt-0.5">
                    <span className="font-bold text-[10px] uppercase block">Person To Be Served:</span>
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="Target Recipient Name"
                      aria-label="Recipient Name"
                      className="w-full font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input screen-only-input"
                    />
                    <div className="print-only-text hidden font-bold">
                      {recipientName || '________________________________'}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Title */}
          <div className="text-center font-bold text-sm uppercase underline my-1 tracking-wider">
            {docType}
          </div>

          {/* Statutory Sworn Body */}
          <p className="text-justify text-[10pt] mb-2 leading-tight">
            I, <input
              type="text"
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
              placeholder="Process Server Full Name"
              aria-label="Process Server Name"
              className="inline-block font-bold text-center border-b border-black outline-none px-1 bg-transparent min-w-[150px] print-clean-input screen-only-input"
            /><span className="print-only-text hidden font-bold inline">{serverName || '___________________________'}</span>, being duly sworn or declaring under penalty of perjury, depose and state: 
            I am a legally authorized process server in the State of <input
              type="text"
              value={jurisdictionState}
              onChange={(e) => setJurisdictionState(e.target.value)}
              placeholder="State"
              aria-label="Server State"
              className="font-bold border-b border-black outline-none px-1 bg-transparent w-20 print-clean-input screen-only-input"
            /><span className="print-only-text hidden font-bold inline">{jurisdictionState || '_________'}</span>
            {serverLicense.trim() ? (
              <> (License/Reg No. <input
                type="text"
                value={serverLicense}
                onChange={(e) => setServerLicense(e.target.value)}
                placeholder="License #"
                aria-label="Server License Number"
                className="font-bold border-b border-black outline-none px-1 bg-transparent w-28 print-clean-input screen-only-input"
              /><span className="print-only-text hidden font-bold inline">{serverLicense}</span>)</>
            ) : (
              <span className="no-print"> (<input
                type="text"
                value={serverLicense}
                onChange={(e) => setServerLicense(e.target.value)}
                placeholder="License # (if applicable)"
                aria-label="Server License Number"
                className="font-bold border-b border-gray-300 focus:border-black outline-none px-1 bg-transparent w-36 text-xs"
              />)</span>
            )}, over the age of eighteen (18) years, and not a party to nor interested in the outcome of the above-entitled action.
          </p>

          {/* Documents & Address Lines */}
          <div className="space-y-1 mb-2 text-[9.5pt]">
            <div>
              <strong className="uppercase text-[9pt]">Documents: </strong>
              <input
                type="text"
                value={documentsServed}
                onChange={(e) => setDocumentsServed(e.target.value)}
                placeholder="e.g. Summons, Petition/Complaint, Notice, Discovery Requests"
                aria-label="Documents Served"
                className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-[80%] print-clean-input screen-only-input"
              />
              <span className="print-only-text hidden inline font-medium">
                {documentsServed || 'Legal process / pleadings in this action'}
              </span>
            </div>
            <div>
              <strong className="uppercase text-[9pt]">Service Address: </strong>
              <input
                type="text"
                value={serviceAddress}
                onChange={(e) => setServiceAddress(e.target.value)}
                placeholder="Service Street Address, City, State, ZIP"
                aria-label="Service Address"
                className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-[75%] print-clean-input font-medium screen-only-input"
              />
              <span className="print-only-text hidden inline font-medium">
                {serviceAddress || '__________________________________________________'}
              </span>
            </div>
          </div>

          {/* Manner of Service Block - Auto-expanding and clean in print */}
          <div className="mb-2">
            <strong className="uppercase text-[9pt] block mb-0.5">
              {isNonService ? 'Statement of Diligent Inquiry / Non-Service Reason:' : 'Manner & Details of Service:'}
            </strong>
            <textarea
              ref={mannerTextareaRef}
              value={mannerText}
              onChange={(e) => {
                setMannerText(e.target.value);
                adjustMannerHeight();
              }}
              placeholder="State the exact details of service or reasons for non-service (or select a preset above)..."
              rows={2}
              aria-label="Manner of Service"
              className="w-full bg-transparent border border-gray-300 focus:border-black outline-none p-1.5 text-[9.5pt] leading-tight resize-y screen-only-input"
            />
            {/* Pure text block for print so it expands infinitely and never truncates */}
            <div className="print-only-text hidden text-[9.5pt] leading-snug p-0 m-0">
              {mannerText || 'Service effected in accordance with applicable state civil procedure.'}
            </div>
          </div>

          {/* Chronological Service Attempts Log */}
          <div className="mb-2 page-break-avoid">
            <div className="flex items-center justify-between mb-1">
              <strong className="uppercase text-[9pt]">
                Service Attempts &amp; Due Diligence Log:
              </strong>
              <button
                type="button"
                onClick={addAttempt}
                className="no-print-affidavit text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded font-semibold cursor-pointer border border-slate-300"
              >
                + Add Attempt
              </button>
            </div>

            <table className="w-full border-collapse border border-black text-[9pt]">
              <thead>
                <tr className="bg-gray-100 text-center uppercase text-[8pt] border-b border-black">
                  <th className="p-1 border-r border-black w-8">#</th>
                  <th className="p-1 border-r border-black w-24">Date</th>
                  <th className="p-1 border-r border-black w-20">Time</th>
                  <th className="p-1 text-left pl-2">Observations &amp; Details</th>
                </tr>
              </thead>
              <tbody>
                {attempts.map((att, idx) => (
                  <tr key={att.id} className="border-b border-gray-300 last:border-b-0">
                    <td className="p-1 text-center font-bold border-r border-black">{idx + 1}</td>
                    <td className="p-1 border-r border-black text-center">
                      <input
                        type="text"
                        value={att.date}
                        onChange={(e) => updateAttempt(att.id, 'date', e.target.value)}
                        placeholder="MM/DD/YYYY"
                        aria-label={`Attempt ${idx + 1} Date`}
                        className="w-full text-center bg-transparent border-b border-gray-200 focus:border-black outline-none print-clean-input text-[9pt] screen-only-input"
                      />
                      <span className="print-only-text hidden">{att.date || '—'}</span>
                    </td>
                    <td className="p-1 border-r border-black text-center">
                      <input
                        type="text"
                        value={att.time}
                        onChange={(e) => updateAttempt(att.id, 'time', e.target.value)}
                        placeholder="10:30 AM"
                        aria-label={`Attempt ${idx + 1} Time`}
                        className="w-full text-center bg-transparent border-b border-gray-200 focus:border-black outline-none print-clean-input text-[9pt] screen-only-input"
                      />
                      <span className="print-only-text hidden">{att.time || '—'}</span>
                    </td>
                    <td className="p-1 pl-2">
                      <div className="flex items-center justify-between gap-1 screen-only-input">
                        <input
                          type="text"
                          value={att.notes}
                          onChange={(e) => updateAttempt(att.id, 'notes', e.target.value)}
                          placeholder="e.g. No answer, spoke with resident, vehicle on site..."
                          aria-label={`Attempt ${idx + 1} Notes`}
                          className="w-full bg-transparent border-b border-gray-200 focus:border-black outline-none print-clean-input text-[9pt]"
                        />
                        {attempts.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeAttempt(att.id)}
                            className="no-print-affidavit text-red-500 hover:text-red-700 px-1 cursor-pointer"
                            title="Remove attempt"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                      <div className="print-only-text hidden">
                        {att.notes || '—'}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Optional Military Status (SCRA 50 U.S.C. § 3931) */}
          {showMilitary && (
            <div className="mb-2 text-[9pt] border border-gray-300 p-1.5 print:border-none print:p-0 page-break-avoid">
              <strong className="uppercase text-[8pt] block mb-0.5">Military Status (SCRA 50 U.S.C. § 3931):</strong>
              <div className="no-print-affidavit flex gap-3 mb-1 text-[9pt]">
                {[
                  { key: 'not_active', label: 'Not Active Military' },
                  { key: 'active', label: 'Active Military' },
                  { key: 'unknown', label: 'Status Unknown' },
                ].map(opt => (
                  <label key={opt.key} className="inline-flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="militaryStatus"
                      checked={militaryStatus === opt.key}
                      onChange={() => setMilitaryStatus(opt.key as any)}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
              {militaryStatus === 'not_active' && (
                <p>I inquired and confirmed that the person named herein is not currently on active duty in the U.S. armed forces.</p>
              )}
              {militaryStatus === 'active' && (
                <p>Upon inquiry, the person named herein was confirmed to be an active-duty servicemember in the U.S. armed forces.</p>
              )}
              {militaryStatus === 'unknown' && (
                <p>I was unable to determine whether the person named herein is in active military service of the United States.</p>
              )}
            </div>
          )}

          {/* Closing Block: Declaration vs Affidavit */}
          <div className="pt-2 border-t border-black page-break-avoid">
            {isDeclaration ? (
              /* ─── UNSWORN DECLARATION CLOSING ─── */
              <div className="space-y-2 text-xs">
                <p className="font-semibold text-justify leading-tight">
                  I declare under penalty of perjury under the laws of the State of{' '}
                  <input
                    type="text"
                    value={jurisdictionState}
                    onChange={(e) => setJurisdictionState(e.target.value)}
                    placeholder="State"
                    aria-label="Declaration State"
                    className="font-bold border-b border-black outline-none px-1 bg-transparent w-20 print-clean-input screen-only-input"
                  /><span className="print-only-text hidden font-bold inline">{jurisdictionState || '_________'}</span> and the United States of America that the foregoing is true and correct.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <div>
                      <span className="font-bold text-[10px] block">Executed On:</span>
                      <input
                        type="text"
                        value={executionDate}
                        onChange={(e) => setExecutionDate(e.target.value)}
                        placeholder="MM/DD/YYYY"
                        aria-label="Execution Date"
                        className="font-semibold bg-transparent border-b border-black outline-none w-36 print-clean-input screen-only-input"
                      />
                      <span className="print-only-text hidden font-semibold inline">{executionDate || '_________________'}</span>
                    </div>
                    <div className="mt-1">
                      <span className="font-bold text-[10px] block">At (City, State):</span>
                      <input
                        type="text"
                        value={executionCity}
                        onChange={(e) => setExecutionCity(e.target.value)}
                        placeholder="City, State"
                        aria-label="Execution City"
                        className="font-semibold bg-transparent border-b border-black outline-none w-36 print-clean-input screen-only-input"
                      />
                      <span className="print-only-text hidden font-semibold inline">{executionCity || '_________________'}</span>
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <div className="border-b border-black w-full mb-1 mt-4" />
                    <span className="font-bold text-[9pt] uppercase block text-gray-700">Declarant / Process Server:</span>
                    <div>
                      <input
                        type="text"
                        value={serverName}
                        onChange={(e) => setServerName(e.target.value)}
                        placeholder="Server Full Name"
                        aria-label="Server Name"
                        className="w-full font-bold text-[10pt] bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input screen-only-input"
                      />
                      <div className="print-only-text hidden font-bold text-[10pt]">
                        {serverName || '___________________________'}
                      </div>
                    </div>

                    {serverLicense.trim() ? (
                      <div>
                        <input
                          type="text"
                          value={serverLicense}
                          onChange={(e) => setServerLicense(e.target.value)}
                          placeholder="License / Title"
                          aria-label="Server License"
                          className="w-full text-[9pt] text-gray-800 bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input screen-only-input"
                        />
                        <div className="print-only-text hidden text-[9pt] text-gray-800">{serverLicense}</div>
                      </div>
                    ) : (
                      <div className="no-print">
                        <input
                          type="text"
                          value={serverLicense}
                          onChange={(e) => setServerLicense(e.target.value)}
                          placeholder="License / Title (optional)"
                          aria-label="Server License"
                          className="w-full text-[9pt] text-gray-500 bg-transparent border-b border-gray-200 focus:border-black outline-none"
                        />
                      </div>
                    )}

                    {serverCompany.trim() ? (
                      <div>
                        <input
                          type="text"
                          value={serverCompany}
                          onChange={(e) => setServerCompany(e.target.value)}
                          placeholder="Company Name"
                          aria-label="Company Name"
                          className="w-full text-[9pt] font-semibold bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input screen-only-input"
                        />
                        <div className="print-only-text hidden text-[9pt] font-semibold">{serverCompany}</div>
                      </div>
                    ) : (
                      <div className="no-print">
                        <input
                          type="text"
                          value={serverCompany}
                          onChange={(e) => setServerCompany(e.target.value)}
                          placeholder="Company Name (optional)"
                          aria-label="Company Name"
                          className="w-full text-[9pt] text-gray-500 bg-transparent border-b border-gray-200 focus:border-black outline-none"
                        />
                      </div>
                    )}

                    {(serverPhone.trim() || serverEmail.trim()) ? (
                      <div className="text-[8.5pt]">
                        <div className="flex gap-2 screen-only-input">
                          <input
                            type="text"
                            value={serverPhone}
                            onChange={(e) => setServerPhone(e.target.value)}
                            placeholder="Phone"
                            aria-label="Phone"
                            className="w-1/2 bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input"
                          />
                          <input
                            type="text"
                            value={serverEmail}
                            onChange={(e) => setServerEmail(e.target.value)}
                            placeholder="Email"
                            aria-label="Email"
                            className="w-1/2 bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input"
                          />
                        </div>
                        <div className="print-only-text hidden text-[8.5pt] text-gray-700">
                          {[serverPhone, serverEmail].filter(Boolean).join(' • ')}
                        </div>
                      </div>
                    ) : (
                      <div className="no-print flex gap-2 text-[8.5pt]">
                        <input
                          type="text"
                          value={serverPhone}
                          onChange={(e) => setServerPhone(e.target.value)}
                          placeholder="Phone (optional)"
                          aria-label="Phone"
                          className="w-1/2 bg-transparent border-b border-gray-200 focus:border-black outline-none text-gray-500"
                        />
                        <input
                          type="text"
                          value={serverEmail}
                          onChange={(e) => setServerEmail(e.target.value)}
                          placeholder="Email (optional)"
                          aria-label="Email"
                          className="w-1/2 bg-transparent border-b border-gray-200 focus:border-black outline-none text-gray-500"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* ─── SWORN NOTARIZED AFFIDAVIT CLOSING ─── */
              <div className="grid grid-cols-2 gap-4 text-xs">
                {/* Left: Server Signature */}
                <div className="space-y-0.5">
                  <div className="border-b border-black w-full mb-1 mt-5" />
                  <span className="font-bold text-[9pt] uppercase block text-gray-700">Affiant / Process Server Signature</span>
                  <div>
                    <input
                      type="text"
                      value={serverName}
                      onChange={(e) => setServerName(e.target.value)}
                      placeholder="Process Server Full Name"
                      aria-label="Server Name"
                      className="w-full font-bold text-[10pt] bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input screen-only-input"
                    />
                    <div className="print-only-text hidden font-bold text-[10pt]">
                      {serverName || '___________________________'}
                    </div>
                  </div>

                  {serverLicense.trim() ? (
                    <div>
                      <input
                        type="text"
                        value={serverLicense}
                        onChange={(e) => setServerLicense(e.target.value)}
                        placeholder="License / Title"
                        aria-label="Server License"
                        className="w-full text-[9pt] text-gray-800 bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input screen-only-input"
                      />
                      <div className="print-only-text hidden text-[9pt] text-gray-800">{serverLicense}</div>
                    </div>
                  ) : (
                    <div className="no-print">
                      <input
                        type="text"
                        value={serverLicense}
                        onChange={(e) => setServerLicense(e.target.value)}
                        placeholder="License / Title (optional)"
                        aria-label="Server License"
                        className="w-full text-[9pt] text-gray-500 bg-transparent border-b border-gray-200 focus:border-black outline-none"
                      />
                    </div>
                  )}

                  {serverCompany.trim() ? (
                    <div>
                      <input
                        type="text"
                        value={serverCompany}
                        onChange={(e) => setServerCompany(e.target.value)}
                        placeholder="Company Name"
                        aria-label="Company Name"
                        className="w-full text-[9pt] font-semibold bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input screen-only-input"
                      />
                      <div className="print-only-text hidden text-[9pt] font-semibold">{serverCompany}</div>
                    </div>
                  ) : (
                    <div className="no-print">
                      <input
                        type="text"
                        value={serverCompany}
                        onChange={(e) => setServerCompany(e.target.value)}
                        placeholder="Company Name (optional)"
                        aria-label="Company Name"
                        className="w-full text-[9pt] text-gray-500 bg-transparent border-b border-gray-200 focus:border-black outline-none"
                      />
                    </div>
                  )}

                  {(serverPhone.trim() || serverEmail.trim()) ? (
                    <div className="text-[8.5pt]">
                      <div className="flex gap-2 screen-only-input">
                        <input
                          type="text"
                          value={serverPhone}
                          onChange={(e) => setServerPhone(e.target.value)}
                          placeholder="Phone"
                          aria-label="Phone"
                          className="w-1/2 bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input"
                        />
                        <input
                          type="text"
                          value={serverEmail}
                          onChange={(e) => setServerEmail(e.target.value)}
                          placeholder="Email"
                          aria-label="Email"
                          className="w-1/2 bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input"
                        />
                      </div>
                      <div className="print-only-text hidden text-[8.5pt] text-gray-700">
                        {[serverPhone, serverEmail].filter(Boolean).join(' • ')}
                      </div>
                    </div>
                  ) : (
                    <div className="no-print flex gap-2 text-[8.5pt]">
                      <input
                        type="text"
                        value={serverPhone}
                        onChange={(e) => setServerPhone(e.target.value)}
                        placeholder="Phone (optional)"
                        aria-label="Phone"
                        className="w-1/2 bg-transparent border-b border-gray-200 focus:border-black outline-none text-gray-500"
                      />
                      <input
                        type="text"
                        value={serverEmail}
                        onChange={(e) => setServerEmail(e.target.value)}
                        placeholder="Email (optional)"
                        aria-label="Email"
                        className="w-1/2 bg-transparent border-b border-gray-200 focus:border-black outline-none text-gray-500"
                      />
                    </div>
                  )}
                </div>

                {/* Right: Notary Jurat */}
                <div className="border border-black p-2 bg-gray-50/50 print:bg-transparent text-[8.5pt] space-y-1">
                  <div className="font-bold uppercase text-[8pt] border-b border-gray-400 pb-0.5">
                    Notary Public Jurat / Acknowledgment
                  </div>
                  <div>
                    State of <input
                      type="text"
                      value={notaryState}
                      onChange={(e) => setNotaryState(e.target.value)}
                      placeholder="State"
                      aria-label="Notary State"
                      className="font-bold border-b border-black outline-none px-1 bg-transparent w-20 print-clean-input screen-only-input"
                    /><span className="print-only-text hidden font-bold inline">{notaryState || '_________'}</span>, County of <input
                      type="text"
                      value={notaryCounty}
                      onChange={(e) => setNotaryCounty(e.target.value)}
                      placeholder="County"
                      aria-label="Notary County"
                      className="font-bold border-b border-black outline-none px-1 bg-transparent w-20 print-clean-input screen-only-input"
                    /><span className="print-only-text hidden font-bold inline">{notaryCounty || '_________'}</span>
                  </div>
                  <p className="text-[8pt] leading-tight">
                    Subscribed and sworn to before me this _____ day of __________________, 20___, 
                    by the affiant <strong className="border-b border-black px-1">{serverName || '___________________________'}</strong>.
                  </p>
                  <div className="border-b border-black w-full mt-3 mb-0.5" />
                  <div className="text-[8pt] font-bold">Notary Public Signature &amp; Official Seal</div>
                  <div className="grid grid-cols-2 gap-1 text-[8pt]">
                    <div>
                      <span>Comm. #: </span>
                      <input
                        type="text"
                        value={commissionNum}
                        onChange={(e) => setCommissionNum(e.target.value)}
                        placeholder="Commission #"
                        aria-label="Commission Number"
                        className="bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input screen-only-input w-20"
                      />
                      <span className="print-only-text hidden inline">{commissionNum || '____________'}</span>
                    </div>
                    <div>
                      <span>Expires: </span>
                      <input
                        type="text"
                        value={commissionExp}
                        onChange={(e) => setCommissionExp(e.target.value)}
                        placeholder="MM/DD/YYYY"
                        aria-label="Expiration Date"
                        className="bg-transparent border-b border-gray-300 focus:border-black outline-none print-clean-input screen-only-input w-24"
                      />
                      <span className="print-only-text hidden inline">{commissionExp || '____________'}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
