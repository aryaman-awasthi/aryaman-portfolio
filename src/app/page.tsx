import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Ambient dotted-grid backdrop */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none fixed inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_top,#000_5%,transparent_70%)]"
      />

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
    </>
  );
}
