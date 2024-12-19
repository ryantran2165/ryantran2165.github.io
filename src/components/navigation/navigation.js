import PropTypes from "prop-types";
import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import { NAV_DURATION, NAV_OFFSET, SECTIONS } from "../../App";
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
              to={SECTIONS[0]}
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
            {SECTIONS.map((section, idx) => (
              <div key={`${section}-link`} data-aos="fade-in" data-aos-delay={400 + 200 * idx}>
                <NavigationLink
                  to={section}
                  text={section}
                  onClick={this.handleClickLink}
                  offset={NAV_OFFSET}
                  duration={NAV_DURATION}
                  active={this.props.section === section}
                />
              </div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Navigation.propTypes = {
  section: PropTypes.string,
};

export default Navigation;
