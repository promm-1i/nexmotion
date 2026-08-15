import Image from "next/image";
import Brackets from "@/components/Brackets";

const PRODUCTS = [
  {
    code: "EQ_01",
    img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
    alt: "고속 반복 작업을 수행하는 산업용 로봇 팔",
    title: "산업용 로봇",
    desc: "고속 반복 작업과 중량물 이송에 적합한 로봇입니다. 조립, 용접, 이송 공정에서 높은 정밀도를 제공합니다.",
    tags: ["High Speed Repeatability", "Heavy Payload Support"],
  },
  {
    code: "EQ_02",
    img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800",
    alt: "작업자와 함께 협업하는 협동로봇",
    title: "협동로봇",
    desc: "작업자와 같은 공간에서 유연하게 운용 가능합니다. 소량 다품종 생산, 검사 보조에 적합합니다.",
    tags: ["Safe Interaction", "Flexible Deployment"],
  },
  {
    code: "EQ_03",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    alt: "제품 결함을 검사하는 정밀 비전 카메라",
    title: "비전 카메라",
    desc: "AI 검사와 위치 인식을 위한 고정밀 시스템입니다. 제품 결함과 코드 정보를 빠르게 판독합니다.",
    tags: ["4K Precision Sensor", "Real-time AI Proc"],
  },
  {
    code: "EQ_04",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    alt: "설비를 제어하는 PLC 및 HMI 자동화 제어반",
    title: "자동화 제어 시스템",
    desc: "장비 데이터를 안정적으로 제어합니다. PLC, HMI, 모션 제어 환경을 현장에 맞게 구성합니다.",
    tags: ["Scalable Logic", "Low-Latency Ops"],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 px-6 md:px-10 bg-base-alt border-t border-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 reveal">
          <div className="text-accent font-mono text-[10px] font-semibold tracking-[0.2em] mb-4 uppercase decode-text" data-value="Key Equipment & Control">
            Key Equipment &amp; Control
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 tracking-tight">
            공정을 바꾸는 핵심 장비와 제어 기술
          </h2>
          <p className="text-muted font-normal">
            넥스모션은 현장 조건에 맞는 자동화 장비와 제어 시스템을 조합해
            안정적으로 운영 가능한 생산 환경을 만듭니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p, i) => (
            <div
              className={`bg-surface border border-border p-2 group hover:border-accent/40 transition-colors duration-500 reveal hover-target shadow-sm hover:shadow-md ${
                i === 1 ? "delay-100" : i === 2 ? "delay-200" : i === 3 ? "delay-300" : ""
              }`}
              key={p.code}
            >
              <div className="relative bg-base-alt aspect-square mb-6 overflow-hidden tech-img-container border border-border group-hover:border-accent/20">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover mix-blend-multiply"
                />
                <div className="absolute top-2 right-2 text-[9px] font-mono font-semibold text-accent bg-white/90 px-2 py-1 border border-accent/20 z-10">
                  {p.code}
                </div>
              </div>
              <div className="px-4 pb-6">
                <h4 className="text-lg font-bold mb-3 text-primary group-hover:text-accent transition-colors">{p.title}</h4>
                <p className="text-muted text-[13px] leading-relaxed mb-6">{p.desc}</p>
                <ul className="text-[10px] font-mono text-muted uppercase space-y-2 border-t border-border pt-4 font-medium">
                  {p.tags.map((tag) => (
                    <li className="flex items-center gap-2" key={tag}>
                      <span className="w-1 h-1 bg-accent rounded-full" /> {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <button className="tech-bracket bg-surface border border-border text-primary px-10 py-4 font-bold text-sm uppercase tracking-widest hover-target hover:border-accent hover:text-accent transition-all inline-block shadow-sm">
            <Brackets />
            제품 라인업 보기
          </button>
        </div>
      </div>
    </section>
  );
}
