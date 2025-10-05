import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Shared/Footer";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
