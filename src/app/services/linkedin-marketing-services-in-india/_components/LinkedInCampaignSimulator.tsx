'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import styles from './LinkedInCampaignSimulator.module.css';

type TargetPersona = 'csuite' | 'tech' | 'growth';
type CampaignType = 'leadgen' | 'content' | 'abm';

const personas = {
  csuite: {
    label: 'C-Suite & Founders',
    icon: '👔',
    jobTitles: ['CEO', 'Founder', 'Managing Director', 'Co-Founder', 'Partner'],
    companySize: '50 – 500+ Employees',
    reachMultiplier: 0.85,
    cplBase: 1200,
    pipelineRatio: 45,
    specs: 'Direct targeting of founders & primary decision-makers holding enterprise signing authority across Tier-1 Indian hubs and global markets.',
  },
  tech: {
    label: 'IT, SaaS & Engineering Heads',
    icon: '💻',
    jobTitles: ['CTO', 'VP Engineering', 'Head of Product', 'IT Director', 'Solutions Architect'],
    companySize: '100 – 1000+ Employees',
    reachMultiplier: 1.15,
    cplBase: 950,
    pipelineRatio: 38,
    specs: 'Targeting tech evaluators and architects looking for software solutions, cloud services, and enterprise engineering capabilities.',
  },
  growth: {
    label: 'Marketing & Sales Heads',
    icon: '📈',
    jobTitles: ['CMO', 'VP of Sales', 'Chief Revenue Officer', 'Head of Growth', 'Marketing Director'],
    companySize: '20 – 500 Employees',
    reachMultiplier: 1.3,
    cplBase: 820,
    pipelineRatio: 30,
    specs: 'Focusing on commercial revenue leaders actively evaluating agencies, growth tools, and customer acquisition infrastructure.',
  },
};

const campaignTypes = {
  leadgen: {
    label: 'Instant Lead Gen Forms',
    icon: '📋',
    convRate: '8.4%',
    desc: 'Pre-filled LinkedIn forms that convert on mobile without friction.',
  },
  content: {
    label: 'Thought Leadership & Carousels',
    icon: '✨',
    convRate: '4.8%',
    desc: 'High-authority founder posts & educational carousel engagement.',
  },
  abm: {
    label: 'Account-Based Marketing (ABM)',
    icon: '🎯',
    convRate: '12.2%',
    desc: 'Laser-focused named company targeting for high-ticket contracts.',
  },
};

export default function LinkedInCampaignSimulator() {
  const [selectedPersona, setSelectedPersona] = useState<TargetPersona>('csuite');
  const [selectedType, setSelectedType] = useState<CampaignType>('leadgen');
  const [budgetIndex, setBudgetIndex] = useState<number>(2); // ₹1,50,000 default

  const budgetOptions = [
    { label: '₹50,000 / mo', value: 50000 },
    { label: '₹1,00,000 / mo', value: 100000 },
    { label: '₹1,50,000 / mo', value: 150000 },
    { label: '₹2,50,000 / mo', value: 250000 },
    { label: '₹5,00,000 / mo', value: 500000 },
  ];

  const currentBudget = budgetOptions[budgetIndex];
  const persona = personas[selectedPersona];
  const cType = campaignTypes[selectedType];

  // Dynamic telemetry calculations
  const rawReach = Math.round((currentBudget.value / 18) * persona.reachMultiplier);
  const formattedReach = `${(rawReach / 1000).toFixed(1)}K+`;
  
  const estimatedLeads = Math.max(12, Math.round(currentBudget.value / persona.cplBase));
  const estimatedPipeline = `₹${((estimatedLeads * persona.pipelineRatio * 1000) / 100000).toFixed(1)} Lakhs`;

  return (
    <section className={styles.section} id="linkedin-simulator">
      <div className="container">
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
            <span className={styles.pulseDot} />
            <span>Interactive B2B Targeting Engine</span>
          </div>
          <h2 className={styles.headline}>
            Simulate Your LinkedIn <span className="accent-gradient">B2B Reach &amp; Pipeline</span>
          </h2>
          <p className={styles.subhead}>
            Select your ideal decision-maker persona, campaign format, and monthly advertising budget to project your verified audience reach and qualified B2B lead outcomes.
          </p>
        </ScrollReveal>

        <div className={styles.simulatorContainer}>
          {/* Controls Column (Left) */}
          <div className={styles.controlsCol}>
            {/* Persona Selector */}
            <div className={styles.controlGroup}>
              <div className={styles.controlLabel}>
                <span>1. Target Decision-Maker Persona</span>
              </div>
              <div className={styles.pillSelector}>
                {(Object.keys(personas) as TargetPersona[]).map((key) => {
                  const p = personas[key];
                  const isActive = selectedPersona === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      className={`${styles.pillBtn} ${isActive ? styles.pillBtnActive : ''}`}
                      onClick={() => setSelectedPersona(key)}
                    >
                      <span>{p.icon}</span>
                      <span>{p.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className={styles.audienceTags}>
                {persona.jobTitles.map((title) => (
                  <span key={title} className={styles.audienceTag}>
                    {title}
                  </span>
                ))}
              </div>
            </div>

            {/* Campaign Objective Type */}
            <div className={styles.controlGroup}>
              <div className={styles.controlLabel}>
                <span>2. Campaign Objective / Format</span>
              </div>
              <div className={styles.pillSelector}>
                {(Object.keys(campaignTypes) as CampaignType[]).map((key) => {
                  const t = campaignTypes[key];
                  const isActive = selectedType === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      className={`${styles.pillBtn} ${isActive ? styles.pillBtnActive : ''}`}
                      onClick={() => setSelectedType(key)}
                    >
                      <span>{t.icon}</span>
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget Selector */}
            <div className={styles.controlGroup}>
              <div className={styles.controlLabel}>
                <span>3. Monthly Advertising Budget</span>
                <span style={{ color: '#0F172A', fontWeight: 800 }}>{currentBudget.label}</span>
              </div>
              <div className={styles.rangeWrap}>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={budgetIndex}
                  onChange={(e) => setBudgetIndex(parseInt(e.target.value, 10))}
                  className={styles.rangeSlider}
                  aria-label="Monthly advertising budget range slider"
                />
                <div className={styles.rangeTicks}>
                  <span>₹50K</span>
                  <span>₹1.0L</span>
                  <span>₹1.5L</span>
                  <span>₹2.5L</span>
                  <span>₹5.0L+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Display Output Column (Right) */}
          <div className={styles.displayCol}>
            <div>
              <div className={styles.displayHeader}>
                <div className={styles.displayBadge}>
                  <span className={styles.displaySignalLive} />
                  <span>Targeting Telemetry Projection</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>B2B Segment: {persona.companySize}</span>
              </div>

              <div className={styles.metricsGrid}>
                <div className={styles.metricBox}>
                  <div className={`${styles.metricValue} ${styles.metricValueHighlight}`}>
                    {formattedReach}
                  </div>
                  <div className={styles.metricTitle}>Targeted Professional Impressions</div>
                </div>

                <div className={styles.metricBox}>
                  <div className={styles.metricValue}>
                    {estimatedLeads} – {Math.round(estimatedLeads * 1.35)}
                  </div>
                  <div className={styles.metricTitle}>Projected Qualified Inquiries / Mo</div>
                </div>

                <div className={styles.metricBox}>
                  <div className={styles.metricValue}>
                    {cType.convRate}
                  </div>
                  <div className={styles.metricTitle}>Est. Form Conversion Rate</div>
                </div>

                <div className={styles.metricBox}>
                  <div className={`${styles.metricValue} ${styles.metricValueHighlight}`}>
                    {estimatedPipeline}
                  </div>
                  <div className={styles.metricTitle}>Potential Sales Pipeline Value</div>
                </div>
              </div>

              <div className={styles.targetingSpecs}>
                <div className={styles.targetingSpecsTitle}>Targeting Parameters Applied:</div>
                <p className={styles.targetingSpecsDesc}>{persona.specs}</p>
              </div>
            </div>

            <div className={styles.displayFooter}>
              <div className={styles.guaranteeNote}>
                <span className={styles.checkIcon}>✓</span>
                <span>Zero Bot Clicks · 100% Verified Professional Audiences in India &amp; Worldwide</span>
              </div>
              <BeamButton
                href="/contact"
                label="Launch Your Targeted Campaign →"
                size="md"
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
