import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Events",
  description: "Events - Oatley Fine Wine Merchants",
};

export default function EventsPage() {
  return (
    <Container className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
          Events
        </p>
        <h1 className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground sm:text-5xl">
          The calendar
        </h1>
        <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted sm:text-lg">
          Trade tastings, portfolio briefings, and regional showcases appear here
          when they are scheduled. Right now the diary is clear - check back, or
          reach out for a private walk-through of the portfolio.
        </p>
        <div
          className="mx-auto mt-14 h-px max-w-xs bg-gradient-to-r from-transparent via-bronze/50 to-transparent"
          aria-hidden
        />
        <p className="mt-10 font-serif text-lg font-light italic text-foreground/70">
          “The room fills when the wine speaks for itself.”
        </p>
        <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted">
          Demo line - not an official quote
        </p>
      </div>
    </Container>
  );
}
