const CASES = [
  {
    id: "CASE_ID: AUTO_01",
    title: (
      <>
        자동차 부품 조립라인
        <br />
        자동화
      </>
    ),
    desc: "로봇 조립과 비전 검사를 결합해 반복 조립 공정의 속도와 품질 안정성을 개선했습니다.",
    metrics: [
      { label: "생산성", value: "+32%", width: "32%", accent: true },
      { label: "불량률", value: "-41%", width: "41%", accent: false },
      { label: "작업 시간", value: "-28%", width: "28%", accent: false },
    ],
  },
  {
    id: "CASE_ID: LOG_02",
    title: (
      <>
        물류센터 팔레타이징
        <br />
        자동화
      </>
    ),
    desc: "출고 전 적재 공정에 로봇 팔레타이징 시스템을 적용해 작업 부하와 처리 지연을 줄였습니다.",
    metrics: [
      { label: "처리량", value: "+38%", width: "38%", accent: true },
      { label: "작업 부하", value: "-52%", width: "52%", accent: false },
      { label: "적재 오류", value: "-35%", width: "35%", accent: false },
    ],
  },
  {
    id: "CASE_ID: FOOD_03",
    title: (
      <>
        식품 포장 비전 검사
        <br />
        자동화
      </>
    ),
    desc: "포장 상태와 라벨 정보를 AI Vision으로 검사해 품질 검수 속도와 정확도를 높였습니다.",
    metrics: [
      { label: "검사 속도", value: "+45%", width: "45%", accent: true },
      { label: "검수 누락", value: "-63%", width: "63%", accent: false },
      { label: "재작업 비용", value: "-24%", width: "24%", accent: false },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32 px-6 md:px-10 bg-base border-t border-border relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-16 gap-6 reveal">
          <div>
            <div className="flex items-center gap-3 text-accent font-mono text-xs tracking-widest mb-6 font-semibold">
              <span className="decode-text" data-value="05. SUCCESS CASES">
                05. SUCCESS CASES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">숫자로 증명되는 자동화 성과</h2>
          </div>
          <button className="text-primary font-bold text-[11px] uppercase tracking-widest hover-target hover:text-accent transition-colors flex items-center gap-2">
            구축사례 보기 <i className="ph ph-arrow-right text-accent" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {CASES.map((c, i) => (
            <div
              className={`bg-surface p-10 border border-border hover:border-accent/40 transition-all duration-500 spotlight-card group hover-target reveal shadow-sm hover:shadow-md ${
                i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""
              }`}
              key={c.id}
            >
              <div className="spotlight-content">
                <div className="font-mono text-[10px] text-muted mb-6 group-hover:text-accent transition-colors font-semibold">
                  {c.id}
                </div>
                <h4 className="text-xl font-bold mb-4 leading-tight text-primary">{c.title}</h4>
                <p className="text-muted text-sm mb-10 leading-relaxed min-h-[60px]">{c.desc}</p>

                <div className="space-y-6">
                  {c.metrics.map((m, mi) => (
                    <div className="border-t border-border pt-4" key={m.label}>
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-[10px] font-mono text-muted uppercase tracking-widest font-semibold">{m.label}</span>
                        <span
                          className={`text-lg font-black transition-colors ${
                            m.accent ? "text-primary group-hover:text-accent" : "text-primary"
                          }`}
                        >
                          {m.value}
                        </span>
                      </div>
                      <div className="w-full bg-[#F3F4F6] h-1 overflow-hidden rounded-full">
                        <div
                          className={`progress-fill h-full w-0 transition-all duration-1000 ease-out ${
                            m.accent ? "bg-accent" : "bg-gray-300 group-hover:bg-primary"
                          } ${mi === 1 ? "delay-100" : mi === 2 ? "delay-200" : ""}`}
                          data-width={m.width}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
