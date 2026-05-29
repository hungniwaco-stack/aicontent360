import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return [
    "",
    "/tao-content-bang-ai",
    "/tang-view-viral",
    "/kiem-tien-bang-ai",
    "/cong-cu-ai",
    "/case-study",
    "/mien-phi",
    "/xu-huong-ai",
    "/blog",
    "/gioi-thieu",
    "/lien-he"
  ].map((path) => ({ url: `${base}${path}` }));
}
