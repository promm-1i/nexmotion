"use client";

import { useEffect } from "react";

/**
 * Lightweight interaction layer: header shrink on scroll, a scroll-progress
 * bar, scroll-triggered reveal for .reveal/.draw-line elements, and the
 * subtle spotlight-card mouse-follow glow. No decorative HUD/particle FX.
 */
export default function SiteEffects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // Spotlight card mouse tracking
    const spotlightCards = document.querySelectorAll<HTMLElement>(".spotlight-card");
    const onCardMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };
    spotlightCards.forEach((card) => card.addEventListener("mousemove", onCardMove));
    cleanups.push(() => {
      spotlightCards.forEach((card) => card.removeEventListener("mousemove", onCardMove));
    });

    // Header shrink + scroll progress + hero parallax
    const header = document.getElementById("main-header");
    const scrollProgress = document.getElementById("scroll-progress");
    const heroBg = document.getElementById("hero-bg");

    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

      if (scrollProgress) scrollProgress.style.width = `${scrollPercent}%`;

      if (header) {
        if (scrollY > 50) {
          header.classList.add("bg-white/95", "py-4", "border-border", "shadow-sm");
          header.classList.remove("py-6", "border-transparent", "bg-white/80");
        } else {
          header.classList.remove("bg-white/95", "py-4", "border-border", "shadow-sm");
          header.classList.add("py-6", "border-transparent", "bg-white/80");
        }
      }

      if (heroBg && scrollY < window.innerHeight) {
        heroBg.style.transform = `scale(1.1) translateY(${scrollY * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", onScroll);
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // Scroll-triggered reveal / draw lines
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;

          if (el.classList.contains("reveal")) {
            el.classList.add("active");
          }

          if (el.classList.contains("draw-line")) {
            el.classList.add("active");
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.15 }
    );
    document.querySelectorAll(".reveal, .draw-line").forEach((el) => observer.observe(el));
    cleanups.push(() => observer.disconnect());

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
