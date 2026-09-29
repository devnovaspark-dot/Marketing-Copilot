'use client';
import { useState } from 'react';
import styles from './WhatsAppFloatingButton.module.css';

export default function WhatsAppFloatingButton() {
  const [isWaClicked, setIsWaClicked] = useState(false);
  const [isPhoneClicked, setIsPhoneClicked] = useState(false);

  const whatsappUrl = 'https://wa.me/918280788689?text=Hi%20Marketing%20Copilot%2C%20I%20would%20like%20to%20know%20more%20about%20your%20digital%20marketing%20services.';
  const phoneUrl = 'tel:+918280788689';

  const handleWaClick = () => {
    setIsWaClicked(true);
    setTimeout(() => {
      setIsWaClicked(false);
    }, 600);
  };

  const handlePhoneClick = () => {
    setIsPhoneClicked(true);
    setTimeout(() => {
      setIsPhoneClicked(false);
    }, 600);
  };

  return (
    <aside className={styles.floatingContainer} aria-label="Quick Contact Actions">
      {/* Phone Call Floating Button (Stacked above WhatsApp on Mobile) */}
      <a
        href={phoneUrl}
        onClick={handlePhoneClick}
        className={`${styles.actionBtn} ${styles.phoneBtn} ${isPhoneClicked ? styles.btnClicked : ''}`}
        aria-label="Call Marketing Copilot directly (+91 82807 88689)"
      >
        {/* Ambient Pulsing Radar Ring for Phone */}
        <span className={styles.pulseRadarPhone} />
        <span className={styles.pulseRadarPhoneSecondary} />

        {/* Tactile Skeuomorphic Button Body */}
        <div className={`${styles.btnBody} ${styles.phoneBtnBody}`}>
          <span className={styles.btnShimmer} />

          {/* Phone Vector Icon */}
          <svg
            className={styles.phoneIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>

          {isPhoneClicked && <span className={styles.clickRippleBurst} />}
        </div>

        {/* Floating Tooltip Label */}
        <div className={styles.tooltipPill}>
          <span className={styles.phoneDot} />
          <span className={styles.tooltipText}>Call +91 82807 88689</span>
        </div>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWaClick}
        className={`${styles.actionBtn} ${styles.whatsappBtn} ${isWaClicked ? styles.btnClicked : ''}`}
        aria-label="Chat with Marketing Copilot on WhatsApp (+91 82807 88689)"
      >
        {/* Ambient Pulsing Radar Ring */}
        <span className={styles.pulseRadar} />
        <span className={styles.pulseRadarSecondary} />

        {/* Tactile Skeuomorphic Button Body */}
        <div className={`${styles.btnBody} ${styles.whatsappBtnBody}`}>
          {/* Ambient Glow Beam */}
          <span className={styles.btnShimmer} />

          {/* WhatsApp Vector Icon */}
          <svg
            className={styles.whatsappIcon}
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.52 1.09 2.52.73 2.98.69.45-.04 1.47-.6 1.68-1.18.21-.59.21-1.09.14-1.19-.07-.09-.23-.15-.48-.28z"/>
          </svg>

          {/* Crack / Ripple Particle Burst on Click */}
          {isWaClicked && (
            <span className={styles.clickRippleBurst} />
          )}
        </div>

        {/* Floating Tooltip Label */}
        <div className={styles.tooltipPill}>
          <span className={styles.onlineDot} />
          <span className={styles.tooltipText}>Chat on WhatsApp</span>
        </div>
      </a>
    </aside>
  );
}
