"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Brand } from "@/lib/brands";

export function BrandPortfolio({ brands }: { brands: Brand[] }) {
  const [q, setQ] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return brands;
    return brands.filter(
      (b) =>
        b.name.toLowerCase().includes(s) ||
        b.slug.toLowerCase().includes(s)
    );
  }, [brands, q]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setVisible(true);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-border/90 bg-surface"
      aria-labelledby="portfolio-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/25 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
              Portfolio
            </p>
            <h2
              id="portfolio-heading"
              className="mt-3 font-serif text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.12]"
            >
              Our producers
            </h2>
            <div className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              <p>
                {brands.length} brands and associations represented across
                Australia.
              </p>
              <p className="mt-3 text-foreground/90">
                To receive your own copy of our Oatley Portfolio book, please
                contact:
              </p>
              <div className="mt-4 border-l-2 border-bronze/35 pl-4 text-foreground/90">
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  Director of Sales &amp; Marketing
                </p>
                <p className="mt-1 font-medium text-foreground">Rob Hassan</p>
                <p>
                  <a
                    href="mailto:rhassan@oatleywines.com.au"
                    className="underline-offset-2 hover:underline"
                  >
                    rhassan@oatleywines.com.au
                  </a>
                </p>
                <p>
                  <a
                    href="tel:0437400552"
                    className="underline-offset-2 hover:underline"
                  >
                    0437 400 552
                  </a>
                </p>
              </div>
              <p className="mt-4 text-muted">
                Filter by name - tiles link to producer sites where available.
              </p>
            </div>
          </div>
          <label className="sr-only" htmlFor="brand-filter">
            Filter brands
          </label>
          <input
            id="brand-filter"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter brands…"
            className="w-full border-0 border-b border-foreground/15 bg-transparent px-0 py-2.5 text-sm text-foreground outline-none ring-0 transition-[border-color] duration-300 placeholder:text-muted/60 focus:border-bronze/60 sm:max-w-xs"
          />
        </div>
        <p className="mt-8 text-xs text-muted">
          Showing {filtered.length} of {brands.length}
        </p>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((b, idx) => {
            const delay = Math.min(idx, 20) * 42;
            const inner = (
              <>
                <div className="relative aspect-[5/4] overflow-hidden rounded-sm border border-border/70 bg-[linear-gradient(165deg,rgba(255,254,251,0.98),rgba(247,244,239,0.92))] shadow-[0_1px_0_rgba(15,12,10,0.04)] transition-[border-color,box-shadow,transform] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:border-bronze/35 group-hover:shadow-[0_12px_40px_-18px_rgba(15,12,10,0.18)] group-hover:-translate-y-0.5">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(120% 80% at 50% 0%, rgba(138,106,62,0.06), transparent 55%)",
                    }}
                    aria-hidden
                  />
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-contain p-3 transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <span className="mt-2.5 block text-center text-[11px] font-medium leading-snug text-foreground/88 line-clamp-2 sm:text-xs">
                  {b.name}
                </span>
              </>
            );
            return (
              <li
                key={b.slug}
                className={`transition-[opacity,transform] duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
              >
                {b.externalUrl ? (
                  <a
                    href={b.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="group block">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
        {filtered.length === 0 ? (
          <p className="mt-14 text-center text-sm text-muted">No matches.</p>
        ) : null}
      </div>
    </section>
  );
}
