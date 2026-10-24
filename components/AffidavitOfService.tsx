'use client';

import { ExecutionText } from './AffidavitExecutionText';
import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { readToolDraft, saveToolDraft, removeToolDraft, type ToolDraft } from '@/lib/local-tool-draft';
import {
  listJurisdictions,
  normalizeStateCode,
  parseVenue,
  getReturnRule,
  getContentRule,
  getQualification,
  getQualificationTokens,
  resolveInstrument,
  validateForPrint,
  buildDeclarationVars,
  fillDeclarationForm,
  getRequiredFooterFields,
  STATES,
} from '@/lib/jurisdiction';
import type { InstrumentResolution } from '@/lib/jurisdiction';
import { 
  Printer, 
  RotateCcw, 
  Trash2,
  Plus,
  Share2,
  Check,
  Scale,
  Sparkles
} from 'lucide-react';

export type DocumentType = 
  | 'AFFIDAVIT OF SERVICE'
  | 'DECLARATION OF SERVICE'
  | 'AFFIDAVIT OF NON-SERVICE'
  | 'DECLARATION OF NON-SERVICE';

interface Attempt {
  id: number;
  date: string;
  time: string;
  notes: string;
}

/** Plain-English label for an attestation token (screen only). */
const ATTESTATION_LABELS: Record<string, string> = {
  nonParty18: 'I am at least 18 years old and not a party to this action',
  nonParty: 'I am not a party to this action',
  legalAge: 'I am of legal age',
  age21: 'I am at least 21 years old',
  notRelatedThirdDegree: 'I am not related within the third degree by blood or marriage to any party (Ala. R. Civ. P. 4(i)(1)(B))',
  officerOath: 'I am a peace officer or was specially appointed to make this service',
  noInterest: 'I have no interest in this action',
  nonAttorney: 'I am not an attorney for any party',
  notAttorney: 'I am not an attorney for any party',
  specialBailiffAppointment: 'I was specially appointed as bailiff to make this service',
  courtAppointed: 'I was appointed by the court to make this service',
  courtAppointed18: 'I was appointed by the court to make this service and am at least 18',
  notRelated: 'I am not related to the person served',
  knewPersonServed: 'I knew the person served to be the person named in the process',
  knewIdenticalPerson: 'I knew the person served to be the identical person named in the process',
  notInterested: 'I have no interest in this action',
  notAdverseParty: 'I am not an adverse party to this action',
  residentOfState: 'I am a resident of the state where service was made',
  notEmployeeOrRelativeOfParty: 'I am not an employee or relative of any party',
  sheriffOrIndifferentPerson: 'I am the sheriff or an indifferent person over 18',
  electorOfAnyState: 'I am a qualified elector of some state',
  felonyDisqualification: 'I have no felony conviction disqualifying me from serving process',
  texas107eDeclarationWithDOB: 'Declaration under Tex. R. Civ. P. 107(e) includes my date of birth',
};



export default function AffidavitOfService() {
  // Document Type & Mode
  const [docType, setDocType] = useState<DocumentType>('AFFIDAVIT OF SERVICE');

  // Case / Caption Details — blank defaults (no locale/brand baked in)
  const [courtName, setCourtName] = useState('');
  // Auto-fit the paper to the viewport on small screens (Joe's phone: paper was wider
  // than the screen and required sideways scrolling). The paper keeps its natural
  // 8.5in width; we just scale the whole sheet down to fit, like viewing the print.
  const paperFitRef = useRef<HTMLDivElement | null>(null);
  const [paperScale, setPaperScale] = useState(1);
  useEffect(() => {
    const compute = () => {
      const el = paperFitRef.current;
      if (!el) return;
      const available = el.clientWidth;
      // 816px = 8.5in @ 96dpi; padding p-6 (24px x 2) sits INSIDE the scaled box
      const natural = 816;
      const scale = Math.min(1, available / natural);
      setPaperScale(scale < 0.2 ? 0.2 : scale);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);
  const [plaintiff, setPlaintiff] = useState('');
  const [defendant, setDefendant] = useState('');
  const [caseNumber, setCaseNumber] = useState('');
  const [county, setCounty] = useState('');
  const [stateName, setStateName] = useState('');
  const [recipientName, setRecipientName] = useState('');

  // Process Server Credentials — blank; fill via form or ?server=&license=&company= URL
  const [serverName, setServerName] = useState('');
  const [serverLicense, setServerLicense] = useState('');
  const [serverCompany, setServerCompany] = useState('');
  const [serverAddress, setServerAddress] = useState('');
  const [serverPhone, setServerPhone] = useState('');
  const [serverEmail, setServerEmail] = useState('');
  /** Competency age for the server (national default 18; optional override). */
  const [serverAge, setServerAge] = useState('18');

  // Service Details
  const [documentsLine, setDocumentsLine] = useState('');
  const [serviceAddress, setServiceAddress] = useState('');
  const [serviceMethod, setServiceMethod] = useState<'personal' | 'substituted-residence' | 'substituted-business' | 'corporate' | 'posting' | 'non-service' | 'custom'>('substituted-residence');
  const [acceptedBy, setAcceptedBy] = useState('');
  /** Min age of co-resident for substitute residence (OK 15, AR 16, many 18) — blank = no age number in sentence. */
  const [coResidentMinAge, setCoResidentMinAge] = useState('');
  const [recipientTitle, setRecipientTitle] = useState('Registered Agent');
  const [customExecutionText, setCustomExecutionText] = useState('');

  // Comments / Narrative Notes (physical description goes here when needed)
  const [comments, setComments] = useState('');

  // Declaration / signing execution venue (physical place of signing — never court venue)
  const [execDate, setExecDate] = useState('');
  /** Legacy combined "City, State" kept for old drafts/share links; prefer signingCity/State. */
  const [execCity, setExecCity] = useState('');
  const [signingCity, setSigningCity] = useState('');
  const [signingState, setSigningState] = useState('');
  const [signingCounty, setSigningCounty] = useState('');
  /** TX declaration DOB token. */
  const [serverDob, setServerDob] = useState('');
  const [licenseExpirationDate, setLicenseExpirationDate] = useState('');
  /** Server's registration county (not the case caption county). */
  const [registrationCounty, setRegistrationCounty] = useState('');
  const [serviceFee, setServiceFee] = useState('');
  /** Actual age of the person who accepted abode service. */
  const [recipientAge, setRecipientAge] = useState('');
  const [abodeFollowUpMailDate, setAbodeFollowUpMailDate] = useState('');

  // Notary Block Info — physical notarization venue (defaults from signing location, not court)
  const [notaryState, setNotaryState] = useState('');
  const [notaryCounty, setNotaryCounty] = useState('');
  const [swornDayPhrase, setSwornDayPhrase] = useState('');

  // ── Jurisdiction layer (filing court state drives the instrument) ──────────
  /** Explicit filing-state choice ('' = not chosen). Wins over court-name parsing. */
  const [courtStateCode, setCourtStateCode] = useState('');
  /** True once the user has explicitly picked a state (guards auto-refill). */
  const [courtStateTouched, setCourtStateTouched] = useState(false);
  const JURISDICTIONS = useMemo(() => listJurisdictions(), []);
  /** State parsed from the court name the user typed (e.g. "DISTRICT COURT OF TULSA COUNTY, OKLAHOMA"). */
  const parsedCourtVenue = useMemo(() => parseVenue(courtName), [courtName]);
  /** Effective filing state: explicit pick > parsed court name. Never a silent default. */
  const effectiveCourtState = courtStateCode || (courtStateTouched ? '' : parsedCourtVenue.state);
  const courtRule = useMemo(() => getReturnRule(effectiveCourtState), [effectiveCourtState]);
  const courtContent = useMemo(() => getContentRule(effectiveCourtState), [effectiveCourtState]);
  /** Show the user what was auto-detected without overwriting their input. */
  const [venueNotice, setVenueNotice] = useState('');
  useEffect(() => {
    if (!courtStateTouched) {
      setVenueNotice(
        parsedCourtVenue.state && parsedCourtVenue.state !== effectiveCourtState
          ? `Filing state detected from court name: ${getReturnRule(parsedCourtVenue.state).stateName}`
          : '',
      );
    } else {
      setVenueNotice('');
    }
  }, [parsedCourtVenue.state, effectiveCourtState, courtStateTouched]);

  /** State where service physically happened — drives warnings only, never the instrument. */
  const [serviceStateCode, setServiceStateCode] = useState('');
  const serviceStateEffective = serviceStateCode || effectiveCourtState;

  /** Per-state required inputs. */
  const [cameToHandDate, setCameToHandDate] = useState('');
  const [cameToHandTime, setCameToHandTime] = useState('');
  const [attestationsAccepted, setAttestationsAccepted] = useState<string[]>([]);
  /** Officer/peace-officer authority confirmation for officer-only service states. */
  const [officerAuthorized, setOfficerAuthorized] = useState(false);

  /** Every required attestation must be explicitly reviewable. */
  const requiredAttestations = useMemo(() => {
    const tokens = (courtContent?.attestations ?? []).filter(
      (t) => docType.includes('DECLARATION') || !/declaration/i.test(String(t)),
    );
    return tokens as string[];
  }, [courtContent, docType]);
  /** Attestation checkboxes the state requires and the user has NOT yet checked. */
  const missingAttestations = useMemo(
    () => requiredAttestations.filter((t) => !attestationsAccepted.includes(t)),
    [requiredAttestations, attestationsAccepted],
  );
  const toggleAttestation = (token: string) => {
    setAttestationsAccepted((prev) =>
      prev.includes(token) ? prev.filter((t) => t !== token) : [...prev, token],
    );
  };

  // Attempts Log (Chronological)
  const [attempts, setAttempts] = useState<Attempt[]>([
    { id: 1, date: '', time: '', notes: '' },
    { id: 2, date: '', time: '', notes: '' },
  ]);

  const [copiedLink, setCopiedLink] = useState(false);
  const commentsRef = useRef<HTMLTextAreaElement>(null);

  const DRAFT_KEY = 'jls.affidavit.draft.v2';
  type DraftValue = Record<string, unknown>;
  const [draftReady, setDraftReady] = useState(false);
  const [availableDraft, setAvailableDraft] = useState<ToolDraft<DraftValue> | null>(null);
  const [draftNotice, setDraftNotice] = useState('');
  const draftInit = useRef(false);
  const suppressAutosave = useRef(false);
  const draftSnapshot = {
    docType,
    courtName,
    plaintiff,
    defendant,
    caseNumber,
    county,
    stateName,
    recipientName,
    serverName,
    serverLicense,
    serverCompany,
    serverAddress,
    serverPhone,
    serverEmail,
    serverAge,
    documentsLine,
    serviceAddress,
    serviceMethod,
    acceptedBy,
    coResidentMinAge,
    recipientTitle,
    customExecutionText,
    comments,
    execDate,
    execCity,
    signingCity,
    signingState,
    signingCounty,
    serverDob,
    licenseExpirationDate,
    registrationCounty,
    serviceFee,
    recipientAge,
    abodeFollowUpMailDate,
    notaryState,
    notaryCounty,
    swornDayPhrase,
    attempts,
    courtStateCode,
    serviceStateCode,
    cameToHandDate,
    cameToHandTime,
    attestationsAccepted,
    officerAuthorized,
  };
  const restoreDraft = (draft: ToolDraft<DraftValue>) => {
    const v = draft.value;
    if (typeof v.docType === 'string') setDocType(v.docType as DocumentType);
    if (typeof v.courtName === 'string') setCourtName(v.courtName as string);
    if (typeof v.plaintiff === 'string') setPlaintiff(v.plaintiff as string);
    if (typeof v.defendant === 'string') setDefendant(v.defendant as string);
    if (typeof v.caseNumber === 'string') setCaseNumber(v.caseNumber as string);
    if (typeof v.county === 'string') setCounty(v.county as string);
    if (typeof v.stateName === 'string') setStateName(v.stateName as string);
    if (typeof v.recipientName === 'string') setRecipientName(v.recipientName as string);
    if (typeof v.serverName === 'string') setServerName(v.serverName as string);
    if (typeof v.serverLicense === 'string') setServerLicense(v.serverLicense as string);
    if (typeof v.serverCompany === 'string') setServerCompany(v.serverCompany as string);
    if (typeof v.serverAddress === 'string') setServerAddress(v.serverAddress as string);
    if (typeof v.serverPhone === 'string') setServerPhone(v.serverPhone as string);
    if (typeof v.serverEmail === 'string') setServerEmail(v.serverEmail as string);
    if (typeof v.serverAge === 'string') setServerAge(v.serverAge as string);
    if (typeof v.documentsLine === 'string') setDocumentsLine(v.documentsLine as string);
    if (typeof v.serviceAddress === 'string') setServiceAddress(v.serviceAddress as string);
    if (typeof v.serviceMethod === 'string') setServiceMethod(v.serviceMethod as typeof serviceMethod);
    if (typeof v.acceptedBy === 'string') setAcceptedBy(v.acceptedBy as string);
    if (typeof v.coResidentMinAge === 'string') setCoResidentMinAge(v.coResidentMinAge as string);
    if (typeof v.recipientTitle === 'string') setRecipientTitle(v.recipientTitle as string);
    if (typeof v.customExecutionText === 'string') setCustomExecutionText(v.customExecutionText as string);
    if (typeof v.comments === 'string') setComments(v.comments as string);
    if (typeof v.execDate === 'string') setExecDate(v.execDate as string);
    if (typeof v.execCity === 'string') setExecCity(v.execCity as string);
    if (typeof v.signingCity === 'string') setSigningCity(v.signingCity as string);
    if (typeof v.signingState === 'string') setSigningState(v.signingState as string);
    if (typeof v.signingCounty === 'string') setSigningCounty(v.signingCounty as string);
    if (typeof v.serverDob === 'string') setServerDob(v.serverDob as string);
    if (typeof v.licenseExpirationDate === 'string') setLicenseExpirationDate(v.licenseExpirationDate as string);
    if (typeof v.registrationCounty === 'string') setRegistrationCounty(v.registrationCounty as string);
    if (typeof v.serviceFee === 'string') setServiceFee(v.serviceFee as string);
    if (typeof v.recipientAge === 'string') setRecipientAge(v.recipientAge as string);
    if (typeof v.abodeFollowUpMailDate === 'string') setAbodeFollowUpMailDate(v.abodeFollowUpMailDate as string);
    if (typeof v.notaryState === 'string') setNotaryState(v.notaryState as string);
    if (typeof v.notaryCounty === 'string') setNotaryCounty(v.notaryCounty as string);
    if (typeof v.swornDayPhrase === 'string') setSwornDayPhrase(v.swornDayPhrase as string);
    // Jurisdiction-layer draft fields (older drafts simply lack these keys).
    if (typeof v.courtStateCode === 'string') { setCourtStateCode(v.courtStateCode as string); if (v.courtStateCode) setCourtStateTouched(true); }
    if (typeof v.serviceStateCode === 'string') setServiceStateCode(v.serviceStateCode as string);
    if (typeof v.cameToHandDate === 'string') setCameToHandDate(v.cameToHandDate as string);
    if (typeof v.cameToHandTime === 'string') setCameToHandTime(v.cameToHandTime as string);
    if (Array.isArray(v.attestationsAccepted)) setAttestationsAccepted((v.attestationsAccepted as string[]).map(String).filter(Boolean));
    if (typeof v.officerAuthorized === 'boolean') setOfficerAuthorized(v.officerAuthorized as boolean);
    if (Array.isArray(v.attempts)) {
      const safe = v.attempts.slice(0, 8).filter((a): a is Attempt => a && typeof a.id === 'number' && typeof a.date === 'string' && typeof a.time === 'string' && typeof a.notes === 'string');
      if (safe.length) setAttempts(safe);
    }
    suppressAutosave.current = false;
    setAvailableDraft(null);
    setDraftNotice('Draft restored on this device');
  };
  useEffect(() => {
    if (draftInit.current) return;
    draftInit.current = true;
    const stored = readToolDraft<DraftValue>(DRAFT_KEY);
    if (stored) { setAvailableDraft(stored); suppressAutosave.current = true; }
    setDraftReady(true);
  }, []);
  useEffect(() => {
    if (!draftReady || suppressAutosave.current) return;
    const timer = window.setTimeout(() => { saveToolDraft(DRAFT_KEY, draftSnapshot); }, 600);
    return () => window.clearTimeout(timer);
  }, [draftReady, ...Object.values(draftSnapshot)]);

  const saveDraftNow = () => setDraftNotice(saveToolDraft(DRAFT_KEY, draftSnapshot) ? 'Saved on this device only' : 'Storage unavailable — use Print / Save PDF');
  const discardDraft = () => { removeToolDraft(DRAFT_KEY); setAvailableDraft(null); suppressAutosave.current = false; setDraftNotice('Saved draft removed'); };

  const isDeclaration = docType.includes('DECLARATION');
  const isNonService = docType.includes('NON-SERVICE') || serviceMethod === 'non-service';

  /** MM/DD/YYYY or user text -> yyyy-mm-dd for the Sunday check; unparseable text returns ''. */
  const normalizeISODate = (raw: string): string => {
    const m = raw.trim().match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})$/);
    if (!m) return '';
    const [, mm, dd, yyyy] = m;
    const year = yyyy.length === 2 ? `20${yyyy}` : yyyy;
    return `${year}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`;
  };

  // ── Instrument gate: the filing state decides what may print ────────────────
  // Requested instrument vs what the jurisdiction allows. Buttons are NOT the gate:
  // resolved.docType is what actually renders, whatever the select box says.
  const requestedInstrument: 'declaration' | 'affidavit' = isDeclaration ? 'declaration' : 'affidavit';
  const instrument: InstrumentResolution = useMemo(
    () => resolveInstrument(requestedInstrument, effectiveCourtState),
    [requestedInstrument, effectiveCourtState],
  );
  /** What actually renders: the gate may have downgraded a declaration to an affidavit. */
  const gatedIsDeclaration = instrument.docType === 'declaration';
  const gatedDocType: DocumentType = gatedIsDeclaration
    ? (isNonService ? 'DECLARATION OF NON-SERVICE' : 'DECLARATION OF SERVICE')
    : (isNonService ? 'AFFIDAVIT OF NON-SERVICE' : 'AFFIDAVIT OF SERVICE');
  /** True when the user asked for a declaration but the state forbids it. */
  const declarationBlocked = isDeclaration && instrument.blocked;

  const declarationVars = useMemo(
    () =>
      buildDeclarationVars({
        execDate,
        signingCity: signingCity || execCity,
        signingState,
        signingCounty,
        affiantName: serverName,
        serverDob,
        street: serverAddress,
      }),
    [execDate, signingCity, execCity, signingState, signingCounty, serverName, serverDob, serverAddress],
  );

  const footerFieldValues = useMemo(
    () => ({
      signingCity: signingCity || execCity,
      signingState,
      signingCounty,
      serverAddress,
      serverPhone,
      licenseNumber: serverLicense,
      licenseExpirationDate,
      registrationCounty,
      serviceFee,
    }),
    [signingCity, execCity, signingState, signingCounty, serverAddress, serverPhone, serverLicense, licenseExpirationDate, registrationCounty, serviceFee],
  );

  // Print validation: filing-state requirements are errors; service-state risks are warnings.
  const printCheck = useMemo(
    () =>
      validateForPrint({
        courtState: effectiveCourtState,
        serviceState: serviceStateEffective,
        requested: requestedInstrument,
        serviceDate: attempts.find((a) => a.date)?.date
          ? normalizeISODate(attempts.find((a) => a.date)!.date)
          : '',
        cameToHandDate: cameToHandDate ? normalizeISODate(cameToHandDate) : '',
        cameToHandTime,
        documentsServed: documentsLine,
        attestationsAccepted,
        servedByAbode: serviceMethod === 'substituted-residence',
        recipientAge: recipientAge ? Number(recipientAge) : null,
        abodeFollowUpMailDate,
        officerAuthorized,
        execDate,
        signingCity: signingCity || execCity,
        signingState,
        signingCounty,
        footerFieldValues,
        declarationVars,
      }),
    [effectiveCourtState, serviceStateEffective, requestedInstrument, attempts, cameToHandDate, cameToHandTime, documentsLine, attestationsAccepted, serviceMethod, recipientAge, abodeFollowUpMailDate, officerAuthorized, execDate, signingCity, execCity, signingState, signingCounty, footerFieldValues, declarationVars],
  );
  const printErrors = printCheck.errors;
  const printWarnings = printCheck.warnings;

  // Set default sworn date phrase and execution date
  useEffect(() => {
    const today = new Date();
    const ordinal = (n: number) => {
      const j = n % 10, k = n % 100;
      if (j === 1 && k !== 11) return `${n}st`;
      if (j === 2 && k !== 12) return `${n}nd`;
      if (j === 3 && k !== 13) return `${n}rd`;
      return `${n}th`;
    };
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const phrase = `this ${ordinal(today.getDate())} day of ${months[today.getMonth()]}, ${today.getFullYear()}`;
    if (!swornDayPhrase) setSwornDayPhrase(phrase);

    const dateStr = today.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    if (!execDate) setExecDate(dateStr);
  }, [swornDayPhrase, execDate]);

  // Sync title when method changes
  useEffect(() => {
    if (serviceMethod === 'non-service') {
      if (isDeclaration && docType !== 'DECLARATION OF NON-SERVICE') setDocType('DECLARATION OF NON-SERVICE');
      if (!isDeclaration && docType !== 'AFFIDAVIT OF NON-SERVICE') setDocType('AFFIDAVIT OF NON-SERVICE');
    } else {
      if (isDeclaration && docType !== 'DECLARATION OF SERVICE') setDocType('DECLARATION OF SERVICE');
      if (!isDeclaration && docType !== 'AFFIDAVIT OF SERVICE') setDocType('AFFIDAVIT OF SERVICE');
    }
  }, [serviceMethod, isDeclaration, docType]);

  // URL Query Parameters Pre-fill
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

    const cName = getParam('court', 'court_name', 'Name of Court');
    if (cName) setCourtName(cName);
    const cNum = getParam('case', 'case_num', 'Case Number');
    if (cNum) setCaseNumber(cNum);
    const pl = getParam('plaintiff', 'petitioner', 'Plaintiff/Petitioner');
    if (pl) setPlaintiff(pl);
    const def = getParam('defendant', 'respondent', 'Defendant/Respondent');
    if (def) setDefendant(def);
    const rec = getParam('recipient', 'target', 'Recipient Name');
    if (rec) setRecipientName(rec);
    const addr = getParam('address', 'service_address', 'Address', 'location');
    if (addr) setServiceAddress(addr);
    const docs = getParam('docs', 'documents_served', 'Documents');
    if (docs) setDocumentsLine(docs);
    const sName = getParam('server', 'server_name', 'Server Name', 'name');
    if (sName) setServerName(sName);
    const sCo = getParam('company', 'agency', 'Company');
    if (sCo) setServerCompany(sCo);
    const sLic = getParam('license', 'License');
    if (sLic) setServerLicense(sLic);
    const sAddr = getParam('server_address', 'agency_address', 'Agency Address');
    if (sAddr) setServerAddress(sAddr);
    const sPh = getParam('phone', 'Phone');
    if (sPh) setServerPhone(sPh);
    const sEm = getParam('email', 'Email');
    if (sEm) setServerEmail(sEm);
    const sAge = getParam('server_age', 'age', 'competency_age');
    if (sAge) setServerAge(sAge);
    const coAge = getParam('co_resident_age', 'sub_age', 'substitute_age');
    if (coAge) setCoResidentMinAge(coAge);
    const cty = getParam('county', 'County');
    if (cty) setCounty(cty);
    const st = getParam('state', 'State');
    if (st) setStateName(st);
    // Notary / signing venue must NOT inherit court caption state/county (D4).

    // Jurisdiction params (symmetric with handleShare).
    const cs = getParam('court_state', 'filing_state');
    if (cs) { setCourtStateCode(normalizeStateCode(cs)); setCourtStateTouched(true); }
    const ss = getParam('service_state');
    if (ss) setServiceStateCode(normalizeStateCode(ss));
    const rd = getParam('received_date', 'came_to_hand_date');
    if (rd) setCameToHandDate(rd);
    const rt = getParam('received_time', 'came_to_hand_time');
    if (rt) setCameToHandTime(rt);
    const at = getParam('attest');
    if (at) setAttestationsAccepted(at.split(',').map((t) => t.trim()).filter(Boolean));
    if (getParam('officer') === '1') setOfficerAuthorized(true);

    const method = getParam('method', 'service_method');
    const validMethods = ['personal','substituted-residence','substituted-business','corporate','posting','non-service','custom'];
    if (method && validMethods.includes(method)) setServiceMethod(method as typeof serviceMethod);
    const optional: [string[], (value: string) => void][] = [
      [['accepted_by','acceptedBy'], setAcceptedBy],
      [['recipient_title','recipientTitle'], setRecipientTitle],
      [['custom_text','customExecutionText'], setCustomExecutionText],
      [['comments','notes'], setComments],
      [['exec_date','execution_date'], setExecDate],
      [['exec_city','execution_city'], setExecCity],
      [['signing_city'], setSigningCity],
      [['signing_state'], setSigningState],
      [['signing_county'], setSigningCounty],
      [['server_dob','dob'], setServerDob],
      [['license_exp','license_expiration'], setLicenseExpirationDate],
      [['registration_county','server_registration_county'], setRegistrationCounty],
      [['service_fee','fee'], setServiceFee],
      [['recipient_age','accepted_age'], setRecipientAge],
      [['mail_date','abode_mail_date','follow_up_mail'], setAbodeFollowUpMailDate],
      [['notary_state'], setNotaryState],
      [['notary_county'], setNotaryCounty],
      [['sworn_day'], setSwornDayPhrase],
    ];
    optional.forEach(([keys, setter]) => { const value = getParam(...keys); if (value !== null) setter(value); });
    const loadedAttempts: Attempt[] = [];
    for (let i = 1; i <= 8; i++) {
      const date = getParam(`a${i}d`) || '';
      const time = getParam(`a${i}t`) || '';
      const notes = getParam(`a${i}n`) || '';
      if (date || time || notes) loadedAttempts.push({ id:i,date,time,notes });
    }
    if (loadedAttempts.length) setAttempts(loadedAttempts);

    const t = getParam('type', 'doc_type');
    if (t) {
      const u = t.toUpperCase();
      if (u.includes('DECLARATION') && u.includes('NON-SERVICE')) { setDocType('DECLARATION OF NON-SERVICE'); setServiceMethod('non-service'); }
      else if (u.includes('DECLARATION')) setDocType('DECLARATION OF SERVICE');
      else if (u.includes('NON-SERVICE')) { setDocType('AFFIDAVIT OF NON-SERVICE'); setServiceMethod('non-service'); }
      else setDocType('AFFIDAVIT OF SERVICE');
    }
    // NOTE: a link carrying type=declaration for a state that blocks declarations is
    // handled by the gate itself — instrument resolution runs on every render and
    // the render path uses gatedDocType, so the link loads as an affidavit with a
    // notice. Nothing here needs to inspect the state.
  }, []);

  const handlePrint = useCallback(() => {
    // Render-path guard: printValidation errors mean the document is NOT legally
    // printable as configured (blocked declaration, missing came-to-hand, missing
    // attestations). Buttons are not the gate — this is.
    if (printErrors.length > 0) {
      setDraftNotice(`Cannot print yet: ${printErrors[0]}`);
      return;
    }
    const printableType = gatedDocType;
    const originalTitle = document.title;
    if (caseNumber.trim()) {
      document.title = `${caseNumber.trim()} - ${printableType.replace(/\s+/g, '_')}`;
    } else {
      document.title = printableType;
    }
    window.print();
    setTimeout(() => { document.title = originalTitle; }, 1000);
  }, [caseNumber, gatedDocType, printErrors]);

  const handleShare = () => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.origin + window.location.pathname);
    url.searchParams.set('type', gatedDocType);
    if (courtName) url.searchParams.set('court', courtName);
    if (caseNumber) url.searchParams.set('case', caseNumber);
    if (plaintiff) url.searchParams.set('plaintiff', plaintiff);
    if (defendant) url.searchParams.set('defendant', defendant);
    if (recipientName) url.searchParams.set('recipient', recipientName);
    if (serviceAddress) url.searchParams.set('address', serviceAddress);
    if (documentsLine) url.searchParams.set('docs', documentsLine);
    if (serverName) url.searchParams.set('server', serverName);
    if (serverCompany) url.searchParams.set('company', serverCompany);
    if (serverLicense) url.searchParams.set('license', serverLicense);
    if (serverAddress) url.searchParams.set('server_address', serverAddress);
    if (serverPhone) url.searchParams.set('phone', serverPhone);
    if (serverEmail) url.searchParams.set('email', serverEmail);
    if (serverAge && serverAge !== '18') url.searchParams.set('server_age', serverAge);
    if (coResidentMinAge) url.searchParams.set('co_resident_age', coResidentMinAge);
    if (county) url.searchParams.set('county', county);
    if (stateName) url.searchParams.set('state', stateName);
    if (courtStateCode) url.searchParams.set('court_state', courtStateCode);
    if (serviceStateCode) url.searchParams.set('service_state', serviceStateCode);
    if (cameToHandDate) url.searchParams.set('received_date', cameToHandDate);
    if (cameToHandTime) url.searchParams.set('received_time', cameToHandTime);
    if (attestationsAccepted.length) url.searchParams.set('attest', attestationsAccepted.join(','));
    if (officerAuthorized) url.searchParams.set('officer', '1');
    if (serviceMethod) url.searchParams.set('method', serviceMethod);
    if (acceptedBy) url.searchParams.set('accepted_by', acceptedBy);
    if (recipientTitle) url.searchParams.set('recipient_title', recipientTitle);
    if (customExecutionText) url.searchParams.set('custom_text', customExecutionText);
    if (comments) url.searchParams.set('comments', comments);
    if (execDate) url.searchParams.set('exec_date', execDate);
    if (execCity) url.searchParams.set('exec_city', execCity);
    if (signingCity) url.searchParams.set('signing_city', signingCity);
    if (signingState) url.searchParams.set('signing_state', signingState);
    if (signingCounty) url.searchParams.set('signing_county', signingCounty);
    if (serverDob) url.searchParams.set('server_dob', serverDob);
    if (licenseExpirationDate) url.searchParams.set('license_exp', licenseExpirationDate);
    if (registrationCounty) url.searchParams.set('registration_county', registrationCounty);
    if (serviceFee) url.searchParams.set('service_fee', serviceFee);
    if (recipientAge) url.searchParams.set('recipient_age', recipientAge);
    if (abodeFollowUpMailDate) url.searchParams.set('mail_date', abodeFollowUpMailDate);
    if (notaryState) url.searchParams.set('notary_state', notaryState);
    if (notaryCounty) url.searchParams.set('notary_county', notaryCounty);
    if (swornDayPhrase) url.searchParams.set('sworn_day', swornDayPhrase);
    attempts.slice(0,8).forEach((a,i) => {
      if (a.date) url.searchParams.set(`a${i+1}d`, a.date);
      if (a.time) url.searchParams.set(`a${i+1}t`, a.time);
      if (a.notes) url.searchParams.set(`a${i+1}n`, a.notes);
    });
    if (url.toString().length > 6000) { setDraftNotice('Link too long; use local draft and print the form.'); return; }


    navigator.clipboard.writeText(url.toString()).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }).catch(() => setDraftNotice('Copy failed; use Print / Save PDF.'));
  };

  const addAttempt = () => {
    if (attempts.length >= 8) return;
    setAttempts(prev => [...prev, { id: Math.max(0,...prev.map(a=>a.id)) + 1, date: '', time: '', notes: '' }]);
  };

  const removeAttempt = (id: number) => {
    if (attempts.length <= 1) return;
    setAttempts(prev => prev.filter(a => a.id !== id));
  };

  const updateAttempt = (id: number, field: keyof Attempt, val: string) => {
    setAttempts(prev => prev.map(a => a.id === id ? { ...a, [field]: val } : a));
  };

  const handleReset = () => {
    if (window.confirm('Clear all fields to a blank template?')) {
      removeToolDraft(DRAFT_KEY); setAvailableDraft(null); suppressAutosave.current = false;
      setDocType('AFFIDAVIT OF SERVICE');
      setCourtName('');
      setPlaintiff('');
      setDefendant('');
      setCaseNumber('');
      setCounty('');
      setStateName('');
      setRecipientName('');
      setDocumentsLine('');
      setServiceAddress('');
      setAcceptedBy('');
      setCustomExecutionText('');
      setComments('');
      setServerName('');
      setServerLicense('');
      setServerCompany('');
      setServerAddress('');
      setServerPhone('');
      setServerEmail('');
      setServerAge('18');
      setCoResidentMinAge('');
      setExecCity('');
      setSigningCity('');
      setSigningState('');
      setSigningCounty('');
      setServerDob('');
      setLicenseExpirationDate('');
      setRegistrationCounty('');
      setServiceFee('');
      setRecipientAge('');
      setAbodeFollowUpMailDate('');
      setNotaryState('');
      setNotaryCounty('');
      setServiceMethod('substituted-residence');
      setAttempts([{ id: 1, date: '', time: '', notes: '' }]);
      setCourtStateCode('');
      setCourtStateTouched(false);
      setServiceStateCode('');
      setCameToHandDate('');
      setCameToHandTime('');
      setAttestationsAccepted([]);
      setOfficerAuthorized(false);
    }
  };

  const licenseClause = serverLicense.trim()
    ? ` (License No. ${serverLicense.trim()})`
    : '';

  /** Word form for common competency / co-resident ages; fallback is digits only. */
  const agePhrase = (raw: string) => {
    const n = (raw || '18').trim();
    const words: Record<string, string> = {
      '15': 'fifteen',
      '16': 'sixteen',
      '17': 'seventeen',
      '18': 'eighteen',
      '19': 'nineteen',
      '20': 'twenty',
      '21': 'twenty-one',
      '25': 'twenty-five',
    };
    return words[n] ? `${words[n]} (${n})` : `${n} (${n})`;
  };

  const competencyAgePhrase = agePhrase(serverAge || '18');

  // ── Per-state print wording (all derived from the bundle; nothing hand-written) ──
  /** State-specific label for the documents line ("Documents served (all pleadings)"). */
  const documentsLabel = useMemo(
    () => courtContent?.render?.documentsList?.label || 'Documents',
    [courtContent],
  );

  /**
   * Qualification paragraph — '' when the state has none or a token is unfilled (never prints {{x}}).
   * Out-of-state guard (2026-10-24): a venue qualification that asserts VENUE-state registration or
   * licensing (AZ/CA/DE/HI/IL/MT/UT style recitals) is suppressed when the serve happened in a
   * different state — the universal competency paragraph below stays (it recites authority where
   * service was effected, which is always true). Never print a registration the server cannot have.
   */
  const outOfStateVenueQualBlocked =
    !!serviceStateCode &&
    normalizeStateCode(serviceStateCode) !== normalizeStateCode(effectiveCourtState);
  const qualificationParagraph = useMemo(() => {
    const text = getQualification(effectiveCourtState, {
      serverName,
      licenseNumber: serverLicense,
      registrationCounty: registrationCounty || county,
      licenseExpirationDate,
      // WA (2026-10-24): recital cites the true state of service (CR 4(e)(2)/RCW 4.28.180),
      // never the filing venue — an OK server on a WA case must not claim WA registration.
      serviceStateName: STATES[serviceStateEffective]?.stateName || serviceStateEffective,
    });
    if (!text) return '';
    if (outOfStateVenueQualBlocked && /registered|registration|licensed (process server|to serve)|license no\./i.test(text)) {
      return '';
    }
    return text;
  }, [effectiveCourtState, serverName, serverLicense, registrationCounty, county, licenseExpirationDate, serviceStateEffective, outOfStateVenueQualBlocked]);

  /** Came-to-hand recital for FL/TX; '' unless the state requires it AND date/time are present. */
  const cameToHandSentence = useMemo(() => {
    const rule = courtContent?.render?.cameToHand;
    if (!rule?.required || !cameToHandDate) return '';
    return rule.wording
      .replace('{receivedDate}', cameToHandDate)
      .replace('{receivedTime}', cameToHandTime || '');
  }, [courtContent, cameToHandDate, cameToHandTime]);

  /** Exact statutory penalty sentence for a declaration — placeholders filled from signing fields. */
  const declarationPenaltySentence = useMemo(() => {
    if (!gatedIsDeclaration) return '';
    const formText = (courtRule.declarationFormText || '').trim();
    if (!formText) {
      const laws = courtRule.stateName || stateName || '__________';
      return `I state under penalty of perjury under the laws of the State of ${laws} that the foregoing is true and correct.`;
    }
    const filled = fillDeclarationForm(formText, declarationVars);
    // Print gate blocks unresolved tokens; never ship raw `{placeholders}` on paper.
    return filled.missing.length > 0 ? '' : filled.text;
  }, [gatedIsDeclaration, courtRule, stateName, declarationVars]);

  const neededFooterFields = useMemo(
    () => getRequiredFooterFields(effectiveCourtState),
    [effectiveCourtState],
  );

  const signingPlaceLabel = [signingCity || execCity, signingState].filter(Boolean).join(', ');

  /** Statutory instrument note (e.g. FL §48.21 signed-not-notarized note) — small italics. */
  const instrumentNote = courtContent?.render?.instrumentNote || '';

  // ServeTracker Statutory Execution Sentence
  const getExecutionSentence = () => {
    if (customExecutionText.trim()) return customExecutionText;
    const target = recipientName.trim() || 'the recipient named herein';
    const docs = documentsLine.trim() ? 'true and correct copies of the documents listed above' : 'true and correct copies of the legal process';
    const acc = acceptedBy.trim() || 'a person authorized to accept service';
    const coAge = coResidentMinAge.trim();
    const coAgeClause = coAge
      ? `, a person of suitable age and discretion residing therein who is ${agePhrase(coAge)} years of age or older`
      : ', a person of suitable age and discretion residing therein';

    switch (serviceMethod) {
      case 'personal':
        return `I executed personal service upon ${target} by personally delivering ${docs} to ${target}.`;
      case 'substituted-residence':
        return `I executed substituted service upon ${target} by leaving ${docs} at the dwelling house or usual place of abode of ${target} with ${acc}${coAgeClause}, and I explained the general nature of the papers.`;
      case 'substituted-business':
        return `I executed substituted service upon ${target} by leaving, during regular business hours, ${docs} at the office / place of employment of ${target} with ${acc}, the person apparently in charge thereof.`;
      case 'corporate':
        return `I executed service of process upon ${target} by delivering ${docs} to ${acc}, the ${recipientTitle || 'Registered Agent'} authorized to accept service on behalf of said entity.`;
      case 'posting':
        return `I executed service upon ${target} by posting ${docs} in a conspicuous manner upon the front entrance door of the premises after diligent attempts.`;
      case 'non-service':
        return `After due search, careful inquiry, and diligent attempts at the address(es) listed above, I have been unable to effect process upon ${target} for the reasons recorded in the log above.`;
      default:
        return `I executed service of ${docs} upon ${target} in accordance with statutory civil procedure.`;
    }
  };

  return (
    <>
      <style jsx global>{`
        @page {
          size: letter portrait;
          margin: 0.35in 0.45in;
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

      {/* Top Mobile/Desktop Toolbar */}
      <div className="no-print-affidavit max-w-4xl mx-auto px-3 sm:px-4 mb-4">
        <div className="bg-slate-900 text-white rounded-xl shadow-lg p-3 sm:p-4 border border-slate-800 space-y-3">
          
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2.5 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-400 shrink-0" />
              <h2 className="font-bold text-sm sm:text-base text-white">ServeTracker Legal Affidavit &amp; Declaration</h2>
              <span className="bg-blue-600/30 text-blue-300 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border border-blue-500/30">
                50-State &amp; Federal
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-1.5 rounded-lg font-semibold text-xs shadow transition-all active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 min-h-[44px]"
              >
                <Printer className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Print / Save PDF</span>
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg font-semibold text-xs shadow transition-all active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 min-h-[44px]"
                title="Copy shareable link"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-300" aria-hidden="true" /> : <Share2 className="w-3.5 h-3.5" aria-hidden="true" />}
                <span>{copiedLink ? 'Copied' : 'Share'}</span>
              </button>

              <button type="button" onClick={saveDraftNow} className="min-h-[44px] rounded-lg bg-slate-700 px-3 py-2 text-xs font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">Save draft</button>
              <button type="button" onClick={() => { const saved = readToolDraft<DraftValue>(DRAFT_KEY); if (saved) restoreDraft(saved); else setDraftNotice('No saved draft on this device'); }} className="min-h-[44px] rounded-lg bg-slate-700 px-3 py-2 text-xs font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">Load draft</button>
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all active:scale-95 cursor-pointer border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 min-h-[44px]"
                title="Clear form"
              >
                <RotateCcw className="w-3 h-3" aria-hidden="true" />
                <span>Clear</span>
              </button>
            </div>
          </div>

          {availableDraft && <div role="status" className="rounded-lg bg-amber-950 p-2 text-sm text-white">A draft is saved on this device. A link you opened stays on screen. <button type="button" className="min-h-[44px] px-2 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-950 rounded-sm" onClick={() => restoreDraft(availableDraft)}>Restore draft</button><button type="button" className="min-h-[44px] px-2 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-950 rounded-sm" onClick={discardDraft}>Discard draft</button></div>}
          {draftNotice && <p role="status" className="text-xs text-amber-200">{draftNotice}</p>}
          <details className="text-xs text-slate-300"><summary className="min-h-[44px] cursor-pointer inline-flex items-center">Shareable-link fields</summary><p>The link includes parties, case, recipient, method, address, comments, execution and notary venue, and up to eight attempts (a1d/a1t/a1n through a8d/a8t/a8n). Anyone with the link can read these details; use a local draft for sensitive cases.</p></details>
          {/* Mode & Method Selector Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-semibold shrink-0">Document Mode:</span>
              <select
                value={gatedDocType}
                onChange={(e) => {
                  const next = e.target.value as DocumentType;
                  // A disabled declaration option cannot be chosen via the select, but
                  // keyboard/state changes go through the gate on render regardless.
                  setDocType(next);
                  if (next.includes('DECLARATION') && instrument.blocked) {
                    setDraftNotice(
                      `${instrument.reason}${instrument.citation ? ` (${instrument.citation})` : ''}`,
                    );
                  }
                }}
                className="bg-slate-800 border border-slate-700 text-white text-xs font-bold rounded-lg px-2.5 py-1.5 outline-none focus:border-blue-500 cursor-pointer w-full"
              >
                <option value="AFFIDAVIT OF SERVICE">Affidavit of Service (Sworn &amp; Notarized)</option>
                <option
                  value="DECLARATION OF SERVICE"
                  disabled={!courtRule.allowDeclaration}
                >
                  Declaration of Service{courtRule.allowDeclaration ? ` (${courtRule.declarationStatute})` : ' — Not permitted in this state'}
                </option>
                <option value="AFFIDAVIT OF NON-SERVICE">Affidavit of Non-Service (Notarized Log)</option>
                <option
                  value="DECLARATION OF NON-SERVICE"
                  disabled={!courtRule.allowDeclaration}
                >
                  Declaration of Non-Service{courtRule.allowDeclaration ? ` (${courtRule.declarationStatute})` : ' — Not permitted in this state'}
                </option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-semibold shrink-0">Manner / Method:</span>
              <select
                value={serviceMethod}
                onChange={(e) => setServiceMethod(e.target.value as any)}
                className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 outline-none focus:border-blue-500 cursor-pointer w-full"
              >
                <option value="personal">Personal Service (Delivered directly to recipient)</option>
                <option value="substituted-residence">Substitute (Residence — suitable age &amp; discretion)</option>
                <option value="substituted-business">Substitute (Business — person in charge)</option>
                <option value="corporate">Corporate / Registered Agent</option>
                <option value="posting">Posting (Conspicuous place on premises)</option>
                <option value="non-service">Non-Service (Diligent Inquiry &amp; Attempts)</option>
                <option value="custom">Custom Manner (Type custom text)</option>
              </select>
            </div>
          </div>

          {/* ── Filing jurisdiction picker + gate notice ─────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">
                Court state (governs Affidavit vs Declaration):
              </span>
              <select
                value={courtStateCode}
                onChange={(e) => {
                  setCourtStateCode(e.target.value);
                  setCourtStateTouched(true);
                  // Keep the free-text state fields aligned with the explicit pick.
                  const name = JURISDICTIONS.find((j) => j.code === e.target.value)?.name || '';
                  if (name) setStateName(name);
                  // Do not copy court state into the notary/signing venue.
                }}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="">— Detected from court name / unset —</option>
                {JURISDICTIONS.map((j) => (
                  <option key={j.code} value={j.code}>
                    {j.name}{j.allowDeclaration ? '' : ' (affidavit only)'}
                  </option>
                ))}
              </select>
              {venueNotice && <span className="text-blue-300 text-[10px] block mt-0.5">{venueNotice}</span>}
            </div>
            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">
                Service state (where papers were served — informational):
              </span>
              <select
                value={serviceStateCode}
                onChange={(e) => setServiceStateCode(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="">— Same as court state —</option>
                {JURISDICTIONS.map((j) => (
                  <option key={j.code} value={j.code}>
                    {j.name}
                  </option>
                ))}
              </select>
              <span className="text-slate-500 text-[10px] block mt-0.5">Sunday / officer-only / abode-age notices come from this state; they never change the document type.</span>
            </div>
          </div>

          {declarationBlocked && (
            <div role="alert" className="rounded-lg bg-amber-950 border border-amber-700 p-2 text-xs text-amber-100">
              <strong>{instrument.reason}</strong>
              {instrument.citation && (
                <span className="block text-amber-300/80 mt-0.5">Authority: {instrument.citation}</span>
              )}
              <span className="block text-amber-200/80 mt-0.5">Printing the notarized affidavit instead.</span>
            </div>
          )}

          {/* ── Per-state required inputs (only where the state requires them) ── */}
          {courtContent?.render?.cameToHand?.required && (
            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 font-semibold block mb-0.5">
                  Date process received / came to hand ({courtRule.stateCode} requirement):
                </span>
                <input
                  type="date"
                  value={cameToHandDate}
                  onChange={(e) => setCameToHandDate(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <span className="text-slate-400 font-semibold block mb-0.5">Time received:</span>
                <input
                  type="time"
                  value={cameToHandTime}
                  onChange={(e) => setCameToHandTime(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {requiredAttestations.length > 0 && (
            <div className="pt-1 border-t border-slate-800 text-xs">
              <span className="text-slate-400 font-semibold block mb-0.5">
                {courtRule.stateName} required attestations:
              </span>
              {requiredAttestations.map((token) => (
                <label key={token} className="flex items-start gap-1.5 py-0.5 cursor-pointer text-slate-200">
                  <input
                    type="checkbox"
                    checked={attestationsAccepted.includes(token)}
                    onChange={() => toggleAttestation(token)}
                    className="mt-0.5"
                  />
                  <span>{ATTESTATION_LABELS[token] || token}</span>
                </label>
              ))}
            </div>
          )}

          {/* Print gate status — errors block printing, warnings need acknowledgement */}
          {(printErrors.length > 0 || printWarnings.length > 0) && (
            <div className="pt-1 border-t border-slate-800 text-xs space-y-1">
              {printErrors.map((e, i) => (
                <p key={`err-${i}`} className="text-red-300">✖ {e}</p>
              ))}
              {printWarnings.map((w, i) => (
                <p key={`warn-${i}`} className="text-amber-300">⚠ {w}</p>
              ))}
            </div>
          )}

          {/* Substituted / Corporate Helper Inputs */}
          {['substituted-residence', 'substituted-business', 'corporate'].includes(serviceMethod) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 font-semibold block mb-0.5">Accepted By / Co-Resident Name:</span>
                <input
                  type="text"
                  value={acceptedBy}
                  onChange={(e) => setAcceptedBy(e.target.value)}
                  placeholder="e.g. Jane Doe (Wife / Co-Resident)"
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
                />
              </div>
              {serviceMethod === 'substituted-residence' && (
                <>
                  <div>
                    <span className="text-slate-400 font-semibold block mb-0.5">Co-resident min age (optional):</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={coResidentMinAge}
                      onChange={(e) => setCoResidentMinAge(e.target.value.replace(/[^\d]/g, '').slice(0, 2))}
                      placeholder="e.g. 15 (OK) / 16 (AR) / 18"
                      className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
                    />
                    <span className="text-slate-500 text-[10px] block mt-0.5">Printed age wording only — blank = “suitable age &amp; discretion”</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold block mb-0.5">Actual recipient age:</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={recipientAge}
                      onChange={(e) => setRecipientAge(e.target.value.replace(/[^\d]/g, '').slice(0, 2))}
                      placeholder="Age of person who accepted"
                      className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold block mb-0.5">Follow-up mail date (if required):</span>
                    <input
                      type="text"
                      value={abodeFollowUpMailDate}
                      onChange={(e) => setAbodeFollowUpMailDate(e.target.value)}
                      placeholder="MM/DD/YYYY"
                      className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
                    />
                  </div>
                </>
              )}
              {serviceMethod === 'corporate' && (
                <div>
                  <span className="text-slate-400 font-semibold block mb-0.5">Recipient Title / Capacity:</span>
                  <input
                    type="text"
                    value={recipientTitle}
                    onChange={(e) => setRecipientTitle(e.target.value)}
                    placeholder="e.g. Registered Agent / Managing Member"
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
                  />
                </div>
              )}
            </div>
          )}

          {/* Signing venue — physical place of execution (never the filing court) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">Signing city</span>
              <input
                type="text"
                value={signingCity}
                onChange={(e) => {
                  const v = e.target.value;
                  setSigningCity(v);
                  setExecCity([v, signingState].filter(Boolean).join(', '));
                }}
                placeholder="e.g. Tulsa"
                className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">Signing state</span>
              <input
                type="text"
                value={signingState}
                onChange={(e) => {
                  const v = e.target.value;
                  setSigningState(v);
                  setExecCity([signingCity, v].filter(Boolean).join(', '));
                  if (!notaryState.trim()) setNotaryState(v);
                }}
                placeholder="e.g. Oklahoma"
                className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">Signing county</span>
              <input
                type="text"
                value={signingCounty}
                onChange={(e) => {
                  const v = e.target.value;
                  setSigningCounty(v);
                  if (!notaryCounty.trim()) setNotaryCounty(v);
                }}
                placeholder="e.g. Tulsa"
                className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
              />
              <span className="text-slate-500 text-[10px] block mt-0.5">Notary jurat defaults from these when blank</span>
            </div>
          </div>

          {(gatedIsDeclaration || neededFooterFields.length > 0) && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 border-t border-slate-800 text-xs">
              {neededFooterFields.includes('licenseExpirationDate') || effectiveCourtState === 'TX' ? (
                <div>
                  <span className="text-slate-400 font-semibold block mb-0.5">License expiration</span>
                  <input
                    type="text"
                    value={licenseExpirationDate}
                    onChange={(e) => setLicenseExpirationDate(e.target.value)}
                    placeholder="MM/DD/YYYY"
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
                  />
                </div>
              ) : null}
              {neededFooterFields.includes('registrationCounty') || effectiveCourtState === 'CA' ? (
                <div>
                  <span className="text-slate-400 font-semibold block mb-0.5">Registration county</span>
                  <input
                    type="text"
                    value={registrationCounty}
                    onChange={(e) => setRegistrationCounty(e.target.value)}
                    placeholder="Server registration county"
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
                  />
                </div>
              ) : null}
              {neededFooterFields.includes('serviceFee') ? (
                <div>
                  <span className="text-slate-400 font-semibold block mb-0.5">Service fee</span>
                  <input
                    type="text"
                    value={serviceFee}
                    onChange={(e) => setServiceFee(e.target.value)}
                    placeholder="e.g. $75.00"
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
                  />
                </div>
              ) : null}
              {gatedIsDeclaration && (effectiveCourtState === 'TX' || /\{\s*serverDob\s*\}/.test(courtRule.declarationFormText || '')) ? (
                <div>
                  <span className="text-slate-400 font-semibold block mb-0.5">Server date of birth (TX declaration)</span>
                  <input
                    type="text"
                    value={serverDob}
                    onChange={(e) => setServerDob(e.target.value)}
                    placeholder="MM/DD/YYYY"
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
                  />
                </div>
              ) : null}
            </div>
          )}

          {/* Server / agency credentials — screen only; print via signature block */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">Server age (competency)</span>
              <input
                type="text"
                inputMode="numeric"
                value={serverAge}
                onChange={(e) => setServerAge(e.target.value.replace(/[^\d]/g, '').slice(0, 2) || '18')}
                placeholder="18"
                className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500"
              />
              <span className="text-slate-500 text-[10px] block mt-0.5">Default 18 — override if jurisdiction needs another</span>
            </div>
            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">License # (optional)</span>
              <input type="text" value={serverLicense} onChange={(e) => setServerLicense(e.target.value)} placeholder="License / registration # if required" className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500" />
            </div>
            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">Agency / Company</span>
              <input type="text" value={serverCompany} onChange={(e) => setServerCompany(e.target.value)} placeholder="Agency name" className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500" />
            </div>
            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">Agency Address</span>
              <input type="text" value={serverAddress} onChange={(e) => setServerAddress(e.target.value)} placeholder="Street, City, State ZIP" className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500" />
            </div>
            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">Phone</span>
              <input type="text" value={serverPhone} onChange={(e) => setServerPhone(e.target.value)} placeholder="(xxx) xxx-xxxx" className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500" />
            </div>
            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">Email</span>
              <input type="text" value={serverEmail} onChange={(e) => setServerEmail(e.target.value)} placeholder="server@example.com" className="w-full bg-slate-800 border border-slate-700 text-white rounded px-2 py-1 outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* ServeTracker Exact Legal Document Sheet */}
      <div onInput={() => { if (suppressAutosave.current) { suppressAutosave.current = false; setAvailableDraft(null); } }} onChange={() => { if (suppressAutosave.current) { suppressAutosave.current = false; setAvailableDraft(null); } }} className="affidavit-wrapper max-w-4xl mx-auto px-2 sm:px-4 pb-12">
        <div ref={paperFitRef} className="w-full">
          <div
            className="affidavit-fit-scale"
            style={{
              width: '816px',
              transform: `scale(${paperScale})`,
              transformOrigin: 'top left',
              // reserve the scaled height so nothing below jumps around
              marginBottom: `${(1 - paperScale) * -816 * 1.29}px`,
            }}
          >
        <div
          className="affidavit-page bg-white text-black shadow-xl rounded-sm p-6 sm:p-8 border border-slate-300"
          style={{
            fontFamily: '"Times New Roman", Times, Georgia, serif',
            color: '#000',
            fontSize: '10pt',
            lineHeight: 1.18,
          }}
        >
          {/* Header Court Title */}
          <div className="text-center font-bold text-xs uppercase mb-2 tracking-wide">
            <input
              type="text"
              value={courtName}
              onChange={(e) => setCourtName(e.target.value)}
              placeholder="IN THE DISTRICT COURT OF ________ COUNTY, STATE OF ________"
              aria-label="Court Name"
              className="w-full text-center font-bold text-xs uppercase bg-transparent border-b border-gray-300 focus:border-black outline-none py-0.5 screen-only"
            />
            <div className="print-only hidden text-center font-bold text-xs uppercase">
              {courtName || 'IN THE DISTRICT COURT'}
            </div>
          </div>

          {/* ServeTracker Exact 2-Column Caption Box */}
          <table className="w-full border-collapse mb-2" style={{ tableLayout: 'fixed', borderTop: '2px solid #000', borderBottom: '2px solid #000' }}>
            <tbody>
              <tr>
                {/* Left (55%): Caption */}
                <td style={{ width: '55%', verticalAlign: 'top', padding: '4px 10px 4px 2px', borderRight: '2px solid #000' }}>
                  <div>
                    <input
                      type="text"
                      value={plaintiff}
                      onChange={(e) => setPlaintiff(e.target.value)}
                      placeholder="PETITIONER / PLAINTIFF NAME(S)"
                      aria-label="Plaintiff"
                      className="w-full font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none screen-only"
                    />
                    <div className="print-only hidden font-bold">
                      {plaintiff || 'PETITIONER / PLAINTIFF'}
                    </div>
                  </div>
                  <div className="italic text-[9.5pt] text-gray-800">Plaintiff/Petitioner,</div>
                  
                  <div className="font-bold my-1 text-center text-gray-700 text-xs">vs.</div>
                  
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
                      {defendant || recipientName || 'DEFENDANT / RESPONDENT'}
                    </div>
                  </div>
                  <div className="italic text-[9.5pt] text-gray-800">Defendant/Respondent.</div>
                </td>

                {/* Right (45%): Case # & Person Served */}
                <td style={{ width: '45%', verticalAlign: 'top', padding: '4px 2px 4px 10px' }}>
                  <div className="mb-2">
                    <span className="font-bold text-[10pt] uppercase">CASE NO. </span>
                    <input
                      type="text"
                      value={caseNumber}
                      onChange={(e) => setCaseNumber(e.target.value)}
                      placeholder="CJ-2026-01234"
                      aria-label="Case Number"
                      className="font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none w-36 screen-only"
                    />
                    <span className="print-only-inline hidden font-bold text-[10pt]">
                      {caseNumber || '____________________'}
                    </span>
                  </div>

                  <div>
                    <span className="font-bold text-[9pt] uppercase block">PERSON SERVED / ATTEMPTED:</span>
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="Target Recipient Full Name"
                      aria-label="Recipient Name"
                      className="w-full font-bold bg-transparent border-b border-gray-300 focus:border-black outline-none screen-only"
                    />
                    <div className="print-only hidden font-bold text-[10pt]">
                      {recipientName || '________________________________'}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Title */}
          <div className="text-center font-bold text-[11.5pt] uppercase underline my-2 tracking-wider">
            {gatedDocType}
          </div>

          {/* Per-state qualification paragraph — only when the state has one and it fills cleanly. */}
          {qualificationParagraph && (
            <p className="text-justify text-[9.5pt] mb-2 leading-snug page-break-avoid">
              {qualificationParagraph}
            </p>
          )}

          {/* Came-to-hand recital (FL / TX) — renders only when the state requires it. */}
          {cameToHandSentence && (
            <p className="text-justify text-[9.5pt] mb-2 leading-snug page-break-avoid">
              {cameToHandSentence}
            </p>
          )}

          {/* Competency — national (ServeManager-style), layout unchanged */}
          <p className="text-justify text-[10pt] mb-2 leading-snug">
            {gatedIsDeclaration ? (
              <>
                I, <strong><input
                  type="text"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                  placeholder="Server Full Name"
                  className="font-bold border-b border-black outline-none px-1 bg-transparent min-w-[140px] screen-only"
                /><span className="print-only-inline hidden font-bold">{serverName || '___________________________'}</span></strong>, declare under penalty of perjury under the laws of {courtRule.stateCode === 'FED' ? 'the United States of America' : `the State of ${courtRule.stateName}`} that I am over the age of {competencyAgePhrase} years and not a party to this action, and that within the boundaries of the state where service was effected, I was authorized by law to make service of the documents and informed said person of the contents herein{licenseClause}.
              </>
            ) : (
              <>
                I, <strong><input
                  type="text"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                  placeholder="Server Full Name"
                  className="font-bold border-b border-black outline-none px-1 bg-transparent min-w-[140px] screen-only"
                /><span className="print-only-inline hidden font-bold">{serverName || '___________________________'}</span></strong>, being duly sworn, depose and say: I am over the age of {competencyAgePhrase} years and not a party to this action, and that within the boundaries of the state where service was effected, I was authorized by law to make service of the documents and informed said person of the contents herein{licenseClause}.
              </>
            )}
          </p>

          {/* Documents Line */}
          <div className="mb-1 text-[9.5pt]">
            <strong className="uppercase font-bold text-[9pt] block">{documentsLabel}:</strong>
            <input
              type="text"
              value={documentsLine}
              onChange={(e) => setDocumentsLine(e.target.value)}
              placeholder="e.g. Summons, Petition, Notice of Hearing"
              className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none screen-only"
            />
            <div className="print-only hidden font-medium">
              {documentsLine || 'Legal process in this action'}
            </div>
          </div>

          {/* Service Address */}
          <div className="mb-1 text-[9.5pt]">
            <strong className="uppercase font-bold text-[9pt]">Service Address: </strong>
            <input
              type="text"
              value={serviceAddress}
              onChange={(e) => setServiceAddress(e.target.value)}
              placeholder="Street Address, Suite/Apt, City, State, ZIP"
              className="bg-transparent border-b border-gray-300 focus:border-black outline-none w-[75%] screen-only"
            />
            <span className="print-only-inline hidden font-medium">
              {serviceAddress || '__________________________________________________'}
            </span>
          </div>

          {/* Service Attempts (Physical) - Exact ServeTracker Table */}
          <div className="mb-2 page-break-avoid">
            <div className="flex items-center justify-between mb-1">
              <strong className="uppercase font-bold text-[9pt]">Service Attempts (Physical):</strong>
              <button
                type="button"
                onClick={addAttempt}
                className="no-print-affidavit text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded font-semibold cursor-pointer border border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
              >
                + Add Attempt
              </button>
            </div>

            <table className="w-full border-collapse border border-black text-[9.5pt]" style={{ tableLayout: 'fixed' }}>
              <thead>
                <tr className="bg-gray-100 uppercase text-[8pt] border-b border-black">
                  <th style={{ width: '28%', borderRight: '1px solid #333', padding: '2px 6px', textAlign: 'left' }}>Attempt</th>
                  <th style={{ width: '72%', padding: '2px 6px', textAlign: 'left' }}>Date &amp; Time</th>
                </tr>
              </thead>
              <tbody>
                {attempts.map((att, idx) => (
                  <tr key={att.id} className="border-b border-gray-300 last:border-b-0">
                    <td style={{ borderRight: '1px solid #333', padding: '2px 6px', fontWeight: 'bold' }}>
                      Attempt {idx + 1}
                    </td>
                    <td style={{ padding: '2px 6px' }}>
                      <div className="flex items-center gap-2 screen-only">
                        <input
                          type="text"
                          value={att.date}
                          onChange={(e) => updateAttempt(att.id, 'date', e.target.value)}
                          placeholder="MM/DD/YYYY"
                          className="w-24 bg-transparent border-b border-gray-200 focus:border-black outline-none text-xs"
                        />
                        <input
                          type="text"
                          value={att.time}
                          onChange={(e) => updateAttempt(att.id, 'time', e.target.value)}
                          placeholder="10:30 AM"
                          className="w-20 bg-transparent border-b border-gray-200 focus:border-black outline-none text-xs"
                        />
                        {attempts.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeAttempt(att.id)}
                            className="no-print-affidavit text-red-500 hover:text-red-700 ml-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
                            aria-label="Remove attempt"
                            title="Remove attempt"
                          >
                            <Trash2 className="w-3 h-3" aria-hidden="true" />
                          </button>
                        )}
                      </div>
                      <div className="print-only hidden">
                        {[att.date, att.time].filter(Boolean).join(' at ') || '—'}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Comments / Due Diligence Box - Exact ServeTracker Style */}
          <div className="mb-2 page-break-avoid">
            <strong className="uppercase font-bold text-[9pt] block mb-0.5">Comments:</strong>
            <textarea
              ref={commentsRef}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Due diligence notes, recipient description (age/sex/height/etc.), neighbor info…"
              rows={2}
              className="w-full bg-transparent border border-black p-1 text-[9.5pt] leading-tight resize-y screen-only"
            />
            <div className="print-only hidden border border-black p-1.5 text-[9.5pt] leading-snug min-h-[40px] whitespace-pre-wrap">
              {comments || 'No additional comments.'}
            </div>
          </div>

          {/* Statutory Execution Sentence Paragraph */}
          <div className="mb-3 text-[10pt] leading-snug page-break-avoid font-normal">
            {serviceMethod === 'custom' ? (
              <textarea
                value={customExecutionText}
                onChange={(e) => setCustomExecutionText(e.target.value)}
                placeholder="Type custom sworn execution statement..."
                rows={2}
                className="w-full bg-transparent border border-gray-300 focus:border-black p-1 text-[9.5pt] screen-only"
              />
            ) : null}
            <div className={serviceMethod === 'custom' ? 'print-only hidden' : ''}>
              <ExecutionText text={getExecutionSentence()} />
            </div>
          </div>

          {gatedIsDeclaration && declarationPenaltySentence && <p className="text-[9.5pt] leading-snug page-break-avoid mb-2">{declarationPenaltySentence}</p>}
          {instrumentNote && (
            <p className="text-[8.5pt] italic text-gray-600 leading-snug page-break-avoid mb-2">{instrumentNote}</p>
          )}

          {/* ServeTracker Exact Signature & Notary Block */}
          <div className="sig-block pt-1 page-break-avoid">
            {gatedIsDeclaration ? (
              /* ─── UNSWORN DECLARATION FOOTER ─── */
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td style={{ width: '48%', verticalAlign: 'top' }}>
                      <div style={{ borderBottom: '1px solid #000', width: '260px', height: '0px', marginTop: '4px' }}></div>
                      <div style={{ marginTop: '-6px', fontSize: '9.5pt', lineHeight: 1.3 }}>
                        <strong>{serverName || 'Process Server / Declarant'}</strong><br />
                        Private Process Server<br />
                        {serverLicense.trim() ? <>License No. {serverLicense}<br /></> : null}
                        {serverCompany.trim() ? <>{serverCompany}<br /></> : null}
                        {serverAddress.trim() ? <>{serverAddress}<br /></> : null}
                        {[serverPhone, serverEmail].filter(Boolean).join(' • ')}
                      </div>
                    </td>

                    <td style={{ width: '4%' }}></td>

                    <td style={{ width: '48%', verticalAlign: 'top', fontSize: '9.5pt' }}>
                      <div className="mb-1">
                        <strong>Executed on: </strong>
                        <input
                          type="text"
                          value={execDate}
                          onChange={(e) => setExecDate(e.target.value)}
                          placeholder="MM/DD/YYYY"
                          className="font-bold border-b border-black bg-transparent outline-none w-28 screen-only"
                        />
                        <span className="print-only-inline hidden font-bold">{execDate || '_________________'}</span>
                      </div>
                      <div className="mb-1">
                        <strong>At: </strong>
                        <input
                          type="text"
                          value={signingCity || execCity}
                          onChange={(e) => {
                            setSigningCity(e.target.value);
                            setExecCity(e.target.value);
                          }}
                          placeholder="City"
                          className="font-bold border-b border-black bg-transparent outline-none w-28 screen-only"
                        />
                        <span className="print-only-inline hidden font-bold">{signingCity || execCity || '_________________'}</span>
                        {', '}
                        <input
                          type="text"
                          value={signingState}
                          onChange={(e) => {
                            const v = e.target.value;
                            setSigningState(v);
                            if (!notaryState.trim()) setNotaryState(v);
                          }}
                          placeholder="State"
                          className="font-bold border-b border-black bg-transparent outline-none w-20 screen-only"
                        />
                        <span className="print-only-inline hidden font-bold">{signingState || '______'}</span>
                      </div>
                      {(neededFooterFields.includes('signingCounty') || !!signingCounty) && (
                        <div className="mb-1">
                          <strong>County: </strong>
                          <input
                            type="text"
                            value={signingCounty}
                            onChange={(e) => {
                              const v = e.target.value;
                              setSigningCounty(v);
                              if (!notaryCounty.trim()) setNotaryCounty(v);
                            }}
                            placeholder="County"
                            className="font-bold border-b border-black bg-transparent outline-none w-24 screen-only"
                          />
                          <span className="print-only-inline hidden font-bold">{signingCounty || '______'}</span>
                        </div>
                      )}
                      {courtRule.declarationFormText?.includes('{serverDob}') ? (
                        <div>
                          <strong>DOB: </strong>
                          <input
                            type="text"
                            value={serverDob}
                            onChange={(e) => setServerDob(e.target.value)}
                            placeholder="MM/DD/YYYY"
                            className="font-bold border-b border-black bg-transparent outline-none w-28 screen-only"
                          />
                          <span className="print-only-inline hidden font-bold">{serverDob || '_________________'}</span>
                        </div>
                      ) : null}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              /* ─── SWORN NOTARIZED AFFIDAVIT FOOTER ─── */
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    {/* Process Server LEFT */}
                    <td style={{ width: '48%', verticalAlign: 'top' }}>
                      <div style={{ borderBottom: '1px solid #000', width: '260px', height: '52px', marginTop: '4px' }}></div>
                      <div style={{ marginTop: '4px', fontSize: '9.5pt', lineHeight: 1.3 }}>
                        <strong>{serverName || 'Process Server / Affiant'}</strong><br />
                        Private Process Server<br />
                        {serverLicense.trim() ? <>License No. {serverLicense}<br /></> : null}
                        {serverCompany.trim() ? <>{serverCompany}<br /></> : null}
                        {serverAddress.trim() ? <>{serverAddress}<br /></> : null}
                        {[serverPhone, serverEmail].filter(Boolean).join(' • ')}
                      </div>
                    </td>

                    <td style={{ width: '4%' }}></td>

                    {/* Notary RIGHT — Wet-ink / stamp only */}
                    <td style={{ width: '48%', verticalAlign: 'top' }}>
                      <p style={{ fontSize: '9.5pt', margin: '0 0 4px 0', lineHeight: 1.2 }}>
                        STATE OF <input
                          type="text"
                          value={notaryState.toUpperCase()}
                          onChange={(e) => setNotaryState(e.target.value)}
                          placeholder="STATE"
                          className="font-bold border-b border-black bg-transparent outline-none w-24 screen-only"
                        /><span className="print-only-inline hidden font-bold">{notaryState.toUpperCase()}</span>&nbsp;&nbsp;)<br />
                        COUNTY OF <input
                          type="text"
                          value={notaryCounty.toUpperCase()}
                          onChange={(e) => setNotaryCounty(e.target.value)}
                          placeholder="COUNTY"
                          className="font-bold border-b border-black bg-transparent outline-none w-20 screen-only"
                        /><span className="print-only-inline hidden font-bold">{notaryCounty.toUpperCase()}</span>&nbsp;)&nbsp;ss.
                      </p>
                      <p style={{ fontSize: '9.5pt', margin: '0 0 4px 0', lineHeight: 1.2 }}>
                        Subscribed and sworn to before me {swornDayPhrase}.
                      </p>
                      <div style={{ borderBottom: '1px solid #000', width: '260px', height: '36px', marginTop: '4px' }}></div>
                      <div style={{ marginTop: '3px', fontSize: '9.5pt' }}>
                        Notary Public
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

        </div>
          </div>
        </div>
      </div>
    </>
  );
}
