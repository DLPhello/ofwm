import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { newsPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
  description: "News and updates from Oatley Fine Wine Merchants.",
};

export default function NewsIndexPage() {
  const [featured, ...rest] = newsPosts;

  return (
    <Container className="py-16 sm:py-24">
      <header className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted">
          News
        </p>
        <h1 className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-[3.25rem]">
          Latest news
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
          Archive of announcements — dates reflect original publication.
        </p>
      </header>

      {featured ? (
        <article className="group relative mt-16 overflow-hidden rounded-sm border border-border/90 bg-surface shadow-[0_24px_60px_-28px_rgba(15,12,10,0.18)] transition-[box-shadow,border-color] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:border-bronze/30 hover:shadow-[0_28px_70px_-24px_rgba(15,12,10,0.22)] sm:mt-20">
          <div className="grid lg:grid-cols-2">
            {featured.image ? (
              <Link
                href={`/news/${featured.slug}`}
                className="relative aspect-[16/11] min-h-[220px] overflow-hidden bg-stone-100 lg:aspect-auto lg:min-h-[320px]"
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-[1.4s] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-stone-950/25 via-transparent to-transparent opacity-60"
                  aria-hidden
                />
              </Link>
            ) : null}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              {featured.date ? (
                <time className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                  {featured.date}
                </time>
              ) : null}
              <h2 className="mt-4 font-serif text-2xl font-light leading-snug tracking-tight text-foreground sm:text-3xl">
                <Link
                  href={`/news/${featured.slug}`}
                  className="transition-colors duration-300 hover:text-accent"
                >
                  {featured.title}
                </Link>
              </h2>
              {featured.excerpt ? (
                <p className="mt-5 line-clamp-4 text-sm leading-relaxed text-muted sm:text-base">
                  {featured.excerpt}
                </p>
              ) : null}
              <p className="mt-8">
                <Link
                  href={`/news/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground underline-offset-[6px] transition hover:underline"
                >
                  Read feature
                  <span aria-hidden className="text-bronze">
                    →
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </article>
      ) : null}

      <ul className="mt-16 divide-y divide-border sm:mt-20">
        {rest.map((post) => (
          <li key={post.slug} className="py-12 first:pt-0">
            <article className="grid gap-8 md:grid-cols-[minmax(0,1fr)_220px] md:items-start">
              <div>
                {post.date ? (
                  <time className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                    {post.date}
                  </time>
                ) : null}
                <h2 className="mt-2 font-serif text-xl font-light tracking-tight text-foreground sm:text-2xl">
                  <Link
                    href={`/news/${post.slug}`}
                    className="transition-colors duration-300 hover:text-accent"
                  >
                    {post.title}
                  </Link>
                </h2>
                {post.excerpt ? (
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                ) : null}
                <p className="mt-6">
                  <Link
                    href={`/news/${post.slug}`}
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground underline-offset-4 transition hover:underline"
                  >
                    Read more
                  </Link>
                </p>
              </div>
              {post.image ? (
                <Link
                  href={`/news/${post.slug}`}
                  className="group/img relative block aspect-[4/3] w-full max-w-[260px] overflow-hidden rounded-sm border border-border/60 bg-stone-100 shadow-sm transition-[border-color,box-shadow] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:border-bronze/35 hover:shadow-md md:justify-self-end"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="260px"
                    className="object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover/img:scale-[1.04]"
                  />
                </Link>
              ) : null}
            </article>
          </li>
        ))}
      </ul>
    </Container>
  );
}
