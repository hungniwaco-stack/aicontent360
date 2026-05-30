import { Metadata } from "next";
import { blogPosts } from "@/data/blogPosts";
import { BlogDetail } from "@/data/blogTemplates";
import { siteConfig } from "@/data/siteConfig";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Bài viết không tồn tại",
      description: siteConfig.description,
      alternates: { canonical: "/blog" }
    };
  }

  const canonical = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}${canonical}`,
      type: "article"
    }
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogDetail slug={slug} />;
}
