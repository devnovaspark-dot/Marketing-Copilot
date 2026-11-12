'use client';

export const PENDING_LEAD_STORAGE_KEY = 'nova_pending_lead_event';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Push an event or data object to GTM's global dataLayer. */
export function pushToDataLayer(payload: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/** Flush any pending lead conversion event once after landing on /thank-you. */
export function consumePendingThankYouLead(): void {
  if (typeof window === 'undefined') return;

  try {
    const raw = window.sessionStorage.getItem(PENDING_LEAD_STORAGE_KEY);
    if (!raw) return;

    window.sessionStorage.removeItem(PENDING_LEAD_STORAGE_KEY);
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    pushToDataLayer({
      ...parsed,
      page_path: window.location.pathname,
    });
  } catch {
    // Ignore storage/parse errors cleanly.
  }
}
