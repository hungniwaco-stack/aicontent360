import Link from "next/link";
import { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-xs text-slate-500">{post.category}</p>
      <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-semibold text-brand-700">Xem bài hướng dẫn</Link>
    </article>
  );
}
