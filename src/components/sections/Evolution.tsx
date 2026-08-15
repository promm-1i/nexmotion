import Image from "next/image";

const STEPS = [
  {
    step: "STEP 1. MANUAL",
    desc: "작업자의 숙련도에 의존하는 수작업 중심 공정입니다. 속도와 품질이 일정하지 않을 수 있습니다.",
    active: false,
  },
  {
    step: "STEP 2. AUTOMATED",
    desc: "로봇과 제어 시스템을 통해 작업을 자동화합니다. 생산 속도가 향상되고 편차가 줄어듭니다.",
    active: false,
  },
  {
    step: "STEP 3. INTELLIGENT",
    desc: "AI Vision과 데이터를 연결해 스스로 예측하는 공정으로 진화합니다. 품질 안정성을 최고로 유지합니다.",
    active: true,
  },
];

export default function Evolution() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-base-alt border-t border-border relative">
      <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 relative z-10">
        <div>
          <div className="lg:sticky lg:top-40">
            <div className="flex items-center gap-3 text-accent font-mono text-xs tracking-widest mb-6 reveal font-semibold">
              <span className="decode-text" data-value="04. EVOLUTION">
                04. EVOLUTION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-tight text-primary tracking-tight reveal delay-100">
              생산라인은 자동화를 넘어
              <br />
              지능화로 진화합니다
            </h2>
            <p className="text-muted max-w-lg mb-12 font-normal border-l border-border pl-6 reveal delay-200">
              넥스모션은 단순 반복 작업을 줄이는 자동화를 넘어, 데이터를 기반으로
              판단하고 예측하는 지능형 생산 환경을 구축합니다.
            </p>

            <div className="space-y-4 reveal delay-300 relative">
              <div className="absolute left-0 top-10 bottom-10 w-[1px] bg-border" />

              {STEPS.map((s) => (
                <div
                  key={s.step}
                  className={`p-8 border bg-surface relative hover-target transition-all duration-300 group shadow-sm ${
                    s.active ? "border-accent/40 shadow-[0_4px_15px_rgba(230,30,42,0.08)]" : "border-border"
                  }`}
                >
                  <div
                    className={`absolute left-[-5px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] border z-10 ${
                      s.active
                        ? "bg-accent border-accent shadow-[0_0_8px_rgba(230,30,42,0.4)]"
                        : "bg-base border-border group-hover:border-accent group-hover:bg-accent transition-all"
                    }`}
                  />
                  <h4
                    className={`text-[10px] font-mono mb-3 tracking-widest font-bold ${
                      s.active ? "text-accent" : "text-muted group-hover:text-accent transition-colors"
                    }`}
                  >
                    {s.step}
                  </h4>
                  <p className={`text-sm ${s.active ? "text-primary font-medium" : "text-muted font-normal"}`}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative reveal delay-400">
          <div className="aspect-[3/4] bg-surface border border-border relative overflow-hidden group tech-bracket p-2 shadow-sm">
            <div className="bracket-bl" />
            <div className="bracket-br" />

            <div className="w-full h-full relative tech-img-container bg-base-alt">
              <div className="absolute inset-0 border border-accent/20 rounded-full animate-ping opacity-10 z-10" />
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent/20 z-10" />
              <div className="absolute left-1/2 top-0 w-[1px] h-full bg-accent/20 z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-accent z-10 flex items-center justify-center">
                <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
              </div>

              <Image
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200"
                alt="데이터 기반으로 진화하는 지능형 생산 시스템"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover mix-blend-multiply opacity-80"
              />
            </div>

            <div className="absolute top-6 left-6 font-mono text-[9px] text-accent z-20 bg-white/90 px-2 py-1 border border-accent/20 backdrop-blur-sm font-semibold">
              [ SYSTEM_EVOLUTION_MODE ]
              <br />
              ACTIVE_NODE: 0x42A...
            </div>
            <div className="absolute bottom-6 right-6 font-mono text-[9px] text-muted z-20 text-right font-semibold bg-white/80 px-2 py-1">
              SCANNING_PROTOCOL_INIT
              <br />
              DATA_FLOW: OPTIMAL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
