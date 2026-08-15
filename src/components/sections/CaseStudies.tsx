const CASES = [
  {
    category: "자동차 부품",
    title: "자동차 부품 조립 자동화",
    desc: "산업용 로봇과 컨베이어를 연계하여 반복 조립공정을 자동화하는 구성입니다.",
    items: ["6축 로봇 + 지그", "컨베이어 연동 이송", "조립 완료 여부 확인"],
  },
  {
    category: "품질검사",
    title: "비전검사 시스템",
    desc: "카메라와 비전 소프트웨어를 이용하여 제품의 외관 및 조립 상태를 검사합니다.",
    items: ["다각도 카메라 배치", "외관 결함 판정", "검사 결과 데이터 기록"],
  },
  {
    category: "물류·출하",
    title: "팔레타이징 자동화",
    desc: "생산 완료 제품의 적재 작업을 로봇으로 자동화합니다.",
    items: ["팔레타이징 로봇", "적재 패턴 설정", "출하 라인 연동"],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32 px-6 md:px-10 bg-base border-t border-border relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 text-accent text-xs tracking-widest mb-6 font-semibold">
            <span>구축 사례</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-4">공정별 적용 예시</h2>
          <p className="text-muted max-w-xl font-normal">
            실제 구성 가능한 자동화 설비의 예시입니다. 현장 조건에 맞춰 구성이
            달라질 수 있습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {CASES.map((c, i) => (
            <div
              className={`bg-surface p-10 border border-border hover:border-accent/40 transition-all duration-500 spotlight-card group hover-target reveal shadow-sm hover:shadow-md ${
                i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""
              }`}
              key={c.title}
            >
              <div className="spotlight-content">
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-muted border border-border px-3 py-1 mb-6">
                  {c.category}
                </span>
                <h4 className="text-xl font-bold mb-4 leading-tight text-primary">{c.title}</h4>
                <p className="text-muted text-sm mb-8 leading-relaxed">{c.desc}</p>

                <ul className="space-y-3 border-t border-border pt-6">
                  {c.items.map((item) => (
                    <li className="flex items-center gap-2 text-sm text-muted" key={item}>
                      <i className="ph ph-check text-accent text-base" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
