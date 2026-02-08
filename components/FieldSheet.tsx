'use client';

import React, { useState, useCallback } from 'react';

export default function FieldSheet() {
  const [caseNumber, setCaseNumber] = useState('');
  const [companyName, setCompanyName] = useState('Just Legal Solutions');
  const [companyEmail, setCompanyEmail] = useState('Info@JustLegalSolutions.org');
  const [companyPhone, setCompanyPhone] = useState('(539) 367-6832');

  const handlePrint = useCallback(() => {
    // Update document title for PDF filename
    const originalTitle = document.title;
    if (caseNumber.trim()) {
      document.title = `${caseNumber.trim()} - Field Sheet`;
    } else {
      document.title = 'Field Sheet Template';
    }
    window.print();
    // Restore original title after print dialog
    setTimeout(() => { document.title = originalTitle; }, 1000);
  }, [caseNumber]);

  return (
    <>
      {/* Scoped print styles */}
      <style jsx global>{`
        @page {
          size: letter;
          margin: 0.3in;
        }
        @media print {
          body { background: none !important; padding: 0 !important; margin: 0 !important; }
          header, footer, nav, .navbar, .site-footer, .breadcrumb, .no-print-field-sheet { display: none !important; }
          main { padding: 0 !important; margin: 0 !important; }
          .field-sheet-page {
            width: 100% !important;
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
            background: white !important;
          }
          .field-sheet-page input[type="text"],
          .field-sheet-page input[type="date"],
          .field-sheet-page textarea {
            border: none !important;
            border-bottom: 1px solid #ccc !important;
            padding: 1px 0 !important;
          }
          .field-sheet-page ::placeholder {
            color: transparent !important;
          }
          .field-sheet-page .highlight-box input {
            border: 2px solid #000 !important;
            background-color: #fff !important;
          }
          .field-sheet-page .section-title-bar {
            background-color: #ddd !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      {/* Print Button */}
      <div className="no-print-field-sheet text-center mb-6 pt-4">
        <button
          onClick={handlePrint}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-colors cursor-pointer text-base"
        >
          Print / Save to PDF
        </button>
        <p className="text-sm text-gray-500 mt-2">Tip: Use &quot;Save as PDF&quot; in the print dialog for a digital copy.</p>
      </div>

      {/* Field Sheet Page */}
      <div
        className="field-sheet-page"
        style={{
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          background: 'white',
          width: '8.5in',
          height: '11in',
          margin: '0 auto',
          padding: '0.25in 0.35in',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
          color: '#000',
          boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            borderBottom: '2px solid #000',
            paddingBottom: 3,
            marginBottom: 3,
          }}
        >
          <div>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              style={{ margin: 0, fontSize: 18, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.5, border: 'none', borderBottom: '1px solid transparent', background: 'transparent', width: '100%', padding: 0, fontFamily: 'inherit' }}
            />
            <div style={{ display: 'flex', alignItems: 'center', margin: '1px 0', fontSize: 11 }}>
              <strong style={{ marginRight: 4 }}>Email:</strong>
              <input
                type="text"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
                style={{ border: 'none', borderBottom: '1px solid transparent', background: 'transparent', fontSize: 11, fontFamily: 'inherit', padding: 0, width: 220 }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', margin: '1px 0', fontSize: 11 }}>
              <strong style={{ marginRight: 4 }}>Phone:</strong>
              <input
                type="text"
                value={companyPhone}
                onChange={(e) => setCompanyPhone(e.target.value)}
                style={{ border: 'none', borderBottom: '1px solid transparent', background: 'transparent', fontSize: 11, fontFamily: 'inherit', padding: 0, width: 150 }}
              />
            </div>
          </div>
          <div>
            <FieldGroup label="Client Reference">
              <input type="text" placeholder="Law Firm / Client Name" style={{ ...inputStyle, textAlign: 'right', width: 220 }} />
            </FieldGroup>
            <FieldGroup label="Client Phone">
              <input type="text" placeholder="(555) 000-0000" style={{ ...inputStyle, textAlign: 'right', width: 220 }} />
            </FieldGroup>
          </div>
        </div>

        {/* Case Information */}
        <SectionTitle>Case Information</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div>
            <FieldGroup label="Case Number">
              <input
                type="text"
                placeholder="CV-202X-00000"
                value={caseNumber}
                onChange={(e) => setCaseNumber(e.target.value)}
                style={inputStyle}
              />
            </FieldGroup>
            <FieldGroup label="Plaintiff">
              <input type="text" placeholder="Jane Doe (Plaintiff Name)" style={inputStyle} />
            </FieldGroup>
          </div>
          <div>
            <FieldGroup label="Court">
              <input type="text" placeholder="County Circuit Court" style={inputStyle} />
            </FieldGroup>
            <FieldGroup label="Defendant">
              <input type="text" placeholder="John Smith, et al." style={inputStyle} />
            </FieldGroup>
          </div>
        </div>

        <FieldGroup label="Documents" style={{ marginTop: 2 }}>
          <input type="text" placeholder="Summons, Complaint, Affidavit" style={inputStyle} />
        </FieldGroup>

        <FieldGroup label="Special Instructions">
          <textarea
            rows={1}
            placeholder="Serve personally at business address. If not present, confirm schedule and best time to return."
            style={{ ...inputStyle, resize: 'none' }}
          />
        </FieldGroup>

        {/* Job Details */}
        <SectionTitle>Job Details</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 10 }}>
          <FieldGroup label="Job #">
            <input type="text" placeholder="202X-0000" style={inputStyle} />
          </FieldGroup>
          <FieldGroup label="Server">
            <input type="text" placeholder="Agent Name" style={inputStyle} />
          </FieldGroup>
          <FieldGroup label="Due Date">
            <input type="date" style={inputStyle} />
          </FieldGroup>
          <FieldGroup label="Fee">
            <input type="text" placeholder="$0.00" style={inputStyle} />
          </FieldGroup>
        </div>

        <div className="highlight-box" style={{ marginTop: 4 }}>
          <FieldGroup label="Party to Serve">
            <input
              type="text"
              placeholder="TARGET SUBJECT NAME"
              style={{
                ...inputStyle,
                fontWeight: 'bold',
                fontSize: 13,
                border: '2px solid #333',
                backgroundColor: '#f4f4f4',
                padding: '2px 4px',
              }}
            />
          </FieldGroup>
        </div>

        {/* Service Locations */}
        <SectionTitle>Service Locations</SectionTitle>
        <FieldGroup label="Address 1 (Home/Last Known)">
          <input type="text" placeholder="123 Residential Lane, City, State, Zip" style={inputStyle} />
          <div style={{ fontSize: 9, color: '#666', fontStyle: 'italic' }}>Note: Residential Address Description</div>
        </FieldGroup>
        <FieldGroup label="Address 2 (Work/Business)" style={{ marginTop: 3 }}>
          <input type="text" placeholder="456 Business Blvd, City, State, Zip" style={inputStyle} />
          <div style={{ fontSize: 9, color: '#666', fontStyle: 'italic' }}>Note: Business Name / Suite #</div>
        </FieldGroup>

        {/* Service Record */}
        <div
          style={{
            border: '1px solid #000',
            padding: '4px 8px',
            marginTop: 5,
          }}
        >
          <div
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 11,
              textTransform: 'uppercase',
              borderBottom: '1px solid #ccc',
              paddingBottom: 2,
              marginBottom: 4,
            }}
          >
            Field Notes &amp; Service Declaration
          </div>

          {/* Service Attempts Table */}
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 4 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 10, padding: '2px 4px', borderBottom: '2px solid #000', width: '30%' }}>Date &amp; Time:</th>
                <th style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 10, padding: '2px 4px', borderBottom: '2px solid #000' }}>Description of Service / Recipient:</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <React.Fragment key={n}>
                  <tr>
                    <td style={{ padding: 0, borderBottom: '1px solid #000', verticalAlign: 'top' }}>
                      <input type="text" placeholder="" style={{ ...inputStyle, border: 'none', background: '#f0f0f0', height: 20 }} />
                    </td>
                    <td style={{ padding: 0, borderBottom: '1px solid #000', verticalAlign: 'top' }}>
                      <input type="text" placeholder="" style={{ ...inputStyle, border: 'none', height: 20 }} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={{ padding: 0, borderBottom: '1px solid #000', verticalAlign: 'top' }}>
                      <input type="text" placeholder="" style={{ ...inputStyle, border: 'none', height: 20 }} />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>

          {/* Notes */}
          <FieldGroup label="Notes / Comments" style={{ marginTop: 2 }}>
            <textarea
              rows={3}
              placeholder="Additional notes..."
              style={{
                ...inputStyle,
                border: '1px dashed #999',
                width: '100%',
                fontStyle: 'italic',
                color: '#888',
                resize: 'none',
              }}
            />
          </FieldGroup>
        </div>
      </div>
    </>
  );
}

/* ─── Sub-components ─── */

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: '1px solid #ccc',
  padding: '1px 4px',
  fontSize: 11,
  fontFamily: 'inherit',
  boxSizing: 'border-box',
  background: 'transparent',
  color: '#000',
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="section-title-bar"
      style={{
        backgroundColor: '#eee',
        fontWeight: 'bold',
        fontSize: 10,
        padding: '2px 5px',
        marginTop: 4,
        marginBottom: 2,
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </div>
  );
}

function FieldGroup({
  label,
  children,
  style,
}: {
  label: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ marginBottom: 2, ...style }}>
      <label
        style={{
          fontWeight: 'bold',
          fontSize: 9,
          color: '#444',
          display: 'block',
          marginBottom: 0,
          textTransform: 'uppercase',
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
