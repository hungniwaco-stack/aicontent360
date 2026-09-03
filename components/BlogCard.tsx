import Link from "next/link";
import { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-ink/12 bg-white p-5 shadow-[0_2px_14px_-8px_rgba(33,28,21,0.16)] transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_8px_24px_-10px_rgba(33,28,21,0.22)]">
      <p className="font-mono text-xs uppercase tracking-wider text-brand-700">{post.category}</p>
      <h3 className="mt-3 text-lg font-bold leading-snug text-brand-900">{post.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-ink/70">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="mt-4 inline-block font-mono text-xs font-semibold uppercase tracking-wider text-brand-700 transition-colors hover:text-brand-900">
        Xem bài hướng dẫn →
      </Link>
    </article>
  );
}
