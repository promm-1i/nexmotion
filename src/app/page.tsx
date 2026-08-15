import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import Products from "@/components/sections/Products";
import Industries from "@/components/sections/Industries";
import Evolution from "@/components/sections/Evolution";
import CaseStudies from "@/components/sections/CaseStudies";
import Technology from "@/components/sections/Technology";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <div id="scroll-progress" />
      <div className="scanlines" />
      <div className="cursor-ring hidden lg:block" id="cursor-ring" />
      <div className="cursor-dot hidden lg:block" id="cursor-dot" />

      <Header />

      <main>
        <Hero />
        <About />
        <Solutions />
        <Products />
        <Industries />
        <Evolution />
        <CaseStudies />
        <Technology />
        <Process />
        <Contact />
      </main>

      <Footer />

      <SiteEffects />
    </>
  );
}
