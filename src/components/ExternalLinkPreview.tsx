'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './ExternalLinkPreview.module.css';
import type { LinkPreviewData } from '@/lib/linkPreviewParser';

// Client-side in-memory cache to prevent redundant network requests
const previewCache = new Map<string, LinkPreviewData>();

export interface ExternalLinkPreviewProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export default function ExternalLinkPreview({
  href,
  children,
  className,
  target = '_blank',
  rel = 'noopener noreferrer',
}: ExternalLinkPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<LinkPreviewData | null>(null);
  const [coords, setCoords] = useState<{ top: number; left: number; arrowLeft: number; placement: 'top' | 'bottom' }>({
    top: 0,
    left: 0,
    arrowLeft: 20,
    placement: 'top',
  });

  const linkRef = useRef<HTMLAnchorElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const enterTimerRef = useRef<NodeJS.Timeout | null>(null);
  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Compute clean initial domain
  const cleanDomain = React.useMemo(() => {
    try {
      const u = new URL(href, 'https://marketingcopilot.in');
      return u.hostname.replace(/^www\./, '');
    } catch {
      return href;
    }
  }, [href]);

  const defaultFavicon = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(cleanDomain)}&sz=64`;

  // Calculate coordinates relative to viewport
  const updatePosition = useCallback(() => {
    if (!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    const cardWidth = Math.min(330, window.innerWidth - 32);
    const cardHeight = 145; // estimated card height

    let left = rect.left + rect.width / 2 - cardWidth / 2;
    if (left < 16) left = 16;
    if (left + cardWidth > window.innerWidth - 16) {
      left = window.innerWidth - cardWidth - 16;
    }

    const arrowLeft = Math.max(16, Math.min(rect.left + rect.width / 2 - left, cardWidth - 16));

    let placement: 'top' | 'bottom' = 'top';
    let top = rect.top - cardHeight - 10;

    if (top < 85) {
      // If too close to viewport top, flip below the link
      placement = 'bottom';
      top = rect.bottom + 10;
    }

    setCoords({ top, left, arrowLeft, placement });
  }, []);

  // Fetch preview metadata
  const fetchPreview = useCallback(async () => {
    if (previewCache.has(href)) {
      setData(previewCache.get(href)!);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/link-preview?url=${encodeURIComponent(href)}`);
      if (res.ok) {
        const json: LinkPreviewData = await res.json();
        previewCache.set(href, json);
        setData(json);
      } else {
        // Fallback domain data
        const fallback: LinkPreviewData = {
          url: href,
          domain: cleanDomain,
          title: null,
          description: null,
          image: null,
          siteName: cleanDomain,
          favicon: defaultFavicon,
        };
        previewCache.set(href, fallback);
        setData(fallback);
      }
    } catch {
      const fallback: LinkPreviewData = {
        url: href,
        domain: cleanDomain,
        title: null,
        description: null,
        image: null,
        siteName: cleanDomain,
        favicon: defaultFavicon,
      };
      setData(fallback);
    } finally {
      setLoading(false);
    }
  }, [href, cleanDomain, defaultFavicon]);

  const handleMouseEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }

    enterTimerRef.current = setTimeout(() => {
      updatePosition();
      setIsOpen(true);
      fetchPreview();
    }, 180);
  };

  const handleMouseLeave = () => {
    if (enterTimerRef.current) {
      clearTimeout(enterTimerRef.current);
      enterTimerRef.current = null;
    }

    leaveTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 220);
  };

  const handlePopoverMouseEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  const handlePopoverMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  // Close on Esc key or scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleScroll = () => {
      updatePosition();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, updatePosition]);

  const previewTitle = data?.title || cleanDomain;
  const previewDescription = data?.description;
  const previewImage = data?.image;
  const faviconUrl = data?.favicon || defaultFavicon;

  return (
    <>
      <a
        ref={linkRef}
        href={href}
        target={target}
        rel={rel}
        className={`${styles.linkTrigger} ${className || ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        title={`Visit ${cleanDomain} (Opens in new tab)`}
      >
        <span>{children}</span>
        <span className={styles.externalArrow} aria-hidden="true">
          ↗
        </span>
      </a>

      {isOpen && mounted && typeof document !== 'undefined' && createPortal(
        <div
          ref={popoverRef}
          role="tooltip"
          aria-label={`Preview of ${cleanDomain}`}
          className={styles.popoverCard}
          style={{
            top: `${coords.top}px`,
            left: `${coords.left}px`,
          }}
          onMouseEnter={handlePopoverMouseEnter}
          onMouseLeave={handlePopoverMouseLeave}
          onClick={() => {
            window.open(href, '_blank', 'noopener,noreferrer');
          }}
        >
          {/* Pointer Arrow */}
          <span
            className={`${styles.popoverArrow} ${
              coords.placement === 'top' ? styles.arrowTop : styles.arrowBottom
            }`}
            style={{ left: `${coords.arrowLeft}px` }}
            aria-hidden="true"
          />

          {/* Header Row: Favicon + Domain Name + Verified/Secure Pill */}
          <div className={styles.cardHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.faviconWrap}>
                <img
                  src={faviconUrl}
                  alt={`${cleanDomain} icon`}
                  className={styles.faviconImg}
                  onError={(e) => {
                    // Fallback to transparent or blank if favicon fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <span className={styles.domainName}>{cleanDomain}</span>
            </div>

            <span className={styles.secureBadge}>
              <svg className={styles.secureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>External</span>
            </span>
          </div>

          {/* Body: Title + Description Snippet + Thumbnail */}
          <div className={styles.cardBody}>
            <div className={styles.textContent}>
              {loading && !data ? (
                <>
                  <div className={styles.skeletonTitle} />
                  <div className={styles.skeletonDesc} />
                </>
              ) : (
                <>
                  <h6 className={styles.pageTitle}>{previewTitle}</h6>
                  {previewDescription && (
                    <p className={styles.pageDescription}>{previewDescription}</p>
                  )}
                </>
              )}
            </div>

            {previewImage && !loading && (
              <div className={styles.thumbnailWrap}>
                <img
                  src={previewImage}
                  alt={previewTitle}
                  className={styles.thumbnailImg}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>

          {/* Footer: Truncated URL + Open Link Hint */}
          <div className={styles.cardFooter}>
            <span className={styles.urlTruncated} title={href}>
              {href.replace(/^https?:\/\//, '')}
            </span>
            <span className={styles.openHint}>
              <span>Open</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </span>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
