import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQSection } from "@/components/FAQSection";
import { RelatedPosts } from "@/components/RelatedPosts";
import { tools } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";
import { BlogCard } from "@/components/BlogCard";

export const metadata: Metadata = { title: "Blog AI Content Hub", description: "Bài viết thực chiến về tạo content, tăng view và kiếm tiền bằng AI." };

export function BlogListPage() {
  return <div className="container-shell py-12"><h1 className="text-3xl font-bold">Blog AI Content Hub</h1><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{blogPosts.map((post)=><BlogCard key={post.id} post={post} />)}</div></div>;
}

const sections = [
  { id: "giai-phap", title: "Giải pháp nhanh" },
  { id: "quy-trinh", title: "Quy trình thực chiến" },
  { id: "luu-y", title: "Lưu ý khi triển khai" },
  { id: "cta", title: "Công cụ đề xuất" },
  { id: "faq", title: "FAQ" }
];

function pickToolsByCategory(category: string) {
  if (category.includes("Tăng view")) return tools.filter((t) => t.goal.includes("Tăng view")).slice(0, 3);
  if (category.includes("Kiếm tiền")) return tools.filter((t) => t.goal.includes("Kiếm tiền")).slice(0, 3);
  return tools.filter((t) => t.goal.includes("Tạo content") || t.goal.includes("Storytelling")).slice(0, 3);
}

export function BlogDetail({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();
  const relatedTools = pickToolsByCategory(post.category);

  return (
    <div className="container-shell space-y-8 py-10">
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />
      <article className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="mt-4 text-slate-700">{post.excerpt}</p>

          <h2 id="giai-phap" className="mt-8 text-2xl font-bold">Giải pháp nhanh</h2>
          <p className="mt-3 text-slate-700">{post.content[0] ?? "Áp dụng AI đúng workflow giúp bạn tăng tốc sản xuất nội dung và tối ưu hiệu quả kiếm tiền online."}</p>

          <h2 id="quy-trinh" className="mt-8 text-2xl font-bold">Quy trình thực chiến</h2>
          <h3 className="mt-4 text-lg font-semibold">Bước 1: Xác định mục tiêu rõ ràng</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700"><li>Xác định mục tiêu chính: tăng view, tăng chuyển đổi hoặc tăng tốc sản xuất.</li><li>Chọn 1 nền tảng ưu tiên để tránh phân tán nguồn lực.</li></ul>
          <h3 className="mt-4 text-lg font-semibold">Bước 2: Tạo và tối ưu nội dung với AI</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700"><li>Dùng prompt có cấu trúc để tạo hook, kịch bản và CTA.</li><li>Kiểm tra 3 biến thể để chọn phiên bản có tỷ lệ giữ chân tốt hơn.</li></ul>

          <h2 id="luu-y" className="mt-8 text-2xl font-bold">Lưu ý khi triển khai</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700"><li>Không sao chép trend nguyên bản, luôn biến tấu theo giọng thương hiệu.</li><li>Đo hiệu quả theo tuần để điều chỉnh hướng nội dung kịp thời.</li><li>Kết hợp AI với kiểm chứng thủ công để giữ độ tin cậy.</li></ul>

          <h2 id="cta" className="mt-8 text-2xl font-bold">Công cụ đề xuất</h2>
          <p className="mt-3 text-slate-700">Chọn công cụ phù hợp để triển khai ngay hôm nay:</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">{relatedTools.map((tool) => <ToolCard key={tool.id} tool={tool} />)}</div>
          <div className="mt-5 flex flex-wrap gap-3"><Link href="/cong-cu-ai" className="rounded-xl bg-brand-700 px-4 py-2 text-sm font-semibold text-white">Khám phá công cụ AI</Link><Link href="/lien-he" className="rounded-xl border border-brand-700 px-4 py-2 text-sm font-semibold text-brand-700">Nhắn Zalo tư vấn</Link></div>
        </div>
        <TableOfContents items={sections} />
      </article>
      <section id="faq"><FAQSection faqs={post.faq} /></section>
      <RelatedPosts currentSlug={post.slug} />
    </div>
  );
}

