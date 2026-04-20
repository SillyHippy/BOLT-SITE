interface Citation {
  title: string;
  url?: string;
  description?: string;
}

interface CitationBannerProps {
  citations: Citation[];
}

export default function CitationBanner({ citations }: CitationBannerProps) {
  if (!citations || citations.length === 0) return null;

  return (
    <div className="citation-box" role="complementary" aria-label="Sources and citations">
      <p className="cite-label mb-2">Sources & Citations</p>
      <ul className="space-y-1.5">
        {citations.map((cite, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-indigo-400 font-mono text-xs mt-0.5 flex-shrink-0">[{i + 1}]</span>
            <span className="text-sm">
              {cite.url ? (
                <a
                  href={cite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-indigo-700 transition-colors"
                >
                  {cite.title}
                </a>
              ) : (
                <span className="text-text-dark">{cite.title}</span>
              )}
              {cite.description && (
                <span className="text-text-muted"> — {cite.description}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
