'use client';
import { useState } from 'react';
import Link from 'next/link';
import BeamButton from '@/components/BeamButton';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './FAQSection.module.css';

interface FAQItem {
  q: string;
  a: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    q: 'What Digital Marketing Services Does Marketing Copilot Offer in India?',
    a: 'Marketing Copilot offers full-service digital marketing services such as SEO, Google Ads, Meta Ads, social media marketing, website solutions, content marketing, and more, which are specific to your business goals.',
  },
  {
    q: 'Can You Help My Business Rank on Google in India?',
    a: 'Yes, our digital marketing solutions for SEO in India cover keyword research, technical optimization, quality content creation, local SEO, and strategies that help you attract relevant customers.',
  },
  {
    q: 'How Long Does Digital Marketing Take to Show Results?',
    a: 'It depends on different industries, competition, websites, budgets, and strategies. Paid campaigns can drive quick results, and SEO takes time to optimize and create meaningful organic growth.',
  },
  {
    q: 'Do You Provide Online Marketing Services for Small Businesses?',
    a: 'Yes, our online marketing services are tailored for businesses of various sizes. We create practical strategies around your budget, goals, audience, and industry to improve visibility, generate leads, and support growth.',
  },
  {
    q: 'What makes Marketing Copilot the best digital marketing company in India?',
    a: (
      <>
        <Link href="/" className={styles.brandLink}>
          Marketing Copilot
        </Link>{' '}
        is a blend of strategy, creativity, data, and performance, offering focused digital marketing services. We deliver measurable results, clear communication, and tailored digital marketing solutions that meet your business goals.
      </>
    ),
  },
  {
    q: 'What industries does Marketing Copilot work with?',
    a: 'We work with IT and app businesses, Yoga and Wellness, Travel Agencies, Interior Design, EdTech, e-commerce, real estate, healthcare, education, D2C brands, and professional services in India and across Odisha.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container-sm">
        <ScrollReveal className="text-center">
          <div className="eyebrow" style={{ margin: '0 auto 14px' }}>
            <span className="eyebrow-dot" />
            FAQ &amp; Knowledge Base
          </div>
          <h3 className="display-lg" style={{ marginTop: 16 }}>
            The Answers Behind{' '}
            <span className="accent-gradient">Better Marketing</span>
          </h3>
        </ScrollReveal>

        <div className={styles.list}>
          {faqs.map((f, i) => (
            <ScrollReveal key={i} delay={i * 40}>
              <div className={`${styles.item} ${open === i ? styles.open : ''}`}>
                <button
                  className={styles.question}
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span>{f.q}</span>
                  <span className={styles.icon}>{open === i ? '−' : '+'}</span>
                </button>
                <div
                  className={styles.answer}
                  style={{
                    maxHeight: open === i ? '600px' : '0',
                  }}
                >
                  <p className={styles.answerText}>{f.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Center Bottom FAQ Action */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, marginTop: 44 }}>
          <p style={{ color: '#64748B', fontSize: 15, margin: 0 }}>Still have questions about scaling your digital presence?</p>
          <BeamButton href="/contact" label="Talk to Our Growth Team" size="md" />
        </div>
      </div>
    </section>
  );
}
