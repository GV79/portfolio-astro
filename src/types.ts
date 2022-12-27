import type { Document } from '@contentful/rich-text-types';

interface ContentfulImage {
  metadata: {
    tags: unknown[];
  };
  fields: {
    title: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface Project {
  title: string;
  description: Document;
  lastUpdated: string;
  repository?: string;
  demo?: string;
  technologies: string[];
  images: ContentfulImage[];
}
