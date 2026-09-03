import { Metadata } from "next";
import { blogPosts } from "@/data/blogPosts";
import { BlogCard } from "@/components/BlogCard";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { blogCategories } from "@/data/blogCategories";
import { siteConfig } from "@/data/siteConfig";

const slugify = (v: string) => v.toLowerCase().replaceAll("&", "va").replaceAll(" ", "-");

export function generateStaticParams() {
  return blogCategories.map((c) => ({ category: slugify(c) }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const matched = blogCategories.find((c) => slugify(c) === category);

  if (!matched) {
    return {
      title: "Chuyên mục không tồn tại",
      description: siteConfig.description,
      alternates: { canonical: "/blog" }
    };
  }

  const canonical = `/blog/chuyen-muc/${category}`;
  const description = `Tổng hợp bài viết ${matched} giúp bạn ứng dụng AI thực chiến để tăng hiệu quả nội dung.`;
  return {
    title: `Chuyên mục ${matched}`,
    description,
    alternates: { canonical },
    openGraph: {
      title: `Chuyên mục ${matched}`,
      description,
      url: `${siteConfig.url}${canonical}`,
      type: "website"
    }
  };
}

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const matched = blogCategories.find((c) => slugify(c) === category);
  if (!matched) return notFound();

  const posts = blogPosts.filter((p) => p.category.toLowerCase() === matched.toLowerCase());
  return (
    <div className="container-shell py-12">
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Blog", href: "/blog" }, { label: matched }]} />
      <h1 className="mt-3 text-3xl font-bold">Chuyên mục: {matched}</h1>
      <p className="mt-2 text-ink/70">Bộ bài viết thực chiến theo chủ đề {matched}.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? posts.map((post) => <BlogCard key={post.id} post={post} />) : <p className="text-ink/70">Đang cập nhật bài viết cho chuyên mục này.</p>}
      </div>
    </div>
  );
}
