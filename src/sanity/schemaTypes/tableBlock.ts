import { defineField, defineType } from 'sanity';

export const tableBlock = defineType({
  name: 'tableBlock',
  title: 'Table (Structured Data Matrix)',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Table Title / Headline',
      type: 'string',
      description: 'Optional headline displayed above the table (e.g., "Meta Ads vs Google Ads Comparison", "Pricing & Deliverables Matrix").',
    }),
    defineField({
      name: 'table',
      title: 'Table Data Grid',
      type: 'table',
      description: 'Click "+ Add Row" or "+ Add Column" to edit your tabular data.',
    }),
    defineField({
      name: 'hasHeaderRow',
      title: 'First Row is Header (th)',
      type: 'boolean',
      initialValue: true,
      description: 'Style the top row as distinct column headers with high contrast.',
    }),
    defineField({
      name: 'caption',
      title: 'Table Caption / Footnote',
      type: 'string',
      description: 'Optional footnote, source link, or brief takeaway note displayed below the table.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      rows: 'table.rows',
    },
    prepare({ title, rows }) {
      const rowCount = Array.isArray(rows) ? rows.length : 0;
      const colCount = Array.isArray(rows) && rows[0]?.cells ? rows[0].cells.length : 0;
      return {
        title: title || 'Data & Comparison Table',
        subtitle: `${rowCount} rows × ${colCount} columns`,
      };
    },
  },
});
