'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import styles from './HeroSection.module.css';

const heroSlides = [
  {
    id: 'slide-1',
    src: '/images/hero_slide_1.webp',
    alt: 'Marketing Copilot digital marketing company strategy and campaigns in India',
    caption: 'Strategic Growth & Execution',
  },
  {
    id: 'slide-2',
    src: '/images/hero_slide_2.webp',
    alt: 'Marketing Copilot marketing performance data and digital solutions',
    caption: 'Performance & 10x ROI',
  },
  {
    id: 'slide-3',
    src: '/images/hero_slide_3.webp',
    alt: 'Creative marketing professionals planning growth strategies and digital solutions',
    caption: 'Creative & Performance Marketing',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth auto-slide interval (3.5 seconds per slide for faster transition)
  useEffect(() => {
    setIsMounted(true);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className={styles.hero}>
      {/* Ambient background soft light glows */}
      <div className={styles.splashCyan} />
      <div className={styles.splashViolet} />
      <div className={styles.splashAmber} />
      <div className={styles.ambientMesh} />

      <div className={`container ${styles.inner}`}>
        {/* Left Content */}
        <div className={styles.content}>
          <div className={styles.heroEyebrow}>
            <span className={styles.heroEyebrowDot} />
            <span>Digital Marketing Company in India</span>
          </div>

          <h1 className={`display-hero ${styles.headline}`}>
            Digital Marketing Company{' '}
            <span className={`accent-gradient ${styles.heroAccent}`}>in India</span>
          </h1>

          <div className={styles.sub}>
            <p>
              Helping businesses across India improve online visibility, generate qualified leads, and build sustainable digital growth with SEO, paid advertising, social media, web development, and AI-powered marketing solutions.
            </p>
          </div>

          <div className={styles.actions}>
            <BeamButton href="/contact" label="Grow Your Business With Us" size="lg" />
            <BeamButton
              href="/services"
              label="Explore Our Services"
              size="lg"
              variant="outline"
              icon={<span style={{ color: '#EA580C', fontSize: '12px', marginRight: '3px' }}>✦</span>}
            />
          </div>

          {/* Clean Skeuomorphic Trust Strip */}
          <div className={styles.trustStrip}>
            <div className={styles.trustItem}>
              <span className={styles.trustDot} />
              <span>₹25Cr+ Media Managed</span>
            </div>
            <span className={styles.trustSep}>•</span>
            <div className={styles.trustItem}>
              <span className={styles.star}>★</span>
              <span>4.9/5 Rating (50+ Brands)</span>
            </div>
          </div>
        </div>

        {/* Right — Clean Borderless Photography Showcase */}
        <div className={styles.visual}>
          <div className={styles.imageCard}>
            <div className={styles.imageViewport}>
              {heroSlides.map((slide, idx) => {
                if (!isMounted && idx !== 0) return null;
                return (
                  <div
                    key={slide.id}
                    className={`${styles.slideItem} ${idx === current ? styles.slideActive : ''}`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={idx === 0}
                      fetchPriority={idx === 0 ? 'high' : 'auto'}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 680px"
                      className={styles.slideImage}
                    />
                    <div className={styles.slideOverlay} />
                  </div>
                );
              })}

              {/* Minimalist Floating Status Badge */}
              <div className={styles.floatingBadge}>
                <span className={styles.badgePulse} />
                <span className={styles.badgeText}>Real Client Growth</span>
              </div>

              {/* Minimalist Tactile Dot Indicators */}
              <div className={styles.dotsWrap}>
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Switch to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
