import { Link } from 'react-router-dom';
import './home.css';
import Hero from "../../components/Hero";
import About from "../../components/About";
import Services from "../../components/Services";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";

function Home() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
    </div>
  );
}

export default Home;