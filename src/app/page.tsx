import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SpiderMan from "./components/SpiderMan";

export default function Home() {
  return (
    <>
      {/* CRT scanline overlay */}
      <div
        aria-hidden="true"
        className="scanlines pointer-events-none fixed inset-0 z-50"
      />

      {/* Easter egg: 8-bit Spider-Man hanging from the top */}
      <SpiderMan />

      <div className="mx-auto max-w-[1180px] px-3 pb-10 pt-3 md:px-6 md:pb-14 md:pt-5">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
