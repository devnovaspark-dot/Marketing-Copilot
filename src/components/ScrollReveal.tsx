'use client';
import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';
  style?: React.CSSProperties;
}

let sharedObserver: IntersectionObserver | null = null;
const targetElements = new Set<Element>();

function getObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            sharedObserver?.unobserve(entry.target);
            targetElements.delete(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );
  }
  return sharedObserver;
}

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  style 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Short-circuit on mobile: elements are already styled visible in CSS
    if (window.innerWidth <= 768) {
      el.classList.add('visible');
      return;
    }

    const obs = getObserver();
    if (!obs) {
      el.classList.add('visible');
      return;
    }

    targetElements.add(el);
    obs.observe(el);

    return () => {
      targetElements.delete(el);
      obs.unobserve(el);
    };
  }, []);

  const dirClass = direction !== 'up' ? `reveal-${direction}` : '';

  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
