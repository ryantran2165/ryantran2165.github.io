import React from "react";
import PropTypes from "prop-types";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

const NavigationLink = ({ to, text, onClick }) => {
  return (
    <Nav.Link as="div">
      <Link
        activeClass="active-link"
        to={to}
        smooth="easeInOutQuint"
        offset={-60}
        duration={1000}
        spy={true}
        onClick={onClick}
      >
        {text}
      </Link>
    </Nav.Link>
  );
};

NavigationLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default NavigationLink;
