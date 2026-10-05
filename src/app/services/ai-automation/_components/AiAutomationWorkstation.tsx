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
    ]
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
    ]
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
    ]
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
    ]
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
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
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
