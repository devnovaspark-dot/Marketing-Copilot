'use client';

import React from 'react';
import styles from './DentalVisualGraphics.module.css';

// ══════════════════════════════════════════════════
// 1. META ADS GRAPHIC (Instagram / Social Feed Preview)
// ══════════════════════════════════════════════════
export function MetaAdsGraphic() {
  return (
    <div className={styles.graphicWrapper}>
      <div className={styles.metaGraphic}>
        <div className={styles.metaHeader}>
          <div className={styles.metaUserRow}>
            <div className={styles.metaAvatar}>🦷</div>
            <div className={styles.metaUserMeta}>
              <span className={styles.metaUsername}>Apex Dental Studio</span>
              <span className={styles.metaSponsored}>Sponsored • Instagram</span>
            </div>
          </div>
          <span className={styles.metaLiveBadge}>● LIVE FEED</span>
        </div>

        <div className={styles.metaVisualBox}>
          <div>
            <div className={styles.metaVisualTag}>Digital Smile Design</div>
            <div style={{ fontSize: '9px', opacity: 0.9 }}>Clear Aligners &amp; Implants</div>
          </div>
          <div className={styles.metaCtaPill}>
            <span>Book Consult</span>
            <span>↗</span>
          </div>
        </div>

        <div className={styles.metaStatsRow}>
          <span>❤️ 428 Likes</span>
          <span>💬 34 Inquiries</span>
          <span className={styles.metaReachStat}>+240% Reach</span>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════
// 2. GOOGLE ADS GRAPHIC (High-Intent Search SERP)
// ══════════════════════════════════════════════════
export function GoogleAdsGraphic() {
  return (
    <div className={styles.graphicWrapper}>
      <div className={styles.googleAdsGraphic}>
        <div className={styles.googleAdTop}>
          <span className={styles.googleAdBadge}>Sponsored</span>
          <span className={styles.googleAdUrl}>apexclinic.com/implants</span>
        </div>

        <div className={styles.googleAdHeadline}>
          Dental Implants Near You | Top Rated Surgical Center
        </div>

        <div className={styles.googleAdStars}>
          <span>★★★★★</span>
          <span style={{ color: '#0F172A', fontSize: '9.5px' }}>4.9 (180+ Reviews) • 0% EMI Available</span>
        </div>

        <div className={styles.googleAdActions}>
          <span className={styles.googleAdActionBtn}>📞 Direct Line</span>
          <span className={styles.googleAdActionBtn}>🗓️ Book Operatory Slot</span>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════
// 3. SEO + AEO/GEO GRAPHIC (AI Overviews & Top Ranks)
// ══════════════════════════════════════════════════
export function SEOGeoGraphic() {
  return (
    <div className={styles.graphicWrapper}>
      <div className={styles.seoGraphic}>
        <div className={styles.seoAiHeader}>
          <span className={styles.seoAiDot} />
          <span>AI Search Engine Overview • Gemini &amp; ChatGPT</span>
        </div>

        <div className={styles.seoRankCard}>
          <div>
            <div className={styles.seoQueryText}>"best dental implant clinic in [city]"</div>
            <div style={{ fontSize: '9px', color: '#64748B' }}>Primary recommendation cited by AI</div>
          </div>
          <span className={styles.seoRankBadge}>#1 ORGANIC</span>
        </div>

        <div className={styles.seoGeoSparkline}>
          <span>Top Snippet Active</span>
          <span style={{ color: '#059669', fontWeight: 700 }}>+185% AI Discovery</span>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════
// 4. SOCIAL MEDIA & YOUTUBE GRAPHIC (Video Player Mock)
// ══════════════════════════════════════════════════
export function VideoMarketingGraphic() {
  return (
    <div className={styles.graphicWrapper}>
      <div className={styles.videoGraphic}>
        <div className={styles.videoTopRow}>
          <span className={styles.videoPill}>YOUTUBE 4K</span>
          <span className={styles.videoViews}>18.4K Views</span>
        </div>

        <div className={styles.videoCenterPlay}>▶</div>

        <div>
          <div className={styles.videoTitle}>Inside Our Painless Dental Operatory Tour</div>
          <div style={{ fontSize: '8.5px', color: '#94A3B8' }}>Doctor Walkthrough • Builds Familiarity</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════
// 5. GOOGLE MAPS GRAPHIC (Maps 3-Pack Catchment)
// ══════════════════════════════════════════════════
export function GoogleMapsGraphic() {
  return (
    <div className={styles.graphicWrapper}>
      <div className={styles.mapsGraphic}>
        <div className={styles.mapsHeaderRow}>
          <span className={styles.mapsRankBadge}>
            <span className={styles.mapsRankDot} />
            #1 LOCAL 3-PACK
          </span>
          <span className={styles.mapsReviewScore}>★ 4.9 (320+ Reviews)</span>
        </div>

        <div className={styles.mapsCardBox}>
          <div>
            <div className={styles.mapsClinicName}>Dr. SmileCraft Dental Care</div>
            <div className={styles.mapsDistance}>📍 1.2 km away • Open 9 AM–8 PM</div>
          </div>
        </div>

        <div className={styles.mapsActionRow}>
          <span className={styles.mapsActionBtn}>🚗 Turn-by-Turn GPS</span>
          <span className={styles.mapsActionBtn}>📞 Tap-to-Call</span>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════
// 6. CONTENT MARKETING GRAPHIC (Clinical Authority Guide)
// ══════════════════════════════════════════════════
export function ContentMarketingGraphic() {
  return (
    <div className={styles.graphicWrapper}>
      <div className={styles.contentGraphic}>
        <div className={styles.contentTop}>
          <span className={styles.contentDciBadge}>✓ DCI COMPLIANT</span>
          <span className={styles.contentReadTime}>5-Min Read</span>
        </div>

        <div className={styles.contentArticleBox}>
          <div className={styles.contentArticleTitle}>Clear Aligners vs Traditional Braces: What Patients Ask</div>
          <div className={styles.contentAuthorRow}>
            <span>👨‍⚕️ Clinically Verified</span>
            <span>•</span>
            <span style={{ color: '#0284C7', fontWeight: 700 }}>98% Helpful Score</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════
// 7. CASE STUDY VISUAL TELEMETRY CHARTS
// ══════════════════════════════════════════════════
interface CaseTelemetryProps {
  caseIndex: number;
}

export function CaseTelemetryChart({ caseIndex }: CaseTelemetryProps) {
  if (caseIndex === 0) {
    // Apex Dental: Booking Growth Curve (28 -> 94)
    return (
      <div className={styles.telemetryChartWrap}>
        <div className={styles.telemetryChartHeader}>
          <span className={styles.telemetryChartTitle}>Verified Monthly Bookings Curve</span>
          <div className={styles.telemetryLiveIndicator}>
            <span className={styles.telemetryLiveDot} />
            <span>28 → 94 (+235%)</span>
          </div>
        </div>

        <svg viewBox="0 0 300 70" className={styles.svgChartSvg}>
          <defs>
            <linearGradient id="apexGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          {/* Subtle grid lines */}
          <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
          <line x1="0" y1="45" x2="300" y2="45" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
          {/* Filled Area */}
          <path
            d="M 10 55 Q 80 50, 140 38 T 230 18 T 290 8 L 290 65 L 10 65 Z"
            fill="url(#apexGrad)"
          />
          {/* Main Curve */}
          <path
            d="M 10 55 Q 80 50, 140 38 T 230 18 T 290 8"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Starting Point (28) */}
          <circle cx="10" cy="55" r="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
          <text x="10" y="48" fill="#94A3B8" fontSize="8" fontWeight="700">28 Bookings</text>
          {/* Final Scaled Point (94) */}
          <circle cx="290" cy="8" r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
          <text x="235" y="12" fill="#10B981" fontSize="9" fontWeight="800">94 Bookings</text>
        </svg>

        <div className={styles.chartAxisLabels}>
          <span>Month 01 (Pre-Launch)</span>
          <span>Month 03 (Google Search &amp; Maps)</span>
          <span>Month 06 (Full Scale)</span>
        </div>
      </div>
    );
  }

  if (caseIndex === 1) {
    // Dr. SmileCraft: Maps 3-Pack Pin Code Radar
    return (
      <div className={styles.telemetryChartWrap}>
        <div className={styles.telemetryChartHeader}>
          <span className={styles.telemetryChartTitle}>Hyperlocal Catchment Radar</span>
          <div className={styles.telemetryLiveIndicator}>
            <span className={styles.telemetryLiveDot} />
            <span>Top 3 in 42 Pin Codes</span>
          </div>
        </div>

        <svg viewBox="0 0 300 70" className={styles.svgChartSvg}>
          <defs>
            <radialGradient id="radarPulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
            </radialGradient>
          </defs>
          {/* Concentric distance rings */}
          <circle cx="150" cy="35" r="30" fill="url(#radarPulse)" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="150" cy="35" r="20" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="1" />
          <circle cx="150" cy="35" r="8" fill="#10B981" />
          <text x="150" y="38" fill="#FFFFFF" fontSize="7" fontWeight="900" textAnchor="middle">★</text>
          {/* Satellite Top 3 Nodes */}
          <circle cx="105" cy="22" r="3" fill="#38BDF8" />
          <circle cx="195" cy="24" r="3" fill="#38BDF8" />
          <circle cx="120" cy="50" r="3" fill="#38BDF8" />
          <circle cx="180" cy="48" r="3" fill="#38BDF8" />
          <circle cx="80" cy="35" r="2.5" fill="#38BDF8" />
          <circle cx="220" cy="35" r="2.5" fill="#38BDF8" />
          <text x="50" y="20" fill="#BAE6FD" fontSize="8" fontWeight="700">5 KM West Zone (#1)</text>
          <text x="250" y="20" fill="#BAE6FD" fontSize="8" fontWeight="700" textAnchor="end">5 KM East Zone (#1)</text>
        </svg>

        <div className={styles.chartAxisLabels}>
          <span>0–2 KM: Dominant #1</span>
          <span>2–5 KM: Dominant Top 3</span>
          <span>5–10 KM: +180% Navigation Directions</span>
        </div>
      </div>
    );
  }

  // Case 03: Elite Aligners (Conversion Funnel: 1420 -> 68 Consults -> 4.8X ROAS)
  return (
    <div className={styles.telemetryChartWrap}>
      <div className={styles.telemetryChartHeader}>
        <span className={styles.telemetryChartTitle}>High-Ticket Aligner Funnel</span>
        <div className={styles.telemetryLiveIndicator}>
          <span className={styles.telemetryLiveDot} />
          <span>4.8X Verified ROAS</span>
        </div>
      </div>

      <svg viewBox="0 0 300 70" className={styles.svgChartSvg}>
        {/* Funnel Horizontal Bars */}
        {/* Stage 1: Search Demand */}
        <rect x="10" y="8" width="280" height="14" rx="4" fill="rgba(56, 189, 248, 0.2)" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
        <text x="18" y="18" fill="#E2E8F0" fontSize="8" fontWeight="700">1,420 High-Intent Aligner Searches Filtered</text>
        <text x="282" y="18" fill="#38BDF8" fontSize="8" fontWeight="800" textAnchor="end">100% Demand</text>

        {/* Stage 2: Pre-Qualified Consults */}
        <rect x="40" y="28" width="220" height="14" rx="4" fill="rgba(56, 189, 248, 0.4)" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1" />
        <text x="48" y="38" fill="#FFFFFF" fontSize="8" fontWeight="800">68 Monthly In-Person Consultations</text>
        <text x="252" y="38" fill="#BAE6FD" fontSize="8" fontWeight="800" textAnchor="end">WhatsApp Verified</text>

        {/* Stage 3: Paid Aligner Treatments */}
        <rect x="70" y="48" width="160" height="14" rx="4" fill="linear-gradient(90deg, #059669 0%, #10B981 100%)" />
        <text x="78" y="58" fill="#FFFFFF" fontSize="8.5" fontWeight="900">42 High-Value Cases Started (62% Conversion)</text>
      </svg>

      <div className={styles.chartAxisLabels}>
        <span>Zero ₹500 Cleanings</span>
        <span>High-Ticket Aesthetic Cases</span>
        <span>4.8X Return on Ad Spend</span>
      </div>
    </div>
  );
}
