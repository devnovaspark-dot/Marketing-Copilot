'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import styles from './StrategySection.module.css';

interface StrategyStage {
  num: string;
  name: string;
  tagline: string;
  timeframe: string;
  focus: string;
  color: string;
}

const stages: StrategyStage[] = [
  {
    num: '01',
    name: 'Discover & Diagnose',
    tagline: 'Audit funnels, unit economics & historical ad spend.',
    timeframe: 'Days 1–7',
    focus: 'Diagnostic Audit',
    color: '#0B2093',
  },
  {
    num: '02',
    name: 'Strategy Architecture',
    tagline: 'Custom omnichannel growth & conversion funnel modeling.',
    timeframe: 'Days 8–14',
    focus: 'Growth Blueprint',
    color: '#0D007F',
  },
  {
    num: '03',
    name: 'High-Impact Creative',
    tagline: 'High-converting video hooks, copy & interactive landers.',
    timeframe: 'Days 15–21',
    focus: 'Creative Sprints',
    color: '#0B2093',
  },
  {
    num: '04',
    name: 'Algorithmic Launch',
    tagline: 'Omnichannel campaign activation & automated bidding.',
    timeframe: 'Days 22–30',
    focus: 'Live Deployment',
    color: '#B45309',
  },
  {
    num: '05',
    name: 'Scale & Compound',
    tagline: 'Winning creative scaling & secondary channel expansion.',
    timeframe: 'Month 2+',
    focus: 'Compounding Scale',
    color: '#047857',
  },
];

export default function StrategySection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [mobileStep, setMobileStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activeMobileStage = stages[mobileStep];

  const handlePrev = useCallback(() => {
    setMobileStep((prev) => (prev === 0 ? stages.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setMobileStep((prev) => (prev === stages.length - 1 ? 0 : prev + 1));
  }, []);

  const pauseTemporarily = useCallback((durationMs = 6000) => {
    setIsAutoPlaying(false);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, durationMs);
  }, []);

  // Automatic progression for mobile carousel & circular nodes
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setMobileStep((prev) => (prev + 1) % stages.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // Touch Swipe Handlers for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    pauseTemporarily(7000);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className={styles.section} id="growth-framework">
      <div className={styles.bgGlow} />

      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="text-center">
          <div className={styles.headerWrap}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              <span>Our Growth Framework · Execution Blueprint</span>
            </div>
            <h3 className={styles.title}>
              From audit to<br />
              <span className={styles.titleGradient}>compounding market scale.</span>
            </h3>
            <p className={styles.subtitle}>
              A 5-stage execution timeline engineered to scale your brand with mathematical precision.
            </p>
          </div>
        </ScrollReveal>

        {/* ══════════════════════════════════════════════════
            1. DESKTOP VIEW: 5-COLUMN ALTERNATING WAVE ROADMAP
           ══════════════════════════════════════════════════ */}
        <div className={styles.desktopWaveContainer}>
          <div className={styles.waveRoadmap}>
            <div className={styles.waveInner}>
              {/* Continuous Sinusoidal Broken-Hyphen Wave Track */}
              <div className={styles.waveSvgTrack}>
                <svg
                  className={styles.waveSvg}
                  viewBox="0 0 1200 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="cleanWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0D007F" />
                      <stop offset="25%" stopColor="#0B2093" />
                      <stop offset="50%" stopColor="#1A3DB5" />
                      <stop offset="75%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                    <filter id="cleanGlow" x="-10%" y="-30%" width="120%" height="160%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Underlying Base Broken-Hyphen Wave */}
                  <path
                    d="M 50,80 C 130,20 190,20 250,80 C 310,140 390,140 450,80 C 510,20 590,20 650,80 C 710,140 790,140 850,80 C 910,20 990,20 1050,80 C 1110,140 1150,110 1180,80"
                    stroke="rgba(203, 213, 225, 0.6)"
                    strokeWidth="2.5"
                    strokeDasharray="8 8"
                    strokeLinecap="round"
                  />

                  {/* Glowing Colored Animated Broken-Hyphen Wave */}
                  <path
                    d="M 50,80 C 130,20 190,20 250,80 C 310,140 390,140 450,80 C 510,20 590,20 650,80 C 710,140 790,140 850,80 C 910,20 990,20 1050,80 C 1110,140 1150,110 1180,80"
                    stroke="url(#cleanWaveGrad)"
                    strokeWidth="3.5"
                    strokeDasharray="10 8"
                    strokeLinecap="round"
                    className={styles.animatedWave}
                    filter="url(#cleanGlow)"
                  />
                </svg>
              </div>

              {/* 5-Column Alternating Layout */}
              <div className={styles.stagesGrid}>
                {stages.map((stage, idx) => {
                  const isAbove = idx % 2 === 0; // 0, 2, 4 (Above) | 1, 3 (Below)
                  const isHovered = activeIdx === idx;

                  return (
                    <div
                      key={stage.num}
                      className={`${styles.stageColumn} ${isAbove ? styles.colAbove : styles.colBelow} ${isHovered ? styles.colHovered : ''}`}
                      onMouseEnter={() => setActiveIdx(idx)}
                      onMouseLeave={() => setActiveIdx(null)}
                      style={{ '--stage-color': stage.color } as React.CSSProperties}
                    >
                      {/* TOP ZONE: Content for steps 01, 03, 05 */}
                      <div className={styles.topSlot}>
                        {isAbove && (
                          <div className={styles.stepBubble}>
                            <div className={styles.pillRow}>
                              <span 
                                className={styles.phasePill}
                                style={{ color: stage.color, borderColor: `${stage.color}35`, background: `${stage.color}12` }}
                              >
                                Phase {stage.num}
                              </span>
                              <span className={styles.timePill}>⏱ {stage.timeframe}</span>
                            </div>

                            <h4 className={styles.stepTitle}>{stage.name}</h4>
                            <p className={styles.stepDesc}>{stage.tagline}</p>

                            <span className={styles.focusPill} style={{ color: stage.color }}>
                              <span className={styles.focusDot} style={{ background: stage.color }} />
                              {stage.focus}
                            </span>

                            {/* Broken Hyphen Drop Connector to Node */}
                            <div className={`${styles.hyphenConnector} ${styles.connectorDown}`} />
                          </div>
                        )}
                      </div>

                      {/* CENTER ZONE: 3D Circular Skeuomorphic Node on Wave */}
                      <div className={styles.nodeSlot}>
                        <div 
                          className={styles.circularNode}
                          style={{ borderColor: isHovered ? stage.color : 'rgba(218, 226, 237, 0.95)' }}
                        >
                          <div 
                            className={styles.nodeCore}
                            style={{ background: stage.color }}
                          >
                            <span className={styles.nodeNum}>{stage.num}</span>
                          </div>
                          <span 
                            className={styles.pulseRing}
                            style={{ borderColor: stage.color }}
                          />
                        </div>
                      </div>

                      {/* BOTTOM ZONE: Content for steps 02, 04 */}
                      <div className={styles.bottomSlot}>
                        {!isAbove && (
                          <div className={styles.stepBubble}>
                            {/* Broken Hyphen Rise Connector from Node */}
                            <div className={`${styles.hyphenConnector} ${styles.connectorUp}`} />

                            <div className={styles.pillRow}>
                              <span 
                                className={styles.phasePill}
                                style={{ color: stage.color, borderColor: `${stage.color}35`, background: `${stage.color}12` }}
                              >
                                Phase {stage.num}
                              </span>
                              <span className={styles.timePill}>⏱ {stage.timeframe}</span>
                            </div>

                            <h4 className={styles.stepTitle}>{stage.name}</h4>
                            <p className={styles.stepDesc}>{stage.tagline}</p>

                            <span className={styles.focusPill} style={{ color: stage.color }}>
                              <span className={styles.focusDot} style={{ background: stage.color }} />
                              {stage.focus}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            2. MOBILE VIEW: AUTO-SCROLLING 5-NODE WAVE + ACTIVE CARD
           ══════════════════════════════════════════════════ */}
        <div 
          className={styles.mobileWaveContainer}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Full-Width 5-Node Sinusoidal Wave Progress Bar with Live Auto-Scroll Flow */}
          <div className={styles.mobileWaveTrack}>
            <svg
              className={styles.mobileSvgWave}
              viewBox="0 0 500 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="mobWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0D007F" />
                  <stop offset="35%" stopColor="#0B2093" />
                  <stop offset="70%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>

              {/* Underlying Base Sinusoidal Wave */}
              <path
                d="M 10,40 C 60,15 90,15 125,55 C 160,95 190,95 250,55 C 310,15 340,15 375,55 C 410,95 440,95 490,40"
                stroke="rgba(203, 213, 225, 0.7)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />

              {/* Colored Animated Wave Track */}
              <path
                d="M 10,40 C 60,15 90,15 125,55 C 160,95 190,95 250,55 C 310,15 340,15 375,55 C 410,95 440,95 490,40"
                stroke="url(#mobWaveGrad)"
                strokeWidth="3.5"
                strokeDasharray="8 6"
                strokeLinecap="round"
                className={styles.animatedWave}
              />
            </svg>

            {/* 5 Circular 3D Nodes across 100% Mobile Screen Width */}
            <div className={styles.mobileNodesRow}>
              {stages.map((stage, idx) => {
                const isSelected = mobileStep === idx;
                const isPeak = idx % 2 === 0;

                return (
                  <button
                    key={stage.num}
                    type="button"
                    onClick={() => {
                      setMobileStep(idx);
                      pauseTemporarily(7000);
                    }}
                    className={`${styles.mobileNodeBtn} ${isPeak ? styles.mobPeak : styles.mobTrough} ${isSelected ? styles.mobNodeActive : ''}`}
                    aria-label={`View Phase ${stage.num}: ${stage.name}`}
                    style={{ '--node-accent': stage.color } as React.CSSProperties}
                  >
                    <span 
                      className={styles.mobNodeTag} 
                      style={{ color: isSelected ? stage.color : undefined, fontWeight: isSelected ? 900 : 700 }}
                    >
                      P{stage.num}
                    </span>
                    <div className={styles.mobNodeCircle}>
                      <div className={styles.mobNodeCore} style={{ background: stage.color }}>
                        <span className={styles.mobNodeNum}>{stage.num}</span>
                      </div>
                      {isSelected && (
                        <span className={styles.mobPulseHalo} style={{ borderColor: stage.color }} />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detailed Auto-Scrolling Spotlight Card */}
          <div 
            key={activeMobileStage.num} 
            className={`${styles.mobileActiveCard} ${styles.cardFadeIn}`} 
            style={{ '--card-accent': activeMobileStage.color } as React.CSSProperties}
          >
            {/* Auto-Scroll Progress Bar */}
            <div className={styles.cardProgressTrack}>
              <div 
                className={`${styles.cardProgressBar} ${isAutoPlaying ? styles.progressActive : styles.progressPaused}`}
                style={{ backgroundColor: activeMobileStage.color }}
              />
            </div>

            <div className={styles.mobileCardHeader}>
              <div className={styles.mobPillsWrap}>
                <span
                  className={styles.mobPhaseBadge}
                  style={{
                    color: activeMobileStage.color,
                    borderColor: `${activeMobileStage.color}40`,
                    background: `${activeMobileStage.color}15`,
                  }}
                >
                  Phase {activeMobileStage.num}
                </span>
                <span className={styles.mobTimeBadge}>⏱ {activeMobileStage.timeframe}</span>
              </div>
              
              <div className={styles.mobHeaderRight}>
                <button
                  type="button"
                  onClick={() => setIsAutoPlaying((prev) => !prev)}
                  className={styles.autoPlayToggle}
                  title={isAutoPlaying ? 'Pause Auto-Scroll' : 'Resume Auto-Scroll'}
                  aria-label={isAutoPlaying ? 'Pause Auto-Scroll' : 'Resume Auto-Scroll'}
                >
                  <span className={styles.autoPlayDot} style={{ background: isAutoPlaying ? activeMobileStage.color : '#94A3B8' }} />
                  <span className={styles.autoPlayText}>{isAutoPlaying ? 'Auto' : 'Paused'}</span>
                </button>
                <span className={styles.mobStepCounter}>
                  {mobileStep + 1} / {stages.length}
                </span>
              </div>
            </div>

            <h4 className={styles.mobStageTitle}>{activeMobileStage.name}</h4>
            <p className={styles.mobStageDesc}>{activeMobileStage.tagline}</p>

            <div className={styles.mobFocusRow}>
              <span className={styles.mobFocusPill} style={{ color: activeMobileStage.color }}>
                <span className={styles.mobFocusDot} style={{ background: activeMobileStage.color }} />
                {activeMobileStage.focus}
              </span>
            </div>

            {/* Navigation Switcher Bar with Step Indicators */}
            <div className={styles.mobNavControls}>
              <button
                type="button"
                onClick={() => {
                  handlePrev();
                  pauseTemporarily(7000);
                }}
                className={styles.mobNavArrowBtn}
                aria-label="Previous step"
              >
                ← Prev
              </button>

              <div className={styles.mobStepDots}>
                {stages.map((st, idx) => (
                  <button
                    key={st.num}
                    type="button"
                    onClick={() => {
                      setMobileStep(idx);
                      pauseTemporarily(7000);
                    }}
                    className={`${styles.mobStepDot} ${mobileStep === idx ? styles.mobStepDotActive : ''}`}
                    style={{
                      background: mobileStep === idx ? st.color : 'rgba(203, 213, 225, 0.8)',
                    }}
                    aria-label={`Jump to stage ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  handleNext();
                  pauseTemporarily(7000);
                }}
                className={styles.mobNavArrowBtn}
                aria-label="Next step"
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* Center Bottom Action Runway */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 44 }}>
          <BeamButton href="/contact" label="Start Your 5-Phase Growth Plan" size="md" />
        </div>
      </div>
    </section>
  );
}
