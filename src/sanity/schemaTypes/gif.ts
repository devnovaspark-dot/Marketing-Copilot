import { defineField, defineType } from 'sanity';

export const gif = defineType({
  name: 'gif',
  title: 'GIF / Animated GIF',
  type: 'object',
  fields: [
    defineField({
      name: 'gifFile',
      title: 'Upload GIF File',
      type: 'image',
      description: 'Upload an animated .gif file from your computer.',
      options: {
        accept: 'image/gif,image/*',
        hotspot: false,
      },
    }),
    defineField({
      name: 'externalUrl',
      title: 'OR External GIF URL (Giphy, Tenor, etc.)',
      type: 'url',
      description:
        'Optional: Paste a direct URL to an animated GIF (e.g. from Giphy, Tenor, Imgur, or any CDN). Used if no file is uploaded above.',
    }),
    defineField({
      name: 'alt',
      title: 'Alternative Text (SEO & Accessibility)',
      type: 'string',
      description: 'Describe the animation for search engines and accessibility.',
      validation: (Rule) =>
        Rule.required().error('Alt text is required for accessibility and SEO.'),
    }),
    defineField({
      name: 'caption',
      title: 'Caption / Subtext (Optional)',
      type: 'string',
      description: 'Optional descriptive note or source credit displayed below the GIF.',
    }),
  ],
  preview: {
    select: {
      title: 'alt',
      caption: 'caption',
      media: 'gifFile',
      externalUrl: 'externalUrl',
    },
    prepare({ title, caption, media, externalUrl }) {
      return {
        title: title || caption || 'Animated GIF',
        subtitle: externalUrl ? `URL: ${externalUrl}` : caption || 'Animated GIF',
        media,
      };
    },
  },
});

