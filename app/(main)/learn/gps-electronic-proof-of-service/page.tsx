'use client';

import { useState } from 'react';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';

export default function GPSElectronicProofOfServicePage() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const checklist = [
    'GPS-enabled device active and recording',
    'Photo of location with visible house or building number',
    'Timestamp applied to all digital records',
    'Detailed notes entered into affidavit',
    'Secure storage backup of all digital evidence',
    'GPS accuracy reading logged (ideally within 10 meters)',
    'Photo metadata (EXIF) preserved and unedited',
    'Electronic affidavit signed and dated',
    'Digital chain of custody documented',
    'Records retained per CLEET 3-year requirement',
  ];

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  const citations = [
    {
      title: 'Oklahoma Electronic Transactions Act',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=15-101&title=12A',
      description:
        'Governs electronic signatures and records in Oklahoma, including admissibility of electronic documents in court.',
    },
    {
      title: 'CLEET — Council on Law Enforcement Education and Training',
      url: 'https://www.ok.gov/cleet/',
      description:
        'Oversees Oklahoma process server certification and the 3-year record retention requirement.',
    },
    {
      title: '12 O.S. § 158.1 — Licensed Process Servers',
      url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=158.1&title=12',
      description:
        'Licensing requirements for private process servers, including documentation and record-keeping standards.',
    },
  ];

  return (
    <HubPageLayout
      title="GPS &amp; Electronic Proof of Service"
      description="Learn why GPS documentation matters for process servers, what Oklahoma courts accept as proof of service, metadata requirements, photo best practices, and the CLEET 3-year record retention rule. Includes an interactive checklist."
      citations={citations}
    >
      <div className="prose-content">
        <p className="lead">
          Proof of service is the legal document that proves a respondent received court papers. For
          decades, process servers relied on paper affidavits and handwritten notes. Today, GPS
          tracking, digital photos, and electronic records provide stronger, more reliable proof.
          This guide explains what Oklahoma courts accept for electronic proof of service and how
          process servers can build a defensible digital record.
        </p>

        <h2>Why GPS Documentation Matters</h2>
        <p>
          GPS data provides verifiable proof of where, when, and how a service attempt took place.
          Courts across Oklahoma increasingly expect clear documentation, especially in contested
          cases where a respondent claims they were never served. GPS coordinates tied to a timestamp
          create an objective record that is difficult to challenge.
        </p>
        <p>
          For attorneys, GPS proof reduces risk. If a defendant motions to quash service, an
          affidavit backed by GPS data and photographs is far stronger than a simple written
          statement. GPS documentation can mean the difference between a valid judgment and a case
          dismissed for bad service.
        </p>

        <h2>What Oklahoma Courts Accept for Proof of Service</h2>
        <p>
          Oklahoma law does not require GPS evidence for every service. A properly completed return
          of service or affidavit of service is legally sufficient when signed by a licensed process
          server or law enforcement officer. However, courts may scrutinize proof of service more
          closely in cases involving:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Substituted service (leaving papers with a resident adult)</li>
          <li>Service at unusual hours or locations</li>
          <li>Contested service where the respondent denies receipt</li>
          <li>Cases heading toward default judgment</li>
          <li>High-stakes litigation with significant damages</li>
        </ul>
        <p>
          In these situations, GPS data, photographs, and detailed notes provide the extra layer of
          proof that protects both the process server and the attorney from challenges.
        </p>

        <h2>GPS Metadata Requirements</h2>
        <p>
          For GPS data to hold up in court, it should include specific metadata elements. Oklahoma
          courts and experienced attorneys typically look for:
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 font-semibold border-b">Metadata Element</th>
                <th className="text-left p-3 font-semibold border-b">Description</th>
                <th className="text-left p-3 font-semibold border-b">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium">Timestamp</td>
                <td className="p-3">Date and time of service attempt</td>
                <td className="p-3">Establishes when service occurred</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Coordinates</td>
                <td className="p-3">Latitude and longitude of location</td>
                <td className="p-3">Verifies the exact service location</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Accuracy</td>
                <td className="p-3">GPS accuracy radius (in meters)</td>
                <td className="p-3">Shows reliability of the coordinate data</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Device Info</td>
                <td className="p-3">GPS device or app identifier</td>
                <td className="p-3">Supports authenticity of the record</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Map Context</td>
                <td className="p-3">Street map showing pin location</td>
                <td className="p-3">Helps judge visualize the location</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Photo Documentation Best Practices</h2>
        <p>
          Photos add visual proof that supports GPS data. A well-taken service photo should show the
          location clearly and help a judge understand the circumstances of service. Follow these
          best practices:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Show the address</strong> — Include a visible house number, mailbox number, or
            building address in the photo.
          </li>
          <li>
            <strong>Capture context</strong> — Show the front door, driveway, or other identifying
            features that confirm the location.
          </li>
          <li>
            <strong>Use timestamped photos</strong> — Use a camera app that stamps date and time
            directly on the image.
          </li>
          <li>
            <strong>Preserve EXIF data</strong> — Do not edit photos before saving. Original EXIF
            metadata contains embedded timestamp and GPS data.
          </li>
          <li>
            <strong>Take multiple shots</strong> — Capture several angles for a complete picture of
            the location.
          </li>
        </ul>

        <h2>Electronic Affidavits vs. Traditional Paper</h2>
        <p>
          Electronic affidavits are increasingly common in Oklahoma process serving. Under the
          Oklahoma Electronic Transactions Act, electronic signatures and records carry the same
          legal weight as paper documents, as long as all parties agree to electronic handling.
        </p>
        <p>
          Electronic affidavits offer several advantages. They are faster to prepare, easier to
          store and retrieve, and integrate seamlessly with GPS data and photographs. Many process
          servers now use tablet-based or mobile apps that auto-populate fields, attach GPS data,
          and allow digital signature capture on the spot.
        </p>
        <p>
          However, some courts and attorneys still prefer paper affidavits. Always confirm the
          preferred format with the attorney of record before submitting proof of service.
        </p>

        <h2>The CLEET 3-Year Record Retention Requirement</h2>
        <p>
          The Council on Law Enforcement Education and Training (CLEET) oversees Oklahoma process
          server standards. CLEET requires licensed process servers to maintain records of service
          for three years. This includes:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Copies of all returns of service and affidavits</li>
          <li>GPS logs and associated data files</li>
          <li>Photographs and digital evidence</li>
          <li>Communication records with the attorney or client</li>
          <li>Notes on service attempts, including unsuccessful ones</li>
        </ul>
        <p>
          These records must be stored securely and made available if requested by CLEET, a court,
          or the client. Failure to maintain proper records can result in license suspension or
          revocation.
        </p>

        <h2>Electronic Transactions Act Applicability</h2>
        <p>
          The Oklahoma Electronic Transactions Act (12A O.S. § 15-101 et seq.) provides the legal
          framework for electronic records and signatures in Oklahoma. For process servers, this
          means:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Electronic signatures on affidavits are legally valid</li>
          <li>GPS data and digital photos are admissible as evidence</li>
          <li>Electronic storage satisfies record-keeping obligations</li>
          <li>Time-stamped electronic records carry the same weight as paper</li>
        </ul>
        <p>
          The key requirement is that the electronic record must be authentic, accurate, and
          accessible. Process servers should use reliable GPS apps, maintain backups, and avoid any
          practice that could suggest tampering with data.
        </p>

        <h2>Interactive Service Documentation Checklist</h2>
        <p>
          Use this interactive checklist before completing any service. Checking every box helps
          ensure your documentation is court-ready.
        </p>
        <div className="my-6 bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-navy">Pre-Service &amp; Documentation Checklist</h3>
            <span className="text-sm font-medium text-gold">
              {checkedCount} of {checklist.length} completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-gold h-2 rounded-full transition-all"
              style={{ width: `${(checkedCount / checklist.length) * 100}%` }}
            />
          </div>
          <ul className="space-y-2">
            {checklist.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <button
                  onClick={() => toggleCheck(idx)}
                  className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    checkedItems[idx]
                      ? 'bg-gold border-gold text-white'
                      : 'border-gray-300 hover:border-gold'
                  }`}
                  aria-label={item}
                >
                  {checkedItems[idx] && (
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                <span className={`text-sm ${checkedItems[idx] ? 'line-through text-gray-400' : ''}`}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <h2>How Attorneys Can Verify GPS Proof</h2>
        <p>
          Attorneys receiving GPS-backed proof of service should verify the data before relying on
          it in court. Key verification steps include:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Cross-check GPS coordinates against the known service address</li>
          <li>Verify that the timestamp matches the date claimed on the affidavit</li>
          <li>Review GPS accuracy — coordinates within 10 meters are generally reliable</li>
          <li>Examine photos for tampering or inconsistencies</li>
          <li>Confirm the process server&apos;s license is active with CLEET</li>
        </ul>
        <p>
          If anything looks unusual, ask the process server for clarification. A reputable server
          will be happy to explain their documentation.
        </p>

        <h2>Admissibility in Court</h2>
        <p>
          GPS data and electronic records are generally admissible in Oklahoma courts under the
          Electronic Transactions Act and standard evidence rules. To ensure admissibility:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Data must be authentic and unaltered</li>
          <li>The process server must testify to the accuracy of the records</li>
          <li>Chain of custody for digital files must be documented</li>
          <li>Records must be stored securely to prevent tampering</li>
        </ul>
        <p>
          Courts have increasingly accepted GPS proof in both civil and family law cases. The trend
          is clear: digital documentation is becoming the standard in Oklahoma process serving.
        </p>

        <h2>Need GPS-Documented Service in Oklahoma?</h2>
        <p>
          Just Legal Solutions provides licensed, GPS-documented process serving across Oklahoma.
          Every service includes timestamped GPS data, photographs, and a detailed affidavit. Call{' '}
          <a href="tel:539-367-6832" className="underline text-navy hover:text-gold">
            (539) 367-6832
          </a>{' '}
          or email{' '}
          <a href="mailto:info@JustLegalSolutions.org" className="underline text-navy hover:text-gold">
            info@JustLegalSolutions.org
          </a>
          .
        </p>
      </div>
    </HubPageLayout>
  );
}
