import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the Oatley Fine Wine Merchants website.",
};

export default function TermsOfUsePage() {
  return (
    <Container className="py-16 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
          Legal
        </p>
        <h1 className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground sm:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-8 text-sm leading-relaxed text-muted">
          This is a placeholder legal page for the demo website and should be
          reviewed by legal counsel before production use.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90 sm:text-base">
          <section>
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              1. Website use
            </h2>
            <p className="mt-2">
              By accessing this website, you agree to use it only for lawful
              purposes and in a way that does not infringe the rights of, or
              restrict the use of, this website by others.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              2. Information and availability
            </h2>
            <p className="mt-2">
              We aim to keep website information accurate and current, but we do
              not warrant completeness, reliability, or uninterrupted
              availability. Content may change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              3. Intellectual property
            </h2>
            <p className="mt-2">
              Unless otherwise stated, content on this site is owned by Oatley
              Fine Wine Merchants or its licensors. You may view and download
              material for personal or internal business reference only.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              4. Third-party links
            </h2>
            <p className="mt-2">
              This site may include links to third-party websites for
              convenience. We do not control or endorse third-party content and
              are not responsible for it.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              5. Liability
            </h2>
            <p className="mt-2">
              To the maximum extent permitted by law, we exclude liability for
              any loss or damage arising from your use of, or reliance on, this
              website.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              6. Contact
            </h2>
            <p className="mt-2">
              For legal or website enquiries, contact{" "}
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
