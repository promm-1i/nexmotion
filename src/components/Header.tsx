"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "회사소개" },
  { href: "#solutions", label: "솔루션" },
  { href: "#products", label: "장비·기술" },
  { href: "#industries", label: "적용산업" },
  { href: "#case-studies", label: "구축사례" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-6 px-6 md:px-10 border-b border-transparent bg-white/80 backdrop-blur-md"
      id="main-header"
    >
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-12">
          <a
            href="#"
            className="text-2xl font-black tracking-tighter text-primary hover-target"
            id="logo"
          >
            NEX<span className="text-accent">MOTION</span>
          </a>
          <nav className="hidden xl:flex items-center gap-8 text-[11px] font-mono tracking-widest uppercase text-muted">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link hover:text-primary transition-colors hover-target"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center bg-primary text-white px-5 py-2.5 text-xs font-bold tracking-widest hover-target hover:bg-accent transition-colors"
          >
            견적 문의
          </a>
          <button
            className="text-primary text-2xl hover:text-accent transition-colors hover-target xl:hidden"
            id="menu-btn"
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <i className={menuOpen ? "ph ph-x" : "ph ph-list"} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="xl:hidden mt-6 flex flex-col gap-1 border-t border-border pt-6 max-w-[1800px] mx-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm font-mono tracking-widest uppercase text-muted hover:text-accent transition-colors border-b border-border last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-sm font-bold text-accent"
          >
            견적 문의
          </a>
        </nav>
      )}
    </header>
  );
}
