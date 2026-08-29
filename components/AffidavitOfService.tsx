'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { 
  Printer, 
  Share2, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Check, 
  Scale, 
  Sparkles, 
  UserCheck, 
  MapPin, 
  Building2, 
  FileText,
  HelpCircle
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

  // Process Server / Affiant Info (Blank by default for any user nationwide)
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

  // Military / SCRA Status (Default: Hidden / Optional)
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

  // UI state
  const [copiedLink, setCopiedLink] = useState(false);

  const isDeclaration = docType.includes('DECLARATION') || docType === 'CERTIFICATE OF SERVICE';
  const isNonService = docType.includes('NON-SERVICE');

  // Set default execution date to today
  useEffect(() => {
    const today = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    if (!executionDate) setExecutionDate(today);
  }, [executionDate]);

  // Sync state & county defaults
  const handleStateChange = (st: string) => {
    setJurisdictionState(st);
    if (!notaryState) setNotaryState(st);
  };

  const handleCountyChange = (ct: string) => {
    setCounty(ct);
    if (!notaryCounty) setNotaryCounty(ct);
  };

  // URL Query Parameter Pre-fill
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
        setMannerText('PERSONAL SERVICE: By delivering true and correct copies of the above-listed documents to the named recipient personally at the service address.');
        break;
      case 'sub_residence':
        setMannerText('SUBSTITUTED SERVICE (RESIDENCE): By leaving true and correct copies of the above-listed documents at the dwelling house or usual place of abode of the recipient with a person of suitable age and discretion residing therein, and informing them of the general nature of the papers.');
        break;
      case 'sub_business':
        setMannerText('SUBSTITUTED SERVICE (BUSINESS / EMPLOYMENT): By delivering true and correct copies of the above-listed documents during regular business hours to the recipient\'s place of business/employment with the person in charge or authorized to receive process.');
        break;
      case 'corp_agent':
        setMannerText('CORPORATE / REGISTERED AGENT SERVICE: By delivering true and correct copies of the above-listed documents to the designated Registered Agent or authorized representative of the entity.');
        break;
      case 'posting':
        setMannerText('POSTING / CONSPICUOUS PLACE: After multiple diligent attempts, by posting true and correct copies in a conspicuous place affixed firmly to the main entrance of the premises, and subsequently mailing a copy via First Class U.S. Mail.');
        break;
      case 'certified_mail':
        setMannerText('CERTIFIED MAIL SERVICE: By mailing true and correct copies via USPS Certified Mail, Return Receipt Requested with restricted delivery.');
        break;
      case 'non_unknown':
        if (!isNonService) setDocType(isDeclaration ? 'DECLARATION OF NON-SERVICE' : 'AFFIDAVIT OF NON-SERVICE');
        setMannerText('NON-SERVICE (UNKNOWN AT ADDRESS): Diligent inquiry with current resident/occupant confirmed that the subject does not reside at this location and is unknown.');
        break;
      case 'non_moved':
        if (!isNonService) setDocType(isDeclaration ? 'DECLARATION OF NON-SERVICE' : 'AFFIDAVIT OF NON-SERVICE');
        setMannerText('NON-SERVICE (MOVED / NO FORWARDING): Diligent inquiry confirmed the subject has moved from this location. No forwarding address was provided or available.');
        break;
      case 'non_bad_address':
        if (!isNonService) setDocType(isDeclaration ? 'DECLARATION OF NON-SERVICE' : 'AFFIDAVIT OF NON-SERVICE');
        setMannerText('NON-SERVICE (VACANT / BAD ADDRESS): Address does not exist or property was found completely vacant/abandoned with no connection to the subject.');
        break;
      case 'non_evasion':
        if (!isNonService) setDocType(isDeclaration ? 'DECLARATION OF NON-SERVICE' : 'AFFIDAVIT OF NON-SERVICE');
        setMannerText('NON-SERVICE (EVASION / HOSTILE REFUSAL): Subject or occupant actively avoided service, refused to answer the door or acknowledge presence despite confirmed residency/vehicle on site.');
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
    setCourtName('District Court of Tulsa County');
    setExecutionCity('Tulsa, OK');
    setNotaryState('Oklahoma');
    setNotaryCounty('Tulsa');
  };

  const handleReset = () => {
    if (window.confirm('Reset all fields to a blank form?')) {
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
          margin: 0.4in 0.5in;
        }
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background-color: transparent !important;
          }
          html, body {
            background: #fff !important;
            padding: 0 !important;
            margin: 0 !important;
            height: auto !important;
            overflow: visible !important;
            font-size: 11pt !important;
          }
          header, footer, footer#contact, nav, .navbar, .site-footer, .breadcrumb, .no-print-affidavit {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            max-height: 0 !important;
            overflow: hidden !important;
            padding: 0 !important;
            margin: 0 !important;
            border: none !important;
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
          }
          .flex.flex-col.min-h-screen {
            min-height: 0 !important;
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
            padding: 1px 2px !important;
          }
          .print-clean-text {
            white-space: pre-wrap !important;
            word-break: break-word !important;
          }
          .no-print-element {
            display: none !important;
          }
          .page-break-auto {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>

      {/* Top Mobile/Desktop Control Panel */}
      <div className="no-print-affidavit max-w-5xl mx-auto px-4 mb-6">
        <div className="bg-slate-900 text-white rounded-2xl shadow-xl p-4 sm:p-6 border border-slate-800 space-y-4">
          
          {/* Header Row: Title & Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Scale className="w-5 h-5 text-amber-400" />
                <h2 className="font-bold text-lg text-white">Nationwide Court Document Generator</h2>
                <span className="bg-blue-600/30 text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-500/30">
                  All 50 States &amp; Federal
                </span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm">
                Generates court-admissible returns of service for any process server, attorney, or pro se litigant.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>

              <button
                type="button"
                onClick={handleCopyShareLink}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                title="Copy shareable pre-filled link"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-300" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedLink ? 'Link Copied!' : 'Share Link'}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-2.5 rounded-xl text-xs font-medium transition-all active:scale-95 cursor-pointer border border-slate-700"
                title="Clear all fields to blank"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Form</span>
              </button>
            </div>
          </div>

          {/* Document Type Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Select Document Format:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {[
                { type: 'AFFIDAVIT OF SERVICE', title: 'Affidavit of Service', desc: 'Sworn & Notarized Jurat' },
                { type: 'DECLARATION OF SERVICE', title: 'Declaration of Service', desc: 'Unsworn / Penalty of Perjury' },
                { type: 'AFFIDAVIT OF NON-SERVICE', title: 'Affidavit of Non-Service', desc: 'Notarized Due Diligence' },
                { type: 'DECLARATION OF NON-SERVICE', title: 'Declaration of Non-Service', desc: 'Unsworn Diligent Search' },
              ].map((tab) => {
                const active = docType === tab.type;
                return (
                  <button
                    key={tab.type}
                    type="button"
                    onClick={() => setDocType(tab.type as DocumentType)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      active
                        ? 'bg-blue-600 border-blue-400 text-white shadow-lg ring-2 ring-blue-400/40'
                        : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <span className="font-bold text-xs sm:text-sm leading-snug">{tab.title}</span>
                    <span className={`text-[10px] sm:text-xs mt-1 ${active ? 'text-blue-100' : 'text-slate-400'}`}>
                      {tab.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Presets and Options Section */}
          <div className="pt-2 border-t border-slate-800 space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Quick Manner &amp; Non-Service Presets:
                </span>
                <button
                  type="button"
                  onClick={handlePrefillJLS}
                  className="text-xs text-amber-400 hover:text-amber-300 underline font-medium cursor-pointer"
                  title="Prefill Just Legal Solutions info"
                >
                  Prefill JLS Default Info
                </button>
              </div>

              {/* Responsive Categorized Presets Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'personal', label: 'Personal Delivery', category: 'Service' },
                  { id: 'sub_residence', label: 'Substituted (Residence)', category: 'Service' },
                  { id: 'sub_business', label: 'Substituted (Business)', category: 'Service' },
                  { id: 'corp_agent', label: 'Registered Agent', category: 'Service' },
                  { id: 'posting', label: 'Posting / Conspicuous', category: 'Service' },
                  { id: 'non_unknown', label: 'Unknown at Address', category: 'Non-Service' },
                  { id: 'non_moved', label: 'Moved / No Forwarding', category: 'Non-Service' },
                  { id: 'non_evasion', label: 'Evasion / Hostile Refusal', category: 'Non-Service' },
                ].map((p) => {
                  const isSelected = selectedMannerKey === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => applyMannerPreset(p.id)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-all text-left border cursor-pointer flex flex-col justify-center ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold shadow-md'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750 hover:border-slate-600'
                      }`}
                    >
                      <span>{p.label}</span>
                      <span className={`text-[9px] uppercase font-semibold mt-0.5 ${isSelected ? 'text-slate-900' : 'text-slate-400'}`}>
                        {p.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional Military / SCRA Toggle */}
            <div className="pt-2 flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-xs text-slate-300 cursor-pointer bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800">
                <input
                  type="checkbox"
                  checked={showMilitary}
                  onChange={(e) => setShowMilitary(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-0 cursor-pointer"
                />
                <span>Include Servicemembers Civil Relief Act (SCRA) Declaration</span>
              </label>
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                (Optional — check if required by your state court or for default judgments)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Printable Legal Document Sheet */}
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <div
          className="affidavit-page bg-white text-black shadow-2xl rounded-sm sm:rounded-md p-4 sm:p-8 md:p-10 font-serif leading-relaxed border border-slate-300"
          style={{
            fontFamily: '"Times New Roman", Times, Georgia, serif',
            color: '#000',
            minHeight: '10.5in',
          }}
        >
          {/* Document Title Header */}
          <div className="text-center mb-4 pb-2 border-b-2 border-black">
            <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-wider underline mb-1">
              {docType}
            </h1>
            <p className="text-xs italic text-gray-700">
              {isDeclaration 
                ? 'Pursuant to 28 U.S.C. § 1746 / Uniform Unsworn Declarations Act / State Civil Procedure'
                : 'Sworn Return of Process Server with Official Notary Jurat'}
            </p>
          </div>

          {/* Court & Case Caption Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-12 border-2 border-black mb-4 text-xs sm:text-sm">
            <div className="sm:col-span-6 p-2.5 border-b sm:border-b-0 sm:border-r border-black flex flex-col justify-between">
              <div>
                <span className="font-bold uppercase text-[10px] tracking-wider block text-gray-800">Court / Jurisdiction:</span>
                <input
                  type="text"
                  value={courtName}
                  onChange={(e) => setCourtName(e.target.value)}
                  placeholder="e.g. District Court / Superior Court / Municipal Court"
                  aria-label="Court Name"
                  className="w-full font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none py-1 print-clean-input"
                />
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div>
                  <span className="font-bold uppercase text-[10px] tracking-wider block text-gray-800">County:</span>
                  <input
                    type="text"
                    value={county}
                    onChange={(e) => handleCountyChange(e.target.value)}
                    placeholder="County"
                    aria-label="County"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                  />
                </div>
                <div>
                  <span className="font-bold uppercase text-[10px] tracking-wider block text-gray-800">State:</span>
                  <input
                    type="text"
                    value={jurisdictionState}
                    onChange={(e) => handleStateChange(e.target.value)}
                    placeholder="State"
                    aria-label="State"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-6 p-2.5 flex flex-col justify-between">
              <div>
                <span className="font-bold uppercase text-[10px] tracking-wider block text-gray-800">Case / Docket Number:</span>
                <input
                  type="text"
                  value={caseNumber}
                  onChange={(e) => setCaseNumber(e.target.value)}
                  placeholder="e.g. 2026-CV-01234"
                  aria-label="Case Number"
                  className="w-full font-bold text-sm bg-transparent border-b border-gray-300 focus:border-black outline-none py-1 print-clean-input"
                />
              </div>
              <div className="mt-2">
                <span className="font-bold uppercase text-[10px] tracking-wider block text-gray-800">Internal Job / File Ref #:</span>
                <input
                  type="text"
                  value={jobNumber}
                  onChange={(e) => setJobNumber(e.target.value)}
                  placeholder="e.g. Job #12345 (optional)"
                  aria-label="Job Number"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                />
              </div>
            </div>
          </div>

          {/* Party Caption Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs sm:text-sm">
            <div className="border border-black p-2.5 rounded-sm">
              <span className="font-bold uppercase text-[10px] tracking-wider block text-gray-800 mb-1">
                Plaintiff(s) / Petitioner(s):
              </span>
              <input
                type="text"
                value={plaintiff}
                onChange={(e) => setPlaintiff(e.target.value)}
                placeholder="Plaintiff / Petitioner Name(s)"
                aria-label="Plaintiff or Petitioner"
                className="w-full font-semibold bg-transparent border-b border-gray-300 focus:border-black outline-none py-1 print-clean-input"
              />
              <div className="mt-2 text-center text-xs font-bold text-gray-500">vs.</div>
              <span className="font-bold uppercase text-[10px] tracking-wider block text-gray-800 mt-2 mb-1">
                Defendant(s) / Respondent(s):
              </span>
              <input
                type="text"
                value={defendant}
                onChange={(e) => setDefendant(e.target.value)}
                placeholder="Defendant / Respondent Name(s)"
                aria-label="Defendant or Respondent"
                className="w-full font-semibold bg-transparent border-b border-gray-300 focus:border-black outline-none py-1 print-clean-input"
              />
            </div>

            <div className="border border-black p-2.5 rounded-sm flex flex-col justify-between">
              <div>
                <span className="font-bold uppercase text-[10px] tracking-wider block text-gray-800 mb-1">
                  Recipient To Be Served:
                </span>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Target Individual or Entity Name"
                  aria-label="Recipient To Be Served"
                  className="w-full font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none py-1 print-clean-input"
                />
              </div>
              <div className="mt-2">
                <span className="font-bold uppercase text-[10px] tracking-wider block text-gray-800 mb-1">
                  Forwarding Attorney / Client:
                </span>
                <input
                  type="text"
                  value={clientFirm}
                  onChange={(e) => setClientFirm(e.target.value)}
                  placeholder="Attorney or Law Firm Name (optional)"
                  aria-label="Attorney or Client"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                />
              </div>
            </div>
          </div>

          {/* Statutory Competency & Authorization Statement */}
          <div className="text-xs sm:text-sm text-justify mb-4 leading-normal bg-gray-50/50 p-2.5 border border-gray-200 print:bg-transparent print:border-none print:p-0">
            I, <input
              type="text"
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
              placeholder="Process Server Full Name"
              aria-label="Server Name"
              className="inline-block font-bold text-center border-b border-black outline-none px-2 py-0.5 bg-transparent min-w-[180px] print-clean-input"
            />, being first duly sworn or declaring under penalty of perjury, depose and say: 
            I am a citizen of the United States, over the age of eighteen (18) years, not a party to or interested in the above-entitled action, 
            and competent to make this statement. I was authorized by law to execute service of legal process in the jurisdiction where service was performed or attempted.
          </div>

          {/* Service Details Box */}
          <div className="border-2 border-black p-3 mb-4 space-y-3 text-xs sm:text-sm">
            <div>
              <span className="font-bold uppercase text-[10px] tracking-wider block text-gray-800 mb-0.5">
                Service Address / Location:
              </span>
              <input
                type="text"
                value={serviceAddress}
                onChange={(e) => setServiceAddress(e.target.value)}
                placeholder="Street Address, Suite/Apt, City, State, ZIP"
                aria-label="Service Address"
                className="w-full font-semibold bg-transparent border-b border-gray-300 focus:border-black outline-none py-1 print-clean-input"
              />
            </div>

            <div>
              <span className="font-bold uppercase text-[10px] tracking-wider block text-gray-800 mb-0.5">
                Legal Documents Effected / Attempted:
              </span>
              <input
                type="text"
                value={documentsServed}
                onChange={(e) => setDocumentsServed(e.target.value)}
                placeholder="e.g. Summons, Petition/Complaint, Notice, Discovery Requests"
                aria-label="Documents Served"
                className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-1 print-clean-input"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold uppercase text-[10px] tracking-wider text-gray-800">
                  {isNonService ? 'Statement of Diligent Inquiry / Non-Service Reason:' : 'Manner & Method of Service:'}
                </span>
              </div>
              <textarea
                value={mannerText}
                onChange={(e) => setMannerText(e.target.value)}
                placeholder="Describe exact details of service or reasons for non-service (or select a preset above)..."
                rows={3}
                aria-label="Manner of Service Details"
                className="w-full bg-transparent border border-gray-300 focus:border-black outline-none p-2 leading-relaxed resize-y print:border-none print:p-0 print-clean-text"
              />
            </div>
          </div>

          {/* Chronological Service Attempts Log */}
          <div className="mb-4 page-break-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold uppercase text-xs tracking-wider text-gray-900">
                Chronological Service Attempts &amp; Due Diligence Log:
              </span>
              <div className="no-print-affidavit flex gap-2">
                <button
                  type="button"
                  onClick={addAttempt}
                  className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-800 px-2 py-1 rounded text-xs font-semibold cursor-pointer border border-slate-300"
                >
                  <Plus className="w-3 h-3" /> Add Attempt Row
                </button>
              </div>
            </div>

            <div className="border border-black text-xs">
              <div className="grid grid-cols-12 bg-gray-100 font-bold border-b border-black p-1.5 text-center text-[10px] uppercase">
                <div className="col-span-1">#</div>
                <div className="col-span-3 sm:col-span-2">Date</div>
                <div className="col-span-3 sm:col-span-2">Time</div>
                <div className="col-span-5 sm:col-span-7 text-left pl-2">Observations &amp; Details</div>
              </div>

              {attempts.map((att, idx) => (
                <div 
                  key={att.id} 
                  className="grid grid-cols-12 border-b border-gray-300 last:border-b-0 p-1.5 items-center text-xs"
                >
                  <div className="col-span-1 text-center font-bold">{idx + 1}</div>
                  <div className="col-span-3 sm:col-span-2 px-1">
                    <input
                      type="text"
                      value={att.date}
                      onChange={(e) => updateAttempt(att.id, 'date', e.target.value)}
                      placeholder="MM/DD/YYYY"
                      aria-label={`Attempt ${idx + 1} Date`}
                      className="w-full bg-transparent border-b border-gray-200 focus:border-black outline-none text-center print-clean-input"
                    />
                  </div>
                  <div className="col-span-3 sm:col-span-2 px-1">
                    <input
                      type="text"
                      value={att.time}
                      onChange={(e) => updateAttempt(att.id, 'time', e.target.value)}
                      placeholder="10:30 AM"
                      aria-label={`Attempt ${idx + 1} Time`}
                      className="w-full bg-transparent border-b border-gray-200 focus:border-black outline-none text-center print-clean-input"
                    />
                  </div>
                  <div className="col-span-5 sm:col-span-7 pl-2 flex items-center justify-between gap-2">
                    <input
                      type="text"
                      value={att.notes}
                      onChange={(e) => updateAttempt(att.id, 'notes', e.target.value)}
                      placeholder="e.g. No answer, spoke with neighbor, vehicle on site..."
                      aria-label={`Attempt ${idx + 1} Notes`}
                      className="w-full bg-transparent border-b border-gray-200 focus:border-black outline-none py-0.5 print-clean-input"
                    />
                    {attempts.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeAttempt(att.id)}
                        className="no-print-affidavit text-red-500 hover:text-red-700 p-1 cursor-pointer"
                        title="Remove row"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Military Status (SCRA 50 U.S.C. § 3931) */}
          {showMilitary && (
            <div className="mb-4 text-xs page-break-auto">
              <div className="border border-gray-300 p-2.5 print:border-none print:p-0">
                <span className="font-bold uppercase text-[10px] tracking-wider block text-gray-800 mb-1">
                  Servicemembers Civil Relief Act (SCRA) Declaration:
                </span>
                <div className="no-print-affidavit flex flex-wrap gap-3 mb-1.5">
                  {[
                    { key: 'not_active', label: 'Confirmed Not Active Military' },
                    { key: 'active', label: 'Active Military Service' },
                    { key: 'unknown', label: 'Military Status Unknown' },
                  ].map(opt => (
                    <label key={opt.key} className="inline-flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="militaryStatus"
                        checked={militaryStatus === opt.key}
                        onChange={() => setMilitaryStatus(opt.key as any)}
                      />
                      <span className="text-xs">{opt.label}</span>
                    </label>
                  ))}
                </div>

                {militaryStatus === 'not_active' && (
                  <p className="text-justify leading-snug">
                    <strong>Military Status:</strong> I inquired and confirmed that the person served/named herein is not currently on active duty in the armed forces of the United States, nor entitled to military stay of proceedings under 50 U.S.C. § 3931.
                  </p>
                )}
                {militaryStatus === 'active' && (
                  <p className="text-justify leading-snug">
                    <strong>Military Status:</strong> Upon inquiry, the recipient/party was confirmed to be an active-duty servicemember in the armed forces of the United States.
                  </p>
                )}
                {militaryStatus === 'unknown' && (
                  <p className="text-justify leading-snug">
                    <strong>Military Status:</strong> I was unable to determine whether the subject is currently in active military service of the United States.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Legal Execution Closing */}
          <div className="pt-2 border-t-2 border-black page-break-auto">
            {isDeclaration ? (
              /* ─── UNSWORN DECLARATION BLOCK ─── */
              <div className="space-y-3 text-xs sm:text-sm">
                <p className="font-semibold text-justify leading-snug">
                  I declare under penalty of perjury under the laws of the State of{' '}
                  <input
                    type="text"
                    value={jurisdictionState}
                    onChange={(e) => handleStateChange(e.target.value)}
                    placeholder="State"
                    aria-label="State of Law"
                    className="font-bold border-b border-black outline-none px-1 bg-transparent w-28 print-clean-input"
                  /> and the United States of America that the foregoing is true and correct.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3">
                  <div>
                    <div className="mb-2">
                      <span className="font-bold text-xs block text-gray-800">Executed On:</span>
                      <input
                        type="text"
                        value={executionDate}
                        onChange={(e) => setExecutionDate(e.target.value)}
                        placeholder="e.g. October 14, 2026"
                        aria-label="Execution Date"
                        className="w-full font-semibold bg-transparent border-b border-black outline-none py-1 print-clean-input"
                      />
                    </div>
                    <div>
                      <span className="font-bold text-xs block text-gray-800">At (City, State):</span>
                      <input
                        type="text"
                        value={executionCity}
                        onChange={(e) => setExecutionCity(e.target.value)}
                        placeholder="e.g. Tulsa, OK"
                        aria-label="Execution City and State"
                        className="w-full font-semibold bg-transparent border-b border-black outline-none py-1 print-clean-input"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-end space-y-1">
                    <div className="border-b-2 border-black w-full mb-1 mt-4" />
                    <span className="font-bold uppercase text-[10px] text-gray-700 block">Declarant / Process Server:</span>
                    <input
                      type="text"
                      value={serverName}
                      onChange={(e) => setServerName(e.target.value)}
                      placeholder="Server Full Name"
                      aria-label="Declarant Name"
                      className="w-full font-bold text-sm bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                    />
                    <input
                      type="text"
                      value={serverLicense}
                      onChange={(e) => setServerLicense(e.target.value)}
                      placeholder="License / Reg # or Title (optional)"
                      aria-label="License / Title"
                      className="w-full text-xs text-gray-800 bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                    />
                    <input
                      type="text"
                      value={serverCompany}
                      onChange={(e) => setServerCompany(e.target.value)}
                      placeholder="Company / Agency Name (optional)"
                      aria-label="Company Name"
                      className="w-full text-xs font-semibold bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                    />
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={serverPhone}
                        onChange={(e) => setServerPhone(e.target.value)}
                        placeholder="Phone (optional)"
                        aria-label="Phone"
                        className="w-1/2 text-xs text-gray-700 bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                      />
                      <input
                        type="text"
                        value={serverEmail}
                        onChange={(e) => setServerEmail(e.target.value)}
                        placeholder="Email (optional)"
                        aria-label="Email"
                        className="w-1/2 text-xs text-gray-700 bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ─── SWORN NOTARIZED AFFIDAVIT BLOCK ─── */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
                {/* Server Signature Line */}
                <div className="flex flex-col justify-end space-y-1">
                  <div className="border-b-2 border-black w-full mb-1 mt-6" />
                  <span className="font-bold uppercase text-[10px] text-gray-700 block">Affiant / Process Server Signature:</span>
                  <input
                    type="text"
                    value={serverName}
                    onChange={(e) => setServerName(e.target.value)}
                    placeholder="Process Server Full Name"
                    aria-label="Process Server Name"
                    className="w-full font-bold text-sm bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                  />
                  <input
                    type="text"
                    value={serverLicense}
                    onChange={(e) => setServerLicense(e.target.value)}
                    placeholder="License / Reg # or Title (optional)"
                    aria-label="License / Title"
                    className="w-full text-xs text-gray-800 bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                  />
                  <input
                    type="text"
                    value={serverCompany}
                    onChange={(e) => setServerCompany(e.target.value)}
                    placeholder="Company / Agency Name (optional)"
                    aria-label="Company Name"
                    className="w-full text-xs font-semibold bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={serverPhone}
                      onChange={(e) => setServerPhone(e.target.value)}
                      placeholder="Phone (optional)"
                      aria-label="Phone"
                      className="w-1/2 text-xs text-gray-700 bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                    />
                    <input
                      type="text"
                      value={serverEmail}
                      onChange={(e) => setServerEmail(e.target.value)}
                      placeholder="Email (optional)"
                      aria-label="Email"
                      className="w-1/2 text-xs text-gray-700 bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                    />
                  </div>
                </div>

                {/* Notary Jurat Box */}
                <div className="border border-black p-3 bg-gray-50/50 print:bg-transparent">
                  <div className="font-bold uppercase text-xs mb-2 border-b border-gray-400 pb-1">
                    Notary Public Jurat / Acknowledgment
                  </div>
                  <div className="text-xs mb-2">
                    State of <input
                      type="text"
                      value={notaryState}
                      onChange={(e) => setNotaryState(e.target.value)}
                      placeholder="State"
                      aria-label="Notary State"
                      className="font-bold border-b border-black outline-none px-1 bg-transparent w-24 print-clean-input"
                    />, County of <input
                      type="text"
                      value={notaryCounty}
                      onChange={(e) => setNotaryCounty(e.target.value)}
                      placeholder="County"
                      aria-label="Notary County"
                      className="font-bold border-b border-black outline-none px-1 bg-transparent w-24 print-clean-input"
                    />
                  </div>
                  <p className="text-[11px] leading-snug mb-3 text-justify">
                    Subscribed and sworn to (or affirmed) before me this _____ day of __________________, 20___, 
                    by the affiant <strong className="border-b border-black px-1">{serverName || '___________________________'}</strong>, 
                    who proved to me on the basis of satisfactory evidence to be the person who appeared before me.
                  </p>

                  <div className="border-b border-black w-full mb-1 mt-5" />
                  <div className="text-xs font-bold mb-2">Notary Public Signature &amp; Official Seal</div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span>Commission No:</span>
                      <input
                        type="text"
                        value={commissionNum}
                        onChange={(e) => setCommissionNum(e.target.value)}
                        placeholder="Commission #"
                        aria-label="Notary Commission Number"
                        className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                      />
                    </div>
                    <div>
                      <span>My Comm. Expires:</span>
                      <input
                        type="text"
                        value={commissionExp}
                        onChange={(e) => setCommissionExp(e.target.value)}
                        placeholder="MM/DD/YYYY"
                        aria-label="Notary Commission Expiration"
                        className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 print-clean-input"
                      />
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
