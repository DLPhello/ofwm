import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description: "Code of Conduct — Oatley Fine Wine Merchants.",
};

export default function CodeOfConductPage() {
  return (
    <Container className="py-16 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
          Legal
        </p>
        <h1 className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground sm:text-5xl">
          Code of Conduct
        </h1>
        <p className="mt-8 text-sm leading-relaxed text-muted sm:text-base">
          This page is reserved for our Code of Conduct. Content will be
          published here when it is finalised. In the meantime, please contact
          your Oatley Fine Wine Merchants representative or{" "}
          <a
            href="mailto:orders@oatleywines.com.au"
            className="text-foreground underline-offset-2 hover:underline"
          >
            orders@oatleywines.com.au
          </a>{" "}
          for workplace or conduct-related enquiries.
        </p>
      </article>
    </Container>
  );
}
