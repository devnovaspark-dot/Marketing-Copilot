'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/image';
import styles from './BlogCarousel.module.css';

export interface CarouselSlideData {
  _key?: string;
  _type?: string;
  image?: any;
  asset?: any;
  title?: string;
  caption?: string;
  alt?: string;
  link?: string;
  src?: string;
}

export interface BlogCarouselValue {
  _type?: 'carousel' | 'carouselBlock';
  title?: string;
  subtitle?: string;
  caption?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '21:9' | 'auto';
  autoplay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  slides?: CarouselSlideData[];
  items?: CarouselSlideData[];
  images?: CarouselSlideData[];
}

interface NormalizedSlide {
  key: string;
  imageUrl: string;
  alt: string;
  title?: string;
  caption?: string;
  link?: string;
}

interface BlogCarouselProps {
  value: BlogCarouselValue;
}

export default function BlogCarousel({ value }: BlogCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  if (!value) return null;

  // Resolve raw slides array from whichever field name is populated
  const rawSlides: CarouselSlideData[] =
    value.slides || value.items || value.images || [];

  if (!Array.isArray(rawSlides) || rawSlides.length === 0) {
    return null;
  }

  // Normalize slide items and generate image URLs
  const slides: NormalizedSlide[] = [];
  rawSlides.forEach((slide, index) => {
    const imgSource = slide.image || (slide.asset ? slide : null);
    let imageUrl = '';

    if (imgSource?.asset?._ref || imgSource?.asset?.url) {
      try {
        imageUrl =
          urlForImage(imgSource)
            ?.width(1600)
            .auto('format')
            .fit('max')
            .url() || '';
      } catch {
        imageUrl = '';
      }
    } else if (typeof slide.src === 'string' && slide.src) {
      imageUrl = slide.src;
    }

    if (!imageUrl) return;

    const alt =
      slide.alt ||
      slide.title ||
      slide.caption ||
      value.title ||
      `Carousel slide ${index + 1}`;

    slides.push({
      key: slide._key || `slide-${index}`,
      imageUrl,
      alt,
      title: slide.title?.trim() || undefined,
      caption: slide.caption?.trim() || undefined,
      link: slide.link?.trim() || undefined,
    });
  });

  const totalSlides = slides.length;
  if (totalSlides === 0) return null;

  const title = value.title?.trim();
  const subtitle = value.subtitle?.trim();
  const caption = value.caption?.trim();
  const autoplay = value.autoplay !== false;
  const intervalSeconds = Math.max(2, Math.min(20, value.interval || 5));
  const showIndicators = value.showIndicators !== false && totalSlides > 1;
  const showArrows = value.showArrows !== false && totalSlides > 1;

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Autoplay timer with pause on hover
  useEffect(() => {
    if (!autoplay || isHovered || isLightboxOpen || totalSlides <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, intervalSeconds * 1000);

    return () => clearInterval(timer);
  }, [autoplay, isHovered, isLightboxOpen, intervalSeconds, totalSlides]);

  // Keyboard navigation when hovering or when lightbox is active
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === 'Escape') {
          setIsLightboxOpen(false);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handlePrevSlide();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleNextSlide();
        }
        return;
      }

      if (isHovered && totalSlides > 1) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handlePrevSlide();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleNextSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isHovered, isLightboxOpen, totalSlides, handlePrevSlide, handleNextSlide]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    touchStartXRef.current = null;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
  };

  // Determine aspect ratio class
  let ratioClass = styles.stageRatio169;
  if (value.aspectRatio === '4:3') ratioClass = styles.stageRatio43;
  else if (value.aspectRatio === '1:1') ratioClass = styles.stageRatio11;
  else if (value.aspectRatio === '21:9') ratioClass = styles.stageRatio219;
  else if (value.aspectRatio === 'auto') ratioClass = styles.stageRatioAuto;

  const activeSlide = slides[currentSlide] || slides[0];

  return (
    <>
      <figure
        className={styles.carouselWrapper}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label={title || 'Image carousel'}
      >
        {/* Top Header Bar */}
        {(title || subtitle || totalSlides > 1) && (
          <div className={styles.headerBar}>
            <div className={styles.headerLeft}>
              <span className={styles.badge}>
                <svg
                  className={styles.badgeIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="m9 18 6-6-6-6" />
                </svg>
                Gallery Slider
              </span>

              {(title || subtitle) && (
                <div className={styles.titleArea}>
                  {title && <h4 className={styles.carouselTitle}>{title}</h4>}
                  {subtitle && <p className={styles.carouselSubtitle}>{subtitle}</p>}
                </div>
              )}
            </div>

            <div className={styles.headerRight}>
              <div className={styles.counterBadge}>
                <span className={styles.counterCurrent}>
                  {String(currentSlide + 1).padStart(2, '0')}
                </span>
                <span className={styles.counterDivider}>/</span>
                <span className={styles.counterTotal}>
                  {String(totalSlides).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Carousel Visual Stage */}
        <div
          className={`${styles.stage} ${ratioClass}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Zoom / Fullscreen Button */}
          <button
            type="button"
            className={styles.zoomButton}
            onClick={() => setIsLightboxOpen(true)}
            aria-label="View slide in full screen"
            title="Expand Full Screen"
          >
            <svg
              className={styles.zoomIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>

          {/* Sliding Track */}
          <div
            className={styles.track}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, idx) => {
              const slideContent = (
                <div className={styles.slideImageContainer}>
                  <Image
                    src={slide.imageUrl}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
                    priority={idx === 0}
                    className={styles.slideImage}
                  />

                  {/* Caption & Title Overlay if present */}
                  {(slide.title || slide.caption || slide.link) && (
                    <div className={styles.slideCaptionOverlay}>
                      <div className={styles.slideOverlayContent}>
                        {slide.title && (
                          <h5 className={styles.slideOverlayTitle}>{slide.title}</h5>
                        )}
                        {slide.caption && (
                          <p className={styles.slideOverlayText}>{slide.caption}</p>
                        )}
                        {slide.link && (
                          <span className={styles.slideExternalLinkTag}>
                            <span>Visit Link</span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );

              return (
                <div
                  key={slide.key}
                  className={styles.slideItem}
                  aria-hidden={idx !== currentSlide}
                >
                  {slide.link ? (
                    <Link
                      href={slide.link}
                      target={slide.link.startsWith('http') ? '_blank' : undefined}
                      rel={slide.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={styles.slideLink}
                    >
                      {slideContent}
                    </Link>
                  ) : (
                    slideContent
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          {showArrows && (
            <>
              <button
                type="button"
                onClick={handlePrevSlide}
                className={`${styles.navButton} ${styles.navButtonPrev}`}
                aria-label="Previous slide"
              >
                <svg
                  className={styles.navIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNextSlide}
                className={`${styles.navButton} ${styles.navButtonNext}`}
                aria-label="Next slide"
              >
                <svg
                  className={styles.navIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dot Indicators */}
        {showIndicators && (
          <div className={styles.dotsBar} role="tablist" aria-label="Slide dots">
            {slides.map((slide, idx) => (
              <button
                key={`dot-${slide.key}`}
                type="button"
                role="tab"
                aria-selected={idx === currentSlide}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrentSlide(idx)}
                className={`${styles.dot} ${idx === currentSlide ? styles.dotActive : ''}`}
              />
            ))}
          </div>
        )}

        {/* Bottom Overall Caption / Footnote */}
        {caption && (
          <figcaption className={styles.captionBar}>
            <span className={styles.captionDot} aria-hidden="true" />
            <span className={styles.captionText}>{caption}</span>
          </figcaption>
        )}
      </figure>

      {/* Lightbox / Fullscreen Modal */}
      {isLightboxOpen && activeSlide && (
        <div
          className={styles.lightboxBackdrop}
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Full-size image view"
        >
          <button
            type="button"
            className={styles.lightboxCloseButton}
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close fullscreen view"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.lightboxImageWrapper}>
              <img
                src={activeSlide.imageUrl}
                alt={activeSlide.alt}
                className={styles.lightboxImage}
              />
            </div>

            {totalSlides > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  className={`${styles.lightboxNavButton} ${styles.lightboxNavPrev}`}
                  aria-label="Previous slide"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleNextSlide}
                  className={`${styles.lightboxNavButton} ${styles.lightboxNavNext}`}
                  aria-label="Next slide"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}

            {(activeSlide.title || activeSlide.caption || totalSlides > 1) && (
              <div className={styles.lightboxCaption}>
                {activeSlide.title && (
                  <h4 className={styles.lightboxTitle}>{activeSlide.title}</h4>
                )}
                {activeSlide.caption && (
                  <p className={styles.lightboxText}>{activeSlide.caption}</p>
                )}
                <div className={styles.lightboxBadge}>
                  Slide {currentSlide + 1} of {totalSlides}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
