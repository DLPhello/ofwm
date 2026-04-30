import data from "./news-data.json";
import { withBasePath } from "./basePath";

export type NewsPost = {
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
  image?: string;
  sourceUrl: string;
};

export const newsPosts: NewsPost[] = data.posts.map((p) => ({
  ...p,
  image: p.image ? withBasePath(p.image) : undefined,
}));

export function getNewsBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find((p) => p.slug === slug);
}
