import { MetadataRoute } from "next";
import { blogCategories } from "@/data/blogCategories";
import { blogPosts } from "@/data/blogPosts";
import { siteConfig } from "@/data/siteConfig";
import { tools } from "@/data/tools";

export const dynamic = "force-static";

const slugify = (value: string) => value.toLowerCase().replaceAll("&", "va").replaceAll(" ", "-");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticPaths = [
    "",
    "/tang-view-viral",
    "/kiem-tien-bang-ai",
    "/cong-cu-ai",
    "/case-study",
    "/mien-phi",
    "/xu-huong-ai",
    "/blog",
    "/gioi-thieu",
    "/lien-he"
  ];
  const toolPaths = tools.map((tool) => `/cong-cu-ai/${tool.slug}`);
  const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`);
  const blogCategoryPaths = blogCategories.map((category) => `/blog/chuyen-muc/${slugify(category)}`);

  return [...staticPaths, ...toolPaths, ...blogPaths, ...blogCategoryPaths].map((path) => ({
    url: `${base}${path}`
  }));
}
