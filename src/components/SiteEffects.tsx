"use client";

import { useEffect } from "react";

/**
 * Ports the original vanilla-JS interaction layer (custom cursor, scroll
 * progress, header shrink, scroll-reveal, animated counters/progress bars,
 * decode-text scramble, hero particle canvas) onto the static markup.
 * Runs once after mount and wires everything up via DOM queries, mirroring
 * the source site's behavior 1:1.
 */
export default function SiteEffects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // Custom cursor
    const cursorRing = document.getElementById("cursor-ring");
    const cursorDot = document.getElementById("cursor-dot");
    if (cursorRing && cursorDot) {
      let mouseX = 0;
      let mouseY = 0;
      let ringX = 0;
      let ringY = 0;
      let raf = 0;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
      };
      document.addEventListener("mousemove", onMouseMove);

      const renderCursor = () => {
        ringX += (mouseX - ringX) * 0.2;
        ringY += (mouseY - ringY) * 0.2;
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
        raf = requestAnimationFrame(renderCursor);
      };
      raf = requestAnimationFrame(renderCursor);

      const onEnter = (e: Event) => {
        if ((e.target as HTMLElement).closest(".hover-target, a, button, input, textarea, select")) {
          document.body.classList.add("cursor-hover");
        }
      };
      const onLeave = (e: Event) => {
        if ((e.target as HTMLElement).closest(".hover-target, a, button, input, textarea, select")) {
          document.body.classList.remove("cursor-hover");
        }
      };
      document.addEventListener("mouseover", onEnter);
      document.addEventListener("mouseout", onLeave);
      document.body.classList.add("has-custom-cursor");

      cleanups.push(() => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseover", onEnter);
        document.removeEventListener("mouseout", onLeave);
        document.body.classList.remove("has-custom-cursor", "cursor-hover");
        cancelAnimationFrame(raf);
      });
    }

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

    // Scroll-triggered reveal / counters / progress bars / draw lines
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;

          if (el.classList.contains("reveal")) {
            el.classList.add("active");
          }

          if (el.classList.contains("counter") && !el.dataset.animated) {
            const target = parseInt(el.getAttribute("data-target") || "0", 10);
            let count = 0;
            const duration = 2000;
            const increment = target / (duration / 16);
            const updateCount = () => {
              count += increment;
              if (count < target) {
                el.innerText = Math.ceil(count).toString();
                requestAnimationFrame(updateCount);
              } else {
                el.innerText = target.toString();
                el.dataset.animated = "true";
              }
            };
            updateCount();
          }

          if (el.classList.contains("progress-fill")) {
            const width = el.getAttribute("data-width");
            if (width) el.style.width = width;
          }

          if (el.classList.contains("draw-line")) {
            el.classList.add("active");
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.15 }
    );
    document
      .querySelectorAll(".reveal, .counter, .progress-fill, .draw-line")
      .forEach((el) => observer.observe(el));
    cleanups.push(() => observer.disconnect());

    // Decode / scramble text on hover
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const decodeElements = document.querySelectorAll<HTMLElement>(".decode-text");
    const decodeIntervals = new Map<HTMLElement, ReturnType<typeof setInterval>>();
    const onDecodeEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const originalText = el.getAttribute("data-value") || "";
      let iterations = 0;
      const existing = decodeIntervals.get(el);
      if (existing) clearInterval(existing);
      const interval = setInterval(() => {
        el.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iterations) return originalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
        if (iterations >= originalText.length) {
          clearInterval(interval);
          decodeIntervals.delete(el);
        }
        iterations += 1 / 3;
      }, 30);
      decodeIntervals.set(el, interval);
    };
    decodeElements.forEach((el) => el.addEventListener("mouseenter", onDecodeEnter));
    cleanups.push(() => {
      decodeElements.forEach((el) => el.removeEventListener("mouseenter", onDecodeEnter));
      decodeIntervals.forEach((interval) => clearInterval(interval));
    });

    // Hero particle canvas
    const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        let particles: {
          x: number;
          y: number;
          vx: number;
          vy: number;
          radius: number;
        }[] = [];
        let particleRaf = 0;

        const initParticles = () => {
          particles = [];
          const particleCount = Math.floor(window.innerWidth / 25);
          for (let i = 0; i < particleCount; i++) {
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              vx: (Math.random() - 0.5) * 0.5,
              vy: (Math.random() - 0.5) * 0.5,
              radius: Math.random() * 1.5 + 0.5,
            });
          }
        };

        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          initParticles();
        };

        const animateParticles = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(230, 30, 42, 0.4)";
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
              const q = particles[j];
              const dx = p.x - q.x;
              const dy = p.y - q.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 150) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);
                ctx.strokeStyle = `rgba(230, 30, 42, ${0.1 - dist / 1500})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
          particleRaf = requestAnimationFrame(animateParticles);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        animateParticles();

        cleanups.push(() => {
          window.removeEventListener("resize", resizeCanvas);
          cancelAnimationFrame(particleRaf);
        });
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
