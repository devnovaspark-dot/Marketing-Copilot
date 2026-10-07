'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';

export default function ContactPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '₹1.5L – ₹5L / month',
    services: [] as string[],
    message: '',
  });
  const [honey, setHoney] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const services = [
    'Performance Marketing',
    'SEO & Organic',
    'Social Media & Content',
    'Creative & Branding',
    'Web Development',
    'AI & Automation',
  ];

  const toggleService = (s: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      budget: form.budget,
      services: form.services,
      message: form.message.trim(),
      _honey: honey,
    };

    try {
      // 1. Try our internal server-side Route Handler first (immune to adblockers)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setIsSubmitted(true);
        router.push('/thank-you');
        return;
      }

      // 2. Direct FormSubmit client-side fallback if server route failed
      const recipientEmail =
        process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || 'novasdmagency@gmail.com';

      const directRes = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            'Full Name': payload.name,
            'Work Email': payload.email,
            'Phone / WhatsApp': payload.phone || 'Not provided',
            'Company Name': payload.company || 'Not specified',
            'Monthly Budget': payload.budget,
            'Services Requested':
              payload.services.length > 0 ? payload.services.join(', ') : 'None selected',
            'Project Details / Message': payload.message || 'No additional details provided',
            _subject: `New Lead Consultation Inquiry — ${payload.name}`,
            _template: 'table',
            _captcha: 'false',
          }),
        }
      );

      const directData = await directRes.json().catch(() => null);
      const isDirectSuccess =
        directRes.ok &&
        (directData?.success === 'true' ||
          directData?.success === true ||
          (typeof directData?.message === 'string' &&
            (directData.message.toLowerCase().includes('activation') ||
              directData.message.toLowerCase().includes('activate') ||
              directData.message.toLowerCase().includes('submitted') ||
              directData.message.toLowerCase().includes('success'))));

      if (isDirectSuccess) {
        setIsSubmitted(true);
        router.push('/thank-you');
        return;
      }

      throw new Error(
        data?.message ||
          directData?.message ||
          'Unable to submit form. Please check your network or reach out directly on WhatsApp.'
      );
    } catch (err: unknown) {
      console.error('Submission error:', err);
      const errMsg =
        err instanceof Error
          ? err.message
          : 'Something went wrong while transmitting your request. Please try again or WhatsApp us directly.';
      setErrorMessage(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      budget: '₹1.5L – ₹5L / month',
      services: [],
      message: '',
    });
    setHoney('');
    setErrorMessage(null);
    setIsSubmitted(false);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Marketing Copilot, I would like to discuss a project. Name: ${form.name || 'Client'}, Phone: ${form.phone || 'N/A'}, Company: ${form.company || 'N/A'}, Services: ${form.services.join(', ') || 'All Services'}, Budget: ${form.budget}.`
  );

  return (
    <div className={styles.page}>
      <div className={styles.heroBg} />
      <div className={styles.ambientGlowLeft} />
      <div className={styles.ambientGlowRight} />

      <div className="container">
        <div className={styles.grid}>
          {/* ══════════════════════════════════════════════════
              LEFT INFO PANE — MINIMALIST & PROFESSIONAL
             ══════════════════════════════════════════════════ */}
          <div className={styles.left}>
            <ScrollReveal>
              <div className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} />
                <span>GET IN TOUCH &bull; BHUBANESWAR HQ &bull; SERVING BUSINESSES ACROSS INDIA</span>
              </div>

              <h1 className={`display-hero ${styles.title}`}>
                Build a Stronger Digital{' '}
                <span className={`accent-gradient ${styles.heroAccent}`}>Presence Across India</span>
              </h1>

              <div className={styles.sub}>
                <p className={styles.subLead}>
                  Partner with a results-driven digital growth team to scale your brand&apos;s visibility, leads, and revenue across India.
                </p>
              </div>

              {/* Minimalist Contact Detail Cards */}
              <div className={styles.contactDetails}>
                <div className={styles.detailCard}>
                  <div className={styles.detailIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Email</span>
                    <a href="mailto:info@marketingcopilot.in" className={styles.detailVal}>
                      info@marketingcopilot.in
                    </a>
                  </div>
                </div>

                <div className={styles.detailCard}>
                  <div className={styles.detailIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Office (HQ)</span>
                    <span className={styles.detailVal}>Mallick Complex, Unit 3, Kharvela Nagar, Bhubaneswar, Odisha 751001</span>
                  </div>
                </div>

                <div className={styles.detailCard}>
                  <div className={styles.detailIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Phone</span>
                    <a href="tel:+918280788689" className={styles.detailVal}>
                      +91 82807 88689 <span className={styles.slaPill}>Contact Now</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.socials}>
                <a
                  href="https://www.linkedin.com/company/nova-spark-digital-marketing-agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label="LinkedIn"
                >
                  <svg className={styles.socialIcon} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/nsdigitalmarketing.agency?stkn=aWZpOWwzZWdzcG1j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label="Instagram"
                >
                  <svg className={styles.socialIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/share/19cD1qU1cV/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label="Facebook"
                >
                  <svg className={styles.socialIcon} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://youtube.com/@ns-digitalmarketingagency?si=E5vtm6XamnVtQ-tB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label="YouTube"
                >
                  <svg className={styles.socialIcon} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FFFFFF"/>
                  </svg>
                  <span>YouTube</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* ══════════════════════════════════════════════════
              RIGHT PANE: MINIMALIST & PROFESSIONAL FORM CARD
             ══════════════════════════════════════════════════ */}
          <div className={styles.right}>
            <ScrollReveal delay={100}>
              {!isSubmitted ? (
                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                  action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || 'novasdmagency@gmail.com'}`}
                  method="POST"
                >
                  {/* Anti-spam Honeypot (hidden from human visitors) */}
                  <input
                    type="text"
                    name="_honey"
                    value={honey}
                    onChange={(e) => setHoney(e.target.value)}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  {/* FormSubmit Configurations */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className={styles.formHeader}>
                    <div className={styles.formBadge}>
                      <span className={styles.formBadgeDot} />
                      <span>STRATEGY CONSULTATION</span>
                    </div>
                    <h3 className={styles.formTitle}>Request a Consultation</h3>
                    <p className={styles.formSubtitle}>Direct strategist response within 4 hours.</p>
                  </div>

                  {errorMessage && (
                    <div className={styles.formError} role="alert">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <div className={styles.formErrorContent}>
                        <span>{errorMessage}</span>
                        <a
                          href={`https://wa.me/918280788689?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.errorWaLink}
                        >
                          Chat Directly on WhatsApp →
                        </a>
                      </div>
                    </div>
                  )}

                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        className={styles.input}
                        placeholder="Rahul Sharma"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        className={styles.input}
                        placeholder="rahul@brand.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label className={styles.label}>Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        className={styles.input}
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>Company Name</label>
                      <input
                        type="text"
                        name="company"
                        className={styles.input}
                        placeholder="e.g. Acme Retailers"
                        value={form.company}
                        onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Monthly Budget</label>
                    <div className={styles.selectWrapper}>
                      <select
                        name="budget"
                        className={styles.select}
                        value={form.budget}
                        onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                      >
                        <option value="₹50K – ₹1.5L / mo">₹50K – ₹1.5L / mo</option>
                        <option value="₹1.5L – ₹5L / mo">₹1.5L – ₹5L / mo</option>
                        <option value="₹5L – ₹15L / mo">₹5L – ₹15L / mo</option>
                        <option value="₹15L+ / mo">₹15L+ / mo</option>
                      </select>
                      <div className={styles.selectArrow}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Services Required</label>
                    <div className={styles.serviceGrid}>
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          className={`${styles.serviceBtn} ${
                            form.services.includes(s) ? styles.serviceBtnActive : ''
                          }`}
                          onClick={() => toggleService(s)}
                        >
                          <span className={styles.serviceIcon}>{form.services.includes(s) ? '✓' : '+'}</span>
                          <span>{s}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Project Goals &amp; Details</label>
                    <textarea
                      name="message"
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="Briefly describe your goals, challenges, or timeline..."
                      rows={2}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    />
                  </div>

                  {/* ══════════════════════════════════════════════════
                      REVOLVING GLOWING BORDER BEAM SUBMIT BUTTON
                     ══════════════════════════════════════════════════ */}
                  <div className={styles.submitWrapper}>
                    <div className={styles.borderBeamWrapper}>
                      <div className={styles.borderGlowAmbient} />
                      <div className={styles.borderBeamSpin} />
                      <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isSubmitting}
                      >
                        <span className={styles.btnShimmer} />
                        <span className={styles.btnGlassGloss} />
                        <span className={styles.btnLabel}>
                          {isSubmitting ? 'Sending Request...' : 'Start the Conversation →'}
                        </span>
                      </button>
                    </div>

                    <div className={styles.formTrustNote}>
                      <span className={styles.trustGreenDot} />
                      <span>100% Confidential &bull; Response within 4 hrs &bull; No Spam</span>
                    </div>
                  </div>
                </form>
              ) : (
                /* ══════════════════════════════════════════════════
                   INLINE SUCCESS CARD (FALLBACK)
                   ══════════════════════════════════════════════════ */
                <div className={styles.successCard}>
                  <div className={styles.ballContainer}>
                    <div className={styles.bouncingBall}>
                      <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className={styles.ballShadow} />
                  </div>

                  <div className={styles.successBadge}>
                    <span className={styles.successDot} />
                    <span>CONSULTATION INITIATED</span>
                  </div>

                  <h3 className={styles.successTitle}>
                    Consultation Request <span className="accent-gradient">Received!</span>
                  </h3>

                  <p className={styles.successDesc}>
                    Thank you{form.name ? `, ${form.name}` : ''}! Our senior growth team has received your project details. We will analyze your requirements and reach out within <strong>2 hours</strong> with a bespoke preliminary growth blueprint.
                  </p>

                  <div className={styles.successActions}>
                    <a
                      href={`https://wa.me/918280788689?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whatsappBtn}
                    >
                      <span>💬 Direct WhatsApp Connect</span>
                    </a>
                    <button type="button" onClick={handleReset} className={styles.resetBtn}>
                      ← Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
