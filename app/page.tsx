import { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ProductGuide } from "@/components/ProductGuide";
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
    type: "website",
    images: [siteConfig.defaultOgImage]
  }
};

const featuredTools = [...tools]
  .filter((tool) => tool.slug !== "cong-cu-tim-video-viral")
  .sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured))
  .slice(0, 8);

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <ProductGuide />
      <div className="container-shell space-y-12 py-10 sm:py-12">
        <section>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Chọn theo việc cần làm</p>
              <h2 className="mt-2 text-2xl font-bold text-brand-900">Lối tắt đến đúng nhóm công cụ</h2>
            </div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CategoryCard title="Tạo content" href="/cong-cu-ai?goal=T%E1%BA%A1o+content" description="Ý tưởng, hook, kịch bản và workflow sản xuất nội dung đều đặn." />
            <CategoryCard title="Tăng view" href="/cong-cu-ai?goal=T%C4%83ng+view" description="Tìm format viral, phân tích đối thủ và tối ưu video ngắn." />
            <CategoryCard title="Kiếm tiền" href="/cong-cu-ai?goal=Ki%E1%BA%BFm+ti%E1%BB%81n" description="Bộ công cụ hỗ trợ affiliate, UGC và góc bán hàng chuyển đổi." />
            <CategoryCard title="Sức khỏe" href="/cong-cu-ai?goal=S%E1%BB%A9c+kh%E1%BB%8Fe" description="Prompt và chatbot cho nội dung sức khỏe, làm đẹp, mẹ và bé." />
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">{tools.length} công cụ đang có trong catalog</p>
              <h2 className="mt-2 text-2xl font-bold text-brand-900">Công cụ AI nổi bật</h2>
            </div>
            <Link href="/cong-cu-ai" className="text-sm font-semibold text-brand-700 hover:text-brand-900">Xem toàn bộ thư viện</Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-lg border border-ink/12 bg-white p-5">
            <p className="text-3xl font-bold text-brand-900">{tools.filter((tool) => tool.isFeatured).length}</p>
            <h3 className="mt-3 font-semibold text-brand-900">Công cụ ưu tiên triển khai</h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">Danh sách nổi bật tập trung vào công cụ có đầu ra rõ, dễ dùng cho creator mới bắt đầu.</p>
          </div>
          <div className="rounded-lg border border-ink/12 bg-white p-5">
            <p className="text-3xl font-bold text-brand-700">5</p>
            <h3 className="mt-3 font-semibold text-brand-900">Nền tảng nội dung</h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">TikTok, YouTube, Facebook, Website và Affiliate được gắn tag để lọc nhanh theo kênh làm việc.</p>
          </div>
          <div className="rounded-lg border border-ink/12 bg-white p-5">
            <p className="text-3xl font-bold text-brand-700">{blogPosts.length}</p>
            <h3 className="mt-3 font-semibold text-brand-900">Bài hướng dẫn thực chiến</h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">Nội dung giáo dục đi cùng catalog để người dùng biết chọn tool và áp dụng vào workflow thật.</p>
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Học để dùng đúng</p>
              <h2 className="mt-2 text-2xl font-bold text-brand-900">Bài viết mới nhất</h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-brand-700 hover:text-brand-900">Xem blog</Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 6).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        <CTASection />
      </div>
    </div>
  );
}
