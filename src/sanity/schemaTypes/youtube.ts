import React from 'react';
import { defineField, defineType } from 'sanity';

// YouTube red icon for the Sanity block insert menu
const YouTubeIcon = () =>
  React.createElement(
    'svg',
    {
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: '#FF0000',
      style: { display: 'inline-block', verticalAlign: 'middle' },
    },
    React.createElement('path', {
      d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    })
  );

export const youtube = defineType({
  name: 'youtube',
  title: 'YouTube Video',
  type: 'object',
  icon: YouTubeIcon,
  fields: [
    defineField({
      name: 'url',
      title: 'YouTube Video URL',
      type: 'string',
      description:
        'Paste any YouTube video or Shorts link (e.g. https://www.youtube.com/watch?v=... or https://youtu.be/...)',
    }),
    defineField({
      name: 'title',
      title: 'Video Title (Optional)',
      type: 'string',
      description: 'Optional headline displayed above the video player.',
    }),
    defineField({
      name: 'caption',
      title: 'Caption / Subtext (Optional)',
      type: 'string',
      description: 'Optional takeaway note, speaker credit, or context displayed below the video.',
    }),
  ],
  preview: {
    select: {
      url: 'url',
      title: 'title',
      caption: 'caption',
    },
    prepare({ url, title, caption }) {
      return {
        title: title || 'YouTube Video',
        subtitle: url || caption || 'Embedded YouTube Video Player',
        media: YouTubeIcon,
      };
    },
  },
});
