'use client';

import { useState, useRef, useMemo } from 'react';
import { INDIA_VIEWBOX, INDIA_CITIES, INDIA_STATE_PATHS, CityHub } from '@/data/indiaMapPaths';
import styles from './IndiaMap3D.module.css';

export default function IndiaMap3D() {
  const [activeCityId, setActiveCityId] = useState<string>('bhubaneswar');
  const [hoveredCityId, setHoveredCityId] = useState<string | null>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 5, y: -3 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeCity = useMemo(() => {
    return INDIA_CITIES.find((c) => c.id === (hoveredCityId || activeCityId)) || INDIA_CITIES[0];
  }, [hoveredCityId, activeCityId]);

  const hqCity = useMemo(() => {
    return INDIA_CITIES.find((c) => c.isHQ) || INDIA_CITIES[0];
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = -((y - centerY) / centerY) * 8;
    setTilt({ x: Number(rotateX.toFixed(2)), y: Number(rotateY.toFixed(2)) });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 5, y: -3 });
    setHoveredCityId(null);
  };

  return (
    <div className={styles.mapChassis}>
      <div className={styles.ambientRadialGlow} />
      <div className={styles.ambientSecondaryGlow} />

      {/* Header Bar */}
      <div className={styles.mapHeader}>
        <div className={styles.headerTopRow}>
          <div className={styles.radarBadge}>
            <span className={styles.radarPulseDot} />
            <span>PAN-INDIA CAMPAIGN RADAR &bull; 3D LIVE MESH</span>
          </div>
          <span className={styles.perspectiveBadge}>
            Interactive 3D &bull; Hover Pins
          </span>
        </div>

        <h3 className={styles.mapTitle}>
          Active Commercial Hubs &amp; National Corridors
        </h3>
        <p className={styles.mapSubtitle}>
          Real-time performance delivery footprint connecting our Bhubaneswar HQ to major metro corridors &amp; Northeast India.
        </p>

        {/* Compact City Chiclets (Prominently featuring Bhubaneswar HQ & Northeast / Guwahati) */}
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
                  city.isNorthEast ? styles.neFilterChip : ''
                } ${isSelected ? styles.cityFilterChipActive : ''}`}
              >
                {city.isHQ ? '📍' : city.isNorthEast ? '🌿' : '⚡'} {city.name.split(' (')[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3D Map Viewport (Open Canvas, Not Trapped in a Card) */}
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
              <linearGradient id="arcGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#60A5FA" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="arcGradientNE" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D97706" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Depth Concentric Radar Guides */}
            <circle cx="357.6" cy="374.6" r="80" fill="none" stroke="rgba(37, 99, 235, 0.08)" strokeDasharray="3 3" />
            <circle cx="357.6" cy="374.6" r="160" fill="none" stroke="rgba(37, 99, 235, 0.06)" strokeDasharray="4 4" />
            <circle cx="357.6" cy="374.6" r="240" fill="none" stroke="rgba(37, 99, 235, 0.04)" strokeDasharray="4 6" />

            {/* India States Contours (Clean Light Minimal Theme) */}
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
                const midX = (hqCity.x + city.x) / 2 + (hqCity.y - city.y) * 0.12;
                const midY = (hqCity.y + city.y) / 2 - Math.abs(hqCity.x - city.x) * 0.12;
                const pathD = `M ${hqCity.x} ${hqCity.y} Q ${midX} ${midY} ${city.x} ${city.y}`;

                return (
                  <path
                    key={`arc-${city.id}`}
                    d={pathD}
                    className={`${styles.telemetryArc} ${
                      city.isNorthEast ? styles.telemetryArcNE : ''
                    } ${isActive ? styles.telemetryArcActive : ''}`}
                  />
                );
              })}
            </g>

            {/* City Nodes (NO STICKY TEXT ON MAP per prompt!) */}
            <g className={styles.pinsLayer}>
              {INDIA_CITIES.map((city) => {
                const isSelected = activeCity.id === city.id;
                const isHQ = city.isHQ;
                const isNE = city.isNorthEast;

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

                    <circle
                      cx="0"
                      cy="0"
                      r={isHQ ? 6 : isNE ? 5 : 4}
                      className={
                        isHQ
                          ? styles.pinCoreHQ
                          : isNE
                          ? styles.pinCoreNE
                          : styles.pinCore
                      }
                    />

                    {isHQ && (
                      <circle cx="0" cy="0" r="1.8" fill="#FFFFFF" />
                    )}
                    {isNE && (
                      <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Minimal Floating HUD Tooltip on Hover */}
          {activeCity && (
            <div
              className={styles.floatingTooltip}
              style={{
                left: `${(activeCity.x / 600) * 100}%`,
                top: `${(activeCity.y / 680) * 100}%`,
              }}
            >
              <h4 className={styles.tooltipTitle}>
                {activeCity.isHQ ? '📍 ' : activeCity.isNorthEast ? '🌿 ' : '⚡ '}
                {activeCity.name}
                {activeCity.isNorthEast && (
                  <span className={styles.tooltipBadgeNE}>Northeast</span>
                )}
                {activeCity.isHQ && (
                  <span className={styles.tooltipBadgeHQ}>HQ</span>
                )}
              </h4>
              <p className={styles.tooltipSub}>
                {activeCity.specialization} &bull; {activeCity.speed}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Minimal Bottom Status Bar */}
      <div className={styles.miniStatusBar}>
        <div>
          <span>Selected Corridor: </span>
          <strong className={styles.miniStatusCity}>{activeCity.name}</strong>
          <span> &bull; {activeCity.specialization}</span>
        </div>
        <a
          href={`https://wa.me/919437168434?text=${encodeURIComponent(
            `Hi Marketing Copilot, I would like to discuss campaigns in ${activeCity.name}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.miniStatusLink}
        >
          <span>Chat Desk ↗</span>
        </a>
      </div>
    </div>
  );
}
