'use client';

import { useEffect, useRef, useState } from 'react';
import { PENDING_LEAD_STORAGE_KEY, pushToDataLayer } from '@/lib/gtm';
import styles from './HubSpotLeadForm.module.css';

export const HUBSPOT_PORTAL_ID = '247976175';
export const HUBSPOT_FORM_ID = '071716a3-abc3-40d1-9c33-9ebcd623d73d';
export const HUBSPOT_REGION = 'na2';
export const HUBSPOT_EMBED_SCRIPT_SRC = `https://js-${HUBSPOT_REGION}.hsforms.net/forms/embed/${HUBSPOT_PORTAL_ID}.js`;

interface HubSpotLeadFormProps {
  id?: string;
  portalId?: string;
  formId?: string;
  region?: string;
  formLocation?: string;
  variant?: 'embedded' | 'card';
  className?: string;
}

/**
 * Reusable HubSpot v4 embedded form wrapper safe for Next.js client-side navigation.
 * Inserts the .hs-form-frame element dynamically into the viewport container so it
 * sits at MutationObserver depth 0 (working around HubSpot's depth-5 observer limit
 * during SPA route transitions), and forwards submission events to GTM.
 */
export default function HubSpotLeadForm({
  id,
  portalId = HUBSPOT_PORTAL_ID,
  formId = HUBSPOT_FORM_ID,
  region = HUBSPOT_REGION,
  formLocation,
  variant = 'embedded',
  className,
}: HubSpotLeadFormProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const lastSubmitTimeRef = useRef<number>(0);

  useEffect(() => {
    const viewportEl = viewportRef.current;
    if (!viewportEl) return;

    // Create and append .hs-form-frame dynamically so HubSpot's MutationObserver
    // sees it directly at depth 0 even after Next.js SPA route transitions.
    viewportEl.innerHTML = '';
    const frameEl = document.createElement('div');
    frameEl.className = `hs-form-frame ${styles.frame}`;
    frameEl.setAttribute('data-region', region);
    frameEl.setAttribute('data-form-id', formId);
    frameEl.setAttribute('data-portal-id', portalId);

    const hideBranding = () => {
      const brandingEls = frameEl.querySelectorAll('a[href*="hubspot.com"], [class*="branding"], [class*="hs-form-footer"], [data-hs-branding], [class*="viral"]');
      brandingEls.forEach(el => {
        (el as HTMLElement).style.setProperty('display', 'none', 'important');
      });
    };

    const observer = new MutationObserver(() => {
      if (frameEl.childElementCount > 0) {
        setIsLoaded(true);
        hideBranding();
      }
    });

    observer.observe(frameEl, { childList: true, subtree: true });
    viewportEl.appendChild(frameEl);

    // Ensure HubSpot's embed script is present if it hasn't been injected yet.
    if (!document.querySelector(`script[src*="${portalId}.js"]`)) {
      const script = document.createElement('script');
      script.src = HUBSPOT_EMBED_SCRIPT_SRC;
      script.defer = true;
      script.async = true;
      document.body.appendChild(script);
    }

    /**
     * Unified conversion dispatcher with debounce deduplication to prevent double-firing
     * if both HubSpot v4 CustomEvent and window postMessage dispatch for the same submission.
     */
    const fireLeadConversion = (source: string, extraData?: Record<string, unknown>) => {
      const now = Date.now();
      if (now - lastSubmitTimeRef.current < 2500) return;
      lastSubmitTimeRef.current = now;

      const locationPath = formLocation || (typeof window !== 'undefined' ? window.location.pathname : '');
      const leadPayload = {
        event: 'generate_lead',
        event_category: 'form',
        event_action: 'submit',
        event_label: locationPath,
        form_name: 'hubspot_lead_form',
        form_id: formId,
        form_location: locationPath,
        lead_type: 'hubspot_form',
        submission_source: source,
        ...extraData,
      };

      try {
        window.sessionStorage.setItem(
          PENDING_LEAD_STORAGE_KEY,
          JSON.stringify(leadPayload)
        );
      } catch {
        // Ignore storage errors in restricted browsing modes.
      }

      pushToDataLayer(leadPayload);
    };

    // 1. HubSpot Forms v4 DOM CustomEvent listener (dispatched on document/container)
    const handleCustomEventSuccess = (event: Event) => {
      const customEv = event as CustomEvent;
      const detail = (customEv.detail || {}) as Record<string, unknown>;
      // If a formId is specified in event detail, verify it matches or accept generic
      if (detail.formId && detail.formId !== formId) return;
      fireLeadConversion('hubspot_v4_customevent', detail);
    };

    document.addEventListener('hs-form-event:on-submission:success', handleCustomEventSuccess);
    document.addEventListener('hs-form-event:on-submission', handleCustomEventSuccess);
    frameEl.addEventListener('hs-form-event:on-submission:success', handleCustomEventSuccess);

    // 2. Window postMessage listener (supports both JSON objects & serialized strings for v2/v3/v4 fallbacks)
    const handleHubSpotMessage = (event: MessageEvent) => {
      let data = event.data;
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch {
          // Plain non-JSON string, ignore
        }
      }
      if (!data || typeof data !== 'object') return;
      const payload = data as Record<string, unknown>;

      const isHubSpotSubmit =
        (payload.type === 'hsFormCallback' &&
          (payload.eventName === 'onFormSubmit' || payload.eventName === 'onFormSubmitted')) ||
        payload.type === 'hs-form-submitted' ||
        payload.type === 'hs-form-event:on-submission:success' ||
        payload.type === 'SEND_FORM_SUBMISSION_SUCCESS' ||
        payload.type === 'CTA_FORM_SUBMITTED' ||
        (typeof payload.type === 'string' && payload.type.includes('SUBMISSION_SUCCESS'));

      if (!isHubSpotSubmit) return;
      fireLeadConversion('hubspot_postmessage', payload);
    };

    window.addEventListener('message', handleHubSpotMessage);

    return () => {
      observer.disconnect();
      document.removeEventListener('hs-form-event:on-submission:success', handleCustomEventSuccess);
      document.removeEventListener('hs-form-event:on-submission', handleCustomEventSuccess);
      window.removeEventListener('message', handleHubSpotMessage);
      frameEl.remove();
    };
  }, [formId, formLocation, portalId, region]);

  const variantClass = variant === 'card' ? styles.card : styles.embedded;
  const loadedClass = isLoaded ? styles.wrapperLoaded : '';

  return (
    <div id={id} className={`${styles.wrapper} ${loadedClass} ${variantClass} ${className || ''}`}>
      {!isLoaded && (
        <div className={styles.loadingPlaceholder} aria-hidden="true">
          <span className={styles.spinner} />
          <span>Loading consultation form...</span>
        </div>
      )}
      <div ref={viewportRef} className={styles.cropViewport} />
    </div>
  );
}
