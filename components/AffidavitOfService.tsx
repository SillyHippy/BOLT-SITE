'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';

export default function AffidavitOfService() {
  const [caseNumber, setCaseNumber] = useState('');
  const [showNotary, setShowNotary] = useState(true);
  const [affidavitTitle, setAffidavitTitle] = useState('AFFIDAVIT OF SERVICE');
  const [mannerText, setMannerText] = useState('');
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
      document.title = 'Affidavit of Service';
    }
    window.print();
    setTimeout(() => { document.title = originalTitle; }, 1000);
  }, [caseNumber]);

  const addAttempt = () => {
    if (attempts.length >= 6) return;
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
          size: letter;
          margin: 0.5in;
        }
        @media print {
          * { background-color: transparent !important; }
          html, body { background: none !important; padding: 0 !important; margin: 0 !important; height: auto !important; overflow: visible !important; }
          header, footer, footer#contact, nav, .navbar, .site-footer, .breadcrumb, .no-print-affidavit { display: none !important; visibility: hidden !important; height: 0 !important; max-height: 0 !important; overflow: hidden !important; padding: 0 !important; margin: 0 !important; border: none !important; }
          .affidavit-wrapper { background: none !important; background-color: white !important; padding: 0 !important; margin: 0 !important; min-height: 0 !important; }
          main, .flex.flex-col.min-h-screen, .flex.flex-col.min-h-screen > main { padding: 0 !important; margin: 0 !important; min-height: 0 !important; background: none !important; }
          .flex.flex-col.min-h-screen { min-height: 0 !important; display: block !important; }
          .pt-14 { padding-top: 0 !important; }
          .affidavit-page {
            width: 100% !important;
            height: 10in !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0.4in 0.5in !important;
            border: none !important;
            box-shadow: none !important;
            background: white !important;
            background-color: white !important;
            overflow: hidden !important;
          }
          .affidavit-page input[type="text"],
          .affidavit-page textarea,
          .affidavit-page select {
            border-bottom: none !important;
            appearance: none !important;
            -webkit-appearance: none !important;
          }
          .affidavit-page .line-input {
            border-bottom: 1px solid #000 !important;
          }
          .affidavit-page ::placeholder { color: transparent !important; }
          .affidavit-page select { background-image: none !important; }
          .affidavit-page .manner-template-select { display: none !important; }
          .affidavit-page .attempt-controls { display: none !important; }
          .affidavit-page .footer-grid.no-notary { grid-template-columns: 1fr !important; }
          .affidavit-page .no-notary .notary-block { display: none !important; }
        }
      `}</style>

      {/* Controls */}
      <div className="no-print-affidavit" style={{ background: '#fff', padding: 10, marginBottom: 20, borderRadius: 5, textAlign: 'center', fontFamily: 'sans-serif', display: 'flex', justifyContent: 'center', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={handlePrint}
          style={{ padding: '8px 16px', background: '#2563eb', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', borderRadius: 4, fontSize: 14 }}
        >
          Print / Save to PDF
        </button>
        <label style={{ fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
          <input
            type="checkbox"
            checked={showNotary}
            onChange={(e) => setShowNotary(e.target.checked)}
          />
          Include Notary Section
        </label>
      </div>

      {/* Affidavit Page */}
      <div
        className="affidavit-page"
        style={{
          fontFamily: '"Times New Roman", Times, serif',
          background: 'white',
          width: '8.5in',
          minHeight: '11in',
          margin: '0 auto',
          padding: '0.5in',
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
          }}
        >
          <option value="AFFIDAVIT OF SERVICE">AFFIDAVIT OF SERVICE</option>
          <option value="AFFIDAVIT OF NON-SERVICE">AFFIDAVIT OF NON-SERVICE</option>
        </select>

        {/* Top Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr 0.8fr', border: '2px solid #000', marginBottom: 6 }}>
          <GridCell label="Case:">
            <input type="text" placeholder="25CV69071" value={caseNumber} onChange={(e) => setCaseNumber(e.target.value)} style={{ ...valInputStyle, fontWeight: 'bold' }} />
          </GridCell>
          <GridCell label="Court:">
            <input type="text" placeholder="County Circuit Court" style={{ ...valInputStyle, fontWeight: 'bold' }} />
          </GridCell>
          <GridCell label="County:">
            <input type="text" placeholder="County, State" style={{ ...valInputStyle, fontWeight: 'bold' }} />
          </GridCell>
          <GridCell label="Job:" last>
            <input type="text" placeholder="12345678" style={{ ...valInputStyle, fontWeight: 'bold' }} />
          </GridCell>
        </div>

        {/* Parties */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15, marginBottom: 8 }}>
          <div>
            <PartyBox label="Plaintiff / Petitioner:">
              <input type="text" placeholder="Plaintiff Name" style={baseInputStyle} />
            </PartyBox>
            <PartyBox label="Received by:">
              <input type="text" defaultValue="Just Legal Solutions" style={{ ...baseInputStyle, fontWeight: 'bold' }} />
            </PartyBox>
            <PartyBox label="To be served upon:">
              <input type="text" placeholder="Target Name" style={{ ...baseInputStyle, fontWeight: 'bold' }} />
            </PartyBox>
          </div>
          <div>
            <PartyBox label="Defendant / Respondent:">
              <input type="text" placeholder="Defendant Name" style={baseInputStyle} />
            </PartyBox>
            <PartyBox label="For:">
              <input type="text" placeholder="Client / Law Firm Name" style={baseInputStyle} />
            </PartyBox>
          </div>
        </div>

        {/* Sworn Statement */}
        <div style={{ fontSize: 11, textAlign: 'justify', marginBottom: 8, lineHeight: 1.3 }}>
          I, <strong><input type="text" defaultValue="Joseph Iannazzi" style={{ width: 100, fontWeight: 'bold', borderBottom: '1px solid #000', textAlign: 'center', border: 'none', borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: '#000', background: 'transparent', fontFamily: 'inherit', fontSize: 11, padding: 2 }} /></strong>, being duly sworn, depose and say: I am over the age of 18 years and not a party to this action, and that within the boundaries of the state where service was effected, I was authorized by law to make service of the documents and informed said person of the contents herein.
        </div>

        {/* Details Box */}
        <div style={{ border: '1px solid #000', padding: '6px 10px', marginBottom: 8 }}>
          <DetailRow label="Recipient Name / Address:">
            <input type="text" placeholder="Name, Address, City, State, Zip" style={baseInputStyle} />
          </DetailRow>

          <DetailRow label="Manner of Service:">
            <select
              className="manner-template-select"
              onChange={(e) => fillManner(e.target.value)}
              defaultValue=""
              style={{ fontSize: 10, color: '#2563eb', fontWeight: 'bold', marginBottom: 5, border: '1px dashed #ccc', width: '100%', fontFamily: 'inherit', padding: 2, background: 'transparent', cursor: 'pointer' }}
            >
              <option value="" disabled>-- Select a Template to Fill Text Below --</option>
              <option value="Personal: By personally delivering copies to the person being served.">Personal</option>
              <option value="Substituted at Residence: By leaving copies at dwelling/usual place of abode with member of household over the age of 15.">Substituted at Residence (Default Age 15)</option>
              <option value="Substituted at Business: By leaving, during office hours, copies at the office with person apparently in charge.">Substituted at Business</option>
              <option value="Posting: By posting copies in a conspicuous manner to the front door of the person/entity being served.">Posting</option>
              <option value="Non-Service: Unknown at Address">Non-Service: Unknown</option>
              <option value="Non-Service: Moved, Left no Forwarding">Non-Service: Moved</option>
              <option value="Non-Service: Address Does Not Exist">Non-Service: Bad Address</option>
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
            <input type="text" placeholder="Summons, Complaint, etc." style={baseInputStyle} />
          </DetailRow>
        </div>

        {/* Service Attempts */}
        <div style={{ marginBottom: 5, flexGrow: 1 }}>
          <div style={{ fontWeight: 'bold', fontSize: 11, marginBottom: 3 }}>Additional Comments:</div>

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
                placeholder="Enter service attempt details..."
                style={{ width: '100%', fontFamily: 'inherit', fontSize: 11, border: 'none', borderBottom: '1px solid #eee', resize: 'none', minHeight: '1.2em', lineHeight: 1.3, padding: 2, background: 'transparent' }}
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
          className={`footer-grid${!showNotary ? ' no-notary' : ''}`}
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
          <div style={{ fontSize: 11, lineHeight: 1.4, maxWidth: showNotary ? '100%' : '300px' }}>
            {/* Signature Line */}
            <div style={{ borderBottom: '1px solid #000', width: '100%', marginBottom: 2 }} />

            <div style={{ display: 'flex', gap: showNotary ? 0 : 20 }}>
              <input type="text" defaultValue="Joseph Iannazzi" style={{ ...baseInputStyle, fontWeight: 'bold', fontSize: 11, marginBottom: 2, width: showNotary ? '100%' : 'auto', borderBottom: 'none' }} />
              {!showNotary && (
                <input type="text" defaultValue="PSL-2025-5" style={{ ...baseInputStyle, fontWeight: 'bold', fontSize: 11, width: 'auto', borderBottom: 'none' }} />
              )}
            </div>
            {showNotary && (
              <input type="text" defaultValue="PSL-2025-5" style={{ ...baseInputStyle, fontWeight: 'bold', fontSize: 11, width: '100%', borderBottom: 'none' }} />
            )}

            <AutoTextarea
              defaultValue={`Just Legal Solutions\n(539) 367-6832\nInfo@JustLegalSolutions.org`}
              rows={3}
              style={{ fontWeight: 'bold', fontFamily: 'inherit', fontSize: 11, border: 'none', resize: 'none', overflow: 'hidden', width: showNotary ? '100%' : '100%', lineHeight: 1.4, marginTop: 10, padding: 0, background: 'transparent' }}
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
                <input type="text" className="line-input" style={{ ...baseInputStyle, flexGrow: 1, marginLeft: 5, borderBottom: '1px solid #000' }} />
              </div>

              <div style={{ borderBottom: '1px solid #000', width: '100%', marginBottom: 5 }} />
              <div style={{ marginBottom: 10 }}>Notary Public</div>

              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <span>Commission&nbsp;Expires:</span>
                <input type="text" className="line-input" style={{ ...baseInputStyle, flexGrow: 1, marginLeft: 5, borderBottom: '1px solid #000' }} />
              </div>
            </div>
          )}
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
