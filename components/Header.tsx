import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-3">
        <Link href="/" className="text-lg font-bold text-brand-700">
          AI Content Hub
        </Link>
        <nav className="hidden gap-4 text-sm lg:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-700 hover:text-brand-700">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

