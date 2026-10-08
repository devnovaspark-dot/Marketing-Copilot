'use client';

import { useState, useMemo } from 'react';
import { INDIA_VIEWBOX, INDIA_CITIES, INDIA_STATE_PATHS } from '@/data/indiaMapPaths';
import styles from './IndiaMap3D.module.css';

export default function IndiaMap3D() {
  const [hoveredCityId, setHoveredCityId] = useState<string | null>(null);

  const hoveredCity = useMemo(() => {
    if (!hoveredCityId) return null;
    return INDIA_CITIES.find((c) => c.id === hoveredCityId) || null;
  }, [hoveredCityId]);

  const hqCity = useMemo(() => {
    return INDIA_CITIES.find((c) => c.isHQ) || INDIA_CITIES[0];
  }, []);

  return (
    <div className={styles.mapCanvasWrapper}>
      {/* Precision Tech Corner Brackets */}
      <div className={styles.cornerBracketTL} />
      <div className={styles.cornerBracketTR} />
      <div className={styles.cornerBracketBL} />
      <div className={styles.cornerBracketBR} />

      {/* Top Telemetry Watermark Row */}
      <div className={styles.telemetryTopRow}>
        <div className={styles.telemetryTagLeft}>
          <span className={styles.telemetryMonoLabel}>SYS_GEO //</span>
          <span>20.2961° N, 85.8245° E</span>
        </div>
        <div className={styles.telemetryTagRight}>
          <span className={styles.telemetryLiveDot} />
          <span>BHUBANESWAR HQ · PAN-INDIA GRID</span>
        </div>
      </div>

      {/* Bottom Telemetry Status Row */}
      <div className={styles.telemetryBottomRow}>
        <div className={styles.telemetryCorridorCount}>
          <span className={styles.telemetryLiveDotBlue} />
          <span>12+ ACTIVE STRATEGIC CORRIDORS</span>
        </div>
        <div className={styles.telemetryStatusNorm}>
          STATUS: ONLINE · SUB-15M SLA
        </div>
      </div>

      {/* 100% Stable Vector Map of India (Zero Hover Movement / Zero Jitter) */}
      <div className={styles.stageContainer}>
        <svg
          className={styles.svgCanvas}
          viewBox={INDIA_VIEWBOX}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="arcGradClean" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="arcGradNE" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.95" />
            </linearGradient>
            {/* Subtle background radar radial glow */}
            <radialGradient id="hqRadialAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.12" />
              <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Radial Aura centered on Bhubaneswar HQ */}
          <circle
            cx="357.6"
            cy="374.6"
            r="280"
            fill="url(#hqRadialAura)"
            pointerEvents="none"
          />

          {/* Creative Background: Precision Concentric Telemetry Radar Guides */}
          <circle
            cx="357.6"
            cy="374.6"
            r="70"
            fill="none"
            stroke="rgba(37, 99, 235, 0.12)"
            strokeDasharray="4 4"
            pointerEvents="none"
          />
          <circle
            cx="357.6"
            cy="374.6"
            r="140"
            fill="none"
            stroke="rgba(37, 99, 235, 0.09)"
            strokeDasharray="5 5"
            pointerEvents="none"
          />
          <circle
            cx="357.6"
            cy="374.6"
            r="220"
            fill="none"
            stroke="rgba(37, 99, 235, 0.06)"
            strokeDasharray="6 6"
            pointerEvents="none"
          />
          <circle
            cx="357.6"
            cy="374.6"
            r="310"
            fill="none"
            stroke="rgba(37, 99, 235, 0.04)"
            strokeDasharray="6 6"
            pointerEvents="none"
          />

          {/* Radar Range Distance Labels */}
          <text x="362" y="303" className={styles.radarDistanceText} pointerEvents="none">
            300 KM
          </text>
          <text x="362" y="233" className={styles.radarDistanceText} pointerEvents="none">
            650 KM
          </text>
          <text x="362" y="153" className={styles.radarDistanceText} pointerEvents="none">
            1,100 KM
          </text>

          {/* Telemetry Axis Crosshairs */}
          <line
            x1="357.6"
            y1="40"
            x2="357.6"
            y2="640"
            stroke="rgba(37, 99, 235, 0.05)"
            strokeDasharray="3 4"
            pointerEvents="none"
          />
          <line
            x1="40"
            y1="374.6"
            x2="560"
            y2="374.6"
            stroke="rgba(37, 99, 235, 0.05)"
            strokeDasharray="3 4"
            pointerEvents="none"
          />

          {/* Diagonal Telemetry Crosshairs */}
          <line
            x1="216"
            y1="233"
            x2="499"
            y2="516"
            stroke="rgba(37, 99, 235, 0.03)"
            strokeDasharray="2 5"
            pointerEvents="none"
          />
          <line
            x1="216"
            y1="516"
            x2="499"
            y2="233"
            stroke="rgba(37, 99, 235, 0.03)"
            strokeDasharray="2 5"
            pointerEvents="none"
          />

          {/* India States Contours (Crisp, High-Contrast Light Cartography) */}
          <g className={styles.statesLayer} pointerEvents="none">
            {INDIA_STATE_PATHS.map((state) => (
              <path
                key={state.id}
                d={state.d}
                className={styles.statePath}
              />
            ))}
          </g>

          {/* Animated Connecting Arcs from Bhubaneswar HQ to National Hubs */}
          <g className={styles.arcsLayer} pointerEvents="none">
            {INDIA_CITIES.filter((c) => !c.isHQ).map((city) => {
              const isHovered = hoveredCityId === city.id;
              const midX = (hqCity.x + city.x) / 2 + (hqCity.y - city.y) * 0.12;
              const midY = (hqCity.y + city.y) / 2 - Math.abs(hqCity.x - city.x) * 0.12;
              const pathD = `M ${hqCity.x} ${hqCity.y} Q ${midX} ${midY} ${city.x} ${city.y}`;

              return (
                <path
                  key={`arc-${city.id}`}
                  d={pathD}
                  className={`${styles.telemetryArc} ${
                    city.isNorthEast ? styles.telemetryArcNE : ''
                  } ${isHovered ? styles.telemetryArcActive : ''}`}
                />
              );
            })}
          </g>

          {/* City Nodes & Beacons (Rock-Solid Hit Target — Zero Hallucination/Jitter) */}
          <g className={styles.pinsLayer} pointerEvents="none">
            {INDIA_CITIES.map((city) => {
              const isHovered = hoveredCityId === city.id;
              const isHQ = city.isHQ;
              const isNE = city.isNorthEast;

              return (
                <g
                  key={city.id}
                  className={`${styles.cityPinGroup} ${isHovered ? styles.cityPinActive : ''}`}
                  transform={`translate(${city.x}, ${city.y})`}
                  pointerEvents="none"
                >
                  {/* Stable Invisible Hit Area Target — r=10 ensures zero overlap between close cities like Mumbai & Pune */}
                  <circle
                    cx="0"
                    cy="0"
                    r="10"
                    className={styles.hitTarget}
                    pointerEvents="all"
                    onMouseEnter={() => setHoveredCityId(city.id)}
                    onMouseLeave={() =>
                      setHoveredCityId((prev) => (prev === city.id ? null : prev))
                    }
                  />

                  {/* Radiating beacon pulse wave (pure visual, pointerEvents none) */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isHQ ? 16 : isNE ? 13 : 11}
                    pointerEvents="none"
                    className={
                      isHQ
                        ? styles.pinBeaconOuterHQ
                        : isNE
                        ? styles.pinBeaconOuterNE
                        : styles.pinBeaconOuter
                    }
                  />

                  {/* Core pin circle (pure visual, pointerEvents none) */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isHQ ? 6.5 : isNE ? 5.5 : 4.5}
                    pointerEvents="none"
                    className={
                      isHQ
                        ? styles.pinCoreHQ
                        : isNE
                        ? styles.pinCoreNE
                        : styles.pinCore
                    }
                  />

                  {/* Inner dot */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isHQ ? 2 : 1.5}
                    fill="#FFFFFF"
                    pointerEvents="none"
                  />
                </g>
              );
            })}
          </g>
        </svg>

        {/* Minimal Floating HUD Badge — ONLY shown when a pin is actively hovered */}
        {hoveredCity && (
          <div
            className={styles.floatingPinTooltip}
            style={{
              left: `${(hoveredCity.x / 600) * 100}%`,
              top: `${(hoveredCity.y / 680) * 100}%`,
            }}
          >
            <div className={styles.tooltipPillHeader}>
              <span className={styles.tooltipIcon}>
                {hoveredCity.isHQ ? '📍' : hoveredCity.isNorthEast ? '🌿' : '⚡'}
              </span>
              <strong className={styles.tooltipName}>{hoveredCity.name}</strong>
              {hoveredCity.isHQ && <span className={styles.badgeHQ}>HQ</span>}
              {hoveredCity.isNorthEast && <span className={styles.badgeNE}>Northeast</span>}
            </div>
            <div className={styles.tooltipSub}>{hoveredCity.specialization}</div>
          </div>
        )}
      </div>
    </div>
  );
}
