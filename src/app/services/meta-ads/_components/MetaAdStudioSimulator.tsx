'use client';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './MetaAdStudioSimulator.module.css';

type AdFormat = 'reel' | 'whatsapp' | 'leadform';

export default function MetaAdStudioSimulator() {
  const [activeFormat, setActiveFormat] = useState<AdFormat>('reel');
  const [likesCount, setLikesCount] = useState(1482);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikesCount(likesCount + 1);
      setHasLiked(true);
    } else {
      setLikesCount(likesCount - 1);
      setHasLiked(false);
    }
  };

  return (
    <section className={styles.section} id="ad-studio">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.studioPulse} />
            <span>Interactive Ad Creative Studio</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            Simulate Your High-Converting <span className="accent-gradient">Meta Ad Funnel</span>
          </h2>
          <p className={styles.subhead}>
            Test the three highest-performing ad architectures deployed by Marketing Copilot across Instagram, Facebook, and WhatsApp in India.
          </p>
        </ScrollReveal>

        {/* Format Switcher Tabs (Brand Blue & Gold) */}
        <div className={styles.formatSwitcher}>
          <button
            type="button"
            className={`${styles.formatBtn} ${activeFormat === 'reel' ? styles.formatBtnActive : ''}`}
            onClick={() => setActiveFormat('reel')}
          >
            <span>🎬 9:16 Instagram Reel Ad</span>
            <span className={styles.formatBadge}>Viral ROAS</span>
          </button>

          <button
            type="button"
            className={`${styles.formatBtn} ${activeFormat === 'whatsapp' ? styles.formatBtnActive : ''}`}
            onClick={() => setActiveFormat('whatsapp')}
          >
            <span>💬 Click-to-WhatsApp Chat</span>
            <span className={styles.formatBadge}>Lowest CPA</span>
          </button>

          <button
            type="button"
            className={`${styles.formatBtn} ${activeFormat === 'leadform' ? styles.formatBtnActive : ''}`}
            onClick={() => setActiveFormat('leadform')}
          >
            <span>📋 Instant Lead Capture</span>
            <span className={styles.formatBadge}>Pre-Filled</span>
          </button>
        </div>

        {/* Integrated Studio Canvas (Clean, No Card In Card!) */}
        <div className={styles.studioStage}>
          {/* Simulated Smartphone Device */}
          <div className={styles.deviceCol}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneSpeaker} />
              
              <div className={styles.phoneScreen}>
                {/* Top Status Bar */}
                <div className={styles.phoneTopBar}>
                  <span>9:41</span>
                  <div className={styles.topIcons}>
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* VIEW 1: 9:16 INSTAGRAM REEL AD */}
                {activeFormat === 'reel' && (
                  <div className={styles.reelView}>
                    <div className={styles.reelBackgroundMockup}>
                      <div className={styles.reelHookBadge}>
                        <span>⚡ 3-SEC HOOK</span>
                      </div>
                      <div className={styles.reelVideoCenterText}>
                        &quot;How This Bhubaneswar Brand Made ₹42 Lakhs in 72 Hours&quot;
                      </div>
                      <div className={styles.reelPlayIndicator}>▶ Video Playing</div>
                    </div>

                    <div className={styles.reelSidebar}>
                      <button 
                        type="button" 
                        className={styles.reelActionBtn}
                        onClick={handleLike}
                      >
                        <span style={{ color: hasLiked ? '#EF4444' : '#FFFFFF', fontSize: 18 }}>
                          {hasLiked ? '❤️' : '🤍'}
                        </span>
                        <span>{likesCount}</span>
                      </button>

                      <div className={styles.reelActionBtn}>
                        <span style={{ fontSize: 18 }}>💬</span>
                        <span>184</span>
                      </div>

                      <div className={styles.reelActionBtn}>
                        <span style={{ fontSize: 18 }}>↗️</span>
                        <span>342</span>
                      </div>
                    </div>

                    <div className={styles.reelBottomMeta}>
                      <div className={styles.reelProfileRow}>
                        <div className={styles.sponsorAvatar}>MC</div>
                        <span className={styles.sponsorName}>marketingcopilot.in</span>
                        <span className={styles.sponsoredTag}>Sponsored</span>
                      </div>
                      <p className={styles.reelCaption}>
                        Stop burning budget on boosted posts. Performance Reels tailored for Odisha...
                      </p>
                      
                      <Link href="/contact" className={styles.reelCtaButton}>
                        <span>Grow Your Business With Us</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                )}

                {/* VIEW 2: CLICK-TO-WHATSAPP DIRECT CHAT AD */}
                {activeFormat === 'whatsapp' && (
                  <div className={styles.whatsappView}>
                    <div className={styles.waHeader}>
                      <div className={styles.waAvatar}>MC</div>
                      <div className={styles.waHeaderInfo}>
                        <span className={styles.waTitle}>Marketing Copilot Strategist</span>
                        <span className={styles.waStatus}>● Active (India Desk)</span>
                      </div>
                      <span className={styles.waVerifyBadge}>✓ Verified</span>
                    </div>

                    <div className={styles.waChatBody}>
                      <div className={styles.chatBubbleAdContext}>
                        <span className={styles.chatAdSource}>Meta Ad · Bhubaneswar Campaign</span>
                        <p className={styles.chatAdHeadline}>
                          &quot;Schedule 1-on-1 Meta Ads Strategy Session&quot;
                        </p>
                      </div>

                      <div className={styles.chatBubbleIncoming}>
                        <p>Namaskar! 👋 Welcome to Marketing Copilot. Ready to scale your sales in Odisha?</p>
                        <span className={styles.chatTime}>09:41 AM</span>
                      </div>

                      <div className={styles.chatBubbleOutgoing}>
                        <p>Hi! We want qualified leads &amp; high ROAS via Instagram &amp; Facebook.</p>
                        <span className={styles.chatTime}>09:42 AM ✓✓</span>
                      </div>

                      <div className={styles.chatBubbleIncoming}>
                        <p>Perfect! Here is our direct 30-min strategy scheduler:</p>
                        <div className={styles.chatBookingCard}>
                          <span>📅 Select Free Strategy Slot</span>
                          <span className={styles.chatBookingSub}>Zoom or Kharvela Nagar Office</span>
                        </div>
                        <span className={styles.chatTime}>09:42 AM</span>
                      </div>
                    </div>

                    <div className={styles.waInputBar}>
                      <span className={styles.waInputPlaceholder}>Message our strategist...</span>
                      <span className={styles.waSendIcon}>➤</span>
                    </div>
                  </div>
                )}

                {/* VIEW 3: INSTANT LEAD CAPTURE FORM */}
                {activeFormat === 'leadform' && (
                  <div className={styles.leadFormView}>
                    <div className={styles.formHeader}>
                      <div className={styles.formLogoBadge}>MC</div>
                      <h4 className={styles.formTitle}>Exclusive Growth Plan</h4>
                      <p className={styles.formSub}>Marketing Copilot · Bhubaneswar</p>
                    </div>

                    <div className={styles.formBody}>
                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Full Name</label>
                        <div className={styles.inputMock}>Priyadarshi Mohapatra</div>
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>WhatsApp Number</label>
                        <div className={styles.inputMock}>+91 94371 XXXXX</div>
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Bhubaneswar Location</label>
                        <div className={styles.inputMock}>Patia / Infocity Corridor</div>
                      </div>

                      <div className={styles.formGuaranteePill}>
                        <span>🔒 100% Privacy · Verified Phone Lead</span>
                      </div>

                      <Link href="/contact" className={styles.formSubmitBtn}>
                        <span>Submit &amp; Schedule Strategy Session</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Punchy Strategy Bullet Points & KPIs (Short text!) */}
          <div className={styles.detailsCol}>
            {activeFormat === 'reel' && (
              <div className={styles.formatDetailPane}>
                <span className={styles.detailPill}>VIRAL ATTENTION ENGINE</span>
                <h3 className={styles.detailTitle}>
                  9:16 Vertical Video Reels That Stop the Thumb in 3 Seconds
                </h3>
                <p className={styles.detailLead}>
                  In Bhubaneswar, generic stock banners get skipped. We script, edit, and sound-engineer high-velocity Reels with psychological pattern interrupts that compel viewers to take action.
                </p>

                <div className={styles.bulletsList}>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletDot}>✓</span>
                    <span><strong>3-Second Visual Hook:</strong> High-energy pattern interrupts and Odia/English relatable hooks that prevent drop-offs.</span>
                  </div>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletDot}>✓</span>
                    <span><strong>Weekly Creative Sprints:</strong> Testing 6–8 new video variations weekly to permanently eliminate ad fatigue.</span>
                  </div>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletDot}>✓</span>
                    <span><strong>Advantage+ AI Scaling:</strong> Neural budget optimization matching winning cuts to active buyers.</span>
                  </div>
                </div>

                <div className={styles.kpiStrip}>
                  <div className={styles.kpiTile}>
                    <span className={styles.kpiNum}>4.8X</span>
                    <span className={styles.kpiLabel}>Average ROAS</span>
                  </div>
                  <div className={styles.kpiTile}>
                    <span className={styles.kpiNum}>72 Hrs</span>
                    <span className={styles.kpiLabel}>Creative Turnaround</span>
                  </div>
                  <div className={styles.kpiTile}>
                    <span className={styles.kpiNum}>-45%</span>
                    <span className={styles.kpiLabel}>Lower CPA vs Static</span>
                  </div>
                </div>
              </div>
            )}

            {activeFormat === 'whatsapp' && (
              <div className={styles.formatDetailPane}>
                <span className={styles.detailPill}>HIGHEST CONVERSION IN ODISHA</span>
                <h3 className={styles.detailTitle}>
                  Click-to-WhatsApp Funnels That Bypass Slow Form Fills
                </h3>
                <p className={styles.detailLead}>
                  Odisha buyers prefer direct messaging. Rather than making prospects fill out long forms, our ads launch WhatsApp with automated qualification and immediate appointment booking.
                </p>

                <div className={styles.bulletsList}>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletDot}>✓</span>
                    <span><strong>Zero Form Friction:</strong> 1-tap opens WhatsApp with pre-filled message prompts.</span>
                  </div>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletDot}>✓</span>
                    <span><strong>Automated Qualification:</strong> Chatbot flows filter budget and intent before alerting your sales rep.</span>
                  </div>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletDot}>✓</span>
                    <span><strong>Verified Contact Capture:</strong> 100% authentic mobile numbers saved directly into your CRM.</span>
                  </div>
                </div>

                <div className={styles.kpiStrip}>
                  <div className={styles.kpiTile}>
                    <span className={styles.kpiNum}>₹14</span>
                    <span className={styles.kpiLabel}>Lowest Cost Per Lead</span>
                  </div>
                  <div className={styles.kpiTile}>
                    <span className={styles.kpiNum}>84%</span>
                    <span className={styles.kpiLabel}>Chat Open Rate</span>
                  </div>
                  <div className={styles.kpiTile}>
                    <span className={styles.kpiNum}>3.2X</span>
                    <span className={styles.kpiLabel}>Faster Sales Close</span>
                  </div>
                </div>
              </div>
            )}

            {activeFormat === 'leadform' && (
              <div className={styles.formatDetailPane}>
                <span className={styles.detailPill}>HIGH-TICKET PIPELINE</span>
                <h3 className={styles.detailTitle}>
                  Native In-App Instant Forms Pre-Filled by Meta AI
                </h3>
                <p className={styles.detailLead}>
                  Ideal for real estate, healthcare, and higher education. Forms load in 0.1 seconds inside Facebook/Instagram with verified user details pre-populated.
                </p>

                <div className={styles.bulletsList}>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletDot}>✓</span>
                    <span><strong>Instant Load:</strong> Zero web page load lag; native in-app opening.</span>
                  </div>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletDot}>✓</span>
                    <span><strong>Conditional Logic:</strong> Automatically filters out low-budget prospects.</span>
                  </div>
                  <div className={styles.bulletItem}>
                    <span className={styles.bulletDot}>✓</span>
                    <span><strong>Instant Sales Dispatch:</strong> Webhook delivers lead details to your sales team in under 60 seconds.</span>
                  </div>
                </div>

                <div className={styles.kpiStrip}>
                  <div className={styles.kpiTile}>
                    <span className={styles.kpiNum}>38%</span>
                    <span className={styles.kpiLabel}>Completion Rate</span>
                  </div>
                  <div className={styles.kpiTile}>
                    <span className={styles.kpiNum}>&lt; 60s</span>
                    <span className={styles.kpiLabel}>Lead Dispatch</span>
                  </div>
                  <div className={styles.kpiTile}>
                    <span className={styles.kpiNum}>+220%</span>
                    <span className={styles.kpiLabel}>Qualified Pipeline</span>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.ctaRow}>
              <Link href="/contact" className={styles.studioActionBtn}>
                <span>Deploy This Ad System</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
