import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Ethical Dealing Principles",
  description: "Ethical Dealing Principles — Oatley Fine Wine Merchants.",
};

export default function EthicalDealingPrinciplesPage() {
  return (
    <Container className="py-16 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
          Legal
        </p>
        <h1 className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground sm:text-5xl">
          Ethical Dealing Principles
        </h1>
        <p className="mt-8 text-sm leading-relaxed text-muted sm:text-base">
          This page is reserved for our Ethical Dealing Principles. The full
          statement will appear here once approved. For trade ethics or
          compliance questions, contact{" "}
          <a
            href="mailto:orders@oatleywines.com.au"
            className="text-foreground underline-offset-2 hover:underline"
          >
            orders@oatleywines.com.au
          </a>
          .
        </p>
      </article>
    </Container>
  );
}
