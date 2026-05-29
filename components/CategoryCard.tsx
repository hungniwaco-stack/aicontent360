import Link from "next/link";

export function CategoryCard({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="rounded-2xl border border-slate-200 bg-white p-5 text-center font-semibold hover:border-brand-500">
      {title}
    </Link>
  );
}
