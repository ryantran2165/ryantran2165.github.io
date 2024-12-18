import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import { NAV_DURATION, NAV_OFFSET } from "../../App";
import NavigationLink from "./navigation-link";

const NAVBAR_REDUCE_THRESHOLD = 50;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarReduced: false,
      navbarExpanded: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      navbarReduced: this.state.navbarExpanded || this.shouldNavbarReduce(),
    });
  };

  shouldNavbarReduce = () => {
    return window.pageYOffset > NAVBAR_REDUCE_THRESHOLD;
  };

  getNavbarToggle = () => {
    return (
      <div>
        <span className={`${this.state.navbarReduced ? "span-reduce" : ""}`}></span>
        <span className={`${this.state.navbarReduced ? "span-reduce" : ""}`}></span>
        <span className={`${this.state.navbarReduced ? "span-reduce" : ""}`}></span>
      </div>
    );
  };

  handleToggleNavbar = (expanded) => {
    this.setState({
      navbarReduced: !this.state.navbarReduced || this.shouldNavbarReduce(),
      navbarExpanded: expanded,
    });
  };

  handleClickLink = (e) => {
    e.target.blur();
    this.setState({
      navbarReduced: this.shouldNavbarReduce(),
      navbarExpanded: false,
    });
  };

  render() {
    return (
      <Navbar
        id="navbar"
        fixed="top"
        expand="md"
        variant="custom"
        className={`${this.state.navbarReduced ? "navbar-reduce" : ""}`}
        onToggle={this.handleToggleNavbar}
        expanded={this.state.navbarExpanded}
      >
        <div data-aos="fade-in" data-aos-delay="200">
          <Navbar.Brand>
            <Link
              to="about"
              smooth="easeInOutQuint"
              offset={NAV_OFFSET}
              duration={NAV_DURATION}
              onClick={this.handleClickLink}
              data-aos="fade-in"
              data-aos-delay="200"
            >
              RT
            </Link>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbar" children={this.getNavbarToggle()} />
        <Navbar.Collapse>
          <Nav>
            <div data-aos="fade-in" data-aos-delay="400">
              <NavigationLink
                to="about"
                text="About"
                onClick={this.handleClickLink}
                offset={NAV_OFFSET}
                duration={NAV_DURATION}
              />
            </div>
            <div data-aos="fade-in" data-aos-delay="600">
              <NavigationLink
                to="testimonials"
                text="Testimonials"
                onClick={this.handleClickLink}
                offset={NAV_OFFSET}
                duration={NAV_DURATION}
              />
            </div>
            <div data-aos="fade-in" data-aos-delay="800">
              <NavigationLink
                to="experience"
                text="Experience"
                onClick={this.handleClickLink}
                offset={NAV_OFFSET}
                duration={NAV_DURATION}
              />
            </div>
            <div data-aos="fade-in" data-aos-delay="1000">
              <NavigationLink
                to="education"
                text="Education"
                onClick={this.handleClickLink}
                offset={NAV_OFFSET}
                duration={NAV_DURATION}
              />
            </div>
            <div data-aos="fade-in" data-aos-delay="1200">
              <NavigationLink
                to="projects"
                text="Projects"
                onClick={this.handleClickLink}
                offset={NAV_OFFSET}
                duration={NAV_DURATION}
              />
            </div>
            <div data-aos="fade-in" data-aos-delay="1400">
              <NavigationLink
                to="skills"
                text="Skills"
                onClick={this.handleClickLink}
                offset={NAV_OFFSET}
                duration={NAV_DURATION}
              />
            </div>
            <div data-aos="fade-in" data-aos-delay="1600">
              <NavigationLink
                to="contact"
                text="Contact"
                onClick={this.handleClickLink}
                offset={NAV_OFFSET}
                duration={NAV_DURATION}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
