import { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TableOfContents } from "@/components/TableOfContents";
import { FAQSection } from "@/components/FAQSection";
import { RelatedPosts } from "@/components/RelatedPosts";
import { tools } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";
import { BlogCard } from "@/components/BlogCard";

export const metadata: Metadata = { title: "Blog AIContent360", description: "Bài viết thực chiến về tạo content, tăng view và kiếm tiền bằng AI." };

export function BlogListPage() {
  return <div className="container-shell py-12"><h1 className="text-3xl font-bold">Blog AIContent360</h1><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{blogPosts.map((post)=><BlogCard key={post.id} post={post} />)}</div></div>;
}

function slugifyHeading(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderInline(text: string, keyBase: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    if (match[1]) {
      nodes.push(<strong key={`${keyBase}-b${i}`}>{match[2]}</strong>);
    } else if (match[3]) {
      nodes.push(<em key={`${keyBase}-i${i}`}>{match[4]}</em>);
    } else if (match[5]) {
      const label = match[6];
      const url = match[7];
      if (/^https?:\/\//.test(url)) {
        nodes.push(
          <a key={`${keyBase}-a${i}`} href={url} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 underline">
            {label}
          </a>
        );
      } else {
        nodes.push(
          <Link key={`${keyBase}-l${i}`} href={url} className="font-medium text-brand-700 underline">
            {label}
          </Link>
        );
      }
    }
    lastIndex = regex.lastIndex;
    i += 1;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function buildArticle(content: string[]): { blocks: ReactNode[]; toc: { id: string; title: string }[] } {
  const lines = content.join("\n").split("\n");
  const blocks: ReactNode[] = [];
  const toc: { id: string; title: string }[] = [];
  let list: string[] = [];
  let key = 0;

  const flushList = () => {
    if (list.length) {
      const current = list;
      const k = key++;
      blocks.push(
        <ul key={`ul-${k}`} className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
          {current.map((item, idx) => (
            <li key={`li-${k}-${idx}`}>{renderInline(item, `li-${k}-${idx}`)}</li>
          ))}
        </ul>
      );
      list = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      const t = line.slice(4);
      blocks.push(
        <h3 key={`h3-${key++}`} className="mt-6 text-lg font-semibold text-slate-900">
          {renderInline(t, `h3-${key}`)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      const t = line.slice(3);
      const id = slugifyHeading(t);
      toc.push({ id, title: t });
      blocks.push(
        <h2 id={id} key={`h2-${key++}`} className="mt-8 text-2xl font-bold">
          {renderInline(t, `h2-${key}`)}
        </h2>
      );
    } else if (line.startsWith("> ")) {
      flushList();
      const t = line.slice(2);
      blocks.push(
        <blockquote key={`bq-${key++}`} className="mt-4 rounded-xl border-l-4 border-brand-300 bg-slate-50 p-4 text-slate-700">
          {renderInline(t, `bq-${key}`)}
        </blockquote>
      );
    } else if (line.startsWith("- ")) {
      list.push(line.slice(2));
    } else {
      flushList();
      blocks.push(
        <p key={`p-${key++}`} className="mt-3 text-slate-700">
          {renderInline(line, `p-${key}`)}
        </p>
      );
    }
  }
  flushList();
  return { blocks, toc };
}

function pickToolsByCategory(category: string) {
  if (category.includes("Tăng view")) return tools.filter((t) => t.goal.includes("Tăng view")).slice(0, 3);
  if (category.includes("Kiếm tiền")) return tools.filter((t) => t.goal.includes("Kiếm tiền")).slice(0, 3);
  return tools.filter((t) => t.goal.includes("Tạo content") || t.goal.includes("Storytelling")).slice(0, 3);
}

export function BlogDetail({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();
  const relatedTools = pickToolsByCategory(post.category);
  const { blocks, toc } = buildArticle(post.content);
  const sections = [...toc, { id: "cong-cu", title: "Công cụ đề xuất" }, ...(post.faq.length > 0 ? [{ id: "faq", title: "FAQ" }] : [])];
  const displayDate = new Date(post.date).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: "Hùng", url: "https://aicontent360.shop/gioi-thieu" },
    publisher: { "@type": "Organization", name: "AIContent360" },
    mainEntityOfPage: `https://aicontent360.shop/blog/${post.slug}`
  };

  return (
    <div className="container-shell space-y-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />
      <article className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{post.excerpt}</p>
          <p className="mt-3 text-sm text-slate-500">
            Viết bởi <Link href="/gioi-thieu" className="font-medium text-brand-700 underline">Hùng</Link> · Cập nhật {displayDate}
          </p>

          {blocks}

          <h2 id="cong-cu" className="mt-10 text-2xl font-bold">Công cụ đề xuất</h2>
          <p className="mt-3 text-slate-700">Chọn công cụ phù hợp để triển khai ngay hôm nay:</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">{relatedTools.map((tool) => <ToolCard key={tool.id} tool={tool} />)}</div>
          <div className="mt-5 flex flex-wrap gap-3"><Link href="/cong-cu-ai" className="rounded-xl bg-brand-700 px-4 py-2 text-sm font-semibold text-white">Khám phá công cụ AI</Link></div>
        </div>
        <TableOfContents items={sections} />
      </article>
      {post.faq.length > 0 ? <section id="faq"><FAQSection faqs={post.faq} /></section> : null}
      <RelatedPosts currentSlug={post.slug} />
    </div>
  );
}
