import Image from "next/image";
import Brackets from "@/components/Brackets";

const SECTORS = [
  { no: "01", label: "로봇 자동화" },
  { no: "02", label: "비전검사" },
  { no: "03", label: "물류 자동화" },
  { no: "04", label: "제어시스템" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base pt-32 pb-40 lg:pt-20 lg:pb-0"
      id="hero"
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95 z-10" />
        <div className="absolute inset-0 bg-tech-grid opacity-40 z-10 pointer-events-none" />
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
          alt="산업용 로봇이 작업 중인 공장 전경"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-15 scale-110 origin-center grayscale"
          id="hero-bg"
        />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-10 w-full flex flex-col items-start mt-8 lg:mt-20">
        <div className="flex items-center gap-4 text-accent font-mono text-[10px] tracking-[0.2em] mb-6 reveal">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="font-semibold">INDUSTRIAL ROBOT SYSTEM INTEGRATION</span>
        </div>

        <div className="mb-8 reveal delay-100">
          <h1 className="text-[10vw] sm:text-[8vw] lg:text-6xl font-black leading-[1.05] tracking-tight text-primary">
            산업현장에 필요한
            <br />
            자동화 시스템을 구축합니다
          </h1>
        </div>

        <p className="text-muted text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed mb-12 reveal delay-200 border-l-2 border-accent pl-6">
          산업용 로봇, 비전검사, 물류 및 제어시스템을 공정 환경에 맞춰
          <br className="hidden sm:block" />
          설계하고 구축합니다. 현장 조건을 분석해 실제 운영 가능한
          <br className="hidden sm:block" />
          자동화 설비를 제안합니다.
        </p>

        <div className="flex flex-wrap gap-4 sm:gap-6 reveal delay-300">
          <button className="tech-bracket bg-accent text-white px-6 sm:px-8 py-4 font-bold text-sm uppercase tracking-widest flex items-center gap-4 hover-target hover:bg-primary transition-colors shadow-accent-glow">
            <Brackets />
            솔루션 보기 <i className="ph ph-arrow-right" />
          </button>
          <a
            href="#contact"
            className="tech-bracket bg-surface border border-border text-primary px-6 sm:px-8 py-4 font-bold text-sm uppercase tracking-widest hover-target hover:border-accent hover:text-accent transition-all shadow-sm inline-flex items-center"
          >
            <Brackets />
            프로젝트 문의
          </a>
        </div>
      </div>

      <div className="absolute bottom-16 left-0 w-full z-20 px-6 md:px-10 hidden md:block">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-border reveal delay-400">
          {SECTORS.map((s) => (
            <div className="flex items-center gap-3 group hover-target" key={s.no}>
              <span className="font-mono text-xs text-accent font-semibold">{s.no}</span>
              <span className="text-muted font-bold text-xs tracking-widest uppercase group-hover:text-primary transition-all">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted font-mono text-[9px] tracking-widest uppercase z-20 font-semibold">
        <span>Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-slide-down" />
        </div>
      </div>
    </section>
  );
}
