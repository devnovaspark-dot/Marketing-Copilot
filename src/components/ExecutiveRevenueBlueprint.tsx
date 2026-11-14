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
  title = 'Book Your Free 90-Day Revenue Blueprint',
  subtitle = 'Connect directly with our senior Indian growth partners. Formulate a predictable scaling roadmap tailored for your market.',
  eyebrow = '🇮🇳 FOUNDER & CXO ADVISORY • 90-DAY SCALE',
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
              {/* Hardware Bar */}
              <div className={styles.deskHardwareBar}>
                <div className={styles.executiveBadge}>
                  <span className={styles.copperDot} />
                  <span>🇮🇳 EXECUTIVE DESK &bull; INDIA ADVISORY</span>
                </div>
                <div className={styles.hardwareScrew} title="Hardware Console Accent" />
              </div>

              <div className={styles.advisoryHeader}>
                <h3 className={styles.advisoryTitle}>
                  Scale to a Predictable Revenue Engine
                </h3>
                <p className={styles.advisoryLead}>
                  A milestone-driven growth roadmap tailored for Indian founders, D2C brands, and CMOs seeking profitable unit economics.
                </p>
              </div>

              {/* Full Visible Strategy War Room Showcase with Location/Status Badge */}
              <div className={styles.visualImageCard}>
                <Image
                  src="/images/SEO strategy_team.jpg"
                  alt="Senior Growth Strategy War Room & Execution Team"
                  fill
                  className={styles.panelImg}
                  priority={false}
                />
                <div className={styles.imageOverlayPill}>
                  <span className={styles.imageOverlayDot} />
                  <span>🏛️ Strategy War Room &bull; Senior Partners</span>
                </div>
              </div>

              {/* Indian Revenue Metrics Tray */}
              <div className={styles.metricsTray}>
                <div className={styles.metricCell}>
                  <span className={styles.metricNum}>50+</span>
                  <span className={styles.metricLbl}>Enterprises Scaled</span>
                </div>
                <div className={styles.metricCell}>
                  <span className={styles.metricNum}>360°</span>
                  <span className={styles.metricLbl}>Funnel Mastery</span>
                </div>
                <div className={styles.metricCell}>
                  <span className={styles.metricNum}>1-on-1</span>
                  <span className={styles.metricLbl}>Partner Call</span>
                </div>
              </div>

              {/* Tactile Hardware Micro-Tiles */}
              <div className={styles.tactileTileList}>
                <div className={styles.tactileTile}>
                  <span className={styles.tileIcon}>🇮🇳</span>
                  <span className={styles.tileText}>Full-Funnel CAC, Margin &amp; LTV Architecture</span>
                </div>
                <div className={styles.tactileTile}>
                  <span className={styles.tileIcon}>📈</span>
                  <span className={styles.tileText}>90-Day Execution Roadmap for Indian Markets</span>
                </div>
                <div className={styles.tactileTile}>
                  <span className={styles.tileIcon}>🤝</span>
                  <span className={styles.tileText}>Direct Senior Partner Alignment &bull; Strict NDA</span>
                </div>
              </div>

              {/* Direct Actions: Call + WhatsApp */}
              <div className={styles.deskActions}>
                <a href="tel:+918280788689" className={styles.hotlineLink} title="Direct call with senior growth partner">
                  <span>📞 Call Senior Partner: <strong>+91 82807 88689</strong> ↗</span>
                </a>

                <a
                  href={`https://wa.me/918280788689?text=${encodeURIComponent(
                    'Hi Marketing Copilot, I would like to request an executive 90-day revenue blueprint for my company.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.deskWhatsappBtn}
                >
                  <span className={styles.btnGlowIndicator} />
                  <span>💬 Chat on WhatsApp with Senior Partner ↗</span>
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
                <span>🇮🇳 Enterprise NDA Guaranteed &bull; 1-on-1 Senior Partner Review</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
