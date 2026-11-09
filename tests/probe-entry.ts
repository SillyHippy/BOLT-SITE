/**
 * Probe entry: bundles the component with a single copy of react/react-dom and
 * drives a real client render (prefill effects run) inside happy-dom, returning
 * the printed sheet's markup.
 *
 * The caller creates a FRESH happy-dom Window per probe with the probe query
 * already in the window URL (constructor `url`) and rebinds the globals —
 * this module never touches window.location. (Assigning location.href a second
 * time on the same window does not reliably navigate in happy-dom, which
 * silently rendered every probe after the first on a stale URL.)
 */
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import AffidavitOfService from '../components/AffidavitOfService';

export async function renderProbe(): Promise<string> {
  const host = document.getElementById('root') || document.body.appendChild(document.createElement('div'));
  if (!host.id) host.id = 'root';
  const root = createRoot(host);
  root.render(createElement(AffidavitOfService));
  for (let i = 0; i < 20; i++) {
    await new Promise((r) => setTimeout(r, 20));
  }
  const html = document.body.innerHTML;
  root.unmount();
  return html;
}
