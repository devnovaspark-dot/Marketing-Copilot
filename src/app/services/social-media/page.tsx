'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';

// 12-Section Custom Components
import SocialReelsStudioSimulator from './_components/SocialReelsStudioSimulator';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import SocialMediaWorkstation from './_components/SocialMediaWorkstation';
import SocialReachCalculator from './_components/SocialReachCalculator';
import SocialComparisonMatrix from './_components/SocialComparisonMatrix';
import SocialGrowthRoadmap from './_components/SocialGrowthRoadmap';

import styles from './social-media-page.module.css';

const socialArsenal = [
  {
    name: 'Sony FX3 Cinema Rig',
    category: 'Commercial Production Gear',
    desc: '4K 10-bit cinema camera with G-Master prime glass, capturing crisp depth of field and authentic skin tones.',
    status: 'CINEMA 4K',
    icon: '🎥',
  },
  {
    name: 'DaVinci Resolve Studio',
    category: 'Hollywood Color Grading',
    desc: 'Bespoke cinematic color grading and tone mapping that commands premium pricing power and visual prestige.',
    status: 'ACES PIPELINE',
    icon: '🎨',
  },
  {
    name: 'Kinetic Subtitle Engine',
    category: 'Attention Retention Tech',
    desc: 'Dynamic word-by-word animated subtitles and custom sound design keeping over 86% of mobile viewers engaged.',
    status: '86%+ RETENTION',
    icon: '⚡',
  },
  {
    name: 'ManyChat Automated DMs',
    category: 'Comment-to-Lead Funnels',
    desc: 'Instant 15-second DM responses to user comments delivering WhatsApp links, product catalogs, and quote forms.',
    status: 'SUB-15S DISPATCH',
    icon: '💬',
  },
  {
    name: 'Meta Creator Partner API',
    category: 'Algorithmic Distribution',
    desc: 'Optimized posting windows, trending audio licensing, and collaborative tagging across Odisha creator networks.',
    status: 'ALGO TUNED',
    icon: '🚀',
  },
  {
    name: 'Live Looker Studio Dashboard',
    category: 'Transparent ROI Telemetry',
    desc: '24/7 transparent reporting tracking views, follower acquisition cost, and verified WhatsApp consultation leads.',
    status: 'LIVE ATTRIBUTION',
    icon: '📊',
  },
];

const socialFaqs = [
  {
    q: 'How many Reels or videos do you produce for our business every month?',
    a: 'Our standard partnership includes 16 to 24 high-production 4K video Reels per month. We conduct dedicated full-day cinema shoots at your Bhubaneswar showroom, clinic, or office every month to capture authentic founder and service footage.',
    takeaway: 'Consistent, predictable high-quality video cadence trains social algorithms to prioritize your brand across Odisha.',
  },
  {
    q: 'Can social media actually generate high-ticket leads in Bhubaneswar, or is it just for likes?',
    a: 'We strictly focus on revenue outcomes. By pairing high-retention video hooks with ManyChat automated comment-to-DM funnels, we convert casual viewers directly into verified WhatsApp chats and phone inquiries in under 30 seconds.',
    takeaway: 'Zero vanity metric bias — we measure qualified customer consultations and signed client contracts.',
  },
  {
    q: 'What if our founder or team members feel uncomfortable speaking on camera?',
    a: 'Our on-location director coaches you through every line. We utilize professional teleprompters, conversational interview styles, and rapid cuts so you never have to memorize scripts or feel nervous.',
    takeaway: 'Natural, authentic storytelling builds 10X more trust with local buyers than rehearsed corporate speeches.',
  },
  {
    q: 'Do you create content in both Odia and English?',
    a: 'Yes! We craft bilingual content strategies tailored for Odisha consumers. Local colloquialisms and regional cultural hooks generate up to 3.4X higher sharing and comment velocity across Bhubaneswar, Cuttack, and Berhampur.',
    takeaway: 'Hyperlocal cultural resonance builds deep emotional loyalty and community word-of-mouth.',
  },
  {
    q: 'How quickly will we see an increase in followers and customer inquiries?',
    a: 'With our 3-second hook architecture and peak-time publishing, clients typically experience viral algorithmic reach within the first 14 days of launch, with qualified WhatsApp inquiries beginning in week one.',
    takeaway: 'Systematic testing of creative angles accelerates audience growth without wasted ad spend.',
  },
];

export default function SocialMediaPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
          1. CENTERED CINEMATIC HERO
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroCenter}>
            <ScrollReveal>
              <div className={styles.heroEyebrowPill}>
                <span className={styles.emeraldPulseDot} />
                <span>#1 Social Media &amp; Video Production Studio in Bhubaneswar</span>
              </div>

              <h1 className={styles.heroTitle}>
                Thumb-Stopping Social Media That{' '}
                <span className="accent-gradient">Turns Views Into Customers</span>
              </h1>

              <p className={styles.heroSub}>
                No boring static flyers. We script, film, and edit cinematic 4K video Reels that stop the scroll, dominate Instagram and YouTube algorithms, and drive daily qualified WhatsApp inquiries across Bhubaneswar and Odisha.
              </p>

              <div className={styles.heroActions}>
                <BeamButton href="/contact" label="Book a Commercial Video Shoot" size="lg" />
                <a href="#reels-studio" className={styles.heroSecondaryBtn}>
                  <span>Explore Reels Studio &amp; Hooks</span>
                  <span>↓</span>
                </a>
              </div>

              <div className={styles.trustStrip}>
                <div className={styles.trustAvatars}>
                  <span className={styles.trustAvatar}>ZS</span>
                  <span className={styles.trustAvatar}>ED</span>
                  <span className={styles.trustAvatar}>MC</span>
                  <span className={`${styles.trustAvatar} ${styles.trustAvatarGold}`}>+50</span>
                </div>
                <div className={styles.trustStars}>★★★★★</div>
                <span className={styles.trustLabel}>
                  Rated 4.9/5 by 50+ Bhubaneswar &amp; Odisha Brands
                </span>
              </div>
            </ScrollReveal>

            {/* Horizontal Telemetry Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>1.4M+</span>
                <span className={styles.tLabel}>Monthly Video Views</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>42%+</span>
                <span className={styles.tLabel}>3-Sec Hook Rate</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>&lt; 15s</span>
                <span className={styles.tLabel}>DM Lead Dispatch</span>
              </div>
              <div className={styles.telemetryCell}>
                <span className={styles.tVal}>4K FX3</span>
                <span className={styles.tLabel}>Cinema Gear SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. INTERACTIVE REELS & CONTENT STUDIO
         ══════════════════════════════════════════════════ */}
      <SocialReelsStudioSimulator />

      {/* ══════════════════════════════════════════════════
          3. REGIONAL BHUBANESWAR GEO-REACH FOOTPRINT
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          4. CONTENT ARCHITECTURE WORKSTATION
         ══════════════════════════════════════════════════ */}
      <SocialMediaWorkstation />

      {/* ══════════════════════════════════════════════════
          5. INTERACTIVE ATTENTION TO REVENUE ENGINE
         ══════════════════════════════════════════════════ */}
      <SocialReachCalculator />

      {/* ══════════════════════════════════════════════════
          6. THE SOCIAL MEDIA STANDARD (COMPARISON MATRIX)
         ══════════════════════════════════════════════════ */}
      <SocialComparisonMatrix />

      {/* ══════════════════════════════════════════════════
          7. 30-DAY CONTENT SPRINT ROADMAP
         ══════════════════════════════════════════════════ */}
      <SocialGrowthRoadmap />

      {/* ══════════════════════════════════════════════════
          8. EDITORIAL CASE STUDY SHOWCASE
         ══════════════════════════════════════════════════ */}
      <section className={styles.caseSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.editorialContainer}>
              <div className={styles.editorialContent}>
                <div className={styles.editorialBadge}>
                  <span className={styles.badgeDot} />
                  <span>Verified Social Media Case Study · Fashion &amp; Lifestyle</span>
                </div>

                <h3 className={styles.editorialTitle}>
                  Zue Studio &amp; Boutique Lifestyle
                </h3>
                <div className={styles.editorialLocation}>
                  📍 Saheed Nagar &amp; Patia Corridor, Bhubaneswar
                </div>

                <p className={styles.editorialDesc}>
                  Zue Studio was struggling with low organic reach using static catalog photos. Marketing Copilot deployed on-location cinema fashion shoots, behind-the-scenes founder storytelling, and automated ManyChat WhatsApp DM funnels that scaled monthly footfall by 340%.
                </p>

                <div className={styles.editorialQuoteBlock}>
                  <p className={styles.editorialQuoteText}>
                    &quot;Our Reels went viral across Bhubaneswar within the first 3 weeks. We had customers walking into our Saheed Nagar boutique holding their phones, asking for specific outfits featured in our videos.&quot;
                  </p>
                  <span className={styles.editorialQuoteAuthor}>
                    — Creative Director, Zue Studio Bhubaneswar
                  </span>
                </div>

                <div>
                  <BeamButton href="/portfolio" label="Explore All Verified Case Studies" size="md" />
                </div>
              </div>

              <div className={styles.editorialVisual}>
                <div className={styles.editorialImgWrapper}>
                  <Image
                    src="/images/zue_fashion_shoot.jpg"
                    alt="Zue Studio Fashion Brand Bhubaneswar"
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    className={styles.editorialImg}
                  />
                  <div className={styles.editorialImgBadge}>
                    <span>340K+ Organic Views · Saheed Nagar Hub</span>
                  </div>
                </div>

                <div className={styles.kpiStrip}>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>+340%</div>
                    <div className={styles.kpiSub}>Boutique Walk-Ins</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>4.8X</div>
                    <div className={styles.kpiSub}>Follower Growth Rate</div>
                  </div>
                  <div className={styles.kpiCard}>
                    <div className={styles.kpiNum}>180+</div>
                    <div className={styles.kpiSub}>Monthly WhatsApp Leads</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9. ENTERPRISE CREATOR & PRODUCTION ARSENAL
         ══════════════════════════════════════════════════ */}
      <section className={styles.arsenalSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>Full-Stack Content Studio</span>
            </div>
            <h3 className="display-sm" style={{ color: '#0F172A', marginBottom: 8 }}>
              Cinema Production Gear &amp; <span className="accent-gradient">Growth Infrastructure</span>
            </h3>
            <p className="body-sm" style={{ color: '#64748B', maxWidth: 620, margin: '0 auto 28px' }}>
              High-end cinema toolchains and AI distribution algorithms deployed across Bhubaneswar client campaigns.
            </p>

            <div className={styles.arsenalGrid}>
              {socialArsenal.map((t) => (
                <div key={t.name} className={styles.specCard}>
                  <div className={styles.specCardHeader}>
                    <div className={styles.specIconBox}>{t.icon}</div>
                    <span className={styles.specStatus}>{t.status}</span>
                  </div>
                  <h4 className={styles.specTitle}>{t.name}</h4>
                  <span className={styles.specCategory}>{t.category}</span>
                  <p className={styles.specDesc}>{t.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          10. MINIMALIST HAIRLINE FAQ LIST
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <ScrollReveal className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className="eyebrow-dot" />
              <span>Direct Answers</span>
            </div>
            <h3 className="display-md" style={{ color: '#0F172A', marginBottom: 10 }}>
              Frequently Asked <span className="accent-gradient">Social Media Questions</span>
            </h3>
            <p className="body-md" style={{ color: '#64748B', maxWidth: 580, margin: '0 auto' }}>
              Transparent answers on video shoot logistics, script approval, follower growth velocity, and lead attribution in Bhubaneswar.
            </p>
          </ScrollReveal>

          <div className={styles.faqContainer}>
            {socialFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`${styles.faqRow} ${isOpen ? styles.faqRowOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqQuestion}>{faq.q}</span>
                    <span className={styles.faqIcon}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.faqPane}>
                      <p className={styles.faqAnswer}>{faq.a}</p>
                      <div className={styles.faqTakeaway}>
                        <span>💡 Strategic Takeaway:</span>
                        <span>{faq.takeaway}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          11. EXECUTIVE BOTTOM CONVERSION TERMINAL
         ══════════════════════════════════════════════════ */}
      <section className={styles.conversionSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.executiveTerminal}>
              <div className={styles.termGlow} />
              <div>
                <span className={styles.termPill}>SCHEDULE STUDIO SESSION</span>
                <h3 className={styles.termTitle}>
                  Ready to Turn Bhubaneswar Attention Into Predictable Revenue?
                </h3>
                <p className={styles.termSub}>
                  Claim your free 30-minute creative strategy audit. We will review your current Instagram profile, identify high-intent hook gaps, and model your 30-day viral roadmap across Odisha.
                </p>
                <div className={styles.termContact}>
                  <span>📞 Direct Hotline:</span>
                  <a href="tel:+919437168434" className={styles.termPhone}>
                    +91 94371 68434
                  </a>
                  <span>·</span>
                  <span>HQ: Kharvela Nagar, Unit 3, Bhubaneswar</span>
                </div>
              </div>

              <div className={styles.termActions}>
                <Link href="/contact" className={styles.termAuditBtn}>
                  <span>Claim Free Social Media Audit</span>
                  <span>→</span>
                </Link>

                <a
                  href="https://wa.me/919437168434?text=Hi%20Marketing%20Copilot%2C%20I%20want%20to%20audit%20my%20business%20social%20media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.termWhatsAppBtn}
                >
                  <span>💬 WhatsApp Our Creative Director</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
