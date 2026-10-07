'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BeamButton from '@/components/BeamButton';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import styles from './ai-automation-page.module.css';

import AiAgentWorkflowSimulator from './_components/AiAgentWorkflowSimulator';
import AiAutomationWorkstation from './_components/AiAutomationWorkstation';
import AiSavingsCalculator from './_components/AiSavingsCalculator';
import AiAutomationComparisonMatrix from './_components/AiAutomationComparisonMatrix';
import AiAutomationRoadmap from './_components/AiAutomationRoadmap';

const FAQ_ITEMS = [
  {
    q: 'Will AI conversational bots sound robotic or alienate our high-ticket clients?',
    a: 'Not at all. We build on custom-tuned LLMs infused with your distinct brand personality, colloquial nuances, and regional language understanding (Odia, Hindi, and Indian English). The bots speak with executive polish and naturally know when to transfer complex negotiations to your senior sales team.',
    takeaway: 'Key Takeaway: Indistinguishable from a polite, hyper-knowledgeable human concierge.'
  },
  {
    q: 'Can the AI bot update our CRM (HubSpot, Zoho, or Google Sheets) automatically?',
    a: 'Yes. Every conversation is parsed for lead parameters (budget, timeframe, decision maker contact, specific product interest) and automatically dispatched via webhooks directly to your CRM, notifying the assigned salesperson in under 2 seconds.',
    takeaway: 'Key Takeaway: 100% elimination of manual data entry and zero missed leads.'
  },
  {
    q: 'Is there a risk of our WhatsApp number getting banned by Meta?',
    a: 'Zero risk. We only deploy via the Official Meta WhatsApp Cloud API (Business Solution Provider framework) with green-tick badge verification. We never use unofficial scrapers or illegal automation scripts.',
    takeaway: 'Key Takeaway: Compliant, secure, and officially authorized by Meta.'
  },
  {
    q: 'How long does it take to train and launch our custom AI automation system?',
    a: 'Our structured 4-phase sprint takes exactly 30 days. Within week 1 we ingest your knowledge base, by week 2 the agent is hooked to webhooks, week 3 is adversarial stress testing, and week 4 is live production rollout.',
    takeaway: 'Key Takeaway: Live, generating qualified pipeline within 30 calendar days.'
  },
  {
    q: 'What happens if a customer asks a question outside the bot’s knowledge base?',
    a: 'Our strict RAG (Retrieval-Augmented Generation) guardrails prevent hallucinations. If a query falls outside verified company documents, the bot gracefully admits it and immediately initiates a warm handoff to a live specialist.',
    takeaway: 'Key Takeaway: Zero hallucinations and safe enterprise brand protection.'
  }
];

export default function AiAutomationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
         SECTION 1: HERO (FULL WINDOW VIEWPORT COVERAGE)
         Clean and focused without intrusive hero images
      ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroCenter}>
            <h1 className={styles.heroEyebrowPill}>
              <div className={styles.emeraldPulseDot} />
              Enterprise AI &amp; Workflow Infrastructure &middot; India
            </h1>

            <h2 className={styles.heroTitle}>
              Turn Inbound Inquiries Into Booked Revenue in &lt; 2 Seconds.
            </h2>

            <p className={styles.heroSub}>
              We architect autonomous WhatsApp conversational agents, self-healing CRM pipelines, and voice dispatchers
              that qualify leads 24/7, eliminate sales friction, and 3.8x your close rates.
            </p>

            <div className={styles.heroActions}>
              <BeamButton
                href="/contact"
                label="Deploy AI Automation Stack →"
                size="lg"
              />
              <a href="#simulator" className={styles.heroSecondaryBtn}>
                Test Live Simulator ↓
              </a>
            </div>

            <div className={styles.heroTrustBadges}>
              <div className={styles.trustItem}>
                <svg className={styles.trustIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Meta Cloud API Partner
              </div>
              <div className={styles.trustItem}>
                <svg className={styles.trustIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Zero Hallucination Guarantee
              </div>
              <div className={styles.trustItem}>
                <svg className={styles.trustIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                HubSpot &amp; Zoho Certified
              </div>
            </div>

            {/* Skeuomorphic Telemetry Stats Ribbon */}
            <div className={styles.telemetryRibbon}>
              <div className={styles.telemetryCell}>
                <div className={styles.tVal}>&lt; 1.8s</div>
                <div className={styles.tLabel}>Avg. First Response Time</div>
              </div>
              <div className={styles.telemetryCell}>
                <div className={styles.tVal}>3.8x</div>
                <div className={styles.tLabel}>Lead-to-Booking Lift</div>
              </div>
              <div className={styles.telemetryCell}>
                <div className={styles.tVal}>100%</div>
                <div className={styles.tLabel}>24/7/365 Coverage</div>
              </div>
              <div className={styles.telemetryCell}>
                <div className={styles.tVal}>240+ hrs</div>
                <div className={styles.tLabel}>Human Rep Time Saved / Mo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 2: MAP SECTION (DIRECTLY BELOW HERO)
      ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
         SECTION 3: INTERACTIVE AGENT WORKFLOW SIMULATOR
      ══════════════════════════════════════════════════ */}
      <section id="simulator" className={`container ${styles.simulatorSection}`}>
        <AiAgentWorkflowSimulator />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 4: WORKSTATION / 4 AUTOMATION ENGINES
      ══════════════════════════════════════════════════ */}
      <section className="container">
        <AiAutomationWorkstation />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 5: SAVINGS & REVENUE CALCULATOR
      ══════════════════════════════════════════════════ */}
      <section className="container">
        <AiSavingsCalculator />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 6: COMPARISON MATRIX
      ══════════════════════════════════════════════════ */}
      <section className="container">
        <AiAutomationComparisonMatrix />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 7: 30-DAY IMPLEMENTATION ROADMAP
      ══════════════════════════════════════════════════ */}
      <section className="container">
        <div className={styles.preRoadmapCta}>
          <BeamButton
            href="/contact"
            label="Start Your 30-Day AI Implementation Sprint →"
            size="lg"
          />
        </div>
        <AiAutomationRoadmap />
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 8: EDITORIAL CLIENT CASE STUDY
      ══════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════
         SECTION 8: EDITORIAL CLIENT CASE STUDY
      ══════════════════════════════════════════════════ */}
      <section className={styles.caseStudySection}>
        <div className="container">
          <div className={styles.caseStudyCard}>
            <div className={styles.caseStudyMedia}>
              <div className={styles.caseStudyImgFrame}>
                <Image
                  src="/images/Weekend Bhraman Tour Planner.jpg"
                  alt="Weekend Bhraman Tour Planner automated booking engine"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className={styles.caseStudyImg}
                />
                <div className={styles.clientBadgeOverlay}>
                  Client Spotlight &middot; Experiential Travel
                </div>
              </div>

              {/* Verified Autonomous Sales Metrics */}
              <div className={styles.clientProofStrip}>
                <div className={styles.proofItem}>
                  <span className={styles.proofVal}>₹42 Lakhs</span>
                  <span className={styles.proofLabel}>Pipeline Booked</span>
                </div>
                <div className={styles.proofItem}>
                  <span className={styles.proofVal}>1.4s</span>
                  <span className={styles.proofLabel}>Avg Bot Latency</span>
                </div>
                <div className={styles.proofItem}>
                  <span className={styles.proofVal}>82%</span>
                  <span className={styles.proofLabel}>Auto-Booked</span>
                </div>
              </div>

              <div className={styles.clientDeploymentBadge}>
                <span className={styles.livePulseDot} />
                <span>Meta Cloud API &amp; WhatsApp Agents &middot; Live Production</span>
              </div>
            </div>

            <div className={styles.caseStudyContent}>
              <div className={styles.caseKicker}>Odisha Travel &amp; Hospitality Automation</div>
              <h3 className={styles.caseTitle}>
                How Weekend Bhraman Automated 82% of Group Tour Bookings via WhatsApp
              </h3>
              <p className={styles.caseSummary}>
                Weekend Bhraman was drowning in weekend inquiry spikes across Instagram and WhatsApp. By deploying
                our custom multi-agent tour qualifier and dynamic itinerary dispatch engine, they dropped response times
                from 5 hours to 1.4 seconds, booking ₹42 Lakhs in premium travel packages without adding a single headcount.
              </p>

              <div className={styles.metricPillsRow}>
                <div className={styles.metricPill}>
                  <span className={styles.metricPillNumber}>3.8x</span>
                  <span className={styles.metricPillDesc}>Booking Conversion Lift</span>
                </div>
                <div className={styles.metricPill}>
                  <span className={styles.metricPillNumber}>+310%</span>
                  <span className={styles.metricPillDesc}>Qualified Pipeline</span>
                </div>
                <div className={styles.metricPill}>
                  <span className={styles.metricPillNumber}>0</span>
                  <span className={styles.metricPillDesc}>Missed Midnight Leads</span>
                </div>
              </div>

              <div className={styles.caseQuote}>
                &ldquo;Before Copilot, 40% of our weekend ad leads went cold because our staff couldn&apos;t reply until Monday morning. Now, the AI sends the exact villa photos, custom itineraries, and takes the advance deposit in under two minutes.&rdquo;
                <span className={styles.quoteAuthor}>— Debashis M., Operations Director, Weekend Bhraman</span>
              </div>

              <div className={styles.caseInlineBtnRow}>
                <BeamButton
                  href="/contact"
                  label="Automate Your Sales Pipeline Like Weekend Bhraman →"
                  size="md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 9: TECH ARSENAL & INFRASTRUCTURE GRAPHIC
      ══════════════════════════════════════════════════ */}
      <section className={styles.arsenalSection}>
        <div className="container">
          <div className={styles.arsenalHeader}>
            <div className={styles.arsenalKicker}>
              Enterprise Infrastructure Stack
            </div>
            <h2 className={styles.arsenalTitle}>
              Built on Industrial-Grade AI Platforms
            </h2>
          </div>

          <div className={styles.arsenalGrid}>
            <div className={styles.arsenalCard}>
              <div>
                <div className={styles.arsenalIconBox}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z"/>
                  </svg>
                </div>
                <h4>Meta Cloud API</h4>
                <p>Direct official Meta Business Platform webhooks for 100% deliverability &amp; green checkmark security.</p>
              </div>
            </div>

            <div className={styles.arsenalCard}>
              <div>
                <div className={styles.arsenalIconBox}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h4>OpenAI &amp; Anthropic</h4>
                <p>GPT-4o &amp; Claude 3.5 Sonnet reasoning engines fine-tuned with domain-specific few-shot prompting.</p>
              </div>
            </div>

            <div className={styles.arsenalCard}>
              <div>
                <div className={styles.arsenalIconBox}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
                  </svg>
                </div>
                <h4>Pinecone &amp; Chroma</h4>
                <p>High-density vector databases delivering zero-hallucination document search in under 120ms.</p>
              </div>
            </div>

            <div className={styles.arsenalCard}>
              <div>
                <div className={styles.arsenalIconBox}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/>
                  </svg>
                </div>
                <h4>HubSpot &amp; Make.com</h4>
                <p>Enterprise orchestration connecting real-time leads to SMS, WhatsApp, Slack, and Google Sheets.</p>
              </div>
            </div>
          </div>

          {/* Infrastructure Visual Proof Banner */}
          <div className={styles.arsenalBanner}>
            <div className={styles.arsenalBannerContent}>
              <div className={styles.arsenalBannerBadge}>
                <span>🛡️ ENTERPRISE ARCHITECTURE INTEGRITY</span>
              </div>
              <h3 className={styles.arsenalBannerTitle}>
                High-Availability Multi-Agent Infrastructure
              </h3>
              <p className={styles.arsenalBannerDesc}>
                Engineered with auto-scaling microservices, failover fallbacks, and encrypted SOC2-ready data pipelines so your sales engine never drops a lead.
              </p>
              <div className={styles.arsenalBannerBtnWrap}>
                <BeamButton href="/contact" label="Request Architecture Blueprint →" size="md" />
              </div>
            </div>
            <div className={styles.arsenalBannerImgWrap}>
              <Image
                src="/images/hero_performance_scale.jpg"
                alt="Marketing Copilot Enterprise AI Architecture Infrastructure India"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className={styles.bannerImg}
              />
              <div className={styles.bannerOverlayBadge}>
                <span className={styles.liveDot} />
                <span>99.99% SYSTEM AVAILABILITY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 10: FAQ SECTION (CLOSED BY DEFAULT)
      ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqHeader}>
            <div className={styles.faqKicker}>Straight Answers</div>
            <h2 className={styles.faqTitle}>Frequently Asked Questions About AI Automation</h2>
          </div>

          <div className={styles.faqList}>
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className={`${styles.faqRow} ${isOpen ? styles.faqRowOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqBtn}
                    onClick={() => toggleFaq(i)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqQuestion}>{item.q}</span>
                    <span className={styles.faqIcon}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.faqPane}>
                      <p className={styles.faqAnswer}>{item.a}</p>
                      <div className={styles.faqTakeaway}>{item.takeaway}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
         SECTION 11: PRE-FOOTER CTA (MATCHING HOMEPAGE STYLE)
         Light skeuomorphic innerbox with revolving beam button
      ══════════════════════════════════════════════════ */}
      <section className={styles.homeCtaSection}>
        <div className="container">
          <div className={styles.homeCtaInnerBox}>
            <div className={styles.homeCtaEyebrow}>
              <span className={styles.homeCtaDot} />
              <span>Stop Leaking Inbound Revenue</span>
            </div>

            <h2 className={styles.homeCtaHeadline}>
              Ready to Automate Your Inbound Sales Workflow in 30 Days?
            </h2>

            <p className={styles.homeCtaSub}>
              Schedule an executive AI architecture audit. We will evaluate your current response latency,
              demo a live prototype with your product catalog, and present an exact deployment plan.
            </p>

            <div className={styles.homeCtaActions}>
              <BeamButton
                href="/contact"
                label="Schedule AI Architecture Audit →"
                size="lg"
              />
              <Link href="/services" className={styles.heroSecondaryBtn}>
                Explore Other Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
