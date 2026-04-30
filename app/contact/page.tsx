import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CREDIT_NOTE_PDF, PRIVACY_URL, TERMS_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Oatley Fine Wine Merchants for trade enquiries.",
};

const mailtoOrders = "mailto:orders@oatleywines.com.au";

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
                  role="Chief Executive Officer"
                  name="Anthony Roberts"
                  email="aroberts@oatleywines.com.au"
                  phone="0408 841 631"
                />
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
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted">
                Customer service
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
                Forms
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <span className="text-muted">Credit application: </span>
                  <span className="text-muted">
                    request the latest PDF from accounts or your representative.
                  </span>
                </li>
                <li>
                  <a
                    href={CREDIT_NOTE_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline-offset-2 hover:underline"
                  >
                    Credit application form (PDF)
                  </a>
                </li>
              </ul>
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
        <div className="relative lg:col-span-7 lg:pl-12">
          <div
            className="pointer-events-none absolute -inset-px left-0 top-0 hidden rounded-sm bg-gradient-to-br from-bronze/40 via-accent/30 to-bronze/25 opacity-90 lg:block lg:rounded-l-none lg:rounded-r-sm"
            aria-hidden
          />
          <div className="relative rounded-sm border border-border/80 bg-surface/95 p-8 shadow-[0_24px_60px_-30px_rgba(15,12,10,0.12)] sm:p-10 lg:border-l-0 lg:pl-12">
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
              <Link
                href={TERMS_URL}
                className="text-foreground underline-offset-2 hover:underline"
              >
                Terms of use
              </Link>
              {" · "}
              <Link
                href={PRIVACY_URL}
                className="text-foreground underline-offset-2 hover:underline"
              >
                Privacy policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
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
