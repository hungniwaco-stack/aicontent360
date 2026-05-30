import { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { CategoryCard } from "@/components/CategoryCard";
import { ToolCard } from "@/components/ToolCard";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { tools } from "@/data/tools";
import { blogPosts } from "@/data/blogPosts";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Ứng dụng AI để tạo content, tăng view và kiếm tiền online",
  description:
    "Khám phá hệ sinh thái công cụ AI thực chiến giúp bạn tìm ý tưởng viral, viết kịch bản, xây kênh nội dung và triển khai affiliate hiệu quả hơn.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ứng dụng AI để tạo content, tăng view và kiếm tiền online",
    description:
      "Khám phá hệ sinh thái công cụ AI thực chiến giúp bạn tìm ý tưởng viral, viết kịch bản, xây kênh nội dung và triển khai affiliate hiệu quả hơn.",
    url: siteConfig.url,
    type: "website"
  }
};

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <div className="container-shell space-y-14 py-12">
        <section>
          <h2 className="mb-4 text-2xl font-bold">Bạn muốn AI giúp gì?</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <CategoryCard title="Tạo Content" href="/tao-content-bang-ai" />
            <CategoryCard title="Tăng View" href="/tang-view-viral" />
            <CategoryCard title="Kiếm Tiền" href="/kiem-tien-bang-ai" />
          </div>
        </section>
        <section><h2 className="mb-4 text-2xl font-bold">Công cụ AI nổi bật</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{tools.slice(0, 8).map((t) => <ToolCard key={t.id} tool={t} />)}</div></section>
        <section><h2 className="mb-4 text-2xl font-bold">Quy trình ứng dụng AI</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{["Tìm ý tưởng","Tạo kịch bản","Sản xuất nội dung","Đăng và tối ưu"].map((s)=> <div key={s} className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold">{s}</div>)}</div></section>
        <section><h2 className="mb-4 text-2xl font-bold">Bài viết mới nhất</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{blogPosts.slice(0, 6).map((p) => <BlogCard key={p.id} post={p} />)}</div></section>
        <section><h2 className="mb-4 text-2xl font-bold">Tài nguyên miễn phí</h2><p className="text-slate-600">Prompt, workflow, chatbot và checklist miễn phí để bạn bắt đầu nhanh.</p></section>
        <section><h2 className="mb-4 text-2xl font-bold">Case Study nổi bật</h2><p className="text-slate-600">Từ 0 đến 100.000 view bằng AI, xây kênh kể chuyện, và affiliate video ngắn.</p></section>
        <CTASection />
      </div>
    </div>
  );
}
