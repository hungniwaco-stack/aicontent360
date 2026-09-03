import { MetadataRoute } from "next";
import { blogCategories } from "@/data/blogCategories";
import { blogPosts } from "@/data/blogPosts";
import { siteConfig } from "@/data/siteConfig";
import { tools } from "@/data/tools";

export const dynamic = "force-static";

const slugify = (value: string) => value.toLowerCase().replaceAll("&", "va").replaceAll(" ", "-");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const buildDate = new Date();
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
  const staticEntries = staticPaths.map((path) => ({ url: `${base}${path}`, lastModified: buildDate }));
  const toolEntries = tools.map((tool) => ({ url: `${base}/cong-cu-ai/${tool.slug}`, lastModified: buildDate }));
  const blogEntries = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));
  const blogCategoryEntries = blogCategories.map((category) => ({
    url: `${base}/blog/chuyen-muc/${slugify(category)}`,
    lastModified: buildDate
  }));

  return [...staticEntries, ...toolEntries, ...blogEntries, ...blogCategoryEntries];
}
