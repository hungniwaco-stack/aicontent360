import { BlogListPage } from "@/data/blogTemplates";
import { blogCategories } from "@/data/blogCategories";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container-shell py-12">
      <BlogListPage />
      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold">Chuyên mục</h2>
        <div className="flex flex-wrap gap-2">
          {blogCategories.map((category) => (
            <Link key={category} href={`/blog/chuyen-muc/${encodeURIComponent(category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "va"))}`} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 hover:bg-slate-200">
              {category}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
