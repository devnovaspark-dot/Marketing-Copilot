'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import BeamButton from '@/components/BeamButton';
import QuickConnectMapSection from '@/app/_components/QuickConnectMapSection';
import styles from './web-dev-page.module.css';

// 6 Core Web Development Services
const webServices = [
  {
    num: '01',
    icon: '💻',
    tag: 'CLEAN CODE & SPEED',
    title: 'Custom Website Development',
    desc: 'We develop custom websites for your business needs, business goals, and the style of your brand. All websites are responsive, user-friendly, and clean-coded. Speed and performance are also a priority for us, ensuring that visitors can enjoy a smooth browsing experience.',
  },
  {
    num: '02',
    icon: '🛍️',
    tag: 'ONLINE COMMERCE',
    title: 'E-Commerce Website Development',
    desc: 'We design secure and user-friendly websites to enable businesses to sell products online. We develop a seamless shopping journey, from streamlined product management and checkout to WooCommerce and payment integration.',
  },
  {
    num: '03',
    icon: '⚡',
    tag: 'SCALABLE CMS',
    title: 'WordPress Development',
    desc: 'We build professional WordPress websites that are easily managed and scalable to grow with your business. Whether it’s custom themes and plugins or speed and security enhancements, we build reliable websites that give you more control over your online content.',
  },
  {
    num: '04',
    icon: '🎨',
    tag: 'INTUITIVE EXPERIENCES',
    title: 'UI/UX Design Integration',
    desc: 'Simple and modern UI/UX principles are provided to make your website easy and fun to use. Clear layouts, simple navigation, strong call-to-action buttons, and mobile-friendly designs help visitors find information quickly and interact with your website comfortably.',
  },
  {
    num: '05',
    icon: '🛡️',
    tag: 'SECURITY & UPTIME',
    title: 'Website Maintenance & Support',
    desc: 'Regular maintenance and support keep your website up to date, safe, and running smoothly. We offer updates, bug fixes, performance checks, and security monitoring to minimize technical issues and ensure your site is ready for routine business operations.',
  },
  {
    num: '06',
    icon: '📱',
    tag: 'MOBILE & WEB APPS',
    title: 'App Development',
    desc: 'We create simple, easy-to-use mobile and web applications built around your business needs. We work with you on planning, design, development, and testing to ensure you get a reliable app that delivers a seamless experience, meets your objectives, and reaches your customers.',
  },
];

// 3-Step Growth Process
const growthSteps = [
  {
    step: 'STEP 01',
    icon: '🔍',
    title: 'Research & Analysis',
    desc: 'We study your market, audience, competitors, and data to uncover valuable insights and identify opportunities for sustainable digital growth.',
    tag: 'Market & Audience Audit',
  },
  {
    step: 'STEP 02',
    icon: '🧭',
    title: 'Strategy Planning',
    desc: 'We turn insights into a clear digital strategy, choosing the right channels, content, and campaigns to achieve your business goals.',
    tag: 'Clear Channel Architecture',
  },
  {
    step: 'STEP 03',
    icon: '🚀',
    title: 'Execution',
    desc: 'We put the strategy into action with focused campaigns, engaging content, and continuous optimization designed to deliver measurable business results.',
    tag: 'Agile Milestone Delivery',
  },
];

// 4 Pillars of Why Nova Spark is the Best
const whyBestPillars = [
  {
    icon: '📱',
    title: 'Modern & Responsive Design',
    desc: 'We build clean, modern websites with a consistent experience on desktop, tablet, and mobile devices. Each element is straightforward, understandable, and easy to navigate for visitors.',
    feature: 'Mobile-First Ergonomics',
  },
  {
    icon: '⚡',
    title: 'Performance & Speed',
    desc: 'Slow websites can impact both user experience and engagement. Optimized development, clean code, and performance optimizations ensure your website loads quickly and operates seamlessly.',
    feature: 'Sub-Second Loading SLA',
  },
  {
    icon: '🎯',
    title: 'SEO-Friendly Development',
    desc: 'SEO Development Practices: Strong Technical Base for Search Visibility. Consideration of important SEO elements, from website structure to mobile responsiveness and performance.',
    feature: 'Google Technical SEO Schema',
  },
  {
    icon: '🤝',
    title: 'Ongoing Support',
    desc: 'The partnership doesn’t finish once we have your website up and running. We maintain and support your website to ensure it stays up-to-date, secure, and reliable as your business grows.',
    feature: '24/7 Security & Health Checks',
  },
];

// FAQ Data (Closed by default per user request)
const webDevFaqs = [
  {
    q: '1. What makes Nova Spark a website development agency in Bhubaneswar?',
    a: 'We at Nova Spark fuse creativity, tech, and business strategy to develop a website that resonates with your brand, captures your audience, and serves your business objectives.',
  },
  {
    q: '2. What types of websites does Nova Spark develop?',
    a: 'We create custom business websites, WordPress sites, e-commerce websites, and more, depending on your needs, your audience, and your future business goals.',
  },
  {
    q: '3. How does Nova Spark approach website development?',
    a: 'We begin by getting to know your business, your people, and your goals. We then design, build, test, and fine-tune your site for optimal performance and user experience.',
  },
  {
    q: '4. Can Nova Spark create an SEO-friendly website?',
    a: 'Yes. We adhere to SEO best practices such as responsive design, proper website structure, quick loading speeds, and optimizing technical elements to deliver a solid groundwork for SEO success.',
  },
  {
    q: '5. Does Nova Spark provide website maintenance after development?',
    a: 'Yes. We maintain and support your website throughout, ensuring it’s kept up to date, bug-free, fast, secure, and optimized to perform at its best.',
  },
  {
    q: '6. Why should businesses choose Nova Spark for website development?',
    a: 'Our website development is centered on beautiful, usable, responsive, and goal-driven websites. Our solution integrates all three aspects of development, performance, and user experience.',
  },
];

export default function WebDevelopmentPage() {
  // FAQs closed by default
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* ══════════════════════════════════════════════════
          1. HERO SECTION (SEAMLESS SKEUOMORPHIC HERO)
         ══════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroMeshGrid} />
        <div className="container">
          <div className={styles.heroCenter}>
            <ScrollReveal>
              <div className={styles.heroEyebrowPill}>
                <span className={styles.emeraldPulseDot} />
                <span>Best Website Development Agency in Bhubaneswar</span>
              </div>

              <h1 className={styles.heroTitle}>
                High-Performance Websites{' '}
                <span className="accent-gradient">Built to Grow</span>
              </h1>

              <p className={styles.heroSub}>
                Create a website that keeps up with your business. From sleek designs to smooth performance, Nova Spark develops responsive and scalable websites that deliver better user experiences and support long-term digital growth.
              </p>

              <div className={styles.heroActions}>
                <BeamButton
                  href="/contact"
                  label="Get a Free Quote →"
                  size="lg"
                />
                <BeamButton
                  href="#services"
                  label="Talk to Our Experts →"
                  size="lg"
                  variant="outline"
                />
              </div>

              {/* Skeuomorphic Telemetry Ribbon */}
              <div className={styles.telemetryRibbon}>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>&lt; 0.8s</span>
                  <span className={styles.tLabel}>Mobile Load Speed</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>99/100</span>
                  <span className={styles.tLabel}>Google PageSpeed SLA</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>+280%</span>
                  <span className={styles.tLabel}>Lead Inquiries</span>
                </div>
                <div className={styles.telemetryCell}>
                  <span className={styles.tVal}>100%</span>
                  <span className={styles.tLabel}>Mobile Responsive</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. MAP SECTION DIRECTLY BELOW HERO
          (Driving Business Growth With Digital Marketing in Bhubaneswar)
         ══════════════════════════════════════════════════ */}
      <QuickConnectMapSection />

      {/* ══════════════════════════════════════════════════
          3. SMART WEB SOLUTIONS FOR GROWING BRANDS (6 SERVICES)
         ══════════════════════════════════════════════════ */}
      <section id="services" className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>Smart Web Solutions for Growing Brands</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Smart Web Solutions{' '}
                <span className="accent-gradient">for Growing Brands</span>
              </h2>
              <p className={styles.sectionDesc}>
                We combine strategy, creativity, and technology to develop high-performance websites that deliver seamless experiences and turn visitors into customers.
              </p>
            </ScrollReveal>
          </div>

          {/* 6 Skeuomorphic Service Cards with Equal Height & Aligned Footers */}
          <div className={styles.servicesGrid}>
            {webServices.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 60} className={styles.cardCol}>
                <div className={styles.serviceSkeuoCard}>
                  <div>
                    <div className={styles.serviceTopHeader}>
                      <span className={styles.serviceNumberEmbossed}>{svc.num}</span>
                      <div className={styles.serviceIconBowl}>{svc.icon}</div>
                    </div>
                    <span className={styles.serviceTagPill}>{svc.tag}</span>
                    <h3 className={styles.serviceCardTitle}>
                      {svc.title}
                    </h3>
                  </div>
                  <p className={styles.serviceCardDesc}>{svc.desc}</p>
                  <div className={styles.serviceCardFooter}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#0B2093' }}>
                      ✓ High-Performance Build
                    </span>
                    <span className={styles.serviceArrow}>→</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Rich Visual Architecture Showcase with Graphic Image */}
          <ScrollReveal>
            <div className={styles.visualShowcaseBox}>
              <div className={styles.visualShowcaseContent}>
                <span className={styles.visualBadge}>⚡ ENTERPRISE-GRADE WEB ARCHITECTURE</span>
                <h3 className={styles.visualTitle}>
                  Engineered for Conversion Velocity &amp; Sub-Second Mobile Speed
                </h3>
                <p className={styles.visualText}>
                  From responsive custom code to modern e-commerce stores and mobile web applications, we combine fast architectures, user-friendly layouts, and scalable technology for Bhubaneswar businesses.
                </p>
                <div className={styles.visualStatsStrip}>
                  <div className={styles.statItem}>
                    <span className={styles.statVal}>99 / 100</span>
                    <span className={styles.statLbl}>PageSpeed SLA</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statVal}>100%</span>
                    <span className={styles.statLbl}>Clean Codebase</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statVal}>Omnichannel</span>
                    <span className={styles.statLbl}>Lead Routing</span>
                  </div>
                </div>
              </div>

              <div className={styles.visualImageWrap}>
                <Image
                  src="/images/Website devlopment.png"
                  alt="Modern Website Development Nova Spark Digital Bhubaneswar"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className={styles.visualImg}
                />
                <div className={styles.visualImgOverlay}>
                  <span>Fast, Responsive &amp; Scalable</span>
                  <span>Nova Spark Verified</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. HIGH-PERFORMANCE WEBSITES BUILT FOR GROWTH (PROCESS)
         ══════════════════════════════════════════════════ */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>Our Strategic Roadmap</span>
              </div>
              <h2 className={styles.sectionTitle}>
                High-Performance Websites{' '}
                <span className="accent-gradient">Built for Growth</span>
              </h2>
              <p className={styles.sectionDesc}>
                A clear, disciplined process from discovery to deployment that turns complex requirements into high-performing digital platforms.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.processGrid}>
            {growthSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 80} className={styles.cardCol}>
                <div className={styles.processCard}>
                  <div>
                    <div className={styles.processStepHeader}>
                      <span className={styles.processStepBadge}>{step.step}</span>
                      <div className={styles.processIconBowl}>{step.icon}</div>
                    </div>
                    <h3 className={styles.processTitle}>{step.title}</h3>
                  </div>
                  <p className={styles.processDesc}>{step.desc}</p>
                  <div className={styles.processFooter}>
                    <span className={styles.processPill}>✓ {step.tag}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. WHAT MAKES NOVA SPARK THE BEST WEB DEVELOPMENT COMPANY?
         ══════════════════════════════════════════════════ */}
      <section className={styles.whyBestSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>The Nova Spark Advantage</span>
              </div>
              <h2 className={styles.sectionTitle}>
                What Makes Nova Spark the{' '}
                <span className="accent-gradient">Best Web Development Company?</span>
              </h2>
              <p className={styles.sectionDesc}>
                Our Nova Spark Digital Marketing Agency websites feature contemporary design, seamless functionality, and business-oriented development. We strive to provide websites that are professional, efficient, and promote business growth.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.whyBestGrid}>
            {whyBestPillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 70} className={styles.cardCol}>
                <div className={styles.whyBestCard}>
                  <div>
                    <div className={styles.whyBestIconBowl}>{p.icon}</div>
                    <h3 className={styles.whyBestTitle}>{p.title}</h3>
                  </div>
                  <p className={styles.whyBestDesc}>{p.desc}</p>
                  <div className={styles.whyBestFooter}>
                    <span className={styles.whyBestPill}>✓ {p.feature}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. FREQUENTLY ASKED QUESTIONS ABOUT WEB DEVELOPMENT
          * Closed by default as requested *
         ══════════════════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <ScrollReveal>
              <div className={styles.eyebrowBadge}>
                <span className={styles.eyebrowDot} />
                <span>Direct Answers &amp; Transparency</span>
              </div>
              <h2 className={styles.sectionTitle}>
                Frequently Asked Questions{' '}
                <span className="accent-gradient">About Web Development</span>
              </h2>
              <p className={styles.sectionDesc}>
                Everything you need to know about our web development process, technology choices, timelines, and ongoing maintenance.
              </p>
            </ScrollReveal>
          </div>

          <div className={styles.faqContainer}>
            {webDevFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`${styles.faqRow} ${isOpen ? styles.faqRowOpen : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqBtn}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqQuestion}>{faq.q}</span>
                    <span className={styles.faqIconBowl}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.faqPane}>
                      <p className={styles.faqAnswer}>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. ABOVE FOOTER CARD (MAIN HOME PAGE STYLE CTA CARD)
          * Style: Similar as homepage CTA card *
          * Text: 100% preserved as provided by user *
         ══════════════════════════════════════════════════ */}
      <section className={styles.homeStyleCtaSection}>
        <div className="container">
          <div className={styles.homeStyleCtaBox}>
            <ScrollReveal>
              <div className={styles.ctaEyebrowBadge}>
                <span className={styles.ctaPulseDot} />
                <span>Let’s Talk About Your Project</span>
              </div>

              <h2 className={styles.ctaHeadline}>
                Turn Your Website Into a{' '}
                <span className="accent-gradient">Growth Tool</span>
              </h2>

              <p className={styles.ctaParagraph}>
                We develop high-performing websites tailored to your business, combining smart design, smooth functionality, and performance to create better digital experiences.
              </p>

              <div className={styles.ctaActions}>
                <BeamButton
                  href="/contact"
                  label="Get a Free Quote →"
                  size="lg"
                />
              </div>

              <div className={styles.ctaBrandPunchline}>
                Nova Spark Digital — Modern. Fast. Scalable.
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
