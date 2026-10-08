'use client';
import { useRef, useEffect, useState, useCallback } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import styles from './StoryVideoSection.module.css';

const storyPillars = [
  {
    icon: '🎯',
    title: 'Diagnostic Strategy & Moats',
    desc: 'Deep funnel audits, unit economics modeling, and custom omnichannel growth roadmaps built to win.',
  },
  {
    icon: '🎨',
    title: 'High-Impact Creative & Media',
    desc: 'Commercial videography, high-converting copy, and speed-engineered landing pages designed to sell.',
  },
  {
    icon: '📈',
    title: 'Compounding Revenue & Scale',
    desc: 'Synchronized Meta Ads, Google search intent capture, and automated pipelines delivering verified ROI.',
  },
];

export default function StoryVideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const ambientVideoRef = useRef<HTMLVideoElement | null>(null);
  const userPausedRef = useRef<boolean>(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // Rock-Solid Play / Pause Toggle Handler
  const handlePlayToggle = useCallback(() => {
    const video = videoRef.current;
    const ambient = ambientVideoRef.current;
    if (!video) return;

    if (!video.paused) {
      // User clicked while playing -> STRICTLY PAUSE FILM
      userPausedRef.current = true;
      video.pause();
      if (ambient) ambient.pause();
      setIsPlaying(false);
    } else {
      // User clicked while paused -> RESUME PLAYBACK
      userPausedRef.current = false;
      video.play().then(() => {
        setIsPlaying(true);
        if (ambient) ambient.play().catch(() => {});
      }).catch(() => {
        // Fallback for strict browser autoplay permissions
        video.muted = true;
        video.play().catch(() => {});
        if (ambient) ambient.play().catch(() => {});
        setIsPlaying(true);
      });
    }
  }, []);



  // Scroll into view detection: Only stream video & load poster when user scrolls near this section
  useEffect(() => {
    const el = sectionRef.current;
    const video = videoRef.current;
    const ambient = ambientVideoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          // Only auto-play if user has NOT explicitly paused the video
          if (video && video.paused && !userPausedRef.current) {
            video.play().then(() => {
              setIsPlaying(true);
              if (ambient) ambient.play().catch(() => {});
            }).catch(() => {});
          }
        } else {
          // Pause when completely out of view to save GPU / battery
          if (video && !video.paused) {
            video.pause();
            if (ambient) ambient.pause();
            setIsPlaying(false);
          }
        }
      },
      { rootMargin: '350px', threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="company-story" ref={sectionRef}>
      {/* Soft Ambient Background Glows */}
      <div className={styles.ambientGlowLeft} />
      <div className={styles.ambientGlowRight} />

      <div className="container">
        <div className={styles.dualGrid}>
          {/* ══════════════════════════════════════════════════
              LEFT PANE: COMPANY INTRODUCTION
             ══════════════════════════════════════════════════ */}
          <ScrollReveal className={styles.revealCol}>
            <div className={styles.paneCard}>
              <div className={styles.paneHeader}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} />
                  <span>WHO WE ARE · COMPANY OVERVIEW</span>
                </div>

                <h3 className={styles.headline}>
                  Growing Brands Through<br />
                  <span className={`accent-gradient ${styles.headlineHighlight}`}>
                    Strategy, Creativity &amp; Performance.
                  </span>
                </h3>

                <p className={styles.leadText}>
                  At <strong>Marketing Copilot</strong>, we partner directly with ambitious founders to engineer predictable revenue engines, high-converting creative assets, and multi-channel acquisition funnels that scale.
                </p>
              </div>

              {/* 3 Compact Feature Cards */}
              <div className={styles.pillarsList}>
                {storyPillars.map((item, idx) => (
                  <div key={idx} className={styles.pillarCard}>
                    <div className={styles.pillarIconBox}>
                      <span>{item.icon}</span>
                    </div>
                    <div className={styles.pillarContent}>
                      <h4 className={styles.pillarTitle}>{item.title}</h4>
                      <p className={styles.pillarDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ══════════════════════════════════════════════════
              RIGHT PANE: OUR WORKING PROCESS & COMPACT REEL
             ══════════════════════════════════════════════════ */}
          <ScrollReveal delay={100} className={styles.revealCol}>
            <div className={styles.paneCard}>
              <div className={styles.paneHeader}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDotIndigo} />
                  <span>HOW WE OPERATE · EXECUTION BLUEPRINT</span>
                </div>

                <h3 className={styles.headline}>
                  See How We Turn Strategy<br />
                  <span className={`accent-gradient ${styles.headlineHighlight}`}>
                    Into Measurable Growth.
                  </span>
                </h3>

                <p className={styles.leadText}>
                  Take an inside look at how our senior in-house team moves from deep diagnostic planning to live campaign execution and business growth you can actually measure.
                </p>
              </div>

              {/* Video Viewport Locked in Equal Height to Left Cards */}
              <div className={styles.videoContainer}>
                <div className={styles.videoBackdrop} />

                <div
                  className={styles.videoWrapper}
                  onClick={handlePlayToggle}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      handlePlayToggle();
                    }
                  }}
                  aria-label={isPlaying ? 'Pause commercial film' : 'Play commercial film'}
                >
                  {/* Ambient Blurred Video Background (Fills card with live footage colors, zero ugly black bars) */}
                  <video
                    ref={ambientVideoRef}
                    className={styles.ambientVideo}
                    src="/videos/home_story_reel.mp4"
                    loop
                    muted
                    playsInline
                    preload="none"
                    poster={isSectionVisible ? '/images/home_reel_poster.webp' : undefined}
                    aria-hidden="true"
                    tabIndex={-1}
                  />

                  {/* Primary Foreground Crisp Video (100% Totally Visible, Never Cropped) */}
                  <video
                    ref={videoRef}
                    className={styles.videoPlayer}
                    src="/videos/home_story_reel.mp4"
                    loop
                    muted
                    playsInline
                    preload="none"
                    poster={isSectionVisible ? '/images/home_reel_poster.webp' : undefined}
                    onPlay={() => {
                      setIsPlaying(true);
                      if (ambientVideoRef.current && ambientVideoRef.current.paused) {
                        ambientVideoRef.current.play().catch(() => {});
                      }
                    }}
                    onPause={() => {
                      setIsPlaying(false);
                      if (ambientVideoRef.current && !ambientVideoRef.current.paused) {
                        ambientVideoRef.current.pause();
                      }
                    }}
                    onTimeUpdate={() => {
                      if (videoRef.current && ambientVideoRef.current) {
                        const diff = Math.abs(videoRef.current.currentTime - ambientVideoRef.current.currentTime);
                        if (diff > 0.3) {
                          ambientVideoRef.current.currentTime = videoRef.current.currentTime;
                        }
                      }
                    }}
                  >
                    <track kind="captions" srcLang="en" label="English" />
                  </video>

                  {/* 3D Tactile Play / Pause Controller (Neo-Skeuomorphic Glassmorphic Center Stage) */}
                  <div
                    className={`${styles.playOverlay3D} ${
                      isPlaying ? styles.overlayPlaying : styles.overlayVisible
                    }`}
                  >
                    {/* Concentric 3D Acoustic Resonance Radar Waves (active when paused) */}
                    {!isPlaying && (
                      <div className={styles.radarWavesWrapper}>
                        <span className={styles.radarRing1} />
                        <span className={styles.radarRing2} />
                        <span className={styles.radarRing3} />
                      </div>
                    )}

                    <div className={styles.buttonAndPillWrap}>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayToggle();
                        }}
                        className={`${styles.playBtn3D} ${
                          isPlaying ? styles.playBtn3DActive : ''
                        }`}
                        aria-label={isPlaying ? 'Pause commercial film' : 'Play commercial film'}
                        title={isPlaying ? 'Click to pause film' : 'Click to play film'}
                      >
                        {/* 3D Curved Specular Glass Glare Arc */}
                        <span className={styles.specularGlareArc} />
                        {/* 3D Deep Rim Chamfer Glow */}
                        <span className={styles.bevelRimGlow} />

                        {/* Sculpted 3D Icon Glyphs */}
                        {isPlaying ? (
                          /* 3D Pause Glyph */
                          <div className={styles.glyph3DPause}>
                            <span className={styles.pauseBar3D} />
                            <span className={styles.pauseBar3D} />
                          </div>
                        ) : (
                          /* 3D Play Triangle Glyph (Optically Centered) */
                          <div className={styles.glyph3DPlay}>
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={styles.playSvg3D}
                            >
                              <defs>
                                <linearGradient id="playGrad3D" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#FFFFFF" />
                                  <stop offset="45%" stopColor="#F1F5F9" />
                                  <stop offset="100%" stopColor="#CBD5E1" />
                                </linearGradient>
                                <filter id="playShadow3D" x="-30%" y="-30%" width="160%" height="160%">
                                  <feDropShadow dx="1" dy="3" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.7" />
                                </filter>
                              </defs>
                              <path
                                d="M8 5.14V18.86C8 19.64 8.86 20.12 9.53 19.71L20.47 12.85C21.1 12.45 21.1 11.55 20.47 11.15L9.53 4.29C8.86 3.88 8 4.36 8 5.14Z"
                                fill="url(#playGrad3D)"
                                stroke="#FFFFFF"
                                strokeWidth="0.8"
                                filter="url(#playShadow3D)"
                              />
                            </svg>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Center Bottom Discovery CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <BeamButton href="/contact" label="Book a Strategic Discovery Session" size="md" />
        </div>
      </div>
    </section>
  );
}
