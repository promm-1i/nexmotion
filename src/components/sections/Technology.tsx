import Brackets from "@/components/Brackets";

const TECHS = [
  {
    icon: "ph-cpu",
    title: "Digital Twin",
    desc: "가상 환경에 재현해 운영 상태를 파악합니다. 라인 변경과 병목 분석을 정확하게 검토합니다.",
  },
  {
    icon: "ph-scan",
    title: "Machine Vision",
    desc: "AI 분석으로 제품 결함, 위치를 실시간 검사합니다. 미세한 품질 편차까지 안정적으로 감지합니다.",
  },
  {
    icon: "ph-chart-bar",
    title: "Predictive Maintenance",
    desc: "이상 징후를 조기에 감지하고 고장을 예측합니다. 갑작스러운 라인 정지를 획기적으로 줄입니다.",
  },
  {
    icon: "ph-sliders-horizontal",
    title: "Robot Control",
    desc: "동작, 속도, 경로를 정밀하게 제어합니다. 복잡한 공정에서도 안정적인 반복성을 제공합니다.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 md:py-32 px-6 md:px-10 bg-base-alt border-t border-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 mb-24">
          <div className="lg:w-1/2 reveal">
            <div className="flex items-center gap-3 text-accent font-mono text-xs tracking-widest mb-6 font-semibold">
              <span className="decode-text" data-value="06. TECHNOLOGY">
                06. TECHNOLOGY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-8 leading-tight tracking-tight">
              정밀한 하드웨어와
              <br />
              지능형 소프트웨어의 결합
            </h2>
            <p className="text-muted font-normal max-w-lg mb-10 border-l border-border pl-6">
              넥스모션의 기술은 설비를 움직이는 것에서 끝나지 않습니다. 데이터를
              읽고, 고장을 예측하며, 운영 판단을 돕는 지능형 구조를 만듭니다.
            </p>
            <button className="tech-bracket bg-surface border border-border text-primary px-8 py-4 font-bold text-sm uppercase tracking-widest flex items-center gap-4 hover-target hover:border-accent hover:text-accent transition-all group shadow-sm">
              <Brackets />
              기술 역량 보기
            </button>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-px bg-border border border-border reveal delay-200 shadow-sm">
            {TECHS.map((t) => (
              <div className="tech-bracket bg-surface p-6 sm:p-10 hover:bg-surface-hover transition-all duration-300 group hover-target" key={t.title}>
                <Brackets />
                <i className={`ph ${t.icon} text-2xl text-accent mb-4 block`} />
                <h4 className="text-lg font-bold mb-4 text-primary">{t.title}</h4>
                <p className="text-muted text-[13px] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
