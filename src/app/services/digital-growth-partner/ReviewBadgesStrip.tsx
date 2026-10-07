'use client';

import styles from './ReviewBadgesStrip.module.css';

export default function ReviewBadgesStrip() {
  return (
    <div className={styles.stripWrapper}>
      <div className={styles.stripInner}>
        {/* 1. Capterra */}
        <div className={styles.badgeItem}>
          <div className={styles.logoRow}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={styles.brandIcon}>
              <path d="M12 2L3 8.5V17.5L12 22L21 17.5V8.5L12 2Z" fill="#003554"/>
              <path d="M12 2L21 8.5L12 15L3 8.5L12 2Z" fill="#00A4E4"/>
              <path d="M12 15L21 8.5V17.5L12 22V15Z" fill="#FF533D"/>
            </svg>
            <span className={styles.brandName} style={{ color: '#003554' }}>Capterra</span>
          </div>
          <div className={styles.ratingRow}>
            <span className={styles.score}>5.0</span>
            <span className={styles.stars}>★★★★★</span>
          </div>
        </div>

        <div className={styles.divider} />

        {/* 2. GoodFirms */}
        <div className={styles.badgeItem}>
          <div className={styles.logoRow}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={styles.brandIcon}>
              <rect width="24" height="24" rx="5" fill="#1B6DC1"/>
              <path d="M6 7H18V10H9V12H16V15H9V18H6V7Z" fill="white"/>
            </svg>
            <span className={styles.brandName} style={{ color: '#1B6DC1' }}>GoodFirms</span>
          </div>
          <div className={styles.ratingRow}>
            <span className={styles.score}>4.9</span>
            <span className={styles.stars}>★★★★★</span>
          </div>
        </div>

        <div className={styles.divider} />

        {/* 3. Google (GetApp skipped as requested) */}
        <div className={styles.badgeItem}>
          <div className={styles.logoRow}>
            <svg width="20" height="20" viewBox="0 0 24 24" className={styles.brandIcon}>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            <span className={styles.googleBrand}>
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>g</span>
              <span style={{ color: '#34A853' }}>l</span>
              <span style={{ color: '#EA4335' }}>e</span>
            </span>
          </div>
          <div className={styles.ratingRow}>
            <span className={styles.score}>4.9</span>
            <span className={styles.stars}>★★★★★</span>
          </div>
        </div>

        <div className={styles.divider} />

        {/* 4. DesignRush */}
        <div className={styles.badgeItem}>
          <div className={styles.logoRow}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={styles.brandIcon}>
              <path d="M12 2L15.5 8.5L22 9.5L17.5 14.5L18.5 21.5L12 18L5.5 21.5L6.5 14.5L2 9.5L8.5 8.5L12 2Z" fill="#00E5FF"/>
            </svg>
            <span className={styles.designRushName}>DESIGNRUSH</span>
          </div>
          <div className={styles.ratingRow}>
            <span className={styles.score}>4.7</span>
            <span className={styles.stars}>★★★★★</span>
          </div>
        </div>

        <div className={styles.divider} />

        {/* 5. UpCity */}
        <div className={styles.badgeItem}>
          <div className={styles.logoRow}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={styles.brandIcon}>
              <path d="M7 6C4.8 6 3 7.8 3 10C3 14.2 12 19 12 19C12 19 21 14.2 21 10C21 7.8 19.2 6 17 6C15.2 6 13.6 7.2 13 8.8H11C10.4 7.2 8.8 6 7 6Z" stroke="#E3651D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.brandName} style={{ color: '#27272A' }}>UpCity<span style={{ fontSize: '9px', verticalAlign: 'super' }}>™</span></span>
          </div>
          <div className={styles.ratingRow}>
            <span className={styles.score}>5.0</span>
            <span className={styles.stars}>★★★★★</span>
          </div>
        </div>
      </div>
    </div>
  );
}
