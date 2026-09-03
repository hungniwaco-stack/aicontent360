import Link from "next/link";

import { siteConfig } from "@/data/siteConfig";

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${siteConfig.url}${item.href}` : undefined
    }))
  };

  return (
    <>
      <nav className="text-sm text-ink/55">
        {items.map((item, i) => (
          <span key={item.label}>
            {item.href ? <Link href={item.href} className="hover:text-brand-700">{item.label}</Link> : item.label}
            {i < items.length - 1 ? " / " : ""}
          </span>
        ))}
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
