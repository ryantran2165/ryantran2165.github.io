import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

const SocialIcon = ({ href, icon }) => {
  return (
    <a className="social-icon-container" href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className="social-icon" icon={icon} />
    </a>
  );
};

SocialIcon.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.object,
};

export default SocialIcon;
