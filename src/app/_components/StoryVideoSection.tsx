'use client';
import { useRef, useEffect, useState, useCallback } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import styles from './StoryVideoSection.module.css';

const storyPillars = [
  {
    icon: '🎯',
    title: 'Diagnostic Strategy & Moats',
    desc: 'Funnel audits, unit economics modeling, and custom omnichannel growth architecture.',
  },
  {
    icon: '🎨',
    title: 'High-Impact Creative & Media',
    desc: 'Commercial videography, AI-accelerated copy, and landing pages engineered to convert.',
  },
  {
    icon: '📈',
    title: 'Compounding Algorithmic Scale',
    desc: 'Omnichannel Meta Ads, Google search SERP dominance, and automated lead pipelines.',
  },
];

export default function StoryVideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const ambientVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // 3D Play/Pause & Audio Toggle Handler
  const handlePlayToggle = useCallback(() => {
    const video = videoRef.current;
    const ambient = ambientVideoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false;
      video.volume = 0.85;
      video.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
        if (ambient) ambient.play().catch(() => {});
      }).catch(() => {
        // Fallback if browser requires muted gesture
        video.muted = true;
        video.play().catch(() => {});
        if (ambient) ambient.play().catch(() => {});
        setIsPlaying(true);
      });
    } else {
      if (isMuted) {
        // Was running silently -> activate full unmuted sound
        video.muted = false;
        video.volume = 0.85;
        setIsMuted(false);
        setIsPlaying(true);
      } else {
        // Was playing with audio -> pause playback
        video.pause();
        if (ambient) ambient.pause();
        setIsPlaying(false);
      }
    }
  }, [isMuted]);

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
          if (video && video.paused && !isPlaying) {
            video.play().then(() => {
              setIsPlaying(true);
              if (ambient) ambient.play().catch(() => {});
            }).catch(() => {});
          }
        } else {
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
  }, [isPlaying]);

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
                  <span>COMPANY INTRODUCTION</span>
                </div>

                <h3 className={styles.headline}>
                  Growing Brands Through<br />
                  <span className={`accent-gradient ${styles.headlineHighlight}`}>
                    Strategy, Creativity &amp; Performance.
                  </span>
                </h3>

                <p className={styles.leadText}>
                  At <strong>Marketing Copilot</strong>, we engineer full-funnel digital acquisition engines, high-converting creative campaigns, and automated revenue systems that turn customer attention into compounding scale.
                </p>
              </div>

              {/* 3 Larger & Aligned Feature Cards */}
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
              RIGHT PANE: OUR WORKING PROCESS & EQUAL VIDEO
             ══════════════════════════════════════════════════ */}
          <ScrollReveal delay={100} className={styles.revealCol}>
            <div className={styles.paneCard}>
              <div className={styles.paneHeader}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDotIndigo} />
                  <span>OUR WORKING PROCESS</span>
                </div>

                <h3 className={styles.headline}>
                  See How We Turn Ideas<br />
                  <span className={`accent-gradient ${styles.headlineHighlight}`}>
                    Into Compounding Results.
                  </span>
                </h3>

                <p className={styles.leadText}>
                  Take an inside look at how our team moves from strategy and creative planning through to live execution and business growth you can actually measure.
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
                  aria-label={isPlaying && !isMuted ? 'Pause commercial film' : 'Play film with sound'}
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
                    muted={isMuted}
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
                      isPlaying && !isMuted ? styles.overlayPlaying : styles.overlayVisible
                    }`}
                  >
                    {/* Concentric 3D Acoustic Resonance Radar Waves (active when paused or muted) */}
                    {(!isPlaying || isMuted) && (
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
                          isPlaying && !isMuted ? styles.playBtn3DActive : ''
                        }`}
                        aria-label={isPlaying && !isMuted ? 'Pause commercial film' : 'Play film with audio'}
                        title={isPlaying && !isMuted ? 'Click to pause film' : 'Click to play film with sound'}
                      >
                        {/* 3D Curved Specular Glass Glare Arc */}
                        <span className={styles.specularGlareArc} />
                        {/* 3D Deep Rim Chamfer Glow */}
                        <span className={styles.bevelRimGlow} />

                        {/* Sculpted 3D Icon Glyphs */}
                        {isPlaying && !isMuted ? (
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
