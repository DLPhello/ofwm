"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Brand } from "@/lib/brands";

export function BrandPortfolio({ brands }: { brands: Brand[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return brands;
    return brands.filter(
      (b) =>
        b.name.toLowerCase().includes(s) ||
        b.slug.toLowerCase().includes(s)
    );
  }, [brands, q]);

  return (
    <section className="border-t border-border/80 bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
              Portfolio
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Our producers
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              {brands.length} brands and associations represented across Australia.
              Filter by name — tiles link to producer sites where available.
            </p>
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
            className="w-full border-b border-foreground/20 bg-transparent px-0 py-2 text-sm text-foreground outline-none placeholder:text-muted/70 focus:border-accent sm:max-w-xs"
          />
        </div>
        <p className="mt-6 text-xs text-muted">
          Showing {filtered.length} of {brands.length}
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((b) => {
            const inner = (
              <>
                <div className="relative aspect-[5/4] overflow-hidden bg-stone-100">
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-contain p-2 transition duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <span className="mt-2 block text-center text-[11px] font-medium leading-snug text-foreground/85 line-clamp-2 sm:text-xs">
                  {b.name}
                </span>
              </>
            );
            return (
              <li key={b.slug}>
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
          <p className="mt-12 text-center text-sm text-muted">No matches.</p>
        ) : null}
      </div>
    </section>
  );
}
