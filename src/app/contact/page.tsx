'use client';
import ScrollReveal from '@/components/ScrollReveal';
import HubSpotLeadForm from '@/components/HubSpotLeadForm';
import ContactGrowthCard from '@/components/ContactGrowthCard';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.heroBg} />
      <div className={styles.ambientGlowLeft} />
      <div className={styles.ambientGlowRight} />

      <div className="container">
        <div className={styles.grid}>
          {/* ══════════════════════════════════════════════════
              LEFT INFO PANE — MINIMALIST & PROFESSIONAL
             ══════════════════════════════════════════════════ */}
          <div className={styles.left}>
            <ScrollReveal className={styles.fullHeightReveal}>
              <div>
                <div className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} />
                <span>GET IN TOUCH &bull; BHUBANESWAR HQ &bull; SERVING BUSINESSES ACROSS INDIA</span>
              </div>

              <h1 className={`display-hero ${styles.title}`}>
                Build a Stronger Digital{' '}
                <span className={`accent-gradient ${styles.heroAccent}`}>Presence Across India</span>
              </h1>

              <div className={styles.sub}>
                <p className={styles.subLead}>
                  Partner with a results-driven digital growth team to scale your brand&apos;s visibility, leads, and revenue across India.
                </p>
              </div>

              {/* Minimalist Contact Detail Cards */}
              <div className={styles.contactDetails}>
                <div className={styles.detailCard}>
                  <div className={styles.detailIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Email</span>
                    <a href="mailto:info@marketingcopilot.in" className={styles.detailVal}>
                      info@marketingcopilot.in
                    </a>
                  </div>
                </div>

                <div className={styles.detailCard}>
                  <div className={styles.detailIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Office (HQ)</span>
                    <span className={styles.detailVal}>Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar, Odisha 751001</span>
                  </div>
                </div>

                <div className={styles.detailCard}>
                  <div className={styles.detailIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Phone</span>
                    <a href="tel:+918280788689" className={styles.detailVal}>
                      +91 82807 88689 <span className={styles.slaPill}>Contact Now</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.socials}>
                <a
                  href="https://www.linkedin.com/company/marketingcopilot-in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label="LinkedIn"
                >
                  <svg className={styles.socialIcon} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/marketingcopilot.in?xtok=dG04ems2NzZwNWxo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label="Instagram"
                >
                  <svg className={styles.socialIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/share/19FJ8jPnnw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label="Facebook"
                >
                  <svg className={styles.socialIcon} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://youtube.com/@marketingcopilotbynsdma?si=qb4vYjHyxxp5NiMt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label="YouTube"
                >
                  <svg className={styles.socialIcon} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FFFFFF"/>
                  </svg>
                  <span>YouTube</span>
                </a>
                <a
                  href="https://x.com/Marketingcopilo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label="X (Twitter)"
                >
                  <svg className={styles.socialIcon} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>Twitter (X)</span>
                </a>
              </div>
              </div>

              {/* Interactive Growth Strategy Card */}
              <div className={styles.growthCardSlot}>
                <ContactGrowthCard />
              </div>
            </ScrollReveal>
          </div>

          {/* ══════════════════════════════════════════════════
              RIGHT PANE: MINIMALIST & PROFESSIONAL FORM CARD
             ══════════════════════════════════════════════════ */}
          <div className={styles.right} id="hubspot-form">
            <ScrollReveal delay={100} className={styles.fullHeightReveal}>
              <div className={styles.form}>
                <div>
                  <div className={styles.formHeader}>
                    <div className={styles.formBadge}>
                      <span className={styles.formBadgeDot} />
                      <span>STRATEGY CONSULTATION</span>
                    </div>
                    <h3 className={styles.formTitle}>Request a Consultation</h3>
                    <p className={styles.formSubtitle}>Direct strategist response within 4 hours.</p>
                  </div>

                  <HubSpotLeadForm formLocation="/contact" />
                </div>

                <div className={styles.formFooterStrip}>
                  <div className={styles.formTrustNote}>
                    <span className={styles.trustGreenDot} />
                    <span>100% Confidential &bull; Response within 4 hrs &bull; No Spam</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
