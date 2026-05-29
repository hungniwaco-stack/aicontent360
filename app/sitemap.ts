import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  return ["", "/tao-content-bang-ai", "/tang-view-viral", "/kiem-tien-bang-ai", "/cong-cu-ai", "/case-study", "/mien-phi", "/xu-huong-ai", "/blog", "/gioi-thieu", "/lien-he"].map((path) => ({ url: `${base}${path}` }));
}
