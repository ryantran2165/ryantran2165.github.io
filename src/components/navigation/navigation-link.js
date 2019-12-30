import React from "react";
import PropTypes from "prop-types";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

const NavigationLink = ({ to, text }) => {
  return (
    <Nav.Link as="div">
      <Link
        activeClass="active-link"
        to={to}
        smooth="easeInOutQuint"
        offset={-80}
        duration={1000}
        spy={true}
      >
        {text}
      </Link>
    </Nav.Link>
  );
};

NavigationLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string
};

export default NavigationLink;
