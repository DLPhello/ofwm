"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/basePath";

export function HomeHero({ images }: { images: string[] }) {
  const list = images.length ? images : [withBasePath("/images/hero/hero-0.jpg")];
  const [i, setI] = useState(0);
  const src = list[i % list.length];

  useEffect(() => {
    if (list.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % list.length), 5500);
    return () => clearInterval(t);
  }, [list.length]);

  return (
    <section
      className="relative h-[min(72vh,820px)] w-full overflow-hidden bg-stone-950"
      aria-label="Featured imagery from the portfolio"
    >
      <div className="absolute inset-0 z-0">
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-stone-950/90 via-stone-950/25 to-transparent"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] mx-auto max-w-6xl px-5 pb-14 pt-32 sm:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-stone-300">
          Trade · Australia
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-[3.25rem] md:leading-[1.08]">
          Oatley Fine Wine Merchants
        </h1>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-stone-200 sm:text-base">
          Independent premium wine distribution — family-owned producers,
          national reach, service-led partnerships.
        </p>
      </div>
    </section>
  );
}
