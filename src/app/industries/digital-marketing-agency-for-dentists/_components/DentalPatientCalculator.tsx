'use client';

import { useState, useMemo } from 'react';
import BeamButton from '@/components/BeamButton';
import styles from './DentalPatientCalculator.module.css';

interface PracticeType {
  id: string;
  name: string;
  avgTicket: number;
  ticketLabel: string;
  strategy: string;
  icon: string;
}

const practiceTypes: PracticeType[] = [
  {
    id: 'general',
    name: 'General & Family Dentistry',
    avgTicket: 4500,
    ticketLabel: '₹4,500 Avg (RCT/Crown/Cleaning)',
    strategy: 'Dominate Google Maps 3-Pack for "dentist near me" + emergency toothache search ads.',
    icon: '🦷',
  },
  {
    id: 'implants',
    name: 'Dental Implants & Full Mouth',
    avgTicket: 65000,
    ticketLabel: '₹65,000 Avg (Single to All-on-4)',
    strategy: 'High-intent Google Search campaigns + Video patient transformation proof funnels.',
    icon: '🔩',
  },
  {
    id: 'aligners',
    name: 'Invisalign & Clear Aligners',
    avgTicket: 50000,
    ticketLabel: '₹50,000 Avg (Teens & Young Adults)',
    strategy: 'Instagram Reels smile-makeover showcase + WhatsApp 1-tap 3D scan booking.',
    icon: '✨',
  },
  {
    id: 'cosmetic',
    name: 'Smile Design & Veneers',
    avgTicket: 35000,
    ticketLabel: '₹35,000 Avg (Composite/Porcelain)',
    strategy: 'Visual transformation case galleries, doctor authority branding & retargeting.',
    icon: '💎',
  },
];

export default function DentalPatientCalculator() {
  const [selectedType, setSelectedType] = useState<string>('implants');
  const [targetPatients, setTargetPatients] = useState<number>(25);
  const [currentPatients, setCurrentPatients] = useState<number>(30);

  const currentPractice = useMemo(() => {
    return practiceTypes.find((p) => p.id === selectedType) || practiceTypes[0];
  }, [selectedType]);

  const calculations = useMemo(() => {
    const grossAddedRevenue = targetPatients * currentPractice.avgTicket;
    const estimatedAdSpend = Math.round(targetPatients * (currentPractice.avgTicket > 30000 ? 1200 : 350));
    const projectedRoas = (grossAddedRevenue / Math.max(estimatedAdSpend, 1)).toFixed(1);
    const noShowSaved = Math.round(targetPatients * 0.28 * currentPractice.avgTicket);

    const formattedRevenue =
      grossAddedRevenue >= 100000
        ? `₹${(grossAddedRevenue / 100000).toFixed(2)} Lakhs`
        : `₹${grossAddedRevenue.toLocaleString('en-IN')}`;

    const formattedAnnual =
      grossAddedRevenue * 12 >= 10000000
        ? `₹${((grossAddedRevenue * 12) / 10000000).toFixed(2)} Cr`
        : `₹${((grossAddedRevenue * 12) / 100000).toFixed(1)} Lakhs`;

    return {
      grossAddedRevenue: formattedRevenue,
      annualLift: formattedAnnual,
      estimatedAdSpend: `₹${estimatedAdSpend.toLocaleString('en-IN')}`,
      projectedRoas: `${projectedRoas}X`,
      noShowSaved: `₹${(noShowSaved / 1000).toFixed(0)}K Saved`,
    };
  }, [selectedType, targetPatients, currentPractice]);

  return (
    <div className={styles.calcCard}>
      <div className={styles.calcHeader}>
        <div className={styles.calcBadge}>
          <span>⚡ INTERACTIVE DENTAL CLINIC CALCULATOR</span>
        </div>
        <h3 className={styles.calcTitle}>Simulate Your Practice Patient Acquisition &amp; Revenue</h3>
        <p className={styles.calcSubtitle}>
          Select your primary clinical specialty and target chair bookings to calculate potential monthly clinic revenue,
          patient acquisition cost, and Google Maps growth.
        </p>
      </div>

      <div className={styles.calcGrid}>
        {/* Left Column: Inputs */}
        <div className={styles.inputsCol}>
          <div className={styles.fieldGroup}>
            <div className={styles.fieldLabelRow}>
              <span className={styles.fieldLabel}>1. Select Your Primary Practice Focus</span>
            </div>
            <div className={styles.servicePillsGrid}>
              {practiceTypes.map((p) => {
                const isActive = p.id === selectedType;
                return (
                  <button
                    key={p.id}
                    type="button"
                    className={`${styles.servicePill} ${isActive ? styles.servicePillActive : ''}`}
                    onClick={() => setSelectedType(p.id)}
                  >
                    <span className={styles.pillTitle}>
                      {p.icon} {p.name}
                    </span>
                    <span className={styles.pillTicket}>{p.ticketLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <div className={styles.fieldLabelRow}>
              <span className={styles.fieldLabel}>2. Desired Additional New Patients / Month</span>
              <span className={styles.fieldValBadge}>+{targetPatients} Patients / Mo</span>
            </div>
            <input
              type="range"
              min="10"
              max="80"
              step="5"
              value={targetPatients}
              onChange={(e) => setTargetPatients(parseInt(e.target.value, 10))}
              className={styles.rangeSlider}
              aria-label="Target new patients per month"
            />
            <div className={styles.sliderBounds}>
              <span>+10 Patients (Boutique Practice)</span>
              <span>+80 Patients (Multi-Chair Clinic)</span>
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <div className={styles.fieldLabelRow}>
              <span className={styles.fieldLabel}>3. Current Monthly Chair Consultations</span>
              <span className={styles.fieldValBadge}>{currentPatients} Existing/Mo</span>
            </div>
            <input
              type="range"
              min="15"
              max="150"
              step="5"
              value={currentPatients}
              onChange={(e) => setCurrentPatients(parseInt(e.target.value, 10))}
              className={styles.rangeSlider}
              aria-label="Current monthly chair consultations"
            />
            <div className={styles.sliderBounds}>
              <span>15 Patients</span>
              <span>150 Patients</span>
            </div>
          </div>
        </div>

        {/* Right Column: Results */}
        <div className={styles.resultsCol}>
          <div className={styles.resultHeroBox}>
            <div className={styles.resultHeroLabel}>Projected Extra Monthly Revenue</div>
            <div className={styles.resultHeroNumber}>{calculations.grossAddedRevenue}</div>
            <div className={styles.resultHeroSub}>
              Annualised Practice Growth: <strong>{calculations.annualLift} / Year</strong>
            </div>
          </div>

          <div className={styles.metricCardsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricCardLabel}>Estimated Blended ROAS</div>
              <div className={styles.metricCardVal}>{calculations.projectedRoas}</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricCardLabel}>Chair No-Show Shield</div>
              <div className={styles.metricCardVal}>{calculations.noShowSaved}</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricCardLabel}>Maps 3-Pack Rank</div>
              <div className={styles.metricCardVal}>Top 3 Guaranteed</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricCardLabel}>Est. Media Investment</div>
              <div className={styles.metricCardVal}>{calculations.estimatedAdSpend}</div>
            </div>
          </div>

          <div className={styles.strategyBox}>
            <div className={styles.strategyTitle}>
              <span>🎯 Tailored Growth Playbook</span>
            </div>
            <p className={styles.strategyDesc}>{currentPractice.strategy}</p>
          </div>

          <div className={styles.calcCtaWrapper}>
            <BeamButton
              href="/contact"
              label="Claim Your Custom Dental Growth Architecture"
              size="sm"
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
}

