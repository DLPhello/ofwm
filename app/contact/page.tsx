import type { Metadata } from "next";
import { Container } from "@/components/Container";
import {
  CREDIT_APPLICATION_FORM_URL,
  CREDIT_REQUEST_FORM_PDF_PATH,
  PRIVACY_URL,
  TERMS_URL,
} from "@/lib/site";
import { withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Oatley Fine Wine Merchants for trade enquiries.",
};

const mailtoOrders = "mailto:orders@oatleywines.com.au";

const creditRequestPdfHref = encodeURI(
  withBasePath(CREDIT_REQUEST_FORM_PDF_PATH)
);

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
            Contact
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Contact us
          </h1>
          <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted">
                General enquiries, customer service &amp; deliveries
              </h2>
              <p className="mt-2">
                <a
                  href={mailtoOrders}
                  className="text-foreground underline-offset-2 hover:underline"
                >
                  orders@oatleywines.com.au
                </a>
              </p>
              <p>
                <a
                  href="tel:1800628539"
                  className="text-foreground underline-offset-2 hover:underline"
                >
                  1800 628 539
                </a>
              </p>
            </section>
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted">
                Key business contacts
              </h2>
              <ul className="mt-4 space-y-6">
                <ContactBlock
                  role="Director of Sales &amp; Marketing"
                  name="Rob Hassan"
                  email="rhassan@oatleywines.com.au"
                  phone="0437 400 552"
                />
                <ContactBlock
                  role="Regional Business Director"
                  name="Sam Mete"
                  email="smete@oatleywines.com.au"
                  phone="0417 468 204"
                />
                <ContactBlock
                  role="National Sales Manager"
                  name="Andrew Coorey"
                  email="acoorey@oatleywines.com.au"
                  phone="0458 001 398"
                />
                <ContactBlock
                  role="Human Resources Director"
                  name="Fiona Dart"
                  email="fdart@oatleywines.com.au"
                  phone="0426 253 267"
                />
              </ul>
            </section>
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted">
                Accounts department
              </h2>
              <p className="mt-2">
                <a
                  href="mailto:ofwaccounts@oatleywines.com.au"
                  className="text-foreground underline-offset-2 hover:underline"
                >
                  ofwaccounts@oatleywines.com.au
                </a>
              </p>
              <p>
                <a
                  href="tel:1800628539"
                  className="text-foreground underline-offset-2 hover:underline"
                >
                  1800 628 539
                </a>
              </p>
            </section>
            <section aria-labelledby="forms-heading">
              <h2
                id="forms-heading"
                className="text-xs font-semibold uppercase tracking-wide text-muted"
              >
                Forms
              </h2>
              <div className="group/forms relative mt-5">
                <div
                  className="pointer-events-none absolute -inset-x-3 -inset-y-3 rounded-sm bg-[radial-gradient(ellipse_85%_60%_at_50%_0%,rgba(138,106,62,0.07),transparent_55%)] opacity-0 transition-opacity duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover/forms:opacity-100"
                  aria-hidden
                />
                <div
                  className="relative overflow-hidden rounded-sm border border-border/70 bg-[linear-gradient(165deg,rgba(255,254,251,0.98),rgba(247,244,239,0.88))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_20px_50px_-28px_rgba(15,12,10,0.14)] sm:p-7"
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/35 to-transparent"
                    aria-hidden
                  />
                  <div className="border-l-2 border-bronze/40 pl-5 sm:pl-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-bronze/90">
                      Trade desk
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-light tracking-tight text-foreground sm:text-[1.65rem] sm:leading-snug">
                      Credit &amp; applications
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                      Two ways to submit trade credit details — choose the path
                      that suits your workflow.
                    </p>
                    <ol className="mt-8 space-y-10">
                      <li className="flex gap-4 sm:gap-6">
                        <span
                          className="select-none font-serif text-3xl font-light tabular-nums leading-none text-bronze/40 sm:text-[2rem]"
                          aria-hidden
                        >
                          01
                        </span>
                        <div className="min-w-0 flex-1 space-y-3">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
                            Online application
                          </p>
                          <p className="text-sm leading-relaxed text-foreground/88">
                            Secure hosted flow via ApplyEasy. Recommended when
                            you want the fastest path to an assessment.
                          </p>
                          <a
                            href={CREDIT_APPLICATION_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/cta relative inline-flex w-fit items-center gap-2.5 overflow-hidden rounded-sm border border-accent/90 bg-accent px-6 py-3 text-[13px] font-medium tracking-[0.12em] text-white uppercase shadow-[0_12px_32px_-14px_rgba(107,28,44,0.48)] transition-[transform,box-shadow,border-color] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/0 after:via-white/18 after:to-white/0 after:opacity-0 after:transition-opacity after:duration-500 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_18px_44px_-16px_rgba(107,28,44,0.38)] hover:after:opacity-100"
                          >
                            Begin application
                            <span className="sr-only"> (opens in new tab)</span>
                            <ExternalLinkIcon className="relative z-[1] h-4 w-4 opacity-95 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                          </a>
                        </div>
                      </li>
                      <li className="flex gap-4 border-t border-border/60 pt-10 sm:gap-6">
                        <span
                          className="select-none font-serif text-3xl font-light tabular-nums leading-none text-bronze/35 sm:text-[2rem]"
                          aria-hidden
                        >
                          02
                        </span>
                        <div className="min-w-0 flex-1 space-y-3">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
                            Printable form
                          </p>
                          <p className="text-sm leading-relaxed text-foreground/85">
                            A traditional PDF for print, sign-off, and return
                            through your representative or accounts.
                          </p>
                          <a
                            href={creditRequestPdfHref}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/pdf relative inline-flex w-fit items-center gap-2 rounded-sm border border-bronze/45 bg-surface/90 px-5 py-2.5 text-[13px] font-medium tracking-wide text-foreground shadow-[0_1px_0_rgba(255,255,255,0.65)_inset] transition-[transform,border-color,box-shadow,background-color] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-bronze/70 hover:bg-background/95 hover:shadow-[0_10px_28px_-18px_rgba(15,12,10,0.12)]"
                          >
                            Download PDF
                            <PdfIcon className="h-4 w-4 text-bronze transition-transform duration-300 group-hover/pdf:translate-y-px" />
                          </a>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted">
                Head office
              </h2>
              <address className="mt-2 not-italic">
                Level 3, 100 Pacific Hwy
                <br />
                ST LEONARDS, NSW
              </address>
            </section>
          </div>
        </div>
        <div className="relative lg:col-span-7 lg:pl-12 lg:pt-16 lg:self-start">
          <div className="relative rounded-sm border border-border/80 bg-surface/95 p-8 shadow-[0_24px_60px_-30px_rgba(15,12,10,0.12)] sm:p-10 lg:pl-12">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-2 rounded-l-sm bg-gradient-to-b from-bronze/55 to-accent/35"
              aria-hidden
            />
            <h2 className="font-serif text-2xl font-light text-foreground">
              Send a message
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Opens your email client; nothing is stored on this site.
            </p>
            <p className="mt-10">
              <a
                href={`mailto:orders@oatleywines.com.au?subject=${encodeURIComponent("Trade enquiry - Oatley Fine Wine Merchants")}`}
                className="inline-flex border border-accent bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-white shadow-[0_12px_32px_-12px_rgba(107,28,44,0.45)] transition-[transform,box-shadow,opacity] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_16px_40px_-10px_rgba(107,28,44,0.4)]"
              >
                Email orders@oatleywines.com.au
              </a>
            </p>
            <p className="mt-12 text-xs text-muted">
              Legal:{" "}
              <a
                href={TERMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline-offset-2 hover:underline"
              >
                Terms of use
              </a>
              {" · "}
              <a
                href={PRIVACY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline-offset-2 hover:underline"
              >
                Privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 2.5h3.5V6M14 2.5L7.5 9M8 3.5H3.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PdfIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M9 2.5H4.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V6L9 2.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M9 2.5v3.5H12.5M5.5 11h5.5M5.5 8.5h5.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ContactBlock({
  role,
  name,
  email,
  phone,
}: {
  role: string;
  name: string;
  email: string;
  phone: string;
}) {
  return (
    <li>
      <p className="text-xs font-medium uppercase tracking-wide text-muted">
        {role}
      </p>
      <p className="mt-1 font-medium text-foreground">{name}</p>
      <p>
        <a
          href={`mailto:${email}`}
          className="text-foreground/90 underline-offset-2 hover:underline"
        >
          {email}
        </a>
      </p>
      <p>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="text-foreground/90 underline-offset-2 hover:underline"
        >
          {phone}
        </a>
      </p>
    </li>
  );
}
