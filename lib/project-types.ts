export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  appUrl: string;
  category: string;
  period: string;
  summary: string;
  challenge: string;
  approach: string;
  contributions: string[];
  cover: ProjectImage;
  gallery: ProjectImage[];
};
