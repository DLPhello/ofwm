import portfolio from "./portfolio-data.json";
import { withBasePath } from "./basePath";

export type Brand = {
  slug: string;
  name: string;
  image: string;
  externalUrl?: string;
};

export const heroImages: string[] = portfolio.heroImages.map(withBasePath);
export const brands: Brand[] = portfolio.brands.map((b) => ({
  ...b,
  image: withBasePath(b.image),
}));

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
