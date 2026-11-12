'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { consumePendingThankYouLead, pushToDataLayer } from '@/lib/gtm';

/**
 * Reports client-side Next.js App Router transitions to GTM after initial load.
 * Must be rendered inside a <Suspense> boundary because it reads searchParams.
 */
export function GtmRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousUrlRef = useRef<string | null>(null);

  useEffect(() => {
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    // Skip the first mount because GTM's initial gtm.js load already records it.
    if (previousUrlRef.current === null) {
      previousUrlRef.current = url;
      return;
    }

    if (previousUrlRef.current === url) return;
    previousUrlRef.current = url;

    const frameId = window.requestAnimationFrame(() => {
      pushToDataLayer({
        event: 'page_view',
        page_path: url,
        page_location: window.location.href,
        page_title: document.title,
      });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, searchParams]);

  return null;
}

/** Emits the stored lead conversion event once when /thank-you mounts. */
export function ThankYouConversionTracker() {
  useEffect(() => {
    consumePendingThankYouLead();
  }, []);

  return null;
}

