import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterIcon = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="social-icon-container">
        <FontAwesomeIcon icon={icon} className="social-icon" />
      </div>
    </a>
  );
};

FooterIcon.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.object
};

export default FooterIcon;
