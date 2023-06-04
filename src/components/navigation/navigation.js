import React, { Component } from "react";
import { Link } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavigationLink from "./navigation-link";

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
    const scrollTop = window.pageYOffset;
    const navbarThreshold = 50;
    return scrollTop > navbarThreshold;
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
        <Navbar.Brand>
          <Link
            to="about"
            smooth="easeInOutQuint"
            offset={this.props.offset}
            duration={this.props.duration}
            onClick={this.handleClickLink}
          >
            RT
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" children={this.getNavbarToggle()} />
        <Navbar.Collapse>
          <Nav>
            <div data-aos="flip-down" data-aos-delay="200">
              <NavigationLink
                to="about"
                text="About"
                onClick={this.handleClickLink}
                offset={this.props.offset}
                duration={this.props.duration}
              />
            </div>
            <div data-aos="flip-down" data-aos-delay="400">
              <NavigationLink
                to="testimonials"
                text="Testimonials"
                onClick={this.handleClickLink}
                offset={this.props.offset}
                duration={this.props.duration}
              />
            </div>
            <div data-aos="flip-down" data-aos-delay="600">
              <NavigationLink
                to="experience"
                text="Experience"
                onClick={this.handleClickLink}
                offset={this.props.offset}
                duration={this.props.duration}
              />
            </div>
            <div data-aos="flip-down" data-aos-delay="800">
              <NavigationLink
                to="education"
                text="Education"
                onClick={this.handleClickLink}
                offset={this.props.offset}
                duration={this.props.duration}
              />
            </div>
            <div data-aos="flip-down" data-aos-delay="1000">
              <NavigationLink
                to="projects"
                text="Projects"
                onClick={this.handleClickLink}
                offset={this.props.offset}
                duration={this.props.duration}
              />
            </div>
            <div data-aos="flip-down" data-aos-delay="1200">
              <NavigationLink
                to="skills"
                text="Skills"
                onClick={this.handleClickLink}
                offset={this.props.offset}
                duration={this.props.duration}
              />
            </div>
            <div data-aos="flip-down" data-aos-delay="1400">
              <NavigationLink
                to="contact"
                text="Contact"
                onClick={this.handleClickLink}
                offset={this.props.offset}
                duration={this.props.duration}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
