'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import AutoZoomImage from '@/components/AutoZoomImage';
import styles from './RealGrowthSection.module.css';

interface CaseStudy {
  id: string;
  client: string;
  category: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  color: string;
  statBadge: string;
  pdfUrl: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'medallion-house',
    client: 'Medallion House',
    category: 'Meta Ads + Amazon Store + Web Platform',
    overview: 'An established offline retail brand seeking nationwide digital expansion, recovery from Meta Ads suspension, and end-to-end e-commerce infrastructure.',
    challenge: 'Conduct a forensic audit, resolve complex Meta Ads account suspensions, and establish an authoritative multichannel presence across Amazon Brand Store and a custom digital flagship.',
    solution: 'Conducted a deep-dive policy audit and resolved account compliance directly with Meta Human Support. Architected a custom high-converting Amazon Brand Store and built a lightning-fast direct-to-consumer web platform.',
    results: [
      'Resolved Meta Ads suspension and scaled qualified leads at ₹15–20 CPL',
      'Designed & launched a dedicated Amazon Brand Store with A+ Content',
      'Engineered and deployed the brand’s custom modern e-commerce platform',
    ],
    image: '/images/Medallion house.jpg',
    color: '#0B2093',
    statBadge: '₹15–20 CPL',
    pdfUrl: '/docs/medallion_house_case_study.pdf',
  },
  {
    id: 'weekend-bhraman',
    client: 'Weekend Bhraman Tour Planner',
    category: 'Meta Ads + Google Business Profile (GBP)',
    overview: 'A premier travel and pilgrimage tour operator struggling with low inquiry volume and unverified local Google search listings for high-ticket packages.',
    challenge: 'Pinpoint targeting bottlenecks in Meta Ads, improve high-intent lead qualification, and resolve complex Google Business Profile verification roadblocks.',
    solution: 'Restructured Meta Ads funnels around high-intent regional travel cohorts. Deployed high-converting video creatives and successfully verified and optimized their Google Business Profile for local search dominance.',
    results: [
      'Generated high-converting qualified booking leads at ₹25–30',
      'Successfully verified and optimized Google Business Profile ranking',
      'Rapidly expanded offerings from 1 pilot package to 7+ active tour circuits',
    ],
    image: '/images/Weekend Bhraman Tour Planner.jpg',
    color: '#0D007F',
    statBadge: '7+ Tour Packages',
    pdfUrl: '/docs/weekend_bhraman_case_study.pdf',
  },
  {
    id: 'ekatraa',
    client: 'Ekatraa',
    category: '360° Digital Marketing & SEO Growth',
    overview: 'A bespoke event services brand originating in Bhubaneswar needing complete brand positioning, organic local search presence, and multi-platform customer acquisition.',
    challenge: 'Formulate an end-to-end market entry strategy, establish localized search authority, and fix cross-channel Meta Ads pixel connectivity.',
    solution: 'Executed in-depth technical SEO and Geo-targeted keyword architecture. Streamlined multi-platform Meta Ads tracking, launched viral video reel funnels, and captured local SERP pack rankings.',
    results: [
      'Dominated local SEO rankings across Google SERP and Geo queries',
      'Resolved Meta Ads pixel tracking and initiated automated lead pipelines',
      'Accelerated organic weekly engagement from 200+ to over 1,000+ views',
    ],
    image: '/images/Ekatraa.jpg',
    color: '#F59E0B',
    statBadge: '5X View Velocity',
    pdfUrl: '/docs/ekatraa_case_study.pdf',
  },
  {
    id: 'sri-pandurangan',
    client: 'Sri Pandurangan Divine Fresh',
    category: 'SEO Strategy + Meta Ads & WhatsApp Funnel',
    overview: 'A premium fresh products enterprise needing an automated high-velocity inbound call and direct WhatsApp ordering funnel for daily consumer inquiries.',
    challenge: 'Overcome stagnant inquiry volume, configure seamless direct WhatsApp lead routing, and eliminate ad spend wastage on broad targeting.',
    solution: 'Re-engineered Meta Ads targeting with hyper-local geographic radius bidding. Integrated direct 1-click WhatsApp order automations and established a compounding organic local SEO funnel.',
    results: [
      'Generated consistent qualified direct customer orders at under ₹20 CPL',
      'Engineered a compounding SEO-driven organic search acquisition engine',
      'Integrated instant WhatsApp ordering routing with zero lead leakage',
    ],
    image: '/images/Sri Pandurangan Divine Fresh.png',
    color: '#10B981',
    statBadge: '<₹20 Inbound Leads',
    pdfUrl: '/docs/divine_fresh_case_study.pdf',
  },
];

export default function RealGrowthSection() {
  return (
    <section className={`section ${styles.section}`}>
      {/* Background ambient lighting */}
      <div className={styles.bgLight1} />
      <div className={styles.bgLight2} />

      <div className="container">
        {/* Section Header (Centered & High-Impact) */}
        <div className={styles.header}>
          <ScrollReveal direction="up" className="text-center">
            <div className="eyebrow" style={{ margin: '0 auto 12px' }}>
              <span className={styles.trophyIcon}>🏆</span>
              <span>Proven Results &amp; Case Studies</span>
            </div>

            <h3 className={`display-lg ${styles.headline}`}>
              From Digital Strategy to{' '}
              <span className="accent-gradient">Measurable Growth</span>
            </h3>

            <p className={`body-lg ${styles.sub}`}>
              Check out the outcomes we provide with our digital marketing services. From SEO and Google Ads to social media and local marketing, our digital marketing solutions are built to create visibility, leads, and lasting business value.
            </p>
          </ScrollReveal>
        </div>

        {/* 2x2 Grid of Detailed Case Study Cards */}
        <div className={styles.grid}>
          {caseStudies.map((study, idx) => (
            <ScrollReveal key={study.id} delay={idx * 80} className={styles.cardWrapper}>
              <div className={styles.card} style={{ '--accent-color': study.color } as React.CSSProperties}>
                {/* Visual Header with Image (Full 1200x500 Aspect Ratio) */}
                <div className={styles.cardVisual}>
                  <AutoZoomImage
                    src={study.image}
                    alt={study.client}
                    title={`${study.client} — ${study.category}`}
                    category={study.category}
                    description={study.overview}
                    aspectRatio="1200 / 500"
                    zoomScale={1.9}
                  />
                </div>

                {/* Content Details */}
                <div className={styles.cardContent}>
                  {/* Category & Stat Badges clearly positioned below image */}
                  <div className={styles.metaRow}>
                    <span className={styles.catBadge}>{study.category}</span>
                    <span className={styles.statPill}>
                      <span className={styles.statDot} style={{ background: study.color }} />
                      <span style={{ color: study.color, fontWeight: 800 }}>{study.statBadge}</span>
                    </span>
                  </div>

                  <div className={styles.cardContentHeader}>
                    <h4 className={styles.clientTitle}>{study.client}</h4>
                    <p className={styles.overviewText}>{study.overview}</p>
                  </div>

                  {/* Challenge & Solution Cards */}
                  <div className={styles.specsGrid}>
                    {/* Challenge Block */}
                    <div className={styles.specBox}>
                      <div className={styles.specHeader}>
                        <span className={styles.challengeTag}>⚡ Challenge</span>
                      </div>
                      <p className={styles.specText}>{study.challenge}</p>
                    </div>

                    {/* Solution Block */}
                    <div className={styles.specBox}>
                      <div className={styles.specHeader}>
                        <span className={styles.solutionTag}>🚀 Marketing Copilot Solution</span>
                      </div>
                      <p className={styles.specText}>{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Box (Tactile Emerald Highlight) */}
                  <div className={styles.resultsBox}>
                    <div className={styles.resultsHeader}>
                      <span className={styles.resultsIcon}>🛡️</span>
                      <span className={styles.resultsTitle}>Verified Commercial Results</span>
                    </div>
                    <ul className={styles.resultsList}>
                      {study.results.map((res, i) => (
                        <li key={i} className={styles.resultItem}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardActions}>
                    <BeamButton
                      href={study.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      label="Download Case Study (PDF)"
                      size="sm"
                      fullWidth
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Runway Action CTA */}
        <div className={styles.bottomCtaWrap}>
          <BeamButton href="/contact" label="Get Custom Case Study & Growth Plan" size="md" />
        </div>
      </div>
    </section>
  );
}
