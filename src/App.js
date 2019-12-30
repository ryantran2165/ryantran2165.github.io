import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "./components/navigation/navigation";
import About from "./components/about/about";
import Testimonials from "./components/testimonials/testimonials";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import BackToTop from "./components/back-to-top";
import Preloader from "./components/preloader";

class App extends Component {
  componentDidMount() {
    AOS.init({ duration: 1000, once: true });
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <About />
        <Testimonials />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <BackToTop />
        <Preloader />
      </div>
    );
  }
}

export default App;
