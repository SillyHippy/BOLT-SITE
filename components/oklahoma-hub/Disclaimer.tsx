export default function Disclaimer({ pageTitle }: { pageTitle?: string }) {
  return (
    <div className="disclaimer-box" role="note" aria-label="Legal disclaimer">
      <p className="font-semibold text-navy mb-1">Disclaimer</p>
      <p>
        The information{pageTitle ? ` on "${pageTitle}"` : ''} is provided for general informational
        purposes only and does not constitute legal advice. Laws change frequently, and the information
        presented may not reflect the most current legal developments. Just Legal Solutions is not a
        law firm, and no attorney-client relationship is created by your use of this website or any
        tools provided herein. For advice regarding your specific situation, please consult a licensed
        Oklahoma attorney. Process serving requirements may vary by county and court — always verify
        current rules with the appropriate court clerk.
      </p>
      <p className="mt-2 text-xs text-text-muted">
        Sources cited include Oklahoma Statutes, Oklahoma Rules of Civil Procedure, and court
        administrative materials. Citations are accurate to the best of our knowledge as of the
        publication date. Always verify statutes at{' '}
        <a href="https://www.oklegislature.gov" target="_blank" rel="noopener noreferrer" className="underline">
          oklegislature.gov
        </a>{' '}
        or court rules at{' '}
        <a href="https://www.oscn.net" target="_blank" rel="noopener noreferrer" className="underline">
          oscn.net
        </a>
        .
      </p>
    </div>
  );
}
