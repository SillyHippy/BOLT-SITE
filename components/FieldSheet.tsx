'use client';

import React, { useState, useCallback } from 'react';

export default function FieldSheet() {
  const [caseNumber, setCaseNumber] = useState('');

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
          minHeight: '11in',
          margin: '0 auto',
          padding: '0.3in 0.4in',
          boxSizing: 'border-box',
          position: 'relative',
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
            paddingBottom: 5,
            marginBottom: 5,
          }}
        >
          <div>
            <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Just Legal Solutions
            </h2>
            <p style={{ margin: '1px 0', fontSize: 11 }}>564 East 138th Place</p>
            <p style={{ margin: '1px 0', fontSize: 11 }}>Glenpool, OK 74033</p>
            <p style={{ margin: '1px 0', fontSize: 11 }}><strong>Phone:</strong> (539) 367-6832</p>
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15 }}>
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

        <FieldGroup label="Documents" style={{ marginTop: 4 }}>
          <input type="text" placeholder="Summons, Complaint, Affidavit" style={inputStyle} />
        </FieldGroup>

        <FieldGroup label="Special Instructions">
          <textarea
            rows={2}
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

        <div className="highlight-box" style={{ marginTop: 8 }}>
          <FieldGroup label="Party to Serve">
            <input
              type="text"
              placeholder="TARGET SUBJECT NAME"
              style={{
                ...inputStyle,
                fontWeight: 'bold',
                fontSize: 14,
                border: '2px solid #333',
                backgroundColor: '#f4f4f4',
                padding: 4,
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
        <FieldGroup label="Address 2 (Work/Business)" style={{ marginTop: 6 }}>
          <input type="text" placeholder="456 Business Blvd, City, State, Zip" style={inputStyle} />
          <div style={{ fontSize: 9, color: '#666', fontStyle: 'italic' }}>Note: Business Name / Suite #</div>
        </FieldGroup>

        {/* Service Record */}
        <div
          style={{
            border: '1px solid #000',
            padding: 8,
            marginTop: 8,
          }}
        >
          <div
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 11,
              textTransform: 'uppercase',
              borderBottom: '1px solid #ccc',
              paddingBottom: 3,
              marginBottom: 8,
            }}
          >
            Field Notes &amp; Service Declaration
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15 }}>
            <FieldGroup label="Date & Time Served">
              <input type="text" placeholder="Date: ___________  Time: ___________" style={inputStyle} />
            </FieldGroup>
            <FieldGroup label="Person Served (if not Subject)">
              <input type="text" placeholder="Name" style={inputStyle} />
            </FieldGroup>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 5, marginTop: 8 }}>
            <FieldGroup label="Gender"><input type="text" placeholder="M/F" style={inputStyle} /></FieldGroup>
            <FieldGroup label="Ethnicity"><input type="text" placeholder="Race" style={inputStyle} /></FieldGroup>
            <FieldGroup label="Age"><input type="text" placeholder="Approx" style={inputStyle} /></FieldGroup>
            <FieldGroup label="Height"><input type="text" placeholder="Ft/In" style={inputStyle} /></FieldGroup>
            <FieldGroup label="Weight"><input type="text" placeholder="Lbs" style={inputStyle} /></FieldGroup>
            <FieldGroup label="Relationship"><input type="text" placeholder="Type" style={inputStyle} /></FieldGroup>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15, marginTop: 5 }}>
            <FieldGroup label="Hair Color / Style"><input type="text" placeholder="Desc" style={inputStyle} /></FieldGroup>
            <FieldGroup label="Eye Color / Glasses"><input type="text" placeholder="Desc" style={inputStyle} /></FieldGroup>
          </div>

          <FieldGroup label="Visual Description / Notes" style={{ marginTop: 10 }}>
            <textarea
              rows={14}
              placeholder="Enter description of person served, notes on location, or details of non-service..."
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
  padding: '2px 4px',
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
        marginTop: 6,
        marginBottom: 4,
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
