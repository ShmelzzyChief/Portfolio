import { Hero } from "../components/Hero";
import { CaseStudies } from "../components/CaseStudies";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
