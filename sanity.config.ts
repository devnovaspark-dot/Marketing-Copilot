'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { table } from '@sanity/table';
import { schemaTypes } from './src/sanity/schemaTypes';
import { dataset, projectId } from './src/sanity/env';

export default defineConfig({
  name: 'marketing-copilot-studio',
  title: 'Marketing Copilot CMS',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [structureTool(), table()],
  schema: {
    types: schemaTypes,
  },
});
