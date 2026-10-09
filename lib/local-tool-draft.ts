export interface ToolDraft<T> { savedAt: number; value: T }
const LIMIT = 48000;

export function readToolDraft<T>(key: string): ToolDraft<T> | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw || raw.length > LIMIT) return null;
    const candidate = JSON.parse(raw) as ToolDraft<T>;
    return candidate && typeof candidate.savedAt === 'number' && candidate.value && typeof candidate.value === 'object' ? candidate : null;
  } catch { return null; }
}

export function saveToolDraft<T>(key: string, value: T): boolean {
  try {
    const data = JSON.stringify({ savedAt: Date.now(), value });
    if (data.length > LIMIT) return false;
    localStorage.setItem(key, data);
    return true;
  } catch { return false; }
}

export function removeToolDraft(key: string): void {
  try { localStorage.removeItem(key); } catch { /* storage disabled */ }
}
