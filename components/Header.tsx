"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setReadProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "border-border bg-background/92 shadow-[0_8px_30px_-12px_rgba(15,12,10,0.12)] backdrop-blur-xl"
          : "border-border/70 bg-background/80 backdrop-blur-md"
      }`}
    >
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full overflow-hidden bg-border/50"
        aria-hidden
      >
        <div
          className="h-full bg-gradient-to-r from-accent via-bronze to-accent [transition:width_120ms_ease-out]"
          style={{ width: `${readProgress}%` }}
        />
      </div>
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="group flex h-10 w-10 shrink-0 items-center justify-center border border-border/90 bg-surface/90 font-serif text-lg font-medium tracking-tight text-foreground shadow-sm transition-[border-color,box-shadow,transform] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:border-bronze/50 hover:shadow-md sm:h-11 sm:w-11"
            aria-label="Oatley Fine Wine Merchants - home"
          >
            <span className="translate-y-px transition-transform duration-500 group-hover:scale-105">
              O
            </span>
          </Link>
          <Link
            href="/"
            className="min-w-0 font-serif text-base font-medium tracking-tight text-foreground transition-opacity hover:opacity-75 sm:text-lg"
          >
            <span className="hidden sm:inline">Oatley Fine Wine Merchants</span>
            <span className="truncate sm:hidden">OFWM</span>
          </Link>
        </div>
        <nav
          className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/65 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-[color] duration-300 hover:text-foreground ${
                  active ? "text-foreground" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-accent to-bronze transition-[width,opacity] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                    active ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-border bg-surface/80 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-foreground shadow-sm transition hover:border-bronze/40 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-background/98 px-5 py-4 backdrop-blur-lg md:hidden"
          aria-label="Mobile primary"
        >
          <ul className="flex flex-col gap-3 text-sm font-medium uppercase tracking-wide">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-1 text-foreground/90"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
