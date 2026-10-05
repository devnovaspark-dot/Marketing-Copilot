'use client';

import { useState, useEffect } from 'react';

export default function ReadingProgressBar() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolled = (window.scrollY / scrollHeight) * 100;
        setCompletion(Math.min(100, Math.max(0, scrolled)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${completion}%`,
        height: '3.5px',
        background: 'linear-gradient(90deg, #3B82F6 0%, #1D4ED8 50%, #0B2093 100%)',
        boxShadow: '0 0 10px rgba(59, 130, 246, 0.7), 0 0 2px #1D4ED8',
        zIndex: 99999,
        transition: 'width 100ms ease-out',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}
