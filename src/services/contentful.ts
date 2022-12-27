import contentful from 'contentful';
import type { Project } from 'src/types';

const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});

export const fetchProjects = async () => {
  const entries = await contentfulClient.getEntries<Project>({
    content_type: 'projects',
  });

  return entries.items.map((item, index) => {
    const { title, description, lastUpdated = '', technologies, images = [], demo = '', repository = '' } = item.fields;

    const projectImages = images.map((image) => ({
      url: `https:${image.fields.file.url}`,
      width: image.fields.file.details.image.width,
      height: image.fields.file.details.image.height,
    }));

    return {
      id: index,
      title,
      description,
      repository,
      demo,
      lastUpdated: lastUpdated.substring(0, lastUpdated.indexOf('-')), // only grab year
      technologies,
      images: projectImages,
    };
  });
};
