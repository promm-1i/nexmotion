"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#technology", label: "Technology" },
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

        <div className="flex items-center gap-4 md:gap-10">
          <div className="hidden md:flex font-mono text-[10px] tracking-widest text-muted uppercase items-center gap-3 bg-surface px-4 py-2 border border-border rounded-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            SYSTEM_STATUS: OPERATIONAL // 2026_EDITION
          </div>
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
        </nav>
      )}
    </header>
  );
}
