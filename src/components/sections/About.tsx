import Brackets from "@/components/Brackets";

const STATS = [
  { value: "128", suffix: "+", label: "구축 프로젝트", accent: false },
  { value: "42", suffix: "%", label: "평균 생산성 개선", accent: true },
  { value: null, suffix: null, static: "24/7", label: "무인 운영 대응", accent: false },
  { value: "15", suffix: "y+", label: "산업 자동화 경험", accent: false },
];

const PROCESSES = [
  {
    code: "PROC_01",
    icon: "ph-magnifying-glass",
    title: "공정 분석",
    desc: "현재 생산 흐름, 병목 구간, 반복 작업, 품질 리스크를 분석해 최적의 자동화 우선순위를 도출합니다.",
  },
  {
    code: "PROC_02",
    icon: "ph-blueprint",
    title: "시스템 설계",
    desc: "로봇, 컨베이어, 비전 카메라, 제어 시스템을 현장 조건에 맞춰 정밀하게 통합 설계합니다.",
  },
  {
    code: "PROC_03",
    icon: "ph-chart-line-up",
    title: "운영 최적화",
    desc: "실시간 데이터와 예지보전 로직을 기반으로 설비 가동률과 품질 안정성을 최고 수준으로 유지합니다.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 bg-base-alt relative overflow-hidden bg-tech-grid">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start mb-24 lg:mb-32">
          <div className="lg:w-1/2 reveal">
            <div className="flex items-center gap-3 text-accent font-mono text-xs tracking-widest mb-6 font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(230,30,42,0.3)]" />
              <span className="decode-text" data-value="01. ABOUT MISSION">
                01. ABOUT MISSION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.1] mb-8 text-primary tracking-tight">
              우리는 생산 현장의 반복과
              <br />
              불확실성을 자동화합니다
            </h2>
            <p className="text-lg sm:text-xl text-muted font-normal leading-relaxed max-w-xl mb-10 border-l border-border pl-6">
              넥스모션은 제조·물류 현장의 공정 분석부터 로봇 시스템 설계, AI 비전
              검사, 데이터 기반 운영 최적화까지 하나의 흐름으로 연결합니다.
            </p>
            <button className="tech-bracket bg-surface border border-border text-primary px-8 py-4 font-bold text-sm uppercase tracking-widest flex items-center gap-4 hover-target hover:border-accent transition-all group shadow-sm">
              <Brackets />
              회사 소개 보기{" "}
              <i className="ph ph-arrow-right text-accent group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-px bg-border border border-border reveal delay-200 w-full">
            {STATS.map((stat) => (
              <div className="bg-surface p-6 sm:p-10 flex flex-col gap-2 spotlight-card group" key={stat.label}>
                <div className="spotlight-content">
                  <span
                    className={`text-3xl sm:text-5xl font-black font-mono tracking-tighter transition-colors ${
                      stat.accent ? "text-accent drop-shadow-sm" : "text-primary group-hover:text-accent"
                    }`}
                  >
                    {stat.static ?? (
                      <>
                        <span className="counter" data-target={stat.value}>
                          0
                        </span>
                        {stat.suffix}
                      </>
                    )}
                  </span>
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest mt-2 block font-semibold">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {PROCESSES.map((p, i) => (
            <div
              className={`spotlight-card p-10 tech-bracket group reveal shadow-sm ${i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}`}
              key={p.code}
            >
              <Brackets />
              <div className="spotlight-content">
                <div className="absolute top-0 right-0 p-6 font-mono text-[10px] text-muted font-semibold group-hover:text-accent transition-colors">
                  {p.code}
                </div>
                <div className="w-14 h-14 border border-border flex items-center justify-center mb-8 group-hover:border-accent/30 group-hover:bg-accent/5 transition-all rounded-sm">
                  <i className={`ph ${p.icon} text-2xl text-primary group-hover:text-accent transition-colors`} />
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-primary group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
