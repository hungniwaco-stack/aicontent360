"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";

const primaryNav = [
  { href: "/", label: "Trang chủ" },
  { href: "/cong-cu-ai", label: "Công cụ AI" },
  { href: "/tang-view-viral", label: "Tăng viral" },
  { href: "/kiem-tien-bang-ai", label: "Kiếm tiền AI" },
  { href: "/lien-he", label: "Liên hệ" }
];

const secondaryNav = [
  { href: "/case-study", label: "Case study" },
  { href: "/mien-phi", label: "Tài nguyên miễn phí" },
  { href: "/xu-huong-ai", label: "Xu hướng AI" },
  { href: "/gioi-thieu", label: "Giới thiệu" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Đóng menu mỗi khi đổi trang
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Đóng khi bấm ra ngoài hoặc nhấn Escape
  useEffect(() => {
    if (!open) return;
    function onPointer(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/12/80 bg-white/90 backdrop-blur">
      <div className="container-shell py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0 text-lg font-bold text-brand-700">
            {siteConfig.name}
          </Link>
          <nav className="hidden items-center gap-1 text-sm lg:flex" aria-label="Điều hướng chính">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-2.5 py-2 font-medium text-ink/80 transition hover:bg-ink/[0.05] hover:text-brand-700 xl:px-3">
                {item.label}
              </Link>
            ))}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={open}
                className="cursor-pointer rounded-lg px-2.5 py-2 font-medium text-ink/80 transition hover:bg-ink/[0.05] hover:text-brand-700 xl:px-3"
              >
                Thêm
              </button>
              {open ? (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-lg border border-ink/12 bg-white p-2 shadow-lg" role="menu">
                  {secondaryNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-paper hover:text-brand-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </nav>
        </div>
        <nav className="-mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1 text-sm lg:hidden" aria-label="Điều hướng nhanh">
          {[...primaryNav, ...secondaryNav].map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 rounded-full border border-ink/12 bg-white px-3 py-1.5 font-medium text-ink/80">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
