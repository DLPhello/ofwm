import Link from "next/link";
import { Container } from "@/components/Container";
import { PRIVACY_URL, TERMS_URL } from "@/lib/site";

const links = [
  { href: "/", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-stone-950 text-stone-300">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <p className="font-serif text-xl text-white">
              Oatley Fine Wine Merchants
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-400">
              Leading independent premium wine merchant — trade distribution
              across Australia, family-owned producers, and service-led
              partnerships.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              Navigate
            </p>
            <nav className="mt-4" aria-label="Footer">
              <ul className="space-y-2 text-sm">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-stone-300 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={TERMS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 transition-colors hover:text-white"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  href={PRIVACY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 transition-colors hover:text-white"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-14 border-t border-stone-800 pt-8 text-xs text-stone-500">
          © {new Date().getFullYear()} Oatley Fine Wine Merchants. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
