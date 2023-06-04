import React, { Component } from "react";
import { Link } from "react-scroll";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VISIBLE_THRESHOLD = 100;

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
    const scrollTop = window.pageYOffset;
    this.setState({ showingBackToTop: scrollTop > VISIBLE_THRESHOLD });
  };

  render() {
    return (
      <Link
        to="about"
        smooth="easeInOutQuint"
        offset={this.props.offset}
        duration={this.props.duration}
      >
        <div className={`back-to-top ${this.state.showingBackToTop ? "show" : "hide"} `}>
          <FontAwesomeIcon icon={faAngleDoubleUp} id="fa-back-to-top" />
        </div>
      </Link>
    );
  }
}

export default BackToTop;
