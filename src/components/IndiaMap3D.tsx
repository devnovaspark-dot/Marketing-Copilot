'use client';

import { useState, useRef, useMemo } from 'react';
import { INDIA_VIEWBOX, INDIA_CITIES, INDIA_STATE_PATHS, CityHub } from '@/data/indiaMapPaths';
import styles from './IndiaMap3D.module.css';

export default function IndiaMap3D() {
  const [activeCityId, setActiveCityId] = useState<string>('bhubaneswar');
  const [hoveredCityId, setHoveredCityId] = useState<string | null>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 6, y: -4 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeCity = useMemo(() => {
    return INDIA_CITIES.find((c) => c.id === (hoveredCityId || activeCityId)) || INDIA_CITIES[0];
  }, [hoveredCityId, activeCityId]);

  const hqCity = useMemo(() => {
    return INDIA_CITIES.find((c) => c.isHQ) || INDIA_CITIES[0];
  }, []);

  // 3D Perspective Tilt on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Moderate tilt angles for realistic 3D elevation
    const rotateY = ((x - centerX) / centerX) * 9;
    const rotateX = -((y - centerY) / centerY) * 9;
    setTilt({ x: Number(rotateX.toFixed(2)), y: Number(rotateY.toFixed(2)) });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 6, y: -4 });
    setHoveredCityId(null);
  };

  return (
    <div className={styles.mapChassis}>
      {/* Ambient Radial Lighting Glows */}
      <div className={styles.ambientRadialGlow} />
      <div className={styles.ambientSecondaryGlow} />

      {/* Header Bar */}
      <div className={styles.mapHeader}>
        <div className={styles.headerTopRow}>
          <div className={styles.radarBadge}>
            <span className={styles.radarPulseDot} />
            <span>PAN-INDIA CAMPAIGN RADAR &bull; 3D METRO MESH</span>
          </div>
          <span className={styles.perspectiveBadge}>
            Interactive 3D View &bull; Hover Pins
          </span>
        </div>

        <h3 className={styles.mapTitle}>
          Active Commercial Hubs &amp; National Corridors
        </h3>
        <p className={styles.mapSubtitle}>
          Real-time delivery footprint connecting our Bhubaneswar HQ to premier business corridors across India. Hover any pin to inspect metro telemetry.
        </p>

        {/* Quick City Selector Bar */}
        <div className={styles.cityFilterBar}>
          {INDIA_CITIES.map((city) => {
            const isSelected = activeCity.id === city.id;
            return (
              <button
                key={city.id}
                type="button"
                onClick={() => {
                  setActiveCityId(city.id);
                  setHoveredCityId(city.id);
                }}
                onMouseEnter={() => setHoveredCityId(city.id)}
                className={`${styles.cityFilterChip} ${city.isHQ ? styles.hqFilterChip : ''} ${
                  isSelected ? styles.cityFilterChipActive : ''
                }`}
              >
                {city.isHQ ? '📍' : '⚡'} {city.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3D Map Viewport Stage */}
      <div
        className={styles.stageContainer}
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={styles.stageMesh3D}
          style={{
            transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          <svg
            className={styles.svgCanvas}
            viewBox={INDIA_VIEWBOX}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Telemetry Arc Gradient */}
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.9" />
              </linearGradient>

              {/* Holographic Radar Radial Ring */}
              <radialGradient id="radarField" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#0B1C63" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#040924" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Depth Grid & Radar Concentric Rings */}
            <circle cx="357.6" cy="374.6" r="90" fill="none" stroke="rgba(56, 189, 248, 0.08)" strokeDasharray="3 3" />
            <circle cx="357.6" cy="374.6" r="170" fill="none" stroke="rgba(56, 189, 248, 0.07)" strokeDasharray="4 4" />
            <circle cx="357.6" cy="374.6" r="260" fill="none" stroke="rgba(56, 189, 248, 0.05)" strokeDasharray="4 6" />

            {/* India States Contours */}
            <g className={styles.statesLayer}>
              {INDIA_STATE_PATHS.map((state) => (
                <path
                  key={state.id}
                  d={state.d}
                  className={styles.statePath}
                />
              ))}
            </g>

            {/* Glowing Telemetry Arcs from Bhubaneswar HQ to other cities */}
            <g className={styles.arcsLayer}>
              {INDIA_CITIES.filter((c) => !c.isHQ).map((city) => {
                const isActive = activeCity.id === city.id;
                // Quadratic bezier arc bowing upward/sideways
                const midX = (hqCity.x + city.x) / 2 + (hqCity.y - city.y) * 0.15;
                const midY = (hqCity.y + city.y) / 2 - Math.abs(hqCity.x - city.x) * 0.15;
                const pathD = `M ${hqCity.x} ${hqCity.y} Q ${midX} ${midY} ${city.x} ${city.y}`;

                return (
                  <path
                    key={`arc-${city.id}`}
                    d={pathD}
                    className={`${styles.telemetryArc} ${isActive ? styles.telemetryArcActive : ''}`}
                  />
                );
              })}
            </g>

            {/* City Nodes / Pins (NO STICKY TEXT ON MAP per user prompt!) */}
            <g className={styles.pinsLayer}>
              {INDIA_CITIES.map((city) => {
                const isSelected = activeCity.id === city.id;

                return (
                  <g
                    key={city.id}
                    className={`${styles.cityPinGroup} ${isSelected ? styles.cityPinActive : ''}`}
                    onClick={() => {
                      setActiveCityId(city.id);
                      setHoveredCityId(city.id);
                    }}
                    onMouseEnter={() => setHoveredCityId(city.id)}
                    onMouseLeave={() => setHoveredCityId(null)}
                    transform={`translate(${city.x}, ${city.y})`}
                  >
                    {/* Pulsing Outer Ping Ring */}
                    <circle
                      cx="0"
                      cy="0"
                      className={city.isHQ ? styles.pinBeaconOuterHQ : styles.pinBeaconOuter}
                    />

                    {/* Interactive Core Target Pin */}
                    <circle
                      cx="0"
                      cy="0"
                      r={city.isHQ ? 6.5 : 4.5}
                      className={city.isHQ ? styles.pinCoreHQ : styles.pinCore}
                    />

                    {/* Extra Star indicator for Bhubaneswar Registered HQ */}
                    {city.isHQ && (
                      <circle
                        cx="0"
                        cy="0"
                        r="2"
                        fill="#FFFFFF"
                      />
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Dynamic Floating HUD Tooltip (Only shown on hover or active node) */}
          {activeCity && (
            <div
              className={styles.floatingTooltip}
              style={{
                left: `${(activeCity.x / 600) * 100}%`,
                top: `${(activeCity.y / 680) * 100}%`,
              }}
            >
              <div className={styles.tooltipHeader}>
                <h4 className={styles.tooltipCityName}>
                  {activeCity.isHQ ? '📍 ' : '⚡ '}
                  {activeCity.name}
                </h4>
                <span className={`${styles.tooltipBadge} ${activeCity.isHQ ? styles.tooltipBadgeHQ : ''}`}>
                  {activeCity.state}
                </span>
              </div>
              <p className={styles.tooltipSpec}>{activeCity.specialization}</p>
              <div className={styles.tooltipFooter}>
                <span>
                  <span className={styles.tooltipStatusDot} />
                  {activeCity.activePods}
                </span>
                <span className={styles.tooltipSpeed}>{activeCity.speed}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Selected Hub Telemetry Dossier Console */}
      <div className={styles.activeHubDossier}>
        <div className={styles.dossierTopRow}>
          <div className={styles.dossierCityTitle}>
            <span className={styles.dossierCityName}>
              {activeCity.isHQ ? '🏢' : '⚡'} {activeCity.name}
            </span>
            <span className={styles.dossierStateBadge}>{activeCity.badge}</span>
          </div>
          <span className={styles.dossierLiveStatus}>
            ● {activeCity.status}
          </span>
        </div>

        <p className={styles.dossierHighlight}>{activeCity.highlight}</p>

        <div className={styles.dossierGrid}>
          <div className={styles.dossierTile}>
            <div className={styles.dossierMetaLabel}>Core Deployment</div>
            <div className={styles.dossierValText}>{activeCity.specialization}</div>
          </div>
          <div className={styles.dossierTile}>
            <div className={styles.dossierMetaLabel}>Response &amp; Delivery SLA</div>
            <div className={styles.dossierValText} style={{ color: '#38BDF8' }}>
              ⚡ {activeCity.speed}
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Direct Ownership Strip */}
      <div className={styles.assuranceStrip}>
        <span className={styles.assuranceItem}>
          ✓ First-Party Server CAPI Tracking
        </span>
        <span className={styles.assuranceItem}>
          • Direct Root Ad Account Ownership
        </span>
        <span className={styles.assuranceItem}>
          • Dedicated Pan-India War Room
        </span>
      </div>
    </div>
  );
}
