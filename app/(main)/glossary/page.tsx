import { Metadata } from 'next';
import HubPageLayout from '@/components/oklahoma-hub/HubPageLayout';
import UnifiedSchema from '@/components/UnifiedSchema';

export const metadata: Metadata = {
  title: 'Glossary',
  description: 'Oklahoma process serving terms and definitions.',
};

const terms = [
  { term: 'Affidavit of Service', def: 'A sworn written statement by the process server documenting how, when, where, and upon whom service was made. Required in most Oklahoma courts to prove service was completed.' },
  { term: 'Answer', def: 'The defendant\'s written response to a lawsuit, which must typically be filed within 20 days of being served under Oklahoma Rules of Civil Procedure.' },
  { term: 'Certified Mail', def: 'A method of service where documents are sent through the USPS with proof of mailing and delivery confirmation. Limited applicability in Oklahoma civil cases.' },
  { term: 'CLEET', def: 'Council on Law Enforcement Education and Training. Oklahoma agency that oversees process server training, certification, and professional standards.' },
  { term: 'Due Diligence', def: 'The reasonable efforts required before a court will authorize service by publication, including multiple attempts at known addresses and searches for the defendant.' },
  { term: 'E-Service', def: 'Electronic service of process under 12 O.S. § 2004.5. Permitted only for subsequent filings (not initial service) with explicit written consent.' },
  { term: 'Good Cause', def: 'The legal standard for extending the 180-day service deadline under 12 O.S. § 2004(I). Requires showing diligent effort and reasonable excuse for delay.' },
  { term: 'Long-Arm Statute', def: 'Oklahoma law allowing courts to exercise jurisdiction over out-of-state defendants who have sufficient minimum contacts with Oklahoma.' },
  { term: 'NAPPS', def: 'National Association of Professional Process Servers. Professional organization setting industry standards; Joseph Iannazzi is member #14801.' },
  { term: 'OSCN', def: 'Oklahoma Supreme Court Network. The official online portal for Oklahoma court records, dockets, and e-filing.' },
  { term: 'Personal Service', def: 'Direct delivery of legal documents to the named defendant. The preferred and most defensible method under Oklahoma law.' },
  { term: 'Proof of Service', def: 'Documentation filed with the court proving that service of process was completed properly. Often the same as an Affidavit of Service.' },
  { term: 'Publication', def: 'Service by publishing notice in a newspaper of general circulation. Used when defendant cannot be located after due diligence. Requires court order.' },
  { term: 'Process Server', def: 'A licensed individual authorized to deliver legal documents to parties in a lawsuit. In Oklahoma, requires a $5,000 bond and court-issued license.' },
  { term: 'Service of Process', def: 'The formal delivery of legal documents (summons, complaint, subpoena) to a party to give notice of a legal proceeding.' },
  { term: 'Skip Tracing', def: 'Techniques used to locate a person who cannot be found at their last known address, including database searches and investigative methods.' },
  { term: 'Substituted Service', def: 'Service made on someone other than the named defendant at their residence or place of business, such as a family member of suitable age and discretion.' },
  { term: 'Summons', def: 'A court-issued document notifying the defendant that a lawsuit has been filed and requiring them to respond within a specified time period.' },
  { term: 'TLRCP', def: 'Title 12, Oklahoma Statutes, Rules of Civil Procedure. The primary set of rules governing civil litigation in Oklahoma state courts.' },
  { term: 'UIDDA', def: 'Uniform Interstate Depositions and Discovery Act. Oklahoma adopted this act (12 O.S. § 3253) to streamline domestication of out-of-state subpoenas.' },
  { term: 'VPO', def: 'Victim Protective Order. Oklahoma\'s term for a restraining order in domestic violence cases. Requires 24-hour priority service under 22 O.S. § 60.4.' },
  { term: 'Witness Fee', def: 'Payment required when serving a subpoena, covering daily attendance ($10/day) and mileage at the state rate under 28A O.S. § 28-81.' },
];

export default function GlossaryPage() {
  return (
    <>
      <UnifiedSchema
        pageType="generic"
        pageTitle="Glossary"
        pageDescription="Oklahoma process serving terms and definitions."
        pageUrl="https://justlegalsolutions.org/glossary"
        siteName="Just Legal Solutions"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Glossary', url: '/glossary' },
        ]}
      />
    <HubPageLayout
      title="Process Serving Glossary"
      description="Oklahoma-specific terms and definitions for process serving, civil procedure, and legal service."
      citations={[
        { title: '12 O.S. § 2004', url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=2004&title=12', description: 'Methods of Service of Process' },
        { title: '12 O.S. § 158.1', url: 'https://okpublic.oscn.net/forms/view.php?type=statute&num=158.1&title=12', description: 'Licensed Process Servers' },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {terms.map((t, i) => (
          <div key={i} id={t.term.toLowerCase().replace(/\s+/g, '-')} className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold text-navy mb-1">{t.term}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{t.def}</p>
          </div>
        ))}
      </div>
    </HubPageLayout>
    </>
  );
}
