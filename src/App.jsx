import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/skills";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <Project />
      <Contact/>
      <About />
    </>
  );
}

export default App;
