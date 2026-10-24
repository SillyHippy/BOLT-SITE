import React from 'react';

/** User prose is text, not HTML. Preserve intentional line breaks, never tags. */
export function ExecutionText({ text }: { text: string }) {
  return <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>;
}
