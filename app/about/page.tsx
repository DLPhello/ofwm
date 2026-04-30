import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { aboutParagraphs, aboutPullQuote } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Oatley Fine Wine Merchants - Australian premium wine distribution since 2015.",
};

export default function AboutPage() {
  const [p0, p1, p2] = aboutParagraphs;

  return (
    <Container className="py-20 sm:py-28">
      <article className="mx-auto max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
          About us
        </p>
        <h1 className="mt-4 font-serif text-4xl font-light leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-[3.25rem]">
          Oatley Fine Wine Merchants
        </h1>
        <div className="mt-16 space-y-9 text-base leading-[1.8] text-foreground/88 sm:text-[1.0625rem]">
          <p className="first-letter:float-left first-letter:-mt-0.5 first-letter:mr-3 first-letter:font-serif first-letter:text-[3.25rem] first-letter:leading-none first-letter:text-accent">
            {p0}
          </p>
          <p>{p1}</p>
        </div>
        <blockquote className="relative my-16 border-l-2 border-bronze/80 pl-8 sm:pl-10">
          <p className="font-serif text-2xl font-light leading-snug tracking-tight text-foreground sm:text-[1.65rem] sm:leading-[1.35]">
            {aboutPullQuote}
          </p>
        </blockquote>
        <p className="text-base leading-[1.8] text-foreground/88 sm:text-[1.0625rem]">
          {p2}
        </p>
      </article>
    </Container>
  );
}
