'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { 
  Printer, 
  RotateCcw, 
  Trash2,
  Plus
} from 'lucide-react';

export default function AffidavitOfService() {
  // Document Title / Mode
  const [docType, setDocType] = useState('AFFIDAVIT OF SERVICE');

  // Caption / Court Info
  const [courtName, setCourtName] = useState('IN THE DISTRICT COURT OF TULSA COUNTY, STATE OF OKLAHOMA');
  const [plaintiff, setPlaintiff] = useState('');
  const [defendant, setDefendant] = useState('');
  const [caseNumber, setCaseNumber] = useState('');
  const [county, setCounty] = useState('Tulsa');
  const [stateName, setStateName] = useState('Oklahoma');
  const [jobNumber, setJobNumber] = useState('');
  const [recipientName, setRecipientName] = useState('');

  // Server / Affiant Details
  const [serverName, setServerName] = useState('Joseph Iannazzi');
  const [serverLicense, setServerLicense] = useState('Licensed Private Process Server');
  const [serverCompany, setServerCompany] = useState('Just Legal Solutions');
  const [serverPhone, setServerPhone] = useState('(539) 367-6832');
  const [serverEmail, setServerEmail] = useState('info@justlegalsolutions.org');

  // Service Details
  const [documentsServed, setDocumentsServed] = useState('');
  const [serviceAddress, setServiceAddress] = useState('');
  const [mannerText, setMannerText] = useState('');
  const [mannerPreset, setMannerPreset] = useState('');

  // Notary / Jurat Details
  const [showNotary, setShowNotary] = useState(true);
  const [notaryCounty, setNotaryCounty] = useState('Tulsa');
  const [notaryState, setNotaryState] = useState('Oklahoma');
  const [commissionNum, setCommissionNum] = useState('');
  const [commissionExp, setCommissionExp] = useState('');

  // Attempts Log
  const [attempts, setAttempts] = useState([
    { id: 1, date: '', time: '', notes: '' },
    { id: 2, date: '', time: '', notes: '' },
  ]);

  const mannerTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  const adjustMannerHeight = useCallback(() => {
    if (mannerTextareaRef.current) {
      mannerTextareaRef.current.style.height = 'auto';
      mannerTextareaRef.current.style.height = `${Math.max(48, mannerTextareaRef.current.scrollHeight)}px`;
    }
  }, []);

  useEffect(() => {
    adjustMannerHeight();
  }, [mannerText, adjustMannerHeight]);

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

  const addAttempt = () => {
    if (attempts.length >= 8) return;
    setAttempts(prev => [...prev, { id: prev.length + 1, date: '', time: '', notes: '' }]);
  };

  const removeAttempt = (id: number) => {
    if (attempts.length <= 1) return;
    setAttempts(prev => prev.filter(a => a.id !== id));
  };

  const updateAttempt = (id: number, field: 'date' | 'time' | 'notes', val: string) => {
    setAttempts(prev => prev.map(a => a.id === id ? { ...a, [field]: val } : a));
  };

  const applyMannerPreset = (preset: string) => {
    setMannerPreset(preset);
    switch (preset) {
      case 'personal':
        setMannerText('PERSONAL DELIVERY: By delivering a true and correct copy of the above-described documents to the recipient personally at the service address listed above.');
        break;
      case 'sub_residence':
        setMannerText('SUBSTITUTED SERVICE (RESIDENCE): By leaving true and correct copies at the usual place of abode of the recipient with a person of suitable age and discretion residing therein, and informing said person of the contents.');
        break;
      case 'sub_business':
        setMannerText('SUBSTITUTED SERVICE (BUSINESS): By delivering true and correct copies during regular business hours to the recipient\'s usual place of business with the person in charge or authorized to accept service.');
        break;
      case 'posting':
        setMannerText('POSTING / CONSPICUOUS PLACE: After multiple diligent attempts, by posting true and correct copies in a conspicuous place on the front door of the premises, and mailing a copy via First Class U.S. Mail.');
        break;
      case 'non_unknown':
        if (!docType.includes('NON-SERVICE')) setDocType('AFFIDAVIT OF NON-SERVICE');
        setMannerText('NON-SERVICE (UNKNOWN): Diligent inquiry with current resident/occupant confirmed that the subject does not reside at this location and is completely unknown.');
        break;
      case 'non_moved':
        if (!docType.includes('NON-SERVICE')) setDocType('AFFIDAVIT OF NON-SERVICE');
        setMannerText('NON-SERVICE (MOVED): Diligent inquiry confirmed the subject has moved from this address. No forwarding address was available or provided.');
        break;
      case 'non_bad_address':
        if (!docType.includes('NON-SERVICE')) setDocType('AFFIDAVIT OF NON-SERVICE');
        setMannerText('NON-SERVICE (VACANT / BAD ADDRESS): Address does not exist or property was found vacant/abandoned with no connection to the subject.');
        break;
      case 'non_evasion':
        if (!docType.includes('NON-SERVICE')) setDocType('AFFIDAVIT OF NON-SERVICE');
        setMannerText('NON-SERVICE (EVASION / REFUSAL): Subject actively avoided service, refused to open the door, or refused to accept papers despite confirmed presence.');
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    if (window.confirm('Clear all fields to a blank form?')) {
      setDocType('AFFIDAVIT OF SERVICE');
      setCourtName('');
      setPlaintiff('');
      setDefendant('');
      setCaseNumber('');
      setCounty('');
      setStateName('');
      setJobNumber('');
      setRecipientName('');
      setServerName('');
      setServerLicense('');
      setServerCompany('');
      setServerPhone('');
      setServerEmail('');
      setDocumentsServed('');
      setServiceAddress('');
      setMannerText('');
      setMannerPreset('');
      setCommissionNum('');
      setCommissionExp('');
      setAttempts([{ id: 1, date: '', time: '', notes: '' }]);
    }
  };

  return (
    <>
      <style jsx global>{`
        @page {
          size: letter portrait;
          margin: 0.4in 0.45in;
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

      {/* Top Mobile/Desktop Action Toolbar */}
      <div className="no-print-affidavit max-w-4xl mx-auto px-3 sm:px-4 mb-4">
        <div className="bg-slate-900 text-white rounded-xl shadow-lg p-3 sm:p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <select
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-white text-xs sm:text-sm font-bold rounded-lg px-3 py-1.5 outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="AFFIDAVIT OF SERVICE">AFFIDAVIT OF SERVICE</option>
              <option value="AFFIDAVIT OF NON-SERVICE">AFFIDAVIT OF NON-SERVICE</option>
              <option value="DECLARATION OF SERVICE">DECLARATION OF SERVICE</option>
              <option value="DECLARATION OF NON-SERVICE">DECLARATION OF NON-SERVICE</option>
            </select>

            <select
              value={mannerPreset}
              onChange={(e) => applyMannerPreset(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="">-- Manner Preset --</option>
              <option value="personal">Personal Delivery</option>
              <option value="sub_residence">Substituted (Residence)</option>
              <option value="sub_business">Substituted (Business)</option>
              <option value="posting">Posting / Conspicuous</option>
              <option value="non_unknown">Non-Service: Unknown</option>
              <option value="non_moved">Non-Service: Moved</option>
              <option value="non_bad_address">Non-Service: Bad Address</option>
              <option value="non_evasion">Non-Service: Evasion</option>
            </select>
          </div>

          <div className="flex items-center gap-2.5">
            <label className="inline-flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer mr-2">
              <input
                type="checkbox"
                checked={showNotary}
                onChange={(e) => setShowNotary(e.target.checked)}
                className="rounded text-blue-600 focus:ring-0 cursor-pointer"
              />
              <span>Notary Jurat</span>
            </label>

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
              onClick={handleReset}
              className="flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all active:scale-95 cursor-pointer border border-slate-700"
              title="Clear all fields"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear</span>
            </button>
          </div>
        </div>
      </div>

      {/* Affidavit Document */}
      <div className="affidavit-wrapper max-w-4xl mx-auto px-2 sm:px-4 pb-8">
        <div
          className="affidavit-page bg-white text-black shadow-xl rounded-sm p-6 sm:p-8 border border-slate-300"
          style={{
            fontFamily: '"Times New Roman", Times, Georgia, serif',
            color: '#000',
            fontSize: '10pt',
            lineHeight: 1.25,
          }}
        >
          {/* Header Court Title */}
          <div className="text-center font-bold text-xs sm:text-sm uppercase mb-3 tracking-wide">
            <input
              type="text"
              value={courtName}
              onChange={(e) => setCourtName(e.target.value)}
              placeholder="IN THE DISTRICT COURT OF TULSA COUNTY, STATE OF OKLAHOMA"
              aria-label="Court Name"
              className="w-full text-center font-bold text-xs sm:text-sm uppercase bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 screen-only"
            />
            <div className="print-only hidden text-center font-bold text-xs sm:text-sm uppercase">
              {courtName || 'IN THE DISTRICT COURT'}
            </div>
          </div>

          {/* Legal Caption Table */}
          <table className="w-full border-collapse border-t-2 border-b-2 border-black mb-3 text-xs" style={{ tableLayout: 'fixed' }}>
            <tbody>
              <tr>
                {/* Left: Parties */}
                <td className="w-[55%] align-top p-2 border-r-2 border-black pr-3">
                  <div>
                    <input
                      type="text"
                      value={plaintiff}
                      onChange={(e) => setPlaintiff(e.target.value)}
                      placeholder="PLAINTIFF / PETITIONER NAME(S)"
                      aria-label="Plaintiff"
                      className="w-full font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none screen-only"
                    />
                    <div className="print-only hidden font-bold">
                      {plaintiff || 'PLAINTIFF / PETITIONER'}
                    </div>
                  </div>
                  <div className="italic text-[10px] text-gray-700 mt-0.5">Plaintiff / Petitioner,</div>
                  
                  <div className="font-bold my-1 text-center text-gray-600">vs.</div>
                  
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
                      {defendant || 'DEFENDANT / RESPONDENT'}
                    </div>
                  </div>
                  <div className="italic text-[10px] text-gray-700 mt-0.5">Defendant / Respondent.</div>
                </td>

                {/* Right: Case Numbers & Recipient */}
                <td className="w-[45%] align-top p-2 pl-3 space-y-1">
                  <div>
                    <span className="font-bold text-[10px] uppercase">CASE NO: </span>
                    <input
                      type="text"
                      value={caseNumber}
                      onChange={(e) => setCaseNumber(e.target.value)}
                      placeholder="e.g. CJ-2026-01234"
                      aria-label="Case Number"
                      className="font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none w-36 screen-only"
                    />
                    <span className="print-only-inline hidden font-bold">
                      {caseNumber || '____________________'}
                    </span>
                  </div>

                  <div>
                    <span className="font-bold text-[10px] uppercase">COUNTY / STATE: </span>
                    <input
                      type="text"
                      value={county}
                      onChange={(e) => setCounty(e.target.value)}
                      placeholder="County"
                      aria-label="County"
                      className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-20 screen-only"
                    />
                    <span className="screen-only">, </span>
                    <input
                      type="text"
                      value={stateName}
                      onChange={(e) => setStateName(e.target.value)}
                      placeholder="State"
                      aria-label="State"
                      className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-20 screen-only"
                    />
                    <span className="print-only-inline hidden">
                      {county ? `${county}, ` : ''}{stateName || ''}
                    </span>
                  </div>

                  <div>
                    <span className="font-bold text-[10px] uppercase">JOB / REF #: </span>
                    <input
                      type="text"
                      value={jobNumber}
                      onChange={(e) => setJobNumber(e.target.value)}
                      placeholder="Job Ref #"
                      aria-label="Job Number"
                      className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-28 screen-only"
                    />
                    <span className="print-only-inline hidden">
                      {jobNumber || '—'}
                    </span>
                  </div>

                  <div className="pt-1 border-t border-gray-200">
                    <span className="font-bold text-[10px] uppercase block">PERSON TO BE SERVED:</span>
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="Target Recipient Name"
                      aria-label="Recipient Name"
                      className="w-full font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none screen-only"
                    />
                    <div className="print-only hidden font-bold">
                      {recipientName || '________________________________'}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Title */}
          <div className="text-center font-bold text-sm uppercase underline my-2 tracking-wider">
            {docType}
          </div>

          {/* Sworn Competency Statement */}
          <p className="text-justify text-[10pt] mb-2 leading-snug">
            I, <input
              type="text"
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
              placeholder="Process Server Name"
              aria-label="Process Server Name"
              className="inline-block font-bold text-center border-b border-black outline-none px-1 bg-transparent min-w-[150px] screen-only"
            /><span className="print-only-inline hidden font-bold">{serverName || '___________________________'}</span>, being first duly sworn or declaring under penalty of perjury, depose and say: 
            I am a legally authorized process server in the State of <input
              type="text"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
              placeholder="State"
              aria-label="Server State"
              className="font-bold border-b border-black outline-none px-1 bg-transparent w-20 screen-only"
            /><span className="print-only-inline hidden font-bold">{stateName || '_________'}</span>
            {serverLicense.trim() ? (
              <> (License No. <input
                type="text"
                value={serverLicense}
                onChange={(e) => setServerLicense(e.target.value)}
                placeholder="License #"
                aria-label="Server License Number"
                className="font-bold border-b border-black outline-none px-1 bg-transparent w-28 screen-only"
              /><span className="print-only-inline hidden font-bold">{serverLicense}</span>)</>
            ) : null}, over the age of eighteen (18) years, and not a party to nor interested in the outcome of the above-entitled action.
          </p>

          {/* Documents & Service Address */}
          <div className="space-y-1 mb-2 text-[9.5pt]">
            <div>
              <strong className="uppercase text-[9pt]">Documents Served: </strong>
              <input
                type="text"
                value={documentsServed}
                onChange={(e) => setDocumentsServed(e.target.value)}
                placeholder="e.g. Summons, Petition, Notice of Hearing"
                aria-label="Documents Served"
                className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-[75%] screen-only"
              />
              <span className="print-only-inline hidden font-medium">
                {documentsServed || 'Legal process / pleadings in this action'}
              </span>
            </div>

            <div>
              <strong className="uppercase text-[9pt]">Service Address: </strong>
              <input
                type="text"
                value={serviceAddress}
                onChange={(e) => setServiceAddress(e.target.value)}
                placeholder="Street Address, Suite/Apt, City, State, ZIP"
                aria-label="Service Address"
                className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-[75%] screen-only"
              />
              <span className="print-only-inline hidden font-medium">
                {serviceAddress || '__________________________________________________'}
              </span>
            </div>
          </div>

          {/* Manner of Service */}
          <div className="mb-2">
            <strong className="uppercase text-[9pt] block mb-0.5">
              {docType.includes('NON-SERVICE') ? 'Statement of Diligent Inquiry / Non-Service Reason:' : 'Manner of Service:'}
            </strong>
            <textarea
              ref={mannerTextareaRef}
              value={mannerText}
              onChange={(e) => {
                setMannerText(e.target.value);
                adjustMannerHeight();
              }}
              placeholder="State the exact manner of service or reasons for non-service..."
              rows={2}
              aria-label="Manner of Service"
              className="w-full bg-transparent border border-gray-300 focus:border-black outline-none p-1.5 text-[9.5pt] leading-tight resize-y screen-only"
            />
            <div className="print-only hidden text-[9.5pt] leading-snug p-0 m-0">
              {mannerText || 'Service effected in accordance with statutory civil procedure.'}
            </div>
          </div>

          {/* Service Attempts Log */}
          <div className="mb-3 page-break-avoid">
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

            <table className="w-full border-collapse border border-black text-[9pt]" style={{ tableLayout: 'fixed' }}>
              <thead>
                <tr className="bg-gray-100 text-center uppercase text-[8pt] border-b border-black">
                  <th className="p-1 border-r border-black" style={{ width: '8%' }}>#</th>
                  <th className="p-1 border-r border-black" style={{ width: '22%' }}>Date</th>
                  <th className="p-1 border-r border-black" style={{ width: '18%' }}>Time</th>
                  <th className="p-1 text-left pl-2" style={{ width: '52%' }}>Observations &amp; Details</th>
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
                        className="w-full text-center bg-transparent border-b border-gray-200 focus:border-black outline-none text-[9pt] screen-only"
                      />
                      <span className="print-only hidden">{att.date || '—'}</span>
                    </td>
                    <td className="p-1 border-r border-black text-center">
                      <input
                        type="text"
                        value={att.time}
                        onChange={(e) => updateAttempt(att.id, 'time', e.target.value)}
                        placeholder="10:30 AM"
                        aria-label={`Attempt ${idx + 1} Time`}
                        className="w-full text-center bg-transparent border-b border-gray-200 focus:border-black outline-none text-[9pt] screen-only"
                      />
                      <span className="print-only hidden">{att.time || '—'}</span>
                    </td>
                    <td className="p-1 pl-2">
                      <div className="flex items-center justify-between gap-1 screen-only">
                        <input
                          type="text"
                          value={att.notes}
                          onChange={(e) => updateAttempt(att.id, 'notes', e.target.value)}
                          placeholder="e.g. No answer, spoke with resident, vehicle on site..."
                          aria-label={`Attempt ${idx + 1} Notes`}
                          className="w-full bg-transparent border-b border-gray-200 focus:border-black outline-none text-[9pt]"
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
                      <div className="print-only hidden">
                        {att.notes || '—'}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Closing Signature & Notary Block */}
          <div className="pt-2 border-t border-black page-break-avoid">
            <div className="grid grid-cols-2 gap-4 text-xs" style={{ alignItems: 'flex-start' }}>
              
              {/* Left Column: Server Signature */}
              <div className="space-y-0.5">
                <div className="border-b border-black w-full mb-1 mt-5" />
                <span className="font-bold text-[9pt] uppercase block text-gray-800">Affiant / Process Server Signature</span>
                
                <div>
                  <input
                    type="text"
                    value={serverName}
                    onChange={(e) => setServerName(e.target.value)}
                    placeholder="Process Server Full Name"
                    aria-label="Server Name"
                    className="w-full font-bold text-[10pt] bg-transparent border-b border-gray-300 focus:border-black outline-none screen-only"
                  />
                  <div className="print-only hidden font-bold text-[10pt]">
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
                      className="w-full text-[9pt] text-gray-800 bg-transparent border-b border-gray-300 focus:border-black outline-none screen-only"
                    />
                    <div className="print-only hidden text-[9pt] text-gray-800">{serverLicense}</div>
                  </div>
                ) : null}

                {serverCompany.trim() ? (
                  <div>
                    <input
                      type="text"
                      value={serverCompany}
                      onChange={(e) => setServerCompany(e.target.value)}
                      placeholder="Company Name"
                      aria-label="Company Name"
                      className="w-full text-[9pt] font-semibold bg-transparent border-b border-gray-300 focus:border-black outline-none screen-only"
                    />
                    <div className="print-only hidden text-[9pt] font-semibold">{serverCompany}</div>
                  </div>
                ) : null}

                {(serverPhone.trim() || serverEmail.trim()) ? (
                  <div className="text-[8.5pt]">
                    <div className="flex gap-2 screen-only">
                      <input
                        type="text"
                        value={serverPhone}
                        onChange={(e) => setServerPhone(e.target.value)}
                        placeholder="Phone"
                        aria-label="Phone"
                        className="w-1/2 bg-transparent border-b border-gray-300 focus:border-black outline-none"
                      />
                      <input
                        type="text"
                        value={serverEmail}
                        onChange={(e) => setServerEmail(e.target.value)}
                        placeholder="Email"
                        aria-label="Email"
                        className="w-1/2 bg-transparent border-b border-gray-300 focus:border-black outline-none"
                      />
                    </div>
                    <div className="print-only hidden text-[8.5pt] text-gray-700">
                      {[serverPhone, serverEmail].filter(Boolean).join(' • ')}
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Right Column: Notary Jurat */}
              {showNotary && (
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
                      className="font-bold border-b border-black outline-none px-1 bg-transparent w-20 screen-only"
                    /><span className="print-only-inline hidden font-bold">{notaryState || '_________'}</span>, County of <input
                      type="text"
                      value={notaryCounty}
                      onChange={(e) => setNotaryCounty(e.target.value)}
                      placeholder="County"
                      aria-label="Notary County"
                      className="font-bold border-b border-black outline-none px-1 bg-transparent w-20 screen-only"
                    /><span className="print-only-inline hidden font-bold">{notaryCounty || '_________'}</span>
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
                        className="bg-transparent border-b border-gray-300 focus:border-black outline-none screen-only w-20"
                      />
                      <span className="print-only-inline hidden">{commissionNum || '____________'}</span>
                    </div>
                    <div>
                      <span>Expires: </span>
                      <input
                        type="text"
                        value={commissionExp}
                        onChange={(e) => setCommissionExp(e.target.value)}
                        placeholder="MM/DD/YYYY"
                        aria-label="Expiration Date"
                        className="bg-transparent border-b border-gray-300 focus:border-black outline-none screen-only w-24"
                      />
                      <span className="print-only-inline hidden">{commissionExp || '____________'}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
