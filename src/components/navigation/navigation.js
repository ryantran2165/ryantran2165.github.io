import React, { Component } from "react";
import { Link } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavigationLink from "./navigation-link";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarReduced: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const navbarThreshold = 50;
    this.setState({ navbarReduced: scrollTop > navbarThreshold });
  };

  getNavbarToggle = () => {
    return (
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };

  render() {
    return (
      <Navbar
        fixed="top"
        expand="md"
        variant="custom"
        className={`${this.state.navbarReduced ? "navbar-reduce" : ""}`}
      >
        <Navbar.Brand>
          <Link to="about" smooth="easeInOutQuint" offset={-80} duration={1000}>
            RT
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar"
          children={this.getNavbarToggle()}
        />
        <Navbar.Collapse>
          <Nav>
            <div data-aos="flip-down" data-aos-delay="200">
              <NavigationLink to="about" text="About" />
            </div>
            <div data-aos="flip-down" data-aos-delay="400">
              <NavigationLink to="testimonials" text="Testimonials" />
            </div>
            <div data-aos="flip-down" data-aos-delay="600">
              <NavigationLink to="projects" text="Projects" />
            </div>
            <div data-aos="flip-down" data-aos-delay="800">
              <NavigationLink to="skills" text="Skills" />
            </div>
            <div data-aos="flip-down" data-aos-delay="1000">
              <NavigationLink to="contact" text="Contact" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
