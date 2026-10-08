'use client';

import { useState, useMemo } from 'react';
import { INDIA_VIEWBOX, INDIA_CITIES, INDIA_STATE_PATHS } from '@/data/indiaMapPaths';
import styles from './IndiaMap3D.module.css';

export default function IndiaMap3D() {
  const [hoveredCityId, setHoveredCityId] = useState<string | null>(null);
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);

  const activeCity = useMemo(() => {
    const id = hoveredCityId || selectedCityId;
    if (!id) return null;
    return INDIA_CITIES.find((c) => c.id === id) || null;
  }, [hoveredCityId, selectedCityId]);

  const hqCity = useMemo(() => {
    return INDIA_CITIES.find((c) => c.isHQ) || INDIA_CITIES[0];
  }, []);

  const handleCityClick = (cityId: string) => {
    setSelectedCityId((prev) => (prev === cityId ? null : cityId));
  };

  return (
    <div className={styles.mapCardChassis}>
      {/* Top Header of Map Card */}
      <div className={styles.mapCardHeaderRow}>
        <div className={styles.mapLiveBadge}>
          <span className={styles.statusLedLive} />
          <span>PAN-INDIA CAMPAIGN RADAR</span>
        </div>
        <div className={styles.mapCorridorsCount}>
          <span className={styles.countPulseDot} />
          <span>12+ ACTIVE CORRIDORS</span>
        </div>
      </div>

      {/* SVG Map Canvas Container */}
      <div className={styles.mapCanvasWrapper}>
        <div className={styles.subcontinentAura} />

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
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.95" />
            </linearGradient>
            <radialGradient id="hqRadialAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.14" />
              <stop offset="45%" stopColor="#F59E0B" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Soft Glow centered on Bhubaneswar HQ */}
          <circle
            cx="357.6"
            cy="374.6"
            r="260"
            fill="url(#hqRadialAura)"
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
              const isCityActive = activeCity?.id === city.id;
              const midX = (hqCity.x + city.x) / 2 + (hqCity.y - city.y) * 0.12;
              const midY = (hqCity.y + city.y) / 2 - Math.abs(hqCity.x - city.x) * 0.12;
              const pathD = `M ${hqCity.x} ${hqCity.y} Q ${midX} ${midY} ${city.x} ${city.y}`;

              return (
                <path
                  key={`arc-${city.id}`}
                  d={pathD}
                  className={`${styles.telemetryArc} ${
                    city.isNorthEast ? styles.telemetryArcNE : ''
                  } ${isCityActive ? styles.telemetryArcActive : ''}`}
                />
              );
            })}
          </g>

          {/* City Nodes & Beacons (Rock-Solid Hit Target) */}
          <g className={styles.pinsLayer}>
            {INDIA_CITIES.map((city) => {
              const isCityActive = activeCity?.id === city.id;
              const isHQ = city.isHQ;
              const isNE = city.isNorthEast;
              const labelDx = city.labelDx ?? 0;
              const labelDy = city.labelDy ?? (isHQ ? 16 : isNE ? 15 : 13);
              const labelAnchor = city.labelAnchor ?? 'middle';

              return (
                <g
                  key={city.id}
                  className={`${styles.cityPinGroup} ${
                    isCityActive ? styles.cityPinActive : ''
                  }`}
                  transform={`translate(${city.x}, ${city.y})`}
                >
                  <circle
                    cx="0"
                    cy="0"
                    r="16"
                    className={styles.hitTarget}
                    onMouseEnter={() => setHoveredCityId(city.id)}
                    onMouseLeave={() =>
                      setHoveredCityId((prev) => (prev === city.id ? null : prev))
                    }
                    onClick={() => handleCityClick(city.id)}
                  />

                  <circle
                    cx="0"
                    cy="0"
                    r={isHQ ? 18 : isNE ? 14 : 12}
                    pointerEvents="none"
                    className={
                      isHQ
                        ? styles.pinBeaconOuterHQ
                        : isNE
                        ? styles.pinBeaconOuterNE
                        : styles.pinBeaconOuter
                    }
                  />

                  <circle
                    cx="0"
                    cy="0"
                    r={isHQ ? 7.5 : isNE ? 6 : 5}
                    pointerEvents="none"
                    className={
                      isHQ
                        ? styles.pinCoreHQ
                        : isNE
                        ? styles.pinCoreNE
                        : styles.pinCore
                    }
                  />

                  <circle
                    cx="0"
                    cy="0"
                    r={isHQ ? 3 : 2}
                    fill="#FFFFFF"
                    pointerEvents="none"
                  />

                  <text
                    x={labelDx}
                    y={labelDy}
                    textAnchor={labelAnchor}
                    className={`${styles.cityLabelSvg} ${
                      isHQ
                        ? styles.cityLabelHQ
                        : isNE
                        ? styles.cityLabelNE
                        : styles.cityLabelMetro
                    } ${isCityActive ? styles.cityLabelActive : ''}`}
                    pointerEvents="none"
                  >
                    {isHQ ? `★ ${city.name} (HQ)` : city.name}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        {/* Minimal Floating Tooltip on Hover */}
        {hoveredCityId && activeCity && (
          <div
            className={styles.floatingPinTooltip}
            style={{
              left: `${(activeCity.x / 600) * 100}%`,
              top: `${(activeCity.y / 680) * 100}%`,
            }}
          >
            <div className={styles.tooltipPillHeader}>
              <span className={styles.tooltipIcon}>
                {activeCity.isHQ ? '📍' : activeCity.isNorthEast ? '🌿' : '⚡'}
              </span>
              <strong className={styles.tooltipName}>{activeCity.name}</strong>
              {activeCity.isHQ && <span className={styles.badgeHQ}>HQ</span>}
              {activeCity.isNorthEast && <span className={styles.badgeNE}>Northeast</span>}
            </div>
            <div className={styles.tooltipSub}>{activeCity.specialization}</div>
          </div>
        )}
      </div>

      {/* Sleek Bottom Corridor Legend Strip */}
      <div className={styles.mapCardFooterStrip}>
        <div className={styles.corridorPill}>
          <span className={styles.footerDotHq} />
          <span><strong>Bhubaneswar:</strong> Command HQ</span>
        </div>
        <div className={styles.corridorPill}>
          <span className={styles.footerDotMetro} />
          <span><strong>12+ Metros:</strong> Live Performance Media</span>
        </div>
        <div className={styles.corridorPill}>
          <span className={styles.footerDotNe} />
          <span><strong>Northeast:</strong> Regional Gateway</span>
        </div>
      </div>
    </div>
  );
}
