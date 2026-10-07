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
    a: 'Marketing Copilot offers full-service digital marketing services such as SEO, Google Ads, Meta Ads, social media marketing, website solutions, content marketing, and AI-powered growth systems tailored to your specific business goals.',
  },
  {
    q: 'Can You Help My Business Rank on Google Across India?',
    a: 'Yes, our digital marketing solutions for SEO in India cover keyword research, technical optimization, quality content creation, local & national SEO, and authority building that help you attract qualified buyers across target markets.',
  },
  {
    q: 'How Long Does Digital Marketing Take to Show Results?',
    a: 'It depends on different industries, competition, websites, budgets, and strategies. Paid campaigns can drive quick results, while SEO takes time to optimize and build sustainable, compounding organic growth.',
  },
  {
    q: 'Do You Provide Online Marketing Services for Small Businesses?',
    a: 'Yes, our online marketing services are tailored for businesses of various sizes. We create practical strategies around your budget, goals, audience, and industry to improve visibility, generate leads, and support growth.',
  },
  {
    q: 'What Makes Marketing Copilot a Leading Digital Marketing Company in India?',
    a: (
      <>
        <Link href="/" className={styles.brandLink}>
          Marketing Copilot
        </Link>{' '}
        combines strategy, creativity, engineering, and performance marketing to help brands scale. We deliver measurable ROI, transparent reporting, and tailored digital marketing solutions designed for ambitious businesses across India.
      </>
    ),
  },
  {
    q: 'What industries does Marketing Copilot work with?',
    a: 'We work with businesses across India, including IT and app businesses, healthcare, education, travel, e-commerce, real estate, D2C brands, hospitality, and professional services.',
  },
  {
    q: 'Can we meet your team in Bhubaneswar?',
    a: 'Yes, absolutely. Our physical headquarters is located at Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar, Odisha. We welcome founders and marketing leaders for in-person strategy sessions, while collaborating seamlessly with teams across India.',
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
