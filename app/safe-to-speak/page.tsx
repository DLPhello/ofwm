import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Safe to Speak",
  description: "Safe to Speak — Oatley Fine Wine Merchants.",
};

export default function SafeToSpeakPage() {
  return (
    <Container className="py-16 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
          Legal
        </p>
        <h1 className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground sm:text-5xl">
          Safe to Speak
        </h1>
        <p className="mt-8 text-sm leading-relaxed text-muted sm:text-base">
          This page is reserved for our Safe to Speak program and reporting
          pathways. Information will be added when it is ready. For urgent
          matters, please contact{" "}
          <a
            href="mailto:orders@oatleywines.com.au"
            className="text-foreground underline-offset-2 hover:underline"
          >
            orders@oatleywines.com.au
          </a>{" "}
          or your usual HR contact.
        </p>
      </article>
    </Container>
  );
}
