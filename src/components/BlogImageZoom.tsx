'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './BlogImageZoom.module.css';

export interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  highResSrc?: string;
  alt: string;
  caption?: string;
}

export function ImageZoomModal({
  isOpen,
  onClose,
  src,
  highResSrc,
  alt,
  caption,
}: ImageZoomModalProps) {
  const [zoom, setZoom] = useState(1.0);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef = useRef({ x: 0, y: 0 });
  const fullImageSrc = highResSrc || src;

  // Reset zoom & pan when opened, lock body scroll
  useEffect(() => {
    if (isOpen) {
      setZoom(1.0);
      setPan({ x: 0, y: 0 });
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden';
      }
    } else {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen]);

  // Keyboard shortcuts (Escape, +, -, 0)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === '+' || e.key === '=') {
        setZoom((z) => Math.min(4.0, z + 0.3));
      } else if (e.key === '-') {
        setZoom((z) => Math.max(0.8, z - 0.3));
      } else if (e.key === '0') {
        setZoom(1.0);
        setPan({ x: 0, y: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const delta = e.deltaY * -0.0018;
    setZoom((prev) => Math.min(4.0, Math.max(0.8, prev + delta)));
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoom > 1.2) {
      setZoom(1.0);
      setPan({ x: 0, y: 0 });
    } else {
      setZoom(2.2);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    panStartRef.current = { ...pan };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPan({
      x: panStartRef.current.x + dx,
      y: panStartRef.current.y + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      panStartRef.current = { ...pan };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStartRef.current.x;
    const dy = e.touches[0].clientY - dragStartRef.current.y;
    setPan({
      x: panStartRef.current.x + dx,
      y: panStartRef.current.y + dy,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => setZoom((z) => Math.min(4.0, z + 0.4));
  const handleZoomOut = () => setZoom((z) => Math.max(0.8, z - 0.4));
  const handleResetZoom = () => {
    setZoom(1.0);
    setPan({ x: 0, y: 0 });
  };
  const handleToggleReadingMode = () => {
    if (zoom >= 2.0) {
      setZoom(1.0);
      setPan({ x: 0, y: 0 });
    } else {
      setZoom(2.2);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.modalBackdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Infographic Fullscreen Inspection"
    >
      {/* Modal Top Navigation Bar */}
      <div className={styles.modalHeader} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeaderLeft}>
          <span className={styles.modalBadge}>
            <span className={styles.badgePulseDot} />
            <span>Infographic Inspector</span>
          </span>
          <h4 className={styles.modalTitle} title={caption || alt}>
            {caption || alt}
          </h4>
        </div>

        <div className={styles.modalHeaderRight}>
          <a
            href={fullImageSrc}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.modalActionBtn}
            title="Open raw high-resolution image in new tab"
          >
            <span>View Raw</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close Inspection Modal (Esc)"
            title="Close (Esc)"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Interactive Zoom & Pan Viewport */}
      <div
        className={`${styles.modalViewport} ${isDragging ? styles.isDragging : ''}`}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => e.stopPropagation()}
        onDoubleClick={handleDoubleClick}
      >
        <div
          className={`${styles.modalImageWrapper} ${!isDragging ? styles.smoothTransition : ''}`}
          style={{
            transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
          }}
        >
          <img
            src={fullImageSrc}
            alt={alt}
            className={styles.modalImage}
            draggable={false}
          />
        </div>

        {/* Floating Glass Zoom Controls Bar */}
        <div className={styles.floatingControlsBar} onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className={styles.ctrlBtn}
            onClick={handleZoomOut}
            title="Zoom Out (-)"
            aria-label="Zoom Out"
          >
            −
          </button>

          <span className={styles.zoomBadge}>{Math.round(zoom * 100)}%</span>

          <button
            type="button"
            className={styles.ctrlBtn}
            onClick={handleZoomIn}
            title="Zoom In (+)"
            aria-label="Zoom In"
          >
            +
          </button>

          <span className={styles.ctrlDivider} />

          <button
            type="button"
            className={styles.modeToggleBtn}
            onClick={handleResetZoom}
            title="Reset to Fit View (0)"
          >
            Fit
          </button>

          <button
            type="button"
            className={`${styles.modeToggleBtn} ${zoom >= 2.0 ? styles.modeToggleBtnActive : ''}`}
            onClick={handleToggleReadingMode}
            title="Toggle 2.2x High-Detail Mode for small text"
          >
            <span>🔍 2.2x Read Mode</span>
          </button>
        </div>
      </div>

      {/* Modal Bottom Helper & Caption Bar */}
      <div className={styles.modalFooterHint} onClick={(e) => e.stopPropagation()}>
        <div className={styles.footerCaption}>
          <span className={styles.captionDot} aria-hidden="true" />
          <span>{caption || alt}</span>
        </div>

        <div className={styles.footerTips}>
          <span>💡 Double-click or scroll wheel to zoom</span>
          <span>•</span>
          <span>Drag to pan around text</span>
          <span>•</span>
          <span>Press <strong>Esc</strong> to close</span>
        </div>
      </div>
    </div>
  );
}

export interface BlogImageZoomProps {
  src: string;
  highResSrc?: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  unoptimized?: boolean;
}

export default function BlogImageZoom({
  src,
  highResSrc,
  alt,
  caption,
  width = 1200,
  height = 675,
  priority = false,
  unoptimized = false,
}: BlogImageZoomProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <figure className={styles.imageFigure}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={styles.triggerButton}
          aria-label={`Click to inspect infographic: ${caption || alt}`}
          title="Click to zoom and inspect in high resolution"
        >
          <div className={styles.imageContainer}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              priority={priority}
              unoptimized={unoptimized}
              sizes="(max-width: 768px) 100vw, 840px"
              className={styles.embeddedImage}
            />

            <div className={styles.hoverActionPill}>
              <svg
                className={styles.zoomIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              <span>Click to Zoom & Read</span>
            </div>
          </div>
        </button>

        {caption && (
          <figcaption className={styles.imageCaption}>
            <div className={styles.captionLeft}>
              <span className={styles.captionDot} aria-hidden="true" />
              <span>{caption}</span>
            </div>
            <span className={styles.captionHint}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>Click image to expand</span>
            </span>
          </figcaption>
        )}
      </figure>

      <ImageZoomModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        src={src}
        highResSrc={highResSrc}
        alt={alt}
        caption={caption}
      />
    </>
  );
}
