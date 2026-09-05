'use client';

import React, { useState, useCallback } from 'react';
import { Printer, RotateCcw, Sparkles } from 'lucide-react';

export default function FieldSheet() {
  // Agency / Server Branding (Default: Blank / Universal)
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [serverName, setServerName] = useState('');

  // Client / Forwarding Info
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [jobNumber, setJobNumber] = useState('');
  const [dueDate, setDueDate] = useState('');

  // Case Information
  const [caseNumber, setCaseNumber] = useState('');
  const [courtName, setCourtName] = useState('');
  const [plaintiff, setPlaintiff] = useState('');
  const [defendant, setDefendant] = useState('');
  const [documentsLine, setDocumentsLine] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Target Subject / Physical Description
  const [recipientName, setRecipientName] = useState('');
  const [targetPhone, setTargetPhone] = useState('');
  const [targetAge, setTargetAge] = useState('');
  const [targetSex, setTargetSex] = useState('');
  const [targetRace, setTargetRace] = useState('');
  const [targetHeight, setTargetHeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [targetHair, setTargetHair] = useState('');
  const [targetMarks, setTargetMarks] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState('');

  // Service Locations
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const handlePrint = useCallback(() => {
    const originalTitle = document.title;
    if (caseNumber.trim()) {
      document.title = `${caseNumber.trim()} - Field Sheet`;
    } else if (recipientName.trim()) {
      document.title = `${recipientName.trim()} - Field Sheet`;
    } else {
      document.title = 'Process Server Field Sheet';
    }
    window.print();
    setTimeout(() => { document.title = originalTitle; }, 1000);
  }, [caseNumber, recipientName]);

  const handlePrefillJLS = () => {
    setCompanyName('Just Legal Solutions');
    setCompanyEmail('info@justlegalsolutions.org');
    setCompanyPhone('(539) 367-6832');
    setServerName('Joseph Iannazzi');
  };

  const handleReset = () => {
    if (window.confirm('Clear all fields to a blank field sheet?')) {
      setCompanyName('');
      setCompanyEmail('');
      setCompanyPhone('');
      setServerName('');
      setClientName('');
      setClientPhone('');
      setJobNumber('');
      setDueDate('');
      setCaseNumber('');
      setCourtName('');
      setPlaintiff('');
      setDefendant('');
      setDocumentsLine('');
      setSpecialInstructions('');
      setRecipientName('');
      setTargetPhone('');
      setTargetAge('');
      setTargetSex('');
      setTargetRace('');
      setTargetHeight('');
      setTargetWeight('');
      setTargetHair('');
      setTargetMarks('');
      setVehicleInfo('');
      setAddress1('');
      setAddress2('');
    }
  };

  return (
    <>
      <style jsx global>{`
        @page {
          size: letter portrait;
          margin: 0.25in 0.3in;
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
            font-size: 9.5pt !important;
          }
          header, footer, nav, .navbar, .site-footer, .breadcrumb, .no-print-field-sheet, [aria-label="Call or contact Just Legal Solutions"], .fixed, .sticky, [class*="sticky"], [class*="Sticky"], #mobile-menu, .ui-mobile-safe-panel, .ui-glass-nav {
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
          .field-sheet-wrapper {
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
          .field-sheet-page {
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
          .field-sheet-page input[type="text"],
          .field-sheet-page textarea {
            border: none !important;
            border-bottom: 1px solid #000 !important;
            background: transparent !important;
            padding: 0 2px !important;
          }
          .field-sheet-page ::placeholder {
            color: transparent !important;
          }
          .section-title-bar {
            background-color: #e5e7eb !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .highlight-target-box {
            background-color: #f3f4f6 !important;
            border: 2px solid #000 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
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
        }
      `}</style>

      {/* Top Controls Toolbar */}
      <div className="no-print-field-sheet max-w-4xl mx-auto px-3 sm:px-4 mb-4">
        <div className="bg-slate-900 text-white rounded-xl shadow-lg p-3 sm:p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-sm sm:text-base text-white">Process Server Field Sheet Generator</h2>
            <span className="bg-emerald-600/30 text-emerald-300 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30 hidden sm:inline-block">
              1-Page Street Sheet
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrefillJLS}
              className="text-xs text-amber-400 hover:text-amber-300 underline font-medium cursor-pointer rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              title="Prefill Just Legal Solutions info"
            >
              Prefill JLS Info
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-1.5 rounded-lg font-semibold text-xs shadow transition-all active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all active:scale-95 cursor-pointer border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
              title="Clear all fields"
            >
              <RotateCcw className="w-3 h-3" aria-hidden="true" />
              <span>Clear</span>
            </button>
          </div>
        </div>
      </div>

      {/* Street Field Sheet Form (Exact 1-Page Letter Layout) */}
      <div className="field-sheet-wrapper max-w-4xl mx-auto px-2 sm:px-4 pb-8">
        <div
          className="field-sheet-page bg-white text-black shadow-xl rounded-sm p-4 sm:p-6 border border-slate-300"
          style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            color: '#000',
            fontSize: '9pt',
            lineHeight: 1.15,
          }}
        >
          {/* Header Row: Agency/Server Info (Left) + Client Reference (Right) */}
          <div className="flex justify-between items-start border-b-2 border-black pb-1 mb-1.5">
            <div className="w-[58%]">
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="PROCESS SERVICE AGENCY / SERVER NAME"
                className="font-extrabold text-sm sm:text-base uppercase w-full bg-transparent border-b border-gray-300 focus:border-black outline-none"
              />
              <div className="flex gap-3 text-[8.5pt] mt-0.5">
                <div className="flex items-center gap-1">
                  <strong>Phone:</strong>
                  <input
                    type="text"
                    value={companyPhone}
                    onChange={(e) => setCompanyPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                    className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-28 text-[8.5pt]"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <strong>Email:</strong>
                  <input
                    type="text"
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}
                    placeholder="server@agency.com"
                    className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-44 text-[8.5pt]"
                  />
                </div>
              </div>
            </div>

            <div className="w-[40%] text-right space-y-0.5 text-[8.5pt]">
              <div className="flex justify-end items-center gap-1">
                <strong>Forwarding Client / Firm:</strong>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Law Firm / Client"
                  className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-32 text-right text-[8.5pt]"
                />
              </div>
              <div className="flex justify-end items-center gap-1">
                <strong>Client Phone / Contact:</strong>
                <input
                  type="text"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="(555) 000-0000"
                  className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-32 text-right text-[8.5pt]"
                />
              </div>
            </div>
          </div>

          {/* Section: Case Information */}
          <div className="section-title-bar bg-gray-200 border-t border-b border-black font-bold uppercase text-[8pt] px-1.5 py-0.5 mb-1">
            Case Information
          </div>
          <div className="grid grid-cols-2 gap-2 mb-1 text-[8.5pt]">
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <strong className="w-16 uppercase text-[8pt]">Case No:</strong>
                <input
                  type="text"
                  value={caseNumber}
                  onChange={(e) => setCaseNumber(e.target.value)}
                  placeholder="e.g. CJ-2026-01234"
                  className="w-full font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none"
                />
              </div>
              <div className="flex items-center gap-1">
                <strong className="w-16 uppercase text-[8pt]">Plaintiff:</strong>
                <input
                  type="text"
                  value={plaintiff}
                  onChange={(e) => setPlaintiff(e.target.value)}
                  placeholder="Plaintiff Name"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <strong className="w-20 uppercase text-[8pt]">Court / Venue:</strong>
                <input
                  type="text"
                  value={courtName}
                  onChange={(e) => setCourtName(e.target.value)}
                  placeholder="e.g. Tulsa County District Court"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none"
                />
              </div>
              <div className="flex items-center gap-1">
                <strong className="w-20 uppercase text-[8pt]">Defendant:</strong>
                <input
                  type="text"
                  value={defendant}
                  onChange={(e) => setDefendant(e.target.value)}
                  placeholder="Defendant Name"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-1 text-[8.5pt]">
            <div className="col-span-3 flex items-center gap-1">
              <strong className="w-28 uppercase text-[8pt]">Documents:</strong>
              <input
                type="text"
                value={documentsLine}
                onChange={(e) => setDocumentsLine(e.target.value)}
                placeholder="e.g. Summons, Petition, Order to Appear, Discovery Requests"
                className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none"
              />
            </div>
            <div className="flex items-center gap-1">
              <strong className="w-14 uppercase text-[8pt]">Due Date:</strong>
              <input
                type="text"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                placeholder="MM/DD/YYYY"
                className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none text-center"
              />
            </div>
          </div>

          <div className="flex items-center gap-1 mb-1.5 text-[8.5pt]">
            <strong className="w-36 uppercase text-[8pt] text-red-700">Special Instructions / Alerts:</strong>
            <input
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. Beware of dog behind fence; confirm employment with manager; rush before court hearing"
              className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none italic font-medium"
            />
          </div>

          {/* Section: Target Subject to Serve & Physical Profile */}
          <div className="highlight-target-box border-2 border-black bg-gray-50 p-1.5 mb-1.5">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-1 flex-grow mr-2">
                <span className="font-extrabold uppercase text-[9pt] text-gray-900">PARTY TO SERVE:</span>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="TARGET INDIVIDUAL OR ENTITY TO BE SERVED"
                  className="font-extrabold text-[10pt] uppercase bg-transparent border-b-2 border-black outline-none w-full px-1"
                />
              </div>
              <div className="flex items-center gap-1 shrink-0 text-[8.5pt]">
                <strong>Subject Phone:</strong>
                <input
                  type="text"
                  value={targetPhone}
                  onChange={(e) => setTargetPhone(e.target.value)}
                  placeholder="(555) 000-0000"
                  className="bg-transparent border-b border-black outline-none w-28 text-[8.5pt]"
                />
              </div>
            </div>

            {/* Physical Profile Checklist */}
            <div className="grid grid-cols-6 gap-1.5 text-[8pt] border-t border-gray-300 pt-1">
              <div>
                <span className="font-bold text-gray-600 block">AGE:</span>
                <input
                  type="text"
                  value={targetAge}
                  onChange={(e) => setTargetAge(e.target.value)}
                  placeholder="e.g. 35-40"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none"
                />
              </div>
              <div>
                <span className="font-bold text-gray-600 block">SEX:</span>
                <input
                  type="text"
                  value={targetSex}
                  onChange={(e) => setTargetSex(e.target.value)}
                  placeholder="M / F"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none"
                />
              </div>
              <div>
                <span className="font-bold text-gray-600 block">RACE / ETHN:</span>
                <input
                  type="text"
                  value={targetRace}
                  onChange={(e) => setTargetRace(e.target.value)}
                  placeholder="W / B / H / A"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none"
                />
              </div>
              <div>
                <span className="font-bold text-gray-600 block">HEIGHT:</span>
                <input
                  type="text"
                  value={targetHeight}
                  onChange={(e) => setTargetHeight(e.target.value)}
                  placeholder="5 ft 10 in"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none"
                />
              </div>
              <div>
                <span className="font-bold text-gray-600 block">WEIGHT:</span>
                <input
                  type="text"
                  value={targetWeight}
                  onChange={(e) => setTargetWeight(e.target.value)}
                  placeholder="180 lbs"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none"
                />
              </div>
              <div>
                <span className="font-bold text-gray-600 block">HAIR / GLASSES:</span>
                <input
                  type="text"
                  value={targetHair}
                  onChange={(e) => setTargetHair(e.target.value)}
                  placeholder="Brown / Yes"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[8pt] border-t border-gray-200 mt-1 pt-1">
              <div className="flex items-center gap-1">
                <strong className="text-gray-700 shrink-0">TATTOOS / SCARS / MARKS:</strong>
                <input
                  type="text"
                  value={targetMarks}
                  onChange={(e) => setTargetMarks(e.target.value)}
                  placeholder="e.g. Sleeve tattoo left arm, scar right cheek"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none"
                />
              </div>
              <div className="flex items-center gap-1">
                <strong className="text-gray-700 shrink-0">VEHICLE INFO:</strong>
                <input
                  type="text"
                  value={vehicleInfo}
                  onChange={(e) => setVehicleInfo(e.target.value)}
                  placeholder="e.g. 2018 Silver Ford F-150 (OK Tag: ABC-123)"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none"
                />
              </div>
            </div>
          </div>

          {/* Section: Service Addresses */}
          <div className="section-title-bar bg-gray-200 border-t border-b border-black font-bold uppercase text-[8pt] px-1.5 py-0.5 mb-1">
            Service Locations
          </div>
          <div className="space-y-1 mb-2 text-[8.5pt]">
            <div className="flex items-center gap-1">
              <strong className="w-36 uppercase text-[8pt] shrink-0">Address 1 (Residence):</strong>
              <input
                type="text"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                placeholder="Primary Residence Street Address, City, State, ZIP"
                className="w-full font-medium bg-transparent border-b border-gray-300 focus:border-black outline-none"
              />
            </div>
            <div className="flex items-center gap-1">
              <strong className="w-36 uppercase text-[8pt] shrink-0">Address 2 (Work / Business):</strong>
              <input
                type="text"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                placeholder="Employer Name / Suite / Business Address, City, State, ZIP"
                className="w-full font-medium bg-transparent border-b border-gray-300 focus:border-black outline-none"
              />
            </div>
          </div>

          {/* Section: Field Service Log & 4 Attempts Table */}
          <div className="border border-black p-1.5 mb-1.5">
            <div className="text-center font-bold uppercase text-[8.5pt] border-b border-black pb-0.5 mb-1 tracking-wider">
              Field Attempts &amp; Service Execution Log
            </div>

            <table className="w-full border-collapse border border-black text-[8pt]" style={{ tableLayout: 'fixed' }}>
              <thead>
                <tr className="bg-gray-100 uppercase border-b border-black text-center">
                  <th style={{ width: '6%', borderRight: '1px solid #000', padding: '2px' }}>#</th>
                  <th style={{ width: '12%', borderRight: '1px solid #000', padding: '2px' }}>Date</th>
                  <th style={{ width: '10%', borderRight: '1px solid #000', padding: '2px' }}>Time</th>
                  <th style={{ width: '48%', borderRight: '1px solid #000', padding: '2px', textAlign: 'left', paddingLeft: '4px' }}>Field Notes / Resident Contact / Observations</th>
                  <th style={{ width: '12%', borderRight: '1px solid #000', padding: '2px' }}>GPS / Mil</th>
                  <th style={{ width: '12%', padding: '2px' }}>Server Init</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((num) => (
                  <tr key={num} className="border-b border-black last:border-b-0 h-10">
                    <td style={{ borderRight: '1px solid #000', textAlign: 'center', fontWeight: 'bold' }}>{num}</td>
                    <td style={{ borderRight: '1px solid #000' }}></td>
                    <td style={{ borderRight: '1px solid #000' }}></td>
                    <td style={{ borderRight: '1px solid #000' }}></td>
                    <td style={{ borderRight: '1px solid #000' }}></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Final Service Disposition & Execution Sign-off */}
          <div className="border border-black p-1.5 text-[8pt]">
            <div className="grid grid-cols-4 gap-2 mb-1 border-b border-gray-300 pb-1">
              <div>
                <strong>DISPOSITION:</strong> [ &nbsp; ] SERVED &nbsp; [ &nbsp; ] NON-SERVICE
              </div>
              <div>
                <strong>METHOD:</strong> [ &nbsp; ] Personal &nbsp; [ &nbsp; ] Substituted &nbsp; [ &nbsp; ] Post
              </div>
              <div className="col-span-2">
                <strong>ACCEPTED BY / ROLE:</strong> ___________________________________
              </div>
            </div>

            <div className="flex justify-between items-end pt-1">
              <div className="w-[50%]">
                <div><strong>Assigned Server:</strong> {serverName || '_________________________________'}</div>
                <div className="text-[7.5pt] text-gray-600 mt-0.5">I certify that the field entries above reflect true and accurate service attempts.</div>
              </div>
              <div className="w-[45%] text-right">
                <div className="border-b border-black w-full mb-0.5"></div>
                <div className="text-[7.5pt] uppercase font-bold text-center">Process Server Signature &amp; Date</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
