import Image from "next/image";
import Brackets from "@/components/Brackets";

const PRODUCTS = [
  {
    img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
    alt: "고속 반복 작업을 수행하는 산업용 로봇 팔",
    title: "산업용 로봇",
    desc: "조립, 용접, 이송 공정에 사용하는 다관절 로봇입니다. 반복 작업을 정해진 경로와 속도로 수행합니다.",
    tags: ["반복 정밀도", "중량물 이송"],
  },
  {
    img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800",
    alt: "작업자와 함께 협업하는 협동로봇",
    title: "협동로봇",
    desc: "작업자와 같은 공간에서 사용하는 로봇입니다. 소량 다품종 생산이나 검사 보조 작업에 적용합니다.",
    tags: ["작업자 협업", "설치 변경 용이"],
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    alt: "제품 결함을 검사하는 비전 카메라",
    title: "비전 카메라",
    desc: "제품의 외관, 치수, 위치를 촬영하고 검사 소프트웨어로 판정합니다. 결함 검출과 위치 인식에 사용합니다.",
    tags: ["외관 검사", "위치 인식"],
  },
  {
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    alt: "설비를 제어하는 PLC 및 HMI 제어반",
    title: "제어반 (PLC·HMI)",
    desc: "PLC와 HMI로 설비 동작 순서를 제어하고 상태를 표시합니다. 현장 조건에 맞춰 로직을 구성합니다.",
    tags: ["PLC 프로그래밍", "HMI 구성"],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 px-6 md:px-10 bg-base-alt border-t border-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mb-16 lg:mb-20 reveal">
          <div className="flex items-center gap-3 text-accent text-xs tracking-widest mb-6 font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>주요 장비 및 기술</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 tracking-tight">
            산업용 로봇부터 제어반까지 공정에 필요한 장비를 구성합니다
          </h2>
          <p className="text-muted font-normal">
            공정 조건에 맞는 로봇, 비전 장비, 제어 시스템을 선정하고 통합합니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p, i) => (
            <div
              className={`bg-surface border border-border p-2 group hover:border-accent/40 transition-colors duration-500 reveal hover-target shadow-sm hover:shadow-md ${
                i === 1 ? "delay-100" : i === 2 ? "delay-200" : i === 3 ? "delay-300" : ""
              }`}
              key={p.title}
            >
              <div className="relative bg-base-alt aspect-square mb-6 overflow-hidden tech-img-container border border-border group-hover:border-accent/20">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover mix-blend-multiply"
                />
              </div>
              <div className="px-4 pb-6">
                <h4 className="text-lg font-bold mb-3 text-primary group-hover:text-accent transition-colors">{p.title}</h4>
                <p className="text-muted text-[13px] leading-relaxed mb-6">{p.desc}</p>
                <ul className="text-[11px] text-muted space-y-2 border-t border-border pt-4 font-medium">
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
