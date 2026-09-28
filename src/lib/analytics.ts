type EventName = 'project_view' | 'contact_click' | 'puzzle_start' | 'puzzle_complete' | 'locale_change' | string;

export function track(name: EventName, props: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined' || navigator.doNotTrack === '1') return;
  const plausible = (window as Window & { plausible?: (event: string, options?: unknown) => void }).plausible;
  plausible?.(name, { props });
  window.dispatchEvent(new CustomEvent('portfolio:analytics', { detail: { name, props } }));
}
