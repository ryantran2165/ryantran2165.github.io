import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="social-icon-container">
        <FontAwesomeIcon className="social-icon" icon={icon} />
      </div>
    </a>
  );
};

SocialIcon.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.object,
};

export default SocialIcon;
