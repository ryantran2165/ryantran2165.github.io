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
    this.watchForHover();
  }

  // Disable hover for touch devices
  watchForHover = () => {
    let hasHoverClass = false;
    let container = document.body;
    let lastTouchTime = 0;

    const enableHover = () => {
      if (new Date() - lastTouchTime < 500 || hasHoverClass) {
        return;
      }
      container.className += " hasHover";
      hasHoverClass = true;
    };

    const disableHover = () => {
      if (!hasHoverClass) {
        return;
      }
      container.className = container.className.replace(" hasHover", "");
      hasHoverClass = false;
    };

    const updateLastTouchTime = () => {
      lastTouchTime = new Date();
    };

    document.addEventListener("touchstart", updateLastTouchTime, true);
    document.addEventListener("touchstart", disableHover, true);
    document.addEventListener("mousemove", enableHover, true);

    enableHover();
  };

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
