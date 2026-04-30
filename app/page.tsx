import { BrandPortfolio } from "@/components/BrandPortfolio";
import { HomeHero } from "@/components/HomeHero";
import { brands, heroImages } from "@/lib/brands";

export default function HomePage() {
  return (
    <>
      <HomeHero images={heroImages} />
      <BrandPortfolio brands={brands} />
    </>
  );
}
