'use strict';
'use client';

import React, { useState } from 'react';
import styles from './AiAgentWorkflowSimulator.module.css';

type Channel = 'whatsapp' | 'instagram' | 'website';

interface ChannelData {
  name: string;
  channelTag: string;
  userQuery: string;
  aiReply: string;
  leadScore: string;
  crmPayload: string;
  timeTaken: string;
  actionButtons: string[];
}

const CHANNEL_PRESETS: Record<Channel, ChannelData> = {
  whatsapp: {
    name: 'WhatsApp Cloud API',
    channelTag: 'Official WhatsApp BSP',
    userQuery: 'Hi! Looking for an experiential weekend getaway for 8 people near Puri/Chilika next Saturday. Need beachside villa + boating itinerary.',
    aiReply: 'Namaskar! We have 2 oceanfront luxury villas available in Puri for next weekend (Oct 3-5). Includes private beach access and sunrise dolphin cruise in Chilika. Sending your personalized PDF itinerary & booking token right now!',
    leadScore: 'High Intent (96%) - Group Size 8 - Est. Deal: ₹85,000',
    crmPayload: 'POST /crm/v2/deals { contact: "+91-98765...", deal_stage: "Quote Sent", priority: "VIP" }',
    timeTaken: '1.2s',
    actionButtons: ['📄 View Villa PDF', '⚡ Instant Reserve']
  },
  instagram: {
    name: 'Instagram Direct Message',
    channelTag: 'Meta Graph API',
    userQuery: 'Hey, saw your reel on Konark luxury heritage camp! Can you share pricing for couple package with temple tour?',
    aiReply: 'Hello! Our Konark Heritage Luxury Tent package is ₹14,500/night including gourmet local Odia cuisine & licensed temple guide. Would you like to reserve for this Friday or Saturday?',
    leadScore: 'Medium-High Intent (89%) - Couple Package - Est. Deal: ₹29,000',
    crmPayload: 'POST /crm/v2/contacts { ig_handle: "@traveler_diaries", intent: "Heritage Tent", status: "Nurturing" }',
    timeTaken: '1.4s',
    actionButtons: ['⛺ View Tent Photos', '📅 Select Dates']
  },
  website: {
    name: 'Website AI Concierge',
    channelTag: 'Websocket Agent',
    userQuery: 'Do you offer corporate offsite packages with team building activities near Bhubaneswar within 50km?',
    aiReply: 'Yes, absolutely! We host corporate offsites at Chandaka Eco-Resort (35 mins from Infocity). Features 40-key capacity, projector conference hall, and adventure obstacle courses. I have notified our Corporate Dispatcher Aarav to ring you within 5 minutes.',
    leadScore: 'Enterprise B2B (98%) - Corporate Offsite - Est. Deal: ₹2,40,000',
    crmPayload: 'TRIGGER /sales/slack-alert { company: "Tech Enterprise", headcount: "40+", urgency: "Immediate" }',
    timeTaken: '850ms',
    actionButtons: ['📞 Request Callback', '📊 Download Brochure']
  }
};

export default function AiAgentWorkflowSimulator() {
  const [selectedChannel, setSelectedChannel] = useState<Channel>('whatsapp');

  const current = CHANNEL_PRESETS[selectedChannel];

  return (
    <div className={styles.simulatorContainer}>
      <div className={styles.simulatorHeader}>
        <div className={styles.badge}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          Real-Time Execution Simulator
        </div>
        <h2 className={styles.simulatorTitle}>Experience Sub-2-Second Autonomous Lead Capture</h2>
        <p className={styles.simulatorSubtitle}>
          Watch how our multi-agent AI pipeline receives inquiries across WhatsApp, Instagram, or your website,
          extracts qualification data, syncs with your CRM, and closes booking intent instantly.
        </p>
      </div>

      <div className={styles.channelSelector}>
        <button
          className={`${styles.channelBtn} ${selectedChannel === 'whatsapp' ? styles.activeChannel : ''}`}
          onClick={() => setSelectedChannel('whatsapp')}
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
          </svg>
          WhatsApp Cloud API
        </button>
        <button
          className={`${styles.channelBtn} ${selectedChannel === 'instagram' ? styles.activeChannel : ''}`}
          onClick={() => setSelectedChannel('instagram')}
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          Instagram DM
        </button>
        <button
          className={`${styles.channelBtn} ${selectedChannel === 'website' ? styles.activeChannel : ''}`}
          onClick={() => setSelectedChannel('website')}
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          Website Concierge
        </button>
      </div>

      <div className={styles.layoutGrid}>
        {/* Left: Compact Authentic Smartphone Chassis with WhatsApp Business UI */}
        <div className={styles.phoneOuterFrame}>
          <div className={styles.phoneChassis}>
            {/* Dynamic Island Speaker */}
            <div className={styles.phoneTopBar}>
              <span className={styles.phoneTime}>9:41</span>
              <div className={styles.phoneDynamicIsland}>
                <div className={styles.phoneCamera} />
              </div>
              <div className={styles.phoneStatusIcons}>
                <span>5G</span>
              </div>
            </div>

            {/* Chat App Header */}
            <div className={styles.chatDeviceHeader}>
              <div className={styles.agentInfo}>
                <span className={styles.backBtn}>←</span>
                <div className={styles.agentAvatar}>
                  <span>AI</span>
                  <div className={styles.avatarOnlineDot} />
                </div>
                <div className={styles.agentMeta}>
                  <div className={styles.agentMetaTitleRow}>
                    <h4>Copilot AI Assistant</h4>
                    <svg className={styles.verifiedCheck} width="13" height="13" viewBox="0 0 24 24" fill="#10B981">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className={styles.onlineStatus}>Online &middot; {current.timeTaken} latency</span>
                </div>
              </div>

              <div className={styles.headerRightActions}>
                <span className={styles.channelBadge}>{current.name}</span>
              </div>
            </div>

            {/* Realistic Chat Messages Stream */}
            <div className={styles.chatMessages}>
              <div className={styles.chatDateDivider}>
                <span>TODAY</span>
              </div>

              {/* Inbound Customer Inquiry */}
              <div className={styles.msgInbound}>
                <div className={styles.msgSenderLabel}>Inbound Customer</div>
                <p>{current.userQuery}</p>
                <div className={styles.msgMetaRow}>
                  <span className={styles.msgTimestamp}>10:14 AM</span>
                </div>
              </div>

              {/* Autonomous AI Response */}
              <div className={styles.msgOutbound}>
                <div className={styles.msgAiLabel}>
                  <span>🤖 Copilot Agent</span>
                  <span className={styles.instantBadge}>{current.timeTaken}</span>
                </div>
                <p>{current.aiReply}</p>
                
                {/* Interactive Action Buttons */}
                <div className={styles.chatActionsRow}>
                  {current.actionButtons.map((btn, idx) => (
                    <button key={idx} type="button" className={styles.chatActionBtn}>
                      {btn}
                    </button>
                  ))}
                </div>

                <div className={styles.msgMetaRowOut}>
                  <span className={styles.msgTimestampOut}>10:14 AM</span>
                  <span className={styles.msgCheckmarks}>✓✓</span>
                </div>
              </div>
            </div>

            {/* Phone Bottom Input Dock */}
            <div className={styles.chatInputDock}>
              <div className={styles.chatFakeInput}>
                <span>Message Copilot AI...</span>
                <span className={styles.inputSendIcon}>➤</span>
              </div>
              <div className={styles.dockStatus}>
                <span className={styles.dockStatusDot} />
                <span>Synced with CRM &amp; Meta Cloud Webhooks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Compact Real-Time Pipeline Telemetry View */}
        <div className={styles.pipelinePanel}>
          <div className={styles.pipelineHeader}>
            <div>
              <div className={styles.pipelineKicker}>Multi-Agent Pipeline</div>
              <h3 className={styles.pipelineTitle}>Autonomous Execution Telemetry</h3>
            </div>
            <div className={styles.latencyTag}>
              <span className={styles.pulseDot} />
              Latency: {current.timeTaken}
            </div>
          </div>

          <div className={styles.stepList}>
            {/* Step 1 */}
            <div className={`${styles.stepItem} ${styles.stepItemActive}`}>
              <div className={styles.stepRail}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepLine} />
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepHeaderRow}>
                  <h4>Intent &amp; Entity Parser</h4>
                  <span className={styles.statusPill}>Completed 180ms</span>
                </div>
                <p>Natural Language processing extracts budget, dates, headcounts, and priority scoring in real-time.</p>
                <div className={styles.payloadBox}>
                  <div className={styles.payloadHeader}>
                    <span>PARSED ATTRIBUTES</span>
                    <span className={styles.payloadLang}>JSON</span>
                  </div>
                  <code>{current.leadScore}</code>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className={`${styles.stepItem} ${styles.stepItemActive}`}>
              <div className={styles.stepRail}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepLine} />
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepHeaderRow}>
                  <h4>Knowledge Retrieval &amp; Context Synthesis</h4>
                  <span className={styles.statusPill}>Pinecone 110ms</span>
                </div>
                <p>Vector database queries active room inventory, pricing tiers, and cancellation terms.</p>
                <div className={styles.ragPillRow}>
                  <span className={styles.ragPill}>🛡️ Zero-Hallucination Gate</span>
                  <span className={styles.ragPill}>📚 Real-Time Sync</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className={`${styles.stepItem} ${styles.stepItemActive}`}>
              <div className={styles.stepRail}>
                <div className={styles.stepNumber}>03</div>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepHeaderRow}>
                  <h4>CRM Webhook &amp; Live Agent Hand-off</h4>
                  <span className={styles.statusPill}>Dispatched</span>
                </div>
                <p>Synchronous dispatch to HubSpot/Zoho with pre-filled deal size and follow-up timeline.</p>
                <div className={styles.payloadBox}>
                  <div className={styles.payloadHeader}>
                    <span>REST WEBHOOK</span>
                    <span className={styles.payloadLang}>API</span>
                  </div>
                  <code>{current.crmPayload}</code>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.statsFooter}>
            <div className={styles.statCard}>
              <span className={styles.statVal}>&lt; 2s</span>
              <span className={styles.statDesc}>First Response</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statVal}>24/7/365</span>
              <span className={styles.statDesc}>Zero Downtime</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statVal}>+42%</span>
              <span className={styles.statDesc}>Lead Capture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
