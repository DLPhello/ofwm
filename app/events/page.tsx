import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Events",
  description: "Events — Oatley Fine Wine Merchants",
};

export default function EventsPage() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
        Events
      </p>
      <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        Events
      </h1>
      <p className="mt-10 max-w-md text-base leading-relaxed text-muted">
        There are no events at this time.
      </p>
    </Container>
  );
}
