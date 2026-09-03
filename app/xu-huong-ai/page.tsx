import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { BlogCard } from "@/components/BlogCard";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Xu Hướng AI",
  description:
    "Lọc lại những xu hướng, công cụ và cách làm AI cho content thực sự đáng chú ý — theo góc nhìn của một người đang dùng.",
  alternates: { canonical: "/xu-huong-ai" },
  openGraph: {
    title: "Xu Hướng AI",
    description:
      "Lọc lại những xu hướng, công cụ và cách làm AI cho content thực sự đáng chú ý — theo góc nhìn của một người đang dùng.",
    url: `${siteConfig.url}/xu-huong-ai`,
    type: "website"
  }
};

export default function Page() {
  const posts = blogPosts.filter((p) => p.category === "Xu hướng AI");
  return (
    <div className="container-shell space-y-8 py-12">
      <section className="max-w-3xl">
        <h1 className="text-3xl font-bold text-brand-900">Xu Hướng AI</h1>
        <p className="mt-3 text-ink/80">
          AI cho content thay đổi từng tháng — công cụ mới, tính năng mới, cách làm mới. Nhưng phần lớn &quot;tin tức
          AI&quot; chỉ là tiêu đề giật gân. Ở đây mình lọc lại theo một tiêu chí duy nhất:{" "}
          <strong>thứ này có giúp người làm content làm việc tốt hơn không?</strong> Nếu không, mình bỏ qua.
        </p>
        <p className="mt-3 text-ink/80">
          Đây là nơi mình ghi lại những xu hướng, công cụ và cách làm mình thấy đáng chú ý — kèm góc nhìn thật của một
          người đang dùng, không phải người đọc thông cáo báo chí.
        </p>
      </section>

      {posts.length > 0 ? (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </section>
      ) : null}

      <section className="text-ink/80">
        <p>
          Theo dõi những gì mình học được mỗi tuần tại{" "}
          <Link href="/blog" className="font-medium text-brand-700 underline">
            Blog
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
