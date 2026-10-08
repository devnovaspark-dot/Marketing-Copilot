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
      {/* 100% Stable Vector Map of India (Zero Hover Movement / Zero Tilt) */}
      <div className={styles.stageContainer}>
        <svg
          className={styles.svgCanvas}
          viewBox={INDIA_VIEWBOX}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="arcGradClean" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="arcGradNE" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* India States Contours (Crisp, High-Contrast Light Cartography) */}
          <g className={styles.statesLayer}>
            {INDIA_STATE_PATHS.map((state) => (
              <path
                key={state.id}
                d={state.d}
                className={styles.statePath}
              />
            ))}
          </g>

          {/* Animated Connecting Arcs from Bhubaneswar HQ to National Hubs */}
          <g className={styles.arcsLayer}>
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

          {/* City Nodes & Beacons (No permanent sticky text clutter) */}
          <g className={styles.pinsLayer}>
            {INDIA_CITIES.map((city) => {
              const isHovered = hoveredCityId === city.id;
              const isHQ = city.isHQ;
              const isNE = city.isNorthEast;

              return (
                <g
                  key={city.id}
                  className={`${styles.cityPinGroup} ${isHovered ? styles.cityPinActive : ''}`}
                  onMouseEnter={() => setHoveredCityId(city.id)}
                  onMouseLeave={() => setHoveredCityId(null)}
                  transform={`translate(${city.x}, ${city.y})`}
                >
                  {/* Radiating beacon pulse wave */}
                  <circle
                    cx="0"
                    cy="0"
                    className={
                      isHQ
                        ? styles.pinBeaconOuterHQ
                        : isNE
                        ? styles.pinBeaconOuterNE
                        : styles.pinBeaconOuter
                    }
                  />

                  {/* Core pin circle */}
                  <circle
                    cx="0"
                    cy="0"
                    r={isHQ ? 6.5 : isNE ? 5.5 : 4.5}
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
