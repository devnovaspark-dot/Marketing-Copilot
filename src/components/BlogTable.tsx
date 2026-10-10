import React from 'react';
import styles from './BlogTable.module.css';

interface TableRowData {
  _key?: string;
  _type?: string;
  cells?: string[];
}

export interface BlogTableValue {
  _type?: 'table' | 'tableBlock';
  title?: string;
  caption?: string;
  hasHeaderRow?: boolean;
  rows?: TableRowData[];
  table?: {
    _type?: string;
    rows?: TableRowData[];
  };
}

interface BlogTableProps {
  value: BlogTableValue;
}

function renderCellContent(cellText: string | undefined, isHeader = false) {
  if (cellText === undefined || cellText === null) {
    return '—';
  }

  const trimmed = cellText.trim();
  if (!trimmed) {
    return '—';
  }

  if (isHeader) {
    return trimmed;
  }

  const lower = trimmed.toLowerCase();

  // Positive badges
  if (
    trimmed === '✓' ||
    trimmed === '✔' ||
    lower === 'yes' ||
    lower === 'true' ||
    lower === 'included' ||
    lower === 'recommended' ||
    lower === 'high' ||
    lower === 'pass' ||
    lower === 'winner' ||
    lower === 'best'
  ) {
    return (
      <span className={`${styles.cellBadge} ${styles.badgeSuccess}`}>
        <span>✓</span>
        <span>{trimmed}</span>
      </span>
    );
  }

  // Negative / Muted badges
  if (
    trimmed === '✕' ||
    trimmed === '✖' ||
    trimmed === '✗' ||
    lower === 'no' ||
    lower === 'false' ||
    lower === 'none' ||
    lower === 'excluded' ||
    lower === 'fail'
  ) {
    return (
      <span className={`${styles.cellBadge} ${styles.badgeMuted}`}>
        <span>✕</span>
        <span>{trimmed}</span>
      </span>
    );
  }

  // Neutral / Warning badges
  if (
    lower === 'medium' ||
    lower === 'optional' ||
    lower === 'moderate' ||
    lower === 'standard' ||
    lower === 'average'
  ) {
    return (
      <span className={`${styles.cellBadge} ${styles.badgeWarning}`}>
        <span>●</span>
        <span>{trimmed}</span>
      </span>
    );
  }

  return trimmed;
}

export default function BlogTable({ value }: BlogTableProps) {
  if (!value) return null;

  // Resolve rows whether passed via direct 'table' or wrapped in 'tableBlock'
  const rawRows: TableRowData[] =
    value.rows || value.table?.rows || [];

  if (!Array.isArray(rawRows) || rawRows.length === 0) {
    return null;
  }

  // Filter out completely blank rows
  const rows = rawRows.filter(
    (row) => Array.isArray(row.cells) && row.cells.some((c) => (c || '').trim().length > 0)
  );

  if (rows.length === 0) {
    return null;
  }

  const title = value.title?.trim();
  const caption = value.caption?.trim();
  const hasHeaderRow = value.hasHeaderRow !== false && rows.length >= 1;

  const headerRow = hasHeaderRow ? rows[0] : null;
  const bodyRows = hasHeaderRow ? rows.slice(1) : rows;

  return (
    <figure className={styles.tableCardWrapper}>
      {/* Optional Table Header Bar */}
      {(title || rows[0]?.cells?.length) && (
        <div className={styles.tableHeaderBar}>
          <div className={styles.tableHeaderContent}>
            <span className={styles.tableBadge}>
              <svg
                className={styles.tableBadgeIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M3 15h18" />
                <path d="M9 3v18" />
                <path d="M15 3v18" />
              </svg>
              Table
            </span>
            {title && <h4 className={styles.tableTitle}>{title}</h4>}
          </div>

          <span className={styles.scrollHint} aria-hidden="true">
            ⇄ Scroll to view full table
          </span>
        </div>
      )}

      {/* Accessible Table Wrapper */}
      <div className={styles.tableResponsiveContainer}>
        <table className={styles.blogTable}>
          {title && <caption className={styles.srOnly}>{title}</caption>}

          {headerRow && (
            <thead>
              <tr>
                {headerRow.cells?.map((cell, colIndex) => (
                  <th key={`header-col-${colIndex}`} scope="col">
                    {renderCellContent(cell, true)}
                  </th>
                ))}
              </tr>
            </thead>
          )}

          <tbody>
            {bodyRows.map((row, rowIndex) => (
              <tr key={row._key || `row-${rowIndex}`}>
                {row.cells?.map((cell, cellIndex) => (
                  <td key={`cell-${rowIndex}-${cellIndex}`}>
                    {renderCellContent(cell, false)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Optional Table Footnote / Caption */}
      {caption && (
        <figcaption className={styles.tableCaptionBar}>
          <span className={styles.captionDot} aria-hidden="true" />
          <span className={styles.captionText}>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
