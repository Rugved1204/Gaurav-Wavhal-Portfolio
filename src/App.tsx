import ThemeToggle from "./components/ui/ThemeToggle";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import FloatingElements from "./components/FloatingElements";
import Loader from "./components/Loader";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Portfolio from "./components/sections/Portfolio";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="relative">
      <Loader />
      <ThemeToggle />
      <Navbar />
      <Cursor />
      <FloatingElements />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
