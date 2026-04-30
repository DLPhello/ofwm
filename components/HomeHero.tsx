"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { withBasePath } from "@/lib/basePath";

/** Time each slide stays fully readable before crossfading to the next */
const ROTATE_MS = 5200;

export function HomeHero({ images }: { images: string[] }) {
  const list = images.length ? images : [withBasePath("/images/hero/hero-0.jpg")];
  const [active, setActive] = useState(0);
  const [pauseCycle, setPauseCycle] = useState(false);

  useEffect(() => {
    setPauseCycle(
      typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (list.length < 2 || pauseCycle) return;
    const id = window.setInterval(() => {
      setActive((n) => (n + 1) % list.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [list.length, pauseCycle]);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setActive(idx % list.length);
    },
    [active, list.length]
  );

  return (
    <section
      className="relative h-[min(78vh,880px)] w-full overflow-hidden bg-stone-950"
      aria-label="Featured imagery from the portfolio"
    >
      <div className="absolute inset-0 z-0">
        {list.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1100ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
              idx === active ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={idx !== active}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={idx === 0}
              sizes="100vw"
              className={`object-cover object-center ${
                idx === active ? "hero-image-drift" : ""
              }`}
            />
          </div>
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-stone-950 via-stone-950/55 to-stone-950/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,rgba(15,12,10,0.55),transparent)]"
        aria-hidden
      />

      {list.length > 1 ? (
        <div
          className="absolute bottom-24 left-1/2 z-[4] flex -translate-x-1/2 gap-2 sm:bottom-32"
          role="tablist"
          aria-label="Hero slides"
        >
          {list.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === active}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => goTo(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                idx === active
                  ? "w-8 bg-white/90"
                  : "w-1.5 bg-white/35 hover:bg-white/55"
              }`}
            />
          ))}
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] mx-auto max-w-6xl px-5 pb-16 pt-36 sm:px-8 sm:pb-20">
        <div className="hero-copy-rise max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-stone-300/95">
            Trade · Australia
          </p>
          <h1 className="mt-5 max-w-[18ch] font-serif text-[2.35rem] font-light leading-[1.06] tracking-tight text-white sm:text-5xl sm:leading-[1.05] md:text-[3.5rem]">
            Oatley Fine Wine Merchants
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-stone-200/95 sm:text-lg">
            Independent premium wine distribution - family-owned producers,
            national reach, service-led partnerships.
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-6 left-1/2 z-[4] hidden -translate-x-1/2 text-[10px] font-medium uppercase tracking-[0.35em] text-white/35 sm:block"
        aria-hidden
      >
        Portfolio in motion
      </div>
    </section>
  );
}
