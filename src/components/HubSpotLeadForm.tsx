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

    const observer = new MutationObserver(() => {
      if (frameEl.childElementCount > 0) {
        setIsLoaded(true);
        observer.disconnect();
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

    const handleHubSpotMessage = (event: MessageEvent) => {
      if (!event.data || typeof event.data !== 'object') return;
      const payload = event.data as Record<string, unknown>;
      const isHubSpotSubmit =
        (payload.type === 'hsFormCallback' &&
          (payload.eventName === 'onFormSubmit' || payload.eventName === 'onFormSubmitted')) ||
        payload.type === 'hs-form-submitted';

      if (!isHubSpotSubmit) return;

      const leadPayload = {
        event: 'generate_lead',
        form_name: 'hubspot_lead_form',
        form_id: formId,
        form_location: formLocation || window.location.pathname,
        lead_type: 'hubspot_form',
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

    window.addEventListener('message', handleHubSpotMessage);

    return () => {
      observer.disconnect();
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
