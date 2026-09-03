import { Metadata } from "next";
import { BlogListPage } from "@/data/blogTemplates";
import { blogCategories } from "@/data/blogCategories";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Blog AIContent360: Hướng dẫn tạo content, tăng view, kiếm tiền bằng AI",
  description:
    "Tổng hợp bài viết thực chiến về tạo content bằng AI, tăng view viral, affiliate và workflow ứng dụng AI cho creator.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog AIContent360",
    description:
      "Tổng hợp bài viết thực chiến về tạo content bằng AI, tăng view viral, affiliate và workflow ứng dụng AI cho creator.",
    url: `${siteConfig.url}/blog`,
    type: "website",
    images: [siteConfig.defaultOgImage]
  }
};

export default function Page() {
  return (
    <div className="container-shell py-12">
      <BlogListPage />
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold">Chuyên mục</h2>
        <div className="flex flex-wrap gap-2">
          {blogCategories.map((category) => (
            <Link key={category} href={`/blog/chuyen-muc/${encodeURIComponent(category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "va"))}`} className="rounded-full bg-ink/[0.05] px-3 py-1 text-sm text-ink/80 hover:bg-ink/10">
              {category}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
