import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { getNewsBySlug, newsPosts } from "@/lib/news";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return { title: "News" };
  return {
    title: post.title.slice(0, 70),
    description: post.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();

  return (
    <Container className="py-16 sm:py-24">
      <article className="mx-auto max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted">
          News
        </p>
        {post.date ? (
          <time className="mt-3 block text-sm text-muted">{post.date}</time>
        ) : null}
        <h1 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>
        {post.image ? (
          <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden bg-stone-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
            />
          </div>
        ) : null}
        {post.excerpt ? (
          <p className="mt-10 text-base leading-relaxed text-foreground/90">
            {post.excerpt}
          </p>
        ) : null}
        <p className="mt-10 text-sm text-muted">
          Full article on the{" "}
          <a
            href={post.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-2 hover:underline"
          >
            previous site
          </a>
          .
        </p>
        <p className="mt-12">
          <Link
            href="/news"
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            ← All news
          </Link>
        </p>
      </article>
    </Container>
  );
}
