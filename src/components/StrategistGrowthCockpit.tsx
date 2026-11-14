'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import HubSpotLeadForm from '@/components/HubSpotLeadForm';
import styles from './StrategistGrowthCockpit.module.css';

interface StrategistGrowthCockpitProps {
  id?: string;
  defaultTopic?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  formLocation?: string;
}

export default function StrategistGrowthCockpit({
  id = 'growth-strategy-cockpit',
  defaultTopic = '🎯 Business Growth & Performance Marketing',
  title = 'Book a Free Growth Strategy Consultation',
  subtitle = 'Submit your details below. Get an actionable growth roadmap tailored for your business in India from our senior strategists.',
  eyebrow = '🇮🇳 100% FREE STRATEGY CONSULTATION • NO OBLIGATION',
  formLocation = '/',
}: StrategistGrowthCockpitProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.ambientGlowTop} />
      <div className="container">
        <ScrollReveal>
          <div className={styles.dispatchCockpit}>
            {/* Top Metallic Bevel Streamer */}
            <div className={styles.consoleTopBevel} />

            {/* Left Pane: Skeuomorphic Navy Blue Growth Console */}
            <div className={styles.strategistDeskPane}>
              {/* Header Status Bar */}
              <div className={styles.deskHardwareBar}>
                <div className={styles.liveStatusPill}>
                  <span className={styles.liveDot} />
                  <span>🇮🇳 STRATEGY DESK &bull; BHUBANESWAR HQ</span>
                </div>
                <div className={styles.hardwareScrew} title="Console Hardware Accent" />
              </div>

              <div className={styles.deskHeader}>
                <h3 className={styles.deskTitle}>
                  Connect With India&apos;s Top Growth Strategists
                </h3>
                <p className={styles.deskSub}>
                  Confidential 1-on-1 strategy call to audit your acquisition channels, SEO &amp; ads for Indian markets.
                </p>
              </div>

              {/* Full Visible Agency Photo Showcase with Location Pill */}
              <div className={styles.visualImageCard}>
                <Image
                  src="/images/Modern Marketing Copilot Office Reception.webp"
                  alt="Marketing Copilot Innovation Studio Reception"
                  fill
                  className={styles.panelImg}
                  priority={false}
                />
                <div className={styles.imageOverlayPill}>
                  <span className={styles.imageOverlayDot} />
                  <span>📍 Bhubaneswar Studio &bull; Pan-India Advisory</span>
                </div>
              </div>

              {/* Key Indian Growth Metrics Tray */}
              <div className={styles.metricsTray}>
                <div className={styles.metricCell}>
                  <span className={styles.metricNum}>100+</span>
                  <span className={styles.metricLbl}>Brands Scaled</span>
                </div>
                <div className={styles.metricCell}>
                  <span className={styles.metricNum}>₹15+ Cr</span>
                  <span className={styles.metricLbl}>Revenue Impact</span>
                </div>
                <div className={styles.metricCell}>
                  <span className={styles.metricNum}>4-Hour</span>
                  <span className={styles.metricLbl}>Direct Callback</span>
                </div>
              </div>

              {/* Tactile Hardware Micro-Tiles */}
              <div className={styles.tactileTileList}>
                <div className={styles.tactileTile}>
                  <span className={styles.tileIcon}>🇮🇳</span>
                  <span className={styles.tileText}>Pan-India Localized Search &amp; Paid Media</span>
                </div>
                <div className={styles.tactileTile}>
                  <span className={styles.tileIcon}>⚡</span>
                  <span className={styles.tileText}>100% Free 30-Min Growth Audit &amp; Blueprint</span>
                </div>
                <div className={styles.tactileTile}>
                  <span className={styles.tileIcon}>🔒</span>
                  <span className={styles.tileText}>Confidential Non-Disclosure (NDA) Protected</span>
                </div>
              </div>

              {/* Direct Actions: Call + WhatsApp */}
              <div className={styles.deskActions}>
                <a href="tel:+918280788689" className={styles.hotlineLink} title="Direct call with senior strategist">
                  <span>📞 Call Senior Desk: <strong>+91 82807 88689</strong> ↗</span>
                </a>

                <a
                  href={`https://wa.me/918280788689?text=${encodeURIComponent(
                    `Hi Marketing Copilot, I would like to book a free growth consultation regarding ${defaultTopic} for my business.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.deskWhatsappBtn}
                >
                  <span className={styles.btnGlowIndicator} />
                  <span>💬 Chat on WhatsApp with Strategist (Avg. 15m) ↗</span>
                </a>
              </div>
            </div>

            {/* Right Pane: Compact Skeuomorphic Lead Intake Card */}
            <div className={styles.formIntakePane}>
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
                    <span className={styles.advisorText}>Active Growth Desk</span>
                  </div>
                </div>

                <h2 className={styles.intakeTitle}>{title}</h2>
                <p className={styles.intakeSub}>{subtitle}</p>

                {/* Micro Indian Trust & Rating Bar */}
                <div className={styles.formTrustBar}>
                  <div className={styles.trustItem}>
                    <span className={styles.trustFlag}>🇮🇳</span>
                    <span>Pan-India Growth</span>
                  </div>
                  <div className={styles.trustDivider}>•</div>
                  <div className={styles.trustItem}>
                    <span className={styles.stars}>★★★★★</span>
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className={styles.trustDivider}>•</div>
                  <div className={styles.trustItem}>
                    <span className={styles.clockIcon}>⚡</span>
                    <span>4-Hr Response</span>
                  </div>
                </div>
              </div>

              <HubSpotLeadForm id="growth-cockpit-form" formLocation={formLocation} />

              <div className={styles.trustBadgeBar}>
                <span className={styles.lockIcon}>🛡️</span>
                <span>🇮🇳 Serving Pan-India &bull; 100% Confidential NDA &bull; 4-Hr Turnaround</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
