'use strict';
'use client';

import React, { useState } from 'react';
import BeamButton from '@/components/BeamButton';
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
  const [simStage, setSimStage] = useState<'inbound' | 'typing' | 'reply'>('reply');
  const [checkStatus, setCheckStatus] = useState<'sent' | 'delivered' | 'read'>('read');
  const [activeNode, setActiveNode] = useState<number>(3);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [clickedAction, setClickedAction] = useState<string | null>(null);

  const current = CHANNEL_PRESETS[selectedChannel];

  const triggerSequence = (channelKey: Channel) => {
    setSelectedChannel(channelKey);
    setClickedAction(null);
    setToastMessage(null);
    setSimStage('inbound');
    setCheckStatus('sent');
    setActiveNode(1);

    const t1 = setTimeout(() => {
      setSimStage('typing');
      setActiveNode(2);
    }, 400);

    const t2 = setTimeout(() => {
      setSimStage('reply');
      setCheckStatus('delivered');
      setActiveNode(3);

      const t3 = setTimeout(() => {
        setCheckStatus('read');
      }, 350);

      return () => clearTimeout(t3);
    }, 1350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  };

  const handleActionClick = (btnText: string) => {
    setClickedAction(btnText);
    setToastMessage(`⚡ Auto-Dispatched: "${btnText}" sent via Meta Webhook`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

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
          onClick={() => triggerSequence('whatsapp')}
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
          </svg>
          WhatsApp Cloud API
        </button>
        <button
          className={`${styles.channelBtn} ${selectedChannel === 'instagram' ? styles.activeChannel : ''}`}
          onClick={() => triggerSequence('instagram')}
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          Instagram DM
        </button>
        <button
          className={`${styles.channelBtn} ${selectedChannel === 'website' ? styles.activeChannel : ''}`}
          onClick={() => triggerSequence('website')}
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          Website Concierge
        </button>

        {/* Live Replay Trigger Button */}
        <button
          type="button"
          onClick={() => triggerSequence(selectedChannel)}
          className={styles.replayBtn}
          title="Replay live sub-2s autonomous sequence"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M23 4v6h-6" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
          Replay Flow
        </button>
      </div>

      <div className={styles.layoutGrid}>
        {/* Left: Authentic Smartphone Chassis with Hardware Bezel, Dynamic Island & WhatsApp UI */}
        <div className={styles.phoneOuterFrame}>
          {/* Physical Side Buttons */}
          <div className={styles.sideButtonAction} />
          <div className={styles.sideButtonVolUp} />
          <div className={styles.sideButtonVolDown} />
          <div className={styles.sideButtonPower} />

          <div className={styles.phoneChassis}>
            {/* Screen Glass Inner Bezel */}
            <div className={styles.phoneScreen}>
              {/* Dynamic Island & iOS Status Bar */}
              <div className={styles.phoneTopBar}>
                <span className={styles.phoneTime}>9:41</span>
                <div className={`${styles.phoneDynamicIsland} ${simStage === 'typing' ? styles.islandThinking : ''}`}>
                  <div className={styles.islandCameraLens} />
                  {simStage === 'typing' ? (
                    <div className={styles.islandWaveBox}>
                      <span className={styles.waveBar} />
                      <span className={styles.waveBar} />
                      <span className={styles.waveBar} />
                    </div>
                  ) : (
                    <div className={styles.islandPrivacyDot} />
                  )}
                </div>
                <div className={styles.phoneStatusIcons}>
                  <div className={styles.signalBars}>
                    <span className={styles.bar1} />
                    <span className={styles.bar2} />
                    <span className={styles.bar3} />
                    <span className={styles.bar4} />
                  </div>
                  <span className={styles.wifiIcon}>
                    <svg width="13" height="10" viewBox="0 0 24 18" fill="currentColor">
                      <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0 0 12 4z"/>
                    </svg>
                  </span>
                  <div className={styles.batteryPill}>
                    <div className={styles.batteryLevel} />
                  </div>
                </div>
              </div>

              {/* WhatsApp App Header Bar */}
              <div className={styles.chatDeviceHeader}>
                <div className={styles.agentInfo}>
                  <span className={styles.backChevron}>‹</span>
                  <div className={styles.agentAvatar}>
                    <span>AI</span>
                    <div className={styles.avatarOnlineDot} />
                  </div>
                  <div className={styles.agentMeta}>
                    <div className={styles.agentMetaTitleRow}>
                      <h4>Copilot AI Concierge</h4>
                      <svg className={styles.verifiedCheck} width="13" height="13" viewBox="0 0 24 24" fill="#25D366">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className={styles.onlineStatus}>
                      {simStage === 'typing' ? (
                        <span className={styles.typingIndicatorText}>
                          typing<span className={styles.typingDot1}>.</span><span className={styles.typingDot2}>.</span><span className={styles.typingDot3}>.</span>
                        </span>
                      ) : (
                        <>Online &middot; {current.timeTaken} latency</>
                      )}
                    </span>
                  </div>
                </div>

                <div className={styles.headerRightActions}>
                  {/* WhatsApp Video Call Icon */}
                  <svg className={styles.headerIcon} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                  </svg>
                  {/* WhatsApp Voice Phone Icon */}
                  <svg className={styles.headerIcon} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.5 3.92c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.54c0-.55-.45-1-1-1z"/>
                  </svg>
                  {/* Overflow Dots */}
                  <span className={styles.moreDots}>⋮</span>
                </div>
              </div>

              {/* Instant WhatsApp In-App Toast Notification */}
              {toastMessage && (
                <div className={styles.phoneToast}>
                  <span className={styles.toastDot} />
                  <span>{toastMessage}</span>
                </div>
              )}

              {/* WhatsApp Messages Stream with Authentic Speech Tails */}
              <div className={styles.chatMessages}>
                <div className={styles.chatDateDivider}>
                  <span>TODAY</span>
                </div>

                {/* Inbound Customer Inquiry Bubble (Realistic Pop-in Animation) */}
                <div className={`${styles.msgInboundWrap} ${styles.animateBubble}`}>
                  <div className={styles.msgInbound}>
                    <div className={styles.msgSenderLabel}>Inbound Customer</div>
                    <p>{current.userQuery}</p>
                    <div className={styles.msgMetaRow}>
                      <span className={styles.msgTimestamp}>10:14 AM</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Realistic Typing Indicator Bubble */}
                {simStage === 'typing' && (
                  <div className={`${styles.msgOutboundWrap} ${styles.typingBubbleWrap}`}>
                    <div className={styles.whatsappTypingBubble}>
                      <span className={styles.bouncingDot} />
                      <span className={styles.bouncingDot} />
                      <span className={styles.bouncingDot} />
                    </div>
                  </div>
                )}

                {/* Autonomous AI Response Bubble with Checkmarks */}
                {simStage === 'reply' && (
                  <div className={`${styles.msgOutboundWrap} ${styles.animateBubble}`}>
                    <div className={styles.msgOutbound}>
                      <div className={styles.msgAiLabel}>
                        <span>🤖 Copilot Autonomous Agent</span>
                        <span className={styles.instantBadge}>{current.timeTaken}</span>
                      </div>
                      <p>{current.aiReply}</p>
                      
                      {/* Interactive Action Buttons */}
                      <div className={styles.chatActionsRow}>
                        {current.actionButtons.map((btn, idx) => {
                          const isClicked = clickedAction === btn;
                          return (
                            <button
                              key={idx}
                              type="button"
                              className={`${styles.chatActionBtn} ${isClicked ? styles.chatActionBtnActive : ''}`}
                              onClick={() => handleActionClick(btn)}
                            >
                              {isClicked ? `✓ Sent` : btn}
                            </button>
                          );
                        })}
                      </div>

                      <div className={styles.msgMetaRowOut}>
                        <span className={styles.msgTimestampOut}>10:14 AM</span>
                        <span className={`${styles.msgCheckmarks} ${checkStatus === 'read' ? styles.checksRead : styles.checksSent}`}>
                          {checkStatus === 'sent' ? '✓' : '✓✓'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* WhatsApp Bottom Input Dock with Emoji, Paperclip, Camera & Send */}
              <div className={styles.chatInputDock}>
                <div className={styles.dockInputRow}>
                  <span className={styles.inputSmile}>😊</span>
                  <div className={styles.chatFakeInput}>
                    <span>Type a message...</span>
                    <span className={styles.blinkingCursor}>|</span>
                  </div>
                  <span className={styles.inputClip}>📎</span>
                  <span className={styles.inputCamera}>📷</span>
                  <div className={`${styles.micCircleBtn} ${simStage === 'inbound' ? styles.micActivePulse : ''}`}>
                    <span>➤</span>
                  </div>
                </div>
                {/* iOS Home Indicator Bar */}
                <div className={styles.iosHomeIndicator} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Advanced Multi-Agent Autonomous Pipeline Trace */}
        <div className={styles.pipelinePanel}>
          <div className={styles.pipelineHeader}>
            <div>
              <div className={styles.pipelineKicker}>Multi-Agent AI Pipeline</div>
              <h3 className={styles.pipelineTitle}>Autonomous Execution Telemetry</h3>
            </div>
            <div className={styles.latencyTag}>
              <span className={styles.pulseDot} />
              Total Latency: {current.timeTaken}
            </div>
          </div>

          <div className={styles.agentNodesGraph}>
            {/* AGENT NODE 1: Lead Triage & Parser Agent */}
            <div className={`${styles.agentNodeCard} ${styles.agentNodeActive} ${activeNode === 1 ? styles.agentNodeHighlight : ''}`}>
              <div className={styles.agentNodeHeader}>
                <div className={styles.agentNodeAvatar}>
                  <span>🤖</span>
                </div>
                <div className={styles.agentNodeInfo}>
                  <div className={styles.agentNodeTitleRow}>
                    <h4>Agent 01: Lead Triage &amp; Parser</h4>
                    <span className={styles.agentStatusBadge}>PARSED 180ms</span>
                  </div>
                  <span className={styles.agentNodeSub}>Natural Language Extraction &middot; Intent Classifier</span>
                </div>
              </div>

              <div className={styles.nodePills}>
                <span className={styles.dataPill}>👤 High Intent</span>
                <span className={styles.dataPill}>📍 Regional Query</span>
                <span className={styles.dataPill}>⚡ Confidence 98%</span>
              </div>

              <div className={styles.payloadBox}>
                <div className={styles.payloadHeader}>
                  <span>PARSED ENTITIES (JSON)</span>
                  <span className={styles.payloadLang}>AGENT_OUTPUT</span>
                </div>
                <code>{current.leadScore}</code>
              </div>

              {/* Data Flow Connector to Node 2 */}
              <div className={styles.flowConnector}>
                <div className={styles.flowPulseDot} />
                <span className={styles.flowLabel}>↓ Streaming Validated Entity Stream to Vector Index</span>
              </div>
            </div>

            {/* AGENT NODE 2: Vector RAG & Knowledge Synthesizer */}
            <div className={`${styles.agentNodeCard} ${styles.agentNodeActive} ${activeNode === 2 ? styles.agentNodeHighlight : ''}`}>
              <div className={styles.agentNodeHeader}>
                <div className={styles.agentNodeAvatar}>
                  <span>🧠</span>
                </div>
                <div className={styles.agentNodeInfo}>
                  <div className={styles.agentNodeTitleRow}>
                    <h4>Agent 02: Knowledge Retrieval &amp; RAG</h4>
                    <span className={styles.agentStatusBadge}>PINECONE 110ms</span>
                  </div>
                  <span className={styles.agentNodeSub}>Vector Embedding Match &middot; Pricing &amp; Inventory Gate</span>
                </div>
              </div>

              <div className={styles.nodePills}>
                <span className={styles.ragGuardPill}>🛡️ Zero-Hallucination Guardrail</span>
                <span className={styles.ragGuardPill}>📚 Real-Time Availability Match</span>
              </div>

              {/* Data Flow Connector to Node 3 */}
              <div className={styles.flowConnector}>
                <div className={styles.flowPulseDot} />
                <span className={styles.flowLabel}>↓ Dispatching Synthesized Payload to Webhook Gateway</span>
              </div>
            </div>

            {/* AGENT NODE 3: CRM Webhook & Omnichannel Dispatcher */}
            <div className={`${styles.agentNodeCard} ${styles.agentNodeActive} ${activeNode === 3 ? styles.agentNodeHighlight : ''}`}>
              <div className={styles.agentNodeHeader}>
                <div className={styles.agentNodeAvatar}>
                  <span>⚡</span>
                </div>
                <div className={styles.agentNodeInfo}>
                  <div className={styles.agentNodeTitleRow}>
                    <h4>Agent 03: CRM Webhook &amp; Dispatcher</h4>
                    <span className={styles.agentStatusBadge}>DISPATCHED 40ms</span>
                  </div>
                  <span className={styles.agentNodeSub}>HubSpot / Zoho 2-Way Synchronization &middot; WhatsApp API</span>
                </div>
              </div>

              <div className={styles.payloadBox}>
                <div className={styles.payloadHeader}>
                  <span>OUTBOUND REST WEBHOOK</span>
                  <span className={styles.payloadLang}>HTTP 200 OK</span>
                </div>
                <code>{current.crmPayload}</code>
              </div>
            </div>
          </div>

          <div className={styles.statsFooter}>
            <div className={styles.statCard}>
              <span className={styles.statVal}>&lt; 2s</span>
              <span className={styles.statDesc}>First Response SLA</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statVal}>24/7/365</span>
              <span className={styles.statDesc}>Zero Downtime</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statVal}>+42%</span>
              <span className={styles.statDesc}>Lead Recovery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Centered CTA Button Down Real-Time Execution Simulator */}
      <div className={styles.simBottomCta}>
        <BeamButton
          href="/contact"
          label="Deploy This AI Automation Stack For Your Business →"
          size="lg"
        />
        <div className={styles.simCtaGuarantee}>
          <span className={styles.guaranteeDot} />
          <span>Meta Cloud API Official BSP &middot; Sub-2s SLA &middot; 30-Day Turnkey Deployment</span>
        </div>
      </div>
    </div>
  );
}
