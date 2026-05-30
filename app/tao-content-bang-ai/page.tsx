import { Metadata } from "next";
import { tools } from "@/data/tools";
import { blogPosts } from "@/data/blogPosts";
import { ToolCard } from "@/components/ToolCard";
import { BlogCard } from "@/components/BlogCard";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Tạo Content bằng AI: Storytelling, kịch bản video, content viral",
  description:
    "Hướng dẫn ứng dụng AI để tạo nội dung nhanh hơn: storytelling, kịch bản video, content chuyên ngành và kịch bản bán hàng.",
  alternates: { canonical: "/tao-content-bang-ai" },
  openGraph: {
    title: "Tạo Content bằng AI",
    description:
      "Hướng dẫn ứng dụng AI để tạo nội dung nhanh hơn: storytelling, kịch bản video, content chuyên ngành và kịch bản bán hàng.",
    url: `${siteConfig.url}/tao-content-bang-ai`,
    type: "website"
  }
};

export default function Page() {
  return <div className="container-shell space-y-8 py-12"><h1 className="text-3xl font-bold">Tạo Content bằng AI</h1><p className="text-slate-600">Storytelling, kịch bản video, content viral, content chuyên ngành và kịch bản bán hàng.</p><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{tools.slice(0,6).map((t)=><ToolCard key={t.id} tool={t} />)}</div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{blogPosts.slice(0,3).map((p)=><BlogCard key={p.id} post={p} />)}</div></div>;
}
