'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import styles from './AutoZoomImage.module.css';

export interface AutoZoomImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  title?: string;
  category?: string;
  description?: string;
  aspectRatio?: string; // e.g. "16 / 9" or "4 / 3"
  zoomScale?: number; // default: 2.2
  initialAutoScan?: boolean;
  className?: string;
}

// Auto-scan key KPI checkpoints for hands-free scanning
const SCAN_STOPS = [
  { x: 0.25, y: 0.25, label: 'Key Metrics' },
  { x: 0.5, y: 0.45, label: 'Trend Graph' },
  { x: 0.75, y: 0.7, label: 'Data Table' },
  { x: 0.5, y: 0.5, label: 'Full View' },
];

export default function AutoZoomImage({
  src,
  webpSrc,
  alt,
  title,
  category,
  description,
  aspectRatio = '16 / 9',
  zoomScale = 2.2,
  initialAutoScan = false,
  className = '',
}: AutoZoomImageProps) {
  // Container & state
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isScanning, setIsScanning] = useState(initialAutoScan);
  const [scanIndex, setScanIndex] = useState(0);

  // Normalized cursor coordinates (0 to 1)
  const [coords, setCoords] = useState({ x: 0.5, y: 0.5 });
  const rafId = useRef<number | null>(null);

  // Modal deep-zoom state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalZoom, setModalZoom] = useState(1.5);
  const [modalPan, setModalPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // 1. Mouse move handler for silky 60fps tracking
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isScanning) return; // User manual move takes pause or overrides
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const rawX = (e.clientX - rect.left) / rect.width;
      const rawY = (e.clientY - rect.top) / rect.height;

      const clampedX = Math.max(0.05, Math.min(0.95, rawX));
      const clampedY = Math.max(0.05, Math.min(0.95, rawY));

      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        setCoords({ x: clampedX, y: clampedY });
      });
    },
    [isScanning]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (!isScanning) {
      setCoords({ x: 0.5, y: 0.5 });
    }
  }, [isScanning]);

  // 2. Autonomous Auto-Scan Tour Effect (cycles through key metrics)
  useEffect(() => {
    if (!isScanning) return;

    const timer = setInterval(() => {
      setScanIndex((prev) => {
        const next = (prev + 1) % SCAN_STOPS.length;
        setCoords({ x: SCAN_STOPS[next].x, y: SCAN_STOPS[next].y });
        return next;
      });
    }, 2400);

    return () => clearInterval(timer);
  }, [isScanning]);

  // Calculate image transform
  const currentScale = isScanning
    ? scanIndex === 3
      ? 1.05
      : zoomScale
    : isHovered
    ? zoomScale
    : 1;

  // Translate in percentage to keep the cursor/focal point pinned
  const transX = (0.5 - coords.x) * (currentScale - 1) * 100;
  const transY = (0.5 - coords.y) * (currentScale - 1) * 100;

  // 3. Deep-zoom Lightbox Wheel & Drag Handlers
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.0015;
    setModalZoom((prev) => Math.min(3.5, Math.max(1.0, prev + delta)));
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleModalMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      setModalPan((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
      if (e.key === '+' || e.key === '=') setModalZoom((z) => Math.min(3.5, z + 0.3));
      if (e.key === '-') setModalZoom((z) => Math.max(1.0, z - 0.3));
      if (e.key === '0') {
        setModalZoom(1.0);
        setModalPan({ x: 0, y: 0 });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Open / Close modal
  const openModal = () => {
    setIsModalOpen(true);
    setModalZoom(1.8);
    setModalPan({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const imageSrcToUse = webpSrc || src;

  return (
    <>
      <div
        ref={containerRef}
        className={`${styles.container} ${isHovered ? styles.isHovered : ''} ${
          isScanning ? styles.isScanning : ''
        } ${className}`}
        style={{ aspectRatio }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={openModal}
        role="button"
        tabIndex={0}
        aria-label={`Inspect ${title || alt} with zoom`}
        onKeyDown={(e) => {
          if (e.key === 'Enter') openModal();
        }}
      >
        <div className={styles.aspectWrapper}>
          {/* Main Zoomed Image */}
          <Image
            src={imageSrcToUse}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={92}
            className={styles.zoomableImage}
            style={{
              transform: `translate3d(${transX}%, ${transY}%, 0) scale(${currentScale})`,
            }}
          />

          {/* Radar Scanning Line during Auto-Scan */}
          {isScanning && <div className={styles.scanBeam} />}

          {/* Interactive HUD Reticle when hovered */}
          {isHovered && !isScanning && (
            <div className={styles.crosshairOverlay}>
              <div
                className={styles.reticle}
                style={{
                  left: `${coords.x * 100}%`,
                  top: `${coords.y * 100}%`,
                }}
              />
            </div>
          )}
        </div>

        {/* Top HUD Controls */}
        <div className={styles.hudTopBar}>
          {category ? (
            <span className={styles.badgeCategory}>
              <span className={styles.badgeCategoryDot} />
              {category.replace(/-/g, ' ')}
            </span>
          ) : (
            <span />
          )}

          <div className={styles.hudRightGroup} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={`${styles.hudBtn} ${isScanning ? styles.hudBtnActive : ''}`}
              onClick={() => setIsScanning((s) => !s)}
              title={isScanning ? 'Stop Auto-Scan' : 'Auto-Scan Numbers & Graphs'}
              aria-label="Toggle auto scan numbers"
            >
              <span>{isScanning ? '⏸ Scanning' : '⚡ Auto-Scan'}</span>
            </button>

            <button
              type="button"
              className={styles.hudBtn}
              onClick={openModal}
              title="Inspect Fullscreen (Deep Zoom)"
              aria-label="Inspect Fullscreen"
            >
              <span>🔍 Deep Zoom</span>
            </button>
          </div>
        </div>

        {/* Bottom HUD Hint Bar */}
        <div className={styles.bottomHintBar}>
          <span className={styles.hintPill}>
            {isScanning ? (
              <span>Focus: <strong>{SCAN_STOPS[scanIndex].label}</strong></span>
            ) : isHovered ? (
              <span>Gliding at <strong>{zoomScale}x Magnification</strong></span>
            ) : (
              <span>Hover to <strong>Auto-Zoom Numbers</strong></span>
            )}
          </span>
          <span className={styles.hintPill}>Click to Expand</span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
         FULLSCREEN DEEP-ZOOM LIGHTBOX MODAL
      ═══════════════════════════════════════════════════════════ */}
      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          {/* Header */}
          <div className={styles.modalHeader} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalTitleWrap}>
              {category && (
                <span className={styles.modalCategoryBadge}>
                  ✓ Verified Proof • {category.replace(/-/g, ' ')}
                </span>
              )}
              <h3 className={styles.modalTitle}>{title || alt}</h3>
            </div>

            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={closeModal}
              aria-label="Close Inspection Modal"
            >
              ✕
            </button>
          </div>

          {/* Interactive Zoom & Pan Viewport */}
          <div
            className={`${styles.modalViewport} ${isDragging ? styles.isDragging : ''}`}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleModalMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`${styles.modalImageWrapper} ${!isDragging ? styles.smoothTransition : ''}`}
              style={{
                transform: `translate3d(${modalPan.x}px, ${modalPan.y}px, 0) scale(${modalZoom})`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageSrcToUse}
                alt={alt}
                className={styles.modalImg}
                draggable={false}
              />
            </div>

            {/* Minimap locator */}
            <div className={styles.minimap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageSrcToUse} alt="Minimap preview" className={styles.minimapImg} />
              <div
                className={styles.minimapViewportBox}
                style={{
                  width: `${Math.max(20, 100 / modalZoom)}%`,
                  height: `${Math.max(20, 100 / modalZoom)}%`,
                  left: `${Math.max(0, Math.min(100 - 100 / modalZoom, 50 - (modalPan.x / 500) * 20))}%`,
                  top: `${Math.max(0, Math.min(100 - 100 / modalZoom, 50 - (modalPan.y / 500) * 20))}%`,
                }}
              />
            </div>

            {/* Floating Deep-Zoom Controls Bar */}
            <div className={styles.modalControlsBar} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className={styles.ctrlBtn}
                onClick={() => setModalZoom((z) => Math.max(1.0, z - 0.3))}
                title="Zoom Out (-)"
                aria-label="Zoom Out"
              >
                −
              </button>

              <span className={styles.zoomValueBadge}>{Math.round(modalZoom * 100)}%</span>

              <button
                type="button"
                className={styles.ctrlBtn}
                onClick={() => setModalZoom((z) => Math.min(3.5, z + 0.3))}
                title="Zoom In (+)"
                aria-label="Zoom In"
              >
                +
              </button>

              <span className={styles.ctrlDivider} />

              <button
                type="button"
                className={styles.ctrlBtn}
                onClick={() => {
                  setModalZoom(1.0);
                  setModalPan({ x: 0, y: 0 });
                }}
                title="Reset View (0)"
                aria-label="Reset View"
              >
                1x
              </button>

              <button
                type="button"
                className={`${styles.scanToggleBtn} ${isScanning ? styles.scanToggleBtnActive : ''}`}
                onClick={() => setIsScanning((s) => !s)}
                title="Toggle Auto Scan"
              >
                <span>⚡ {isScanning ? 'Scanning...' : 'Auto-Scan'}</span>
              </button>
            </div>
          </div>

          {/* Footer Description */}
          {description && (
            <div className={styles.modalFooterDescription} onClick={(e) => e.stopPropagation()}>
              <strong>Metric Highlights:</strong> {description}
            </div>
          )}
        </div>
      )}
    </>
  );
}
