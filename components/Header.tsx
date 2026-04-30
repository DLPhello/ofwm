"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="font-serif text-base tracking-tight text-foreground transition-opacity hover:opacity-75 sm:text-lg"
        >
          Oatley Fine Wine Merchants
        </Link>
        <nav
          className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/70 md:flex"
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
                className={`transition-colors hover:text-foreground ${
                  active ? "text-foreground" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-foreground md:hidden"
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
          className="border-t border-border bg-background px-5 py-4 md:hidden"
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
