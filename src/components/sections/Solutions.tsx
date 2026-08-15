const SOLUTIONS = [
  {
    icon: "ph-robot",
    title: "로봇 자동화",
    desc: "산업용 로봇을 활용하여 조립, 이송, 적재, 용접 등 반복 공정을 자동화합니다.",
  },
  {
    icon: "ph-eye",
    title: "비전검사",
    desc: "카메라와 비전 시스템을 이용하여 제품의 외관, 위치 및 조립 상태를 검사합니다.",
  },
  {
    icon: "ph-truck",
    title: "물류 자동화",
    desc: "컨베이어와 로봇을 연계하여 공정 간 제품 이송 및 적재 작업을 자동화합니다.",
  },
  {
    icon: "ph-sliders-horizontal",
    title: "제어시스템",
    desc: "PLC와 각종 센서를 기반으로 생산설비의 동작 및 공정을 제어합니다.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32 px-6 md:px-10 bg-base relative border-t border-border">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-20 gap-10 reveal">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-3 text-accent text-xs tracking-widest mb-6 font-semibold">
              <span className="w-12 h-[1px] bg-accent" />
              <span>주요 솔루션</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-primary tracking-tight">
              산업용 로봇, 비전검사, 물류 및 제어시스템을
              <br />
              공정 조건에 맞춰 구성합니다
            </h2>
            <p className="text-muted text-base sm:text-lg font-normal max-w-2xl border-l border-border pl-6">
              고객사의 생산 공정과 설비 조건을 확인한 뒤, 필요한 자동화 요소를 조합해
              시스템을 구성합니다.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border overflow-hidden reveal delay-200">
          {SOLUTIONS.map((s, i) => (
            <div
              className={`bg-surface p-10 spotlight-card group min-h-[320px] sm:min-h-[360px] flex flex-col hover-target ${
                i === 1 ? "delay-100" : i === 2 ? "delay-200" : i === 3 ? "delay-300" : ""
              }`}
              key={s.title}
            >
              <div className="spotlight-content h-full flex flex-col">
                <div className="mb-auto">
                  <i className={`ph ${s.icon} text-4xl text-primary/20 group-hover:text-accent mb-8 block transition-all duration-500`} />
                  <h3 className="text-xl font-black mb-6 tracking-tight text-primary">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">{s.desc}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold tracking-widest uppercase text-muted group-hover:text-accent transition-colors mt-auto">
                  자세히 보기 <i className="ph ph-caret-right group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
