import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Oatley Fine Wine Merchants website.",
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-16 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
          Legal
        </p>
        <h1 className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-8 text-sm leading-relaxed text-muted">
          This is a placeholder privacy policy for the demo website and should
          be reviewed by legal counsel before production use.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90 sm:text-base">
          <section>
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              1. Information we collect
            </h2>
            <p className="mt-2">
              We may collect information you provide directly (for example,
              email enquiries) and basic technical data required to operate and
              secure the website.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              2. How we use information
            </h2>
            <p className="mt-2">
              Information is used to respond to enquiries, provide requested
              services, improve website performance, and meet legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              3. Disclosure
            </h2>
            <p className="mt-2">
              We do not sell personal information. Information may be disclosed
              to service providers or regulators where required to operate the
              business or comply with law.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              4. Security and retention
            </h2>
            <p className="mt-2">
              We take reasonable steps to protect personal information and
              retain data only for as long as needed for business or legal
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              5. Access and correction
            </h2>
            <p className="mt-2">
              You can request access to, or correction of, your personal
              information by contacting us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              6. Contact
            </h2>
            <p className="mt-2">
              Privacy enquiries can be sent to{" "}
              <a
                href="mailto:orders@oatleywines.com.au"
                className="underline-offset-2 hover:underline"
              >
                orders@oatleywines.com.au
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </Container>
  );
}
