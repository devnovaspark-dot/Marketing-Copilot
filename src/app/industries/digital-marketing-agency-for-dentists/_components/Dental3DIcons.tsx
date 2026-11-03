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

export function Icon3DMeta({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36">
      <defs>
        <radialGradient id="metaGrad1" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="50%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#312E81" />
        </radialGradient>
        <radialGradient id="metaGrad2" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="70%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </radialGradient>
        <filter id="metaDrop" x="6" y="6" width="36" height="38" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#4F46E5" floodOpacity="0.3" />
        </filter>
      </defs>
      <ellipse cx="24" cy="42" rx="14" ry="3" fill="#0F172A" fillOpacity="0.12" />
      <g filter="url(#metaDrop)">
        <circle cx="24" cy="23" r="16" fill="url(#metaGrad1)" />
        <circle cx="24" cy="23" r="11" fill="#FFFFFF" fillOpacity="0.18" />
        <circle cx="24" cy="23" r="7" fill="url(#metaGrad2)" />
        <circle cx="24" cy="23" r="3" fill="#FFFFFF" />
        <path d="M16 15C18 12 21 11 25 11" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.8" />
      </g>
    </svg>
  );
}

export function Icon3DSearch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36">
      <defs>
        <linearGradient id="searchRim" x1="10" y1="8" x2="30" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0B2093" />
        </linearGradient>
        <linearGradient id="searchHandle" x1="26" y1="26" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#64748B" />
          <stop offset="40%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <radialGradient id="searchGlass" cx="38%" cy="36%" r="62%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#E0F2FE" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.85" />
        </radialGradient>
        <filter id="searchDrop" x="6" y="6" width="38" height="38" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#0284C7" floodOpacity="0.3" />
        </filter>
      </defs>
      <ellipse cx="25" cy="42" rx="14" ry="3" fill="#0F172A" fillOpacity="0.12" />
      <g filter="url(#searchDrop)">
        <path d="M28 28L39 39C40.5 40.5 40.5 42.5 39 44C37.5 45.5 35.5 45.5 34 44L23 33" stroke="url(#searchHandle)" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="21" cy="20" r="13" fill="url(#searchRim)" />
        <circle cx="21" cy="20" r="9.5" fill="url(#searchGlass)" />
        <ellipse cx="18" cy="16" rx="3.5" ry="2" transform="rotate(-30 18 16)" fill="#FFFFFF" fillOpacity="0.85" />
      </g>
    </svg>
  );
}

export function Icon3DSEO({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36">
      <defs>
        <linearGradient id="rocketBody" x1="16" y1="8" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F1F5F9" />
          <stop offset="80%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#94A3B8" />
        </linearGradient>
        <linearGradient id="rocketCone" x1="28" y1="6" x2="38" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#BE123C" />
        </linearGradient>
        <linearGradient id="rocketFlame" x1="14" y1="30" x2="8" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
        <filter id="rocketDrop" x="6" y="6" width="36" height="38" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3.5" stdDeviation="2" floodColor="#BE123C" floodOpacity="0.25" />
        </filter>
      </defs>
      <ellipse cx="24" cy="43" rx="13" ry="2.8" fill="#0F172A" fillOpacity="0.12" />
      <g filter="url(#rocketDrop)">
        {/* Flame */}
        <path d="M15 29L9 36C8 38 10 40 12 39L19 33Z" fill="url(#rocketFlame)" />
        {/* Left Fin */}
        <path d="M12 24L10 32L18 29Z" fill="#0B2093" />
        {/* Right Fin */}
        <path d="M24 18L32 20L29 28Z" fill="#0B2093" />
        {/* Main Rocket Fuselage */}
        <path d="M16 30C16 30 20 22 28 14C34 8 38 7 38 7C38 7 37 11 31 17C23 25 15 29 15 29Z" fill="url(#rocketBody)" stroke="#E2E8F0" strokeWidth="0.5" />
        {/* Nose Cone */}
        <path d="M33 12C35 10 38 7 38 7C38 7 35 10 33 12Z" fill="url(#rocketCone)" />
        {/* Porthole */}
        <circle cx="26" cy="18" r="3" fill="#0284C7" />
        <circle cx="26" cy="18" r="1.8" fill="#BAE6FD" />
      </g>
    </svg>
  );
}

export function Icon3DContent({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36">
      <defs>
        <linearGradient id="docGrad" x1="12" y1="8" x2="34" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="penGrad" x1="28" y1="12" x2="42" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <filter id="docDrop" x="8" y="6" width="34" height="38" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#0F172A" floodOpacity="0.15" />
        </filter>
      </defs>
      <ellipse cx="24" cy="42" rx="13" ry="3" fill="#0F172A" fillOpacity="0.12" />
      <g filter="url(#docDrop)">
        {/* Document sheet */}
        <rect x="11" y="8" width="22" height="30" rx="3.5" fill="url(#docGrad)" stroke="#CBD5E1" strokeWidth="1" />
        {/* Folded corner */}
        <polygon points="27,8 33,14 27,14" fill="#94A3B8" />
        {/* Text lines */}
        <line x1="16" y1="17" x2="25" y2="17" stroke="#0B2093" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="23" x2="28" y2="23" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="16" y1="28" x2="26" y2="28" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
        {/* Stylus / Pen with 3D gradient */}
        <path d="M28 32L38 16C39 14.5 41 14.5 42 16C43 17 43 19 41.5 20.5L31.5 36L27 37L28 32Z" fill="url(#penGrad)" />
      </g>
    </svg>
  );
}

export function Icon3DVideo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36">
      <defs>
        <linearGradient id="vidGrad" x1="8" y1="10" x2="40" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="50%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <radialGradient id="playGlass" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </radialGradient>
        <filter id="vidDrop" x="6" y="8" width="36" height="36" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#DC2626" floodOpacity="0.3" />
        </filter>
      </defs>
      <ellipse cx="24" cy="42" rx="14" ry="3" fill="#0F172A" fillOpacity="0.12" />
      <g filter="url(#vidDrop)">
        <rect x="9" y="11" width="30" height="23" rx="6" fill="url(#vidGrad)" />
        <path d="M12 15C12 13.5 15 13 24 13C33 13 36 13.5 36 15" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" />
        {/* 3D Play Triangle */}
        <polygon points="21,17 30,22.5 21,28" fill="url(#playGlass)" />
      </g>
    </svg>
  );
}

export function Icon3DCalendar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36">
      <defs>
        <linearGradient id="calHead" x1="10" y1="8" x2="38" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B2093" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="calBody" x1="10" y1="16" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F1F5F9" />
        </linearGradient>
        <filter id="calDrop" x="6" y="6" width="36" height="38" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#0B2093" floodOpacity="0.2" />
        </filter>
      </defs>
      <ellipse cx="24" cy="42" rx="14" ry="3" fill="#0F172A" fillOpacity="0.12" />
      <g filter="url(#calDrop)">
        <rect x="9" y="15" width="30" height="24" rx="4" fill="url(#calBody)" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="9" y="10" width="30" height="9" rx="3" fill="url(#calHead)" />
        {/* Ring binders */}
        <rect x="15" y="7" width="3" height="6" rx="1.5" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="0.5" />
        <rect x="30" y="7" width="3" height="6" rx="1.5" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="0.5" />
        {/* Verification Checkmark */}
        <path d="M19 28L23 32L30 23" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function Icon3DAligner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36">
      <defs>
        <linearGradient id="alignerGrad" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#BAE6FD" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.95" />
        </linearGradient>
        <filter id="alignerDrop" x="6" y="8" width="36" height="36" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#0284C7" floodOpacity="0.25" />
        </filter>
      </defs>
      <ellipse cx="24" cy="42" rx="13" ry="2.8" fill="#0F172A" fillOpacity="0.1" />
      <g filter="url(#alignerDrop)">
        {/* Arch Tray */}
        <path
          d="M11 32C11 20 16 11 24 11C32 11 37 20 37 32C37 34 35 35 33 34C31 33 31 31 31 29C31 20 28 15 24 15C20 15 17 20 17 29C17 31 17 33 15 34C13 35 11 34 11 32Z"
          fill="url(#alignerGrad)"
          stroke="#FFFFFF"
          strokeWidth="1.2"
        />
        {/* Cusp segments */}
        <circle cx="15" cy="22" r="1.8" fill="#FFFFFF" fillOpacity="0.9" />
        <circle cx="20" cy="15" r="1.8" fill="#FFFFFF" fillOpacity="0.9" />
        <circle cx="28" cy="15" r="1.8" fill="#FFFFFF" fillOpacity="0.9" />
        <circle cx="33" cy="22" r="1.8" fill="#FFFFFF" fillOpacity="0.9" />
        {/* Sparkle */}
        <path d="M24 7L24.6 8.5L26 9L24.6 9.5L24 11L23.4 9.5L22 9L23.4 8.5L24 7Z" fill="#38BDF8" />
      </g>
    </svg>
  );
}

export function Icon3DImplant({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36">
      <defs>
        <linearGradient id="abutmentGrad" x1="16" y1="8" x2="32" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F0F9FF" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
        <linearGradient id="screwGrad" x1="18" y1="20" x2="30" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="45%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <filter id="implantDrop" x="10" y="6" width="28" height="38" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.2" />
        </filter>
      </defs>
      <ellipse cx="24" cy="43" rx="10" ry="2.5" fill="#0F172A" fillOpacity="0.12" />
      <g filter="url(#implantDrop)">
        {/* Crown Ceramic Cap */}
        <path d="M16 13C16 9 19 7 24 7C29 7 32 9 32 13C32 16 30 18 27 18H21C18 18 16 16 16 13Z" fill="url(#abutmentGrad)" stroke="#BAE6FD" strokeWidth="0.8" />
        {/* Abutment collar */}
        <rect x="20.5" y="18" width="7" height="3" rx="1" fill="#94A3B8" />
        {/* Titanium Screw Threads */}
        <path d="M20 21L28 21L27 24L21 24Z" fill="url(#screwGrad)" />
        <path d="M19.5 25L28.5 25L27.5 28L20.5 28Z" fill="url(#screwGrad)" />
        <path d="M20 29L28 29L27 32L21 32Z" fill="url(#screwGrad)" />
        <path d="M20.5 33L27.5 33L26.5 36L21.5 36Z" fill="url(#screwGrad)" />
        {/* Apex tip */}
        <polygon points="21.5,37 26.5,37 24,42" fill="#334155" />
      </g>
    </svg>
  );
}


