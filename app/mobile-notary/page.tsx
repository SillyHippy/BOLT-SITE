import Link from 'next/link';
import { Metadata } from 'next';
import type { ReactNode } from 'react';
import Navbar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import JsonLd from '../../components/JsonLd';
import { buildFreshnessMetadata, formatSchemaDate, getPageFreshness } from '@/lib/content-freshness';
import LastUpdated from '@/components/ui/last-updated';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  FileText,
  Stamp,
  DollarSign,
  Building2,
  Gavel,
  Users,
  Hospital,
  Lock,
  Star,
  Award,
  Compass,
  AlertTriangle
} from 'lucide-react';

const canonicalUrl = 'https://justlegalsolutions.org/mobile-notary';
const mobileNotaryFreshness = getPageFreshness('/mobile-notary')!;

export const metadata: Metadata = {
  title: 'Mobile Notary Oklahoma | 24/7 Tulsa Traveling Notary',
  description:
    'Oklahoma mobile notary for hospitals, jails, loan signings & more. Licensed, bonded. Same-day appointments. Tulsa metro & statewide. Call (539) 367-6832.',
  keywords:
    'mobile notary Glenpool, Tulsa mobile notary, hospital notary Tulsa, jail notarization Oklahoma, loan signing agent Glenpool, 24/7 notary, Creek County notary, Wagoner County notary, Osage County notary, Tulsa County notary, emergency notary Oklahoma, remote notary Oklahoma',
  authors: [{ name: 'Just Legal Solutions' }],
  openGraph: {
    title: 'Mobile Notary Glenpool & Tulsa Metro | 24/7 Emergency Signing Team',
    description:
      'Licensed Oklahoma mobile notaries for hospitals, detention centers, real estate closings, and corporate matters. On-call every hour with coverage across Tulsa, Creek, Wagoner, and Osage counties.',
    url: canonicalUrl,
    siteName: 'Just Legal Solutions',
    images: [
      {
        url: 'https://justlegalsolutions.org/images/notary-mobile-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions Mobile Notary Team'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Just Legal Solutions | Oklahoma Mobile Notary',
    description: '24/7 hospital, jail, and real estate loan signing coverage across Tulsa metro. Call (539) 367-6832.',
    images: ['https://justlegalsolutions.org/images/notary-mobile-og.jpg']
  },
  alternates: {
    canonical: canonicalUrl
  },
  other: {
    'ai-content-type': 'service',
    'ai-summary': 'Mobile notary services throughout Oklahoma and Tulsa County. Licensed, bonded notaries travel to homes, offices, hospitals, and courthouses. Notary fee cap: $5/act traditional (49 O.S. § 5), $25/act RON (49 O.S. § 209). $10,000 surety bond required (49 O.S. § 2). NNA-certified, compliant with 49 O.S. § 111 et seq. and Remote Online Notary Act (49 O.S. § 201 et seq.). Same-day and 24/7 availability. Call (539) 367-6832.',
    'ai-key-facts': 'Oklahoma mobile notary: $5/act max fee (49 O.S. § 5), $25/act max RON (49 O.S. § 209). $10,000 surety bond (49 O.S. § 2). Travel fees not capped by law. Government-issued photo ID required (49 O.S. § 113). Covers Tulsa, Creek, Wagoner, Osage, Rogers counties.',
    ...buildFreshnessMetadata({
      datePublished: mobileNotaryFreshness.datePublished,
      dateModified: mobileNotaryFreshness.dateModified,
    }).other,
  }
};

const serviceAreas = [
  {
    name: 'Tulsa County',
    description:
      'We dispatch multiple units throughout Tulsa County every day, supporting downtown Tulsa courthouses, Midtown medical towers, South Tulsa title companies, the Port of Catoosa logistics corridor, and neighborhood clients across Tulsa, Glenpool, Broken Arrow, Bixby, Jenks, Sand Springs, Owasso, and Collinsville. Because we are centrally located in the Tulsa metro, we can be in Brookside, Kendall-Whittier, or the Tulsa Innovation Labs zone within minutes. We also coordinate with Tulsa County District Court clerks to make sure your notarized affidavits, loan packages, and jurats are filed the same day they are executed.',
    keywords: 'Tulsa, Glenpool, Broken Arrow, Bixby, Jenks, Sand Springs, Owasso, Collinsville'
  },
  {
    name: 'Creek County',
    description:
      'From Sapulpa and Kellyville to the Hwy 117 corridor, Creek County families, oil and gas outfits, and probate attorneys depend on us for evening estate plan notarizations, hospital signings at St. John Sapulpa, and emergency jail visits at the Creek County Criminal Justice Center. Our team knows every rural route between Kiefer, Mounds, and Bristow, so last-minute power of attorney signings or vehicle title transfers are never delayed.',
    keywords: 'Sapulpa, Kellyville, Kiefer, Mounds'
  },
  {
    name: 'Wagoner County',
    description:
      'Loan officers in east Broken Arrow, Coweta entrepreneurs, Wagoner manufacturers, and Catoosa logistics crews leverage our Wagoner County coverage for timely notarizations. We routinely complete late-night seller packets for Sequoyah neighborhood homes, business affidavits near the Muskogee Turnpike, and adoption paperwork for families in Porter and Okay. Coordinated meetups at the Coweta Police Department lobby or mobile closings at the Rose District coffee shops are handled with the same documented precision.',
    keywords: 'Broken Arrow, Coweta, Catoosa, Porter'
  },
  {
    name: 'Osage County',
    description:
      'Osage County clients appreciate our familiarity with Sand Springs West, Skiatook Lake communities, and the tribal enterprises stretching toward Hominy. We regularly visit the Osage Nation campus, Baptist Village, and the Keystone Harbor marina area for trust certifications, mineral rights affidavits, and structured settlement contracts. Our GPS-tracked units record every arrival in remote ranchland, protecting attorneys and lenders that require irrefutable proof of time and place.',
    keywords: 'Sand Springs, Skiatook, Hominy'
  }
];

const citySpotlights = [
  {
    city: 'Tulsa',
    copy:
      'Corporate legal departments inside downtown Tulsa towers lean on our 24/7 desk for board consents, SBA packages, and technology escrow verifications. We coordinate with security desks at the BOK Tower, Vast Bank, Williams, and One Technology Center to ensure your signer is seated, identified, and finished without interrupting their workday.'
  },
  {
    city: 'Glenpool',
    copy:
      'Operating from our Glenpool command center on Poplar Place means we can be at Glenpool High School for guardian permission slips, the Glenpool conference center for vendor contracts, or a neighborhood hospice in less than ten minutes. Residents appreciate that the people handling their wills, deeds, and settlement checks are the same licensed professionals they see at community events.'
  },
  {
    city: 'Broken Arrow',
    copy:
      'Real estate brokerages in Broken Arrow’s Rose District, Stone Wood Hills, and Aspen Creek count on us for seller packages, HELOC documents, and relocation affidavits. We also support aerospace suppliers near Broken Arrow Expressway that require compliance paperwork notarized before shipments leave the dock.'
  },
  {
    city: 'Bixby',
    copy:
      'Bixby entrepreneurs in the River District and Memorial corridor often need partnership agreements notarized outside traditional business hours. We collaborate with urban farms, athletic facilities, and homeowners around Bentley Park, making sure every signer has acceptable ID and witnesses when required.'
  },
  {
    city: 'Jenks',
    copy:
      'Jenks families rely on our stroller-friendly approach for school affidavits, sports releases, and financial aid forms. We routinely meet at the Oklahoma Aquarium, the Riverwalk, or new subdivisions west of Highway 75 to complete estate planning binders before clients travel.'
  },
  {
    city: 'Sapulpa',
    copy:
      'Sapulpa attorneys request courthouse meetups and after-hours notary coverage to finalize expungements, title transfers, or structured settlements. We also support hospital social workers who need consent forms notarized at Hillcrest Hospital South’s Sapulpa campus.'
  },
  {
    city: 'Sand Springs',
    copy:
      'Industrial partners in Sand Springs and Prattville appreciate that we can notarize OSHA compliance logs, refinery affidavits, and vendor contracts at shift change. We also provide compassionate bedside notarizations at hospitals and long-term care communities across Sand Springs.'
  },
  {
    city: 'Owasso',
    copy:
      'Owasso logistics teams near Hwy 169, and families in Stone Canyon subdivisions, often request evening notary visits for loan documents, DNR forms, or adoption files. We coordinate with school resource officers, church offices, and large HOA clubhouses to keep signings smooth.'
  },
  {
    city: 'Collinsville',
    copy:
      'Collinsville business owners who straddle Tulsa and Rogers Counties benefit from our willingness to meet at coffee shops downtown, farms along Hwy 20, or industrial parks near the Verdigris River. We frequently notarize agricultural liens, pipeline easements, and youth travel permissions for Collinsville families.'
  }
];

const documents = [
  {
    title: 'Real Estate & Loan Closings',
    description:
      'Certified loan signing agents manage refinance packages, HELOCs, SBA loans, reverse mortgages, and relocation buyouts. We review every instruction from your lender or title company, confirm ID requirements, double-check notarizations, and FedEx or scan-back documents with the chain of custody your compliance team expects.',
    items: ['Cash buyer closings', 'Commercial leases and subordination agreements', 'Oil & gas mineral conveyances', 'Construction lien waivers', 'Seller and borrower settlement statements']
  },
  {
    title: 'Estate Planning & Family Documents',
    description:
      'Families trust us for wills, revocable trusts, advanced healthcare directives, HIPAA releases, transfer-on-death deeds, and guardianship paperwork. We supply neutral witnesses when needed, explain Oklahoma signing formalities, and create calm spaces for emotional conversations.',
    items: ['Last will & testament executions', 'Living trusts and certification of trust', 'Powers of attorney (financial & medical)', 'Parental consent & school forms', 'Affidavits of heirship and small estate packets']
  },
  {
    title: 'Business & Corporate Records',
    description:
      'From startups in the Tulsa remote-work ecosystem to legacy manufacturers along Hwy 412, we notarize buy-sell agreements, commercial lending packages, compliance certificates, and vendor contracts. We also assist HR leaders with I-9 verifications and remote employee onboarding paperwork when a notarial act is required.',
    items: ['Operating agreements & partnership consents', 'Vendor & supplier certifications', 'Litigation affidavits & discovery responses', 'Corporate minutes & stock transfer ledgers', 'I-9 authorized representative assignments']
  },
  {
    title: 'Medical, Hospital & Detention Center Signings',
    description:
      'Hospital social workers, hospice nurses, and detention center chaplains lean on our 24/7 dispatch to notarize consent forms, advance directives, and urgent powers of attorney. We routinely enter Saint Francis Hospital, Hillcrest, OSU Medical Center, Ascension St. John, Tulsa Spine, and the VA hospital, as well as David L. Moss Criminal Justice Center, Creek County Criminal Justice Center, and municipal detention sites.',
    items: ['Hospital bedside wills', 'Inmate property releases', 'Jail marriage waivers', 'Medical consent for minors', 'Emergency financial POAs']
  },
  {
    title: 'Personal, Immigration & Travel',
    description:
      'Travel letters for minors, adoption dossiers, apostille-ready documents, and USCIS affidavits demand careful review. We prepare notarized statements and coordinate with translation partners so your paperwork is accepted domestically and abroad.',
    items: ['Affidavits of support & domicile', 'Certified true copies when permitted', 'Vehicle title transfers & bill of sale', 'International school enrollment packets', 'Military deployment packets']
  }
];

const processSteps = [
  {
    title: '1. Connect 24/7',
    detail:
      'Call (539) 367-6832, email info@JustLegalSolutions.org, or submit our secure form any hour. A commissioned notary—not a call center—confirms the document type, signer capacity, witness needs, and any hospital or jail clearance requirements. We also gather docket or loan numbers so we can coordinate with your legal team.'
  },
  {
    title: '2. Schedule & Prep',
    detail:
      'We provide written confirmation with the date, time, address, parking instructions, mileage estimate, and required identification list. For hospital or detention visits we secure approval from staff, verify the signer’s eligibility, and build extra time for security screening. Loan clients receive our scan-back checklist and wiring instructions if cashier’s checks are involved.'
  },
  {
    title: '3. Onsite Verification',
    detail:
      'Your notary arrives in professional attire with Oklahoma notary journal, stamp, and mobile scanner. We inspect IDs, screen for coercion, confirm the signer understands English (or coordinate for interpreters), and review every page for blank fields. Witnesses sign in our ledger for transparency.'
  },
  {
    title: '4. Execution & Quality Control',
    detail:
      'Each notarization is completed according to Oklahoma Administrative Code requirements, whether it is an acknowledgment, jurat, copy certification by document custodian, or signature witnessing. We double-check every seal, add required venue statements, and photograph the package (when allowed) for your records.'
  },
  {
    title: '5. Delivery & Follow-Up',
    detail:
      'Within minutes we send status updates through your preferred channel. Physical documents are hand-delivered, overnighted, or uploaded through encrypted portals. Attorneys and loan processors receive audit-ready reports that include time stamps, GPS confirmation, and any variance notes.'
  }
];

const pricingHighlights = [
  {
    title: 'Transparent Base Travel',
    detail:
      'Our Glenpool launch point keeps base travel predictable inside Tulsa County. We quote a flat local dispatch fee that covers scheduling, document prep, and the first 15 miles round trip. Additional mileage is calculated per actual mile, so suburban and rural clients only pay for the distance we drive.'
  },
  {
    title: 'After-Hours & Holiday Premiums',
    detail:
      'Hospital and detention center signings often fall between 7 p.m. and 7 a.m. We outline modest premiums for late nights, weekends, and federal holidays to compensate the commissioned notary who is leaving family events to help yours. You will always see those premiums before we roll.'
  },
  {
    title: 'Witness & Logistics Support',
    detail:
      'When extra witnesses, rush scan-backs, mobile printing, or courthouse filing runs are needed, we quote them as separate line items. This modular approach allows law firms and lenders to rebill costs accurately and keeps surprises out of your client’s invoice.'
  },
  {
    title: 'Statutory Notarial Fees',
    detail:
      'Oklahoma limits the notarial act itself to $5 per traditional act and $25 per remote online notarization. Those statutory amounts are listed on every invoice so you always understand which portion covers the notarization versus travel and coordination.'
  }
];

const differentiators = [
  'Licensed, bonded, and insured Oklahoma notaries with remote online notarization credentials backed by the Oklahoma Secretary of State.',
  'Hospital, hospice, and detention center clearance on file with Saint Francis, Hillcrest, OSU Medical Center, Ascension St. John, VA, David L. Moss, and Creek County Criminal Justice Center.',
  'Real estate loan signing agents trained on CD/ALTA review, document stacking orders, and scan-back requirements for lenders such as Rocket, Fairway, Gateway, and local banks.',
  'Integrated collaboration with our service of process and investigative teams, giving law firms a single vendor for filings, mobile notarizations, and delivery.',
  'Technology-forward workflows using encrypted messaging, GPS tracking, digital invoicing, and secure document portals hosted on justlegalsolutions.org.',
  'Community-rooted presence in Glenpool, Tulsa, Sapulpa, Sand Springs, and Collinsville with references from firms across Tulsa County, Creek County, Wagoner County, and Osage County.'
];

const trustBadges = [
  {
    title: '$10,000 Surety Bond (2026 Requirement)',
    detail: 'Compliant with Oklahoma SB 1028 requiring $10,000 surety bond effective 2026—we meet this standard now to protect your transactions.'
  },
  {
    title: 'Background Screened (SB 1028)',
    detail: 'Criminal background screening per Oklahoma SB 1028 requirements. Annual verification through NNA and federal contractor databases for detention access.'
  },
  {
    title: 'E&O Insured',
    detail: '$10,000 Errors & Omissions coverage protects your files during travel and high-value transactions. Exceeds statutory requirements.'
  },
  {
    title: 'NNA Certified',
    detail: 'National Notary Association certified with continuing education, background screening, and adherence to best practices beyond state requirements.'
  },
  {
    title: 'RON Certified',
    detail: 'Remote online notarization credentials per 49 O.S. § 201 et seq. (Remote Online Notary Act) allowing statewide and international clients to sign securely when travel is impossible.'
  }
];

type FAQItem = {
  question: string;
  answer: ReactNode;
  schemaAnswer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'How quickly can a mobile notary reach my Tulsa or Glenpool location?',
    answer:
      'Most Tulsa County calls are scheduled within two hours thanks to our strategic central location. For extreme emergencies—such as a hospital bedside power of attorney—call (539) 367-6832 and we will confirm ETA in real time. All notaries are background-screened per SB 1028 and carry the $10,000 surety bond required by 2026 Oklahoma law.',
    schemaAnswer:
      'Most Tulsa County calls are scheduled within two hours. For emergencies, call (539) 367-6832. All notaries are background-screened per SB 1028 and carry the $10,000 surety bond required by 2026 Oklahoma law.'
  },
  {
    question: 'Do you handle hospital signings and what should families prepare?',
    answer:
      'Yes. We complete daily rounds at Saint Francis, Hillcrest, OSU Medical Center, Ascension St. John, Tulsa Spine, the VA, and rural facilities in Sapulpa and Sand Springs. Families should gather valid photo ID, ensure the signer is alert, and alert nursing staff so we can enter quickly. We bring extra witnesses when families cannot leave the bedside.',
    schemaAnswer:
      'Yes. We complete daily rounds at Saint Francis, Hillcrest, OSU Medical Center, Ascension St. John, Tulsa Spine, the VA, and rural facilities in Sapulpa and Sand Springs. Families should gather valid photo ID, ensure the signer is alert, and alert nursing staff so we can enter quickly. We bring extra witnesses when families cannot leave the bedside.'
  },
  {
    question: 'Can you notarize documents inside jails or detention centers?',
    answer:
      'We maintain clearance for David L. Moss Criminal Justice Center, municipal jails, Creek County Criminal Justice Center, and Wagoner County Detention. Provide the inmate number, housing unit, and attorney contact so we can coordinate with deputies and meet any notarization restrictions.',
    schemaAnswer:
      'We maintain clearance for David L. Moss Criminal Justice Center, municipal jails, Creek County Criminal Justice Center, and Wagoner County Detention. Provide the inmate number, housing unit, and attorney contact so we can coordinate with deputies and meet any notarization restrictions.'
  },
  {
    question: 'What makes your loan signing support different?',
    answer:
      'Our signing agents review every lender instruction, verify funding conditions, and complete quality control checklists before leaving the table. We understand hybrid closings, split signings, rescission calendars, and scan-back deadlines, which keeps title companies and national lenders confident in Tulsa-area closings.',
    schemaAnswer:
      'Our signing agents review every lender instruction, verify funding conditions, and complete quality control checklists before leaving the table. We understand hybrid closings, split signings, rescission calendars, and scan-back deadlines, which keeps title companies and national lenders confident in Tulsa-area closings.'
  },
  {
    question: 'Do you offer remote online notarization (RON)?',
    answer:
      'Yes. Per 49 O.S. § 201 et seq. (Remote Online Notary Act), we offer RON sessions using Oklahoma Secretary of State-approved platforms. The statutory fee cap is $25 per act (49 O.S. § 209). We verify ID through knowledge-based authentication, maintain audio-video recordings as required by Oklahoma law, and ensure platform audit trails before releasing completed documents.',
    schemaAnswer:
      'Yes. Per 49 O.S. § 201 et seq. (Remote Online Notary Act), we offer RON sessions using Oklahoma Secretary of State-approved platforms. The statutory fee cap is $25 per act (49 O.S. § 209) with full ID verification, audio-video recording, and audit trail compliance.'
  },
  {
    question: 'What if I need witnesses?',
    answer:
      'We can provide neutral witnesses for wills, trusts, or property transfers when your family or coworkers are unavailable. Witness fees are quoted upfront, and every witness signs our log to protect your case or transaction.',
    schemaAnswer:
      'We can provide neutral witnesses for wills, trusts, or property transfers when your family or coworkers are unavailable. Witness fees are quoted upfront, and every witness signs our log to protect your case or transaction.'
  },
  {
    question: 'How do you price travel into Creek, Wagoner, or Osage counties?',
    answer:
      'Travel is calculated from Glenpool using real mileage. Creek County and Wagoner County calls usually fall inside Tier 2 pricing, while Osage ranch or Collinsville trips are Tier 3. You will always approve the mileage, after-hours premium, and any parking costs before we dispatch.',
    schemaAnswer:
      'Travel is calculated from Glenpool using real mileage. Creek County and Wagoner County calls usually fall inside Tier 2 pricing, while Osage ranch or Collinsville trips are Tier 3. You will always approve the mileage, after-hours premium, and any parking costs before we dispatch.'
  },
  {
    question: 'What identification is acceptable for Oklahoma notarizations?',
    answer:
      'Under 49 O.S. § 113, Oklahoma requires notaries to verify signer identity using government-issued photo identification such as driver licenses, passports, military IDs, or tribal IDs. If the signer lacks ID, we can use credible witnesses who know the signer personally, provided they carry valid ID themselves. Our notaries comply with 2026 HB 2265 identification standards.',
    schemaAnswer:
      'Under 49 O.S. § 113, Oklahoma requires notaries to verify signer identity using government-issued photo identification such as driver licenses, passports, military IDs, or tribal IDs. If the signer lacks ID, credible witnesses may be used. Compliant with 2026 HB 2265 identification standards.'
  },
  {
    question: 'Can attorneys and lenders integrate this service with process serving?',
    answer: (
      <>
        Yes. Many partners link this mobile notary page with our <Link href="/tulsa-process-server" className="text-blue-600 underline">Tulsa process server</Link> team and <Link href="/ultimate-guide-process-serving-oklahoma" className="text-blue-600 underline">Oklahoma process serving guide</Link> so a single dispatcher coordinates filings, service, and notarization. It removes gaps between departments and speeds up court deadlines.
      </>
    ),
    schemaAnswer:
      'Yes. Many partners link this mobile notary page with our Tulsa process server team and Oklahoma process serving guide so a single dispatcher coordinates filings, service, and notarization. It removes gaps between departments and speeds up court deadlines.'
  },
  {
    question: 'How can I learn more about your notary credentials?',
    answer: (
      <>
        Visit our <Link href="/notary" className="text-blue-600 underline">main notary page</Link> or meet Joseph on the <Link href="/notary/joseph" className="text-blue-600 underline">credentials profile</Link>. You can also review statewide FAQs on <Link href="/notary-faqs" className="text-blue-600 underline">/notary-faqs</Link> anytime.
      </>
    ),
    schemaAnswer:
      'Visit our main notary page or meet Joseph on the credentials profile. You can also review statewide FAQs on /notary-faqs anytime.'
  },
  {
    question: 'Which payment methods do you accept?',
    answer:
      'We accept major credit cards, ACH, firm checks, and secure payment links through justlegalsolutions.org. Corporate clients can request net-15 terms once an engagement letter is on file.',
    schemaAnswer:
      'We accept major credit cards, ACH, firm checks, and secure payment links through justlegalsolutions.org. Corporate clients can request net-15 terms once an engagement letter is on file.'
  }
];

const notaryServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Just Legal Solutions Mobile Notary',
  url: canonicalUrl,
  image: 'https://justlegalsolutions.org/images/notary-mobile-og.jpg',
  telephone: '+1-539-367-6832',
  email: 'info@JustLegalSolutions.org',
  description: 'Professional mobile notary services throughout Oklahoma and Tulsa County. Licensed, bonded Oklahoma notaries come to your location. Same-day appointments available.',
  slogan: '$10,000 Surety Bonded | Background Screened | E&O Insured | NNA Certified',
  provider: {
    '@type': 'Organization',
    name: 'Just Legal Solutions',
    description: 'Oklahoma mobile notary service compliant with 2026 notary law requirements including SB 1028 background screening and HB 2265 standards.'
  },
  serviceType: [
    'Mobile notary',
    'Hospital notarization',
    'Jail notarization',
    'Real estate loan signing',
    'Remote online notarization'
  ],
  areaServed: [
    {
      '@type': 'State',
      name: 'Oklahoma'
    },
    'Tulsa County',
    'Creek County',
    'Wagoner County',
    'Osage County',
    'Tulsa',
    'Glenpool',
    'Broken Arrow',
    'Bixby',
    'Jenks',
    'Sapulpa',
    'Sand Springs',
    'Owasso',
    'Collinsville'
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'Oklahoma Notary Commission',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Oklahoma Secretary of State'
      }
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'NNA Certified Notary Signing Agent'
    }
  ],
  availableServiceChannel: [
    {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://justlegalsolutions.org/contact'
    }
  ],
  termsOfService: 'Compliant with Oklahoma notary law 49 O.S. § 111 et seq. (Revised Uniform Law on Notarial Acts), SB 1028, and HB 2265',
  sameAs: ['https://justlegalsolutions.org/notary', 'https://www.facebook.com/people/Just-Legal-Solutions/61574881736527/'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '156',
    bestRating: '5',
    worstRating: '1'
  }
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Just Legal Solutions',
  url: 'https://justlegalsolutions.org',
  image: 'https://justlegalsolutions.org/images/jls-logo.webp',
  telephone: '+1-539-367-6832',
  email: 'info@JustLegalSolutions.org',
  areaServed: {
    '@type': 'State',
    'name': 'Oklahoma'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    }
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: '+1-539-367-6832',
      email: 'info@JustLegalSolutions.org',
      availableLanguage: ['English']
    }
  ]
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://justlegalsolutions.org/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Notary Services',
      item: 'https://justlegalsolutions.org/notary'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Mobile Notary',
      item: canonicalUrl
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.schemaAnswer
    }
  }))
};

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  ratingValue: '4.9',
  reviewCount: '156',
  bestRating: '5',
  worstRating: '1',
  itemReviewed: {
    '@type': 'Organization',
    name: 'Just Legal Solutions',
    url: canonicalUrl
  }
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${canonicalUrl}#webpage`,
  url: canonicalUrl,
  name: 'Mobile Notary Oklahoma | 24/7 Tulsa Traveling Notary',
  description: 'Oklahoma mobile notary for hospitals, jails, loan signings and more. Licensed, bonded. Same-day appointments.',
  datePublished: formatSchemaDate(mobileNotaryFreshness.datePublished),
  dateModified: formatSchemaDate(mobileNotaryFreshness.dateModified),
  isPartOf: {
    '@id': 'https://justlegalsolutions.org/#website',
  },
};

export default function MobileNotaryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        <JsonLd data={webPageSchema} />
        <JsonLd data={notaryServiceSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={faqSchema} />
        <JsonLd data={aggregateRatingSchema} />

        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="uppercase tracking-widest text-blue-200 mb-4">Mobile Notary | 24/7 Dispatch</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Hospital, Jail, and Loan Signing Specialists Serving Tulsa Metro
                </h1>
                <p className="text-lg text-blue-100 leading-relaxed mb-6">
                  Just Legal Solutions is a Glenpool-based legal support firm delivering on-demand mobile notarizations throughout Tulsa, Glenpool, Broken Arrow, Bixby, Jenks, Sapulpa, Sand Springs, Owasso, Collinsville, and every corner of Creek, Wagoner, and Osage counties. Clients rely on us for hospital signings, detention center notarizations, high-stakes real estate loan closings, structured settlement executions, and compassionate late-night visits. Call (539) 367-6832 or email info@JustLegalSolutions.org to reach a commissioned Oklahoma notary who can be at your door, bedside, lobby, or closing table when it matters.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <a
                    href="tel:5393676832"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" /> Call (539) 367-6832
                  </a>
                  <a
                    href="mailto:info@JustLegalSolutions.org"
                    className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold border border-white/30"
                  >
                    <Mail className="w-5 h-5 mr-2" /> info@JustLegalSolutions.org
                  </a>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-blue-100">
                  <div className="flex items-center"><Shield className="w-5 h-5 mr-2 text-blue-300" /> $10,000 Surety Bond</div>
                  <div className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-blue-300" /> Background Screened (SB 1028)</div>
                  <div className="flex items-center"><Award className="w-5 h-5 mr-2 text-blue-300" /> E&amp;O Insured</div>
                  <div className="flex items-center"><Star className="w-5 h-5 mr-2 text-blue-300" /> NNA Certified</div>
                  <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-blue-300" /> 24/7 Availability</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-sm uppercase text-blue-200">Hospital Signings</p>
                    <p className="text-3xl font-bold">Daily</p>
                    <p className="text-xs text-blue-100">Saint Francis · Ascension · VA</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase text-blue-200">Detention Access</p>
                    <p className="text-3xl font-bold">Cleared</p>
                    <p className="text-xs text-blue-100">David L. Moss · Creek CJC</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase text-blue-200">Loan Closings</p>
                    <p className="text-3xl font-bold">Specialists</p>
                    <p className="text-xs text-blue-100">Title & Lender Trained</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase text-blue-200">RON Ready</p>
                    <p className="text-3xl font-bold">Statewide</p>
                    <p className="text-xs text-blue-100">Secure & Recorded</p>
                  </div>
                </div>
                <div className="mt-6 text-sm text-blue-100">
                  Website: justlegalsolutions.org · Call: (539) 367-6832
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What Mobile Notary Service Means for Oklahoma Clients</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  A mobile notary is a commissioned professional who travels to your location—home, hospital, detention center, business, or courthouse—to execute notarizations without forcing you to rearrange your life. In Oklahoma that responsibility is amplified because documents often need to be filed immediately with Tulsa County District Court, delivered to title companies, or transmitted to state agencies before offices close. By dispatching from Glenpool, we sit at the crossroads of Highway 75, the Creek Turnpike, and US-64, so we can reach urban towers, remote ranches, and secure facilities quickly while keeping you updated with texts and GPS pings.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Beyond stamping paper, our role is to create certainty. That means calmly guiding a family through a hospital power of attorney, ensuring a buyer understands their refinance packet, or helping an incarcerated signer understand every line of a settlement release. We collaborate with attorneys, legal assistants, financial advisors, hospice chaplains, and social workers so every stakeholder knows when the notary is en route, on-site, and finished. The result: documents are executed correctly the first time, saving court trips, FedEx fees, and emotional energy.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-blue-900">
                  <p>
                    Internal resources: <Link href="/notary" className="text-blue-700 underline font-semibold">Notary Services Hub</Link> · <Link href="/notary/joseph" className="text-blue-700 underline font-semibold">Meet Our Commissioned Notary</Link> · <Link href="/notary-faqs" className="text-blue-700 underline font-semibold">Statewide Notary FAQs</Link>
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8 border border-slate-100">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Oklahoma Notary Facts</h3>
                <p className="text-slate-600 mb-4">
                  Oklahoma commissioned notaries are regulated under <strong>49 O.S. § 111 et seq.</strong> (Revised Uniform Law on Notarial Acts) by the <a href="https://www.sos.ok.gov/business/notary" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Oklahoma Secretary of State</a>. We comply with 2026 Oklahoma notary law requirements including <strong>SB 1028</strong> (background screening and $10,000 surety bond) and <strong>HB 2265</strong> (updated identification standards). As NNA-certified members of the <a href="https://www.nationalnotary.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 underline">National Notary Association</a>, we receive background screenings and continuing education.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Stamp className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="text-slate-600"><strong>Statutory fee caps (49 O.S. § 5 &amp; § 209):</strong> $5 per traditional notarial act, $25 per remote online notarization. Travel, witnesses, printing, and courier fees are separate and disclosed in writing.</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="text-slate-600"><strong>$10,000 Surety Bond (SB 1028):</strong> We carry the 2026-required bond amount now, plus $10,000 E&amp;O insurance to protect consumers and law firms.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="text-slate-600"><strong>Background Screened (SB 1028):</strong> Criminal background screening compliant with Oklahoma&apos;s 2026 notary law requirements.</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="text-slate-600"><strong>Acceptable ID (HB 2265):</strong> Government-issued photo identification per updated Oklahoma standards, or credible witnesses personally known to the signer and notary.</span>
                  </li>
                </ul>
                <p className="text-slate-600 mt-4">
                  Our compliance with 49 O.S. § 111 et seq., SB 1028, and HB 2265 means we can advise clients when additional witnesses, specific jurat wording, or interpreter arrangements are required—before we arrive—so signings never stall.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-blue-300 uppercase tracking-widest">Regional Coverage</p>
              <h2 className="text-3xl font-bold">Service Areas Across Tulsa, Creek, Wagoner, and Osage Counties</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {serviceAreas.map((area) => (
                <div key={area.name} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <Compass className="w-5 h-5 text-blue-300 mr-2" />
                    <h3 className="text-xl font-semibold">{area.name}</h3>
                  </div>
                  <p className="text-slate-200 leading-relaxed mb-3">{area.description}</p>
                  <p className="text-sm text-blue-200">Keywords: {area.keywords}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-gradient-to-r from-blue-700/40 to-slate-800/60 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">City Spotlights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {citySpotlights.map((spotlight) => (
                  <div key={spotlight.city} className="bg-slate-800/70 border border-slate-700 rounded-xl p-5">
                    <h4 className="text-lg font-semibold text-blue-100 mb-2">{spotlight.city}</h4>
                    <p className="text-slate-200 text-sm leading-relaxed">{spotlight.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-blue-600 uppercase tracking-widest">Documents We Notarize</p>
              <h2 className="text-3xl font-bold text-slate-900">From Real Estate Closings to Jail Signings</h2>
              <p className="text-slate-600 mt-4">
                Every appointment receives a tailored checklist so your file is accepted by courts, lenders, or agencies on the first submission.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {documents.map((category) => (
                <div key={category.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <FileText className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">{category.description}</p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Hospital, Hospice, and Detention Expertise</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Hospital social workers and hospice directors call us because we respect infection control, patient privacy, and family dynamics. We coordinate with Saint Francis, Hillcrest, Ascension St. John, OSU Medical Center, Tulsa ER & Hospital, the VA, and regional clinics to ensure our presence supports—not disrupts—care teams. Our notaries carry disposable gloves, masks, and sanitized pens, and we can print clean copies onsite if medical staff prohibits outside paperwork from crossing sterile zones.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Jail and detention notarizations require calm navigation of rules. We submit pre-approval packets, respect lockdown schedules, and patiently move through security at David L. Moss, the Creek County Criminal Justice Center, Tulsa County juvenile facilities, and municipal detention wings. Because we already fingerprint and background-check our team for court work, deputies clear us faster, which reduces the time attorneys or families spend waiting.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Whether your signer is in a hospital gown or orange jumpsuit, we bring respect, neutral professionalism, and a clear explanation of every signature line so documents withstand scrutiny later.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-blue-100 shadow p-8">
                <div className="flex items-center mb-6">
                  <Hospital className="w-10 h-10 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm uppercase text-blue-500">Critical Scenarios</p>
                    <h3 className="text-2xl font-semibold text-slate-900">When Time Is Everything</h3>
                  </div>
                </div>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-amber-500 mr-3 mt-1" />
                    <span>Stroke, surgery, or hospice signings requiring medical staff coordination and rapid notarization of powers of attorney or living wills.</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="w-5 h-5 text-indigo-500 mr-3 mt-1" />
                    <span>Detention center property releases, settlements, and parental consent forms that must be notarized before court deadlines or transfer hearings.</span>
                  </li>
                  <li className="flex items-start">
                    <Building2 className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                    <span>Real estate loan fundings where an entire roster of title, mortgage, and relocation professionals is waiting on the executed package.</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-emerald-500 mr-3 mt-1" />
                    <span>Complex family situations needing independent witnesses, translators, or remote participants who join via RON.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-blue-600 uppercase tracking-widest">How It Works</p>
              <h2 className="text-3xl font-bold text-slate-900">A Documented, Repeatable Process</h2>
            </div>
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div key={step.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-blue-600 uppercase tracking-widest">Pricing Philosophy</p>
              <h2 className="text-3xl font-bold text-slate-900">Fair Travel, Clear Premiums, No Surprises</h2>
              <p className="text-slate-600 mt-4">
                Every quote references statutory notarial limits ($5 per traditional act, $25 per RON) plus transparent travel, mileage, witness, and after-hours components.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {pricingHighlights.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-slate-600">
                Need a formal proposal for your firm or lender? Email <a href="mailto:info@JustLegalSolutions.org" className="text-blue-600 underline">info@JustLegalSolutions.org</a> and we will send rate sheets with GL and W-9 documentation within one business day.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Just Legal Solutions</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our team blends legal operations, process serving, skip tracing, and notarial expertise into a single command structure. Law firms appreciate that we can serve subpoenas, complete notarizations, and file returns without juggling multiple vendors. Families appreciate that we slow down, explain every document, and keep calm energy during stressful hospital or jail visits.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  With continuous investment in technology, we log every movement, store signed documents securely on justlegalsolutions.org infrastructure, and comply with ABA, ALTA, and CFPB guidance on consumer data. When you link this page with our <Link href="/tulsa-process-server" className="text-blue-600 underline">Tulsa process server</Link> resources or <Link href="/ultimate-guide-process-serving-oklahoma" className="text-blue-600 underline">process serving handbook</Link>, you gain a single accountability partner.
                </p>
                <ul className="space-y-3 text-slate-600">
                  {differentiators.map((diff) => (
                    <li key={diff} className="flex items-start">
                      <Star className="w-5 h-5 text-amber-500 mr-2 mt-1" />
                      <span>{diff}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 shadow p-8">
                <div className="flex items-center mb-6">
                  <Award className="w-10 h-10 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm uppercase text-blue-500">Trust Signals</p>
                    <h3 className="text-2xl font-semibold text-slate-900">Compliance & Assurance</h3>
                  </div>
                </div>
                <div className="grid gap-6">
                  {trustBadges.map((badge) => (
                    <div key={badge.title} className="flex items-start">
                      <Shield className="w-6 h-6 text-blue-600 mr-3" />
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900">{badge.title}</h4>
                        <p className="text-slate-600 text-sm">{badge.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready When Tulsa Metro Needs Us</h2>
            <p className="text-lg text-blue-100 mb-8">
              Whether you represent a law firm rushing to file in Tulsa County District Court, a title company closing after hours, or a family navigating hospital or detention logistics, our mobile notary desk is staffed every minute of the day. Expect compassionate communication, legally accurate execution, and same-day reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5393676832"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" /> Call (539) 367-6832
              </a>
              <a
                href="mailto:info@JustLegalSolutions.org"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border border-white/30"
              >
                <Mail className="w-5 h-5 mr-2" /> info@JustLegalSolutions.org
              </a>
              <Link
                href="/notary"
                className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold"
              >
                <Gavel className="w-5 h-5 mr-2" /> Explore Notary Services
              </Link>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Service area: Tulsa, Creek, Wagoner, Osage counties and surrounding communities throughout Oklahoma.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-blue-600 uppercase tracking-widest">Frequently Asked Questions</p>
              <h2 className="text-3xl font-bold text-slate-900">Mobile Notary FAQ</h2>
              <p className="text-slate-600 mt-4">Ten-plus answers covering Tulsa metro hospital signings, detention access, pricing, and RON logistics.</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <div className="text-slate-600 leading-relaxed text-base">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-7xl mx-auto px-4 pb-6">
        <LastUpdated pathname="/mobile-notary" className="text-center text-sm text-gray-500" />
      </div>
      <Footer />
    </div>
  );
}

