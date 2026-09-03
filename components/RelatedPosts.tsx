import { blogPosts } from "@/data/blogPosts";
import { BlogCard } from "@/components/BlogCard";

export function RelatedPosts({ currentSlug, category }: { currentSlug: string; category?: string }) {
  const others = blogPosts.filter((p) => p.slug !== currentSlug);
  const sameCategory = category ? others.filter((p) => p.category === category) : [];
  const rest = others.filter((p) => !sameCategory.includes(p));
  const related = [...sameCategory, ...rest].slice(0, 3);
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">Bài viết liên quan</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>
    </section>
  );
}
