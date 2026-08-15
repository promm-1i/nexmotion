import Brackets from "@/components/Brackets";

const CAPABILITIES = [
  { title: "로봇 시스템 설계", desc: "공정 조건에 맞는 로봇 레이아웃과 사양을 설계합니다." },
  { title: "설비 제작·설치", desc: "제어반, 지그, 컨베이어 등 부속 설비를 제작하고 현장에 설치합니다." },
  { title: "비전검사 구성", desc: "카메라와 조명, 검사 소프트웨어를 공정에 맞게 구성합니다." },
  { title: "유지보수", desc: "설치 이후 점검과 트러블슈팅을 지원합니다." },
];

const PROCESSES = [
  {
    no: "01",
    icon: "ph-magnifying-glass",
    title: "공정 분석",
    desc: "생산 라인의 작업 순서와 병목 구간을 파악해 자동화가 필요한 공정을 정리합니다.",
  },
  {
    no: "02",
    icon: "ph-blueprint",
    title: "시스템 설계",
    desc: "로봇, 컨베이어, 비전 카메라, 제어반을 현장 조건에 맞춰 설계합니다.",
  },
  {
    no: "03",
    icon: "ph-wrench",
    title: "설치·안정화",
    desc: "설비를 설치하고 시운전을 거쳐 실제 생산 라인에 적용합니다.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 bg-base-alt relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start mb-24 lg:mb-32">
          <div className="lg:w-1/2 reveal">
            <div className="flex items-center gap-3 text-accent text-xs tracking-widest mb-6 font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>회사소개</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] mb-8 text-primary tracking-tight">
              제조공정에 필요한 로봇 자동화
              <br />
              시스템을 설계하고 구축합니다
            </h2>
            <p className="text-lg sm:text-xl text-muted font-normal leading-relaxed max-w-xl mb-10 border-l border-border pl-6">
              자동차, 반도체, 물류, 식품 등 산업현장에서 로봇 자동화 설비를 설계·제작·설치합니다.
              공정 분석부터 시스템 구축, 설치 이후 점검까지 담당합니다.
            </p>
            <button className="tech-bracket bg-surface border border-border text-primary px-8 py-4 font-bold text-sm uppercase tracking-widest flex items-center gap-4 hover-target hover:border-accent transition-all group shadow-sm">
              <Brackets />
              회사 소개 보기{" "}
              <i className="ph ph-arrow-right text-accent group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-px bg-border border border-border reveal delay-200 w-full">
            {CAPABILITIES.map((c) => (
              <div className="bg-surface p-6 sm:p-8 flex flex-col gap-2 spotlight-card group" key={c.title}>
                <div className="spotlight-content">
                  <span className="text-base sm:text-lg font-bold text-primary group-hover:text-accent transition-colors block mb-2">
                    {c.title}
                  </span>
                  <span className="text-muted text-xs sm:text-sm leading-relaxed block">{c.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {PROCESSES.map((p) => (
            <div className="spotlight-card p-10 tech-bracket group reveal shadow-sm" key={p.no}>
              <Brackets />
              <div className="spotlight-content">
                <div className="absolute top-0 right-0 p-6 font-mono text-xs text-muted font-semibold group-hover:text-accent transition-colors">
                  {p.no}
                </div>
                <div className="w-14 h-14 border border-border flex items-center justify-center mb-8 group-hover:border-accent/30 group-hover:bg-accent/5 transition-all rounded-sm">
                  <i className={`ph ${p.icon} text-2xl text-primary group-hover:text-accent transition-colors`} />
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight text-primary group-hover:text-accent transition-colors">
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
