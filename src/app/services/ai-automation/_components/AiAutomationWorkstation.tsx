'use strict';
'use client';

import React from 'react';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import styles from './AiAutomationWorkstation.module.css';

interface Module {
  number: string;
  title: string;
  summary: string;
  badge: string;
  points: string[];
  icon: React.ReactNode;
}

const MODULES: Module[] = [
  {
    number: '01',
    title: 'Meta WhatsApp Cloud API & Omnichannel Conversational Agents',
    summary: 'Deploy official WhatsApp Cloud API conversational bots that respond within 2 seconds 24/7. Handle incoming ad inquiries, qualify lead criteria, and book appointments without human delays.',
    badge: 'Official Meta BSP Integration',
    points: [
      'Green-tick verified business channel with zero risk of phone number blocking',
      'Dynamic interactive CTA message buttons & rich media catalog carousels',
      'Natural conversational handoff to human specialists with full chat transcripts'
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Autonomous Lead Routing & Self-Healing CRM Pipelines',
    summary: 'Eliminate manual CSV imports and lost opportunities. We engineer webhook microservices that sync inbound prospects directly into HubSpot, Zoho, Google Sheets, or Slack in real time.',
    badge: 'Sub-300ms Webhook Latency',
    points: [
      'Automated intent scoring: classifies leads into Hot, Warm, or Cold instantly',
      'Multi-territory round-robin assignment ensuring fair salesperson distribution',
      'Automated follow-up drips triggered at 2hr, 24hr, and 72hr milestone intervals'
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Voice AI Phone Agents & Inbound Dispatchers',
    summary: 'Human-sounding synthetic voice AI agents trained on your custom company knowledge base. They answer inbound phone inquiries, qualify callers, and reserve calendar slots directly.',
    badge: 'Ultra-Low 450ms Voice Latency',
    points: [
      'Multi-lingual speech recognition supporting Indian accents, Odia, Hindi, and English',
      'Direct Google Calendar, Cal.com, and Calendly real-time appointment booking',
      'Detailed post-call audio transcription, sentiment tagging, and summary memos'
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        <path d="M12 18v3M9 21h6" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Custom RAG Knowledge Bases (Zero Hallucination Guarantee)',
    summary: 'Feed your proprietary brochures, PDF price lists, standard operating procedures, and product catalogs into a dedicated vector embedding database that only cites confirmed facts.',
    badge: '100% Fact-Checked Retrieval',
    points: [
      'Strict guardrails preventing made-up prices, invalid promises, or competitor mentions',
      'Instant real-time ingestion when your pricing tiers or seasonal inventories change',
      'Enterprise role-based access control protecting confidential operational documents'
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
];

export default function AiAutomationWorkstation() {
  return (
    <section className={styles.workstationSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.kicker}>Automated Operational Infrastructure</div>
        <h2 className={styles.sectionTitle}>The 4 Enterprise AI Automation Engines We Deploy</h2>
        <p className={styles.sectionDescription}>
          From conversational WhatsApp revenue engines to end-to-end CRM synchronization, our automation architectures
          turn high-cost manual sales friction into automated, high-velocity revenue pipelines.
        </p>
      </div>

      <div className={styles.grid}>
        {MODULES.map((mod) => (
          <div key={mod.number} className={styles.card}>
            <div>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {mod.icon}
                </div>
                <span className={styles.moduleNumber}>{mod.number}</span>
              </div>

              <h3 className={styles.cardTitle}>{mod.title}</h3>
              <p className={styles.cardSummary}>{mod.summary}</p>

              <ul className={styles.featureList}>
                {mod.points.map((pt, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.badge}>{mod.badge}</span>
              <span className={styles.liveIndicator}>
                <span className={styles.liveDot} /> Active Engine
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Image Architecture Banner */}
      <div className={styles.workstationBanner}>
        <div className={styles.bannerImgWrap}>
          <Image
            src="/images/hero_growth_mastery.jpg"
            alt="Omnichannel WhatsApp Cloud API & CRM Automation Architecture Command Center"
            fill
            sizes="(max-width: 1024px) 100vw, 550px"
            className={styles.bannerImg}
          />
          <div className={styles.bannerImgOverlay}>
            <div className={styles.bannerFloatingTag}>
              <span className={styles.liveDot} />
              <span>LIVE PIPELINE DISPATCH</span>
            </div>
            <div className={styles.bannerStatPills}>
              <span>⚡ &lt; 2s Latency</span>
              <span>🛡️ Meta BSP Verified</span>
            </div>
          </div>
        </div>
        <div className={styles.bannerContent}>
          <div className={styles.bannerBadge}>
            <span>⚡ ZERO-LATENCY PIPELINE DISPATCH</span>
          </div>
          <h3 className={styles.bannerTitle}>
            Unified Inbound Capture Across WhatsApp, Meta Ads &amp; CRM
          </h3>
          <p className={styles.bannerDesc}>
            Eliminate human drop-offs between click, inquiry, and closed revenue. Our microservices connect Meta Click-to-WhatsApp ads directly to autonomous LLM qualifiers and HubSpot / Zoho CRM.
          </p>
          <div style={{ marginTop: '8px' }}>
            <BeamButton href="/contact" label="Audit Your Lead Workflow →" size="md" />
          </div>
        </div>
      </div>
    </section>
  );
}
