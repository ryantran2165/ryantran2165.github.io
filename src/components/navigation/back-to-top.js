import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-scroll";
import { NAV_DURATION, NAV_OFFSET, SECTIONS } from "../../App";

class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingBackToTop: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // Show/hide back to top button
    this.setState({ showingBackToTop: window.pageYOffset > 0 });
  };

  render() {
    return (
      <Link to={SECTIONS[0]} smooth="easeInOutQuint" offset={NAV_OFFSET} duration={NAV_DURATION}>
        <div
          id="back-to-top"
          className={`icon-button ${this.state.showingBackToTop ? "show" : "hide"}`}
        >
          <FontAwesomeIcon icon={faAngleDoubleUp} className="icon-button-fa" />
        </div>
      </Link>
    );
  }
}

export default BackToTop;
