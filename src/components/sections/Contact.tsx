"use client";

import { useState, type FormEvent } from "react";
import Brackets from "@/components/Brackets";

const INDUSTRY_OPTIONS = ["산업 분야 선택", "자동차", "반도체", "물류", "식품", "배터리", "기타"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-base-alt relative border-t border-border">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        <div className="reveal">
          <div className="flex items-center gap-3 text-accent font-mono text-xs tracking-widest mb-6 font-semibold">
            <span className="decode-text" data-value="08. CONSULTATION">
              08. CONSULTATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-primary mb-10 leading-[1.1] tracking-tight">
            당신의 생산라인을
            <br />
            분석해드립니다
          </h2>
          <p className="text-muted text-base sm:text-lg font-normal leading-relaxed mb-12 border-l border-border pl-6">
            반복 작업, 품질 편차, 인력 부담이 있는 공정이라면 넥스모션이 자동화
            가능성을 진단해드립니다. 현장의 조건을 바탕으로 최적의 전략을
            제안합니다.
          </p>

          <div className="p-8 bg-surface border border-border relative spotlight-card group shadow-sm">
            <div className="absolute left-0 top-0 w-1 h-full bg-accent shadow-[0_0_8px_rgba(230,30,42,0.3)]" />
            <div className="spotlight-content">
              <i className="ph ph-quotes text-3xl text-accent/50 mb-4 block" />
              <p className="text-primary leading-relaxed font-medium">
                &quot;넥스모션은 고객의 생산 환경과 목표를 먼저 이해합니다. 문의
                내용을 남겨주시면 담당 엔지니어가 검토 후 안내드립니다.&quot;
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="tech-bracket bg-transparent border border-border text-primary px-6 py-3 font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover-target hover:border-accent hover:text-accent transition-colors">
                  <Brackets />
                  <i className="ph ph-file-pdf text-lg" /> 회사소개서 다운로드
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface p-6 sm:p-10 border border-border spotlight-card reveal delay-200 shadow-sm">
          <div className="spotlight-content">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
              <span className="font-mono text-[10px] text-accent tracking-widest font-semibold">SECURE_CONNECTION</span>
              <div className="flex gap-1">
                <span className="w-1 h-3 bg-accent animate-pulse" />
                <span className="w-1 h-3 bg-accent animate-pulse delay-75" />
                <span className="w-1 h-3 bg-accent animate-pulse delay-150" />
              </div>
            </div>

            {submitted ? (
              <div className="py-16 text-center">
                <i className="ph ph-check-circle text-5xl text-accent mb-6 block" />
                <h4 className="text-xl font-bold text-primary mb-3">문의가 접수되었습니다</h4>
                <p className="text-muted text-sm">담당 엔지니어가 내용을 확인 후 빠르게 연락드리겠습니다.</p>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="input-group flex flex-col gap-2">
                    <label className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest transition-colors">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="회사명"
                      required
                      className="w-full bg-transparent border-b border-border py-2 text-primary outline-none text-sm placeholder:text-muted/60 hover-target transition-colors"
                    />
                    <div className="input-line" />
                  </div>
                  <div className="input-group flex flex-col gap-2">
                    <label className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest transition-colors">Name</label>
                    <input
                      type="text"
                      placeholder="담당자명"
                      required
                      className="w-full bg-transparent border-b border-border py-2 text-primary outline-none text-sm placeholder:text-muted/60 hover-target transition-colors"
                    />
                    <div className="input-line" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="input-group flex flex-col gap-2">
                    <label className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest transition-colors">Contact</label>
                    <input
                      type="text"
                      placeholder="연락처"
                      required
                      className="w-full bg-transparent border-b border-border py-2 text-primary outline-none text-sm placeholder:text-muted/60 hover-target transition-colors"
                    />
                    <div className="input-line" />
                  </div>
                  <div className="input-group flex flex-col gap-2">
                    <label className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest transition-colors">Email</label>
                    <input
                      type="email"
                      placeholder="이메일"
                      required
                      className="w-full bg-transparent border-b border-border py-2 text-primary outline-none text-sm placeholder:text-muted/60 hover-target transition-colors"
                    />
                    <div className="input-line" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="input-group flex flex-col gap-2 relative">
                    <label className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest transition-colors">Industry Area</label>
                    <select
                      defaultValue={INDUSTRY_OPTIONS[0]}
                      className="w-full bg-transparent border-b border-border py-2 text-primary outline-none text-sm appearance-none hover-target font-medium"
                    >
                      {INDUSTRY_OPTIONS.map((opt) => (
                        <option className="bg-surface text-primary" key={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <i className="ph ph-caret-down absolute right-0 bottom-3 text-muted pointer-events-none" />
                    <div className="input-line" />
                  </div>
                  <div className="input-group flex flex-col gap-2">
                    <label className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest transition-colors">Target Timeline</label>
                    <input
                      type="text"
                      placeholder="예상 도입 시기"
                      className="w-full bg-transparent border-b border-border py-2 text-primary outline-none text-sm placeholder:text-muted/60 hover-target transition-colors"
                    />
                    <div className="input-line" />
                  </div>
                </div>
                <div className="input-group flex flex-col gap-2">
                  <label className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest transition-colors">Message</label>
                  <textarea
                    placeholder="자동화가 필요한 공정 및 문의 내용"
                    rows={4}
                    className="w-full bg-surface border border-border p-4 text-primary outline-none text-sm placeholder:text-muted/60 hover-target resize-none mt-2 rounded-sm focus:border-transparent transition-colors"
                  />
                  <div className="input-line" />
                </div>
                <button
                  type="submit"
                  className="tech-bracket w-full bg-accent text-white py-5 font-black text-sm uppercase tracking-[0.2em] hover-target hover:bg-primary transition-colors shadow-accent-glow mt-4"
                >
                  <Brackets />
                  프로젝트 문의하기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
