/** Browser-local draft storage. Never sends or syncs case data to the site. */
export interface LocalDraft<T> { savedAt: number; value: T }
export const DRAFT_LIMIT = 48_000;

export function readDraft<T>(key: string): LocalDraft<T> | null {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw || raw.length > DRAFT_LIMIT) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    const draft = parsed as Partial<LocalDraft<T>>;
    return typeof draft.savedAt === 'number' && draft.value && typeof draft.value === 'object'
      ? draft as LocalDraft<T> : null;
  } catch { return null; }
}

export function writeDraft<T>(key: string, value: T): boolean {
  try {
    const payload = JSON.stringify({ savedAt: Date.now(), value });
    if (payload.length > DRAFT_LIMIT) return false;
    window.localStorage.setItem(key, payload);
    return true;
  } catch { return false; }
}

export function clearDraft(key: string): void {
  try { window.localStorage.removeItem(key); } catch { /* disabled storage */ }
}
