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
    <div className={styles.mapStageRoot}>
      {/* ═════════════════════════════════════════════════════════════════
          MAP MEANING & STRATEGIC NARRATIVE
          (Explicitly answers: "What is the meaning of this map?")
      ═════════════════════════════════════════════════════════════════ */}
      <div className={styles.mapMeaningBlock}>
        <div className={styles.meaningHeaderRow}>
          <div className={styles.meaningBadge}>
            <span className={styles.meaningLedLive} />
            <span>NATIONAL DEPLOYMENT ARCHITECTURE</span>
          </div>
          <div className={styles.meaningGridCount}>
            <span className={styles.corridorPulseDot} />
            <span>12+ ACTIVE STRATEGIC METROS</span>
          </div>
        </div>

        <h3 className={styles.mapMeaningTitle}>
          What This Pan-India Deployment Map Represents
        </h3>
        
        <p className={styles.mapMeaningDesc}>
          <strong>Why govern national campaigns from Bhubaneswar?</strong> Traditional agencies force brands to manage fragmented regional teams with disconnected communication and marked-up overheads. At Marketing Copilot, 100% of strategy, high-ROAS Google/Meta media buying, technical CRO, and AI search optimization are orchestrated directly by senior leadership from our central command center in Odisha.
        </p>

        {/* Legend: Clear visual explanation of the 3 node types */}
        <div className={styles.mapLegendBar}>
          <button
            type="button"
            onClick={() => handleCityClick('bhubaneswar')}
            className={`${styles.legendItem} ${
              activeCity?.isHQ ? styles.legendItemActive : ''
            }`}
          >
            <span className={styles.legendDotHQ} />
            <span><strong>Bhubaneswar HQ:</strong> Central Command & Media Ops</span>
          </button>

          <button
            type="button"
            onClick={() => handleCityClick('delhi')}
            className={`${styles.legendItem} ${
              activeCity && !activeCity.isHQ && !activeCity.isNorthEast
                ? styles.legendItemActive
                : ''
            }`}
          >
            <span className={styles.legendDotMetro} />
            <span><strong>Pulsing Blue Arcs:</strong> 12+ Live Metro Corridors</span>
          </button>

          <button
            type="button"
            onClick={() => handleCityClick('guwahati')}
            className={`${styles.legendItem} ${
              activeCity?.isNorthEast ? styles.legendItemActive : ''
            }`}
          >
            <span className={styles.legendDotNE} />
            <span><strong>Emerald Arc:</strong> Northeast Commercial Gateway</span>
          </button>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════
          SEAMLESS FLOATING MAP STAGE (NO CARD BOX / NO CARD BORDERS)
      ═════════════════════════════════════════════════════════════════ */}
      <div className={styles.unboxedMapStage}>
        {/* Soft atmospheric ambient glow behind the Indian subcontinent */}
        <div className={styles.ambientSubcontinentGlow} />

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
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.95" />
              </linearGradient>
              {/* Subtle background radar radial glow */}
              <radialGradient id="hqRadialAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.14" />
                <stop offset="45%" stopColor="#F59E0B" stopOpacity="0.06" />
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

            {/* City Nodes & Beacons (Rock-Solid Hit Target — Zero Hallucination/Jitter) */}
            <g className={styles.pinsLayer}>
              {INDIA_CITIES.map((city) => {
                const isCityActive = activeCity?.id === city.id;
                const isHQ = city.isHQ;
                const isNE = city.isNorthEast;

                return (
                  <g
                    key={city.id}
                    className={`${styles.cityPinGroup} ${
                      isCityActive ? styles.cityPinActive : ''
                    }`}
                    transform={`translate(${city.x}, ${city.y})`}
                  >
                    {/* Stable Invisible Hit Area Target */}
                    <circle
                      cx="0"
                      cy="0"
                      r="12"
                      className={styles.hitTarget}
                      onMouseEnter={() => setHoveredCityId(city.id)}
                      onMouseLeave={() =>
                        setHoveredCityId((prev) => (prev === city.id ? null : prev))
                      }
                      onClick={() => handleCityClick(city.id)}
                    />

                    {/* Radiating beacon pulse wave */}
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

                    {/* Core pin circle */}
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

          {/* Minimal Floating HUD Tooltip — Appears when a pin is actively hovered */}
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
      </div>

      {/* ═════════════════════════════════════════════════════════════════
          INTERACTIVE CORRIDOR TELEMETRY & STRATEGIC ARCHITECTURE PILLARS
      ═════════════════════════════════════════════════════════════════ */}
      <div className={styles.corridorTelemetryDeck}>
        {/* Dynamic Telemetry Status Readout */}
        <div className={styles.activeCorridorInspector}>
          <div className={styles.inspectorTopLine}>
            <div className={styles.inspectorStatusLeft}>
              <span className={styles.inspectorLiveLed} />
              <span className={styles.inspectorLabel}>
                {activeCity
                  ? `LIVE CORRIDOR TELEMETRY // ${activeCity.name.toUpperCase()}`
                  : 'PAN-INDIA CENTRAL COMMAND TELEMETRY'}
              </span>
            </div>
            {activeCity && (
              <span className={styles.inspectorSlaTag}>
                SLA: {activeCity.speed}
              </span>
            )}
          </div>

          <div className={styles.inspectorMainInfo}>
            <div className={styles.inspectorTitleRow}>
              <span className={styles.inspectorTargetCity}>
                {activeCity ? activeCity.name : 'Central Operations in Bhubaneswar (Odisha)'}
              </span>
              <span className={styles.inspectorZoneBadge}>
                {activeCity ? activeCity.badge : 'SERVING PAN-INDIA 24/7'}
              </span>
            </div>
            <p className={styles.inspectorNarrative}>
              {activeCity
                ? `${activeCity.specialization} · ${activeCity.highlight} · Active: ${activeCity.activePods}.`
                : 'Centralized strategic orchestration, high-ROAS Google & Meta performance media buying, and full-funnel CRO managed directly from our registered corporate headquarters in Bhubaneswar — delivering qualified inbound revenue into 12+ tier-1 metros.'}
            </p>
          </div>
        </div>

        {/* 3 Architecture Meaning Cards */}
        <div className={styles.architecturePillarsGrid}>
          <div className={styles.archPillarCard}>
            <div className={styles.pillarIconBubble}>📍</div>
            <div className={styles.pillarContent}>
              <h4 className={styles.pillarTitle}>Bhubaneswar HQ Hub</h4>
              <p className={styles.pillarDesc}>
                Single operational nerve center. Direct founder oversight, 100% in-house engineering, and zero multi-agency split fees.
              </p>
            </div>
          </div>

          <div className={styles.archPillarCard}>
            <div className={styles.pillarIconBubble}>⚡</div>
            <div className={styles.pillarContent}>
              <h4 className={styles.pillarTitle}>12+ Metro Corridors</h4>
              <p className={styles.pillarDesc}>
                Real-time performance media streaming qualified buyers into Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai & Pune.
              </p>
            </div>
          </div>

          <div className={styles.archPillarCard}>
            <div className={styles.pillarIconBubble}>🌿</div>
            <div className={styles.pillarContent}>
              <h4 className={styles.pillarTitle}>Northeast Gateway</h4>
              <p className={styles.pillarDesc}>
                Dedicated Guwahati corridor bridging brands into high-intent regional consumer markets across Assam & Seven Sister states.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
