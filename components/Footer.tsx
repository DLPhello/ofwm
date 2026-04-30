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
        <div className="mt-14 rounded-sm border border-stone-800/90 bg-gradient-to-br from-stone-900/80 to-stone-950 p-8 sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-500/90">
            Field notes
          </p>
          <p className="mt-3 font-serif text-xl font-light text-stone-100 sm:text-2xl">
            The cellar sheet
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-400">
            Occasional notes on portfolio movements, tastings, and new listings —
            by email, when it matters. No inbox clutter; this is a demo flow only.
          </p>
          <a
            href="mailto:orders@oatleywines.com.au?subject=Request%20%E2%80%94%20cellar%20sheet%20%28OFWM%20demo%29"
            className="mt-6 inline-flex items-center gap-2 border border-stone-600/90 bg-stone-950/40 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-100 transition-[border-color,box-shadow,color] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:border-amber-600/50 hover:text-white"
          >
            Request the cellar sheet
          </a>
          <p className="mt-3 text-[10px] leading-relaxed text-stone-600">
            Opens your mail client. Nothing is stored on this site.
          </p>
        </div>
        <p className="mt-14 border-t border-stone-800 pt-8 text-xs text-stone-500">
          © {new Date().getFullYear()} Oatley Fine Wine Merchants. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
