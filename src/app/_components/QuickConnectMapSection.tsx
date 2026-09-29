'use client';
import { useState } from 'react';
import Link from 'next/link';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './QuickConnectMapSection.module.css';

interface QuickConnectMapSectionProps {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  headingTag?: 'h2' | 'h3';
}

export default function QuickConnectMapSection({
  id = 'direct-connect',
  eyebrow = 'Driving Business Growth With Digital Marketing in Bhubaneswar',
  title = (
    <>
      Smart Digital Marketing for<br />
      <span className={styles.titleAccent}>Growing Businesses</span>
    </>
  ),
  subtitle = 'As a digital marketing company in Bhubaneswar, we combine SEO, social media, content, and performance marketing to help brands grow online.',
  headingTag = 'h3',
}: QuickConnectMapSectionProps = {}) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const phone = '+91 82807 88689';
  const rawPhone = '+918280788689';
  const email = 'connect@novasparkdigitalmarketingagency.com';
  const whatsappUrl = 'https://wa.me/918280788689?text=Hi%20Marketing%20Copilot%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20brand.';
  const address = 'Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar, Odisha 751001';
  const mapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=Mallick+Complex,+Unit+3,+Kharvela+Nagar,+Bhubaneswar,+Odisha+751001';
  const mapsEmbedUrl = 'https://maps.google.com/maps?q=Mallick+Complex,+Unit+3,+Kharvela+Nagar,+Bhubaneswar,+Odisha+751001&t=&z=16&ie=UTF8&iwloc=&output=embed';

  const copyToClipboard = (text: string, fieldId: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldId);
      setTimeout(() => {
        setCopiedField(null);
      }, 2000);
    }
  };

  return (
    <section className={styles.section} id={id}>
      <div id="war-room-section" style={{ position: 'relative', top: '-100px', visibility: 'hidden' }} />
      {/* Ambient background glows for 3D depth */}
      <div className={styles.ambientGlowLeft} />
      <div className={styles.ambientGlowRight} />

      <div className="container">
        {/* Skeuomorphic Section Header */}
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.pulseDot} />
              <span className={styles.eyebrowText}>{eyebrow}</span>
            </div>

            {headingTag === 'h2' ? (
              <h2 className={styles.title}>{title}</h2>
            ) : (
              <h3 className={styles.title}>{title}</h3>
            )}

            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </ScrollReveal>

        {/* Dual Panel Grid */}
        <div className={styles.grid}>
          {/* ══════════════════════════════════════════════════
              LEFT PANEL: Tactile Skeuomorphic Channel Hub
             ══════════════════════════════════════════════════ */}
          <ScrollReveal delay={80} direction="up">
            <div className={styles.skeuoCard}>
              {/* Card Top Header */}
              <div className={styles.cardHeader}>
                <div className={styles.channelBadge}>
                  <span className={styles.sparkle}>⚡</span>
                  <span>Direct Channels</span>
                </div>
              </div>

              {/* Rows List with Perfectly Aligned Action Columns */}
              <div className={styles.rowsList}>
                {/* Row 1: Direct Phone */}
                <div className={styles.rowItem}>
                  <div className={`${styles.iconBox} ${styles.iconPhone}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>

                  <div className={styles.rowDetails}>
                    <div className={styles.rowLabelRow}>
                      <span className={styles.rowTag}>Direct Phone</span>
                      <span className={styles.rowTiming}>Mon – Sat · 9:30 AM – 7:30 PM</span>
                    </div>
                    <a href={`tel:${rawPhone}`} className={styles.rowPrimaryVal}>
                      {phone}
                    </a>
                  </div>

                  {/* Aligned 2-Button Column */}
                  <div className={styles.rowActions}>
                    <a href={`tel:${rawPhone}`} className={`${styles.btnTactile} ${styles.btnBlue}`}>
                      <span>Call</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(phone, 'phone')}
                      className={`${styles.btnTactileIcon} ${copiedField === 'phone' ? styles.copiedActive : ''}`}
                      title="Copy phone number"
                      aria-label="Copy phone number"
                    >
                      {copiedField === 'phone' ? (
                        <span className={styles.copiedBadge}>✓</span>
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Row 2: WhatsApp Chat */}
                <div className={`${styles.rowItem} ${styles.rowWhatsApp}`}>
                  <div className={`${styles.iconBox} ${styles.iconWhatsApp}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.52 1.09 2.52.73 2.98.69.45-.04 1.47-.6 1.68-1.18.21-.59.21-1.09.14-1.19-.07-.09-.23-.15-.48-.28z"/>
                    </svg>
                  </div>

                  <div className={styles.rowDetails}>
                    <div className={styles.rowLabelRow}>
                      <span className={styles.rowTag}>WhatsApp Chat</span>
                      <span className={styles.replyChip}>🟢 ~10 min reply</span>
                    </div>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.rowPrimaryVal}>
                      {phone}
                    </a>
                  </div>

                  {/* Aligned 2-Button Column */}
                  <div className={styles.rowActions}>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btnTactile} ${styles.btnGreen}`}>
                      <span>WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(phone, 'whatsapp')}
                      className={`${styles.btnTactileIcon} ${copiedField === 'whatsapp' ? styles.copiedActive : ''}`}
                      title="Copy WhatsApp number"
                      aria-label="Copy WhatsApp number"
                    >
                      {copiedField === 'whatsapp' ? (
                        <span className={styles.copiedBadge}>✓</span>
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Row 3: Official Email */}
                <div className={styles.rowItem}>
                  <div className={`${styles.iconBox} ${styles.iconEmail}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>

                  <div className={styles.rowDetails}>
                    <div className={styles.rowLabelRow}>
                      <span className={styles.rowTag}>Official Email</span>
                      <span className={styles.rowTiming}>Proposals & RFPs</span>
                    </div>
                    <a href={`mailto:${email}`} className={styles.rowPrimaryVal}>
                      {email}
                    </a>
                  </div>

                  {/* Aligned 2-Button Column */}
                  <div className={styles.rowActions}>
                    <a href={`mailto:${email}`} className={`${styles.btnTactile} ${styles.btnBlue}`}>
                      <span>Email</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(email, 'email')}
                      className={`${styles.btnTactileIcon} ${copiedField === 'email' ? styles.copiedActive : ''}`}
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copiedField === 'email' ? (
                        <span className={styles.copiedBadge}>✓</span>
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Row 4: Studio Headquarters */}
                <div className={styles.rowItem}>
                  <div className={`${styles.iconBox} ${styles.iconLocation}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>

                  <div className={styles.rowDetails}>
                    <div className={styles.rowLabelRow}>
                      <span className={styles.rowTag}>Studio Headquarters</span>
                      <span className={styles.rowTiming}>Unit 3 · Kharvela Nagar</span>
                    </div>
                    <p className={styles.rowAddress}>
                      {address}
                    </p>
                  </div>

                  {/* Aligned 2-Button Column */}
                  <div className={styles.rowActions}>
                    <a href={mapsSearchUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btnTactile} ${styles.btnAmber}`}>
                      <span>Directions</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(address, 'address')}
                      className={`${styles.btnTactileIcon} ${copiedField === 'address' ? styles.copiedActive : ''}`}
                      title="Copy office address"
                      aria-label="Copy office address"
                    >
                      {copiedField === 'address' ? (
                        <span className={styles.copiedBadge}>✓</span>
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Card Tactile Footer */}
              <div className={styles.cardFooter}>
                <div className={styles.footerInfo}>
                  <span className={styles.footerDot} />
                  <span>In-person consultations available by appointment</span>
                </div>
                <BeamButton href="/contact" label="Grow Your Business With Us" size="md" />
              </div>
            </div>
          </ScrollReveal>

          {/* ══════════════════════════════════════════════════
              RIGHT PANEL: Clean Full-Bleed 3D Map Showcase
             ══════════════════════════════════════════════════ */}
          <ScrollReveal delay={160} direction="up">
            <div className={styles.skeuoMapCard}>
              {/* Full Viewport Google Maps Embed */}
              <div className={styles.mapViewport}>
                <iframe
                  title="Marketing Copilot Studio Location Map"
                  src={mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.mapIframe}
                />

                {/* Persistent Animated 3D Red Location Beacon Pin */}
                <div className={styles.centerPinOverlay}>
                  {/* Radar Wave Pulses on Map Ground */}
                  <div className={styles.radarWaveOuter} />
                  <div className={styles.radarWaveInner} />
                  <div className={styles.pinGroundShadow} />

                  {/* 3D Floating Pin Anchor */}
                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pin3dAnchor}
                    title="Marketing Copilot Studio — Click to open in Google Maps"
                    aria-label="Open Marketing Copilot Studio location on Google Maps"
                  >
                    <div className={styles.pin3dFloatingBody}>
                      <svg width="44" height="54" viewBox="0 0 44 54" fill="none" className={styles.pinSvg}>
                        <defs>
                          <linearGradient id="red3dGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FF4D4D" />
                            <stop offset="35%" stopColor="#EF4444" />
                            <stop offset="70%" stopColor="#DC2626" />
                            <stop offset="100%" stopColor="#991B1B" />
                          </linearGradient>
                          <linearGradient id="pinRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#CBD5E1" />
                          </linearGradient>
                          <filter id="pin3dShadow" x="-30%" y="-20%" width="160%" height="160%">
                            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(220, 38, 38, 0.45)" />
                          </filter>
                        </defs>
                        {/* 3D Pin Outer Body */}
                        <path
                          d="M22 2C11.51 2 3 10.51 3 21C3 33.5 20.4 49.8 21.16 50.5C21.6 50.9 22.4 50.9 22.84 50.5C23.6 49.8 41 33.5 41 21C41 10.51 32.49 2 22 2Z"
                          fill="url(#red3dGrad)"
                          stroke="url(#pinRingGrad)"
                          strokeWidth="1.8"
                          filter="url(#pin3dShadow)"
                        />
                        {/* 3D Gloss Highlight Arc */}
                        <path
                          d="M10 14C12.5 8 18 5 22 5"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          opacity="0.85"
                        />
                        {/* Inner Core Ring */}
                        <circle cx="22" cy="21" r="8.5" fill="#FFFFFF" />
                        <circle cx="22" cy="21" r="5" fill="#DC2626" />
                        <circle cx="20.5" cy="19.5" r="2" fill="#FFFFFF" opacity="0.9" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
