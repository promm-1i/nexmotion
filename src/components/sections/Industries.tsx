import Brackets from "@/components/Brackets";

const INDUSTRIES = [
  { no: "01", title: "자동차", desc: "부품 조립, 검사, 이송 공정에 로봇과 컨베이어를 적용합니다." },
  { no: "02", title: "반도체", desc: "클린룸 환경에서 웨이퍼·부품 이송과 정밀 검사 설비를 구성합니다." },
  { no: "03", title: "물류", desc: "분류, 피킹, 출고 공정에 컨베이어와 로봇 피킹 시스템을 적용합니다." },
  { no: "04", title: "식품", desc: "위생 기준에 맞춘 포장 라인과 비전검사 설비를 구성합니다." },
  { no: "05", title: "배터리", desc: "셀·모듈 조립 공정에 이송 로봇과 검사 설비를 적용합니다." },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 px-6 md:px-10 bg-base border-t border-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16 lg:mb-20 reveal">
          <div className="flex items-center gap-3 text-accent text-xs tracking-widest mb-6 font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>적용 산업</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 tracking-tight">
            산업별 공정 조건에 맞춰 설비를 구성합니다
          </h2>
          <p className="text-muted max-w-xl font-normal border-l border-border pl-6">
            생산품과 공정 특성에 따라 필요한 자동화 요소가 다릅니다. 업종별 공정
            조건을 확인하고 설비를 구성합니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border reveal delay-200 shadow-sm">
          {INDUSTRIES.map((ind) => (
            <div
              className="bg-surface p-10 hover:bg-surface-hover transition-colors group hover-target relative overflow-hidden spotlight-card"
              key={ind.no}
            >
              <div className="spotlight-content">
                <div className="text-border font-mono text-5xl mb-12 group-hover:text-accent/20 transition-colors select-none font-bold">
                  {ind.no}
                </div>
                <h4 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">{ind.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 reveal delay-300">
          <button className="tech-bracket bg-accent text-white px-8 py-4 font-bold text-sm uppercase tracking-widest flex items-center gap-4 hover-target hover:bg-primary transition-colors shadow-accent-glow">
            <Brackets />
            산업별 적용 사례 보기 <i className="ph ph-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
