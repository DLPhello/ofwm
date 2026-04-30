import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { aboutParagraphs } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Oatley Fine Wine Merchants — Australian premium wine distribution since 2015.",
};

export default function AboutPage() {
  return (
    <Container className="py-20 sm:py-28">
      <article className="mx-auto max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
          About us
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Oatley Fine Wine Merchants
        </h1>
        <div className="mt-14 space-y-8 text-base leading-[1.75] text-foreground/90">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
    </Container>
  );
}
