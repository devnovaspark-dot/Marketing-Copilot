'use client';

export interface LeadSubmissionDetails {
  formName: string;
  formLocation?: string;
  leadType?: string;
  service?: string;
  budget?: string;
  redirectToThankYou?: boolean;
}

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

/**
 * Perform a full browser navigation to /thank-you so GTM's native
 * Container Loaded (gtm.js) Page View trigger fires reliably.
 */
export function navigateToThankYou(): void {
  if (typeof window === 'undefined') return;
  // Intentional hard navigation: Next.js SPA transitions skip GTM's native Page View (gtm.js) trigger.
  // eslint-disable-next-line @next/next/no-location-assign-relative-destination
  window.location.assign('/thank-you');
}

/**
 * Record a successful lead form submission for GTM.
 * When redirecting to /thank-you, stores the payload across the full page load
 * so GTM fires both the /thank-you page view and the lead event reliably.
 */
export function trackLeadSubmission({
  formName,
  formLocation,
  leadType = 'lead',
  service,
  budget,
  redirectToThankYou = false,
}: LeadSubmissionDetails): void {
  if (typeof window === 'undefined') return;

  const eventPayload: Record<string, unknown> = {
    event: 'generate_lead',
    form_name: formName,
    form_location: formLocation || window.location.pathname,
    lead_type: leadType,
    ...(service ? { service } : {}),
    ...(budget ? { budget } : {}),
  };

  if (redirectToThankYou) {
    try {
      window.sessionStorage.setItem(
        PENDING_LEAD_STORAGE_KEY,
        JSON.stringify(eventPayload)
      );
    } catch {
      // Restricted storage modes still get the /thank-you page view hit.
    }
    navigateToThankYou();
    return;
  }

  pushToDataLayer(eventPayload);
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
