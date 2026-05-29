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
      title: "Chuyen muc khong ton tai",
      description: siteConfig.description,
      alternates: { canonical: "/blog" }
    };
  }

  const canonical = `/blog/chuyen-muc/${category}`;
  const description = `Tong hop bai viet ${matched} giup ban ung dung AI thuc chien de tang hieu qua noi dung.`;
  return {
    title: `Chuyen muc ${matched}`,
    description,
    alternates: { canonical },
    openGraph: {
      title: `Chuyen muc ${matched}`,
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
      <Breadcrumb items={[{ label: "Trang chu", href: "/" }, { label: "Blog", href: "/blog" }, { label: matched }]} />
      <h1 className="mt-3 text-3xl font-bold">Chuyen muc: {matched}</h1>
      <p className="mt-2 text-slate-600">Bo bai viet thuc chien theo chu de {matched}.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? posts.map((post) => <BlogCard key={post.id} post={post} />) : <p className="text-slate-600">Dang cap nhat bai viet cho chuyen muc nay.</p>}
      </div>
    </div>
  );
}
