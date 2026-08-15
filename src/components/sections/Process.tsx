import Brackets from "@/components/Brackets";

const STEPS = [
  { no: "01", title: "현장 진단", desc: "생산라인, 작업 방식, 병목 구간을 분석해 자동화 가능성과 우선순위를 검토합니다." },
  { no: "02", title: "솔루션 설계", desc: "로봇, 비전, 제어 시스템을 조합하고 예상 개선 효과를 구체적으로 산출합니다." },
  { no: "03", title: "시스템 구축", desc: "장비 제작, 프로그램 개발, 현장 설치를 진행해 운영 가능한 환경을 만듭니다." },
  { no: "04", title: "안정화 및 최적화", desc: "시운전과 데이터 검증을 통해 안정성을 확보하고 지속적으로 개선합니다." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-10 bg-base border-t border-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16 lg:mb-24 reveal">
          <div className="text-accent font-mono text-[10px] tracking-[0.2em] mb-4 uppercase font-semibold decode-text" data-value="07. PROJECT WORKFLOW">
            07. PROJECT WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 tracking-tight">분석부터 구축까지 한 흐름으로 진행합니다</h2>
          <p className="text-muted max-w-2xl mx-auto font-normal">
            넥스모션은 진단부터 설계, 제작, 설치, 안정화까지 고객의 목표에 맞춰
            단계별로 실행합니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border relative reveal delay-200 shadow-sm">
          <div className="hidden md:block draw-line horizontal top-[40px] left-10 w-[calc(100%-80px)] h-[1px] z-0" />

          {STEPS.map((s) => (
            <div className="bg-surface p-10 relative overflow-hidden group hover-target hover:bg-surface-hover transition-colors z-10" key={s.no}>
              <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-base border border-accent group-hover:bg-accent shadow-sm transition-all z-20" />
              <span className="absolute top-[-10px] left-5 font-mono text-[100px] text-primary/[0.03] group-hover:text-accent/10 transition-colors font-bold z-0 pointer-events-none">
                {s.no}
              </span>
              <div className="relative z-10 mt-12">
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter text-primary group-hover:text-accent transition-colors">{s.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 lg:mt-20 text-center reveal delay-300">
          <button className="tech-bracket bg-surface border border-border text-primary px-10 py-4 font-bold text-sm uppercase tracking-widest hover-target hover:border-accent hover:text-accent transition-all inline-block shadow-sm">
            <Brackets />
            프로젝트 절차 문의
          </button>
        </div>
      </div>
    </section>
  );
}
