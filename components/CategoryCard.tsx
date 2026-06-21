import Link from "next/link";

export function CategoryCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
    >
      <span className="text-sm font-semibold text-brand-900 group-hover:text-brand-700">{title}</span>
      <span className="mt-2 block text-sm leading-6 text-slate-600">{description}</span>
    </Link>
  );
}
