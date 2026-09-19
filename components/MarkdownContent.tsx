'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function rewriteMdHref(href?: string): string | undefined {
  if (!href) return href;
  const match = href.match(/^(?:\.\.\/|\.\/)?([^/]+)\.md$/);
  if (match) return `/counties/${match[1]}`;
  if (href.endsWith('.md') && href.includes('/counties/')) {
    return href.replace(/\.md$/, '');
  }
  return href;
}

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:hover:text-blue-800 prose-table:border-collapse prose-th:bg-gray-50 prose-th:border prose-th:border-gray-300 prose-th:px-4 prose-th:py-2 prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href, children, ...props }) {
            return (
              <a href={rewriteMdHref(href) ?? href} {...props}>
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
