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
  return (
    <Container className="py-16 sm:py-24">
      <header className="max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
          News
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Latest news
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Archive of announcements — dates reflect original publication.
        </p>
      </header>
      <ul className="mt-16 divide-y divide-border">
        {newsPosts.map((post) => (
          <li key={post.slug} className="py-12 first:pt-0">
            <article className="grid gap-8 md:grid-cols-[minmax(0,1fr)_200px] md:items-start">
              <div>
                {post.date ? (
                  <time className="text-xs font-medium uppercase tracking-wide text-muted">
                    {post.date}
                  </time>
                ) : null}
                <h2 className="mt-2 font-serif text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  <Link
                    href={`/news/${post.slug}`}
                    className="transition-colors hover:text-accent"
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
                    className="text-xs font-medium uppercase tracking-wide text-foreground underline-offset-4 hover:underline"
                  >
                    Read more
                  </Link>
                </p>
              </div>
              {post.image ? (
                <Link
                  href={`/news/${post.slug}`}
                  className="relative block aspect-[4/3] w-full max-w-[240px] overflow-hidden bg-stone-100 md:justify-self-end"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="240px"
                    className="object-cover"
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
