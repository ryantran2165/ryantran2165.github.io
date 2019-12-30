import React, { Component } from "react";
import { Link } from "react-scroll";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingBackToTop: false
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
    const scrollTop = window.pageYOffset;
    const visibleThreshold = 100;
    this.setState({ showingBackToTop: scrollTop > visibleThreshold });
  };

  render() {
    return (
      <Link to="about" smooth="easeInOutQuint" offset={-90} duration={1000}>
        <div
          className={`back-to-top ${
            this.state.showingBackToTop ? "show" : "hide"
          } `}
        >
          <FontAwesomeIcon icon={faAngleDoubleUp} id="fa-back-to-top" />
        </div>
      </Link>
    );
  }
}

export default BackToTop;
