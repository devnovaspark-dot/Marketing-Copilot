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
  title = 'Book a Free 90-Day Revenue Blueprint',
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

              {/* Secondary Visual Showcase: Modern Studio & Architecture */}
              <div className={styles.secondaryVisualCard}>
                <Image
                  src="/images/Modern Marketing Copilot Office Reception.webp"
                  alt="Marketing Copilot Bhubaneswar Studio & Revenue Architecture Facility"
                  fill
                  className={styles.panelImg}
                  priority={false}
                />
                <div className={styles.secondaryOverlayPill}>
                  <span className={styles.secondaryOverlayDot} />
                  <span>📐 Bhubaneswar HQ &bull; Revenue Architecture</span>
                </div>
              </div>

              {/* Executive 90-Day Blueprint Deliverables Matrix */}
              <div className={styles.deliverablesMatrix}>
                <div className={styles.deliverableRow}>
                  <span className={styles.deliverableIcon}>💼</span>
                  <div className={styles.deliverableTextCol}>
                    <span className={styles.deliverableTitle}>Margin &amp; EBITDA Architecture</span>
                    <span className={styles.deliverableDesc}>Align customer acquisition cost with contribution margins and cash flow</span>
                  </div>
                </div>
                <div className={styles.deliverableRow}>
                  <span className={styles.deliverableIcon}>📊</span>
                  <div className={styles.deliverableTextCol}>
                    <span className={styles.deliverableTitle}>Unified Full-Funnel Telemetry</span>
                    <span className={styles.deliverableDesc}>Consolidate Google, Meta, LinkedIn &amp; SEO into single blended CAC</span>
                  </div>
                </div>
                <div className={styles.deliverableRow}>
                  <span className={styles.deliverableIcon}>🎯</span>
                  <div className={styles.deliverableTextCol}>
                    <span className={styles.deliverableTitle}>Quarterly Scale Milestones</span>
                    <span className={styles.deliverableDesc}>30-60-90 day execution benchmarks tailored for Indian market dynamics</span>
                  </div>
                </div>
                <div className={styles.deliverableRow}>
                  <span className={styles.deliverableIcon}>🤝</span>
                  <div className={styles.deliverableTextCol}>
                    <span className={styles.deliverableTitle}>Direct Partner Strategic Alignment</span>
                    <span className={styles.deliverableDesc}>Confidential 1-on-1 with founders &amp; partners under strict mutual NDA</span>
                  </div>
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
              {/* Form Top Specular Gradient Bar */}
              <div className={styles.formTopAccentBar} />

              <div className={styles.intakeHeader}>
                <div className={styles.intakeTopRow}>
                  <div className={styles.eyebrow}>
                    <span className={styles.eyebrowDot} />
                    <span>{eyebrow}</span>
                  </div>

                  {/* Senior Advisory Verification Badge with Avatars */}
                  <div className={styles.strategistAvatarsPill}>
                    <div className={styles.avatarCluster}>
                      <span className={styles.avatarMini} title="Senior Strategist NS">NS</span>
                      <span className={styles.avatarMini} title="Performance Lead MC">MC</span>
                      <span className={styles.avatarMini} title="Growth Architect UR">UR</span>
                    </div>
                    <span className={styles.advisorText}>Partner Desk</span>
                  </div>
                </div>

                <h2 className={styles.intakeTitle}>{title}</h2>
                <p className={styles.intakeSub}>{subtitle}</p>

                {/* Micro Indian Trust & Rating Bar */}
                <div className={styles.formTrustBar}>
                  <div className={styles.trustItem}>
                    <span className={styles.trustFlag}>🇮🇳</span>
                    <span>Executive Advisory</span>
                  </div>
                  <div className={styles.trustDivider}>•</div>
                  <div className={styles.trustItem}>
                    <span className={styles.stars}>★★★★★</span>
                    <span>Confidential NDA</span>
                  </div>
                  <div className={styles.trustDivider}>•</div>
                  <div className={styles.trustItem}>
                    <span className={styles.clockIcon}>⚡</span>
                    <span>Senior Partners</span>
                  </div>
                </div>
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
