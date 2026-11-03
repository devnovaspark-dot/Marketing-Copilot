import React from 'react';

export function Icon3DTooth({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36">
      <defs>
        <linearGradient id="toothBase" x1="12" y1="6" x2="36" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#F0F9FF" />
          <stop offset="85%" stopColor="#BAE6FD" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
        <linearGradient id="toothShadow" x1="24" y1="20" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" stopOpacity="0" />
          <stop offset="100%" stopColor="#0369A1" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="toothGloss" x1="14" y1="8" x2="26" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <filter id="toothDrop" x="6" y="8" width="36" height="38" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#0284C7" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Ambient ground shadow */}
      <ellipse cx="24" cy="43" rx="14" ry="3" fill="#0F172A" fillOpacity="0.12" />
      {/* Main 3D Tooth Shape */}
      <path
        d="M13 14C13 9 17 6 24 6C31 6 35 9 35 14C35 18 34 22 33 26C32 30 31.5 35 30 40C29 42.5 26.5 42 25.5 39C24.5 36 24.5 31 24 31C23.5 31 23.5 36 22.5 39C21.5 42 19 42.5 18 40C16.5 35 16 30 15 26C14 22 13 18 13 14Z"
        fill="url(#toothBase)"
        filter="url(#toothDrop)"
      />
      {/* Occlusion shading between roots */}
      <path
        d="M21 34C22.5 32 23 31 24 31C25 31 25.5 32 27 34C26 38 25 41 24 41C23 41 22 38 21 34Z"
        fill="url(#toothShadow)"
      />
      {/* Top crown curvature & specular highlight */}
      <path
        d="M15 13C16 9.5 19.5 8 24 8C28.5 8 32 9.5 33 13C31 11.5 28 10.5 24 10.5C20 10.5 17 11.5 15 13Z"
        fill="url(#toothGloss)"
      />
      {/* Specular crest on left cusp */}
      <ellipse cx="17.5" cy="13.5" rx="3.5" ry="2" transform="rotate(-15 17.5 13.5)" fill="#FFFFFF" fillOpacity="0.85" />
      {/* 4-point sparkle star */}
      <path
        d="M32 9L32.8 11.2L35 12L32.8 12.8L32 15L31.2 12.8L29 12L31.2 11.2L32 9Z"
        fill="#0284C7"
      />
      <path
        d="M32 10.2L32.5 11.5L33.8 12L32.5 12.5L32 13.8L31.5 12.5L30.2 12L31.5 11.5L32 10.2Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function Icon3DMapPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36">
      <defs>
        <radialGradient id="pinHead" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="40%" stopColor="#EF4444" />
          <stop offset="85%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </radialGradient>
        <radialGradient id="pinLens" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </radialGradient>
        <filter id="pinShadow" x="8" y="4" width="32" height="42" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#DC2626" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Ground shadow */}
      <ellipse cx="24" cy="43.5" rx="12" ry="3.5" fill="#0F172A" fillOpacity="0.16" />
      {/* Main 3D Pin Body */}
      <path
        d="M24 6C17.37 6 12 11.37 12 18C12 26.5 22.5 39.5 24 41C25.5 39.5 36 26.5 36 18C36 11.37 30.63 6 24 6Z"
        fill="url(#pinHead)"
        filter="url(#pinShadow)"
      />
      {/* Gloss highlight on top left dome */}
      <path
        d="M14.5 16C14.5 12 18 8.5 23 8C19 9 16 12 15.5 16H14.5Z"
        fill="#FFFFFF"
        fillOpacity="0.6"
      />
      {/* Recessed Center Core */}
      <circle cx="24" cy="18" r="7" fill="url(#pinLens)" />
      <circle cx="24" cy="18" r="7" stroke="#E2E8F0" strokeWidth="1" />
      {/* Inner Target Center in Sapphire */}
      <circle cx="24" cy="18" r="3.2" fill="#0B2093" />
      <circle cx="23" cy="17" r="1" fill="#FFFFFF" fillOpacity="0.9" />
    </svg>
  );
}

export function Icon3DDiamond({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36">
      <defs>
        <linearGradient id="diaTable" x1="16" y1="9" x2="32" y2="17" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="100%" stopColor="#BAE6FD" />
        </linearGradient>
        <linearGradient id="diaFacet1" x1="10" y1="12" x2="24" y2="39" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="diaFacet2" x1="24" y1="17" x2="38" y2="39" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0B2093" />
        </linearGradient>
        <linearGradient id="diaFacetCenter" x1="17" y1="17" x2="31" y2="39" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7DD3FC" />
          <stop offset="50%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <filter id="diaGlow" x="6" y="6" width="36" height="38" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#0284C7" floodOpacity="0.35" />
        </filter>
      </defs>
      {/* Ground shadow */}
      <ellipse cx="24" cy="42" rx="13" ry="3" fill="#0F172A" fillOpacity="0.14" />
      {/* Diamond Body with Filter */}
      <g filter="url(#diaGlow)">
        {/* Top Table */}
        <polygon points="17,9 31,9 37,17 11,17" fill="url(#diaTable)" />
        {/* Left Crown Facet */}
        <polygon points="11,17 17,9 18,17" fill="#BAE6FD" />
        {/* Right Crown Facet */}
        <polygon points="37,17 31,9 30,17" fill="#7DD3FC" />
        {/* Bottom Center Pavilion */}
        <polygon points="18,17 30,17 24,39" fill="url(#diaFacetCenter)" />
        {/* Bottom Left Pavilion */}
        <polygon points="11,17 18,17 24,39" fill="url(#diaFacet1)" />
        {/* Bottom Right Pavilion */}
        <polygon points="30,17 37,17 24,39" fill="url(#diaFacet2)" />
        {/* Specular White Facet Lines */}
        <polyline points="17,9 18,17 24,39" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="0.8" />
        <polyline points="31,9 30,17 24,39" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="0.8" />
        <line x1="11" y1="17" x2="37" y2="17" stroke="#FFFFFF" strokeOpacity="0.8" strokeWidth="0.8" />
      </g>
      {/* Specular Sparkle Star */}
      <path d="M15 11L15.6 12.6L17.2 13.2L15.6 13.8L15 15.4L14.4 13.8L12.8 13.2L14.4 12.6L15 11Z" fill="#FFFFFF" />
    </svg>
  );
}

export function Icon3DShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36">
      <defs>
        <linearGradient id="shieldRim" x1="12" y1="6" x2="36" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="shieldLeft" x1="14" y1="8" x2="24" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="shieldRight" x1="24" y1="8" x2="34" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <filter id="shieldShadow" x="8" y="5" width="32" height="39" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#059669" floodOpacity="0.35" />
        </filter>
      </defs>
      {/* Ground shadow */}
      <ellipse cx="24" cy="43" rx="13" ry="3" fill="#0F172A" fillOpacity="0.14" />
      {/* Outer Rim */}
      <path
        d="M24 7L13 11V21C13 30 18 36.5 24 40C30 36.5 35 30 35 21V11L24 7Z"
        fill="url(#shieldRim)"
        filter="url(#shieldShadow)"
      />
      {/* Left Inner Half (Light) */}
      <path
        d="M24 9.2L15 12.5V20.5C15 28 19 33.5 24 37V9.2Z"
        fill="url(#shieldLeft)"
      />
      {/* Right Inner Half (Shadowed for 3D ridge) */}
      <path
        d="M24 9.2L33 12.5V20.5C33 28 29 33.5 24 37V9.2Z"
        fill="url(#shieldRight)"
      />
      {/* Center 3D Checkmark */}
      <path
        d="M19 22.5L22.5 26L29 18.5"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Specular gloss reflection on left rim */}
      <path
        d="M16 13L24 9.5V11L17 14V21C17 24 18 27 19.5 29.5L18 30.5C16.5 27.5 15.5 24.5 15.5 21V13H16Z"
        fill="#FFFFFF"
        fillOpacity="0.6"
      />
    </svg>
  );
}

export function Icon3DScale({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36">
      <defs>
        <linearGradient id="goldBeam" x1="8" y1="14" x2="40" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="50%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#A16207" />
        </linearGradient>
        <linearGradient id="goldPillar" x1="22" y1="10" x2="26" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="50%" stopColor="#CA8A04" />
          <stop offset="100%" stopColor="#854D0E" />
        </linearGradient>
        <linearGradient id="panGrad" x1="10" y1="26" x2="20" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="70%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#A16207" />
        </linearGradient>
        <filter id="scaleShadow" x="6" y="8" width="36" height="35" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#854D0E" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Ground shadow */}
      <ellipse cx="24" cy="42" rx="14" ry="3" fill="#0F172A" fillOpacity="0.14" />
      <g filter="url(#scaleShadow)">
        {/* Center Support Pillar */}
        <rect x="22.5" y="12" width="3" height="26" rx="1.5" fill="url(#goldPillar)" />
        {/* Heavy Base Pedestal */}
        <path d="M18 38C18 36.5 20 36 24 36C28 36 30 36.5 30 38L32 40.5H16L18 38Z" fill="url(#goldPillar)" />
        {/* Top Sphere Finial */}
        <circle cx="24" cy="11" r="3" fill="url(#goldBeam)" />
        <circle cx="23" cy="10" r="0.8" fill="#FFFFFF" />
        {/* Main Horizontal Cross Beam */}
        <path d="M10 16.5C10 15.5 24 14.5 24 14.5C24 14.5 38 15.5 38 16.5C38 17.5 24 16.5 24 16.5C24 16.5 10 17.5 10 16.5Z" fill="url(#goldBeam)" />
        {/* Left Pan Chains */}
        <line x1="11" y1="16.5" x2="8" y2="28" stroke="#CA8A04" strokeWidth="1" strokeLinecap="round" />
        <line x1="11" y1="16.5" x2="16" y2="28" stroke="#CA8A04" strokeWidth="1" strokeLinecap="round" />
        {/* Left Suspended Pan */}
        <path d="M7 28C7 28 8 32 12 32C16 32 17 28 17 28H7Z" fill="url(#panGrad)" />
        {/* Right Pan Chains */}
        <line x1="37" y1="16.5" x2="32" y2="28" stroke="#CA8A04" strokeWidth="1" strokeLinecap="round" />
        <line x1="37" y1="16.5" x2="40" y2="28" stroke="#CA8A04" strokeWidth="1" strokeLinecap="round" />
        {/* Right Suspended Pan */}
        <path d="M31 28C31 28 32 32 36 32C40 32 41 28 41 28H31Z" fill="url(#panGrad)" />
      </g>
    </svg>
  );
}

export function Icon3DChart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36">
      <defs>
        <linearGradient id="bar1Front" x1="10" y1="26" x2="16" y2="39" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="bar2Front" x1="20" y1="18" x2="28" y2="39" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0B2093" />
        </linearGradient>
        <linearGradient id="bar3Front" x1="31" y1="10" x2="39" y2="39" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <filter id="chartGlow" x="6" y="7" width="36" height="37" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#0B2093" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Ground shadow */}
      <ellipse cx="24" cy="42" rx="14" ry="3" fill="#0F172A" fillOpacity="0.14" />
      <g filter="url(#chartGlow)">
        {/* Bar 1 (Low) */}
        <rect x="10" y="27" width="7" height="12" rx="2" fill="url(#bar1Front)" />
        <ellipse cx="13.5" cy="27" rx="3.5" ry="1.5" fill="#CBD5E1" />
        {/* Bar 2 (Medium) */}
        <rect x="20.5" y="19" width="7" height="20" rx="2" fill="url(#bar2Front)" />
        <ellipse cx="24" cy="19" rx="3.5" ry="1.5" fill="#7DD3FC" />
        {/* Bar 3 (High) */}
        <rect x="31" y="11" width="7" height="28" rx="2" fill="url(#bar3Front)" />
        <ellipse cx="34.5" cy="11" rx="3.5" ry="1.5" fill="#A7F3D0" />
        {/* Dynamic 3D Upward Trend Curve with Arrow */}
        <path
          d="M10 24C16 23 22 17 33 8"
          stroke="#F59E0B"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        {/* Glowing Gold Arrowhead */}
        <polygon points="36,7 30,7 34,12" fill="#F59E0B" />
        <polygon points="36,7 30,7 34,12" stroke="#FFFFFF" strokeWidth="0.5" />
      </g>
    </svg>
  );
}
