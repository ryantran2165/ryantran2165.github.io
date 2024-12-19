import AOS from "aos";
import "aos/dist/aos.css";
import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Education from "./components/education/education";
import Experience from "./components/experience/experience";
import BackToTop from "./components/navigation/back-to-top";
import Navigation from "./components/navigation/navigation";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Testimonials from "./components/testimonials/testimonials";

const AOS_DURATION = 1000;
const MAX_TOUCH_DIFF = 500;
export const MOBILE_MAX_WIDTH = 576;
export const NAV_OFFSET = -35;
export const NAV_DURATION = 1000;

class App extends Component {
  componentDidMount() {
    AOS.init({ duration: AOS_DURATION, once: true });
    this.watchForHover();
  }

  // Disable hover for touch devices
  watchForHover = () => {
    let hasHoverClass = false;
    let container = document.body;
    let lastTouchTime = 0;

    const enableHover = () => {
      if (new Date() - lastTouchTime < MAX_TOUCH_DIFF || hasHoverClass) {
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
      <ParallaxProvider>
        <div className="App">
          <Navigation />
          <About />
          <Testimonials />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
          <BackToTop />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
