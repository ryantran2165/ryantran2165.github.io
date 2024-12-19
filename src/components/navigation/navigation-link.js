import PropTypes from "prop-types";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

const NavigationLink = ({ to, text, onClick, offset, duration, active }) => {
  return (
    <Nav.Link as="div">
      <Link
        to={to}
        smooth="easeInOutQuint"
        offset={offset}
        duration={duration}
        onClick={onClick}
        className={active ? "active-link" : ""}
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
  offset: PropTypes.number,
  duration: PropTypes.number,
  active: PropTypes.bool,
};

export default NavigationLink;
