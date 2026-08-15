import Image from "next/image";
import Brackets from "@/components/Brackets";

const SECTORS = [
  { code: "CORE SECTOR 01", label: "로봇 자동화" },
  { code: "CORE SECTOR 02", label: "AI 비전 검사" },
  { code: "CORE SECTOR 03", label: "스마트팩토리 통합" },
  { code: "CORE SECTOR 04", label: "물류 자동화" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base pt-32 pb-40 lg:pt-20 lg:pb-0"
      id="hero"
    >
      <canvas id="hero-canvas" className="absolute inset-0 z-0 opacity-80" />

      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,30,42,0.03)_0%,transparent_70%)] z-10 pointer-events-none" />
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
          alt="산업용 로봇이 작업 중인 스마트 공장 전경"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-15 scale-110 origin-center grayscale"
          id="hero-bg"
        />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-10 w-full flex flex-col items-start mt-8 lg:mt-20">
        <div className="flex items-center gap-4 text-accent font-mono text-[10px] tracking-[0.2em] mb-6 reveal">
          <div className="w-12 h-[1px] bg-accent shadow-[0_0_8px_rgba(230,30,42,0.3)]" />
          <span className="decode-text font-semibold" data-value="EST. 2009 / INDUSTRIAL INTELLIGENCE">
            EST. 2009 / INDUSTRIAL INTELLIGENCE
          </span>
        </div>

        <div className="glitch-wrapper mb-8 reveal delay-100">
          <h1
            className="text-[12vw] sm:text-[10vw] lg:text-[7rem] font-black leading-[0.9] tracking-tighter text-primary glitch-text uppercase"
            data-text="AUTOMATION BEYOND LIMITS"
          >
            AUTOMATION
            <br />
            BEYOND LIMITS
          </h1>
        </div>

        <p className="text-muted text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed mb-12 reveal delay-200 border-l-2 border-accent pl-6">
          생산 현장을 더 빠르게, 더 정밀하게, 더 지능적으로 전환합니다.
          <br className="hidden sm:block" />
          넥스모션은 로봇 자동화, AI Vision, 스마트팩토리 시스템을 통합해
          <br className="hidden sm:block" />
          제조와 물류의 다음 기준을 만듭니다.
        </p>

        <div className="flex flex-wrap gap-4 sm:gap-6 reveal delay-300">
          <button className="tech-bracket bg-accent text-white px-6 sm:px-8 py-4 font-bold text-sm uppercase tracking-widest flex items-center gap-4 hover-target hover:bg-primary transition-colors shadow-accent-glow">
            <Brackets />
            솔루션 보기 <i className="ph ph-arrow-right" />
          </button>
          <button className="tech-bracket bg-surface border border-border text-primary px-6 sm:px-8 py-4 font-bold text-sm uppercase tracking-widest hover-target hover:border-accent hover:text-accent transition-all shadow-sm">
            <Brackets />
            프로젝트 문의
          </button>
        </div>
      </div>

      <div className="absolute bottom-16 left-0 w-full z-20 px-6 md:px-10 hidden md:block">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-border reveal delay-400">
          {SECTORS.map((s) => (
            <div className="flex flex-col gap-2 group hover-target" key={s.code}>
              <span className="font-mono text-[9px] text-accent tracking-[0.2em] font-semibold">
                {s.code}
              </span>
              <span className="text-muted font-bold text-xs tracking-widest uppercase group-hover:text-primary transition-all">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block z-20">
        <div className="rotate-90 origin-right text-muted/60 font-mono text-[9px] tracking-[0.5em] whitespace-nowrap uppercase font-semibold">
          COORDINATES: 37.5665&deg; N, 126.9780&deg; E // NEXMOTION_SYSTEM_V4.2
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted font-mono text-[9px] tracking-widest uppercase z-20 font-semibold">
        <span>Explore Technology</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-slide-down" />
        </div>
      </div>
    </section>
  );
}
