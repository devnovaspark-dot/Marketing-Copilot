import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import styles from './SocialReelsStudioSimulator.module.css';

type ReelFormat = 'cinematic' | 'founder' | 'bts';

export default function SocialReelsStudioSimulator() {
  const [activeFormat, setActiveFormat] = useState<ReelFormat>('cinematic');
  const [likes, setLikes] = useState<number>(2840);
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  const formats = {
    cinematic: {
      tag: '9:16 CINEMATIC COMMERCIAL REEL',
      hook: '⚡ 3-SEC PATTERN INTERRUPT',
      headline: 'How Bhubaneswar’s Leading Lifestyle Brand Scaled to ₹50 Lakhs/Mo',
      sound: 'Trending Commercial Audio · 142K Uses',
      views: '184.2K',
      shares: '1,420',
      saves: '3,890',
      watchTime: '88% Completion',
      inquiries: '85+ Direct WhatsApp Chats',
      summary: 'High-production 4K Sony FX3 cinematography, dynamic kinetic captions, color-graded aesthetic, and an irresistible call-to-action driving Bhubaneswar buyers into your funnel.',
    },
    founder: {
      tag: 'AUTHENTIC FOUNDER STORYTELLING',
      hook: '🎙️ RAW MICROPHONE HOOK',
      headline: 'The Truth About Starting an Odisha Business That Nobody Talks About',
      sound: 'Original Voice Audio · Direct Mic',
      views: '96.5K',
      shares: '2,840',
      saves: '4,120',
      watchTime: '92% Completion',
      inquiries: '120+ High-Ticket B2B Inquiries',
      summary: 'Raw, authentic founder thought leadership establishing deep authority and trust with investors, corporate buyers, and high-ticket clients across Bhubaneswar and Cuttack.',
    },
    bts: {
      tag: 'HYPERLOCAL STORE / CLINIC WALKTHROUGH',
      hook: '📍 PATIA & SAHEED NAGAR TOUR',
      headline: 'Step Inside Our Bhubaneswar Studio: What Makes Our Process Different',
      sound: 'Lively Ambient Sound & Odia Hook',
      views: '142.0K',
      shares: '980',
      saves: '2,150',
      watchTime: '84% Completion',
      inquiries: '65+ In-Store Showroom Walk-Ins',
      summary: 'Showroom, clinic, or studio immersive tour giving prospective clients a behind-the-scenes look that completely eliminates hesitation and drives physical footfall.',
    },
  };

  const current = formats[activeFormat];

  return (
    <section className={styles.section} id="reels-studio">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.pulseDot} />
            <span>Interactive Reel &amp; Content Studio</span>
          </div>
          <h2 className={`display-md ${styles.headline}`}>
            Thumb-Stopping Content That <span className="accent-gradient">Captures Odisha</span>
          </h2>
          <p className={styles.subhead}>
            No boring Canva static posters. We script, film, and edit high-velocity commercial video Reels that turn casual scrolling into paying clients.
          </p>
        </ScrollReveal>

        {/* Format Selector Tabs */}
        <div className={styles.formatSwitcher}>
          <button
            type="button"
            className={`${styles.formatBtn} ${activeFormat === 'cinematic' ? styles.formatBtnActive : ''}`}
            onClick={() => setActiveFormat('cinematic')}
          >
            <span>🎬 9:16 Cinematic Commercial</span>
            <span className={styles.formatBadge}>Viral Retention</span>
          </button>

          <button
            type="button"
            className={`${styles.formatBtn} ${activeFormat === 'founder' ? styles.formatBtnActive : ''}`}
            onClick={() => setActiveFormat('founder')}
          >
            <span>🎙️ Founder Storytelling</span>
            <span className={styles.formatBadge}>High Trust</span>
          </button>

          <button
            type="button"
            className={`${styles.formatBtn} ${activeFormat === 'bts' ? styles.formatBtnActive : ''}`}
            onClick={() => setActiveFormat('bts')}
          >
            <span>📍 Hyperlocal Walkthrough</span>
            <span className={styles.formatBadge}>Store Footfall</span>
          </button>
        </div>

        {/* Stage Console */}
        <div className={styles.studioStage}>
          {/* Smartphone Phone Frame */}
          <div className={styles.deviceCol}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneSpeaker} />
              
              <div className={styles.phoneScreen}>
                {/* Status Bar */}
                <div className={styles.phoneTopBar}>
                  <span>9:41</span>
                  <div className={styles.topIcons}>
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Reel Video Canvas */}
                <div className={styles.reelCanvas}>
                  <div className={styles.reelHeader}>
                    <span className={styles.liveTag}>LIVE REEL</span>
                    <span className={styles.reelSoundBadge}>🎵 {current.sound}</span>
                  </div>

                  <div className={styles.reelCenterHook}>
                    <span className={styles.hookPill}>{current.hook}</span>
                    <div className={styles.hookText}>&quot;{current.headline}&quot;</div>
                    <div className={styles.kineticCaptions}>
                      <span>[Kinetic Subtitles Syncing...]</span>
                    </div>
                  </div>

                  {/* Reel Floating Engagement Rail */}
                  <div className={styles.engagementRail}>
                    <button type="button" className={styles.engageBtn} onClick={handleLike}>
                      <span className={styles.engageIcon} style={{ color: hasLiked ? '#EF4444' : '#FFFFFF' }}>
                        {hasLiked ? '❤️' : '🤍'}
                      </span>
                      <span className={styles.engageCount}>{likes.toLocaleString()}</span>
                    </button>

                    <div className={styles.engageBtn}>
                      <span className={styles.engageIcon}>💬</span>
                      <span className={styles.engageCount}>342</span>
                    </div>

                    <div className={styles.engageBtn}>
                      <span className={styles.engageIcon}>↗️</span>
                      <span className={styles.engageCount}>{current.shares}</span>
                    </div>

                    <div className={styles.engageBtn}>
                      <span className={styles.engageIcon}>🔖</span>
                      <span className={styles.engageCount}>{current.saves}</span>
                    </div>
                  </div>

                  {/* Reel Bottom User Info */}
                  <div className={styles.reelBottomBar}>
                    <div className={styles.brandRow}>
                      <div className={styles.brandAvatar}>MC</div>
                      <span className={styles.brandHandle}>@marketingcopilot.bbsr</span>
                      <span className={styles.followBadge}>Follow</span>
                    </div>
                    <p className={styles.reelCaption}>
                      Transforming brands across Bhubaneswar with sub-second growth engineering... #bhubaneswar #odishabusiness
                    </p>
                    <div className={styles.audioTicker}>
                      <span>♫ Trending Audio · Commercial License Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Performance Telemetry */}
          <div className={styles.telemetryCol}>
            <div className={styles.telemetryHeader}>
              <span className={styles.telemetryPill}>{current.tag}</span>
              <h3 className={styles.telemetryTitle}>Verified Creative Performance</h3>
              <p className={styles.telemetryDesc}>{current.summary}</p>
            </div>

            <div className={styles.metricsMatrix}>
              <div className={styles.metricTile}>
                <span className={styles.mKey}>Organic Views Target</span>
                <span className={styles.mVal}>{current.views}</span>
                <span className={styles.mSub}>Odisha &amp; Regional Reach</span>
              </div>

              <div className={styles.metricTile}>
                <span className={styles.mKey}>Video Retention</span>
                <span className={styles.mVal} style={{ color: '#10B981' }}>{current.watchTime}</span>
                <span className={styles.mSub}>High Algorithm Affinity</span>
              </div>

              <div className={styles.metricTile}>
                <span className={styles.mKey}>Direct Inquiries</span>
                <span className={styles.mVal} style={{ color: '#0B2093' }}>{current.inquiries}</span>
                <span className={styles.mSub}>Direct to Sales Leads</span>
              </div>

              <div className={styles.metricTile}>
                <span className={styles.mKey}>Save &amp; Share Rate</span>
                <span className={styles.mVal}>7.4%</span>
                <span className={styles.mSub}>Top 1% Instagram Benchmark</span>
              </div>
            </div>

            <div className={styles.productionChipBox}>
              <span className={styles.prodLabel}>PRODUCTION GEAR DEPLOYED:</span>
              <div className={styles.prodChips}>
                <span className={styles.chip}>Sony FX3 Cinema</span>
                <span className={styles.chip}>DJI RS3 Gimbal</span>
                <span className={styles.chip}>Sennheiser Wireless Mics</span>
                <span className={styles.chip}>DaVinci Resolve Color Grade</span>
              </div>
            </div>

            <div className={styles.actionRow}>
              <BeamButton
                href="/contact"
                label="Book a Commercial Shoot Consultation"
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
