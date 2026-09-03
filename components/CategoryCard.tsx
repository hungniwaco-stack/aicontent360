import Link from "next/link";

export function CategoryCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-ink/12 bg-white p-5 shadow-[0_2px_14px_-8px_rgba(33,28,21,0.16)] transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_8px_24px_-10px_rgba(33,28,21,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
    >
      <span className="text-base font-bold text-brand-900 group-hover:text-brand-700">{title}</span>
      <span className="mt-2 block text-sm leading-6 text-ink/70">{description}</span>
    </Link>
  );
}
