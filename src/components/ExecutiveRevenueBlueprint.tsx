'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import HubSpotLeadForm from '@/components/HubSpotLeadForm';
import styles from './ExecutiveRevenueBlueprint.module.css';

interface ExecutiveRevenueBlueprintProps {
  id?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  formLocation?: string;
}

export default function ExecutiveRevenueBlueprint({
  id = 'executive-revenue-blueprint',
  title = 'Request Your Free 90-Day Revenue Blueprint',
  subtitle = 'Submit your company details below. Formulate an actionable 90-day scaling roadmap tailored for your market.',
  eyebrow = 'FOUNDER & CXO ADVISORY • 90-DAY SCALE',
  formLocation = '/',
}: ExecutiveRevenueBlueprintProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.ambientGlowTop} />
      <div className="container">
        <ScrollReveal>
          <div className={styles.executiveFrame}>
            {/* Top Metallic Bevel Streamer */}
            <div className={styles.consoleTopBevel} />

            {/* Left Pane: Skeuomorphic Navy Blue Executive Advisory */}
            <div className={styles.advisoryPane}>
              <div>
                <div className={styles.deskHardwareBar}>
                  <div className={styles.executiveBadge}>
                    <span className={styles.copperDot} />
                    <span>EXECUTIVE DESK &bull; INDIA ADVISORY</span>
                  </div>
                  <div className={styles.hardwareScrew} title="Hardware Console Accent" />
                </div>

                <div className={styles.advisoryHeader}>
                  <h3 className={styles.advisoryTitle}>
                    Scale to a Predictable Revenue Engine
                  </h3>
                  <p className={styles.advisoryLead}>
                    A milestone-driven growth roadmap tailored for founders and CMOs seeking profitable unit economics.
                  </p>
                </div>

                {/* Full Visible Strategy War Room Showcase — 100% Clean, Zero Text Overlaid */}
                <div className={styles.visualImageCard}>
                  <Image
                    src="/images/SEO strategy_team.jpg"
                    alt="Senior Growth Strategy War Room & Execution Team"
                    fill
                    className={styles.panelImg}
                    priority={false}
                  />
                </div>

                {/* Tactile Hardware Micro-Tiles */}
                <div className={styles.tactileTileList}>
                  <div className={styles.tactileTile}>
                    <span className={styles.tileIcon}>🏛️</span>
                    <span className={styles.tileText}>Full-Funnel CAC &amp; Margin Architecture</span>
                  </div>
                  <div className={styles.tactileTile}>
                    <span className={styles.tileIcon}>🤝</span>
                    <span className={styles.tileText}>Direct Senior Partner Alignment</span>
                  </div>
                </div>
              </div>

              {/* 3D Tactile Senior Partner Hotline Switch */}
              <div className={styles.hotlineCallout}>
                <a href="tel:+918280788689" className={styles.hotlineLink}>
                  <span className={styles.hotlineGlow} />
                  <span>📞 Call Senior Partner: +91 82807 88689 ↗</span>
                </a>
              </div>
            </div>

            {/* Right Pane: Compact Skeuomorphic Lead Intake Card */}
            <div className={styles.blueprintIntakePane}>
              <div className={styles.intakeHeader}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} />
                  <span>{eyebrow}</span>
                </div>
                <h2 className={styles.intakeTitle}>{title}</h2>
                <p className={styles.intakeSub}>{subtitle}</p>
              </div>

              <HubSpotLeadForm id="blueprint-exec-form" formLocation={formLocation} />

              <div className={styles.trustBadgeBar}>
                <span className={styles.lockIcon}>📋</span>
                <span>Enterprise NDA Guaranteed &bull; 1-on-1 Senior Partner Review</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
