const FOOTER_LINKS = [
  {
    title: "Company",
    links: ["회사소개", "솔루션", "기술역량"],
  },
  {
    title: "Resources",
    links: ["제품", "구축사례", "기술문의"],
  },
  {
    title: "Legal",
    links: ["개인정보처리방침", "이용약관", "공고"],
  },
  {
    title: "Social",
    links: ["LinkedIn", "Youtube"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-base text-muted py-16 md:py-20 px-6 md:px-10 border-t border-border font-mono text-[11px] tracking-widest relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-20 mb-16 lg:mb-20">
          <div className="space-y-10">
            <div>
              <a href="#" className="text-2xl font-black tracking-tighter text-primary block mb-4 hover-target">
                NEX<span className="text-accent">MOTION</span>
              </a>
              <p className="max-w-xs text-muted uppercase leading-relaxed text-[9px] border-l border-border pl-4 font-semibold">
                Industrial Automation
                <br />
                Robotics · AI Vision
                <br />
                Smart Factory
              </p>
            </div>
            <div className="text-primary text-sm font-bold tracking-tight font-sans">
              생산 현장의 다음 움직임을 설계합니다.
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-16 uppercase font-semibold">
            {FOOTER_LINKS.map((group) => (
              <div className="space-y-4" key={group.title}>
                <h5 className="text-primary mb-6 border-b border-border pb-2 inline-block">{group.title}</h5>
                {group.links.map((link) => (
                  <a href="#" className="block hover:text-accent transition-colors hover-target" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between pt-10 border-t border-border gap-6 text-[9px] font-semibold">
          <div className="space-y-2">
            <p className="text-muted">© 2026 NEXMOTION CO., LTD. ALL RIGHTS RESERVED.</p>
            <p className="text-accent">INDUSTRIAL AUTOMATION ARCHITECTURE V4.02</p>
          </div>
          <div className="md:text-right space-y-2 text-muted">
            <p>HEADQUARTERS: SEOUL, KOREA</p>
            <p>SUPPORT: CONTACT@NEXMOTION.COM</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
