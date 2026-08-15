import Brackets from "@/components/Brackets";

const SOLUTIONS = [
  {
    icon: "ph-robot",
    title: "Robot Automation",
    desc: "반복 작업과 고위험 작업을 로봇으로 전환해 작업 속도와 안정성을 높입니다. 팔레타이징, 픽앤플레이스, 조립, 이송 공정에 최적화된 시스템을 설계합니다.",
  },
  {
    icon: "ph-eye",
    title: "AI Vision",
    desc: "사람의 눈으로 확인하던 검사 공정을 AI 기반 비전 시스템으로 자동화합니다. 결함 검출, 치수 측정, 위치 인식까지 정밀하게 대응합니다.",
  },
  {
    icon: "ph-factory",
    title: "Smart Factory",
    desc: "설비와 데이터를 연결해 생산 현황을 실시간으로 파악합니다. MES, 설비 모니터링, 디지털 트윈 관제 환경을 통합합니다.",
  },
  {
    icon: "ph-truck",
    title: "Logistics",
    desc: "입고, 분류, 이송, 출고 과정을 자동화해 물류 효율을 높입니다. AMR, 자동 분류기, 로봇 피킹 시스템을 구성합니다.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32 px-6 md:px-10 bg-base relative border-t border-border">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-20 gap-10 reveal">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-3 text-accent font-mono text-xs tracking-widest mb-6 font-semibold">
              <span className="w-12 h-[1px] bg-accent shadow-[0_0_8px_rgba(230,30,42,0.3)]" />
              <span className="decode-text" data-value="02. CORE SOLUTIONS">
                02. CORE SOLUTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-primary tracking-tight">
              현장에 맞는 자동화 솔루션을
              <br />
              하나의 시스템으로 연결합니다
            </h2>
            <p className="text-muted text-base sm:text-lg font-normal max-w-2xl border-l border-border pl-6">
              넥스모션의 솔루션은 개별 장비 도입에 그치지 않습니다. 로봇, 센서,
              비전, 제어, 데이터 시스템을 통합해 실제 생산성과 품질 개선으로
              이어지는 자동화 환경을 구축합니다.
            </p>
          </div>
          <button className="tech-bracket bg-transparent border border-border text-primary px-8 py-4 font-bold text-sm uppercase tracking-widest hover-target hover:border-accent hover:text-accent transition-all group">
            <Brackets />
            전체 솔루션 보기
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border overflow-hidden reveal delay-200">
          {SOLUTIONS.map((s, i) => (
            <div
              className={`bg-surface p-10 spotlight-card group min-h-[360px] sm:min-h-[400px] flex flex-col hover-target ${
                i === 1 ? "delay-100" : i === 2 ? "delay-200" : i === 3 ? "delay-300" : ""
              }`}
              key={s.title}
            >
              <div className="spotlight-content h-full flex flex-col">
                <div className="mb-auto">
                  <i className={`ph ${s.icon} text-4xl text-primary/20 group-hover:text-accent mb-8 block transition-all duration-500`} />
                  <h3 className="text-xl font-black mb-6 tracking-tighter uppercase text-primary">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">{s.desc}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold tracking-widest uppercase text-muted group-hover:text-accent transition-colors mt-auto">
                  Learn More <i className="ph ph-caret-right group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
