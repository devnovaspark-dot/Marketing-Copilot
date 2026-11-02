import { createImageUrlBuilder } from '@sanity/image-url';
import type { Image } from 'sanity';
import { dataset, projectId } from './env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: Image | any) => {
  return imageBuilder?.image(source).auto('format').fit('max');
};

export const urlForSocialImage = (source: Image | any) => {
  return imageBuilder?.image(source).width(1200).height(630).fit('crop').format('jpg');
};
