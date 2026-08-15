import Brackets from "@/components/Brackets";

const STEPS = [
  { no: "01", title: "현장 진단", desc: "생산라인과 작업 방식을 확인해 자동화가 필요한 공정을 파악합니다." },
  { no: "02", title: "설계·견적", desc: "로봇, 비전, 제어 시스템을 조합해 구성안과 견적을 산출합니다." },
  { no: "03", title: "제작·설치", desc: "장비를 제작하고 프로그램을 개발해 현장에 설치합니다." },
  { no: "04", title: "시운전·인수", desc: "시운전을 통해 동작을 검증하고 운영 방법을 안내합니다." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-10 bg-base border-t border-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16 lg:mb-24 reveal">
          <div className="text-accent text-xs tracking-widest mb-4 font-semibold">구축 프로세스</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 tracking-tight">진단부터 설치까지 4단계로 진행합니다</h2>
          <p className="text-muted max-w-2xl mx-auto font-normal">
            현장 진단, 설계, 제작·설치, 시운전 순서로 진행하며 각 단계마다
            고객사와 내용을 확인합니다.
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
                <h4 className="text-xl font-bold mb-4 tracking-tight text-primary group-hover:text-accent transition-colors">{s.title}</h4>
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
