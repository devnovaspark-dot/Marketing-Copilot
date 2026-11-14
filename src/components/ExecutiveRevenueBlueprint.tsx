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
            {/* Left Pane: Signature Navy Blue Executive Advisory */}
            <div className={styles.advisoryPane}>
              <div>
                <div className={styles.executiveBadge}>
                  <span className={styles.copperDot} />
                  <span>EXECUTIVE DESK &bull; INDIA ADVISORY</span>
                </div>

                <div className={styles.advisoryHeader}>
                  <h3 className={styles.advisoryTitle}>
                    Scale to a Predictable Revenue Engine
                  </h3>
                  <p className={styles.advisoryLead}>
                    A milestone-driven growth roadmap tailored for founders and CMOs seeking profitable unit economics and compounding scale.
                  </p>
                </div>

                {/* Real Photography Asset Card: Senior Growth Workspace */}
                <div className={styles.visualImageCard}>
                  <Image
                    src="/images/team_office.jpg"
                    alt="Senior Growth Architecture Team"
                    fill
                    className={styles.panelImg}
                    priority={false}
                  />
                  <div className={styles.imgOverlayPill}>
                    <div className={styles.workspaceMeta}>
                      <span className={styles.workspaceDot} />
                      <span className={styles.workspaceName}>Senior Revenue Principals</span>
                    </div>
                    <span className={styles.executiveLevel}>CXO Advisory</span>
                  </div>
                </div>

                {/* Minimalist 2-Bullet Highlights */}
                <div className={styles.quickBullets}>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletCheck}>✓</span>
                    <span>Full-Funnel CAC &amp; Margin Architecture</span>
                  </div>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletCheck}>✓</span>
                    <span>Direct Senior Partner Alignment (No Junior Reps)</span>
                  </div>
                </div>
              </div>

              {/* Direct Partner Hotline */}
              <div className={styles.hotlineCallout}>
                <a href="tel:+918280788689" className={styles.hotlineLink}>
                  <span>📞 Call Senior Partner: +91 82807 88689 ↗</span>
                </a>
              </div>
            </div>

            {/* Right Pane: Compact HubSpot Lead Form */}
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

              <div className={styles.trustMiniRow}>
                <span className={styles.copperDot} style={{ width: 5, height: 5 }} />
                <span>Enterprise NDA Guaranteed &bull; 1-on-1 Senior Partner Review</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
