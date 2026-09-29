'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './MetricsSection.module.css';

const metrics = [
  { 
    value: 25, 
    suffix: 'Cr+', 
    label: 'Campaign Media Managed', 
    desc: 'Total media spend deployed and optimized across Google, Meta, and Programmatic networks with zero waste.',
    tag: 'Audited Scale',
    benchmark: '↑ 142% YoY Portfolio Scale',
    progress: '94%',
    color: '#0B2093',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  { 
    value: 8, 
    suffix: 'X', 
    label: 'Average Blended ROAS', 
    desc: 'Direct commercial return on ad spend achieved across active e-commerce and high-intent acquisition accounts.',
    tag: 'Peak Efficiency',
    benchmark: 'Industry Benchmark: 2.4X',
    progress: '88%',
    color: '#0D007F',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
  },
  { 
    value: 50, 
    suffix: 'K+', 
    label: 'Qualified Leads Delivered', 
    desc: 'High-intent B2B and consumer sales opportunities routed directly into partner CRM pipelines with full attribution.',
    tag: 'High Intent',
    benchmark: '84.6% SQL Conversion',
    progress: '96%',
    color: '#10B981',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
  },
  { 
    value: 98, 
    suffix: '%', 
    label: 'Annual Client Retention', 
    desc: 'Long-term partnership retention built on sustained quarterly revenue scaling, radical honesty, and zero churn.',
    tag: 'Client Trust',
    benchmark: 'Top 1% in Agency Space',
    progress: '98%',
    color: '#F59E0B',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    ),
  },
];

export default function MetricsSection() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          refs.current.forEach((el, i) => {
            if (!el) return;
            const target = metrics[i].value;
            const duration = 1800;
            const start = performance.now();
            const animate = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const ease = 1 - Math.pow(1 - p, 3);
              el.textContent = Math.floor(ease * target).toString();
              if (p < 1) requestAnimationFrame(animate);
              else el.textContent = target.toString();
            };
            setTimeout(() => requestAnimationFrame(animate), i * 100);
          });
        }
      },
      { threshold: 0.2 }
    );
    const section = document.getElementById('metrics-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="metrics-section">
      <div className={styles.ambientGlow} />
      
      <div className="container">
        {/* Centered Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className="eyebrow-dot" />
            <span>Revenue &amp; Performance Proof</span>
          </div>
          <h3 className={`display-lg ${styles.title}`}>
            Precision Growth.<br />
            <span className="accent-gradient">Quantified in Revenue.</span>
          </h3>
          <p className="body-lg" style={{ maxWidth: 620, margin: '14px auto 0' }}>
            Measurable commercial milestones engineered for ambitious brands that chose predictability and compounding revenue over guesswork.
          </p>
        </ScrollReveal>

        {/* 4 Performance Metric Cards Grid */}
        <div className={styles.grid}>
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 80}>
              <div className={styles.card} style={{ '--accent-color': m.color } as React.CSSProperties}>
                {/* Header row: Clean icon badge + tag */}
                <div className={styles.cardTop}>
                  <div className={styles.iconBadge} style={{ color: m.color, background: `${m.color}0D`, borderColor: `${m.color}25` }}>
                    {m.icon}
                  </div>
                  <div className={styles.tagPill}>
                    <span className={styles.tagDot} style={{ background: m.color }} />
                    {m.tag}
                  </div>
                </div>

                {/* Main Metric Value */}
                <div className={styles.metricVal}>
                  <span ref={el => { refs.current[i] = el; }}>0</span>
                  <span className={styles.suffix} style={{ color: m.color }}>{m.suffix}</span>
                </div>

                {/* Tactile Micro-Gauge Progress Track */}
                <div className={styles.progressTrack}>
                  <div 
                    className={styles.progressFill} 
                    style={{ 
                      width: m.progress, 
                      background: m.color,
                    }} 
                  />
                </div>

                {/* Label & Description */}
                <h4 className={styles.label}>{m.label}</h4>
                <p className={styles.desc}>{m.desc}</p>

                {/* Benchmark Footer */}
                <div className={styles.cardFooter}>
                  <span className={styles.benchmarkPill} style={{ color: m.color, borderColor: `${m.color}30`, background: `${m.color}08` }}>
                    {m.benchmark}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Revenue Growth CTA Banner Card (Centered, Symmetrical, High Impact) */}
        <ScrollReveal delay={320}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlowBg} />
            <div className={styles.ctaMesh} />

            <div className={styles.ctaHeaderRow}>
              <span className={styles.ctaBadge}>
                <span className={styles.ctaBadgeDot} />
                <span>Custom Revenue Strategy</span>
              </span>
              <span className={styles.ctaSlotsBadge}>⚡ Limited Q3/Q4 Audit Slots</span>
            </div>

            <div className={styles.ctaTitle}>
              Ready to Turn Your Marketing Spend into <span className="accent-gradient">Predictable Revenue?</span>
            </div>
            
            <p className={styles.ctaDesc}>
              Get a comprehensive 360° revenue audit, competitive traffic analysis, and actionable scaling roadmap designed specifically for your industry.
            </p>

            <div className={styles.ctaActionWrap}>
                <BeamButton href="/contact" label="Grow Your Business With Us" size="md" />
              <span className={styles.ctaSubtext}>⚡ Average response time: &lt; 2 hours</span>
            </div>

            <div className={styles.ctaTrustPills}>
              <span className={styles.trustItem}>✓ Free 30-Min Consultation</span>
              <span className={styles.trustSep}>•</span>
              <span className={styles.trustItem}>✓ Tailored ROI Model</span>
              <span className={styles.trustSep}>•</span>
              <span className={styles.trustItem}>✓ Zero Obligation</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
