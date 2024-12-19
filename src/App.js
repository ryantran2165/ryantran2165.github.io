import AOS from "aos";
import "aos/dist/aos.css";
import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Waypoint } from "react-waypoint";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Education from "./components/education/education";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import BackToTop from "./components/navigation/back-to-top";
import Navigation from "./components/navigation/navigation";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Testimonials from "./components/testimonials/testimonials";

const AOS_DURATION = 1000;
const MAX_TOUCH_DIFF = 500;
const WAYPOINT_OFFSET = "73px";
export const SECTIONS = [
  "About",
  "Testimonials",
  "Experience",
  "Education",
  "Projects",
  "Skills",
  "Contact",
];
export const MOBILE_MAX_WIDTH = 576;
export const NAV_OFFSET = -50;
export const NAV_DURATION = 1000;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: null,
    };
  }

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

  setSection = (previousPosition, currentPosition, section) => {
    if (previousPosition === undefined && this.state.section === null) {
      this.setState({ section: section });
    } else if (previousPosition === Waypoint.above && currentPosition === Waypoint.inside) {
      this.setState({ section: section });
    } else if (previousPosition === Waypoint.inside && currentPosition === Waypoint.above) {
      this.setState({ section: SECTIONS[SECTIONS.indexOf(section) + 1] });
    }
  };

  render() {
    return (
      <ParallaxProvider>
        <div className="App">
          <Navigation section={this.state.section} />
          {SECTIONS.map((section) => (
            <Waypoint
              key={section}
              topOffset={WAYPOINT_OFFSET}
              onEnter={({ previousPosition, currentPosition }) =>
                this.setSection(previousPosition, currentPosition, section)
              }
              onLeave={({ previousPosition, currentPosition }) =>
                this.setSection(previousPosition, currentPosition, section)
              }
            >
              <section id={section}>
                {section === SECTIONS[0] && <About title={section} />}
                {section === SECTIONS[1] && <Testimonials title={section} />}
                {section === SECTIONS[2] && <Experience title={section} />}
                {section === SECTIONS[3] && <Education title={section} />}
                {section === SECTIONS[4] && <Projects title={section} />}
                {section === SECTIONS[5] && <Skills title={section} />}
                {section === SECTIONS[6] && <Contact title={section} />}
              </section>
            </Waypoint>
          ))}
          <Footer />
          <BackToTop />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
