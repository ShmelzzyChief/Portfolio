import { Hero } from "../components/Hero";
import { CaseStudies } from "../components/CaseStudies";
import { About } from "../components/About";
import { AboutSection } from "../components/AboutSection";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <CaseStudies />
        <About />
        <AboutSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
