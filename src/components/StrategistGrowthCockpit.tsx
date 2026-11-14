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
  defaultTopic = '🎯 Growth Strategy & Performance Marketing',
  title = 'Book Your Free Strategy Consultation',
  subtitle = 'Submit your details below for a confidential growth blueprint tailored to your brand.',
  eyebrow = 'CONFIDENTIAL STRATEGY DISPATCH • NO OBLIGATION',
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
              <div>
                <div className={styles.deskHardwareBar}>
                  <div className={styles.liveStatusPill}>
                    <span className={styles.liveDot} />
                    <span>STRATEGY DESK &bull; INDIA HQ</span>
                  </div>
                  <div className={styles.hardwareScrew} title="Console Hardware Accent" />
                </div>

                <div className={styles.deskHeader}>
                  <h3 className={styles.deskTitle}>
                    Talk Directly With a Growth Strategist
                  </h3>
                  <p className={styles.deskSub}>
                    A confidential 1-on-1 strategy session to audit acquisition channels and map high-ROAS growth.
                  </p>
                </div>

                {/* Full Visible Agency Photo Showcase — 100% Clean, Zero Text Overlaid */}
                <div className={styles.visualImageCard}>
                  <Image
                    src="/images/Modern Marketing Copilot Office Reception.webp"
                    alt="Marketing Copilot Innovation Studio Reception"
                    fill
                    className={styles.panelImg}
                    priority={false}
                  />
                </div>

                {/* Tactile Hardware Micro-Tiles */}
                <div className={styles.tactileTileList}>
                  <div className={styles.tactileTile}>
                    <span className={styles.tileIcon}>⚡</span>
                    <span className={styles.tileText}>4-Hour Direct Turnaround</span>
                  </div>
                  <div className={styles.tactileTile}>
                    <span className={styles.tileIcon}>🔒</span>
                    <span className={styles.tileText}>100% Confidential NDA Protected</span>
                  </div>
                </div>
              </div>

              {/* 3D Illuminated Tactile WhatsApp Push Switch */}
              <div className={styles.deskWhatsappCallout}>
                <a
                  href={`https://wa.me/918763570630?text=${encodeURIComponent(
                    `Hi Aarav, I would like to book a free growth strategy consultation regarding ${defaultTopic} for my business.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.deskWhatsappBtn}
                >
                  <span className={styles.btnGlowIndicator} />
                  <span>💬 Chat on WhatsApp (Avg. 18m) ↗</span>
                </a>
              </div>
            </div>

            {/* Right Pane: Compact Skeuomorphic Lead Intake Card */}
            <div className={styles.formIntakePane}>
              <div className={styles.intakeHeader}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} />
                  <span>{eyebrow}</span>
                </div>
                <h2 className={styles.intakeTitle}>{title}</h2>
                <p className={styles.intakeSub}>{subtitle}</p>
              </div>

              <HubSpotLeadForm id="growth-cockpit-form" formLocation={formLocation} />

              <div className={styles.trustBadgeBar}>
                <span className={styles.lockIcon}>🛡️</span>
                <span>100% Confidential NDA &bull; 4-Hour Turnaround &bull; Zero Spam</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
