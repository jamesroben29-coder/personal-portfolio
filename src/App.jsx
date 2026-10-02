import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <ScrollReveal>
          <Home />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <Education />
        </ScrollReveal>

        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        <ScrollReveal>
          <Learning />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer/>
    </>
  );
}

export default App;
