'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';

export default function AffidavitOfService() {
  const [caseNumber, setCaseNumber] = useState('');
  const [courtName, setCourtName] = useState('');
  const [county, setCounty] = useState('');
  const [jobNumber, setJobNumber] = useState('');
  
  const [plaintiff, setPlaintiff] = useState('');
  const [defendant, setDefendant] = useState('');
  const [receivedBy, setReceivedBy] = useState('Just Legal Solutions');
  const [toBeServed, setToBeServed] = useState('');
  const [forClient, setForClient] = useState('');

  const [serverName, setServerName] = useState('Joseph Iannazzi');
  const [serverLicense, setServerLicense] = useState('Licensed');
  const [serverContact, setServerContact] = useState('Just Legal Solutions\n(539) 367-6832\nInfo@JustLegalSolutions.org');

  const [recipientDetails, setRecipientDetails] = useState('');
  const [mannerText, setMannerText] = useState('');
  const [documentsText, setDocumentsText] = useState('');

  const [showNotary, setShowNotary] = useState(true);
  const [affidavitTitle, setAffidavitTitle] = useState('AFFIDAVIT OF SERVICE');

  const [attempts, setAttempts] = useState([
    { id: 1, text: '' },
    { id: 2, text: '' },
  ]);

  const attemptsEndRef = useRef<HTMLDivElement>(null);

  const handlePrint = useCallback(() => {
    const originalTitle = document.title;
    if (caseNumber.trim()) {
      document.title = `${caseNumber.trim()} - Affidavit`;
    } else {
      document.title = affidavitTitle;
    }
    window.print();
    setTimeout(() => { document.title = originalTitle; }, 1000);
  }, [caseNumber, affidavitTitle]);

  const addAttempt = () => {
    if (attempts.length >= 8) return;
    setAttempts(prev => [...prev, { id: prev.length + 1, text: '' }]);
  };

  const removeAttempt = () => {
    if (attempts.length > 1) {
      setAttempts(prev => prev.slice(0, -1));
    }
  };

  const fillManner = (template: string) => {
    if (template) setMannerText(template);
  };

  return (
    <>
      <style jsx global>{`
        @page {
          size: letter portrait;
          margin: 0.5in;
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
            padding: 0.1in 0.2in !important;
            border: none !important;
            box-shadow: none !important;
            background: #fff !important;
            overflow: visible !important;
          }
          .affidavit-page input[type="text"],
          .affidavit-page textarea,
          .affidavit-page select {
            appearance: none !important;
            -webkit-appearance: none !important;
            background: transparent !important;
          }
          .affidavit-page .line-input {
            border-bottom: 1px solid #000 !important;
          }
          .affidavit-page ::placeholder {
            color: transparent !important;
          }
          .affidavit-page select {
            background-image: none !important;
          }
          .affidavit-page .manner-template-select {
            display: none !important;
          }
          .affidavit-page .attempt-controls {
            display: none !important;
          }
          .affidavit-page .footer-grid.no-notary {
            grid-template-columns: 1fr !important;
          }
          .affidavit-page .no-notary .notary-block {
            display: none !important;
          }
          .page-break-avoid {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }
      `}</style>

      {/* Controls */}
      <div
        className="no-print-affidavit"
        style={{
          background: '#1e293b',
          color: '#fff',
          padding: '12px 16px',
          marginBottom: '20px',
          borderRadius: '8px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          alignItems: 'center',
          flexWrap: 'wrap',
          maxWidth: '8.5in',
          margin: '0 auto 20px auto',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
        }}
      >
        <button
          onClick={handlePrint}
          style={{
            padding: '8px 18px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            borderRadius: '6px',
            fontSize: '14px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          🖨️ Print / Save to PDF
        </button>

        <label style={{ fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}>
          <input
            type="checkbox"
            checked={showNotary}
            onChange={(e) => setShowNotary(e.target.checked)}
            style={{ cursor: 'pointer', width: '16px', height: '16px' }}
          />
          Include Notary Section
        </label>
      </div>

      {/* Affidavit Document Container */}
      <div className="affidavit-wrapper" style={{ paddingBottom: '40px' }}>
        <div
          className="affidavit-page"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            background: 'white',
            width: '8.5in',
            minHeight: '10.5in',
            margin: '0 auto',
            padding: '0.4in 0.5in',
            boxSizing: 'border-box',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'visible',
            color: '#000',
            boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
          }}
        >
          {/* Title */}
          <select
            value={affidavitTitle}
            onChange={(e) => setAffidavitTitle(e.target.value)}
            aria-label="Affidavit type"
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              textDecoration: 'underline',
              marginBottom: 8,
              border: 'none',
              textAlignLast: 'center',
              appearance: 'none',
              WebkitAppearance: 'none',
              cursor: 'pointer',
              width: '100%',
              fontFamily: 'inherit',
              background: 'transparent',
              color: '#000',
            }}
          >
            <option value="AFFIDAVIT OF SERVICE">AFFIDAVIT OF SERVICE</option>
            <option value="AFFIDAVIT OF NON-SERVICE">AFFIDAVIT OF NON-SERVICE</option>
            <option value="DECLARATION OF SERVICE">DECLARATION OF SERVICE</option>
            <option value="DECLARATION OF NON-SERVICE">DECLARATION OF NON-SERVICE</option>
          </select>

          {/* Top Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.4fr 1.1fr 0.8fr', border: '2px solid #000', marginBottom: 6 }}>
            <GridCell label="Case:">
              <input
                type="text"
                placeholder="25CV69071"
                value={caseNumber}
                onChange={(e) => setCaseNumber(e.target.value)}
                aria-label="Case number"
                style={{ ...valInputStyle, fontWeight: 'bold' }}
              />
            </GridCell>
            <GridCell label="Court:">
              <input
                type="text"
                placeholder="County Circuit Court"
                value={courtName}
                onChange={(e) => setCourtName(e.target.value)}
                aria-label="Court"
                style={{ ...valInputStyle, fontWeight: 'bold' }}
              />
            </GridCell>
            <GridCell label="County:">
              <input
                type="text"
                placeholder="County, State"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                aria-label="County"
                style={{ ...valInputStyle, fontWeight: 'bold' }}
              />
            </GridCell>
            <GridCell label="Job:" last>
              <input
                type="text"
                placeholder="12345678"
                value={jobNumber}
                onChange={(e) => setJobNumber(e.target.value)}
                aria-label="Job number"
                style={{ ...valInputStyle, fontWeight: 'bold' }}
              />
            </GridCell>
          </div>

          {/* Parties */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15, marginBottom: 8 }}>
            <div>
              <PartyBox label="Plaintiff / Petitioner:">
                <input
                  type="text"
                  placeholder="Plaintiff Name"
                  value={plaintiff}
                  onChange={(e) => setPlaintiff(e.target.value)}
                  aria-label="Plaintiff or Petitioner"
                  style={baseInputStyle}
                />
              </PartyBox>
              <PartyBox label="Received by:">
                <input
                  type="text"
                  value={receivedBy}
                  onChange={(e) => setReceivedBy(e.target.value)}
                  aria-label="Received by"
                  style={{ ...baseInputStyle, fontWeight: 'bold' }}
                />
              </PartyBox>
              <PartyBox label="To be served upon:">
                <input
                  type="text"
                  placeholder="Target Name"
                  value={toBeServed}
                  onChange={(e) => setToBeServed(e.target.value)}
                  aria-label="To be served upon"
                  style={{ ...baseInputStyle, fontWeight: 'bold' }}
                />
              </PartyBox>
            </div>
            <div>
              <PartyBox label="Defendant / Respondent:">
                <input
                  type="text"
                  placeholder="Defendant Name"
                  value={defendant}
                  onChange={(e) => setDefendant(e.target.value)}
                  aria-label="Defendant or Respondent"
                  style={baseInputStyle}
                />
              </PartyBox>
              <PartyBox label="For:">
                <input
                  type="text"
                  placeholder="Client / Law Firm Name"
                  value={forClient}
                  onChange={(e) => setForClient(e.target.value)}
                  aria-label="For client or law firm"
                  style={baseInputStyle}
                />
              </PartyBox>
            </div>
          </div>

          {/* Sworn Statement */}
          <div style={{ fontSize: 11, textAlign: 'justify', marginBottom: 8, lineHeight: 1.3 }}>
            I, <strong><input
              type="text"
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
              aria-label="Affiant name"
              style={{ width: 140, fontWeight: 'bold', borderBottom: '1px solid #000', textAlign: 'center', border: 'none', borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: '#000', background: 'transparent', fontFamily: 'inherit', fontSize: 11, padding: 2 }}
            /></strong>, being duly sworn, depose and say: I am over the age of 18 years and not a party to this action, and that within the boundaries of the state where service was effected, I was authorized by law to make service of the documents and informed said person of the contents herein.
          </div>

          {/* Details Box */}
          <div style={{ border: '1px solid #000', padding: '6px 10px', marginBottom: 8 }}>
            <DetailRow label="Recipient Name / Address:">
              <input
                type="text"
                placeholder="Name, Address, City, State, Zip"
                value={recipientDetails}
                onChange={(e) => setRecipientDetails(e.target.value)}
                aria-label="Recipient name and address"
                style={baseInputStyle}
              />
            </DetailRow>

            <DetailRow label="Manner of Service:">
              <select
                className="manner-template-select"
                onChange={(e) => fillManner(e.target.value)}
                defaultValue=""
                aria-label="Manner of service template"
                style={{ fontSize: 10, color: '#2563eb', fontWeight: 'bold', marginBottom: 5, border: '1px dashed #ccc', width: '100%', fontFamily: 'inherit', padding: 2, background: 'transparent', cursor: 'pointer' }}
              >
                <option value="" disabled>-- Select a Template to Fill Text Below --</option>
                <option value="Personal: By personally delivering copies to the person being served.">Personal Delivery</option>
                <option value="Substituted at Residence: By leaving copies at dwelling house/usual place of abode with person of suitable age and discretion residing therein.">Substituted at Residence</option>
                <option value="Substituted at Business: By leaving, during office hours, copies at the office/business with person in charge.">Substituted at Business</option>
                <option value="Posting: By posting copies in a conspicuous manner to the front door of the premises.">Posting / Conspicuous Place</option>
                <option value="Non-Service: Unknown at Address after diligent inquiry.">Non-Service: Unknown</option>
                <option value="Non-Service: Moved, Left no Forwarding Address.">Non-Service: Moved</option>
                <option value="Non-Service: Address Does Not Exist or property is vacant.">Non-Service: Bad Address / Vacant</option>
                <option value="Non-Service: Evasion / Refusal to accept process.">Non-Service: Evasion / Refusal</option>
              </select>
              <AutoTextarea
                value={mannerText}
                onChange={(e) => setMannerText(e.target.value)}
                placeholder="Select a template above, or type custom manner of service here..."
                rows={2}
                style={{ fontFamily: 'inherit', fontSize: 11, width: '100%', border: 'none', borderBottom: '1px solid #ccc', resize: 'none', minHeight: 30, padding: 2, background: 'transparent' }}
              />
            </DetailRow>

            <DetailRow label="Documents:">
              <input
                type="text"
                placeholder="Summons, Complaint, Notice, Discovery, etc."
                value={documentsText}
                onChange={(e) => setDocumentsText(e.target.value)}
                aria-label="Documents served"
                style={baseInputStyle}
              />
            </DetailRow>
          </div>

          {/* Service Attempts */}
          <div style={{ marginBottom: 5, flexGrow: 1 }}>
            <div style={{ fontWeight: 'bold', fontSize: 11, marginBottom: 3 }}>Additional Comments / Service Attempts:</div>

            {attempts.map((attempt, idx) => (
              <div key={attempt.id} style={{ display: 'flex', marginBottom: 4, alignItems: 'flex-start' }}>
                <span style={{ width: 25, fontWeight: 'bold', fontSize: 11, paddingTop: 2, flexShrink: 0 }}>
                  {idx + 1})
                </span>
                <AutoTextarea
                  value={attempt.text}
                  onChange={(e) => {
                    const updated = [...attempts];
                    updated[idx] = { ...updated[idx], text: e.target.value };
                    setAttempts(updated);
                  }}
                  placeholder="Enter service attempt date, time, and details..."
                  style={{ width: '100%', fontFamily: 'inherit', fontSize: 11, border: 'none', borderBottom: '1px solid #eee', resize: 'none', minHeight: '1.3em', lineHeight: 1.3, padding: 2, background: 'transparent' }}
                />
              </div>
            ))}
            <div ref={attemptsEndRef} />

            <div className="attempt-controls" style={{ marginTop: 5, marginBottom: 10, textAlign: 'left', paddingLeft: 25 }}>
              <button onClick={addAttempt} style={btnActionStyle}>+ Add Attempt</button>{' '}
              <button onClick={removeAttempt} style={btnActionStyle}>- Remove Last</button>
            </div>
          </div>

          {/* Footer */}
          <div
            className={`footer-grid page-break-avoid${!showNotary ? ' no-notary' : ''}`}
            style={{
              display: 'grid',
              gridTemplateColumns: showNotary ? '1fr 1fr' : '1fr',
              gap: 30,
              marginTop: 'auto',
              alignItems: 'flex-end',
              paddingTop: 10,
            }}
          >
            {/* Server Info */}
            <div style={{ fontSize: 11, lineHeight: 1.4, maxWidth: showNotary ? '100%' : '320px' }}>
              {/* Signature Line */}
              <div style={{ borderBottom: '1px solid #000', width: '100%', marginBottom: 2 }} />

              <div style={{ display: 'flex', gap: showNotary ? 0 : 20 }}>
                <input
                  type="text"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                  aria-label="Server name"
                  style={{ ...baseInputStyle, fontWeight: 'bold', fontSize: 11, marginBottom: 2, width: showNotary ? '100%' : 'auto', borderBottom: 'none' }}
                />
                {!showNotary && (
                  <input
                    type="text"
                    value={serverLicense}
                    onChange={(e) => setServerLicense(e.target.value)}
                    aria-label="License number"
                    style={{ ...baseInputStyle, fontWeight: 'bold', fontSize: 11, width: 'auto', borderBottom: 'none' }}
                  />
                )}
              </div>
              {showNotary && (
                <input
                  type="text"
                  value={serverLicense}
                  onChange={(e) => setServerLicense(e.target.value)}
                  aria-label="License number"
                  style={{ ...baseInputStyle, fontWeight: 'bold', fontSize: 11, width: '100%', borderBottom: 'none' }}
                />
              )}

              <AutoTextarea
                value={serverContact}
                onChange={(e) => setServerContact(e.target.value)}
                rows={3}
                style={{ fontWeight: 'bold', fontFamily: 'inherit', fontSize: 11, border: 'none', resize: 'none', overflow: 'hidden', width: '100%', lineHeight: 1.4, marginTop: 10, padding: 0, background: 'transparent' }}
              />
            </div>

            {/* Notary Block */}
            {showNotary && (
              <div className="notary-block" style={{ fontSize: 11 }}>
                <div style={{ marginBottom: 10 }}>
                  Subscribed and sworn to before me by the affiant who is personally known to me.
                </div>

                <div style={{ marginBottom: 25, display: 'flex', alignItems: 'baseline' }}>
                  <span>Date:</span>
                  <input type="text" className="line-input" aria-label="Notary date" style={{ ...baseInputStyle, flexGrow: 1, marginLeft: 5, borderBottom: '1px solid #000' }} />
                </div>

                <div style={{ borderBottom: '1px solid #000', width: '100%', marginBottom: 5 }} />
                <div style={{ marginBottom: 10 }}>Notary Public</div>

                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <span>Commission&nbsp;Expires:</span>
                  <input type="text" className="line-input" aria-label="Commission expiration date" style={{ ...baseInputStyle, flexGrow: 1, marginLeft: 5, borderBottom: '1px solid #000' }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Shared styles ─── */

const baseInputStyle: React.CSSProperties = {
  border: 'none',
  borderBottom: '1px solid #ccc',
  background: 'transparent',
  fontFamily: 'inherit',
  fontSize: 11,
  padding: 2,
  width: '100%',
  boxSizing: 'border-box',
};

const valInputStyle: React.CSSProperties = {
  ...baseInputStyle,
  fontSize: 11,
};

const btnActionStyle: React.CSSProperties = {
  padding: '6px 12px',
  background: '#4b5563',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  borderRadius: 4,
  fontSize: 12,
};

/* ─── Sub-components ─── */

function GridCell({ label, children, last }: { label: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div style={{ padding: 5, borderRight: last ? 'none' : '1px solid #000', display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontWeight: 'bold', fontSize: 10, marginBottom: 2 }}>{label}</span>
      {children}
    </div>
  );
}

function PartyBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <span style={{ fontWeight: 'bold', fontSize: 10, marginBottom: 2, display: 'block' }}>{label}</span>
      {children}
    </div>
  );
}

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <span style={{ fontWeight: 'bold', fontSize: 11, display: 'block', marginBottom: 2 }}>{label}</span>
      {children}
    </div>
  );
}

function AutoTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const adjust = useCallback(() => {
    const el = ref.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    }
  }, []);

  useEffect(() => { adjust(); }, [props.value, props.defaultValue, adjust]);

  return (
    <textarea
      ref={ref}
      {...props}
      onInput={(e) => {
        adjust();
        props.onInput?.(e);
      }}
    />
  );
}
