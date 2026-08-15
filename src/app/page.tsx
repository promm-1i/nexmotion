import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import Products from "@/components/sections/Products";
import Industries from "@/components/sections/Industries";
import CaseStudies from "@/components/sections/CaseStudies";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <div id="scroll-progress" />

      <Header />

      <main>
        <Hero />
        <About />
        <Solutions />
        <Products />
        <Industries />
        <CaseStudies />
        <Process />
        <Contact />
      </main>

      <Footer />

      <SiteEffects />
    </>
  );
}
