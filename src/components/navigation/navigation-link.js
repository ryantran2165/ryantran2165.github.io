import PropTypes from "prop-types";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

const NavigationLink = ({ to, text, onClick, offset, duration }) => {
  return (
    <Nav.Link as="div">
      <Link
        activeClass="active-link"
        to={to}
        smooth="easeInOutQuint"
        offset={offset}
        duration={duration}
        spy={true}
        isDynamic={true}
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
  onClick: PropTypes.func,
};

export default NavigationLink;
