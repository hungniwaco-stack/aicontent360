import { blogPosts } from "@/data/blogPosts";
import { BlogCard } from "@/components/BlogCard";

export function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const related = blogPosts.filter((p) => p.slug !== currentSlug).slice(0, 3);
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">Bài viết liên quan</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>
    </section>
  );
}
