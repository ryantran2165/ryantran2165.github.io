import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "./components/navigation/navigation";
import About from "./components/about/about";
import Testimonials from "./components/testimonials/testimonials";
import Education from "./components/education/education";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import BackToTop from "./components/navigation/back-to-top";
import Preloader from "./components/etc/preloader";

const AOS_DURATION = 1000;
const NAV_DURATION = 1000;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
  }

  componentDidMount() {
    AOS.init({ duration: AOS_DURATION, once: true });
    this.watchForHover();

    // Calculate navigation offset
    const h1 = document.querySelector("h1");
    const lineHeightStr = window.getComputedStyle(h1).lineHeight;
    const lineHeight = parseInt(
      lineHeightStr.substring(0, lineHeightStr.length - 2)
    );
    const style = window.getComputedStyle(document.getElementById("about"));
    const padding = parseInt(
      style.paddingBottom.substring(0, style.paddingBottom.length - 2)
    );
    this.setState({ offset: -(lineHeight + padding / 2) });
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
        <Navigation offset={this.state.offset} duration={NAV_DURATION} />
        <About />
        <Testimonials />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <BackToTop offset={this.state.offset} duration={NAV_DURATION} />
        <Preloader />
      </div>
    );
  }
}

export default App;
