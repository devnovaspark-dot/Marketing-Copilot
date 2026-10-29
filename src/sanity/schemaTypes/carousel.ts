import { defineArrayMember, defineField, defineType } from 'sanity';

export const carousel = defineType({
  name: 'carousel',
  title: 'Image Carousel / Slider',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Carousel Title / Headline (Optional)',
      type: 'string',
      description:
        'Optional headline displayed above the carousel (e.g., "Creative Campaign Variations", "Brand Architecture Showcase").',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Context (Optional)',
      type: 'string',
      description: 'Optional short introductory note displayed under the title.',
    }),
    defineField({
      name: 'slides',
      title: 'Carousel Slides / Images',
      type: 'array',
      description:
        'Upload or select images for this carousel. You can drag and drop multiple images at once. Click an image to add an optional title, caption, or link.',
      options: {
        layout: 'grid',
      },
      of: [
        defineArrayMember({
          type: 'image',
          title: 'Image Slide',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'title',
              title: 'Slide Title / Heading (Optional)',
              type: 'string',
              description: 'Optional headline displayed on or with this slide.',
            }),
            defineField({
              name: 'caption',
              title: 'Slide Caption / Notes (Optional)',
              type: 'text',
              rows: 2,
              description: 'Optional explanatory caption or context for this slide.',
            }),
            defineField({
              name: 'alt',
              title: 'Alternative Text (SEO & Accessibility)',
              type: 'string',
              description: 'Important for search engine ranking and screen readers.',
            }),
            defineField({
              name: 'link',
              title: 'Click-Through Link URL (Optional)',
              type: 'string',
              description: 'Optional external or internal link when a user clicks this slide.',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Slide Aspect Ratio',
      type: 'string',
      description: 'Frame ratio for slides in this carousel.',
      options: {
        list: [
          { title: '16:9 Landscape (Standard blog format)', value: '16:9' },
          { title: '4:3 Standard Photo', value: '4:3' },
          { title: '1:1 Square (Ideal for Ad Creatives & Social Posts)', value: '1:1' },
          { title: '21:9 Ultra-Wide Cinematic', value: '21:9' },
          { title: 'Natural / Auto (Adapts to image height)', value: 'auto' },
        ],
        layout: 'dropdown',
      },
      initialValue: '16:9',
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay Slides',
      type: 'boolean',
      description:
        'Automatically advance to the next slide every few seconds (pauses when reader hovers or touches).',
      initialValue: true,
    }),
    defineField({
      name: 'interval',
      title: 'Autoplay Speed (seconds)',
      type: 'number',
      description: 'How many seconds to display each slide before advancing (default: 5).',
      initialValue: 5,
      hidden: ({ parent }) => !parent?.autoplay,
    }),
    defineField({
      name: 'showIndicators',
      title: 'Show Slide Dots / Indicators',
      type: 'boolean',
      description: 'Display interactive dot indicators at the bottom to jump between slides.',
      initialValue: true,
    }),
    defineField({
      name: 'showArrows',
      title: 'Show Navigation Arrows',
      type: 'boolean',
      description: 'Display previous/next arrow buttons on desktop and mobile.',
      initialValue: true,
    }),
    defineField({
      name: 'caption',
      title: 'Overall Carousel Caption / Footnote (Optional)',
      type: 'string',
      description:
        'Optional summary caption, data source, or key takeaway note displayed below the entire carousel.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slides: 'slides',
      media: 'slides.0',
    },
    prepare({ title, slides, media }) {
      const count = Array.isArray(slides) ? slides.length : 0;
      return {
        title: title || 'Image Carousel / Slider',
        subtitle: `${count} slide${count === 1 ? '' : 's'}`,
        media,
      };
    },
  },
});
